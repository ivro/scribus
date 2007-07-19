/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/


#include "colorcombo.h"
#include "colorlistbox.h"
#include "commonstrings.h"
#include "linecombo.h"
#include "mpalette.h"
#include "sccolorengine.h"
#include "scribus.h"
#include "scribusdoc.h"
#include "scribusview.h"
#include "scrspinbox.h"
#include "selection.h"
#include "smlinestyle.h"
#include "util.h"
#include "util_color.h"
#include "util_icon.h"
#include <q3header.h>
#include <q3listbox.h>
#include <q3listview.h>
#include <qlayout.h>
#include <qlineedit.h>
#include <qpixmap.h>
#include <qpushbutton.h>
#include <qtabwidget.h>


/*** LineStyleWidget *******************************************************/

LineStyleWidget::LineStyleWidget() : QWidget()
{
	setupUi(this);
	addButton->setPixmap(loadIcon("penciladd.png"));
	removeButton->setPixmap(loadIcon("pencilsub.png"));

	dashCombo = new LineCombo(this);
//qt4	lineLayout->addWidget(dashCombo, 0, 0);
	gridLayout->addWidget(dashCombo, 0, 0);

	lineWidth = new ScrSpinBox( 0, 300, this, 0 );
//qt4	widthLayout->addWidget(lineWidth, 0, 1);
	gridLayout1->addWidget(lineWidth, 0, 1);
	
	colorCombo = new ColorCombo(this);
	gridLayout1->addWidget(colorCombo, 1, 0);

	endCombo->insertItem(loadIcon("ButtCap.png"), tr( "Flat Cap" ) );
	endCombo->insertItem(loadIcon("SquareCap.png"), tr( "Square Cap" ) );
	endCombo->insertItem(loadIcon("RoundCap.png"), tr( "Round Cap" ) );

	joinCombo->insertItem(loadIcon("MiterJoin.png"), tr( "Miter Join" ) );
	joinCombo->insertItem(loadIcon("BevelJoin.png"), tr( "Bevel Join" ) );
	joinCombo->insertItem(loadIcon("RoundJoin.png"), tr( "Round Join" ) );

	languageChange();
}

void LineStyleWidget::languageChange()
{
/***********************************/
/*      Begin Tooltips             */
/***********************************/
// These are for the line style page

	QToolTip::add(addButton,    tr("Add a new line"));
	QToolTip::add(removeButton, tr("Remove a line"));
	QToolTip::add(dashCombo,    tr("Line style"));
	QToolTip::add(lineWidth,    tr("Line width"));
	QToolTip::add(endCombo,     tr("End style"));
	QToolTip::add(joinCombo,    tr("Join style"));
	QToolTip::add(colorCombo,   tr("Line color"));
	QToolTip::add(shadeBox,     tr("Line shade"));

/***********************************/
/*      End Tooltips               */
/***********************************/


}

void LineStyleWidget::showStyle(const multiLine &lineStyle, ColorList &colorList, int subLine)
{
	disconnect(lineStyles, SIGNAL(highlighted(int)), this, SLOT(slotEditNewLine(int)));
	currentStyle = lineStyle;
	colorCombo->clear();
	ColorList::Iterator it;
	ScribusDoc* doc = colorList.document();
	for (it = colorList.begin(); it != colorList.end(); ++it)
	{
		colorCombo->insertWideItem(colorList[it.key()], doc, it.key());
//Qt4		colorCombo->listBox()->insertItem(new ColorWidePixmapItem(colorList[it.key()], doc, it.key()));
	}
	colors = colorList;
	updateLineList();
	slotEditNewLine(subLine);
	connect(lineStyles, SIGNAL(highlighted(int)), this, SLOT(slotEditNewLine(int)));
}

