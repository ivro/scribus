/***************************************************************************
                          main.cpp  -  description
                             -------------------
    begin                : Fre Apr  6 21:47:55 CEST 2001
    copyright            : (C) 2001 by Franz Schmid
    email                : Franz.Schmid@altmuehlnet.de
    copyright            : (C) 2004 by Alessandro Rimoldi
    email                : http://ideale.ch/contact
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include <qapplication.h>
#include <qfont.h>
#include <qstring.h>
#include <qtranslator.h>
#include <qfileinfo.h>
#include <qfile.h>
#include <qdir.h>
#include <qtextcodec.h>
#include <cstdlib>

#include <iostream>

#define SCRIBUS_LIB  PREL "/lib/scribus/"
#define SCRIBUS_PLUGIN  PREL "/lib/scribus/plugins/"
#define BASE_QM "scribus"

#include "scribus.h"

#if (_MSC_VER >= 1200)
 #include "win-config.h"
#else
 #include "config.h"
#endif

QString lang = "";
bool showSplash = true;
bool useGui = true;
QString file;

void showUsage();
int mainGui(int argc, char **argv);
QString getLang(QString lang);
void installTranslators(QApplication *app, QString lang);


int main(int argc, char *argv[])
{
    QString arg = "";

    arg = argv[1];
    if (arg == "--version") {
        std::cout << "Scribus Version " << VERSION << std::endl;
        return 0;
    } else if (arg == "--help") {
        std::cout << std::endl;
        std::cout << "Scribus, a DTP-Program" << std::endl;
        showUsage();
        return 0;
    }

    for(int i = 1; i < argc; i++) {
        arg = argv[i];
        if ((arg == "--lang") && (++i < argc)) {
            lang = argv[i];
        } else if (arg == "--no-splash") {
            showSplash = false;
        } else if (arg == "--no-gui") {
            useGui = false;
        } else {
            file = QFile::decodeName(argv[i]);
            if (!QFileInfo(file).exists()) {
                std::cout << std::endl;
                if (file.left(2) == "--") {
                    std::cout << "Invalid argument: " << file << std::endl;
                } else {
                    std::cout << "File " << file << "does not exist, aborting." << std::endl;
                }
                showUsage();
                return 0;
            }
        }
    }

    if (useGui)
        return mainGui(argc, argv);
}

/*!
 \fn void showUsage()
 \author Franz Schmid
 \author Alessandro Rimoldi
 \date Mon Feb  9 14:07:46 CET 2004
 \brief If no argument specified the lang, returns the one in the locales
 \param lang QString a two letter string describing the lang environement
 \retval QString A string describing the language environement
 */
void showUsage()
{
    std::cout << std::endl;
    std::cout << "Usage: scribus [option ... ] [file]" << std::endl;
    std::cout << "Options:" << std::endl;
    std::cout << "--lang xx    Uses xx as shortcut for a language" << std::endl;
    std::cout << "--help       Print help (this message) and exit" << std::endl;
    std::cout << "--version    Output version information and exit" << std::endl;
    std::cout << std::endl;
}

/*!
 \fn int mainGui(int argc, char **argv)
 \author Franz Schmid
 \author Alessandro Rimoldi
 \date Mon Feb  9 14:07:46 CET 2004
 \brief Launches the Gui
 \param int Number of arguments passed to Scribus
 \param char *argv list of the arguments passed to Scribus
 \retval int Error code from the execution of Scribus
 */
int mainGui(int argc, char **argv)
{
    QApplication app(argc, argv);

    lang = getLang(QString(lang));

    if (lang != "")
        installTranslators(&app, lang);

    app.processEvents();

    ScribusApp *scribus = new ScribusApp();
    scribus->initGui();
    if (scribus->NoFonts)
        exit(EXIT_FAILURE);
    app.setMainWidget(scribus);
    app.connect(&app, SIGNAL(lastWindowClosed()), &app, SLOT(quit()));

    scribus->show();
    scribus->ShowSubs();
    if (file != "")
        scribus->LadeDoc(file);

    return app.exec();
}

/*!
 \fn void installTranslators(QApplication *app, QString lang)
 \author Franz Schmid
 \author Alessandro Rimoldi
 \date Mon Feb  9 14:07:46 CET 2004
 \brief If the lang argument is empty, returns the value in the locales
 
 The lang is always a two character code, except for "en_GB" where
 the whole string is returned. For all the other locales starting
 with "en", no locale is returned.

 \param lang QString a two letter string describing the lang environement
 \retval QString A string describing the language environement
 */
QString getLang(QString lang)
{
    if (lang == "") {
        QString locale = QString(QTextCodec::locale());
        if (locale.left(5) == "en_GB") {
            lang = "en_GB";
        } else if (locale.left(2) != "en") {
            lang = locale.left(2);
        }
    } else if (lang.left(2) == "en") {
        lang = "";
    } else  {
        lang = lang.left(2);
    }
    return lang;
}

/*!
 \fn void installTranslators(QApplication *app, QString lang)
 \author Franz Schmid
 \author Alessandro Rimoldi
 \date Mon Feb  9 14:07:46 CET 2004
 \brief Loads the translations for Scribus and for the Plugins
 \param app QApplication pointer to the application object
 \param lang QString a two letter string describing the lang environement
 \retval void
 */
void installTranslators(QApplication *app, QString lang)
{
    QTranslator *trans = new QTranslator(0);

    QString path = SCRIBUS_LIB;
    path += BASE_QM;

    trans->load(QString(path + '.' + lang), ".");
    app->installTranslator(trans);

    /* ! the en_GB localisations cannot be loaded... ! */
    path = SCRIBUS_PLUGIN;
    QDir dir(path , "*.*", QDir::Name, QDir::Files | QDir::NoSymLinks);
    if (dir.exists() && (dir.count() != 0)) {
        for (uint i = 0; i < dir.count(); ++i) {
            QFileInfo file(path + dir[i]);
            if ((file.extension(false).lower() == "qm")
            && (file.extension(true).lower().left(2) == lang)) {
                trans = new QTranslator(0);
                trans->load(QString(path + dir[i]), ".");
                app->installTranslator(trans);
            }

        }
    }
}
