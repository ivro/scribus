/***************************************************************************
                          hruler.h  -  description
                             -------------------
    begin                : Tue Apr 10 2001
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

#ifndef HRULER_H
#define HRULER_H

#include <qwidget.h>
#include <qfont.h>
#include <qpainter.h>
#include <qcolor.h>
#include <qrect.h>
#include <qpointarray.h>
#include <qscrollview.h>
#include "scribusdoc.h"

/**Waagrechtes Lineal
  *@author Franz Schmid
  */

class Hruler : public QWidget  {
Q_OBJECT
public:
	Hruler(QScrollView *pa, ScribusDoc *doc);
	~Hruler() {};
	void paintEvent(QPaintEvent *);
	void mousePressEvent(QMouseEvent *);
	void mouseReleaseEvent(QMouseEvent *);
	void mouseMoveEvent(QMouseEvent *m);
	int offs;
	int Markp;
	bool repX;
	bool Mpressed;
  QFont rfont;
private: // Private attributes
  /** Zeichensatz des Lineals */
  ScribusDoc *doku;
public slots: // Public slots
  /** Zeichnet den Pfeil */
  void Draw(int wo);
};

#endif
