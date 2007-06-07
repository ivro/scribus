/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/****************************************************************************
**
**
** Created: Son Jun 2 11:23:14 2002
**      by:  Franz Schmid
**
**
****************************************************************************/
#include <qpushbutton.h>
#include <qtoolbutton.h>
#include <qlayout.h>
#include <qtooltip.h>
#include <qpixmap.h>
#include <qcheckbox.h>
#include <q3header.h>
#include <QList>
#include <qtooltip.h>
#include <qcheckbox.h>
#include <qspinbox.h>
#include <qlabel.h>
#include <qcolordialog.h>
//Added by qt3to4:
#include <Q3HBoxLayout>
#include <Q3VBoxLayout>

#include "dynamictip.h"
#include "scmessagebox.h"
#include "sccombobox.h"
#include "scribus.h"

#include "layers.h"

extern QPixmap loadIcon(QString nam);

LayerLabel::LayerLabel(Q3Table *parent) : Q3TableItem (parent, Q3TableItem::OnTyping)
{
}

void LayerLabel::paint(QPainter * p, const QColorGroup &cg, const QRect &cr, bool selected)
{
 	p->fillRect( 0, 0, cr.width(), cr.height(), selected ? cg.brush( QColorGroup::Highlight ) : cg.brush( QColorGroup::Base ) );
	int w = cr.width();
	int h = cr.height();
	int x = 0;
	if ( selected )
		p->setPen( cg.highlightedText() );
	else
		p->setPen( cg.text() );
	QString txt = text();
	QString ellipsis("...");
	QString elided;
	QFontMetrics fontMetrics(table()->font());
	int ellipsisWidth = fontMetrics.width(ellipsis) + 4;
	int length = txt.length();
	int i = 0;
	if (fontMetrics.width(txt) > w)
	{
		int offset = 0;
		while (i < length && fontMetrics.width(elided + txt.at(offset)) + ellipsisWidth < w)
		{
			elided.append(txt.at(offset));
			offset = ++i;
		}
		if (elided.isEmpty())
			elided = txt.left(1);
		elided.append(ellipsis);
	}
	else
		elided = txt;
	p->drawText( x + 2, 0, w - x - 4, h, alignment(), elided );
}

LayerTable::LayerTable(QWidget* parent) : Q3Table(parent)
{
}

void LayerTable::endEdit ( int row, int col, bool accept, bool replace )
{
	Q3Table::EditMode ed = editMode();
	if ((row < 0) || (col < 0))
	{
		Q3Table::endEdit(row, col, accept, replace);
		return;
	}
	QString oldCont = text(row, col);
	Q3Table::endEdit(row, col, accept, replace);
	QString newCont = item(row, col)->text();
	bool realAccept = true;
	int b = numRows();
	for (int a = 0; a < b; ++a)
	{
		if (a != row)
		{
			if (newCont == text(a, 6))
				realAccept = false;
		}
	}
	if (newCont.isEmpty())
		realAccept = false;
	if (realAccept)
	{
		if (ed != Q3Table::NotEditing)
			emit updtName(row);
	}
	else
	{
		setText(row, col, oldCont);
		emit updtName(row);
	}
}

