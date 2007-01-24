/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          serializer.h  -  description
                             -------------------
    begin                : Sat May 5 2001
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

#ifndef SERIALIZER_H
#define SERIALIZER_H

#include <qstring.h>
#include "scribusapi.h"
#include "scribusview.h"
/**
  *@author Franz Schmid
  */

class SCRIBUS_API Serializer {
public: 
	Serializer(QString name);
	~Serializer() {};
	QString Filename;
	QString Objekt;
	int Count;
	
	QString GetObjekt();
	void PutText(PageItem *Item);
	void GetText(PageItem *Item, int Absatz, QString font, int size, bool Append = false);
	bool Write(QString Cod = "");
	bool Read(QString Cod = "");

	static bool readWithEncoding(const QString& filename, const QString& encoding, 
								 QString & txt);
	static bool writeWithEncoding(const QString& filename, const QString& encoding, 
								  const QString& txt);

};

#endif
