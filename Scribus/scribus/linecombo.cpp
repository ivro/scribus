/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          linecombo.cpp  -  description
                             -------------------
    begin                : Thu Jul 12 2001
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

#include "linecombo.h"
#include "icons5.h"
//Added by qt3to4:
#include <QPixmap>

/*!
 \fn LineCombo::LineCombo(QWidget* pa)
 \author Franz Schmid
 \date
 \brief Creates Combobox and inserts line type variations
 \param pa Parent Window
 \retval None
 */
LineCombo::LineCombo(QWidget* pa) : QComboBox(true, pa)
{
	setEditable(false);
	setIconSize(QSize(73, 7));
	addItem(QIcon(solidL), "");
	addItem(QIcon(dashL), "");
	addItem(QIcon(dotL), "");
	addItem(QIcon(dashdotL), "");
	addItem(QIcon(dashdotdotL), "");
}

