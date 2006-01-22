/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef SXWDIA_H
#define SXWDIA_H

#include "scconfig.h"

#ifdef HAVE_XML

#include <qcheckbox.h>
#include <qcombobox.h>
#include <qdialog.h>
#include <qlabel.h>
#include <qlayout.h>
#include <qpushbutton.h>
#include <qstring.h>
#include <qstringlist.h>

class SxwDialog : public QDialog
{
	Q_OBJECT

public:
	SxwDialog(bool update, bool prefix, bool pack);
	~SxwDialog();
	bool shouldUpdate();
	bool usePrefix();
	bool askAgain();
	bool packStyles();
private:
	QCheckBox* updateCheck;
	QCheckBox* prefixCheck;
	QCheckBox* doNotAskCheck;
	QCheckBox* packCheck;
	QPushButton* okButton;
	QPushButton* cancelButton;
};

#endif // HAVE_XML

#endif // CSVDIA_H
