/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef CMSPREFS_H
#define CMSPREFS_H

#include <qwidget.h>
#include <qcheckbox.h>
#include <qcombobox.h>
#include <qgroupbox.h>
#include <qlabel.h>
#include <qlayout.h>
#include <qtooltip.h>
#include "scribusapi.h"
#include "scribusstructs.h"

class SCRIBUS_API CMSPrefs : public QWidget
{
	Q_OBJECT

public:
	CMSPrefs( QWidget* parent, CMSData *Vor, ProfilesL *InputProfiles, ProfilesL *InputProfilesCMYK, ProfilesL *PrinterProfiles, ProfilesL *MonitorProfiles);
	~CMSPrefs() {};
	void restoreDefaults();

	QCheckBox* checkBox1;
	QGroupBox* sysProfiles;
	QLabel* text2;
	QLabel* text1;
	QLabel* text1CMYK;
	QLabel* text3;
	QLabel* text4;
	QLabel* text5;
	QComboBox* inputPRGBIm;
	QComboBox* inputPCMYKIm;
	QComboBox* inputPRGB;
	QComboBox* inputPCMYK;
	QComboBox* monitorP;
	QComboBox* printerP;
	QGroupBox* render;
	QLabel* text22;
	QComboBox* imagesI;
	QComboBox* colorsI;
	QLabel* text21;
	QCheckBox* simulate;
	QCheckBox* convertAll;
	QCheckBox* gamutC;
	QCheckBox* blackP;
	CMSData *prefs;
	bool changed;

public slots:
	virtual void slotCMSon();
	virtual void setValues();
	virtual void slotSimula();

signals:
	void cmsOn(bool);

protected:
	QVBoxLayout* cmsPrefsLayout;
	QGridLayout* sysProfilesLayout;
	QGridLayout* renderLayout;
	QHBoxLayout* convertLayout;
	QHBoxLayout* gamutLayout;
};

#endif // CMSPREFS_H
