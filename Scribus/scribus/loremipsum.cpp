/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include <qstring.h>
#include <qstringlist.h>
#include <qdom.h>
#include <qdir.h>
#include <qfile.h>
#include <qvariant.h>
#include <qpushbutton.h>
#include <qheader.h>
#include <qlistview.h>
#include <qlabel.h>
#include <qspinbox.h>
#include <qcheckbox.h>
#include <qlayout.h>
#include <qtooltip.h>
#include <qwhatsthis.h>

#include "loremipsum.h"
#include "loremipsum.moc"
#include "scribus.h"
#include "scribusdoc.h"
#include "scribusview.h"
#include "scpaths.h"
#include "selection.h"
#include "serializer.h"
#include "prefsmanager.h"
#include "commonstrings.h"
#include "hyphenator.h"
#include "util.h"


QString getLoremLocation(QString fname)
{
	return QDir::convertSeparators(ScPaths::instance().shareDir() + "/loremipsum/" + fname);
}

LoremParser::LoremParser(QString fname)
{
	name = author = url = "n/a";
	correct = false;
	QDomDocument doc("loremdoc");
	QFile file(getLoremLocation(fname));
	if (!file.open(IO_ReadOnly))
		return;
	if (!doc.setContent(&file))
	{
		file.close();
		return;
	}
	file.close();

	QDomElement docElement = doc.documentElement();

	QDomNode node = docElement.firstChild();
	while(!node.isNull())
	{
		QDomElement element = node.toElement();
		if(!element.isNull())
		{
			if (element.tagName() == "name")
				name = element.text();
			if (element.tagName() == "author")
				author = element.text();
			if (element.tagName() == "url")
				url = element.text();
			if (element.tagName() == "p")
				loremIpsum.append(element.text().simplifyWhiteSpace());
		}
		node = node.nextSibling();
	}
	if (name != "n/a")
		correct = true;
}

QString LoremParser::createLorem(uint parCount)
{
	if (parCount < 1)
		return QString::null;
	// first paragraph is always the same
	QString lorem(loremIpsum[0]);
	if (!loremIpsum.isEmpty())
		for (uint i = 1; i < parCount + 1; ++i)
			lorem += loremIpsum[rand()%loremIpsum.count()] + '\n';
	return lorem.stripWhiteSpace();
}


