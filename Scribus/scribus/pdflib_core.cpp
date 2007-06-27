/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          pdflib.cpp  -  description
                             -------------------
    begin                : Sat Jan 19 2002
    copyright            : (C) 2002 by Franz Schmid
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

#include "pdflib_core.h"

#include "scconfig.h"

#include <string>
#include <qstring.h>
#include <qrect.h>
#include <qimage.h>
#include <qregexp.h>
#include <qdatetime.h>
#include <qfileinfo.h>
#include <QDataStream>
#include <qdir.h>
#include <QList>
#include <QByteArray>
#include <QPixmap>
#include <cstdlib>
#include <cmath>
#include <QStack>
#ifdef HAVE_UNISTD_H
#include <unistd.h>
#endif
#include "rc4.h"

#include "commonstrings.h"
#include "page.h"
#include "pageitem.h"
#include "bookmwin.h"
#include "scpaths.h"
#include "scribus.h"
#include "scribuscore.h"
#include "scribusdoc.h"
#include "multiprogressdialog.h"
#include "bookpalette.h"
#include "scfonts.h"
#include "util.h"
#include "prefsmanager.h"
#include "prefscontext.h"
#include "pdfoptions.h"
#include "sccolor.h"
#include "scpattern.h"
#include "sccolorengine.h"

#include "text/nlsconfig.h"

using namespace std;

#include <tiffio.h>


PDFLibCore::PDFLibCore(ScribusDoc & docu)
	: QObject(&docu),
	doc(docu),
	ActPageP(0),
	Options(doc.PDF_Options),
	Bvie(0),
	ObjCounter(7),
	ResNam("RE"),
	ResCount(0),
	NDnam("LI"),
	NDnum(0),
	KeyGen(32),
	OwnerKey(32),
	UserKey(32),
	FileID(16),
	EncryKey(5),
	Encrypt(0),
	KeyLen(5),
	colorsToUse(),
	spotNam("Spot"),
	spotCount(0),
	progressDialog(0),
	abortExport(false),
	usingGUI(ScCore->usingGUI())
{
	Catalog.Outlines = 2;
	Catalog.PageTree = 3;
	Catalog.Dest = 4;
	PageTree.Count = 0;
	Outlines.First = 0;
	Outlines.Last = 0;
	Outlines.Count = 0;
	Seite.ObjNum = 0;
	Seite.Thumb = 0;
	CompAvail = true;
	int kg_array[] = {0x28, 0xbf, 0x4e, 0x5e, 0x4e, 0x75, 0x8a, 0x41, 0x64, 0x00, 0x4e, 0x56, 0xff, 0xfa,
			  0x01, 0x08, 0x2e, 0x2e, 0x00, 0xb6, 0xd0, 0x68, 0x3e, 0x80, 0x2f, 0x0c, 0xa9, 0xfe,
			  0x64, 0x53, 0x69, 0x7a};
	for (int a = 0; a < 32; ++a)
		KeyGen[a] = kg_array[a];
	if (usingGUI)
	{
		progressDialog = new MultiProgressDialog( tr("Saving PDF"), CommonStrings::tr_Cancel, doc.scMW(), "pdfexportprogress");
		Q_CHECK_PTR(progressDialog);
		QStringList barNames, barTexts;
		barNames << "EMP" << "EP" << "ECPI";
		barTexts << tr("Exporting Master Page:") << tr("Exporting Page:") << tr("Exporting Items on Current Page:");
		QList<bool> barsNumeric;
		barsNumeric << true << true << false;
		progressDialog->addExtraProgressBars(barNames, barTexts, barsNumeric);
		connect(progressDialog, SIGNAL(canceled()), this, SLOT(cancelRequested()));
	}
}

PDFLibCore::~PDFLibCore()
{
	delete progressDialog;
}

static inline QString FToStr(double c)
{
	return QString::number(c, 'f', 5);
};

bool PDFLibCore::doExport(const QString& fn, const QString& nam, int Components,
					  const std::vector<int> & pageNs, const QMap<int,QPixmap> & thumbs)
{
	QPixmap pm;
	bool ret = false;
	int pc_exportpages=0;
	int pc_exportmasterpages=0;
	if (usingGUI)
		progressDialog->show();
	QMap<QString, QMap<uint, FPointArray> > usedFonts;
	usedFonts.clear();
	doc.getUsedFonts(usedFonts);
	if (PDF_Begin_Doc(fn, PrefsManager::instance()->appPrefs.AvailFonts, usedFonts, doc.scMW()->bookmarkPalette->BView))
	{
		QMap<int, int> pageNsMpa;
		for (uint a = 0; a < pageNs.size(); ++a)
		{
			pageNsMpa.insert(doc.MasterNames[doc.Pages->at(pageNs[a]-1)->MPageNam], 0);
		}
		if (usingGUI)
		{
			progressDialog->setOverallTotalSteps(pageNsMpa.count()+pageNs.size());
			progressDialog->setTotalSteps("EMP", pageNsMpa.count());
			progressDialog->setTotalSteps("EP", pageNs.size());
			progressDialog->setOverallProgress(0);
			progressDialog->setProgress("EMP", 0);
			progressDialog->setProgress("EP", 0);
		}
		for (int ap = 0; ap < doc.MasterPages.count() && !abortExport; ++ap)
		{
			if (doc.MasterItems.count() != 0)
			{
				if (pageNsMpa.contains(ap))
				{
					qApp->processEvents();
					PDF_TemplatePage(doc.MasterPages.at(ap));
					++pc_exportmasterpages;
				}
			}

			if (usingGUI)
			{
				progressDialog->setProgress("EMP", pc_exportmasterpages);
				progressDialog->setOverallProgress(pc_exportmasterpages+pc_exportpages);
			}
		}
		for (uint a = 0; a < pageNs.size() && !abortExport; ++a)
		{
			if (doc.PDF_Options.Thumbnails)
				pm = thumbs[pageNs[a]];
			qApp->processEvents();
			if (abortExport) break;
			PDF_Begin_Page(doc.Pages->at(pageNs[a]-1), pm);
			qApp->processEvents();
			if (abortExport) break;
			PDF_ProcessPage(doc.Pages->at(pageNs[a]-1), pageNs[a]-1, doc.PDF_Options.doClip);
			qApp->processEvents();
			if (abortExport) break;
			PDF_End_Page();
			pc_exportpages++;
			if (usingGUI)
			{
				progressDialog->setProgress("EP", pc_exportpages);
				progressDialog->setOverallProgress(pc_exportmasterpages+pc_exportpages);
			}
		}
		ret = true;//Even when aborting we return true. Dont want that "couldnt write msg"
		if (!abortExport)
		{
			if (doc.PDF_Options.Version == PDFOptions::PDFVersion_X3)
				PDF_End_Doc(ScCore->PrinterProfiles[doc.PDF_Options.PrintProf], nam, Components);
			else
				PDF_End_Doc();
		}
		else
			closeAndCleanup();
	}
	if (usingGUI)
		progressDialog->close();
	return ret;
}

void PDFLibCore::StartObj(int nr)
{
	XRef.append(bytesWritten());
	PutDoc(QString::number(nr)+ " 0 obj\n");
}

// Encode a string for inclusion in a
// PDF (literal) .
QString PDFLibCore::PDFEncode(const QString & in)
{
	QString tmp("");
	for (int d = 0; d < in.length(); ++d)
	{
		QChar cc(in.at(d));
		if ((cc == '(') || (cc == ')') || (cc == '\\'))
			tmp += '\\';
		tmp += cc;
	}
	return tmp;
}

QByteArray PDFLibCore::EncodeUTF16(const QString &in)
{
	QString tmp("");
	for (int d = 0; d < in.length(); ++d)
	{
		QChar cc(in.at(d));
		if ((cc == '(') || (cc == ')') || (cc == '\\'))
			tmp += '\\';
		tmp += cc;
	}
	QTextCodec *codec = QTextCodec::codecForName("ISO-10646-UCS-2");
	QByteArray cres = codec->fromUnicode( tmp );
	uchar sw;
	for(int d = 0; d < cres.size()-1; d += 2)
	{
		sw = cres[d];
		cres[d] = cres[d+1];
		cres[d+1] = sw;
	}
	return cres;
}

QString PDFLibCore::EncStream(const QString & in, int ObjNum)
{
	if (in.length() < 1)
		return QString("");
	else if (!Options.Encrypt)
		return in;
	rc4_context_t rc4;
	int dlen = 0;
	QString tmp(in);
	QByteArray us(tmp.length());
	QByteArray ou(tmp.length());
	for (int a = 0; a < tmp.length(); ++a)
		us[a] = QChar(tmp.at(a)).cell();
	QByteArray data(10);
	if (KeyLen > 5)
		data.resize(21);
	for (int cd = 0; cd < KeyLen; ++cd)
	{
		data[cd] = EncryKey[cd];
		dlen++;
	}
	data[dlen++] = ObjNum;
	data[dlen++] = ObjNum >> 8;
	data[dlen++] = ObjNum >> 16;
	data[dlen++] = 0;
	data[dlen++] = 0;
	QByteArray step1(16);
	step1 = ComputeMD5Sum(&data);
	rc4_init(&rc4, reinterpret_cast<uchar*>(step1.data()), qMin(KeyLen+5, 16));
	rc4_encrypt(&rc4, reinterpret_cast<uchar*>(us.data()), reinterpret_cast<uchar*>(ou.data()), tmp.length());
	QString uk = "";
	for (int cl = 0; cl < tmp.length(); ++cl)
		uk += QChar(ou[cl]);
	return uk;
}

QByteArray PDFLibCore::EncStreamArray(const QByteArray & in, int ObjNum)
{
	if (in.size() < 1)
		return QByteArray();
	else if (!Options.Encrypt)
		return in;
	rc4_context_t rc4;
	int dlen = 0;
	QByteArray out(in.size());
	QByteArray data(10);
	if (KeyLen > 5)
		data.resize(21);
	for (int cd = 0; cd < KeyLen; ++cd)
	{
		data[cd] = EncryKey[cd];
		dlen++;
	}
	data[dlen++] = ObjNum;
	data[dlen++] = ObjNum >> 8;
	data[dlen++] = ObjNum >> 16;
	data[dlen++] = 0;
	data[dlen++] = 0;
	QByteArray step1(16);
	step1 = ComputeMD5Sum(&data);
	rc4_init(&rc4, reinterpret_cast<uchar*>(step1.data()), qMin(KeyLen+5, 16));
	rc4_encrypt(&rc4, reinterpret_cast<const uchar*>(in.constData()), reinterpret_cast<uchar*>(out.data()), in.size());
	return out;
}

QString PDFLibCore::EncString(const QString & in, int ObjNum)
{
	if (!Options.Encrypt)
		return in;
	rc4_context_t rc4;
	QString tmp;
	int dlen = 0;
	if (in.length() < 3)
		return "<>";
	tmp = in.mid(1, in.length()-2);
	QByteArray us(tmp.length());
	QByteArray ou(tmp.length());
	for (int a = 0; a < tmp.length(); ++a)
		us[a] = static_cast<uchar>(QChar(tmp.at(a)).cell());
	QByteArray data(10);
	if (KeyLen > 5)
		data.resize(21);
	for (int cd = 0; cd < KeyLen; ++cd)
	{
		data[cd] = EncryKey[cd];
		dlen++;
	}
	data[dlen++] = ObjNum;
	data[dlen++] = ObjNum >> 8;
	data[dlen++] = ObjNum >> 16;
	data[dlen++] = 0;
	data[dlen++] = 0;
	QByteArray step1(16);
	step1 = ComputeMD5Sum(&data);
	rc4_init(&rc4, reinterpret_cast<uchar*>(step1.data()), qMin(KeyLen+5, 16));
	rc4_encrypt(&rc4, reinterpret_cast<uchar*>(us.data()), reinterpret_cast<uchar*>(ou.data()), tmp.length());
	QString uk = "";
	for (int cl = 0; cl < tmp.length(); ++cl)
		uk += QChar(ou[cl]);
	tmp = "<"+String2Hex(&uk, false)+">";
	return tmp;
}

QString PDFLibCore::EncStringUTF16(const QString & in, int ObjNum)
{
	if (in.length() < 3)
		return "<>";
	if (!Options.Encrypt)
	{
		QString tmp = in.mid(1, in.length()-2);
		QByteArray us = EncodeUTF16(tmp);
		QString uk = "";
		for (int cl = 0; cl < us.size(); ++cl)
			uk += QChar(us[cl]);
		return "<"+String2Hex(&uk, false)+">";
	}
	rc4_context_t rc4;
	QString tmp;
	int dlen = 0;
	tmp = in.mid(1, in.length()-2);
	QByteArray us = EncodeUTF16(tmp);
	QByteArray ou(us.size());
	QByteArray data(10);
	if (KeyLen > 5)
		data.resize(21);
	for (int cd = 0; cd < KeyLen; ++cd)
	{
		data[cd] = EncryKey[cd];
		dlen++;
	}
	data[dlen++] = ObjNum;
	data[dlen++] = ObjNum >> 8;
	data[dlen++] = ObjNum >> 16;
	data[dlen++] = 0;
	data[dlen++] = 0;
	QByteArray step1(16);
	step1 = ComputeMD5Sum(&data);
	rc4_init(&rc4, reinterpret_cast<uchar*>(step1.data()), qMin(KeyLen+5, 16));
	rc4_encrypt(&rc4, reinterpret_cast<uchar*>(us.data()), reinterpret_cast<uchar*>(ou.data()), ou.size());
	QString uk = "";
	for (int cl = 0; cl < ou.size(); ++cl)
		uk += QChar(ou[cl]);
	tmp = "<"+String2Hex(&uk, false)+">";
	return tmp;
}

QString PDFLibCore::FitKey(const QString & pass)
{
	QString pw(pass);
	if (pw.length() < 32)
	{
		uint l = pw.length();
		for (uint a = 0; a < 32 - l; ++a)
			pw += QChar(KeyGen[a]);
	}
	else
		pw = pw.left(32);
	return pw;
}

void PDFLibCore::CalcOwnerKey(const QString & Owner, const QString & User)
{
	rc4_context_t rc4;
	QString pw(FitKey(User));
	QString pw2(FitKey(Owner.isEmpty() ? User : Owner));
	QByteArray step1(16);
	step1 = ComputeMD5(pw2);
	if (KeyLen > 5)
	{
		for (int kl = 0; kl < 50; ++kl)
			step1 = ComputeMD5Sum(&step1);
	}
	QByteArray us(32);
	QByteArray enk(16);
	if (KeyLen > 5)
	{
		for (uint a2 = 0; a2 < 32; ++a2)
			OwnerKey[a2] = QChar(pw.at(a2)).cell();
		for (int rl = 0; rl < 20; rl++)
		{
			for (int j = 0; j < 16; j ++)
				enk[j] = step1[j] ^ rl;
			rc4_init(&rc4, reinterpret_cast<uchar*>(enk.data()), 16);
			rc4_encrypt(&rc4, reinterpret_cast<uchar*>(OwnerKey.data()),
					 reinterpret_cast<uchar*>(OwnerKey.data()), 32);
		}
	}
	else
	{
		for (uint a = 0; a < 32; ++a)
			us[a] = static_cast<uchar>(QChar(pw.at(a)).cell());
		rc4_init(&rc4, reinterpret_cast<uchar*>(step1.data()), 5);
		rc4_encrypt(&rc4, reinterpret_cast<uchar*>(us.data()),
					reinterpret_cast<uchar*>(OwnerKey.data()), 32);
	}
}

void PDFLibCore::CalcUserKey(const QString & User, int Permission)
{
	rc4_context_t	rc4;
	QString pw(FitKey(User));
	QByteArray step1(16);
	QByteArray perm(4);
	uint perm_value = static_cast<uint>(Permission);
	perm[0] = perm_value;
	perm[1] = perm_value >> 8;
	perm[2] = perm_value >> 16;
	perm[3] = perm_value >> 24;
	for (uint a = 0; a < 32; ++a)
		pw += QChar(OwnerKey[a]);
	for (uint a1 = 0; a1 < 4; ++a1)
		pw += QChar(perm[a1]);
	for (uint a3 = 0; a3 < 16; ++a3)
		pw += QChar(FileID[a3]);
	step1 = ComputeMD5(pw);
	if (KeyLen > 5)
	{
		for (int kl = 0; kl < 50; ++kl)
			step1 = ComputeMD5Sum(&step1);
		EncryKey.resize(16);
	}
	for (int a2 = 0; a2 < KeyLen; ++a2)
		EncryKey[a2] = step1[a2];
	if (KeyLen > 5)
	{
		QString pr2("");
		for (int kl3 = 0; kl3 < 32; ++kl3)
			pr2 += QChar(KeyGen[kl3]);
		for (uint a4 = 0; a4 < 16; ++a4)
			pr2 += QChar(FileID[a4]);
		step1 = ComputeMD5(pr2);
		QByteArray enk(16);
		for (uint a3 = 0; a3 < 16; ++a3)
			UserKey[a3] = step1[a3];
		for (int rl = 0; rl < 20; rl++)
		{
			for (int j = 0; j < 16; j ++)
				enk[j] = EncryKey[j] ^ rl;
			rc4_init(&rc4, reinterpret_cast<uchar*>(enk.data()), 16);
			rc4_encrypt(&rc4, reinterpret_cast<uchar*>(UserKey.data()), reinterpret_cast<uchar*>(UserKey.data()), 16);
		}
	}
	else
	{
		rc4_init(&rc4, reinterpret_cast<uchar*>(step1.data()), 5);
		rc4_encrypt(&rc4, reinterpret_cast<uchar*>(KeyGen.data()), reinterpret_cast<uchar*>(UserKey.data()), 32);
	}
}

QByteArray PDFLibCore::ComputeMD5(const QString& in)
{
	uint inlen=in.length();
	QByteArray TBytes(inlen);
	for (uint a = 0; a < inlen; ++a)
		TBytes[a] = static_cast<uchar>(QChar(in.at(a)).cell());
	return ComputeMD5Sum(&TBytes);
}

