/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          bookmwin.cpp  -  description
                             -------------------
    begin                : Mon Feb 11 2002
    copyright            : (C) 2002 by Franz Schmid
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

#include "bookmwin.h"
#include "bookmwin.moc"
#include <qpixmap.h>
#include <qdragobject.h>
#include <qpopupmenu.h>
#include <qcursor.h>
#include <qheader.h>

extern QPixmap loadIcon(QString nam);

BookMItem::BookMItem(QListViewItem* parent, struct ScribusDoc::BookMa *Bm) : QListViewItem(parent)
{
	SetUp(Bm);
}

BookMItem::BookMItem(QListViewItem* parent, QListViewItem* after, struct ScribusDoc::BookMa *Bm) : QListViewItem(parent, after)
{
	SetUp(Bm);
}

BookMItem::BookMItem(QListView* parent, QListViewItem* after, struct ScribusDoc::BookMa *Bm) : QListViewItem(parent, after)
{
	SetUp(Bm);
}

BookMItem::BookMItem(QListView* parent, struct ScribusDoc::BookMa *Bm) : QListViewItem(parent)
{
	SetUp(Bm);
}

BookMItem::BookMItem(QListView* parent, QListViewItem* after, int nr, PageItem* PObject) : QListViewItem(parent, after)
{
	ItemNr = nr;
	PageObject = PObject;
	PdfObj = 0;
	Action = "";
	First = 0;
	Last = 0;
	Prev = 0;
	Next = 0;
	Pare = 0;
}

BookMItem::BookMItem(QListView* parent, int nr, PageItem* PObject) : QListViewItem(parent)
{
	ItemNr = nr;
	PageObject = PObject;
	PdfObj = 0;
	Action = "";
	First = 0;
	Last = 0;
	Prev = 0;
	Next = 0;
	Pare = 0;
}

void BookMItem::SetUp(struct ScribusDoc::BookMa *Bm)
{
	ItemNr = Bm->ItemNr;
	PdfObj = 0;
	Action = Bm->Aktion;
	First = Bm->First;
	Last = Bm->Last;
	Prev = Bm->Prev;
	Next = Bm->Next;
	Pare = Bm->Parent;
	Titel = Bm->Title;
	PageObject = Bm->PageObject;
	setText(0, Bm->Text);
}

QString BookMItem::key(int, bool) const
{
	QString tmp;
	tmp.sprintf("%5d", ItemNr);
	return tmp;
}


BookMView::BookMView(QWidget* parent) : QListView(parent)
{
	NrItems = 0;
	Mpressed = false;
	DraggedI = 0;
	First = 1;
	Last = 0;
	setAcceptDrops(true);
	viewport()->setAcceptDrops(true);
	setRootIsDecorated(true);
	idBookMarkCol=addColumn("Bookmarks");
	setResizeMode(QListView::AllColumns);
	setSelectionMode(QListView::NoSelection);
	setSorting(-1,1);
	languageChange();
}

void BookMView::AddPageItem(PageItem* ite)
{
	QString bm = "";
	QString bm2 = "";
	QString cc;
	for (int d = 0; d < ite->itemText.length(); ++d)
	{
		cc = ite->itemText.text(d);
		if ((cc == QChar(13)) || (cc == QChar(10)))
			break;
		if (cc == QChar(29))
			cc = " ";
		if ((cc == "(") || (cc == ")") || (cc == "\\"))
			bm2 += "\\";
		bm += cc;
		bm2 += cc;
	}
	AddItem(bm, bm2, ite);
	Last = NrItems;
}

void BookMView::contentsMouseReleaseEvent(QMouseEvent *e)
{
	if (Mpressed)
	{
		QListViewItem *i = itemAt(contentsToViewport(e->pos()));
		QPoint p = contentsToViewport(e->pos());
		if ( i ) 
		{
			if ( p.x() > header()->cellPos( header()->mapToActual( 0 ) ) + treeStepSize() * ( i->depth() + ( rootIsDecorated() ? 1 : 0) ) + itemMargin() ||
					p.x() < header()->cellPos( header()->mapToActual( 0 ) ) ) 
			{
				BookMItem *ip;
				ip = (BookMItem*)i;
				emit SelectElement(ip->PageObject);
			}
		}
	}
	Mpressed = false;
}

void BookMView::contentsMousePressEvent(QMouseEvent* e)
{
	QListView::contentsMousePressEvent(e);
	QListViewItem *i = itemAt(contentsToViewport(e->pos()));
	if (i)
	{
		Mpos = e->pos();
		Mpressed = true;
	}
}

void BookMView::contentsMouseMoveEvent(QMouseEvent* e)
{
	if ((Mpressed) && ((Mpos - e->pos()).manhattanLength() > 4))
	{
		Mpressed = false;
		QListViewItem *i = itemAt(contentsToViewport(Mpos));
		if (i)
		{
			DraggedI = (BookMItem*)i;
			QDragObject *dr = new QTextDrag(i->text(0), this, "BMD");
			dr->drag();
		}
	}
}

