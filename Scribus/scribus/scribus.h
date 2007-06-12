/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          scribus.h  -  description
                             -------------------
    begin                : Fre Apr  6 21:09:31 CEST 2001
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

#ifndef SCRIBUS_H
#define SCRIBUS_H

#define VERS13x

// include from stl
#include <vector>

// include files for QT
#include <qapplication.h>
#include <q3mainwindow.h>
#include <qaction.h>
#include <qmenubar.h>
#include <q3popupmenu.h>
#include <q3toolbar.h>
#include <qtoolbutton.h>
#include <qstatusbar.h>
#include <qtooltip.h>
#include <qstring.h>
#include <qpixmap.h>
#include <qmessagebox.h>
#include <qpainter.h>
#include <qmap.h>
#include <q3dict.h>
#include <qpointer.h>
#include <qfont.h>
#include <qtimer.h>
#include <q3intdict.h>
#include <q3progressdialog.h>
#include <q3progressbar.h>
#include <qworkspace.h>
#include <q3ptrlist.h>
#include <qclipboard.h>
#include <q3process.h>
//Added by qt3to4:
#include <QLabel>
#include <QWheelEvent>
#include <QMouseEvent>
#include <QCloseEvent>
#include <QDragEnterEvent>
#include <QKeyEvent>
#include <QEvent>
#include <QDropEvent>
#include <QActionGroup>

// application specific includes
#include "scribusapi.h"
#include "scribusview.h"
#include "scribusdoc.h"
#include "scribusstructs.h"
#include "customfdialog.h"

class ActionManager;
class AlignDistributePalette;
class Autoforms;
class Biblio;
class BookPalette;
class CheckDocument;

class FontCombo;
class GuideManager;
class CharSelect;
class ColorCombo;
class LayerPalette;
// class LineFormate;
class Mpalette;
class Measurements;
class MenuManager;
class NodePalette;
class PageItem;
class PagePalette;
class Preferences;
class PrefsManager;
class PrefsContext;
class PSLib;
class ReformDoc;
class ScrAction;
class ScribusCore;
class ScribusMainWindow;
class ScribusQApp;
class ScribusWin;
class ScToolBar;
class SimpleState;
// class StilFormate;
class StoryEditor;
class StyleManager;
class TOCGenerator;
class Tree;
class UndoManager;
class UndoPalette;
class UndoState;
class ModeToolBar;
class PDFToolBar;

extern SCRIBUS_API ScribusQApp* ScQApp;

/**
  * \brief This Class is the base class for your application. It sets up the main
  * window and providing a menubar, toolbar
  * and statusbar. For the main view, an instance of class ScribusView is
  * created which creates your view.
  */
class SCRIBUS_API ScribusMainWindow : public Q3MainWindow, public UndoObject
{
	Q_OBJECT

public:
	/** \brief constructor */
	ScribusMainWindow();
	/** \brief destructor */
	~ScribusMainWindow();
	/*!
	* \retval 0 - ok, 1 - no fonts, ...
	*/
	int initScMW(bool primaryMainwWindow);
	bool warningVersion(QWidget *parent);
	void SetShortCut();
	void startUpDialog();
	void setDefaultPrinter(const QString&, const QString&, const QString&);
	void getDefaultPrinter(QString*, QString*, QString*);

