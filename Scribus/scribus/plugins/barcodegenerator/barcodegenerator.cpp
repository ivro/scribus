/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include "barcodegenerator.h"
//#include "barcodegenerator.moc"
#include "gsutil.h"
#include "util.h"
#include "scribus.h"
#include "scpaths.h"
#include "commonstrings.h"
#include "undomanager.h"
#include "loadsaveplugin.h"
#include "../formatidlist.h"

#include <QTextStream>
#include <QColorDialog>

BarcodeType::BarcodeType(QString cmd, QString exa,
						 QString comm, QString regExp,
						 bool includeCheck, bool includeCheckInText)
{
	command = cmd;
	example = exa;
	comment = comm;
	regularExp = regExp;
	this->includeCheck = includeCheck;
	this->includeCheckInText = includeCheckInText;
}

BarcodeGenerator::BarcodeGenerator(QWidget* parent, const char* name)
	: QDialog(parent, name, true)
{
	ui.setupUi(this);

	map["EAN-13"] = BarcodeType("ean13", "9781860742712", tr("12 or 13 digits"),
								"[0-9]{12,13}");
	map["EAN-8"] = BarcodeType("ean8", "12345678", tr("8 digits"),
							   "[0-9]{8,8}");
	map["UPC-A"] = BarcodeType("upca", "78858101497", tr("11 or 12 digits"),
							   "[0-9]{11,12}");
	map["UPC-E"] = BarcodeType("upce", "0123456", tr("7 or 8 digits"),
							   "[0-9]{7,8}");
	map["EAN-5"] = BarcodeType("ean5", "90200", tr("5 digits"),
							   "[0-9]{5,5}");
	map["EAN-2"] = BarcodeType("ean2", "42", tr("2 digits"),
							   "[0-9]{2,2}");
	map["ISBN"] = BarcodeType("isbn", "1-58880-149",
							  tr("12 or 13 digits with dashes. The legacy ISBN-10 format accepts 9 or 10 digits with dashes, but this standard was depreciated for public use after 1st January 2007. (Note: To convert an old ISBN-10 to a new ISBN-13, prefix 978- to the first 9 digits, e.g. 1-56592-479-7 -> 978-1-56592-479. The final check-digit will be calculated automatically.)"),
							  "[0-9]*\\-[0-9]*\\-[0-9]*");
//    "Code-11"] = "code11"
	map["Code-39"] = BarcodeType("code39", "CODE-39",
								 tr("Variable number of characters, digits and any of the symbols -. *$/+%."),
								 "[0-9a-zA-Z\\-\\.\\ \\*\\$\\/\\+\\%]*",
								true, true);
//    "Code-93"] = "code93"
	map["Code-128"] = BarcodeType("code128", "^104^102Count^0991234^101!",
								  tr("Variable number of ASCII characters and special function symbols, starting with the appropriate start character for the initial character set. UCC/EAN-128s must have a mandatory FNC 1 symbol immediately following the start character."),
								  "\\^[0-9a-zA-Z\\^\\!]*",
								  true, true);
	map["UCC/EAN-128"] = BarcodeType("code128", "^104^102Count^0991234^101!",
									 tr("Variable number of ASCII characters and special function symbols, starting with the appropriate start character for the initial character set. UCC/EAN-128s must have a mandatory FNC 1 symbol immediately following the start character."),
									 "\\^[0-9a-zA-Z\\^\\!]*");
	map["Rationalized Codabar"] = BarcodeType("rationalizedCodabar", "0123456789",
											  tr("Variable number of digits and any of the symbols -$:/.+ABCD."),
											  "[0-9A-D\\-\\$\\:\\/\\.\\+]*",
											 true, true);
	map["Interleaved 2 of 5"] = BarcodeType("interleaved2of5", "05012345678900",
											tr("Variable number of digits"),
											"[0-9]*",
										   true, true);
	map["ITF-14"] = BarcodeType("interleaved2of5", "05012345678900",
								tr("Variable number of digits. An ITF-14 is 14 characters and does not have a check digit"),
								"[0-9]*",
							   true, true);
	map["Code 2 of 5"] = BarcodeType("code2of5", "0123456789",
									 tr("Variable number of digits"),
									 "[0-9]*");
	map["Postnet"] = BarcodeType("postnet", "01234567",
								 tr("Variable number of digits"),
								 "[0-9]*",
								false, true);
	map["Royal Mail"] = BarcodeType("royalmail", "LE28HS9Z",
									tr("Variable number of digits and capital letters"),
									"[0-9A-Z]*",
									false, true);
//    "Auspost"] = "auspost"
	map["MSI"] = BarcodeType("msi", "0120823635162", tr("Variable number of digits"),
							 "[0-9]*",
							true, true);
//    "KIX"] = "kix"
	map["Plessey"] = BarcodeType("plessey", "012345ABCDEF",
								 tr("Variable number of hexadecimal characters"),
								 "[0-9A-F]*",
								false, true);
	//    "Symbol"] = "symbol"

	useSamples = true;
	guiColor = ui.codeEdit->paletteBackgroundColor();
	ui.bcCombo->insertStringList(map.keys());
	ui.okButton->setText(CommonStrings::tr_OK);
	ui.cancelButton->setText(CommonStrings::tr_Cancel);
	ui.resetButton->setPixmap(loadIcon("u_undo16.png"));
	lnColor = Qt::black;
	txtColor = Qt::black;
	bgColor = Qt::white;
	paintColorSample(ui.linesLabel, lnColor);
	paintColorSample(ui.txtLabel, txtColor);
	paintColorSample(ui.bgLabel, bgColor);

	tmpFile = QDir::convertSeparators(ScPaths::getTempFileDir() + "bcode.png");
	psFile = QDir::convertSeparators(ScPaths::getTempFileDir() + "bcode.ps");

	// PS engine
	psCommand.append("%!PS-Adobe-2.0 EPSF-2.0\n");
	QFile f( ScPaths::instance().shareDir() + QString("/plugins/barcode.ps") );
	f.open(QIODevice::ReadOnly);
	QTextStream ts(&f);
	QString s = ts.read();
	int begin = s.find("% --BEGIN TEMPLATE--");
	int end = s.find("% --END TEMPLATE--");
	psCommand.append(s.mid(begin, end));
	f.close();
	psCommand.append("\n\n%command\n");
	bcComboChanged();
}

