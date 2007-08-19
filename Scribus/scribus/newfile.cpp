/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "newfile.h"

#include <QGridLayout>
#include <QHBoxLayout>
#include <QVBoxLayout>
#include <QSpacerItem>
#include <QListWidgetItem>
#include <QFrame>
#include <QGroupBox>
#include <QLabel>
#include <QSpinBox>
#include <QCheckBox>
#include <QTabWidget>
#include <QPushButton>
#include <QPixmap>
#include <QToolTip>
#include <QDir>
#include <QPoint>
#if QT_VERSION  >= 0x040300
	#include <QFileDialog>
#else
	#include "customfdialog.h"
#endif

#include "fileloader.h"
#include "prefsfile.h"
#include "units.h"
#include "pagesize.h"
#include "marginWidget.h"
#include "scconfig.h"
#include "scribuscore.h"
#include "prefsmanager.h"
#include "pagelayout.h"
#include "pagestructs.h"
#include "commonstrings.h"
#include "scrspinbox.h"
#include "sccombobox.h"
#include "util_icon.h"

PageLayoutsWidget::PageLayoutsWidget(QWidget* parent) : QListWidget(parent)
{
	setDragEnabled(false);
	setViewMode(QListView::IconMode);
	setFlow(QListView::LeftToRight);
	setSortingEnabled(false);
	setWrapping(false);
	setWordWrap(true);
	setAcceptDrops(false);
	setDropIndicatorShown(false);
	setDragDropMode(QAbstractItemView::NoDragDrop);
	setResizeMode(QListView::Adjust);
	setSelectionMode(QAbstractItemView::SingleSelection);
	setFocusPolicy(Qt::NoFocus);
	setIconSize(QSize(32, 32));
	clear();
	setSizePolicy(QSizePolicy::Fixed, QSizePolicy::Expanding);
}

void PageLayoutsWidget::arrangeIcons()
{
	QListWidgetItem* ic;
	int startY = 5;
	int startX = 5;
	setResizeMode(QListView::Fixed);
	int maxSizeY = 0;
	for (int cc = 0; cc < count(); ++cc)
	{
		ic = item(cc);
		QRect ir = visualItemRect(ic);
		setPositionForIndex(QPoint(startX, startY), indexFromItem(ic));
		startX += ir.width()+5;
		maxSizeY = qMax(maxSizeY, ir.height());
	}
	maxX = startX;
	maxY = maxSizeY+10;
}

const QSize PageLayoutsWidget::minimumSizeHint()
{
	return QSize(maxX, maxY);
}

