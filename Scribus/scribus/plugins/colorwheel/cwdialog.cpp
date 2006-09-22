/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include "cwdialog.h"
#include "cwdialog.moc"
#include "cwdialogbase.moc"

#include <qvariant.h>
#include <qcombobox.h>
#include <qheader.h>
#include <qlistview.h>
#include <qlistbox.h>
#include <qlayout.h>
#include <qtooltip.h>
#include <qwhatsthis.h>
#include <qpushbutton.h>
#include <qspinbox.h>
#include <qpainter.h>
#include <qmenubar.h>
#include <qgroupbox.h>
#include <qslider.h>
#include <qtabwidget.h>

#include "prefsmanager.h"
#include "commonstrings.h"
#include "cmykfw.h"
#include "prefsfile.h"
#include "mpalette.h"
#include "colorblind.h"
#include "colorutil.h"
#include "colorm.h"


CWDialog::CWDialog(QWidget* parent, ScribusDoc* doc, const char* name, bool modal, WFlags fl)
	: CWDialogBase (parent, name, modal, fl),
	  m_Doc(doc)
{
	connectSlots(false);
	// setup combobox
	typeCombo->insertItem(colorWheel->getTypeDescription(colorWheel->Monochromatic), colorWheel->Monochromatic);
	typeCombo->insertItem(colorWheel->getTypeDescription(colorWheel->Analogous), colorWheel->Analogous);
	typeCombo->insertItem(colorWheel->getTypeDescription(colorWheel->Complementary), colorWheel->Complementary);
	typeCombo->insertItem(colorWheel->getTypeDescription(colorWheel->Split), colorWheel->Split);
	typeCombo->insertItem(colorWheel->getTypeDescription(colorWheel->Triadic), colorWheel->Triadic);
	typeCombo->insertItem(colorWheel->getTypeDescription(colorWheel->Tetradic), colorWheel->Tetradic);
	// defects
	defectCombo->insertItem( tr("Normal Vision"));
	defectCombo->insertItem( tr("Protanopia (Red)"));
	defectCombo->insertItem( tr("Deuteranopia (Green)"));
	defectCombo->insertItem( tr("Tritanopia (Blue)"));
	defectCombo->insertItem( tr("Full Color Blindness"));
	// preferences
	prefs = PrefsManager::instance()->prefsFile->getPluginContext("colorwheel");
	typeCombo->setCurrentItem(prefs->getInt("cw_type", 0));
	angleSpin->setValue(prefs->getInt("cw_angle", 15));
	colorWheel->angle = angleSpin->value();
	colorWheel->baseAngle = prefs->getInt("cw_baseangle", 0);
	colorspaceTab->setCurrentPage(prefs->getInt("cw_space", 0));
	colorWheel->actualColor.setColor(prefs->getInt("cw_c", 0),
									 prefs->getInt("cw_m", 0),
									 prefs->getInt("cw_y", 0),
									 prefs->getInt("cw_k", 0));
	resize(QSize(prefs->getInt("cw_width", 640),
		   prefs->getInt("cw_height", 480)).expandedTo(minimumSizeHint()));
	previewLabel->resize(prefs->getInt("cw_samplex", 300), prefs->getInt("cw_sampley", 100));
	// document colors
	documentColorList->updateBox(m_Doc->PageColors, ColorListBox::fancyPixmap);
	// setup
	colorspaceTab_currentChanged(colorspaceTab->currentPage());

	// signals and slots that cannot be in ui file
	connect(colorWheel, SIGNAL(clicked(int, const QPoint&)),
			this, SLOT(colorWheel_clicked(int, const QPoint&)));
	connect(documentColorList, SIGNAL(currentChanged(QListBoxItem *)),
			this, SLOT(documentColorList_currentChanged(QListBoxItem *)));
	connectSlots(true);
}

CWDialog::~CWDialog()
{
	// preferences
	prefs->set("cw_type", typeCombo->currentItem());
	prefs->set("cw_angle", angleSpin->value());
	prefs->set("cw_baseangle", colorWheel->baseAngle);
	prefs->set("cw_r", rSpin->value());
	prefs->set("cw_g", gSpin->value());
	prefs->set("cw_b", bSpin->value());
	prefs->set("cw_c", cSpin->value());
	prefs->set("cw_m", mSpin->value());
	prefs->set("cw_y", ySpin->value());
	prefs->set("cw_k", kSpin->value());
	prefs->set("cw_space", colorspaceTab->currentPageIndex());
	// GUI settings
	prefs->set("cw_width", width());
	prefs->set("cw_height", height());
	prefs->set("cw_samplex", previewLabel->width());
	prefs->set("cw_sampley", previewLabel->height());
}

