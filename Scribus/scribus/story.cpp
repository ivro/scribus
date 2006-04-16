/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          story.cpp  -  description
                             -------------------
    begin                : Tue Nov 11 2003
    copyright            : (C) 2003 by Franz Schmid
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
#include "colorcombo.h"
#include "scfonts.h"
#include "story.h"
#include "story.moc"
#include <qtooltip.h>
#include <qpixmap.h>
#include <qcombobox.h>
#include <qregexp.h>
#include <qhbox.h>
#include <qcolordialog.h>
#include <qfontdialog.h>
#include <qcursor.h>
#include <qtextcodec.h>

#include "actionmanager.h"
#include "alignselect.h"
#include "charselect.h"
#include "colorm.h"
#include "commonstrings.h"
#include "customfdialog.h"
#include "editformats.h"
#include "fontcombo.h"
#include "menumanager.h"
#include "mspinbox.h"
#include "pageitem.h"
#include "pluginmanager.h"
#include "prefscontext.h"
#include "prefsmanager.h"
#include "prefsfile.h"
#include "scmessagebox.h"
#include "scraction.h"
#include "scribus.h"
#include "search.h"
#include "serializer.h"
#include "shadebutton.h"
#include "spalette.h"
#include "styleselect.h"
#include "util.h"
#include "text/nlsconfig.h"

extern QPixmap loadIcon(QString nam);


SideBar::SideBar(QWidget *pa) : QLabel(pa)
{
	setEraseColor(QColor(255,255,255));
	offs = 0;
	editor = 0;
	noUpdt = true;
	inRep = false;
	setMinimumWidth(fontMetrics().width( tr("No Style") )+30);
}

void SideBar::mouseReleaseEvent(QMouseEvent *m)
{
	CurrentPar = editor->paragraphAt(QPoint(2, m->y()+offs));
	pmen = new QPopupMenu();
	Spalette* Spal = new Spalette(this);
	Spal->setFormats(editor->doc);
	if ((CurrentPar < static_cast<int>(editor->StyledText.count())) && (editor->StyledText.count() != 0))
	{
		if (editor->StyledText.at(CurrentPar)->count() > 0)
			Spal->setFormat(editor->StyledText.at(CurrentPar)->at(0)->cab);
		else
			Spal->setFormat(0);
	}
	else
		Spal->setFormat(0);
	connect(Spal, SIGNAL(newStyle(int)), this, SLOT(setPStyle(int)));
	pmen->insertItem(Spal);
	pmen->insertItem( tr("Edit Styles..."), this, SLOT(editStyles()));
	pmen->exec(QCursor::pos());
	delete pmen;
}

void SideBar::editStyles()
{
	emit sigEditStyles();
}

void SideBar::setPStyle(int s)
{
	emit ChangeStyle(CurrentPar, s);
	pmen->activateItemAt(0);
}

void SideBar::paintEvent(QPaintEvent *e)
{
	inRep = true;
	QLabel::paintEvent(e);
	QPainter p;
	p.begin(this);
	if ((editor != 0) && (noUpdt))
	{
		int st = editor->currentParaStyle;
		for (int pa = 0; pa < editor->paragraphs(); ++pa)
		{
			QRect re = editor->paragraphRect(pa);
			if (!re.isValid())
				break;
			re.setWidth(width()-5);
			re.moveBy(5, 0);
			if (((re.y()+re.height())-offs < height()) && ((re.y()+re.height())-offs > 0))
				p.drawLine(0, (re.y()+re.height())-offs, width()-1, (re.y()+re.height())-offs);
			if ((re.y()-offs < height()) && (re.y()-offs > 0))
			{
				re.setY(re.y()-offs);
				if ((pa < static_cast<int>(editor->StyledText.count())) && (editor->StyledText.count() != 0))
				{
					if (editor->StyledText.at(pa)->count() > 0)
						st = editor->StyledText.at(pa)->at(0)->cab;
					else
						st = editor->ParagStyles[pa];
					if (st < 5)
						p.drawText(re, Qt::AlignLeft | Qt::AlignTop, tr("No Style"));
					else
						p.drawText(re, Qt::AlignLeft | Qt::AlignTop, editor->doc->docParagraphStyles[st].name());
				}
				else
				{
					st = editor->currentParaStyle;
					if (st < 5)
						p.drawText(re, Qt::AlignLeft | Qt::AlignTop, tr("No Style"));
					else
						p.drawText(re, Qt::AlignLeft | Qt::AlignTop, editor->doc->docParagraphStyles[st].name());
				}
			}
		}
	}
	p.end();
	inRep = false;
}

void SideBar::doMove(int, int y)
{
	offs = y;
	if (!inRep)
		update();
}

void SideBar::doRepaint()
{
	if (!inRep)
		update();
}

void SideBar::setRepaint(bool r)
{
	noUpdt = r;
}

SEditor::SEditor(QWidget* parent, ScribusDoc *docc, StoryEditor* parentSE) : QTextEdit(parent)
{
	setCurrentDocument(docc);
	parentStoryEditor=parentSE;
	wasMod = false;
	StoredSel = false;
	StyledText.clear();
	StyledText.setAutoDelete(true);
	ParagStyles.clear();
	cBuffer.setAutoDelete(true);
	cBuffer.clear();
	setUndoRedoEnabled(true);
	setUndoDepth(0);
	setTextFormat(Qt::PlainText);
	viewport()->setAcceptDrops(false);
	ClipData = 0;
	unicodeTextEditMode = false;
	connect(QApplication::clipboard(), SIGNAL(dataChanged()), this, SLOT(ClipChange()));
	connect(QApplication::clipboard(), SIGNAL(selectionChanged()), this, SLOT(SelClipChange()));
}

void SEditor::setCurrentDocument(ScribusDoc *docc)
{
	doc = docc;
}

void SEditor::imEndEvent(QIMEvent *e)
{
	QString uc = e->text();
	if ((!uc.isEmpty()) && ((*doc->AllFonts)[CurrFont]->CharWidth.contains(uc[0].unicode())))
	{
		insChars(e->text());
		QTextEdit::imEndEvent(e);
		emit SideBarUp(true);
		emit SideBarUpdate();
	}
}

void SEditor::keyPressEvent(QKeyEvent *k)
{
	emit SideBarUp(false);
	int p, i;
	getCursorPosition(&p, &i);
	int keyMod=0;
	if (k->state() & ShiftButton)
		keyMod |= SHIFT;
	if (k->state() & ControlButton)
		keyMod |= CTRL;
	if (k->state() & AltButton)
		keyMod |= ALT;

	QString uc = k->text();
	switch (k->state())
	{
		case ControlButton:
		case ControlButton|ShiftButton:
		case ControlButton|Keypad:
		case ControlButton|ShiftButton|Keypad:
			switch (k->key())
			{
				case Key_Delete:
					moveCursor(QTextEdit::MoveWordForward, true);
					deleteSel();
					break;
				case Key_Backspace:
					moveCursor(QTextEdit::MoveWordBackward, true);
					deleteSel();
					break;
				case Key_K:
					moveCursor(QTextEdit::MoveLineEnd, true);
					deleteSel();
					break;
				case Key_D:
					moveCursor(QTextEdit::MoveForward, true);
					deleteSel();
					break;
				case Key_H:
					moveCursor(QTextEdit::MoveBackward, true);
					deleteSel();
					break;
				case Key_X:
					cut();
					return;
					break;
				case Key_V:
					paste();
					return;
					break;
				case Key_Y:
				case Key_Z:
					emit SideBarUp(true);
					return;
					break;
				case Key_C:
					copyStyledText();
					break;
			}
			break;
		case NoButton:
		case Keypad:
		case ShiftButton:
		case ControlButton|AltButton:
			if (unicodeTextEditMode)
			{
				int conv = 0;
				bool ok = false;
				unicodeInputString += k->text();
				conv = unicodeInputString.toInt(&ok, 16);
				if (!ok)
				{
					unicodeTextEditMode = false;
					unicodeInputCount = 0;
					unicodeInputString = "";
					return;
				}
				unicodeInputCount++;
				if (unicodeInputCount == 4)
				{
					unicodeTextEditMode = false;
					unicodeInputCount = 0;
					unicodeInputString = "";
					if (ok)
					{
						if (conv < 31)
							conv = 32;
						insChars(QString(QChar(conv)));
 						insert(QString(QChar(conv)));
						emit SideBarUp(true);
						emit SideBarUpdate();
						return;
					}
				}
				else
				{
					emit SideBarUp(true);
					emit SideBarUpdate();
					return;
				}
			}
			wasMod = false;
			switch (k->key())
			{
				case Key_Escape:
					k->ignore();
					break;
				case Key_Shift:
				case Key_Control:
				case Key_Alt:
					wasMod = true;
					break;
				case Key_F12:
					unicodeTextEditMode = true;
					unicodeInputCount = 0;
					unicodeInputString = "";
					return;
					break;
				case Key_Delete:
					if (!hasSelectedText())
					{
						ChList *chars = StyledText.at(p);
						if (i < static_cast<int>(chars->count()))
							chars->remove(i);
						else
						{
							if (p < static_cast<int>(StyledText.count()-1))
							{
								struct PtiSmall *hg;
								ChList *chars2 = StyledText.at(p+1);
								int a = static_cast<int>(chars2->count());
								if (a > 0)
								{
									int ca;
									if (chars->count() > 0)
										ca = chars->at(0)->cab;
									else
										ca = currentParaStyle;
									for (int s = 0; s < a; ++s)
									{
										hg = chars2->take(0);
										hg->cab = ca;
										chars->append(hg);
									}
								}
								StyledText.remove(p+1);
								ParagStyles.remove(ParagStyles.at(p+1));
							}
						}
					}
					else
						deleteSel();
					break;
				case Key_Backspace:
					if (!hasSelectedText())
					{
						if (p >= static_cast<int>(StyledText.count()))
							break;
						ChList *chars = StyledText.at(p);
						if (i > 0)
							chars->remove(i-1);
						else
						{
							if (p > 0)
							{
								struct PtiSmall *hg;
								ChList *chars2 = StyledText.at(p-1);
								int a = static_cast<int>(chars->count());
								if (a > 0)
								{
									int ca;
									if (chars2->count() > 0)
										ca = chars2->at(0)->cab;
									else
										ca = chars->at(0)->cab;
									for (int s = 0; s < a; ++s)
									{
										hg = chars->take(0);
										hg->cab = ca;
										chars2->append(hg);
									}
								}
								StyledText.remove(p);
								ParagStyles.remove(ParagStyles.at(p));
							}
						}
					}
					else
						deleteSel();
					break;
				case Key_Return:
				case Key_Enter:
					{
						if (hasSelectedText())
							deleteSel();
						ChList *chars;
						chars = new ChList;
						chars->setAutoDelete(true);
						chars->clear();
						if (StyledText.count() != 0)
						{
							if (p >= static_cast<int>(StyledText.count()))
							{
								StyledText.append(chars);
								ParagStyles.append(currentParaStyle);
							}
							else
							{
							ChList *chars2 = StyledText.at(p);
							int a = static_cast<int>(chars2->count());
							for (int s = i; s < a; ++s)
							{
								chars->append(chars2->take(i));
							}
							StyledText.insert(p+1, chars);
							ParagStyles.insert(ParagStyles.at(p+1), currentParaStyle);
							}
						}
						else
						{
							StyledText.append(chars);
							ParagStyles.append(currentParaStyle);
						}
					}
					break;
				case Key_Left:
				case Key_Right:
				case Key_Prior:
				case Key_Next:
				case Key_Up:
				case Key_Down:
				case Key_Home:
				case Key_End:
					break;
				default:
					if ((!k->text().isEmpty()) && ((*doc->AllFonts)[CurrFont]->CharWidth.contains(uc[0].unicode())))
					{
						insChars(k->text());
						QTextEdit::keyPressEvent(k);
						emit SideBarUp(true);
						emit SideBarUpdate();
					}
					return;
					break;
			}
			break;
		default:
			break;
	}
	QTextEdit::keyPressEvent(k);
	emit SideBarUp(true);
	emit SideBarUpdate();
}

void SEditor::focusOutEvent(QFocusEvent *e)
{
	if (hasSelectedText())
	{
		getSelection(&SelParaStart, &SelCharStart, &SelParaEnd, &SelCharEnd);
		StoredSel = true;
	}
	else
		StoredSel = false;
	QTextEdit::focusOutEvent(e);
}

void SEditor::insChars(QString t)
{
	int p, i, p2, ccab;
	if (hasSelectedText())
		deleteSel();
	getCursorPosition(&p, &i);
	ChList *chars;
	p2 = p;
	if ((p >= static_cast<int>(StyledText.count())) || (StyledText.count() == 0))
	{
		chars = new ChList;
		chars->setAutoDelete(true);
		chars->clear();
		p2 = static_cast<int>(StyledText.count());
		StyledText.append(chars);
		ParagStyles.append(currentParaStyle);
	}
	else
		chars = StyledText.at(p);
	if (chars->count() != 0)
		ccab = chars->at(0)->cab;
	else
		ccab = currentParaStyle;
	for (uint a = 0; a < t.length(); ++a)
	{
		if (t[a] == QChar(13))
		{
			ChList *chars2;
			chars2 = new ChList;
			chars2->setAutoDelete(true);
			chars2->clear();
			if (p2 >= static_cast<int>(StyledText.count()))
			{
				StyledText.append(chars2);
				ParagStyles.append(ccab);
			}
			else
			{
				int a = static_cast<int>(chars->count());
				for (int s = i; s < a; ++s)
				{
					chars2->append(chars->take(i));
				}
				StyledText.insert(p2+1, chars2);
				ParagStyles.insert(ParagStyles.at(p2+1), ccab);
			}
			p2++;
			chars = StyledText.at(p2);
			i = 0;
		}
		else
		{
			struct PtiSmall *hg;
			hg = new PtiSmall;
			hg->ch = t[a];
			hg->ccolor = CurrTextFill;
			hg->cshade = CurrTextFillSh;
			hg->cstroke = CurrTextStroke;
			hg->cshade2 = CurrTextStrokeSh;
			hg->cfont = CurrFont;
			hg->csize = CurrFontSize;
			hg->cstyle = CurrentStyle;
			hg->cab = ccab;
			hg->cextra = CurrTextKern;
			hg->cscale = CurrTextScale;
			hg->cscalev = CurrTextScaleV;
			hg->cbase = CurrTextBase;
			hg->cshadowx = CurrTextShadowX;
			hg->cshadowy = CurrTextShadowY;
			hg->coutline = CurrTextOutline;
			hg->cunderpos = CurrTextUnderPos;
			hg->cunderwidth =CurrTextUnderWidth;
			hg->cstrikepos = CurrTextStrikePos;
			hg->cstrikewidth =CurrTextStrikeWidth;
			hg->cembedded = 0;
			chars->insert(i, hg);
			i++;
		}
	}
}

void SEditor::insStyledText()
{
	if (cBuffer.count() == 0)
		return;
	int p, i, p2, ccab;
	if (hasSelectedText())
		deleteSel();
	getCursorPosition(&p, &i);
	ChList *chars;
	p2 = p;
	if ((p >= static_cast<int>(StyledText.count())) || (StyledText.count() == 0))
	{
		chars = new ChList;
		chars->setAutoDelete(true);
		chars->clear();
		p2 = static_cast<int>(StyledText.count());
		StyledText.append(chars);
		ParagStyles.append(currentParaStyle);
	}
	else
		chars = StyledText.at(p);
	if (chars->count() != 0)
		ccab = chars->at(0)->cab;
	else
		ccab = currentParaStyle;
	for (uint a = 0; a < cBuffer.count()-1; ++a)
	{
		struct PtiSmall *hg;
		if (cBuffer.at(a)->ch == QChar(25))
			continue;
		if (cBuffer.at(a)->ch == QChar(13))
		{
			ChList *chars2;
			chars2 = new ChList;
			chars2->setAutoDelete(true);
			chars2->clear();
			if (p2 >= static_cast<int>(StyledText.count()))
			{
				StyledText.append(chars2);
				ParagStyles.append(ccab);
			}
			else
			{
				int a = static_cast<int>(chars->count());
				for (int s = i; s < a; ++s)
				{
					chars2->append(chars->take(i));
				}
				StyledText.insert(p2+1, chars2);
				ParagStyles.insert(ParagStyles.at(p2+1), ccab);
			}
			p2++;
			chars = StyledText.at(p2);
			i = 0;
		}
		else
		{
			hg = new PtiSmall;
			hg->ch = cBuffer.at(a)->ch;
			hg->ccolor = cBuffer.at(a)->ccolor;
			hg->cshade = cBuffer.at(a)->cshade;
			hg->cstroke = cBuffer.at(a)->cstroke;
			hg->cshade2 = cBuffer.at(a)->cshade2;
			hg->cfont = cBuffer.at(a)->cfont;
			hg->csize = cBuffer.at(a)->csize;
			hg->cstyle = cBuffer.at(a)->cstyle;
			hg->cab = ccab;
			hg->cextra = cBuffer.at(a)->cextra;
			hg->cscale = cBuffer.at(a)->cscale;
			hg->cscalev = cBuffer.at(a)->cscalev;
			hg->cbase = cBuffer.at(a)->cbase;
			hg->cshadowx = cBuffer.at(a)->cshadowx;
			hg->cshadowy = cBuffer.at(a)->cshadowy;
			hg->coutline = cBuffer.at(a)->coutline;
			hg->cunderpos = cBuffer.at(a)->cunderpos;
			hg->cunderwidth = cBuffer.at(a)->cunderwidth;
			hg->cstrikepos = cBuffer.at(a)->cstrikepos;
			hg->cstrikewidth = cBuffer.at(a)->cstrikewidth;
			hg->cembedded = 0;
			chars->insert(i, hg);
			i++;
		}
	}
}