void LineStyleWidget::slotEditNewLine(int i)
{
	lineStyles->setSelected(i, true);
	//currentLine_ = i;

	// JG #5876 protect against broken line styles
	if (currentStyle.count() <= i)
		return;

	lineWidth->setValue(currentStyle[i].Width);
	colorCombo->setCurrentText(currentStyle[i].Color);
	shadeBox->setValue(currentStyle[i].Shade);
	
	switch (static_cast<Qt::PenStyle>(currentStyle[i].Dash))
	{
	case Qt::SolidLine:
		dashCombo->setCurrentItem(0);
		break;
	case Qt::DashLine:
		dashCombo->setCurrentItem(1);
		break;
	case Qt::DotLine:
		dashCombo->setCurrentItem(2);
		break;
	case Qt::DashDotLine:
		dashCombo->setCurrentItem(3);
		break;
	case Qt::DashDotDotLine:
		dashCombo->setCurrentItem(4);
		break;
	default:
		dashCombo->setCurrentItem(0);
		break;
	}

	switch (static_cast<Qt::PenCapStyle>(currentStyle[i].LineEnd))
	{
	case Qt::FlatCap:
		endCombo->setCurrentItem(0);
		break;
	case Qt::SquareCap:
		endCombo->setCurrentItem(1);
		break;
	case Qt::RoundCap:
		endCombo->setCurrentItem(2);
		break;
	default:
		endCombo->setCurrentItem(0);
		break;
	}

	switch (static_cast<Qt::PenJoinStyle>(currentStyle[i].LineJoin))
	{
	case Qt::MiterJoin:
		joinCombo->setCurrentItem(0);
		break;
	case Qt::BevelJoin:
		joinCombo->setCurrentItem(1);
		break;
	case Qt::RoundJoin:
		joinCombo->setCurrentItem(2);
		break;
	default:
		joinCombo->setCurrentItem(0);
		break;
	}
}

void LineStyleWidget::updateLineList()
{
	QString tmp, tmp2;
	lineStyles->clear();
	QPixmap * pm2;
	for (multiLine::iterator it = currentStyle.begin(); it != currentStyle.end(); ++it)
	{
		pm2 = getWidePixmap(getColor((*it).Color, (*it).Shade));
		tmp2 = " "+tmp.setNum((*it).Width)+ tr(" pt")+" ";
		tmp2 += CommonStrings::translatePenStyleName(static_cast<Qt::PenStyle>((*it).Dash));
		tmp2 += " ";
		lineStyles->insertItem(*pm2, tmp2);
	}
}

QColor LineStyleWidget::getColor(const QString &name, int shade)
{
	const ScColor& color = colors[name];
	QColor tmpf = ScColorEngine::getDisplayColor(color, colors.document(), shade);
	return tmpf;
}

LineStyleWidget::~LineStyleWidget()
{
	
}

/*************************************************************************/
/*************************************************************************/

SMLineStyle::SMLineStyle() : StyleItem(), doc_(0), widget_(0), twidget_(0), selectionIsDirty_(false)
{
	
}

QTabWidget* SMLineStyle::widget()
{
	if (!twidget_)
	{
		twidget_ = new QTabWidget();
		widget_ = new LineStyleWidget();
		twidget_->addTab(widget_, tr("Properties"));
		connect(widget_->lineStyles, SIGNAL(highlighted(int)), this, SLOT(slotCurrentLineChanged(int)));
	}
	return twidget_;
}

QString SMLineStyle::typeNamePlural()
{
	return tr("Line Styles");
}

QString SMLineStyle::typeNameSingular()
{
	return tr("Line Style");
}

void SMLineStyle::currentDoc(ScribusDoc *doc)
{
	doc_ = doc;
	if (doc_)
	{
		tmpLines = doc_->MLineStyles;
		selection_.clear();
	}
	else
	{
		tmpLines.clear();
		selection_.clear();
	}
}

QList<StyleName> SMLineStyle::styles(bool reloadFromDoc)
{
	if (doc_ && reloadFromDoc) {
		tmpLines = doc_->MLineStyles;
	}

	QList<StyleName> tmp;
	QMap<QString,multiLine>::Iterator it;

	for (it = tmpLines.begin(); it != tmpLines.end(); ++it)
		tmp << StyleName(it.key(), QString::null);

	return tmp;
}

