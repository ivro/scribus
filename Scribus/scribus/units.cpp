/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
    begin                : Jan 2005
    copyright            : (C) 2005 by Craig Bradney
    email                : cbradney@zip.com.au
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include <QString>
#include <QObject>
#include "units.h"

/*!
 * \brief Get ratio from unit to points.
 *
 * \param index unit index, see #ScUnit for valid unit index
 * \return 0 if for unvalid unit index,
 *         1 if for %Points, %Degrees and %Percent unit,
 *         ratio for other unit
 */
double unitGetRatioFromIndex(const int index)
{
	//PT, MM, IN, P, CM, C (Cicero)
	//NOTE: Calling functions that divide by this value will crash on divide by 0. They shouldnt be getting
	// a zero value if they are accessing here with a correct index.
	if (index<UNITMIN || index>UNITMAX)
		return 0;
	//                  PT,        MM,       IN,   P,             CM,               C,   °,   %
	double ratio[] = { 1.0, 25.4/72.0, 1.0/72.0, 1.0,      2.54/72.0, 25.4/72.0/4.512, 1.0, 1.0 };
// 	double ratio[] = { 1.0, 25.4/72.0, 1.0/72.0, 1.0/12.0, 2.54/72.0, 25.4/72.0/4.512, 1.0, 1.0 };
	return ratio[index];
}

/*!
 * \brief Get unit base.
 *
 * \param index unit index, see #ScUnit for valid unit index
 * \return unit base
 */
int SCRIBUS_API unitGetBaseFromIndex(const int index)
{
	if (index==SC_P)
		return 12;
	return 10;
}

/*!
 * @brief Strip the text from a value and return the double value for the unit
 */
double unitValueFromString(const QString& value)
{
	QString lowerValue = value.toLower();
	QString dbl = "0.0";
	if (lowerValue.indexOf("pt") != -1)
	{
		dbl = lowerValue.remove("pt");
	}
	else if (lowerValue.indexOf("mm") != -1)
	{
		dbl = lowerValue.remove("mm");
	}
	else if (lowerValue.indexOf("in") != -1)
	{
		dbl = lowerValue.remove("in");
	}
	else if (lowerValue.indexOf("p") != -1)
	{
		dbl = lowerValue.remove("p");
	}
	else if (lowerValue.indexOf("cm") != -1)
	{
		dbl = lowerValue.remove("cm");
	}
	else if (lowerValue.indexOf("°") != -1)
	{
		dbl = lowerValue.remove("°");
	}
	else if (lowerValue.indexOf("%") != -1)
	{
		dbl = lowerValue.remove("%");
	}
	else
		dbl = "0.0";

	dbl = dbl.trimmed();
	return dbl.toDouble();
}

/*!
 * \brief Get unit index from string.
 *
 * \param value string to consider
 * \return unit index, see #ScUnit for valid unit index
 */
scUnit unitIndexFromString(const QString& value)
{
	QString lowerValue = value.toLower();
	scUnit retVal;
	if (lowerValue.indexOf("pt") != -1)
	{
		retVal=SC_PT;
	}
	else if (lowerValue.indexOf("mm") != -1)
	{
		retVal=SC_MM;
	}
	else if (lowerValue.indexOf("in") != -1)
	{
		retVal=SC_IN;
	}
	else if (lowerValue.indexOf("p") != -1)
	{
		retVal=SC_P;
	}
	else if (lowerValue.indexOf("cm") != -1)
	{
		retVal=SC_CM;
	}
	else if (lowerValue.indexOf("c") != -1)
	{
		retVal=SC_C;
	}	
	else if (lowerValue.indexOf("°") != -1)
	{
		retVal=SC_DEGREES;
	}
	else if (lowerValue.indexOf("%") != -1)
	{
		retVal=SC_PERCENT;
	}	
	else
		retVal=SC_PT;
	return retVal;
}

/*!
 * \brief Get GUI suffix for unit.
 *
 * GUI suffix have a whitespace prepended.
 * See unitGetStrFromIndex() for general suffix.
 * \param index unit index, see #ScUnit for valid unit index.
 * \return a translated GUI suffix
 */
const QString unitGetSuffixFromIndex(const int index)
{
	if (index==SC_P)
	{
		return "";
	}
	return QString(" %1").arg(unitGetStrFromIndex(index));
}

/*!
 * \brief Get general suffix for unit.
 *
 * See unitGetSuffixFromIndex() for GUI suffix.
 * \param index unit index, see #ScUnit for valid unit index
 * \return a translated general suffix
 */
