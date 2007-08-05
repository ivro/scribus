/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
*   Copyright (C) 2004 by Craig Bradney                                   *
*   cbradney@zip.com.au                                                   *
*   Copyright (C) 2005 by Petr Vanek                                      *
*   petr@yarpen.cz                                                        *
*                                                                         *
*   This program is free software; you can redistribute it and/or modify  *
*   it under the terms of the GNU General Public License as published by  *
*   the Free Software Foundation; either version 2 of the License, or     *
*   (at your option) any later version.                                   *
*                                                                         *
*   This program is distributed in the hope that it will be useful,       *
*   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
*   GNU General Public License for more details.                          *
*                                                                         *
*   You should have received a copy of the GNU General Public License     *
*   along with this program; if not, write to the                         *
*   Free Software Foundation, Inc.,                                       *
*   59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.             *
***************************************************************************/

#include "helpbrowser.h"

#include <QAction>
#include <QDir>
#include <QDomDocument>
#include <QFileDialog>
#include <QFileInfo>
#include <QHeaderView>
#include <QInputDialog>
#include <QItemSelectionModel>
#include <QList>
#include <QMessageBox>
#include <QModelIndex>
#include <QModelIndexList>
#include <QPainter>
#include <QPrinter>
#include <QProcess>
#include <QPushButton>
#include <QString>
#include <QStandardItem>
#include <QTextEdit>
#include <QTreeView>
#include <QXmlDefaultHandler>

#include "prefsmanager.h"
#include "util_icon.h"

#if defined(_WIN32)
#include <windows.h>
#include <shellapi.h>
#endif

/*! \brief XML parsef for documantation history.
This is small helper class which reads saved bookmarks configuration
from ~/.scribus/doc/history.xml file.
The reference to historyBrowser is a reference to the dialog.
\author Petr Vanek <petr@yarpen.cz>
*/
class HistoryParser2 : public QXmlDefaultHandler
{
	public:
		HelpBrowser *helpBrowser;

		bool startDocument()
		{
			return true;
		}

		bool startElement(const QString&, const QString&, const QString& qName, const QXmlAttributes& attrs)
		{
			if (qName == "item")
			{
				struct histd2 his;
				his.title = attrs.value(0);
				his.url = attrs.value(1);
				helpBrowser->mHistory[helpBrowser->histMenu->addAction(his.title)] = his;
			}
			return true;
		}

		bool endElement(const QString&, const QString&, const QString&)
		{
			return true;
		}
};

/*! \brief XML parsef for documantation bookmarks.
This is small helper class which reads saved bookmarks configuration
from ~/.scribus/doc/bookmarks.xml file.
The reference to QListView *view is a reference to the list view with bookmarks
\author Petr Vanek <petr@yarpen.cz>
*/
class BookmarkParser2 : public QXmlDefaultHandler
{
	public:
		QTreeWidget* view;
		QMap<QString, QString>* quickHelpIndex;
		QMap<QString, QPair<QString, QString> >* bookmarkIndex;

		bool startDocument()
		{
			return true;
		}

		bool startElement(const QString&, const QString&, const QString& qName, const QXmlAttributes& attrs)
		{
			if (qName == "item")
			{
				if (quickHelpIndex->contains(attrs.value(1)))
				{
					bookmarkIndex->insert(attrs.value(0), qMakePair(attrs.value(1), attrs.value(2)));
					view->addTopLevelItem(new QTreeWidgetItem(view, QStringList() << attrs.value(0)));
				}
			}
			return true;
		}

		bool endElement(const QString&, const QString&, const QString&)
		{
			return true;
		}
};

HelpBrowser::HelpBrowser(QWidget* parent)
	: QMainWindow( parent )
{
	setupUi(this);
}

HelpBrowser::HelpBrowser( QWidget* parent, const QString& /*caption*/, const QString& guiLanguage, const QString& jumpToSection, const QString& jumpToFile)
	: QMainWindow( parent )
{
	setupUi(this);
	setupLocalUI();
	language = guiLanguage.isEmpty() ? QString("en") : guiLanguage.left(2);
	languageChange();
	menuModel=NULL;
	loadMenu();
	readBookmarks();
	readHistory();
	jumpToHelpSection(jumpToSection, jumpToFile );
}

