/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          scribusdoc.h  -  description
                             -------------------
    begin                : Fre Apr  6 21:47:55 CEST 2001
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
#ifndef SCRIBUSDOC_H
#define SCRIBUSDOC_H
#ifdef HAVE_CONFIG_H
#include "scconfig.h"
#endif
// include files for QT
#include <QColor>
#include <QFont>
#include <QList>
#include <QMap>
#include <QObject>
#include <QPixmap>
#include <QRectF>
#include <QStringList>
#include <QTimer>


#include "gtgettext.h" //CB For the ImportSetup struct and itemadduserframe
#include "scribusapi.h"
#include "observable.h"
#include "prefsstructs.h"
#include "documentinformation.h"
#include "undoobject.h"
#include "page.h"
#include "pageitem.h"
#include "pagestructs.h"
#include "usertaskstructs.h"
#include "styles/styleset.h"
#include "scguardedptr.h"
#include "updatemanager.h"
#include "sclayer.h"

#include CMS_INC

#include <ft2build.h>
#include FT_FREETYPE_H

class DocUpdater;
class UndoManager;
class UndoState;
class PDFOptions;
class Hyphenator;
class Selection;
class ScribusView;
class ScribusMainWindow;
class ResourceCollection;
class PageSize;
class ScPattern;
class UndoTransaction;

class QProgressBar;

struct SCRIBUS_API NodeEditContext : public MassObservable<QPointF>
{
	enum SubMode { MOVE_POINT = 0, ADD_POINT = 1, DEL_POINT = 2, SPLIT_PATH = 3 };
	int submode;
	bool isContourLine;
	FPointArray *oldClip;
	UndoTransaction* nodeTransaction;
	double oldItemX;
	double oldItemY;
		
	int ClRe;
	int ClRe2;
	int SegP1;
	int SegP2;
	bool EdPoints;
	bool MoveSym;
	QList<int> SelNode;	
	
	NodeEditContext();
	
	bool hasNodeSelected();
	void deselect();
	
	void reset();
	
	void reset1Control(PageItem* currItem);
	void resetControl(PageItem* currItem);
	FPointArray beginTransaction(PageItem* currItem);
	void finishTransaction(PageItem* currItem);
	ItemState<QPair<FPointArray, FPointArray> >* finishTransaction1(PageItem* currItem);
	void finishTransaction2(PageItem* currItem, ItemState<QPair<FPointArray, FPointArray> >* state);
	void moveClipPoint(PageItem *currItem, FPoint ip);
};


/**! \brief the Document Class
  */
class SCRIBUS_API ScribusDoc : public QObject, public UndoObject, public Observable<ScribusDoc>
{
	Q_OBJECT

public:
	/*! Some internal align tools. */
//ivro: is this cannot be moved elsewhere ?
	typedef enum {
		alignFirst,
		alignLast,
		alignPage,
		alignMargins,
		alignGuide,
		alignSelection
	} AlignTo;

	ScribusDoc();
	ScribusDoc(const QString& docName, int unitIndex, const PageSize& pagesize, const MarginStruct& margins, const DocPagesSetup& pagesSetup);
	~ScribusDoc();
	void init();
	void setup(const int, const int, const int, const int, const int, const QString&, const QString&);

// States
	/*!
	 * Set the loading state of the document
	 * See ScribusDoc.isLoading()
	 */
	void setLoading(const bool);
	/*!
	 * Is the document loading ?
	 * See ScribusDoc.setLoading()
	 */
	bool isLoading() const;
	/*!
	 * Set modified state of the document
	 * If state changed, update the document
	 * See ScribusDoc.isModified()
	 */
	void setModified(const bool);
	/*!
	 * Is the document modified ?
	 * See ScribusDoc.setModified()
	 */
	bool isModified() const;

// GUI
	/*!
	 * Associate document and GUI.
	 * See ScribusDoc.hasGUI(), ScribusDoc.scMW() and ScribusDoc.view()
	 * @param hasgui Is document associated with gui ?
	 * @param mainWindow scribus main window
	 * @param view scribus view
	 */
	void setGUI(bool hasgui, ScribusMainWindow* mainWindow, ScribusView* view);
	/*!
	 * Is the document associated with GUI ?
	 * See Scribus.setGUI()
	 */
	bool hasGUI() const {return m_hasGUI;}
	/*!
	  * Get the scribus main window associated with the document.
	  * See Scribus.setGUI()
	  * @return the scribus man window
	  */
//ivro: rename this function (mainWindow or scribusMainWindow) ?
	ScribusMainWindow* scMW() const {return m_ScMW;}
	/*!
	 * Get the view associated with the document.
	 * See Scribus.setGUI()
	 * @return the scribus view
	 */
	ScribusView* view() const;

// Automatic Text Frames
	/*!
	 * Set if doc uses automatic text frames.
	 * See ScribusDoc.usesAutomaticTextFrames(), ScribusDoc.PageSp and ScribusDoc.PageSpa
	 */
	void setUsesAutomaticTextFrames(const bool);
	/*!
	 * Is document using automatic text frames ?
	 * See ScribusDoc.setUsesAutomaticTextFrames
	 */
	bool usesAutomaticTextFrames() const;

// Grid and Guides
	/*!
	 * Should guides be locked or not ?
	 * @param isLocked If true guides on pages cannot be moved if false they
	 * can be dragged to new positions.
	 * @author Riku Leino
	 */
	void lockGuides(bool isLocked);

// Current Page
	/*!
	 * Set new current page.
	 */
	void setCurrentPage(Page*);
	/*!
	 * Get the current page.
	 */
	Page* currentPage();
	/*!
	 * Get the current page number.
	 */
	int currentPageNumber();

// Unit index and unit ratio
	/*!
	 * Set the document's unit index and update the document's unit ratio.
	 * See ScribusDoc.unitIndex() and ScribusDoc.unitRatio()
	 */
	void setUnitIndex(const int);
	/*!
	 * Get the document's unit index.
	 * See ScribusDoc.setUnitIndex()
	 */
	int unitIndex() const;
	/*!
	 * Get the document's unit ratio.
	 * See ScribusDoc.setUnitIndex()
	 */
	double unitRatio() const;

// Document's properties
	/*!
	 * Sets the name of the document.
	 * @param name Name for the document
	 * @author Riku Leino
	 */
	void setName(const QString& name);

/*! @name Master Page
 * Master page related functions.
 *
 * A master page is a model for page. Items on master pages will be repeated on each page with the master page.
 * Use applyMasterPage() to associate a master page to a page and copyPageToMasterPage() to make a master page from a page.
 *
 * The master page mode allow to work with master pages and items with the same functions you use for pages and items.
 * See masterPageMode() and setMasterPageMode().
 */ //@{
	/*!
	 * Is the document in master page mode ?
	 * In master page mode
	 *      ScribusDoc.Pages = &ScribusDoc.MasterPages
	 *      ScribusDoc.Items = &ScribusDoc.MasterItems
	 * In normal mode (ie not in master mode)
	 *      ScribusDoc.Pages = &ScribusDoc.DocPages
	 *      ScribusDoc.Items = &ScribusDoc.DocItems
	 */
	bool masterPageMode() const { return m_masterPageMode; }
	/*!
	 * Set the doc into Master page mode.
	 */
// Do we need to return if the move to master page mode was successful?
	void setMasterPageMode(bool);