void SEditor::copyStyledText()
{
	int PStart, PEnd, SelStart, SelEnd, start, end;
	ChList *chars;
	struct PtiSmall *hg;
	cBuffer.clear();
	tBuffer = "";
	getSelection(&PStart, &SelStart, &PEnd, &SelEnd);
	for (int pa = PStart; pa < PEnd+1; ++pa)
	{
		chars = StyledText.at(pa);
		if (pa == PStart)
			start = SelStart;
		else
			start = 0;
		if (pa == PEnd)
			end = SelEnd;
		else
			end = chars->count();
		for (int ca = start; ca < end; ++ca)
		{
			hg = new PtiSmall;
			hg->ch = chars->at(ca)->ch;
			tBuffer += chars->at(ca)->ch;
			hg->cfont = chars->at(ca)->cfont;
			hg->csize = chars->at(ca)->csize;
			hg->ccolor = chars->at(ca)->ccolor;
			hg->cshade = chars->at(ca)->cshade;
			hg->cstroke = chars->at(ca)->cstroke;
			hg->cshade2 = chars->at(ca)->cshade2;
			hg->cscale = chars->at(ca)->cscale;
			hg->cscalev = chars->at(ca)->cscalev;
			hg->cstyle = chars->at(ca)->cstyle;
			hg->cab = chars->at(ca)->cab;
			hg->cextra = chars->at(ca)->cextra;
			hg->cbase = chars->at(ca)->cbase;
			hg->cshadowx = chars->at(ca)->cshadowx;
			hg->cshadowy = chars->at(ca)->cshadowy;
			hg->coutline = chars->at(ca)->coutline;
			hg->cunderpos = chars->at(ca)->cunderpos;
			hg->cunderwidth = chars->at(ca)->cunderwidth;
			hg->cstrikepos = chars->at(ca)->cstrikepos;
			hg->cstrikewidth = chars->at(ca)->cstrikewidth;
			hg->cembedded = 0;
			cBuffer.append(hg);
		}
		hg = new PtiSmall;
		hg->ch = QChar(13);
		tBuffer += QChar(13);
		hg->cfont = "";
		hg->csize = 1;
		hg->ccolor = "";
		hg->cshade = 1;
		hg->cstroke = "";
		hg->cshade2 = 1;
		hg->cscale = 10;
		hg->cscalev = 10;
		hg->cstyle = 0;
		hg->cab = 0;
		hg->cextra = 0;
		hg->cbase = 0;
		hg->cshadowx = 50;
		hg->cshadowy = -50;
		hg->coutline = 10;
		hg->cunderpos = -1;
		hg->cunderwidth = -1;
		hg->cstrikepos = -1;
		hg->cstrikewidth = -1;
		hg->cembedded = 0;
		cBuffer.append(hg);
	}
}

void SEditor::saveItemText(PageItem *currItem)
{
	ChList *chars;
	currItem->CPos = 0;
	currItem->itemText.clear();
	uint c = 0;
	CharStyle curStyle;
	int startOfCurStyle = 0;
	
	for (uint p = 0; p < StyledText.count(); ++p)
	{
		if (p != 0)
		{
			c = StyledText.at(p-1)->count()-1;
			CharStyle newStyle;
			QChar ch = QChar(13);
			chars = StyledText.at(p-1);
			if (chars->count() != 0)
			{
				newStyle.cfont = (*doc->AllFonts)[chars->at(c)->cfont];
				newStyle.csize = chars->at(c)->csize;
				newStyle.ccolor = chars->at(c)->ccolor;
				newStyle.cshade = chars->at(c)->cshade;
				newStyle.cstroke = chars->at(c)->cstroke;
				newStyle.cshade2 = chars->at(c)->cshade2;
				newStyle.cscale = chars->at(c)->cscale;
				newStyle.cscalev = chars->at(c)->cscalev;
				newStyle.cstyle = static_cast<StyleFlag>(chars->at(c)->cstyle);
				newStyle.cextra = chars->at(c)->cextra;
				newStyle.cbase = chars->at(c)->cbase;
				newStyle.cshadowx = chars->at(c)->cshadowx;
				newStyle.cshadowy = chars->at(c)->cshadowy;
				newStyle.coutline = chars->at(c)->coutline;
				newStyle.cunderpos = chars->at(c)->cunderpos;
				newStyle.cunderwidth = chars->at(c)->cunderwidth;
				newStyle.cstrikepos = chars->at(c)->cstrikepos;
				newStyle.cstrikewidth = chars->at(c)->cstrikewidth;
			}
			else
			{
				newStyle.ccolor = CurrTextFill;
				newStyle.cshade = CurrTextFillSh;
				newStyle.cstroke = CurrTextStroke;
				newStyle.cshade2 = CurrTextStrokeSh;
				newStyle.cfont = (*doc->AllFonts)[CurrFont];
				newStyle.csize = CurrFontSize;
				newStyle.cstyle = static_cast<StyleFlag>(CurrentStyle);
				newStyle.cextra = CurrTextKern;
				newStyle.cscale = CurrTextScale;
				newStyle.cscalev = CurrTextScaleV;
				newStyle.cbase = CurrTextBase;
				newStyle.cshadowx = CurrTextShadowX;
				newStyle.cshadowy = CurrTextShadowY;
				newStyle.coutline = CurrTextOutline;
				newStyle.cunderpos = CurrTextUnderPos;
				newStyle.cunderwidth = CurrTextUnderWidth;
				newStyle.cstrikepos = CurrTextStrikePos;
				newStyle.cstrikewidth = CurrTextStrikeWidth;
				if (doc->docParagraphStyles[ParagStyles[p-1]].charStyle().font() != NULL)
				{
					newStyle.cfont = doc->docParagraphStyles[ParagStyles[p-1]].charStyle().font();
					newStyle.csize = doc->docParagraphStyles[ParagStyles[p-1]].charStyle().fontSize();
				}
			}
			int pos = currItem->itemText.length();
			if (newStyle != curStyle) {
				currItem->itemText.applyStyle(startOfCurStyle, pos - startOfCurStyle, curStyle);
				curStyle = newStyle;
				startOfCurStyle = pos;       
			}
			currItem->itemText.insertChars(pos, ch);
			currItem->itemText.applyStyle(pos, (doc->docParagraphStyles[ParagStyles[p-1]]));
		}
		chars = StyledText.at(p);
		for (uint c = 0; c < chars->count(); ++c)
		{
			CharStyle newStyle;
			QChar ch = chars->at(c)->ch[0];
			newStyle.cfont = (*doc->AllFonts)[chars->at(c)->cfont];
			newStyle.csize = chars->at(c)->csize;
			newStyle.ccolor = chars->at(c)->ccolor;
			newStyle.cshade = chars->at(c)->cshade;
			newStyle.cstroke = chars->at(c)->cstroke;
			newStyle.cshade2 = chars->at(c)->cshade2;
			newStyle.cscale = chars->at(c)->cscale;
			newStyle.cscalev = chars->at(c)->cscalev;
			newStyle.cstyle = static_cast<StyleFlag>(chars->at(c)->cstyle);
			newStyle.cextra = chars->at(c)->cextra;
			newStyle.cbase = chars->at(c)->cbase;
			newStyle.cshadowx = chars->at(c)->cshadowx;
			newStyle.cshadowy = chars->at(c)->cshadowy;
			newStyle.coutline = chars->at(c)->coutline;
			newStyle.cunderpos = chars->at(c)->cunderpos;
			newStyle.cunderwidth = chars->at(c)->cunderwidth;
			newStyle.cstrikepos = chars->at(c)->cstrikepos;
			newStyle.cstrikewidth = chars->at(c)->cstrikewidth;
			int pos = currItem->itemText.length();
			if (ch == SpecialChars::OBJECT)
			{
				PageItem* embedded = chars->at(c)->cembedded;
				currItem->document()->FrameItems.append(embedded);
				if (embedded->Groups.count() != 0)
				{
					for (uint ga=0; ga<FrameItems.count(); ++ga)
					{
						if (FrameItems.at(ga)->Groups.count() != 0)
						{
							if (FrameItems.at(ga)->Groups.top() == embedded->Groups.top())
							{
								if (FrameItems.at(ga)->ItemNr != embedded->ItemNr)
								{
									if (currItem->document()->FrameItems.find(FrameItems.at(ga)) == -1)
										currItem->document()->FrameItems.append(FrameItems.at(ga));
								}
							}
						}
					}
				}
				currItem->itemText.insertObject(pos, embedded);
			}
			else {
				currItem->itemText.insertChars(pos, ch);
			}
			if (newStyle != curStyle) {
				currItem->itemText.applyStyle(startOfCurStyle, pos - startOfCurStyle, curStyle);
				curStyle = newStyle;                                
				startOfCurStyle = pos;
			}
			if (ch == SpecialChars::PARSEP) {
				currItem->itemText.applyStyle(pos, (doc->docParagraphStyles[ParagStyles[p-1]]));
			}
		}
	}
	currItem->itemText.applyStyle(startOfCurStyle, currItem->itemText.length() - startOfCurStyle, curStyle);
	currItem->itemText.applyStyle(currItem->itemText.length() - 1, (doc->docParagraphStyles[ParagStyles[StyledText.count()-2]])); // -1 -1 == -2
}

void SEditor::setAlign(int style)
{
	int align = 0;
	if (style > 4)
		align = doc->docParagraphStyles[style].alignment();
	else
		align = style;
	switch (align)
	{
	case 0:
		setAlignment(Qt::AlignLeft);
		break;
	case 1:
		setAlignment(Qt::AlignCenter);
		break;
	case 2:
		setAlignment(Qt::AlignRight);
		break;
	case 3:
	case 4:
		setAlignment(Qt::AlignJustify);
		break;
	default:
		break;
	}
}


void SEditor::loadItemText(PageItem *currItem)
{
	setUpdatesEnabled(false);
	struct PtiSmall *hg;
	QString Text = "";
	int Csty = 0;
	int Ali = 0;
	clear();
	PageItem *nextItem = currItem;
	StyledText.clear();
	ParagStyles.clear();
	FrameItems.clear();
	ChList *chars;
	chars = new ChList;
	chars->setAutoDelete(true);
	chars->clear();
#ifndef NLS_PROTO
	while (nextItem != 0)
	{
		if (nextItem->BackBox != 0)
			nextItem = nextItem->BackBox;
		else
			break;
	}
#endif
	if (nextItem != 0)
	{
		if (nextItem->itemText.length() != 0)
		{
			Csty = nextItem->itemText.charStyle(0).cstyle;
			Ali = findParagraphStyle(doc, nextItem->itemText.paragraphStyle(0));
		}
		else
		{
			Csty = currItem->TxTStyle;
			Ali = currItem->textAlignment;
		}
		setAlign(Ali);
		setStyle(Csty);
	}
	while (nextItem != 0)
	{
		for (uint a = 0; a < nextItem->itemText.length(); ++a)
		{
			if (nextItem->itemText.text(a) == SpecialChars::PARSEP)
			{
				StyledText.append(chars);
				Ali =  findParagraphStyle(doc, nextItem->itemText.paragraphStyle(a));
				ParagStyles.append(Ali);
				chars = new ChList;
				chars->setAutoDelete(true);
				chars->clear();
				Text += "\n";
			}
			else
			{
				const CharStyle& style(nextItem->itemText.charStyle(a));

				hg = new PtiSmall;
				hg->ch = nextItem->itemText.text(a);
				hg->cfont = style.cfont->scName();
				hg->csize = style.csize;
				hg->ccolor = style.ccolor;
				hg->cshade = style.cshade;
				hg->cstroke = style.cstroke;
				hg->cshade2 = style.cshade2;
				hg->cscale = style.cscale;
				hg->cscalev = style.cscalev;
				hg->cstyle = style.cstyle;
				hg->cab = QMAX(0, findParagraphStyle(doc, nextItem->itemText.paragraphStyle(a)));
				hg->cextra = style.cextra;
				hg->cbase = style.cbase;
				hg->cshadowx = style.cshadowx;
				hg->cshadowy = style.cshadowy;
				hg->coutline = style.coutline;
				hg->cunderpos = style.cunderpos;
				hg->cunderwidth = style.cunderwidth;
				hg->cstrikepos = style.cstrikepos;
				hg->cstrikewidth = style.cstrikewidth;
#ifndef NLS_PROTO
				if (hg->ch == QChar(25))
				{
					hg->cembedded = nextItem->itemText.at(a)->cembedded;
					FrameItems.append(hg->cembedded);
					if (hg->cembedded->Groups.count() != 0)
					{
						for (uint ga=0; ga < doc->FrameItems.count(); ++ga)
						{
							if (doc->FrameItems.at(ga)->Groups.count() != 0)
							{
								if (doc->FrameItems.at(ga)->Groups.top() == hg->cembedded->Groups.top())
								{
									if (doc->FrameItems.at(ga)->ItemNr != hg->cembedded->ItemNr)
									{
										if (FrameItems.find(doc->FrameItems.at(ga)) == -1)
											FrameItems.append(doc->FrameItems.at(ga));
									}
								}
							}
						}
					}
					setAlign(Ali);
					setStyle(Csty);
					insert(Text);
					setFarbe(true);
					insert("@");
					setFarbe(false);
					Text = "";
					chars->append(hg);
					continue;
				}
#endif
				if ((Ali == hg->cab) && (Csty == hg->cstyle))
				{
					if (hg->ch == QChar(parentStoryEditor->seActions["unicodePageNumber"]->actionInt()))
					{
						setAlign(Ali);
						setStyle(Csty);
						insert(Text);
						setFarbe(true);
						insert("#");
						setFarbe(false);
						Text = "";
						chars->append(hg);
						continue;
					}
					else if (hg->ch == QChar(parentStoryEditor->seActions["unicodeNonBreakingSpace"]->actionInt()))
					{
						setAlign(Ali);
						setStyle(Csty);
						insert(Text);
						setFarbe(true);
						insert("_");
						setFarbe(false);
						Text = "";
						chars->append(hg);
						continue;
					}
					else if (hg->ch == QChar(parentStoryEditor->seActions["unicodeFrameBreak"]->actionInt()))
					{
						setAlign(Ali);
						setStyle(Csty);
						insert(Text);
						setFarbe(true);
						insert("|");
						setFarbe(false);
						Text = "";
						chars->append(hg);
						continue;
					}
					else if (hg->ch == QChar(parentStoryEditor->seActions["unicodeColumnBreak"]->actionInt()))
					{
						setAlign(Ali);
						setStyle(Csty);
						insert(Text);
						setFarbe(true);
						insert("^");
						setFarbe(false);
						Text = "";
						chars->append(hg);
						continue;
					}
					else if (hg->ch == QChar(parentStoryEditor->seActions["unicodeNonBreakingHyphen"]->actionInt()))
					{
						setAlign(Ali);
						setStyle(Csty);
						insert(Text);
						setFarbe(true);
						insert("=");
						setFarbe(false);
						Text = "";
						chars->append(hg);
						continue;
					}
					else if (hg->ch == QChar(parentStoryEditor->seActions["unicodeNewLine"]->actionInt()))
					{
						setAlign(Ali);
						setStyle(Csty);
						insert(Text);
						setFarbe(true);
						insert("*");
						setFarbe(false);
						Text = "";
						chars->append(hg);
						continue;
					}
					else
						Text += hg->ch;
				}
				else
				{
					setAlign(Ali);
					setStyle(Csty);
					insert(Text);
					Text = hg->ch;
					Csty = hg->cstyle;
					Ali = hg->cab;
				}
				chars->append(hg);
			}
		}
		nextItem = nextItem->NextBox;
	}
	setAlign(Ali);
	setStyle(Csty);
	insert(Text);
	StyledText.append(chars);
	ParagStyles.append(Ali);
	if (StyledText.count() != 0)
		emit setProps(0, 0);
	setUpdatesEnabled(true);
	setCursorPosition(0, 0);
}

void SEditor::loadText(QString tx, PageItem *currItem)
{
	setUpdatesEnabled(false);
	struct PtiSmall *hg;
	QString Text = "";
	StyledText.clear();
	ParagStyles.clear();
	ChList *chars;
	chars = new ChList;
	chars->setAutoDelete(true);
	chars->clear();
	setAlign(currItem->textAlignment);
	setStyle(currItem->TxTStyle);
	for (uint a = 0; a < tx.length(); ++a)
	{
		if (tx[a] == QChar(13))
		{
			StyledText.append(chars);
			ParagStyles.append(currItem->textAlignment);
			chars = new ChList;
			chars->setAutoDelete(true);
			chars->clear();
			Text += "\n";
		}
		else
		{
			hg = new PtiSmall;
			hg->ch = tx[a];
			hg->cfont = currItem->font();
			hg->csize = currItem->fontSize();
			hg->ccolor = currItem->TxtFill;
			hg->cshade = currItem->ShTxtFill;
			hg->cstroke = currItem->TxtStroke;
			hg->cshade2 = currItem->ShTxtStroke;
			hg->cscale = currItem->TxtScale;
			hg->cscalev = currItem->TxtScaleV;
			hg->cbase = currItem->TxtBase;
			hg->cshadowx = currItem->TxtShadowX;
			hg->cshadowy = currItem->TxtShadowY;
			hg->coutline = currItem->TxtOutline;
			hg->cunderpos = currItem->TxtUnderPos;
			hg->cunderwidth = currItem->TxtUnderWidth;
			hg->cstrikepos = currItem->TxtStrikePos;
			hg->cstrikewidth = currItem->TxtStrikeWidth;
			hg->cstyle = currItem->TxTStyle;
			hg->cab = currItem->textAlignment;
			hg->cextra = 0;
			hg->cembedded = 0;
			Text += hg->ch;
			chars->append(hg);
		}
	}
	insert(Text);
	StyledText.append(chars);
	ParagStyles.append(currItem->textAlignment);
	if (StyledText.count() != 0)
		emit setProps(0, 0);
	setUpdatesEnabled(true);
	setCursorPosition(0, 0);
}

