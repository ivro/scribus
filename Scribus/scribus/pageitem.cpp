/***************************************************************************
                          pageitem.cpp  -  description
                             -------------------
    begin                : Sat Apr 7 2001
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

#include "pageitem.h"
#include "pageitem.moc"
#include <qpainter.h>
#include <qpen.h>
#include <qfont.h>
#include <qregion.h>
#include <qpoint.h>
#include <qfileinfo.h>
#include <qdrawutil.h>
#include <qbitmap.h>
#include <cmath>
#include "page.h"
#include "scribus.h"

#ifdef _MSC_VER
 #if (_MSC_VER >= 1200)
  #include "win-config.h"
 #endif
#else
 #include "config.h"
#endif

#include <ft2build.h>
#include FT_GLYPH_H

using namespace std;

extern double Cwidth(ScribusDoc *doc, QString name, QString ch, int Siz, QString ch2 = " ");
extern double RealCWidth(ScribusDoc *doc, QString name, QString ch, int Siz);
extern double RealCHeight(ScribusDoc *currentDoc, QString name, QString ch, int Size);
extern double RealCAscent(ScribusDoc *currentDoc, QString name, QString ch, int Size);
extern QPointArray FlattenPath(FPointArray ina, QValueList<uint> &Segs);
extern double xy2Deg(double x, double y);
extern void BezierPoints(QPointArray *ar, QPoint n1, QPoint n2, QPoint n3, QPoint n4);
extern int Layer2Level(ScribusDoc *currentDoc, int LayerNr);
extern ScribusApp* ScApp;

PageItem::PageItem(Page *pa, int art, double x, double y, double w, double h, double w2, QString fill, QString outline, ScribusDoc *doc) : QObject(pa)
{
	QString tmp;
	BackBox = 0;
	NextBox = 0;
	Locked = false;
	LockRes = false;
	Xpos = x;
	Ypos = y;
	Width = w;
	Height = h;
	OldB = Width;
	OldH = Height;
	OldB2 = Width;
	OldH2 = Height;
	PType = art;
	Rot = 0;
	Parent = pa;
	Doc = doc;
	Pcolor = fill;
	Pcolor2 = PType == 4 ? fill : outline;
	TxtFill = Doc->DpenText;
	TxtStroke = TxtFill;
	ShTxtStroke = 100;
	ShTxtFill = 100;
	TxtScale = 100;
	TxTStyle = 0;
	Shade = 100;
	Shade2 = 100;
	GrType = 0;
	GrStartX = 0;
	GrStartY = 0;
	GrEndX = w;
	GrEndY = 0;
	Pwidth = w2;
	OldPwidth = w2;
	PLineArt = Doc->DLineArt;
	PLineEnd = FlatCap;
	PLineJoin = MiterJoin;
	Select = false;
	FrameOnly = false;
	ClipEdited = false;
	FrameType = 0;
	IFont = Doc->Dfont;
	ISize = Doc->Dsize;
	LineSp = ((Doc->Dsize / 10.0) * static_cast<double>(Doc->AutoLine) / 100) + (Doc->Dsize / 10.0);
	Doc->Vorlagen[0].LineSpa = LineSp;
	CurX = 0;
	CurY = 0;
	CPos = 0;
	Extra = 1;
	TExtra = 1;
	BExtra = 1;
	RExtra = 1;
	ExtraV = 0;
	Ptext.clear();
	Ptext.setAutoDelete(true);
	MaxChars = 0;
	Pfile = "";
	pixm = QImage();
	pixmOrg = QImage();
	Pfile2 = "";
	Pfile3 = "";
	LocalScX = 1;
	LocalScY = 1;
	LocalViewX = 1;
	LocalViewY = 1;
	OrigW = 0;
	OrigH = 0;
	dpiX = 72.0;
	dpiY = 72.0;
	LocalX = 0;
	LocalY = 0;
	flippedH = 0;
	flippedV = 0;
	BBoxX = 0;
	BBoxH = 0;
	RadRect = 0;
	if ((art == 4) || (art == 2) || (art == 8))
		Frame = true;
	else
		Frame = false;
	switch (art)
	{
		case 6:
			Clip.setPoints(4, static_cast<int>(w/2), 0, static_cast<int>(w), static_cast<int>(h/2),
								static_cast<int>(w/2), static_cast<int>(h), 0,static_cast<int>(h/2));
			break;
		default:
			Clip.setPoints(4, 0,0, static_cast<int>(w),0, static_cast<int>(w), static_cast<int>(h), 0,static_cast<int>(h));
			break;
	}
	PoLine.resize(0);
	ContourLine.resize(0);
	UseContour = false;
	Segments.clear();
	PoShow = false;
	BaseOffs = 0;
	OwnPage = pa;
	savedOwnPage = OwnPage;
	PicArt = true;
	PicAvail = false;
	isPrintable = true;
	isBookmark = false;
	BMnr = 0;
	isAnnotation = false;
	AnType = 0;
	AnActType = 0;
	AnBwid = 1;
	AnAction = "";
	An_E_act = "";
	An_X_act = "";
	An_D_act = "";
	An_Fo_act = "";
	An_Bl_act = "";
	An_K_act = "";
	An_F_act = "";
	An_V_act = "";
	An_C_act = "";
	An_Extern = "";
	switch (PType)
	{
	case 2:
		AnName = tr("Image");
		break;
	case 4:
		AnName = tr("Text");
		break;
	case 5:
		AnName = tr("Line");
		break;
	case 6:
		AnName = tr("Polygon");
		break;
	case 7:
		AnName = tr("Polyline");
		break;
	case 8:
		AnName = tr("PathText");
		break;
	default:
		AnName = "Item";
		break;
	}
	AnName += tmp.setNum(Doc->TotalItems); // +" "+QDateTime::currentDateTime().toString();
	setName(QString("pageItem%1").arg(Doc->TotalItems).ascii());
	AutoName = true;
	Doc->TotalItems++;
	AnToolTip = "";
	AnRollOver = "";
	AnDown = "";
	AnBsty = 0;
	AnFeed = 1;
	AnFlag = 0;
	AnZiel = 0;
	AnVis = 0;
	AnChkStil = 0;
	AnFormat = 0;
	AnFont = 4;
	AnIsChk = false;
	AnAAact = false;
	AnHTML = false;
	AnUseIcons = false;
	AnIPlace = 1;
	AnScaleW = 0;
	AnMaxChar = -1;
	AnBColor = outline;
	HasSel = false;
	Textflow = false;
	Textflow2 = false;
	Tinput = false;
	isAutoText = false;
	Ausrich = 0;
	Redrawn = false;
	isRaster = false;
	Sizing = false;
	toPixmap = false;
	UseEmbedded = true;
	EmProfile = "";
	Groups.clear();
	LayerNr = Doc->ActiveLayer;
	ScaleType = true;
	AspectRatio = true;
	Transparency = 0.0;
	TranspStroke = 0.0;
	Reverse = false;
	InvPict = false;
	NamedLStyle = "";
	DashValues.clear();
	TabValues.clear();
	DashOffset = 0;
	fill_gradient = VGradient(VGradient::linear);
	fill_gradient.clearStops();
	if (Pcolor == "None")
		fill_gradient.addStop(Doc->PageColors[Doc->Dbrush].getRGBColor(), 0.0, 0.5, 1.0, Doc->Dbrush, 100);
	else
		fill_gradient.addStop(Doc->PageColors[Pcolor].getRGBColor(), 0.0, 0.5, 1.0, Pcolor, 100);
	if (Pcolor2 == "None")
		fill_gradient.addStop(Doc->PageColors[Doc->Dpen].getRGBColor(), 1.0, 0.5, 1.0, Doc->Dpen, 100);
	else
	fill_gradient.addStop(Doc->PageColors[Pcolor2].getRGBColor(), 1.0, 0.5, 1.0, Pcolor2, 100);
	Language = doc->Language;
	Cols = Doc->DCols;
	ColGap = Doc->DGap;
	LeftLink = 0;
	RightLink = 0;
	TopLink = 0;
	BottomLink = 0;
	LeftLinkID = 0;
	RightLinkID = 0;
	TopLinkID = 0;
	BottomLinkID = 0;
	LeftLine = 0;
	RightLine = false;
	TopLine = false;
	BottomLine = false;
	isTableItem = false;
	isSingleSel = false;
	Dirty = false;
}

/** Zeichnet das Item */
void PageItem::DrawObj(ScPainter *p, QRect e)
{
	QColor tmp;
	FPointArray CL;
	QPointArray cl;
	QPainter pf, pp, pf2;
	PageItem *nb;
	QPoint pt1, pt2;
	FPoint gv, ColBound;
	QRegion cm;
	uint a, nrc, nrc2, startLin;
	int absa, aSpa, chs, chsd, CurrCol;
	uint BuPos, LastSP, MaxText;
	double desc, asce, oldCurY, LastXp, EndX, OFs, OFs2, wide, lineCorr, ColWidth, kernVal, RTabX;
	double sc = Doc->Scale;
	QString chx, chx2, chx3;
	struct Pti *hl;
	struct ZZ *Zli;
	struct ZZ *Zli2;
	QPtrList<ZZ> LiList;
	bool outs = false;
	bool fBorder = false;
	bool RTab = false;
	bool goNoRoom = false;
	uint StartRT, StartRT2;
	int TabCode = 0;
	int HyphenCount = 0;
	QValueList<double> tTabValues;
	bool DropCmode = false;
	bool AbsHasDrop = false;
	double maxDY, firstDes, desc2, maxDX;
	int DropLines;
	bool StartOfCol = true;
	tTabValues.clear();
	if (!Doc->DoDrawing)
	{
		Redrawn = true;
		Tinput = false;
		FrameOnly = false;
		return;
	}
	LiList.setAutoDelete(true);
	for (int xxx=0; xxx<5; ++xxx)
	{
		Doc->Vorlagen[xxx].LineSpa = LineSp;
		Doc->Vorlagen[xxx].FontSize = ISize;
		Doc->Vorlagen[xxx].Indent = 0;
		Doc->Vorlagen[xxx].First = 0;
		Doc->Vorlagen[xxx].Avor = 0;
		Doc->Vorlagen[xxx].Anach = 0;
		Doc->Vorlagen[xxx].Ausri = xxx;
	}
	pf.begin(Parent);
	pf.translate(Xpos*sc, Ypos*sc);
	pf.rotate(Rot);
	pf.scale(sc, sc);
	if (!Doc->RePos)
		pf.setClipRect(!e.isEmpty() ? e : OwnPage->ViewReg().boundingRect());
	bool doStroke = true;
	p->setZoomFactor(sc);
	p->save();
	p->translate(-e.x(), -e.y());
	p->translate(Xpos*sc, Ypos*sc);
	p->rotate(Rot);
	p->setLineWidth(Pwidth);
	if (GrType != 0)
	{
		p->setFillMode(2);
		p->fill_gradient = fill_gradient;
		QWMatrix grm;
		grm.rotate(Rot);
		FPointArray gra;
		switch (GrType)
		{
			case 1:
			case 2:
			case 3:
			case 4:
			case 6:
				gra.setPoints(2, GrStartX, GrStartY, GrEndX, GrEndY);
				gra.map(grm);
				p->setGradient(VGradient::linear, gra.point(0), gra.point(1));
				break;
			case 5:
			case 7:
				gra.setPoints(2, GrStartX, GrStartY, GrEndX, GrEndY);
				p->setGradient(VGradient::radial, gra.point(0), gra.point(1), gra.point(0));
				break;
		}
	}
	else
	{
		p->fill_gradient = VGradient(VGradient::linear);
		if (Pcolor != "None")
		{
			SetFarbe(&tmp, Pcolor, Shade);
			p->setBrush(tmp);
			p->setFillMode(1);
		}
		else
			p->setFillMode(0);
	}
	if (Pcolor2 != "None")
	{
		SetFarbe(&tmp, Pcolor2, Shade2);
		if ((Pwidth == 0) && (PType != 5))
			p->setLineWidth(0);
		else
		{
			p->setPen(tmp, Pwidth, PLineArt, PLineEnd, PLineJoin);
			if (DashValues.count() != 0)
				p->setDash(DashValues, DashOffset);
		}
	}
	else
		p->setLineWidth(0);
	p->setBrushOpacity(1.0 - Transparency);
	p->setPenOpacity(1.0 - TranspStroke);
	switch (PType)
	{
		case 2:
			if (Doc->RePos)
				break;
			if ((Pcolor != "None") || (GrType != 0))
			{
				p->setupPolygon(&PoLine);
				p->drawPolygon();
			}
			if (Pfile == "")
			{
				if ((Frame) && (ScApp->Prefs.FramesShown))
				{
					p->setPen(black, 1, SolidLine, FlatCap, MiterJoin);
					p->drawLine(FPoint(0, 0), FPoint(Width, Height));
					p->drawLine(FPoint(0, Height), FPoint(Width, 0));
				}
			}
			else
			{
				if ((!PicArt) || (!PicAvail))
				{
					if ((Frame) && (ScApp->Prefs.FramesShown))
					{
						p->setPen(red, 1, SolidLine, FlatCap, MiterJoin);
						p->drawLine(FPoint(0, 0), FPoint(Width, Height));
						p->drawLine(FPoint(0, Height), FPoint(Width, 0));
					}
				}
				else
				{
					p->setupPolygon(&PoLine);
					p->setClipPath();
					p->save();
					if (flippedH % 2 != 0)
						{
						p->translate(Width * sc, 0);
						p->scale(-1, 1);
						}
					if (flippedV % 2 != 0)
						{
						p->translate(0, Height * sc);
						p->scale(1, -1);
						}
					if ((LocalViewX != 1) || (LocalViewY != 1))
						p->scale(LocalViewX, LocalViewY);
					p->translate(LocalX*LocalScX*sc, LocalY*LocalScY*sc);
					if (InvPict)
					{
						QImage ip = pixm.copy();
						ip.invertPixels();
						p->drawImage(&ip);
					}
					else
						p->drawImage(&pixm);
					p->restore();
				}
			}
			break;
		case 5:
			if (Doc->RePos)
				break;
			if (NamedLStyle == "")
				p->drawLine(FPoint(0, 0), FPoint(Width, 0));
			else
			{
				multiLine ml = Doc->MLineStyles[NamedLStyle];
				for (int it = ml.size()-1; it > -1; it--)
				{
					SetFarbe(&tmp, ml[it].Color, ml[it].Shade);
					p->setPen(tmp, ml[it].Width,
									 static_cast<PenStyle>(ml[it].Dash),
									 static_cast<PenCapStyle>(ml[it].LineEnd),
									 static_cast<PenJoinStyle>(ml[it].LineJoin));
					p->drawLine(FPoint(0, 0), FPoint(Width, 0));
				}
				doStroke = false;
			}
			break;
		case 1:
		case 3:
		case 6:
			if (Doc->RePos)
				break;
			p->setupPolygon(&PoLine);
			p->drawPolygon();
			break;
		case 7:
			if (Doc->RePos)
				break;
			if ((Pcolor != "None") || (GrType != 0))
			{
				FPointArray cli;
				FPoint Start;
				bool firstp = true;
				for (uint n = 0; n < PoLine.size()-3; n += 4)
				{
					if (firstp)
					{
						Start = PoLine.point(n);
						firstp = false;
					}
					if (PoLine.point(n).x() > 900000)
					{
						cli.addPoint(PoLine.point(n-2));
						cli.addPoint(PoLine.point(n-2));
						cli.addPoint(Start);
						cli.addPoint(Start);
						cli.setMarker();
						firstp = true;
						continue;
					}
					cli.addPoint(PoLine.point(n));
					cli.addPoint(PoLine.point(n+1));
					cli.addPoint(PoLine.point(n+2));
					cli.addPoint(PoLine.point(n+3));
				}
				if (cli.size() > 2)
				{
					FPoint l1 = cli.point(cli.size()-2);
					cli.addPoint(l1);
					cli.addPoint(l1);
					cli.addPoint(Start);
					cli.addPoint(Start);
				}
				p->setupPolygon(&cli);
				p->drawPolygon();
			}
			p->setupPolygon(&PoLine, false);
			if (NamedLStyle == "")
				p->drawPolyLine();
			else
				{
				multiLine ml = Doc->MLineStyles[NamedLStyle];
				for (int it = ml.size()-1; it > -1; it--)
					{
					SetFarbe(&tmp, ml[it].Color, ml[it].Shade);
					p->setPen(tmp, ml[it].Width,
									 static_cast<PenStyle>(ml[it].Dash),
									 static_cast<PenCapStyle>(ml[it].LineEnd),
									 static_cast<PenJoinStyle>(ml[it].LineJoin));
					p->drawPolyLine();
					}
				}
			doStroke = false;
			break;
		case 4:
			p->save();
			pf2.begin(Parent);
			pf2.translate(Xpos, Ypos);
			pf2.rotate(Rot);
			if ((Pcolor != "None") || (GrType != 0))
				{
				p->setupPolygon(&PoLine);
				p->drawPolygon();
				}
			if (Pcolor2 != "None")
				lineCorr = Pwidth / 2.0;
			else
				lineCorr = 0;
			if ((isAnnotation) && (AnType == 2) && (Pfile != "") && (PicAvail) && (PicArt) && (AnUseIcons))
				{
					p->setupPolygon(&PoLine);
					p->setClipPath();
					p->save();
					p->scale(LocalScX, LocalScY);
					p->translate(static_cast<int>(LocalX*LocalScX), static_cast<int>(LocalY*LocalScY));
					if (!pixm.isNull())
						p->drawImage(&pixm);
					p->restore();
				}
			if ((Ptext.count() != 0) && (Dirty))
			{
				if (flippedH % 2 != 0)
				{
					p->translate(Width * sc, 0);
					p->scale(-1, 1);
				}
				if (flippedV % 2 != 0)
				{
					p->translate(0, Height * sc);
					p->scale(1, -1);
				}
				struct ZZ Zli3;
				for (a = 0; a < Ptext.count(); ++a)
				{
					if (a > MaxChars)
						break;
					hl = Ptext.at(a);
					chx = hl->ch;
					if (hl->ch == QChar(30))
						chx = ExpandToken(a);
					if (hl->ccolor != "None")
					{
						SetFarbe(&tmp, hl->ccolor, hl->cshade);
						p->setBrush(tmp);
					}
					if (hl->cstroke != "None")
					{
						SetFarbe(&tmp, hl->cstroke, hl->cshade2);
						p->setPen(tmp, 1, SolidLine, FlatCap, MiterJoin);
					}
					chs = hl->csize;
					oldCurY = SetZeichAttr(hl, &chs, &chx);
					Zli3.Zeich = chx;
					Zli3.Farb = hl->ccolor;
					Zli3.Farb2 = hl->cstroke;
					Zli3.shade = hl->cshade;
					Zli3.shade2 = hl->cshade2;
					Zli3.xco = hl->xp;
					Zli3.yco = hl->yp;
					Zli3.Sele = hl->cselect;
					Zli3.Siz = chs;
					Zli3.Style = hl->cstyle;
					Zli3.ZFo = hl->cfont;
					Zli3.wide = Cwidth(Doc, hl->cfont, chx, hl->csize) * (hl->cscale / 100.0);
					if (hl->cstyle & 1024)
						Zli3.kern = 0;
					else
						Zli3.kern = hl->cextra;
					Zli3.scale = hl->cscale;
					if (!Doc->RePos)
					{
						desc = (*Doc->AllFonts)[Zli3.ZFo]->numDescender * (-Zli3.Siz / 10.0);
						asce = (*Doc->AllFonts)[Zli3.ZFo]->numAscent * (Zli3.Siz / 10.0);
						if (e.intersects(pf.xForm(QRect(qRound(Zli3.xco),qRound(Zli3.yco-asce), qRound(Zli3.wide+1), qRound(asce+desc)))))
							DrawZeichenS(p, &Zli3);
						if (hl->cstyle & 512)
						{
							Zli3.Zeich = "-";
							Zli3.xco = Zli3.xco + Zli3.wide;
							if (e.intersects(pf.xForm(QRect(qRound(Zli3.xco),qRound(Zli3.yco-asce), qRound(Zli3.wide+1), qRound(asce+desc)))))
								DrawZeichenS(p, &Zli3);
						}
					}
				}
				if (Ptext.count() > MaxChars)
				{
					if (!Doc->RePos)
					{
						double scp1 = 1 / QMAX(Doc->Scale, 1);
						double scp16 = 16 * scp1;
						double scp14 = 14 * scp1;
						double scp3 = 3 * scp1;
						double scpwidth16 = Width - scp16;
						double scpheight16 = Height - scp16;
						double scpwidth3 = Width - scp3;
						double scpheight3 = Height - scp3;

						p->setPen(black, scp1, SolidLine, FlatCap, MiterJoin);
						p->setBrush(white);
						p->drawRect(scpwidth16, scpheight16, scp14, scp14);
						p->drawLine(FPoint(scpwidth16, scpheight16), FPoint(scpwidth3, scpheight3));
						p->drawLine(FPoint(scpwidth16, scpheight3), FPoint(scpwidth3, scpheight16));
					}
				}
				Dirty = false;
				Redrawn = true;
				pf2.end();
				p->restore();
				break;
			}
			if ((Ptext.count() != 0) || (NextBox != 0))
				{
				if (NextBox != 0)
					{
					nb = NextBox;
					while (nb != 0)
						{
						a = nb->Ptext.count();
						for (uint s=0; s<a; ++s)
							{
							Ptext.append(nb->Ptext.take(0));
							}
						nb->MaxChars = 0;
						nb = nb->NextBox;
						}
					nb = NextBox;
					}
				Doc->Vorlagen[0].LineSpa = LineSp;
				QRegion cl = QRegion(pf2.xForm(Clip));
				for (a=0; a<savedOwnPage->Items.count(); ++a)
				{
					PageItem* ownItem = savedOwnPage->Items.at(a);
					int LayerLevItem = Layer2Level(Doc, ownItem->LayerNr);
					int LayerLev = Layer2Level(Doc, LayerNr);
					if (((ownItem->ItemNr > ItemNr) && (ownItem->LayerNr == LayerNr)) || (LayerLevItem > LayerLev))
					{
						if (ownItem->Textflow)
						{
							pp.begin(Parent);
							pp.translate(ownItem->Xpos, ownItem->Ypos);
							pp.rotate(ownItem->Rot);
							if (ownItem->Textflow2)
							{
								QPointArray tcli;
								tcli.resize(4);
								tcli.setPoint(0, QPoint(0,0));
								tcli.setPoint(1, QPoint(qRound(ownItem->Width), 0));
								tcli.setPoint(2, QPoint(qRound(ownItem->Width), qRound(ownItem->Height)));
								tcli.setPoint(3, QPoint(0, qRound(ownItem->Height)));
								cm = QRegion(pp.xForm(tcli));
							}
							else
							{
								if ((ownItem->UseContour) && (ownItem->ContourLine.size() != 0))
								{
									QValueList<uint> Segs;
									QPointArray Clip2 = FlattenPath(ownItem->ContourLine, Segs);
									cm = QRegion(pp.xForm(Clip2));
								}
								else
									cm = QRegion(pp.xForm(ownItem->Clip));
							}
							pp.end();
							cl = cl.subtract(cm);
						}
					}
				}
				if (savedOwnPage->PageNam != "")
				{
					Page* par = (Page*)Parent;
					for (a=0; a<par->Items.count(); ++a)
					{
						PageItem* parItem = par->Items.at(a);
						if (parItem->Textflow)
						{
							pp.begin(Parent);
							pp.translate(parItem->Xpos, parItem->Ypos);
							pp.rotate(parItem->Rot);
							if (parItem->Textflow2)
							{
								QPointArray tcli;
								tcli.resize(4);
								tcli.setPoint(0, QPoint(0,0));
								tcli.setPoint(1, QPoint(qRound(parItem->Width), 0));
								tcli.setPoint(2, QPoint(qRound(parItem->Width), qRound(parItem->Height)));
								tcli.setPoint(3, QPoint(0, qRound(parItem->Height)));
								cm = QRegion(pp.xForm(tcli));
							}
							else
							{
								if ((parItem->UseContour) && (parItem->ContourLine.size() != 0))
								{
									QValueList<uint> Segs;
									QPointArray Clip2 = FlattenPath(parItem->ContourLine, Segs);
									cm = QRegion(pp.xForm(Clip2));
								}
								else
									cm = QRegion(pp.xForm(parItem->Clip));
							}
							pp.end();
							cl = cl.subtract(cm);
						}
					}
				}
				if (flippedH % 2 != 0)
				{
					p->translate(Width * sc, 0);
					p->scale(-1, 1);
					pf2.translate(Width, 0);
					pf2.scale(-1, 1);
				}
				if (flippedV % 2 != 0)
				{
					p->translate(0, Height * sc);
					p->scale(1, -1);
					pf2.translate(0, Height);
					pf2.scale(1, -1);
				}
				CurrCol = 0;
				ColWidth = (Width - (ColGap * (Cols - 1)) - Extra - RExtra - 2*lineCorr) / Cols;
				ColBound = FPoint((ColWidth + ColGap) * CurrCol+Extra + lineCorr, ColWidth * (CurrCol+1) + ColGap * CurrCol + Extra+lineCorr);
				ColBound = FPoint(ColBound.x(), ColBound.y()+RExtra+lineCorr);
				CurX = ColBound.x();
				if (Ptext.count() > 0)
					{
					hl = Ptext.at(0);
					if (Doc->Vorlagen[hl->cab].Drop)
					{
						if (Doc->Vorlagen[hl->cab].BaseAdj)
							chs = qRound(Doc->BaseGrid  * Doc->Vorlagen[hl->cab].DropLin * 10);
						else
							chs = qRound(Doc->Vorlagen[hl->cab].LineSpa * Doc->Vorlagen[hl->cab].DropLin * 10);
					}
					else
						chs = hl->csize;
					desc2 = -(*Doc->AllFonts)[hl->cfont]->numDescender * (chs / 10.0);
					CurY = TExtra+lineCorr;
					}
				else
					{
					desc2 = -(*Doc->AllFonts)[IFont]->numDescender * (ISize / 10.0);
					CurY = Doc->Vorlagen[0].LineSpa+TExtra+lineCorr-desc2;
					}
				firstDes = desc2;
				LiList.clear();
				BuPos = 0;
				LastSP = 0;
				LastXp = 0;
				outs = false;
				OFs = 0;
				OFs2 = 0;
				aSpa = 0;
				absa = 0;
				MaxChars = 0;
				MaxText = Ptext.count();
				StartOfCol = true;
				for (a = 0; a < MaxText; ++a)
					{
					hl = Ptext.at(a);
					chx = hl->ch;
					if (hl->ch == QChar(30))
						chx = ExpandToken(a);
					absa = hl->cab;
					if (a == 0)
						{
						if (BackBox != 0)
							{
							nb = BackBox;
							while (nb != 0)
								{
								if (nb->Ptext.count() != 0)
									{
									if (nb->Ptext.at(nb->Ptext.count()-1)->ch == QChar(13))
										{
										CurY += Doc->Vorlagen[absa].Avor;
										if (chx != QChar(13))
											DropCmode = Doc->Vorlagen[absa].Drop;
										else
											DropCmode = false;
										if (DropCmode)
											DropLines = Doc->Vorlagen[absa].DropLin;
										break;
										}
									else
										break;
									}
								nb = nb->BackBox;
								}
							}
						else
							{
							if (chx != QChar(13))
								DropCmode = Doc->Vorlagen[absa].Drop;
							else
								DropCmode = false;
							CurY += Doc->Vorlagen[absa].Avor;
							if (DropCmode)
								DropLines = Doc->Vorlagen[absa].DropLin;
							}
						}
					if (((Doc->Vorlagen[absa].Ausri == 3) || (Doc->Vorlagen[absa].Ausri == 4)) && (LiList.count() == 0) && (hl->ch == " "))
					{
						hl->cstyle |= 256;
						continue;
					}
					else
						hl->cstyle &= 255;
					if (LiList.count() == 0)
						{
						if ((a > 0) && (Ptext.at(a-1)->ch == QChar(13)))
							{
							CurY += Doc->Vorlagen[absa].Avor;
							if (chx != QChar(13))
								DropCmode = Doc->Vorlagen[absa].Drop;
							else
								DropCmode = false;
							if (DropCmode)
								{
								DropLines = Doc->Vorlagen[absa].DropLin;
								if (Doc->Vorlagen[hl->cab].BaseAdj)
									CurY += Doc->BaseGrid * (DropLines-1);
								else
									CurY += Doc->Vorlagen[absa].LineSpa * (DropLines-1);
								}
							}
						}
					if (DropCmode)
						{
						if (Doc->Vorlagen[hl->cab].BaseAdj)
						{
							chsd = qRound(10 * ((Doc->BaseGrid * DropLines) / (RealCHeight(Doc, hl->cfont, chx, 10))));
							chs = qRound(10 * ((Doc->BaseGrid * DropLines) / RealCAscent(Doc, hl->cfont, chx, 10)));
						}
						else
						{
							chsd = qRound(10 * ((Doc->Vorlagen[absa].LineSpa * DropLines) / (RealCHeight(Doc, hl->cfont, chx, 10))));
							chs = qRound(10 * ((Doc->Vorlagen[absa].LineSpa * DropLines) / RealCAscent(Doc, hl->cfont, chx, 10)));
						}
						hl->csize = chsd;
						}
					else
						chs = hl->csize;
					oldCurY = SetZeichAttr(hl, &chs, &chx);
					if (chx == QChar(29))
						chx2 = " ";
					else
						chx2 = chx;
					if (a < MaxText-1)
						{
						if (Ptext.at(a+1)->ch == QChar(29))
							chx3 = " ";
						else
							chx3 = Ptext.at(a+1)->ch;
						wide = Cwidth(Doc, hl->cfont, chx2, chs, chx3);
						}
					else
						wide = Cwidth(Doc, hl->cfont, chx2, chs);
					if (DropCmode)
					{
						wide = RealCWidth(Doc, hl->cfont, chx2, chsd);
						desc2 = 0;
						desc = 0;
						asce = RealCHeight(Doc, hl->cfont, chx2, chsd);
					}
					else
					{
						desc2 = -(*Doc->AllFonts)[hl->cfont]->numDescender * (hl->csize / 10.0);
						desc = -(*Doc->AllFonts)[hl->cfont]->numDescender * (hl->csize / 10.0);
						asce = (*Doc->AllFonts)[hl->cfont]->numAscent * (hl->csize / 10.0);
					}
					wide = wide * (hl->cscale / 100.0);
					fBorder = false;
					if (CurY+BExtra+lineCorr > Height)
					{
						StartOfCol = true;
						CurrCol++;
						if (CurrCol < Cols)
						{
							ColWidth = (Width - (ColGap * (Cols - 1)) - Extra - RExtra - 2*lineCorr) / Cols;
							ColBound = FPoint((ColWidth + ColGap) * CurrCol + Extra+lineCorr, ColWidth * (CurrCol+1) + ColGap * CurrCol + Extra+lineCorr);
							CurX = ColBound.x();
							ColBound = FPoint(ColBound.x(), ColBound.y()+RExtra+lineCorr);
							CurY = asce+TExtra+lineCorr+1;
							if ((a > 0) && (Ptext.at(a-1)->ch == QChar(13)))
							{
								if (chx != QChar(13))
									DropCmode = Doc->Vorlagen[hl->cab].Drop;
								else
									DropCmode = false;
								if (DropCmode)
								{
									if (Doc->Vorlagen[hl->cab].BaseAdj)
										desc2 = -(*Doc->AllFonts)[hl->cfont]->numDescender * Doc->BaseGrid * Doc->Vorlagen[hl->cab].DropLin;
									else
										desc2 = -(*Doc->AllFonts)[hl->cfont]->numDescender * Doc->Vorlagen[hl->cab].LineSpa * Doc->Vorlagen[hl->cab].DropLin;
								}
								if (DropCmode)
									DropLines = Doc->Vorlagen[hl->cab].DropLin;
							}
							if (Doc->Vorlagen[hl->cab].BaseAdj)
							{
								int ol1 = qRound((Ypos + CurY - Doc->BaseOffs) * 10000.0);
								int ol2 = static_cast<int>(ol1 / Doc->BaseGrid);
								CurY = ceil(  ol2 / 10000.0 ) * Doc->BaseGrid + Doc->BaseOffs - Ypos;
							}
						}
						else
						{
							nrc = a;
							goto NoRoom;
						}
					}
					if (LiList.isEmpty())
						{
						startLin = a;
						goNoRoom = false;
						double TopOffset = asce;
						double BotOffset = desc2;
						if (StartOfCol)
						{
							CurY = asce+TExtra+lineCorr+1;
							if (((a > 0) && (Ptext.at(a-1)->ch == QChar(13))) || ((a == 0) && (BackBox == 0)))
								CurY += Doc->Vorlagen[hl->cab].Avor;
						}
						if (Doc->Vorlagen[hl->cab].BaseAdj)
						{
							int ol1 = qRound((Ypos + CurY - Doc->BaseOffs) * 10000.0);
							int ol2 = static_cast<int>(ol1 / Doc->BaseGrid);
							CurY = ceil(  ol2 / 10000.0 ) * Doc->BaseGrid + Doc->BaseOffs - Ypos;
						}
						if (CurY-TopOffset < 0.0)
							CurY = TopOffset+1;
						pt1 = QPoint(static_cast<int>(ceil(CurX)), static_cast<int>(CurY+BotOffset));
						pt2 = QPoint(static_cast<int>(ceil(CurX)), static_cast<int>(ceil(CurY-TopOffset)));
						while ((!cl.contains(pf2.xForm(pt1))) || (!cl.contains(pf2.xForm(pt2))))
							{
							fBorder = true;
							CurX++;
							if (CurX+RExtra+lineCorr > ColBound.y())
								{
								fBorder = false;
								if (StartOfCol)
								{
									CurX = ColBound.x();
									CurY++;
								}
								else
								{
									CurY += Doc->Vorlagen[hl->cab].LineSpa;
									CurX = ColBound.x();
								}
								if (Doc->Vorlagen[hl->cab].BaseAdj)
								{
									int ol1 = qRound((Ypos + CurY - Doc->BaseOffs) * 10000.0);
									int ol2 = static_cast<int>(ol1 / Doc->BaseGrid);
									CurY = ceil(  ol2 / 10000.0 ) * Doc->BaseGrid + Doc->BaseOffs - Ypos;
								}
								if (CurY+BExtra+lineCorr > Height)
									{
									StartOfCol = true;
									fBorder = false;
									CurrCol++;
									if (CurrCol < Cols)
										{
										ColWidth = (Width - (ColGap * (Cols - 1)) - Extra - RExtra - 2*lineCorr) / Cols;
										ColBound = FPoint((ColWidth + ColGap) * CurrCol + Extra+lineCorr, ColWidth * (CurrCol+1) + ColGap * CurrCol + Extra+lineCorr);
										CurX = ColBound.x();
										ColBound = FPoint(ColBound.x(), ColBound.y()+RExtra+lineCorr);
										CurY = asce+TExtra+lineCorr+1;
										if ((a > 0) && (Ptext.at(a-1)->ch == QChar(13)))
											{
											if (chx != QChar(13))
												DropCmode = Doc->Vorlagen[hl->cab].Drop;
											else
												DropCmode = false;
											if (DropCmode)
											{
												if (Doc->Vorlagen[hl->cab].BaseAdj)
													desc2 = -(*Doc->AllFonts)[hl->cfont]->numDescender * Doc->BaseGrid * Doc->Vorlagen[hl->cab].DropLin;
												else
													desc2 = -(*Doc->AllFonts)[hl->cfont]->numDescender * Doc->Vorlagen[hl->cab].LineSpa * Doc->Vorlagen[hl->cab].DropLin;
											}
											if (DropCmode)
												DropLines = Doc->Vorlagen[hl->cab].DropLin;
											}
										if (Doc->Vorlagen[hl->cab].BaseAdj)
										{
											int ol1 = qRound((Ypos + CurY - Doc->BaseOffs) * 10000.0);
											int ol2 = static_cast<int>(ol1 / Doc->BaseGrid);
											CurY = ceil(  ol2 / 10000.0 ) * Doc->BaseGrid + Doc->BaseOffs - Ypos;
										}
										}
									else
										{
										nrc = a;
										goto NoRoom;
										}
									}
								}
							pt1 = QPoint(static_cast<int>(ceil(CurX)), static_cast<int>(CurY+BotOffset));
							pt2 = QPoint(static_cast<int>(ceil(CurX)), static_cast<int>(ceil(CurY-TopOffset)));
							}
						if ((fBorder) && (!AbsHasDrop))
							CurX += Extra;
						if (a > 0)
						{
							if (Ptext.at(a-1)->ch == QChar(13))
								CurX += Doc->Vorlagen[hl->cab].First;
						}
						else
						{
							if (BackBox == 0)
								CurX += Doc->Vorlagen[hl->cab].First;
							else
							{
								if (BackBox->Ptext.count() != 0)
								{
									if (BackBox->Ptext.at(BackBox->Ptext.count()-1)->ch == QChar(13))
										CurX += Doc->Vorlagen[hl->cab].First;
								}
								else
									CurX += Doc->Vorlagen[hl->cab].First;
							}
						}
						if (!AbsHasDrop)
							CurX += Doc->Vorlagen[hl->cab].Indent;
						fBorder = false;
						}
					StartOfCol = false;
					if (RTab)
						{
						if (((hl->ch == ".") && (TabCode == 2)) ||
							((hl->ch == ",") && (TabCode == 3)) ||
							(hl->ch == QChar(9)))
							{
							RTab = false;
							TabCode = 0;
							}
						}
					if (hl->ch == QChar(9))
						{
						wide = 1;
						if (RTab)
							RTab = false;
						else
							{
							RTabX = CurX+wide;
							if (hl->cab < 5)
								tTabValues = TabValues;
							else
								tTabValues = Doc->Vorlagen[hl->cab].TabValues;
							if (tTabValues.isEmpty())
								{
								if ((CurX - ColBound.x()) != 0)
								{
									if (CurX == ColBound.x() + ceil((CurX-ColBound.x()) / 36.0) * 36.0)
										CurX += 36.0;
									else
										CurX = ColBound.x() + ceil((CurX-ColBound.x()) / 36.0) * 36.0;
								}
								else
									CurX = ColBound.x() + 36.0;
								TabCode = 0;
								RTab = false;
								}
							else
								{
								double tCurX = CurX - ColBound.x();
								double oCurX = tCurX + wide;
								for (int yg = static_cast<int>(tTabValues.count()-1); yg > 0; yg -= 2)
									{
									if (oCurX < tTabValues[yg])
										{
										tCurX = tTabValues[yg];
										TabCode = static_cast<int>(tTabValues[yg-1]);
										}
									}
								if (TabCode == 0)
									RTab = false;
								else
									RTab = true;
								if (tCurX == oCurX-wide)
									CurX = ColBound.x() + ceil((CurX-ColBound.x()) / 36.0) * 36.0;
								else
									CurX = ColBound.x() + tCurX;
								}
							CurX -= 1;
							StartRT = LiList.count();
							StartRT2 = a;
							}
						}
					hl->yp = CurY + oldCurY;
					if (DropCmode)
						hl->yp -= RealCHeight(Doc, hl->cfont, chx2, chsd) - RealCAscent(Doc, hl->cfont, chx2, chsd);
					if (LiList.count() == 0)
					{
						Ptext.at(a)->cstyle |= 1024;
						kernVal = 0;
					}
					else
					{
						kernVal = hl->cextra;
						Ptext.at(a)->cstyle &= 1023;
					}
					if (!RTab)
						{
						hl->xp = CurX+kernVal;
						CurX += wide+kernVal;
						}
					else
						hl->xp = CurX;
					if ((TabCode == 4) && (RTab))
						CurX += (wide+kernVal) / 2;
					if (((hl->cstyle & 128) || (hl->ch == "-")) && ((HyphenCount < Doc->HyCount) || (Doc->HyCount == 0)))
					{
						if (hl->cstyle & 128)
						{
							pt1 = QPoint(qRound(ceil(CurX+RExtra+Cwidth(Doc, hl->cfont, "-", hl->csize) * (hl->cscale / 100.0))), qRound(CurY+desc));
							pt2 = QPoint(qRound(ceil(CurX+RExtra+Cwidth(Doc, hl->cfont, "-", hl->csize) * (hl->cscale / 100.0))), qRound(ceil(CurY-asce)));
						}
						else
						{
							pt1 = QPoint(qRound(ceil(CurX+RExtra)), qRound(CurY+desc));
							pt2 = QPoint(qRound(ceil(CurX+RExtra)), qRound(ceil(CurY-asce)));
						}
					}
					else
					{
						pt1 = QPoint(qRound(ceil(CurX+RExtra)), qRound(CurY+desc));
						pt2 = QPoint(qRound(ceil(CurX+RExtra)), qRound(ceil(CurY-asce)));
					}
					if ((!cl.contains(pf2.xForm(pt1))) || (!cl.contains(pf2.xForm(pt2))) || (CurX+RExtra+lineCorr > ColBound.y()))
						outs = true;
					if (CurY > (Height - BExtra - lineCorr))
						outs = true;
					Zli = new ZZ;
					Zli->Zeich = chx;
					Zli->Farb = hl->ccolor;
					Zli->shade = hl->cshade;
					Zli->Farb2 = hl->cstroke;
					Zli->shade2 = hl->cshade2;
					Zli->xco = hl->xp;
					Zli->yco = hl->yp;
					Zli->Sele = hl->cselect;
					if (DropCmode)
						Zli->Siz = chsd;
					else
						Zli->Siz = chs;
					Zli->Style = hl->cstyle;
					Zli->ZFo = hl->cfont;
					Zli->wide = wide;
					Zli->kern = kernVal;
					Zli->scale = hl->cscale;
					if (((hl->ch == " ") || (hl->ch == QChar(9))) && (!outs))
					{
						if (a > 0)
						{
							if (Ptext.at(a-1)->ch !=  " ")   // || ((Doc->AppMode == 7) && (Ptext.at(QMAX(CPos-1,0))->yp == hl->yp) && (Select)))
							{
							LastXp = hl->xp;
							LastSP = BuPos;
							}
						}
						else
						{
							LastXp = hl->xp;
							LastSP = BuPos;
						}
					}
					if (((hl->cstyle & 128) || (hl->ch == "-")) && (!outs))
					{
						if ((HyphenCount < Doc->HyCount) || (Doc->HyCount == 0))
						{
							if (hl->ch == "-")
								LastXp = CurX;
							else
								LastXp = CurX + Cwidth(Doc, hl->cfont, "-", hl->csize) * (hl->cscale / 100.0);
							LastSP = BuPos;
						}
					}
					LiList.append(Zli);
					if (RTab)
						{
						uint rtx2 = 0;
						double cen = 1;
						if (TabCode == 4)
							cen = 2;
						for (uint rtx = StartRT; rtx < LiList.count(); ++rtx)
							{
								LiList.at(rtx)->xco = QMAX(LiList.at(rtx)->xco-(wide+kernVal) / cen, 0.0);
								Ptext.at(StartRT2+rtx2)->xp = QMAX(Ptext.at(StartRT2+rtx2)->xp-(wide+kernVal) / cen, 0.0);
								if (Ptext.at(StartRT2+rtx2)->xp < RTabX)
								{
									RTab = false;
									TabCode = 0;
								}
								rtx2++;
							}
						}
					BuPos++;
					if (DropCmode)
						{
						DropCmode = false;
						AbsHasDrop = true;
						maxDY = CurY;
						maxDX = CurX;
						QPointArray tcli;
						tcli.resize(4);
						if (Doc->Vorlagen[hl->cab].BaseAdj)
						{
							CurY -= Doc->BaseGrid * (DropLines-1);
							int ol1 = qRound((Ypos + CurY - Doc->BaseOffs) * 10000.0);
							int ol2 = static_cast<int>(ol1 / Doc->BaseGrid);
							CurY = ceil(  ol2 / 10000.0 ) * Doc->BaseGrid + Doc->BaseOffs - Ypos;
							tcli.setPoint(0, QPoint(qRound(hl->xp), qRound(maxDY-DropLines*Doc->BaseGrid)));
							tcli.setPoint(1, QPoint(qRound(hl->xp+wide), qRound(maxDY-DropLines*Doc->BaseGrid)));
						}
						else
						{
							CurY -= Doc->Vorlagen[absa].LineSpa * (DropLines-1);
							tcli.setPoint(0, QPoint(qRound(hl->xp), qRound(maxDY-DropLines*Doc->Vorlagen[absa].LineSpa)));
							tcli.setPoint(1, QPoint(qRound(hl->xp+wide), qRound(maxDY-DropLines*Doc->Vorlagen[absa].LineSpa)));
						}
						tcli.setPoint(2, QPoint(qRound(hl->xp+wide), qRound(maxDY)));
						tcli.setPoint(3, QPoint(qRound(hl->xp), qRound(maxDY)));
						cm = QRegion(pf2.xForm(tcli));
						cl = cl.subtract(cm);
						}
					if ((hl->ch == QChar(13)) || (hl->ch == QChar(28)) || (outs))
						{
						RTab = false;
						TabCode = 0;
						if ((hl->ch == QChar(13)) || (hl->ch == QChar(28)))
							{
							if (Doc->Vorlagen[absa].Ausri != 0)
								{
								EndX = CurX;
								do
									{
									pt1 = QPoint(qRound(EndX+RExtra), static_cast<int>(CurY+desc));
									pt2 = QPoint(qRound(EndX+RExtra), static_cast<int>(ceil(CurY-asce)));
									EndX++;
									}
								while ((cl.contains(pf2.xForm(pt1))) && (cl.contains(pf2.xForm(pt2))) && (EndX+RExtra+lineCorr < ColBound.y()));
								if (Doc->Vorlagen[absa].Ausri == 2)
									OFs = EndX - CurX;
								if (Doc->Vorlagen[absa].Ausri == 1)
									OFs = (EndX - CurX) / 2;
								if (Doc->Vorlagen[absa].Ausri == 3)
									OFs = 0;
								if (Doc->Vorlagen[absa].Ausri == 4)
									{
									aSpa = 0;
									for (uint sof = 0; sof<LiList.count(); ++sof)
										{
										if ((LiList.at(sof)->Zeich == QChar(32)) || (LiList.at(sof)->Zeich == QChar(29)))
											aSpa++;
										}
									if (aSpa != 0)
										{
										OFs2 = (EndX - CurX) / aSpa;
										}
									else
										OFs2 = 0;
									OFs = 0;
									for (uint yof = 0; yof < LiList.count(); ++yof)
										{
										LiList.at(yof)->xco += OFs;
										if ((LiList.at(yof)->Zeich == QChar(32)) || (LiList.at(yof)->Zeich == QChar(29)))
											OFs += OFs2;
										}
									}
								else
									{
									for (uint xof = 0; xof<LiList.count(); ++xof)
										{
										LiList.at(xof)->xco += OFs;
										}
									}
									CurX = EndX;
								}
							}
							else
							{
							if (LastSP != 0)  // Hier koenen auch andere Trennungen eingebaut werden
								{
								a -= BuPos - LastSP;
								a++;
								if (Ptext.at(a)->cstyle & 128)
								{
									HyphenCount++;
									Ptext.at(a)->cstyle |= 512;
									Zli = new ZZ;
									Zli->Zeich = "-";
									Zli->Farb = Ptext.at(a)->ccolor;
									Zli->Farb2 = Ptext.at(a)->cstroke;
									Zli->shade = Ptext.at(a)->cshade;
									Zli->shade2 = Ptext.at(a)->cshade2;
									Zli->xco = LastXp - Cwidth(Doc, Ptext.at(a)->cfont, "-", Ptext.at(a)->csize) * (hl->cscale / 100.0);
									Zli->yco = Ptext.at(a)->yp;
									Zli->Sele = Ptext.at(a)->cselect;
									Zli->Siz = Ptext.at(a)->csize;
									Zli->Style = Ptext.at(a)->cstyle;
									Zli->ZFo = Ptext.at(a)->cfont;
									Zli->wide = Cwidth(Doc, Ptext.at(a)->cfont, "-", Ptext.at(a)->csize);
									Zli->kern = Ptext.at(a)->cextra;
									Zli->scale = Ptext.at(a)->cscale;
									LiList.insert(LastSP+1, Zli);
									LastSP += 1;
								}
								else
								{
									HyphenCount = 0;
									hl->cstyle &= 511;
								}
								BuPos = LastSP+1;
								if (Doc->Vorlagen[absa].Ausri != 0)
									{
									EndX = LastXp;
									do
										{
										pt1 = QPoint(qRound(EndX+RExtra), static_cast<int>(CurY+desc));
										pt2 = QPoint(qRound(EndX+RExtra), static_cast<int>(ceil(CurY-asce)));
										EndX++;
										}
									while ((cl.contains(pf2.xForm(pt1))) && (cl.contains(pf2.xForm(pt2))) && (EndX+RExtra+lineCorr < ColBound.y()));
									if (Doc->Vorlagen[absa].Ausri == 2)
										OFs = EndX - LastXp;
									if (Doc->Vorlagen[absa].Ausri == 1)
										OFs = (EndX - LastXp) / 2;
									if ((Doc->Vorlagen[absa].Ausri == 3) || (Doc->Vorlagen[absa].Ausri == 4))
										{
										aSpa = 0;
										for (uint sof = 0; sof<BuPos-1; ++sof)
											{
											if ((LiList.at(sof)->Zeich == QChar(32)) || (LiList.at(sof)->Zeich == QChar(29)))
												aSpa++;
											}
										if (aSpa > 1)
											OFs2 = (EndX - LastXp) / aSpa;
										else
											{
											if (aSpa == 0)
												OFs2 = 0;
											else
												OFs2 = (EndX - LastXp);
											}
										OFs = 0;
										for (uint yof = 0; yof < LiList.count(); ++yof)
											{
											LiList.at(yof)->xco += OFs;
											if ((LiList.at(yof)->Zeich == QChar(32)) || (LiList.at(yof)->Zeich == QChar(29)))
												OFs += OFs2;
											}
										}
									else
										{
										for (uint xof = 0; xof<LiList.count(); ++xof)
											{
											LiList.at(xof)->xco += OFs;
											}
										}
										CurX = EndX;
									}
								}
							else
								{
								a--;
								BuPos--;
								}
							}
						uint BuPos3 = BuPos;
						if ((outs) || (hl->ch == QChar(13)) || (hl->ch == QChar(28)))
							{
							if ((outs) && (CurX+RExtra+lineCorr < ColBound.y()))
								{
								if (((hl->ch == QChar(13)) || (hl->ch == QChar(28))) && (AbsHasDrop))
									{
									AbsHasDrop = false;
									if (CurY < maxDY)
										CurY = maxDY;
									}
								bool fromOut = true;
								double BotOffset = desc+BExtra+lineCorr;
								pt1 = QPoint(qRound(CurX+RExtra), static_cast<int>(CurY+BotOffset));
								pt2 = QPoint(qRound(CurX+RExtra), static_cast<int>(ceil(CurY-asce)));
								while (CurX+RExtra+lineCorr < ColBound.y())
									{
									CurX++;
									if (CurX+RExtra+lineCorr > ColBound.y())
										{
										fromOut = false;
										CurY += Doc->Vorlagen[hl->cab].LineSpa;
										if ((CurY+desc+BExtra+lineCorr > Height) && (CurrCol+1 == Cols))
										{
											goNoRoom = true;
											break;
										}
										if (AbsHasDrop)
											{
											if ((CurY > maxDY) && (CurY - asce > maxDY))
												{
												AbsHasDrop = false;
												CurX = ColBound.x();
												}
											else
												CurX = maxDX;
											}
										else
											CurX = ColBound.x();
										if (hl->ch == QChar(13))
											{
											CurY += Doc->Vorlagen[hl->cab].Anach;
											if (BuPos3 > 0)
												BuPos3 -= 1;
											HyphenCount = 0;
											}
										break;
										}
									pt1 = QPoint(qRound(CurX+RExtra), static_cast<int>(CurY+BotOffset));
									pt2 = QPoint(qRound(CurX+RExtra), static_cast<int>(ceil(CurY-asce)));
									if ((cl.contains(pf2.xForm(pt1))) && (cl.contains(pf2.xForm(pt2))))
										break;
									}
								if (fromOut)
									{
									if ((CurY+desc+BExtra+lineCorr > Height) && (CurrCol+1 == Cols))
									{
										goNoRoom = true;
										break;
									}
									CurX--;
									CurX = QMAX(CurX, 0);
									}
								}
							else
								{
								if (((hl->ch == QChar(13)) || (hl->ch == QChar(28))) && (AbsHasDrop))
									{
									AbsHasDrop = false;
									if (CurY < maxDY)
										CurY = maxDY;
									}
								CurY += Doc->Vorlagen[hl->cab].LineSpa;
								if (AbsHasDrop)
									{
									if ((CurY > maxDY) && (CurY - asce > maxDY))
										{
										AbsHasDrop = false;
										CurX = ColBound.x();
										}
									else
										CurX = maxDX;
									}
								else
									CurX = ColBound.x();
								if (hl->ch == QChar(13))
									{
									CurY += Doc->Vorlagen[hl->cab].Anach;
									if (BuPos3 > 0)
										BuPos3 -= 1;
									HyphenCount = 0;
									}
								}
							}
						hl->xp = CurX;
						hl->yp = CurY;
						LiList.at(LiList.count()-1)->xco = hl->xp;
						LiList.at(LiList.count()-1)->yco = hl->yp;
						for (uint zc = 0; zc<BuPos3; ++zc)
						{
							double wide2 = 0;
							Zli2 = LiList.at(zc);
							double xcoZli = Zli2->xco;
							Ptext.at(startLin+zc)->xp = Zli2->xco;
							Ptext.at(startLin+zc)->yp = Zli2->yco;
							if (Zli2->Farb != "None")
							{
								SetFarbe(&tmp, Zli2->Farb, Zli2->shade);
								p->setBrush(tmp);
							}
							desc = (*Doc->AllFonts)[Zli2->ZFo]->numDescender * (-Zli2->Siz / 10.0);
							asce = (*Doc->AllFonts)[Zli2->ZFo]->numAscent * (Zli2->Siz / 10.0);
							if ((((Zli2->Sele) && (Select)) || (((NextBox != 0) || (BackBox != 0)) && (Zli2->Sele))) && (Doc->AppMode == 7))
							{
								wide = Zli2->wide;
								p->setFillMode(1);
								p->setBrush(darkBlue);
								p->setLineWidth(0);
								if ((zc > 0) && (Zli2->Zeich == QChar(9)))
								{
									wide2 = LiList.at(zc-1)->wide;
									xcoZli = LiList.at(zc-1)->xco+wide2;
									wide = Zli2->xco - xcoZli + Zli2->wide;
								}
								if (!Doc->RePos)
									p->drawRect(xcoZli, qRound(Zli2->yco-asce), wide+1, qRound(asce+desc));
								p->setBrush(white);
							}
							if (Zli2->Farb2 != "None")
							{
								SetFarbe(&tmp, Zli2->Farb2, Zli2->shade2);
								p->setPen(tmp, 1, SolidLine, FlatCap, MiterJoin);
							}
							if (!Doc->RePos)
							{
								if (e.intersects(pf.xForm(QRect(qRound(Zli2->xco),qRound(Zli2->yco-asce), qRound(Zli2->wide+1), qRound(asce+desc)))))
									DrawZeichenS(p, Zli2);
							}
						}
						LiList.clear();
						BuPos = 0;
						LastSP = 0;
						LastXp = 0;
						outs = false;
						if (goNoRoom)
						{
							goNoRoom = false;
							nrc = a+1;
							goto NoRoom;
						}
					}
				}
				if (Doc->Vorlagen[absa].Ausri != 0)
				{
					EndX = CurX;
					do
					{
						pt1 = QPoint(qRound(EndX+RExtra), static_cast<int>(CurY+desc));
						pt2 = QPoint(qRound(EndX+RExtra), static_cast<int>(ceil(CurY-asce)));
						EndX++;
					}
					while ((cl.contains(pf2.xForm(pt1))) && (cl.contains(pf2.xForm(pt2))) && (EndX+RExtra+lineCorr < ColBound.y()));
					if (Doc->Vorlagen[absa].Ausri == 2)
						OFs = EndX - CurX;
					if (Doc->Vorlagen[absa].Ausri == 1)
						OFs = (EndX - CurX) / 2;
					if (Doc->Vorlagen[absa].Ausri == 3)
						OFs = 0;
					if (Doc->Vorlagen[absa].Ausri == 4)
					{
						aSpa = 0;
						for (uint sof = 0; sof<LiList.count(); ++sof)
						{
							if ((LiList.at(sof)->Zeich == QChar(32)) || (LiList.at(sof)->Zeich == QChar(29)))
								aSpa++;
						}
						if (aSpa != 0)
							OFs2 = (EndX - CurX) / aSpa;
						else
							OFs2 = 0;
						OFs = 0;
						for (uint yof = 0; yof < LiList.count(); ++yof)
						{
							LiList.at(yof)->xco += OFs;
							if ((LiList.at(yof)->Zeich == QChar(32)) || (LiList.at(yof)->Zeich == QChar(29)))
								OFs += OFs2;
						}
					}
					else
					{
						for (uint xof = 0; xof<LiList.count(); ++xof)
						{
							LiList.at(xof)->xco += OFs;
						}
					}
				}
				for (uint zc = 0; zc<LiList.count(); ++zc)
				{
					double wide2 = 0;
					Zli2 = LiList.at(zc);
					double xcoZli = Zli2->xco;
					Ptext.at(startLin+zc)->xp = Zli2->xco;
					Ptext.at(startLin+zc)->yp = Zli2->yco;
					if (Zli2->Farb != "None")
					{
						SetFarbe(&tmp, Zli2->Farb, Zli2->shade);
						p->setBrush(tmp);
					}
					desc = (*Doc->AllFonts)[Zli2->ZFo]->numDescender * (-Zli2->Siz / 10.0);
					asce = (*Doc->AllFonts)[Zli2->ZFo]->numAscent * (Zli2->Siz / 10.0);
					if ((((Zli2->Sele) && (Select)) || (((NextBox != 0) || (BackBox != 0)) && (Zli2->Sele))) && (Doc->AppMode == 7))
					{
						wide = Zli2->wide;
						desc = (*Doc->AllFonts)[Zli2->ZFo]->numDescender * (-Zli2->Siz / 10.0);
						asce = (*Doc->AllFonts)[Zli2->ZFo]->numAscent * (Zli2->Siz / 10.0);
						p->setFillMode(1);
						p->setBrush(darkBlue);
						p->setLineWidth(0);
						if ((zc > 0) && (Zli2->Zeich == QChar(9)))
						{
							wide2 = LiList.at(zc-1)->wide;
							xcoZli = LiList.at(zc-1)->xco+wide2;
							wide = Zli2->xco - xcoZli + Zli2->wide;
						}
						if (!Doc->RePos)
							p->drawRect(xcoZli, qRound(Zli2->yco-asce), wide+1, qRound(asce+desc));
						p->setBrush(white);
					}
					if (Zli2->Farb2 != "None")
					{
						SetFarbe(&tmp, Zli2->Farb2, Zli2->shade2);
						p->setPen(tmp, 1, SolidLine, FlatCap, MiterJoin);
					}
					if (!Doc->RePos)
					{
						if (e.intersects(pf.xForm(QRect(qRound(Zli2->xco),qRound(Zli2->yco-asce), qRound(Zli2->wide+1), qRound(asce+desc)))))
							DrawZeichenS(p, Zli2);
					}
				}
				LiList.clear();
				BuPos = 0;
				LastSP = 0;
				outs = false;
			}
			MaxChars = Ptext.count();
			Redrawn = true;
			pf2.end();
			p->restore();
			break;
NoRoom: pf2.end();
				if (NextBox != 0)
				{
					nrc2 = Ptext.count();
					for (uint ss=nrc; ss<nrc2; ++ss)
					{
						NextBox->Ptext.append(Ptext.take(nrc));
					}
					if (uint(CPos) > nrc)
					{
						int nCP = CPos - nrc;
						CPos = nrc;
						if ((Doc->AppMode == 7) && (Tinput))
						{
							OwnPage->Deselect(true);
							NextBox->CPos = QMAX(nCP, 1);
							Doc->ActPage = NextBox->OwnPage;
							NextBox->OwnPage->SelectItemNr(NextBox->ItemNr);
							break;
						}
					}
					p->save();
					bool rep = Doc->RePos;
					Doc->RePos = true;
					NextBox->Dirty = false;
					QPixmap pgPix(1, 1);
					ScPainter *painter = new ScPainter(&pgPix, 1, 1);
					painter->translate(0.5, 0.5);
					NextBox->DrawObj(painter, QRect(0, 0, 1, 1));
					NextBox->Dirty = true;
					painter->end();
					delete painter;
					p->restore();
					if (NextBox->OwnPage != OwnPage)
						NextBox->OwnPage->update();
					Doc->RePos = rep;
				}
				else
				{
					if (!Doc->RePos)
					{
						double scp1 = 1.0/QMAX(Doc->Scale, 1);
						double scp16 = 16.0*scp1;
						double scp14 = 14.0*scp1;
						double scp3 = 3.0*scp1;
						double scpwidth16 = Width - scp16;
						double scpheight16 = Height - scp16;
						double scpwidth3 = Width - scp3;
						double scpheight3 = Height - scp3;

						p->setPen(black, scp1, SolidLine, FlatCap, MiterJoin);
						p->setBrush(white);
						p->drawRect(scpwidth16, scpheight16, scp14, scp14);
						p->drawLine(FPoint(scpwidth16, scpheight16), FPoint(scpwidth3, scpheight3));
						p->drawLine(FPoint(scpwidth16, scpheight3), FPoint(scpwidth3, scpheight16));
					}
				}
				MaxChars = nrc;
				Redrawn = true;
				p->restore();
				break;
		case 8:
			{
			if (!PoShow)
				doStroke = false;
			double dx;
			double sp = 0;
			double oldSp = 0;
			double oCurX = 0;
			FPoint point = FPoint(0, 0);
			FPoint normal = FPoint(0, 0);
			FPoint tangent = FPoint(0, 0);
			FPoint extPoint = FPoint(0, 0);
			bool ext = false;
			bool first = true;
			double fsx = 0;
			uint seg = 0;
			double segLen = 0;
			double distCurX;
			CurX = Extra;
			if (Ptext.count() != 0)
				CurX += Ptext.at(0)->cextra;
			segLen = PoLine.lenPathSeg(seg);
			for (a = 0; a < Ptext.count(); ++a)
			{
				CurY = 0;
				hl = Ptext.at(a);
				chx = hl->ch;
				if ((chx == QChar(30)) || (chx == QChar(13)) || (chx == QChar(9)) || (chx == QChar(28)))
					continue;
				chs = hl->csize;
				SetZeichAttr(hl, &chs, &chx);
				if (chx == QChar(29))
					chx2 = " ";
				else
					chx2 = chx;
				if (a < Ptext.count()-1)
				{
					if (Ptext.at(a+1)->ch == QChar(29))
						chx3 = " ";
					else
						chx3 = Ptext.at(a+1)->ch;
					wide = Cwidth(Doc, hl->cfont, chx2, chs, chx3);
				}
				else
					wide = Cwidth(Doc, hl->cfont, chx2, chs);
				wide = wide * (hl->cscale / 100.0);
				dx = wide / 2.0;
				CurX += dx;
				ext = false;
				while ( (seg < PoLine.count()-4) && (CurX > fsx + segLen))
				{
					fsx += segLen;
					seg += 4;
					segLen = PoLine.lenPathSeg(seg);
					ext = true;
				}
				if ( (seg == PoLine.count()-4) && (CurX > fsx + segLen))
					break;
				QString db;
				if (ext)
				{
					sp = 0;
					distCurX = PoLine.lenPathDist(seg, 0, sp);
					while (distCurX <= ((CurX - oCurX) - (fsx - oCurX)))
					{
						sp += 0.001;
						distCurX = PoLine.lenPathDist(seg, 0, sp);
					}
					PoLine.pointTangentNormalAt(seg, sp, &point, &tangent, &normal );
					CurX = (CurX - (CurX - fsx)) + distCurX;
					oldSp = sp;
					ext = false;
				}
				else
				{
					if( seg < PoLine.count() )
					{
						distCurX = PoLine.lenPathDist(seg, oldSp, sp);
						while (distCurX <= (CurX - oCurX))
						{
							sp += 0.001;
							if (sp >= 1.0)
							{
								sp = 0.9999;
								break;
							}
							distCurX = PoLine.lenPathDist(seg, oldSp, sp);
						}
						PoLine.pointTangentNormalAt(seg, sp, &point, &tangent, &normal );
						CurX = oCurX + distCurX;
						oldSp = sp;
					}
					else
						break;
				}
				hl->xp = point.x();
				hl->yp = point.y();
				hl->PtransX = tangent.x();
				hl->PtransY = tangent.y();
				hl->PRot = dx;

				QWMatrix trafo = QWMatrix( 1, 0, 0, -1, -dx*sc, 0 );
				trafo *= QWMatrix( tangent.x(), tangent.y(), tangent.y(), -tangent.x(), point.x()*sc, point.y()*sc );
				QWMatrix sca = p->worldMatrix();
				trafo *= sca;
				p->save();
				QWMatrix savWM = p->worldMatrix();
				p->setWorldMatrix(trafo);
				Zli = new ZZ;
				Zli->Zeich = chx;
				if (hl->ccolor != "None")
				{
					SetFarbe(&tmp, hl->ccolor, hl->cshade);
					p->setBrush(tmp);
				}
				if (hl->cstroke != "None")
				{
					SetFarbe(&tmp, hl->cstroke, hl->cshade2);
					p->setPen(tmp, 1, SolidLine, FlatCap, MiterJoin);
				}
				Zli->Farb = hl->ccolor;
				Zli->Farb2 = hl->cstroke;
				Zli->shade = hl->cshade;
				Zli->shade2 = hl->cshade2;
				Zli->xco = 0;
				Zli->yco = BaseOffs;
				Zli->Sele = hl->cselect;
				Zli->Siz = chs;
				Zli->Style = hl->cstyle;
				Zli->ZFo = hl->cfont;
				Zli->wide = wide;
				Zli->kern = hl->cextra;
				Zli->scale = hl->cscale;
				if (!Doc->RePos)
					DrawZeichenS(p, Zli);
				delete Zli;
				p->setWorldMatrix(savWM);
				p->restore();
				p->setZoomFactor(sc);
				MaxChars = a+1;
				oCurX = CurX;
				CurX -= dx;
				CurX += wide+hl->cextra;
				first = false;
			}
		}
		default:
			break;
	}
	if ((doStroke) && (!Doc->RePos))
	{
		if (Pcolor2 != "None")
		{
			SetFarbe(&tmp, Pcolor2, Shade2);
			p->setPen(tmp, Pwidth, PLineArt, PLineEnd, PLineJoin);
			if (DashValues.count() != 0)
				p->setDash(DashValues, DashOffset);
		}
		else
			p->setLineWidth(0);
		if (!isTableItem)
		{
			p->setupPolygon(&PoLine);
			if (NamedLStyle == "")
				p->drawPolyLine();
			else
			{
				multiLine ml = Doc->MLineStyles[NamedLStyle];
				for (int it = ml.size()-1; it > -1; it--)
				{
					SetFarbe(&tmp, ml[it].Color, ml[it].Shade);
					p->setPen(tmp, ml[it].Width,
									 static_cast<PenStyle>(ml[it].Dash),
									 static_cast<PenCapStyle>(ml[it].LineEnd),
									 static_cast<PenJoinStyle>(ml[it].LineJoin));
					p->drawPolyLine();
				}
			}
		}
	}
	if (!Doc->RePos)
	{
		double scp = QMAX(Doc->Scale, 1);
		if ((Frame) && (ScApp->Prefs.FramesShown) && ((PType == 2) || (PType == 4) || (PType == 8)))
		{
			p->setPen(black, 1 / scp, DotLine, FlatCap, MiterJoin);
			if ((isBookmark) || (isAnnotation))
				p->setPen(blue, 1 / scp, DotLine, FlatCap, MiterJoin);
			if ((BackBox != 0) || (NextBox != 0))
				p->setPen(red, 1 / scp, SolidLine, FlatCap, MiterJoin);
			if (Locked)
				p->setPen(darkRed, 1 / scp, SolidLine, FlatCap, MiterJoin);
			p->setFillMode(0);
			if (PType == 8)
			{
				if (Clip.count() != 0)
				{
					FPointArray tclip;
					FPoint np = FPoint(Clip.point(0));
					tclip.resize(2);
					tclip.setPoint(0, np);
					tclip.setPoint(1, np);
					for (uint a = 1; a < Clip.size(); ++a)
					{
						np = FPoint(Clip.point(a));
						tclip.putPoints(tclip.size(), 4, np.x(), np.y(), np.x(), np.y(), np.x(), np.y(), np.x(), np.y());
					}
					np = FPoint(Clip.point(0));
					tclip.putPoints(tclip.size(), 2, np.x(), np.y(), np.x(), np.y());
					p->setupPolygon(&tclip);
				}
			}
			else
				p->setupPolygon(&PoLine);
			p->drawPolyLine();
		}
		if ((ScApp->Prefs.FramesShown) && (UseContour) && (ContourLine.size() != 0))
		{
			p->setPen(lightGray, 1 / scp, DotLine, FlatCap, MiterJoin);
			p->setupPolygon(&ContourLine);
			p->drawPolyLine();
		}
	}
	Tinput = false;
	FrameOnly = false;
	p->restore();
	pf.end();
}

