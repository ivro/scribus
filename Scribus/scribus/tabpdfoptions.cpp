/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
#include "tabpdfoptions.h"
//#include "tabpdfoptions.moc"

#include <qpainter.h>
//Added by qt3to4:
#include <QLabel>
#include <QPixmap>
#include <Q3GridLayout>
#include <QList>
#include <Q3HBoxLayout>
#include <Q3VBoxLayout>

#include <QStandardItem>
#include <QAbstractItemView>

#include "createrange.h"
#include "pdfoptions.h"
#include "prefsmanager.h"
#include "scribuscore.h"
#include "scconfig.h"
#include "units.h"
#include "usertaskstructs.h"

extern QPixmap loadIcon(QString nam);
#include "scribuscore.h"

TabPDFOptions::TabPDFOptions(   QWidget* parent, PDFOptions & Optionen,
                                const SCFonts &AllFonts,
                                const ProfilesL & PDFXProfiles,
                                const QMap<QString, int> & DocFonts,
                                const QList<PDFPresentationData> & Eff,
                                int unitIndex, double PageH, double PageB,
                                ScribusDoc * mdoc, bool exporting )
	: QTabWidget( parent, "pdf" ),
	// Initialize all those darn pointer members so we catch unitialized
	// accesses. I (CR) use the following command to generate these based on
	// the header excerpt:
	//    !cut -d \* -f 2 | sed -r 's/ ?(.*);/\t\1\(0\),/g'
	// Public GUI member pointers:
	AddSec(0),
	Article(0),
	BleedBottom(0),
	BleedLeft(0),
	BleedRight(0),
	BleedTop(0),
	CheckBM(0),
	CheckBox1(0),
	CMethod(0),
	ClipMarg(0),
	ComboBind(0),
	Compression(0),
	continuousPages(0),
	CopySec(0),
	CQuality(0),
	doublePageLeft(0),
	doublePageRight(0),
	DSColor(0),
	EmbedProfs(0),
	EmbedProfs2(0),
	Encry(0),
	ImageP(0),
	IntendI(0),
	IntendS(0),
	MirrorH(0),
	MirrorV(0),
	ModifySec(0),
	NoEmbedded(0),
	OutCombo(0),
	Pages(0),
	PassOwner(0),
	PassUser(0),
	PDFVersionCombo(0),
	PrintProfC(0),
	PrintSec(0),
	Resolution(0),
	RotateDeg(0),
	singlePage(0),
	SolidPr(0),
	useBookmarks(0),
	useFullScreen(0),
	useLayers(0),
	useLayers2(0),
	UseLPI(0),
	useSpot(0),
	overprintMode(0),
	useThumbnails(0),
	ValC(0),
	// Protected members other than GUI member pointers
	// End GUI member pointers
	// Protected non-gui members
	PgSel(0),
	EffVal(Eff),
	// Protected GUI member pointers
	actionCombo(0),
	AllPages(0),
	CheckBox10(0),
	EDirection(0),
	EDirection_2(0),
	EDirection_2_2(0),
	EffectTime(0),
	EffectType(0),
	fitWindow(0),
	hideMenuBar(0),
	hideToolBar(0),
	InfoString(0),
	LPIangle(0),
	LPIfreq(0),
	LPIfunc(0),
	PageNr(0),
	PageTime(0),
	// End protected gui member pointers
	// Private member gui pointers
	actionLabel(0),
	AvailFlist(0),
	BleedGroup(0),
	BleedGroupLayout(0),
