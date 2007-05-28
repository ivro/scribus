/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "loadsaveplugin.h"
//#include "loadsaveplugin.moc"
//Added by qt3to4:
#include <Q3ValueList>

Q3ValueList<FileFormat> LoadSavePlugin::formats;

LoadSavePlugin::LoadSavePlugin()
	: ScPlugin(),
	m_Doc(0),
	m_View(0),
	m_ScMW(0),
	m_mwProgressBar(0),
	m_AvailableFonts(0)
{
}

LoadSavePlugin::~LoadSavePlugin()
{
}

// STATIC method - return a list of all existing formats
const Q3ValueList<FileFormat> & LoadSavePlugin::supportedFormats()
{
	return formats;
}

const FileFormat * LoadSavePlugin::getFormatById(const int id)
{
	Q3ValueList<FileFormat>::iterator it(findFormat(id));
	if (it == formats.end())
		return 0;
	else
		return &(*it);
}

const QStringList LoadSavePlugin::fileDialogLoadFilter()
{
	return getDialogFilter(true);
}

const QStringList LoadSavePlugin::fileDialogSaveFilter()
{
	return getDialogFilter(false);
}

const QStringList LoadSavePlugin::getDialogFilter(bool forLoad)
{
	Q3ValueList<FileFormat>::const_iterator it(formats.constBegin());
	Q3ValueList<FileFormat>::const_iterator itEnd(formats.constEnd());
	QStringList filterList;
	// We know the list is sorted by id, then priority, so we can just take the
	// highest priority entry for each ID, and we can start with the first entry
	// in the list.
	//First, check if we even have any plugins to load with
	if (it!=itEnd)
	{
		filterList.append((*it).filter);
		unsigned int lastID = (*it).formatId;
		++it;
		for ( ; it != itEnd ; ++it )
		{
			// Find the next load/save (as appropriate) plugin for the next format type
			if ( (forLoad ? (*it).load : (*it).save) && ((*it).formatId > lastID) )
			{
				// And add it to the filter list, since we know it's 
				// the highest priority because of the sort order.
				filterList.append((*it).filter);
				lastID = (*it).formatId;
			}
		}
	}
	else
		qDebug("%s", tr("No File Loader Plugins Found").local8Bit().data());
	filterList.append( tr("All Files (*)"));
	return filterList;
}

bool LoadSavePlugin::saveFile(const QString & /* fileName */,
							  const FileFormat & /* fmt */)
{
	return false;
}

bool LoadSavePlugin::loadFile(const QString & /* fileName */,
							  const FileFormat & /* fmt */,
							  int /* flags */,
							  int /* index */)
{
	return false;
}

bool LoadSavePlugin::checkFlags(int flags)
{
	int numFlags = 0;
	// Only one of the following flags must be set:
	// lfCreateDoc, lfUseCurrentPage, lfInsertPage
	if( flags & lfCreateDoc ) 
		numFlags++;
	if( flags & lfUseCurrentPage ) 
		numFlags++;
	if( flags & lfInsertPage ) 
		numFlags++;
	if( numFlags > 1 )
		return false;
	return true;
}

void LoadSavePlugin::registerFormat(const FileFormat & fmt)
{
	// We insert the format in a very specific location so that the formats
	// list is sorted by ascending id, then descending priority.
	// We first look for entries with equal or greater ID, then equal or
	// lesser priority, and insert before the first item that is of either:
	//     - Equal ID and lesser or equal priority; or
	//     - Greater ID
	// If we don't find one, we insert before the end iterator, ie append.
	Q3ValueList<FileFormat>::iterator it(formats.begin());
	Q3ValueList<FileFormat>::iterator itEnd(formats.end());
	while (it != itEnd)
	{
		if ( ( ((*it).formatId == fmt.formatId) && ((*it).priority <= fmt.priority) ) ||
			 ((*it).formatId > fmt.formatId)) 
				break;
		++it;
	}
	formats.insert(it, fmt);
	//printFormatList(); // DEBUG
}

// static debugging function - prints the human readable format list
void LoadSavePlugin::printFormatList()
{
	qDebug("Current format list:");
	Q3ValueList<FileFormat>::const_iterator it(formats.constBegin());
	Q3ValueList<FileFormat>::const_iterator itEnd(formats.constEnd());
	for ( ; it != itEnd ; ++it )
	{
		qDebug("    Format: Id: %3u, Prio: %3hu, Name: %s",
				(*it).formatId, (*it).priority, (*it).trName.local8Bit().data() );
	}
	qDebug("Done");
}

void LoadSavePlugin::unregisterFormat(unsigned int id)
{
	Q3ValueList<FileFormat>::iterator it(findFormat(id, this));
	Q_ASSERT(it != formats.end());
	formats.remove(it);
}

void LoadSavePlugin::unregisterAll()
{
	Q3ValueList<FileFormat>::iterator it(formats.begin());
	Q3ValueList<FileFormat>::iterator itEnd(formats.end());
	while (it != itEnd)
	{
		if ((*it).plug == this)
			it = formats.remove(it);
		else
			++it;
	}
}

