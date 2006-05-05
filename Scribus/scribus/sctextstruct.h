/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef SCTEXTSTRUCT_H
#define SCTEXTSTRUCT_H

#ifdef HAVE_CONFIG_H
#include "scconfig.h"
#endif

#include "scribusapi.h"
#include "text/nlsconfig.h"

#ifdef NLS_CONFORMANCE
#define NLS_PRIVATE private
#else
#define NLS_PRIVATE public
#endif

#include <qstring.h>

class Foi;
class PageItem;

/* Struktur fuer Pageitem Text */


/*
 *  sctext.h
 *  Scribus
 *
 *  Created by Andreas Vox on 29.07.05.
 *  Copyright 2005 under GPL2. All rights reserved.
 *
 */

enum StyleFlag {
	ScStyle_Default       = 0,
    ScStyle_Superscript   = 1,
    ScStyle_Subscript     = 2,
    ScStyle_Outline       = 4,
    ScStyle_Underline     = 8,
    ScStyle_Strikethrough = 16,
    ScStyle_AllCaps       = 32,
    ScStyle_SmallCaps     = 64,
    ScStyle_HyphenationPossible=128, //Hyphenation possible here (Smart Hyphen)
    ScStyle_Shadowed      = 256,
    ScStyle_UnderlineWords= 512,
    ScStyle_Reserved01    = 1024, //free, not used in the moment
    ScStyle_DropCap       = 2048,
    ScStyle_SuppressSpace = 4096,//internal use in PageItem (Suppresses spaces when in Block alignment)
    ScStyle_SmartHyphenVisible=8192, //Smart Hyphen visible at line end
    ScStyle_StartOfLine   = 16384,
	ScStyle_UserStyles    = 2047, // 1919, // == 1024 + 512 + 256 + 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1
	ScStyle_None          = 65535
};

StyleFlag& operator&= (StyleFlag& left, StyleFlag right);

StyleFlag& operator|= (StyleFlag& left, StyleFlag right);

StyleFlag operator& (StyleFlag left, StyleFlag right);

StyleFlag operator| (StyleFlag left, StyleFlag right);

StyleFlag operator^ (StyleFlag left, StyleFlag right);

StyleFlag operator~ (StyleFlag arg);




class SCRIBUS_API CharStyle {
public:
	static const short NOVALUE = -16000;
	static const QString NOCOLOR;
	
    CharStyle() {
		cname_ = "";
		cparent_ = NULL;
        csize = NOVALUE;
        cshade = NOVALUE;
        cshade2 = NOVALUE;
        cstyle = ScStyle_None;
        cscale = NOVALUE;
        cscalev = NOVALUE;
        cbase = NOVALUE;
        cshadowx = NOVALUE;
        cshadowy = NOVALUE;
        coutline = NOVALUE;
        cunderpos = NOVALUE;
        cunderwidth = NOVALUE;
        cstrikepos = NOVALUE;
        cstrikewidth = NOVALUE;
        cextra = NOVALUE;

        cfont = NULL; 
        ccolor = NOCOLOR;
        cstroke = NOCOLOR;
    };

    CharStyle(Foi * font, int size, StyleFlag style = ScStyle_Default) {
		cname_ = "";
		cparent_ = NULL;
        csize = size;
        cshade = 1;
        cshade2 = 1;
        cstyle = style;
        cscale = 1000;
        cscalev = 1000;
        cbase = 0;
        cshadowx = 0;
        cshadowy = 0;
        coutline = 0;
        cunderpos = 0;
        cunderwidth = 0;
        cstrikepos = 0;
        cstrikewidth = 0;
        cextra = 0;

        cfont = font; 
        ccolor = "Black";
        cstroke = "Black";
    };

	CharStyle(const CharStyle & other);
	
	bool operator==(const CharStyle & other) const;
	bool operator!=(const CharStyle & other) const { return ! (*this==other); }
	CharStyle & operator=(const CharStyle & other);

	void applyStyle(const CharStyle & other);
	void eraseStyle(const CharStyle & other);
	
	QString asString() const;
	
	QString name() const { return cname_; }
	const CharStyle * parent() const { return cparent_; }
	int fontSize() const { return csize; }
	int fillShade() const { return cshade; }
	int strokeShade() const { return cshade2; }
	StyleFlag effects() const { return cstyle; }
	int scaleH() const { return cscale; }
	int scaleV() const { return cscalev; }
	int baselineOffset() const { return cbase; }
	int shadowXOffset() const { return cshadowx; }
	int shadowYOffset() const { return cshadowy; }
	int outlineWidth() const { return coutline; }
	int underlineOffset() const { return cunderpos; }
	int underlineWidth() const { return cunderwidth; }
	int strikethruOffset() const { return cstrikepos; }
	int strikethruWidth() const { return cstrikewidth; }
	int tracking() const { return cextra; }
	