//	BleedIcon(0),
	CBox(0),
	CBoxLayout(0),
	ColorGroup(0),
	ColorGroupLayout(0),
	ColorText1(0),
	Effects(0),
	EffectsLayout(0),
	EmbedFonts(0),
	EmbedList(0),
	EonAllPg(0),
	FromEmbed(0),
	FromOutline(0),
	GroupBox1(0),
	GroupBox1Layout(0),
	GroupBox2Layout(0),
	GroupBox9(0),
	GroupBox9Layout(0),
	groupDisplay(0),
	groupDisplayLayout(0),
	GroupFont(0),
	GroupFontLayout(0),
	groupJava(0),
	groupJavaLayout(0),
	groupNavigation(0),
	groupNavigationLayout(0),
	GroupPass(0),
	GroupPassLayout(0),
	GroupSecSet(0),
	GroupSecSetLayout(0),
	Layout11(0),
	pageNumberSelectorLayout(0),
	Layout11a(0),
	Layout13(0),
	Layout2(0),
	Layout3(0),
	Layout4_2(0),
	Layout5_2(0),
	Layout5_2a(0),
	Layout6(0),
	LayoutSpecial(0),
	LPIcolor(0),
	LPIgroup(0),
	LPIgroupLayout(0),
	OnlySome(0),
	pageLayout(0),
	pageLayoutLayout(0),
	PagePrev(0),
	PDFX1(0),
	PDFX2(0),
	PrintSec2(0),
	ProfsGroup(0),
	ProfsGroupLayout(0),
	ProfsTxt1(0),
	ProfsTxt2(0),
	ProfsTxt3(0),
	ProfsTxt4(0),
	RangeGroup(0),
	RangeGroupLayout(0),
	OutlineFonts(0),
	OutlineList(0),
	tabColor(0),
	tabColorLayout(0),
	tabFonts(0),
	tabGeneral(0),
	tabLayout(0),
	tabLayout_3(0),
	tabLayout_5(0),
	tabOptionsGridLayout(0),
	tabPDFX(0),
	tabPDFXLayout(0),
	tabPresentation(0),
	tabSecurity(0),
	tabSecurityLayout(0),
	tabSpecial(0),
	tabSpecialLayout(0),
	TextCom1(0),
	TextCom2(0),
	TextFont1(0),
	TextFont1_2(0),
	TextFont1_2a(0),
	TextLabel1(0),
	TextLabel1e(0),
	TextLabel1x(0),
	TextLabel2(0),
	TextLabel2e(0),
	TextLabel3(0),
	TextLabel3e(0),
	TextLabel4e(0),
	TextLabel5e(0),
	TextLabel6e(0),
	textLPI1(0),
	textLPI2(0),
	textLPI3(0),
	TextSec1(0),
	TextSec2(0),
	pageNrButton(0),
	ToEmbed(0),
	ToOutline(0),
	useViewDefault(0),
	X3Group(0),
	X3GroupLayout(0),
	// end protected member gui pointers
	// Private members
	unit(unitGetSuffixFromIndex(unitIndex)),
	precision(unitGetPrecisionFromIndex(unitIndex)),
	unitRatio(unitGetRatioFromIndex(unitIndex)),
	pdfExport(exporting),
	doc(mdoc),
	AllFonts(AllFonts),
	Opts(Optionen),
	pageH(PageH),
	pageB(PageB),
	cms(false)
{

	tabGeneral = new QWidget( this, "tabGeneral" );
	tabLayout = new Q3VBoxLayout( tabGeneral );
	tabLayout->setSpacing( 5 );
	tabLayout->setMargin( 11 );
	Layout13 = new Q3HBoxLayout( 0, 0, 5, "Layout13");
	RangeGroup = new Q3ButtonGroup( tabGeneral, "RangeGroup" );
	RangeGroup->setTitle( tr( "Export Range" ) );
	RangeGroup->setColumnLayout(0, Qt::Vertical );
	RangeGroup->layout()->setSpacing( 5 );
	RangeGroup->layout()->setMargin( 10 );
	RangeGroupLayout = new Q3VBoxLayout( RangeGroup->layout() );
	RangeGroupLayout->setAlignment( Qt::AlignTop );
	AllPages = new QRadioButton( tr( "&All Pages" ), RangeGroup, "AllPages" );
	RangeGroupLayout->addWidget( AllPages );
	Layout11 = new Q3GridLayout( 0, 1, 1, 0, 5, "Layout11");
	OnlySome = new QRadioButton( tr( "C&hoose Pages" ), RangeGroup, "OnlySome" );
	Layout11->addWidget( OnlySome, 0, 0 );
 	pageNumberSelectorLayout = new Q3HBoxLayout( 0, 0, 5, "pageNumberSelectorLayout" );
	PageNr = new QLineEdit( RangeGroup, "PageNr" );
 	pageNumberSelectorLayout->addWidget( PageNr );
 	pageNrButton = new QPushButton( QString::fromUtf8("…"), RangeGroup, "PageNrButton" );
 	pageNrButton->setPixmap(loadIcon("ellipsis.png"));
 	pageNumberSelectorLayout->addWidget( pageNrButton );
 	Layout11->addLayout( pageNumberSelectorLayout, 1, 0 );
	RangeGroupLayout->addLayout( Layout11 );
	RotationLayout = new Q3HBoxLayout( 0, 0, 5, "RotationLayout" );
	TextLabel3 = new QLabel( tr( "&Rotation:" ), RangeGroup, "TextLabel3" );
	RotationLayout->addWidget( TextLabel3 );
	RotateDeg = new QComboBox( true, RangeGroup, "RotateDeg" );
	RotateDeg->insertItem(QString::fromUtf8("0 °"));
	RotateDeg->insertItem(QString::fromUtf8("90 °"));
	RotateDeg->insertItem(QString::fromUtf8("180 °"));
	RotateDeg->insertItem(QString::fromUtf8("270 °"));
	RotateDeg->setEditable(false);
	TextLabel3->setBuddy(RotateDeg);
	RotationLayout->addWidget( RotateDeg );
	RangeGroupLayout->addLayout(RotationLayout);
	Layout11a = new Q3GridLayout( 0, 1, 1, 0, 5, "Layout11a");
	MirrorH = new QToolButton( RangeGroup, "MirrorH" );
	MirrorH->setPixmap(loadIcon("16/flip-object-horizontal.png"));
	MirrorH->setToggleButton( true );
	Layout11a->addWidget( MirrorH, 0, 0 );
	MirrorV = new QToolButton( RangeGroup, "MirrorH" );
	MirrorV->setPixmap(loadIcon("16/flip-object-vertical.png"));
	MirrorV->setToggleButton( true );
	Layout11a->addWidget( MirrorV, 0, 1 );
	RangeGroupLayout->addLayout( Layout11a );
	ClipMarg = new QCheckBox( tr( "Clip to Page Margins" ), RangeGroup, "ClipMarg" );
	RangeGroupLayout->addWidget( ClipMarg );
	Layout13->addWidget( RangeGroup );

	GroupBox1 = new Q3GroupBox( tr( "File Options" ), tabGeneral, "GroupBox1" );
	GroupBox1->setColumnLayout(0, Qt::Vertical );
	GroupBox1->layout()->setSpacing( 0 );
	GroupBox1->layout()->setMargin( 0 );
	GroupBox1Layout = new Q3GridLayout( GroupBox1->layout() );
	GroupBox1Layout->setAlignment( Qt::AlignTop );
	GroupBox1Layout->setSpacing( 5 );
	GroupBox1Layout->setMargin( 10 );
	TextLabel1 = new QLabel( tr( "Compatibilit&y:" ), GroupBox1, "TextLabel1" );
	TextLabel1->setAlignment( Qt::AlignVCenter | Qt::AlignLeft );
	GroupBox1Layout->addWidget( TextLabel1, 0, 0 );
	PDFVersionCombo = new QComboBox( true, GroupBox1, "PDFVersionCombo" );
	PDFVersionCombo->setEditable(false);
	TextLabel1->setBuddy(PDFVersionCombo);
	PDFVersionCombo->insertItem("PDF 1.3 (Acrobat 4)");
	PDFVersionCombo->insertItem("PDF 1.4 (Acrobat 5)");
	PDFVersionCombo->insertItem("PDF 1.5 (Acrobat 6)");
	cms = doc ? (ScCore->haveCMS() && doc->HasCMS) : false;
	if (cms && (!PDFXProfiles.isEmpty()))
		PDFVersionCombo->insertItem("PDF/X-3");
	GroupBox1Layout->addMultiCellWidget( PDFVersionCombo, 0, 0, 1, 2 );
	TextLabel1x = new QLabel( tr( "&Binding:" ), GroupBox1, "TextLabel1" );
	TextLabel1x->setAlignment(Qt::AlignVCenter | Qt::AlignLeft);
	GroupBox1Layout->addWidget( TextLabel1x, 1, 0 );
	ComboBind = new QComboBox( true, GroupBox1, "ComboBind" );
	ComboBind->insertItem( tr("Left Margin"));
	ComboBind->insertItem( tr("Right Margin"));
	ComboBind->setEditable(false);
	TextLabel1x->setBuddy(ComboBind);
	GroupBox1Layout->addMultiCellWidget( ComboBind, 1, 1, 1, 2 );
	CheckBox1 = new QCheckBox( tr( "Generate &Thumbnails" ), GroupBox1, "CheckBox1" );
	GroupBox1Layout->addMultiCellWidget( CheckBox1, 2, 2, 0, 2 );
	Article = new QCheckBox( tr( "Save &Linked Text Frames as PDF Articles" ), GroupBox1, "CheckBox1" );
	GroupBox1Layout->addMultiCellWidget( Article, 3, 3, 0, 2 );
	CheckBM = new QCheckBox( tr( "&Include Bookmarks" ), GroupBox1, "E" );
	GroupBox1Layout->addMultiCellWidget( CheckBM, 4, 4, 0, 2 );
	useLayers = new QCheckBox( tr( "Include La&yers" ), GroupBox1, "LI" );
	GroupBox1Layout->addMultiCellWidget( useLayers, 5, 5, 0, 2 );
	Resolution = new QSpinBox( GroupBox1, "Resolution" );
	Resolution->setMaximum( 4000 );
	Resolution->setMinimum( 35 );
	Resolution->setSuffix( tr( " dpi" ) );
	TextLabel2 = new QLabel( Resolution, tr( "&Resolution for EPS Graphics:" ), GroupBox1, "TextLabel2" );
	TextLabel2->setAlignment( Qt::AlignVCenter | Qt::AlignLeft );
	GroupBox1Layout->addWidget( TextLabel2, 6, 0 );
	GroupBox1Layout->addWidget( Resolution, 6, 1, Qt::AlignLeft );
	Layout13->addWidget( GroupBox1 );
	tabLayout->addLayout( Layout13 );
	Compression = new QCheckBox( tr( "Com&press Text and Vector Graphics" ), tabGeneral, "Compression" );
	tabLayout->addWidget( Compression );
	CBox = new Q3GroupBox( tr( "Image Compression Method" ), tabGeneral, "CBox" );
	CBox->setColumnLayout(0, Qt::Vertical );
	CBox->layout()->setSpacing( 5 );
	CBox->layout()->setMargin( 11 );
	CBoxLayout = new Q3GridLayout( CBox->layout() );
	CBoxLayout->setAlignment( Qt::AlignTop );
	CMethod = new QComboBox( true, CBox, "CMethod" );
	CMethod->clear();
	CMethod->insertItem( tr( "Automatic" ) );
	CMethod->insertItem( tr( "Lossy - JPEG" ) );
	CMethod->insertItem( tr( "Lossless - Zip" ) );
	CMethod->insertItem( tr( "None" ) );
	CMethod->setEditable(false);
	TextCom1 = new QLabel( CMethod, tr( "Compression Metho&d:" ), CBox, "TextCom1" );
	CBoxLayout->addWidget( TextCom1, 0, 0 );
	CBoxLayout->addWidget( CMethod, 0, 1 );
	CQuality = new QComboBox( true, CBox, "CQuality" );
	CQuality->clear();
	CQuality->insertItem( tr( "Maximum" ) );
	CQuality->insertItem( tr( "High" ) );
	CQuality->insertItem( tr( "Medium" ) );
	CQuality->insertItem( tr( "Low" ) );
	CQuality->insertItem( tr( "Minimum" ) );
	CQuality->setEditable(false);
	TextCom2 = new QLabel( CQuality, tr( "Compression &Quality:" ), CBox, "TextCom2" );
	CBoxLayout->addWidget( TextCom2, 1, 0 );
	CBoxLayout->addWidget( CQuality, 1, 1 );
	DSColor = new QCheckBox( tr( "Maximum Image Resolution:" ), CBox, "DSColor" );
	CBoxLayout->addWidget( DSColor, 2, 0 );
	ValC = new QSpinBox( CBox, "ValC" );
	ValC->setSuffix( tr( " dpi" ) );
	ValC->setMaximum( 4000 );
	ValC->setMinimum( 35 );
	CBoxLayout->addWidget( ValC, 2, 1, Qt::AlignLeft );
	tabLayout->addWidget( CBox );
	insertTab( tabGeneral, tr( "&General" ) );
	if (doc != 0 && exporting)
	{
		tabFonts = new QWidget( this, "tabFonts" );
		tabLayout_3 = new Q3VBoxLayout( tabFonts );
		tabLayout_3->setSpacing( 5 );
		tabLayout_3->setMargin( 10 );
		GroupFont = new Q3GroupBox( tr( "Embedding" ), tabFonts, "GroupFont" );
		GroupFont->setColumnLayout(0, Qt::Vertical );
		GroupFont->layout()->setSpacing( 0 );
		GroupFont->layout()->setMargin( 0 );
		GroupFontLayout = new Q3HBoxLayout( GroupFont->layout() );
		GroupFontLayout->setAlignment( Qt::AlignTop );
		GroupFontLayout->setSpacing( 5 );
		GroupFontLayout->setMargin( 10 );
		Layout4_2 = new Q3VBoxLayout;
		Layout4_2->setSpacing( 5 );
		Layout4_2->setMargin( 0 );
		TextFont1 = new QLabel( tr( "Available Fonts:" ), GroupFont, "TextFont1" );
		Layout4_2->addWidget( TextFont1 );
		AvailFlist = new Q3ListBox( GroupFont, "AvailFlist" );
		AvailFlist->setMinimumSize(QSize(150, 140));
		Layout4_2->addWidget( AvailFlist );
		GroupFontLayout->addLayout( Layout4_2 );
		Layout5_2 = new Q3VBoxLayout;
		Layout5_2->setSpacing( 5 );
		Layout5_2->setMargin( 0 );
		QSpacerItem* spacerS3a = new QSpacerItem( 20, 30, QSizePolicy::Minimum, QSizePolicy::Minimum );
		Layout5_2->addItem( spacerS3a );
		ToEmbed = new QPushButton( "", GroupFont, "ToEmbed" );
		ToEmbed->setPixmap(loadIcon("22/go-next.png"));
		Layout5_2->addWidget( ToEmbed );
		FromEmbed = new QPushButton( "", GroupFont, "FromEmbed" );
		FromEmbed->setPixmap(loadIcon("22/go-previous.png"));
		Layout5_2->addWidget( FromEmbed );
		QSpacerItem* spacerS3 = new QSpacerItem( 20, 30, QSizePolicy::Minimum, QSizePolicy::Expanding );
		Layout5_2->addItem( spacerS3 );
		GroupFontLayout->addLayout( Layout5_2 );
		Layout6 = new Q3VBoxLayout;
		Layout6->setSpacing( 5 );
		Layout6->setMargin( 0 );
		TextFont1_2 = new QLabel( tr( "Fonts to embed:" ), GroupFont, "TextFont1_2" );
		Layout6->addWidget( TextFont1_2 );
		EmbedList = new Q3ListBox( GroupFont, "EmbedList" );
		EmbedList->setMinimumSize(QSize(150, 40));
		Layout6->addWidget( EmbedList );

		Layout5_2a = new Q3HBoxLayout;
		Layout5_2a->setSpacing( 5 );
		Layout5_2a->setMargin( 0 );
		EmbedFonts = new QPushButton( tr( "&Embed all" ), GroupFont, "EmbedFonts" );
		Layout5_2a->addWidget( EmbedFonts );
		QSpacerItem* spacerS1 = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
		Layout5_2a->addItem( spacerS1 );
		ToOutline = new QPushButton( "", GroupFont, "ToOutline" );
		ToOutline->setPixmap(loadIcon("22/go-down.png"));
		Layout5_2a->addWidget( ToOutline );
		FromOutline = new QPushButton( "", GroupFont, "FromOutline" );
		FromOutline->setPixmap(loadIcon("22/go-up.png"));
		Layout5_2a->addWidget( FromOutline );
		QSpacerItem* spacerS2 = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
		Layout5_2a->addItem( spacerS2 );
		Layout6->addLayout( Layout5_2a );
		TextFont1_2a = new QLabel( tr( "Fonts to outline:" ), GroupFont, "TextFont1_2a" );
		Layout6->addWidget( TextFont1_2a );
		OutlineList = new Q3ListBox( GroupFont, "OutlineList" );
		OutlineList->setMinimumSize(QSize(150, 40));
		Layout6->addWidget( OutlineList );
		OutlineFonts = new QPushButton( tr( "&Outline all" ), GroupFont, "OutlineFonts" );
		Layout6->addWidget( OutlineFonts );
		GroupFontLayout->addLayout( Layout6 );
		tabLayout_3->addWidget( GroupFont );
		insertTab( tabFonts, tr( "&Fonts" ) );
		tabPresentation = new QWidget( this, "tabPresentation" );
		tabLayout_5 = new Q3GridLayout( tabPresentation );
		tabLayout_5->setSpacing( 5 );
		tabLayout_5->setMargin( 11 );
		CheckBox10 = new QCheckBox( tr( "Enable &Presentation Effects" ), tabPresentation, "CheckBox10" );
		tabLayout_5->addMultiCellWidget( CheckBox10, 0, 0, 0, 1 );
		Pages = new Q3ListBox( tabPresentation, "Pages" );
		Pages->setSizePolicy( QSizePolicy( (QSizePolicy::SizeType)1, (QSizePolicy::SizeType)1, Pages->sizePolicy().hasHeightForWidth() ) );
		tabLayout_5->addWidget( Pages, 1, 0 );
		PagePrev = new QCheckBox( tr( "Show Page Pre&views" ), tabPresentation, "CheckBox10" );
		tabLayout_5->addWidget( PagePrev, 2, 0 );
		Effects = new Q3GroupBox( tr( "Effects" ), tabPresentation, "Effects" );
		Effects->setColumnLayout(0, Qt::Vertical );
		Effects->layout()->setSpacing( 0 );
		Effects->layout()->setMargin( 0 );
		EffectsLayout = new Q3GridLayout( Effects->layout() );
		EffectsLayout->setAlignment( Qt::AlignTop );
		EffectsLayout->setSpacing( 5 );
		EffectsLayout->setMargin( 11 );
		TextLabel1e = new QLabel( tr( "&Display Duration:" ), Effects, "TextLabel1_2" );
		EffectsLayout->addWidget( TextLabel1e, 0, 0 );
		TextLabel2e = new QLabel( tr( "Effec&t Duration:" ), Effects, "TextLabel2_2" );
		EffectsLayout->addWidget( TextLabel2e, 1, 0 );
		TextLabel3e = new QLabel( tr( "Effect T&ype:" ), Effects, "TextLabel3_2" );
		EffectsLayout->addWidget( TextLabel3e, 2, 0 );
		TextLabel4e = new QLabel( tr( "&Moving Lines:" ), Effects, "TextLabel4_2" );
		EffectsLayout->addWidget( TextLabel4e, 3, 0 );
		TextLabel5e = new QLabel( tr( "F&rom the:" ), Effects, "TextLabel6" );
		EffectsLayout->addWidget( TextLabel5e, 4, 0 );
		TextLabel6e = new QLabel( tr( "D&irection:" ), Effects, "TextLabel5" );
		EffectsLayout->addWidget( TextLabel6e, 5, 0 );
		PageTime = new QSpinBox( Effects, "PageTime" );
		PageTime->setSuffix( tr( " sec" ) );
		PageTime->setMaximum( 3600 );
		PageTime->setMinimum( 0 );
		TextLabel1e->setBuddy(PageTime);
		EffectsLayout->addWidget( PageTime, 0, 1 );
		EffectTime = new QSpinBox( Effects, "EffectTime" );
		EffectTime->setSuffix( tr( " sec" ) );
		EffectTime->setMaximum( 3600 );
		EffectTime->setMinimum( 1 );
		TextLabel2e->setBuddy(EffectTime);
		EffectsLayout->addWidget( EffectTime, 1, 1 );
		EffectType = new QComboBox( true, Effects, "EffectType" );
		QString tmpc[] = { tr("No Effect"), tr("Blinds"), tr("Box"), tr("Dissolve"), tr("Glitter"), tr("Split"), tr("Wipe")};
		size_t ar = sizeof(tmpc) / sizeof(*tmpc);
		for (uint a = 0; a < ar; ++a)
			EffectType->insertItem(tmpc[a]);
		EffectType->setEditable(false);
		TextLabel3e->setBuddy(EffectType);
		EffectsLayout->addWidget( EffectType, 2, 1 );
		EDirection = new QComboBox( true, Effects, "EDirection" );
		EDirection->insertItem( tr( "Horizontal" ) );
		EDirection->insertItem( tr( "Vertical" ) );
		EDirection->setEditable(false);
		TextLabel4e->setBuddy(EDirection);
		EffectsLayout->addWidget( EDirection, 3, 1 );
		EDirection_2 = new QComboBox( true, Effects, "EDirection_2" );
		EDirection_2->insertItem( tr( "Inside" ) );
		EDirection_2->insertItem( tr( "Outside" ) );
		EDirection_2->setEditable(false);
		TextLabel5e->setBuddy(EDirection_2);
		EffectsLayout->addWidget( EDirection_2, 4, 1 );
		EDirection_2_2 = new QComboBox( true, Effects, "EDirection_2_2" );
		QString tmp_ed[] = { tr("Left to Right"), tr("Top to Bottom"), tr("Bottom to Top"), tr("Right to Left"),
		                     tr("Top-left to Bottom-Right")};
		size_t ar_ed = sizeof(tmp_ed) / sizeof(*tmp_ed);
		for (uint a = 0; a < ar_ed; ++a)
			EDirection_2_2->insertItem(tmp_ed[a]);
		EDirection_2_2->setEditable(false);
		TextLabel6e->setBuddy(EDirection_2_2);
		EffectsLayout->addWidget( EDirection_2_2, 5, 1 );
		EonAllPg = new QPushButton( tr( "&Apply Effect on all Pages" ), Effects, "Eon" );
		EffectsLayout->addMultiCellWidget( EonAllPg, 6, 6, 0, 1 );
		tabLayout_5->addMultiCellWidget( Effects, 1, 2, 1, 1 );
		insertTab( tabPresentation, tr( "E&xtras" ) );
		tabSpecial = new QWidget( this, "tabSpecial" );
		tabSpecialLayout = new Q3VBoxLayout( tabSpecial, 11, 6, "tabSpecialLayout");
		groupDisplay = new Q3GroupBox( tabSpecial, "groupDisplay" );
		groupDisplay->setTitle( tr( "Display Settings" ) );
		groupDisplay->setColumnLayout(0, Qt::Vertical );
		groupDisplay->layout()->setSpacing( 5 );
		groupDisplay->layout()->setMargin( 10 );
		groupDisplayLayout = new Q3VBoxLayout( groupDisplay->layout() );
		groupDisplayLayout->setAlignment( Qt::AlignTop );
		LayoutSpecial = new Q3HBoxLayout( 0, 0, 5, "LayoutSpecial");
		pageLayout = new Q3ButtonGroup( groupDisplay, "pageLayout" );
		pageLayout->setTitle( tr( "Document Layout" ) );
		pageLayout->setColumnLayout(0, Qt::Vertical );
		pageLayout->layout()->setSpacing( 5 );
		pageLayout->layout()->setMargin( 10 );
		pageLayoutLayout = new Q3VBoxLayout( pageLayout->layout() );
		pageLayoutLayout->setAlignment( Qt::AlignTop );
		singlePage = new QRadioButton( pageLayout, "singlePage" );
		singlePage->setText( tr( "Single Page" ) );
		pageLayoutLayout->addWidget( singlePage );
		continuousPages = new QRadioButton( pageLayout, "continuousPages" );
		continuousPages->setText( tr( "Continuous" ) );
		pageLayoutLayout->addWidget( continuousPages );
		doublePageLeft = new QRadioButton( pageLayout, "doublePageLeft" );
		doublePageLeft->setText( tr( "Double Page Left" ) );
		pageLayoutLayout->addWidget( doublePageLeft );
		doublePageRight = new QRadioButton( pageLayout, "doublePageRight" );
		doublePageRight->setText( tr( "Double Page Right" ) );
		pageLayoutLayout->addWidget( doublePageRight );
		LayoutSpecial->addWidget( pageLayout );
		groupNavigation = new Q3ButtonGroup( groupDisplay, "groupNavigation" );
		groupNavigation->setRadioButtonExclusive(true);
		groupNavigation->setTitle( tr( "Visual Appearance" ) );
		groupNavigation->setColumnLayout(0, Qt::Vertical );
		groupNavigation->layout()->setSpacing( 5 );
		groupNavigation->layout()->setMargin( 10 );
		groupNavigationLayout = new Q3VBoxLayout( groupNavigation->layout() );
		groupNavigationLayout->setAlignment( Qt::AlignTop );
		useViewDefault = new QRadioButton( groupNavigation, "useViewDefault" );
		useViewDefault->setText( tr( "Use Viewers Defaults" ) );
		groupNavigationLayout->addWidget( useViewDefault );
		useFullScreen = new QRadioButton( groupNavigation, "useFullScreen" );
		useFullScreen->setText( tr( "Use Full Screen Mode" ) );
		groupNavigationLayout->addWidget( useFullScreen );
		useBookmarks = new QRadioButton( groupNavigation, "useBookmarks" );
		useBookmarks->setText( tr( "Display Bookmarks Tab" ) );
		groupNavigationLayout->addWidget( useBookmarks );
		useThumbnails = new QRadioButton( groupNavigation, "useThumbnails" );
		useThumbnails->setText( tr( "Display Thumbnails" ) );
		groupNavigationLayout->addWidget( useThumbnails );
		useLayers2 = new QRadioButton( groupNavigation, "useLayers" );
		useLayers2->setText( tr( "Display Layers Tab" ) );
		groupNavigationLayout->addWidget( useLayers2 );
		hideToolBar = new QCheckBox( tr( "Hide Viewers Toolbar" ), groupNavigation, "hideToolBar" );
		groupNavigationLayout->addWidget( hideToolBar );
		hideMenuBar = new QCheckBox( tr( "Hide Viewers Menubar" ), groupNavigation, "hideMenuBar" );
		groupNavigationLayout->addWidget( hideMenuBar );
		fitWindow = new QCheckBox( tr( "Zoom Pages to fit Viewer Window" ), groupNavigation, "fitWindow" );
		groupNavigationLayout->addWidget( fitWindow );
		groupNavigation->setRadioButtonExclusive(true);
		LayoutSpecial->addWidget( groupNavigation );
		groupDisplayLayout->addLayout( LayoutSpecial );
		tabSpecialLayout->addWidget( groupDisplay );
		groupJava = new Q3GroupBox( tabSpecial, "groupJava" );
		groupJava->setTitle( tr( "Special Actions" ) );
		groupJava->setColumnLayout(0, Qt::Vertical );
		groupJava->layout()->setSpacing( 5 );
		groupJava->layout()->setMargin( 10 );
		groupJavaLayout = new Q3HBoxLayout( groupJava->layout() );
		groupJavaLayout->setAlignment( Qt::AlignTop );
		actionLabel = new QLabel( groupJava, "actionLabel" );
		actionLabel->setText( tr( "Javascript to be executed\nwhen PDF document is opened:" ) );
		groupJavaLayout->addWidget( actionLabel );
		actionCombo = new QComboBox( true, groupJava, "actionCombo" );
		actionCombo->setEditable(false);
		actionCombo->insertItem( tr("No Script"));
		groupJavaLayout->addWidget( actionCombo );
		tabSpecialLayout->addWidget( groupJava );
		insertTab( tabSpecial, tr("Viewer") );
	}

	tabSecurity = new QWidget( this, "tabSecurity" );
	tabSecurityLayout = new Q3VBoxLayout( tabSecurity, 11, 5, "tabSecurityLayout");
	Encry = new QCheckBox( tr( "&Use Encryption" ), tabSecurity, "Enc" );
	tabSecurityLayout->addWidget( Encry );
	GroupPass = new Q3GroupBox( tr( "Passwords" ), tabSecurity, "GroupPass" );
	GroupPass->setSizePolicy( QSizePolicy( (QSizePolicy::SizeType)5, (QSizePolicy::SizeType)1, 0, 0,
	                                       GroupPass->sizePolicy().hasHeightForWidth() ) );
	GroupPass->setColumnLayout(0, Qt::Vertical );
	GroupPass->layout()->setSpacing( 5 );
	GroupPass->layout()->setMargin( 10 );
	GroupPassLayout = new Q3GridLayout( GroupPass->layout() );
	GroupPassLayout->setAlignment( Qt::AlignTop );
	TextSec2 = new QLabel( tr( "&User:" ), GroupPass, "TextSec2" );
	GroupPassLayout->addWidget( TextSec2, 1, 0 );
	TextSec1 = new QLabel( tr( "&Owner:" ), GroupPass, "TextSec1" );
	GroupPassLayout->addWidget( TextSec1, 0, 0 );
	PassOwner = new QLineEdit( GroupPass, "PassOwner" );
	PassOwner->setEchoMode( QLineEdit::Password );
	TextSec1->setBuddy(PassOwner);
	GroupPassLayout->addWidget( PassOwner, 0, 1 );
	PassUser = new QLineEdit( GroupPass, "PassUser" );
	PassUser->setEchoMode( QLineEdit::Password );
	TextSec2->setBuddy(PassUser);
	GroupPassLayout->addWidget( PassUser, 1, 1 );
	tabSecurityLayout->addWidget( GroupPass );

	GroupSecSet = new Q3GroupBox( tr( "Settings" ), tabSecurity, "GroupSecSet" );
	GroupSecSet->setSizePolicy( QSizePolicy( (QSizePolicy::SizeType)5, (QSizePolicy::SizeType)7, 0, 0,
	                            GroupSecSet->sizePolicy().hasHeightForWidth() ) );
	GroupSecSet->setColumnLayout(0, Qt::Vertical );
	GroupSecSet->layout()->setSpacing( 5 );
	GroupSecSet->layout()->setMargin( 10 );
	GroupSecSetLayout = new Q3VBoxLayout( GroupSecSet->layout() );
	GroupSecSetLayout->setAlignment( Qt::AlignTop );
	PrintSec = new QCheckBox( tr( "Allow &Printing the Document" ), GroupSecSet, "PrintSec" );
	GroupSecSetLayout->addWidget( PrintSec );
	ModifySec = new QCheckBox( tr( "Allow &Changing the Document" ), GroupSecSet, "ModifySec" );
	GroupSecSetLayout->addWidget( ModifySec );
	CopySec = new QCheckBox( tr( "Allow Cop&ying Text and Graphics" ), GroupSecSet, "CopySec" );
	GroupSecSetLayout->addWidget( CopySec );
	AddSec = new QCheckBox( tr( "Allow Adding &Annotations and Fields" ), GroupSecSet, "AddSec" );
	GroupSecSetLayout->addWidget( AddSec );
	tabSecurityLayout->addWidget( GroupSecSet );
	insertTab( tabSecurity, tr( "S&ecurity" ) );

	tabColor = new QWidget( this, "tabColor" );
	tabColorLayout = new Q3VBoxLayout( tabColor, 11, 5, "tabColorLayout");
	ColorGroup = new Q3GroupBox( tr( "General" ), tabColor, "ColorGroup" );
	ColorGroup->setColumnLayout(0, Qt::Vertical );
	ColorGroup->layout()->setSpacing( 5 );
	ColorGroup->layout()->setMargin( 10 );
	ColorGroupLayout = new Q3HBoxLayout( ColorGroup->layout() );
	ColorGroupLayout->setAlignment( Qt::AlignTop );
	ColorText1 = new QLabel( tr( "Output &Intended For:" ), ColorGroup, "ColorText1" );
	ColorGroupLayout->addWidget( ColorText1 );
	OutCombo = new QComboBox( true, ColorGroup, "OutCombo" );
	OutCombo->insertItem( tr( "Screen / Web" ) );
	OutCombo->insertItem( tr( "Printer" ) );
	OutCombo->insertItem( tr( "Grayscale" ) );
	OutCombo->setEditable(false);
	ColorText1->setBuddy(OutCombo);
	ColorGroupLayout->addWidget( OutCombo );
	tabColorLayout->addWidget( ColorGroup );

	useSpot = new QCheckBox( tr( "Convert Spot Colors to Process Colors" ), tabColor, "useSpot" );
	tabColorLayout->addWidget( useSpot );

	overprintMode = new QCheckBox( tr( "Force Overprint Mode" ), tabColor, "overprintMode" );
	tabColorLayout->addWidget( overprintMode );

	UseLPI = new QCheckBox( tr( "&Use Custom Rendering Settings" ), tabColor, "UseLPI" );
	tabColorLayout->addWidget( UseLPI );
	LPIgroup = new Q3GroupBox( tr( "Rendering Settings" ), tabColor, "LPIgroup" );
	LPIgroup->setColumnLayout(0, Qt::Vertical );
	LPIgroup->layout()->setSpacing( 5 );
	LPIgroup->layout()->setMargin( 10 );
	LPIgroupLayout = new Q3GridLayout( LPIgroup->layout() );
	LPIgroupLayout->setAlignment( Qt::AlignTop );
	LPIcolor = new QComboBox( true, LPIgroup, "LPIcolor" );
	LPIcolor->setEditable(false);
	LPIgroupLayout->addWidget( LPIcolor, 0, 0 );
	textLPI1 = new QLabel( tr( "Fre&quency:" ), LPIgroup, "textLPI1" );
	LPIgroupLayout->addWidget( textLPI1, 0, 1 );
	LPIfreq = new QSpinBox( LPIgroup, "LPIfreq" );
	LPIfreq->setMinimum(10);
	LPIfreq->setMaximum(1000);
	textLPI1->setBuddy(LPIfreq);
	LPIgroupLayout->addWidget( LPIfreq, 0, 2 );
	textLPI2 = new QLabel( tr( "&Angle:" ), LPIgroup, "textLPI2" );
	LPIgroupLayout->addWidget( textLPI2, 1, 1 );
	LPIangle = new QSpinBox( LPIgroup, "LPIangle" );
	LPIangle->setSuffix( QString::fromUtf8(" °"));
	LPIangle->setMinimum(-180);
	LPIangle->setMaximum(180);
	textLPI2->setBuddy(LPIangle);
	LPIgroupLayout->addWidget( LPIangle, 1, 2 );
	textLPI3 = new QLabel( tr( "S&pot Function:" ), LPIgroup, "textLPI3" );
	LPIgroupLayout->addWidget( textLPI3, 2, 1 );
	LPIfunc = new QComboBox( true, LPIgroup, "LPIfunc" );
	LPIfunc->setEditable(false);
	LPIfunc->insertItem( tr( "Simple Dot" ) );
	LPIfunc->insertItem( tr( "Line" ) );
	LPIfunc->insertItem( tr( "Round" ) );
	LPIfunc->insertItem( tr( "Ellipse" ) );
	textLPI3->setBuddy(LPIfunc);
	LPIgroupLayout->addWidget( LPIfunc, 2, 2 );
	tabColorLayout->addWidget( LPIgroup );
	SelLPIcolor = LPIcolor->currentText();

	GroupBox9 = new Q3GroupBox( tr( "Solid Colors:" ), tabColor, "GroupBox9" );
	GroupBox9->setColumnLayout(0, Qt::Vertical );
	GroupBox9->layout()->setSpacing( 5 );
	GroupBox9->layout()->setMargin( 10 );
	GroupBox9Layout = new Q3GridLayout( GroupBox9->layout() );
	GroupBox9Layout->setAlignment( Qt::AlignTop );
	EmbedProfs = new QCheckBox( GroupBox9, "EmbedProfs" );
	EmbedProfs->setText( tr( "Use ICC Profile" ) );
	GroupBox9Layout->addMultiCellWidget( EmbedProfs, 0, 0, 0, 1 );
	ProfsTxt1 = new QLabel(GroupBox9, "ProfsTxt1");
	ProfsTxt1->setText( tr( "Profile:" ) );
	GroupBox9Layout->addWidget( ProfsTxt1, 1, 0 );
	ProfsTxt2 = new QLabel( GroupBox9, "ProfsTxt2_2" );
	ProfsTxt2->setText( tr( "Rendering-Intent:" ) );
	GroupBox9Layout->addWidget( ProfsTxt2, 1, 1 );
	SolidPr = new QComboBox(true, GroupBox9, "SolidPr" );
	SolidPr->setEditable(false);
	GroupBox9Layout->addWidget( SolidPr, 2, 0 );
	IntendS = new QComboBox( true, GroupBox9, "IntendS" );
	QString tmp_ip[] = { tr("Perceptual"), tr("Relative Colorimetric"), tr("Saturation"), tr("Absolute Colorimetric")};
	size_t ar_ip = sizeof(tmp_ip) / sizeof(*tmp_ip);
	for (uint a = 0; a < ar_ip; ++a)
		IntendS->insertItem(tmp_ip[a]);
	IntendS->setEditable(false);
	GroupBox9Layout->addWidget( IntendS, 2, 1 );
	tabColorLayout->addWidget( GroupBox9 );
	ProfsGroup = new Q3GroupBox( tr( "Images:" ), tabColor, "ProfsGroup" );
	ProfsGroup->setColumnLayout(0, Qt::Vertical );
	ProfsGroup->layout()->setSpacing( 5 );
	ProfsGroup->layout()->setMargin( 10 );
	ProfsGroupLayout = new Q3GridLayout( ProfsGroup->layout() );
	ProfsGroupLayout->setAlignment( Qt::AlignTop );
	EmbedProfs2 = new QCheckBox( tr( "Use ICC Profile" ), ProfsGroup, "EmbedProfs" );
	ProfsGroupLayout->addMultiCellWidget( EmbedProfs2, 0, 0, 0, 1 );
	NoEmbedded = new QCheckBox( ProfsGroup, "NoEmbedded" );
	NoEmbedded->setText( tr( "Don't use embedded ICC profiles" ) );
	ProfsGroupLayout->addMultiCellWidget( NoEmbedded, 1, 1, 0, 1 );
	ProfsTxt3 = new QLabel( ProfsGroup, "ProfsTxt3" );
	ProfsTxt3->setText( tr( "Profile:" ) );
	ProfsGroupLayout->addWidget( ProfsTxt3, 2, 0 );
	ProfsTxt4 = new QLabel( ProfsGroup, "ProfsTxt2_2" );
	ProfsTxt4->setText( tr( "Rendering-Intent:" ) );
	ProfsGroupLayout->addWidget( ProfsTxt4, 2, 1 );
	ImageP = new QComboBox( true, ProfsGroup, "ImageP" );
	ImageP->setEditable(false);
	ProfsGroupLayout->addWidget( ImageP, 3, 0 );
	IntendI = new QComboBox( true, ProfsGroup, "IntendS" );
	for (uint a = 0; a < ar_ip; ++a)
		IntendI->insertItem(tmp_ip[a]);
	IntendI->setEditable(false);
	ProfsGroupLayout->addWidget( IntendI, 3, 1 );
	tabColorLayout->addWidget( ProfsGroup );

	QSpacerItem* spacerCG = new QSpacerItem( 0, 0, QSizePolicy::Minimum, QSizePolicy::Expanding );
	tabColorLayout->addItem( spacerCG );
	insertTab( tabColor, tr( "C&olor" ) );

	tabPDFX = new QWidget( this, "tabPDFX" );
	tabPDFXLayout = new Q3VBoxLayout( tabPDFX, 10, 5, "tabPDFXLayout");

	MarkGroup = new Q3GroupBox( tabPDFX, "MarkGroup" );
	MarkGroup->setTitle( tr( "Printer Marks" ) );
	MarkGroup->setColumnLayout(0, Qt::Vertical );
	MarkGroup->layout()->setSpacing( 5 );
	MarkGroup->layout()->setMargin( 10 );
	MarkGroupLayout = new Q3GridLayout( MarkGroup->layout() );
	MarkGroupLayout->setAlignment( Qt::AlignTop );
	cropMarks = new QCheckBox( tr( "Crop Marks" ), MarkGroup, "cropMarks" );
	MarkGroupLayout->addWidget( cropMarks, 0, 0 );
	bleedMarks = new QCheckBox( tr( "Bleed Marks" ), MarkGroup, "bleedMarks" );
	MarkGroupLayout->addWidget( bleedMarks, 1, 0 );
	registrationMarks = new QCheckBox( tr( "Registration Marks" ), MarkGroup, "registrationMarks" );
	MarkGroupLayout->addWidget( registrationMarks, 2, 0 );
	colorMarks = new QCheckBox( tr( "Color Bars" ), MarkGroup, "colorMarks" );
	MarkGroupLayout->addMultiCellWidget( colorMarks, 0, 0, 1, 2 );
	docInfoMarks = new QCheckBox( tr( "Page Information" ), MarkGroup, "docInfoMarks" );
	MarkGroupLayout->addMultiCellWidget( docInfoMarks, 1, 1, 1, 2 );
	MarkTxt1 = new QLabel( MarkGroup, "MarkTxt1" );
	MarkTxt1->setText( tr( "Offset:" ) );
	MarkGroupLayout->addWidget( MarkTxt1, 2, 1 );
	markOffset = new ScrSpinBox( MarkGroup, precision );
	MarkGroupLayout->addWidget( markOffset, 2, 2 );
	markOffset->setSuffix( unit );
	markOffset->setMinimum(0);
	markOffset->setMaximum(3000 * unitRatio);
	tabPDFXLayout->addWidget( MarkGroup );

	BleedGroup = new Q3GroupBox( tabPDFX, "BleedGroup" );
	BleedGroup->setTitle( tr( "Bleed Settings" ) );
	BleedGroup->setColumnLayout(0, Qt::Vertical );
	BleedGroup->layout()->setSpacing( 5 );
	BleedGroup->layout()->setMargin( 10 );
	BleedGroupLayout = new Q3GridLayout( BleedGroup->layout() );
	BleedGroupLayout->setAlignment( Qt::AlignTop );
	BleedTxt1 = new QLabel( BleedGroup, "BleedTxt1" );
	BleedTxt1->setText( tr( "Top:" ) );
	BleedGroupLayout->addWidget( BleedTxt1, 0, 0 );
	BleedTop = new ScrSpinBox( BleedGroup, precision );
	BleedGroupLayout->addWidget( BleedTop, 0, 1 );
	BleedTxt2 = new QLabel( BleedGroup, "BleedTxt2" );
	BleedTxt2->setText( tr( "Bottom:" ) );
	BleedGroupLayout->addWidget( BleedTxt2, 1, 0 );
	BleedBottom = new ScrSpinBox( BleedGroup, precision );
	BleedGroupLayout->addWidget( BleedBottom, 1, 1 );
	BleedTxt3 = new QLabel( BleedGroup, "BleedTxt3" );
	BleedTxt3->setText( tr( "Left:" ) );
	BleedGroupLayout->addWidget( BleedTxt3, 0, 2 );
	BleedLeft = new ScrSpinBox( BleedGroup, precision );
	BleedGroupLayout->addWidget( BleedLeft, 0, 3 );
	BleedTxt4 = new QLabel( BleedGroup, "BleedTxt4" );
	BleedTxt4->setText( tr( "Right:" ) );
	BleedGroupLayout->addWidget( BleedTxt4, 1, 2 );
	BleedRight = new ScrSpinBox( BleedGroup, precision );
	BleedGroupLayout->addWidget( BleedRight, 1, 3 );
	docBleeds = new QCheckBox( tr( "Use Document Bleeds" ), BleedGroup, "docBleeds" );
	BleedGroupLayout->addMultiCellWidget( docBleeds, 2, 2, 0, 3 );
	tabPDFXLayout->addWidget( BleedGroup );

	X3Group = new Q3GroupBox( tabPDFX, "X3Group" );
	X3Group->setTitle( tr( "PDF/X-3 Output Intent" ) );
	X3Group->setColumnLayout(0, Qt::Vertical );
	X3Group->layout()->setSpacing( 5 );
	X3Group->layout()->setMargin( 10 );
	X3GroupLayout = new Q3GridLayout( X3Group->layout() );
	X3GroupLayout->setAlignment( Qt::AlignTop );
	PrintProfC = new QComboBox( true, X3Group, "PrintProfC" );
	PrintProfC->setEditable(false);
	X3GroupLayout->addWidget( PrintProfC, 0, 1 );
	InfoString = new QLineEdit( X3Group, "InfoString" );
	X3GroupLayout->addWidget( InfoString, 1, 1 );
	PDFX2 = new QLabel( InfoString, tr( "&Info String:" ), X3Group, "PDFX2" );
	X3GroupLayout->addWidget( PDFX2, 1, 0 );
	PDFX1 = new QLabel( PrintProfC, tr( "Output &Profile:" ), X3Group, "PDFX1" );
	X3GroupLayout->addWidget( PDFX1, 0, 0 );
	tabPDFXLayout->addWidget( X3Group );

	QSpacerItem* spacerPX2 = new QSpacerItem( 0, 0, QSizePolicy::Minimum, QSizePolicy::Expanding );
	tabPDFXLayout->addItem( spacerPX2 );

	insertTab( tabPDFX, tr( "Pre-Press" ) );
	BleedTop->setSuffix( unit );
	BleedTop->setMinimum(0);
	BleedTop->setMaximum(3000*unitRatio);
	BleedBottom->setSuffix( unit );
	BleedBottom->setMinimum(0);
	BleedBottom->setMaximum(3000*unitRatio);
	BleedRight->setSuffix( unit );
	BleedRight->setMinimum(0);
	BleedRight->setMaximum(3000*unitRatio);
	BleedLeft->setSuffix( unit );
	BleedLeft->setMinimum(0);
	BleedLeft->setMaximum(3000*unitRatio);

	restoreDefaults(Optionen, AllFonts, PDFXProfiles, DocFonts, Eff, unitIndex, PageH, PageB, doc, pdfExport);

	if (doc != 0 && exporting)
	{
		connect(EmbedFonts, SIGNAL(clicked()), this, SLOT(EmbedAll()));
		connect(AvailFlist, SIGNAL(clicked(Q3ListBoxItem*)), this, SLOT(SelAFont(Q3ListBoxItem*)));
		connect(EmbedList, SIGNAL(clicked(Q3ListBoxItem*)), this, SLOT(SelEFont(Q3ListBoxItem*)));
		connect(ToEmbed, SIGNAL(clicked()), this, SLOT(PutToEmbed()));
		connect(FromEmbed, SIGNAL(clicked()), this, SLOT(RemoveEmbed()));
		connect(OutlineFonts, SIGNAL(clicked()), this, SLOT(OutlineAll()));
		connect(OutlineList, SIGNAL(clicked(Q3ListBoxItem*)), this, SLOT(SelSFont(Q3ListBoxItem*)));
		connect(ToOutline, SIGNAL(clicked()), this, SLOT(PutToOutline()));
		connect(FromOutline, SIGNAL(clicked()), this, SLOT(RemoveOutline()));
		connect(PagePrev, SIGNAL(clicked()), this, SLOT(PagePr()));
		connect(Pages, SIGNAL(highlighted(int)), this, SLOT(SetPgEff(int)));
		connect(EffectType, SIGNAL(activated(int)), this, SLOT(SetEffOpts(int)));
		connect(EDirection_2_2, SIGNAL(activated(int)), this, SLOT(ValidDI(int)));
		connect(CheckBox10, SIGNAL(clicked()), this, SLOT(DoEffects()));
		connect(EonAllPg, SIGNAL(clicked()), this, SLOT(EffectOnAll()));
		connect(InfoString, SIGNAL(textChanged(const QString &)), this, SLOT(checkInfo()));
		connect(InfoString, SIGNAL(returnPressed()), this, SLOT(checkInfo()));
		connect(InfoString, SIGNAL(lostFocus()), this, SLOT(checkInfo()));
		connect(docBleeds, SIGNAL(clicked()), this, SLOT(doDocBleeds()));
		QToolTip::add( EmbedFonts, "<qt>" + tr( "Embed fonts into the PDF. Embedding the fonts will preserve the layout and appearance of your document." ) + "</qt>");
		QToolTip::add( CheckBox10, "<qt>" + tr( "Enables presentation effects when using Adobe&#174; Reader&#174; and other PDF viewers which support this in full screen mode." ) + "</qt>");
		QToolTip::add( PagePrev, "<qt>" + tr( "Show page previews of each page listed above." ) + "</qt>");
		QToolTip::add( PageTime, "<qt>" + tr( "Length of time the page is shown before the presentation starts on the selected page. Setting 0 will disable automatic page transition." ) + "</qt>" );
		QToolTip::add( EffectTime, "<qt>" + tr( "Length of time the effect runs. A shorter time will speed up the effect, a longer one will slow it down." ) + "</qt>" );
		QToolTip::add( EffectType, "<qt>" + tr( "Type of the display effect." ) + "</qt>" );
		QToolTip::add( EDirection, "<qt>" + tr( "Direction of the effect of moving lines for the split and blind effects." ) + "</qt>" );
		QToolTip::add( EDirection_2, "<qt>" + tr( "Starting position for the box and split effects." ) + "</qt>" );
		QToolTip::add( EDirection_2_2, "<qt>" + tr( "Direction of the glitter or wipe effects." ) + "</qt>" );
		QToolTip::add( EonAllPg, "<qt>" + tr( "Apply the selected effect to all pages." ) + "</qt>" );
		QToolTip::add(OutlineFonts, "<qt>" + tr("Convert all glyphs in the document to outlines.") + "</qt>");
		//Viewer tab
		QToolTip::add( singlePage, "<qt>" + tr( "Show the document in single page mode" ) + "</qt>" );
		QToolTip::add( continuousPages, "<qt>" + tr( "Show the document in single page mode with the pages displayed continuously end to end like a scroll" ) + "</qt>" );
		QToolTip::add( doublePageLeft, "<qt>" + tr( "Show the document with facing pages, starting with the first page displayed on the left" ) + "</qt>" );
		QToolTip::add( doublePageRight, "<qt>" + tr( "Show the document with facing pages, starting with the first page displayed on the right" ) + "</qt>" );
		QToolTip::add( useViewDefault, "<qt>" + tr( "Use the viewer's defaults or the user's preferences if set differently from the viewer defaults" ) + "</qt>" );
		QToolTip::add( useFullScreen, "<qt>" + tr( "Enables viewing the document in full screen" ) + "</qt>" );
		QToolTip::add( useBookmarks, "<qt>" + tr( "Display the bookmarks upon opening" ) + "</qt>" );
		QToolTip::add( useThumbnails, "<qt>" + tr( "Display the page thumbnails upon opening" ) + "</qt>" );
		QToolTip::add( useLayers2, "<qt>" + tr( "Forces the displaying of layers. Useful only for PDF 1.5+." ) + "</qt>" );
		QToolTip::add( hideToolBar, "<qt>" + tr( "Hides the Tool Bar which has selection and other editing capabilities" ) + "</qt>" );
		QToolTip::add( hideMenuBar, "<qt>" + tr( "Hides the Menu Bar for the viewer, the PDF will display in a plain window. " ) + "</qt>" );
		QToolTip::add( fitWindow, "<qt>" + tr( "Fit the document page or pages to the available space in the viewer window." ) + "</qt>" );
	}
	else
		docBleeds->hide();
	connect(AllPages, SIGNAL(toggled(bool)), this, SLOT(SelRange(bool)));
	connect(pageNrButton, SIGNAL(clicked()), this, SLOT(createPageNumberRange()));
	connect(DSColor, SIGNAL(clicked()), this, SLOT(DoDownsample()));
	connect(MirrorH, SIGNAL(clicked()), this, SLOT(PDFMirror()));
	connect(MirrorV, SIGNAL(clicked()), this, SLOT(PDFMirror()));
	connect(RotateDeg, SIGNAL(activated(int)), this, SLOT(Rotation(int)));
	connect(OutCombo, SIGNAL(activated(int)), this, SLOT(EnablePr(int)));
	connect(EmbedProfs, SIGNAL(clicked()), this, SLOT(EnablePG()));
	connect(EmbedProfs2, SIGNAL(clicked()), this, SLOT(EnablePGI()));
	connect(NoEmbedded, SIGNAL(clicked()), this, SLOT(EnablePGI2()));
	connect(PDFVersionCombo, SIGNAL(activated(int)), this, SLOT(EnablePDFX(int)));
	connect(Encry, SIGNAL(clicked()), this, SLOT(ToggleEncr()));
	connect(UseLPI, SIGNAL(clicked()), this, SLOT(EnableLPI2()));
	connect(LPIcolor, SIGNAL(activated(int)), this, SLOT(SelLPIcol(int)));
	//tooltips
	QToolTip::add( AllPages, "<qt>" + tr( "Export all pages to PDF" ) + "</qt>" );
	QToolTip::add( OnlySome, "<qt>" + tr( "Export a range of pages to PDF" ) );
	QToolTip::add( PageNr, "<qt>" + tr( "Insert a comma separated list of tokens where "
		                                    "a token can be * for all the pages, 1-5 for "
		                                    "a range of pages or a single page number.") + "</qt>" );

	QToolTip::add( PDFVersionCombo, "<qt>" + tr( "Determines the PDF compatibility.<br/>The default is <b>PDF 1.3</b> which gives the widest compatibility.<br/>Choose <b>PDF 1.4</b> if your file uses features such as transparency or you require 128 bit encryption.<br/><b>PDF 1.5</b> is necessary when you wish to preserve objects in separate layers within the PDF.<br/><b>PDF/X-3</b> is for exporting the PDF when you want color managed RGB for commercial printing and is selectable when you have activated color management. Use only when advised by your printer or in some cases printing to a 4 color digital color laser printer." ) + "</qt>");
	QToolTip::add( ComboBind, "<qt>" + tr( "Determines the binding of pages in the PDF. Unless you know you need to change it leave the default choice - Left." ) + "</qt>" );
	QToolTip::add( CheckBox1, "<qt>" + tr( "Generates thumbnails of each page in the PDF. Some viewers can use the thumbnails for navigation." ) + "</qt>" );
	QToolTip::add( Article, "<qt>" + tr( "Generate PDF Articles, which is useful for navigating linked articles in a PDF." ) + "</qt>" );
	QToolTip::add( useLayers, "<qt>" + tr( "Layers in your document are exported to the PDF Only available if PDF 1.5 is chosen." ) + "</qt>" );
	QToolTip::add( CheckBM, "<qt>" + tr( "Embed the bookmarks you created in your document. These are useful for navigating long PDF documents." ) + "</qt>" );
	QToolTip::add( Resolution, "<qt>" + tr( "Export resolution of text and vector graphics. This does not affect the resolution of bitmap images like photos." ) + "</qt>" );
	QToolTip::add( Compression, "<qt>" + tr( "Enables lossless compression of text and graphics. Unless you have a reason, leave this checked. This reduces PDF file size." ) + "</qt>" );
	QToolTip::add( CMethod, "<qt>" + tr( "Method of compression to use for images. Automatic allows Scribus to choose the best method. ZIP is lossless and good for images with solid colors. JPEG is better at creating smaller PDF files which have many photos (with slight image quality loss possible). Leave it set to Automatic unless you have a need for special compression options." ) + "</qt>");
	QToolTip::add( CQuality, "<qt>" + tr( "Compression quality levels for lossy compression methods: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%). Note that a quality level does not directly determine the size of the resulting image - both size and quality loss vary from image to image at any given quality level. Even with Maximum selected, there is always some quality loss with jpeg." ) + "</qt>");
	QToolTip::add( DSColor, "<qt>" + tr( "Limits the resolution of your bitmap images to the selected DPI. Images with a lower resolution will be left untouched. Leaving this unchecked will render them at their native resolution. Enabling this will increase memory usage and slow down export." ) + "</qt>" );
	QToolTip::add( ValC, "<qt>" + tr( "DPI (Dots Per Inch) for image export.") + "</qt>" );
	QToolTip::add( Encry, "<qt>" + tr( "Enable the security features in your exported PDF. If you selected PDF 1.3, the PDF will be protected by 40 bit encryption. If you selected PDF 1.4, the PDF will be protected by 128 bit encryption. Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations." ) + "</qt>" );
	QToolTip::add( PassOwner, "<qt>" + tr( "Choose a master password which enables or disables all the security features in your exported PDF" ) + "</qt>" );
	QToolTip::add( PassUser, "<qt>" + tr( "Choose a password for users to be able to read your PDF." ) + "</qt>" );
	QToolTip::add( PrintSec, "<qt>" + tr( "Allow printing of the PDF. If un-checked, printing is prevented. " ) + "</qt>" );
	QToolTip::add( ModifySec, "<qt>" + tr( "Allow modifying of the PDF. If un-checked, modifying the PDF is prevented." ) + "</qt>" );
	QToolTip::add( CopySec, "<qt>" + tr( "Allow copying of text or graphics from the PDF. If unchecked, text and graphics cannot be copied." ) + "</qt>" );
	QToolTip::add( AddSec, "<qt>" + tr( "Allow adding annotations and fields to the PDF. If unchecked, editing annotations and fields is prevented." ) + "</qt>" );
	QToolTip::add( OutCombo, "<qt>" + tr( "Color model for the output of your PDF. Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets. Choose Printer when printing to a true 4 color CMYK printer. Choose Grayscale when you want a grey scale PDF." ) + "</qt>" );
	QToolTip::add( UseLPI, "<qt>" + tr( "This is an advanced setting which is not enabled by default. This should only be enabled when specifically requested by your printer and they have given you the exact details needed. Otherwise, your exported PDF may not print properly and is truly not portable across systems." ) + "</qt>" );
	QToolTip::add( EmbedProfs, "<qt>" + tr( "Embed a color profile for solid colors" ) + "</qt>" );
	QToolTip::add( SolidPr, "<qt>" + tr( "Color profile for solid colors" ) + "</qt>" );
	QToolTip::add( IntendS, "<qt>" + tr( "Rendering intent for solid colors" ) + "</qt>" );
	QToolTip::add( EmbedProfs2, "<qt>" + tr( "Embed a color profile for images" ) + "</qt>" );
	QToolTip::add( NoEmbedded, "<qt>" + tr( "Do not use color profiles that are embedded in source images" ) + "</qt>" );
	QToolTip::add( ImageP, "<qt>" + tr( "Color profile for images" ) + "</qt>" );
	QToolTip::add( IntendI, "<qt>" + tr( "Rendering intent for images" ) + "</qt>" );
	QToolTip::add( MirrorH, "<qt>" + tr( "Mirror Page(s) horizontally" ) + "</qt>" );
	QToolTip::add( MirrorV, "<qt>" + tr( "Mirror Page(s) vertically" ) + "</qt>" );
	QToolTip::add( overprintMode, "<qt>"+ tr("Enables global Overprint Mode for this document, overrides object settings") + "<qt>");
	QToolTip::add( useSpot,"<qt>" + tr( "Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled." ) + "</qt>");
	QToolTip::add( ClipMarg, "<qt>" + tr( "Do not show objects outside the margins in the exported file" ) + "</qt>" );
	//PrePress tab 
	QToolTip::add( cropMarks, "<qt>" + tr( "Creates crop marks in the PDF indicating where the paper should be cut or trimmed after printing" ) + "</qt>" );
	QToolTip::add( bleedMarks, "<qt>" + tr( "This creates bleed marks which are indicated by  _ . _ and show the bleed limit" ) + "</qt>" );
	QToolTip::add( registrationMarks, "<qt>" + tr( "Add registration marks to each separation" ) + "</qt>" );
	QToolTip::add( colorMarks, "<qt>" + tr( "Add color calibration bars" ) + "</qt>" );
	QToolTip::add( docInfoMarks, "<qt>" + tr( "Add document information which includes the document title and page numbers" ) + "</qt>" );
	QToolTip::add( markOffset, "<qt>" + tr( "Indicate the distance offset for the registration marks" ) + "</qt>" );
	QToolTip::add( BleedTop, "<qt>" + tr( "Distance for bleed from the top of the physical page" ) + "</qt>" );
	QToolTip::add( BleedBottom, "<qt>" + tr( "Distance for bleed from the bottom of the physical page" ) + "</qt>" );
	QToolTip::add( BleedLeft, "<qt>" + tr( "Distance for bleed from the left of the physical page" ) + "</qt>" );
	QToolTip::add( BleedRight, "<qt>" + tr( "Distance for bleed from the right of the physical page" )  + "</qt>");
	QToolTip::add( docBleeds, "<qt>" + tr( "Use the existing bleed settings from the document preferences" ) + "</qt>" );
	QToolTip::add( PrintProfC, "<qt>" + tr( "Output profile for printing. If possible, get some guidance from your printer on profile selection." ) + "</qt>" );
	QToolTip::add( InfoString, "<qt>" + tr( "Mandatory string for PDF/X-3 or the PDF will fail PDF/X-3 conformance. We recommend you use the title of the document." ) + "</qt>" );
}