const QString unitGetStrFromIndex(const int index)
{
	if (index<UNITMIN || index>UNITMAX) 
		return "";
	QString suffix[] = {
		QObject::tr("pt"),
		QObject::tr("mm"),
		QObject::tr("in"),
		QObject::tr("p"),
		QObject::tr("cm"),
		QObject::tr("c"),
		QObject::tr("\xB0", "degrees, unicode 0xB0"), //degree
		QObject::tr("%")
	};
	return suffix[index];
}

/*!
 * \brief Get unstanslated general suffix for unit
 *
 * See unitGetStrFromIndex() for translated one.
 * \param index unit index, see #ScUnit for valid unit index
 * \return an unstranslated general suffix
 */
const QString unitGetUntranslatedStrFromIndex(const int index)
{
	if (index<UNITMIN || index>UNITMAX) 
		return "";
	QString suffix[] = { "pt", "mm", "in", "p", "cm", "c", "\xB0", "%" };
	return suffix[index];
}
/*!
 * \brief Get decimals for unit.
 *
 * \param index unit index, see #ScUnit for valid unit index
 * \return decimals
 */
int unitGetDecimalsFromIndex(const int index)
{
	if (index<UNITMIN || index>UNITMAX) 
		return 0;
	//                      PT,   MM,    IN,   P,    CM,     C,   °,   %
	int decimalPoints[] = {100, 1000, 10000, 100, 10000, 10000, 100, 100};
	return decimalPoints[index];
}

/*!
 * \brief Get precision for unit.
 *
 * \param index unit index, see #ScUnit for valid unit index
 * \return number of decimal digit
 */
int unitGetPrecisionFromIndex(const int index)
{
	if (index<UNITMIN || index>UNITMAX) 
		return 0;
	//                PT,MM,IN, P,CM, C, °, %
	int precision[] = {2, 3, 4, 2, 4, 4, 2, 2};
	return precision[index];
}

/*!
 * \brief Get a list of length units (to use in GUI)
 *
 * See unitValidForDocUnit() for length units.
 * \return an QStringList of length units
 */
const QStringList unitGetTextUnitList()
{
	QStringList suffixList;
	suffixList.append( QObject::tr( "Points (pt)" ) );
	suffixList.append( QObject::tr( "Millimeters (mm)" ) );
	suffixList.append( QObject::tr( "Inches (in)" ) );
	suffixList.append( QObject::tr( "Picas (p)" ) );
	suffixList.append( QObject::tr( "Centimeters (cm)" ) );
	suffixList.append( QObject::tr( "Cicero (c)" ) );
	//Here for completeness, dont use!
	//suffixList.append( QObject::tr( "°" ) );
	//suffixList.append( QObject::tr( "%" ) );
	return QStringList(suffixList);
}

/*!
 * Get the maximum unit index allowed.
 *
 * See #ScUnit for valid unit index.
 */
int unitGetMaxIndex()
{
	return UNITMAX;
}

/*!
 * \brief Converts %Millimeters to %Points.
 *
 * \param mm value in %Millimeters
 * \return value in %Points
 */
double mm2pts(double mm)
{
	return mm / unitGetRatioFromIndex(SC_MM);
}

/*!
 * \brief Converts %Inches to %Points.
 *
 * \param in value in %Inches
 * \return value in %Points
 */
double in2pts(double in)
{
	return in / unitGetRatioFromIndex(SC_IN);
}

/*!
 * \brief Converts %Picas to %Points
 *
 * \param p value in %Picas
 * \return value in %Points
 */
double p2pts(double p)
{
	return p / unitGetRatioFromIndex(SC_P);
}

/*!
 * \brief Converts %Centimeters to %Points
 *
 * \param cm value in %Centimetes
 * \return value in %Points
 */
double cm2pts(double cm)
{
	return cm / unitGetRatioFromIndex(SC_CM);
}

/*!
 * \brief Converts %Cicero to %Points
 *
 * \param c value in %Cicero
 * \return value in %Points
 */
double c2pts(double c)
{
	return c / unitGetRatioFromIndex(SC_C);
}

/*!
 * \brief Converts %Points to %Millimeters
 *
 * \param pts value in %Points
 * \return value in %Millimeters
 */
double pts2mm(double pts)
{
	return pts * unitGetRatioFromIndex(SC_MM);
}

/*!
 * \brief Converts %Points to %Inches.
 *
 * \param pts value in %Points
 * \return value in %Inches
 */
double pts2in(double pts)
{
	return pts * unitGetRatioFromIndex(SC_IN);
}

/*!
 * \brief Converts %Points to %Picas.
 *
 * \param pts value in %Points
 * \return value in %Picas
 */
double pts2p(double pts)
{
	return pts * unitGetRatioFromIndex(SC_P);
}

/*!
 * \brief Converts %Points to %Centimeters
 *
 * \param pts value in %Points
 * \return value in %Centimeters
 */
