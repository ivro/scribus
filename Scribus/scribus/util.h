/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef _UTIL_H
#define _UTIL_H

#include <vector>

#include <qstring.h>
#include <qpixmap.h>
#include <qimage.h>
#include <qstringlist.h>
#include <qwidget.h>
#include <qmap.h>
#include <qpointarray.h>
#include <qvaluelist.h>
#include <qpoint.h>
#include <qdom.h>

#include "fpoint.h"
#include "fpointarray.h"
#include "pagestructs.h"
#include "sccolor.h"
#include "scribusapi.h"

class ScribusDoc;
class ParagraphStyle;
class QDomElement;
class ScribusView;
struct CopyPasteBuffer;
class PageItem;
struct Layer;
class Foi;

QColor SCRIBUS_API SetColor(ScribusDoc *currentDoc, QString color, int shad);
void SCRIBUS_API GetItemProps(bool newVersion, QDomElement *obj, struct CopyPasteBuffer *OB);
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
FPoint SCRIBUS_API getMaxClipF(FPointArray* Clip);
FPoint SCRIBUS_API getMinClipF(FPointArray* Clip);
QString SCRIBUS_API Path2Relative(QString Path);
QByteArray SCRIBUS_API ComputeMD5Sum(QByteArray *in);
char SCRIBUS_API *toHex( uchar u );
QString SCRIBUS_API String2Hex(QString *in, bool lang = true);
QString SCRIBUS_API CompressStr(QString *in);
QByteArray SCRIBUS_API CompressArray(QByteArray *in);
void SCRIBUS_API Level2Layer(ScribusDoc *currentDoc, struct Layer *ll, int Level);
//int Layer2Level(ScribusDoc *currentDoc, int LayerNr);
void SCRIBUS_API BezierPoints(QPointArray *ar, QPoint n1, QPoint n2, QPoint n3, QPoint n4);
double SCRIBUS_API xy2Deg(double x, double y);
QPointArray SCRIBUS_API FlattenPath(FPointArray ina, QValueList<uint> &Segs);
QPointArray SCRIBUS_API RegularPolygon(double w, double h, uint c, bool star, double factor, double rota);
FPointArray SCRIBUS_API RegularPolygonF(double w, double h, uint c, bool star, double factor, double rota);
QPixmap SCRIBUS_API *getSmallPixmap(QColor rgb);
QPixmap SCRIBUS_API *getWidePixmap(QColor rgb);
/*! \brief Create a cool all-infos pixmaps for the specified color.
\param col Scribus color
\retval QPixmap image with various icons depending on the col properties.
*/
QPixmap SCRIBUS_API *getFancyPixmap(ScColor col);
/*! \brief Put toPaint pixmap into target at the x, y place.
There is handled the alpha channel/transparency too. In the beginning
is the target pixmap filled with all_transparent mask. In the case of
the painting of tiPaint into x, y place, there is this pixmap enabled
in alpha mask too.
\param toPaint a pixmap to be painted into target
\param target a base pixmap. Some kind of painter.
\param x coordinate
\param y coordinate
*/
void SCRIBUS_API paintAlert(QPixmap &toPaint, QPixmap &target, int x = 0, int y = 0, bool useMask = true);
QPixmap SCRIBUS_API loadIcon(QString nam);
uint SCRIBUS_API getDouble(QString in, bool raw);
//! \brief WARNING: loadText is INCORRECT - use loadRawText instead!
bool SCRIBUS_API loadText(QString nam, QString *Buffer);
/*! \brief Replacement version of loadText that returns a QCString as an out parameter.
The QCString is filled with the contents of the specified file. The return
byte string is of unknown encoding; the caller must handle encoding issues.
There is no need to preallocate the buffer, and the new data replaces any
old contents. */
bool SCRIBUS_API loadRawText(const QString & filename, QCString & buf);
bool SCRIBUS_API loadRawBytes(const QString & filename, QByteArray & buf);
QString SCRIBUS_API GetAttr(QDomElement *el, QString at, QString def="0");
QImage SCRIBUS_API ProofImage(QImage *Im, ScribusDoc* doc);
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
int SCRIBUS_API System(const QStringList & args, const QString fileStdErr = "", const QString fileStdOut = "");
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
inline double SCRIBUS_API square(double);
inline double SCRIBUS_API distance(double, double);
/*! \brief Constrains an angle of rotation to 45 degree intervals
   Will make code simpler and reduce interval or provide as a parameter
   \param double angle Angle in degrees
   \retval double Constrained angle
 */
double SCRIBUS_API constrainAngle(double angle);
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
\author Petr Vanek */
QPixmap SCRIBUS_API getQCheckBoxPixmap(const bool checked, const QColor background);

/*! \brief Convert a color in RGB space to HSV space (Hue, Saturation, Value).
 * \param red the red component (modified in place).
 * \param green the green component (modified in place).
 * \param blue the blue component (modified in place).
 */
unsigned char SCRIBUS_API INT_MULT ( unsigned char a, unsigned char b );
/*! \brief Convert a color in HSV space to RGB space.
 * \param hue the hue component (modified in place).
 * \param saturation the saturation component (modified in place).
 * \param value the value component (modified in place).
 */
void SCRIBUS_API RGBTOHSV ( uchar& red, uchar& green, uchar& blue );
/*! \brief Convert a color in RGB space to HLS space (Hue, Lightness, Saturation).
 * \param red the red component (modified in place).
 * \param green the green component (modified in place).
 * \param blue the blue component (modified in place).
 */
void SCRIBUS_API HSVTORGB ( uchar& hue, uchar& saturation, uchar& value );
void SCRIBUS_API RGBTOHLS ( uchar& red, uchar& green, uchar& blue );
/*! \brief Implement the HLS "double hex-cone".
 * \param n1 lightness fraction (?)
 * \param n2 saturation fraction (?)
 * \param hue hue "angle".
 * \return HLS value.
 */
int SCRIBUS_API HLSVALUE ( double n1, double n2, double hue );
/*! \brief Convert a color in HLS space to RGB space.
 * \param hue the hue component (modified in place).
 * \param lightness the lightness component (modified in place).
 * \param saturation the saturation component (modified in place).
 */
void SCRIBUS_API HLSTORGB ( uchar& hue, uchar& lightness, uchar& saturation );

/*! \brief performance measurements.
It prints given message with it current timestamp.
Useful for duration holes finding.
\author Petr Vanek */
void tDebug(QString message);

#endif