void TabPDFOptions::restoreDefaults(PDFOptions & Optionen,
									const SCFonts &AllFonts,
									const ProfilesL & PDFXProfiles,
									const QMap<QString, int> & DocFonts,
									const QList<PDFPresentationData> & Eff,
									int unitIndex, double PageH, double PageB,
									ScribusDoc * mdoc, bool exporting)
{
	AllPages->setChecked( true );
	PageNr->setEnabled(false);
	pageNrButton->setEnabled(false);
	RotateDeg->setCurrentItem(Opts.RotateDeg / 90);
	MirrorH->setOn(Opts.MirrorH);
	MirrorV->setOn(Opts.MirrorV);
	ClipMarg->setChecked(Opts.doClip);
	bool cmsUse = mdoc ? (ScCore->haveCMS() && mdoc->HasCMS) : false;
	if (cmsUse)
	{
		if (Opts.Version == PDFOptions::PDFVersion_X3)
			PDFVersionCombo->setCurrentItem(3);
	}
	else
		PDFVersionCombo->setCurrentItem(0);
	if (Opts.Version == PDFOptions::PDFVersion_13)
		PDFVersionCombo->setCurrentItem(0);
	if (Opts.Version == PDFOptions::PDFVersion_14)
		PDFVersionCombo->setCurrentItem(1);
	if (Opts.Version == PDFOptions::PDFVersion_15)
		PDFVersionCombo->setCurrentItem(2);
	ComboBind->setCurrentItem(Opts.Binding);
	CheckBox1->setChecked(Opts.Thumbnails);
	Article->setChecked(Opts.Articles);
	CheckBM->setChecked(Opts.Bookmarks);
	useLayers->setChecked(Opts.useLayers);
	if (Opts.Version == 15)
		useLayers->setEnabled(true);
	else
		useLayers->setEnabled(false);
	Resolution->setValue(Opts.Resolution);
	Compression->setChecked( Opts.Compress );
	CMethod->setCurrentItem(Opts.CompressMethod);
	CQuality->setCurrentItem(Opts.Quality);
	DSColor->setChecked(Opts.RecalcPic);
	ValC->setValue(Opts.PicRes);
	ValC->setEnabled(DSColor->isChecked() ? true : false);
	if (mdoc != 0 && exporting)
	{
//	Build a list of all Fonts used in Annotations;
		PageItem *pgit;
		for (int c = 0; c < doc->FrameItems.count(); ++c)
		{
			pgit = doc->FrameItems.at(c);
			if (((pgit->itemType() == PageItem::TextFrame) || (pgit->itemType() == PageItem::PathText)) && (pgit->isAnnotation()))
				AnnotationFonts.insert(pgit->itemText.defaultStyle().charStyle().font().replacementName(), "");
		}
		for (int c = 0; c < doc->MasterItems.count(); ++c)
		{
			pgit = doc->MasterItems.at(c);
			if (((pgit->itemType() == PageItem::TextFrame) || (pgit->itemType() == PageItem::PathText)) && (pgit->isAnnotation()))
				AnnotationFonts.insert(pgit->itemText.defaultStyle().charStyle().font().replacementName(), "");
		}
		for (int c = 0; c < doc->DocItems.count(); ++c)
		{
			pgit = doc->DocItems.at(c);
			if (((pgit->itemType() == PageItem::TextFrame) || (pgit->itemType() == PageItem::PathText)) && (pgit->isAnnotation()))
				AnnotationFonts.insert(pgit->itemText.defaultStyle().charStyle().font().replacementName(), "");
		}
		QMap<QString,int>::const_iterator it;
		AvailFlist->clear();
		for (it = DocFonts.constBegin(); it != DocFonts.constEnd(); ++it)
		{
			if (AllFonts[it.key()].isReplacement())
				AvailFlist->insertItem(loadIcon("font_subst16.png"), it.key());
			else if (AllFonts[it.key()].type() == ScFace::TYPE1)
				AvailFlist->insertItem(loadIcon("font_type1_16.png"), it.key());
			else if (AllFonts[it.key()].type() == ScFace::TTF)
				AvailFlist->insertItem(loadIcon("font_truetype16.png"), it.key());
			else if (AllFonts[it.key()].type() == ScFace::OTF)
				AvailFlist->insertItem(loadIcon("font_otf16.png"), it.key());
		}
		ToEmbed->setEnabled(false);
		FromEmbed->setEnabled(false);
		ToOutline->setEnabled(false);
		FromOutline->setEnabled(false);
		if ((Opts.EmbedList.count() == 0) && (Opts.SubsetList.count() == 0) && (Opts.firstUse))
			EmbedAll();
		else
		{
			EmbedList->clear();
			FontsToEmbed.clear();
			for (int fe = 0; fe < Opts.EmbedList.count(); ++fe)
			{
				EmbedList->insertItem(Opts.EmbedList[fe]);
				FontsToEmbed.append(Opts.EmbedList[fe]);
			}
			if (Opts.SubsetList.count() != 0)
			{
				OutlineList->clear();
				FontsToOutline.clear();
				for (int fe = 0; fe < Opts.SubsetList.count(); ++fe)
				{
					OutlineList->insertItem(Opts.SubsetList[fe]);
					FontsToOutline.append(Opts.SubsetList[fe]);
				}
			}
			QMap<QString, QString>::Iterator itAnn;
			for (itAnn = AnnotationFonts.begin(); itAnn != AnnotationFonts.end(); ++itAnn)
			{
				if (FontsToEmbed.contains(itAnn.key()) == 0)
				{
					EmbedList->insertItem(itAnn.key());
					EmbedList->item(EmbedList->count()-1)->setSelectable(false);
					FontsToEmbed.append(itAnn.key());
				}
				if (FontsToOutline.contains(itAnn.key()) != 0)
				{
					FontsToOutline.remove(itAnn.key());
					OutlineList->removeItem(OutlineList->index(OutlineList->findItem(itAnn.key())));
				}
			}
		}
		CheckBox10->setChecked(Opts.PresentMode);
		QString tmp;
		struct PDFPresentationData ef;
		Pages->clear();
		EffVal.clear();
		if (EffVal.count() != 0)
		{
			for (uint pg2 = 0; pg2 < doc->Pages->count(); ++pg2)
			{
				Pages->insertItem( tr("Page")+" "+tmp.setNum(pg2+1));
				if (static_cast<uint>(EffVal.count()-1) < pg2)
				{
					ef.pageEffectDuration = 1;
					ef.pageViewDuration = 1;
					ef.effectType = 0;
					ef.Dm = 0;
					ef.M = 0;
					ef.Di = 0;
					EffVal.append(ef);
				}
			}
		}
		else
		{
			for (uint pg = 0; pg < doc->Pages->count(); ++pg)
			{
				Pages->insertItem( tr("Page")+" "+tmp.setNum(pg+1));
				ef.pageEffectDuration = 1;
				ef.pageViewDuration = 1;
				ef.effectType = 0;
				ef.Dm = 0;
				ef.M = 0;
				ef.Di = 0;
				EffVal.append(ef);
			}
		}
		PagePrev->setChecked(false);
		PageTime->setValue(EffVal[0].pageViewDuration);
		EffectTime->setValue(EffVal[0].pageEffectDuration);
		bool df = true;
		if ((Opts.displayBookmarks) || (Opts.displayFullscreen) || (Opts.displayLayers) || (Opts.displayThumbs))
			df = false;
		if (df)
			useViewDefault->setChecked(df);
		useFullScreen->setChecked(Opts.displayFullscreen);
		useBookmarks->setChecked(Opts.displayBookmarks);
		useThumbnails->setChecked(Opts.displayThumbs);
		useLayers2->setChecked(Opts.displayLayers);
		hideToolBar->setChecked(Opts.hideToolBar);
		hideMenuBar->setChecked(Opts.hideMenuBar);
		fitWindow->setChecked(Opts.fitWindow);
		QMap<QString,QString>::Iterator itja;
		actionCombo->clear();
		actionCombo->insertItem( tr("No Script"));
		for (itja = doc->JavaScripts.begin(); itja != doc->JavaScripts.end(); ++itja)
			actionCombo->insertItem(itja.key());
		if (doc->JavaScripts.contains(Opts.openAction))
			actionCombo->setCurrentText(Opts.openAction);
		if (Opts.PageLayout == PDFOptions::SinglePage)
			singlePage->setChecked(true);
		else if (Opts.PageLayout == PDFOptions::OneColumn)
			continuousPages->setChecked(true);
		else if (Opts.PageLayout == PDFOptions::TwoColumnLeft)
			doublePageLeft->setChecked(true);
		else if (Opts.PageLayout == PDFOptions::TwoColumnRight)
			doublePageRight->setChecked(true);
		if (Opts.Version == 15)
			useLayers2->setEnabled(true);
		else
			useLayers2->setEnabled(false);
	}

	Encry->setChecked( Opts.Encrypt );
	PassOwner->setText(Opts.PassOwner);
	PassUser->setText(Opts.PassUser);
	PrintSec->setChecked( Opts.Permissions & 4 );
	ModifySec->setChecked( Opts.Permissions & 8 );
	CopySec->setChecked( Opts.Permissions & 16 );
	AddSec->setChecked( Opts.Permissions & 32 );
	if (!Encry->isChecked())
	{
		GroupSecSet->setEnabled(false);
		GroupPass->setEnabled(false);
	}

	if (Opts.UseRGB)
		OutCombo->setCurrentItem(0);
	else
	{
		if (Opts.isGrayscale)
			OutCombo->setCurrentItem(2);
		else
			OutCombo->setCurrentItem(1);
	}
	useSpot->setChecked(!Opts.UseSpotColors);
	overprintMode->setChecked(Opts.doOverprint);
	UseLPI->setChecked(Opts.UseLPI);
	QMap<QString,LPIData>::Iterator itlp;
	LPIcolor->clear();
	for (itlp = Opts.LPISettings.begin(); itlp != Opts.LPISettings.end(); ++itlp)
		LPIcolor->insertItem( itlp.key() );
	LPIcolor->setCurrentItem(0);

	LPIfreq->setValue(Opts.LPISettings[LPIcolor->currentText()].Frequency);
	LPIangle->setValue(Opts.LPISettings[LPIcolor->currentText()].Angle);
	LPIfunc->setCurrentItem(Opts.LPISettings[LPIcolor->currentText()].SpotFunc);
	EmbedProfs->setChecked(Opts.UseProfiles);
	EmbedProfs2->setChecked(Opts.UseProfiles2);
	NoEmbedded->setChecked(Opts.EmbeddedI);
	if ((Opts.UseRGB) || (Opts.isGrayscale))
	{
		ProfsGroup->setEnabled(false);
		GroupBox9->setEnabled(false);
		EnablePr(0);
	}
	else
		EnablePr(1);
	EnablePG();
	EnablePGI();
	QString tp = Opts.SolidProf;
	if (!ScCore->InputProfiles.contains(tp))
	{
		if (mdoc != 0 && exporting)
			tp = mdoc->CMSSettings.DefaultSolidColorRGBProfile;
		else
			tp = PrefsManager::instance()->appPrefs.DCMSset.DefaultSolidColorRGBProfile;
	}
	ProfilesL::Iterator itp;
	ProfilesL::Iterator itpend=ScCore->InputProfiles.end();
	SolidPr->clear();
	for (itp = ScCore->InputProfiles.begin(); itp != itpend; ++itp)
	{
		SolidPr->insertItem(itp.key());
		if (itp.key() == tp)
		{
			if (cmsUse)
				SolidPr->setCurrentItem(SolidPr->count()-1);
		}
	}
	if (cmsUse)
		IntendS->setCurrentItem(Opts.Intent);
	QString tp1 = Opts.ImageProf;
	if (!ScCore->InputProfiles.contains(tp1))
	{
		if (mdoc != 0 && exporting)
			tp1 = mdoc->CMSSettings.DefaultSolidColorRGBProfile;
		else
			tp1 = PrefsManager::instance()->appPrefs.DCMSset.DefaultSolidColorRGBProfile;
	}
	ProfilesL::Iterator itp2;
	ProfilesL::Iterator itp2end=ScCore->InputProfiles.end();
	ImageP->clear();
	for (itp2 = ScCore->InputProfiles.begin(); itp2 != itp2end; ++itp2)
	{
		ImageP->insertItem(itp2.key());
		if (itp2.key() == tp1)
		{
			if (cmsUse)
				ImageP->setCurrentItem(ImageP->count()-1);
		}
	}
	if (cmsUse)
		IntendI->setCurrentItem(Opts.Intent2);
	if (!cmsUse)
	{
		GroupBox9->hide();
		ProfsGroup->hide();
	}

	ProfilesL::const_iterator itp3;
	QString tp3 = Opts.PrintProf;
	if (!PDFXProfiles.contains(tp3))
	{
		if (mdoc != 0 && exporting)
			tp3 = mdoc->CMSSettings.DefaultPrinterProfile;
		else
			tp3 = PrefsManager::instance()->appPrefs.DCMSset.DefaultPrinterProfile;
	}
	PrintProfC->clear();
	for (itp3 = PDFXProfiles.constBegin(); itp3 != PDFXProfiles.constEnd(); ++itp3)
	{
		PrintProfC->insertItem(itp3.key());
		if (itp3.key() == tp3)
			PrintProfC->setCurrentItem(PrintProfC->count()-1);
	}
	InfoString->setText(Opts.Info);
	BleedTop->setValue(Opts.bleeds.Top*unitRatio);
	BleedBottom->setValue(Opts.bleeds.Bottom*unitRatio);
	BleedRight->setValue(Opts.bleeds.Right*unitRatio);
	BleedLeft->setValue(Opts.bleeds.Left*unitRatio);
	if (mdoc != 0 && exporting)
	{
		docBleeds->setChecked(Opts.useDocBleeds);
		doDocBleeds();
	}
	markOffset->setValue(Opts.markOffset*unitRatio);
	cropMarks->setChecked(Opts.cropMarks);
	bleedMarks->setChecked(Opts.bleedMarks);
	registrationMarks->setChecked(Opts.registrationMarks);
	colorMarks->setChecked(Opts.colorMarks);
	docInfoMarks->setChecked(Opts.docInfoMarks);
	if (!cmsUse)
		X3Group->setEnabled(false);
	if (cmsUse && (Opts.Version == 12) && (!PDFXProfiles.isEmpty()))
		EnablePDFX(3);
	else
		X3Group->setEnabled(false);
	if (mdoc != 0  && exporting)
	{
		PgSel = 0;
		Pages->setCurrentItem(0);
		SetEffOpts(0);
		Pages->setEnabled(false);
		Effects->setEnabled(false);
		PagePrev->setEnabled(false);
		DoEffects();
		if (CheckBox10->isChecked())
		{
			PageTime->setValue(EffVal[0].pageViewDuration);
			EffectTime->setValue(EffVal[0].pageEffectDuration);
			EffectType->setCurrentItem(EffVal[0].effectType);
			EDirection->setCurrentItem(EffVal[0].Dm);
			EDirection_2->setCurrentItem(EffVal[0].M);
			EDirection_2_2->setCurrentItem(EffVal[0].Di);
			SetEffOpts(EffectType->currentItem());
		}
		if (mdoc->currentPageLayout != 0)
		{
			BleedTxt3->setText( tr( "Inside:" ) );
			BleedTxt4->setText( tr( "Outside:" ) );
		}
		
	}
}

