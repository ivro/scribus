/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include <q3table.h>
#include <q3groupbox.h>
#include <qlayout.h>
#include <qcheckbox.h>
//Added by qt3to4:
#include <Q3HBoxLayout>
#include <QLabel>
#include <Q3GridLayout>
#include <QPixmap>
#include <Q3Frame>
#include <QEvent>

#include "scconfig.h"
#include "scribuscore.h"
#include "scribusdoc.h"
#include "scribusview.h"
#include "fontcombo.h"
#include "sccombobox.h"
#include "scpainter.h"
#include "unicodesearch.h"
#include "selection.h"
#include "commonstrings.h"
#include "fonts/scfontmetrics.h"
#include "util.h"
#include "scpaths.h"

#include "charselect.h"
//#include "charselect.moc"


CharSelect::CharSelect(QWidget* parent)
	: ScrPaletteBase(parent, "CharSelect"),
	m_doc(0),
	m_Item(0)
{
	installEventFilter(this);

	setCaption( tr("Character Palette"));
	paletteFileMask = tr("Scribus Char Palette (*.ucp);;All Files (*)");

	Q3HBoxLayout* mainLayout = new Q3HBoxLayout(this);
	mainLayout->setSpacing(6);
	mainLayout->setMargin(11);

	// big table related
	m_bigPalette = new Q3GroupBox(0, Qt::Vertical, tr("Enhanced Palette"), this, "m_bigPalette");
	m_bigPalette->layout()->setSpacing(5);
	m_bigPalette->layout()->setMargin(10);
	Q3GridLayout* bigLayout = new Q3GridLayout(m_bigPalette->layout());

	// combos
	Q3HBoxLayout* combosLayout = new Q3HBoxLayout();
	fontLabel = new QLabel(m_bigPalette, "fontLabel");
	fontLabel->setText( tr("Font:"));

	fontSelector = new FontCombo(m_bigPalette);
	fontSelector->setMaximumSize(190, 30);

	rangeLabel = new QLabel(m_bigPalette, "fontLabel");
	rangeLabel->setText( tr("Character Class:"));

	rangeSelector = new ScComboBox(false, m_bigPalette, "rangeSelector");
	m_characterClass = 0;

	combosLayout->addWidget(fontLabel);
	combosLayout->addWidget(fontSelector);
	combosLayout->addWidget(rangeLabel);
	combosLayout->addWidget(rangeSelector);

	bigLayout->addLayout(combosLayout, 0, 0);

	m_charTable = new CharTable(m_bigPalette, 16, m_doc, m_fontInUse);
	m_charTable->enableDrops(false);

	bigLayout->addWidget(m_charTable, 1, 0);

	sample = new QLabel(m_bigPalette, "sample");
	sample->setFrameShape(Q3Frame::Box);
	sample->setPaletteBackgroundColor(paletteBackgroundColor());
	sample->setMinimumHeight(48);
	sample->setMinimumWidth(460);

	bigLayout->addWidget(sample, 2, 0);

	insertButton = new QPushButton( tr("&Insert"), m_bigPalette, "insertButton");
	deleteButton = new QPushButton( tr("C&lear"), m_bigPalette, "deleteButton");

	Q3HBoxLayout* buttonLayout = new Q3HBoxLayout();
	QSpacerItem* buttonSpacer = new QSpacerItem(20, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);
	buttonLayout->addItem(buttonSpacer);
	buttonLayout->addWidget(insertButton);
	buttonLayout->addWidget(deleteButton);

	bigLayout->addLayout(buttonLayout, 3, 0);

	// quick table
	m_quickPalette = new Q3GroupBox(0, Qt::Vertical, tr("Quick Palette"), this, "m_quickPalette");
	m_quickPalette->layout()->setSpacing(5);
	m_quickPalette->layout()->setMargin(10);
	Q3GridLayout* quickLayout = new Q3GridLayout(m_quickPalette->layout());

	hideCheck = new QCheckBox( tr("Hide Enhanced"), m_quickPalette, "hideCheck");
	quickLayout->addWidget(hideCheck, 0, 0);

	unicodeButton = new UnicodeChooseButton(m_quickPalette, "unicodeButton");

	quickLayout->addWidget(unicodeButton, 1, 0);

	uniLoadButton = new QPushButton(m_quickPalette, "uniLoadButton");
	uniLoadButton->setPixmap(loadIcon("22/document-open.png"));
	uniSaveButton = new QPushButton(m_quickPalette, "uniSaveButton");
	uniSaveButton->setPixmap(loadIcon("22/document-save.png"));
	uniClearButton = new QPushButton(m_quickPalette, "uniClearButton");
	uniClearButton->setPixmap(loadIcon("22/document-new.png"));
	Q3HBoxLayout *fileLayout = new Q3HBoxLayout();
	fileLayout->addWidget(uniLoadButton);
	fileLayout->addWidget(uniSaveButton);
	fileLayout->addWidget(uniClearButton);

	quickLayout->addLayout(fileLayout, 2, 0);

	m_userTable = new CharTable(m_quickPalette, 2, m_doc, m_fontInUse);
	m_userTable->setMaximumWidth(120);
	m_userTable->setMinimumWidth(120);
	m_userTable->enableDrops(true);

	quickLayout->addWidget(m_userTable, 3, 0);

	// main layout
	mainLayout->addWidget(m_bigPalette);
	mainLayout->addWidget(m_quickPalette);

	//tooltips
	QToolTip::add(insertButton, "<qt>" + tr("Insert the characters at the cursor in the text") + "</qt>");
	QToolTip::add(deleteButton, "<qt>" + tr("Delete the current selection(s).") + "</qt>");
	QToolTip::add(m_charTable, "<qt>" + tr("You can see a thumbnail if you press and hold down the right mouse button. The Insert key inserts a Glyph into the Selection below and the Delete key removes the last inserted one") + "</qt>");
	// signals and slots connections
	connect(deleteButton, SIGNAL(clicked()), this, SLOT(delEdit()));
	connect(insertButton, SIGNAL(clicked()), this, SLOT(insChar()));
	connect(m_charTable, SIGNAL(selectChar(uint)), this, SLOT(newChar(uint)));
	connect(m_charTable, SIGNAL(delChar()), this, SLOT(delChar()));
	connect(m_userTable, SIGNAL(selectChar(uint)), this, SLOT(userNewChar(uint)));
	connect(m_userTable, SIGNAL(delChar()), this, SLOT(delChar()));
	connect(unicodeButton, SIGNAL(chosenUnicode(QString)), m_userTable, SLOT(appendUnicode(QString)));
	connect(fontSelector, SIGNAL(activated(int)), this, SLOT(newFont(int)));
	connect(rangeSelector, SIGNAL(activated(int)), this, SLOT(newCharClass(int)));
	connect(hideCheck, SIGNAL(clicked()), this, SLOT(hideCheck_clicked()));
	connect(this, SIGNAL(insertSpecialChar()), this, SLOT(slot_insertSpecialChar()));
	connect(this, SIGNAL(insertUserSpecialChar(QChar)), this, SLOT(slot_insertUserSpecialChar(QChar)));
	connect(uniLoadButton, SIGNAL(clicked()), this, SLOT(uniLoadButton_clicked()));
	connect(uniSaveButton, SIGNAL(clicked()), this, SLOT(uniSaveButton_clicked()));
	connect(uniClearButton, SIGNAL(clicked()), this, SLOT(uniClearButton_clicked()));
	//
	loadUserContent(ScPaths::getApplicationDataDir() + "charpalette.ucp");
}

