/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "sxwdia.h"

#ifdef HAVE_XML

#include "scribusapi.h"
//#include "sxwdia.moc"
#include <qtooltip.h>
//Added by qt3to4:
#include <Q3VBoxLayout>
#include <QPixmap>
#include <Q3HBoxLayout>

extern QPixmap SCRIBUS_API loadIcon(QString nam);

SxwDialog::SxwDialog(bool update, bool prefix, bool pack) : QDialog(0, "sxwdia", true, 0)
{
	setCaption( tr("OpenOffice.org Writer Importer Options"));
	setIcon(loadIcon("AppIcon.png"));

	Q3BoxLayout* layout = new Q3VBoxLayout(this);

	Q3BoxLayout* hlayout = new Q3HBoxLayout(0, 5, 5, "hlayout");
	updateCheck = new QCheckBox( tr("Overwrite Paragraph Styles"), this,
"updateCheck");
	updateCheck->setChecked(update);
	QToolTip::add(updateCheck, "<qt>" + tr("Enabling this will overwrite existing styles in the current Scribus document") + "</qt>");
	hlayout->addWidget(updateCheck);
	layout->addLayout(hlayout);
	
	Q3BoxLayout* palayout = new Q3HBoxLayout(0,5,5, "palayout");
	packCheck = new QCheckBox( tr("Merge Paragraph Styles"), this, "packCheck");
	packCheck->setChecked(pack);
	QToolTip::add(packCheck, "<qt>" + tr("Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document's styles are named differently.") +"</qt>");
	palayout->addWidget(packCheck);
	layout->addLayout(palayout);

	Q3BoxLayout* playout = new Q3HBoxLayout(0, 5, 5, "playout");
	prefixCheck = new QCheckBox( tr("Use document name as a prefix for paragraph styles"), this, "prefixCheck");
	prefixCheck->setChecked(prefix);
	QToolTip::add(prefixCheck, "<qt>" + tr("Prepend the document name to the paragraph style name in Scribus.") +"</qt>");
	playout->addWidget(prefixCheck);
	layout->addLayout(playout);

	Q3BoxLayout* dlayout = new Q3HBoxLayout(0, 5, 5, "dlayout");
	doNotAskCheck = new QCheckBox( tr("Do not ask again"), this,
"doNotAskCheck");
	doNotAskCheck->setChecked(false);
	QToolTip::add(doNotAskCheck, "<qt>" + tr("Make these settings the default and do not prompt again when importing an OpenOffice.org 1.x document.") +"</qt>");
	//dlayout->addStretch(10);
	dlayout->addWidget(doNotAskCheck);
	layout->addLayout(dlayout);

	Q3BoxLayout* blayout = new Q3HBoxLayout(0, 5, 5, "blayout");
	blayout->addStretch(10);
	okButton = new QPushButton( tr("OK"), this, "okButton");
	blayout->addWidget(okButton);
	cancelButton = new QPushButton( tr("Cancel"), this, "cancelButton");
	blayout->addWidget(cancelButton);
	layout->addLayout(blayout);

	connect(okButton, SIGNAL(clicked()), this, SLOT(accept()));
	connect(cancelButton, SIGNAL(clicked()), this, SLOT(reject()));
}

bool SxwDialog::shouldUpdate()
{
	return updateCheck->isChecked();
}

bool SxwDialog::usePrefix()
{
	return prefixCheck->isChecked();
}

bool SxwDialog::askAgain()
{
	return !(doNotAskCheck->isChecked());
}

bool SxwDialog::packStyles()
{
	return packCheck->isChecked();	
}

SxwDialog::~SxwDialog()
{

}

#endif // HAVE_XML
