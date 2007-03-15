/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          rulermover.cpp  -  description
                             -------------------
    begin                : Sun Jul 24 2005
    copyright            : (C) 2005 by Franz Schmid
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

#include "rulermover.h"
//#include "rulermover.moc"
#include "scribusview.h"
#include "scribusdoc.h"
#include <qcursor.h>
#include <qapplication.h>
//Added by qt3to4:
#include <QMouseEvent>
#include <QPixmap>
extern QPixmap loadIcon(QString nam);

RulerMover::RulerMover(ScribusView *pa) : QWidget(pa)
{
 	setErasePixmap(loadIcon("mover.png"));
	currView = pa;
	Mpressed = false;
}

void RulerMover::mouseDoubleClickEvent(QMouseEvent *)
{
	currView->Doc->rulerXoffset = 0;
	currView->Doc->rulerYoffset = 0;
	currView->DrawNew();
}

void RulerMover::mousePressEvent(QMouseEvent *m)
{
	Mpressed = true;
	QPoint py = currView->viewport()->mapFromGlobal(m->globalPos());
	currView->DrVX = py.x();
	currView->DrHY = py.y();
	qApp->setOverrideCursor(QCursor(Qt::SizeAllCursor), true);
}

void RulerMover::mouseReleaseEvent(QMouseEvent *m)
{
	if ((Mpressed) && (m->pos().x() > width()) && (m->pos().y() > height()))
	{
		currView->DrVX = -1;
		currView->DrHY = -1;
		currView->setNewRulerOrigin(m);
	}
	qApp->setOverrideCursor(QCursor(Qt::ArrowCursor), true);
	Mpressed = false;
}

void RulerMover::mouseMoveEvent(QMouseEvent *m)
{
	if ((Mpressed) && (m->pos().x() > width()) && (m->pos().y() > height()))
		currView->rulerMove(m);
}
