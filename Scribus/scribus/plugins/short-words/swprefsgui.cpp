/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "swprefsgui.h"
#include "version.h"
#include "scpaths.h"
#include "commonstrings.h"

#include <qvariant.h>
#include <qwidget.h>
#include <qlayout.h>
#include <qpushbutton.h>
#include <qlabel.h>
#include <qfile.h>
#include <qdir.h>
#include <qtooltip.h>
#include <qtextcodec.h>
//Added by qt3to4:
#include <Q3GridLayout>
#include <Q3HBoxLayout>
#include <Q3VBoxLayout>
#include <QTextStream>

#include "scmessagebox.h"

SWPrefsGui::SWPrefsGui(QWidget* parent )
	: PrefsPanel(parent, "SWPrefsGui")
{
	SWPrefsGuiLayout = new Q3GridLayout(this, 1, 1, 11, 6, "SWPrefsGuiLayout");

	editLayout = new Q3VBoxLayout(0, 0, 6, "editLayout");

	titleLabel = new QLabel(this, "titleLabel");
	editLayout->addWidget(titleLabel);
	cfgEdit = new Q3TextEdit(this, "cfgEdit");
	editLayout->addWidget(cfgEdit);

	buttonLayout = new Q3HBoxLayout(0, 0, 6, "buttonLayout");
	buttonSpacer = new QSpacerItem(40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);
	buttonLayout->addItem(buttonSpacer);

	okButton = new QPushButton(this, "okButton");
	buttonLayout->addWidget(okButton);

	resetButton = new QPushButton(this, "resetButton");
	buttonLayout->addWidget(resetButton);
	editLayout->addLayout(buttonLayout);

	SWPrefsGuiLayout->addLayout(editLayout, 0, 0);
	languageChange();
	resize(QSize(362, 359).expandedTo(minimumSizeHint()));

	// defaults
	if (QFile::exists(RC_PATH_USR))
	{
		titleLabel->setText( tr("User settings"));
		loadCfgFile(RC_PATH_USR);
	}
	else
	{
		titleLabel->setText( tr("System wide configuration"));
		resetButton->setEnabled(false);
		loadCfgFile(RC_PATH);
	}
	okButton->setEnabled(false);
	SWSyntaxHighlighter *sxHigh = new SWSyntaxHighlighter(cfgEdit);
	//remove that unused warning!
	sxHigh->currentParagraph();

	// signals
	connect(okButton, SIGNAL(clicked()), this, SLOT(okButton_pressed()));
	connect(resetButton, SIGNAL(clicked()), this, SLOT(resetButton_pressed()));
	connect(cfgEdit, SIGNAL(textChanged()), this, SLOT(cfgEdit_changed()));
}

SWPrefsGui::~SWPrefsGui()
{
	//delete the highlighter
	delete cfgEdit->syntaxHighlighter();
}

/*
 *  Sets the strings of the subwidgets using the current
 *  language.
 */
void SWPrefsGui::languageChange()
{
	okButton->setText( tr("&Save"));
	resetButton->setText( tr("&Reset"));
	// tooltips
	QToolTip::add(okButton, tr("Save user configuration"));
	QToolTip::add(resetButton, "<qt>" + tr("Reload system wide configuration and remove user defined one") + "</qt>");
	QToolTip::add(cfgEdit, "<qt>" + tr("Edit custom configuration. If you save it, it will be used over system wide configuration") + "</qt>");
}

void SWPrefsGui::apply()
{
	if (okButton->isEnabled())
		okButton_pressed();
}

void SWPrefsGui::okButton_pressed()
{
	if (QFile::exists(RC_PATH_USR))
	{
		if ((ScMessageBox::warning(this, tr("Short Words"),
				"<qt>" + tr("User configuration exists elready. "
						"Do you really want to overwrite it?") + "</qt>",
				CommonStrings::trYes,
				CommonStrings::trNo, 0, 0, 1)
			) == 1)
			return;
	}
	QFile f(RC_PATH_USR);
	if (!f.open(QIODevice::WriteOnly))
	{
		QMessageBox::warning(this, tr("Short Words"),
			 "<qt>" + tr("Cannot write file %1.").arg(RC_PATH_USR) + "</qt>",
			 CommonStrings::tr_OK);
	}
	QTextStream stream(&f);
	stream.setCodec("UTF-8");
	stream << cfgEdit->text();
	f.close();
	titleLabel->setText( tr("User settings saved"));
	okButton->setEnabled(false);
}

void SWPrefsGui::resetButton_pressed()
{
	loadCfgFile(RC_PATH);
	QDir d;
	d.remove(RC_PATH_USR);
	okButton->setEnabled(false);
	resetButton->setEnabled(false);
	titleLabel->setText( tr("System wide configuration reloaded"));
}

void SWPrefsGui::cfgEdit_changed()
{
	resetButton->setEnabled(true);
	okButton->setEnabled(true);
}

bool SWPrefsGui::loadCfgFile(QString filename)
{
	QFile f(filename);
	if (!f.open(QIODevice::ReadOnly))
	{
		titleLabel->setText( tr("Cannot open file %1").arg(f.name()));
		return false;
	}
	cfgEdit->clear();
	QTextStream stream(&f);
	stream.setCodec("UTF-8");
	while (!stream.atEnd())
		cfgEdit->append(stream.readLine());
	f.close();
	return true;
}


/*
 * Syntax highlighting
 */
SWSyntaxHighlighter::SWSyntaxHighlighter(Q3TextEdit *textEdit)
	: Q3SyntaxHighlighter(textEdit)
{
}

int SWSyntaxHighlighter::highlightParagraph(const QString &text, int)
{
	// position in the text
	if (text[0] == '#')
	{
		QFont f(textEdit()->currentFont());
		f.setItalic(true);
		setFormat(0, text.length(), f, QColor(Qt::gray));
	}
	return 0;
}

//#include "swprefsgui.moc"
