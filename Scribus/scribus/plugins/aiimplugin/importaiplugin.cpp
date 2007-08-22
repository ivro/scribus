/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "commonstrings.h"
#include "customfdialog.h"
#include "importai.h"
#include "importaiplugin.h"
#include "menumanager.h"
#include "page.h"
#include "prefscontext.h"
#include "prefsfile.h"
#include "prefsmanager.h"
#include "scraction.h"
#include "scribuscore.h"
#include "undomanager.h"
#include "util_formats.h"


int importai_getPluginAPIVersion()
{
	return PLUGIN_API_VERSION;
}

ScPlugin* importai_getPlugin()
{
	ImportAIPlugin* plug = new ImportAIPlugin();
	Q_CHECK_PTR(plug);
	return plug;
}

void importai_freePlugin(ScPlugin* plugin)
{
	ImportAIPlugin* plug = dynamic_cast<ImportAIPlugin*>(plugin);
	Q_ASSERT(plug);
	delete plug;
}

ImportAIPlugin::ImportAIPlugin() : LoadSavePlugin(),
	importAction(new ScrAction(ScrAction::DLL, QPixmap(), QPixmap(), "", QKeySequence(), this))
{
	// Set action info in languageChange, so we only have to do it in one
	// place. This includes registering file format support.
	languageChange();
}

void ImportAIPlugin::addToMainWindowMenu(ScribusMainWindow *mw)
{
	importAction->setEnabled(true);
	connect( importAction, SIGNAL(activated()), SLOT(import()) );
	mw->scrMenuMgr->addMenuItem(importAction, "FileImport");
}

void ImportAIPlugin::languageChange()
{
	importAction->setText( tr("Import AI..."));
	// (Re)register file format support
	unregisterAll();
	registerFormats();
}

ImportAIPlugin::~ImportAIPlugin()
{
	unregisterAll();
};

const QString ImportAIPlugin::fullTrName() const
{
	return QObject::tr("Adobe Illustrator Importer");
}


const ScActionPlugin::AboutData* ImportAIPlugin::getAboutData() const
{
	AboutData* about = new AboutData;
	about->authors = "Franz Schmid <franz@scribus.info>";
	about->shortDescription = tr("Imports Illustrator Files");
	about->description = tr("Imports most Illustrator files into the current document,\nconverting their vector data into Scribus objects.");
	about->license = "GPL";
	Q_CHECK_PTR(about);
	return about;
}

void ImportAIPlugin::deleteAboutData(const AboutData* about) const
{
	Q_ASSERT(about);
	delete about;
}

void ImportAIPlugin::registerFormats()
{
	FileFormat fmt(this);
	fmt.trName = FormatsManager::instance()->nameOfFormat(FormatsManager::AI); // Human readable name
	fmt.formatId = FORMATID_AIIMPORT;
	fmt.filter = FormatsManager::instance()->extensionsForFormat(FormatsManager::AI); // QFileDialog filter
	fmt.nameMatch = QRegExp("\\."+FormatsManager::instance()->extensionListForFormat(FormatsManager::AI, 1)+"$", false);
	fmt.load = true;
	fmt.save = false;
	fmt.mimeTypes = FormatsManager::instance()->mimetypeOfFormat(FormatsManager::AI); // MIME types
	fmt.priority = 64; // Priority
	registerFormat(fmt);
}

bool ImportAIPlugin::fileSupported(QIODevice* /* file */, const QString & fileName) const
{
	// TODO: check for %!PS-Adobe
	return true;
}

bool ImportAIPlugin::loadFile(const QString & fileName, const FileFormat &, int flags, int /*index*/)
{
	// There's only one format to handle, so we just call import(...)
	return import(fileName, flags);
}

bool ImportAIPlugin::import(QString fileName, int flags)
{
	if (!checkFlags(flags))
		return false;
//	if (!(flags & lfInteractive))
		UndoManager::instance()->setUndoEnabled(false);
	if( fileName.isEmpty() )
	{
		flags |= lfInteractive;
		PrefsContext* prefs = PrefsManager::instance()->prefsFile->getPluginContext("importai");
		QString wdir = prefs->get("wdir", ".");
		CustomFDialog diaf(ScCore->primaryMainWindow(), wdir, QObject::tr("Open"), FormatsManager::instance()->fileDialogFormatList(FormatsManager::AI));
		if (diaf.exec())
		{
			fileName = diaf.selectedFile();
			prefs->set("wdir", fileName.left(fileName.lastIndexOf("/")));
		}
		else
			return true;
	}
	m_Doc=ScCore->primaryMainWindow()->doc;
//	if (UndoManager::undoEnabled() && m_Doc)
//	{
//		UndoManager::instance()->beginTransaction(m_Doc->currentPage()->getUName(),
//												Um::IImageFrame,
//												Um::ImportEPS,
//												fileName, Um::IEPS);
//	}
//	else if (UndoManager::undoEnabled() && !m_Doc)
//		UndoManager::instance()->setUndoEnabled(false);
	AIPlug *dia = new AIPlug(m_Doc, flags);
	Q_CHECK_PTR(dia);
	dia->import(fileName, flags);
//	if (UndoManager::undoEnabled())
//		UndoManager::instance()->commit();
//	else
		UndoManager::instance()->setUndoEnabled(true);
	delete dia;
	return true;
}
