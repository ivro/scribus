/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "seiten.h"
//#include "seiten.moc"
#include <qcursor.h>
//Added by qt3to4:
#include <Q3HBoxLayout>
#include <QDragLeaveEvent>
#include <QList>
#include <QLabel>
#include <QPixmap>
//QPixmap doesnt seem to include this for its mask() code
#include <QBitmap>
#include <QDragEnterEvent>
#include <QDragMoveEvent>
#include <QDropEvent>
#include <QMenu>
#include <QMouseEvent>
#include <Q3VBoxLayout>
#include "commonstrings.h"
#include "scribus.h"
#include "scribusview.h"
#include "page.h"
#include "pagelayout.h"
#include "sccombobox.h"
extern QPixmap loadIcon(QString nam);


/* Code fuer DragObjekt */
SeDrag::SeDrag(QString secret, QWidget * parent, const char * name): Q3StoredDrag("page/magic", parent, name)
{
	QByteArray data(secret.length());
	for (int a = 0; a < secret.length(); ++a)
		data[a] = secret.at(a).toAscii();// Qt4 QChar(secret[a]); maybe there is no loop required
	setEncodedData( data );
}

bool SeDrag::canDecode( QDragMoveEvent* e )
{
	return e->provides("page/magic");
}

bool SeDrag::decode( QDropEvent* e, QString& str )
{
	QByteArray payload = e->data("page/magic");
	if (payload.size())
	{
		e->accept();
		str = "";
		for (int a = 0; a < payload.size(); ++a)
			str += payload[a];
		return true;
	}
	return false;
}

/* IconItems Code */
SeItem::SeItem(Q3Table* parent, QString text, uint nr, const QPixmap& Pix)
		: Q3TableItem(parent, Q3TableItem::Never, "", Pix)
{
	pageNumber = nr;
	pageName = text;
	setWordWrap(true);
}

const QString& SeItem::getPageName()
{
	return pageName;
}

/* ListBox Subclass */
SeList::SeList(QWidget* parent) : Q3ListBox(parent)
{
	Mpressed = false;
	setAcceptDrops(true);
}

void SeList::mouseReleaseEvent(QMouseEvent *m)
{
	Mpressed = false;
	if (m->button() == Qt::RightButton)
	{
		QMenu *pmen = new QMenu();
		qApp->changeOverrideCursor(QCursor(Qt::ArrowCursor));
		int px = pmen->insertItem( tr("Show Page Previews"), this, SLOT(ToggleTh()));
		if (Thumb)
			pmen->setItemChecked(px, true);
		pmen->exec(QCursor::pos());
		delete pmen;
	}
	Q3ListBox::mouseReleaseEvent(m);
}

void SeList::ToggleTh()
{
	Thumb = !Thumb;
	emit ThumbChanged();
}

void SeList::mousePressEvent(QMouseEvent* e)
{
	e->accept();
	CurItem = 0;
	Q3ListBoxItem *i = itemAt(e->pos());
	if (i)
	{
		CurItem = i;
		Mpos = e->pos();
		Mpressed = true;
	}
	Q3ListBox::mousePressEvent(e);
}

void SeList::mouseMoveEvent(QMouseEvent* e)
{
	if ((Mpressed) && ((Mpos - e->pos()).manhattanLength() > 4))
	{
		Mpressed = false;
		Q3ListBoxItem *i = itemAt(Mpos);
		if (i)
		{
			Q3DragObject *dr = new SeDrag("1"+i->text(), this, "te");
			dr->setPixmap(loadIcon("doc.png"));
			if (!dr->drag())
				qDebug("SeList::mouseMoveEvent: couldn't start drag operation!");;
		}
	}
}

/* QTable Subclass */
SeView::SeView(QWidget* parent) : Q3Table(parent)
{
	setDragEnabled(true);
	setAcceptDrops(true);
	viewport()->setAcceptDrops(true);
	setShowGrid(false);
	Mpressed = false;
	Namen = true;
	setFocusPolicy(Qt::NoFocus);
}

void SeView::contentsMousePressEvent(QMouseEvent* e)
{
	e->accept();
	Mpos = e->pos();
	Mpressed = true;
}

