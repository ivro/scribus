/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/****************************************************************************
** Form implementation generated from reading ui file 'Bib.ui'
**
** Created: Sun Oct 14 19:47:56 2001
**
****************************************************************************/
#include "scrap.h"
#include "scrap.moc"
#include <qfileinfo.h>
#include <qfile.h>
#include <qurl.h>
#include <qtextstream.h>
#include <qdom.h>
#include <qfiledialog.h>
#include <qlayout.h>
#include <qmessagebox.h>
#include <qtoolbutton.h>
#include <qcursor.h>
#include "query.h"
#include "scpreview.h"
#include "prefsfile.h"
#include "util.h"
#include "commonstrings.h"
#include "prefsmanager.h"
#include "stencilreader.h"
extern QPixmap loadIcon(QString nam);
//CB TODO bring in the prefsManager instance locally here too

/* The Scrapbook View Class
 * inherited from QIconView */
BibView::BibView(QWidget* parent) : QIconView(parent)
{
	setAutoArrange(true);
	setSorting(true);
	setResizeMode(QIconView::Adjust);
	objectMap.clear();
	ScFilename = "";
}

void BibView::keyPressEvent(QKeyEvent *k)
{
	//Why doesnt this widget send Escape to the QDialog? Lets make Escape work for now anyway.
	if (k->key()==Key_Escape && k->state() == 0)
	{
		QFrame *f=dynamic_cast<QFrame *>(parent());
		if (f)
		{
			QDialog *d=dynamic_cast<QDialog *>(f->parent());
			if (d)
				d->close();
		}
	}
	else
		QIconView::keyPressEvent(k);
}

QDragObject *BibView::dragObject()
{
	QString dt = objectMap[currentItem()->text()].Data.utf8();
	QFileInfo fi(dt);
	if (fi.extension(true).lower() == "sml")
	{
		QString f = "";
		loadText(dt, &f);
		StencilReader *pre = new StencilReader();
		dt = pre->createObjects(f);
		delete pre;
	}
	else if (fi.extension(true).lower() == "sce")
	{
		QString f = "";
		loadText(dt, &f);
		dt = f;
	}
	QDragObject *dr = new QTextDrag(dt, this);
	dr->setPixmap(objectMap[currentItem()->text()].Preview);
	clearSelection();
	return dr;
}

void BibView::AddObj(QString name, QString daten, QPixmap Bild)
{
	struct Elem DrElem;
	DrElem.Data = daten;
	DrElem.Preview = Bild;
	objectMap.insert(name, DrElem);
}

void BibView::SaveContents(QString name, QString oldName)
{
	QDir d(oldName, "*.sce", QDir::Name, QDir::Files | QDir::Readable | QDir::NoSymLinks);
	if ((d.exists()) && (d.count() != 0))
	{
		for (uint dc = 0; dc < d.count(); ++dc)
		{
			QString f = "";
			if (!loadText(QDir::cleanDirPath(QDir::convertSeparators(oldName + "/" + d[dc])), &f))
				continue;
			QFile fil(QDir::cleanDirPath(QDir::convertSeparators(name + "/" + d[dc])));
			if(!fil.open(IO_WriteOnly))
				continue ;
			QTextStream s(&fil);
			s.writeRawBytes(f, f.length());
			fil.close();
			QPixmap pm;
			QFileInfo fi(QDir::cleanDirPath(QDir::convertSeparators(oldName + "/" + d[dc])));
			QFileInfo fi2(QDir::cleanDirPath(QDir::convertSeparators(fi.dirPath()+"/"+fi.baseName()+".png")));
			if (fi2.exists())
				pm.load(QDir::cleanDirPath(QDir::convertSeparators(fi.dirPath()+"/"+fi.baseName()+".png")));
			else
			{
				ScPreview *pre = new ScPreview();
				pm = pre->createPreview(f);
				delete pre;
			}
			QFileInfo fi3(QDir::cleanDirPath(QDir::convertSeparators(oldName + "/" + d[dc])));
			pm.save(QDir::cleanDirPath(QDir::convertSeparators(fi3.dirPath()+"/"+fi3.baseName()+".png")), "PNG");
		}
	}
	QDir d2(oldName, "*.sml", QDir::Name, QDir::Files | QDir::Readable | QDir::NoSymLinks);
	if ((d.exists()) && (d.count() != 0))
	{
		for (uint dc = 0; dc < d2.count(); ++dc)
		{
			QString f = "";
			if (!loadText(QDir::cleanDirPath(QDir::convertSeparators(oldName + "/" + d2[dc])), &f))
				continue;
			QFile fil(QDir::cleanDirPath(QDir::convertSeparators(name + "/" + d2[dc])));
			if(!fil.open(IO_WriteOnly))
				continue ;
			QTextStream s(&fil);
			s.writeRawBytes(f, f.length());
			fil.close();
			QPixmap pm;
			QFileInfo fi(QDir::cleanDirPath(QDir::convertSeparators(oldName + "/" + d2[dc])));
			QFileInfo fi2(QDir::cleanDirPath(QDir::convertSeparators(fi.dirPath()+"/"+fi.baseName()+".png")));
			if (fi2.exists())
				pm.load(QDir::cleanDirPath(QDir::convertSeparators(fi.dirPath()+"/"+fi.baseName()+".png")));
			else
			{
				StencilReader *pre = new StencilReader();
				pm = pre->createPreview(f);
				delete pre;
			}
			QFileInfo fi3(QDir::cleanDirPath(QDir::convertSeparators(oldName + "/" + d2[dc])));
			pm.save(QDir::cleanDirPath(QDir::convertSeparators(fi3.dirPath()+"/"+fi3.baseName()+".png")), "PNG");
		}
	}
}