HelpBrowser::~HelpBrowser()
{

}

void HelpBrowser::closeEvent(QCloseEvent * event)
{
	delete menuModel;

	// no need to delete child widgets, Qt does it all for us
	// bookmarks
	QFile bookFile(bookmarkFile());
	if (bookFile.open(QIODevice::WriteOnly))
	{
		QTextStream stream(&bookFile);
		stream.setCodec("UTF-8");
		stream << "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
		stream << "<bookmarks>\n";
		QTreeWidgetItemIterator it(bookmarksView);
		while (*it) 
		{
			if (bookmarkIndex.contains((*it)->text(0)))
			{
				QString pagetitle(bookmarkIndex.value((*it)->text(0)).first);
				QString filename(bookmarkIndex.value((*it)->text(0)).second);
				stream << "\t<item title=\"" << (*it)->text(0) << "\" pagetitle=\"" << pagetitle << "\" url=\"" << filename << "\" />\n";
			}
			++it;
		}
		stream << "</bookmarks>\n";
		bookFile.close();
	}
	// history
  	QFile histFile(historyFile());
	if (histFile.open(QIODevice::WriteOnly))
	{
		QTextStream stream(&histFile);
		stream.setCodec("UTF-8");
		stream << "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
		stream << "<history>\n";
		for (QMap<QAction*,histd2>::Iterator it = mHistory.begin() ; it != mHistory.end(); ++it)
			stream << "\t<item title=\"" << it.data().title << "\" url=\"" << it.data().url << "\" />\n";
		stream << "</history>\n";
		histFile.close();
	}
	// size
	prefs->set("xsize", width());
	prefs->set("ysize", height());

	emit closed();
}

void HelpBrowser::setupLocalUI()
{
	setIcon(loadIcon("AppIcon.png"));
	//Add Menus
	fileMenu=menuBar()->addMenu("");
	editMenu=menuBar()->addMenu("");
	bookMenu=menuBar()->addMenu("");
	histMenu=new QMenu(this);

	//Add Menu items
	filePrint=fileMenu->addAction(loadIcon("16/document-print.png"), "", this, SLOT(print()), Qt::CTRL+Qt::Key_P);
	fileMenu->insertSeparator();
	fileExit=fileMenu->addAction(loadIcon("exit.png"), "", this, SLOT(close()));
	editFind=editMenu->addAction(loadIcon("find.png"), "", this, SLOT(find()), Qt::CTRL+Qt::Key_F);
	editFindNext=editMenu->addAction( "", this, SLOT(findNext()), Qt::Key_F3);
	editFindPrev=editMenu->addAction( "", this, SLOT(findPrevious()), Qt::SHIFT+Qt::Key_F3);
	bookAdd=bookMenu->addAction( "", this, SLOT(bookmarkButton_clicked()), Qt::CTRL+Qt::Key_D);
	bookDel=bookMenu->addAction( "", this, SLOT(deleteBookmarkButton_clicked()));
	bookDelAll=bookMenu->addAction( "", this, SLOT(deleteAllBookmarkButton_clicked()));

	//Add Toolbar items
	goHome=toolBar->addAction(loadIcon("16/go-home.png"), "", textBrowser, SLOT(home()));
	goBack=toolBar->addAction(loadIcon("16/go-previous.png"), "", textBrowser, SLOT(backward()));
	goFwd=toolBar->addAction(loadIcon("16/go-next.png"), "", textBrowser, SLOT(forward()));
	goBack->setMenu(histMenu);
	
	listView->header()->hide();
	searchingView->header()->hide();
	bookmarksView->header()->hide();

	splitter->setResizeMode( tabWidget, QSplitter::KeepSize );
	splitter->setResizeMode( textBrowser, QSplitter::Stretch );
	// reset previous size
	prefs = PrefsManager::instance()->prefsFile->getPluginContext("helpbrowser");
	int xsize = prefs->getUInt("xsize", 640);
	int ysize = prefs->getUInt("ysize", 480);
	resize(QSize(xsize, ysize).expandedTo(minimumSizeHint()) );

	//basic ui
	connect(histMenu, SIGNAL(triggered(QAction*)), this, SLOT(histChosen(QAction*)));
	// searching
	connect(searchingEdit, SIGNAL(returnPressed()), this, SLOT(searchingButton_clicked()));
	connect(searchingButton, SIGNAL(clicked()), this, SLOT(searchingButton_clicked()));
	connect(searchingView, SIGNAL(itemClicked( QTreeWidgetItem *, int)), this, SLOT(itemSearchSelected(QTreeWidgetItem *, int)));
	// bookmarks
	connect(bookmarkButton, SIGNAL(clicked()), this, SLOT(bookmarkButton_clicked()));
	connect(deleteBookmarkButton, SIGNAL(clicked()), this, SLOT(deleteBookmarkButton_clicked()));
	connect(deleteAllBookmarkButton, SIGNAL(clicked()), this, SLOT(deleteAllBookmarkButton_clicked()));
	connect(bookmarksView, SIGNAL(itemClicked( QTreeWidgetItem *, int)), this, SLOT(itemBookmarkSelected(QTreeWidgetItem *, int)));
	// links hoover
	connect(textBrowser, SIGNAL(overLink(const QString &)), this, SLOT(showLinkContents(const QString &)));
	
	languageChange();
}