LayerPalette::LayerPalette(QWidget* parent)
		: ScrPaletteBase( parent, "Layers", false, 0 ),
		m_Doc(0)
{
	LayerPaletteLayout = new Q3VBoxLayout( this, 1, 2, "LayerPaletteLayout");

	layout1 = new Q3HBoxLayout( 0, 0, 2, "layout1");
	textLabel1 = new QLabel( this, "textLabel1" );
	layout1->addWidget( textLabel1 );
	blendMode = new ScComboBox( false, this, "blendMode" );
	layout1->addWidget( blendMode );
	textLabel2 = new QLabel( this, "textLabel2" );
	textLabel2->setText( tr( "Opacity:" ) );
	layout1->addWidget( textLabel2 );
	opacitySpinBox = new QSpinBox( this, "opacitySpinBox" );
	opacitySpinBox->setMinValue(0);
	opacitySpinBox->setMaxValue(100);
	opacitySpinBox->setLineStep(10);
	opacitySpinBox->setSuffix( tr(" %"));
	opacitySpinBox->setFocusPolicy(Qt::ClickFocus);
	layout1->addWidget( opacitySpinBox );
	LayerPaletteLayout->addLayout( layout1 );

	Table = new LayerTable( this );
	Table->setNumRows( 0 );
	Table->setNumCols( 7 );
	Q3Header *header = Table->horizontalHeader();
	header->setLabel(0, "");
	header->setLabel(1, loadIcon("16/show-object.png"), "");
	header->setLabel(2, loadIcon("16/document-print.png"), "");
	header->setLabel(3, loadIcon("16/lock.png"), "");
	header->setLabel(4, loadIcon("16/layer-flow-around.png"), "");
	header->setLabel(5, loadIcon("layer-outline.png"), "");
	Table->setColumnReadOnly(0, true);
	Table->setColumnReadOnly(1, true);
	Table->setColumnReadOnly(2, true);
	Table->setColumnReadOnly(3, true);
	Table->setColumnReadOnly(4, true);
	Table->setColumnReadOnly(5, true);
	Table->setColumnWidth(0, 24);
	Table->setColumnWidth(1, 24);
	Table->setColumnWidth(2, 24);
	Table->setColumnWidth(3, 24);
	Table->setColumnWidth(4, 24);
	Table->setColumnWidth(5, 24);
	header->setResizeEnabled(false, 0);
	header->setResizeEnabled(false, 1);
	header->setResizeEnabled(false, 2);
	header->setResizeEnabled(false, 3);
	header->setResizeEnabled(false, 4);
	header->setResizeEnabled(false, 5);
	header->setResizeEnabled(true, 6);
// 	dynTip = new DynamicTip(header);
	Table->setRowMovingEnabled(false);
	Table->setSorting(false);
	Table->setSelectionMode( Q3Table::SingleRow );
	Table->setFocusStyle( Q3Table::FollowStyle );
	Header = Table->verticalHeader();
	Header->setMovingEnabled(false);
	Header->setResizeEnabled(false);
	Table->setLeftMargin(0);
	Header->hide();
	LayerPaletteLayout->addWidget( Table );

	Layout1 = new Q3HBoxLayout( 0, 0, 0, "Layout1");
	QSpacerItem* spacer = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
	Layout1->addItem( spacer );

	newLayerButton = new QPushButton( this, "newLayerButton" );
	newLayerButton->setMinimumSize( QSize( 50, 24 ) );
	newLayerButton->setMaximumSize( QSize( 50, 24 ) );
	newLayerButton->setText( "" );
	newLayerButton->setPixmap(loadIcon("16/list-add.png"));
	Layout1->addWidget( newLayerButton );

	deleteLayerButton = new QPushButton( this, "deleteLayerButton" );
	deleteLayerButton->setMinimumSize( QSize( 50, 24 ) );
	deleteLayerButton->setMaximumSize( QSize( 50, 24 ) );
	deleteLayerButton->setText( "" );
	deleteLayerButton->setPixmap(loadIcon("16/list-remove.png"));
	Layout1->addWidget( deleteLayerButton );
	
	duplicateLayerButton = new QPushButton( this, "duplicateLayerButton" );
	duplicateLayerButton->setMinimumSize( QSize( 50, 24 ) );
	duplicateLayerButton->setMaximumSize( QSize( 50, 24 ) );
	duplicateLayerButton->setText( "" );
	duplicateLayerButton->setPixmap(loadIcon("16/edit-copy.png"));
	Layout1->addWidget( duplicateLayerButton );

	raiseLayerButton = new QPushButton( this, "raiseLayerButton" );
	raiseLayerButton->setMinimumSize( QSize( 50, 24 ) );
	raiseLayerButton->setMaximumSize( QSize( 50, 24 ) );
	raiseLayerButton->setText( "" );
// 	raiseLayerButton->setPixmap(loadIcon("Raiselayer.png"));
	raiseLayerButton->setPixmap(loadIcon("16/go-up.png"));
	Layout1->addWidget( raiseLayerButton );

	lowerLayerButton = new QPushButton( this, "lowerLayerButton" );
	lowerLayerButton->setMinimumSize( QSize( 50, 24 ) );
	lowerLayerButton->setMaximumSize( QSize( 50, 24 ) );
	lowerLayerButton->setText( "" );
// 	lowerLayerButton->setPixmap(loadIcon("Lowerlayer.png"));
	lowerLayerButton->setPixmap(loadIcon("16/go-down.png"));
	Layout1->addWidget( lowerLayerButton );

	LayerPaletteLayout->addLayout( Layout1 );
	ClearInhalt();
	languageChange();

	connect(newLayerButton, SIGNAL(clicked()), this, SLOT(addLayer()));
	connect(duplicateLayerButton, SIGNAL(clicked()), this, SLOT(dupLayer()));
	connect(deleteLayerButton, SIGNAL(clicked()), this, SLOT(removeLayer()));
	connect(raiseLayerButton, SIGNAL(clicked()), this, SLOT(upLayer()));
	connect(lowerLayerButton, SIGNAL(clicked()), this, SLOT(downLayer()));
	connect(Table, SIGNAL(updtName(int)), this, SLOT(updateName(int)));
	connect(opacitySpinBox, SIGNAL(valueChanged(int)), this, SLOT(changeOpacity()));
	connect(blendMode, SIGNAL(activated(int)), this, SLOT(changeBlendMode(int)));

}

