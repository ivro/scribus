/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "polyprops.h"
//#include "polyprops.moc"
#include "polygonwidget.h"
#include "commonstrings.h"
//Added by qt3to4:
#include <Q3VBoxLayout>
#include <QPixmap>
#include <Q3HBoxLayout>

extern QPixmap loadIcon(QString nam);

PolygonProps::PolygonProps(QWidget* parent, int polyC, int polyFd, double polyF, bool polyS, double polyR) : QDialog( parent, "poly", true, 0 )
{
	setCaption( tr( "Polygon Properties" ) );
	setIcon(loadIcon("AppIcon.png"));
	PolygonPropsLayout = new Q3VBoxLayout( this, 10, 5, "PolygonPropsLayout");
	polyWidget = new PolygonWidget(this, polyC, polyFd, polyF, polyS, polyR);
	PolygonPropsLayout->addWidget( polyWidget );
	Layout1 = new Q3HBoxLayout( 0, 0, 6, "Layout1_2");
	QSpacerItem* spacer_2 = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
	Layout1->addItem( spacer_2 );
	okButton = new QPushButton( this, "PushButton1" );
	okButton->setText( CommonStrings::tr_OK );
	okButton->setDefault( true );
	Layout1->addWidget( okButton );
	cancelButton = new QPushButton( this, "PushButton2" );
	cancelButton->setText( CommonStrings::tr_Cancel );
	Layout1->addWidget( cancelButton );
	PolygonPropsLayout->addLayout( Layout1 );
	// signals and slots connections
	connect(okButton, SIGNAL(clicked()), this, SLOT(accept()));
	connect(cancelButton, SIGNAL(clicked()), this, SLOT(reject()));
}

void PolygonProps::getValues(int* polyC, int* polyFd, double* polyF, bool* polyS, double* polyR)
{
	polyWidget->getValues(polyC, polyFd, polyF, polyS, polyR);
}
