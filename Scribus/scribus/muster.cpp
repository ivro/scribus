/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "muster.h"

#include <QHBoxLayout>
#include <QVBoxLayout>
#include <QSpacerItem>
#include <QToolButton>
#include <QListWidget>
#include <QListWidgetItem>
#include <QToolTip>
#include <QCursor>
#include <QCloseEvent>
#include <QMessageBox>
#include <QInputDialog>

#include "newtemp.h"
#include "mergedoc.h"
#include "page.h"
#include "pagestructs.h"
#include "scribusdoc.h"
#include "scribusview.h"
#include "util.h"
#include "commonstrings.h"
#include "scribus.h"
#include "scribusXml.h"
#include "prefsmanager.h"

MasterPagesPalette::MasterPagesPalette( QWidget* parent, ScribusDoc *pCurrentDoc, ScribusView *pCurrentView, QString masterPageName)
		: QDialog(parent)
{
	setAttribute(Qt::WA_DeleteOnClose);
	setModal(false);
	setWindowTitle( tr( "Edit Master Pages" ) );
	setWindowIcon(QIcon(loadIcon ( "AppIcon.png" )));
	currentDoc = pCurrentDoc;
	currentView = pCurrentView;
	masterPagesLayout = new QVBoxLayout(this);
	masterPagesLayout->setMargin(5);
	masterPagesLayout->setSpacing(5);
	buttonLayout = new QHBoxLayout;
	buttonLayout->setSpacing( 5 );
	buttonLayout->setMargin( 0 );
	importButton = new QToolButton(this, "importButton" );
	importButton->setIcon(QIcon(loadIcon("16/document-open.png")));
	newButton = new QToolButton(this, "newButton" );
	newButton->setIcon(QIcon(loadIcon("16/document-new.png")));
	duplicateButton = new QToolButton(this, "DublicateB" );
	duplicateButton->setIcon(QIcon(loadIcon("16/edit-copy.png")));
	deleteButton = new QToolButton(this, "deleteButton" );
	deleteButton->setIcon(QIcon(loadIcon("16/edit-delete.png")));
	buttonLayout->addWidget( newButton );
	buttonLayout->addWidget( duplicateButton );
	buttonLayout->addWidget( importButton );
	buttonLayout->addWidget( deleteButton );
	QSpacerItem* spacer = new QSpacerItem( 1, 1, QSizePolicy::Expanding, QSizePolicy::Minimum );
	buttonLayout->addItem( spacer );
	masterPagesLayout->addLayout( buttonLayout );
	masterPageListBox = new QListWidget( this );
	masterPageListBox->clear();
	masterPageListBox->setMinimumSize( QSize( 100, 240 ) );
	masterPagesLayout->addWidget( masterPageListBox );


	if (masterPageName.isEmpty())
		sMuster = currentDoc->MasterNames.begin().key();
	else
		sMuster = masterPageName;
	updateMasterPageList(sMuster);
	currentView->showMasterPage(currentDoc->MasterNames[sMuster]);

	setMinimumSize(sizeHint());

	QToolTip::add( duplicateButton, tr( "Duplicate the selected master page" ) );
	QToolTip::add( deleteButton, tr( "Delete the selected master page" ) );
	QToolTip::add( newButton, tr( "Add a new master page" ) );
	QToolTip::add( importButton, tr( "Import master pages from another document" ) );
	// signals and slots connections
	connect(duplicateButton, SIGNAL(clicked()), this, SLOT(duplicateMasterPage()));
	connect(deleteButton, SIGNAL(clicked()), this, SLOT(deleteMasterPage()));
	connect(newButton, SIGNAL(clicked()), this, SLOT(newMasterPage()));
	connect(importButton, SIGNAL(clicked()), this, SLOT(appendPage()));
	connect(masterPageListBox, SIGNAL(itemClicked(QListWidgetItem*)), this, SLOT(selectMasterPage(QListWidgetItem*)));
	connect(masterPageListBox, SIGNAL(itemDoubleClicked(QListWidgetItem*)), this, SLOT(renameMasterPage( QListWidgetItem*)));
}

void MasterPagesPalette::reject()
{
	emit finished();
	QDialog::reject();
}

void MasterPagesPalette::closeEvent(QCloseEvent *closeEvent)
{
	emit finished();
	closeEvent->accept();
}

