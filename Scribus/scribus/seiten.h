/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef SEITENPAL_H
#define SEITENPAL_H

#include <QListWidget>
#include <QTableWidgetItem>
#include <QTableWidget>
#include <QCheckBox>
#include <QDialog>
#include <QDragEnterEvent>
#include <QDragLeaveEvent>
#include <QDragMoveEvent>
#include <QDropEvent>
#include <QEvent>
#include <QHBoxLayout>
#include <QImage>
#include <QLabel>
#include <QLayout>
#include <QMouseEvent>
#include <QPixmap>
#include <QPushButton>
#include <QSplitter>
#include <QToolTip>
#include <QVBoxLayout>


#include "scribusapi.h"
#include "scrpalettebase.h"

class ScribusView;
class ScribusMainWindow;
class PageLayouts;

class SCRIBUS_API SeItem : public QTableWidgetItem
{

friend class PagePalette;
friend class SeView;


public:
	SeItem(QString text, uint pgnr, const QPixmap& Pix);
	~SeItem() {};

	const QString& getPageName();
	uint pageNumber;
	
protected:
	QString pageName;
};

class SCRIBUS_API SeList : public QListWidget
{
friend class PagePalette;

	Q_OBJECT

public:
	SeList(QWidget* parent);
	~SeList() {};

private slots:
	void ToggleTh();

signals:
	void ThumbChanged();

protected:
	void mouseReleaseEvent(QMouseEvent *m);
	void mousePressEvent(QMouseEvent* e);
	void mouseMoveEvent(QMouseEvent* e);
	
	QPoint Mpos;
	QListWidgetItem *CurItem;
	bool Mpressed;
	bool Thumb;

};

class SCRIBUS_API SeView : public QTableWidget
{
	Q_OBJECT
	
friend class PagePalette;

public:
	SeView(QWidget* parent);
	~SeView() {};
	void ClearPix();
	int GetPage(int r, int c, bool *last);

public slots:
	void ToggleNam();

signals:
	void UseTemp(QString, int);
	void NewPage(int, QString);
	void MovePage(int, int);
	void Click(int, int, int);

protected:
	virtual void dropEvent(QDropEvent * e);
	virtual void dragEnterEvent(QDragEnterEvent *e);
	virtual void dragLeaveEvent(QDragLeaveEvent *e);
	virtual void dragMoveEvent(QDragMoveEvent *e);
	virtual void mouseReleaseEvent(QMouseEvent *m);
	virtual void mousePressEvent(QMouseEvent* e);
	virtual void mouseMoveEvent(QMouseEvent* e);
	
	QPoint Mpos;
	bool Mpressed;
	bool Doppel;
	bool Links;
	bool Namen;
	int MaxC;
	int colmult;
	int rowmult;
	int coladd;
	int rowadd;
	int cols;
	int firstP;
};

class SCRIBUS_API TrashBin : public QLabel
{
	Q_OBJECT

public:
	TrashBin( QWidget * parent );
	~TrashBin() {};
	void dragEnterEvent( QDragEnterEvent *e );
	void dragLeaveEvent( QDragLeaveEvent * );
	void dropEvent( QDropEvent * e );

protected:
	QPixmap Normal;
	QPixmap Offen;
	
signals:
	void DelPage(int);
	void DelMaster(QString);
};

class SCRIBUS_API PagePalette : public ScrPaletteBase
{
	Q_OBJECT

public:
	PagePalette(QWidget* parent);
	~PagePalette() {};
	
	//CB FIXME Put these in for now and hide the rest. What are these indicating?
	const bool getNamen();
	const bool getThumb();

public slots:
	void setView(ScribusView *view);
	void DelMPage(QString tmp);
	void MPage(int r, int c);
	void GotoPage(int r, int c, int b);
	void enablePalette(const bool);
	void handlePageLayout(int layout);
	void handleFirstPage(int fp);
	void RebuildTemp();
	void RebuildPage();
	void Rebuild();
	void markPage(uint nr);
	void selMasterPage();
	QPixmap CreateIcon(int nr, QPixmap pixin);
	void languageChange();

signals:
	void EditTemp(QString);
	void GotoSeite(int);

protected:
	QVBoxLayout* PagePaletteLayout;
	QHBoxLayout* Layout1;
	QVBoxLayout* Layout2;
	QVBoxLayout* Layout3;
	
	PageLayouts* pageLayout;
	QSplitter* Splitter1;
	QLabel* TextLabel1;
	QLabel* TextLabel2;
	TrashBin* Trash;
	QList<SeItem*> pageList;
	SeList* masterPageList;
	SeView* pageView;
	ScribusView *currView;
	ScribusMainWindow *m_scMW;
	QPixmap pix;
// 	DynamicTip* dynTip;
};

#endif // SEITENPAL_H
