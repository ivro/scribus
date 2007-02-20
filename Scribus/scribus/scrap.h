/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef BIBLIO_H
#define BIBLIO_H

#include <qiconview.h>
#include <qframe.h>
#include <qtabwidget.h>
// #include <qpopupmenu.h>
#include <qmenubar.h>

#include <qtooltip.h>
#include <qpixmap.h>
#include <qdragobject.h>

#include "scribusapi.h"
#include "scrpalettebase.h"
#include "scribusstructs.h"

class QHBoxLayout;
class QToolButton;
class QVBoxLayout;

class SCRIBUS_API BibView : public QIconView
{
	Q_OBJECT

public:
	BibView( QWidget* parent);
	~BibView() {};
	void keyPressEvent(QKeyEvent *k);
	void AddObj(QString name, QString daten, QPixmap Bild);
	void checkAndChange(QString &text, QString nam, QString dir);
	void SaveContents(QString name, QString oldName);
	void ReadOldContents(QString, QString newName);
	void ReadContents(QString name);
	struct Elem
	{
		QString Data;
		QPixmap Preview;
	};
	QMap<QString,Elem> objectMap;
	QString ScFilename;
	bool canWrite;

signals:
	void ToggleAllPalettes();
	void Schliessen();
	void CloseMpal();
	void CloseTpal();

protected:
	virtual QDragObject *dragObject();
};

class SCRIBUS_API Biblio : public ScrPaletteBase
{
	Q_OBJECT

public:
	Biblio( QWidget* parent);
	~Biblio() {};
	void ObjFromMenu(QString text);
	void ObjFromCopyAction(QString text);
	void CleanUpTemp();
	void setScrapbookFileName(QString);
	const QString getScrapbookFileName();
	const int objectCount();
	void readContents(QString);
	void readTempContents(QString);
	void readOldContents(QString, QString);
	void installEventFilter(const QObject *);
	void setOpenScrapbooks(QStringList &fileNames);
	QStringList getOpenScrapbooks();
	BibView* tempBView;
	
public slots:
	void languageChange();

private slots:
	void HandleMouse(int button, QIconViewItem *ite);
	bool copyObj(int id);
	void moveObj(int id);
	void DeleteObj(QString name, QIconViewItem *ite);
	void ItemRenamed(QIconViewItem *ite);
	void DropOn(QDropEvent *e);
	void NewLib();
	void Load();
	void SaveAs();
	void closeLib();
	void libChanged(QWidget *lib);
	void Import();

signals:
	void updateRecentMenue();

protected:
//	QMap<QString, QGuardedPtr<ScrAction> > scrapbookActions;
// 	QPopupMenu* pmenu;
// 	QPopupMenu* fmenu;
// 	QMenuBar* menuBar;
	QTabWidget* Frame3;
	QVBoxLayout* BiblioLayout;
	BibView* activeBView;
	int tempCount;
	QString OldName;
// 	int mFile;
// 	int mView;
// 	int fNew;
// 	int fLoad;
// 	int fSave;
// 	int fSaveAs;
// 	int fClose;
// 	int fImport;
	QHBoxLayout* buttonLayout;
	QToolButton* newButton;
	QToolButton* loadButton;
	QToolButton* saveAsButton;
	QToolButton* importButton;
	QToolButton* closeButton;
};

#endif // BIBLIO_H
