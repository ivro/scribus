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

#ifndef PREFSTABLE_H
#define PREFSTABLE_H

#include <string>
#include <vector>
#include <qmap.h>
#include <qstring.h>
#include <qstringlist.h>

typedef std::vector<QStringList*> Table;

class PrefsTable
{
private:
	QString name;
	Table table;
	int rowCount;
	int colCount;
	void checkSize(int rowIndex, int colIndex, QString defValue = "");
	void checkHeight(int rowIndex);
	void checkWidth(int rowIndex, int colIndex, QString defValue = "");
public:
	PrefsTable(QString tableName);
	~PrefsTable();
	QString getName();
	int     height();
	int     getRowCount();
	int     width();
	int     getColCount();
	QString get(int row, int col, const QString& defValue = "");
	void    set(int row, int col, const char* value);
	void    set(int row, int col, const std::string& value);
	void    set(int row, int col, const QString& value);
	int     getInt(int row, int col, int defValue = -1);
	void    set(int row, int col, int value);
	uint    getUInt(int row, int col, uint defValue = 0);
	double  getDouble(int row, int col, double defValue = -1.0);
	void    set(int row, int col, double value);
	bool    getBool(int row, int col, bool defValue = false);
	void    set(int row, int col, bool value);
};

#endif
