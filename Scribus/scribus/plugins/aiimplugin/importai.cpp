/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "importai.h"

#include "scconfig.h"
#include "scribus.h"
#include "scribuscore.h"
#include "commonstrings.h"
#include "customfdialog.h"
#include "mpalette.h"
#include "prefsfile.h"
#include "prefscontext.h"
#include "prefsmanager.h"
#include "prefstable.h"
#include "scribusXml.h"
#include <qfile.h>
#include <qcursor.h>
#include <qregexp.h>
#include <QStack>
//Added by qt3to4:
#include <QDrag>
#include <QMimeData>
#include <QList>
#include <QStack>
#include <QByteArray>
#include <QTextStream>
#include <cmath>
#include <cstdlib>

#include "multiprogressdialog.h"
#include "scpaths.h"
#include "selection.h"
#include "prefsmanager.h"
#include "undomanager.h"
#include "loadsaveplugin.h"
#include "util.h"
#include "util_icon.h"
#include "util_math.h"
#include "util_formats.h"
#include "sccolorengine.h"
#include "missing.h"
#ifdef HAVE_PODOFO
	#include <podofo/podofo.h>
#endif

extern SCRIBUS_API ScribusQApp * ScQApp;

AIPlug::AIPlug(ScribusDoc* doc, int flags)
{
	tmpSel=new Selection(this, false);
	m_Doc=doc;
	interactive = (flags & LoadSavePlugin::lfInteractive);
}

bool AIPlug::import(QString fName, int flags, bool showProgress)
{
	bool success = false;
	interactive = (flags & LoadSavePlugin::lfInteractive);
	importerFlags = flags;
	cancel = false;
	double x, y, b, h;
	bool ret = false;
	convertedPDF = false;
	CustColors.clear();
	QFileInfo fi = QFileInfo(fName);
	QString ext = fi.extension(false).lower();
	if ( !ScCore->usingGUI() )
	{
		interactive = false;
		showProgress = false;
	}
	
/* Check if the file is an old style AI or one of the newer PDF wrapped ones */
	QFile fT(fName);
	if (fT.open(QIODevice::ReadOnly))
	{
		QByteArray tempBuf(9);
		fT.readBlock(tempBuf.data(), 8);
		fT.close();
		if (tempBuf.startsWith("%PDF"))
		{
			QString tmpFile = getShortPathName(ScPaths::getTempFileDir())+ "/tmp.ai";
			if (!extractFromPDF(fName, tmpFile))
				return false;
			convertedPDF = true;
			fName = tmpFile;
		}
	}
	if ( showProgress )
	{
		ScribusMainWindow* mw=(m_Doc==0) ? ScCore->primaryMainWindow() : m_Doc->scMW();
		progressDialog = new MultiProgressDialog( tr("Importing: %1").arg(fi.fileName()), CommonStrings::tr_Cancel, mw, "psexportprogress");
		QStringList barNames, barTexts;
		barNames << "GI";
		barTexts << tr("Analyzing File:");
		QList<bool> barsNumeric;
		barsNumeric << false;
		progressDialog->addExtraProgressBars(barNames, barTexts, barsNumeric);
		progressDialog->setOverallTotalSteps(3);
		progressDialog->setOverallProgress(0);
		progressDialog->setProgress("GI", 0);
		progressDialog->show();
//qt4 FIXME 		connect(progressDialog->buttonCancel, SIGNAL(clicked()), this, SLOT(cancelRequested()));
		qApp->processEvents();
	}
	else
		progressDialog = NULL;
/* Set default Page to size defined in Preferences */
	x = 0.0;
	y = 0.0;
	b = PrefsManager::instance()->appPrefs.PageWidth;
	h = PrefsManager::instance()->appPrefs.PageHeight;
	if (progressDialog)
	{
		progressDialog->setOverallProgress(1);
		qApp->processEvents();
	}
	parseHeader(fName, x, y, b, h);
	docX = x;
	docY = y;
	docWidth = b - x;
	docHeight = h - y;
	baseX = 0;
	baseY = 0;
	if (!interactive || (flags & LoadSavePlugin::lfInsertPage))
	{
		m_Doc->setPage(b-x, h-y, 0, 0, 0, 0, 0, 0, false, false);
		m_Doc->addPage(0);
		m_Doc->view()->addPage(0, true);
		baseX = 0;
		baseY = 0;
	}
	else
	{
		if (!m_Doc || (flags & LoadSavePlugin::lfCreateDoc))
		{
			m_Doc=ScCore->primaryMainWindow()->doFileNew(b-x, h-y, 0, 0, 0, 0, 0, 0, false, false, 0, false, 0, 1, "Custom", true);
			ScCore->primaryMainWindow()->HaveNewDoc();
			ret = true;
			baseX = 0;
			baseY = 0;
		}
	}
	if (flags & LoadSavePlugin::lfCreateDoc)
	{
		m_Doc->documentInfo.setAuthor(docCreator);
		m_Doc->documentInfo.setPublisher(docOrganisation);
		m_Doc->documentInfo.setTitle(docTitle);
		m_Doc->documentInfo.setDate(docDate+" "+docTime);
	}
	if ((!ret) && (interactive))
	{
		baseX = m_Doc->currentPage()->xOffset();
		baseY = m_Doc->currentPage()->yOffset();
	}
	if ((ret) || (!interactive))
	{
		if (b-x > h-y)
			m_Doc->PageOri = 1;
		else
			m_Doc->PageOri = 0;
		m_Doc->m_pageSize = "Custom";
	}
	ColorList::Iterator it;
	for (it = CustColors.begin(); it != CustColors.end(); ++it)
	{
		if (!m_Doc->PageColors.contains(it.key()))
			m_Doc->PageColors.insert(it.key(), it.data());
	}
	Elements.clear();
	FPoint minSize = m_Doc->minCanvasCoordinate;
	FPoint maxSize = m_Doc->maxCanvasCoordinate;
	m_Doc->setLoading(true);
	m_Doc->DoDrawing = false;
	m_Doc->view()->updatesOn(false);
	m_Doc->scMW()->ScriptRunning = true;
	qApp->changeOverrideCursor(QCursor(Qt::WaitCursor));
	QString CurDirP = QDir::currentDirPath();
	QDir::setCurrent(fi.dirPath());
	if (convert(fName))
	{
		tmpSel->clear();
		QDir::setCurrent(CurDirP);
		if ((Elements.count() > 1) && (!(importerFlags & LoadSavePlugin::lfCreateDoc)))
		{
			bool isGroup = true;
			int firstElem = -1;
			if (Elements.at(0)->Groups.count() != 0)
				firstElem = Elements.at(0)->Groups.top();
			for (int bx = 0; bx < Elements.count(); ++bx)
			{
				PageItem* bxi = Elements.at(bx);
				if (bxi->Groups.count() != 0)
				{
					if (bxi->Groups.top() != firstElem)
						isGroup = false;
				}
				else
					isGroup = false;
			}
			if (!isGroup)
			{
				double minx = 99999.9;
				double miny = 99999.9;
				double maxx = -99999.9;
				double maxy = -99999.9;
				uint lowestItem = 999999;
				uint highestItem = 0;
				for (int a = 0; a < Elements.count(); ++a)
				{
					Elements.at(a)->Groups.push(m_Doc->GroupCounter);
					PageItem* currItem = Elements.at(a);
					lowestItem = qMin(lowestItem, currItem->ItemNr);
					highestItem = qMax(highestItem, currItem->ItemNr);
					double lw = currItem->lineWidth() / 2.0;
					if (currItem->rotation() != 0)
					{
						FPointArray pb;
						pb.resize(0);
						pb.addPoint(FPoint(currItem->xPos()-lw, currItem->yPos()-lw));
						pb.addPoint(FPoint(currItem->width()+lw*2.0, -lw, currItem->xPos()-lw, currItem->yPos()-lw, currItem->rotation(), 1.0, 1.0));
						pb.addPoint(FPoint(currItem->width()+lw*2.0, currItem->height()+lw*2.0, currItem->xPos()-lw, currItem->yPos()-lw, currItem->rotation(), 1.0, 1.0));
						pb.addPoint(FPoint(-lw, currItem->height()+lw*2.0, currItem->xPos()-lw, currItem->yPos()-lw, currItem->rotation(), 1.0, 1.0));
						for (uint pc = 0; pc < 4; ++pc)
						{
							minx = qMin(minx, pb.point(pc).x());
							miny = qMin(miny, pb.point(pc).y());
							maxx = qMax(maxx, pb.point(pc).x());
							maxy = qMax(maxy, pb.point(pc).y());
						}
					}
					else
					{
						minx = qMin(minx, currItem->xPos()-lw);
						miny = qMin(miny, currItem->yPos()-lw);
						maxx = qMax(maxx, currItem->xPos()-lw + currItem->width()+lw*2.0);
						maxy = qMax(maxy, currItem->yPos()-lw + currItem->height()+lw*2.0);
					}
				}
				double gx = minx;
				double gy = miny;
				double gw = maxx - minx;
				double gh = maxy - miny;
				PageItem *high = m_Doc->Items->at(highestItem);
				int z = m_Doc->itemAdd(PageItem::Polygon, PageItem::Rectangle, gx, gy, gw, gh, 0, m_Doc->toolSettings.dBrush, m_Doc->toolSettings.dPen, true);
				PageItem *neu = m_Doc->Items->takeAt(z);
				m_Doc->Items->insert(lowestItem, neu);
				neu->Groups.push(m_Doc->GroupCounter);
				neu->setItemName( tr("Group%1").arg(neu->Groups.top()));
				neu->isGroupControl = true;
				neu->groupsLastItem = high;
				neu->setTextFlowMode(PageItem::TextFlowUsesFrameShape);
				for (int a = 0; a < m_Doc->Items->count(); ++a)
				{
					m_Doc->Items->at(a)->ItemNr = a;
				}
				Elements.prepend(neu);
				m_Doc->GroupCounter++;
			}
		}
		m_Doc->DoDrawing = true;
		m_Doc->scMW()->ScriptRunning = false;
		m_Doc->setLoading(false);
		qApp->changeOverrideCursor(QCursor(Qt::ArrowCursor));
		if ((Elements.count() > 0) && (!ret) && (interactive))
		{
			if (flags & LoadSavePlugin::lfScripted)
			{
				bool loadF = m_Doc->isLoading();
				m_Doc->setLoading(false);
				m_Doc->changed();
				m_Doc->setLoading(loadF);
				for (int dre=0; dre<Elements.count(); ++dre)
				{
					m_Doc->m_Selection->addItem(Elements.at(dre), true);
				}
				m_Doc->m_Selection->setGroupRect();
				m_Doc->view()->updatesOn(true);
			}
			else
			{
				m_Doc->DragP = true;
				m_Doc->DraggedElem = 0;
				m_Doc->DragElements.clear();
				for (int dre=0; dre<Elements.count(); ++dre)
				{
					m_Doc->DragElements.append(Elements.at(dre)->ItemNr);
					tmpSel->addItem(Elements.at(dre), true);
				}
				tmpSel->setGroupRect();
				ScriXmlDoc *ss = new ScriXmlDoc();
				QMimeData* md = new QMimeData();
				md->setText(ss->WriteElem(m_Doc, m_Doc->view(), tmpSel));
				QDrag* dr = new QDrag(m_Doc->view()->viewport());
				dr->setMimeData(md);
#ifndef Q_WS_MAC
// see #2196
				m_Doc->itemSelection_DeleteItem(tmpSel);
#else
				qDebug("aiimport: leaving items on page");
#endif
				m_Doc->view()->resizeContents(qRound((maxSize.x() - minSize.x()) * m_Doc->view()->scale()), qRound((maxSize.y() - minSize.y()) * m_Doc->view()->scale()));
				m_Doc->view()->scrollBy(qRound((m_Doc->minCanvasCoordinate.x() - minSize.x()) * m_Doc->view()->scale()), qRound((m_Doc->minCanvasCoordinate.y() - minSize.y()) * m_Doc->view()->scale()));
				m_Doc->minCanvasCoordinate = minSize;
				m_Doc->maxCanvasCoordinate = maxSize;
				m_Doc->view()->updatesOn(true);
				m_Doc->view()->updateContents();
				const QPixmap& dragCursor = loadIcon("DragPix.xpm");
				dr->setDragCursor(dragCursor, Qt::CopyAction);
				dr->setDragCursor(dragCursor, Qt::MoveAction);
				dr->setDragCursor(dragCursor, Qt::LinkAction);
				dr->start();
				delete ss;
				m_Doc->DragP = false;
				m_Doc->DraggedElem = 0;
				m_Doc->DragElements.clear();
			}
		}
		else
		{
			m_Doc->changed();
			m_Doc->reformPages();
			m_Doc->view()->updatesOn(true);
		}
		success = true;
	}
	else
	{
		QDir::setCurrent(CurDirP);
		m_Doc->DoDrawing = true;
		m_Doc->scMW()->ScriptRunning = false;
		m_Doc->view()->updatesOn(true);
		qApp->changeOverrideCursor(QCursor(Qt::ArrowCursor));
	}
	if (interactive)
		m_Doc->setLoading(false);
	//CB If we have a gui we must refresh it if we have used the progressbar
	if ((showProgress) && (!interactive))
		m_Doc->view()->DrawNew();
	if (convertedPDF)
		QFile::remove(fName);
	return success;
}