void LayerPalette::updateName(int r)
{
	changeName(r, 6);
	m_Doc->scMW()->changeLayer(m_Doc->activeLayer());
}

void LayerPalette::ClearInhalt()
{
	disconnect(blendMode, SIGNAL(activated(int)), this, SLOT(changeBlendMode(int)));
	disconnect(opacitySpinBox, SIGNAL(valueChanged(int)), this, SLOT(changeOpacity()));
	disconnect(Table, SIGNAL(currentChanged(int, int)), this, SLOT(setActiveLayer(int)));
	int b = Table->numRows();
	for (int a = 0; a < b; ++a)
		Table->removeRow(0);
	flagsPrintable.clear();
	flagsVisible.clear();
	flagsFlow.clear();
	flagsOutline.clear();
	flagsMarker.clear();
	newLayerButton->setEnabled(false);
	deleteLayerButton->setEnabled(false);
	raiseLayerButton->setEnabled(false);
	lowerLayerButton->setEnabled(false);
}

void LayerPalette::setDoc(ScribusDoc* doc)
{
	m_Doc=doc;
	disconnect(blendMode, SIGNAL(activated(int)), this, SLOT(changeBlendMode(int)));
	disconnect(opacitySpinBox, SIGNAL(valueChanged(int)), this, SLOT(changeOpacity()));
	disconnect(Table, SIGNAL(currentChanged(int, int)), this, SLOT(setActiveLayer(int)));
	if (!m_Doc)
	{
		layers=0;
		newLayerButton->setEnabled(false);
		duplicateLayerButton->setEnabled(false);
		deleteLayerButton->setEnabled(false);
		raiseLayerButton->setEnabled(false);
		lowerLayerButton->setEnabled(false);
		markActiveLayer(0);
	}
	layers=&m_Doc->Layers;
	rebuildList();

	markActiveLayer(m_Doc->activeLayer());
	newLayerButton->setEnabled(true);
	duplicateLayerButton->setEnabled(true);

	connect(Table, SIGNAL(currentChanged(int, int)), this, SLOT(setActiveLayer(int)));
	connect(opacitySpinBox, SIGNAL(valueChanged(int)), this, SLOT(changeOpacity()));
	connect(blendMode, SIGNAL(activated(int)), this, SLOT(changeBlendMode(int)));
}

