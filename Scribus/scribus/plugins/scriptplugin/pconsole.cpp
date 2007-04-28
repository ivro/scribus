/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/*
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.
*/

#include "pconsole.h"
//#include "pconsole.moc"

#include <qpixmap.h>
#include <qvariant.h>
#include <qpushbutton.h>
#include <q3header.h>
#include <q3listview.h>
#include <q3textedit.h>
#include <qlayout.h>
#include <qsplitter.h>
#include <qtooltip.h>
#include <q3whatsthis.h>
#include <qmenubar.h>
#include <q3filedialog.h>
#include <qstatusbar.h>

#include <q3syntaxhighlighter.h>
//Added by qt3to4:
#include <QCloseEvent>
#include <Q3GridLayout>
#include <Q3PopupMenu>
#include <Q3VBoxLayout>
#include "scribus.h"
#include "prefsmanager.h"
#include "prefsfile.h"
#include "prefscontext.h"
#include "scmessagebox.h"
#include "commonstrings.h"


extern QPixmap SCRIBUS_API loadIcon(QString nam);


PythonConsole::PythonConsole( QWidget* parent)
	: QWidget( parent, "PythonConsole", Qt::WType_TopLevel )
{
	setIcon(loadIcon("AppIcon.png"));

	// setup the menu
	menuBar = new QMenuBar(this, "menuBar");
	Q3PopupMenu *fileMenu = new Q3PopupMenu(this);
	fileMenu->insertItem(loadIcon("16/document-open.png"), tr("&Open..."), this, SLOT(slot_open()), Qt::CTRL+Qt::Key_O);
	fileMenu->insertItem(loadIcon("16/document-save.png"), tr("&Save"), this, SLOT(slot_save()), Qt::CTRL+Qt::Key_S);
	fileMenu->insertItem(loadIcon("16/document-save-as.png"), tr("Save &As..."), this, SLOT(slot_saveAs()));
	fileMenu->insertSeparator();
	fileMenu->insertItem(loadIcon("exit.png"), tr("&Exit"), this, SLOT(slot_quit()));
	menuBar->insertItem( tr("&File"), fileMenu);
	Q3PopupMenu *scriptMenu = new Q3PopupMenu(this);
	scriptMenu->insertItem(loadIcon("ok.png"), tr("&Run"), this, SLOT(slot_runScript()), Qt::Key_F9);
	scriptMenu->insertItem( tr("Run As &Console"), this, SLOT(slot_runScriptAsConsole()), Qt::CTRL+Qt::Key_F9);
	scriptMenu->insertItem( tr("&Save Output..."), this, SLOT(slot_saveOutput()));
	menuBar->insertItem( tr("&Script"), scriptMenu);

	gridLayout = new Q3GridLayout( this, 0, 0, 1, 6, "gridLayout");
	gridLayout->setMenuBar(menuBar);

	editorsLayout = new Q3VBoxLayout( 0, 0, 6, "editorsLayout");

	QSplitter *splitter = new QSplitter(Qt::Vertical, this, "splitter");
	editorsLayout->addWidget(splitter);

	commandEdit = new Q3TextEdit(splitter, "commandEdit" );
	commandEdit->setTextFormat(Qt::PlainText);
	commandEdit->setFocus();
	commandEdit->setTabStopWidth(commandEdit->pointSize() * 4);
	QSizePolicy commandEditSize( commandEdit->sizePolicy() );
	commandEditSize.setVerStretch(4);
	commandEditSize.setVerData(QSizePolicy::Preferred);
	commandEdit->setSizePolicy(commandEditSize);
	// install syntax highlighter.
	SyntaxHighlighter *sxHigh = new SyntaxHighlighter(commandEdit);
	//remove that unused warning!
	sxHigh->currentParagraph();

	outputEdit = new Q3TextEdit(splitter, "outputEdit" );
	outputEdit->setTextFormat(Qt::PlainText);
	outputEdit->setReadOnly(true);
	QSizePolicy outputEditSize( outputEdit->sizePolicy() );
	outputEditSize.setVerStretch(10);
	outputEditSize.setVerData(QSizePolicy::Expanding);
	outputEdit->setSizePolicy(outputEditSize);

	statusBar = new QStatusBar(this, "statusBar");
	statusBar->setSizeGripEnabled(true);
	commandEdit_cursorPositionChanged(0, 0);
	editorsLayout->addWidget(statusBar);
	
	gridLayout->addLayout( editorsLayout, 0, 0 );
	languageChange();
	resize(QSize(640, 480).expandedTo(minimumSizeHint()));

	// welcome note
	QString welcomeText("\"\"\"");
	welcomeText += tr("Scribus Python Console");
	welcomeText += "\n\n";
	welcomeText += tr(
			"This is derived from standard Python console "
			"so it contains some limitations esp. in the "
			"case of whitespaces. Please consult Scribus "
			"manual for more informations.");
	welcomeText += "\"\"\"\n";
	commandEdit->setText(welcomeText);
	commandEdit->selectAll(true);

	connect(commandEdit, SIGNAL(cursorPositionChanged(int, int)), this, SLOT(commandEdit_cursorPositionChanged(int, int)));
}