NewDoc::NewDoc( QWidget* parent, const QStringList& recentDocs, bool startUp ) : QDialog( parent )
{
	setModal(true);
	prefsManager=PrefsManager::instance();
	tabSelected = 0;
	onStartup = startUp;
	unitIndex = prefsManager->appPrefs.docUnitIndex;
	unitRatio = unitGetRatioFromIndex(unitIndex);
	unitSuffix = unitGetSuffixFromIndex(unitIndex);
	Orient = 0;
	setWindowTitle( tr( "New Document" ) );
	setWindowIcon(QIcon(loadIcon("AppIcon.png")));
	TabbedNewDocLayout = new QVBoxLayout( this );
	TabbedNewDocLayout->setMargin(10);
	TabbedNewDocLayout->setSpacing(5);
	if (startUp)
		tabWidget = new QTabWidget( this, "tabWidget2" );
	createNewDocPage();
	if (startUp)
	{
		tabWidget->addTab(newDocFrame, tr("&New Document"));
		createOpenDocPage();
		tabWidget->addTab(openDocFrame, tr("Open &Existing Document"));
		recentDocList=recentDocs;
 		createRecentDocPage();
 		tabWidget->addTab(recentDocFrame, tr("Open Recent &Document"));
 		TabbedNewDocLayout->addWidget(tabWidget);
	}
	else
		TabbedNewDocLayout->addWidget(newDocFrame);

	Layout1 = new QHBoxLayout;
	Layout1->setSpacing( 5 );
	Layout1->setMargin( 0 );
	if (startUp)
	{
		startUpDialog = new QCheckBox( tr( "Do not show this dialog again" ), this, "startUpDialog" );
		startUpDialog->setChecked(!prefsManager->appPrefs.showStartupDialog);
		Layout1->addWidget( startUpDialog );
	}
	QSpacerItem* spacer = new QSpacerItem( 2, 2, QSizePolicy::Expanding, QSizePolicy::Minimum );
	Layout1->addItem( spacer );
	OKButton = new QPushButton( CommonStrings::tr_OK, this, "OKButton" );
	OKButton->setDefault( true );
	Layout1->addWidget( OKButton );
	CancelB = new QPushButton( CommonStrings::tr_Cancel, this, "CancelB" );
	CancelB->setAutoDefault( false );
	Layout1->addWidget( CancelB );
	TabbedNewDocLayout->addLayout( Layout1 );
	//tooltips
	QToolTip::add( pageSizeComboBox, tr( "Document page size, either a standard size or a custom size" ) );
	QToolTip::add( pageOrientationComboBox, tr( "Orientation of the document's pages" ) );
	QToolTip::add( widthSpinBox, tr( "Width of the document's pages, editable if you have chosen a custom page size" ) );
	QToolTip::add( heightSpinBox, tr( "Height of the document's pages, editable if you have chosen a custom page size" ) );
	QToolTip::add( pageCountSpinBox, tr( "Initial number of pages of the document" ) );
	QToolTip::add( unitOfMeasureComboBox, tr( "Default unit of measurement for document editing" ) );
	QToolTip::add( autoTextFrame, tr( "Create text frames automatically when new pages are added" ) );
	QToolTip::add( numberOfCols, tr( "Number of columns to create in automatically created text frames" ) );
	QToolTip::add( Distance, tr( "Distance between automatically created columns" ) );

	// signals and slots connections
	connect( OKButton, SIGNAL( clicked() ), this, SLOT( ExitOK() ) );
	connect( CancelB, SIGNAL( clicked() ), this, SLOT( reject() ) );
	connect(pageSizeComboBox, SIGNAL(activated(const QString &)), this, SLOT(setPGsize(const QString &)));
	connect(pageOrientationComboBox, SIGNAL(activated(int)), this, SLOT(setOrien(int)));
	connect(unitOfMeasureComboBox, SIGNAL(activated(int)), this, SLOT(setUnit(int)));
	connect(Distance, SIGNAL(valueChanged(double)), this, SLOT(setDist(double)));
	connect(autoTextFrame, SIGNAL(clicked()), this, SLOT(handleAutoFrame()));
	connect(layoutsView, SIGNAL(itemClicked(QListWidgetItem *)), this, SLOT(itemSelected(QListWidgetItem* )));
	connect(layoutsView, SIGNAL(itemDoubleClicked(QListWidgetItem *)), this, SLOT(itemSelected(QListWidgetItem* )));
	connect(layoutsView, SIGNAL(itemActivated(QListWidgetItem *)), this, SLOT(itemSelected(QListWidgetItem* )));
	connect(layoutsView, SIGNAL(itemPressed(QListWidgetItem *)), this, SLOT(itemSelected(QListWidgetItem* )));
	if (startUp)
		connect(recentDocListBox, SIGNAL(itemDoubleClicked(QListWidgetItem *)), this, SLOT(recentDocListBox_doubleClicked()));

	setMinimumSize(minimumSizeHint());
 	setMaximumSize(minimumSizeHint());
	resize(minimumSizeHint());
}