void LayerPalette::rebuildList()
{
	disconnect(blendMode, SIGNAL(activated(int)), this, SLOT(changeBlendMode(int)));
	disconnect(opacitySpinBox, SIGNAL(valueChanged(int)), this, SLOT(changeOpacity()));
	disconnect(Table, SIGNAL(currentChanged(int, int)), this, SLOT(setActiveLayer(int)));
	flagsPrintable.clear();
	flagsVisible.clear();
	flagsFlow.clear();
	flagsOutline.clear();
	flagsMarker.clear();
	QString tmp;
	QList<Layer>::iterator it;
	int layerCount=m_Doc->layerCount();
	Table->setNumRows(layerCount);
	for (it = layers->begin(); it != layers->end(); ++it)
	{
		int layerNumber=(*it).LNr;
		//TODO once "layers" is not set anymore, need to get layer number differently
		int layerLevel=m_Doc->layerLevelFromNumber(layerNumber);
		int row=layerCount-layerLevel-1;
		QToolButton *pb = new QToolButton(this, tmp.setNum(layerLevel));
		pb->setAutoRaise(true);
		pb->setText( "" );
		QPixmap pm(20,15);
		pm.fill(m_Doc->layerMarker(layerNumber));
		QIcon ic;
		ic.setPixmap(pm, QIcon::Small, QIcon::Normal);
		ic.setPixmap(pm, QIcon::Small, QIcon::Active);
		pb->setIconSet(ic);
		Table->setCellWidget(row, 0, pb);
		flagsMarker.append(pb);
		connect(pb, SIGNAL(clicked()), this, SLOT(markLayer()));
		QCheckBox *cp2 = new QCheckBox(this, tmp.setNum(layerLevel));
		cp2->setChecked(m_Doc->layerVisible(layerNumber));
		flagsVisible.append(cp2);
		connect(cp2, SIGNAL(clicked()), this, SLOT(visibleLayer()));
		Table->setCellWidget(row, 1, cp2);
		QCheckBox *cp = new QCheckBox(this, tmp.setNum(layerLevel));
		cp->setChecked(m_Doc->layerPrintable(layerNumber));
		Table->setCellWidget(row, 2, cp);
		flagsPrintable.append(cp);
		connect(cp, SIGNAL(clicked()), this, SLOT(printLayer()));
		QCheckBox *cp3 = new QCheckBox(this, tmp.setNum(layerLevel));
		cp3->setChecked(m_Doc->layerLocked(layerNumber));
		flagsLocked.append(cp3);
		connect(cp3, SIGNAL(clicked()), this, SLOT(lockLayer()));
		Table->setCellWidget(row, 3, cp3);
		QCheckBox *cp4 = new QCheckBox(this, tmp.setNum(layerLevel));
		cp4->setChecked(m_Doc->layerFlow(layerNumber));
		flagsFlow.append(cp4);
		connect(cp4, SIGNAL(clicked()), this, SLOT(flowToggleLayer()));
		Table->setCellWidget(row, 4, cp4);
		QCheckBox *cp5 = new QCheckBox(this, tmp.setNum(layerLevel));
		cp5->setChecked(m_Doc->layerOutline(layerNumber));
		flagsOutline.append(cp5);
		connect(cp5, SIGNAL(clicked()), this, SLOT(outlineToggleLayer()));
		Table->setCellWidget(row, 5, cp5);
		LayerLabel *lbl = new LayerLabel(Table);
		lbl->setText(m_Doc->layerName(layerNumber));
		Table->setItem(row, 6, lbl);
//		Table->setText(row, 6, m_Doc->layerName(layerNumber));
		Header->setLabel(row, tmp.setNum(layerLevel));
	}
	Table->setColumnStretchable(6, true);
//	Table->adjustColumn(6);
	connect(Table, SIGNAL(currentChanged(int, int)), this, SLOT(setActiveLayer(int)));
	connect(opacitySpinBox, SIGNAL(valueChanged(int)), this, SLOT(changeOpacity()));
	connect(blendMode, SIGNAL(activated(int)), this, SLOT(changeBlendMode(int)));
}

void LayerPalette::addLayer()
{
	m_Doc->addLayer(QString::null, true);
	rebuildList();
	markActiveLayer();
	m_Doc->scMW()->changeLayer(m_Doc->activeLayer());
	m_Doc->changed();
}

