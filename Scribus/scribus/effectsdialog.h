/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef EFFECTSDIALOG_H
#define EFFECTSDIALOG_H

#include <qvariant.h>
#include <qpixmap.h>
#include <qdialog.h>
#include <qvaluelist.h>
#include <qmap.h>

#include "scribusapi.h"
#include "pageitem.h"
class QVBoxLayout;
class QHBoxLayout;
class QGridLayout;
class QSpacerItem;
class QLabel;
class QListBox;
class QListBoxItem;
class QPushButton;
class QComboBox;
class ScribusDoc;
class ShadeButton;
class QWidgetStack;
class QWidget;
class QSlider;
class MSpinBox;

class SCRIBUS_API EffectsDialog : public QDialog
{
	Q_OBJECT

public:
	EffectsDialog( QWidget* parent, PageItem* item, ScribusDoc* docc );
	~EffectsDialog() {};

	QLabel* pixmapLabel1;
	QLabel* textLabel1;
	QLabel* textLabel2;
	QLabel* textLabel3;
	QLabel* textLabel4;
	QLabel* textLabel5;
	QLabel* textLabel6;
	QLabel* textLabel7;
	QLabel* textLabel8;
	QLabel* textLabel9;
	QLabel* textLabel10;
	QLabel* textLabel11;
	QLabel* textLabel12;
//	QLabel* textLabel13;
	QLabel* textLabel14;
	QLabel* textLabel15;
	QWidgetStack* optionStack;
	QWidget* WStackPage;
	QWidget* WStackPage_2;
	QComboBox* colData;
	ShadeButton *shade;
	QWidget* WStackPage_3;
	QSlider* brightnessSlider;
	QWidget* WStackPage_4;
	QSlider* contrastSlider;
	QWidget* WStackPage_5;
	MSpinBox* shRadius;
	MSpinBox* shValue;
	QWidget* WStackPage_6;
	MSpinBox* blRadius;
//	MSpinBox* blValue;
	QWidget* WStackPage_7;
	QSlider* solarizeSlider;
	QWidget* WStackPage_8;
	QLabel* textLabel1d;
	QComboBox* colData1;
	ShadeButton *shade1;
	QLabel* textLabel2d;
	QComboBox* colData2;
	ShadeButton *shade2;

	QWidget* WStackPage_9;
	QLabel* textLabel1t;
	QComboBox* colDatat1;
	ShadeButton *shadet1;
	QLabel* textLabel2t;
	QComboBox* colDatat2;
	ShadeButton *shadet2;
	QLabel* textLabel3t;
	QComboBox* colDatat3;
	ShadeButton *shadet3;

	QWidget* WStackPage_10;
	QLabel* textLabel1q;
	QComboBox* colDataq1;
	ShadeButton *shadeq1;
	QLabel* textLabel2q;
	QComboBox* colDataq2;
	ShadeButton *shadeq2;
	QLabel* textLabel3q;
	QComboBox* colDataq3;
	ShadeButton *shadeq3;
	QLabel* textLabel4q;
	QComboBox* colDataq4;
	ShadeButton *shadeq4;

	QListBox* usedEffects;
	QPushButton* effectUp;
	QPushButton* effectDown;
	QPushButton* toEffects;
	QPushButton* fromEffects;
	QListBox* availableEffects;
	QPushButton* okButton;
	QPushButton* cancelButton;
	QValueList<ScImage::imageEffect> effectsList;
	QMap<QListBoxItem*, QString> effectValMap;
	QListBoxItem* currentOptions;
	ScribusDoc* doc;
	PageItem* currItem;
	ScImage image;
	QTime tim;
	double imageScale;

public slots:
	virtual void leaveOK();
	virtual void updateSolarize(int val);
	virtual void updateContrast(int val);
	virtual void updateBright(int val);
	virtual void createPreview();
	virtual void saveValues(bool final);
	virtual void moveToEffects();
	virtual void moveFromEffects();
	virtual void moveEffectUp();
	virtual void moveEffectDown();
	virtual void selectEffect(QListBoxItem* c);
	virtual void selectAvailEffect(QListBoxItem* c);

protected:
	QHBoxLayout* EffectsDialogLayout;
	QVBoxLayout* WStackPageLayout;
	QVBoxLayout* WStackPage3Layout;
	QHBoxLayout* layout20;
	QVBoxLayout* WStackPage4Layout;
	QHBoxLayout* layout21;
	QVBoxLayout* WStackPage5Layout;
	QHBoxLayout* layout22;
	QHBoxLayout* layout23;
	QVBoxLayout* WStackPage6Layout;
	QHBoxLayout* layout24;
//	QHBoxLayout* layout25;
	QVBoxLayout* WStackPage7Layout;
	QGridLayout* WStackPage8Layout;
	QGridLayout* WStackPage9Layout;
	QGridLayout* WStackPage10Layout;
	QHBoxLayout* layout26;
	QHBoxLayout* layout17;
	QHBoxLayout* layout19;
	QGridLayout* layout10;
	QVBoxLayout* layout8;
	QHBoxLayout* layout7;
	QVBoxLayout* layout1;
	QVBoxLayout* layout2;
	QVBoxLayout* layout16;
	QVBoxLayout* layout18;
	QHBoxLayout* layout9;
};

#endif // EFFECTSDIALOG_H
