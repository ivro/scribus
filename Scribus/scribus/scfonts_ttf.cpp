
#include <qfile.h>
#include <qstring.h>

#include <sys/types.h>

#include "scfonts_ttf.h"
#include "config.h"
#include <ft2build.h>
#include FT_FREETYPE_H
#include FT_OUTLINE_H
#include FT_GLYPH_H
extern FPointArray traceChar(FT_Face face, uint chr, int chs, float *x, float *y);

QString Foi_ttf::RealName()
{
	return(cached_RealName);
}

bool Foi_ttf::ReadMetrics()
{
	Ascent = "0";
	CapHeight = "0";
	Descender = "0";
	ItalicAngle = "0";
	StdVW = "1";
	FontBBox = "0 0 0 0";
	IsFixedPitch = false;	
	if(metricsread)
		return(true);
	CharWidth.clear();
	GlyphArray.clear();
	QString tmp;
	bool			error;
	FT_Library library;
	FT_ULong  charcode;
	FT_UInt   gindex;
	FT_Face   face;
	FPointArray outlines;
	float x, y;
	struct GlyphR GRec;
	error = FT_Init_FreeType( &library );
	error = FT_New_Face( library, Datei, 0, &face );
	uniEM = static_cast<float>(face->units_per_EM);
	HasKern = FT_HAS_KERNING(face);
	Ascent = tmp.setNum(face->ascender * 1000 / uniEM);
	Descender = tmp.setNum(face->descender * 1000 / uniEM);
	CapHeight = Ascent;
	numDescender = face->descender / uniEM;
	numAscent = face->ascender / uniEM;
	underline_pos = face->underline_position / uniEM;
	strikeout_pos = numAscent / 3;
	strokeWidth = face->underline_thickness / uniEM;
	ItalicAngle = "0";
	StdVW = "1";
	FontBBox = tmp.setNum(face->bbox.xMin * 1000 / uniEM)+" "+tmp.setNum(face->bbox.yMin * 1000 / uniEM)+" "+tmp.setNum(face->bbox.xMax * 1000 / uniEM)+" "+tmp.setNum(face->bbox.yMax * 1000 / uniEM);
	IsFixedPitch = face->face_flags & 4;
	gindex = 0;
	charcode = FT_Get_First_Char( face, &gindex );
	while ( gindex != 0 )
		{
		FT_Load_Glyph( face, gindex, FT_LOAD_NO_SCALE | FT_LOAD_NO_BITMAP );
		CharWidth.insert(charcode, face->glyph->metrics.horiAdvance / uniEM);
		outlines = traceChar(face, charcode, 10, &x, &y);
		GRec.Outlines = outlines.copy();
		GRec.x = x;
		GRec.y = y;
		GlyphArray.insert(charcode, GRec);
		charcode = FT_Get_Next_Char( face, charcode, &gindex );
		}
	FT_Done_FreeType( library );
	HasMetrics=true;
	metricsread=true;
	return(HasMetrics);
}

bool Foi_ttf::EmbedFont(QString &str)
{
	QFile file(Datei);
	if(!(file.open(IO_ReadOnly)))
		return(false);
	QString tmp4;
	QString tmp2 = "";
	QString tmp3 = "";
	int counter = 0;
	char *buf[50];
	FT_Library library;
	FT_Face face;
	FT_ULong  charcode;
  FT_UInt   gindex;
	FT_Init_FreeType(&library);
	FT_New_Face(library, file.name(), 0, &face);
  str+="%!PS-TrueTypeFont\n";
	str+="11 dict begin\n";
	str+="/FontName /" + RealName() + " def\n";
	str+="/Encoding /ISOLatin1Encoding where {pop ISOLatin1Encoding} {StandardEncoding} ifelse def\n";
	str+="/PaintType 0 def\n/FontMatrix [1 0 0 1 0 0] def\n";
	str+="/FontBBox ["+FontBBox+"] def\n";
	str+="/FontType 42 def\n";
	str+="/FontInfo 8 dict dup begin\n";
	str+="/FamilyName (" + RealName() + ") def\n";
	str+="end readonly def\n";
	char *tmp = new char[65535];
	int length;
	char linebuf[80];
	str += "/sfnts [";
	file.at(0);
	int poso=0;
	do
		{
		int posi=0;
		length=file.readBlock(tmp,65534);
		if(length)
			{
			str+="\n<";
			for (int j = 0; j < length; j++)
				{
				unsigned char u=tmp[posi];
				linebuf[poso]=((u >> 4) & 15) + '0';
				if(u>0x9f) linebuf[poso]+='a'-':';
				++poso;
				u&=15; linebuf[poso]=u + '0';
				if(u>0x9) linebuf[poso]+='a'-':';
				++posi;
				++poso;
				if (poso > 70)
					{
					linebuf[poso++]='\n';
					linebuf[poso++]=0;
					str += linebuf;
					poso = 0;
					}
				}
			linebuf[poso++]=0;
			str += linebuf;
			poso = 0;
			str += "00>";
			}
		}
	while (length==65534);
	str += "\n] def\n";
	delete tmp;
	gindex = 0;
  charcode = FT_Get_First_Char(face, &gindex );
  while (gindex != 0)
		{
		FT_Get_Glyph_Name(face, gindex, buf, 50);
		tmp2 += "/"+QString(reinterpret_cast<char*>(buf))+" "+tmp3.setNum(gindex)+" def\n";
    charcode = FT_Get_Next_Char(face, charcode, &gindex );
		counter++;
		}
	FT_Done_FreeType( library );
	tmp4.setNum(counter);
	str += "/CharStrings " + tmp4 + " dict dup begin\n"+tmp2;
	str += "end readonly def\n";
  str += "FontName currentdict end definefont pop\n";
	file.close();
	return(true);
}