void LayerPalette::dupLayer()
{
	int current = m_Doc->activeLayer();
	m_Doc->addLayer(QString::null, true);
	rebuildList();
	markActiveLayer();
	m_Doc->copyLayer(current, m_Doc->activeLayer());
	m_Doc->scMW()->changeLayer(m_Doc->activeLayer());
	m_Doc->changed();
}

void LayerPalette::removeLayer()
{
	int layerCount=m_Doc->layerCount();
	if (layerCount < 2)
		return;
	int level = layerCount-1-Table->currentRow();
	int layerNumber=m_Doc->layerNumberFromLevel(level);
	bool delToo = false;
	if (m_Doc->layerContainsItems(layerNumber))
	{
		int scmReturn=ScMessageBox::warning(this, tr("Delete Layer"),
									tr("Do you want to delete all objects on this layer too?"),
									QMessageBox::Yes,
									QMessageBox::No,
									QMessageBox::Cancel | QMessageBox::Default | QMessageBox::Escape);
		if (scmReturn == QMessageBox::Cancel)
			return;
		delToo = (scmReturn != QMessageBox::No);
	}

	if (!m_Doc->deleteLayer(layerNumber, delToo))
		return;

	rebuildList();
	markActiveLayer();
	m_Doc->scMW()->changeLayer(m_Doc->activeLayer());
	m_Doc->changed();
}

void LayerPalette::upLayer()
{
	int layerCount=m_Doc->layerCount();
	if ((layerCount < 2) || (Table->currentRow() == 0))
		return;
	int layerLevel = layerCount-1-Table->currentRow();
	m_Doc->raiseLayerByLevel(layerLevel);
	rebuildList();
	markActiveLayer();
	m_Doc->scMW()->changeLayer(m_Doc->activeLayer());
	emit LayerChanged();
	m_Doc->changed();
}

void LayerPalette::downLayer()
{
	int layerCount=m_Doc->layerCount();
	if ((layerCount < 2) || (Table->currentRow() == static_cast<int>(layerCount) - 1))
		return;
	int layerLevel = layerCount-1-Table->currentRow();
	m_Doc->lowerLayerByLevel(layerLevel);
	rebuildList();
	m_Doc->scMW()->changeLayer(m_Doc->activeLayer());
	emit LayerChanged();
	markActiveLayer();
	m_Doc->changed();
}

void LayerPalette::changeName(int row, int col)
{
	if (col == 6)
	{
		int layerLevel = m_Doc->layerCount()-1-row;
		int layerNumber=m_Doc->layerNumberFromLevel(layerLevel);
		if (layerNumber!=-1)
			m_Doc->changeLayerName(layerNumber, Table->item(row, col)->text());
	}
}

void LayerPalette::visibleLayer()
{
	int level = QString(sender()->name()).toInt();
	int layerNumber=m_Doc->layerNumberFromLevel(level);
	if (layerNumber==-1)
		return;
	const QObject* senderBox=sender();
	if (senderBox->isA("QCheckBox"))
	{
		m_Doc->setLayerVisible(layerNumber,((QCheckBox*)(senderBox))->isChecked());
		emit LayerChanged();
	}
}

void LayerPalette::printLayer()
{
	int level = QString(sender()->name()).toInt();
	int layerNumber=m_Doc->layerNumberFromLevel(level);
	if (layerNumber==-1)
		return;
	const QObject* senderBox=sender();
	if (senderBox->isA("QCheckBox"))
		m_Doc->setLayerPrintable(layerNumber,((QCheckBox*)(senderBox))->isChecked());
}

void LayerPalette::lockLayer()
{
	int level = QString(sender()->name()).toInt();
	int layerNumber=m_Doc->layerNumberFromLevel(level);
	if (layerNumber==-1)
		return;
	const QObject* senderBox=sender();
	if (senderBox->isA("QCheckBox"))
	{
		m_Doc->setLayerLocked(layerNumber,((QCheckBox*)(senderBox))->isChecked());
		deleteLayerButton->setEnabled(!((QCheckBox*)(senderBox))->isChecked());
	}
	m_Doc->scMW()->changeLayer(m_Doc->activeLayer());
}

