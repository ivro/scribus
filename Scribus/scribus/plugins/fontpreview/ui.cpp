#include "ui.h"
#include "ui.moc"
#include <qvariant.h>
#include <qpushbutton.h>
#include <qlistbox.h>
#include <qlabel.h>
#include <qlayout.h>
#include <qtooltip.h>
#include <qwhatsthis.h>
#include <qstring.h>

extern QPixmap fontSamples(QString da, int s, QString ts, QColor back);
extern QPixmap loadIcon(QString nam);

/*
 *  Constructs a FontPreview as a child of 'parent', with the
 *  name 'name' and widget flags set to 'f'.
 *
 *  The dialog will by default be modeless, unless you set 'modal' to
 *  TRUE to construct a modal dialog.
 */
FontPreview::FontPreview( ScribusApp *carrier, QWidget* parent, const char* name, bool modal, WFlags fl )
	: QDialog( parent, name, modal, fl )
{
	this->carrier = carrier;
	if ( !name )
	setName( "FontPreview" );
	setIcon(loadIcon("AppIcon.png"));
	FontPreviewLayout = new QGridLayout( this, 1, 1, 11, 6, "FontPreviewLayout");
	layout6 = new QVBoxLayout( 0, 0, 6, "layout6");
	layout5 = new QHBoxLayout( 0, 0, 6, "layout5");
	fontList = new QListBox( this, "fontList" );
	layout5->addWidget( fontList );
	layout2 = new QVBoxLayout( 0, 0, 6, "layout2");
	layout1 = new QVBoxLayout( 0, 0, 6, "layout1");
	okButton = new QPushButton( this, "okButton" );
	layout1->addWidget( okButton );
	cancelButton = new QPushButton( this, "cancelButton" );
	layout1->addWidget( cancelButton );
	layout2->addLayout( layout1 );
	QSpacerItem* spacer = new QSpacerItem( 20, 20, QSizePolicy::Minimum, QSizePolicy::Expanding );
	layout2->addItem( spacer );
	layout5->addLayout( layout2 );
	layout6->addLayout( layout5 );
	fontPreview = new QLabel( this, "fontPreview" );
	fontPreview->setMinimumSize(QSize(400,90));
	layout6->addWidget( fontPreview );

	FontPreviewLayout->addLayout( layout6, 0, 0 );
	languageChange();
	resize( QSize(640, 480).expandedTo(minimumSizeHint()) );
	layout()->activate();
	clearWState( WState_Polished );
	SCFontsIterator fontIter(carrier->Prefs.AvailFonts);
	fontIter.toFirst();
	for ( ; fontIter.current(); ++fontIter)
	{
		if (fontIter.current()->UseFont)
			fontList->insertItem(fontIter.current()->SCName);
	} // for fontIter
	fontList->sort();

	QListBoxItem *item;
	if (carrier->DLLinput != "")
		item = fontList->findItem(carrier->DLLinput);
	else
	{
		if (carrier->doc->ActPage->SelItem.count() != 0)
			item = fontList->findItem(carrier->doc->CurrFont);
		else
			item = fontList->findItem(carrier->Prefs.DefFont);
	}
	if (item != 0)
	{
		fontList_changed(item);
		fontList->setCurrentItem(item);
	}

	// signals and slots connections
	connect( okButton, SIGNAL( clicked() ), this, SLOT(accept()));
	connect( cancelButton, SIGNAL( clicked() ), this, SLOT( reject() ) );
	connect( fontList, SIGNAL( selectionChanged(QListBoxItem*) ), this, SLOT( fontList_changed(QListBoxItem*) ) );
}

/**
Destroys the object and frees any allocated resources
 */
FontPreview::~FontPreview()
{
	// no need to delete child widgets, Qt does it all for us
}

/*
 *  Sets the strings of the subwidgets using the current
 *  language.
 */
void FontPreview::languageChange()
{
	setCaption( tr( "Fonts Preview" ) );
	okButton->setText( tr( "&OK" ) );
	okButton->setAccel( QKeySequence( tr( "Alt+O" ) ) );
	cancelButton->setText( tr( "&Cancel" ) );
	cancelButton->setAccel( QKeySequence( tr( "Alt+C" ) ) );
	QToolTip::add(okButton, tr("Append selected font into Style, Font menu"));
	QToolTip::add(cancelButton,tr("Leave preview"));
}

/*
Creates pixmap with font sample
*/
void FontPreview::fontList_changed( QListBoxItem *item )
{
	uint size = 16;
	QString t = tr("Woven silk pyjamas exchanged for blue quartz");
	QString da = carrier->Prefs.AvailFonts[item->text()]->Datei;
	QPixmap pixmap = fontSamples(da, size, t, paletteBackgroundColor());
	fontPreview->clear();
	if (!pixmap.isNull())
	fontPreview->setPixmap(pixmap);
}