void SeView::contentsMouseReleaseEvent(QMouseEvent* e)
{
	e->accept();
	Mpressed = false;
/*	if (e->button() == RightButton)
	{
		QPopupMenu *pmen = new QPopupMenu();
		qApp->setOverrideCursor(QCursor(Qt::ArrowCursor), true);
		int px = pmen->insertItem( tr("Show Master Page Names"), this, SLOT(ToggleNam()));
		if (Namen)
			pmen->setItemChecked(px, true);
		pmen->exec(QCursor::pos());
		delete pmen;
	} */
	emit Click(rowAt(e->pos().y()), columnAt(e->pos().x()), e->button());
}

void SeView::ToggleNam()
{
/*	Namen = !Namen;
	int val = 35;
	if (Namen)
		val = 100;
	setColumnWidth(1, val);
	setColumnWidth(3, val);
	hide();
	show(); */
}

void SeView::contentsMouseMoveEvent(QMouseEvent* e)
{
	if ((Mpressed) && ((Mpos - e->pos()).manhattanLength() > 4))
	{
		Mpressed = false;
		int a = rowAt(e->pos().y());
		int b = columnAt(e->pos().x());
		if ((a != -1) && (b != -1))
		{
			Q3TableItem* ite = item(a, b);
			if (ite == 0)
				return;
			SeItem* it = (SeItem*)ite;
			QString str(it->pageName);
			bool dummy;
			int p = GetPage(a, b, &dummy);
			QString tmp;
			Q3DragObject *dr = new SeDrag("2 "+tmp.setNum(p)+" "+str, this, "te");
			dr->setPixmap(loadIcon("doc.png"));
			dr->drag();
		}
	}
	Q3Table::contentsMouseMoveEvent(e);
}

void SeView::contentsDropEvent(QDropEvent * e)
{
	QString str, tmp;
	bool lastPage = false;
	if (SeDrag::decode(e, str))
	{
		ClearPix();
		if (str.startsWith("1"))
		{
			int a = rowAt(e->pos().y());
			int b = columnAt(e->pos().x());
			int p;
			tmp = str.remove(0,1);
			if ((a == -1) || (b == -1))
				return;
			if (a == numRows()-1)
			{
				emit NewPage(MaxC+1, tmp);
				return;
			}
			p = GetPage(a, b, &lastPage);
			if (numCols() == 1)
			{
				if ((a % 2) == 0)
					emit NewPage(p, tmp);
				else
				{
					emit UseTemp(tmp, p);
					Q3TableItem* ite = item(a, b);
					if (ite == 0)
						return;
					SeItem* it = (SeItem*)ite;
					it->pageName = tmp;
				}
				return;
			}
			else
			{
				if ((b % 2) == 0)
				{
					if (lastPage)
						emit NewPage(p+1, tmp);
					else
						emit NewPage(p, tmp);
				}
				else
				{
					emit UseTemp(tmp, p);
					Q3TableItem* ite = item(a, b);
					if (ite == 0)
						return;
					SeItem* it = (SeItem*)ite;
					it->pageName = tmp;
				}
				return;
			}
		}
		if (str.startsWith("2"))
		{
			int st = str.find(" ");
			int en = str.find(" ", st+1);
			tmp = str.mid(en+1);
			int dr = str.mid(st, en-st).toInt();
			int a = rowAt(e->pos().y());
			int b = columnAt(e->pos().x());
			int p;
			if ((a == -1) || (b == -1))
				return;
			Q3TableItem* ite = item(a, b);
			p = GetPage(a, b, &lastPage);
			if (a == numRows()-1)
			{
				emit MovePage(dr, p+1);
				return;
			}
			if (numCols() == 1)
			{
				if ((a % 2) == 0)
					emit MovePage(dr, p);
				else
				{
					emit UseTemp(tmp, p);
					if (ite == 0)
						return;
					SeItem* it = (SeItem*)ite;
					it->pageName = tmp;
				}
				return;
			}
			else
			{
				if ((b % 2) == 0)
				{
					if (lastPage)
						emit MovePage(dr, p+1);
					else
						emit MovePage(dr, p);
				}
				else
				{
					emit UseTemp(tmp, p);
					if (ite == 0)
						return;
					SeItem* it = (SeItem*)ite;
					it->pageName = tmp;
				}
				return;
			}
		}
	}
}

