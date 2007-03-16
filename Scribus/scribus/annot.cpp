/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "scfonts.h"
#include "annot.h"
//#include "annot.moc"
#include "annotation.h"
#include "cmsettings.h"
#include "editor.h"
#include "customfdialog.h"
#include "buttonicon.h"

#include "mpalette.h"
#include "selfield.h"
#include <qstringlist.h>
#include <qdatetime.h>
#include <qpixmap.h>
//Added by qt3to4:
#include <QLabel>
#include <Q3GridLayout>
#include <Q3HBoxLayout>
#include <Q3VBoxLayout>
#include <Q3Frame>
#include "colorlistbox.h"
#include "prefsmanager.h"
#include "prefsfile.h"
#include "scimage.h"
#include "pageitem.h"
#include "navigator.h"
#include "scribusview.h"
#include "util.h"
#include "prefscontext.h"
#include "scribusstructs.h"
#include "commonstrings.h"
#include "sccombobox.h"
#include "colorcombo.h"

extern QPixmap loadIcon(QString nam);

Annot::Annot(QWidget* parent, PageItem *it, int Seite, int b, int h, ColorList Farben, ScribusView* vie)
		: QDialog( parent, "AN", true, 0 )
{
	ScribusDoc* doc = Farben.document();
	setCaption( tr( "Field Properties" ) );
	setIcon(loadIcon("AppIcon.png"));
	item = it;
	Breite = b;
	Hoehe = h;
	OriBreite = b;
	OriHoehe = h;
	view = vie;
	MaxSeite = Seite;
	QStringList tl;
	dirs = PrefsManager::instance()->prefsFile->getContext("dirs");
	if ((item->annotation().ActionType() == 2) || (item->annotation().ActionType() == 7))
	{
		QString tm = item->annotation().Action();
		tl = tl.split(" ", tm);
	}
	else
	{
		tl.append("0");
		tl.append("0");
	}

	AnnotLayout = new Q3VBoxLayout( this );
	AnnotLayout->setSpacing( 6 );
	AnnotLayout->setMargin( 11 );

	Layout1 = new Q3HBoxLayout;
	Layout1->setSpacing( 6 );
	Layout1->setMargin( 0 );

	TextLabel1 = new QLabel( this, "TextLabel1" );
	TextLabel1->setText( tr( "Type:" ) );
	Layout1->addWidget( TextLabel1 );

	ComboBox1 = new QComboBox( true, this, "ComboBox1" );
	QString tmp[] = { tr("Button"), tr("Text Field"), tr("Check Box"), tr("Combo Box"), tr("List Box")};
	size_t array = sizeof(tmp) / sizeof(*tmp);
	for (uint a = 0; a < array; ++a)
		ComboBox1->insertItem(tmp[a]);
	ComboBox1->setEditable(false);
	Layout1->addWidget( ComboBox1 );
	AnnotLayout->addLayout( Layout1 );
	ComboBox1->setCurrentItem(item->annotation().Type()-2);

	Fram = new Q3WidgetStack(this);
	AnnotLayout->addWidget( Fram );

	GroupBox10 = new Q3GroupBox( this, "GroupBox1" );
	GroupBox10->setGeometry( QRect( 11, 41, 360, 350 ) );
	GroupBox10->setTitle( tr( "Properties" ) );
	GroupBox10->setColumnLayout(0, Qt::Vertical );
	GroupBox10->layout()->setSpacing( 5 );
	GroupBox10->layout()->setMargin( 10 );
	GroupBox10Layout = new Q3VBoxLayout( GroupBox10->layout() );
	GroupBox10Layout->setAlignment( Qt::AlignTop );

	Layout60 = new Q3GridLayout( 0, 1, 1, 0, 5, "Layout6");
	TextLabel20 = new QLabel( GroupBox10, "TextLabel2" );
	TextLabel20->setText( tr( "Name:" ) );
	Layout60->addWidget( TextLabel20, 0, 0 );

	Tip = new QLineEdit( GroupBox10, "Tip" );
	Tip->setText(item->annotation().ToolTip());
	Layout60->addWidget( Tip, 1, 1 );

	Name = new NameWidget(GroupBox10);
	Name->setText(item->itemName());
	Layout60->addWidget( Name, 0, 1 );
	OldName = item->itemName();

	TextLabel30 = new QLabel( GroupBox10, "TextLabel3" );
	TextLabel30->setText( tr( "Tooltip:" ) );
	Layout60->addWidget( TextLabel30, 1, 0);
	GroupBox10Layout->addLayout( Layout60 );

	TabWidget2 = new QTabWidget( GroupBox10, "TabWidget2" );

	tab = new QWidget( TabWidget2, "tab" );
	tabLayout = new Q3VBoxLayout( tab, 10, 5, "tabLayout");

	GroupBox40 = new Q3GroupBox( tab, "GroupBox40" );
	GroupBox40->setTitle( tr( "Text" ) );
	GroupBox40->setColumnLayout(0, Qt::Vertical );
	GroupBox40->layout()->setSpacing( 5 );
	GroupBox40->layout()->setMargin( 10 );
	GroupBox40Layout = new Q3GridLayout( GroupBox40->layout() );
	GroupBox40Layout->setAlignment( Qt::AlignTop );
	TextLabel60 = new QLabel( GroupBox40, "TextLabel6" );
	TextLabel60->setText( tr( "Font for use with PDF 1.3:" ) );
	GroupBox40Layout->addWidget( TextLabel60, 0, 0 );
	Schrift = new QComboBox( true, GroupBox40, "Schrift" );
	/* PFJ - 28/02/04 - Altered from char* to QString. Renamed to fonts and the
	                    loop changed from uint to int and the name to propogate */
	/* FS - 08.03.04 - loop variable must be uint otherwise you get a compiler warning */
	QString fonts[]={"Courier", "Courier Bold", "Courier Italic",
	                 "Courier Bold Italic", "Helvetica",
	                 "Helvetica Bold", "Helvetica Italic", "Helvetica Bold Italic",
	                 "Times", "Times Bold",
	                 "Times Italic", "Times Bold Italic", "Zapf Dingbats",
	                 "Symbols"};
	size_t fontsArray = sizeof(fonts) / sizeof(*fonts);
	for (uint propogate = 0; propogate < fontsArray; ++propogate)
		Schrift->insertItem(fonts[propogate]);
	Schrift->setEditable(false);
	Schrift->setCurrentItem(item->annotation().Font());
	GroupBox40Layout->addMultiCellWidget( Schrift, 0, 0, 1, 2);
	tabLayout->addWidget( GroupBox40 );

	Layout10 = new Q3HBoxLayout( 0, 0, 5, "Layout1");
	GroupBox20 = new Q3GroupBox( tab, "GroupBox2" );
	GroupBox20->setTitle( tr( "Border" ) );
	GroupBox20->setColumnLayout(0, Qt::Vertical );
	GroupBox20->layout()->setSpacing( 5 );
	GroupBox20->layout()->setMargin( 10 );
	GroupBox20Layout = new Q3GridLayout( GroupBox20->layout() );
	GroupBox20Layout->setAlignment( Qt::AlignTop );
	TextLabel40a = new QLabel( GroupBox20, "TextLabel4a" );
	TextLabel40a->setText( tr( "Color:" ) );
	GroupBox20Layout->addWidget( TextLabel40a, 0, 0 );
	BorderC = new ColorCombo( true, GroupBox20, "BorderC" );
	ColorList::Iterator cit;
	BorderC->insertItem(CommonStrings::tr_NoneColor);
	if (item->annotation().borderColor() == CommonStrings::None)
		BorderC->setCurrentItem(BorderC->count()-1);
	for (cit = Farben.begin(); cit != Farben.end(); ++cit)
	{
		BorderC->insertSmallItem(cit.data(), doc, cit.key());
		if (cit.key() == item->annotation().borderColor())
			BorderC->setCurrentItem(BorderC->count()-1);
	}
	BorderC->setEditable(false);
	GroupBox20Layout->addWidget( BorderC, 0, 1 );
	TextLabel40 = new QLabel( GroupBox20, "TextLabel4" );
	TextLabel40->setText( tr( "Width:" ) );
	GroupBox20Layout->addWidget( TextLabel40, 1, 0 );
	BorderW = new QComboBox( true, GroupBox20, "BorderW" );
	// PFJ - 28/02/04 - Altered to the QString/size_t/for style
	QString borders[] = {CommonStrings::tr_NoneColor, tr("Thin"), tr("Normal"), tr("Wide")};
	size_t bordersArray = sizeof(borders) / sizeof(*borders);
	for (uint propogate = 0; propogate < bordersArray; ++propogate)
		BorderW->insertItem(borders[propogate]);
	BorderW->setEditable(false);
	BorderW->setCurrentItem(item->annotation().Bwid());
	GroupBox20Layout->addWidget( BorderW, 1, 1 );
	TextLabel50 = new QLabel( GroupBox20, "TextLabel5" );
	TextLabel50->setText( tr( "Style:" ) );
	GroupBox20Layout->addWidget( TextLabel50, 2, 0 );
	BorderS = new QComboBox( true, GroupBox20, "BorderS" );
	/* PFJ - 28/02/04 - Altered to the QString/size_t/for style */
	QString borders2[] = {tr("Solid"), tr("Dashed"), tr("Underline"),
	                      tr("Beveled"), tr("Inset")};
	size_t borders2Array = sizeof(borders2) / sizeof(*borders2);
	for (uint propogate = 0; propogate < borders2Array; ++propogate)
		BorderS->insertItem(borders2[propogate]);
	BorderS->setEditable(false);
	BorderS->setCurrentItem(item->annotation().Bsty());
	GroupBox20Layout->addWidget( BorderS, 2, 1 );
	Layout10->addWidget( GroupBox20 );

	GroupBox30 = new Q3GroupBox( tab, "GroupBox3" );
	GroupBox30->setTitle( tr( "Other" ) );
	GroupBox30->setColumnLayout(0, Qt::Vertical );
	GroupBox30->layout()->setSpacing( 5 );
	GroupBox30->layout()->setMargin( 10 );
	GroupBox30Layout = new Q3GridLayout( GroupBox30->layout() );
	GroupBox30Layout->setAlignment( Qt::AlignTop );
	ReadOnly = new QCheckBox( GroupBox30, "ReadOnly" );
	ReadOnly->setText( tr( "Read Only" ) );
	if (item->annotation().Type() == 2)
		ReadOnly->setEnabled(false);
	ReadOnly->setChecked(item->annotation().Flag() & 1);
	GroupBox30Layout->addMultiCellWidget( ReadOnly, 0, 0, 0, 1 );
	Required = new QCheckBox( GroupBox30, "ReadOnly" );
	Required->setText( tr( "Required" ) );
	if (item->annotation().Type() == 2)
		Required->setEnabled(false);
	Required->setChecked(item->annotation().Flag() & 2);
	GroupBox30Layout->addMultiCellWidget( Required, 1, 1, 0, 1 );
	NoExport = new QCheckBox( GroupBox30, "NoExport" );
	NoExport->setText( tr( "Do Not Export Value" ) );
	if (item->annotation().Type() == 2)
		NoExport->setEnabled(false);
	NoExport->setChecked(item->annotation().Flag() & 4);
	GroupBox30Layout->addMultiCellWidget( NoExport, 2, 2, 0, 1 );
	TextLabel90 = new QLabel( GroupBox30, "TextLabel9" );
	TextLabel90->setText( tr( "Visibility:" ) );
	GroupBox30Layout->addWidget( TextLabel90, 3, 0 );
	Visib = new QComboBox( true, GroupBox30, "Visib" );
	/* PFJ - 28/02/04 - Altered to the QString/size_t/for style */
	QString visible[] = {tr("Visible"), tr("Hidden"), tr("No Print"),
	                     tr("No View")};
	size_t visibleArray = sizeof(visible) / sizeof(*visible);
	for (uint propogate = 0; propogate < visibleArray; ++propogate)
		Visib->insertItem(visible[propogate]);
	Visib->setEditable(false);
	Visib->setCurrentItem(item->annotation().Vis());
	GroupBox30Layout->addWidget( Visib, 3, 1 );
	Layout10->addWidget( GroupBox30 );
	tabLayout->addLayout( Layout10 );
	TabWidget2->insertTab( tab, tr( "Appearance" ) );

	tab_3 = new QWidget( TabWidget2, "tab_3" );
	tabLayout_3 = new Q3VBoxLayout( tab_3, 11, 6, "tabLayout_3");
	FramOp = new Q3WidgetStack(tab_3);
	Frame4a = new Q3GroupBox( tab_3, "GroupBox1" );
	Frame4a->setTitle("");
	Frame4a->setFrameShape( Q3GroupBox::NoFrame );
	Frame4a->setColumnLayout(0, Qt::Vertical );
	Frame4a->layout()->setSpacing( 0 );
	Frame4a->layout()->setMargin( 0 );
	Frame4aLayout = new Q3GridLayout( Frame4a->layout());
	GroupBox40a = new Q3GroupBox( Frame4a, "GroupBox40" );
	GroupBox40a->setTitle( tr( "Text" ) );
	GroupBox40a->setColumnLayout(0, Qt::Vertical );
	GroupBox40a->layout()->setSpacing( 5 );
	GroupBox40a->layout()->setMargin( 10 );
	GroupBox40aLayout = new Q3GridLayout( GroupBox40a->layout() );
	GroupBox40aLayout->setAlignment( Qt::AlignTop );
	CheckBox30 = new QLabel( GroupBox40a, "CheckBox3" );
	CheckBox30->setText( tr( "Text for Button Down" ) );
	GroupBox40aLayout->addMultiCellWidget( CheckBox30, 0, 0, 0, 1 );
	CheckBox40 = new QLabel( GroupBox40a, "CheckBox4" );
	CheckBox40->setText( tr( "Text for Roll Over" ) );
	GroupBox40aLayout->addMultiCellWidget( CheckBox40, 1, 1, 0, 1 );
	DownT = new QLineEdit( GroupBox40a, "DownT" );
	DownT->setText(item->annotation().Down());
	GroupBox40aLayout->addWidget( DownT, 0, 2 );
	TextO = new QLineEdit( GroupBox40a, "TextO" );
	TextO->setText(item->annotation().RollOver());
	GroupBox40aLayout->addWidget( TextO, 1, 2 );
	Frame4aLayout->addMultiCellWidget( GroupBox40a, 0, 0, 0, 1 );

	OptIcons = new Q3GroupBox( Frame4a, "OptIcons" );
	OptIcons->setTitle( tr( "Icons" ) );
	OptIcons->setColumnLayout(0, Qt::Vertical );
	OptIcons->layout()->setSpacing( 6 );
	OptIcons->layout()->setMargin( 11 );
	OptIconsLayout = new Q3VBoxLayout( OptIcons->layout() );
	OptIconsLayout->setAlignment( Qt::AlignTop );
	UseIcons = new QCheckBox(OptIcons, "UIc");
	UseIcons->setText( tr("Use Icons"));
	UseIcons->setChecked(item->annotation().UseIcons());
	OptIconsLayout->addWidget(UseIcons);
	Layout17 = new Q3HBoxLayout( 0, 0, 6, "Layout17");

	Layout14 = new Q3GridLayout( 0, 0, 6, "Layout14");
	IconN = new QPushButton( OptIcons, "IconN" );
	IconN->setText( tr( "Normal" ) );
	Layout14->addMultiCellWidget( IconN, 0, 0, 0, 2);
	NiconPrev = new QLabel( OptIcons, "NiconPrev" );
	NiconPrev->setMinimumSize( QSize( 25, 25 ) );
	NiconPrev->setMaximumSize( QSize( 25, 25 ) );
	NiconPrev->setFrameShape( QLabel::Panel );
	NiconPrev->setFrameShadow( QLabel::Raised );
	NiconPrev->setScaledContents( true );
	Layout14->addWidget( NiconPrev, 1, 1 );
	IconNR = new QPushButton( OptIcons, "IconNr" );
	IconNR->setText( tr( "Remove" ) );
	Layout14->addMultiCellWidget( IconNR, 2, 2, 0, 2);
	Layout17->addLayout( Layout14 );

	Layout15 = new Q3GridLayout( 0, 0, 6, "Layout15");
	IconP = new QPushButton( OptIcons, "IconP" );
	IconP->setText( tr( "Pressed" ) );
	Layout15->addMultiCellWidget( IconP, 0, 0, 0, 2 );
	PiconPrev = new QLabel( OptIcons, "PiconPrev" );
	PiconPrev->setMinimumSize( QSize( 25, 25 ) );
	PiconPrev->setMaximumSize( QSize( 25, 25 ) );
	PiconPrev->setFrameShape( QLabel::Panel );
	PiconPrev->setFrameShadow( QLabel::Raised );
	PiconPrev->setScaledContents( true );
	Layout15->addWidget( PiconPrev, 1, 1 );
	IconPR = new QPushButton( OptIcons, "Iconrr" );
	IconPR->setText( tr( "Remove" ) );
	Layout15->addMultiCellWidget( IconPR, 2, 2, 0, 2);
	Layout17->addLayout( Layout15 );

	Layout16 = new Q3GridLayout( 0, 0, 6, "Layout16");
	IconR = new QPushButton( OptIcons, "IconR" );
	IconR->setText( tr( "Roll Over" ) );
	Layout16->addMultiCellWidget( IconR, 0, 0, 0, 2 );
	RiconPrev = new QLabel( OptIcons, "RiconPrev" );
	RiconPrev->setMinimumSize( QSize( 25, 25 ) );
	RiconPrev->setMaximumSize( QSize( 25, 25 ) );
	RiconPrev->setFrameShape( QLabel::Panel );
	RiconPrev->setFrameShadow( QLabel::Raised );
	RiconPrev->setScaledContents( true );
	Layout16->addWidget( RiconPrev, 1, 1 );
	IconRR = new QPushButton( OptIcons, "IconrNr" );
	IconRR->setText( tr( "Remove" ) );
	Layout16->addMultiCellWidget( IconRR, 2, 2, 0, 2);
	Layout17->addLayout( Layout16 );
	OptIconsLayout->addLayout( Layout17 );

	Layout18 = new Q3HBoxLayout( 0, 0, 6, "Layout18");
	PlaceIcon = new QPushButton( OptIcons, "PlaceIcon" );
	PlaceIcon->setText( tr( "Icon Placement..." ) );
	Layout18->addWidget( PlaceIcon );
	QSpacerItem* spacer_2x = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
	Layout18->addItem( spacer_2x );
	OptIconsLayout->addLayout( Layout18 );
	IconNR->setEnabled(false);
	IconPR->setEnabled(false);
	IconRR->setEnabled(false);
	if (!UseIcons->isChecked())
	{
		IconN->setEnabled(false);
		IconP->setEnabled(false);
		IconR->setEnabled(false);
		NiconPrev->setEnabled(false);
		PiconPrev->setEnabled(false);
		RiconPrev->setEnabled(false);
		PlaceIcon->setEnabled(false);
	}
	else
	{
		QPixmap pmI1;
		ScImage im;
		CMSettings cms(view->Doc, "", 0);
		if (!item->Pfile.isEmpty())
		{
			im.LoadPicture(item->Pfile, cms, false, false, ScImage::RGBData, 72);
			pmI1.convertFromImage(im.qImage());
			NiconPrev->setPixmap(pmI1);
			IconNR->setEnabled(true);
		}
		if (!item->Pfile2.isEmpty())
		{
			im.LoadPicture(item->Pfile2, cms, false, false, ScImage::RGBData, 72);
			pmI1.convertFromImage(im.qImage());
			PiconPrev->setPixmap(pmI1);
			IconPR->setEnabled(true);
		}
		if (!item->Pfile3.isEmpty())
		{
			im.LoadPicture(item->Pfile3, cms, false, false, ScImage::RGBData, 72);
			pmI1.convertFromImage(im.qImage());
			RiconPrev->setPixmap(pmI1);
			IconRR->setEnabled(true);
		}
	}
	Frame4aLayout->addWidget( OptIcons, 1, 0 );

	GroupBox30a = new Q3GroupBox( Frame4a, "GroupBox3" );
	GroupBox30a->setTitle( tr( "Highlight" ) );
	GroupBox30a->setColumnLayout(0, Qt::Vertical );
	GroupBox30a->layout()->setSpacing( 5 );
	GroupBox30a->layout()->setMargin( 10 );
	GroupBox30aLayout = new Q3GridLayout( GroupBox30a->layout() );
	GroupBox30aLayout->setAlignment( Qt::AlignTop );
	ComboBox7_2 = new QComboBox( true, GroupBox30a, "ComboBox7_2" );
	// PFJ - 28/02/04 - Altered to QString/size_t/for style
	QString combo[] = {tr("None", "highlight"), tr("Invert"), tr("Outlined"), tr("Push")};
	size_t comboArray = sizeof(combo) / sizeof(*combo);
	for (uint propogate = 0; propogate < comboArray; ++propogate)
		ComboBox7_2->insertItem(combo[propogate]);
	ComboBox7_2->setEditable(false);
	ComboBox7_2->setCurrentItem(item->annotation().Feed());
	GroupBox30aLayout->addWidget( ComboBox7_2, 0, 0 );
	Frame4aLayout->addWidget( GroupBox30a, 1, 1 );
	FramOp->addWidget( Frame4a , 2);

	OptTextFeld = new Q3GroupBox( tab_3, "OptTextFeld" );
	OptTextFeld->setTitle( "" );
	OptTextFeld->setColumnLayout(0, Qt::Vertical );
	OptTextFeld->layout()->setSpacing( 6 );
	OptTextFeld->layout()->setMargin( 11 );
	OptTextFeldLayout = new Q3VBoxLayout( OptTextFeld->layout() );
	OptTextFeldLayout->setAlignment( Qt::AlignTop );
	MultiL = new QCheckBox( OptTextFeld, "MultiL" );
	MultiL->setText( tr( "Multi-Line" ) );
	MultiL->setChecked(item->annotation().Flag() & 4096);
	OptTextFeldLayout->addWidget( MultiL );
	Passwd = new QCheckBox( OptTextFeld, "Passwd" );
	Passwd->setText( tr( "Password" ) );
	Passwd->setChecked(item->annotation().Flag() & 8192);
	OptTextFeldLayout->addWidget( Passwd );
	Layout8 = new Q3HBoxLayout( 0, 0, 5, "Layout8");
	Limit = new QCheckBox( OptTextFeld, "Limit" );
	Limit->setText( tr( "Limit of" ) );
	Layout8->addWidget( Limit );
	MaxChars = new QSpinBox( OptTextFeld, "MaxChars" );
	MaxChars->setMinValue(0);
	MaxChars->setMaxValue(32768);
	bool setter = item->annotation().MaxChar() != -1 ? true : false;
	MaxChars->setValue(setter == true ? item->annotation().MaxChar() : 0);
	Limit->setChecked(setter);
	MaxChars->setEnabled(setter);
	Layout8->addWidget( MaxChars );
	TextLabel2_2 = new QLabel( OptTextFeld, "TextLabel2_2" );
	TextLabel2_2->setText( tr( "Characters" ) );
	Layout8->addWidget( TextLabel2_2 );
	QSpacerItem* spacer_2 = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
	Layout8->addItem( spacer_2 );
	OptTextFeldLayout->addLayout( Layout8 );
	NoScroll = new QCheckBox( OptTextFeld, "ncs" );
	NoScroll->setText( tr( "Do Not Scroll" ) );
	NoScroll->setChecked(item->annotation().Flag() & 8388608);
	OptTextFeldLayout->addWidget( NoScroll );
	NoSpell = new QCheckBox( OptTextFeld, "nsp" );
	NoSpell->setText( tr( "Do Not Spell Check" ) );
	NoSpell->setChecked(item->annotation().Flag() & 4194304);
	OptTextFeldLayout->addWidget( NoSpell );
	FramOp->addWidget( OptTextFeld , 3);

	OptCheck = new Q3GroupBox( tab_3, "OptCheck" );
	OptCheck->setTitle( "" );
	OptCheck->setColumnLayout(0, Qt::Vertical );
	OptCheck->layout()->setSpacing( 6 );
	OptCheck->layout()->setMargin( 11 );
	OptCheckLayout = new Q3VBoxLayout( OptCheck->layout() );
	OptCheckLayout->setAlignment( Qt::AlignTop );
	ChkLayout = new Q3HBoxLayout( 0, 0, 5, "ChkLayout");
	CText1 = new QLabel( OptCheck, "CText1" );
	CText1->setText( tr( "Check Style:" ) );
	ChkLayout->addWidget( CText1 );
	ChkStil = new QComboBox( true, OptCheck, "ChkStil" );
	QString tmp_chkstil2[]={ tr("Check"), tr("Cross"), tr("Diamond"), tr("Circle"), tr("Star"), tr("Square")};
	size_t array_chk2 = sizeof(tmp_chkstil2) / sizeof(*tmp_chkstil2);
	/* PFJ - 28/02/04 - Altered from uint to int and altered var name */
	for (uint propogate = 0; propogate < array_chk2; ++propogate)
		ChkStil->insertItem(tmp_chkstil2[propogate]);

	ChkStil->setEditable(false);
	ChkStil->setCurrentItem(item->annotation().ChkStil());
	ChkLayout->addWidget( ChkStil );
	QSpacerItem* spacerC = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
	ChkLayout->addItem( spacerC );
	OptCheckLayout->addLayout( ChkLayout );

	isChkd = new QCheckBox( OptCheck, "isChkd" );
	isChkd->setText( tr( "Default is Checked" ) );
	isChkd->setChecked(item->annotation().IsChk());
	OptCheckLayout->addWidget( isChkd );
	FramOp->addWidget( OptCheck, 4);

	OptCombo = new Q3GroupBox( tab_3, "OptCombo" );
	OptCombo->setTitle( "" );
	OptCombo->setColumnLayout(0, Qt::Vertical );
	OptCombo->layout()->setSpacing( 6 );
	OptCombo->layout()->setMargin( 11 );
	OptComboLayout = new Q3VBoxLayout( OptCombo->layout() );
	OptComboLayout->setAlignment( Qt::AlignTop );
	CanEdit = new QCheckBox( OptCombo, "isEdit" );
	CanEdit->setText( tr( "Editable" ) );
	CanEdit->setChecked(item->annotation().Flag() & 262144);
	OptComboLayout->addWidget( CanEdit );
	FramOp->addWidget( OptCombo, 5);

	tabLayout_3->addWidget( FramOp );

	TabWidget2->insertTab( tab_3, tr( "Options" ) );

	tab_2 = new QWidget( TabWidget2, "tab_2" );
	tabLayout_2 = new Q3VBoxLayout( tab_2, 11, 6, "tabLayout_2");

	Layout20 = new Q3HBoxLayout( 0, 0, 5, "Layout2");

	TextLabel70 = new QLabel( tab_2, "TextLabel7" );
	TextLabel70->setText( tr( "Type:" ) );
	Layout20->addWidget( TextLabel70 );

	ActionCombo = new QComboBox( true, tab_2, "ActTyp" );
	QString tmp_actcom[] = {tr("None", "action"), tr("JavaScript"), tr("Go To"),
	                        tr("Submit Form"), tr("Reset Form"), tr("Import Data")};
	size_t array_act = sizeof(tmp_actcom) / sizeof(*tmp_actcom);
	/* PFJ - 28/02/04 - Altered from uint to int and var name */
	for (uint propogate = 0; propogate < array_act; ++propogate)
		ActionCombo->insertItem(tmp_actcom[propogate]);
	ActionCombo->setEditable(false);
	int tmpac = item->annotation().ActionType();
	if (item->annotation().ActionType() < 0)
		tmpac = 1;
	ActionCombo->setCurrentItem(tmpac == 7 ? 2 : tmpac);

	Layout20->addWidget( ActionCombo );
	tabLayout_2->addLayout( Layout20 );

	Fram2 = new Q3WidgetStack(tab_2);
	tabLayout_2->addWidget( Fram2 );

	Frame4 = new Q3Frame( tab_2, "Frame4" );
	Frame4->setFrameShape( Q3Frame::NoFrame );
	Frame4->setFrameShadow( Q3Frame::Raised );
	Fram2->addWidget( Frame4 , 1);

	Frame3 = new Q3Frame( tab_2, "Frame3" );
	Frame3->setFrameShape( Q3Frame::Box );
	Frame3->setFrameShadow( Q3Frame::Sunken );
	Frame3Layout = new Q3VBoxLayout( Frame3, 11, 6, "Frame3Layout");
	Layout7 = new Q3HBoxLayout( 0, 0, 6, "Layout7");
	AcText1 = new QLabel( Frame3, "AcText1" );
	AcText1->setText( tr( "Event:" ) );
	Layout7->addWidget( AcText1 );
	SelAction = new QComboBox( true, Frame3, "AcCombo" );
	QString tmp_selact[]={tr("Mouse Up"), tr("Mouse Down"), tr("Mouse Enter"),
	                      tr("Mouse Exit"), tr("On Focus"), tr("On Blur")};
	size_t array_sel = sizeof(tmp_selact) / sizeof(*tmp_selact);
	/* PFJ - 28/02/04 - Altered from uint to int and var name */
	for (uint propogate = 0; propogate < array_sel; ++propogate)
		SelAction->insertItem(tmp_selact[propogate]);
	SelAction->setEditable(false);
	Layout7->addWidget( SelAction );
	QSpacerItem* spacerac = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
	Layout7->addItem( spacerac );
	Frame3Layout->addLayout( Layout7 );
	AcText2 = new QLabel( Frame3, "AcText2" );
	AcText2->setText( tr( "Script:" ) );
	Frame3Layout->addWidget( AcText2 );
	Layout71 = new Q3HBoxLayout( 0, 0, 6, "Layout7");
	EditJava = new Q3TextEdit( Frame3, "EditAction" );
	if ((item->annotation().ActionType() == 1) || (item->annotation().AAact()))
		EditJava->setText(item->annotation().Action());
	ScrEdited = 0;
	SelAction->setCurrentItem(0);
	EditJava->setReadOnly(true);
	EditJava->setBackgroundMode(Qt::PaletteBackground);
	EditJava->setPaper(EditJava->paletteBackgroundColor());
	Layout71->addWidget( EditJava );
	EditJ = new QPushButton( Frame3, "EditJ" );
	EditJ->setText( tr( "Edit..." ) );
	Layout71->addWidget( EditJ );
	Frame3Layout->addLayout( Layout71 );
	Fram2->addWidget( Frame3 , 2);

	Frame3b = new Q3Frame( tab_2, "Frame3b" );
	Frame3b->setFrameShape( Q3Frame::Box );
	Frame3b->setFrameShadow( Q3Frame::Sunken );
	Frame3bLayout = new Q3VBoxLayout( Frame3b, 11, 6, "Frame3Layout");
	SubText1 = new QLabel( Frame3b, "SubText1" );
	SubText1->setText( tr( "Submit to URL:" ) );
	Frame3bLayout->addWidget( SubText1 );
	SubURL = new QLineEdit( Frame3b, "SubURL" );
	Frame3bLayout->addWidget( SubURL );
	if (item->annotation().ActionType() == 3)
		SubURL->setText(item->annotation().Action());
	SubAsHtml = new QCheckBox( Frame3b, "UseCurr" );
	SubAsHtml->setChecked(item->annotation().HTML());
	SubAsHtml->setText( tr( "Submit Data as HTML" ) );
	Frame3bLayout->addWidget( SubAsHtml );
	QSpacerItem* spacerSu = new QSpacerItem( 20, 20, QSizePolicy::Minimum, QSizePolicy::Expanding );
	Frame3bLayout->addItem( spacerSu);
	Fram2->addWidget( Frame3b , 4);

	Frame3c = new Q3Frame( tab_2, "Frame3b" );
	Frame3c->setFrameShape( Q3Frame::Box );
	Frame3c->setFrameShadow( Q3Frame::Sunken );
	Frame3cLayout = new Q3VBoxLayout( Frame3c, 11, 6, "Frame3Layout");
	SubText1a = new QLabel( Frame3c, "SubText1" );
	SubText1a->setText( tr( "Import Data from:" ) );
	Frame3cLayout->addWidget( SubText1a );
	SubURLa = new QLineEdit( Frame3c, "SubURL" );
	Frame3cLayout->addWidget( SubURLa );
	if (item->annotation().ActionType() == 5)
		SubURLa->setText(item->annotation().Action());
	QSpacerItem* spacerSua = new QSpacerItem( 20, 20, QSizePolicy::Minimum, QSizePolicy::Expanding );
	Frame3cLayout->addItem( spacerSua);
	Fram2->addWidget( Frame3c , 5);

	GroupBox11 = new Q3GroupBox( tab_2, "GroupBox11" );
	GroupBox11->setTitle( tr( "Destination" ) );
	GroupBox11->setColumnLayout(0, Qt::Vertical );
	GroupBox11->layout()->setSpacing( 0 );
	GroupBox11->layout()->setMargin( 0 );
	GroupBox11Layout = new Q3GridLayout( GroupBox11->layout() );
	GroupBox11Layout->setAlignment( Qt::AlignTop );
	GroupBox11Layout->setSpacing( 6 );
	GroupBox11Layout->setMargin( 11 );
	LExtern = new QCheckBox(GroupBox11, "Extern");
	LExtern->setText( tr("To File:"));
	GroupBox11Layout->addWidget( LExtern, 0, 0 );
	Destfile = new QLineEdit(GroupBox11, "File");
	Destfile->setText(item->annotation().Extern());
	Destfile->setReadOnly(true);
	GroupBox11Layout->addWidget( Destfile, 0, 1 );
	ChFile = new QPushButton(GroupBox11, "Change");
	ChFile->setText( tr("Change..."));
	GroupBox11Layout->addWidget( ChFile, 0, 2 );
	TextLabel31 = new QLabel( GroupBox11, "TextLabel3" );
	TextLabel31->setText( tr( "Page:" ) );
	GroupBox11Layout->addWidget( TextLabel31, 1, 0 );
	SpinBox11 = new QSpinBox( GroupBox11, "SpinBox1" );
	SpinBox11->setMinValue(1);
	SpinBox11->setMaxValue(item->annotation().ActionType() == 7 ? 1000 : Seite);
	SpinBox11->setValue(qMin(item->annotation().Ziel()+1, Seite));
	GroupBox11Layout->addWidget( SpinBox11, 1, 1 );
	if (item->annotation().ActionType() == 7)
		Pg1 = new Navigator( GroupBox11, 100, item->annotation().Ziel()+1, view, item->annotation().Extern());
	else
		Pg1 = new Navigator( GroupBox11, 100, qMin(item->annotation().Ziel(), Seite-1), view);
	Pg1->setMinimumSize(QSize(Pg1->pmx.width(), Pg1->pmx.height()));
	GroupBox11Layout->addMultiCellWidget(Pg1, 1, 3, 2, 2);
	TextLabel41 = new QLabel( GroupBox11, "TextLabel4" );
	TextLabel41->setText( tr( "X-Pos:" ) );
	GroupBox11Layout->addWidget( TextLabel41, 2, 0 );
	SpinBox21 = new QSpinBox( GroupBox11, "SpinBox2" );
	SpinBox21->setSuffix( tr( " pt" ) );
	SpinBox21->setMaxValue(Breite);
	SpinBox21->setValue(tl[0].toInt());
	GroupBox11Layout->addWidget( SpinBox21, 2, 1 );
	TextLabel51 = new QLabel( GroupBox11, "TextLabel5" );
	TextLabel51->setText( tr( "Y-Pos:" ) );
	GroupBox11Layout->addWidget( TextLabel51, 3, 0 );
	SpinBox31 = new QSpinBox( GroupBox11, "SpinBox3" );
	SpinBox31->setMaxValue(Hoehe);
	SpinBox31->setSuffix( tr( " pt" ) );
	SpinBox31->setValue(Hoehe-tl[1].toInt());
	GroupBox11Layout->addWidget( SpinBox31, 3, 1 );
	Fram2->addWidget(GroupBox11, 3);
	TabWidget2->insertTab( tab_2, tr( "Action" ) );
	if (item->annotation().ActionType() != 7)
	{
		Destfile->setEnabled(false);
		ChFile->setEnabled(false);
		LExtern->setChecked(false);
	}
	else
	{
		LExtern->setChecked(true);
		if (!Destfile->text().isEmpty())
		{
			Breite = Pg1->Breite;
			Hoehe = Pg1->Hoehe;
		}
		else
		{
			Destfile->setEnabled(false);
			ChFile->setEnabled(false);
			LExtern->setChecked(false);
		}
	}

	tab4 = new QWidget( TabWidget2, "privateWidget" );
	Layout = new Q3VBoxLayout( tab4, 11, 6, "Layout");
	FLayout = new Q3HBoxLayout( 0, 0, 6, "FLayout");
	TextForm1 = new QLabel( tab4, "TextForm1" );
	TextForm1->setText( tr( "Field is formatted as:" ) );
	FLayout->addWidget( TextForm1 );
	TxFormat = new QComboBox( true, tab4, "TxFormat" );
	QString tmp_txf[]={ tr("Plain"), tr("Number"), tr("Percentage"), tr("Date"), tr("Time"), tr("Custom")};
	size_t array_txf = sizeof(tmp_txf) / sizeof(*tmp_txf);
	for (uint a = 0; a < array_txf; ++a)
		TxFormat->insertItem(tmp_txf[a]);
	TxFormat->setEditable(false);
	TxFormat->setCurrentItem(item->annotation().Format());
	FLayout->addWidget( TxFormat );
	QSpacerItem* spacer_3 = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
	FLayout->addItem( spacer_3 );
	Layout->addLayout( FLayout );
	FoFram = new Q3WidgetStack(tab4);

	FoFrameNone = new Q3Frame( tab4, "Frame7" );
	FoFrameNone->setFrameShape( Q3Frame::NoFrame );
	FoFrameNone->setFrameShadow( Q3Frame::Plain );
	FoFram->addWidget(FoFrameNone, 0);

	NumbGroup = new Q3GroupBox( tab4, "NumbGroup" );
	NumbGroup->setTitle( tr( "Number Format" ) );
	NumbGroup->setColumnLayout(0, Qt::Vertical );
	NumbGroup->layout()->setSpacing( 6 );
	NumbGroup->layout()->setMargin( 11 );
	NumbGroupLayout = new Q3VBoxLayout( NumbGroup->layout() );
	NumbGroupLayout->setAlignment( Qt::AlignTop );
	LayoutFN1 = new Q3HBoxLayout( 0, 0, 6, "LayoutFN1");
	TextNu1 = new QLabel( NumbGroup, "TextNu1" );
	TextNu1->setText( tr( "Decimals:" ) );
	LayoutFN1->addWidget( TextNu1 );
	Decim = new QSpinBox( NumbGroup, "Decim" );
	Decim->setMinValue(0);
	Decim->setMaxValue(12);
	Decim->setValue(0);
	LayoutFN1->addWidget( Decim );
	QSpacerItem* spacer_4 = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
	LayoutFN1->addItem( spacer_4 );
	NumbGroupLayout->addLayout( LayoutFN1 );
	LayoutFN2 = new Q3HBoxLayout( 0, 0, 6, "LayoutFN2");
	UseCurr = new QCheckBox( NumbGroup, "UseCurr" );
	UseCurr->setText( tr( "Use Currency Symbol" ) );
	LayoutFN2->addWidget( UseCurr );
	CurSym = new QLineEdit( NumbGroup, "CurSym" );
	LayoutFN2->addWidget( CurSym );
	CurSym->setEnabled(false);
	QSpacerItem* spacer_5 = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
	LayoutFN2->addItem( spacer_5 );
	NumbGroupLayout->addLayout( LayoutFN2 );
	PreCurr = new QCheckBox( NumbGroup, "PreCurr" );
	PreCurr->setText( tr( "Prepend Currency Symbol" ) );
	PreCurr->setEnabled(false);
	NumbGroupLayout->addWidget( PreCurr );
	NumGroup2 = new Q3ButtonGroup( NumbGroup, "NumGroup2" );
	NumGroup2->setTitle( tr( "Formatting" ) );
	NumGroup2->setColumnLayout(0, Qt::Vertical );
	NumGroup2->layout()->setSpacing( 6 );
	NumGroup2->layout()->setMargin( 11 );
	NumGroup2Layout = new Q3GridLayout( NumGroup2->layout() );
	NumGroup2Layout->setAlignment( Qt::AlignTop );
	Format0 = new QRadioButton( NumGroup2, "Format0" );
	Format0->setText("9,999.99");
	Format0->setChecked( true );
	FormNum = 0;
	NumGroup2Layout->addWidget( Format0, 0, 0 );
	Format1 = new QRadioButton( NumGroup2, "Format1" );
	Format1->setText("9999.99");
	NumGroup2Layout->addWidget( Format1, 1, 0 );
	Format2 = new QRadioButton( NumGroup2, "Format2" );
	Format2->setText("9.999,99");
	NumGroup2Layout->addWidget( Format2, 0, 1 );
	Format3 = new QRadioButton( NumGroup2, "Format3" );
	Format3->setText("9999,99");
	NumGroup2Layout->addWidget( Format3, 1, 1 );
	NumbGroupLayout->addWidget( NumGroup2 );
	FoFram->addWidget(NumbGroup, 1);

	PercGroup = new Q3GroupBox( tab4, "NumbGroup" );
	PercGroup->setTitle( tr( "Percent Format" ) );
	PercGroup->setColumnLayout(0, Qt::Vertical );
	PercGroup->layout()->setSpacing( 6 );
	PercGroup->layout()->setMargin( 11 );
	PercGroupLayout = new Q3VBoxLayout( PercGroup->layout() );
	PercGroupLayout->setAlignment( Qt::AlignTop );
	LayoutFN1a = new Q3HBoxLayout( 0, 0, 6, "LayoutFN1");
	TextNu1a = new QLabel( PercGroup, "TextNu1" );
	TextNu1a->setText( tr( "Decimals:" ) );
	LayoutFN1a->addWidget( TextNu1a );
	Decim2 = new QSpinBox( PercGroup, "Decim2" );
	Decim2->setMinValue(0);
	Decim2->setMaxValue(12);
	Decim2->setValue(0);
	LayoutFN1a->addWidget( Decim2 );
	QSpacerItem* spacer_4a = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
	LayoutFN1a->addItem( spacer_4a );
	PercGroupLayout->addLayout( LayoutFN1a );
	NumGroup2a = new Q3ButtonGroup( PercGroup, "NumGroup2" );
	NumGroup2a->setTitle( tr( "Formatting" ) );
	NumGroup2a->setColumnLayout(0, Qt::Vertical );
	NumGroup2a->layout()->setSpacing( 6 );
	NumGroup2a->layout()->setMargin( 11 );
	NumGroup2aLayout = new Q3GridLayout( NumGroup2a->layout() );
	NumGroup2aLayout->setAlignment( Qt::AlignTop );
	Format0a = new QRadioButton( NumGroup2a, "Format0" );
	Format0a->setText("9,999.99");
	Format0a->setChecked( true );
	FormNum = 0;
	NumGroup2aLayout->addWidget( Format0a, 0, 0 );
	Format1a = new QRadioButton( NumGroup2a, "Format1" );
	Format1a->setText("9999.99");
	NumGroup2aLayout->addWidget( Format1a, 1, 0 );
	Format2a = new QRadioButton( NumGroup2a, "Format2" );
	Format2a->setText("9.999,99");
	NumGroup2aLayout->addWidget( Format2a, 0, 1 );
	Format3a = new QRadioButton( NumGroup2a, "Format3" );
	Format3a->setText("9999,99");
	NumGroup2aLayout->addWidget( Format3a, 1, 1 );
	PercGroupLayout->addWidget( NumGroup2a );
	FoFram->addWidget(PercGroup, 2);

	DateGroup = new Q3GroupBox( tab4, "NumbGroup" );
	DateGroup->setTitle( tr( "Date Format" ) );
	DateGroup->setColumnLayout(0, Qt::Vertical );
	DateGroup->layout()->setSpacing( 6 );
	DateGroup->layout()->setMargin( 11 );
	DateGroupLayout = new Q3VBoxLayout( DateGroup->layout() );
	DateGroupLayout->setAlignment( Qt::AlignTop );
	LayoutFN1c = new Q3HBoxLayout( 0, 0, 6, "LayoutFN1");
	Format0c = new QComboBox( true, DateGroup, "DateTyp" );
	QString tmp_form[] = {"m/d", "m/d/yy", "mm/dd/yy", "mm/yy", "d-mmm", "d-mmm-yy", "dd-mmm-yy", "yy-mm-dd",
	                    "mmm-yy", "mmmm-yy", "mmm d, yyyy", "mmmm d, yyyy", "m/d/yy h:MM tt", "m/d/yy HH:MM"};
	size_t array_form = sizeof(tmp_form) / sizeof(*tmp_form);
	/* PFJ - 28/02/04 - Altered from uint to int and var name */
	for (uint prop = 0; prop < array_form; ++prop)
		Format0c->insertItem(tmp_form[prop]);
	Format0c->setEditable(false);
	LayoutFN1c->addWidget( Format0c );
	QSpacerItem* spacer_4c = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
	LayoutFN1c->addItem( spacer_4c );
	DateGroupLayout->addLayout( LayoutFN1c );
	TextDa1 = new QLabel( DateGroup, "TextNu1" );
	TextDa1->setText( "" );
	DateGroupLayout->addWidget( TextDa1 );
	FoFram->addWidget(DateGroup, 3);

	TimeGroup = new Q3ButtonGroup( tab4, "NumbGroup" );
	TimeGroup->setTitle( tr( "Time Format" ) );
	TimeGroup->setColumnLayout(0, Qt::Vertical );
	TimeGroup->layout()->setSpacing( 6 );
	TimeGroup->layout()->setMargin( 11 );
	TimeGroupLayout = new Q3VBoxLayout( TimeGroup->layout() );
	TimeGroupLayout->setAlignment( Qt::AlignTop );
	Format0b = new QRadioButton( TimeGroup, "Format0" );
	Format0b->setText("HH:MM");
	Format0b->setChecked( true );
	FormNum = 0;
	TimeGroupLayout->addWidget( Format0b);
	Format1b = new QRadioButton( TimeGroup, "Format1" );
	Format1b->setText("h:MM tt");
	TimeGroupLayout->addWidget( Format1b);
	Format2b = new QRadioButton( TimeGroup, "Format2" );
	Format2b->setText("HH:MM:ss");
	TimeGroupLayout->addWidget( Format2b);
	Format3b = new QRadioButton( TimeGroup, "Format3" );
	Format3b->setText("h:MM:ss tt");
	TimeGroupLayout->addWidget( Format3b);
	FoFram->addWidget(TimeGroup, 4);

	GroupCust = new Q3GroupBox( tab4, "GroupCust" );
	GroupCust->setTitle( tr( "Custom Scripts" ) );
	GroupCust->setColumnLayout(0, Qt::Vertical );
	GroupCust->layout()->setSpacing( 6 );
	GroupCust->layout()->setMargin( 11 );
	GroupCustLayout = new Q3VBoxLayout( GroupCust->layout() );
	GroupCustLayout->setAlignment( Qt::AlignTop );
	FLayout3 = new Q3VBoxLayout( 0, 0, 6, "FLayout3");
	FLayout2 = new Q3HBoxLayout( 0, 0, 6, "FLayout2");
	TextForm2 = new QLabel( GroupCust, "TextForm2" );
	TextForm2->setText( tr( "Format:" ) );
	FLayout2->addWidget( TextForm2 );
	EditFormat = new QPushButton( GroupCust, "EditFormat" );
	EditFormat->setText( tr( "Edit..." ) );
	EditFormat->setAutoDefault( false );
	if (item->annotation().Format() != 5)
		EditFormat->setEnabled( false );
	FLayout2->addWidget( EditFormat );
	FLayout3->addLayout( FLayout2 );
	FormatScript = new Q3TextEdit( GroupCust, "FormatScript" );
	if (item->annotation().Format() == 5)
		FormatScript->setText( item->annotation().F_act() );
	FormatScript->setReadOnly(true);
	FormatScript->setBackgroundMode(Qt::PaletteBackground);
	FormatScript->setPaper(FormatScript->paletteBackgroundColor());
	FormatScript->setMaximumSize(QSize(32000,50));
	FLayout3->addWidget( FormatScript );
	GroupCustLayout->addLayout( FLayout3 );
	FLayout5 = new Q3VBoxLayout( 0, 0, 6, "FLayout5");
	FLayout4 = new Q3HBoxLayout( 0, 0, 6, "FLayout4");
	TextForm3 = new QLabel( GroupCust, "TextForm3" );
	TextForm3->setText( tr( "Keystroke:" ) );
	FLayout4->addWidget( TextForm3 );
	EditKeystr = new QPushButton( GroupCust, "EditKeystr" );
	EditKeystr->setText( tr( "Edit..." ) );
	EditKeystr->setAutoDefault( false );
	if (item->annotation().Format() != 5)
		EditKeystr->setEnabled( false );
	FLayout4->addWidget( EditKeystr );
	FLayout5->addLayout( FLayout4 );
	KeyScript = new Q3TextEdit( GroupCust, "KeyScript" );
	if (item->annotation().Format() == 5)
		KeyScript->setText( item->annotation().K_act() );
	KeyScript->setReadOnly(true);
	KeyScript->setBackgroundMode(Qt::PaletteBackground);
	KeyScript->setPaper(KeyScript->paletteBackgroundColor());
	KeyScript->setMaximumSize(QSize(32000,50));
	FLayout5->addWidget( KeyScript );
	GroupCustLayout->addLayout( FLayout5 );
	FoFram->addWidget(GroupCust, 5);

	DecodeNum();

	Layout->addWidget( FoFram );
	TabWidget2->insertTab( tab4, tr( "Format" ) );
	TabWidget2->setTabEnabled(tab4, false);

	tab_4 = new QWidget( TabWidget2, "tab_4" );
	tabLayout_4 = new Q3VBoxLayout( tab_4, 11, 6, "tabLayout_4");

	ValidateGroup = new Q3ButtonGroup( tab_4, "ValidateGroup" );
	ValidateGroup->setTitle( "" );
	ValidateGroup->setColumnLayout(0, Qt::Vertical );
	ValidateGroup->layout()->setSpacing( 6 );
	ValidateGroup->layout()->setMargin( 11 );
	ValidateGroupLayout = new Q3VBoxLayout( ValidateGroup->layout() );
	ValidateGroupLayout->setAlignment( Qt::AlignTop );

	NoValid = new QRadioButton( ValidateGroup, "NoValid" );
	NoValid->setText( tr( "Value is not validated" ) );
	NoValid->setChecked( true );
	ValidateGroupLayout->addWidget( NoValid );

	VLayout1 = new Q3GridLayout( 0, 1, 1, 0, 6, "VLayout1");

	SimpleValid = new QRadioButton( ValidateGroup, "SimpleValid" );
	SimpleValid->setText( tr( "Value must be greater than or equal to:" ) );

	VLayout1->addWidget( SimpleValid, 0, 0 );
	TextVa = new QLabel( ValidateGroup, "TextForm3" );
	TextVa->setText( tr( "and less or equal to:" ) );
	VLayout1->addWidget( TextVa, 1, 0, Qt::AlignRight );

	MinValid = new QLineEdit( ValidateGroup, "MinValid" );

	VLayout1->addWidget( MinValid, 0, 1 );

	MaxValid = new QLineEdit( ValidateGroup, "MaxValid" );

	VLayout1->addWidget( MaxValid, 1, 1 );
	ValidateGroupLayout->addLayout( VLayout1 );

	CustomValid = new QRadioButton( ValidateGroup, "CustomValid" );
	CustomValid->setText( tr( "Custom validate script:" ) );
	ValidateGroupLayout->addWidget( CustomValid );

	VLayout2 = new Q3HBoxLayout( 0, 0, 6, "VLayout2");

	ValidScript = new Q3TextEdit( ValidateGroup, "ValidScript" );
	ValidScript->setMinimumSize( QSize( 0, 50 ) );
	ValidScript->setReadOnly( true );
	ValidScript->setBackgroundMode(Qt::PaletteBackground);
	ValidScript->setPaper(ValidScript->paletteBackgroundColor());
	VLayout2->addWidget( ValidScript );

	EditValScript = new QPushButton( ValidateGroup, "EditValScript" );
	EditValScript->setText( tr( "Edit..." ) );
	EditValScript->setAutoDefault( false );
	VLayout2->addWidget( EditValScript );
	ValidateGroupLayout->addLayout( VLayout2 );
	tabLayout_4->addWidget( ValidateGroup );
	TabWidget2->insertTab( tab_4, tr( "Validate" ) );
	TabWidget2->setTabEnabled(tab_4, false);
	SetVali();
	tab_5 = new QWidget( TabWidget2, "tab_5" );
	tabLayout_5 = new Q3VBoxLayout( tab_5, 11, 6, "tabLayout_5");

	CalcGroup = new Q3ButtonGroup( tab_5, "CalcGroup" );
	CalcGroup->setTitle( "" );
	CalcGroup->setColumnLayout(0, Qt::Vertical );
	CalcGroup->layout()->setSpacing( 6 );
	CalcGroup->layout()->setMargin( 11 );
	CalcGroupLayout = new Q3VBoxLayout( CalcGroup->layout() );
	CalcGroupLayout->setAlignment( Qt::AlignTop );

	NoCalc = new QRadioButton( CalcGroup, "NoCalc" );
	NoCalc->setText( tr( "Value is not calculated" ) );
	NoCalc->setChecked( true );
	CalcGroupLayout->addWidget( NoCalc );

	CLayout1 = new Q3HBoxLayout( 0, 0, 6, "CLayout1");

	SimpleCalc = new QRadioButton( CalcGroup, "SimpleCalc" );
	SimpleCalc->setText( tr( "Value is the" ) );
	CLayout1->addWidget( SimpleCalc );

	CalcArt = new QComboBox( false, CalcGroup, "CalcArt" );
	/* PFJ - 28/02/04 - Altered to QString/size_t/for style */
	QString calc[] = {tr("sum"), tr("product"), tr("average"), tr("minimum"),
	                  tr("maximum")};
	size_t calcArray = sizeof(calc) / sizeof(*calc);
	for (uint prop = 0; prop < calcArray; ++prop)
		CalcArt->insertItem(calc[prop]);
	CLayout1->addWidget( CalcArt );

	TextLabel1_2 = new QLabel( CalcGroup, "TextLabel1_2" );
	TextLabel1_2->setText( tr( "of the following fields:" ) );
	CLayout1->addWidget( TextLabel1_2 );
	CalcGroupLayout->addLayout( CLayout1 );

	CLayout3 = new Q3HBoxLayout( 0, 0, 6, "CLayout1");
	CalcFields = new QLineEdit( CalcGroup, "CalcFields" );
	CLayout3->addWidget( CalcFields );
	SeField = new QPushButton( CalcGroup, "EditCalc" );
	SeField->setText( tr( "Pick..." ) );
	CLayout3->addWidget( SeField );
	CalcGroupLayout->addLayout( CLayout3 );

	CustomCalc = new QRadioButton( CalcGroup, "CustomCalc" );
	CustomCalc->setText( tr( "Custom calculation script:" ) );
	CalcGroupLayout->addWidget( CustomCalc );

	CLayout2 = new Q3HBoxLayout( 0, 0, 6, "CLayout2");

	CalcScript = new Q3TextEdit( CalcGroup, "CalcScript" );
	CalcScript->setMinimumSize( QSize( 0, 50 ) );
	CalcScript->setReadOnly( true );
	CLayout2->addWidget( CalcScript );
	CalcScript->setBackgroundMode(Qt::PaletteBackground);
	CalcScript->setPaper(CalcScript->paletteBackgroundColor());

	EditCalc = new QPushButton( CalcGroup, "EditCalc" );
	EditCalc->setText( tr( "Edit..." ) );
	CLayout2->addWidget( EditCalc );
	CalcGroupLayout->addLayout( CLayout2 );
	tabLayout_5->addWidget( CalcGroup );
	TabWidget2->insertTab( tab_5, tr( "Calculate" ) );
	TabWidget2->setTabEnabled(tab_5, false);
	SetCalc();
	GroupBox10Layout->addWidget( TabWidget2 );
	Fram->addWidget(GroupBox10, 3);

	Frame9 = new Q3Frame( this, "Frame7" );
	Frame9->setFrameShape( Q3Frame::NoFrame );
	Frame9->setFrameShadow( Q3Frame::Plain );
	Fram->addWidget(Frame9, 2);

	SetZiel(item->annotation().Type()-2);
	Layout1_2 = new Q3HBoxLayout;
	Layout1_2->setSpacing( 6 );
	Layout1_2->setMargin( 0 );

	QSpacerItem* spacerr = new QSpacerItem( 20, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
	Layout1_2->addItem( spacerr );
	PushButton1 = new QPushButton( this, "PushButton1" );
	PushButton1->setText( tr( "OK" ) );
	PushButton1->setDefault( true );
	Layout1_2->addWidget( PushButton1 );
	PushButton2 = new QPushButton( this, "PushButton2" );
	PushButton2->setText( tr( "Cancel" ) );
	Layout1_2->addWidget( PushButton2 );
	AnnotLayout->addLayout( Layout1_2 );
	connect(PushButton1, SIGNAL(clicked()), this, SLOT(SetVals()));
	connect(PushButton2, SIGNAL(clicked()), this, SLOT(reject()));
	connect(EditFormat, SIGNAL(clicked()), this, SLOT(editFormatSc()));
	connect(EditKeystr, SIGNAL(clicked()), this, SLOT(editKeySc()));
	connect(EditValScript, SIGNAL(clicked()), this, SLOT(editValidSc()));
	connect(EditCalc, SIGNAL(clicked()), this, SLOT(editCalcSc()));
	connect(EditJ, SIGNAL(clicked()), this, SLOT(editJavaSc()));
	connect(SeField, SIGNAL(clicked()), this, SLOT(SelectFelder()));
	connect(Format0c, SIGNAL(activated(const QString&)), this, SLOT(setDateSample(const QString&)));
	connect(TxFormat, SIGNAL(activated(int)), this, SLOT(SetFoScript(int)));
	connect(ComboBox1, SIGNAL(activated(int)), this, SLOT(SetZiel(int)));
	connect(ActionCombo, SIGNAL(activated(int)), this, SLOT(SetActTyp(int)));
	connect(SelAction, SIGNAL(activated(int)), this, SLOT(SetActScript(int)));
	connect(Pg1, SIGNAL(Coords(double, double)), this, SLOT(SetCo(double, double)));
	connect(SpinBox11, SIGNAL(valueChanged(int)), this, SLOT(SetPg(int)));
	connect(SpinBox21, SIGNAL(valueChanged(int)), this, SLOT(SetCross()));
	connect(SpinBox31, SIGNAL(valueChanged(int)), this, SLOT(SetCross()));
	connect(Limit, SIGNAL(clicked()), this, SLOT(SetLimit()));
	connect(UseCurr, SIGNAL(clicked()), this, SLOT(SetCurr()));
	connect(Format0, SIGNAL(clicked()), this, SLOT(SetFormNum()));
	connect(Format1, SIGNAL(clicked()), this, SLOT(SetFormNum()));
	connect(Format2, SIGNAL(clicked()), this, SLOT(SetFormNum()));
	connect(Format3, SIGNAL(clicked()), this, SLOT(SetFormNum()));
	connect(Format0a, SIGNAL(clicked()), this, SLOT(SetFormNum()));
	connect(Format1a, SIGNAL(clicked()), this, SLOT(SetFormNum()));
	connect(Format2a, SIGNAL(clicked()), this, SLOT(SetFormNum()));
	connect(Format3a, SIGNAL(clicked()), this, SLOT(SetFormNum()));
	connect(Format0b, SIGNAL(clicked()), this, SLOT(SetFormNum()));
	connect(Format1b, SIGNAL(clicked()), this, SLOT(SetFormNum()));
	connect(Format2b, SIGNAL(clicked()), this, SLOT(SetFormNum()));
	connect(Format3b, SIGNAL(clicked()), this, SLOT(SetFormNum()));
	connect(NoValid, SIGNAL(clicked()), this, SLOT(HandleVali()));
	connect(SimpleValid, SIGNAL(clicked()), this, SLOT(HandleVali()));
	connect(CustomValid, SIGNAL(clicked()), this, SLOT(HandleVali()));
	connect(NoCalc, SIGNAL(clicked()), this, SLOT(HandleCalc()));
	connect(SimpleCalc, SIGNAL(clicked()), this, SLOT(HandleCalc()));
	connect(CustomCalc, SIGNAL(clicked()), this, SLOT(HandleCalc()));
	connect(IconN, SIGNAL(clicked()), this, SLOT(GetNIcon()));
	connect(IconNR, SIGNAL(clicked()), this, SLOT(RemoveNIcon()));
	connect(IconP, SIGNAL(clicked()), this, SLOT(GetPIcon()));
	connect(IconPR, SIGNAL(clicked()), this, SLOT(RemovePIcon()));
	connect(IconR, SIGNAL(clicked()), this, SLOT(GetRIcon()));
	connect(IconRR, SIGNAL(clicked()), this, SLOT(RemoveRIcon()));
	connect(UseIcons, SIGNAL(clicked()), this, SLOT(IconsEin()));
	connect(PlaceIcon, SIGNAL(clicked()), this, SLOT(IPlace()));
	connect(ChFile, SIGNAL(clicked()), this, SLOT(GetFile()));
	connect(LExtern, SIGNAL(clicked()), this, SLOT(SetExternL()));
	connect(Name, SIGNAL(Leaved()), this, SLOT(NewName()));
	QToolTip::add(NoSpell, tr( "Flag is ignored for PDF 1.3" ) );
	QToolTip::add(NoScroll, tr( "Flag is ignored for PDF 1.3" ) );
	QToolTip::add(CalcFields, tr( "Enter a comma separated list of fields here" ) );
	QToolTip::add(IconNR, tr("You need at least the Icon for Normal to use Icons for Buttons"));
	SetPg(qMin(SpinBox11->value(), MaxSeite));
	SetCross();
}

Annot::~Annot()
{}

void Annot::NewName()
{
	QString NameNew = Name->text();
	if (NameNew.isEmpty())
	{
		Name->setText(OldName);
		return;
	}
	bool found = false;
	for (uint b = 0; b < view->Doc->Items->count(); ++b)
	{
		if ((NameNew == view->Doc->Items->at(b)->itemName()) && (view->Doc->Items->at(b) != item))
		{
			found = true;
			break;
		}
	}
	if (found)
	{
		Name->setText(OldName);
		Name->setFocus();
	}
}

void Annot::IPlace()
{
	ButtonIcon* dia = new ButtonIcon(this, item);
	if (dia->exec())
	{
		int w = item->pixm.width();
		int h = item->pixm.height();
		double sw = item->width() / w;
		double sh = item->height() / h;
		double sc = qMin(sw, sh);
		if (dia->IcScaleH == 3)
		{
			item->setImageXYScale(1.0, 1.0);
			item->setImageXYOffset((item->width()-w)*dia->IcPlaceX, (item->height()-h)*dia->IcPlaceY);
		}
		else
		{
			if (dia->ScaleH->currentItem() == 0)
			{
				item->setImageXYScale(sc, sc);
				item->setImageXYOffset(((item->width()-w*sc)/sc)/2.0/ sc, ((item->height()-h*sc)/sc)/2.0/sc);
			}
			else
			{
				item->setImageXYScale(sw, sh);
				item->setImageXYOffset(0.0, 0.0);
			}
		}
		item->annotation().setIPlace(dia->Place->currentItem());
		item->annotation().setScaleW(dia->ScaleW->currentItem());
	}
	delete dia;
}

void Annot::RemoveNIcon()
{
	NiconPrev->clear();
	item->Pfile = "";
	item->PicAvail = false;
	IconNR->setEnabled(false);
}

void Annot::RemovePIcon()
{
	PiconPrev->clear();
	item->Pfile2 = "";
	IconPR->setEnabled(false);
}

void Annot::RemoveRIcon()
{
	RiconPrev->clear();
	item->Pfile3 = "";
	IconRR->setEnabled(false);
}

void Annot::IconsEin()
{
	bool setter = !UseIcons->isChecked() ? false : true;
	IconN->setEnabled(setter);
	IconP->setEnabled(setter);
	IconR->setEnabled(setter);

	NiconPrev->setEnabled(setter);
	PiconPrev->setEnabled(setter);
	RiconPrev->setEnabled(setter);
	PlaceIcon->setEnabled(setter);
	IconNR->setEnabled(!item->Pfile.isEmpty() ? true : false);
	IconPR->setEnabled(!item->Pfile2.isEmpty() ? true : false);
	IconRR->setEnabled(!item->Pfile3.isEmpty() ? true : false);
	item->annotation().setUseIcons(UseIcons->isChecked());
}

void Annot::GetNIcon()
{
	QString fileName;
	QString wdir = dirs->get("icon", ".");
	CustomFDialog dia(this, wdir, tr("Open"),
	                  tr("Images (*.tif *.png *.jpg *.xpm);;PostScript (*.eps *.epsi);;All Files (*)"), fdShowPreview | fdExistingFiles);
	if (dia.exec() == QDialog::Accepted)
		fileName = dia.selectedFile();
	else
		return;
	if (!fileName.isEmpty())
	{
		dirs->set("icon", fileName.left(fileName.findRev("/")));
		QPixmap pmI1;
		CMSettings cms(view->Doc, "", 0);
		item->pixm.LoadPicture(fileName, cms, false, false, ScImage::RGBData, 72);
		pmI1.convertFromImage(item->pixm.qImage());
		NiconPrev->setPixmap(pmI1);
		item->Pfile = fileName;
		item->PicAvail = true;
		int w = item->pixm.width();
		int h = item->pixm.height();
		double sw = item->width() / w;
		double sh = item->height() / h;
		double sc = qMin(sw,sh);
		item->setImageXYScale(sc, sc);
		item->setImageXYOffset(((item->width()-(w*sc))/2)/sc, ((item->height()-(h*sc))/2)/sc);
		IconNR->setEnabled(true);
	}
}

void Annot::GetPIcon()
{
	QString fileName;
	QString wdir = dirs->get("icon", ".");
	CustomFDialog dia(this, wdir, tr("Open"),
	                  tr("Images (*.tif *.png *.jpg *.xpm);;PostScript (*.eps *.epsi);;All Files (*)"), fdShowPreview | fdExistingFiles);
	if (dia.exec() == QDialog::Accepted)
		fileName = dia.selectedFile();
	else
		return;
	if (!fileName.isEmpty())
	{
		dirs->set("icon", fileName.left(fileName.findRev("/")));
		QPixmap pmI1;
		ScImage im;
		CMSettings cms(view->Doc, "",0 );
		im.LoadPicture(fileName, cms, false, false, ScImage::RGBData, 72);
		pmI1.convertFromImage(im.qImage());
		PiconPrev->setPixmap(pmI1);
		item->Pfile2 = fileName;
		IconPR->setEnabled(true);
	}
}

void Annot::GetRIcon()
{
	QString fileName;
	QString wdir = dirs->get("icon", ".");
	CustomFDialog dia(this, wdir, tr("Open"),
	                  tr("Images (*.tif *.png *.jpg *.xpm);;PostScript (*.eps *.epsi);;All Files (*)"), fdShowPreview | fdExistingFiles);
	if (dia.exec() == QDialog::Accepted)
		fileName = dia.selectedFile();
	else
		return;
	if (!fileName.isEmpty())
	{
		dirs->set("icon", fileName.left(fileName.findRev("/")));
		QPixmap pmI1;
		ScImage im;
		CMSettings cms(view->Doc, "", 0);
		im.LoadPicture(fileName, cms, false, false, ScImage::RGBData, 72);
		pmI1.convertFromImage(im.qImage());
		RiconPrev->setPixmap(pmI1);
		item->Pfile3 = fileName;
		IconRR->setEnabled(true);
	}
}

void Annot::SelectFelder()
{
	SelectFields* dia = new SelectFields(this, CalcFields->text(), item->itemName(), view->Doc, 3);
	if (dia->exec())
		CalcFields->setText(dia->S_Fields);
	delete dia;
}

void Annot::editKeySc()
{
	Editor* dia = new Editor(this, item->annotation().K_act(), view);
	if (dia->exec())
	{
		item->annotation().setK_act(dia->EditTex->text());
		KeyScript->setText( item->annotation().K_act() );
	}
	delete dia;
}

void Annot::editFormatSc()
{
	Editor* dia = new Editor(this, item->annotation().F_act(), view);
	if (dia->exec())
	{
		item->annotation().setF_act(dia->EditTex->text());
		FormatScript->setText( item->annotation().F_act() );
	}
	delete dia;
}

void Annot::editValidSc()
{
	Editor* dia = new Editor(this, item->annotation().V_act(), view);
	if (dia->exec())
	{
		item->annotation().setV_act(dia->EditTex->text());
		ValidScript->setText( item->annotation().V_act() );
	}
	delete dia;
}

void Annot::editCalcSc()
{
	Editor* dia = new Editor(this, item->annotation().C_act(), view);
	if (dia->exec())
	{
		item->annotation().setC_act(dia->EditTex->text());
		CalcScript->setText( item->annotation().C_act() );
	}
	delete dia;
}

void Annot::editJavaSc()
{
	Editor* dia = new Editor(this, EditJava->text(), view);
	if (dia->exec())
		EditJava->setText(dia->EditTex->text());
	delete dia;
}

void Annot::setDateSample(const QString& ds)
{
	QDateTime dt = QDateTime::currentDateTime();
	QString tmp = "";
	if (ds == "m/d")
		tmp = "M/d";
	if (ds == "m/d/yy")
		tmp = "M/d/yy";
	if (ds == "mm/dd/yy")
		tmp = "MM/dd/yy";
	if (ds == "mm/yy")
		tmp = "MM/yy";
	if (ds == "d-mmm")
		tmp = "d-MMM";
	if (ds == "d-mmm-yy")
		tmp = "d-MMM-yy";
	if (ds == "dd-mmm-yy")
		tmp = "dd-MMM-yy";
	if (ds == "yy-mm-dd")
		tmp = "yy-MM-dd";
	if (ds == "mmm-yy")
		tmp = "MMM-yy";
	if (ds == "mmmm-yy")
		tmp = "MMMM-yy";
	if (ds == "mmm d, yyyy")
		tmp = "MMM d, yyyy";
	if (ds == "mmmm d, yyyy")
		tmp = "MMMM d, yyyy";
	if (ds == "m/d/yy h:MM tt")
		tmp = "M/d/yy h:mm ap";
	if (ds == "m/d/yy HH:MM")
		tmp = "M/d/yy hh:mm";
	TextDa1->setText( tr("Example:")+" "+dt.toString(tmp));
}

void Annot::DecodeVali()
{
	QString pfor = item->annotation().V_act();
	int ss = pfor.find("(");
	QString pfo = pfor.mid(ss+1, pfor.length()-ss-2);
	QStringList pfol;
	pfol = pfol.split(",", pfo);
	MinValid->setText(pfol[1].stripWhiteSpace());
	MaxValid->setText(pfol[3].stripWhiteSpace());
}

void Annot::DecodeCalc()
{
	QString tm = "";
	QString tm2;
	QString pfor = item->annotation().C_act();
	int ss = pfor.findRev("(");
	QString pfo = pfor.mid(ss+1, pfor.length()-ss-3);
	QStringList pfol;
	pfol = pfol.split(",", pfo);
	if (pfol.count() > 1)
	{
		tm2 = pfol[0].stripWhiteSpace();
		tm += tm2.mid(1, tm2.length()-2);
		for (int cfx = 1; cfx < pfol.count(); ++cfx)
		{
			tm2 = pfol[cfx].stripWhiteSpace();
			tm += ", "+tm2.mid(1, tm2.length()-2);
		}
	}
	CalcFields->setText(tm);
	ss = pfor.find("(");
	pfo = pfor.mid(ss+1, pfor.length()-ss-3);
	pfol = pfol.split(",", pfo);
	/* PFJ - 28/02/04 - Let's get rid of lots of ifs.... */
	QString pf[] = {"\"SUM\"", "\"PRD\"", "\"AVG\"", "\"MIN\"", "\"MAX\""};
	size_t pfTest = sizeof(pf) / sizeof(*pf);
	for (uint test = 0; test < pfTest; ++test)
		if (pfol[0] == pf[test])
			CalcArt->setCurrentItem(test);
}

void Annot::DecodeNum()
{
	QString pfor = item->annotation().F_act();
	int ss = pfor.find("(");
	QString pfo = pfor.mid(ss+1, pfor.length()-ss-2);
  QStringList pfol;
  pfol = pfol.split(",", pfo);
	if (item->annotation().Format() == 1)
		{
		Decim->setValue(pfol[0].toInt());
		switch (pfol[1].toInt())
			{
			case 0:
				Format0->setChecked(true);
				FormNum = 0;
				break;
			case 1:
				Format1->setChecked(true);
				FormNum = 1;
				break;
			case 2:
				Format2->setChecked(true);
				FormNum = 2;
				break;
			case 3:
				Format3->setChecked(true);
				FormNum = 3;
				break;
			}
		if (pfol[5] == " true")
			PreCurr->setChecked(true);
		else
			PreCurr->setChecked(false);
		if (pfol[4].length() > 2)
			{
			if (PreCurr->isChecked())
				CurSym->setText(pfol[4].mid(2,pfol[4].length()-4));
			else
				CurSym->setText(pfol[4].mid(3,pfol[4].length()-4));
			}
		else
			CurSym->setText("");
		if (!CurSym->text().isEmpty())
			{
			CurSym->setEnabled(true);
			UseCurr->setEnabled(true);
			UseCurr->setChecked(true);
			PreCurr->setEnabled(true);
			}
		}
	if (item->annotation().Format() == 2)
		{
		Decim2->setValue(pfol[0].toInt());
		switch (pfol[1].toInt())
			{
			case 0:
				Format0a->setChecked(true);
				FormNum = 0;
				break;
			case 1:
				Format1a->setChecked(true);
				FormNum = 1;
				break;
			case 2:
				Format2a->setChecked(true);
				FormNum = 2;
				break;
			case 3:
				Format3a->setChecked(true);
				FormNum = 3;
				break;
			}
		}
	if (item->annotation().Format() == 3)
		{
		Format0c->setCurrentText(pfol[0].remove("\""));
		setDateSample(pfol[0]);
		}
	if (item->annotation().Format() == 4)
		{
		switch (pfol[0].toInt())
			{
			case 0:
				Format0b->setChecked(true);
				FormNum = 0;
				break;
			case 1:
				Format1b->setChecked(true);
				FormNum = 1;
				break;
			case 2:
				Format2b->setChecked(true);
				FormNum = 2;
				break;
			case 3:
				Format3b->setChecked(true);
				FormNum = 3;
				break;
			}
		}
}

void Annot::SetFormNum()
{
	switch (item->annotation().Format())
	{
	case 1:
		if (Format0->isChecked())
			FormNum = 0;
		if (Format1->isChecked())
			FormNum = 1;
		if (Format2->isChecked())
			FormNum = 2;
		if (Format3->isChecked())
			FormNum = 3;
		break;
	case 2:
		if (Format0a->isChecked())
			FormNum = 0;
		if (Format1a->isChecked())
			FormNum = 1;
		if (Format2a->isChecked())
			FormNum = 2;
		if (Format3a->isChecked())
			FormNum = 3;
		break;
	case 4:
		if (Format0b->isChecked())
			FormNum = 0;
		if (Format1b->isChecked())
			FormNum = 1;
		if (Format2b->isChecked())
			FormNum = 2;
		if (Format3b->isChecked())
			FormNum = 3;
		break;
	}
}

void Annot::HandleVali()
{
	bool setter = SimpleValid->isChecked() ? true : false;
	MaxValid->setEnabled(setter);
	MinValid->setEnabled(setter);
	EditValScript->setEnabled(false);
	if (CustomValid->isChecked())
		EditValScript->setEnabled(true);
}

void Annot::SetVali()
{
	MaxValid->setEnabled(false);
	MinValid->setEnabled(false);
	EditValScript->setEnabled(false);
	ValidScript->setEnabled(false);
	if (item->annotation().V_act().isEmpty())
		NoValid->setChecked(true);
	else
	{
		if (item->annotation().V_act().startsWith("AFRange_Validate"))
		{
			MaxValid->setEnabled(true);
			MinValid->setEnabled(true);
			SimpleValid->setChecked(true);
			DecodeVali();
		}
		else
		{
			EditValScript->setEnabled(true);
			CustomValid->setChecked(true);
			ValidScript->setText(item->annotation().V_act());
		}
	}
}

void Annot::HandleCalc()
{
	bool setter = SimpleCalc->isChecked() ? true : false;
	CalcFields->setEnabled(setter);
	CalcArt->setEnabled(setter);
	EditCalc->setEnabled(false);
	SeField->setEnabled(setter);
	if (CustomCalc->isChecked())
		EditCalc->setEnabled(true);
}

void Annot::SetCalc()
{
	CalcFields->setEnabled(false);
	CalcArt->setEnabled(false);
	EditCalc->setEnabled(false);
	SeField->setEnabled(false);
	if (item->annotation().C_act().isEmpty())
		NoCalc->setChecked(true);
	else
	{
		if (item->annotation().C_act().startsWith("AFSimple_Calculate"))
		{
			CalcFields->setEnabled(true);
			CalcArt->setEnabled(true);
			SimpleCalc->setChecked(true);
			SeField->setEnabled(true);
			DecodeCalc();
		}
		else
		{
			EditCalc->setEnabled(true);
			CustomCalc->setChecked(true);
			CalcScript->setText(item->annotation().C_act());
		}
	}
}

void Annot::SetCurr()
{
	bool setter = UseCurr->isChecked() ? true : false;
	CurSym->setEnabled(setter);
	PreCurr->setEnabled(setter);
}

void Annot::SetFoScript(int it)
{
	if (it >= 0 && it <=5)
		FoFram->raiseWidget(it);
	if (it == 1)
		SetCurr();
	if (it == 5)
	{
		EditFormat->setEnabled( true );
		EditKeystr->setEnabled( true );
		KeyScript->setText("");
		FormatScript->setText("");
//		KeyScript->setText( item->annotation().K_act() );
//		FormatScript->setText( item->annotation().F_act() );
	}
	item->annotation().setFormat(it);
}

void Annot::SetCo(double x, double y)
{
	SpinBox21->setValue(static_cast<int>(x*Breite));
	SpinBox31->setValue(static_cast<int>(y*Hoehe));
}

void Annot::SetPg(int v)
{
	disconnect(SpinBox11, SIGNAL(valueChanged(int)), this, SLOT(SetPg(int)));
	if (item->annotation().ActionType() == 7)
	{
		if (!Pg1->SetSeite(v, 100, Destfile->text()))
		{
			SpinBox11->setValue(1);
			Pg1->SetSeite(1, 100, Destfile->text());
		}
		Breite = Pg1->Breite;
		Hoehe = Pg1->Hoehe;
		//		SetCo(0,0);
	}
	else
	{
		Pg1->SetSeite(qMin(v-1, MaxSeite-1), 100);
		SpinBox11->setValue(qMin(v, MaxSeite));
		Breite = OriBreite;
		Hoehe = OriHoehe;
		//		SetCo(0,0);
	}
	SpinBox21->setMaxValue(Breite);
	SpinBox31->setMaxValue(Hoehe);
	connect(SpinBox11, SIGNAL(valueChanged(int)), this, SLOT(SetPg(int)));
}

void Annot::SetCross()
{
	int x,y;
	disconnect(Pg1, SIGNAL(Coords(double, double)), this, SLOT(SetCo(double, double)));
	x = static_cast<int>(static_cast<double>(SpinBox21->value())/static_cast<double>(Breite)*Pg1->pmx.width());
	y = static_cast<int>(static_cast<double>(SpinBox31->value())/static_cast<double>(Hoehe)*Pg1->pmx.height());
	Pg1->drawMark(x, y);
	connect(Pg1, SIGNAL(Coords(double, double)), this, SLOT(SetCo(double, double)));
}

void Annot::SetVals()
{
	QString tmp, tmp2;
	QString Nfo("");
	bool AAct = false;
	item->annotation().setType(ComboBox1->currentItem()+2);
	if (Name->text() != OldName)
	{
		item->setItemName(Name->text());
		item->AutoName = false;
	}
	item->annotation().setToolTip(Tip->text());
	item->annotation().setRollOver(TextO->text());
	item->annotation().setDown(DownT->text());
	item->annotation().setBwid(BorderW->currentItem());
	item->annotation().setBsty(BorderS->currentItem());
	item->annotation().setFeed(ComboBox7_2->currentItem());
	item->annotation().setVis(Visib->currentItem());
	item->annotation().setFont(Schrift->currentItem());
	item->annotation().setFlag(0);
	item->annotation().setIsChk(isChkd->isChecked());
	item->annotation().setChkStil(ChkStil->currentItem());
	item->annotation().setBorderColor(BorderC->currentText());
	if (item->annotation().borderColor() == CommonStrings::tr_NoneColor)
		item->annotation().setBorderColor(CommonStrings::None);
	Limit->isChecked() ? item->annotation().setMaxChar(MaxChars->value()) : item->annotation().setMaxChar(-1);
	if (item->annotation().Type() == 2)
	{
		item->annotation().addToFlag(65536);
		if (item->Pfile.isEmpty())
			item->annotation().setUseIcons(false);
	}
	else
	{
		item->annotation().setUseIcons(false);
		if (ReadOnly->isChecked())
			item->annotation().addToFlag(1);
		if (Required->isChecked())
			item->annotation().addToFlag(2);
		if (NoExport->isChecked())
			item->annotation().addToFlag(4);
	}
	if (item->annotation().Type() == 5)
	{
		item->annotation().addToFlag(131072);
		if (CanEdit->isChecked())
			item->annotation().addToFlag(262144);
	}
	if (item->annotation().Type() == 3)
	{
		if (MultiL->isChecked())
			item->annotation().addToFlag(4096);
		if (Passwd->isChecked())
			item->annotation().addToFlag(8192);
		if (NoSpell->isChecked())
			item->annotation().addToFlag(4194304);
		if (NoScroll->isChecked())
			item->annotation().addToFlag(8388608);
	}
	if ((item->annotation().Type() == 3) || (item->annotation().Type() == 5))
	{
		if (NoValid->isChecked())
			item->annotation().setV_act("");
		if (SimpleValid->isChecked())
			item->annotation().setV_act("AFRange_Validate(true, "+MinValid->text()+", true, "+MaxValid->text()+")");
		if (CustomValid->isChecked())
			item->annotation().setV_act(ValidScript->text());
		if (NoCalc->isChecked())
			item->annotation().setC_act("");
		if (SimpleCalc->isChecked())
		{
			QString tmpCact = "AFSimple_Calculate(";
			switch (CalcArt->currentItem())
			{
				case 0:
					tmpCact += "\"SUM\", ";
					break;
				case 1:
					tmpCact += "\"PRD\", ";
					break;
				case 2:
					tmpCact += "\"AVG\", ";
					break;
				case 3:
					tmpCact += "\"MIN\", ";
					break;
				case 4:
					tmpCact += "\"MAX\", ";
					break;
			}
			tmpCact += "new Array (";
			QStringList pfol;
			pfol = pfol.split(",", CalcFields->text());
			if (pfol.count() > 1)
			{
				tmpCact += "\""+pfol[0].stripWhiteSpace()+"\"";
				for (int cfx = 1; cfx < pfol.count(); cfx++)
				{
					tmpCact += ", \""+pfol[cfx].stripWhiteSpace()+"\"";
				}
			}
			tmpCact += "))";
			item->annotation().setC_act(tmpCact);
		}
		if (CustomCalc->isChecked())
			item->annotation().setC_act(CalcScript->text());
		switch (TxFormat->currentItem())
		{
			case 0:
				item->annotation().setF_act("");
				item->annotation().setK_act("");
				break;
			case 1:
				Nfo = tmp.setNum(Decim->value())+", "+tmp2.setNum(FormNum)+", 0, 0, \"";
				if (UseCurr->isChecked())
					{
					if (!PreCurr->isChecked())
						Nfo += " ";
					Nfo += CurSym->text().stripWhiteSpace();
					if (PreCurr->isChecked())
						Nfo += " ";
					}
				if (PreCurr->isChecked())
					Nfo += "\", true)";
				else
					Nfo += "\", false)";
				item->annotation().setF_act("AFNumber_Format("+Nfo);
				item->annotation().setK_act("AFNumber_Keystroke("+Nfo);
				break;
			case 2:
				Nfo = tmp.setNum(Decim2->value())+", "+tmp.setNum(FormNum)+")";
				item->annotation().setF_act("AFPercent_Format("+Nfo);
				item->annotation().setK_act("AFPercent_Keystroke("+Nfo);
				break;
			case 3:
				Nfo = Format0c->currentText()+"\")";
				item->annotation().setF_act("AFDate_FormatEx(\""+Nfo);
				item->annotation().setK_act("AFDate_KeystrokeEx(\""+Nfo);
				break;
			case 4:
				Nfo = tmp.setNum(FormNum)+")";
				item->annotation().setF_act("AFTime_Format("+Nfo);
				item->annotation().setK_act("AFTime_Keystroke("+Nfo);
				break;
			case 5:
				item->annotation().setF_act(FormatScript->text());
				item->annotation().setK_act(KeyScript->text());
				break;
		}
	}
	item->annotation().setAction("");
	switch (ActionCombo->currentItem())
		{
		case 0:
			item->annotation().setActionType(0);
			break;
		case 1:
			item->annotation().setActionType(1);
			switch (ScrEdited)
				{
				case 0:
					item->annotation().setAction(EditJava->text());
					break;
				case 1:
					item->annotation().setD_act(EditJava->text());
					break;
				case 2:
					item->annotation().setE_act(EditJava->text());
					break;
				case 3:
					item->annotation().setX_act(EditJava->text());
					break;
				case 4:
					item->annotation().setFo_act(EditJava->text());
					break;
				case 5:
					item->annotation().setBl_act(EditJava->text());
					break;
				case 6:
					item->annotation().setK_act(EditJava->text());
					break;
				}
			break;
		case 2:
			if ((LExtern->isChecked()) && (!Destfile->text().isEmpty()))
			{
				item->annotation().setExtern(Destfile->text());
				item->annotation().setActionType(7);
			}
			else
			{
				item->annotation().setExtern("");
				item->annotation().setActionType(2);
			}
			item->annotation().setZiel(SpinBox11->value()-1);
			item->annotation().setAction(tmp.setNum(SpinBox21->value())+" "+tmp2.setNum(Hoehe-SpinBox31->value())+" 0");
			break;
		case 3:
			item->annotation().setActionType(3);
			item->annotation().setAction(SubURL->text().stripWhiteSpace());
			item->annotation().setHTML(SubAsHtml->isChecked());
			break;
		case 4:
			item->annotation().setActionType(4);
			break;
		case 5:
			item->annotation().setActionType(5);
			item->annotation().setAction(SubURLa->text().stripWhiteSpace());
			break;
		}
	if (!item->annotation().E_act().isEmpty())
		AAct = true;
	if (!item->annotation().X_act().isEmpty())
		AAct = true;
	if (!item->annotation().D_act().isEmpty())
		AAct = true;
	if (!item->annotation().Fo_act().isEmpty())
		AAct = true;
	if (!item->annotation().Bl_act().isEmpty())
		AAct = true;
	if (!item->annotation().K_act().isEmpty())
		AAct = true;
	if (!item->annotation().F_act().isEmpty())
		AAct = true;
	if (!item->annotation().V_act().isEmpty())
		AAct = true;
	if (!item->annotation().C_act().isEmpty())
		AAct = true;
	item->annotation().setAAact(AAct);
	accept();
}

void Annot::SetZiel(int it)
{
	disconnect(ActionCombo, SIGNAL(activated(int)), this, SLOT(SetActTyp(int)));
	disconnect(TxFormat, SIGNAL(activated(int)), this, SLOT(SetFoScript(int)));
	int tmpac = item->annotation().ActionType();
	if (tmpac == 7)
		tmpac = 2;
	int sela = it + 2;
	TabWidget2->setTabEnabled(tab4, false);
	TabWidget2->setTabEnabled(tab_4, false);
	TabWidget2->setTabEnabled(tab_5, false);
	EditFormat->setEnabled( false );
	EditKeystr->setEnabled( false );
	SelAction->clear();
	QString tmp_selact[]={tr("Mouse Up"), tr("Mouse Down"), tr("Mouse Enter"),
	                      tr("Mouse Exit"), tr("On Focus"), tr("On Blur")};
	size_t array_sel = sizeof(tmp_selact) / sizeof(*tmp_selact);
	/* PFJ - 28/02/04 - Altered from uint to int and varname */
	for (uint prop = 0; prop < array_sel; ++prop)
		SelAction->insertItem(tmp_selact[prop]);
	bool setter;
	switch (sela)
	{
	case 2:
		{
			Fram->raiseWidget(3);
			FramOp->raiseWidget(sela);
			ReadOnly->setEnabled(false);
			ReadOnly->setChecked(false);
			Required->setEnabled(false);
			Required->setChecked(false);
			NoExport->setEnabled(false);
			NoExport->setChecked(false);
			ActionCombo->clear();
			QString tmp_actcom[] = {tr("None", "action"), tr("JavaScript"), tr("Go To"),
			                        tr("Submit Form"), tr("Reset Form"), tr("Import Data")};
			size_t array_act = sizeof(tmp_actcom) / sizeof(*tmp_actcom);
			/* PFJ - 28/02/04 - Altered from uint to int and varname */
			for (uint prop = 0; prop < array_act; ++prop)
				ActionCombo->insertItem(tmp_actcom[prop]);
			ActionCombo->setCurrentItem(qMin(tmpac,5));
			setter = item->annotation().ActionType() != 7 ? true : false;
			Destfile->setEnabled(setter);
			ChFile->setEnabled(setter);
			SetActTyp(tmpac);
			break;
		}
	case 3:
	case 6:
	case 4:
	case 5:
	case 7:
		if ((sela == 3) || (sela == 5))
		{
			TabWidget2->setTabEnabled(tab4, true);
			TabWidget2->setTabEnabled(tab_4, true);
			TabWidget2->setTabEnabled(tab_5, true);
			TxFormat->setCurrentItem(item->annotation().Format());
			SetFoScript(item->annotation().Format());
			SetVali();
			SetCalc();
		}
		if (sela == 6)
			SelAction->insertItem( tr( "Selection Change" ) );
		ReadOnly->setEnabled(true);
		ReadOnly->setChecked(item->annotation().Flag() & 1);
		Required->setChecked(item->annotation().Flag() & 2);
		NoExport->setChecked(item->annotation().Flag() & 4);
		Fram->raiseWidget(3);
		sela > 5 ? FramOp->raiseWidget(5) : FramOp->raiseWidget(sela);
		ActionCombo->clear();
		ActionCombo->insertItem( tr( "None" ) );
		ActionCombo->insertItem( tr( "JavaScript" ) );
		ActionCombo->setCurrentItem(qMin(tmpac, 1));
		SetActTyp(tmpac);
		break;
	default:
		Fram->raiseWidget(2);
		break;
	}
	MultiL->setChecked(item->annotation().Flag() & 4096);
	Passwd->setChecked(item->annotation().Flag() & 8192);
	CanEdit->setChecked(item->annotation().Flag() & 262144);
	NoSpell->setChecked(item->annotation().Flag() & 4194304);
	NoScroll->setChecked(item->annotation().Flag() & 8388608);
	ChkStil->setCurrentItem(item->annotation().ChkStil());
	isChkd->setChecked(item->annotation().IsChk());
	setter = item->annotation().MaxChar() != -1 ? true : false;
	MaxChars->setValue(setter == true ? item->annotation().MaxChar() : 0);
	Limit->setChecked(setter);
	MaxChars->setEnabled(setter);
	connect(ActionCombo, SIGNAL(activated(int)), this, SLOT(SetActTyp(int)));
	connect(TxFormat, SIGNAL(activated(int)), this, SLOT(SetFoScript(int)));
}

void Annot::SetLimit()
{
	Limit->isChecked() ? MaxChars->setEnabled(true) :MaxChars->setEnabled(false);
}

void Annot::SetExternL()
{
	disconnect(LExtern, SIGNAL(clicked()), this, SLOT(SetExternL()));
	bool enable;
	if (!LExtern->isChecked())
	{
		item->annotation().setActionType(2);
		enable = false;
		//		Destfile->setEnabled(false);
		//		ChFile->setEnabled(false);
		SetPg(qMin(SpinBox11->value(), MaxSeite));
	}
	else
	{
		item->annotation().setActionType(7);
		enable = true;
		//		Destfile->setEnabled(true);
		//		ChFile->setEnabled(true);
		if (Destfile->text().isEmpty())
		{
			GetFile();
			if (Destfile->text().isEmpty())
			{
				item->annotation().setActionType(2);
				enable = false;
				//				Destfile->setEnabled(false);
				//				ChFile->setEnabled(false);
				LExtern->setChecked(false);
			}
		}
		SetPg(qMin(SpinBox11->value(), MaxSeite));
	}
	Destfile->setEnabled(enable);
	ChFile->setEnabled(enable);
	connect(LExtern, SIGNAL(clicked()), this, SLOT(SetExternL()));
}

void Annot::SetActTyp(int it)
{
	bool setter;
	switch (it)
	{
	case 5:
		Fram2->raiseWidget(5);
		SubURLa->setText(item->annotation().Action());
		break;
	case 3:
		Fram2->raiseWidget(4);
		SubURL->setText(item->annotation().Action());
		SubAsHtml->setChecked(item->annotation().HTML());
		break;
	case 2:
		Fram2->raiseWidget(3);
		setter = item->annotation().ActionType() != 7 ? true : false;
		Destfile->setEnabled(setter);
		ChFile->setEnabled(setter);
		SetPg(qMin(SpinBox11->value(), MaxSeite));
		break;
	case 1:
		Fram2->raiseWidget(2);
		SelAction->setCurrentItem(ScrEdited);
		break;
	default:
		Fram2->raiseWidget(1);
		break;
	}
}

void Annot::SetActScript(int it)
{
	switch (ScrEdited)
	{
	case 0:
		item->annotation().setAction(EditJava->text());
		break;
	case 1:
		item->annotation().setD_act(EditJava->text());
		break;
	case 2:
		item->annotation().setE_act(EditJava->text());
		break;
	case 3:
		item->annotation().setX_act(EditJava->text());
		break;
	case 4:
		item->annotation().setFo_act(EditJava->text());
		break;
	case 5:
		item->annotation().setBl_act(EditJava->text());
		break;
	case 6:
		item->annotation().setK_act(EditJava->text());
		break;
	}
	switch (it)
	{
	case 0:
		EditJava->setText(item->annotation().Action());
		break;
	case 1:
		EditJava->setText(item->annotation().D_act());
		break;
	case 2:
		EditJava->setText(item->annotation().E_act());
		break;
	case 3:
		EditJava->setText(item->annotation().X_act());
		break;
	case 4:
		EditJava->setText(item->annotation().Fo_act());
		break;
	case 5:
		EditJava->setText(item->annotation().Bl_act());
		break;
	case 6:
		EditJava->setText(item->annotation().K_act());
		break;
	}
	ScrEdited = it;
}

void Annot::GetFile()
{
	QString fn;
	QString wdir = dirs->get("annot_getfile", ".");
	CustomFDialog dia(this, wdir, tr("Open"), tr("PDF Files (*.pdf);;All Files (*)"));
	if (!Destfile->text().isEmpty())
		dia.setSelection(Destfile->text());
	if (dia.exec() == QDialog::Accepted)
	{
		fn = dia.selectedFile();
		if (!fn.isEmpty())
		{
			dirs->set("annot_getfile", fn.left(fn.findRev("/")));
			Destfile->setText(fn);
			SpinBox11->setValue(1);
			SpinBox11->setMaxValue(1000);
			SetPg(1);
		}
	}
}
