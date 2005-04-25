/***************************************************************************
                          scribus.cpp  -  description
                             -------------------
    begin                : Fre Apr  6 21:09:31 CEST 2001
    copyright            : (C) 2001 by Franz Schmid
    email                : Franz.Schmid@altmuehlnet.de
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include <qaccel.h>
#include <qapplication.h>
#include <qeventloop.h>
#include <qcolordialog.h>
#include <qcolor.h>
#include <qiconset.h>
#include <qtextstream.h>
#include <qstylefactory.h>
#include <qregexp.h>
#include <qtextcodec.h>
#include <qcursor.h>
#include <qvbox.h>
#include <qpixmap.h>
#include <qkeysequence.h>

#include <cstdio>
#include <cstdlib>
#include <cmath>
#include <dlfcn.h>
#include <unistd.h>
#include <iostream>
#include <signal.h>
#include <string>


#include "scribus.h"
#include "scribus.moc"
#include "newfile.h"
#include "page.h"
#include "query.h"
#include "mdup.h"
#include "docinfo.h"
#include "reformdoc.h"
#include "serializer.h"
#include "align.h"
#include "fmitem.h"
#include "fontprefs.h"
#include "prefs.h"
#include "prefstable.h"
#include "pdfopts.h"
#include "inspage.h"
#include "delpages.h"
#include "movepage.h"
#include "helpbrowser.h"
#include "scribusXml.h"
#include "about.h"
#include "libpostscript/pslib.h"
#include "druck.h"
#include "editformats.h"
#include "muster.h"
#include "applytemplatedialog.h"
#include "picstatus.h"
#include "customfdialog.h"
#include "cmsprefs.h"
#include "annot.h"
#include "annota.h"
#include "javadocs.h"
#include "colorm.h"
#include "mpalette.h"
#include "bookpalette.h"
#include "seiten.h"
#include "layers.h"
#include "frameedit.h"
#include "splash.h"
#include "measurements.h"
#include "gtgettext.h"
#include "fileloader.h"
#include "arrowchooser.h"
#include "tabtypography.h"
#include "tabguides.h"
#include "tabtools.h"
#include "undogui.h"
#include "filewatcher.h"
#include "charselect.h"
#include "checkDocument.h"
#include "tabcheckdoc.h"
#include "tabpdfoptions.h"
#include "docitemattrprefs.h"
#include "pageitemattributes.h"
#include "tocindexprefs.h"
#ifdef _MSC_VER
 #if (_MSC_VER >= 1200)
  #include "win-config.h"
 #endif
#else
 #include "config.h"
#endif

#include "fpoint.h"
#include "fpointarray.h"
#include "hysettings.h"
#include "guidemanager.h"
#include "keymanager.h"
#include "mergedoc.h"
#include "lineformats.h"
#include "story.h"
#include "autoform.h"
#include "tabmanager.h"
#include "search.h"
#include "fontcombo.h"
#include "prefsfile.h"
#include "undomanager.h"
#include "polygonwidget.h"
#include "werktoolb.h"
#include "units.h"
#include "hruler.h"
#include "vruler.h"
#include "scraction.h"
#include "menumanager.h"
#include "undostate.h"
#include "tree.h"
#include "scrap.h"
#include "pluginmanager.h"
#include "scpaths.h"
#include "pdfoptions.h"
#include "actionmanager.h"

//CB TODO include for toc testing for now
#include "gtwriter.h"
//CB

extern QPixmap loadIcon(QString nam);
extern bool overwrite(QWidget *parent, QString filename);
extern void CopyPageItem(struct CopyPasteBuffer *Buffer, PageItem *currItem);
extern void ReOrderText(ScribusDoc *doc, ScribusView *view);
extern int copyFile(QString source, QString target);
extern int moveFile(QString source, QString target);

using namespace std;

#ifdef HAVE_CMS
cmsHPROFILE CMSoutputProf;
cmsHPROFILE CMSprinterProf;
cmsHTRANSFORM stdTransG;
cmsHTRANSFORM stdProofG;
cmsHTRANSFORM stdTransImgG;
cmsHTRANSFORM stdProofImgG;
cmsHTRANSFORM stdTransCMYKG;
cmsHTRANSFORM stdProofCMYKG;
cmsHTRANSFORM stdTransRGBG;
bool BlackPoint;
bool SoftProofing;
bool Gamut;
bool CMSuse;
int IntentMonitor;
int IntentPrinter;
#endif
bool CMSavail;
ProfilesL InputProfiles;
QString DocDir;
ScribusApp* ScApp;
PrefsFile* prefsFile;

ScribusApp::ScribusApp()
{} // ScribusApp::ScribusApp()

/*
 * retval 0 - ok, 1 - no fonts, ...
 */
int ScribusApp::initScribus(bool showSplash, const QString newGuiLanguage)
{
	int retVal=0;
	ExternalApp = 0;
	guiLanguage = newGuiLanguage;
	initSplash(showSplash);
	setUsesBigPixmaps(true);
	ScApp = this;
	CurrStED = NULL;
	setCaption( tr("Scribus " VERSION));
	setKeyCompression(false);
	setIcon(loadIcon("AppIcon.png"));
	scrActionGroups.clear();
	scrActionGroups.setAutoDelete(true);
	scrActions.clear();
	scrRecentFileActions.clear();
	scrWindowsActions.clear();
	scrMenuMgr = new MenuManager(this->menuBar());

	PrefsPfad = getPreferencesLocation();
	bool importingFrom12=convert12Preferences(PrefsPfad);
	prefsFile = new PrefsFile(QDir::convertSeparators(PrefsPfad + "/prefs13.xml"));

	undoManager = UndoManager::instance();
	objectSpecificUndo = false;
	pluginManager = new PluginManager();
	initDefaultValues();
	
	actionManager = new ActionManager(this, "actionManager");
	initMenuBar();
	initStatusBar();
	initToolBars();
	qApp->processEvents();

	BuFromApp = false;

	initFonts();

	if (NoFonts)
		retVal=1;
	else
	{
		buildFontMenu();
		initDefaultPrefs();
		initArrowStyles();
		resize(610, 600);
		QVBox* vb = new QVBox( this );
		vb->setFrameStyle( QFrame::StyledPanel | QFrame::Sunken );
		wsp = new QWorkspace( vb );
		setCentralWidget( vb );
		connect(wsp, SIGNAL(windowActivated(QWidget *)), this, SLOT(newActWin(QWidget *)));

		initPalettes();

		fileWatcher = new FileWatcher(this);

		if (splashScreen != NULL)
			splashScreen->setStatus( tr("Initializing Plugins"));
		qApp->processEvents();
		pluginManager->initPlugs();

		initKeyboardShortcuts();

		if (splashScreen != NULL)
			splashScreen->setStatus( tr("Reading Preferences"));
		qApp->processEvents();
		//<<CB TODO Reset keyboard shortcuts of all 1.3 users as too many 
		//     have conflicts if they dont nuke their settings. muhahahhaha
		importingFrom12=true;
		//>>CB
		ReadPrefs(importingFrom12);

		HaveGS = system(Prefs.gs_exe+" -h > /dev/null 2>&1");
		HavePngAlpha = system(Prefs.gs_exe+" -sDEVICE=pngalpha -c quit > /dev/null 2>&1");
		DocDir = Prefs.DocDir;

		if (splashScreen != NULL)
			splashScreen->setStatus( tr("Getting ICC Profiles"));
		CMSavail = false;
		GetCMSProfiles();
		initCMS();

		if (splashScreen != NULL)
			splashScreen->setStatus( tr("Init Hyphenator"));
		qApp->processEvents();
		initHyphenator();

		if (splashScreen != NULL)
			splashScreen->setStatus( tr("Reading Scrapbook"));
		initScrapbook();

		if (splashScreen != NULL)
			splashScreen->setStatus( tr("Setting up Shortcuts"));
		qApp->processEvents();
		SetShortCut();

		emit prefsChanged();

		connect(fileWatcher, SIGNAL(fileDeleted(QString )), this, SLOT(removeRecent(QString)));
		connect(this, SIGNAL(TextIFont(QString)), this, SLOT(AdjustFontMenu(QString)));
		connect(this, SIGNAL(TextISize(int)), this, SLOT(setFSizeMenu(int)));
		connect(this, SIGNAL(TextISize(int)), propertiesPalette, SLOT(setSize(int)));
		connect(this, SIGNAL(TextUSval(double)), propertiesPalette, SLOT(setExtra(double)));
		connect(this, SIGNAL(TextStil(int)), propertiesPalette, SLOT(setStil(int)));
		connect(this, SIGNAL(TextScale(int)), propertiesPalette, SLOT(setTScale(int)));
		connect(this, SIGNAL(TextFarben(QString, QString, int, int)), propertiesPalette, SLOT(setActFarben(QString, QString, int, int)));

		initCrashHandler();
	}
	closeSplash();
	return retVal;
}

void ScribusApp::initSplash(bool showSplash)
{
	if (showSplash)
	{
		splashScreen = new SplashScreen();
		splashScreen->setStatus(QObject::tr("Initializing..."));
	}
	else
		splashScreen = NULL;
}

void ScribusApp::closeSplash()
{
	if (splashScreen!=NULL)
	{
		splashScreen->close();
		delete splashScreen;
		splashScreen = NULL;
	}
}

void ScribusApp::initToolBars()
{
	WerkTools2 = new QToolBar( tr("File"), this);
	scrActions["fileNew"]->addTo(WerkTools2);
	scrActions["fileOpen"]->addTo(WerkTools2);
	scrMenuMgr->addMenuToWidgetOfAction("FileOpenRecent", scrActions["fileOpen"]);
	scrActions["fileSave"]->addTo(WerkTools2);
	scrActions["fileClose"]->addTo(WerkTools2);
	scrActions["filePrint"]->addTo(WerkTools2);
	scrActions["toolsPreflightVerifier"]->addTo(WerkTools2);
	scrActions["fileExportAsPDF"]->addTo(WerkTools2);

	editToolBar = new QToolBar(tr("Edit"), this);
	UndoWidget* uWidget = new UndoWidget(editToolBar, "uWidget");
	undoManager->registerGui(uWidget);

	WerkTools = new WerkToolB(this);
	setDockEnabled(WerkTools, DockLeft, false);
	setDockEnabled(WerkTools, DockRight, false);
	WerkTools->Sichtbar = true;
	WerkTools->setEnabled(false);
	WerkToolsP = new WerkToolBP(this);
	setDockEnabled(WerkToolsP, DockLeft, false);
	setDockEnabled(WerkToolsP, DockRight, false);
	WerkToolsP->setEnabled(false);
	WerkToolsP->Sichtbar = true;

	connect(WerkTools, SIGNAL(Schliessen()), this, SLOT(ToggleTools()));
	connect(WerkToolsP, SIGNAL(NewMode(int)), this, SLOT(setAppMode(int)));
	connect(WerkToolsP, SIGNAL(Schliessen()), this, SLOT(TogglePDFTools()));
}

void ScribusApp::initFonts()
{
	if (splashScreen!=NULL) {
		splashScreen->setStatus( tr("Searching for Fonts"));
		qApp->processEvents();
	}
	NoFonts=GetAllFonts();
	if (NoFonts)
	{
		if (splashScreen!=NULL)
			splashScreen->close(); // 10/10/2004 pv fix #1200
		QString mess = tr("There are no fonts found on your system.");
		mess += "\n" + tr("Exiting now.");
		QMessageBox::critical(this, tr("Fatal Error"), mess, 1, 0, 0);
	}
	else
	if (splashScreen!=NULL)
	{
		splashScreen->setStatus( tr("Font System Initialized"));
		qApp->processEvents();
	}
}

void ScribusApp::initDefaultPrefs()
{
	/** Default font and size **/
	SCFontsIterator it(Prefs.AvailFonts);
	Prefs.toolSettings.defFont = it.currentKey();
	Prefs.toolSettings.defSize = 120;
	Prefs.AppFontSize = qApp->font().pointSize();

	/** Default colours **/
	Prefs.DColors.clear();
	QString pfadC = ScPaths::instance().libDir();
	QString pfadC2 = pfadC + "rgbscribus.txt";
	QFile fiC(pfadC2);
	if (!fiC.exists())
	{
		Prefs.DColors.insert("White", CMYKColor(0, 0, 0, 0));
		Prefs.DColors.insert("Black", CMYKColor(0, 0, 0, 255));
		Prefs.DColors.insert("Blue", CMYKColor(255, 255, 0, 0));
		Prefs.DColors.insert("Cyan", CMYKColor(255, 0, 0, 0));
		Prefs.DColors.insert("Green", CMYKColor(255, 0, 255, 0));
		Prefs.DColors.insert("Red", CMYKColor(0, 255, 255, 0));
		Prefs.DColors.insert("Yellow", CMYKColor(0, 0, 255, 0));
		Prefs.DColors.insert("Magenta", CMYKColor(0, 255, 0, 0));
		Prefs.DColorSet = "Scribus-Small";
	}
	else
	{
		if (fiC.open(IO_ReadOnly))
		{
			QString ColorEn, Cname;
			int Rval, Gval, Bval;
			QTextStream tsC(&fiC);
			ColorEn = tsC.readLine();
			while (!tsC.atEnd())
			{
				ColorEn = tsC.readLine();
				QTextStream CoE(&ColorEn, IO_ReadOnly);
				CoE >> Rval;
				CoE >> Gval;
				CoE >> Bval;
				CoE >> Cname;
				CMYKColor tmp;
				tmp.setColorRGB(Rval, Gval, Bval);
				Prefs.DColors.insert(Cname, tmp);
			}
			fiC.close();
		}
		Prefs.DColorSet = "X11 RGB-Set";
	}

	Prefs.Wheelval = 40;
	Prefs.guidesSettings.marginsShown = true;
	Prefs.guidesSettings.framesShown = true;
	Prefs.guidesSettings.gridShown = false;
	Prefs.guidesSettings.guidesShown = false;
	Prefs.guidesSettings.baseShown = false;
	Prefs.guidesSettings.showPic = true;
	Prefs.guidesSettings.linkShown = false;
	Prefs.guidesSettings.grabRad = 4;
	Prefs.guidesSettings.guideRad = 10;
	Prefs.guidesSettings.minorGrid = 20;
	Prefs.guidesSettings.majorGrid = 100;
	Prefs.guidesSettings.minorColor = QColor(green);
	Prefs.guidesSettings.majorColor = QColor(green);
	Prefs.guidesSettings.margColor = QColor(blue);
	Prefs.guidesSettings.guideColor = QColor(darkBlue);
	Prefs.guidesSettings.baseColor = QColor(lightGray);
	Prefs.typographicSetttings.valueSuperScript = 33;
	Prefs.typographicSetttings.scalingSuperScript = 100;
	Prefs.typographicSetttings.valueSubScript = 33;
	Prefs.typographicSetttings.scalingSubScript = 100;
	Prefs.typographicSetttings.valueSmallCaps = 75;
	Prefs.typographicSetttings.autoLineSpacing = 20;
	Prefs.typographicSetttings.valueBaseGrid = 14.4;
	Prefs.typographicSetttings.offsetBaseGrid = 0.0;
	Prefs.GUI = "Default";
	Prefs.toolSettings.dPen = "Black";
	Prefs.toolSettings.dBrush = "Black";
	Prefs.toolSettings.dShade = 100;
	Prefs.toolSettings.dShade2 = 100;
	Prefs.toolSettings.dLineArt = SolidLine;
	Prefs.toolSettings.dWidth = 1;
	Prefs.toolSettings.dPenLine = "Black";
	Prefs.toolSettings.dPenText = "Black";
	Prefs.toolSettings.dStrokeText = "Black";
	Prefs.DpapColor = QColor(white);
	Prefs.toolSettings.dCols = 1;
	Prefs.toolSettings.dGap = 0.0;
	Prefs.toolSettings.dShadeLine = 100;
	Prefs.toolSettings.dLstyleLine = SolidLine;
	Prefs.toolSettings.dWidthLine = 1;
	Prefs.toolSettings.dStartArrow = 0;
	Prefs.toolSettings.dEndArrow = 0;
	Prefs.toolSettings.magMin = 10;
	Prefs.toolSettings.magMax = 3200;
	Prefs.toolSettings.magStep = 25;
	Prefs.toolSettings.dBrushPict = "White";
	Prefs.toolSettings.shadePict = 100;
	Prefs.toolSettings.scaleX = 1;
	Prefs.toolSettings.scaleY = 1;
	Prefs.guidesSettings.before = true;
	Prefs.docUnitIndex = 0;
	Prefs.toolSettings.polyC = 4;
	Prefs.toolSettings.polyF = 0.5;
	Prefs.toolSettings.polyS = false;
	Prefs.toolSettings.polyFd = 0;
	Prefs.toolSettings.polyR = 0;
	Prefs.mainToolBarSettings.visible = true;
	Prefs.pdfToolBarSettings.visible = true;
	Prefs.PSize = 40;
	Prefs.SaveAtQ = true;
	Prefs.ClipMargin = true;
	Prefs.GCRMode = true;
	Prefs.RecentDocs.clear();
	Prefs.RecentDCount = 5;
	Prefs.marginColored = false;
	Prefs.pageSize = "A4";
	Prefs.pageOrientation = 0;
	Prefs.PageWidth = 595;
	Prefs.PageHeight = 842;
	Prefs.RandOben = 40;
	Prefs.RandUnten = 40;
	Prefs.RandLinks = 40;
	Prefs.RandRechts = 40;
	Prefs.FacingPages = false;
	Prefs.LeftPageFirst = false;
	Prefs.toolSettings.scaleType = true;
	Prefs.toolSettings.aspectRatio = true;
	Prefs.MinWordLen = 3;
	Prefs.HyCount = 2;
	Prefs.Language = "";
	Prefs.Automatic = true;
	Prefs.AutoCheck = false;
	Prefs.AutoSave = false;
	Prefs.AutoSaveTime = 600000;
	Prefs.DisScale = 1.0;
	Prefs.DocDir = QDir::homeDirPath();
	Prefs.ProfileDir = "";
	Prefs.ScriptDir = "";
	Prefs.TemplateDir = "";
	Prefs.CustomColorSets.clear();
	Prefs.PrPr_Mode = false;
	Prefs.Gcr_Mode = true;
	Prefs.PrPr_AlphaText = false;
	Prefs.PrPr_AlphaGraphics = false;
	Prefs.PrPr_Transparency = false;
	Prefs.PrPr_C = true;
	Prefs.PrPr_M = true;
	Prefs.PrPr_Y = true;
	Prefs.PrPr_K = true;
	Prefs.gimp_exe = "gimp";
	Prefs.gs_AntiAliasGraphics = true;
	Prefs.gs_AntiAliasText = true;
	Prefs.gs_exe = "gs";
	Prefs.STEcolor = QColor(white);
	Prefs.STEfont = font().toString();
	Prefs.DCMSset.DefaultMonitorProfile = "";
	Prefs.DCMSset.DefaultPrinterProfile = "";
	Prefs.DCMSset.DefaultInputProfile = "";
	Prefs.DCMSset.DefaultInputProfile2 = "";
	Prefs.DCMSset.CMSinUse = false;
	Prefs.DCMSset.SoftProofOn = false;
	Prefs.DCMSset.GamutCheck = false;
	Prefs.DCMSset.BlackPoint = true;
	Prefs.DCMSset.DefaultIntentMonitor = 1;
	Prefs.DCMSset.DefaultIntentMonitor2 = 1;
	Prefs.DCMSset.DefaultIntentPrinter = 0;
	Prefs.GFontSub.clear();
	Prefs.ScratchLeft = 100;
	Prefs.ScratchRight = 100;
	Prefs.ScratchTop = 20;
	Prefs.ScratchBottom = 20;
	Prefs.askBeforeSubstituite = true;
	struct checkerPrefs checkerSettings;
	checkerSettings.ignoreErrors = false;
	checkerSettings.autoCheck = true;
	checkerSettings.checkGlyphs = true;
	checkerSettings.checkOrphans = true;
	checkerSettings.checkOverflow = true;
	checkerSettings.checkPictures = true;
	checkerSettings.checkResolution = true;
	checkerSettings.checkTransparency = true;
	checkerSettings.checkAnnotations = false;
	checkerSettings.checkRasterPDF = true;
	checkerSettings.minResolution = 72.0;
	Prefs.checkerProfiles.insert( tr("Postscript"), checkerSettings);
	Prefs.checkerProfiles.insert( tr("PDF 1.3"), checkerSettings);
	checkerSettings.checkTransparency = false;
	Prefs.checkerProfiles.insert( tr("PDF 1.4"), checkerSettings);
	checkerSettings.checkTransparency = true;
	checkerSettings.checkAnnotations = true;
	checkerSettings.minResolution = 144.0;
	Prefs.checkerProfiles.insert( tr("PDF/X-3"), checkerSettings);
	Prefs.curCheckProfile = tr("Postscript");
	Prefs.PDF_Options.Thumbnails = false;
	Prefs.PDF_Options.Articles = false;
	Prefs.PDF_Options.Compress = true;
	Prefs.PDF_Options.CompressMethod = 0;
	Prefs.PDF_Options.Quality = 0;
	Prefs.PDF_Options.RecalcPic = false;
	Prefs.PDF_Options.Bookmarks = false;
	Prefs.PDF_Options.PicRes = 300;
	Prefs.PDF_Options.Version = PDFOptions::PDFVersion_14;
	Prefs.PDF_Options.Resolution = 300;
	Prefs.PDF_Options.Binding = 0;
	Prefs.PDF_Options.EmbedList.clear();
	Prefs.PDF_Options.SubsetList.clear();
	Prefs.PDF_Options.MirrorH = false;
	Prefs.PDF_Options.MirrorV = false;
	Prefs.PDF_Options.RotateDeg = 0;
	Prefs.PDF_Options.PresentMode = false;
	Prefs.PDF_Options.Datei = "";
	Prefs.PDF_Options.PresentVals.clear();
	Prefs.PDF_Options.isGrayscale = false;
	Prefs.PDF_Options.UseRGB = true;
	Prefs.PDF_Options.UseProfiles = false;
	Prefs.PDF_Options.UseProfiles2 = false;
	Prefs.PDF_Options.SolidProf = "";
	Prefs.PDF_Options.SComp = 3;
	Prefs.PDF_Options.ImageProf = "";
	Prefs.PDF_Options.PrintProf = "";
	Prefs.PDF_Options.Info = "";
	Prefs.PDF_Options.Intent = 0;
	Prefs.PDF_Options.Intent2 = 0;
	Prefs.PDF_Options.BleedTop = 0;
	Prefs.PDF_Options.BleedLeft = 0;
	Prefs.PDF_Options.BleedRight = 0;
	Prefs.PDF_Options.BleedBottom = 0;
	Prefs.PDF_Options.EmbeddedI = false;
	Prefs.PDF_Options.Encrypt = false;
	Prefs.PDF_Options.PassOwner = "";
	Prefs.PDF_Options.PassUser = "";
	Prefs.PDF_Options.Permissions = -4;
	Prefs.PDF_Options.UseLPI = false;
	Prefs.PDF_Options.LPISettings.clear();
	
	//Attribute setup
	Prefs.defaultItemAttributes.clear();
	Prefs.defaultToCSetups.clear();
}


void ScribusApp::initDefaultValues()
{
	dirs = prefsFile->getContext("dirs");
	HaveDoc = false;
	singleClose = false;
	ScriptRunning = false;
	view = NULL;
	doc = NULL;
	Buffer2 = "";
	UniCinp = false;
	UniCinC = 0;
	UniCinS = "";
	DispX = 10;
	DispY = 10;
	DocNr = 1;
	PrinterUsed = false;
	PDef.Pname = "";
	PDef.Dname = "";
	PDef.Command = "";
	keyrep = false;
	_arrowKeyDown = false;
	ClipB = QApplication::clipboard();
	PalettesStat[0] = false;
	GuidesStat[0] = false;

	connect(ClipB, SIGNAL(dataChanged()), this, SLOT(ClipChange()));
}

void ScribusApp::initKeyboardShortcuts()
{
	for( QMap<QString, QGuardedPtr<ScrAction> >::Iterator it = scrActions.begin(); it!=scrActions.end(); ++it )
	{
		SetKeyEntry(it.key(), it.data()->cleanMenuText(), QString(it.data()->accel()),0);
		//qDebug(QString("|-\n|%1||%2||%3").arg(it.key()).arg(it.data()->cleanMenuText()).arg(QString(it.data()->accel())));
	}
}

void ScribusApp::initArrowStyles()
{
	struct ArrowDesc arrow;
	FPointArray points;
	QWMatrix arrowScaling;
	arrowScaling.scale(0.5, 0.5);
	arrow.name = "Arrow1L";
	arrow.userArrow = false;
	points.addQuadPoint(0, 0, 0, 0, 0, 0, 0, 0);
	points.addQuadPoint(-5, -5, -5, -5, -5, -5, -5, -5);
	points.addQuadPoint(12, 0, 12, 0, 12, 0, 12, 0);
	points.addQuadPoint(-5, 5, -5, 5, -5, 5, -5, 5);
	points.addQuadPoint(0, 0, 0, 0, 0, 0, 0, 0);
	arrow.points = points.copy();
	Prefs.arrowStyles.append(arrow);
	arrow.name = "Arrow1M";
	points.map(arrowScaling);
	arrow.points = points.copy();
	Prefs.arrowStyles.append(arrow);
	arrow.name = "Arrow1S";
	points.map(arrowScaling);
	arrow.points = points.copy();
	Prefs.arrowStyles.append(arrow);
	arrow.name = "SquareL";
	points.resize(0);
	points.addQuadPoint(-5, -5, -5, -5, -5, -5, -5, -5);
	points.addQuadPoint(5, -5, 5, -5, 5, -5, 5, -5);
	points.addQuadPoint(5, 5, 5, 5, 5, 5, 5, 5);
	points.addQuadPoint(-5, 5, -5, 5, -5, 5, -5, 5);
	points.addQuadPoint(-5, -5, -5, -5, -5, -5, -5, -5);
	arrow.points = points.copy();
	Prefs.arrowStyles.append(arrow);
	arrow.name = "SquareM";
	points.map(arrowScaling);
	arrow.points = points.copy();
	Prefs.arrowStyles.append(arrow);
	arrow.name = "SquareS";
	points.map(arrowScaling);
	arrow.points = points.copy();
	Prefs.arrowStyles.append(arrow);
	arrow.name = "TriangleInL";
	points.resize(0);
	points.addQuadPoint(5.77, 0, 5.77, 0, 5.77, 0, 5.77, 0);
	points.addQuadPoint(-2.88, 5, -2.88, 5, -2.88, 5, -2.88, 5);
	points.addQuadPoint(-2.88, -5, -2.88, -5, -2.88, -5, -2.88, -5);
	points.addQuadPoint(5.77, 0, 5.77, 0, 5.77, 0, 5.77, 0);
	arrow.points = points.copy();
	Prefs.arrowStyles.append(arrow);
	arrow.name = "TriangleInM";
	points.map(arrowScaling);
	arrow.points = points.copy();
	Prefs.arrowStyles.append(arrow);
	arrow.name = "TriangleInS";
	points.map(arrowScaling);
	arrow.points = points.copy();
	Prefs.arrowStyles.append(arrow);
	arrow.name = "TriangleOutL";
	points.resize(0);
	points.addQuadPoint(-5.77, 0, -5.77, 0, -5.77, 0, -5.77, 0);
	points.addQuadPoint(2.88, 5, 2.88, 5, 2.88, 5, 2.88, 5);
	points.addQuadPoint(2.88, -5, 2.88, -5, 2.88, -5, 2.88, -5);
	points.addQuadPoint(-5.77, 0, -5.77, 0, -5.77, 0, -5.77, 0);
	arrow.points = points.copy();
	Prefs.arrowStyles.append(arrow);
	arrow.name = "TriangleOutM";
	points.map(arrowScaling);
	arrow.points = points.copy();
	Prefs.arrowStyles.append(arrow);
	arrow.name = "TriangleOutS";
	points.map(arrowScaling);
	arrow.points = points.copy();
	Prefs.arrowStyles.append(arrow);
}

void ScribusApp::initPalettes()
{
	//CB TODO hide the publicly available members of some palettes
	// these must be filtered too as they take control of the palettes events
	outlinePalette = new Tree(this, this);
	connect( scrActions["toolsOutline"], SIGNAL(toggled(bool)) , outlinePalette, SLOT(setPaletteShown(bool)) );
	connect( outlinePalette, SIGNAL(paletteShown(bool)), scrActions["toolsOutline"], SLOT(setOn(bool)));
	outlinePalette->setPrefsContext("OutlinePalette");
	outlinePalette->reportDisplay->installEventFilter(this);
	propertiesPalette = new Mpalette(this, &Prefs);
	connect( scrActions["toolsProperties"], SIGNAL(toggled(bool)) , propertiesPalette, SLOT(setPaletteShown(bool)) );
	connect( propertiesPalette, SIGNAL(paletteShown(bool)), scrActions["toolsProperties"], SLOT(setOn(bool)));
	propertiesPalette->setPrefsContext("PropertiesPalette");
	propertiesPalette->Cpal->SetColors(Prefs.DColors);
	propertiesPalette->Cpal->UseTrans(true);
	propertiesPalette->Fonts->RebuildList(&Prefs, 0);
	propertiesPalette->installEventFilter(this);
	nodePalette = new NodePalette(this);
	nodePalette->setPrefsContext("NodePalette");
	nodePalette->installEventFilter(this);

	layerPalette = new LayerPalette(this);
	connect( scrActions["toolsLayers"], SIGNAL(toggled(bool)) , layerPalette, SLOT(setPaletteShown(bool)) );
	connect( layerPalette, SIGNAL(paletteShown(bool)), scrActions["toolsLayers"], SLOT(setOn(bool)));
	layerPalette->setPrefsContext("LayerPalette");
	layerPalette->installEventFilter(this);
	layerPalette->Table->installEventFilter(this);
	scrapbookPalette = new Biblio(this, &Prefs);
	connect( scrActions["toolsScrapbook"], SIGNAL(toggled(bool)) , scrapbookPalette, SLOT(setPaletteShown(bool)) );
	connect( scrapbookPalette, SIGNAL(paletteShown(bool)), scrActions["toolsScrapbook"], SLOT(setOn(bool)));
	scrapbookPalette->setPrefsContext("ScrapbookPalette");
	scrapbookPalette->installEventFilter(this);
	scrapbookPalette->BibWin->installEventFilter(this);
	pagePalette = new SeitenPal(this);
	connect( scrActions["toolsPages"], SIGNAL(toggled(bool)) , pagePalette, SLOT(setPaletteShown(bool)) );
	connect( scrActions["toolsPages"], SIGNAL(toggled(bool)) , this, SLOT(setPagePalette(bool)) );
	connect( pagePalette, SIGNAL(paletteShown(bool)), scrActions["toolsPages"], SLOT(setOn(bool)));
	pagePalette->setPrefsContext("PagePalette");
	pagePalette->installEventFilter(this);
	bookmarkPalette = new BookPalette(this);
	connect( scrActions["toolsBookmarks"], SIGNAL(toggled(bool)) , bookmarkPalette, SLOT(setPaletteShown(bool)) );
	connect( bookmarkPalette, SIGNAL(paletteShown(bool)), scrActions["toolsBookmarks"], SLOT(setOn(bool)));
	bookmarkPalette->setPrefsContext("BookmarkPalette");
	bookmarkPalette->installEventFilter(this);
	measurementPalette = new Measurements(this);
	connect( scrActions["toolsMeasurements"], SIGNAL(toggled(bool)) , measurementPalette, SLOT(setPaletteShown(bool)) );
	connect( scrActions["toolsMeasurements"], SIGNAL(toggledData(bool, int)) , this, SLOT(setAppModeByToggle(bool, int)) );
	connect( measurementPalette, SIGNAL(paletteShown(bool)), scrActions["toolsMeasurements"], SLOT(setOn(bool)));
	measurementPalette->setPrefsContext("MeasurementPalette");
	measurementPalette->installEventFilter(this);
	measurementPalette->hide();
	docCheckerPalette = new CheckDocument(this, false);
	connect( scrActions["toolsPreflightVerifier"], SIGNAL(toggled(bool)) , docCheckerPalette, SLOT(setPaletteShown(bool)) );
	connect( docCheckerPalette, SIGNAL(paletteShown(bool)), scrActions["toolsPreflightVerifier"], SLOT(setOn(bool)));
	connect( docCheckerPalette, SIGNAL(paletteShown(bool)), this, SLOT(docCheckToggle(bool)));
	docCheckerPalette->setPrefsContext("DocCheckerPalette");
	docCheckerPalette->installEventFilter(this);
	docCheckerPalette->hide();

	undoPalette = new UndoPalette(this, "undoPalette");
	undoPalette->installEventFilter(this);
	undoManager->registerGui(undoPalette);
	connect(undoPalette, SIGNAL(paletteShown(bool)), this, SLOT(setUndoPalette(bool)));
	connect(undoPalette, SIGNAL(objectMode(bool)), this, SLOT(setUndoMode(bool)));

	connect(propertiesPalette, SIGNAL(DocChanged()), this, SLOT(slotDocCh()));
	connect(propertiesPalette, SIGNAL(NewAbStyle(int)), this, SLOT(setNewAbStyle(int)));
	connect(propertiesPalette, SIGNAL(BackHome()), this, SLOT(Aktiv()));
	connect(propertiesPalette, SIGNAL(Stellung(int)), this, SLOT(setItemHoch(int)));
	connect(propertiesPalette, SIGNAL(EditCL()), this, SLOT(ToggleFrameEdit()));
	connect(propertiesPalette, SIGNAL(NewTF(QString)), this, SLOT(SetNewFont(QString)));
	connect(propertiesPalette, SIGNAL(UpdtGui(int)), this, SLOT(HaveNewSel(int)));
	connect(propertiesPalette->Cpal, SIGNAL(NewPen(QString)), this, SLOT(setPenFarbe(QString)));
	connect(propertiesPalette->Cpal, SIGNAL(NewBrush(QString)), this, SLOT(setBrushFarbe(QString)));
	connect(propertiesPalette->Cpal, SIGNAL(NewPenShade(int)), this, SLOT(setPenShade(int)));
	connect(propertiesPalette->Cpal, SIGNAL(NewBrushShade(int)), this, SLOT(setBrushShade(int)));
	connect(propertiesPalette->Cpal, SIGNAL(NewTrans(double)), this, SLOT(SetTranspar(double)));
	connect(propertiesPalette->Cpal, SIGNAL(NewTransS(double)), this, SLOT(SetTransparS(double)));
	connect(propertiesPalette->Cpal, SIGNAL(NewGradient(int)), this, SLOT(setGradFill(int)));
	connect(propertiesPalette->Cpal->gradEdit->Preview, SIGNAL(gradientChanged()), this, SLOT(updtGradFill()));
	connect(propertiesPalette->Cpal, SIGNAL(gradientChanged()), this, SLOT(updtGradFill()));
	connect(propertiesPalette->Cpal, SIGNAL(QueryItem()), this, SLOT(GetBrushPen()));
	connect(docCheckerPalette, SIGNAL(rescan()), this, SLOT(slotCheckDoc()));
	connect(docCheckerPalette, SIGNAL(selectElement(int, int)), this, SLOT(SelectFromOutl(int, int)));
	connect(docCheckerPalette, SIGNAL(selectPage(int)), this, SLOT(SelectFromOutlS(int)));
	connect(docCheckerPalette, SIGNAL(selectTemplatePage(QString)), this, SLOT(ManageTemp(QString)));
	connect(outlinePalette, SIGNAL(selectElement(int, int, bool)), this, SLOT(SelectFromOutl(int, int, bool)));
	connect(outlinePalette, SIGNAL(selectPage(int)), this, SLOT(SelectFromOutlS(int)));
	connect(outlinePalette, SIGNAL(selectTemplatePage(QString)), this, SLOT(ManageTemp(QString)));
	connect(propertiesPalette->Spal, SIGNAL(newStyle(int)), this, SLOT(setNewAbStyle(int)));
	connect(propertiesPalette, SIGNAL(EditLSt()), this, SLOT(slotEditLineStyles()));
	connect(nodePalette, SIGNAL(Schliessen()), this, SLOT(NoFrameEdit()));
	connect(layerPalette, SIGNAL(LayerActivated(int)), this, SLOT(changeLayer(int)));
	connect(layerPalette, SIGNAL(LayerRemoved(int, bool)), this, SLOT(LayerRemove(int, bool)));
	connect(layerPalette, SIGNAL(LayerChanged()), this, SLOT(showLayer()));
	connect(pagePalette, SIGNAL(EditTemp(QString)), this, SLOT(ManageTemp(QString)));
	connect(pagePalette->PageView, SIGNAL(UseTemp(QString, int)), this, SLOT(Apply_Temp(QString, int)));
	connect(pagePalette->PageView, SIGNAL(NewPage(int, QString)), this, SLOT(slotNewPageP(int, QString)));
	connect(pagePalette->Trash, SIGNAL(DelPage(int)), this, SLOT(DeletePage2(int)));
	connect(pagePalette, SIGNAL(GotoSeite(int)), this, SLOT(SelectFromOutlS(int)));
	connect(bookmarkPalette->BView, SIGNAL(MarkMoved()), this, SLOT(StoreBookmarks()));
	connect(bookmarkPalette->BView, SIGNAL(ChangeBMNr(int, int, int)), this, SLOT(ChBookmarks(int, int, int)));
	connect(bookmarkPalette->BView, SIGNAL(SelectElement(int, int)), this, SLOT(SelectFromOutl(int, int)));
}

void ScribusApp::initScrapbook()
{
	QString scrapbookFile = QDir::convertSeparators(PrefsPfad+"/scrap13.scs");
	QFileInfo scrapbookFileInfo = QFileInfo(scrapbookFile);
	if (scrapbookFileInfo.exists())
		scrapbookPalette->BibWin->ReadContents(scrapbookFile);
	scrapbookPalette->ScFilename = scrapbookFile;
	scrapbookPalette->AdjustMenu();
}

void ScribusApp::initCrashHandler()
{
	typedef void (*HandlerType)(int);
	HandlerType handler	= 0;
	handler = ScribusApp::defaultCrashHandler;
	if (!handler)
		handler = SIG_DFL;
	sigset_t mask;
	sigemptyset(&mask);
#ifdef SIGSEGV
	signal (SIGSEGV, handler);
	sigaddset(&mask, SIGSEGV);
#endif
#ifdef SIGFPE
	signal (SIGFPE, handler);
	sigaddset(&mask, SIGFPE);
#endif
#ifdef SIGILL
	signal (SIGILL, handler);
	sigaddset(&mask, SIGILL);
#endif
#ifdef SIGABRT
	signal (SIGABRT, handler);
	sigaddset(&mask, SIGABRT);
#endif
	sigprocmask(SIG_UNBLOCK, &mask, 0);
}

const QString ScribusApp::getGuiLanguage()
{
	return guiLanguage;
}

bool ScribusApp::warningVersion(QWidget *parent)
{
	bool retval = false;
	int t = QMessageBox::warning(parent, QObject::tr("Scribus Development Version"),
								 QObject::tr("You are running a development version of Scribus 1.3.x.\nThe process of saving will make files originating from versions of\nScribus of 1.2.x or lower unusable again in those versions.\nAre you sure you wish to proceed with this operation?"),
								 QObject::tr("&Cancel"), QObject::tr("&Proceed"), "", 1, 0);
	if (t == 1)
		retval = true;
	return retval;
}

/*!
 \fn QString ScribusApp::getPreferencesLocation()
 \author Craig Bradney
 \date Thu 18 Nov 2004
 \brief Get the user's preference file location. Rename any existing old preferences files
 \param None
 \retval QString Location of the user's preferences
 */

QString ScribusApp::getPreferencesLocation()
{
	QString Pff = QDir::convertSeparators(QDir::homeDirPath()+"/.scribus");
	QFileInfo Pffi = QFileInfo(Pff);
	QString PrefsPfad;
	//If we are using ~/.scribus
	if (Pffi.exists())
	{
		if (Pffi.isDir())
			PrefsPfad = Pff;
		else
			PrefsPfad = QDir::homeDirPath();
	}
	else // Move to using ~/.scribus/scribus.* from ~/.scribus.*
	{
		QDir prefsDirectory = QDir();
		prefsDirectory.mkdir(Pff);
		PrefsPfad = Pff;
		QString oldPR = QDir::convertSeparators(QDir::homeDirPath()+"/.scribus.rc");
		QFileInfo oldPi = QFileInfo(oldPR);
		if (oldPi.exists())
			moveFile(oldPR, Pff+"/scribus.rc");
		QString oldPR2 = QDir::convertSeparators(QDir::homeDirPath()+"/.scribusfont.rc");
		QFileInfo oldPi2 = QFileInfo(oldPR2);
		if (oldPi2.exists())
			moveFile(oldPR2, Pff+"/scribusfont.rc");
		QString oldPR3 = QDir::convertSeparators(QDir::homeDirPath()+"/.scribusscrap.scs");
		QFileInfo oldPi3 = QFileInfo(oldPR3);
		if (oldPi3.exists())
			moveFile(oldPR3, Pff+"/scrap.scs");
	}
	return PrefsPfad;
}

/*!
 \fn QString ScribusApp::convertToXMLPreferences(QString prefsLocation)
 \author Craig Bradney
 \date Sun 09 Jan 2005
 \brief Convert 1.2 prefs to 1.3 prefs
 \param prefsLocation Location of user preferences
 \retval None
 */
bool ScribusApp::convert12Preferences(const QString prefsLocation)
{
	//Now make copies for 1.3 use and leave the old ones alone for <1.3.0 usage
	QString oldPR[5], newPR[5];
	oldPR[0]=QDir::convertSeparators(prefsLocation+"/scribus.rc");
	oldPR[1]=QDir::convertSeparators(prefsLocation+"/scribusfont.rc");
	oldPR[2]=QDir::convertSeparators(prefsLocation+"/scrap.scs");
	oldPR[3]=QDir::convertSeparators(prefsLocation+"/prefs.xml");
	oldPR[4]=QDir::convertSeparators(prefsLocation+"/scripter.rc");
	newPR[0]=QDir::convertSeparators(prefsLocation+"/scribus13.rc");
	newPR[1]=QDir::convertSeparators(prefsLocation+"/scribusfont13.rc");
	newPR[2]=QDir::convertSeparators(prefsLocation+"/scrap13.scs");
	newPR[3]=QDir::convertSeparators(prefsLocation+"/prefs13.xml");
	newPR[4]=QDir::convertSeparators(prefsLocation+"/scripter13.rc");

	bool existsOldPR[5], existsNewPR[5];
	for (uint i=0;i<5;++i)
	{
		existsOldPR[i] =QFile::exists(oldPR[i]);
		existsNewPR[i] =QFile::exists(newPR[i]);
	}

	bool retVal=false;
	//Only check for these two as they will be autocreated if they dont exist.
	if( (existsOldPR[0] && !existsNewPR[0]) || (existsOldPR[3] && !existsNewPR[3]) )
	{
		retVal=true; // converting from 1.2 prefs
		if (splashScreen)
			splashScreen->hide();
		if ( (QMessageBox::question( this, tr("Migrate Old Scribus Settings?"),
			  tr("Scribus has detected existing Scribus 1.2 preferences files.\n"
					  "Do you want to migrate them to the new Scribus version?"),
			  QMessageBox::Yes | QMessageBox::Default, QMessageBox::No, QMessageBox::NoButton))==QMessageBox::Yes )
		{
			for (uint i=0;i<5;++i)
			{
				if (existsOldPR[i] && !existsNewPR[i])
					copyFile(oldPR[i], newPR[i]);
			}
		}
		if (splashScreen)
			splashScreen->show();
	}
	return retVal;
}

void ScribusApp::initMenuBar()
{
	QFont tmp;
	RecentDocs.clear();

	scrMenuMgr->createMenu("File", tr("&File"));
	scrMenuMgr->addMenuItem(scrActions["fileNew"], "File");
	scrMenuMgr->addMenuItem(scrActions["fileOpen"], "File");
	recentFileMenuName="FileOpenRecent";
	scrMenuMgr->createMenu(recentFileMenuName, tr("Open &Recent"), "File");
	scrMenuMgr->addMenuSeparator("File");
	scrMenuMgr->addMenuItem(scrActions["fileClose"], "File");
	scrMenuMgr->addMenuItem(scrActions["fileSave"], "File");
	scrMenuMgr->addMenuItem(scrActions["fileSaveAs"], "File");
	scrMenuMgr->addMenuItem(scrActions["fileRevert"], "File");
	scrMenuMgr->addMenuItem(scrActions["fileCollect"], "File");
	scrMenuMgr->addMenuSeparator("File");
	scrMenuMgr->createMenu("FileImport", tr("&Import"), "File");
	scrMenuMgr->addMenuItem(scrActions["fileImportText"], "FileImport");
	scrMenuMgr->addMenuItem(scrActions["fileImportAppendText"], "FileImport");
	scrMenuMgr->addMenuItem(scrActions["fileImportImage"], "FileImport");
	scrMenuMgr->addMenuItem(scrActions["fileImportPage"], "FileImport");
	scrMenuMgr->createMenu("FileExport", tr("&Export"), "File");
	scrMenuMgr->addMenuItem(scrActions["fileExportText"], "FileExport");
	scrMenuMgr->addMenuItem(scrActions["fileExportAsEPS"], "FileExport");
	scrMenuMgr->addMenuItem(scrActions["fileExportAsPDF"], "FileExport");
	scrMenuMgr->addMenuSeparator("File");
	scrMenuMgr->addMenuItem(scrActions["fileDocInfo"], "File");
	scrMenuMgr->addMenuItem(scrActions["fileDocSetup"], "File");
	scrMenuMgr->addMenuItem(scrActions["filePrint"], "File");
	scrMenuMgr->addMenuSeparator("File");
	scrMenuMgr->addMenuItem(scrActions["fileQuit"], "File");

	scrActions["fileClose"]->setEnabled(false);
	scrActions["fileSave"]->setEnabled(false);
	scrActions["fileSaveAs"]->setEnabled(false);
	scrActions["fileRevert"]->setEnabled(false);
	scrActions["fileCollect"]->setEnabled(false);
	scrActions["fileImportText"]->setEnabled(false);
	scrActions["fileImportImage"]->setEnabled(false);
	scrActions["fileImportAppendText"]->setEnabled(false);
	scrActions["fileImportPage"]->setEnabled(false);
	scrActions["fileExportText"]->setEnabled(false);
	scrActions["fileExportAsEPS"]->setEnabled(false);
	scrActions["fileExportAsPDF"]->setEnabled(false);
	scrMenuMgr->setMenuEnabled("FileExport", false);
	scrActions["fileDocInfo"]->setEnabled(false);
	scrActions["fileDocSetup"]->setEnabled(false);
	scrActions["filePrint"]->setEnabled(false);

	scrMenuMgr->createMenu("Edit", tr("&Edit"));
	scrMenuMgr->addMenuItem(scrActions["editUndoAction"], "Edit");
	scrMenuMgr->addMenuItem(scrActions["editRedoAction"], "Edit");
	scrMenuMgr->addMenuItem(scrActions["editActionMode"], "Edit");
	scrMenuMgr->addMenuSeparator("Edit");
	scrMenuMgr->addMenuItem(scrActions["editCut"], "Edit");
	scrMenuMgr->addMenuItem(scrActions["editCopy"], "Edit");
	scrMenuMgr->addMenuItem(scrActions["editPaste"], "Edit");
	scrMenuMgr->addMenuItem(scrActions["editClearContents"], "Edit");
	scrMenuMgr->addMenuItem(scrActions["editSelectAll"], "Edit");
	scrMenuMgr->addMenuItem(scrActions["editDeselectAll"], "Edit");
	scrMenuMgr->addMenuSeparator("Edit");
	scrMenuMgr->addMenuItem(scrActions["editSearchReplace"], "Edit");
	scrMenuMgr->addMenuItem(scrActions["toolsEditWithStoryEditor"], "Edit");
	scrMenuMgr->addMenuSeparator("Edit");
	scrMenuMgr->addMenuItem(scrActions["editColors"], "Edit");
	scrMenuMgr->addMenuItem(scrActions["editParaStyles"], "Edit");
	scrMenuMgr->addMenuItem(scrActions["editLineStyles"], "Edit");
	scrMenuMgr->addMenuItem(scrActions["editTemplates"], "Edit");
	scrMenuMgr->addMenuItem(scrActions["editJavascripts"], "Edit");
	scrMenuMgr->addMenuSeparator("Edit");
	scrMenuMgr->addMenuItem(scrActions["editPreferences"], "Edit");
	scrActions["editUndoAction"]->setEnabled(false);
	scrActions["editRedoAction"]->setEnabled(false);
	scrActions["editActionMode"]->setEnabled(true);
	scrActions["editCut"]->setEnabled(false);
	scrActions["editCopy"]->setEnabled(false);
	scrActions["editPaste"]->setEnabled(false);
	scrActions["editClearContents"]->setEnabled(false);
	scrActions["editSelectAll"]->setEnabled(false);
	scrActions["editDeselectAll"]->setEnabled(false);
	scrActions["editSearchReplace"]->setEnabled(false);
	scrActions["editParaStyles"]->setEnabled(false);
	scrActions["editLineStyles"]->setEnabled(false);
	scrActions["editTemplates"]->setEnabled(false);
	scrActions["editJavascripts"]->setEnabled(false);
	scrActions["toolsEditWithStoryEditor"]->setEnabled(false);

	//Style Menu
	scrMenuMgr->createMenu("Style", tr("St&yle"));
	//Color menu
	// CB TODO
	scrMenuMgr->createMenu("Color", tr("&Color"));
	ColorMenC = new QComboBox(false);
	ColorMenC->setEditable(false);
	scrMenuMgr->addMenuItem(ColorMenC, "Color");

	//Text size menu
	scrMenuMgr->createMenu("FontSize", tr("&Size"));
	scrActionGroups["fontSize"]->addTo(scrMenuMgr->getLocalPopupMenu("FontSize"));

	//Shade menu
	scrMenuMgr->createMenu("Shade", tr("&Shade"));
	scrActionGroups["shade"]->addTo(scrMenuMgr->getLocalPopupMenu("Shade"));

	//Font menu
	scrMenuMgr->createMenu("Font", tr("&Font"));
	FontMenu = scrMenuMgr->getLocalPopupMenu("Font");

	//Type style menu
	scrMenuMgr->createMenu("TypeEffects", tr("&Effects"));
	scrActionGroups["typeEffects"]->addTo(scrMenuMgr->getLocalPopupMenu("TypeEffects"));

	//Item Menu
	scrMenuMgr->createMenu("Item", tr("&Item"));
	scrMenuMgr->addMenuItem(scrActions["itemDuplicate"], "Item");
	scrMenuMgr->addMenuItem(scrActions["itemMulDuplicate"], "Item");
	scrMenuMgr->addMenuItem(scrActions["itemDelete"], "Item");
	scrMenuMgr->addMenuSeparator("Item");
	scrMenuMgr->addMenuItem(scrActions["itemGroup"], "Item");
	scrMenuMgr->addMenuItem(scrActions["itemUngroup"], "Item");
	scrMenuMgr->addMenuItem(scrActions["itemLock"], "Item");
	scrMenuMgr->addMenuItem(scrActions["itemLockSize"], "Item");
	scrMenuMgr->addMenuSeparator("Item");
	scrMenuMgr->createMenu("ItemLevel", tr("&Level"));
	scrMenuMgr->addMenuToMenu("ItemLevel", "Item");
	scrMenuMgr->addMenuItem(scrActions["itemSendToBack"], "ItemLevel");
	scrMenuMgr->addMenuItem(scrActions["itemBringToFront"], "ItemLevel");
	scrMenuMgr->addMenuItem(scrActions["itemLower"], "ItemLevel");
	scrMenuMgr->addMenuItem(scrActions["itemRaise"], "ItemLevel");
	scrMenuMgr->addMenuItem(scrActions["itemAlignDist"], "Item");
	scrMenuMgr->addMenuItem(scrActions["itemSendToScrapbook"], "Item");
	scrMenuMgr->addMenuSeparator("Item");
	scrMenuMgr->addMenuItem(scrActions["itemAttributes"], "ItemPDFOptions");
	scrMenuMgr->createMenu("ItemPDFOptions", tr("&PDF Options"));
	scrMenuMgr->addMenuToMenu("ItemPDFOptions", "Item");
	scrMenuMgr->addMenuItem(scrActions["itemPDFIsBookmark"], "ItemPDFOptions");
	scrMenuMgr->addMenuItem(scrActions["itemPDFIsAnnotation"], "ItemPDFOptions");
	scrMenuMgr->addMenuItem(scrActions["itemPDFAnnotationProps"], "ItemPDFOptions");
	scrMenuMgr->addMenuItem(scrActions["itemPDFFieldProps"], "ItemPDFOptions");
	scrMenuMgr->createMenu("ItemShapes", tr("&Shape"), "Item");
	// CB TODO
	//Shape menu
	SCustom = new Autoforms(0);
	scrMenuMgr->addMenuItem(SCustom, "ItemShapes");
	connect(SCustom, SIGNAL(FormSel(int, int, double *)), this, SLOT(MakeFrame(int, int, double *)));
	scrMenuMgr->addMenuItem(scrActions["itemShapeEdit"], "ItemShapes");
	scrMenuMgr->createMenu("ItemConvertTo", tr("C&onvert To"));
	scrMenuMgr->addMenuToMenu("ItemConvertTo", "Item");
	scrMenuMgr->addMenuItem(scrActions["itemConvertToBezierCurve"], "ItemConvertTo");
	scrMenuMgr->addMenuItem(scrActions["itemConvertToImageFrame"], "ItemConvertTo");
	scrMenuMgr->addMenuItem(scrActions["itemConvertToOutlines"], "ItemConvertTo");
	scrMenuMgr->addMenuItem(scrActions["itemConvertToPolygon"], "ItemConvertTo");
	scrMenuMgr->addMenuItem(scrActions["itemConvertToTextFrame"], "ItemConvertTo");
	
	scrMenuMgr->addMenuItem(scrActions["itemAttachTextToPath"], "Item");
	scrMenuMgr->addMenuItem(scrActions["itemDetachTextFromPath"], "Item");
	scrMenuMgr->addMenuItem(scrActions["itemCombinePolygons"], "Item");
	scrMenuMgr->addMenuItem(scrActions["itemSplitPolygons"], "Item");
	scrMenuMgr->setMenuEnabled("ItemShapes", false);
	scrActions["itemAlignDist"]->setEnabled(false);
	scrActions["itemGroup"]->setEnabled(false);
	scrActions["itemUngroup"]->setEnabled(false);
	scrActions["itemAttachTextToPath"]->setEnabled(false);
	scrActions["itemDetachTextFromPath"]->setEnabled(false);
	scrActions["itemCombinePolygons"]->setEnabled(false);
	scrActions["itemSplitPolygons"]->setEnabled(false);
	scrActions["itemLock"]->setEnabled(false);
	scrActions["itemLockSize"]->setEnabled(false);
	scrMenuMgr->setMenuEnabled("ItemConvertTo", false);
	scrActions["itemConvertToBezierCurve"]->setEnabled(false);
	scrActions["itemConvertToImageFrame"]->setEnabled(false);
	scrActions["itemConvertToOutlines"]->setEnabled(false);
	scrActions["itemConvertToPolygon"]->setEnabled(false);
	scrActions["itemConvertToTextFrame"]->setEnabled(false);

	//Insert menu
	scrMenuMgr->createMenu("Insert", tr("I&nsert"));
	scrMenuMgr->addMenuItem(scrActions["toolsInsertTextFrame"], "Insert");
	scrMenuMgr->addMenuItem(scrActions["toolsInsertImageFrame"], "Insert");
	scrMenuMgr->addMenuItem(scrActions["toolsInsertTableFrame"], "Insert");
	scrMenuMgr->addMenuItem(scrActions["toolsInsertShape"], "Insert");
	scrMenuMgr->addMenuItem(scrActions["toolsInsertPolygon"], "Insert");
	scrMenuMgr->addMenuItem(scrActions["toolsInsertLine"], "Insert");
	scrMenuMgr->addMenuItem(scrActions["toolsInsertBezier"], "Insert");
	scrMenuMgr->addMenuItem(scrActions["toolsInsertFreehandLine"], "Insert");
	scrMenuMgr->addMenuSeparator("Insert");
	scrMenuMgr->addMenuItem(scrActions["insertGlyph"], "Insert");
	
	scrMenuMgr->createMenu("InsertChar", tr("Character"));
	scrMenuMgr->addMenuToMenu("InsertChar", "Insert");
	scrMenuMgr->addMenuItem(scrActions["specialPageNumber"], "InsertChar");
	scrMenuMgr->addMenuSeparator("Insert");
	scrMenuMgr->addMenuItem(scrActions["specialSmartHyphen"], "InsertChar");
	scrMenuMgr->addMenuItem(scrActions["specialCopyRight"], "InsertChar");
	scrMenuMgr->addMenuItem(scrActions["specialRegdTM"], "InsertChar");
	scrMenuMgr->addMenuItem(scrActions["specialTM"], "InsertChar");
	scrMenuMgr->addMenuItem(scrActions["specialBullet"], "InsertChar");
	scrMenuMgr->addMenuSeparator("InsertChar");
	scrMenuMgr->addMenuItem(scrActions["specialDashEm"], "InsertChar");
	scrMenuMgr->addMenuItem(scrActions["specialDashEn"], "InsertChar");
	scrMenuMgr->addMenuItem(scrActions["specialDashFigure"], "InsertChar");
	scrMenuMgr->addMenuItem(scrActions["specialDashQuotation"], "InsertChar");
	scrMenuMgr->addMenuSeparator("InsertChar");
	scrMenuMgr->addMenuItem(scrActions["specialQuoteDoubleLeft"], "InsertChar");
	scrMenuMgr->addMenuItem(scrActions["specialQuoteDoubleRight"], "InsertChar");
	scrMenuMgr->addMenuItem(scrActions["specialQuoteSingleLeft"], "InsertChar");
	scrMenuMgr->addMenuItem(scrActions["specialQuoteSingleRight"], "InsertChar");

	scrMenuMgr->createMenu("InsertSpace", tr("Space"));
	scrMenuMgr->addMenuToMenu("InsertSpace", "Insert");
	scrMenuMgr->addMenuItem(scrActions["specialNonBreakingSpace"], "InsertSpace");
	scrMenuMgr->addMenuSeparator("Insert");
	scrMenuMgr->addMenuItem(scrActions["insertSampleText"], "Insert");
	scrActions["insertGlyph"]->setEnabled(false);
	
	//Page menu
	scrMenuMgr->createMenu("Page", tr("&Page"));
	scrMenuMgr->addMenuItem(scrActions["pageInsert"], "Page");
	scrMenuMgr->addMenuItem(scrActions["pageDelete"], "Page");
	scrMenuMgr->addMenuItem(scrActions["pageCopy"], "Page");
	scrMenuMgr->addMenuItem(scrActions["pageMove"], "Page");
	scrMenuMgr->addMenuItem(scrActions["pageApplyTemplate"], "Page");
	scrMenuMgr->addMenuItem(scrActions["pageManageGuides"], "Page");
	scrActions["pageDelete"]->setEnabled(false);
	scrActions["pageMove"]->setEnabled(false);

	//View menu
	scrMenuMgr->createMenu("View", tr("&View"));
	scrMenuMgr->addMenuItem(scrActions["viewFitInWindow"], "View");
	scrMenuMgr->addMenuItem(scrActions["viewFit50"], "View");
	scrMenuMgr->addMenuItem(scrActions["viewFit75"], "View");
	scrMenuMgr->addMenuItem(scrActions["viewFit100"], "View");
	scrMenuMgr->addMenuItem(scrActions["viewFit200"], "View");
	scrMenuMgr->addMenuItem(scrActions["viewFit20"], "View");
	scrMenuMgr->addMenuSeparator("View");
	scrMenuMgr->addMenuItem(scrActions["viewShowMargins"], "View");
	scrMenuMgr->addMenuItem(scrActions["viewShowFrames"], "View");
	scrMenuMgr->addMenuItem(scrActions["viewShowImages"], "View");
	scrMenuMgr->addMenuItem(scrActions["viewShowGrid"], "View");
	scrMenuMgr->addMenuItem(scrActions["viewShowGuides"], "View");
	scrMenuMgr->addMenuItem(scrActions["viewShowBaseline"], "View");
	scrMenuMgr->addMenuItem(scrActions["viewShowTextChain"], "View");
	scrMenuMgr->addMenuSeparator("View");
	scrMenuMgr->addMenuItem(scrActions["viewSnapToGrid"], "View");
	scrMenuMgr->addMenuItem(scrActions["viewSnapToGuides"], "View");
//	scrMenuMgr->addMenuItem(scrActions["viewNewView"], "View");

	//Tool menu
	scrMenuMgr->createMenu("Tools", tr("&Tools"));
	scrMenuMgr->addMenuItem(scrActions["toolsProperties"], "Tools");
	scrMenuMgr->addMenuItem(scrActions["toolsOutline"], "Tools");
	scrMenuMgr->addMenuItem(scrActions["toolsScrapbook"], "Tools");
	scrMenuMgr->addMenuItem(scrActions["toolsLayers"], "Tools");
	scrMenuMgr->addMenuItem(scrActions["toolsPages"], "Tools");
	scrMenuMgr->addMenuItem(scrActions["toolsBookmarks"], "Tools");
	scrMenuMgr->addMenuItem(scrActions["toolsMeasurements"], "Tools");
	scrMenuMgr->addMenuItem(scrActions["toolsActionHistory"], "Tools");
	scrMenuMgr->addMenuItem(scrActions["toolsPreflightVerifier"], "Tools");
	scrMenuMgr->addMenuSeparator("Tools");
	scrMenuMgr->addMenuItem(scrActions["toolsToolbarTools"], "Tools");
	scrMenuMgr->addMenuItem(scrActions["toolsToolbarPDF"], "Tools");
	//scrActions["toolsPreflightVerifier"]->setEnabled(false);

	//Extra menu
	scrMenuMgr->createMenu("Extras", tr("E&xtras"));
	scrMenuMgr->addMenuItem(scrActions["extrasManagePictures"], "Extras");
	scrMenuMgr->addMenuItem(scrActions["extrasHyphenateText"], "Extras");
	scrMenuMgr->addMenuItem(scrActions["extrasGenerateTableOfContents"], "Extras");
	
	scrMenuMgr->setMenuEnabled("Extras", false);
	scrActions["extrasHyphenateText"]->setEnabled(false);

	//Window menu
	scrMenuMgr->createMenu("Windows", tr("&Windows"));
	connect(scrMenuMgr->getLocalPopupMenu("Windows"), SIGNAL(aboutToShow()), this, SLOT(windowsMenuAboutToShow()));

	//Help menu
	scrMenuMgr->createMenu("Help", tr("&Help"));
	scrMenuMgr->addMenuItem(scrActions["helpAboutScribus"], "Help");
	scrMenuMgr->addMenuItem(scrActions["helpAboutQt"], "Help");
	scrMenuMgr->addMenuSeparator("Help");
	scrMenuMgr->addMenuItem(scrActions["helpTooltips"], "Help");
	scrMenuMgr->addMenuItem(scrActions["helpManual"], "Help");

	scrMenuMgr->addMenuToMenuBar("File");
	scrMenuMgr->addMenuToMenuBar("Edit");
	scrMenuMgr->addMenuToMenuBar("Style");
	scrMenuMgr->setMenuEnabled("Style", false);
	scrMenuMgr->addMenuToMenuBar("Item");
	scrMenuMgr->setMenuEnabled("Item", false);
	scrMenuMgr->addMenuToMenuBar("Insert");
	scrMenuMgr->setMenuEnabled("Insert", false);
	scrMenuMgr->addMenuToMenuBar("Page");
	scrMenuMgr->setMenuEnabled("Page", false);
	scrMenuMgr->addMenuToMenuBar("View");
	scrMenuMgr->setMenuEnabled("View", false);
	scrMenuMgr->addMenuToMenuBar("Tools");
	scrMenuMgr->addMenuToMenuBar("Extras");
	scrMenuMgr->setMenuEnabled("Extras", false);
	scrMenuMgr->addMenuToMenuBar("Windows");
	scrMenuMgr->setMenuEnabled("Windows", false);
	menuBar()->insertSeparator();
	scrMenuMgr->addMenuToMenuBar("Help");

	//Alignment menu
	scrMenuMgr->createMenu("Alignment", tr("&Alignment"));
	scrMenuMgr->addMenuItem(scrActions["alignLeft"], "Alignment");
	scrMenuMgr->addMenuItem(scrActions["alignCenter"], "Alignment");
	scrMenuMgr->addMenuItem(scrActions["alignRight"], "Alignment");
	scrMenuMgr->addMenuItem(scrActions["alignBlock"], "Alignment");
	scrMenuMgr->addMenuItem(scrActions["alignForced"], "Alignment");

	connect(ColorMenC, SIGNAL(activated(int)), this, SLOT(setItemFarbe(int)));
	connect(FontMenu, SIGNAL(activated(int)), this, SLOT(setItemFont(int)));
}

void ScribusApp::initStatusBar()
{
	FMess = new QLabel( "           ", statusBar(), "ft");
	FProg = new QProgressBar(statusBar(), "p");
	FProg->setCenterIndicator(true);
	FProg->setFixedWidth( 100 );
	FProg->reset();
	XMess = new QLabel( tr("X-Pos:"), statusBar(), "xt");
	YMess = new QLabel( tr("Y-Pos:"), statusBar(), "yt");
	XDat = new QLabel( "         ", statusBar(), "dt");
	YDat = new QLabel( "         ", statusBar(), "ydt");

	statusBar()->addWidget(FMess, 3, true);
	statusBar()->addWidget(FProg, 0, true);
	statusBar()->addWidget(XMess, 0, true);
	statusBar()->addWidget(XDat, 1, true);
	statusBar()->addWidget(YMess, 0, true);
	statusBar()->addWidget(YDat, 1, true);
}

void ScribusApp::ReportMP(double xp, double yp)
{
	QString suffix=unitGetSuffixFromIndex(doc->docUnitIndex);
	int multiplier=unitGetDecimalsFromIndex(doc->docUnitIndex);
	double divisor = static_cast<double>(multiplier);
	int precision=precision = unitGetPrecisionFromIndex(doc->docUnitIndex);
	QString tmp;
	XDat->setText(tmp.setNum(qRound(xp*doc->unitRatio * multiplier) / divisor, 'f', precision) + suffix);
	YDat->setText(tmp.setNum(qRound(yp*doc->unitRatio * multiplier) / divisor, 'f', precision) + suffix);
}

void ScribusApp::SetKeyEntry(QString actName, QString cleanMenuText, QString keyseq, int rowNumber)
{
	Keys ke;
	if (actName!="")
	{
		if (scrActions[actName])
		{
			ke.actionName=actName;
			ke.keySequence = keyseq;
			ke.cleanMenuText=cleanMenuText;
			ke.tableRow=rowNumber;
			Prefs.KeyActions.insert(actName, ke);
		}
		else
			qDebug("%s", QString("Action Name: %1 does not exist").arg(actName).ascii());
	}
}

void ScribusApp::DeleteSel(PageItem *currItem)
{
	int FirstSel = 0;
	bool first = false;
	for (ScText *it = currItem->itemText.first(); it != 0; it = currItem->itemText.next())
	{
		if (it->cselect)
		{
			first = true;
			currItem->itemText.remove();
			it = currItem->itemText.prev();
			if (it == 0)
				it = currItem->itemText.first();
		}
		if (!first)
			FirstSel++;
	}
	if (currItem->itemText.count() != 0)
	{
		if (currItem->itemText.first()->cselect)
		{
			currItem->itemText.remove();
			currItem->CPos = 0;
		}
		else
			currItem->CPos = FirstSel;
	}
	else
		currItem->CPos = 0;
	currItem->HasSel = false;
	DisableTxEdit();
}

void ScribusApp::setTBvals(PageItem *currItem)
{
	if (currItem->itemText.count() != 0)
	{
		int ChPos = QMIN(currItem->CPos, static_cast<int>(currItem->itemText.count()-1));
		doc->CurrentStyle = currItem->itemText.at(ChPos)->cstyle & 127;
		doc->currentParaStyle = currItem->itemText.at(ChPos)->cab;
		setAbsValue(doc->currentParaStyle);
		propertiesPalette->setAli(doc->currentParaStyle);
		doc->CurrFont = currItem->itemText.at(ChPos)->cfont->SCName;
		doc->CurrFontSize = currItem->itemText.at(ChPos)->csize;
		doc->CurrTextFill = currItem->itemText.at(ChPos)->ccolor;
		doc->CurrTextFillSh = currItem->itemText.at(ChPos)->cshade;
		doc->CurrTextStroke = currItem->itemText.at(ChPos)->cstroke;
		doc->CurrTextStrokeSh = currItem->itemText.at(ChPos)->cshade2;
		doc->CurrTextScale = currItem->itemText.at(ChPos)->cscale;
		emit TextFarben(doc->CurrTextStroke, doc->CurrTextFill, doc->CurrTextStrokeSh, doc->CurrTextFillSh);
		emit TextIFont(doc->CurrFont);
		emit TextISize(doc->CurrFontSize);
		emit TextUSval(currItem->itemText.at(ChPos)->cextra);
		emit TextStil(doc->CurrentStyle);
		emit TextScale(doc->CurrTextScale);
	}
}

void ScribusApp::wheelEvent(QWheelEvent *w)
{
	if (HaveDoc)
	{
		if ((w->orientation() != Qt::Vertical) || ( w->state() & ShiftButton ))
		{
			if (w->delta() < 0)
				view->scrollBy(Prefs.Wheelval, 0);
			else
				view->scrollBy(-Prefs.Wheelval, 0);
		}
		else
		{
			if (w->delta() < 0)
				view->scrollBy(0, Prefs.Wheelval);
			else
				view->scrollBy(0, -Prefs.Wheelval);
		}
		w->accept();
	}
}

//Special keys assigned to actions are stolen by the action and not passed to
//keyPressEvent so process them here.
void ScribusApp::specialActionKeyEvent(QString actionName, int unicodevalue)
{
	if (HaveDoc)
	{
		if (doc->appMode==EditMode)
		{
			if (view->SelItem.count() == 1)
			{
				struct ScText *hg = new ScText;
				PageItem *currItem = view->SelItem.at(0);
				if (unicodevalue!=-1)
				{
					hg->ch = QString(QChar(unicodevalue));
					hg->cfont = (*doc->AllFonts)[doc->CurrFont];
					hg->csize = doc->CurrFontSize;
					hg->ccolor = doc->CurrTextFill;
					hg->cshade = doc->CurrTextFillSh;
					hg->cstroke = doc->CurrTextStroke;
					hg->cshade2 = doc->CurrTextStrokeSh;
					hg->cscale = doc->CurrTextScale;
					hg->cselect = false;
					hg->cstyle = doc->CurrentStyle;
					hg->cab = doc->currentParaStyle;
					if (doc->docParagraphStyles[doc->currentParaStyle].Font != "")
					{
						hg->cfont = (*doc->AllFonts)[doc->docParagraphStyles[doc->currentParaStyle].Font];
						hg->csize = doc->docParagraphStyles[doc->currentParaStyle].FontSize;
					}
					hg->cextra = 0;
					hg->xp = 0;
					hg->yp = 0;
					hg->PRot = 0;
					hg->PtransX = 0;
					hg->PtransY = 0;
					currItem->itemText.insert(currItem->CPos, hg);
					currItem->CPos += 1;
					currItem->Tinput = true;
					view->RefreshItem(currItem);
				}
				else if (actionName=="specialSmartHyphen") //ignore the char as we use an attribute if the text item, for now.
				{
					currItem->itemText.at(QMAX(currItem->CPos-1,0))->cstyle ^= 128;
					currItem->Tinput = true;
					view->RefreshItem(currItem);
				}
			}
		}
	}
}

/*!
  \brief Receive key events from palettes such as palette hiding events. Possibly eaier way but this is cleaner than before. No need to modify all those palettes and each new one in future.
 */
bool ScribusApp::eventFilter( QObject */*o*/, QEvent *e )
{
	bool retVal;
	if ( e->type() == QEvent::KeyPress ) {
		QKeyEvent *k = (QKeyEvent *)e;
		int keyMod;
		switch (k->state())
		{
			case ShiftButton:
				keyMod = SHIFT;
				break;
			case AltButton:
				keyMod = ALT;
				break;
			case ControlButton:
				keyMod = CTRL;
				break;
			default:
				keyMod = 0;
				break;
		}
		QKeySequence currKeySeq = QKeySequence(k->key() | keyMod);
		retVal=true;
		if (currKeySeq == scrActions["specialToggleAllPalettes"]->accel())
			scrActions["specialToggleAllPalettes"]->activate();
		else
		if (currKeySeq == scrActions["toolsProperties"]->accel())
			scrActions["toolsProperties"]->toggle();
		else
		if (currKeySeq == scrActions["toolsOutline"]->accel())
			scrActions["toolsOutline"]->toggle();
		else
		if (currKeySeq == scrActions["toolsScrapbook"]->accel())
			scrActions["toolsScrapbook"]->toggle();
		else
		if (currKeySeq == scrActions["toolsLayers"]->accel())
			scrActions["toolsLayers"]->toggle();
		else
		if (currKeySeq == scrActions["toolsPages"]->accel())
			scrActions["toolsPages"]->toggle();
		else
		if (currKeySeq == scrActions["toolsBookmarks"]->accel())
			scrActions["toolsBookmarks"]->toggle();
		else
		if (currKeySeq == scrActions["toolsActionHistory"]->accel())
			scrActions["toolsActionHistory"]->toggle();
		else
		if (currKeySeq == scrActions["toolsPreflightVerifier"]->accel())
			scrActions["toolsPreflightVerifier"]->toggle();
		else
		if (currKeySeq == scrActions["fileQuit"]->accel())
			scrActions["fileQuit"]->activate();
		else			
			retVal=false;
	}
	else
		retVal=false;
	//Return false to pass event to object
	return retVal;
}

void ScribusApp::keyPressEvent(QKeyEvent *k)
{
	QWidgetList windows;
	QWidget* w = NULL;
	struct ScText *hg;
	int kk = k->key();
	int as = k->ascii();
	double altx, alty;
	QString uc = k->text();
	QString cr, Tcha, Twort;
	uint Tcoun;
	int len, pos, c;
	if (keyrep)
		return;
	keyrep = true;
	switch (k->state())
	{
	case ShiftButton:
		KeyMod = SHIFT;
		break;
	case AltButton:
		KeyMod = ALT;
		break;
	case ControlButton:
		KeyMod = CTRL;
		break;
	default:
		KeyMod = 0;
		break;
	}
	if ((kk == Key_Escape) && (HaveDoc))
	{
		keyrep = false;
		PageItem *currItem;
		if ((view->SelItem.count() != 0))
		{
			currItem = view->SelItem.at(0);
			switch (doc->appMode)
			{
				case NormalMode:
					currItem->Sizing = false;
					if (doc->SubMode != -1)
					{
						view->Deselect(false);
						doc->Items.remove(currItem->ItemNr);
					}
					break;
				case LinkFrames:
				case UnlinkFrames:
				case EditMode:
				case Rotation:
						view->Deselect(false);
				case PanningMode:
					break;
				case DrawBezierLine:
					currItem->PoLine.resize(currItem->PoLine.size()-2);
					if (currItem->PoLine.size() < 4)
					{
						view->Deselect(false);
						doc->Items.remove(currItem->ItemNr);
					}
					else
					{
						view->SizeItem(currItem->PoLine.WidthHeight().x(), currItem->PoLine.WidthHeight().y(), currItem->ItemNr, false, false);
						view->SetPolyClip(currItem, qRound(QMAX(currItem->Pwidth / 2, 1)));
						view->AdjustItemSize(currItem);
						currItem->ContourLine = currItem->PoLine.copy();
						currItem->ClipEdited = true;
						currItem->FrameType = 3;
						slotDocCh();
					}
					view->FirstPoly = true;
					break;
				default:
					view->Deselect(false);
					doc->Items.remove(currItem->ItemNr);
					break;
			}
		}
		view->Mpressed = false;
		doc->DragP = false;
		doc->leaveDrag = false;
		view->Imoved = false;
		view->mCG = false;
		view->MidButt = false;
		doc->SubMode = -1;
		doc->ElemToLink = NULL;
		NoFrameEdit();
		slotSelect();
		return;
	}
	ButtonState buttonState = k->state();
	if ((HaveDoc) && (!view->LE->hasFocus()) && (!view->PGS->PageCombo->hasFocus()))
	{
		if ((doc->appMode != EditMode) && (view->SelItem.count() == 0))
		{
			switch (kk)
			{
			case Key_Space:
				keyrep = false;
				if (doc->appMode == PanningMode)
					setAppMode(NormalMode);
				else
				{
					setAppMode(PanningMode);
					qApp->setOverrideCursor(QCursor(loadIcon("HandC.xpm")), true);
				}
				return;
				break;
			case Key_Prior:
				view->scrollBy(0, -Prefs.Wheelval);
				keyrep = false;
				return;
				break;
			case Key_Next:
				view->scrollBy(0, Prefs.Wheelval);
				keyrep = false;
				return;
				break;
			case Key_Tab:
				keyrep = false;
				windows = wsp->windowList();
				if (windows.count() > 1)
				{
					for (int i = 0; i < static_cast<int>(windows.count()); ++i)
					{
						if (wsp->activeWindow() == windows.at(i))
						{
							if (i == static_cast<int>(windows.count()-1))
								w = windows.at(0);
							else
								w = windows.at(i+1);
							break;
						}
					}
					doc->OpenNodes = outlinePalette->buildReopenVals();
					docCheckerPalette->clearErrorList();
					if ( w )
						w->showNormal();
					newActWin(w);
				}
				return;
				break;
			}
		}
		if (view->SelItem.count() != 0)
		{
			PageItem *currItem = view->SelItem.at(0);

			switch (doc->appMode)
			{
			case NormalMode:
				switch (kk)
				{
				case Key_Backspace:
				case Key_Delete:
					if (!doc->EditClip)
						view->DeleteItem();
					break;
				case Key_Prior:
					if (!currItem->locked())
						view->RaiseItem();
					break;
				case Key_Next:
					if (!currItem->locked())
						view->LowerItem();
					break;
				case Key_Left:
					if (!currItem->locked())
					{
						if ( buttonState & ShiftButton )
							view->moveGroup(-10, 0);
						else if ( buttonState & ControlButton )
							view->moveGroup(-0.1, 0);
						else
							view->moveGroup(-1, 0);
					}
					break;
				case Key_Right:
					if (!currItem->locked())
					{
						if ( buttonState & ShiftButton )
							view->moveGroup(10, 0);
						else if ( buttonState & ControlButton )
							view->moveGroup(0.1, 0);
						else
							view->moveGroup(1, 0);
					}
					break;
				case Key_Up:
					if (!currItem->locked())
					{
						if ( buttonState & ShiftButton )
							view->moveGroup(0, -10);
						else if ( buttonState & ControlButton )
							view->moveGroup(0, -0.1);
						else
							view->moveGroup(0, -1);
					}
					break;
				case Key_Down:
					if (!currItem->locked())
					{
						if ( buttonState & ShiftButton )
							view->moveGroup(0, 10);
						else if ( buttonState & ControlButton )
							view->moveGroup(0, 0.1);
						else
							view->moveGroup(0, 1);
					}
					break;
				default:
					break;
				}
				slotDocCh();
				break;
			case EditMode:
				int oldPos = currItem->CPos; // 15-mar-2004 jjsa for cursor movement with Shift + Arrow key
				view->oldCp = currItem->CPos;
				if (currItem->itemType() == PageItem::ImageFrame)
				{
					switch (kk)
					{
						case Key_Left:
							if (!currItem->locked())
							{
								if ( buttonState & ShiftButton )
									view->MoveItemI(-10, 0, currItem->ItemNr, true);
								else if ( buttonState & ControlButton )
									view->MoveItemI(-0.1, 0, currItem->ItemNr, true);
								else
									view->MoveItemI(-1, 0, currItem->ItemNr, true);
							}
							break;
						case Key_Right:
							if (!currItem->locked())
							{
								if ( buttonState & ShiftButton )
									view->MoveItemI(10, 0, currItem->ItemNr, true);
								else if ( buttonState & ControlButton )
									view->MoveItemI(0.1, 0, currItem->ItemNr, true);
								else
									view->MoveItemI(1, 0, currItem->ItemNr, true);
							}
							break;
						case Key_Up:
							if (!currItem->locked())
							{
								if ( buttonState & ShiftButton )
									view->MoveItemI(0, -10, currItem->ItemNr, true);
								else if ( buttonState & ControlButton )
									view->MoveItemI(0, -0.1, currItem->ItemNr, true);
								else
									view->MoveItemI(0, -1, currItem->ItemNr, true);
							}
							break;
						case Key_Down:
							if (!currItem->locked())
							{
								if ( buttonState & ShiftButton )
									view->MoveItemI(0, 10, currItem->ItemNr, true);
								else if ( buttonState & ControlButton )
									view->MoveItemI(0, 0.1, currItem->ItemNr, true);
								else
									view->MoveItemI(0, 1, currItem->ItemNr, true);
							}
							break;
					}
				}
				if (currItem->itemType() == PageItem::TextFrame)
				{
					view->slotDoCurs(false);
					switch (kk)
					{
					case Key_Prior:
					case Key_Next:
					case Key_End:
					case Key_Home:
					case Key_Right:
					case Key_Left:
					case Key_Up:
					case Key_Down:
						if ( (buttonState & ShiftButton) == 0 )
							view->deselectAll(currItem);
					}
					/* ISO 14755
					if ((buttonState & ControlButton) && (buttonState & ShiftButton))
					{
						if (!UniCinp)
						{
							UniCinp=true;
							UniCinC = 0;
							UniCinS = "";
							keyrep = false;
						}
						qDebug(QString("%1 %2 %3 %4 %5").arg("uni").arg("c+s").arg(uc).arg(kk).arg(as));
					}
					*/
					if (UniCinp)
					{
						int conv = 0;
						bool ok = false;
						UniCinS += uc;
						conv = UniCinS.toInt(&ok, 16);
						if (!ok)
						{
							UniCinp = false;
							UniCinC = 0;
							UniCinS = "";
							keyrep = false;
							return;
						}
						UniCinC++;
						if (UniCinC == 4)
						{
							UniCinp = false;
							UniCinC = 0;
							UniCinS = "";
							if (ok)
							{
								if (currItem->HasSel)
									DeleteSel(currItem);
								if (conv < 31)
									conv = 32;
								hg = new ScText;
								hg->ch = QString(QChar(conv));
								hg->cfont = (*doc->AllFonts)[doc->CurrFont];
								hg->csize = doc->CurrFontSize;
								hg->ccolor = doc->CurrTextFill;
								hg->cshade = doc->CurrTextFillSh;
								hg->cstroke = doc->CurrTextStroke;
								hg->cshade2 = doc->CurrTextStrokeSh;
								hg->cscale = doc->CurrTextScale;
								hg->cselect = false;
								hg->cstyle = doc->CurrentStyle;
								hg->cab = doc->currentParaStyle;
								if (doc->docParagraphStyles[doc->currentParaStyle].Font != "")
								{
									hg->cfont = (*doc->AllFonts)[doc->docParagraphStyles[doc->currentParaStyle].Font];
									hg->csize = doc->docParagraphStyles[doc->currentParaStyle].FontSize;
								}
								hg->cextra = 0;
								hg->xp = 0;
								hg->yp = 0;
								hg->PRot = 0;
								hg->PtransX = 0;
								hg->PtransY = 0;
								currItem->itemText.insert(currItem->CPos, hg);
								currItem->CPos += 1;
								currItem->Tinput = true;
								setTBvals(currItem);
								view->RefreshItem(currItem);
								keyrep = false;
								return;
							}
						}
						else
						{
							keyrep = false;
							return;
						}
					}
					switch (kk)
					{
					case Key_F12:
						UniCinp = true;
						UniCinC = 0;
						UniCinS = "";
						keyrep = false;
						return;
						break;
					case Key_Home:
						// go to begin of line
						if ( (pos = currItem->CPos) == 0 )
							break; // at begin of frame
						len = static_cast<int>(currItem->itemText.count());
						if ( pos == len )
							pos--;
						if ( (buttonState & ControlButton) == 0 )
						{
							alty =  currItem->itemText.at(pos)->yp;
							c = currItem->itemText.at(pos)->ch.at(0).latin1();
							if ( c == 13 ) // new line, position is wrong
								if ( --pos > 0 )
									alty =  currItem->itemText.at(pos)->yp;
							// check for yp at actual position
							if ( pos < len )
							{
								altx =  currItem->itemText.at(pos)->yp;
								if ( altx > alty )
								{
									// we was at begin of line
									break;
								}
							}
							while (  pos > 0 && currItem->itemText.at(pos-1)->yp == alty )
								pos--;
							if ( currItem->itemText.at(pos)->ch.at(0).latin1() == 13 )
								pos++;
						}
						else
						{
							// paragraph begin
							if ( pos < len &&
							        currItem->itemText.at(pos)->ch.at(0).latin1() == 13 )
								pos--;
							while(pos > 0 )
								if ( currItem->itemText.at(pos)->ch.at(0).latin1() == 13 )
								{
									pos++;
									break;
								}
								else
									pos--;
						}
						currItem->CPos = pos;
						if ( buttonState & ShiftButton )
							view->ExpandSel(currItem, -1, oldPos);
						break;
					case Key_End:
						// go to end of line
						len = static_cast<int>(currItem->itemText.count());
						if ( currItem->CPos >= len )
							break; // at end of frame
						if ( (buttonState & ControlButton) == 0 )
						{
							if ((currItem->CPos < len) && ((currItem->itemText.at(currItem->CPos)->ch.at(0).latin1() == 13) || (currItem->itemText.at(currItem->CPos)->ch.at(0).latin1() == 28)))
							{
								// at end of paragraph and therefore line
								break;
							}
							QString nextCh = currItem->itemText.at(currItem->CPos)->ch;
							int nextChs = currItem->itemText.at(currItem->CPos)->csize;
							alty =  currItem->itemText.at(currItem->CPos)->yp - currItem->SetZeichAttr(currItem->itemText.at(currItem->CPos), &nextChs, &nextCh);
							double nextY;
							while (currItem->CPos < len-1)
							{
								nextCh = currItem->itemText.at(currItem->CPos+1)->ch;
								nextChs = currItem->itemText.at(currItem->CPos+1)->csize;
								nextY = currItem->itemText.at(currItem->CPos+1)->yp - currItem->SetZeichAttr(currItem->itemText.at(currItem->CPos+1), &nextChs, &nextCh);
								if (fabs(nextY - alty) > 1.0)
									break;
								currItem->CPos++;
								if ( currItem->CPos == len-1)
									break;
							}
							if ( currItem->CPos < len -1 )
								c = currItem->itemText.at(currItem->CPos+1)->ch.at(0).latin1();
							else if ( currItem->CPos == len - 1 )
								c = 13;
							else
								c = 0;
							if (( c == 13 ) || (c = 28))
								currItem->CPos++;
						}
						else
						{
							// go to end of paragraph
							if ( currItem->itemText.at(currItem->CPos)->ch.at(0).latin1() == 13 )
							{
								break;
							}
							pos = currItem->CPos;
							while ( pos < len )
							{
								if ( currItem->itemText.at(pos)->ch.at(0).latin1() == 13 )
									break;
								else
									pos++;
							}
							currItem->CPos = pos;
						}
						if ( buttonState & ShiftButton )
							view->ExpandSel(currItem, 1, oldPos);
						break;
					case Key_Down:
						if (currItem->CPos != static_cast<int>(currItem->itemText.count()))
						{
							alty = currItem->itemText.at(currItem->CPos)->yp;
							altx = currItem->itemText.at(currItem->CPos)->xp;
							do
							{
								currItem->CPos += 1;
								if (currItem->CPos == static_cast<int>(currItem->itemText.count()))
									break;
								if (currItem->itemText.at(currItem->CPos)->yp > alty)
								{
									if (currItem->itemText.at(currItem->CPos)->xp >= altx)
										break;
								}
							}
							while (currItem->CPos < static_cast<int>(currItem->itemText.count()));
							if ( buttonState & ShiftButton )
							{
								if ( buttonState & AltButton )
									currItem->CPos = currItem->itemText.count();
								view->ExpandSel(currItem, 1, oldPos);
							}
							else
								if (currItem->CPos == static_cast<int>(currItem->itemText.count()))
									if (currItem->NextBox != 0)
									{
										if (currItem->NextBox->itemText.count() != 0)
										{
											view->Deselect(true);
											currItem->NextBox->CPos = 0;
											view->SelectItemNr(currItem->NextBox->ItemNr);
											currItem = currItem->NextBox;
										}
									}
						}
						else
						{
							if (currItem->NextBox != 0)
							{
								if (currItem->NextBox->itemText.count() != 0)
								{
									view->Deselect(true);
									currItem->NextBox->CPos = 0;
									view->SelectItemNr(currItem->NextBox->ItemNr);
									currItem = currItem->NextBox;
								}
							}
						}
						if ( currItem->HasSel )
							view->RefreshItem(currItem);
						setTBvals(currItem);
						break;
					case Key_Up:
						if (currItem->CPos > 0)
						{
							if (currItem->CPos == static_cast<int>(currItem->itemText.count()))
								currItem->CPos -= 1;
							alty = currItem->itemText.at(currItem->CPos)->yp;
							altx = currItem->itemText.at(currItem->CPos)->xp;
							if (currItem->CPos > 0)
							{
								do
								{
									currItem->CPos -= 1;
									if (currItem->CPos == 0)
										break;
									if  ( currItem->itemText.at(currItem->CPos)->ch.at(0).latin1() == 13 )
										break;
									if (currItem->itemText.at(currItem->CPos)->yp < alty)
									{
										if (currItem->itemText.at(currItem->CPos)->xp <= altx)
											break;
									}
								}
								while (currItem->CPos > 0);
							}
							if ( buttonState & ShiftButton )
							{
								if ( buttonState & AltButton )
									currItem->CPos = 0;
								view->ExpandSel(currItem, -1, oldPos);
							}
							else
								if (currItem->CPos == 0)
								{
									if (currItem->BackBox != 0)
									{
										view->Deselect(true);
										currItem->BackBox->CPos = currItem->BackBox->itemText.count();
										view->SelectItemNr(currItem->BackBox->ItemNr);
										currItem = currItem->BackBox;
									}
								}
						}
						else
						{
							currItem->CPos = 0;
							if (currItem->BackBox != 0)
							{
								view->Deselect(true);
								currItem->BackBox->CPos = currItem->BackBox->itemText.count();
								view->SelectItemNr(currItem->BackBox->ItemNr);
								currItem = currItem->BackBox;
							}
						}
						if ( currItem->HasSel )
							view->RefreshItem(currItem);
						setTBvals(currItem);
						break;
					case Key_Prior:
						currItem->CPos = 0;
						if ( buttonState & ShiftButton )
							view->ExpandSel(currItem, -1, oldPos);
						setTBvals(currItem);
						break;
					case Key_Next:
						currItem->CPos = static_cast<int>(currItem->itemText.count());
						if ( buttonState & ShiftButton )
							view->ExpandSel(currItem, 1, oldPos);
						setTBvals(currItem);
						break;
					case Key_Left:
						if ( buttonState & ControlButton )
						{
							view->setNewPos(currItem, oldPos, currItem->itemText.count(),-1);
							if ( buttonState & ShiftButton )
								view->ExpandSel(currItem, -1, oldPos);
						}
						else if ( buttonState & ShiftButton )
						{
							currItem->CPos--;
							if ( currItem->CPos < 0 )
								currItem->CPos = 0;
							else
								view->ExpandSel(currItem, -1, oldPos);
						}
						else
						{
							currItem->CPos -= 1;
							if (currItem->CPos < 0)
							{
								currItem->CPos = 0;
								if (currItem->BackBox != 0)
								{
									view->Deselect(true);
									currItem->BackBox->CPos = currItem->BackBox->itemText.count();
									view->SelectItemNr(currItem->BackBox->ItemNr);
									currItem = currItem->BackBox;
								}
							}
						}
						if ((currItem->CPos > 0) && (currItem->CPos == static_cast<int>(currItem->itemText.count())))
						{
							if (currItem->itemText.at(currItem->CPos-1)->cstyle & 256)
							{
								currItem->CPos -= 1;
								while ((currItem->CPos > 0) && (currItem->itemText.at(currItem->CPos)->cstyle & 256))
								{
									currItem->CPos--;
									if (currItem->CPos == 0)
										break;
								}
							}
						}
						else
						{
							while ((currItem->CPos > 0) && (currItem->itemText.at(currItem->CPos)->cstyle & 256))
							{
								currItem->CPos--;
								if (currItem->CPos == 0)
									break;
							}
						}
						if ( currItem->HasSel )
							view->RefreshItem(currItem);
						setTBvals(currItem);
						break;
					case Key_Right:
						if ( buttonState & ControlButton )
						{
							view->setNewPos(currItem, oldPos, currItem->itemText.count(),1);
							if ( buttonState & ShiftButton )
								view->ExpandSel(currItem, 1, oldPos);
						}
						else if ( buttonState & ShiftButton )
						{
							currItem->CPos++;
							if ( currItem->CPos > static_cast<int>(currItem->itemText.count()) )
								currItem->CPos--;
							else
								view->ExpandSel(currItem, 1, oldPos);
						}
						else
						{
							currItem->CPos += 1; // new position within text ?
							if (currItem->CPos > static_cast<int>(currItem->itemText.count()))
							{
								currItem->CPos -= 1;
								if (currItem->NextBox != 0)
								{
									if (currItem->NextBox->itemText.count() != 0)
									{
										view->Deselect(true);
										currItem->NextBox->CPos = 0;
										view->SelectItemNr(currItem->NextBox->ItemNr);
										currItem = currItem->NextBox;
									}
								}
							}
						}
						if ( currItem->HasSel )
							view->RefreshItem(currItem);
						setTBvals(currItem);
						break;
					case Key_Delete:
						if (currItem->CPos == static_cast<int>(currItem->itemText.count()))
						{
							if (currItem->HasSel)
							{
								DeleteSel(currItem);
								setTBvals(currItem);
								view->RefreshItem(currItem);
							}
							keyrep = false;
							return;
						}
						if (currItem->itemText.count() == 0)
						{
							keyrep = false;
							return;
						}
						cr = currItem->itemText.at(currItem->CPos)->ch;
						if (currItem->HasSel)
							DeleteSel(currItem);
						else
							currItem->itemText.remove(currItem->CPos);
						currItem->Tinput = false;
						if ((cr == QChar(13)) && (currItem->itemText.count() != 0))
						{
							view->chAbStyle(currItem, currItem->itemText.at(QMAX(currItem->CPos-1,0))->cab);
							currItem->Tinput = false;
						}
						setTBvals(currItem);
						view->RefreshItem(currItem);
						break;
					case Key_Backspace:
						if (currItem->CPos == 0)
						{
							if (currItem->HasSel)
							{
								DeleteSel(currItem);
								setTBvals(currItem);
								view->RefreshItem(currItem);
							}
							break;
						}
						if (currItem->itemText.count() == 0)
							break;
						cr = currItem->itemText.at(QMAX(currItem->CPos-1,0))->ch;
						if (currItem->HasSel)
							DeleteSel(currItem);
						else
						{
							currItem->CPos -= 1;
							currItem->itemText.remove(currItem->CPos);
						}
						currItem->Tinput = false;
						if ((cr == QChar(13)) && (currItem->itemText.count() != 0))
						{
							view->chAbStyle(currItem, currItem->itemText.at(QMAX(currItem->CPos-1,0))->cab);
							currItem->Tinput = false;
						}
						setTBvals(currItem);
						view->RefreshItem(currItem);
						break;
					default:
						if ((currItem->HasSel) && (kk < 0x1000))
							DeleteSel(currItem);
						if ((kk == Key_Tab) || ((kk == Key_Return) && (buttonState & ShiftButton)))
						{
							hg = new ScText;
							if (kk == Key_Return)
								hg->ch = QString(QChar(28));
							else if (kk == Key_Tab)
								hg->ch = QString(QChar(9));
							hg->cfont = (*doc->AllFonts)[doc->CurrFont];
							hg->csize = doc->CurrFontSize;
							hg->ccolor = doc->CurrTextFill;
							hg->cshade = doc->CurrTextFillSh;
							hg->cstroke = doc->CurrTextStroke;
							hg->cshade2 = doc->CurrTextStrokeSh;
							hg->cscale = doc->CurrTextScale;
							hg->cselect = false;
							hg->cstyle = doc->CurrentStyle;
							hg->cab = doc->currentParaStyle;
							if (doc->docParagraphStyles[doc->currentParaStyle].Font != "")
							{
								hg->cfont = (*doc->AllFonts)[doc->docParagraphStyles[doc->currentParaStyle].Font];
								hg->csize = doc->docParagraphStyles[doc->currentParaStyle].FontSize;
							}
							hg->cextra = 0;
							hg->xp = 0;
							hg->yp = 0;
							hg->PRot = 0;
							hg->PtransX = 0;
							hg->PtransY = 0;
							currItem->itemText.insert(currItem->CPos, hg);
							currItem->CPos += 1;
							currItem->Tinput = true;
							view->RefreshItem(currItem);
							break;
						}
						if (((uc[0] > QChar(31)) || (as == 13) || (as == 30)) && ((*doc->AllFonts)[doc->CurrFont]->CharWidth.contains(uc[0].unicode())))
						{
							hg = new ScText;
							hg->ch = uc;
							hg->cfont = (*doc->AllFonts)[doc->CurrFont];
							hg->ccolor = doc->CurrTextFill;
							hg->cshade = doc->CurrTextFillSh;
							hg->cstroke = doc->CurrTextStroke;
							hg->cshade2 = doc->CurrTextStrokeSh;
							hg->cscale = doc->CurrTextScale;
							hg->csize = doc->CurrFontSize;
							hg->cextra = 0;
							hg->cselect = false;
							hg->cstyle = doc->CurrentStyle;
							hg->cab = doc->currentParaStyle;
							if (doc->docParagraphStyles[doc->currentParaStyle].Font != "")
							{
								hg->cfont = (*doc->AllFonts)[doc->docParagraphStyles[doc->currentParaStyle].Font];
								hg->csize = doc->docParagraphStyles[doc->currentParaStyle].FontSize;
							}
							hg->xp = 0;
							hg->yp = 0;
							hg->PRot = 0;
							hg->PtransX = 0;
							hg->PtransY = 0;
							currItem->itemText.insert(currItem->CPos, hg);
							currItem->CPos += 1;
							if ((doc->docHyphenator->AutoCheck) && (currItem->CPos > 1))
							{
								Twort = "";
								Tcoun = 0;
								for (int hych = currItem->CPos-1; hych > -1; hych--)
								{
									Tcha = currItem->itemText.at(hych)->ch;
									if (Tcha == " ")
									{
										Tcoun = hych+1;
										break;
									}
									Twort.prepend(Tcha);
								}
								if (Twort != "")
								{
									if (doc->docHyphenator->Language != currItem->Language)
										doc->docHyphenator->slotNewDict(currItem->Language);
									doc->docHyphenator->slotHyphenateWord(currItem, Twort, Tcoun);
								}
							}
							currItem->Tinput = true;
							view->RefreshItem(currItem);
						}
						break;
					}
					view->slotDoCurs(true);
					if ((kk == Key_Left) || (kk == Key_Right) || (kk == Key_Up) || (kk == Key_Down))
					{
						keyrep = false;
						return;
					}
				}
				slotDocCh(false);
				break;
			}
		}
	}
	switch(kk)
	{
		case Key_Left:
		case Key_Right:
		case Key_Up:
		case Key_Down:
			_arrowKeyDown = true;
	}
	keyrep = false;
}

void ScribusApp::keyReleaseEvent(QKeyEvent *k)
{
	if (k->isAutoRepeat() || !_arrowKeyDown)
		return;
	switch(k->key())
	{
		case Key_Left:
		case Key_Right:
		case Key_Up:
		case Key_Down:
			_arrowKeyDown = false;
			for (uint i = 0; i < view->SelItem.count(); ++i)
				view->SelItem.at(i)->checkChanges(true);
			if (view->SelItem.count() > 1 && view->groupTransactionStarted())
				undoManager->commit();
	}
}

void ScribusApp::closeEvent(QCloseEvent *ce)
{
	QWidgetList windows = wsp->windowList();
	ScribusWin* tw;
	if (!windows.isEmpty())
	{
		singleClose = true;
		for ( int i = 0; i < static_cast<int>(windows.count()); ++i )
		{
			newActWin(windows.at(i));
			tw = ActWin;
			ActWin->close();
			if (tw == ActWin)
			{
				ce->ignore();
				singleClose = false;
				return;
			}
		}
		propertiesPalette->hide();
		outlinePalette->hide();
		scrapbookPalette->hide();
		bookmarkPalette->hide();
		layerPalette->hide();
		pagePalette->hide();
		measurementPalette->hide();
		docCheckerPalette->hide();
		// Shut down plugins before saving prefs to ensure
		// plugins can use prefs mgr from their cleanup routines.
		pluginManager->finalizePlugs();
		SavePrefs();
		delete prefsFile;
		UndoManager::deleteInstance();
		if ((Prefs.SaveAtQ) && (scrapbookPalette->Changed == true))
		{
			if (scrapbookPalette->ScFilename.isEmpty())
				scrapbookPalette->ScFilename = PrefsPfad+"/scrap13.scs";
			scrapbookPalette->Save();
		}
		if (scrapbookPalette->BibWin->Objekte.count() == 0)
			unlink(PrefsPfad+"/scrap13.scs");
		Prefs.AvailFonts.~SCFonts();
		exit(0);
	}
	else
	{
		propertiesPalette->hide();
		outlinePalette->hide();
		scrapbookPalette->hide();
		bookmarkPalette->hide();
		layerPalette->hide();
		pagePalette->hide();
		measurementPalette->hide();
		docCheckerPalette->hide();
		SavePrefs();
		UndoManager::deleteInstance();
		if ((Prefs.SaveAtQ) && (scrapbookPalette->Changed == true))
		{
			if (scrapbookPalette->ScFilename.isEmpty())
				scrapbookPalette->ScFilename = PrefsPfad+"/scrap13.scs";
			scrapbookPalette->Save();
		}
		if (scrapbookPalette->BibWin->Objekte.count() == 0)
			unlink(PrefsPfad+"/scrap13.scs");
		qApp->setOverrideCursor(QCursor(ArrowCursor), true);
		Prefs.AvailFonts.~SCFonts();
		pluginManager->finalizePlugs();
		delete prefsFile;
		exit(0);
	}
}

/////////////////////////////////////////////////////////////////////
// SLOT IMPLEMENTATION
/////////////////////////////////////////////////////////////////////

void ScribusApp::parsePagesString(QString pages, std::vector<int>* pageNs, int sourcePageCount)
{
	QString tmp = pages;
	QString token;
	int from, to, pageNr;
	do
	{
		if (tmp.find(",") == -1)
		{
			token = tmp;
			tmp = "";
		}
		else
		{
			token = tmp.left(tmp.find(","));
			tmp = tmp.right(tmp.length() - tmp.find(",") - 1);
		}

		token = token.stripWhiteSpace();
		if (token == "*") // Import all source doc pages
		{
			for (int i = 1; i <= sourcePageCount; ++i)
				pageNs->push_back(i);
		}
		else if (token.find("-") != -1) // import a range of source doc pages
		{
			from = QString(token.left(token.find("-"))).toInt();
			to = QString(token.right(token.length() - token.find("-") - 1)).toInt();
			if ((from != 0) && (to != 0))
			{
				if (from > sourcePageCount)
					from = sourcePageCount;
				if (to > sourcePageCount)
					to = sourcePageCount;
				if (from == to)
					pageNs->push_back(to);
				else if (from < to)
				{
					for (int i = from; i <= to; ++i)
						pageNs->push_back(i);
				}
				else
				{
					for (int i = from; i >= to; --i)
						pageNs->push_back(i);
				}
			}
		}
		else // import single source doc page
		{
			pageNr = token.toInt();
			if ((pageNr > 0) && (pageNr <= sourcePageCount))
				pageNs->push_back(pageNr);
		}
	} while (tmp != "");
}

bool ScribusApp::arrowKeyDown()
{
	return _arrowKeyDown;
}

bool ScribusApp::slotFileNew()
{
	bool retVal;
	NewDoc* dia = new NewDoc(this, &Prefs);
	if (dia->exec())
	{
		bool facingPages, autoframes;
		double pageWidth, pageHeight, topMargin, leftMargin, rightMargin, bottomMargin, numberCols, columnDistance;
		topMargin = dia->Top;
		leftMargin = dia->Left;
		rightMargin = dia->Right;
		bottomMargin = dia->Bottom;
		columnDistance = dia->Dist;
		pageWidth = dia->Pagebr;
		pageHeight = dia->Pageho;
		numberCols = dia->SpinBox10->value();
		autoframes = dia->AutoFrame->isChecked();
		facingPages = dia->Doppelseiten->isChecked();
		int orientation = dia->Orient;
		QString pagesize = dia->ComboBox1->currentText();
		retVal = doFileNew(pageWidth, pageHeight, topMargin, leftMargin, rightMargin, bottomMargin, columnDistance, numberCols, autoframes, facingPages, dia->ComboBox3->currentItem(),
		                dia->ErsteSeite->isChecked(), orientation, dia->PgNr->value(), pagesize);
		FMess->setText( tr("Ready"));
	}
	else
		retVal = false;
	delete dia;
	windowsMenuAboutToShow();
	return retVal;
}

bool ScribusApp::doFileNew(double b, double h, double tpr, double lr, double rr, double br, double ab, double sp,
                           bool atf, bool fp, int einh, bool firstleft, int Ori, int SNr, QString PageSize)
{
	QString cc;
	if (HaveDoc)
		doc->OpenNodes = outlinePalette->buildReopenVals();
	doc = new ScribusDoc(&Prefs);
	docCheckerPalette->clearErrorList();
	doc->docUnitIndex = einh;
	if (fp)
		doc->FirstPageLeft = firstleft;
	doc->PageOri = Ori;
	doc->PageSize = PageSize;
	doc->FirstPnum = SNr;
	doc->setName(doc->DocName+cc.setNum(DocNr));
	doc->HasCMS = true;
	doc->CMSSettings.DefaultInputProfile = Prefs.DCMSset.DefaultInputProfile;
	doc->CMSSettings.DefaultInputProfile2 = Prefs.DCMSset.DefaultInputProfile2;
	doc->CMSSettings.DefaultMonitorProfile = Prefs.DCMSset.DefaultMonitorProfile;
	doc->CMSSettings.DefaultPrinterProfile = Prefs.DCMSset.DefaultPrinterProfile;
	doc->CMSSettings.DefaultIntentPrinter = Prefs.DCMSset.DefaultIntentPrinter;
	doc->CMSSettings.DefaultIntentMonitor = Prefs.DCMSset.DefaultIntentMonitor;
	doc->CMSSettings.DefaultIntentMonitor2 = Prefs.DCMSset.DefaultIntentMonitor2;
	doc->CMSSettings.SoftProofOn = Prefs.DCMSset.SoftProofOn;
	doc->CMSSettings.GamutCheck = Prefs.DCMSset.GamutCheck;
	doc->CMSSettings.BlackPoint = Prefs.DCMSset.BlackPoint;
	doc->CMSSettings.CMSinUse = Prefs.DCMSset.CMSinUse;
	doc->PDF_Options.SolidProf = doc->CMSSettings.DefaultInputProfile2;
	doc->PDF_Options.ImageProf = doc->CMSSettings.DefaultInputProfile;
	doc->PDF_Options.PrintProf = doc->CMSSettings.DefaultPrinterProfile;
	doc->PDF_Options.Intent = doc->CMSSettings.DefaultIntentMonitor;
	doc->PDF_Options.Intent2 = doc->CMSSettings.DefaultIntentMonitor2;
	
	struct LPIData lpo;
	lpo.Frequency = 75;
	lpo.SpotFunc = 2;
	lpo.Angle = 105;
	doc->PDF_Options.LPISettings.insert("Cyan", lpo);
	lpo.Angle = 75;
	doc->PDF_Options.LPISettings.insert("Magenta", lpo);
	lpo.Angle = 90;
	doc->PDF_Options.LPISettings.insert("Yellow", lpo);
	lpo.Angle = 45;
	doc->PDF_Options.LPISettings.insert("Black", lpo);
	doc->ActiveLayer = 0;
	HaveDoc++;
	DocNr++;
	doc->appMode = NormalMode;
	doc->PageColors = Prefs.DColors;
	doc->loading = true;
	ScribusWin* w = new ScribusWin(wsp, doc);
	if (view!=NULL)
	{
		disconnect( scrActions["toolsZoomIn"], SIGNAL(activated()) , view, SLOT(slotZoomIn()) );
		disconnect( scrActions["toolsZoomOut"], SIGNAL(activated()) , view, SLOT(slotZoomOut()) );	
	}
	view = new ScribusView(w, doc, &Prefs);
	view->Scale = 1.0*Prefs.DisScale;
	w->setView(view);
	ActWin = w;
	doc->WinHan = w;
	w->setCentralWidget(view);
	connect(undoManager, SIGNAL(undoRedoDone()), view, SLOT(DrawNew()));
	connect(w, SIGNAL(Schliessen()), this, SLOT(DoFileClose()));
	connect( scrActions["toolsZoomIn"], SIGNAL(activated()) , view, SLOT(slotZoomIn()) );
	connect( scrActions["toolsZoomOut"], SIGNAL(activated()) , view, SLOT(slotZoomOut()) );

	//	connect(w, SIGNAL(SaveAndClose()), this, SLOT(DoSaveClose()));
	if (CMSavail)
	{
#ifdef HAVE_CMS
		doc->SoftProofing = Prefs.DCMSset.SoftProofOn;
		doc->Gamut = Prefs.DCMSset.GamutCheck;
		CMSuse = Prefs.DCMSset.CMSinUse;
		doc->IntentPrinter = Prefs.DCMSset.DefaultIntentPrinter;
		doc->IntentMonitor = Prefs.DCMSset.DefaultIntentMonitor;
		SoftProofing = Prefs.DCMSset.SoftProofOn;
		Gamut = Prefs.DCMSset.GamutCheck;
		BlackPoint = Prefs.DCMSset.BlackPoint;
		IntentPrinter = Prefs.DCMSset.DefaultIntentPrinter;
		IntentMonitor = Prefs.DCMSset.DefaultIntentMonitor;
		doc->OpenCMSProfiles(InputProfiles, MonitorProfiles, PrinterProfiles);
		stdProofG = doc->stdProof;
		stdTransG = doc->stdTrans;
		stdProofImgG = doc->stdProofImg;
		stdTransImgG = doc->stdTransImg;
		stdProofCMYKG = doc->stdProofCMYK;
		stdTransCMYKG = doc->stdTransCMYK;
		stdTransRGBG = doc->stdTransRGB;
		CMSoutputProf = doc->DocOutputProf;
		CMSprinterProf = doc->DocPrinterProf;
		if (static_cast<int>(cmsGetColorSpace(doc->DocInputProf)) == icSigRgbData)
			doc->CMSSettings.ComponentsInput2 = 3;
		if (static_cast<int>(cmsGetColorSpace(doc->DocInputProf)) == icSigCmykData)
			doc->CMSSettings.ComponentsInput2 = 4;
		if (static_cast<int>(cmsGetColorSpace(doc->DocInputProf)) == icSigCmyData)
			doc->CMSSettings.ComponentsInput2 = 3;
		if (static_cast<int>(cmsGetColorSpace(doc->DocPrinterProf)) == icSigRgbData)
			doc->CMSSettings.ComponentsPrinter = 3;
		if (static_cast<int>(cmsGetColorSpace(doc->DocPrinterProf)) == icSigCmykData)
			doc->CMSSettings.ComponentsPrinter = 4;
		if (static_cast<int>(cmsGetColorSpace(doc->DocPrinterProf)) == icSigCmyData)
			doc->CMSSettings.ComponentsPrinter = 3;
		doc->PDF_Options.SComp = doc->CMSSettings.ComponentsInput2;
#endif
		if (Prefs.DCMSset.CMSinUse)
			RecalcColors();
	}
	doc->setPage(b, h, tpr, lr, rr, br, sp, ab, atf, fp);
	doc->loading = false;
	slotNewPage(0);
	doc->loading = true;
	HaveNewDoc();
	doc->DocPages = doc->Pages;
	doc->Pages = doc->MasterPages;
	doc->PageC = doc->MasterPages.count();
	bool atfb = doc->PageAT;
	doc->PageAT = false;
	slotNewPage(0);
	doc->PageAT = atfb;
	doc->MasterNames["Normal"] = 0;
	doc->Pages.at(0)->setPageName("Normal");
	doc->MasterPages = doc->Pages;
	doc->PageC = doc->DocPages.count();
	doc->Pages = doc->DocPages;
	doc->MasterP = false;
	doc->Pages.at(0)->MPageNam = "Normal";
	doc->setUnModified();
	doc->loading = false;
	doc->DocItems = doc->Items;
	doc->currentPage = doc->Pages.at(0);
	doc->OpenNodes.clear();
	outlinePalette->BuildTree(doc);
	pagePalette->Rebuild();
	bookmarkPalette->BView->clear();
	if ( wsp->windowList().isEmpty() )
		w->showMaximized();
	else
		w->show();
	view->show();
	connect(doc->ASaveTimer, SIGNAL(timeout()), w, SLOT(slotAutoSave()));
	connect(w, SIGNAL(AutoSaved()), this, SLOT(slotAutoSaved()));
	connect(fileWatcher, SIGNAL(fileChanged(QString )), view, SLOT(updatePict(QString)));
	connect(fileWatcher, SIGNAL(fileDeleted(QString )), view, SLOT(removePict(QString)));
	doc->AutoSave = Prefs.AutoSave;
	doc->AutoSaveTime = Prefs.AutoSaveTime;
	if (doc->AutoSave)
		doc->ASaveTimer->start(Prefs.AutoSaveTime);
	scrActions["fileSave"]->setEnabled(false);

	undoManager->switchStack(doc->DocName);

	return true;
}

void ScribusApp::newView()
{
	ScribusWin* w = new ScribusWin(wsp, doc);
	view = new ScribusView(w, doc, &Prefs);
	view->Scale = 1.0*Prefs.DisScale;
	w->setView(view);
	ActWin = w;
	w->setCentralWidget(view);
	connect(undoManager, SIGNAL(undoRedoDone()), view, SLOT(DrawNew()));
	connect(w, SIGNAL(Schliessen()), this, SLOT(DoFileClose()));
}

bool ScribusApp::DoSaveClose()
{
	return slotFileSave();
}

void ScribusApp::windowsMenuAboutToShow()
{
	for( QMap<QString, QGuardedPtr<ScrAction> >::Iterator it = scrWindowsActions.begin(); it!=scrWindowsActions.end(); ++it )
		scrMenuMgr->removeMenuItem((*it), "Windows");

	scrWindowsActions.clear();
	scrMenuMgr->clearMenu("Windows");

	scrWindowsActions.insert("windowsCascade", new ScrAction(tr("&Cascade"), QKeySequence(), this, "windowsCascade"));
	scrWindowsActions.insert("windowsTile", new ScrAction(tr("&Tile"), QKeySequence(), this, "windowstile"));
	connect( scrWindowsActions["windowsCascade"], SIGNAL(activated()) , wsp, SLOT(cascade()) );
	connect( scrWindowsActions["windowsTile"], SIGNAL(activated()) , wsp, SLOT(tile()) );

	scrMenuMgr->addMenuItem(scrWindowsActions["windowsCascade"], "Windows");
	scrMenuMgr->addMenuItem(scrWindowsActions["windowsTile"], "Windows");
	scrMenuMgr->addMenuSeparator("Windows");

	if ( wsp->windowList().isEmpty() )
	{
		scrWindowsActions["windowsCascade"]->setEnabled(false);
		scrWindowsActions["windowsTile"]->setEnabled(false);
	}

	QWidgetList windows = wsp->windowList();
	for ( int i = 0; i < static_cast<int>(windows.count()); ++i )
	{
		QString docInWindow=windows.at(i)->caption();
		scrWindowsActions.insert(docInWindow, new ScrAction( ScrAction::Window, QIconSet(), docInWindow, QKeySequence(), this, docInWindow, i));
		scrWindowsActions[docInWindow]->setToggleAction(true);
		connect( scrWindowsActions[docInWindow], SIGNAL(activatedData(int)), this, SLOT(windowsMenuActivated(int)) );
		scrMenuMgr->addMenuItem(scrWindowsActions[docInWindow], "Windows");
		scrWindowsActions[docInWindow]->setOn(wsp->activeWindow() == windows.at(i));
	}
}

void ScribusApp::newActWin(QWidget *w)
{
	if (w == NULL)
	{
		ActWin = NULL;
		return;
	}
	QString oldDocName = "";
	if (ActWin && ActWin->doc)
		oldDocName = ActWin->doc->DocName;

	ActWin = (ScribusWin*)w;
/*	if (doc != NULL)
	{
		if ((HaveDoc) && (doc != ActWin->doc))
			doc->OpenNodes = outlinePalette->buildReopenVals();
	} */
	docCheckerPalette->clearErrorList();
	QString newDocName = "";
	if (ActWin && ActWin->doc)
		newDocName = ActWin->doc->DocName;
	if (oldDocName != newDocName)
		undoManager->switchStack(newDocName);

	if (view!=NULL)
	{
		disconnect( scrActions["toolsZoomIn"], SIGNAL(activated()) , view, SLOT(slotZoomIn()) );
		disconnect( scrActions["toolsZoomOut"], SIGNAL(activated()) , view, SLOT(slotZoomOut()) );
	}
	doc = ActWin->doc;
	view = ActWin->view;
	pagePalette->SetView(view);
	ScribusWin* swin;
	if (!doc->loading)
	{
		scanDocument();
		docCheckerPalette->buildErrorList(doc);
		SwitchWin();
		QWidgetList windows = wsp->windowList();
		for ( int i = 0; i < static_cast<int>(windows.count()); ++i )
		{
			swin = (ScribusWin*)windows.at(i);
			if (swin->muster != NULL)
				swin->muster->hide();
		}
		if (doc->TemplateMode)
			ActWin->muster->show();
		setAppMode(doc->appMode);
	}
	w->setFocus();
	if (w->isMaximized())
		wsp->setScrollBarsEnabled(false);
	else
		wsp->setScrollBarsEnabled(true);
	scrActions["viewShowMargins"]->setOn(doc->guidesSettings.marginsShown);
	scrActions["viewShowFrames"]->setOn(doc->guidesSettings.framesShown);
	scrActions["viewShowGrid"]->setOn(doc->guidesSettings.gridShown);
	scrActions["viewShowGuides"]->setOn(doc->guidesSettings.guidesShown);
	scrActions["viewShowBaseline"]->setOn(doc->guidesSettings.baseShown);
	scrActions["viewShowImages"]->setOn(doc->guidesSettings.showPic);
	scrActions["viewShowTextChain"]->setOn(doc->guidesSettings.linkShown);
	if (!doc->TemplateMode)
		pagePalette->Rebuild();
	outlinePalette->BuildTree(doc);
//	outlinePalette->reopenTree(doc->OpenNodes);
	bookmarkPalette->BView->NrItems = doc->NrItems;
	bookmarkPalette->BView->First = doc->First;
	bookmarkPalette->BView->Last = doc->Last;
	RestoreBookMarks();
	if (!doc->loading)
	{
		if (view->SelItem.count() != 0)
		{
			HaveNewSel(view->SelItem.at(0)->itemType());
			view->EmitValues(view->SelItem.at(0));
		}
		else
			HaveNewSel(-1);
	}
	
	connect( scrActions["toolsZoomIn"], SIGNAL(activated()) , view, SLOT(slotZoomIn()) );
	connect( scrActions["toolsZoomOut"], SIGNAL(activated()) , view, SLOT(slotZoomOut()) );
}

void ScribusApp::windowsMenuActivated( int id )
{
	if (HaveDoc)
		doc->OpenNodes = outlinePalette->buildReopenVals();
	QWidget* w = wsp->windowList().at( id );
	if ( w )
		w->showNormal();
	newActWin(w);
}

bool ScribusApp::SetupDoc()
{
	bool fp = doc->PageFP;
	double tpr2, lr2, rr2, br2;
	bool ret = false;
	ReformDoc* dia = new ReformDoc(this, doc);
	if (dia->exec())
	{
		slotChangeUnit(dia->unitCombo->currentItem(), false);
		tpr2 = dia->topR->value() / doc->unitRatio;
		lr2 = dia->leftR->value() / doc->unitRatio;
		rr2 = dia->rightR->value() / doc->unitRatio;
		br2 = dia->bottomR->value() / doc->unitRatio;
		fp = dia->facingPages->isChecked();
		if (fp)
			doc->FirstPageLeft = dia->firstPage->isChecked();
		doc->FirstPnum = dia->pageNumber->value();
		doc->resetPage(tpr2, lr2, rr2, br2, fp);
		doc->guidesSettings.before = dia->tabGuides->inBackground->isChecked();
		doc->marginColored = dia->checkUnprintable->isChecked();
		doc->papColor = dia->colorPaper;
		doc->guidesSettings.marginsShown = dia->tabGuides->marginBox->isChecked();
		doc->guidesSettings.framesShown = dia->checkFrame->isChecked();
		doc->guidesSettings.gridShown = dia->tabGuides->checkGrid->isChecked();
		doc->guidesSettings.guidesShown = dia->tabGuides->guideBox->isChecked();
		doc->guidesSettings.baseShown = dia->tabGuides->baselineBox->isChecked();
		doc->guidesSettings.showPic = dia->checkPictures->isChecked();
		doc->guidesSettings.linkShown = dia->checkLink->isChecked();
		doc->guidesSettings.grabRad = dia->tabGuides->grabDistance->value();
		doc->guidesSettings.guideRad = dia->tabGuides->snapDistance->value() / doc->unitRatio;
		doc->guidesSettings.minorGrid = dia->tabGuides->minorSpace->value() / doc->unitRatio;
		doc->guidesSettings.majorGrid = dia->tabGuides->majorSpace->value() / doc->unitRatio;
		doc->guidesSettings.minorColor = dia->tabGuides->colorMinorGrid;
		doc->guidesSettings.majorColor = dia->tabGuides->colorMajorGrid;
		doc->guidesSettings.margColor = dia->tabGuides->colorMargin;
		doc->guidesSettings.guideColor = dia->tabGuides->colorGuides;
		doc->guidesSettings.baseColor = dia->tabGuides->colorBaselineGrid;
		doc->checkerProfiles = dia->tabDocChecker->checkerProfile;
		doc->curCheckProfile = dia->tabDocChecker->curCheckProfile->currentText();
		doc->typographicSetttings.valueSuperScript = dia->tabTypo->superDisplacement->value();
		doc->typographicSetttings.scalingSuperScript = dia->tabTypo->superScaling->value();
		doc->typographicSetttings.valueSubScript = dia->tabTypo->subDisplacement->value();
		doc->typographicSetttings.scalingSubScript = dia->tabTypo->subScaling->value();
		doc->typographicSetttings.valueSmallCaps = dia->tabTypo->capsScaling->value();
		doc->typographicSetttings.autoLineSpacing = dia->tabTypo->autoLine->value();
		doc->typographicSetttings.valueBaseGrid = dia->tabGuides->baseGrid->value() / doc->unitRatio;
		doc->typographicSetttings.offsetBaseGrid = dia->tabGuides->baseOffset->value() / doc->unitRatio;
		doc->toolSettings.defFont = dia->tabTools->fontComboText->currentText();
		doc->toolSettings.defSize = dia->tabTools->sizeComboText->currentText().left(2).toInt() * 10;
		doc->toolSettings.dStrokeText = dia->tabTools->colorComboStrokeText->currentText();
		if (doc->toolSettings.dStrokeText == tr("None"))
			doc->toolSettings.dStrokeText = "None";
		doc->toolSettings.dPenText = dia->tabTools->colorComboText->currentText();
		if (doc->toolSettings.dPenText == tr("None"))
			doc->toolSettings.dPenText = "None";
		doc->toolSettings.dCols = dia->tabTools->columnsText->value();
		doc->toolSettings.dGap = dia->tabTools->gapText->value() / doc->unitRatio;
		doc->toolSettings.dPen = dia->tabTools->colorComboLineShape->currentText();
		if (doc->toolSettings.dPen == tr("None"))
			doc->toolSettings.dPen = "None";
		doc->toolSettings.dBrush = dia->tabTools->comboFillShape->currentText();
		if (doc->toolSettings.dBrush == tr("None"))
			doc->toolSettings.dBrush = "None";
		doc->toolSettings.dShade = dia->tabTools->shadingFillShape->value();
		doc->toolSettings.dShade2 = dia->tabTools->shadingLineShape->value();
		switch (dia->tabTools->comboStyleShape->currentItem())
		{
		case 0:
			doc->toolSettings.dLineArt = SolidLine;
			break;
		case 1:
			doc->toolSettings.dLineArt = DashLine;
			break;
		case 2:
			doc->toolSettings.dLineArt = DotLine;
			break;
		case 3:
			doc->toolSettings.dLineArt = DashDotLine;
			break;
		case 4:
			doc->toolSettings.dLineArt = DashDotDotLine;
			break;
		}
		doc->toolSettings.dWidth = dia->tabTools->lineWidthShape->value();
		doc->toolSettings.dStartArrow = dia->tabTools->startArrow->currentItem();
		doc->toolSettings.dEndArrow = dia->tabTools->endArrow->currentItem();
		doc->toolSettings.magMin = dia->tabTools->minimumZoom->value();
		doc->toolSettings.magMax = dia->tabTools->maximumZoom->value();
		doc->toolSettings.magStep = dia->tabTools->zoomStep->value();
		doc->toolSettings.dPenLine = dia->tabTools->colorComboLine->currentText();
		if (doc->toolSettings.dPenLine == tr("None"))
			doc->toolSettings.dPenLine = "None";
		doc->toolSettings.dShadeLine = dia->tabTools->shadingLine->value();
		switch (dia->tabTools->comboStyleLine->currentItem())
		{
		case 0:
			doc->toolSettings.dLstyleLine = SolidLine;
			break;
		case 1:
			doc->toolSettings.dLstyleLine = DashLine;
			break;
		case 2:
			doc->toolSettings.dLstyleLine = DotLine;
			break;
		case 3:
			doc->toolSettings.dLstyleLine = DashDotLine;
			break;
		case 4:
			doc->toolSettings.dLstyleLine = DashDotDotLine;
			break;
		}
		doc->toolSettings.dWidthLine = dia->tabTools->lineWidthLine->value();
		doc->toolSettings.dBrushPict = dia->tabTools->comboFillImage->currentText();
		if (doc->toolSettings.dBrushPict == tr("None"))
			doc->toolSettings.dBrushPict = "None";
		doc->toolSettings.shadePict = dia->tabTools->shadingFillImage->value();
		doc->toolSettings.scaleX = static_cast<double>(dia->tabTools->scalingHorizontal->value()) / 100.0;
		doc->toolSettings.scaleY = static_cast<double>(dia->tabTools->scalingVertical->value()) / 100.0;
		doc->toolSettings.scaleType = dia->tabTools->buttonGroup3->isChecked();
		doc->toolSettings.aspectRatio = dia->tabTools->checkRatioImage->isChecked();
		dia->tabTools->polyWidget->getValues(&doc->toolSettings.polyC, &doc->toolSettings.polyFd, &doc->toolSettings.polyF, &doc->toolSettings.polyS, &doc->toolSettings.polyR);
		doc->ScratchBottom = dia->bottomScratch->value() / doc->unitRatio;
		doc->ScratchLeft = dia->leftScratch->value() / doc->unitRatio;
		doc->ScratchRight = dia->rightScratch->value() / doc->unitRatio;
		doc->ScratchTop = dia->topScratch->value() / doc->unitRatio;
		doc->AutoSave = dia->groupAutoSave->isChecked();
		doc->AutoSaveTime = dia->autoSaveTime->value() * 60 * 1000;
		if (doc->AutoSave)
		{
			doc->ASaveTimer->stop();
			doc->ASaveTimer->start(doc->AutoSaveTime);
		}
		doc->docHyphenator->slotNewDict(dia->tabHyphenator->language->currentText());
		doc->docHyphenator->slotNewSettings(dia->tabHyphenator->wordLen->value(),
																	!dia->tabHyphenator->verbose->isChecked(),
																	dia->tabHyphenator->input->isChecked(),
																	dia->tabHyphenator->maxCount->value());
		if (CMSavail)
		{
			dia->tabColorManagement->setValues();
			if (dia->tabColorManagement->changed)
			{
				FMess->setText( tr("Adjusting Colors"));
				FProg->reset();
				int cc = doc->PageColors.count() + view->CountElements();
				FProg->setTotalSteps(cc);
#ifdef HAVE_CMS
				doc->HasCMS = doc->CMSSettings.CMSinUse;
				doc->SoftProofing = doc->CMSSettings.SoftProofOn;
				doc->Gamut = doc->CMSSettings.GamutCheck;
				CMSuse = doc->CMSSettings.CMSinUse;
				doc->IntentPrinter = doc->CMSSettings.DefaultIntentPrinter;
				doc->IntentMonitor = doc->CMSSettings.DefaultIntentMonitor;
				SoftProofing = doc->CMSSettings.SoftProofOn;
				Gamut = doc->CMSSettings.GamutCheck;
				BlackPoint = doc->CMSSettings.BlackPoint;
				IntentPrinter = doc->CMSSettings.DefaultIntentPrinter;
				IntentMonitor = doc->CMSSettings.DefaultIntentMonitor;
				qApp->setOverrideCursor(QCursor(waitCursor), true);
				doc->CloseCMSProfiles();
				doc->OpenCMSProfiles(InputProfiles, MonitorProfiles, PrinterProfiles);
				stdProofG = doc->stdProof;
				stdTransG = doc->stdTrans;
				stdProofImgG = doc->stdProofImg;
				stdTransImgG = doc->stdTransImg;
				stdProofCMYKG = doc->stdProofCMYK;
				stdTransCMYKG = doc->stdTransCMYK;
				stdTransRGBG = doc->stdTransRGB;
				CMSoutputProf = doc->DocOutputProf;
				CMSprinterProf = doc->DocPrinterProf;
				if (static_cast<int>(cmsGetColorSpace(doc->DocInputProf)) == icSigRgbData)
					doc->CMSSettings.ComponentsInput2 = 3;
				if (static_cast<int>(cmsGetColorSpace(doc->DocInputProf)) == icSigCmykData)
					doc->CMSSettings.ComponentsInput2 = 4;
				if (static_cast<int>(cmsGetColorSpace(doc->DocInputProf)) == icSigCmyData)
					doc->CMSSettings.ComponentsInput2 = 3;
				if (static_cast<int>(cmsGetColorSpace(doc->DocPrinterProf)) == icSigRgbData)
					doc->CMSSettings.ComponentsPrinter = 3;
				if (static_cast<int>(cmsGetColorSpace(doc->DocPrinterProf)) == icSigCmykData)
					doc->CMSSettings.ComponentsPrinter = 4;
				if (static_cast<int>(cmsGetColorSpace(doc->DocPrinterProf)) == icSigCmyData)
					doc->CMSSettings.ComponentsPrinter = 3;
				doc->PDF_Options.SComp = doc->CMSSettings.ComponentsInput2;
				doc->PDF_Options.SolidProf = doc->CMSSettings.DefaultInputProfile2;
				doc->PDF_Options.ImageProf = doc->CMSSettings.DefaultInputProfile;
				doc->PDF_Options.PrintProf = doc->CMSSettings.DefaultPrinterProfile;
				doc->PDF_Options.Intent = doc->CMSSettings.DefaultIntentMonitor;
				RecalcColors(FProg);
				view->RecalcPictures(&InputProfiles, FProg);
#endif
				FProg->setProgress(cc);
				qApp->setOverrideCursor(QCursor(arrowCursor), true);
				FMess->setText("");
				FProg->reset();
			}
		}
		uint a = 0;
		SCFontsIterator it(Prefs.AvailFonts);
		for ( ; it.current() ; ++it)
		{
			it.current()->EmbedPS = dia->tabFonts->fontFlags[it.currentKey()].FlagPS;
			it.current()->UseFont = dia->tabFonts->fontFlags[it.currentKey()].FlagUse;
			it.current()->Subset = dia->tabFonts->fontFlags[it.currentKey()].FlagSub;
		}
		a = 0;
		QMap<QString,QString>::Iterator itfsu;
		Prefs.GFontSub.clear();
		for (itfsu = dia->tabFonts->RList.begin(); itfsu != dia->tabFonts->RList.end(); ++itfsu)
		{
			Prefs.GFontSub[itfsu.key()] = dia->tabFonts->FlagsRepl.at(a)->currentText();
			a++;
		}
		QStringList uf = doc->UsedFonts.keys();
		QMap<QString,QFont>::Iterator it3;
		for (it3 = doc->UsedFonts.begin(); it3 != doc->UsedFonts.end(); ++it3)
		{
			FT_Done_Face(doc->FFonts[it3.key()]);
		}
		doc->UsedFonts.clear();
		QStringList::Iterator it3a;
		for (it3a = uf.begin(); it3a != uf.end(); ++it3a)
		{
			doc->AddFont((*it3a), Prefs.AvailFonts[(*it3a)]->Font);
		}
		FontSub->RebuildList(&Prefs, doc);
		propertiesPalette->Fonts->RebuildList(&Prefs, doc);
		doc->PDF_Options.Thumbnails = dia->tabPDF->CheckBox1->isChecked();
		doc->PDF_Options.Compress = dia->tabPDF->Compression->isChecked();
		doc->PDF_Options.CompressMethod = dia->tabPDF->CMethod->currentItem();
		doc->PDF_Options.Quality = dia->tabPDF->CQuality->currentItem();
		doc->PDF_Options.Resolution = dia->tabPDF->Resolution->value();
		doc->PDF_Options.RecalcPic = dia->tabPDF->DSColor->isChecked();
		doc->PDF_Options.PicRes = dia->tabPDF->ValC->value();
		doc->PDF_Options.Bookmarks = dia->tabPDF->CheckBM->isChecked();
		doc->PDF_Options.Binding = dia->tabPDF->ComboBind->currentItem();
		doc->PDF_Options.MirrorH = dia->tabPDF->MirrorH->isOn();
		doc->PDF_Options.MirrorV = dia->tabPDF->MirrorV->isOn();
		doc->PDF_Options.RotateDeg = dia->tabPDF->RotateDeg->currentItem() * 90;
		doc->PDF_Options.Articles = dia->tabPDF->Article->isChecked();
		doc->PDF_Options.Encrypt = dia->tabPDF->Encry->isChecked();
		doc->PDF_Options.UseLPI = dia->tabPDF->UseLPI->isChecked();
		doc->PDF_Options.useLayers = dia->tabPDF->useLayers->isChecked();
		doc->PDF_Options.BleedBottom = dia->tabPDF->BleedBottom->value() / doc->unitRatio;
		doc->PDF_Options.BleedTop = dia->tabPDF->BleedTop->value() / doc->unitRatio;
		doc->PDF_Options.BleedLeft = dia->tabPDF->BleedLeft->value() / doc->unitRatio;
		doc->PDF_Options.BleedRight = dia->tabPDF->BleedRight->value() / doc->unitRatio;
		if (dia->tabPDF->Encry->isChecked())
		{
			int Perm = -64;
			if (dia->tabPDF->PDFVersionCombo->currentItem() == 1)
				Perm &= ~0x00240000;
			if (dia->tabPDF->PrintSec->isChecked())
				Perm += 4;
			if (dia->tabPDF->ModifySec->isChecked())
				Perm += 8;
			if (dia->tabPDF->CopySec->isChecked())
				Perm += 16;
			if (dia->tabPDF->AddSec->isChecked())
				Perm += 32;
			doc->PDF_Options.Permissions = Perm;
			doc->PDF_Options.PassOwner = dia->tabPDF->PassOwner->text();
			doc->PDF_Options.PassUser = dia->tabPDF->PassUser->text();
		}
		if (dia->tabPDF->PDFVersionCombo->currentItem() == 0)
			doc->PDF_Options.Version = PDFOptions::PDFVersion_13;
		if (dia->tabPDF->PDFVersionCombo->currentItem() == 1)
			doc->PDF_Options.Version = PDFOptions::PDFVersion_14;
		if (dia->tabPDF->PDFVersionCombo->currentItem() == 2)
			doc->PDF_Options.Version = PDFOptions::PDFVersion_15;
		if (dia->tabPDF->PDFVersionCombo->currentItem() == 3)
			doc->PDF_Options.Version = PDFOptions::PDFVersion_X3;
		if (dia->tabPDF->OutCombo->currentItem() == 0)
		{
			doc->PDF_Options.isGrayscale = false;
			doc->PDF_Options.UseRGB = true;
			doc->PDF_Options.UseProfiles = false;
			doc->PDF_Options.UseProfiles2 = false;
		}
		else
		{
			if (dia->tabPDF->OutCombo->currentItem() == 3)
			{
				doc->PDF_Options.isGrayscale = true;
				doc->PDF_Options.UseRGB = false;
				doc->PDF_Options.UseProfiles = false;
				doc->PDF_Options.UseProfiles2 = false;
			}
			else
			{
				doc->PDF_Options.isGrayscale = false;
				doc->PDF_Options.UseRGB = false;
#ifdef HAVE_CMS
				if (CMSuse)
				{
					doc->PDF_Options.UseProfiles = dia->tabPDF->EmbedProfs->isChecked();
					doc->PDF_Options.UseProfiles2 = dia->tabPDF->EmbedProfs2->isChecked();
					doc->PDF_Options.Intent = dia->tabPDF->IntendS->currentItem();
					doc->PDF_Options.Intent2 = dia->tabPDF->IntendI->currentItem();
					doc->PDF_Options.EmbeddedI = dia->tabPDF->NoEmbedded->isChecked();
					doc->PDF_Options.SolidProf = dia->tabPDF->SolidPr->currentText();
					doc->PDF_Options.ImageProf = dia->tabPDF->ImageP->currentText();
					doc->PDF_Options.PrintProf = dia->tabPDF->PrintProfC->currentText();
					}
#endif
				}
		}
		
		doc->docItemAttributes = *(dia->tabDocItemAttributes->getNewAttributes());
		doc->docToCSetups = *(dia->tabTOCIndexPrefs->getNewToCs());
		
		scrActions["viewShowMargins"]->setOn(doc->guidesSettings.marginsShown);
		scrActions["viewShowFrames"]->setOn(doc->guidesSettings.framesShown);
		scrActions["viewShowGrid"]->setOn(doc->guidesSettings.gridShown);
		scrActions["viewShowGuides"]->setOn(doc->guidesSettings.guidesShown);
		scrActions["viewShowBaseline"]->setOn(doc->guidesSettings.baseShown);
		scrActions["viewShowImages"]->setOn(doc->guidesSettings.showPic);
		scrActions["viewShowTextChain"]->setOn(doc->guidesSettings.linkShown);
		for (uint b=0; b<doc->Items.count(); ++b)
		{
			if (doc->Items.at(b)->itemType() == PageItem::ImageFrame)
				doc->Items.at(b)->PicArt = doc->guidesSettings.showPic;
		}
		view->reformPages();
		view->GotoPage(doc->currentPage->PageNr);
		view->DrawNew();
		propertiesPalette->ShowCMS();
		pagePalette->RebuildPage();
		slotDocCh();
		ret = true;
	}
	delete dia;
	return ret;
}

void ScribusApp::SwitchWin()
{
	int a;
	ColorList::Iterator it;
	QPixmap pm = QPixmap(15, 15);
	a = 0;
	ColorMenC->clear();
	ColorMenC->insertItem( tr("None"));
	for (it = doc->PageColors.begin(); it != doc->PageColors.end(); ++it)
	{
		pm.fill(doc->PageColors[it.key()].getRGBColor());
		ColorMenC->insertItem(pm, it.key());
		if (it.key() == doc->toolSettings.dBrush)
			ColorMenC->setCurrentItem(a);
		a++;
	}
	buildFontMenu();
#ifdef HAVE_CMS
	SoftProofing = doc->SoftProofing;
	Gamut = doc->Gamut;
	IntentPrinter = doc->IntentPrinter;
	IntentMonitor = doc->IntentMonitor;
	stdProofG = doc->stdProof;
	stdTransG = doc->stdTrans;
	stdProofImgG = doc->stdProofImg;
	stdTransImgG = doc->stdTransImg;
	stdProofCMYKG = doc->stdProofCMYK;
	stdTransCMYKG = doc->stdTransCMYK;
	stdTransRGBG = doc->stdTransRGB;
	CMSoutputProf = doc->DocOutputProf;
	CMSprinterProf = doc->DocPrinterProf;
	CMSuse = doc->CMSSettings.CMSinUse;
#endif
	propertiesPalette->Cpal->SetColors(doc->PageColors);
	propertiesPalette->Cpal->ChooseGrad(0);
	ActWin->setCaption(doc->DocName);
	scrActions["shade100"]->setOn(true);
	//ShadeMenu->setItemChecked(ShadeMenu->idAt(11), true);
	propertiesPalette->SetDoc(doc);
	propertiesPalette->updateCList();
	pagePalette->SetView(view);
	propertiesPalette->Spal->setFormats(doc);
	propertiesPalette->SetLineFormats(doc);
	propertiesPalette->startArrow->rebuildList(&doc->arrowStyles);
	propertiesPalette->endArrow->rebuildList(&doc->arrowStyles);
	FontSub->RebuildList(&Prefs, doc);
	propertiesPalette->Fonts->RebuildList(&Prefs, doc);
	layerPalette->setLayers(&doc->Layers, &doc->ActiveLayer);
	view->LaMenu();
	view->setLayMenTxt(doc->ActiveLayer);
	doc->currentParaStyle = 0;
	slotChangeUnit(doc->docUnitIndex, false);
	if (doc->EditClip)
	{
		doc->EditClip = !doc->EditClip;
		ToggleFrameEdit();
	}
	scrActions["fileClose"]->setEnabled(true);
	if (doc->TemplateMode)
	{
		scrActions["pageInsert"]->setEnabled(false);
		scrActions["pageDelete"]->setEnabled(false);
		scrActions["pageCopy"]->setEnabled(false);
		scrActions["pageMove"]->setEnabled(false);
		scrActions["pageApplyTemplate"]->setEnabled(false);
		scrActions["editTemplates"]->setEnabled(false);
		scrActions["fileNew"]->setEnabled(false);
		scrActions["fileSave"]->setEnabled(doc->isModified());
		scrActions["fileOpen"]->setEnabled(false);
		scrActions["fileClose"]->setEnabled(false);
		scrActions["fileRevert"]->setEnabled(false);
		scrMenuMgr->setMenuEnabled("FileOpenRecent", false);
		pagePalette->DisablePal();
	}
	else
	{
		scrMenuMgr->setMenuEnabled("Page", true);
		scrActions["editTemplates"]->setEnabled(true);
		scrActions["fileNew"]->setEnabled(true);
		scrActions["fileOpen"]->setEnabled(true);
		scrActions["fileClose"]->setEnabled(true);
		scrActions["fileSave"]->setEnabled(doc->isModified());
		//CB TODO  Huh? Why different to the above?, fileMenu->setItemEnabled(M_FileSave, ActWin->MenuStat[2]);
		scrActions["fileSaveAs"]->setEnabled(ActWin->MenuStat[3]);
		scrActions["fileCollect"]->setEnabled(ActWin->MenuStat[3]);
		scrActions["fileRevert"]->setEnabled(false);
		scrMenuMgr->setMenuEnabled("FileOpenRecent", true);

		bool setter = doc->Pages.count() > 1 ? true : false;
		scrActions["pageDelete"]->setEnabled(setter);
		scrActions["pageMove"]->setEnabled(setter);

		if (doc->isModified())
			slotDocCh(false);
		scrActions["fileSaveAs"]->setEnabled(true);
		scrActions["fileCollect"]->setEnabled(true);
		pagePalette->EnablePal();
	}
}

void ScribusApp::HaveNewDoc()
{
	int a;
	scrActions["filePrint"]->setEnabled(true);
	scrActions["fileSave"]->setEnabled(false);
	scrActions["fileClose"]->setEnabled(true);
	scrActions["fileDocSetup"]->setEnabled(true);
	scrActions["fileDocInfo"]->setEnabled(true);
	scrActions["fileRevert"]->setEnabled(false);
	scrActions["fileCollect"]->setEnabled(true);
	scrActions["fileSaveAs"]->setEnabled(true);
	scrMenuMgr->setMenuEnabled("FileExport", true);
	scrActions["fileExportAsEPS"]->setEnabled(true);
	scrActions["fileExportAsPDF"]->setEnabled(true);
	scrActions["fileImportPage"]->setEnabled(true);
	//scrActions["toolsPreflightVerifier"]->setEnabled(true);

	if (scrActions["PrintPreview"])
		scrActions["PrintPreview"]->setEnabled(true);
	if (scrActions["SaveAsTemplate"])
		scrActions["SaveAsTemplate"]->setEnabled(true);

	scrActions["editCut"]->setEnabled(false);
	scrActions["editCopy"]->setEnabled(false);
	scrActions["editPaste"]->setEnabled(Buffer2 != "");
	scrActions["editSelectAll"]->setEnabled(true);
	scrActions["editDeselectAll"]->setEnabled(false);
	scrActions["editParaStyles"]->setEnabled(true);
	scrActions["editLineStyles"]->setEnabled(true);
	scrActions["editTemplates"]->setEnabled(true);
	scrActions["editJavascripts"]->setEnabled(true);

	scrMenuMgr->setMenuEnabled("View", true);
	scrActions["viewSnapToGrid"]->setOn(doc->useRaster);
	scrActions["viewSnapToGuides"]->setOn(doc->SnapGuides);

	scrMenuMgr->setMenuEnabled("Insert", true);
	scrMenuMgr->setMenuEnabled("Windows", true);
	scrMenuMgr->setMenuEnabled("Page", true);
	scrMenuMgr->setMenuEnabled("Extras", true);

	WerkTools->setEnabled(true);
	WerkToolsP->setEnabled(true);

	bool setter = doc->Pages.count() > 1 ? true : false;
	scrActions["pageDelete"]->setEnabled(setter);
	scrActions["pageMove"]->setEnabled(setter);

	ColorList::Iterator it;
	QPixmap pm = QPixmap(15, 15);
	a = 0;
	ColorMenC->clear();
	ColorMenC->insertItem( tr("None"));
	for (it = doc->PageColors.begin(); it != doc->PageColors.end(); ++it)
	{
		pm.fill(doc->PageColors[it.key()].getRGBColor());
		ColorMenC->insertItem(pm, it.key());
		if (it.key() == doc->toolSettings.dBrush)
			ColorMenC->setCurrentItem(a);
		a++;
	}
	propertiesPalette->Cpal->SetColors(doc->PageColors);
	propertiesPalette->Cpal->ChooseGrad(0);
	ActWin->setCaption(doc->DocName);
	scrActions["shade100"]->setOn(true);
	propertiesPalette->SetDoc(doc);
	propertiesPalette->updateCList();
	pagePalette->SetView(view);
	propertiesPalette->Spal->setFormats(doc);
	propertiesPalette->SetLineFormats(doc);
	propertiesPalette->startArrow->rebuildList(&doc->arrowStyles);
	propertiesPalette->endArrow->rebuildList(&doc->arrowStyles);
	layerPalette->setLayers(&doc->Layers, &doc->ActiveLayer);
	view->LaMenu();
	view->setLayMenTxt(doc->ActiveLayer);
	doc->currentParaStyle = 0;
	slotChangeUnit(doc->docUnitIndex);
	doc->docHyphenator = new Hyphenator(this, doc, this);
	buildFontMenu();
	connect(view, SIGNAL(changeUN(int)), this, SLOT(slotChangeUnit(int)));
	connect(view, SIGNAL(changeLA(int)), layerPalette, SLOT(MarkActiveLayer(int)));
	connect(view->horizRuler, SIGNAL(MarkerMoved(double, double)), this, SLOT(ReportMP(double, double)));
	connect(view->horizRuler, SIGNAL(DocChanged(bool)), this, SLOT(slotDocCh(bool)));
	connect(view, SIGNAL(ClipPo(double, double)), nodePalette, SLOT(SetXY(double, double)));
	connect(view, SIGNAL(PolyOpen()), nodePalette, SLOT(IsOpen()));
	connect(view, SIGNAL(PStatus(int, uint)), nodePalette, SLOT(PolyStatus(int, uint)));
	connect(view, SIGNAL(ItemPos(double, double)), propertiesPalette, SLOT(setXY(double, double)));
	connect(view, SIGNAL(ItemGeom(double, double)), propertiesPalette, SLOT(setBH(double, double)));
	connect(view, SIGNAL(ChBMText(PageItem *)), this, SLOT(BookMarkTxT(PageItem *)));
	connect(view, SIGNAL(NewBMNr(int, int)), bookmarkPalette->BView, SLOT(ChangeItem(int, int)));
	connect(view, SIGNAL(HaveSel(int)), this, SLOT(HaveNewSel(int)));
	connect(view, SIGNAL(SetAngle(double)), propertiesPalette, SLOT(setR(double)));
	connect(view, SIGNAL(SetSizeValue(double)), propertiesPalette, SLOT(setSvalue(double)));
	connect(view, SIGNAL(SetLocalValues(double, double, double, double)), propertiesPalette, SLOT(setLvalue(double, double, double, double)));
	connect(view, SIGNAL(SetLineArt(PenStyle, PenCapStyle, PenJoinStyle)), propertiesPalette, SLOT( setLIvalue(PenStyle, PenCapStyle, PenJoinStyle)));
	connect(view, SIGNAL(ItemFarben(QString, QString, int, int)), this, SLOT(setCSMenu(QString, QString, int, int)));
	connect(view, SIGNAL(ItemFarben(QString, QString, int, int)), propertiesPalette->Cpal, SLOT(setActFarben(QString, QString, int, int)));
	connect(view, SIGNAL(ItemGradient(int)), propertiesPalette->Cpal, SLOT(setActGradient(int)));
	connect(view, SIGNAL(ItemTrans(double, double)), propertiesPalette->Cpal, SLOT(setActTrans(double, double)));
	connect(view, SIGNAL(ItemTextAttr(double)), propertiesPalette, SLOT(setLsp(double)));
	connect(view, SIGNAL(ItemTextUSval(double)), propertiesPalette, SLOT(setExtra(double)));
//	connect(view, SIGNAL(ItemTextCols(int, double)), propertiesPalette, SLOT(setCols(int, double)));
	connect(view, SIGNAL(SetDistValues(double, double, double, double)), propertiesPalette, SLOT(setDvals(double, double, double, double)));
	connect(view, SIGNAL(ItemTextAbs(int)), propertiesPalette, SLOT(setAli(int)));
	connect(view, SIGNAL(ItemTextFont(QString)), this, SLOT(AdjustFontMenu(QString)));
	connect(view, SIGNAL(ItemTextSize(int)), propertiesPalette, SLOT(setSize(int)));
	connect(view, SIGNAL(ItemRadius(double)), propertiesPalette, SLOT(setRR(double)));
	connect(view, SIGNAL(Amode(int)), this, SLOT(setAppMode(int)));
	connect(view, SIGNAL(PaintingDone()), this, SLOT(slotSelect()));
/*	connect(doc->currentPage, SIGNAL(DocChanged()), this, SLOT(slotDocCh())); */
	connect(view, SIGNAL(HavePoint(bool, bool)), nodePalette, SLOT(HaveNode(bool, bool)));
	connect(view, SIGNAL(MousePos(double, double)), this, SLOT(ReportMP(double, double)));
	connect(view, SIGNAL(ItemRadius(double)), propertiesPalette, SLOT(setRR(double)));
	connect(view, SIGNAL(ItemTextStil(int)), propertiesPalette, SLOT(setStil(int)));
	connect(view, SIGNAL(ItemTextSca(int)), propertiesPalette, SLOT(setTScale(int)));
	connect(view, SIGNAL(ItemTextSize(int)), this, SLOT(setFSizeMenu(int)));
	connect(view, SIGNAL(ItemTextStil(int)), this, SLOT(setStilvalue(int)));
	connect(view, SIGNAL(ItemTextAbs(int)), this, SLOT(setAbsValue(int)));
	connect(view, SIGNAL(ItemTextFarben(QString, QString, int, int)), propertiesPalette, SLOT(setActFarben(QString, QString, int, int)));
	connect(view, SIGNAL(HasTextSel()), this, SLOT(EnableTxEdit()));
	connect(view, SIGNAL(HasNoTextSel()), this, SLOT(DisableTxEdit()));
	connect(view, SIGNAL(CopyItem()), this, SLOT(slotEditCopy()));
	connect(view, SIGNAL(CutItem()), this, SLOT(slotEditCut()));
	connect(view, SIGNAL(LoadPic()), this, SLOT(slotFileOpen()));
	connect(view, SIGNAL(AppendText()), this, SLOT(slotFileAppend()));
	connect(view, SIGNAL(AnnotProps()), this, SLOT(ModifyAnnot()));
	connect(view, SIGNAL(EditGuides()), this, SLOT(ManageGuides()));
	connect(view, SIGNAL(LoadElem(QString, int ,int, bool, bool, ScribusDoc *, ScribusView*)), this, SLOT(slotElemRead(QString, int, int, bool, bool, ScribusDoc *, ScribusView*)));
	connect(view, SIGNAL(AddBM(PageItem *)), this, SLOT(AddBookMark(PageItem *)));
	connect(view, SIGNAL(DelBM(PageItem *)), this, SLOT(DelBookMark(PageItem *)));
	connect(view, SIGNAL(RasterPic(bool)), this, SLOT(HaveRaster(bool)));
	connect(view, SIGNAL(DoGroup()), this, SLOT(GroupObj()));
	//connect(view, SIGNAL(DoUnGroup()), this, SLOT(UnGroupObj()));
	connect(view, SIGNAL(EndNodeEdit()), this, SLOT(ToggleFrameEdit()));
	connect(view, SIGNAL(LevelChanged(uint )), propertiesPalette, SLOT(setLevel(uint)));
	connect(view, SIGNAL(callGimp()), this, SLOT(CallGimp()));
	connect(view, SIGNAL(UpdtObj(uint, uint)), outlinePalette, SLOT(slotUpdateElement(uint, uint)));
	connect(view, SIGNAL(AddObj(PageItem *)), outlinePalette, SLOT(slotAddElement(PageItem *)));
/*	if (!doc->TemplateMode)
	{
		connect(doc->currentPage, SIGNAL(DelObj(uint, uint)), outlinePalette, SLOT(slotRemoveElement(uint, uint)));
		connect(doc->currentPage, SIGNAL(AddObj(uint, uint)), outlinePalette, SLOT(slotAddElement(uint, uint)));
		connect(doc->currentPage, SIGNAL(UpdtObj(uint, uint)), outlinePalette, SLOT(slotUpdateElement(uint, uint)));
		connect(doc->currentPage, SIGNAL(MoveObj(uint, uint, uint)), outlinePalette, SLOT(slotMoveElement(uint, uint, uint)));
	} */
	doc->PDF_Options.BleedBottom = doc->PageM.Bottom;
	doc->PDF_Options.BleedTop = doc->PageM.Top;
	doc->PDF_Options.BleedLeft = doc->PageM.Left;
	doc->PDF_Options.BleedRight = doc->PageM.Right;
	doc->CurTimer = NULL;
}

void ScribusApp::HaveNewSel(int Nr)
{
	PageItem *currItem = NULL;
	if (Nr != -1)
	{
		if (view->SelItem.count() != 0)
		{
			currItem = view->SelItem.at(0);
			if (!currItem)
				Nr=-1;
		}
		else
			Nr = -1;
	}
	scrActions["editDeselectAll"]->setEnabled(Nr!=-1);
	scrActions["itemDetachTextFromPath"]->setEnabled(false);
	scrActions["insertGlyph"]->setEnabled(false);
	//scrActions["specialSmartHyphen"]->setEnabled(false);
	//scrActions["specialNonBreakingSpace"]->setEnabled(false);
	//scrActions["specialPageNumber"]->setEnabled(false);
	if (Nr!=-1 && currItem->itemType()==PageItem::TextFrame)
		actionManager->enableUnicodeActions(false);
	scrActions["insertSampleText"]->setEnabled(false);
	
	view->horizRuler->ItemPosValid = false;
	view->horizRuler->repX = false;
	view->horizRuler->repaint();
	switch (Nr)
	{
	case -1: // None
		scrActions["fileImportText"]->setEnabled(false);
		scrActions["fileImportImage"]->setEnabled(false);
		scrActions["fileImportAppendText"]->setEnabled(false);
		scrActions["fileExportText"]->setEnabled(false);
		scrMenuMgr->setMenuEnabled("Style", false);
		scrMenuMgr->setMenuEnabled("Item", false);
		scrMenuMgr->setMenuEnabled("ItemShapes", false);
		scrMenuMgr->setMenuEnabled("ItemConvertTo", false);
		scrActions["itemConvertToBezierCurve"]->setEnabled(false);
		scrActions["itemConvertToImageFrame"]->setEnabled(false);
		scrActions["itemConvertToOutlines"]->setEnabled(false);
		scrActions["itemConvertToPolygon"]->setEnabled(false);
		scrActions["itemConvertToTextFrame"]->setEnabled(false);
		scrActions["itemLock"]->setEnabled(false);
		scrActions["itemLockSize"]->setEnabled(false);
		scrActions["editCut"]->setEnabled(false);
		scrActions["editCopy"]->setEnabled(false);
		scrActions["editClearContents"]->setEnabled(false);
		scrActions["editSearchReplace"]->setEnabled(false);
		scrActions["extrasHyphenateText"]->setEnabled(false);
		scrMenuMgr->clearMenu("Style");

		scrActions["toolsUnlinkTextFrame"]->setEnabled(false);
		scrActions["toolsLinkTextFrame"]->setEnabled(false);
		scrActions["toolsEditContents"]->setEnabled(false);
		scrActions["toolsEditWithStoryEditor"]->setEnabled(false);
		scrActions["toolsRotate"]->setEnabled(false);
		scrActions["toolsCopyProperties"]->setEnabled(false);
		propertiesPalette->Cpal->gradientQCombo->setCurrentItem(0);
		outlinePalette->slotShowSelect(doc->currentPage->PageNr, -1);
		break;
	case 2: //Image Frame
		scrActions["fileImportAppendText"]->setEnabled(false);
		scrActions["fileImportText"]->setEnabled(false);
		scrActions["fileImportImage"]->setEnabled(true);
		scrActions["editCut"]->setEnabled(true);
		scrActions["editCopy"]->setEnabled(true);
		scrActions["editClearContents"]->setEnabled(true);
		scrActions["editSearchReplace"]->setEnabled(false);
		scrActions["extrasHyphenateText"]->setEnabled(false);
		scrMenuMgr->setMenuEnabled("Style", true);
		scrMenuMgr->setMenuEnabled("Item", true);
		scrMenuMgr->setMenuEnabled("ItemShapes", !(currItem->isTableItem && currItem->isSingleSel));
		scrMenuMgr->setMenuEnabled("ItemConvertTo", true);
		scrActions["itemConvertToBezierCurve"]->setEnabled(false);
		scrActions["itemConvertToImageFrame"]->setEnabled(false);
		scrActions["itemConvertToOutlines"]->setEnabled(false);
		scrActions["itemConvertToPolygon"]->setEnabled(!currItem->isTableItem && doc->appMode != EditMode);
		scrActions["itemConvertToTextFrame"]->setEnabled(doc->appMode != EditMode);
		scrMenuMgr->clearMenu("Style");
		scrMenuMgr->addMenuToMenu("Color","Style");
		if (currItem->isRaster)
			scrMenuMgr->addMenuItem(scrActions["styleInvertPict"], "Style");
		scrActions["toolsUnlinkTextFrame"]->setEnabled(false);
		scrActions["toolsLinkTextFrame"]->setEnabled(false);
		scrActions["toolsEditContents"]->setEnabled(currItem->ScaleType);
		scrActions["toolsEditWithStoryEditor"]->setEnabled(false);
		scrActions["toolsRotate"]->setEnabled(true);
		scrActions["toolsCopyProperties"]->setEnabled(true);
		break;
	case 4: //Text Frame
		scrActions["fileImportText"]->setEnabled(true);
		scrActions["fileImportImage"]->setEnabled(false);
		scrActions["fileImportAppendText"]->setEnabled(true);
		scrActions["fileExportText"]->setEnabled(true);
		scrActions["editCut"]->setEnabled(true);
		scrActions["editCopy"]->setEnabled(true);
		scrActions["editClearContents"]->setEnabled(true);
		scrActions["editSearchReplace"]->setEnabled(currItem->itemText.count() != 0);
		scrActions["extrasHyphenateText"]->setEnabled(true);
		scrMenuMgr->setMenuEnabled("Style", true);
		scrMenuMgr->setMenuEnabled("Item", true);
		scrMenuMgr->setMenuEnabled("ItemShapes", !(currItem->isTableItem && currItem->isSingleSel));
		scrMenuMgr->setMenuEnabled("ItemConvertTo", true);
		scrActions["itemConvertToBezierCurve"]->setEnabled(false);
		scrActions["itemConvertToImageFrame"]->setEnabled(doc->appMode != EditMode);
		scrActions["itemConvertToOutlines"]->setEnabled(!currItem->isTableItem && doc->appMode != EditMode);
		scrActions["itemConvertToPolygon"]->setEnabled(!currItem->isTableItem && doc->appMode != EditMode);
		scrActions["itemConvertToTextFrame"]->setEnabled(false);
		scrMenuMgr->clearMenu("Style");
		scrMenuMgr->addMenuToMenu("Font","Style");
		scrMenuMgr->addMenuToMenu("FontSize","Style");
		scrMenuMgr->addMenuToMenu("TypeEffects","Style");
		scrMenuMgr->addMenuToMenu("Alignment","Style");
		scrMenuMgr->addMenuToMenu("Color","Style");
		scrMenuMgr->addMenuToMenu("Shade","Style");
		scrMenuMgr->addMenuItem(scrActions["styleTabulators"], "Style");

		scrActions["toolsRotate"]->setEnabled(true);
		scrActions["toolsCopyProperties"]->setEnabled(true);
		scrActions["toolsEditWithStoryEditor"]->setEnabled(true);
		scrActions["insertSampleText"]->setEnabled(true);
		if ((currItem->NextBox != 0) || (currItem->BackBox != 0))
		{
			scrActions["toolsUnlinkTextFrame"]->setEnabled(true);
			if ((currItem->BackBox != 0) && (currItem->itemText.count() == 0))
				scrActions["toolsEditContents"]->setEnabled(false);
			else
				scrActions["toolsEditContents"]->setEnabled(true);
		}
		else
			scrActions["toolsEditContents"]->setEnabled(true);
		if (currItem->NextBox == 0)
			scrActions["toolsLinkTextFrame"]->setEnabled(true);
		if (doc->MasterP)
			scrActions["toolsLinkTextFrame"]->setEnabled(false);
		if (doc->appMode == EditMode)
		{
			setTBvals(currItem);
			scrActions["editSelectAll"]->setEnabled(true);
			scrActions["insertGlyph"]->setEnabled(true);
			//scrActions["specialSmartHyphen"]->setEnabled(true);
			//scrActions["specialNonBreakingSpace"]->setEnabled(true);
			//scrActions["specialPageNumber"]->setEnabled(true);
			if (currItem->itemType()==PageItem::TextFrame)
				actionManager->enableUnicodeActions(true);
			view->horizRuler->ItemPos = currItem->Xpos - doc->ScratchLeft;
			view->horizRuler->ItemEndPos = currItem->Xpos+currItem->Width - doc->ScratchLeft;
			if (currItem->lineColor() != "None")
				view->horizRuler->lineCorr = currItem->Pwidth / 2.0;
			else
				view->horizRuler->lineCorr = 0;
			view->horizRuler->ColGap = currItem->ColGap;
			view->horizRuler->Cols = currItem->Cols;
			view->horizRuler->Extra = currItem->Extra;
			view->horizRuler->RExtra = currItem->RExtra;
			view->horizRuler->First = doc->docParagraphStyles[doc->currentParaStyle].First;
			view->horizRuler->Indent = doc->docParagraphStyles[doc->currentParaStyle].Indent;
			if (currItem->imageFlippedH() || (currItem->Reverse))
				view->horizRuler->Revers = true;
			else
				view->horizRuler->Revers = false;
			view->horizRuler->ItemPosValid = true;
			view->horizRuler->repX = false;
			if (doc->currentParaStyle < 5)
				view->horizRuler->TabValues = currItem->TabValues;
			else
				view->horizRuler->TabValues = doc->docParagraphStyles[doc->currentParaStyle].TabValues;
			view->horizRuler->repaint();
		}
		else
		{
			doc->CurrFont = currItem->IFont;
			doc->CurrFontSize = currItem->ISize;
			doc->CurrTextFill = currItem->TxtFill;
			doc->CurrTextStroke = currItem->TxtStroke;
			doc->CurrTextStrokeSh = currItem->ShTxtStroke;
			doc->CurrTextFillSh = currItem->ShTxtFill;
			doc->CurrTextScale = currItem->TxtScale;
			emit TextFarben(doc->CurrTextStroke, doc->CurrTextFill, doc->CurrTextStrokeSh, doc->CurrTextFillSh);
			doc->CurrentStyle = currItem->TxTStyle;
			emit TextStil(doc->CurrentStyle);
			emit TextScale(doc->CurrTextScale);
			setStilvalue(doc->CurrentStyle);
		}
		doc->docParagraphStyles[0].LineSpa = currItem->LineSp;
		doc->docParagraphStyles[0].textAlignment = currItem->textAlignment;
		break;
	case 8: //Path Text
		scrActions["fileImportText"]->setEnabled(true);
		scrActions["fileImportImage"]->setEnabled(false);
		scrActions["fileImportAppendText"]->setEnabled(true);
		scrActions["fileExportText"]->setEnabled(true);
		scrActions["editCut"]->setEnabled(true);
		scrActions["editCopy"]->setEnabled(true);
		scrActions["editClearContents"]->setEnabled(false);
		scrActions["editSearchReplace"]->setEnabled(false);
		scrActions["extrasHyphenateText"]->setEnabled(false);
		scrMenuMgr->setMenuEnabled("Item", true);
		scrMenuMgr->setMenuEnabled("ItemShapes", false);
		scrActions["itemDetachTextFromPath"]->setEnabled(true);
		scrMenuMgr->setMenuEnabled("ItemConvertTo", false);
		scrActions["itemConvertToBezierCurve"]->setEnabled(false);
		scrActions["itemConvertToImageFrame"]->setEnabled(false);
		scrActions["itemConvertToOutlines"]->setEnabled(false);
		scrActions["itemConvertToPolygon"]->setEnabled(false);
		scrActions["itemConvertToTextFrame"]->setEnabled(false);

		scrMenuMgr->clearMenu("Style");
		scrMenuMgr->setMenuEnabled("Style", true);
		scrMenuMgr->addMenuToMenu("Font","Style");
		scrMenuMgr->addMenuToMenu("FontSize","Style");
		scrMenuMgr->addMenuToMenu("TypeEffects","Style");
		scrMenuMgr->addMenuToMenu("Color","Style");
		scrMenuMgr->addMenuToMenu("Shade","Style");

		scrActions["toolsRotate"]->setEnabled(true);
		scrActions["toolsCopyProperties"]->setEnabled(true);
		scrActions["toolsEditContents"]->setEnabled(false);
		scrActions["toolsEditWithStoryEditor"]->setEnabled(true);
		scrActions["toolsLinkTextFrame"]->setEnabled(false);
		scrActions["toolsUnlinkTextFrame"]->setEnabled(false);
		if (doc->appMode == EditMode)
			setTBvals(currItem);
		else
		{
			doc->CurrFont = currItem->IFont;
			doc->CurrFontSize = currItem->ISize;
			doc->CurrTextFill = currItem->TxtFill;
			doc->CurrTextStroke = currItem->TxtStroke;
			doc->CurrTextStrokeSh = currItem->ShTxtStroke;
			doc->CurrTextFillSh = currItem->ShTxtFill;
			doc->CurrTextScale = currItem->TxtScale;
			emit TextFarben(doc->CurrTextStroke, doc->CurrTextFill, doc->CurrTextStrokeSh, doc->CurrTextFillSh);
			doc->CurrentStyle = currItem->TxTStyle;
			emit TextStil(doc->CurrentStyle);
			emit TextScale(doc->CurrTextScale);
			setStilvalue(doc->CurrentStyle);
		}
		break;
	default:
		scrActions["fileImportText"]->setEnabled(false);
		scrActions["fileImportImage"]->setEnabled(false);
		scrActions["fileImportAppendText"]->setEnabled(false);
		scrActions["fileExportText"]->setEnabled(false);
		scrActions["editCut"]->setEnabled(true);
		scrActions["editCopy"]->setEnabled(true);
		scrActions["editClearContents"]->setEnabled(false);
		scrActions["editSearchReplace"]->setEnabled(false);

		scrActions["extrasHyphenateText"]->setEnabled(false);
		scrMenuMgr->setMenuEnabled("Style", true);
		scrMenuMgr->setMenuEnabled("Item", true);
		scrMenuMgr->clearMenu("Style");
		scrMenuMgr->addMenuToMenu("Color","Style");
		scrMenuMgr->addMenuToMenu("Shade","Style");
		if (Nr == 6) //Polygon
		{
			scrMenuMgr->setMenuEnabled("ItemShapes", true);
			scrMenuMgr->setMenuEnabled("ItemConvertTo", true);
			scrActions["itemConvertToBezierCurve"]->setEnabled(doc->appMode != EditMode);
			scrActions["itemConvertToImageFrame"]->setEnabled(doc->appMode != EditMode);
			scrActions["itemConvertToOutlines"]->setEnabled(false);
			scrActions["itemConvertToPolygon"]->setEnabled(false);
			scrActions["itemConvertToTextFrame"]->setEnabled(doc->appMode != EditMode);
		}
		scrActions["toolsEditContents"]->setEnabled(false);
		scrActions["toolsEditWithStoryEditor"]->setEnabled(false);
		scrActions["toolsUnlinkTextFrame"]->setEnabled(false);
		scrActions["toolsLinkTextFrame"]->setEnabled(false);
		if (Nr != 5)
			scrActions["toolsRotate"]->setEnabled(true);
		else
			scrActions["toolsRotate"]->setEnabled(false);
		scrActions["toolsCopyProperties"]->setEnabled(true);
		break;
	}
	doc->CurrentSel = Nr;
	propertiesPalette->RotationGroup->setButton(doc->RotMode);
	if (view->SelItem.count() > 1)
	{
		scrActions["itemAlignDist"]->setEnabled(true);
		scrActions["itemConvertToBezierCurve"]->setEnabled(false);
		scrActions["itemConvertToImageFrame"]->setEnabled(false);
		scrActions["itemConvertToOutlines"]->setEnabled(false);
		scrActions["itemConvertToPolygon"]->setEnabled(false);
		scrActions["itemConvertToTextFrame"]->setEnabled(false);
		scrActions["editSearchReplace"]->setEnabled(false);

		bool hPoly = true;
		bool isGroup = true;
		int firstElem = -1;
		if (currItem->Groups.count() != 0)
			firstElem = currItem->Groups.top();
		for (uint bx=0; bx<view->SelItem.count(); ++bx)
		{
			if (view->SelItem.at(bx)->itemType() != PageItem::Polygon)
				hPoly = false;
			if (view->SelItem.at(bx)->Groups.count() != 0)
			{
				if (view->SelItem.at(bx)->Groups.top() != firstElem)
					isGroup = false;
			}
			else
				isGroup = false;
		}
		scrActions["itemGroup"]->setEnabled(!isGroup);
		scrActions["itemCombinePolygons"]->setEnabled(hPoly);
		if (view->SelItem.count() == 2)
		{
			if (((currItem->itemType() == PageItem::TextFrame) || (view->SelItem.at(1)->itemType() == PageItem::TextFrame)) && ((currItem->itemType() == PageItem::PolyLine) || (view->SelItem.at(1)->itemType() == PageItem::PolyLine)))
			{
				PageItem* bx = view->SelItem.at(1);
				if ((currItem->NextBox == 0) && (currItem->BackBox == 0) && (bx->NextBox == 0) && (bx->BackBox == 0) && (currItem->Groups.count() == 0))
					scrActions["itemAttachTextToPath"]->setEnabled(true);
			}

		}
	}
	else
	{
		scrActions["itemAlignDist"]->setEnabled(false);
		scrActions["itemGroup"]->setEnabled(false);
		scrActions["itemAttachTextToPath"]->setEnabled(false);
		scrActions["itemCombinePolygons"]->setEnabled(false);
	}
	if (view->SelItem.count() != 0)
	{
		propertiesPalette->textFlowsAroundFrame->setChecked(currItem->textFlowsAroundFrame());
		scrActions["itemLock"]->setEnabled(true);
		scrActions["itemLockSize"]->setEnabled(true);
		
		if (currItem->Groups.count() != 0)
			scrActions["itemUngroup"]->setEnabled(true);
		else
		{
			scrActions["itemUngroup"]->setEnabled(false);
			scrActions["itemSplitPolygons"]->setEnabled( (currItem->itemType() == PageItem::Polygon) && (currItem->Segments.count() != 0) );
		}
		if (currItem->locked())
		{
			scrMenuMgr->setMenuEnabled("ItemShapes", false);
			scrActions["itemAlignDist"]->setEnabled(false);
			scrMenuMgr->setMenuEnabled("ItemConvertTo", false);
			scrActions["itemConvertToBezierCurve"]->setEnabled(false);
			scrActions["itemConvertToImageFrame"]->setEnabled(false);
			scrActions["itemConvertToOutlines"]->setEnabled(false);
			scrActions["itemConvertToPolygon"]->setEnabled(false);
			scrActions["itemConvertToTextFrame"]->setEnabled(false);
			scrActions["itemSplitPolygons"]->setEnabled(false);
			scrActions["itemAttachTextToPath"]->setEnabled(false);
			scrActions["itemDetachTextFromPath"]->setEnabled(false);
			scrActions["itemCombinePolygons"]->setEnabled(false);
			scrActions["itemDelete"]->setEnabled(false);
			scrActions["itemSendToBack"]->setEnabled(false);
			scrActions["itemBringToFront"]->setEnabled(false);
			scrActions["itemRaise"]->setEnabled(false);
			scrActions["itemLower"]->setEnabled(false);
			scrActions["itemSendToScrapbook"]->setEnabled(false);
			scrActions["editCut"]->setEnabled(false);
			scrActions["editClearContents"]->setEnabled(false);
			scrActions["toolsRotate"]->setEnabled(false);
		}
		else
		{
			bool setter=!(currItem->isTableItem && currItem->isSingleSel);
			scrActions["itemDuplicate"]->setEnabled(setter);
			scrActions["itemMulDuplicate"]->setEnabled(setter);
			scrActions["itemDelete"]->setEnabled(setter);
			scrActions["itemSendToBack"]->setEnabled(setter);
			scrActions["itemBringToFront"]->setEnabled(setter);
			scrActions["itemRaise"]->setEnabled(setter);
			scrActions["itemLower"]->setEnabled(setter);
			scrActions["itemSendToScrapbook"]->setEnabled(setter);
		}
		scrActions["itemLock"]->setOn(currItem->locked());
		scrActions["itemLockSize"]->setOn(currItem->sizeLocked());
	}
	propertiesPalette->NewSel(Nr);
	if (Nr != -1)
	{
		propertiesPalette->SetCurItem(currItem);
		outlinePalette->slotShowSelect(currItem->OwnPage, currItem->ItemNr);
		if (currItem->FrameType == 0)
			SCustom->setPixmap(SCustom->getIconPixmap(0));
		if (currItem->FrameType == 1)
			SCustom->setPixmap(SCustom->getIconPixmap(1));
		if (currItem->FrameType > 3)
			SCustom->setPixmap(SCustom->getIconPixmap(currItem->FrameType-2));
	}
}

void ScribusApp::slotDocCh(bool /*reb*/)
{
/*	if ((reb) && (!doc->TemplateMode) && (view->SelItem.count() != 0))
	{
		for (uint upd = 0; upd < view->SelItem.count(); ++upd)
			outlinePalette->slotUpdateElement(doc->currentPage->PageNr, view->SelItem.at(upd)->ItemNr);
	} */
	if (docCheckerPalette->isVisible())
	{
		scanDocument();
		docCheckerPalette->buildErrorList(doc);
	}
	if (!doc->isModified())
		doc->setModified();
	ActWin->setCaption( doc->DocName + "*");
	scrActions["fileSave"]->setEnabled(true);
	scrActions["fileSaveAs"]->setEnabled(true);
	scrActions["fileCollect"]->setEnabled(true);
	if (!doc->TemplateMode)
	{
		scrActions["fileClose"]->setEnabled(true);
		if (doc->hasName)
			scrActions["fileRevert"]->setEnabled(true);
	}
/*
	ActWin->MenuStat[0] = scrActions["fileSave"]->isEnabled();
	ActWin->MenuStat[1] = scrActions["fileClose"]->isEnabled();
	ActWin->MenuStat[2] = fileMenu->isItemEnabled(M_FileSave);
	ActWin->MenuStat[3] = fileMenu->isItemEnabled(M_FileSaveAs);
	*/
	if (view->SelItem.count() != 0)
	{
		PageItem *currItem = view->SelItem.at(0);
		scrActions["itemLock"]->setOn(currItem->locked());
		scrActions["itemLockSize"]->setOn(currItem->sizeLocked());
	}
}

void ScribusApp::updateRecent(QString fn)
{
	if (RecentDocs.findIndex(fn) == -1)
	{
		RecentDocs.prepend(fn);
		fileWatcher->addFile(fn);
	}
	else
	{
		RecentDocs.remove(fn);
		RecentDocs.prepend(fn);
	}
	rebuildRecentFileMenu();
}

void ScribusApp::removeRecent(QString fn)
{
	if (RecentDocs.findIndex(fn) != -1)
	{
		RecentDocs.remove(fn);
		if (!fileWatcher->isActive())
			fileWatcher->removeFile(fn);
	}
	rebuildRecentFileMenu();
}

void ScribusApp::loadRecent(QString fn)
{
	QFileInfo fd(fn);
	if (!fd.exists())
	{
		RecentDocs.remove(fn);
		fileWatcher->removeFile(fn);
		rebuildRecentFileMenu();
		return;
	}
	LadeDoc(fn);
}

void ScribusApp::rebuildRecentFileMenu()
{
	for( QMap<QString, QGuardedPtr<ScrAction> >::Iterator it = scrRecentFileActions.begin(); it!=scrRecentFileActions.end(); ++it )
		scrMenuMgr->removeMenuItem((*it), recentFileMenuName);

	scrRecentFileActions.clear();
	uint max = QMIN(Prefs.RecentDCount, RecentDocs.count());
	for (uint m = 0; m < max; ++m)
	{
		QString strippedName=RecentDocs[m];
		strippedName.remove(QDir::separator());
		scrRecentFileActions.insert(strippedName, new ScrAction( ScrAction::RecentFile, QIconSet(), RecentDocs[m], QKeySequence(), this, strippedName));
		connect( scrRecentFileActions[strippedName], SIGNAL(activatedData(QString)), this, SLOT(loadRecent(QString)) );
		scrMenuMgr->addMenuItem(scrRecentFileActions[strippedName], recentFileMenuName);
	}
}

bool ScribusApp::slotDocOpen()
{
	PrefsContext* docContext = prefsFile->getContext("docdirs", false);
	QString docDir = ".";
	if (Prefs.DocDir != "")
		docDir = docContext->get("docsopen", Prefs.DocDir);
	else
		docDir = docContext->get("docsopen", ".");
	QString formats = "";
#ifdef HAVE_LIBZ
	formats += tr("Documents (*.sla *.sla.gz *.scd *.scd.gz);;");
#else
	formats += tr("Documents (*.sla *.scd);;");
#endif
	if (pluginManager->DLLexists(6))
		formats += tr("Postscript Files (*.eps *.EPS *.ps *.PS);;");
	if (pluginManager->DLLexists(10))
#ifdef HAVE_LIBZ
		formats += tr("SVG Images (*.svg *.svgz);;");
#else
		formats += tr("SVG Images (*.svg);;");
#endif
	if (pluginManager->DLLexists(12))
		formats += tr("OpenOffice.org Draw (*.sxd);;All Files (*)");
	formats + tr("All Files (*)");
	QString fileName = CFileDialog( docDir, tr("Open"), formats);
	if (fileName == "")
		// User cancelled
		return false;
	docContext->set("docsopen", fileName.left(fileName.findRev("/")));
	bool ret = LadeDoc(fileName);
	return ret;
}

bool ScribusApp::slotDocMerge()
{
	bool ret = false;
	MergeDoc *dia = new MergeDoc(this, false, doc->PageC, doc->currentPage->PageNr + 1);
	if (dia->exec())
	{
		FMess->setText(tr("Importing Pages..."));
		qApp->setOverrideCursor(QCursor(waitCursor), true);
		std::vector<int> pageNs;
		parsePagesString(dia->getPageNumbers(), &pageNs, dia->getPageCounter());
		int startPage, nrToImport;
		bool doIt = true;
		if (doc->TemplateMode)
		{
			if (pageNs.size() > 1)
			{
				LadeSeite(dia->getFromDoc(), pageNs[0] - 1, false);
			}
			doIt = false;
		}
		else if (dia->getCreatePageChecked())
		{
			int importWhere=dia->getImportWhere();
			if (importWhere == 0)
				startPage = dia->getImportWherePage();
			else if (importWhere == 1)
				startPage = dia->getImportWherePage() + 1;
			else
				startPage = doc->PageC + 1;
			addNewPages(dia->getImportWherePage(), importWhere, pageNs.size());
			nrToImport = pageNs.size();
		}
		else
		{
			startPage = doc->currentPage->PageNr + 1;
			nrToImport = pageNs.size();
			if (pageNs.size() > (doc->PageC - doc->currentPage->PageNr))
			{
				qApp->setOverrideCursor(QCursor(arrowCursor), true);
				QMessageBox mb( tr("Import Page(s)"),
				tr("<p>You are trying to import more pages than there are available "
				   "in the current document counting from the active page.</p>"
				"Choose one of the following:<br>"
				"<ul><li><b>Create</b> missing pages</li>"
				"<li><b>Import</b> pages until the last page</li>"
				"<li><b>Cancel</b></li></ul><br>"),
				QMessageBox::Information,
				QMessageBox::Yes | QMessageBox::Default,
				QMessageBox::No,
				QMessageBox::Cancel | QMessageBox::Escape );
				mb.setButtonText( QMessageBox::Yes, tr("Create") );
				mb.setButtonText( QMessageBox::No, tr("Import") );
				mb.setTextFormat(Qt::RichText);
				switch( mb.exec() ) {
					case QMessageBox::Yes:
						nrToImport = pageNs.size();
						addNewPages(doc->PageC, 2, pageNs.size() - (doc->PageC - doc->currentPage->PageNr));
					break;
					case QMessageBox::No:
						nrToImport = doc->PageC - doc->currentPage->PageNr;
					break;
					case QMessageBox::Cancel:
						doIt = false;
						FMess->setText("");
					break;
				}
				qApp->setOverrideCursor(QCursor(waitCursor), true);
			}
		}
		if (doIt)
		{
			if (nrToImport > 0)
			{
				FProg->reset();
				FProg->setTotalSteps(nrToImport);
				int counter = startPage;
				for (int i = 0; i < nrToImport; ++i)
				{
					view->GotoPa(counter);
					LadeSeite(dia->getFromDoc(), pageNs[i] - 1, false);
					counter++;
					FProg->setProgress(i + 1);
				}
				view->GotoPa(startPage);
				FProg->reset();
				FMess->setText(tr("Import done"));
			}
			else
			{
				FMess->setText(tr("Found nothing to import"));
				doIt = false;
			}
		}
		qApp->setOverrideCursor(QCursor(arrowCursor), true);
		ret = doIt;
	}
	delete dia;
	return ret;
}

bool ScribusApp::LadeSeite(QString fileName, int Nr, bool Mpa)
{
	bool ret = false;
	if (!fileName.isEmpty())
	{
		if (!Mpa)
			doc->OpenNodes = outlinePalette->buildReopenVals();
		doc->loading = true;
		ScriXmlDoc *ss = new ScriXmlDoc();
		uint cc = doc->Items.count();
		if(!ss->ReadPage(fileName, Prefs.AvailFonts, doc, view, Nr, Mpa))
		{
			delete ss;
			doc->loading = false;
			return false;
		}
		delete ss;
		if (CMSavail)
		{
			if (doc->CMSSettings.CMSinUse)
			{
				RecalcColors();
				view->RecalcPictures(&InputProfiles);
			}
		}
		for (uint azz = cc; azz < doc->Items.count(); ++azz)
		{
			PageItem *ite = doc->Items.at(azz);
			if ((ite->itemType() == PageItem::TextFrame) && (ite->isBookmark))
				bookmarkPalette->BView->AddPageItem(ite);
		}
		propertiesPalette->Cpal->SetColors(doc->PageColors);
		propertiesPalette->updateCList();
		propertiesPalette->Spal->setFormats(doc);
		propertiesPalette->SetLineFormats(doc);
		propertiesPalette->startArrow->rebuildList(&doc->arrowStyles);
		propertiesPalette->endArrow->rebuildList(&doc->arrowStyles);
		if (!Mpa)
		{
			outlinePalette->BuildTree(doc);
			outlinePalette->reopenTree(doc->OpenNodes);
			scanDocument();
			docCheckerPalette->buildErrorList(doc);
		}
		slotDocCh();
		view->LaMenu();
		layerPalette->rebuildList();
		doc->loading = false;
		ret = true;
	}
	if (!Mpa)
		pagePalette->Rebuild();
	view->DrawNew();
	return ret;
}

bool ScribusApp::LadeDoc(QString fileName)
{
	undoManager->setUndoEnabled(false);
	QFileInfo fi(fileName);
	if (!fi.exists())
		return false;
	qApp->setOverrideCursor(QCursor(waitCursor), true);
/*	if (HaveDoc)
		doc->OpenNodes = outlinePalette->buildReopenVals(); */
	bool ret = false;
	QWidgetList windows = wsp->windowList();
	ScribusWin* ActWinOld = NULL;
	if (windows.count() != 0)
		ActWinOld = ActWin;
	bool found = false;
	int id = 0;
	for ( int i = 0; i < static_cast<int>(windows.count()); ++i )
	{
		if (windows.at(i)->caption() == fileName)
		{
			found = true;
			id = i;
			break;
		}
	}
	if (found)
	{
		windowsMenuActivated(id);
		return true;
	}
	if (!fileName.isEmpty())
	{
		QString FName = fi.absFilePath();
		QDir::setCurrent(fi.dirPath(true));
		FileLoader *fl = new FileLoader(FName, this);
		if (fl->TestFile() == 0)
		{
			qApp->setOverrideCursor(QCursor(arrowCursor), true);
			//Scribus 1.3.x warning, remove at a later stage
			if (!warningVersion(this))
			{
				delete fl;
				return false;
			}
		}
		if (fl->TestFile() == -1)
		{
			delete fl;
			qApp->setOverrideCursor(QCursor(arrowCursor), true);
			QMessageBox::critical(this, tr("Fatal Error"), tr("File %1 \nis not in an acceptable format").arg(FName), tr("OK"));
			return false;
		}
		Prefs.AvailFonts.AddScalableFonts(fi.dirPath(true)+"/", FName);
		doc=new ScribusDoc(&Prefs);
		doc->appMode = NormalMode;
		doc->HasCMS = false;
		doc->ActiveLayer = 0;
		doc->OpenNodes.clear();
		doc->loading = true;
		FMess->setText( tr("Loading..."));
		FProg->reset();
		ScribusWin* w = new ScribusWin(wsp, doc);
		view = new ScribusView(w, doc, &Prefs);
		view->Scale = 1.0*Prefs.DisScale;
		w->setView(view);
		ActWin = w;
		doc->WinHan = w;
		w->setCentralWidget(view);
		w->setUpdatesEnabled(false);
		view->setUpdatesEnabled(false);
#ifdef HAVE_CMS
		doc->SoftProofing = false;
		doc->Gamut = false;
		bool cmsu = CMSuse;
		CMSuse = false;
#endif
		ScApp->ScriptRunning = true;
		if(!fl->LoadFile(this))
		{
			view->close();
			delete fl;
			delete view;
			delete doc;
			delete w;
			ScApp->ScriptRunning = false;
			FMess->setText("");
			FProg->reset();
			ActWin = NULL;
			if (windows.count() != 0)
				newActWin(ActWinOld);
			return false;
		}
		ScApp->ScriptRunning = false;
		FMess->setText("");
		FProg->reset();
#ifdef HAVE_CMS
		CMSuse = cmsu;
#endif
		HaveDoc++;
		if (doc->checkerProfiles.count() == 0)
		{
			struct checkerPrefs checkerSettings;
			checkerSettings.ignoreErrors = false;
			checkerSettings.autoCheck = true;
			checkerSettings.checkGlyphs = true;
			checkerSettings.checkOrphans = true;
			checkerSettings.checkOverflow = true;
			checkerSettings.checkPictures = true;
			checkerSettings.checkResolution = true;
			checkerSettings.checkTransparency = true;
			checkerSettings.checkAnnotations = false;
			checkerSettings.checkRasterPDF = true;
			checkerSettings.minResolution = 72.0;
			doc->checkerProfiles.insert( tr("Postscript"), checkerSettings);
			doc->checkerProfiles.insert( tr("PDF 1.3"), checkerSettings);
			checkerSettings.checkTransparency = false;
			doc->checkerProfiles.insert( tr("PDF 1.4"), checkerSettings);
			checkerSettings.checkTransparency = true;
			checkerSettings.checkAnnotations = true;
			checkerSettings.minResolution = 144.0;
			doc->checkerProfiles.insert( tr("PDF/X-3"), checkerSettings);
			doc->curCheckProfile = tr("Postscript");
		}
		if (doc->PDF_Options.LPISettings.count() == 0)
		{
			struct LPIData lpo;
			lpo.Frequency = 75;
			lpo.SpotFunc = 2;
			lpo.Angle = 105;
			doc->PDF_Options.LPISettings.insert("Cyan", lpo);
			lpo.Angle = 75;
			doc->PDF_Options.LPISettings.insert("Magenta", lpo);
			lpo.Angle = 90;
			doc->PDF_Options.LPISettings.insert("Yellow", lpo);
			lpo.Angle = 45;
			doc->PDF_Options.LPISettings.insert("Black", lpo);
		}
		connect(w, SIGNAL(Schliessen()), this, SLOT(DoFileClose()));
		if (fl->ReplacedFonts.count() != 0)
		{
			qApp->setOverrideCursor(QCursor(arrowCursor), true);
			QString mess = tr("Some Fonts used by this Document have been substituted:")+"\n\n";
			QMap<QString,QString>::Iterator it;
			for (it = fl->ReplacedFonts.begin(); it != fl->ReplacedFonts.end(); ++it)
			{
				mess += it.key() + tr(" was replaced by: ")+ it.data() +"\n";
			}
			QMessageBox::warning(this, tr("Warning"), mess, 1, 0, 0);
		}
		if (!doc->HasCMS)
		{
			doc->CMSSettings.DefaultInputProfile = Prefs.DCMSset.DefaultInputProfile;
			doc->CMSSettings.DefaultInputProfile2 = Prefs.DCMSset.DefaultInputProfile2;
			doc->CMSSettings.DefaultMonitorProfile = Prefs.DCMSset.DefaultMonitorProfile;
			doc->CMSSettings.DefaultPrinterProfile = Prefs.DCMSset.DefaultPrinterProfile;
			doc->CMSSettings.DefaultIntentPrinter = Prefs.DCMSset.DefaultIntentPrinter;
			doc->CMSSettings.DefaultIntentMonitor = Prefs.DCMSset.DefaultIntentMonitor;
			doc->CMSSettings.DefaultIntentMonitor2 = Prefs.DCMSset.DefaultIntentMonitor2;
			doc->CMSSettings.SoftProofOn = Prefs.DCMSset.SoftProofOn;
			doc->CMSSettings.GamutCheck = Prefs.DCMSset.GamutCheck;
			doc->CMSSettings.BlackPoint = Prefs.DCMSset.BlackPoint;
			doc->CMSSettings.CMSinUse = false;
		}
		if (CMSavail)
		{
			bool cmsWarning = false;
			QStringList missing;
			QStringList replacement;
			if (!InputProfiles.contains(doc->CMSSettings.DefaultInputProfile))
			{
				cmsWarning = true;
				missing.append(doc->CMSSettings.DefaultInputProfile);
				replacement.append(Prefs.DCMSset.DefaultInputProfile);
				doc->CMSSettings.DefaultInputProfile = Prefs.DCMSset.DefaultInputProfile;
			}
			if (!InputProfiles.contains(doc->CMSSettings.DefaultInputProfile2))
			{
				cmsWarning = true;
				missing.append(doc->CMSSettings.DefaultInputProfile2);
				replacement.append(Prefs.DCMSset.DefaultInputProfile2);
				doc->CMSSettings.DefaultInputProfile2 = Prefs.DCMSset.DefaultInputProfile2;
			}
			if (!MonitorProfiles.contains(doc->CMSSettings.DefaultMonitorProfile))
			{
				cmsWarning = true;
				missing.append(doc->CMSSettings.DefaultMonitorProfile);
				replacement.append(Prefs.DCMSset.DefaultMonitorProfile);
				doc->CMSSettings.DefaultMonitorProfile = Prefs.DCMSset.DefaultMonitorProfile;
			}
			if (!PrinterProfiles.contains(doc->CMSSettings.DefaultPrinterProfile))
			{
				cmsWarning = true;
				missing.append(doc->CMSSettings.DefaultPrinterProfile);
				replacement.append(Prefs.DCMSset.DefaultPrinterProfile);
				doc->CMSSettings.DefaultPrinterProfile = Prefs.DCMSset.DefaultPrinterProfile;
			}
			if (!PrinterProfiles.contains(doc->PDF_Options.PrintProf))
			{
				cmsWarning = true;
				missing.append(doc->PDF_Options.PrintProf);
				replacement.append(Prefs.DCMSset.DefaultPrinterProfile);
				doc->PDF_Options.PrintProf = doc->CMSSettings.DefaultPrinterProfile;
			}
			if (!InputProfiles.contains(doc->PDF_Options.ImageProf))
			{
				cmsWarning = true;
				missing.append(doc->PDF_Options.ImageProf);
				replacement.append(Prefs.DCMSset.DefaultInputProfile);
				doc->PDF_Options.ImageProf = doc->CMSSettings.DefaultInputProfile;
			}
			if (!InputProfiles.contains(doc->PDF_Options.SolidProf))
			{
				cmsWarning = true;
				missing.append(doc->PDF_Options.SolidProf);
				replacement.append(Prefs.DCMSset.DefaultInputProfile2);
				doc->PDF_Options.SolidProf = doc->CMSSettings.DefaultInputProfile2;
			}
			if ((cmsWarning) && (doc->HasCMS))
			{
				qApp->setOverrideCursor(QCursor(arrowCursor), true);
				QString mess = tr("Some ICC-Profiles used by this Document are not installed:")+"\n\n";
				for (uint m = 0; m < missing.count(); ++m)
				{
					mess += missing[m] + tr(" was replaced by: ")+replacement[m]+"\n";
				}
				QMessageBox::warning(this, tr("Warning"), mess, 1, 0, 0);
			}
#ifdef HAVE_CMS
			doc->SoftProofing = doc->CMSSettings.SoftProofOn;
			doc->Gamut = doc->CMSSettings.GamutCheck;
			CMSuse = doc->CMSSettings.CMSinUse;
			doc->IntentPrinter = doc->CMSSettings.DefaultIntentPrinter;
			doc->IntentMonitor = doc->CMSSettings.DefaultIntentMonitor;
			SoftProofing = doc->CMSSettings.SoftProofOn;
			Gamut = doc->CMSSettings.GamutCheck;
			IntentPrinter = doc->CMSSettings.DefaultIntentPrinter;
			IntentMonitor = doc->CMSSettings.DefaultIntentMonitor;
			doc->OpenCMSProfiles(InputProfiles, MonitorProfiles, PrinterProfiles);
			CMSuse = doc->CMSSettings.CMSinUse;
			stdProofG = doc->stdProof;
			stdTransG = doc->stdTrans;
			stdProofImgG = doc->stdProofImg;
			stdTransImgG = doc->stdTransImg;
			stdProofCMYKG = doc->stdProofCMYK;
			stdTransCMYKG = doc->stdTransCMYK;
			stdTransRGBG = doc->stdTransRGB;
			CMSoutputProf = doc->DocOutputProf;
			CMSprinterProf = doc->DocPrinterProf;
			if (static_cast<int>(cmsGetColorSpace(doc->DocInputProf)) == icSigRgbData)
				doc->CMSSettings.ComponentsInput2 = 3;
			if (static_cast<int>(cmsGetColorSpace(doc->DocInputProf)) == icSigCmykData)
				doc->CMSSettings.ComponentsInput2 = 4;
			if (static_cast<int>(cmsGetColorSpace(doc->DocInputProf)) == icSigCmyData)
				doc->CMSSettings.ComponentsInput2 = 3;
			if (static_cast<int>(cmsGetColorSpace(doc->DocPrinterProf)) == icSigRgbData)
				doc->CMSSettings.ComponentsPrinter = 3;
			if (static_cast<int>(cmsGetColorSpace(doc->DocPrinterProf)) == icSigCmykData)
				doc->CMSSettings.ComponentsPrinter = 4;
			if (static_cast<int>(cmsGetColorSpace(doc->DocPrinterProf)) == icSigCmyData)
				doc->CMSSettings.ComponentsPrinter = 3;
			doc->PDF_Options.SComp = doc->CMSSettings.ComponentsInput2;
#endif
			if (doc->CMSSettings.CMSinUse)
			{
				RecalcColors();
				view->RecalcPictures(&InputProfiles);
			}
		}
		else
		{
			doc->CMSSettings.CMSinUse = false;
#ifdef HAVE_CMS
			CMSuse = doc->CMSSettings.CMSinUse;
#endif
		}
		propertiesPalette->Cpal->SetColors(doc->PageColors);
		propertiesPalette->Cpal->ChooseGrad(0);
		if (fl->FileType > 1)
		{
			doc->setName(FName+tr("(converted)"));
			QFileInfo fi(doc->DocName);
			doc->setName(fi.fileName());
		}
		else
			doc->setName(FName);
		doc->MasterP = false;
		doc->Language = GetLang(doc->Language);
		HaveNewDoc();
		propertiesPalette->updateCList();
		doc->hasName = true;
		if (doc->MasterPages.count() == 0)
		{
			doc->DocPages = doc->Pages;
			doc->Pages = doc->MasterPages;
			doc->PageC = doc->MasterPages.count();
			bool atf = doc->PageAT;
			doc->PageAT = false;
			slotNewPage(0);
			doc->PageAT = atf;
			doc->MasterNames["Normal"] = 0;
			doc->Pages.at(0)->setPageName("Normal");
			doc->MasterPages = doc->Pages;
			doc->PageC = doc->DocPages.count();
			doc->Pages = doc->DocPages;
			doc->MasterP = false;
		}
		doc->loading = false;
		view->slotDoZoom();
		view->GotoPage(0);
		doc->DocItems = doc->Items;
		doc->RePos = true;
		QPixmap pgPix(10, 10);
		QRect rd = QRect(0,0,9,9);
		ScPainter *painter = new ScPainter(&pgPix, pgPix.width(), pgPix.height());
		doc->Pages = doc->MasterPages;
		doc->MasterP = true;
		doc->Items = doc->MasterItems;
		for (uint azz=0; azz<doc->MasterItems.count(); ++azz)
		{
			PageItem *ite = doc->MasterItems.at(azz);
			if ((ite->itemType() == PageItem::TextFrame) || (ite->itemType() == PageItem::PathText))
			{
				if (ite->itemType() == PageItem::PathText)
				{
					ite->Frame = false;
					view->UpdatePolyClip(ite);
				}
				ite->DrawObj(painter, rd);
			}
		}
//		RestoreBookMarks();
		doc->Pages = doc->DocPages;
		doc->MasterP = false;
		doc->Items = doc->DocItems;
		for (uint azz=0; azz<doc->Items.count(); ++azz)
		{
			PageItem *ite = doc->Items.at(azz);
			view->setRedrawBounding(ite);
			ite->OwnPage = view->OnPage(ite);
			if ((ite->itemType() == PageItem::TextFrame) || (ite->itemType() == PageItem::PathText))
			{
				if (ite->itemType() == PageItem::PathText)
				{
					ite->Frame = false;
					view->UpdatePolyClip(ite);
				}
				ite->DrawObj(painter, rd);
			}
/*			if (doc->OldBM)
			{
				if ((ite->itemType() == PageItem::TextFrame) && (ite->isBookmark))
					bookmarkPalette->BView->AddPageItem(ite);
			}
			else
			{
				if ((ite->itemType() == PageItem::TextFrame) && (ite->isBookmark))
					bookmarkPalette->BView->ChangeItem(ite->BMnr, ite->ItemNr);
			} */
		}
		delete painter;
//		if (doc->OldBM)
//			StoreBookmarks();
		doc->RePos = false;
		doc->setUnModified();
		updateRecent(FName);
		FMess->setText( tr("Ready"));
		ret = true;
		for (uint p = 0; p < doc->Pages.count(); ++p)
		{
			Apply_Temp(doc->Pages.at(p)->MPageNam, p, false);
		}
		if (fl->FileType > 1)
		{
			doc->hasName = false;
			slotFileSaveAs();
		}
		delete fl;
		view->setUpdatesEnabled(true);
		w->setUpdatesEnabled(true);
		if ((wsp->windowList().isEmpty()) || (wsp->windowList().count() == 1))
			w->showMaximized();
		else
			w->show();
		view->show();
		newActWin(w);
		connect(doc->ASaveTimer, SIGNAL(timeout()), w, SLOT(slotAutoSave()));
		connect(w, SIGNAL(AutoSaved()), this, SLOT(slotAutoSaved()));
		connect(fileWatcher, SIGNAL(fileChanged(QString )), view, SLOT(updatePict(QString)));
		connect(fileWatcher, SIGNAL(fileDeleted(QString )), view, SLOT(removePict(QString)));
		connect(undoManager, SIGNAL(undoRedoDone()), view, SLOT(DrawNew()));
		if (doc->AutoSave)
			doc->ASaveTimer->start(doc->AutoSaveTime);
		scrActions["fileSave"]->setEnabled(false);
//		ActWin->NrItems = bookmarkPalette->BView->NrItems;
//		ActWin->First = bookmarkPalette->BView->First;
//		ActWin->Last = bookmarkPalette->BView->Last;
	}
	else
	{
		pagePalette->Vie = 0;
	}
	undoManager->switchStack(doc->DocName);
	pagePalette->Rebuild();
	qApp->setOverrideCursor(QCursor(arrowCursor), true);
	undoManager->setUndoEnabled(true);
	return ret;
}

void ScribusApp::slotFileOpen()
{
	if (view->SelItem.count() != 0)
	{
		PageItem *currItem = view->SelItem.at(0);
		if (currItem->itemType() == PageItem::ImageFrame)
		{
			QString formats = "";
			QString formatD = tr("All Supported Formats")+" (";
			QString form1 = "";
			QString form2 = "";
			for ( uint i = 0; i < QImageIO::inputFormats().count(); ++i )
			{
				form1 = QString(QImageIO::inputFormats().at(i)).lower();
				form2 = QString(QImageIO::inputFormats().at(i)).upper();
				if (form1 == "jpeg")
				{
					form1 = "jpg";
					form2 = "JPG";
				}
				if ((form1 == "png") || (form1 == "xpm") || (form1 == "gif"))
				{
					formats += form2 + " (*."+form1+" *."+form2+");;";
					formatD += "*."+form1+" *."+form2+" ";
				}
				else if (form1 == "jpg")
				{
					// JPEG is a special case because both .jpg and .jpeg
					// are acceptable extensions.
					formats += "JPEG (*.jpg *.jpeg *.JPG *.JPEG);;";
					formatD += "*.jpg *.jpeg *.JPG *.JPEG ";
				}
			}
#ifdef HAVE_TIFF
			formats += "TIFF (*.tif *.tiff *.TIF *TIFF);;";
			formatD += "*.tif *.tiff *.TIF *TIFF";
#endif
			formats += "PSD (*.psd *.PSD);;";
			formatD += " *.psd *.PSD";
			formats += "EPS (*.eps *.EPS);;PDF (*.pdf *.PDF);;" + tr("All Files (*)");
			formatD += " *.eps *.EPS *.pdf *.PDF";
			formatD += ");;"+formats;
			QString docDir = ".";
			if (Prefs.DocDir != "")
				docDir = dirs->get("images", Prefs.DocDir);
			else
				docDir = dirs->get("images", ".");
			QString fileName = CFileDialog( docDir, tr("Open"), formatD, "", true);
			if (!fileName.isEmpty())
			{
				dirs->set("images", fileName.left(fileName.findRev("/")));
				currItem->EmProfile = "";
				currItem->pixm.imgInfo.isRequest = false;
				currItem->UseEmbedded = true;
				currItem->IProfile = doc->CMSSettings.DefaultInputProfile;
				currItem->IRender = doc->CMSSettings.DefaultIntentMonitor2;
				qApp->setOverrideCursor( QCursor(Qt::WaitCursor) );
				qApp->eventLoop()->processEvents(QEventLoop::ExcludeUserInput);
				view->LoadPict(fileName, currItem->ItemNr);
				view->AdjustPictScale(currItem, false);
				qApp->eventLoop()->processEvents(QEventLoop::ExcludeUserInput);
				qApp->restoreOverrideCursor();
				view->DrawNew();
				propertiesPalette->Cpal->SetColors(doc->PageColors);
				propertiesPalette->updateCList();
				propertiesPalette->ShowCMS();
				slotDocCh();
			}
		}
		if (currItem->itemType() == PageItem::TextFrame)
		{
			gtGetText* gt = new gtGetText();
			gt->run(false);
			delete gt;
			if (doc->docHyphenator->AutoCheck)
				doc->docHyphenator->slotHyphenate(currItem);
			view->DrawNew();
			slotDocCh();
		}
	}
}

/*!
 \fn void slotFileAppend()
 \author Franz Schmid
 \date
 \brief Appends a Textfile to the Text in the selected Textframe at the Cursorposition
 \param None
 \retval None
 */
void ScribusApp::slotFileAppend()
{
	if (view->SelItem.count() != 0)
	{
		gtGetText* gt = new gtGetText();
		gt->run(true);
		delete gt;
		if (doc->docHyphenator->AutoCheck)
			doc->docHyphenator->slotHyphenate(view->SelItem.at(0));
		view->DrawNew();
		slotDocCh();
	}
}

void ScribusApp::slotFileRevert()
{
	if ((doc->hasName) && (doc->isModified()) && (!doc->TemplateMode))
	{
		QString fn = doc->DocName;
		QFileInfo fi(fn);
		QDir::setCurrent(fi.dirPath(true));
		doc->setUnModified();
		slotFileClose();
		qApp->processEvents();
		LadeDoc(fn);
	}
}

void ScribusApp::slotAutoSaved()
{
	if (ActWin == sender())
	{
		scrActions["fileSave"]->setEnabled(false);
		ActWin->setCaption(doc->DocName);
	}
}

bool ScribusApp::slotFileSave()
{
	//Scribus 1.3.x warning, remove at a later stage
	if (!warningVersion(this))
		return false;
	//
	bool ret = false;
	if (doc->hasName)
	{
		QString fn = doc->DocName;
		ret = DoFileSave(fn);
		if (!ret)
			QMessageBox::warning(this, tr("Warning"), tr("Cannot write the File: \n%1").arg(fn), tr("OK"));
	}
	else
		ret = slotFileSaveAs();
	return ret;
}

bool ScribusApp::slotFileSaveAs()
{
	//Scribus 1.3.x warning, remove at a later stage
	if (!warningVersion(this))
		return false;
	//
	bool ret = false;
	QString fna;
	PrefsContext* docContext = prefsFile->getContext("docdirs", false);
	QString wdir = ".";
	if (doc->hasName)
	{
		QFileInfo fi(doc->DocName);
		wdir = fi.dirPath();
		fna = fi.dirPath()+"/"+fi.baseName()+".sla";
	}
	else
	{
		if (Prefs.DocDir != "")
			wdir = docContext->get("save_as", Prefs.DocDir);
		else
			wdir = docContext->get("save_as", ".");
		if (wdir.right(1) != "/")
			fna = wdir + "/";
		else
			fna = wdir;
		fna += doc->DocName + ".sla";
	}
#ifdef HAVE_LIBZ
	QString fn = CFileDialog( wdir, tr("Save as"), tr("Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)"), fna, false, false, true);
#else
	QString fn = CFileDialog( wdir, tr("Save as"), tr("Documents (*.sla *.scd);;All Files (*)"), fna, false, false, false);
#endif
	if (!fn.isEmpty())
	{
		docContext->set("save_as", fn.left(fn.findRev("/")));
		if ((fn.endsWith(".sla")) || (fn.endsWith(".sla.gz")))
			fna = fn;
		else
			fna = fn+".sla";
		if (overwrite(this, fna))
		{
			ret = DoFileSave(fna);
			if (!ret)
				QMessageBox::warning(this, tr("Warning"), tr("Cannot write the File: \n%1").arg(fn), tr("OK"));
			else
				doc->PDF_Options.Datei = ""; // #1482 reset the pdf file name
		}
	}
	FMess->setText( tr("Ready"));
	return ret;
}

bool ScribusApp::DoFileSave(QString fn)
{
	bool ret = true;
	fileWatcher->forceScan();
	fileWatcher->stop();
	ReorgFonts();
	FMess->setText( tr("Saving..."));
	FProg->reset();
	QFileInfo fi(fn);
	QDir::setCurrent(fi.dirPath(true));
	ScriXmlDoc *ss = new ScriXmlDoc();
	qApp->processEvents();
	ret = ss->WriteDoc(fn, doc, FProg);
	delete ss;
	if (ret)
	{
		doc->setUnModified();
		ActWin->setCaption(fn);
		doc->setName(fn);
		undoManager->renameStack(fn);
		scrActions["fileSave"]->setEnabled(false);
		scrActions["fileRevert"]->setEnabled(false);
		updateRecent(fn);
		doc->hasName = true;
	}
	FMess->setText("");
	FProg->reset();
	fileWatcher->start();
	return ret;
}

bool ScribusApp::slotFileClose()
{
	ScribusWin* tw = ActWin;
	singleClose = false;
	ActWin->close();
	if (tw == ActWin)
		return false;
	else
		return true;
	windowsMenuAboutToShow();
}

bool ScribusApp::DoFileClose()
{
	if (doc->viewCount > 1)
	{
		doc->viewCount--;
		if(doc->TemplateMode)
		{
			ActWin->muster->close();
			qApp->processEvents();
		}
		setAppMode(NormalMode);
		disconnect(fileWatcher, SIGNAL(fileChanged(QString )), view, SLOT(updatePict(QString)));
		disconnect(fileWatcher, SIGNAL(fileDeleted(QString )), view, SLOT(removePict(QString)));
		view->close();
		delete view;
		view = NULL;
		doc = NULL;
		ActWin = NULL;
		return true;
	}
	undoManager->removeStack(doc->DocName);
	if(doc->TemplateMode)
	{
		ActWin->muster->close();
		qApp->processEvents();
	}
	setAppMode(NormalMode);
	doc->ASaveTimer->stop();
	disconnect(doc->ASaveTimer, SIGNAL(timeout()), doc->WinHan, SLOT(slotAutoSave()));
	disconnect(doc->WinHan, SIGNAL(AutoSaved()), this, SLOT(slotAutoSaved()));
	disconnect(fileWatcher, SIGNAL(fileChanged(QString )), view, SLOT(updatePict(QString)));
	disconnect(fileWatcher, SIGNAL(fileDeleted(QString )), view, SLOT(removePict(QString)));
	for (uint a = 0; a < doc->Items.count(); ++a)
	{
		PageItem *currItem = doc->Items.at(a);
		if (currItem->PicAvail)
			fileWatcher->removeFile(currItem->Pfile);
	}
	if (CMSavail)
		doc->CloseCMSProfiles();
//	propertiesPalette->NewSel(-1);
	propertiesPalette->UnsetDoc();
	pagePalette->Vie = 0;
	pagePalette->Rebuild();
	propertiesPalette->Spal->setFormats(0);
	propertiesPalette->SetLineFormats(0);
	if (doc->EditClip)
		nodePalette->doc = 0;
	bookmarkPalette->BView->clear();
	bookmarkPalette->BView->NrItems = 0;
	bookmarkPalette->BView->First = 1;
	bookmarkPalette->BView->Last = 0;
	if ((wsp->windowList().isEmpty()) || (wsp->windowList().count() == 1))
	{
#ifdef HAVE_CMS
		CMSuse = false;
		SoftProofing = Prefs.DCMSset.SoftProofOn;
		IntentPrinter = Prefs.DCMSset.DefaultIntentPrinter;
		IntentMonitor = Prefs.DCMSset.DefaultIntentMonitor;
#endif
		scrActions["fileDocSetup"]->setEnabled(false);
		scrActions["fileDocInfo"]->setEnabled(false);
		scrActions["filePrint"]->setEnabled(false);
		scrActions["fileSave"]->setEnabled(false);
		scrActions["fileSaveAs"]->setEnabled(false);
		scrActions["fileRevert"]->setEnabled(false);
		scrActions["fileCollect"]->setEnabled(false);
		scrActions["fileClose"]->setEnabled(false);
		if (scrActions["PrintPreview"])
			scrActions["PrintPreview"]->setEnabled(false);
		if (scrActions["SaveAsTemplate"])
			scrActions["SaveAsTemplate"]->setEnabled(false);
		scrMenuMgr->setMenuEnabled("FileExport", false);
		scrActions["fileExportAsPDF"]->setEnabled(false);
		scrActions["fileExportText"]->setEnabled(false);
		scrActions["fileExportAsEPS"]->setEnabled(false);
		scrActions["fileImportText"]->setEnabled(false);
		scrActions["fileImportImage"]->setEnabled(false);
		scrActions["fileImportAppendText"]->setEnabled(false);
		scrActions["fileImportPage"]->setEnabled(false);

		scrActions["editUndoAction"]->setEnabled(false);
		scrActions["editRedoAction"]->setEnabled(false);
		scrActions["editCut"]->setEnabled(false);
		scrActions["editCopy"]->setEnabled(false);
		scrActions["editPaste"]->setEnabled(false);
		scrActions["editClearContents"]->setEnabled(false);
		scrActions["editSelectAll"]->setEnabled(false);
		scrActions["editDeselectAll"]->setEnabled(false);
		scrActions["editParaStyles"]->setEnabled(false);
		scrActions["editLineStyles"]->setEnabled(false);
		scrActions["editSearchReplace"]->setEnabled(false);
		scrActions["editTemplates"]->setEnabled(false);
		scrActions["editJavascripts"]->setEnabled(false);

		//scrActions["toolsPreflightVerifier"]->setEnabled(false);

		scrActions["extrasHyphenateText"]->setEnabled(false);
		scrMenuMgr->setMenuEnabled("View", false);
		scrMenuMgr->setMenuEnabled("Windows", false);
		scrActions["viewSnapToGuides"]->setOn(false);
		scrActions["viewSnapToGrid"]->setOn(false);

		scrMenuMgr->setMenuEnabled("Insert", false);
		scrMenuMgr->setMenuEnabled("Page", false);
		scrMenuMgr->setMenuEnabled("Extras", false);
		scrMenuMgr->setMenuEnabled("Style", false);
		scrMenuMgr->setMenuEnabled("Item", false);
		WerkTools->setEnabled(false);
		WerkToolsP->setEnabled(false);
		ColorMenC->clear();
		propertiesPalette->Cpal->SetColors(Prefs.DColors);
		propertiesPalette->Cpal->ChooseGrad(0);
		FMess->setText( tr("Ready"));

		PrinterUsed = false;
	}
	view->close();
	delete view;
	outlinePalette->itemMap.clear();
	outlinePalette->pageMap.clear();
	outlinePalette->templatePageMap.clear();
	outlinePalette->templateItemMap.clear();
	doc->loading = true;
	outlinePalette->reportDisplay->clear();
	layerPalette->ClearInhalt();
	docCheckerPalette->clearErrorList();
	HaveDoc--;
	view = NULL;
	delete doc;
	doc = NULL;
	ActWin = NULL;
	return true;
}

void ScribusApp::slotFilePrint()
{
	//QString fna, prn, cmd, scmd, cc, data, SepNam;
	//int Nr;
	//bool fil, sep, farbe, PSfile, mirrorH, mirrorV, useICC, DoGCR;
	//PSfile = false;
	if (doc->checkerProfiles[doc->curCheckProfile].autoCheck)
	{
		scanDocument();
		if ((doc->docItemErrors.count() != 0) || (doc->masterItemErrors.count() != 0))
		{
			if (doc->checkerProfiles[doc->curCheckProfile].ignoreErrors)
			{
				int t = QMessageBox::warning(this, tr("Warning"),
											tr("Detected some Errors.\nConsider using the Preflight Checker to correct them"),
											tr("Abort"), tr("Ignore"), 0, 0, 0);
				if (t == 0)
					return;
			}
			else
			{
				connect(docCheckerPalette, SIGNAL(ignoreAllErrors()), this, SLOT(slotReallyPrint()));
				docCheckerPalette->noButton = false;
				docCheckerPalette->checkMode = 3;
				docCheckerPalette->buildErrorList(doc);
				docCheckerPalette->show();
				scrActions["toolsPreflightVerifier"]->setOn(true);
				return;
			}
		}
	}
	slotReallyPrint();
}

void ScribusApp::slotReallyPrint()
{
	if (!docCheckerPalette->noButton)
	{
		docCheckerPalette->hide();
		docCheckerPalette->checkMode = 0;
		docCheckerPalette->noButton = true;
		docCheckerPalette->ignoreErrors->hide();
		scrActions["toolsPreflightVerifier"]->setOn(false);
		disconnect(docCheckerPalette, SIGNAL(ignoreAllErrors()), this, SLOT(slotReallyPrint()));
	}
	PrintOptions options;
	FMess->setText( tr("Printing..."));
	if (PrinterUsed)
	{
		options.printer = PDef.Pname;
		options.filename = PDef.Dname;
	}
	else
	{
		options.printer = "";
		if (!doc->DocName.startsWith( tr("Document")))
		{
			QFileInfo fi(doc->DocName);
			options.filename = fi.dirPath()+"/"+fi.baseName()+".ps";
		}
		else
		{
			QDir di = QDir();
			options.filename = di.currentDirPath()+"/"+doc->DocName+".ps";
		}
	}
	options.copies = 1;
	Druck *printer = new Druck(this, options.filename, options.printer, PDef.Command, Prefs.GCRMode);
	printer->setMinMax(1, doc->Pages.count(), doc->currentPage->PageNr+1);
	if (printer->exec())
	{
		ReOrderText(doc, view);
		qApp->setOverrideCursor(QCursor(waitCursor), true);
		options.printer = printer->printerName();
		options.filename = printer->outputFileName();
		options.toFile = printer->outputToFile();
		if (printer->CurrentPage->isChecked())
			options.pageNumbers.push_back(doc->currentPage->PageNr+1);
		else
		{
			if (printer->RadioButton1->isChecked())
				parsePagesString("*", &options.pageNumbers, doc->PageC);
			else
				parsePagesString(printer->PageNr->text(), &options.pageNumbers, doc->PageC);
		}
		options.copies = printer->numCopies();
		options.outputSeparations = printer->outputSeparations();
		options.separationName = printer->separationName();
		options.useColor = printer->color();
		options.mirrorH = printer->MirrorH;
		options.mirrorV = printer->MirrorV;
		options.useICC = printer->ICCinUse;
		options.doGCR = printer->DoGCR;
		options.PSLevel = printer->PSLevel;
		options.setDevParam = printer->doDev;
		PDef.Pname = options.printer;
		PDef.Dname = options.filename;
		if (printer->OtherCom->isChecked())
		{
			PDef.Command = printer->Command->text();
			options.printerCommand = printer->Command->text();
			options.useAltPrintCommand = true;
		}
		else
		{
			options.useAltPrintCommand = false;
		}
#ifdef HAVE_CUPS
		options.printerOptions = printer->PrinterOpts;
#endif
#ifndef HAVE_CUPS
		options.printerOptions = QString("");
#endif
		PrinterUsed = true;
		if (!doPrint(&options))
			QMessageBox::warning(this, tr("Warning"), tr("Printing failed!"), tr("OK"));
		qApp->setOverrideCursor(QCursor(arrowCursor), true);
	}
	delete printer;
	FMess->setText( tr("Ready"));
}

/*!
 \fn ScribusApp::doPrint()
 \author Franz Schmid
 \date
 \brief Generate and print PostScript from a doc
 \param options PrintOptions struct to control all settings
 \sa ScribusApp::slotFilePrint()
 \retval True for success
 */
bool ScribusApp::doPrint(PrintOptions *options)
{
	bool retw = false;
	QMap<QString,QFont> ReallyUsed;
	QString filename = options->filename;
	ReallyUsed.clear();
	GetUsedFonts(&ReallyUsed);
	fileWatcher->forceScan();
	fileWatcher->stop();
	PSLib *dd = getPSDriver(true, Prefs.AvailFonts, ReallyUsed, doc->PageColors, false);
	if (dd != NULL)
	{
		bool PSfile = false;
		if (options->toFile)
			PSfile = dd->PS_set_file(filename);
		else
		{
			PSfile = dd->PS_set_file(PrefsPfad+"/tmp.ps");
			filename = PrefsPfad+"/tmp.ps";
		}
		if (PSfile)
		{
			// Write the PS to a file
			CMYKColor::UseProf = options->useICC;
			dd->CreatePS(doc, view, options->pageNumbers, options->outputSeparations, options->separationName,
			               options->useColor, options->mirrorH, options->mirrorV, options->useICC, options->doGCR, options->setDevParam);
			CMYKColor::UseProf = true;
			if (options->PSLevel != 3)
			{
				// use gs to convert our PS to a lower version
				QString tmp;
				QString opts = "-dDEVICEWIDTHPOINTS=";
				opts += tmp.setNum(doc->PageB);
				opts += " -dDEVICEHEIGHTPOINTS=";
				opts += tmp.setNum(doc->PageH);
				if (options->PSLevel == 1)
					system("ps2ps -dLanguageLevel=1 "+opts+" \""+filename+"\" \""+filename+".tmp\"");
				else
					system("ps2ps "+opts+" \""+filename+"\" \""+filename+".tmp\"");
				system("mv \""+filename+".tmp\" \""+filename+"\"");
			}
			if (!options->toFile)
			{
				// print and delete the PS file
				QString cmd;
				if (options->useAltPrintCommand)
				{
					cmd = options->printerCommand + " "+filename;
					system(cmd);
				}
				else
				{
					QString cc;
					cmd = "lpr -P" + options->printer;
					if (options->copies > 1)
						cmd += " -#" + cc.setNum(options->copies);
					cmd += options->printerOptions;
					cmd += " "+filename;
					system(cmd);
				}
				unlink(filename);
			}
			retw = true;
		}
		else
			retw = false;
		delete dd;
		closePSDriver();
	}
	fileWatcher->start();
	return retw;
}

void ScribusApp::slotFileQuit()
{
	propertiesPalette->UnsetDoc();
	pluginManager->savePreferences();
	close();
}

void ScribusApp::slotEditCut()
{
	uint a;
	NoFrameEdit();
	QString BufferI = "";
	if ((HaveDoc) && (view->SelItem.count() != 0))
	{
		if (UndoManager::undoEnabled())
		{
			if (view->SelItem.count() > 1)
				undoManager->beginTransaction(Um::SelectionGroup, Um::IGroup, Um::Cut,"",Um::ICut);
			else
				undoManager->beginTransaction(view->SelItem.at(0)->getUName(),
											  view->SelItem.at(0)->getUPixmap(), Um::Cut, "", Um::ICut);
		}
		Buffer2 = "<SCRIBUSTEXT>";
		PageItem *currItem = view->SelItem.at(0);
		if (doc->appMode == EditMode)
		{
			if ((currItem->itemText.count() == 0) || (!currItem->HasSel))
				return;
			PageItem *nextItem = currItem;
			while (nextItem != 0)
			{
				if (nextItem->BackBox != 0)
					nextItem = nextItem->BackBox;
				else
					break;
			}
			while (nextItem != 0)
			{
				for (a = 0; a < nextItem->itemText.count(); ++a)
				{
					if (nextItem->itemText.at(a)->cselect)
					{
						if (nextItem->itemText.at(a)->ch == QChar(13))
						{
							Buffer2 += QChar(5);
							BufferI += QChar(10);
						}
						else if (nextItem->itemText.at(a)->ch == QChar(9))
						{
							Buffer2 += QChar(4);
							BufferI += QChar(9);
						}
						else
						{
							Buffer2 += nextItem->itemText.at(a)->ch;
							BufferI += nextItem->itemText.at(a)->ch;
						}
						Buffer2 += "\t";
						Buffer2 += nextItem->itemText.at(a)->cfont->SCName+"\t";
						Buffer2 += QString::number(nextItem->itemText.at(a)->csize)+"\t";
						Buffer2 += nextItem->itemText.at(a)->ccolor+"\t";
						Buffer2 += QString::number(nextItem->itemText.at(a)->cextra)+"\t";
						Buffer2 += QString::number(nextItem->itemText.at(a)->cshade)+'\t';
						Buffer2 += QString::number(nextItem->itemText.at(a)->cstyle)+'\t';
						Buffer2 += QString::number(nextItem->itemText.at(a)->cab)+'\t';
						Buffer2 += nextItem->itemText.at(a)->cstroke+"\t";
						Buffer2 += QString::number(nextItem->itemText.at(a)->cshade2)+'\t';
						Buffer2 += QString::number(nextItem->itemText.at(a)->cscale)+'\n';
					}
				}
				DeleteSel(nextItem);
				nextItem = nextItem->NextBox;
			}
			view->RefreshItem(currItem);
		}
		else
		{
			if (currItem->isTableItem && currItem->isSingleSel)
				return;
			ScriXmlDoc *ss = new ScriXmlDoc();
			BufferI = ss->WriteElem(&view->SelItem, doc, view);
			Buffer2 = BufferI;
			view->DeleteItem();
		}
		slotDocCh();
		BuFromApp = true;
		ClipB->setText(BufferI);
		scrActions["editPaste"]->setEnabled(true);
		if (UndoManager::undoEnabled())
			undoManager->commit();
	}
}

void ScribusApp::slotEditCopy()
{
	uint a;
	NoFrameEdit();
	QString BufferI = "";
	if ((HaveDoc) && (view->SelItem.count() != 0))
	{
		Buffer2 = "<SCRIBUSTEXT>";
		PageItem *currItem = view->SelItem.at(0);
		if ((doc->appMode == EditMode) && (currItem->HasSel))
		{
			Buffer2 += "";
			PageItem *nextItem = currItem;
			while (nextItem != 0)
			{
				if (nextItem->BackBox != 0)
					nextItem = nextItem->BackBox;
				else
					break;
			}
			while (nextItem != 0)
			{
				for (a = 0; a < nextItem->itemText.count(); ++a)
				{
					if (nextItem->itemText.at(a)->cselect)
					{
						if (nextItem->itemText.at(a)->ch == QChar(13))
						{
							Buffer2 += QChar(5);
							BufferI += QChar(10);
						}
						else if (nextItem->itemText.at(a)->ch == QChar(9))
						{
							Buffer2 += QChar(4);
							BufferI += QChar(9);
						}
						else
						{
							Buffer2 += nextItem->itemText.at(a)->ch;
							BufferI += nextItem->itemText.at(a)->ch;
						}
						Buffer2 += "\t";
						Buffer2 += nextItem->itemText.at(a)->cfont->SCName+"\t";
						Buffer2 += QString::number(nextItem->itemText.at(a)->csize)+"\t";
						Buffer2 += nextItem->itemText.at(a)->ccolor+"\t";
						Buffer2 += QString::number(nextItem->itemText.at(a)->cextra)+"\t";
						Buffer2 += QString::number(nextItem->itemText.at(a)->cshade)+"\t";
						Buffer2 += QString::number(nextItem->itemText.at(a)->cstyle)+"\t";
						Buffer2 += QString::number(nextItem->itemText.at(a)->cab)+"\t";
						Buffer2 += nextItem->itemText.at(a)->cstroke+"\t";
						Buffer2 += QString::number(nextItem->itemText.at(a)->cshade2)+"\t";
						Buffer2 += QString::number(nextItem->itemText.at(a)->cscale)+"\n";
					}
				}
				nextItem = nextItem->NextBox;
			}
		}
		else
		{
			if (currItem->isTableItem && currItem->isSingleSel)
				return;
			ScriXmlDoc *ss = new ScriXmlDoc();
			BufferI = ss->WriteElem(&view->SelItem, doc, view);
			Buffer2 = BufferI;
			delete ss;
		}
		BuFromApp = true;
		ClipB->setText(BufferI);
		scrActions["editPaste"]->setEnabled(true);
	}
}

void ScribusApp::slotEditPaste()
{
	struct ScText *hg;
	NoFrameEdit();
	if (HaveDoc)
	{
		if (Buffer2.isNull())
			return;
		if (doc->appMode == EditMode)
		{
			PageItem *currItem = view->SelItem.at(0);
			if (currItem->HasSel)
				DeleteSel(currItem);
			if (Buffer2.startsWith("<SCRIBUSTEXT>"))
			{
				QString Buf = Buffer2.mid(13);
				QTextStream t(&Buf, IO_ReadOnly);
				QString cc;
				while (!t.atEnd())
				{
					cc = t.readLine();
					QStringList wt;
					QStringList::Iterator it;
					wt = QStringList::split("\t", cc);
					it = wt.begin();
					hg = new ScText;
					hg->ch = (*it);
					if (hg->ch == QChar(5))
						hg->ch = QChar(13);
					if (hg->ch == QChar(4))
						hg->ch = QChar(9);
					it++;
					hg->cfont = (*doc->AllFonts)[*it];
					it++;
					hg->csize = (*it).toInt();
					it++;
					hg->ccolor = *it;
					it++;
					hg->cextra = (*it).toInt();
					it++;
					hg->cshade = (*it).toInt();
					hg->cselect = false;
					it++;
					hg->cstyle = (*it).toInt();
					it++;
					hg->cab = (*it).toInt();
					it++;
					if (it == NULL)
						hg->cstroke = "None";
					else
						hg->cstroke = *it;
					it++;
					if (it == NULL)
						hg->cshade2 = 100;
					else
						hg->cshade2 = (*it).toInt();
					it++;
					if (it == NULL)
						hg->cscale = 100;
					else
						hg->cscale = (*it).toInt();
					currItem->itemText.insert(currItem->CPos, hg);
					currItem->CPos += 1;
					hg->PRot = 0;
					hg->PtransX = 0;
					hg->PtransY = 0;
				}
			}
			else
			{
				Serializer *ss = new Serializer("");
				ss->Objekt = Buffer2;
				int st = doc->currentParaStyle;
				if (st > 5)
					ss->GetText(currItem, st, doc->docParagraphStyles[st].Font, doc->docParagraphStyles[st].FontSize, true);
				else
					ss->GetText(currItem, st, currItem->IFont, currItem->ISize, true);
				delete ss;
				if (doc->docHyphenator->AutoCheck)
					doc->docHyphenator->slotHyphenate(currItem);
			}
			view->RefreshItem(currItem);
		}
		else
		{
			if (Buffer2.startsWith("<SCRIBUSELEM"))
			{
				view->Deselect(true);
				uint ac = doc->Items.count();
				slotElemRead(Buffer2, 0, 0, false, true, doc, view);
				for (uint as = ac; as < doc->Items.count(); ++as)
				{
					view->SelectItemNr(as);
				}
			}
		}
		slotDocCh(false);
	}
}

void ScribusApp::SelectAll()
{
	if (doc->appMode == EditMode)
	{
		PageItem *currItem = view->SelItem.at(0);
		PageItem *nextItem = currItem;
		while (nextItem != 0)
		{
			if (nextItem->BackBox != 0)
				nextItem = nextItem->BackBox;
			else
				break;
		}
		while (nextItem != 0)
		{
			for (uint a = 0; a < nextItem->itemText.count(); ++a)
			{
				nextItem->itemText.at(a)->cselect = true;
				nextItem->HasSel = true;
			}
			nextItem = nextItem->NextBox;
		}
		view->DrawNew();
		EnableTxEdit();
	}
	else
	{
		PageItem *currItem;
		view->Deselect();
		for (uint a = 0; a < doc->Items.count(); ++a)
		{
			currItem = doc->Items.at(a);
			if (currItem->LayerNr == doc->ActiveLayer)
			{
				if (!currItem->Select)
				{
					view->SelItem.append(currItem);
					currItem->Select = true;
					currItem->FrameOnly = true;
					currItem->paintObj();
				}
			}
		}
		if (view->SelItem.count() > 1)
		{
			view->setGroupRect();
			view->paintGroupRect();
			double x, y, w, h;
			view->getGroupRect(&x, &y, &w, &h);
			propertiesPalette->setXY(x, y);
			propertiesPalette->setXY(w, h);
		}
		if (view->SelItem.count() > 0)
		{
			currItem = view->SelItem.at(0);
			view->EmitValues(currItem);
			HaveNewSel(currItem->itemType());
		}
	}
}

void ScribusApp::deselectAll()
{
	if (view!=NULL)
		view->Deselect(true);
}

void ScribusApp::ClipChange()
{
	QString cc;
#if QT_VERSION  >= 0x030100
	cc = ClipB->text(QClipboard::Selection);
	if (cc.isNull())
		cc = ClipB->text(QClipboard::Clipboard);
#else
	cc = ClipB->text();
#endif

	scrActions["editPaste"]->setEnabled(false);
	if (!cc.isNull())
	{
		if (!BuFromApp)
			Buffer2 = cc;
		BuFromApp = false;
		if (HaveDoc)
		{
			if (cc.startsWith("<SCRIBUSELEM"))
			{
				if (doc->appMode != EditMode)
					scrActions["editPaste"]->setEnabled(true);
			}
			else
			{
				if (doc->appMode == EditMode)
					scrActions["editPaste"]->setEnabled(true);
			}
		}
	}
}

void ScribusApp::clearContents()
{
	view->ClearItem();
}

void ScribusApp::EnableTxEdit()
{
	scrActions["editCut"]->setEnabled(true);
	scrActions["editCopy"]->setEnabled(true);
	//scrActions["editClearContents"]->setEnabled(true);
}

void ScribusApp::DisableTxEdit()
{
	scrActions["editCut"]->setEnabled(false);
	scrActions["editCopy"]->setEnabled(false);
	//scrActions["editClearContents"]->setEnabled(false);
}

void ScribusApp::slotHelpAbout()
{
	About* dia = new About(this);
	dia->exec();
	delete dia;
}

void ScribusApp::slotHelpAboutQt()
{
	QMessageBox::aboutQt(this, tr("About Qt"));
}

void ScribusApp::slotOnlineHelp()
{
	HelpBrowser *dia = new HelpBrowser(this, tr("Scribus Manual"), ScApp->guiLanguage);
	dia->show();
}

void ScribusApp::ToggleTips()
{
	QToolTip::setGloballyEnabled(scrActions["helpTooltips"]->isOn());
}

void ScribusApp::SaveText()
{
	LoadEnc = "";
	QString wdir = ".";
	if (Prefs.DocDir != "")
		wdir = dirs->get("save_text", Prefs.DocDir);
	else
		wdir = dirs->get("save_text", ".");
	QString fn = CFileDialog( wdir, tr("Save as"), tr("Text Files (*.txt);;All Files(*)"), "", false, false, false, true);
	if (!fn.isEmpty())
	{
		dirs->set("save_text", fn.left(fn.findRev("/")));
		Serializer *se = new Serializer(fn);
		se->PutText(view->SelItem.at(0));
		se->Write(LoadEnc);
		delete se;
	}
}

void ScribusApp::applyNewMaster(QString name)
{
	Apply_Temp(name, doc->currentPage->PageNr);
	view->DrawNew();
	slotDocCh();
	pagePalette->Rebuild();
}

void ScribusApp::slotNewPageP(int wo, QString templ)
{
	NoFrameEdit();
	view->Deselect(true);
	slotNewPage(wo);
	applyNewMaster(templ);
	if (doc->TemplateMode)
		doc->MasterPages = doc->Pages;
	else
		doc->DocPages = doc->Pages;
	outlinePalette->BuildTree(doc);
	pagePalette->RebuildPage();
}

/** Erzeugt eine neue Seite */
void ScribusApp::slotNewPageM()
{
	NoFrameEdit();
	view->Deselect(true);
	InsPage *dia = new InsPage(this, doc, doc->currentPage->PageNr, doc->Pages.count(), doc->PageFP);
	if (dia->exec())
	{
		QString template2 = (doc->PageFP) ? dia->getTemplate2() : tr("Normal");

		addNewPages(dia->getWherePage(),
		            dia->getWhere(),
		            dia->getCount(),
		            dia->getTemplate(),
		            template2);
	}
	delete dia;
}

void ScribusApp::addNewPages(int wo, int where, int numPages, QString based1, QString based2)
{
		if (UndoManager::undoEnabled())
		{
			undoManager->beginTransaction(doc->DocName, Um::IDocument,
			                              (numPages == 1) ? Um::AddPage : Um::AddPages, "",
			                              Um::ICreate);
			SimpleState *ss = new SimpleState(Um::AddPage, "", Um::ICreate);
			ss->set("ADD_PAGE", "add_page");
			ss->set("PAGE", wo);
			ss->set("WHERE", where);
			ss->set("COUNT", numPages);
			ss->set("BASED1", based1);
			ss->set("BASED2", based2);
			undoManager->action(this, ss);
		}
		int cc;
		int wot = wo;
		switch (where)
		{
		case 0:
			wot -= 1;
			for (cc = 0; cc < numPages; ++cc)
			{
				slotNewPage(wot);
				if (doc->PageFP)
				{
					if ((doc->currentPage->PageNr % 2 == 0) && (doc->FirstPageLeft))
						applyNewMaster(based1);
					if ((doc->currentPage->PageNr % 2 == 1) && (doc->FirstPageLeft))
						applyNewMaster(based2);
					if ((doc->currentPage->PageNr % 2 == 0) && (!doc->FirstPageLeft))
						applyNewMaster(based2);
					if ((doc->currentPage->PageNr % 2 == 1) && (!doc->FirstPageLeft))
						applyNewMaster(based1);
				}
				else
					applyNewMaster(based1);
				wot ++;
			}
			break;
		case 1:
			for (cc = 0; cc < numPages; ++cc)
			{
				slotNewPage(wot);
				if (doc->PageFP)
				{
					if ((doc->currentPage->PageNr % 2 == 0) && (doc->FirstPageLeft))
						applyNewMaster(based1);
					if ((doc->currentPage->PageNr % 2 == 1) && (doc->FirstPageLeft))
						applyNewMaster(based2);
					if ((doc->currentPage->PageNr % 2 == 0) && (!doc->FirstPageLeft))
						applyNewMaster(based2);
					if ((doc->currentPage->PageNr % 2 == 1) && (!doc->FirstPageLeft))
						applyNewMaster(based1);
				}
				else
					applyNewMaster(based1);
				wot ++;
			}
			break;
		case 2:
			for (cc = 0; cc < numPages; ++cc)
			{
				slotNewPage(doc->Pages.count());
				if (doc->PageFP)
				{
					if ((doc->currentPage->PageNr % 2 == 0) && (doc->FirstPageLeft))
						applyNewMaster(based1);
					if ((doc->currentPage->PageNr % 2 == 1) && (doc->FirstPageLeft))
						applyNewMaster(based2);
// 					if ((doc->currentPage->PageNr % 2 == 0) && (!doc->FirstPageLeft))
						applyNewMaster(based2);
					if ((doc->currentPage->PageNr % 2 == 1) && (!doc->FirstPageLeft))
						applyNewMaster(based1);
				}
				else
					applyNewMaster(based1);
			}
			break;
		}
		pagePalette->RebuildPage();
		view->DrawNew();
		if (doc->TemplateMode)
			doc->MasterPages = doc->Pages;
		else
			doc->DocPages = doc->Pages;
		outlinePalette->BuildTree(doc);
		if (UndoManager::undoEnabled())
			undoManager->commit();
}

void ScribusApp::slotNewPageT(int w)
{
	if (doc->TemplateMode)
		slotNewPage(w);
}

void ScribusApp::slotNewPage(int w)
{
	view->addPage(w);
/*	if ((!doc->loading) && (!doc->TemplateMode))
		outlinePalette->BuildTree(doc); */
	bool setter = doc->Pages.count() > 1 ? true : false;
	scrActions["pageDelete"]->setEnabled(setter);
	scrActions["pageMove"]->setEnabled(setter);
	if ((!doc->loading) && (!doc->TemplateMode))
		AdjustBM();
/*	if ((!doc->loading) && (!doc->TemplateMode))
	{
		AdjustBM();
		if ((doc->PageAT) && (doc->PageC != 1))
			outlinePalette->slotAddElement(w, 0);
	}
	slotDocCh(!doc->loading); */
}

/*!
	\fn void ScribusApp::slotZoom(double zoomFactor)
	\author Craig Bradney
	\date Sun 30 Jan 2005
	\brief Take the ScApp zoom actions and pass the view a %. Actions have whole number values like 20.0, 100.0, etc. Zoom to Fit uses -100 as a marker.
	\param zoomFactor Value stored in the ScrAction.
 */
void ScribusApp::slotZoom(double zoomFactor)
{
	double finalZoomFactor;
	//Zoom to Fit
	if (zoomFactor==-100.0)
	{
		double dx = (view->width()-50) / (doc->PageB+30);
		double dy = (view->height()-70) / (doc->PageH+30);
		if (dx > dy)
			finalZoomFactor=dy;
		else
			finalZoomFactor=dx;
	}
	//Zoom to %
	else
		finalZoomFactor = zoomFactor*Prefs.DisScale/100.0;

	view->Scale = finalZoomFactor;
	view->slotDoZoom();
}

void ScribusApp::ToggleAllPalettes()
{
	if (PalettesStat[0])
	{
		PalettesStat[0] = false;
		propertiesPalette->show();
		outlinePalette->show();
		scrapbookPalette->show();
		bookmarkPalette->show();
		pagePalette->show();
		layerPalette->show();
		measurementPalette->show();
		docCheckerPalette->show();
		setPagePalette(PalettesStat[5]);
		setUndoPalette(PalettesStat[8]);
	}
	else
	{
		PalettesStat[1] = propertiesPalette->isVisible();
		PalettesStat[2] = outlinePalette->isVisible();
		PalettesStat[3] = scrapbookPalette->isVisible();
		PalettesStat[4] = layerPalette->isVisible();
		PalettesStat[5] = pagePalette->isVisible();
		PalettesStat[6] = bookmarkPalette->isVisible();
		PalettesStat[7] = measurementPalette->isVisible();
		PalettesStat[8] = undoPalette->isVisible();
		PalettesStat[9] = docCheckerPalette->isVisible();
		propertiesPalette->hide();
		outlinePalette->hide();
		scrapbookPalette->hide();
		bookmarkPalette->hide();
		pagePalette->hide();
		layerPalette->hide();
		measurementPalette->hide();
		docCheckerPalette->hide();
		setPagePalette(false);
		setUndoPalette(false);
		PalettesStat[0] = true;
	}
}

void ScribusApp::toggleCheckPal()
{
PalettesStat[0] = false;
}

void ScribusApp::setUndoPalette(bool visible)
{
	undoPalette->setShown(visible);
	scrActions["toolsActionHistory"]->setOn(visible);
}

void ScribusApp::togglePropertiesPalette()
{
	PalettesStat[0] = false;
}

void ScribusApp::toggleOutlinePalette()
{
	PalettesStat[0] = false;
}

void ScribusApp::toggleScrapbookPalette()
{
	PalettesStat[0] = false;
}

void ScribusApp::toggleLayerPalette()
{
	PalettesStat[0] = false;
}

void ScribusApp::setPagePalette(bool visible)
{

	if (!visible)
	{
		Prefs.SepalT = pagePalette->TemplList->Thumb;
		Prefs.SepalN = pagePalette->PageView->Namen;
	}
}

void ScribusApp::togglePagePalette()
{
	setPagePalette(!pagePalette->isVisible());
	PalettesStat[0] = false;
}

void ScribusApp::toggleBookmarkPalette()
{
	PalettesStat[0] = false;
}

void ScribusApp::toggleUndoPalette()
{
	setUndoPalette(!undoPalette->isVisible());
	PalettesStat[0] = false;
}

void ScribusApp::setTools(bool visible)
{
	WerkTools->setShown(visible);
	WerkTools->Sichtbar = visible;
	scrActions["toolsToolbarTools"]->setOn(visible);
}

void ScribusApp::ToggleTools()
{
	setTools(!WerkTools->Sichtbar);
}

void ScribusApp::setPDFTools(bool visible)
{
	if (visible)
	{
		WerkToolsP->show();
		WerkToolsP->Sichtbar = true;
	}
	else
	{
		WerkToolsP->hide();
		WerkToolsP->Sichtbar = false;
	}
	scrActions["toolsToolbarPDF"]->setOn(visible);
}

void ScribusApp::TogglePDFTools()
{
	setPDFTools(!WerkToolsP->Sichtbar);
}

void ScribusApp::TogglePics()
{
	doc->guidesSettings.showPic = !doc->guidesSettings.showPic;
	for (uint b=0; b<doc->Items.count(); ++b)
	{
		if (doc->Items.at(b)->itemType() == PageItem::ImageFrame)
			doc->Items.at(b)->PicArt = doc->guidesSettings.showPic;
	}
	view->DrawNew();
}

void ScribusApp::ToggleAllGuides()
{
	keyrep=false;
	if (GuidesStat[0])
	{
		GuidesStat[0] = false;
		doc->guidesSettings.marginsShown = GuidesStat[1];
		doc->guidesSettings.framesShown = GuidesStat[2];
		doc->guidesSettings.gridShown = GuidesStat[3];
		doc->guidesSettings.guidesShown = GuidesStat[4];
		doc->guidesSettings.baseShown = GuidesStat[5];
		doc->guidesSettings.linkShown = GuidesStat[6];
		ToggleMarks();
		ToggleFrames();
		ToggleRaster();
		ToggleGuides();
		ToggleBase();
		ToggleTextLinks();
	}
	else
	{
		GuidesStat[0] = true;
		GuidesStat[1] = !doc->guidesSettings.marginsShown;
		GuidesStat[2] = !doc->guidesSettings.framesShown;
		GuidesStat[3] = !doc->guidesSettings.gridShown;
		GuidesStat[4] = !doc->guidesSettings.guidesShown;
		GuidesStat[5] = !doc->guidesSettings.baseShown;
		GuidesStat[6] = !doc->guidesSettings.linkShown;
		doc->guidesSettings.marginsShown = false;
		doc->guidesSettings.framesShown = false;
		doc->guidesSettings.gridShown = false;
		doc->guidesSettings.guidesShown = false;
		doc->guidesSettings.baseShown = false;
		doc->guidesSettings.linkShown = false;
		scrActions["viewShowMargins"]->setOn(doc->guidesSettings.marginsShown);
		scrActions["viewShowFrames"]->setOn(doc->guidesSettings.framesShown);
		scrActions["viewShowGrid"]->setOn(doc->guidesSettings.gridShown);
		scrActions["viewShowGuides"]->setOn(doc->guidesSettings.guidesShown);
		scrActions["viewShowBaseline"]->setOn(doc->guidesSettings.baseShown);
		scrActions["viewShowTextChain"]->setOn(doc->guidesSettings.linkShown);
	}
	view->DrawNew();
}

void ScribusApp::ToggleMarks()
{
	GuidesStat[0] = false;
	doc->guidesSettings.marginsShown = !doc->guidesSettings.marginsShown;
	view->DrawNew();
}

void ScribusApp::ToggleFrames()
{
	GuidesStat[0] = false;
	doc->guidesSettings.framesShown = !doc->guidesSettings.framesShown;
	view->DrawNew();
}

void ScribusApp::ToggleRaster()
{
	GuidesStat[0] = false;
	doc->guidesSettings.gridShown = !doc->guidesSettings.gridShown;
	view->DrawNew();
}

void ScribusApp::ToggleGuides()
{
	GuidesStat[0] = false;
	doc->guidesSettings.guidesShown = !doc->guidesSettings.guidesShown;
	view->DrawNew();
}

void ScribusApp::ToggleBase()
{
	GuidesStat[0] = false;
	doc->guidesSettings.baseShown = !doc->guidesSettings.baseShown;
	view->DrawNew();
}

void ScribusApp::ToggleTextLinks()
{
	GuidesStat[0] = false;
	doc->guidesSettings.linkShown = !doc->guidesSettings.linkShown;
	view->DrawNew();
}

void ScribusApp::ToggleURaster()
{
	doc->useRaster = !doc->useRaster;
}

void ScribusApp::ToggleUGuides()
{
	doc->SnapGuides = !doc->SnapGuides;
}

void ScribusApp::ToggleFrameEdit()
{
	if (doc->EditClip)
	{
		NoFrameEdit();
	}
	else
	{
		slotSelect();
		nodePalette->setDoc(doc, view);
		nodePalette->MoveN();
		nodePalette->HaveNode(false, false);
		nodePalette->MoveNode->setOn(true);
		nodePalette->show();
		doc->EditClipMode = 0;
		doc->EditClip = true;
		scrActions["toolsSelect"]->setEnabled(false);
		scrActions["toolsRotate"]->setEnabled(false);
		scrActions["toolsEditContents"]->setEnabled(false);
		scrActions["toolsEditWithStoryEditor"]->setEnabled(false);
		scrActions["toolsZoom"]->setEnabled(false);
		scrActions["toolsInsertTextFrame"]->setEnabled(false);
		scrActions["toolsInsertImageFrame"]->setEnabled(false);
		scrActions["toolsInsertTableFrame"]->setEnabled(false);
		scrActions["toolsInsertShape"]->setEnabled(false);
		scrActions["toolsInsertLine"]->setEnabled(false);
		scrActions["toolsInsertBezier"]->setEnabled(false);
		scrActions["toolsInsertFreehandLine"]->setEnabled(false);
		scrActions["toolsInsertPolygon"]->setEnabled(false);
		scrActions["toolsLinkTextFrame"]->setEnabled(false);
		scrActions["toolsUnlinkTextFrame"]->setEnabled(false);
		scrActions["toolsMeasurements"]->setEnabled(false);
		WerkToolsP->PDFTool->setEnabled(false);
		WerkToolsP->PDFaTool->setEnabled(false);
		scrActions["itemDelete"]->setEnabled(false);
		if (view->SelItem.count() != 0)
		{
			PageItem *currItem = view->SelItem.at(0);
			view->MarkClip(currItem);
			nodePalette->EditCont->setEnabled(currItem->ContourLine.size() != 0);
			nodePalette->ResetCont->setEnabled(false);
			nodePalette->PolyStatus(currItem->itemType(), currItem->PoLine.size());
		}
	}
	scrActions["itemShapeEdit"]->setOn(doc->EditClip);
}

void ScribusApp::NoFrameEdit()
{
	nodePalette->hide();
	scrActions["toolsSelect"]->setEnabled(true);
	scrActions["toolsSelect"]->setOn(true);
	scrActions["toolsRotate"]->setEnabled(true);
	scrActions["toolsZoom"]->setEnabled(true);
	scrActions["toolsInsertTextFrame"]->setEnabled(true);
	scrActions["toolsInsertImageFrame"]->setEnabled(true);
	scrActions["toolsInsertTableFrame"]->setEnabled(true);
	scrActions["toolsInsertShape"]->setEnabled(true);
	scrActions["toolsInsertLine"]->setEnabled(true);
	scrActions["toolsInsertBezier"]->setEnabled(true);
	scrActions["toolsInsertFreehandLine"]->setEnabled(true);
	scrActions["toolsInsertPolygon"]->setEnabled(true);
	WerkToolsP->PDFTool->setEnabled(true);
	WerkToolsP->PDFaTool->setEnabled(true);
	scrActions["toolsEditContents"]->setOn(false);
	scrActions["toolsEditWithStoryEditor"]->setOn(false);
	scrActions["toolsMeasurements"]->setEnabled(true);
	scrActions["toolsUnlinkTextFrame"]->setEnabled(true);
	scrActions["itemDelete"]->setEnabled(true);
	scrActions["itemShapeEdit"]->setOn(false);
	if (HaveDoc)
	{
		doc->EditClip = false;
		view->EditContour = false;
		if (view->SelItem.count() != 0)
		{
			HaveNewSel(view->SelItem.at(0)->itemType());
			view->DrawNew();
		}
		else
			HaveNewSel(-1);
	}
}

void ScribusApp::slotSelect()
{
	WerkToolsP->PDFTool->setOn(false);
	WerkToolsP->PDFaTool->setOn(false);
	//scrActions["toolsMeasurements"]->setOn(false);
	setAppMode(NormalMode);
}

void ScribusApp::setAppModeByToggle(bool isOn, int newMode)
{
	//qDebug(QString("::setAppModeByToggle(): %1 %2").arg(isOn).arg(newMode));
	keyrep=false;
	if (isOn)
		setAppMode(newMode);
	else
		setAppMode(NormalMode);
}

void ScribusApp::setAppMode(int mode)
{
	//disconnect the tools actions so we dont fire them off
	actionManager->disconnectModeActions();
	//set the actions state based on incoming mode
	scrActions["toolsSelect"]->setOn(mode==NormalMode);
	scrActions["toolsInsertTextFrame"]->setOn(mode==DrawText);
	scrActions["toolsInsertImageFrame"]->setOn(mode==DrawPicture);
	scrActions["toolsInsertTableFrame"]->setOn(mode==DrawTable);
	scrActions["toolsInsertShape"]->setOn(mode==DrawShapes);
	scrActions["toolsInsertPolygon"]->setOn(mode==DrawRegularPolygon);
	scrActions["toolsInsertLine"]->setOn(mode==DrawLine);
	scrActions["toolsInsertBezier"]->setOn(mode==DrawBezierLine);
	scrActions["toolsInsertFreehandLine"]->setOn(mode==DrawFreehandLine);
	scrActions["toolsRotate"]->setOn(mode==Rotation);
	scrActions["toolsZoom"]->setOn(mode==Magnifier);
	scrActions["toolsEditContents"]->setOn(mode==EditMode);
	scrActions["toolsEditWithStoryEditor"]->setOn(mode==StartStoryEditor);
	scrActions["toolsLinkTextFrame"]->setOn(mode==LinkFrames);
	scrActions["toolsUnlinkTextFrame"]->setOn(mode==UnlinkFrames);
	scrActions["toolsEyeDropper"]->setOn(mode==EyeDropper);
	scrActions["toolsCopyProperties"]->setOn(mode==CopyProperties);
		
	PageItem *currItem;
	setActiveWindow();
	//qDebug(QString("::setAppMode(%1)").arg(mode));
	if (HaveDoc)
	{
		if (view->SelItem.count() != 0)
			currItem = view->SelItem.at(0);
		else
			currItem = 0;
		int oldMode = doc->appMode;
		doc->appMode = mode;
		if (oldMode == MeasurementTool)
			disconnect(view, SIGNAL(MVals(double, double, double, double, double, double, int )), measurementPalette, SLOT(setValues(double, double, double, double, double, double, int )));
		if (mode != EditMode && doc->CurTimer!=NULL)
		{
			disconnect(doc->CurTimer, SIGNAL(timeout()), view, SLOT(BlinkCurs()));
			doc->CurTimer->stop();
			delete doc->CurTimer;
			doc->CurTimer = NULL;
		}
		if (mode!=EditMode && oldMode==EditMode)
			actionManager->restoreActionShortcutsPostEditMode();
		else
		if (mode==EditMode && oldMode!=EditMode)
			actionManager->saveActionShortcutsPreEditMode();
		if (oldMode == EditMode)
		{
			view->LE->setFocusPolicy(QWidget::ClickFocus);
			view->PGS->PageCombo->setFocusPolicy(QWidget::ClickFocus);
			scrActions["editClearContents"]->setEnabled(false);
			scrActions["insertGlyph"]->setEnabled(false);
			view->slotDoCurs(false);
			if (currItem != 0)
			{
				view->RefreshItem(currItem);
				scrMenuMgr->setMenuEnabled("Style", true);
				scrMenuMgr->setMenuEnabled("Item", true);
			}
			view->horizRuler->ItemPosValid = false;
			view->horizRuler->repX = false;
			view->horizRuler->repaint();
		}
		if (mode == EditMode)
		{
			view->LE->setFocusPolicy(QWidget::NoFocus);
			view->PGS->PageCombo->setFocusPolicy(QWidget::NoFocus);
			if (currItem != 0)
			{
				if ((currItem->itemType() == PageItem::Polygon) || (currItem->itemType() == PageItem::PolyLine) || (currItem->itemType() == PageItem::PathText))
				{
					doc->appMode = 1;
					ToggleFrameEdit();
					return;
				}
				setTBvals(currItem);
			}
			scrActions["editPaste"]->setEnabled(false);
			scrActions["insertGlyph"]->setEnabled(true);
			//scrActions["specialSmartHyphen"]->setEnabled(true);
			//scrActions["specialNonBreakingSpace"]->setEnabled(true);
			//scrActions["specialPageNumber"]->setEnabled(true);
			if (currItem->itemType()==PageItem::TextFrame)
				actionManager->enableUnicodeActions(true);
			if (!Buffer2.isNull())
			{
				if (!Buffer2.startsWith("<SCRIBUSELEM"))
				{
					BuFromApp = false;
					scrActions["editPaste"]->setEnabled(true);
				}
			}
			view->slotDoCurs(true);
			scrMenuMgr->setMenuEnabled("Item", false);
			scrMenuMgr->setMenuEnabled("Style", false);
			doc->CurTimer = new QTimer(view);
			if (doc->CurTimer!=NULL)
			{
				connect(doc->CurTimer, SIGNAL(timeout()), view, SLOT(BlinkCurs()));
				doc->CurTimer->start(500);
			}
			if (currItem != 0)
			{
				scrActions["editCut"]->setEnabled(currItem->HasSel);
				scrActions["editCopy"]->setEnabled(currItem->HasSel);
				scrActions["editClearContents"]->setEnabled(currItem->HasSel);
				scrActions["editSearchReplace"]->setEnabled(true);

				view->RefreshItem(currItem);
			}
		}
		if (mode == DrawBezierLine)
		{
			if (view->SelItem.count() != 0)
				view->Deselect(true);
			view->FirstPoly = true;
		}
		if (mode == EditGradientVectors)
			propertiesPalette->Cpal->gradEditButton->setOn(true);
		if (mode == MeasurementTool)
		{
			measurementPalette->show();
			connect(view, SIGNAL(MVals(double, double, double, double, double, double, int)), measurementPalette, SLOT(setValues(double, double, double, double, double, double, int )));
		}
		switch (mode)
		{
			case DrawShapes:
				if (view->SelItem.count() != 0)
					view->Deselect(true);
				qApp->setOverrideCursor(QCursor(loadIcon("DrawFrame.xpm")), true);
				break;
			case DrawPicture:
				if (view->SelItem.count() != 0)
					view->Deselect(true);
				qApp->setOverrideCursor(QCursor(loadIcon("DrawImageFrame.xpm")), true);
				break;
			case DrawText:
				if (view->SelItem.count() != 0)
					view->Deselect(true);
				qApp->setOverrideCursor(QCursor(loadIcon("DrawTextFrame.xpm")), true);
				break;
			case DrawTable:
				if (view->SelItem.count() != 0)
					view->Deselect(true);
				qApp->setOverrideCursor(QCursor(loadIcon("DrawTable.xpm")), true);
				break;
			case DrawRegularPolygon:
				if (view->SelItem.count() != 0)
					view->Deselect(true);
				qApp->setOverrideCursor(QCursor(loadIcon("DrawPolylineFrame.xpm")), true);
				break;
			case Magnifier:
				if (view->SelItem.count() != 0)
					view->Deselect(true);
				qApp->setOverrideCursor(QCursor(loadIcon("LupeZ.xpm")), true);
				break;
			case DrawLine:
			case InsertPDFButton:
			case InsertPDFTextfield:
			case InsertPDFCheckbox:
			case InsertPDFCombobox:
			case InsertPDFListbox:
			case InsertPDFTextAnnotation:
			case InsertPDFLinkAnnotation:
			case DrawFreehandLine:
				if (view->SelItem.count() != 0)
					view->Deselect(true);
				qApp->setOverrideCursor(QCursor(ArrowCursor), true);
				break;
			default:
				qApp->setOverrideCursor(QCursor(ArrowCursor), true);
			break;
		}
		if (mode == DrawShapes)
		{
			doc->SubMode = WerkTools->SubMode;
			doc->ShapeValues = WerkTools->ShapeVals;
			doc->ValCount = WerkTools->ValCount;
			propertiesPalette->SCustom->setPixmap(propertiesPalette->SCustom->getIconPixmap(doc->SubMode));
			SCustom->setPixmap(SCustom->getIconPixmap(doc->SubMode));
		}
		else
			doc->SubMode = -1;
		if (mode == NormalMode)
		{
			WerkToolsP->PDFTool->setOn(false);
			WerkToolsP->PDFaTool->setOn(false);
			propertiesPalette->Cpal->gradEditButton->setOn(false);
		}
		if (mode == LinkFrames)
			doc->ElemToLink = view->SelItem.at(0);
		if ((mode == LinkFrames) || (mode == UnlinkFrames))
			view->updateContents();
		if (mode == StartStoryEditor)
		{
			slotStoryEditor();
			slotSelect();
		}
		if (mode == EyeDropper)
		{
			grabMouse();
			//grabKeyboard();	
		}
		if (mode == CopyProperties)
		{
			if (view->SelItem.count() != 0)
			{
				doc->ElemToLink = view->SelItem.at(0);
				view->Deselect(true);
				scrActions["toolsCopyProperties"]->setEnabled(true);
			}
		}
	}

	actionManager->connectModeActions();	
}

void ScribusApp::Aktiv()
{
	setActiveWindow();
	raise();
}

void ScribusApp::setItemTypeStyle(int id)
{
	int b = 0;

	if (id == 0)
	{
		scrActions["typeEffectNormal"]->setOn(true);
		scrActions["typeEffectUnderline"]->setOn(false);
		scrActions["typeEffectStrikeThrough"]->setOn(false);
		scrActions["typeEffectSmallCaps"]->setOn(false);
		scrActions["typeEffectSuperscript"]->setOn(false);
		scrActions["typeEffectSubscript"]->setOn(false);
		scrActions["typeEffectOutline"]->setOn(false);
	}
	else
	{
		scrActions["typeEffectNormal"]->setOn(false);
		if (id == 4)
			scrActions["typeEffectSubscript"]->setOn(false);
		if (id == 5)
			scrActions["typeEffectSuperscript"]->setOn(false);

		if (scrActions["typeEffectUnderline"]->isOn())
			b |= 8;
		if (scrActions["typeEffectStrikeThrough"]->isOn())
			b |= 16;
		if (scrActions["typeEffectSmallCaps"]->isOn())
			b |= 64;
		if (scrActions["typeEffectSuperscript"]->isOn())
			b |= 1;
		if (scrActions["typeEffectSubscript"]->isOn())
			b |= 2;
		if (scrActions["typeEffectOutline"]->isOn())
			b |= 4;
	}
	setItemHoch(b);
}

void ScribusApp::setStilvalue(int s)
{
	int c = s & 127;
	doc->CurrentStyle = c;
	scrActions["typeEffectNormal"]->setOn(c==0);
	scrActions["typeEffectSuperscript"]->setOn(c & 1);
	scrActions["typeEffectSubscript"]->setOn(c & 2);
	scrActions["typeEffectOutline"]->setOn(c & 4);
	scrActions["typeEffectUnderline"]->setOn(c & 8);
	scrActions["typeEffectStrikeThrough"]->setOn(c & 16);
	scrActions["typeEffectSmallCaps"]->setOn(c & 64);
	emit TextStil(s);
}

void ScribusApp::setItemHoch(int h)
{
	if (view->SelItem.count() != 0)
	{
		setActiveWindow();
		doc->CurrentStyle = h;
		setStilvalue(doc->CurrentStyle);
		view->chTyStyle(h);
		slotDocCh();
	}
}

void ScribusApp::AdjustBM()
{
	for (uint b = 0; b < doc->Items.count(); ++b)
	{
		PageItem* bb = doc->Items.at(b);
		if (bb->isBookmark)
		{
			int it = bb->BMnr;
			QListViewItemIterator itn(bookmarkPalette->BView);
			for ( ; itn.current(); ++itn)
			{
				BookMItem *ite = (BookMItem*)itn.current();
				if (ite->ItemNr == it)
				{
					ite->Seite = bb->OwnPage;
					break;
				}
			}
		}
	}
	StoreBookmarks();
}

void ScribusApp::DeletePage2(int pg)
{
	PageItem* ite;
	NoFrameEdit();
	if (doc->Pages.count() == 1)
		return;
	if (UndoManager::undoEnabled())
		undoManager->beginTransaction(doc->DocName, Um::IDocument, Um::DeletePage, "", Um::IDelete);
/*	if (!doc->TemplateMode)
		disconnect(doc->currentPage, SIGNAL(DelObj(uint, uint)), outlinePalette, SLOT(slotRemoveElement(uint, uint))); */
	view->SelItem.clear();
	for (uint d = 0; d < doc->Items.count(); ++d)
	{
		ite = doc->Items.at(d);
		if (ite->OwnPage == pg)
		{
			ite->setLocked(false);
			ite->isSingleSel = false;
			if (ite->isBookmark)
				DelBookMark(ite);
			view->SelItem.append(ite);
		}
	}
	if (view->SelItem.count() != 0)
		view->DeleteItem();
	if (UndoManager::undoEnabled())
	{
		SimpleState *ss = new SimpleState(Um::DeletePage, "", Um::ICreate);
		ss->set("DELETE_PAGE", "delete_page");
		ss->set("PAGENR", pg + 1);
		ss->set("TEMPLATE", doc->Pages.at(pg)->MPageNam);
		// replace the deleted page in the undostack by a dummy object that will
		// replaced with the "undone" page if user choose to undo the action
		DummyUndoObject *duo = new DummyUndoObject();
		uint id = static_cast<uint>(duo->getUId());
		undoManager->replaceObject(doc->Pages.at(pg)->getUId(), duo);
		ss->set("DUMMY_ID", id);
		undoManager->action(this, ss);
	}
	view->delPage(pg);
	view->reformPages();
	AdjustBM();
	view->DrawNew();
	doc->OpenNodes.clear();
	outlinePalette->BuildTree(doc);
	bool setter = doc->Pages.count() > 1 ? true : false;
	scrActions["pageDelete"]->setEnabled(setter);
	scrActions["pageMove"]->setEnabled(setter);
	slotDocCh();
	pagePalette->RebuildPage();
	if (UndoManager::undoEnabled())
		undoManager->commit();
}

void ScribusApp::DeletePage()
{
	NoFrameEdit();
	view->Deselect(true);
	DelPages *dia = new DelPages(this, doc->currentPage->PageNr+1, doc->Pages.count());
	if (dia->exec())
		DeletePage(dia->getFromPage(), dia->getToPage());
	delete dia;
}

void ScribusApp::DeletePage(int from, int to)
{
	if (UndoManager::undoEnabled())
		undoManager->beginTransaction(doc->DocName, Um::IDocument,
									  (from - to == 0) ? Um::DeletePage : Um::DeletePages, "",
									  Um::IDelete);
	PageItem* ite;
	view->SelItem.clear();
	for (int a = to - 1; a >= from - 1; a--)
	{
		for (uint d = 0; d < doc->Items.count(); ++d)
		{
			ite = doc->Items.at(d);
			if (ite->OwnPage == a)
			{
				ite->setLocked(false);
				ite->isSingleSel = false;
				if (ite->isBookmark)
					DelBookMark(ite);
				view->SelItem.append(ite);
			}
		}
		AdjustBM();
	}
	if (view->SelItem.count() != 0)
		view->DeleteItem();
	for (int a = to - 1; a >= from - 1; a--)
	{
		if (UndoManager::undoEnabled())
		{
			SimpleState *ss = new SimpleState(Um::DeletePage, "", Um::ICreate);
			ss->set("DELETE_PAGE", "delete_page");
			ss->set("PAGENR", a + 1);
			ss->set("TEMPLATE", doc->Pages.at(a)->MPageNam);
			// replace the deleted page in the undostack by a dummy object that will
			// replaced with the "undone" page if user choose to undo the action
			DummyUndoObject *duo = new DummyUndoObject();
			uint id = static_cast<uint>(duo->getUId());
			undoManager->replaceObject(doc->Pages.at(a)->getUId(), duo);
			ss->set("DUMMY_ID", id);
			undoManager->action(this, ss);
		}
		view->delPage(a);
	}
	view->reformPages();
	view->DrawNew();
//	doc->OpenNodes.clear();
	outlinePalette->BuildTree(doc);
	bool setter = doc->Pages.count() > 1 ? true : false;
	scrActions["pageDelete"]->setEnabled(setter);
	scrActions["pageMove"]->setEnabled(setter);
	slotDocCh();
	pagePalette->RebuildPage();
	if (UndoManager::undoEnabled())
		undoManager->commit();
}

void ScribusApp::MovePage()
{
	NoFrameEdit();
	MovePages *dia = new MovePages(this, doc->currentPage->PageNr+1, doc->Pages.count(), true);
	if (dia->exec())
	{
//		doc->OpenNodes = outlinePalette->buildReopenVals();
		int from = dia->getFromPage();
		int to = dia->getToPage();
		int wie = dia->getWhere();
		int wo = dia->getWherePage();
		if (from != wo)
			view->movePage(from-1, to, wo-1, wie);
		slotDocCh();
		view->DrawNew();
		AdjustBM();
		pagePalette->RebuildPage();
		outlinePalette->BuildTree(doc);
		outlinePalette->reopenTree(doc->OpenNodes);
	}
	delete dia;
}

void ScribusApp::CopyPage()
{
	NoFrameEdit();
	MovePages *dia = new MovePages(this, doc->currentPage->PageNr+1, doc->Pages.count(), false);
	if (dia->exec())
	{
		doc->loading = true;
		Page* from = doc->Pages.at(dia->getFromPage()-1);
		int wo = dia->getWherePage();
		switch (dia->getWhere())
		{
		case 0:
			slotNewPage(wo-1);
			break;
		case 1:
			slotNewPage(wo);
			break;
		case 2:
			slotNewPage(doc->Pages.count());
			break;
		}
		Page* Ziel = doc->currentPage;
		QMap<int,int> TableID;
		QPtrList<PageItem> TableItems;
		TableID.clear();
		TableItems.clear();
		uint oldItems = doc->Items.count();
		for (uint ite = 0; ite < oldItems; ++ite)
		{
			CopyPageItem(&Buffer, doc->Items.at(ite));
			Buffer.Xpos = Buffer.Xpos - from->Xoffset + Ziel->Xoffset;
			Buffer.Ypos = Buffer.Ypos - from->Yoffset + Ziel->Yoffset;
			view->PasteItem(&Buffer, true, true);
			PageItem* Neu = doc->Items.at(doc->Items.count()-1);
			if (doc->Items.at(ite)->isBookmark)
				AddBookMark(Neu);
			if (Neu->isTableItem)
			{
				TableItems.append(Neu);
				TableID.insert(ite, Neu->ItemNr);
			}
		}
		if (TableItems.count() != 0)
		{
			for (uint ttc = 0; ttc < TableItems.count(); ++ttc)
			{
				PageItem* ta = TableItems.at(ttc);
				if (ta->TopLinkID != -1)
					ta->TopLink = doc->Items.at(TableID[ta->TopLinkID]);
				else
					ta->TopLink = 0;
				if (ta->LeftLinkID != -1)
					ta->LeftLink = doc->Items.at(TableID[ta->LeftLinkID]);
				else
					ta->LeftLink = 0;
				if (ta->RightLinkID != -1)
					ta->RightLink = doc->Items.at(TableID[ta->RightLinkID]);
				else
					ta->RightLink = 0;
				if (ta->BottomLinkID != -1)
					ta->BottomLink = doc->Items.at(TableID[ta->BottomLinkID]);
				else
					ta->BottomLink = 0;
			}
		}
		if (from->YGuides.count() != 0)
		{
			for (uint y = 0; y < from->YGuides.count(); ++y)
			{
				if (Ziel->YGuides.contains(from->YGuides[y]) == 0)
					Ziel->YGuides.append(from->YGuides[y]);
			}
			qHeapSort(Ziel->YGuides);
		}
		if (from->XGuides.count() != 0)
		{
			for (uint x = 0; x < from->XGuides.count(); ++x)
			{
				if (Ziel->XGuides.contains(from->XGuides[x]) == 0)
					Ziel->XGuides.append(from->XGuides[x]);
			}
			qHeapSort(Ziel->XGuides);
		}
		Ziel->MPageNam = from->MPageNam;
		view->Deselect(true);
		doc->loading = false;
		view->DrawNew();
		slotDocCh();
		pagePalette->RebuildPage();
		outlinePalette->BuildTree(doc);
		AdjustBM();
	}
	delete dia;
}

void ScribusApp::setItemFont2(int id)
{
	disconnect(FontMenu, SIGNAL(activated(int)), this, SLOT(setItemFont(int)));
	SetNewFont(FontSub->text(id));
	FontMenu->activateItemAt(0);
	connect(FontMenu, SIGNAL(activated(int)), this, SLOT(setItemFont(int)));
}

void ScribusApp::setItemFont(int id)
{
	QString nf;
	int a = FontMenu->indexOf(id);
	if (a == 1)
		return;
	disconnect(FontMenu, SIGNAL(activated(int)), this, SLOT(setItemFont(int)));
	nf = FontID[id];
	SetNewFont(nf);
	connect(FontMenu, SIGNAL(activated(int)), this, SLOT(setItemFont(int)));
}

void ScribusApp::SetNewFont(QString nf)
{
	Aktiv();
	int a;
	QString nf2 = nf;
	if (!doc->UsedFonts.contains(nf))
	{
		if (doc->AddFont(nf, Prefs.AvailFonts[nf]->Font))
		{
			a = FontMenu->insertItem(new FmItem(nf, Prefs.AvailFonts[nf]->Font));
			FontID.insert(a, Prefs.AvailFonts[nf]->SCName);
		}
		else
		{
			if (view->SelItem.count() != 0)
			{
				PageItem *currItem = view->SelItem.at(0);
				nf2 = currItem->IFont;
			}
			propertiesPalette->Fonts->RebuildList(&Prefs, doc);
			buildFontMenu();
		}
	}
	AdjustFontMenu(nf2);
	view->ItemFont(nf2);
	doc->CurrFont = nf2;
	slotDocCh();
}

void ScribusApp::AdjustFontMenu(QString nf)
{
	QString df;
	FontSub->setCurrentText(nf);
	propertiesPalette->Fonts->setCurrentText(nf);
	for (uint a = 2; a < FontMenu->count(); ++a)
	{
		df = FontID[FontMenu->idAt(a)];
		FontMenu->setItemChecked(FontMenu->idAt(a), (df == nf));
	}
}

void ScribusApp::setItemFSize(int id)
{
	int c = id;
	if (c != -1)
		view->chFSize(c*10);
	else
	{
		bool ok = false;
		Query* dia = new Query(this, "New", 1, 0, tr("&Size:"), tr("Size"));
		if (dia->exec())
		{
			c = qRound(dia->getEditText().toDouble(&ok));
			if ((ok) && (c < 1025) && (c > 0))
				view->chFSize(c*10);
			delete dia;
		}
	}
	propertiesPalette->setSize(c*10);
	slotDocCh();
}

void ScribusApp::setFSizeMenu(int size)
{
	if (scrActions[QString("fontSize%1").arg(size/10)])
		scrActions[QString("fontSize%1").arg(size/10)]->setOn(true);
}

void ScribusApp::setItemFarbe(int id)
{
	if (view->SelItem.count() != 0)
	{
		PageItem *currItem = view->SelItem.at(0);
		if ((currItem->itemType() == PageItem::TextFrame) || (currItem->itemType() == PageItem::PathText))
			view->ItemTextBrush(ColorMenC->text(id));
		else
			view->ItemBrush(ColorMenC->text(id));
	}
	scrMenuMgr->getLocalPopupMenu("Color")->activateItemAt(0);
	slotDocCh();
}

void ScribusApp::setItemShade(int id)
{
	int c = id;
	bool ok = false;
	if (view->SelItem.count() != 0)
	{
		PageItem *currItem = view->SelItem.at(0);
		if (c != -1)
		{
			if ((currItem->itemType() == PageItem::TextFrame) || (currItem->itemType() == PageItem::PathText))
				view->ItemTextBrushS(c);
			else
				view->ItemBrushShade(c);
		}
		else
		{
			Query* dia = new Query(this, "New", 1, 0, tr("&Shade:"), tr("Shade"));
			if (dia->exec())
			{
				c = dia->getEditText().toInt(&ok);
				if (ok)
				{
					if ((currItem->itemType() == PageItem::TextFrame) || (currItem->itemType() == PageItem::PathText))
						view->ItemTextBrushS(c);
					else
						view->ItemBrushShade(c);
				}
				delete dia;
			}
		}
	}
	slotDocCh();
}

void ScribusApp::setCSMenu(QString , QString l, int  , int ls)
{
	uint a;
	QString la;
	int lb;
	PageItem *currItem;
	if (view->SelItem.count() != 0)
	{
		currItem = view->SelItem.at(0);
		if ((currItem->itemType() == PageItem::TextFrame) || (currItem->itemType() == PageItem::PathText))
		{
			if ((doc->appMode == EditMode) && (currItem->itemText.count() != 0))
			{
				la = currItem->itemText.at(QMIN(currItem->CPos, static_cast<int>(currItem->itemText.count()-1)))->ccolor;
				lb = currItem->itemText.at(QMIN(currItem->CPos, static_cast<int>(currItem->itemText.count()-1)))->cshade;
			}
			else
			{
				la = currItem->TxtFill;
				lb = currItem->ShTxtFill;
			}
		}
		else
		{
			la = l;
			lb = ls;
		}
	}
	else
	{
		la = l;
		lb = ls;
	}
	if (la == "None")
		la = tr("None");
	for (a = 0; a < static_cast<uint>(ColorMenC->count()); ++a)
	{
		if (ColorMenC->text(a) == la)
			ColorMenC->setCurrentItem(a);
	}
	if (scrActions[QString("shade%1").arg(lb)])
		scrActions[QString("shade%1").arg(lb)]->setOn(true);
}

void ScribusApp::slotEditLineStyles()
{
	if (HaveDoc)
	{
		LineFormate *dia = new LineFormate(this, doc);
		connect(dia, SIGNAL(saveStyle(LineFormate *)), this, SLOT(saveLStyles(LineFormate *)));
		if (dia->exec())
			saveLStyles(dia);
		disconnect(dia, SIGNAL(saveStyle(LineFormate *)), this, SLOT(saveLStyles(LineFormate *)));
		delete dia;
	}
}

void ScribusApp::saveLStyles(LineFormate *dia)
{
	if (doc->TemplateMode)
		doc->MasterItems = doc->Items;
	else
		doc->DocItems = doc->Items;
	PageItem* ite;
	doc->MLineStyles = dia->TempStyles;
	for (uint d = 0; d < doc->DocItems.count(); ++d)
	{
		ite = doc->DocItems.at(d);
		if (ite->NamedLStyle != "")
		{
			if (!doc->MLineStyles.contains(ite->NamedLStyle))
				ite->NamedLStyle = dia->Replacement[ite->NamedLStyle];
		}
	}
	for (uint d1 = 0; d1 < doc->MasterItems.count(); ++d1)
	{
		ite = doc->MasterItems.at(d1);
		if (ite->NamedLStyle != "")
		{
			if (!doc->MLineStyles.contains(ite->NamedLStyle))
				ite->NamedLStyle = dia->Replacement[ite->NamedLStyle];
		}
	}
	propertiesPalette->SetLineFormats(doc);
	view->DrawNew();
}

void ScribusApp::slotEditStyles()
{
	if (HaveDoc)
	{
		StilFormate *dia = new StilFormate(this, doc, &Prefs);
		connect(dia, SIGNAL(saveStyle(StilFormate *)), this, SLOT(saveStyles(StilFormate *)));
		if (dia->exec())
			saveStyles(dia);
		disconnect(dia, SIGNAL(saveStyle(StilFormate *)), this, SLOT(saveStyles(StilFormate *)));
		delete dia;
	}
}

void ScribusApp::saveStyles(StilFormate *dia)
{
	QValueList<uint> ers;
	QString nn;
	PageItem* ite = 0;
	bool ff;
	uint nr;
	ers.clear();
	ers.append(0);
	ers.append(1);
	ers.append(2);
	ers.append(3);
	ers.append(4);
	if (doc->TemplateMode)
		doc->MasterItems = doc->Items;
	else
		doc->DocItems = doc->Items;
	for (uint a=5; a<doc->docParagraphStyles.count(); ++a)
	{
		ff = false;
		nn = doc->docParagraphStyles[a].Vname;
		for (uint b=0; b<dia->TempVorl.count(); ++b)
		{
			if (nn == dia->TempVorl[b].Vname)
			{
				nr = b;
				ff = true;
				break;
			}
		}
		if (ff)
			ers.append(nr);
		else
		{
			for (uint b=0; b<dia->TempVorl.count(); ++b)
			{
				if ((doc->docParagraphStyles[a].LineSpa == dia->TempVorl[b].LineSpa) &&
					(doc->docParagraphStyles[a].Indent == dia->TempVorl[b].Indent) &&
					(doc->docParagraphStyles[a].First == dia->TempVorl[b].First) &&
					(doc->docParagraphStyles[a].textAlignment == dia->TempVorl[b].textAlignment) &&
					(doc->docParagraphStyles[a].gapBefore == dia->TempVorl[b].gapBefore) &&
					(doc->docParagraphStyles[a].gapAfter == dia->TempVorl[b].gapAfter) &&
					(doc->docParagraphStyles[a].Font == dia->TempVorl[b].Font) &&
					(doc->docParagraphStyles[a].TabValues == dia->TempVorl[b].TabValues) &&
					(doc->docParagraphStyles[a].Drop == dia->TempVorl[b].Drop) &&
					(doc->docParagraphStyles[a].DropLin == dia->TempVorl[b].DropLin) &&
					(doc->docParagraphStyles[a].FontEffect == dia->TempVorl[b].FontEffect) &&
					(doc->docParagraphStyles[a].FColor == dia->TempVorl[b].FColor) &&
					(doc->docParagraphStyles[a].FShade == dia->TempVorl[b].FShade) &&
					(doc->docParagraphStyles[a].SColor == dia->TempVorl[b].SColor) &&
					(doc->docParagraphStyles[a].SShade == dia->TempVorl[b].SShade) &&
					(doc->docParagraphStyles[a].BaseAdj == dia->TempVorl[b].BaseAdj) &&
					(doc->docParagraphStyles[a].FontSize == dia->TempVorl[b].FontSize))
				{
				nr = b;
				ff = true;
				break;
				}
			}
			if (ff)
				ers.append(nr);
			else
				ers.append(0);
		}
	}
	for (uint d=0; d<doc->DocItems.count(); ++d)
	{
		ite = doc->Items.at(d);
		if (ite->itemType() == PageItem::TextFrame)
		{
			for (uint e=0; e<ite->itemText.count(); ++e)
			{
				int cabori = ite->itemText.at(e)->cab;
				int cabneu = ers[cabori];
				if (cabori > 4)
				{
					if (cabneu > 0)
					{
						if (ite->itemText.at(e)->cfont == (*doc->AllFonts)[doc->docParagraphStyles[cabori].Font])
							ite->itemText.at(e)->cfont = (*doc->AllFonts)[dia->TempVorl[cabneu].Font];
						if (ite->itemText.at(e)->csize == doc->docParagraphStyles[cabori].FontSize)
							ite->itemText.at(e)->csize = dia->TempVorl[cabneu].FontSize;
						if ((ite->itemText.at(e)->cstyle & 127 ) == doc->docParagraphStyles[cabori].FontEffect)
						{
							ite->itemText.at(e)->cstyle &= ~127;
							ite->itemText.at(e)->cstyle |= dia->TempVorl[cabneu].FontEffect;
						}
						if (ite->itemText.at(e)->ccolor == doc->docParagraphStyles[cabori].FColor)
							ite->itemText.at(e)->ccolor = dia->TempVorl[cabneu].FColor;
						if (ite->itemText.at(e)->cshade == doc->docParagraphStyles[cabori].FShade)
							ite->itemText.at(e)->cshade = dia->TempVorl[cabneu].FShade;
						if (ite->itemText.at(e)->cstroke == doc->docParagraphStyles[cabori].SColor)
							ite->itemText.at(e)->cstroke = dia->TempVorl[cabneu].SColor;
						if (ite->itemText.at(e)->cshade2 == doc->docParagraphStyles[cabori].SShade)
							ite->itemText.at(e)->cshade2 = dia->TempVorl[cabneu].SShade;
					}
					else
					{
						ite->itemText.at(e)->ccolor = ite->TxtFill;
						ite->itemText.at(e)->cshade = ite->ShTxtFill;
						ite->itemText.at(e)->cstroke = ite->TxtStroke;
						ite->itemText.at(e)->cshade2 = ite->ShTxtStroke;
						ite->itemText.at(e)->csize = ite->ISize;
						ite->itemText.at(e)->cstyle &= ~127;
						ite->itemText.at(e)->cstyle |= ite->TxTStyle;
					}
					ite->itemText.at(e)->cab = cabneu;
				}
			}
		}
	}
	for (uint d=0; d<doc->MasterItems.count(); ++d)
	{
		ite = doc->MasterItems.at(d);
		if (ite->itemType() == PageItem::TextFrame)
		{
			for (uint e=0; e<ite->itemText.count(); ++e)
			{
				int cabori = ite->itemText.at(e)->cab;
				int cabneu = ers[cabori];
				if (cabori > 4)
				{
					if (cabneu > 0)
					{
						if (ite->itemText.at(e)->cfont == (*doc->AllFonts)[doc->docParagraphStyles[cabori].Font])
							ite->itemText.at(e)->cfont = (*doc->AllFonts)[dia->TempVorl[cabneu].Font];
						if (ite->itemText.at(e)->csize == doc->docParagraphStyles[cabori].FontSize)
							ite->itemText.at(e)->csize = dia->TempVorl[cabneu].FontSize;
						if ((ite->itemText.at(e)->cstyle & 127 ) == doc->docParagraphStyles[cabori].FontEffect)
						{
							ite->itemText.at(e)->cstyle &= ~127;
							ite->itemText.at(e)->cstyle |= dia->TempVorl[cabneu].FontEffect;
						}
						if (ite->itemText.at(e)->ccolor == doc->docParagraphStyles[cabori].FColor)
							ite->itemText.at(e)->ccolor = dia->TempVorl[cabneu].FColor;
						if (ite->itemText.at(e)->cshade == doc->docParagraphStyles[cabori].FShade)
							ite->itemText.at(e)->cshade = dia->TempVorl[cabneu].FShade;
						if (ite->itemText.at(e)->cstroke == doc->docParagraphStyles[cabori].SColor)
							ite->itemText.at(e)->cstroke = dia->TempVorl[cabneu].SColor;
						if (ite->itemText.at(e)->cshade2 == doc->docParagraphStyles[cabori].SShade)
							ite->itemText.at(e)->cshade2 = dia->TempVorl[cabneu].SShade;
					}
					else
					{
						ite->itemText.at(e)->ccolor = ite->TxtFill;
						ite->itemText.at(e)->cshade = ite->ShTxtFill;
						ite->itemText.at(e)->cstroke = ite->TxtStroke;
						ite->itemText.at(e)->cshade2 = ite->ShTxtStroke;
						ite->itemText.at(e)->csize = ite->ISize;
						ite->itemText.at(e)->cstyle &= ~127;
						ite->itemText.at(e)->cstyle |= ite->TxTStyle;
					}
					ite->itemText.at(e)->cab = cabneu;
				}
			}
		}
	}
	if (CurrStED != NULL)
	{
		if (CurrStED->Editor->StyledText.count() != 0)
		{
			for (uint pa = 0; pa < CurrStED->Editor->StyledText.count(); ++pa)
			{
				SEditor::ChList *chars;
				chars = CurrStED->Editor->StyledText.at(pa);
				(*CurrStED->Editor->ParagStyles.at(pa)) = ers[CurrStED->Editor->ParagStyles[pa]];
				int cabneu = 0;
				for (uint e = 0; e < chars->count(); ++e)
				{
					int cabori = chars->at(e)->cab;
					cabneu = ers[cabori];
					if (cabori > 4)
					{
						if (cabneu > 0)
						{
							if (chars->at(e)->cfont == doc->docParagraphStyles[cabori].Font)
								chars->at(e)->cfont = dia->TempVorl[cabneu].Font;
							if (chars->at(e)->csize == doc->docParagraphStyles[cabori].FontSize)
								chars->at(e)->csize = dia->TempVorl[cabneu].FontSize;
							if ((chars->at(e)->cstyle & 127 ) == doc->docParagraphStyles[cabori].FontEffect)
							{
								chars->at(e)->cstyle &= ~127;
								chars->at(e)->cstyle |= dia->TempVorl[cabneu].FontEffect;
							}
							if (chars->at(e)->ccolor == doc->docParagraphStyles[cabori].FColor)
								chars->at(e)->ccolor = dia->TempVorl[cabneu].FColor;
							if (chars->at(e)->cshade == doc->docParagraphStyles[cabori].FShade)
								chars->at(e)->cshade = dia->TempVorl[cabneu].FShade;
							if (chars->at(e)->cstroke == doc->docParagraphStyles[cabori].SColor)
								chars->at(e)->cstroke = dia->TempVorl[cabneu].SColor;
							if (chars->at(e)->cshade2 == doc->docParagraphStyles[cabori].SShade)
								chars->at(e)->cshade2 = dia->TempVorl[cabneu].SShade;
						}
						else
						{
							chars->at(e)->ccolor = ite->TxtFill;
							chars->at(e)->cshade = ite->ShTxtFill;
							chars->at(e)->cstroke = ite->TxtStroke;
							chars->at(e)->cshade2 = ite->ShTxtStroke;
							chars->at(e)->csize = ite->ISize;
							chars->at(e)->cstyle &= ~127;
							chars->at(e)->cstyle |= ite->TxTStyle;
						}
						chars->at(e)->cab = cabneu;
					}
				}
			}
			CurrStED->Editor->currentParaStyle = ers[CurrStED->Editor->currentParaStyle];
		}
	}
	doc->docParagraphStyles = dia->TempVorl;
	if (CurrStED != NULL)
	{
		if (CurrStED->Editor->StyledText.count() != 0)
			CurrStED->Editor->updateAll();
	}
	for (uint a=0; a<doc->docParagraphStyles.count(); ++a)
	{
		if (doc->docParagraphStyles[a].Font != "")
		{
			QString nf = doc->docParagraphStyles[a].Font;
			if (!doc->UsedFonts.contains(nf))
			{
				if (doc->AddFont(nf, Prefs.AvailFonts[nf]->Font))
				{
					int ff = FontMenu->insertItem(new FmItem(nf, Prefs.AvailFonts[nf]->Font));
					FontID.insert(ff, Prefs.AvailFonts[nf]->SCName);
				}
				else
					doc->docParagraphStyles[a].Font = doc->toolSettings.defFont;
			}
		}
	}
	propertiesPalette->Spal->updateFormatList();
	propertiesPalette->Cpal->SetColors(doc->PageColors);
	propertiesPalette->updateCList();
	ColorList::Iterator it;
	ColorMenC->clear();
	QPixmap pm = QPixmap(15, 15);
	int ac = 0;
	ColorMenC->insertItem( tr("None"));
	for (it = doc->PageColors.begin(); it != doc->PageColors.end(); ++it)
	{
		pm.fill(doc->PageColors[it.key()].getRGBColor());
		ColorMenC->insertItem(pm, it.key());
		if (it.key() == doc->toolSettings.dBrush)
			ColorMenC->setCurrentItem(ac);
		ac++;
	}
	view->DrawNew();
	slotDocCh();
}

void ScribusApp::setNewAbStyle(int a)
{
	setActiveWindow();
	if (HaveDoc)
	{
		view->SetAbStyle(a);
		doc->currentParaStyle = a;
		propertiesPalette->setAli(a);
		PageItem *currItem = view->SelItem.at(0);
		setTBvals(currItem);
		slotDocCh();
	}
}

void ScribusApp::setAbsValue(int a)
{
	doc->currentParaStyle = a;
	propertiesPalette->setAli(a);
	QString alignment[] = {"Left", "Center", "Right", "Block", "Forced"};
	for (int b=0; b<5; ++b)
	{
		QString actionName="align"+alignment[b];
		if (scrActions[actionName])
			scrActions[actionName]->setOn(a==b);
	}
}

void ScribusApp::slotEditColors()
{
	int a;
	uint c, d;
	ColorList edc;
	QMap<QString,QString> ers;
	PageItem *ite;
	QColor tmpc;
	if (HaveDoc)
		edc = doc->PageColors;
	else
		edc = Prefs.DColors;
	Farbmanager* dia = new Farbmanager(this, edc, HaveDoc, Prefs.DColorSet, Prefs.CustomColorSets);
	if (dia->exec())
	{
		if (HaveDoc)
		{
			slotDocCh();
			doc->PageColors = dia->EditColors;
			propertiesPalette->Cpal->SetColors(doc->PageColors);
			propertiesPalette->updateCList();
			ColorList::Iterator it;
			ColorMenC->clear();
			QPixmap pm = QPixmap(15, 15);
			a = 0;
			ColorMenC->insertItem( tr("None"));
			for (it = doc->PageColors.begin(); it != doc->PageColors.end(); ++it)
			{
				pm.fill(doc->PageColors[it.key()].getRGBColor());
				ColorMenC->insertItem(pm, it.key());
				if (it.key() == doc->toolSettings.dBrush)
					ColorMenC->setCurrentItem(a);
				a++;
			}
			ers = dia->Ersatzliste;
			if (!ers.isEmpty())
			{
				QMap<QString,QString>::Iterator it;
				for (it = ers.begin(); it != ers.end(); ++it)
				{
					if (it.key() == doc->CurrTextFill)
						doc->CurrTextFill = it.data();
					if (it.key() == doc->CurrTextStroke)
						doc->CurrTextStroke = it.data();
					for (c=0; c<doc->DocItems.count(); ++c)
					{
						ite = doc->DocItems.at(c);
						if ((ite->itemType() == PageItem::TextFrame) || (ite->itemType() == PageItem::PathText))
						{
							for (d=0; d<ite->itemText.count(); ++d)
							{
								if (it.key() == ite->itemText.at(d)->ccolor)
									ite->itemText.at(d)->ccolor = it.data();
								if (it.key() == ite->itemText.at(d)->cstroke)
									ite->itemText.at(d)->cstroke = it.data();
							}
						}
						if (it.key() == ite->fillColor())
							ite->setFillColor(it.data());
						if (it.key() == ite->lineColor())
							ite->setLineColor(it.data());
						QPtrVector<VColorStop> cstops = ite->fill_gradient.colorStops();
						for (uint cst = 0; cst < ite->fill_gradient.Stops(); ++cst)
						{
							if (it.key() == cstops.at(cst)->name)
							{
								ite->SetFarbe(&tmpc, it.data(), cstops.at(cst)->shade);
								cstops.at(cst)->color = tmpc;
								cstops.at(cst)->name = it.data();
							}
						}
					}
				}
				for (it = ers.begin(); it != ers.end(); ++it)
				{
					for (c=0; c<doc->MasterItems.count(); ++c)
					{
						ite = doc->MasterItems.at(c);
						if ((ite->itemType() == PageItem::TextFrame) || (ite->itemType() == PageItem::PathText))
						{
							for (d=0; d<ite->itemText.count(); ++d)
							{
								if (it.key() == ite->itemText.at(d)->ccolor)
									ite->itemText.at(d)->ccolor = it.data();
								if (it.key() == ite->itemText.at(d)->cstroke)
									ite->itemText.at(d)->cstroke = it.data();
							}
						}
						if (it.key() == ite->fillColor())
							ite->setFillColor(it.data());
						if (it.key() == ite->lineColor())
							ite->setLineColor(it.data());
						QPtrVector<VColorStop> cstops = ite->fill_gradient.colorStops();
						for (uint cst = 0; cst < ite->fill_gradient.Stops(); ++cst)
						{
							if (it.key() == cstops.at(cst)->name)
							{
								ite->SetFarbe(&tmpc, it.data(), cstops.at(cst)->shade);
								cstops.at(cst)->color = tmpc;
								cstops.at(cst)->name = it.data();
							}
						}
					}
				}
			}
			view->DrawNew();
		}
		else
		{
			Prefs.DColors = dia->EditColors;
			Prefs.DColorSet = dia->LoadColSet->text();
			propertiesPalette->Cpal->SetColors(Prefs.DColors);
		}
	}
	if (!HaveDoc)
		Prefs.CustomColorSets = dia->CColSet;
	delete dia;
}

void ScribusApp::setPenFarbe(QString farbe)
{
	if (HaveDoc)
	{
		view->ItemPen(farbe);
		slotDocCh();
	}
}

void ScribusApp::setPenShade(int sh)
{
	setActiveWindow();
	if (HaveDoc)
	{
		view->ItemPenShade(sh);
		slotDocCh();
	}
}

void ScribusApp::setBrushFarbe(QString farbe)
{
	if (HaveDoc)
	{
		view->ItemBrush(farbe);
		slotDocCh();
	}
}

void ScribusApp::setBrushShade(int sh)
{
	setActiveWindow();
	if (HaveDoc)
	{
		view->ItemBrushShade(sh);
		slotDocCh();
	}
}

void ScribusApp::setGradFill(int typ)
{
	if (HaveDoc)
	{
		view->ItemGradFill(typ);
		slotDocCh();
	}
}

void ScribusApp::updtGradFill()
{
	if (HaveDoc)
	{
		if (view->SelItem.count() != 0)
		{
			PageItem *currItem = view->SelItem.at(0);
			currItem->fill_gradient = propertiesPalette->Cpal->gradEdit->Preview->fill_gradient;
			view->RefreshItem(currItem);
			slotDocCh();
		}
	}
}

void ScribusApp::GetBrushPen()
{
	setActiveWindow();
	if (HaveDoc)
	{
		view->QueryFarben();
		slotDocCh();
	}
}

void ScribusApp::MakeFrame(int f, int c, double *vals)
{
	PageItem *currItem = view->SelItem.at(0);
	switch (f)
	{
	case 0:
		view->SetRectFrame(currItem);
		break;
	case 1:
		view->SetOvalFrame(currItem);
		break;
	default:
		view->SetFrameShape(currItem, c, vals);
		currItem->FrameType = f+2;
		break;
	}
	propertiesPalette->SetCurItem(currItem);
	view->RefreshItem(currItem);
	slotDocCh();
}

void ScribusApp::DeleteObjekt()
{
	 if (HaveDoc)
	 	if (!doc->EditClip)
			view->DeleteItem();
}

void ScribusApp::Objekt2Back()
{
	view->ToBack();
}

void ScribusApp::Objekt2Front()
{
	view->ToFront();
}

void ScribusApp::ObjektRaise()
{
	view->RaiseItem();
}

void ScribusApp::ObjektLower()
{
	view->LowerItem();
}

void ScribusApp::ObjektDup()
{
	slotSelect();
	double dx, dy;
	if (view->SelItem.at(0)->OwnPage == -1)
	{
		dx = 0;
		dy = 0;
	}
	else
	{
		dx = doc->currentPage->Xoffset;
		dy = doc->currentPage->Yoffset;
	}
	slotEditCopy();
	view->Deselect(true);
	slotEditPaste();
	for (uint b=0; b<view->SelItem.count(); ++b)
	{
		view->SelItem.at(b)->setLocked(false);
		view->SelItem.at(b)->Xpos += dx;
		view->SelItem.at(b)->Ypos += dy;
		view->MoveItem(DispX, DispY, view->SelItem.at(b));
	}
}

void ScribusApp::ObjektDupM()
{
	slotSelect();
	double dx, dy;
	if (view->SelItem.at(0)->OwnPage == -1)
	{
		dx = 0;
		dy = 0;
	}
	else
	{
		dx = doc->currentPage->Xoffset;
		dy = doc->currentPage->Yoffset;
	}
	NoFrameEdit();
	Mdup *dia = new Mdup(this, DispX * doc->unitRatio, DispY * doc->unitRatio, doc->docUnitIndex);
	if (dia->exec())
	{
		int anz = dia->Ncopies->value();
		double dH = dia->ShiftH->value() / doc->unitRatio;
		double dV = dia->ShiftV->value() / doc->unitRatio;
		double dH2 = dH;
		double dV2 = dV;
		int a;
		if (anz>0)
		{
			slotEditCopy();
			view->Deselect(true);
			for (a=0; a<anz; ++a)
			{
				slotEditPaste();
				for (uint b=0; b<view->SelItem.count(); ++b)
				{
					view->SelItem.at(b)->setLocked(false);
					view->SelItem.at(b)->Xpos += dx;
					view->SelItem.at(b)->Ypos += dy;
					view->MoveItem(dH2, dV2, view->SelItem.at(b), true);
				}
				dH2 += dH;
				dV2 += dV;
			}
			DispX = dH;
			DispY = dV;
			slotDocCh();
			view->Deselect(true);
		}
	}
	delete dia;
}

void ScribusApp::SelectFromOutl(int Page, int Item, bool single)
{
	NoFrameEdit();
	setActiveWindow();
	view->Deselect(true);
	if ((Page != -1) && (Page != static_cast<int>(doc->currentPage->PageNr)))
		view->GotoPage(Page);
	view->SelectItemNr(Item, true, single);
	if (view->SelItem.count() != 0)
	{
		PageItem *currItem = view->SelItem.at(0);
	 // jjsa 23-05-2004 added for centering of rotated objects
		if ( currItem->Rot != 0.0 )
		{
			double y1 = sin(currItem->Rot/180.*M_PI) * currItem->Width;
			double x1 = cos(currItem->Rot/180.*M_PI) * currItem->Width;
			double y2 = sin((currItem->Rot+90.)/180*M_PI) * currItem->Height;
			double x2 = cos((currItem->Rot+90.)/180*M_PI) * currItem->Height;
			double mx = currItem->Xpos + ((x1 + x2)/2.0);
			double my = currItem->Ypos + ((y1 + y2)/2.0);
			if ((qRound((currItem->Xpos + QMAX(x1, x2)) * view->Scale) > view->contentsWidth()) ||
				(qRound((currItem->Ypos + QMAX(y1, y2)) * view->Scale) > view->contentsHeight()))
				view->resizeContents(QMAX(qRound((currItem->Xpos + QMAX(x1, x2)) * view->Scale), view->contentsWidth()),
														  QMAX(qRound((currItem->Ypos + QMAX(y1, y2)) * view->Scale), view->contentsHeight()));
			view->SetCCPo(static_cast<int>(mx), static_cast<int>(my));
		}
		else
		{
			if ((qRound((currItem->Xpos + currItem->Width) * view->Scale) > view->contentsWidth()) ||
				(qRound((currItem->Ypos + currItem->Height) * view->Scale) > view->contentsHeight()))
				view->resizeContents(QMAX(qRound((currItem->Xpos + currItem->Width) * view->Scale), view->contentsWidth()),
														  QMAX(qRound((currItem->Ypos + currItem->Height) * view->Scale), view->contentsHeight()));
			view->SetCCPo(static_cast<int>(currItem->Xpos + currItem->Width/2), static_cast<int>(currItem->Ypos + currItem->Height/2));
		}
	}
}

void ScribusApp::SelectFromOutlS(int Page)
{
	NoFrameEdit();
	setActiveWindow();
	view->Deselect(true);
	if (Page < 0)
		return;
	view->GotoPage(Page);
}

void ScribusApp::InfoDoc()
{
	DocInfos *dia = new DocInfos(this, doc);
	if (dia->exec())
	{
		doc->DocAutor = dia->authorEdit->text();
		doc->DocTitel = dia->titleEdit->text();
		doc->DocComments = dia->descriptionEdit->text();
		doc->DocKeyWords = dia->keywordsEdit->text();
		doc->DocPublisher = dia->publisherEdit->text();
		doc->DocDate = dia->dateEdit->text();
		doc->DocType = dia->typeEdit->text();
		doc->DocFormat = dia->formatEdit->text();
		doc->DocIdent = dia->identifierEdit->text();
		doc->DocSource = dia->sourceEdit->text();
		doc->DocLangInfo = dia->languageEdit->text();
		doc->DocRelation = dia->relationEdit->text();
		doc->DocCover = dia->coverageEdit->text();
		doc->DocRights = dia->rightsEdit->text();
		doc->DocContrib = dia->contributorsEdit->text();
		slotDocCh();
	}
	delete dia;
}

void ScribusApp::ObjektAlign()
{
	double xdp, ydp;
	bool xa, ya, Vth, Vtv;
	int xart, yart, ein;
	ein = doc->docUnitIndex;
	NoFrameEdit();
	view->BuildAObj();
	Align *dia = new Align(this, view->AObjects.count(), ein, doc, view);
	connect(dia, SIGNAL(ApplyDist(bool, bool, bool, bool, double, double, int, int)),
	        this, SLOT(DoAlign(bool, bool, bool, bool, double, double, int, int)));

	// Tooltip string for the Action History will have the names of the involved items
	QString targetTooltip = Um::ItemsInvolved + "\n";
	for (uint i = 0; i < view->SelItem.count(); ++i)
		targetTooltip += "\t" + view->SelItem.at(i)->getUName() + "\n";

	// Make the align action a single action in Action History
	undoManager->beginTransaction(Um::Selection, 0, Um::AlignDistribute,
								  targetTooltip, Um::IAlignDistribute);

	if (dia->exec())
	{
		xdp = dia->AHor->value() / doc->unitRatio;
		xa = (dia->CheckH->isChecked() || dia->VerteilenH->isChecked());
		ydp = dia->AVert->value() / doc->unitRatio;
		ya = (dia->CheckV->isChecked() || dia->VerteilenV->isChecked());
		xart = dia->VartH->currentItem();
		yart = dia->VartV->currentItem();
		Vth = dia->VerteilenH->isChecked();
		Vtv = dia->VerteilenV->isChecked();
		view->AlignObj(xa, ya, Vth, Vtv, xdp, ydp, xart, yart);
		slotDocCh();
		HaveNewSel(view->SelItem.at(0)->itemType());
		for (uint i = 0; i < view->SelItem.count(); ++i)
			view->SelItem.at(i)->checkChanges(true); // force aligned items to check their changes
		undoManager->commit(); // commit and send the action to the UndoManager
	}
	else
	{
		for (uint i = 0; i < view->SelItem.count(); ++i)
			view->SelItem.at(i)->checkChanges(true); // force aligned items to check their changes
			                                         // before canceling the transaction so that these
			                                         // "cancel moves" won't get recorded
		undoManager->cancelTransaction();
	}

	delete dia;
}

void ScribusApp::DoAlign(bool xa, bool ya, bool Vth, bool Vtv, double xdp, double ydp, int xart, int yart)
{
	view->AlignObj(xa, ya, Vth, Vtv, xdp, ydp, xart, yart);
	slotDocCh();
}

void ScribusApp::buildFontMenu()
{
	FontID.clear();
	FontMenu->clear();
	int a;
	QString b = " ";
	SCFontsIterator it(Prefs.AvailFonts);
	FontSub = new FontCombo(0, &Prefs);
	FontMenu->insertItem(FontSub);
	connect(FontSub, SIGNAL(activated(int)), this, SLOT(setItemFont2(int)));
	FontMenu->insertSeparator();
	if (!HaveDoc)
	{
		it.toFirst();
		a = FontMenu->insertItem(new FmItem(it.currentKey(), it.current()->Font));
		FontMenu->setItemChecked(a, true);
		FontID.insert(a, it.current()->SCName);
	}
	else
	{
		QMap<QString,QFont>::Iterator it3;
		for (it3 = doc->UsedFonts.begin(); it3 != doc->UsedFonts.end(); ++it3)
		{
			a = FontMenu->insertItem(new FmItem(it3.key(), it3.data()));
			if (it3.key() == doc->toolSettings.defFont)
				FontMenu->setItemChecked(a, true);
			FontID.insert(a, it3.key());
		}
	}
	connect(FontMenu, SIGNAL(activated(int)), this, SLOT(setItemFont(int)));
}

const bool ScribusApp::GetAllFonts()
{
	Prefs.AvailFonts.GetFonts(PrefsPfad);
	if (Prefs.AvailFonts.isEmpty())
		return true;
	return false;
}

void ScribusApp::slotPrefsOrg()
{
	//reset the appMode so we restore our tools shortcuts
	double UmReFaktor;
	setAppMode(NormalMode);
	bool zChange = false;
	Preferences *dia = new Preferences(this, &Prefs);
	if (dia->exec())
	{
		Prefs.AppFontSize = dia->GFsize->value();
		Prefs.Wheelval = dia->SpinBox3->value();
		Prefs.RecentDCount = dia->Recen->value();
		Prefs.DocDir = dia->Docs->text();
		DocDir = Prefs.DocDir;
		Prefs.ProfileDir = dia->ProPfad->text();
		Prefs.ScriptDir = dia->ScriptPfad->text();
		Prefs.TemplateDir = dia->TemplateDir->text();
		switch (dia->PreviewSize->currentItem())
		{
		case 0:
			Prefs.PSize = 40;
			break;
		case 1:
			Prefs.PSize = 60;
			break;
		case 2:
			Prefs.PSize = 80;
			break;
		}
		Prefs.SaveAtQ = dia->SaveAtQuit->isChecked();
		scrapbookPalette->BibWin->RebuildView();
		scrapbookPalette->AdjustMenu();
		Prefs.guiLanguage=dia->selectedGUILang;
		if (Prefs.GUI != dia->GUICombo->currentText())
		{
			Prefs.GUI = dia->GUICombo->currentText();
			qApp->setStyle(QStyleFactory::create(Prefs.GUI));
		}
		QFont apf = qApp->font();
		apf.setPointSize(Prefs.AppFontSize);
		qApp->setFont(apf,true);
		dia->tabTools->polyWidget->getValues(&Prefs.toolSettings.polyC, &Prefs.toolSettings.polyFd, &Prefs.toolSettings.polyF, &Prefs.toolSettings.polyS, &Prefs.toolSettings.polyR);
		Prefs.pageSize = dia->prefsPageSizeName;
		Prefs.pageOrientation = dia->GZComboO->currentItem();
		Prefs.PageWidth = dia->Pagebr;
		Prefs.PageHeight = dia->Pageho;
		Prefs.RandOben = dia->RandT;
		Prefs.RandUnten = dia->RandB;
		Prefs.RandLinks = dia->RandL;
		Prefs.RandRechts = dia->RandR;
		Prefs.FacingPages = dia->facingPages->isChecked();
		Prefs.LeftPageFirst = dia->Linkszuerst->isChecked();
		Prefs.gimp_exe = dia->GimpName->text();
		Prefs.gs_AntiAliasGraphics = dia->GSantiGraph->isChecked();
		Prefs.gs_AntiAliasText = dia->GSantiText->isChecked();
		Prefs.gs_exe = dia->GSName->text();
		Prefs.ClipMargin = dia->ClipMarg->isChecked();
		Prefs.GCRMode = dia->DoGCR->isChecked();
		Prefs.guidesSettings.before = dia->tabGuides->inBackground->isChecked();
		Prefs.marginColored = dia->checkUnprintable->isChecked();
		Prefs.askBeforeSubstituite = dia->AskForSubs->isChecked();
		if (Prefs.DisScale != dia->DisScale)
		{
			Prefs.DisScale = dia->DisScale;
			zChange = true;
		}
		propertiesPalette->Cpal->UseTrans(true);
		Prefs.docUnitIndex = dia->UnitCombo->currentItem();
		UmReFaktor = unitGetRatioFromIndex(Prefs.docUnitIndex);
		Prefs.ScratchBottom = dia->bottomScratch->value() / UmReFaktor;
		Prefs.ScratchLeft = dia->leftScratch->value() / UmReFaktor;
		Prefs.ScratchRight = dia->rightScratch->value() / UmReFaktor;
		Prefs.ScratchTop = dia->topScratch->value() / UmReFaktor;
		Prefs.DpapColor = dia->colorPaper;
		Prefs.toolSettings.defFont = dia->tabTools->fontComboText->currentText();
		Prefs.toolSettings.defSize = dia->tabTools->sizeComboText->currentText().left(2).toInt() * 10;
		Prefs.guidesSettings.marginsShown = dia->tabGuides->marginBox->isChecked();
		Prefs.guidesSettings.framesShown = dia->checkFrame->isChecked();
		Prefs.guidesSettings.gridShown = dia->tabGuides->checkGrid->isChecked();
		Prefs.guidesSettings.guidesShown = dia->tabGuides->guideBox->isChecked();
		Prefs.guidesSettings.baseShown = dia->tabGuides->baselineBox->isChecked();
		Prefs.guidesSettings.showPic = dia->checkPictures->isChecked();
		Prefs.guidesSettings.linkShown = dia->checkLink->isChecked();
		Prefs.guidesSettings.grabRad = dia->tabGuides->grabDistance->value();
		Prefs.guidesSettings.guideRad = dia->tabGuides->snapDistance->value() / UmReFaktor;
		Prefs.guidesSettings.minorGrid = dia->tabGuides->minorSpace->value() / UmReFaktor;
		Prefs.guidesSettings.majorGrid = dia->tabGuides->majorSpace->value() / UmReFaktor;
		Prefs.guidesSettings.minorColor = dia->tabGuides->colorMinorGrid;
		Prefs.guidesSettings.majorColor = dia->tabGuides->colorMajorGrid;
		Prefs.guidesSettings.margColor = dia->tabGuides->colorMargin;
		Prefs.guidesSettings.guideColor = dia->tabGuides->colorGuides;
		Prefs.guidesSettings.baseColor = dia->tabGuides->colorBaselineGrid;
		Prefs.checkerProfiles = dia->tabDocChecker->checkerProfile;
		Prefs.curCheckProfile = dia->tabDocChecker->curCheckProfile->currentText();
		Prefs.typographicSetttings.valueSuperScript = dia->tabTypo->superDisplacement->value();
		Prefs.typographicSetttings.scalingSuperScript = dia->tabTypo->superScaling->value();
		Prefs.typographicSetttings.valueSubScript = dia->tabTypo->subDisplacement->value();
		Prefs.typographicSetttings.scalingSubScript = dia->tabTypo->subScaling->value();
		Prefs.typographicSetttings.valueSmallCaps = dia->tabTypo->capsScaling->value();
		Prefs.typographicSetttings.autoLineSpacing = dia->tabTypo->autoLine->value();
		Prefs.typographicSetttings.valueBaseGrid = dia->tabGuides->baseGrid->value() / UmReFaktor;
		Prefs.typographicSetttings.offsetBaseGrid = dia->tabGuides->baseOffset->value() / UmReFaktor;
		Prefs.toolSettings.dPen = dia->tabTools->colorComboLineShape->currentText();
		if (Prefs.toolSettings.dPen == tr("None"))
			Prefs.toolSettings.dPen = "None";
		Prefs.toolSettings.dPenText = dia->tabTools->colorComboText->currentText();
		if (Prefs.toolSettings.dPenText == tr("None"))
			Prefs.toolSettings.dPenText = "None";
		Prefs.toolSettings.dStrokeText = dia->tabTools->colorComboStrokeText->currentText();
		if (Prefs.toolSettings.dStrokeText == tr("None"))
			Prefs.toolSettings.dStrokeText = "None";
		Prefs.toolSettings.dCols = dia->tabTools->columnsText->value();
		Prefs.toolSettings.dGap = dia->tabTools->gapText->value() / UmReFaktor;
		Prefs.toolSettings.dBrush = dia->tabTools->comboFillShape->currentText();
		if (Prefs.toolSettings.dBrush == tr("None"))
			Prefs.toolSettings.dBrush = "None";
		Prefs.toolSettings.dShade = dia->tabTools->shadingFillShape->value();
		Prefs.toolSettings.dShade2 = dia->tabTools->shadingLineShape->value();
		switch (dia->tabTools->comboStyleShape->currentItem())
		{
		case 0:
			Prefs.toolSettings.dLineArt = SolidLine;
			break;
		case 1:
			Prefs.toolSettings.dLineArt = DashLine;
			break;
		case 2:
			Prefs.toolSettings.dLineArt = DotLine;
			break;
		case 3:
			Prefs.toolSettings.dLineArt = DashDotLine;
			break;
		case 4:
			Prefs.toolSettings.dLineArt = DashDotDotLine;
			break;
		}
		Prefs.toolSettings.dWidth = dia->tabTools->lineWidthShape->value();
		Prefs.toolSettings.dPenLine = dia->tabTools->colorComboLine->currentText();
		if (Prefs.toolSettings.dPenLine == tr("None"))
			Prefs.toolSettings.dPenLine = "None";
		Prefs.toolSettings.dShadeLine = dia->tabTools->shadingLine->value();
		switch (dia->tabTools->comboStyleLine->currentItem())
		{
		case 0:
			Prefs.toolSettings.dLstyleLine = SolidLine;
			break;
		case 1:
			Prefs.toolSettings.dLstyleLine = DashLine;
			break;
		case 2:
			Prefs.toolSettings.dLstyleLine = DotLine;
			break;
		case 3:
			Prefs.toolSettings.dLstyleLine = DashDotLine;
			break;
		case 4:
			Prefs.toolSettings.dLstyleLine = DashDotDotLine;
			break;
		}
		Prefs.toolSettings.dWidthLine = dia->tabTools->lineWidthLine->value();
		Prefs.toolSettings.dStartArrow = dia->tabTools->startArrow->currentItem();
		Prefs.toolSettings.dEndArrow = dia->tabTools->endArrow->currentItem();
		Prefs.toolSettings.magMin = dia->tabTools->minimumZoom->value();
		Prefs.toolSettings.magMax = dia->tabTools->maximumZoom->value();
		Prefs.toolSettings.magStep = dia->tabTools->zoomStep->value();
		Prefs.toolSettings.dBrushPict = dia->tabTools->comboFillImage->currentText();
		if (Prefs.toolSettings.dBrushPict == tr("None"))
			Prefs.toolSettings.dBrushPict = "None";
		Prefs.toolSettings.shadePict = dia->tabTools->shadingFillImage->value();
		Prefs.toolSettings.scaleX = static_cast<double>(dia->tabTools->scalingHorizontal->value()) / 100.0;
		Prefs.toolSettings.scaleY = static_cast<double>(dia->tabTools->scalingVertical->value()) / 100.0;
		Prefs.toolSettings.scaleType = dia->tabTools->buttonGroup3->isChecked();
		Prefs.toolSettings.aspectRatio = dia->tabTools->checkRatioImage->isChecked();
		Prefs.AutoSave = dia->ASon->isChecked();
		Prefs.AutoSaveTime = dia->ASTime->value() * 60 * 1000;
		Prefs.MinWordLen = dia->tabHyphenator->wordLen->value();
		Prefs.Language = GetLang(dia->tabHyphenator->language->currentText());
		Prefs.Automatic = !dia->tabHyphenator->verbose->isChecked();
		Prefs.AutoCheck = dia->tabHyphenator->input->isChecked();
		Prefs.HyCount = dia->tabHyphenator->maxCount->value();
		if (CMSavail)
			dia->tabColorManagement->setValues();
		uint a = 0;
		SCFontsIterator it(Prefs.AvailFonts);
		for ( ; it.current() ; ++it)
		{
			it.current()->EmbedPS = dia->tabFonts->fontFlags[it.currentKey()].FlagPS;
			it.current()->UseFont = dia->tabFonts->fontFlags[it.currentKey()].FlagUse;
			it.current()->Subset = dia->tabFonts->fontFlags[it.currentKey()].FlagSub;
		}
		a = 0;
		QMap<QString,QString>::Iterator itfsu;
		Prefs.GFontSub.clear();
		for (itfsu = dia->tabFonts->RList.begin(); itfsu != dia->tabFonts->RList.end(); ++itfsu)
		{
			Prefs.GFontSub[itfsu.key()] = dia->tabFonts->FlagsRepl.at(a)->currentText();
			a++;
		}
		FontSub->RebuildList(&Prefs, 0);
		propertiesPalette->Fonts->RebuildList(&Prefs, 0);
		Prefs.PDF_Options.Thumbnails = dia->tabPDF->CheckBox1->isChecked();
		Prefs.PDF_Options.Compress = dia->tabPDF->Compression->isChecked();
		Prefs.PDF_Options.CompressMethod = dia->tabPDF->CMethod->currentItem();
		Prefs.PDF_Options.Quality = dia->tabPDF->CQuality->currentItem();
		Prefs.PDF_Options.Resolution = dia->tabPDF->Resolution->value();
		Prefs.PDF_Options.RecalcPic = dia->tabPDF->DSColor->isChecked();
		Prefs.PDF_Options.PicRes = dia->tabPDF->ValC->value();
		Prefs.PDF_Options.Bookmarks = dia->tabPDF->CheckBM->isChecked();
		Prefs.PDF_Options.Binding = dia->tabPDF->ComboBind->currentItem();
		Prefs.PDF_Options.MirrorH = dia->tabPDF->MirrorH->isOn();
		Prefs.PDF_Options.MirrorV = dia->tabPDF->MirrorV->isOn();
		Prefs.PDF_Options.RotateDeg = dia->tabPDF->RotateDeg->currentItem() * 90;
		Prefs.PDF_Options.Articles = dia->tabPDF->Article->isChecked();
		Prefs.PDF_Options.Encrypt = dia->tabPDF->Encry->isChecked();
		Prefs.PDF_Options.UseLPI = dia->tabPDF->UseLPI->isChecked();
		Prefs.PDF_Options.BleedBottom = dia->tabPDF->BleedBottom->value() / UmReFaktor;
		Prefs.PDF_Options.BleedTop = dia->tabPDF->BleedTop->value() / UmReFaktor;
		Prefs.PDF_Options.BleedLeft = dia->tabPDF->BleedLeft->value() / UmReFaktor;
		Prefs.PDF_Options.BleedRight = dia->tabPDF->BleedRight->value() / UmReFaktor;
		if (dia->tabPDF->Encry->isChecked())
		{
			int Perm = -64;
			if (dia->tabPDF->PDFVersionCombo->currentItem() == 1)
				Perm &= ~0x00240000;
			if (dia->tabPDF->PrintSec->isChecked())
				Perm += 4;
			if (dia->tabPDF->ModifySec->isChecked())
				Perm += 8;
			if (dia->tabPDF->CopySec->isChecked())
				Perm += 16;
			if (dia->tabPDF->AddSec->isChecked())
				Perm += 32;
			Prefs.PDF_Options.Permissions = Perm;
			Prefs.PDF_Options.PassOwner = dia->tabPDF->PassOwner->text();
			Prefs.PDF_Options.PassUser = dia->tabPDF->PassUser->text();
		}
		if (dia->tabPDF->PDFVersionCombo->currentItem() == 0)
			Prefs.PDF_Options.Version = PDFOptions::PDFVersion_13;
		if (dia->tabPDF->PDFVersionCombo->currentItem() == 1)
			Prefs.PDF_Options.Version = PDFOptions::PDFVersion_14;
		if (dia->tabPDF->PDFVersionCombo->currentItem() == 2)
			Prefs.PDF_Options.Version = PDFOptions::PDFVersion_15;
		if (dia->tabPDF->PDFVersionCombo->currentItem() == 3)
			Prefs.PDF_Options.Version = PDFOptions::PDFVersion_X3;
		if (dia->tabPDF->OutCombo->currentItem() == 0)
		{
			Prefs.PDF_Options.isGrayscale = false;
			Prefs.PDF_Options.UseRGB = true;
			Prefs.PDF_Options.UseProfiles = false;
			Prefs.PDF_Options.UseProfiles2 = false;
		}
		else
		{
			if (dia->tabPDF->OutCombo->currentItem() == 2)
			{
				Prefs.PDF_Options.isGrayscale = true;
				Prefs.PDF_Options.UseRGB = false;
				Prefs.PDF_Options.UseProfiles = false;
				Prefs.PDF_Options.UseProfiles2 = false;
			}
			else
			{
				Prefs.PDF_Options.isGrayscale = false;
				Prefs.PDF_Options.UseRGB = false;
#ifdef HAVE_CMS
				if (CMSuse)
				{
					Prefs.PDF_Options.UseProfiles = dia->tabPDF->EmbedProfs->isChecked();
					Prefs.PDF_Options.UseProfiles2 = dia->tabPDF->EmbedProfs2->isChecked();
					Prefs.PDF_Options.Intent = dia->tabPDF->IntendS->currentItem();
					Prefs.PDF_Options.Intent2 = dia->tabPDF->IntendI->currentItem();
					Prefs.PDF_Options.EmbeddedI = dia->tabPDF->NoEmbedded->isChecked();
					Prefs.PDF_Options.SolidProf = dia->tabPDF->SolidPr->currentText();
					Prefs.PDF_Options.ImageProf = dia->tabPDF->ImageP->currentText();
					Prefs.PDF_Options.PrintProf = dia->tabPDF->PrintProfC->currentText();
					}
#endif
				}
		}
		
		Prefs.defaultItemAttributes = *(dia->tabDefaultItemAttributes->getNewAttributes());
		Prefs.defaultToCSetups = *(dia->tabDefaultTOCIndexPrefs->getNewToCs());
		
		GetCMSProfiles();
		Prefs.KeyActions = dia->tabKeys->getNewKeyMap();
		SetShortCut();
		SavePrefs();
		emit prefsChanged();
		QWidgetList windows = wsp->windowList();
		for ( int i = 0; i < static_cast<int>(windows.count()); ++i )
		{
			QWidget* w = wsp->windowList().at( i );
			ScribusWin* swin = (ScribusWin*)w;
			swin->doc->guidesSettings.before = Prefs.guidesSettings.before;
			swin->doc->marginColored = Prefs.marginColored;
		}
	}
	delete dia;
}

void ScribusApp::SavePrefs()
{
	Prefs.mainWinSettings.xPosition = abs(pos().x());
	Prefs.mainWinSettings.yPosition = abs(pos().y());
	Prefs.mainWinSettings.width = size().width();
	Prefs.mainWinSettings.height = size().height();
	Prefs.mainToolBarSettings.visible = WerkTools->isVisible();
	Prefs.pdfToolBarSettings.visible = WerkToolsP->isVisible();

	Prefs.RecentDocs.clear();
	uint max = QMIN(Prefs.RecentDCount, RecentDocs.count());
	for (uint m = 0; m < max; ++m)
	{
		Prefs.RecentDocs.append(RecentDocs[m]);
	}
	Prefs.PrinterName = PDef.Pname;
	Prefs.PrinterFile = PDef.Dname;
	Prefs.PrinterCommand = PDef.Command;
	ScriXmlDoc *ss = new ScriXmlDoc();
	ss->WritePref(&Prefs, PrefsPfad+"/scribus13.rc");
	delete ss;

    SavePrefsXML();
}

void ScribusApp::SavePrefsXML()
{
    if (prefsFile) {
        PrefsContext* userprefsContext = prefsFile->getContext("user_preferences");
        if (userprefsContext) {
            userprefsContext->set("gui_language",Prefs.guiLanguage);
            //continue here...
            //Prefs."blah blah" =...
        }
        prefsFile->write();
    }
}

void ScribusApp::ReadPrefs(bool import12)
{
	ScriXmlDoc *ss = new ScriXmlDoc();
	bool erg = ss->ReadPref(&Prefs, PrefsPfad+"/scribus13.rc", splashScreen, import12);
	delete ss;
	if (!erg)
		return;
	PDef.Pname = Prefs.PrinterName;
	PDef.Dname = Prefs.PrinterFile;
	PDef.Command = Prefs.PrinterCommand;

	uint max = QMIN(Prefs.RecentDCount, Prefs.RecentDocs.count());
	for (uint m = 0; m < max; ++m)
	{
		QFileInfo fd(QString::fromUtf8(Prefs.RecentDocs[m]));
		if (fd.exists())
		{
			RecentDocs.append(QString::fromUtf8(Prefs.RecentDocs[m]));
			fileWatcher->addFile(QString::fromUtf8(Prefs.RecentDocs[m]));
		}
	}
	rebuildRecentFileMenu();
	move(Prefs.mainWinSettings.xPosition, Prefs.mainWinSettings.yPosition);
	resize(Prefs.mainWinSettings.width, Prefs.mainWinSettings.height);
	ReadPrefsXML();
	if (Prefs.checkerProfiles.count() == 0)
	{
		struct checkerPrefs checkerSettings;
		checkerSettings.ignoreErrors = false;
		checkerSettings.autoCheck = true;
		checkerSettings.checkGlyphs = true;
		checkerSettings.checkOrphans = true;
		checkerSettings.checkOverflow = true;
		checkerSettings.checkPictures = true;
		checkerSettings.checkResolution = true;
		checkerSettings.checkTransparency = true;
		checkerSettings.checkAnnotations = false;
		checkerSettings.checkRasterPDF = true;
		checkerSettings.minResolution = 72.0;
		Prefs.checkerProfiles.insert( tr("Postscript"), checkerSettings);
		Prefs.checkerProfiles.insert( tr("PDF 1.3"), checkerSettings);
		checkerSettings.checkTransparency = false;
		Prefs.checkerProfiles.insert( tr("PDF 1.4"), checkerSettings);
		checkerSettings.checkTransparency = true;
		checkerSettings.checkAnnotations = true;
		checkerSettings.minResolution = 144.0;
		Prefs.checkerProfiles.insert( tr("PDF/X-3"), checkerSettings);
		Prefs.curCheckProfile = tr("Postscript");
	}
}

void ScribusApp::ReadPrefsXML()
{
    if (prefsFile) {
        PrefsContext* userprefsContext = prefsFile->getContext("user_preferences");
        if (userprefsContext) {
            Prefs.guiLanguage = userprefsContext->get("gui_language","");
            //continue here...
            //Prefs."blah blah" =...
        }
    }
}

void ScribusApp::ShowSubs()
{
	QString mess;
	if (HaveGS != 0)
	{
		mess = tr("The following programs are missing:")+"\n\n";
		if (HaveGS != 0)
			mess += tr("Ghostscript : You cannot use EPS Images")+"\n\n";
		QMessageBox::warning(this, tr("Warning"), mess, 1, 0, 0);
	}

	propertiesPalette->startup();
	outlinePalette->startup();
	scrapbookPalette->startup();
	bookmarkPalette->startup();
	pagePalette->startup();
	layerPalette->startup();
	measurementPalette->startup();
	docCheckerPalette->startup();

	setTools(Prefs.mainToolBarSettings.visible);
	setPDFTools(Prefs.pdfToolBarSettings.visible);
	setActiveWindow();
	raise();
}

PSLib* ScribusApp::getPSDriver(bool psart, SCFonts &AllFonts, QMap<QString,QFont> DocFonts, ColorList DocColors, bool pdf)
{
	const char *error;
	typedef PSLib* (*sdem)(bool psart, SCFonts &AllFonts, QMap<QString,QFont> DocFonts, ColorList DocColors, bool pdf);
	sdem demo;
	QString pfad = QString("%1/libs/libpostscript.%3").arg(ScPaths::instance().libDir()).arg(PluginManager::platformDllExtension());
	PSDriver = dlopen(pfad, RTLD_LAZY);
	if (!PSDriver)
	{
		std::cout << "Cannot find Plugin" << endl;
		return NULL;
	}
	dlerror();
	demo = (sdem)dlsym(PSDriver, "Run");
	if ((error = dlerror()) != NULL)
	{
		std::cout << "Cannot find Symbol" << endl;
		dlclose(PSDriver);
		return NULL;
	}
	PSLib *dia = (*demo)(psart, AllFonts, DocFonts, DocColors, pdf);
	return dia;
}

void ScribusApp::closePSDriver()
{
	dlclose(PSDriver);
}

bool ScribusApp::DoSaveAsEps(QString fn)
{
	bool return_value = true;
	std::vector<int> pageNs;
	pageNs.push_back(doc->currentPage->PageNr+1);
	ReOrderText(doc, view);
	qApp->setOverrideCursor(QCursor(waitCursor), true);
	QMap<QString,QFont> ReallyUsed;
	ReallyUsed.clear();
	GetUsedFonts(&ReallyUsed);
	fileWatcher->forceScan();
	fileWatcher->stop();
	PSLib *dd = getPSDriver(false, Prefs.AvailFonts, ReallyUsed, doc->PageColors, false);
	if (dd != NULL)
	{
		if (dd->PS_set_file(fn))
			dd->CreatePS(doc, view, pageNs, false, tr("All"), true, false, false, true, Prefs.GCRMode, false);
		else
			return_value = false;
		delete dd;
		closePSDriver();
		qApp->setOverrideCursor(QCursor(arrowCursor), true);
	}
	fileWatcher->start();
	return return_value;
}

void ScribusApp::SaveAsEps()
{
	if (doc->checkerProfiles[doc->curCheckProfile].autoCheck)
	{
		scanDocument();
		if ((doc->docItemErrors.count() != 0) || (doc->masterItemErrors.count() != 0))
		{
			if (doc->checkerProfiles[doc->curCheckProfile].ignoreErrors)
			{
				int t = QMessageBox::warning(this, tr("Warning"),
											tr("Detected some Errors.\nConsider using the Preflight Checker to correct them"),
											tr("Abort"), tr("Ignore"), 0, 0, 0);
				if (t == 0)
					return;
			}
			else
			{
				connect(docCheckerPalette, SIGNAL(ignoreAllErrors()), this, SLOT(reallySaveAsEps()));
				docCheckerPalette->noButton = false;
				docCheckerPalette->checkMode = 2;
				docCheckerPalette->buildErrorList(doc);
				docCheckerPalette->show();
				scrActions["toolsPreflightVerifier"]->setOn(true);
				return;
			}
		}
	}
	reallySaveAsEps();
}

void ScribusApp::reallySaveAsEps()
{
	QString fna;
	if (!docCheckerPalette->noButton)
	{
		docCheckerPalette->hide();
		docCheckerPalette->checkMode = 0;
		docCheckerPalette->noButton = true;
		docCheckerPalette->ignoreErrors->hide();
		scrActions["toolsPreflightVerifier"]->setOn(false);
		disconnect(docCheckerPalette, SIGNAL(ignoreAllErrors()), this, SLOT(reallySaveAsEps()));
	}
	if (!doc->DocName.startsWith( tr("Document")))
	{
		QFileInfo fi(doc->DocName);
		fna = fi.dirPath()+"/"+fi.baseName()+".eps";
	}
	else
	{
		QDir di = QDir();
		fna = di.currentDirPath()+"/"+doc->DocName+".eps";
	}
	QString wdir = ".";
	if (Prefs.DocDir != "")
		wdir = dirs->get("eps", Prefs.DocDir);
	else
		wdir = dirs->get("eps", ".");
	QString fn = CFileDialog( wdir, tr("Save as"), tr("EPS Files (*.eps);;All Files (*)"), "", false, false);
	if (!fn.isEmpty())
	{
		dirs->set("eps", fn.left(fn.findRev("/")));
		if (overwrite(this, fn))
		{
			if (!DoSaveAsEps(fn))
				QMessageBox::warning(this, tr("Warning"), tr("Cannot write the file: \n%1").arg(fn), tr("OK"));
		}
	}
}

bool ScribusApp::getPDFDriver(QString fn, QString nam, int Components, std::vector<int> &pageNs, QMap<int,QPixmap> thumbs)
{
	bool ret = false;
	const char *error;
	void *PDFDriver;
	typedef bool (*sdem)(ScribusApp *plug, QString fn, QString nam, int Components, std::vector<int> &pageNs, QMap<int,QPixmap> thumbs, QProgressBar *dia2);
	sdem demo;
	QString pfad = QString("%1/libs/libpdf.%3").arg(ScPaths::instance().libDir()).arg(PluginManager::platformDllExtension());
	PDFDriver = dlopen(pfad, RTLD_NOW);
	if (!PDFDriver)
	{
		std::cout << "Cannot find Plugin" << endl;
		return false;
	}
	dlerror();
	demo = (sdem)dlsym(PDFDriver, "Run");
	if ((error = dlerror()) != NULL)
	{
		std::cout << "Cannot find Symbol" << endl;
		dlclose(PDFDriver);
		return false;
	}
	fileWatcher->forceScan();
	fileWatcher->stop();
	ret = (*demo)(this, fn, nam, Components, pageNs, thumbs, FProg);
	dlclose(PDFDriver);
	fileWatcher->start();
	return ret;
}

void ScribusApp::SaveAsPDF()
{
	if (doc->checkerProfiles[doc->curCheckProfile].autoCheck)
	{
		scanDocument();
		if ((doc->docItemErrors.count() != 0) || (doc->masterItemErrors.count() != 0))
		{
			if (doc->checkerProfiles[doc->curCheckProfile].ignoreErrors)
			{
				int t = QMessageBox::warning(this, tr("Warning"),
											tr("Detected some Errors.\nConsider using the Preflight Verifier to correct them"),
											tr("Abort"), tr("Ignore"), 0, 0, 0);
				if (t == 0)
					return;
			}
			else
			{
				connect(docCheckerPalette, SIGNAL(ignoreAllErrors()), this, SLOT(doSaveAsPDF()));
				docCheckerPalette->noButton = false;
				docCheckerPalette->checkMode = 1;
				docCheckerPalette->buildErrorList(doc);
				docCheckerPalette->show();
				scrActions["toolsPreflightVerifier"]->setOn(true);
				return;
			}
		}
	}
	doSaveAsPDF();
}

void ScribusApp::doSaveAsPDF()
{
	if (!docCheckerPalette->noButton)
	{
		docCheckerPalette->hide();
		docCheckerPalette->checkMode = 0;
		docCheckerPalette->noButton = true;
		docCheckerPalette->ignoreErrors->hide();
		scrActions["toolsPreflightVerifier"]->setOn(false);
		disconnect(docCheckerPalette, SIGNAL(ignoreAllErrors()), this, SLOT(doSaveAsPDF()));
	}
	QString fn;
	int Components = 3;
	QString nam = "";
/*	if (bookmarkPalette->BView->childCount() == 0)
		doc->PDF_Options.Bookmarks = false; */
	QMap<QString,QFont> ReallyUsed;
	ReallyUsed.clear();
	GetUsedFonts(&ReallyUsed);
	if (doc->PDF_Options.EmbedList.count() != 0)
	{
		QValueList<QString> tmpEm;
		QValueList<QString>::Iterator itef;
		for (itef = doc->PDF_Options.EmbedList.begin(); itef != doc->PDF_Options.EmbedList.end(); ++itef)
		{
			if (ReallyUsed.contains((*itef)))
				tmpEm.append((*itef));
		}
		doc->PDF_Options.EmbedList = tmpEm;
	}
	if (doc->PDF_Options.SubsetList.count() != 0)
	{
		QValueList<QString> tmpEm;
		QValueList<QString>::Iterator itef;
		for (itef = doc->PDF_Options.SubsetList.begin(); itef != doc->PDF_Options.SubsetList.end(); ++itef)
		{
			if (ReallyUsed.contains((*itef)))
				tmpEm.append((*itef));
		}
		doc->PDF_Options.SubsetList = tmpEm;
	}
	PDF_Opts *dia = new PDF_Opts(this, doc->DocName, ReallyUsed, view, &doc->PDF_Options, doc->PDF_Options.PresentVals, &PDFXProfiles, Prefs.AvailFonts);
	if (dia->exec())
	{
		std::vector<int> pageNs;
		qApp->setOverrideCursor(QCursor(waitCursor), true);
		fn = dia->Datei->text();
		doc->PDF_Options.Datei = fn;
		doc->PDF_Options.Thumbnails = dia->Options->CheckBox1->isChecked();
		doc->PDF_Options.Compress = dia->Options->Compression->isChecked();
		doc->PDF_Options.CompressMethod = dia->Options->CMethod->currentItem();
		doc->PDF_Options.Quality = dia->Options->CQuality->currentItem();
		doc->PDF_Options.Resolution = dia->Options->Resolution->value();
		doc->PDF_Options.EmbedList = dia->Options->FontsToEmbed;
		doc->PDF_Options.SubsetList = dia->Options->FontsToSubset;
		doc->PDF_Options.RecalcPic = dia->Options->DSColor->isChecked();
		doc->PDF_Options.PicRes = dia->Options->ValC->value();
		doc->PDF_Options.Bookmarks = dia->Options->CheckBM->isChecked();
		doc->PDF_Options.Binding = dia->Options->ComboBind->currentItem();
		doc->PDF_Options.MirrorH = dia->Options->MirrorH->isOn();
		doc->PDF_Options.MirrorV = dia->Options->MirrorV->isOn();
		doc->PDF_Options.RotateDeg = dia->Options->RotateDeg->currentItem() * 90;
		doc->PDF_Options.PresentMode = dia->Options->CheckBox10->isChecked();
		doc->PDF_Options.PresentVals = dia->EffVal;
		doc->PDF_Options.Articles = dia->Options->Article->isChecked();
		doc->PDF_Options.Encrypt = dia->Options->Encry->isChecked();
		doc->PDF_Options.UseLPI = dia->Options->UseLPI->isChecked();
		doc->PDF_Options.useLayers = dia->Options->useLayers->isChecked();
		if (dia->Options->Encry->isChecked())
		{
			int Perm = -64;
			if (dia->Options->PDFVersionCombo->currentItem() == 1)
				Perm &= ~0x00240000;
			if (dia->Options->PrintSec->isChecked())
				Perm += 4;
			if (dia->Options->ModifySec->isChecked())
				Perm += 8;
			if (dia->Options->CopySec->isChecked())
				Perm += 16;
			if (dia->Options->AddSec->isChecked())
				Perm += 32;
			doc->PDF_Options.Permissions = Perm;
			doc->PDF_Options.PassOwner = dia->Options->PassOwner->text();
			doc->PDF_Options.PassUser = dia->Options->PassUser->text();
		}
		if (dia->Options->PDFVersionCombo->currentItem() == 0)
			doc->PDF_Options.Version = PDFOptions::PDFVersion_13;
		if (dia->Options->PDFVersionCombo->currentItem() == 1)
			doc->PDF_Options.Version = PDFOptions::PDFVersion_14;
		if (dia->Options->PDFVersionCombo->currentItem() == 2)
			doc->PDF_Options.Version = PDFOptions::PDFVersion_15;
		if (dia->Options->PDFVersionCombo->currentItem() == 3)
			doc->PDF_Options.Version = PDFOptions::PDFVersion_X3;
		if (dia->Options->OutCombo->currentItem() == 0)
		{
			doc->PDF_Options.UseRGB = true;
			doc->PDF_Options.isGrayscale = false;
			doc->PDF_Options.UseProfiles = false;
			doc->PDF_Options.UseProfiles2 = false;
		}
		else
		{
			if (dia->Options->OutCombo->currentItem() == 2)
			{
				doc->PDF_Options.isGrayscale = true;
				doc->PDF_Options.UseRGB = false;
				doc->PDF_Options.UseProfiles = false;
				doc->PDF_Options.UseProfiles2 = false;
			}
			else
			{
				doc->PDF_Options.isGrayscale = false;
				doc->PDF_Options.UseRGB = false;
#ifdef HAVE_CMS
				if (CMSuse)
				{
					doc->PDF_Options.UseProfiles = dia->Options->EmbedProfs->isChecked();
					doc->PDF_Options.UseProfiles2 = dia->Options->EmbedProfs2->isChecked();
					doc->PDF_Options.Intent = dia->Options->IntendS->currentItem();
					doc->PDF_Options.Intent2 = dia->Options->IntendI->currentItem();
					doc->PDF_Options.EmbeddedI = dia->Options->NoEmbedded->isChecked();
					doc->PDF_Options.SolidProf = dia->Options->SolidPr->currentText();
					doc->PDF_Options.ImageProf = dia->Options->ImageP->currentText();
					doc->PDF_Options.PrintProf = dia->Options->PrintProfC->currentText();
					if (doc->PDF_Options.Version == PDFOptions::PDFVersion_X3)
					{
						const char *Descriptor;
						cmsHPROFILE hIn;
						hIn = cmsOpenProfileFromFile(PrinterProfiles[doc->PDF_Options.PrintProf], "r");
						Descriptor = cmsTakeProductDesc(hIn);
						nam = QString(Descriptor);
						if (static_cast<int>(cmsGetColorSpace(hIn)) == icSigRgbData)
							Components = 3;
						if (static_cast<int>(cmsGetColorSpace(hIn)) == icSigCmykData)
							Components = 4;
						if (static_cast<int>(cmsGetColorSpace(hIn)) == icSigCmyData)
							Components = 3;
						cmsCloseProfile(hIn);
						doc->PDF_Options.Info = dia->Options->InfoString->text();
						doc->PDF_Options.BleedTop = dia->Options->BleedTop->value()/doc->unitRatio;
						doc->PDF_Options.BleedLeft = dia->Options->BleedLeft->value()/doc->unitRatio;
						doc->PDF_Options.BleedRight = dia->Options->BleedRight->value()/doc->unitRatio;
						doc->PDF_Options.BleedBottom = dia->Options->BleedBottom->value()/doc->unitRatio;
						doc->PDF_Options.Encrypt = false;
						doc->PDF_Options.MirrorH = false;
						doc->PDF_Options.MirrorV = false;
						doc->PDF_Options.RotateDeg = 0;
						doc->PDF_Options.PresentMode = false;
						doc->PDF_Options.Encrypt = false;
					}
				}
				else
				{
					doc->PDF_Options.UseProfiles = false;
					doc->PDF_Options.UseProfiles2 = false;
				}
#else
				doc->PDF_Options.UseProfiles = false;
				doc->PDF_Options.UseProfiles2 = false;
#endif
			}
		}
		if (dia->Options->AllPages->isChecked())
			parsePagesString("*", &pageNs, doc->PageC);
		else
			parsePagesString(dia->Options->PageNr->text(), &pageNs, doc->PageC);
		QMap<int,QPixmap> thumbs;
		for (uint ap = 0; ap < pageNs.size(); ++ap)
		{
			QPixmap pm(10,10);
			if (doc->PDF_Options.Thumbnails)
				pm.convertFromImage(view->PageToPixmap(pageNs[ap]-1, 100));
			thumbs.insert(pageNs[ap], pm);
		}
		ReOrderText(doc, view);
		if (!getPDFDriver(fn, nam, Components, pageNs, thumbs))
			QMessageBox::warning(this, tr("Warning"), tr("Cannot write the File: \n%1").arg(fn), tr("OK"));
		qApp->setOverrideCursor(QCursor(arrowCursor), true);
	}
	delete dia;
}

void ScribusApp::AddBookMark(PageItem *ite)
{
	bookmarkPalette->BView->AddPageItem(ite);
	StoreBookmarks();
}

void ScribusApp::DelBookMark(PageItem *ite)
{
	bookmarkPalette->BView->DeleteItem(ite->BMnr);
	StoreBookmarks();
}

void ScribusApp::BookMarkTxT(PageItem *ite)
{
	bookmarkPalette->BView->ChangeText(ite);
	StoreBookmarks();
}

void ScribusApp::ChBookmarks(int /*s*/, int /*e*/, int /*n*/)
{
//	view->Pages.at(s)->Items.at(e)->BMnr = n;
}

void ScribusApp::RestoreBookMarks()
{
	QValueList<ScribusDoc::BookMa>::Iterator it2 = doc->BookMarks.begin();
	bookmarkPalette->BView->clear();
	if (doc->BookMarks.count() == 0)
		return;
	BookMItem* ip;
	BookMItem* ip2 = NULL;
	BookMItem* ip3 = NULL;
	BookMItem *ite = new BookMItem(bookmarkPalette->BView, &(*it2));
	++it2;
	for( ; it2 != doc->BookMarks.end(); ++it2 )
	{
		if ((*it2).Parent == 0)
			ite = new BookMItem(bookmarkPalette->BView, ite, &(*it2));
		else
		{
			QListViewItemIterator it3(bookmarkPalette->BView);
			for ( ; it3.current(); ++it3)
			{
				ip = (BookMItem*)it3.current();
				if ((*it2).Parent == ip->ItemNr)
				{
					ip2 = ip;
					break;
				}
			}
			if ((*it2).Prev == 0)
				(void) new BookMItem(ip2, &(*it2));
			else
			{
				QListViewItemIterator it4(bookmarkPalette->BView);
				for ( ; it4.current(); ++it4)
				{
					ip = (BookMItem*)it4.current();
					if ((*it2).Prev == ip->ItemNr)
					{
						ip3 = ip;
						break;
					}
				}
				(void) new BookMItem(ip2, ip3, &(*it2));
			}
		}
	}
}

void ScribusApp::StoreBookmarks()
{
	doc->BookMarks.clear();
	BookMItem* ip;
	QListViewItemIterator it(bookmarkPalette->BView);
	struct ScribusDoc::BookMa Boma;
	for ( ; it.current(); ++it)
	{
		ip = (BookMItem*)it.current();
		Boma.Title = ip->Titel;
		Boma.Text = ip->text(0);
		Boma.Aktion = ip->Action;
		Boma.ItemNr = ip->ItemNr;
		Boma.Seite = ip->Seite;
		Boma.Element = ip->Element;
		Boma.Parent = ip->Pare;
		Boma.First = ip->First;
		Boma.Prev = ip->Prev;
		Boma.Next = ip->Next;
		Boma.Last = ip->Last;
		doc->BookMarks.append(Boma);
	}
	doc->NrItems = bookmarkPalette->BView->NrItems;
	doc->First = bookmarkPalette->BView->First;
	doc->Last = bookmarkPalette->BView->Last;
}

void ScribusApp::slotElemRead(QString Name, int x, int y, bool art, bool loca, ScribusDoc* docc, ScribusView* vie)
{
	if (doc == docc)
		NoFrameEdit();
	ScriXmlDoc *ss = new ScriXmlDoc();
	if(ss->ReadElem(Name, Prefs.AvailFonts, docc, x, y, art, loca, Prefs.GFontSub, &Prefs, vie))
	{
		vie->DrawNew();
		if (doc == docc)
		{
			doc->OpenNodes = outlinePalette->buildReopenVals();
			buildFontMenu();
			propertiesPalette->Cpal->SetColors(docc->PageColors);
			propertiesPalette->updateCList();
			propertiesPalette->Spal->updateFormatList();
			propertiesPalette->SetLineFormats(docc);
			outlinePalette->BuildTree(doc);
			outlinePalette->reopenTree(doc->OpenNodes);
			slotDocCh();
		}
	}
	delete ss;
}

void ScribusApp::slotChangeUnit(int art, bool draw)
{
	doc->docUnitIndex = art;
	doc->unitRatio = unitGetRatioFromIndex( doc->docUnitIndex );
	view->UN->setText( unitGetStrFromIndex( doc->docUnitIndex) );
	propertiesPalette->UnitChange();
	if (draw)
		view->DrawNew();
}

void ScribusApp::ManageJava()
{
	JavaDocs *dia = new JavaDocs(this, doc, view);
	connect(dia, SIGNAL(docChanged(bool)), this, SLOT(slotDocCh(bool )));
	dia->exec();
	disconnect(dia, SIGNAL(docChanged(bool)), this, SLOT(slotDocCh(bool )));
	delete dia;
}

void ScribusApp::ManageTemp(QString temp)
{
	if (HaveDoc)
	{
		view->Deselect(true);
		if (doc->TemplateMode)
		{
			ActWin->muster->updateTemplateList(temp);
			ActWin->muster->selectTemplate(temp);
		}
		else
		{
			doc->TemplateMode = true;
			MusterPages *dia = new MusterPages(this, doc, view, temp);
			connect(dia, SIGNAL(createNew(int)), this, SLOT(slotNewPageT(int)));
			connect(dia, SIGNAL(loadPage(QString, int, bool)), this, SLOT(LadeSeite(QString, int, bool)));
			connect(dia, SIGNAL(finished()), this, SLOT(ManTempEnd()));
			connect(dia, SIGNAL(updateTree(ScribusDoc* )), outlinePalette, SLOT(BuildTree(ScribusDoc* )));
			scrActions["pageInsert"]->setEnabled(false);
			scrActions["pageDelete"]->setEnabled(false);
			scrActions["pageCopy"]->setEnabled(false);
			scrActions["pageMove"]->setEnabled(false);
			scrActions["pageApplyTemplate"]->setEnabled(false);
			scrActions["editTemplates"]->setEnabled(false);
			ActWin->MenuStat[0] = scrActions["fileSave"]->isEnabled();
			ActWin->MenuStat[1] = scrActions["fileRevert"]->isEnabled();
			ActWin->MenuStat[2] = scrActions["fileSave"]->isEnabled();
			ActWin->MenuStat[3] = scrActions["fileSaveAs"]->isEnabled();
			scrActions["fileNew"]->setEnabled(false);
			scrActions["fileOpen"]->setEnabled(false);
			scrActions["fileClose"]->setEnabled(false);
			scrMenuMgr->setMenuEnabled("FileOpenRecent", false);
			scrActions["fileRevert"]->setEnabled(false);
			scrActions["fileDocSetup"]->setEnabled(false);
			scrActions["filePrint"]->setEnabled(false);
			pagePalette->DisablePal();
			dia->show();
			ActWin->muster = dia;
			doc->OpenNodes = outlinePalette->buildReopenVals();
		}
	}
}

void ScribusApp::ManTempEnd()
{
	view->HideTemplate();
	scrActions["editTemplates"]->setEnabled(true);
	scrActions["fileNew"]->setEnabled(true);
	scrActions["fileOpen"]->setEnabled(true);
	scrActions["fileClose"]->setEnabled(true);
	scrActions["fileSave"]->setEnabled(doc->isModified());
	scrMenuMgr->setMenuEnabled("FileOpenRecent", true);
	scrActions["fileRevert"]->setEnabled(true);
	scrActions["fileDocSetup"]->setEnabled(true);
	scrActions["filePrint"]->setEnabled(true);

	scrActions["pageInsert"]->setEnabled(true);
	scrActions["pageCopy"]->setEnabled(true);
	scrActions["pageApplyTemplate"]->setEnabled(true);
	bool setter = doc->Pages.count() > 1 ? true : false;
	scrActions["pageDelete"]->setEnabled(setter);
	scrActions["pageMove"]->setEnabled(setter);
	for (uint c=0; c<doc->Pages.count(); ++c)
	{
		Apply_Temp(doc->Pages.at(c)->MPageNam, c, false);
	}
	doc->TemplateMode = false;
	pagePalette->EnablePal();
	pagePalette->RebuildTemp();
	ActWin->muster = NULL;
	view->DrawNew();
	pagePalette->Rebuild();
	outlinePalette->BuildTree(doc);
//	outlinePalette->reopenTree(doc->OpenNodes);
//	slotDocCh();
}
/*!
 * @brief Apply template pages from the Apply Template dialog 
 * @todo Make this work with real page numbers, negative numbers and document sections when they are implemented
 */
void ScribusApp::ApplyTemp()
{
	
	ApplyTemplate *dia = new ApplyTemplate(this);
	dia->setup(doc, doc->currentPage->MPageNam);
	if (dia->exec())
	{
		QString templateName = dia->getTemplateName();
		int pageSelection = dia->getPageSelection(); //0=current, 1=even, 2=odd, 3=all
		if (pageSelection==0) //current page only
			Apply_Temp(templateName, doc->currentPage->PageNr, false);
		else
		{
			int startPage, endPage;
			if (dia->usingRange())
			{
				startPage=dia->getFromPage()-1; //Pages start from 0, not 1
				endPage=dia->getToPage();
			}
			else
			{
				startPage = pageSelection==1 ? 1 : 0; //if even, startPage is 1 (real page 2)
				endPage=doc->PageC;
			}
				
			for (int pageNum = startPage; pageNum < endPage; ++pageNum)// +=pageStep)
			{
				//Increment by 1 and not 2 even for even/odd application as user
				//can select to eg apply to even pages with a single odd page selected
				if (pageSelection==1 && pageNum%2!=0) //Even, %2!=0 as 1st page is numbered 0
					Apply_Temp(templateName, pageNum, false);
				else
				if (pageSelection==2 && pageNum%2==0) //Odd, %2==0 as 1st page is numbered 0
					Apply_Temp(templateName, pageNum, false);
				else
				if (pageSelection==3) //All
					Apply_Temp(templateName, pageNum, false);
			}
		}
	}
	view->DrawNew();
	slotDocCh();
	pagePalette->Rebuild();
	delete dia;
}

void ScribusApp::Apply_Temp(QString in, int Snr, bool reb)
{
	if (UndoManager::undoEnabled())
	{
		if (doc->Pages.at(Snr)->MPageNam != in)
		{
		SimpleState *ss = new SimpleState(Um::ApplyTemplate,
						QString(Um::FromTo).arg(doc->Pages.at(Snr)->MPageNam).arg(in));
			ss->set("PAGE_NUMBER", Snr);
			ss->set("OLD_TEMPLATE", doc->Pages.at(Snr)->MPageNam);
			ss->set("NEW_TEMPLATE", in);
			undoManager->action(doc->Pages.at(Snr), ss);
		}
	}
	PageItem *currItem;
	QString mna = in;
	if (mna == tr("Normal"))
		mna = "Normal";
	if (!doc->MasterNames.contains(mna))
		mna = "Normal";
	Page* Ap = doc->Pages.at(Snr);
	Ap->MPageNam = mna;
	int MpNr = doc->MasterNames[mna];
	Page* Mp = doc->MasterPages.at(MpNr);
	for (currItem = Ap->FromMaster.first(); currItem; currItem = Ap->FromMaster.next())
	{
		if (currItem->ChangedMasterItem)
		{
			Ap->FromMaster.remove(currItem);
			delete currItem;
		}
	}
	Ap->FromMaster.clear();
	for (currItem = doc->MasterItems.first(); currItem; currItem = doc->MasterItems.next())
	{
		if (currItem->OwnPage == MpNr)
			Ap->FromMaster.append(currItem);
	}
	if (Mp->YGuides.count() != 0)
	{
		for (uint y = 0; y < Mp->YGuides.count(); ++y)
		{
			if (Ap->YGuides.contains(Mp->YGuides[y]) == 0)
				Ap->YGuides.append(Mp->YGuides[y]);
		}
		qHeapSort(Ap->YGuides);
	}
	if (Mp->XGuides.count() != 0)
	{
		for (uint x = 0; x < Mp->XGuides.count(); ++x)
		{
			if (Ap->XGuides.contains(Mp->XGuides[x]) == 0)
				Ap->XGuides.append(Mp->XGuides[x]);
		}
		qHeapSort(Ap->XGuides);
	}
	if (reb)
	{
		view->DrawNew();
		slotDocCh();
		pagePalette->Rebuild();
	}
}

void ScribusApp::GroupObj(bool showLockDia)
{
	if (HaveDoc)
	{
		PageItem *currItem;
		PageItem* bb;
		double x, y, w, h;
		int t = -1; // show locked dialog only once
		QString tooltip = Um::ItemsInvolved + "\n";
		if (showLockDia)
		{
			for (uint a=0; a<view->SelItem.count(); ++a)
			{
				if (t == -1 && view->SelItem.at(a)->locked())
					t = QMessageBox::warning(this, tr("Warning"),
											 tr("Some Objects are locked."),
											 tr("&Cancel"),
											 tr("&Lock All"),
											 tr("&Unlock All"), 0, 0);
				if (t != -1)
					break; // already have an answer free to leave the loop
			}
			if (t == 0)
				return; // user chose cancel -> do not group but return

			for (uint a=0; a<view->SelItem.count(); ++a)
			{
				currItem = view->SelItem.at(a);
				if (currItem->locked())
				{
					for (uint c=0; c<view->SelItem.count(); ++c)
					{
						bb = view->SelItem.at(c);
						bool t1=(t==1);
						bb->setLocked(t1);
						scrActions["itemLock"]->setOn(t1);
						tooltip += "\t" + currItem->getUName() + "\n";
					}
				}
			}
		}

		SimpleState *ss = new SimpleState(Um::Group, tooltip);
		ss->set("GROUP", "group");
		ss->set("itemcount", view->SelItem.count());


		for (uint a=0; a<view->SelItem.count(); ++a)
		{
			currItem = view->SelItem.at(a);
			currItem->Groups.push(doc->GroupCounter);
			ss->set(QString("item%1").arg(a), currItem->ItemNr);

		}
		doc->GroupCounter++;
		view->getGroupRect(&x, &y, &w, &h);
		view->updateContents(QRect(static_cast<int>(x-5), static_cast<int>(y-5), static_cast<int>(w+10), static_cast<int>(h+10)));
		outlinePalette->BuildTree(doc);
		slotDocCh();
		scrActions["itemAttachTextToPath"]->setEnabled(false);
		scrActions["itemGroup"]->setEnabled(false);
		scrActions["itemUngroup"]->setEnabled(true);
		undoManager->action(this, ss, Um::SelectionGroup, Um::IGroup);
	}
}

void ScribusApp::UnGroupObj()
{
	if (HaveDoc)
	{
		SimpleState *ss = new SimpleState(Um::Ungroup);
		ss->set("UNGROUP", "ungroup");
		ss->set("itemcount", view->SelItem.count());
		QString tooltip = Um::ItemsInvolved + "\n";
		PageItem *currItem;
		for (uint a=0; a<view->SelItem.count(); ++a)
		{
			currItem = view->SelItem.at(a);
			currItem->Groups.pop();
			currItem->isTableItem = false;
			currItem->LeftLink = 0;
			currItem->RightLink = 0;
			currItem->TopLink = 0;
			currItem->BottomLink = 0;
			ss->set(QString("item%1").arg(a), currItem->ItemNr);
			tooltip += "\t" + currItem->getUName() + "\n";
		}
		outlinePalette->BuildTree(doc);
		slotDocCh();
		view->Deselect(true);

		undoManager->action(this, ss, Um::SelectionGroup, Um::IGroup);
	}
}

void ScribusApp::restore(UndoState* state, bool isUndo)
{
	SimpleState *ss = dynamic_cast<SimpleState*>(state);
	if (ss)
	{
		if (ss->contains("GROUP"))
			restoreGroupping(ss, isUndo);
		else if (ss->contains("UNGROUP"))
			restoreUngroupping(ss, isUndo);
		else if (ss->contains("ADD_PAGE"))
			restoreAddPage(ss, isUndo);
		else if (ss->contains("DELETE_PAGE"))
			restoreDeletePage(ss, isUndo);
	}
}

void ScribusApp::restoreDeletePage(SimpleState *state, bool isUndo)
{
	uint pagenr   = state->getUInt("PAGENR");
	QString tmpl = state->get("TEMPLATE");
	int where, wo;
	if (pagenr == 1)
	{
		where = 0;
		wo = 1;
	}
	else if (pagenr > doc->Pages.count())
	{
		where = 2;
		wo = doc->Pages.count();
	}
	else
	{
		where = 1;
		wo = pagenr - 1;
	}
	if (isUndo)
	{
		addNewPages(wo, where, 1, tmpl, tmpl);
		UndoObject *tmp = 
			undoManager->replaceObject(state->getUInt("DUMMY_ID"), doc->Pages.at(pagenr - 1));
		delete tmp;
	}
	else
	{
		DummyUndoObject *duo = new DummyUndoObject();
		uint id = static_cast<uint>(duo->getUId());
		undoManager->replaceObject(doc->Pages.at(pagenr - 1)->getUId(), duo);
		state->set("DUMMY_ID", id);
		DeletePage(pagenr, pagenr);
	}
}

void ScribusApp::restoreAddPage(SimpleState *state, bool isUndo)
{
	int wo         = state->getInt("PAGE");
	int where      = state->getInt("WHERE");
	int count      = state->getInt("COUNT");
	QString based1 = state->get("BASED1");
	QString based2 = state->get("BASED2");

	int delFrom, delTo;
	switch (where)
	{
		case 0:
			delTo = wo + count - 1;
			delFrom = delTo - count + 1;
			break;
		case 1:
			delFrom = wo + 1;
			delTo = wo + count;
			break;
		case 2:
			delTo = doc->Pages.count();
			delFrom = doc->Pages.count() - count + 1;
			if (!isUndo)
			{
				delFrom += count;
				delTo   += count;
			}
			break;
	}
	if (isUndo)
	{
		for (int i = delFrom - 1; i < delTo; ++i)
		{
			DummyUndoObject *duo = new DummyUndoObject();
			ulong did = duo->getUId();
			undoManager->replaceObject(doc->Pages.at(i)->getUId(), duo);
			state->set(QString("Page%1").arg(i), static_cast<uint>(did));
		}
		NoFrameEdit();
		view->Deselect(true);
		DeletePage(delFrom, delTo);
	}
	else
	{
		addNewPages(wo, where, count, based1, based2);
		for (int i = delFrom - 1; i < delTo; ++i)
		{
			UndoObject *tmp = undoManager->replaceObject(
					state->getUInt(QString("Page%1").arg(i)), doc->Pages.at(i));
			delete tmp;
		}
	}
}

void ScribusApp::restoreGroupping(SimpleState *state, bool isUndo)
{
	int itemCount = state->getInt("itemcount");
	view->Deselect();
	for (int i = 0; i < itemCount; ++i)
	{
		int itemNr = state->getInt(QString("item%1").arg(i));
		view->SelectItemNr(itemNr);
	}
	if (isUndo)
		UnGroupObj();
	else
		GroupObj(false);
}

void ScribusApp::restoreUngroupping(SimpleState *state, bool isUndo)
{
	int itemCount = state->getInt("itemcount");
	view->Deselect();
	for (int i = 0; i < itemCount; ++i)
	{
		int itemNr = state->getInt(QString("item%1").arg(i));
		view->SelectItemNr(itemNr);
	}
	if (isUndo)
		GroupObj(false);
	else
		UnGroupObj();
}

void ScribusApp::StatusPic()
{
	if (HaveDoc)
	{
		PicStatus *dia = new PicStatus(this, doc, view);
		connect(dia, SIGNAL(selectPage(int)), this, SLOT(SelectFromOutlS(int)));
		connect(dia, SIGNAL(selectTemplatePage(QString)), this, SLOT(ManageTemp(QString)));
		dia->exec();
		delete dia;
	}
}

QString ScribusApp::CFileDialog(QString wDir, QString caption, QString filter, QString defNa,
                                bool Pre, bool mod, bool comp, bool cod, bool onlyDirs,
                                bool *docom, bool *doFont)
{
	QString retval = "";
	CustomFDialog *dia = new CustomFDialog(this, wDir, caption, filter, Pre, mod, comp, cod, onlyDirs);
	if (defNa != "")
		dia->setSelection(defNa);
	if (onlyDirs)
	{
		dia->SaveZip->setChecked(*docom);
		dia->WFonts->setChecked(*doFont);
	}
	if (dia->exec() == QDialog::Accepted)
	{
		LoadEnc = "";
		if (!onlyDirs)
			LoadEnc = cod ? dia->TxCodeM->currentText() : QString("");
		else
		{
			*docom = dia->SaveZip->isChecked();
			*doFont = dia->WFonts->isChecked();
		}
		this->repaint();
		qApp->eventLoop()->processEvents(QEventLoop::ExcludeUserInput);
		retval = dia->selectedFile();
	}
	delete dia;
	return retval;
}

void ScribusApp::GetCMSProfiles()
{
	MonitorProfiles.clear();
	PrinterProfiles.clear();
	InputProfiles.clear();
	QString pfad = ScPaths::instance().libDir();
	pfad += "profiles/";
	GetCMSProfilesDir(pfad);
	if (Prefs.ProfileDir != "")
	{
		if(Prefs.ProfileDir.right(1) != "/")
			Prefs.ProfileDir += "/";
		GetCMSProfilesDir(Prefs.ProfileDir);
	}
	if ((!PrinterProfiles.isEmpty()) && (!InputProfiles.isEmpty()) && (!MonitorProfiles.isEmpty()))
		CMSavail = true;
	else
		CMSavail = false;
}

void ScribusApp::initCMS()
{
	if (CMSavail)
	{
		ProfilesL::Iterator ip;
		if ((Prefs.DCMSset.DefaultInputProfile == "") || (!InputProfiles.contains(Prefs.DCMSset.DefaultInputProfile)))
		{
			ip = InputProfiles.begin();
			Prefs.DCMSset.DefaultInputProfile = ip.key();
		}
		if ((Prefs.DCMSset.DefaultInputProfile2 == "") || (!InputProfiles.contains(Prefs.DCMSset.DefaultInputProfile2)))
		{
			ip = InputProfiles.begin();
			Prefs.DCMSset.DefaultInputProfile2 = ip.key();
		}
		if ((Prefs.DCMSset.DefaultMonitorProfile == "") || (!MonitorProfiles.contains(Prefs.DCMSset.DefaultMonitorProfile)))
		{
			ip = MonitorProfiles.begin();
			Prefs.DCMSset.DefaultMonitorProfile = ip.key();
		}
		if ((Prefs.DCMSset.DefaultPrinterProfile == "") || (!PrinterProfiles.contains(Prefs.DCMSset.DefaultPrinterProfile)))
		{
			ip = PrinterProfiles.begin();
			Prefs.DCMSset.DefaultPrinterProfile = ip.key();
		}
#ifdef HAVE_CMS
		SoftProofing = Prefs.DCMSset.SoftProofOn;
		CMSuse = false;
		IntentPrinter = Prefs.DCMSset.DefaultIntentPrinter;
		IntentMonitor = Prefs.DCMSset.DefaultIntentMonitor;
#endif
	}
}

void ScribusApp::GetCMSProfilesDir(QString pfad)
{
#ifdef HAVE_CMS
	QDir d(pfad, "*.*", QDir::Name, QDir::Files | QDir::NoSymLinks);
	if ((d.exists()) && (d.count() != 0))
	{
		QString nam = "";
		const char *Descriptor;
		cmsHPROFILE hIn;

		for (uint dc = 0; dc < d.count(); ++dc)
		{
			QFileInfo fi(pfad + d[dc]);
			QString ext = fi.extension(false).lower();
			if ((ext == "icm") || (ext == "icc"))
			{
				hIn = cmsOpenProfileFromFile(pfad + d[dc], "r");
				if (hIn == NULL)
					continue;
				Descriptor = cmsTakeProductDesc(hIn);
				nam = QString(Descriptor);
				switch (static_cast<int>(cmsGetDeviceClass(hIn)))
				{
				case icSigInputClass:
					if (static_cast<int>(cmsGetColorSpace(hIn)) == icSigRgbData)
						InputProfiles[nam] = pfad + d[dc];
					break;
				case icSigColorSpaceClass:
					if (static_cast<int>(cmsGetColorSpace(hIn)) == icSigRgbData)
						InputProfiles[nam] = pfad + d[dc];
					break;
				case icSigDisplayClass:
					if (static_cast<int>(cmsGetColorSpace(hIn)) == icSigRgbData)
					{
						MonitorProfiles[nam] = pfad + d[dc];
						InputProfiles[nam] = pfad + d[dc];
					}
					break;
				case icSigOutputClass:
					PrinterProfiles[nam] = pfad + d[dc];
					if (static_cast<int>(cmsGetColorSpace(hIn)) == icSigCmykData)
						PDFXProfiles[nam] = pfad + d[dc];
					break;
				}
				cmsCloseProfile(hIn);
			}
		}
	}
#endif
}

void ScribusApp::RecalcColors(QProgressBar *dia)
{
	if (HaveDoc)
	{
		if (doc->TemplateMode)
			doc->MasterPages = doc->Pages;
		else
			doc->DocPages = doc->Pages;
		ColorMenC->clear();
		QPixmap pm = QPixmap(15, 15);
		int a = 0;
		ColorMenC->insertItem( tr("None"));
		CMYKColor tmp;
//		tmp.fromQColor(doc->papColor);
//		tmp.RecalcRGB();
//		doc->papColor = tmp.getRGBColor();
		for (ColorList::Iterator it = doc->PageColors.begin(); it != doc->PageColors.end(); ++it)
		{
			doc->PageColors[it.key()].RecalcRGB();
			pm.fill(doc->PageColors[it.key()].getRGBColor());
			ColorMenC->insertItem(pm, it.key());
			if (it.key() == doc->toolSettings.dBrush)
				ColorMenC->setCurrentItem(a);
			a++;
			if (dia != NULL)
				dia->setProgress(a);
		}
		for (uint c=0; c<doc->Items.count(); ++c)
		{
			PageItem *ite = doc->Items.at(c);
			QPtrVector<VColorStop> cstops = ite->fill_gradient.colorStops();
			for (uint cst = 0; cst < ite->fill_gradient.Stops(); ++cst)
			{
				QColor tmpc = doc->PageColors[cstops.at(cst)->name].getRGBColor();
				ite->SetFarbe(&tmpc, cstops.at(cst)->name, cstops.at(cst)->shade);
				cstops.at(cst)->color = tmpc;
			}
		}
		for (uint c=0; c<doc->MasterItems.count(); ++c)
		{
			PageItem *ite = doc->MasterItems.at(c);
			QPtrVector<VColorStop> cstops = ite->fill_gradient.colorStops();
			for (uint cst = 0; cst < ite->fill_gradient.Stops(); ++cst)
			{
				QColor tmpc = doc->PageColors[cstops.at(cst)->name].getRGBColor();
				ite->SetFarbe(&tmpc, cstops.at(cst)->name, cstops.at(cst)->shade);
				cstops.at(cst)->color = tmpc;
			}
		}
		propertiesPalette->Cpal->SetColors(doc->PageColors);
		propertiesPalette->updateCList();
	}
}

void ScribusApp::ModifyAnnot()
{
	if (view->SelItem.count() != 0)
	{
		PageItem *currItem = view->SelItem.at(0);
		if ((currItem->AnType == 0) || (currItem->AnType == 1) || (currItem->AnType > 9))
		{
			int AnType = currItem->AnType;
			int AnActType = currItem->AnActType;
			QString AnAction = currItem->AnAction;
			QString An_Extern = currItem->An_Extern;
			Annota *dia = new Annota(this, currItem, doc->PageC, static_cast<int>(doc->PageB), static_cast<int>(doc->PageH), view);
			if (dia->exec())
				slotDocCh();
			else
			{
				currItem->AnType = AnType;
				currItem->AnActType = AnActType;
				currItem->AnAction = AnAction;
				currItem->An_Extern = An_Extern;
			}
			delete dia;
		}
		else
		{
			Annot *dia = new Annot(this, currItem, doc->PageC, static_cast<int>(doc->PageB), static_cast<int>(doc->PageH), doc->PageColors, view);
			if (dia->exec())
				slotDocCh();
			delete dia;
		}
	}
}

void ScribusApp::SetShortCut()
{
	for (QMap<QString,Keys>::Iterator it = Prefs.KeyActions.begin(); it != Prefs.KeyActions.end(); ++it )
	{
		if (it.data().actionName!="")
			if (scrActions[it.data().actionName])
				scrActions[it.data().actionName]->setAccel(it.data().keySequence);
	}
}

void ScribusApp::PutScrap()
{
	ScriXmlDoc *ss = new ScriXmlDoc();
	QString objectString = ss->WriteElem(&(view->SelItem), doc, view);
	scrapbookPalette->ObjFromMenu(objectString);
	delete ss;
}

void ScribusApp::UniteOb()
{
	view->UniteObj();
}

void ScribusApp::SplitUniteOb()
{
	view->SplitObj();
}

void ScribusApp::convertToBezierCurve()
{
	view->ToBezierFrame();
}

void ScribusApp::convertToImageFrame()
{
	view->ToPicFrame();
}

void ScribusApp::convertToOutlines()
{
	NoFrameEdit();
	view->TextToPath();
}

void ScribusApp::convertToPolygon()
{
	view->ToPolyFrame();
}

void ScribusApp::convertToTextFrame()
{
	view->ToTextFrame();
}

void ScribusApp::Pfadtext()
{
	view->ToPathText();
}

void ScribusApp::noPfadtext()
{
	view->FromPathText();
}

void ScribusApp::changeLayer(int l)
{
	view->Deselect(true);
	view->setLayMenTxt(l);
	view->LaMenu();
	view->DrawNew();
}

void ScribusApp::showLayer()
{
	view->DrawNew();
}

void ScribusApp::LayerRemove(int l, bool dl)
{
	if (doc->TemplateMode)
		doc->MasterPages = doc->Pages;
	else
		doc->DocPages = doc->Pages;
	view->Deselect();
	for (uint b = 0; b < doc->MasterItems.count(); ++b)
	{
		if (doc->MasterItems.at(b)->LayerNr == l)
		{
			if (dl)
			{
				view->SelItem.append(doc->MasterItems.at(b));
				doc->DocItems.at(b)->setLocked(false);
			}
			else
				doc->MasterItems.at(b)->setLayer(0);
		}
	}
	if (view->SelItem.count() != 0)
		view->DeleteItem();
	view->SelItem.clear();
	for (uint b = 0; b < doc->DocItems.count(); ++b)
	{
		if (doc->DocItems.at(b)->LayerNr == l)
		{
			if (dl)
			{
				view->SelItem.append(doc->DocItems.at(b));
				doc->DocItems.at(b)->setLocked(false);
			}
			else
				doc->DocItems.at(b)->setLayer(0);
		}
	}
	if (view->SelItem.count() != 0)
		view->DeleteItem();
	view->LaMenu();
}

void ScribusApp::UnDoAction()
{
	undoManager->undo(1);
}

void ScribusApp::RedoAction()
{
	undoManager->redo(1);
}

void ScribusApp::initHyphenator()
{
	QString pfad = ScPaths::instance().libDir();
	QStringList L_Afrikaans;
	QStringList L_Bulgarian;
	QStringList L_Catalan;
	QStringList L_Croatian;
	QStringList L_Czech;
	QStringList L_Danish;
	QStringList L_Dutch;
	QStringList L_English;
	QStringList L_Finnish;
	QStringList L_French;
	QStringList L_German;
	QStringList L_Greek;
	QStringList L_Hungarian;
	QStringList L_Irish;
	QStringList L_Italian;
	QStringList L_Lithuanian;
	QStringList L_Polish;
	QStringList L_Portuguese;
	QStringList L_Portuguese_BR;
	QStringList L_Russian;
	QStringList L_Slovak;
	QStringList L_Slovenian;
	QStringList L_Spanish;
	QStringList L_Swedish;
	QStringList L_Ukrainian;
	L_Afrikaans.clear();
	L_Bulgarian.clear();
	L_Catalan.clear();
	L_Croatian.clear();
	L_Czech.clear();
	L_Danish.clear();
	L_Dutch.clear();
	L_English.clear();
	L_Finnish.clear();
	L_French.clear();
	L_German.clear();
	L_Greek.clear();
	L_Hungarian.clear();
	L_Irish.clear();
	L_Italian.clear();
	L_Lithuanian.clear();
	L_Polish.clear();
	L_Portuguese.clear();
	L_Portuguese_BR.clear();
	L_Russian.clear();
	L_Slovak.clear();
	L_Slovenian.clear();
	L_Spanish.clear();
	L_Swedish.clear();
	L_Ukrainian.clear();
	QDir d2(pfad, "*.*", QDir::Name, QDir::Files | QDir::NoSymLinks);
	if ((d2.exists()) && (d2.count() != 0))
	{
		for (uint dc = 0; dc < d2.count(); dc++)
		{
			QFileInfo fi(pfad + d2[dc]);
			QString ext = fi.extension(false).lower();
			QString ext2 = fi.extension(true).lower();
			if (ext == "qm")
			{
    			QTranslator *trans = new QTranslator(0);
				trans->load(pfad + d2[dc]);
				QString translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Croatian", "").translation();
				if (translatedLang != "")
					L_Croatian.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "German", "").translation();
				if (translatedLang != "")
					L_German.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Polish", "").translation();
				if (translatedLang != "")
					L_Polish.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "English", "").translation();
				if (translatedLang != "")
					L_English.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Spanish", "").translation();
				if (translatedLang != "")
					L_Spanish.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Italian", "").translation();
				if (translatedLang != "")
					L_Italian.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "French", "").translation();
				if (translatedLang != "")
					L_French.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Russian", "").translation();
				if (translatedLang != "")
					L_Russian.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Danish", "").translation();
				if (translatedLang != "")
					L_Danish.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Slovak", "").translation();
				if (translatedLang != "")
					L_Slovak.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Hungarian", "").translation();
				if (translatedLang != "")
					L_Hungarian.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Czech", "").translation();
				if (translatedLang != "")
					L_Czech.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Dutch", "").translation();
				if (translatedLang != "")
					L_Dutch.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Portuguese", "").translation();
				if (translatedLang != "")
					L_Portuguese.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Portuguese (BR)", "").translation();
				if (translatedLang != "")
					L_Portuguese_BR.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Ukrainian", "").translation();
				if (translatedLang != "")
					L_Ukrainian.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Greek", "").translation();
				if (translatedLang != "")
					L_Greek.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Catalan", "").translation();
				if (translatedLang != "")
					L_Catalan.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Finnish", "").translation();
				if (translatedLang != "")
					L_Finnish.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Irish", "").translation();
				if (translatedLang != "")
					L_Irish.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Lithuanian", "").translation();
				if (translatedLang != "")
					L_Lithuanian.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Swedish", "").translation();
				if (translatedLang != "")
					L_Swedish.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Slovenian", "").translation();
				if (translatedLang != "")
					L_Slovenian.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Afrikaans", "").translation();
				if (translatedLang != "")
					L_Afrikaans.append(translatedLang);
				translatedLang = "";
				translatedLang = trans->findMessage("ScribusApp", "Bulgarian", "").translation();
				if (translatedLang != "")
					L_Bulgarian.append(translatedLang);
				delete trans;
			}
		}
	}
	InstLang.insert("Afrikaans", L_Afrikaans);
	InstLang.insert("Bulgarian", L_Bulgarian);
	InstLang.insert("Catalan", L_Catalan);
	InstLang.insert("Croatian", L_Croatian);
	InstLang.insert("Czech", L_Czech);
	InstLang.insert("Danish", L_Danish);
	InstLang.insert("Dutch", L_Dutch);
	InstLang.insert("English", L_English);
	InstLang.insert("Finnish", L_Finnish);
	InstLang.insert("French", L_French);
	InstLang.insert("German", L_German);
	InstLang.insert("Greek", L_Greek);
	InstLang.insert("Hungarian", L_Hungarian);
	InstLang.insert("Irish", L_Irish);
	InstLang.insert("Italian", L_Italian);
	InstLang.insert("Lithuanian", L_Lithuanian);
	InstLang.insert("Polish", L_Polish);
	InstLang.insert("Portuguese (BR)", L_Portuguese_BR);
	InstLang.insert("Portuguese", L_Portuguese);
	InstLang.insert("Russian", L_Russian);
	InstLang.insert("Slovak", L_Slovak);
	InstLang.insert("Slovenian", L_Slovenian);
	InstLang.insert("Spanish", L_Spanish);
	InstLang.insert("Swedish", L_Swedish);
	InstLang.insert("Ukrainian", L_Ukrainian);
	QString lang = QString(QTextCodec::locale()).left(2);
	LangTransl.clear();
	Prefs.Language = "English";
	pfad = QDir::convertSeparators(ScPaths::instance().libDir() + "dicts/");
	QDir d(pfad, "*.dic", QDir::Name, QDir::Files | QDir::NoSymLinks);
	if ((d.exists()) && (d.count() != 0))
	{
		LanguageManager langmgr;
		langmgr.init(false);
		QString datein = "";
		for (uint dc = 0; dc < d.count(); ++dc)
		{
			QFileInfo fi(d[dc]);
			QString fileLangAbbrev=fi.baseName().section('_', 1);
			datein = langmgr.getLangFromAbbrev(fileLangAbbrev);
			QString tDatein = datein;
			datein = GetLang(datein);
			LangTransl.insert(datein, tDatein);
			Sprachen.insert(datein, d[dc]);
			if (fileLangAbbrev == lang)
				Prefs.Language = datein;
		}
		if (datein == "")
			Prefs.Language = "English";
	}
	propertiesPalette->fillLangCombo(LangTransl);
}

QString ScribusApp::GetLang(QString inLang)
{
 	for (QMap<QString, QStringList>::Iterator itl = InstLang.begin(); itl != InstLang.end(); ++itl)
	{
		for (QStringList::Iterator itlr = itl.data().begin(); itlr != itl.data().end(); ++itlr)
		{
			if ((*itlr) == inLang)
				return itl.key();
		}
	}
	return inLang;
}

void ScribusApp::doHyphenate()
{
	if (HaveDoc)
	{
		if (view->SelItem.count() != 0)
		{
			PageItem *currItem = view->SelItem.at(0);
			if (doc->docHyphenator->Language != currItem->Language)
				doc->docHyphenator->slotNewDict(currItem->Language);
			doc->docHyphenator->slotHyphenate(currItem);
		}
	}
}

void ScribusApp::ToggleObjPDFAnnotation()
{
	if (HaveDoc)
		view->ToggleAnnotation();
}

void ScribusApp::ToggleObjPDFBookmark()
{
	if (HaveDoc)
		view->ToggleBookmark();
}

void ScribusApp::ToggleObjLock()
{
	if (HaveDoc)
		view->ToggleLock();
}

void ScribusApp::ToggleObjSizeLock()
{
	if (HaveDoc)
		view->ToggleSizeLock();
}

void ScribusApp::ManageGuides()
{
	if (HaveDoc)
	{
		GuideManager *dia = new GuideManager(
		                        this,
		                        doc->currentPage->XGuides,
		                        doc->currentPage->YGuides,
		                        doc->currentPage->Width,
		                        doc->currentPage->Height,
		                        doc->GuideLock,
		                        doc->docUnitIndex
		                    );
		if (dia->exec())
		{
			doc->currentPage->addXGuides(dia->LocVer);
			doc->currentPage->addYGuides(dia->LocHor);
			doc->lockGuides(dia->LocLocked);
			view->DrawNew();
//			slotDocCh();
		}
		delete dia;
	}
}

void ScribusApp::SetTranspar(double t)
{
	if (HaveDoc)
	{
		if (view->SelItem.count() != 0)
		{
			PageItem *currItem = view->SelItem.at(0);
			currItem->setFillTransparency(t);
			view->DrawNew();
			slotDocCh();
		}
	}
}

void ScribusApp::SetTransparS(double t)
{
	if (HaveDoc)
	{
		if (view->SelItem.count() != 0)
		{
			PageItem *currItem = view->SelItem.at(0);
			currItem->setLineTransparency(t);
			view->DrawNew();
			slotDocCh();
		}
	}
}

void ScribusApp::InvertPict()
{
	if (HaveDoc)
	{
		if (view->SelItem.count() != 0)
		{
			PageItem *currItem = view->SelItem.at(0);
			currItem->InvPict = !currItem->InvPict;
			view->DrawNew();
			slotDocCh();
		}
	}
}

QString ScribusApp::Collect(bool compress, bool withFonts)
{
	if (doc->TemplateMode)
		doc->MasterPages = doc->Pages;
	else
		doc->DocPages = doc->Pages;
	QString retVal = "";
	QString CurDirP = QDir::currentDirPath();
	bool compressR = compress;
	bool withFontsR = withFonts;
	QString wdir = ".";
	if (Prefs.DocDir != "")
		wdir = dirs->get("collect", Prefs.DocDir);
	else
		wdir = dirs->get("collect", ".");
	QString s = CFileDialog(wdir, tr("Choose a Directory"), "", "", false, false, false, false, true, &compressR, &withFontsR);
	if (s != "")
	{
		fileWatcher->forceScan();
		fileWatcher->stop();
		if(s.right(1) != "/")
			s += "/";
		dirs->set("collect", s.left(s.findRev("/",-2)));
		QFileInfo fi = QFileInfo(s);
		if (fi.exists())
		{
			if (fi.isDir() && fi.isWritable())
			{
				QString fn;
				if (doc->hasName)
				{
					QFileInfo fis(doc->DocName);
					fn = s + fis.fileName();
				}
				else
					fn = s + doc->DocName+".sla";
				doc->hasName = true;
				if (compressR)
				{
					if (!fn.endsWith(".gz"))
						fn += ".gz";
				}
				else
				{
					if (fn.endsWith(".gz"))
						fn = fn.remove(".gz");
				}
				if (!overwrite(this, fn))
				{
					retVal = "";
					return retVal;
				}
				retVal = s;
				for (uint b = 0; b < doc->MasterItems.count(); ++b)
				{
					PageItem* ite = doc->MasterItems.at(b);
					if (ite->itemType() == PageItem::ImageFrame)
					{
						QFileInfo itf = QFileInfo(ite->Pfile);
						if (itf.exists())
						{
							copyFile(ite->Pfile, s + itf.fileName());
							fileWatcher->removeFile(ite->Pfile);
							ite->Pfile = s + itf.fileName();
							fileWatcher->addFile(s + itf.fileName());
						}
					}
					if (ite->itemType() == PageItem::TextFrame)
					{
						if (ite->isAnnotation)
						{
							QFileInfo itf;
							if (ite->Pfile != "")
							{
								itf = QFileInfo(ite->Pfile);
								if (itf.exists())
								{
									copyFile(ite->Pfile, s + itf.fileName());
									fileWatcher->removeFile(ite->Pfile);
									ite->Pfile = s + itf.fileName();
									fileWatcher->addFile(s + itf.fileName());
								}
							}
							if (ite->Pfile2 != "")
							{
								itf = QFileInfo(ite->Pfile2);
								if (itf.exists())
								{
									copyFile(ite->Pfile2, s + itf.fileName());
									ite->Pfile2 = s + itf.fileName();
								}
							}
							if (ite->Pfile3 != "")
							{
								itf = QFileInfo(ite->Pfile3);
								if (itf.exists())
								{
									copyFile(ite->Pfile3, s + itf.fileName());
									ite->Pfile3 = s + itf.fileName();
								}
							}
						}
					}
				}
				for (uint b = 0; b < doc->DocItems.count(); ++b)
				{
					PageItem* ite = doc->DocItems.at(b);
					if (ite->itemType() == PageItem::ImageFrame)
					{
						QFileInfo itf = QFileInfo(ite->Pfile);
						if (itf.exists())
						{
							copyFile(ite->Pfile, s + itf.fileName());
							fileWatcher->removeFile(ite->Pfile);
							ite->Pfile = s + itf.fileName();
							fileWatcher->addFile(s + itf.fileName());
						}
					}
					if (ite->itemType() == PageItem::TextFrame)
					{
						if (ite->isAnnotation)
						{
							QFileInfo itf;
							if (ite->Pfile != "")
							{
								itf = QFileInfo(ite->Pfile);
								if (itf.exists())
								{
									copyFile(ite->Pfile, s + itf.fileName());
									fileWatcher->removeFile(ite->Pfile);
									ite->Pfile = s + itf.fileName();
									fileWatcher->addFile(s + itf.fileName());
								}
							}
							if (ite->Pfile2 != "")
							{
								itf = QFileInfo(ite->Pfile2);
								if (itf.exists())
								{
									copyFile(ite->Pfile2, s + itf.fileName());
									ite->Pfile2 = s + itf.fileName();
								}
							}
							if (ite->Pfile3 != "")
							{
								itf = QFileInfo(ite->Pfile3);
								if (itf.exists())
								{
									copyFile(ite->Pfile, s + itf.fileName());
									ite->Pfile3 = s + itf.fileName();
								}
							}
						}
					}
				}
				if (!DoFileSave(fn))
				{
					QMessageBox::warning(this, tr("Warning"), tr("Cannot write the File: \n%1").arg(fn), tr("OK"));
					retVal = "";
				}
				if (withFontsR)
				{
					QMap<QString,QFont>::Iterator it3;
					for (it3 = doc->UsedFonts.begin(); it3 != doc->UsedFonts.end(); ++it3)
					{
						QFileInfo itf = QFileInfo(Prefs.AvailFonts[it3.key()]->Datei);
						copyFile(Prefs.AvailFonts[it3.key()]->Datei, s + itf.fileName());
					}
				}
			}
		}
		fileWatcher->start();
	}
	QDir::setCurrent(CurDirP);
	return retVal;
}

void ScribusApp::ReorgFonts()
{
	PageItem* it;
	QMap<QString,QFont> Really;
	QMap<QString,QFont> DocF;
	DocF = doc->UsedFonts;
	if (!doc->TemplateMode)
		doc->DocPages = doc->Pages;
	for (uint d = 0; d < doc->MasterItems.count(); ++d)
	{
		it = doc->MasterItems.at(d);
		Really.insert(it->IFont, doc->UsedFonts[it->IFont]);
		if ((it->itemType() == PageItem::TextFrame) || (it->itemType() == PageItem::PathText))
		{
			for (uint e = 0; e < it->itemText.count(); ++e)
			{
				Really.insert(it->itemText.at(e)->cfont->SCName, doc->UsedFonts[it->itemText.at(e)->cfont->SCName]);
			}
		}
	}
	for (uint d = 0; d < doc->DocItems.count(); ++d)
	{
		it = doc->DocItems.at(d);
		Really.insert(it->IFont, doc->UsedFonts[it->IFont]);
		if ((it->itemType() == PageItem::TextFrame) || (it->itemType() == PageItem::PathText))
		{
			for (uint e = 0; e < it->itemText.count(); ++e)
			{
				Really.insert(it->itemText.at(e)->cfont->SCName, doc->UsedFonts[it->itemText.at(e)->cfont->SCName]);
			}
		}
	}
	QMap<QString,QFont>::Iterator itfo, itnext;
	for (itfo = doc->UsedFonts.begin(); itfo != doc->UsedFonts.end(); itfo = itnext)
	{
		itnext = itfo;
		++itnext;
		if (!Really.contains(itfo.key()))
		{
			FT_Done_Face(doc->FFonts[itfo.key()]);
			doc->FFonts.remove(itfo.key());
			doc->UsedFonts.remove(itfo);
		}
	}
	doc->AddFont(Prefs.toolSettings.defFont, Prefs.AvailFonts[Prefs.toolSettings.defFont]->Font);
	doc->AddFont(doc->toolSettings.defFont, Prefs.AvailFonts[doc->toolSettings.defFont]->Font);
	buildFontMenu();
}

void ScribusApp::GetUsedFonts(QMap<QString,QFont> *Really)
{
	PageItem* it;
	FPointArray gly;
	QString chx;
	for (uint d = 0; d < doc->MasterItems.count(); ++d)
	{
		it = doc->MasterItems.at(d);
		if ((it->itemType() == PageItem::TextFrame) || (it->itemType() == PageItem::PathText))
		{
			for (uint e = 0; e < it->itemText.count(); ++e)
			{
				Really->insert(it->itemText.at(e)->cfont->SCName, doc->UsedFonts[it->itemText.at(e)->cfont->SCName]);
				uint chr = it->itemText.at(e)->ch[0].unicode();
				if ((chr == 13) || (chr == 32) || (chr == 29) || (chr == 9))
					continue;
				if (it->itemText.at(e)->cstyle & 64)
				{
					chx = it->itemText.at(e)->ch;
					if (chx.upper() != it->itemText.at(e)->ch)
						chx = chx.upper();
					chr = chx[0].unicode();
				}
				if (chr == 30)
				{
					for (uint numco = 0x30; numco < 0x3A; ++numco)
					{
						if (it->itemText.at(e)->cfont->CharWidth.contains(numco))
						{
							gly = it->itemText.at(e)->cfont->GlyphArray[numco].Outlines.copy();
							it->itemText.at(e)->cfont->RealGlyphs.insert(numco, gly);
						}
					}
					continue;
				}
				if (it->itemText.at(e)->cfont->CharWidth.contains(chr))
				{
					gly = it->itemText.at(e)->cfont->GlyphArray[chr].Outlines.copy();
					it->itemText.at(e)->cfont->RealGlyphs.insert(chr, gly);
				}
			}
		}
	}
	for (uint d = 0; d < doc->Items.count(); ++d)
	{
		it = doc->Items.at(d);
		if ((it->itemType() == PageItem::TextFrame) || (it->itemType() == PageItem::PathText))
		{
			for (uint e = 0; e < it->itemText.count(); ++e)
			{
				Really->insert(it->itemText.at(e)->cfont->SCName, doc->UsedFonts[it->itemText.at(e)->cfont->SCName]);
				uint chr = it->itemText.at(e)->ch[0].unicode();
				if ((chr == 13) || (chr == 32) || (chr == 29) || (chr == 9))
					continue;
				if (it->itemText.at(e)->cstyle & 64)
				{
					chx = it->itemText.at(e)->ch;
					if (chx.upper() != it->itemText.at(e)->ch)
						chx = chx.upper();
					chr = chx[0].unicode();
				}
				if (chr == 30)
				{
					for (uint numco = 0x30; numco < 0x3A; ++numco)
					{
						if (it->itemText.at(e)->cfont->CharWidth.contains(numco))
						{
							gly = it->itemText.at(e)->cfont->GlyphArray[numco].Outlines.copy();
							it->itemText.at(e)->cfont->RealGlyphs.insert(numco, gly);
						}
					}
					continue;
				}
				if (it->itemText.at(e)->cfont->CharWidth.contains(chr))
				{
					gly = it->itemText.at(e)->cfont->GlyphArray[chr].Outlines.copy();
					it->itemText.at(e)->cfont->RealGlyphs.insert(chr, gly);
				}
			}
		}
	}
}

void ScribusApp::docCheckToggle(bool visible)
{
	if (docCheckerPalette->checkMode == 1)
		disconnect(docCheckerPalette, SIGNAL(ignoreAllErrors()), this, SLOT(doSaveAsPDF()));
	if (docCheckerPalette->checkMode == 2)
		disconnect(docCheckerPalette, SIGNAL(ignoreAllErrors()), this, SLOT(reallySaveAsEps()));
	if (docCheckerPalette->checkMode == 3)
		disconnect(docCheckerPalette, SIGNAL(ignoreAllErrors()), this, SLOT(slotReallyPrint()));
	if (!visible)
	{
		docCheckerPalette->ignoreErrors->hide();
		docCheckerPalette->checkMode = 0;
		docCheckerPalette->noButton = true;
	}
}

void ScribusApp::slotCheckDoc()
{
	scanDocument();
	docCheckerPalette->buildErrorList(doc);
}

void ScribusApp::scanDocument()
{
	PageItem* it;
	QString chx;
	struct checkerPrefs checkerSettings;
	checkerSettings.ignoreErrors = doc->checkerProfiles[doc->curCheckProfile].ignoreErrors;
	checkerSettings.autoCheck = doc->checkerProfiles[doc->curCheckProfile].autoCheck;
	checkerSettings.checkGlyphs = doc->checkerProfiles[doc->curCheckProfile].checkGlyphs;
	checkerSettings.checkOrphans = doc->checkerProfiles[doc->curCheckProfile].checkOrphans;
	checkerSettings.checkOverflow = doc->checkerProfiles[doc->curCheckProfile].checkOverflow;
	checkerSettings.checkPictures = doc->checkerProfiles[doc->curCheckProfile].checkPictures;
	checkerSettings.checkResolution = doc->checkerProfiles[doc->curCheckProfile].checkResolution;
	checkerSettings.checkTransparency = doc->checkerProfiles[doc->curCheckProfile].checkTransparency;
	checkerSettings.minResolution = doc->checkerProfiles[doc->curCheckProfile].minResolution;
	checkerSettings.checkAnnotations = doc->checkerProfiles[doc->curCheckProfile].checkAnnotations;
	checkerSettings.checkRasterPDF = doc->checkerProfiles[doc->curCheckProfile].checkRasterPDF;
	doc->docItemErrors.clear();
	doc->masterItemErrors.clear();
	errorCodes itemError;
	for (uint d = 0; d < doc->MasterItems.count(); ++d)
	{
		it = doc->MasterItems.at(d);
		itemError.clear();
		if (((it->isAnnotation) || (it->isBookmark)) && (checkerSettings.checkAnnotations))
			itemError.insert(7, 0);
		if (((it->fillTransparency() != 0.0) || (it->lineTransparency() != 0.0)) && (checkerSettings.checkTransparency))
			itemError.insert(6, 0);
		if ((it->OwnPage == -1) && (checkerSettings.checkOrphans))
			itemError.insert(3, 0);
		if (it->itemType() == PageItem::ImageFrame)
		{
		 	if ((!it->PicAvail) && (checkerSettings.checkPictures))
				itemError.insert(4, 0);
			else
			{
				if  (((qRound(72.0 / it->LocalScX) < checkerSettings.minResolution) || (qRound(72.0 / it->LocalScY) < checkerSettings.minResolution))
				          && (it->isRaster) && (checkerSettings.checkResolution))
					itemError.insert(5, 0);
				QFileInfo fi = QFileInfo(it->Pfile);
				QString ext = fi.extension(false).lower();
				if ((ext == "pdf") && (checkerSettings.checkRasterPDF))
					itemError.insert(8, 0);
			}
		}
		if ((it->itemType() == PageItem::TextFrame) || (it->itemType() == PageItem::PathText))
		{
			if ((it->itemText.count() > it->MaxChars) && (checkerSettings.checkOverflow))
				itemError.insert(2, 0);
			for (uint e = 0; e < it->itemText.count(); ++e)
			{
				uint chr = it->itemText.at(e)->ch[0].unicode();
				if ((chr == 13) || (chr == 32) || (chr == 29) || (chr == 9))
					continue;
				if (it->itemText.at(e)->cstyle & 64)
				{
					chx = it->itemText.at(e)->ch;
					if (chx.upper() != it->itemText.at(e)->ch)
						chx = chx.upper();
					chr = chx[0].unicode();
				}
				if (chr == 30)
				{
					for (uint numco = 0x30; numco < 0x3A; ++numco)
					{
						if ((!it->itemText.at(e)->cfont->CharWidth.contains(numco)) && (checkerSettings.checkGlyphs))
							itemError.insert(1, 0);
					}
					continue;
				}
				if ((!it->itemText.at(e)->cfont->CharWidth.contains(chr)) && (checkerSettings.checkGlyphs))
					itemError.insert(1, 0);
			}
		}
		if (itemError.count() != 0)
			doc->masterItemErrors.insert(it->ItemNr, itemError);
	}
	for (uint d = 0; d < doc->DocItems.count(); ++d)
	{
		it = doc->DocItems.at(d);
		itemError.clear();
		if (((it->fillTransparency() != 0.0) || (it->lineTransparency() != 0.0)) && (checkerSettings.checkTransparency))
			itemError.insert(6, 0);
		if (((it->isAnnotation) || (it->isBookmark)) && (checkerSettings.checkAnnotations))
			itemError.insert(7, 0);
		if ((it->OwnPage == -1) && (checkerSettings.checkOrphans))
			itemError.insert(3, 0);
		if (it->itemType() == PageItem::ImageFrame)
		{
		 	if ((!it->PicAvail) && (checkerSettings.checkPictures))
				itemError.insert(4, 0);
			else
			{
				if  (((qRound(72.0 / it->LocalScX) < checkerSettings.minResolution) || (qRound(72.0 / it->LocalScY) < checkerSettings.minResolution))
				           && (it->isRaster) && (checkerSettings.checkResolution))
					itemError.insert(5, 0);
				QFileInfo fi = QFileInfo(it->Pfile);
				QString ext = fi.extension(false).lower();
				if ((ext == "pdf") && (checkerSettings.checkRasterPDF))
					itemError.insert(8, 0);
			}
		}
		if ((it->itemType() == PageItem::TextFrame) || (it->itemType() == PageItem::PathText))
		{
			if ((it->itemText.count() > it->MaxChars) && (checkerSettings.checkOverflow))
				itemError.insert(2, 0);
			for (uint e = 0; e < it->itemText.count(); ++e)
			{
				uint chr = it->itemText.at(e)->ch[0].unicode();
				if ((chr == 13) || (chr == 32) || (chr == 29) || (chr == 9))
					continue;
				if (it->itemText.at(e)->cstyle & 64)
				{
					chx = it->itemText.at(e)->ch;
					if (chx.upper() != it->itemText.at(e)->ch)
						chx = chx.upper();
					chr = chx[0].unicode();
				}
				if (chr == 30)
				{
					for (uint numco = 0x30; numco < 0x3A; ++numco)
					{
						if ((!it->itemText.at(e)->cfont->CharWidth.contains(numco)) && (checkerSettings.checkGlyphs))
							itemError.insert(1, 0);
					}
					continue;
				}
				if ((!it->itemText.at(e)->cfont->CharWidth.contains(chr)) && (checkerSettings.checkGlyphs))
					itemError.insert(1, 0);
			}
		}
		if (itemError.count() != 0)
			doc->docItemErrors.insert(it->ItemNr, itemError);
	}
}

void ScribusApp::HaveRaster(bool art)
{
	if (art && view->SelItem.count() != 0)
	{
		PageItem *currItem = view->SelItem.at(0);
		if (currItem->itemType() == PageItem::ImageFrame)
		{
			scrMenuMgr->clearMenu("Style");
			scrMenuMgr->addMenuToMenu("Color","Style");
			scrMenuMgr->addMenuItem(scrActions["styleInvertPict"], "Style");
		}
	}
}

void ScribusApp::slotStoryEditor()
{
	if (view->SelItem.count() != 0)
	{
		PageItem *currItem = view->SelItem.at(0);
		StoryEditor* dia = new StoryEditor(this, doc, currItem);
		CurrStED = dia;
		connect(dia, SIGNAL(DocChanged()), this, SLOT(slotDocCh()));
		connect(dia, SIGNAL(EditSt()), this, SLOT(slotEditStyles()));
		if (dia->exec())
		{
			if (dia->TextChanged)
				dia->updateTextFrame();
		}
		else
			view->DrawNew();
		buildFontMenu();
		CurrStED = NULL;
		delete dia;
	}
}

void ScribusApp::defaultCrashHandler (int sig)
{
	static int crashRecursionCounter = 0;
	crashRecursionCounter++;
	signal(SIGALRM, SIG_DFL);
	if (crashRecursionCounter < 2)
	{
		crashRecursionCounter++;
		QMessageBox::critical(ScApp, tr("Scribus Crash"), tr("Scribus crashes due to Signal #%1").arg(sig), tr("OK"));
		alarm(300);
		ScApp->emergencySave();
	}
	exit(255);
}

void ScribusApp::emergencySave()
{
	std::cout << "Calling Emergency Save" << std::endl;
	QWidgetList windows = ScApp->wsp->windowList();
	if (!windows.isEmpty())
	{
		for ( int i = 0; i < static_cast<int>(windows.count()); ++i )
		{
			ActWin = (ScribusWin*)windows.at(i);
			doc = ActWin->doc;
			view = ActWin->view;
			doc->setUnModified();
			if (doc->hasName)
			{
				std::cout << "Saving: " << doc->DocName+".emergency" << std::endl;
				doc->ASaveTimer->stop();
				disconnect(ActWin, SIGNAL(Schliessen()), ScApp, SLOT(DoFileClose()));
				ScriXmlDoc *ss = new ScriXmlDoc();
				ss->WriteDoc(doc->DocName+".emergency", doc, 0);
				delete ss;
			}
			view->close();
			for (uint a = 0; a<doc->Pages.count(); ++a)
			{
				delete doc->Pages.at(a);
			}
			delete doc;
			ActWin->close();
		}
	}
}

void ScribusApp::EditTabs()
{
	if (HaveDoc)
	{
		if (view->SelItem.count() != 0)
		{
			PageItem *currItem = view->SelItem.at(0);
			TabManager *dia = new TabManager(this, doc->docUnitIndex, currItem->TabValues, currItem->Width);
			if (dia->exec())
			{
				currItem->TabValues = dia->tmpTab;
				view->RefreshItem(currItem);
				slotDocCh();
			}
			delete dia;
		}
	}
}

void ScribusApp::SearchText()
{
	PageItem *currItem = view->SelItem.at(0);
	setAppMode(EditMode);
	currItem->CPos = 0;
	SearchReplace* dia = new SearchReplace(this, doc, &Prefs, currItem);
	connect(dia, SIGNAL(NewFont(QString)), this, SLOT(SetNewFont(QString)));
	connect(dia, SIGNAL(NewAbs(int)), this, SLOT(setAbsValue(int)));
	dia->exec();
	disconnect(dia, SIGNAL(NewFont(QString)), this, SLOT(SetNewFont(QString)));
	disconnect(dia, SIGNAL(NewAbs(int)), this, SLOT(setAbsValue(int)));
	delete dia;
	slotSelect();
}

void ScribusApp::GimpExited()
{
	int ex = 0;
	if ( ExternalApp != 0 )
	{
		ex = ExternalApp->exitStatus();
		delete ExternalApp;
	}
	ExternalApp = 0;
}

/* call gimp and wait uppon completion */
void ScribusApp::CallGimp()
{
	QStringList cmd;
	if (view->SelItem.count() != 0)
	{
		if (ExternalApp != 0)
		{
			QString mess = tr("The Program")+" "+Prefs.gimp_exe;
			mess += "\n" + tr("is already running!");
			QMessageBox::information(this, tr("Information"), mess, 1, 0, 0);
			return;
		}
		PageItem *currItem = view->SelItem.at(0);
		if (currItem->PicAvail)
		{
			ExternalApp = new QProcess(NULL);
            cmd = QStringList::split(" ", Prefs.gimp_exe);
			cmd.append(currItem->Pfile);
			ExternalApp->setArguments(cmd);
			if ( !ExternalApp->start() )
			{
				delete ExternalApp;
				ExternalApp = 0;
				QString mess = tr("The Program")+" "+Prefs.gimp_exe;
				mess += "\n" + tr("is missing!");
				QMessageBox::critical(this, tr("Warning"), mess, 1, 0, 0);
				return;
			}
			connect(ExternalApp, SIGNAL(processExited()), this, SLOT(GimpExited()));
		}
	}
}

void ScribusApp::slotCharSelect()
{
	if ((HaveDoc) && (view->SelItem.count() != 0))
	{
		PageItem *currItem = view->SelItem.at(0);
		if ((currItem->itemType() == PageItem::TextFrame) && (doc->appMode == EditMode))
		{
			CharSelect *dia = new CharSelect(this, currItem, this);
			dia->exec();
			delete dia;
		}
	}
}

void ScribusApp::setUndoMode(bool isObjectSpecific)
{
	objectSpecificUndo = isObjectSpecific;

	if (!objectSpecificUndo && HaveDoc)
		undoManager->showObject(Um::GLOBAL_UNDO_MODE);
	else if (HaveDoc)
	{
		if (view->SelItem.count() == 1)
			undoManager->showObject(view->SelItem.at(0)->getUId());
		else if (view->SelItem.count() == 0)
			undoManager->showObject(doc->currentPage->getUId());
		else
			undoManager->showObject(Um::NO_UNDO_STACK);
	}
}

bool ScribusApp::isObjectSpecificUndo()
{
	return objectSpecificUndo;
}

void ScribusApp::slotTest()
{
}

void ScribusApp::slotTest2()
{
}

void ScribusApp::objectAttributes()
{
	if ((HaveDoc) && (view->SelItem.count() == 1))
	{
		PageItem *pageItem = view->SelItem.at(0);
		if (pageItem!=NULL)
		{
			PageItemAttributes *pageItemAttrs = new PageItemAttributes( this );
			pageItemAttrs->setup(pageItem->getObjectAttributes());
			//CB TODO Probably want this non modal in the future
			if (pageItemAttrs->exec()==QDialog::Accepted)
				pageItem->setObjectAttributes(pageItemAttrs->getNewAttributes());
			delete pageItemAttrs;
		}
	}
}

void ScribusApp::generateTableOfContents()
{
	if (HaveDoc)
	{
		for(ToCSetupVector::Iterator tocSetupIt = doc->docToCSetups.begin() ; tocSetupIt != doc->docToCSetups.end(); ++tocSetupIt )
		{
			bool found=false;
			uint d;
			PageItem* tocFrame=NULL;
			for (d = 0; d < doc->DocItems.count(), found==false; ++d)
			{
				if (doc->DocItems.at(d) !=NULL ) 
				{
					if (doc->DocItems.at(d)->itemType()==PageItem::TextFrame && doc->DocItems.at(d)->itemName()==(*tocSetupIt).frameName)
					{
						found=true;
						tocFrame=doc->DocItems.at(d);
					}
				}
			}
			if (found && tocFrame!=NULL)
			{
				PageItem *currentDocItem;
				QMap<QString, QString> tocMap;
				tocMap.clear();
				uint pageCounter[doc->PageC];
				for (int i=0;i<=doc->PageC;++i)
					pageCounter[i]=0;
				unsigned int maxDataWidth=0;
				for (uint d = 0; d < doc->DocItems.count(); ++d)
				{
					currentDocItem = doc->DocItems.at(d);
					if (currentDocItem!=NULL)
					{
						//Item not on a page, continue
						if (currentDocItem->OwnPage==-1)
							continue;
						ObjectAttribute objattr=currentDocItem->getObjectAttribute((*tocSetupIt).itemAttrName);
						if (objattr.name!=QString::null)
						{
							//TODO Handle docs with non consecutive page numbers when that is possible
							QString key=QString("%1,%2").arg(currentDocItem->OwnPage + doc->FirstPnum).arg(pageCounter[currentDocItem->OwnPage]++);
							tocMap.insert(key, objattr.value);
							if (objattr.value.length()>maxDataWidth)
								maxDataWidth=objattr.value.length();
						}				
					}
				}
				gtWriter* writer = new gtWriter(false, tocFrame);
				QString oldTocPage=QString::null;
				for (QMap<QString, QString>::Iterator tocIt=tocMap.begin();tocIt!=tocMap.end();++tocIt)
				{
					QString tocPage = tocIt.key().section( ',', 0, 0 ); 
					QString tocLine = tocIt.data();
					//QString tocPageItemNo = tocIt.key().section( ',', 1, 1 ); 
					if (oldTocPage!=tocPage)
					{
						oldTocPage=tocPage;
						tocLine = tocLine.leftJustify(maxDataWidth+5, '.');
						tocLine = tocLine + tocPage + "\n";
					}
					else
						tocLine += "\n";
					writer->append(tocLine);
				}
				if (writer!=NULL)
					delete writer;
			}
		}
	}
}

void ScribusApp::mouseReleaseEvent(QMouseEvent *m)
{
	bool sendToSuper=true;
	if (HaveDoc)
	{
		if (doc->appMode == EyeDropper)
		{
			releaseMouse();
			//releaseKeyboard();
			sendToSuper=false;
			QPixmap pm = QPixmap::grabWindow( QApplication::desktop()->winId(), m->globalPos().x(), m->globalPos().y(), 1, 1);
			QImage i = pm.convertToImage();
			QColor selectedColor=i.pixel(0, 0);
			//qDebug(QString("red: %1 green: %2 blue: %3").arg(selectedColor.red()).arg(selectedColor.green()).arg(selectedColor.blue()));
			bool found=false;
			ColorList::Iterator it;
			for (it = doc->PageColors.begin(); it != doc->PageColors.end(); ++it)
			{
				if (selectedColor==doc->PageColors[it.key()].getRGBColor())
				{
					found=true;
					break;
				}
			}
			/*
			if (found)
				qDebug("color found");
			else
				qDebug("color not found");
			*/
			setAppMode(NormalMode);
		}
	}
	if (sendToSuper)
		QMainWindow::mouseReleaseEvent(m);

}

void ScribusApp::insertSampleText()
{
	if (HaveDoc)
		if (view->SelItem.count() > 0)
		{
			bool inserted=false;
			for (uint i = 0; i < view->SelItem.count(); ++i)
			{
				if (view->SelItem.at(i)!=NULL)
					if (view->SelItem.at(i)->itemType() == PageItem::TextFrame)
					{
						if (view->SelItem.at(i)->LoremIpsum())
							inserted=true;
					}
			}
			if (inserted)
			{
				view->updateContents();
				slotDocCh();
			}
		}
}
