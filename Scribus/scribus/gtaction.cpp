/***************************************************************************
 *   Copyright (C) 2004 by Riku Leino                                      *
 *   riku.leino@gmail.com                                                      *
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 *   This program is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU General Public License for more details.                          *
 *                                                                         *
 *   You should have received a copy of the GNU General Public License     *
 *   along with this program; if not, write to the                         *
 *   Free Software Foundation, Inc.,                                       *
 *   59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.             *
 ***************************************************************************/

#include "gtaction.h"
#include <qcursor.h>
#include <qstringlist.h>
#include "color.h"

extern ScribusApp* ScApp;

gtAction::gtAction(bool append)
{
	textFrame = ScApp->doc->ActPage->SelItem.at(0);
	it = textFrame;
	lastParagraphStyle = -1;
	inPara = false;
	isFirstWrite = true;
	lastCharWasLineChange = false;
	currentFrameStyle = "";
	doAppend = append;
	updateParagraphStyles = false;
	overridePStyleFont = true;
}

void gtAction::setProgressInfo()
{
	ScApp->FMess->setText(QObject::tr("Importing text"));
	ScApp->FProg->reset();
	ScApp->FProg->setTotalSteps(0);
}

void gtAction::setProgressInfoDone()
{
	ScApp->FMess->setText("");
	ScApp->FProg->reset();
}

void gtAction::setInfo(QString infoText)
{
	ScApp->FMess->setText(infoText);
}

void gtAction::clearFrame()
{
	textFrame->Ptext.clear();
	textFrame->CPos = 0;
}

void gtAction::write(const QString& text, gtStyle *style)
{
	if (isFirstWrite)
	{
		if (!doAppend)
		{
			if (it->NextBox != 0)
			{
				PageItem *nb = it->NextBox;
				while (nb != 0)
				{
					nb->Ptext.clear();
					nb->CPos = 0;
					nb = nb->NextBox;
				}
			}
			it->Ptext.clear();
			it->CPos = 0;
		}
	}
	int paragraphStyle = -1;
	if (style->target() == "paragraph")
	{
		gtParagraphStyle* pstyle = dynamic_cast<gtParagraphStyle*>(style);
		paragraphStyle = applyParagraphStyle(pstyle);
		if (isFirstWrite)
			inPara = true;
	}
	else if (style->target() == "frame")
	{
		gtFrameStyle* fstyle = dynamic_cast<gtFrameStyle*>(style);
		applyFrameStyle(fstyle);
	}
	
	if ((inPara) && (!lastCharWasLineChange) && (text.left(1) != "\n") && (lastParagraphStyle != -1))
		paragraphStyle = lastParagraphStyle;


	if (paragraphStyle == -1)
		paragraphStyle = ScApp->doc->CurrentABStil;

	gtFont* font = style->getFont();
	QString fontName = validateFont(font);
	gtFont* font2 = new gtFont(*font);
	font2->setName(ScApp->doc->Vorlagen[paragraphStyle].Font);
	QString fontName2 = validateFont(font2);
	for (uint a = 0; a < text.length(); ++a)
	{
		if ((text.at(a) == QChar(0)) || (text.at(a) == QChar(13)))
			continue;
		struct Pti *hg = new Pti;
		hg->ch = text.at(a);
		if ((hg->ch == QChar(10)) || (hg->ch == QChar(5)))
			hg->ch = QChar(13);
		if ((inPara) && (!overridePStyleFont))
		{
			if (ScApp->doc->Vorlagen[paragraphStyle].Font == "")
				hg->cfont = fontName2;
			else
				hg->cfont = ScApp->doc->Vorlagen[paragraphStyle].Font;
			hg->csize = ScApp->doc->Vorlagen[paragraphStyle].FontSize;
			hg->ccolor = ScApp->doc->Vorlagen[paragraphStyle].FColor;
			hg->cshade = ScApp->doc->Vorlagen[paragraphStyle].FShade;
			hg->cstroke = ScApp->doc->Vorlagen[paragraphStyle].SColor;
			hg->cshade2 = ScApp->doc->Vorlagen[paragraphStyle].SShade;
			hg->cstyle = ScApp->doc->Vorlagen[paragraphStyle].FontEffect;
		}
		else
		{
			hg->cfont = fontName;
			hg->csize = font->getSize();
			hg->ccolor = parseColor(font->getColor());
			hg->cshade = font->getShade();
			hg->cstroke = parseColor(font->getStrokeColor());
			hg->cshade2 = font->getStrokeShade();
			hg->cstyle = font->getEffectsValue();
		}
		hg->cscale = font->getHscale();
		hg->cextra = font->getKerning();
		hg->cselect = false;
		hg->cab = paragraphStyle;
		hg->xp = 0;
		hg->yp = 0;
		hg->PtransX = 0;
		hg->PtransY = 0;
		it->Ptext.append(hg);
	}
	lastCharWasLineChange = text.right(1) == "\n";
	inPara = style->target() == "paragraph";
	lastParagraphStyle = paragraphStyle;
	if (isFirstWrite)
		isFirstWrite = false;
}

