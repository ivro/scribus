/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "colorlistbox.h"
//#include "colorlistbox.moc"
#include <qpainter.h>
#include <qpixmap.h>
#include <qbitmap.h>
#include <cstdlib>
#include <QToolTip>
#include <QEvent>
#include <QHelpEvent>

#include "qdebug.h"
#include "scconfig.h"
#include "commonstrings.h"
#include "scribusdoc.h"
#include "colorutil.h"
#include "util.h"
#include "sccolorengine.h"


ColorPixmapValue::ColorPixmapValue() : m_color(), m_doc(NULL), m_name("invalid")
{}

ColorPixmapValue::ColorPixmapValue(const ColorPixmapValue& other) : m_color(other.m_color), m_doc(other.m_doc), m_name(other.m_name)
{}

ColorPixmapValue& ColorPixmapValue::operator= (const ColorPixmapValue& other)
{
	m_color = other.m_color;
	m_doc = other.m_doc;
	m_name = other.m_name;
	return *this;
}

ColorPixmapValue::ColorPixmapValue( const ScColor& col, ScribusDoc* doc, const QString colName ) 
{
	if (doc) 
	{
		m_doc = doc->guardedPtr();
		m_color = doc->PageColors.contains(colName)? doc->PageColors[colName] : col;
	}
	else
	{
		m_color = col;
		m_doc = NULL;
	}
	m_name = colName;
}



class SCRIBUS_API ColorSmallItemDelegate : public ScListBoxPixmap<15,15>
{
public:
	ColorSmallItemDelegate(): ScListBoxPixmap<15,15>() {};
	~ColorSmallItemDelegate() {};
	
	virtual void redraw(const QVariant&) const;
	virtual QString text(const QVariant&) const;
	virtual int rtti() const { return 654873547; };
};

class SCRIBUS_API ColorWideItemDelegate : public ScListBoxPixmap<30,15>
{
public:
	ColorWideItemDelegate(): ScListBoxPixmap<30,15>() {};
	~ColorWideItemDelegate() {};
	
	virtual void redraw(const QVariant&) const;
	virtual QString text(const QVariant&) const;
	virtual int rtti() const { return 654873548; };
};

class SCRIBUS_API ColorFancyItemDelegate : public ScListBoxPixmap<60,15>
{
public:
	ColorFancyItemDelegate(): ScListBoxPixmap<60,15>() {};
	~ColorFancyItemDelegate() {};
	
	virtual void redraw(const QVariant&) const;
	virtual QString text(const QVariant&) const;
	virtual int rtti() const { return 654873549; };
};


void ColorSmallItemDelegate::redraw(const QVariant& data) const
{
	if (!data.canConvert<ColorPixmapValue>())
		return;
	ColorPixmapValue item(data.value<ColorPixmapValue>());

	QPixmap* pPixmap = ScListBoxPixmap<15,15>::pmap.get();
	QColor rgb = ScColorEngine::getDisplayColor(item.m_color, item.m_doc);
	ScColor varcol = item.m_color;
//	qDebug() << "redraw:" << varcol.name() << (static_cast<ScribusDoc*>(item.m_doc) == NULL ) << rgb;
	pPixmap->fill(rgb);
	QPainter painter(pPixmap);
	painter.setBrush(Qt::NoBrush);
	QPen b(Qt::black, 1);
	painter.setPen(b);
	painter.drawRect(0, 0, 15, 15);
	painter.end();
}

void ColorWideItemDelegate::redraw(const QVariant& data) const
{
	if (!data.canConvert<ColorPixmapValue>())
		return;
	ColorPixmapValue item(data.value<ColorPixmapValue>());
	
	QColor rgb = ScColorEngine::getDisplayColor(item.m_color, item.m_doc);
	ScColor varcol = item.m_color;
//	qDebug() << "redraw:" << varcol.name() << (static_cast<ScribusDoc*>(item.m_doc) == NULL ) << rgb;
	ScListBoxPixmap<30,15>::pmap->fill(rgb);
}


