/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
	begin                : Aug 2005
	copyright            : (C) 2005 by Craig Bradney
	email                : cbradney@zip.com.au
***************************************************************************/

/***************************************************************************
*                                                                         *
*   ScMW program is free software; you can redistribute it and/or modify  *
*   it under the terms of the GNU General Public License as published by  *
*   the Free Software Foundation; either version 2 of the License, or     *
*   (at your option) any later version.                                   *
*                                                                         *
***************************************************************************/

#include "commonstrings.h"
//#include "commonstrings.moc"

QString CommonStrings::_Apply      = "";
QString CommonStrings::tr_Apply    = "";
QString CommonStrings::_Cancel     = "";
QString CommonStrings::tr_Cancel   = "";
QString CommonStrings::None        = "";
QString CommonStrings::tr_None     = "";
QString CommonStrings::tr_NoneColor= "";
QString CommonStrings::_OK         = "";
QString CommonStrings::tr_OK       = "";
QString CommonStrings::_Save       = "";
QString CommonStrings::tr_Save     = "";
QString CommonStrings::Warning     = "";
QString CommonStrings::trWarning   = "";

QString CommonStrings::trYes       = "";
QString CommonStrings::trNo        = "";
QString CommonStrings::trYesKey    = "";
QString CommonStrings::trNoKey     = "";

QString CommonStrings::customPageSize = "";
QString CommonStrings::trCustomPageSize = "";

QString CommonStrings::pageSet1    = "";
QString CommonStrings::pageSet2    = "";
QString CommonStrings::pageSet3    = "";
QString CommonStrings::pageSet4    = "";
QString CommonStrings::trPageSet1  = "";
QString CommonStrings::trPageSet2  = "";
QString CommonStrings::trPageSet3  = "";
QString CommonStrings::trPageSet4  = "";
QString CommonStrings::pageLocLeft          = "";
QString CommonStrings::pageLocMiddle        = "";
QString CommonStrings::pageLocMiddleLeft    = "";
QString CommonStrings::pageLocMiddleRight   = "";
QString CommonStrings::pageLocRight         = "";
QString CommonStrings::trPageLocLeft        = "";
QString CommonStrings::trPageLocMiddle      = "";
QString CommonStrings::trPageLocMiddleLeft  = "";
QString CommonStrings::trPageLocMiddleRight = "";
QString CommonStrings::trPageLocRight       = "";

QString CommonStrings:: masterPageNormal         = "";
QString CommonStrings:: trMasterPageNormal       = "";
QString CommonStrings:: masterPageNormalLeft     = "";
QString CommonStrings:: trMasterPageNormalLeft   = "";
QString CommonStrings:: masterPageNormalMiddle   = "";
QString CommonStrings:: trMasterPageNormalMiddle = "";
QString CommonStrings:: masterPageNormalRight    = "";
QString CommonStrings:: trMasterPageNormalRight  = "";

QString CommonStrings::trPenStyle_SolidLine      = "";
QString CommonStrings::trPenStyle_DashedLine     = "";
QString CommonStrings::trPenStyle_DottedLine     = "";
QString CommonStrings::trPenStyle_DashDotLine    = "";
QString CommonStrings::trPenStyle_DashDotDotLine = "";


QString CommonStrings::monday="", CommonStrings::tuesday="", CommonStrings::wednesday="";
QString CommonStrings::thursday="", CommonStrings::friday="", CommonStrings::saturday="", CommonStrings::sunday="";
QString CommonStrings::january="", CommonStrings::february="", CommonStrings::march="";
QString CommonStrings::april="", CommonStrings::may="", CommonStrings::june="";
QString CommonStrings::july="", CommonStrings::august="", CommonStrings::september="";
QString CommonStrings::october="", CommonStrings::november="", CommonStrings::december="";

QString CommonStrings::trRGB       = "";
QString CommonStrings::trCMYK      = "";
QString CommonStrings::trGrayscale = "";
QString CommonStrings::trDuotone   = "";
QString CommonStrings::trUnknownCS = "";

QString CommonStrings::trVisionNormal         = "";
QString CommonStrings::trVisionProtanopia     = "";
QString CommonStrings::trVisionDeuteranopia   = "";
QString CommonStrings::trVisionTritanopia     = "";
QString CommonStrings::trVisionFullColorBlind = "";

QString CommonStrings::trCustomTabFill        = "";

QString CommonStrings::trOpticalMarginsNone            = "";
QString CommonStrings::trOpticalMarginsLeftProtruding  = "";
QString CommonStrings::trOpticalMarginsRightProtruding = "";
QString CommonStrings::trOpticalMarginsLeftHangPunct   = "";
QString CommonStrings::trOpticalMarginsRightHangPunct  = "";
QString CommonStrings::trOpticalMarginsDefault         = "";

QString CommonStrings::trMinWordTracking   = "";
QString CommonStrings::trMaxWordTracking   = "";
QString CommonStrings::trMinGlyphExtension = "";
QString CommonStrings::trMaxGlyphExtension = "";