CharSelect::~CharSelect()
{
}

void CharSelect::setDoc(ScribusDoc* doc)
{
	if (m_doc != doc)
	{
		m_doc = doc;
		m_charTable->setDoc(m_doc);
		m_userTable->setDoc(m_doc);
		delEdit();
		setupRangeCombo();
		newCharClass(0);
	}

	if (!m_doc)
	{
		saveUserContent(ScPaths::getApplicationDataDir() + "charpalette.ucp");
		return;
	}

	QString oldFont(m_fontInUse);
	m_fontInUse = m_doc->currentStyle.charStyle().font().scName();
	if (oldFont != m_fontInUse && !m_fontInUse.isEmpty())
	{
		fontSelector->setCurrentText(m_fontInUse);
		newFont(fontSelector->currentItem());
		unicodeButton->setFont((*m_doc->AllFonts)[m_fontInUse]);
	}
}

const QString & CharSelect::getCharacters()
{
// 	return m_characters;
	return chToIns;
}

void CharSelect::scanFont()
{
	uint  charcode;
	uint   gindex;
	QString   gname;
	allClasses.clear();
	charactersFull.clear();
	charactersLatin1.clear();
	charactersLatin1Supplement.clear();
	charactersLatinExtendedA.clear();
	charactersLatinExtendedB.clear();
	charactersGeneralPunctuation.clear();
	charactersSuperSubscripts.clear();
	charactersCurrencySymbols.clear();
	charactersLetterlikeSymbols.clear();
	charactersNumberForms.clear();
	charactersArrows.clear();
	charactersMathematicalOperators.clear();
	charactersBoxDrawing.clear();
	charactersBlockElements.clear();
	charactersGeometricShapes.clear();
	charactersMiscellaneousSymbols.clear();
	charactersDingbats.clear();
	charactersSmallFormVariants.clear();
	charactersAlphabeticPresentationForms.clear();
	charactersSpecial.clear();
	charactersGreek.clear();
	charactersGreekExtended.clear();
	charactersCyrillic.clear();
	charactersCyrillicSupplement.clear();
	charactersArabic.clear();
	charactersArabicPresentationFormsA.clear();
	charactersArabicPresentationFormsB.clear();
	charactersHebrew.clear();
	QMap<uint, std::pair<QChar, QString> > glyphs;
	(*m_doc->AllFonts)[m_fontInUse].glyphNames(glyphs);
	for (QMap<uint, std::pair<QChar, QString> >::iterator it=glyphs.begin();
		 it != glyphs.end(); ++it)
	{
		charcode = it.data().first.unicode();
		gindex = it.key();
		gname = it.data().second;
		charactersFull.append(charcode);
		if ((charcode >= 0x0020) && (charcode <= 0x007F))
			charactersLatin1.append(charcode);
		else if ((charcode >= 0x0080) && (charcode <= 0x00FF))
			charactersLatin1Supplement.append(charcode);
		else if ((charcode >= 0x0100) && (charcode <= 0x017F))
			charactersLatinExtendedA.append(charcode);
		else if ((charcode >= 0x0180) && (charcode <= 0x024F))
			charactersLatinExtendedB.append(charcode);
		else if ((charcode >= 0x0370) && (charcode <= 0x03FF))
			charactersGreek.append(charcode);
		else if ((charcode >= 0x0400) && (charcode <= 0x04FF))
			charactersCyrillic.append(charcode);
		else if ((charcode >= 0x0500) && (charcode <= 0x052F))
			charactersCyrillicSupplement.append(charcode);
		else if ((charcode >= 0x0590) && (charcode <= 0x05FF))
			charactersHebrew.append(charcode);
		else if ((charcode >= 0x0600) && (charcode <= 0x06FF))
			charactersArabic.append(charcode);
		else if ((charcode >= 0x1F00) && (charcode <= 0x1FFF))
			charactersGreekExtended.append(charcode);
		else if ((charcode >= 0x2000) && (charcode <= 0x206F))
			charactersGeneralPunctuation.append(charcode);
		else if ((charcode >= 0x2070) && (charcode <= 0x209F))
			charactersSuperSubscripts.append(charcode);
		else if ((charcode >= 0x20A0) && (charcode <= 0x20CF))
			charactersCurrencySymbols.append(charcode);
		else if ((charcode >= 0x2100) && (charcode <= 0x214F))
			charactersLetterlikeSymbols.append(charcode);
		else if ((charcode >= 0x2150) && (charcode <= 0x218F))
			charactersNumberForms.append(charcode);
		else if ((charcode >= 0x2190) && (charcode <= 0x2190))
			charactersArrows.append(charcode);
		else if ((charcode >= 0x2200) && (charcode <= 0x22FF))
			charactersMathematicalOperators.append(charcode);
		else if ((charcode >= 0x2500) && (charcode <= 0x257F))
			charactersBoxDrawing.append(charcode);
		else if ((charcode >= 0x2580) && (charcode <= 0x259F))
			charactersBlockElements.append(charcode);
		else if ((charcode >= 0x25A0) && (charcode <= 0x25FF))
			charactersGeometricShapes.append(charcode);
		else if ((charcode >= 0x2600) && (charcode <= 0x26FF))
			charactersMiscellaneousSymbols.append(charcode);
		else if ((charcode >= 0x2700) && (charcode <= 0x27BF))
			charactersDingbats.append(charcode);
		else if ((charcode >= 0xFE50) && (charcode <= 0xFE6F))
			charactersSmallFormVariants.append(charcode);
		else if ((charcode >= 0xFB00) && (charcode <= 0xFB4F))
			charactersAlphabeticPresentationForms.append(charcode);
		else if ((charcode >= 0xFB50) && (charcode <= 0xFDFF))
			charactersArabicPresentationFormsA.append(charcode);
		else if ((charcode >= 0xFE70) && (charcode <= 0xFEFF))
			charactersArabicPresentationFormsB.append(charcode);
		else if ((charcode >= 0xFFF0) && (charcode <= 0xFFFF))
			charactersSpecial.append(charcode);
	}
	allClasses.append(charactersFull);
	allClasses.append(charactersLatin1);
	allClasses.append(charactersLatin1Supplement);
	allClasses.append(charactersLatinExtendedA);
	allClasses.append(charactersLatinExtendedB);
	allClasses.append(charactersGeneralPunctuation);
	allClasses.append(charactersSuperSubscripts);
	allClasses.append(charactersCurrencySymbols);
	allClasses.append(charactersLetterlikeSymbols);
	allClasses.append(charactersNumberForms);
	allClasses.append(charactersArrows);
	allClasses.append(charactersMathematicalOperators);
	allClasses.append(charactersBoxDrawing);
	allClasses.append(charactersBlockElements);
	allClasses.append(charactersGeometricShapes);
	allClasses.append(charactersMiscellaneousSymbols);
	allClasses.append(charactersDingbats);
	allClasses.append(charactersSmallFormVariants);
	allClasses.append(charactersAlphabeticPresentationForms);
	allClasses.append(charactersSpecial);
	allClasses.append(charactersGreek);
	allClasses.append(charactersGreekExtended);
	allClasses.append(charactersCyrillic);
	allClasses.append(charactersCyrillicSupplement);
	allClasses.append(charactersArabic);
	allClasses.append(charactersArabicPresentationFormsA);
	allClasses.append(charactersArabicPresentationFormsB);
	allClasses.append(charactersHebrew);
}

