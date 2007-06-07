/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "scpageoutput.h"

//Added by qt3to4:
#include <Q3PtrStack.h>
#include <Q3PtrList>
#include <QList>
#include "pageitem.h"
#include "cmsettings.h"
#include "commonstrings.h"
#include "prefsmanager.h"
#include "pageitem_imageframe.h"
#include "pageitem_line.h"
#include "pageitem_pathtext.h"
#include "pageitem_polygon.h"
#include "pageitem_polyline.h"
#include "pageitem_textframe.h"
#include "scfonts.h"
#include "scribus.h"
#include "scimage.h"
#include "util.h"

MarksOptions::MarksOptions(void)
{
	markOffset = 0.0;
	BleedTop = 0.0;
	BleedLeft = 0.0;
	BleedRight = 0.0;
	BleedBottom = 0.0;
	cropMarks = false;
	bleedMarks = false;
	registrationMarks = false;
	colorMarks = false;
	docInfoMarks = false;
}

MarksOptions::MarksOptions(struct PrintOptions& opt)
{
	markOffset = opt.markOffset;
	BleedTop = opt.bleeds.Top;
	BleedLeft = opt.bleeds.Left;
	BleedRight = opt.bleeds.Right;
	BleedBottom = opt.bleeds.Bottom;
	cropMarks = opt.cropMarks;
	bleedMarks = opt.bleedMarks;
	registrationMarks = opt.registrationMarks;
	colorMarks = opt.colorMarks;
	docInfoMarks = true;
}

ScPageOutput::ScPageOutput(ScribusDoc* doc, bool reloadImages, int resolution, bool useProfiles) 
			: m_marksOptions()
{
	m_doc = doc;
	m_reloadImages = reloadImages;
	m_imageRes = resolution;
	m_useProfiles = useProfiles;
}

ScImage::RequestType ScPageOutput::translateImageModeToRequest( ScPainterExBase::ImageMode mode )
{
	ScImage::RequestType value = ScImage::RGBData;
	if ( mode == ScPainterExBase::cmykImages )
		value = ScImage::CMYKData;
	else if ( mode == ScPainterExBase::rgbImages )
		value = ScImage::RGBData;
	else if ( mode == ScPainterExBase::rgbProofImages )
		value = ScImage::RGBProof;
	else if ( mode == ScPainterExBase::rawImages )
		value = ScImage::RawData;
	return value;
}

void ScPageOutput::DrawPage( Page* page, ScPainterExBase* painter)
{
	int clipx = static_cast<int>(page->xOffset());
	int clipy = static_cast<int>(page->yOffset());
	int clipw = qRound(page->width());
	int cliph = qRound(page->height());
	DrawMasterItems(painter, page, QRect(clipx, clipy, clipw, cliph));
	DrawPageItems(painter, page, QRect(clipx, clipy, clipw, cliph));
	DrawMarks(page, painter, m_marksOptions);
}

void ScPageOutput::DrawMasterItems(ScPainterExBase *painter, Page *page, QRect& clip)
{
	Q3PtrStack<PageItem> groupStack;
	Q3PtrStack<PageItem> groupClips;
	if (!page->MPageNam.isEmpty())
	{
		Page* Mp = m_doc->MasterPages.at(m_doc->MasterNames[page->MPageNam]);
		if (page->FromMaster.count() != 0)
		{
			int Lnr;
			struct Layer ll;
			PageItem *currItem;
			ll.isViewable = false;
			ll.LNr = 0;
			Lnr = 0;
			uint layerCount = m_doc->layerCount();
			for (uint la = 0; la < layerCount; ++la)
			{
				Level2Layer(m_doc, &ll, Lnr);
				bool pr = true;
				if ( !ll.isPrintable )
					pr = false;
				if ((ll.isViewable) && (pr))
				{
					uint pageFromMasterCount=page->FromMaster.count();
					for (uint a = 0; a < pageFromMasterCount; ++a)
					{
						currItem = page->FromMaster.at(a);
						if (currItem->LayerNr != ll.LNr)
							continue;
						if ((currItem->OwnPage != -1) && (currItem->OwnPage != static_cast<int>(Mp->pageNr())))
							continue;
						if (!currItem->printEnabled())
							continue;
						if (currItem->isGroupControl)
						{
							painter->save();
							groupClips.push(currItem);
							groupStack.push(currItem->groupsLastItem);
							continue;
						}
						int savedOwnPage = currItem->OwnPage;
						double OldX = currItem->xPos();
						double OldY = currItem->yPos();
						double OldBX = currItem->BoundingX;
						double OldBY = currItem->BoundingY;
						currItem->OwnPage = page->pageNr();
						if (!currItem->ChangedMasterItem)
						{
							currItem->moveBy(-Mp->xOffset() + page->xOffset(), -Mp->yOffset() + page->yOffset());
							currItem->BoundingX = OldBX - Mp->xOffset() + page->xOffset();
							currItem->BoundingY = OldBY - Mp->yOffset() + page->yOffset();
						}
						/*if (evSpon)
							currItem->Dirty = true;*/
						QRect oldR(currItem->getRedrawBounding(1.0));
						if (clip.intersects(oldR))
							DrawItem(currItem, painter, clip);
						currItem->OwnPage = savedOwnPage;
						if (!currItem->ChangedMasterItem)
						{
							currItem->setXPos(OldX);
							currItem->setYPos(OldY);
							currItem->BoundingX = OldBX;
							currItem->BoundingY = OldBY;
						}
						if (groupStack.count() != 0)
						{
							while (currItem == groupStack.top())
							{
								QWMatrix mm;
								PageItem *tmpItem = groupClips.pop();
								FPointArray cl = tmpItem->PoLine.copy();
								mm.translate(tmpItem->xPos(), tmpItem->yPos());
								mm.rotate(tmpItem->rotation());
								cl.map( mm );
								painter->setupPolygon(&cl);
								painter->setClipPath();
								painter->restore();
								groupStack.pop();
							}
						}
					}
					for (uint a = 0; a < pageFromMasterCount; ++a)
					{
						currItem = page->FromMaster.at(a);
						if (currItem->LayerNr != ll.LNr)
							continue;
						if (!currItem->isTableItem)
							continue;
						if ((currItem->OwnPage != -1) && (currItem->OwnPage != static_cast<int>(Mp->pageNr())))
							continue;
						double OldX = currItem->xPos();
						double OldY = currItem->yPos();
						double OldBX = currItem->BoundingX;
						double OldBY = currItem->BoundingY;
						if (!currItem->ChangedMasterItem)
						{
							currItem->setXPos(OldX - Mp->xOffset() + page->xOffset());
							currItem->setYPos(OldY - Mp->yOffset() + page->yOffset());
							currItem->BoundingX = OldBX - Mp->xOffset() + page->xOffset();
							currItem->BoundingY = OldBY - Mp->yOffset() + page->yOffset();
						}
						QRect oldR(currItem->getRedrawBounding(1.0));
						if (clip.intersects(oldR))
						{
							painter->save();
							painter->translate(currItem->xPos(), currItem->yPos());
							painter->rotate(currItem->rotation());
							if (currItem->lineColor() != CommonStrings::None)
							{
								ScColorShade tmp( m_doc->PageColors[currItem->lineColor()], currItem->lineShade());
								if ((currItem->TopLine) || (currItem->RightLine) || (currItem->BottomLine) || (currItem->LeftLine))
								{
									painter->setPen(tmp, currItem->lineWidth(), currItem->PLineArt, Qt::SquareCap, currItem->PLineJoin);
									if (currItem->TopLine)
										painter->drawLine(FPoint(0.0, 0.0), FPoint(currItem->width(), 0.0));
									if (currItem->RightLine)
										painter->drawLine(FPoint(currItem->width(), 0.0), FPoint(currItem->width(), currItem->height()));
									if (currItem->BottomLine)
										painter->drawLine(FPoint(currItem->width(), currItem->height()), FPoint(0.0, currItem->height()));
									if (currItem->LeftLine)
										painter->drawLine(FPoint(0.0, currItem->height()), FPoint(0.0, 0.0));
								}
							}
							painter->restore();
						}
						if (!currItem->ChangedMasterItem)
						{
							currItem->setXPos(OldX);
							currItem->setYPos(OldY);
							currItem->BoundingX = OldBX;
							currItem->BoundingY = OldBY;
						}
					}
				}
				Lnr++;
			}
		}
	}
}

