/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          customfdialog.cpp  -  description
                             -------------------
    begin                : Fri Nov 30 2001
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

#include "customfdialog.h"
//#include "customfdialog.moc"
#include <qpixmap.h>
#include <qpainter.h>
#include <qfileinfo.h>
#include <qdir.h>
#include <qdom.h>
#include <qtextcodec.h>
#include <QImageReader>
//Added by qt3to4:
#include <Q3HBoxLayout>
#include <Q3Frame>
#include <QLabel>

#include "cmsettings.h"
#include "sccombobox.h"
#include "scribusstructs.h"
#include "scimage.h"
#include "util.h"

extern QString DocDir;

ImIconProvider::ImIconProvider(QWidget *pa) : Q3FileIconProvider(pa)
{
	fmts.clear();
	QString tmp[] = {"eps", "epsi", "gif", "png", "jpg", "jpeg", "xpm", "tif", "tiff", "bmp", "pbm", "pgm", "ppm", "xbm", "xpm", "psd", "pat"};
	size_t array = sizeof(tmp) / sizeof(*tmp);
	for (uint a = 0; a < array; ++a)
		fmts += tmp[a];
	imagepm = loadIcon("16/image-x-generic.png");
	pspm = loadIcon("postscript.png");
	txtpm = loadIcon("txt.png");
	docpm = loadIcon("doc.png");
	pdfpm = loadIcon("pdf.png");
	oosxdpm = loadIcon("ooo_draw.png");
	oosxwpm = loadIcon("ooo_writer.png");
	vectorpm = loadIcon("vectorgfx.png");
}

const QPixmap * ImIconProvider::pixmap(const QFileInfo &fi)
{
	QString ext = fi.extension(false).lower();
	if (fmts.contains(ext))
		return &imagepm;
	else
	{
		ext = fi.extension(true).lower();
		if (ext.endsWith("ps"))
			return &pspm;
		if (ext.endsWith("txt"))
			return &txtpm;
		if (ext.endsWith("scd") || ext.endsWith("scd.gz"))
			return &docpm;
		if (ext.endsWith("sla") || ext.endsWith("sla.gz"))
			return &docpm;
		if (ext.endsWith("pdf"))
			return &pdfpm;
		if (ext.endsWith("sxd"))
			return &oosxdpm;
		if (ext.endsWith("sxw"))
			return &oosxwpm;
		if (ext.endsWith("svg") || ext.endsWith("svgz"))
			return &vectorpm;
		return Q3FileIconProvider::pixmap(fi);
	}
}

FDialogPreview::FDialogPreview(QWidget *pa) : QLabel(pa)
{
	setAlignment(Qt::AlignLeft | Qt::AlignTop);
	setMinimumSize( QSize( 100, 100 ) );
	setMaximumSize( QSize( 300, 300 ) );
	setScaledContents( false );
	setEraseColor( Qt::white );
	setFrameShape( QLabel::WinPanel );
	setFrameShadow( QLabel::Sunken );
	updtPix();
}

void FDialogPreview::updtPix()
{
	QPixmap pm;
	QRect inside = contentsRect();
	pm = QPixmap(inside.width(), inside.height());
	pm.fill(Qt::white);
	setPixmap(pm);
}

