/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include <qimage.h>
#include <qlayout.h>
#include <qpopupmenu.h>
#include <qbitmap.h>
#include <qpixmap.h>
#include <qbuttongroup.h>

#include "autoformbuttongroup.h"
#include "autoformbuttongroup.moc"
#include "fpointarray.h"
#include "scpainter.h"
#include "util.h"

AutoformButtonGroup::AutoformButtonGroup( QWidget* parent ) : QButtonGroup( parent, "autoformbuttongroup" )
{
	this->setExclusive( true );
	this->setColumnLayout(0, Qt::Vertical );
	this->layout()->setSpacing( 0 );
	this->layout()->setMargin( 0 );
	buttonGroup1Layout = new QGridLayout( this->layout() );
	buttonGroup1Layout->setAlignment( Qt::AlignTop );
	toolButton1 = new QToolButton( this, "toolButton1" );
	toolButton1->setToggleButton( true );
	toolButton1->setPixmap(getIconPixmap(0));
	buttonGroup1Layout->addWidget( toolButton1, 0, 0 );
	toolButton2 = new QToolButton( this, "toolButton2" );
	toolButton2->setToggleButton( true );
	toolButton2->setPixmap(getIconPixmap(1));
	buttonGroup1Layout->addWidget( toolButton2, 0, 1 );
	toolButton3 = new QToolButton( this, "toolButton3" );
	toolButton3->setToggleButton( true );
	toolButton3->setPixmap(getIconPixmap(2));
	buttonGroup1Layout->addWidget( toolButton3, 0, 2 );
	toolButton4 = new QToolButton( this, "toolButton4" );
	toolButton4->setToggleButton( true );
	toolButton4->setPixmap(getIconPixmap(3));
	buttonGroup1Layout->addWidget( toolButton4, 0, 3 );

	toolButton5 = new QToolButton( this, "toolButton3" );
	toolButton5->setToggleButton( true );
	toolButton5->setPixmap(getIconPixmap(4));
	buttonGroup1Layout->addWidget( toolButton5, 1, 0 );
	toolButton6 = new QToolButton( this, "toolButton4" );
	toolButton6->setToggleButton( true );
	toolButton6->setPixmap(getIconPixmap(5));
	buttonGroup1Layout->addWidget( toolButton6, 1, 1 );
	toolButton7 = new QToolButton( this, "toolButton3" );
	toolButton7->setToggleButton( true );
	toolButton7->setPixmap(getIconPixmap(6));
	buttonGroup1Layout->addWidget( toolButton7, 1, 2 );
	toolButton8 = new QToolButton( this, "toolButton4" );
	toolButton8->setToggleButton( true );
	toolButton8->setPixmap(getIconPixmap(7));
	buttonGroup1Layout->addWidget( toolButton8, 1, 3 );

	toolButton9 = new QToolButton( this, "toolButton4" );
	toolButton9->setToggleButton( true );
	toolButton9->setPixmap(getIconPixmap(8));
	buttonGroup1Layout->addWidget( toolButton9, 2, 0 );
	toolButton10 = new QToolButton( this, "toolButton4" );
	toolButton10->setToggleButton( true );
	toolButton10->setPixmap(getIconPixmap(9));
	buttonGroup1Layout->addWidget( toolButton10, 2, 1 );
	toolButton11 = new QToolButton( this, "toolButton4" );
	toolButton11->setToggleButton( true );
	toolButton11->setPixmap(getIconPixmap(10));
	buttonGroup1Layout->addWidget( toolButton11, 2, 2 );
	toolButton12 = new QToolButton( this, "toolButton4" );
	toolButton12->setToggleButton( true );
	toolButton12->setPixmap(getIconPixmap(11));
	buttonGroup1Layout->addWidget( toolButton12, 2, 3 );

	toolButton13 = new QToolButton( this, "toolButton4" );
	toolButton13->setToggleButton( true );
	toolButton13->setPixmap(getIconPixmap(12));
	buttonGroup1Layout->addWidget( toolButton13, 3, 0 );
	toolButton14 = new QToolButton( this, "toolButton4" );
	toolButton14->setToggleButton( true );
	toolButton14->setPixmap(getIconPixmap(13));
	buttonGroup1Layout->addWidget( toolButton14, 3, 1 );
	toolButton15 = new QToolButton( this, "toolButton4" );
	toolButton15->setToggleButton( true );
	toolButton15->setPixmap(getIconPixmap(14));
	buttonGroup1Layout->addWidget( toolButton15, 3, 2 );
	toolButton16 = new QToolButton( this, "toolButton4" );
	toolButton16->setToggleButton( true );
	toolButton16->setPixmap(getIconPixmap(15));
	buttonGroup1Layout->addWidget( toolButton16, 3, 3 );

	toolButton17 = new QToolButton( this, "toolButton4" );
	toolButton17->setToggleButton( true );
	toolButton17->setPixmap(getIconPixmap(16));
	buttonGroup1Layout->addWidget( toolButton17, 4, 0 );
	toolButton18 = new QToolButton( this, "toolButton4" );
	toolButton18->setToggleButton( true );
	toolButton18->setPixmap(getIconPixmap(17));
	buttonGroup1Layout->addWidget( toolButton18, 4, 1 );
	
	connect(this, SIGNAL(clicked(int)), this, SLOT(selForm(int)));

}

