/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef TREE_H
#define TREE_H

#include <qptrlist.h>
#include <qvaluelist.h>
#include <qpixmap.h>

#include "scribusapi.h"
#include "scrpalettebase.h"

class QVBoxLayout;
class QHBoxLayout;
class QGridLayout;
class QListView;
class QListViewItem;
class ScribusMainWindow;
class ScribusDoc;
class PageItem;

class SCRIBUS_API Tree : public ScrPaletteBase
{
	Q_OBJECT

public:
	Tree( QWidget* parent );
	//void keyPressEvent(QKeyEvent *k);
	//void closeEvent(QCloseEvent *ce);
	void resizeEvent(QResizeEvent *r);
	
	void setMainWindow(ScribusMainWindow *mw);
	void setDoc(ScribusDoc *);
	void unsetDoc();
	
	void rebuildPageD();
	void reopenTree(QValueList<int> op);
	QListViewItem* getListItem(uint SNr, int Nr);
	void setItemIcon(QListViewItem *item, int typ);
	void parseSubGroup(int level, QListViewItem* object, QPtrList<PageItem> *subGroupList, bool onMasterPage);
	QValueList<int> buildReopenVals();

public slots:
	void BuildTree();
	void languageChange();
	void slotShowSelect(uint SNr, int Nr);

signals:
	void ToggleAllPalettes();
	//void Schliessen();
	//void CloseMpal();
	//void CloseSpal();
	void selectElement(int, int, bool);
	void selectPage(int);
	void selectMasterPage(QString);
	void selectMasterPageElement(QString, int);

protected slots:
	//virtual void reject();
	void slotRightClick(QListViewItem* ite, const QPoint &, int);
	void slotDoRename(QListViewItem* ite, int col);
	void slotRemoveElement(uint SNr, uint Nr);
	void slotUpdateElement(uint SNr, uint Nr);
	void slotAddElement(PageItem *item);
	void slotMoveElement(uint SNr, uint NrOld, uint NrNew);
	void slotDelPage(uint Nr);
	void slotAddPage(uint Nr);
	void slotSelect(QListViewItem* ite);
protected:
	void clearPalette();
	int idElemCol;
	QListView* reportDisplay;
	QMap<QListViewItem*, int> itemMap;
	QMap<QListViewItem*, int> groupMap;
	QMap<QListViewItem*, int> pageMap;
	QMap<QListViewItem*, int> masterPageItemMap;
	QMap<QListViewItem*, int> masterPageGroupMap;
	QMap<QListViewItem*, QString> masterPageMap;
/* Reverse mapping for selecting Listview Items */
	QMap<int, QListViewItem*> itemMapRev;
	QMap<int, QListViewItem*> groupMapRev;
	QMap<int, QListViewItem*> pageMapRev;
	QMap<int, QListViewItem*> masterPageItemMapRev;
	QMap<int, QListViewItem*> masterPageGroupMapRev;
	QMap<QString, QListViewItem*> masterPageMapRev;
	QListViewItem* freeObjects;
	QListViewItem* rootObject;
	ScribusMainWindow* m_MainWindow;
	QPixmap imageIcon;
	QPixmap textIcon;
	QPixmap lineIcon;
	QPixmap polygonIcon;
	QPixmap polylineIcon;
	QPixmap groupIcon;
	bool selectionTriggered;
	ScribusDoc *currDoc;
};

#endif // TREE_H