void CharSelect::setupRangeCombo()
{
	disconnect(rangeSelector, SIGNAL(activated(int)), this, SLOT(newCharClass(int)));
	int counter = 0;
	rangeSelector->clear();
	rangeSelector->insertItem( tr("Full Character Set"));
	usedCharClasses.insert(counter, 0);
	counter++;
	if (charactersLatin1.count() != 0)
	{
		rangeSelector->insertItem( tr("Basic Latin"));
		usedCharClasses.insert(counter, 1);
		counter++;
	}
	if (charactersLatin1Supplement.count() != 0)
	{
		rangeSelector->insertItem( tr("Latin-1 Supplement"));
		usedCharClasses.insert(counter, 2);
		counter++;
	}
	if (charactersLatinExtendedA.count() != 0)
	{
		rangeSelector->insertItem( tr("Latin Extended-A"));
		usedCharClasses.insert(counter, 3);
		counter++;
	}
	if (charactersLatinExtendedB.count() != 0)
	{
		rangeSelector->insertItem( tr("Latin Extended-B"));
		usedCharClasses.insert(counter, 4);
		counter++;
	}
	if (charactersGeneralPunctuation.count() != 0)
	{
		rangeSelector->insertItem( tr("General Punctuation"));
		usedCharClasses.insert(counter, 5);
		counter++;
	}
	if (charactersSuperSubscripts.count() != 0)
	{
		rangeSelector->insertItem( tr("Super- and Subscripts"));
		usedCharClasses.insert(counter, 6);
		counter++;
	}
	if (charactersCurrencySymbols.count() != 0)
	{
		rangeSelector->insertItem( tr("Currency Symbols"));
		usedCharClasses.insert(counter, 7);
		counter++;
	}
	if (charactersLetterlikeSymbols.count() != 0)
	{
		rangeSelector->insertItem( tr("Letterlike Symbols"));
		usedCharClasses.insert(counter, 8);
		counter++;
	}
	if (charactersNumberForms.count() != 0)
	{
		rangeSelector->insertItem( tr("Number Forms"));
		usedCharClasses.insert(counter, 9);
		counter++;
	}
	if (charactersArrows.count() != 0)
	{
		rangeSelector->insertItem( tr("Arrows"));
		usedCharClasses.insert(counter, 10);
		counter++;
	}
	if (charactersMathematicalOperators.count() != 0)
	{
		rangeSelector->insertItem( tr("Mathematical Operators"));
		usedCharClasses.insert(counter, 11);
		counter++;
	}
	if (charactersBoxDrawing.count() != 0)
	{
		rangeSelector->insertItem( tr("Box Drawing"));
		usedCharClasses.insert(counter, 12);
		counter++;
	}
	if (charactersBlockElements.count() != 0)
	{
		rangeSelector->insertItem( tr("Block Elements"));
		usedCharClasses.insert(counter, 13);
		counter++;
	}
	if (charactersGeometricShapes.count() != 0)
	{
		rangeSelector->insertItem( tr("Geometric Shapes"));
		usedCharClasses.insert(counter, 14);
		counter++;
	}
	if (charactersMiscellaneousSymbols.count() != 0)
	{
		rangeSelector->insertItem( tr("Miscellaneous Symbols"));
		usedCharClasses.insert(counter, 15);
		counter++;
	}
	if (charactersDingbats.count() != 0)
	{
		rangeSelector->insertItem( tr("Dingbats"));
		usedCharClasses.insert(counter, 16);
		counter++;
	}
	if (charactersSmallFormVariants.count() != 0)
	{
		rangeSelector->insertItem( tr("Small Form Variants"));
		usedCharClasses.insert(counter, 17);
		counter++;
	}
	if (charactersAlphabeticPresentationForms.count() != 0)
	{
		rangeSelector->insertItem( tr("Ligatures"));
		usedCharClasses.insert(counter, 18);
		counter++;
	}
	if (charactersSpecial.count() != 0)
	{
		rangeSelector->insertItem( tr("Specials"));
		usedCharClasses.insert(counter, 19);
		counter++;
	}
	if (charactersGreek.count() != 0)
	{
		rangeSelector->insertItem( tr("Greek"));
		usedCharClasses.insert(counter, 20);
		counter++;
	}
	if (charactersGreekExtended.count() != 0)
	{
		rangeSelector->insertItem( tr("Greek Extended"));
		usedCharClasses.insert(counter, 21);
		counter++;
	}
	if (charactersCyrillic.count() != 0)
	{
		rangeSelector->insertItem( tr("Cyrillic"));
		usedCharClasses.insert(counter, 22);
		counter++;
	}
	if (charactersCyrillicSupplement.count() != 0)
	{
		rangeSelector->insertItem( tr("Cyrillic Supplement"));
		usedCharClasses.insert(counter, 23);
		counter++;
	}
	if (charactersArabic.count() != 0)
	{
		rangeSelector->insertItem( tr("Arabic"));
		usedCharClasses.insert(counter, 24);
		counter++;
	}
	if (charactersArabicPresentationFormsA.count() != 0)
	{
		rangeSelector->insertItem( tr("Arabic Extended A"));
		usedCharClasses.insert(counter, 25);
		counter++;
	}
	if (charactersArabicPresentationFormsB.count() != 0)
	{
		rangeSelector->insertItem( tr("Arabic Extended B"));
		usedCharClasses.insert(counter, 26);
		counter++;
	}
	if (charactersHebrew.count() != 0)
	{
		rangeSelector->insertItem( tr("Hebrew"));
		usedCharClasses.insert(counter, 27);
		counter++;
	}
	rangeSelector->setCurrentItem(0);
	connect(rangeSelector, SIGNAL(activated(int)), this, SLOT(newCharClass(int)));
}

