/***************************************************************************
                          texttoolb.h  -  description
                             -------------------
    begin                : Sun Mar 10 2002
    copyright            : (C) 2002 by Franz Schmid
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

#ifndef WERKTOOLB_H
#define WERKTOOLB_H

#include "sctoolbar.h"
#include <qmainwindow.h>
#include <qtoolbutton.h>
#include <qtooltip.h>
#include <qpopupmenu.h>

class Autoforms;
/**
  *@author Franz Schmid
  */

class WerkToolB : public ScToolBar
{
	Q_OBJECT

public: 
	WerkToolB(QMainWindow* parent);
	~WerkToolB() {};
	QToolButton* Select;
	QToolButton* Rotiere;
	QToolButton* Textedit;
	QToolButton* Textedit2;
	QToolButton* Zoom;
	QToolButton* Texte;
	QToolButton* BildB;
	QToolButton* TableB;
	QToolButton* Linien;
	Autoforms* Rechteck;
	QToolButton* Polygon;
	QToolButton* PolyLin;
	QPopupMenu* PolyM;
	QPopupMenu* LinM;
	QToolButton* KetteEin;
	QToolButton* KetteAus;
	QToolButton* Measure;
	bool Sichtbar;
	int SubMode;
	int ValCount;
	int LMode;
	double *ShapeVals;

public slots:
	void GetPolyProps();
	void SelShape(int s, int c, double *vals);
	void SelShape2();
	void ModeFromTB();
	void setLinMode(int id);
		
signals:
	void Schliessen();
	void NewMode(int);
};

class WerkToolBP : public ScToolBar
{
	Q_OBJECT

public:
	WerkToolBP(QMainWindow* parent);
	~WerkToolBP() {};
	QToolButton* PDFTool;
	QPopupMenu* PDFM;
	QToolButton* PDFaTool;
	QPopupMenu* PDFA;
	bool Sichtbar;
	int PDFwerkz;
	int PDFnotiz;

public slots:
	void setPDFnotiz(int id);
	void setPDFtool(int id);
	void ModeFromTB();

signals:
	void Schliessen();
	void NewMode(int);
};

#endif
