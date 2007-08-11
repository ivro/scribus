/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "prefsdialogbase.h"

#include <QHBoxLayout>
#include <QVBoxLayout>
#include <QSpacerItem>
#include <QListWidget>
#include <QListWidgetItem>
#include <QLabel>
#include <QPushButton>
#include <QToolTip>
#include <QFont>
#include <QFileDialog>
#include <QScrollBar>
#include <QStackedWidget>

#include "commonstrings.h"
#include "prefsmanager.h"

#include "util_icon.h"

OptionListWidget::OptionListWidget(QWidget* parent) : QListWidget(parent)
{
	setDragEnabled(false);
	setViewMode(QListView::IconMode);
	setFlow(QListView::TopToBottom);
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
	setHorizontalScrollBarPolicy(Qt::ScrollBarAlwaysOff);
	clear();
	setSizePolicy(QSizePolicy::Fixed, QSizePolicy::Expanding);
}

void OptionListWidget::arrangeIcons()
{
	int maxWidth = 0;
	setWrapping(false);
	QListWidgetItem* ic;
	int startY = 5;
	int scrollBarWidth = 0;
	for (int cc = 0; cc < count(); ++cc)
	{
		ic = item(cc);
		QRect ir = visualItemRect(ic);
		maxWidth = qMax(ir.width(), maxWidth);
	}
	setMaximumWidth(maxWidth+16);
	setResizeMode(QListView::Fixed);
	QList<QScrollBar*> scrollBars = findChildren<QScrollBar*>();
	for (int cc = 0; cc < scrollBars.count(); ++cc)
	{
		if (scrollBars.at(cc)->orientation() == Qt::Vertical)
		{
			scrollBarWidth = scrollBars.at(cc)->height();
			break;
		}
	}
	int startX = qMax((viewport()->width() - scrollBarWidth) / 2, 0);
	for (int cc = 0; cc < count(); ++cc)
	{
		ic = item(cc);
		QRect ir = visualItemRect(ic);
		setPositionForIndex(QPoint(startX - ir.width() / 2, startY), indexFromItem(ic));
		startY += ir.height()+5;
	}
}


PrefsDialogBase::PrefsDialogBase( QWidget* parent ) : QDialog( parent )
{
	setModal(true);
	counter = 0;
	setWindowIcon(QIcon(loadIcon("AppIcon.png")));
	setSizeGripEnabled( true );
	prefsLayout = new QVBoxLayout( this );
	prefsLayout->setMargin(10);
	prefsLayout->setSpacing(5);
	layout3 = new QHBoxLayout;
	layout3->setMargin(0);
	layout3->setSpacing(5);
	prefsSelection = new OptionListWidget( this );
	layout3->addWidget( prefsSelection );
	layout5 = new QVBoxLayout;
	layout5->setMargin(0);
	layout5->setSpacing(5);
	tabNameLabel = new QLabel( this, "tabNameLabel" );
	QFont f(tabNameLabel->font());
	f.setPointSize(f.pointSize()+4);
	f.setBold(true);
	tabNameLabel->setFont(f);
	tabNameLabel->setText("");
	layout5->addWidget( tabNameLabel );
	prefsWidgets = new QStackedWidget( this);
	layout5->addWidget( prefsWidgets );
	layout3->addLayout(layout5);
	prefsLayout->addLayout( layout3 );
	layout4 = new QHBoxLayout;
	layout4->setMargin(0);
	layout4->setSpacing(5);
	saveButton = new QPushButton(this, "saveButton");
	saveButton->setAutoDefault( false );
	saveButton->setDefault( false );
	layout4->addWidget(saveButton);
	QSpacerItem* spacer = new QSpacerItem( 2, 2, QSizePolicy::Expanding, QSizePolicy::Minimum );
	layout4->addItem( spacer );
	backToDefaults = new QPushButton( this, "backToDefaults" );
	backToDefaults->setAutoDefault( false );
	backToDefaults->setDefault( false );
	layout4->addWidget( backToDefaults );
	applyChangesButton = new QPushButton( this, "applyChangesButton" );
	applyChangesButton->setAutoDefault( false );
	applyChangesButton->setDefault( false );
	layout4->addWidget( applyChangesButton );
	buttonOk = new QPushButton( this, "buttonOk" );
	buttonOk->setAutoDefault( false );
	buttonOk->setDefault( false );
	layout4->addWidget( buttonOk );
	buttonCancel = new QPushButton( this, "buttonCancel" );
	buttonCancel->setAutoDefault( false );
	buttonCancel->setDefault( false );
	layout4->addWidget( buttonCancel );
	prefsLayout->addLayout( layout4 );
	languageChange();
	connect(prefsSelection, SIGNAL(itemClicked(QListWidgetItem *)), this, SLOT(itemSelected(QListWidgetItem* )));
	connect( buttonOk, SIGNAL( clicked() ), this, SLOT( accept() ) );
	connect( buttonCancel, SIGNAL( clicked() ), this, SLOT( reject() ) );
	connect(saveButton, SIGNAL(clicked()), this, SLOT(saveButton_clicked()));
}

int PrefsDialogBase::addItem(QString name, QPixmap icon, QWidget *tab)
{
	QListWidgetItem* icx = new QListWidgetItem(icon, name, prefsSelection);
	prefsWidgets->addWidget(tab);
	itemMap.insert(icx, counter);
	counter++;
	return counter-1;
}

void PrefsDialogBase::itemSelected(QListWidgetItem* ic)
{
	if (ic == 0)
		return;
	if (itemMap.contains(ic))
	{
		emit aboutToShow(prefsWidgets->widget(itemMap[ic]));
		prefsWidgets->setCurrentIndex(itemMap[ic]);
		tabNameLabel->setText(ic->text());
	}
}
/*
 *  Sets the strings of the subwidgets using the current
 *  language.
 */
void PrefsDialogBase::languageChange()
{
	buttonOk->setText( CommonStrings::tr_OK );
	buttonCancel->setText( CommonStrings::tr_Cancel );
	saveButton->setText( tr("Export..."));
	backToDefaults->setText( tr( "&Defaults" ) );
	applyChangesButton->setText( tr("&Apply"));
	QToolTip::add(backToDefaults, "<qt>" + tr("All preferences can be reset here") + "</qt>");
	QToolTip::add(applyChangesButton, "<qt>" + tr("Apply all changes without closing the dialog") + "</qt>");
	QToolTip::add(saveButton, "<qt>" + tr("Export current preferences into file") + "</qt>");
}

void PrefsDialogBase::saveButton_clicked()
{
	QString s = QFileDialog::getSaveFileName(
			QDir::currentDirPath(),
			"All Files (*)",
			this,
			"save prefs",
			tr("Save Preferences"));
	if (s.isEmpty())
		return;
	PrefsManager *pm = PrefsManager::instance();
	pm->SavePrefs(s);
}