	/*!
	 * Add a master page.
	 * Use this function to add a master page, do not use addPage
	 * @param pageNumber index for the master page
	 * @param pageName name of the master page
	 * @return added page
	 */
	Page* addMasterPage(const int pageNumber, const QString& pageName);
	/*!
	 * Delete a master page.
	 * @param pageNumber index of the master page
	 */
	void deleteMasterPage(const int pageNumber);
	/*!
	 * Replace a master page by default one.
	 * @param oldMasterPage name of the master page to remplace
	 */
	void replaceMasterPage(const QString& oldMasterPage);
	/*!
	 * Rename a master page.
	 * @param oldPageName old name of the master page
	 * @param newPageName new name for the master page
	 */
	bool renameMasterPage(const QString& oldPageName, const QString& newPageName);
	/*!
	 * Rebuild master name list.
	 * Rebuild ScribusDoc.MasterName list from the master page name
	 */
	void rebuildMasterNames(void);
//@} // End of master page group

/*! @name Page
 * Page related functions.
 *
 * A page represents a paper page. See Page::Page
 */ //@{
	// Add, delete and move page

	/*!
	 * Add a page.
	 * Do not use this to add a master page, use addMasterPage instead
	 * @param pageNumber index for the page
	 * @param masterPageName master page to use
	 * @param addAutoFrame add automatic text frame
	 * @return addedpage
	 */
	Page* addPage(const int pageNumber, const QString& masterPageName=QString::null, const bool addAutoFrame=false);
	/*!
	 * Delete a page.
	 * @param pageNumber index of the page
	 */
	void deletePage(const int pageNumber);
	/*!
	 * Move page(s) within the document.
	 * @param from page index
	 * @param to page index
	 * @param ziel page index of the target to move to
	 * @param art Before (0), After (1) or At the end (2)
	 */
//ivro: create typedef for param art (like whereToMove) ?
	void movePage(const int from, const int to, const int ziel, const int art);
	/*!
	 * Copy a page.
	 * Copy a page (pageNumberToCopy) copyCount times, whereToInsert(before or after) the existingPage or at the end.
	 * @param pageNumberToCopy index of the page
	 * @param existingPage where to copy (page index)
	 * @param whereToInsert Before (0), After (1) or At the end (2)
	 * @param copyCount number of copy
	 */
//ivro: use typedef whereToMove for param whereToInsert ?
	void copyPage(int pageNumberToCopy, int existingPage, int whereToInsert, int copyCount);

	// Properties of page

	/*!
	 * Set page properties.
	 * @param width page width
	 * @param height page height
	 * @param marginsTop page margins top
	 * @param marginsLeft page margins left
	 * @param marginsRight page margins right
	 * @param marginsBottom page margins bottom
	 * @param numberOfColumns number of automaticTextFrames columns
	 * @param distanceOfColumns distance between automaticTextFrams columns
	 * @param automaticTextFrames is automaticTextFrames enabled ?
	 * @param pageLayout index of the page layout in ScribusDoc.pageSets
	 */
	void setPage(double width, double height, double marginsTop, double marginsLeft, double marginsRight, double marginsBottom, double numberOfColums, double distanceOfColumns, bool automatictTextFrames, int pageLayout);
	/*!
	 * Reset the page properties.
	 * @param newMargins margins to apply
	 * @param pageLayout index of the page layout in Scribus.pageSets
	 */
	void resetPage(MarginStruct& newMargins, int pageLayout);
	/*!
	 * Apply a master page.
	 * @param masterPageName name of the master page
	 * @param pageNumber index of the page
	 */
	bool applyMasterPage(const QString& masterPageName, const int pageNumber);
	/*!
	 * Copies a normal page to be a master pages.
	 * @param pageNumber index of the page to copy
	 * @param leftPage
         * @param maxLeftPage
	 * @param masterPageName name for the master page
	 * @param copyFromAppliedMaster
	 */
	bool copyPageToMasterPage(const int pageNumber, const int leftPage, const int maxLeftPage, const QString& masterPageName, bool copyFromAppliedMaster);

	/*!
	 * Add the automatic text frame to the page.
	 * @param pageNumber index of page
	 * @return number of text frame created, -1 on error
	 */
	int addAutomaticTextFrame(const int pageNumber);

	/*!
	 * Set the page margins. Current code uses current page only, also provide a (currently, TODO) option for this.
	 * @param initialTop
	 * @param initialBottom
	 * @param initialLeft
	 * @param initialRight
	 * @param initialHeight
	 * @param initialWight
	 * @param height
	 * @param width
	 * @param orientation
	 * @param pageSize
	 * @param pageNumber if equal to -1, do nothing and return false. Caution default is -1.
	 * @param pageType see Page.LeftPg, default to 0 (Right page)
	 */
//ivro: is this fuction name goods as it does things that not only about margins ?
	bool changePageMargins(const double initialTop, const double initialBottom, const double initialLeft, const double initialRight, const double initialHeight, const double initialWidth, const double height, const double width, const int orientation, const QString& pageSize, const int pageNumber=-1, const int pageType = 0);

	/*!
	 * Get page's bleeds.
	 * @param pageNumber index of the page
	 * @param bleedData struct to get the bleed
	 */
//ivro: is this not better in Page ?
	void getBleeds(int pageNumber, MarginStruct& bleedData);
	/*!
	 * Get page's bleeds.
	 * @param page page to look at
	 * @param bleedData struct to get the bleed
	 */
	void getBleeds(Page* page, MarginStruct& bleedData);


	// Canvas

	/*!
	 * Get the location of the page on the canvas, ie, left, middle, or right.
	 * Does not give information about middle left, etc.
	 * @param pageIndex Index of page to find location for
	 * @return LeftPage, MiddlePage, RightPage, enum from pagestructs.h
	 */
	PageLocation locationOfPage(int pageIndex) const;
	/*!
	 * Get the column of the page on the canvas, ie, left, middle, or right.
	 * @param pageIndex Index of page to find location for
	 * @return int of 0,1,2,3
	 */
	int columnOfPage(int pageIndex) const;
	/*!
	 * Return the x offset for a page on the canvas.
	 * @retval double containing the offset. Returns -1.0 if page not in Pages list (as -ve is not possible).
	 * Mostly saves bringing in extra includes into files that already have scribusdoc.h
	 */
	double getXOffsetForPage(const int);
	/*!
	 * Return the y offset for a page on the canvas.
	 * @retval double coutaining the offset. Returns -1.0 if page not in pages list (as -ve is not possible).
	 */
	double getYOffsetForPage(const int);

	/*!
	 * Set the left and right margins based on the location of the page.
	 * @param pageIndex index of the page
	 */
	void setLocationBasedPageLRMargins(uint pageIndex);
//@} // End of Page group

/*! @name Layer
 * layer related functions.
 */ //@{
	// Add, delete and move layers

	/*!
	 * Add a layer to the current document.
	 * @param layerName name of layer
	 * @param activate the layer active
	 * @return Number of the layer created
	 */
	int addLayer(const QString& layerName=QString::null, const bool activate=false);
	/*!
	 * Copies a layer from the current document.
	 * @param layerNumberToCopy source layer
	 * @param whereToInsert target layer
	 * @return Success or failure
	 */
	void copyLayer(int layerNumberToCopy, int whereToInsert);
	/*!
	 * Delete a layer from the current document.
	 * @param layerNumber of layer
	 * @param deleteItems the items on the layer too?
	 * @return Success or failure
	 */
	bool deleteLayer(const int layerNumber, const bool deleteItems);
	/*!
	 * FIXME: Make protected once scripter function no longer uses this directly
	 */
	void removeLayer(int l, bool dl = false);

