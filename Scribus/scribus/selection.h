/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
	copyright            : (C) 2005 by Craig Bradney
	email                : cbradney@zip.com.au
***************************************************************************/

/***************************************************************************
*                                                                         *
*   This program is free software; you can redistribute it and/or modify  *
*   it under the terms of the GNU General Public License as published by  *
*   the Free Software Foundation; either version 2 of the License, or     *
*   (at your option) any later version.                                   *
*                                                                         *
***************************************************************************/
#ifndef SELECTION_H
#define SELECTION_H

#include <qguardedptr.h>
#include <qobject.h>
#include <qmap.h>
#include <qvaluevector.h>

#include "pageitem.h"
#include "scribusapi.h"

typedef QValueList< QGuardedPtr<PageItem> > SelectionList;

class SCRIBUS_API Selection : public QObject
{
	Q_OBJECT
	public:
		/**
		 * \brief Create an empty selection that is not a GUI selection
		 * @param  parent QObject
		 */
		explicit Selection(QObject* parent);   // otherwise implicit conversion Selection* -> Selection& is possible
		/**
		 * \brief Create an empty selection that may be a GUI selection
		 * @param  parent QObject
		 * @param  guiSelection If the selection is to be a GUI selection
		 */
		Selection(QObject* parent, bool guiSelection);
		/**
		 * \brief Copy a selection
		 * \note We are leaving the connections of the items in place
		 * and the isGUISelection set in the copy. We cannot disconnect them
		 * as they may be connected via the main GUI selection.
		 * @param  other selection
		 */
		Selection(const Selection& other);
		Selection& operator=( const Selection & );
		~Selection();
		
		bool connectItemToGUI();
		/**
		 * \brief Disconnect all items from the GUI slots. 
		 * This should not really be necessary if all things are going ok
		 * except for within the clearAll function.
		 * @return bool true on success
		 */
		bool disconnectAllItemsFromGUI();
		/**
		 * @brief Add an item to the selection. 
		 * If its added to a GUI selection selection and its item 0, its connected to the GUI too
		 * @param item Item to add
		 * @param ignoreGUI Dont connect Item To GUI even if this is a GUI selection
		 * @return If the item was added
		 */
		bool addItem(PageItem *item, bool ignoreGUI=false);
		/**
		 * @brief Prepend an item to the selection. 
		 * If its added to a GUI selection selection and its item 0, its connected to the GUI too
		 * @param item Item to add
		 * @param doEmit call emitAllToGUI()
		 * @return If the item was added
		 */
		bool prependItem(PageItem *item, bool doEmit=true);
		/**
		 * \brief Unused
		 */
		bool addGroup();
		/**
		 * \brief Remove an item from list
		 * @param item page item
		 */
		bool removeItem(PageItem *item);
		/**
		 * \brief Remove the first item from the list
		 * @return If the remove was successful
		 */
		bool removeFirst();
		/**
		 * \brief Unused
		 */
		bool removeGroup();
		/**
		 * \brief Remove an item from list listNumber and return a pointer to it
		 * @param itemIndex Index of the item in the list
		 * @return Item
		 */
		PageItem* takeItem(uint itemIndex);
		/**
		 * \brief Find an item from the selection and return an index to it
		 * @param item Item pointer to find in the list
		 * @return Item
		 */
		int findItem(PageItem *item) const { return m_SelList.findIndex(item); }
		/**
		 * \brief Return the count of the selection
		 */
		uint count() const { return m_SelList.count(); }
		/**
		 * \brief Check if the selection is empty.
		 */
		bool isEmpty() const { return m_SelList.count()==0; }
		/**
		 * \brief Clear a list
		 */
		bool clear();
		/**
		 * \brief See if the first selected item is "me", usually called from an item object with "this".
		 * @param item PageItem reference
		 */
		bool primarySelectionIs(const PageItem* item) const { return (!m_SelList.isEmpty() && (item==m_SelList.first())); }
		PageItem *itemAt(int index=0) { return itemAt_(index); }
		const PageItem *itemAt(int index=0) const { return const_cast<Selection*>(this)->itemAt_(index); }
		QStringList getSelectedItemsByName() const;
		bool isMultipleSelection() const { return m_hasGroupSelection; }
		bool isGUISelection() const { return m_isGUISelection; }
		void setIsGUISelection(bool guiSelection) { m_isGUISelection=guiSelection; }
		double width() const;
		double height() const;
		//set the group rectangle properties
		void setGroupRect();
		void getGroupRect(double *x, double *y, double *w, double *h);
		//!\brief Test to see if all items in the selection are the same typedef
		bool itemsAreSameType() const;
		
	protected:
		PageItem *itemAt_(int index=0);
		SelectionList m_SelList;
		bool m_hasGroupSelection;
		bool m_isGUISelection;
		double groupX;
		double groupY;
		double groupW;
		double groupH;

		
	signals:
		void selectionIsMultiple(bool);
		void empty();
		void selectionChanged();
};

#endif