void BibView::ReadOldContents(QString name, QString newName)
{
	QDomDocument docu("scridoc");
	QString f = "";
	if (!loadText(name, &f))
		return;
	QString ff = "";
	// these were corrupting the scrapbook entries, removed and works ok now, Riku
// 	if (f.startsWith("<SCRIBUSSCRAPUTF8"))
// 		ff = QString::fromUtf8(f);
// 	else
		ff = f;
	if(!docu.setContent(ff))
		return;
	QDomElement elem=docu.documentElement();
	if ((elem.tagName() != "SCRIBUSSCRAP") && (elem.tagName() != "SCRIBUSSCRAPUTF8"))
		return;
	QDomNode DOC=elem.firstChild();
	while(!DOC.isNull())
	{
		QDomElement dc=DOC.toElement();
		if (dc.tagName()=="OBJEKT")
		{
			QFile fi(QDir::cleanDirPath(QDir::convertSeparators(newName + "/" + GetAttr(&dc, "NAME") + ".sce")));
			if(!fi.open(IO_WriteOnly))
				continue ;
			QTextStream s(&fi);
			QString fn = GetAttr(&dc, "DATA");
			s.writeRawBytes(fn, fn.length());
			fi.close();
		}
		DOC=DOC.nextSibling();
	}
}

void BibView::ReadContents(QString name)
{
	clear();
	objectMap.clear();
	QString nd;
	if (name.endsWith(QDir::convertSeparators("/")))
		nd = name.left(name.length()-1);
//	QFileInfo fd(nd);
//	canWrite = fd.permission( QFileInfo::WriteUser );
// Above code is commented out because QFileInfo::permissons does not work properly
	QDir d(name, "*.sce", QDir::Name, QDir::Files | QDir::Readable | QDir::NoSymLinks);
	if ((d.exists()) && (d.count() != 0))
	{
		for (uint dc = 0; dc < d.count(); ++dc)
		{
			QString f = "";
			QPixmap pm;
			if (!loadText(QDir::cleanDirPath(QDir::convertSeparators(name + "/" + d[dc])), &f))
				continue;
			QFileInfo fi(QDir::cleanDirPath(QDir::convertSeparators(name + "/" + d[dc])));
			QFileInfo fi2(QDir::cleanDirPath(QDir::convertSeparators(fi.dirPath()+"/"+fi.baseName()+".png")));
			if (fi2.exists())
				pm.load(QDir::cleanDirPath(QDir::convertSeparators(fi.dirPath()+"/"+fi.baseName()+".png")));
			else
			{
				ScPreview *pre = new ScPreview();
				pm = pre->createPreview(f);
//				if (canWrite)
// Above code is commented out because QFileInfo::permissons does not work properly
					pm.save(QDir::cleanDirPath(QDir::convertSeparators(fi.dirPath()+"/"+fi.baseName()+".png")), "PNG");
				delete pre;
			}
			AddObj(fi.baseName(), QDir::cleanDirPath(QDir::convertSeparators(name + "/" + d[dc])), pm);
		}
	}
	QDir d2(name, "*.sml", QDir::Name, QDir::Files | QDir::Readable | QDir::NoSymLinks);
	if ((d2.exists()) && (d2.count() != 0))
	{
		for (uint dc = 0; dc < d2.count(); ++dc)
		{
			QString f = "";
			QPixmap pm;
			if (!loadText(QDir::cleanDirPath(QDir::convertSeparators(name + "/" + d2[dc])), &f))
				continue;
			QFileInfo fi(QDir::cleanDirPath(QDir::convertSeparators(name + "/" + d2[dc])));
			QFileInfo fi2(QDir::cleanDirPath(QDir::convertSeparators(fi.dirPath()+"/"+fi.baseName()+".png")));
			if (fi2.exists())
				pm.load(QDir::cleanDirPath(QDir::convertSeparators(fi.dirPath()+"/"+fi.baseName()+".png")));
			else
			{
				StencilReader *pre = new StencilReader();
				pm = pre->createPreview(f);
//				if (canWrite)
// Above code is commented out because QFileInfo::permissons does not work properly
					pm.save(QDir::cleanDirPath(QDir::convertSeparators(fi.dirPath()+"/"+fi.baseName()+".png")), "PNG");
				delete pre;
			}
			AddObj(fi.baseName(), QDir::cleanDirPath(QDir::convertSeparators(name + "/" + d2[dc])), pm);
		}
	}
	QMap<QString,Elem>::Iterator itf;
	for (itf = objectMap.begin(); itf != objectMap.end(); ++itf)
	{
		(void) new QIconViewItem(this, itf.key(), itf.data().Preview);
	}
}