void ScPageOutput::DrawPageItems(ScPainterExBase *painter, Page *page, QRect& clip)
{
	//linkedFramesToShow.clear();
	Q3PtrStack<PageItem> groupStack;
	Q3PtrStack<PageItem> groupClips;
	if (m_doc->Items->count() != 0)
	{
		int Lnr=0;
		struct Layer ll;
		PageItem *currItem;
		ll.isViewable = false;
		ll.LNr = 0;
		uint layerCount = m_doc->layerCount();
		//int docCurrPageNo=static_cast<int>(m_doc->currentPageNumber());
		int docCurrPageNo=static_cast<int>(page->pageNr());
		for (uint la2 = 0; la2 < layerCount; ++la2)
		{
			Level2Layer(m_doc, &ll, Lnr);
			bool pr = true;
			if (!ll.isPrintable)
				pr = false;
			if ((ll.isViewable) && (pr))
			{
				Q3PtrListIterator<PageItem> docItem(*m_doc->Items);
				while ( (currItem = docItem.current()) != 0)
				{
					++docItem;
					if (currItem->LayerNr != ll.LNr)
						continue;
					if (!currItem->printEnabled())
						continue;
					if ((m_doc->masterPageMode()) && ((currItem->OwnPage != -1) && (currItem->OwnPage != docCurrPageNo)))
						continue;
					if (!m_doc->masterPageMode() && !currItem->OnMasterPage.isEmpty())
					{
						if (currItem->OnMasterPage != page->pageName())
							continue;
					}
					if (currItem->isGroupControl)
					{
						painter->save();
						groupClips.push(currItem);
						groupStack.push(currItem->groupsLastItem);
						continue;
					}
					QRect oldR(currItem->getRedrawBounding(1.0));
					if (clip.intersects(oldR))
					{
						DrawItem( currItem, painter, clip );
						if ((currItem->asTextFrame()) && ((currItem->nextInChain() != 0) || (currItem->prevInChain() != 0)))
						{
							PageItem *nextItem = currItem;
							while (nextItem != 0)
							{
								if (nextItem->prevInChain() != 0)
									nextItem = nextItem->prevInChain();
								else
									break;
							}
						}
					}
					if (groupStack.count() != 0)
					{
						while (currItem == groupStack.top())
						{
							QWMatrix mm;
							PageItem *tmpItem = groupClips.pop();
							FPointArray cl = tmpItem->PoLine.copy();
							mm.translate(tmpItem->xPos(), tmpItem->yPos());
							mm.rotate(tmpItem->rotation());
							cl.map( mm );
							painter->setupPolygon(&cl);
							painter->setClipPath();
							painter->restore();
							groupStack.pop();
						}
					}
				}
				Q3PtrListIterator<PageItem> docItem2(*m_doc->Items);
				while ( (currItem = docItem2.current()) != 0 )
				{
					++docItem2;
					if (currItem->LayerNr != ll.LNr)
						continue;
					if (!currItem->isTableItem)
						continue;
					QRect oldR(currItem->getRedrawBounding(1.0));
					if (clip.intersects(oldR))
					{
						painter->save();
						painter->translate(currItem->xPos(), currItem->yPos());
						painter->rotate(currItem->rotation());
						if (currItem->lineColor() != CommonStrings::None)
						{
							ScColorShade tmp( m_doc->PageColors[currItem->lineColor()], currItem->lineShade() );
							if ((currItem->TopLine) || (currItem->RightLine) || (currItem->BottomLine) || (currItem->LeftLine))
							{
								painter->setPen(tmp, currItem->lineWidth(), currItem->PLineArt, Qt::SquareCap, currItem->PLineJoin);
								if (currItem->TopLine)
									painter->drawLine(FPoint(0.0, 0.0), FPoint(currItem->width(), 0.0));
								if (currItem->RightLine)
									painter->drawLine(FPoint(currItem->width(), 0.0), FPoint(currItem->width(), currItem->height()));
								if (currItem->BottomLine)
									painter->drawLine(FPoint(currItem->width(), currItem->height()), FPoint(0.0, currItem->height()));
								if (currItem->LeftLine)
									painter->drawLine(FPoint(0.0, currItem->height()), FPoint(0.0, 0.0));
							}
						}
						painter->restore();
					}
				}
			}
			Lnr++;
		}
	}
}

void ScPageOutput::DrawItem( PageItem* item, ScPainterExBase* painter, QRect& clip )
{
	DrawItem_Pre(item, painter);
	PageItem::ItemType itemType = item->itemType();
	if( itemType == PageItem::ImageFrame )
		DrawItem_ImageFrame( (PageItem_ImageFrame*) item, painter, clip);
	else if( itemType == PageItem::Line )
		DrawItem_Line( (PageItem_Line*) item, painter, clip);
	else if( itemType == PageItem::PathText )
		DrawItem_PathText(  (PageItem_PathText*) item, painter, clip);
	else if( itemType == PageItem::Polygon )
		DrawItem_Polygon( (PageItem_Polygon*) item, painter, clip);
	else if( itemType == PageItem::PolyLine )
		DrawItem_PolyLine( (PageItem_PolyLine*) item, painter, clip);
	else if( itemType == PageItem::TextFrame )
		DrawItem_TextFrame( (PageItem_TextFrame*) item, painter, clip);
	DrawItem_Post(item, painter);
}

void ScPageOutput::DrawItem_Pre( PageItem* item, ScPainterExBase* painter)
{
	painter->save();
	if (!item->isEmbedded)
	{
		painter->translate( item->xPos(), item->yPos());
//		painter->rotate(item->rotation());
	}
	painter->rotate(item->rotation());
	painter->setLineWidth(item->lineWidth());
	if (item->GrType == 8)
	{
		QString pat = item->pattern();
		if ((pat.isEmpty()) || (!m_doc->docPatterns.contains(pat)))
		{
			painter->m_fillGradient = VGradientEx(VGradientEx::linear);
			if (item->fillColor() != CommonStrings::None)
			{
				painter->setBrush(ScColorShade(m_doc->PageColors[item->fillColor()], item->fillShade()));
				painter->setFillMode(ScPainterExBase::Solid);
			}
			else
				painter->setFillMode(ScPainterExBase::None);
		}
		else
		{
			QWMatrix patternTransform;
			ScPattern& pattern = m_doc->docPatterns[item->pattern()];
			double patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation;
			item->patternTransform(patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation);
			patternTransform.translate(patternOffsetX, patternOffsetY);
			patternTransform.rotate(patternRotation);
			patternTransform.scale(pattern.scaleX, pattern.scaleY);
			patternTransform.scale(patternScaleX / 100.0 , patternScaleY / 100.0);
			painter->setPattern(&pattern, patternTransform);
			painter->setFillMode(ScPainterExBase::Pattern);
		}
	}
	else if (item->GrType != 0)
	{
		painter->setFillMode(ScPainterExBase::Gradient);
		painter->m_fillGradient = VGradientEx(item->fill_gradient, *m_doc);
		QWMatrix grm;
		grm.rotate(item->rotation());
		FPointArray gra;
		switch (item->GrType)
		{
			case 1:
			case 2:
			case 3:
			case 4:
			case 6:
				gra.setPoints(2, item->GrStartX, item->GrStartY, item->GrEndX, item->GrEndY);
				gra.map(grm);
				painter->setGradient(VGradientEx::linear, gra.point(0), gra.point(1));
				break;
			case 5:
			case 7:
				gra.setPoints(2, item->GrStartX, item->GrStartY, item->GrEndX, item->GrEndY);
				painter->setGradient(VGradientEx::radial, gra.point(0), gra.point(1), gra.point(0));
				break;
		}
	}
	else
	{
		painter->m_fillGradient = VGradientEx(VGradientEx::linear);
		if (item->fillColor() != CommonStrings::None)
		{
			painter->setBrush( ScColorShade(m_doc->PageColors[item->fillColor()], item->fillShade()) );
			painter->setFillMode(ScPainterExBase::Solid);
		}
		else
			painter->setFillMode(ScPainterExBase::None);
	}
	if (item->lineColor() != CommonStrings::None)
	{
		if ((item->lineWidth() == 0) && !item->asLine())
			painter->setLineWidth(0);
		else
		{
			ScColorShade tmp(m_doc->PageColors[item->lineColor()], item->lineShade());
			painter->setPen( tmp , item->lineWidth(), item->PLineArt, item->PLineEnd, item->PLineJoin);
			if (item->DashValues.count() != 0)
				painter->setDash(item->DashValues, item->DashOffset);
		}
	}
	else
		painter->setLineWidth(0);
	painter->setBrushOpacity(1.0 - item->fillTransparency());
	painter->setPenOpacity(1.0 - item->lineTransparency());
	painter->setFillRule(item->fillRule);
}