void BookMView::contentsDropEvent(QDropEvent *e)
{
	QString text;
	if (!QTextDrag::decode(e, text))
	{
		e->ignore();
		return;
    }
	int ins, mov, mret, can;
	QListViewItem *pp;
	QListViewItem *lv;
	BookMItem *ip;
	BookMItem *ip2;
	BookMItem *ite;
	QListViewItem *item = itemAt(contentsToViewport(e->pos()));
	BookMItem *Bite = (BookMItem*)item;
	if ((item) && (DraggedI != 0))
  	{
  		if ((BookMItem*)item != DraggedI)
  		{
  			pp = item->parent();
  			while (pp)
  			{
  				if (pp == DraggedI)
  					return;
  				pp = pp->parent();
  			}
			QPopupMenu *pmenu = new QPopupMenu();
			mov = pmenu->insertItem( tr("Move Bookmark"));
			ins = pmenu->insertItem( tr("Insert Bookmark"));
			can = pmenu->insertItem( tr("Cancel"));
			mret = pmenu->exec(QCursor::pos());
			if (mret != can)
			{
				if (mret == ins)
				{
					lv = DraggedI->parent();
					lv = lv ? lv->firstChild() : firstChild();
					if (!DraggedI->Prev == 0)
					{
						while (lv)
						{
							ip = (BookMItem*)lv;
							if (ip->ItemNr == DraggedI->Prev)
								break;
							lv = lv->nextSibling();
						}
						ip = (BookMItem*)lv;
						lv = DraggedI->nextSibling();
						if (lv)
						{
							ip2 = (BookMItem*)lv;
							ip2->Prev = ip->ItemNr;
							ip->Next = ip2->ItemNr;
						}
						else
							ip->Next = 0;
					}
					lv = DraggedI->parent();
					item->insertItem(DraggedI);
					lv ? lv = lv->firstChild() : lv = firstChild();
					if (DraggedI->Prev == 0)
					{
						ip = (BookMItem*)lv;
						if (ip)
							ip->Prev = 0;
					}
					QListViewItemIterator it(this);
					for ( ; it.current(); ++it)
					{
						ite = (BookMItem*)it.current();
						if (ite->ItemNr == DraggedI->ItemNr)
							DraggedI = ite;
					}
					DraggedI->Pare = Bite->ItemNr;
					ip = (BookMItem*)item->firstChild();
					Bite->First = ip->ItemNr;
					lv = item->firstChild();
					while (lv)
					{
						if (!lv->nextSibling())
						{
							ip = (BookMItem*)lv;
							Bite->Last = ip->ItemNr;
							break;
						}
						lv = lv->nextSibling();
					}
					if (DraggedI->nextSibling())
					{
						ip = (BookMItem*)DraggedI->nextSibling();
						DraggedI->Next = ip->ItemNr;
						ip->Prev = DraggedI->ItemNr;
					}
					else
						DraggedI->Next = 0;
					if (DraggedI != item->firstChild())
					{
						ip = (BookMItem*)DraggedI->itemAbove();
						DraggedI->Prev = ip->ItemNr;
						ip->Next = DraggedI->ItemNr;
					}
					else
						DraggedI->Prev = 0;
					emit changed();
				}
				if (mret == mov)
				{
					lv = DraggedI->parent();
					lv ? lv = lv->firstChild() : lv = firstChild();
					if (DraggedI->Prev == 0)
					{
						ip = (BookMItem*)lv->nextSibling();
						if (ip)
							ip->Prev = 0;
					}
					else
					{
						while (lv)
						{
							ip = (BookMItem*)lv;
							if (ip->ItemNr == DraggedI->Prev)
								break;
							lv = lv->nextSibling();
						}
					}
					ip = (BookMItem*)lv;
					lv = DraggedI->nextSibling();
					if (lv)
					{
						ip2 = (BookMItem*)lv;
						ip2->Prev = ip->ItemNr;
						ip->Next = ip2->ItemNr;
					}
					else
						ip->Next = 0;
					lv = DraggedI->parent();
					DraggedI->moveItem(item);
					lv ? lv = lv->firstChild() : lv = firstChild();
					if (DraggedI->Prev == 0)
					{
						ip = (BookMItem*)lv;
						if (ip)
							ip->Prev = 0;
					}
					QListViewItemIterator it2(this);
					for ( ; it2.current(); ++it2)
					{
						ite = (BookMItem*)it2.current();
						if (ite->ItemNr == DraggedI->ItemNr)
							DraggedI = ite;
					}
					ip = (BookMItem*)item;
					DraggedI->Pare = ip->Pare;
					DraggedI->Prev = ip->ItemNr;
					ip->Next = DraggedI->ItemNr;
					if (DraggedI->nextSibling())
					{
						ip = (BookMItem*)DraggedI->nextSibling();
						DraggedI->Next = ip->ItemNr;
						ip->Prev = DraggedI->ItemNr;
					}
					else
						DraggedI->Next = 0;
					lv = item->parent();
					if (lv)
					{
						ip = (BookMItem*)lv->firstChild();
						ip2 = (BookMItem*)lv;
						ip2->First = ip->ItemNr;
						lv = lv->firstChild();
						while (lv)
						{
							if (!lv->nextSibling())
							{
								ip = (BookMItem*)lv;
								ip2->Last = ip->ItemNr;
								break;
							}
							lv = lv->nextSibling();
						}
					}
					emit changed();
				}
				emit MarkMoved();
  			}
			delete pmenu;	
  			DraggedI = 0;
  		}
  	}
}