/* This is the main Dialog-Class for the Scrapbook */
Biblio::Biblio( QWidget* parent) : ScrPaletteBase( parent, "Sclib", false, 0 )
{
	resize( 230, 190 );
	setIcon(loadIcon("AppIcon.png"));
	BiblioLayout = new QVBoxLayout( this );
	BiblioLayout->setSpacing( 0 );
	BiblioLayout->setMargin( 0 );
	
	buttonLayout = new QHBoxLayout;
	buttonLayout->setSpacing( 5 );
	buttonLayout->setMargin( 0 );
	newButton = new QToolButton(this, "newButton" );
	newButton->setPixmap(loadIcon("DateiNeu16.png"));
	loadButton = new QToolButton(this, "loadButton" );
	loadButton->setPixmap(loadIcon("DateiOpen16.png"));
	saveAsButton = new QToolButton(this, "saveAsButton" );
	saveAsButton->setPixmap(loadIcon("DateiSave16.png"));
	importButton = new QToolButton(this, "importButton" );
	importButton->setPixmap(loadIcon("compfile16.png"));
	closeButton = new QToolButton(this, "closeButton" );
	closeButton->setPixmap(loadIcon("DateiClos16.png"));
	buttonLayout->addWidget( newButton );
	buttonLayout->addWidget( loadButton );
	buttonLayout->addWidget( saveAsButton );
	buttonLayout->addWidget( importButton );
	buttonLayout->addWidget( closeButton );
	QSpacerItem* spacer = new QSpacerItem( 16, 16, QSizePolicy::Expanding, QSizePolicy::Minimum );
	buttonLayout->addItem( spacer );
	BiblioLayout->addLayout( buttonLayout );
	
	connect(newButton, SIGNAL(clicked()), this, SLOT(NewLib()));
	connect(loadButton, SIGNAL(clicked()), this, SLOT(Load()));
	connect(saveAsButton, SIGNAL(clicked()), this, SLOT(SaveAs()));
	connect(importButton, SIGNAL(clicked()), this, SLOT(Import()));
	connect(closeButton, SIGNAL(clicked()), this, SLOT(closeLib()));
	
	/*
	fmenu = new QPopupMenu();
	fNew = fmenu->insertItem(loadIcon("DateiNeu16.png"), "", this, SLOT(NewLib()), CTRL+Key_N);
	fLoad = fmenu->insertItem(loadIcon("DateiOpen16.png"), "", this, SLOT(Load()), CTRL+Key_O);
	fSaveAs = fmenu->insertItem( loadIcon("DateiSave16.png"), "", this, SLOT(SaveAs()));
	fmenu->insertSeparator();
	fImport = fmenu->insertItem("", this, SLOT(Import()));
	fmenu->insertSeparator();
	fClose = fmenu->insertItem(loadIcon("DateiClos16.png"), "", this, SLOT(closeLib()));
	menuBar = new QMenuBar(this);
	mFile=menuBar->insertItem( "", fmenu);
	BiblioLayout->setMenuBar( menuBar );
	*/
	Frame3 = new QTabWidget( this, "Frame3" );

	activeBView = new BibView(this);
	Frame3->addTab(activeBView, "Main");
	tempBView = new BibView(this);
	Frame3->addTab(tempBView, "Copied Items");
	tempCount = 0;
	BiblioLayout->addWidget( Frame3 );
	languageChange();
	connect(activeBView, SIGNAL(dropped(QDropEvent *, const QValueList<QIconDragItem> &)), this, SLOT(DropOn(QDropEvent *)));
	connect(activeBView, SIGNAL(mouseButtonClicked(int, QIconViewItem*, const QPoint &)), this, SLOT(HandleMouse(int, QIconViewItem*)));
	connect(activeBView, SIGNAL(itemRenamed(QIconViewItem*)), this, SLOT(ItemRenamed(QIconViewItem*)));
	connect(Frame3, SIGNAL(currentChanged(QWidget*)), this, SLOT(libChanged(QWidget* )));
}