void NewDoc::createNewDocPage()
{
	newDocFrame = new QFrame(this);

	pageSizeGroupBox = new QGroupBox(newDocFrame );
	pageSizeGroupBox->setTitle( tr( "Document Layout" ) );
	pageSizeGroupBoxLayout = new QGridLayout( pageSizeGroupBox );
	pageSizeGroupBoxLayout->setMargin(10);
	pageSizeGroupBoxLayout->setSpacing(5);
	pageSizeGroupBoxLayout->setAlignment( Qt::AlignTop );

	layoutsView = new PageLayoutsWidget( pageSizeGroupBox );
	layoutsView->setSizePolicy(QSizePolicy::Expanding, QSizePolicy::Maximum);
	for (int pg = 0; pg < prefsManager->appPrefs.pageSets.count(); ++pg)
	{
		QListWidgetItem *ic;
		QString psname=CommonStrings::translatePageSetString(prefsManager->appPrefs.pageSets[pg].Name);
		if (pg == 0)
		{
			ic = new QListWidgetItem( QIcon(loadIcon("32/page-simple.png")), psname, layoutsView );
			ic->setFlags(Qt::ItemIsSelectable | Qt::ItemIsEnabled);
		}
		else if (pg == 1)
		{
			ic = new QListWidgetItem( QIcon(loadIcon("32/page-doublesided.png")), psname, layoutsView );
			ic->setFlags(Qt::ItemIsSelectable | Qt::ItemIsEnabled);
		}
		else if (pg == 2)
		{
			ic = new QListWidgetItem( QIcon(loadIcon("32/page-3fold.png")), psname, layoutsView );
			ic->setFlags(Qt::ItemIsSelectable | Qt::ItemIsEnabled);
		}
		else if (pg == 3)
		{
			ic = new QListWidgetItem( QIcon(loadIcon("32/page-4fold.png")), psname, layoutsView );
			ic->setFlags(Qt::ItemIsSelectable | Qt::ItemIsEnabled);
		}
		else
		{
			ic = new QListWidgetItem( QIcon(loadIcon("32/page-simple.png")), psname, layoutsView );
			ic->setFlags(Qt::ItemIsSelectable | Qt::ItemIsEnabled);
		}
	}
	layoutsView->arrangeIcons();
	pageSizeGroupBoxLayout->addWidget( layoutsView, 0, 0, 5, 1 );
	layoutsView->arrangeIcons();


	TextLabel1 = new QLabel( tr( "&Size:" ), pageSizeGroupBox, "TextLabel1" );
	pageSizeGroupBoxLayout->addWidget( TextLabel1, 0, 1 );
	PageSize ps(prefsManager->appPrefs.pageSize);
	pageSizeComboBox = new QComboBox( true, pageSizeGroupBox, "pageSizeComboBox" );
	pageSizeComboBox->insertStringList(ps.sizeTRList());
	pageSizeComboBox->insertItem( CommonStrings::trCustomPageSize );
	pageSizeComboBox->setEditable(false);
	TextLabel1->setBuddy(pageSizeComboBox);
	pageSizeGroupBoxLayout->addWidget(pageSizeComboBox, 0, 2 );
	TextLabel2 = new QLabel( tr( "Orie&ntation:" ), pageSizeGroupBox, "TextLabel2" );
	pageSizeGroupBoxLayout->addWidget( TextLabel2, 1, 1 );
	pageOrientationComboBox = new QComboBox( true, pageSizeGroupBox, "pageOrientationComboBox" );
	pageOrientationComboBox->insertItem( tr( "Portrait" ) );
	pageOrientationComboBox->insertItem( tr( "Landscape" ) );
	pageOrientationComboBox->setEditable(false);
	pageOrientationComboBox->setCurrentItem(prefsManager->appPrefs.pageOrientation);
	TextLabel2->setBuddy(pageOrientationComboBox);
	pageSizeGroupBoxLayout->addWidget( pageOrientationComboBox, 1, 2 );

	TextLabel1_2 = new QLabel( tr( "&Width:" ), pageSizeGroupBox, "TextLabel1_2" );
	pageSizeGroupBoxLayout->addWidget(TextLabel1_2, 2, 1 );
	widthSpinBox = new ScrSpinBox( 1, 10000, pageSizeGroupBox, unitIndex );
	widthSpinBox->setSuffix(unitSuffix);
	TextLabel1_2->setBuddy(widthSpinBox);
	pageSizeGroupBoxLayout->addWidget(widthSpinBox, 2, 2 );
	TextLabel2_2 = new QLabel( tr( "&Height:" ), pageSizeGroupBox, "TextLabel2_2" );
	pageSizeGroupBoxLayout->addWidget(TextLabel2_2, 3, 1 );
	heightSpinBox = new ScrSpinBox( 1, 10000, pageSizeGroupBox, unitIndex );
	heightSpinBox->setSuffix(unitSuffix);
	TextLabel2_2->setBuddy(heightSpinBox);
	pageSizeGroupBoxLayout->addWidget(heightSpinBox, 3, 2 );
	layoutLabel1 = new QLabel( pageSizeGroupBox, "layoutLabel1" );
	layoutLabel1->setText( tr( "First Page is:" ) );
	pageSizeGroupBoxLayout->addWidget( layoutLabel1, 4, 1 );
	firstPage = new ScComboBox( false, pageSizeGroupBox, "firstPage" );
	firstPage->clear();
	pageSizeGroupBoxLayout->addWidget( firstPage, 4, 2 );
	selectItem(prefsManager->appPrefs.FacingPages);
	firstPage->setCurrentItem(prefsManager->appPrefs.pageSets[prefsManager->appPrefs.FacingPages].FirstPage);

	MarginStruct marg(prefsManager->appPrefs.margins);
	marginGroup = new MarginWidget(newDocFrame,  tr( "Margin Guides" ), &marg, unitIndex );
	marginGroup->setPageWidthHeight(prefsManager->appPrefs.PageWidth, prefsManager->appPrefs.PageHeight);
	marginGroup->setFacingPages(!(prefsManager->appPrefs.FacingPages == singlePage));
	widthSpinBox->setValue(prefsManager->appPrefs.PageWidth * unitRatio);
	heightSpinBox->setValue(prefsManager->appPrefs.PageHeight * unitRatio);
	QStringList pageSizes=ps.sizeList();
	int sizeIndex=pageSizes.findIndex(ps.nameTR());
	if (sizeIndex!=-1)
		pageSizeComboBox->setCurrentItem(sizeIndex);
	else
		pageSizeComboBox->setCurrentItem(pageSizeComboBox->count()-1);
	marginGroup->setPageSize(pageSizeComboBox->currentText());
	setDS(prefsManager->appPrefs.FacingPages);
	setSize(prefsManager->appPrefs.pageSize);
	setOrien(prefsManager->appPrefs.pageOrientation);
	marginGroup->setNewBleeds(prefsManager->appPrefs.bleeds);

	optionsGroupBox = new QGroupBox( newDocFrame );
	optionsGroupBox->setTitle( tr( "Options" ) );
	optionsGroupBoxLayout = new QGridLayout( optionsGroupBox );
	optionsGroupBoxLayout->setSpacing( 5 );
	optionsGroupBoxLayout->setMargin( 10 );
	optionsGroupBoxLayout->setAlignment( Qt::AlignTop );
	pageCountLabel = new QLabel( tr( "N&umber of Pages:" ), optionsGroupBox, "pageCountLabel" );

	pageCountSpinBox = new QSpinBox( optionsGroupBox, "pageCountSpinBox" );
	pageCountSpinBox->setMaxValue( 10000 );
	pageCountSpinBox->setMinValue( 1 );
	pageCountLabel->setBuddy(pageCountSpinBox);
	unitOfMeasureLabel = new QLabel( tr( "&Default Unit:" ), optionsGroupBox, "unitOfMeasureLabel" );
	unitOfMeasureComboBox = new QComboBox( true, optionsGroupBox, "unitOfMeasureComboBox" );
	unitOfMeasureComboBox->insertStringList(unitGetTextUnitList());
	unitOfMeasureComboBox->setCurrentItem(unitIndex);
	unitOfMeasureComboBox->setEditable(false);
	unitOfMeasureLabel->setBuddy(unitOfMeasureComboBox);
	optionsGroupBoxLayout->addWidget( pageCountLabel, 0, 0 );
	optionsGroupBoxLayout->addWidget( pageCountSpinBox, 0, 1 );
	optionsGroupBoxLayout->addWidget( unitOfMeasureLabel, 1, 0 );
	optionsGroupBoxLayout->addWidget( unitOfMeasureComboBox, 1, 1 );

	autoTextFrame = new QCheckBox( optionsGroupBox, "autoTextFrame" );
	autoTextFrame->setText( tr( "&Automatic Text Frames" ) );
	optionsGroupBoxLayout->addWidget( autoTextFrame, 2, 0, 1, 2 );
	TextLabel3 = new QLabel( tr( "Colu&mns:" ), optionsGroupBox, "TextLabel3" );
	optionsGroupBoxLayout->addWidget( TextLabel3, 3, 0 );
	numberOfCols = new QSpinBox( optionsGroupBox, "numberOfCols" );
	numberOfCols->setButtonSymbols( QSpinBox::UpDownArrows );
	numberOfCols->setMinValue( 1 );
	numberOfCols->setValue( 1 );
	TextLabel3->setBuddy(numberOfCols);
	optionsGroupBoxLayout->addWidget( numberOfCols, 3, 1);

	TextLabel4 = new QLabel( tr( "&Gap:" ), optionsGroupBox, "TextLabel4" );
	optionsGroupBoxLayout->addWidget( TextLabel4, 4, 0 );
	Distance = new ScrSpinBox( 0, 1000, optionsGroupBox, unitIndex );
	Distance->setValue(11 * unitRatio);
	Dist = 11;
	optionsGroupBoxLayout->addWidget( Distance, 4, 1);
	TextLabel4->setBuddy(Distance);

	TextLabel3->setEnabled(false);
	TextLabel4->setEnabled(false);
	Distance->setEnabled(false);
	numberOfCols->setEnabled(false);
	startDocSetup = new QCheckBox( optionsGroupBox, "startDocSetup" );
	startDocSetup->setText( tr( "Show Document Settings After Creation" ) );
	startDocSetup->setChecked(false);
	optionsGroupBoxLayout->addWidget( startDocSetup, 5, 0, 1, 2 );

	NewDocLayout = new QGridLayout( newDocFrame );
	NewDocLayout->setMargin(10);
	NewDocLayout->setSpacing(5);
	NewDocLayout->addWidget( marginGroup, 1, 0 );
	NewDocLayout->addWidget( optionsGroupBox, 1, 1 );
	NewDocLayout->addWidget( pageSizeGroupBox, 0, 0, 1, 2);
}