void SEditor::updateAll()
{
	if (StyledText.count() == 0)
		return;
	setUpdatesEnabled(false);
	int p, i;
	getCursorPosition(&p, &i);
	clear();
	struct PtiSmall *hg;
	QString Text = "";
	int Csty;
	int Ali = 0;
	ChList *chars = StyledText.at(0);
	if (chars->count() != 0)
	{
		Csty = chars->at(0)->cstyle;
		Ali = chars->at(0)->cab;
	}
	else
	{
		Csty = CurrentStyle;
		Ali = currentParaStyle;
	}
	setAlign(Ali);
	setStyle(Csty);
	for (uint pa = 0; pa < StyledText.count(); ++pa)
	{
		chars = StyledText.at(pa);
		if ((chars->count() == 0) && (pa < StyledText.count()-1))
		{
			Text += "\n";
			continue;
		}
		for (uint a = 0; a < chars->count(); ++a)
		{
			hg = chars->at(a);
			if (hg->ch == QChar(25))
			{
				setAlign(Ali);
				setStyle(Csty);
				insert(Text);
				setFarbe(true);
				insert("@");
				setFarbe(false);
				Text = "";
				continue;
			}
			if ((Ali == hg->cab) && (Csty == hg->cstyle))
			{
				if (hg->ch == QChar(parentStoryEditor->seActions["unicodePageNumber"]->actionInt()))
				{
					setAlign(Ali);
					setStyle(Csty);
					insert(Text);
					setFarbe(true);
					insert("#");
					setFarbe(false);
					Text = "";
					continue;
				}
				else if (hg->ch == QChar(parentStoryEditor->seActions["unicodeNonBreakingSpace"]->actionInt()))
				{
					setAlign(Ali);
					setStyle(Csty);
					insert(Text);
					setFarbe(true);
					insert("_");
					setFarbe(false);
					Text = "";
					continue;
				}
				else if (hg->ch == QChar(parentStoryEditor->seActions["unicodeFrameBreak"]->actionInt()))
				{
					setAlign(Ali);
					setStyle(Csty);
					insert(Text);
					setFarbe(true);
					insert("|");
					setFarbe(false);
					Text = "";
					continue;
				}
				else if (hg->ch == QChar(parentStoryEditor->seActions["unicodeColumnBreak"]->actionInt()))
				{
					setAlign(Ali);
					setStyle(Csty);
					insert(Text);
					setFarbe(true);
					insert("^");
					setFarbe(false);
					Text = "";
					chars->append(hg);
					continue;
				}
				else if (hg->ch == QChar(parentStoryEditor->seActions["unicodeNonBreakingHyphen"]->actionInt()))
				{
					setAlign(Ali);
					setStyle(Csty);
					insert(Text);
					setFarbe(true);
					insert("=");
					setFarbe(false);
					Text = "";
					chars->append(hg);
					continue;
				}
				else if (hg->ch == QChar(parentStoryEditor->seActions["unicodeNewLine"]->actionInt()))
				{
					setAlign(Ali);
					setStyle(Csty);
					insert(Text);
					setFarbe(true);
					insert("*");
					setFarbe(false);
					Text = "";
					continue;
				}
				else
					Text += hg->ch;
			}
			else
			{
				setAlign(Ali);
				setStyle(Csty);
				insert(Text);
				Text = hg->ch;
				Csty = hg->cstyle;
				Ali = hg->cab;
			}
		}
		if (pa < StyledText.count()-1)
			Text += "\n";
	}
	setAlign(Ali);
	setStyle(Csty);
	insert(Text);
	setUpdatesEnabled(true);
	//CB Removed to fix 2083 setCursorPosition(p, i);
}

void SEditor::updateFromChars(int pa)
{
	ChList *chars = StyledText.at(pa);
	if (chars->count() == 0)
		return;
	setUpdatesEnabled(false);
	int SelStart = 0;
	int SelEnd = 0;
	int p, i;
	getCursorPosition(&p, &i);
	removeSelection();
	int Csty = chars->at(0)->cstyle;
	for (uint a = 0; a < chars->count(); ++a)
	{
		if (Csty == chars->at(a)->cstyle)
			SelEnd++;
		else
		{
			setSelection(pa, SelStart, pa, SelEnd);
			setStyle(Csty);
			removeSelection();
			Csty = chars->at(a)->cstyle;
			SelStart = SelEnd;
			SelEnd++;
		}
	}
	setSelection(pa, SelStart, pa, SelEnd);
	setStyle(Csty);
	removeSelection();
	setAlign(chars->at(0)->cab);
	setUpdatesEnabled(true);
	setCursorPosition(p, i);
}

/* updates the internal PtiSmall structure, to be useable for all members of the PtiSmall struct
   there is a code as first parameter to indicate which member should be updated.
	0 = Fill Colour and Fill Shade
	1 = Stroke Colour and Stroke Shade
	2 = Font
	3 = Font Size
	4 = Character Style
	5 = Character Scaling
	6 = Kerning
	7 = Character Scaling Vertical
	8 = Character Shadow
	9 = Character Outline
	10 = Character Underline
	11 = Character Strikethru
 */
void SEditor::updateSel(int code, struct PtiSmall *hg)
{
	int PStart, PEnd, SelStart, SelEnd, start, end;
	ChList *chars;
	if (StoredSel)
	{
		setSelection(SelParaStart, SelCharStart, SelParaEnd, SelCharEnd);
		StoredSel = false;
	}
	getSelection(&PStart, &SelStart, &PEnd, &SelEnd);
	for (int pa = PStart; pa < PEnd+1; ++pa)
	{
		chars = StyledText.at(pa);
		if (pa == PStart)
			start = SelStart;
		else
			start = 0;
		if (pa == PEnd)
			end = SelEnd;
		else
			end = chars->count();
		for (int ca = start; ca < end; ++ca)
		{
			switch (code)
			{
				case 0:
					chars->at(ca)->ccolor = hg->ccolor;
					chars->at(ca)->cshade = hg->cshade;
					break;
				case 1:
					chars->at(ca)->cstroke = hg->cstroke;
					chars->at(ca)->cshade2 = hg->cshade2;
					break;
				case 2:
					chars->at(ca)->cfont = hg->cfont;
					break;
				case 3:
					chars->at(ca)->csize = hg->csize;
					break;
				case 4:
					chars->at(ca)->cstyle &= ~1919;
					chars->at(ca)->cstyle |= hg->cstyle;
					break;
				case 5:
					chars->at(ca)->cscale = hg->cscale;
					break;
				case 6:
					chars->at(ca)->cextra = hg->cextra;
					break;
				case 7:
					chars->at(ca)->cscalev = hg->cscalev;
					break;
				case 8:
					chars->at(ca)->cshadowx = hg->cshadowx;
					chars->at(ca)->cshadowy = hg->cshadowy;
					break;
				case 9:
					chars->at(ca)->coutline = hg->coutline;
					break;
				case 10:
					chars->at(ca)->cunderpos = hg->cunderpos;
					chars->at(ca)->cunderwidth = hg->cunderwidth;
					break;
				case 11:
					chars->at(ca)->cstrikepos = hg->cstrikepos;
					chars->at(ca)->cstrikewidth = hg->cstrikewidth;
					break;
				default:
					break;
			}
		}
	}
}

void SEditor::deleteSel()
{
	int PStart, PEnd, SelStart, SelEnd, start, end;
	ChList *chars = NULL;
	getSelection(&PStart, &SelStart, &PEnd, &SelEnd);
	if (PStart == PEnd)
	{
		chars = StyledText.at(PStart);
		for (int a = 0; a < SelEnd-SelStart; ++a)
		{
			chars->remove(SelStart);
		}
	}
	else
	{
		for (int pa = PStart; pa < PEnd+1; ++pa)
		{
			bool noChar = false;
			if (pa >= static_cast<int>(StyledText.count()))
				noChar = true;
			else
				chars = StyledText.at(pa);
			if (pa == PStart)
				start = SelStart;
			else
				start = 0;
			if (pa == PEnd)
				end = SelEnd;
			else
			{
				if (noChar)
					end = 0;
				else
					end = chars->count();
			}
			if (!noChar)
			{
				for (int ca = 0; ca < end-start; ++ca)
				{
					chars->remove(start);
				}
			}
		}
		if (PEnd-PStart > 1)
		{
			for (int pa2 = 0; pa2 < PEnd - PStart - 1; ++pa2)
			{
				if (PStart+1 < static_cast<int>(StyledText.count()))
				{
					StyledText.remove(PStart+1);
					ParagStyles.remove(ParagStyles.at(PStart+1));
				}
			}
		}
		if (PStart+1 < static_cast<int>(StyledText.count()))
		{
			struct PtiSmall *hg;
			ChList *chars2 = StyledText.at(PStart+1);
			chars = StyledText.at(PStart);
			int a = static_cast<int>(chars2->count());
			if (a > 0)
			{
				int ca;
				if (chars->count() > 0)
					ca = chars->at(0)->cab;
				else
					ca = currentParaStyle;
				for (int s = 0; s < a; ++s)
				{
					hg = chars2->take(0);
					hg->cab = ca;
					chars->append(hg);
				}
			}
			StyledText.remove(PStart+1);
			ParagStyles.remove(ParagStyles.at(PStart+1));
		}
	}
	setCursorPosition(PStart, SelStart);
}

void SEditor::setStyle(int Csty)
{
	if (Csty & 8)
		setUnderline(true);
	else
		setUnderline(false);
	QFont f = currentFont();
	if (Csty & 16)
		f.setStrikeOut(true);
	else
		f.setStrikeOut(false);
	setCurrentFont(f);
	if (Csty & 1)
		setVerticalAlignment(AlignSuperScript);
	else if (Csty & 2)
		setVerticalAlignment(AlignSubScript);
	else
		setVerticalAlignment(AlignNormal);
}

void SEditor::setFarbe(bool marker)
{
	QColor tmp;
	if (marker)
		tmp = QColor(red);
	else
		tmp = QColor(black);
	setColor(tmp);
}

void SEditor::copy()
{
	emit SideBarUp(false);
	if ((hasSelectedText()) && (!selectedText().isEmpty()))
	{
		disconnect(QApplication::clipboard(), SIGNAL(dataChanged()), this, SLOT(ClipChange()));
		disconnect(QApplication::clipboard(), SIGNAL(selectionChanged()), this, SLOT(SelClipChange()));
		copyStyledText();
		QApplication::clipboard()->setText(tBuffer, QClipboard::Clipboard);
		ClipData = 1;
		connect(QApplication::clipboard(), SIGNAL(dataChanged()), this, SLOT(ClipChange()));
		connect(QApplication::clipboard(), SIGNAL(selectionChanged()), this, SLOT(SelClipChange()));
		emit PasteAvail();
	}
	emit SideBarUp(true);
}

void SEditor::cut()
{
	copy();
	emit SideBarUp(false);
	if (hasSelectedText())
	{
		deleteSel();
		removeSelectedText();
	}
	emit SideBarUp(true);
	emit SideBarUpdate();
}

void SEditor::paste()
{
	emit SideBarUp(false);
	int currentPara, currentCharPos;
	QString data = "";
	int newParaCount, lengthLastPara;
	bool inserted=false;
	getCursorPosition(&currentPara, &currentCharPos);
	if (ClipData == 1)
		insStyledText();
	else
	{
		QString data = QApplication::clipboard()->text(QClipboard::Selection);
		if (data.isNull())
			data = QApplication::clipboard()->text(QClipboard::Clipboard);
		if (!data.isNull())
		{
			data.replace(QRegExp("\r"), "");
			newParaCount=data.contains("\n");
			lengthLastPara=data.length()-data.findRev("\n");
			data.replace(QRegExp("\n"), QChar(13));
			inserted=true;
			insChars(data);
			ClipData = 2;
			emit PasteAvail();
		}
		else
		{
			emit SideBarUp(true);
			return;
		}
	}
	updateAll();
	if (inserted)
		setCursorPosition(currentPara+newParaCount,(newParaCount==0?currentCharPos:0)+lengthLastPara-1);
	sync();
	repaintContents();
	emit SideBarUp(true);
	emit SideBarUpdate();
}

QPopupMenu* SEditor::createPopupMenu(const QPoint & pos)
{
	QPopupMenu *p = QTextEdit::createPopupMenu(pos);
	p->removeItemAt(0);
	p->removeItemAt(0);
	p->removeItemAt(0);
	p->removeItemAt(3);
	return p;
}

void SEditor::SelClipChange()
{
	ClipData = 3;
	emit PasteAvail();
}

void SEditor::ClipChange()
{
	ClipData = 2;
	emit PasteAvail();
}

/* Toolbar for Fill Colour */
SToolBColorF::SToolBColorF(QMainWindow* parent, ScribusDoc *doc) : QToolBar( tr("Fill Color Settings"), parent)
{
	FillIcon = new QLabel( "", this, "FillIcon" );
	FillIcon->setPixmap(loadIcon("fill.png"));
	FillIcon->setScaledContents( false );
	TxFill = new ColorCombo( false, this, "TxFill" );
	PM2 = new ShadeButton(this);
	setCurrentDocument(doc);
	//TxFill->listBox()->setMinimumWidth(TxFill->listBox()->maxItemWidth()+24);
	connect(TxFill, SIGNAL(activated(int)), this, SLOT(newShadeHandler()));
	connect(PM2, SIGNAL(clicked()), this, SLOT(newShadeHandler()));

	languageChange();
}

void SToolBColorF::languageChange()
{
	QToolTip::remove(TxFill);
	QToolTip::remove(PM2);
	QToolTip::add(TxFill, tr( "Color of text fill" ));
	QToolTip::add(PM2, tr( "Saturation of color of text fill" ));



}

void SToolBColorF::setCurrentDocument(ScribusDoc *doc)
{
	TxFill->clear();
	TxFill->insertItem(CommonStrings::NoneColor);
	if (doc!=NULL)
	{
		for (ColorList::Iterator it = doc->PageColors.begin(); it != doc->PageColors.end(); ++it)
		{
			TxFill->insertSmallItem( doc->PageColors[it.key()], it.key() );
		}
	}
	resize(minimumSizeHint());
}

void SToolBColorF::SetColor(int c)
{
	disconnect(TxFill, SIGNAL(activated(int)), this, SLOT(newShadeHandler()));
	TxFill->setCurrentItem(c);
	connect(TxFill, SIGNAL(activated(int)), this, SLOT(newShadeHandler()));
}

void SToolBColorF::SetShade(int s)
{
	disconnect(PM2, SIGNAL(clicked()), this, SLOT(newShadeHandler()));
	PM2->setValue(s);
	connect(PM2, SIGNAL(clicked()), this, SLOT(newShadeHandler()));
}

void SToolBColorF::newShadeHandler()
{
	emit NewColor(TxFill->currentItem(), PM2->getValue());
}

/* Toolbar for Stroke Colour */
SToolBColorS::SToolBColorS(QMainWindow* parent, ScribusDoc *doc) : QToolBar( tr("Stroke Color Settings"), parent)
{
	StrokeIcon = new QLabel( "", this, "StrokeIcon" );
	StrokeIcon->setPixmap(loadIcon("Stiftalt.xpm"));
	StrokeIcon->setScaledContents( false );
	TxStroke = new ColorCombo( false, this, "TxStroke" );
	PM1 = new ShadeButton(this);
	setCurrentDocument(doc);
	//TxStroke->listBox()->setMinimumWidth(TxStroke->listBox()->maxItemWidth()+24);
	connect(TxStroke, SIGNAL(activated(int)), this, SLOT(newShadeHandler()));
	connect(PM1, SIGNAL(clicked()), this, SLOT(newShadeHandler()));

	languageChange();
}

void SToolBColorS::languageChange()
{
	QToolTip::remove(TxStroke);
	QToolTip::remove(PM1);
	QToolTip::add(TxStroke, tr("Color of text stroke"));
	QToolTip::add(PM1, tr("Saturation of color of text stroke"));
}

void SToolBColorS::setCurrentDocument(ScribusDoc *doc)
{
	TxStroke->clear();
	TxStroke->insertItem(CommonStrings::NoneColor);
	if (doc!=NULL)
	{
		for (ColorList::Iterator it = doc->PageColors.begin(); it != doc->PageColors.end(); ++it)
		{
			TxStroke->insertSmallItem( doc->PageColors[it.key()], it.key() );
		}
	}
	resize(minimumSizeHint());
}

void SToolBColorS::SetColor(int c)
{
	disconnect(TxStroke, SIGNAL(activated(int)), this, SLOT(newShadeHandler()));
	TxStroke->setCurrentItem(c);
	connect(TxStroke, SIGNAL(activated(int)), this, SLOT(newShadeHandler()));
}

void SToolBColorS::SetShade(int s)
{
	disconnect(PM1, SIGNAL(clicked()), this, SLOT(newShadeHandler()));
	PM1->setValue(s);
	connect(PM1, SIGNAL(clicked()), this, SLOT(newShadeHandler()));
}