	Foi* font() const { return cfont; } 
	QString fillColor() const { return ccolor; }
	QString strokeColor() const { return cstroke; }
	
NLS_PRIVATE:
	QString cname_;
	CharStyle * cparent_;
    int csize;
    short cshade;
    short cshade2;
    StyleFlag cstyle;
    short cscale;
    short cscalev;
    short cbase;
    short cshadowx;
    short cshadowy;
    short coutline;
    short cunderpos;
    short cunderwidth;
    short cstrikepos;
    short cstrikewidth;
    short cextra;

    Foi* cfont;
    QString ccolor;
    QString cstroke;

};

inline bool CharStyle::operator==(const CharStyle & other) const
{
	return  (csize == other.csize &&
			 cshade == other.cshade &&
			 cshade2 == other.cshade2 &&
			 cstyle == other.cstyle &&
			 cscale == other.cscale &&
			 cscalev == other.cscalev &&
			 cbase == other.cbase &&
			 cshadowx == other.cshadowx &&
			 cshadowy == other.cshadowy &&
			 coutline == other.coutline &&
			 cunderpos == other.cunderpos &&
			 cunderwidth == other.cunderwidth &&
			 cstrikepos == other.cstrikepos &&
			 cstrikewidth == other.cstrikewidth &&
			 cextra == other.cextra &&
			 cfont == other.cfont &&
			 ccolor == other.ccolor &&
			 cstroke == other.cstroke );	
}

inline CharStyle & CharStyle::operator=(const CharStyle & other)
{
	csize = other.csize;
	cshade = other.cshade;
	cshade2 = other.cshade2;
	cstyle = other.cstyle;
	cscale = other.cscale;
	cscalev = other.cscalev;
	cbase = other.cbase;
	cshadowx = other.cshadowx;
	cshadowy = other.cshadowy;
	coutline = other.coutline;
	cunderpos = other.cunderpos;
	cunderwidth = other.cunderwidth;
	cstrikepos = other.cstrikepos;
	cstrikewidth = other.cstrikewidth;
	cextra = other.cextra;
	cfont = other.cfont;
	ccolor = other.ccolor;
	cstroke = other.cstroke;
	return *this;
}

inline CharStyle::CharStyle(const CharStyle & other)
{
	csize = other.csize;
	cshade = other.cshade;
	cshade2 = other.cshade2;
	cstyle = other.cstyle;
	cscale = other.cscale;
	cscalev = other.cscalev;
	cbase = other.cbase;
	cshadowx = other.cshadowx;
	cshadowy = other.cshadowy;
	coutline = other.coutline;
	cunderpos = other.cunderpos;
	cunderwidth = other.cunderwidth;
	cstrikepos = other.cstrikepos;
	cstrikewidth = other.cstrikewidth;
	cextra = other.cextra;
	cfont = other.cfont;
	ccolor = other.ccolor;
	cstroke = other.cstroke;
}


inline void CharStyle::applyStyle(const CharStyle & other)
{
	if (other.csize != NOVALUE)
		csize = other.csize;
	if (other.cshade != NOVALUE)
		cshade = other.cshade;
	if (other.cshade2 != NOVALUE)
		cshade2 = other.cshade2;
	if (other.cstyle != ScStyle_None)
		cstyle = static_cast<StyleFlag>((cstyle & ~ScStyle_UserStyles) | (other.cstyle & ScStyle_UserStyles));
	if (other.cscale != NOVALUE)
		cscale = other.cscale;
	if (other.cscalev != NOVALUE)
		cscalev = other.cscalev;
	if (other.cbase != NOVALUE)
		cbase = other.cbase;
	if (other.cshadowx != NOVALUE)
		cshadowx = other.cshadowx;
	if (other.cshadowy != NOVALUE)
		cshadowy = other.cshadowy;
	if (other.coutline != NOVALUE)
		coutline = other.coutline;
	if (other.cunderpos != NOVALUE)
		cunderpos = other.cunderpos;
	if (other.cunderwidth != NOVALUE)
		cunderwidth = other.cunderwidth;
	if (other.cstrikepos != NOVALUE)
		cstrikepos = other.cstrikepos;
	if (other.cstrikewidth != NOVALUE)
		cstrikewidth = other.cstrikewidth;
	if (other.cextra != NOVALUE)
		cextra = other.cextra;
	if (other.cfont != NULL)
		cfont = other.cfont;
	if (other.ccolor != NOCOLOR)
		ccolor = other.ccolor;
	if (other.cstroke != NOCOLOR)
		cstroke = other.cstroke;
}

