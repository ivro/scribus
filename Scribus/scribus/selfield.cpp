/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include "scfonts.h"
#include "selfield.h"
//#include "selfield.moc"
#include <qstringlist.h>
//Added by qt3to4:
#include <QPixmap>
#include <Q3HBoxLayout>
#include <Q3VBoxLayout>
#include <QLabel>

#include "commonstrings.h"

extern QPixmap loadIcon(QString nam);

SelectFields::SelectFields( QWidget* parent, QString Felder, QString Own, ScribusDoc *Doc, int Art )
		: QDialog( parent, "sef", true, 0 )
{
	setCaption( tr( "Select Fields" ) );
	setIcon(loadIcon("AppIcon.png"));
	FTyp = Art;
	SelectFieldsLayout = new Q3VBoxLayout( this, 11, 6, "SelectFieldsLayout");
	Layout5 = new Q3HBoxLayout( 0, 0, 6, "Layout5");
	Layout1 = new Q3VBoxLayout( 0, 0, 6, "Layout1");

	Text1 = new QLabel( tr( "Available Fields" ), this, "Text1" );
	Layout1->addWidget( Text1 );
	AvailFields = new Q3ListBox( this, "AvailFields" );
	AvailFields->setMinimumSize( QSize( 130, 180 ) );
	for (uint se = 0; se < Doc->Items->count(); ++se)
	{
		PageItem* item = Doc->Items->at(se);
		if (Art < 2)
		{
			if ((item->isAnnotation()) && (item->annotation().Type() > 1))
				AvailFields->insertItem(item->itemName());
		}
		else
		{
			if ((item->isAnnotation()) && (item->annotation().Type() == Art) && (item->itemName() != Own))
				AvailFields->insertItem(item->itemName());
		}
	}
	Layout1->addWidget( AvailFields );
	Layout5->addLayout( Layout1 );

	if (Art > 1)
	{
		Layout2 = new Q3VBoxLayout( 0, 0, 6, "Layout2");
		QSpacerItem* spacer = new QSpacerItem( 0, 0, QSizePolicy::Minimum, QSizePolicy::Expanding );
		Layout2->addItem( spacer );
		ToSel = new QPushButton( tr( "&>>" ), this, "ToSel" );
		Layout2->addWidget( ToSel );
		FromSel = new QPushButton( tr( "&<<" ), this, "FromSel" );
		Layout2->addWidget( FromSel );
		QSpacerItem* spacer_2 = new QSpacerItem( 0, 0, QSizePolicy::Minimum, QSizePolicy::Expanding );
		Layout2->addItem( spacer_2 );
		Layout5->addLayout( Layout2 );
		Layout3 = new Q3VBoxLayout( 0, 0, 6, "Layout3");
		Text2 = new QLabel( tr( "Selected Fields" ), this, "Text2" );
		Layout3->addWidget( Text2 );
		SelFields = new Q3ListBox( this, "SelFields" );
		SelFields->setMinimumSize( QSize( 130, 180 ) );
		QStringList pfol;
		pfol = pfol.split(",", Felder);
		if (pfol.count() > 0)
		{
			for (int cfx = 0; cfx < pfol.count(); ++cfx)
				SelFields->insertItem(pfol[cfx].stripWhiteSpace());
		}
		FromSel->setEnabled(false);
		ToSel->setEnabled(false);
		Layout3->addWidget( SelFields );
		Layout5->addLayout( Layout3 );
		connect(SelFields, SIGNAL(clicked(Q3ListBoxItem*)), this, SLOT(SelEField(Q3ListBoxItem*)));
		connect(ToSel, SIGNAL(clicked()), this, SLOT(PutToSel()));
		connect(FromSel, SIGNAL(clicked()), this, SLOT(RemoveSel()));
	}
	SelectFieldsLayout->addLayout( Layout5 );
	S_Fields = "";
	Layout4 = new Q3HBoxLayout( 0, 0, 6, "Layout4");
	QSpacerItem* spacer_3 = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
	Layout4->addItem( spacer_3 );
	OK = new QPushButton( CommonStrings::tr_OK, this, "OK" );
	OK->setDefault( true );
	Layout4->addWidget( OK );
	Cancel = new QPushButton( CommonStrings::tr_Cancel, this, "Cancel" );
	Layout4->addWidget( Cancel );
	QSpacerItem* spacer_4 = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
	Layout4->addItem( spacer_4 );
	SelectFieldsLayout->addLayout( Layout4 );
	connect(OK, SIGNAL(clicked()), this, SLOT(SetRetVal()));
	connect(Cancel, SIGNAL(clicked()), this, SLOT(reject()));
	connect(AvailFields, SIGNAL(clicked(Q3ListBoxItem*)), this, SLOT(SelAField(Q3ListBoxItem*)));
}

void SelectFields::SetRetVal()
{
	S_Fields = "";
	if (FTyp > 1)
	{
		if (SelFields->count() > 0)
			S_Fields = SelFields->text(0);
		for (uint r = 1; r < SelFields->count(); ++r)
			S_Fields += ", "+SelFields->text(r);
	}
	else
		S_Fields = AvailFields->currentText();
	accept();
}

void SelectFields::RemoveSel()
{
	SelFields->removeItem(SelFields->currentItem());
	SelFields->clearSelection();
	if (SelFields->count() == 0)
		FromSel->setEnabled(false);
}

void SelectFields::PutToSel()
{
	if (SelFields->count() != 0)
	{
		if (SelFields->findItem(AvailFields->currentText()) == NULL)
			SelFields->insertItem(AvailFields->currentText());
	}
	else
		SelFields->insertItem(AvailFields->currentText());
}

void SelectFields::SelAField(Q3ListBoxItem *c)
{
	if ((c != NULL) && (FTyp > 1))
	{
		FromSel->setEnabled(false);
		ToSel->setEnabled(true);
		SelFields->clearSelection();
	}
}

void SelectFields::SelEField(Q3ListBoxItem *c)
{
	if (c != NULL)
	{
		FromSel->setEnabled(true);
		ToSel->setEnabled(false);
		AvailFields->clearSelection();
	}
}