AIPlug::~AIPlug()
{
	delete tmpSel;
}

bool AIPlug::extractFromPDF(QString infile, QString outfile)
{
	bool ret = false;
#ifdef HAVE_PODOFO
	QFile outf(outfile);
	outf.open(QIODevice::WriteOnly);
	PoDoFo::PdfDocument *m_pDocument = new PoDoFo::PdfDocument( infile.toLocal8Bit().data() );
	if (m_pDocument != NULL)
	{
		PoDoFo::PdfPage *curPage = m_pDocument->GetPage(0);
		if (curPage != NULL)
		{
			PoDoFo::PdfObject *piece = curPage->GetObject()->GetIndirectKey("PieceInfo");
			if (piece != NULL)
			{
				PoDoFo::PdfObject *illy = piece->GetIndirectKey("Illustrator");
				if (illy != NULL)
				{
					PoDoFo::PdfObject *priv = illy->GetIndirectKey("Private");
					if (priv == NULL)
						priv = illy;
					int num = priv->GetIndirectKey("NumBlock")->GetNumber() + 1;
					QString name = "AIPrivateData%1";
					for (int a = 2; a < num; a++)
					{
						QString Key = name.arg(a);
						PoDoFo::PdfObject *data = priv->GetIndirectKey(PoDoFo::PdfName(Key.toUtf8().data()));
						PoDoFo::PdfStream const *stream = data->GetStream();
						char *Buffer;
						long bLen;
						stream->GetFilteredCopy(&Buffer, &bLen);
						outf.write(Buffer, bLen);
						free( Buffer );
					}
					ret = true;
				}
			}
		}
	}
	outf.close();
	delete m_pDocument;
#endif
	return ret;
}

bool AIPlug::parseHeader(QString fName, double &x, double &y, double &b, double &h)
{
	QString tmp, BBox, tmp2, FarNam;
	ScColor cc;
	double c, m, yc, k;
	bool found = false;
	QFile f(fName);
	if (f.open(QIODevice::ReadOnly))
	{
/* Try to find Bounding Box */
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
			if (tmp.startsWith("%%HiResBoundingBox:"))
			{
				found = true;
				BBox = tmp.remove("%%HiResBoundingBox:");
			}
/* Read CustomColors if available */
			if (tmp.startsWith("%%CMYKCustomColor"))
			{
				tmp = tmp.remove(0,18);
				QTextStream ts2(&tmp, QIODevice::ReadOnly);
				ts2 >> c >> m >> yc >> k;
				FarNam = ts2.readAll();
				FarNam = FarNam.stripWhiteSpace();
				FarNam = FarNam.remove(0,1);
				FarNam = FarNam.remove(FarNam.length()-1,1);
				cc = ScColor(qRound(255 * c), qRound(255 * m), qRound(255 * yc), qRound(255 * k));
				cc.setSpotColor(true);
				CustColors.insert(FarNam, cc);
				importedColors.append(FarNam);
				while (!ts.atEnd())
				{
					uint oldPos = ts.device()->pos();
					tmp = readLinefromDataStream(ts);
					if (!tmp.startsWith("%%+"))
					{
						ts.device()->seek(oldPos);
						break;
					}
					tmp = tmp.remove(0,3);
					QTextStream ts2(&tmp, QIODevice::ReadOnly);
					ts2 >> c >> m >> yc >> k;
					FarNam = ts2.readAll();
					FarNam = FarNam.stripWhiteSpace();
					FarNam = FarNam.remove(0,1);
					FarNam = FarNam.remove(FarNam.length()-1,1);
					cc = ScColor(qRound(255 * c), qRound(255 * m), qRound(255 * yc), qRound(255 * k));
					cc.setSpotColor(true);
					CustColors.insert(FarNam, cc);
					importedColors.append(FarNam);
				}
			}
			if (tmp.startsWith("%%For"))
			{
				QStringList res = getStrings(tmp);
				if (res.count() > 1)
				{
					docCreator = res[0];
					docOrganisation = res[1];
				}
			}
			if (tmp.startsWith("%%CreationDate:"))
			{
				QStringList res = getStrings(tmp);
				if (res.count() > 1)
				{
					docDate = res[0];
					docTime = res[1];
				}
				else
				{
					docDate = tmp.remove("%%CreationDate: ");
					docTime = "";
				}
			}
			if (tmp.startsWith("%%Title"))
			{
				QStringList res = getStrings(tmp);
				if (res.count() > 0)
					docTitle = res[0];
			}
			if (tmp.startsWith("%%EndComments"))
				break;
		}
		f.close();
		if (found)
		{
			QStringList bb = QStringList::split(" ", BBox);
			if (bb.count() == 4)
			{
				QTextStream ts2(&BBox, QIODevice::ReadOnly);
				ts2 >> x >> y >> b >> h;
			}
		}
	}
	return found;
}