void FDialogPreview::GenPreview(QString name)
{
	QPixmap pm;
	QString Buffer = "";
	QFileInfo fi = QFileInfo(name);
	if (fi.isDir())
		return;
	updtPix();
	int w = pixmap()->width();
	int h = pixmap()->height();
	bool mode = false;
	QString ext = fi.extension(false).lower();
	QList<QByteArray> formats(QImageReader::supportedImageFormats());
	formats.append("jpg");
	formats.append("tif");
	formats.append("tiff");
	formats.append("psd");
	formats.append("eps");
	formats.append("epsi");
	formats.append("pdf");
	formats.append("ps");
	formats.append("pat");
// 	QString allFormats = formats.join( " " );
// 	formats.clear();
// 	allFormats = allFormats.lower();
// 	formats = QStringList::split( " ", allFormats );
	if (ext.isEmpty())
		ext = getImageType(name);
	if (formats.contains(ext.toUtf8()))
	{
		ScImage im;
		//No doc to send data anyway, so no doc to get into scimage.
		CMSettings cms(0, "", 0);
		if (im.LoadPicture(name, cms, false, false, ScImage::Thumbnail, 72, &mode))
		{
			int ix,iy;
			if ((im.imgInfo.exifDataValid) && (!im.imgInfo.exifInfo.thumbnail.isNull()))
			{
				ix = im.imgInfo.exifInfo.width;
				iy = im.imgInfo.exifInfo.height;
			}
			else
			{
				ix = im.width();
				iy = im.height();
			}
			int xres = im.imgInfo.xres;
			int yres = im.imgInfo.yres;
			QString tmp = "";
			QString tmp2 = "";
			QImage im2;
			if ((ix > w-5) || (iy > h-44))
			{
				double sx = im.width() / static_cast<double>(w-5);
				double sy = im.height() / static_cast<double>(h-44);
				im2 = sy < sx ?  im.smoothScale(qRound(im.width() / sx), qRound(im.height() / sx)) :
				                 im.smoothScale(qRound(im.width() / sy), qRound(im.height() / sy));
			}
			else
				im2 = im.qImage(); // no need to copy
			QPainter p;
			QBrush b(QColor(205,205,205), loadIcon("testfill.png"));
			// Qt4 FIXME imho should be better
			pm = *pixmap();
			p.begin(&pm);
			p.fillRect(0, 0, w, h-44, b);
			p.fillRect(0, h-44, w, 44, QColor(255, 255, 255));
			p.drawImage((w - im2.width()) / 2, (h - 44 - im2.height()) / 2, im2);
			p.drawText(2, h-29, tr("Size:")+" "+tmp.setNum(ix)+" x "+tmp2.setNum(iy));
			p.drawText(2, h-17, tr("Resolution:")+" "+tmp.setNum(xres)+" x "+tmp2.setNum(yres)+" "+ tr("DPI"));
			QString cSpace;
			if (((ext == "pdf") || (ext == "eps") || (ext == "epsi") || (ext == "ps")) && (im.imgInfo.type != 7))
				cSpace = tr("Unknown");
			else
			{
				switch (im.imgInfo.colorspace)
				{
					case 0:
						cSpace = tr("RGB");
						break;
					case 1:
						cSpace = tr("CMYK");
						break;
					case 2:
						cSpace = tr("Grayscale");
						break;
					case 3:
						cSpace = tr("Duotone");
						break;
				}
			}
			p.drawText(2, h-5, tr("Colorspace:")+" "+cSpace);
			p.end();
			setPixmap(pm);
			repaint();
		}
	}
	else
	{
		if (loadText(name, &Buffer))
		{
			if (Buffer.startsWith("<SCRIBUS"))
			{
				QDomDocument docu("scridoc");
				if(!docu.setContent(Buffer))
					return;
				QDomElement elem=docu.documentElement();
				if ((elem.tagName() != "SCRIBUS") && (elem.tagName() != "SCRIBUSUTF8") && (elem.tagName() != "SCRIBUSUTF8NEW"))
					return;
				QDomNode DOC=elem.firstChild();
				QDomElement dc=DOC.toElement();
				QString Tit = tr("Title:")+" ";
				QString ti2 = dc.attribute("TITLE");
				if (ti2.isEmpty())
					ti2= tr("No Title");
				Tit += ti2+"\n";
				QString Aut = tr("Author:")+" ";
				QString au2 = dc.attribute("AUTHOR");
				if (au2.isEmpty())
					au2 = tr("Unknown");
				Aut += au2;
				setText( tr("Scribus Document")+"\n\n"+Tit+Aut);
			}
			else  if ((ext == "txt") || (ext == "html") || (ext == "xml"))
				setText(Buffer.left(200));
		}
	}
}

void FDialogPreview::previewUrl( const Q3Url &url )
{
	if (url.isLocalFile())
	{
		QFileInfo finfo(url.path());
		if (filePath != finfo.filePath())
		{
			filePath = finfo.filePath();
			GenPreview(url.path());
		}
	}
}

