#include "selfield.h"
#include "selfield.moc"
#include <qstringlist.h>

extern QPixmap loadIcon(QString nam);

SelectFields::SelectFields( QWidget* parent, QString Felder, QString Own, QPtrList<Page> *Seiten, int Art )
    : QDialog( parent, "sef", true, 0 )
{
    setCaption( tr( "Select Fields" ) );
  	setIcon(loadIcon("AppIcon.png"));
		FTyp = Art;
    SelectFieldsLayout = new QVBoxLayout( this, 11, 6, "SelectFieldsLayout"); 
    Layout5 = new QHBoxLayout( 0, 0, 6, "Layout5");
    Layout1 = new QVBoxLayout( 0, 0, 6, "Layout1");

    Text1 = new QLabel( this, "Text1" );
    Text1->setText( tr( "Available Fields" ) );
    Layout1->addWidget( Text1 );
    AvailFields = new QListBox( this, "AvailFields" );
    AvailFields->setMinimumSize( QSize( 130, 180 ) );
		for (uint se = 0; se < Seiten->count(); ++se)
			{
			for (uint ite = 0; ite < Seiten->at(se)->Items.count(); ++ite)
				{
				PageItem* item = Seiten->at(se)->Items.at(ite);
				if (Art < 2)
					{
					if ((item->isAnnotation) && (item->AnType > 1))
						AvailFields->insertItem(item->AnName);
					}
				else
					{
					if ((item->isAnnotation) && (item->AnType == Art) && (item->AnName != Own))
						AvailFields->insertItem(item->AnName);
					}
				}
			}
    Layout1->addWidget( AvailFields );
    Layout5->addLayout( Layout1 );

		if (Art > 1)
			{
    	Layout2 = new QVBoxLayout( 0, 0, 6, "Layout2");
    	QSpacerItem* spacer = new QSpacerItem( 0, 0, QSizePolicy::Minimum, QSizePolicy::Expanding );
    	Layout2->addItem( spacer );
    	ToSel = new QPushButton( this, "ToSel" );
    	ToSel->setText( tr( ">>" ) );
    	Layout2->addWidget( ToSel );
    	FromSel = new QPushButton( this, "FromSel" );
    	FromSel->setText( tr( "<<" ) );
    	Layout2->addWidget( FromSel );
    	QSpacerItem* spacer_2 = new QSpacerItem( 0, 0, QSizePolicy::Minimum, QSizePolicy::Expanding );
    	Layout2->addItem( spacer_2 );
    	Layout5->addLayout( Layout2 );
    	Layout3 = new QVBoxLayout( 0, 0, 6, "Layout3");
    	Text2 = new QLabel( this, "Text2" );
    	Text2->setText( tr( "Selected Fields" ) );
    	Layout3->addWidget( Text2 );
    	SelFields = new QListBox( this, "SelFields" );
    	SelFields->setMinimumSize( QSize( 130, 180 ) );
  		QStringList pfol;
  		pfol = pfol.split(",", Felder);
			if (pfol.count() > 0)
				{
				for (uint cfx = 0; cfx < pfol.count(); ++cfx)
					{
					SelFields->insertItem(pfol[cfx].stripWhiteSpace());
					}
				}
			FromSel->setEnabled(false);
			ToSel->setEnabled(false);
    	Layout3->addWidget( SelFields );
    	Layout5->addLayout( Layout3 );
    	connect(SelFields, SIGNAL(clicked(QListBoxItem*)), this, SLOT(SelEField(QListBoxItem*)));
    	connect(ToSel, SIGNAL(clicked()), this, SLOT(PutToSel()));
    	connect(FromSel, SIGNAL(clicked()), this, SLOT(RemoveSel()));
			}
    SelectFieldsLayout->addLayout( Layout5 );
    S_Fields = "";
    Layout4 = new QHBoxLayout( 0, 0, 6, "Layout4");
    QSpacerItem* spacer_3 = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
    Layout4->addItem( spacer_3 );
    OK = new QPushButton( this, "OK" );
    OK->setText( tr( "OK" ) );
    OK->setDefault( true );
    Layout4->addWidget( OK );
    Cancel = new QPushButton( this, "Cancel" );
    Cancel->setText( tr( "Cancel" ) );
    Layout4->addWidget( Cancel );
    QSpacerItem* spacer_4 = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
    Layout4->addItem( spacer_4 );
    SelectFieldsLayout->addLayout( Layout4 );
    connect(OK, SIGNAL(clicked()), this, SLOT(SetRetVal()));
    connect(Cancel, SIGNAL(clicked()), this, SLOT(reject()));
    connect(AvailFields, SIGNAL(clicked(QListBoxItem*)), this, SLOT(SelAField(QListBoxItem*)));
}

void SelectFields::SetRetVal()
{
	S_Fields = "";
	if (FTyp > 1)
		{
		if (SelFields->count() > 0)
			S_Fields = SelFields->text(0);
		for (uint r = 1; r < SelFields->count(); ++r)
			{
			S_Fields += ", "+SelFields->text(r);
			}
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

void SelectFields::SelAField(QListBoxItem *c)
{
	if ((c != NULL) && (FTyp > 1))
		{
		FromSel->setEnabled(false);
  	ToSel->setEnabled(true);
  	SelFields->clearSelection();
  	}
}

void SelectFields::SelEField(QListBoxItem *c)
{
	if (c != NULL)
		{
		FromSel->setEnabled(true);
  	ToSel->setEnabled(false);
  	AvailFields->clearSelection();
  	}
}

