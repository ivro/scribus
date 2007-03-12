/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
#ifndef ANNOTA_H
#define ANNOTA_H

#include <qdialog.h>
#include <qcombobox.h>
#include <q3groupbox.h>
#include <qlabel.h>
#include <qpushbutton.h>
#include <qspinbox.h>
#include <qlayout.h>
#include <qtooltip.h>
#include <q3widgetstack.h>
#include <qlineedit.h>
#include <q3frame.h>
//Added by qt3to4:
#include <Q3GridLayout>
#include <Q3HBoxLayout>
#include <Q3VBoxLayout>

#include "scribusapi.h"

class PageItem;
class Navigator;
class ScribusView;

class SCRIBUS_API Annota : public QDialog
{
	Q_OBJECT

public:
	Annota(QWidget* parent, PageItem *it, int Seite, int b, int h, ScribusView* vie);
	~Annota() {};
	Q3WidgetStack* Fram;
	QLabel* TextLabel1;
	QComboBox* ComboBox1;
	Q3GroupBox* GroupBox1;
	QLabel* TextLabel3;
	QLabel* TextLabel4;
	QLabel* TextLabel5;
	QLineEdit* Destfile;
	QPushButton* ChFile;
	Navigator* Pg;
	QSpinBox* SpinBox1;
	QSpinBox* SpinBox2;
	QSpinBox* SpinBox3;
	Q3Frame* Frame9;
	QPushButton* PushButton1;
	QPushButton* PushButton2;
	PageItem* item;
	ScribusView* view;
	int Breite;
	int Hoehe;
	int OriBreite;
	int OriHoehe;
	int MaxSeite;

public slots:
	void SetCo(double x, double y);
	void SetPg(int v);
	void SetCross();
	void SetVals();
	void SetZiel(int i);
	void GetFile();

protected:
	Q3VBoxLayout* AnnotLayout;
	Q3HBoxLayout* Layout1;
	Q3GridLayout* GroupBox1Layout;
	Q3HBoxLayout* Layout1_2;
};

#endif // ANNOT_H
