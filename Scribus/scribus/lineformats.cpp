/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "lineformats.h"
//#include "lineformats.moc"

#include <qpainter.h>
//Added by qt3to4:
#include <Q3HBoxLayout>
#include <QPixmap>
#include <Q3VBoxLayout>

#include "customfdialog.h"
#include "fileloader.h"
#include "prefsmanager.h"
#include "prefsfile.h"
#include "multiline.h"
#include "commonstrings.h"
#include "scribusdoc.h"
#include "scmessagebox.h"
#include "page.h"
#include "sccolorengine.h"

extern QPixmap loadIcon(QString nam);

LineFormate::LineFormate( QWidget* parent, ScribusDoc *doc)
		: QDialog( parent, "Formate", true, 0)
{
	resize( 327, 260 );
	setCaption( tr( "Edit Line Styles" ) );
	setIcon(loadIcon("AppIcon.png"));
	Docu = doc;
	TempStyles = doc->MLineStyles;
	StilFormateLayout = new Q3HBoxLayout( this );
	StilFormateLayout->setSpacing( 5 );
	StilFormateLayout->setMargin( 10 );

	ListBox1 = new Q3ListBox( this, "ListBox1" );
	ListBox1->setMinimumSize( QSize( 200, 240 ) );
	StilFormateLayout->addWidget( ListBox1 );

	Layout15 = new Q3VBoxLayout;
	Layout15->setSpacing( 6 );
	Layout15->setMargin( 0 );

	LoadLS = new QPushButton( tr( "&Import" ), this, "LoadF" );
	Layout15->addWidget( LoadLS );

	NewB = new QPushButton( tr( "&New" ), this, "NewB" );
	Layout15->addWidget( NewB );

	EditB = new QPushButton( tr( "&Edit" ), this, "EditB" );
	EditB->setDefault( true );
	EditB->setEnabled(false);
	Layout15->addWidget( EditB );

	DublicateB = new QPushButton( tr( "D&uplicate" ), this, "DublicateB" );
	DublicateB->setEnabled(false);
	Layout15->addWidget( DublicateB );

	DeleteB = new QPushButton( tr( "&Delete" ), this, "DeleteB" );
	DeleteB->setEnabled(false);
	Layout15->addWidget( DeleteB );

	SaveB = new QPushButton( tr( "&Save" ), this, "SaveB" );
	Layout15->addWidget( SaveB );

	ExitB = new QPushButton( CommonStrings::tr_OK, this, "ExitB" );
	Layout15->addWidget( ExitB );

	CancelB = new QPushButton( CommonStrings::tr_Cancel, this, "CancelB" );
	Layout15->addWidget( CancelB );
	QSpacerItem* spacer = new QSpacerItem( 0, 0, QSizePolicy::Minimum, QSizePolicy::Expanding );
	Layout15->addItem( spacer );
	StilFormateLayout->addLayout( Layout15 );

	// signals and slots connections
	connect(CancelB, SIGNAL(clicked()), this, SLOT(reject()));
	connect(SaveB, SIGNAL(clicked()), this, SLOT(saveIt()));
	connect(ExitB, SIGNAL(clicked()), this, SLOT(accept()));
	connect(LoadLS, SIGNAL(clicked()), this, SLOT(loadLStyles()));
	connect(EditB, SIGNAL(clicked()), this, SLOT(editFormat()));
	connect(NewB, SIGNAL(clicked()), this, SLOT(neuesFormat()));
	connect(DublicateB, SIGNAL(clicked()), this, SLOT(dupFormat()));
	connect(DeleteB, SIGNAL(clicked()), this, SLOT(deleteFormat()));
	connect(ListBox1, SIGNAL(highlighted(Q3ListBoxItem*)), this, SLOT(selFormat(Q3ListBoxItem*)));
	connect( ListBox1, SIGNAL( selected(Q3ListBoxItem*) ), this, SLOT( selEditFormat(Q3ListBoxItem*) ) );
	if (ListBox1->count() > 0)
    	sFnumber = TempStyles.begin().key();
	else
		sFnumber = "";
	Replacement.clear();
	UpdateFList();
}

void LineFormate::saveIt()
{
	emit saveStyle(this);
}

void LineFormate::selFormat(Q3ListBoxItem *c)
{
	sFnumber = c->text();
	EditB->setEnabled(true);
	DublicateB->setEnabled(true);
	DeleteB->setEnabled(true);
}

void LineFormate::selEditFormat(Q3ListBoxItem *c)
{
	sFnumber = c->text();
	EditB->setEnabled(true);
	DublicateB->setEnabled(true);
	DeleteB->setEnabled(true);
	editFormat();
}

void LineFormate::dupFormat()
{
	multiLine ml;
	ml = TempStyles[sFnumber];
	MultiLine* dia = new MultiLine(this, Docu, ml, tr("Copy of %1").arg(sFnumber), &TempStyles);
	if (dia->exec())
	{
		TempStyles.insert(dia->SName->text(), dia->TempVorl);
		sFnumber = dia->SName->text();
	}
	delete dia;
	UpdateFList();
}