void CWDialog::connectSlots(bool conn)
{
	if (conn)
	{
		connect( cSpin, SIGNAL( valueChanged(int) ), this, SLOT( cSpin_valueChanged(int) ) );
		connect( mSpin, SIGNAL( valueChanged(int) ), this, SLOT( mSpin_valueChanged(int) ) );
		connect( ySpin, SIGNAL( valueChanged(int) ), this, SLOT( ySpin_valueChanged(int) ) );
		connect( kSpin, SIGNAL( valueChanged(int) ), this, SLOT( kSpin_valueChanged(int) ) );
		connect( rSpin, SIGNAL( valueChanged(int) ), this, SLOT( rSpin_valueChanged(int) ) );
		connect( gSpin, SIGNAL( valueChanged(int) ), this, SLOT( gSpin_valueChanged(int) ) );
		connect( bSpin, SIGNAL( valueChanged(int) ), this, SLOT( bSpin_valueChanged(int) ) );
	}
	else
	{
		disconnect( cSpin, SIGNAL( valueChanged(int) ), this, SLOT( cSpin_valueChanged(int) ) );
		disconnect( mSpin, SIGNAL( valueChanged(int) ), this, SLOT( mSpin_valueChanged(int) ) );
		disconnect( ySpin, SIGNAL( valueChanged(int) ), this, SLOT( ySpin_valueChanged(int) ) );
		disconnect( kSpin, SIGNAL( valueChanged(int) ), this, SLOT( kSpin_valueChanged(int) ) );
		disconnect( rSpin, SIGNAL( valueChanged(int) ), this, SLOT( rSpin_valueChanged(int) ) );
		disconnect( gSpin, SIGNAL( valueChanged(int) ), this, SLOT( gSpin_valueChanged(int) ) );
		disconnect( bSpin, SIGNAL( valueChanged(int) ), this, SLOT( bSpin_valueChanged(int) ) );
	}
}

void CWDialog::documentColorList_currentChanged(QListBoxItem *item)
{
	if (!item)
		return;
	ScColor c = m_Doc->PageColors[documentColorList->currentText()];
	colorWheel->currentColorSpace = c.getColorModel();
	setupColorComponents();
}

void CWDialog::colorspaceTab_currentChanged( QWidget * tab)
{
	if (tab == tabCMYK)
		colorWheel->currentColorSpace = colorModelCMYK;
	if (tab == tabRGB)
		colorWheel->currentColorSpace = colorModelRGB;
	if (tab == tabDocument)
	{
		if (documentColorList->currentItem() == -1)
			documentColorList->setSelected(0, true);
		documentColorList_currentChanged(documentColorList->item(documentColorList->currentItem()));
	}
	processColors(typeCombo->currentItem(), true);
}

void CWDialog::typeCombo_activated(int index)
{
	processColors(index, false);
}

void CWDialog::processColors(int index, bool updateSpins)
{
	bool angEnable = false;
	colorList->clear();
	if (index == colorWheel->Monochromatic)
		colorWheel->currentType = colorWheel->Monochromatic;
	if (index == colorWheel->Analogous)
	{
		angEnable = true;
		colorWheel->currentType = colorWheel->Analogous;
	}
	if (index == colorWheel->Complementary)
		colorWheel->currentType = colorWheel->Complementary;
	if (index == colorWheel->Split)
	{
		angEnable = true;
		colorWheel->currentType = colorWheel->Split;
	}
	if (index == colorWheel->Triadic)
		colorWheel->currentType = colorWheel->Triadic;
	if (index == colorWheel->Tetradic)
	{
		angEnable = true;
		colorWheel->currentType = colorWheel->Tetradic;
	}
	angleSpin->setEnabled(angEnable);
	angleLabel->setEnabled(angEnable);
	colorWheel->makeColors();
	fillColorList();
	setPreview();
	if (updateSpins)
		setupFromColor(colorWheel->actualColor);
	cmykLabel->setText(colorWheel->actualColor.nameCMYK());
	rgbLabel->setText(colorWheel->actualColor.nameRGB());
}

void CWDialog::colorWheel_clicked(int, const QPoint&)
{
	processColors(typeCombo->currentItem(), true);
}

void CWDialog::angleSpin_valueChanged(int value)
{
	colorWheel->angle = value;
	processColors(typeCombo->currentItem(), false);
}

void CWDialog::setPreview()
{
	int x = previewLabel->width();
	int y = previewLabel->height();
	QValueList<ScColor> cols = colorWheel->colorList.values();
	int xstep = x / cols.count();
	QPixmap pm = QPixmap(x, y);
	QPainter *p = new QPainter(&pm);
	QFontMetrics fm = p->fontMetrics();

	pm.fill(Qt::white);
	p->setPen(Qt::white);
	p->drawRect(0, 0, x, y);
	for (uint i = 0; i < cols.count(); ++i)
	{
		QColor c = computeDefect(cols[i].getRGBColor());
		p->setPen(c);
		p->setBrush(c);
		p->drawRect(i * xstep, 0, xstep, y);
	}
	p->setPen(Qt::black);
	p->setBrush(Qt::black);
	p->drawText(15, 5 + fm.height(), "Lorem ipsum dolor sit amet");
	p->setPen(Qt::white);
	p->setBrush(Qt::white);
	p->drawText(125, y - 5 - fm.height(), "Lorem ipsum dolor sit amet");
	p->end();
	delete(p);
	previewLabel->clear();
	previewLabel->setPixmap(pm);
}

