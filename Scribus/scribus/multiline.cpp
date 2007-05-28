/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "multiline.h"
//#include "multiline.moc"

#include <qpainter.h>
#include <qmessagebox.h>
//Added by qt3to4:
#include <Q3HBoxLayout>
#include <QPixmap>
#include <QLabel>
#include <Q3VBoxLayout>

#include "colorlistbox.h"
#include "sccombobox.h"
#include "scribusdoc.h"
#include "page.h"
#include "colorutil.h"
#include "commonstrings.h"
#include "sccolorengine.h"

extern QPixmap loadIcon(QString nam);

MultiLine::MultiLine( QWidget* parent, ScribusDoc* doc, multiLine ml, QString nam, QMap<QString,multiLine> *Sty)
		: QDialog( parent, "Multiline", true, 0 )
{
	setIcon(loadIcon("AppIcon.png"));
	setCaption( tr( "Edit Style" ) );
	Docu = doc;
	TempVorl = ml;
	CurLin = 0;
	TempStyles = Sty;
	GivenName = nam;
	MultiLineLayout = new Q3VBoxLayout( this, 5, 4, "MultiLineLayout");
	SName = new QLineEdit(this, "Name");
	SName->setText(nam);
	MultiLineLayout->addWidget(SName);
	Preview = new QLabel( this, "Preview" );
	Preview->setFrameShape( QLabel::Panel );
	Preview->setFrameShadow( QLabel::Sunken );
	Preview->setAlignment( Qt::AlignVCenter | Qt::AlignHCenter );
	Preview->setScaledContents( false );
	MultiLineLayout->addWidget( Preview );

	layout2 = new Q3HBoxLayout( 0, 0, 4, "layout2");

	AddStyle = new QPushButton( this, "AddStyle" );
	AddStyle->setPixmap(loadIcon("penciladd.png"));
	AddStyle->setText( QString::null );
	AddStyle->setAutoDefault(false);
	AddStyle->setDefault(false);
	layout2->addWidget( AddStyle );

	RemoveStyle = new QPushButton( this, "RemoveStyle" );
	RemoveStyle->setPixmap(loadIcon("pencilsub.png"));
	RemoveStyle->setText( QString::null );
	RemoveStyle->setAutoDefault(false);
	RemoveStyle->setDefault(false);
	layout2->addWidget( RemoveStyle );
	QSpacerItem* spacer = new QSpacerItem( 71, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
	layout2->addItem( spacer );
	MultiLineLayout->addLayout( layout2 );

	Styles = new Q3ListBox( this, "Styles" );
	RebuildList();
	MultiLineLayout->addWidget( Styles );

	Properties = new Q3GroupBox( this, "Properties" );
	Properties->setTitle( QString::null );
	Properties->setFrameShape( Q3GroupBox::NoFrame );
	Properties->setFrameShadow( Q3GroupBox::Plain );
	Properties->setColumnLayout(0, Qt::Vertical );
	Properties->layout()->setSpacing( 4 );
	Properties->layout()->setMargin( 0 );
	PropertiesLayout = new Q3VBoxLayout( Properties->layout() );
	PropertiesLayout->setAlignment( Qt::AlignTop );

	Dashes = new LineCombo(Properties);
	PropertiesLayout->addWidget( Dashes );

	LineEnds = new ScComboBox( false, Properties, "LineEnds" );
	LineEnds->insertItem(loadIcon("ButtCap.png"), tr( "Flat Cap" ) );
	LineEnds->insertItem(loadIcon("SquareCap.png"), tr( "Square Cap" ) );
	LineEnds->insertItem(loadIcon("RoundCap.png"), tr( "Round Cap" ) );
	PropertiesLayout->addWidget( LineEnds );

	LineJoin = new ScComboBox( false, Properties, "LineJoin" );
	LineJoin->insertItem(loadIcon("MiterJoin.png"), tr( "Miter Join" ) );
	LineJoin->insertItem(loadIcon("BevelJoin.png"), tr( "Bevel Join" ) );
	LineJoin->insertItem(loadIcon("RoundJoin.png"), tr( "Round Join" ) );
	PropertiesLayout->addWidget( LineJoin );

	layout1 = new Q3HBoxLayout( 0, 0, 6, "layout1");

	WidthText = new QLabel( Properties, "WidthText" );
	WidthText->setText( tr( "Line Width:" ) );
	WidthText->setAlignment( Qt::AlignVCenter | Qt::AlignLeft );
	layout1->addWidget( WidthText );

	LWidth = new ScrSpinBox( 0, 300, Properties, 1 );
	LWidth->setSuffix( tr( " pt" ) );
	layout1->addWidget( LWidth );
	PropertiesLayout->addLayout( layout1 );

	layout4 = new Q3HBoxLayout( 0, 0, 6, "layout4");
	Color = new ScComboBox( false, Properties, "Color" );
	ColorList::Iterator it;
	for (it = doc->PageColors.begin(); it != doc->PageColors.end(); ++it)
	{
//Qt4			Color->listBox()->insertItem( new ColorWidePixmapItem(it.data(), doc, it.key()) );
	}
	layout4->addWidget( Color );
	Shade = new QSpinBox( Properties, "Shade" );
	Shade->setSuffix( tr( " %" ) );
	Shade->setMaxValue( 100 );
	Shade->setMinValue( 0 );
	layout4->addWidget( Shade );
	PropertiesLayout->addLayout( layout4 );
	MultiLineLayout->addWidget( Properties );

	layout3 = new Q3HBoxLayout( 0, 0, 6, "layout3");

	OK = new QPushButton( CommonStrings::tr_OK, this, "OK" );
	OK->setAutoDefault(false);
	OK->setDefault(false);
	layout3->addWidget( OK );

	Cancel = new QPushButton( CommonStrings::tr_Cancel, this, "Cancel" );
	Cancel->setAutoDefault(false);
	Cancel->setDefault(false);
	layout3->addWidget( Cancel );
	MultiLineLayout->addLayout( layout3 );
	resize( QSize(222, 349).expandedTo(minimumSizeHint()) );

	// signals and slots connections
	connect(Styles, SIGNAL(highlighted(int)), this, SLOT(slotEditStyle(int)));
	connect( Cancel, SIGNAL( clicked() ), this, SLOT( reject() ) );
	connect( OK, SIGNAL( clicked() ), this, SLOT( accept() ) );
	connect(Dashes, SIGNAL(activated(int)), this, SLOT(NewLSty()));
	connect(LineJoin, SIGNAL(activated(int)), this, SLOT(NewLJoin()));
	connect(LineEnds, SIGNAL(activated(int)), this, SLOT(NewLEnd()));
	connect(LWidth, SIGNAL(valueChanged(double)), this, SLOT(NewLWidth()));
	connect(Color, SIGNAL(activated(int)), this, SLOT(NewLColor()));
	connect(AddStyle, SIGNAL(clicked()), this, SLOT(NewSubLine()));
	connect(RemoveStyle, SIGNAL(clicked()), this, SLOT(DelSubLine()));
	connect(Shade, SIGNAL(valueChanged(int)), this, SLOT(NewLShade()));
	connect(SName, SIGNAL(lostFocus()), this, SLOT(NewName()));
	slotEditStyle(0);
	updatePreview();
}

void MultiLine::updatePreview()
{
	QPixmap pm = QPixmap(200, 37);
	pm.fill(Qt::white);
	QPainter p;
	p.begin(&pm);
	for (int it = TempVorl.size()-1; it > -1; it--)
	{
		p.setPen(QPen(calcFarbe(TempVorl[it].Color, TempVorl[it].Shade),
		              qMax(static_cast<int>(TempVorl[it].Width), 1),
		              static_cast<Qt::PenStyle>(TempVorl[it].Dash),
		              static_cast<Qt::PenCapStyle>(TempVorl[it].LineEnd),
		              static_cast<Qt::PenJoinStyle>(TempVorl[it].LineJoin)));
		p.drawLine(17, 18, 183, 18);
	}
	p.end();
	Preview->setPixmap(pm);
}

QColor MultiLine::calcFarbe(const QString& name, int shade)
{
	const ScColor& color = Docu->PageColors[name];
	QColor tmpf = ScColorEngine::getDisplayColor(color, Docu, shade);
	return tmpf;
}

void MultiLine::updateSList()
{
	QString tmp, tmp2;
	QPixmap * pm;
	pm = getWidePixmap(calcFarbe(TempVorl[CurLin].Color, TempVorl[CurLin].Shade));
	tmp2 = " "+tmp.setNum(TempVorl[CurLin].Width) + " " + tr("pt") + " ";
	tmp2 += CommonStrings::translatePenStyleName(static_cast<Qt::PenStyle>(TempVorl[CurLin].Dash));
	tmp2 += " ";
	
// 	switch (static_cast<PenStyle>(TempVorl[CurLin].Dash))
// 	{
// 	case Qt::SolidLine:
// 		tmp2 += tr("Solid Line");
// 		break;
// 	case Qt::DashLine:
// 		tmp2 += tr("Dashed Line");
// 		break;
// 	case Qt::DotLine:
// 		tmp2 += tr("Dotted Line");
// 		break;
// 	case Qt::DashDotLine:
// 		tmp2 += tr("Dash Dot Line");
// 		break;
// 	case Qt::DashDotDotLine:
// 		tmp2 += tr("Dash Dot Dot Line");
// 		break;
// 	default:
// 		tmp2 += tr("Solid Line");
// 		break;
// 	}
// 	tmp2 += " ";
	if (Styles->count() == 1)				// to avoid Bug in Qt-3.1.2
	{
		Styles->clear();
		Styles->insertItem(*pm, tmp2);
	}
	else
		Styles->changeItem(*pm, tmp2, CurLin);
}

void MultiLine::reSort()
{
	int cc = 0;
	struct SingleLine sl;
	sl.Color = TempVorl[CurLin].Color;
	sl.Shade = TempVorl[CurLin].Shade;
	sl.Dash = TempVorl[CurLin].Dash;
	sl.LineEnd = TempVorl[CurLin].LineEnd;
	sl.LineJoin = TempVorl[CurLin].LineJoin;
	sl.Width = TempVorl[CurLin].Width;
	multiLine::iterator it3;
	for (it3 = TempVorl.begin(); it3 != TempVorl.end(); ++it3)
	{
		if (cc == CurLin)
		{
			TempVorl.erase(it3);
			break;
		}
		cc++;
	}
	cc = 0;
	bool fo = false;
	for (multiLine::iterator it2 = TempVorl.begin(); it2 != TempVorl.end(); ++it2)
	{
		if (sl.Width < (*it2).Width)
		{
			TempVorl.insert(it2, sl);
			fo = true;
			break;
		}
		cc++;
	}
	if (!fo)
		TempVorl.push_back(sl);
	CurLin = cc;
	RebuildList();
	slotEditStyle(cc);
	updatePreview();
}

void MultiLine::RebuildList()
{
	QString tmp, tmp2;
	Styles->clear();
	QPixmap * pm2;
	for (multiLine::iterator it = TempVorl.begin(); it != TempVorl.end(); ++it)
	{
		pm2 = getWidePixmap(calcFarbe((*it).Color, (*it).Shade));
		tmp2 = " "+tmp.setNum((*it).Width) + " " + tr("pt") + " ";
		tmp2 += CommonStrings::translatePenStyleName(static_cast<Qt::PenStyle>((*it).Dash));
		tmp2 += " ";
		Styles->insertItem(*pm2, tmp2);
	}
}

void MultiLine::NewName()
{
	QString NameNew = SName->text();
	if (NameNew != GivenName)
	{
		if (TempStyles->contains(NameNew))
		{
			QMessageBox::warning(this, CommonStrings::trWarning, "<qt>"+ tr("Name \"%1\" isn't unique.<br/>Please choose another.").arg(NameNew)+"</qt>", tr("OK"));
			SName->setText(GivenName);
			SName->setFocus();
		}
		else
			GivenName = NameNew;
	}
}

void MultiLine::NewSubLine()
{
	struct SingleLine sl;
	sl.Color = TempVorl[CurLin].Color;
	sl.Shade = TempVorl[CurLin].Shade;
	sl.Dash = TempVorl[CurLin].Dash;
	sl.LineEnd = TempVorl[CurLin].LineEnd;
	sl.LineJoin = TempVorl[CurLin].LineJoin;
	sl.Width = TempVorl[CurLin].Width;
	int cc = 0;
	bool fo = false;
	for (multiLine::iterator it2 = TempVorl.begin(); it2 != TempVorl.end(); ++it2)
	{
		if (sl.Width < (*it2).Width)
		{
			TempVorl.insert(it2, sl);
			fo = true;
			break;
		}
		cc++;
	}
	if (!fo)
		TempVorl.push_back(sl);
	CurLin = cc;
	RebuildList();
	slotEditStyle(cc);
	updatePreview();
}

void MultiLine::DelSubLine()
{
	if (TempVorl.size() == 1)
		return;
	int cc = 0;
	for (multiLine::iterator it3 = TempVorl.begin(); it3 != TempVorl.end(); ++it3)
	{
		if (cc == CurLin)
		{
			TempVorl.erase(it3);
			break;
		}
		cc++;
	}
	CurLin = 0;
	RebuildList();
	slotEditStyle(0);
	updatePreview();
}

void MultiLine::NewLJoin()
{
	Qt::PenJoinStyle c = Qt::MiterJoin;
	switch (LineJoin->currentItem())
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
	TempVorl[CurLin].LineJoin = static_cast<int>(c);
	updateSList();
}

void MultiLine::NewLEnd()
{
	Qt::PenCapStyle c = Qt::FlatCap;
	switch (LineEnds->currentItem())
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
	TempVorl[CurLin].LineEnd = static_cast<int>(c);
	updateSList();
	updatePreview();
}

void MultiLine::NewLSty()
{
	Qt::PenStyle c = Qt::SolidLine;
	switch (Dashes->currentItem())
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
	TempVorl[CurLin].Dash = static_cast<int>(c);
	updateSList();
	updatePreview();
}

void MultiLine::NewLColor()
{
	TempVorl[CurLin].Color = Color->currentText();
	updateSList();
	updatePreview();
}

void MultiLine::NewLWidth()
{
	TempVorl[CurLin].Width = LWidth->value();
	reSort();
	updatePreview();
}

void MultiLine::NewLShade()
{
	TempVorl[CurLin].Shade = Shade->value();
	updateSList();
	updatePreview();
}

void MultiLine::slotEditStyle(int i)
{
	disconnect(Styles, SIGNAL(highlighted(int)), this, SLOT(slotEditStyle(int)));
	disconnect(Dashes, SIGNAL(activated(int)), this, SLOT(NewLSty()));
	disconnect(LineJoin, SIGNAL(activated(int)), this, SLOT(NewLJoin()));
	disconnect(LineEnds, SIGNAL(activated(int)), this, SLOT(NewLEnd()));
	disconnect(LWidth, SIGNAL(valueChanged(double)), this, SLOT(NewLWidth()));
	disconnect(Color, SIGNAL(activated(int)), this, SLOT(NewLColor()));
	disconnect(Shade, SIGNAL(valueChanged(int)), this, SLOT(NewLShade()));
	Styles->setSelected(i, true);
	CurLin = i;
	int tvs=static_cast<int>(TempVorl.size());
	if (i >=0 && i < tvs)
	{
		LWidth->setValue(TempVorl[i].Width);
		Color->setCurrentText(TempVorl[i].Color);
		Shade->setValue(TempVorl[i].Shade);
		switch (static_cast<Qt::PenStyle>(TempVorl[i].Dash))
		{
		case Qt::SolidLine:
			Dashes->setCurrentItem(0);
			break;
		case Qt::DashLine:
			Dashes->setCurrentItem(1);
			break;
		case Qt::DotLine:
			Dashes->setCurrentItem(2);
			break;
		case Qt::DashDotLine:
			Dashes->setCurrentItem(3);
			break;
		case Qt::DashDotDotLine:
			Dashes->setCurrentItem(4);
			break;
		default:
			Dashes->setCurrentItem(0);
			break;
		}
		switch (static_cast<Qt::PenCapStyle>(TempVorl[i].LineEnd))
		{
		case Qt::FlatCap:
			LineEnds->setCurrentItem(0);
			break;
		case Qt::SquareCap:
			LineEnds->setCurrentItem(1);
			break;
		case Qt::RoundCap:
			LineEnds->setCurrentItem(2);
			break;
		default:
			LineEnds->setCurrentItem(0);
			break;
		}
		switch (static_cast<Qt::PenJoinStyle>(TempVorl[i].LineJoin))
		{
		case Qt::MiterJoin:
			LineJoin->setCurrentItem(0);
			break;
		case Qt::BevelJoin:
			LineJoin->setCurrentItem(1);
			break;
		case Qt::RoundJoin:
			LineJoin->setCurrentItem(2);
			break;
		default:
			LineJoin->setCurrentItem(0);
			break;
		}
	}
	connect(Styles, SIGNAL(highlighted(int)), this, SLOT(slotEditStyle(int)));
	connect(Dashes, SIGNAL(activated(int)), this, SLOT(NewLSty()));
	connect(LineJoin, SIGNAL(activated(int)), this, SLOT(NewLJoin()));
	connect(LineEnds, SIGNAL(activated(int)), this, SLOT(NewLEnd()));
	connect(LWidth, SIGNAL(valueChanged(double)), this, SLOT(NewLWidth()));
	connect(Color, SIGNAL(activated(int)), this, SLOT(NewLColor()));
	connect(Shade, SIGNAL(valueChanged(int)), this, SLOT(NewLShade()));
}