void MasterPagesPalette::deleteMasterPage()
{
	if ((sMuster == CommonStrings::masterPageNormal) || (sMuster == CommonStrings::trMasterPageNormal) || (sMuster == CommonStrings::trMasterPageNormalLeft) || (sMuster == CommonStrings::trMasterPageNormalMiddle) || (sMuster == CommonStrings::trMasterPageNormalRight))
		return;
	int exit = QMessageBox::warning(this,
	                              CommonStrings::trWarning,
	                              tr("Do you really want to delete this master page?"),
	                              QMessageBox::Yes | QMessageBox::No);
	if (exit == QMessageBox::Yes)
	{
		currentDoc->scMW()->DeletePage2(currentDoc->MasterNames[sMuster]);
		//<<CB TODO Move back into ScribusDoc::deleteMasterPage();
		//This must happen after the pages have been reformed (view/doc)
		currentDoc->MasterNames.clear();
		for (uint a = 0; a < currentDoc->Pages->count(); ++a)
			currentDoc->MasterNames[currentDoc->Pages->at(a)->pageName()] = currentDoc->Pages->at(a)->pageNr();
		// and fix up any pages that refer to the deleted master page
		uint pageIndex = 0;
		QMap<QString,int>::Iterator it = currentDoc->MasterNames.begin();
		for (Page* docPage = currentDoc->DocPages.first(); docPage; docPage = currentDoc->DocPages.next() )
		{
			if (docPage->MPageNam == sMuster)
			{
				PageLocation pageLoc = currentDoc->locationOfPage(pageIndex);
				if (pageLoc == LeftPage)
				{
					if (currentDoc->MasterNames.contains( CommonStrings::trMasterPageNormalLeft))
						docPage->MPageNam = CommonStrings::trMasterPageNormalLeft;
					else if (currentDoc->MasterNames.contains( CommonStrings::trMasterPageNormal))
						docPage->MPageNam = CommonStrings::trMasterPageNormal;
					else
						docPage->MPageNam = it.key();
				}
				else if (pageLoc == RightPage)
				{
					if (currentDoc->MasterNames.contains( CommonStrings::trMasterPageNormalRight))
						docPage->MPageNam = CommonStrings::trMasterPageNormalRight;
					else if (currentDoc->MasterNames.contains( CommonStrings::trMasterPageNormal))
						docPage->MPageNam = CommonStrings::trMasterPageNormal;
					else
						docPage->MPageNam = it.key();
				}
				else
				{
					if (currentDoc->MasterNames.contains( CommonStrings::trMasterPageNormalMiddle))
						docPage->MPageNam = CommonStrings::trMasterPageNormalMiddle;
					else if (currentDoc->MasterNames.contains( CommonStrings::trMasterPageNormal))
						docPage->MPageNam = CommonStrings::trMasterPageNormal;
					else
						docPage->MPageNam = it.key();
				}
			}
			pageIndex++;
		}
		//>>
		
		sMuster = it.key();
		updateMasterPageList(sMuster);
		//currentDoc->MasterPages = currentDoc->Pages;
	}
}