double* AutoformButtonGroup::getShapeData(int a, int *n)
{
	double *vals;
	static double AutoShapes0[] = {0.0, 0.0, 0.0, 0.0, 100.0, 0.0, 100.0, 0.0, 100.0, 0.0, 100.0, 0.0,
									100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 0.0, 100.0, 0.0, 100.0,
									0.0, 100.0, 0.0, 100.0, 0.0, 0.0, 0.0, 0.0};
	static double AutoShapes1[] = {100.0, 50.0, 100.0, 77.615235, 50.0, 100.0,
									77.615235, 100.0, 50.0, 100.0,
		 							22.385765, 100.0,
									0.0, 50.0, 0.0, 77.615235, 0.0, 50.0, 0.0, 22.385765, 50.0, 0.0,
									22.385765, 0.0,
									50.0, 0.0, 77.615235, 0.0, 100.0, 50.0, 100.0, 22.385765};
	static double AutoShapes2[] = {0.0, 0.0, 0.0, 0.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0,
								 	0.0, 100.0, 0.0, 100.0, 0.0, 100.0, 0.0, 100.0, 0.0, 0.0, 0.0, 0.0};
	static double AutoShapes3[] = {0.0, 25.0, 0.0, 25.0, 25.0, 25.0, 25.0, 25.0, 25.0, 25.0, 25.0, 25.0,
								 	25.0, 0.0, 25.0, 0.0, 25.0, 0.0, 25.0, 0.0, 75.0, 0.0, 75.0, 0.0,
								 	75.0, 0.0, 75.0, 0.0, 75.0, 25.0, 75.0, 25.0, 75.0, 25.0, 75.0, 25.0,
								 	100.0, 25.0, 100.0, 25.0, 100.0, 25.0, 100.0, 25.0,	100.0, 75.0, 100.0, 75.0,
								 	100.0, 75.0, 100.0, 75.0, 75.0, 75.0, 75.0, 75.0, 75.0, 75.0, 75.0, 75.0,
								 	75.0, 100.0, 75.0, 100.0, 75.0, 100.0, 75.0, 100.0, 25.0, 100.0, 25.0, 100.0,
								 	25.0, 100.0, 25.0, 100.0, 25.0, 75.0, 25.0, 75.0, 25.0, 75.0, 25.0, 75.0,
								 	0.0, 75.0, 0.0, 75.0, 0.0, 75.0, 0.0, 75.0,	0.0, 25.0, 0.0, 25.0};
	static double AutoShapes4[] = {0.0, 50.0, 0.0, 50.0, 50.0, 0.0, 50.0, 0.0, 50.0, 0.0, 50.0, 0.0,
									50.0, 25.0, 50.0, 25.0, 50.0, 25.0, 50.0, 25.0,	100.0, 25.0, 100.0, 25.0,
									100.0, 25.0, 100.0,  25.0, 100.0, 75.0, 100.0, 75.0, 100.0, 75.0, 100.0, 75.0,
									50.0, 75.0, 50.0, 75.0, 50.0, 75.0, 50.0, 75.0, 50.0, 100.0, 50.0, 100.0,
									50.0, 100.0, 50.0, 100.0,	0.0, 50.0, 0.0, 50.0};
	static double AutoShapes5[] = {0.0, 25.0, 0.0, 25.0, 50.0, 25.0, 50.0, 25.0, 50.0, 25.0, 50.0, 25.0,
									50.0, 0.0, 50.0, 0.0, 50.0, 0.0, 50.0, 0.0,	100.0, 50.0, 100.0, 50.0,
									100.0, 50.0, 100.0, 50.0, 50.0, 100.0, 50.0, 100.0, 50.0, 100.0, 50.0, 100.0,
									50.0, 75.0, 50.0, 75.0, 50.0, 75.0, 50.0, 75.0, 0.0, 75.0, 0.0, 75.0,
									0.0, 75.0, 0.0, 75.0,	0.0, 25.0, 0.0, 25.0};
	static double AutoShapes6[] = {0.0, 50.0, 0.0, 50.0, 50.0, 0.0, 50.0, 0.0, 50.0, 0.0, 50.0, 0.0,
									100.0, 50.0, 100.0, 50.0,	100.0, 50.0, 100.0, 50.0, 75.0, 50.0, 75.0, 50.0,
									75.0, 50.0, 75.0, 50.0, 75.0, 100.0, 75.0, 100.0, 75.0, 100.0, 75.0, 100.0,
									25.0, 100.0, 25.0, 100.0, 25.0, 100.0, 25.0, 100.0, 25.0, 50.0, 25.0, 50.0,
									25.0, 50.0, 25.0, 50.0,	0.0, 50.0, 0.0, 50.0};
	static double AutoShapes7[] = {0.0, 50.0, 0.0, 50.0, 25.0, 50.0, 25.0, 50.0, 25.0, 50.0, 25.0, 50.0,
									25.0, 0.0, 25.0, 0.0, 25.0, 0.0, 25.0, 0.0, 75.0, 0.0, 75.0, 0.0,
									75.0, 0.0, 75.0, 0.0, 75.0, 50.0, 75.0, 50.0, 75.0, 50.0, 75.0, 50.0,
									100.0, 50.0, 100.0, 50.0,	100.0, 50.0, 100.0, 50.0, 50.0, 100.0, 50.0, 100.0,
									50.0, 100.0, 50.0, 100.0,	0.0, 50.0, 0.0, 50.0};
	static double AutoShapes8[] = {0.0, 50.0, 0.0, 22.385765, 100.0, 0.0, 44.77716, 0.0,	100.0, 0.0, 100.0, 0.0,
									100.0, 100.0, 100.0, 100.0,	100.0, 100.0, 44.77716, 100.0, 0.0, 50.0,
									0.0, 77.615235};
	static double AutoShapes9[] = {100.0, 50.0, 100.0, 77.615235, 0.0, 100.0,
55.22284, 100.0, 0.0, 100.0, 0.0, 100.0,
									0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 55.22281, 0.0, 100.0, 50.0, 100.0, 22.385765};
	static double AutoShapes10[] = {100.0, 100.0, 100.0, 100.0, 0.0, 100.0, 0.0,
									100.0, 0.0, 100.0, 0.0, 44.7715,
									 50.0, 0.0, 22.3858, 0.0, 50.0, 0.0, 77.6152, 0.0, 100.0, 100.0, 100.0,
44.7715};
	static double AutoShapes11[] = {100.0, 0.0, 100.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 55.2285, 50.0, 100.0,
									 22.3858, 100.0, 50.0, 100.0, 77.6152, 100.0, 100.0, 0.0, 100.0, 55.2285};
	static double AutoShapes12[] = {0.0, 50.0, 0.0, 50.0, 100.0, 0.0, 100.0, 0.0, 100.0, 0.0, 100.0, 0.0,
									 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 0.0, 50.0, 0.0, 50.0};
	static double AutoShapes13[] = {0.0, 0.0, 0.0, 0.0, 100.0, 50.0, 100.0, 50.0, 100.0, 50.0, 100.0, 50.0,
									 0.0, 100.0, 0.0, 100.0, 0.0, 100.0, 0.0, 100.0, 0.0, 0.0, 0.0, 0.0};
	static double AutoShapes14[] = {0.0, 100.0, 0.0, 100.0, 50.0, 0.0, 50.0, 0.0, 50.0, 0.0, 50.0, 0.0,
									 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 0.0, 100.0, 0.0, 100.0};
	static double AutoShapes15[] = {0.0, 0.0, 0.0, 0.0, 100.0, 0.0, 100.0, 0.0, 100.0, 0.0, 100.0, 0.0,
									 50.0, 100.0, 50.0, 100.0, 50.0, 100.0, 50.0, 100.0, 0.0, 0.0, 0.0, 0.0};
	static double AutoShapes16[] = {25.0, 0.0, 25.0, 0.0, 75.0, 0.0, 75.0, 0.0, 75.0, 0.0, 75.0, 13.8071,
									 100.0, 25.0, 86.1929, 25.0, 100.0, 25.0, 100.0, 25.0, 100.0, 75.0, 100.0, 75.0,
									 100.0, 75.0, 86.1929, 75.0, 75.0, 100.0, 75.0, 86.1929, 75.0, 100.0, 75.0, 100.0,
									 25.0, 100.0, 25.0, 100.0, 25.0, 100.0, 25.0, 86.1929, 0.0, 75.0, 13.8071, 75.0,
									 0.0, 75.0, 0.0, 75.0, 0.0, 25.0, 0.0, 25.0, 0.0, 25.0, 13.8071, 25.0,
									 25.0, 0.0, 25.0, 13.8071};
	static double AutoShapes17[] = {100.0, 50.0, 100.0, 77.6152, 50.0, 100.0, 77.6152, 100.0, 50.0, 100.0, 22.3858, 100.0,
									 0.0, 50.0, 0.0, 77.6152, 0.0,  50.0, 0.0, 22.3858, 50.0, 0.0, 22.3858, 0.0,
									 50.0, 0.0, 77.6152, 0.0, 100.0, 50.0, 100.0, 22.3858, -1.0, -1.0, -1.0, -1.0,
									 75.0, 50.0, 75.0, 63.8076, 50.0, 75.0, 63.8076, 75.0, 50.0, 75.0, 36.1929, 75.0,
									 25.0, 50.0, 25.0, 63.8076, 25.0, 50.0, 25.0, 36.1929, 50.0, 25.0, 36.1929, 25.0,
									 50.0, 25.0, 63.8076, 25.0, 75.0, 50.0, 75.0, 36.1929};
	switch (a)
		{
		case 0:
			*n = 32;
			vals = AutoShapes0;
			break;
		case 1:
			*n = 32;
			vals = AutoShapes1;
			break;
		case 2:
			*n = 24;
			vals = AutoShapes2;
			break;
		case 3:
			*n = 96;
			vals = AutoShapes3;
			break;
		case 4:
			*n = 56;
			vals = AutoShapes4;
			break;
		case 5:
			*n = 56;
			vals = AutoShapes5;
			break;
		case 6:
			*n = 56;
			vals = AutoShapes6;
			break;
		case 7:
			*n = 56;
			vals = AutoShapes7;
			break;
		case 8:
			*n = 24;
			vals = AutoShapes8;
			break;
		case 9:
			*n = 24;
			vals = AutoShapes9;
			break;
		case 10:
			*n = 24;
			vals = AutoShapes10;
			break;
		case 11:
			*n = 24;
			vals = AutoShapes11;
			break;
		case 12:
			*n = 24;
			vals = AutoShapes12;
			break;
		case 13:
			*n = 24;
			vals = AutoShapes13;
			break;
		case 14:
			*n = 24;
			vals = AutoShapes14;
			break;
		case 15:
			*n = 24;
			vals = AutoShapes15;
			break;
		case 16:
			*n = 64;
			vals = AutoShapes16;
			break;
		case 17:
			*n = 68;
			vals = AutoShapes17;
			break;
		}
	return vals;
}