void Biblio::setOpenScrapbooks(QStringList &fileNames)
{
	disconnect(activeBView, SIGNAL(dropped(QDropEvent *, const QValueList<QIconDragItem> &)), this, SLOT(DropOn(QDropEvent *)));
	disconnect(activeBView, SIGNAL(mouseButtonClicked(int, QIconViewItem*, const QPoint &)), this, SLOT(HandleMouse(int, QIconViewItem*)));
	disconnect(activeBView, SIGNAL(itemRenamed(QIconViewItem*)), this, SLOT(ItemRenamed(QIconViewItem*)));
	for (uint rd = 0; rd < fileNames.count(); ++rd)
	{
		QString fileName = fileNames[rd];
		if (!fileName.isEmpty())
		{
			QDir d(fileName);
			activeBView = new BibView(this);
/*			if (!activeBView->canWrite)
				Frame3->addTab(activeBView, loadIcon("spot.png"), d.dirName());
			else */
// Above code is commented out because QFileInfo::permissons does not work properly
			Frame3->addTab(activeBView, d.dirName());
			activeBView->ReadContents(fileName);
			activeBView->ScFilename = fileName;
		}
	}
	activeBView = (BibView*)Frame3->page(0);
	Frame3->setCurrentPage(0);
	connect(activeBView, SIGNAL(dropped(QDropEvent *, const QValueList<QIconDragItem> &)), this, SLOT(DropOn(QDropEvent *)));
	connect(activeBView, SIGNAL(mouseButtonClicked(int, QIconViewItem*, const QPoint &)), this, SLOT(HandleMouse(int, QIconViewItem*)));
	connect(activeBView, SIGNAL(itemRenamed(QIconViewItem*)), this, SLOT(ItemRenamed(QIconViewItem*)));
}

QStringList Biblio::getOpenScrapbooks()
{
	QStringList ret;
	ret.clear();
	if (Frame3->count() > 2) // omit the first 2 Tabs since they contain the main and temp scrapbook
	{
		for (int a = 2; a < Frame3->count(); a++)
		{
			BibView* bv = (BibView*)Frame3->page(a);
			ret.append(bv->ScFilename);
		}
	}
	return ret;
}

void Biblio::setScrapbookFileName(QString fileName)
{
	activeBView->ScFilename=fileName;
}

const QString Biblio::getScrapbookFileName()
{
	return activeBView->ScFilename;
}

const int Biblio::objectCount()
{
	return activeBView->objectMap.count();
}

void Biblio::readOldContents(QString fileName, QString newName)
{
	activeBView->ReadOldContents(fileName, newName);
}

void Biblio::readContents(QString fileName)
{
	activeBView->ReadContents(fileName);
}

void Biblio::readTempContents(QString fileName)
{
	tempBView->ReadContents(fileName);
	tempBView->ScFilename = fileName;
	tempCount = tempBView->objectMap.count();
}

void Biblio::installEventFilter(const QObject *filterObj)
{
	ScrPaletteBase::installEventFilter(filterObj);
	activeBView->installEventFilter(filterObj);
	tempBView->installEventFilter(filterObj);
}

void Biblio::NewLib()
{
	PrefsContext* dirs = PrefsManager::instance()->prefsFile->getContext("dirs");
	QString fileName = QFileDialog::getExistingDirectory("", this, "d", tr("Choose a Scrapbook Directory"), true);
	if (!fileName.isEmpty())
	{
		for (int a = 0; a < Frame3->count(); a++)
		{
			BibView* bv = (BibView*)Frame3->page(a);
			if (fileName == bv->ScFilename)
				return;
		}
		disconnect(activeBView, SIGNAL(dropped(QDropEvent *, const QValueList<QIconDragItem> &)), this, SLOT(DropOn(QDropEvent *)));
		disconnect(activeBView, SIGNAL(mouseButtonClicked(int, QIconViewItem*, const QPoint &)), this, SLOT(HandleMouse(int, QIconViewItem*)));
		disconnect(activeBView, SIGNAL(itemRenamed(QIconViewItem*)), this, SLOT(ItemRenamed(QIconViewItem*)));
		QDir d(fileName);
		activeBView = new BibView(this);
		Frame3->addTab(activeBView, d.dirName());
		activeBView->ScFilename = fileName;
		Frame3->showPage(activeBView);
		d.cdUp();
		dirs->set("scrap_load", d.absPath());
		connect(activeBView, SIGNAL(dropped(QDropEvent *, const QValueList<QIconDragItem> &)), this, SLOT(DropOn(QDropEvent *)));
	connect(activeBView, SIGNAL(mouseButtonClicked(int, QIconViewItem*, const QPoint &)), this, SLOT(HandleMouse(int, QIconViewItem*)));
		connect(activeBView, SIGNAL(itemRenamed(QIconViewItem*)), this, SLOT(ItemRenamed(QIconViewItem*)));
	}
}