Q3ValueList<FileFormat>::iterator
LoadSavePlugin::findFormat(unsigned int id,
						   LoadSavePlugin* plug,
						   Q3ValueList<FileFormat>::iterator it)
{
	Q3ValueList<FileFormat>::iterator itEnd(formats.end());
	for ( ; it != itEnd ; ++it )
	{
		if (
				((*it).formatId == id) &&
				((plug == 0) || (plug == (*it).plug))
			)
			return it;
	}
	return itEnd;
}

Q3ValueList<FileFormat>::iterator
LoadSavePlugin::findFormat(const QString& extension,
						   LoadSavePlugin* plug,
						   Q3ValueList<FileFormat>::iterator it)
{
	Q3ValueList<FileFormat>::iterator itEnd(formats.end());
	for ( ; it != itEnd ; ++it )
	{
		if (
				((*it).nameMatch.search(extension)) &&
				((plug == 0) || (plug == (*it).plug))
			)
			return it;
	}
	return itEnd;
}


void LoadSavePlugin::setupTargets(ScribusDoc *targetDoc, ScribusView* targetView, ScribusMainWindow* targetMW, Q3ProgressBar* targetMWPRogressBar, SCFonts* targetAvailableFonts)
{
	m_Doc=targetDoc;
	m_View=targetView;
	m_ScMW=targetMW;
	m_mwProgressBar=targetMWPRogressBar;
	m_AvailableFonts=targetAvailableFonts;
}

void LoadSavePlugin::getReplacedFontData(bool & /*getNewReplacement*/, QMap<QString,QString> &/*getReplacedFonts*/, Q3ValueList<ScFace> &/*getDummyScFaces*/)
{
}

bool LoadSavePlugin::loadPage(const QString & /*fileName*/, int /*pageNumber*/, bool /*Mpage*/, QString /*renamedPageName*/)
{
	return false;
}

bool LoadSavePlugin::readStyles(const QString& /*fileName*/, ScribusDoc* /*doc*/, StyleSet<ParagraphStyle> &/*docParagraphStyles*/)
{
	return false;
}

bool LoadSavePlugin::readCharStyles(const QString& /*fileName*/, ScribusDoc* /*doc*/, StyleSet<CharStyle> &/*docCharStyles*/)
{
	return false;
}

bool LoadSavePlugin::readLineStyles(const QString& /*fileName*/, QMap<QString,multiLine>* /*Sty*/)
{
	return false;
}

bool LoadSavePlugin::readColors(const QString& /*fileName*/, ColorList & /*colors*/)
{
	return false;
}

bool LoadSavePlugin::readPageCount(const QString& /*fileName*/, int* /*num1*/, int* /*num2*/, QStringList & /*masterPageNames*/)
{
	return false;
}

bool FileFormat::loadFile(const QString & fileName, int flags, int index) const
{
	return (plug && load) ? plug->loadFile(fileName, *this, flags, index) : false;
}

bool FileFormat::saveFile(const QString & fileName) const
{
	return (plug && save) ? plug->saveFile(fileName, *this) : false;
}

void FileFormat::setupTargets(ScribusDoc *targetDoc, ScribusView* targetView, ScribusMainWindow* targetMW, Q3ProgressBar* targetMWPRogressBar, SCFonts* targetAvailableFonts) const
{
	if (plug)
		plug->setupTargets(targetDoc, targetView, targetMW, targetMWPRogressBar, targetAvailableFonts);
}

void FileFormat::getReplacedFontData(bool & getNewReplacement, QMap<QString,QString> &getReplacedFonts, Q3ValueList<ScFace> &getDummyScFaces) const
{
	if (plug)
		plug->getReplacedFontData(getNewReplacement, getReplacedFonts, getDummyScFaces);
}

bool FileFormat::loadPage(const QString & fileName, int pageNumber, bool Mpage, QString renamedPageName) const
{
	return (plug && load) ? plug->loadPage(fileName, pageNumber, Mpage, renamedPageName) : false;
}

bool FileFormat::readStyles(const QString& fileName, ScribusDoc* doc, StyleSet<ParagraphStyle> &docParagraphStyles) const
{
	return (plug && load) ? plug->readStyles(fileName, doc, docParagraphStyles) : false;
}

bool FileFormat::readCharStyles(const QString& fileName, ScribusDoc* doc, StyleSet<CharStyle> &docCharStyles) const
{
	return (plug && load) ? plug->readCharStyles(fileName, doc, docCharStyles) : false;
}

bool FileFormat::readLineStyles(const QString& fileName, QMap<QString,multiLine> *Sty) const
{
	return (plug && load) ? plug->readLineStyles(fileName, Sty) : false;
}

bool FileFormat::readColors(const QString& fileName, ColorList & colors) const
{
	return (plug && load) ? plug->readColors(fileName, colors) : false;
}

bool FileFormat::readPageCount(const QString& fileName, int *num1, int *num2, QStringList & masterPageNames) const
{
	return (plug && load) ? plug->readPageCount(fileName, num1, num2, masterPageNames) : false;
}