void MasterPagesPalette::duplicateMasterPage()
{
	int copyC = 1;
	QString potentialMasterPageName(sMuster);
	while (currentDoc->MasterNames.contains(potentialMasterPageName))
		potentialMasterPageName = tr("Copy #%1 of %2").arg(copyC++).arg(sMuster);

	NewTm *dia = new NewTm(this, tr("&Name:"), tr("New Master Page"), currentDoc, potentialMasterPageName);
	if (dia->exec())
	{
		QString MasterPageName = dia->Answer->text();
		while (currentDoc->MasterNames.contains(MasterPageName) || ((MasterPageName == CommonStrings::masterPageNormal) || (MasterPageName == CommonStrings::trMasterPageNormal) || (MasterPageName == CommonStrings::trMasterPageNormalLeft) || (MasterPageName == CommonStrings::trMasterPageNormalMiddle) || (MasterPageName == CommonStrings::trMasterPageNormalRight)))
		{
			if (!dia->exec())
			{
				delete dia;
				return;
			}
			MasterPageName = dia->Answer->text();
		}
		PrefsManager* prefsManager = PrefsManager::instance();
		int inde = currentDoc->MasterNames[sMuster];
		int nr = currentDoc->Pages->count();
		Page* from = currentDoc->Pages->at(inde);
		Page* destination = currentDoc->addMasterPage(nr, MasterPageName);
		if (currentDoc->currentPageLayout != singlePage)
		{
			int lp = dia->Links->currentItem();
			if (lp == 0)
				lp = 1;
			else if (lp == static_cast<int>(dia->Links->count()-1))
				lp = 0;
			else
				lp++;
			destination->LeftPg = lp;
		}
		destination->initialMargins.Top = from->initialMargins.Top;
		destination->initialMargins.Bottom = from->initialMargins.Bottom;
		if (currentDoc->pageSets[currentDoc->currentPageLayout].Columns == 1)
		{
			destination->initialMargins.Left = from->initialMargins.Left;
			destination->initialMargins.Right = from->initialMargins.Right;
		}
		else
		{
			if (destination->LeftPg != from->LeftPg)
			{
				if (destination->LeftPg > 1)
				{
					destination->initialMargins.Right = from->initialMargins.Left;
					destination->initialMargins.Left = from->initialMargins.Left;
				}
				else
				{
					destination->initialMargins.Left = from->initialMargins.Left;
					destination->initialMargins.Right = from->initialMargins.Right;
				}
			}
			else
			{
				destination->initialMargins.Left = from->initialMargins.Left;
				destination->initialMargins.Right = from->initialMargins.Right;
			}
		}
		currentDoc->setCurrentPage(destination);
		uint oldItems = currentDoc->Items->count();
		uint end2 = currentDoc->MasterItems.count();
		int GrMax = currentDoc->GroupCounter;
		currentDoc->m_Selection->clear();
		if (oldItems>0)
		{
			for (uint ite = 0; ite < oldItems; ++ite)
			{
				PageItem *itemToCopy = currentDoc->Items->at(ite);
				if (itemToCopy->OwnPage == inde)
					currentDoc->m_Selection->addItem(itemToCopy, true);
			}
			ScriXmlDoc *ss = new ScriXmlDoc();
			ss->ReadElem(ss->WriteElem(currentDoc, currentView, currentDoc->m_Selection), prefsManager->appPrefs.AvailFonts, currentDoc, destination->xOffset(), destination->yOffset(), false, true, prefsManager->appPrefs.GFontSub, currentView);
			currentDoc->m_Selection->clear();
			delete ss;
		}
		uint end3 = currentDoc->MasterItems.count();
		for (uint a = end2; a < end3; ++a)
		{
			PageItem *newItem = currentDoc->MasterItems.at(a);
			newItem->OnMasterPage = MasterPageName;
			newItem->OwnPage = currentDoc->MasterNames[MasterPageName];
		}
		from->guides.copy(&destination->guides);
		currentDoc->GroupCounter = GrMax + 1;
		currentView->Deselect(true);
		updateMasterPageList(MasterPageName);
		currentDoc->setLoading(false);
		currentView->reformPages();
		currentView->DrawNew();
	}
	delete dia;
}

void MasterPagesPalette::newMasterPage()
{
	QString MasterPageName;
	int nr = currentDoc->Pages->count();
	NewTm *dia = new NewTm(this, tr("Name:"), tr("New MasterPage"), currentDoc, tr("New Master Page %1").arg(nr));
	if (dia->exec())
	{
		MasterPageName = dia->Answer->text();
		while (currentDoc->MasterNames.contains(MasterPageName) || ((MasterPageName == CommonStrings::masterPageNormal) || (MasterPageName == CommonStrings::trMasterPageNormal) || (MasterPageName == CommonStrings::trMasterPageNormalLeft) || (MasterPageName == CommonStrings::trMasterPageNormalMiddle) || (MasterPageName == CommonStrings::trMasterPageNormalRight)))
		{
			if (!dia->exec())
			{
				delete dia;
				return;
			}
			MasterPageName = dia->Answer->text();
		}
		currentDoc->setCurrentPage(currentDoc->addMasterPage(nr, MasterPageName));
		if (currentDoc->currentPageLayout != singlePage)
		{
			int lp = dia->Links->currentItem();
			if (lp == 0)
				lp = 1;
			else if (lp == static_cast<int>(dia->Links->count()-1))
				lp = 0;
			else
				lp++;
			currentDoc->Pages->at(nr)->LeftPg = lp;
		}
		updateMasterPageList(MasterPageName);
		currentView->showMasterPage(currentDoc->MasterNames[MasterPageName]);
		currentView->reformPages();
	}
	delete dia;
}

