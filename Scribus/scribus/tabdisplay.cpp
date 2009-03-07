/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include <QPushButton>
#include <QCheckBox>
#include <QLabel>
#include <QSlider>
#include <QToolTip>
#include <QGroupBox>
#include <QColorDialog>
#include <QPainter>

#include <QList>
#include <QPixmap>
#include <QDesktopWidget>

#include "tabdisplay.h"

#include "scrspinbox.h"
#include "prefsmanager.h"
#include "units.h"
#include "util_icon.h"


TabDisplay::TabDisplay(QWidget* parent, const char* name)
	: QWidget(parent)
{
	setupUi(this);
	buttonRestoreDPI->setIcon(QIcon(loadIcon("screen.png")));
	backColor->setToolTip( "<qt>" + tr( "Color for paper" ) + "</qt>");
	checkUnprintable->setToolTip( "<qt>" + tr( "Mask the area outside the margins in the margin color" ) + "</qt>" );
	checkLink->setToolTip( "<qt>" + tr("Enable or disable  the display of linked frames.") + "</qt>");
	checkControl->setToolTip( "<qt>" + tr("Display non-printing characters such as paragraph markers in text frames") + "</qt>");
	checkFrame->setToolTip( "<qt>" + tr("Turns the display of frames on or off") + "</qt>");
	checkLayerM->setToolTip( "<qt>" + tr("Turns the display of layer indicators on or off") + "</qt>");
	checkPictures->setToolTip( "<qt>" + tr("Turns the display of images on or off") + "</qt>");
	checkShowPageShadow->setToolTip( "<qt>" + tr("Turns the page shadow on or off") + "</qt>");
	leftScratch->setToolTip( "<qt>" + tr( "Defines amount of space left of the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page" ) + "</qt>" );
	rightScratch->setToolTip( "<qt>" + tr( "Defines amount of space right of the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page" ) + "</qt>" );
	topScratch->setToolTip( "<qt>" + tr( "Defines amount of space above the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page" ) + "</qt>" );
	bottomScratch->setToolTip( "<qt>" + tr( "Defines amount of space below the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page" ) + "</qt>" );
	CaliText->setToolTip( "<qt>" + tr( "Set the default zoom level" )  + "</qt>");
	CaliGroup->setToolTip( "<qt>" + tr( "Place a ruler against your screen and drag the slider to set the zoom level so Scribus will display your pages and objects on them at the correct size" ) + "</qt>" );

	connect(backColor, SIGNAL(clicked()), this, SLOT(changePaperColor()));
	connect(buttonFrameSelected, SIGNAL(clicked()), this, SLOT(changeFrameColor()));
	connect(buttonFrameNormal, SIGNAL(clicked()), this, SLOT(changeNormFrameColor()));
	connect(buttonFrameGrouped, SIGNAL(clicked()), this, SLOT(changeGroupFrameColor()));
	connect(buttonFrameLinked, SIGNAL(clicked()), this, SLOT(changeChainFrameColor()));
	connect(buttonFrameLocked, SIGNAL(clicked()), this, SLOT(changeLockFrameColor()));
	connect(buttonFrameAnnotation, SIGNAL(clicked()), this, SLOT(changeAnnotFrameColor()));
	connect(buttonSelectedPage, SIGNAL(clicked()), this, SLOT(changePageBorderColor()));
	connect(buttonControlChars, SIGNAL(clicked()), this, SLOT(changeControlCharsColor()));

	connect(buttonRestoreDPI, SIGNAL(clicked()), this, SLOT(restoreDisScale()));
	connect(CaliSlider, SIGNAL(valueChanged(int)), this, SLOT(setDisScale()));
	connect(rulerUnitCombo, SIGNAL(activated(int)), this, SLOT(drawRuler()));
}

