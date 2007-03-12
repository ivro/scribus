/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          pageitem.h  -  description
                             -------------------
    copyright            : Scribus Team
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#ifndef PAGEITEM_IMAGEFRAME_H
#define PAGEITEM_IMAGEFRAME_H

#include <qobject.h>
#include <qwidget.h>
#include <q3pointarray.h>
#include <q3ptrlist.h>
#include <qpixmap.h>
#include <q3valuestack.h>
#include <q3valuelist.h>

#include <qstring.h>
#include <qrect.h>
//Added by qt3to4:
#include <QKeyEvent>

#include "scribusapi.h"
#include "undoobject.h"
#include "scimage.h"
#include "pagestructs.h"
#include "pageitem.h"
class ScPainter;
class ScribusDoc;
class UndoManager;
class UndoState;
struct CopyPasteBuffer;

class SCRIBUS_API PageItem_ImageFrame : public PageItem
{
	Q_OBJECT

public:
	PageItem_ImageFrame(ScribusDoc *pa, double x, double y, double w, double h, double w2, QString fill, QString outline);
	PageItem_ImageFrame(const PageItem & p) : PageItem(p) {}
	~PageItem_ImageFrame() {};

	virtual PageItem_ImageFrame * asImageFrame() { return this; }
	virtual void handleModeEditKey(QKeyEvent *k, bool& keyRepeat);
	virtual void clearContents();
	
protected:
	virtual void DrawObj_Item(ScPainter *p, QRect e, double sc);

};

#endif