void SMLineStyle::reload()
{
	if (!doc_)
		return;

	selection_.clear();
	tmpLines = doc_->MLineStyles;
}

void SMLineStyle::selected(const QStringList &styleNames)
{
	selection_.clear();
	selectionIsDirty_ = false;

	removeConnections();

	if (styleNames.count() > 1)
		setMultiSelection(styleNames);
	else if (styleNames.count() == 1)
		setSelection(styleNames[0]);

	updatePreview();
	setupConnections();
}

void SMLineStyle::setSelection(const QString& styleName)
{
	if (!doc_)
		return;

	if (!tmpLines.contains(styleName))
		return; // something's wrong here

	selection_.clear();
	selection_[styleName] = &tmpLines[styleName];
	widget_->showStyle(tmpLines[styleName], doc_->PageColors);
	currentLine_ = 0;
}

void SMLineStyle::setMultiSelection(const QStringList& styles)
{
	selection_.clear();
	for (int i = 0; i < styles.count(); ++i)
	{
		if (!tmpLines.contains(styles[i]))
			continue;
		selection_[styles[i]] = &tmpLines[styles[i]];
	}
	currentLine_ = 0;
	// todo do the tricks for clever showing of multiple styles
}

QString SMLineStyle::fromSelection() const
{
	QString lsName(QString::null);
	if (!doc_)
		return lsName;

	for (uint i = 0; i < doc_->m_Selection->count(); ++i)
	{
		PageItem *item = doc_->m_Selection->itemAt(i);
		QString tmpName = item->customLineStyle();
		if (lsName.isNull() && !tmpName.isEmpty() && tmpName != "")
		{
			lsName = item->customLineStyle();
		}
		else if (!lsName.isNull() && !tmpName.isEmpty() && tmpName != "" && lsName != tmpName)
		{
			lsName = QString::null;
			break;
		}
	}
	return lsName;
}

void SMLineStyle::toSelection(const QString &styleName) const
{
	if (!doc_)
		return;

	for (uint i = 0; i < doc_->m_Selection->count(); ++i)
	{
		if (styleName.isNull())
			doc_->m_Selection->itemAt(i)->setCustomLineStyle("");
		else
			doc_->m_Selection->itemAt(i)->setCustomLineStyle(styleName);

		doc_->view()->RefreshItem(doc_->m_Selection->itemAt(i));
	}
}

QString SMLineStyle::newStyle()
{
	if (!doc_)
		return QString::null;
	struct SingleLine sl;
// 	sl.Color = "Black";
// 	sl.Shade = 100;
// 	sl.Dash = SolidLine;
// 	sl.LineEnd = FlatCap;
// 	sl.LineJoin = MiterJoin;
// 	sl.Width = 1.0;
	sl.Color = doc_->toolSettings.dPenLine;
	sl.Shade = doc_->toolSettings.dShadeLine;
	sl.Dash = Qt::SolidLine;//Docu->toolSettings.;
	sl.LineEnd = Qt::FlatCap;//Docu->toolSettings.;
	sl.LineJoin = doc_->toolSettings.dLstyleLine;
	sl.Width = doc_->toolSettings.dWidthLine;
	multiLine ml;
	ml.push_back(sl);
	QString name = getUniqueName( tr("New Style"));
	tmpLines[name] = ml;
	return name;
}

QString SMLineStyle::newStyle(const QString &fromStyle)
{
	Q_ASSERT(tmpLines.contains(fromStyle));

	multiLine ml(tmpLines[fromStyle]);
	QString name = getUniqueName( tr("Clone of %1").arg(fromStyle));
	tmpLines[name] = ml;
	return name;
}

QString SMLineStyle::getUniqueName(const QString &name)
{
	int id = 0;
	QString s = name;

	while (tmpLines.contains(s))
	{
		++id;
		s = tr("%1 (%2)", "This for unique name when creating "
			"a new character style. %1 will be the name "
			"of the style and %2 will be a number forming "
			"a style name like: New Style (2)").arg(name).arg(id);
	}

	return s;
}