void SToolBColorS::newShadeHandler()
{
	emit NewColor(TxStroke->currentItem(), PM1->getValue());
}

/* Toolbar for Character Style Settings */
SToolBStyle::SToolBStyle(QMainWindow* parent) : QToolBar( tr("Character Settings"), parent)
{
	SeStyle = new StyleSelect(this);
	trackingLabel = new QLabel( this, "trackingLabel" );
	trackingLabel->setText("");
	trackingLabel->setPixmap(loadIcon("textkern.png"));
	Extra = new MSpinBox( this, 1 );
	Extra->setValues( -300, 300, 10, 0);
	Extra->setSuffix( tr( " %" ) );

	connect(SeStyle, SIGNAL(State(int)), this, SIGNAL(newStyle(int)));
	connect(Extra, SIGNAL(valueChanged(int)), this, SLOT(newKernHandler()));
	connect(SeStyle->ShadowVal->Xoffset, SIGNAL(valueChanged(int)), this, SLOT(newShadowHandler()));
	connect(SeStyle->ShadowVal->Yoffset, SIGNAL(valueChanged(int)), this, SLOT(newShadowHandler()));
	connect(SeStyle->OutlineVal->LWidth, SIGNAL(valueChanged(int)), this, SLOT(newOutlineHandler()));
	connect(SeStyle->UnderlineVal->LWidth, SIGNAL(valueChanged(int)), this, SLOT(newUnderlineHandler()));
	connect(SeStyle->UnderlineVal->LPos, SIGNAL(valueChanged(int)), this, SLOT(newUnderlineHandler()));
	connect(SeStyle->StrikeVal->LWidth, SIGNAL(valueChanged(int)), this, SLOT(newStrikeHandler()));
	connect(SeStyle->StrikeVal->LPos, SIGNAL(valueChanged(int)), this, SLOT(newStrikeHandler()));

	languageChange();
}

void SToolBStyle::languageChange()
{
	QToolTip::remove(Extra);
	QToolTip::add(Extra, tr( "Manual Tracking" ));
}

void SToolBStyle::newStrikeHandler()
{
	int x = qRound(SeStyle->StrikeVal->LPos->value() * 10.0);
	int y = qRound(SeStyle->StrikeVal->LWidth->value() * 10.0);
	emit newUnderline(x, y);
}

void SToolBStyle::newUnderlineHandler()
{
	int x = qRound(SeStyle->UnderlineVal->LPos->value() * 10.0);
	int y = qRound(SeStyle->UnderlineVal->LWidth->value() * 10.0);
	emit newUnderline(x, y);
}

void SToolBStyle::newOutlineHandler()
{
	int x = qRound(SeStyle->OutlineVal->LWidth->value() * 10.0);
	emit newOutline(x);
}

void SToolBStyle::newShadowHandler()
{
	int x = qRound(SeStyle->ShadowVal->Xoffset->value() * 10.0);
	int y = qRound(SeStyle->ShadowVal->Yoffset->value() * 10.0);
	emit NewShadow(x, y);
}

void SToolBStyle::newKernHandler()
{
	emit NewKern(qRound(Extra->value() * 10.0));
}

void SToolBStyle::setOutline(int x)
{
	disconnect(SeStyle->OutlineVal->LWidth, SIGNAL(valueChanged(int)), this, SLOT(newOutlineHandler()));
	SeStyle->OutlineVal->LWidth->setValue(x / 10.0);
	connect(SeStyle->OutlineVal->LWidth, SIGNAL(valueChanged(int)), this, SLOT(newOutlineHandler()));
}

void SToolBStyle::setStrike(int p, int w)
{
	disconnect(SeStyle->StrikeVal->LWidth, SIGNAL(valueChanged(int)), this, SLOT(newStrikeHandler()));
	disconnect(SeStyle->StrikeVal->LPos, SIGNAL(valueChanged(int)), this, SLOT(newStrikeHandler()));
	SeStyle->StrikeVal->LWidth->setValue(w / 10.0);
	SeStyle->StrikeVal->LPos->setValue(p / 10.0);
	connect(SeStyle->StrikeVal->LWidth, SIGNAL(valueChanged(int)), this, SLOT(newStrikeHandler()));
	connect(SeStyle->StrikeVal->LPos, SIGNAL(valueChanged(int)), this, SLOT(newStrikeHandler()));
}

void SToolBStyle::setUnderline(int p, int w)
{
	disconnect(SeStyle->UnderlineVal->LWidth, SIGNAL(valueChanged(int)), this, SLOT(newUnderlineHandler()));
	disconnect(SeStyle->UnderlineVal->LPos, SIGNAL(valueChanged(int)), this, SLOT(newUnderlineHandler()));
	SeStyle->UnderlineVal->LWidth->setValue(w / 10.0);
	SeStyle->UnderlineVal->LPos->setValue(p / 10.0);
	connect(SeStyle->UnderlineVal->LWidth, SIGNAL(valueChanged(int)), this, SLOT(newUnderlineHandler()));
	connect(SeStyle->UnderlineVal->LPos, SIGNAL(valueChanged(int)), this, SLOT(newUnderlineHandler()));
}

void SToolBStyle::SetShadow(int x, int y)
{
	disconnect(SeStyle->ShadowVal->Xoffset, SIGNAL(valueChanged(int)), this, SLOT(newShadowHandler()));
	disconnect(SeStyle->ShadowVal->Yoffset, SIGNAL(valueChanged(int)), this, SLOT(newShadowHandler()));
	SeStyle->ShadowVal->Xoffset->setValue(x / 10.0);
	SeStyle->ShadowVal->Yoffset->setValue(y / 10.0);
	connect(SeStyle->ShadowVal->Xoffset, SIGNAL(valueChanged(int)), this, SLOT(newShadowHandler()));
	connect(SeStyle->ShadowVal->Yoffset, SIGNAL(valueChanged(int)), this, SLOT(newShadowHandler()));
}

void SToolBStyle::SetStyle(int s)
{
	disconnect(SeStyle, SIGNAL(State(int)), this, SIGNAL(newStyle(int)));
	SeStyle->setStyle(s);
	connect(SeStyle, SIGNAL(State(int)), this, SIGNAL(newStyle(int)));
}

void SToolBStyle::SetKern(int k)
{
	disconnect(Extra, SIGNAL(valueChanged(int)), this, SLOT(newKernHandler()));
	Extra->setValue(k / 10.0);
	connect(Extra, SIGNAL(valueChanged(int)), this, SLOT(newKernHandler()));
}

/* Toolbar for alignment of Paragraphs */
SToolBAlign::SToolBAlign(QMainWindow* parent) : QToolBar( tr("Style Settings"), parent)
{
	GroupAlign = new AlignSelect(this);
	Spal = new Spalette(this);
	connect(Spal, SIGNAL(newStyle(int)), this, SLOT(newStyleHandler(int )));
	connect(GroupAlign, SIGNAL(State(int)), this, SIGNAL(NewAlign(int )));

	languageChange();
}

void SToolBAlign::languageChange()
{
	QToolTip::remove(Spal);
	QToolTip::add(Spal, tr("Style of current paragraph"));
}

void SToolBAlign::newStyleHandler(int s)
{
	if (s != 0)
		GroupAlign->setEnabled(false);
	else
		GroupAlign->setEnabled(true);
	emit newStyle(s);
}

void SToolBAlign::SetAlign(int s)
{
	disconnect(Spal, SIGNAL(newStyle(int)), this, SLOT(newStyleHandler(int )));
	disconnect(GroupAlign, SIGNAL(State(int)), this, SIGNAL(NewAlign(int )));
	if (s < 5)
	{
		GroupAlign->setEnabled(true);
		GroupAlign->setStyle(s);
	}
	else
		GroupAlign->setEnabled(false);
	Spal->setFormat(s);
	connect(GroupAlign, SIGNAL(State(int)), this, SIGNAL(NewAlign(int )));
	connect(Spal, SIGNAL(newStyle(int)), this, SLOT(newStyleHandler(int )));
}

/* Toolbar for Font related Settings */
SToolBFont::SToolBFont(QMainWindow* parent) : QToolBar( tr("Font Settings"), parent)
{
	Fonts = new FontCombo(this);
	Fonts->setMaximumSize(190, 30);
	Size = new MSpinBox( 0.5, 2048, this, 1 );
	Size->setPrefix( "" );
	Size->setSuffix( tr( " pt" ) );
	ScaleTxt = new QLabel("", this, "ScaleTxt" );
	ScaleTxt->setPixmap(loadIcon("textscaleh.png"));
	ChScale = new MSpinBox( 10, 400,  this, 1 );
	ChScale->setValue( 100 );
	ChScale->setSuffix( tr( " %" ) );
	ScaleTxtV = new QLabel("", this, "ScaleTxtV" );
	ScaleTxtV->setPixmap(loadIcon("textscalev.png"));
	ChScaleV = new MSpinBox( 10, 400, this, 1 );
	ChScaleV->setValue( 100 );
	ChScaleV->setSuffix( tr( " %" ) );

	connect(ChScale, SIGNAL(valueChanged(int)), this, SIGNAL(NewScale(int)));
	connect(ChScaleV, SIGNAL(valueChanged(int)), this, SIGNAL(NewScaleV(int)));
	connect(Fonts, SIGNAL(activated(const QString &)), this, SIGNAL(NewFont(const QString &)));
	connect(Size, SIGNAL(valueChanged(int)), this, SLOT(newSizeHandler()));
}

void SToolBFont::languageChange()
{
	QToolTip::remove(Fonts);
	QToolTip::remove(Size);
	QToolTip::remove(ChScale);
	QToolTip::remove(ChScaleV);
	QToolTip::add(Fonts, tr("Font of selected text"));
	QToolTip::add(Size, tr("Font Size"));
	QToolTip::add(ChScale, tr("Scaling width of characters"));
	QToolTip::add(ChScaleV, tr("Scaling height of characters"));
}

void SToolBFont::SetFont(QString f)
{
	disconnect(Fonts, SIGNAL(activated(const QString &)), this, SIGNAL(NewFont(const QString &)));
	Fonts->setCurrentText(f);
	connect(Fonts, SIGNAL(activated(const QString &)), this, SIGNAL(NewFont(const QString &)));
}

void SToolBFont::SetSize(double s)
{
	disconnect(Size, SIGNAL(valueChanged(int)), this, SLOT(newSizeHandler()));
	Size->setValue(s / 10.0);
	connect(Size, SIGNAL(valueChanged(int)), this, SLOT(newSizeHandler()));
}

void SToolBFont::SetScale(int s)
{
	disconnect(ChScale, SIGNAL(valueChanged(int)), this, SIGNAL(NewScale(int)));
	ChScale->setValue(s / 10.0);
	connect(ChScale, SIGNAL(valueChanged(int)), this, SIGNAL(NewScale(int)));
}

void SToolBFont::SetScaleV(int s)
{
	disconnect(ChScaleV, SIGNAL(valueChanged(int)), this, SIGNAL(NewScaleV(int)));
	ChScaleV->setValue(s / 10.0);
	connect(ChScaleV, SIGNAL(valueChanged(int)), this, SIGNAL(NewScaleV(int)));
}

void SToolBFont::newSizeHandler()
{
	emit NewSize(Size->value());
}

/* Main Story Editor Class */
StoryEditor::StoryEditor(QWidget* parent, ScribusDoc *docc, PageItem *ite)
	: QMainWindow(parent, "StoryEditor", WType_TopLevel) //  WType_Dialog) //WShowModal |
{
	prefsManager=PrefsManager::instance();
	currDoc = docc;
	seMenuMgr=NULL;
	buildGUI();
	currItem = ite;
	firstSet = false;
	activFromApp = true;
	Editor->loadItemText(ite);
	EditorBar->setRepaint(true);
	EditorBar->doRepaint();
	CurrPara = 0;
	CurrChar = 0;
	updateProps(0,0);
	updateStatus();
	textChanged = false;
	disconnectSignals();
	connectSignals();
	Editor->setFocus();
	Editor->setFarbe(false);
	blockUpdate = false;
	loadPrefs();
}

/* Main Story Editor Class, no current document */
StoryEditor::StoryEditor(QWidget* parent) : QMainWindow(parent, "StoryEditor", WType_TopLevel) // WType_Dialog) //WShowModal |
{
	prefsManager=PrefsManager::instance();
	currDoc = NULL;
	currItem = NULL;
	#ifdef Q_WS_MAC
	noIcon = loadIcon("noicon.xpm");
	#endif
	buildGUI();
	CurrPara = 0;
	CurrChar = 0;
	firstSet = false;
	activFromApp = true;
	/*
	//Editor->loadItemText(ite);
	updateProps(0,0);
	updateStatus();
	*/
	textChanged = false;
	Editor->setFocus();
	Editor->setFarbe(false);
	blockUpdate = false;
	loadPrefs();
}

StoryEditor::~StoryEditor()
{
	savePrefs();
}

void StoryEditor::savePrefs()
{
	// save prefs
	QRect geo = geometry();
	prefs->set("left", geo.left());
	prefs->set("top", geo.top());
	prefs->set("width", width());
	prefs->set("height", height());
}

void StoryEditor::loadPrefs()
{
	prefs = PrefsManager::instance()->prefsFile->getPluginContext("StoryEditor");
	int vleft   = QMAX(-80, prefs->getInt("left", 10));
#if defined(QT_MAC) || defined(_WIN32)
	int vtop    = QMAX(64, prefs->getInt("top", 10));
#else
	int vtop    = QMAX(-80, prefs->getInt("top", 10));
#endif
	int vwidth  = QMAX(600, prefs->getInt("width", 600));
	int vheight = QMAX(400, prefs->getInt("height", 400));
	// Check values against current screen size
	QRect scr = QApplication::desktop()->screen()->geometry();
	QSize gStrut = QApplication::globalStrut();
	if ( vleft >= scr.width() )
		vleft = 0;
	if ( vtop >= scr.height() )
		vtop = 64;
	if ( vwidth >= scr.width() )
		vwidth = QMAX( gStrut.width(), scr.width() - vleft );
	if ( vheight >= scr.height() )
		vheight = QMAX( gStrut.height(), scr.height() - vtop );
	setGeometry(vleft, vtop, vwidth, vheight);
}

void StoryEditor::initActions()
{
	//File Menu
	seActions.insert("fileNew", new ScrAction(QIconSet(loadIcon("editdelete.png"), loadIcon("editdelete.png")), "", CTRL+Key_N, this, "fileNew"));
	seActions.insert("fileRevert", new ScrAction(QIconSet(loadIcon("reload16.png"), loadIcon("reload.png")), "", QKeySequence(), this, "fileRevert"));
	seActions.insert("fileSaveToFile", new ScrAction(QIconSet(loadIcon("DateiSave16.png"), loadIcon("DateiSave2.png")), "", QKeySequence(), this, "fileSaveToFile"));
	seActions.insert("fileLoadFromFile", new ScrAction(QIconSet(loadIcon("DateiOpen16.png"), loadIcon("DateiOpen.xpm")), "", QKeySequence(), this, "fileLoadFromFile"));
	seActions.insert("fileSaveDocument", new ScrAction(QIconSet(loadIcon("reload16.png"), loadIcon("reload.png")), "", CTRL+Key_S, this, "fileSaveDocument"));
	seActions.insert("fileUpdateAndExit", new ScrAction(QIconSet(loadIcon("ok.png"), loadIcon("ok22.png")), "", CTRL+Key_W, this, "fileUpdateAndExit"));
	seActions.insert("fileExit", new ScrAction(QIconSet(loadIcon("exit.png"), loadIcon("exit22.png")), "", QKeySequence(), this, "fileExit"));

	connect( seActions["fileNew"], SIGNAL(activated()), this, SLOT(Do_new()) );
	connect( seActions["fileRevert"], SIGNAL(activated()), this, SLOT(slotFileRevert()) );
	connect( seActions["fileSaveToFile"], SIGNAL(activated()), this, SLOT(SaveTextFile()) );
	connect( seActions["fileLoadFromFile"], SIGNAL(activated()), this, SLOT(LoadTextFile()) );
	connect( seActions["fileSaveDocument"], SIGNAL(activated()), this, SLOT(Do_saveDocument()) );
	connect( seActions["fileUpdateAndExit"], SIGNAL(activated()), this, SLOT(Do_leave2()) );
	connect( seActions["fileExit"], SIGNAL(activated()), this, SLOT(Do_leave()) );

	//Edit Menu
	seActions.insert("editSelectAll", new ScrAction(QIconSet(noIcon), "", CTRL+Key_A, this, "editSelectAll"));
	seActions.insert("editCut", new ScrAction(QIconSet(loadIcon("editcut.png")), "", CTRL+Key_X, this, "editCut"));
	seActions.insert("editCopy", new ScrAction(QIconSet(loadIcon("editcopy.png")), "", CTRL+Key_C, this, "editCopy"));
	seActions.insert("editPaste", new ScrAction(QIconSet(loadIcon("editpaste.png")), "", CTRL+Key_V, this, "editPaste"));
	seActions.insert("editClear", new ScrAction(QIconSet(loadIcon("editdelete.png")), "", Key_Delete, this, "editClear"));
	seActions.insert("editSearchReplace", new ScrAction(QIconSet(loadIcon("find16.png")), "", QKeySequence(), this, "editSearchReplace"));
	seActions.insert("editEditStyle", new ScrAction(QIconSet(noIcon), "", QKeySequence(), this, "editEditStyle"));
	seActions.insert("editFontPreview", new ScrAction(QIconSet(noIcon), "", QKeySequence(), this, "editFontPreview"));
	seActions.insert("editUpdateFrame", new ScrAction(QIconSet(loadIcon("compfile16.png"),loadIcon("compfile.png")), "", CTRL+Key_U, this, "editUpdateFrame"));

	connect( seActions["editSelectAll"], SIGNAL(activated()), this, SLOT(Do_selectAll()) );
	connect( seActions["editCut"], SIGNAL(activated()), this, SLOT(Do_cut()) );
	connect( seActions["editCopy"], SIGNAL(activated()), this, SLOT(Do_copy()) );
	connect( seActions["editPaste"], SIGNAL(activated()), this, SLOT(Do_paste()) );
	connect( seActions["editClear"], SIGNAL(activated()), this, SLOT(Do_del()) );
	connect( seActions["editSearchReplace"], SIGNAL(activated()), this, SLOT(SearchText()) );
	connect( seActions["editEditStyle"], SIGNAL(activated()), this, SLOT(slotEditStyles()) );
	connect( seActions["editFontPreview"], SIGNAL(activated()), this, SLOT(Do_fontPrev()) );
	connect( seActions["editUpdateFrame"], SIGNAL(activated()), this, SLOT(updateTextFrame()) );

	//Insert Menu
	seActions.insert("insertGlyph", new ScrAction(QIconSet(noIcon), "", QKeySequence(), this, "insertGlyph"));
	connect( seActions["insertGlyph"], SIGNAL(activated()), this, SLOT(Do_insSp()) );

	//Settings Menu
	seActions.insert("settingsBackground", new ScrAction(QIconSet(noIcon), "", QKeySequence(), this, "settingsBackground"));
	seActions.insert("settingsDisplayFont", new ScrAction(QIconSet(noIcon), "", QKeySequence(), this, "settingsDisplayFont"));
	seActions.insert("settingsSmartTextSelection", new ScrAction(QIconSet(noIcon), "", QKeySequence(), this, "settingsSmartTextSelection"));
	smartSelection = false;
	seActions["settingsSmartTextSelection"]->setOn(false);
	seActions["settingsSmartTextSelection"]->setToggleAction(true);

	connect( seActions["settingsBackground"], SIGNAL(activated()), this, SLOT(setBackPref()) );
	connect( seActions["settingsDisplayFont"], SIGNAL(activated()), this, SLOT(setFontPref()) );
	connect( seActions["settingsSmartTextSelection"], SIGNAL(toggled(bool)), this, SLOT(setSmart(bool)) );


	seActions["fileRevert"]->setEnabled(false);
	seActions["editCopy"]->setEnabled(false);
	seActions["editCut"]->setEnabled(false);
	seActions["editPaste"]->setEnabled(false);
	seActions["editClear"]->setEnabled(false);
	seActions["editUpdateFrame"]->setEnabled(false);
}