	// Active layer

	/*!
	 * Set the active layer via the layer number.
	 * @param layerToActivate Number of the layer
	 * @return Success or failure
	 */
	bool setActiveLayer(const int layerToActivate);
	/*!
	 * Set the active layer via the layer name.
	 * @param layerNameToActivate Name of the layer
	 * @return Success or failure
	 */
	bool setActiveLayer(const QString & layerNameToActivate);
	/*!
	 * Return the number of the current layer.
	 * @return Active layer number
	 */
	int activeLayer();
	/*!
	 * Return the name of the current layer.
	 * @return Name of the layer
	 */
	const QString& activeLayerName();

	// Layer properties

	/*!
	 * Return the layer name.
	 * @param layerNumber Number of the layer
	 * @return Name of the layer
	 */
	QString layerName(const int layerNumber) const;
	/*!
	 * Change the name of a layer.
	 * @param layerNumber number of the layer
	 * @param newName new name of the layer
	 * @return Success or failure
	 */
	bool changeLayerName(const int layerNumber, const QString& newName);
	/*!
	 * Set the layer printable via the layer number.
	 * @param layerNumber Number of the layer
	 * @param isPrintable bool true = layer is prantable
	 * @return Success or failure
	 */
	bool setLayerPrintable(const int layerNumber, const bool isPrintable);
	/*!
	 * Is the layer printable ?
	 * @param layerNumber Number of the layer
	 * @return Printable or not
	 */
	bool layerPrintable(const int layerNumber);
	/*!
	 * Set the layer visible via the layer number.
	 * @param layerNumber Number of the layer
	 * @param isViewable true = layer is visible
	 * @return Success or failure
	 */
	bool setLayerVisible(const int layerNumber, const bool isViewable);
	/*!
	 * Is the layer visible ?
	 * @param layerNumber Number of the layer
	 * @return Visible or not
	 */
	bool layerVisible(const int layerNumber);
	/*!
	 * Set the layer locked via the layer number.
	 * @param layerNumber Number of the layer
	 * @param isLocked true = layer is locked
	 * @return Success or failure
	 */
	bool setLayerLocked(const int layerNumber, const bool isLocked);
	/*!
	 * Is the layer locked ?
	 * @param layerNumber Number of the layer
	 * @return Locked or not
	 */
	bool layerLocked(const int layerNumber);
	/*!
	 * Set the layer flow via the layer number.
	 * @param layerNumber Number of the layer
	 * @param flow true = Text flows around objects on this layer
	 * @return Success or failure
	 */
	bool setLayerFlow(const int layerNumber, const bool flow);
	/*!
	 * does text flow around objects on this layer ?
	 * @param layerNumber Number of the layer
	 * @return flow or not
	 */
	bool layerFlow(const int layerNumber);
	/*!
	 * Set the layer transparency via the layer number.
	 * @param layerNumber Number of the layer
	 * @param trans transparency value 0.0 - 1.0
	 * @return Success or failure
	 */
	bool setLayerTransparency(const int layerNumber, double trans);
	/*!
	 * returns the layer transparency.
	 * @param layerNumber Number of the layer
	 * @return transparency value 0.0 - 1.0
	 */
	double layerTransparency(const int layerNumber);
	/*!
	 * Set the layer layerBlendMode via the layer number.
	 * @param layerNumber Number of the layer
	 * @param blend layerBlendMode
	 * @return Success or failure
	 */
	bool setLayerBlendMode(const int layerNumber, int blend);
	/*!
	 * Returns the layer BlendMode.
	 * @param layerNumber Number of the layer
	 * @return layerBlendMode
	 */
	int layerBlendMode(const int layerNumber);
	/*!
	 * Set the layer outline mode via the layer number.
	 * @param layerNumber Number of the layer
	 * @param outline true = layer is displayed in outlines only
	 * @return Success or failure
	 */
	bool setLayerOutline(const int layerNumber, const bool outline);
	/*!
	 * Is this layer in outline mode ?
	 * @param layerNumber Number of the layer
	 * @return outline or not
	 */
	bool layerOutline(const int layerNumber);

	// Layer marker color

	/*!
	 * Set the layer marker color.
	 * @param layerNumber Number of the layer
	 * @param color color of the marker
	 * @return Success or failure
	 */
	bool setLayerMarker(const int layerNumber, QColor color);
	/*!
	 * Returns the layer marker color.
	 * @param layerNumber Number of the layer
	 * @return marker color
	 */
	QColor layerMarker(const int layerNumber);

	// Layer level

	/*!
	 * Returns the level of the requested layer.
	 * @param layerNumber Number of the layer
	 * @return Level of the layer
	 */
	int layerLevelFromNumber(const int layerNumber);
	/*!
	 * Returns the number of the layer at a certain level.
	 * @param layerLevel Layer level
	 * @return Layer number
	 */
	int layerNumberFromLevel(const int layerLevel);

	// Lower and Raise Layer

	/*!
	 * Lowers a layer.
	 * @param layerNumber Number of the layer
	 * @return Success or failure
	 */
	bool lowerLayer(const int layerNumber);
	/*!
	 * Lowers a layer using the level.
	 * @param layerLevel Level of the layer
	 * @return Success or failure
	 */
	bool lowerLayerByLevel(const int layerLevel);
	/*!
	 * Raises a layer.
	 * @param layerNumber Number of the layer
	 * @return Success or failure
	 */
	bool raiseLayer(const int layerNumber);
	/*!
	 * Raises a layer using the level.
	 * @param layerLevel Level of the layer
	 * @return Success or failure
	 */
	bool raiseLayerByLevel(const int layerLevel);

	// Various functions on layer

	/*!
	 * Returns the layer count.
	 * @return Number of layers in doc
	 */
	int layerCount() const;
	/*!
	 * Does the layer have items on it ?
	 * @param layerNumber Number of the layer
	 * @return Layer contains items bool
	 */
	bool layerContainsItems(const int layerNumber);
	/*!
	 * Renumbers a layer. Used in particular for reinsertion for undo/redo.
	 * @param layerNumber old layer number
	 * @param newLayerNumber New layer number
	 * @return Success or failure
	 */
	bool renumberLayer(const int layerNumber, const int newLayerNumber);
	/*!
	 * Returns a list of the layers in their order.
	 * @param list QStringList to insert the layer names into
	 */
	void orderedLayerList(QStringList* list);
//@} // End of Layer function

/*! @name Item
 * Item related functions.
 */ //@{
	// Add