void BookMView::contentsDragMoveEvent(QDragMoveEvent *e)
{
	QString text;
	if (!QTextDrag::decode(e, text))
	{
		e->ignore();
		return;
    }
	QListViewItem *item = itemAt(contentsToViewport(e->pos()));
	if (item)
  	{
		setSelected(item, true);
		e->accept();
  	}
	else
		e->ignore();
}

void BookMView::AddItem(QString text, QString Tit, PageItem *PageObject)
{
	QListViewItem *lv = firstChild();
	while (lv)
	{
  		if (!lv->nextSibling())
  			break;
  		lv = lv->nextSibling();
  	}
	BookMItem *ip;
	BookMItem *ite;
	if (lv)
		ite = new BookMItem(this, lv, NrItems+1, PageObject);
	else
		ite = new BookMItem(this, NrItems+1, PageObject);
	ite->setText(0, text);
	ite->Titel = Tit;
	ite->Next = 0;
	if (lv)
  	{
  		ip = (BookMItem*)lv;
  		ip->Next = ite->ItemNr;
  		ite->Prev = ip->ItemNr;
  	}
	NrItems++;
}

void BookMView::DeleteItem(PageItem *pObject)
{
	BookMItem *ite;
	int nr;
	QListViewItemIterator itx(this);
	for ( ; itx.current(); ++itx)
	{
		ite = (BookMItem*)itx.current();
		if (ite->PageObject == pObject)
		{
			nr = ite->ItemNr;
			break;
		}
	}
	BookMItem *ite2 = 0;
	BookMItem *ite3;
	BookMItem *ite4;
	QListViewItemIterator it(this);
	for ( ; it.current(); ++it)
	{
		ite = (BookMItem*)it.current();
		if (ite->Next == nr)
			ite2 = ite;
		if (ite->ItemNr == nr)
		{
			QListViewItem *pp = ite->firstChild();
			QListViewItem *ppn = ite->nextSibling();
			if ((ite->parent()) && (ite2 == 0) && (ppn))
			{
				ite3 = (BookMItem*)ite->parent();
				ite4 = (BookMItem*)ppn;
				ite3->First = ite4->ItemNr;
			}
			while (pp)
			{
    		  	ite->parent() ? ite->parent()->insertItem(pp) :	pp->moveItem(ite);
				pp = ite->firstChild();
			}
			if (ppn)
			{
				ite3 = (BookMItem*)ppn;
				if (ite2)
				{
					ite2->Next = ite3->ItemNr;
					ite3->Prev = ite2->ItemNr;
				}
				else
					ite3->Prev = 0;
			}
			else
				if (ite2)
					ite2->Next = 0;
			delete ite;
			NrItems--;
		}
	}
	QMap<int,int> Tabl;
	Tabl.clear();
	Tabl[0] = 0;
	int Counter = 1;
	QListViewItemIterator itn(this);
	for ( ; itn.current(); ++itn)
	{
		ite = (BookMItem*)itn.current();
		Tabl[ite->ItemNr] = Counter;
		Counter++;
	}
	QListViewItemIterator itnf(this);
	for ( ; itnf.current(); ++itnf)
	{
		ite = (BookMItem*)itnf.current();
		ite->ItemNr = Tabl[ite->ItemNr];
		ite->Pare = Tabl[ite->Pare];
		ite->Next = Tabl[ite->Next];
		ite->Prev = Tabl[ite->Prev];
		ite->First = Tabl[ite->First];
		ite->Last = Tabl[ite->Last];
	}
}

void BookMView::SetAction(PageItem *currItem, QString Act)
{
	BookMItem *ite;
	QListViewItemIterator it(this);
	for ( ; it.current(); ++it)
	{
		ite = (BookMItem*)it.current();
		if (ite->PageObject == currItem)
		{
			ite->Action = Act;
			break;
		}
	}
}

void BookMView::ChangeText(PageItem *currItem)
{
	BookMItem *ite;
	QString bm = "";
	QString bm2 = "";
	QString cc;
	for (int d = 0; d < currItem->itemText.length(); ++d)
	{
		cc = currItem->itemText.text(d);
		if ((cc == QChar(13)) || (cc == QChar(10)))
			break;
		if ((cc == "(") || (cc == ")") || (cc == "\\"))
			bm2 += "\\";
		bm += cc;
		bm2 += cc;
	}
	QListViewItemIterator it(this);
	for ( ; it.current(); ++it)
	{
		ite = (BookMItem*)it.current();
		if (ite->PageObject == currItem)
		{
			ite->setText(0, bm);
			ite->Titel = bm2;
			break;
		}
	}
}

void BookMView::languageChange()
{
	setColumnText(idBookMarkCol, tr("Bookmarks"));
}