void HelpBrowser::showLinkContents(const QString &link)
{
	statusBar()->showMessage(link);
}

void HelpBrowser::languageChange()
{
	setCaption( tr( "Scribus Online Help" ) );
	noHelpMsg=tr("Sorry, no manual available! Please see: http://docs.scribus.net for updated docs\nand www.scribus.net for downloads.");
	
	fileMenu->setTitle(tr("&File"));
	editMenu->setTitle(tr("&Edit"));
	bookMenu->setTitle(tr("&Bookmarks"));
	
	filePrint->setText(tr("&Print..."));
	fileExit->setText(tr("&Quit"));
	editFind->setText(tr("&Find..."));
	editFindNext->setText(tr("Find &Next"));
	editFindPrev->setText(tr("Find &Previous"));
	bookAdd->setText(tr("&Add Bookmark"));
	bookDel->setText(tr("&Delete"));
	bookDelAll->setText(tr("D&elete All"));
	Ui::HelpBrowser::retranslateUi(this);
}

void HelpBrowser::print()
{
	QPrinter printer;
	printer.setFullPage(true);
	if (!printer.setup(this))
		return;
 	textBrowser->print(&printer);
}

void HelpBrowser::searchingButton_clicked()
{
// 	searchingView->clear();
	// root files
	QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
	searchingInDirectory(QDir::convertSeparators(ScPaths::instance().docDir() + language + "/"));
	QApplication::restoreOverrideCursor();
}

void HelpBrowser::searchingInDirectory(const QString& aDir)
{
	QDir dir(QDir::convertSeparators(aDir + "/"));
	QStringList lst = dir.entryList("*.html");
	for (QStringList::Iterator it = lst.begin(); it != lst.end(); ++it)
	{
		QString fname(aDir + (*it));
		QFile f(fname);
		if (f.open(QIODevice::ReadOnly))
		{
			QTextStream stream(&f);
			QString str = stream.readAll();
			int cnt = str.count(searchingEdit->text(), Qt::CaseInsensitive);
			if (cnt > 0)
			{
				QString fullname = fname;
				QString toFind(fname.remove(QDir::convertSeparators(ScPaths::instance().docDir()+language + "/")));
				QMapIterator<QString, QString> i(quickHelpIndex);
				while (i.hasNext()) 
				{
					i.next();
					if (i.value()==toFind)
						searchingView->addTopLevelItem(new QTreeWidgetItem(searchingView, QStringList() << i.key()));
				}
			}
			f.close();
		}
	}
	// get dirs - ugly recursion
	QStringList dst = dir.entryList("*", QDir::Dirs);
	for (QStringList::Iterator it = dst.begin(); it != dst.end(); ++it)
		if ((*it)!="." && (*it)!="..")
			searchingInDirectory(QDir::convertSeparators(aDir + QString((*it)) + "/"));
}

void HelpBrowser::find()
{
	findText = QInputDialog::getText( tr("Find"), tr("Search Term:"), QLineEdit::Normal, findText, 0, this);
	if (findText.isNull())
		return;
	findNext();
}

void HelpBrowser::findNext()
{
	if (findText.isNull())
	{
		find();
		return;
	}
	// find it. finally
	textBrowser->find(findText, 0);
}