QString CommonStrings::PostScript   = "";
QString CommonStrings::trPostScript = "";
QString CommonStrings::PDF_1_3      = "";
QString CommonStrings::PDF_1_4      = "";
QString CommonStrings::PDF_1_5      = "";
QString CommonStrings::PDF_X3       = "";

CommonStrings::CommonStrings()
{
	languageChange();
}

const QString& CommonStrings::translatePageSetString(const QString &untrString)
{
	if (untrString==pageSet1)
		return trPageSet1;
	if (untrString==pageSet2)
		return trPageSet2;
	if (untrString==pageSet3)
		return trPageSet3;
	if (untrString==pageSet4)
		return trPageSet4;
	return untrString;
}

const QString& CommonStrings::translatePageSetLocString(const QString &untrString)
{
	if (untrString==pageLocLeft)
		return trPageLocLeft;
	if (untrString==pageLocMiddle)
		return trPageLocMiddle;
	if (untrString==pageLocMiddleLeft)
		return trPageLocMiddleLeft;
	if (untrString==pageLocMiddleRight)
		return trPageLocMiddleRight;
	if (untrString==pageLocRight)
		return trPageLocRight;
	return untrString;
}

const QString& CommonStrings::untranslatePageSetString(const QString &trString)
{
	if (trString==trPageSet1)
		return pageSet1;
	if (trString==trPageSet2)
		return pageSet2;
	if (trString==trPageSet3)
		return pageSet3;
	if (trString==trPageSet4)
		return pageSet4;
	return trString;
}

const QString& CommonStrings::untranslatePageSetLocString(const QString &trString)
{
	if (trString==trPageLocLeft)
		return pageLocLeft;
	if (trString==trPageLocMiddle)
		return pageLocMiddle;
	if (trString==trPageLocMiddleLeft)
		return pageLocMiddleLeft;
	if (trString==trPageLocMiddleRight)
		return pageLocMiddleRight;
	if (trString==trPageLocRight)
		return pageLocRight;
	return trString;
}

