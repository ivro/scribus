/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "tfdia.h"
//#include "tfdia.moc"
#include "prefsmanager.h"
#include "prefsfile.h"
#include <qpixmap.h>
#include <qtooltip.h>
#include <qlabel.h>
#include <q3frame.h>
#include <qrect.h>
//Added by qt3to4:
#include <Q3HBoxLayout>
#include <QResizeEvent>
#include <Q3VBoxLayout>
#include <prefstable.h>
#include <qsizepolicy.h>

#include "commonstrings.h"

extern QPixmap loadIcon(QString nam);

tfDia::tfDia() : QDialog()
{
	setCaption( tr("Create filter"));
	setIcon(loadIcon("AppIcon.png"));
	setMinimumWidth(524);
	prefs = PrefsManager::instance()->prefsFile->getPluginContext("TextFilter");
	setGeometry(prefs->getInt("x", 0),
                prefs->getInt("y", 0),
                prefs->getInt("width", 400),
                prefs->getInt("height", 300));
   	createLayout();
   	resize(width() + 10, height() + 10);
}

void tfDia::createLayout()
{
	currentFilter = "tf_lastUsed";
	currentIndex = 0;
	
	layout = new Q3VBoxLayout(this);

	Q3BoxLayout* layout1 = new Q3HBoxLayout(0, 5, 5, "layout1");
	clearButton = new QPushButton( tr("C&lear"), this, "clearButton");
	layout1->addWidget(clearButton);
	layout1->addStretch(10);
	deleteButton = new QPushButton( tr("&Delete"), this, "deleteButton");
	deleteButton->setEnabled(false);
	layout1->addWidget(deleteButton);
	filtersCombo = new QComboBox(0, this, "filtersCombo");
	filtersCombo->setMinimumSize(QSize(150, 0));
	filtersCombo->setEditable(false);
	filtersCombo->setDuplicatesEnabled(false);
	QToolTip::add(filtersCombo, tr("Choose a previously saved filter"));
	PrefsTable* filterNames = prefs->getTable("tf_Filters");
	filtersCombo->insertItem("");
	for (int i = 0; i < filterNames->height(); ++i)
	{
		QString fname = filterNames->get(i, 0, "");
		fname = fname.right(fname.length() - 3);
		filtersCombo->insertItem(fname);	
	}
	layout1->addWidget(filtersCombo);
	layout->addLayout(layout1);

	Q3BoxLayout* flayout = new Q3HBoxLayout(0,0,0, "flayout");
	Q3Frame* f = new Q3Frame(this, "f");
	f->setFrameStyle(Q3Frame::HLine | Q3Frame::Sunken);
	flayout->addWidget(f);
	layout->addLayout(flayout);

	
	qsv = new Q3ScrollView(this, "qsv");
	Q3VBoxLayout *a1layout = new Q3VBoxLayout(0, 5, 12, "a1layout");
	vbox = new Q3Frame(this);
	vbox->setFixedWidth(qsv->viewport()->width());
	qsv->viewport()->resize(width() - 12, vbox->height());
	a1layout->addWidget(qsv);
	qsv->addChild(vbox);
	layout->addLayout(a1layout);
	
	alayout = new Q3VBoxLayout(vbox, 5,12, "alayout");
	
	createFilter(prefs->getTable("tf_lastUsed"));
	filters[0]->setRemovable((filters.size() >= 2));
	
	Q3BoxLayout* flayout2 = new Q3HBoxLayout(0,0,0, "flayout2");
	Q3Frame* f2 = new Q3Frame(this, "f2");
	f2->setFrameStyle(Q3Frame::HLine | Q3Frame::Sunken);
	flayout2->addWidget(f2);
	layout->addLayout(flayout2);

	Q3BoxLayout* layout2 = new Q3HBoxLayout(0, 5, 5, "layout2");
	saveEdit = new QLineEdit(this, "saveEdit");
	QToolTip::add(saveEdit, tr("Give a name to this filter for saving"));
	layout2->addWidget(saveEdit, 10);
	if (prefs->getBool("save_hint", true))
	{
		saveEdit->setText( tr("Give a name for saving"));
		prefs->set("save_hint", false);
	}
	layout2->addSpacing(20);
	okButton = new QPushButton(CommonStrings::tr_OK, this, "okButton");
	layout2->addWidget(okButton, 0);
	cancelButton = new QPushButton(CommonStrings::tr_Cancel, this, "cancelButton");
	layout2->addWidget(cancelButton, 0);
	layout->addLayout(layout2);
	

	connect(filtersCombo, SIGNAL(activated(const QString&)), this, SLOT(loadFilter(const QString&)));
	connect(clearButton, SIGNAL(clicked()), this, SLOT(clearClicked()));
	connect(deleteButton, SIGNAL(clicked()), this, SLOT(deleteClicked()));
	connect(okButton, SIGNAL(clicked()), this, SLOT(okClicked()));
	connect(cancelButton, SIGNAL(clicked()), this, SLOT(cancelClicked()));
	connect(saveEdit, SIGNAL(textChanged(const QString&)), this, SLOT(saveTextChanged(const QString&)));
}