int gtAction::findParagraphStyle(gtParagraphStyle* pstyle)
{
	return findParagraphStyle(pstyle->getName());
}

int gtAction::findParagraphStyle(const QString& name)
{
	int pstyleIndex = -1;
	for (uint i = 0; i < ScApp->doc->Vorlagen.size(); ++i)
	{
		if (ScApp->doc->Vorlagen[i].Vname == name)
		{
			pstyleIndex = i;
			break;
		}
	}
	return pstyleIndex;
}

int gtAction::applyParagraphStyle(gtParagraphStyle* pstyle)
{
	int pstyleIndex = findParagraphStyle(pstyle);
	if (pstyleIndex == -1)
	{
		createParagraphStyle(pstyle);
		pstyleIndex = ScApp->doc->Vorlagen.size() - 1;
	}
	else if (updateParagraphStyles)
	{
		updateParagraphStyle(pstyleIndex, pstyle);
	}
	return pstyleIndex;
}

void gtAction::applyFrameStyle(gtFrameStyle* fstyle)
{
	textFrame->Cols = fstyle->getColumns();
	textFrame->ColGap = fstyle->getColumnsGap();
	textFrame->Pcolor = parseColor(fstyle->getBgColor());
	textFrame->Shade = fstyle->getBgShade();
	textFrame->TabValues = QValueList<double>(*(fstyle->getTabValues()));
	
// 	gtParagraphStyle* pstyle = new gtParagraphStyle(*fstyle);
// 	int pstyleIndex = findParagraphStyle(pstyle);
// 	if (pstyleIndex == -1)
// 		pstyleIndex = 0;
// 	textFrame->Doc->CurrentABStil = pstyleIndex;

	double linesp;
	if (fstyle->getAutoLineSpacing())
		linesp = getLineSpacing(fstyle->getFont()->getSize());
	else
		linesp = fstyle->getLineSpacing();
	textFrame->LineSp = linesp;

	gtFont* font = fstyle->getFont();
	QString fontName = validateFont(font);
	textFrame->IFont = fontName;
	textFrame->ISize = font->getSize();
	textFrame->TxtFill = parseColor(font->getColor());
	textFrame->ShTxtFill = font->getShade();
	textFrame->TxtStroke = parseColor(font->getStrokeColor());
	textFrame->ShTxtStroke = font->getStrokeShade();
	textFrame->TxtScale = font->getHscale();
	textFrame->ExtraV = font->getKerning();
}

void gtAction::getFrameFont(gtFont *font)
{
	font->setName(textFrame->IFont);
	font->setSize(textFrame->ISize);
	font->setColor(textFrame->TxtFill);
	font->setShade(textFrame->ShTxtFill);
	font->setStrokeColor(textFrame->TxtStroke);
	font->setStrokeShade(textFrame->ShTxtStroke);
	font->setHscale(textFrame->TxtScale);
	font->setKerning(0);
}

void gtAction::getFrameStyle(gtFrameStyle *fstyle)
{
	fstyle->setColumns(textFrame->Cols);
	fstyle->setColumnsGap(textFrame->ColGap);
	fstyle->setBgColor(textFrame->Pcolor);
	fstyle->setBgShade(textFrame->Shade);
	
	struct StVorL vg = textFrame->Doc->Vorlagen[textFrame->Doc->CurrentABStil];
	fstyle->setName(vg.Vname);
	fstyle->setLineSpacing(vg.LineSpa);
	fstyle->setAlignment(vg.Ausri);
	fstyle->setIndent(vg.Indent);
	fstyle->setFirstLineIndent(vg.First);
	fstyle->setSpaceAbove(vg.Avor);
	fstyle->setSpaceBelow(vg.Anach);
	fstyle->setDropCap(vg.Drop);
	fstyle->setDropCapHeight(vg.DropLin);
	fstyle->setAdjToBaseline(vg.BaseAdj);
	
	gtFont font;
	getFrameFont(&font);
	fstyle->setFont(font);
	fstyle->setName("Default frame style");
}