void StoryEditor::buildMenus()
{
	seMenuMgr = new MenuManager(this->menuBar());
	seMenuMgr->createMenu("File", tr("&File"));
	seMenuMgr->addMenuItem(seActions["fileNew"], "File");
	seMenuMgr->addMenuItem(seActions["fileRevert"], "File");
	seMenuMgr->addMenuSeparator("File");
	seMenuMgr->addMenuItem(seActions["fileSaveToFile"], "File");
	seMenuMgr->addMenuItem(seActions["fileLoadFromFile"], "File");
	seMenuMgr->addMenuItem(seActions["fileSaveDocument"], "File");
	seMenuMgr->addMenuSeparator("File");
	seMenuMgr->addMenuItem(seActions["fileUpdateAndExit"], "File");
	seMenuMgr->addMenuItem(seActions["fileExit"], "File");
	seMenuMgr->createMenu("Edit", tr("&Edit"));
	seMenuMgr->addMenuItem(seActions["editSelectAll"], "Edit");
	seMenuMgr->addMenuItem(seActions["editCut"], "Edit");
	seMenuMgr->addMenuItem(seActions["editCopy"], "Edit");
	seMenuMgr->addMenuItem(seActions["editPaste"], "Edit");
	seMenuMgr->addMenuItem(seActions["editClear"], "Edit");
	seMenuMgr->addMenuSeparator("Edit");
	seMenuMgr->addMenuItem(seActions["editSearchReplace"], "Edit");
	seMenuMgr->addMenuSeparator("Edit");
	seMenuMgr->addMenuItem(seActions["editEditStyle"], "Edit");
	seMenuMgr->addMenuItem(seActions["editFontPreview"], "Edit");
	seMenuMgr->addMenuItem(seActions["editUpdateFrame"], "Edit");
	seMenuMgr->createMenu("Insert", tr("&Insert"));
	seMenuMgr->addMenuItem(seActions["insertGlyph"], "Insert");
	seMenuMgr->createMenu("InsertChar", QPixmap(noIcon), tr("Character"), "Insert");
	seMenuMgr->addMenuItem(seActions["unicodePageNumber"], "InsertChar");
	//seMenuMgr->addMenuItem(seActions["unicodeSmartHyphen"], "InsertChar");
	seMenuMgr->addMenuItem(seActions["unicodeNonBreakingHyphen"], "InsertChar");
	seMenuMgr->addMenuSeparator("InsertChar");
	seMenuMgr->addMenuItem(seActions["unicodeCopyRight"], "InsertChar");
	seMenuMgr->addMenuItem(seActions["unicodeRegdTM"], "InsertChar");
	seMenuMgr->addMenuItem(seActions["unicodeTM"], "InsertChar");
	seMenuMgr->addMenuItem(seActions["unicodeSolidus"], "InsertChar");
	seMenuMgr->addMenuItem(seActions["unicodeBullet"], "InsertChar");
	seMenuMgr->addMenuItem(seActions["unicodeMidpoint"], "InsertChar");
	seMenuMgr->addMenuSeparator("InsertChar");
	seMenuMgr->addMenuItem(seActions["unicodeDashEm"], "InsertChar");
	seMenuMgr->addMenuItem(seActions["unicodeDashEn"], "InsertChar");
	seMenuMgr->addMenuItem(seActions["unicodeDashFigure"], "InsertChar");
	seMenuMgr->addMenuItem(seActions["unicodeDashQuotation"], "InsertChar");
	seMenuMgr->createMenu("InsertQuote", QPixmap(noIcon), tr("Quote"), "Insert");
	seMenuMgr->addMenuItem(seActions["unicodeQuoteApostrophe"], "InsertQuote");
	seMenuMgr->addMenuItem(seActions["unicodeQuoteStraight"], "InsertQuote");
	seMenuMgr->addMenuSeparator("InsertQuote");
	seMenuMgr->addMenuItem(seActions["unicodeQuoteSingleLeft"], "InsertQuote");
	seMenuMgr->addMenuItem(seActions["unicodeQuoteSingleRight"], "InsertQuote");
	seMenuMgr->addMenuItem(seActions["unicodeQuoteDoubleLeft"], "InsertQuote");
	seMenuMgr->addMenuItem(seActions["unicodeQuoteDoubleRight"], "InsertQuote");
	seMenuMgr->addMenuSeparator("InsertQuote");
	seMenuMgr->addMenuItem(seActions["unicodeQuoteLowSingleComma"], "InsertQuote");
	seMenuMgr->addMenuItem(seActions["unicodeQuoteLowDoubleComma"], "InsertQuote");
	seMenuMgr->addMenuSeparator("InsertQuote");
	seMenuMgr->addMenuItem(seActions["unicodeQuoteSingleReversed"], "InsertQuote");
	seMenuMgr->addMenuItem(seActions["unicodeQuoteDoubleReversed"], "InsertQuote");
	seMenuMgr->addMenuSeparator("InsertQuote");
	seMenuMgr->addMenuItem(seActions["unicodeQuoteSingleLeftGuillemet"], "InsertQuote");
	seMenuMgr->addMenuItem(seActions["unicodeQuoteSingleRightGuillemet"], "InsertQuote");
	seMenuMgr->addMenuItem(seActions["unicodeQuoteDoubleLeftGuillemet"], "InsertQuote");
	seMenuMgr->addMenuItem(seActions["unicodeQuoteDoubleRightGuillemet"], "InsertQuote");
	seMenuMgr->addMenuSeparator("InsertQuote");
	seMenuMgr->addMenuItem(seActions["unicodeQuoteCJKSingleLeft"], "InsertQuote");
	seMenuMgr->addMenuItem(seActions["unicodeQuoteCJKSingleRight"], "InsertQuote");
	seMenuMgr->addMenuItem(seActions["unicodeQuoteCJKDoubleLeft"], "InsertQuote");
	seMenuMgr->addMenuItem(seActions["unicodeQuoteCJKDoubleRight"], "InsertQuote");
	seMenuMgr->createMenu("InsertSpace", QPixmap(noIcon), tr("Spaces && Breaks"), "Insert");
	seMenuMgr->addMenuItem(seActions["unicodeNonBreakingSpace"], "InsertSpace");
	seMenuMgr->addMenuItem(seActions["unicodeSpaceEN"], "InsertSpace");
	seMenuMgr->addMenuItem(seActions["unicodeSpaceEM"], "InsertSpace");
	seMenuMgr->addMenuItem(seActions["unicodeSpaceThin"], "InsertSpace");
	seMenuMgr->addMenuItem(seActions["unicodeSpaceThick"], "InsertSpace");
	seMenuMgr->addMenuItem(seActions["unicodeSpaceMid"], "InsertSpace");
	seMenuMgr->addMenuItem(seActions["unicodeSpaceHair"], "InsertSpace");
	seMenuMgr->addMenuSeparator("InsertSpace");
	seMenuMgr->addMenuItem(seActions["unicodeNewLine"], "InsertSpace");
	seMenuMgr->addMenuItem(seActions["unicodeFrameBreak"], "InsertSpace");
	seMenuMgr->addMenuItem(seActions["unicodeColumnBreak"], "InsertSpace");
	seMenuMgr->createMenu("InsertLigature", QPixmap(noIcon), tr("Ligature"), "Insert");
	seMenuMgr->addMenuItem(seActions["unicodeLigature_ff"], "InsertLigature");
	seMenuMgr->addMenuItem(seActions["unicodeLigature_fi"], "InsertLigature");
	seMenuMgr->addMenuItem(seActions["unicodeLigature_fl"], "InsertLigature");
	seMenuMgr->addMenuItem(seActions["unicodeLigature_ffi"], "InsertLigature");
	seMenuMgr->addMenuItem(seActions["unicodeLigature_ffl"], "InsertLigature");
	seMenuMgr->addMenuItem(seActions["unicodeLigature_ft"], "InsertLigature");
	seMenuMgr->addMenuItem(seActions["unicodeLigature_st"], "InsertLigature");

	seMenuMgr->createMenu("Settings", tr("&Settings"));
	seMenuMgr->addMenuItem(seActions["settingsBackground"], "Settings");
	seMenuMgr->addMenuItem(seActions["settingsDisplayFont"], "Settings");
	seMenuMgr->addMenuItem(seActions["settingsSmartTextSelection"], "Settings");

	seMenuMgr->addMenuToMenuBar("File");
	seMenuMgr->addMenuToMenuBar("Edit");
	seMenuMgr->addMenuToMenuBar("Insert");
	seMenuMgr->addMenuToMenuBar("Settings");
}

void StoryEditor::buildGUI()
{
	unicodeCharActionNames.clear();
	seActions.clear();
	initActions();
	ActionManager::initUnicodeActions(&seActions, this, &unicodeCharActionNames);
	seActions["unicodeSmartHyphen"]->setEnabled(false);//CB TODO doesnt work in SE yet.
	buildMenus();

	setIcon(loadIcon("AppIcon.png"));
	QHBox* vb = new QHBox( this );
	StoryEd2Layout = new QHBoxLayout( 0, 5, 5, "StoryEd2Layout");

/* Setting up Toolbars */
	FileTools = new QToolBar(this);
	seActions["fileNew"]->addTo(FileTools);
	seActions["fileLoadFromFile"]->addTo(FileTools);
	seActions["fileSaveToFile"]->addTo(FileTools);
	seActions["fileUpdateAndExit"]->addTo(FileTools);
	seActions["fileExit"]->addTo(FileTools);
	seActions["fileRevert"]->addTo(FileTools);
	seActions["editUpdateFrame"]->addTo(FileTools);
	seActions["editSearchReplace"]->addTo(FileTools);

	setDockEnabled(FileTools, DockLeft, false);
	setDockEnabled(FileTools, DockRight, false);
	setDockEnabled(FileTools, DockBottom, false);
	FontTools = new SToolBFont(this);
	setDockEnabled(FontTools, DockLeft, false);
	setDockEnabled(FontTools, DockRight, false);
	setDockEnabled(FontTools, DockBottom, false);
	AlignTools = new SToolBAlign(this);
	setDockEnabled(AlignTools, DockLeft, false);
	setDockEnabled(AlignTools, DockRight, false);
	setDockEnabled(AlignTools, DockBottom, false);
	AlignTools->Spal->setFormats(currDoc);
	StyleTools = new SToolBStyle(this);
	setDockEnabled(StyleTools, DockLeft, false);
	setDockEnabled(StyleTools, DockRight, false);
	setDockEnabled(StyleTools, DockBottom, false);
	StrokeTools = new SToolBColorS(this, currDoc);
	setDockEnabled(StrokeTools, DockLeft, false);
	setDockEnabled(StrokeTools, DockRight, false);
	setDockEnabled(StrokeTools, DockBottom, false);
	StrokeTools->TxStroke->setEnabled(false);
	StrokeTools->PM1->setEnabled(false);
	FillTools = new SToolBColorF(this, currDoc);
	setDockEnabled(FillTools, DockLeft, false);
	setDockEnabled(FillTools, DockRight, false);
	setDockEnabled(FillTools, DockBottom, false);

	EdSplit = new QSplitter(vb);
/* SideBar Widget */
	EditorBar = new SideBar(EdSplit);
/* Editor Widget, subclass of QTextEdit */
	Editor = new SEditor(EdSplit, currDoc, this);
	StoryEd2Layout->addWidget( EdSplit );

/* Setting up Status Bar */
	ButtonGroup1 = new QButtonGroup( statusBar(), "ButtonGroup1" );
	ButtonGroup1->setFrameShape( QButtonGroup::NoFrame );
	ButtonGroup1->setFrameShadow( QButtonGroup::Plain );
	ButtonGroup1->setTitle("");
	ButtonGroup1->setExclusive( true );
	ButtonGroup1->setColumnLayout(0, Qt::Vertical );
	ButtonGroup1->layout()->setSpacing( 0 );
	ButtonGroup1->layout()->setMargin( 0 );
	ButtonGroup1Layout = new QGridLayout( ButtonGroup1->layout() );
	ButtonGroup1Layout->setAlignment( Qt::AlignTop );
	ButtonGroup1Layout->setSpacing( 2 );
	ButtonGroup1Layout->setMargin( 0 );
	WordCT1 = new QLabel(ButtonGroup1, "wt");
	ButtonGroup1Layout->addMultiCellWidget( WordCT1, 0, 0, 0, 3 );
	WordCT = new QLabel(ButtonGroup1, "wt");
	ButtonGroup1Layout->addWidget( WordCT, 1, 0 );
	WordC = new QLabel(ButtonGroup1, "wc");
	ButtonGroup1Layout->addWidget( WordC, 1, 1 );
	CharCT = new QLabel(ButtonGroup1, "ct");
	ButtonGroup1Layout->addWidget( CharCT, 1, 2 );
	CharC = new QLabel(ButtonGroup1, "cc");
	ButtonGroup1Layout->addWidget( CharC, 1, 3 );
	statusBar()->addWidget(ButtonGroup1, 1, true);
	ButtonGroup2 = new QButtonGroup( statusBar(), "ButtonGroup2" );
	ButtonGroup2->setFrameShape( QButtonGroup::NoFrame );
	ButtonGroup2->setFrameShadow( QButtonGroup::Plain );
	ButtonGroup2->setTitle("");
	ButtonGroup2->setExclusive( true );
	ButtonGroup2->setColumnLayout(0, Qt::Vertical );
	ButtonGroup2->layout()->setSpacing( 0 );
	ButtonGroup2->layout()->setMargin( 0 );
	ButtonGroup2Layout = new QGridLayout( ButtonGroup2->layout() );
	ButtonGroup2Layout->setAlignment( Qt::AlignTop );
	ButtonGroup2Layout->setSpacing( 2 );
	ButtonGroup2Layout->setMargin( 0 );
	WordCT3 = new QLabel(ButtonGroup2, "wt");
	ButtonGroup2Layout->addMultiCellWidget( WordCT3, 0, 0, 0, 5 );
	ParCT = new QLabel(ButtonGroup2, "pt");
	ButtonGroup2Layout->addWidget( ParCT, 1, 0 );
	ParC = new QLabel(ButtonGroup2, "pc");
	ButtonGroup2Layout->addWidget( ParC, 1, 1 );
	WordCT2 = new QLabel(ButtonGroup2, "wt");
	ButtonGroup2Layout->addWidget( WordCT2, 1, 2 );
	WordC2 = new QLabel(ButtonGroup2, "wc");
	ButtonGroup2Layout->addWidget( WordC2, 1, 3 );
	CharCT2 = new QLabel(ButtonGroup2, "ct");
	ButtonGroup2Layout->addWidget( CharCT2, 1, 4 );
	CharC2 = new QLabel(ButtonGroup2, "cc");
	ButtonGroup2Layout->addWidget( CharC2, 1, 5 );
	statusBar()->addWidget(ButtonGroup2, 1, true);
	setCentralWidget( vb );
	//Final setup
	resize( QSize(660, 500).expandedTo(minimumSizeHint()) );
	if (prefsManager==NULL)
		sDebug(QString("%1").arg("prefsmgr null"));

	Editor->setPaper(prefsManager->appPrefs.STEcolor);
	QFont fo;
	fo.fromString(prefsManager->appPrefs.STEfont);
	Editor->setFont(fo);
	EditorBar->setFrameStyle(Editor->frameStyle());
	EditorBar->setLineWidth(Editor->lineWidth());
	EditorBar->editor = Editor;
	Editor->installEventFilter(this);
	languageChange();
}