double pts2cm(double pts)
{
	return pts * unitGetRatioFromIndex(SC_CM);
}

/*!
 * \brief Converts %Points to %Cicero
 *
 * \param pts value in %Points
 * \return value in %Cicero
 */
double pts2c(double pts)
{
	return pts * unitGetRatioFromIndex(SC_C);
}

/*!
 * \brief Converts %Points to specified unit
 *
 * \param pts value in %Points
 * \param index unit index, see #ScUnit for valid unit index
 * \return value in specified unit
 */
double pts2value(double pts, int index)
{
	double ret = 0.0;
	switch (index)
	{
		case SC_POINTS:
		case SC_PICAS:
		case SC_DEGREES:
		case SC_PERCENT:
			ret = pts; //dont multiply by 1
			break;
		default:
			ret = pts * unitGetRatioFromIndex(index);
			break;
	}
	return ret;
}

/*!
 * \brief Converts specified value in %Points
 *
 * \param value value in index unit
 * \param index unit index, see #ScUnit for valid unit index
 * \return value in %Points
 */
double value2pts(double value, int index)
{
	double ret = 0.0;
	switch (index)
	{
		case SC_POINTS:
		case SC_PICAS:
		case SC_DEGREES:
		case SC_PERCENT:
			ret = value; // dont divide by 1
			break;
		default: // others
			ret = value / unitGetRatioFromIndex(index);
			break;
	}
	return ret;
}

/*!
 * \brief Converts unit to unit
 *
 * \param value value in fromUnit unit
 * \param fromUnit unit for value, see #ScUnit for valid unit index
 * \param toUnit unit for returning value, see #ScUnit for valid unit
 * \return value in toUnit unit
 */
double value2value(double value, int fromUnit, int toUnit)
{
	if (fromUnit==toUnit)
		return value;
		
	double pts = 0.0, ret = 0.0;
	//Can make this not convert to points at a later stage, for now, the function exists and works.
	pts= fromUnit==0 ? value : value / unitGetRatioFromIndex(fromUnit);
	ret= toUnit==0 ? pts : pts * unitGetRatioFromIndex(toUnit);
	return ret;
}

/*!
 * \brief Get a string of value converted in unit.
 *
 * \param pts value in %Points
 * \param index unit index, see #ScUnit for valid unit index
 * \param round has I have to round the converted value to unit precision, see unitGetPrecisionFromIndex() ?
 * \param suffix has I have to append suffix ?
 */
QString value2String(double pts, int index, bool round, bool suffix)
{
//ivro: Is toString not better as number see Qt documentation ?
	QString s;
	if (round)
		s=QString::number(pts2value(pts, index), 'f', unitGetPrecisionFromIndex(index));
	else
		s=QString::number(pts2value(pts, index));
	if (suffix)
		s += unitGetStrFromIndex(index);
	return s;
}

/*!
 * \brief Get iteration value 1 for vruler, hruler and tabruler.
 *
 * \param index unit index, see #ScUnit for valid unit index
 * \return iteration value
 *
 * \todo Documents use cases
 */
double unitRulerGetIter1FromIndex(const int index)
{
	if (!unitValidForDocUnit(index)) 
		return 0;
	//                 PT,         MM,   IN,    P,        CM,               C     °,    %
	double iter[] = {10.0, 720.0/25.4, 18.0, 12.0, 72.0/25.4, 72.0/25.4*4.512, 10.0, 10.0};
	return iter[index];
}

/*!
 * \brief Get iteration value 2 for vruler, hruler, tabruler
 *
 * \param index unit index, see #ScUnit for valid unit index
 * \return iteration value
 *
 * \todo Documents use cases
 */
double unitRulerGetIter2FromIndex(const int index)
{
	if (!unitValidForDocUnit(index))
		return 0;
	//                  PT,          MM,   IN,     P,         CM,                C,     °,     %
	double iter[] = {100.0, 7200.0/25.4, 72.0, 120.0, 720.0/25.4, 720.0/25.4*4.512, 100.0, 100.0};
	return iter[index];
}

/*!
 * \brief Is unit can be used as length unit ?
 *
 * Valid length unit are
 * - %Points,
 * - %Millimeters,
 * - %Inches,
 * - %Picas,
 * - %Centimeters,
 * - %Cicero.
 * Invalid unit are
 * - %Degress,
 * - %Percent.
 *
 * \param index unit index, see #ScUnit for valid unit index.
 * \return true if length unit, false otherwise
 */
bool unitValidForDocUnit(const int index)
{
	if (index<UNITMIN || index>UNITMAX)
		return false;
	if (index==6 || index==7)
		return false;
	return true;
}