	/*!
	 * Add an Item to the document.
	 * A simple function to create an item of a defined type and add it to the document
	 * Will need extensive rewriting once we have various classes of PageItems, at a guess.
	 *
	 * @param itemType type
	 * @param frameType frame type
	 * @param x X pos
	 * @param y Y pos
	 * @param b width
	 * @param h height
	 * @param w ?
	 * @param fill fill color name
	 * @param outline outline color name
	 * @param itemFinalised Used to handle item creation for undo while the user is still dragging.
	 * @return Number of created item, -1 on failure.
	 */
	int itemAdd(const PageItem::ItemType itemType, const PageItem::ItemFrameType frameType, const double x, const double y, const double b, const double h, const double w, const QString& fill, const QString& outline, const bool itemFinalised);
	/*!
	 * Add an Item to the page.
	 * Item will be fitted to the closest guides/margins of the x/y position.
	 *
	 * @param itemType type
	 * @param itemFramType frame type
	 * @param x X pos
	 * @param y Y pos
	 * @param w ?
	 * @param fill fill color name
	 * @param outline outline color name
	 * @param itemFinalised Used to handle item creation for undo while the user is still dragging
	 * @return Number of created item, -1 on failure.
	 */
	int itemAddArea(const PageItem::ItemType itemType, const PageItem::ItemFrameType frameType, const double x, const double y, const double w, const QString& fill, const QString& outline, const bool itemFinalised);
	/*!
	 * Allow the user to create a frame easily with some simple placement and sizing options.
	 * @param iafData a InsertAFrameData structure with params
	 * @return int item id? FIXME
	 */
	int itemAddUserFrame(InsertAFrameData &iafData);
	/*!
	 * Commit item creation when a user has click-drag created an item.
	 * Only called from ScribusView. Note the undo target is the page, so the undo code remains their for now.
	 *
	 * @return If an item was committed and the view must emit its signal, which needs removing from here, TODO.
	 */
	bool itemAddCommit(const int itemNumber);
	/*!
	 * Finalise item creation, only to be called from itemAdd().
	 * Simply split off code from itemAdd.
	 *
	 * @param itemType type
	 * @param frameType frame type
	 * @param itemNumber item index
	 */
	void itemAddDetails(const PageItem::ItemType itemType, const PageItem::ItemFrameType frameType, const int itemNumber);
	/*!
	 * Item type conversion functions.
	 * @param currItem item to convert
	 * @param newType
	 * @param secondaryItem ?
	 */
	PageItem* convertItemTo(PageItem *currItem, PageItem::ItemType newType, PageItem* secondaryItem=NULL);
	/*!
	 * Paste an item to the document.
	 * The bulk of a paste item process runs here for want of a better place, but its a better place
	 * than the view where it used to be.
	 * TODO Once the pageitem restructure is done, this is probably unnecessary but it removes the
	 * unnecessary part from the view for now which is overloaded with non ScrollView code.
	 */
	//TODO: void PasteItem(struct CopyPasteBuffer *Buffer, bool loading, bool drag = false);

	//itemDelete
	//itemBlah...

	// move, rotate, resize items

	/*!
	 * Move item.
	 * @param newX new X coord
	 * @param newY new Y coord
	 * @param item page item to move
	 * @param fromMP ?
	 */
//ivro: standardize param order as PageItem changed each function ?
//	something like item, args, options ?
	bool MoveItem(double newX, double newY, PageItem* ite, bool fromMP = false);
	/*!
	 * Rotate Item.
	 * @param angle angle to rotate
	 * @param itemNumber index of the item to rotate
	 */
	void RotateItem(double angle, int itemNumber);
	/*!
	 * Rotate Item.
	 * @param angle angle to rotate
	 * @param currItem page item to rotate
	 */
	void RotateItem(double angle, PageItem *currItem);
	/*!
	 * Move and Rotate Item.
	 * @param currItem page item to transform
	 * @param npv ?
	 * @param fromMP ?
	 */
	void MoveRotated(PageItem *currItem, FPoint npv, bool fromMP = false);
	/*!
	 * Resize item.
	 * @param newX new X coord
	 * @param newY new Y coord
	 * @param ite index of page item to resize
	 * @param fromMp ?
	 * @param DoUpdateClip ?
	 * @param redraw ?
	 */
	bool SizeItem(double newX, double newY, int ite, bool fromMP = false, bool DoUpdateClip = true, bool redraw = true);
	/*!
	 * Resize item.
	 * @param newX new X coord
	 * @param newY new Y coord
	 * @param pi page item to resize
	 * @param fromMp ?
	 * @param DoUpdateClip ?
	 * @param redraw ?
	 */
	bool SizeItem(double newX, double newY, PageItem *pi, bool fromMP = false, bool DoUpdateClip = true, bool redraw = true);
	/*!
	 * Size and Move item.
	 * @param newX new X coord
	 * @param newY new Y coord
	 * @param ite index of page item to transform
	 * @param fromMp ?
	 * @param constrainRotation ?
	 */
	bool MoveSizeItem(FPoint newX, FPoint newY, int ite, bool fromMP = false, bool constrainRotation=false);
//ivro: don't know what it does
	void AdjustItemSize(PageItem *currItem);

	//void FlipImageH();
	//void FlipImageV();
	void MirrorPolyH(PageItem *currItem);
	void MirrorPolyV(PageItem *currItem);

	// Various

	/*!
	 * Delete the tagged items.
	 * Currently does nothing
	 */
	bool deleteTaggedItems();
	/*!
	 * Get the item index from a unique ID.
	 * @param unique ID of item
	 * @return index of the item
	 */
	uint getItemNrfromUniqueID(uint unique);
	/*!
	 * Run this common frame item update code.
	 */
	void updateFrameItems();
	/*!
	 * Renumbers the items into the order they are stored in in the lists.
	 * Utility function used in various places, basically handles keeping items numbered in the way
	 * they are layered. When layer is a property and not a fuction of storage, this should be removed.
	 * Depends on the Items pointer pointing to the correct item list (doc, master, etc).
	 * @sa updateFrameItems();
	 */
	void renumberItemsInListOrder();
	/*!
	 * Rebuild item lists taking into account layer order.
	 * Utility function used in various places, basically handles keeping items numbered in the way
	 * they are layered. When layer is a property and not a fuction of storage, this should be removed.
	 * @sa updateFrameItems();
	 */
	void rebuildItemLists();
	/*!
	 * Find if item is not an already used item.
	 * Return true if the passed name is not used by any existing PageItem
	 *        in the same document as this PageItem.
	 * @author Craig Ringer
	 ** CB Moved from PageItem
	 */
//ivro: is returning true if the passed name exists not better ? (or rename to itemNameDontUses ?)
	bool itemNameExists(const QString itemName);
	/*!
	 * Returns a stringlist of the item attributes within the document.
	 */
	QStringList getItemAttributeNames();

	/*! Get a list of frames of certain type. */
	QMap<PageItem*, QString> getDocItemNames(PageItem::ItemType itemType);
//@} //End Items group

/*! @name Sections
 * Sections related functions
 */ //@{
	// add, delete, use sections

	/*!
	 * Add a section to the document sections list.
	 * Set number to -1 to add in the default section if the map is empty
	 */
	void addSection(const int number=0, const QString& name=QString::null, const uint fromindex=0, const uint toindex=0, const  DocumentSectionType type=Type_1_2_3, const uint sectionstartindex=0, const bool reversed=false, const bool active=true);
	/*!
	 * Delete a section from the document sections list.
	 */
	bool deleteSection(const uint);
	/*!
	 * Gets the page number to be printed based on the section it is in.
	 * Returns QString::null on failure to find the pageIndex
	 */
	const QString getSectionPageNumberForPageIndex(const uint) const;
	/*!
	 * Gets the key of the sections map based on the section the page index is in.
	 * Returns -1 on failure to find the pageIndex
	 */
	int getSectionKeyForPageIndex(const uint pageIndex) const;
	/*!
	 *
	 *
	 */
	void updateSectionPageNumbersToPages();
	/*!
	 *
	 * @param otherPageIndex
	 * @param location
	 * @param count
	 */
	void addPageToSection(const uint otherPageIndex, const uint location, const uint count=1);
	/*!
	 *
	 * @param pageIndex
	 */
	void removePageFromSection(const uint pageIndex);
	/*!
	 *
	 */
	void setFirstSectionFromFirstPageNumber();
//@} // End of Sections group

/*! @name Align
 * Align related functions
 */ //@{
	void buildAlignItemList(Selection* customSelection=0);
	bool startAlign();
	void endAlign();
//@} // End of align functions

/*! @name Styles
 * Style related functions
 */ //@{
	// Paragraphe style