	ScribusDoc *doFileNew(double width, double height, double topMargin, double leftMargin, double rightMargin, double bottomMargin, double columnDistance, double columnCount, bool autoTextFrames, int pageArrangement, int unitIndex, int firstPageLocation, int orientation, int firstPageNumber, const QString& defaultPageSize, bool requiresGUI, int pageCount=1, bool showView=true);
	ScribusDoc *newDoc(double width, double height, double topMargin, double leftMargin, double rightMargin, double bottomMargin, double columnDistance, double columnCount, bool autoTextFrames, int pageArrangement, int unitIndex, int firstPageLocation, int orientation, int firstPageNumber, const QString& defaultPageSize, bool requiresGUI, int pageCount=1, bool showView=true);
	bool DoFileSave(QString fn);
	void closeEvent(QCloseEvent *ce);
	void keyPressEvent(QKeyEvent *k);
	void keyReleaseEvent(QKeyEvent *k);
	void mouseReleaseEvent(QMouseEvent *m);
	void wheelEvent(QWheelEvent *w);
	void setTBvals(PageItem *currItem);
	void ShowSubs();
	void applyNewMaster(QString name);
	void updateRecent(QString fn);
	QString GetLang(QString inLang);
	bool getPDFDriver(const QString & fn, const QString & nam,
					  int Components, const std::vector<int> & pageNs,
					  const QMap<int,QPixmap> & thumbs);
	bool DoSaveAsEps(QString fn);
	QString CFileDialog(QString wDir = ".", QString caption = "", QString filter = "", QString defNa = "",
						int optionFlags = fdExistingFiles, bool *docom = 0, bool *doFont = 0, bool *doProfiles = 0);
	/*! \brief Recalculate the colors after changing CMS settings.
	Call the appropriate document function and then update the GUI elements.
	\param dia optional progress widget */
	void recalcColors(Q3ProgressBar *dia = 0);
	void SwitchWin();
	void RestoreBookMarks();
// 	void ReorgFonts();

	void emergencySave();

	/**
	 * @brief Returns true if an arrow key is pressed down.
	 * @return true if an arrow key is pressed down otherwise returns false
	 */
	bool arrowKeyDown();
	/**
	 * @brief Returns true if application is in object specific undo mode, other wise returns false.
	 * @return true if application is in object specific undo mode, other wise returns false
	 */
	bool isObjectSpecificUndo();
	void restore(UndoState* state, bool isUndo);
	void restoreGrouping(SimpleState *state, bool isUndo);
	void restoreUngrouping(SimpleState *state, bool isUndo);
	void restoreAddPage(SimpleState *state, bool isUndo);
	void restoreDeletePage(SimpleState *state, bool isUndo);
	struct CopyPasteBuffer Buffer;
	struct CopyContentsBuffer contentsBuffer;
	QString Buffer2;
	QString Buffer3;
	bool BuFromApp;
	bool internalCopy;
	int HaveDoc;
	PrefsContext* dirs;
	/** \brief view is the main widget which represents your working area. The View
	 * class should handle all events of the view widget.  It is kept empty so
	 * you can create your view according to your application's needs by
	 * changing the view class.
	 */
	ScribusView *view;
	/** \brief doc represents your actual document and is created only once. It keeps
	 * information such as filename and does the serialization of your files.
	 */
	ScribusDoc *doc;


	Q3ProgressBar* mainWindowProgressBar;
	QLabel* mainWindowXPosLabel;
	QLabel* mainWindowXPosDataLabel;
	QLabel* mainWindowYPosLabel;
	QLabel* mainWindowYPosDataLabel;
	GuideManager *guidePalette;
	CharSelect *charPalette;
	Mpalette *propertiesPalette;
	NodePalette *nodePalette;
	Tree *outlinePalette;
	Biblio *scrapbookPalette;
	LayerPalette* layerPalette;
	PagePalette *pagePalette;
	BookPalette *bookmarkPalette;
	Measurements* measurementPalette;
	CheckDocument * docCheckerPalette;
	UndoPalette* undoPalette;
	AlignDistributePalette *alignDistributePalette;
	StoryEditor* storyEditor;
	StoryEditor* CurrStED;
	QMap<QString,QString> Sprachen;
	QWorkspace *wsp;
	ScribusWin* ActWin;
	QClipboard *ClipB;
	QString LoadEnc;
	bool ScriptRunning;
	//Qt4 Autoforms* SCustom;
	ModeToolBar* mainToolBar;