bool PDFLibCore::PDF_Begin_Doc(const QString& fn, SCFonts &AllFonts, QMap<QString, QMap<uint, FPointArray> > DocFonts, BookMView* vi)
{
	Spool.setName(fn);
	if (!Spool.open(QIODevice::WriteOnly))
		return false;
	outStream.setDevice(&Spool);
	QString tmp;
	QString ok = "";
	QString uk = "";
	QFileInfo fd;
	QString fext;
	int a;
	inPattern = 0;
	Bvie = vi;
	BookMinUse = false;
	UsedFontsP.clear();
	UsedFontsF.clear();
	if ((Options.Version == 15) && (Options.useLayers))
		ObjCounter = 10;
	else
		ObjCounter = 9;
	switch (Options.Version)
	{
		case 12:
		case 13:
			PutDoc("%PDF-1.3\n");
			break;
		case 14:
			PutDoc("%PDF-1.4\n");
			break;
		case 15:
			PutDoc("%PDF-1.5\n");
			break;
	}
	if (Options.Version == 12)
		ObjCounter++;
	PutDoc("%\xc7\xec\x8f\xa2\n");
	StartObj(1);
	PutDoc("<<\n/Type /Catalog\n/Outlines 3 0 R\n/Pages 4 0 R\n/Dests 5 0 R\n/AcroForm 6 0 R\n/Names 7 0 R\n/Threads 8 0 R\n");
	if ((Options.Version == 15) && (Options.useLayers))
		PutDoc("/OCProperties 9 0 R\n");
	if (Options.Version == 12)
		PutDoc("/OutputIntents [ "+QString::number(ObjCounter-1)+" 0 R ]\n");
	PutDoc("/PageLayout ");
	switch (Options.PageLayout)
	{
		case PDFOptions::SinglePage:
			PutDoc("/SinglePage\n");
			break;
		case PDFOptions::OneColumn:
			PutDoc("/OneColumn\n");
			break;
		case PDFOptions::TwoColumnLeft:
			PutDoc("/TwoColumnLeft\n");
			break;
		case PDFOptions::TwoColumnRight:
			PutDoc("/TwoColumnRight\n");
			break;
	}
	if (Options.displayBookmarks)
		PutDoc("/PageMode /UseOutlines\n");
	else if (Options.displayFullscreen)
		PutDoc("/PageMode /FullScreen\n");
	else if (Options.displayThumbs)
		PutDoc("/PageMode /UseThumbs\n");
	else if ((Options.Version == 15) && (Options.displayLayers))
			PutDoc("/PageMode /UseOC\n");
	if (!Options.openAction.isEmpty())
	{
		PutDoc("/OpenAction << /S /JavaScript /JS (this."+Options.openAction+"\\(\\)) >>\n");
	}
	PutDoc("/ViewerPreferences\n<<\n/PageDirection ");
	PutDoc( Options.Binding == 0 ? "/L2R\n" : "/R2L\n");
	if (Options.hideToolBar)
		PutDoc("/HideToolbar true\n");
	if (Options.hideMenuBar)
		PutDoc("/HideMenubar true\n");
	if (Options.fitWindow)
		PutDoc("/FitWindow true\n");
	PutDoc(" >>\n>>\nendobj\n");
	QString IDg(Datum);
	IDg += Options.Datei;
	IDg += "Scribus "+QString(VERSION);
	IDg += "Scribus PDF Library "+QString(VERSION);
	IDg += doc.documentInfo.getTitle();
	IDg += doc.documentInfo.getAuthor();
	IDg += "/False";
	FileID = ComputeMD5(IDg);
	if (Options.Encrypt)
	{
		if ((Options.Version == 14) || (Options.Version == 15))
			KeyLen = 16;
		else
			KeyLen = 5;
		CalcOwnerKey(Options.PassOwner, Options.PassUser);
		CalcUserKey(Options.PassUser, Options.Permissions);
		for (uint cl2 = 0; cl2 < 32; ++cl2)
			ok += QChar(OwnerKey[cl2]);
		if (KeyLen > 5)
		{
			for (uint cl3 = 0; cl3 < 16; ++cl3)
				uk += QChar(UserKey[cl3]);
			for (uint cl3r = 0; cl3r < 16; ++cl3r)
				uk += QChar(KeyGen[cl3r]);
		}
		else
		{
			for (uint cl = 0; cl < 32; ++cl)
				uk += QChar(UserKey[cl]);
		}
	}
	QDate d = QDate::currentDate();
	Datum = "D:";
	tmp.sprintf("%4d", d.year());
	tmp.replace(QRegExp(" "), "0");
	Datum += tmp;
	tmp.sprintf("%2d", d.month());
	tmp.replace(QRegExp(" "), "0");
	Datum += tmp;
	tmp.sprintf("%2d", d.day());
	tmp.replace(QRegExp(" "), "0");
	Datum += tmp;
	tmp = QTime::currentTime().toString();
	tmp.replace(QRegExp(":"), "");
	Datum += tmp;
	StartObj(2);
	PutDoc("<<\n/Creator "+EncString("(Scribus "+QString(VERSION)+")",2)+"\n");
	PutDoc("/Producer "+EncString("(Scribus PDF Library "+QString(VERSION)+")",2)+"\n");
	QString docTitle = doc.documentInfo.getTitle();
	if ((Options.Version == 12) && (docTitle.isEmpty()))
		PutDoc("/Title "+EncStringUTF16("("+doc.DocName+")",2)+"\n");
	else
		PutDoc("/Title "+EncStringUTF16("("+doc.documentInfo.getTitle()+")",2)+"\n");
	PutDoc("/Author "+EncStringUTF16("("+doc.documentInfo.getAuthor()+")",2)+"\n");
	PutDoc("/Keywords "+EncStringUTF16("("+doc.documentInfo.getKeywords()+")",2)+"\n");
	PutDoc("/CreationDate "+EncString("("+Datum+")",2)+"\n");
	PutDoc("/ModDate "+EncString("("+Datum+")",2)+"\n");
	if (Options.Version == 12)
		PutDoc("/GTS_PDFXVersion (PDF/X-3:2002)\n");
	PutDoc("/Trapped /False\n>>\nendobj\n");
	for (int t = 0; t < 6; ++t)
		XRef.append(bytesWritten());
	if ((Options.Version == 15) && (Options.useLayers))
		XRef.append(bytesWritten());
	if (Options.Version == 12)
		XRef.append(bytesWritten());
	if (Options.Encrypt)
	{
		StartObj(ObjCounter);
		Encrypt = ObjCounter;
		ObjCounter++;
		PutDoc("<<\n/Filter /Standard\n");
		PutDoc( KeyLen > 5 ? "/R 3\n/V 2\n/Length 128\n" : "/R 2\n/V 1\n");
		PutDoc("/O <"+String2Hex(&ok)+">\n");
		PutDoc("/U <"+String2Hex(&uk)+">\n");
		PutDoc("/P "+QString::number(Options.Permissions)+"\n>>\nendobj\n");
	}
	QMap<QString, QMap<uint, FPointArray> > ReallyUsed;
	ReallyUsed.clear();
	PageItem* pgit;
	QMap<int, QString> ind2PDFabr;
	const QString tmpf[] = {"/Courier", "/Courier-Bold", "/Courier-Oblique", "/Courier-BoldOblique",
												"/Helvetica", "/Helvetica-Bold", "/Helvetica-Oblique", "/Helvetica-BoldOblique",
												"/Times-Roman", "/Times-Bold", "/Times-Italic", "/Times-BoldItalic",
												"/ZapfDingbats", "/Symbol"};
	size_t ar = sizeof(tmpf) / sizeof(*tmpf);
	for (uint ax = 0; ax < ar; ++ax)
		ind2PDFabr[ax] = tmpf[ax];
	for (int c = 0; c < doc.FrameItems.count(); ++c)
	{
		pgit = doc.FrameItems.at(c);
		if ((pgit->itemType() == PageItem::TextFrame) || (pgit->itemType() == PageItem::PathText))
		{
			if (pgit->isAnnotation())
			{
				if (pgit->annotation().Type() == 4)
					StdFonts.insert("/ZapfDingbats", "");
				StdFonts.insert(ind2PDFabr[pgit->annotation().Font()], "");
				ReallyUsed.insert(pgit->itemText.defaultStyle().charStyle().font().replacementName(), DocFonts[pgit->itemText.defaultStyle().charStyle().font().replacementName()]);
			}
			for (uint e = 0; e < static_cast<uint>(pgit->itemText.length()); ++e)
			{
				ReallyUsed.insert(pgit->itemText.charStyle(e).font().replacementName(), DocFonts[pgit->itemText.charStyle(e).font().replacementName()]);
			}
		}
	}
	for (int c = 0; c < doc.MasterItems.count(); ++c)
	{
		pgit = doc.MasterItems.at(c);
		if ((pgit->itemType() == PageItem::TextFrame) || (pgit->itemType() == PageItem::PathText))
		{
			if (pgit->isAnnotation())
			{
				if (pgit->annotation().Type() == 4)
					StdFonts.insert("/ZapfDingbats", "");
				StdFonts.insert(ind2PDFabr[pgit->annotation().Font()], "");
				ReallyUsed.insert(pgit->itemText.defaultStyle().charStyle().font().replacementName(), DocFonts[pgit->itemText.defaultStyle().charStyle().font().replacementName()]);
			}
			for (uint e = 0; e < static_cast<uint>(pgit->itemText.length()); ++e)
			{
				ReallyUsed.insert(pgit->itemText.charStyle(e).font().replacementName(), DocFonts[pgit->itemText.charStyle(e).font().replacementName()]);
			}
		}
	}
	for (int d = 0; d < doc.Items->count(); ++d)
	{
		pgit = doc.Items->at(d);
		if ((pgit->itemType() == PageItem::TextFrame) || (pgit->itemType() == PageItem::PathText))
		{
			if (pgit->isAnnotation())
			{
				if (pgit->annotation().Type() == 4)
					StdFonts.insert("/ZapfDingbats", "");
				StdFonts.insert(ind2PDFabr[pgit->annotation().Font()], "");
				ReallyUsed.insert(pgit->itemText.defaultStyle().charStyle().font().replacementName(), DocFonts[pgit->itemText.defaultStyle().charStyle().font().replacementName()]);
			}
			for (uint e = 0; e < static_cast<uint>(pgit->itemText.length()); ++e)
			{
				ReallyUsed.insert(pgit->itemText.charStyle(e).font().replacementName(), DocFonts[pgit->itemText.charStyle(e).font().replacementName()]);
			}
		}
	}
	if (Options.docInfoMarks)
	{
		StdFonts.insert("/Helvetica", "");
	}
	QStringList patterns = doc.getUsedPatterns();
	for (int c = 0; c < patterns.count(); ++c)
	{
		ScPattern pa = doc.docPatterns[patterns[c]];
		for (int o = 0; o < pa.items.count(); o++)
		{
			pgit = pa.items.at(o);
			if ((pgit->itemType() == PageItem::TextFrame) || (pgit->itemType() == PageItem::PathText))
			{
				if (pgit->isAnnotation())
				{
					if (pgit->annotation().Type() == 4)
						StdFonts.insert("/ZapfDingbats", "");
					StdFonts.insert(ind2PDFabr[pgit->annotation().Font()], "");
					ReallyUsed.insert(pgit->itemText.defaultStyle().charStyle().font().replacementName(), DocFonts[pgit->itemText.defaultStyle().charStyle().font().replacementName()]);
				}
				for (uint e = 0; e < static_cast<uint>(pgit->itemText.length()); ++e)
				{
					ReallyUsed.insert(pgit->itemText.charStyle(e).font().replacementName(), DocFonts[pgit->itemText.charStyle(e).font().replacementName()]);
				}
			}
		}
	}
	a = 0;
	QMap<QString, QString>::Iterator itStd;
	for (itStd = StdFonts.begin(); itStd != StdFonts.end(); ++itStd)
	{
		StartObj(ObjCounter);
		PutDoc("<<\n/Type /Font\n/Subtype /Type1\n");
		PutDoc("/Name /FoStd"+QString::number(a)+"\n");
		PutDoc("/BaseFont "+itStd.key()+"\n");
		if (itStd.key() != "/ZapfDingbats")
		{
			PutDoc("/Encoding << \n");
			PutDoc("/Differences [ \n");
			PutDoc("24 /breve /caron /circumflex /dotaccent /hungarumlaut /ogonek /ring /tilde\n");
			PutDoc("39 /quotesingle 96 /grave 128 /bullet /dagger /daggerdbl /ellipsis /emdash /endash /florin /fraction /guilsinglleft /guilsinglright\n");
			PutDoc("/minus /perthousand /quotedblbase /quotedblleft /quotedblright /quoteleft /quoteright /quotesinglbase /trademark /fi /fl /Lslash /OE /Scaron\n");
			PutDoc("/Ydieresis /Zcaron /dotlessi /lslash /oe /scaron /zcaron 164 /currency 166 /brokenbar 168 /dieresis /copyright /ordfeminine 172 /logicalnot\n");
			PutDoc("/.notdef /registered /macron /degree /plusminus /twosuperior /threesuperior /acute /mu 183 /periodcentered /cedilla /onesuperior /ordmasculine\n");
			PutDoc("188 /onequarter /onehalf /threequarters 192 /Agrave /Aacute /Acircumflex /Atilde /Adieresis /Aring /AE /Ccedilla /Egrave /Eacute /Ecircumflex\n");
			PutDoc("/Edieresis /Igrave /Iacute /Icircumflex /Idieresis /Eth /Ntilde /Ograve /Oacute /Ocircumflex /Otilde /Odieresis /multiply /Oslash\n");
			PutDoc("/Ugrave /Uacute /Ucircumflex /Udieresis /Yacute /Thorn /germandbls /agrave /aacute /acircumflex /atilde /adieresis /aring /ae /ccedilla\n");
			PutDoc("/egrave /eacute /ecircumflex /edieresis /igrave /iacute /icircumflex /idieresis /eth /ntilde /ograve /oacute /ocircumflex /otilde /odieresis\n");
			PutDoc("/divide /oslash /ugrave /uacute /ucircumflex /udieresis /yacute /thorn /ydieresis\n");
			PutDoc("] >>\n");
		}
		PutDoc(">>\nendobj\n");
		Seite.FObjects["FoStd"+QString::number(a)] = ObjCounter;
		itStd.data() = "FoStd"+QString::number(a);
		ObjCounter++;
		a++;
	}
	QMap<QString,QMap<uint, FPointArray> >::Iterator it;
	a = 0;
	for (it = ReallyUsed.begin(); it != ReallyUsed.end(); ++it)
	{
		ScFace::FontFormat fformat = AllFonts[it.key()].format();
		if ((!AllFonts[it.key()].hasNames()) || (Options.SubsetList.contains(it.key())))
		{
			if (AllFonts[it.key()].hasNames())
			{
				UsedFontsP.insert(it.key(), "/Fo"+QString::number(a));
				uint SubFonts = 0;
				int glyphCount = 0;
				double minx = 99999.9;
				double miny = 99999.9;
				double maxx = -99999.9;
				double maxy = -99999.9;
				QList<uint> glyphWidths;
				QStringList charProcs;
				QString encoding = "<< /Type /Encoding\n/Differences [ 0\n";
				QString fon("");
				QMap<uint, uint> glyphMapping;
				QMap<uint,std::pair<QChar,QString> > gl;
				AllFonts[it.key()].glyphNames(gl);
				QMap<uint,FPointArray>& RealGlyphs(it.data());
				QMap<uint,FPointArray>::Iterator ig;
				for (ig = RealGlyphs.begin(); ig != RealGlyphs.end(); ++ig)
				{
					FPoint np, np1, np2;
					bool nPath = true;
					fon = "";
					if (ig.data().size() > 3)
					{
						FPointArray gly = ig.data();
						QMatrix mat;
						mat.scale(100.0, -100.0);
						gly.map(mat);
						gly.translate(0, 1000);
						for (uint poi = 0; poi < gly.size()-3; poi += 4)
						{
							if (gly.point(poi).x() > 900000)
							{
								fon += "h\n";
								nPath = true;
								continue;
							}
							if (nPath)
							{
								np = gly.point(poi);
								fon += FToStr(np.x())+" "+FToStr(np.y())+" m\n";
								nPath = false;
							}
							np = gly.point(poi+1);
							np1 = gly.point(poi+3);
							np2 = gly.point(poi+2);
							fon += FToStr(np.x()) + " " + FToStr(np.y()) + " " + FToStr(np1.x()) + " " + FToStr(np1.y()) + " " + FToStr(np2.x()) + " " + FToStr(np2.y()) + " c\n";
						}
						fon += "h f*\n";
						np = getMinClipF(&gly);
						np1 = getMaxClipF(&gly);
					}
					else
					{
						fon = "h";
						np = FPoint(0, 0);
						np1 = FPoint(0, 0);
					}
					fon.prepend(QString::number(qRound(np1.x())) + " 0 "+QString::number(qRound(np.x()))+" "+QString::number(qRound(np.y()))+" "+QString::number(qRound(np1.x()))+ " "+QString::number(qRound(np1.y()))+" d1\n");
					minx = qMin(minx, np.x());
					miny = qMin(miny, np.y());
					maxx = qMax(maxx, np1.x());
					maxy = qMax(maxy, np1.y());
					glyphWidths.append(qRound(np1.x()));
					charProcs.append("/"+gl[ig.key()].second+" "+QString::number(ObjCounter)+" 0 R\n");
					encoding += "/"+gl[ig.key()].second+" ";
					glyphMapping.insert(ig.key(), glyphCount + SubFonts * 256);
					StartObj(ObjCounter);
					ObjCounter++;
					if ((Options.Compress) && (CompAvail))
						fon = CompressStr(&fon);
					PutDoc("<< /Length "+QString::number(fon.length()+1));
					if ((Options.Compress) && (CompAvail))
						PutDoc("\n/Filter /FlateDecode");
					PutDoc("\n>>\nstream\n"+EncStream(fon, ObjCounter-1)+"\nendstream\nendobj\n");
					glyphCount++;
					if ((glyphCount > 256) || (glyphCount == RealGlyphs.count()))
					{
						StartObj(ObjCounter);
						ObjCounter++;
						PutDoc("[ ");
						for (int ww = 0; ww < glyphWidths.count(); ++ww)
						{
							PutDoc(QString::number(qRound(glyphWidths[ww]))+" ");
						}
						PutDoc("]\nendobj\n");
						StartObj(ObjCounter);
						ObjCounter++;
						PutDoc("<<\n");
						for (int ww = 0; ww < charProcs.count(); ++ww)
						{
							PutDoc(charProcs[ww]);
						}
						PutDoc(">>\nendobj\n");
						StartObj(ObjCounter);
						ObjCounter++;
						PutDoc(encoding);
						PutDoc("]\n");
						PutDoc(">>\nendobj\n");
						StartObj(ObjCounter);
						PutDoc("<<\n/Type /Font\n/Subtype /Type3\n");
						PutDoc("/Name /Fo"+QString::number(a)+"S"+QString::number(SubFonts)+"\n");
						PutDoc("/FirstChar 0\n");
						PutDoc("/LastChar "+QString::number(glyphCount-1)+"\n");
						PutDoc("/Widths "+QString::number(ObjCounter-3)+" 0 R\n");
						PutDoc("/CharProcs "+QString::number(ObjCounter-2)+" 0 R\n");
						PutDoc("/FontBBox ["+QString::number(qRound(minx))+" "+QString::number(qRound(miny))+" "+QString::number(qRound(maxx))+ " "+QString::number(qRound(maxy))+"]\n");
						PutDoc("/FontMatrix [0.001 0 0 0.001 0 0]\n");
						PutDoc("/Encoding "+QString::number(ObjCounter-1)+" 0 R\n");
						PutDoc(">>\nendobj\n");
						Seite.FObjects["Fo"+QString::number(a)+"S"+QString::number(SubFonts)] = ObjCounter;
						ObjCounter++;
						charProcs.clear();
						glyphWidths.clear();
//						glyphMapping.clear();
						glyphCount = 0;
						SubFonts = 0;
						minx = 99999.9;
						miny = 99999.9;
						maxx = -99999.9;
						maxy = -99999.9;
						encoding = "<< /Type /Encoding\n/Differences [ 0\n";
					}
				}
				Type3Fonts.insert("/Fo"+QString::number(a), glyphMapping);
			}
			else
			{
				QString fon("");
				QMap<uint,FPointArray>& RealGlyphs(it.data());
				QMap<uint,FPointArray>::Iterator ig;
				for (ig = RealGlyphs.begin(); ig != RealGlyphs.end(); ++ig)
				{
					FPoint np, np1, np2;
					bool nPath = true;
					fon = "";
					if (ig.data().size() > 3)
					{
						FPointArray gly = ig.data();
						QMatrix mat;
						mat.scale(0.1, 0.1);
						gly.map(mat);
						for (uint poi = 0; poi < gly.size()-3; poi += 4)
						{
							if (gly.point(poi).x() > 900000)
							{
								fon += "h\n";
								nPath = true;
								continue;
							}
							if (nPath)
							{
								np = gly.point(poi);
								fon += FToStr(np.x())+" "+FToStr(-np.y())+" m\n";
								nPath = false;
							}
							np = gly.point(poi+1);
							np1 = gly.point(poi+3);
							np2 = gly.point(poi+2);
							fon += FToStr(np.x()) + " " + FToStr(-np.y()) + " " +
								FToStr(np1.x()) + " " + FToStr(-np1.y()) + " " +
								FToStr(np2.x()) + " " + FToStr(-np2.y()) + " c\n";
						}
						fon += "h f*\n";
						np = getMinClipF(&gly);
						np1 = getMaxClipF(&gly);
					}
					else
					{
						fon = "h";
						np = FPoint(0, 0);
						np1 = FPoint(0, 0);
					}
					StartObj(ObjCounter);
					ObjCounter++;
					PutDoc("<<\n/Type /XObject\n/Subtype /Form\n/FormType 1\n");
					PutDoc("/BBox [ "+FToStr(np.x())+" "+FToStr(-np.y())+" "+FToStr(np1.x())+ " "+FToStr(-np1.y())+" ]\n");
					PutDoc("/Resources << /ProcSet [/PDF /Text /ImageB /ImageC /ImageI]\n");
					PutDoc(">>\n");
					if ((Options.Compress) && (CompAvail))
						fon = CompressStr(&fon);
					PutDoc("/Length "+QString::number(fon.length()+1));
					if ((Options.Compress) && (CompAvail))
						PutDoc("\n/Filter /FlateDecode");
					PutDoc(" >>\nstream\n"+EncStream(fon, ObjCounter-1)+"\nendstream\nendobj\n");
					Seite.XObjects[AllFonts[it.key()].psName().replace( QRegExp("[\\s\\/\\{\\[\\]\\}\\<\\>\\(\\)\\%]"), "_" )+QString::number(ig.key())] = ObjCounter-1;
				}
			}
		}
		else
		{
			UsedFontsP.insert(it.key(), "/Fo"+QString::number(a));
			if ((fformat == ScFace::PFB) && (Options.EmbedList.contains(it.key())))
			{
				QString fon("");
				StartObj(ObjCounter);
				QByteArray bb;
				AllFonts[it.key()].RawData(bb);
				int posi;
				for (posi = 6; posi < bb.size(); ++posi)
				{
					if ((bb[posi] == static_cast<char>(0x80)) && (static_cast<int>(bb[posi+1]) == 2))
						break;
					fon += QChar(bb[posi]);
				}
				int len1 = fon.length();
				int ulen;
				ulen = bb[posi+2] & 0xff;
				ulen |= (bb[posi+3] << 8) & 0xff00;
				ulen |= (bb[posi+4] << 16) & 0xff0000;
				ulen |= (bb[posi+5] << 24) & 0xff000000;
				if (ulen > bb.size())
					ulen = bb.size()-7;
				posi += 6;
				for (int j = 0; j < ulen; ++j)
					fon += QChar(bb[posi++]);
				posi += 6;
				int len2 = fon.length()-len1;
				for (int j = posi; j < bb.size(); ++j)
				{
					if ((bb[j] == static_cast<char>(0x80)) && (static_cast<int>(bb[j+1]) == 3))
						break;
					if (bb[j] == '\r')
						fon += "\n";
					else
						fon += QChar(bb[j]);
				}
				int len3 = fon.length()-len2-len1;
				if ((Options.Compress) && (CompAvail))
					fon = CompressStr(&fon);
				PutDoc("<<\n/Length "+QString::number(fon.length()+1)+"\n");
				PutDoc("/Length1 "+QString::number(len1)+"\n");
				PutDoc("/Length2 "+QString::number(len2)+"\n");
				PutDoc("/Length3 "+QString::number(len3)+"\n");
				if ((Options.Compress) && (CompAvail))
					PutDoc("/Filter /FlateDecode\n");
				PutDoc(">>\nstream\n"+EncStream(fon,ObjCounter)+"\nendstream\nendobj\n");
				ObjCounter++;
			}
			if ((fformat == ScFace::PFA) && (Options.EmbedList.contains(it.key())))
			{
				QString fon("");
				QString fon2("");
				QString tm("");
				uint value;
				bool ok = true;
				StartObj(ObjCounter);
				AllFonts[it.key()].EmbedFont(fon);
				int len1 = fon.find("eexec")+5;
				fon2 = fon.left(len1)+"\n";
				int len2 = fon.find("0000000000000000000000000");
				if (len2 == -1)
					len2 = fon.length()+1;
				int count = 0;
				for (int xx = len1; xx < len2-1; ++xx)
				{
					tm = fon.at(xx);
					if ((tm == QChar(13)) || (tm == QChar(10)))
						continue;
					xx++;
					count++;
					tm += fon.at(xx);
					value = tm.toUInt(&ok, 16);
					fon2 += QChar(value);
				}
				fon2 += fon.mid(len2);
				if ((Options.Compress) && (CompAvail))
					fon2 = CompressStr(&fon2);
				PutDoc("<<\n/Length "+QString::number(fon2.length()+1)+"\n");
				PutDoc("/Length1 "+QString::number(len1+1)+"\n");
				PutDoc("/Length2 "+QString::number(count)+"\n");
				PutDoc(static_cast<int>(fon.length()-len2) == -1 ? QString("/Length3 0\n") : "/Length3 "+QString::number(fon.length()-len2)+"\n");
				if ((Options.Compress) && (CompAvail))
					PutDoc("/Filter /FlateDecode\n");
				PutDoc(">>\nstream\n"+EncStream(fon2, ObjCounter)+"\nendstream\nendobj\n");
				ObjCounter++;
			}
			if ((fformat == ScFace::SFNT || fformat == ScFace::TTCF) && (Options.EmbedList.contains(it.key())))
			{
				QString fon("");
				StartObj(ObjCounter);
				QByteArray bb;
				AllFonts[it.key()].RawData(bb);
				//AV: += and append() dont't work because they stop at '\0' :-(
				for (int i=0; i < bb.size(); i++)
					fon += QChar(bb[i]);
				int len = fon.length();
				if ((Options.Compress) && (CompAvail))
					fon = CompressStr(&fon);
				//qDebug(QString("sfnt data: size=%1 before=%2 compressed=%3").arg(bb.size()).arg(len).arg(fon.length()));
				PutDoc("<<\n/Length "+QString::number(fon.length()+1)+"\n");
				PutDoc("/Length1 "+QString::number(len)+"\n");
				if ((Options.Compress) && (CompAvail))
					PutDoc("/Filter /FlateDecode\n");
				PutDoc(">>\nstream\n"+EncStream(fon, ObjCounter)+"\nendstream\nendobj\n");
				ObjCounter++;
			}
			StartObj(ObjCounter);
			// TODO: think about QByteArray ScFace::getFontDescriptor() -- AV
			PutDoc("<<\n/Type /FontDescriptor\n");
			PutDoc("/FontName /"+AllFonts[it.key()].psName().replace( QRegExp("[\\s\\/\\{\\[\\]\\}\\<\\>\\(\\)\\%]"), "_" )+"\n");
			PutDoc("/FontBBox [ "+AllFonts[it.key()].FontBBoxAsString()+" ]\n");
			PutDoc("/Flags ");
			//FIXME: isItalic() should be queried from ScFace, not from Qt -- AV
			//QFontInfo fo = QFontInfo(it.data());
			int pfl = 0;
			if (AllFonts[it.key()].isFixedPitch())
				pfl = pfl ^ 1;
			//if (fo.italic())
			if (AllFonts[it.key()].ItalicAngleAsString() != "0")
				pfl = pfl ^ 64;
//			pfl = pfl ^ 4;
			pfl = pfl ^ 32;
			PutDoc(QString::number(pfl)+"\n");
			PutDoc("/Ascent "+AllFonts[it.key()].ascentAsString()+"\n");
			PutDoc("/Descent "+AllFonts[it.key()].descentAsString()+"\n");
			PutDoc("/CapHeight "+AllFonts[it.key()].capHeightAsString()+"\n");
			PutDoc("/ItalicAngle "+AllFonts[it.key()].ItalicAngleAsString()+"\n");
//			PutDoc("/Ascent "+QString::number(static_cast<int>(AllFonts[it.key()].ascent()))+"\n");
//			PutDoc("/Descent "+QString::number(static_cast<int>(AllFonts[it.key()].descent()))+"\n");
//			PutDoc("/CapHeight "+QString::number(static_cast<int>(AllFonts[it.key()].capHeight()))+"\n");
//			PutDoc("/ItalicAngle "+AllFonts[it.key()].italicAngle()+"\n");
//			PutDoc("/StemV "+ AllFonts[it.key()].stemV() + "\n");
			PutDoc("/StemV 1\n");
			if ((fformat == ScFace::SFNT || fformat == ScFace::TTCF) && (Options.EmbedList.contains(it.key())))
				PutDoc("/FontFile2 "+QString::number(ObjCounter-1)+" 0 R\n");
			if ((fformat == ScFace::PFB) && (Options.EmbedList.contains(it.key())))
				PutDoc("/FontFile "+QString::number(ObjCounter-1)+" 0 R\n");
			if ((fformat == ScFace::PFA) && (Options.EmbedList.contains(it.key())))
				PutDoc("/FontFile "+QString::number(ObjCounter-1)+" 0 R\n");
			PutDoc(">>\nendobj\n");
			ObjCounter++;
/*			if (!FT_Has_PS_Glyph_Names(AllFonts[it.key()])
			{
				StartObj(ObjCounter);
				int chCount = 31;
				PutDoc("[ 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ");
				for (int ww = 31; ww < 256; ++ww)
				{
					PutDoc(QString::number(static_cast<int>(AllFonts[it.key()]->CharWidth[itg.key()]*
							1000))+" ");
					if (itg == gl.end())
						break;
					++itg;
					chCount++;
				}
				PutDoc("]\nendobj\n");
				ObjCounter++;
				// put widths object
				// encoding dictionary w/ base encoding w/o differences
				StartObj(ObjCounter);
				PutDoc("<<\n/Type /Font\n/Subtype ");
				PutDoc((fformat == ScFace::SFNT || fformat == ScFace::TTCF) ? "/TrueType\n" : "/Type1\n");
				PutDoc("/Name /Fo"+QString::number(a)+"\n");
				PutDoc("/BaseFont /"+AllFonts[it.key()]->psName().replace( QRegExp("[\\s\\/\\{\\[\\]\\}\\<\\>\\(\\)\\%]"), "" )+"\n");
				//cf. widths:
				PutDoc("/FirstChar 0\n");
				PutDoc("/LastChar "+QString::number(chCount-1)+"\n");
				PutDoc("/Widths "+QString::number(ObjCounter-1)+" 0 R\n");
				PutDoc("/FontDescriptor "+QString::number(ObjCounter-2)+" 0 R\n");
				PutDoc(">>\nendobj\n");
				Seite.FObjects["Fo"+QString::number(a)] = ObjCounter;
				ObjCounter++;
			}
			else */
//			{
				QMap<uint,std::pair<QChar,QString> > gl;
				AllFonts[it.key()].glyphNames(gl);
				int nglyphs = 0;
				QMap<uint,std::pair<QChar,QString> >::Iterator gli;
				for (gli = gl.begin(); gli != gl.end(); ++gli)
				{
					if (gli.key() > static_cast<uint>(nglyphs))
						nglyphs = gli.key();
				}
				++nglyphs;
//				qDebug(QString("pdflib: nglyphs %1 max %2").arg(nglyphs).arg(AllFonts[it.key()].maxGlyph()));
				uint FontDes = ObjCounter - 1;
				uint Fcc = nglyphs / 224;
				if ((nglyphs % 224) != 0)
					Fcc += 1;
				for (uint Fc = 0; Fc < Fcc; ++Fc)
				{
					StartObj(ObjCounter);
					int chCount = 32;
					PutDoc("[ 0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 ");
					for (int ww = 32; ww < 256; ++ww)
					{
						uint glyph = 224 * Fc + ww - 32;
						if (gl.contains(glyph))
							PutDoc(QString::number(static_cast<int>(AllFonts[it.key()].glyphWidth(glyph)* 1000))+" ");
						else
							PutDoc("0 ");
						chCount++;
						if (signed(glyph) == nglyphs-1)
							break;
					}
					PutDoc("]\nendobj\n");
					ObjCounter++;
					StartObj(ObjCounter);
					ObjCounter++;
					QStringList toUnicodeMaps;
					QList<int> toUnicodeMapsCount;
					QString toUnicodeMap = "";
					int toUnicodeMapCounter = 0;
					PutDoc("<< /Type /Encoding\n");
					PutDoc("/Differences [ \n");
					int crc = 0;
					bool startOfSeq = true;
					for (int ww2 = 32; ww2 < 256; ++ww2)
					{
						uint glyph = 224 * Fc + ww2 - 32;
						if (gl[glyph].second != "")
						{
							if (startOfSeq)
							{
								PutDoc(QString::number(ww2)+" ");
								startOfSeq = false;
							}
							PutDoc("/"+gl[glyph].second+" ");
							QString tmp, tmp2;
							tmp.sprintf("%02X", ww2);
							tmp2.sprintf("%04X", gl[glyph].first.unicode());
							toUnicodeMap += QString("<%1> <%2>\n").arg(tmp).arg((tmp2));
							toUnicodeMapCounter++;
							if (toUnicodeMapCounter == 100)
							{
								toUnicodeMaps.append(toUnicodeMap);
								toUnicodeMapsCount.append(toUnicodeMapCounter);
								toUnicodeMap = "";
								toUnicodeMapCounter = 0;
							}
							crc++;
						}
						else
						{
							startOfSeq = true;
						}
						if (signed(glyph) == nglyphs-1)
							break;
						if (crc > 8)
						{
							PutDoc("\n");
							crc = 0;
						}
					}
					if (toUnicodeMapCounter != 0)
					{
						toUnicodeMaps.append(toUnicodeMap);
						toUnicodeMapsCount.append(toUnicodeMapCounter);
					}
					PutDoc("]\n");
					PutDoc(">>\nendobj\n");
					QString toUnicodeMapStream = "";
					toUnicodeMapStream += "/CIDInit /ProcSet findresource begin\n";
					toUnicodeMapStream += "12 dict begin\n";
					toUnicodeMapStream += "begincmap\n";
					toUnicodeMapStream += "/CIDSystemInfo <<\n";
					toUnicodeMapStream += "/Registry (Adobe)\n";
					toUnicodeMapStream += "/Ordering (UCS)\n";
					toUnicodeMapStream += "/Supplement 0\n";
					toUnicodeMapStream += ">> def\n";
					toUnicodeMapStream += "/CMapName /Adobe-Identity-UCS def\n";
					toUnicodeMapStream += "/CMapType 2 def\n";
					toUnicodeMapStream += "1 begincodespacerange\n";
					toUnicodeMapStream += "<0000> <FFFF>\n";
					toUnicodeMapStream += "endcodespacerange\n";
					for (int uniC = 0; uniC < toUnicodeMaps.count(); uniC++)
					{
						toUnicodeMapStream += QString("%1 beginbfchar\n").arg(toUnicodeMapsCount[uniC]);
						toUnicodeMapStream += toUnicodeMaps[uniC];
						toUnicodeMapStream += "endbfchar\n";
					}
					toUnicodeMapStream += "endcmap\n";
					toUnicodeMapStream += "CMapName currentdict /CMap defineresource pop\n";
					toUnicodeMapStream += "end\n";
					toUnicodeMapStream += "end\n";
					WritePDFStream(toUnicodeMapStream);
					StartObj(ObjCounter);
					PutDoc("<<\n/Type /Font\n/Subtype ");
					PutDoc((fformat == ScFace::SFNT || fformat == ScFace::TTCF) ? "/TrueType\n" : "/Type1\n");
					PutDoc("/Name /Fo"+QString::number(a)+"S"+QString::number(Fc)+"\n");
					PutDoc("/BaseFont /"+AllFonts[it.key()].psName().replace( QRegExp("[\\s\\/\\{\\[\\]\\}\\<\\>\\(\\)\\%]"), "_" )+"\n");
					PutDoc("/FirstChar 0\n");
					PutDoc("/LastChar "+QString::number(chCount-1)+"\n");
					PutDoc("/Widths "+QString::number(ObjCounter-3)+" 0 R\n");
					PutDoc("/Encoding "+QString::number(ObjCounter-2)+" 0 R\n");
					PutDoc("/ToUnicode "+QString::number(ObjCounter-1)+" 0 R\n");
					PutDoc("/FontDescriptor "+QString::number(FontDes)+" 0 R\n");
					PutDoc(">>\nendobj\n");
					Seite.FObjects["Fo"+QString::number(a)+"S"+QString::number(Fc)] = ObjCounter;
					ObjCounter++;
				} // for(Fc)
				StartObj(ObjCounter);
				PutDoc("[ 0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 ");
				for (int ww = 32; ww < 256; ++ww)
				{
					uint glyph = AllFonts[it.key()].char2CMap(QChar(ww));
					if (gl.contains(glyph))
						PutDoc(QString::number(static_cast<int>(AllFonts[it.key()].glyphWidth(glyph)* 1000))+" ");
					else
						PutDoc("0 ");
				}
				PutDoc("]\nendobj\n");
				ObjCounter++;
				StartObj(ObjCounter);
				PutDoc("<<\n/Type /Font\n/Subtype ");
				PutDoc((fformat == ScFace::SFNT || fformat == ScFace::TTCF) ? "/TrueType\n" : "/Type1\n");
//				if (fformat == ScFace::SFNT || fformat == ScFace::TTCF)
//				{
//					PutDoc("/TrueType\n");
					PutDoc("/Name /Fo"+QString::number(a)+"Form"+"\n");
					Seite.FObjects["Fo"+QString::number(a)+"Form"] = ObjCounter;
					UsedFontsF.insert(it.key(), "/Fo"+QString::number(a)+"Form");
/*				}
				else
				{
					PutDoc("/Type1\n");
					PutDoc("/Name /"+AllFonts[it.key()].psName().replace( QRegExp("[\\s\\/\\{\\[\\]\\}\\<\\>\\(\\)\\%]"), "_" )+"\n");
					Seite.FObjects[AllFonts[it.key()].psName().replace( QRegExp("[\\s\\/\\{\\[\\]\\}\\<\\>\\(\\)\\%]"), "_" )] = ObjCounter;
					UsedFontsF.insert(it.key(), "/"+AllFonts[it.key()].psName().replace( QRegExp("[\\s\\/\\{\\[\\]\\}\\<\\>\\(\\)\\%]"), "_" ));
				} */
				PutDoc("/BaseFont /"+AllFonts[it.key()].psName().replace( QRegExp("[\\s\\/\\{\\[\\]\\}\\<\\>\\(\\)\\%]"), "_" )+"\n");
				PutDoc("/Encoding << \n");
				PutDoc("/Differences [ \n");
				PutDoc("24 /breve /caron /circumflex /dotaccent /hungarumlaut /ogonek /ring /tilde\n");
				PutDoc("39 /quotesingle 96 /grave 128 /bullet /dagger /daggerdbl /ellipsis /emdash /endash /florin /fraction /guilsinglleft /guilsinglright\n");
				PutDoc("/minus /perthousand /quotedblbase /quotedblleft /quotedblright /quoteleft /quoteright /quotesinglbase /trademark /fi /fl /Lslash /OE /Scaron\n");
				PutDoc("/Ydieresis /Zcaron /dotlessi /lslash /oe /scaron /zcaron 164 /currency 166 /brokenbar 168 /dieresis /copyright /ordfeminine 172 /logicalnot\n");
				PutDoc("/.notdef /registered /macron /degree /plusminus /twosuperior /threesuperior /acute /mu 183 /periodcentered /cedilla /onesuperior /ordmasculine\n");
				PutDoc("188 /onequarter /onehalf /threequarters 192 /Agrave /Aacute /Acircumflex /Atilde /Adieresis /Aring /AE /Ccedilla /Egrave /Eacute /Ecircumflex\n");
				PutDoc("/Edieresis /Igrave /Iacute /Icircumflex /Idieresis /Eth /Ntilde /Ograve /Oacute /Ocircumflex /Otilde /Odieresis /multiply /Oslash\n");
				PutDoc("/Ugrave /Uacute /Ucircumflex /Udieresis /Yacute /Thorn /germandbls /agrave /aacute /acircumflex /atilde /adieresis /aring /ae /ccedilla\n");
				PutDoc("/egrave /eacute /ecircumflex /edieresis /igrave /iacute /icircumflex /idieresis /eth /ntilde /ograve /oacute /ocircumflex /otilde /odieresis\n");
				PutDoc("/divide /oslash /ugrave /uacute /ucircumflex /udieresis /yacute /thorn /ydieresis\n");
				PutDoc("] >>\n");
				PutDoc("/FirstChar 0\n");
				PutDoc("/LastChar 255\n");
				PutDoc("/Widths "+QString::number(ObjCounter-1)+" 0 R\n");
				PutDoc("/FontDescriptor "+QString::number(FontDes)+" 0 R\n");
				PutDoc(">>\nendobj\n");
				ObjCounter++;
//			} // FT_Has_PS_Glyph_Names
		}
		a++;
	}
	if (Options.UseLPI)
	{
		StartObj(ObjCounter);
		PutDoc("<<\n/Type /Halftone\n/HalftoneType 5\n");
		QMap<QString,LPIData>::const_iterator itlp;
		for (itlp = Options.LPISettings.constBegin(); itlp != Options.LPISettings.constEnd(); ++itlp)
		{
			PutDoc("/"+itlp.key()+"\n<<\n/Type /Halftone\n/HalftoneType 1\n/Frequency ");
			PutDoc(QString::number(itlp.data().Frequency)+"\n/Angle "+QString::number(itlp.data().Angle)+"\n/SpotFunction ");
			QString func ("");
			switch (itlp.data().SpotFunc)
			{
				case 0:
					func = "/SimpleDot";
					break;
				case 1:
					func = "/Line";
					break;
				case 2:
					func = "/Round";
					break;
				case 3:
					func = "/Ellipse";
					break;
				default:
					func = "/SimpleDot";
					break;
			}
			PutDoc(func+"\n>>\n");
		}
		PutDoc("/Default\n<<\n/Type /Halftone\n/HalftoneType 1\n/Frequency 50\n/Angle 45\n/SpotFunction /Round\n>>\n");
		PutDoc(">>\nendobj\n");
		ObjCounter++;
		StartObj(ObjCounter);
		HTName = ResNam+QString::number(ResCount);
		Transpar[HTName] = ObjCounter;
		PutDoc("<< /Type /ExtGState\n/HT "+QString::number(ObjCounter-1)+" 0 R\n>>\nendobj\n");
		ResCount++;
		ObjCounter++;
	}
	if ((doc.HasCMS) && (Options.UseProfiles))
	{
		StartObj(ObjCounter);
		ObjCounter++;
		QByteArray dataP;
		struct ICCD dataD;
		loadRawBytes(ScCore->InputProfiles[Options.SolidProf], dataP);
		PutDoc("<<\n");
		if ((Options.Compress) && (CompAvail))
		{
			PutDoc("/Filter /FlateDecode\n");
			dataP = CompressArray(&dataP);
		}
		PutDoc("/Length "+QString::number(dataP.size()+1)+"\n");
		PutDoc("/N "+QString::number(Options.SComp)+"\n");
		PutDoc(">>\nstream\n");
		PutDoc(EncStreamArray(dataP, ObjCounter-1));
		PutDoc("\nendstream\nendobj\n");
		StartObj(ObjCounter);
		dataD.ResName = ResNam+QString::number(ResCount);
		dataD.ICCArray = "[ /ICCBased "+QString::number(ObjCounter-1)+" 0 R ]";
		dataD.ResNum = ObjCounter;
		ICCProfiles[Options.SolidProf] = dataD;
		PutDoc("[ /ICCBased "+QString::number(ObjCounter-1)+" 0 R ]\n");
		PutDoc("endobj\n");
		ResCount++;
		ObjCounter++;
	}
	if (((Options.isGrayscale == false) && (Options.UseRGB == false)) && (Options.UseSpotColors))
	{
		doc.getUsedColors(colorsToUse);
		ColorList::Iterator itf;
		for (itf = colorsToUse.begin(); itf != colorsToUse.end(); ++itf)
		{
			if ((colorsToUse[itf.key()].isSpotColor()) || (colorsToUse[itf.key()].isRegistrationColor()))
			{
				CMYKColor cmykValues;
				int cc, cm, cy, ck;
				struct SpotC spotD;
				ScColorEngine::getCMYKValues(colorsToUse[itf.key()], &doc, cmykValues);
				cmykValues.getValues(cc, cm, cy, ck);
				QString colorDesc = "{\ndup "+FToStr(static_cast<double>(cc) / 255)+"\nmul exch dup ";
				colorDesc += FToStr(static_cast<double>(cm) / 255)+"\nmul exch dup ";
				colorDesc += FToStr(static_cast<double>(cy) / 255)+"\nmul exch ";
				colorDesc += FToStr(static_cast<double>(ck) / 255)+" mul }";
				StartObj(ObjCounter);
				ObjCounter++;
				PutDoc("<<\n/FunctionType 4\n");
				PutDoc("/Domain [0.0 1.0]\n");
				PutDoc("/Range [0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0]\n");
				PutDoc("/Length "+QString::number(colorDesc.length()+1)+"\n");
				PutDoc(">>\nstream\n"+EncStream(colorDesc, ObjCounter-1)+"\nendstream\nendobj\n");
				StartObj(ObjCounter);
				PutDoc("[ /Separation /");
				if (colorsToUse[itf.key()].isRegistrationColor())
					PutDoc("All");
				else
					PutDoc(itf.key().simplifyWhiteSpace().replace("#", "#23").replace( QRegExp("[\\s\\/\\{\\[\\]\\}\\<\\>\\(\\)\\%]"), "#20" ));
				PutDoc(" /DeviceCMYK "+QString::number(ObjCounter-1)+" 0 R ]\nendobj\n");
				spotD.ResName = spotNam+QString::number(spotCount);
				spotD.ResNum = ObjCounter;
				spotMap.insert(itf.key(), spotD);
				spotCount++;
				ObjCounter++;
			}
		}
	}
	if ((Options.cropMarks) || (Options.bleedMarks) || (Options.registrationMarks) || (Options.colorMarks) || (Options.docInfoMarks))
	{
		struct SpotC spotD;
		StartObj(ObjCounter);
		PutDoc("[ /Separation /All /DeviceCMYK\n");
		PutDoc("<<\n/FunctionType 2\n");
		PutDoc("/Domain [0.0 1.0]\n");
		PutDoc("/Range [0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0]\n");
		PutDoc("/C0 [0 0 0 0] \n");
		PutDoc("/C1 [1 1 1 1] \n");
		PutDoc("/N 1\n");
		PutDoc(">>\n]\nendobj\n");
		spotD.ResName = spotNam+QString::number(spotCount);
		spotD.ResNum = ObjCounter;
		spotMapReg.insert("Register", spotD);
		spotCount++;
		ObjCounter++;
	}
	if ((Options.Version == 15) && (Options.useLayers))
	{
		struct Layer ll;
		struct OCGInfo ocg;
		ll.isPrintable = false;
		ll.LNr = 0;
		int Lnr = 0;
		QString ocgNam("oc");
		uint docLayersCount=doc.Layers.count();
		for (uint la = 0; la < docLayersCount; ++la)
		{
			QString tmp("");
			Level2Layer(&doc, &ll, Lnr);
			ocg.Name = ocgNam+tmp.setNum(ll.LNr);
			ocg.ObjNum = ObjCounter;
			ocg.visible = ll.isViewable;
			OCGEntries.insert(ll.Name, ocg);
			StartObj(ObjCounter);
			ObjCounter++;
			PutDoc("<<\n");
			PutDoc("/Type /OCG\n");
			PutDoc("/Name ");
			PutDoc(EncStringUTF16("("+ll.Name+")", ObjCounter-1));
			PutDoc("\n");
			PutDoc(">>\nendobj\n");
			Lnr++;
		}
	}
	return true;
}