void CharSelect::generatePreview(int charClass)
{
	characters.clear();
	characters = allClasses[charClass];
	m_charTable->setCharacters(characters);
}

void CharSelect::newCharClass(int c)
{
	m_characterClass = usedCharClasses[c];
	generatePreview(m_characterClass);
}

void CharSelect::newFont(int font)
{
	QString oldFont(m_fontInUse);
	m_fontInUse = fontSelector->text(font);
	if (!m_fontInUse.isEmpty())
	{
		m_charTable->setFontInUse(m_fontInUse);
		m_userTable->setFontInUse(m_fontInUse);
		unicodeButton->setFont((*m_doc->AllFonts)[m_fontInUse]);
		(*m_doc->AllFonts)[m_fontInUse].increaseUsage();
		if (!oldFont.isEmpty())
			(*m_doc->AllFonts)[oldFont].decreaseUsage();
		delEdit();
		scanFont();
		generatePreview(0);
		m_characterClass = 0;
		setupRangeCombo();
	}
}

void CharSelect::userNewChar(uint i)
{
	emit insertUserSpecialChar(QChar(i));
}

void CharSelect::newChar(uint i)
{
	chToIns += QChar(i);
	sample->setPixmap(FontSample((*m_doc->AllFonts)[m_fontInUse], 28, chToIns, paletteBackgroundColor(), true));
	insertButton->setEnabled(true);
	QString tmp;
	tmp.sprintf("%04X", i);
}

