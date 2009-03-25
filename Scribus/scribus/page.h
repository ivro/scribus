/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          page.h  -  description
                             -------------------
    begin                : Sat Apr 7 2001
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

#ifndef PAGE_H
#define PAGE_H

#include <utility>

#include <QList>

#include "scribusapi.h"
#include "undostate.h"
#include "scribusstructs.h"
#include "guidemanagercore.h"

class PageItem;
class QString;
class UndoManager;
class UndoState;
class ScribusDoc;


/**
  *@author Franz Schmid
  */
class SCRIBUS_API Page : public UndoObject, public SingleObservable<Page>
{
public:
	Page(const double x, const double y, const double b, const double h);
	~Page();
	double xOffset() const { return m_xOffset; }
	double yOffset() const { return m_yOffset; }
	double width() const { return m_width; }
	double height() const { return m_height; }
	double initialWidth() const { return m_initialWidth; }
	double initialHeight() const { return m_initialHeight; }
	void setXOffset(const double);
	void setYOffset(const double);
	void setWidth(const double);
	void setHeight(const double);
	void setInitialWidth(const double);
	void setInitialHeight(const double);
	void copySizingProperties(Page *sourcePage, const MarginStruct& pageMargins);
	MarginStruct Margins;		/*!< \brief Page's margins. */
	MarginStruct initialMargins;	/*!< \brief Initial page's margins. */
  /** Nummer der Seite */
	int LeftPg;
	QString MPageNam;		/*!< \brief Name of the used master page. */

	QString m_pageSize;
	int PageOri;			/*!< \brief Page's orientation. \details O => Portrait, 1 => Landscape. */
	int marginPreset;
	ScribusDoc* doc() const { return m_Doc; }
	void setDocument(ScribusDoc* doc);
	int pageNr() const { return m_pageNr; }
	void setPageNr(int pageNr);
	const QString& pageSectionNumber() const { return m_pageSectionNumber; }
	void setPageSectionNumber(const QString&);
	/*!
	 * \brief Return the page's name.
	 */
	const QString& pageName() const {return m_PageName;};
	void setPageName(const QString& newName);
	void restore(UndoState* state, bool isUndo);

	/*!
	 * \brief The page item we get from master page.
	 *
	 * As a bit of a dirty hack, we declare this mutable so it can be altered
	 * even while the object is `const'. That's normally only for internal
	 * implementation, but in this case it at least lets us guarantee the rest
	 * of the object is unchanged in (eg) pdflib. This should be replaced with
	 * proper access methods later.
	 */
	mutable QList<PageItem*> FromMaster;
	/*!
	 * \brief Guides lists and basic operations.
	 */
	GuideManagerCore guides;

protected:
	UndoManager * const undoManager;
	void restorePageItemCreation(ItemState<PageItem*> *state, bool isUndo);
	void restorePageItemDeletion(ItemState<PageItem*> *state, bool isUndo);
	void restorePageItemConversion(ItemState<std::pair<PageItem*, PageItem*> >*state, bool isUndo);
	
	double m_xOffset;		/*!< \brief Page's X Offset. */
	double m_yOffset;		/*!< \brief Page's Y Offset. */
	double m_width;			/*!< \brief Page's width. */
	double m_height;		/*!< \brief Page's height. */
	double m_initialWidth;		/*!< \brief Initial page's width. */
	double m_initialHeight;		/*!< \brief Initial page's height. */
	int m_pageNr;			/*!< \brief Page's number. */
	QString m_PageName;		/*!< \brief Page's name. \details Currently only allowed to be used by a master page. */
	ScribusDoc* m_Doc;		/*!< \brief The document this page belongs to. */
	QString m_pageSectionNumber;
};

Q_DECLARE_METATYPE(Page*);

#endif