void PDFLibCore::PDF_TemplatePage(const Page* pag, bool )
{
	QString tmp;
	ActPageP = pag;
	PageItem* ite;
	QList<PageItem*> PItems;
	int Lnr = 0;
	struct Layer ll;
	ll.isPrintable = false;
	ll.LNr = 0;
	Inhalt = "";
	Seite.AObjects.clear();
	for (int la = 0; la < doc.Layers.count(); ++la)
	{
		Level2Layer(&doc, &ll, Lnr);
		PItems = doc.MasterItems;
		if (ll.isPrintable)
		{
			if ((Options.Version == 15) && (Options.useLayers))
				PutPage("/OC /"+OCGEntries[ll.Name].Name+" BDC\n");
			for (int a = 0; a < PItems.count(); ++a)
			{
				Inhalt = "";
				ite =PItems.at(a);
				if (ite->LayerNr != ll.LNr)
					continue;
				double x = pag->xOffset();
				double y = pag->yOffset();
				double w = pag->width();
				double h1 = pag->height();
				double ilw=ite->lineWidth();
				double x2 = ite->BoundingX - ilw / 2.0;
				double y2 = ite->BoundingY - ilw / 2.0;
				double w2 = ite->BoundingW + ilw;
				double h2 = ite->BoundingH + ilw;
				if (!( qMax( x, x2 ) <= qMin( x+w, x2+w2 ) && qMax( y, y2 ) <= qMin( y+h1, y2+h2 )))
					continue;
				if (ite->ChangedMasterItem)
					continue;
				if ((!pag->pageName().isEmpty()) && (ite->OwnPage != static_cast<int>(pag->pageNr())) && (ite->OwnPage != -1))
					continue;
				PutPage("q\n");
				if ((ite->doOverprint) && (!Options.doOverprint) && (!Options.UseRGB))
				{
					StartObj(ObjCounter);
					QString ShName = ResNam+QString::number(ResCount);
					Transpar[ShName] = ObjCounter;
					ResCount++;
					ObjCounter++;
					PutDoc("<< /Type /ExtGState\n");
					PutDoc("/OP true\n");
					PutDoc("/op true\n");
					PutDoc("/OPM 1\n");
					PutDoc(">>\nendobj\n");
					PutPage("/"+ShName+" gs\n");
				}
/* Bookmarks on Master Pages do not make any sense */
//				if ((ite->isBookmark) && (Options.Bookmarks))
//					PDF_Bookmark(ite, pag->height() - (ite->yPos() - pag->yOffset()));
				if (!ite->printEnabled() || ((ite->itemType() == PageItem::TextFrame) && (!pag->pageName().isEmpty())))
				{
					PutPage("Q\n");
					continue;
				}
				if (ite->fillColor() != CommonStrings::None)
					PutPage(putColor(ite->fillColor(), ite->fillShade(), true));
				if (ite->lineColor() != CommonStrings::None)
					PutPage(putColor(ite->lineColor(), ite->lineShade(), false));
				Inhalt += FToStr(fabs(ite->lineWidth()))+" w\n";
				if (ite->DashValues.count() != 0)
				{
					PutPage("[ ");
					QList<double>::iterator it;
					for ( it = ite->DashValues.begin(); it != ite->DashValues.end(); ++it )
					{
						int da = static_cast<int>(*it);
						if (da != 0)
							PutPage(QString::number(da)+" ");
					}
					PutPage("] "+QString::number(static_cast<int>(ite->DashOffset))+" d\n");
				}
				else
				{
					QString Dt = FToStr(qMax(2*fabs(ite->lineWidth()), 1.0));
					QString Da = FToStr(qMax(6*fabs(ite->lineWidth()), 1.0));
					switch (ite->PLineArt)
					{
						case Qt::SolidLine:
							PutPage("[] 0 d\n");
							break;
						case Qt::DashLine:
							PutPage("["+Da+" "+Dt+"] 0 d\n");
							break;
						case Qt::DotLine:
							PutPage("["+Dt+"] 0 d\n");
							break;
						case Qt::DashDotLine:
							PutPage("["+Da+" "+Dt+" "+Dt+" "+Dt+"] 0 d\n");
							break;
						case Qt::DashDotDotLine:
							PutPage("["+Da+" "+Dt+" "+Dt+" "+Dt+" "+Dt+" "+Dt+"] 0 d\n");
							break;
						default:
							PutPage("[] 0 d\n");
							break;
					}
				}
				switch (ite->PLineEnd)
				{
					case Qt::FlatCap:
						PutPage("0 J\n");
						break;
					case Qt::SquareCap:
						PutPage("2 J\n");
						break;
					case Qt::RoundCap:
						PutPage("1 J\n");
						break;
					default:
						PutPage("0 J\n");
						break;
				}
				switch (ite->PLineJoin)
				{
					case Qt::MiterJoin:
						PutPage("0 j\n");
						break;
					case Qt::BevelJoin:
						PutPage("2 j\n");
						break;
					case Qt::RoundJoin:
						PutPage("1 j\n");
						break;
					default:
						PutPage("0 j\n");
						break;
				}
				PutPage("1 0 0 1 "+FToStr(ite->xPos() - pag->xOffset())+" "+FToStr(pag->height() - (ite->yPos()  - pag->yOffset()))+" cm\n");
				if (ite->rotation() != 0)
				{
					double sr = sin(-ite->rotation()* M_PI / 180.0);
					double cr = cos(-ite->rotation()* M_PI / 180.0);
					if ((cr * cr) < 0.000001)
						cr = 0;
					if ((sr * sr) < 0.000001)
						sr = 0;
					PutPage(FToStr(cr)+" "+FToStr(sr)+" "+FToStr(-sr)+" "+FToStr(cr)+" 0 0 cm\n");
				}
				switch (ite->itemType())
				{
					case PageItem::ImageFrame:
						if (((ite->fillTransparency() != 0) || (ite->fillBlendmode() != 0)) && (Options.Version >= 14))
							PutPage(PDF_TransparenzFill(ite));
						if ((ite->fillColor() != CommonStrings::None) || (ite->GrType != 0))
						{
							if (ite->GrType != 0)
								PutPage(PDF_Gradient(ite));
							else
							{
								PutPage(SetClipPath(ite));
								PutPage("h\nf*\n");
							}
						}
						PutPage("q\n");
						if (ite->imageClip.size() != 0)
						{
							PutPage(SetClipPathImage(ite));
							PutPage("h\nW*\nn\n");
						}
						PutPage(SetClipPath(ite));
						PutPage("h\nW*\nn\n");
						if (ite->imageFlippedH())
							PutPage("-1 0 0 1 "+FToStr(ite->width())+" 0 cm\n");
						if (ite->imageFlippedV())
							PutPage("1 0 0 -1 0 "+FToStr(-ite->height())+" cm\n");
						if ((ite->PicAvail) && (!ite->Pfile.isEmpty()))
							PutPage(PDF_Image(ite, ite->Pfile, ite->imageXScale(), ite->imageYScale(), ite->imageXOffset(), -ite->imageYOffset(), false, ite->IProfile, ite->UseEmbedded, ite->IRender));
						PutPage("Q\n");
						if (((ite->lineColor() != CommonStrings::None) || (!ite->NamedLStyle.isEmpty())) && (!ite->isTableItem))
						{
							if (((ite->lineTransparency() != 0) || (ite->lineBlendmode() != 0)) && (Options.Version >= 14))
								PutPage(PDF_TransparenzStroke(ite));
							if ((ite->NamedLStyle.isEmpty()) && (ite->lineWidth() != 0.0))
							{
								PutPage(SetClipPath(ite));
								PutPage("h\nS\n");
							}
							else
							{
								multiLine ml = doc.MLineStyles[ite->NamedLStyle];
								for (int it = ml.size()-1; it > -1; it--)
								{
									if ((ml[it].Color != CommonStrings::None) && (ml[it].Width != 0))
									{
										PutPage(setStrokeMulti(&ml[it]));
										PutPage(SetClipPath(ite));
										PutPage("h\nS\n");
									}
								}
							}
						}
						break;
					case PageItem::TextFrame:
						break;
					case PageItem::Line:
						if (((ite->lineTransparency() != 0) || (ite->lineBlendmode() != 0)) && (Options.Version >= 14))
							PutPage(PDF_TransparenzStroke(ite));
						if (ite->NamedLStyle.isEmpty())
						{
							PutPage("0 0 m\n");
							PutPage(FToStr(ite->width())+" 0 l\n");
							PutPage("S\n");
						}
						else
						{
							multiLine ml = doc.MLineStyles[ite->NamedLStyle];
							for (int it = ml.size()-1; it > -1; it--)
							{
									if ((ml[it].Color != CommonStrings::None) && (ml[it].Width != 0))
									{
										PutPage(setStrokeMulti(&ml[it]));
										PutPage("0 0 m\n");
										PutPage(FToStr(ite->width())+" 0 l\n");
										PutPage("S\n");
									}
							}
						}
						if (ite->startArrowIndex() != 0)
						{
							QMatrix arrowTrans;
							FPointArray arrow = doc.arrowStyles.at(ite->startArrowIndex()-1).points.copy();
							arrowTrans.translate(0, 0);
							arrowTrans.scale(ite->lineWidth(), ite->lineWidth());
							arrowTrans.scale(-1,1);
							arrow.map(arrowTrans);
							if ((ite->lineTransparency() != 0) && (Options.Version >= 14))
							{
								StartObj(ObjCounter);
								QString ShName = ResNam+QString::number(ResCount);
								Transpar[ShName] = ObjCounter;
								ResCount++;
								ObjCounter++;
								PutDoc("<< /Type /ExtGState\n");
								PutDoc("/CA "+FToStr(1.0 - ite->lineTransparency())+"\n");
								PutDoc("/ca "+FToStr(1.0 - ite->lineTransparency())+"\n");
								PutDoc("/SMask /None\n/AIS false\n/OPM 1\n");
								PutDoc("/BM /Normal\n>>\nendobj\n");
								PutPage("/"+ShName+" gs\n");
							}
							PutPage(putColor(ite->lineColor(), ite->lineShade(), true));
							PutPage(SetClipPathArray(&arrow));
							PutPage("h\nf*\n");
						}
						if (ite->endArrowIndex() != 0)
						{
							QMatrix arrowTrans;
							FPointArray arrow = doc.arrowStyles.at(ite->endArrowIndex()-1).points.copy();
							arrowTrans.translate(ite->width(), 0);
							arrowTrans.scale(ite->lineWidth(), ite->lineWidth());
							arrow.map(arrowTrans);
							if ((ite->lineTransparency() != 0) && (Options.Version >= 14))
							{
								StartObj(ObjCounter);
								QString ShName = ResNam+QString::number(ResCount);
								Transpar[ShName] = ObjCounter;
								ResCount++;
								ObjCounter++;
								PutDoc("<< /Type /ExtGState\n");
								PutDoc("/CA "+FToStr(1.0 - ite->lineTransparency())+"\n");
								PutDoc("/ca "+FToStr(1.0 - ite->lineTransparency())+"\n");
								PutDoc("/SMask /None\n/AIS false\n/OPM 1\n");
								PutDoc("/BM /Normal\n>>\nendobj\n");
								PutPage("/"+ShName+" gs\n");
							}
							PutPage(putColor(ite->lineColor(), ite->lineShade(), true));
							PutPage(SetClipPathArray(&arrow));
							PutPage("h\nf*\n");
						}
						break;
					case PageItem::ItemType1:
					case PageItem::ItemType3:
					case PageItem::Polygon:
						if (((ite->fillTransparency() != 0) || (ite->fillBlendmode() != 0)) && (Options.Version >= 14))
							PutPage(PDF_TransparenzFill(ite));
						if (ite->GrType != 0)
							PutPage(PDF_Gradient(ite));
						else
						{
							if (ite->fillColor() != CommonStrings::None)
							{
								PutPage(SetClipPath(ite));
								PutPage("h\nf*\n");
							}
						}
						if ((ite->lineColor() != CommonStrings::None) || (!ite->NamedLStyle.isEmpty()))
						{
							if (((ite->lineTransparency() != 0) || (ite->lineBlendmode() != 0)) && (Options.Version >= 14))
								PutPage(PDF_TransparenzStroke(ite));
							if ((ite->NamedLStyle.isEmpty()) && (ite->lineWidth() != 0.0))
							{
								PutPage(SetClipPath(ite));
								PutPage("h\nS\n");
							}
							else
							{
								multiLine ml = doc.MLineStyles[ite->NamedLStyle];
								for (int it = ml.size()-1; it > -1; it--)
								{
									if ((ml[it].Color != CommonStrings::None) && (ml[it].Width != 0))
									{
										PutPage(setStrokeMulti(&ml[it]));
										PutPage(SetClipPath(ite));
										PutPage("h\nS\n");
									}
								}
							}
						}
						break;
					case PageItem::PolyLine:
						if (ite->PoLine.size() > 4) // && ((ite->PoLine.point(0) != ite->PoLine.point(1)) || (ite->PoLine.point(2) != ite->PoLine.point(3))))
						{
							if (((ite->fillTransparency() != 0) || (ite->fillBlendmode() != 0)) && (Options.Version >= 14))
								PutPage(PDF_TransparenzFill(ite));
							if (ite->GrType != 0)
								PutPage(PDF_Gradient(ite));
							else
							{
								if (ite->fillColor() != CommonStrings::None)
								{
									PutPage(SetClipPath(ite));
									PutPage("h\nf*\n");
								}
							}
						}
						if ((ite->lineColor() != CommonStrings::None) || (!ite->NamedLStyle.isEmpty()))
						{
							if (((ite->lineTransparency() != 0) || (ite->lineBlendmode() != 0)) && (Options.Version >= 14))
								PutPage(PDF_TransparenzStroke(ite));
							if ((ite->NamedLStyle.isEmpty()) && (ite->lineWidth() != 0.0))
							{
								PutPage(SetClipPath(ite, false));
								PutPage("S\n");
							}
							else
							{
								multiLine ml = doc.MLineStyles[ite->NamedLStyle];
								for (int it = ml.size()-1; it > -1; it--)
								{
									if ((ml[it].Color != CommonStrings::None) && (ml[it].Width != 0))
									{
										PutPage(setStrokeMulti(&ml[it]));
										PutPage(SetClipPath(ite, false));
										PutPage("S\n");
									}
								}
							}
						}
						if (ite->startArrowIndex() != 0)
						{
							FPoint Start = ite->PoLine.point(0);
							for (uint xx = 1; xx < ite->PoLine.size(); xx += 2)
							{
								FPoint Vector = ite->PoLine.point(xx);
								if ((Start.x() != Vector.x()) || (Start.y() != Vector.y()))
								{
									double r = atan2(Start.y()-Vector.y(),Start.x()-Vector.x())*(180.0/M_PI);
									QMatrix arrowTrans;
									FPointArray arrow = doc.arrowStyles.at(ite->startArrowIndex()-1).points.copy();
									arrowTrans.translate(Start.x(), Start.y());
									arrowTrans.rotate(r);
									arrowTrans.scale(ite->lineWidth(), ite->lineWidth());
									arrow.map(arrowTrans);
									if ((ite->lineTransparency() != 0) && (Options.Version >= 14))
									{
										StartObj(ObjCounter);
										QString ShName = ResNam+QString::number(ResCount);
										Transpar[ShName] = ObjCounter;
										ResCount++;
										ObjCounter++;
										PutDoc("<< /Type /ExtGState\n");
										PutDoc("/CA "+FToStr(1.0 - ite->lineTransparency())+"\n");
										PutDoc("/ca "+FToStr(1.0 - ite->lineTransparency())+"\n");
										PutDoc("/SMask /None\n/AIS false\n/OPM 1\n");
										PutDoc("/BM /Normal\n>>\nendobj\n");
										PutPage("/"+ShName+" gs\n");
									}
									PutPage(putColor(ite->lineColor(), ite->lineShade(), true));
									PutPage(SetClipPathArray(&arrow));
									PutPage("h\nf*\n");
									break;
								}
							}
						}
						if (ite->endArrowIndex() != 0)
						{
							FPoint End = ite->PoLine.point(ite->PoLine.size()-2);
							for (uint xx = ite->PoLine.size()-1; xx > 0; xx -= 2)
							{
								FPoint Vector = ite->PoLine.point(xx);
								if ((End.x() != Vector.x()) || (End.y() != Vector.y()))
								{
									double r = atan2(End.y()-Vector.y(),End.x()-Vector.x())*(180.0/M_PI);
									QMatrix arrowTrans;
									FPointArray arrow = doc.arrowStyles.at(ite->endArrowIndex()-1).points.copy();
									arrowTrans.translate(End.x(), End.y());
									arrowTrans.rotate(r);
									arrowTrans.scale(ite->lineWidth(), ite->lineWidth());
									arrow.map(arrowTrans);
									if ((ite->lineTransparency() != 0) && (Options.Version >= 14))
									{
										StartObj(ObjCounter);
										QString ShName = ResNam+QString::number(ResCount);
										Transpar[ShName] = ObjCounter;
										ResCount++;
										ObjCounter++;
										PutDoc("<< /Type /ExtGState\n");
										PutDoc("/CA "+FToStr(1.0 - ite->lineTransparency())+"\n");
										PutDoc("/ca "+FToStr(1.0 - ite->lineTransparency())+"\n");
										PutDoc("/SMask /None\n/AIS false\n/OPM 1\n");
										PutDoc("/BM /Normal\n>>\nendobj\n");
										PutPage("/"+ShName+" gs\n");
									}
									PutPage(putColor(ite->lineColor(), ite->lineShade(), true));
									PutPage(SetClipPathArray(&arrow));
									PutPage("h\nf*\n");
									break;
								}
							}
						}
						break;
					case PageItem::PathText:
						if (ite->PoShow)
						{
							if (ite->PoLine.size() > 3)
							{
								PutPage("q\n");
								if ((ite->lineColor() != CommonStrings::None) || (!ite->NamedLStyle.isEmpty()))
								{
									if (((ite->lineTransparency() != 0) || (ite->lineBlendmode() != 0)) && (Options.Version >= 14))
										PutPage(PDF_TransparenzStroke(ite));
									if ((ite->NamedLStyle.isEmpty()) && (ite->lineWidth() != 0.0))
									{
										PutPage(SetClipPath(ite, false));
										PutPage("S\n");
									}
									else
									{
										multiLine ml = doc.MLineStyles[ite->NamedLStyle];
										for (int it = ml.size()-1; it > -1; it--)
										{
											if ((ml[it].Color != CommonStrings::None) && (ml[it].Width != 0))
											{
												PutPage(setStrokeMulti(&ml[it]));
												PutPage(SetClipPath(ite, false));
												PutPage("S\n");
											}
										}
									}
								}
								PutPage("Q\n");
							}
						}
						if (((ite->fillTransparency() != 0) || (ite->fillBlendmode() != 0)) && (Options.Version >= 14))
							PutPage(PDF_TransparenzFill(ite));
						PutPage(setTextSt(ite, pag->pageNr(), pag));
						break;
					case PageItem::Multiple:
						Q_ASSERT(false);
						break;
					}
				PutPage("Q\n");
				StartObj(ObjCounter);
				ObjCounter++;
				PutDoc("<<\n/Type /XObject\n/Subtype /Form\n/FormType 1\n");
				double bleedRight = 0.0;
				double bleedLeft = 0.0;
				if (doc.pageSets[doc.currentPageLayout].Columns == 1)
				{
					bleedRight = Options.bleeds.Right;
					bleedLeft = Options.bleeds.Left;
				}
				else
				{
					if (doc.locationOfPage(ActPageP->pageNr()) == LeftPage)
					{
						bleedRight = Options.bleeds.Left;
						bleedLeft = Options.bleeds.Right;
					}
					else if (doc.locationOfPage(ActPageP->pageNr()) == RightPage)
					{
						bleedRight = Options.bleeds.Right;
						bleedLeft = Options.bleeds.Left;
					}
					else
					{
						bleedRight = Options.bleeds.Left;
						bleedLeft = Options.bleeds.Left;
					}
				}
				double maxBoxX = ActPageP->width()+bleedRight+bleedLeft;
				double maxBoxY = ActPageP->height()+Options.bleeds.Top+Options.bleeds.Bottom;
				PutDoc("/BBox [ "+FToStr(-bleedLeft)+" "+FToStr(-Options.bleeds.Bottom)+" "+FToStr(maxBoxX)+" "+FToStr(maxBoxY)+" ]\n");
//				PutDoc("/BBox [ 0 0 "+FToStr(ActPageP->width())+" "+FToStr(ActPageP->height())+" ]\n");
				PutDoc("/Resources << /ProcSet [/PDF /Text /ImageB /ImageC /ImageI]\n");
				if (Seite.ImgObjects.count() != 0)
				{
					PutDoc("/XObject <<\n");
					QMap<QString,int>::Iterator it;
					for (it = Seite.ImgObjects.begin(); it != Seite.ImgObjects.end(); ++it)
						PutDoc("/"+it.key()+" "+QString::number(it.data())+" 0 R\n");
					PutDoc(">>\n");
				}
				if (Seite.FObjects.count() != 0)
				{
					PutDoc("/Font << \n");
					QMap<QString,int>::Iterator it2;
					for (it2 = Seite.FObjects.begin(); it2 != Seite.FObjects.end(); ++it2)
						PutDoc("/"+it2.key()+" "+QString::number(it2.data())+" 0 R\n");
					PutDoc(">>\n");
				}
				if (Shadings.count() != 0)
				{
					PutDoc("/Shading << \n");
					QMap<QString,int>::Iterator it3;
					for (it3 = Shadings.begin(); it3 != Shadings.end(); ++it3)
						PutDoc("/"+it3.key()+" "+QString::number(it3.data())+" 0 R\n");
					PutDoc(">>\n");
				}
				if (Patterns.count() != 0)
				{
					PutDoc("/Pattern << \n");
					QMap<QString,int>::Iterator it3p;
					for (it3p = Patterns.begin(); it3p != Patterns.end(); ++it3p)
						PutDoc("/"+it3p.key()+" "+QString::number(it3p.data())+" 0 R\n");
					PutDoc(">>\n");
				}
				if (Transpar.count() != 0)
				{
					PutDoc("/ExtGState << \n");
					QMap<QString,int>::Iterator it3t;
					for (it3t = Transpar.begin(); it3t != Transpar.end(); ++it3t)
						PutDoc("/"+it3t.key()+" "+QString::number(it3t.data())+" 0 R\n");
					PutDoc(">>\n");
				}
				if ((ICCProfiles.count() != 0) || (spotMap.count() != 0))
				{
					PutDoc("/ColorSpace << \n");
					QMap<QString,ICCD>::Iterator it3c;
					if (ICCProfiles.count() != 0)
					{
						for (it3c = ICCProfiles.begin(); it3c != ICCProfiles.end(); ++it3c)
							PutDoc("/"+it3c.data().ResName+" "+QString::number(it3c.data().ResNum)+" 0 R\n");
					}
					QMap<QString,SpotC>::Iterator it3sc;
					if (spotMap.count() != 0)
					{
					for (it3sc = spotMap.begin(); it3sc != spotMap.end(); ++it3sc)
						PutDoc("/"+it3sc.data().ResName+" "+QString::number(it3sc.data().ResNum)+" 0 R\n");
					}
					PutDoc(">>\n");
				}
				PutDoc(">>\n");
				if ((Options.Compress) && (CompAvail))
					Inhalt = CompressStr(&Inhalt);
				PutDoc("/Length "+QString::number(Inhalt.length()+1));
				if ((Options.Compress) && (CompAvail))
					PutDoc("\n/Filter /FlateDecode");
				PutDoc(" >>\nstream\n"+EncStream(Inhalt, ObjCounter-1)+"\nendstream\nendobj\n");
				QString name = pag->pageName().simplifyWhiteSpace().replace( QRegExp("[\\s\\/\\{\\[\\]\\}\\<\\>\\(\\)\\%]"), "_" ) + QString::number(ite->ItemNr);
				Seite.XObjects[name] = ObjCounter-1;
				}
				if ((Options.Version == 15) && (Options.useLayers))
					PutPage("EMC\n");
			}
		Lnr++;
	}
}

void PDFLibCore::PDF_Begin_Page(const Page* pag, QPixmap pm)
{
	QString tmp;
	ActPageP = pag;
	Inhalt = "";
	Seite.AObjects.clear();
	if (Options.Thumbnails)
	{
		ScImage img(pm.convertToImage());
		QByteArray array = img.ImageToArray();
		if ((Options.Compress) && (CompAvail))
			array = CompressArray(&array);
		StartObj(ObjCounter);
		PutDoc("<<\n/Width "+QString::number(img.width())+"\n");
		PutDoc("/Height "+QString::number(img.height())+"\n");
		PutDoc("/ColorSpace /DeviceRGB\n/BitsPerComponent 8\n");
		
		PutDoc("/Length "+QString::number(array.size()+1)+"\n");
		if ((Options.Compress) && (CompAvail))
			PutDoc("/Filter /FlateDecode\n");
		PutDoc(">>\nstream\n");
		PutDoc(EncStreamArray(array, ObjCounter));
		PutDoc("\nendstream\nendobj\n");
		Seite.Thumb = ObjCounter;
		ObjCounter++;
	}
}

void PDFLibCore::PDF_End_Page()
{
	uint PgNr =  ActPageP->pageNr();
	double markOffs = 0.0;
	if ((Options.cropMarks) || (Options.bleedMarks) || (Options.registrationMarks) || (Options.colorMarks) || (Options.docInfoMarks))
		markOffs = 20.0 + Options.markOffset;
	double bleedRight;
	double bleedLeft;
	if (doc.pageSets[doc.currentPageLayout].Columns == 1)
	{
		bleedRight = Options.bleeds.Right;
		bleedLeft = Options.bleeds.Left;
	}
	else
	{
		if (doc.locationOfPage(ActPageP->pageNr()) == LeftPage)
		{
			bleedRight = Options.bleeds.Left;
			bleedLeft = Options.bleeds.Right;
		}
		else if (doc.locationOfPage(ActPageP->pageNr()) == RightPage)
		{
			bleedRight = Options.bleeds.Right;
			bleedLeft = Options.bleeds.Left;
		}
		else
		{
			bleedRight = Options.bleeds.Left;
			bleedLeft = Options.bleeds.Left;
		}
	}
	double maxBoxX = ActPageP->width()+bleedLeft+bleedRight+markOffs*2.0;
	double maxBoxY = ActPageP->height()+Options.bleeds.Bottom+Options.bleeds.Top+markOffs*2.0;
	PutPage("Q\n");
	if ((Options.cropMarks) || (Options.bleedMarks) || (Options.registrationMarks) || (Options.colorMarks) || (Options.docInfoMarks))
	{
		PutPage("0.5 w 0 j 0 J [] 0 d\n");
		PutPage("/"+spotMapReg["Register"].ResName+" CS 1 SCN\n");
		if (Options.cropMarks)
		{
		// Bottom Left
			PutPage("0 "+FToStr(markOffs+Options.bleeds.Bottom)+" m\n");
			PutPage(FToStr(20.0)+" "+FToStr(markOffs+Options.bleeds.Bottom)+" l\n");
			PutPage("S\n");
			PutPage(FToStr(markOffs+bleedLeft)+" 0 m\n");
			PutPage(FToStr(markOffs+bleedLeft)+" 20 l\n");
			PutPage("S\n");
		// Top Left
			PutPage("0 "+FToStr(maxBoxY-Options.bleeds.Top-markOffs)+" m\n");
			PutPage(FToStr(20.0)+" "+FToStr(maxBoxY-Options.bleeds.Top-markOffs)+" l\n");
			PutPage("S\n");
			PutPage(FToStr(markOffs+bleedLeft)+" "+FToStr(maxBoxY)+" m\n");
			PutPage(FToStr(markOffs+bleedLeft)+" "+FToStr(maxBoxY-20.0)+" l\n");
			PutPage("S\n");
		// Bottom Right
			PutPage(FToStr(maxBoxX)+" "+FToStr(markOffs+Options.bleeds.Bottom)+" m\n");
			PutPage(FToStr(maxBoxX-20.0)+" "+FToStr(markOffs+Options.bleeds.Bottom)+" l\n");
			PutPage("S\n");
			PutPage(FToStr(maxBoxX-bleedRight-markOffs)+" "+FToStr(0.0)+" m\n");
			PutPage(FToStr(maxBoxX-bleedRight-markOffs)+" "+FToStr(20.0)+" l\n");
			PutPage("S\n");
		// Top Right
			PutPage(FToStr(maxBoxX)+" "+FToStr(maxBoxY-Options.bleeds.Top-markOffs)+" m\n");
			PutPage(FToStr(maxBoxX-20.0)+" "+FToStr(maxBoxY-Options.bleeds.Top-markOffs)+" l\n");
			PutPage("S\n");
			PutPage(FToStr(maxBoxX-bleedRight-markOffs)+" "+FToStr(maxBoxY)+" m\n");
			PutPage(FToStr(maxBoxX-bleedRight-markOffs)+" "+FToStr(maxBoxY-20.0)+" l\n");
			PutPage("S\n");
		}
		if (Options.bleedMarks)
		{
			PutPage("q\n");
			PutPage("[3 1 1 1] 0 d\n");
		// Bottom Left
			PutPage("0 "+FToStr(markOffs)+" m\n");
			PutPage(FToStr(20.0)+" "+FToStr(markOffs)+" l\n");
			PutPage("S\n");
			PutPage(FToStr(markOffs)+" 0 m\n");
			PutPage(FToStr(markOffs)+" 20 l\n");
			PutPage("S\n");
		// Top Left
			PutPage("0 "+FToStr(maxBoxY-markOffs)+" m\n");
			PutPage(FToStr(20.0)+" "+FToStr(maxBoxY-markOffs)+" l\n");
			PutPage("S\n");
			PutPage(FToStr(markOffs)+" "+FToStr(maxBoxY)+" m\n");
			PutPage(FToStr(markOffs)+" "+FToStr(maxBoxY-20.0)+" l\n");
			PutPage("S\n");
		// Bottom Right
			PutPage(FToStr(maxBoxX)+" "+FToStr(markOffs)+" m\n");
			PutPage(FToStr(maxBoxX-20.0)+" "+FToStr(markOffs)+" l\n");
			PutPage("S\n");
			PutPage(FToStr(maxBoxX-markOffs)+" "+FToStr(0.0)+" m\n");
			PutPage(FToStr(maxBoxX-markOffs)+" "+FToStr(20.0)+" l\n");
			PutPage("S\n");
		// Top Right
			PutPage(FToStr(maxBoxX)+" "+FToStr(maxBoxY-markOffs)+" m\n");
			PutPage(FToStr(maxBoxX-20.0)+" "+FToStr(maxBoxY-markOffs)+" l\n");
			PutPage("S\n");
			PutPage(FToStr(maxBoxX-markOffs)+" "+FToStr(maxBoxY)+" m\n");
			PutPage(FToStr(maxBoxX-markOffs)+" "+FToStr(maxBoxY-20.0)+" l\n");
			PutPage("S\n");
			PutPage("Q\n");
		}
		if (Options.registrationMarks)
		{
			QString regCross = "0 7 m\n14 7 l\nh\n7 0 m\n7 14 l\nh\n13 7 m\n13 10.31383 10.31383 13 7 13 c\n3.68629 13 1 10.31383 1 7 c\n1 3.68629 3.68629 1 7 1 c\n";
			regCross += "10.31383 1 13 3.68629 13 7 c\nh\n10.5 7 m\n10.5 8.93307 8.93307 10.5 7 10.5 c\n5.067 10.5 3.5 8.93307 3.5 7 c\n";
			regCross += "3.5 5.067 5.067 3.5 7 3.5 c\n8.93307 3.5 10.5 5.067 10.5 7 c\nh\nS\n";
			PutPage("q\n");
			PutPage("1 0 0 1 "+FToStr(maxBoxX / 2.0 - 7.0)+" 3 cm\n");
			PutPage(regCross);
			PutPage("Q\n");
			PutPage("q\n");
			PutPage("1 0 0 1 3 "+FToStr(maxBoxY / 2.0 + 7.0)+" cm\n");
			PutPage(regCross);
			PutPage("Q\n");
			PutPage("q\n");
			PutPage("1 0 0 1 "+FToStr(maxBoxX / 2.0 - 7.0)+" "+FToStr(maxBoxY - 17.0)+" cm\n");
			PutPage(regCross);
			PutPage("Q\n");
			PutPage("q\n");
			PutPage("1 0 0 1 "+FToStr(maxBoxX - 17.0)+" "+FToStr(maxBoxY / 2.0 + 7.0)+" cm\n");
			PutPage(regCross);
			PutPage("Q\n");
		}
		if (Options.colorMarks)
		{
			double startX = markOffs+bleedLeft+6.0;
			double startY = maxBoxY - 18.0;
			PutPage("0 0 0 1 K\n");
			double col = 1.0;
			for (int bl = 0; bl < 11; bl++)
			{
				PutPage("0 0 0 "+FToStr(col)+" k\n");
				PutPage(FToStr(startX+bl*14.0)+" "+FToStr(startY)+" 14 14 re B\n");
				col -= 0.1;
			}
			if (!Options.isGrayscale)
			{
				startX = maxBoxX-bleedRight-markOffs-20.0;
				PutPage("0 0 0 0.5 k\n");
				PutPage(FToStr(startX)+" "+FToStr(startY)+" 14 14 re B\n");
				startX -= 14.0;
				PutPage("0 0 0.5 0 k\n");
				PutPage(FToStr(startX)+" "+FToStr(startY)+" 14 14 re B\n");
				startX -= 14.0;
				PutPage("0 0.5 0 0 k\n");
				PutPage(FToStr(startX)+" "+FToStr(startY)+" 14 14 re B\n");
				startX -= 14.0;
				PutPage("0.5 0 0 0 k\n");
				PutPage(FToStr(startX)+" "+FToStr(startY)+" 14 14 re B\n");
				startX -= 14.0;
				PutPage("1 1 0 0 k\n");
				PutPage(FToStr(startX)+" "+FToStr(startY)+" 14 14 re B\n");
				startX -= 14.0;
				PutPage("1 0 1 0 k\n");
				PutPage(FToStr(startX)+" "+FToStr(startY)+" 14 14 re B\n");
				startX -= 14.0;
				PutPage("0 1 1 0 k\n");
				PutPage(FToStr(startX)+" "+FToStr(startY)+" 14 14 re B\n");
				startX -= 14.0;
				PutPage("0 0 0 1 k\n");
				PutPage(FToStr(startX)+" "+FToStr(startY)+" 14 14 re B\n");
				startX -= 14.0;
				PutPage("0 0 1 0 k\n");
				PutPage(FToStr(startX)+" "+FToStr(startY)+" 14 14 re B\n");
				startX -= 14.0;
				PutPage("0 1 0 0 k\n");
				PutPage(FToStr(startX)+" "+FToStr(startY)+" 14 14 re B\n");
				startX -= 14.0;
				PutPage("1 0 0 0 k\n");
				PutPage(FToStr(startX)+" "+FToStr(startY)+" 14 14 re B\n");
			}
		}
		if (Options.docInfoMarks)
		{
			QString tmp = "";
			double startX = markOffs+bleedLeft+10.0;
			QString docTitle = doc.documentInfo.getTitle();
			if (docTitle.isEmpty())
			{
				QFileInfo fi(doc.DocName);
				docTitle = fi.fileName();
			}
			docTitle += "  "+ tr("Page:")+" "+tmp.setNum(PgNr+1);
			PutPage("/"+spotMapReg["Register"].ResName+" cs 1 scn\n");
			PutPage("q\n");
			PutPage("1 0 0 1 "+FToStr(startX)+" 6 cm\n");
			PutPage("BT\n");
			PutPage("/"+StdFonts["/Helvetica"]+" 7 Tf\n");
			PutPage(EncString("("+docTitle+")",ObjCounter)+" Tj\nET\n");
			PutPage("Q\n");
			PutPage("q\n");
			PutPage("1 0 0 1 "+FToStr(maxBoxX / 2.0 + 20.0)+" 6 cm\n");
			PutPage("BT\n");
			PutPage("/"+StdFonts["/Helvetica"]+" 7 Tf\n");
			QDate d = QDate::currentDate();
			PutPage(EncString("("+ tr("Date:")+" "+d.toString(Qt::TextDate)+")",ObjCounter)+" Tj\nET\n");
			PutPage("Q\n");
		}
	}
	Seite.ObjNum = ObjCounter;
	WritePDFStream(Inhalt);
	int Gobj = 0;
	if (Options.Version >= 14)
	{
		StartObj(ObjCounter);
		Gobj = ObjCounter;
		ObjCounter++;
		PutDoc("<< /S /Transparency\n");
		if (Options.UseRGB)
			PutDoc("/CS /DeviceRGB\n");
		else
		{
			if (Options.isGrayscale)
				PutDoc("/CS /DeviceGray\n");
			else
			{
				if ((doc.HasCMS) && (Options.UseProfiles))
					PutDoc("/CS "+ICCProfiles[Options.SolidProf].ICCArray+"\n");
				else
					PutDoc("/CS /DeviceCMYK\n");
			}
		}
		PutDoc(">>\nendobj\n");
	}
	StartObj(ObjCounter);
	PutDoc("<<\n/Type /Page\n/Parent 4 0 R\n");
	PutDoc("/MediaBox [0 0 "+FToStr(maxBoxX)+" "+FToStr(maxBoxY)+"]\n");
	PutDoc("/BleedBox ["+FToStr(markOffs)+" "+FToStr(markOffs)+" "+FToStr(maxBoxX-markOffs)+" "+FToStr(maxBoxY-markOffs)+"]\n");
	PutDoc("/CropBox [0 0 "+FToStr(maxBoxX)+" "+FToStr(maxBoxY)+"]\n");
	PutDoc("/TrimBox ["+FToStr(bleedLeft+markOffs)+" "+FToStr(Options.bleeds.Bottom+markOffs)+" "+FToStr(maxBoxX-bleedRight-markOffs)+" "+FToStr(maxBoxY-Options.bleeds.Top-markOffs)+"]\n");
	PutDoc("/ArtBox ["+FToStr(bleedLeft+markOffs)+" "+FToStr(Options.bleeds.Bottom+markOffs)+" "+FToStr(maxBoxX-bleedRight-markOffs)+" "+FToStr(maxBoxY-Options.bleeds.Top-markOffs)+"]\n");
	PutDoc("/Rotate "+QString::number(Options.RotateDeg)+"\n");
	PutDoc("/Contents "+QString::number(Seite.ObjNum)+" 0 R\n");
	if (Options.Version >= 14) // && (Transpar.count() != 0))
		PutDoc("/Group "+QString::number(Gobj)+" 0 R\n");
	if (Options.Thumbnails)
		PutDoc("/Thumb "+QString::number(Seite.Thumb)+" 0 R\n");
	if (Seite.AObjects.count() != 0)
	{
		PutDoc("/Annots [ ");
		for (int b = 0; b < Seite.AObjects.count(); ++b)
			PutDoc(QString::number(Seite.AObjects[b])+" 0 R ");
		PutDoc("]\n");
	}
	if (Options.PresentMode)
	{
		if (Options.PresentVals[PgNr].pageViewDuration > 0)
			PutDoc("/Dur "+QString::number(Options.PresentVals[PgNr].pageViewDuration)+"\n");
		if (Options.PresentVals[PgNr].effectType != 0)
		{
			PutDoc("/Trans << /Type /Trans\n");
			PutDoc("/D "+QString::number(Options.PresentVals[PgNr].pageEffectDuration)+"\n");
			switch (Options.PresentVals[PgNr].effectType)
			{
				case 1:
					PutDoc("/S /Blinds\n");
					PutDoc(Options.PresentVals[PgNr].Dm == 0 ? "/Dm /H\n" : "/Dm /V\n");
					break;
				case 2:
					PutDoc("/S /Box\n");
					PutDoc(Options.PresentVals[PgNr].M == 0 ? "/M /I\n" : "/M /O\n");
					break;
				case 3:
					PutDoc("/S /Dissolve\n");
					break;
				case 4:
					PutDoc("/S /Glitter\n");
					PutDoc("/Di ");
					switch (Options.PresentVals[PgNr].Di)
					{
						case 0:
							PutDoc("0");
							break;
						case 1:
							PutDoc("270");
							break;
						case 4:
							PutDoc("315");
							break;
						default:
							PutDoc("0");
							break;
					}
					PutDoc("\n");
					break;
				case 5:
					PutDoc("/S /Split\n");
					PutDoc(Options.PresentVals[PgNr].Dm == 0 ? "/Dm /H\n" : "/Dm /V\n");
					PutDoc(Options.PresentVals[PgNr].M == 0 ? "/M /I\n" : "/M /O\n");
					break;
				case 6:
					PutDoc("/S /Wipe\n");
					PutDoc("/Di ");
					switch (Options.PresentVals[PgNr].Di)
					{
						case 0:
							PutDoc("0");
							break;
						case 1:
							PutDoc("270");
							break;
						case 2:
							PutDoc("90");
							break;
						case 3:
							PutDoc("180");
							break;
						default:
							PutDoc("0");
							break;
					}
					PutDoc("\n");
					break;
			}
			PutDoc(">>\n");
		}
	}
	PutDoc(">>\nendobj\n");
	PageTree.Count++;
	PageTree.Kids.append(ObjCounter);
	ObjCounter++;
}