void SeView::contentsDragEnterEvent(QDragEnterEvent *e)
{
	if (SeDrag::canDecode(e))
		e->accept();
}

void SeView::contentsDragLeaveEvent(QDragLeaveEvent *)
{
	ClearPix();
}

void SeView::contentsDragMoveEvent(QDragMoveEvent *e)
{
	QString str, tmp;
	if (SeDrag::decode(e, str))
	{
		int a = rowAt(e->pos().y());
		int b = columnAt(e->pos().x());
		ClearPix();
		if ((a == -1) || (b == -1))
			return;
		if (numCols() == 1)
		{
			if ((a % 2) == 0)
			{
				QPixmap pm;
				pm = QPixmap(columnWidth(b), rowHeight(a));
				pm.fill(Qt::darkBlue);
				setPixmap(a, 0, pm);
			}
		}
		else
		{
			if (((b % 2) == 0) || (a == numRows()-1))
			{
				QPixmap pm;
				pm = QPixmap(columnWidth(b), rowHeight(a));
				pm.fill(Qt::darkBlue);
				setPixmap(a, b, pm);
			}
		}
	}
}

void SeView::ClearPix()
{
	int counter = 0;
	int rowcounter = 0;
	for (int a = 0; a < numRows(); ++a)
	{
		counter = 0;
		if (numCols() == 1)
		{
			if ((a % 2) == 0)
			{
				clearCell(rowcounter, 0);
				rowcounter += 2;
			}
		}
		else
		{
			for (int b = 0; b < numCols(); ++b)
			{
				if ((b % 2) == 0)
				{
					clearCell(rowcounter, counter);
					counter += 2;
				}
			}
			rowcounter++;
		}
	}
	for (int c = 0; c < numCols(); ++c)
	{
		clearCell(numRows()-1, c);
	}
}

int SeView::GetPage(int r, int c, bool *last)
{
	int counter = firstP;
	int rowcounter = 0;
	int ret = MaxC;
	*last = false;
	if (r == numRows()-1)
	{
		*last = true;
		return ret;
	}
	if ((r == 0) && (c < firstP*colmult+coladd))
		return 0;
	for (int a = 0; a < MaxC+1; ++a)
	{
		if ((rowcounter*rowmult+rowadd == r) && (counter*colmult+coladd == c))
		{
			ret = a;
			return ret;
		}
		else
		{
			if (numCols() == 1)
			{
				if ((rowcounter*rowmult) == r)
				{
					ret = a;
					return ret;
				}
			}
			else
			{
				if ((counter*colmult == c) && (rowcounter*rowmult+rowadd == r))
				{
					ret = a;
					return ret;
				}
			}
		}
		counter++;
		if (counter > cols-1)
		{
			counter = 0;
			rowcounter++;
		}
	}
	*last = true;
	return ret;
}

/* Der Muelleimer */
TrashBin::TrashBin(QWidget * parent) : QLabel(parent, "Trash")
{
	Normal = loadIcon("trashcan.png");
	Offen = loadIcon("trashcan2.png");
	setPixmap(Normal);
	setScaledContents(false);
	setAcceptDrops(true);
}

void TrashBin::dragEnterEvent(QDragEnterEvent *e)
{
	if (SeDrag::canDecode(e))
	{
		e->accept();
		setPixmap(Offen);
	}
}

void TrashBin::dragLeaveEvent(QDragLeaveEvent *)
{
	setPixmap(Normal);
}

void TrashBin::dropEvent(QDropEvent * e)
{
	setPixmap(Normal);
	QString str, tmp;
	if (SeDrag::decode(e, str))
	{
		if (str.startsWith("2"))
		{
			int st = str.find(" ");
			int en = str.find(" ", st+1);
			emit DelPage(str.mid(st, en-st).toInt());
		}
		if (str.startsWith("1"))
		{
			tmp = str.remove(0,1);
			emit DelMaster(tmp);
		}
	}
}


