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

#include "sctoolbar.h"
#include "sctoolbar.moc"
#include "prefscontext.h"
#include "prefsfile.h"
#include <qevent.h>
#include <qdockarea.h>
#include <qdockwindow.h>
#include <qmainwindow.h>
#include <qstring.h>
#include <qtoolbutton.h>
#include <qpopupmenu.h>

extern QPixmap loadIcon(QString nam);
extern PrefsFile* prefsFile;

ScToolBar::ScToolBar(const QString& name, const QString &prefName, QMainWindow *parent, QDockWindow::Orientation o)
: QToolBar(name, parent),
  m_name(QString("ToolBar-%1").arg(prefName)),
  m_prefs(prefsFile->getContext(m_name))
{
	hide();
	setCloseMode(QDockWindow::Undocked);

	if (m_prefs->contains("IsDocked")) // set docking
	{
		if (m_prefs->getBool("IsDocked", true)) {
			QString dockPlace = m_prefs->get("DockPlace", "top");
			if (dockPlace == "top")
				mainWindow()->addDockWindow(this, Qt::DockTop);
			else if (dockPlace == "bottom")
				mainWindow()->addDockWindow(this, Qt::DockBottom);
			else if (dockPlace == "right")
				mainWindow()->addDockWindow(this, Qt::DockRight);
			else if (dockPlace == "left")
				mainWindow()->addDockWindow(this, Qt::DockLeft);
		} else {
			undock();
			move(QPoint(m_prefs->getInt("x", 50), m_prefs->getInt("y", 50)));
		}
	}

	if (m_prefs->contains("FloatOrientation")) // set float orientation
	{
		floatOrientation = m_prefs->getInt("FloatOrientation", 1) == Hor ?
		                   QDockWindow::Horizontal : QDockWindow::Vertical;
	}
	else
	{
		floatOrientation = o;
		m_prefs->set("FloatOrientation", o == QDockWindow::Horizontal ? Hor : Vert);
	}

	if (!m_prefs->contains("PosIndex"))
		storeDockPosition();
	else
		moveDocks();

	dockTop = m_prefs->getBool("DockTop", 1);
	dockRight = m_prefs->getBool("DockRight", 1);
	dockBottom = m_prefs->getBool("DockBottom", 1);
	dockLeft = m_prefs->getBool("DockLeft", 1);
	mainWindow()->setDockEnabled(this, DockTop, dockTop);
	mainWindow()->setDockEnabled(this, DockRight, dockRight);
	mainWindow()->setDockEnabled(this, DockBottom, dockBottom);
	mainWindow()->setDockEnabled(this, DockLeft, dockLeft);

	if (place() == InDock)
		setOrientation(area()->orientation());
	else
		setOrientation(floatOrientation);

	initPrefsButton();
	languageChange();

	connect(this, SIGNAL(placeChanged(QDockWindow::Place)),
	        this, SLOT(slotPlaceChanged(QDockWindow::Place)));
}

void ScToolBar::initVisibility()
{
	if (m_prefs->getBool("IsVisible", true))
	{
		show();
		if (place() == InDock)
			setOrientation(area()->orientation());
		else
			setOrientation(floatOrientation);
	}
	else
		hide();
	connect(this, SIGNAL(visibilityChanged(bool)), this, SLOT(slotVisibilityChanged(bool)));
}

int ScToolBar::position()
{
	if (place() == QDockWindow::OutsideDock)
		return -1;

	int index = -1;
	area()->hasDockWindow(this, &index);

	return index;
}

void ScToolBar::storeDockPosition()
{
	m_prefs->set("PosIndex", position());
	m_prefs->set("Offset", offset());
}

void ScToolBar::storeDockPositions()
{
	if (place() == QDockWindow::OutsideDock)
		return; // nothing to store if not docked
	QPtrList<QDockWindow> tbs = area()->dockWindowList();
	for (uint i = 0; i < tbs.count(); ++i)
	{
		if (ScToolBar *sctb = dynamic_cast<ScToolBar*>(tbs.at(i)))
			sctb->storeDockPosition();
	}
}

void ScToolBar::moveDocks()
{
	if (place() == QDockWindow::OutsideDock)
		return; // do not move if not docked;
	QPtrList<QDockWindow> tbs = area()->dockWindowList();
	for (uint i = 0; i < tbs.count(); ++i)
	{
		if (ScToolBar *sctb = dynamic_cast<ScToolBar*>(tbs.at(i)))
			sctb->moveDock();
	}
}

void ScToolBar::moveDock()
{
	if (place() == QDockWindow::OutsideDock)
		return; // do not move if not docked
	area()->moveDockWindow(this, m_prefs->getInt("PosIndex", -1));
	setOffset(m_prefs->getInt("Offset", 0));
}