	/*!
	 * Get a paragraph style by its name.
	 */
	const ParagraphStyle& paragraphStyle(QString name) { return docParagraphStyles.get(name); }
	/*!
	 * Get all the paragraph style.
	 */
	const StyleSet<ParagraphStyle>& paragraphStyles()   { return docParagraphStyles; }
	/*!
	 * Redefine Paragraphes style.
	 */
//ivro: rename rededineParaStyles ?
	void redefineStyles(const StyleSet<ParagraphStyle>& newStyles, bool removeUnused=false);
	/*!
	 * Remove any reference to old styles and replace with new name.
	 * This needs to be called when a style was removed. New name may be "".
	 * @param newNameForOld a map which maps the name of any style to remove to a new stylename
	 */
//ivro: rename replaceParaStyles ?
	void replaceStyles(const QMap<QString,QString>& newNameForOld);
	/*!
	 * Is the default paragraph style ?
	 * @param p paragraph style to test
	 */
//ivro: is this must be with the one for char style ?
	bool isDefaultStyle( const ParagraphStyle& p ) const { return docParagraphStyles.isDefault(p); }

	// Character style

	/*!
	 * Get a character style by name.
	 * @param name char style name
	 */
	const CharStyle& charStyle(QString name) { return docCharStyles.get(name); }
	/*!
	 * Get all the Character styles.
	 */
	const StyleSet<CharStyle>& charStyles()  { return docCharStyles; }
	/*!
	 * Redefine Character styles.
	 * @param newStyle character styles
	 * @param removeUnused
	 */
	void redefineCharStyles(const StyleSet<CharStyle>& newStyles, bool removeUnused=false);
	/*!
	 * Remove any reference to old styles and replace with new name.
	 * This needs to be called when a style was removed. New name may be "".
	 * @param newNameForOld a map which maps the name of any style to remove to a new stylename
	 */
	void replaceCharStyles(const QMap<QString,QString>& newNameForOld);
	/*!
	 * Is the default character style ?
	 * @param c character style to test
	 */
	bool isDefaultStyle( const CharStyle& c ) const { return docCharStyles.isDefault(c); }
// 	bool isDefaultStyle( LineStyle& l ) const { return MLineStyles......; }

	// Load Style

	/*!
	 * Insert styles from another document in this document.
	 * @param fileName The path of the document we want to extract its styles
	 */
	void loadStylesFromFile(QString fileName);
	/*!
	 * Gather styles from another document.
	 * @param fileName The path of the document we want to extract its styles
	 * @param tempStyles A pointer to a StyleSet which will be filled by paragraph styles
	 * @param tempCharStyles A pointer to a StyleSet which will be filled by character styles
	 * @param tempLineStyles A map which will be filled by line styles
	 */
	void loadStylesFromFile(QString fileName, StyleSet<ParagraphStyle> *tempStyles,
	                                          StyleSet<CharStyle> *tempCharStyles,
	                                          QMap<QString, multiLine> *tempLineStyles);
//@} // End of style group

/*! @name Color Management
 * Color Management related functions.
 */ //@{
	/*!
	 * Builds a qmap of the icc profiles used within the document.
	 */
	void getUsedProfiles(ProfilesL& usedProfiles);
	bool OpenCMSProfiles(ProfilesL InPo, ProfilesL InPoCMYK, ProfilesL MoPo, ProfilesL PrPo);
	void CloseCMSProfiles();
	void SetDefaultCMSParams();
	/*!
	 * Switch Colormanagement on or of.
	 * @param enable bool, if true Colormanagement is switched on, else off
	 */
	void enableCMS(bool enable);
	/*!
	 * Recalculate the colors after CMS settings change. Update the items in the doc accordingly.
	 */
	void recalculateColors();

	/*!
	 * Insert a color into the documents color list.
	 * @param colorList Name of the color list
	 * @param cyan Cyan component
	 * @param magenta Magenta component
	 * @param yellow Yellow component
	 * @param black Black component
	 */
	void insertColor(QString colorList, double cryan, double magenta, double yellow, double black);
	/*!
	 * Replace line style colors.
	 */
	void replaceLineStyleColors(const QMap<QString, QString>& colorMap);
	/*!
	* Builds a qmap of the colours used within the document.
	*/
	void getUsedColors(ColorList &colorsToUse, bool spot = false);
	/*!
	* Is this specific color is used by line styles.
	*/
	bool lineStylesUseColor(const QString& colorName);
//@} // End of color functions

/*! @name Font
 * font related funtions.
 */ //@{
	/*!
	 * Add a font
	 */
	bool AddFont(QString name, int fsize = 10);
	/*!
	 * TODO: Reorganise the fonts.. how? Moved from scribus.cpp
	 * CB: almost the same as getUsedFonts???
	 */
	QMap<QString,int> reorganiseFonts();
	/*!
	 * Returns a qmap of the fonts and  their glyphs used within the document.
	 */
	void getUsedFonts(QMap<QString,QMap<uint, FPointArray> > &Really);
	void checkItemForFonts(PageItem *it, QMap<QString, QMap<uint, FPointArray> > & Really, uint lc);
//@} // End of font functions

/*! @name Patterns
 * Pattern related functions
 */ //@{
	/*!
	* Set the patterns for a document.
	*/
	bool addPattern(QString &name, ScPattern& pattern);
	void setPatterns(QMap<QString, ScPattern> &patterns);
	/*!
	* Builds a QStringList of the patterns used within the document.
	*/
	QStringList getUsedPatterns();
	QStringList getUsedPatternsSelection(Selection* customSelection);
	QStringList getUsedPatternsHelper(QString pattern, QStringList &results);
//@} // End of patterns functions

/*! @name Item selection
 * Item selection related functions.
 *
 * Item selection is used to modify items.
 */ //@{
	bool sendItemSelectionToBack();
	bool bringItemSelectionToFront();

	void itemSelection_GroupObjects  (bool changeLock, bool lock, Selection* customSelection=0);
	void itemSelection_UnGroupObjects(Selection* customSelection=0);
	void itemSelection_convertItemsTo(const PageItem::ItemType newType, Selection* restoredSelection=0, Selection* customSelection=0);

	void itemSelection_ApplyParagraphStyle(const ParagraphStyle & newstyle, Selection* customSelection=0, bool rmDirectFormatting = false);
	void itemSelection_SetParagraphStyle(const ParagraphStyle & newstyle, Selection* customSelection=0);
	void itemSelection_ApplyCharStyle(const CharStyle & newstyle, Selection* customSelection=0);
	void itemSelection_SetCharStyle(const CharStyle & newstyle, Selection* customSelection=0);
	void itemSelection_EraseParagraphStyle(Selection* customSelection=0);
	void itemSelection_EraseCharStyle(Selection* customSelection=0);