void HelpBrowser::findPrevious()
{
	if (findText.isNull())
	{
		find();
		return;
	}
	// find it. finally
	textBrowser->find(findText);
}

void HelpBrowser::bookmarkButton_clicked()
{
	QString title = textBrowser->documentTitle();
	QString fname(QDir::cleanDirPath(textBrowser->source()));
 	title = QInputDialog::getText( tr("New Bookmark"), tr("New Bookmark's Title:"), QLineEdit::Normal, title, 0, this);
	// user cancel
 	if (title.isNull())
 		return;
	QString toFind(fname.remove(QDir::convertSeparators(ScPaths::instance().docDir()+language + "/")));
	QMapIterator<QString, QString> i(quickHelpIndex);
	while (i.hasNext()) 
	{
		i.next();
		if (i.value()==toFind)
		{
			bookmarkIndex.insert(title, qMakePair(i.key(), i.value()));
			bookmarksView->addTopLevelItem(new QTreeWidgetItem(bookmarksView, QStringList() << title));
		}
	}
}

void HelpBrowser::deleteBookmarkButton_clicked()
{
	QTreeWidgetItem *twi=bookmarksView->currentItem();
	if (bookmarkIndex.contains(twi->text(0)))
		bookmarkIndex.remove(twi->text(0));
	delete twi;
}

void HelpBrowser::deleteAllBookmarkButton_clicked()
{
	bookmarkIndex.clear();
 	bookmarksView->clear();
}

void HelpBrowser::histChosen(QAction* i)
{
	if (mHistory.contains(i))
		textBrowser->setSource( QUrl::fromLocalFile(mHistory[i].url) );
}

void HelpBrowser::jumpToHelpSection(const QString& jumpToSection, const QString& jumpToFile)
{
	QString toLoad;
	bool noDocs=false;

	if (jumpToFile.isEmpty())
	{
		toLoad = ScPaths::instance().docDir() + language + "/"; //clean this later to handle 5 char locales
		if (jumpToSection.isEmpty())
		{
			QModelIndex index=menuModel->index(0,1);
			if (index.isValid())
			{
				listView->selectionModel()->select(index, QItemSelectionModel::ClearAndSelect);
				toLoad += menuModel->data(index, Qt::DisplayRole).toString();
			}
			else
				noDocs=true;
		}
		else if (jumpToSection=="scripter")
		{
 			toLoad+="scripter1.html";
		}
	}
	else
		toLoad=jumpToFile;

	if (!noDocs)
		loadHelp(toLoad);
	else
		textBrowser->setText("<h2>"+ noHelpMsg +"</h2>");
}

void HelpBrowser::loadHelp(const QString& filename)
{
	struct histd2 his;
	bool Avail = true;
	QString toLoad;
	QFileInfo fi;
	fi = QFileInfo(filename);
	if (fi.fileName().length()>0)
	{
		if (fi.exists())
			toLoad=filename;
		else
		{
			toLoad = QDir::convertSeparators(ScPaths::instance().docDir() + "en/index.html");
			language="en";
			fi = QFileInfo(toLoad);
			if (!fi.exists())
			{
				textBrowser->setText("<h2>"+ noHelpMsg +"</h2>");
				Avail = false;
			}
		}
	}
	else
		Avail=false;
	if (Avail)
	{
		textBrowser->setSource( QUrl::fromLocalFile(toLoad) );
		his.title = textBrowser->documentTitle();
		if (his.title.isEmpty())
			his.title = toLoad;
		his.url = toLoad;
		mHistory[histMenu->addAction(his.title)] = his;
	}
	if (mHistory.count() > 15)
	{
		QAction* first=histMenu->actions().first();
		mHistory.remove(first);
		histMenu->removeAction(first);
	}
}

