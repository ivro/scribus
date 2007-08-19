/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef _UTIL_H
#define _UTIL_H

#include <vector>

#include <QByteArray>
#include <QColor>
#include <QDir>
#include <QList>
#include <QPainterPath>
#include <QPixmap>
#include <QString>
#include <QStringList>
#include <QTextStream>

#include "pagestructs.h"
#include "style.h"
#include "styles/charstyle.h"
#include "styles/paragraphstyle.h"
#include "scribusapi.h"

class ScribusDoc;
class ParagraphStyle;
class QDomElement;
class QWidget;
class ScribusView;
struct CopyPasteBuffer;
class PageItem;
// class Foi;

/*! \brief Compare double values by pre-multiplying by 10000 and converting to long if possible.
If premultiplication does not allow to store result in a long value, perform a standard comparison.
*/
bool SCRIBUS_API compareDouble(double a, double b);

/*! \brief Returns a sorted list of QStrings - sorted by locale specific rules!
Uses compareQStrings() as rule. There is STL used!
\author Petr Vanek
\param aList unsorted string list
\retval QStringList sorted string list
 */
QStringList SCRIBUS_API sortQStringList(QStringList aList);
void SCRIBUS_API ReOrderText(ScribusDoc *currentDoc, ScribusView *view);
void SCRIBUS_API WordAndPara(PageItem *currItem, int *w, int *p, int *c, int *wN, int *pN, int *cN);
bool SCRIBUS_API overwrite(QWidget *parent, QString filename);
QByteArray SCRIBUS_API ComputeMD5Sum(QByteArray *in);
QString SCRIBUS_API Path2Relative(QString Path, const QString& baseDir = QDir::currentPath());
QString SCRIBUS_API Relative2Path(QString File, const QString& baseDir = QDir::currentPath());
char SCRIBUS_API *toHex( uchar u );
QString SCRIBUS_API String2Hex(QString *in, bool lang = true);
QString SCRIBUS_API CompressStr(QString *in);
QByteArray SCRIBUS_API CompressArray(QByteArray *in);
//! \brief WARNING: loadText is INCORRECT - use loadRawText instead!
bool SCRIBUS_API loadText(QString nam, QString *Buffer);
/*! \brief Replacement version of loadText that returns a QCString as an out parameter.
The QCString is filled with the contents of the specified file. The return
byte string is of unknown encoding; the caller must handle encoding issues.
There is no need to preallocate the buffer, and the new data replaces any
old contents. */
bool SCRIBUS_API loadRawText(const QString & filename, QByteArray & buf);
bool SCRIBUS_API loadRawBytes(const QString & filename, QByteArray & buf);
QString SCRIBUS_API GetAttr(QDomElement *el, QString at, QString def="0");
/**
* @brief Synchronously execute a new process, optionally saving its output
   *
   * Create a new process via QProcess and wait until finished.  Return the
   * process exit code. Exit code 1 is returned if the process could not be
   * started or terminated abnormally.
   *
   * Note that the argument list is handled exactly as documented by QProcess.
   * In particular, no shell metacharacter expansion is performed (so you can't
   * use $HOME for example, and no quoting is required or appropriate), and each
   * list entry is one argument.
   *
   * If output file paths are provided, any existing file will be truncated and
   * overwritten.
   *
   * @param args Arguments, as per QProcess documentation.
   * @param fileStdErr Path to save error output to, or "" to discard.
   * @param fileStdOut Path to save normal output to, or "" to discard.
   * @return Program exit code, or 1 on failure.
   *
*/
int SCRIBUS_API System(const QString exename, const QStringList & args, const QString fileStdErr = "", const QString fileStdOut = "");
int SCRIBUS_API copyFile(QString source, QString target);
int SCRIBUS_API moveFile(QString source, QString target);
/*!
 \fn QString checkFileExtension(const QString &currName, const QString &extension)
 \author Craig Bradney
 \brief A quick function to make sure a filename has the correct extension and add it if not
 \param currName Current filename
 \param extension File extension to ensure exists
 */
QString SCRIBUS_API checkFileExtension(const QString &, const QString &);
//! \brief On Windows, return short path name, else return longPath;
QString SCRIBUS_API getShortPathName(QString longPath);
/*! \brief Creates a common name for page exports (SVG, bitmap, EPS).
   Output format is: documentname-page01.extension
   \param pageNo number of the exported page (begins from 1)
   \param extension "svg" or e.g. "png" etc.
   \retval QString standardized filename
   \author Petr Vanek
 */
QString SCRIBUS_API getFileNameByPage(ScribusDoc* currDoc, uint pageNo, QString extension);
void SCRIBUS_API sDebug(QString message);
const QString SCRIBUS_API getStringFromSequence(DocumentSectionType type, uint position);
const QString SCRIBUS_API arabicToRoman(uint i);
const QString SCRIBUS_API numberToLetterSequence(uint i);
void SCRIBUS_API parsePagesString(QString pages, std::vector<int>* pageNs, int sourcePageCount);

#ifndef NLS_CONFORMANCE
int SCRIBUS_API findParagraphStyle(ScribusDoc* doc, const ParagraphStyle& parStyle);
int SCRIBUS_API findParagraphStyle(ScribusDoc* doc, const QString &name);
#endif

/*! \brief painting the QCheckBox as pixmap.
painting the QCheckBox as pixmap. PV for bug #2057.
There is no allowed to have more than 1 checkbox in a common QListViewItem
(QCheckListItem or how is it named...). Using a QTable is 12-13x times slower
than using a QListView. So I choose painting 2 checkboxes as 2 QPixmaps
and using a setPixmap method for their changing.

FIXME: to be removed in full Qt4 port!

\author Petr Vanek */
QPixmap SCRIBUS_API getQCheckBoxPixmap(const bool checked, const QColor background);

/*! \brief performance measurements.
It prints given message with it current timestamp.
Useful for duration holes finding.
\author Petr Vanek */
void tDebug(QString message);


QString SCRIBUS_API readLinefromDataStream(QDataStream &s);

#endif