void TabPDFOptions::doDocBleeds()
{
	if (docBleeds->isChecked())
	{
		Opts.bleeds.Top = BleedTop->value() / unitRatio;
		Opts.bleeds.Bottom = BleedBottom->value() / unitRatio;
		Opts.bleeds.Right = BleedRight->value() / unitRatio;
		Opts.bleeds.Left = BleedLeft->value() / unitRatio;
		BleedTop->setValue(doc->bleeds.Top*unitRatio);
		BleedBottom->setValue(doc->bleeds.Bottom*unitRatio);
		BleedRight->setValue(doc->bleeds.Right*unitRatio);
		BleedLeft->setValue(doc->bleeds.Left*unitRatio);
		BleedTop->setEnabled(false);
		BleedBottom->setEnabled(false);
		BleedRight->setEnabled(false);
		BleedLeft->setEnabled(false);
	}
	else
	{
		BleedTop->setValue(Opts.bleeds.Top*unitRatio);
		BleedBottom->setValue(Opts.bleeds.Bottom*unitRatio);
		BleedRight->setValue(Opts.bleeds.Right*unitRatio);
		BleedLeft->setValue(Opts.bleeds.Left*unitRatio);
		BleedTop->setEnabled(true);
		BleedBottom->setEnabled(true);
		BleedRight->setEnabled(true);
		BleedLeft->setEnabled(true);
	}
}