void StoryEditor::languageChange()
{
	setCaption( tr( "Story Editor" ) );
	//File Menu
	seMenuMgr->setMenuText("File", tr("&File"));
	seActions["fileNew"]->setMenuText( tr("&New"));
	seActions["fileNew"]->setText( tr("Clear All Text"));
	seActions["fileRevert"]->setTexts( tr("&Reload Text from Frame"));
	seActions["fileSaveToFile"]->setTexts( tr("&Save to File..."));
	seActions["fileLoadFromFile"]->setTexts( tr("&Load from File..."));
	seActions["fileSaveDocument"]->setTexts( tr("Save &Document"));
	seActions["fileUpdateAndExit"]->setTexts( tr("&Update Text Frame and Exit"));
	seActions["fileExit"]->setTexts( tr("&Exit Without Updating Text Frame"));
	//Edit Menu
	seMenuMgr->setMenuText("Edit", tr("&Edit"));
	seActions["editSelectAll"]->setTexts( tr("Select &All"));
	seActions["editCut"]->setTexts( tr("Cu&t"));
	seActions["editCopy"]->setTexts( tr("&Copy"));
	seActions["editPaste"]->setTexts( tr("&Paste"));
	seActions["editClear"]->setTexts( tr("C&lear"));
	seActions["editSearchReplace"]->setTexts( tr("&Search/Replace..."));
	seActions["editEditStyle"]->setTexts( tr("&Edit Styles..."));
	seActions["editFontPreview"]->setTexts( tr("&Fonts Preview..."));
	seActions["editUpdateFrame"]->setTexts( tr("&Update Text Frame"));

	//Insert menu
	seMenuMgr->setMenuText("Insert", tr("&Insert"));
	seMenuMgr->setMenuText("InsertChar", tr("Character"));
	seMenuMgr->setMenuText("InsertQuote", tr("Quote"));
	seMenuMgr->setMenuText("InsertSpace", tr("Space"));
	seActions["insertGlyph"]->setTexts( tr("&Insert Glyph..."));

	//Settings Menu
	seMenuMgr->setMenuText("Settings", tr("&Settings"));
	seActions["settingsBackground"]->setTexts( tr("&Background..."));
	seActions["settingsDisplayFont"]->setTexts( tr("&Display Font..."));
	seActions["settingsSmartTextSelection"]->setTexts( tr("&Smart text selection"));

	//Unicode Actions
	ActionManager::languageChangeUnicodeActions(&seActions);

	FileTools->setLabel( tr("File"));

	WordCT1->setText( tr("Current Paragraph:"));
	WordCT->setText( tr("Words: "));
	CharCT->setText( tr("Chars: "));
	WordCT3->setText( tr("Totals:"));
	ParCT->setText( tr("Paragraphs: "));
	WordCT2->setText( tr("Words: "));
	CharCT2->setText( tr("Chars: "));

}

void StoryEditor::disconnectSignals()
{
	disconnect(Editor,0,0,0);
	disconnect(EditorBar,0,0,0);
	disconnect(AlignTools,0,0,0);
	disconnect(FillTools,0,0,0);
	disconnect(FontTools,0,0,0);
	disconnect(StrokeTools,0,0,0);
	disconnect(StyleTools,0,0,0);
}

void StoryEditor::connectSignals()
{
	connect(Editor, SIGNAL(textChanged()), this, SLOT(modifiedText()));
	connect(Editor, SIGNAL(clicked(int, int)), this, SLOT(updateProps(int, int)));
	connect(Editor, SIGNAL(setProps(int, int)), this, SLOT(updateProps(int, int)));
	connect(Editor, SIGNAL(cursorPositionChanged(int, int)), this, SLOT(updateProps(int, int)));
	connect(Editor, SIGNAL(copyAvailable(bool)), this, SLOT(CopyAvail(bool )));
	connect(Editor, SIGNAL(PasteAvail()), this, SLOT(PasteAvail()));
	connect(Editor, SIGNAL(contentsMoving(int, int)), EditorBar, SLOT(doMove(int, int )));
	connect(Editor, SIGNAL(textChanged()), EditorBar, SLOT(doRepaint()));
	connect(Editor, SIGNAL(SideBarUp(bool )), EditorBar, SLOT(setRepaint(bool )));
	connect(Editor, SIGNAL(SideBarUpdate( )), EditorBar, SLOT(doRepaint()));
	// 10/12/2004 - pv - #1203: wrong selection on double click
	connect(Editor, SIGNAL(doubleClicked(int, int)), this, SLOT(doubleClick(int, int)));
	connect(EditorBar, SIGNAL(ChangeStyle(int, int )), this, SLOT(changeAlignSB(int, int )));
	connect(EditorBar, SIGNAL(sigEditStyles()), this, SLOT(slotEditStyles()));
	connect(AlignTools, SIGNAL(newStyle(int)), this, SLOT(newAlign(int)));
	connect(AlignTools, SIGNAL(NewAlign(int)), this, SLOT(newAlign(int)));
	connect(FillTools, SIGNAL(NewColor(int, int)), this, SLOT(newTxFill(int, int)));
	connect(StrokeTools, SIGNAL(NewColor(int, int)), this, SLOT(newTxStroke(int, int)));
	connect(FontTools, SIGNAL(NewSize(double )), this, SLOT(newTxSize(double)));
	connect(FontTools, SIGNAL(NewFont(const QString& )), this, SLOT(newTxFont(const QString& )));
	connect(FontTools, SIGNAL(NewScale(int )), this, SLOT(newTxScale(int )));
	connect(FontTools, SIGNAL(NewScaleV(int )), this, SLOT(newTxScaleV(int )));
	connect(StyleTools, SIGNAL(NewKern(int )), this, SLOT(newTxKern(int )));
	connect(StyleTools, SIGNAL(newStyle(int )), this, SLOT(newTxStyle(int )));
	connect(StyleTools, SIGNAL(NewShadow(int, int)), this, SLOT(newShadowOffs(int, int)));
	connect(StyleTools, SIGNAL(newOutline(int )), this, SLOT(newTxtOutline(int )));
	connect(StyleTools, SIGNAL(newUnderline(int, int)), this, SLOT(newTxtUnderline(int, int)));
	connect(StyleTools, SIGNAL(newStrike(int, int )), this, SLOT(newTxtStrike(int, int)));
}

void StoryEditor::setCurrentDocumentAndItem(ScribusDoc *doc, PageItem *item)
{
	disconnectSignals();
	currDoc=doc;
	textChanged=false;
	AlignTools->Spal->setFormats(currDoc);
	StrokeTools->setCurrentDocument(currDoc);
	FillTools->setCurrentDocument(currDoc);
	Editor->setCurrentDocument(currDoc);
	currItem = item;
	if (currItem!=NULL)
	{
		setCaption( tr("Story Editor - %1").arg(currItem->itemName()));
		firstSet = false;
		Editor->loadItemText(currItem);
		Editor->sync();
		Editor->repaintContents();
		EditorBar->setRepaint(true);
		EditorBar->doRepaint();
		updateProps(0,0);
		updateStatus();
		connectSignals();
	}
	else
	{
		Editor->StyledText.clear();
		Editor->ParagStyles.clear();
		Editor->clear();
		setCaption( tr( "Story Editor" ));
	}
}

/** 10/12/2004 - pv - #1203: wrong selection on double click
Catch the double click signal - cut the wrong selection (with
whitespaces on the tail) - select only one word - return
controlling back to story editor - have rest */
void StoryEditor::doubleClick(int para, int position)
{
	int paraFrom, indexFrom, paraTo, indexTo;
	QString selText = Editor->selectedText();
	if (selText.length() == 0 || !smartSelection)
	{
		updateProps(para, position);
		return;
	}
	Editor->getSelection(&paraFrom, &indexFrom, &paraTo, &indexTo);
	selText =  selText.stripWhiteSpace();
	Editor->setSelection(paraFrom, indexFrom, paraFrom, indexFrom + selText.length());
	updateProps(para, position);
}

void StoryEditor::setSmart(bool newSmartSelection)
{
	smartSelection = newSmartSelection;
}

void StoryEditor::closeEvent(QCloseEvent *)
{
	if (textChanged)
	{
		blockUpdate = true;
		int t = ScMessageBox::warning(this, CommonStrings::trWarning,
									tr("Do you want to save your changes?"),
									QMessageBox::Yes|QMessageBox::Default,
									QMessageBox::No,
									QMessageBox::Cancel|QMessageBox::Escape);
		qApp->processEvents();
		if (t == QMessageBox::Yes)
		{
			updateTextFrame();
			result = QDialog::Accepted;
		}
		else if (t == QMessageBox::Cancel)
		{
			blockUpdate = false;
			return;
		}
		else if (t == QMessageBox::No)
			result = QDialog::Rejected;
	}
	else
		result = QDialog::Rejected;
	setCurrentDocumentAndItem(currDoc, NULL);
	savePrefs();
	hide();
	blockUpdate = false;
}

void StoryEditor::keyPressEvent (QKeyEvent * e)
{
	if (e->key() == Qt::Key_Escape)
		close();
	else
	{
		activFromApp = false;
		return QMainWindow::keyReleaseEvent(e);
	}
}

bool StoryEditor::eventFilter( QObject* ob, QEvent* ev )
{
	if ( ev->type() == QEvent::WindowDeactivate )
	{
		if ((currItem!=NULL) && (!blockUpdate))
			updateTextFrame();
		activFromApp = false;
		Editor->getCursorPosition(&CurrPara, &CurrChar);
	}
	if ( ev->type() == QEvent::WindowActivate )
	{
		if ((!activFromApp) && (!textChanged) && (!blockUpdate))
		{
			activFromApp = true;
			if (currItem!=NULL)
			{
				disconnectSignals();
				Editor->setUndoRedoEnabled(false);
				Editor->setUndoRedoEnabled(true);
				Editor->setCursorPosition(0, 0);
				seActions["fileRevert"]->setEnabled(false);
				seActions["editCopy"]->setEnabled(false);
				seActions["editCut"]->setEnabled(false);
				seActions["editClear"]->setEnabled(false);
				textChanged = false;
				Editor->loadItemText(currItem);
				updateStatus();
				textChanged = false;
				if (static_cast<int>(Editor->StyledText.count()) > CurrPara)
				{
					if (static_cast<int>(Editor->StyledText.at(CurrPara)->count()) > CurrChar)
					{
						Editor->setCursorPosition(CurrPara, CurrChar);
						updateProps(CurrPara, CurrChar);
					}
				}
				Editor->sync();
				Editor->repaintContents();
				EditorBar->doMove(0, Editor->contentsY());
				EditorBar->setRepaint(true);
				EditorBar->doRepaint();
				connectSignals();
			}
		}
	}
	return QMainWindow::eventFilter(ob, ev);
}

void StoryEditor::setBackPref()
{
	blockUpdate = true;
	QColor neu = QColor();
	neu = QColorDialog::getColor(Editor->paper().color(), this);
	if (neu.isValid())
	{
		Editor->setPaper(neu);
		prefsManager->appPrefs.STEcolor = neu;
	}
	blockUpdate = false;
}

void StoryEditor::setFontPref()
{
	blockUpdate = true;
	Editor->setFont( QFontDialog::getFont( 0, Editor->font(), this ) );
	prefsManager->appPrefs.STEfont = Editor->font().toString();
	EditorBar->doRepaint();
	blockUpdate = false;
}

void StoryEditor::newTxFill(int c, int s)
{
	if (c != -1)
		Editor->CurrTextFill = FillTools->TxFill->text(c);
	if (s != -1)
		Editor->CurrTextFillSh = s;
	struct PtiSmall hg;
	hg.ccolor = Editor->CurrTextFill;
	hg.cshade = Editor->CurrTextFillSh;
	Editor->updateSel(0, &hg);
	modifiedText();
	Editor->setFocus();
}

void StoryEditor::newTxStroke(int c, int s)
{
	if (c != -1)
		Editor->CurrTextStroke = StrokeTools->TxStroke->text(c);
	if (s != -1)
		Editor->CurrTextStrokeSh = s;
	struct PtiSmall hg;
	hg.cstroke = Editor->CurrTextStroke;
	hg.cshade2 = Editor->CurrTextStrokeSh;
	Editor->updateSel(1, &hg);
	modifiedText();
	Editor->setFocus();
}

void StoryEditor::newTxFont(const QString &f)
{
	if(!currDoc->UsedFonts.contains(f)) {
		if (!currDoc->AddFont(f)) {
//, prefsManager->appPrefs.AvailFonts[f]->Font)) {
			FontTools->Fonts->RebuildList(currDoc);
			return;
		};
	}
	Editor->prevFont = Editor->CurrFont;
	Editor->CurrFont = f;
	updateUnicodeActions();
	struct PtiSmall hg;
	hg.cfont = Editor->CurrFont;
	Editor->updateSel(2, &hg);
	modifiedText();
	Editor->setFocus();
}

void StoryEditor::newTxSize(double s)
{
	Editor->CurrFontSize = qRound(s * 10.0);
	struct PtiSmall hg;
	hg.csize = Editor->CurrFontSize;
	Editor->updateSel(3, &hg);
	modifiedText();
	Editor->setFocus();
}

void StoryEditor::newTxStyle(int s)
{
	Editor->CurrentStyle = s;
	struct PtiSmall hg;
	hg.cstyle = Editor->CurrentStyle;
	Editor->updateSel(4, &hg);
	Editor->setStyle(s);
	if (s & 4)
	{
		StrokeTools->TxStroke->setEnabled(true);
		StrokeTools->PM1->setEnabled(true);
	}
	else
	{
		StrokeTools->TxStroke->setEnabled(false);
		StrokeTools->PM1->setEnabled(false);
	}
	modifiedText();
	Editor->setFocus();
}

void StoryEditor::newTxScale(int )
{
	int ss = qRound(FontTools->ChScale->value() * 10);
	Editor->CurrTextScale = ss;
	struct PtiSmall hg;
	hg.cscale = Editor->CurrTextScale;
	Editor->updateSel(5, &hg);
	modifiedText();
	Editor->setFocus();
}

void StoryEditor::newTxScaleV(int )
{
	int ss = qRound(FontTools->ChScaleV->value() * 10);
	Editor->CurrTextScaleV = ss;
	struct PtiSmall hg;
	hg.cscalev = Editor->CurrTextScaleV;
	Editor->updateSel(7, &hg);
	modifiedText();
	Editor->setFocus();
}

void StoryEditor::newTxKern(int s)
{
	Editor->CurrTextKern = s;
	struct PtiSmall hg;
	hg.cextra = Editor->CurrTextKern;
	Editor->updateSel(6, &hg);
	modifiedText();
	Editor->setFocus();
}

void StoryEditor::newShadowOffs(int x, int y)
{
	struct PtiSmall hg;
	hg.cshadowx = x;
	hg.cshadowy = y;
	Editor->CurrTextShadowX = x;
	Editor->CurrTextShadowY = y;
	Editor->updateSel(8, &hg);
	modifiedText();
	Editor->setFocus();
}

void StoryEditor::newTxtOutline(int o)
{
	Editor->CurrTextOutline = o;
	struct PtiSmall hg;
	hg.coutline = Editor->CurrTextOutline;
	Editor->updateSel(9, &hg);
	modifiedText();
	Editor->setFocus();
}

void StoryEditor::newTxtUnderline(int p, int w)
{
	struct PtiSmall hg;
	hg.cunderpos = p;
	hg.cunderwidth = w;
	Editor->CurrTextUnderPos = p;
	Editor->CurrTextUnderWidth = w;
	Editor->updateSel(10, &hg);
	modifiedText();
	Editor->setFocus();
}

void StoryEditor::newTxtStrike(int p, int w)
{
	struct PtiSmall hg;
	hg.cstrikepos = p;
	hg.cstrikewidth = w;
	Editor->CurrTextStrikePos = p;
	Editor->CurrTextStrikeWidth = w;
	Editor->updateSel(11, &hg);
	modifiedText();
	Editor->setFocus();
}