void tfDia::createFilterRow(tfFilter* after)
{
	tfFilter* tmp = new tfFilter(vbox, "tfFilter");
	if (after == NULL)
	{
		filters.push_back(tmp);
		alayout->addWidget(tmp);
	}
	else
	{
		std::vector<tfFilter*>::iterator it = filters.begin();
		uint i = 0;
		for (i= 0; i < filters.size(); ++i, ++it)
		{
			if (filters[i] == after)
			{
				++it;
				++i;
				break;
			}
		}
		filters.insert(it, tmp);
		alayout->insertWidget(static_cast<int>(i), tmp);
	}
	tmp->show();
	vbox->adjustSize();
	if (filters.size() == 2)
		filters[0]->setRemovable(true);
	else if (filters.size() == 1)
		filters[0]->setRemovable(false);

	connect(tmp, SIGNAL(addClicked(tfFilter*)), this, SLOT(createFilterRow(tfFilter*)));
	connect(tmp, SIGNAL(removeClicked(tfFilter*)), SLOT(removeRow(tfFilter*)));
}

void tfDia::createFilter(PrefsTable* table)
{
	if (table->width() != 10)
		createFilterRow(NULL);
	else
	{
		for (uint i = 0; i < static_cast<uint>(table->height()); ++i)
		{
			tfFilter* tmp = new tfFilter(vbox, "tfFilter",
										 table->getInt(i, 0, 0),
										 table->get(i, 1, ""),
										 table->get(i, 2, ""),
										 table->get(i, 3, ""),
										 table->getInt(i, 4, 0),
										 table->getInt(i, 5, 0),
										 table->getInt(i, 6, 0),
										 table->getBool(i, 7, true),
										 table->getBool(i, 8, true),
										 table->getBool(i, 9, false));
			filters.push_back(tmp);
			alayout->addWidget(tmp);
			tmp->show();
			vbox->adjustSize();
			if (filters.size() == 2)
				filters[0]->setRemovable(true);
			connect(tmp, SIGNAL(addClicked(tfFilter*)), this, SLOT(createFilterRow(tfFilter*)));
			connect(tmp, SIGNAL(removeClicked(tfFilter*)), this, SLOT(removeRow(tfFilter*)));
		}
	}
}

void tfDia::removeRow(tfFilter* tff)
{
	std::vector<tfFilter*>::iterator it = filters.begin();
	for (uint i = 0; i < filters.size(); ++i, ++it)
	{
		if (filters[i] == tff)
		{
			filters[i]->hide();
			delete filters[i];
			filters.erase(it);
		}
	}
	if (filters.size() == 1)
		filters[0]->setRemovable(false);
}

