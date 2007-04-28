/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef CMYKFARBEN_H
#define CMYKFARBEN_H

#include <qdialog.h>
#include <qpixmap.h>
#include <qcolor.h>
#include <qcheckbox.h>
#include <qcombobox.h>
#include <q3frame.h>
#include <qlabel.h>
#include <qpushbutton.h>
#include <qslider.h>
#include <qlayout.h>
#include <qtooltip.h>
#include <qlineedit.h>
#include <q3widgetstack.h>
#include <q3listbox.h>
//Added by qt3to4:
#include <QGridLayout>
#include <Q3HBoxLayout>
#include <Q3VBoxLayout>
#include <QMouseEvent>

class ScColor;
class ScribusDoc;
class ColorListBox;
#include "colorchart.h"
#include "colorsetmanager.h"
#include "scrspinbox.h"
#include "scribusapi.h"
#include "scribusstructs.h"

class SCRIBUS_API CMYKChoose : public QDialog
{
	Q_OBJECT

public:
	CMYKChoose( QWidget* parent, ScribusDoc* doc, ScColor orig, QString name, ColorList *Colors, QStringList Cust, bool newCol );
	~CMYKChoose() {};
	virtual void mouseReleaseEvent(QMouseEvent *m);
	QLabel* TextLabel1;
	QLineEdit* Farbname;
	QLabel* TextLabel3;
	QComboBox* ComboBox1;
	QCheckBox* Separations;
	QCheckBox* Regist;
	QComboBox* Swatches;
	QLabel* TextLabel5_2;
	QLabel* OldC;
	QLabel* TextLabel5;
	QLabel* NewC;
	QPushButton* Cancel;
	QPushButton* Cancel_2;
	Q3Frame* Frame4;
	Q3WidgetStack* TabStack;
	Q3Frame* Frame5;
	Q3Frame* Frame5a;
	ColorListBox* ColorSwatch;
	ColorChart* ColorMap;
	QLabel* CyanP;
	QLabel* CyanT;
	QSlider* CyanSL;
	ScrSpinBox* CyanSp;
	QLabel* MagentaP;
	QLabel* MagentaT;
	QSlider* MagentaSL;
	ScrSpinBox* MagentaSp;
	QLabel* YellowP;
	QLabel* YellowT;
	QSlider* YellowSL;
	ScrSpinBox* YellowSp;
	QLabel* BlackP;
	QLabel* BlackT;
	QSlider* BlackSL;
	ScrSpinBox* BlackSp;
	QPixmap imageA;
	QPixmap imageN;
	QPixmap alertIcon;
	ScColor Farbe;
	bool CMYKmode;
	bool Wsave;
	bool dynamic;
	bool isNew;
	int BlackComp;
	ColorList *EColors;
	ColorList CurrSwatch;
	QStringList CColSet;
	QString Fnam;

public slots:
	void setValSLiders(double value);
	void SetValueS(int val);
	void ToggleSL();
	QPixmap SliderPix(int farbe);
	QPixmap SliderBlack();
	void SelSwatch(int n);
	void setSpot();
	void setRegist();
	void SelModel(const QString& mod);
	void setColor();
	void setColor2(int h, int s, bool ende);
	void SelFromSwatch( int c);
	void setValues();
	void Verlassen();

protected:
	Q3HBoxLayout* CMYKFarbenLayout;
	Q3VBoxLayout* Layout23;
	QGridLayout* Layout2;
	QGridLayout* Layout2x;
	Q3HBoxLayout* Layout21;
	Q3VBoxLayout* Frame4Layout;
	Q3HBoxLayout* Frame5Layout;
	Q3HBoxLayout* Frame5aLayout;
	Q3VBoxLayout* Layout1_2;
	Q3VBoxLayout* Layout1_2_2;
	Q3VBoxLayout* Layout1_2_3;
	Q3VBoxLayout* Layout1_2_4;
	
	ColorSetManager csm;
	int customSetStartIndex;
	ScribusDoc* m_doc;
};

#endif // CMYKFARBEN_H