void StoryEditor::updateProps(int p, int ch)
{
	ColorList::Iterator it;
	int c = 0;
	struct PtiSmall *hg;
	SEditor::ChList *chars;
	if (Editor->wasMod)
		return;
	if ((p >= static_cast<int>(Editor->StyledText.count())) || (Editor->StyledText.count() == 0) || (!firstSet))
	{
		if (!firstSet)
		{
			Editor->CurrTextFill = currItem->TxtFill;
			Editor->CurrTextFillSh = currItem->ShTxtFill;
			Editor->CurrTextStroke = currItem->TxtStroke;
			Editor->CurrTextStrokeSh = currItem->ShTxtStroke;
			Editor->prevFont = Editor->CurrFont;
			Editor->CurrFont = currItem->font();
			Editor->CurrFontSize = currItem->fontSize();
			Editor->CurrentStyle = currItem->TxTStyle;
			Editor->currentParaStyle = currItem->textAlignment;
			Editor->CurrTextKern = currItem->ExtraV;
			Editor->CurrTextScale = currItem->TxtScale;
			Editor->CurrTextScaleV = currItem->TxtScaleV;
			Editor->CurrTextBase = currItem->TxtBase;
			Editor->CurrTextShadowX = currItem->TxtShadowX;
			Editor->CurrTextShadowY = currItem->TxtShadowY;
			Editor->CurrTextOutline = currItem->TxtOutline;
			Editor->CurrTextUnderPos = currItem->TxtUnderPos;
			Editor->CurrTextUnderWidth = currItem->TxtUnderWidth;
			Editor->CurrTextStrikePos = currItem->TxtStrikePos;
			Editor->CurrTextStrikeWidth = currItem->TxtStrikeWidth;
			c = 0;
			StrokeTools->SetShade(currItem->ShTxtStroke);
			FillTools->SetShade(currItem->ShTxtFill);
			QString b = currItem->TxtFill;
			if ((b != CommonStrings::None) && (!b.isEmpty()))
			{
				c++;
				for (it = currDoc->PageColors.begin(); it != currDoc->PageColors.end(); ++it)
				{
					if (it.key() == b)
						break;
					c++;
				}
			}
			FillTools->SetColor(c);
			c = 0;
			b = currItem->TxtStroke;
			if ((b != CommonStrings::None) && (!b.isEmpty()))
			{
				c++;
				for (it = currDoc->PageColors.begin(); it != currDoc->PageColors.end(); ++it)
				{
					if (it.key() == b)
						break;
					c++;
				}
			}
			StrokeTools->SetColor(c);
			AlignTools->SetAlign(currItem->textAlignment);
			StyleTools->SetKern(currItem->ExtraV);
			StyleTools->SetStyle(currItem->TxTStyle);
			StyleTools->SetShadow(currItem->TxtShadowX, currItem->TxtShadowY);
			StyleTools->setOutline(currItem->TxtOutline);
			StyleTools->setUnderline(currItem->TxtUnderPos, currItem->TxtUnderWidth);
			StyleTools->setStrike(currItem->TxtStrikePos, currItem->TxtStrikeWidth);
			FontTools->SetSize(currItem->fontSize());
			FontTools->SetFont(currItem->font());
			FontTools->SetScale(currItem->TxtScale);
			FontTools->SetScaleV(currItem->TxtScaleV);
		}
		if (Editor->CurrentStyle & 4)
		{
			StrokeTools->TxStroke->setEnabled(true);
			StrokeTools->PM1->setEnabled(true);
		}
		else
		{
			StrokeTools->TxStroke->setEnabled(false);
			StrokeTools->PM1->setEnabled(false);
		}
		Editor->setStyle(Editor->CurrentStyle);
		firstSet = true;
		updateUnicodeActions();
		return;
	}
	chars = Editor->StyledText.at(p);
	Editor->currentParaStyle = Editor->ParagStyles[p];
	if (chars->count() == 0)
	{
		if (Editor->currentParaStyle > 4)
		{
			Editor->prevFont = Editor->CurrFont;
			Editor->CurrFont = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().font()->scName();
			Editor->CurrFontSize = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().fontSize();
			Editor->CurrentStyle = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().effects();
			Editor->CurrTextFill = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().ccolor;
			Editor->CurrTextFillSh = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshade;
			Editor->CurrTextStroke = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cstroke;
			Editor->CurrTextStrokeSh = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshade2;
			Editor->CurrTextShadowX = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshadowx;
			Editor->CurrTextShadowY = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshadowy;
			Editor->CurrTextOutline = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().coutline;
			Editor->CurrTextUnderPos = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cunderpos;
			Editor->CurrTextUnderWidth = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cunderwidth;
			Editor->CurrTextStrikePos = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cstrikepos;
			Editor->CurrTextStrikeWidth = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cstrikewidth;
		}
		Editor->setAlign(Editor->currentParaStyle);
		Editor->setStyle(Editor->CurrentStyle);
	}
	else
	{
		if (Editor->hasSelectedText())
		{
			int PStart, PEnd, SelStart, SelEnd;
			Editor->getSelection(&PStart, &SelStart, &PEnd, &SelEnd);
			if ((SelStart > -1) && (SelStart < static_cast<int>(chars->count())))
				hg = chars->at(SelStart);
			else
				hg = chars->at(QMIN(QMAX(ch-1, 0), static_cast<int>(chars->count())-1));
		}
		else
			hg = chars->at(QMIN(QMAX(ch-1, 0), static_cast<int>(chars->count())-1));
		Editor->CurrTextFill = hg->ccolor;
		Editor->CurrTextFillSh = hg->cshade;
		Editor->CurrTextStroke = hg->cstroke;
		Editor->CurrTextStrokeSh = hg->cshade2;
		Editor->prevFont = Editor->CurrFont;
		Editor->CurrFont = hg->cfont;
		Editor->CurrFontSize = hg->csize;
		Editor->CurrentStyle = hg->cstyle & 1919;
		Editor->CurrTextKern = hg->cextra;
		Editor->CurrTextScale = hg->cscale;
		Editor->CurrTextScaleV = hg->cscalev;
		Editor->CurrTextBase = hg->cbase;
		Editor->CurrTextShadowX = hg->cshadowx;
		Editor->CurrTextShadowY = hg->cshadowy;
		Editor->CurrTextOutline = hg->coutline;
		Editor->CurrTextUnderPos = hg->cunderpos;
		Editor->CurrTextUnderWidth = hg->cunderwidth;
		Editor->CurrTextStrikePos = hg->cstrikepos;
		Editor->CurrTextStrikeWidth = hg->cstrikewidth;
	}
	StrokeTools->SetShade(Editor->CurrTextStrokeSh);
	FillTools->SetShade(Editor->CurrTextFillSh);
	QString b = Editor->CurrTextFill;
	if ((b != CommonStrings::None) && (!b.isEmpty()))
	{
		c++;
		for (it = currDoc->PageColors.begin(); it != currDoc->PageColors.end(); ++it)
		{
			if (it.key() == b)
				break;
			c++;
		}
	}
	FillTools->SetColor(c);
	c = 0;
	b = Editor->CurrTextStroke;
	if ((b != CommonStrings::None) && (!b.isEmpty()))
	{
		c++;
		for (it = currDoc->PageColors.begin(); it != currDoc->PageColors.end(); ++it)
		{
			if (it.key() == b)
				break;
			c++;
		}
	}
	StrokeTools->SetColor(c);
	if (Editor->CurrentStyle & 4)
	{
		StrokeTools->TxStroke->setEnabled(true);
		StrokeTools->PM1->setEnabled(true);
	}
	else
	{
		StrokeTools->TxStroke->setEnabled(false);
		StrokeTools->PM1->setEnabled(false);
	}
	StyleTools->SetKern(Editor->CurrTextKern);
	StyleTools->SetStyle(Editor->CurrentStyle);
	StyleTools->SetShadow(Editor->CurrTextShadowX, Editor->CurrTextShadowY);
	StyleTools->setOutline(Editor->CurrTextOutline);
	StyleTools->setUnderline(Editor->CurrTextUnderPos, Editor->CurrTextUnderWidth);
	StyleTools->setStrike(currItem->TxtStrikePos, currItem->TxtStrikeWidth);
	FontTools->SetSize(Editor->CurrFontSize);
	FontTools->SetFont(Editor->CurrFont);
	FontTools->SetScale(Editor->CurrTextScale);
	FontTools->SetScaleV(Editor->CurrTextScaleV);
	AlignTools->SetAlign(Editor->currentParaStyle);
	updateUnicodeActions();
	updateStatus();
}

void StoryEditor::updateStatus()
{
	QString tmp;
	int p, i;
	Editor->getCursorPosition(&p, &i);
	ParC->setText(tmp.setNum(Editor->StyledText.count()));
	QRegExp rx( "(\\w+)\\b" );
	int pos = 0;
	int counter = 0;
	int counter1 = 0;
	int counter2 = 0;
	while ( pos >= 0 )
	{
		pos = rx.search( Editor->text(p), pos );
		if ( pos > -1 )
		{
			counter++;
			pos += rx.matchedLength();
		}
	}
	WordC->setText(tmp.setNum(counter));
	CharC->setText(tmp.setNum(Editor->text(p).length()-1));
	for (uint a = 0; a < Editor->StyledText.count(); ++a)
	{
		int pos = 0;
		while ( pos >= 0 )
		{
			pos = rx.search( Editor->text(a), pos );
			if ( pos > -1 )
			{
				counter2++;
				pos += rx.matchedLength();
			}
		}
		counter1 += Editor->text(a).length();
	}
	WordC2->setText(tmp.setNum(counter2));
	CharC2->setText(tmp.setNum(Editor->length()));
}

void StoryEditor::Do_insSp()
{
	blockUpdate = true;
	CharSelect *dia = new CharSelect(this, currItem, Editor->CurrFont);
	dia->exec();
	if (!dia->getCharacters().isEmpty())
	{
		Editor->insChars(dia->getCharacters());
		Editor->insert(dia->getCharacters());
	}
	delete dia;
	blockUpdate = false;
}

void StoryEditor::Do_fontPrev()
{
	blockUpdate = true;
	QString retval;
	if (PluginManager::instance().DLLexists("fontpreview"))
	{
		bool result = PluginManager::instance().callSpecialActionPlugin("fontpreview", Editor->CurrFont, retval);
		if (result && !retval.isEmpty())
		{
			sDebug("Got retval");
			newTxFont(retval);
			FontTools->SetFont(retval);
		}
		else
			sDebug("No retval");
	}
	blockUpdate = false;
}

void StoryEditor::Do_leave2()
{
	updateTextFrame();
	result = QDialog::Accepted;
	setCurrentDocumentAndItem(currDoc, NULL);
	hide();
	blockUpdate = false;
}

void StoryEditor::Do_leave()
{
	if (textChanged)
	{
		blockUpdate = true;
		int t = ScMessageBox::warning(this, CommonStrings::trWarning,
		                             tr("Do you really want to lose all your changes?"),
		                             QMessageBox::Yes, QMessageBox::No, QMessageBox::NoButton);
		qApp->processEvents();
		if (t == QMessageBox::No)
		{
			blockUpdate = false;
			return;
		}
	}
	result = QDialog::Rejected;
	setCurrentDocumentAndItem(currDoc, NULL);
	hide();
	blockUpdate = false;
	//qApp->exit_loop();
}

/*! Saves the document with editation continued. Signal called from menu.
  05/28/04 petr vanek
  */
void StoryEditor::Do_saveDocument()
{
	updateTextFrame();
	ScMW->slotFileSave();
}

bool StoryEditor::Do_new()
{
	if (Editor->length() != 0)
	{
		blockUpdate = true;
		int t = ScMessageBox::warning(this, CommonStrings::trWarning,
	                             tr("Do you really want to clear all your text?"),
	                             QMessageBox::Yes, QMessageBox::No, QMessageBox::NoButton);
		qApp->processEvents();
		if (t == QMessageBox::No)
		{
			blockUpdate = false;
			return false;
		}
	}
	Editor->StyledText.clear();
	Editor->ParagStyles.clear();
	Editor->clear();
	Editor->setUndoRedoEnabled(false);
	Editor->setUndoRedoEnabled(true);
	Editor->setCursorPosition(0, 0);
	seActions["fileRevert"]->setEnabled(false);
	seActions["editCopy"]->setEnabled(false);
	seActions["editCut"]->setEnabled(false);
	seActions["editClear"]->setEnabled(false);
//	textChanged = false;
	EditorBar->setRepaint(true);
	EditorBar->doRepaint();
	updateProps(0, 0);
	updateStatus();
	blockUpdate = false;
	return true;
}

void StoryEditor::slotFileRevert()
{
	if (Do_new())
	{
		Editor->loadItemText(currItem);
		updateStatus();
		EditorBar->setRepaint(true);
		EditorBar->doRepaint();
		Editor->sync();
		Editor->repaintContents();
	}
}

void StoryEditor::Do_selectAll()
{
	if (Editor->StyledText.count() == 0)
		return;
	if (Editor->StyledText.count() > 1)
		Editor->setSelection(0, 0, Editor->StyledText.count()-1, Editor->StyledText.at(Editor->StyledText.count()-1)->count());
	else
		Editor->setSelection(0, 0, 0, Editor->StyledText.at(0)->count());
}

void StoryEditor::Do_copy()
{
	Editor->copy();
}

void StoryEditor::Do_paste()
{
	Editor->paste();
}

void StoryEditor::Do_cut()
{
	Editor->cut();
}

void StoryEditor::Do_del()
{
	if (Editor->StyledText.count() == 0)
		return;
	EditorBar->setRepaint(false);
	if (Editor->hasSelectedText())
	{
		Editor->deleteSel();
		Editor->removeSelectedText();
	}
	EditorBar->setRepaint(true);
	EditorBar->doRepaint();
}

void StoryEditor::CopyAvail(bool u)
{
	seActions["editCopy"]->setEnabled(u);
	seActions["editCut"]->setEnabled(u);
	seActions["editClear"]->setEnabled(u);
	seActions["editCopy"]->setEnabled(Editor->tBuffer.length() != 0);
}

void StoryEditor::PasteAvail()
{
	seActions["editPaste"]->setEnabled(true);
}

void StoryEditor::updateTextFrame()
{
	//Return immediately if we dont have to update the frame
	if (!textChanged)
		return;
	PageItem *nextItem = currItem;
	while (nextItem != 0)
	{
		if (nextItem->BackBox != 0)
			nextItem = nextItem->BackBox;
		else
			break;
	}
	PageItem* nb2 = nextItem;
	while (nb2 != 0)
	{
#ifndef NLS_PROTO
		for (ScText *it = nb2->itemText.first(); it != 0; it = nb2->itemText.next())
		{
			if ((it->ch == QChar(25)) && (it->cembedded != 0))
			{
				QPtrList<PageItem> emG;
				emG.clear();
				emG.append(it->cembedded);
				if (it->cembedded->Groups.count() != 0)
				{
					for (uint ga=0; ga<Editor->FrameItems.count(); ++ga)
					{
						if (Editor->FrameItems.at(ga)->Groups.count() != 0)
						{
							if (Editor->FrameItems.at(ga)->Groups.top() == it->cembedded->Groups.top())
							{
								if (Editor->FrameItems.at(ga)->ItemNr != it->cembedded->ItemNr)
								{
									if (emG.find(Editor->FrameItems.at(ga)) == -1)
										emG.append(Editor->FrameItems.at(ga));
								}
							}
						}
					}
				}
				for (uint em = 0; em < emG.count(); ++em)
				{
					currDoc->FrameItems.remove(emG.at(em));
				}
			}
		}
#endif
		nb2->itemText.clear();
		nb2->CPos = 0;
		nb2->Dirty = false;
		nb2 = nb2->NextBox;
	}
	Editor->saveItemText(nextItem);
	QPtrList<PageItem> FrameItemsDel;
	FrameItemsDel.setAutoDelete(true);
	for (uint a = 0; a < Editor->FrameItems.count(); ++a)
	{
		if (currDoc->FrameItems.findRef(Editor->FrameItems.at(a)) == -1)
			FrameItemsDel.append(Editor->FrameItems.at(a));
	}
	for (uint a = 0; a < FrameItemsDel.count(); ++a)
	{
		Editor->FrameItems.remove(FrameItemsDel.at(a));
	}
	FrameItemsDel.clear();
	currDoc->updateFrameItems();
	bool rep = currDoc->RePos;
	currDoc->RePos = true;
	QPixmap pgPix(1, 1);
	ScPainter *painter = new ScPainter(&pgPix, 1, 1);
	painter->translate(0.5, 0.5);
	nextItem->DrawObj(painter, QRect(0, 0, 1, 1));
	painter->end();
	delete painter;
	currDoc->RePos = rep;
	nb2 = nextItem;
	while (nb2 != 0)
	{
		nb2->Dirty = false;
		nb2 = nb2->NextBox;
	}
	ScMW->view->DrawNew();
	textChanged = false;
	seActions["fileRevert"]->setEnabled(false);
	seActions["editUpdateFrame"]->setEnabled(false);
	emit DocChanged();
}

void StoryEditor::SearchText()
{
	blockUpdate = true;
	EditorBar->setRepaint(false);
	SearchReplace* dia = new SearchReplace(this, currDoc, currItem, false);
	dia->exec();
	delete dia;
	qApp->processEvents();
	blockUpdate = false;
	EditorBar->setRepaint(true);
	EditorBar->doRepaint();
}

void StoryEditor::slotEditStyles()
{
	blockUpdate = true;
	EditorBar->setRepaint(false);
	int p, i;
	Editor->getCursorPosition(&p, &i);
	disconnect(Editor, SIGNAL(cursorPositionChanged(int, int)), this, SLOT(updateProps(int, int)));
	disconnect(AlignTools, SIGNAL(newStyle(int)), this, SLOT(newAlign(int)));
	disconnect(AlignTools, SIGNAL(NewAlign(int)), this, SLOT(newAlign(int)));
	//emit EditSt();

	StilFormate *dia = new StilFormate(this, currDoc);
	connect(dia, SIGNAL(saveStyle(StilFormate *)), ScMW, SLOT(saveStyles(StilFormate *)));
	if (dia->exec())
		ScMW->saveStyles(dia);
	disconnect(dia, SIGNAL(saveStyle(StilFormate *)), ScMW, SLOT(saveStyles(StilFormate *)));
	delete dia;

	AlignTools->Spal->setFormats(currDoc);
	AlignTools->SetAlign(Editor->currentParaStyle);
	connect(AlignTools, SIGNAL(newStyle(int)), this, SLOT(newAlign(int)));
	connect(AlignTools, SIGNAL(NewAlign(int)), this, SLOT(newAlign(int)));
	Editor->setCursorPosition(p, i);
	updateProps(p, i);
	connect(Editor, SIGNAL(cursorPositionChanged(int, int)), this, SLOT(updateProps(int, int)));
	Editor->sync();
	Editor-> repaintContents();
	EditorBar->setRepaint(true);
	EditorBar->doRepaint();
	qApp->processEvents();
	blockUpdate = false;
}