	void itemSelection_SetNamedParagraphStyle(const QString & name, Selection* customSelection=0);
	void itemSelection_SetNamedCharStyle(const QString & name, Selection* customSelection=0);
	void itemSelection_SetNamedLineStyle(const QString & name, Selection* customSelection=0);

	void itemSelection_SetLineWidth(double w);
	void itemSelection_SetLineArt(Qt::PenStyle w);
	void itemSelection_SetLineJoin(Qt::PenJoinStyle w);
	void itemSelection_SetLineEnd(Qt::PenCapStyle w);
	void itemSelection_SetAlignment(int w, Selection* customSelection=0);
	void itemSelection_SetLineSpacing(double w, Selection* customSelection=0);
	void itemSelection_SetLineSpacingMode(int w, Selection* customSelection=0);
	//void ChLocalXY(double x, double y);
	//void ChLocalSc(double x, double y);
	void itemSelection_SetFont(QString fon, Selection* customSelection=0);
	void itemSelection_SetFillColor(QString farbe, Selection* customSelection=0);
	void itemSelection_SetFillShade(int sha, Selection* customSelection=0);
	void itemSelection_SetStrokeColor(QString farbe, Selection* customSelection=0);
	void itemSelection_SetStrokeShade(int sha, Selection* customSelection=0);
	void itemSelection_SetScaleV(int, Selection* customSelection=0);
	void itemSelection_SetScaleH(int, Selection* customSelection=0);
	void itemSelection_SetBaselineOffset(int, Selection* customSelection=0);
	void itemSelection_SetOutlineWidth(int, Selection* customSelection=0);
	void itemSelection_SetShadowOffsets(int shx, int shy, Selection* customSelection=0);
	void itemSelection_SetUnderline(int pos, int wid, Selection* customSelection=0);
	void itemSelection_SetStrikethru(int pos, int wid, Selection* customSelection=0);
	void itemSelection_SetEffects(int s, Selection* customSelection=0);
	void itemSelection_SetOpticalMargins(int i, Selection* customSelection=0);
	void itemSelection_SetColorProfile(const QString& profileName, Selection* customSelection=0);
	void itemSelection_SetRenderIntent(int intentIndex, Selection* customSelection=0);

//	void chAbStyle(PageItem *currItem, int s);

	void itemSelection_SetTracking(int us, Selection* customSelection=0);
	void itemSelection_SetFontSize(int size, Selection* customSelection=0);
public slots:
	void itemSelection_ToggleLock();
	void itemSelection_ToggleSizeLock();
	void itemSelection_ToggleImageShown();
	void itemSelection_TogglePrintEnabled();
	void itemSelection_ChangePreviewResolution(int id);
	void itemSelection_ClearItem(Selection* customSelection=0);
	//! Delete the items in the current selection. When force is true, we do not warn the user and make SE happy too. Force is used from @sa Page::restorePageItemCreation
	void itemSelection_DeleteItem(Selection* customSelection=0, bool forceDeletion=false);
	void itemSelection_SetItemFillTransparency(double t);
	void itemSelection_SetItemLineTransparency(double t);
	void itemSelection_SetItemFillBlend(int t);
	void itemSelection_SetItemLineBlend(int t);
	void itemSelection_SetLineGradient(VGradient& newGradient, Selection* customSelection=0);
	void itemSelection_SetFillGradient(VGradient& newGradient, Selection* customSelection=0);
	void itemSelection_SetOverprint(bool overprint, Selection* customSelection=0);
	void itemSelection_ApplyImageEffects(ScImageEffectList& newEffectList, Selection* customSelection=0);
	void itemSelection_FlipH();
	void itemSelection_FlipV();
	void itemSelection_DoHyphenate();
	void itemSelection_DoDeHyphenate();
	void itemSelection_SendToLayer(int layerNumber);
	void itemSelection_SetImageOffset(double x, double y, Selection* customSelection=0);
	void itemSelection_SetImageScale(double x, double y, Selection* customSelection=0);
	void itemSelection_SetImageScaleAndOffset(double ox, double oy, double sx, double sy, Selection* customSelection=0);
	void itemSelection_AlignLeftOut(AlignTo currAlignTo, double guidePosition);
	void itemSelection_AlignRightOut(AlignTo currAlignTo, double guidePosition);
	void itemSelection_AlignBottomIn(AlignTo currAlignTo, double guidePosition);
	void itemSelection_AlignRightIn(AlignTo currAlignTo, double guidePosition);
	void itemSelection_AlignBottomOut(AlignTo currAlignTo, double guidePosition);
	void itemSelection_AlignCenterHor(AlignTo currAlignTo, double guidePosition);
	void itemSelection_AlignLeftIn(AlignTo currAlignTo, double guidePosition);
	void itemSelection_AlignCenterVer(AlignTo currAlignTo, double guidePosition);
	void itemSelection_AlignTopOut(AlignTo currAlignTo, double guidePosition);
	void itemSelection_AlignTopIn(AlignTo currAlignTo, double guidePosition);
	void itemSelection_DistributeDistH(bool usingDistance=false, double distance=0.0);
	void itemSelection_DistributeAcrossPage(bool useMargins=false);
	void itemSelection_DistributeRight();
	void itemSelection_DistributeBottom();
	void itemSelection_DistributeCenterH();
	void itemSelection_DistributeDistV(bool usingDistance=false, double distance=0.0);
	void itemSelection_DistributeDownPage(bool useMargins=false);
	void itemSelection_DistributeLeft();
	void itemSelection_DistributeCenterV();
	void itemSelection_DistributeTop();
	void itemSelection_MultipleDuplicate(ItemMultipleDuplicateData&);
	void itemSelection_UniteItems(Selection* customSelection=0);
	void itemSelection_SplitItems(Selection* customSelection=0);
	/*! Adjust an image frame's size to fit the size of the image in it. */
	void itemSelection_AdjustFrametoImageSize(Selection* customSelection=0);
	/*! Adjust an image size to fit the size of the frame. */
	void itemSelection_AdjustImagetoFrameSize(Selection* customSelection=0);
	/*! startArrowID or endArrowID of -1 mean not applying a selection at this point.*/
	void itemSelection_ApplyArrowHead(int startArrowID=-1, int endArrowID=-1, Selection* customSelection=0);

	void itemSelection_SetItemPen(QString farbe);
	void itemSelection_SetItemPenShade(int sha);
	void itemSelection_SetItemBrush(QString farbe);
	void itemSelection_SetItemBrushShade(int sha);
	void itemSelection_SetItemGradFill(int typ);
	void itemSelection_SetItemPatternFill(QString pattern);
	void itemSelection_SetItemPatternProps(double scaleX, double scaleY, double offsetX, double offsetY, double rotation);
//@} // End of item selection group

public:

/*! @name Various functions
 */ //@{

	/*!
	 * Save function.
	 */
	bool save(const QString& fileName, QString* savedFile = NULL);

	/*!
	 * Create the default master pages based on the layout selected by the user, ie, Normal, Normal Left, etc.
	 */
	void createDefaultMasterPages();
	/*!
	 * Create the requested pages in a new document.
	 * Run after ScribusDoc.createDefaultMasterPages()
	 * @param pageCount number of page to create
	 */
	void createNewDocPages(int pageCount);

	/*!
	 * Update the fill and line QColors for all items in the doc.
	 */
	void updateAllItemQColors();

	/*!
	 * Sets up the ScText defaults from the document.
	 */
	void setScTextDefaultsFromDoc(ScText *);

// Restore