void PageItem::paintObj(QRect e, QPixmap *ppX)
{
	QPainter p;
	if (!Doc->DoDrawing)
	{
		Redrawn = true;
		Tinput = false;
		FrameOnly = false;
		return;
	}
	if (toPixmap)
		p.begin(ppX);
	else
		p.begin(Parent);
	if ((!toPixmap) && (!Doc->RePos))
	{
		if (!e.isEmpty())
			p.setClipRect(e);
		else
			p.setClipRect(OwnPage->ViewReg().boundingRect());
	}
	p.translate(static_cast<int>(Xpos*Doc->Scale), static_cast<int>(Ypos*Doc->Scale));
	p.scale(static_cast<double>(Doc->Scale), static_cast<double>(Doc->Scale));
	p.rotate(static_cast<double>(Rot));
	if (Sizing)
	{
		p.setRasterOp(XorROP);
		p.setBrush(NoBrush);
		p.setPen(QPen(white, 1, DotLine, FlatCap, MiterJoin));
		p.drawRect(0, 0, static_cast<int>(OldB), static_cast<int>(OldH));
		p.drawRect(0, 0, static_cast<int>(Width), static_cast<int>(Height));
		OldB = Width;
		OldH = Height;
	}
	if ((!Tinput) && (!Doc->RePos))
	{
		if (Select) // && (!Doc->EditClip))
		{
			if (!OwnPage->SelItem.isEmpty())
			{
				if (Groups.count() == 0)
				{
					QPainter pr;
					pr.begin(Parent);
					pr.translate(static_cast<int>(Xpos*Doc->Scale), static_cast<int>(Ypos*Doc->Scale));
					pr.rotate(static_cast<double>(Rot));
					if (Locked)
						pr.setPen(QPen(darkRed, 1, SolidLine, FlatCap, MiterJoin));
					else
						pr.setPen(QPen(red, 1, DotLine, FlatCap, MiterJoin));
					pr.setBrush(NoBrush);
					pr.drawRect(-1, -1, static_cast<int>(Width*Doc->Scale)+2,
								 static_cast<int>(Height*Doc->Scale)+2);
					pr.setPen(QPen(red, 1, SolidLine, FlatCap, MiterJoin));
					pr.setBrush(red);
					if ((!Locked) && (!LockRes))
					{
						if (PType != 5)
						{
							pr.drawRect(-1, -1, 6, 6);
							pr.drawRect(static_cast<int>(Width*Doc->Scale), static_cast<int>(Height*Doc->Scale), 
										-6, -6);
							pr.drawRect(static_cast<int>(Width*Doc->Scale), -1, -6, 6);
							pr.drawRect(-1, static_cast<int>(Height*Doc->Scale), 6, -6);
							if (Width > 6)
							{
								pr.drawRect(static_cast<int>(Width/2*Doc->Scale - 3),
											static_cast<int>(Height*Doc->Scale), 6, -6);
								pr.drawRect(static_cast<int>(Width/2*Doc->Scale - 3), -1, 6, 6);
							}
							if (Height > 6)
							{
								pr.drawRect(static_cast<int>(Width*Doc->Scale), 
											static_cast<int>(Height/2*Doc->Scale - 3), -6, 6);
								pr.drawRect(-1, static_cast<int>(Height/2*Doc->Scale - 3), 6, 6);
							}
						}
						else
						{
							pr.drawRect(-3, -3, 6, 6);
							pr.drawRect(static_cast<int>(Width*Doc->Scale)+3, -3, -6, 6);
						}
					}
					pr.end();
				}
				else
				{
					p.setPen(QPen(darkCyan, 1, DotLine, FlatCap, MiterJoin));
					p.setBrush(NoBrush);
					p.drawRect(-1, -1, static_cast<int>(Width+2), static_cast<int>(Height+2));
					if (OwnPage->SelItem.count() == 1)
					{
						QPainter pr;
						pr.begin(Parent);
						pr.translate(static_cast<int>(Xpos*Doc->Scale), static_cast<int>(Ypos*Doc->Scale));
						pr.rotate(static_cast<double>(Rot));
						pr.setPen(QPen(darkCyan, 1, SolidLine, FlatCap, MiterJoin));
						pr.setBrush(darkCyan);
						pr.drawRect(-1, -1, 6, 6);
						pr.drawRect(static_cast<int>(Width*Doc->Scale), static_cast<int>(Height*Doc->Scale), -6, -6);
						pr.drawRect(static_cast<int>(Width*Doc->Scale), -1, -6, 6);
						pr.drawRect(-1, static_cast<int>(Height*Doc->Scale), 6, -6);
						if (Width > 6)
						{
							pr.drawRect(static_cast<int>(Width/2*Doc->Scale - 3), static_cast<int>(Height*Doc->Scale), 6, -6);
							pr.drawRect(static_cast<int>(Width/2*Doc->Scale - 3), -1, 6, 6);
						}
						if (Height > 6)
						{
							pr.drawRect(static_cast<int>(Width*Doc->Scale), static_cast<int>(Height/2*Doc->Scale - 3), -6, 6);
							pr.drawRect(-1, static_cast<int>(Height/2*Doc->Scale - 3), 6, 6);
						}
						pr.end();
					}
				}
			}
		}
	}
	Tinput = false;
	FrameOnly = false;
	p.end();
}