void ScPageOutput::DrawItem_Post( PageItem* item, ScPainterExBase* painter )
{
	bool doStroke=true;
	if ( item->itemType() == PageItem::PathText || item->itemType() == PageItem::PolyLine || item->itemType() == PageItem::Line )
		doStroke=false;
	if ((doStroke))
	{
		if (item->lineColor() != CommonStrings::None)
		{
			ScColorShade tmp(m_doc->PageColors[item->lineColor()], item->lineShade());
			painter->setPen(tmp, item->lineWidth(), item->PLineArt, item->PLineEnd, item->PLineJoin);
			if (item->DashValues.count() != 0)
				painter->setDash(item->DashValues, item->DashOffset);
		}
		else
			painter->setLineWidth(0);
		if (!item->isTableItem)
		{
			painter->setupPolygon(&item->PoLine);
			if (item->NamedLStyle.isEmpty())
				painter->strokePath();
			else
			{
				multiLine ml = m_doc->MLineStyles[item->NamedLStyle];
				for (int it = ml.size()-1; it > -1; it--)
				{
					const SingleLine& sl = ml[it];
					if ((sl.Color != CommonStrings::None) && (sl.Width != 0))
					{
						ScColorShade tmp(m_doc->PageColors[sl.Color], sl.Shade);
						painter->setPen(tmp, sl.Width, static_cast<Qt::PenStyle>(sl.Dash),
								static_cast<Qt::PenCapStyle>(sl.LineEnd),
								static_cast<Qt::PenJoinStyle>(sl.LineJoin));
						painter->strokePath();
					}
				}
			}
		}
	}
	if ((!item->isEmbedded))
		double scpInv = 1.0;
//	item->Tinput = false;
	painter->restore();
}

