/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

//Added by Craig Bradney in July 2007
//To be used for basic format detection and checking
//One central place for storing all our extensions we support, etc

#ifndef _UTIL_FORMATs_H
#define _UTIL_FORMATs_H

#include <QByteArray>
#include <QFile>
#include <QFileInfo>
#include <QList>
#include <QMap>
#include <QString>
#include <QStringList>
#include "scribusapi.h"

bool SCRIBUS_API extensionIndicatesEPS(const QString &ext);
bool SCRIBUS_API extensionIndicatesEPSorPS(const QString &ext);
bool SCRIBUS_API extensionIndicatesJPEG(const QString &ext);
bool SCRIBUS_API extensionIndicatesPDF(const QString &ext);
bool SCRIBUS_API extensionIndicatesPSD(const QString &ext);
bool SCRIBUS_API extensionIndicatesPattern(const QString &ext);
bool SCRIBUS_API extensionIndicatesTIFF(const QString &ext);
QString SCRIBUS_API getImageType(QString filename);

class SCRIBUS_API FormatsManager
{
	public:

		enum ScImageFormatType
		{
			ALLIMAGES 		= 1|2|4|8|16|32|64|128|256|512|1024|2048|4096,
			IMAGESIMGFRAME	= 1|2|4|16|32|64|128|256|512,  // all Types suitable for Image Frames
			EPS				= 1,      // Encapsulated PostScript
			GIF				= 2,      // GIF files
			JPEG			= 4,      // JPEG
			PAT				= 8,      // Pattern files
			PDF				= 16,     // PDF Format
			PNG				= 32,     // PNG files
			PS				= 64,     // PostScript
			PSD				= 128,    // Photoshop Format
			TIFF			= 256,    // TIFF
			XPM				= 512,    // XPM files
			WMF				= 1024,   // WMF files
			SVG				= 2048,   // WMF files
			AI				= 4096,   // Adobe Illustrator files
		};

		FormatsManager();
		~FormatsManager();

	/**
		 * @brief Returns a pointer to the FormatsManager instance
		 * @return A pointer to the FormatsManager instance
	 */
		static FormatsManager* instance();
	/**
		 * @brief Deletes the FormatsManager Instance
		 * Must be called when FormatsManager is no longer needed.
	 */
		static void deleteInstance();
		void imageFormatSupported(const QString&);
		//! Returns the name of a format, eg "Encapsulated PostScript"
		QString nameOfFormat(int type);
		
		//! Returns the mimetypes of a format, eg "application/postscript"
		QStringList mimetypeOfFormat(int type);
		
		//! Returns in the form of "EPS (*.eps *.EPS *.epsf *.EPSF *.epsi *.EPSI)"
		QString extensionsForFormat(int type);
		
		//! Returns in the form of "*.eps *.epsf *.epsi" or "eps|epsf|epsi"
 		QString extensionListForFormat(int type, int listType);
		
		//! Returns in the form of "All Supported Formats (*.eps *.EPS *.epsf *.EPSF *.epsi *.EPSI);;EPS (*.eps *.EPS);;EPSI (*.epsf *.EPSF);;EPSI (*.epsi *.EPSI);;All Files (*)"
		QString fileDialogFormatList(int type);
		
	protected:
		QMap<int, QString> m_fmtNames;
		QMap<int, QStringList> m_fmtMimeTypes;
		QMap<int, QStringList> m_fmts;
		QStringList m_fmtList;
		
		QList<QByteArray> m_qtSupportedImageFormats;
		QList<QByteArray> m_supportedImageFormats;
		void updateSupportedImageFormats(QList<QByteArray>& supportedImageFormats);
		void fileTypeStrings(int type, QString& formatList, QString& formatText, QString& formatAll, bool lowerCaseOnly=false);
		
	private:
	/**
	 * @brief The only instance of FormatsManager available.
	 *
	 * FormatsManager is singleton and the instance can be queried with the method
	 * instance().
	 */
	static FormatsManager* _instance;
};

#endif