/*
 *  Destroys the object and frees any allocated resources
 */
PythonConsole::~PythonConsole()
{
	//delete the highlighter
	delete commandEdit->syntaxHighlighter();
}

void PythonConsole::setFonts()
{
	QFont font = QFont("Fixed");
	font.setStyleHint(QFont::TypeWriter);
	font.setPointSize(PrefsManager::instance()->appPrefs.AppFontSize);
	commandEdit->setFont(font);	
	outputEdit->setFont(font);
}

void PythonConsole::closeEvent(QCloseEvent *)
{
	emit paletteShown(false);
}

void PythonConsole::commandEdit_cursorPositionChanged(int para, int pos)
{
	statusBar->message( tr("Line: %1 Column: %2").arg(para+1).arg(pos+1));
}

void PythonConsole::languageChange()
{
	setCaption( tr("Script Console"));
	QToolTip::add(commandEdit, "<qt>" + tr("Write your commands here. A selection is processed as script") + "</qt>");
	QToolTip::add(outputEdit, "<qt>" + tr("Output of your script") + "</qt>");
}

void PythonConsole::slot_runScript()
{
	outputEdit->clear();
	parsePythonString();
	emit runCommand();
	outputEdit->setCursorPosition(0, 0);
}

void PythonConsole::slot_runScriptAsConsole()
{
	parsePythonString();
	commandEdit->clear();
	// content is destroyed. This is to prevent overwritting
	filename = QString::null;
	outputEdit->append("\n>>> " + m_command);
	emit runCommand();
}

void PythonConsole::parsePythonString()
{
	if (commandEdit->hasSelectedText())
		m_command = commandEdit->selectedText();
	else
	{
		commandEdit->selectAll(true);
		m_command = commandEdit->selectedText();
		commandEdit->selectAll(false);
	}
	// prevent user's wrong selection
	m_command += '\n';
}

/*
 * supplementary slots. Saving etc.
 */
void PythonConsole::slot_open()
{
	filename = Q3FileDialog::getOpenFileName(".",
			tr("Python Scripts (*.py *.PY)"),
			this,
			"ofdialog",
			tr("Open Python Script File"));
	if (filename.isNull())
		return;
	QFile file(filename);
	if (file.open(QIODevice::ReadOnly))
	{
		Q3TextStream stream(&file);
		commandEdit->setText(stream.read());
		file.close();
	}
}

void PythonConsole::slot_save()
{
	if (filename.isNull())
	{
		slot_saveAs();
		return;
	}
	QFile f(filename);
	if (f.open(QIODevice::WriteOnly))
	{
		Q3TextStream stream(&f);
		stream << commandEdit->text();
		f.close();
	}
}

void PythonConsole::slot_saveAs()
{
	QString oldFname = filename;
	filename = Q3FileDialog::getSaveFileName(".",
			tr("Python Scripts (*.py *.PY)"),
			this,
			"sfdialog",
			tr("Save the Python Commands in File"));
	if (filename.isNull())
		return;
	QFile f(filename);
	if (f.exists())
	{
		QString fn = QDir::convertSeparators(filename);
		if (ScMessageBox::warning(this, CommonStrings::trWarning,
			"<qt>" + tr(QString("File %1 already exists. Do you want to replace it?").arg(fn)) + "</qt>",
			QMessageBox::Yes, QMessageBox::No) == QMessageBox::No)
		{
			filename = oldFname;
			return;
		}
	}
	slot_save();
}

void PythonConsole::slot_saveOutput()
{
	QString fname = Q3FileDialog::getSaveFileName(".",
			tr("Text Files (*.txt)"),
			this,
			"sfdialog",
			tr("Save Current Output"));
	if (fname == QString::null)
		return;
	QFile f(fname);
	if (!f.exists())
	{
		QString fn = QDir::convertSeparators(filename);
		if (QMessageBox::warning(this, CommonStrings::trWarning,
			"<qt>" + tr(QString("File %1 already exists. Do you want to replace it?").arg(fn)) + "</qt>",
			QMessageBox::Yes, QMessageBox::No) == QMessageBox::No)
			return;
	}
	// save
	if (f.open(QIODevice::WriteOnly))
	{
		Q3TextStream stream(&f);
		stream << outputEdit->text();
		f.close();
	}
}

