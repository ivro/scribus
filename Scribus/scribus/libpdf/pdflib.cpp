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

#include "pdflib.h"
#include "pdflib.moc"

#if (_MSC_VER >= 1200)
 #include "win-config.h"
#else
 #include "config.h"
#endif

#include <qregexp.h>
#include <qdatetime.h>
#include <qfileinfo.h>
#include <qtextstream.h>
#include <qdir.h>
#include <cstdlib>
#include <cmath>
#include <unistd.h>
#include "rc4.h"

extern int callGS(const QStringList & args);
extern QString Path2Relative(QString Path);
extern bool GlyIndex(QMap<uint, PDFlib::GlNamInd> *GListInd, QString Dat);
extern QByteArray ComputeMD5Sum(QByteArray *in);
extern QImage LoadPict(QString fn, bool *gray = 0);
extern bool loadText(QString nam, QString *Buffer);
extern void Level2Layer(ScribusDoc *doc, struct Layer *ll, int Level);
extern QString CompressStr(QString *in);
extern QString ImageToTxt(QImage *im);
extern QString ImageToCMYK(QImage *im);
extern void Convert2JPG(QString fn, QImage *image, int Quality, bool isCMYK);
extern QString MaskToTxt(QImage *im, bool PDF = true);
extern QString MaskToTxt14(QImage *im);
extern char *toHex( uchar u );
extern QString String2Hex(QString *in, bool lang = true);
extern double Cwidth(ScribusDoc *doc, QString name, QString ch, int Siz, QString ch2 = " ");
extern FPoint GetMaxClipF(FPointArray Clip);
#ifdef HAVE_CMS
extern bool CMSuse;
#endif
#ifdef HAVE_TIFF
	#include <tiffio.h>
#endif
extern ProfilesL InputProfiles;

extern "C" bool Run(ScribusApp *plug, QString fn, QString nam, int Components, int frPa, int toPa, QMap<int,QPixmap> thumbs, QProgressBar *dia2);

bool Run(ScribusApp *plug, QString fn, QString nam, int Components, int frPa, int toPa, QMap<int,QPixmap> thumbs, QProgressBar *dia2)
{
	QPixmap pm;
	bool ret = false;
	int progresscount=0;
	PDFlib *dia = new PDFlib();
	if (dia->PDF_Begin_Doc(fn, plug->doc, plug->view, &plug->doc->PDF_Optionen, plug->Prefs.AvailFonts,
				 plug->doc->UsedFonts, plug->BookPal->BView))
		{
			dia2->reset();
			dia2->setTotalSteps(plug->view->MasterPages.count()+(toPa-frPa+1));
			dia2->setProgress(0);
			for (uint ap = 0; ap < plug->view->MasterPages.count(); ++ap)
			{
				if (plug->view->MasterPages.at(ap)->Items.count() != 0)
					dia->PDF_TemplatePage(plug->view->MasterPages.at(ap));
				progresscount++;
				dia2->setProgress(progresscount);
			}
		for (int a = frPa; a < toPa; ++a)
		{
			if (plug->doc->PDF_Optionen.Thumbnails)
				pm = thumbs[a];
			dia->PDF_Begin_Page(plug->view->Pages.at(a), pm);
			dia->PDF_ProcessPage(plug->view->Pages.at(a), a);
			dia->PDF_End_Page();
			progresscount++;
			dia2->setProgress(progresscount);
		}
		if (plug->doc->PDF_Optionen.Version == 12)
			dia->PDF_End_Doc(plug->PrinterProfiles[plug->doc->PDF_Optionen.PrintProf], nam,
					 Components);
		else
			dia->PDF_End_Doc();
		ret = true;
		dia2->reset();
	}
	delete dia;
	return ret;
}

PDFlib::PDFlib()
{
	OwnerKey = QByteArray(32);
	UserKey = QByteArray(32);
	FileID = QByteArray(16);
	EncryKey = QByteArray(5);
	Encrypt = 0;
	KeyLen = 5;
	Dokument = 0;
	Catalog.Outlines = 2;
	Catalog.PageTree = 3;
	Catalog.Dest = 4;
	PageTree.Count = 0;
	PageTree.Kids.clear();
	Outlines.First = 0;
	Outlines.Last = 0;
	Outlines.Count = 0;
	XRef.clear();
	NamedDest.clear();
	NDnam = "LI";
	NDnum = 0;
	ObjCounter = 7;
	Seite.ObjNum = 0;
	Seite.Thumb = 0;
	Seite.XObjects.clear();
	Seite.FObjects.clear();
	Seite.AObjects.clear();
	Seite.FormObjects.clear();
	CalcFields.clear();
	Shadings.clear();
	Transpar.clear();
	ICCProfiles.clear();
	SharedImages.clear();
	ResNam = "RE";
	ResCount = 0;
#ifdef HAVE_LIBZ
	CompAvail = true;
#else
	CompAvail = false;
#endif
	KeyGen = QByteArray(32);
	int kg_array[] = {0x28, 0xbf, 0x4e, 0x5e, 0x4e, 0x75, 0x8a, 0x41, 0x64, 0x00, 0x4e, 0x56, 0xff, 0xfa,
			  0x01, 0x08, 0x2e, 0x2e, 0x00, 0xb6, 0xd0, 0x68, 0x3e, 0x80, 0x2f, 0x0c, 0xa9, 0xfe,
			  0x64, 0x53, 0x69, 0x7a};
	for (int a = 0; a < 32; ++a)
		KeyGen[a] = kg_array[a];
}


QString PDFlib::FToStr(double c)
{
	QString cc;
	return cc.sprintf("%.5f", c);
}

QString PDFlib::IToStr(int c)
{
	QString cc;
	return cc.setNum(c);
}

void PDFlib::PutDoc(QString in)
{
	QTextStream t(&Spool);
	t.writeRawBytes(in, in.length());
	Spool.flush();
	Dokument += in.length();
}

void PDFlib::PutPage(QString in)
{
	Inhalt += in;
}

void PDFlib::StartObj(int nr)
{
	XRef.append(Dokument);
	PutDoc(IToStr(nr)+ " 0 obj\n");
}

QString PDFlib::PDFEncode(QString in)
{
	QString tmp = "";
	QString cc;
	for (uint d = 0; d < in.length(); ++d)
	{
		cc = in.at(d);
		if ((cc == "(") || (cc == ")") || (cc == "\\"))
			tmp += "\\";
		tmp += cc;
	}
	return tmp;
}

QString PDFlib::EncStream(QString *in, int ObjNum)
{
	if (in->length() < 1)
    		return "";
	rc4_context_t	rc4;
	QString tmp = "";
	int dlen = 0;
	if (Options->Encrypt)
	{
		tmp = *in;
		QByteArray us(tmp.length());
		QByteArray ou(tmp.length());
		for (uint a = 0; a < tmp.length(); ++a)
			us[a] = uchar(QChar(tmp.at(a)));                            
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
 		rc4_init(&rc4, reinterpret_cast<uchar*>(step1.data()), QMIN(KeyLen+5, 16));
 		rc4_encrypt(&rc4, reinterpret_cast<uchar*>(us.data()), 
					reinterpret_cast<uchar*>(ou.data()), tmp.length());
		QString uk = "";
		for (uint cl = 0; cl < tmp.length(); ++cl)
			uk += ou[cl];
		tmp = uk;
	}
	else
		tmp = *in;
	return tmp;
}

QString PDFlib::EncString(QString in, int ObjNum)
{
	if (in.length() < 3)
    		return "<>";
  	rc4_context_t	rc4;
	QString tmp;
	int dlen = 0;
	if (Options->Encrypt)
	{
		tmp = in.mid(1, in.length()-2);
		QByteArray us(tmp.length());
		QByteArray ou(tmp.length());
		for (uint a = 0; a < tmp.length(); ++a)
			us[a] = static_cast<uchar>(QChar(tmp.at(a)));
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
  		rc4_init(&rc4, reinterpret_cast<uchar*>(step1.data()), QMIN(KeyLen+5, 16));
  		rc4_encrypt(&rc4, reinterpret_cast<uchar*>(us.data()), 
					reinterpret_cast<uchar*>(ou.data()), tmp.length());
		QString uk = "";
		for (uint cl = 0; cl < tmp.length(); ++cl)
			uk += ou[cl];
		tmp = "<"+String2Hex(&uk, false)+">";
	}
	else
		tmp = in;
	return tmp;
}

QString PDFlib::FitKey(QString pass)
{
	QString pw = pass;
	if (pw.length() < 32)
	{
		uint l = pw.length();
		for (uint a = 0; a < 32 - l; ++a)
			pw.append(KeyGen[a]);
	}
	else
		pw = pw.left(32);
	return pw;
}

void PDFlib::CalcOwnerKey(QString Owner, QString User)
{
	rc4_context_t	rc4;
	QString pw = User;
	QString pw2;
	pw2 = Owner;
	if (pw2 == "")
		pw2 = User;
	pw = FitKey(pw);
	pw2 = FitKey(pw2);
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
			OwnerKey[a2] = static_cast<uchar>(QChar(pw.at(a2)));
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
			us[a] = static_cast<uchar>(QChar(pw.at(a)));
		rc4_init(&rc4, reinterpret_cast<uchar*>(step1.data()), 5);
  		rc4_encrypt(&rc4, reinterpret_cast<uchar*>(us.data()), 
					reinterpret_cast<uchar*>(OwnerKey.data()), 32);
	}
}

void PDFlib::CalcUserKey(QString User, int Permission)
{
	rc4_context_t	rc4;
	QString pw = User;
	pw = FitKey(pw);
	QByteArray step1(16);
	QByteArray perm(4);
	uint perm_value = static_cast<uint>(Permission);
	perm[0] = perm_value;
	perm[1] = perm_value >> 8;
	perm[2] = perm_value >> 16;
	perm[3] = perm_value >> 24;
	for (uint a = 0; a < 32; ++a)
		pw += OwnerKey[a];
	for (uint a1 = 0; a1 < 4; ++a1)
		pw += perm[a1];
	for (uint a3 = 0; a3 < 16; ++a3)
		pw += FileID[a3];
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
		QString pr2 = "";
		for (int kl3 = 0; kl3 < 32; ++kl3)
			pr2 += KeyGen[kl3];
		for (uint a4 = 0; a4 < 16; ++a4)
			pr2 += FileID[a4];
		step1 = ComputeMD5(pr2);
		QByteArray enk(16);
		for (uint a3 = 0; a3 < 16; ++a3)
			UserKey[a3] = step1[a3];
		for (int rl = 0; rl < 20; rl++)
		{
		  	for (int j = 0; j < 16; j ++)
	    			enk[j] = EncryKey[j] ^ rl;
			rc4_init(&rc4, reinterpret_cast<uchar*>(enk.data()), 16);
  			rc4_encrypt(&rc4, reinterpret_cast<uchar*>(UserKey.data()),
						 reinterpret_cast<uchar*>(UserKey.data()), 16);
		}
	}
	else
	{
		rc4_init(&rc4, reinterpret_cast<uchar*>(step1.data()), 5);
  		rc4_encrypt(&rc4, reinterpret_cast<uchar*>(KeyGen.data()),
				 reinterpret_cast<uchar*>(UserKey.data()), 32);
	}
}

QByteArray PDFlib::ComputeMD5(QString in)
{
	QByteArray TBytes(in.length());
	for (uint a = 0; a < in.length(); ++a)
		TBytes[a] = static_cast<uchar>(QChar(in.at(a)));
	return ComputeMD5Sum(&TBytes);
}

