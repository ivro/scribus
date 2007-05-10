/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include <qdialog.h>
#include <qpushbutton.h>
#include <qlabel.h>
#include <qlineedit.h>
#include <qspinbox.h>
#include <qstring.h>
#include <qlayout.h>
#include <qtooltip.h>
#include <qcombobox.h>
#include <qcheckbox.h>
#include <qtooltip.h>
//Added by qt3to4:
#include <Q3HBoxLayout>
#include <Q3GridLayout>
#include <QPixmap>
#include <Q3VBoxLayout>

#include <QApplication>
#include "scconfig.h"
#include "mergedoc.h"
//#include "mergedoc.moc"
#include "commonstrings.h"
#include "customfdialog.h"
#include "fileloader.h"
#include "prefsfile.h"
#include "prefsmanager.h"
#include "sccombobox.h"
#include "scpaths.h"

#include <qcursor.h>

extern QPixmap loadIcon(QString nam);

MergeDoc::MergeDoc( QWidget* parent, bool importMasterPages, int targetDocPageCount, int currentPage ) : 
    QDialog( parent, "merge", true, 0 )
{
	masterPages = importMasterPages;
	setCaption( (masterPages) ? tr("Import Master Page") : tr( "Import Page(s)" ) );
	setIcon(loadIcon("AppIcon.png"));

	count = 0;
	dialogLayout = new Q3VBoxLayout( this, 10, 10, "dialogLayout"); 
	fromInfoLayout = new Q3GridLayout(1, 1, 5, "layout");
	fromDocData = new QLineEdit( this, "fromDocData" );
	fromDocLabel = new QLabel( fromDocData, tr( "&From Document:"), this, "fromDocLabel" );
	fromInfoLayout->addWidget( fromDocLabel, 0, 0 );
	fromInfoLayout->addWidget( fromDocData, 0, 1 );
	changeButton = new QPushButton( tr( "Chan&ge..." ), this, "changeButton" );
	changeButton->setAutoDefault( false );
	fromInfoLayout->addWidget( changeButton, 0, 2 );
	importPageLabel = new QLabel( tr( "&Import Page(s):" ), this, "importPageLabel" );
	fromInfoLayout->addWidget( importPageLabel, 1, 0 );
	if (masterPages)
	{
		importPageLabel->setText( tr("&Import Master Page") );
		masterPageNameData = new ScComboBox( false, this, "masterPageNameData" );
		masterPageNameData->setEnabled(false);
		importPageLabel->setBuddy( masterPageNameData );
		fromInfoLayout->addWidget( masterPageNameData, 1, 1 );
	}
	else
	{
		pageNumberData = new QLineEdit( this, "pageNumberData" );
		pageNumberData->setEnabled(false);
		importPageLabel->setBuddy( pageNumberData );
		QToolTip::add( pageNumberData, "<qt>" + tr( "Insert a comma separated list of tokens import where "
		                           "a token can be * for all the pages, 1-5 for "
		                           "a range of pages or a single page number.") + "</qt>");
		fromInfoLayout->addWidget( pageNumberData, 1, 1 );
		fromLabel = new QLabel(this, "fromLabel");
		fromLabel->setText( tr(" from 0"));
		fromInfoLayout->addWidget( fromLabel, 1, 2 );
		createPageData = new QCheckBox( this, "createPageData" );
		createPageData->setText( tr("Create Page(s)"));
		fromInfoLayout->addWidget( createPageData, 2, 0 );
		importWhereData = new ScComboBox( false, this, "positionCombo" );
		importWhereData->setEnabled(false);
		importWhereData->insertItem( tr("Before Page"));
		importWhereData->insertItem( tr("After Page"));
		importWhereData->insertItem( tr("At End"));
		importWhereData->setCurrentItem( 2 );
		fromInfoLayout->addWidget( importWhereData, 2, 1 );
		importWherePageData = new QSpinBox( 1, targetDocPageCount, 1, this, "pageSpin" );
		importWherePageData->setValue( currentPage );
		importWherePageData->setEnabled(false);
		fromInfoLayout->addWidget( importWherePageData, 2, 2 );
	}

	dialogLayout->addLayout( fromInfoLayout );
	importCancelLayout = new Q3HBoxLayout( 0, 0, 2, "importCancelLayout"); 
	QSpacerItem* spacer = new QSpacerItem( 41, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
	importCancelLayout->addItem( spacer );
	importButton = new QPushButton( tr( "&Import" ), this, "importButton" );
	importButton->setEnabled(false);
	importCancelLayout->addWidget( importButton );
	cancelButton = new QPushButton( CommonStrings::tr_Cancel, this, "cancelButton" );
	cancelButton->setDefault( true );
	importCancelLayout->addWidget( cancelButton );
	dialogLayout->addLayout( importCancelLayout );
	resize( QSize(350, 134).expandedTo(minimumSizeHint()) );

	connect( importButton, SIGNAL( clicked() ), this, SLOT( accept() ) );
	connect( cancelButton, SIGNAL( clicked() ), this, SLOT( reject() ) );
	connect( changeButton, SIGNAL( clicked() ), this, SLOT( changeFile() ) );
	if (!masterPages)
	{
		connect( importWhereData, SIGNAL( activated(int) ), this, SLOT( checkDestPageStatus(int) ) );
		connect( createPageData, SIGNAL( clicked() ), this, SLOT( enableCreateWidgets() ) );
	}
}

/*
 *  Destroys the object and frees any allocated resources
 */
MergeDoc::~MergeDoc()
{
    // no need to delete child widgets, Qt does it all for us
}

void MergeDoc::changeFile()
{
	QString fn;
	int dummy;
	count = 0;
	PrefsContext* dirs = PrefsManager::instance()->prefsFile->getContext("dirs");
	QString wdir = dirs->get("merge", ".");
	CustomFDialog *dia = new CustomFDialog(this, wdir, tr("Open"), tr("Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)"));
	if (!fromDocData->text().isEmpty())
		dia->setSelection(fromDocData->text());
	if (dia->exec() == QDialog::Accepted)
	{
		fn = dia->selectedFile();
		if (!fn.isEmpty())
		{
			dirs->set("merge", fn.left(fn.findRev("/")));
			qApp->changeOverrideCursor(QCursor(Qt::WaitCursor));
			FileLoader fl(fn);
			if (fl.TestFile() == -1)
			//TODO put in nice user warning
				return;
			QStringList masterPageNames;
			bool ret = false;
			if (masterPages)
				ret = fl.ReadPageCount(fn, &dummy, &count, masterPageNames);
			else
				ret = fl.ReadPageCount(fn, &count, &dummy, masterPageNames);
			qApp->changeOverrideCursor(QCursor(Qt::ArrowCursor));
			if ((ret) && (count != 0))
			{
				fromDocData->setText( QDir::convertSeparators(fn) );
				importButton->setEnabled(true);
				if (masterPages)
				{
					masterPageNameData->clear();
					masterPageNameData->setEnabled(true);
					masterPageNameData->insertStringList(masterPageNames);
				}
				else
				{
					pageNumberData->setEnabled(true);
				}
				if (!masterPages)
					fromLabel->setText( tr(" from %1").arg(count));
			}
		}
	}
	else
	{
		fromDocData->setText("");
		count = 0;
		importButton->setEnabled(false);
		if (masterPages)
		{
			masterPageNameData->clear();
			masterPageNameData->setEnabled(false);
		}
		else
		{
			pageNumberData->setEnabled(false);
		}
		if (!masterPages)
			fromLabel->setText( tr(" from %1").arg(count));
	}
	delete dia;
}

void MergeDoc::checkDestPageStatus(int positionComboSelection)
{
	importWherePageData->setDisabled( positionComboSelection == 2 );
}

void MergeDoc::enableCreateWidgets()
{
	if (createPageData->isChecked())
	{
		importWhereData->setEnabled(true);
		if (importWhereData->currentItem() != 2)
			importWherePageData->setEnabled(true);
	}
	else
	{
		importWhereData->setEnabled(false);
		importWherePageData->setEnabled(false);
	}
}

const QString MergeDoc::getFromDoc()
{
	return ScPaths::separatorsToSlashes(fromDocData->text());
}

const int MergeDoc::getMasterPageNameItem()
{
	return masterPageNameData->currentItem();
}

const QString MergeDoc::getMasterPageNameText()
{
	return masterPageNameData->currentText();
}

const int MergeDoc::getImportWhere()
{
	return importWhereData->currentItem();
}

const int MergeDoc::getImportWherePage()
{
	return importWherePageData->value();
}

const bool MergeDoc::getCreatePageChecked()
{
	return createPageData->isChecked();
}

const QString MergeDoc::getPageNumbers()
{
	return pageNumberData->text();
}

const int MergeDoc::getPageCounter()
{
	return count;
}