void NewDoc::createOpenDocPage()
{
	PrefsContext* docContext = prefsManager->prefsFile->getContext("docdirs", false);
	QString docDir = ".";
	QString prefsDocDir=prefsManager->documentDir();
	if (!prefsDocDir.isEmpty())
		docDir = docContext->get("docsopen", prefsDocDir);
	else
		docDir = docContext->get("docsopen", ".");
	QString formats(FileLoader::getLoadFilterString());
	formats.remove("PDF (*.pdf *.PDF);;");
	openDocFrame = new QFrame(this);
	openDocLayout = new QVBoxLayout(openDocFrame);
	openDocLayout->setMargin(5);
	openDocLayout->setSpacing(5);
	selectedFile = "";
#if QT_VERSION  >= 0x040300
	fileDialog = new QFileDialog(openDocFrame, tr("Open"), docDir, formats);
	fileDialog->setFileMode(QFileDialog::ExistingFile);
	fileDialog->setAcceptMode(QFileDialog::AcceptOpen);
	fileDialog->setReadOnly(true);
#else
	fileDialog = new CustomFDialog(openDocFrame, docDir, tr("Open"), formats, fdNone);
#endif
	fileDialog->setSizeGripEnabled(false);
	fileDialog->setModal(false);
	QList<QObject*> l = fileDialog->queryList("QPushButton");
	QListIterator<QObject*> it(l);
	QObject *obj;
	while (it.hasNext())
	{
		obj = it.next();
		((QPushButton*)obj)->setVisible(false);
	}
	fileDialog->setWindowFlags(Qt::Widget);
	openDocLayout->addWidget(fileDialog);
#if QT_VERSION  >= 0x040300
	connect(fileDialog, SIGNAL(filesSelected(const QStringList &)), this, SLOT(openFile()));
#else
	connect(fileDialog, SIGNAL(fileSelected (const QString &)), this, SLOT(openFile()));
#endif
}