void PDFLibCore::PDF_ProcessPage(const Page* pag, uint PNr, bool clip)
{
	QStack<PageItem*> groupStack;
	QStack<PageItem*> groupStackS;
	QStack<QString>      groupDataStack;
	QString tmp;
	ActPageP = pag;
	PageItem* ite;
	QList<PageItem*> PItems;
	int Lnr = 0;
	struct Layer ll;
	ll.isPrintable = false;
	ll.LNr = 0;
	if (Options.UseLPI)
		PutPage("/"+HTName+" gs\n");
	double bleedRight = 0.0;
	double bleedLeft = 0.0;
	double markOffs = 0.0;
	bleedDisplacementX = 0.0;
	bleedDisplacementY = 0.0;
	if ((Options.cropMarks) || (Options.bleedMarks) || (Options.registrationMarks) || (Options.colorMarks) || (Options.docInfoMarks))
		markOffs = 20.0 + Options.markOffset;
	if (!pag->MPageNam.isEmpty())
	{
		if (doc.pageSets[doc.currentPageLayout].Columns == 1)
		{
			bleedRight = Options.bleeds.Right;
			bleedLeft = Options.bleeds.Left;
		}
		else
		{
			if (doc.locationOfPage(ActPageP->pageNr()) == LeftPage)
			{
				bleedRight = Options.bleeds.Left;
				bleedLeft = Options.bleeds.Right;
			}
			else if (doc.locationOfPage(ActPageP->pageNr()) == RightPage)
			{
				bleedRight = Options.bleeds.Right;
				bleedLeft = Options.bleeds.Left;
			}
			else
			{
				bleedRight = Options.bleeds.Left;
				bleedLeft = Options.bleeds.Left;
			}
		}
		PutPage("q 1 0 0 1 "+FToStr(bleedLeft+markOffs)+" "+FToStr(Options.bleeds.Bottom+markOffs)+" cm\n");
		bleedDisplacementX = bleedLeft+markOffs;
		bleedDisplacementY = Options.bleeds.Bottom+markOffs;
	}
	if ( (Options.MirrorH) && (!pag->MPageNam.isEmpty()) )
		PutPage("-1 0 0 1 "+FToStr(ActPageP->width())+" 0 cm\n");
	if ( (Options.MirrorV) && (!pag->MPageNam.isEmpty()) )
		PutPage("1 0 0 -1 0 "+FToStr(ActPageP->height())+" cm\n");
	if (clip)
	{
		PutPage(FToStr(pag->Margins.Left) + " " + FToStr(pag->Margins.Bottom) + " m\n");
		PutPage(FToStr(ActPageP->width() - pag->Margins.Right) + " " + FToStr(pag->Margins.Bottom) + " l\n");
		PutPage(FToStr(ActPageP->width() - pag->Margins.Right) + " " + FToStr(ActPageP->height() - pag->Margins.Top) + " l\n");
		PutPage(FToStr(pag->Margins.Left) + " " + FToStr(ActPageP->height() - pag->Margins.Top) + " l h W n\n");
	}
	else
	{
		double maxBoxX = ActPageP->width()+bleedRight+bleedLeft;
		double maxBoxY = ActPageP->height()+Options.bleeds.Top+Options.bleeds.Bottom;
		PutPage(FToStr(-bleedLeft)+" "+FToStr(-Options.bleeds.Bottom)+" "+FToStr(maxBoxX)+" "+FToStr(maxBoxY)+" re W n\n");
	}
	if (!pag->MPageNam.isEmpty())
	{
		Page* mPage = doc.MasterPages.at(doc.MasterNames[doc.Pages->at(PNr)->MPageNam]);
		if (doc.MasterItems.count() != 0)
		{
			if (!Options.MirrorH)
				PutPage("1 0 0 1 0 0 cm\n");
			for (int lam = 0; lam < doc.Layers.count(); ++lam)
			{
				Level2Layer(&doc, &ll, Lnr);
				Lnr++;
				if (ll.isPrintable)
				{
					if ((Options.Version == 15) && (Options.useLayers))
						PutPage("/OC /"+OCGEntries[ll.Name].Name+" BDC\n");
					for (int am = 0; am < pag->FromMaster.count(); ++am)
					{
						ite = pag->FromMaster.at(am);
						if ((ite->LayerNr != ll.LNr) || (!ite->printEnabled()))
							continue;
						if ((!pag->pageName().isEmpty()) && (ite->OwnPage != static_cast<int>(pag->pageNr())) && (ite->OwnPage != -1))
							continue;
						QString name = "/"+pag->MPageNam.simplifyWhiteSpace().replace( QRegExp("[\\s\\/\\{\\[\\]\\}\\<\\>\\(\\)\\%]"), "_" ) + QString::number(ite->ItemNr);
						if (ite->isGroupControl)
						{
							PutPage("q\n");
							FPointArray cl = ite->PoLine.copy();
							FPointArray clb = ite->PoLine.copy();
							QMatrix mm;
							mm.translate(ite->xPos() - mPage->xOffset(), (ite->yPos() - mPage->yOffset()) - mPage->height());
							mm.rotate(ite->rotation());
							cl.map( mm );
							ite->PoLine = cl;
							PutPage(SetClipPath(ite));
							PutPage("h W* n\n");
							groupStack.push(ite->groupsLastItem);
							ite->PoLine = clb.copy();
							continue;
						}
						if (! ite->asTextFrame())
							PutPage(name+" Do\n");
						else
						{
							double oldX = ite->xPos();
							double oldY = ite->yPos();
							double OldBX = ite->BoundingX;
							double OldBY = ite->BoundingY;
							ite->setXPos(ite->xPos() - mPage->xOffset() + pag->xOffset(), true);
							ite->setYPos(ite->yPos() - mPage->yOffset() + pag->yOffset(), true);
							PutPage(PDF_ProcessItem(ite, pag, pag->pageNr()));
							ite->setXYPos(oldX, oldY, true);
							ite->BoundingX = OldBX;
							ite->BoundingY = OldBY;
						}
						if (groupStack.count() != 0)
						{
							while (ite == groupStack.top())
							{
								PutPage("Q\n");
								groupStack.pop();
								if (groupStack.count() == 0)
									break;
							}
						}
					}
					for (int am = 0; am < pag->FromMaster.count(); ++am)
					{
						ite = pag->FromMaster.at(am);
						if ((ite->LayerNr != ll.LNr) || (!ite->printEnabled()))
							continue;
						if (ite->ChangedMasterItem)
							continue;
						if ((!pag->pageName().isEmpty()) && (ite->OwnPage != static_cast<int>(pag->pageNr())) && (ite->OwnPage != -1))
							continue;
						if (!ite->isTableItem)
							continue;
						double oldX = ite->xPos();
						double oldY = ite->yPos();
						double OldBX = ite->BoundingX;
						double OldBY = ite->BoundingY;
						ite->setXPos(ite->xPos() - mPage->xOffset() + pag->xOffset(), true);
						ite->setYPos(ite->yPos() - mPage->yOffset() + pag->yOffset(), true);
						PutPage(PDF_ProcessTableItem(ite, pag));
						ite->setXYPos(oldX, oldY, true);
						ite->BoundingX = OldBX;
						ite->BoundingY = OldBY;
					}
					if ((Options.Version == 15) && (Options.useLayers))
						PutPage("EMC\n");
				}
			}
		}
	}
	ll.isPrintable = false;
	ll.LNr = 0;
	Lnr = 0;
	//CB *2 because the Pitems count loop runs twice.. y.. dunno.
	if (usingGUI && pag->pageName().isEmpty())
		progressDialog->setProgress("ECPI", 0, doc.DocItems.count()*2);
	int pc_exportpagesitems=0;
	for (int la = 0; la < doc.Layers.count() && !abortExport; ++la)
	{
		Level2Layer(&doc, &ll, Lnr);
		if (!pag->pageName().isEmpty())
			PItems = doc.MasterItems;
		else
			PItems = doc.DocItems;
		if (ll.isPrintable)
		{
			QString inh = "";
			if ((Options.Version == 15) && (Options.useLayers))
				PutPage("/OC /"+OCGEntries[ll.Name].Name+" BDC\n");
			for (int a = 0; a < PItems.count() && !abortExport; ++a)
			{
				if (usingGUI)
				{
					progressDialog->setProgress("ECPI", ++pc_exportpagesitems);
					qApp->processEvents();
				}
				ite = PItems.at(a);
				if (ite->LayerNr != ll.LNr)
					continue;
				QString grcon = "";
				if (ite->isGroupControl)
				{
					grcon += "q\n";
					FPointArray cl = ite->PoLine.copy();
					FPointArray clb = ite->PoLine.copy();
					QMatrix mm;
					mm.translate(ite->xPos() - pag->xOffset(), (ite->yPos() - pag->yOffset()) - pag->height());
					mm.rotate(ite->rotation());
					cl.map( mm );
					ite->PoLine = cl;
					grcon += SetClipPath(ite);
					grcon += "h W* n\n";
					groupStack.push(ite->groupsLastItem);
					groupStackS.push(ite);
					if (((ll.transparency != 1) || (ll.blendMode != 0)) && (Options.Version >= 14))
					{
						inh += grcon;
						groupDataStack.push(inh);
						inh = "";
					}
					else
					{
						PutPage(grcon);
						groupDataStack.push(Inhalt);
						Inhalt = "";
					}
					ite->PoLine = clb.copy();
					continue;
				}
				if (((ll.transparency != 1) || (ll.blendMode != 0)) && (Options.Version >= 14))
					inh += PDF_ProcessItem(ite, pag, PNr);
				else
					PutPage(PDF_ProcessItem(ite, pag, PNr));
				if (groupStack.count() != 0)
				{
					while (ite == groupStack.top())
					{
						QString tmpData;
						PageItem *controlItem = groupStackS.pop();
						if (((ll.transparency != 1) || (ll.blendMode != 0)) && (Options.Version >= 14))
						{
							tmpData = inh;
							inh = groupDataStack.pop();
							if (Options.Version >= 14)
								inh += Write_TransparencyGroup(controlItem->fillTransparency(), controlItem->fillBlendmode(), tmpData);
							else
								inh += tmpData;
							inh += "Q\n";
						}
						else
						{
							tmpData = Inhalt;
							Inhalt = groupDataStack.pop();
							if (Options.Version >= 14)
								Inhalt += Write_TransparencyGroup(controlItem->fillTransparency(), controlItem->fillBlendmode(), tmpData);
							else
								Inhalt += tmpData;
							PutPage("Q\n");
						}
						groupStack.pop();
						if (groupStack.count() == 0)
							break;
					}
				}
			}
			for (int a = 0; a < PItems.count() && !abortExport; ++a)
			{
				if (usingGUI)
				{
					progressDialog->setProgress("ECPI", ++pc_exportpagesitems);
					qApp->processEvents();
				}
				ite = PItems.at(a);
				if (ite->LayerNr != ll.LNr)
					continue;
				if (!ite->isTableItem)
					continue;
				double x = pag->xOffset();
				double y = pag->yOffset();
				double w = pag->width();
				double h1 = pag->height();
				double ilw=ite->lineWidth();
				double x2 = ite->BoundingX - ilw / 2.0;
				double y2 = ite->BoundingY - ilw / 2.0;
				double w2 = ite->BoundingW + ilw;
				double h2 = ite->BoundingH + ilw;
				if (!( qMax( x, x2 ) <= qMin( x+w, x2+w2 ) && qMax( y, y2 ) <= qMin( y+h1, y2+h2 )))
					continue;
				if (ite->ChangedMasterItem)
					continue;
				if ((!pag->pageName().isEmpty()) && (ite->OwnPage != static_cast<int>(pag->pageNr())) && (ite->OwnPage != -1))
					continue;
				if (!ite->printEnabled())
					continue;
				if (((ll.transparency != 1) || (ll.blendMode != 0)) && (Options.Version >= 14))
					inh += PDF_ProcessTableItem(ite, pag);
				else
					PutPage(PDF_ProcessTableItem(ite, pag));
			}
			if (((ll.transparency != 1) || (ll.blendMode != 0)) && (Options.Version >= 14))
			{
				StartObj(ObjCounter);
				int Gobj = ObjCounter;
				ObjCounter++;
				PutDoc("<< /Type /Group\n");
				PutDoc("/S /Transparency\n");
				PutDoc("/I false\n");
				PutDoc("/K false\n");
				PutDoc(">>\nendobj\n");
				StartObj(ObjCounter);
				QString ShName = ResNam+QString::number(ResCount);
				Transpar[ShName] = ObjCounter;
				ResCount++;
				ObjCounter++;
				PutDoc("<< /Type /ExtGState\n");
				PutDoc("/CA "+FToStr(ll.transparency)+"\n");
				PutDoc("/ca "+FToStr(ll.transparency)+"\n");
				PutDoc("/SMask /None\n/AIS false\n/OPM 1\n");
				PutDoc("/BM /");
				switch (ll.blendMode)
				{
					case 0:
						PutDoc("Normal");
						break;
					case 1:
						PutDoc("Darken");
						break;
					case 2:
						PutDoc("Lighten");
						break;
					case 3:
						PutDoc("Multiply");
						break;
					case 4:
						PutDoc("Screen");
						break;
					case 5:
						PutDoc("Overlay");
						break;
					case 6:
						PutDoc("HardLight");
						break;
					case 7:
						PutDoc("SoftLight");
						break;
					case 8:
						PutDoc("Difference");
						break;
					case 9:
						PutDoc("Exclusion");
						break;
					case 10:
						PutDoc("ColorDodge");
						break;
					case 11:
						PutDoc("ColorBurn");
						break;
					case 12:
						PutDoc("Hue");
						break;
					case 13:
						PutDoc("Saturation");
						break;
					case 14:
						PutDoc("Color");
						break;
					case 15:
						PutDoc("Luminosity");
						break;
				}
				PutDoc("\n>>\nendobj\n");
				StartObj(ObjCounter);
				ObjCounter++;
				PutDoc("<<\n/Type /XObject\n/Subtype /Form\n/FormType 1\n");
				PutDoc("/BBox [ 0 0 "+FToStr(ActPageP->width())+" "+FToStr(ActPageP->height())+" ]\n");
				PutDoc("/Group "+QString::number(Gobj)+" 0 R\n");
/*				PutDoc("/Resources << /ProcSet [/PDF /Text /ImageB /ImageC /ImageI]\n");
				if (Seite.ImgObjects.count() != 0)
				{
					PutDoc("/XObject <<\n");
					QMap<QString,int>::Iterator it;
					for (it = Seite.ImgObjects.begin(); it != Seite.ImgObjects.end(); ++it)
						PutDoc("/"+it.key()+" "+QString::number(it.data())+" 0 R\n");
					PutDoc(">>\n");
				}
				if (Seite.FObjects.count() != 0)
				{
					PutDoc("/Font << \n");
					QMap<QString,int>::Iterator it2;
					for (it2 = Seite.FObjects.begin(); it2 != Seite.FObjects.end(); ++it2)
						PutDoc("/"+it2.key()+" "+QString::number(it2.data())+" 0 R\n");
					PutDoc(">>\n");
				}
				if (Shadings.count() != 0)
				{
					PutDoc("/Shading << \n");
					QMap<QString,int>::Iterator it3;
					for (it3 = Shadings.begin(); it3 != Shadings.end(); ++it3)
						PutDoc("/"+it3.key()+" "+QString::number(it3.data())+" 0 R\n");
					PutDoc(">>\n");
				}
				if (Patterns.count() != 0)
				{
					PutDoc("/Pattern << \n");
					QMap<QString,int>::Iterator it3p;
					for (it3p = Patterns.begin(); it3p != Patterns.end(); ++it3p)
						PutDoc("/"+it3p.key()+" "+QString::number(it3p.data())+" 0 R\n");
					PutDoc(">>\n");
				}
				if (Transpar.count() != 0)
				{
					PutDoc("/ExtGState << \n");
					QMap<QString,int>::Iterator it3t;
					for (it3t = Transpar.begin(); it3t != Transpar.end(); ++it3t)
						PutDoc("/"+it3t.key()+" "+QString::number(it3t.data())+" 0 R\n");
					PutDoc(">>\n");
				}
				if ((ICCProfiles.count() != 0) || (spotMap.count() != 0))
				{
					PutDoc("/ColorSpace << \n");
					QMap<QString,ICCD>::Iterator it3c;
					if (ICCProfiles.count() != 0)
					{
						for (it3c = ICCProfiles.begin(); it3c != ICCProfiles.end(); ++it3c)
							PutDoc("/"+it3c.data().ResName+" "+QString::number(it3c.data().ResNum)+" 0 R\n");
					}
					QMap<QString,SpotC>::Iterator it3sc;
					if (spotMap.count() != 0)
					{
					for (it3sc = spotMap.begin(); it3sc != spotMap.end(); ++it3sc)
						PutDoc("/"+it3sc.data().ResName+" "+QString::number(it3sc.data().ResNum)+" 0 R\n");
					}
					PutDoc(">>\n");
				}
				PutDoc(">>\n"); */
				if ((Options.Compress) && (CompAvail))
					inh = CompressStr(&inh);
				PutDoc("/Length "+QString::number(inh.length()+1));
				if ((Options.Compress) && (CompAvail))
					PutDoc("\n/Filter /FlateDecode");
				PutDoc(" >>\nstream\n"+EncStream(inh, ObjCounter-1)+"\nendstream\nendobj\n");
				QString name = ll.Name.simplifyWhiteSpace().replace(QRegExp("[\\s\\/\\{\\[\\]\\}\\<\\>\\(\\)\\%]"), "_") + QString::number(ll.LNr) + QString::number(PNr);
				Seite.XObjects[name] = ObjCounter-1;
				PutPage("/"+ShName+" gs\n");
				PutPage("/"+name+" Do\n");
			}
			if ((Options.Version == 15) && (Options.useLayers))
				PutPage("EMC\n");
			}
		Lnr++;
	}
}

QString PDFLibCore::Write_TransparencyGroup(double trans, int blend, QString &data)
{
	QString retString = "";
	StartObj(ObjCounter);
	int Gobj = ObjCounter;
	ObjCounter++;
	PutDoc("<< /Type /Group\n");
	PutDoc("/S /Transparency\n");
	PutDoc("/I false\n");
	PutDoc("/K false\n");
	PutDoc(">>\nendobj\n");
	StartObj(ObjCounter);
	QString ShName = ResNam+QString::number(ResCount);
	Transpar[ShName] = ObjCounter;
	ResCount++;
	ObjCounter++;
	PutDoc("<< /Type /ExtGState\n");
	PutDoc("/CA "+FToStr(1.0 - trans)+"\n");
	PutDoc("/ca "+FToStr(1.0 - trans)+"\n");
	PutDoc("/SMask /None\n/AIS false\n/OPM 1\n");
	PutDoc("/BM /");
	switch (blend)
	{
		case 0:
			PutDoc("Normal");
			break;
		case 1:
			PutDoc("Darken");
			break;
		case 2:
			PutDoc("Lighten");
			break;
		case 3:
			PutDoc("Multiply");
			break;
		case 4:
			PutDoc("Screen");
			break;
		case 5:
			PutDoc("Overlay");
			break;
		case 6:
			PutDoc("HardLight");
			break;
		case 7:
			PutDoc("SoftLight");
			break;
		case 8:
			PutDoc("Difference");
			break;
		case 9:
			PutDoc("Exclusion");
			break;
		case 10:
			PutDoc("ColorDodge");
			break;
		case 11:
			PutDoc("ColorBurn");
			break;
		case 12:
			PutDoc("Hue");
			break;
		case 13:
			PutDoc("Saturation");
			break;
		case 14:
			PutDoc("Color");
			break;
		case 15:
			PutDoc("Luminosity");
			break;
	}
	PutDoc("\n>>\nendobj\n");
	StartObj(ObjCounter);
	ObjCounter++;
	PutDoc("<<\n/Type /XObject\n/Subtype /Form\n/FormType 1\n");
	PutDoc("/BBox [ 0 0 "+FToStr(ActPageP->width())+" "+FToStr(ActPageP->height())+" ]\n");
	PutDoc("/Group "+QString::number(Gobj)+" 0 R\n");
/*	PutDoc("/Resources << /ProcSet [/PDF /Text /ImageB /ImageC /ImageI]\n");
	if ((Seite.ImgObjects.count() != 0) || (Seite.XObjects.count() != 0))
	{
		PutDoc("/XObject <<\n");
		QMap<QString,int>::Iterator it;
		for (it = Seite.ImgObjects.begin(); it != Seite.ImgObjects.end(); ++it)
			PutDoc("/"+it.key()+" "+QString::number(it.data())+" 0 R\n");
		QMap<QString,int>::Iterator iti;
		for (iti = Seite.XObjects.begin(); iti != Seite.XObjects.end(); ++iti)
			PutDoc("/"+iti.key()+" "+QString::number(iti.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if (Seite.FObjects.count() != 0)
	{
		PutDoc("/Font << \n");
		QMap<QString,int>::Iterator it2;
		for (it2 = Seite.FObjects.begin(); it2 != Seite.FObjects.end(); ++it2)
			PutDoc("/"+it2.key()+" "+QString::number(it2.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if (Shadings.count() != 0)
	{
		PutDoc("/Shading << \n");
		QMap<QString,int>::Iterator it3;
		for (it3 = Shadings.begin(); it3 != Shadings.end(); ++it3)
			PutDoc("/"+it3.key()+" "+QString::number(it3.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if (Patterns.count() != 0)
	{
		PutDoc("/Pattern << \n");
		QMap<QString,int>::Iterator it3p;
		for (it3p = Patterns.begin(); it3p != Patterns.end(); ++it3p)
			PutDoc("/"+it3p.key()+" "+QString::number(it3p.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if (Transpar.count() != 0)
	{
		PutDoc("/ExtGState << \n");
		QMap<QString,int>::Iterator it3t;
		for (it3t = Transpar.begin(); it3t != Transpar.end(); ++it3t)
			PutDoc("/"+it3t.key()+" "+QString::number(it3t.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if ((ICCProfiles.count() != 0) || (spotMap.count() != 0))
	{
		PutDoc("/ColorSpace << \n");
		QMap<QString,ICCD>::Iterator it3c;
		if (ICCProfiles.count() != 0)
		{
			for (it3c = ICCProfiles.begin(); it3c != ICCProfiles.end(); ++it3c)
				PutDoc("/"+it3c.data().ResName+" "+QString::number(it3c.data().ResNum)+" 0 R\n");
		}
		QMap<QString,SpotC>::Iterator it3sc;
		if (spotMap.count() != 0)
		{
		for (it3sc = spotMap.begin(); it3sc != spotMap.end(); ++it3sc)
			PutDoc("/"+it3sc.data().ResName+" "+QString::number(it3sc.data().ResNum)+" 0 R\n");
		}
		PutDoc(">>\n");
	}
	PutDoc(">>\n"); */
	if ((Options.Compress) && (CompAvail))
		data = CompressStr(&data);
	PutDoc("/Length "+QString::number(data.length()+1));
	if ((Options.Compress) && (CompAvail))
		PutDoc("\n/Filter /FlateDecode");
	PutDoc(" >>\nstream\n"+EncStream(data, ObjCounter-1)+"\nendstream\nendobj\n");
	QString name = ResNam+QString::number(ResCount);
	ResCount++;
	Seite.XObjects[name] = ObjCounter-1;
	retString += "/"+ShName+" gs\n";
	retString += "/"+name+" Do\n";
	return retString;
}

QString PDFLibCore::PDF_ProcessTableItem(PageItem* ite, const Page* pag)
{
	if ((ite->lineColor() == CommonStrings::None) || (ite->lineWidth() == 0.0))
		return "";
	QString tmp("");
	tmp += "q\n";
	if ((ite->doOverprint) && (!Options.doOverprint) && (!Options.UseRGB))
	{
		StartObj(ObjCounter);
		QString ShName = ResNam+QString::number(ResCount);
		Transpar[ShName] = ObjCounter;
		ResCount++;
		ObjCounter++;
		PutDoc("<< /Type /ExtGState\n");
		PutDoc("/OP true\n");
		PutDoc("/op true\n");
		PutDoc("/OPM 1\n");
		PutDoc(">>\nendobj\n");
		tmp += "/"+ShName+" gs\n";
	}
//	if (((ite->fillTransparency() != 0) || (ite->lineTransparency() != 0)) && (Options.Version >= 14))
//		tmp += PDF_Transparenz(ite);
//	if (ite->fillColor() != CommonStrings::None)
//		tmp += putColor(ite->fillColor(), ite->fillShade(), true);
	if (((ite->lineTransparency() != 0) || (ite->lineBlendmode() != 0)) && (Options.Version >= 14))
		tmp += PDF_TransparenzStroke(ite);
	if (ite->lineColor() != CommonStrings::None)
		tmp += putColor(ite->lineColor(), ite->lineShade(), false);
	tmp += FToStr(fabs(ite->lineWidth()))+" w\n";
	if (ite->DashValues.count() != 0)
	{
		tmp += "[ ";
		QList<double>::iterator it;
		for ( it = ite->DashValues.begin(); it != ite->DashValues.end(); ++it )
		{
			int da = static_cast<int>(*it);
			if (da != 0)
				tmp += QString::number(da)+" ";
		}
		tmp += "] "+QString::number(static_cast<int>(ite->DashOffset))+" d\n";
	}
	else
	{
		QString Dt = FToStr(qMax(2*fabs(ite->lineWidth()), 1.0));
		QString Da = FToStr(qMax(6*fabs(ite->lineWidth()), 1.0));
		switch (ite->PLineArt)
		{
			case Qt::SolidLine:
				tmp += "[] 0 d\n";
				break;
			case Qt::DashLine:
				tmp += "["+Da+" "+Dt+"] 0 d\n";
				break;
			case Qt::DotLine:
				tmp += "["+Dt+"] 0 d\n";
				break;
			case Qt::DashDotLine:
				tmp += "["+Da+" "+Dt+" "+Dt+" "+Dt+"] 0 d\n";
				break;
			case Qt::DashDotDotLine:
				tmp += "["+Da+" "+Dt+" "+Dt+" "+Dt+" "+Dt+" "+Dt+"] 0 d\n";
				break;
			default:
				tmp += "[] 0 d\n";
				break;
		}
	}
	tmp += "2 J\n";
	switch (ite->PLineJoin)
	{
		case Qt::MiterJoin:
			tmp += "0 j\n";
			break;
		case Qt::BevelJoin:
			tmp += "2 j\n";
			break;
		case Qt::RoundJoin:
			tmp += "1 j\n";
			break;
		default:
			tmp += "0 j\n";
			break;
	}
	tmp += "1 0 0 1 "+FToStr(ite->xPos() - pag->xOffset())+" "+FToStr(pag->height() - (ite->yPos()  - pag->yOffset()))+" cm\n";
	if (ite->rotation() != 0)
	{
		double sr = sin(-ite->rotation()* M_PI / 180.0);
		double cr = cos(-ite->rotation()* M_PI / 180.0);
		if ((cr * cr) < 0.000001)
			cr = 0;
		if ((sr * sr) < 0.000001)
			sr = 0;
		tmp += FToStr(cr)+" "+FToStr(sr)+" "+FToStr(-sr)+" "+FToStr(cr)+ " 0 0 cm\n";
	}
	if ((ite->TopLine) || (ite->RightLine) || (ite->BottomLine) || (ite->LeftLine))
	{
		if (ite->TopLine)
		{
			tmp += "0 0 m\n";
			tmp += FToStr(ite->width())+" 0 l\n";
		}
		if (ite->RightLine)
		{
			tmp += FToStr(ite->width())+" 0 m\n";
			tmp += FToStr(ite->width())+" "+FToStr(-ite->height())+" l\n";
		}
		if (ite->BottomLine)
		{
			tmp += "0 "+FToStr(-ite->height())+" m\n";
			tmp += FToStr(ite->width())+" "+FToStr(-ite->height())+" l\n";
		}
		if (ite->LeftLine)
		{
			tmp += "0 0 m\n";
			tmp += "0 "+FToStr(-ite->height())+" l\n";
		}
		tmp += "S\n";
	}
	tmp += "Q\n";
	return tmp;
}

QString PDFLibCore::PDF_ProcessItem(PageItem* ite, const Page* pag, uint PNr, bool embedded, bool pattern)
{
	QString tmp("");
	ite->setRedrawBounding();
	double x = pag->xOffset();
	double y = pag->yOffset();
	double w = pag->width();
	double h1 = pag->height();
	double ilw=ite->lineWidth();
	double x2 = ite->BoundingX - ilw / 2.0;
	double y2 = ite->BoundingY - ilw / 2.0;
	double w2 = ite->BoundingW + ilw;
	double h2 = ite->BoundingH + ilw;
	if (!pattern)
	{
//		qDebug(QString("pdflib process item: pagename=%1 ownpage=%2 pagenr=%3 changedMP=%4").arg(pag->pageName()).arg(ite->OwnPage).arg(pag->pageNr()).arg(ite->ChangedMasterItem));
//		qDebug(QString("pdflib process item: x=%1 x2=%2 y=%3 y2=%4 w=%5 w2=%6 h1=%7 h2=%8 ilw=%9").arg(x).arg(x2).arg(y).arg(y2).arg(w).arg(w2).arg(h1).arg(h2).arg(ilw));
		if (!( qMax( x, x2 ) <= qMin( x+w, x2+w2 ) && qMax( y, y2 ) <= qMin( y+h1, y2+h2 )))
			return tmp;
//		qDebug("bb test done");
		if (ite->ChangedMasterItem)
			return tmp;
		if ((!pag->pageName().isEmpty()) && (ite->OwnPage != static_cast<int>(pag->pageNr())) && (ite->OwnPage != -1))
			return tmp;
	}

	tmp += "q\n";
	if ((ite->doOverprint) && (!Options.doOverprint) && (!Options.UseRGB))
	{
		StartObj(ObjCounter);
		QString ShName = ResNam+QString::number(ResCount);
		Transpar[ShName] = ObjCounter;
		ResCount++;
		ObjCounter++;
		PutDoc("<< /Type /ExtGState\n");
		PutDoc("/OP true\n");
		PutDoc("/op true\n");
		PutDoc("/OPM 1\n");
		PutDoc(">>\nendobj\n");
		tmp += "/"+ShName+" gs\n";
	}
//	if (((ite->fillTransparency() != 0) || (ite->lineTransparency() != 0)) && (Options.Version >= 14))
//		tmp += PDF_Transparenz(ite);
	if ((ite->isBookmark) && (Options.Bookmarks))
		PDF_Bookmark(ite, pag->height() - (ite->yPos() - pag->yOffset()));
	if (!pattern)
	{
		if (!ite->printEnabled() || ((ite->itemType() == PageItem::TextFrame) && (!pag->pageName().isEmpty())))
		{
//			qDebug("Q exit");
			tmp += "Q\n";
			return tmp;
		}
	}
	if (ite->fillColor() != CommonStrings::None)
		tmp += putColor(ite->fillColor(), ite->fillShade(), true);
	if (ite->lineColor() != CommonStrings::None)
		tmp += putColor(ite->lineColor(), ite->lineShade(), false);
	tmp += FToStr(fabs(ite->lineWidth()))+" w\n";
	if (ite->DashValues.count() != 0)
	{
		tmp += "[ ";
		QList<double>::iterator it;
		for ( it = ite->DashValues.begin(); it != ite->DashValues.end(); ++it )
		{
			int da = static_cast<int>(*it);
			if (da != 0)
				tmp += QString::number(da)+" ";
		}
		tmp += "] "+QString::number(static_cast<int>(ite->DashOffset))+" d\n";
	}
	else
	{
		QString Dt = FToStr(qMax(2*fabs(ite->lineWidth()), 1.0));
		QString Da = FToStr(qMax(6*fabs(ite->lineWidth()), 1.0));
		switch (ite->PLineArt)
		{
			case Qt::SolidLine:
				tmp += "[] 0 d\n";
				break;
			case Qt::DashLine:
				tmp += "["+Da+" "+Dt+"] 0 d\n";
				break;
			case Qt::DotLine:
				tmp += "["+Dt+"] 0 d\n";
				break;
			case Qt::DashDotLine:
				tmp += "["+Da+" "+Dt+" "+Dt+" "+Dt+"] 0 d\n";
				break;
			case Qt::DashDotDotLine:
				tmp += "["+Da+" "+Dt+" "+Dt+" "+Dt+" "+Dt+" "+Dt+"] 0 d\n";
				break;
			default:
				tmp += "[] 0 d\n";
				break;
		}
	}
	switch (ite->PLineEnd)
	{
		case Qt::FlatCap:
			tmp += "0 J\n";
			break;
		case Qt::SquareCap:
			tmp += "2 J\n";
			break;
		case Qt::RoundCap:
			tmp += "1 J\n";
			break;
		default:
			tmp += "0 J\n";
			break;
	}
	switch (ite->PLineJoin)
	{
		case Qt::MiterJoin:
			tmp += "0 j\n";
			break;
		case Qt::BevelJoin:
			tmp += "2 j\n";
			break;
		case Qt::RoundJoin:
			tmp += "1 j\n";
			break;
		default:
			tmp += "0 j\n";
			break;
	}
	if (!embedded)
	{
		tmp += "1 0 0 1 "+FToStr(ite->xPos() - pag->xOffset())+" "+FToStr(pag->height() - (ite->yPos()  - pag->yOffset()))+" cm\n";
	}
	if (ite->rotation() != 0)
	{
		double sr = sin(-ite->rotation()* M_PI / 180.0);
		double cr = cos(-ite->rotation()* M_PI / 180.0);
		if ((cr * cr) < 0.000001)
			cr = 0;
		if ((sr * sr) < 0.000001)
			sr = 0;
		tmp += FToStr(cr)+" "+FToStr(sr)+" "+FToStr(-sr)+" "+FToStr(cr)+" 0 0 cm\n";
	}
	switch (ite->itemType())
	{
		case PageItem::ImageFrame:
			if (((ite->fillTransparency() != 0) || (ite->fillBlendmode() != 0)) && (Options.Version >= 14))
				tmp += PDF_TransparenzFill(ite);
			if ((ite->fillColor() != CommonStrings::None) || (ite->GrType != 0))
			{
				if (ite->GrType != 0)
					tmp += PDF_Gradient(ite);
				else
				{
					tmp += SetClipPath(ite);
					tmp += "h\nf*\n";
				}
			}
			tmp += "q\n";
			if (ite->imageClip.size() != 0)
			{
				tmp += SetClipPathImage(ite);
				tmp += "h\nW*\nn\n";
			}
			tmp += SetClipPath(ite);
			tmp += "h\nW*\nn\n";
			if (ite->imageFlippedH())
				tmp += "-1 0 0 1 "+FToStr(ite->width())+" 0 cm\n";
			if (ite->imageFlippedV())
				tmp += "1 0 0 -1 0 "+FToStr(-ite->height())+" cm\n";
			if ((ite->PicAvail) && (!ite->Pfile.isEmpty()))
				tmp += PDF_Image(ite, ite->Pfile, ite->imageXScale(), ite->imageYScale(), ite->imageXOffset(), -ite->imageYOffset(), false, ite->IProfile, ite->UseEmbedded, ite->IRender);
			tmp += "Q\n";
			if (((ite->lineColor() != CommonStrings::None) || (!ite->NamedLStyle.isEmpty())) && (!ite->isTableItem))
			{
				if (((ite->lineTransparency() != 0) || (ite->lineBlendmode() != 0)) && (Options.Version >= 14))
					tmp += PDF_TransparenzStroke(ite);
				if ((ite->NamedLStyle.isEmpty()) && (ite->lineWidth() != 0.0))
				{
					tmp += SetClipPath(ite);
					tmp += "h\nS\n";
				}
				else
				{
					multiLine ml = doc.MLineStyles[ite->NamedLStyle];
					for (int it = ml.size()-1; it > -1; it--)
					{
						if ((ml[it].Color != CommonStrings::None) && (ml[it].Width != 0))
						{
							tmp += setStrokeMulti(&ml[it]);
							tmp += SetClipPath(ite);
							tmp += "h\nS\n";
						}
					}
				}
			}
			break;
		case PageItem::TextFrame:
//			qDebug("case TextFrame");
			if ((ite->isAnnotation()) && (Options.Version != 12))
			{
//				qDebug("Annotation");
				PDF_Annotation(ite, PNr);
				break;
			}
			if (((ite->fillTransparency() != 0) || (ite->fillBlendmode() != 0)) && (Options.Version >= 14))
				tmp += PDF_TransparenzFill(ite);
			if ((ite->fillColor() != CommonStrings::None) || (ite->GrType != 0))
			{
				if (ite->GrType != 0)
					tmp += PDF_Gradient(ite);
				else
				{
					tmp += SetClipPath(ite);
					tmp += "h\nf*\n";
				}
			}
			tmp += "q\n";
			if (ite->imageFlippedH())
				tmp += "-1 0 0 1 "+FToStr(ite->width())+" 0 cm\n";
			if (ite->imageFlippedV())
				tmp += "1 0 0 -1 0 "+FToStr(-ite->height())+" cm\n";
			tmp += setTextSt(ite, PNr, pag);
			tmp += "Q\n";
			if (((ite->lineColor() != CommonStrings::None) || (!ite->NamedLStyle.isEmpty())) && (!ite->isTableItem))
			{
				if (((ite->lineTransparency() != 0) || (ite->lineBlendmode() != 0)) && (Options.Version >= 14))
					tmp += PDF_TransparenzStroke(ite);
				if ((ite->NamedLStyle.isEmpty()) && (ite->lineWidth() != 0.0))
				{
					tmp += SetClipPath(ite);
					tmp += "h\nS\n";
				}
				else
				{
					multiLine ml = doc.MLineStyles[ite->NamedLStyle];
					for (int it = ml.size()-1; it > -1; it--)
					{
						if ((ml[it].Color != CommonStrings::None) && (ml[it].Width != 0))
						{
							tmp += setStrokeMulti(&ml[it]);
							tmp += SetClipPath(ite);
							tmp += "h\nS\n";
						}
					}
				}
			}
			break;
		case PageItem::Line:
			if (((ite->lineTransparency() != 0) || (ite->lineBlendmode() != 0)) && (Options.Version >= 14))
				tmp += PDF_TransparenzStroke(ite);
			if (ite->NamedLStyle.isEmpty())
			{
				tmp += "0 0 m\n";
				tmp += FToStr(ite->width())+" 0 l\n";
				tmp += "S\n";
			}
			else
			{
				multiLine ml = doc.MLineStyles[ite->NamedLStyle];
				for (int it = ml.size()-1; it > -1; it--)
				{
					if ((ml[it].Color != CommonStrings::None) && (ml[it].Width != 0))
					{
						tmp += setStrokeMulti(&ml[it]);
						tmp += "0 0 m\n";
						tmp += FToStr(ite->width())+" 0 l\n";
						tmp += "S\n";
					}
				}
			}
			if (ite->startArrowIndex() != 0)
			{
				QMatrix arrowTrans;
				FPointArray arrow = doc.arrowStyles.at(ite->startArrowIndex()-1).points.copy();
				arrowTrans.translate(0, 0);
				arrowTrans.scale(ite->lineWidth(), ite->lineWidth());
				arrowTrans.scale(-1,1);
				arrow.map(arrowTrans);
				if ((ite->lineTransparency() != 0) && (Options.Version >= 14))
				{
					StartObj(ObjCounter);
					QString ShName = ResNam+QString::number(ResCount);
					Transpar[ShName] = ObjCounter;
					ResCount++;
					ObjCounter++;
					PutDoc("<< /Type /ExtGState\n");
					PutDoc("/CA "+FToStr(1.0 - ite->lineTransparency())+"\n");
					PutDoc("/ca "+FToStr(1.0 - ite->lineTransparency())+"\n");
					PutDoc("/SMask /None\n/AIS false\n/OPM 1\n");
					PutDoc("/BM /Normal\n>>\nendobj\n");
					tmp += "/"+ShName+" gs\n";
				}
				tmp += putColor(ite->lineColor(), ite->lineShade(), true);
				tmp += SetClipPathArray(&arrow);
				tmp += "h\nf*\n";
			}
			if (ite->endArrowIndex() != 0)
			{
				QMatrix arrowTrans;
				FPointArray arrow = doc.arrowStyles.at(ite->endArrowIndex()-1).points.copy();
				arrowTrans.translate(ite->width(), 0);
				arrowTrans.scale(ite->lineWidth(), ite->lineWidth());
				arrow.map(arrowTrans);
				if ((ite->lineTransparency() != 0) && (Options.Version >= 14))
				{
					StartObj(ObjCounter);
					QString ShName = ResNam+QString::number(ResCount);
					Transpar[ShName] = ObjCounter;
					ResCount++;
					ObjCounter++;
					PutDoc("<< /Type /ExtGState\n");
					PutDoc("/CA "+FToStr(1.0 - ite->lineTransparency())+"\n");
					PutDoc("/ca "+FToStr(1.0 - ite->lineTransparency())+"\n");
					PutDoc("/SMask /None\n/AIS false\n/OPM 1\n");
					PutDoc("/BM /Normal\n>>\nendobj\n");
					tmp += "/"+ShName+" gs\n";
				}
				tmp += putColor(ite->lineColor(), ite->lineShade(), true);
				tmp += SetClipPathArray(&arrow);
				tmp += "h\nf*\n";
			}
			break;
		case PageItem::ItemType1:
		case PageItem::ItemType3:
		case PageItem::Polygon:
			if (((ite->fillTransparency() != 0) || (ite->fillBlendmode() != 0)) && (Options.Version >= 14))
				tmp += PDF_TransparenzFill(ite);
			if (ite->GrType != 0)
				tmp += PDF_Gradient(ite);
			else
			{
				if (ite->fillColor() != CommonStrings::None)
				{
					tmp += SetClipPath(ite);
					if (ite->fillRule)
						tmp += "h\nf*\n";
					else
						tmp += "h\nf\n";
				}
			}
			if ((ite->lineColor() != CommonStrings::None) || (!ite->NamedLStyle.isEmpty()))
			{
				if (((ite->lineTransparency() != 0) || (ite->lineBlendmode() != 0)) && (Options.Version >= 14))
					tmp += PDF_TransparenzStroke(ite);
				if ((ite->NamedLStyle.isEmpty()) && (ite->lineWidth() != 0.0))
				{
					tmp += SetClipPath(ite);
					tmp += "h\nS\n";
				}
				else
				{
					multiLine ml = doc.MLineStyles[ite->NamedLStyle];
					for (int it = ml.size()-1; it > -1; it--)
					{
						if ((ml[it].Color != CommonStrings::None) && (ml[it].Width != 0))
						{
							tmp += setStrokeMulti(&ml[it]);
							tmp += SetClipPath(ite);
							tmp += "h\nS\n";
						}
					}
				}
			}
			break;
		case PageItem::PolyLine:
			if (ite->PoLine.size() > 4)  // && ((ite->PoLine.point(0) != ite->PoLine.point(1)) || (ite->PoLine.point(2) != ite->PoLine.point(3))))
			{
				if (((ite->fillTransparency() != 0) || (ite->fillBlendmode() != 0)) && (Options.Version >= 14))
					tmp += PDF_TransparenzFill(ite);
				if (ite->GrType != 0)
					tmp += PDF_Gradient(ite);
				else
				{
					if (ite->fillColor() != CommonStrings::None)
					{
						tmp += SetClipPath(ite);
						tmp += "h\nf*\n";
					}
				}
			}
			if ((ite->lineColor() != CommonStrings::None) || (!ite->NamedLStyle.isEmpty()))
			{
				if (((ite->lineTransparency() != 0) || (ite->lineBlendmode() != 0)) && (Options.Version >= 14))
					tmp += PDF_TransparenzStroke(ite);
				if ((ite->NamedLStyle.isEmpty()) && (ite->lineWidth() != 0.0))
				{
					tmp += SetClipPath(ite, false);
					tmp += "S\n";
				}
				else
				{
					multiLine ml = doc.MLineStyles[ite->NamedLStyle];
					for (int it = ml.size()-1; it > -1; it--)
					{
						if ((ml[it].Color != CommonStrings::None) && (ml[it].Width != 0))
						{
							tmp += setStrokeMulti(&ml[it]);
							tmp += SetClipPath(ite, false);
							tmp += "S\n";
						}
					}
				}
			}
			if (ite->startArrowIndex() != 0)
			{
				FPoint Start = ite->PoLine.point(0);
				for (uint xx = 1; xx < ite->PoLine.size(); xx += 2)
				{
					FPoint Vector = ite->PoLine.point(xx);
					if ((Start.x() != Vector.x()) || (Start.y() != Vector.y()))
					{
						double r = atan2(Start.y()-Vector.y(),Start.x()-Vector.x())*(180.0/M_PI);
						QMatrix arrowTrans;
						FPointArray arrow = doc.arrowStyles.at(ite->startArrowIndex()-1).points.copy();
						arrowTrans.translate(Start.x(), Start.y());
						arrowTrans.rotate(r);
						arrowTrans.scale(ite->lineWidth(), ite->lineWidth());
						arrow.map(arrowTrans);
						if ((ite->lineTransparency() != 0) && (Options.Version >= 14))
						{
							StartObj(ObjCounter);
							QString ShName = ResNam+QString::number(ResCount);
							Transpar[ShName] = ObjCounter;
							ResCount++;
							ObjCounter++;
							PutDoc("<< /Type /ExtGState\n");
							PutDoc("/CA "+FToStr(1.0 - ite->lineTransparency())+"\n");
							PutDoc("/ca "+FToStr(1.0 - ite->lineTransparency())+"\n");
							PutDoc("/SMask /None\n/AIS false\n/OPM 1\n");
							PutDoc("/BM /Normal\n>>\nendobj\n");
							tmp += "/"+ShName+" gs\n";
						}
						tmp += putColor(ite->lineColor(), ite->lineShade(), true);
						tmp += SetClipPathArray(&arrow);
						tmp += "h\nf*\n";
						break;
					}
				}
			}
			if (ite->endArrowIndex() != 0)
			{
				FPoint End = ite->PoLine.point(ite->PoLine.size()-2);
				for (uint xx = ite->PoLine.size()-1; xx > 0; xx -= 2)
				{
					FPoint Vector = ite->PoLine.point(xx);
					if ((End.x() != Vector.x()) || (End.y() != Vector.y()))
					{
						double r = atan2(End.y()-Vector.y(),End.x()-Vector.x())*(180.0/M_PI);
						QMatrix arrowTrans;
						FPointArray arrow = doc.arrowStyles.at(ite->endArrowIndex()-1).points.copy();
						arrowTrans.translate(End.x(), End.y());
						arrowTrans.rotate(r);
						arrowTrans.scale(ite->lineWidth(), ite->lineWidth());
						arrow.map(arrowTrans);
						if ((ite->lineTransparency() != 0) && (Options.Version >= 14))
						{
							StartObj(ObjCounter);
							QString ShName = ResNam+QString::number(ResCount);
							Transpar[ShName] = ObjCounter;
							ResCount++;
							ObjCounter++;
							PutDoc("<< /Type /ExtGState\n");
							PutDoc("/CA "+FToStr(1.0 - ite->lineTransparency())+"\n");
							PutDoc("/ca "+FToStr(1.0 - ite->lineTransparency())+"\n");
							PutDoc("/SMask /None\n/AIS false\n/OPM 1\n");
							PutDoc("/BM /Normal\n>>\nendobj\n");
							tmp += "/"+ShName+" gs\n";
						}
						tmp += putColor(ite->lineColor(), ite->lineShade(), true);
						tmp += SetClipPathArray(&arrow);
						tmp += "h\nf*\n";
						break;
					}
				}
			}
			break;
		case PageItem::PathText:
			if (ite->PoShow)
			{
				if (ite->PoLine.size() > 3)
				{
					tmp += "q\n";
					if ((ite->lineColor() != CommonStrings::None) || (!ite->NamedLStyle.isEmpty()))
					{
						if (((ite->lineTransparency() != 0) || (ite->lineBlendmode() != 0)) && (Options.Version >= 14))
							tmp += PDF_TransparenzStroke(ite);
						if ((ite->NamedLStyle.isEmpty()) && (ite->lineWidth() != 0.0))
						{
							tmp += SetClipPath(ite, false);
							tmp += "S\n";
						}
						else
						{
							multiLine ml = doc.MLineStyles[ite->NamedLStyle];
							for (int it = ml.size()-1; it > -1; it--)
							{
								if ((ml[it].Color != CommonStrings::None) && (ml[it].Width != 0))
								{
									tmp += setStrokeMulti(&ml[it]);
									tmp += SetClipPath(ite, false);
									tmp += "S\n";
								}
							}
						}
					}
					tmp += "Q\n";
				}
			}
			if (((ite->fillTransparency() != 0) || (ite->fillBlendmode() != 0)) && (Options.Version >= 14))
				tmp += PDF_TransparenzFill(ite);
			tmp += setTextSt(ite, PNr, pag);
			break;
		case PageItem::Multiple:
			Q_ASSERT(false);
			break;
	}
	tmp += "Q\n";
	return tmp;
}

