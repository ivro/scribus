/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          spalette.cpp  -  description
                             -------------------
    begin                : Wed Apr 25 2001
    copyright            : (C) 2001 by Franz Schmid
    email                : Franz.Schmid@altmuehlnet.de
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include <qlistbox.h>
#include "scribusdoc.h"
#include "spalette.h"
#include "spalette.moc"

#include "page.h"

Spalette::Spalette(QWidget* parent) : QComboBox(true, parent, "Sfloat")
{
//	setMinimumSize(QSize(10,static_cast<int>(font().pointSize()*2.5)));
//	setSizePolicy( QSizePolicy( (QSizePolicy::SizeType)3, (QSizePolicy::SizeType)1, 0, 0,
//  										 sizePolicy().hasHeightForWidth() ) );
	setEditable(false);
	insertItem( tr("No Style"));
	currentDoc = NULL;
	connect(this, SIGNAL(activated(int)), this, SLOT(selFormat(int)));
}

void Spalette::setFormats(ScribusDoc *newCurrentDoc)
{
	currentDoc = newCurrentDoc;
	updateFormatList();
}

void Spalette::setFormat(QString name)
{
	setCurrentText(name.isEmpty() ? tr("No Style") : name);
}

void Spalette::updateFormatList()
{
	disconnect(this, SIGNAL(activated(int)), this, SLOT(selFormat(int)));
	clear();
	if (currentDoc != NULL)
	{
		QStringList st;
		st.clear();
		insertItem( tr("No Style"));
		for (uint x = 0; x < currentDoc->docParagraphStyles.count(); ++x)
			if ( !currentDoc->docParagraphStyles[x].name().isEmpty() )
				st.append(currentDoc->docParagraphStyles[x].name());
		st.sort();
		insertStringList(st);
	}
	listBox()->setMinimumWidth(listBox()->maxItemWidth()+24);
	connect(this, SIGNAL(activated(int)), this, SLOT(selFormat(int)));
}

void Spalette::selFormat(int e)
{
	if (e == 0)
	{
		emit newStyle(0);
		return;
	}
	for (uint x = 0; x < currentDoc->docParagraphStyles.count(); ++x)
	{
		if (currentDoc->docParagraphStyles[x].name() == currentText())
		{
			emit newStyle(x);
			break;
		}
	}
}