PagePalette::PagePalette(QWidget* parent) : ScrPaletteBase( parent, "SP", false, 0)
{
	m_scMW=(ScribusMainWindow*)parent;
	PagePaletteLayout = new Q3VBoxLayout( this );
	PagePaletteLayout->setSpacing( 5 );
	PagePaletteLayout->setMargin( 5 );
	Splitter1 = new QSplitter( this, "Splitter1" );
	Splitter1->setOrientation( Qt::Vertical );
	QWidget* privateLayoutWidget = new QWidget( Splitter1, "Layout2" );
	Layout2 = new Q3VBoxLayout( privateLayoutWidget, 0, 5, "Layout2");
	TextLabel1 = new QLabel( privateLayoutWidget, "TextLabel1" );
	Layout2->addWidget( TextLabel1 );
	masterPageList = new SeList(privateLayoutWidget);
	masterPageList->setMinimumSize(QSize(130,70));
	masterPageList->Thumb = false;
	Layout2->addWidget( masterPageList );
	QWidget* privateLayoutWidget_2 = new QWidget( Splitter1, "Layout3" );
	Layout3 = new Q3VBoxLayout( privateLayoutWidget_2, 0, 5, "Layout3");
	TextLabel2 = new QLabel( privateLayoutWidget_2, "TextLabel2" );
	Layout3->addWidget( TextLabel2 );
	pageView = new SeView(privateLayoutWidget_2);
	pageView->setLeftMargin(0);
	pageView->verticalHeader()->hide();
	pageView->setTopMargin(0);
	pageView->horizontalHeader()->hide();
	pageView->setSorting(false);
	pageView->setSelectionMode(Q3Table::NoSelection);
	pageView->setColumnMovingEnabled(false);
	pageView->setRowMovingEnabled(false);
	pageView->setNumRows(1);
	pageView->setNumCols(1);
	pageView->setMinimumSize(QSize(130,120));
	Layout3->addWidget( pageView );
	PagePaletteLayout->addWidget( Splitter1 );

	Layout1 = new Q3HBoxLayout;
	Layout1->setSpacing( 5 );
	Layout1->setMargin( 0 );
	QList<PageSet> dummy;
	dummy.clear();
	struct PageSet pageS;
	pageS.Name = tr( "Double sided" );
	pageS.FirstPage = 0;
	pageS.Rows = 1;
	pageS.Columns = 1;
	pageS.GapHorizontal = 0.0;
	pageS.GapVertical = 0.0;
	pageS.GapBelow = 40.0;
	pageS.pageNames.clear();
	pageS.pageNames.append( tr("Middle Right"));
	dummy.append(pageS);
	pageLayout = new PageLayouts(this, dummy, false);
	Layout1->addWidget( pageLayout );

	QSpacerItem* spacer = new QSpacerItem( 15, 15, QSizePolicy::Expanding, QSizePolicy::Minimum );
	Layout1->addItem( spacer );

	Trash = new TrashBin( this );
	Trash->setMinimumSize(QSize(22,22));
	Layout1->addWidget( Trash );
	PagePaletteLayout->addLayout( Layout1 );
	pix = loadIcon("32/page-simple.png");
	currView = 0;
	Rebuild();
	languageChange();
	connect(masterPageList, SIGNAL(doubleClicked(Q3ListBoxItem*)), this, SLOT(selMasterPage()));
	connect(masterPageList, SIGNAL(ThumbChanged()), this, SLOT(RebuildTemp()));
	connect(pageView, SIGNAL(Click(int, int, int)), this, SLOT(GotoPage(int, int, int)));
	connect(pageView, SIGNAL(MovePage(int, int)), this, SLOT(MPage(int, int)));
	connect(Trash, SIGNAL(DelMaster(QString)), this, SLOT(DelMPage(QString)));
	connect(pageLayout, SIGNAL(selectedLayout(int )), this, SLOT(handlePageLayout(int )));
	connect(pageLayout, SIGNAL(selectedFirstPage(int )), this, SLOT(handleFirstPage(int )));
	connect(this, SIGNAL(EditTemp(QString)), m_scMW, SLOT(manageMasterPages(QString)));
	connect(pageView, SIGNAL(UseTemp(QString, int)), m_scMW, SLOT(Apply_MasterPage(QString, int)));
	connect(pageView, SIGNAL(NewPage(int, QString)), m_scMW, SLOT(slotNewPageP(int, QString)));
	connect(Trash, SIGNAL(DelPage(int)), m_scMW, SLOT(DeletePage2(int)));
	connect(this, SIGNAL(GotoSeite(int)), m_scMW, SLOT(selectPagesFromOutlines(int)));
	
	QToolTip::add(Trash, "<qt>" + tr("Drag pages or master pages onto the trashbin to delete them") + "</qt>");
	QToolTip::add(masterPageList, "<qt>" + tr("Here are all your master pages. To create a new page, drag a master page to the page view below") + "</qt>");
}