QString AIPlug::removeAIPrefix(QString comment)
{
	QString tmp;
	if (comment.startsWith("%AI"))
	{
		int an = comment.indexOf("_");
		tmp = comment.remove(0, an+1);
	}
	else
		tmp = comment;
	return tmp;
}

QString AIPlug::parseColor(QString data)
{
	QString ret = CommonStrings::None;
	if (data.isEmpty())
		return ret;
	double c, m, y, k;
	ScColor tmp;
	ColorList::Iterator it;
	QTextStream Code(&data, QIODevice::ReadOnly);
	bool found = false;
	Code >> c;
	Code >> m;
	Code >> y;
	Code >> k;
	int Cc = qRound(c * 255);
	int Mc = qRound(m * 255);
	int Yc = qRound(y * 255);
	int Kc = qRound(k * 255);
	int hC, hM, hY, hK;
	tmp.setColor(Cc, Mc, Yc, Kc);
	for (it = m_Doc->PageColors.begin(); it != m_Doc->PageColors.end(); ++it)
	{
		if (it.data().getColorModel() == colorModelCMYK)
		{
			it.data().getCMYK(&hC, &hM, &hY, &hK);
			if ((Cc == hC) && (Mc == hM) && (Yc == hY) && (Kc == hK))
			{
				ret = it.key();
				found = true;
			}
		}
	}
	if (!found)
	{
		tmp.setSpotColor(false);
		tmp.setRegistrationColor(false);
		QString namPrefix = "FromAI";
		m_Doc->PageColors.insert(namPrefix+tmp.name(), tmp);
		importedColors.append(namPrefix+tmp.name());
		ret = namPrefix+tmp.name();
	}
	return ret;
}

QString AIPlug::parseColorGray(QString data)
{
	QString ret = CommonStrings::None;
	if (data.isEmpty())
		return ret;
	double k;
	ScColor tmp;
	ColorList::Iterator it;
	QTextStream Code(&data, QIODevice::ReadOnly);
	bool found = false;
	Code >> k;
	int Kc = 255 - qRound(k * 255);
	int hC, hM, hY, hK;
	tmp.setColor(0, 0, 0, Kc);
	for (it = m_Doc->PageColors.begin(); it != m_Doc->PageColors.end(); ++it)
	{
		if (it.data().getColorModel() == colorModelCMYK)
		{
			it.data().getCMYK(&hC, &hM, &hY, &hK);
			if ((hC == 0) && (hM == 0) && (hY == 0) && (Kc == hK))
			{
				ret = it.key();
				found = true;
			}
		}
	}
	if (!found)
	{
		tmp.setSpotColor(false);
		tmp.setRegistrationColor(false);
		QString namPrefix = "FromAI";
		m_Doc->PageColors.insert(namPrefix+tmp.name(), tmp);
		importedColors.append(namPrefix+tmp.name());
		ret = namPrefix+tmp.name();
	}
	return ret;
}

QString AIPlug::parseColorRGB(QString data)
{
	QString ret = CommonStrings::None;
	if (data.isEmpty())
		return ret;
	double r, g, b;
	ScColor tmp;
	ColorList::Iterator it;
	QTextStream Code(&data, QIODevice::ReadOnly);
	bool found = false;
	Code >> r;
	Code >> g;
	Code >> b;
	int Rc = qRound(r * 255);
	int Gc = qRound(g * 255);
	int Bc = qRound(b * 255);
	int hR, hG, hB;
	tmp.setColorRGB(Rc, Gc, Bc);
	for (it = m_Doc->PageColors.begin(); it != m_Doc->PageColors.end(); ++it)
	{
		if (it.data().getColorModel() == colorModelRGB)
		{
			it.data().getRGB(&hR, &hG, &hB);
			if ((Rc == hR) && (Gc == hG) && (Bc == hB))
			{
				ret = it.key();
				found = true;
			}
		}
	}
	if (!found)
	{
		tmp.setSpotColor(false);
		tmp.setRegistrationColor(false);
		QString namPrefix = "FromAI";
		m_Doc->PageColors.insert(namPrefix+tmp.name(), tmp);
		importedColors.append(namPrefix+tmp.name());
		ret = namPrefix+tmp.name();
	}
	return ret;
}

QString AIPlug::parseCustomColor(QString data, double &shade)
{
	QString ret = CommonStrings::None;
	if (data.isEmpty())
		return ret;
	double c, m, y, k, sh;
	ScColor tmp;
	ColorList::Iterator it;
	QTextStream Code(&data, QIODevice::ReadOnly);
	bool found = false;
	Code >> c;
	Code >> m;
	Code >> y;
	Code >> k;
	QString tmpS = data;
	int an = data.indexOf("(");
	int en = data.lastIndexOf(")");
	QString FarNam = data.mid(an+1, en-an-1);
	FarNam.remove("\\");
	QString FarSha = data.mid(en+1, data.size() - en);
	QTextStream Val(&FarSha, QIODevice::ReadOnly);
	Val >> sh;
	shade = (1.0 - sh) * 100.0;
	int Cc = qRound(c * 255);
	int Mc = qRound(m * 255);
	int Yc = qRound(y * 255);
	int Kc = qRound(k * 255);
	int hC, hM, hY, hK;
	tmp.setColor(Cc, Mc, Yc, Kc);
	for (it = m_Doc->PageColors.begin(); it != m_Doc->PageColors.end(); ++it)
	{
		if (it.data().getColorModel() == colorModelCMYK)
		{
			it.data().getCMYK(&hC, &hM, &hY, &hK);
			if ((Cc == hC) && (Mc == hM) && (Yc == hY) && (Kc == hK))
			{
				ret = it.key();
				found = true;
			}
		}
	}
	if (!found)
	{
		tmp.setSpotColor(true);
		tmp.setRegistrationColor(false);
		m_Doc->PageColors.insert(FarNam, tmp);
		importedColors.append(FarNam);
		ret = FarNam;
	}
	return ret;
}

QString AIPlug::parseCustomColorX(QString data, double &shade, QString type)
{
	QString ret = CommonStrings::None;
	if (data.isEmpty())
		return ret;
	double c, m, y, k, sh, r, g, b;
	ScColor tmp;
	ColorList::Iterator it;
	QTextStream Code(&data, QIODevice::ReadOnly);
	bool found = false;
	if (type == "1")
	{
		Code >> r;
		Code >> g;
		Code >> b;
		int Rc = qRound(r * 255);
		int Gc = qRound(g * 255);
		int Bc = qRound(b * 255);
		int hR, hG, hB;
		tmp.setColorRGB(Rc, Gc, Bc);
		for (it = m_Doc->PageColors.begin(); it != m_Doc->PageColors.end(); ++it)
		{
			if (it.data().getColorModel() == colorModelRGB)
			{
				it.data().getRGB(&hR, &hG, &hB);
				if ((Rc == hR) && (Gc == hG) && (Bc == hB))
				{
					ret = it.key();
					found = true;
				}
			}
		}
	}
	else
	{
		Code >> c;
		Code >> m;
		Code >> y;
		Code >> k;
		int Cc = qRound(c * 255);
		int Mc = qRound(m * 255);
		int Yc = qRound(y * 255);
		int Kc = qRound(k * 255);
		int hC, hM, hY, hK;
		tmp.setColor(Cc, Mc, Yc, Kc);
		for (it = m_Doc->PageColors.begin(); it != m_Doc->PageColors.end(); ++it)
		{
			if (it.data().getColorModel() == colorModelCMYK)
			{
				it.data().getCMYK(&hC, &hM, &hY, &hK);
				if ((Cc == hC) && (Mc == hM) && (Yc == hY) && (Kc == hK))
				{
					ret = it.key();
					found = true;
				}
			}
		}
	}
	QString tmpS = data;
	int an = data.indexOf("(");
	int en = data.lastIndexOf(")");
	QString FarNam = data.mid(an+1, en-an-1);
	FarNam.remove("\\");
	QString FarSha = data.mid(en+1, data.size() - en);
	QTextStream Val(&FarSha, QIODevice::ReadOnly);
	Val >> sh;
	shade = (1.0 - sh) * 100.0;
	if (!found)
	{
		if (type == "0")
			tmp.setSpotColor(true);
		tmp.setRegistrationColor(false);
		m_Doc->PageColors.insert(FarNam, tmp);
		importedColors.append(FarNam);
		ret = FarNam;
	}
	return ret;
}