void NewDoc::openFile()
{
	ExitOK();
}

void NewDoc::createRecentDocPage()
{
	recentDocFrame = new QFrame(this);
	recentDocLayout = new QVBoxLayout(recentDocFrame);
	recentDocLayout->setMargin(5);
	recentDocLayout->setSpacing(5);
	recentDocListBox = new QListWidget(recentDocFrame);
	recentDocLayout->addWidget(recentDocListBox);
	uint max = qMin(prefsManager->appPrefs.RecentDCount, recentDocList.count());
	for (uint m = 0; m < max; ++m)
		recentDocListBox->addItem( QDir::convertSeparators(recentDocList[m]) );
}

void NewDoc::setWidth(double)
{
	pageWidth = widthSpinBox->value() / unitRatio;
	marginGroup->setPageWidth(pageWidth);
	QString psText=pageSizeComboBox->currentText();
	if (psText!=CommonStrings::trCustomPageSize && psText!=CommonStrings::customPageSize)
		pageSizeComboBox->setCurrentItem(pageSizeComboBox->count()-1);
}

void NewDoc::setHeight(double)
{
	pageHeight = heightSpinBox->value() / unitRatio;
	marginGroup->setPageHeight(pageHeight);
	QString psText=pageSizeComboBox->currentText();
	if (psText!=CommonStrings::trCustomPageSize && psText!=CommonStrings::customPageSize)
		pageSizeComboBox->setCurrentItem(pageSizeComboBox->count()-1);
}