void ScPageOutput::DrawGlyphs(PageItem* item, ScPainterExBase *painter, const CharStyle& style, GlyphLayout& glyphs, QRect& clip)
{
	uint glyph = glyphs.glyph;
	if (glyph == (ScFace::CONTROL_GLYPHS + SpecialChars::NBSPACE.unicode())) // NBSPACE
		glyph = style.font().char2CMap(QChar(' '));
	else if (glyph == (ScFace::CONTROL_GLYPHS + SpecialChars::NBHYPHEN.unicode())) // NBHYPHEN
		glyph = style.font().char2CMap(QChar('-'));
	
	if (glyph >= ScFace::CONTROL_GLYPHS)
	{
		if (glyphs.more)
		{
			painter->translate(glyphs.xadvance, 0);
			DrawGlyphs(item, painter, style, *glyphs.more, clip);
		}
		return;
	}
	
	//if (style.font().canRender(QChar(glyph)))
	{
		QWMatrix chma, chma2, chma3, chma4, chma5, chma6;
		chma.scale(glyphs.scaleH * style.fontSize() / 100.00, glyphs.scaleV * style.fontSize() / 100.0);
//		qDebug(QString("glyphscale: %1 %2").arg(glyphs.scaleH).arg(glyphs.scaleV));
		FPointArray gly = style.font().glyphOutline(glyph);
		// Do underlining first so you can get typographically correct
		// underlines when drawing a white outline
		if ((style.effects() & ScStyle_Underline) || ((style.effects() & ScStyle_UnderlineWords) && (glyph != style.font().char2CMap(QChar(' ')))))
		{
			double st, lw;
			if ((style.underlineOffset() != -1) || (style.underlineWidth() != -1))
			{
				if (style.underlineOffset() != -1)
					st = (style.underlineOffset() / 1000.0) * (style.font().descent(style.fontSize() / 10.0));
				else
					st = style.font().underlinePos(style.fontSize() / 10.0);
				if (style.underlineWidth() != -1)
					lw = (style.underlineWidth() / 1000.0) * (style.fontSize() / 10.0);
				else
					lw = qMax(style.font().strokeWidth(style.fontSize() / 10.0), 1.0);
			}
			else
			{
				st = style.font().underlinePos(style.fontSize() / 10.0);
				lw = qMax(style.font().strokeWidth(style.fontSize() / 10.0), 1.0);
			}
			if (style.baselineOffset() != 0)
				st += (style.fontSize() / 10.0) * glyphs.scaleV * (style.baselineOffset() / 1000.0);
			ScColorShade tmpPen = painter->pen();
			painter->setPen(painter->brush());
			painter->setLineWidth(lw);
			if (style.effects() & ScStyle_Subscript)
				painter->drawLine(FPoint(glyphs.xoffset, glyphs.yoffset - st), FPoint(glyphs.xoffset + glyphs.xadvance, glyphs.yoffset - st));
			else
				painter->drawLine(FPoint(glyphs.xoffset, -st), FPoint(glyphs.xoffset + glyphs.xadvance, -st));
			painter->setPen(tmpPen);
		}
		if (gly.size() > 3)
		{
			painter->save();
			painter->translate(glyphs.xoffset, glyphs.yoffset - ((style.fontSize() / 10.0) * glyphs.scaleV));
			if (item->reversed())
			{
				painter->scale(-1, 1);
				painter->translate(-glyphs.xadvance, 0);
			}
			if (style.baselineOffset() != 0)
				painter->translate(0, -(style.fontSize() / 10.0) * (style.baselineOffset() / 1000.0));
			double glxSc = glyphs.scaleH * style.fontSize() / 100.00;
			double glySc = glyphs.scaleV * style.fontSize() / 100.0;
			painter->scale(glxSc, glySc);
			painter->setFillMode(ScPainterExBase::Solid);
			bool fr = painter->fillRule();
			painter->setFillRule(false);
			painter->setupTextPolygon(&gly);
			if (glyph == 0)
			{
				ScColorShade tmp(PrefsManager::instance()->appPrefs.DControlCharColor, 100);
				painter->setPen(tmp, 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
				painter->setLineWidth(style.fontSize() * glyphs.scaleV * style.outlineWidth() * 2 / 10000.0);
				painter->strokePath();
			}
			else if ((style.font().isStroked()) && ((style.fontSize() * glyphs.scaleV * style.outlineWidth() / 10000.0) != 0))
			{
				ScColorShade tmp = painter->brush();
				painter->setPen(tmp, 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
				painter->setLineWidth(style.fontSize() * glyphs.scaleV * style.outlineWidth() / 10000.0);
				painter->strokePath();
			}
			else
			{
				if ((style.effects() & ScStyle_Shadowed) && (style.strokeColor() != CommonStrings::None))
				{
					painter->save();
					painter->translate((style.fontSize() * glyphs.scaleH * style.shadowXOffset() / 10000.0) / glxSc, -(style.fontSize() * glyphs.scaleV * style.shadowYOffset() / 10000.0) / glySc);
					ScColorShade tmp = painter->brush();
					painter->setBrush(painter->pen());
					painter->setupTextPolygon(&gly);
					FillPath(item, painter, clip);
					painter->setBrush(tmp);
					painter->restore();
					painter->setupTextPolygon(&gly);
				}
				if (style.fillColor() != CommonStrings::None)
					FillPath(item, painter, clip);
				if ((style.effects() & ScStyle_Outline) && (style.strokeColor() != CommonStrings::None) && ((style.fontSize() * glyphs.scaleV * style.outlineWidth() / 10000.0) != 0))
				{
					painter->setLineWidth((style.fontSize() * glyphs.scaleV * style.outlineWidth() / 10000.0) / glySc);
					painter->strokePath();
				}
			}
			painter->setFillRule(fr);
			painter->restore();
		}
		if (style.effects() & ScStyle_Strikethrough)
		{
			double st, lw;
			if ((style.strikethruOffset() != -1) || (style.strikethruWidth() != -1))
			{
				if (style.strikethruOffset() != -1)
					st = (style.strikethruOffset() / 1000.0) * (style.font().ascent(style.fontSize() / 10.0));
				else
					st = style.font().strikeoutPos(style.fontSize() / 10.0);
				if (style.strikethruWidth() != -1)
					lw = (style.strikethruWidth() / 1000.0) * (style.fontSize() / 10.0);
				else
					lw = qMax(style.font().strokeWidth(style.fontSize() / 10.0), 1.0);
			}
			else
			{
				st = style.font().strikeoutPos(style.fontSize() / 10.0);
				lw = qMax(style.font().strokeWidth(style.fontSize() / 10.0), 1.0);
			}
			if (style.baselineOffset() != 0)
				st += (style.fontSize() / 10.0) * glyphs.scaleV * (style.baselineOffset() / 1000.0);
			painter->setPen(painter->brush());
			painter->setLineWidth(lw);
			painter->drawLine(FPoint(glyphs.xoffset, glyphs.yoffset - st), FPoint(glyphs.xoffset + glyphs.xadvance, glyphs.yoffset - st));
		}
	}
	/*else
	{
		painter->setLineWidth(1);
		painter->setPen(ScColorShade(Qt::red, 100));
		painter->setBrush(ScColorShade(Qt::red, 100));
		painter->setFillMode(1);
		painter->drawRect(glyphs.xoffset, glyphs.yoffset - (style.fontSize() / 10.0) * glyphs.scaleV , (style.fontSize() / 10.0) * glyphs.scaleH, (style.fontSize() / 10.0) * glyphs.scaleV);
	}*/
	if (glyphs.more)
	{
		painter->translate(glyphs.xadvance, 0);
		DrawGlyphs(item, painter, style, *glyphs.more, clip);
	}
}

void ScPageOutput::DrawItem_Embedded( PageItem* item, ScPainterExBase *p, QRect& clip, const CharStyle& style, PageItem* cembedded)
{
	if (!cembedded)
		return;
	Q3PtrList<PageItem> emG;
	Q3PtrStack<PageItem> groupStack;
	emG.clear();
	emG.append(cembedded);
	if (cembedded->Groups.count() != 0)
	{
		for (uint ga=0; ga < m_doc->FrameItems.count(); ++ga)
		{
			if (m_doc->FrameItems.at(ga)->Groups.count() != 0)
			{
				if (m_doc->FrameItems.at(ga)->Groups.top() == cembedded->Groups.top())
				{
					if (m_doc->FrameItems.at(ga)->ItemNr != cembedded->ItemNr)
					{
						if (emG.find(m_doc->FrameItems.at(ga)) == -1)
							emG.append(m_doc->FrameItems.at(ga));
					}
				}
			}
		}
	}
	for (uint em = 0; em < emG.count(); ++em)
	{
		PageItem* embedded = emG.at(em);
		p->save();
		embedded->setXPos( item->xPos() + embedded->gXpos );
		embedded->setYPos( item->yPos() - (embedded->gHeight * (style.scaleV() / 1000.0)) + embedded->gYpos );
		p->translate((embedded->gXpos * (style.scaleH() / 1000.0)), ( - (embedded->gHeight * (style.scaleV() / 1000.0)) + embedded->gYpos * (style.scaleV() / 1000.0)));
		if (style.baselineOffset() != 0)
		{
			p->translate(0, -embedded->gHeight * (style.baselineOffset() / 1000.0));
			embedded->setYPos( embedded->yPos() - embedded->gHeight * (style.baselineOffset() / 1000.0) );
		}
		p->scale(style.scaleH() / 1000.0, style.scaleV() / 1000.0);
		if (embedded->isGroupControl)
		{
			p->restore();
			p->save();
			FPointArray cl = embedded->PoLine.copy();
			QWMatrix mm;
			mm.translate(embedded->xPos() - item->xPos(), embedded->yPos() - item->yPos());
			mm.rotate(embedded->rotation());
			cl.map( mm );
			groupStack.push(embedded->groupsLastItem);
			continue;
		}
		double pws = embedded->m_lineWidth;
		DrawItem_Pre(embedded, p);
		switch(embedded->itemType())
		{
			case PageItem::ImageFrame:
			case PageItem::TextFrame:
			case PageItem::Polygon:
			case PageItem::PathText:
				DrawItem(embedded, p, clip);
				break;
			case PageItem::Line:
			case PageItem::PolyLine:
				embedded->m_lineWidth = pws * qMin(style.scaleH() / 1000.0, style.scaleV() / 1000.0);
				DrawItem(embedded, p, clip);
				break;
			default:
				break;
		}
		embedded->m_lineWidth = pws * qMin(style.scaleH() / 1000.0, style.scaleV() / 1000.0);
		DrawItem_Post(embedded, p);
		p->restore();
		if (groupStack.count() != 0)
		{
			while (embedded == groupStack.top())
			{
				p->restore();
				groupStack.pop();
			}
		}
		embedded->m_lineWidth = pws;
	}
}

void ScPageOutput::DrawPattern( PageItem* item, ScPainterExBase* painter, QRect& clip)
{
	double x1, x2, y1, y2;
	ScPattern& pattern = m_doc->docPatterns[item->pattern()];
	double patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation;
	item->patternTransform(patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation);

	// Compute pattern tansformation matrix and its inverse for converting pattern coordinates
	// to pageitem coordinates 
	QWMatrix matrix, invMat;
	matrix.translate(patternOffsetX, patternOffsetY);
	matrix.rotate(patternRotation);
	matrix.scale(pattern.scaleX, pattern.scaleY);
	matrix.scale(patternScaleX / 100.0 , patternScaleY / 100.0);
	invMat.scale((patternScaleX != 0) ? (100 /patternScaleX) : 1.0, (patternScaleY != 0) ? (100 /patternScaleY) : 1.0);
	invMat.scale((pattern.scaleX != 0) ? (1 /pattern.scaleX) : 1.0, (pattern.scaleY != 0) ? (1 /pattern.scaleY) : 1.0);
	invMat.rotate(-patternRotation);
	invMat.translate(-patternOffsetX, -patternOffsetY);

	// Compute bounding box in which pattern item will be drawn
	double width  = item->width();
	double height = item->height();
	double rot    = patternRotation - floor(patternRotation / 90) * 90;
	double ctheta = cos(rot * M_PI / 180);
	double stheta = sin(rot * M_PI / 180);
	QRect itemRect(0, 0, item->width(), item->height());
	QPoint pa( width * stheta * stheta, -width * stheta * ctheta );
	QPoint pb( width + height * ctheta * stheta, height * stheta * stheta );
	QPoint pc( -height * ctheta * stheta, height * ctheta * ctheta );
	QPoint pd( width * ctheta * ctheta, height + width * ctheta * stheta );
	QPoint ipa = invMat.map(pa), ipb = invMat.map(pb);
	QPoint ipc = invMat.map(pc), ipd = invMat.map(pd);

	painter->save();
	if (item->imageClip.size() != 0)
	{
		painter->setupPolygon(&item->imageClip);
		painter->setClipPath();
	}
	painter->setupPolygon(&item->PoLine);
	painter->setClipPath();
	for (uint index = 0; index < pattern.items.count(); index++)
	{
		QRect itRect;
		PageItem* it = pattern.items.at(index);
		if (it->isGroupControl)
			continue;

		painter->save();
		painter->translate(patternOffsetX, patternOffsetY);
		painter->rotate(patternRotation);
		painter->scale(pattern.scaleX, pattern.scaleY);
		painter->scale(patternScaleX / 100.0, patternScaleY / 100.0);

		double patWidth  = (pattern.width != 0.0) ? pattern.width : 1.0;
		double patHeight = (pattern.height != 0.0) ? pattern.height : 1.0;
		double kxa = (ipa.x() - it->gXpos) / patWidth;
		double kxb = (ipb.x() - it->gXpos) / patWidth;
		double kxc = (ipc.x() - it->gXpos) / patWidth;
		double kxd = (ipd.x() - it->gXpos) / patWidth;
		double kya = (ipa.y() - it->gYpos) / patHeight;
		double kyb = (ipb.y() - it->gYpos) / patHeight;
		double kyc = (ipc.y() - it->gYpos) / patHeight;
		double kyd = (ipd.y() - it->gYpos) / patHeight;
		int kxMin = floor( qMin(qMin(kxa, kxb), qMin(kxc, kxd)) );
		int kxMax = ceil ( qMax(qMax(kxa, kxb), qMax(kxc, kxd)) );
		int kyMin = floor( qMin(qMin(kya, kyb), qMin(kyc, kyd)) );
		int kyMax = ceil ( qMax(qMax(kya, kyb), qMax(kyc, kyd)) );

		double itx = it->xPos();
		double ity = it->yPos();
		double itPosX = it->gXpos, itPosY = it->gYpos;
		for ( int kx = kxMin; kx <= kxMax; kx++ )
		{
			for ( int ky = kyMin; ky <= kyMax; ky++ )
			{
				itPosX = it->gXpos + kx * pattern.width;
				itPosY = it->gYpos + ky * pattern.height;
				it->setXYPos(itPosX, itPosY);
				it->getBoundingRect(&x1, &y1, &x2, &y2);
				itRect.setCoords(x1, y1, x2, y2);
				itRect = matrix.mapRect( itRect );
				if ( itRect.intersects(itemRect) )
					DrawItem(it, painter, clip);
			}
		}
		it->setXYPos(itx, ity);
		painter->restore();
	}
	painter->restore();
}

void ScPageOutput::DrawItem_ImageFrame( PageItem_ImageFrame* item, ScPainterExBase* painter, QRect& clip  )
{
	ScPainterExBase::ImageMode mode = ScPainterExBase::rgbImages;
	if ((item->fillColor() != CommonStrings::None) || (item->GrType != 0))
	{
		painter->setupPolygon(&item->PoLine);
		FillPath(item, painter, clip);
	}
	if (item->Pfile.isEmpty())
	{
		painter->setPen( ScColorShade(Qt::black, 100), 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
		painter->drawLine(FPoint(0, 0), FPoint(item->width(), item->height()));
		painter->drawLine(FPoint(0, item->height()), FPoint(item->width(), 0));
	}
	else
	{
		if ((!item->imageShown()) || (!item->PicAvail))
		{
			painter->setPen( ScColorShade(Qt::red, 100), 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
			painter->drawLine(FPoint(0, 0), FPoint(item->width(), item->height()));
			painter->drawLine(FPoint(0, item->height()), FPoint(item->width(), 0));
		}
		else
		{
			ScImage scImg;
			ScImage* pImage = NULL;
			double imScaleX = item->imageXScale();
			double imScaleY = item->imageYScale();
			if( m_reloadImages )
			{
				bool dummy;
				bool useCmyk = false;
				ScPainterExBase::ImageMode imageMode = painter->imageMode();
				if ( imageMode == ScPainterExBase::cmykImages )
					useCmyk = true;
				QFileInfo fInfo(item->Pfile);
				QString ext = fInfo.extension(false);
				CMSettings cmsSettings(item->doc(), item->IProfile, item->IRender);
				scImg.imgInfo.valid = false;
				scImg.imgInfo.clipPath = "";
				scImg.imgInfo.PDSpathData.clear();
				scImg.imgInfo.layerInfo.clear();
				scImg.imgInfo.RequestProps = item->pixm.imgInfo.RequestProps;
				scImg.imgInfo.isRequest = item->pixm.imgInfo.isRequest;
				scImg.LoadPicture(item->Pfile, cmsSettings, item->UseEmbedded, m_useProfiles, translateImageModeToRequest(imageMode), m_imageRes, &dummy);
				if( ext == "eps" || ext == "epsi" || ext == "pdf" || ext == "ps" )
				{
					imScaleX *= (72.0 / (double) m_imageRes);
					imScaleY *= (72.0 / (double) m_imageRes);
				}
				scImg.applyEffect(item->effectsInUse, m_doc->PageColors, useCmyk);
				mode = imageMode;
				pImage = &scImg;
			}
			else
				pImage = &item->pixm;

			painter->save();
			if (item->imageClip.size() != 0)
			{
				painter->setupPolygon(&item->imageClip);
				painter->setClipPath();
			}
			painter->setupPolygon(&item->PoLine);
			painter->setClipPath();
			if (item->imageFlippedH())
			{
				painter->translate(item->width(), 0);
				painter->scale(-1, 1);
			}
			if (item->imageFlippedV())
			{
				painter->translate(0, item->height());
				painter->scale(1, -1);
			}
			painter->translate(item->imageXOffset() * item->imageXScale(), item->imageYOffset() * item->imageYScale());
			//painter->translate(item->LocalX * imScaleX * scale, item->LocalY * imScaleY * scale); ??
			painter->scale( imScaleX, imScaleY );
			if (pImage->imgInfo.lowResType != 0)
				painter->scale(pImage->imgInfo.lowResScale, pImage->imgInfo.lowResScale);
			painter->drawImage(pImage, mode);
			painter->restore();
		}
	}
}

void ScPageOutput::DrawItem_Line( PageItem_Line* item, ScPainterExBase* painter, QRect& clip )
{
 int startArrowIndex;
 int endArrowIndex;

	startArrowIndex = item->startArrowIndex();
	endArrowIndex = item->endArrowIndex();

	if (item->NamedLStyle.isEmpty())
		painter->drawLine(FPoint(0, 0), FPoint(item->width(), 0));
	else
	{
		multiLine ml = m_doc->MLineStyles[item->NamedLStyle];
		for (int it = ml.size()-1; it > -1; it--)
		{
			const SingleLine& sl = ml[it];
			if ((sl.Color != CommonStrings::None) && (sl.Width != 0))
			{
				ScColorShade tmp(m_doc->PageColors[sl.Color], sl.Shade);
				painter->setPen(tmp, sl.Width, static_cast<Qt::PenStyle>(sl.Dash),
						static_cast<Qt::PenCapStyle>(sl.LineEnd),
						static_cast<Qt::PenJoinStyle>(sl.LineJoin));
				painter->drawLine(FPoint(0, 0), FPoint(item->width(), 0));
			}
		}
	}
	if (startArrowIndex != 0)
	{
		QWMatrix arrowTrans;
		FPointArray arrow = m_doc->arrowStyles.at(startArrowIndex - 1).points.copy();
		arrowTrans.translate( 0, 0 );
		arrowTrans.scale( item->lineWidth(), item->lineWidth());
		arrowTrans.scale( -1 , 1 );
		arrow.map( arrowTrans );
		painter->setBrush( painter->pen() );
		painter->setBrushOpacity( 1.0 - item->lineTransparency() );
		painter->setLineWidth( 0 );
		painter->setFillMode(ScPainterExBase::Solid);
		painter->setupPolygon( &arrow );
		FillPath(item, painter, clip);
	}
	if (endArrowIndex != 0)
	{
		QWMatrix arrowTrans;
		FPointArray arrow = m_doc->arrowStyles.at(endArrowIndex-1).points.copy();
		arrowTrans.translate( item->width(), 0 );
		arrowTrans.scale( item->lineWidth(), item->lineWidth());
		arrow.map( arrowTrans );
		painter->setBrush( painter->pen() );
		painter->setBrushOpacity( 1.0 - item->lineTransparency() );
		painter->setLineWidth( 0 );
		painter->setFillMode( ScPainterExBase::Solid );
		painter->setupPolygon( &arrow );
		FillPath(item, painter, clip);
	}
}

void ScPageOutput::DrawItem_PathText( PageItem_PathText* item, ScPainterExBase* painter, QRect& clip )
{
	int a;
	int chs;
	QString chstr, chstr2, chstr3;
	ScText *hl;
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
	double CurX = item->textToFrameDistLeft(); // item->CurX = item->textToFrameDistLeft()
	double CurY = 0;
	if (item->lineColor() != CommonStrings::None && item->PoShow)
	{
		painter->setupPolygon(&item->PoLine, false);
		painter->strokePath();
	}
	else if (item->NamedLStyle.isEmpty())
		painter->drawLine(FPoint(0, 0), FPoint(item->width(), 0));
	else
	{
		multiLine ml = m_doc->MLineStyles[item->NamedLStyle];
		for (int it = ml.size() - 1; it > -1; it--)
		{
			const SingleLine& sl = ml[it];
			if ((sl.Color != CommonStrings::None) && (sl.Width != 0))
			{
				ScColorShade tmp(m_doc->PageColors[sl.Color], sl.Shade);
				painter->setPen(tmp, sl.Width,  static_cast<Qt::PenStyle>(sl.Dash), 
						 static_cast<Qt::PenCapStyle>(sl.LineEnd), 
						 static_cast<Qt::PenJoinStyle>(sl.LineJoin));
				painter->drawLine(FPoint(0, 0), FPoint(item->width(), 0));
			}
		}
	}
	if (item->itemText.length() != 0)
		CurX += item->itemText.item(0)->fontSize() * item->itemText.item(0)->tracking() / 10000.0;
	segLen = item->PoLine.lenPathSeg(seg);
	for (a = 0; a < item->itemText.length(); ++a)
	{
		CurY = 0;
		hl = item->itemText.item(a);
		chstr = hl->ch;
		if (chstr[0] == SpecialChars::PAGENUMBER || chstr[0] == SpecialChars::PARSEP
			|| chstr[0] == SpecialChars::TAB || chstr == SpecialChars::LINEBREAK)
			continue;
		chs = hl->fontSize();
		if (a < item->itemText.length()-1)
			chstr += item->itemText.text(a+1, 1);
		hl->glyph.yadvance = 0;
		item->layoutGlyphs(item->itemText.charStyle(a), chstr, hl->glyph);
		hl->glyph.shrink();
		dx = hl->glyph.wide() / 2.0;
		CurX += dx;
		ext = false;
		while ( (seg < item->PoLine.size()-3) && (CurX > fsx + segLen))
		{
			fsx += segLen;
			seg += 4;
			if (seg > item->PoLine.size()-3)
				break;
			segLen = item->PoLine.lenPathSeg(seg);
			ext = true;
		}
		if (seg > item->PoLine.size()-3)
			break;
		if (CurX > fsx + segLen)
			break;
		if (ext)
		{
			sp = 0;
			distCurX = item->PoLine.lenPathDist(seg, 0, sp);
			while (distCurX <= ((CurX - oCurX) - (fsx - oCurX)))
			{
				sp += 0.001;
				distCurX = item->PoLine.lenPathDist(seg, 0, sp);
			}
			item->PoLine.pointTangentNormalAt(seg, sp, &point, &tangent, &normal );
			CurX = (CurX - (CurX - fsx)) + distCurX;
			oldSp = sp;
			ext = false;
		}
		else
		{
			if( seg < item->PoLine.size()-3 )
			{
				if (CurX > fsx + segLen)
					break;
				distCurX = item->PoLine.lenPathDist(seg, oldSp, sp);
				while (distCurX <= (CurX - oCurX))
				{
					sp += 0.001;
					if (sp >= 1.0)
					{
						sp = 0.9999;
						break;
					}
					distCurX = item->PoLine.lenPathDist(seg, oldSp, sp);
				}
				item->PoLine.pointTangentNormalAt(seg, sp, &point, &tangent, &normal );
				CurX = oCurX + distCurX;
				oldSp = sp;
			}
			else
				break;
		}
		hl->glyph.xoffset = point.x();
		hl->glyph.yoffset = point.y();
		hl->PtransX = tangent.x();
		hl->PtransY = tangent.y();
		hl->PRot = dx;
		QWMatrix trafo = QWMatrix( 1, 0, 0, -1, -dx, 0 );
		if (item->textPathFlipped)
			trafo *= QWMatrix(1, 0, 0, -1, 0, 0);
		if (item->textPathType == 0)
			trafo *= QWMatrix( tangent.x(), tangent.y(), tangent.y(), -tangent.x(), point.x(), point.y() ); // ID's Rainbow mode
		else if (item->textPathType == 1)
			trafo *= QWMatrix( 1, 0, 0, -1, point.x(), point.y() ); // ID's Stair Step mode
		else if (item->textPathType == 2)
		{
			double a = 1;
			if (tangent.x() < 0)
				a = -1;
			if (fabs(tangent.x()) > 0.1)
				trafo *= QWMatrix( a, (tangent.y() / tangent.x()) * a, 0, -1, point.x(), point.y() ); // ID's Skew mode
			else
				trafo *= QWMatrix( a, 4 * a, 0, -1, point.x(), point.y() );
		}
		QWMatrix sca = painter->worldMatrix();
		trafo *= sca;
		painter->save();
		QWMatrix savWM = painter->worldMatrix();
		painter->setWorldMatrix(trafo);
		DrawGlyphs(item, painter, item->itemText.charStyle(a), hl->glyph, clip);
		painter->setWorldMatrix(savWM);
		painter->restore();
		//item->MaxChars = a+1;
		oCurX = CurX;
		CurX -= dx;
		CurX += hl->glyph.wide() + hl->fontSize() * hl->tracking() / 10000.0;
		first = false;
	}
}

void ScPageOutput::DrawItem_Polygon ( PageItem_Polygon* item , ScPainterExBase* painter, QRect& clip )
{
	painter->setupPolygon(&item->PoLine);
	FillPath(item, painter, clip);
}

void ScPageOutput::DrawItem_PolyLine( PageItem_PolyLine* item, ScPainterExBase* painter, QRect& clip )
{
 int startArrowIndex;
 int endArrowIndex;

	startArrowIndex = item->startArrowIndex();
	endArrowIndex = item->endArrowIndex();

	if (item->PoLine.size()>=4)
	{
		if ((item->fillColor() != CommonStrings::None) || (item->GrType != 0))
		{
			FPointArray cli;
			FPoint Start;
			bool firstp = true;
			for (uint n = 0; n < item->PoLine.size()-3; n += 4)
			{
				if (firstp)
				{
					Start = item->PoLine.point(n);
					firstp = false;
				}
				if (item->PoLine.point(n).x() > 900000)
				{
					cli.addPoint(item->PoLine.point(n-2));
					cli.addPoint(item->PoLine.point(n-2));
					cli.addPoint(Start);
					cli.addPoint(Start);
					cli.setMarker();
					firstp = true;
					continue;
				}
				cli.addPoint(item->PoLine.point(n));
				cli.addPoint(item->PoLine.point(n+1));
				cli.addPoint(item->PoLine.point(n+2));
				cli.addPoint(item->PoLine.point(n+3));
			}
			if (cli.size() > 2)
			{
				FPoint l1 = cli.point(cli.size()-2);
				cli.addPoint(l1);
				cli.addPoint(l1);
				cli.addPoint(Start);
				cli.addPoint(Start);
			}
			painter->setupPolygon(&cli);
			FillPath(item, painter, clip);
		}
		painter->setupPolygon(&item->PoLine, false);
		if (item->NamedLStyle.isEmpty())
			painter->strokePath();
		else
		{
			multiLine ml = m_doc->MLineStyles[item->NamedLStyle];
			for (int it = ml.size()-1; it > -1; it--)
			{
				const SingleLine& sl = ml[it];
				if ((sl.Color != CommonStrings::None) && (sl.Width != 0))
				{
					ScColorShade tmp(m_doc->PageColors[sl.Color], sl.Shade);
					painter->setPen(tmp, sl.Width, static_cast<Qt::PenStyle>(sl.Dash),
							static_cast<Qt::PenCapStyle>(sl.LineEnd),
							static_cast<Qt::PenJoinStyle>(sl.LineJoin));
					painter->strokePath();
				}
			}
		}
		if (startArrowIndex != 0)
		{
			FPoint Start = item->PoLine.point(0);
			for (uint xx = 1; xx < item->PoLine.size(); xx += 2)
			{
				FPoint Vector = item->PoLine.point(xx);
				if ((Start.x() != Vector.x()) || (Start.y() != Vector.y()))
				{
					double r = atan2(Start.y()-Vector.y(),Start.x()-Vector.x())*(180.0/M_PI);
					QWMatrix arrowTrans;
					FPointArray arrow = m_doc->arrowStyles.at(startArrowIndex-1).points.copy();
					arrowTrans.translate(Start.x(), Start.y());
					arrowTrans.rotate(r);
					arrowTrans.scale(item->lineWidth(), item->lineWidth());
					arrow.map(arrowTrans);
					painter->setBrush(painter->pen());
					painter->setBrushOpacity(1.0 - item->lineTransparency());
					painter->setLineWidth(0);
					painter->setFillMode(ScPainterExBase::Solid);
					painter->setupPolygon(&arrow);
					FillPath(item, painter, clip);
					break;
				}
			}
		}
		if (endArrowIndex != 0)
		{
			FPoint End = item->PoLine.point(item->PoLine.size()-2);
			for (uint xx = item->PoLine.size()-1; xx > 0; xx -= 2)
			{
				FPoint Vector = item->PoLine.point(xx);
				if ((End.x() != Vector.x()) || (End.y() != Vector.y()))
				{
					double r = atan2(End.y()-Vector.y(),End.x()-Vector.x())*(180.0/M_PI);
					QWMatrix arrowTrans;
					FPointArray arrow = m_doc->arrowStyles.at(endArrowIndex-1).points.copy();
					arrowTrans.translate(End.x(), End.y());
					arrowTrans.rotate(r);
					arrowTrans.scale( item->lineWidth(), item->lineWidth() );
					arrow.map(arrowTrans);
					painter->setBrush(painter->pen());
					painter->setBrushOpacity(1.0 - item->lineTransparency());
					painter->setLineWidth(0);
					painter->setFillMode(ScPainterExBase::Solid);
					painter->setupPolygon(&arrow);
					FillPath(item, painter, clip);
					break;
				}
			}
		}
	}
}

void ScPageOutput::DrawItem_TextFrame( PageItem_TextFrame* item, ScPainterExBase* painter, QRect& clip )
{
	QWMatrix wm;
	QPoint pt1, pt2;
	FPoint ColBound;
	QRegion cm;
	int a;
	double lineCorr;
	QString chstr, chstr2, chstr3;
	ScText *hl;
	double desc, asce, tabDist;
	
	QRect e2;
	painter->save();
	if (item->isEmbedded)
		e2 = clip;
	else
	{
		e2 = QRect(qRound(clip.x() + m_doc->minCanvasCoordinate.x()), qRound(clip.y() + m_doc->minCanvasCoordinate.y()), qRound(clip.width()), qRound(clip.height()));
		wm.translate(item->xPos(), item->yPos());
	}
	wm.rotate(item->rotation());
	if ((item->fillColor() != CommonStrings::None) || (item->GrType != 0))
	{
		painter->setupPolygon(&item->PoLine);
		FillPath(item, painter, clip);
	}
	if (item->lineColor() != CommonStrings::None)
		lineCorr = item->lineWidth() / 2.0;
	else
		lineCorr = 0;
	if ((item->isAnnotation()) && (item->annotation().Type() == 2) && (!item->Pfile.isEmpty()) && (item->PicAvail) && (item->imageShown()) && (item->annotation().UseIcons()))
	{
		painter->save();
		painter->setupPolygon(&item->PoLine);
		painter->setClipPath();
		painter->scale(item->imageXScale(), item->imageYScale());
		painter->translate(static_cast<int>(item->imageXOffset() * item->imageXScale()), static_cast<int>(item->imageYOffset()  * item->imageYScale()));
		if (!item->pixm.qImage().isNull())
			painter->drawImage(&item->pixm, ScPainterExBase::rgbImages);
		painter->restore();
	}
	if ((item->itemText.length() != 0))
	{
		if (item->imageFlippedH())
		{
			painter->translate(item->width(), 0);
			painter->scale(-1, 1);
		}
		if (item->imageFlippedV())
		{
			painter->translate(0, item->height());
			painter->scale(1, -1);
		}
		uint tabCc = 0;
		for (uint ll=0; ll < item->itemText.lines(); ++ll)
		{
			LineSpec ls = item->itemText.line(ll);
			tabDist = ls.x;
			double CurX = ls.x;
			for (a = ls.firstItem; a <= ls.lastItem; ++a)
			{
				hl = item->itemText.item(a);
				const CharStyle& charStyle = item->itemText.charStyle(a);
				const ParagraphStyle& style = item->itemText.paragraphStyle(a);
				double chs = charStyle.fontSize() * hl->glyph.scaleV;
				if (charStyle.effects() & ScStyle_StartOfLine)
					tabCc = 0;
				chstr = hl->ch;
				if (charStyle.fillColor() != CommonStrings::None)
				{
					ScColorShade tmp(m_doc->PageColors[charStyle.fillColor()], hl->fillShade());
					painter->setBrush(tmp);
				}
				if (charStyle.strokeColor() != CommonStrings::None)
				{
					ScColorShade tmp(m_doc->PageColors[charStyle.strokeColor()], hl->strokeShade());
					painter->setPen(tmp, 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
				}
				if (charStyle.effects() & ScStyle_DropCap)
				{
					const ParagraphStyle& style(item->itemText.paragraphStyle(a));
					if (style.lineSpacingMode() == ParagraphStyle::BaselineGridLineSpacing)
						chs = qRound(10 * ((m_doc->typographicSettings.valueBaseGrid * (style.dropCapLines()-1) + (charStyle.font().ascent(style.charStyle().fontSize() / 10.0))) / charStyle.font().realCharHeight(chstr[0], 10)));
					else
					{
						if (style.lineSpacingMode() == ParagraphStyle::FixedLineSpacing)
							chs = qRound(10 * ((style.lineSpacing() * (style.dropCapLines()-1)+(charStyle.font().ascent(style.charStyle().fontSize() / 10.0))) / charStyle.font().realCharHeight(chstr[0], 10)));
						else
						{
							double currasce = charStyle.font().height(style.charStyle().fontSize() / 10.0);
							chs = qRound(10 * ((currasce * (style.dropCapLines()-1)+(charStyle.font().ascent(style.charStyle().fontSize() / 10.0))) / charStyle.font().realCharHeight(chstr[0], 10)));
						}
					}
				}
				if (chstr[0] == SpecialChars::TAB)
					tabCc++;
				//if (!m_doc->RePos)
				{
					double xcoZli = CurX + hl->glyph.xoffset;
					desc = - charStyle.font().descent(charStyle.fontSize() / 10.0);
					asce = charStyle.font().ascent(charStyle.fontSize() / 10.0);
					if (charStyle.strokeColor() != CommonStrings::None)
					{
						ScColorShade tmp(m_doc->PageColors[charStyle.strokeColor()], charStyle.strokeShade());
						painter->setPen(tmp, 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin);
					}
					if (e2.intersects(wm.mapRect(QRect(qRound(CurX + hl->glyph.xoffset),qRound(ls.y + hl->glyph.yoffset-asce), qRound(hl->glyph.xadvance+1), qRound(asce+desc)))))
					{
						painter->save();
						painter->translate(CurX, ls.y);
						if (hl->ch == SpecialChars::OBJECT)
							DrawItem_Embedded(item, painter, clip, charStyle, hl->embedded.getItem());
						else
							DrawGlyphs(item, painter, charStyle, hl->glyph, clip);
						painter->restore();
					}
					if (hl->ch == SpecialChars::OBJECT)
						CurX += (hl->embedded.getItem()->gWidth + hl->embedded.getItem()->lineWidth());
					else
						CurX += hl->glyph.wide();
				}
				tabDist = CurX;
			}
		}
	}
	painter->restore();
}

void ScPageOutput::DrawMarks( Page* page, ScPainterExBase* painter, const MarksOptions& options )
{
	double markOffs  = options.markOffset;
	double bleedLeft = 0.0, bleedRight = 0.0;
	double bleedBottom = options.BleedBottom;
	double bleedTop = options.BleedTop;
	if (!options.cropMarks && !options.bleedMarks && !options.registrationMarks && !options.colorMarks)
		return;
	if (m_doc->locationOfPage(page->pageNr()) == LeftPage)
	{
		bleedRight = options.BleedRight;
		bleedLeft  = options.BleedLeft;
	}
	else if (m_doc->locationOfPage(page->pageNr()) == RightPage)
	{
		bleedRight = options.BleedLeft;
		bleedLeft  = options.BleedRight;
	}
	else
	{
		bleedRight = options.BleedLeft;
		bleedLeft  = options.BleedLeft;
	}
	double width = page->width();
	double height = page->height();
	double offsetX = page->xOffset();
	double offsetY = page->yOffset();
	painter->save();
	painter->setLineWidth(0.5);
	painter->setPen(ScColorShade(Qt::black, 100), 0.5, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin );
	if (options.cropMarks)
	{
		FPoint start, end;
		double left = offsetX, right = offsetX + width;
		double bottom = offsetY + height, top = offsetY;
		DrawBoxMarks( painter, FPoint(left, top), FPoint(right, bottom), markOffs );
	}
	if (options.bleedMarks)
	{
		FPoint start, end;
		double left = offsetX - bleedLeft, right = offsetX + width + bleedRight;
		double bottom = offsetY + height + bleedBottom, top = offsetY - bleedTop;;
		DrawBoxMarks( painter, FPoint(left, top), FPoint(right, bottom), markOffs );
	}
	if (options.registrationMarks)
	{
		double posX = (2* offsetX + width) / 2.0 - 7.0;
		double posY = (offsetY + height + bleedBottom + markOffs + 3.0);
		painter->save();
		painter->translate(posX, posY);
		DrawRegistrationCross( painter );
		painter->restore();
		posX = (2 * offsetX + width) / 2.0 - 7.0;
		posY = (offsetY - bleedTop - markOffs - 17);
		painter->save();
		painter->translate(posX, posY);
		DrawRegistrationCross( painter );
		painter->restore();

		posX = (offsetX - bleedLeft - markOffs - 17);
		posY = (2 * offsetY + height) / 2.0 - 7.0;
		painter->save();
		painter->translate(posX, posY);
		DrawRegistrationCross( painter );
		painter->restore();
		posX = (offsetX + width + bleedRight + markOffs + 3.0);
		posY = (2 * offsetY + height) / 2.0 - 7.0;
		painter->save();
		painter->translate(posX, posY);
		DrawRegistrationCross( painter );
		painter->restore();
	}
	if (options.colorMarks)
	{
		int shade = 100;
		double startX = offsetX + 6.0;
		double startY = offsetY - bleedTop - markOffs - 16.0;
		ScColorShade strokecolor( ScColor(0, 0, 0, 255), 100 );
		painter->setPen( strokecolor, 0.5, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin );
		painter->setFillMode( ScPainterExBase::Solid );
		for (int i = 0; i < 11; i++ )
		{
			ScColorShade fillcolor( ScColor(0, 0, 0, 255), shade );
			painter->setBrush( fillcolor );
			painter->drawRect( startX + i * 14, startY, 14, 14 );
			shade -= 10;
		}
		startX = offsetX + width - 20.0;
		painter->setBrush( ScColorShade(ScColor(0, 0, 0, 255), 50) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(0, 0, 255, 0), 50) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(0, 255, 0, 0), 50) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(255, 0, 0, 0), 50) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(255, 255, 0, 0), 100) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(255, 0, 255, 0), 100) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(0, 255, 255, 0), 100) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(0, 0, 0, 255), 100) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(0, 0, 255, 0), 100) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(0, 255, 0, 0), 100) );
		painter->drawRect( startX, startY, 14, 14 );
		startX -= 14;
		painter->setBrush( ScColorShade(ScColor(255, 0, 0, 0), 100) );
		painter->drawRect( startX, startY, 14, 14 );
	}
	painter->restore();
}