QStringList AIPlug::getStrings(QString data)
{
	QStringList result;
	result.clear();
	QString tmp;
	QString tmp2 = "";
	bool paran = false;
	bool skip = false;
	for (int a = 0; a < data.count(); a++)
	{
		tmp = data[a];
		if (skip)
		{
			if (paran)
			{
				if (tmp == "r")
					tmp = SpecialChars::PARSEP;
				tmp2 += tmp;
			}
			skip = false;
			continue;
		}
		if (tmp == "(")
		{
			paran = true;
			continue;
		}
		if (tmp == ")")
		{
			paran = false;
			result.append(tmp2);
			tmp2 = "";
			continue;
		}
		if (tmp == "\\")
		{
			skip = true;
			continue;
		}
		if (paran)
			tmp2 += tmp;
	}
	return result;
}

void AIPlug::getCommands(QString data, QStringList &commands)
{
	QString tmp;
	QString tmp2;
	QString tmp3;
	bool paran = false;
	bool arra = false;
	bool skip = false;
	for (int a = 0; a < data.count(); a++)
	{
		tmp = data[a];
		if (skip)
		{
			tmp2 += tmp;
			skip = false;
			continue;
		}
		if (tmp == "(")
		{
			paran = true;
			tmp2 += tmp;
			continue;
		}
		if (tmp == ")")
		{
			paran = false;
			tmp2 += tmp;
			continue;
		}
		if (tmp == "[")
		{
			arra = true;
			tmp2 += tmp;
			continue;
		}
		if (tmp == "]")
		{
			arra = false;
			tmp2 += tmp;
			continue;
		}
		if (tmp == "\\")
		{
			skip = true;
			continue;
		}
		if (!paran)
		{
			if (tmp == " ")
			{
				tmp3 += " " + tmp2;
				if (commandList.contains(tmp2))
				{
					commands.append(tmp3);
					tmp3 = "";
				}
				tmp2 = "";
				continue;
			}
		}
		tmp2 += tmp;
	}
	if (!tmp2.isEmpty())
	{
		tmp3 += " " + tmp2;
		commands.append(tmp3);
	}
}