void ColorFancyItemDelegate::redraw(const QVariant& data) const
{
	static QPixmap smallPix(15, 15);
	static QPixmap alertIcon;
	static QPixmap cmykIcon;
	static QPixmap rgbIcon;
	static QPixmap spotIcon;
	static QPixmap regIcon;
	static bool iconsInitialized = false;

	if ( !iconsInitialized ) {
		alertIcon = loadIcon("alert.png");
		cmykIcon = loadIcon("cmyk.png");
		rgbIcon = loadIcon("rgb.png");
		spotIcon = loadIcon("spot.png");
		regIcon = loadIcon("register.png");
		iconsInitialized = true;
	}

	QPixmap* pPixmap = ScListBoxPixmap<60,15>::pmap.get();
	pPixmap->fill(Qt::transparent);

	if (data.canConvert<ColorPixmapValue>())
	{
		ColorPixmapValue item(data.value<ColorPixmapValue>());
		
		QColor rgb = ScColorEngine::getDisplayColor(item.m_color, item.m_doc);
		//  ScColor varcol = item.m_color;
		//	qDebug() << "redraw:" << data.typeName() << varcol.name() << item.m_name << text(data) << rgb;
		smallPix.fill(rgb);
		QPainter painter(&smallPix);
		painter.setBrush(Qt::NoBrush);
		QPen b(Qt::black, 1);
		painter.setPen(b);
		painter.drawRect(0, 0, 15, 15);
		painter.end();
		
		paintAlert(smallPix, *pPixmap, 0, 0);
		bool isOutOfGamut = ScColorEngine::isOutOfGamut(item.m_color, item.m_doc);
		if (isOutOfGamut)
			paintAlert(alertIcon, *pPixmap, 15, 0);
		if ((item.m_color.getColorModel() == colorModelCMYK) || (item.m_color.isSpotColor()))
			paintAlert(cmykIcon, *pPixmap, 30, 0);
		else
			paintAlert(rgbIcon, *pPixmap, 30, 0);
		if (item.m_color.isSpotColor())
			paintAlert(spotIcon, *pPixmap, 45, 0);
		if (item.m_color.isRegistrationColor())
			paintAlert(regIcon, *pPixmap, 46, 0);
		if (!pPixmap->mask().isNull() && ((!item.m_color.isSpotColor() && !item.m_color.isRegistrationColor()) || !isOutOfGamut))
		{
// Qt4 FIXME: Qt4 can use better alpha setting. see colorutil.cpp
// 		QPainter alpha; // transparency handling
// 		alpha.begin(pPixmap->mask()));
// 		alpha.setBrush(Qt::color0);
// 		alpha.setPen(Qt::color0);
// 		if (!m_color.isSpotColor() && !m_color.isRegistrationColor())
// 			alpha.drawRect(45, 0, 15, 15);
// 		if (!isOutOfGamut)
// 			alpha.drawRect(15, 0, 15, 15);
// 		alpha.end();
		}
	}
}


QString ColorSmallItemDelegate::text(const QVariant& data) const
{
	if (data.canConvert<ColorPixmapValue>())
		return data.value<ColorPixmapValue>().m_name;
	else
		return data.toString();
}

QString ColorWideItemDelegate::text(const QVariant& data) const
{
	if (data.canConvert<ColorPixmapValue>())
		return data.value<ColorPixmapValue>().m_name;
	else
		return data.toString();
}

QString ColorFancyItemDelegate::text(const QVariant& data) const
{
//	qDebug() << "ColorFancyItemDelegate::text" << data.typeName() << data.canConvert<ColorPixmapValue>() << data.toString();
	if (data.canConvert<ColorPixmapValue>())
		return data.value<ColorPixmapValue>().m_name;
	else
		return data.toString();
}


ColorListBox::ColorListBox(QWidget * parent, const char * name) //, Qt::WFlags f)
	: QListWidget(parent)
{
	if (!name || strlen(name) == 0)
		setName("ColorListBox");
	else
		setName(name);
//	setWFlags(f);
	cList = NULL;
	setItemDelegate(new ColorWideItemDelegate());
}