QString PageItem::ExpandToken(uint base)
{
	uint zae = 0;
	uint za2 = base;
	QString chx = "#";
	if (!Doc->MasterP)
	{
		do
		{
			if (za2 == 0)
				break;
			za2--;
		}
		while (Ptext.at(za2)->ch == QChar(30));
		if (Ptext.at(za2)->ch != QChar(30))
			za2++;
		while (Ptext.at(za2+zae)->ch == QChar(30))
		{
			zae++;
			if (za2+zae == Ptext.count())
				break;
		}
		QString out="%1";
		QString out2;
		out2 = out.arg(OwnPage->PageNr+Doc->FirstPnum, -zae);
		chx = out2.mid(base-za2, 1);
	}
	return chx;
}

void PageItem::SetFarbe(QColor *tmp, QString farbe, int shad)
{
	int h, s, v, sneu;
	Doc->PageColors[farbe].getRGBColor().rgb(&h, &s, &v);
	if ((h == s) && (s == v))
	{
		Doc->PageColors[farbe].getRGBColor().hsv(&h, &s, &v);
		sneu = 255 - ((255 - v) * shad / 100);
		tmp->setHsv(h, s, sneu);
	}
	else
	{
		Doc->PageColors[farbe].getRGBColor().hsv(&h, &s, &v);
		sneu = s * shad / 100;
		tmp->setHsv(h, sneu, v);
	}
}