void AIPlug::processData(QString data)
{
	double x, y, x1, y1, x2, y2;
	int z, tmpInt;
	PageItem *ite;
	QString command = "";
	QString Cdata = "";
	QStringList da;
	getCommands(data, da);
	for (int a = 0; a < da.count(); a++)
	{
		Cdata = da[a];
		if ((Cdata.startsWith("%")) || (Cdata.startsWith(" %")))
			continue;
		QStringList da2 = QStringList::split(" ", Cdata);
		if (da2.count() == 0)
			return;
		command = da2[da2.count()-1];
/* Start Path construction commands */
		if (command == "m")
		{
			QTextStream ts2(&Cdata, QIODevice::ReadOnly);
			ts2 >> x >> y;
			Coords.svgMoveTo(x - docX, docHeight - (y - docY));
			currentPoint = FPoint(x - docX, docHeight - (y - docY));
		}
		else if ((command == "L") || (command == "l"))
		{
			QTextStream ts2(&Cdata, QIODevice::ReadOnly);
			ts2 >> x >> y;
			Coords.svgLineTo(x - docX, docHeight - (y - docY));
			currentPoint = FPoint(x - docX, docHeight - (y - docY));
		}
		else if ((command == "C") || (command == "c"))
		{
			QTextStream ts2(&Cdata, QIODevice::ReadOnly);
			ts2 >> x >> y >> x1 >> y1 >> x2 >> y2;
			Coords.svgCurveToCubic(x - docX, docHeight - (y - docY),
								   x1 - docX, docHeight - (y1 - docY),
								   x2 - docX, docHeight - (y2 - docY));
			currentPoint = FPoint(x2 - docX, docHeight - (y2 - docY));
		}
		else if ((command == "Y") || (command == "y"))
		{
			QTextStream ts2(&Cdata, QIODevice::ReadOnly);
			ts2 >> x1 >> y1 >> x2 >> y2;
			Coords.svgCurveToCubic(currentPoint.x(), currentPoint.y(),
								   x1 - docX, docHeight - (y1 - docY),
								   x2 - docX, docHeight - (y2 - docY));
			currentPoint = FPoint(x2 - docX, docHeight - (y2 - docY));
		}
		else if ((command == "V") || (command == "v"))
		{
			QTextStream ts2(&Cdata, QIODevice::ReadOnly);
			ts2 >> x >> y >> x2 >> y2;
			Coords.svgCurveToCubic(x - docX, docHeight - (y - docY),
								   currentPoint.x(), currentPoint.y(),
								   x2 - docX, docHeight - (y2 - docY));
			currentPoint = FPoint(x2 - docX, docHeight - (y2 - docY));
		}
/* End Path construction commands */
/* Start Object creation commands */
		else if ((command == "b") || (command == "B") || (command == "f") || (command == "F") || (command == "s") || (command == "S"))
		{
			if (Coords.size() > 3)
			{
				if ((!WasU) || ((WasU) && (FirstU)))
				{
					if ((command == "B") || (command == "F") || (command == "S"))
					{
						if (command == "F")
							z = m_Doc->itemAdd(PageItem::PolyLine, PageItem::Unspecified, baseX, baseY, 10, 10, LineW, CurrColorFill, CommonStrings::None, true);
						else if (command == "B")
							z = m_Doc->itemAdd(PageItem::PolyLine, PageItem::Unspecified, baseX, baseY, 10, 10, LineW, CurrColorFill, CurrColorStroke, true);
						else
							z = m_Doc->itemAdd(PageItem::PolyLine, PageItem::Unspecified, baseX, baseY, 10, 10, LineW, CommonStrings::None, CurrColorStroke, true);
					}
					else
					{
						if (command == "f")
							z = m_Doc->itemAdd(PageItem::Polygon, PageItem::Unspecified, baseX, baseY, 10, 10, LineW, CurrColorFill, CommonStrings::None, true);
						else if (command == "b")
							z = m_Doc->itemAdd(PageItem::Polygon, PageItem::Unspecified, baseX, baseY, 10, 10, LineW, CurrColorFill, CurrColorStroke, true);
						else
							z = m_Doc->itemAdd(PageItem::Polygon, PageItem::Unspecified, baseX, baseY, 10, 10, LineW, CommonStrings::None, CurrColorStroke, true);
					}
					ite = m_Doc->Items->at(z);
					ite->PoLine = Coords.copy();
					ite->PoLine.translate(m_Doc->currentPage()->xOffset(), m_Doc->currentPage()->yOffset());
					ite->ClipEdited = true;
					ite->FrameType = 3;
					ite->setFillShade(CurrFillShade);
					ite->setLineShade(CurrStrokeShade);
					ite->setFillEvenOdd(fillRule);
					ite->setFillTransparency(1.0 - Opacity);
					ite->setLineTransparency(1.0 - Opacity);
	//				ite->setFillBlendmode(blendMode);
	//				ite->setLineBlendmode(blendMode);
					if (!currentPatternName.isEmpty())
					{
						ite->setPattern(currentPatternName);
						ite->setPatternTransform(currentPatternXScale, currentPatternYScale, currentPatternX, currentPatternY, currentPatternRotation);
						currentPatternName = "";
					}
					ite->setLineEnd(CapStyle);
					ite->setLineJoin(JoinStyle);
					ite->setLocked(itemLocked);
					if (!WasU)
					{
						FPoint wh = getMaxClipF(&ite->PoLine);
						ite->setWidthHeight(wh.x(),wh.y());
						ite->setTextFlowMode(PageItem::TextFlowUsesFrameShape);
						m_Doc->AdjustItemSize(ite);
					}
					if (patternMode)
						PatternElements.append(ite);
					else
						Elements.append(ite);
					if (groupStack.count() != 0)
						groupStack.top().append(ite);
					
				}
				else
				{
					ite = m_Doc->Items->at(m_Doc->Items->count()-1);
					ite->PoLine.setMarker();
					Coords.translate(m_Doc->currentPage()->xOffset(), m_Doc->currentPage()->yOffset());
					ite->PoLine.putPoints(ite->PoLine.size(), Coords.size(), Coords);
				}
				Coords.resize(0);
				Coords.svgInit();
				FirstU = false;
				itemRendered = true;
			}
		}
		else if (command == "*u")
		{
			FirstU = true;
			WasU = true;
		}
		else if (command == "*U")
		{
			WasU = false;
			ite = m_Doc->Items->at(m_Doc->Items->count()-1);
			FPoint wh = getMaxClipF(&ite->PoLine);
			ite->setWidthHeight(wh.x(),wh.y());
			m_Doc->AdjustItemSize(ite);
		}
		else if (command == "u")
		{
			QList<PageItem*> gElements;
			groupStack.push(gElements);
		}
		else if (command == "U")
		{
			if (groupStack.count() != 0)
			{
				QList<PageItem*> gElements = groupStack.pop();
				tmpSel->clear();
				if (gElements.count() > 0)
				{
					for (int dre = 0; dre < gElements.count(); ++dre)
					{
						tmpSel->addItem(gElements.at(dre), true);
					}
					if (gElements.count() > 1)
						m_Doc->itemSelection_GroupObjects(false, false, tmpSel);
				}
				if (groupStack.count() != 0)
				{
					for (uint as = 0; as < tmpSel->count(); ++as)
					{
						groupStack.top().append(tmpSel->itemAt(as));
					}
				}
				tmpSel->clear();
			}
		}
/* End Object construction commands */
/* Start Graphics state commands */
		else if (command == "A")
		{
			QTextStream ts2(&Cdata, QIODevice::ReadOnly);
			ts2 >> tmpInt;
			if (tmpInt == 1)
				itemLocked = true;
			else
				itemLocked = false;
		}
		else if (command == "w")
		{
			QTextStream ts2(&Cdata, QIODevice::ReadOnly);
			ts2 >> LineW;
		}
		else if (command == "j")
		{
			QTextStream ts2(&Cdata, QIODevice::ReadOnly);
			ts2 >> tmpInt;
			if (tmpInt == 0)
				JoinStyle = Qt::MiterJoin;
			else if (tmpInt == 1)
				JoinStyle = Qt::RoundJoin;
			else if (tmpInt == 1)
				JoinStyle = Qt::BevelJoin;
		}
		else if (command == "J")
		{
			QTextStream ts2(&Cdata, QIODevice::ReadOnly);
			ts2 >> tmpInt;
			if (tmpInt == 0)
				CapStyle = Qt::FlatCap;
			else if (tmpInt == 1)
				CapStyle = Qt::RoundCap;
			else if (tmpInt == 1)
				CapStyle = Qt::SquareCap;
		}
		/* undocumented Command Xy
			- has up to 5 Parameters
			- first Parameter might be the Blendmode
			- second Parameter is the Opacity
		*/
		else if (command == "Xy")
		{
			QTextStream ts2(&Cdata, QIODevice::ReadOnly);
			ts2 >> blendMode >> Opacity;
		}
		else if (command == "XR")
		{
			QTextStream ts2(&Cdata, QIODevice::ReadOnly);
			ts2 >> tmpInt;
			if (tmpInt == 1)
				fillRule = true;
			else
				fillRule = false;
		}
		else if (command == "Bb")
		{
			gradientMode = true;
			wasBC = false;
			itemRendered = false;
			startMatrix = QMatrix();
			endMatrix = QMatrix();
		}
		else if (command == "Xm")
		{
			QTextStream gVals(&Cdata, QIODevice::ReadOnly);
			double m1, m2, m3, m4, m5, m6;
			gVals >> m1 >> m2 >> m3 >> m4 >> m5 >> m6;
			startMatrix.translate(m5, -m6);
			endMatrix.scale(m1, m4);
			wasBC = true;
		}
		else if (command == "Bm")
		{
			if (m_gradients[currentGradientName].type() == 1)
			{
				QTextStream gVals(&Cdata, QIODevice::ReadOnly);
				double m1, m2, m3, m4, m5, m6;
				gVals >> m1 >> m2 >> m3 >> m4 >> m5 >> m6;
				startMatrix.translate(m5, -m6);
//				endMatrix.scale(m1, m4);
				endMatrix = QMatrix(m1, m2, m3, m4, 0, 0);
//				endMatrix = QMatrix(m1, m2, m3, m4, m5, m6);
				wasBC = true;
			}
		}
		else if (command == "BB")
		{
			if (itemRendered)
			{
				gradientMode = false;
				ite = m_Doc->Items->at(m_Doc->Items->count()-1);
				ite->fill_gradient = m_gradients[currentGradientName];
				if (ite->fill_gradient.type() == 0)
					ite->GrType = 6;
				else
					ite->GrType = 7;
				QMatrix m1;
				m1.translate(currentGradientOrigin.x() - ite->xPos(), currentGradientOrigin.y() - ite->yPos());
				m1.translate(m_Doc->currentPage()->xOffset(), m_Doc->currentPage()->yOffset());
				m1.rotate(-currentGradientAngle);
				ite->GrStartX = currentGradientOrigin.x() - ite->xPos() + m_Doc->currentPage()->xOffset();
				ite->GrStartY = currentGradientOrigin.y() - ite->yPos() + m_Doc->currentPage()->yOffset();
				QPointF target = m1.map(QPointF(currentGradientLenght, 0.0));
				ite->GrEndX = target.x();
				ite->GrEndY = target.y();
				if (wasBC)
				{
					QPointF newS = startMatrix.map(QPointF(ite->GrStartX, ite->GrStartY));
					ite->GrStartX = newS.x();
					ite->GrStartY = newS.y();
					QMatrix m2;
//					m2.translate(ite->GrStartX, ite->GrStartY);
					m2.rotate(-currentGradientAngle);
					m2 *= endMatrix;
					QPointF target = m2.map(QPointF(currentGradientLenght, 0.0));
					ite->GrEndX = target.x();
					ite->GrEndY = target.y();
				}
			}
			wasBC = false;
			currentGradientMatrix = QMatrix();
			currentGradientOrigin = QPointF(0.0, 0.0);
			currentGradientAngle = 0.0;
			currentGradientLenght = 1.0;
			itemRendered = false;
		}
		else if (command == "Bg")
		{
			int an = Cdata.indexOf("(");
			int en = Cdata.lastIndexOf(")");
			currentGradientName = Cdata.mid(an+1, en-an-1);
			currentGradientName.remove("\\");
			QString tmpS = Cdata.mid(en+1, Cdata.size() - en);
			QTextStream gVals(&tmpS, QIODevice::ReadOnly);
			double xOrig, yOrig, m1, m2, m3, m4, m5, m6;
			gVals >> xOrig >> yOrig >> currentGradientAngle >> currentGradientLenght >> m1 >> m2 >> m3 >> m4 >> m5 >> m6;
			currentGradientOrigin = QPointF(xOrig - docX, docHeight - (yOrig - docY));
			currentGradientMatrix = QMatrix(m1, m2, m3, m4, m5, m6);
		}
/* End Graphics state commands */
/* Start Color commands */
		else if ((command == "G") || (command == "g"))
		{
			if (command == "G")
				CurrColorStroke = parseColorGray(Cdata);
			else
				CurrColorFill = parseColorGray(Cdata);
		}
		else if ((command == "K") || (command == "k"))
		{
			if (command == "K")
				CurrColorStroke = parseColor(Cdata);
			else
				CurrColorFill = parseColor(Cdata);
		}
		else if ((command == "XA") || (command == "Xa"))
		{
			QString Xdata = da2[da2.count()-4] + " " + da2[da2.count()-3] + " " + da2[da2.count()-2];
			if (command == "XA")
				CurrColorStroke = parseColorRGB(Xdata);
			else
				CurrColorFill = parseColorRGB(Xdata);
		}
		else if ((command == "XX") || (command == "Xx"))
		{
			if (command == "XX")
				CurrColorStroke = parseCustomColorX(Cdata, CurrStrokeShade, da2[da2.count()-2]);
			else
				CurrColorFill = parseCustomColorX(Cdata, CurrFillShade, da2[da2.count()-2]);
		}
		else if ((command == "X") || (command == "x"))
		{
			if (command == "X")
				CurrColorStroke = parseCustomColor(Cdata, CurrStrokeShade);
			else
				CurrColorFill = parseCustomColor(Cdata, CurrFillShade);
		}
		else if (command == "p")
		{
			int an = Cdata.indexOf("(");
			int en = Cdata.lastIndexOf(")");
			currentPatternName = Cdata.mid(an+1, en-an-1);
			currentPatternName.remove("\\");
			currentPatternName = currentPatternName.stripWhiteSpace().simplifyWhiteSpace().replace(" ", "_");
			QString tmpS = Cdata.mid(en+1, Cdata.size() - en);
			QTextStream gVals(&tmpS, QIODevice::ReadOnly);
			gVals >> currentPatternX >> currentPatternY >> currentPatternXScale >> currentPatternYScale >> currentPatternRotation;
		}
/* End Color commands */
/* Start Layer commands */
		else if (command == "Lb")
		{
			if (importerFlags & LoadSavePlugin::lfCreateDoc)
			{
				int visible, preview, enabled, printing, dummy, rc, gc, bc;
				QTextStream ts2(&Cdata, QIODevice::ReadOnly);
				ts2 >> visible >> preview >> enabled >> printing >> dummy >> dummy >> dummy >> rc >> gc >> bc;
				if (!firstLayer)
					currentLayer = m_Doc->addLayer("Layer", true);
				m_Doc->setLayerVisible(currentLayer, static_cast<bool>(visible));
				m_Doc->setLayerOutline(currentLayer, static_cast<bool>(!preview));
				m_Doc->setLayerLocked(currentLayer, static_cast<bool>(!enabled));
				m_Doc->setLayerPrintable(currentLayer, static_cast<bool>(printing));
				m_Doc->setLayerMarker(currentLayer, QColor(rc, gc, bc));
				firstLayer = false;
			}
			Coords.resize(0);
			Coords.svgInit();
		}
		else if (command == "LB")
		{
			Coords.resize(0);
			Coords.svgInit();
		}
		else if (command == "Ln")
		{
			if (importerFlags & LoadSavePlugin::lfCreateDoc)
			{
				int an = Cdata.indexOf("(");
				int en = Cdata.lastIndexOf(")");
				QString LayerNam = Cdata.mid(an+1, en-an-1);
				LayerNam.remove("\\");
				m_Doc->changeLayerName(currentLayer, LayerNam);
			}
		}
/* End Layer commands */
/* Start Text commands */
		else if (command == "To")
		{
			QTextStream ts2(&Cdata, QIODevice::ReadOnly);
			ts2 >> textMode;
			textData.clear();
			textMatrix = QMatrix();
			maxWidth = 0;
			tempW = 0;
			maxHeight = 0;
			textKern = 0;
			startCurrentTextRange = 0;
			endCurrentTextRange = 0;
		}
		else if (command == "Tp")
		{
			QTextStream gVals(&Cdata, QIODevice::ReadOnly);
			double m1, m2, m3, m4, m5, m6;
			gVals >> m1 >> m2 >> m3 >> m4 >> m5 >> m6;
			textMatrix = QMatrix(m1, m2, m3, m4, m5, m6);
		}
		else if (command == "Tx")
		{
			QStringList res = getStrings(Cdata);
			if (res.count() > 0)
			{
				QString tex = res[0];
				double tempH = 0;
				startCurrentTextRange = textData.length();
				for (int tt = 0; tt < tex.length(); ++tt)
				{
					CharStyle nstyle;
					QString ch = tex.mid(tt,1);
					nstyle.setFont((*m_Doc->AllFonts)[textFont]);
					nstyle.setFontSize(textSize);
					nstyle.setFillColor(CurrColorFill);
					nstyle.setTracking(textKern);
					nstyle.setFillShade(100);
					nstyle.setStrokeColor(CurrColorStroke);
					nstyle.setStrokeShade(100);
					nstyle.setScaleH(1000);
					nstyle.setScaleV(1000);
					nstyle.setBaselineOffset(0);
					nstyle.setShadowXOffset(50);
					nstyle.setShadowYOffset(-50);
					nstyle.setOutlineWidth(10);
					nstyle.setUnderlineOffset(-1);
					nstyle.setUnderlineWidth(-1);
					nstyle.setStrikethruOffset(-1);
					nstyle.setStrikethruWidth(-1);
					nstyle.setFeatures(StyleFlag(ScStyle_Default).featureList());
					int pot = textData.length();
					textData.insertChars(pot, ch);
					textData.applyCharStyle(pot, 1, nstyle);
					tempW += nstyle.font().realCharWidth(ch[0], nstyle.fontSize() / 10.0)+1;
					tempH  = qMax(tempH, nstyle.font().height(nstyle.fontSize() / 10.0) + 2.0);
					if ((ch == SpecialChars::PARSEP) || (ch == SpecialChars::LINEBREAK))
					{
						maxHeight += nstyle.font().height(nstyle.fontSize() / 10.0);
						tempW = 0;
					}
					endCurrentTextRange = pot;
				}
				maxWidth  = qMax(tempW, maxWidth);
				maxHeight = qMax(tempH, maxHeight);
			}
		}
		else if (command == "Tk")
		{
			int flag;
			double val;
			QTextStream gVals(&Cdata, QIODevice::ReadOnly);
			gVals >> flag >> val;
			if (flag == 1)
				val = 0;
			double oldval = textData.charStyle(startCurrentTextRange).tracking();
			CharStyle nstyle = textData.charStyle(startCurrentTextRange);
			nstyle.setTracking(oldval + val);
			textData.applyCharStyle(startCurrentTextRange, 1, nstyle);
		}
		else if (command == "Tc")
		{
			QTextStream gVals(&Cdata, QIODevice::ReadOnly);
			gVals >> textKern;
			textKern *= 100.0;
		}
		else if (command == "T*")
		{
			CharStyle nstyle;
			QString ch = SpecialChars::LINEBREAK;
			nstyle.setFont((*m_Doc->AllFonts)[textFont]);
			nstyle.setFontSize(textSize);
			nstyle.setFillColor(CurrColorFill);
			nstyle.setTracking(textKern);
			nstyle.setFillShade(100);
			nstyle.setStrokeColor(CurrColorStroke);
			nstyle.setStrokeShade(100);
			nstyle.setScaleH(1000);
			nstyle.setScaleV(1000);
			nstyle.setBaselineOffset(0);
			nstyle.setShadowXOffset(50);
			nstyle.setShadowYOffset(-50);
			nstyle.setOutlineWidth(10);
			nstyle.setUnderlineOffset(-1);
			nstyle.setUnderlineWidth(-1);
			nstyle.setStrikethruOffset(-1);
			nstyle.setStrikethruWidth(-1);
			nstyle.setFeatures(StyleFlag(ScStyle_Default).featureList());
			int pot = textData.length();
			textData.insertChars(pot, ch);
			textData.applyCharStyle(pot, 1, nstyle);
			maxHeight += nstyle.font().height(nstyle.fontSize() / 10.0) + 2.0;
			tempW = 0;
		}
		else if (command == "Tf")
		{
			QTextStream gVals(&Cdata, QIODevice::ReadOnly);
			gVals >> textFont >> textSize;
			textFont.remove(0, 2);
			QString family = textFont;
			QString ret = "";
			family.replace( QRegExp( "'" ) , QChar( ' ' ) );
			textFont = m_Doc->toolSettings.defFont;
			bool found = false;
			SCFontsIterator it(PrefsManager::instance()->appPrefs.AvailFonts);
			for ( ; it.hasNext(); it.next())
			{
				QString fam;
				QString fn = it.current().scName();
				int pos = fn.find(" ");
				fam = fn.left(pos);
				if (fam == family)
				{
					found = true;
					ret = fn;
				}
			}
			if (found)
				textFont = family;
			else
			{
				if (!PrefsManager::instance()->appPrefs.GFontSub.contains(family))
				{
					qApp->changeOverrideCursor(QCursor(Qt::ArrowCursor));
					MissingFont *dia = new MissingFont(0, family, m_Doc);
					dia->exec();
					QString tmpf = dia->getReplacementFont();
					delete dia;
					qApp->changeOverrideCursor(QCursor(Qt::WaitCursor));
					PrefsManager::instance()->appPrefs.GFontSub[family] = tmpf;
				}
				else
					textFont = PrefsManager::instance()->appPrefs.GFontSub[family];
			}
			textSize *= 10.0;
		}
		else if (command == "TO")
		{
			QPointF pos = QPointF(textMatrix.dx(), textMatrix.dy());
			pos += QPointF(m_Doc->currentPage()->xOffset(), -m_Doc->currentPage()->yOffset());
			pos += QPointF(0.0, textSize / 10.0 + 2.0);
			z = m_Doc->itemAdd(PageItem::TextFrame, PageItem::Unspecified, pos.x() - docX, docHeight - (pos.y() - docY), 10, 10, 0, CommonStrings::None, CommonStrings::None, true);
			ite = m_Doc->Items->at(z);
			ite->setTextToFrameDist(0.0, 0.0, 0.0, 0.0);
			ite->itemText.append(textData);
			double xpos = ite->xPos();
			double ypos = ite->yPos();
			ite->setWidthHeight(qMax(ite->width(), maxWidth), qMax(ite->height(), maxHeight));
			double xoffset = 0.0, yoffset = 0.0;
			double rotation = getRotationFromMatrix(textMatrix, 0.0);
			if (rotation != 0.0)
			{
				double temp = textSize / 10.0 + 2.0;
				xoffset = sin(rotation) * temp;
				yoffset = cos(rotation) * temp;
			}
			ite->setXPos(xpos + xoffset);
			ite->setYPos(ypos + yoffset);
			ite->setRotation(rotation * 180 / M_PI);
			ite->SetRectFrame();
			m_Doc->setRedrawBounding(ite);
			ite->Clip = FlattenPath(ite->PoLine, ite->Segments);
			ite->setTextFlowMode(PageItem::TextFlowDisabled);
			ite->setFillShade(CurrFillShade);
			ite->setLineShade(CurrStrokeShade);
			ite->setFillEvenOdd(fillRule);
			ite->setFillTransparency(1.0 - Opacity);
			ite->setLineTransparency(1.0 - Opacity);
			ite->setLineEnd(CapStyle);
			ite->setLineJoin(JoinStyle);
			ite->setLocked(itemLocked);
			Elements.append(ite);
			if (groupStack.count() != 0)
				groupStack.top().append(ite);
		}
/* End Text commands */
/* Start special Commands */
		else if (command == "*")
		{
			Coords.resize(0);
			Coords.svgInit();
		}
		else if ((command == "N") || (command == "n"))
		{
			Coords.resize(0);
			Coords.svgInit();
		}
		else if (command == "[")
		{
			patternMode = true;
			int an = Cdata.indexOf("(");
			int en = Cdata.lastIndexOf(")");
			currentPatternDefName = Cdata.mid(an+1, en-an-1);
			currentPatternDefName.remove("\\");
			currentPatternDefName = currentPatternDefName.stripWhiteSpace().simplifyWhiteSpace().replace(" ", "_");
			QString tmpS = Cdata.mid(en+1, Cdata.size() - en);
			QTextStream gVals(&tmpS, QIODevice::ReadOnly);
			gVals >> patternX1 >> patternY1 >> patternX2 >> patternY2;
		}
/* End special Commands */
/* Skip everything else */
//		else
//			qDebug(command);
	}
}

