/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
#include "tabmanager.h"
#include "tabmanager.moc"
#include <qvariant.h>
#include <qpushbutton.h>
#include <qlayout.h>
#include <qtooltip.h>
#include <qwhatsthis.h>
#include "tabruler.h"
extern QPixmap loadIcon(QString nam);

TabManager::TabManager( QWidget* parent, int dEin, QValueList<double> inTab, double wid) : QDialog( parent, "TabManager", true, 0 )
{
	setCaption( tr( "Manage Tabulators" ) );
	setIcon(loadIcon("AppIcon.png"));
	tmpTab = inTab;
	TabManagerLayout = new QVBoxLayout( this, 5, 5, "TabManagerLayout");
	TabList = new Tabruler(this, false, dEin, inTab, wid);
	TabManagerLayout->addWidget( TabList );
	layout10 = new QHBoxLayout;
	layout10->setSpacing( 6 );
	layout10->setMargin( 0 );
	QSpacerItem* spacer = new QSpacerItem( 20, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
	layout10->addItem( spacer );
	OKButton = new QPushButton( tr( "&OK" ), this, "OKButton" );
	OKButton->setDefault( true );
	layout10->addWidget( OKButton );
	CancelButton = new QPushButton( tr( "&Cancel" ), this, "CancelB" );
	layout10->addWidget( CancelButton );
	TabManagerLayout->addLayout( layout10 );
	resize( minimumSizeHint() );
	connect( OKButton, SIGNAL( clicked() ), this, SLOT( exitOK() ) );
	connect( CancelButton, SIGNAL( clicked() ), this, SLOT( reject() ) );
}

void TabManager::exitOK()
{
	tmpTab = TabList->getTabVals();
	accept();
}