void TabPDFOptions::checkInfo()
{
	if ((PDFVersionCombo->currentItem() == 3) && (InfoString->text().isEmpty()))
		emit noInfo();
	else
		emit hasInfo();
}

void TabPDFOptions::ToggleEncr()
{
	bool setter = Encry->isChecked() ? true : false;
	GroupSecSet->setEnabled(setter);
	GroupPass->setEnabled(setter);
}

void TabPDFOptions::enableCMS(bool enable)
{
	disconnect(PDFVersionCombo, SIGNAL(activated(int)), this, SLOT(EnablePDFX(int)));
	int a = PDFVersionCombo->currentItem();
	PDFVersionCombo->clear();
	PDFVersionCombo->insertItem("PDF 1.3 (Acrobat 4)");
	PDFVersionCombo->insertItem("PDF 1.4 (Acrobat 5)");
	PDFVersionCombo->insertItem("PDF 1.5 (Acrobat 6)");
	cms=enable;
	if (enable)
		PDFVersionCombo->insertItem("PDF/X-3");
	else
		a = qMin(a, 3);
	PDFVersionCombo->setCurrentItem(a);
	EnablePr(1);
	connect(PDFVersionCombo, SIGNAL(activated(int)), this, SLOT(EnablePDFX(int)));
}