QString PDFLibCore::putColor(const QString& color, double shade, bool fill)
{
	QString tmp = "";
	QString colString = SetFarbe(color, shade);
	ScColor tmpC;
	tmpC = doc.PageColors[color];
	if (((tmpC.isSpotColor()) || (tmpC.isRegistrationColor())) && ((Options.isGrayscale == false) && (Options.UseRGB == false))  && (Options.UseSpotColors))
	{
		if (color != CommonStrings::None)
		{
			if (fill)
			{
				tmp += "/"+spotMap[color].ResName+" cs\n";
				tmp += FToStr(shade / 100.0)+" scn\n";
			}
			else
			{
				tmp += "/"+spotMap[color].ResName+" CS\n";
				tmp += FToStr(shade / 100.0)+" SCN\n";
			}
		}
		return tmp;
	}
	if (Options.isGrayscale)
	{
		if (color != CommonStrings::None)
		{
			if (fill)
				tmp += colString+" g\n";
			else
				tmp += colString+" G\n";
		}
		return tmp;
	}
	if (Options.UseRGB)
	{
		if (color != CommonStrings::None)
		{
			if (fill)
				tmp += colString+" rg\n";
			else
				tmp += colString+" RG\n";
		}
	}
	else
	{
		if ((doc.HasCMS) && (Options.UseProfiles))
		{
			if (tmpC.getColorModel() == colorModelCMYK)
			{
				if (color != CommonStrings::None)
				{
					if (fill)
						tmp += colString+" k\n";
					else
						tmp += colString+" K\n";
				}
			}
			else
			{
				QString tmp2[] = {"/Perceptual", "/RelativeColorimetric", "/Saturation", "/AbsoluteColorimetric"};
				tmp += tmp2[Options.Intent]+ " ri\n";
				if (color != CommonStrings::None)
				{
					if (fill)
					{
						tmp += "/"+ICCProfiles[Options.SolidProf].ResName+" cs\n";
						tmp += colString+" scn\n";
					}
					else
					{
						tmp += "/"+ICCProfiles[Options.SolidProf].ResName+" CS\n";
						tmp += colString+" SCN\n";
					}
				}
			}
		}
		else
		{
			if (color != CommonStrings::None)
			{
				if (fill)
					tmp += colString+" k\n";
				else
					tmp += colString+" K\n";
			}
		}
	}
	return tmp;
}

/*CB 2982: cache code is borked somehow, original function is above
QString PDFLibCore::putColor(const QString & colorName, int shade, bool fill)
{
	// Cache of last foreground and background colours We cache fg and bg
	// separately because they're alternated so much.  The primary purpose of
	// this cache is to avoid re-caculating the fg and bg colors on each char
	// of text when the color doens't change.
	static QString lastFGColorName, lastFGOutput, lastBGColorName, lastBGOutput;
	static int lastFGShade = -1, lastBGShade = -1;
	if (fill && colorName == lastBGColorName && shade == lastBGShade)
		return lastBGOutput;
	else if (colorName == lastFGColorName && shade == lastFGShade)
		return lastFGOutput;
	// Cache miss, generate the color
	else if (fill)
	{
		lastBGColorName = colorName;
		lastBGShade = shade;
		lastBGOutput = putColorUncached(colorName, shade, fill);
		return lastBGOutput;
	}
	else
	{
		lastFGColorName = colorName;
		lastFGShade = shade;
		lastFGOutput = putColorUncached(colorName, shade, fill);
		return lastFGOutput;
	}
}
*/

QString PDFLibCore::putColorUncached(const QString& color, int shade, bool fill)
{
	ScColor tmpC(doc.PageColors[color]);
	if (((tmpC.isSpotColor()) || (tmpC.isRegistrationColor())) && ((Options.isGrayscale == false) && (Options.UseRGB == false))  && (Options.UseSpotColors))
	{
		QString tmpSpot("");
		if (color != CommonStrings::None)
		{
			if (fill)
			{
				tmpSpot += "/"+spotMap[color].ResName+" cs\n";
				tmpSpot += FToStr(shade / 100.0)+" scn\n";
			}
			else
			{
				tmpSpot += "/"+spotMap[color].ResName+" CS\n";
				tmpSpot += FToStr(shade / 100.0)+" SCN\n";
			}
		}
		return tmpSpot;
	}
	QString colString(SetFarbe(color, shade));
	if (Options.isGrayscale)
	{
		QString tmpGray("");
		if (color != CommonStrings::None)
		{
			if (fill)
				tmpGray += colString+" g\n";
			else
				tmpGray += colString+" G\n";
		}
		return tmpGray;
	}
	QString tmp("");
	if (Options.UseRGB)
	{
		if (color != CommonStrings::None)
		{
			if (fill)
				tmp += colString+" rg\n";
			else
				tmp += colString+" RG\n";
		}
	}
	else
	{
		if ((doc.HasCMS) && (Options.UseProfiles))
		{
			if (tmpC.getColorModel() == colorModelCMYK)
			{
				if (color != CommonStrings::None)
				{
					if (fill)
						tmp += colString+" k\n";
					else
						tmp += colString+" K\n";
				}
			}
			else
			{
				QString tmp2[] = {"/Perceptual", "/RelativeColorimetric", "/Saturation", "/AbsoluteColorimetric"};
				tmp += tmp2[Options.Intent]+ " ri\n";
				if (color != CommonStrings::None)
				{
					if (fill)
					{
						tmp += "/"+ICCProfiles[Options.SolidProf].ResName+" cs\n";
						tmp += colString+" scn\n";
					}
					else
					{
						tmp += "/"+ICCProfiles[Options.SolidProf].ResName+" CS\n";
						tmp += colString+" SCN\n";
					}
				}
			}
		}
		else
		{
			if (color != CommonStrings::None)
			{
				if (fill)
					tmp += colString+" k\n";
				else
					tmp += colString+" K\n";
			}
		}
	}
	return tmp;
}

QString PDFLibCore::setStrokeMulti(struct SingleLine *sl)
{
	QString tmp(
			putColor(sl->Color, sl->Shade, false) +
			FToStr(sl->Width)+" w\n"
			);
	QString Dt = FToStr(qMax(2*sl->Width, 1.0));
	QString Da = FToStr(qMax(6*sl->Width, 1.0));
	switch (static_cast<Qt::PenStyle>(sl->Dash))
	{
		case Qt::SolidLine:
			tmp += "[] 0 d\n";
			break;
		case Qt::DashLine:
			tmp += "["+Da+" "+Dt+"] 0 d\n";
			break;
		case Qt::DotLine:
			tmp += "["+Dt+"] 0 d\n";
			break;
		case Qt::DashDotLine:
			tmp += "["+Da+" "+Dt+" "+Dt+" "+Dt+"] 0 d\n";
			break;
		case Qt::DashDotDotLine:
			tmp += "["+Da+" "+Dt+" "+Dt+" "+Dt+" "+Dt+" "+Dt+"] 0 d\n";
			break;
		default:
			tmp += "[] 0 d\n";
			break;
		}
	switch (static_cast<Qt::PenCapStyle>(sl->LineEnd))
	{
		case Qt::FlatCap:
			tmp += "0 J\n";
			break;
		case Qt::SquareCap:
			tmp += "2 J\n";
			break;
		case Qt::RoundCap:
			tmp += "1 J\n";
			break;
		default:
			tmp += "0 J\n";
			break;
	}
	switch (static_cast<Qt::PenJoinStyle>(sl->LineJoin))
	{
		case Qt::MiterJoin:
			tmp += "0 j\n";
			break;
		case Qt::BevelJoin:
			tmp += "2 j\n";
			break;
		case Qt::RoundJoin:
			tmp += "1 j\n";
			break;
		default:
			tmp += "0 j\n";
			break;
	}
	return tmp;
}

// Return a PDF substring representing a PageItem's text
QString PDFLibCore::setTextSt(PageItem *ite, uint PNr, const Page* pag)
{
	int savedOwnPage = ite->OwnPage;
	ite->OwnPage = PNr;
	if (ite->itemType() == PageItem::TextFrame)
		ite->asTextFrame()->layout();
	ite->OwnPage = savedOwnPage;
	QString tmp("");
	QString tmp2("");
	int tabCc = 0;
	QList<ParagraphStyle::TabRecord> tTabValues;
	double tabDist=ite->textToFrameDistLeft();
	if (ite->lineColor() != CommonStrings::None)
		tabDist += ite->lineWidth() / 2.0;
#ifndef NLS_PROTO
	// Loop over each character (!) in the pageItem...
	if (ite->itemType() == PageItem::TextFrame)
	{
		tmp += "BT\n";
		for (uint ll=0; ll < ite->itemText.lines(); ++ll)
		{
			LineSpec ls = ite->itemText.line(ll);
			tabDist = ls.x;
			double CurX = ls.x;
			for (int d = ls.firstItem; d <= ls.lastItem; ++d)
			{
				const ScText * const hl = ite->itemText.item(d);
				const QString ch = ite->itemText.text(d,1);
				const CharStyle& chstyle(ite->itemText.charStyle(d));
				const ParagraphStyle& pstyle(ite->itemText.paragraphStyle(d));
				if ((ch[0] == SpecialChars::PARSEP) || (ch[0] == QChar(10)) || (ch[0] == SpecialChars::LINEBREAK) || (ch[0] == SpecialChars::FRAMEBREAK) || (ch[0] == SpecialChars::COLBREAK))
					continue;
				if (chstyle.effects() & ScStyle_SuppressSpace)
					continue;
				tTabValues = pstyle.tabValues();
				if (chstyle.effects() & ScStyle_StartOfLine)
					tabCc = 0;
				if ((ch[0] == SpecialChars::TAB) && (tTabValues.count() != 0))
				{
					if ((tabCc < tTabValues.count()) && (!tTabValues[tabCc].tabFillChar.isNull()))
					{
						ScText hl2;
						static_cast<CharStyle&>(hl2) = static_cast<const CharStyle&>(*hl);
						const GlyphLayout * const gl = hl->glyph.more;
						double scale = gl ? gl->scaleV : 1.0;
						double wt    = chstyle.font().charWidth(tTabValues[tabCc].tabFillChar, chstyle.fontSize() * scale / 10.0);
						double len   = hl->glyph.xadvance;
						int coun     = static_cast<int>(len / wt);
						double sPos  = CurX - len + chstyle.fontSize() / 10.0 * 0.7 + 1;
						hl2.ch = tTabValues[tabCc].tabFillChar;
						hl2.setTracking(0);
						hl2.setScaleH(1000);
						hl2.setScaleV(1000);
						hl2.glyph.glyph   = chstyle.font().char2CMap(tTabValues[tabCc].tabFillChar);
						hl2.glyph.yoffset = hl->glyph.yoffset;
						for (int cx = 0; cx < coun; ++cx)
						{
							hl2.glyph.xoffset =  sPos + wt * cx;
							if ((chstyle.effects() & ScStyle_Shadowed) && (chstyle.strokeColor() != CommonStrings::None))
							{
								ScText hl3;
								static_cast<CharStyle&>(hl3) = static_cast<const CharStyle&>(hl2);
								hl3.ch = hl2.ch;
								hl3.glyph.glyph = hl2.glyph.glyph;
								hl3.setFillColor(hl2.strokeColor());
								hl3.glyph.yoffset = hl2.glyph.yoffset - (chstyle.fontSize() * chstyle.shadowYOffset() / 10000.0);
								hl3.glyph.xoffset = hl2.glyph.xoffset + (chstyle.fontSize() * chstyle.shadowXOffset() / 10000.0);
								setTextCh(ite, PNr, CurX, ls.y, d, tmp, tmp2, &hl3, pstyle, pag);
							}
							setTextCh(ite, PNr, CurX, ls.y, d, tmp, tmp2, &hl2, pstyle, pag);
						}
						tabCc++;
					}
					else
					{
						tabCc++;
					}
				}
				if (ch[0] == SpecialChars::TAB) 
				{
					CurX += hl->glyph.wide();
					continue;
				}
				if ((chstyle.effects() & ScStyle_Shadowed) && (chstyle.strokeColor() != CommonStrings::None))
				{
					ScText hl2;
					hl2.ch = ch[0];
					hl2.glyph.glyph = hl->glyph.glyph;
					static_cast<CharStyle&>(hl2) = static_cast<const CharStyle&>(*hl);
					hl2.setFillColor(hl->strokeColor());
					hl2.glyph.yoffset = hl->glyph.yoffset - (chstyle.fontSize() * chstyle.shadowYOffset() / 10000.0);
					hl2.glyph.xoffset = hl->glyph.xoffset + (chstyle.fontSize() * chstyle.shadowXOffset() / 10000.0);
					hl2.glyph.scaleH = hl->glyph.scaleH;
					hl2.glyph.scaleV = hl->glyph.scaleV;
					setTextCh(ite, PNr, CurX, ls.y, d, tmp, tmp2, &hl2, pstyle, pag);
				}
				setTextCh(ite, PNr, CurX, ls.y, d, tmp, tmp2, hl, pstyle, pag);
				if (hl->ch == SpecialChars::OBJECT)
				{
					InlineFrame& embedded(const_cast<InlineFrame&>(hl->embedded));
					CurX += (embedded.getItem()->gWidth + embedded.getItem()->lineWidth());
				}
				else
					CurX += hl->glyph.wide();
				tabDist = CurX;
			}
		}
	}
	else
	{
		double CurX = 0;
		for (int d = 0; d < ite->itemText.length(); ++d)
		{
			const ScText * const hl = ite->itemText.item(d);
			const QString ch = ite->itemText.text(d,1);
			const CharStyle& chstyle(ite->itemText.charStyle(d));
			const ParagraphStyle& pstyle(ite->itemText.paragraphStyle(d));
			if ((ch[0] == SpecialChars::PARSEP) || (ch[0] == QChar(10)) || (ch[0] == SpecialChars::LINEBREAK) || (ch[0] == SpecialChars::FRAMEBREAK) || (ch[0] == SpecialChars::COLBREAK))
				continue;
			if (chstyle.effects() & ScStyle_SuppressSpace)
				continue;
			tTabValues = pstyle.tabValues();
			if (chstyle.effects() & ScStyle_StartOfLine)
				tabCc = 0;
			if ((ch[0] == SpecialChars::TAB) && (tTabValues.count() != 0))
			{
				if ((tabCc < tTabValues.count()) && (!tTabValues[tabCc].tabFillChar.isNull()))
				{
					ScText hl2;
					static_cast<CharStyle&>(hl2) = static_cast<const CharStyle&>(*hl);
					double wt = chstyle.font().charWidth(tTabValues[tabCc].tabFillChar, chstyle.fontSize());
					int coun = static_cast<int>((CurX+hl->glyph.xoffset - tabDist) / wt);
					double sPos = CurX+hl->glyph.xoffset - (CurX+hl->glyph.xoffset - tabDist) + 1;
					hl2.ch = tTabValues[tabCc].tabFillChar;
					hl2.setTracking(0);
					hl2.setScaleH(1000);
					hl2.setScaleV(1000);
					hl2.glyph.yoffset = hl->glyph.yoffset;
					for (int cx = 0; cx < coun; ++cx)
					{
						hl2.glyph.xoffset =  sPos + wt * cx;
						if ((chstyle.effects() & ScStyle_Shadowed) && (chstyle.strokeColor() != CommonStrings::None))
						{
							ScText hl3;
							static_cast<CharStyle&>(hl3) = static_cast<const CharStyle&>(hl2);
							hl3.ch = hl2.ch;
							hl3.glyph.glyph = hl2.glyph.glyph;
							hl3.setFillColor(hl2.strokeColor());
							hl3.glyph.yoffset = hl2.glyph.yoffset - (chstyle.fontSize() * chstyle.shadowYOffset() / 10000.0);
							hl3.glyph.xoffset = hl2.glyph.xoffset + (chstyle.fontSize() * chstyle.shadowXOffset() / 10000.0);
							setTextCh(ite, PNr, 0, 0, d, tmp, tmp2, &hl3, pstyle, pag);
						}
						setTextCh(ite, PNr, 0, 0, d, tmp, tmp2, &hl2, pstyle, pag);
					}
					tabCc++;
				}
				else
				{
					tabCc++;
				}
			}
			if (ch[0] == SpecialChars::TAB) 
			{
				CurX += hl->glyph.wide();
				continue;
			}
			if ((chstyle.effects() & ScStyle_Shadowed) && (chstyle.strokeColor() != CommonStrings::None))
			{
				ScText hl2;
				hl2.ch = ch[0];
				hl2.glyph.glyph = hl->glyph.glyph;
				static_cast<CharStyle&>(hl2) = static_cast<const CharStyle&>(*hl);
				hl2.setFillColor(hl->strokeColor());
				hl2.glyph.yoffset = hl->glyph.yoffset - (chstyle.fontSize() * chstyle.shadowYOffset() / 10000.0);
				hl2.glyph.xoffset = hl->glyph.xoffset + (chstyle.fontSize() * chstyle.shadowXOffset() / 10000.0);
				hl2.glyph.scaleH = hl->glyph.scaleH;
				hl2.glyph.scaleV = hl->glyph.scaleV;
				setTextCh(ite, PNr, 0, 0, d, tmp, tmp2, &hl2, pstyle, pag);
			}
			setTextCh(ite, PNr, 0, 0, d, tmp, tmp2, hl, pstyle, pag);
			CurX += hl->glyph.wide();
			tabDist = CurX;
		}
	}
#endif
	if (ite->itemType() == PageItem::TextFrame)
		tmp += "ET\n"+tmp2;
	return tmp;
}

