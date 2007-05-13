/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "javadocs.h"
//#include "javadocs.moc"
#include "query.h"
//Added by qt3to4:
#include <QPixmap>
#include <Q3HBoxLayout>
#include <Q3VBoxLayout>
#include "editor.h"
#include "scmessagebox.h"
#include "scribusdoc.h"
#include "page.h"
#include "commonstrings.h"
#include <qregexp.h>

extern QPixmap loadIcon(QString nam);

JavaDocs::JavaDocs(QWidget* parent, ScribusDoc *doc, ScribusView* vie)
		: QDialog( parent, "Javadocs", true, 0 )
{
	setCaption( tr( "Edit JavaScripts" ) );
	setIcon(loadIcon("AppIcon.png"));
	Doc = doc;
	View = vie;
	JavaDocsLayout = new Q3HBoxLayout( this, 11, 6, "JavaDocsLayout");

	Scripts = new Q3ListBox( this, "Scripts" );
	Scripts->setMinimumSize( QSize( 150, 200 ) );
	QMap<QString,QString>::Iterator it;
	for (it = Doc->JavaScripts.begin(); it != Doc->JavaScripts.end(); ++it)
		Scripts->insertItem(it.key());
	JavaDocsLayout->addWidget( Scripts );

	Layout1 = new Q3VBoxLayout( 0, 0, 6, "Layout1");

	EditScript = new QPushButton( tr( "&Edit..." ), this, "EditScript" );
	Layout1->addWidget( EditScript );

	AddScript = new QPushButton( tr( "&Add..." ), this, "AddScript" );
	Layout1->addWidget( AddScript );

	DeleteScript = new QPushButton( tr( "&Delete" ), this, "DeleteScript" );
	Layout1->addWidget( DeleteScript );
	QSpacerItem* spacer = new QSpacerItem( 0, 0, QSizePolicy::Minimum, QSizePolicy::Expanding );
	Layout1->addItem( spacer );

	ExitDia = new QPushButton( tr( "&Close" ), this, "ExitDia" );
	ExitDia->setDefault( true );
	Layout1->addWidget( ExitDia );
	if (Doc->JavaScripts.count() == 0)
	{
		EditScript->setEnabled(false);
		DeleteScript->setEnabled(false);
	}
	else
		Scripts->setCurrentItem(0);
	JavaDocsLayout->addLayout( Layout1 );
	connect(AddScript, SIGNAL(clicked()), this, SLOT(slotAdd()));
	connect(EditScript, SIGNAL(clicked()), this, SLOT(slotEdit()));
	connect(DeleteScript, SIGNAL(clicked()), this, SLOT(slotDelete()));
	connect(ExitDia, SIGNAL(clicked()), this, SLOT(accept()));
	connect( Scripts, SIGNAL( selected(Q3ListBoxItem*) ), this, SLOT( slotEdit() ) );
	QToolTip::add( AddScript, "<qt>" + tr( "Adds a new Script, predefines a function with the same name. If you want to use this script as an \"Open Action\" script be sure not to change the name of the function." ) + "</qt>" );
}

void JavaDocs::slotAdd()
{
	QString nam;
	Query *dia = new Query(this, "tt", 1, 0, tr("&New Script:"), tr("New Script"));
	dia->setEditText( tr("New Script"), false );
	if (dia->exec())
	{
		nam = dia->getEditText();
		nam.replace( QRegExp("[\\s\\/\\{\\[\\]\\}\\<\\>\\(\\)\\%]"), "_" );
		while (Doc->JavaScripts.contains(nam) || (nam.isEmpty()))
		{
			if (!dia->exec())
			{
				delete dia;
				return;
			}
			nam = dia->getEditText();
		}
		Editor* dia2 = new Editor(this, "", View);
		dia2->EditTex->setText("function "+nam+"()\n{\n}");
		if (dia2->exec())
		{
			EditScript->setEnabled(true);
			DeleteScript->setEnabled(true);
			Doc->JavaScripts[nam] = dia2->EditTex->text();
			Scripts->insertItem(nam);
			emit docChanged(false);
		}
		delete dia2;
	}
	delete dia;
}

void JavaDocs::slotEdit()
{
	QString nam = Scripts->currentText();
	Editor* dia2 = new Editor(this, Doc->JavaScripts[nam], View);
	if (dia2->exec())
	{
		Doc->JavaScripts[nam] = dia2->EditTex->text();
		emit docChanged(false);
	}
	delete dia2;
}

void JavaDocs::slotDelete()
{
	int exit = QMessageBox::warning(this,
	                               CommonStrings::trWarning,
	                               tr("Do you really want to delete this script?"),
	                               QMessageBox::Yes | QMessageBox::No);
	if (exit == QMessageBox::Yes)
	{
		QString nam = Scripts->currentText();
		Doc->JavaScripts.remove(nam);
		Scripts->clear();
		QMap<QString,QString>::Iterator it;
		for (it = Doc->JavaScripts.begin(); it != Doc->JavaScripts.end(); ++it)
			Scripts->insertItem(it.key());
		if (Doc->JavaScripts.count() == 0)
		{
			EditScript->setEnabled(false);
			DeleteScript->setEnabled(false);
		}
		else
			Scripts->setCurrentItem(0);
		emit docChanged(false);
	}
}