void CharSelect::delChar()
{
	if (chToIns.length() == 0)
		return;
	if (chToIns.length() == 1)
	{
		delEdit();
		return;
	}
	chToIns.truncate(chToIns.length() - 1);
	sample->setPixmap(FontSample((*m_doc->AllFonts)[m_fontInUse], 28, chToIns, paletteBackgroundColor(), true));
	insertButton->setEnabled(true);
}

void CharSelect::delEdit()
{
	chToIns = "";
	QPixmap pm(1,28);
	pm.fill(paletteBackgroundColor());
	sample->setPixmap(pm);
	insertButton->setEnabled(false);
}

void CharSelect::insChar()
{
	emit insertSpecialChar();
}

void CharSelect::slot_insertSpecialChar()
{
	if (!m_Item)
		return;

	if (m_Item->HasSel)
		m_Item->asTextFrame()->deleteSelectedTextFromFrame();
	//CB: Avox please make text->insertchar(char) so none of this happens in gui code, and item can tell doc its changed so the view and mainwindow slotdocch are not necessary
	for (uint a=0; a<chToIns.length(); ++a)
	{
		QChar ch = chToIns.at(a);
		if (ch == QChar(10))
			ch = QChar(13);
		if (ch == QChar(9))
			ch = QChar(32);
		m_Item->itemText.insertChars(m_Item->CPos, ch);
		m_Item->CPos += 1;
	}
	m_doc->view()->DrawNew();
	m_doc->changed();
	delEdit();
}

