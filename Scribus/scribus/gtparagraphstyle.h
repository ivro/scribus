/***************************************************************************
 *   Copyright (C) 2004 by Riku Leino                                      *
 *   tsoots@welho.com                                                      *
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

#ifndef GTPARAGRAPHSTYLE_H
#define GTPARAGRAPHSTYLE_H

#include <qvaluelist.h>
#include "gtstyle.h"

enum Alignment {
	LEFT,
	CENTER,
	RIGHT,
	BLOCK,
	FORCED,
	AlignmentMAX
};

enum TabType {
	LEFT_T,
	RIGHT_T,
	FULL_STOP_T,
	COMMA_T,
	CENTER_T
};

class gtParagraphStyle : public gtStyle
{
private:
	void init();
protected:
	double lineSpacing;
	int    alignment;
	double indent;
	double firstLineIndent;
	double spaceAbove;
	double spaceBelow;
	QValueList<double> tabValues;
	bool dropCap;
	int  dropCapHeight;
	bool adjToBaseline;
	bool autoLineSpacing;
	bool isVisible;
public:
	double getLineSpacing();
	void   setLineSpacing(double newLineSpacing);
	bool   getAutoLineSpacing();
	void   setAutoLineSpacing(bool newALS);
	int    getAlignment();
	void   setAlignment(Alignment newAlignment);
	void   setAlignment(int newAlignment);
	double getIndent();
	void   setIndent(double newIndent);
	double getFirstLineIndent();
	void   setFirstLineIndent(double newFirstLineIndent);
	double getSpaceAbove();
	void   setSpaceAbove(double newSpaceAbove);
	double getSpaceBelow();
	void   setSpaceBelow(double newSpaceBelow);
	QValueList<double>* getTabValues();
	void   setTabValue(double newTabValue, TabType ttype = LEFT_T);
	bool   hasDropCap();
	void   setDropCap(bool newDropCap);
	void   setDropCap(int newHeight);
	int    getDropCapHeight();
	void   setDropCapHeight(int newHeight);
	bool   isAdjToBaseline();
	void   setAdjToBaseline(bool newAdjToBaseline);
	void   getStyle(gtStyle* style);
	gtParagraphStyle(QString name);
	gtParagraphStyle(const gtParagraphStyle& p);
	gtParagraphStyle(const gtStyle& s);
	~gtParagraphStyle();
	QString target();
};

#endif // GTPARAGRAPHSTYLE_H