void Biblio::Load()
{
	PrefsContext* dirs = PrefsManager::instance()->prefsFile->getContext("dirs");
	QString fileName = QFileDialog::getExistingDirectory(dirs->get("scrap_load", "."), this, "d", tr("Choose a Scrapbook Directory"), true);
	if (!fileName.isEmpty())
	{
		for (int a = 0; a < Frame3->count(); a++)
		{
			BibView* bv = (BibView*)Frame3->page(a);
			if (fileName == bv->ScFilename)
				return;
		}
		disconnect(activeBView, SIGNAL(dropped(QDropEvent *, const QValueList<QIconDragItem> &)), this, SLOT(DropOn(QDropEvent *)));
		disconnect(activeBView, SIGNAL(mouseButtonClicked(int, QIconViewItem*, const QPoint &)), this, SLOT(HandleMouse(int, QIconViewItem*)));
		disconnect(activeBView, SIGNAL(itemRenamed(QIconViewItem*)), this, SLOT(ItemRenamed(QIconViewItem*)));
		QDir d(fileName);
		activeBView = new BibView(this);
/*		if (!activeBView->canWrite)
			Frame3->addTab(activeBView, loadIcon("spot.png"), d.dirName());
		else */
// Above code is commented out because QFileInfo::permissons does not work properly
			Frame3->addTab(activeBView, d.dirName());
		activeBView->ReadContents(fileName);
		activeBView->ScFilename = fileName;
		Frame3->showPage(activeBView);
		d.cdUp();
		dirs->set("scrap_load", d.absPath());
		connect(activeBView, SIGNAL(dropped(QDropEvent *, const QValueList<QIconDragItem> &)), this, SLOT(DropOn(QDropEvent *)));
		connect(activeBView, SIGNAL(mouseButtonClicked(int, QIconViewItem*, const QPoint &)), this, SLOT(HandleMouse(int, QIconViewItem*)));
		connect(activeBView, SIGNAL(itemRenamed(QIconViewItem*)), this, SLOT(ItemRenamed(QIconViewItem*)));
	}
}

void Biblio::Import()
{
	PrefsContext* dirs = PrefsManager::instance()->prefsFile->getContext("dirs");
	QString s = QFileDialog::getOpenFileName(dirs->get("old_scrap_load", "."),
	                                         tr("Scrapbook (*.scs)"),
	                                         this,
	                                         "open file dialog",
	                                         tr("Choose a scrapbook file to import"));
	
	if (!s.isEmpty())
	{
		dirs->set("old_scrap_load", s.left(s.findRev(QDir::convertSeparators("/"))));
		
		QString scrapbookFileO = s;
		QFileInfo scrapbookFileInfoO = QFileInfo(scrapbookFileO);
		if (scrapbookFileInfoO.exists())
		{
			readOldContents(scrapbookFileO, activeBView->ScFilename);
			readContents(activeBView->ScFilename);
		}
	}
}

void Biblio::SaveAs()
{
	PrefsContext* dirs = PrefsManager::instance()->prefsFile->getContext("dirs");
	QString fn = QFileDialog::getExistingDirectory(dirs->get("scrap_saveas", "."), this, "d", tr("Choose a Directory"), true);
	if (!fn.isEmpty())
	{
		for (int a = 0; a < Frame3->count(); a++)
		{
			BibView* bv = (BibView*)Frame3->page(a);
			if (fn == bv->ScFilename)
				return;
		}
		QDir d(fn);
		dirs->set("scrap_saveas", fn);
		activeBView->SaveContents(fn, activeBView->ScFilename);
		activeBView->ScFilename = fn;
		Frame3->changeTab(activeBView, d.dirName());
		d.cdUp();
		dirs->set("scrap_saveas", d.absPath());
	}
}

void Biblio::closeLib()
{
	if (Frame3->count() == 2)
		close();
	if ((Frame3->currentPageIndex() == 0) || (Frame3->currentPageIndex() == 1))
		return;
	else
	{
		disconnect(activeBView, SIGNAL(dropped(QDropEvent *, const QValueList<QIconDragItem> &)), this, SLOT(DropOn(QDropEvent *)));
		disconnect(activeBView, SIGNAL(mouseButtonClicked(int, QIconViewItem*, const QPoint &)), this, SLOT(HandleMouse(int, QIconViewItem*)));
		disconnect(activeBView, SIGNAL(itemRenamed(QIconViewItem*)), this, SLOT(ItemRenamed(QIconViewItem*)));
		Frame3->removePage(activeBView);
//		delete activeBView;   currently disabled as the whole TabWidget vanishes when executing that delete?????
		activeBView = (BibView*)Frame3->page(0);
		Frame3->setCurrentPage(0);
		connect(activeBView, SIGNAL(dropped(QDropEvent *, const QValueList<QIconDragItem> &)), this, SLOT(DropOn(QDropEvent *)));
		connect(activeBView, SIGNAL(mouseButtonClicked(int, QIconViewItem*, const QPoint &)), this, SLOT(HandleMouse(int, QIconViewItem*)));
		connect(activeBView, SIGNAL(itemRenamed(QIconViewItem*)), this, SLOT(ItemRenamed(QIconViewItem*)));
	}
}

void Biblio::libChanged(QWidget *lib)
{
	disconnect(activeBView, SIGNAL(dropped(QDropEvent *, const QValueList<QIconDragItem> &)), this, SLOT(DropOn(QDropEvent *)));
	disconnect(activeBView, SIGNAL(mouseButtonClicked(int, QIconViewItem*, const QPoint &)), this, SLOT(HandleMouse(int, QIconViewItem*)));
	disconnect(activeBView, SIGNAL(itemRenamed(QIconViewItem*)), this, SLOT(ItemRenamed(QIconViewItem*)));
	activeBView = (BibView*)lib;
	connect(activeBView, SIGNAL(dropped(QDropEvent *, const QValueList<QIconDragItem> &)), this, SLOT(DropOn(QDropEvent *)));
	connect(activeBView, SIGNAL(mouseButtonClicked(int, QIconViewItem*, const QPoint &)), this, SLOT(HandleMouse(int, QIconViewItem*)));
	connect(activeBView, SIGNAL(itemRenamed(QIconViewItem*)), this, SLOT(ItemRenamed(QIconViewItem*)));
}

