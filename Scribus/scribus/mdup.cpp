/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "mdup.h"
//#include "mdup.moc"

#include <qlabel.h>
#include <qlineedit.h>
#include <qpushbutton.h>
#include <qlayout.h>
#include <qvariant.h>
#include <qtooltip.h>
//Added by qt3to4:
#include <QPixmap>
#include <Q3GridLayout>
#include <Q3HBoxLayout>
#include <Q3VBoxLayout>
#include "units.h"
#include "commonstrings.h"

extern QPixmap loadIcon(QString nam);

Mdup::Mdup( QWidget* parent, double Dx, double Dy, int unitIndex )
		: QDialog( parent, "m", true, 0 )
{
	setCaption( tr( "Multiple Duplicate" ) );
	setIcon(loadIcon("AppIcon.png"));
	MdupLayout = new Q3VBoxLayout( this );
	MdupLayout->setSpacing( 5 );
	MdupLayout->setMargin( 10 );
	Layout4 = new Q3GridLayout(this);
	Layout4->setSpacing( 6 );
	Layout4->setMargin( 0 );
	Ncopies = new QSpinBox( this, "Ncopies" );
	Ncopies->setMaxValue( 100 );
	Ncopies->setMinValue( 1 );
	Ncopies->setValue(1);
	Layout4->addWidget( Ncopies, 0, 1 );
	ShiftH = new ScrSpinBox( -1000, 1000, this, 2 );
	ShiftH->setValue(Dx);
	Layout4->addWidget( ShiftH, 1, 1 );
	ShiftV = new ScrSpinBox( -1000, 1000, this, 2 );
	ShiftV->setValue(Dy);
	Layout4->addWidget( ShiftV, 2, 1 );
	TextLabel1 = new QLabel( Ncopies, tr( "&Number of Copies:" ), this, "TextLabel1" );
	Layout4->addWidget( TextLabel1, 0, 0 );
	TextLabel1_2 = new QLabel( ShiftH, tr( "&Horizontal Shift:" ), this, "TextLabel1_2" );
	Layout4->addWidget( TextLabel1_2, 1, 0 );
	TextLabel1_2_2 = new QLabel( ShiftV, tr( "&Vertical Shift:" ), this, "TextLabel1_2_2" );
	Layout4->addWidget( TextLabel1_2_2, 2, 0 );
	MdupLayout->addLayout( Layout4 );
	Layout3 = new Q3HBoxLayout;
	Layout3->setSpacing( 6 );
	Layout3->setMargin( 0 );
	QSpacerItem* spacer = new QSpacerItem( 20, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
	Layout3->addItem( spacer );
	PushButton12 = new QPushButton( CommonStrings::tr_OK, this, "PushButton12" );
	PushButton12->setDefault( true );
	Layout3->addWidget( PushButton12 );
	PushButton13 = new QPushButton( CommonStrings::tr_Cancel, this, "PushButton13" );
	Layout3->addWidget( PushButton13 );
	MdupLayout->addLayout( Layout3 );
	QWidget::setTabOrder ( Ncopies, ShiftH );
	QWidget::setTabOrder ( ShiftH, ShiftV );
	QWidget::setTabOrder ( ShiftV, PushButton12 );
	QWidget::setTabOrder ( PushButton12, PushButton13 );
	QWidget::setTabOrder ( PushButton13, Ncopies );
	Ncopies->setFocus();
	setMaximumSize(sizeHint());

	// signals and slots connections
	connect( PushButton12, SIGNAL( clicked() ), this, SLOT( accept() ) );
	connect( PushButton13, SIGNAL( clicked() ), this, SLOT( reject() ) );
}