void TabPDFOptions::EnablePDFX(int a)
{
	useLayers->setEnabled(a == 2);
	if (useLayers2)
		useLayers2->setEnabled(a == 2);
	if (a != 3)
	{
		X3Group->setEnabled(false);
		setTabEnabled(tabSecurity, true);
		OutCombo->setEnabled(true);
		EmbedProfs2->setEnabled(true);
		emit hasInfo();
		if (doc != 0 && pdfExport)
		{
			CheckBox10->setEnabled(true);
			EmbedFonts->setEnabled(true);
			if (EmbedList->count() != 0)
				FromEmbed->setEnabled(true);
			ToEmbed->setEnabled(true);
		}
		return;
	}
	disconnect(OutCombo, SIGNAL(activated(int)), this, SLOT(EnablePr(int)));
	OutCombo->setCurrentItem(1);
	OutCombo->setEnabled(false);
	EnablePr(1);
	EmbedProfs2->setChecked(true);
	EmbedProfs2->setEnabled(false);
	if (doc != 0 && pdfExport)
	{
//		EmbedFonts->setChecked(true);
		EmbedAll();
		CheckBox10->setChecked(false);
		CheckBox10->setEnabled(false);
//		EmbedFonts->setEnabled(false);
		FromEmbed->setEnabled(false);
		ToEmbed->setEnabled(false);
		if (InfoString->text().isEmpty())
			emit noInfo();
		else
			emit hasInfo();
	}
	EnablePGI();
	X3Group->setEnabled(true);
	setTabEnabled(tabSecurity, false);
	connect(OutCombo, SIGNAL(activated(int)), this, SLOT(EnablePr(int)));
}