double PageItem::SetZeichAttr(struct Pti *hl, int *chs, QString *chx)
{
	double retval = 0.0;
	double asce = (*Doc->AllFonts)[hl->cfont]->numAscent * (hl->csize / 10.0);
	int chst = hl->cstyle & 127;
	if (chst != 0)
	{
		if (chst & 1)
		{
			retval -= asce * Doc->VHoch / 100;
			*chs = QMAX(static_cast<int>(hl->csize * Doc->VHochSc / 100), 1);
		}
		if (chst & 2)
		{
			retval += asce * Doc->VTief / 100;
			*chs = QMAX(static_cast<int>(hl->csize * Doc->VTiefSc / 100), 1);
		}
		if (chst & 64)
		{
			if (chx->upper() != *chx)
			{
				*chs = QMAX(static_cast<int>(hl->csize * Doc->VKapit / 100), 1);
				*chx = chx->upper();
			}
		}
	}
	return retval;
}

void PageItem::DrawZeichenS(ScPainter *p, struct ZZ *hl)
{
	QString ccx = hl->Zeich;
	if ((ccx == QChar(13)) || (ccx == QChar(9)) || (ccx == QChar(28)))
		return;
	if (ccx == QChar(29))
		ccx = " ";
	double csi = static_cast<double>(hl->Siz) / 100.0;
	uint chr = ccx[0].unicode();
	if ((*Doc->AllFonts)[hl->ZFo]->CharWidth.contains(chr))
	{
		QWMatrix chma, chma2, chma3, chma4, chma5;
		chma.scale(csi, csi);
		chma5.scale(p->zoomFactor(), p->zoomFactor());
		FPointArray gly = (*Doc->AllFonts)[hl->ZFo]->GlyphArray[chr].Outlines.copy();
		if (gly.size() > 3)
		{
			chma2.scale(hl->scale / 100.0, 1);
			if (Reverse)
			{
				chma3.scale(-1, 1);
				chma3.translate(-hl->wide, 0);
				chma4.translate(hl->xco, hl->yco-(hl->Siz / 10.0));
			}
			else
				chma4.translate(hl->xco, hl->yco-(hl->Siz / 10.0));
			gly.map(chma * chma2 * chma3 * chma4 * chma5);
			p->setFillMode(1);
			p->setupTextPolygon(&gly);
			if ((*Doc->AllFonts)[hl->ZFo]->isStroked)
			{
				QColor tmp = p->brush();
				p->setPen(tmp, 1, SolidLine, FlatCap, MiterJoin);
				p->setLineWidth(QMAX((*Doc->AllFonts)[hl->ZFo]->strokeWidth * (hl->Siz / 10.0) / 2, 1));
				p->strokePath();
			}
			else
			{
				if (hl->Farb != "None")
					p->fillPath();
				if ((hl->Style & 4) && (hl->Farb2 != "None"))
				{
					p->setLineWidth(QMAX((*Doc->AllFonts)[hl->ZFo]->strokeWidth * (hl->Siz / 10.0) / 2, 1));
					p->strokePath();
				}
			}
		}
		if (hl->Style & 16)
		{
			p->setPen(p->brush());
			double st = (*Doc->AllFonts)[hl->ZFo]->strikeout_pos * (hl->Siz / 10.0);
			p->setLineWidth(QMAX((*Doc->AllFonts)[hl->ZFo]->strokeWidth * (hl->Siz / 10.0), 1));
			p->drawLine(FPoint(hl->xco-hl->kern, hl->yco-st), FPoint(hl->xco+hl->wide, hl->yco-st));
		}
		if (hl->Style & 8)
		{
			double st = (*Doc->AllFonts)[hl->ZFo]->underline_pos * (hl->Siz / 10.0);
			p->setPen(p->brush());
			p->setLineWidth(QMAX((*Doc->AllFonts)[hl->ZFo]->strokeWidth * (hl->Siz / 10.0), 1));
			p->drawLine(FPoint(hl->xco-hl->kern, hl->yco-st), FPoint(hl->xco+hl->wide, hl->yco-st));
		}
	}
	else
	{
		p->setLineWidth(1);
		p->setPen(black);
		p->setFillMode(0);
		p->drawRect(hl->xco, hl->yco-(hl->Siz / 10.0), (hl->Siz / 10.0)*(hl->scale / 100.0), (hl->Siz / 10.0));
	}
}