void AIPlug::processGradientData(QString data)
{
	QString command = "";
	QString Cdata = "";
	QStringList da;
	getCommands(data, da);
	for (int a = 0; a < da.count(); a++)
	{
		Cdata = da[a];
		QStringList da2 = QStringList::split(" ", Cdata);
		command = da2[da2.count()-1];
		if (command == "Bd")
		{
			QString tmpS = Cdata;
			int an = Cdata.indexOf("(");
			int en = Cdata.lastIndexOf(")");
			currentGradientName = Cdata.mid(an+1, en-an-1);
			currentGradientName.remove("\\");
			if (da2[da2.count()-3] == "0")
				currentGradient = VGradient(VGradient::linear);
			else
				currentGradient = VGradient(VGradient::radial);
			currentGradient.clearStops();
		}
		else if ((command == "%_Bs") || (command == "%_BS"))
		{
			QString stopName = "";
			double stop = da2[da2.count()-2].toDouble() / 100.0;
			double colorShade = 100.0;
			int colortype = da2[da2.count()-4].toInt();
			if (colortype == 0)
			{
				stopName = parseColorGray(Cdata);
				const ScColor& gradC = m_Doc->PageColors[stopName];
				currentGradient.addStop( ScColorEngine::getRGBColor(gradC, m_Doc), stop, 0.5, 1.0, stopName, 100 );
			}
			else if (colortype == 1)
			{
				stopName = parseColor(Cdata);
				const ScColor& gradC = m_Doc->PageColors[stopName];
				currentGradient.addStop( ScColorEngine::getRGBColor(gradC, m_Doc), stop, 0.5, 1.0, stopName, 100 );
			}
			else if (colortype == 2)
			{
				stopName = parseColor(Cdata);
				const ScColor& gradC = m_Doc->PageColors[stopName];
				currentGradient.addStop( ScColorEngine::getRGBColor(gradC, m_Doc), stop, 0.5, 1.0, stopName, 100 );
			}
			else if (colortype == 3)
			{
				stopName = parseCustomColor(Cdata, colorShade);
				const ScColor& gradC = m_Doc->PageColors[stopName];
				currentGradient.addStop( ScColorEngine::getRGBColor(gradC, m_Doc), stop, 0.5, 1.0, stopName, qRound(colorShade));
			}
			else if (colortype == 4)
			{
				stopName = parseCustomColorX(Cdata, colorShade, "0");
				const ScColor& gradC = m_Doc->PageColors[stopName];
				currentGradient.addStop( ScColorEngine::getRGBColor(gradC, m_Doc), stop, 0.5, 1.0, stopName, qRound(colorShade));
			}
		}
		else if (command == "BD")
		{
			m_gradients.insert(currentGradientName, currentGradient);
			currentGradient = VGradient(VGradient::linear);
			currentGradient.clearStops();
			currentGradient.setRepeatMethod( VGradient::none );
			currentGradientName = "";
		}
	}
}

