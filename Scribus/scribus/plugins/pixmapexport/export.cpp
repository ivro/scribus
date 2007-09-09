/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "export.h"
#include "dialog.h"
//#include "export.moc"
#include <QPixmap>
#include <QString>
#include <QDir>
#include <QCursor>

#include "scmessagebox.h"
#include "scribus.h"
#include "scraction.h"
#include "menumanager.h"
#include "util.h"
#include "commonstrings.h"
#include "scpaths.h"

int scribusexportpixmap_getPluginAPIVersion()
{
	return PLUGIN_API_VERSION;
}

ScPlugin* scribusexportpixmap_getPlugin()
{
	PixmapExportPlugin* plug = new PixmapExportPlugin();
	Q_CHECK_PTR(plug);
	return plug;
}

void scribusexportpixmap_freePlugin(ScPlugin* plugin)
{
	PixmapExportPlugin* plug = dynamic_cast<PixmapExportPlugin*>(plugin);
	Q_ASSERT(plug);
	delete plug;
}

PixmapExportPlugin::PixmapExportPlugin() : ScActionPlugin()
{
	// Set action info in languageChange, so we only have to do
	// it in one place. This includes registering file formats.
	languageChange();
}

PixmapExportPlugin::~PixmapExportPlugin()
{
};

void PixmapExportPlugin::languageChange()
{
	// Note that we leave the unused members unset. They'll be initialised
	// with their default ctors during construction.
	// Action name
	m_actionInfo.name = "ExportAsImage";
	// Action text for menu, including accel
	m_actionInfo.text = tr("Save as &Image...");
	// Keyboard shortcut
	m_actionInfo.keySequence = "CTRL+SHIFT+E";
	// Menu
	m_actionInfo.menu = "FileExport";
	m_actionInfo.enabledOnStartup = true;
}

const QString PixmapExportPlugin::fullTrName() const
{
	return tr("Export As Image");
}

const ScActionPlugin::AboutData* PixmapExportPlugin::getAboutData() const
{
	AboutData* about = new AboutData;
	Q_CHECK_PTR(about);
	about->authors = QString::fromUtf8("Petr Van\xc4\x9bk <petr@scribus.info>");
	about->shortDescription = tr("Export As Image");
	about->description = tr("Exports selected pages as bitmap images.");
	// about->version
	// about->releaseDate
	// about->copyright
	about->license = "GPL";
	return about;
}

void PixmapExportPlugin::deleteAboutData(const AboutData* about) const
{
	Q_ASSERT(about);
	delete about;
}

bool PixmapExportPlugin::run(ScribusDoc* doc, QString target)
{
	Q_ASSERT(target.isEmpty());
	Q_ASSERT(!doc->masterPageMode());
	ExportBitmap *ex = new ExportBitmap();
	ExportForm *dia = new ExportForm(doc->scMW(), doc, ex->pageDPI, ex->quality, ex->bitmapType);

	// interval widgets handling
	QString tmp;
	dia->rangeVal->setText(tmp.setNum(doc->currentPageNumber()+1));
	// main "loop"
	if (dia->exec()==QDialog::Accepted)
	{
		QApplication::changeOverrideCursor(QCursor(Qt::WaitCursor));
		std::vector<int> pageNs;
		ex->pageDPI = dia->DPIBox->value();
		ex->enlargement = dia->enlargementBox->value();
		ex->quality = dia->qualityBox->value();
		ex->exportDir = ScPaths::separatorsToSlashes(dia->outputDirectory->text());
		ex->bitmapType = dia->bitmapType->currentText();
		doc->scMW()->mainWindowProgressBar->reset();
		bool res;
		if (dia->onePageRadio->isChecked())
			res = ex->exportCurrent(doc);
		else
		{
			if (dia->allPagesRadio->isChecked())
				parsePagesString("*", &pageNs, doc->DocPages.count());
			else
				parsePagesString(dia->rangeVal->text(), &pageNs, doc->DocPages.count());
			res = ex->exportInterval(doc, pageNs);
		}
		doc->scMW()->mainWindowProgressBar->reset();
		QApplication::restoreOverrideCursor();
		if (!res)
		{
			QMessageBox::warning(doc->scMW(), tr("Save as Image"), tr("Error writing the output file(s)."));
			doc->scMW()->setStatusBarInfoText( tr("Error writing the output file(s)."));
		}
		else
			doc->scMW()->setStatusBarInfoText( tr("Export successful"));
	}
	// clean the trash
	delete ex;
	delete dia;
	return true;
}


ExportBitmap::ExportBitmap()
{
	pageDPI = 72;
	quality = 100;
	enlargement = 100.0;
	exportDir = QDir::currentPath();
	bitmapType = QString("PNG");
	overwrite = false;
}

QString ExportBitmap::getFileName(ScribusDoc* doc, uint pageNr)
{
	return QDir::cleanPath(QDir::convertSeparators(exportDir + "/" + getFileNameByPage(doc, pageNr, bitmapType.toLower())));
}

ExportBitmap::~ExportBitmap()
{
}

bool ExportBitmap::exportPage(ScribusDoc* doc, uint pageNr, bool single = true)
{
	uint over = 0;
	QString fileName(getFileName(doc, pageNr));

	if (!doc->Pages->at(pageNr))
		return false;
	Page* page = doc->Pages->at(pageNr);

	/* a little magic here - I need to compute the "maxGr" value...
	* We need to know the right size of the page for landscape,
	* portrait and user defined sizes.
	*/
	double pixmapSize = (page->height() > page->width()) ? page->height() : page->width();
	QImage im(doc->view()->PageToPixmap(pageNr, qRound(pixmapSize * enlargement * (pageDPI / 72.0) / 100.0), false));
	int dpm = qRound(100.0 / 2.54 * pageDPI);
	im.setDotsPerMeterY(dpm);
	im.setDotsPerMeterX(dpm);
	if (QFile::exists(fileName) && !overwrite)
	{
		QString fn = QDir::convertSeparators(fileName);
		QApplication::restoreOverrideCursor();
		over = QMessageBox::question(doc->scMW(), tr("File exists. Overwrite?"),
				fn +"\n"+ tr("exists already. Overwrite?"),
				// hack for multiple overwritting (petr) 
				(single == true) ? QMessageBox::Yes | QMessageBox::No : QMessageBox::Yes | QMessageBox::No | QMessageBox::YesToAll);
		QApplication::changeOverrideCursor(QCursor(Qt::WaitCursor));
		if (over == QMessageBox::Yes)
			return im.save(fileName, bitmapType.toLocal8Bit().constData(), quality);
		if (over == QMessageBox::YesToAll)
			overwrite = true;
	}
	return im.save(fileName, bitmapType.toLocal8Bit().constData(), quality);
}

bool ExportBitmap::exportCurrent(ScribusDoc* doc)
{
	return exportPage(doc, doc->currentPageNumber(), true);
}

bool ExportBitmap::exportInterval(ScribusDoc* doc, std::vector<int> &pageNs)
{
	doc->scMW()->mainWindowProgressBar->setMaximum(pageNs.size());
	for (uint a = 0; a < pageNs.size(); ++a)
	{
		doc->scMW()->mainWindowProgressBar->setValue(a);
		if (!exportPage(doc, pageNs[a]-1, false))
			return false;
	}
	return true;
}