void LineFormate::neuesFormat()
{
	int selectedIndex=ListBox1->currentItem();
	int topIndex=ListBox1->topItem();
	struct SingleLine sl;
/*	sl.Color = "Black";
	sl.Shade = 100;
	sl.Dash = SolidLine;
	sl.LineEnd = FlatCap;
	sl.LineJoin = MiterJoin;
	sl.Width = 1.0; */
	sl.Color = Docu->toolSettings.dPenLine;
	sl.Shade = Docu->toolSettings.dShadeLine;
	sl.Dash = Qt::SolidLine;//Docu->toolSettings.;
	sl.LineEnd = Qt::FlatCap;//Docu->toolSettings.;
	sl.LineJoin = Docu->toolSettings.dLstyleLine;
	sl.Width = Docu->toolSettings.dWidthLine;
	multiLine ml;
	ml.push_back(sl);
	MultiLine* dia = new MultiLine(this, Docu, ml, tr("New Style"), &TempStyles);
	if (dia->exec())
	{
		TempStyles.insert(dia->SName->text(), dia->TempVorl);
		sFnumber = dia->SName->text();
	}
	UpdateFList();
	ListBox1->setSelected(selectedIndex, true);
	ListBox1->setTopItem(topIndex);
}

void LineFormate::editFormat()
{
	int selectedIndex=ListBox1->currentItem();
	int topIndex=ListBox1->topItem();
	MultiLine* dia = new MultiLine(this, Docu, TempStyles[sFnumber], sFnumber, &TempStyles);
	if (dia->exec())
	{
		if (sFnumber != dia->SName->text())
		{
			Replacement.insert(sFnumber, dia->SName->text());
			TempStyles.remove(sFnumber);
			TempStyles.insert(dia->SName->text(), dia->TempVorl);
			sFnumber = dia->SName->text();
		}
		else
			TempStyles[sFnumber] = dia->TempVorl;
	}
	delete dia;
	UpdateFList();
	ListBox1->setSelected(selectedIndex, true);
	ListBox1->setTopItem(topIndex);
}

void LineFormate::deleteFormat()
{
	int selectedIndex=ListBox1->currentItem();
	int topIndex=ListBox1->topItem();
	int exit = QMessageBox::warning(this,
	                              CommonStrings::trWarning,
	                              tr("Do you really want to delete this style?"),
	                              QMessageBox::Yes | QMessageBox::No);
	/* PFJ - 29.02.04 - Changed from 1 to QMessageBox::Yes */
	/* FS - 12.05.04 the 1 is correct in this version of QMessageBox, it returns the Nr of the clicked Button either 0 or 1 or 2 */
	if (exit == QMessageBox::Yes)
	{
		Replacement.insert(sFnumber, "");
		TempStyles.remove(sFnumber);
		UpdateFList();
		int listBoxCount=ListBox1->count();
		if (listBoxCount>selectedIndex)
			ListBox1->setSelected(selectedIndex, true);
		if (listBoxCount>topIndex)
			ListBox1->setTopItem(topIndex);
	}
}

void LineFormate::loadLStyles()
{
	QString fileName;
	PrefsContext* dirs = PrefsManager::instance()->prefsFile->getContext("dirs");
	QString wdir = dirs->get("lineformats", ".");
	CustomFDialog dia(this, wdir, tr("Open"), tr("Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)"));
	if (dia.exec() == QDialog::Accepted)
		fileName = dia.selectedFile();
	else
		return;
	if (!fileName.isEmpty())
	{
		dirs->set("lineformats", fileName.left(fileName.findRev("/")));
		FileLoader fl(fileName);
		if (fl.TestFile() == -1)
		//TODO put in nice user warning
			return;
		if (fl.ReadLineStyles(fileName, &TempStyles))
			UpdateFList();
	}
}

void LineFormate::UpdateFList()
{
	disconnect(ListBox1, SIGNAL(highlighted(Q3ListBoxItem*)), this, SLOT(selFormat(Q3ListBoxItem*)));
	disconnect( ListBox1, SIGNAL( selected(Q3ListBoxItem*) ), this, SLOT( selEditFormat(Q3ListBoxItem*) ) );
	ListBox1->clear();
	QMap<QString,multiLine>::Iterator it;
	for (it = TempStyles.begin(); it != TempStyles.end(); ++it)
		ListBox1->insertItem( new LineFormateItem(Docu, it.data(), it.key()) );
	if (ListBox1->count() > 0)
		ListBox1->setSelected(ListBox1->findItem(sFnumber), true);
	bool setter = ListBox1->count() == 0 ? true : false;
	if (setter == true)
		sFnumber = "";
	DublicateB->setEnabled(!setter);
	EditB->setEnabled(!setter);
	DeleteB->setEnabled(!setter);
	ListBox1->sort( true );
	connect(ListBox1, SIGNAL(highlighted(Q3ListBoxItem*)), this, SLOT(selFormat(Q3ListBoxItem*)));
	connect( ListBox1, SIGNAL( selected(Q3ListBoxItem*) ), this, SLOT( selEditFormat(Q3ListBoxItem*) ) );
}

LineFormateItem::LineFormateItem(ScribusDoc* Doc, const multiLine& MultiLine, const QString& Text) : ScListBoxPixmap<37, 37>()
{
	setText(Text);
	mLine = MultiLine;
	doc = Doc;
}

void LineFormateItem::redraw(void)
{
	QColor tmpf;
	pmap->fill(Qt::white);
	QPainter p;
	p.begin(pmap.get());
	for (int its = mLine.size()-1; its > -1; its--)
	{
		const ScColor& col = doc->PageColors[mLine[its].Color];
		tmpf = ScColorEngine::getDisplayColor(col, doc, mLine[its].Shade);
		p.setPen(QPen(tmpf,
						qMax(static_cast<int>(mLine[its].Width), 1),
						static_cast<Qt::PenStyle>(mLine[its].Dash),
						static_cast<Qt::PenCapStyle>(mLine[its].LineEnd),
						static_cast<Qt::PenJoinStyle>(mLine[its].LineJoin)));
		p.drawLine(0, 18, 37, 18);
	}
	p.end();
}