void TabDisplay::restoreDefaults(struct ApplicationPrefs *prefsData, struct guidesPrefs &guidesSettings, QList<PageSet> &pageSets, int pageLayout, MarginStruct &scratch)
{
	docUnitIndex = prefsData->docUnitIndex;
	double unitRatio = unitGetRatioFromIndex(docUnitIndex);

	DisScale = prefsData->DisScale;
	int decimals = unitGetPrecisionFromIndex(docUnitIndex);
	QString unitSuffix = unitGetSuffixFromIndex(docUnitIndex);
	QPixmap pm(54, 14);
	pm.fill(prefsData->DpapColor);
	colorPaper = prefsData->DpapColor;
	backColor->setIcon(pm);
	backColor->setText( QString::null );
	pm.fill(prefsData->DFrameColor);
	colorFrame = prefsData->DFrameColor;
	buttonFrameSelected->setText( QString::null );
	buttonFrameSelected->setIcon(pm);
	pm.fill(prefsData->DFrameNormColor);
	colorFrameNorm = prefsData->DFrameNormColor;
	buttonFrameNormal->setText( QString::null );
	buttonFrameNormal->setIcon(pm);
	pm.fill(prefsData->DFrameGroupColor);
	colorFrameGroup = prefsData->DFrameGroupColor;
	buttonFrameGrouped->setText( QString::null );
	buttonFrameGrouped->setIcon(pm);
	pm.fill(prefsData->DFrameLinkColor);
	colorFrameLinked = prefsData->DFrameLinkColor;
	buttonFrameLinked->setText( QString::null );
	buttonFrameLinked->setIcon(pm);
	pm.fill(prefsData->DFrameLockColor);
	colorFrameLocked = prefsData->DFrameLockColor;
	buttonFrameLocked->setText( QString::null );
	buttonFrameLocked->setIcon(pm);
	pm.fill(prefsData->DFrameAnnotationColor);
	colorFrameAnnotation = prefsData->DFrameAnnotationColor;
	buttonFrameAnnotation->setText( QString::null );
	buttonFrameAnnotation->setIcon(pm);
	pm.fill(prefsData->DPageBorderColor);
	colorPageBorder = prefsData->DPageBorderColor;
	buttonSelectedPage->setText( QString::null );
	buttonSelectedPage->setIcon(pm);
	pm.fill(prefsData->DControlCharColor);
	colorControlChars = prefsData->DControlCharColor;
	buttonControlChars->setText( QString::null );
	buttonControlChars->setIcon(pm);
	checkShowPageShadow->setChecked(prefsData->showPageShadow);
	checkUnprintable->setChecked( prefsData->marginColored );
	checkPictures->setChecked(guidesSettings.showPic);
	checkLink->setChecked(guidesSettings.linkShown);
	checkControl->setChecked(guidesSettings.showControls);
	checkFrame->setChecked(guidesSettings.framesShown);
	checkLayerM->setChecked(guidesSettings.layerMarkersShown);
	checkRuler->setChecked(guidesSettings.rulerMode);
	checkBleed->setChecked(guidesSettings.showBleed);
	topScratch->setDecimals( decimals );
	topScratch->setMaximum(1000);
	topScratch->setNewUnit(docUnitIndex);
	topScratch->setValue(scratch.Top * unitRatio);
	leftScratch->setMaximum(1000);
	leftScratch->setNewUnit(docUnitIndex);
	leftScratch->setValue(scratch.Left * unitRatio);
	bottomScratch->setMaximum(1000);
	bottomScratch->setNewUnit(docUnitIndex);
	bottomScratch->setValue(scratch.Bottom * unitRatio);
	rightScratch->setDecimals( decimals );
	rightScratch->setMaximum(1000);
	rightScratch->setNewUnit(docUnitIndex);
	rightScratch->setValue(scratch.Right * unitRatio);
	gapHorizontal->setSuffix( unitSuffix );
	gapHorizontal->setDecimals( decimals );
	gapHorizontal->setMaximum(1000);
	gapVertical->setSuffix( unitSuffix );
	gapVertical->setDecimals( decimals );
	gapVertical->setMaximum(1000);
	CaliSlider->setValue(qRound(100 * DisScale) - 150);
	CaliAnz->setText(QString::number(qRound(DisScale*72.0))+ tr(" dpi"));
	rulerUnitCombo->clear();
	rulerUnitCombo->addItems(unitGetTextUnitList());
	rulerUnitCombo->setCurrentIndex(docUnitIndex);
	drawRuler();
}

void TabDisplay::unitChange(int docUnitIx)
{
	docUnitIndex = docUnitIx;
	topScratch->setNewUnit(docUnitIndex);
	bottomScratch->setNewUnit(docUnitIndex);
	leftScratch->setNewUnit(docUnitIndex);
	rightScratch->setNewUnit(docUnitIndex);
	gapVertical->setNewUnit(docUnitIndex);
	gapHorizontal->setNewUnit(docUnitIndex);
	drawRuler();
}

void TabDisplay::changePaperColor()
{
	QColor neu = QColor();
	neu = QColorDialog::getColor(colorPaper, this);
	if (neu.isValid())
	{
		QPixmap pm(54, 14);
		pm.fill(neu);
		colorPaper = neu;
		backColor->setIcon(pm);
	}
}

void TabDisplay::setPaperColor(QColor neu)
{
	if (neu.isValid())
	{
		QPixmap pm(54, 14);
		pm.fill(neu);
		colorPaper = neu;
		backColor->setIcon(pm);
	}
}

void TabDisplay::setMarginColored(bool colored)
{
	checkUnprintable->setChecked(colored);
}

void TabDisplay::restoreDisScale()
{
	disconnect(CaliSlider, SIGNAL(valueChanged(int)), this, SLOT(setDisScale()));
	int dpi = qApp->desktop()->logicalDpiX();
	if ((dpi < 60) || (dpi > 250))
		dpi = 72;
	DisScale = dpi / 72.0;
	CaliSlider->setValue(qRound(100 * DisScale) - 150);
	drawRuler();
	CaliAnz->setText(QString::number(qRound(DisScale*72.0))+ tr(" dpi"));
	connect(CaliSlider, SIGNAL(valueChanged(int)), this, SLOT(setDisScale()));
}

void TabDisplay::setDisScale()
{
	DisScale = qMax((150.0 + CaliSlider->value()) / 100.0, 0.01);
	drawRuler();
	CaliAnz->setText(QString::number(qRound(DisScale*72.0))+ tr(" dpi"));
}