bool PDFlib::PDF_Begin_Doc(QString fn, ScribusDoc *docu, ScribusView *vie, PDFOpt *opts, SCFonts &AllFonts, QMap<QString,QFont> DocFonts, BookMView* vi)
{
  	Spool.setName(fn);
	if (!Spool.open(IO_WriteOnly))
		return false;
	QString tmp;
	QString ok = "";
	QString uk = "";
	QFileInfo fd;
	QString fext;
	int a;
	doc = docu;
	view = vie;
	Bvie = vi;
	Options = opts;
	UsedFontsP.clear();
	ObjCounter = Options->Articles ? 9 : 8;
  	PutDoc(Options->Version <= 13 ? "%PDF-1.3\n" : "%PDF-1.4\n");
 	if (Options->Version == 12)
		ObjCounter++;
	PutDoc("%"+QString(QChar(199))+QString(QChar(236))+QString(QChar(143))+QString(QChar(162))+"\n");
	StartObj(1);
	PutDoc("<<\n/Type /Catalog\n/Outlines 3 0 R\n/Pages 4 0 R\n/Dests 5 0 R\n/AcroForm 6 0 R\n/Names 7 0 R\n");
	if (Options->Articles)
		PutDoc("/Threads 8 0 R\n");
	if (Options->Version == 12)
		PutDoc("/OutputIntents [ "+IToStr(ObjCounter-1)+" 0 R ]\n");
	PutDoc("/ViewerPreferences << /PageDirection ");
	PutDoc( Options->Binding == 0 ? "/L2R" : "/R2L");
	PutDoc(" >>\n>>\nendobj\n");
	QString IDg = Datum;
	IDg += Options->Datei;
	IDg += "Scribus "+QString(VERSION);
	IDg += "Libpdf for Scribus "+QString(VERSION);
	IDg += doc->DocTitel;
	IDg += doc->DocAutor;
	IDg += "/False";
	FileID = ComputeMD5(IDg);
	if (Options->Encrypt)
	{
		KeyLen = Options->Version == 14 ? 16 : 5;
		CalcOwnerKey(Options->PassOwner, Options->PassUser);
		CalcUserKey(Options->PassUser, Options->Permissions);
		for (uint cl2 = 0; cl2 < 32; ++cl2)
			ok += OwnerKey[cl2];
		if (KeyLen > 5)
		{
			for (uint cl3 = 0; cl3 < 16; ++cl3)
				uk += UserKey[cl3];
			for (uint cl3r = 0; cl3r < 16; ++cl3r)
				uk += KeyGen[cl3r];
		}
		else
		{
			for (uint cl = 0; cl < 32; ++cl)
				uk += UserKey[cl];
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
	QTime t = QTime::currentTime();
	tmp = t.toString();
	tmp.replace(QRegExp(":"), "");
	Datum += tmp;
	StartObj(2);
	PutDoc("<<\n/Creator "+EncString("(Scribus "+QString(VERSION)+")",2)+"\n");
	PutDoc("/Producer "+EncString("(Libpdf for Scribus "+QString(VERSION)+")",2)+"\n");
	PutDoc("/Title "+EncString("("+doc->DocTitel+")",2)+"\n");
	PutDoc("/Author "+EncString("("+doc->DocAutor+")",2)+"\n");
	PutDoc("/Keywords "+EncString("("+doc->DocKeyWords+")",2)+"\n");
	PutDoc("/CreationDate "+EncString("("+Datum+")",2)+"\n");
	PutDoc("/ModDate "+EncString("("+Datum+")",2)+"\n");
	if (Options->Version == 12)
		PutDoc("/GTS_PDFXVersion (PDF/X-3:2002)\n");
	PutDoc("/Trapped /False\n>>\nendobj\n");
  	for (int t = 0; t < 5; ++t)
		XRef.append(Dokument);
	if (Options->Articles)
		XRef.append(Dokument);
	if (Options->Version == 12)
		XRef.append(Dokument);
	if (Options->Encrypt)
	{
		StartObj(ObjCounter);
		Encrypt = ObjCounter;
		ObjCounter++;
		PutDoc("<<\n/Filter /Standard\n");
		PutDoc( KeyLen > 5 ? "/R 3\n/V 2\n/Length 128\n" : "/R 2\n/V 1\n");
		PutDoc("/O <"+String2Hex(&ok)+">\n");
		PutDoc("/U <"+String2Hex(&uk)+">\n");
		PutDoc("/P "+IToStr(Options->Permissions)+"\n>>\nendobj\n");
	}
	RealFonts = DocFonts;
	QMap<QString,QFont> ReallyUsed;
	ReallyUsed.clear();
	Page* pg;
	PageItem* pgit;
	for (uint c = 0; c < view->MasterPages.count(); ++c)
	{
		pg = view->MasterPages.at(c);
		for (uint d = 0; d < pg->Items.count(); ++d)
		{
			pgit = pg->Items.at(d);
			if ((pgit->PType == 4) || (pgit->PType == 8))
			{
				for (uint e = 0; e < pgit->Ptext.count(); ++e)
				{
					ReallyUsed.insert(pgit->Ptext.at(e)->cfont, DocFonts[pgit->Ptext.at(e)->cfont]);
				}
			}
		}
	}
	for (uint c=0; c<view->Pages.count(); ++c)
	{
		pg = view->Pages.at(c);
		for (uint d = 0; d < pg->Items.count(); ++d)
		{
			pgit = pg->Items.at(d);
			if ((pgit->PType == 4) || (pgit->PType == 8))
			{
				for (uint e = 0; e < pgit->Ptext.count(); ++e)
				{
					ReallyUsed.insert(pgit->Ptext.at(e)->cfont, DocFonts[pgit->Ptext.at(e)->cfont]);
				}
			}
		}
	}
	QMap<QString,QFont>::Iterator it;
	a = 0;
	for (it = ReallyUsed.begin(); it != ReallyUsed.end(); ++it)
	{
		fd = QFileInfo(AllFonts[it.key()]->Datei);
		fext = fd.extension(false).lower();
		if ((AllFonts[it.key()]->isOTF) || (AllFonts[it.key()]->Subset))
		{
			QString fon = "";
			QMap<uint,FPointArray>::Iterator ig;
			for (ig = AllFonts[it.key()]->RealGlyphs.begin(); ig != AllFonts[it.key()]->RealGlyphs.end(); ++ig)
			{
				FPoint np, np1, np2;
				bool nPath = true;
				if (ig.data().size() > 3)
				{
					FPointArray gly = ig.data().copy();
					QWMatrix mat;
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
					StartObj(ObjCounter);
					ObjCounter++;
					np = doc->ActPage->GetMinClipF(gly);
					np1 = GetMaxClipF(gly);
					PutDoc("<<\n/Type /XObject\n/Subtype /Form\n/FormType 1\n");
					PutDoc("/BBox [ "+FToStr(np.x())+" "+FToStr(-np.y())+" "+FToStr(np1.x())+
						" "+FToStr(-np1.y())+" ]\n");
					PutDoc("/Resources << /ProcSet [/PDF /Text /ImageB /ImageC /ImageI]\n");
					PutDoc(">>\n");
					if ((Options->Compress) && (CompAvail))
						fon = CompressStr(&fon);
					PutDoc("/Length "+IToStr(fon.length()+1));
					if ((Options->Compress) && (CompAvail))
						PutDoc("\n/Filter /FlateDecode");
					PutDoc(" >>\nstream\n"+EncStream(&fon,	
								 ObjCounter-1)+"\nendstream\nendobj\n");
					Seite.XObjects[AllFonts[it.key()]->RealName()+IToStr(ig.key())] =
						 ObjCounter-1;
					fon = "";
				}
			}
			AllFonts[it.key()]->RealGlyphs.clear();
		}
		else
		{
			UsedFontsP.insert(it.key(), "/Fo"+IToStr(a));
			if ((fext == "pfb") && (Options->EmbedList.contains(it.key())))
			{
				QString fon = "";
				StartObj(ObjCounter);
				QFile f(AllFonts[it.key()]->Datei);
				QByteArray bb(f.size());
				if (f.open(IO_ReadOnly))
				{
					f.readBlock(bb.data(), f.size());
					f.close();
				}
				uint posi;
				for (posi = 6; posi < bb.size(); ++posi)
				{
					if ((bb[posi] == static_cast<char>(0x80)) && 
							(static_cast<int>(bb[posi+1]) == 2))
						break;
					fon += bb[posi];
				}
				int len1 = fon.length();
				uint ulen;
				ulen = bb[posi+2] & 0xff;
				ulen |= (bb[posi+3] << 8) & 0xff00;
				ulen |= (bb[posi+4] << 16) & 0xff0000;
				ulen |= (bb[posi+5] << 24) & 0xff000000;
				if (ulen > bb.size())
					ulen = bb.size()-7;
				posi += 6;
				for (uint j = 0; j < ulen; ++j)
					fon += bb[posi++];
				posi += 6;
				int len2 = fon.length()-len1;
				for (uint j = posi; j < bb.size(); ++j)
				{
					if ((bb[j] == static_cast<char>(0x80)) && (static_cast<int>(bb[j+1]) == 3))
						break;
					if (bb[j] == '\r')
						fon += "\n";
					else
						fon += bb[j];
				}
				int len3 = fon.length()-len2-len1;
				if ((Options->Compress) && (CompAvail))
					fon = CompressStr(&fon);
				PutDoc("<<\n/Length "+IToStr(fon.length()+1)+"\n");
				PutDoc("/Length1 "+IToStr(len1)+"\n");
				PutDoc("/Length2 "+IToStr(len2)+"\n");
				PutDoc("/Length3 "+IToStr(len3)+"\n");
				if ((Options->Compress) && (CompAvail))
					PutDoc("/Filter /FlateDecode\n");
				PutDoc(">>\nstream\n"+EncStream(&fon,ObjCounter)+"\nendstream\nendobj\n");
				ObjCounter++;
			}
			if ((fext == "pfa") && (Options->EmbedList.contains(it.key())))
			{
				QString fon = "";
				QString fon2 = "";
				QString tm = "";
				uint value;
				bool ok = true;
				StartObj(ObjCounter);
				loadText(AllFonts[it.key()]->Datei, &fon);
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
				if ((Options->Compress) && (CompAvail))
					fon2 = CompressStr(&fon2);
				PutDoc("<<\n/Length "+IToStr(fon2.length()+1)+"\n");
				PutDoc("/Length1 "+IToStr(len1+1)+"\n");
				PutDoc("/Length2 "+IToStr(count)+"\n");
				PutDoc(static_cast<int>(fon.length()-len2) == -1 ? QString("/Length3 0\n") :
				       "/Length3 "+IToStr(fon.length()-len2)+"\n");
				if ((Options->Compress) && (CompAvail))
					PutDoc("/Filter /FlateDecode\n");
				PutDoc(">>\nstream\n"+EncStream(&fon2, ObjCounter)+"\nendstream\nendobj\n");
				ObjCounter++;
			}
			if (((fext == "ttf") || (fext == "otf")) && (Options->EmbedList.contains(it.key())))
			{
				QString fon = "";
				StartObj(ObjCounter);
				QFile f(AllFonts[it.key()]->Datei);
				QByteArray bb(f.size());
				if (f.open(IO_ReadOnly))
				{
					f.readBlock(bb.data(), f.size());
					f.close();
				}
				for (uint posi = 0; posi < bb.size(); ++posi)
					fon += bb[posi];
				int len = fon.length();
				if ((Options->Compress) && (CompAvail))
					fon = CompressStr(&fon);
				PutDoc("<<\n/Length "+IToStr(fon.length()+1)+"\n");
				PutDoc("/Length1 "+IToStr(len)+"\n");
				if ((Options->Compress) && (CompAvail))
					PutDoc("/Filter /FlateDecode\n");
				PutDoc(">>\nstream\n"+EncStream(&fon, ObjCounter)+"\nendstream\nendobj\n");
				ObjCounter++;
			}
			StartObj(ObjCounter);
			PutDoc("<<\n/Type /FontDescriptor\n");
			PutDoc("/FontName /"+AllFonts[it.key()]->RealName()+"\n");
			PutDoc("/FontBBox [ "+AllFonts[it.key()]->FontBBox+" ]\n");
			PutDoc("/Flags ");
			QFontInfo fo = QFontInfo(it.data());
			int pfl = 0;
			if (AllFonts[it.key()]->IsFixedPitch)
				pfl = pfl ^ 1;
			if (fo.italic())
				pfl = pfl ^ 64;
//			pfl = pfl ^ 4;
			pfl = pfl ^ 32;
			PutDoc(IToStr(pfl)+"\n");
			PutDoc("/Ascent "+AllFonts[it.key()]->Ascent+"\n");
			PutDoc("/Descent "+AllFonts[it.key()]->Descender+"\n");
			PutDoc("/CapHeight "+AllFonts[it.key()]->CapHeight+"\n");
			PutDoc("/ItalicAngle "+AllFonts[it.key()]->ItalicAngle+"\n");
			PutDoc("/StemV "+AllFonts[it.key()]->StdVW+"\n");
			if (((fext == "ttf") || (fext == "otf")) && (Options->EmbedList.contains(it.key())))
				PutDoc("/FontFile2 "+IToStr(ObjCounter-1)+" 0 R\n");
			if ((fext == "pfb") && (Options->EmbedList.contains(it.key())))
				PutDoc("/FontFile "+IToStr(ObjCounter-1)+" 0 R\n");
			if ((fext == "pfa") && (Options->EmbedList.contains(it.key())))
				PutDoc("/FontFile "+IToStr(ObjCounter-1)+" 0 R\n");
			PutDoc(">>\nendobj\n");
			ObjCounter++;
			GListeInd gl;
			GlyIndex(&gl, AllFonts[it.key()]->Datei);
			GlyphsIdxOfFont.insert(it.key(), gl);
			uint FontDes = ObjCounter - 1;
			GListeInd::Iterator itg;
			itg = gl.begin();
			GListeInd::Iterator itg2;
			itg2 = gl.begin();
			uint Fcc = gl.count() / 224;
			if ((gl.count() % 224) != 0)
				Fcc += 1;
			for (uint Fc = 0; Fc < Fcc; ++Fc)
			{
				StartObj(ObjCounter);
				int chCount = 31;
				PutDoc("[ 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ");
				for (int ww = 31; ww < 256; ++ww)
				{
					PutDoc(IToStr(static_cast<int>(AllFonts[it.key()]->CharWidth[itg.key()]*
							1000))+" ");
					if (itg == gl.end())
						break;
					++itg;
					chCount++;
				}
				PutDoc("]\nendobj\n");
				ObjCounter++;
				StartObj(ObjCounter);
				ObjCounter++;
				PutDoc("<< /Type /Encoding\n/Differences [ 32\n");
				int crc = 0;
				for (int ww2 = 32; ww2 < 256; ++ww2)
				{
					PutDoc(itg2.data().Name+" ");
					if (itg2 == gl.end())
						break;
					++itg2;
					crc++;
					if (crc > 8)
					{
						PutDoc("\n");
						crc = 0;
					}
				}
				PutDoc("]\n>>\nendobj\n");
				StartObj(ObjCounter);
				PutDoc("<<\n/Type /Font\n/Subtype ");
				PutDoc(((fext == "ttf") || (fext == "otf")) ? "/TrueType\n" : "/Type1\n");
				PutDoc("/Name /Fo"+IToStr(a)+"S"+IToStr(Fc)+"\n");
				PutDoc("/BaseFont /"+AllFonts[it.key()]->RealName()+"\n");
				PutDoc("/FirstChar 0\n");
				PutDoc("/LastChar "+IToStr(chCount-1)+"\n");
				PutDoc("/Widths "+IToStr(ObjCounter-2)+" 0 R\n");
				PutDoc("/Encoding "+IToStr(ObjCounter-1)+" 0 R\n");
				PutDoc("/FontDescriptor "+IToStr(FontDes)+" 0 R\n");
				PutDoc(">>\nendobj\n");
				Seite.FObjects["Fo"+IToStr(a)+"S"+IToStr(Fc)] = ObjCounter;
				ObjCounter++;
			}
		}
		a++;
	}
#ifdef HAVE_CMS
	if ((CMSuse) && (Options->UseProfiles))
	{
		StartObj(ObjCounter);
		ObjCounter++;
		QString dataP;
		struct ICCD dataD;
		loadText(InputProfiles[Options->SolidProf], &dataP);
		PutDoc("<<\n");
		if ((Options->Compress) && (CompAvail))
		{
			PutDoc("/Filter /FlateDecode\n");
			dataP = CompressStr(&dataP);
		}
		PutDoc("/Length "+IToStr(dataP.length()+1)+"\n");
		PutDoc("/N "+IToStr(Options->SComp)+"\n");
		PutDoc(">>\nstream\n"+EncStream(&dataP, ObjCounter-1)+"\nendstream\nendobj\n");
		StartObj(ObjCounter);
		dataD.ResName = ResNam+IToStr(ResCount);
		dataD.ICCArray = "[ /ICCBased "+IToStr(ObjCounter-1)+" 0 R ]";
		dataD.ResNum = ObjCounter;
		ICCProfiles[Options->SolidProf] = dataD;
		PutDoc("[ /ICCBased "+IToStr(ObjCounter-1)+" 0 R ]\n");
		PutDoc("endobj\n");
		ResCount++;
		ObjCounter++;
	}
#endif
	return true;
}

void PDFlib::PDF_TemplatePage(Page* pag)
{
	QString tmp;
	ActPageP = pag;
	Inhalt = "";
	Seite.AObjects.clear();
	PDF_ProcessPage(pag, pag->PageNr);
	StartObj(ObjCounter);
	ObjCounter++;
	PutDoc("<<\n/Type /XObject\n/Subtype /Form\n/FormType 1\n");
	PutDoc("/BBox [ 0 0 "+FToStr(doc->PageB)+" "+FToStr(doc->PageH)+" ]\n");
	PutDoc("/Resources << /ProcSet [/PDF /Text /ImageB /ImageC /ImageI]\n");
	if (Seite.XObjects.count() != 0)
	{
		PutDoc("/XObject <<\n");
		QMap<QString,int>::Iterator it;
		for (it = Seite.XObjects.begin(); it != Seite.XObjects.end(); ++it)
			PutDoc("/"+it.key()+" "+IToStr(it.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if (Seite.FObjects.count() != 0)
	{
		PutDoc("/Font << \n");
		QMap<QString,int>::Iterator it2;
		for (it2 = Seite.FObjects.begin(); it2 != Seite.FObjects.end(); ++it2)
			PutDoc("/"+it2.key()+" "+IToStr(it2.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if (Shadings.count() != 0)
	{
		PutDoc("/Shading << \n");
		QMap<QString,int>::Iterator it3;
		for (it3 = Shadings.begin(); it3 != Shadings.end(); ++it3)
			PutDoc("/"+it3.key()+" "+IToStr(it3.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if (Transpar.count() != 0)
	{
		PutDoc("/ExtGState << \n");
		QMap<QString,int>::Iterator it3t;
		for (it3t = Transpar.begin(); it3t != Transpar.end(); ++it3t)
			PutDoc("/"+it3t.key()+" "+IToStr(it3t.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if (ICCProfiles.count() != 0)
	{
		PutDoc("/ColorSpace << \n");
		QMap<QString,ICCD>::Iterator it3c;
		for (it3c = ICCProfiles.begin(); it3c != ICCProfiles.end(); ++it3c)
			PutDoc("/"+it3c.data().ResName+" "+IToStr(it3c.data().ResNum)+" 0 R\n");
		PutDoc(">>\n");
	}
	PutDoc(">>\n");
	if ((Options->Compress) && (CompAvail))
		Inhalt = CompressStr(&Inhalt);
	PutDoc("/Length "+IToStr(Inhalt.length()+1));
	if ((Options->Compress) && (CompAvail))
		PutDoc("\n/Filter /FlateDecode");
	PutDoc(" >>\nstream\n"+EncStream(&Inhalt, ObjCounter-1)+"\nendstream\nendobj\n");
	QString name = pag->PageNam.simplifyWhiteSpace().replace( QRegExp("\\s"), "" );
	Seite.XObjects[name] = ObjCounter-1;
}

void PDFlib::PDF_Begin_Page(Page* pag, QPixmap pm)
{
	QString tmp;
	ActPageP = pag;
	Inhalt = "";
	Seite.AObjects.clear();
	if (Options->Thumbnails)
	{
		QImage img = pm.convertToImage();
		QString im = ImageToTxt(&img);
		if ((Options->Compress) && (CompAvail))
			im = CompressStr(&im);
		StartObj(ObjCounter);
		PutDoc("<<\n/Width "+IToStr(img.width())+"\n");
		PutDoc("/Height "+IToStr(img.height())+"\n");
		PutDoc("/ColorSpace /DeviceRGB\n/BitsPerComponent 8\n");
		PutDoc("/Length "+IToStr(im.length()+1)+"\n");
		if ((Options->Compress) && (CompAvail))
			PutDoc("/Filter /FlateDecode\n");
		PutDoc(">>\nstream\n"+EncStream(&im, ObjCounter)+"\nendstream\nendobj\n");
		Seite.Thumb = ObjCounter;
		ObjCounter++;
	}
}

void PDFlib::PDF_End_Page()
{
	uint PgNr = ActPageP->PageNr;
	Seite.ObjNum = ObjCounter;
	WritePDFStream(&Inhalt);
	StartObj(ObjCounter);
	PutDoc("<<\n/Type /Page\n/Parent 4 0 R\n");
	PutDoc("/MediaBox [0 0 "+FToStr(doc->PageB)+" "+FToStr(doc->PageH)+"]\n");
	PutDoc("/TrimBox ["+FToStr(Options->BleedLeft)+" "+FToStr(Options->BleedBottom)+
		" "+FToStr(doc->PageB-Options->BleedRight)+" "+FToStr(doc->PageH-Options->BleedTop)+"]\n");
	PutDoc("/Contents "+IToStr(Seite.ObjNum)+" 0 R\n");
	if (Options->Thumbnails)
		PutDoc("/Thumb "+IToStr(Seite.Thumb)+" 0 R\n");
	if (Seite.AObjects.count() != 0)
	{
		PutDoc("/Annots [ ");
		for (uint b = 0; b < Seite.AObjects.count(); ++b)
			PutDoc(IToStr(Seite.AObjects[b])+" 0 R ");
		PutDoc("]\n");
	}
	if (Options->PresentMode)
	{
		PutDoc("/Dur "+IToStr(Options->PresentVals[PgNr].AnzeigeLen)+"\n");
		if (Options->PresentVals[PgNr].Effekt != 0)
		{
			PutDoc("/Trans << /Type /Trans\n");
			PutDoc("/D "+IToStr(Options->PresentVals[PgNr].EffektLen)+"\n");
			switch (Options->PresentVals[PgNr].Effekt)
			{
				case 1:
					PutDoc("/S /Blinds\n");
					PutDoc(Options->PresentVals[PgNr].Dm == 0 ? "/Dm /H\n" : "/Dm /V\n");
					break;
				case 2:
					PutDoc("/S /Box\n");
					PutDoc(Options->PresentVals[PgNr].M == 0 ? "/M /I\n" : "/M /O\n");
					break;
				case 3:
					PutDoc("/S /Dissolve\n");
					break;
				case 4:
					PutDoc("/S /Glitter\n");
					PutDoc("/Di "+IToStr(Options->PresentVals[PgNr].Di)+"\n");
					break;
				case 5:
					PutDoc("/S /Split\n");
					PutDoc(Options->PresentVals[PgNr].Dm == 0 ? "/Dm /H\n" : "/Dm /V\n");
					PutDoc(Options->PresentVals[PgNr].M == 0 ? "/M /I\n" : "/M /O\n");
					break;
				case 6:
					PutDoc("/S /Wipe\n");
					PutDoc("/Di "+IToStr(Options->PresentVals[PgNr].Di)+"\n");
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

void PDFlib::PDF_ProcessPage(Page* pag, uint PNr)
{
	QString tmp;
	ActPageP = pag;
	PageItem* ite;
	int Lnr = 0;
	struct Layer ll;
	ll.Drucken = false;
	ll.LNr = 0;
	QString name = "/"+pag->MPageNam.simplifyWhiteSpace().replace( QRegExp("\\s"), "" );
	if (pag->MPageNam != "")
	{
		Page* mPage = view->MasterPages.at(view->MasterNames[view->Pages.at(PNr)->MPageNam]);
		if (mPage->Items.count() != 0)
		{
			PutPage("1 0 0 1 0 0 cm\n");
			PutPage(name+" Do\n");
			for (uint lam = 0; lam < doc->Layers.count(); ++lam)
			{
				Level2Layer(doc, &ll, Lnr);
				Lnr++;
				if (ll.Drucken)
				{
					for (uint am = 0; am < mPage->Items.count(); ++am)
					{
						ite = mPage->Items.at(am);
						if ((ite->LayerNr != ll.LNr) || (!ite->isPrintable))
							continue;
						if (ite->PType == 4)
						{
							PutPage("q\n");
							if (((ite->Transparency != 0) || 
								(ite->TranspStroke != 0)) && 
								(Options->Version == 14))
									PDF_Transparenz(ite);
							if (Options->UseRGB)
							{
								if (ite->Pcolor != "None")
									PutPage(SetFarbe(ite->Pcolor, ite->Shade)+" rg\n");
								if (ite->Pcolor2 != "None")
									PutPage(SetFarbe(ite->Pcolor2, ite->Shade2)+" RG\n");
							}
							else
							{
#ifdef HAVE_CMS
								if ((CMSuse) && (Options->UseProfiles))
								{
									switch (Options->Intent)
									{
										case 0:
											PutPage("/Perceptual");
											break;
										case 1:
											PutPage("/RelativeColorimetric");
											break;
										case 2:
											PutPage("/Saturation");
											break;
										case 3:
											PutPage("/AbsoluteColorimetric");
											break;
									}
									PutPage(" ri\n");
									PutPage("/"+ICCProfiles[Options->SolidProf].ResName+" cs\n");
									PutPage("/"+ICCProfiles[Options->SolidProf].ResName+" CS\n");
									if (ite->Pcolor != "None")
										PutPage(SetFarbe(ite->Pcolor, ite->Shade)+" scn\n");
									if (ite->Pcolor2 != "None")
										PutPage(SetFarbe(ite->Pcolor2, ite->Shade2)+" SCN\n");
								}
								else
								{
#endif
									if (ite->Pcolor != "None")
										PutPage(SetFarbe(ite->Pcolor, ite->Shade)+" k\n");
									if (ite->Pcolor2 != "None")
										PutPage(SetFarbe(ite->Pcolor2, ite->Shade2)+" K\n");
								}
#ifdef HAVE_CMS
							}
#endif
							PutPage("1 0 0 1 "+FToStr(ite->Xpos)+" "+
									FToStr(doc->PageH - ite->Ypos)+" cm\n");
							if (ite->Rot != 0)
							{
								double sr = sin(-ite->Rot* 3.1415927 / 180.0);
								double cr = cos(-ite->Rot* 3.1415927 / 180.0);
								if ((cr * cr) < 0.001)
									cr = 0;
								if ((sr * sr) < 0.001)
									sr = 0;
								PutPage(FToStr(cr)+" "+FToStr(sr)+" "+FToStr(-sr)+" "+FToStr(cr)+" 0 0 cm\n");
							}
							if ((ite->Pcolor != "None") || (ite->GrType != 0))
							{
								if (ite->GrType != 0)
									PDF_Gradient(ite);
								else
								{
									PutPage(SetClipPath(ite));
									PutPage("h\nf*\n");
								}
							}
							if ((ite->flippedH % 2) != 0)
								PutPage("-1 0 0 1 "+FToStr(ite->Width)+" 0 cm\n");
							if ((ite->flippedV % 2) != 0)
								PutPage("1 0 0 -1 0 "+FToStr(-ite->Height)+" cm\n");
							PutPage(setTextSt(ite, PNr));
							PutPage("Q\n");
						}
					}
					for (uint am = 0; am < mPage->Items.count(); ++am)
					{
						ite = mPage->Items.at(am);
						if ((ite->LayerNr != ll.LNr) || (!ite->isPrintable) || (ite->PType != 4))
							continue;
						PutPage("q\n");
						if (((ite->Transparency != 0) || (ite->TranspStroke != 0)) && (Options->Version == 14))
							PDF_Transparenz(ite);
						if (Options->UseRGB)
						{
							if (ite->Pcolor != "None")
								PutPage(SetFarbe(ite->Pcolor, ite->Shade)+" rg\n");
							if (ite->Pcolor2 != "None")
								PutPage(SetFarbe(ite->Pcolor2, ite->Shade2)+" RG\n");
						}
						else
						{
#ifdef HAVE_CMS
					if ((CMSuse) && (Options->UseProfiles))
					{
						char *tmp[] = {"/Perceptual", "/RelativeColorimetric",
								 "/Saturation", "/AbsoluteColorimetric"};
						PutPage(tmp[Options->Intent]);
						PutPage(" ri\n");
						PutPage("/"+ICCProfiles[Options->SolidProf].ResName+" cs\n");
						PutPage("/"+ICCProfiles[Options->SolidProf].ResName+" CS\n");
						if (ite->Pcolor != "None")
							PutPage(SetFarbe(ite->Pcolor, ite->Shade)+" scn\n");
						if (ite->Pcolor2 != "None")
							PutPage(SetFarbe(ite->Pcolor2, ite->Shade2)+" SCN\n");
					}
					else
					{
#endif
						if (ite->Pcolor != "None")
							PutPage(SetFarbe(ite->Pcolor, ite->Shade)+" k\n");
						if (ite->Pcolor2 != "None")
							PutPage(SetFarbe(ite->Pcolor2, ite->Shade2)+" K\n");
					}
#ifdef HAVE_CMS
				}
#endif
						Inhalt += FToStr(ite->Pwidth)+" w\n";
						if (ite->DashValues.count() != 0)
						{
							PutPage("[ ");
							QValueList<double>::iterator it;
							for ( it = ite->DashValues.begin(); it != ite->DashValues.end(); ++it )
							{
								PutPage(IToStr(static_cast<int>(*it))+" ");
							}
							PutPage("] "+IToStr(static_cast<int>(ite->DashOffset))+" d\n");
						}
						else
						{
							QString Dt = FToStr(QMAX(2*ite->Pwidth, 1));
							QString Da = FToStr(QMAX(6*ite->Pwidth, 1));
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
						PutPage("2 J\n");
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
						PutPage("1 0 0 1 "+FToStr(ite->Xpos)+" "+FToStr(doc->PageH - ite->Ypos)+" cm\n");
						if (ite->Rot != 0)
						{
							double sr = sin(-ite->Rot* 3.1415927 / 180.0);
							double cr = cos(-ite->Rot* 3.1415927 / 180.0);
							if ((cr * cr) < 0.001)
								cr = 0;
							if ((sr * sr) < 0.001)
								sr = 0;
							PutPage(FToStr(cr)+" "+FToStr(sr)+" "+FToStr(-sr)+" "+FToStr(cr)+ " 0 0 cm\n");
						}
						if (ite->isTableItem)
						{
							if ((ite->TopLine) || (ite->RightLine) || (ite->BottomLine) || (ite->LeftLine))
							{
								if (ite->TopLine)
								{
									PutPage("0 0 m\n");
									PutPage(FToStr(ite->Width)+" 0 l\n");
								}
								if (ite->RightLine)
								{
									PutPage(FToStr(ite->Width)+" 0 m\n");
									PutPage(FToStr(ite->Width)+" "+FToStr(-ite->Height)+" l\n");
								}
								if (ite->BottomLine)
								{
									PutPage("0 "+FToStr(-ite->Height)+" m\n");
									PutPage(FToStr(ite->Width)+" "+FToStr(-ite->Height)+" l\n");
								}
								if (ite->LeftLine)
								{
									PutPage("0 0 m\n");
									PutPage("0 "+FToStr(-ite->Height)+" l\n");
								}
								PutPage("S\n");
							}
						}
						PutPage("Q\n");
					}
				}
			}
		}
	}
	ll.Drucken = false;
	ll.LNr = 0;
	Lnr = 0;
	for (uint la = 0; la < doc->Layers.count(); ++la)
	{
		Level2Layer(doc, &ll, Lnr);
		if (ll.Drucken)
		{
			for (uint a = 0; a < ActPageP->Items.count(); ++a)
			{
				ite = ActPageP->Items.at(a);
				if (ite->LayerNr != ll.LNr)
					continue;
				PutPage("q\n");
				if (((ite->Transparency != 0) || (ite->TranspStroke != 0)) && 
					(Options->Version == 14))
					PDF_Transparenz(ite);
				if ((ite->isBookmark) && (Options->Bookmarks))
					PDF_Bookmark(ite->BMnr, doc->PageH - ite->Ypos);
				if (!ite->isPrintable || ((ite->PType == 4) && (pag->PageNam != "")))
				{
					PutPage("Q\n");
					continue;
				}
				if (Options->UseRGB)
				{
					if (ite->Pcolor != "None")
						PutPage(SetFarbe(ite->Pcolor, ite->Shade)+" rg\n");
					if (ite->Pcolor2 != "None")
						PutPage(SetFarbe(ite->Pcolor2, ite->Shade2)+" RG\n");
				}
				else
				{
#ifdef HAVE_CMS
					if ((CMSuse) && (Options->UseProfiles))
					{
						char *tmp[] = {"/Perceptual", "/RelativeColorimetric", "/Saturation", "/AbsoluteColorimetric"};
						PutPage(tmp[Options->Intent]);
						PutPage(" ri\n");
						PutPage("/"+ICCProfiles[Options->SolidProf].ResName+" cs\n");
						PutPage("/"+ICCProfiles[Options->SolidProf].ResName+" CS\n");
						if (ite->Pcolor != "None")
							PutPage(SetFarbe(ite->Pcolor, ite->Shade)+" scn\n");
						if (ite->Pcolor2 != "None")
							PutPage(SetFarbe(ite->Pcolor2, ite->Shade2)+" SCN\n");
					}
					else
					{
#endif
						if (ite->Pcolor != "None")
							PutPage(SetFarbe(ite->Pcolor, ite->Shade)+" k\n");
						if (ite->Pcolor2 != "None")
							PutPage(SetFarbe(ite->Pcolor2, ite->Shade2)+" K\n");
					}
#ifdef HAVE_CMS
				}
#endif
				Inhalt += FToStr(ite->Pwidth)+" w\n";
				if (ite->DashValues.count() != 0)
				{
					PutPage("[ ");
					QValueList<double>::iterator it;
					for ( it = ite->DashValues.begin(); it != ite->DashValues.end(); ++it )
					{
						PutPage(IToStr(static_cast<int>(*it))+" ");
					}
					PutPage("] "+IToStr(static_cast<int>(ite->DashOffset))+" d\n");
				}
				else
				{
					QString Dt = FToStr(QMAX(2*ite->Pwidth, 1));
					QString Da = FToStr(QMAX(6*ite->Pwidth, 1));
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
				PutPage("1 0 0 1 "+FToStr(ite->Xpos)+" "+FToStr(doc->PageH - ite->Ypos)+" cm\n");
				if (ite->Rot != 0)
				{
					double sr = sin(-ite->Rot* 3.1415927 / 180.0);
					double cr = cos(-ite->Rot* 3.1415927 / 180.0);
					if ((cr * cr) < 0.001)
						cr = 0;
					if ((sr * sr) < 0.001)
						sr = 0;
					PutPage(FToStr(cr)+" "+FToStr(sr)+" "+FToStr(-sr)+" "+FToStr(cr)+
								" 0 0 cm\n");
				}
				switch (ite->PType)
				{
					case 2:
						if ((ite->Pcolor != "None") || (ite->GrType != 0))
						{
							if (ite->GrType != 0)
								PDF_Gradient(ite);
							else
							{
								PutPage(SetClipPath(ite));
								PutPage("h\nf*\n");
							}
						}
						PutPage("q\n");
						PutPage(SetClipPath(ite));
						PutPage("h\nW*\nn\n");
						if ((ite->flippedH % 2) != 0)
							PutPage("-1 0 0 1 "+FToStr(ite->Width)+" 0 cm\n");
						if ((ite->flippedV % 2) != 0)
							PutPage("1 0 0 -1 0 "+FToStr(-ite->Height)+" cm\n");
						if ((ite->PicAvail) && (ite->Pfile != ""))
							PDF_Image(ite->InvPict, ite->Pfile, ite->LocalScX,
									 ite->LocalScY, ite->LocalX, -ite->LocalY,
									 false, ite->IProfile, ite->UseEmbedded,
									  ite->IRender);
						PutPage("Q\n");
						if (((ite->Pcolor2 != "None") || (ite->NamedLStyle != "")) && (!ite->isTableItem))
						{
							if ((ite->NamedLStyle == "") && (ite->Pwidth != 0.0))
							{
								PutPage(SetClipPath(ite));
								PutPage("h\nS\n");
							}
							else
							{
								multiLine ml = doc->MLineStyles[ite->NamedLStyle];
								for (int it = ml.size()-1; it > -1; it--)
								{
									PutPage(setStrokeMulti(&ml[it]));
									PutPage(SetClipPath(ite));
									PutPage("h\nS\n");
								}
							}
						}
						break;
					case 4:
						if ((ite->isAnnotation) && (Options->Version != 12))
						{
							PDF_Annotation(ite, PNr);
							break;
							}
						if ((ite->Pcolor != "None") || (ite->GrType != 0))
						{
							if (ite->GrType != 0)
								PDF_Gradient(ite);
							else
							{
								PutPage(SetClipPath(ite));
								PutPage("h\nf*\n");
							}
						}
						PutPage("q\n");
						if ((ite->flippedH % 2) != 0)
							PutPage("-1 0 0 1 "+FToStr(ite->Width)+" 0 cm\n");
						if ((ite->flippedV % 2) != 0)
							PutPage("1 0 0 -1 0 "+FToStr(-ite->Height)+" cm\n");
						PutPage(setTextSt(ite, PNr));
						PutPage("Q\n");
						if (((ite->Pcolor2 != "None") || (ite->NamedLStyle != "")) && (!ite->isTableItem))
						{
							if ((ite->NamedLStyle == "") && (ite->Pwidth != 0.0))
							{
								PutPage(SetClipPath(ite));
								PutPage("h\nS\n");
							}
							else
							{
								multiLine ml = doc->MLineStyles[ite->NamedLStyle];
								for (int it = ml.size()-1; it > -1; it--)
								{
									PutPage(setStrokeMulti(&ml[it]));
									PutPage(SetClipPath(ite));
									PutPage("h\nS\n");
								}
							}
						}
						break;
					case 5:
						if (ite->NamedLStyle == "")
						{
							PutPage("0 0 m\n");
							PutPage(FToStr(ite->Width)+" "+FToStr(-ite->Height)+" l\n");
							PutPage("S\n");
						}
						else
						{
							multiLine ml = doc->MLineStyles[ite->NamedLStyle];
							for (int it = ml.size()-1; it > -1; it--)
							{
								PutPage(setStrokeMulti(&ml[it]));
								PutPage("0 0 m\n");
								PutPage(FToStr(ite->Width)+" "+FToStr(-ite->Height)+" l\n");
								PutPage("S\n");
							}
						}
						break;
					case 1:
					case 3:
					case 6:
						if (ite->GrType != 0)
							PDF_Gradient(ite);
						else
						{
							if (ite->Pcolor != "None")
							{
								PutPage(SetClipPath(ite));
								PutPage("h\nf*\n");
							}
						}
						if ((ite->Pcolor2 != "None") || (ite->NamedLStyle != ""))
						{
							if ((ite->NamedLStyle == "") && (ite->Pwidth != 0.0))
							{
								PutPage(SetClipPath(ite));
								PutPage("h\nS\n");
							}
							else
							{
								multiLine ml = doc->MLineStyles[ite->NamedLStyle];
								for (int it = ml.size()-1; it > -1; it--)
								{
									PutPage(setStrokeMulti(&ml[it]));
									PutPage(SetClipPath(ite));
									PutPage("h\nS\n");
								}
							}
						}
						break;
					case 7:
						if (ite->GrType != 0)
							PDF_Gradient(ite);
						else
						{
							if (ite->Pcolor != "None")
							{
								PutPage(SetClipPath(ite));
								PutPage("h\nf*\n");
							}
						}
						if ((ite->Pcolor2 != "None") || (ite->NamedLStyle != ""))
						{
							if ((ite->NamedLStyle == "") && (ite->Pwidth != 0.0))
							{
								PutPage(SetClipPath(ite, false));
								PutPage("S\n");
							}
							else
							{
								multiLine ml = doc->MLineStyles[ite->NamedLStyle];
								for (int it = ml.size()-1; it > -1; it--)
								{
									PutPage(setStrokeMulti(&ml[it]));
									PutPage(SetClipPath(ite, false));
									PutPage("S\n");
								}
							}
						}
						break;
					case 8:
						if (ite->PoShow)
						{
							if (ite->PoLine.size() > 3)
							{
								PutPage("q\n");
								if ((ite->Pcolor2 != "None") || (ite->NamedLStyle != ""))
								{
									if ((ite->NamedLStyle == "") && (ite->Pwidth != 0.0))
									{
										PutPage(SetClipPath(ite, false));
										PutPage("S\n");
									}
									else
									{
										multiLine ml = doc->MLineStyles[ite->NamedLStyle];
										for (int it = ml.size()-1; 
											it > -1; it--)
											{
											PutPage(setStrokeMulti(&ml[it]));
											PutPage(SetClipPath(ite, false));
											PutPage("S\n");
											}
									}
								}
								PutPage("Q\n");
							}
						}
						PutPage(setTextSt(ite, PNr));
						break;
					}
				PutPage("Q\n");
				}
				for (uint a = 0; a < ActPageP->Items.count(); ++a)
				{
					ite = ActPageP->Items.at(a);
					if (ite->LayerNr != ll.LNr)
						continue;
					PutPage("q\n");
					if (((ite->Transparency != 0) || (ite->TranspStroke != 0)) && 
						(Options->Version == 14))
						PDF_Transparenz(ite);
					if (!ite->isPrintable)
					{
						PutPage("Q\n");
						continue;
					}
					if (Options->UseRGB)
					{
						if (ite->Pcolor != "None")
							PutPage(SetFarbe(ite->Pcolor, ite->Shade)+" rg\n");
						if (ite->Pcolor2 != "None")
							PutPage(SetFarbe(ite->Pcolor2, ite->Shade2)+" RG\n");
					}
					else
					{
#ifdef HAVE_CMS
					if ((CMSuse) && (Options->UseProfiles))
					{
						char *tmp[] = {"/Perceptual", "/RelativeColorimetric",
								 "/Saturation", "/AbsoluteColorimetric"};
						PutPage(tmp[Options->Intent]);
						PutPage(" ri\n");
						PutPage("/"+ICCProfiles[Options->SolidProf].ResName+" cs\n");
						PutPage("/"+ICCProfiles[Options->SolidProf].ResName+" CS\n");
						if (ite->Pcolor != "None")
							PutPage(SetFarbe(ite->Pcolor, ite->Shade)+" scn\n");
						if (ite->Pcolor2 != "None")
							PutPage(SetFarbe(ite->Pcolor2, ite->Shade2)+" SCN\n");
					}
					else
					{
#endif
						if (ite->Pcolor != "None")
							PutPage(SetFarbe(ite->Pcolor, ite->Shade)+" k\n");
						if (ite->Pcolor2 != "None")
							PutPage(SetFarbe(ite->Pcolor2, ite->Shade2)+" K\n");
					}
#ifdef HAVE_CMS
				}
#endif
					Inhalt += FToStr(ite->Pwidth)+" w\n";
					if (ite->DashValues.count() != 0)
					{
						PutPage("[ ");
						QValueList<double>::iterator it;
						for ( it = ite->DashValues.begin(); it != ite->DashValues.end(); ++it )
						{
							PutPage(IToStr(static_cast<int>(*it))+" ");
						}
						PutPage("] "+IToStr(static_cast<int>(ite->DashOffset))+" d\n");
					}
					else
					{
						QString Dt = FToStr(QMAX(2*ite->Pwidth, 1));
						QString Da = FToStr(QMAX(6*ite->Pwidth, 1));
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
					PutPage("2 J\n");
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
					PutPage("1 0 0 1 "+FToStr(ite->Xpos)+" "+FToStr(doc->PageH - ite->Ypos)+" cm\n");
					if (ite->Rot != 0)
					{
						double sr = sin(-ite->Rot* 3.1415927 / 180.0);
						double cr = cos(-ite->Rot* 3.1415927 / 180.0);
						if ((cr * cr) < 0.001)
							cr = 0;
						if ((sr * sr) < 0.001)
							sr = 0;
						PutPage(FToStr(cr)+" "+FToStr(sr)+" "+FToStr(-sr)+" "+FToStr(cr)+ " 0 0 cm\n");
					}
					if (ite->isTableItem)
					{
						if ((ite->TopLine) || (ite->RightLine) || (ite->BottomLine) || (ite->LeftLine))
						{
							if (ite->TopLine)
							{
								PutPage("0 0 m\n");
								PutPage(FToStr(ite->Width)+" 0 l\n");
							}
							if (ite->RightLine)
							{
								PutPage(FToStr(ite->Width)+" 0 m\n");
								PutPage(FToStr(ite->Width)+" "+FToStr(-ite->Height)+" l\n");
							}
							if (ite->BottomLine)
							{
								PutPage("0 "+FToStr(-ite->Height)+" m\n");
								PutPage(FToStr(ite->Width)+" "+FToStr(-ite->Height)+" l\n");
							}
							if (ite->LeftLine)
							{
								PutPage("0 0 m\n");
								PutPage("0 "+FToStr(-ite->Height)+" l\n");
							}
							PutPage("S\n");
						}
					}
					PutPage("Q\n");
				}
			}
		Lnr++;
	}
}

QString PDFlib::setStrokeMulti(struct singleLine *sl)
{
	QString tmp = "";
	if (Options->UseRGB)
		tmp += SetFarbe(sl->Color, sl->Shade)+" RG\n";
	else
	{
#ifdef HAVE_CMS
		if ((CMSuse) && (Options->UseProfiles))
		{
			char *t[] = {"/Perceptual", "/RelativeColorimetric", "/Saturation",
					 "/AbsoluteColorimetric"};
			tmp += t[Options->Intent];
			tmp += " ri\n";
			tmp += "/"+ICCProfiles[Options->SolidProf].ResName+" CS\n";
			tmp += SetFarbe(sl->Color, sl->Shade)+" SCN\n";
		}
		else
		{
#endif
			tmp += SetFarbe(sl->Color, sl->Shade)+" K\n";
		}
#ifdef HAVE_CMS
		}
#endif
	tmp += FToStr(sl->Width)+" w\n";
	QString Dt = FToStr(QMAX(2*sl->Width, 1));
	QString Da = FToStr(QMAX(6*sl->Width, 1));
	switch (static_cast<PenStyle>(sl->Dash))
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
	switch (static_cast<PenCapStyle>(sl->LineEnd))
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
	switch (static_cast<PenJoinStyle>(sl->LineJoin))
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

QString PDFlib::setTextSt(PageItem *ite, uint PNr)
{
	struct Pti *hl;
	QString tmp = "";
	QString tmp2 = "";
	QString FillColor = "";
	QString StrokeColor = "";
	if (ite->PType == 4)
		tmp += "BT\n";
	for (uint d = 0; d < ite->MaxChars; ++d)
	{
		hl = ite->Ptext.at(d);
		if ((hl->ch == QChar(13)) || (hl->ch == QChar(10)) || (hl->ch == QChar(9)) || (hl->ch == QChar(28)))
			continue;
		if (hl->cstyle & 256)
			continue;
		if (ite->PType == 8)
		{
			tmp += "q\n";
			tmp += "1 0 0 1 "+FToStr(hl->PtransX)+" "+FToStr(-hl->PtransY)+" cm\n";
			double sr = sin(-hl->PRot* 3.1415927 / 180.0);
			double cr = cos(-hl->PRot* 3.1415927 / 180.0);
			if ((cr * cr) < 0.001)
				cr = 0;
			if ((sr * sr) < 0.001)
				sr = 0;
			tmp += FToStr(cr)+" "+FToStr(sr)+" "+FToStr(-sr)+" "+FToStr(cr)+" 0 0 cm\n";
			tmp += "BT\n";
		}
		else
		{
			if (hl->yp == 0)
				break;
		}
		int tsz = hl->csize;
		QString chx = hl->ch;
		if (hl->ch == QChar(29))
			chx = " ";
		if (hl->ch == QChar(30))
		{
			uint zae = 0;
			while (ite->Ptext.at(d+zae)->ch == QChar(30))
			{
				zae++;
				if (d+zae == ite->MaxChars)
					break;
			}
			QString out="%1";
			chx = out.arg(PNr+doc->FirstPnum, zae).right(zae).left(1);
		}
		uint cc = chx[0].unicode();
		uint idx = 0;
		if (GlyphsIdxOfFont[hl->cfont].contains(cc))
			idx = GlyphsIdxOfFont[hl->cfont][cc].Code;
		uint idx1 = (idx >> 8) & 0xFF;
		if (hl->cstyle & 64)
		{
			if (chx.upper() != chx)
			{
				tsz = hl->csize * doc->VKapit / 100;
				chx = chx.upper();
			}
		}
		if ((hl->cstyle & 1) || (hl->cstyle & 2))
			tsz = hl->csize * doc->VHochSc / 100;
		if (hl->cstroke != "None")
		{
			StrokeColor = "";
			if (Options->UseRGB)
				StrokeColor += SetFarbe(hl->cstroke, hl->cshade2)+" RG\n";
			else
			{
#ifdef HAVE_CMS
				if ((CMSuse) && (Options->UseProfiles))
				{
					StrokeColor += "/"+ICCProfiles[Options->SolidProf].ResName+" CS\n";
					StrokeColor += SetFarbe(hl->cstroke, hl->cshade2)+" SCN\n";
				}
				else
#endif
				StrokeColor += SetFarbe(hl->cstroke, hl->cshade2)+" K\n";
			}
		}
		if (hl->ccolor != "None")
		{
			FillColor = "";
			if (Options->UseRGB)
				FillColor += SetFarbe(hl->ccolor, hl->cshade)+" rg\n";
			else
			{
#ifdef HAVE_CMS
				if ((CMSuse) && (Options->UseProfiles))
				{
					FillColor += "/"+ICCProfiles[Options->SolidProf].ResName+" cs\n";
					FillColor += SetFarbe(hl->ccolor, hl->cshade)+" scn\n";
				}
				else
#endif
				FillColor += SetFarbe(hl->ccolor, hl->cshade)+" k\n";
			}
		}
		if (((*doc->AllFonts)[hl->cfont]->isOTF) || ((*doc->AllFonts)[hl->cfont]->Subset))
		{
			uint chr = chx[0].unicode();
			if (((*doc->AllFonts)[hl->cfont]->CharWidth.contains(chr)) && (chr != 32))
			{
				if ((hl->cstroke != "None") && (hl->cstyle & 4))
				{
					tmp2 += FToStr((*doc->AllFonts)[hl->cfont]->strokeWidth * tsz / 200.0)+
								" w\n[] 0 d\n0 J\n0 j\n";
					tmp2 += StrokeColor;
				}
				if (hl->ccolor != "None")
					tmp2 += FillColor;
				tmp2 += "q\n";
				if (ite->PType == 8)
				{
					tmp2 += "1 0 0 1 "+FToStr(hl->PtransX)+" "+FToStr(-hl->PtransY)+" cm\n";
					double sr = sin(-hl->PRot* 3.1415927 / 180.0);
					double cr = cos(-hl->PRot* 3.1415927 / 180.0);
					if ((cr * cr) < 0.001)
						cr = 0;
					if ((sr * sr) < 0.001)
						sr = 0;
					tmp2 += FToStr(cr)+" "+FToStr(sr)+" "+FToStr(-sr)+" "+FToStr(cr)+
								" 0 0 cm\n";
				}
				if (ite->Reverse)
				{
					double wid = Cwidth(doc, hl->cfont, chx, hl->csize) * (hl->cscale / 100.0);
					tmp2 += "1 0 0 1 "+FToStr(hl->xp)+" "+FToStr((hl->yp - (tsz / 10.0)) *
							 -1)+" cm\n";
					tmp2 += "-1 0 0 1 0 0 cm\n";
					tmp2 += "1 0 0 1 "+FToStr(-wid)+" 0 cm\n";
					tmp2 += FToStr(tsz / 10.0)+" 0 0 "+FToStr(tsz / 10.0)+" 0 0 cm\n";
				}
				else
					tmp2 += FToStr(tsz / 10.0)+" 0 0 "+FToStr(tsz / 10.0)+" "+
							FToStr(hl->xp)+" "+FToStr((hl->yp - (tsz / 10.0)) * -1)+
								" cm\n";
				tmp2 += FToStr(hl->cscale / 100.0)+" 0 0 1 0 0 cm\n";
				tmp2 += "/"+(*doc->AllFonts)[hl->cfont]->RealName()+IToStr(chr)+" Do\n";
				if (hl->cstyle & 4)
				{
					FPointArray gly = (*doc->AllFonts)[hl->cfont]->GlyphArray[chr].Outlines.copy();
					QWMatrix mat;
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
				if (hl->cstyle & 512)
				{
					int chs = hl->csize;
					double wtr = Cwidth(doc, hl->cfont, chx, chs);
					tmp2 += "1 0 0 1 "+FToStr(wtr / (tsz / 10.0))+" 0 cm\n";
					chx = "-";
					chr = chx[0].unicode();
					FPointArray gly = (*doc->AllFonts)[hl->cfont]->GlyphArray[chr].Outlines.copy();
					QWMatrix mat;
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
					tmp2 += "f*\n";
				}
				tmp2 += "Q\n";
			}
		}
		else
		{
			cc = chx[0].unicode();
			idx = 0;
			if (GlyphsIdxOfFont[hl->cfont].contains(cc))
				idx = GlyphsIdxOfFont[hl->cfont][cc].Code;
			idx1 = (idx >> 8) & 0xFF;
			tmp += UsedFontsP[hl->cfont]+"S"+IToStr(idx1)+" "+FToStr(tsz / 10.0)+" Tf\n";
			if (hl->cstroke != "None")
			{
				tmp += StrokeColor;
				if ((hl->cstyle & 8) || (hl->cstyle & 16))
					tmp2 += StrokeColor;
			}
			if (hl->ccolor != "None")
			{
				tmp += FillColor;
				if ((hl->cstyle & 8) || (hl->cstyle & 16))
					tmp2 += FillColor;
			}
			if (hl->cstyle & 4)
				tmp += FToStr((*doc->AllFonts)[hl->cfont]->strokeWidth * tsz / 20.0) +
						(hl->ccolor != "None" ? " w 2 Tr\n" : " w 1 Tr\n");
			else
				tmp += "0 Tr\n";
			if (ite->Reverse)
			{
				int chs = hl->csize;
				double wtr;
				if (d < ite->MaxChars-1)
				{
					QString ctx = ite->Ptext.at(d+1)->ch;
					if (ctx == QChar(29))
						ctx = " ";
					wtr = Cwidth(doc, hl->cfont, chx, chs, ctx) * (hl->cscale / 100.0);
				}
				else
					wtr = Cwidth(doc, hl->cfont, chx, chs) * (hl->cscale / 100.0);
				tmp += "-1 0 0 1 "+FToStr(hl->xp+wtr)+" "+FToStr(-hl->yp)+" Tm\n";
			}
			else
				tmp += "1 0 0 1 "+FToStr(hl->xp)+" "+FToStr(-hl->yp)+" Tm\n";
			tmp += IToStr(hl->cscale) + " Tz\n";
			uchar idx2 = idx & 0xFF;
			tmp += "<"+QString(toHex(idx2))+"> Tj\n";
			if (hl->cstyle & 512)
			{
				int chs = hl->csize;
				double wtr = Cwidth(doc, hl->cfont, chx, chs);
				tmp += "1 0 0 1 "+FToStr(hl->xp+wtr)+" "+FToStr(-hl->yp)+" Tm\n";
				chx = "-";
				cc = chx[0].unicode();
				idx = 0;
				if (GlyphsIdxOfFont[hl->cfont].contains(cc))
					idx = GlyphsIdxOfFont[hl->cfont][cc].Code;
				idx1 = (idx >> 8) & 0xFF;
				tmp += UsedFontsP[hl->cfont]+"S"+IToStr(idx1)+" "+FToStr(tsz / 10.0)+" Tf\n";
				idx2 = idx & 0xFF;
				tmp += "<"+QString(toHex(idx2))+"> Tj\n";
			}
		}
		if ((hl->cstyle & 8) && (chx != QChar(13)))
		{
			double Ulen = Cwidth(doc, hl->cfont, chx, hl->csize) * (hl->cscale / 100.0);
			double Upos = (*doc->AllFonts)[hl->cfont]->underline_pos * (tsz / 10.0);
			double Uwid = QMAX((*doc->AllFonts)[hl->cfont]->strokeWidth * (tsz / 10.0), 1);
			if (hl->ccolor != "None")
			{
				if (Options->UseRGB)
					tmp2 += SetFarbe(hl->ccolor, hl->cshade)+" RG\n";
				else
				{
#ifdef HAVE_CMS
					if ((CMSuse) && (Options->UseProfiles))
					{
						tmp2 += "/"+ICCProfiles[Options->SolidProf].ResName+" CS\n";
						tmp2 += SetFarbe(hl->ccolor, hl->cshade)+" SCN\n";
					}
					else
#endif
					tmp2 += SetFarbe(hl->ccolor, hl->cshade)+" K\n";
				}
			}
			tmp2 += FToStr(Uwid)+" w\n";
			tmp2 += FToStr(hl->xp)+" "+FToStr(-hl->yp+Upos)+" m\n";
			tmp2 += FToStr(hl->xp+Ulen)+" "+FToStr(-hl->yp+Upos)+" l\n";
			tmp2 += "S\n";
		}
		if ((hl->cstyle & 16) && (chx != QChar(13)))
		{
			double Ulen = Cwidth(doc, hl->cfont, chx, hl->csize) * (hl->cscale / 100.0);
			double Upos = (*doc->AllFonts)[hl->cfont]->strikeout_pos * (tsz / 10.0);
			double Uwid = QMAX((*doc->AllFonts)[hl->cfont]->strokeWidth * (tsz / 10.0), 1);
			if (hl->ccolor != "None")
			{
				if (Options->UseRGB)
					tmp2 += SetFarbe(hl->ccolor, hl->cshade)+" RG\n";
				else
				{
#ifdef HAVE_CMS
					if ((CMSuse) && (Options->UseProfiles))
					{
						tmp2 += "/"+ICCProfiles[Options->SolidProf].ResName+" CS\n";
						tmp2 += SetFarbe(hl->ccolor, hl->cshade)+" SCN\n";
					}
					else
#endif
					tmp2 += SetFarbe(hl->ccolor, hl->cshade)+" K\n";
				}
			}
			tmp2 += FToStr(Uwid)+" w\n";
			tmp2 += FToStr(hl->xp)+" "+FToStr(-hl->yp+Upos)+" m\n";
			tmp2 += FToStr(hl->xp+Ulen)+" "+FToStr(-hl->yp+Upos)+" l\n";
			tmp2 += "S\n";
		}
		if (ite->PType == 8)
		{
			tmp += "ET\nQ\n"+tmp2;
			tmp2 = "";
		}
	}
	if (ite->PType == 4)
		tmp += "ET\n"+tmp2;
	return tmp;
}

QString PDFlib::SetFarbe(QString farbe, int Shade)
{
	QString tmp;
	CMYKColor tmpC;
	int h, s, v, k, sneu;
	tmpC = doc->PageColors[farbe];
	QColor tmpR;
	if (Options->UseRGB)
	{
		tmpC.getRawRGBColor(&h, &s, &v);
		tmpR.setRgb(h, s, v);
		if ((h == s) && (s == v))
		{
			tmpR.hsv(&h, &s, &v);
			sneu = 255 - ((255 - v) * Shade / 100);
			tmpR.setHsv(h, s, sneu);
		}
		else
		{
			tmpR.hsv(&h, &s, &v);
			sneu = s * Shade / 100;
			tmpR.setHsv(h, sneu, v);
		}
		tmpR.rgb(&h, &s, &v);
		tmp = FToStr(h / 255.0)+" "+FToStr(s / 255.0)+" "+FToStr(v / 255.0);
	}
	else
	{
#ifdef HAVE_CMS
		if ((CMSuse) && (Options->UseProfiles))
		{
			if (Options->SComp == 3)
			{
				tmpC.getRawRGBColor(&h, &s, &v);
				tmpR.setRgb(h, s, v);
				if ((h == s) && (s == v))
				{
					tmpR.hsv(&h, &s, &v);
					sneu = 255 - ((255 - v) * Shade / 100);
					tmpR.setHsv(h, s, sneu);
				}
				else
				{
					tmpR.hsv(&h, &s, &v);
					sneu = s * Shade / 100;
					tmpR.setHsv(h, sneu, v);
				}
				tmpR.rgb(&h, &s, &v);
				tmp = FToStr(h / 255.0)+" "+FToStr(s / 255.0)+" "+FToStr(v / 255.0);
			}
			else
			{
				tmpC.applyGCR();
				tmpC.getCMYK(&h, &s, &v, &k);
				h = h * Shade / 100;
				s = s * Shade / 100;
				v = v * Shade / 100;
				k = k * Shade / 100;
				tmp = FToStr(h / 255.0)+" "+FToStr(s / 255.0)+" "+FToStr(v / 255.0)+" "+FToStr(k / 255.0);
			}
		}
		else
		{
#endif
			tmpC.applyGCR();
			tmpC.getCMYK(&h, &s, &v, &k);
			h = h * Shade / 100;
			s = s * Shade / 100;
			v = v * Shade / 100;
			k = k * Shade / 100;
			tmp = FToStr(h / 255.0)+" "+FToStr(s / 255.0)+" "+FToStr(v / 255.0)+" "+FToStr(k / 255.0);
		}
#ifdef HAVE_CMS
	}
#endif
	return tmp;
}

QString PDFlib::SetClipPath(PageItem *ite, bool poly)
{
	bool nPath = true;
	QString tmp = "";
	FPoint np;
	if (ite->PoLine.size() > 3)
	{
		for (uint poi=0; poi<ite->PoLine.size()-3; poi += 4)
		{
			if (ite->PoLine.point(poi).x() > 900000)
			{
				if (poly)
					tmp += "h\n";
				nPath = true;
				continue;
			}
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

void PDFlib::PDF_Transparenz(PageItem *b)
{
	StartObj(ObjCounter);
	QString ShName = ResNam+IToStr(ResCount);
	Transpar[ShName] = ObjCounter;
	ResCount++;
	ObjCounter++;
	PutDoc("<< /Type /ExtGState\n");
	PutDoc("/CA "+FToStr(1.0 - b->TranspStroke)+"\n");
	PutDoc("/ca "+FToStr(1.0 - b->Transparency)+"\n");
	PutDoc("/BM /Normal\n>>\nendobj\n");
	PutPage("/"+ShName+" gs\n");
}

void PDFlib::PDF_Gradient(PageItem *b)
{
	double w = b->Width;
	double h = -b->Height;
	double w2 = w / 2.0;
	double h2 = h / 2.0;
	double StartX, StartY, EndX, EndY;
	QValueList<double> StopVec;
	QStringList Gcolors;
	QPtrVector<VColorStop> cstops = b->fill_gradient.colorStops();
	switch (b->GrType)
	{
		case 1:
			StartX = 0;
			StartY = h2;
			EndX = w;
			EndY = h2;
			break;
		case 2:
			StartX = w2;
			StartY = 0;
			EndX = w2;
			EndY = h;
			break;
		case 3:
			StartX = 0;
			StartY = 0;
			EndX = w;
			EndY = h;
			break;
		case 4:
			StartX = 0;
			StartY = h;
			EndX = w;
			EndY = 0;
			break;
		case 5:
			StartX = w2;
			StartY = h2;
			if (w >= h)
			{
				EndX = w;
				EndY = h2;
			}
			else
			{
				EndX = w2;
				EndY = h;
			}
			break;
		case 6:
		case 7:
			StartX = b->GrStartX;
			StartY = b->GrStartY;
			EndX = b->GrEndX;
			EndY = b->GrEndY;
			break;
	}
	if ((b->GrType == 5) || (b->GrType == 7))
	{
		StopVec.clear();
		for (uint cst = 0; cst < b->fill_gradient.Stops(); ++cst)
		{
			StopVec.prepend(sqrt(pow(EndX - StartX, 2) + pow(EndY - StartY,2))*cstops.at(cst)->rampPoint);
			Gcolors.prepend(SetFarbe(cstops.at(cst)->name, cstops.at(cst)->shade));
		}
	}
	else
	{
		StopVec.clear();
		for (uint cst = 0; cst < b->fill_gradient.Stops(); ++cst)
		{
			QWMatrix ma;
			ma.translate(StartX, StartY);
			ma.rotate(atan2(EndY - StartY, EndX - StartX)*(180.0/3.1415927));
			double w2 = sqrt(pow(EndX - StartX, 2) + pow(EndY - StartY,2))*cstops.at(cst)->rampPoint;
			double x = ma.m11() * w2 + ma.dx();
			double y = ma.m12() * w2 + ma.dy();
			StopVec.append(x);
			StopVec.append(y);
			Gcolors.append(SetFarbe(cstops.at(cst)->name, cstops.at(cst)->shade));
		}
	}
	PDF_DoLinGradient(b, StopVec, Gcolors);
}

void PDFlib::PDF_DoLinGradient(PageItem *b, QValueList<double> Stops, QStringList Colors)
{
	bool first = true;
	double w = b->Width;
	double h = -b->Height;
	double w2 = b->GrStartX;
	double h2 = -b->GrStartY;
	for (uint c = 0; c < Colors.count()-1; ++c)
	{
		StartObj(ObjCounter);
		QString ShName = ResNam+IToStr(ResCount);
		Shadings[ShName] = ObjCounter;
		ResCount++;
		ObjCounter++;
		PutDoc("<<\n");
		if ((b->GrType == 5) || (b->GrType == 7))
			PutDoc("/ShadingType 3\n");
		else
			PutDoc("/ShadingType 2\n");
		if (Options->UseRGB)
			PutDoc("/ColorSpace /DeviceRGB\n");
		else
#ifdef HAVE_CMS
		{
			if ((CMSuse) && (Options->UseProfiles))
				PutDoc("/ColorSpace "+ICCProfiles[Options->SolidProf].ICCArray+"\n");
			else
#endif
			PutDoc("/ColorSpace /DeviceCMYK\n");
#ifdef HAVE_CMS
		}
#endif
		PutDoc("/BBox [0 "+FToStr(h)+" "+FToStr(w)+" 0]\n");
		if ((b->GrType == 5) || (b->GrType == 7))
		{
			PutDoc("/Coords ["+FToStr(w2)+" "+FToStr(h2)+" "+FToStr((*Stops.at(c+1)))+" "+FToStr(w2)+" "+FToStr(h2)+" "+FToStr((*Stops.at(c)))+"]\n");
			if (first)
				PutDoc("/Extend [false true]\n");
			else
			{
				if (c == Colors.count()-2)
					PutDoc("/Extend [true false]\n");
				else
					PutDoc("/Extend [false false]\n");
			}
			first = false;
			PutDoc("/Function\n<<\n/FunctionType 2\n/Domain [0 1]\n");
			PutDoc("/C0 ["+Colors[c+1]+"]\n");
			PutDoc("/C1 ["+Colors[c]+"]\n");
		}
		else
		{
			PutDoc("/Coords ["+FToStr((*Stops.at(c*2)))+"  "+FToStr((*Stops.at(c*2+1)))+" "+FToStr((*Stops.at(c*2+2)))+" "+FToStr((*Stops.at(c*2+3)))+"]\n");
			if (first)
				PutDoc("/Extend [true false]\n");
			else
			{
				if (c == Colors.count()-2)
					PutDoc("/Extend [false true]\n");
				else
					PutDoc("/Extend [false false]\n");
			}
			first = false;
			PutDoc("/Function\n<<\n/FunctionType 2\n/Domain [0 1]\n");
			PutDoc("/C0 ["+Colors[c]+"]\n");
			PutDoc("/C1 ["+Colors[c+1]+"]\n");
		}
		PutDoc("/N 1\n>>\n>>\nendobj\n");
		PutPage("q\n");
		PutPage(SetClipPath(b));
		PutPage("h\nW* n\n");
		PutPage("/"+ShName+" sh\nQ\n");
	}
}

void PDFlib::PDF_Annotation(PageItem *ite, uint PNr)
{
	struct Dest de;
	QString bm = "";
	QString cc, cnx;
	QString ct = "";
	int AAcoun = 0;
	int IconOb = 0;
	QImage img;
	QImage img2;
	QMap<int, QString> ind2PDFabr;
	const char *tmp[] = {"/Cour", "/CoBo", "/CoOb", "/CoBO", "/Helv", "/HeBo", "/HeOb", "/HeBO",
			"/TiRo", "/TiBo", "/TiIt", "/TiBI", "/ZaDb", "/Symb"};
	size_t ar = sizeof(tmp) / sizeof(*tmp);
	for (uint a = 0; a < ar; ++a)
		ind2PDFabr[a] = tmp[a];
	double x = ite->Xpos;
	double y = doc->PageH - ite->Ypos;
	double x2 = ite->Xpos+ite->Width;
	double y2 = doc->PageH-ite->Ypos-ite->Height;
	for (uint d = 0; d < ite->Ptext.count(); ++d)
	{
		cc = ite->Ptext.at(d)->ch;
		if ((cc == "(") || (cc == ")") || (cc == "\\"))
			bm += "\\";
		bm += cc;
	}
	QStringList bmst = QStringList::split("\r", bm);
	const char *m[] = {"4", "5", "F", "l", "H", "n"};
	ct = m[ite->AnChkStil];
	StartObj(ObjCounter);
	Seite.AObjects.append(ObjCounter);
	ObjCounter++;
	PutDoc("<<\n/Type /Annot\n");
	switch (ite->AnType)
	{
		case 0:
		case 10:
			PutDoc("/Subtype /Text\n");
			PutDoc("/Contents "+EncString("("+bm+")",ObjCounter-1)+"\n");
			break;
		case 1:
		case 11:
			PutDoc("/Subtype /Link\n");
			if (ite->AnActType == 2)
			{
				PutDoc("/Dest /"+NDnam+IToStr(NDnum)+"\n");
				de.Name = NDnam+IToStr(NDnum);
				de.Seite = ite->AnZiel;
				de.Act = ite->AnAction;
				NamedDest.append(de);
				NDnum++;
			}
			if (ite->AnActType == 7)
			{
				PutDoc("/A << /Type /Action /S /GoToR\n/F "+
					EncString("("+Path2Relative(ite->An_Extern)+")",ObjCounter-1)+"\n");
				PutDoc("/D ["+IToStr(ite->AnZiel)+" /XYZ "+ite->AnAction+"]\n>>\n");
			}
			if (ite->AnActType == 8)
				PutDoc("/A << /Type /Action /S /URI\n/URI "+
					EncString("("+ite->An_Extern+")",ObjCounter-1)+"\n>>\n");
			break;
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			Seite.FormObjects.append(ObjCounter-1);
			PutDoc("/Subtype /Widget\n");
			PutDoc("/T "+EncString("("+ite->AnName+")",ObjCounter-1)+"\n");
			if (ite->AnToolTip != "")
				PutDoc("/TU "+EncString("("+PDFEncode(ite->AnToolTip)+")",ObjCounter-1)+"\n");
			PutDoc("/F ");
			char *mm[] = {"4", "2", "0", "32"};
			PutDoc(mm[ite->AnVis]);
			PutDoc("\n");
			PutDoc("/BS << /Type /Border /W ");
			PutDoc(ite->AnBColor != "None" ? IToStr(ite->AnBwid) : QString("0"));
			PutDoc(" /S /");
			const char *x[] = {"S", "D", "U", "B", "I"};
			PutDoc(x[ite->AnBsty]);
			PutDoc(" >>\n");
			cnx = "("+ind2PDFabr[ite->AnFont]+" "+FToStr(ite->ISize / 10.0)+" Tf";
			if (Options->UseRGB)
			{
				if (ite->TxtFill != "None")
					cnx += " "+SetFarbe(ite->TxtFill, ite->ShTxtFill)+" rg\n";
				if (ite->Pcolor != "None")
					cnx += " "+SetFarbe(ite->Pcolor, ite->Shade)+" RG\n";
			}
			else
			{
#ifdef HAVE_CMS
				if ((CMSuse) && (Options->UseProfiles))
				{
					cnx += " /"+ICCProfiles[Options->SolidProf].ResName+" cs\n";
					cnx += " /"+ICCProfiles[Options->SolidProf].ResName+" CS\n";
					if (ite->Pcolor != "None")
						cnx += SetFarbe(ite->Pcolor, ite->Shade)+" SCN\n";
					if (ite->TxtFill != "None")
						cnx += SetFarbe(ite->TxtFill, ite->ShTxtFill)+" scn\n";
				}
				else
				{
#endif
				if (ite->TxtFill != "None")
					cnx += " "+SetFarbe(ite->TxtFill, ite->ShTxtFill)+" k";
				if (ite->Pcolor != "None")
					cnx += " "+SetFarbe(ite->Pcolor, ite->Shade)+" K";
			}
#ifdef HAVE_CMS
			}
#endif
			cnx += ")";
			PutDoc("/DA "+EncString(cnx,ObjCounter-1)+"\n");
			int flg = ite->AnFlag;
			if (Options->Version == 13)
				flg = flg & 522247;
			PutDoc("/Ff "+IToStr(flg)+"\n");
			char *xs[] = {"N", "I", "O", "P"};
			switch (ite->AnType)
			{
				case 2:
					PutDoc("/FT /Btn\n");
					PutDoc("/H /");
					PutDoc(xs[ite->AnFeed]);
					PutDoc("\n");
					PutDoc("/Q 0\n");
					break;
				case 3:
					PutDoc("/FT /Tx\n");
					PutDoc("/V "+EncString("("+bm+")",ObjCounter-1)+"\n");
					PutDoc("/DV "+EncString("("+bm+")",ObjCounter-1)+"\n");
					PutDoc("/Q "+IToStr(QMIN(ite->Ausrich,2))+"\n");
					PutDoc("/AP << /N "+IToStr(ObjCounter)+" 0 R >>\n");
					if (ite->AnMaxChar != -1)
						PutDoc("/MaxLen "+IToStr(ite->AnMaxChar)+"\n");
					break;
				case 4:
					PutDoc("/FT /Btn\n");
					PutDoc(ite->AnIsChk ? "/V /On\n/DV /On\n/AS /On\n" : 
								"/V /Off\n/DV /Off\n/AS /Off\n");
					PutDoc("/AP << /N << /On "+IToStr(ObjCounter)+" 0 R >> >>\n");
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
					for (uint bmc = 0; bmc < bmst.count(); ++bmc)
						PutDoc(EncString("("+bmst[bmc]+")",ObjCounter-1)+"\n");
					PutDoc("]\n");
					PutDoc("/AP << /N "+IToStr(ObjCounter)+" 0 R >>\n");
					break;
			}
			PutDoc("/MK << ");
			if ((ite->AnType == 5) || (ite->AnType == 6))
			{
				PutDoc("/BG [ 1 1 1 ] ");
				if (ite->AnBColor != "None")
					PutDoc("/BC [ "+SetFarbe(ite->AnBColor, 100)+" ] ");
			}
      			else
			{
				if (ite->Pcolor != "None")
					PutDoc("/BG [ "+SetFarbe(ite->Pcolor, ite->Shade)+" ] ");
				if (ite->AnBColor != "None")
					PutDoc("/BC [ "+SetFarbe(ite->AnBColor, 100)+" ] ");
			}
			switch (ite->AnType)
			{
				case 2:
					PutDoc("/CA "+EncString("("+bm+")",ObjCounter-1)+" ");
					if (ite->AnRollOver != "")
						PutDoc("/RC "+
						EncString("("+PDFEncode(ite->AnRollOver)+")",ObjCounter-1)+" ");
					if (ite->AnDown != "")
						PutDoc("/AC "+
						EncString("("+PDFEncode(ite->AnDown)+")",ObjCounter-1)+" ");
					if (ite->AnUseIcons)
					{
						if (ite->Pfile != "")
						{
                					IconOb += ite->pixm.hasAlphaBuffer() ? 3 : 2;
							PutDoc("/I "+IToStr(ObjCounter+IconOb-1)+" 0 R ");
						}
						if (ite->Pfile2 != "")
						{
							img = LoadPict(ite->Pfile2);
							IconOb += img.hasAlphaBuffer() ? 3 : 2;
							PutDoc("/IX "+IToStr(ObjCounter+IconOb-1)+" 0 R ");
						}
						if (ite->Pfile3 != "")
						{
							img2 = LoadPict(ite->Pfile3);
							IconOb += img2.hasAlphaBuffer() ? 3 : 2;
							PutDoc("/RI "+IToStr(ObjCounter+IconOb-1)+" 0 R ");
						}
						PutDoc("/TP "+IToStr(ite->AnIPlace)+" ");
						PutDoc("/IF << /SW /");
						char *x[] = {"A", "S", "B", "N"};
						PutDoc(x[ite->AnScaleW]);
						PutDoc(" /S /");
						PutDoc(ite->LocalScX != ite->LocalScY ? "A" : "P");
						PutDoc(" /A [ ");
						if ((ite->Width/ite->LocalScX - ite->pixm.width()) != 0)
						{
							if (ite->AnScaleW == 3)
								PutDoc(FToStr(QMAX(ite->LocalX / (ite->Width/ite->LocalScX - ite->pixm.width()), 0.01)));
							else
								PutDoc("0.5 ");
						}
						else
							PutDoc("0 ");
						if ((ite->Height/ite->LocalScY - ite->pixm.height()) != 0)
						{
							if (ite->AnScaleW == 3)
								PutDoc(FToStr(QMAX(ite->LocalY / (ite->Height/ite->LocalScY - ite->pixm.height()), 0.01)));
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
			if (ite->Rot != 0)
				PutDoc("/R "+IToStr((abs(static_cast<int>(ite->Rot)) / 90)*90)+" ");
			PutDoc(">>\n");
			if ((ite->AnActType != 0) || (ite->AnAAact))
			{
				if (ite->AnActType == 7)
				{
					PutDoc("/A << /Type /Action /S /GoToR\n/F "+
						EncString("("+Path2Relative(ite->An_Extern)+")",ObjCounter-1)+
						"\n");
					PutDoc("/D ["+IToStr(ite->AnZiel)+" /XYZ "+ite->AnAction+"]\n>>\n");
				}
				if (ite->AnActType == 5)
					PutDoc("/A << /Type /Action /S /ImportData\n/F "+
						EncString("("+ite->AnAction+")",ObjCounter-1)+" >>\n");
				if (ite->AnActType == 4)
					PutDoc("/A << /Type /Action /S /ResetForm >>\n");
				if (ite->AnActType == 3)
				{
					PutDoc("/A << /Type /Action /S /SubmitForm\n/F << /FS /URL /F "+
						EncString("("+ite->AnAction+")",ObjCounter-1)+" >>\n");
					if (ite->AnHTML)
						PutDoc("/Flags 4");
					PutDoc(">>\n");
				}
				if (ite->AnActType == 1)
				{
					if (ite->AnAction != "")
					{
						PutDoc("/A << /Type /Action /S /JavaScript /JS ");
						PutDoc(ite->AnType > 2 ? IToStr(ObjCounter+1+IconOb) :
								 IToStr(ObjCounter+IconOb));
						PutDoc(" 0 R >>\n");
					}
				}
				if (ite->AnAAact)
				{
					if (ite->AnAction != "")
					{
						PutDoc("/A << /Type /Action /S /JavaScript /JS ");
						PutDoc(ite->AnType > 2 ? IToStr(ObjCounter+1+IconOb) :
							 IToStr(ObjCounter+IconOb));
						PutDoc(" 0 R >>\n");
					}
					PutDoc("/AA ");
					int x = ite->AnType > 2 ? 2 : 1;
					if (x == 2)
						PutDoc(IToStr(ObjCounter + x + IconOb));
					else
						PutDoc(IToStr(x == 1 ? ObjCounter + 1 + IconOb : ObjCounter));
					PutDoc(" 0 R\n");
					if (ite->An_C_act != "")
						CalcFields.append(ObjCounter-1+IconOb);
				}
				if (ite->AnActType == 2)
				{
					PutDoc("/A << /Type /Action /S /GoTo /D /"+NDnam+IToStr(NDnum)+" >>\n");
					de.Name = NDnam+IToStr(NDnum);
					de.Seite = ite->AnZiel;
					de.Act = ite->AnAction;
					NamedDest.append(de);
					NDnum++;
				}
			}
			break;
		}
	if ((ite->AnType < 2) || (ite->AnType > 9))
		PutDoc("/Border [ 0 0 0 ]\n");
	switch (((abs(static_cast<int>(ite->Rot)) / 90)*90))
	{
		case 0:
			break;
		case 90:
			x = ite->Xpos;
			y2 = doc->PageH - ite->Ypos;
			x2 = ite->Xpos + ite->Height;
			y = y2 + ite->Width;
			break;
		case 180:
			x = ite->Xpos - ite->Width;
			y2 = doc->PageH - ite->Ypos;
			x2 = ite->Xpos;
			y = y2 + ite->Height;
			break;
		case 270:
			x = ite->Xpos - ite->Height;
			y2 = doc->PageH - ite->Ypos - ite->Width;
			x2 = ite->Xpos;
			y = doc->PageH - ite->Ypos;
			break;
	}
	PutDoc("/Rect [ "+FToStr(x)+" "+FToStr(y2)+" "+FToStr(x2)+" "+FToStr(y)+" ]\n");
	PutDoc(">>\nendobj\n");
	if ((ite->AnType == 2) && (ite->AnUseIcons))
	{
		if (ite->Pfile != "")
		{
			PDF_Image(ite->InvPict, ite->Pfile, ite->LocalScX, ite->LocalScY, ite->LocalX,
					 -ite->LocalY, true);
			cc = IToStr(ite->pixm.width())+" 0 0 "+IToStr(ite->pixm.height())+" 0 0 cm\n";
			cc += "/"+ResNam+IToStr(ResCount-1)+" Do";
			PDF_xForm(ite->pixm.width(), ite->pixm.height(), cc);
		}
		if (ite->Pfile2 != "")
		{
			PDF_Image(ite->InvPict, ite->Pfile2, ite->LocalScX, ite->LocalScY, ite->LocalX,
				 -ite->LocalY, true);
			cc = IToStr(img.width())+" 0 0 "+IToStr(img.height())+" 0 0 cm\n";
			cc += "/"+ResNam+IToStr(ResCount-1)+" Do";
			PDF_xForm(img.width(), img.height(), cc);
		}
		if (ite->Pfile3 != "")
		{
			PDF_Image(ite->InvPict, ite->Pfile3, ite->LocalScX, ite->LocalScY, ite->LocalX,
				 -ite->LocalY, true);
			cc = IToStr(img2.width())+" 0 0 "+IToStr(img2.height())+" 0 0 cm\n";
			cc += "/"+ResNam+IToStr(ResCount-1)+" Do";
			PDF_xForm(img2.width(), img2.height(), cc);
		}
	}
	if (ite->AnType == 3)
	{
		cc = "";
		if (Options->UseRGB)
		{
			if (ite->Pcolor != "None")
				cc += SetFarbe(ite->Pcolor, ite->Shade)+" RG\n";
		}
		else
		{
#ifdef HAVE_CMS
			if ((CMSuse) && (Options->UseProfiles))
			{
				if (ite->Pcolor != "None")
				{
					cc += " /"+ICCProfiles[Options->SolidProf].ResName+" cs\n";
					cc += " /"+ICCProfiles[Options->SolidProf].ResName+" CS\n";
					cc += SetFarbe(ite->Pcolor, ite->Shade)+" SCN\n";
				}
			}
			else
			{
#endif
			if (ite->Pcolor != "None")
				cc += SetFarbe(ite->Pcolor, ite->Shade)+" K\n";
		}
#ifdef HAVE_CMS
		}
#endif
		cc += FToStr(x)+" "+FToStr(y2)+" "+FToStr(x2-x)+" "+FToStr(y-y2)+" re\nf\n";
		cc += "/Tx BMC\nBT\n";
		if (Options->UseRGB)
		{
			if (ite->TxtFill != "None")
				cc += SetFarbe(ite->TxtFill, ite->ShTxtFill)+" rg\n";
		}
		else
		{
#ifdef HAVE_CMS
			if ((CMSuse) && (Options->UseProfiles))
			{
				if (ite->TxtFill != "None")
				{
					cc += " /"+ICCProfiles[Options->SolidProf].ResName+" cs\n";
					cc += " /"+ICCProfiles[Options->SolidProf].ResName+" CS\n";
					cc += SetFarbe(ite->TxtFill, ite->ShTxtFill)+" scn\n";
				}
			}
			else
			{
#endif
			if (ite->TxtFill != "None")
				cc += SetFarbe(ite->TxtFill, ite->ShTxtFill)+" k\n";
		}
#ifdef HAVE_CMS
		}
#endif
		cc += ind2PDFabr[ite->AnFont];
		cc += " "+FToStr(ite->ISize / 10.0)+" Tf\n";
		cc += "1 0 0 1 0 0 Tm\n0 0 Td\n"+EncString("("+bm+")",ObjCounter-1)+" Tj\nET\nEMC";
		PDF_Form(cc);
	}
	if (ite->AnType == 4)
	{
		cc = "q\nBT\n";
		if (Options->UseRGB)
		{
			if (ite->TxtFill != "None")
				cc += SetFarbe(ite->TxtFill, ite->ShTxtFill)+" rg\n";
		}
		else
		{
#ifdef HAVE_CMS
			if ((CMSuse) && (Options->UseProfiles))
			{
				if (ite->TxtFill != "None")
				{
					cc += " /"+ICCProfiles[Options->SolidProf].ResName+" cs\n";
					cc += " /"+ICCProfiles[Options->SolidProf].ResName+" CS\n";
					cc += SetFarbe(ite->TxtFill, ite->ShTxtFill)+" scn\n";
				}
			}
			else
			{
#endif
			if (ite->TxtFill != "None")
				cc += SetFarbe(ite->TxtFill, ite->ShTxtFill)+" k\n";
		}
#ifdef HAVE_CMS
		}
#endif
		cc += "/ZaDb "+FToStr(ite->ISize / 10.0)+" Tf\n";
		cc += "0 0 Td\n("+ct+") Tj\nET\nQ";
		PDF_Form(cc);
	}
	if ((ite->AnType == 5) || (ite->AnType == 6))
	{
		cc = "";
		cc += "1 g\n";
		cc += "0 0 "+FToStr(x2-x)+" "+FToStr(y-y2)+" re\nf\n";
		cc += IToStr(ite->AnBwid)+" w\n";
		if (Options->UseRGB)
		{
			if (ite->AnBColor != "None")
				cc += SetFarbe(ite->AnBColor, 100)+" RG\n";
			else
				cc += "0 G\n";
		}
		else
		{
#ifdef HAVE_CMS
			if ((CMSuse) && (Options->UseProfiles))
			{
				if (ite->AnBColor != "None")
				{
					cc += " /"+ICCProfiles[Options->SolidProf].ResName+" cs\n";
					cc += " /"+ICCProfiles[Options->SolidProf].ResName+" CS\n";
					cc += SetFarbe(ite->AnBColor, 100)+" SCN\n";
				}
				else
					cc += "0 G\n";
			}
			else
			{
#endif
				if (ite->AnBColor != "None")
					cc += SetFarbe(ite->AnBColor, 100)+" K\n";
				else
					cc += "0 G\n";
			}
#ifdef HAVE_CMS
		}
#endif
		cc += "0 0 "+FToStr(x2-x)+" "+FToStr(y-y2)+" re\nS\n";
		cc += "/Tx BMC\nq\nBT\n";
		cc += "0 g\n";
		cc += ind2PDFabr[ite->AnFont];
		cc += " "+FToStr(ite->ISize / 10.0)+" Tf\n";
		cc += "1 0 0 1 0 0 Tm\n0 0 Td\n";
		if (bmst.count() > 0)
			cc += EncString("("+bmst[0]+")",ObjCounter-1);
		cc += " Tj\nET\nQ\nEMC";
		PDF_xForm(ite->Width, ite->Height, cc);
	}
	if ((ite->AnType > 1) && ((ite->AnActType == 1) || (ite->AnAAact)) && (ite->AnAction != ""))
		WritePDFStream(&ite->AnAction);
	if ((ite->AnType > 1) && (ite->AnAAact))
	{
		StartObj(ObjCounter);
		ObjCounter++;
		PutDoc("<<\n");
		if (ite->An_E_act != "")
		{
			PutDoc("/E << /Type /Action /S /JavaScript /JS "+IToStr(ObjCounter+AAcoun)+" 0 R >>\n");
			AAcoun++;
		}
		if (ite->An_X_act != "")
		{
			PutDoc("/X << /Type /Action /S /JavaScript /JS "+IToStr(ObjCounter+AAcoun)+" 0 R >>\n");
			AAcoun++;
		}
		if (ite->An_D_act != "")
		{
			PutDoc("/D << /Type /Action /S /JavaScript /JS "+IToStr(ObjCounter+AAcoun)+" 0 R >>\n");
			AAcoun++;
		}
		if (ite->An_Fo_act != "")
		{
			PutDoc("/Fo << /Type /Action /S /JavaScript /JS "+IToStr(ObjCounter+AAcoun)+" 0 R >>\n");
			AAcoun++;
		}
		if (ite->An_Bl_act != "")
		{
			PutDoc("/Bl << /Type /Action /S /JavaScript /JS "+IToStr(ObjCounter+AAcoun)+" 0 R >>\n");
			AAcoun++;
		}
		if ((ite->AnType == 3) || (ite->AnType == 5) || (ite->AnType == 6))
		{
			if (ite->An_K_act != "")
			{
				PutDoc("/K << /Type /Action /S /JavaScript /JS "+IToStr(ObjCounter+AAcoun)+
					" 0 R >>\n");
				AAcoun++;
			}
			if (ite->An_F_act != "")
			{
				PutDoc("/F << /Type /Action /S /JavaScript /JS "+IToStr(ObjCounter+AAcoun)+
					" 0 R >>\n");
				AAcoun++;
			}
			if (ite->An_V_act != "")
			{
				PutDoc("/V << /Type /Action /S /JavaScript /JS "+IToStr(ObjCounter+AAcoun)+
					" 0 R >>\n");
				AAcoun++;
			}
			if (ite->An_C_act != "")
			{
				PutDoc("/C << /Type /Action /S /JavaScript /JS "+IToStr(ObjCounter+AAcoun)+
					" 0 R >>\n");
				AAcoun++;
			}
		}
		PutDoc(">>\nendobj\n");
		if (ite->An_E_act != "")
			WritePDFStream(&ite->An_E_act);
		if (ite->An_X_act != "")
			WritePDFStream(&ite->An_X_act);
		if (ite->An_D_act != "")
			WritePDFStream(&ite->An_D_act);
		if (ite->An_Fo_act != "")
			WritePDFStream(&ite->An_Fo_act);
		if (ite->An_Bl_act != "")
			WritePDFStream(&ite->An_Bl_act);
		if ((ite->AnType == 3) || (ite->AnType == 5) || (ite->AnType == 6))
		{
			if (ite->An_K_act != "")
				WritePDFStream(&ite->An_K_act);
			if (ite->An_F_act != "")
				WritePDFStream(&ite->An_F_act);
			if (ite->An_V_act != "")
				WritePDFStream(&ite->An_V_act);
			if (ite->An_C_act != "")
				WritePDFStream(&ite->An_C_act);
		}
	}
}

void PDFlib::WritePDFStream(QString *cc)
{
	QString tmp = *cc;
	if ((Options->Compress) && (CompAvail))
		tmp = CompressStr(&tmp);
	StartObj(ObjCounter);
	ObjCounter++;
	PutDoc("<< /Length "+IToStr(tmp.length()));  // moeglicherweise +1
	if ((Options->Compress) && (CompAvail))
		PutDoc("\n/Filter /FlateDecode");
	PutDoc(" >>\nstream\n"+EncStream(&tmp, ObjCounter-1)+"\nendstream\nendobj\n");
}

void PDFlib::PDF_xForm(double w, double h, QString im)
{
	StartObj(ObjCounter);
	ObjCounter++;
	PutDoc("<<\n/Type /XObject\n/Subtype /Form\n");
	PutDoc("/BBox [ 0 0 "+FToStr(w)+" "+FToStr(h)+" ]\n");
	PutDoc("/Resources << /ProcSet [/PDF /Text /ImageB /ImageC /ImageI]\n");
	if (Seite.XObjects.count() != 0)
	{
		PutDoc("/XObject <<\n");
		QMap<QString,int>::Iterator it;
		for (it = Seite.XObjects.begin(); it != Seite.XObjects.end(); ++it)
			PutDoc("/"+it.key()+" "+IToStr(it.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if (Seite.FObjects.count() != 0)
	{
		PutDoc("/Font << \n");
		QMap<QString,int>::Iterator it2;
		for (it2 = Seite.FObjects.begin(); it2 != Seite.FObjects.end(); ++it2)
			PutDoc("/"+it2.key()+" "+IToStr(it2.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	PutDoc(">>\n");
	PutDoc("/Length "+IToStr(im.length())+"\n");
	PutDoc(">>\nstream\n"+EncStream(&im, ObjCounter-1)+"\nendstream\nendobj\n");
	Seite.XObjects[ResNam+IToStr(ResCount)] = ObjCounter-1;
}

void PDFlib::PDF_Form(QString im)
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
			PutDoc("/"+it2.key()+" "+IToStr(it2.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	PutDoc(">>\n");
	PutDoc("/Length "+IToStr(im.length())+"\n");
	PutDoc(">>\nstream\n"+EncStream(&im, ObjCounter-1)+"\nendstream\nendobj\n");
}

void PDFlib::PDF_Bookmark(int nr, double ypos)
{
	Bvie->SetAction(nr, "/XYZ 0 "+FToStr(ypos)+" 0]");
}

void PDFlib::PDF_Image(bool inver, QString fn, double sx, double sy, double x, double y, bool fromAN, QString Profil, bool Embedded, int Intent)
{
	QFileInfo fi = QFileInfo(fn);
	QString ext = fi.extension(false).lower();
	QImage img;
	QString im, tmp, tmpy, dummy, cmd1, cmd2, BBox;
	QChar tc;
	bool found = false;
	bool gray = false;
	bool alphaM = false;
	int ret = -1;
	int afl;
	double x2, y2, b, h, ax, ay, a2, a1, sxn, syn;
	x2 = 0;
	double aufl = Options->Resolution / 72.0;
	int ImRes, ImWid, ImHei;
	struct ShIm ImInfo;
	if ((!SharedImages.contains(fn)) || (fromAN))
	{
#ifdef HAVE_CMS
		if ((CMSuse) && (Options->UseProfiles2))
		{
			if (!ICCProfiles.contains(Profil))
			{
				StartObj(ObjCounter);
				ObjCounter++;
				QString dataP = "";
				struct ICCD dataD;
				if ((Embedded) && (!Options->EmbeddedI))
#ifdef HAVE_TIFF
				{
					if (ext == "tif")
					{
							DWORD EmbedLen = 0;
							LPBYTE EmbedBuffer;
						TIFF* tif = TIFFOpen(fn, "r");
						if(tif)
						{
							if (TIFFGetField(tif, TIFFTAG_ICCPROFILE, &EmbedLen, &EmbedBuffer))
							{
								for (uint el = 0; el < EmbedLen; ++el)
									dataP += EmbedBuffer[el];
							}
							else
								loadText(InputProfiles[Options->ImageProf], &dataP);
						}
						else
							loadText(InputProfiles[Options->ImageProf], &dataP);
						TIFFClose(tif);
					}
					else
						loadText(InputProfiles[Options->ImageProf], &dataP);
				}
#else
				loadText(InputProfiles[Options->ImageProf], &dataP);
#endif
				else
						loadText((Embedded ? InputProfiles[Options->ImageProf] : InputProfiles[Profil]),
							&dataP);
				PutDoc("<<\n");
				if ((Options->CompressMethod != 3) && (CompAvail))
				{
					PutDoc("/Filter /FlateDecode\n");
					dataP = CompressStr(&dataP);
				}
				PutDoc("/Length "+IToStr(dataP.length()+1)+"\n");
				PutDoc("/N 3\n");
				PutDoc(">>\nstream\n"+EncStream(&dataP, ObjCounter-1)+"\nendstream\nendobj\n");
				StartObj(ObjCounter);
				dataD.ResName = ResNam+IToStr(ResCount);
				dataD.ICCArray = "[ /ICCBased "+IToStr(ObjCounter-1)+" 0 R ]";
				dataD.ResNum = ObjCounter;
				ICCProfiles[Profil] = dataD;
				PutDoc("[ /ICCBased "+IToStr(ObjCounter-1)+" 0 R ]\n");
				PutDoc("endobj\n");
				ResCount++;
				ObjCounter++;
			}
		}
#endif
		if ((ext == "eps") || (ext == "pdf"))
		{
			QString tmpFile = QDir::convertSeparators(QDir::homeDirPath()+"/.scribus/sc.png");
			if (Options->RecalcPic)
			{
				afl = QMIN(Options->PicRes, Options->Resolution);
				aufl = afl / 72.0;
			}
			else
				afl = Options->Resolution;
			if (ext == "pdf")
			{
				QStringList args;
				args.append("-r"+IToStr(afl));
				args.append("-sOutputFile="+tmpFile);
				args.append("-dFirstPage=1");
				args.append("-dLastPage=1");
				args.append(fn);
				ret = callGS(args);
				if (ret == 0)
				{
					QImage image;
					image.load(tmpFile);
					image = image.convertDepth(32);
					image.setAlphaBuffer(true);
					int wi = image.width();
					int hi = image.height();
					for( int yi=0; yi < hi; ++yi )
					{
						QRgb *s = (QRgb*)(image.scanLine( yi ));
						for(int xi=0; xi < wi; ++xi )
						{
							if((*s) == 0xffffffff)
								(*s) &= 0x00ffffff;
							s++;
						}
					}
					img = image.convertDepth(32);
					unlink(tmpFile);
				}
			}
			else
			{
				QFile f(fn);
				if (f.open(IO_ReadOnly))
				{
					QTextStream ts(&f);
					while (!ts.atEnd())
					{
						tc = ' ';
						tmp = "";
						while ((tc != '\n') && (tc != '\r'))
						{
							ts >> tc;
							if ((tc != '\n') && (tc != '\r'))
								tmp += tc;
						}
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
						QTextStream ts2(&BBox, IO_ReadOnly);
						ts2 >> x2 >> y2 >> b >> h;
						x2 = x2 * aufl;
						y2 = y2 * aufl;
						b = b * aufl;
						h = h * aufl;
						QStringList args;
						args.append("-r"+IToStr(afl));
						args.append("-sOutputFile="+tmpFile);
						args.append("-g"+ tmp.setNum(qRound(b))+"x"+tmpy.setNum(qRound(h)));
						args.append(fn);
							ret = callGS(args);
						if (ret == 0)
						{
							QImage image;
							image.load(tmpFile);
							image = image.convertDepth(32);
							image.setAlphaBuffer(true);
							int wi = image.width();
							int hi = image.height();
							for( int yi=0; yi < hi; ++yi )
							{
								QRgb *s = (QRgb*)(image.scanLine( yi ));
								for(int xi=0; xi < wi; ++xi )
								{
									if((*s) == 0xffffffff)
										(*s) &= 0x00ffffff;
									s++;
								}
							}
							img = image.copy(static_cast<int>(x2), 0, static_cast<int>(b-x2), static_cast<int>(h-y2));
							unlink(tmpFile);
						}
					}
				}
			}
			if (Options->RecalcPic)
			{
				sxn = sx * (1.0 / aufl);
				syn = sy * (1.0 / aufl);
			}
		}
		else
		{
			img = LoadPict(fn, &gray);
			if (Options->RecalcPic)
			{
				double afl = QMIN(Options->PicRes, Options->Resolution);
				a2 = (72.0 / sx) / afl;
				a1 = (72.0 / sy) / afl;
				ax = img.width() / a2;
				ay = img.height() / a1;
				img = img.smoothScale(qRound(ax), qRound(ay));
				img = img.convertDepth(32);
				sxn = sx * a2;
				syn = sy * a1;
			}
			aufl = 1;
		}
		if (img.hasAlphaBuffer())
			alphaM = true;
		if (inver)
			img.invertPixels();
		if (!Options->RecalcPic)
		{
			sxn = sx * (1.0 / aufl);
			syn = sy * (1.0 / aufl);
		}
		if (alphaM)
		{
			QString im2;
			StartObj(ObjCounter);
			ObjCounter++;
			PutDoc("<<\n/Type /XObject\n/Subtype /Image\n");
			if (Options->Version == 14)
			{
				im2 = MaskToTxt14(&img);
				if ((Options->CompressMethod != 3) && (CompAvail))
					im2 = CompressStr(&im2);
				PutDoc("/Width "+IToStr(img.width())+"\n");
				PutDoc("/Height "+IToStr(img.height())+"\n");
				PutDoc("/ColorSpace /DeviceGray\n");
				PutDoc("/BitsPerComponent 8\n");
				PutDoc("/Length "+IToStr(im2.length())+"\n");
			}
			else
			{
				QImage iMask = img.createAlphaMask();
				im2 = MaskToTxt(&iMask);
				if ((Options->CompressMethod != 3) && (CompAvail))
					im2 = CompressStr(&im2);
				PutDoc("/Width "+IToStr(iMask.width())+"\n");
				PutDoc("/Height "+IToStr(iMask.height())+"\n");
				PutDoc("/ImageMask true\n/BitsPerComponent 1\n");
				PutDoc("/Length "+IToStr(im2.length())+"\n");
			}
			if ((Options->CompressMethod != 3) && (CompAvail))
				PutDoc("/Filter /FlateDecode\n");
			PutDoc(">>\nstream\n"+EncStream(&im2, ObjCounter-1)+"\nendstream\nendobj\n");
			Seite.XObjects[ResNam+IToStr(ResCount)] = ObjCounter-1;
			ResCount++;
		}
		if (Options->UseRGB)
			im = ImageToTxt(&img);
		else
		{
#ifdef HAVE_CMS
			if ((CMSuse) && (Options->UseProfiles2))
				im = ImageToTxt(&img);
			else
#endif
				im = ImageToCMYK(&img);
		}
		StartObj(ObjCounter);
		ObjCounter++;
		if (((Options->CompressMethod == 2) || (Options->CompressMethod == 0)) && (CompAvail))
			im = CompressStr(&im);
		PutDoc("<<\n/Type /XObject\n/Subtype /Image\n");
		PutDoc("/Width "+IToStr(img.width())+"\n");
		PutDoc("/Height "+IToStr(img.height())+"\n");
#ifdef HAVE_CMS
		if ((CMSuse) && (Options->UseProfiles2))
		{
			PutDoc("/ColorSpace "+ICCProfiles[Profil].ICCArray+"\n");
			PutDoc("/Intent /");
			int inte2 = Intent;
			if (Options->EmbeddedI)
				inte2 = Options->Intent2;
			char *t[] = {"Perceptual", "RelativeColorimetric", "Saturation", "AbsoluteColorimetric"};
			PutDoc(t[inte2]);
			PutDoc("\n");
		}
		else
		{
#endif
			if ((gray) && (Options->UseRGB) && (ext == "jpg") && (!Options->RecalcPic))
				PutDoc("/ColorSpace /DeviceGray\n");
			else
				PutDoc(Options->UseRGB ? "/ColorSpace /DeviceRGB\n" : "/ColorSpace /DeviceCMYK\n");
#ifdef HAVE_CMS
	}
#endif
		if ((ext == "jpg") && (Options->UseRGB) && (!Options->RecalcPic))
		{
			im = "";
			loadText(fn, &im);
			PutDoc("/BitsPerComponent 8\n");
			PutDoc("/Length "+IToStr(im.length())+"\n");
			PutDoc("/Filter /DCTDecode\n");
		}
		else
		{
			int cm = Options->CompressMethod;
			if ((Options->CompressMethod == 1) || (Options->CompressMethod == 0))
			{
				QString tmpFile = QDir::convertSeparators(QDir::homeDirPath()+"/.scribus/sc.jpg");
				if ((Options->UseRGB) || (Options->UseProfiles2)) 
					Convert2JPG(tmpFile, &img, Options->Quality, false);
				else
					Convert2JPG(tmpFile, &img, Options->Quality, true);
				if (Options->CompressMethod == 0)
				{
					QFileInfo fi(tmpFile);
					if (fi.size() < im.length())
					{
						im = "";
						loadText(tmpFile, &im);
						cm = 1;
					}
					else
						cm = 2;
				}
				else
				{
					im = "";
					loadText(tmpFile, &im);
					cm = 1;
				}
				system("rm -f "+tmpFile);
			}
			PutDoc("/BitsPerComponent 8\n");
			PutDoc("/Length "+IToStr(im.length())+"\n");
			if (alphaM)
			{
				if (Options->Version == 14)
					PutDoc("/SMask "+IToStr(ObjCounter-2)+" 0 R\n");
				else
					PutDoc("/Mask "+IToStr(ObjCounter-2)+" 0 R\n");
			}
			if (CompAvail)
			{
				if (cm == 1)
					PutDoc("/Filter /DCTDecode\n");
				else
					PutDoc("/Filter /FlateDecode\n");
			}
		}
		PutDoc(">>\nstream\n"+EncStream(&im, ObjCounter-1)+"\nendstream\nendobj\n");
		Seite.XObjects[ResNam+IToStr(ResCount)] = ObjCounter-1;
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
		SharedImages.insert(fn, ImInfo);
		ResCount++;
	}
	else
	{
		ImRes = SharedImages[fn].ResNum;
		ImWid = SharedImages[fn].Width;
		ImHei = SharedImages[fn].Height;
		aufl = SharedImages[fn].aufl;
		if (!Options->RecalcPic)
		{
			sxn = sx * (1.0 / aufl);
			syn = sy * (1.0 / aufl);
		}
		else
		{
			sxn = SharedImages[fn].sxa * sx / SharedImages[fn].xa;
			syn = SharedImages[fn].sya * sy / SharedImages[fn].ya;
		}
	}
	if (!fromAN)
	{
		Inhalt += FToStr(ImWid*sxn)+" 0 0 "+FToStr(ImHei*syn)+" "+FToStr(x*sx)+" "+FToStr((-ImHei*syn+y*sy))+" cm\n";
		Inhalt += "/"+ResNam+IToStr(ImRes)+" Do\n";
	}
}

void PDFlib::PDF_End_Doc(QString PrintPr, QString Name, int Components)
{
	QString tmp;
	uint StX;
	int Basis;
	int ResO;
	BookMItem* ip;
	QListViewItem* pp;
	QString Inhal = "";
	QMap<int,QString> Inha;
	Inha.clear();
	int Bmc = 0;
	if ((Bvie->childCount() != 0) && (Options->Bookmarks))
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
		QListViewItemIterator it(Bvie);
		for ( ; it.current(); ++it)
		{
			ip = (BookMItem*)it.current();
			Inhal = "";
			Bmc++;
			Inhal += IToStr(ip->ItemNr+Basis)+ " 0 obj\n";
			Inhal += "<<\n/Title "+EncString("("+ip->Titel+")", ip->ItemNr+Basis)+"\n";
			if (ip->Pare == 0)
				Inhal += "/Parent 3 0 R\n";
			else
				Inhal += "/Parent "+IToStr(ip->Pare+Basis)+" 0 R\n";
			if (ip->Prev != 0)
				Inhal += "/Prev "+IToStr(ip->Prev+Basis)+" 0 R\n";
			if (ip->Next != 0)
				Inhal += "/Next "+IToStr(ip->Next+Basis)+" 0 R\n";
			if (ip->First != 0)
				Inhal += "/First "+IToStr(ip->First+Basis)+" 0 R\n";
			if (ip->Last != 0)
				Inhal += "/Last "+IToStr(ip->Last+Basis)+" 0 R\n";
			if (ip->firstChild())
				Inhal += "/Count -"+IToStr(ip->childCount())+"\n";
			if (ip->Seite < static_cast<int>(PageTree.Kids.count()))
				Inhal += "/Dest ["+IToStr(PageTree.Kids[ip->Seite])+" 0 R "+ip->Action+"\n";
			Inhal += ">>\nendobj\n";
			Inha[ip->ItemNr] = Inhal;
		}
		for (int b = 1; b < Bmc+1; ++b)
		{
			XRef.append(Dokument);
			PutDoc(Inha[b]);
			ObjCounter++;
		}
	}
	StartObj(ObjCounter);
	ResO = ObjCounter;
	PutDoc("<< /ProcSet [/PDF /Text /ImageB /ImageC /ImageI]\n");
	if (Seite.XObjects.count() != 0)
	{
		PutDoc("/XObject <<\n");
		QMap<QString,int>::Iterator it;
		for (it = Seite.XObjects.begin(); it != Seite.XObjects.end(); ++it)
			PutDoc("/"+it.key()+" "+IToStr(it.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if (Seite.FObjects.count() != 0)
	{
		PutDoc("/Font << \n");
		QMap<QString,int>::Iterator it2;
		for (it2 = Seite.FObjects.begin(); it2 != Seite.FObjects.end(); ++it2)
			PutDoc("/"+it2.key()+" "+IToStr(it2.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if (Shadings.count() != 0)
	{
		PutDoc("/Shading << \n");
		QMap<QString,int>::Iterator it3;
		for (it3 = Shadings.begin(); it3 != Shadings.end(); ++it3)
			PutDoc("/"+it3.key()+" "+IToStr(it3.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if (Transpar.count() != 0)
	{
		PutDoc("/ExtGState << \n");
		QMap<QString,int>::Iterator it3t;
		for (it3t = Transpar.begin(); it3t != Transpar.end(); ++it3t)
			PutDoc("/"+it3t.key()+" "+IToStr(it3t.data())+" 0 R\n");
		PutDoc(">>\n");
	}
	if (ICCProfiles.count() != 0)
	{
		PutDoc("/ColorSpace << \n");
		QMap<QString,ICCD>::Iterator it3c;
		for (it3c = ICCProfiles.begin(); it3c != ICCProfiles.end(); ++it3c)
			PutDoc("/"+it3c.data().ResName+" "+IToStr(it3c.data().ResNum)+" 0 R\n");
		PutDoc(">>\n");
	}
	PutDoc(">>\nendobj\n");
	ObjCounter++;
	XRef[2] = Dokument;
	PutDoc("3 0 obj\n<<\n/Type /Outlines\n");
	PutDoc("/Count "+IToStr(Outlines.Count)+"\n");
	if ((Bvie->childCount() != 0) && (Options->Bookmarks))
	{
		PutDoc("/First "+IToStr(Outlines.First)+" 0 R\n");
		PutDoc("/Last "+IToStr(Outlines.Last)+" 0 R\n");
	}
	PutDoc(">>\nendobj\n");
	XRef[3] = Dokument;
	PutDoc("4 0 obj\n<<\n/Type /Pages\n/Kids [");
	for (uint b = 0; b < PageTree.Kids.count(); ++b)
		PutDoc(IToStr(PageTree.Kids[b])+" 0 R ");
	PutDoc("]\n");
	PutDoc("/Count "+IToStr(PageTree.Count)+"\n");
	PutDoc("/Resources "+IToStr(ObjCounter-1)+" 0 R\n");
	PutDoc(">>\nendobj\n");
	XRef[4] = Dokument;
	PutDoc("5 0 obj\n<<\n");
	if (NamedDest.count() != 0)
	{
		QValueList<Dest>::Iterator vt;
		for (vt = NamedDest.begin(); vt != NamedDest.end(); ++vt)
		{
			if ((*vt).Seite < static_cast<int>(PageTree.Kids.count()))
				PutDoc("/"+(*vt).Name+" ["+IToStr(PageTree.Kids[(*vt).Seite])+
					" 0 R /XYZ "+(*vt).Act+"]\n");
		}
	}
	PutDoc(">>\nendobj\n");
	XRef[5] = Dokument;
	PutDoc("6 0 obj\n<< /Fields [ ");
	if (Seite.FormObjects.count() != 0)
	{
		for (uint fo = 0; fo < Seite.FormObjects.count(); ++fo)
			PutDoc(IToStr(Seite.FormObjects[fo])+" 0 R ");
	}
	PutDoc(" ]\n");
	if (CalcFields.count() != 0)
	{
		PutDoc("/CO [ ");
		for (uint foc = 0; foc < CalcFields.count(); ++foc)
			PutDoc(IToStr(CalcFields[foc])+" 0 R ");
		PutDoc(" ]\n");
	}
	PutDoc("/NeedAppearances true\n/DR "+IToStr(ResO)+" 0 R\n>>\nendobj\n");
	if (doc->JavaScripts.count() != 0)
	{
		int Fjav0 = ObjCounter;
		QMap<QString,QString>::Iterator itja0;
		for (itja0 = doc->JavaScripts.begin(); itja0 != doc->JavaScripts.end(); ++itja0)
			WritePDFStream(&itja0.data());
		int Fjav = ObjCounter;
		QMap<QString,QString>::Iterator itja;
		for (itja = doc->JavaScripts.begin(); itja != doc->JavaScripts.end(); ++itja)
		{
			StartObj(ObjCounter);
			ObjCounter++;
			PutDoc("<< /S /JavaScript /JS "+IToStr(Fjav0)+" 0 R >>\n");
			PutDoc("endobj\n");
			Fjav0++;
		}
		StartObj(ObjCounter);
		ObjCounter++;
		PutDoc("<< /Names [ ");
		QMap<QString,QString>::Iterator itja2;
		for (itja2 = doc->JavaScripts.begin(); itja2 != doc->JavaScripts.end(); ++itja2)
		{
			PutDoc(EncString("("+itja2.key()+")", 6)+" "+IToStr(Fjav)+" 0 R ");
			Fjav++;
		}
		PutDoc("] >>\nendobj\n");
	}
	XRef[6] = Dokument;
	PutDoc("7 0 obj\n<< ");
	if (doc->JavaScripts.count() != 0)
		PutDoc("/JavaScript "+IToStr(ObjCounter-1)+" 0 R");
	PutDoc(" >>\nendobj\n");
	if (Options->Articles)
	{
		Threads.clear();
		for (uint pgs = 0; pgs < view->Pages.count(); ++pgs)
		{
			for (uint ele = 0; ele < view->Pages.at(pgs)->Items.count(); ++ele)
			{
				PageItem* tel = view->Pages.at(pgs)->Items.at(ele);
				if ((tel->PType == 4) && (tel->BackBox == 0) && (tel->NextBox != 0) &&
					 (!tel->Redrawn))
				{
					StartObj(ObjCounter);
					Threads.append(ObjCounter);
					ObjCounter++;
					PutDoc("<< /Type /Thread\n");
					PutDoc("   /F "+IToStr(ObjCounter)+" 0 R\n");
					PutDoc(">>\nendobj\n");
					Beads.clear();
					struct Bead bd;
					int fir = ObjCounter;
					int ccb = ObjCounter;
					bd.Parent = ObjCounter-1;
					while (tel->NextBox != 0)
					{
						bd.Next = ccb + 1;
						bd.Prev = ccb - 1;
						ccb++;
						bd.Page = PageTree.Kids[pgs];
						bd.Recht = QRect(static_cast<int>(tel->Xpos),
								 static_cast<int>(doc->PageH - tel->Ypos),
								 static_cast<int>(tel->Width),
								 static_cast<int>(tel->Height));
						tel->Redrawn = true;
						tel = tel->NextBox;
						Beads.append(bd);
					}
					bd.Next = ccb + 1;
					bd.Prev = ccb - 1;
					bd.Page = PageTree.Kids[pgs];
					bd.Recht = QRect(static_cast<int>(tel->Xpos), 
							 static_cast<int>(doc->PageH - tel->Ypos),
							 static_cast<int>(tel->Width),
							 static_cast<int>(tel->Height));
					tel->Redrawn = true;
					Beads.append(bd);
					Beads[0].Prev = fir + Beads.count()-1;
					Beads[Beads.count()-1].Next = fir;
					for (uint beac = 0; beac < Beads.count(); ++beac)
					{
						StartObj(ObjCounter);	
						ObjCounter++;
						PutDoc("<< /Type /Bead\n");
						PutDoc("   /T "+IToStr(Beads[beac].Parent)+" 0 R\n");
						PutDoc("   /N "+IToStr(Beads[beac].Next)+" 0 R\n");
						PutDoc("   /V "+IToStr(Beads[beac].Prev)+" 0 R\n");
						PutDoc("   /P "+IToStr(Beads[beac].Page)+" 0 R\n");
						PutDoc("   /R [ "+IToStr(Beads[beac].Recht.x())+" "+
								IToStr(Beads[beac].Recht.y())+" ");
						PutDoc(IToStr(Beads[beac].Recht.bottomRight().x())+" "+IToStr(Beads[beac].Recht.y()-Beads[beac].Recht.height())+" ]\n");
						PutDoc(">>\nendobj\n");
					}
				}
			}
		}
		for (uint pgs = 0; pgs < view->Pages.count(); ++pgs)
		{
			for (uint ele = 0; ele < view->Pages.at(pgs)->Items.count(); ++ele)
				view->Pages.at(pgs)->Items.at(ele)->Redrawn = false;
		}
		XRef[7] = Dokument;
		PutDoc("8 0 obj\n[");
		for (uint th = 0; th < Threads.count(); ++th)
			PutDoc(IToStr(Threads[th])+" 0 R ");
		PutDoc("]\nendobj\n");
	}
	if (Options->Version == 12)
	{
		StartObj(ObjCounter);
		ObjCounter++;
		QString dataP;
		loadText(PrintPr, &dataP);
		PutDoc("<<\n");
		if ((Options->Compress) && (CompAvail))
		{
			PutDoc("/Filter /FlateDecode\n");
			dataP = CompressStr(&dataP);
		}
		PutDoc("/Length "+IToStr(dataP.length()+1)+"\n");
		PutDoc("/N "+IToStr(Components)+"\n");
		PutDoc(">>\nstream\n"+dataP+"\nendstream\nendobj\n");
		int p = Options->Articles ? 8 : 7;
		QString m = Options->Articles ? "9" : "8";
		XRef[p] = Dokument;
		PutDoc(m + " 0 obj\n");
		PutDoc("<<\n/Type /OutputIntent\n/S /GTS_PDFX\n");
		PutDoc("/DestOutputProfile "+IToStr(ObjCounter-1)+" 0 R\n");
		PutDoc("/OutputConditionIdentifier (Custom)\n");
		PutDoc("/Info ("+PDFEncode(Options->Info)+")\n");
		PutDoc("/OutputCondition ("+PDFEncode(Name)+")\n");
		PutDoc(">>\nendobj\n");
	}
	StX = Dokument;
	PutDoc("xref\n");
	PutDoc("0 "+IToStr(ObjCounter)+"\n");
	PutDoc("0000000000 65535 f \n");
	for (uint a = 0; a < XRef.count(); ++a)
	{
		tmp.sprintf("%10d", XRef[a]);
		tmp.replace(QRegExp(" "), "0");
		PutDoc(tmp+" 00000 n \n");
	}
	PutDoc("trailer\n<<\n/Size "+IToStr(XRef.count()+1)+"\n");
	QString IDs ="";
	for (uint cl = 0; cl < 16; ++cl)
		IDs += FileID[cl];
	IDs = String2Hex(&IDs);
	PutDoc("/Root 1 0 R\n/Info 2 0 R\n/ID [<"+IDs+"><"+IDs+">]\n");
	if (Options->Encrypt)
		PutDoc("/Encrypt "+IToStr(Encrypt)+" 0 R\n");
	PutDoc(">>\nstartxref\n");
	PutDoc(IToStr(StX)+"\n%%EOF\n");
	Spool.close();
	Seite.XObjects.clear();
	Seite.FObjects.clear();
	Seite.AObjects.clear();
	Seite.FormObjects.clear();
	CalcFields.clear();
	Shadings.clear();
	Transpar.clear();
	ICCProfiles.clear();
}