void Biblio::HandleMouse(int button, QIconViewItem *ite)
{
	int mret, del, ren;
	if ((ite != 0) && (button == Qt::RightButton))
	{
		QPopupMenu *pmenu = new QPopupMenu();
		QPopupMenu *pmenu2 = new QPopupMenu();
		QPopupMenu *pmenu3 = new QPopupMenu();
		for (int a = 0; a < Frame3->count(); a++)
		{
			BibView* bv = (BibView*)Frame3->page(a);
			if (bv != activeBView)
			{
				pmenu2->insertItem(Frame3->tabLabel(Frame3->page(a)), a);
				pmenu3->insertItem(Frame3->tabLabel(Frame3->page(a)), a);
			}
		}
		connect(pmenu2, SIGNAL(activated(int)), this, SLOT(copyObj(int)));
		connect(pmenu3, SIGNAL(activated(int)), this, SLOT(moveObj(int)));
		qApp->setOverrideCursor(QCursor(ArrowCursor), true);
		ren = pmenu->insertItem( tr("Rename"));
		del = pmenu->insertItem( tr("Delete"));
		pmenu->insertItem( tr("Copy To:"), pmenu2);
		pmenu->insertItem( tr("Move To:"), pmenu3);
		mret = pmenu->exec(QCursor::pos());
		if (mret == del)
			DeleteObj(ite->text(), ite);
		if (mret == ren)
		{
			ite->setRenameEnabled(true);
			OldName = ite->text();
			ite->rename();
			ite->setRenameEnabled(false);
		}
		delete pmenu;
	}
	activeBView->clearSelection();
}

bool Biblio::copyObj(int id)
{
	QIconViewItem *ite = activeBView->currentItem();
	QString nam = ite->text();
	BibView* bv = (BibView*)Frame3->page(id);
	if (bv->objectMap.contains(nam))
	{
		Query *dia = new Query(this, "tt", 1, 0, tr("&Name:"), tr("New Entry"));
		dia->setEditText(nam, true);
		if (dia->exec())
		{
			nam = dia->getEditText();
			while (activeBView->objectMap.contains(nam))
			{
				if (!dia->exec())
				{
					delete dia;
					return false;
				}
				nam = dia->getEditText();
			}
		}
		else
		{
			delete dia;
			return false;
		}
	}
	QString ff = "";
	QPixmap pm;
	if (!loadText(QDir::cleanDirPath(activeBView->objectMap[ite->text()].Data), &ff))
		return false;
	pm = activeBView->objectMap[ite->text()].Preview;
	QString dt = activeBView->objectMap[ite->text()].Data.utf8();
	QFileInfo fi(dt);
	QFile f(QDir::cleanDirPath(QDir::convertSeparators(bv->ScFilename + "/" + nam + "." + fi.extension(true).lower())));
	if(!f.open(IO_WriteOnly))
		return false;
	QTextStream s;
	s.setEncoding(QTextStream::UnicodeUTF8);
	s.setDevice(&f);
	s.writeRawBytes(ff, ff.length());
	f.close();
	bv->AddObj(nam, QDir::cleanDirPath(QDir::convertSeparators(bv->ScFilename + "/" + nam + "." + fi.extension(true).lower())), pm);
	pm.save(QDir::cleanDirPath(QDir::convertSeparators(bv->ScFilename + "/" + nam +".png")), "PNG");
	(void) new QIconViewItem(bv, nam, pm);
	if (bv == tempBView)
	{
		tempCount++;
		if (tempBView->objectMap.count() > static_cast<uint>(PrefsManager::instance()->appPrefs.numScrapbookCopies))
		{
			QMap<QString,BibView::Elem>::Iterator it;
			it = tempBView->objectMap.begin();
			QFile f(it.data().Data);
			f.remove();
			QFileInfo fi(QDir::convertSeparators(tempBView->ScFilename + "/" + it.key() + ".png"));
			if (fi.exists())
			{
				QFile f2(QDir::convertSeparators(tempBView->ScFilename + "/" + it.key() + ".png"));
				f2.remove();
			}
			tempBView->objectMap.remove(it);
			QIconViewItem* ite = tempBView->firstItem();
			if (ite != 0)
				delete ite;
			tempBView->sort(activeBView->sortDirection());
			tempBView->arrangeItemsInGrid(true);
		}
		emit updateRecentMenue();
	}
	return true;
}

void Biblio::moveObj(int id)
{
	if (copyObj(id))
	{
		QIconViewItem *ite = activeBView->currentItem();
		DeleteObj(ite->text(), ite);
	}
}