void ScToolBar::slotPlaceChanged(QDockWindow::Place p)
{
	m_prefs->set("IsDocked", p == QDockWindow::InDock);
	m_prefs->set("x", x());
	m_prefs->set("y", y());
	if (p == QDockWindow::InDock) {
		setOrientation(area()->orientation());
		QString dockPlace = "top";
		if (area() == mainWindow()->leftDock())
			dockPlace = "left";
		else if (area() == mainWindow()->rightDock())
			dockPlace = "right";
		else if (area() == mainWindow()->bottomDock())
			dockPlace = "bottom";

		m_prefs->set("DockPlace", dockPlace);
		storeDockPositions();
	} else {
		setOrientation(floatOrientation);
	}
}

void ScToolBar::slotVisibilityChanged(bool visible)
{
	m_prefs->set("IsVisible", visible);
}

void ScToolBar::slotTop()
{
	dockTop = !dockTop;
	mainWindow()->setDockEnabled(this, DockTop, dockTop);
	dockMenu->setItemChecked(dockMenu->idAt(0), dockTop);
	m_prefs->set("DockTop", dockTop);
	if (place() == InDock && mainWindow()->topDock() == area())
		undock();
}

void ScToolBar::slotRight()
{
	dockRight = !dockRight;
	mainWindow()->setDockEnabled(this, DockRight, dockRight);
	dockMenu->setItemChecked(dockMenu->idAt(1), dockRight);
	m_prefs->set("DockRight", dockRight);
	if (place() == InDock && mainWindow()->rightDock() == area())
		undock();
}

void ScToolBar::slotBottom()
{
	dockBottom = !dockBottom;
	mainWindow()->setDockEnabled(this, DockBottom, dockBottom);
	dockMenu->setItemChecked(dockMenu->idAt(2), dockBottom);
	m_prefs->set("DockBottom", dockBottom);
	if (place() == InDock && mainWindow()->bottomDock() == area())
		undock();
}

void ScToolBar::slotLeft()
{
	dockLeft = !dockLeft;
	mainWindow()->setDockEnabled(this, DockLeft, dockLeft);
	dockMenu->setItemChecked(dockMenu->idAt(3), dockLeft);
	m_prefs->set("DockLeft", dockLeft);
	if (place() == InDock && mainWindow()->leftDock() == area())
		undock();
}

void ScToolBar::slotVert()
{
	floatOrientation = QDockWindow::Vertical;
	orientationMenu->setItemChecked(orientationMenu->idAt(0), false);
	orientationMenu->setItemChecked(orientationMenu->idAt(1), true);
	m_prefs->set("FloatOrientation", Vert);
	if (place() != InDock)
		setOrientation(floatOrientation);
}

void ScToolBar::slotHor()
{
	floatOrientation = QDockWindow::Horizontal;
	orientationMenu->setItemChecked(orientationMenu->idAt(0), true);
	orientationMenu->setItemChecked(orientationMenu->idAt(1), false);
	m_prefs->set("FloatOrientation", Hor);
	if (place() != InDock)
		setOrientation(floatOrientation);
}

void ScToolBar::languageChange()
{
	popup->clear();

	dockMenu = new QPopupMenu(0, "dockMenu");
	dockMenu->setCheckable(true);
	dockMenu->insertItem(tr("Top"), this, SLOT(slotTop()));
	dockMenu->insertItem(tr("Right"), this, SLOT(slotRight()));
	dockMenu->insertItem(tr("Bottom"), this, SLOT(slotBottom()));
	dockMenu->insertItem(tr("Left"), this, SLOT(slotLeft()));
	popup->insertItem(tr("Allow Docking To..."), dockMenu);
	dockMenu->setItemChecked(dockMenu->idAt(0), dockTop);
	dockMenu->setItemChecked(dockMenu->idAt(1), dockRight);
	dockMenu->setItemChecked(dockMenu->idAt(2), dockBottom);
	dockMenu->setItemChecked(dockMenu->idAt(3), dockLeft);

	orientationMenu = new QPopupMenu(0, "orientationMenu");
	orientationMenu->setCheckable(true);
	orientationMenu->insertItem(tr("Horizontal"), this, SLOT(slotHor()));
	orientationMenu->insertItem(tr("Vertical"), this, SLOT(slotVert()));
	popup->insertItem(tr("Floating Orientation..."), orientationMenu);
	if (floatOrientation == QDockWindow::Horizontal)
	{
		orientationMenu->setItemChecked(orientationMenu->idAt(0), true);
		orientationMenu->setItemChecked(orientationMenu->idAt(1), false);
	}
	else
	{
		orientationMenu->setItemChecked(orientationMenu->idAt(0), false);
		orientationMenu->setItemChecked(orientationMenu->idAt(1), true);
	}
}

void ScToolBar::initPrefsButton()
{
	prefsButton = new QToolButton(Qt::DownArrow, this, "tbprefsbutton");
	prefsButton->setAutoRaise(true);
	popup = new QPopupMenu(0, "prefspopup");
	prefsButton->setPopup(popup);
	prefsButton->setPopupDelay(1);
}

ScToolBar::~ScToolBar()
{

}
