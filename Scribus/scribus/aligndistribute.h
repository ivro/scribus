/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
	begin                : June 2005
	copyright            : (C) 2005 by Craig Bradney
	email                : cbradney@zip.com.au
***************************************************************************/

/***************************************************************************
*                                                                         *
*   Scribus is free software; you can redistribute it and/or modify       *
*   it under the terms of the GNU General Public License as published by  *
*   the Free Software Foundation; either version 2 of the License, or     *
*   (at your option) any later version.                                   *
*                                                                         *
***************************************************************************/

#ifndef ALIGNDISTRIBUTEPALETTE_H
#define ALIGNDISTRIBUTEPALETTE_H

#include <qvariant.h>
#include <qpixmap.h>
#include <qdialog.h>

#include "scribusapi.h"
#include "scribusstructs.h"
#include "scribusview.h"
#include "scrpalettebase.h"

class QVBoxLayout;
class QHBoxLayout;
class QGridLayout;
class QSpacerItem;
class QGroupBox;
class QLabel;
class QLineEdit;
class QComboBox;
class QToolButton;
class MSpinBox;

class ScribusMainWindow;
class ScribusDoc;
class UndoManager;

class SCRIBUS_API AlignDistributePalette : public ScrPaletteBase
{
	Q_OBJECT

public:
	AlignDistributePalette( QWidget* parent = 0, const char* name = 0, bool modal = FALSE, WFlags fl = 0 );
	~AlignDistributePalette();

	virtual void setDoc( ScribusDoc* newDoc );
	void unitChange();
	
public slots:
	void setGuide(int, double);

protected:
	ScribusView *currView;
	
	
	QGroupBox* alignGroupBox;
	QLabel* alignRelativeToLabel;
	QComboBox* alignRelativeToCombo;
	QToolButton* alignLeftOutToolButton;
	QToolButton* alignRightOutToolButton;
	QToolButton* alignBottomInToolButton;
	QToolButton* alignRightInToolButton;
	QToolButton* alignBottomOutToolButton;
	QToolButton* alignCenterHorToolButton;
	QToolButton* alignLeftInToolButton;
	QToolButton* alignCenterVerToolButton;
	QToolButton* alignTopOutToolButton;
	QToolButton* alignTopInToolButton;
	QLabel *alignGuideLabel;
	QLineEdit* alignGuideLineEdit;
	QGroupBox* distributeGroupBox;
	QToolButton* distributeDistHToolButton;
	QToolButton* distributeDistValueHToolButton;
	QToolButton* distributeRightToolButton;
	QToolButton* distributeBottomToolButton;
	QToolButton* distributeCenterHToolButton;
	QToolButton* distributeDistVToolButton;
	QToolButton* distributeDistValueVToolButton;
	QToolButton* distributeLeftToolButton;
	QToolButton* distributeCenterVToolButton;
	QToolButton* distributeTopToolButton;
	QLabel* distributeDistLabel;
	MSpinBox* distributeDistMSpinBox;

	QVBoxLayout* AlignDistributePaletteLayout;
	QGridLayout* alignGroupBoxLayout;
	QHBoxLayout* alignGuideLayout;
	QSpacerItem* alignGuideLeftSpacer;
	QSpacerItem* alignGuideRightSpacer;

	QHBoxLayout* layout11;
	QHBoxLayout* layout14;
	QSpacerItem* spacer15;
	QSpacerItem* spacer16;
	QGridLayout* layout2;
	QGridLayout* distributeGroupBoxLayout;
	QHBoxLayout* layout4;
	QSpacerItem* distributeLeftSpacer;
	QSpacerItem* distributeRightSpacer;
	QGridLayout* layout1;
	QHBoxLayout* distanceLayout;
	QSpacerItem* distributeDistLeftSpacer;
	QSpacerItem* distributeDistRightSpacer;

protected slots:
	virtual void languageChange();
	
	void alignLeftOut();
	void alignRightOut();
	void alignBottomIn();
	void alignRightIn();
	void alignBottomOut();
	void alignCenterHor();
	void alignLeftIn();
	void alignCenterVer();
	void alignTopOut();
	void alignTopIn();
	void distributeDistH(bool usingDistance=false);
	void distributeDistValH();
	void distributeRight();
	void distributeBottom();
	void distributeCenterH();
	void distributeDistV(bool usingDistance=false);
	void distributeDistValV();
	void distributeLeft();
	void distributeCenterV();
	void distributeTop();
	
	void alignToChanged(int);

private:
	void init();
	UndoManager *undoManager;
	ScribusDoc::AlignTo currAlignTo;
	QValueList<AlignObjs> *alignObjects;
	ScribusDoc *currDoc;
	double unitRatio;
	int guideDirection;
	double guidePosition;
	QString guideInfoText, guideInfoTextNone;
	void enableGuideButtons();
	
signals:
	void documentChanged();

};

#endif // ALIGNDISTRIBUTEPALETTE_H