void PDFLibCore::setTextCh(PageItem *ite, uint PNr, double x,  double y, uint d, QString &tmp, QString &tmp2, const ScText *hl, const ParagraphStyle& pstyle, const Page* pag)
{
#ifndef NLS_PROTO
	QString FillColor = "";
	QString StrokeColor = "";
	if (ite->asPathText())
	{
		tmp += "q\n";
		QMatrix trafo = QMatrix( 1, 0, 0, -1, -hl->PRot, 0 );
		if (ite->textPathFlipped)
			trafo *= QMatrix(1, 0, 0, -1, 0, 0);
		if (ite->textPathType == 0)
			trafo *= QMatrix( hl->PtransX, -hl->PtransY, -hl->PtransY, -hl->PtransX, hl->glyph.xoffset, -hl->glyph.yoffset );
		else if (ite->textPathType == 1)
			trafo *= QMatrix(1, 0, 0, -1, hl->glyph.xoffset, -hl->glyph.yoffset );
		else if (ite->textPathType == 2)
		{
			double a = 1;
			double b = -1;
			if (hl->PtransX < 0)
			{
				a = -1;
				b = 1;
			}
			if (fabs(hl->PtransX) > 0.1)
				trafo *= QMatrix( a, (hl->PtransY / hl->PtransX) * b, 0, -1, hl->glyph.xoffset, -hl->glyph.yoffset ); // ID's Skew mode
			else
				trafo *= QMatrix( a, 6 * b, 0, -1, hl->glyph.xoffset, -hl->glyph.yoffset );
		}
		tmp += FToStr(trafo.m11())+" "+FToStr(trafo.m12())+" "+FToStr(trafo.m21())+" "+FToStr(trafo.m22())+" "+FToStr(trafo.dx())+" "+FToStr(trafo.dy())+" cm\n";
		if (ite->BaseOffs != 0)
			tmp += "1 0 0 1 0 "+FToStr( -ite->BaseOffs)+" cm\n";
		if (hl->ch != SpecialChars::OBJECT)
			tmp += "BT\n";
	}
	double tsz = hl->fontSize();
	QString chstr = hl->ch;
	const CharStyle& style(*hl);
	
/*	if (hl->effects() & ScStyle_DropCap)
	{
		if (pstyle.lineSpacingMode() == ParagraphStyle::BaselineGridLineSpacing)
			tsz = qRound(10 * ((doc.typographicSettings.valueBaseGrid * (pstyle.dropCapLines()-1)+(hl->font().ascent(pstyle.charStyle().fontSize() / 10.0))) / (hl->font().realCharHeight(chstr[0], 10))));
		else
		{
			if (pstyle.lineSpacingMode() == ParagraphStyle::FixedLineSpacing)
				tsz = qRound(10 * ((pstyle.lineSpacing() *  (pstyle.dropCapLines()-1)+(hl->font().ascent(pstyle.charStyle().fontSize() / 10.0))) / (hl->font().realCharHeight(chstr[0], 10))));
			else
			{
				double currasce = hl->font().height(pstyle.charStyle().fontSize());
				tsz = qRound(10 * ((currasce * (pstyle.dropCapLines()-1)+(hl->font().ascent(pstyle.charStyle().fontSize() / 10.0))) / hl->font().realCharHeight(chstr[0], 10)));
			}
		}
	}
	*/
	InlineFrame& embedded(const_cast<InlineFrame&>(hl->embedded));
	if ((hl->ch == SpecialChars::OBJECT) && (embedded.hasItem()))
	{
		if (!ite->asPathText())
		{
			tmp += "ET\n"+tmp2;
			tmp2 = "";
		}
		QList<PageItem*> emG = embedded.getGroupedItems();
		QStack<PageItem*> groupStack;
		for (int em = 0; em < emG.count(); ++em)
		{
			PageItem* embedded = emG.at(em);
			if (embedded->isGroupControl)
			{
				tmp2 += "q\n";
				FPointArray cl = embedded->PoLine.copy();
				FPointArray clb = embedded->PoLine.copy();
				QMatrix mm;
				if (ite->asPathText())
					mm.translate(embedded->gXpos * (style.scaleH() / 1000.0), ((embedded->gHeight * (style.scaleV() / 1000.0)) - embedded->gYpos * (style.scaleV() / 1000.0)) * -1);
				else
					mm.translate(x + hl->glyph.xoffset + embedded->gXpos * (style.scaleH() / 1000.0), (y + hl->glyph.yoffset - (embedded->gHeight * (style.scaleV() / 1000.0)) + embedded->gYpos * (style.scaleV() / 1000.0)));
				if (style.baselineOffset() != 0)
					mm.translate(0, embedded->gHeight * (style.baselineOffset() / 1000.0));
				if (style.scaleH() != 1000)
					mm.scale(style.scaleH() / 1000.0, 1);
				if (style.scaleV() != 1000)
					mm.scale(1, style.scaleV() / 1000.0);
				mm.rotate(embedded->rotation());
				cl.map( mm );
				embedded->PoLine = cl;
				tmp2 += SetClipPath(embedded);
				tmp2 += "h W* n\n";
				groupStack.push(embedded->groupsLastItem);
				embedded->PoLine = clb.copy();
				continue;
			}
			tmp2 += "q\n";
			if (ite->asPathText())
				tmp2 +=  FToStr(style.scaleH() / 1000.0)+" 0 0 "+FToStr(style.scaleV() / 1000.0)+" "+FToStr(embedded->gXpos * (style.scaleH() / 1000.0))+" "+FToStr((embedded->gHeight * (style.scaleV() / 1000.0)) - embedded->gYpos * (style.scaleV() / 1000.0)+embedded->gHeight * (style.baselineOffset() / 1000.0))+" cm\n";
			else
				tmp2 +=  FToStr(style.scaleH() / 1000.0)+" 0 0 "+FToStr(style.scaleV() / 1000.0)+" "+FToStr(x+hl->glyph.xoffset + embedded->gXpos * (style.scaleH() / 1000.0))+" "+FToStr(-y-hl->glyph.yoffset + (embedded->gHeight * (style.scaleV() / 1000.0)) - embedded->gYpos * (style.scaleV() / 1000.0)+embedded->gHeight * (style.baselineOffset() / 1000.0))+" cm\n";
			tmp2 += PDF_ProcessItem(embedded, pag, PNr, true);
			tmp2 += "Q\n";
			if (groupStack.count() != 0)
			{
				while (embedded == groupStack.top())
				{
					tmp2 += "Q\n";
					groupStack.pop();
					if (groupStack.count() == 0)
						break;
				}
			}
		}
		tmp += tmp2+"\n";
		tmp2 = "";
		if (ite->asPathText())
			tmp += "Q\n";
		else
			tmp += "BT\n";
		return;
	}

	uint glyph = hl->glyph.glyph;

	if (glyph == (ScFace::CONTROL_GLYPHS + SpecialChars::NBSPACE.unicode()) ||
		glyph == (ScFace::CONTROL_GLYPHS + 32)) 
	{
		glyph = style.font().char2CMap(QChar(' '));
		chstr = " ";
	}
	else if (glyph == (ScFace::CONTROL_GLYPHS + SpecialChars::NBHYPHEN.unicode()))
	{
		glyph = style.font().char2CMap(QChar('-'));
		chstr = "-";
	}
	
	if (glyph < ScFace::CONTROL_GLYPHS)
	{
		if (style.strokeColor() != CommonStrings::None)
		{
			StrokeColor = "";
			StrokeColor += putColor(style.strokeColor(), style.strokeShade(), false);
		}
		if (style.fillColor() != CommonStrings::None)
		{
			FillColor = "";
			FillColor += putColor(style.fillColor(), style.fillShade(), true);
		}
		if (((style.effects() & ScStyle_Underline) && (chstr != SpecialChars::PARSEP))  || ((style.effects() & ScStyle_UnderlineWords) && (!chstr[0].isSpace())))
		{
			//		double Ulen = style.font().charWidth(chstr[0], style.fontSize()) * (hl->glyph.scaleH);
			double Ulen = hl->glyph.xadvance;
			double Upos, Uwid, kern;
			if (style.effects() & ScStyle_StartOfLine)
				kern = 0;
			else
				kern = style.fontSize() * style.tracking() / 10000.0;
			if ((style.underlineOffset() != -1) || (style.underlineWidth() != -1))
			{
				if (style.underlineOffset() != -1)
					Upos = (style.underlineOffset() / 1000.0) * (style.font().descent(style.fontSize() / 10.0));
				else
					Upos = style.font().underlinePos(style.fontSize() / 10.0);
				if (style.underlineWidth() != -1)
					Uwid = (style.underlineWidth() / 1000.0) * (style.fontSize() / 10.0);
				else
					Uwid = qMax(style.font().strokeWidth(style.fontSize() / 10.0), 1.0);
			}
			else
			{
				Upos = style.font().underlinePos(style.fontSize() / 10.0);
				Uwid = qMax(style.font().strokeWidth(style.fontSize() / 10.0), 1.0);
			}
			if (style.baselineOffset() != 0)
				Upos += (style.fontSize() / 10.0) * (style.baselineOffset() / 1000.0);
			if (style.fillColor() != CommonStrings::None)
				tmp2 += putColor(style.fillColor(), style.fillShade(), false);
			tmp2 += FToStr(Uwid)+" w\n";
			if (style.effects() & ScStyle_Subscript)
			{
				tmp2 += FToStr(x+hl->glyph.xoffset-kern)+" "+FToStr(-y-hl->glyph.yoffset+Upos)+" m\n";
				tmp2 += FToStr(x+hl->glyph.xoffset+Ulen)+" "+FToStr(-y-hl->glyph.yoffset+Upos)+" l\n";
			}
			else
			{
				tmp2 += FToStr(x+hl->glyph.xoffset-kern)+" "+FToStr(-y+Upos)+" m\n";
				tmp2 += FToStr(x+hl->glyph.xoffset+Ulen)+" "+FToStr(-y+Upos)+" l\n";
			}
			tmp2 += "S\n";
		}
		if (!style.font().hasNames())
		{
			if (glyph != style.font().char2CMap(QChar(' ')))
			{
				if ((style.strokeColor() != CommonStrings::None) && (style.effects() & ScStyle_Outline))
				{
					tmp2 += FToStr((tsz * style.outlineWidth() / 1000.0) / tsz)+" w\n[] 0 d\n0 J\n0 j\n";
					tmp2 += StrokeColor;
				}
				if (style.fillColor() != CommonStrings::None)
					tmp2 += FillColor;
				tmp2 += "q\n";
				if (ite->itemType() == PageItem::PathText)
				{
					QMatrix trafo = QMatrix( 1, 0, 0, -1, -hl->PRot, 0 );
					if (ite->textPathFlipped)
						trafo *= QMatrix(1, 0, 0, -1, 0, 0);
					if (ite->textPathType == 0)
						trafo *= QMatrix( hl->PtransX, -hl->PtransY, -hl->PtransY, -hl->PtransX, hl->glyph.xoffset, -hl->glyph.yoffset );
					else if (ite->textPathType == 1)
						trafo *= QMatrix(1, 0, 0, -1, hl->glyph.xoffset, -hl->glyph.yoffset );
					tmp2 += FToStr(trafo.m11())+" "+FToStr(trafo.m12())+" "+FToStr(trafo.m21())+" "+FToStr(trafo.m22())+" "+FToStr(trafo.dx())+" "+FToStr(trafo.dy())+" cm\n";
				}
				if (!ite->asPathText())
				{
					if (ite->reversed())
					{
						double wid = style.font().charWidth(chstr[0], style.fontSize()) * (hl->glyph.scaleH);
						tmp2 += "1 0 0 1 "+FToStr(x+hl->glyph.xoffset)+" "+FToStr((y+hl->glyph.yoffset - (tsz / 10.0)) * -1 + ((tsz / 10.0) * (style.baselineOffset() / 1000.0)))+" cm\n";
						tmp2 += "-1 0 0 1 0 0 cm\n";
						tmp2 += "1 0 0 1 "+FToStr(-wid)+" 0 cm\n";
						tmp2 += FToStr(tsz / 10.0)+" 0 0 "+FToStr(tsz / 10.0)+" 0 0 cm\n";
					}
					else
					{
						tmp2 += FToStr(tsz / 10.0)+" 0 0 "+FToStr(tsz / 10.0)+" "+FToStr(x+hl->glyph.xoffset)+" "+FToStr((y+hl->glyph.yoffset - (tsz / 10.0)) * -1 + ((tsz / 10.0) * (style.baselineOffset() / 1000.0)))+" cm\n";
					}
				}
				else
				{
					if (ite->BaseOffs != 0)
						tmp2 += "1 0 0 1 0 "+FToStr( -ite->BaseOffs)+" cm\n";
					tmp2 += FToStr(tsz / 10.0)+" 0 0 "+FToStr(tsz / 10.0)+" 0 "+FToStr(tsz / 10.0)+" cm\n";
				}
				if (hl->glyph.scaleV != 1.0)
					tmp2 += "1 0 0 1 0 "+FToStr( (((tsz / 10.0) - (tsz / 10.0) * (hl->glyph.scaleV)) / (tsz / 10.0)) * -1)+" cm\n";
				tmp2 += FToStr(qMax(hl->glyph.scaleH, 0.1))+" 0 0 "+FToStr(qMax(hl->glyph.scaleV, 0.1))+" 0 0 cm\n";
				if (style.fillColor() != CommonStrings::None)
					tmp2 += "/"+style.font().psName().replace( QRegExp("[\\s\\/\\{\\[\\]\\}\\<\\>\\(\\)\\%]"), "_" )+QString::number(glyph)+" Do\n";
				if (style.effects() & ScStyle_Outline)
				{
					FPointArray gly = style.font().glyphOutline(glyph);
					QMatrix mat;
					mat.scale(0.1, 0.1);
					gly.map(mat);
					bool nPath = true;
					FPoint np;
					if (gly.size() > 3)
					{
						for (uint poi=0; poi<gly.size()-3; poi += 4)
						{
							if (gly.point(poi).x() > 900000)
							{
								tmp2 += "h\n";
								nPath = true;
								continue;
							}
							if (nPath)
							{
								np = gly.point(poi);
								tmp2 += FToStr(np.x())+" "+FToStr(-np.y())+" m\n";
								nPath = false;
							}
							np = gly.point(poi+1);
							tmp2 += FToStr(np.x())+" "+FToStr(-np.y())+" ";
							np = gly.point(poi+3);
							tmp2 += FToStr(np.x())+" "+FToStr(-np.y())+" ";
							np = gly.point(poi+2);
							tmp2 += FToStr(np.x())+" "+FToStr(-np.y())+" c\n";
						}
					}
					tmp2 += "s\n";
				}
				tmp2 += "Q\n";
			}
		}
		else
		{
			if (style.strokeColor() != CommonStrings::None)
			{
				if ((style.effects() & ScStyle_Underline) || (style.effects() & ScStyle_Strikethrough))
					tmp2 += StrokeColor;
			}
			if (style.fillColor() != CommonStrings::None)
			{
				if ((style.effects() & ScStyle_Underline) || (style.effects() & ScStyle_Strikethrough))
					tmp2 += FillColor;
			}
			if (glyph != style.font().char2CMap(QChar(' ')))
			{
				uint idx = hl->glyph.glyph;
				uint idx1;
				if (Options.SubsetList.contains(style.font().replacementName()))
					idx1 = Type3Fonts[UsedFontsP[style.font().replacementName()]][idx] / 255;
				else
					idx1 = idx / 224;
				tmp += UsedFontsP[style.font().replacementName()]+"S"+QString::number(idx1)+" "+FToStr(tsz / 10.0)+" Tf\n";
				if (style.strokeColor() != CommonStrings::None)
					tmp += StrokeColor;
				if (style.fillColor() != CommonStrings::None)
					tmp += FillColor;
				if (style.effects() & 4)
					tmp += FToStr(tsz * style.outlineWidth() / 10000.0) + (style.fillColor() != CommonStrings::None ? " w 2 Tr\n" : " w 1 Tr\n");
				else
					tmp += "0 Tr\n";
				if (!ite->asPathText())
				{
					if (ite->reversed())
					{
						double wtr = hl->glyph.xadvance;
						tmp +=  FToStr(-qMax(hl->glyph.scaleH, 0.1))+" 0 0 "+FToStr(qMax(hl->glyph.scaleV, 0.1)) +" "+FToStr(x+hl->glyph.xoffset+wtr)+" "+FToStr(-y-hl->glyph.yoffset+(style.fontSize() / 10.0) * (style.baselineOffset() / 1000.0))+" Tm\n";
					}
					else
						tmp +=  FToStr(qMax(hl->glyph.scaleH, 0.1))+" 0 0 "+FToStr(qMax(hl->glyph.scaleV, 0.1))+" "+FToStr(x+hl->glyph.xoffset)+" "+FToStr(-y-hl->glyph.yoffset+(style.fontSize() / 10.0) * (style.baselineOffset() / 1000.0))+" Tm\n";
				}
				else
					tmp += FToStr(qMax(hl->glyph.scaleH, 0.1))+" 0 0 "+FToStr(qMax(hl->glyph.scaleV, 0.1))+" 0 0 Tm\n";
				uchar idx2;
				if (Options.SubsetList.contains(style.font().replacementName()))
					idx2 = Type3Fonts[UsedFontsP[style.font().replacementName()]][idx] % 255;
				else
					idx2 = idx % 224 + 32;
				tmp += "<"+QString(toHex(idx2))+"> Tj\n";
			}
		}
		if ((style.effects() & ScStyle_Strikethrough) && (chstr != SpecialChars::PARSEP))
		{
			//		double Ulen = style.font().charWidth(chstr[0], style.fontSize()) * (hl->glyph.scaleH);
			double Ulen = hl->glyph.xadvance;
			double Upos, Uwid, kern;
			if (hl->effects() & ScStyle_StartOfLine)
				kern = 0;
			else
				kern = style.fontSize() * style.tracking() / 10000.0;
			if ((style.strikethruOffset() != -1) || (style.strikethruWidth() != -1))
			{
				if (style.strikethruOffset() != -1)
					Upos = (style.strikethruOffset() / 1000.0) * (style.font().ascent(style.fontSize() / 10.0));
				else
					Upos = style.font().strikeoutPos(style.fontSize() / 10.0);
				if (style.strikethruWidth() != -1)
					Uwid = (style.strikethruWidth() / 1000.0) * (style.fontSize() / 10.0);
				else
					Uwid = qMax(style.font().strokeWidth(style.fontSize() / 10.0), 1.0);
			}
			else
			{
				Upos = style.font().strikeoutPos(style.fontSize() / 10.0);
				Uwid = qMax(style.font().strokeWidth(style.fontSize() / 10.0), 1.0);
			}
			if (style.baselineOffset() != 0)
				Upos += (style.fontSize() / 10.0) * (style.baselineOffset() / 1000.0);
			if (style.fillColor() != CommonStrings::None)
				tmp2 += putColor(style.fillColor(), style.fillShade(), false);
			tmp2 += FToStr(Uwid)+" w\n";
			tmp2 += FToStr(x+hl->glyph.xoffset-kern)+" "+FToStr(-y-hl->glyph.yoffset+Upos)+" m\n";
			tmp2 += FToStr(x+hl->glyph.xoffset+Ulen)+" "+FToStr(-y-hl->glyph.yoffset+Upos)+" l\n";
			tmp2 += "S\n";
		}
		if (ite->asPathText())
		{
			tmp += "ET\nQ\n"+tmp2;
			tmp2 = "";
		}
	}
	if (hl->glyph.more) {
		// ugly hack until setTextCh interface is changed
		ScText hl2(*hl);
		hl2.glyph = *(hl->glyph.more);
		setTextCh(ite, PNr, x + hl->glyph.xadvance, y, d, tmp, tmp2, &hl2, pstyle, pag);
		// don't let hl2's destructor delete these!
		hl2.glyph.more = 0;
	}
	
#endif
}

QString PDFLibCore::SetFarbe(const QString& farbe, double Shade)
{
	const ScColor& col = doc.PageColors[farbe];
	return SetFarbe(col, Shade);
}

QString PDFLibCore::SetFarbe(const ScColor& farbe, double Shade)
{
	QString tmp;
	RGBColor rgb;
	CMYKColor cmyk;
	int h, s, v, k;
	ScColor tmpC(farbe);
	QColor tmpR;
	if (Options.isGrayscale)
	{
		tmpR = ScColorEngine::getShadeColor(tmpC, &doc, Shade);
		tmpR.rgb(&h, &s, &v);
		tmp = FToStr((0.3 * h + 0.59 * s + 0.11 * v) / 255.0);
		return tmp;
	}
	if (Options.UseRGB)
	{
		tmpR = ScColorEngine::getShadeColor(tmpC, &doc, Shade);
		tmpR.rgb(&h, &s, &v);
		tmp = FToStr(h / 255.0)+" "+FToStr(s / 255.0)+" "+FToStr(v / 255.0);
	}
	else
	{
		if ((doc.HasCMS) && (Options.UseProfiles))
		{
			if (tmpC.getColorModel() == colorModelCMYK)
			{
				ScColorEngine::getShadeColorCMYK(tmpC, &doc, cmyk, Shade);
				cmyk.getValues(h, s, v, k);
				tmp = FToStr(h / 255.0)+" "+FToStr(s / 255.0)+" "+FToStr(v / 255.0)+" "+FToStr(k / 255.0);
			}
			else
			{
				if (Options.SComp == 3)
				{
					ScColorEngine::getShadeColorRGB(tmpC, &doc, rgb, Shade);
					rgb.getValues(h, s, v);
					tmp = FToStr(h / 255.0)+" "+FToStr(s / 255.0)+" "+FToStr(v / 255.0);
				}
				else
				{
					ScColorEngine::getShadeColorCMYK(tmpC, &doc, cmyk, Shade);
					cmyk.getValues(h, s, v, k);
					tmp = FToStr(h / 255.0)+" "+FToStr(s / 255.0)+" "+FToStr(v / 255.0)+" "+FToStr(k / 255.0);
				}
			}
		}
		else
		{
			ScColorEngine::getShadeColorCMYK(tmpC, &doc, cmyk, Shade);
			cmyk.getValues(h, s, v, k);
			tmp = FToStr(h / 255.0)+" "+FToStr(s / 255.0)+" "+FToStr(v / 255.0)+" "+FToStr(k / 255.0);
		}
	}
	return tmp;
}

QString PDFLibCore::SetFarbeGrad(const QString& farbe, double Shade)
{
	QString tmp;
	RGBColor rgb;
	CMYKColor cmyk;
	int h, s, v, k;
	ScColor tmpC(doc.PageColors[farbe]);
	QColor tmpR;
	if (Options.isGrayscale)
	{
		tmpR = ScColorEngine::getShadeColor(tmpC, &doc, Shade);
		tmpR.rgb(&h, &s, &v);
		tmp = FToStr((0.3 * h + 0.59 * s + 0.11 * v) / 255.0);
		return tmp;
	}
	if (Options.UseRGB)
	{
		tmpR = ScColorEngine::getShadeColor(tmpC, &doc, Shade);
		tmpR.rgb(&h, &s, &v);
		tmp = FToStr(h / 255.0)+" "+FToStr(s / 255.0)+" "+FToStr(v / 255.0);
	}
	else
	{
		if ((doc.HasCMS) && (Options.UseProfiles))
		{
			if (Options.SComp == 3)
			{
				ScColorEngine::getShadeColorRGB(tmpC, &doc, rgb, Shade);
				rgb.getValues(h, s, v);
				tmp = FToStr(h / 255.0)+" "+FToStr(s / 255.0)+" "+FToStr(v / 255.0);
			}
			else
			{
				ScColorEngine::getShadeColorCMYK(tmpC, &doc, cmyk, Shade);
				cmyk.getValues(h, s, v, k);
				tmp = FToStr(h / 255.0)+" "+FToStr(s / 255.0)+" "+FToStr(v / 255.0)+" "+FToStr(k / 255.0);
			}
		}
		else
		{
			ScColorEngine::getShadeColorCMYK(tmpC, &doc, cmyk, Shade);
			cmyk.getValues(h, s, v, k);
			tmp = FToStr(h / 255.0)+" "+FToStr(s / 255.0)+" "+FToStr(v / 255.0)+" "+FToStr(k / 255.0);
		}
	}
	return tmp;
}

QString PDFLibCore::SetClipPathImage(PageItem *ite)
{
	QString tmp("");
	if (ite->imageClip.size() > 3)
	{
		bool nPath = true;
		for (uint poi=0; poi<ite->imageClip.size()-3; poi += 4)
		{
			if (ite->imageClip.point(poi).x() > 900000)
			{
				tmp += "h\n";
				nPath = true;
				continue;
			}
			FPoint np;
			if (nPath)
			{
				np = ite->imageClip.point(poi);
				tmp += FToStr(np.x())+" "+FToStr(-np.y())+" m\n";
				nPath = false;
			}
			np = ite->imageClip.point(poi+1);
			tmp += FToStr(np.x())+" "+FToStr(-np.y())+" ";
			np = ite->imageClip.point(poi+3);
			tmp += FToStr(np.x())+" "+FToStr(-np.y())+" ";
			np = ite->imageClip.point(poi+2);
			tmp += FToStr(np.x())+" "+FToStr(-np.y())+" c\n";
		}
	}
	return tmp;
}

QString PDFLibCore::SetClipPath(PageItem *ite, bool poly)
{
	QString tmp("");
	if (ite->PoLine.size() > 3)
	{
		bool nPath = true;
		for (uint poi=0; poi<ite->PoLine.size()-3; poi += 4)
		{
			if (ite->PoLine.point(poi).x() > 900000)
			{
				if (poly)
					tmp += "h\n";
				nPath = true;
				continue;
			}
			FPoint np;
			if (nPath)
			{
				np = ite->PoLine.point(poi);
				tmp += FToStr(np.x())+" "+FToStr(-np.y())+" m\n";
				nPath = false;
			}
			np = ite->PoLine.point(poi+1);
			tmp += FToStr(np.x())+" "+FToStr(-np.y())+" ";
			np = ite->PoLine.point(poi+3);
			tmp += FToStr(np.x())+" "+FToStr(-np.y())+" ";
			np = ite->PoLine.point(poi+2);
			tmp += FToStr(np.x())+" "+FToStr(-np.y())+" c\n";
		}
	}
	return tmp;
}

QString PDFLibCore::SetClipPathArray(FPointArray *ite, bool poly)
{
	QString tmp("");
	if (ite->size() > 3)
	{
		bool nPath = true;
		for (uint poi=0; poi<ite->size()-3; poi += 4)
		{
			if (ite->point(poi).x() > 900000)
			{
				if (poly)
					tmp += "h\n";
				nPath = true;
				continue;
			}
			FPoint np;
			if (nPath)
			{
				np = ite->point(poi);
				tmp += FToStr(np.x())+" "+FToStr(-np.y())+" m\n";
				nPath = false;
			}
			np = ite->point(poi+1);
			tmp += FToStr(np.x())+" "+FToStr(-np.y())+" ";
			np = ite->point(poi+3);
			tmp += FToStr(np.x())+" "+FToStr(-np.y())+" ";
			np = ite->point(poi+2);
			tmp += FToStr(np.x())+" "+FToStr(-np.y())+" c\n";
		}
	}
	return tmp;
}

QString PDFLibCore::PDF_TransparenzFill(PageItem *currItem)
{
	StartObj(ObjCounter);
	QString ShName = ResNam+QString::number(ResCount);
	Transpar[ShName] = ObjCounter;
	ResCount++;
	ObjCounter++;
	PutDoc("<< /Type /ExtGState\n");
	PutDoc("/ca "+FToStr(1.0 - currItem->fillTransparency())+"\n");
	PutDoc("/SMask /None\n/AIS false\n/OPM 1\n");
	PutDoc("/BM /");
	switch (currItem->fillBlendmode())
	{
		case 0:
			PutDoc("Normal");
			break;
		case 1:
			PutDoc("Darken");
			break;
		case 2:
			PutDoc("Lighten");
			break;
		case 3:
			PutDoc("Multiply");
			break;
		case 4:
			PutDoc("Screen");
			break;
		case 5:
			PutDoc("Overlay");
			break;
		case 6:
			PutDoc("HardLight");
			break;
		case 7:
			PutDoc("SoftLight");
			break;
		case 8:
			PutDoc("Difference");
			break;
		case 9:
			PutDoc("Exclusion");
			break;
		case 10:
			PutDoc("ColorDodge");
			break;
		case 11:
			PutDoc("ColorBurn");
			break;
		case 12:
			PutDoc("Hue");
			break;
		case 13:
			PutDoc("Saturation");
			break;
		case 14:
			PutDoc("Color");
			break;
		case 15:
			PutDoc("Luminosity");
			break;
	}
	PutDoc("\n>>\nendobj\n");
	QString tmp("/"+ShName+" gs\n");
	return tmp;
}

QString PDFLibCore::PDF_TransparenzStroke(PageItem *currItem)
{
	StartObj(ObjCounter);
	QString ShName = ResNam+QString::number(ResCount);
	Transpar[ShName] = ObjCounter;
	ResCount++;
	ObjCounter++;
	PutDoc("<< /Type /ExtGState\n");
	PutDoc("/CA "+FToStr(1.0 - currItem->lineTransparency())+"\n");
	PutDoc("/SMask /None\n/AIS false\n/OPM 1\n");
	PutDoc("/BM /");
	switch (currItem->fillBlendmode())
	{
		case 0:
			PutDoc("Normal");
			break;
		case 1:
			PutDoc("Darken");
			break;
		case 2:
			PutDoc("Lighten");
			break;
		case 3:
			PutDoc("Multiply");
			break;
		case 4:
			PutDoc("Screen");
			break;
		case 5:
			PutDoc("Overlay");
			break;
		case 6:
			PutDoc("HardLight");
			break;
		case 7:
			PutDoc("SoftLight");
			break;
		case 8:
			PutDoc("Difference");
			break;
		case 9:
			PutDoc("Exclusion");
			break;
		case 10:
			PutDoc("ColorDodge");
			break;
		case 11:
			PutDoc("ColorBurn");
			break;
		case 12:
			PutDoc("Hue");
			break;
		case 13:
			PutDoc("Saturation");
			break;
		case 14:
			PutDoc("Color");
			break;
		case 15:
			PutDoc("Luminosity");
			break;
	}
	PutDoc("\n>>\nendobj\n");
	QString tmp("/"+ShName+" gs\n");
	return tmp;
}

QString PDFLibCore::PDF_Gradient(PageItem *currItem)
{
	if (currItem->GrType == 8)
	{
		QStack<PageItem*> groupStack;
		QString tmp2 = "";
		ScPattern *pat = &doc.docPatterns[currItem->pattern()];
		for (int em = 0; em < pat->items.count(); ++em)
		{
			PageItem* item = pat->items.at(em);
			if (item->isGroupControl)
			{
				tmp2 += "q\n";
				FPointArray cl = item->PoLine.copy();
				FPointArray clb = item->PoLine.copy();
				QMatrix mm;
				mm.translate(item->gXpos, item->gYpos);
				mm.rotate(item->rotation());
				cl.map( mm );
				item->PoLine = cl;
				tmp2 += SetClipPath(item);
				tmp2 += "h W* n\n";
				groupStack.push(item->groupsLastItem);
				item->PoLine = clb.copy();
				continue;
			}
			tmp2 += "q\n";
			tmp2 +=  "1 0 0 1 "+FToStr(item->gXpos)+" "+FToStr(-item->gYpos)+" cm\n";
			item->setXYPos(item->xPos() + ActPageP->xOffset(), item->yPos() + ActPageP->yOffset(), true);
			inPattern++;
			tmp2 += PDF_ProcessItem(item, doc.Pages->at(0), 0, true, true);
			item->setXYPos(item->xPos() - ActPageP->xOffset(), item->yPos() - ActPageP->yOffset(), true);
			inPattern--;
			tmp2 += "Q\n";
			if (groupStack.count() != 0)
			{
				while (item == groupStack.top())
				{
					tmp2 += "Q\n";
					groupStack.pop();
					if (groupStack.count() == 0)
						break;
				}
			}
		}
		if ((Options.Compress) && (CompAvail))
			tmp2 = CompressStr(&tmp2);
		StartObj(ObjCounter);
		ObjCounter++;
		PutDoc("<< /Type /Pattern\n");
		PutDoc("/PatternType 1\n");
		PutDoc("/PaintType 1\n");
		PutDoc("/TilingType 1\n");
		PutDoc("/BBox [ 0 0 "+FToStr(pat->width)+" "+FToStr(-pat->height)+" ]\n");
		QMatrix mpa;
		if (inPattern == 0)
		{
			mpa.translate(currItem->xPos() - ActPageP->xOffset(), ActPageP->height() - (currItem->yPos() - ActPageP->yOffset()));
			mpa.rotate(-currItem->rotation());
		}
		double patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation;
		currItem->patternTransform(patternScaleX, patternScaleY, patternOffsetX, patternOffsetY, patternRotation);
		mpa.translate(patternOffsetX, -patternOffsetY);
		mpa.rotate(-patternRotation);
		mpa.scale(pat->scaleX, pat->scaleY);
		mpa.scale(patternScaleX / 100.0 , patternScaleY / 100.0);
		PutDoc("/Matrix ["+FToStr(mpa.m11())+" "+FToStr(mpa.m12())+" "+FToStr(mpa.m21())+" "+FToStr(mpa.m22())+" "+FToStr(mpa.dx())+" "+FToStr(mpa.dy())+"]\n");
		PutDoc("/XStep "+FToStr(pat->width)+"\n");
		PutDoc("/YStep "+FToStr(pat->height)+"\n");
		PutDoc("/Resources << /ProcSet [/PDF /Text /ImageB /ImageC /ImageI]\n");
		if (Seite.ImgObjects.count() != 0)
		{
			PutDoc("/XObject <<\n");
			QMap<QString,int>::Iterator it;
			for (it = Seite.ImgObjects.begin(); it != Seite.ImgObjects.end(); ++it)
				PutDoc("/"+it.key()+" "+QString::number(it.data())+" 0 R\n");
			PutDoc(">>\n");
		}
		if (Seite.FObjects.count() != 0)
		{
			PutDoc("/Font << \n");
			QMap<QString,int>::Iterator it2;
			for (it2 = Seite.FObjects.begin(); it2 != Seite.FObjects.end(); ++it2)
				PutDoc("/"+it2.key()+" "+QString::number(it2.data())+" 0 R\n");
			PutDoc(">>\n");
		}
		if (Shadings.count() != 0)
		{
			PutDoc("/Shading << \n");
			QMap<QString,int>::Iterator it3;
			for (it3 = Shadings.begin(); it3 != Shadings.end(); ++it3)
				PutDoc("/"+it3.key()+" "+QString::number(it3.data())+" 0 R\n");
			PutDoc(">>\n");
		}
		if (Patterns.count() != 0)
		{
			PutDoc("/Pattern << \n");
			QMap<QString,int>::Iterator it3p;
			for (it3p = Patterns.begin(); it3p != Patterns.end(); ++it3p)
				PutDoc("/"+it3p.key()+" "+QString::number(it3p.data())+" 0 R\n");
			PutDoc(">>\n");
		}
		if (Transpar.count() != 0)
		{
			PutDoc("/ExtGState << \n");
			QMap<QString,int>::Iterator it3t;
			for (it3t = Transpar.begin(); it3t != Transpar.end(); ++it3t)
				PutDoc("/"+it3t.key()+" "+QString::number(it3t.data())+" 0 R\n");
			PutDoc(">>\n");
		}
		if ((ICCProfiles.count() != 0) || (spotMap.count() != 0))
		{
			PutDoc("/ColorSpace << \n");
			QMap<QString,ICCD>::Iterator it3c;
			if (ICCProfiles.count() != 0)
			{
				for (it3c = ICCProfiles.begin(); it3c != ICCProfiles.end(); ++it3c)
					PutDoc("/"+it3c.data().ResName+" "+QString::number(it3c.data().ResNum)+" 0 R\n");
			}
			QMap<QString,SpotC>::Iterator it3sc;
			if (spotMap.count() != 0)
			{
			for (it3sc = spotMap.begin(); it3sc != spotMap.end(); ++it3sc)
				PutDoc("/"+it3sc.data().ResName+" "+QString::number(it3sc.data().ResNum)+" 0 R\n");
			}
			PutDoc(">>\n");
		}
		PutDoc(">>\n");
		PutDoc("/Length "+QString::number(tmp2.length()));
		if ((Options.Compress) && (CompAvail))
			PutDoc("\n/Filter /FlateDecode");
		PutDoc(" >>\nstream\n"+EncStream(tmp2, ObjCounter-1)+"\nendstream\nendobj\n");
		Patterns.insert("Pattern"+currItem->pattern()+QString::number(ResCount), ObjCounter-1);
		QString tmp = "/Pattern cs\n";
		tmp += "/Pattern"+currItem->pattern()+QString::number(ResCount)+" scn\n";
		tmp += SetClipPath(currItem);
		if (currItem->fillRule)
			tmp += "h\nf*\n";
		else
			tmp += "h\nf\n";
		ResCount++;
		return tmp;
	}
	double StartX = currItem->GrStartX;
	double StartY = -currItem->GrStartY;
	double EndX = currItem->GrEndX;
	double EndY =- currItem->GrEndY;
	QList<double> StopVec;
	QList<double> TransVec;
	QStringList Gcolors;
	QStringList colorNames;
	QList<int> colorShades;
	QList<VColorStop*> cstops = currItem->fill_gradient.colorStops();
	StopVec.clear();
	TransVec.clear();
	Gcolors.clear();
	colorNames.clear();
	colorShades.clear();
	double lastStop = -1.0;
	double actualStop = 0.0;
	bool isFirst = true;
	if ((currItem->GrType == 5) || (currItem->GrType == 7))
	{
		for (uint cst = 0; cst < currItem->fill_gradient.Stops(); ++cst)
		{
			actualStop = cstops.at(cst)->rampPoint;
			if ((actualStop != lastStop) || (isFirst))
			{
				isFirst = false;
				lastStop = actualStop;
				TransVec.prepend(cstops.at(cst)->opacity);
				StopVec.prepend(sqrt(pow(EndX - StartX, 2) + pow(EndY - StartY,2))*cstops.at(cst)->rampPoint);
				Gcolors.prepend(SetFarbeGrad(cstops.at(cst)->name, cstops.at(cst)->shade));
				colorNames.prepend(cstops.at(cst)->name);
				colorShades.prepend(cstops.at(cst)->shade);
			}
		}
	}
	else
	{
		for (uint cst = 0; cst < currItem->fill_gradient.Stops(); ++cst)
		{
			actualStop = cstops.at(cst)->rampPoint;
			if ((actualStop != lastStop) || (isFirst))
			{
				isFirst = false;
				lastStop = actualStop;
				double x = (1 - cstops.at(cst)->rampPoint) * StartX + cstops.at(cst)->rampPoint * EndX;
				double y = (1 - cstops.at(cst)->rampPoint) * StartY + cstops.at(cst)->rampPoint * EndY;
				TransVec.append(cstops.at(cst)->opacity);
				StopVec.append(x);
				StopVec.append(y);
				Gcolors.append(SetFarbeGrad(cstops.at(cst)->name, cstops.at(cst)->shade));
				colorNames.append(cstops.at(cst)->name);
				colorShades.append(cstops.at(cst)->shade);
			}
		}
	}
	QString tmp(PDF_DoLinGradient(currItem, StopVec, TransVec, Gcolors, colorNames, colorShades));
	return tmp;
}