void AIPlug::processPattern(QDataStream &ts)
{
	QString tmp = "";
	QString tmpData = "";
	while (!ts.atEnd())
	{
		tmp = removeAIPrefix(readLinefromDataStream(ts));
		if (patternMode)
		{
			if (tmp == "EndPattern")
			{
				tmpSel->clear();
				if (PatternElements.count() > 0)
				{
					for (int dre = 0; dre < PatternElements.count(); ++dre)
					{
						tmpSel->addItem(PatternElements.at(dre), true);
					}
					if (PatternElements.count() > 1)
						m_Doc->itemSelection_GroupObjects(false, false, tmpSel);
					ScPattern pat = ScPattern();
					pat.setDoc(m_Doc);
					PageItem* currItem = tmpSel->itemAt(0);
					currItem->setItemName(currentPatternDefName);
					m_Doc->DoDrawing = true;
					QImage tmpImg = currItem->DrawObj_toImage();
					QImage retImg = QImage(qRound(patternX2 - patternX1), qRound(patternY2 - patternY1), QImage::Format_ARGB32);
					retImg.fill( qRgba(255, 255, 255, 0) );
					QPainter p;
					p.begin(&retImg);
					if (PatternElements.count() > 1)
						p.drawImage(-patternX1, -patternY1, tmpImg);
					else
						p.drawImage(0, 0, tmpImg);
					p.end();
					pat.pattern = retImg;
//					pat.pattern = currItem->DrawObj_toImage();
					m_Doc->DoDrawing = false;
					//			pat.width = currItem->gWidth;
					//			pat.height = currItem->gHeight;
					pat.width = patternX2 - patternX1;
					pat.height = patternY2 - patternY1;
					for (uint as = 0; as < tmpSel->count(); ++as)
					{
						pat.items.append(tmpSel->itemAt(as));
					}
					m_Doc->itemSelection_DeleteItem(tmpSel);
					m_Doc->addPattern(currentPatternDefName, pat);
				}
				PatternElements.clear();
				currentPatternDefName = "";
				break;
			}
			else if (tmp.startsWith("Tile"))
				continue;
			else if (tmp.contains(") @"))
			{
				tmpData += tmp;
				tmpData.remove(") @");
				processData(tmpData);
				tmpData = "";
			}
			else if (tmp.contains(") &"))
			{
				tmpData += tmp;
				tmpData.remove(") &");
				processData(tmpData);
				tmpData = "";
			}
			else
			{
				if (tmp.startsWith("("))
					tmp.remove(0, 1);
				tmpData += " "+tmp;
			}
		}
		else if (tmp == "EndPattern")
		{
			PatternElements.clear();
			currentPatternDefName = "";
			break;
		}
		else
			processData(tmp);
	}
	patternMode = false;
}

