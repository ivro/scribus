/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef MEASUREMENTS_H
#define MEASUREMENTS_H

#include "scribusapi.h"
#include "scrpalettebase.h"
//Added by qt3to4:
#include <Q3VBoxLayout>
#include <Q3GridLayout>
#include <Q3HBoxLayout>
#include <QLabel>

class Q3VBoxLayout;
class Q3HBoxLayout;
class Q3GridLayout;
class QLabel;
class QVariant;

class SCRIBUS_API Measurements : public ScrPaletteBase
{
	Q_OBJECT

public:
	Measurements( QWidget* parent );
	~Measurements() {};
	//void closeEvent(QCloseEvent *ce);

signals:
	//void Schliessen(bool);

public slots:
	void setValues(double x1, double y1, double x2, double y2, double angle, double length, int unitIndex);
	void languageChange();

protected:
	Q3GridLayout* measurementsLayout;
	QLabel* x1Label;
	QLabel* y1Label;
	QLabel* x2Label;
	QLabel* y2Label;
	QLabel* dxLabel;
	QLabel* dyLabel;
	QLabel* angleLabel;
	QLabel* lengthLabel;
	QLabel* x1Data;
	QLabel* y1Data;
	QLabel* x2Data;
	QLabel* y2Data;
	QLabel* dXData;
	QLabel* dYData;
	QLabel* lengthData;
	QLabel* angleData;
};

#endif // MEASUREMENTS_H