void TabPDFOptions::EnablePGI()
{
	if (EmbedProfs2->isChecked())
	{
		NoEmbedded->setEnabled(true);
		bool setter = NoEmbedded->isChecked() ? true : false;
		ProfsTxt3->setEnabled(setter);
		ProfsTxt4->setEnabled(setter);
		ImageP->setEnabled(setter);
		IntendI->setEnabled(setter);
	}
	else
	{
		ProfsTxt3->setEnabled(false);
		ProfsTxt4->setEnabled(false);
		ImageP->setEnabled(false);
		IntendI->setEnabled(false);
		NoEmbedded->setEnabled(false);
	}
}

void TabPDFOptions::EnablePGI2()
{
	bool setter = NoEmbedded->isChecked() ? true : false;
	ProfsTxt3->setEnabled(setter);
	ProfsTxt4->setEnabled(setter);
	ImageP->setEnabled(setter);
	IntendI->setEnabled(setter);
}

void TabPDFOptions::EnablePG()
{
	bool setter = EmbedProfs->isChecked() ? true : false;
	ProfsTxt1->setEnabled(setter);
	ProfsTxt2->setEnabled(setter);
	SolidPr->setEnabled(setter);
	IntendS->setEnabled(setter);
}

void TabPDFOptions::EnablePr(int a)
{
	EnableLPI(a);
	bool setter = a == 1 ? true : false;
	GroupBox9->setEnabled(setter);
	ProfsGroup->setEnabled(setter);
}

void TabPDFOptions::EnableLPI(int a)
{
	if (a == 1)
	{
		QString tp = Opts.SolidProf;
		if (!ScCore->InputProfiles.contains(tp))
		{
			if (doc != 0)
				tp = doc->CMSSettings.DefaultSolidColorRGBProfile;
			else
				tp = PrefsManager::instance()->appPrefs.DCMSset.DefaultSolidColorRGBProfile;
		}
		SolidPr->clear();
		ProfilesL::Iterator itp;
		ProfilesL::Iterator itpend=ScCore->InputProfiles.end();
		for (itp = ScCore->InputProfiles.begin(); itp != itpend; ++itp)
		{
			SolidPr->insertItem(itp.key());
			if (itp.key() == tp)
			{
				if (cms)
					SolidPr->setCurrentItem(SolidPr->count()-1);
			}
		}
		if (cms)
			IntendS->setCurrentItem(Opts.Intent);
		QString tp1 = Opts.ImageProf;
		if (!ScCore->InputProfiles.contains(tp1))
		{
			if (doc != 0)
				tp1 = doc->CMSSettings.DefaultSolidColorRGBProfile;
			else
				tp1 = PrefsManager::instance()->appPrefs.DCMSset.DefaultSolidColorRGBProfile;
		}
		ImageP->clear();
		ProfilesL::Iterator itp2;
		ProfilesL::Iterator itp2end=ScCore->InputProfiles.end();
		for (itp2 = ScCore->InputProfiles.begin(); itp2 != itp2end; ++itp2)
		{
			ImageP->insertItem(itp2.key());
			if (itp2.key() == tp1)
			{
				if (cms)
					ImageP->setCurrentItem(ImageP->count()-1);
			}
		}
		if (cms)
			IntendI->setCurrentItem(Opts.Intent2);
		if (cms)
		{
			GroupBox9->show();
			ProfsGroup->show();
		}
		else
		{
			GroupBox9->hide();
			ProfsGroup->hide();
		}
		useSpot->show();
		overprintMode->show();
		UseLPI->show();
		if (UseLPI->isChecked())
			LPIgroup->show();
		else
			LPIgroup->hide();
	}
	else
	{
		useSpot->hide();
		overprintMode->hide();
		UseLPI->hide();
		LPIgroup->hide();
	}
}

void TabPDFOptions::EnableLPI2()
{
	if (UseLPI->isChecked())
		LPIgroup->show();
	else
		LPIgroup->hide();
}

void TabPDFOptions::SelLPIcol(int c)
{
	// XXX Optionen or Opts changed here
	Opts.LPISettings[SelLPIcolor].Frequency = LPIfreq->value();
	Opts.LPISettings[SelLPIcolor].Angle = LPIangle->value();
	Opts.LPISettings[SelLPIcolor].SpotFunc = LPIfunc->currentItem();
	LPIfreq->setValue(Opts.LPISettings[LPIcolor->text(c)].Frequency);
	LPIangle->setValue(Opts.LPISettings[LPIcolor->text(c)].Angle);
	LPIfunc->setCurrentItem(Opts.LPISettings[LPIcolor->text(c)].SpotFunc);
	SelLPIcolor = LPIcolor->text(c);
}

void TabPDFOptions::SelRange(bool e)
{
	bool setter = e ? false : true;
	PageNr->setEnabled( setter );
	pageNrButton->setEnabled( setter );
	if (setter == false)
		CheckBM->setChecked(false);
}

void TabPDFOptions::EffectOnAll()
{
	for (uint pg = 0; pg < doc->Pages->count(); ++pg)
	{
		EffVal[pg].pageViewDuration = PageTime->value();
		EffVal[pg].pageEffectDuration = EffectTime->value();
		EffVal[pg].effectType = EffectType->currentItem();
		EffVal[pg].Dm = EDirection->currentItem();
		EffVal[pg].M = EDirection_2->currentItem();
		EffVal[pg].Di = EDirection_2_2->currentItem();
	}
}

void TabPDFOptions::PDFMirror()
{
	// XXX Optionen or Opts changed here
	Opts.MirrorH = MirrorH->isOn();
	Opts.MirrorV = MirrorV->isOn();
}

void TabPDFOptions::Rotation( int value )
{
	Opts.RotateDeg = value * 90;
}

void TabPDFOptions::DoEffects()
{
	bool setter = CheckBox10->isChecked() ? true : false;
	Pages->setEnabled(setter);
	Effects->setEnabled(setter);
	PagePrev->setEnabled(setter);
}

void TabPDFOptions::ValidDI(int nr)
{
	// Qt4 if (!EDirection_2_2->listBox()->item(nr)->isSelectable())
	QStandardItem* si = dynamic_cast<QStandardItem*>(EDirection_2_2->view()->children().at(nr));
	if ( !(si && si->isSelectable()) )
		EDirection_2_2->setCurrentItem(0);
}

void TabPDFOptions::SetPgEff(int nr)
{
	if (nr < 0)
		return;
	EffVal[PgSel].pageViewDuration = PageTime->value();
	EffVal[PgSel].pageEffectDuration = EffectTime->value();
	EffVal[PgSel].effectType = EffectType->currentItem();
	EffVal[PgSel].Dm = EDirection->currentItem();
	EffVal[PgSel].M = EDirection_2->currentItem();
	EffVal[PgSel].Di = EDirection_2_2->currentItem();
	SetEffOpts(EffVal[nr].effectType);
	PageTime->setValue(EffVal[nr].pageViewDuration);
	EffectTime->setValue(EffVal[nr].pageEffectDuration);
	EffectType->setCurrentItem(EffVal[nr].effectType);
	EDirection->setCurrentItem(EffVal[nr].Dm);
	EDirection_2->setCurrentItem(EffVal[nr].M);
	EDirection_2_2->setCurrentItem(EffVal[nr].Di);
	PgSel = nr;
}

