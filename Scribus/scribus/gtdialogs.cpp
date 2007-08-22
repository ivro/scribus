/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
 *   Copyright (C) 2004 by Riku Leino                                      *
 *   tsoots@gmail.com                                                      *
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

#include "gtdialogs.h"
#include "prefsmanager.h"
#include "prefscontext.h"
#include "prefsfile.h"
#include "sccombobox.h"
#include <QLabel>
//Added by qt3to4:
#include <QHBoxLayout>
#include <QPixmap>
#include <QVBoxLayout>
#include <QToolTip>
#include <QPushButton>
#include "commonstrings.h"
#include "util_icon.h"
#include "gtfiledialog.h"

extern QString DocDir;


/********* Class gtImporterDialog*******************************************************************/

gtImporterDialog::gtImporterDialog(const QStringList& importers, int currentSelection)
{
	setCaption( tr("Choose the importer to use"));
	setIcon(loadIcon("AppIcon.png"));

	QBoxLayout* layout = new QVBoxLayout(this);

	QBoxLayout* llayout = new QHBoxLayout(0, 5, 5, "llayout");
	QLabel* label = new QLabel( tr("Choose the importer to use"), this, "label");
	llayout->addWidget(label);
	layout->addLayout(llayout);

	QBoxLayout* ilayout = new QHBoxLayout(0, 5, 5, "dlayout2");
	importerCombo = new ScComboBox(0, this, "importerCombo2");
	importerCombo->setMinimumSize(QSize(150, 0));
	importerCombo->setToolTip( tr("Choose the importer to use"));
	importerCombo->insertStringList(importers);
	if (static_cast<int>(importers.count()) > currentSelection)
		importerCombo->setCurrentItem(currentSelection);
	else
		importerCombo->setCurrentItem(0);
	ilayout->addWidget(importerCombo);
	layout->addLayout(ilayout);

	QBoxLayout* dlayout = new QHBoxLayout(0, 5, 5, "dlayout2");
	rememberCheck = new QCheckBox( tr("Remember association"), this, "rememberCheck");
	rememberCheck->setChecked(false);
	rememberCheck->setToolTip( "<qt>" + tr("Remember the file extension - importer association and do not ask again to select an importer for files of this type.") + "</qt>" );
	dlayout->addStretch(10);
	dlayout->addWidget(rememberCheck);
	layout->addLayout(dlayout);

	QBoxLayout* blayout = new QHBoxLayout(0, 5, 5, "blayout2");
	blayout->addStretch(10);
	okButton = new QPushButton( CommonStrings::tr_OK, this, "okButton2");
	blayout->addWidget(okButton);
	layout->addLayout(blayout);

	connect(okButton, SIGNAL(clicked()), this, SLOT(accept()));
}

bool gtImporterDialog::shouldRemember()
{
	return rememberCheck->isChecked();
}

QString gtImporterDialog::getImporter()
{
	return importerCombo->currentText();
}

gtImporterDialog::~gtImporterDialog()
{

}

/********* Class gtDialogs *************************************************************************/

gtDialogs::gtDialogs()
{
	fdia = NULL;
	fileName = "";
	encoding = "";
	importer = -1;
	prefs = PrefsManager::instance()->prefsFile->getContext("gtDialogs");
	pwd = QDir::currentPath();
}

bool gtDialogs::runFileDialog(const QString& filters, const QStringList& importers)
{
	bool accepted = false;
	PrefsContext* dirs = PrefsManager::instance()->prefsFile->getContext("dirs");
	QString dir = dirs->get("get_text", ".");
	fdia = new gtFileDialog(filters, importers, dir);
	
	if (fdia->exec() == QDialog::Accepted)
	{
		fileName = fdia->selectedFile();
		if (!fileName.isEmpty())
			accepted = true;
		encoding = fdia->encodingCombo->currentText();
		if (encoding == "UTF-16")
			encoding = "ISO-10646-UCS-2";
		importer = fdia->importerCombo->currentItem() - 1;
		dirs->set("get_text", fileName.left(fileName.lastIndexOf("/")));
	}
	QDir::setCurrent(pwd);
	return accepted;
}

bool gtDialogs::runImporterDialog(const QStringList& importers)
{
	int curSel = prefs->getInt("curSel", 0);
	QString extension = "";
	QString shortName = fileName.right(fileName.length() - fileName.lastIndexOf("/") - 1);
	if (shortName.indexOf(".") == -1)
		extension = ".no_extension";
	else
		extension = fileName.right(fileName.length() - fileName.lastIndexOf("."));
	int extensionSel = prefs->getInt(extension, -1);
	QString imp = prefs->get("remember"+extension, QString("false"));
	QString res = "";
	bool shouldRemember = false;
	bool ok = false;
	if (imp != "false")
	{
		res = imp;
		if (importers.contains(res) > 0)
			ok = true;
	}
	
	if (!ok)
	{
		if ((extensionSel > -1) && (extensionSel < static_cast<int>(importers.count())))
			curSel = extensionSel;
		else
			curSel = 0;
		gtImporterDialog* idia = new gtImporterDialog(importers, curSel);
		if (idia->exec())
		{
			res = idia->getImporter();
			shouldRemember = idia->shouldRemember();
			
			ok = true;
		}
		delete idia;
	}

	if (ok)
	{
		QString fileExtension = "";
		for (int i = 0; i < importers.count(); ++i)
		{
			if (importers[i] == res)
			{
				importer = i;
				prefs->set("curSel", static_cast<int>(i));
				if (fileName.indexOf(".") != -1)
				{
					if (shortName.indexOf(".") == -1)
						fileExtension = ".no_extension";
					else
						fileExtension = fileName.right(fileName.length() - fileName.lastIndexOf("."));
					if (!fileExtension.isEmpty())
					{
						prefs->set(fileExtension, static_cast<int>(i));
						if (shouldRemember)
							prefs->set("remember"+fileExtension, res);
					}
				}
				break;
			}
		}
	}
	return ok;
}

const QString& gtDialogs::getFileName()
{
	return fileName;
}

const QString& gtDialogs::getEncoding()
{
	return encoding;
}

int gtDialogs::getImporter()
{
	return importer;
}

bool gtDialogs::importTextOnly()
{
	bool ret = false;
	if (fdia)
		ret = fdia->textOnlyCheckBox->isChecked();
	return ret;
}

gtDialogs::~gtDialogs()
{
	delete fdia;
}