	QMap<QString, QStringList> InstLang;
	QMap<QString,QString> LangTransl;

	Q3Process *ExternalApp;

	QMap<QString, QPointer<ScrAction> > scrActions;
	QMap<QString, QPointer<ScrAction> > scrRecentFileActions;
	QMap<QString, QPointer<ScrAction> > scrWindowsActions;
	QMap<QString, QPointer<ScrAction> > scrLayersActions;
	QMap<QString, QPointer<ScrAction> > scrRecentPasteActions;
	Q3Dict<QActionGroup> scrActionGroups;
	MenuManager* scrMenuMgr;
	ActionManager* actionManager;
	QStringList RecentDocs;

public slots:
	void languageChange();
	void specialActionKeyEvent(const QString& actionName, int unicodevalue);
	void newView();
	void ToggleStickyTools();
	void ToggleAllGuides();
	void ToggleAllPalettes();
	void slotStoryEditor();
	void slotCharSelect();
	void ImageEffects();
	QString Collect(const bool compress = false, const bool withFonts = false, const bool withProfiles = false, const QString& newDirectory=QString::null);
	void AddBookMark(PageItem *ite);
	void DelBookMark(PageItem *ite);
	void BookMarkTxT(PageItem *ite);
	void StoreBookmarks();
	//void setItemFillTransparency(double t);
	//void setItemLineTransparency(double t);
	void setStatusBarMousePosition(double xp, double yp);
	void setStatusBarInfoText(QString newText);
	bool DoFileClose();
	//bool DoSaveClose();
	void fontMenuAboutToShow();
	void windowsMenuAboutToShow();
	void newActWin(QWidget *w);
	void closeActiveWindowMasterPageEditor();
	void updateActiveWindowCaption(const QString &newCaption);
	void windowsMenuActivated(int id);
	void UnDoAction();
	void RedoAction();
	//void doHyphenate();
	//void doDeHyphenate();
	void slotTest();
	void slotTest2();
	void PutScrap();
	void PutToPatterns();
	void changeLayer(int);
	void showLayer();
	//void LayerRemove(int l, bool dl = false);
	void ManageJava();
	void manageMasterPages(QString temp = "");
	void manageMasterPagesEnd();
	/** \brief generate a new document in the current view */
	bool slotFileNew();
	bool slotPageImport();
	bool loadPage(QString fileName, int Nr, bool Mpa, const QString& renamedPageName=QString::null);

	void slotGetContent();
	void slotGetContent2(); // kk2006
	/*!
	\author Franz Schmid
	\brief Appends a Textfile to the Text in the selected Textframe at the Cursorposition
	*/
	void slotFileAppend();