void ScPageOutput::DrawBoxMarks( ScPainterExBase* painter, FPoint& topLeft, FPoint& bottomRight, double offset )
{
	FPoint start, end;
	double left = topLeft.x(), right = bottomRight.x();
	double bottom = bottomRight.y(), top = topLeft.y();
	// Top Left
	start.setXY( left - offset, top );
	end.setXY  ( left - offset - 20, top );
	painter->drawLine(start, end);
	start.setXY( left, top - offset );
	end.setXY  ( left, top - offset - 20);
	painter->drawLine(start, end);
	// Top Right
	start.setXY( right + offset, top );
	end.setXY  ( right + offset + 20, top );
	painter->drawLine(start, end);
	start.setXY( right, top - offset );
	end.setXY  ( right, top - offset - 20);
	painter->drawLine(start, end);
	// Bottom Left
	start.setXY( left - offset, bottom );
	end.setXY  ( left - offset - 20, bottom  );
	painter->drawLine(start, end);
	start.setXY( left, bottom + offset );
	end.setXY  ( left, bottom + offset + 20);
	painter->drawLine(start, end);
	// Bottom Right
	start.setXY( right + offset, bottom );
	end.setXY  ( right + offset + 20, bottom  );
	painter->drawLine(start, end);
	start.setXY( right, bottom + offset );
	end.setXY  ( right, bottom + offset + 20);
	painter->drawLine(start, end);
}