void PagePalette::DelMPage(QString tmp)
{
	if (tmp == CommonStrings::trMasterPageNormal)
		return;
	int Nr = currView->Doc->MasterNames[tmp];
	Page* Seite = currView->Doc->MasterPages.at(Nr);
	currView->Doc->MasterPages.remove(Nr);
	delete Seite;
	currView->Doc->MasterNames.clear();
	for (uint aa=0; aa < currView->Doc->MasterPages.count(); ++aa)
	{
		Seite = currView->Doc->MasterPages.at(aa);
		Seite->setPageNr(aa);
		if (currView->Doc->currentPageLayout == doublePage)
		{
			Seite->Margins.Left = Seite->LeftPg ? currView->Doc->pageMargins.Right : currView->Doc->pageMargins.Left;
			Seite->Margins.Right= Seite->LeftPg? currView->Doc->pageMargins.Left : currView->Doc->pageMargins.Right;
		}
		else
		{
			Seite->Margins.Right = currView->Doc->pageMargins.Right;
			Seite->Margins.Left = currView->Doc->pageMargins.Left;
		}
		Seite->Margins.Top = currView->Doc->pageMargins.Top;
		Seite->Margins.Bottom = currView->Doc->pageMargins.Bottom;
		currView->Doc->MasterNames[Seite->pageName()] = aa;
	}
	for (uint b=0; b<currView->Doc->DocPages.count(); ++b)
	{
		if (currView->Doc->DocPages.at(b)->MPageNam == tmp)
			currView->Doc->DocPages.at(b)->MPageNam = CommonStrings::masterPageNormal;
	}
	currView->DrawNew();
	RebuildTemp();
	RebuildPage();
	currView->Doc->setModified(true);
}

void PagePalette::MPage(int r, int c)
{
	if (r == c)
		return;
	if (c > pageView->MaxC)
		currView->Doc->movePage(r, r + 1, c, 2);
	else
		currView->Doc->movePage(r, r + 1, c, 0);
	currView->reformPages();
	RebuildPage();
	currView->DrawNew();
//CB done by doc::reformpages
// 	currView->Doc->setModified(true);
}

void PagePalette::GotoPage(int r, int c, int b)
{
	int p;
	bool dummy;
	if ((b == Qt::LeftButton) && (r != -1) && (c != -1))
	{
		p = pageView->GetPage(r, c, &dummy);
		emit GotoSeite(p);
	}
}

void PagePalette::enablePalette(const bool enabled)
{
	pageView->setEnabled(enabled);
	masterPageList->setEnabled(enabled);
	pageLayout->setEnabled(enabled);
}

void PagePalette::handlePageLayout(int layout)
{
	double tpr = currView->Doc->pageMargins.Top;
	double lr = currView->Doc->pageMargins.Left;
	double rr = currView->Doc->pageMargins.Right;
	double br = currView->Doc->pageMargins.Bottom;
	pageLayout->selectFirstP(currView->Doc->pageSets[layout].FirstPage);
	currView->Doc->resetPage(tpr, lr, rr, br, layout);
	currView->reformPages();
	currView->DrawNew();
	currView->GotoPage(currView->Doc->currentPageNumber());
	RebuildPage();
//CB done by doc::reformpages
//	currView->Doc->setModified(true);
}