void gtAction::createParagraphStyle(gtParagraphStyle* pstyle)
{
	if (textFrame->Doc->Vorlagen.size() > 5)
	{
		for (uint i = 5; i < textFrame->Doc->Vorlagen.size(); ++i)
		{
			if (textFrame->Doc->Vorlagen[i].Vname == pstyle->getName())
				return;
		}
	}
	gtFont* font = pstyle->getFont();
	struct StVorL vg;
	vg.Vname = pstyle->getName();
	double linesp;
	if (pstyle->getAutoLineSpacing())
		linesp = getLineSpacing(pstyle->getFont()->getSize());
	else
		linesp = pstyle->getLineSpacing();
	vg.LineSpa = linesp;
	vg.Ausri = pstyle->getAlignment();
	vg.Indent = pstyle->getIndent();
	vg.First = pstyle->getFirstLineIndent();
	vg.Avor = pstyle->getSpaceAbove();
	vg.Anach = pstyle->getSpaceBelow();
	vg.Font = validateFont(font);
	vg.FontSize = font->getSize();
	vg.TabValues.clear();
	QValueList<double> *tabs = pstyle->getTabValues();
	for (uint i = 0; i < tabs->size(); ++i)
	{
		double tmp = (*tabs)[i];
		vg.TabValues.append(tmp);
	}
	vg.Drop = pstyle->hasDropCap();
	vg.DropLin = pstyle->getDropCapHeight();
	vg.FontEffect = font->getEffectsValue();
	vg.FColor = parseColor(font->getColor());
	vg.FShade = font->getShade();
	vg.SColor = parseColor(font->getStrokeColor());
	vg.SShade = font->getStrokeShade();
	vg.BaseAdj = pstyle->isAdjToBaseline();
	textFrame->Doc->Vorlagen.append(vg);
	ScApp->Mpal->Spal->updateFList();
}

void gtAction::removeParagraphStyle(const QString& name)
{
	int index = findParagraphStyle(name);
	if (index != -1)
		removeParagraphStyle(index);
}

void gtAction::removeParagraphStyle(int index)
{
	QValueList<StVorL>::iterator it = ScApp->doc->Vorlagen.at(index);
	ScApp->doc->Vorlagen.remove(it);
}

void gtAction::updateParagraphStyle(const QString& pstyleName, gtParagraphStyle* pstyle)
{
	int pstyleIndex = findParagraphStyle(pstyle->getName());
	if (pstyleIndex != -1)
		updateParagraphStyle(pstyleIndex, pstyle);
}

void gtAction::updateParagraphStyle(int pstyleIndex, gtParagraphStyle* pstyle)
{
	gtFont* font = pstyle->getFont();
	struct StVorL vg;
	vg.Vname = pstyle->getName();
	double linesp;
	if (pstyle->getAutoLineSpacing())
		linesp = getLineSpacing(pstyle->getFont()->getSize());
	else
		linesp = pstyle->getLineSpacing();
	vg.LineSpa = linesp;
	vg.Ausri = pstyle->getAlignment();
	vg.Indent = pstyle->getIndent();
	vg.First = pstyle->getFirstLineIndent();
	vg.Avor = pstyle->getSpaceAbove();
	vg.Anach = pstyle->getSpaceBelow();
	vg.Font = validateFont(font);
	vg.FontSize = font->getSize();
	vg.TabValues.clear();
	QValueList<double> *tabs = pstyle->getTabValues();
	for (uint i = 0; i < tabs->size(); ++i)
	{
		double tmp = (*tabs)[i];
		vg.TabValues.append(tmp);
	}
	vg.Drop = pstyle->hasDropCap();
	vg.DropLin = pstyle->getDropCapHeight();
	vg.FontEffect = font->getEffectsValue();
	vg.FColor = parseColor(font->getColor());
	vg.FShade = font->getShade();
	vg.SColor = parseColor(font->getStrokeColor());
	vg.SShade = font->getStrokeShade();
	vg.BaseAdj = pstyle->isAdjToBaseline();
	ScApp->doc->Vorlagen[pstyleIndex] = vg;
}

QString gtAction::validateFont(gtFont* font)
{
	// Dirty hack for family Times New Roman
	if (font->getFamily() == "Times New")
	{
		font->setFamily("Times New Roman");
		if (font->getWeight() == "Roman")
			font->setWeight("Regular");
	}

	QString useFont = font->getName();
	if ((useFont == NULL) || (useFont == ""))
		useFont = textFrame->IFont;
	else if (ScApp->Prefs.AvailFonts[font->getName()] == 0)
	{
		bool found = false;
		useFont == NULL;
		QString tmpName = findFontName(font);
		if (tmpName != NULL)
		{
			useFont = tmpName;
			found = true;
		}
		if (!found)
		{
			if (font->getSlant() == gtFont::fontSlants[ITALIC])
			{
				gtFont* tmp = new gtFont(*font);
				tmp->setSlant(OBLIQUE);
				tmpName = findFontName(tmp);
				if (tmpName != NULL)
				{
					useFont = tmpName;
					found = true;
				}
				delete tmp;
			}
			else if (font->getSlant() == gtFont::fontSlants[OBLIQUE])
			{
				gtFont* tmp = new gtFont(*font);
				tmp->setSlant(ITALIC);
				tmpName = findFontName(tmp);
				if (tmpName != NULL)
				{
					useFont = tmpName;
					found = true;
				}
				delete tmp;
			}
			if (!found)
			{
				if (!ScApp->Prefs.GFontSub.contains(font->getName()))
				{
					DmF *dia = new DmF(0, useFont, &ScApp->Prefs);
					dia->exec();
					useFont = dia->Ersatz;
					ScApp->Prefs.GFontSub[font->getName()] = useFont;
					delete dia;
				}
				else
					useFont = ScApp->Prefs.GFontSub[font->getName()];
			}
		}
	}

	if(!ScApp->doc->UsedFonts.contains(useFont))
		ScApp->doc->AddFont(useFont, ScApp->Prefs.AvailFonts[useFont]->Font);
	return useFont;
}

