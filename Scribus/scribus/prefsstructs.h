/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef PREFSSTRUCTS_H
#define PREFSSTRUCTS_H

#ifdef HAVE_CONFIG_H
#include "scconfig.h"
#endif

#include <QColor>
#include <QString>
#include <QList>
#include <QSet>
#include <QHash>
#include "pdfoptions.h"
#include "scfonts.h"

struct checkerPrefs
{
	bool ignoreErrors;
	bool autoCheck;
	bool checkGlyphs;
	bool checkOverflow;
	bool checkOrphans;
	bool checkPictures;
	bool checkResolution;
	double minResolution;
	double maxResolution;
	bool checkTransparency;
	bool checkAnnotations;
	bool checkRasterPDF;
	bool checkForGIF;
	bool ignoreOffLayers;
};

typedef QMap<QString, checkerPrefs> CheckerPrefsList;

struct typoPrefs
{
	int valueSuperScript;
	int scalingSuperScript;
	int valueSubScript;
	int scalingSubScript;
	int valueSmallCaps;
	int autoLineSpacing;
	int valueUnderlinePos;
	int valueUnderlineWidth;
	int valueStrikeThruPos;
	int valueStrikeThruWidth;
	double valueBaseGrid;
	double offsetBaseGrid;
};

struct windowPrefs
{
	int xPosition;
	int yPosition;
	int width;
	int height;
	bool visible;
	bool docked;
	bool maximized;
};

struct guidesPrefs
{
	bool gridShown;
	QColor majorColor;
	double majorGrid;
	double minorGrid;
	QColor minorColor;
	double guideRad;
	int grabRad;
	bool framesShown;
	bool guidesShown;
	bool colBordersShown;
	bool marginsShown;
	bool baseShown;
	bool linkShown;
	bool showPic;
	bool showControls;
	bool showBleed;
	bool rulerMode;
	bool rulersShown;
	bool layerMarkersShown;
	bool before;
	QColor guideColor;
	QColor baseColor;
	QColor margColor;
};

struct toolPrefs
{
	/* Texttool */
	QString defFont;
	int defSize;
	QString dPenText;
	int dTextPenShade;
	QString dStrokeText;
	int dTextStrokeShade;
	QString dTextBackGround;
	QString dTextLineColor;
	int dTextBackGroundShade;
	int dTextLineShade;
	int dCols;
	double dGap;
	QString tabFillChar;
	double dTabWidth;
	/* ShapeTool */
	QString dPen;
	QString dBrush;
	int dShade;
	int dShade2;
	int dLineArt;
	double dWidth;
	/* Line Tool */
	QString dPenLine;
	int dShadeLine;
	double dWidthLine;
	int dLstyleLine;
	int dStartArrow;
	int dEndArrow;
	/* Regular Polygon Tool */
	int polyC;
	int polyFd;
	double polyF;
	bool polyS;
	double polyR;
	/* Picture Tool */
	QString dBrushPict;
	int shadePict;
	double scaleX;
	double scaleY;
	bool scaleType;
	bool aspectRatio;
	int lowResType;
	bool useEmbeddedPath;
	/* Magnifier Tool */
	int magMin;
	int magMax;
	int magStep;
	/* Item Duplicate Offset */
	double dispX;
	double dispY;
	/* Rotation Tool constrain value */
	double constrain;
};

struct ApplicationPrefs
{
	SCFonts AvailFonts;
	QList<ArrowDesc> arrowStyles;
	QList<PageSet> pageSets;
	ColorList DColors;
	int moveTimeout;
	int Wheelval;
	int AppFontSize;
	int PaletteFontSize;
	QColor DpapColor;
	QColor DFrameColor;
	QColor DFrameNormColor;
	QColor DFrameGroupColor;
	QColor DFrameLinkColor;
	QColor DFrameLockColor;
	QColor DFrameAnnotationColor;
	QColor DPageBorderColor;
	QColor DControlCharColor;
	QString GUI;
	guidesPrefs guidesSettings;
	typoPrefs typographicSettings;
	toolPrefs toolSettings;
	CheckerPrefsList checkerProfiles;
	QString curCheckProfile;
	int docUnitIndex;
	windowPrefs mainWinSettings;
	QByteArray mainWinState;
	
	MarginStruct bleeds;

	PDFOptions PDF_Options;
	ObjAttrVector defaultItemAttributes;
	ToCSetupVector defaultToCSetups;
	bool SepalT;
	bool SepalN;
//	int PSize;
	bool marginColored;
	QStringList RecentDocs;
	QStringList RecentScrapbooks;
	int numScrapbookCopies;
	bool doCopyToScrapbook;
	bool persistentScrapbook;
	int RecentDCount;
	CMSData DCMSset;
	QMap<QString,Keys> KeyActions;
	QString PrinterName;
	QString PrinterFile;
	QString PrinterCommand;
	QString pageSize;
	int pageOrientation;
	double PageWidth;
	double PageHeight;
	MarginStruct margins;
	int FacingPages;
	int MinWordLen;
	int HyCount;
	QString Language;
	QHash<QString, QString> specialWords;
	QSet<QString> ignoredWords;
	QString guiLanguage;
	bool Automatic;
	bool AutoCheck;
	QString DocDir;
	QString ProfileDir;
	QString ScriptDir;
	QString documentTemplatesDir;
	QMap<QString,QString> GFontSub;
	bool AutoSave;
	int AutoSaveTime;
	double DisScale;
	QString DColorSet;
	QStringList CustomColorSets;
	bool PrPr_Mode;
	bool Gcr_Mode;
	bool doOverprint;
	bool PrPr_AntiAliasing;
	bool PrPr_Transparency;
	bool PrPr_C;
	bool PrPr_M;
	bool PrPr_Y;
	bool PrPr_K;
	QString gs_exe;
	bool gs_AntiAliasText;
	bool gs_AntiAliasGraphics;
	int gs_Resolution;
	QString imageEditorExecutable;
	QString extBrowserExecutable;
	QString latexExecutable;
	QString latexEditorExecutable;
	QString latexPre;
	QString latexPost;
	int latexResolution;
	bool latexForceDpi;
	bool latexUseEmbeddedEditor;
	bool latexStartWithEmptyFrames;
	QString latexExtension;
	bool ClipMargin;
	bool GCRMode;
	QColor STEcolor;
	QString STEfont;
	MarginStruct scratch;
/*	double ScratchLeft;
	double ScratchRight;
	double ScratchTop;
	double ScratchBottom;*/
	bool askBeforeSubstituite;
	bool haveStylePreview;
	bool showToolTips;
	// lorem ipsum
	bool useStandardLI;
	int paragraphsLI;
	bool showStartupDialog;
	bool useSmallWidgets; // space savy widgets in palettes - PV
	bool stickyTools;
	bool grayscaleIcons;
};

#endif