void PagePalette::handleFirstPage(int fp)
{
	currView->Doc->pageSets[currView->Doc->currentPageLayout].FirstPage = fp;
	currView->reformPages();
	currView->DrawNew();
	currView->GotoPage(currView->Doc->currentPageNumber());
	RebuildPage();
//CB done by doc::reformpages
// 	currView->Doc->setModified(true);
}

void PagePalette::RebuildTemp()
{
	if (m_scMW->ScriptRunning)
		return;
	masterPageList->clear();
	if (currView == 0)
		return;
	QPixmap pm;
	QMap<QString,int>::Iterator it;
	for (it = currView->Doc->MasterNames.begin(); it != currView->Doc->MasterNames.end(); ++it)
	{
		if (masterPageList->Thumb)
		{
			pm.convertFromImage(currView->MPageToPixmap(it.key(),60));
			masterPageList->insertItem(pm, it.key() == CommonStrings::masterPageNormal ? CommonStrings::trMasterPageNormal : it.key());
		}
		else
			masterPageList->insertItem(it.key() == CommonStrings::masterPageNormal ? CommonStrings::trMasterPageNormal : it.key());
	}
}

void PagePalette::RebuildPage()
{
	if (m_scMW->ScriptRunning)
		return;
	QString str;
	disconnect(pageLayout, SIGNAL(selectedLayout(int )), this, SLOT(handlePageLayout(int )));
	disconnect(pageLayout, SIGNAL(selectedFirstPage(int )), this, SLOT(handleFirstPage(int )));
	pageView->setNumRows(1);
	pageView->setNumCols(1);
	if (currView == 0)
	{
		connect(pageLayout, SIGNAL(selectedLayout(int )), this, SLOT(handlePageLayout(int )));
		connect(pageLayout, SIGNAL(selectedFirstPage(int )), this, SLOT(handleFirstPage(int )));
		return;
	}
	pageLayout->updateLayoutSelector(currView->Doc->pageSets);
	pageLayout->selectItem(currView->Doc->currentPageLayout);
	pageLayout->firstPage->setCurrentItem(currView->Doc->pageSets[currView->Doc->currentPageLayout].FirstPage);
	pageView->MaxC = currView->Doc->Pages->count()-1;
	int counter, rowcounter, colmult, rowmult, coladd,rowadd;
	counter = currView->Doc->pageSets[currView->Doc->currentPageLayout].FirstPage;
	int cols = currView->Doc->pageSets[currView->Doc->currentPageLayout].Columns;
	int rows = (currView->Doc->Pages->count()+counter) / currView->Doc->pageSets[currView->Doc->currentPageLayout].Columns;
	if (((currView->Doc->Pages->count()+counter) % currView->Doc->pageSets[currView->Doc->currentPageLayout].Columns) != 0)
		rows++;
	rowcounter = 0;
	if (cols == 1)
	{
		pageView->setNumCols(cols);
		pageView->setNumRows(rows*2+1);
		colmult = 1;
		coladd = 0;
		rowmult = 2;
		rowadd = 1;
	}
	else
	{
		pageView->setNumCols(cols*2);
		pageView->setNumRows(rows+1);
		colmult = 2;
		coladd = 1;
		rowmult = 1;
		rowadd = 0;
	}
	pageView->coladd = coladd;
	pageView->colmult = colmult;
	pageView->rowadd = rowadd;
	pageView->rowmult = rowmult;
	pageView->firstP = counter;
	pageView->cols = currView->Doc->pageSets[currView->Doc->currentPageLayout].Columns;
	pageList.clear();
	for (uint a = 0; a < currView->Doc->Pages->count(); ++a)
	{
		str = currView->Doc->Pages->at(a)->MPageNam;
		SeItem *it = new SeItem(pageView, str, a, CreateIcon(a, pix));
		pageList.append(it);
		pageView->setItem(rowcounter*rowmult+rowadd, counter*colmult+coladd, (Q3TableItem *)it);
		pageView->setColumnWidth(counter*colmult+coladd, pix.width());
		if (cols == 1)
		{
			pageView->setRowHeight(rowcounter*rowmult, 10);
			pageView->setRowHeight(rowcounter*rowmult+rowadd, pix.height());
		}
		else
			pageView->setRowHeight(rowcounter*rowmult+rowadd, pix.height()+5);
		counter++;
		if (counter > currView->Doc->pageSets[currView->Doc->currentPageLayout].Columns-1)
		{
			counter = 0;
			rowcounter++;
		}
	}
	pageView->setRowHeight(pageView->numRows()-1, 10);
	counter = 0;
	if (cols != 1)
	{
		for (int c = 0; c < pageView->numCols(); ++c)
		{
			if ((counter % 2) == 0)
				pageView->setColumnWidth(counter, 10);
			else
				pageView->setColumnWidth(counter, pix.width());
			counter++;
		}
	}
	pageView->repaint();
	if (currView != 0)
		markPage(currView->Doc->currentPageNumber());
	connect(pageLayout, SIGNAL(selectedLayout(int )), this, SLOT(handlePageLayout(int )));
	connect(pageLayout, SIGNAL(selectedFirstPage(int )), this, SLOT(handleFirstPage(int )));
}