void TabPDFOptions::SetEffOpts(int nr)
{
	// Qt4
// 	EDirection_2_2->listBox()->item(2)->setSelectable(false);
// 	EDirection_2_2->listBox()->item(3)->setSelectable(false);
// 	EDirection_2_2->listBox()->item(4)->setSelectable(false);
	QStandardItem* si = dynamic_cast<QStandardItem*>(EDirection_2_2->view()->children().at(2));
	if (si) si->setSelectable(false);
	si = dynamic_cast<QStandardItem*>(EDirection_2_2->view()->children().at(3));
	if (si) si->setSelectable(false);
	si = dynamic_cast<QStandardItem*>(EDirection_2_2->view()->children().at(4));
	if (si) si->setSelectable(false);
	switch (nr)
	{
	case 0:
	case 3:
		EDirection->setEnabled(false);
		EDirection_2->setEnabled(false);
		EDirection_2_2->setEnabled(false);
		break;
	case 1:
		EDirection->setEnabled(true);
		EDirection_2->setEnabled(false);
		EDirection_2_2->setEnabled(false);
		break;
	case 2:
		EDirection->setEnabled(false);
		EDirection_2->setEnabled(true);
		EDirection_2_2->setEnabled(false);
		break;
	case 4:
	case 6:
		EDirection->setEnabled(false);
		EDirection_2->setEnabled(false);
		EDirection_2_2->setEnabled(true);
		if (nr == 6)
		{
			// Qt4
/*			EDirection_2_2->listBox()->item(2)->setSelectable(true);
			EDirection_2_2->listBox()->item(3)->setSelectable(true);*/
			si = dynamic_cast<QStandardItem*>(EDirection_2_2->view()->children().at(2));
			if (si) si->setSelectable(true);
			si = dynamic_cast<QStandardItem*>(EDirection_2_2->view()->children().at(3));
			if (si) si->setSelectable(true);
		}
		else {
			// Qt4
			// 			EDirection_2_2->listBox()->item(4)->setSelectable(true);
			si = dynamic_cast<QStandardItem*>(EDirection_2_2->view()->children().at(4));
			if (si) si->setSelectable(true);
		}
		break;
	case 5:
		EDirection->setEnabled(true);
		EDirection_2->setEnabled(true);
		EDirection_2_2->setEnabled(false);
		break;
	}
}

void TabPDFOptions::PagePr()
{
	disconnect(Pages, SIGNAL(highlighted(int)), this, SLOT(SetPgEff(int)));
	QString tmp;
	QPixmap pm;
	int ci = Pages->currentItem();
	if (PagePrev->isChecked())
	{
		for (uint pg = 0; pg < doc->Pages->count(); ++pg)
		{
			pm.convertFromImage(doc->view()->PageToPixmap(pg, 70));
			Pages->changeItem(pm, tr("Page")+" "+tmp.setNum(pg+1), pg);
		}
	}
	else
	{
		for (uint pg = 0; pg < doc->Pages->count(); ++pg)
			Pages->changeItem( tr("Page")+" "+tmp.setNum(pg+1), pg);
	}
	if (ci != -1)
	{
		PgSel = ci;
		Pages->setCurrentItem(ci);
	}
	else
	{
		PgSel = 0;
		Pages->clearSelection();
	}
	connect(Pages, SIGNAL(highlighted(int)), this, SLOT(SetPgEff(int)));
}

void TabPDFOptions::DoDownsample()
{
	if (DSColor->isChecked())
	{
		ValC->setEnabled(true);
		if (ValC->value() > Resolution->value())
			ValC->setValue(Resolution->value());
		ValC->setMaximum(Resolution->value());
		ValC->setMinimum(35);
	}
	else
		ValC->setEnabled(false);
}

void TabPDFOptions::RemoveEmbed()
{
	FontsToEmbed.remove(EmbedList->currentText());
	EmbedList->removeItem(EmbedList->currentItem());
	EmbedList->clearSelection();
	if (EmbedList->count() == 0)
	{
		FromEmbed->setEnabled(false);
		ToOutline->setEnabled(false);
	}
	else
	{
		if (!EmbedList->item(EmbedList->currentItem())->isSelectable())
		{
			FromEmbed->setEnabled(false);
			ToOutline->setEnabled(false);
		}
	}
}

void TabPDFOptions::PutToEmbed()
{
	if (EmbedList->count() != 0)
	{
		if (!AllFonts[AvailFlist->currentText()].subset())
		{
			if (EmbedList->findItem(AvailFlist->currentText()) == NULL)
			{
				FontsToEmbed.append(AvailFlist->currentText());
				EmbedList->insertItem(AvailFlist->currentText());
				if (AnnotationFonts.contains(AvailFlist->currentText()))
					EmbedList->item(EmbedList->count()-1)->setSelectable(false);
			}
		}
		else
		{
			if (OutlineList->count() != 0)
			{
				if (OutlineList->findItem(AvailFlist->currentText()) == NULL)
				{
					FontsToOutline.append(AvailFlist->currentText());
					OutlineList->insertItem(AvailFlist->currentText());
				}
			}
			else
			{
				FontsToOutline.append(AvailFlist->currentText());
				OutlineList->insertItem(AvailFlist->currentText());
			}
		}
	}
	else
	{
		if ((AllFonts[AvailFlist->currentText()].type() != ScFace::OTF) && (!AllFonts[AvailFlist->currentText()].subset()))
		{
			FontsToEmbed.append(AvailFlist->currentText());
			EmbedList->insertItem(AvailFlist->currentText());
			if (AnnotationFonts.contains(AvailFlist->currentText()))
				EmbedList->item(EmbedList->count()-1)->setSelectable(false);
		}
		else
		{
			if (OutlineList->count() != 0)
			{
				if (OutlineList->findItem(AvailFlist->currentText()) == NULL)
				{
					FontsToOutline.append(AvailFlist->currentText());
					OutlineList->insertItem(AvailFlist->currentText());
				}
			}
			else
			{
				FontsToOutline.append(AvailFlist->currentText());
				OutlineList->insertItem(AvailFlist->currentText());
			}
		}
	}
}

void TabPDFOptions::RemoveOutline()
{
	FontsToOutline.remove(OutlineList->currentText());
	if ((AllFonts[OutlineList->currentText()].type() != ScFace::OTF) && (!AllFonts[OutlineList->currentText()].subset()))
	{
		FontsToEmbed.append(OutlineList->currentText());
		EmbedList->insertItem(OutlineList->currentText());
	}
	OutlineList->removeItem(OutlineList->currentItem());
	OutlineList->clearSelection();
	if (OutlineList->count() == 0)
		FromOutline->setEnabled(false);
}

void TabPDFOptions::PutToOutline()
{
	if (OutlineList->count() != 0)
	{
		if (OutlineList->findItem(EmbedList->currentText()) == NULL)
		{
			FontsToOutline.append(EmbedList->currentText());
			OutlineList->insertItem(EmbedList->currentText());
		}
	}
	else
	{
		FontsToOutline.append(EmbedList->currentText());
		OutlineList->insertItem(EmbedList->currentText());
	}
	FontsToEmbed.remove(EmbedList->currentText());
	EmbedList->removeItem(EmbedList->currentItem());
	EmbedList->clearSelection();
	if (EmbedList->count() == 0)
	{
		FromEmbed->setEnabled(false);
		ToOutline->setEnabled(false);
	}
	else
	{
		if (!EmbedList->item(EmbedList->currentItem())->isSelectable())
		{
			FromEmbed->setEnabled(false);
			ToOutline->setEnabled(false);
		}
	}
}

void TabPDFOptions::SelAFont(Q3ListBoxItem *c)
{
	if (c != NULL)
	{
		FromEmbed->setEnabled(false);
		if (c->isSelectable())
			ToEmbed->setEnabled(true);
		ToOutline->setEnabled(false);
		FromOutline->setEnabled(false);
		EmbedList->clearSelection();
		OutlineList->clearSelection();
	}
}

void TabPDFOptions::SelEFont(Q3ListBoxItem *c)
{
	if (c != NULL)
	{
		if ((PDFVersionCombo->currentItem() != 3) && (c->isSelectable()))
			FromEmbed->setEnabled(true);
		else
			FromEmbed->setEnabled(false);
		ToEmbed->setEnabled(false);
		if (c->isSelectable())
			ToOutline->setEnabled(true);
		FromOutline->setEnabled(false);
		AvailFlist->clearSelection();
		OutlineList->clearSelection();
	}
}

void TabPDFOptions::SelSFont(Q3ListBoxItem *c)
{
	if (c != NULL)
	{
		if (PDFVersionCombo->currentItem() == 3)
		{
			if ((AllFonts[c->text()].type() == ScFace::OTF) || (AllFonts[c->text()].subset()))
				FromOutline->setEnabled(false);
			else
				FromOutline->setEnabled(true);
		}
		else
			FromOutline->setEnabled(true);
		ToOutline->setEnabled(false);
		ToEmbed->setEnabled(false);
		FromEmbed->setEnabled(false);
		EmbedList->clearSelection();
		AvailFlist->clearSelection();
	}
}

void TabPDFOptions::EmbedAll()
{
	EmbedList->clear();
	FontsToEmbed.clear();
	OutlineList->clear();
	FontsToOutline.clear();
	FromEmbed->setEnabled(false);
	ToEmbed->setEnabled(false);
	ToOutline->setEnabled(false);
	FromOutline->setEnabled(false);
	for (uint a=0; a < AvailFlist->count(); ++a)
	{
		if (AvailFlist->item(a)->isSelectable())
		{
			if (!AllFonts[AvailFlist->item(a)->text()].subset())
			{
				FontsToEmbed.append(AvailFlist->item(a)->text());
				EmbedList->insertItem(AvailFlist->item(a)->text());
				if (AnnotationFonts.contains(AvailFlist->item(a)->text()))
					EmbedList->item(EmbedList->count()-1)->setSelectable(false);
			}
			else
			{
				if (AnnotationFonts.contains(AvailFlist->item(a)->text()))
				{
					FontsToEmbed.append(AvailFlist->item(a)->text());
					EmbedList->insertItem(AvailFlist->item(a)->text());
					EmbedList->item(EmbedList->count()-1)->setSelectable(false);
				}
				else
				{
					FontsToOutline.append(AvailFlist->item(a)->text());
					OutlineList->insertItem(AvailFlist->item(a)->text());
				}
			}
		}
	}
}

void TabPDFOptions::OutlineAll()
{
	EmbedList->clear();
	FontsToEmbed.clear();
	OutlineList->clear();
	FontsToOutline.clear();
	FromEmbed->setEnabled(false);
	ToEmbed->setEnabled(false);
	ToOutline->setEnabled(false);
	FromOutline->setEnabled(false);
	for (uint a=0; a < AvailFlist->count(); ++a)
	{
		if (AvailFlist->item(a)->isSelectable())
		{
			if (AnnotationFonts.contains(AvailFlist->item(a)->text()))
			{
				FontsToEmbed.append(AvailFlist->item(a)->text());
				EmbedList->insertItem(AvailFlist->item(a)->text());
				EmbedList->item(EmbedList->count()-1)->setSelectable(false);
			}
			else
			{
				FontsToOutline.append(AvailFlist->item(a)->text());
				OutlineList->insertItem(AvailFlist->item(a)->text());
			}
		}
	}
}

void TabPDFOptions::unitChange(QString unit, int docUnitIndex, double invUnitConversion)
{
	double oldMin = -1, oldMax = -1, val = -1;
	int decimalsOld = -1;
	int decimals = unitGetPrecisionFromIndex(docUnitIndex);

	BleedBottom->setSuffix(unit);
	BleedTop->setSuffix(unit);
	BleedRight->setSuffix(unit);
	BleedLeft->setSuffix(unit);
	markOffset->setSuffix(unit);

	BleedBottom->getValues(&oldMin, &oldMax, &decimalsOld, &val);
	BleedBottom->setValues(oldMin * invUnitConversion, oldMax * invUnitConversion, decimals, val * invUnitConversion);
	BleedTop->getValues(&oldMin, &oldMax, &decimalsOld, &val);
	BleedTop->setValues(oldMin * invUnitConversion, oldMax * invUnitConversion, decimals, val * invUnitConversion);
	BleedRight->getValues(&oldMin, &oldMax, &decimalsOld, &val);
	BleedRight->setValues(oldMin * invUnitConversion, oldMax * invUnitConversion, decimals, val * invUnitConversion);
	BleedLeft->getValues(&oldMin, &oldMax, &decimalsOld, &val);
	BleedLeft->setValues(oldMin * invUnitConversion, oldMax * invUnitConversion, decimals, val * invUnitConversion);
	markOffset->getValues(&oldMin, &oldMax, &decimalsOld, &val);
	markOffset->setValues(oldMin * invUnitConversion, oldMax * invUnitConversion, decimals, val * invUnitConversion);
}

void TabPDFOptions::createPageNumberRange( )
{
	if (doc!=0)
	{
		CreateRange cr(PageNr->text(), doc->DocPages.count(), this);
		if (cr.exec())
		{
			CreateRangeData crData;
			cr.getCreateRangeData(crData);
			PageNr->setText(crData.pageRange);
			return;
		}
	}
	PageNr->setText(QString::null);
}