void PythonConsole::slot_quit()
{
	emit paletteShown(false);
}

/*
 * Syntax highlighting
 */
SyntaxHighlighter::SyntaxHighlighter(Q3TextEdit *textEdit) : Q3SyntaxHighlighter(textEdit)
{
	// Reserved keywords in Python 2.4
	keywords << "and" << "assert" << "break" << "class" << "continue" << "def"
			 << "del" << "elif" << "else" << "except" << "exec" << "finally"
			 << "for" << "from" << "global" << "if" << "import" << "in"
			 << "is" << "lambda" << "not" << "or" << "pass" << "print" << "raise"
			 << "return" << "try" << "while" << "yield";
}

int SyntaxHighlighter::highlightParagraph(const QString &text, int endStateOfLastPara)
{
	// position in the text
	int i = 0;

	/* ! ! signals error message, which we want in red */
	if (text.length() >= 3 && text[0] == '!' && text[1] == ' ' && text[2] == '!')
	{
		setFormat(0, 3, QColor(Qt::white));
		setFormat(3, text.length() - 2, colors.errorColor);
		return 0;
	}

	/* Turns of syntax highlighting for this line */
	if (text.length() >= 2 && text[0] == '!' && text[i + 1] == ' ')
	{
		setFormat(0, 2, QColor(Qt::white));
		setFormat(2, text.length() - 2, colors.textColor);
		return 0;
	}

	if (endStateOfLastPara == 1)
	{
		int docstrEnd = text.find("\"\"\"");
		if (docstrEnd == -1)
			docstrEnd = text.length();
		setFormat(i, docstrEnd + 3, colors.commentColor);
		if (docstrEnd == (int)text.length())
			return 1;
		i = docstrEnd + 3; // move back to """
	}

	while (i < text.length())
	{
		// HACK: remember the i is *the next* index!
		QChar ch = text[i++];

		if (ch.isLetter())
		{
			// Read one word
			unsigned long s = i - 1;
			QString actualWord = ch;
			while ((ch = text[i]).isLetterOrNumber() || ch == '_')
			{
				i++;
				actualWord += ch;
			}

			// Check for reserved keywords
			if (keywords.contains(actualWord) != 0)
				setFormat(s, (i - s), colors.keywordColor);
			else
				setFormat(s, (i - s), colors.textColor);
		} // ch.isletter
		else if (ch == '+' && text[i] != '=')
			setFormat(i - 1, 1, colors.signColor);
		else if (ch == '-' && text[i] != '=')
			setFormat(i - 1, 1, colors.signColor);
		else if (ch == '*' && text[i] == '*' && text[i + 1] != '=')
			setFormat(i - 1, 2, colors.signColor);
		else if (ch == '*' && (text[i] != '=' && text[i] != '*'))
			setFormat(i - 1, 1, colors.signColor);
		else if (ch == '/' && text[i] == '/' && text[i + 1] != '=')
			setFormat(i - 1, 2, colors.signColor);
		else if (ch == '/' && (text[i] != '=' && text[i] != '/'))
			setFormat(i - 1, 1, colors.signColor);
		else if (ch == '%' && text[i] != '=')
			setFormat(i - 1, 1, colors.signColor);
		else if (ch == '&' && text[i] != '=')
			setFormat(i - 1, 1, colors.signColor);
		else if (ch == '|' && text[i] != '=')
			setFormat(i - 1, 1, colors.signColor);
		else if (ch == '^' && text[i] != '=')
			setFormat(i - 1, 1, colors.signColor);
		else if (ch == '=' && text[i] == '=')
		{
			setFormat(i - 1, 2, colors.signColor);
			i++;
		}
		else if (ch == '!' && text[i] == '=')
		{
			setFormat(i - 1, 2, colors.signColor);
			i++;
		}
		else if (ch == '~')
			setFormat(i - 1, 1, colors.signColor);
		else if (ch == '<')
		{
			if (text[i] == '>')
			{
				setFormat(i -1, 2, colors.signColor);
				i++;
			}
			else if (text[i] == '<' && text[i + 1] == '=')
			{
				setFormat(i - 1, 3, colors.textColor);
				i += 2;
			}
			else if (text[i] == '=' || text[i] == '<')
			{
				setFormat(i - 1, 2, colors.signColor);
				i++;
			}
			else
				setFormat(i - 1, 1, colors.signColor);
		} // ch == '<'
		else if (ch == '>')
		{
			if (text[i] == '>' && text[i + 1] == '=')
			{
				setFormat(i - 1, 3, colors.textColor);
				i += 2;
			}
			else if (text[i] == '=' || text[i] == '>')
			{
				setFormat(i - 1, 2, colors.signColor);
				i++;
			}
			else
				setFormat(i - 1, 1, colors.signColor);
		} // ch == '>'
		else if (ch >= '0' && ch <= '9')
		{
			unsigned long s = i - 1; /* Start of number */
			if (text[i] == 'x' || text[i] == 'X')
			{
				i++;
				while ((text[i] >= '0' && text[i] <= '9') || (text[i] >= 'a' && text[i] <= 'f') || (text[i] >= 'A' && text[i] <= 'F'))
					i++;
				if (text[i] == 'L')
					i++;
				setFormat(s, (i - s), colors.numberColor);
			}
			while (text[i] >= '0' && text[i] <= '9')
				i++;

			bool floating = false;
			if (text[i] == '.')
			{
				i++;
				floating = true;
				while (text[i] >= '0' && text[i] <= '9')
					i++;
			}
			if (text[i] == 'e' || text[i] == 'E')
			{
				floating = true;
				i++;
				if (text[i] == '+' || text[i] == '-')
					i++;
				while (text[i] >= '0' && text[i] <= '9')
					i++;
			}
			if (!floating && text[i] == 'L')
				i++;
			setFormat(s, (i - s), colors.numberColor);
		} // if number
		else if ( ch == '@')
			setFormat(i - 1, 1, colors.signColor);
		else if (ch == '#')
		{
			setFormat((i - 1), (text.length() - i), colors.commentColor);
			i = text.length();
		}
		// docstrings etc. (""" blah """)
		else if (ch == '"' && text.at(i) == '"' && text.at(i+1) == '"')
		{
			bool cont = false; // continue?
			int docstrEnd = text.find("\"\"\"", i + 2);
			if (docstrEnd == -1)
			{
				docstrEnd = text.length() - i;
				cont = true;
			}
			setFormat(i - 1, docstrEnd + 2, colors.commentColor);
			if (cont)
				return 1; // comment """ is opened
			i += docstrEnd + 2;
		} // docstrings
		else if ( ch == '\'' || ch == '"')
		{
			unsigned long s = i - 1;
			if (text[i] != ch)
			{
				while (text[i] != ch && i != text.length())
					i++;
				if (text[i] == ch)
					i++;
				setFormat(s, (i - s), colors.stringColor);
			}
			else if (text[i] == ch && text[i + 1] == ch)
			{
				i += 2;
				setFormat(s, (i - s), colors.textColor);

			}
			else if (text[i] == ch)
			{
				i++;
				setFormat(s, (i - s), colors.stringColor);
			}
		}
		/* Default */
		else setFormat(i - 1, 1, colors.textColor);
	}	// End of while statement

	return 0;
}