BarcodeGenerator::~BarcodeGenerator()
{
	QFile::remove(psFile);
	QFile::remove(tmpFile);
}

void BarcodeGenerator::bcComboChanged()
{
	QString s = ui.bcCombo->currentText();
	ui.commentEdit->setText(map[s].comment);
	if (useSamples)
	{
		disconnect(ui.codeEdit, SIGNAL(textChanged(const QString&)), this, SLOT(codeEdit_textChanged(const QString&)));
		ui.codeEdit->setText(map[s].example);
		connect(ui.codeEdit, SIGNAL(textChanged(const QString&)), this, SLOT(codeEdit_textChanged(const QString&)));
	}

	ui.includeCheck->setEnabled(map[s].includeCheck ? true : false);
	if (ui.textCheck->isChecked())
		ui.includeCheckInText->setEnabled(map[s].includeCheckInText ? true : false);
	else
		ui.includeCheckInText->setEnabled(false);

	codeEdit_check(ui.codeEdit->text());
	paintBarcode();
}

void BarcodeGenerator::textCheck_changed()
{
	bool s = ui.textCheck->state();
	ui.txtColorButton->setEnabled(s);
	ui.includeCheckInText->setEnabled(s);
	paintBarcode();
}

void BarcodeGenerator::guardCheck_changed()
{
	paintBarcode();
}

void BarcodeGenerator::includeCheck_stateChanged(int)
{
	paintBarcode();
}

void BarcodeGenerator::includeCheckInText_stateChanged(int)
{
	paintBarcode();
}

void BarcodeGenerator::paintColorSample(QLabel *l, QColor c)
{
	QRect rect = l->frameRect();
	QPixmap pm(rect.width(), rect.height());
	pm.fill(c);
	l->setPixmap(pm);
}

void BarcodeGenerator::bgColorButton_pressed()
{
	bgColor = QColorDialog::getColor(bgColor, this);
	if (bgColor.isValid())
	{
		paintColorSample(ui.bgLabel, bgColor);
		paintBarcode();
	}
}

