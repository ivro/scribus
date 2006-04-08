/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
 *   Copyright (C) 2006 by Riku Leino                                      *
 *   riku@scribus.info                                                     *
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 *   This program is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU General Public License for more details.                          *
 *                                                                         *
 *   You should have received a copy of the GNU General Public License     *
 *   along with this program; if not, write to the                         *
 *   Free Software Foundation, Inc.,                                       *
 *   59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.             *
 ***************************************************************************/

#ifndef SCTOOLBAR_H
#define SCTOOLBAR_H

#include <qtoolbar.h>

class QMainWindow;
class QString;
class PrefsContext;
class QCloseEvent;
class QToolButton;
class QPopupMenu;

class ScToolBar : public QToolBar
{
	Q_OBJECT
public:
	// prefName is the name without tr() that will be used in the preferences for this toolbar
	// if using name settings depend on the language
	ScToolBar(const QString& name, const QString &prefName, QMainWindow *parent, QDockWindow::Orientation o = QDockWindow::Horizontal);
	virtual ~ScToolBar();

	int position();
	void storeDockPosition();
	void moveDock();
	void initVisibility();

public slots:
	void languageChange();

protected slots:
	void slotPlaceChanged(QDockWindow::Place p);
	void slotVisibilityChanged(bool visible);
	void slotTop();
	void slotRight();
	void slotBottom();
	void slotLeft();
	void slotVert();
	void slotHor();

private:
	QString m_name;
	PrefsContext *m_prefs;
	QDockWindow::Orientation floatOrientation;
	QToolButton *prefsButton;
	QPopupMenu  *popup;
	QPopupMenu  *dockMenu;
	QPopupMenu  *orientationMenu;

	bool dockTop;
	bool dockRight;
	bool dockBottom;
	bool dockLeft;

	void initPrefsButton();
	void storeDockPositions();
	void moveDocks();

	enum Orientation { Vert, Hor };
};

#endif