	void removeRecent(QString fn);
	void loadRecent(QString fn);
	void rebuildRecentFileMenu();
	void rebuildRecentPasteMenu();
	void pasteRecent(QString fn);
	void rebuildLayersList();
	bool slotDocOpen();
	bool loadDoc(QString);
	/**
	 * @brief Do post loading functions
	 */
	bool postLoadDoc();
	void slotAutoSaved();
	/** \brief save a document */
	bool slotFileSave();
	/** \brief save a document under a different filename*/
	bool slotFileSaveAs();
	void slotFileRevert();
	/** \brief Sichert den Text eines Elements */
	void SaveText();
	/** \brief close the actual file */
	bool slotFileClose();
	/** \brief print the actual file */
	void slotFilePrint();
	void slotReallyPrint();
	/*!
	\author Franz Schmid
	\brief Generate and print PostScript from a doc
	\param options PrintOptions struct to control all settings
	\sa ScribusMainWindow::slotFilePrint()
	\retval bool True for success */
	bool doPrint(PrintOptions &options);
	/** \brief exits the application */
	void slotFileQuit();
	/** \brief put the marked text/object into the clipboard and remove
	 * it from the document */
	void slotEditCut();
	/** \brief put the marked text/object into the clipboard*/
	void slotEditCopy();
	/** \brief paste the clipboard into the document*/
	void slotEditPaste();
	void slotEditCopyContents();
	void slotEditPasteContents(int absolute=0);
	void EnableTxEdit();
	void DisableTxEdit();
	void SelectAll();
	void deselectAll();
	void ClipChange();
	//void clearContents();
	/** \brief shows an about dialog*/
	void slotHelpAbout();
	void slotHelpAboutPlugins();
    void slotHelpAboutQt();
	void slotOnlineHelp();
	void ToggleTips();
	/** \brief Erzeugt eine neue Seite */
	void slotNewPageP(int wo, QString templ);
	void slotNewPageM();
	void slotNewMasterPage(int w, const QString &);
	void slotNewPage(int w, const QString& masterPageName=QString::null, bool mov = true);
	void duplicateToMasterPage();
	/** \brief Loescht die aktuelle Seite */
	void DeletePage();
	/**
	 * \brief Delete pages
	 * @param from First page to delete
	 * @param to Last page to delete
	 */
	void DeletePage(int from, int to);
	void DeletePage2(int pg);
	/** \brief Verschiebt Seiten */
	void MovePage();
	void CopyPage();
	void changePageMargins();
	/*!
	\author Craig Bradney
	\date Sun 30 Jan 2005
	\brief Zoom the view.
	Take the ScMW zoom actions and pass the view a %. Actions have whole number values like 20.0, 100.0, etc. Zoom to Fit uses -100 as a marker.
	\param zoomFactor Value stored in the ScrAction.
	 */
	void slotZoom(double zoomFactor); // 20, 50, 100, or -100 for Fit
	/** \brief Schaltet Raender ein/aus */
	void ToggleMarks();
	void ToggleBleeds();
	void ToggleFrames();
	void ToggleLayerMarkers();
	void ToggleTextLinks();
	void ToggleTextControls();
	void ToggleColumnBorders();
	void ToggleRulers();
	void ToggleRulerMode();
	/* Schaltet Masspalette ein/aus */
	//void togglePropertiesPalette();
	/* Schaltet Uebersichtspalette ein/aus*/
	//void toggleOutlinePalette();
	//void toggleScrapbookPalette();
	//void toggleLayerPalette();
	void togglePagePalette();
	void setPagePalette(bool visible);
	//void toggleBookmarkPalette();
	void toggleUndoPalette();
	void setUndoPalette(bool visible);
	void toggleCheckPal();
	/** \brief Schaltet M_ViewShowImages ein/aus */
	void TogglePics();
	/** \brief Schaltet Raster ein/aus */
	void ToggleRaster();
	/** \brief Schaltet Rasterbenutzung ein/aus */
	void ToggleURaster();
	/** \brief Schaltet Rahmenbearbeitung ein/aus */
	void ToggleFrameEdit();
	void slotSelect();
	/** \brief Switch appMode
	\param mode TODO learn modes*/
	void setAppMode(int mode);
	void setAppModeByToggle(bool isOn, int newMode);
	/** \brief Neues Dokument erzeugt */
	void HaveNewDoc();
	void HaveNewSel(int Nr);
	void rebuildStyleMenu(int itemType);
	/** Dokument ist geaendert worden */
	void slotDocCh(bool reb = true);
	/** Setzt die Farbe */
	//qt4 void setItemFarbe(int id);
	/** Setzt die Abstufung */
	void setItemShade(int id);
	/** Setzt den Font */
//Qt4	void setItemFont(int id);
//Qt4	void setItemFont2(int id);
	/** Korrigiert das FontMenu */
//Qt4	void AdjustFontMenu(const QString& nf);
	void SetNewFont(const QString& nf);
	/** Setz die Zeichensatzgroesse */
	void setItemFSize(int id);
	void setFSizeMenu(int size);
	/** Farbeditor */
	void slotEditColors();
	/** Style Manager */
// 	void slotStyleManager();
	/*
	// Setzt den Pen-Tonwert
	void setPenShade(int sh);
	// Setzt den Brush-Tonwert
	void setBrushShade(int sh);
	void setGradFill(int typ);
	*/
	void updtGradFill();
	/*
	// Setzt die Pen-Farbe
	void setPenFarbe(QString farbe);
	// Setzt die Brush-Farbe
	void setBrushFarbe(QString farbe);
	*/
	void setCSMenu();
	/** Fragt nach den Farben */
//	void GetBrushPen();
	/** Erzeugt einen Rahmen */
	void MakeFrame(int f, int c, double *vals);
	//** Loescht ein Element */
	//void DeleteObjekt();
	/** Dupliziert das Element */
	void ObjektDup();
	/** Dupliziert das Element mehrfach*/
	void ObjektDupM();
	/** \brief Refromat the document when user click "OK" in ReformDoc dialog.
	See docSetup() for more info. */
	bool slotDocSetup();
	void objectAttributes();
	void getImageInfo();
	void generateTableOfContents();
//Qt4	void buildFontMenu();
	/*! \brief Change Preferences dialog.
	See prefsOrg for more info. It's very similar to docSetup/slotDocSetup. */
	void slotPrefsOrg();
//	void saveStyles(StilFormate *dia); //still required for style save from SE
	void setNewAlignment(int a);
	void setNewParStyle(const QString& name);
	void setNewCharStyle(const QString& name);
	void setAbsValue(int a);
	void selectItemsFromOutlines(PageItem *ite);
	void selectItemsFromOutlines(int Page, int Item, bool single = false);
	void selectPagesFromOutlines(int Page);
	void doPrintPreview();
	void printPreview();
	void SaveAsEps();
	void reallySaveAsEps();
	void SaveAsPDF();
	void doSaveAsPDF();
	void setMainWindowActive();
	void setItemHoch(int h);
	void setStilvalue(int s);
	void setItemTypeStyle(int id);
	void slotElemRead(QString Name, double x, double y, bool art, bool loca, ScribusDoc* docc, ScribusView* vie);
	void slotChangeUnit(int art, bool draw = true);
	void NoFrameEdit();
	/*!
	 * @brief Apply master pages from the Apply Master Page dialog
	 * @todo Make this work with real page numbers, negative numbers and document sections when they are implemented
	*/
	void ApplyMasterPage();
	void Apply_MasterPage(QString pageName, int pageNumber, bool reb = true);
	void GroupObj(bool showLockDia = true, Selection* customSelection=0);
	void UnGroupObj(Selection* customSelection=0);
	void StatusPic();
	void ModifyAnnot();
	void ToggleGuides();
	void ToggleBase();
	void ToggleUGuides();
	void HaveRaster(bool art);
	void EditTabs();
	void SearchText();
	void imageEditorExited();
	/*! \brief call gimp and wait upon completion */
	void callImageEditor();
	void docCheckToggle(bool visible);
	//! \brief Scan a document for errors, return true on errors found
	bool scanDocument();
	void setUndoMode(bool isObjectSpecific);
	//! \brief Apply a Lorem Ipsum to the each item in a selection
	void insertSampleText();
	//void sendToLayer(int layerNumber);
	void updateItemLayerList();
	/*! \brief Apply changes from ReformDoc dialog.
	It's called from this->slotDocSetup() or from ReformDoc directly.
	\param dia a reference to the ReformDoc dialog */
	void docSetup(ReformDoc* dia);
	/*! \brief Apply changes from Preferences dialog.
	It's called from this->slotPrefsOrg() or from Preferences directly.
	\param dia a reference to the Preferences dialog */
	void prefsOrg(Preferences* dia);
	//! \brief Insert a frame friendly dialog
	void slotInsertFrame();
	//! \brief manages the documents patterns
	void managePatterns();
	//! \brief enable or disable the unicode actions and their menus
	void enableTextActions(QMap<QString, QPointer<ScrAction> > *actionMap, bool enabled, const QString& fontName=QString::null);
	//! \brief allow SE to get the SM for edit stlyes
	StyleManager *styleMgr() const {return styleManager;};

signals:
	void TextStyle(const ParagraphStyle&);
//deprecated: (av)
	void TextISize(int);
	void TextIFont(const QString&);
	void TextUSval(int);
	void TextStil(int);
	void TextFarben(QString, QString, int, int);
	void TextScale(int);
	void TextScaleV(int);
	void TextBase(int);
	void TextShadow(int, int);
	void TextOutline(int);
	void TextUnderline(int, int);
	void TextStrike(int, int);

protected:
	/*!
	\brief Receive key events from palettes such as palette hiding events. Possibly easier way but this is cleaner than before. No need to modify all those palettes and each new one in future.
	 */
	bool eventFilter( QObject *o, QEvent *e );
	virtual void dragEnterEvent( QDragEnterEvent* e);
	virtual void dropEvent( QDropEvent* e);

private:
    /** init methods */
	void initSplash(bool showSplash);
	void initMenuBar(); // initMenuBar creates the menu_bar and inserts the menuitems
	void addDefaultWindowMenuItems(); // addDefaultWindowMenuItems adds the basic Windows menu items, excluding the actual list of windows
	void initStatusBar(); // setup the statusbar
	void initToolBars(); // setup the toolbars
	//Returns false when there are no fonts
	void initHyphenator();
	void initDefaultValues();
	void initKeyboardShortcuts();
	void initPalettes();
	void initScrapbook();

