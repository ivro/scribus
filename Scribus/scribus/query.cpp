/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "query.h"
//#include "query.moc"
//Added by qt3to4:
#include <QPixmap>
#include <Q3HBoxLayout>
#include <Q3VBoxLayout>
extern QPixmap loadIcon(QString nam);

#include <qtooltip.h>
#include <qdialog.h>
#include <qlayout.h>
#include <qlabel.h>
#include <qlineedit.h>
#include <qpushbutton.h>
#include "commonstrings.h"

Query::Query( QWidget* parent,  const char* name, bool modal, Qt::WFlags fl, QString text, QString titel )
		: QDialog( parent, name, modal, fl )
{
	if ( !name )
		setName( "Query" );
	setCaption( titel );
	setIcon(loadIcon("AppIcon.png"));
	queryLayout = new Q3VBoxLayout( this, 11, 6 );
	editLayout = new Q3HBoxLayout;
	editLayout->setSpacing( 6 );
	editLayout->setMargin( 0 );
	answerEdit = new QLineEdit( this, "answerEdit" );
	questionLabel = new QLabel( answerEdit, text, this, "questionLabel" );
//Qt4	questionLabel->setFrameShape( QLabel::MShape );
//Qt4	questionLabel->setFrameShadow( QLabel::MShadow );
	questionLabel->adjustSize();
	editLayout->addWidget( questionLabel );
	editLayout->addWidget( answerEdit );
	queryLayout->addLayout( editLayout );
	okCancelLayout = new Q3HBoxLayout;
	okCancelLayout->setSpacing( 6 );
	okCancelLayout->setMargin( 0 );
	QSpacerItem* spacer = new QSpacerItem( 20, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
	okCancelLayout->addItem( spacer );
	okButton = new QPushButton( CommonStrings::tr_OK, this, "okButton" );
	okButton->setDefault( true );
	okCancelLayout->addWidget( okButton );
	cancelButton = new QPushButton( CommonStrings::tr_Cancel, this, "cancelButton" );
	okCancelLayout->addWidget( cancelButton );
	queryLayout->addLayout( okCancelLayout );
	setMaximumSize(sizeHint());
	answerEdit->setFocus();

	// signals and slots connections
	connect( okButton, SIGNAL( clicked() ), this, SLOT( Leave() ) );
	connect( cancelButton, SIGNAL( clicked() ), this, SLOT( reject() ) );

	// tab order
	setTabOrder( answerEdit, okButton );
	setTabOrder( okButton, cancelButton );
}

void Query::Leave()
{
	if (answerEdit->text().isEmpty())
		return;
	else
		accept();
}

const QString Query::getEditText()
{
	return answerEdit->text();
}

void Query::setEditText(QString newText, bool setSelected)
{
	answerEdit->setText(newText);
	if (setSelected)
		answerEdit->selectAll();
}