CustomFDialog::CustomFDialog(QWidget *parent, QString wDir, QString caption, QString filter, int flags)
			: Q3FileDialog(QString::null, filter, parent, 0, true), optionFlags(flags)
{
 	setIcon(loadIcon("AppIcon.png"));
 	setCaption(caption);
	cDir = QDir(wDir);
	setDir(cDir);
	setIconProvider(new ImIconProvider(this));
	FDialogPreview *pw;
	if (flags & fdDirectoriesOnly)
	{
		Layout = new Q3Frame(this);
		Layout1 = new Q3HBoxLayout(Layout);
		Layout1->setSpacing( 0 );
		Layout1->setMargin( 0 );
		SaveZip = new QCheckBox( tr( "&Compress File" ), Layout, "test");
		Layout1->addWidget(SaveZip, Qt::AlignLeft);
		QSpacerItem* spacer = new QSpacerItem( 20, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
		Layout1->addItem( spacer );
		addWidgets(0, Layout, 0);
		LayoutC = new Q3Frame(this);
		Layout1C = new Q3HBoxLayout(LayoutC);
		Layout1C->setSpacing( 0 );
		Layout1C->setMargin( 0 );
		WithFonts = new QCheckBox( tr( "&Include Fonts" ), LayoutC, "WithFonts");
		Layout1C->addWidget(WithFonts, Qt::AlignLeft);
		WithProfiles = new QCheckBox( tr( "&Include ICC Profiles" ), LayoutC, "WithProfiles");
		Layout1C->addWidget(WithProfiles, Qt::AlignLeft);
		QSpacerItem* spacer2 = new QSpacerItem( 20, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
		Layout1C->addItem( spacer2 );
		addWidgets(0, LayoutC, 0);
		setMode(Q3FileDialog::DirectoryOnly);
	}
	else
	{
		setContentsPreviewEnabled( true );
		pw = new FDialogPreview( this );
		setContentsPreview( pw, pw );
		if (flags & fdCompressFile)
		{
			Layout = new Q3Frame(this);
			Layout1 = new Q3HBoxLayout(Layout);
			Layout1->setSpacing( 6 );
			Layout1->setMargin( 0 );
			SaveZip = new QCheckBox( tr( "&Compress File" ), Layout, "test");
			Layout1->addWidget(SaveZip);
			QSpacerItem* spacer = new QSpacerItem( 20, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
			Layout1->addItem( spacer );
		}
		if (flags & fdExistingFiles)
			setMode(Q3FileDialog::ExistingFile);
		else
		{
			setMode(Q3FileDialog::AnyFile);
			if (flags & fdCompressFile)
				addWidgets(0, Layout, 0);
		}
		if (flags & fdShowCodecs)
		{
			LayoutC = new Q3Frame(this);
			Layout1C = new Q3HBoxLayout(LayoutC);
			Layout1C->setSpacing( 0 );
			Layout1C->setMargin( 4 );
			TxCodeT = new QLabel(this);
			TxCodeT->setText( tr("Encoding:"));
			TxCodeM = new ScComboBox(true, LayoutC, "Cod");
			TxCodeM->setEditable(false);
			QString tmp_txc[] = {"ISO 8859-1", "ISO 8859-2", "ISO 8859-3",
								"ISO 8859-4", "ISO 8859-5", "ISO 8859-6",
								"ISO 8859-7", "ISO 8859-8", "ISO 8859-9",
								"ISO 8859-10", "ISO 8859-13", "ISO 8859-14",
								"ISO 8859-15", "UTF-8", "UTF-16", "KOI8-R", "KOI8-U",
								"CP1250", "CP1251", "CP1252", "CP1253",
								"CP1254", "CP1255", "CP1256", "CP1257",
								"Apple Roman"};
			size_t array = sizeof(tmp_txc) / sizeof(*tmp_txc);
			for (uint a = 0; a < array; ++a)
				TxCodeM->insertItem(tmp_txc[a]);
			QString localEn = QTextCodec::codecForLocale()->name();
			if (localEn == "ISO-10646-UCS-2")
				localEn = "UTF-16";
			bool hasIt = false;
			for (int cc = 0; cc < TxCodeM->count(); ++cc)
			{
				if (TxCodeM->text(cc) == localEn)
				{
					TxCodeM->setCurrentItem(cc);
					hasIt = true;
					break;
				}
			}
			if (!hasIt)
			{
				TxCodeM->insertItem(localEn);
				TxCodeM->setCurrentItem(TxCodeM->count()-1);
			}
			TxCodeM->setMinimumSize(QSize(200, 0));
			Layout1C->addWidget(TxCodeM);
			QSpacerItem* spacer2 = new QSpacerItem( 20, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
			Layout1C->addItem( spacer2 );
			addWidgets(TxCodeT, LayoutC, 0);
		}
		setPreviewMode((flags & fdShowPreview) ? Q3FileDialog::Contents : Q3FileDialog::NoPreview );
		setViewMode( Q3FileDialog::List );
		if (flags & fdCompressFile)
			connect(SaveZip, SIGNAL(clicked()), this, SLOT(handleCompress()));
	}
	HomeB = new QToolButton(this);
	HomeB->setIconSet(loadIcon("16/go-home.png"));
	#ifdef _WIN32
	HomeB->setAutoRaise(true);
	#endif
	HomeB->setTextLabel( tr("Moves to your Document Directory.\nThis can be set in the Preferences."));
	connect(HomeB, SIGNAL(clicked()), this, SLOT(slotHome()));
	addToolButton(HomeB);
	// default init
	extZip = "gz";
}

CustomFDialog::~CustomFDialog()
{
	setIconProvider(0);
	const QDir* d(dir());
	cDir.setCurrent(d->path());
	delete d;
}

void CustomFDialog::slotHome()
{
	setDir(QDir(DocDir));
}

void CustomFDialog::handleCompress()
{
	QFileInfo tmp;
	tmp.setFile(selectedFile());
	QString e(tmp.extension());
	QStringList ex = QStringList::split(".", e);
	QString baseExt = "";
	for (int a = 0; a < ex.count(); a++)
	{
		if ((ex[a] != "sla") && (ex[a] != "SLA") && (ex[a] != "gz") && (ex[a] != "GZ"))
			baseExt += "."+ex[a];
	}
	if (SaveZip->isChecked())
	{
		if (e != extZip)
			tmp.setFile(tmp.baseName() + baseExt + "." + extZip);
	}
	else
	{
		if (e != ext)
			tmp.setFile(tmp.baseName() + baseExt + "." + ext);
	}
	setSelection(tmp.fileName());
}

void CustomFDialog::setExtension(QString e)
{
	ext = e;
}

QString CustomFDialog::extension()
{
	return ext;
}

void CustomFDialog::setZipExtension(QString e)
{
	extZip = e;
}

QString CustomFDialog::zipExtension()
{
	return extZip;
}