SyntaxColors::SyntaxColors()
{
	PrefsContext* prefs = PrefsManager::instance()->prefsFile->getPluginContext("scriptplugin");
	errorColor.setNamedColor(prefs->get("syntaxerror", "#aa0000"));
	commentColor.setNamedColor(prefs->get("syntaxcomment", "#A0A0A0"));
	keywordColor.setNamedColor(prefs->get("syntaxkeyword", "#00007f"));
	signColor.setNamedColor(prefs->get("syntaxsign", "#aa00ff"));
	numberColor.setNamedColor(prefs->get("syntaxnumber", "#ffaa00"));
	stringColor.setNamedColor(prefs->get("syntaxstring", "#005500"));
	textColor.setNamedColor(prefs->get("syntaxtext", "#000000"));
}

SyntaxColors::~SyntaxColors()
{
	PrefsContext* prefs = PrefsManager::instance()->prefsFile->getPluginContext("scriptplugin");
	prefs->set("syntaxerror", qcolor2named(errorColor));
	prefs->set("syntaxcomment", qcolor2named(commentColor));
	prefs->set("syntaxkeyword", qcolor2named(keywordColor));
	prefs->set("syntaxsign", qcolor2named(signColor));
	prefs->set("syntaxnumber", qcolor2named(numberColor));
	prefs->set("syntaxstring", qcolor2named(stringColor));
	prefs->set("syntaxtext", qcolor2named(textColor));
}

QString SyntaxColors::qcolor2named(QColor color)
{
	int r, g, b;
	QString retval("#");
	QString oct;
	color.getRgb(&r, &g, &b);
	retval += oct.setNum(r, 16).rightJustify(2, '0');
	retval += oct.setNum(g, 16).rightJustify(2, '0');
	retval += oct.setNum(b, 16).rightJustify(2, '0');
	return retval;
}
