#include <iostream>

#include <qdir.h>
#include <qfileinfo.h>
#include <qmap.h>
#include <qobject.h>
#include <qstringlist.h> 

#include "config.h"
#include "langmgr.h"

#define SCRIBUS_LIB  PREL "/lib/scribus/"

void LanguageManager::init()
{
	generateLangList();
	generateInstalledLangList();
}

void LanguageManager::generateLangList()
{
	langList.insert("bg", QObject::tr( "Bulgarian" ));
	langList.insert("br", QObject::tr( "Brazilian" ));
	langList.insert("ca", QObject::tr( "Catalan" ));
	langList.insert("cs", QObject::tr( "Czech" ));
	langList.insert("cs_CZ", QObject::tr( "Czech" ));
	langList.insert("cy", QObject::tr( "Welsh" ));
	langList.insert("da", QObject::tr( "Danish" ));
	langList.insert("da_DK", QObject::tr( "Danish" ));
	langList.insert("de", QObject::tr( "German" ));
	langList.insert("en", QObject::tr( "English" ));
	langList.insert("en_GB", QObject::tr( "English (British)" ));
	langList.insert("eo", QObject::tr( "Esperanto" ));
	langList.insert("es", QObject::tr( "Spanish" ));
	langList.insert("es_LA", QObject::tr( "Latin Spanish" ));
	langList.insert("eu", QObject::tr( "Basque" ));
	langList.insert("fi", QObject::tr( "Finnish" ));
	langList.insert("fr", QObject::tr( "French" ));
	langList.insert("galician", QObject::tr( "Galician" ));
	langList.insert("gl", QObject::tr( "Galician" ));
	langList.insert("hu", QObject::tr( "Hungarian" ));
	langList.insert("id", QObject::tr( "Indonesian" ));
	langList.insert("it", QObject::tr( "Italian" ));
	langList.insert("ko", QObject::tr( "Korean" ));
	langList.insert("lt", QObject::tr( "Lithuanian" ));
	langList.insert("lt_LT", QObject::tr( "Lithuanian" ));
	langList.insert("nb", QObject::tr( "Norwegian (Bokmaal)" ));
	langList.insert("nb_NO", QObject::tr( "Norwegian (Bokmaal)" ));
	langList.insert("nl", QObject::tr( "Dutch" ));
	langList.insert("nn", QObject::tr( "Norwegian (Nnyorsk)" ));
	langList.insert("nn_NO", QObject::tr( "Norwegian (Nnyorsk)" ));
	langList.insert("no", QObject::tr( "Norwegian" ));
	langList.insert("no_NO", QObject::tr( "Norwegian" ));
	langList.insert("pl", QObject::tr( "Polish" ));
	langList.insert("pl_PL", QObject::tr( "Polish" ));
	langList.insert("ru", QObject::tr( "Russian" ));
	langList.insert("se", QObject::tr( "Swedish" ));
	langList.insert("si", QObject::tr( "Spanish" ));
	langList.insert("sk", QObject::tr( "Slovak" ));
	langList.insert("sl", QObject::tr( "Slovenian" ));
	langList.insert("sr", QObject::tr( "Serbian" ));
	langList.insert("tr", QObject::tr( "Turkish" ));
	langList.insert("tr_TR", QObject::tr( "Turkish" ));
	langList.insert("uk", QObject::tr( "Ukranian" ));
}

void LanguageManager::generateInstalledLangList()
{
    QString path = SCRIBUS_LIB;
    QString langAbbrev;
    QMap<QString, QString>::Iterator it;

    QDir dir(path , "*.*", QDir::Name, QDir::Files | QDir::NoSymLinks);
    if (dir.exists() && (dir.count() != 0))
        for (uint i = 0; i < dir.count(); ++i) {
            QFileInfo file(path + dir[i]);
            if (file.extension(false).lower() == "qm") {
                langAbbrev = file.extension().remove(".qm");
                if ((it=langList.find(langAbbrev))!=langList.end())
						installedLangList.insert(it.key(), it.data());
            }
        }
}

const QString LanguageManager::getLangFromAbbrev(QString langAbbrev)
{
	QMap<QString, QString>::Iterator it;
	if ((it=langList.find(langAbbrev))!=langList.end())
		return it.data();
	else
		return NULL;	
}

const QString LanguageManager::getAbbrevFromLang(QString lang)
{
	QMap<QString, QString>::Iterator it;
	for (it=langList.begin();it!=langList.end();++it)
		if (it.data()==lang)
			return it.key();
	return NULL;	
}

void LanguageManager::fillInstalledStringList(QStringList *stringListToFill, bool addDefaults) 
{
	if (stringListToFill)
	{
		QMap<QString, QString>::Iterator it;

		if (addDefaults) 
		{
			stringListToFill->append("");
			stringListToFill->append( QObject::tr( "English" ));
		}

		for (it=installedLangList.begin();it!=installedLangList.end();++it)
			stringListToFill->append(it.data());
	}
}

void LanguageManager::printInstalledList()
{
	QMap<QString, QString>::Iterator it;

	for (it=installedLangList.begin();it!=installedLangList.end();++it)
		std::cout << it.key().leftJustify(6) << ": " << it.data() << std::endl;
}