QString PDFLibCore::PDF_DoLinGradient(PageItem *currItem, QList<double> Stops, QList<double> Trans, const QStringList& Colors, QStringList colorNames, QList<int> colorShades)
{
	QString tmp("");
	bool first = true;
	bool oneSpot1 = false;
	bool oneSpot2 = false;
	bool twoSpot = false;
	bool spotMode = false;
	int cc, mc, yc, kc;
	CMYKColor cmykValues;
	double w = currItem->width();
	double h = -currItem->height();
	double w2 = currItem->GrStartX;
	double h2 = -currItem->GrStartY;
	int colorsCountm1=Colors.count()-1;
	for (int c = 0; c < colorsCountm1; ++c)
	{
		oneSpot1 = false;
		oneSpot2 = false;
		twoSpot = false;
		spotMode = false;
		QString spot1 = colorNames[c].simplifyWhiteSpace().replace("#", "#23").replace( QRegExp("[\\s\\/\\{\\[\\]\\}\\<\\>\\(\\)\\%]"), "#20" );
		QString spot2 = colorNames[c+1].simplifyWhiteSpace().replace("#", "#23").replace( QRegExp("[\\s\\/\\{\\[\\]\\}\\<\\>\\(\\)\\%]"), "#20" );
		QString TRes("");
		if ((Options.Version >= 14) && ((Trans.at(c+1) != 1) || (Trans.at(c) != 1)))
		{
			StartObj(ObjCounter);
			QString ShName = ResNam+QString::number(ResCount);
			Shadings[ShName] = ObjCounter;
			ResCount++;
			ObjCounter++;
			PutDoc("<<\n");
			if ((currItem->GrType == 5) || (currItem->GrType == 7))
				PutDoc("/ShadingType 3\n");
			else
				PutDoc("/ShadingType 2\n");
			PutDoc("/ColorSpace /DeviceGray\n");
			PutDoc("/BBox [0 "+FToStr(h)+" "+FToStr(w)+" 0]\n");
			if ((currItem->GrType == 5) || (currItem->GrType == 7))
			{
				PutDoc("/Coords ["+FToStr(w2)+" "+FToStr(h2)+" "+FToStr(Stops.at(c+1))+" "+FToStr(w2)+" "+FToStr(h2)+" "+FToStr(Stops.at(c))+"]\n");
				PutDoc("/Extend [true true]\n");
				PutDoc("/Function\n<<\n/FunctionType 2\n/Domain [0 1]\n");
				PutDoc("/C0 ["+FToStr(Trans.at(c+1))+"]\n");
				PutDoc("/C1 ["+FToStr(Trans.at(c))+"]\n");
			}
			else
			{
				PutDoc("/Coords ["+FToStr(Stops.at(c*2))+"  "+FToStr(Stops.at(c*2+1))+" "+FToStr(Stops.at(c*2+2))+" "+FToStr(Stops.at(c*2+3))+"]\n");
				PutDoc("/Extend [true true]\n");
				PutDoc("/Function\n<<\n/FunctionType 2\n/Domain [0 1]\n");
				PutDoc("/C0 ["+FToStr(Trans.at(c))+"]\n");
				PutDoc("/C1 ["+FToStr(Trans.at(c+1))+"]\n");
			}
			PutDoc("/N 1\n>>\n>>\nendobj\n");
			StartObj(ObjCounter);
			ObjCounter++;
			PutDoc("<<\n/Type /XObject\n/Subtype /Form\n");
			PutDoc("/FormType 1\n");
			PutDoc("/Group << /S /Transparency /CS /DeviceGray >>\n");
			PutDoc("/BBox [ 0 0 "+FToStr(currItem->width())+" "+FToStr(-currItem->height())+" ]\n");
			PutDoc("/Resources << /ProcSet [/PDF /Text /ImageB /ImageC /ImageI]\n");
			if (Shadings.count() != 0)
			{
				PutDoc("/Shading << \n");
				QMap<QString,int>::Iterator it3;
				for (it3 = Shadings.begin(); it3 != Shadings.end(); ++it3)
					PutDoc("/"+it3.key()+" "+QString::number(it3.data())+" 0 R\n");
				PutDoc(">>\n");
			}
			PutDoc(">>\n");
			QString stre = "";
			stre += "q\n"+SetClipPath(currItem)+"h\nW* n\n"+"/"+ShName+" sh\nQ\n";
			if ((Options.Compress) && (CompAvail))
				stre = CompressStr(&stre);
			PutDoc("/Length "+QString::number(stre.length())+"\n");
			if ((Options.Compress) && (CompAvail))
				PutDoc("/Filter /FlateDecode\n");
			PutDoc(">>\nstream\n"+EncStream(stre, ObjCounter-1)+"\nendstream\nendobj\n");
			Seite.XObjects[ResNam+QString::number(ResCount)] = ObjCounter-1;
			ResCount++;
			StartObj(ObjCounter);
			QString GXName = ResNam+QString::number(ResCount);
			Transpar[GXName] = ObjCounter;
			ResCount++;
			ObjCounter++;
			PutDoc("<< /Type /ExtGState\n");
			PutDoc("/SMask << /S /Luminosity /G "+QString::number(ObjCounter-2)+" 0 R >>\n");
			PutDoc("/BM /Normal\n>>\nendobj\n");
			TRes = GXName;
		}
		StartObj(ObjCounter);
		QString ShName = ResNam+QString::number(ResCount);
		Shadings[ShName] = ObjCounter;
		ResCount++;
		ObjCounter++;
		PutDoc("<<\n");
		if ((currItem->GrType == 5) || (currItem->GrType == 7))
			PutDoc("/ShadingType 3\n");
		else
			PutDoc("/ShadingType 2\n");
		if (Options.UseRGB)
			PutDoc("/ColorSpace /DeviceRGB\n");
		else
		{
			if (Options.isGrayscale)
				PutDoc("/ColorSpace /DeviceGray\n");
			else
			{
				if ((doc.HasCMS) && (Options.UseProfiles))
					PutDoc("/ColorSpace "+ICCProfiles[Options.SolidProf].ICCArray+"\n");
				else
				{
					if (spotMap.contains(colorNames[c]))
						oneSpot1 = true;
					else if  (spotMap.contains(colorNames[c+1]))
						oneSpot2 = true;
					if ((spotMap.contains(colorNames[c])) && (spotMap.contains(colorNames[c+1])))
					{
						oneSpot1 = false;
						oneSpot2 = false;
						twoSpot = true;
					}
					if ((!oneSpot1) && (!oneSpot2) && (!twoSpot) || (!Options.UseSpotColors)) 
						PutDoc("/ColorSpace /DeviceCMYK\n");
					else
					{
						spotMode = true;
						PutDoc("/ColorSpace [ /DeviceN [");
						if (oneSpot1)
							PutDoc(" /Cyan /Magenta /Yellow /Black /"+spot1+" ]\n");
						else if (oneSpot2)
							PutDoc(" /Cyan /Magenta /Yellow /Black /"+spot2+" ]\n");
						else if (twoSpot)
							PutDoc(" /"+spot1+" /"+spot2+" ]\n");
						PutDoc("/DeviceCMYK\n");
						PutDoc(QString::number(ObjCounter)+" 0 R\n");
						PutDoc("]\n");
					}
				}
			}
		}
		PutDoc("/BBox [0 "+FToStr(h)+" "+FToStr(w)+" 0]\n");
		if ((currItem->GrType == 5) || (currItem->GrType == 7))
		{
			PutDoc("/Coords ["+FToStr(w2)+" "+FToStr(h2)+" "+FToStr(Stops.at(c+1))+" "+FToStr(w2)+" "+FToStr(h2)+" "+FToStr(Stops.at(c))+"]\n");
			if (Colors.count() == 2)
				PutDoc("/Extend [true true]\n");
			else
			{
				if (first)
					PutDoc("/Extend [false true]\n");
				else
				{
					if (c == Colors.count()-2)
						PutDoc("/Extend [true false]\n");
					else
						PutDoc("/Extend [false false]\n");
				}
			}
			first = false;
			PutDoc("/Function\n<<\n/FunctionType 2\n/Domain [0 1]\n");
			if (Options.UseSpotColors)
			{
				if (oneSpot1)
				{
					PutDoc("/C1 [0 0 0 0 "+FToStr(colorShades[c] / 100.0)+"]\n");
					PutDoc("/C0 ["+Colors[c+1]+" 0 ]\n");
				}
				else if (oneSpot2)
				{
					PutDoc("/C1 ["+Colors[c]+" 0 ]\n");
					PutDoc("/C0 [0 0 0 0 "+FToStr(colorShades[c+1] / 100.0)+"]\n");
				}
				else if (twoSpot)
				{
					PutDoc("/C1 ["+FToStr(colorShades[c] / 100.0)+" 0]\n");
					PutDoc("/C0 [0 "+FToStr(colorShades[c+1] / 100.0)+"]\n");
				}
				else
				{
					PutDoc("/C1 ["+Colors[c]+"]\n");
					PutDoc("/C0 ["+Colors[c+1]+"]\n");
				}
			}
			else
			{
				PutDoc("/C0 ["+Colors[c+1]+"]\n");
				PutDoc("/C1 ["+Colors[c]+"]\n");
			}
		}
		else
		{
			PutDoc("/Coords ["+FToStr(Stops.at(c*2))+"  "+FToStr(Stops.at(c*2+1))+" "+FToStr(Stops.at(c*2+2))+" "+FToStr(Stops.at(c*2+3))+"]\n");
			if (Colors.count() == 2)
				PutDoc("/Extend [true true]\n");
			else
			{
				if (first)
					PutDoc("/Extend [true false]\n");
				else
				{
					if (c == Colors.count()-2)
						PutDoc("/Extend [false true]\n");
					else
						PutDoc("/Extend [false false]\n");
				}
			}
			first = false;
			PutDoc("/Function\n<<\n/FunctionType 2\n/Domain [0 1]\n");
			if (Options.UseSpotColors)
			{
				if (oneSpot1)
				{
					PutDoc("/C0 [0 0 0 0 "+FToStr(colorShades[c] / 100.0)+"]\n");
					PutDoc("/C1 ["+Colors[c+1]+" 0 ]\n");
				}
				else if (oneSpot2)
				{
					PutDoc("/C0 ["+Colors[c]+" 0 ]\n");
					PutDoc("/C1 [0 0 0 0 "+FToStr(colorShades[c+1] / 100.0)+"]\n");
				}
				else if (twoSpot)
				{
					PutDoc("/C0 ["+FToStr(colorShades[c] / 100.0)+" 0]\n");
					PutDoc("/C1 [0 "+FToStr(colorShades[c+1] / 100.0)+"]\n");
				}
				else
				{
					PutDoc("/C0 ["+Colors[c]+"]\n");
					PutDoc("/C1 ["+Colors[c+1]+"]\n");
				}
			}
			else
			{
				PutDoc("/C0 ["+Colors[c]+"]\n");
				PutDoc("/C1 ["+Colors[c+1]+"]\n");
			}
		}
		PutDoc("/N 1\n>>\n>>\nendobj\n");
		if (spotMode)
		{
			QString colorDesc;
			StartObj(ObjCounter);
			ObjCounter++;
			PutDoc("<<\n/FunctionType 4\n");
			if (twoSpot)
			{
				PutDoc("/Domain [0.0 1.0 0.0 1.0]\n");
				ScColorEngine::getCMYKValues(doc.PageColors[colorNames[c]], &doc, cmykValues);
				cmykValues.getValues(cc, mc, yc, kc);
				colorDesc = "{\nexch\n";
				colorDesc += "dup "+FToStr(static_cast<double>(cc) / 255.0)+" mul exch\n";
				colorDesc += "dup "+FToStr(static_cast<double>(mc) / 255.0)+" mul exch\n";
				colorDesc += "dup "+FToStr(static_cast<double>(yc) / 255.0)+" mul exch\n";
				colorDesc += "dup "+FToStr(static_cast<double>(kc) / 255.0)+" mul exch pop 5 -1 roll\n";
				ScColorEngine::getCMYKValues(doc.PageColors[colorNames[c+1]], &doc, cmykValues);
				cmykValues.getValues(cc, mc, yc, kc);
				colorDesc += "dup "+FToStr(static_cast<double>(cc) / 255.0)+" mul 6 -1 roll add dup 1.0 gt {pop 1.0} if 5 1 roll\n";
				colorDesc += "dup "+FToStr(static_cast<double>(mc) / 255.0)+" mul 5 -1 roll add dup 1.0 gt {pop 1.0} if 4 1 roll\n";
				colorDesc += "dup "+FToStr(static_cast<double>(yc) / 255.0)+" mul 4 -1 roll add dup 1.0 gt {pop 1.0} if 3 1 roll\n";
				colorDesc += "dup "+FToStr(static_cast<double>(kc) / 255.0)+" mul 3 -1 roll add dup 1.0 gt {pop 1.0} if 2 1 roll pop\n}\n";
			}
			else
			{
				PutDoc("/Domain [0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0]\n");
				if (oneSpot1)
				{
					ScColorEngine::getCMYKValues(doc.PageColors[colorNames[c]], &doc, cmykValues);
					cmykValues.getValues(cc, mc, yc, kc);
				}
				else
				{
					ScColorEngine::getCMYKValues(doc.PageColors[colorNames[c+1]], &doc, cmykValues);
					cmykValues.getValues(cc, mc, yc, kc);
				}
				colorDesc = "{\ndup "+FToStr(static_cast<double>(cc) / 255.0)+" mul 6 -1 roll add dup 1.0 gt {pop 1.0} if 5 1 roll\n";
				colorDesc += "dup "+FToStr(static_cast<double>(mc) / 255.0)+" mul 5 -1 roll add dup 1.0 gt {pop 1.0} if 4 1 roll\n";
				colorDesc += "dup "+FToStr(static_cast<double>(yc) / 255.0)+" mul 4 -1 roll add dup 1.0 gt {pop 1.0} if 3 1 roll\n";
				colorDesc += "dup "+FToStr(static_cast<double>(kc) / 255.0)+" mul 3 -1 roll add dup 1.0 gt {pop 1.0} if 2 1 roll pop\n}\n";
			}
			PutDoc("/Range [0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0]\n");
			PutDoc("/Length "+QString::number(colorDesc.length()+1)+"\n");
			PutDoc(">>\nstream\n"+EncStream(colorDesc, ObjCounter-1)+"\nendstream\nendobj\n");
		}
		tmp += "q\n";
		if ((Options.Version >= 14) && ((Trans.at(c+1) != 1) || (Trans.at(c) != 1)))
			tmp += "/"+TRes+" gs\n";
		tmp += SetClipPath(currItem);
		tmp += "h\nW* n\n";
		tmp += "/"+ShName+" sh\nQ\n";
	}
	return tmp;
}

void PDFLibCore::PDF_Annotation(PageItem *ite, uint)
{
	ScImage img;
	ScImage img2;
	ScImage img3;
	QMap<int, QString> ind2PDFabr;
	static const QString bifonts[] = {"/Courier", "/Courier-Bold", "/Courier-Oblique", "/Courier-BoldOblique",
												"/Helvetica", "/Helvetica-Bold", "/Helvetica-Oblique", "/Helvetica-BoldOblique",
												"/Times-Roman", "/Times-Bold", "/Times-Italic", "/Times-BoldItalic",
												"/ZapfDingbats", "/Symbol"};
	static const size_t ar = sizeof(bifonts) / sizeof(*bifonts);
	for (uint a = 0; a < ar; ++a)
		ind2PDFabr[a] = bifonts[a];
	double x = ite->xPos() - ActPageP->xOffset();
	double y = ActPageP->height() - (ite->yPos()  - ActPageP->yOffset());
	double x2 = x+ite->width();
	double y2 = y-ite->height();
	QString bm("");
	QString cc;
	for (uint d = 0; d < static_cast<uint>(ite->itemText.length()); ++d)
	{
		cc = ite->itemText.text(d, 1);
		if ((cc == "(") || (cc == ")") || (cc == "\\"))
			bm += "\\";
		if (cc == QChar(13))
			cc = "\\r";
		bm += cc;
	}
	QString anTitle = ite->itemName().replace(".", "_" );
	QStringList bmst = QStringList::split("\\r", bm);
	const QString m[] = {"4", "5", "F", "l", "H", "n"};
	QString ct(m[ite->annotation().ChkStil()]);
	StartObj(ObjCounter);
	Seite.AObjects.append(ObjCounter);
	ObjCounter++;
	PutDoc("<<\n/Type /Annot\n");
	switch (ite->annotation().Type())
	{
		case 0:
		case 10:
			PutDoc("/Subtype /Text\n");
			PutDoc("/Contents "+EncString("("+bm+")",ObjCounter-1)+"\n");
			break;
		case 1:
		case 11:
			PutDoc("/Subtype /Link\n");
			if (ite->annotation().ActionType() == 2)
			{
				PutDoc("/Dest /"+NDnam+QString::number(NDnum)+"\n");
				Dest de;
				de.Name = NDnam+QString::number(NDnum);
				de.Seite = ite->annotation().Ziel();
				de.Act = ite->annotation().Action();
				NamedDest.append(de);
				NDnum++;
			}
			if (ite->annotation().ActionType() == 7)
			{
				PutDoc("/A << /Type /Action /S /GoToR\n/F "+ EncString("("+Path2Relative(ite->annotation().Extern())+")",ObjCounter-1)+"\n");
				PutDoc("/D ["+QString::number(ite->annotation().Ziel())+" /XYZ "+ite->annotation().Action()+"]\n>>\n");
			}
			if (ite->annotation().ActionType() == 8)
				PutDoc("/A << /Type /Action /S /URI\n/URI "+ EncString("("+ite->annotation().Extern()+")",ObjCounter-1)+"\n>>\n");
			break;
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			Seite.FormObjects.append(ObjCounter-1);
			PutDoc("/Subtype /Widget\n");
			PutDoc("/T "+EncString("("+anTitle+")",ObjCounter-1)+"\n");
			if (!ite->annotation().ToolTip().isEmpty())
				PutDoc("/TU "+EncString("("+PDFEncode(ite->annotation().ToolTip())+")",ObjCounter-1)+"\n");
			PutDoc("/F ");
			QString mm[] = {"4", "2", "0", "32"};
			PutDoc(mm[ite->annotation().Vis()]);
			PutDoc("\n");
			PutDoc("/BS << /Type /Border /W ");
			PutDoc(ite->annotation().borderColor() != CommonStrings::None ? QString::number(ite->annotation().Bwid()) : QString("0"));
			PutDoc(" /S /");
			const QString x[] = {"S", "D", "U", "B", "I"};
			PutDoc(x[ite->annotation().Bsty()]);
			PutDoc(" >>\n");
			QString cnx = "(";
			if (ite->annotation().Type() == 4)
				cnx += "/"+StdFonts["/ZapfDingbats"];
			else
			{
				if (Options.Version < 14)
					cnx += "/"+StdFonts[ind2PDFabr[ite->annotation().Font()]];
				else
					cnx += UsedFontsF[ite->itemText.defaultStyle().charStyle().font().replacementName()];
//					cnx += UsedFontsP[ite->itemText.defaultStyle().charStyle().font().replacementName()]+"Form";
			}
			cnx += " "+FToStr(ite->itemText.defaultStyle().charStyle().fontSize() / 10.0)+" Tf";
			if (ite->itemText.defaultStyle().charStyle().fillColor() != CommonStrings::None)
				cnx += " "+ putColor(ite->itemText.defaultStyle().charStyle().fillColor(), ite->itemText.defaultStyle().charStyle().fillShade(), true);
			if (ite->fillColor() != CommonStrings::None)
				cnx += " "+ putColor(ite->fillColor(), ite->fillShade(), false);
			cnx += ")";
			PutDoc("/DA "+EncString(cnx,ObjCounter-1)+"\n");
			int flg = ite->annotation().Flag();
			if (Options.Version == 13)
				flg = flg & 522247;
			PutDoc("/Ff "+QString::number(flg)+"\n");
			QString xs[] = {"N", "I", "O", "P"};
			switch (ite->annotation().Type())
			{
				case 2:
					PutDoc("/FT /Btn\n");
					PutDoc("/H /");
					PutDoc(xs[ite->annotation().Feed()]);
					PutDoc("\n");
					PutDoc("/Q 0\n");
					break;
				case 3:
					PutDoc("/FT /Tx\n");
					PutDoc("/V "+EncString("("+bm+")",ObjCounter-1)+"\n");
					PutDoc("/DV "+EncString("("+bm+")",ObjCounter-1)+"\n");
					PutDoc("/Q "+QString::number(qMin(ite->itemText.defaultStyle().alignment(), ParagraphStyle::Rightaligned))+"\n");
					PutDoc("/AP << /N "+QString::number(ObjCounter)+" 0 R >>\n");
					if (ite->annotation().MaxChar() != -1)
						PutDoc("/MaxLen "+QString::number(ite->annotation().MaxChar())+"\n");
					break;
				case 4:
					PutDoc("/FT /Btn\n");
					PutDoc(ite->annotation().IsChk() ? "/V /Yes\n/DV /Yes\n/AS /Yes\n" :
								"/V /Off\n/DV /Off\n/AS /Off\n");
					PutDoc("/AP << /N << /Yes "+QString::number(ObjCounter)+" 0 R >> >>\n");
					break;
				case 5:
				case 6:
					PutDoc("/FT /Ch\n/V (");
					if (bmst.count() > 0)
						PutDoc(bmst[0]);
					PutDoc(")\n/DV ");
					cnx = "(";
					if (bmst.count() > 0)
						cnx += bmst[0];
					cnx += ")";
					PutDoc(EncString(cnx,ObjCounter-1)+"\n");
					PutDoc("/Opt [ ");
					for (int bmc = 0; bmc < bmst.count(); ++bmc)
						PutDoc(EncString("("+bmst[bmc]+")",ObjCounter-1)+"\n");
					PutDoc("]\n");
					PutDoc("/AP << /N "+QString::number(ObjCounter)+" 0 R >>\n");
					break;
			}
			PutDoc("/MK << ");
			if ((ite->annotation().Type() == 5) || (ite->annotation().Type() == 6))
			{
				PutDoc("/BG [ 1 1 1 ] ");
				if (ite->annotation().borderColor() != CommonStrings::None)
					PutDoc("/BC [ "+SetFarbe(ite->annotation().borderColor(), 100)+" ] ");
			}
      			else
			{
				if (ite->fillColor() != CommonStrings::None)
					PutDoc("/BG [ "+SetFarbe(ite->fillColor(), ite->fillShade())+" ] ");
				if (ite->annotation().borderColor() != CommonStrings::None)
					PutDoc("/BC [ "+SetFarbe(ite->annotation().borderColor(), 100)+" ] ");
			}
			int IconOb = 0;
			switch (ite->annotation().Type())
			{
				case 2:
					PutDoc("/CA "+EncString("("+bm+")",ObjCounter-1)+" ");
					if (!ite->annotation().RollOver().isEmpty())
						PutDoc("/RC "+ EncString("("+PDFEncode(ite->annotation().RollOver())+")",ObjCounter-1)+" ");
					if (!ite->annotation().Down().isEmpty())
						PutDoc("/AC "+ EncString("("+PDFEncode(ite->annotation().Down())+")",ObjCounter-1)+" ");
					if (ite->annotation().UseIcons())
					{
						if (!ite->Pfile.isEmpty())
						{
							IconOb += ite->pixm.hasAlpha() ? 3 : 2;
							PutDoc("/I "+QString::number(ObjCounter+IconOb-1)+" 0 R ");
						}
						if (!ite->Pfile2.isEmpty())
						{
							CMSettings cms(ite->doc(), "", 0);
							img.LoadPicture(ite->Pfile2, cms, false, false, ScImage::RGBData, 72);
							QByteArray im;
							im = img3.getAlpha(ite->Pfile2, true, false);
							IconOb += !im.isEmpty() ? 3 : 2;
							im.resize(0);
							PutDoc("/IX "+QString::number(ObjCounter+IconOb-1)+" 0 R ");
						}
						if (!ite->Pfile3.isEmpty())
						{
							CMSettings cms(ite->doc(), "", 0);
							img2.LoadPicture(ite->Pfile3, cms, false, false, ScImage::RGBData, 72);
							QByteArray im;
							im = img3.getAlpha(ite->Pfile3, true, false);
							IconOb += !im.isEmpty() ? 3 : 2;
							im.resize(0);
							PutDoc("/RI "+QString::number(ObjCounter+IconOb-1)+" 0 R ");
						}
						PutDoc("/TP "+QString::number(ite->annotation().IPlace())+" ");
						PutDoc("/IF << /SW /");
						QString x[] = {"A", "S", "B", "N"};
						PutDoc(x[ite->annotation().ScaleW()]);
						PutDoc(" /S /");
						PutDoc(ite->imageXScale() != ite->imageYScale() ? "A" : "P");
						PutDoc(" /A [ ");
						if ((ite->width()/ite->imageXScale() - ite->pixm.width()) != 0)
						{
							if (ite->annotation().ScaleW() == 3)
								PutDoc(FToStr(qMax(ite->imageXOffset() / (ite->width()/ite->imageXScale() - ite->pixm.width()), 0.01))+" ");
							else
								PutDoc("0.5 ");
						}
						else
							PutDoc("0 ");
						if ((ite->height()/ite->imageYScale() - ite->pixm.height()) != 0)
						{
							if (ite->annotation().ScaleW() == 3)
								PutDoc(FToStr(1.0 - qMax(ite->imageYOffset() / (ite->height()/ite->imageYScale() - ite->pixm.height()), 0.01)));
							else
								PutDoc("0.5");
						}
						else
							PutDoc("0");
						PutDoc(" ] >> ");
					}
					break;
				case 6:
				case 5:
				case 3:
					break;
				case 4:
					PutDoc("/CA "+EncString("("+ct+")",ObjCounter-1)+" ");
					break;
			}
			if (ite->rotation() != 0)
				PutDoc("/R "+QString::number((abs(static_cast<int>(ite->rotation())) / 90)*90)+" ");
			PutDoc(">>\n");
			if ((ite->annotation().ActionType() != 0) || (ite->annotation().AAact()))
			{
				if (ite->annotation().ActionType() == 7)
				{
					PutDoc("/A << /Type /Action /S /GoToR\n/F "+ EncString("("+Path2Relative(ite->annotation().Extern())+")",ObjCounter-1)+ "\n");
					PutDoc("/D ["+QString::number(ite->annotation().Ziel())+" /XYZ "+ite->annotation().Action()+"]\n>>\n");
				}
				if (ite->annotation().ActionType() == 5)
					PutDoc("/A << /Type /Action /S /ImportData\n/F "+ EncString("("+ite->annotation().Action()+")",ObjCounter-1)+" >>\n");
				if (ite->annotation().ActionType() == 4)
					PutDoc("/A << /Type /Action /S /ResetForm >>\n");
				if (ite->annotation().ActionType() == 3)
				{
					PutDoc("/A << /Type /Action /S /SubmitForm\n/F << /FS /URL /F "+ EncString("("+ite->annotation().Action()+")",ObjCounter-1)+" >>\n");
					if (ite->annotation().HTML())
						PutDoc("/Flags 4");
					PutDoc(">>\n");
				}
				if (ite->annotation().ActionType() == 1)
				{
					if (!ite->annotation().Action().isEmpty())
					{
						PutDoc("/A << /Type /Action /S /JavaScript /JS ");
						PutDoc(ite->annotation().Type() > 2 ? QString::number(ObjCounter+1+IconOb) :
						 QString::number(ObjCounter+IconOb));
						PutDoc(" 0 R >>\n");
					}
				}
				if (ite->annotation().AAact())
				{
					if (!ite->annotation().Action().isEmpty())
					{
						PutDoc("/A << /Type /Action /S /JavaScript /JS ");
						PutDoc(ite->annotation().Type() > 2 ? QString::number(ObjCounter+1+IconOb) :
						 QString::number(ObjCounter+IconOb));
						PutDoc(" 0 R >>\n");
					}
					PutDoc("/AA ");
					if (ite->annotation().Type() > 2)
						{
						if (!ite->annotation().Action().isEmpty())
							PutDoc(QString::number(ObjCounter+2+IconOb));
						else
							PutDoc(QString::number(ObjCounter+1+IconOb));
						}
					else
						{
						if (!ite->annotation().Action().isEmpty())
							PutDoc(QString::number(ObjCounter+1+IconOb));
						else
							PutDoc(QString::number(ObjCounter));
						}
					PutDoc(" 0 R\n");
					if (!ite->annotation().C_act().isEmpty())
						CalcFields.append(ObjCounter-1+IconOb);
				}
				if (ite->annotation().ActionType() == 2)
				{
					PutDoc("/A << /Type /Action /S /GoTo /D /"+NDnam+QString::number(NDnum)+" >>\n");
					Dest de;
					de.Name = NDnam+QString::number(NDnum);
					de.Seite = ite->annotation().Ziel();
					de.Act = ite->annotation().Action();
					NamedDest.append(de);
					NDnum++;
				}
			}
			break;
		}
	if ((ite->annotation().Type() < 2) || (ite->annotation().Type() > 9))
		PutDoc("/Border [ 0 0 0 ]\n");
	switch (((abs(static_cast<int>(ite->rotation())) / 90)*90))
	{
		case 0:
			break;
		case 90:
			x = ite->xPos() - ActPageP->xOffset();
			y2 = ActPageP->height() - (ite->yPos()  - ActPageP->yOffset());
			x2 = x + ite->height();
			y = y2 + ite->width();
			break;
		case 180:
			x = ite->xPos() - ActPageP->xOffset() - ite->width();
			y2 = ActPageP->height() - (ite->yPos()  - ActPageP->yOffset());
			x2 = ite->xPos() - ActPageP->xOffset();
			y = y2 + ite->height();
			break;
		case 270:
			x = ite->xPos() - ActPageP->xOffset() - ite->height();
			y2 = ActPageP->height() - (ite->yPos()  - ActPageP->yOffset()) - ite->width();
			x2 = ite->xPos() - ActPageP->xOffset();
			y = ActPageP->height() - (ite->yPos()  - ActPageP->yOffset());
			break;
	}
	PutDoc("/Rect [ "+FToStr(x+bleedDisplacementX)+" "+FToStr(y2+bleedDisplacementY)+" "+FToStr(x2+bleedDisplacementX)+" "+FToStr(y+bleedDisplacementY)+" ]\n");
	PutDoc(">>\nendobj\n");
	if ((ite->annotation().Type() == 2) && (ite->annotation().UseIcons()))
	{
		if (!ite->Pfile.isEmpty())
		{
			PDF_Image(ite, ite->Pfile, ite->imageXScale(), ite->imageYScale(), ite->imageXOffset(), -ite->imageYOffset(), true);
			cc = QString::number(ite->pixm.width())+" 0 0 "+QString::number(ite->pixm.height())+" 0 0 cm\n";
			cc += "/"+ResNam+"I"+QString::number(ResCount-1)+" Do";
			PDF_xForm(ite->pixm.width(), ite->pixm.height(), cc);
		}
		if (!ite->Pfile2.isEmpty())
		{
			PDF_Image(ite, ite->Pfile2, ite->imageXScale(), ite->imageYScale(), ite->imageXOffset(), -ite->imageYOffset(), true);
			cc = QString::number(img.width())+" 0 0 "+QString::number(img.height())+" 0 0 cm\n";
			cc += "/"+ResNam+"I"+QString::number(ResCount-1)+" Do";
			PDF_xForm(img.width(), img.height(), cc);
		}
		if (!ite->Pfile3.isEmpty())
		{
			PDF_Image(ite, ite->Pfile3, ite->imageXScale(), ite->imageYScale(), ite->imageXOffset(), -ite->imageYOffset(), true);
			cc = QString::number(img2.width())+" 0 0 "+QString::number(img2.height())+" 0 0 cm\n";
			cc += "/"+ResNam+"I"+QString::number(ResCount-1)+" Do";
			PDF_xForm(img2.width(), img2.height(), cc);
		}
	}
	if (ite->annotation().Type() == 3)
	{
		cc = "";
		if (ite->fillColor() != CommonStrings::None)
			cc += putColor(ite->fillColor(), ite->fillShade(), false);
		cc += FToStr(x)+" "+FToStr(y2)+" "+FToStr(x2-x)+" "+FToStr(y-y2)+" re\nf\n";
		cc += "/Tx BMC\nBT\n";
		if (ite->itemText.defaultStyle().charStyle().fillColor() != CommonStrings::None)
			cc += putColor(ite->itemText.defaultStyle().charStyle().fillColor(), ite->itemText.defaultStyle().charStyle().fillShade(), true);
		if (Options.Version < 14)
			cc += "/"+StdFonts[ind2PDFabr[ite->annotation().Font()]];
		else
			cc += UsedFontsF[ite->itemText.defaultStyle().charStyle().font().replacementName()];
//			cc += UsedFontsP[ite->itemText.defaultStyle().charStyle().font().replacementName()]+"Form";
		cc += " "+FToStr(ite->itemText.defaultStyle().charStyle().fontSize() / 10.0)+" Tf\n";
		if (bmst.count() > 1)
		{
			cc += "1 0 0 1 0 0 Tm\n0 0 Td\n";
			for (int mz = 0; mz < bmst.count(); ++mz)
			{
				cc += EncString("("+bmst[mz]+")",ObjCounter-1);
				cc += " Tj\nT*\n";
			}
			cc += "ET\nEMC";
		}
		else
			cc += "1 0 0 1 0 0 Tm\n0 0 Td\n"+EncString("("+bm+")",ObjCounter-1)+" Tj\nET\nEMC";
		PDF_xForm(ite->width(), ite->height(), cc);
	}
	if (ite->annotation().Type() == 4)
	{
		cc = "q\nBT\n";
		if (ite->itemText.defaultStyle().charStyle().fillColor() != CommonStrings::None)
			cc += putColor(ite->itemText.defaultStyle().charStyle().fillColor(), ite->itemText.defaultStyle().charStyle().fillShade(), true);
		cc += "/"+StdFonts["/ZapfDingbats"]+" "+FToStr(ite->itemText.defaultStyle().charStyle().fontSize() / 10.0)+" Tf\n";
		cc += "0 0 Td\n("+ct+") Tj\nET\nQ";
		PDF_xForm(ite->width(), ite->height(), cc);
	}
	if ((ite->annotation().Type() == 5) || (ite->annotation().Type() == 6))
	{
		cc = "";
		cc += "1 g\n";
		cc += "0 0 "+FToStr(x2-x)+" "+FToStr(y-y2)+" re\nf\n";
		cc += QString::number(ite->annotation().Bwid())+" w\n";
		if (ite->annotation().borderColor() != CommonStrings::None)
			cc += putColor(ite->annotation().borderColor(), 100.0, false);
		else
			cc += "0 G\n";
		cc += "0 0 "+FToStr(x2-x)+" "+FToStr(y-y2)+" re\nS\n";
		cc += "/Tx BMC\nq\nBT\n";
		cc += "0 g\n";
		if (Options.Version < 14)
			cc += "/"+StdFonts[ind2PDFabr[ite->annotation().Font()]];
		else
			cc += UsedFontsF[ite->itemText.defaultStyle().charStyle().font().replacementName()];
//			cc += UsedFontsP[ite->itemText.defaultStyle().charStyle().font().replacementName()]+"Form";
		cc += " "+FToStr(ite->itemText.defaultStyle().charStyle().fontSize() / 10.0)+" Tf\n";
		cc += "1 0 0 1 0 0 Tm\n0 0 Td\n";
		if (bmst.count() > 0)
			cc += EncString("("+bmst[0]+")",ObjCounter-1);
		cc += " Tj\nET\nQ\nEMC";
		PDF_xForm(ite->width(), ite->height(), cc);
	}
	if ((ite->annotation().Type() > 1) && ((ite->annotation().ActionType() == 1) || (ite->annotation().AAact())) && (!ite->annotation().Action().isEmpty()))
		WritePDFStream(ite->annotation().Action());
	if ((ite->annotation().Type() > 1) && (ite->annotation().AAact()))
	{
		StartObj(ObjCounter);
		ObjCounter++;
		PutDoc("<<\n");
		int AAcoun = 0;
		if (!ite->annotation().E_act().isEmpty())
		{
			PutDoc("/E << /Type /Action /S /JavaScript /JS "+QString::number(ObjCounter+AAcoun)+" 0 R >>\n");
			AAcoun++;
		}
		if (!ite->annotation().X_act().isEmpty())
		{
			PutDoc("/X << /Type /Action /S /JavaScript /JS "+QString::number(ObjCounter+AAcoun)+" 0 R >>\n");
			AAcoun++;
		}
		if (!ite->annotation().D_act().isEmpty())
		{
			PutDoc("/D << /Type /Action /S /JavaScript /JS "+QString::number(ObjCounter+AAcoun)+" 0 R >>\n");
			AAcoun++;
		}
		if (!ite->annotation().Fo_act().isEmpty())
		{
			PutDoc("/Fo << /Type /Action /S /JavaScript /JS "+QString::number(ObjCounter+AAcoun)+" 0 R >>\n");
			AAcoun++;
		}
		if (!ite->annotation().Bl_act().isEmpty())
		{
			PutDoc("/Bl << /Type /Action /S /JavaScript /JS "+QString::number(ObjCounter+AAcoun)+" 0 R >>\n");
			AAcoun++;
		}
		if ((ite->annotation().Type() == 3) || (ite->annotation().Type() == 5) || (ite->annotation().Type() == 6))
		{
			if (!ite->annotation().K_act().isEmpty())
			{
				PutDoc("/K << /Type /Action /S /JavaScript /JS "+QString::number(ObjCounter+AAcoun)+
					" 0 R >>\n");
				AAcoun++;
			}
			if (!ite->annotation().F_act().isEmpty())
			{
				PutDoc("/F << /Type /Action /S /JavaScript /JS "+QString::number(ObjCounter+AAcoun)+
					" 0 R >>\n");
				AAcoun++;
			}
			if (!ite->annotation().V_act().isEmpty())
			{
				PutDoc("/V << /Type /Action /S /JavaScript /JS "+QString::number(ObjCounter+AAcoun)+
					" 0 R >>\n");
				AAcoun++;
			}
			if (!ite->annotation().C_act().isEmpty())
			{
				PutDoc("/C << /Type /Action /S /JavaScript /JS "+QString::number(ObjCounter+AAcoun)+
					" 0 R >>\n");
				AAcoun++;
			}
		}
		PutDoc(">>\nendobj\n");
		if (!ite->annotation().E_act().isEmpty())
			WritePDFStream(ite->annotation().E_act());
		if (!ite->annotation().X_act().isEmpty())
			WritePDFStream(ite->annotation().X_act());
		if (!ite->annotation().D_act().isEmpty())
			WritePDFStream(ite->annotation().D_act());
		if (!ite->annotation().Fo_act().isEmpty())
			WritePDFStream(ite->annotation().Fo_act());
		if (!ite->annotation().Bl_act().isEmpty())
			WritePDFStream(ite->annotation().Bl_act());
		if ((ite->annotation().Type() == 3) || (ite->annotation().Type() == 5) || (ite->annotation().Type() == 6))
		{
			if (!ite->annotation().K_act().isEmpty())
				WritePDFStream(ite->annotation().K_act());
			if (!ite->annotation().F_act().isEmpty())
				WritePDFStream(ite->annotation().F_act());
			if (!ite->annotation().V_act().isEmpty())
				WritePDFStream(ite->annotation().V_act());
			if (!ite->annotation().C_act().isEmpty())
				WritePDFStream(ite->annotation().C_act());
		}
	}
}

void PDFLibCore::WritePDFStream(const QString& cc)
{
	QString tmp(cc);
	if ((Options.Compress) && (CompAvail))
		tmp = CompressStr(&tmp);
	StartObj(ObjCounter);
	ObjCounter++;
	PutDoc("<< /Length "+QString::number(tmp.length()));  // moeglicherweise +1
	if ((Options.Compress) && (CompAvail))
		PutDoc("\n/Filter /FlateDecode");
	PutDoc(" >>\nstream\n"+EncStream(tmp, ObjCounter-1)+"\nendstream\nendobj\n");
}