void CharSelect::slot_insertUserSpecialChar(QChar ch)
{
	if (!m_Item)
		return;
	if (m_Item->HasSel)
		m_Item->asTextFrame()->deleteSelectedTextFromFrame();
	//CB: Avox please make text->insertchar(char) so none of this happens in gui code, and item can tell doc its changed so the view and mainwindow slotdocch are not necessary
	if (ch == QChar(10))
		ch = QChar(13);
	if (ch == QChar(9))
		ch = QChar(32);
	m_Item->itemText.insertChars(m_Item->CPos, ch);
	m_Item->CPos += 1;
	m_doc->view()->DrawNew();
	m_doc->changed();
}

bool CharSelect::eventFilter(QObject */*obj*/, QEvent *ev)
{
	if (ev->type() == QEvent::Show)
	{
		m_charTable->recalcCellSizes();
		m_userTable->recalcCellSizes();
//		return true;
	}
	return false;
}

void CharSelect::hideCheck_clicked()
{
	m_bigPalette->setShown(!hideCheck->isChecked());
	adjustSize();
}

void CharSelect::show()
{
	ScrPaletteBase::show();
	if (m_userTable->characters().count() > 0)
	{
		hideCheck->setChecked(true);
		hideCheck_clicked();
	}
}

void CharSelect::setEnabled(bool state, PageItem* item)
{
	ScrPaletteBase::setEnabled(state);
	m_Item = item;
	if (state)
		setDoc(m_doc);
}

