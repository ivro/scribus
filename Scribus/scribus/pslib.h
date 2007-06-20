/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          pslib.h  -  description
                             -------------------
    begin                : Sat May 26 2001
    copyright            : (C) 2001 by Franz Schmid
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

#ifndef PSLIB_H
#define PSLIB_H
#include <qstring.h>
#include <qpen.h>
#include <qfile.h>
#include <QList>
#include <Q3TextStream>
//Added by qt3to4:
#include <vector>
#include <utility>
class ScribusDoc;
//class ScribusView;
#include "scribusapi.h"
#include "page.h"
#include "pageitem.h"
#include "scribusstructs.h"
#include CMS_INC

#ifdef NLS_PROTO
class ScText;
#endif

class MultiProgressDialog;

/**
  *@author Franz Schmid
  * Diese Klasse erzeugt Postscript-Dateien
  */

class SCRIBUS_API PSLib : public QObject
{
	Q_OBJECT
	public:
		PSLib(PrintOptions &options, bool psart, SCFonts &AllFonts, QMap<QString, QMap<uint, FPointArray> > DocFonts, ColorList DocColors, bool pdf = false, bool spot = true);
		virtual ~PSLib() {};
		virtual bool PS_set_file(QString fn);
		virtual void PS_set_Info(QString art, QString was);
		virtual void PS_begin_doc(ScribusDoc *doc, double x, double y, double breite, double hoehe, int numpage, bool doDev, bool sep, bool farb, bool ic, bool gcr, bool over = false);
		virtual void PS_begin_page(Page* pg, MarginStruct* Ma, bool Clipping);
		virtual void PS_end_page();
		virtual void PS_curve(double x1, double y1, double x2, double y2, double x3, double y3);
		virtual void PS_moveto(double x, double y);
		virtual void PS_lineto(double x, double y);
		virtual void PS_closepath();
		virtual void PS_translate(double x, double y);
		virtual void PS_scale(double x, double y);
		virtual void PS_rotate(double x);
		virtual void PS_clip(bool mu);
		virtual void PS_save();
		virtual void PS_restore();
		virtual void PS_setcmykcolor_fill(double c, double m, double y, double k);
		virtual void PS_setcmykcolor_dummy();
		virtual void PS_setcmykcolor_stroke(double c, double m, double y, double k);
		virtual void PS_setlinewidth(double w);
		virtual void PS_setcapjoin(Qt::PenCapStyle ca, Qt::PenJoinStyle jo);
		virtual void PS_setdash(Qt::PenStyle st, double offset, QList<double> dash);
		virtual void PS_selectfont(QString f, double s);
		virtual void PS_fill();
		virtual void PS_fillspot(QString color, double shade);
		virtual void PS_stroke();
		virtual void PS_strokespot(QString color, double shade);
		virtual void PS_fill_stroke();
		virtual void PS_newpath();
		virtual void PS_MultiRadGradient(double w, double h, double x, double y, QList<double> Stops, QStringList Colors, QStringList colorNames, QList<int> colorShades);
		virtual void PS_MultiLinGradient(double w, double h, QList<double> Stops, QStringList Colors, QStringList colorNames, QList<int> colorShades);
		virtual void PS_show(double x, double y);
		virtual void PS_showSub(uint chr, QString font, double size, bool stroke);
		virtual void PS_show_xyG(QString font, uint gl, double x, double y, bool stop);
		virtual void PS_image(PageItem *c, double x, double y, QString fn, double scalex, double scaley, QString Prof, bool UseEmbedded, bool UseProf, QString Name = "");
		virtual void PS_plate(int nr, QString name = "");
		virtual void PS_setGray();
		virtual void PDF_Bookmark(QString text, uint Seite);
		virtual void PDF_Annotation(QString text, double x, double y, double b, double h);
		virtual void PS_close();
		virtual void PS_insert(QString i);
		virtual void PS_TemplateStart(QString Name);
		virtual void PS_TemplateEnd();
		virtual void PS_UseTemplate(QString Name);
		virtual void PS_ImageData(PageItem *c, QString fn, QString Name, QString Prof, bool UseEmbedded, bool UseProf);
		virtual int CreatePS(ScribusDoc* Doc, PrintOptions &options);
		virtual void ProcessItem(ScribusDoc* Doc, Page* a, PageItem* c, uint PNr, bool sep, bool farb, bool ic, bool gcr, bool master, bool embedded = false, bool useTemplate = false);
		virtual void ProcessPage(ScribusDoc* Doc, /*ScribusView* view,*/Page* a, uint PNr, bool sep = false, bool farb = true, bool ic = false, bool gcr = true);
		virtual void putColor(const QString& color, double shade, bool fill);
		virtual void SetClipPath(FPointArray *c, bool poly = true);
		virtual void HandleGradient(PageItem *c, double w, double h, bool gcr);
		virtual void SetFarbe(const QString& color, double shade, int *h, int *s, int *v, int *k, bool gcr);
		virtual void SetFarbe(const ScColor& color, double shade, int *h, int *s, int *v, int *k, bool gcr);
		virtual void setTextSt(ScribusDoc* Doc, PageItem* ite, bool gcr, uint a, Page* pg, bool sep, bool farb, bool ic, bool master);
		virtual void setTextCh(ScribusDoc* Doc, PageItem* ite, double x, double y, bool gcr, uint a, uint d, ScText *hl, const ParagraphStyle& pstyle, Page* pg, bool sep, bool farb, bool ic, bool master);
		bool Art;
	private:
		void PutSeite(QString c);
		void PutSeite(QByteArray& array, bool hexEnc);
		void PutSeite(const char* array, int length, bool hexEnc);
		void PutDoc(QString c);
		void PutDoc(QByteArray& array, bool hexEnc);
		void PutDoc(const char* in, int length, bool hexEnc);
		QString ToStr(double c);
		QString IToStr(int c);
		QString PSEncode(QString in);
		QString Prolog;
		QString Header;
		QString Creator;
		QString User;
		QString Titel;
		QString BBox;
		QString BBoxH;
		QString Farben;
		QString FNamen;
		QString PDev;
		QString GrayCalc;
		bool GraySc;
		int Seiten;
		QString FillColor;
		QString StrokeColor;
		QString GrColor1;
		QString GrColor2;
		double LineW;
		QString Fonts;
		QString FontDesc;
		QMap<QString, QString> UsedFonts;
		typedef QMap<uint, std::pair<QChar, QString> > GListe;
		QMap<QString, GListe> GlyphsOfFont;
		bool isPDF;
		QFile Spool;
		Q3TextStream spoolStream;
		bool CompAvail;
		int Plate;
		bool DoSep;
		bool useSpotColors;
		bool fillRule;
		bool doOverprint;
		bool applyICC;
		cmsHTRANSFORM solidTransform;
		QString currentSpot;
		ColorList colorsToUse;
		QString colorDesc;
		ScribusDoc *m_Doc;
		QMap<QString, QString> spotMap;
		MultiProgressDialog* progressDialog;
		bool usingGUI;
		bool abortExport;
		PrintOptions Options;
		Page* ActPage;

	protected slots:
		void cancelRequested();
};

#endif