void LayerPalette::flowToggleLayer()
{
	int level = QString(sender()->name()).toInt();
	int layerNumber=m_Doc->layerNumberFromLevel(level);
	if (layerNumber==-1)
		return;
	const QObject* senderBox=sender();
	if (senderBox->isA("QCheckBox"))
		m_Doc->setLayerFlow(layerNumber,((QCheckBox*)(senderBox))->isChecked());
}

void LayerPalette::outlineToggleLayer()
{
	int level = QString(sender()->name()).toInt();
	int layerNumber=m_Doc->layerNumberFromLevel(level);
	if (layerNumber==-1)
		return;
	const QObject* senderBox=sender();
	if (senderBox->isA("QCheckBox"))
	{
		m_Doc->setLayerOutline(layerNumber,((QCheckBox*)(senderBox))->isChecked());
		emit LayerChanged();
	}
}

void LayerPalette::markLayer()
{
	int level = QString(sender()->name()).toInt();
	int layerNumber=m_Doc->layerNumberFromLevel(level);
	if (layerNumber==-1)
		return;
	const QObject* senderBox=sender();
	if (senderBox->isA("QToolButton"))
	{
		QColor neu = QColor();
		neu = QColorDialog::getColor(m_Doc->layerMarker(layerNumber), this);
		QPixmap pm(20,15);
		pm.fill(neu);
		QIcon ic;
		ic.setPixmap(pm, QIcon::Small, QIcon::Normal);
		ic.setPixmap(pm, QIcon::Small, QIcon::Active);
		((QToolButton*)(senderBox))->setIconSet(ic);
		m_Doc->setLayerMarker(layerNumber,neu);
		emit LayerChanged();
	}
}

void LayerPalette::changeOpacity()
{
	m_Doc->setLayerTransparency(m_Doc->activeLayer(), opacitySpinBox->value() / 100.0);
	emit LayerChanged();
}

void LayerPalette::changeBlendMode(int blend)
{
	m_Doc->setLayerBlendMode(m_Doc->activeLayer(), blend);
	emit LayerChanged();
}

void LayerPalette::markActiveLayer(int layerNumber)
{
	disconnect(blendMode, SIGNAL(activated(int)), this, SLOT(changeBlendMode(int)));
	disconnect(opacitySpinBox, SIGNAL(valueChanged(int)), this, SLOT(changeOpacity()));
	disconnect(Table, SIGNAL(currentChanged(int, int)), this, SLOT(setActiveLayer(int)));
	int layerToMark=layerNumber;
	if (layerNumber==-1)
		layerToMark=m_Doc->activeLayer();
	Table->setCurrentCell(m_Doc->layerCount()-1-m_Doc->layerLevelFromNumber(layerToMark), 6);
	opacitySpinBox->setValue(qRound(m_Doc->layerTransparency(layerToMark) * 100));
	blendMode->setCurrentItem(m_Doc->layerBlendMode(layerToMark));
	deleteLayerButton->setEnabled(m_Doc->layerCount()>1 && !m_Doc->layerLocked( m_Doc->activeLayer() ));
		
	if (layers->count()>1)
	{
		raiseLayerButton->setEnabled(Table->currentRow()!=0);
		lowerLayerButton->setEnabled(Table->currentRow()!=Table->numRows()-1);
	}
	else
	{
		raiseLayerButton->setEnabled(false);
		lowerLayerButton->setEnabled(false);
	}
	connect(Table, SIGNAL(currentChanged(int, int)), this, SLOT(setActiveLayer(int)));
	connect(opacitySpinBox, SIGNAL(valueChanged(int)), this, SLOT(changeOpacity()));
	connect(blendMode, SIGNAL(activated(int)), this, SLOT(changeBlendMode(int)));
}

