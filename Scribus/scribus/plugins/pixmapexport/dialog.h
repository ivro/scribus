/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef EXPORTFORM_H
#define EXPORTFORM_H

#include <qvariant.h>
#include <qdialog.h>
#include <qradiobutton.h>

class QVBoxLayout;
class QHBoxLayout;
class QGridLayout;
class QButtonGroup;
class QComboBox;
class QGroupBox;
class QLabel;
class QLineEdit;
class QPushButton;
class QSpinBox;
class PrefsContext;
class MSpinBox;
class ScribusDoc;

class ExportForm : public QDialog
{
	Q_OBJECT

public:
	ExportForm( QWidget* parent, ScribusDoc* doc, int size, int quality, QString type);
	~ExportForm();

	QString bitmapType;

	QLabel* TextLabel1;
	QLineEdit* OutputDirectory;
	QPushButton* OutputDirectoryButton;
	QGroupBox* groupBox1;
	QLabel* TextLabel2;
	QLabel* textLabel1;
	QLabel* textLabel3;
	QLabel* textLabel4;
	QLabel* textLabel5;
	QLabel* textLabel6;
	QComboBox* BitmapType;
	QSpinBox* QualityBox;
	QSpinBox* DPIBox;
	MSpinBox* EnlargementBox;
	QButtonGroup* ButtonGroup1;
	QRadioButton* OnePageRadio;
	QRadioButton* AllPagesRadio;
	QRadioButton* IntervalPagesRadio;
	QLineEdit* RangeVal;
	QPushButton* OkButton;
	QPushButton* CancelButton;
	

public slots:
	virtual void OutputDirectoryButton_pressed();
	virtual void OkButton_pressed();
	virtual void IntervalPagesRadio_stateChanged( int );
	virtual void AllPagesRadio_stateChanged( int );
	virtual void OnePageRadio_stateChanged( int );
	virtual void computeSize();

protected:
	QVBoxLayout* ExportFormLayout;
	QHBoxLayout* layout1;
	QHBoxLayout* layout3;
	QGridLayout* groupBox1Layout;
	QVBoxLayout* ButtonGroup1Layout;
	QHBoxLayout* layout2;
	QHBoxLayout* layout4;
	QHBoxLayout *pageNumberSelectorLayout;
	QPushButton* pageNrButton;
	PrefsContext* prefs;
	ScribusDoc*  m_doc;
	int m_PageCount;
	
protected slots:
	virtual void createPageNumberRange();
	virtual void languageChange();
	virtual void readConfig();
	virtual void writeConfig();
};

#endif // EXPORTFORM_H
