/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "newtemp.h"
//#include "newtemp.moc"
#include "page.h"
//Added by qt3to4:
#include <QPixmap>
#include <Q3HBoxLayout>
#include <Q3VBoxLayout>
#include <QLabel>
extern QPixmap loadIcon(QString nam);

#include <qtooltip.h>
#include "pagestructs.h"
#include "scribusdoc.h"
#include "commonstrings.h"

NewTm::NewTm( QWidget* parent, QString text, QString titel, ScribusDoc *doc, const QString& answerText)
		: QDialog( parent, "newt", true, 0 )
{
	setCaption( titel );
	setIcon(loadIcon("AppIcon.png"));
	QueryLayout = new Q3VBoxLayout( this );
	QueryLayout->setSpacing( 5 );
	QueryLayout->setMargin( 5 );
	Layout2 = new Q3HBoxLayout;
	Layout2->setSpacing( 5 );
	Layout2->setMargin( 0 );
	Answer = new QLineEdit( this, "Answer" );
	Frage = new QLabel( Answer, text, this, "Frage" );
// Qt4 	Frage->setFrameShape( QLabel::MShape );
// Qt4 	Frage->setFrameShadow( QLabel::MShadow );
	Frage->adjustSize();
	Layout2->addWidget( Frage );
	Layout2->addWidget( Answer );
	QueryLayout->addLayout( Layout2 );
	if (doc->currentPageLayout != singlePage)
	{
		Layout3 = new Q3HBoxLayout;
		Layout3->setSpacing( 5 );
		Layout3->setMargin( 0 );
		Links = new QComboBox( true, this, "links" );
		QStringList::Iterator pNames;
		for(pNames = doc->pageSets[doc->currentPageLayout].pageNames.begin(); pNames != doc->pageSets[doc->currentPageLayout].pageNames.end(); ++pNames )
		{
			//Links->insertItem((*pNames));
			Links->insertItem(CommonStrings::translatePageSetLocString((*pNames)));
		}
		if (doc->currentPage()->LeftPg == 1)
			Links->setCurrentItem(0);
		else if (doc->currentPage()->LeftPg == 0)
			Links->setCurrentItem(Links->count()-1);
		else
			Links->setCurrentItem(doc->currentPage()->LeftPg-1);
		Links->setEditable(false);
		Layout3->addWidget( Links );
		QueryLayout->addLayout( Layout3 );
	}
	Layout1 = new Q3HBoxLayout;
	Layout1->setSpacing( 5 );
	Layout1->setMargin( 0 );
	QSpacerItem* spacer = new QSpacerItem( 20, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
	Layout1->addItem( spacer );
	PushButton1 = new QPushButton( CommonStrings::tr_OK, this, "PushButton1" );
	PushButton1->setDefault( true );
	Layout1->addWidget( PushButton1 );
	PushButton2 = new QPushButton( CommonStrings::tr_Cancel, this, "PushButton2" );
	Layout1->addWidget( PushButton2 );
	QueryLayout->addLayout( Layout1 );
	if (!answerText.isEmpty())
	{
		Answer->setText(answerText);
		Answer->setMinimumWidth(sizeHint().width());
		Answer->selectAll();
	}
	setMinimumSize(sizeHint());
	Answer->setFocus();

	// signals and slots connections
	connect( PushButton1, SIGNAL( clicked() ), this, SLOT( accept() ) );
	connect( PushButton2, SIGNAL( clicked() ), this, SLOT( reject() ) );

}