void TabDisplay::drawRuler()
{
	double xl, iter, iter2, maxi;
	int index = rulerUnitCombo->currentIndex();
	iter = unitRulerGetIter1FromIndex(index);
	iter2 = unitRulerGetIter2FromIndex(index);
	switch (index)
	{
		case 0:
			maxi = 200.0;
			break;
		case 1:
			maxi = iter2;
			break;
		case 2:
			maxi = 2 * iter2;
			break;
		case 3:
			maxi = 240.0;
			break;
		case 4:
			maxi = 240.0;
			break;
		default:
			iter = 10.0;
			iter2 = iter * 10.0;
			maxi = 200.0;
			break;
	}

	QPixmap pm(qMin(qMax(CaliRuler->width(), qRound(maxi)+30), qRound(maxi*DisScale+30)), 21);
	pm.fill();
	QPainter p;
	p.begin(&pm);
	p.drawLine(0, 19, pm.width(), 19);
	p.setBrush(Qt::black);
	p.setPen(Qt::black);
	p.scale(DisScale, 1.0);
	for (xl = 0; xl < maxi; xl += iter)
		p.drawLine(QPointF(xl, 13.0), QPointF(xl, 19.0));
	for (xl = 0; xl < maxi+10; xl += iter2)
	{
		p.drawLine(QPointF(xl, 6.0), QPointF(xl, 19.0));
		p.save();
		p.scale(1.0 / DisScale, 1.0);
		switch (index)
		{
			case 2:
			case 4:
				p.drawText(static_cast<int>((xl+qRound(2/DisScale)) * DisScale), 12, QString::number(xl / iter2));
				break;
			case 3:
			case 5:
				p.drawText(static_cast<int>((xl+qRound(2/DisScale)) * DisScale), 12, QString::number(xl / iter));
				break;
			default:
				p.drawText(static_cast<int>((xl+qRound(2/DisScale)) * DisScale), 12, QString::number(xl / iter * 10));
				break;
		}
		p.restore();
	}
	p.end();
	CaliRuler->setPixmap(pm);
}

void TabDisplay::setDocSetupMode()
{
	CaliGroup->hide();
	selectedPageBorderLabel->hide();
	buttonSelectedPage->hide();
	groupObjFrame->hide();
	textColorGroup->hide();
	checkShowPageShadow->hide();
}

void TabDisplay::changeFrameColor()
{
	QColor neu = QColor();
	neu = QColorDialog::getColor(colorFrame, this);
	if (neu.isValid())
	{
		QPixmap pm(54, 14);
		pm.fill(neu);
		colorFrame = neu;
		buttonFrameSelected->setIcon(pm);
	}
}

void TabDisplay::changeNormFrameColor()
{
	QColor neu = QColor();
	neu = QColorDialog::getColor(colorFrameNorm, this);
	if (neu.isValid())
	{
		QPixmap pm(54, 14);
		pm.fill(neu);
		colorFrameNorm = neu;
		buttonFrameNormal->setIcon(pm);
	}
}

void TabDisplay::changeGroupFrameColor()
{
	QColor neu = QColor();
	neu = QColorDialog::getColor(colorFrameGroup, this);
	if (neu.isValid())
	{
		QPixmap pm(54, 14);
		pm.fill(neu);
		colorFrameGroup = neu;
		buttonFrameGrouped->setIcon(pm);
	}
}

void TabDisplay::changeChainFrameColor()
{
	QColor neu = QColor();
	neu = QColorDialog::getColor(colorFrameLinked, this);
	if (neu.isValid())
	{
		QPixmap pm(54, 14);
		pm.fill(neu);
		colorFrameLinked = neu;
		buttonFrameLinked->setIcon(pm);
	}
}

void TabDisplay::changeLockFrameColor()
{
	QColor neu = QColor();
	neu = QColorDialog::getColor(colorFrameLocked, this);
	if (neu.isValid())
	{
		QPixmap pm(54, 14);
		pm.fill(neu);
		colorFrameLocked = neu;
		buttonFrameLocked->setIcon(pm);
	}
}

void TabDisplay::changeAnnotFrameColor()
{
	QColor neu = QColor();
	neu = QColorDialog::getColor(colorFrameAnnotation, this);
	if (neu.isValid())
	{
		QPixmap pm(54, 14);
		pm.fill(neu);
		colorFrameAnnotation = neu;
		buttonFrameAnnotation->setIcon(pm);
	}
}

void TabDisplay::changePageBorderColor()
{
	QColor neu = QColor();
	neu = QColorDialog::getColor(colorPageBorder, this);
	if (neu.isValid())
	{
		QPixmap pm(54, 14);
		pm.fill(neu);
		colorPageBorder = neu;
		buttonSelectedPage->setIcon(pm);
	}
}

void TabDisplay::changeControlCharsColor()
{
	QColor neu = QColor();
	neu = QColorDialog::getColor(colorControlChars, this);
	if (neu.isValid())
	{
		QPixmap pm(54, 14);
		pm.fill(neu);
		colorControlChars = neu;
		buttonControlChars->setIcon(pm);
	}
}
