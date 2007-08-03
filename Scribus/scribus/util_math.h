/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef _UTIL_MATH_H
#define _UTIL_MATH_H

#include <vector>

#include <QString>
#include <QStringList>
#include <Q3PointArray>
#include <QPolygon>
#include <QPoint>
#include <QList>
#include <QPainterPath>
#include <QTextStream>

#include "fpoint.h"
#include "fpointarray.h"
#include "scribusapi.h"

/*! \brief Compare double values by pre-multiplying by 10000 and converting to long if possible.
If premultiplication does not allow to store result in a long value, perform a standard comparison.
*/
bool SCRIBUS_API compareDouble(double a, double b);
FPoint SCRIBUS_API getMaxClipF(FPointArray* Clip);
FPoint SCRIBUS_API getMinClipF(FPointArray* Clip);
double SCRIBUS_API xy2Deg(double x, double y);
QPolygon SCRIBUS_API FlattenPath(FPointArray ina, QList<uint> &Segs);
QList<QPainterPath> SCRIBUS_API decomposePath(QPainterPath &path);
QPolygon SCRIBUS_API RegularPolygon(double w, double h, uint c, bool star, double factor, double rota);
FPointArray SCRIBUS_API RegularPolygonF(double w, double h, uint c, bool star, double factor, double rota);
uint SCRIBUS_API getDouble(QString in, bool raw);
inline double SCRIBUS_API square(double);
inline double SCRIBUS_API distance(double, double);
/*! \brief Constrains an angle of rotation to 45 degree intervals
   Will make code simpler and reduce interval or provide as a parameter
   \param double angle Angle in degrees
   \param double contrain value in degrees
   \retval double Constrained angle
 */
double SCRIBUS_API constrainAngle(double angle, double constrain);
/*! \brief Get the rotation angle (in radian) from a transformation matrix
   Will make code simpler and reduce interval or provide as a parameter
   \param matrix the transformation matrix
   \param def the value that should be return if matrix is not a rotation matrix
   \retval double the rotation angle
 */
double SCRIBUS_API getRotationFromMatrix(QMatrix& matrix, double def);

#endif