void ScPageOutput::DrawRegistrationCross( ScPainterExBase* painter )
{
	painter->save();

	painter->newPath();
	painter->moveTo(0.0, 7.0);
	painter->lineTo(14.0, 7.0);
	painter->strokePath();

	painter->newPath();
	painter->moveTo(7.0, 0.0);
	painter->lineTo(7.0, 14.0);
	painter->strokePath();

	painter->newPath();
	painter->moveTo(13.0, 7.0);
	painter->curveTo( FPoint(13.0, 10.31383), FPoint(10.31383, 13.0), FPoint(7.0, 13.0) );
	painter->curveTo( FPoint(3.68629, 13.0) , FPoint(1.0, 10.31383) , FPoint(1.0, 7.0) );
	painter->curveTo( FPoint(1.0, 3.68629)  , FPoint(3.68629, 1.0) , FPoint(7.0, 1.0) );
	painter->curveTo( FPoint(10.31383, 1.0) , FPoint(13.0, 3.68629) , FPoint(13.0, 7.0) );
	painter->strokePath();

	painter->newPath();
	painter->moveTo(10.5, 7.0);
	painter->curveTo( FPoint(10.5, 8.93307), FPoint(8.93307, 10.5), FPoint(7.0, 10.5) );
	painter->curveTo( FPoint(5.067, 10.5)  , FPoint(3.5, 8.93307) , FPoint(3.5, 7.0) );
	painter->curveTo( FPoint(3.5, 5.067)   , FPoint(5.067, 3.5)   , FPoint(7.0, 3.5) );
	painter->curveTo( FPoint(8.93307, 3.5) , FPoint(10.5, 5.067)  , FPoint(10.5, 7.0) );
	painter->strokePath();

	painter->restore();
}

void ScPageOutput::FillPath( PageItem* item, ScPainterExBase* painter, QRect& clip )
{
	if( painter->fillMode() == ScPainterExBase::Pattern && !painter->hasCapability(ScPainterExBase::patterns) )
		DrawPattern( item, painter, clip );
	else
		painter->fillPath();
}

void ScPageOutput::StrokePath( PageItem* item, ScPainterExBase* painter, QRect& clip )
{
	painter->strokePath();
}

