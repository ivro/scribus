/***************************************************************************
                          fpointarray.h  -  description
                             -------------------
    begin                : Mit Jul 24 2002
    copyright            : (C) 2002 by Franz Schmid
    email                : Franz.Schmid@altmuehlnet.de
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#ifndef FPOINTARRAY_H
#define FPOINTARRAY_H

#include <qmemarray.h>
#include <qwmatrix.h>
#include <qpoint.h>
#include "fpoint.h"

/**
  *@author Franz Schmid
  */

class FPointArray : public QMemArray<FPoint>
{
public: 
	FPointArray() {};
	FPointArray(int size) : QMemArray<FPoint>(size) {};
	void setPoint(uint i, float x, float y);
	void setPoint(uint i, FPoint p);
	bool setPoints( int nPoints, double firstx, double firsty, ... );
	bool putPoints( int index, int nPoints, double firstx, double firsty,  ... );
	bool putPoints( int index, int nPoints, const FPointArray & from, int fromIndex = 0 );
	void point(uint i, float *x, float *y);
	FPoint point(uint i);
	QPoint pointQ(uint i);
	void translate( float dx, float dy );
	FPoint WidthHeight();
	void map(QWMatrix m);
	FPointArray	 &operator=( const FPointArray &a )
	{ return (FPointArray&)assign( a ); }
	FPointArray copy() const
	{ FPointArray tmp; return *((FPointArray*)&tmp.duplicate(*this)); }
	void setMarker();
	void addPoint(float x, float y);
	void addPoint(FPoint p);
	~FPointArray() {};
};

#endif
