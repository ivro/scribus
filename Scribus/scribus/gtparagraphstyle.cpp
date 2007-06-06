/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
 *   Copyright (C) 2004 by Riku Leino                                      *
 *   tsoots@gmail.com                                                      *
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

#include "gtparagraphstyle.h"
#include "scribusstructs.h"

gtParagraphStyle::gtParagraphStyle(QString name) : gtStyle(name) 
{
	init();
}

gtParagraphStyle::gtParagraphStyle(const gtParagraphStyle& p) : gtStyle(p)
{
	lineSpacing     = p.lineSpacing;
	alignment       = p.alignment;
	indent          = p.indent;
	firstLineIndent = p.firstLineIndent;
	spaceAbove      = p.spaceAbove;
	spaceBelow      = p.spaceBelow;
	dropCap         = p.dropCap;
	dropCapHeight   = p.dropCapHeight;
	adjToBaseline   = p.adjToBaseline;
	autoLineSpacing = p.autoLineSpacing;
	isVisible       = p.isVisible;
}

gtParagraphStyle::gtParagraphStyle(const gtStyle& s) : gtStyle(s)
{
	init();
}

void gtParagraphStyle::init()
{
	lineSpacing     = 15;
	alignment       = LEFT;
	indent          = 0;
	firstLineIndent = 0;
	spaceAbove      = 0;
	spaceBelow      = 0;
	dropCap         = false;
	dropCapHeight   = 2;
	adjToBaseline   = false;
	autoLineSpacing = false;
	isVisible       = true;
}

QString gtParagraphStyle::target()
{
	return QString("paragraph");
}

double gtParagraphStyle::getLineSpacing()
{
	return lineSpacing;
}

void gtParagraphStyle::setLineSpacing(double newLineSpacing)
{
	lineSpacing = newLineSpacing;
}

bool gtParagraphStyle::getAutoLineSpacing()
{
	return autoLineSpacing;
}

void gtParagraphStyle::setAutoLineSpacing(bool newALS)
{
	autoLineSpacing = newALS;
}

int gtParagraphStyle::getAlignment()
{
	return alignment;
}

void gtParagraphStyle::setAlignment(Alignment newAlignment)
{
	alignment = newAlignment;
}

void gtParagraphStyle::setAlignment(int newAlignment)
{
	if ((newAlignment > -1) && (newAlignment < AlignmentMAX))
		alignment = newAlignment;
}

double gtParagraphStyle::getIndent()
{
	return indent;
}

void gtParagraphStyle::setIndent(double newIndent)
{
	indent = newIndent;
}

double gtParagraphStyle::getFirstLineIndent()
{
	return firstLineIndent;
}

void gtParagraphStyle::setFirstLineIndent(double newFirstLineIndent)
{
	firstLineIndent = newFirstLineIndent;
}

double gtParagraphStyle::getSpaceAbove()
{
	return spaceAbove;
}

void gtParagraphStyle::setSpaceAbove(double newSpaceAbove)
{
	spaceAbove = newSpaceAbove;
}

double gtParagraphStyle::getSpaceBelow()
{
	return spaceBelow;
}

void gtParagraphStyle::setSpaceBelow(double newSpaceBelow)
{
	spaceBelow = newSpaceBelow;
}

QList<ParagraphStyle::TabRecord>* gtParagraphStyle::getTabValues()
{
	return &tabValues;
}

void gtParagraphStyle::setTabValue(double newTabValue, TabType ttype)
{
	ParagraphStyle::TabRecord tb;
	tb.tabPosition = newTabValue;
	tb.tabType = ttype;
	tb.tabFillChar =  QChar();
	tabValues.append(tb);
}

bool gtParagraphStyle::hasDropCap()
{
	return dropCap;
}

void gtParagraphStyle::setDropCap(bool newDropCap)
{
	dropCap = newDropCap;
}

void gtParagraphStyle::setDropCap(int newHeight)
{
	setDropCap(true);
	dropCapHeight = newHeight;
}

int gtParagraphStyle::getDropCapHeight()
{
	return dropCapHeight;
}

void   gtParagraphStyle::setDropCapHeight(int newHeight)
{
	dropCapHeight = newHeight;
}

bool gtParagraphStyle::isAdjToBaseline()
{
	return adjToBaseline;
}

void gtParagraphStyle::setAdjToBaseline(bool newAdjToBaseline)
{
	adjToBaseline = newAdjToBaseline;
}

void gtParagraphStyle::getStyle(gtStyle* style)
{
	*style = gtStyle(*this);
}

gtParagraphStyle::~gtParagraphStyle()
{

}