QString ColorListBox::currentColor() const
{
	if (currentRow() >= 0)
	{
		qDebug() << "ColorListBox::currentColor" <<  "row" << currentRow() << item(currentRow())->data(Qt::DisplayRole).toString();
		return item(currentRow())->data(Qt::DisplayRole).toString();
	}
	else {		
		qDebug() << "ColorListBox::currentColor row" << currentRow() << "-->" << CommonStrings::tr_NoneColor;
		return CommonStrings::tr_NoneColor;
	}
}


void ColorListBox::updateBox(ColorList& list, ColorListBox::PixmapType type)
{
	clear();
	reset();
	insertItems(list, type);
}

void ColorListBox::insertItems(ColorList& list, ColorListBox::PixmapType type)
{
	cList = &list;
	if (type == ColorListBox::fancyPixmap)
		insertFancyPixmapItems( list );
	else if (type == ColorListBox::widePixmap)
		insertWidePixmapItems( list );
	else if (type == ColorListBox::smallPixmap)
		insertSmallPixmapItems( list );
}

void ColorListBox::insertSmallPixmapItems(ColorList& list)
{
	ColorList::Iterator it;
	ScribusDoc* doc = list.document();
	for (it = list.begin(); it != list.end(); ++it)
	{
		if (it.key() == CommonStrings::None || it.key() == CommonStrings::tr_NoneColor)
			continue;
		addItem( new ColorPixmapItem(it.data(), doc, it.key()) );
	}
	if (itemDelegate())
		delete itemDelegate();
	setItemDelegate(new ColorSmallItemDelegate());
}

void ColorListBox::insertWidePixmapItems(ColorList& list)
{
	ColorList::Iterator it;
	ScribusDoc* doc = list.document();
	for (it = list.begin(); it != list.end(); ++it)
	{
		if (it.key() == CommonStrings::None || it.key() == CommonStrings::tr_NoneColor)
			continue;
		addItem( new ColorPixmapItem(it.data(), doc, it.key()) );
	}
	if (itemDelegate())
		delete itemDelegate();
	setItemDelegate(new ColorWideItemDelegate());
}

void ColorListBox::insertFancyPixmapItems(ColorList& list)
{
	ColorList::Iterator it;
	ScribusDoc* doc = list.document();
	for (it = list.begin(); it != list.end(); ++it)
	{
		if (it.key() == CommonStrings::None || it.key() == CommonStrings::tr_NoneColor)
			continue;
		addItem( new ColorPixmapItem(it.data(), doc, it.key()) );
	}
	if (itemDelegate())
		delete itemDelegate();
	setItemDelegate(new ColorFancyItemDelegate());
}

bool ColorListBox::event(QEvent *event)
{
	if (event->type() == QEvent::ToolTip)
	{
		if (cList != NULL)
		{
			QHelpEvent *helpEvent = static_cast<QHelpEvent *>(event);
			QListWidgetItem* it = itemAt(helpEvent->pos());
			if (it != 0)
			{
				if (cList->contains(it->text()))
				{
					event->accept();
					QString tipText = "";
					ScColor col = (*cList)[it->text()];
					if (col.getColorModel() == colorModelCMYK)
					{
						int c, m, y, k;
						col.getCMYK(&c, &m, &y, &k);
						tipText = QString("C:%1% M:%2% Y:%3% K:%4%").arg(qRound(c / 2.55)).arg(qRound(m / 2.55)).arg(qRound(y / 2.55)).arg(qRound(k / 2.55));
					}
					else
					{
						int r, g, b;
						col.getRawRGBColor(&r, &g, &b);
						tipText = QString("R:%1 G:%2 B:%3").arg(r).arg(g).arg(b);
					}
					QToolTip::showText(helpEvent->globalPos(), tipText);
					return true;
				}
			}
		}
	}
	return QListWidget::event(event);
}