void PDFLibCore::PDF_xForm(double w, double h, QString im)
{
	StartObj(ObjCounter);
	ObjCounter++;
	PutDoc("<<\n/Type /XObject\n/Subtype /Form\n");
	PutDoc("/BBox [ 0 0 "+FToStr(w)+" "+FToStr(h)+" ]\n");
	PutDoc("/Resources << /ProcSet [/PDF /Text /ImageB /ImageC /ImageI]\n");
	if (Seite.ImgObjects.count() != 0)
	{
		PutDoc("/XObject <<\n");
		QMap<QString,int>::Iterator it;
		for (it = Seite.ImgObjects.begin(); it != Seite.ImgObjects.end(); ++it)
			PutDoc("/"+it.key()+" "+QString::number(it.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if (Seite.FObjects.count() != 0)
	{
		PutDoc("/Font << \n");
		QMap<QString,int>::Iterator it2;
		for (it2 = Seite.FObjects.begin(); it2 != Seite.FObjects.end(); ++it2)
			PutDoc("/"+it2.key()+" "+QString::number(it2.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	PutDoc(">>\n");
	PutDoc("/Length "+QString::number(im.length())+"\n");
	PutDoc(">>\nstream\n"+EncStream(im, ObjCounter-1)+"\nendstream\nendobj\n");
	Seite.XObjects[ResNam+QString::number(ResCount)] = ObjCounter-1;
	ResCount++;
}

void PDFLibCore::PDF_Form(const QString& im)
{
	StartObj(ObjCounter);
	ObjCounter++;
	PutDoc("<<\n");
	PutDoc("/Resources << /ProcSet [/PDF /Text /ImageB /ImageC /ImageI]\n");
	if (Seite.FObjects.count() != 0)
	{
		PutDoc("/Font << \n");
		QMap<QString,int>::Iterator it2;
		for (it2 = Seite.FObjects.begin(); it2 != Seite.FObjects.end(); ++it2)
			PutDoc("/"+it2.key()+" "+QString::number(it2.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	PutDoc(">>\n");
	PutDoc("/Length "+QString::number(im.length())+"\n");
	PutDoc(">>\nstream\n"+EncStream(im, ObjCounter-1)+"\nendstream\nendobj\n");
}

void PDFLibCore::PDF_Bookmark(PageItem *currItem, double ypos)
{
	Bvie->SetAction(currItem, "/XYZ 0 "+FToStr(ypos)+" 0]");
	BookMinUse = true;
}

QString PDFLibCore::PDF_Image(PageItem* c, const QString& fn, double sx, double sy, double x, double y, bool fromAN, const QString& Profil, bool Embedded, int Intent)
{
	QFileInfo fi = QFileInfo(fn);
	QString ext = fi.extension(false).lower();
	if (ext.isEmpty())
		ext = getImageType(fn);
	ScImage img;
	QByteArray im;
	QString tmp, tmpy, dummy, cmd1, cmd2, BBox;
	QChar tc;
	bool found = false;
	bool alphaM = false;
	bool realCMYK = false;
	int afl = Options.Resolution;
	double x2, ax, ay, a2, a1;
	double sxn = 0;
	double syn = 0;
	x2 = 0;
	double aufl = Options.Resolution / 72.0;
	int ImRes, ImWid, ImHei;
	int origWidth = 1;
	int origHeight = 1;
	struct ShIm ImInfo;
	if ((!SharedImages.contains(fn)) || (fromAN) || (c->effectsInUse.count() != 0))
	{
/*		if ((ext == "pdf") && (Options.Version  >= 14))
		{
			StartObj(ObjCounter);
			PutDoc("<<\n/Type /EmbeddedFile\n");
			im = "";
			loadText(fn, &im);
			if ((Options.Compress) && (CompAvail))
			{
				PutDoc("/Filter /FlateDecode\n");
				im = CompressStr(&im);
			}
			PutDoc("/Length "+QString::number(im.length())+"\n");
			PutDoc(">>\nstream\n"+EncStream(im, ObjCounter)+"\nendstream\nendobj\n");
			ObjCounter++;
			StartObj(ObjCounter);
			PutDoc("<<\n/Type /Filespec\n/F ("+fn+")\n/EF << /F "+QString::number(ObjCounter-1)+" 0 R >>\n");
			PutDoc(">>\nendobj\n");
			ObjCounter++;
			StartObj(ObjCounter);
			PutDoc("<<\n/Type /XObject\n/Subtype /Form\n");
			PutDoc("/BBox [ 0 0 "+FToStr(c->Width)+" "+FToStr(c->Height)+" ]\n");
			PutDoc("/Resources << /ProcSet [/PDF /Text /ImageB /ImageC /ImageI]>>\n");
			PutDoc("/Ref <<\n/Page 1\n/F "+QString::number(ObjCounter-1)+" 0 R\n>>\n");
			PutDoc("/Length 0\n");
			PutDoc(">>\nstream\nendstream\nendobj\n");
			ObjCounter++;
		}
		else
		{ */
		if (((ext == "eps") || (ext == "epsi") || (ext == "pdf")) && (c->pixm.imgInfo.type != 7))
		{
			QString tmpFile = QDir::convertSeparators(ScPaths::getTempFileDir() + "sc.png");
			if (Options.RecalcPic)
			{
				afl = qMin(Options.PicRes, Options.Resolution);
				aufl = afl / 72.0;
			}
			else
				afl = Options.Resolution;
			if (ext == "pdf")
			{
				CMSettings cms(c->doc(), Profil, Intent);
				if (Options.UseRGB)
					img.LoadPicture(fn, cms, Embedded, true, ScImage::RGBData, afl);
				else
				{
					if ((doc.HasCMS) && (Options.UseProfiles2))
						img.LoadPicture(fn, cms, Embedded, true, ScImage::RGBData, afl);
					else
					{
						if (Options.isGrayscale)
							img.LoadPicture(fn, cms, Embedded, true, ScImage::RGBData, afl);
						else
							img.LoadPicture(fn, cms, Embedded, true, ScImage::CMYKData, afl);
					}
				}
			}
			else
			{
				QFile f(fn);
				if (f.open(QIODevice::ReadOnly))
				{
					QDataStream ts(&f);
					while (!ts.atEnd())
					{
						tmp = readLinefromDataStream(ts);
						if (tmp.startsWith("%%BoundingBox:"))
						{
							found = true;
							BBox = tmp.remove("%%BoundingBox:");
						}
						if (!found)
						{
							if (tmp.startsWith("%%BoundingBox"))
							{
								found = true;
								BBox = tmp.remove("%%BoundingBox");
							}
						}
						if (tmp.startsWith("%%EndComments"))
							break;
					}
					f.close();
					if (found)
					{
						CMSettings cms(c->doc(), Profil, Intent);
						if (Options.UseRGB)
							img.LoadPicture(fn, cms, Embedded, true, ScImage::RGBData, afl);
						else
						{
							if ((doc.HasCMS) && (Options.UseProfiles2))
								img.LoadPicture(fn, cms, Embedded, true, ScImage::RGBData, afl);
							else
							{
								if (Options.isGrayscale)
									img.LoadPicture(fn, cms, Embedded, true, ScImage::RGBData, afl);
								else
									img.LoadPicture(fn, cms, Embedded, true, ScImage::CMYKData, afl);
							}
						}
					}
				}
			}
			if (Options.RecalcPic)
			{
				sxn = sx * (1.0 / aufl);
				syn = sy * (1.0 / aufl);
			}
		}
		else
		{
			img.imgInfo.valid = false;
			img.imgInfo.clipPath = "";
			img.imgInfo.PDSpathData.clear();
			img.imgInfo.layerInfo.clear();
			img.imgInfo.RequestProps = c->pixm.imgInfo.RequestProps;
			img.imgInfo.isRequest = c->pixm.imgInfo.isRequest;
			CMSettings cms(c->doc(), Profil, Intent);
			if (Options.UseRGB)
				img.LoadPicture(fn, cms, Embedded, true, ScImage::RGBData, 72, &realCMYK);
			else
			{
				if ((doc.HasCMS) && (Options.UseProfiles2))
					img.LoadPicture(fn, cms, Embedded, true, ScImage::RawData, 72, &realCMYK);
				else
				{
					if (Options.isGrayscale)
						img.LoadPicture(fn, cms, Embedded, true, ScImage::RGBData, 72, &realCMYK);
					else
						img.LoadPicture(fn, cms, Embedded, true, ScImage::CMYKData, 72, &realCMYK);
				}
			}
			if ((Options.RecalcPic) && (Options.PicRes < (qMax(72.0 / c->imageXScale(), 72.0 / c->imageYScale()))))
			{
				double afl = qMin(Options.PicRes, Options.Resolution);
				a2 = (72.0 / sx) / afl;
				a1 = (72.0 / sy) / afl;
				origWidth = img.width();
				origHeight = img.height();
				ax = img.width() / a2;
				ay = img.height() / a1;
				if ((Options.UseRGB) || (Options.isGrayscale) || ((Options.UseProfiles2) && !(img.imgInfo.colorspace == 1)) )
				{
					int colsp = img.imgInfo.colorspace;
					bool prog = img.imgInfo.progressive;
					img = img.smoothScale(qRound(ax), qRound(ay));
					img.imgInfo.colorspace = colsp;
					img.imgInfo.progressive = prog;
				}
				else
					img.scaleImage(qRound(ax), qRound(ay));
				sxn = sx * a2;
				syn = sy * a1;
			}
			aufl = 1;
		}
		if ((doc.HasCMS) && (Options.UseProfiles2))
		{
			if (!ICCProfiles.contains(Profil))
			{
				ScImage img3;
				int components = 0;
				StartObj(ObjCounter);
				ObjCounter++;
				QByteArray dataP;
				struct ICCD dataD;
				if ((Embedded) && (!Options.EmbeddedI))
					img3.getEmbeddedProfile(fn, &dataP, &components);
				if (dataP.isEmpty())
				{
					if (img.imgInfo.colorspace == 1)
					{
						QString profilePath;
						if (Embedded && ScCore->InputProfilesCMYK.contains(Options.ImageProf))
							profilePath = ScCore->InputProfilesCMYK[Options.ImageProf];
						else if (ScCore->InputProfilesCMYK.contains(Profil))
							profilePath = ScCore->InputProfilesCMYK[Profil];
						else
							profilePath = ScCore->InputProfilesCMYK[c->doc()->CMSSettings.DefaultImageCMYKProfile];
						loadRawBytes(profilePath, dataP);
						components = 4;
					}
					else
					{
						QString profilePath;
						if (Embedded && ScCore->InputProfiles.contains(Options.ImageProf))
							profilePath = ScCore->InputProfiles[Options.ImageProf];
						else if (ScCore->InputProfiles.contains(Profil))
							profilePath = ScCore->InputProfiles[Profil];
						else
							profilePath = ScCore->InputProfiles[c->doc()->CMSSettings.DefaultImageRGBProfile];
						loadRawBytes(profilePath, dataP);
						components = 3;
					}
				}
				PutDoc("<<\n");
				if ((Options.CompressMethod != 3) && (CompAvail) && (Options.Compress))
				{
					PutDoc("/Filter /FlateDecode\n");
					dataP = CompressArray(&dataP);
				}
				PutDoc("/Length "+QString::number(dataP.size()+1)+"\n");
				PutDoc("/N "+QString::number(components)+"\n");
				PutDoc(">>\nstream\n");
				PutDoc(EncStreamArray(dataP, ObjCounter-1));
				PutDoc("\nendstream\nendobj\n");
				StartObj(ObjCounter);
				dataD.ResName = ResNam+QString::number(ResCount);
				dataD.ICCArray = "[ /ICCBased "+QString::number(ObjCounter-1)+" 0 R ]";
				dataD.ResNum = ObjCounter;
				ICCProfiles[Profil] = dataD;
				PutDoc("[ /ICCBased "+QString::number(ObjCounter-1)+" 0 R ]\n");
				PutDoc("endobj\n");
				ResCount++;
				ObjCounter++;
			}
		}
		QByteArray im2;
		ScImage img2;
		img2.imgInfo.clipPath = "";
		img2.imgInfo.PDSpathData.clear();
		img2.imgInfo.layerInfo.clear();
		img2.imgInfo.RequestProps = c->pixm.imgInfo.RequestProps;
		img2.imgInfo.isRequest = c->pixm.imgInfo.isRequest;
		if (c->pixm.imgInfo.type == 7)
			alphaM = false;
		else
		{
			if (Options.Version >= 14)
				im2 = img2.getAlpha(fn, true, true, afl, img.width(), img.height());
			else
				im2 = img2.getAlpha(fn, true, false, afl, img.width(), img.height());
			if (!im2.isEmpty())
				alphaM = true;
		}
		bool imgE = false;
		if ((Options.UseRGB) || (Options.isGrayscale))
			imgE = false;
		else
		{
			if ((Options.UseProfiles2) && (img.imgInfo.colorspace != 1))
				imgE = false;
			else
				imgE = true;
		}
		origWidth = img.width();
		origHeight = img.height();
		img.applyEffect(c->effectsInUse, c->doc()->PageColors, imgE);
		if (!((Options.RecalcPic) && (Options.PicRes < (qMax(72.0 / c->imageXScale(), 72.0 / c->imageYScale())))))
		{
			sxn = sx * (1.0 / aufl);
			syn = sy * (1.0 / aufl);
		}
		if (alphaM)
		{
			StartObj(ObjCounter);
			ObjCounter++;
			PutDoc("<<\n/Type /XObject\n/Subtype /Image\n");
			if (Options.Version >= 14)
			{
				if ((Options.CompressMethod != 3) && (CompAvail))
					im2 = CompressArray(&im2);
				PutDoc("/Width "+QString::number(origWidth)+"\n");
				PutDoc("/Height "+QString::number(origHeight)+"\n");
				PutDoc("/ColorSpace /DeviceGray\n");
				PutDoc("/BitsPerComponent 8\n");
				PutDoc("/Length "+QString::number(im2.size())+"\n");
			}
			else
			{
				if ((Options.CompressMethod != 3) && (CompAvail))
					im2 = CompressArray(&im2);
				PutDoc("/Width "+QString::number(origWidth)+"\n");
				PutDoc("/Height "+QString::number(origHeight)+"\n");
				PutDoc("/ImageMask true\n/BitsPerComponent 1\n");
				PutDoc("/Length "+QString::number(im2.size())+"\n");
			}
			if ((Options.CompressMethod != 3) && (CompAvail))
				PutDoc("/Filter /FlateDecode\n");
			PutDoc(">>\nstream\n");
			PutDoc(EncStreamArray(im2, ObjCounter-1));
			PutDoc("\nendstream\nendobj\n");
			Seite.ImgObjects[ResNam+"I"+QString::number(ResCount)] = ObjCounter-1;
			ResCount++;
		}
		if (Options.UseRGB)
			im = img.ImageToArray();
		else
		{
			if (Options.isGrayscale)
				im = img.ImageToGray();
			else
			{
				if ((doc.HasCMS) && (Options.UseProfiles2) && (!realCMYK))
					im = img.ImageToArray();
				else
					im = img.ImageToCMYK_PDF(true);
			}
		}
		StartObj(ObjCounter);
		ObjCounter++;
		if (((Options.CompressMethod == 2) || (Options.CompressMethod == 0)) && (CompAvail))
			im = CompressArray(&im);
		PutDoc("<<\n/Type /XObject\n/Subtype /Image\n");
		PutDoc("/Width "+QString::number(img.width())+"\n");
		PutDoc("/Height "+QString::number(img.height())+"\n");
		if ((doc.HasCMS) && (Options.UseProfiles2))
		{
			PutDoc("/ColorSpace "+ICCProfiles[Profil].ICCArray+"\n");
			PutDoc("/Intent /");
			int inte2 = Intent;
			if (Options.EmbeddedI)
				inte2 = Options.Intent2;
			static const QString cmsmode[] = {"Perceptual", "RelativeColorimetric", "Saturation", "AbsoluteColorimetric"};
			PutDoc(cmsmode[inte2] + "\n");
		}
		else
		{
			if (Options.UseRGB)
				PutDoc("/ColorSpace /DeviceRGB\n");
			else
			{
				if (Options.isGrayscale)
					PutDoc("/ColorSpace /DeviceGray\n");
				else
					PutDoc("/ColorSpace /DeviceCMYK\n");
			}
		}
		int cm = Options.CompressMethod;
		bool specialCMYK = false;
		if (((ext == "jpg") || (ext == "jpeg")) && (cm != 3))
		{
			if (((Options.UseRGB || Options.UseProfiles2) && (cm == 0) && (c->effectsInUse.count() == 0) && (img.imgInfo.colorspace == 0)) && (!img.imgInfo.progressive) && (!((Options.RecalcPic) && (Options.PicRes < (qMax(72.0 / c->imageXScale(), 72.0 / c->imageYScale()))))))
			{
				im.resize(0);
				loadRawBytes(fn, im);
				cm = 1;
			}
			else if (((!Options.UseRGB) && (!Options.isGrayscale) && (!Options.UseProfiles2)) && (cm== 0) && (c->effectsInUse.count() == 0) && (img.imgInfo.colorspace == 1) && (!((Options.RecalcPic) && (Options.PicRes < (qMax(72.0 / c->imageXScale(), 72.0 / c->imageYScale()))))) && (!img.imgInfo.progressive))
			{
				im.resize(0);
				loadRawBytes(fn, im);
				cm = 1;
				specialCMYK = true;
			}
			else
			{
				if (Options.CompressMethod == 1)
				{
					QString tmpFile = QDir::convertSeparators(ScPaths::getTempFileDir() + "sc.jpg");
					if ((Options.UseRGB) || (Options.UseProfiles2) && (!realCMYK))
						img.Convert2JPG(tmpFile, Options.Quality, false, false);
					else
					{
						if (Options.isGrayscale)
							img.Convert2JPG(tmpFile, Options.Quality, false, true);
						else
						{
							img.Convert2JPG(tmpFile, Options.Quality, true, false);
							specialCMYK = true;
						}
					}
					im.resize(0);
					loadRawBytes(tmpFile, im);
					cm = 1;
					QFile::remove(tmpFile);
				}
				else
					cm = 2;
			}
		}
		else
		{
			if ((Options.CompressMethod == 1) || (Options.CompressMethod == 0))
			{
				QString tmpFile = QDir::convertSeparators(ScPaths::getTempFileDir() + "sc.jpg");
				if ((Options.UseRGB) || (Options.UseProfiles2) && (!realCMYK))
					img.Convert2JPG(tmpFile, Options.Quality, false, false);
				else
				{
					if (Options.isGrayscale)
						img.Convert2JPG(tmpFile, Options.Quality, false, true);
					else
					{
						img.Convert2JPG(tmpFile, Options.Quality, true, false);
						specialCMYK = true;
					}
				}
				if (Options.CompressMethod == 0)
				{
					QFileInfo fi(tmpFile);
					if (fi.size() < im.size())
					{
						im.resize(0);
						loadRawBytes(tmpFile, im);
						cm = 1;
					}
					else
						cm = 2;
				}
				else
				{
					im.resize(0);
					loadRawBytes(tmpFile, im);
					cm = 1;
				}
				QFile::remove(tmpFile);
			}
		}
		PutDoc("/BitsPerComponent 8\n");
		PutDoc("/Length "+QString::number(im.size())+"\n");
		if (CompAvail)
		{
			if (cm == 1)
				PutDoc("/Filter /DCTDecode\n");
			else if (cm != 3)
				PutDoc("/Filter /FlateDecode\n");
		}
		if ((specialCMYK) && ((cm == 1) && (CompAvail)))
			PutDoc("/Decode [1 0 1 0 1 0 1 0]\n");
		if (alphaM)
		{
			if (Options.Version >= 14)
				PutDoc("/SMask "+QString::number(ObjCounter-2)+" 0 R\n");
			else
				PutDoc("/Mask "+QString::number(ObjCounter-2)+" 0 R\n");
		}
		PutDoc(">>\nstream\n");
		PutDoc(EncStreamArray(im, ObjCounter-1));
		PutDoc("\nendstream\nendobj\n");
//		}
		Seite.ImgObjects[ResNam+"I"+QString::number(ResCount)] = ObjCounter-1;
		ImRes = ResCount;
		ImWid = img.width();
		ImHei = img.height();
		ImInfo.ResNum = ImRes;
		ImInfo.Width = ImWid;
		ImInfo.Height = ImHei;
		ImInfo.aufl = aufl;
		ImInfo.sxa = sxn;
		ImInfo.sya = syn;
		ImInfo.xa = sx;
		ImInfo.ya = sy;
		if (c->effectsInUse.count() == 0)
			SharedImages.insert(fn, ImInfo);
		ResCount++;
	}
	else
	{
		ImRes = SharedImages[fn].ResNum;
		ImWid = SharedImages[fn].Width;
		ImHei = SharedImages[fn].Height;
		aufl = SharedImages[fn].aufl;
		sxn = SharedImages[fn].sxa * sx / SharedImages[fn].xa;
		syn = SharedImages[fn].sya * sy / SharedImages[fn].ya;
	}
	if ((ext == "eps") || (ext == "epsi") || (ext == "pdf"))// compensate gsResolution setting
	{
		sxn = PrefsManager::instance()->appPrefs.gs_Resolution / 72.0 * sxn;
		syn = PrefsManager::instance()->appPrefs.gs_Resolution / 72.0 * syn;
	}
	if (!fromAN)
	{
		QString tmp(FToStr(ImWid*sxn)+" 0 0 "+FToStr(ImHei*syn)+" "+FToStr(x*sx)+" "+FToStr((-ImHei*syn+y*sy))+" cm\n/"+ResNam+"I"+QString::number(ImRes)+" Do\n");
		return tmp;
	}
	else
		return "";
}

void PDFLibCore::PDF_End_Doc(const QString& PrintPr, const QString& Name, int Components)
{
	QString tmp;
	uint StX;
	int Basis;
	int ResO;
	BookMItem* ip;
	Q3ListViewItem* pp;
	QString Inhal = "";
	QMap<int,QString> Inha;
	Inha.clear();
	int Bmc = 0;
	if ((Bvie->childCount() != 0) && (Options.Bookmarks) && (BookMinUse))
	{
		Basis = ObjCounter - 1;
		Outlines.Count = Bvie->childCount();
		ip = (BookMItem*)Bvie->firstChild();
		pp = Bvie->firstChild();
		Outlines.First = ip->ItemNr+Basis;
		while (pp)
		{
			if (!pp->nextSibling())
			{
				ip = (BookMItem*)pp;
				Outlines.Last = ip->ItemNr+Basis;
				break;
			}
			pp = pp->nextSibling();
		}
		Q3ListViewItemIterator it(Bvie);
		for ( ; it.current(); ++it)
		{
			ip = (BookMItem*)it.current();
			Inhal = "";
			Bmc++;
			Inhal += QString::number(ip->ItemNr+Basis)+ " 0 obj\n";
			QString encText = "";
			for (int telen = 0; telen < ip->Titel.length(); telen++)
			{
				encText += ip->Titel.at(telen);
			}
			Inhal += "<<\n/Title "+EncStringUTF16("("+encText+")", ip->ItemNr+Basis)+"\n";
			if (ip->Pare == 0)
				Inhal += "/Parent 3 0 R\n";
			else
				Inhal += "/Parent "+QString::number(ip->Pare+Basis)+" 0 R\n";
			if (ip->Prev != 0)
				Inhal += "/Prev "+QString::number(ip->Prev+Basis)+" 0 R\n";
			if (ip->Next != 0)
				Inhal += "/Next "+QString::number(ip->Next+Basis)+" 0 R\n";
			if (ip->First != 0)
				Inhal += "/First "+QString::number(ip->First+Basis)+" 0 R\n";
			if (ip->Last != 0)
				Inhal += "/Last "+QString::number(ip->Last+Basis)+" 0 R\n";
			if (ip->firstChild())
				Inhal += "/Count -"+QString::number(ip->childCount())+"\n";
			if ((ip->PageObject->OwnPage != -1) && (ip->PageObject->OwnPage < static_cast<int>(PageTree.Kids.count())))
				Inhal += "/Dest ["+QString::number(PageTree.Kids[ip->PageObject->OwnPage])+" 0 R "+ip->Action+"\n";
			Inhal += ">>\nendobj\n";
			Inha[ip->ItemNr] = Inhal;
		}
		for (int b = 1; b < Bmc+1; ++b)
		{
			XRef.append(bytesWritten());
			PutDoc(Inha[b]);
			ObjCounter++;
		}
	}
	StartObj(ObjCounter);
	ResO = ObjCounter;
	PutDoc("<< /ProcSet [/PDF /Text /ImageB /ImageC /ImageI]\n");
	if ((Seite.ImgObjects.count() != 0) || (Seite.XObjects.count() != 0))
	{
		PutDoc("/XObject <<\n");
		QMap<QString,int>::Iterator it;
		for (it = Seite.ImgObjects.begin(); it != Seite.ImgObjects.end(); ++it)
			PutDoc("/"+it.key()+" "+QString::number(it.data())+" 0 R\n");
		QMap<QString,int>::Iterator iti;
		for (iti = Seite.XObjects.begin(); iti != Seite.XObjects.end(); ++iti)
			PutDoc("/"+iti.key()+" "+QString::number(iti.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if (Seite.FObjects.count() != 0)
	{
		PutDoc("/Font << \n");
		QMap<QString,int>::Iterator it2;
		for (it2 = Seite.FObjects.begin(); it2 != Seite.FObjects.end(); ++it2)
			PutDoc("/"+it2.key()+" "+QString::number(it2.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if (Shadings.count() != 0)
	{
		PutDoc("/Shading << \n");
		QMap<QString,int>::Iterator it3;
		for (it3 = Shadings.begin(); it3 != Shadings.end(); ++it3)
			PutDoc("/"+it3.key()+" "+QString::number(it3.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if (Patterns.count() != 0)
	{
		PutDoc("/Pattern << \n");
		QMap<QString,int>::Iterator it3p;
		for (it3p = Patterns.begin(); it3p != Patterns.end(); ++it3p)
			PutDoc("/"+it3p.key()+" "+QString::number(it3p.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if (Transpar.count() != 0)
	{
		PutDoc("/ExtGState << \n");
		QMap<QString,int>::Iterator it3t;
		for (it3t = Transpar.begin(); it3t != Transpar.end(); ++it3t)
			PutDoc("/"+it3t.key()+" "+QString::number(it3t.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if ((ICCProfiles.count() != 0) || (spotMap.count() != 0) || (spotMapReg.count() != 0))
	{
		PutDoc("/ColorSpace << \n");
		QMap<QString,ICCD>::Iterator it3c;
		if (ICCProfiles.count() != 0)
		{
			for (it3c = ICCProfiles.begin(); it3c != ICCProfiles.end(); ++it3c)
				PutDoc("/"+it3c.data().ResName+" "+QString::number(it3c.data().ResNum)+" 0 R\n");
		}
		QMap<QString,SpotC>::Iterator it3sc;
		if (spotMap.count() != 0)
		{
			for (it3sc = spotMap.begin(); it3sc != spotMap.end(); ++it3sc)
				PutDoc("/"+it3sc.data().ResName+" "+QString::number(it3sc.data().ResNum)+" 0 R\n");
		}
		QMap<QString,SpotC>::Iterator it3scr;
		if (spotMapReg.count() != 0)
		{
			for (it3scr = spotMapReg.begin(); it3scr != spotMapReg.end(); ++it3scr)
				PutDoc("/"+it3scr.data().ResName+" "+QString::number(it3scr.data().ResNum)+" 0 R\n");
		}
		PutDoc(">>\n");
	}
	if ((Options.Version == 15) && (Options.useLayers))
	{
		PutDoc("/Properties <<\n");
		struct Layer ll;
		ll.isPrintable = false;
		ll.LNr = 0;
		int Lnr = 0;
		for (int la = 0; la < doc.Layers.count(); ++la)
		{
			Level2Layer(&doc, &ll, la);
			PutDoc("/"+OCGEntries[ll.Name].Name+" "+QString::number(OCGEntries[ll.Name].ObjNum)+" 0 R\n");
			Lnr++;
		}
		PutDoc(">>\n");
	}
	PutDoc(">>\nendobj\n");
	ObjCounter++;
	XRef[2] = bytesWritten();
	PutDoc("3 0 obj\n<<\n/Type /Outlines\n");
	PutDoc("/Count "+QString::number(Outlines.Count)+"\n");
	if ((Bvie->childCount() != 0) && (Options.Bookmarks))
	{
		PutDoc("/First "+QString::number(Outlines.First)+" 0 R\n");
		PutDoc("/Last "+QString::number(Outlines.Last)+" 0 R\n");
	}
	PutDoc(">>\nendobj\n");
	XRef[3] = bytesWritten();
	PutDoc("4 0 obj\n<<\n/Type /Pages\n/Kids [");
	for (int b = 0; b < PageTree.Kids.count(); ++b)
		PutDoc(QString::number(PageTree.Kids[b])+" 0 R ");
	PutDoc("]\n");
	PutDoc("/Count "+QString::number(PageTree.Count)+"\n");
	PutDoc("/Resources "+QString::number(ObjCounter-1)+" 0 R\n");
	PutDoc(">>\nendobj\n");
	XRef[4] = bytesWritten();
	PutDoc("5 0 obj\n<<\n");
	if (NamedDest.count() != 0)
	{
		QList<Dest>::Iterator vt;
		for (vt = NamedDest.begin(); vt != NamedDest.end(); ++vt)
		{
			if ((*vt).Seite < static_cast<int>(PageTree.Kids.count()))
				PutDoc("/"+(*vt).Name+" ["+QString::number(PageTree.Kids[(*vt).Seite])+" 0 R /XYZ "+(*vt).Act+"]\n");
		}
	}
	PutDoc(">>\nendobj\n");
	XRef[5] = bytesWritten();
	PutDoc("6 0 obj\n<<\n");
	PutDoc("/Fields [ ");
	if (Seite.FormObjects.count() != 0)
	{
		for (int fo = 0; fo < Seite.FormObjects.count(); ++fo)
			PutDoc(QString::number(Seite.FormObjects[fo])+" 0 R ");
	}
	PutDoc(" ]\n");
	if (CalcFields.count() != 0)
	{
		PutDoc("/CO [ ");
		for (int foc = 0; foc < CalcFields.count(); ++foc)
			PutDoc(QString::number(CalcFields[foc])+" 0 R ");
		PutDoc(" ]\n");
	}
	if ((Seite.FormObjects.count() != 0) || (CalcFields.count() != 0))
		PutDoc("/NeedAppearances true\n/DR "+QString::number(ResO)+" 0 R\n");
	PutDoc(">>\nendobj\n");
	if (doc.JavaScripts.count() != 0)
	{
		int Fjav0 = ObjCounter;
		QMap<QString,QString>::Iterator itja0;
		for (itja0 = doc.JavaScripts.begin(); itja0 != doc.JavaScripts.end(); ++itja0)
			WritePDFStream(itja0.data());
		int Fjav = ObjCounter;
		QMap<QString,QString>::Iterator itja;
		for (itja = doc.JavaScripts.begin(); itja != doc.JavaScripts.end(); ++itja)
		{
			StartObj(ObjCounter);
			ObjCounter++;
			PutDoc("<< /S /JavaScript /JS "+QString::number(Fjav0)+" 0 R >>\n");
			PutDoc("endobj\n");
			Fjav0++;
		}
		StartObj(ObjCounter);
		ObjCounter++;
		PutDoc("<< /Names [ ");
		QMap<QString,QString>::Iterator itja2;
		for (itja2 = doc.JavaScripts.begin(); itja2 != doc.JavaScripts.end(); ++itja2)
		{
			PutDoc(EncString("("+itja2.key()+")", 6)+" "+QString::number(Fjav)+" 0 R ");
			Fjav++;
		}
		PutDoc("] >>\nendobj\n");
	}
	XRef[6] = bytesWritten();
	PutDoc("7 0 obj\n<< ");
	if (doc.JavaScripts.count() != 0)
		PutDoc("/JavaScript "+QString::number(ObjCounter-1)+" 0 R");
	PutDoc(" >>\nendobj\n");
	Threads.clear();
	if (Options.Articles)
	{
		for (int ele = 0; ele < doc.Items->count(); ++ele)
		{
			PageItem* tel = doc.Items->at(ele);
			if ((tel->asTextFrame()) && (tel->prevInChain() == 0) && (tel->nextInChain() != 0) &&
					(!tel->inPdfArticle))
			{
				StartObj(ObjCounter);
				Threads.append(ObjCounter);
				ObjCounter++;
				PutDoc("<< /Type /Thread\n");
				PutDoc("   /F "+QString::number(ObjCounter)+" 0 R\n");
				PutDoc(">>\nendobj\n");
				Beads.clear();
				struct Bead bd;
				int fir = ObjCounter;
				int ccb = ObjCounter;
				bd.Parent = ObjCounter-1;
				while (tel->nextInChain() != 0)
				{
					if (tel->OwnPage != -1)
					{
						bd.Next = ccb + 1;
						bd.Prev = ccb - 1;
						ccb++;
						bd.Page = PageTree.Kids[tel->OwnPage];
						bd.Recht = QRect(static_cast<int>(tel->xPos() - doc.Pages->at(tel->OwnPage)->xOffset()),
									static_cast<int>(doc.Pages->at(tel->OwnPage)->height() - (tel->yPos()  - doc.Pages->at(tel->OwnPage)->yOffset())),
									static_cast<int>(tel->width()),
									static_cast<int>(tel->height()));
						Beads.append(bd);
					}
					tel->inPdfArticle = true;
					tel = tel->nextInChain();
				}
				bd.Next = ccb + 1;
				bd.Prev = ccb - 1;
				if (tel->OwnPage != -1)
				{
					bd.Page = PageTree.Kids[tel->OwnPage];
					bd.Recht = QRect(static_cast<int>(tel->xPos() - doc.Pages->at(tel->OwnPage)->xOffset()),
								static_cast<int>(doc.Pages->at(tel->OwnPage)->height() - (tel->yPos()  - doc.Pages->at(tel->OwnPage)->yOffset())),
								static_cast<int>(tel->width()),
								static_cast<int>(tel->height()));
					Beads.append(bd);
				}
				tel->inPdfArticle = true;
				Beads[0].Prev = fir + Beads.count()-1;
				Beads[Beads.count()-1].Next = fir;
				for (int beac = 0; beac < Beads.count(); ++beac)
				{
					StartObj(ObjCounter);
					ObjCounter++;
					PutDoc("<< /Type /Bead\n");
					PutDoc("   /T "+QString::number(Beads[beac].Parent)+" 0 R\n");
					PutDoc("   /N "+QString::number(Beads[beac].Next)+" 0 R\n");
					PutDoc("   /V "+QString::number(Beads[beac].Prev)+" 0 R\n");
					PutDoc("   /P "+QString::number(Beads[beac].Page)+" 0 R\n");
					PutDoc("   /R [ "+QString::number(Beads[beac].Recht.x())+" "+
							QString::number(Beads[beac].Recht.y())+" ");
					PutDoc(QString::number(Beads[beac].Recht.bottomRight().x())+" "+QString::number(Beads[beac].Recht.y()-Beads[beac].Recht.height())+" ]\n");
					PutDoc(">>\nendobj\n");
				}
			}
		}
		for (int ele = 0; ele < doc.Items->count(); ++ele)
			doc.Items->at(ele)->inPdfArticle = false;
	}
	XRef[7] = bytesWritten();
	PutDoc("8 0 obj\n[");
	for (int th = 0; th < Threads.count(); ++th)
		PutDoc(QString::number(Threads[th])+" 0 R ");
	PutDoc("]\nendobj\n");
	if ((Options.Version == 15) && (Options.useLayers))
	{
		XRef[8] = bytesWritten();
		QStringList lay;
		PutDoc("9 0 obj\n<<\n");
		PutDoc("/D << /BaseState /ON /Order [ ");
		QMap<QString, OCGInfo>::Iterator itoc;
		for (itoc = OCGEntries.begin(); itoc != OCGEntries.end(); ++itoc)
		{
			lay.prepend(QString::number(itoc.data().ObjNum)+" 0 R ");
		}
		for (int layc = 0; layc < lay.count(); ++layc)
		{
			PutDoc(lay[layc]);
		}
		PutDoc("]\n/OFF [ ");
		for (itoc = OCGEntries.begin(); itoc != OCGEntries.end(); ++itoc)
		{
			if (!itoc.data().visible)
				PutDoc(QString::number(itoc.data().ObjNum)+" 0 R ");
		}
		PutDoc("] >>\n/OCGs [ ");
		for (itoc = OCGEntries.begin(); itoc != OCGEntries.end(); ++itoc)
		{
			PutDoc(QString::number(itoc.data().ObjNum)+" 0 R ");
		}
		PutDoc("]\n");
		PutDoc(">>\nendobj\n");
	}
	if (Options.Version == 12)
	{
		StartObj(ObjCounter);
		ObjCounter++;
		QByteArray dataP;
		loadRawBytes(PrintPr, dataP);
		PutDoc("<<\n");
		if ((Options.Compress) && (CompAvail))
		{
			PutDoc("/Filter /FlateDecode\n");
			dataP = CompressArray(&dataP);
		}
		PutDoc("/Length "+QString::number(dataP.size()+1)+"\n");
		PutDoc("/N "+QString::number(Components)+"\n");
		PutDoc(">>\nstream\n");
		PutDoc(dataP);
		PutDoc("\nendstream\nendobj\n");
		XRef[8] = bytesWritten();
		PutDoc("9 0 obj\n");
		PutDoc("<<\n/Type /OutputIntent\n/S /GTS_PDFX\n");
		PutDoc("/DestOutputProfile "+QString::number(ObjCounter-1)+" 0 R\n");
		PutDoc("/OutputConditionIdentifier (Custom)\n");
		PutDoc("/Info ("+PDFEncode(Options.Info)+")\n");
		PutDoc("/OutputCondition ("+PDFEncode(Name)+")\n");
		PutDoc(">>\nendobj\n");
	}
	StX = bytesWritten();
	PutDoc("xref\n");
	PutDoc("0 "+QString::number(ObjCounter)+"\n");
	PutDoc("0000000000 65535 f \n");
	for (int a = 0; a < XRef.count(); ++a)
	{
		tmp.sprintf("%10d", XRef[a]);
		tmp.replace(QRegExp(" "), "0");
		PutDoc(tmp+" 00000 n \n");
	}
	PutDoc("trailer\n<<\n/Size "+QString::number(XRef.count()+1)+"\n");
	QString IDs ="";
	for (uint cl = 0; cl < 16; ++cl)
		IDs += QChar(FileID[cl]);
	IDs = String2Hex(&IDs);
	PutDoc("/Root 1 0 R\n/Info 2 0 R\n/ID [<"+IDs+"><"+IDs+">]\n");
	if (Options.Encrypt)
		PutDoc("/Encrypt "+QString::number(Encrypt)+" 0 R\n");
	PutDoc(">>\nstartxref\n");
	PutDoc(QString::number(StX)+"\n%%EOF\n");
	closeAndCleanup();
}

void PDFLibCore::closeAndCleanup()
{
	Spool.close();
	if (abortExport)
	{
		if (Spool.exists())
			Spool.remove();
	}
	Seite.XObjects.clear();
	Seite.ImgObjects.clear();
	Seite.FObjects.clear();
	Seite.AObjects.clear();
	Seite.FormObjects.clear();
	CalcFields.clear();
	Shadings.clear();
	Transpar.clear();
	ICCProfiles.clear();

}

void PDFLibCore::cancelRequested()
{
	abortExport=true;
}