void StoryEditor::newAlign(int st)
{
	Editor->currentParaStyle = st;
	changeAlign(st);
}

void StoryEditor::changeAlignSB(int pa, int align)
{
	Editor->currentParaStyle = align;
	(*Editor->ParagStyles.at(pa)) = Editor->currentParaStyle;
	if (Editor->StyledText.count() != 0)
	{
		disconnect(Editor, SIGNAL(cursorPositionChanged(int, int)), this, SLOT(updateProps(int, int)));
		SEditor::ChList *chars;
		(*Editor->ParagStyles.at(pa)) = Editor->currentParaStyle;
		if (Editor->StyledText.at(pa)->count() > 0)
		{
			chars = Editor->StyledText.at(pa);
			for (uint s = 0; s < chars->count(); ++s)
			{
				if (Editor->currentParaStyle > 4)
				{
					if (currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().font() != NULL)
					{
						chars->at(s)->cfont = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().font()->scName();
						chars->at(s)->csize = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().fontSize();
						chars->at(s)->cstyle &= ~1919;
						chars->at(s)->cstyle |= currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().effects();
						chars->at(s)->ccolor = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().ccolor;
						chars->at(s)->cshade = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshade;
						chars->at(s)->cstroke = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cstroke;
						chars->at(s)->cshade2 = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshade2;
						chars->at(s)->cshadowx = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshadowx;
						chars->at(s)->cshadowy = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshadowy;
						chars->at(s)->coutline = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().coutline;
						chars->at(s)->cunderpos = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cunderpos;
						chars->at(s)->cunderwidth = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cunderwidth;
						chars->at(s)->cstrikepos = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cstrikepos;
						chars->at(s)->cstrikewidth = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cstrikewidth;
					}
				}
				if ((Editor->currentParaStyle < 5) && (chars->at(s)->cab > 4))
				{
					chars->at(s)->ccolor = currItem->TxtFill;
					chars->at(s)->cshade = currItem->ShTxtFill;
					chars->at(s)->cstroke = currItem->TxtStroke;
					chars->at(s)->cshade2 = currItem->ShTxtStroke;
					chars->at(s)->cfont = currItem->font();
					chars->at(s)->csize = currItem->fontSize();
					chars->at(s)->cstyle &= ~1919;
					chars->at(s)->cstyle |= currItem->TxTStyle;
					chars->at(s)->cshadowx = currItem->TxtShadowX;
					chars->at(s)->cshadowy = currItem->TxtShadowY;
					chars->at(s)->coutline = currItem->TxtOutline;
					chars->at(s)->cunderpos = currItem->TxtUnderPos;
					chars->at(s)->cunderwidth = currItem->TxtUnderWidth;
					chars->at(s)->cstrikepos = currItem->TxtStrikePos;
					chars->at(s)->cstrikewidth = currItem->TxtStrikeWidth;
				}
				chars->at(s)->cab = Editor->currentParaStyle;
			}
			Editor->updateFromChars(pa);
		}
		Editor->setCursorPosition(pa, 0);
		updateProps(pa, 0);
		Editor->ensureCursorVisible();
		connect(Editor, SIGNAL(cursorPositionChanged(int, int)), this, SLOT(updateProps(int, int)));
	}
	else
	{
		if (Editor->currentParaStyle > 4)
		{
			if (currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().font() != NULL)
			{
				Editor->prevFont = Editor->CurrFont;
				Editor->CurrFont = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().font()->scName();
				Editor->CurrFontSize = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().fontSize();
				Editor->CurrentStyle = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().effects();
				Editor->CurrTextFill = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().ccolor;
				Editor->CurrTextFillSh = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshade;
				Editor->CurrTextStroke = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cstroke;
				Editor->CurrTextStrokeSh = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshade2;
				Editor->CurrTextShadowX = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshadowx;
				Editor->CurrTextShadowY = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshadowy;
				Editor->CurrTextOutline = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().coutline;
				Editor->CurrTextUnderPos = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cunderpos;
				Editor->CurrTextUnderWidth = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cunderwidth;
				Editor->CurrTextStrikePos = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cstrikepos;
				Editor->CurrTextStrikeWidth = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cstrikewidth;
			}
		}
		else
		{
			Editor->CurrTextFill = currItem->TxtFill;
			Editor->CurrTextFillSh = currItem->ShTxtFill;
			Editor->CurrTextStroke = currItem->TxtStroke;
			Editor->CurrTextStrokeSh = currItem->ShTxtStroke;
			Editor->prevFont = Editor->CurrFont;
			Editor->CurrFont = currItem->font();
			Editor->CurrFontSize = currItem->fontSize();
			Editor->CurrentStyle = currItem->TxTStyle;
			Editor->CurrTextKern = currItem->ExtraV;
			Editor->CurrTextScale = currItem->TxtScale;
			Editor->CurrTextScaleV = currItem->TxtScaleV;
			Editor->CurrTextBase = currItem->TxtBase;
			Editor->CurrTextShadowX = currItem->TxtShadowX;
			Editor->CurrTextShadowY = currItem->TxtShadowY;
			Editor->CurrTextOutline = currItem->TxtOutline;
			Editor->CurrTextUnderPos = currItem->TxtUnderPos;
			Editor->CurrTextUnderWidth = currItem->TxtUnderWidth;
			Editor->CurrTextStrikePos = currItem->TxtStrikePos;
			Editor->CurrTextStrikeWidth = currItem->TxtStrikeWidth;
		}
		Editor->setStyle(Editor->CurrentStyle);
		if (Editor->CurrentStyle & 4)
		{
			StrokeTools->TxStroke->setEnabled(true);
			StrokeTools->PM1->setEnabled(true);
		}
		else
		{
			StrokeTools->TxStroke->setEnabled(false);
			StrokeTools->PM1->setEnabled(false);
		}
		Editor->setCursorPosition(0, 0);
		updateProps(0, 0);
	}
	Editor->sync();
	Editor-> repaintContents();
	modifiedText();
	Editor->setFocus();
}

void StoryEditor::changeAlign(int )
{
	int p, i;
	bool sel = false;
	Editor->getCursorPosition(&p, &i);
	if (Editor->StyledText.count() != 0)
	{
		disconnect(Editor, SIGNAL(cursorPositionChanged(int, int)), this, SLOT(updateProps(int, int)));
		int PStart, PEnd, SelStart, SelEnd, PStart2, PEnd2, SelStart2, SelEnd2;
		SEditor::ChList *chars;
		if (Editor->hasSelectedText())
		{
			Editor->getSelection(&PStart, &SelStart, &PEnd, &SelEnd);
			PStart2 = PStart;
			PEnd2 = PEnd;
			SelStart2 = SelStart;
			SelEnd2 = SelEnd;
			sel = true;
		}
		else
		{
			PStart = p;
			PEnd = p;
		}
		for (int pa = PStart; pa < QMIN(PEnd+1, static_cast<int>(Editor->StyledText.count())); ++pa)
		{
			(*Editor->ParagStyles.at(pa)) = Editor->currentParaStyle;
			if (Editor->StyledText.at(pa)->count() > 0)
			{
				chars = Editor->StyledText.at(pa);
				for (uint s = 0; s < chars->count(); ++s)
				{
					if (Editor->currentParaStyle > 4)
					{
						if (currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().font() != NULL)
						{
							chars->at(s)->cfont = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().font()->scName();
							chars->at(s)->csize = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().fontSize();
							chars->at(s)->cstyle &= ~1919;
							chars->at(s)->cstyle |= currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().effects();
							chars->at(s)->ccolor = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().ccolor;
							chars->at(s)->cshade = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshade;
							chars->at(s)->cstroke = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cstroke;
							chars->at(s)->cshade2 = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshade2;
							chars->at(s)->cshadowx = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshadowx;
							chars->at(s)->cshadowy = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshadowy;
							chars->at(s)->coutline = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().coutline;
							chars->at(s)->cunderpos = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cunderpos;
							chars->at(s)->cunderwidth = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cunderwidth;
							chars->at(s)->cstrikepos = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cstrikepos;
							chars->at(s)->cstrikewidth = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cstrikewidth;
						}
					}
					if ((Editor->currentParaStyle < 5) && (chars->at(s)->cab > 4))
					{
						chars->at(s)->ccolor = currItem->TxtFill;
						chars->at(s)->cshade = currItem->ShTxtFill;
						chars->at(s)->cstroke = currItem->TxtStroke;
						chars->at(s)->cshade2 = currItem->ShTxtStroke;
						chars->at(s)->cfont = currItem->font();
						chars->at(s)->csize = currItem->fontSize();
						chars->at(s)->cstyle &= ~1919;
						chars->at(s)->cstyle |= currItem->TxTStyle;
						chars->at(s)->cshadowx = currItem->TxtShadowX;
						chars->at(s)->cshadowy = currItem->TxtShadowY;
						chars->at(s)->coutline = currItem->TxtOutline;
						chars->at(s)->cunderpos = currItem->TxtUnderPos;
						chars->at(s)->cunderwidth = currItem->TxtUnderWidth;
						chars->at(s)->cstrikepos = currItem->TxtStrikePos;
						chars->at(s)->cstrikewidth = currItem->TxtStrikeWidth;
					}
					chars->at(s)->cab = Editor->currentParaStyle;
				}
			Editor->updateFromChars(pa);
			}
		}
		if (sel)
			Editor->setSelection(PStart2, SelStart2, PEnd2, SelEnd2);
		Editor->setCursorPosition(p, i);
		Editor->ensureCursorVisible();
		updateProps(p, i);
		connect(Editor, SIGNAL(cursorPositionChanged(int, int)), this, SLOT(updateProps(int, int)));
	}
	else
	{
		if (Editor->currentParaStyle > 4)
		{
			if (currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().font() != NULL)
			{
				Editor->prevFont = Editor->CurrFont;
				Editor->CurrFont = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().font()->scName();
				Editor->CurrFontSize = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().fontSize();
				Editor->CurrentStyle = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().effects();
				Editor->CurrTextFill = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().ccolor;
				Editor->CurrTextFillSh = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshade;
				Editor->CurrTextStroke = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cstroke;
				Editor->CurrTextStrokeSh = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshade2;
				Editor->CurrTextShadowX = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshadowx;
				Editor->CurrTextShadowY = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cshadowy;
				Editor->CurrTextOutline = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().coutline;
				Editor->CurrTextUnderPos = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cunderpos;
				Editor->CurrTextUnderWidth = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cunderwidth;
				Editor->CurrTextStrikePos = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cstrikepos;
				Editor->CurrTextStrikeWidth = currDoc->docParagraphStyles[Editor->currentParaStyle].charStyle().cstrikewidth;
			}
		}
		else
		{
			Editor->CurrTextFill = currItem->TxtFill;
			Editor->CurrTextFillSh = currItem->ShTxtFill;
			Editor->CurrTextStroke = currItem->TxtStroke;
			Editor->CurrTextStrokeSh = currItem->ShTxtStroke;
			Editor->prevFont = Editor->CurrFont;
			Editor->CurrFont = currItem->font();
			Editor->CurrFontSize = currItem->fontSize();
			Editor->CurrentStyle = currItem->TxTStyle;
			Editor->CurrTextKern = currItem->ExtraV;
			Editor->CurrTextScale = currItem->TxtScale;
			Editor->CurrTextScaleV = currItem->TxtScaleV;
			Editor->CurrTextBase = currItem->TxtBase;
			Editor->CurrTextShadowX = currItem->TxtShadowX;
			Editor->CurrTextShadowY = currItem->TxtShadowY;
			Editor->CurrTextOutline = currItem->TxtOutline;
			Editor->CurrTextUnderPos = currItem->TxtUnderPos;
			Editor->CurrTextUnderWidth = currItem->TxtUnderWidth;
			Editor->CurrTextStrikePos = currItem->TxtStrikePos;
			Editor->CurrTextStrikeWidth = currItem->TxtStrikeWidth;
		}
		Editor->setStyle(Editor->CurrentStyle);
		if (Editor->CurrentStyle & 4)
		{
			StrokeTools->TxStroke->setEnabled(true);
			StrokeTools->PM1->setEnabled(true);
		}
		else
		{
			StrokeTools->TxStroke->setEnabled(false);
			StrokeTools->PM1->setEnabled(false);
		}
		Editor->setCursorPosition(0, 0);
		updateProps(0, 0);
	}
	modifiedText();
	Editor->sync();
	Editor-> repaintContents();
	Editor->setFocus();
}

void StoryEditor::modifiedText()
{
	textChanged = true;
	firstSet = true;
	seActions["fileRevert"]->setEnabled(true);
	seActions["editUpdateFrame"]->setEnabled(true);
	seActions["editPaste"]->setEnabled(Editor->tBuffer.length() != 0);
	updateStatus();
}

void StoryEditor::LoadTextFile()
{
	if (Do_new())
	{
		EditorBar->setRepaint(false);
		QString LoadEnc = "";
		QString fileName = "";
		PrefsContext* dirs = prefsManager->prefsFile->getContext("dirs");
		QString wdir = dirs->get("story_load", prefsManager->documentDir());
		CustomFDialog dia(this, wdir, tr("Open"), tr("Text Files (*.txt);;All Files(*)"), false, true, false, true);
		if (dia.exec() != QDialog::Accepted)
			return;
		LoadEnc = dia.TxCodeM->currentText();
		fileName =  dia.selectedFile();
		if (!fileName.isEmpty())
		{
			dirs->set("story_load", fileName.left(fileName.findRev("/")));
			Serializer *ss = new Serializer(fileName);
			if (ss->Read(LoadEnc))
			{
				QString data = ss->GetObjekt();
				data.replace(QRegExp("\r"), "");
				data.replace(QRegExp("\n"), QChar(13));
				Editor->loadText(data, currItem);
				seActions["editPaste"]->setEnabled(false);
				seActions["editCopy"]->setEnabled(false);
				seActions["editCut"]->setEnabled(false);
				seActions["editClear"]->setEnabled(false);
				delete ss;
			}
		}
		EditorBar->setRepaint(true);
		EditorBar->doRepaint();
	}
	Editor->sync();
	Editor-> repaintContents();
}

void StoryEditor::SaveTextFile()
{
	blockUpdate = true;
	QString LoadEnc = "";
	QString fileName = "";
	PrefsContext* dirs = prefsManager->prefsFile->getContext("dirs");
	QString wdir = dirs->get("story_save", prefsManager->appPrefs.DocDir);
	CustomFDialog dia(this, wdir, tr("Save as"), tr("Text Files (*.txt);;All Files(*)"), false, false, false, true);
	qApp->processEvents();
	if (dia.exec() != QDialog::Accepted)
	{
		blockUpdate = false;
		return;
	}
	LoadEnc = dia.TxCodeM->currentText();
	fileName =  dia.selectedFile();
	if (!fileName.isEmpty())
	{
		dirs->set("story_save", fileName.left(fileName.findRev("/")));
		Serializer *ss = new Serializer(fileName);
		ss->Objekt = Editor->text();
		ss->Write(LoadEnc);
		delete ss;
	}
	blockUpdate = false;
}

bool StoryEditor::textDataChanged() const
{
	return textChanged;
}

PageItem* StoryEditor::currentItem() const
{
	return currItem;
}

ScribusDoc* StoryEditor::currentDocument() const
{
	return currDoc;
}

void StoryEditor::specialActionKeyEvent(QString actionName, int unicodevalue)
{
	Editor->insChars(QString(QChar(unicodevalue)));
	QString guiInsertString=QChar(unicodevalue);
	bool setColor=false;
	if (unicodevalue == seActions["unicodePageNumber"]->actionInt())
	{
		setColor=true;
		guiInsertString="#";
	}
	if (unicodevalue == seActions["unicodeNonBreakingSpace"]->actionInt())
	{
		setColor=true;
		guiInsertString="_";
	}
	if (unicodevalue == seActions["unicodeFrameBreak"]->actionInt())
	{
		setColor=true;
		guiInsertString="|";
	}
	if (unicodevalue == seActions["unicodeNewLine"]->actionInt())
	{
		setColor=true;
		guiInsertString="*";
	}
	if (unicodevalue == seActions["unicodeColumnBreak"]->actionInt())
	{
		setColor=true;
		guiInsertString="^";
	}
	if (unicodevalue == seActions["unicodeNonBreakingHyphen"]->actionInt())
	{
		setColor=true;
		guiInsertString="=";
	}
	if (setColor)
		Editor->setFarbe(true);
	Editor->insert(guiInsertString);
	if (setColor)
		Editor->setFarbe(false);
	modifiedText();
	EditorBar->setRepaint(true);
	EditorBar->doRepaint();
}

void StoryEditor::updateUnicodeActions()
{
	if (Editor->prevFont!=Editor->CurrFont)
		ScMW->actionManager->enableUnicodeActions(&seActions, true, Editor->CurrFont);	
}