void NewDoc::selectItem(uint nr)
{
	disconnect(layoutsView, SIGNAL(itemClicked(QListWidgetItem *)), this, SLOT(itemSelected(QListWidgetItem* )));
	disconnect(layoutsView, SIGNAL(itemDoubleClicked(QListWidgetItem *)), this, SLOT(itemSelected(QListWidgetItem* )));
	disconnect(layoutsView, SIGNAL(itemActivated(QListWidgetItem *)), this, SLOT(itemSelected(QListWidgetItem* )));
	disconnect(layoutsView, SIGNAL(itemPressed(QListWidgetItem *)), this, SLOT(itemSelected(QListWidgetItem* )));
	if (nr > 0)
	{
		firstPage->setEnabled(true);
		firstPage->clear();
		QStringList::Iterator pNames;
		for(pNames = prefsManager->appPrefs.pageSets[nr].pageNames.begin(); pNames != prefsManager->appPrefs.pageSets[nr].pageNames.end(); ++pNames )
		{
			firstPage->insertItem(CommonStrings::translatePageSetLocString((*pNames)));
		}
	}
	else
	{
		firstPage->clear();
		firstPage->insertItem(" ");
		firstPage->setEnabled(false);
	}
	layoutsView->setCurrentRow(nr);
	layoutsView->item(nr)->setSelected(true);
	connect(layoutsView, SIGNAL(itemClicked(QListWidgetItem *)), this, SLOT(itemSelected(QListWidgetItem* )));
	connect(layoutsView, SIGNAL(itemDoubleClicked(QListWidgetItem *)), this, SLOT(itemSelected(QListWidgetItem* )));
	connect(layoutsView, SIGNAL(itemActivated(QListWidgetItem *)), this, SLOT(itemSelected(QListWidgetItem* )));
	connect(layoutsView, SIGNAL(itemPressed(QListWidgetItem *)), this, SLOT(itemSelected(QListWidgetItem* )));
}

