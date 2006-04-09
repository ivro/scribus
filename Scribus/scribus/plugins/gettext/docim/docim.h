/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef DOCIM_H
#define DOCIM_H

#include <qobject.h>
#include <qstringlist.h>

class gtWriter;
class QProcess;

extern "C" void GetText(QString filename, QString encoding, bool textOnly, gtWriter *writer);

extern "C" QString FileFormatName();

extern "C" QStringList FileExtensions();

class DocIm : public QObject
{
	Q_OBJECT
public:
	DocIm(const QString& fname, const QString& enc, bool textOnly, gtWriter *w);
	~DocIm();
	void write();
	bool isRunning();
private:
	QString filename;
	QString encoding;
	QString text;
	QString error;
	gtWriter *writer;
	QProcess *proc;
	bool failed;
	bool textOnly;
	void toUnicode();
};

#endif // DOCIM_H