void tfDia::saveTextChanged(const QString& text)
{
	filtersCombo->setCurrentItem(0);
	filtersCombo->setCurrentText(text);
}

void tfDia::clearClicked()
{
	clear();
	createFilterRow(NULL);
}

void tfDia::clear()
{
	for (uint i = 0; i < filters.size(); ++i)
	{
		filters[i]->hide();
		delete filters[i];
	}
	filters.clear();
}

void tfDia::okClicked()
{
	storeLastFilter();
	if ((!saveEdit->text().isEmpty()) && (saveEdit->text() != tr("Give a name to this filter for saving")))
	{
		PrefsTable* savedFilters = prefs->getTable("tf_Filters");
		if (savedFilters->find(0, QString("tf_" + saveEdit->text())) == -1)
			savedFilters->set(savedFilters->height(), 0, QString("tf_" + saveEdit->text()));
		prefs->removeTable("tf_" + saveEdit->text());
		PrefsTable* newFilter = prefs->getTable("tf_" + saveEdit->text());
		for (uint i = 0; i < filters.size(); ++i)
		{
			writeFilterRow(newFilter, i, filters[i]);
		}
	}
	accept();
}

void tfDia::cancelClicked()
{
	storeLastFilter();
	reject();
}

void tfDia::writeFilterRow(PrefsTable* table, int row, tfFilter* filter)
{
	table->set(row, 0, filter->getAction());
	table->set(row, 1, filter->regExp());
	table->set(row, 2, filter->replaceWith());
	table->set(row, 3, filter->getPStyleName());
	table->set(row, 4, filter->getLessThan());
	table->set(row, 5, filter->getMoreThan());
	table->set(row, 6, filter->getStyle());
	table->set(row, 7, filter->removeMatch());
	table->set(row, 8, filter->isEnabled());
	table->set(row, 9, filter->isRegExp());
}

void tfDia::loadFilter(const QString& name)
{
	if (currentFilter == "tf_lastUsed")
		storeLastFilter();
	if (filtersCombo->currentItem() == 0)
	{
		deleteButton->setEnabled(false);
		clear();
		createFilter(prefs->getTable("tf_lastUsed"));
		currentFilter = "tf_lastUsed";
		currentIndex = 0;
	}
	else if (prefs->containsTable("tf_" + name))
	{
		deleteButton->setEnabled(true);
		clear();
		createFilter(prefs->getTable("tf_"+name));
		currentFilter = "tf_" + name;
		currentIndex = filtersCombo->currentItem();
	}
	saveEdit->setText(name);
}

void tfDia::deleteClicked()
{
	if (currentIndex != 0)
	{
		PrefsTable* t = prefs->getTable("tf_Filters");
		t->removeRow(0, currentFilter);
		prefs->removeTable(currentFilter);
		filtersCombo->removeItem(currentIndex);
		filtersCombo->setCurrentItem(0);
		clear();
		saveEdit->setText("");
		deleteButton->setEnabled(false);
		createFilter(prefs->getTable("tf_lastUsed"));
		currentIndex = 0;
		currentFilter = "tf_lastUsed";
	}
}

void tfDia::storeLastFilter()
{
	prefs->removeTable("tf_lastUsed");
	PrefsTable* lastUsed = prefs->getTable("tf_lastUsed");
	for (uint i = 0; i < filters.size(); ++i)
	{
		writeFilterRow(lastUsed, i, filters[i]);
	}
}

void tfDia::resizeEvent(QResizeEvent*)
{
	vbox->setFixedWidth(qsv->viewport()->width());
}

tfDia::~tfDia()
{
	for (uint i = 0; i < filters.size(); ++i)
		delete filters[i];
	QRect r = geometry();
	prefs->set("x", r.x());
	prefs->set("y", r.y());
	prefs->set("width", width());
	prefs->set("height", height());
}