void HelpBrowser::loadMenu()
{
	QString pfad = ScPaths::instance().docDir();
	QString toLoad;
	QString pfad2 = QDir::convertSeparators(pfad + language + "/menu.xml");
	QFileInfo fi = QFileInfo(pfad2);

	if (fi.exists())
		toLoad=pfad2;
	else
	{
		toLoad = QDir::convertSeparators(pfad + "en/menu.xml");
		language="en";
		fi = QFileInfo(toLoad);
		sDebug("Scribus help in your selected language does not exist, trying English. Otherwise, please visit http://docs.scribus.net.");
	}

	if (fi.exists())
	{
		if (menuModel!=NULL)
			delete menuModel;
		menuModel=new ScHelpTreeModel(toLoad, "Topic", "Location", &quickHelpIndex);
	}
	listView->setModel(menuModel);
 	listView->setSelectionMode(QAbstractItemView::SingleSelection);
 	QItemSelectionModel *selectionModel = new QItemSelectionModel(menuModel);
 	listView->setSelectionModel(selectionModel);
 	connect(listView->selectionModel(), SIGNAL(selectionChanged( const QItemSelection &, const QItemSelection &)), this, SLOT(itemSelected( const QItemSelection &, const QItemSelection &)));

	listView->setColumnHidden(1,true);

}

void HelpBrowser::readBookmarks()
{
	BookmarkParser2 handler;
	handler.view = bookmarksView;
	handler.quickHelpIndex=&quickHelpIndex;
	handler.bookmarkIndex=&bookmarkIndex;
	QFile xmlFile(bookmarkFile());
	QXmlInputSource source(xmlFile);
	QXmlSimpleReader reader;
	reader.setContentHandler(&handler);
	reader.parse(source);
}

void HelpBrowser::readHistory()
{
 	HistoryParser2 handler;
 	handler.helpBrowser = this;
 	QFile xmlFile(historyFile());
 	QXmlInputSource source(xmlFile);
 	QXmlSimpleReader reader;
 	reader.setContentHandler(&handler);
 	reader.parse(source);
}

void HelpBrowser::setText(const QString& str)
{
	textBrowser->setText(str);
}

void HelpBrowser::itemSelected(const QItemSelection & selected, const QItemSelection & deselected)
{
	Q_UNUSED(deselected);

	QModelIndex index;
	QModelIndexList items = selected.indexes();
	int i=0;
	foreach (index, items)
	{
		if (i==1) // skip 0, as this is always the rootitem, even if we are selecting the rootitem. hmm
		{
			QString filename(menuModel->data(index, Qt::DisplayRole).toString());
			if (!filename.isEmpty())
			{
				loadHelp(QDir::convertSeparators(ScPaths::instance().docDir() + language + "/" + filename));
			}
		}
		++i;
	}
}

void HelpBrowser::itemSearchSelected(QTreeWidgetItem *twi, int i)
{
	Q_UNUSED(i);
	if (!twi)
		return;
	if (quickHelpIndex.contains(twi->text(0)))
	{
		QString filename(quickHelpIndex.value(twi->text(0)));
		if (!filename.isEmpty())
		{
			loadHelp(QDir::convertSeparators(ScPaths::instance().docDir() + language + "/" + filename));
			findText = searchingEdit->text();
			findNext();
		}
	}
}

void HelpBrowser::itemBookmarkSelected(QTreeWidgetItem *twi, int i)
{
	Q_UNUSED(i);
	if (!twi)
		return;
	if (bookmarkIndex.contains(twi->text(0)))
	{
		QString filename(bookmarkIndex.value(twi->text(0)).second);
		if (!filename.isEmpty())
			loadHelp(QDir::convertSeparators(ScPaths::instance().docDir() + language + "/" + filename));
	}
}

/*! \brief Returns the name of the cfg file for bookmarks.
A helper function.
\author Petr Vanek <petr@yarpen.cz>
*/
QString HelpBrowser::bookmarkFile()
{
	QString appDataDir(ScPaths::getApplicationDataDir());
	QString fname(appDataDir + "doc/bookmarks.xml");
	if (!QFile::exists(fname))
	{
		QDir d(QDir::convertSeparators(appDataDir));
		d.mkdir("doc");
	}
	return fname;
}


/*! \brief Returns the name of the cfg file for persistent history.
A helper function.
\author Petr Vanek <petr@yarpen.cz>
*/
QString HelpBrowser::historyFile()
{
	QString appDataDir(ScPaths::getApplicationDataDir());
	QString fname(appDataDir + "doc/history.xml");
	if (!QFile::exists(fname))
	{
		QDir d(QDir::convertSeparators(appDataDir));
		d.mkdir("doc");
	}
	return fname;
}