void BarcodeGenerator::lnColorButton_pressed()
{
	lnColor = QColorDialog::getColor(lnColor, this);
	if (lnColor.isValid())
	{
		paintColorSample(ui.linesLabel, lnColor);
		paintBarcode();
	}
}

void BarcodeGenerator::txtColorButton_pressed()
{
	txtColor = QColorDialog::getColor(txtColor, this);
	if (txtColor.isValid())
	{
		paintColorSample(ui.txtLabel, txtColor);
		paintBarcode();
	}
}

void BarcodeGenerator::okButton_pressed()
{
	// no need to call paintBarcode(tmpFile, 300); because
	// it's created by previous run...
	hide();
	const FileFormat * fmt = LoadSavePlugin::getFormatById(FORMATID_PSIMPORT);
	if( fmt )
		fmt->loadFile(QString::fromUtf8(psFile), LoadSavePlugin::lfUseCurrentPage|LoadSavePlugin::lfInteractive);
	accept();
}

void BarcodeGenerator::cancelButton_pressed()
{
	reject();
}

bool BarcodeGenerator::codeEdit_check(const QString& )//s)
{
	/* probably not needed as the backend do it for us (PV)
	QRegExp rx(map[bcCombo->currentText()].regularExp);
	if (!rx.exactMatch(s))
	{
		ui.codeEdit->setPaletteBackgroundColor(QColor(255, 0, 0));
		ui.sampleLabel->setText("<qt>" + tr("Barcode incomplete") + "</qt>");
		ui.okButton->setEnabled(false);
		return false;
	}
	else
	{
		ui.codeEdit->setPaletteBackgroundColor(guiColor);
		ui.okButton->setEnabled(true);
		paintBarcode();
		return true;
	} */
	paintBarcode();
	return true;
}

void BarcodeGenerator::codeEdit_textChanged(const QString& s)
{
	useSamples = false;
	codeEdit_check(s);
}

bool BarcodeGenerator::paintBarcode(QString fileName, int dpi)
{
	if (fileName == QString::null)
		fileName = tmpFile;
	QString opts("barcolor=%1 showbackground backgroundcolor=%2 textcolor=%3");
	opts = opts.arg(lnColor.name().replace('#', "")) \
			.arg(bgColor.name().replace('#', "")) \
			.arg(txtColor.name().replace('#', ""));
	if (ui.textCheck->isChecked())
		opts += " includetext";
	if (ui.guardCheck->isChecked())
		opts += " guardwhitespace";
	if (ui.includeCheckInText->isChecked() & ui.includeCheckInText->isEnabled())
		opts += " includecheckintext";
	if (ui.includeCheck->isChecked() & ui.includeCheck->isEnabled())
		opts += " includecheck";
	QString comm("15 10 moveto (%1) (%2) %3 barcode");
	comm = comm.arg(ui.codeEdit->text()).arg(opts).arg(map[ui.bcCombo->currentText()].command);
	comm = psCommand + comm;
	QFile f(psFile);
	if (!f.open(QIODevice::WriteOnly))
	{
		ui.sampleLabel->setText("<qt>" + tr("Error opening file: %1").arg(psFile) + "</qt>");
		return false;
	}
	QTextStream ts(&f);
	ts << comm;
	f.close();

	QStringList gargs;
	// limit the area only for preview. EPS importer bounds the box itself.
	if (fileName == tmpFile)
	{
		gargs.append("-dDEVICEWIDTHPOINTS=200");
		gargs.append("-dDEVICEHEIGHTPOINTS=150");
	}
	gargs.append( QString("-r%1").arg(dpi) );
	gargs.append( QString("-sOutputFile=%1").arg(fileName) );
	gargs.append( psFile );
	int gs = callGS(gargs);
	bool retval = true;
	if (gs != 0)
		retval = false;
	// setup only preview
	if (fileName != tmpFile)
		return retval;
    if (gs == 0)
	{
		ui.sampleLabel->setPixmap(QPixmap(fileName));
		ui.okButton->setEnabled(true);
	}
	else
	{
		ui.sampleLabel->setText("<qt>" + tr("Barcode incomplete") + "</qt>");
		ui.okButton->setEnabled(false);
	}
	return retval;
}

void BarcodeGenerator::resetButton_clicked()
{
	useSamples = true;
	bcComboChanged();
}