	/*!
	 * Method used when an undo/redo is requested.
	 * @param state State describing the action that is wanted to be undone/redone
	 * @param isUndo If true undo is wanted else if false redo.
	 * @author Riku Leino
	 */
	void restore(UndoState* state, bool isUndo);
	/*!
	 * Undo function for applying a master page.
	 */
	void restoreMasterPageApplying(SimpleState *state, bool isUndo);
	/*!
	 * Undo function for copy a page.
	 */
	void restorePageCopy(SimpleState *state, bool isUndo);
	/*!
	 * Undo function for grouping/ungrouping.
	 */
	void restoreGrouping(SimpleState *state, bool isUndo);
	void restoreUngrouping(SimpleState *state, bool isUndo);
// Loading images

	/*!
	 * Load images into an image frame, moved from the view.
	 * @param fn image file name
	 * @param ItNr page item number
	 * @param reload
	 * @param showMsg
	 * @return Return false on failure
	 */
	bool LoadPict(QString fn, int ItNr, bool reload = false, bool showMsg = false);
	/*!
	 * Load images into an image frame.
	 * @param fn image file name
	 * @param pageItem page item
	 * @param reload
	 * @param showMsg
	 * @return Return false on failure
	 */
	bool loadPict(QString fn, PageItem *pageItem, bool reload = false, bool showMsg = false);
	/*!
	 * Handle image with color profiles.
	 * @param Pr profile
	 * @param PrCMYK cmyk profile
	 * @param dia optional progress widget
	 */
	void RecalcPictures(ProfilesL *Pr, ProfilesL *PrCMYK, QProgressBar *dia = 0);
public slots:
	/*! Update all the picture in the current selection. */
	void updatePic();
	/*! Update the specified picture. */
	void updatePict(QString name);
	/*! Update all picture in the specified directory. */
	void updatePictDir(QString name);
	/*! Remove a picture from document. */
	void removePict(QString name);
public:
	/*!
	 * Find the minX,MinY and maxX,maxY for the canvas required for the doc.
	 * @param minPoint
	 * @param maxPoint
	 */
	void canvasMinMax(FPoint& minPoint, FPoint& maxPoint);

	/*!
	 * Find page index where the point exists.
	 * In masterPage mode return the current master page index if the point exists on the current master page,
	 * In normal mode return the first page index where this point exists.
	 *
	 * @param x X coord of the point
	 * @param y Y coord of the point
	 * @return page index or -1
	 */
	int OnPage(double x, double  y);
	/*!
	 * Find page index where the item exists.
	 * In masterPageMode return the current master page index if the item exists on the current master page.
	 * In mormal mode return the page index where this item exists.
	 *
	 * @param item item we looking for
	 * @return page index or -1
	 */
	int OnPage(PageItem *item);

	void GroupOnPage(PageItem *currItem);
	//void reformPages(double& maxX, double& maxY, bool moveObjects = true);
	void reformPages(bool moveObjects = true);
	void setRedrawBounding(PageItem *currItem);
	void adjustCanvas(FPoint minPos, FPoint maxPos, bool absolute = false);
	void recalcPicturesRes(bool applyNewRes = false);
	void connectDocSignals();

// Named Ressources

	void getNamedResources(ResourceCollection& lists) const;
	void replaceNamedResources(ResourceCollection& newNames);


	QMap<QString, double>& constants() { return m_constants; }

// Grid and Guides

	/*! \brief Apply grid to a QPoint, from ScribusView. */
	QPoint ApplyGrid(const QPoint& in);
	/*! \brief Apply grid to an FPoint, from ScribusView. */
	FPoint ApplyGridF(const FPoint& in);

	//! \brief Get the closest guide to the given point.
	void getClosestGuides(double xin, double yin, double *xout, double *yout, int *GxM, int *GyM);
	//! \brief Snap an item to the guides.
	void SnapToGuides(PageItem *currItem);
	bool ApplyGuides(double *x, double *y);

	/*! \brief Does this doc have any TOC setups and potentially a TOC to generate. */
	bool hasTOCSetup() { return !docToCSetups.empty(); }

// Group

	void moveGroup(double x, double y, bool fromMP = false, Selection* customSelection = 0);
	void rotateGroup(double angle, FPoint RCenter);
	void scaleGroup(double scx, double scy, bool scaleText=true, Selection* customSelection = 0);

	/*!
	 * Return the guarded object associated with the document.
	 */
	const ScGuardedPtr<ScribusDoc>& guardedPtr() const;

	UpdateManager* updateManager() { return &m_updateManager; }
	MassObservable<PageItem*> * itemsChanged() { return &m_itemsChanged; }
	MassObservable<Page*>     * pagesChanged() { return &m_pagesChanged; }
	MassObservable<QRectF>    * regionsChanged() { return &m_regionsChanged; }
	void invalidateRegion(QRectF region);

	void undoRedoBegin();
	void undoRedoDone();

public:
	/*! \brief We call changed() whenever the document needs to know it has been changed.
	 *  If the document is the primary document in a main window, it will signal to enable/disable
	 * certain operations.
	 */
	void changed();
public slots:
	/*! \brief Change display quality of all images in document.
	\author  OssiLehtinen
	*/
	void allItems_ChangePreviewResolution(int id);
protected:
	void addSymbols();
//@} // End of various group

signals:
	//Lets make our doc talk to our GUI rather than confusing all our normal stuff
	/**
	 * @brief Let the document tell whatever is listening that it has changed
	 */
	void docChanged();
	void updateContents();
	void updateContents(const QRect &r);
	void refreshItem(PageItem *);
	void canvasAdjusted(double width, double height, double dX, double dY);
	void firstSelectedItemType(int);
	void setApplicationMode(int);
	/**
	 * @brief A signal for when the outline palette needs to rebuild itself
	 * Emit when:
	 * - An item is created or deleted
	 * - An item changes page
	 * - An page is created or deleted
	 * - Some items are grouped or a group is ungrouped
	 * This also applies to Master Pages
	 */
	void signalRebuildOutLinePalette();
	//! Temporary signal for SizeItem
	void widthAndHeight(double, double);

protected:
	ApplicationPrefs& prefsData;
	UndoManager * const undoManager;
	int ActiveLayer;
	QMap<QString, double> m_constants;
	ScGuardedObject<ScribusDoc> m_guardedObject;
	
public: // Public attributes
	bool is12doc; //public for now, it will be removed later
	int NrItems;
	int First;
	int Last;
	int viewCount;
	int viewID;
	bool SnapGuides;
	/** \brief Scratch space around Pages */
	MarginStruct scratch;
	double GapHorizontal;			/*!< Horizontal gap between page on canvas. */
	double GapVertical;			/*!< Vertical gap betwwen page on canvas. */
// 	double ScratchLeft;
// 	double ScratchRight;
// 	double ScratchTop;
// 	double ScratchBottom;
	FPoint minCanvasCoordinate;		/*!< Minimum point of document. */
	FPoint maxCanvasCoordinate;		/*!< Maximum point of document. */
	double rulerXoffset;
	double rulerYoffset;
	QList<PageItem*> FrameItems;
	Selection* const m_Selection;
	double pageWidth;			/*!< Default page's width. */
	double pageHeight;			/*!< Default page's height. */
	/* Number of Pages */
	// int pageCount; Disabled CR no longer required
	MarginStruct pageMargins;		/*!< Default page's margins. */
	int marginPreset;
//ivro: is this cannot be moved elsewhere
//	Save only the current pageSets and when we change it, copy the new here.
	QList<PageSet> pageSets;		/*!< List of page layout supported by Scribus. */
	int currentPageLayout;			/*!< Index of the currently used page layout. See ScribusDoc::pageSets. */
	MarginStruct bleeds;			/*!< Default page's bleeds. */
// 	double BleedTop;
// 	double BleedLeft;
// 	double BleedRight;
// 	double BleedBottom;
	double PageSp;				/*!< Number of Columns for AutomaticTextFrame. */
	double PageSpa;				/*!< Distance between columns for AutomaticTextFrame. */
//ivro: use the scribusstruct PageOrientation enum ?
	int PageOri;				/*!< Default page's orientation. O => Portrait, 1 = Landscape. */
	QString m_pageSize;			/*!< Default page's format. */
	/** \brief Erste Seitennummer im Dokument */
	int FirstPnum;
	/** \brief Flag fuer Rasterbenutzung */
	bool useRaster;
	/** \brief Im Dokument benutzte Farben */
	ColorList PageColors;
	/** \brief InfoStrings fuer das aktuelle Dokument */
	DocumentInformation documentInfo;
	int appMode;
	int SubMode;
	double *ShapeValues;
	int ValCount;
	QMap<QString,int> UsedFonts;
	SCFonts * const AllFonts;
	QList<AlignObjs> AObjects;
	QColor papColor;
	int CurrentSel;
	ParagraphStyle currentStyle;

