#ifndef MYPLUGIN_H
#define MYPLUGIN_H

#include <qobject.h>
#include <qdatetime.h>
#include <qdir.h>

#include "pluginapi.h"
#include "scplugin.h"

class PLUGIN_API SaveAsTemplatePlugin : public ScActionPlugin
{
	Q_OBJECT

	public:
		// Standard plugin implementation
		SaveAsTemplatePlugin();
		virtual ~SaveAsTemplatePlugin();
		virtual bool run(QString target = QString::null);
		virtual const QString fullTrName() const;
		virtual const AboutData* getAboutData() const;
		virtual void deleteAboutData(const AboutData* about) const;
		virtual void languageChange();

		// Special features (none)
};

extern "C" PLUGIN_API int saveastemplateplugin_getPluginAPIVersion();
extern "C" PLUGIN_API ScPlugin* saveastemplateplugin_getPlugin();
extern "C" PLUGIN_API void saveastemplateplugin_freePlugin(ScPlugin* plugin);


class satdialog;


class MenuSAT : public QObject
{
	Q_OBJECT

public:
	MenuSAT() {};
    ~MenuSAT() {};

public slots:
	void RunSATPlug();
};

// static MenuSAT* satm;

class sat
{
private:
	ScribusApp* sapp;
	satdialog* dia;
	QString file;
	QString dir;
	QString tmplXmlFile;
	QString lang;
	void appendTmplXml();
	QString getTemplateTag();
	QString findTemplateXml(QString dir);
	void replaceIllegalChars(QString& s);
public:
	void createTmplXml();
	void createImages();
	sat(ScribusApp* scribusApp, satdialog* satdia, QString fileName, QString tmplDir);
	~sat();
};

static MenuSAT* Sat;

#endif