void MasterPagesPalette::appendPage()
{
	//bool atf;
	MergeDoc *dia = new MergeDoc(this, true);
	if (dia->exec())
	{
		qApp->changeOverrideCursor(QCursor(Qt::WaitCursor));
		int nr = currentDoc->Pages->count();
		//currentDoc->pageCount = 0;
		//atf = currentDoc->usesAutomaticTextFrames();
		//currentDoc->setUsesAutomaticTextFrames(false);
		//emit createNew(nr);
		QString MasterPageName(dia->getMasterPageNameText());
		QString MasterPageName2(MasterPageName);
		int copyC = 1;
		while (currentDoc->MasterNames.contains(MasterPageName2))
		{
			MasterPageName2 = tr("Copy #%1 of ").arg(copyC)+MasterPageName;
			copyC++;
		}
		currentDoc->setCurrentPage(currentDoc->addMasterPage(nr, MasterPageName2));
		qApp->processEvents();
		//CB TODO: If we are loading to a new name, we rely on doc->onpage in 
		//FileLoader::PasteItem as this call doesnt pass in the new destination page
		currentDoc->scMW()->loadPage(dia->getFromDoc(), dia->getMasterPageNameItem(), true, MasterPageName2);
		qApp->processEvents();
		/*
		MasterPageName = currentDoc->Pages->at(nr)->PageNam;
		MasterPageName2 = MasterPageName;
		int copyC = 1;
		while (currentDoc->MasterNames.contains(MasterPageName2))
		{
			MasterPageName2 = tr("Copy #%1 of ").arg(copyC)+MasterPageName;
			copyC++;
		}
		currentDoc->MasterNames.insert(MasterPageName2, nr);
		currentDoc->Pages->at(nr)->setPageName(MasterPageName2);
		currentDoc->Pages->at(nr)->MPageNam = "";
		*/
		updateMasterPageList(MasterPageName2);
		//currentDoc->setUsesAutomaticTextFrames(atf);
		currentView->showMasterPage(currentDoc->MasterNames[MasterPageName2]);
		qApp->changeOverrideCursor(QCursor(Qt::ArrowCursor));
		//currentDoc->MasterPages = currentDoc->Pages;
	}
	delete dia;
}

void MasterPagesPalette::selectMasterPage(QListWidgetItem *item)
{
	sMuster = item->text();
	deleteButton->setEnabled(currentDoc->MasterNames.count() == 1 ? false : true);
	if (sMuster == CommonStrings::trMasterPageNormal || sMuster == CommonStrings::masterPageNormal)
	{
// 		sMuster = CommonStrings::masterPageNormal;
		deleteButton->setEnabled(false);
	}
	else
		deleteButton->setEnabled(true);
	currentView->showMasterPage(currentDoc->MasterNames[sMuster]);
}

void MasterPagesPalette::selectMasterPage(QString name)
{
	sMuster = name;
	deleteButton->setEnabled(currentDoc->MasterNames.count() == 1 ? false : true);
	if (sMuster == CommonStrings::trMasterPageNormal)
	{
		sMuster = CommonStrings::masterPageNormal;
		deleteButton->setEnabled(false);
	}
	else
		deleteButton->setEnabled(true);
	currentView->showMasterPage(currentDoc->MasterNames[sMuster]);
}

void MasterPagesPalette::updateMasterPageList(QString MasterPageName)
{
	masterPageListBox->clear();
	for (QMap<QString,int>::Iterator it = currentDoc->MasterNames.begin(); it != currentDoc->MasterNames.end(); ++it)
		masterPageListBox->addItem(it.key() == CommonStrings::masterPageNormal ? CommonStrings::trMasterPageNormal : it.key());
	deleteButton->setEnabled(currentDoc->MasterNames.count() == 1 ? false : true);
	if (MasterPageName == CommonStrings::masterPageNormal)
	{
		MasterPageName = CommonStrings::trMasterPageNormal;
		deleteButton->setEnabled(false);
	}
	QList<QListWidgetItem *> itL = masterPageListBox->findItems(MasterPageName, Qt::MatchExactly);
	if (itL.count() != 0)
		itL.at(0)->setSelected(true);
}

void MasterPagesPalette::renameMasterPage(QListWidgetItem * item)
{
	QString oldName(item->text());
	if ((oldName == CommonStrings::masterPageNormal) || (oldName == CommonStrings::trMasterPageNormal) || (oldName == CommonStrings::trMasterPageNormalLeft) || (oldName == CommonStrings::trMasterPageNormalMiddle) || (oldName == CommonStrings::trMasterPageNormalRight))
	{
		QMessageBox::information( this, tr("Unable to Rename Master Page"), tr("The Normal page is not allowed to be renamed."), QMessageBox::Ok );
		return;
	}
	bool ok;
	QString newName = QInputDialog::getText( tr("Rename Master Page"), tr("New Name:"), QLineEdit::Normal, oldName, &ok, this );
	if (ok && !newName.isEmpty())
	{
		if (currentDoc->renameMasterPage( oldName, newName))
			updateMasterPageList(newName);
	}
}