	NodeEditContext nodeEdit;

	typoPrefs typographicSettings;
	guidesPrefs guidesSettings;
	toolPrefs toolSettings;
	QMap<QString, checkerPrefs> checkerProfiles;
	QString curCheckProfile;
	PageItem *LastAuto;			/*!< The last AutomaticTextFrame element. */
	PageItem *FirstAuto;			/*!< The first AutomaticTextFrame element. */
	bool DragP;
	bool leaveDrag;
	PageItem *DraggedElem;
	PageItem *ElemToLink;
	QList<uint> DragElements;
private:
	StyleSet<ParagraphStyle> docParagraphStyles;
	StyleSet<CharStyle> docCharStyles;
public:
	ScLayers Layers;
	bool marginColored;
	int GroupCounter;
	CMSData CMSSettings;
	cmsHPROFILE DocInputImageRGBProf;
	cmsHPROFILE DocInputImageCMYKProf;
	cmsHPROFILE DocInputRGBProf;
	cmsHPROFILE DocInputCMYKProf;
	cmsHPROFILE DocOutputProf;
	cmsHPROFILE DocPrinterProf;
	cmsHTRANSFORM stdTransRGBMon;
	cmsHTRANSFORM stdTransCMYKMon;
	cmsHTRANSFORM stdProof;
	cmsHTRANSFORM stdTransImg;
	cmsHTRANSFORM stdProofImg;
	cmsHTRANSFORM stdProofImgCMYK;
	cmsHTRANSFORM stdTransCMYK;
	cmsHTRANSFORM stdProofCMYK;
	cmsHTRANSFORM stdTransRGB;
	cmsHTRANSFORM stdProofGC;
	cmsHTRANSFORM stdProofCMYKGC;
	bool BlackPoint;
	bool SoftProofing;
	bool Gamut;
	int  IntentColors;
	int  IntentImages;
	bool HasCMS;
	QMap<QString,QString> JavaScripts;
	int TotalItems;
	int MinWordLen;
	int HyCount;
	QString Language;
	bool Automatic;
	bool AutoCheck;
	PDFOptions PDF_Options;
	PrintOptions Print_Options;
	bool RePos;
	struct BookMa {
					QString Title;
					QString Text;
					QString Aktion;
					PageItem *PageObject;
					int Parent;
					int ItemNr;
					int First;
					int Last;
					int Prev;
					int Next;
					};
	QList<BookMa> BookMarks;
	bool OldBM;
	bool hasName;
	int RotMode;
	bool AutoSave;				/*!< Is autosaved ? */
	int AutoSaveTime;			/*!< Time in milliseconds between autosave. */
	QTimer * const autoSaveTimer;
	QMap<QString,multiLine> MLineStyles;
	QList<ArrowDesc> arrowStyles;
	QMap<QString, ScPattern> docPatterns;
	QWidget* WinHan;
	bool DoDrawing;
	struct OpenNodesList
	{
		int type;
		Page *page;
		PageItem *item;
	};
	QList<OpenNodesList> OpenNodes;
	QTimer *CurTimer;
	QMap<int, errorCodes> docLayerErrors;
	QMap<int, errorCodes> docItemErrors;
	QMap<int, errorCodes> masterItemErrors;
	//Attributes to be applied to frames
	ObjAttrVector docItemAttributes;
	ToCSetupVector docToCSetups;
	DocumentSectionMap sections;		/*!< Map of document's sections */
	FPointArray symReturn;
	FPointArray symNewLine;
	FPointArray symTab;
	FPointArray symNonBreak;
	FPointArray symNewCol;
	FPointArray symNewFrame;
	
	Hyphenator * docHyphenator;
private:
	UndoTransaction* m_itemCreationTransaction;
	UndoTransaction* m_alignTransaction;

	UpdateManager m_updateManager;
	MassObservable<PageItem*> m_itemsChanged;
	MassObservable<Page*> m_pagesChanged;
	MassObservable<QRectF> m_regionsChanged;
	DocUpdater* m_docUpdater;

public:
	QList<Page*>* Pages;			/*!< Pointer on a list of pages. See masterPageMode() */
	QList<Page*> MasterPages;	 	/*!< List of Master Pages. */
	QList<Page*> DocPages;			/*!< List of Document Pages. */

	QList<PageItem*>* Items;		/*!< Pointer on a list of items. See masterPageMode() */
	QList<PageItem*> MasterItems;		/*!< List of items that belongs to Master Pages. */
	QList<PageItem*> DocItems;		/*!< List of items that belongs to Document Pages. */

	QMap<QString,int> MasterNames;		/*!< Mapping Master Page Name to Master Page numbers. See rebuildMasterNames() */
	bool GuideLock;				/*!< Is the guides must be locked ? See LockGuides() */

	QString DocName;			/*!< Document's name. */
protected:
	bool loading;				/*!< Is the document loading ? See isLoading() and setLoading(). */
	bool modified;				/*!< Is the document modified ? See isModified() and setModified(). */

	bool m_hasGUI;		 		/*!< Is document associated with a GUI ? See hasGUI() and setGUI(). */
	ScribusMainWindow* m_ScMW;		/*!< Main window associated with the document. See scMW() and setGUI(). */
	ScribusView* m_View;			/*!< View associated with the document. See view() and setGUI(). */

	bool automaticTextFrames;		/*!< Is the document using automaticTextFrames ? See usesAutomaticTextFrames() and setUsesAutomagicTextFrames(). */

	int docUnitIndex;			/*!< Document's unit index. See setUnitIndex() and unitIndex(). */
	double docUnitRatio;			/*!< Document's unit ratio. See unitRatio(). */

	bool m_masterPageMode;			/*!< Is the document in master page mode ? See masterPageMode() and setMasterPageMode(). */
private:
	Page* m_currentPage;			/*!< Current page. See setCurrentPage() and currentPage(). */
};

Q_DECLARE_METATYPE(ScribusDoc*);

#endif