void PagePalette::Rebuild()
{
	RebuildTemp();
	RebuildPage();
	enablePalette(currView != 0);
}

void PagePalette::markPage(uint nr)
{
	if (currView != 0)
	{
		SeItem *it;
		for (uint a = 0; a < pageList.count(); a++)
		{
			it = pageList.at(a);
			if (it->pageNumber == nr)
			{
				pageView->clearSelection();
				pageView->selectCells(it->row(), it->col(), it->row(), it->col());
				break;
			}
		}
	}
}

void PagePalette::setView(ScribusView *view)
{
	currView = view;
}

void PagePalette::selMasterPage()
{
	if (masterPageList->CurItem != 0)
		emit EditTemp(masterPageList->CurItem->text());
}

QPixmap PagePalette::CreateIcon(int nr, QPixmap pixin)
{
	QPainter p;
	// Necessary on windows to ensure the pixmap is drawable
	QPixmap ret(pixin.width(), pixin.height()); // Qt4, pixin.depth());
	if (p.begin(&ret))
	{
		p.drawPixmap( 0, 0, pixin );
//		if( !pixin.mask().isNull() )
//			ret.setMask( pixin.mask() );
		p.setBrush(Qt::white);
		p.setBackgroundColor(Qt::white);
		p.setBackgroundMode(Qt::OpaqueMode);
		p.setPen(QPen(Qt::black, 1, Qt::SolidLine, Qt::FlatCap, Qt::MiterJoin));
		p.setFont(QFont("Helvetica", 12, QFont::Bold));
		//QString tmp = tmp.setNum(nr+1);
		QString tmp(currView->Doc->getSectionPageNumberForPageIndex(nr));
		if (tmp.isEmpty())
			tmp = tmp.setNum(nr+1);
		QRect b = p.fontMetrics().boundingRect(tmp);
		QRect c = QRect((ret.width() / 2 - b.width() / 2)-2, (ret.height() / 2 - b.height() / 2)-2, b.width()+4, b.height()+4);
		p.drawRect(c);
		QRect d = QRect((ret.width() / 2 - b.width() / 2), (ret.height() / 2 - b.height() / 2), b.width(), b.height());
		p.setFont(QFont("Helvetica", 10, QFont::Normal));
		p.drawText(d, Qt::AlignCenter, tmp);
		p.end();
		if( !pixin.mask().isNull() )
			ret.setMask( pixin.mask() );
	}
	return ret;
}

void PagePalette::languageChange()
{
	setCaption( tr( "Arrange Pages" ) );
	TextLabel1->setText( tr( "Available Master Pages:" ) );
	TextLabel2->setText( tr( "Document Pages:" ) );
}

//CB Whats this variable returned for.. its always true... ? 
//CB Clean up the interface and stick it behind this member for now
const bool PagePalette::getNamen()
{
	return pageView->Namen;
}

//CB Whats this variable returned for.. its always true... ? 
//CB Clean up the interface and stick it behind this member for now
const bool PagePalette::getThumb()
{
	return masterPageList->Thumb;
}
