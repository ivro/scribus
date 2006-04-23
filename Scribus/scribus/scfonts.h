/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef SCFONTS_H
#define SCFONTS_H

#include <qstring.h>
#include <qstrlist.h>
#include <qstringlist.h>
#include <qdict.h>
#include <qfont.h>
#include <qmap.h>
#include <qdatetime.h>
#include <ft2build.h>
#include FT_FREETYPE_H
#include FT_OUTLINE_H
#include FT_GLYPH_H

FT_Error ftIOFunc( FT_Stream fts, unsigned long offset, unsigned char* buffer, unsigned long count);

// #include <qpixmap.h>

#include "scribusapi.h"
#include "fpointarray.h"
#include "scconfig.h"

// #include "scfonts_encoding.h"

/*  Base Class Foi : This is subclassed by a class to handle Type1 fonts, a class
		to handle TrueType fonts, and potentially any other type that becomes appropriate in
		the future.
		Note the virtual destructor, needed to ensure that the correct destructor is called
		for subclasses

		The RealName field has been changed from a data member to a member function.
		This is because the only place the PostScript real name of a font is required is
		the printing code, so it's cheaper to extract this information only when it is
		required, for just the used fonts, than for every one of potentially hundreds at
		application startup!  This also allows for the fact that truetype fonts will require
		a different method of extracting their names.

		One implication of using a base class/subclass model for fonts:  It is no longer
		possible to store the Foi structures in a QMap.  This is because QMap allocates
		its own structures, and copies the supplied data to them.  A QMap<QString,Foi>
		would demote all subclasses to Foi classes, and hence break the polymorphism.
		QDict can be used instead, with very little change to the rest of the code, since
		it stores references to the data instead of copying the data.  With AutoDelete set
		to true, it will automatically dispose of all data when its destructor is called,
		so there are no extra cleaning-up chores to take care of.
*/

class SCRIBUS_API Foi
{
	public:
		enum FontType { TYPE0, TYPE1, TYPE3, TTF, CFF, OTF, UNKNOWN_TYPE };
		enum FontFormat { PFA, PFB, TYPE2, TYPE42,
		// handled by freetype:	PFB_MAC, DFONT, HQX, MACBIN,
		                  SFNT, TTCF, UNKNOWN_FORMAT };
		
		Foi(QString fam, QString style, QString alt, QString psname, QString path, int face, bool embedps);
		virtual ~Foi() {};
		virtual QString RealName();
		virtual bool EmbedFont(QString &str);
		virtual void RawData(QByteArray & bb);
		virtual bool ReadMetrics();
		virtual bool GlNames(QMap<uint, QString> *GList);
private:
		QString SCName;
		QString fontFile;
		int     faceIndex_;
		QString cached_RealName;
		QString Family;
		QString Effect;
		QString Alternative;
public:
		FT_Face ftFace();
		QString scName()   const { return SCName; } ;
		QString fontPath() const { return faceIndex_ >= 0 ? QString("%1(%2)").arg(fontFile).arg(faceIndex_+1) : fontFile; };
		QString fontFilePath() const { return fontFile; };
		int faceIndex() const { return faceIndex_; };
		QString family()   const { return Family; } ;
		QString style()    const { return Effect; } ;
//		QFont Font;
		struct GlyphR { FPointArray Outlines;
					 					double x;
					 					double y;
				  				};
// those should be private: -AV
		bool EmbedPS;
		bool HasMetrics;
		bool isOTF;
		bool Subset;
		bool isStroked;
		QMap<uint,double> CharWidth;
		QMap<uint,GlyphR> GlyphArray;
		QMap<uint,FPointArray> RealGlyphs;
		QString Ascent;
		QString CapHeight;
		QString Descender;
		QString ItalicAngle;
		QString StdVW;
		QString FontEnc;
		bool IsFixedPitch;
		QString FontBBox;
		QString PrivateFont;
		bool UseFont;
		bool HasKern;
		bool HasNames;
		double uniEM;
		double numAscent;
		double numDescender;
		double underline_pos;
		double strikeout_pos;
		double strokeWidth;
		Foi::FontType typeCode;
		Foi::FontFormat formatCode;
//		QPixmap Appearance;
private:
		FT_Face face;
		static FT_Library library;
public:
		double ascent() { return numAscent; }
		double descent() { return numDescender; }
		double height() { return face->height; }
		double max_advance_width() { return face->max_advance_width; }
};


/* Main class SCFonts.
   Subclass of QDict<Foi>.
   This class replaces the previous SCFonts typedef, and is nearly as convenient.
   The chief difference from the application point of view is that while data can
   still be retrieved with SCFonts[fontname], this cannot be used to add members.
   Since the only piece of code that will generally add members is scfonts.h, this
   is not a major problem.
*/

class SCRIBUS_API SCFonts : public QDict<Foi>
{
	public:
		SCFonts();
		~SCFonts();
		void updateFontMap();
		void GetFonts(QString pf, bool showFontInfo=false);
		void AddScalableFonts(const QString &path, QString DocName = "");
		void removeFont(QString name);
		QMap<QString, QStringList> fontMap;
	private:
		void ReadCacheList(QString pf);
		void WriteCacheList(QString pf);
		void AddPath(QString p);
		bool AddScalableFont(QString filename, FT_Library &library, QString DocName);
		void AddUserPath(QString pf);
#ifdef HAVE_FONTCONFIG
		void AddFontconfigFonts();
#else
#ifndef QT_MAC
		void AddXFontServerPath();
		void AddXFontPath();
#endif
#endif
		QStrList FontPath;
		QString ExtraPath;
		struct testCache
		{
			bool isOK;
			bool isChecked;
			QDateTime lastMod;
		};
		QMap<QString, testCache> checkedFonts;
	protected:
		bool showFontInformation;
};

typedef QDictIterator<Foi> SCFontsIterator;

#endif