void LayerPalette::setActiveLayer(int row)
{
	disconnect(blendMode, SIGNAL(activated(int)), this, SLOT(changeBlendMode(int)));
	disconnect(opacitySpinBox, SIGNAL(valueChanged(int)), this, SLOT(changeOpacity()));
	int layerNumber=m_Doc->layerNumberFromLevel(m_Doc->layerCount()-1-row);
	bool found=m_Doc->setActiveLayer(layerNumber);
	if (found)
	{
		m_Doc->scMW()->changeLayer(m_Doc->activeLayer());
		opacitySpinBox->setValue(qRound(m_Doc->layerTransparency(m_Doc->activeLayer()) * 100));
		blendMode->setCurrentItem(m_Doc->layerBlendMode(m_Doc->activeLayer()));
		deleteLayerButton->setEnabled(m_Doc->layerCount()>1 && !m_Doc->layerLocked( m_Doc->activeLayer() ));
		if (layers->count()>1)
		{
			raiseLayerButton->setEnabled(Table->currentRow()!=0);
			lowerLayerButton->setEnabled(Table->currentRow()!=Table->numRows()-1);
		}
		else
		{
			raiseLayerButton->setEnabled(false);
			lowerLayerButton->setEnabled(false);
		}
	}
	connect(opacitySpinBox, SIGNAL(valueChanged(int)), this, SLOT(changeOpacity()));
	connect(blendMode, SIGNAL(activated(int)), this, SLOT(changeBlendMode(int)));
}

void LayerPalette::languageChange()
{
	setCaption( tr( "Layers" ) );
	textLabel1->setText( tr( "Blend Mode:" ) );
	blendMode->clear();
	blendMode->insertItem( tr("Normal"));
	blendMode->insertItem( tr("Darken"));
	blendMode->insertItem( tr("Lighten"));
	blendMode->insertItem( tr("Multiply"));
	blendMode->insertItem( tr("Screen"));
	blendMode->insertItem( tr("Overlay"));
	blendMode->insertItem( tr("Hard Light"));
	blendMode->insertItem( tr("Soft Light"));
	blendMode->insertItem( tr("Difference"));
	blendMode->insertItem( tr("Exclusion"));
	blendMode->insertItem( tr("Color Dodge"));
	blendMode->insertItem( tr("Color Burn"));
	blendMode->insertItem( tr("Hue"));
	blendMode->insertItem( tr("Saturation"));
	blendMode->insertItem( tr("Color"));
	blendMode->insertItem( tr("Luminosity"));
	textLabel2->setText( tr( "Opacity:" ) );
	opacitySpinBox->setSuffix( tr(" %"));
	Table->horizontalHeader()->setLabel(6, tr("Name"));
	QToolTip::remove( newLayerButton );
	QToolTip::remove( duplicateLayerButton );
	QToolTip::remove( deleteLayerButton );
	QToolTip::remove( raiseLayerButton );
	QToolTip::remove( lowerLayerButton );
	QToolTip::add( newLayerButton, tr( "Add a new layer" ) );
	QToolTip::add( duplicateLayerButton, tr( "Duplicates the current layer" ) );
	QToolTip::add( deleteLayerButton, tr( "Delete layer" ) );
	QToolTip::add( raiseLayerButton, tr( "Raise layer" ) );
	QToolTip::add( lowerLayerButton, tr( "Lower layer" ) );
// 	dynTip->clearHeaderTips();
// 	dynTip->addHeaderTip("<qt>" + tr("Color of the Layer Indicator - Each layer has a color assigned to display on the canvas when layer indicators are enabled. You can double click to edit the color. ") + "</qt>");
// 	dynTip->addHeaderTip( "<qt>" + tr("Make Layer Visible - Uncheck to hide the layer from the display ") + "</qt>" );
// 	dynTip->addHeaderTip( "<qt>" + tr("Print Layer - Uncheck to disable printing. ") + "</qt>" );
// 	dynTip->addHeaderTip( "<qt>" + tr("Lock or Unlock Layer - Unchecked is unlocked ") + "</qt>" );
// 	dynTip->addHeaderTip( "<qt>" + tr("Text flows around objects in lower Layers - Enabling this forces text frames to flow around other objects, even in layers below") + "</qt>" );
// 	dynTip->addHeaderTip( "<qt>" + tr("Outline Mode - Toggles the 'wireframe' display of objects to speed the display of very complex objects.") + "</qt>" ) ;
// 	dynTip->addHeaderTip( "<qt>" + tr("Name of the Layer - Double clicking on the name of a layer enabled editing") + "</qt>" );
}

