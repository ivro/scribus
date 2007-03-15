/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "fontreplacedialog.h"

//#include "fontreplacedialog.moc"
#include <qvariant.h>
#include <qlabel.h>
#include <q3table.h>
#include <qcheckbox.h>
#include <qpushbutton.h>
#include <qlayout.h>
#include <qtooltip.h>
#include <q3whatsthis.h>
#include <qcombobox.h>
//Added by qt3to4:
#include <QPixmap>
#include <Q3HBoxLayout>
#include <Q3VBoxLayout>
#include <QCloseEvent>

#include "fontcombo.h"
#include "commonstrings.h"

extern QPixmap loadIcon(QString nam);

FontReplaceDialog::FontReplaceDialog( QWidget* parent, QMap<QString, QString> *RList) : QDialog( parent, "FontReplaceDialog", true, 0 )
{
	setCaption( tr( "Font Substitution" ) );
	setIcon(loadIcon("AppIcon.png"));
	ReplaceList = RList;
	FontReplaceDialogLayout = new Q3VBoxLayout( this, 10, 5, "FontReplaceDialogLayout");

	textLabel1 = new QLabel( this, "textLabel1" );
	textLabel1->setAlignment(Qt::AlignVCenter);
	textLabel1->setText( "<qt>" + tr("This document contains some fonts that are not installed on your system, please choose a suitable replacement for them. Cancel will stop the document from loading.") + "</qt>" );
	FontReplaceDialogLayout->addWidget( textLabel1 );

	replacementTable = new Q3Table( this, "replacementTable" );
	replacementTable->setNumCols( 2 );
	replacementTable->horizontalHeader()->setLabel( 0, tr( "Original Font" ) );
	replacementTable->horizontalHeader()->setLabel( 1, tr( "Substitution Font" ) );
	replacementTable->setSorting(false);
	replacementTable->setSelectionMode(Q3Table::NoSelection);
	replacementTable->setLeftMargin(0);
	replacementTable->verticalHeader()->hide();
	replacementTable->setNumRows(RList->count());
	int a = 0;
	QMap<QString,QString>::Iterator itfsu;
	for (itfsu = RList->begin(); itfsu != RList->end(); ++itfsu)
	{
		replacementTable->setText(a, 0, itfsu.key());
		FontCombo* item = new FontCombo(this);
		item->setCurrentText(itfsu.data());
		replacementTable->setCellWidget(a, 1, item);
		a++;
	}
	replacementTable->setColumnStretchable(0, true);
	replacementTable->setColumnStretchable(1, true);
	FontReplaceDialogLayout->addWidget( replacementTable );

	layout1 = new Q3HBoxLayout( 0, 0, 5, "layout1");
	stickyReplacements = new QCheckBox( this, "stickyReplacements" );
	stickyReplacements->setText( tr( "Make these substitutions permanent" ) );
	layout1->addWidget( stickyReplacements );
	spacer1 = new QSpacerItem( 71, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
	layout1->addItem( spacer1 );
	okButton = new QPushButton( CommonStrings::tr_OK, this, "okButton" );
	layout1->addWidget( okButton );
	cancelButton = new QPushButton( CommonStrings::tr_Cancel, this, "cancelButton" );
	layout1->addWidget( cancelButton );
	FontReplaceDialogLayout->addLayout( layout1 );
	resize( QSize(474, 247).expandedTo(minimumSizeHint()) );

	QToolTip::add( cancelButton, "<qt>" + tr( "Cancels these font substitutions and stops loading the document.") + "</qt>" );
	QToolTip::add( stickyReplacements, "<qt>" + tr( "Enabling this tells Scribus to use these replacements for missing fonts permanently in all future layouts. This can be reverted or changed in Edit > Preferences > Fonts.") + "</qt>" );
	QToolTip::add( okButton, "<qt>" + tr( "If you select OK, then save, these substitutions are made permanent in the document.") + "</qt>" );
	connect(okButton, SIGNAL(clicked()), this, SLOT(leaveOK()));
	connect(cancelButton, SIGNAL(clicked()), this, SLOT(reject()));
}

void FontReplaceDialog::closeEvent(QCloseEvent *closeEvent)
{
	leaveOK();
	closeEvent->accept();
}

void FontReplaceDialog::leaveOK()
{
	for (int a = 0; a < replacementTable->numRows(); ++a)
	{
		FontCombo* item = (FontCombo*)replacementTable->cellWidget(a, 1);
		ReplaceList->replace(replacementTable->text(a, 0), item->currentText());
	}
	if (okButton == sender())
		accept();
}
