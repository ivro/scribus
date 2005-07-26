#include <qdialog.h>
#include <qlayout.h>
#include <qpushbutton.h>
#include <qgroupbox.h>
#include <qlabel.h>
#include <qcombobox.h>
#include <qcheckbox.h>

#include "margindialog.h"
#include "margindialog.moc"
#include "marginWidget.h"
#include "scribusstructs.h"
#include "page.h"
#include "scribusdoc.h"
#include "units.h"
#include "mspinbox.h"
#include "pagesize.h"

extern QPixmap loadIcon(QString nam);

MarginDialog::MarginDialog( QWidget* parent, ScribusDoc* doc ) : QDialog( parent, "MarginDialog", true, 0 )
{
	setCaption( tr( "Manage Page Properties" ) );
	setIcon(loadIcon("AppIcon.png"));
	unitRatio = doc->unitRatio;
	dialogLayout = new QVBoxLayout( this, 10, 5);
	
	dsGroupBox7 = new QGroupBox( this, "GroupBox7" );
	dsGroupBox7->setTitle( tr( "Page Size" ) );
	dsGroupBox7->setColumnLayout(0, Qt::Vertical );
	dsGroupBox7->layout()->setSpacing( 0 );
	dsGroupBox7->layout()->setMargin( 0 );
	dsGroupBox7Layout = new QGridLayout( dsGroupBox7->layout() );
	dsGroupBox7Layout->setAlignment( Qt::AlignTop );
	dsGroupBox7Layout->setSpacing( 5 );
	dsGroupBox7Layout->setMargin( 10 );
	TextLabel1 = new QLabel( tr( "&Size:" ), dsGroupBox7, "TextLabel1" );
	dsGroupBox7Layout->addMultiCellWidget( TextLabel1, 0, 0, 0, 1 );
	PageSize *ps=new PageSize(doc->currentPage->PageSize);
	sizeQComboBox = new QComboBox( true, dsGroupBox7, "ComboBox1" );
	sizeQComboBox->setEditable(false);
	QStringList pageSizes=ps->getPageSizeList();
	sizeQComboBox->insertStringList(ps->getTrPageSizeList());
	sizeQComboBox->insertItem( tr( "Custom" ) );
	prefsPageSizeName=ps->getPageName();
	int sizeIndex = pageSizes.findIndex(ps->getPageText());
	if (sizeIndex != -1)
		sizeQComboBox->setCurrentItem(sizeIndex);
	else
		sizeQComboBox->setCurrentItem(sizeQComboBox->count()-1);
	TextLabel1->setBuddy(sizeQComboBox);
	dsGroupBox7Layout->addMultiCellWidget(sizeQComboBox, 0, 0, 2, 3);
	TextLabel2 = new QLabel( tr( "Orie&ntation:" ), dsGroupBox7, "TextLabel2" );
	dsGroupBox7Layout->addMultiCellWidget( TextLabel2, 1, 1, 0, 1 );
	orientationQComboBox = new QComboBox( true, dsGroupBox7, "ComboBox2" );
	orientationQComboBox->insertItem( tr( "Portrait" ) );
	orientationQComboBox->insertItem( tr( "Landscape" ) );
	orientationQComboBox->setEditable(false);
	orientationQComboBox->setCurrentItem(doc->currentPage->PageOri );
	TextLabel2->setBuddy(orientationQComboBox);
	dsGroupBox7Layout->addMultiCellWidget( orientationQComboBox, 1, 1, 2, 3 );
	widthMSpinBox = new MSpinBox( 1, 100000, dsGroupBox7, unitGetDecimalsFromIndex(doc->docUnitIndex) );
	widthQLabel = new QLabel( tr( "&Width:" ), dsGroupBox7, "widthLabel" );
	widthMSpinBox->setSuffix(unitGetSuffixFromIndex(doc->docUnitIndex));
	widthMSpinBox->setValue(doc->currentPage->Width * doc->unitRatio);
	widthQLabel->setBuddy(widthMSpinBox);
	dsGroupBox7Layout->addWidget( widthQLabel, 2, 0 );
	dsGroupBox7Layout->addWidget( widthMSpinBox, 2, 1 );
	heightMSpinBox = new MSpinBox( 1, 100000, dsGroupBox7, unitGetDecimalsFromIndex(doc->docUnitIndex) );
	heightMSpinBox->setSuffix(unitGetSuffixFromIndex(doc->docUnitIndex));
	heightMSpinBox->setValue(doc->currentPage->Height * doc->unitRatio);
	heightQLabel = new QLabel(heightMSpinBox,  tr( "&Height:" ), dsGroupBox7, "heightLabel" );
	dsGroupBox7Layout->addWidget( heightQLabel, 2, 2 );
	dsGroupBox7Layout->addWidget( heightMSpinBox, 2, 3 );
	moveObjects = new QCheckBox( dsGroupBox7, "moveObjects" );
	moveObjects->setText( tr( "Move Objects with their Page" ) );
	moveObjects->setChecked( true );
	dsGroupBox7Layout->addMultiCellWidget( moveObjects, 3, 3, 0, 3 );
	dialogLayout->addWidget( dsGroupBox7 );
	
	GroupRand = new MarginWidget(this,  tr( "Margin Guides" ), &doc->currentPage->Margins, unitGetDecimalsFromIndex(doc->docUnitIndex), doc->unitRatio, unitGetSuffixFromIndex(doc->docUnitIndex));
	GroupRand->setPageHeight(doc->currentPage->Height * doc->unitRatio);
	GroupRand->setPageWidth(doc->currentPage->Width * doc->unitRatio);
	GroupRand->setFacingPages(doc->PageFP );
	dialogLayout->addWidget( GroupRand );

	okCancelLayout = new QHBoxLayout;
	okCancelLayout->setSpacing( 6 );
	okCancelLayout->setMargin( 0 );
	QSpacerItem* spacer = new QSpacerItem( 20, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
	okCancelLayout->addItem( spacer );
	okButton = new QPushButton( tr( "&OK" ), this, "okButton" );
	okButton->setDefault( true );
	okCancelLayout->addWidget(okButton);
	cancelButton = new QPushButton( tr( "&Cancel" ), this, "cancelButton" );
	cancelButton->setDefault( false );
	okCancelLayout->addWidget(cancelButton);
	dialogLayout->addLayout( okCancelLayout );
	setMaximumSize(sizeHint());
	pageWidth = widthMSpinBox->value() / unitRatio;
	pageHeight = heightMSpinBox->value() / unitRatio;
	if (sizeQComboBox->currentText() == tr("Custom"))
	{
		heightMSpinBox->setEnabled( true );
		widthMSpinBox->setEnabled( true );
	}
	else
	{
		heightMSpinBox->setEnabled( false );
		widthMSpinBox->setEnabled( false );
	}
	delete ps;
	// signals and slots connections
	connect( okButton, SIGNAL( clicked() ), this, SLOT( accept() ) );
	connect( cancelButton, SIGNAL( clicked() ), this, SLOT( reject() ) );
	connect(orientationQComboBox, SIGNAL(activated(int)), this, SLOT(setOrien(int)));
	connect(sizeQComboBox, SIGNAL(activated(const QString &)), this, SLOT(setSize(const QString &)));
	connect(widthMSpinBox, SIGNAL(valueChanged(int)), this, SLOT(setPageWidth(int)));
	connect(heightMSpinBox, SIGNAL(valueChanged(int)), this, SLOT(setPageHeight(int)));
	setMinimumSize(minimumSizeHint());
	setMaximumSize(minimumSizeHint());
	resize(minimumSizeHint());
}

void MarginDialog::setPageWidth(int)
{
	pageWidth = widthMSpinBox->value() / unitRatio;
	GroupRand->setPageWidth(pageWidth);
}

void MarginDialog::setPageHeight(int)
{
	pageHeight = heightMSpinBox->value() / unitRatio;
	GroupRand->setPageHeight(pageHeight);
}

void MarginDialog::setSize(const QString & gr)
{
	pageWidth = widthMSpinBox->value() / unitRatio;
	pageHeight = heightMSpinBox->value() / unitRatio;
	widthMSpinBox->setEnabled(false);
	heightMSpinBox->setEnabled(false);
	PageSize *ps2 = new PageSize(gr);
	prefsPageSizeName = ps2->getPageName();
	if (gr == tr("Custom"))
	{
		widthMSpinBox->setEnabled(true);
		heightMSpinBox->setEnabled(true);
	}
	else
	{
		pageWidth = ps2->getPageWidth();
		pageHeight = ps2->getPageHeight();
	}
	disconnect(widthMSpinBox, SIGNAL(valueChanged(int)), this, SLOT(setPageWidth(int)));
	disconnect(heightMSpinBox, SIGNAL(valueChanged(int)), this, SLOT(setPageHeight(int)));
	widthMSpinBox->setValue(pageWidth * unitRatio);
	heightMSpinBox->setValue(pageHeight * unitRatio);
	GroupRand->setPageHeight(pageHeight);
	GroupRand->setPageWidth(pageWidth);
	connect(widthMSpinBox, SIGNAL(valueChanged(int)), this, SLOT(setPageWidth(int)));
	connect(heightMSpinBox, SIGNAL(valueChanged(int)), this, SLOT(setPageHeight(int)));
	delete ps2;
}

void MarginDialog::setOrien(int ori)
{
	double br;
	setSize(sizeQComboBox->currentText());
	disconnect(widthMSpinBox, SIGNAL(valueChanged(int)), this, SLOT(setPageWidth(int)));
	disconnect(heightMSpinBox, SIGNAL(valueChanged(int)), this, SLOT(setPageHeight(int)));
	if (ori == 0)
	{
		if (sizeQComboBox->currentText() == tr("Custom"))
		{
			br = widthMSpinBox->value();
			widthMSpinBox->setValue(heightMSpinBox->value());
			heightMSpinBox->setValue(br);
		}
	}
	else
	{
		br = widthMSpinBox->value();
		widthMSpinBox->setValue(heightMSpinBox->value());
		heightMSpinBox->setValue(br);
	}
	pageWidth = widthMSpinBox->value() / unitRatio;
	pageHeight = heightMSpinBox->value() / unitRatio;
	connect(widthMSpinBox, SIGNAL(valueChanged(int)), this, SLOT(setPageWidth(int)));
	connect(heightMSpinBox, SIGNAL(valueChanged(int)), this, SLOT(setPageHeight(int)));
}