void PageItem::DrawPolyL(QPainter *p, QPointArray pts)
{
	QColor tmp;
	if (Segments.count() != 0)
	{
		QValueList<uint>::Iterator it2;
		uint FirstVal = 0;
		for (it2 = Segments.begin(); it2 != Segments.end(); ++it2)
		{
			if (NamedLStyle == "")
				p->drawPolyline(pts, FirstVal, (*it2)-FirstVal);
			else
			{
				multiLine ml = Doc->MLineStyles[NamedLStyle];
				for (int it = ml.size()-1; it > -1; it--)
				{
					SetFarbe(&tmp, ml[it].Color, ml[it].Shade);
					p->setPen(QPen(tmp,
									 QMAX(static_cast<int>(ml[it].Width*Doc->Scale), 1),
									 static_cast<PenStyle>(ml[it].Dash),
									 static_cast<PenCapStyle>(ml[it].LineEnd),
									 static_cast<PenJoinStyle>(ml[it].LineJoin)));
					p->drawPolyline(pts, FirstVal, (*it2)-FirstVal);
				}
			}
			FirstVal = (*it2);
		}
		if (NamedLStyle == "")
			p->drawPolyline(pts, FirstVal);
		else
		{
			multiLine ml = Doc->MLineStyles[NamedLStyle];
			for (int it = ml.size()-1; it > -1; it--)
			{
				SetFarbe(&tmp, ml[it].Color, ml[it].Shade);
				p->setPen(QPen(tmp,
								 QMAX(static_cast<int>(ml[it].Width*Doc->Scale), 1),
								 static_cast<PenStyle>(ml[it].Dash),
								 static_cast<PenCapStyle>(ml[it].LineEnd),
								 static_cast<PenJoinStyle>(ml[it].LineJoin)));
				p->drawPolyline(pts, FirstVal);
			}
		}
	}
	else
	{
		if (NamedLStyle == "")
			p->drawPolyline(pts);
		else
		{
			multiLine ml = Doc->MLineStyles[NamedLStyle];
			for (int it = ml.size()-1; it > -1; it--)
			{
				SetFarbe(&tmp, ml[it].Color, ml[it].Shade);
				p->setPen(QPen(tmp,
								 QMAX(static_cast<int>(ml[it].Width*Doc->Scale), 1),
								 static_cast<PenStyle>(ml[it].Dash),
								 static_cast<PenCapStyle>(ml[it].LineEnd),
								 static_cast<PenJoinStyle>(ml[it].LineJoin)));
				p->drawPolyline(pts);
			}
		}
	}
}