	void updateColorMenu(Q3ProgressBar* progressBar=NULL);

	QLabel* mainWindowStatusLabel;
	QString recentFileMenuName;
	QString recentPasteMenuName;
	QString layerMenuName;
	QPixmap noIcon;
	//qt4 ColorCombo *ColorMenC;
	/** ShapeMenu enthaelt die Rahmenformen */
	Q3PopupMenu *ShapeMenu;
	/** FontMenu enthaelt die Fonts */
	Q3PopupMenu *FontMenu;
	FontCombo* FontSub;
	ScToolBar *fileToolBar;
	ScToolBar *editToolBar;
	PDFToolBar* pdfToolBar;
	QToolButton* DatOpe;
	QToolButton* DatSav;
	QToolButton* DatClo;
	QToolButton* DatPri;
	QToolButton* DatPDF;
	QToolButton* DatNeu;
	int toolbarMenuTools;
	int toolbarMenuPDFTools;
	int viewToolbars;
	int viewPropertiesPalette;
	int viewOutlinePalette;
	int viewNodePalette;
	int viewBpal;
	int viewLayerPalette;
	int viewPagePalette;
	int viewBopal;
	int viewUndoPalette;

	bool palettesStatus[10];
	bool guidesStatus[13];

	bool keyrep;
	/** @brief Tells if an arrow key is pressed down */
	bool _arrowKeyDown;
	/** @brief tells the undo mode */
	bool objectSpecificUndo;

	void addNewPages(int wo, int where, int numPages, double height, double width, int orient, QString siz, bool mov, QStringList* basedOn = 0);
//Qt4	QMap<int,QString> FontID;

	void *PSDriver;
	int DocNr;
	bool PrinterUsed;
	struct PDe {
					QString Pname;
					QString Dname;
					QString Command;
					QByteArray DevMode;
				} PDef ;
	TOCGenerator *tocGenerator;
	int storedPageNum;
	int storedViewXCoor;
	int storedViewYCoor;
	double storedViewScale;
	StyleManager *styleManager;
	UndoManager *undoManager;
	PrefsManager *prefsManager;
	QString currentFontForFontMenu;
};

#endif