void NewDoc::itemSelected(QListWidgetItem* ic)
{
	if (ic == 0)
		return;
	selectItem(layoutsView->row(ic));
	setDS(layoutsView->row(ic));
}

void NewDoc::handleAutoFrame()
{
	if (autoTextFrame->isChecked())
	{
		TextLabel3->setEnabled(true);
		TextLabel4->setEnabled(true);
		Distance->setEnabled(true);
		numberOfCols->setEnabled(true);
	}
	else
	{
		TextLabel3->setEnabled(false);
		TextLabel4->setEnabled(false);
		Distance->setEnabled(false);
		numberOfCols->setEnabled(false);
	}
}

void NewDoc::setDist(double)
{
	Dist = Distance->value() / unitRatio;
}

void NewDoc::setUnit(int newUnitIndex)
{
	disconnect(widthSpinBox, SIGNAL(valueChanged(double)), this, SLOT(setWidth(double)));
	disconnect(heightSpinBox, SIGNAL(valueChanged(double)), this, SLOT(setHeight(double)));
	widthSpinBox->setNewUnit(newUnitIndex);
	heightSpinBox->setNewUnit(newUnitIndex);
	Distance->setNewUnit(newUnitIndex);
	unitRatio = unitGetRatioFromIndex(newUnitIndex);
	unitIndex = newUnitIndex;
/*	
double oldUnitRatio = unitRatio;
	double val, oldB, oldBM, oldH, oldHM;
	int decimals;
	widthSpinBox->getValues(&oldB, &oldBM, &decimals, &val);
	oldB /= oldUnitRatio;
	oldBM /= oldUnitRatio;
	heightSpinBox->getValues(&oldH, &oldHM, &decimals, &val);
	oldH /= oldUnitRatio;
	oldHM /= oldUnitRatio;

	unitIndex = newUnitIndex;
	unitRatio = unitGetRatioFromIndex(newUnitIndex);
	decimals = unitGetDecimalsFromIndex(newUnitIndex);
	if (pageOrientationComboBox->currentItem() == portraitPage)
	{
		widthSpinBox->setValues(oldB * unitRatio, oldBM * unitRatio, decimals, pageWidth * unitRatio);
		heightSpinBox->setValues(oldH * unitRatio, oldHM * unitRatio, decimals, pageHeight * unitRatio);
	}
	else
	{
		widthSpinBox->setValues(oldB * unitRatio, oldBM * unitRatio, decimals, pageHeight * unitRatio);
		heightSpinBox->setValues(oldH * unitRatio, oldHM * unitRatio, decimals, pageWidth * unitRatio);
	}
	Distance->setValue(Dist * unitRatio);
	unitSuffix = unitGetSuffixFromIndex(newUnitIndex);
	widthSpinBox->setSuffix(unitSuffix);
	heightSpinBox->setSuffix(unitSuffix);
	Distance->setSuffix( unitSuffix );
*/
	marginGroup->setNewUnit(unitIndex);
	marginGroup->setPageHeight(pageHeight);
	marginGroup->setPageWidth(pageWidth);
	connect(widthSpinBox, SIGNAL(valueChanged(double)), this, SLOT(setWidth(double)));
	connect(heightSpinBox, SIGNAL(valueChanged(double)), this, SLOT(setHeight(double)));

}

