/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "alignselect.h"
//#include "alignselect.moc"
//Added by qt3to4:
#include <Q3GridLayout>
#include <QPixmap>

extern QPixmap loadIcon(QString nam);

AlignSelect::AlignSelect(QWidget* parent) : Q3ButtonGroup(parent, "AlignSelect")
{
	setFrameShape( Q3ButtonGroup::NoFrame );
	setTitle("");
	setExclusive( true );
	setColumnLayout(0, Qt::Vertical );
	layout()->setSpacing( 0 );
	layout()->setMargin( 0 );
	GroupAlignLayout = new Q3GridLayout( layout() );
	GroupAlignLayout->setAlignment( Qt::AlignTop );

	TextL = new QToolButton( this, "TextL" );
	TextL->setMaximumSize( QSize( 22, 22 ) );
	TextL->setPixmap(loadIcon("text_left.png"));
	TextL->setToggleButton( true );
	TextL->setOn( true );
	GroupAlignLayout->addWidget( TextL, 0, 0 );

	TextC = new QToolButton( this, "TextC" );
	TextC->setMaximumSize( QSize( 22, 22 ) );
	TextC->setPixmap(loadIcon("text_center.png"));
	TextC->setToggleButton( true );
	GroupAlignLayout->addWidget( TextC, 0, 1 );

	TextR = new QToolButton( this, "TextR" );
	TextR->setMaximumSize( QSize( 22, 22 ) );
	TextR->setPixmap(loadIcon("text_right.png"));
	TextR->setToggleButton( true );
	GroupAlignLayout->addWidget( TextR, 0, 2 );

	TextB = new QToolButton( this, "TextB" );
	TextB->setMaximumSize( QSize( 22, 22 ) );
	TextB->setPixmap(loadIcon("text_block.png"));
	TextB->setToggleButton( true );
	GroupAlignLayout->addWidget( TextB, 0, 3 );

	TextF = new QToolButton( this, "TextF" );
	TextF->setMaximumSize( QSize( 22, 22 ) );
	TextF->setPixmap(loadIcon("text_force.png"));
	TextF->setToggleButton( true );
	GroupAlignLayout->addWidget( TextF, 0, 4 );
	resize(minimumSizeHint());
	connect(this, SIGNAL(clicked(int)), this, SLOT(setTypeStyle(int)));
}

void AlignSelect::setStyle(int s)
{
	setButton(s);
}

int AlignSelect::getStyle()
{
	int ret = 0;
	if (TextL->isOn())
		ret = 0;
	if (TextR->isOn())
		ret = 2;
	if (TextC->isOn())
		ret = 1;
	if (TextB->isOn())
		ret = 3;
	if (TextF->isOn())
		ret = 4;
	return ret;
}

void AlignSelect::setTypeStyle(int a)
{
	emit State(a);
}

void AlignSelect::languageChange()
{
	QToolTip::remove(TextL);
	QToolTip::remove(TextR);
	QToolTip::remove(TextC);
	QToolTip::remove(TextB);
	QToolTip::remove(TextF);

	QToolTip::add(TextL, tr("Align Text Left"));
	QToolTip::add(TextR, tr("Align Text Right"));
	QToolTip::add(TextC, tr("Align Text Center"));
	QToolTip::add(TextB, tr("Align Text Justified"));
	QToolTip::add(TextF, tr("Align Text Forced Justified"));
}
