#include "reformdoc.h"
#include "reformdoc.moc"
#include <qtooltip.h>
extern QPixmap loadIcon(QString nam);
extern double UmReFaktor;

ReformDoc::ReformDoc( QWidget* parent, double t, double l, double r, double b, double Pagebr, double Pageho, bool fp, bool fpe, int Einh, int ori, QString pageSize, int PageNr)
		: QDialog( parent, "r", true, 0 )
{
	einheit = Einh;
	QString units[] = { tr(" pt"), tr(" mm"), tr(" in"), tr(" p")};
	QString ein = units[Einh];
	int dp[] = {100, 1000, 10000, 100};
	int decimals = dp[Einh];
	Breite = Pagebr * UmReFaktor;
	Hoehe = Pageho * UmReFaktor;
	setCaption( tr( "Document Setup" ) );
	setIcon(loadIcon("AppIcon.png"));
	ReformDocLayout = new QVBoxLayout( this );
	ReformDocLayout->setSpacing( 6 );
	ReformDocLayout->setMargin( 10 );

	dsGroupBox7 = new QGroupBox( this, "GroupBox7" );
	dsGroupBox7->setTitle( tr( "Page Size" ) );
	dsGroupBox7->setColumnLayout(0, Qt::Vertical );
	dsGroupBox7->layout()->setSpacing( 0 );
	dsGroupBox7->layout()->setMargin( 0 );
	dsGroupBox7Layout = new QHBoxLayout( dsGroupBox7->layout() );
	dsGroupBox7Layout->setAlignment( Qt::AlignTop );
	dsGroupBox7Layout->setSpacing( 0 );
	dsGroupBox7Layout->setMargin( 10 );
	dsLayout4 = new QGridLayout;
	dsLayout4->setSpacing( 6 );
	dsLayout4->setMargin( 0 );

	sizedataQLabel = new QLabel( dsGroupBox7, "sizedataQLabel" );
	sizeQLabel = new QLabel( tr( "Size:" ), dsGroupBox7, "sizeQLabel" );
	sizedataQLabel->setText((pageSize!="")?pageSize:tr("Custom"));
	dsLayout4->addWidget( sizeQLabel, 0, 0 );
	dsLayout4->addWidget( sizedataQLabel, 0, 1 );
	orientationdataQLabel = new QLabel( dsGroupBox7, "orientationQComboBox" );
	orientationQLabel = new QLabel( tr( "Orientation:" ), dsGroupBox7, "orientationQLabel" );
	orientationdataQLabel->setText((ori==0)?tr("Portrait"):tr("Landscape"));
	dsLayout4->addWidget( orientationQLabel, 0, 2 );
	dsLayout4->addWidget( orientationdataQLabel, 0, 3 );

	QString dimvalue="%1 %2";
	widthdataQLabel = new QLabel( dimvalue.arg(Breite).arg(ein), dsGroupBox7, "widthdataQLabel" );
	widthQLabel = new QLabel( tr( "Width:" ), dsGroupBox7, "widthLabel" );
	dsLayout4->addWidget( widthQLabel, 1, 0 );
	dsLayout4->addWidget( widthdataQLabel, 1, 1 );

	heightdataQLabel = new QLabel( dimvalue.arg(Hoehe).arg(ein), dsGroupBox7, "heightdataQLabel" );
	heightQLabel = new QLabel( tr( "Height:" ), dsGroupBox7, "heightLabel" );
	dsLayout4->addWidget( heightQLabel, 1, 2 );
	dsLayout4->addWidget( heightdataQLabel, 1, 3 );

	dsGroupBox7Layout->addLayout( dsLayout4 );
	ReformDocLayout->addWidget( dsGroupBox7 );



	GroupBox7 = new QGroupBox( this, "GroupBox7" );
	GroupBox7->setTitle( tr( "Margin Guides" ) );
	GroupBox7->setColumnLayout(0, Qt::Vertical );
	GroupBox7->layout()->setSpacing( 0 );
	GroupBox7->layout()->setMargin( 0 );
	GroupBox7Layout = new QHBoxLayout( GroupBox7->layout() );
	GroupBox7Layout->setAlignment( Qt::AlignTop );
	GroupBox7Layout->setSpacing( 0 );
	GroupBox7Layout->setMargin( 10 );
	Layout4 = new QGridLayout;
	Layout4->setSpacing( 6 );
	Layout4->setMargin( 0 );

	TopR = new MSpinBox( GroupBox7, 4 );
	TopR->setSuffix( ein );
	TopR->setDecimals( decimals );
	TopR->setMaxValue(Hoehe);
	TopR->setValue(t * UmReFaktor);
	Layout4->addWidget( TopR, 0, 1 );
	TextLabel5 = new QLabel( tr( "&Top:" ), GroupBox7, "TextLabel5" );
	TextLabel5->setBuddy(TopR);
	Layout4->addWidget( TextLabel5, 0, 0 );

	LeftR = new MSpinBox( GroupBox7, 4 );
	LeftR->setSuffix( ein );
	LeftR->setDecimals( decimals );
	LeftR->setMaxValue(Breite);
	LeftR->setValue(l * UmReFaktor);
	Layout4->addWidget( LeftR, 0, 3 );
	Links = new QLabel( tr( "&Left:" ), GroupBox7, "Links" );
	Links->setBuddy(LeftR);
	Layout4->addWidget( Links, 0, 2 );

	BottomR = new MSpinBox( GroupBox7, 4 );
	BottomR->setSuffix( ein );
	BottomR->setDecimals( decimals );
	BottomR->setMaxValue(Hoehe);
	BottomR->setValue(b * UmReFaktor);
	Layout4->addWidget( BottomR, 1, 1 );
	TextLabel7 = new QLabel( tr( "&Bottom:" ), GroupBox7, "TextLabel7" );
	TextLabel7->setBuddy(BottomR);
	Layout4->addWidget( TextLabel7, 1, 0 );

	RightR = new MSpinBox( GroupBox7, 4 );
	RightR->setSuffix( ein );
	RightR->setDecimals( decimals );
	RightR->setMaxValue(Breite);
	RightR->setValue(r * UmReFaktor);
	Layout4->addWidget( RightR, 1, 3 );
	Rechts = new QLabel( tr( "&Right:" ), GroupBox7, "Rechts" );
	Rechts->setBuddy(RightR);
	Layout4->addWidget( Rechts, 1, 2 );

	Doppelseiten = new QCheckBox( tr( "&Facing Pages" ),GroupBox7, "Doppelseiten" );
	Doppelseiten->setChecked( fp );
	Layout4->addMultiCellWidget( Doppelseiten, 2, 2, 0, 1 );
	ErsteSeite = new QCheckBox( tr( "Left &Page First" ), GroupBox7, "n" );
	ErsteSeite->setChecked( fpe );
	Layout4->addMultiCellWidget( ErsteSeite, 2, 2, 2, 3 );
	if (!fp)
		ErsteSeite->setEnabled(false);
	setDS();

	TextLabel1_3 = new QLabel( tr( "F&irst Page Number:" ), GroupBox7, "TextLabel1_3" );
	Layout4->addMultiCellWidget( TextLabel1_3, 3, 3, 0, 1 );
	PgNr = new QSpinBox( GroupBox7, "PgNr" );
	PgNr->setMaxValue( 100000 );
	PgNr->setMinValue( 1 );
	PgNr->setValue(PageNr);
	Layout4->addWidget( PgNr, 3, 2, Qt::AlignRight );
	TextLabel1_3->setBuddy(PgNr);


	GroupBox7Layout->addLayout( Layout4 );
	ReformDocLayout->addWidget( GroupBox7 );
	Layout3 = new QHBoxLayout;
	Layout3->setSpacing( 6 );
	Layout3->setMargin( 0 );
	QSpacerItem* spacer = new QSpacerItem( 20, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
	Layout3->addItem( spacer );
	OKButton = new QPushButton(tr( "&OK" ), this, "OKButton" );
	OKButton->setDefault( true );
	Layout3->addWidget( OKButton );
	CancelB = new QPushButton( tr( "&Cancel" ), this, "CancelB" );
	CancelB->setAutoDefault( false );
	Layout3->addWidget( CancelB );
	ReformDocLayout->addLayout( Layout3 );
	RightR->setMaxValue(Breite - LeftR->value());
	LeftR->setMaxValue(Breite - RightR->value());
	TopR->setMaxValue(Hoehe - BottomR->value());
	BottomR->setMaxValue(Hoehe - TopR->value());
	//tooltips
	QToolTip::add( Doppelseiten, tr( "Enable single or spread based layout" ) );
	QToolTip::add( ErsteSeite, tr( "Make the first page the left page of the document" ) );
	QToolTip::add( TopR, tr( "Distance between the top margin guide and the edge of the page" ) );
	QToolTip::add( BottomR, tr( "Distance between the bottom margin guide and the edge of the page" ) );
	QToolTip::add( LeftR, tr( "Distance between the left margin guide and the edge of the page.\nIf Facing Pages is selected, this margin space can be used to achieve the correct margins for binding" ) );
	QToolTip::add( RightR, tr( "Distance between the right margin guide and the edge of the page.\nIf Facing Pages is selected, this margin space can be used to achieve the correct margins for binding" ) );

	// signals and slots connections
	connect( Doppelseiten, SIGNAL( clicked() ), this, SLOT( setDS() ) );
	connect( OKButton, SIGNAL( clicked() ), this, SLOT( accept() ) );
	connect( CancelB, SIGNAL( clicked() ), this, SLOT( reject() ) );
	connect(TopR, SIGNAL(valueChanged(int)), this, SLOT(setTop(int)));
	connect(BottomR, SIGNAL(valueChanged(int)), this, SLOT(setBottom(int)));
	connect(LeftR, SIGNAL(valueChanged(int)), this, SLOT(setLeft(int)));
	connect(RightR, SIGNAL(valueChanged(int)), this, SLOT(setRight(int)));
}

void ReformDoc::setTop(int )
{
	BottomR->setMaxValue(Hoehe - TopR->value());
}

void ReformDoc::setBottom(int )
{
	TopR->setMaxValue(Hoehe - BottomR->value());
}

void ReformDoc::setLeft(int )
{
	RightR->setMaxValue(Breite - LeftR->value());
}

void ReformDoc::setRight(int )
{
	LeftR->setMaxValue(Breite - RightR->value());
}

void ReformDoc::setDS()
{
	if (Doppelseiten->isChecked())
	{
		Links->setText( tr( "&Inside:" ) );
		Rechts->setText( tr( "&Outside:" ) );
		ErsteSeite->setEnabled(true);
	}
	else
	{
		Links->setText( tr( "&Left:" ) );
		Rechts->setText( tr( "&Right:" ) );
		ErsteSeite->setEnabled(false);
	}
}