inline void CharStyle::eraseStyle(const CharStyle & other)
{
	if (other.csize == csize)
		csize = NOVALUE;
	if (other.cshade == cshade)
		cshade = NOVALUE;
	if (other.cshade2 == cshade2)
		cshade2 = NOVALUE;
	if ((other.cstyle  & ScStyle_UserStyles) == (cstyle & ScStyle_UserStyles))
		cstyle = ScStyle_None;
	if (other.cscale == cscale)
		cscale = NOVALUE;
	if (other.cscalev == cscalev)
		cscalev = NOVALUE;
	if (other.cbase == cbase)
		cbase = NOVALUE;
	if (other.cshadowx == cshadowx)
		cshadowx = NOVALUE;
	if (other.cshadowy == cshadowy)
		cshadowy = NOVALUE;
	if (other.coutline == coutline)
		coutline = NOVALUE;
	if (other.cunderpos == cunderpos)
		cunderpos = NOVALUE;
	if (other.cunderwidth == cunderwidth)
		cunderwidth = NOVALUE;
	if (other.cstrikepos == cstrikepos)
		cstrikepos = NOVALUE;
	if (other.cstrikewidth == cstrikewidth)
		cstrikewidth = NOVALUE;
	if (other.cextra == cextra)
		cextra = NOVALUE;
	if (other.cfont == cfont)
		cfont = NULL;
	if (other.ccolor == ccolor)
		ccolor = NOCOLOR;
	if (other.cstroke == cstroke)
		cstroke = NOCOLOR;
}


class ParagraphStyle : private CharStyle
{
public:
	enum LineSpacingMode { 
		FixedLineSpacing        = 0, 
		AutomaticLineSpacing    = 1,
		BaselineGridLineSpacing = 2
	};
	struct TabRecord
	{
		double tabPosition;
		int tabType;
		QChar tabFillChar;
	};
	
private:
	QString Vname;
	ParagraphStyle * pparent_;
	LineSpacingMode LineSpaMode;
	double LineSpa;
	int textAlignment;
	double Indent;
	double rightMargin_;
	double First;
	double gapBefore_;
	double gapAfter_;
	QValueList<TabRecord> TabValues; 
	bool Drop;
	int DropLin;
	double DropDist;
	bool BaseAdj;
	
public:
	ParagraphStyle();
	QString name() const { return Vname; }
	const ParagraphStyle * parent() const { return pparent_; }
	int lineSpacingMode() const { return LineSpaMode; }
	double lineSpacing() const { return LineSpa; }
	int alignment() const { return textAlignment; }
	double firstIndent() const { return First; }
	double leftMargin() const { return Indent; }
	double rightMargin() const { return rightMargin_; }
	double gapBefore() const { return gapBefore_; }
	double gapAfter() const { return gapAfter_; }
	bool hasDropCap() const { return Drop; }
	int dropCapLines() const { return DropLin; }
	double dropCapOffset() const { return DropDist; }
	bool useBaselineGrid() const { return BaseAdj; }
	
	void setName(QString p) { 
		Vname = p; 
	}
	void setLineSpacingMode(LineSpacingMode p) { 
		LineSpaMode = p; 
	}
	void setLineSpacing(double p) { 
		LineSpa = p; 
	}
	void setAlignment(int p) { 
		textAlignment = p; 
	}
	void setFirstIndent(double p) { 
		First = p; 
	}
	void setLeftMargin(double p) { 
		Indent = p; 
	}
	void setRightMargin(double p) { 
		rightMargin_ = p; 
	}
	void setGapBefore(double p) {
		gapBefore_ = p;
	}
	void setGapAfter(double p) {
		gapAfter_ = p;
	}
	void setHasDropCap(bool p) { 
		Drop = p; 
	}
	void setDropCapLines(int p) { 
		DropLin = p; 
	}
	void setDropCapOffset(double p) { 
		DropDist = p; 
	}

	void setUseBaselineGrid(bool p) { 
		BaseAdj = p; 
	}

	// these return writeable references for now:
	QValueList<TabRecord> & tabValues() { return TabValues; }
	const QValueList<TabRecord> & tabValues() const { return TabValues; }
	CharStyle & charStyle() { return *this; }
	const CharStyle& charStyle() const { return *this; }
	bool equiv(const ParagraphStyle& other) const;
	bool operator==(const ParagraphStyle& other) const
	{ 
		return name()==other.name() && equiv(other);
	}
};


#ifndef NLS_PROTO
class SCRIBUS_API ScText : public CharStyle
{
public:
	bool cselect;
	short cab;
	float xp;
	float yp;
	float PtransX;
	float PtransY;
	float PRot;
	PageItem* cembedded;
	QString ch;
};
#endif

#endif // SCTEXTSTRUCT_H