void SMLineStyle::apply()
{
	if (!doc_)
		return;

	PageItem* ite;
	doc_->MLineStyles = tmpLines;
	QMap<QString, QString> replacement;
	for (int i = 0; i < deleted_.count(); ++i)
		replacement[deleted_[i].first] = deleted_[i].second;

	deleted_.clear();

	for (int d = 0; d < doc_->DocItems.count(); ++d)
	{
		ite = doc_->DocItems.at(d);
		if (!ite->NamedLStyle.isEmpty())
		{
			if (!doc_->MLineStyles.contains(ite->NamedLStyle))
				ite->NamedLStyle = replacement[ite->NamedLStyle];
		}
	}
	for (int d1 = 0; d1 < doc_->MasterItems.count(); ++d1)
	{
		ite = doc_->MasterItems.at(d1);
		if (!ite->NamedLStyle.isEmpty())
		{
			if (!doc_->MLineStyles.contains(ite->NamedLStyle))
				ite->NamedLStyle = replacement[ite->NamedLStyle];
		}
	}
	for (int d1 = 0; d1 < doc_->FrameItems.count(); ++d1)
	{
		ite = doc_->FrameItems.at(d1);
		if (!ite->NamedLStyle.isEmpty())
		{
			if (!doc_->MLineStyles.contains(ite->NamedLStyle))
				ite->NamedLStyle = replacement[ite->NamedLStyle];
		}
	}
	doc_->changed();
	doc_->scMW()->propertiesPalette->SetLineFormats(doc_);
	doc_->view()->DrawNew();
	selectionIsDirty_ = false;
}

QString SMLineStyle::shortcut(const QString &stylename) const
{
	Q_ASSERT(tmpLines.contains(stylename));
	return tmpLines[stylename].shortcut;
}