void AIPlug::processRaster(QDataStream &ts)
{
	double m1, m2, m3, m4, m5, m6, x1, y1, x2, y2, w, h, bits, type, dummy, bin;
	QString tmp = "";
	tmp = removeAIPrefix(readLinefromDataStream(ts));
	tmp.remove("[");
	tmp.remove("]");
	QTextStream gVals(&tmp, QIODevice::ReadOnly);
	gVals >> m1 >> m2 >> m3 >> m4 >> m5 >> m6 >> x1 >> y1 >> x2 >> y2 >> w >> h >> bits >> type >> dummy >> dummy >> bin;
//	qDebug(QString("Matrix: %1 %2 %3 %4 %5 %6").arg(m1).arg(m2).arg(m3).arg(m4).arg(m5).arg(m6));
//	qDebug(QString("Bounds: %1 %2 %3 %4").arg(x1).arg(y1).arg(x2).arg(y2));
//	qDebug(QString("Size: %1 %2").arg(w).arg(h));
//	qDebug(QString("Bits: %1").arg(bits));
//	qDebug(QString("Typ: %1").arg(type));
//	qDebug(QString("Encoding: %1").arg(bin));
	while (!ts.atEnd())
	{
		tmp = removeAIPrefix(readLinefromDataStream(ts));
		if (tmp.startsWith("EndRaster"))
			break;
	}
}

void AIPlug::processComment(QDataStream &ts, QString comment)
{
	QString tmp = removeAIPrefix(comment);
	if (tmp.startsWith("Begin_NonPrinting"))
	{
		while (!ts.atEnd())
		{
			tmp = removeAIPrefix(readLinefromDataStream(ts));
			if (tmp.startsWith("BeginGradient"))
			{
				while (!ts.atEnd())
				{
					tmp = removeAIPrefix(readLinefromDataStream(ts));
					if (tmp.startsWith("EndGradient"))
						break;
					else
						processGradientData(tmp);
				}
			}
			if (tmp.startsWith("BeginPattern:"))
				processPattern(ts);
			if (tmp.startsWith("End_NonPrinting"))
				break;
		}
	}
	else if (tmp.startsWith("BeginPattern:"))
		processPattern(ts);
	else if (tmp.startsWith("BeginGradient"))
	{
		while (!ts.atEnd())
		{
			tmp = removeAIPrefix(readLinefromDataStream(ts));
			if (tmp.startsWith("EndGradient"))
				break;
			else
				processGradientData(tmp);
		}
	}
	else if (tmp.startsWith("BeginPalette"))
	{
		while (!ts.atEnd())
		{
			tmp = removeAIPrefix(readLinefromDataStream(ts));
			if (tmp.startsWith("EndPalette"))
				break;
		}
	}
	else if (tmp.startsWith("BeginSymbol"))
	{
		while (!ts.atEnd())
		{
			tmp = removeAIPrefix(readLinefromDataStream(ts));
			if (tmp.startsWith("EndSymbol"))
				break;
		}
	}
	else if (tmp.startsWith("BeginDocumentData"))
	{
		while (!ts.atEnd())
		{
			tmp = removeAIPrefix(readLinefromDataStream(ts));
			if (tmp.startsWith("EndDocumentData"))
				break;
		}
	}
	else if (tmp.startsWith("%%BeginProlog"))
	{
		while (!ts.atEnd())
		{
			tmp = removeAIPrefix(readLinefromDataStream(ts));
			if (tmp.startsWith("%%EndProlog"))
				break;
		}
	}
	else if (tmp.startsWith("%%BeginData"))
	{
		while (!ts.atEnd())
		{
			tmp = removeAIPrefix(readLinefromDataStream(ts));
			if (tmp.startsWith("%%EndData"))
				break;
		}
	}
	else if (tmp.startsWith("%%BeginCrops"))
	{
		while (!ts.atEnd())
		{
			tmp = removeAIPrefix(readLinefromDataStream(ts));
			if (tmp.startsWith("%%EndCrops"))
				break;
		}
	}
	else if (tmp.startsWith("BeginRaster"))
	{
		processRaster(ts);
	}
	else if (tmp.startsWith("BeginLayer"))
	{
		while (!ts.atEnd())
		{
			tmp = removeAIPrefix(readLinefromDataStream(ts));
			if (tmp.startsWith("BeginRaster"))
			{
				processRaster(ts);
				continue;
			}
			if (tmp.startsWith("EndLayer"))
				break;
			else
				processData(tmp);
		}
	}
}

bool AIPlug::convert(QString fn)
{
	QString tmp;
	LineW = 1.0;
	Opacity = 1.0;
	blendMode = 0;
	CurrColorFill = "White";
	CurrFillShade = 100.0;
	CurrColorStroke = "Black";
	CurrStrokeShade = 100.0;
	JoinStyle = Qt::MiterJoin;
	CapStyle = Qt::FlatCap;
	DashPattern.clear();
	DashOffset = 0.0;
	fillRule = false;
	FirstU = false;
	WasU = false;
	firstLayer = true;
	patternMode = false;
	itemLocked = false;
	patternX1 = 0.0;
	patternY1 = 0.0;
	patternX2 = 0.0;
	patternY2 = 0.0;
	Coords.resize(0);
	Coords.svgInit();
	currentPoint = FPoint(0.0, 0.0);
	currentLayer = 0;
	currentGradient = VGradient(VGradient::linear);
	currentGradient.clearStops();
	currentGradient.setRepeatMethod( VGradient::none );
	currentGradientName = "";
	currentGradientMatrix = QMatrix();
	currentGradientOrigin = QPointF(0.0, 0.0);
	currentGradientAngle = 0.0;
	currentGradientLenght = 1.0;
	currentPatternName = "";
	currentPatternX = 0.0;
	currentPatternY = 0.0;
	currentPatternXScale = 1.0;
	currentPatternYScale = 1.0;
	currentPatternRotation = 0.0;
	QList<PageItem*> gElements;
	groupStack.push(gElements);
	commandList << "m" << "l" << "L" << "c" << "C" << "v" << "V" << "y" << "Y";		// Path construction
	commandList << "b" << "B" << "f" << "F" << "s" << "S" << "*u" << "*U";			// Object creation
	commandList << "u" << "U";														// Object creation
	commandList << "A" << "w" << "j" << "J" << "Xy" << "XR";						// Graphic state
	commandList << "k" << "K" << "Xa" << "XA" << "x" << "X" << "XX" << "Xx";		// Color commands
	commandList << "g" << "G" << "p";												// Color commands
	commandList << "Ln" << "Lb" << "LB";											// Layer commands
	commandList << "Bd" << "BD" << "%_Bs" << "Bg" << "Bb" << "BB" << "Bm" << "Xm";	// Gradient commands
	commandList << "To" << "TO" << "Tf" << "Tp" << "Tx" << "T*" << "Tk" << "Tc";	// Text commands
	commandList << "n" << "N" << "*" << "[";										// Special commands
	commandList << "M" << "d" << "D" << "E";										// unimplemented
	commandList << "h" << "H" << "i" << "I" << "Np" << "O";							// unimplemented
	commandList << "P" << "q" << "Q" << "R" << "W";									// unimplemented
	commandList << "XI" << "XF" << "XG" << "XT" << "Z" << "`" << "~" << "_" << "@";	// unimplemented
	commandList << "&" << "*w" << "*W" << "Ap" << "Ar";								// unimplemented
	if(progressDialog)
	{
		progressDialog->setOverallProgress(2);
		progressDialog->setLabel("GI", tr("Generating Items"));
		qApp->processEvents();
	}
	QFile f(fn);
	if (f.open(QIODevice::ReadOnly))
	{
		int fSize = (int) f.size();
		if (progressDialog)
		{
			progressDialog->setTotalSteps("GI", fSize);
			qApp->processEvents();
		}
		QDataStream ts(&f);
		while (!ts.atEnd())
		{
			tmp = readLinefromDataStream(ts);
			if (tmp.startsWith("%"))
				processComment(ts, tmp);
			else
				processData(tmp);
		}
	}
	if (progressDialog)
		progressDialog->close();
	return true;
}