void CommonStrings::languageChange()
{
	CommonStrings::_Apply     = "&Apply";
	CommonStrings::tr_Apply   = tr( "&Apply" );

	CommonStrings::_Cancel    = "&Cancel";
	CommonStrings::tr_Cancel  = tr( "&Cancel" );

	CommonStrings::None        = "None";
	CommonStrings::tr_None     = tr( "None" );
	CommonStrings::tr_NoneColor= tr("None", "color name");

	CommonStrings::_OK        = "&OK";
	CommonStrings::tr_OK      = tr( "&OK" );

	CommonStrings::_Save      = "&Save";
	CommonStrings::tr_Save    = tr( "&Save" );

	CommonStrings::Warning    = "Warning";
	CommonStrings::trWarning  = tr( "Warning" );

	CommonStrings::trYes      = tr("Yes");
	CommonStrings::trNo       = tr("No");
	CommonStrings::trYesKey   = tr("&Yes");
	CommonStrings::trNoKey    = tr("&No");
	
	CommonStrings::customPageSize = "Custom";
	CommonStrings::trCustomPageSize = tr( "Custom", "CommonStrings, custom page size" );

	CommonStrings::pageSet1    = "Single Page";
	CommonStrings::pageSet2    = "Double Sided";
	CommonStrings::pageSet3    = "3-Fold";
	CommonStrings::pageSet4    = "4-Fold";
	CommonStrings::trPageSet1  = tr( "Single Page" );
	CommonStrings::trPageSet2  = tr( "Double Sided" );
	CommonStrings::trPageSet3  = tr( "3-Fold" );
	CommonStrings::trPageSet4  = tr( "4-Fold" );

	CommonStrings::pageLocLeft          = "Left Page";
	CommonStrings::pageLocMiddle        = "Middle";
	CommonStrings::pageLocMiddleLeft    = "Middle Left";
	CommonStrings::pageLocMiddleRight   = "Middle Right";
	CommonStrings::pageLocRight         = "Right Page";
	CommonStrings::trPageLocLeft        = tr( "Left Page", "Left page location" );
	CommonStrings::trPageLocMiddle      = tr( "Middle", "Middle page location" );
	CommonStrings::trPageLocMiddleLeft  = tr( "Middle Left", "Middle Left page location" );
	CommonStrings::trPageLocMiddleRight = tr( "Middle Right", "Middle Right page location" );
	CommonStrings::trPageLocRight       = tr( "Right Page", "Right page location" );
	
	CommonStrings::masterPageNormal         = "Normal";
	CommonStrings::trMasterPageNormal       = tr( "Normal", "Default single master page" );
	CommonStrings::masterPageNormalLeft     = "Normal Left";
	CommonStrings::trMasterPageNormalLeft   = tr( "Normal Left", "Default left master page" );
	CommonStrings::masterPageNormalMiddle   = "Normal Middle";
	CommonStrings::trMasterPageNormalMiddle = tr( "Normal Middle", "Default middle master page" );
	CommonStrings::masterPageNormalRight    = "Normal Right";
	CommonStrings::trMasterPageNormalRight  = tr( "Normal Right", "Default right master page" );
	
	CommonStrings::trPenStyle_SolidLine      = tr("Solid Line");
	CommonStrings::trPenStyle_DashedLine     = tr("Dashed Line");
	CommonStrings::trPenStyle_DottedLine     = tr("Dotted Line");
	CommonStrings::trPenStyle_DashDotLine    = tr("Dash Dot Line");
	CommonStrings::trPenStyle_DashDotDotLine = tr("Dash Dot Dot Line");
	
	CommonStrings::monday    = tr("Monday");
	CommonStrings::tuesday   = tr("Tuesday");
	CommonStrings::wednesday = tr("Wednesday");
	CommonStrings::thursday  = tr("Thursday");
	CommonStrings::friday    = tr("Friday");
	CommonStrings::saturday  = tr("Saturday");
	CommonStrings::sunday    = tr("Sunday");
	CommonStrings::january   = tr("January");
	CommonStrings::february  = tr("February");
	CommonStrings::march     = tr("March");
	CommonStrings::april     = tr("April");
	CommonStrings::may       = tr("May");
	CommonStrings::june      = tr("June");
	CommonStrings::july      = tr("July");
	CommonStrings::august    = tr("August");
	CommonStrings::september = tr("September");
	CommonStrings::october   = tr("October");
	CommonStrings::november  = tr("November");
	CommonStrings::december  = tr("December");

	CommonStrings::trRGB       = tr("RGB", "Colorspace");
	CommonStrings::trCMYK      = tr("CMYK", "Colorspace");
	CommonStrings::trGrayscale = tr("Grayscale", "Colorspace");
	CommonStrings::trDuotone   = tr("Duotone", "Colorspace");
	CommonStrings::trUnknownCS = tr("Unknown", "Colorspace (Unknown)");
	
	CommonStrings::trVisionNormal         = tr("Normal Vision", "Color Blindness - Normal Vision");
	CommonStrings::trVisionProtanopia     = tr("Protanopia (Red)", "Color Blindness - Red Color Blind");
	CommonStrings::trVisionDeuteranopia   = tr("Deuteranopia (Green)", "Color Blindness - Greed Color Blind");
	CommonStrings::trVisionTritanopia     = tr("Tritanopia (Blue)", "Color Blindness - Blue Color Blind");
	CommonStrings::trVisionFullColorBlind = tr("Full Color Blindness", "Color Blindness - Full Color Blindness");
	
	CommonStrings::trCustomTabFill = tr("Custom: ","Custom Tab Fill Option");
	
	CommonStrings::trOpticalMarginsNone            = tr("None", "Optical Margin Setting");
	CommonStrings::trOpticalMarginsLeftProtruding  = tr("Left Protruding", "Optical Margin Setting");
	CommonStrings::trOpticalMarginsRightProtruding = tr("Right Protruding", "Optical Margin Setting");
	CommonStrings::trOpticalMarginsLeftHangPunct   = tr("Left Hanging Punctuation", "Optical Margin Setting");
	CommonStrings::trOpticalMarginsRightHangPunct  = tr("Right Hanging Punctuation", "Optical Margin Setting");
	CommonStrings::trOpticalMarginsDefault         = tr("Default", "Optical Margin Setting");
	
	//Paragraph Style Word Tracking
	CommonStrings::trMinWordTracking = tr("Min. Word Tracking");
	CommonStrings::trMaxWordTracking = tr("Max. Word Tracking");
	
	//Paragraph Style Glyph Extension
	CommonStrings::trMinGlyphExtension = tr("Min. Glyph Extension");
	CommonStrings::trMaxGlyphExtension = tr("Max. Glyph Extension");

	CommonStrings::PostScript   = "PostScript";
	CommonStrings::trPostScript = tr("PostScript");
	CommonStrings::PDF_1_3      = "PDF 1.3";
	CommonStrings::PDF_1_4      = "PDF 1.4";
	CommonStrings::PDF_1_5      = "PDF 1.5";
	CommonStrings::PDF_X3       = "PDF/X-3";
}

const QString & CommonStrings::translatePenStyleName( Qt::PenStyle ps )
{
	if (ps == Qt::DashLine)
		return trPenStyle_DashedLine;
	if (ps == Qt::DotLine)
		return trPenStyle_DottedLine;
	if (ps == Qt::DashDotLine)
		return trPenStyle_DashDotLine;
	if (ps == Qt::DashDotDotLine)
		return trPenStyle_DashDotDotLine;
	//Return Qt::SolidLine as default or if SolidLine
	//if (ps == Qt::SolidLine)
	return trPenStyle_SolidLine;
}

