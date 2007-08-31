/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include "movepage.h"
#include <QPixmap>
#include <QLabel>
#include <QSpinBox>
#include <QComboBox>
#include <QPushButton>

#include "commonstrings.h"
#include "util_icon.h"

/*
 *  Constructs a MovePages which is a child of 'parent', with the 
 *  name 'name' and widget flags set to 'f' 
 *
 *  The dialog will by default be modeless, unless you set 'modal' to
 *  true to construct a modal dialog.
 */
MovePages::MovePages( QWidget* parent, int currentPage, int maxPages, bool moving ) : QDialog( parent )
{
	move = moving;	
	setCaption (move ? tr("Move Pages") : tr("Copy Page"));
	setIcon(loadIcon("AppIcon.png"));
	setModal(true);
	dialogLayout = new QVBoxLayout( this, 10, 5 );
	dialogLayout->setSpacing( 5 );
	dialogLayout->setMargin( 10 );
	fromToLayout = new QGridLayout();
	fromToLayout->setSpacing( 5 );
	fromToLayout->setMargin( 5 );
	moveLabel = new QLabel( (move ? tr("Move Page(s)") : tr("Copy Page")) + ":", this, "moveLabel" );
	fromPageData = new QSpinBox( 1, maxPages, 1, this, "fromPageData" );
	fromPageData->setValue( currentPage );
	uint currentRow = 0;
	fromToLayout->addWidget( moveLabel, currentRow, 0);
	fromToLayout->addWidget( fromPageData, currentRow, 1);

	if (move)
	{
		toLabel = new QLabel( tr("To:"), this, "toLabel" );
		toPageData = new QSpinBox( 1, maxPages, 1, this, "toPageData" );
		toPageData->setValue( currentPage );
		fromToLayout->addWidget( toLabel, currentRow, 2);
		fromToLayout->addWidget( toPageData, currentRow, 3);
	}
	else
	{
		numberOfCopiesLabel = new QLabel( tr("Number of copies:"), this, "numberOfCopiesLabel" );
		numberOfCopiesData = new QSpinBox(this, "numberOfCopiesData" );
		numberOfCopiesData->setMinimum(1);
		numberOfCopiesData->setMaximum(100);
		++currentRow;
		fromToLayout->addWidget(numberOfCopiesLabel, currentRow, 0);
		fromToLayout->addWidget(numberOfCopiesData, currentRow, 1);
	}
	++currentRow;
	mvWhereData = new QComboBox( false, this, "mvWhereData" );
	mvWhereData->insertItem( tr("Before Page"));
	mvWhereData->insertItem( tr("After Page"));
	mvWhereData->insertItem( tr("At End"));
	mvWhereData->setCurrentItem(2);
	mvWherePageData = new QSpinBox( 1, maxPages, 1, this, "mvWherePageData" );
	mvWherePageData->setValue( currentPage );
	mvWherePageData->setDisabled( true );
	fromToLayout->addWidget( mvWhereData, currentRow, 0 );	
	fromToLayout->addWidget( mvWherePageData, currentRow, 1 );
	fromToLayout->addColSpacing(0, moveLabel->fontMetrics().width( tr( "Move Page(s):" )));
	dialogLayout->addLayout( fromToLayout );

	okCancelLayout = new QHBoxLayout();
	okCancelLayout->setSpacing( 6 );
	okCancelLayout->setMargin( 0 );
	QSpacerItem* spacer = new QSpacerItem( 20, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
	okCancelLayout->addItem( spacer );
	okButton = new QPushButton( CommonStrings::tr_OK, this, "okButton" );
	okButton->setDefault( true );
	okCancelLayout->addWidget(okButton);
	cancelButton = new QPushButton( CommonStrings::tr_Cancel, this, "cancelButton" );
	okCancelLayout->addWidget(cancelButton);
	dialogLayout->addLayout( okCancelLayout );
	setMaximumSize(sizeHint());

	// signals and slots connections
	if (move)
		connect( toPageData, SIGNAL( valueChanged(int) ), this, SLOT( toChanged(int) ) );
	connect( mvWhereData, SIGNAL( activated(int) ), this, SLOT( mvWherePageDataDisable(int) ) );
	connect( fromPageData, SIGNAL( valueChanged(int) ), this, SLOT( fromChanged(int) ) );
	connect( okButton, SIGNAL( clicked() ), this, SLOT( accept() ) );
	connect( cancelButton, SIGNAL( clicked() ), this, SLOT( reject() ) );
}

void MovePages::fromChanged(int pageNumber)
{
	if (move)
	{
		if (pageNumber > toPageData->value())
			toPageData->setValue(pageNumber);
		if ((pageNumber == 1) && (toPageData->value() == toPageData->maxValue()))
			toPageData->setValue(toPageData->maxValue()-1);
	}
}

void MovePages::toChanged(int pageNumber)
{
	if (pageNumber < fromPageData->value())
		fromPageData->setValue(pageNumber);
	if ((fromPageData->value() == 1) && (pageNumber == toPageData->maxValue()))
		fromPageData->setValue(2);
}

void MovePages::mvWherePageDataDisable(int index)
{
    mvWherePageData->setDisabled((index==2));
}


const int MovePages::getFromPage()
{
	return fromPageData->value();
}

const int MovePages::getToPage()
{
	return toPageData->value();
}

const int MovePages::getWhere()
{
	return mvWhereData->currentItem();
}

const int MovePages::getWherePage()
{
	return mvWherePageData->value();
}

const int MovePages::getCopyCount()
{
	return numberOfCopiesData->value();
}