void Biblio::DeleteObj(QString name, QIconViewItem *ite)
{
/*	if (!activeBView->canWrite)
		return; */
// Above code is commented out because QFileInfo::permissons does not work properly
	QFile f(activeBView->objectMap[name].Data);
	f.remove();
	QFileInfo fi(QDir::convertSeparators(activeBView->ScFilename + "/" + name + ".png"));
	if (fi.exists())
	{
		QFile f2(QDir::convertSeparators(activeBView->ScFilename + "/" + name + ".png"));
		f2.remove();
	}
	activeBView->objectMap.remove(name);
	delete ite;
	activeBView->sort(activeBView->sortDirection());
	activeBView->arrangeItemsInGrid(true);
	if (activeBView == tempBView)
		emit updateRecentMenue();
}

void Biblio::ItemRenamed(QIconViewItem *ite)
{
/*	if (!activeBView->canWrite)
		return; */
// Above code is commented out because QFileInfo::permissons does not work properly
	QString ObjData;
	QPixmap ObjPreview;
	disconnect(activeBView, SIGNAL(itemRenamed(QIconViewItem*)), this, SLOT(ItemRenamed(QIconViewItem*)));
	if (OldName != ite->text())
	{
		if (activeBView->objectMap.contains(ite->text()))
		{
			QMessageBox::warning(this, CommonStrings::trWarning, tr("Name \"%1\" is not unique.\nPlease choose another.").arg(ite->text()), CommonStrings::tr_OK);
			ite->setText(OldName);
		}
		else
		{
			ObjData = activeBView->objectMap[OldName].Data;
			ObjPreview = activeBView->objectMap[OldName].Preview;
			QDir d = QDir();
			d.rename(ObjData, QDir::cleanDirPath(QDir::convertSeparators(activeBView->ScFilename + "/" + ite->text() + ".sce")));
			QFileInfo fi(QDir::convertSeparators(activeBView->ScFilename + "/" + OldName + ".png"));
			if (fi.exists())
				d.rename(QDir::convertSeparators(activeBView->ScFilename + "/" + OldName + ".png"), QDir::cleanDirPath(QDir::convertSeparators(activeBView->ScFilename + "/" + ite->text() + ".png")));
			activeBView->objectMap.remove(OldName);
			activeBView->AddObj(ite->text(), QDir::cleanDirPath(QDir::convertSeparators(activeBView->ScFilename + "/" + ite->text() + ".sce")), ObjPreview);
			activeBView->sort(activeBView->sortDirection());
			activeBView->arrangeItemsInGrid(true);
			if (activeBView == tempBView)
				emit updateRecentMenue();
		}
	}
	connect(activeBView, SIGNAL(itemRenamed(QIconViewItem*)), this, SLOT(ItemRenamed(QIconViewItem*)));
}

void Biblio::DropOn(QDropEvent *e)
{
	QString text, tmp, nam;
	bool img;
	tmp = "";
	if (QTextDrag::decode(e, text))
	{
		QUrl ur(text);
		QFileInfo fi = QFileInfo(ur.path());
		QString ext = fi.extension(false).lower();
		img = ((ext=="eps")||(ext=="ps")||(ext=="png")||(ext=="gif")||(ext=="jpg")||(ext=="xpm"));
		if ((fi.exists()) && (!img))
		{
			if (loadText(ur.path(), &text))
			{
				if (text.startsWith("<SCRIBUSELEM>"))
				{
					tmp = text;
				}
			}
		}
		else
		{
			if (text.startsWith("<SCRIBUSELEM>"))
			{
				tmp = text;
			}
		}
		ObjFromMenu(text);
	}
}

