/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/* This is the Scribus Short Words GUI class specification.

This code is based on the Scribus-Vlna plug in rewritten for
international use.

2004 Petr Vanek <petr@yarpen.cz>

This program is free software - see LICENSE file in the distribution
or documentation
*/

#ifndef _SHORTWORDSDIALOG_H
#define _SHORTWORDSDIALOG_H

#include <QDialog>

class QVBoxLayout;
class QHBoxLayout;
class QGridLayout;
class QGroupBox;
class QRadioButton;
class QPushButton;
class QLabel;

class SWConfig;

/*! \brief GUI dialog for user to make decision.
Generated from Qt designer UI file. Later changes by my hands :)
\author Petr Vanek <petr@yarpen.cz>
*/
class SWDialog : public QDialog
{
	Q_OBJECT

public:
	SWDialog(QWidget* parent = 0);
	~SWDialog();

	//! reference on the config structure
	SWConfig *cfg;

	QGroupBox* buttonGroup;
	QRadioButton* frameRadio;
	QRadioButton* pageRadio;
	QRadioButton* allRadio;
	QPushButton* okButton;
	QPushButton* cancelButton;
	/*! \brief 1-3 integer - value of the radio button group transformed */
	int actionSelected;

	/*! \brief  from config file */
	void selectAction(int aAction);

public slots:
	/*! \brief  run shorts processing */
	virtual void okButton_pressed();
	/*! \brief  cancel and quit */
	virtual void cancelButton_pressed();

protected:
	QGridLayout* SWDialogLayout;
	QVBoxLayout* layout4;
	QHBoxLayout* layout3;
	QVBoxLayout* layout2;
	QVBoxLayout* layout1;

protected slots:
	virtual void languageChange();

};

#endif // SWDialog_H