void SMLineStyle::setShortcut(const QString &shortcut)
{
	Q_ASSERT(selection_.count() == 1);
	if (selection_.count() != 1)
		return;

	QMap<QString, multiLine*>::iterator it;
	for (it = selection_.begin(); it != selection_.end(); ++it)
		(*it)->shortcut = shortcut;

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMLineStyle::deleteStyles(const QList<RemoveItem> &removeList)
{
	for (int i = 0; i < removeList.count(); ++i)
	{
		selection_.remove(selection_.find(removeList[i].first));
		tmpLines.remove(tmpLines.find(removeList[i].first));
		deleted_.append(removeList[i]);
	}
}

void SMLineStyle::nameChanged(const QString &newName)
{
	if (selection_.count() != 1)
	{
		qDebug(QString("SMLineStyle::nameChanged #selection=%1").arg(selection_.count()));
		return;
	}
	QString oldName = selection_.begin().key();
	multiLine *tmpLine = selection_.begin().data();
	multiLine newLine(*tmpLine);
	
	selection_.clear();
	tmpLines.erase(oldName);

	tmpLines.insert(newName, newLine);
	selection_[newName] = &tmpLines[newName];

	QList<RemoveItem>::iterator it;
	for (it = deleted_.begin(); it != deleted_.end(); ++it)
	{
		if ((*it).second == oldName)
		{
			oldName = (*it).first;
			deleted_.remove(it);
			break;
		}
	}

	deleted_.append(RemoveItem(oldName, newName));
}

void SMLineStyle::languageChange()
{
	
}

void SMLineStyle::unitChange()
{

}

void SMLineStyle::setupConnections()
{
	connect(widget_->addButton, SIGNAL(clicked()), this, SLOT(slotAddLine()));
	connect(widget_->removeButton, SIGNAL(clicked()), this, SLOT(slotDeleteLine()));
	connect(widget_->endCombo, SIGNAL(activated(int)), this, SLOT(slotSetEnd(int)));
	connect(widget_->joinCombo, SIGNAL(activated(int)), this, SLOT(slotSetJoin(int)));
	connect(widget_->colorCombo, SIGNAL(activated(const QString&)), this, SLOT(slotColor(const QString&)));
	connect(widget_->dashCombo, SIGNAL(activated(int)), this, SLOT(slotLineStyle(int)));
	connect(widget_->shadeBox, SIGNAL(valueChanged(int)), this, SLOT(slotShade(int)));
	connect(widget_->lineWidth, SIGNAL(valueChanged(double)), this, SLOT(slotLineWidth()));
}

void SMLineStyle::removeConnections()
{
	disconnect(widget_->addButton, SIGNAL(clicked()), this, SLOT(slotAddLine()));
	disconnect(widget_->removeButton, SIGNAL(clicked()), this, SLOT(slotDeleteLine()));
	disconnect(widget_->endCombo, SIGNAL(activated(int)), this, SLOT(slotSetEnd(int)));
	disconnect(widget_->joinCombo, SIGNAL(activated(int)), this, SLOT(slotSetJoin(int)));
	disconnect(widget_->colorCombo, SIGNAL(activated(const QString&)), this, SLOT(slotColor(const QString&)));
	disconnect(widget_->dashCombo, SIGNAL(activated(int)), this, SLOT(slotLineStyle(int)));
	disconnect(widget_->shadeBox, SIGNAL(valueChanged(int)), this, SLOT(slotShade(int)));
	disconnect(widget_->lineWidth, SIGNAL(valueChanged(double)), this, SLOT(slotLineWidth()));
}

void SMLineStyle::slotLineStyle(int i)
{
	Qt::PenStyle c = Qt::SolidLine;
	switch (i)
	{
		case 0:
			c = Qt::SolidLine;
			break;
		case 1:
			c = Qt::DashLine;
			break;
		case 2:
			c = Qt::DotLine;
			break;
		case 3:
			c = Qt::DashDotLine;
			break;
		case 4:
			c = Qt::DashDotDotLine;
			break;
	}

	Q_ASSERT(currentLine_ >= 0);
	if (currentLine_ < 0)
		return;

	QMap<QString, multiLine*>::iterator it;
	for (it = selection_.begin(); it != selection_.end(); ++it)
	{
		multiLine *tmp = it.data();
		(*tmp)[currentLine_].Dash = static_cast<int>(c);
	}

	updateSList();
	updatePreview();

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMLineStyle::slotSetEnd(int i)
{
	Qt::PenCapStyle c = Qt::FlatCap;
	switch (i)
	{
		case 0:
			c = Qt::FlatCap;
			break;
		case 1:
			c = Qt::SquareCap;
			break;
		case 2:
			c = Qt::RoundCap;
			break;
	}

	QMap<QString, multiLine*>::iterator it;
	for (it = selection_.begin(); it != selection_.end(); ++it)
	{
		multiLine *tmp = it.data();
		(*tmp)[currentLine_].LineEnd = static_cast<int>(c);
	}

	updateSList();
	updatePreview();

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMLineStyle::slotSetJoin(int i)
{
	Q_ASSERT(currentLine_ >= 0);
	if (currentLine_ < 0)
		return;

	Qt::PenJoinStyle c = Qt::MiterJoin;
	switch (i)
	{
		case 0:
			c = Qt::MiterJoin;
			break;
		case 1:
			c = Qt::BevelJoin;
			break;
		case 2:
			c = Qt::RoundJoin;
			break;
	}

	QMap<QString, multiLine*>::iterator it;
	for (it = selection_.begin(); it != selection_.end(); ++it)
	{
		multiLine *tmp = it.data();
		(*tmp)[currentLine_].LineJoin = static_cast<int>(c);
	}

	updateSList();
	updatePreview();

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMLineStyle::slotColor(const QString &s)
{
	QMap<QString, multiLine*>::iterator it;
	for (it = selection_.begin(); it != selection_.end(); ++it)
	{
		multiLine *tmp = it.data();
		(*tmp)[currentLine_].Color = s;
	}

	updateSList();
	updatePreview();

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMLineStyle::slotShade(int i)
{
	QMap<QString, multiLine*>::iterator it;
	for (it = selection_.begin(); it != selection_.end(); ++it)
	{
		multiLine *tmp = it.data();
		(*tmp)[currentLine_].Shade = i;
	}

	updateSList();
	updatePreview();

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMLineStyle::slotLineWidth()
{
	QMap<QString, multiLine*>::iterator it;
	for (it = selection_.begin(); it != selection_.end(); ++it)
	{
		multiLine *tmp = it.data();
		(*tmp)[currentLine_].Width = widget_->lineWidth->value();
	}

	updatePreview();
	resort();

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMLineStyle::slotAddLine()
{
	if (!doc_ || selection_.count() != 1)
		return;

	multiLine *tmpLine = selection_.begin().data();
	struct SingleLine sl;
	sl.Color = (*tmpLine)[currentLine_].Color;
	sl.Shade = (*tmpLine)[currentLine_].Shade;
	sl.Dash = (*tmpLine)[currentLine_].Dash;
	sl.LineEnd = (*tmpLine)[currentLine_].LineEnd;
	sl.LineJoin = (*tmpLine)[currentLine_].LineJoin;
	sl.Width = (*tmpLine)[currentLine_].Width;
	int cc = 0;
	bool fo = false;
	for (multiLine::iterator it2 = (*tmpLine).begin(); it2 != (*tmpLine).end(); ++it2)
	{
		if (sl.Width < (*it2).Width)
		{
			(*tmpLine).insert(it2, sl);
			fo = true;
			break;
		}
		cc++;
	}
	if (!fo)
		(*tmpLine).push_back(sl);
	currentLine_ = cc;
	rebuildList();
	widget_->showStyle(*tmpLine, doc_->PageColors, cc);
	updatePreview();

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMLineStyle::rebuildList()
{
	QString tmp, tmp2;
	widget_->lineStyles->clear();
	QPixmap * pm2;
	multiLine *tmpLine = selection_.begin().data();
	for (multiLine::iterator it = (*tmpLine).begin(); it != (*tmpLine).end(); ++it)
	{
		pm2 = getWidePixmap(calcFarbe((*it).Color, (*it).Shade));
		tmp2 = " "+tmp.setNum((*it).Width)+ tr(" pt")+" ";
		switch (static_cast<Qt::PenStyle>((*it).Dash))
		{
			case Qt::SolidLine:
				tmp2 += tr("Solid Line");
				break;
			case Qt::DashLine:
				tmp2 += tr("Dashed Line");
				break;
			case Qt::DotLine:
				tmp2 += tr("Dotted Line");
				break;
			case Qt::DashDotLine:
				tmp2 += tr("Dash Dot Line");
				break;
			case Qt::DashDotDotLine:
				tmp2 += tr("Dash Dot Dot Line");
				break;
			default:
				tmp2 += tr("Solid Line");
				break;
		}
		tmp2 += " ";
		widget_->lineStyles->insertItem(*pm2, tmp2);
	}
}

void SMLineStyle::slotDeleteLine()
{
	if (!doc_ || selection_.count() != 1)
		return;

	multiLine *tmpLine = selection_.begin().data();

	if ((*tmpLine).size() == 1)
		return;

	int cc = 0;
	for (multiLine::iterator it3 = (*tmpLine).begin(); it3 != (*tmpLine).end(); ++it3)
	{
		if (cc == currentLine_)
		{
			(*tmpLine).erase(it3);
			break;
		}
		cc++;
	}

	currentLine_ = 0;
	rebuildList();
	widget_->showStyle(*tmpLine, doc_->PageColors);
	updatePreview();

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMLineStyle::updateSList()
{
	if (selection_.count() < 1)
		return;

	Q_ASSERT(currentLine_ >= 0);
	if  (currentLine_ < 0)
		return;


	QString tmp, tmp2;
	QPixmap * pm;
	multiLine *tmpLine = selection_.begin().data();
	
	pm = getWidePixmap(calcFarbe((*tmpLine)[currentLine_].Color, (*tmpLine)[currentLine_].Shade));
	tmp2 = " "+tmp.setNum((*tmpLine)[currentLine_].Width)+ tr(" pt ");
	switch (static_cast<Qt::PenStyle>((*tmpLine)[currentLine_].Dash))
	{
		case Qt::SolidLine:
			tmp2 += tr("Solid Line");
			break;
		case Qt::DashLine:
			tmp2 += tr("Dashed Line");
			break;
		case Qt::DotLine:
			tmp2 += tr("Dotted Line");
			break;
		case Qt::DashDotLine:
			tmp2 += tr("Dash Dot Line");
			break;
		case Qt::DashDotDotLine:
			tmp2 += tr("Dash Dot Dot Line");
			break;
		default:
			tmp2 += tr("Solid Line");
			break;
	}
	tmp2 += " ";
	if (widget_->lineStyles->count() == 1)  // to avoid Bug in Qt-3.1.2
	{
		widget_->lineStyles->clear();
		widget_->lineStyles->insertItem(*pm, tmp2);
	}
	else
		widget_->lineStyles->changeItem(*pm, tmp2, currentLine_);
}

void SMLineStyle::updatePreview()
{
    if (selection_.count() < 1)
		return;
	
	QPixmap pm = QPixmap(200, 37);
	pm.fill(Qt::white);
	QPainter p;
	p.begin(&pm);
	multiLine *tmpLine = selection_.begin().data();

	for (int it = (*tmpLine).size()-1; it > -1; it--)
	{
		p.setPen(QPen(calcFarbe((*tmpLine)[it].Color, (*tmpLine)[it].Shade),
				 qMax(static_cast<int>((*tmpLine)[it].Width), 1),
				 static_cast<Qt::PenStyle>((*tmpLine)[it].Dash),
				 static_cast<Qt::PenCapStyle>((*tmpLine)[it].LineEnd),
				 static_cast<Qt::PenJoinStyle>((*tmpLine)[it].LineJoin)));
		p.drawLine(17, 18, 183, 18);
	}
	p.end();
	widget_->previewLabel->setPixmap(pm);
}

QColor SMLineStyle::calcFarbe(const QString &name, int shade)
{
	QColor tmpf;
	if (!doc_)
		return tmpf;
	const ScColor& color = doc_->PageColors[name];
	tmpf = ScColorEngine::getDisplayColor(color, doc_, shade);
	return tmpf;
}

void SMLineStyle::slotCurrentLineChanged(int i)
{
	currentLine_ = i;
}

void SMLineStyle::resort()
{
	if (!doc_ || selection_.count() != 1)
		return;

	int cc = 0;
	struct SingleLine sl;
	multiLine *tmpLine = selection_.begin().data();

	sl.Color = (*tmpLine)[currentLine_].Color;
	sl.Shade = (*tmpLine)[currentLine_].Shade;
	sl.Dash = (*tmpLine)[currentLine_].Dash;
	sl.LineEnd = (*tmpLine)[currentLine_].LineEnd;
	sl.LineJoin = (*tmpLine)[currentLine_].LineJoin;
	sl.Width = (*tmpLine)[currentLine_].Width;
	multiLine::iterator it3;
	for (it3 = (*tmpLine).begin(); it3 != (*tmpLine).end(); ++it3)
	{
		if (cc == currentLine_)
		{
			(*tmpLine).erase(it3);
			break;
		}
		cc++;
	}
	cc = 0;
	bool fo = false;
	for (multiLine::iterator it2 = (*tmpLine).begin(); it2 != (*tmpLine).end(); ++it2)
	{
		if (sl.Width < (*it2).Width)
		{
			(*tmpLine).insert(it2, sl);
			fo = true;
			break;
		}
		cc++;
	}
	if (!fo)
		(*tmpLine).push_back(sl);
	currentLine_ = cc;
	rebuildList();
	widget_->showStyle(*tmpLine, doc_->PageColors, cc);
	updatePreview();
}

SMLineStyle::~SMLineStyle()
{
	delete widget_;
	delete twidget_;
	widget_ = 0;
	twidget_ = 0;
}