void CharSelect::uniLoadButton_clicked()
{
	QString f = Q3FileDialog::getOpenFileName(
                    QDir::currentDirPath(),
                    paletteFileMask,
                    this,
                    "loadDialog",
                    tr("Choose a filename to open"));
	if (!f.isNull())
		loadUserContent(f);
}

void CharSelect::loadUserContent(QString f)
{
	CharClassDef newChars;
	QFile file(f);
	if (!file.exists())
		return;
	if (file.open(QIODevice::ReadOnly))
	{
		Q3TextStream stream(&file);
		QString line;
		while (!stream.atEnd())
		{
			bool ok = false;
			line = stream.readLine();
			if (line.left(1) == "#")
				continue; // don't mess with a comment
			int val = line.toInt(&ok, 10);
			if (ok)
				newChars.append(val);
			else
			{
				QMessageBox::warning(this, tr("Error"),
									 "<qt>" + tr("Error reading file %1 - file is corrupted propably.").arg(f) + "</qt>",
									 QMessageBox::Ok, QMessageBox::NoButton);
				break;
			}
		}
		file.close();
		m_userTable->setCharacters(newChars);
	}
}

void CharSelect::uniSaveButton_clicked()
{
	if (m_userTable->characters().count() == 0)
		return;
	QString f = Q3FileDialog::getSaveFileName(
                    QDir::currentDirPath(),
                    paletteFileMask,
                    this,
                    "saveDialog",
                    tr("Choose a filename to save under"));
	if (f.isNull() || !overwrite(this, f))
		return;
	saveUserContent(f);
}

void CharSelect::saveUserContent(QString f)
{
	QFile file(f);
	if (file.open(QIODevice::WriteOnly))
	{
		Q3TextStream stream(&file);
		CharClassDef chars = m_userTable->characters();
		stream << "# This is a character palette file for Scribus\n";
		for (CharClassDef::Iterator it = chars.begin(); it != chars.end(); ++it)
			stream << (*it) << "\n";
		file.close();
	}
	else
		QMessageBox::warning(this, tr("Error"),
					 "<qt>" + tr("Cannot write file %1").arg(f) + "</qt>",
					 QMessageBox::Ok, QMessageBox::NoButton);
}

void CharSelect::uniClearButton_clicked()
{
	if (m_userTable->characters().count() > 0
		&&
		!QMessageBox::question(this, tr("Clean the Palette?"),
					 "<qt>" + tr("You will clean all characters from this palette. Are you sure?") + "</qt>",
					 CommonStrings::trYesKey, CommonStrings::trNoKey,
					 QString::null, 0, 1 )
	   )
	{
		m_userTable->setCharacters(CharClassDef());
	}
}
