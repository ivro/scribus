/***************************************************************************
                          vruler.h  -  description
                             -------------------
    begin                : Wed Apr 11 2001
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

#ifndef VRULER_H
#define VRULER_H

#include <qwidget.h>
#include <qpainter.h>
#include "scribusdoc.h"
/**Vertikales Lineal
  *@author Franz Schmid
  */

class ScribusView;

class Vruler : public QWidget  
{
	Q_OBJECT

public: 
	Vruler(ScribusView *pa, ScribusDoc *doc);
	~Vruler() {};
	void paintEvent(QPaintEvent *);
	void mousePressEvent(QMouseEvent *m);
	void mouseReleaseEvent(QMouseEvent *m);
	void mouseMoveEvent(QMouseEvent *m);
	int offs;
	int Markp;
	int oldMark;
	bool Mpressed;
private: // Private attributes
  /** Zeichensatz des Lineals */
	ScribusDoc *doku;
	ScribusView *view;

public slots: // Public slots
  /** Zeichnet den Pfeil */
	void Draw(int wo);
};

#endif