void NewDoc::ExitOK()
{
	pageWidth = widthSpinBox->value() / unitRatio;
	pageHeight = heightSpinBox->value() / unitRatio;
	bleedBottom = marginGroup->bottomBleed();
	bleedTop = marginGroup->topBleed();
	bleedLeft = marginGroup->leftBleed();
	bleedRight = marginGroup->rightBleed();
	if (onStartup)
	{
		tabSelected = tabWidget->currentIndex();
#if QT_VERSION  >= 0x040300
		QStringList files = fileDialog->selectedFiles();
		if (files.count() != 0)
			selectedFile = files[0];
#else
		selectedFile = fileDialog->selectedFile();
#endif
	}
	else
		tabSelected = 0;
	accept();
}

void NewDoc::setOrien(int ori)
{
	double br;
	disconnect(widthSpinBox, SIGNAL(valueChanged(double)), this, SLOT(setWidth(double)));
	disconnect(heightSpinBox, SIGNAL(valueChanged(double)), this, SLOT(setHeight(double)));
	if (ori != Orient)
	{
		br = widthSpinBox->value();
		widthSpinBox->setValue(heightSpinBox->value());
		heightSpinBox->setValue(br);
	}
	// #869 pv - defined constants added + code repeat (check w/h)
	(ori == portraitPage) ? Orient = portraitPage : Orient = landscapePage;
	if (pageSizeComboBox->currentText() == CommonStrings::trCustomPageSize)
	{
		if (widthSpinBox->value() > heightSpinBox->value())
			pageOrientationComboBox->setCurrentItem(landscapePage);
		else
			pageOrientationComboBox->setCurrentItem(portraitPage);
	}
	// end of #869
	marginGroup->setPageHeight(pageHeight);
	marginGroup->setPageWidth(pageWidth);
	connect(widthSpinBox, SIGNAL(valueChanged(double)), this, SLOT(setWidth(double)));
	connect(heightSpinBox, SIGNAL(valueChanged(double)), this, SLOT(setHeight(double)));
}

void NewDoc::setPGsize(const QString &size)
{
	if (size == CommonStrings::trCustomPageSize)
		setSize(size);
	else
	{
		setSize(size);
		setOrien(pageOrientationComboBox->currentItem());
	}
	marginGroup->setPageSize(size);
}

void NewDoc::setSize(QString gr)
{
	pageWidth = widthSpinBox->value() / unitRatio;
	pageHeight = heightSpinBox->value() / unitRatio;

	disconnect(widthSpinBox, SIGNAL(valueChanged(double)), this, SLOT(setWidth(double)));
	disconnect(heightSpinBox, SIGNAL(valueChanged(double)), this, SLOT(setHeight(double)));
	if (gr==CommonStrings::trCustomPageSize || gr==CommonStrings::customPageSize)
	{
		widthSpinBox->setEnabled(true);
		heightSpinBox->setEnabled(true);
	}
	else
	{
		PageSize *ps2=new PageSize(gr);
		if (pageOrientationComboBox->currentItem() == portraitPage)
		{
			pageWidth = ps2->width();
			pageHeight = ps2->height();
		} else {
			pageWidth = ps2->height();
			pageHeight = ps2->width();
		}
		delete ps2;
	}
	widthSpinBox->setValue(pageWidth * unitRatio);
	heightSpinBox->setValue(pageHeight * unitRatio);
	marginGroup->setPageHeight(pageHeight);
	marginGroup->setPageWidth(pageWidth);
	connect(widthSpinBox, SIGNAL(valueChanged(double)), this, SLOT(setWidth(double)));
	connect(heightSpinBox, SIGNAL(valueChanged(double)), this, SLOT(setHeight(double)));
}

void NewDoc::setDS(int layout)
{
	marginGroup->setFacingPages(!(layout == singlePage));
	choosenLayout = layout;
	firstPage->setCurrentItem(prefsManager->appPrefs.pageSets[choosenLayout].FirstPage);
}

void NewDoc::recentDocListBox_doubleClicked()
{
	/* Yep. There is nothing to solve. ScribusMainWindow handles all
	openings etc. It's Franz's programming style ;) */
	ExitOK();
}