LoremManager::LoremManager(ScribusDoc* doc, QWidget* parent, const char* name, bool modal, WFlags fl)
	: QDialog( parent, name, modal, fl )
{
	m_Doc=doc;
	if ( !name )
		setName( "LoremManager" );
	LoremManagerLayout = new QGridLayout( this, 1, 1, 11, 6, "LoremManagerLayout");

	layout3 = new QVBoxLayout( 0, 0, 6, "layout3");

	loremList = new QListView( this, "loremList" );
	loremList->addColumn( tr( "Select Lorem Ipsum" ) );
	loremList->setRootIsDecorated(true);
	layout3->addWidget( loremList );

	layout2 = new QHBoxLayout( 0, 0, 6, "layout2");

	paraLabel = new QLabel( this, "paraLabel" );
	layout2->addWidget( paraLabel );

	paraBox = new QSpinBox( this, "paraBox" );
	paraBox->setMinValue( 1 );
	paraBox->setValue(PrefsManager::instance()->appPrefs.paragraphsLI);
	layout2->addWidget( paraBox );
	paraSpacer = new QSpacerItem( 40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
	layout2->addItem( paraSpacer );
	layout3->addLayout( layout2 );

	layout1 = new QHBoxLayout( 0, 0, 6, "layout1");
	buttonSpacer = new QSpacerItem( 40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
	layout1->addItem( buttonSpacer );

	okButton = new QPushButton( this, "okButton" );
	layout1->addWidget( okButton );

	cancelButton = new QPushButton( this, "cancelButton" );
	layout1->addWidget( cancelButton );
	layout3->addLayout( layout1 );

	LoremManagerLayout->addLayout( layout3, 0, 0 );
	languageChange();
	resize( QSize(439, 364).expandedTo(minimumSizeHint()) );
	clearWState( WState_Polished );

	// reading lorems
	QDir d(getLoremLocation(QString::null), "*.xml");

	const QFileInfoList *list = d.entryInfoList();
	QFileInfoListIterator it(*list);
	QFileInfo *fi;

	while ( (fi = it.current()) != 0 )
	{
		LoremParser *parser = new LoremParser(fi->fileName());
		if (!parser->correct)
		{
			delete parser;
			++it;
			continue;
		}
		availableLorems[parser->name] = fi->fileName();
		QListViewItem *item = new QListViewItem(loremList);
		item->setText(0, parser->name);
		new QListViewItem(item, tr("Author:") + " " + parser->author);
		new QListViewItem(item, tr("Get More:") + " " + parser->url);
		new QListViewItem(item, tr("XML File:") + " " + fi->fileName());
		loremList->insertItem(item);
		++it;
		delete parser;
	}

	// signals and slots connections
	connect( okButton, SIGNAL( clicked() ), this, SLOT( okButton_clicked() ) );
	connect( cancelButton, SIGNAL( clicked() ), this, SLOT( cancelButton_clicked() ) );
}

void LoremManager::languageChange()
{
	setCaption( tr( "Lorem Ipsum" ) );
	paraLabel->setText( tr( "Paragraphs:" ) );
	okButton->setText( CommonStrings::tr_OK );
	okButton->setAccel( QKeySequence( tr( "Alt+O" ) ) );
	cancelButton->setText( CommonStrings::tr_Cancel );
	cancelButton->setAccel( QKeySequence( tr( "Alt+C" ) ) );
}

void LoremManager::okButton_clicked()
{
	// only top level items are taken
	QListViewItem *li;
	if (loremList->currentItem()->parent() == 0)
		li = loremList->currentItem();
	else
		li = loremList->currentItem()->parent();

	insertLoremIpsum(availableLorems[li->text(0)], paraBox->value());
	accept();
}

void LoremManager::cancelButton_clicked()
{
	reject();
}

void LoremManager::insertLoremIpsum(QString name, int paraCount)
{
	//CB: Avox please make insertText for text frame to nuke all this
	// is it really applied?
	bool done = false;

	for (uint i = 0; i < m_Doc->m_Selection->count(); ++i)
	{
		PageItem* currItem=m_Doc->m_Selection->itemAt(i);
		if (currItem == NULL)
			continue;
		if (!currItem->asTextFrame())
			continue;
		if (currItem->itemText.length() != 0)
		{
			m_Doc->itemSelection_ClearItem();
			/* ClearItem() doesn't return true or false so
			the following test has to be done */
			if (currItem->itemText.length() != 0)
				continue;
		}

		LoremParser *lp = new LoremParser(name);
		if (lp == NULL)
		{
			qDebug("LoremManager::okButton_clicked() *lp == NULL");
			return;
		}
		Serializer *ss = new Serializer("");
		if (ss != NULL)
		{
			done = true;
			ss->Objekt = lp->createLorem(paraCount);
			int st = findParagraphStyle(m_Doc, m_Doc->currentStyle);
			if (st > 5)
				ss->GetText(currItem, st, m_Doc->docParagraphStyles[st].charStyle().font().scName(), m_Doc->docParagraphStyles[st].charStyle().fontSize(), true);
			else
				ss->GetText(currItem, st, currItem->currentCharStyle().font().scName(), currItem->currentCharStyle().fontSize(), true);
			delete ss;
		}
		delete lp;
		//if (ScMW->view->SelItem.at(i)->Doc->docHyphenator->AutoCheck)
		//	ScMW->view->SelItem.at(i)->Doc->docHyphenator->slotHyphenate(ScMW->view->SelItem.at(i));
		if (m_Doc->docHyphenator->AutoCheck)
			m_Doc->docHyphenator->slotHyphenate(currItem);
	}
	if (done)
	{
		m_Doc->view()->updateContents();
		m_Doc->changed();
	}
}