void AutoformButtonGroup::selForm(int a)
{
	int n;
	
	double* AutoShapes;
	AutoShapes = getShapeData(a, &n);
	emit FormSel(a, n, AutoShapes);
}

QPixmap AutoformButtonGroup::getIconPixmap(int nr)
{
	if (nr<8)
	{
		switch(nr)
		{
			case 0:
				return loadIcon("22/draw-rectangle.png");
			case 1:
				return loadIcon("22/draw-ellipse.png");
			case 2:
				return loadIcon("22/draw-triangle.png");
			case 3:
				return loadIcon("22/draw-cross.png");
			case 4:
				return loadIcon("22/draw-arrow-back.png");
			case 5:
				return loadIcon("22/draw-arrow-forward.png");
			case 6:
				return loadIcon("22/draw-arrow-up.png");
			case 7:
				return loadIcon("22/draw-arrow-down.png");
		}
	}
	int count = 0;
	double* AutoShapes;
	FPointArray Path;
	QPixmap Ico(22, 22);
	Path.resize(0);
	AutoShapes = getShapeData(nr, &count);
	for (int a = 0; a < count-3; a += 4)
	{
		if (AutoShapes[a] < 0)
		{
			Path.setMarker();
			continue;
		}
		double x1 = 16 * AutoShapes[a] / 100.0;
		double y1 = 16 * AutoShapes[a+1] / 100.0;
		double x2 = 16 * AutoShapes[a+2] / 100.0;
		double y2 = 16 * AutoShapes[a+3] / 100.0;
		Path.addPoint(x1, y1);
		Path.addPoint(x2, y2);
	}
	ScPainter *painter = new ScPainter(&Ico, 22, 22);
	painter->setBrush(qRgb(255, 255, 255));
	painter->setPen(qRgb(0, 0, 0));
	painter->setFillMode(1);
	painter->translate(3.0, 3.0);
	painter->setupPolygon(&Path);
	painter->setLineWidth(1.0);
	painter->drawPolygon();
	painter->drawPolyLine();
	painter->end();
	delete painter;
	Ico.setMask( Ico.createHeuristicMask() );

	return Ico;
}