void Biblio::ObjFromMenu(QString text)
{
	QString nam, tmp;
/*	if (!activeBView->canWrite)
		return; */
// Above code is commented out because QFileInfo::permissons does not work properly
	if (Frame3->currentPageIndex() == 1)
	{
		nam = tr("Object") + tmp.setNum(tempCount);
		tempCount++;
	}
	else
		nam = tr("Object") + tmp.setNum(activeBView->objectMap.count());
	Query *dia = new Query(this, "tt", 1, 0, tr("&Name:"), tr("New Entry"));
	dia->setEditText(nam, true);
	if (dia->exec())
	{
		nam = dia->getEditText();
		while (activeBView->objectMap.contains(nam))
		{
			if (!dia->exec())
			{
				delete dia;
				return;
			}
			nam = dia->getEditText();
		}
	}
	else
	{
		delete dia;
		return;
	}
	delete dia;
	tmp = text;
	QString ff = "";
	// these were corrupting the encoding, by removing it should be now ok, we'll see, Riku
// 	if (tmp.startsWith("<SCRIBUSELEMUTF8"))
// 		ff = QString::fromUtf8(tmp);
// 	else
		ff = tmp;
	QFile f(QDir::cleanDirPath(QDir::convertSeparators(activeBView->ScFilename + "/" + nam + ".sce")));
	if(!f.open(IO_WriteOnly))
		return ;
	QTextStream s;
	s.setEncoding(QTextStream::UnicodeUTF8);
	s.setDevice(&f);
	s.writeRawBytes(ff, ff.length());
	f.close();
	ScPreview *pre = new ScPreview();
	QPixmap pm = pre->createPreview(ff);
	activeBView->AddObj(nam, QDir::cleanDirPath(QDir::convertSeparators(activeBView->ScFilename + "/" + nam + ".sce")), pm);
	pm.save(QDir::cleanDirPath(QDir::convertSeparators(activeBView->ScFilename + "/" + nam +".png")), "PNG");
	(void) new QIconViewItem(activeBView, nam, pm);
	delete pre;
	if (Frame3->currentPageIndex() == 1)
	{
		if (tempBView->objectMap.count() > static_cast<uint>(PrefsManager::instance()->appPrefs.numScrapbookCopies))
		{
			QMap<QString,BibView::Elem>::Iterator it;
			it = tempBView->objectMap.begin();
			QFile f(it.data().Data);
			f.remove();
			QFileInfo fi(QDir::convertSeparators(tempBView->ScFilename + "/" + it.key() + ".png"));
			if (fi.exists())
			{
				QFile f2(QDir::convertSeparators(tempBView->ScFilename + "/" + it.key() + ".png"));
				f2.remove();
			}
			tempBView->objectMap.remove(it);
			QIconViewItem* ite = tempBView->firstItem();
			if (ite != 0)
				delete ite;
			tempBView->sort(activeBView->sortDirection());
			tempBView->arrangeItemsInGrid(true);
		}
		emit updateRecentMenue();
	}
}

void Biblio::ObjFromCopyAction(QString text)
{
	QString nam, tmp;
	nam = tr("Object") + tmp.setNum(tempCount);
	tempCount++;
	QString ff = text;
	QFile f(QDir::cleanDirPath(QDir::convertSeparators(tempBView->ScFilename + "/" + nam + ".sce")));
	if(!f.open(IO_WriteOnly))
		return ;
	QTextStream s;
	s.setEncoding(QTextStream::UnicodeUTF8);
	s.setDevice(&f);
	s.writeRawBytes(ff, ff.length());
	f.close();
	ScPreview *pre = new ScPreview();
	QPixmap pm = pre->createPreview(ff);
	tempBView->AddObj(nam, QDir::cleanDirPath(QDir::convertSeparators(tempBView->ScFilename + "/" + nam + ".sce")), pm);
	pm.save(QDir::cleanDirPath(QDir::convertSeparators(tempBView->ScFilename + "/" + nam +".png")), "PNG");
	(void) new QIconViewItem(tempBView, nam, pm);
	delete pre;
	if (tempBView->objectMap.count() > static_cast<uint>(PrefsManager::instance()->appPrefs.numScrapbookCopies))
	{
		QMap<QString,BibView::Elem>::Iterator it;
		it = tempBView->objectMap.begin();
		QFile f(it.data().Data);
		f.remove();
		QFileInfo fi(QDir::convertSeparators(tempBView->ScFilename + "/" + it.key() + ".png"));
		if (fi.exists())
		{
			QFile f2(QDir::convertSeparators(tempBView->ScFilename + "/" + it.key() + ".png"));
			f2.remove();
		}
		tempBView->objectMap.remove(it);
		QIconViewItem* ite = tempBView->firstItem();
		if (ite != 0)
			delete ite;
		tempBView->sort(tempBView->sortDirection());
		tempBView->arrangeItemsInGrid(true);
	}
}

void Biblio::CleanUpTemp()
{
	QMap<QString,BibView::Elem>::Iterator it;
	for (it = tempBView->objectMap.begin(); it != tempBView->objectMap.end(); ++it)
	{
		QFile f(it.data().Data);
		f.remove();
		QFileInfo fi(QDir::convertSeparators(tempBView->ScFilename + "/" + it.key() + ".png"));
		if (fi.exists())
		{
			QFile f2(QDir::convertSeparators(tempBView->ScFilename + "/" + it.key() + ".png"));
			f2.remove();
		}
	}
}

void Biblio::languageChange()
{
	setCaption( tr( "Scrapbook" ) );
// 	menuBar->changeItem( mFile, tr("&File"));
// 	menuBar->changeItem( mView, tr("&Preview"));
// 
// 	fmenu->changeItem(fNew, tr("&New"));
// 	fmenu->changeItem(fLoad, tr("&Load..."));
// 	fmenu->changeItem(fSaveAs, tr("Save &As..."));
// 	fmenu->changeItem(fClose, tr("&Close"));
// 	fmenu->changeItem(fImport, tr("&Import Scrapbook File..."));
	
 	QToolTip::add( newButton, tr( "Create a new scrapbook page" ) );
 	QToolTip::add( loadButton, tr( "Load an existing scrapbook" ) );
 	QToolTip::add( saveAsButton, tr( "Save the selected scrapbook" ) );
 	QToolTip::add( importButton, tr( "Import an scrapbook file from Scribus <=1.3.2" ) );
 	QToolTip::add( closeButton, tr( "Close the selected scrapbook" ) );
}