QColor CWDialog::computeDefect(QColor c)
{
	if (defectCombo->currentItem() == VisionDefectColor::normalVision)
		return c;
	VisionDefectColor *defect = new VisionDefectColor(c);
	defect->deficiency = defectCombo->currentItem();
	defect->convertDefect();
	QColor nc = defect->getColor();
	delete defect;
	return nc;
}

void CWDialog::fillColorList()
{
	colorList->updateBox(colorWheel->colorList, ColorListBox::fancyPixmap);
}

void CWDialog::defectCombo_activated(int)
{
	setPreview();
}

void CWDialog::addButton_clicked()
{
	QString status("<qt><h2>" + tr("Merging colors") + "</h2><p>");
	bool err = false;
	for (ColorList::iterator it = colorWheel->colorList.begin(); it != colorWheel->colorList.end(); ++it)
	{
		if (m_Doc->PageColors.contains(it.key()))
		{
			status += "<b>" + tr("Error: ") + "</b>" + tr("Color %1 exists already!").arg(it.key()) + "<br/>";
			err = true;
		}
		else
		{
			status += tr("Color %1 appended.").arg(it.key()) + "<br/>";
			m_Doc->PageColors[it.key()] = it.data();
		}
	}
	status += "<p>" + tr("Now opening the color manager.") + "</p></qt>";
	if (err)
	{
		QMessageBox::information(this, tr("Color Merging"), status);
		m_Doc->scMW()->slotEditColors();
		return;
	}
	m_Doc->scMW()->propertiesPalette->updateColorList();
	m_Doc->scMW()->propertiesPalette->updateCList();
	accept();
}

void CWDialog::replaceButton_clicked()
{
	for (ColorList::iterator it = colorWheel->colorList.begin(); it != colorWheel->colorList.end(); ++it)
	{
		m_Doc->PageColors[it.key()] = it.data();
	}
	m_Doc->scMW()->propertiesPalette->updateColorList();
	m_Doc->scMW()->propertiesPalette->updateCList();
	accept();
}

void CWDialog::cancelButton_clicked()
{
	reject();
}

void CWDialog::cSpin_valueChanged( int )
{
	setupColorComponents();
}

void CWDialog::mSpin_valueChanged( int )
{
	setupColorComponents();
}

void CWDialog::ySpin_valueChanged( int )
{
	setupColorComponents();
}

void CWDialog::kSpin_valueChanged( int )
{
	setupColorComponents();
}

void CWDialog::rSpin_valueChanged( int )
{
	setupColorComponents();
}

void CWDialog::gSpin_valueChanged( int )
{
	setupColorComponents();
}

void CWDialog::bSpin_valueChanged( int )
{
	setupColorComponents();
}

ScColor CWDialog::setupRGBComponent()
{
	int r, g, b;
	ScColor col(cSpin->value(), mSpin->value(), ySpin->value(), kSpin->value());
	col.getRGB(&r, &g, &b);
	connectSlots(false);
	rSpin->setValue(r);
	gSpin->setValue(g);
	bSpin->setValue(b);
	connectSlots(true);
	return col;
}

ScColor CWDialog::setupCMYKComponent()
{
	int c, m, y, k;
	ScColor col(rSpin->value(), gSpin->value(), bSpin->value());
	col.getCMYK(&c, &m, &y, &k);
	connectSlots(false);
	cSpin->setValue(c);
	mSpin->setValue(m);
	ySpin->setValue(y);
	kSpin->setValue(k);
	connectSlots(true);
	return col;
}

ScColor CWDialog::setupFromColor(ScColor col)
{
	int r, g, b, c, m, y, k;
	col.getRGB(&r, &g, &b);
	col.getCMYK(&c, &m, &y, &k);
	connectSlots(false);
	rSpin->setValue(r);
	gSpin->setValue(g);
	bSpin->setValue(b);
	cSpin->setValue(c);
	mSpin->setValue(m);
	ySpin->setValue(y);
	kSpin->setValue(k);
	connectSlots(true);
	return col;
}

void CWDialog::setupColorComponents()
{
	ScColor c;
	if (colorspaceTab->currentPage() == tabCMYK)
		c = setupRGBComponent();
	if (colorspaceTab->currentPage() == tabRGB)
		c = setupCMYKComponent();
	if (colorspaceTab->currentPage() == tabDocument)
		c = setupFromColor(m_Doc->PageColors[documentColorList->currentText()]);

	if (colorWheel->recomputeColor(c))
		processColors(typeCombo->currentItem(), false);
	else
	{
		colorList->clear();
		QMessageBox::information(this, caption(),
								 "<qt>" + tr("Unable to find the requested color. "
										 "You have probably selected black, gray or white. "
										 "There is no way to process this color.") + "</qt>");
	}
	cmykLabel->setText(colorWheel->actualColor.nameCMYK());
	rgbLabel->setText(colorWheel->actualColor.nameRGB());
}