QString gtAction::findFontName(gtFont* font)
{
	QString ret = NULL;
	for (uint i = 0; i < static_cast<uint>(gtFont::NAMECOUNT); ++i)
	{
		QString nname = font->getName(i);
		if (ScApp->Prefs.AvailFonts[nname] != 0)
		{
			ret = nname;
			break;
		}
	}
	return ret;
}

double gtAction::getLineSpacing(int fontSize)
{
	return ((fontSize / 10.0) * static_cast<double>(ScApp->doc->AutoLine) / 100) + (fontSize / 10.0);
}

double gtAction::getFrameWidth()
{
	return textFrame->Width;
}

QString gtAction::getFrameName()
{
	return QString(textFrame->AnName);
}

bool gtAction::getUpdateParagraphStyles()
{
	return updateParagraphStyles;
}

void gtAction::setUpdateParagraphStyles(bool newUPS)
{
	updateParagraphStyles = newUPS;
}

bool gtAction::getOverridePStyleFont()
{
	return overridePStyleFont;
}
void gtAction::setOverridePStyleFont(bool newOPSF)
{
	overridePStyleFont = newOPSF;
}

QString gtAction::parseColor(const QString &s)
{
	QString ret = "None";
	if (s == "None")
		return ret; // don't want None to become Black or any color
	bool found = false;
	CListe::Iterator it;
	for (it = ScApp->doc->PageColors.begin(); it != ScApp->doc->PageColors.end(); ++it)
	{
		if (it.key() == s)
		{
			ret = it.key();
			found = true;
		}
	}
	if (!found)
	{
		QColor c;
		if( s.startsWith( "rgb(" ) )
		{
			QString parse = s.stripWhiteSpace();
			QStringList colors = QStringList::split( ',', parse );
			QString r = colors[0].right( ( colors[0].length() - 4 ) );
			QString g = colors[1];
			QString b = colors[2].left( ( colors[2].length() - 1 ) );
			if( r.contains( "%" ) )
			{
				r = r.left( r.length() - 1 );
				r = QString::number( static_cast<int>( ( static_cast<double>( 255 * r.toDouble() ) / 100.0 ) ) );
			}
			if( g.contains( "%" ) )
			{
				g = g.left( g.length() - 1 );
				g = QString::number( static_cast<int>( ( static_cast<double>( 255 * g.toDouble() ) / 100.0 ) ) );
			}
			if( b.contains( "%" ) )
			{
				b = b.left( b.length() - 1 );
				b = QString::number( static_cast<int>( ( static_cast<double>( 255 * b.toDouble() ) / 100.0 ) ) );
			}
			c = QColor(r.toInt(), g.toInt(), b.toInt());
		}
		else
		{
			QString rgbColor = s.stripWhiteSpace();
			if( rgbColor.startsWith( "#" ) )
				c.setNamedColor( rgbColor );
			else
				c = parseColorN( rgbColor );
		}
		found = false;
		for (it = ScApp->doc->PageColors.begin(); it != ScApp->doc->PageColors.end(); ++it)
		{
			if (c == ScApp->doc->PageColors[it.key()].getRGBColor())
			{
				ret = it.key();
				found = true;
			}
		}
		if (!found)
		{
			CMYKColor tmp;
			tmp.fromQColor(c);
			ScApp->doc->PageColors.insert("FromGetText"+c.name(), tmp);
			ScApp->Mpal->Cpal->SetColors(ScApp->doc->PageColors);
			ret = "FromGetText"+c.name();
		}
	}
	return ret;
}

QColor gtAction::parseColorN(const QString &rgbColor)
{
	int r, g, b;
	keywordToRGB( rgbColor, r, g, b );
	return QColor( r, g, b );
}

void gtAction::finalize()
{
	if (ScApp->doc->Trenner->AutoCheck)
		ScApp->doc->Trenner->slotHyphenate(textFrame);
	ScApp->doc->ActPage->update();
	ScApp->slotDocCh();
}

gtAction::~gtAction()
{
	finalize();
}
