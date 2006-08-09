/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include "smwidgets.h"
#include "smwidgets.moc"
#include <qtooltip.h>

/***********************************************************************/
/***********************************************************************/

SMSpinBox::SMSpinBox(QWidget *parent, const char *name)
: QSpinBox(parent, name),
  hasParent_(false),
  useParentValue_(false),
  pValue_(0)
{
	
}

void SMSpinBox::setValue(int val)
{
	disconnect(this, SIGNAL(valueChanged(int)), this, SLOT(slotValueChanged()));
	hasParent_ = false;
	pValue_ = 0;
	setFont(false);

	QSpinBox::setValue(val);
}

void SMSpinBox::setValue(int val, bool isParentVal)
{
	disconnect(this, SIGNAL(valueChanged(int)), this, SLOT(slotValueChanged()));
	hasParent_ = true;
	pValue_ = val;
	setFont(!isParentVal);

	QSpinBox::setValue(val);
	connect(this, SIGNAL(valueChanged(int)), this, SLOT(slotValueChanged()));
}

void SMSpinBox::setParentValue(int val)
{
	hasParent_ = true;
	pValue_ = val;
}

bool SMSpinBox::useParentValue()
{
	bool ret = useParentValue_;
	useParentValue_ = false;
	return ret;
}

void SMSpinBox::interpretText()
{
	QString t = text();
	if (hasParent_ && (t == "" || t.isEmpty() || t == QString::null))
	{
		useParentValue_ = true;
		setValue(pValue_, true);
	}
}

void SMSpinBox::setFont(bool wantBold)
{
	QFont f(font());
	f.setBold(wantBold);
	QSpinBox::setFont(f);
}

void SMSpinBox::slotValueChanged()
{
	if(hasParent_)
		setFont(true);
}

/***********************************************************************/
/***********************************************************************/

SMMSpinBox::SMMSpinBox(QWidget *pa, int s)
: MSpinBox(pa, s),
  hasParent_(false),
  useParentValue_(false),
  pValue_(0.0)
{
	
}

SMMSpinBox::SMMSpinBox(double minValue, double maxValue, QWidget *pa, int s)
: MSpinBox(minValue, maxValue, pa, s),
  hasParent_(false),
  useParentValue_(false),
  pValue_(0.0)
{
	
}

SMMSpinBox::SMMSpinBox(QWidget *parent, const char * name)
: MSpinBox(parent, name),
  hasParent_(false),
  useParentValue_(false),
  pValue_(0.0)
{
	
}

void SMMSpinBox::setValue(double val)
{
	disconnect(this, SIGNAL(valueChanged(int)), this, SLOT(slotValueChanged()));
	hasParent_ = false;
	pValue_ = 0.0;
	setFont(false);

	MSpinBox::setValue(val);
}

void SMMSpinBox::setValue(double val, bool isParentVal)
{
	disconnect(this, SIGNAL(valueChanged(int)), this, SLOT(slotValueChanged()));
	hasParent_ = true;
	pValue_ = val;
	setFont(!isParentVal);

	MSpinBox::setValue(val);
	connect(this, SIGNAL(valueChanged(int)), this, SLOT(slotValueChanged()));
}

void SMMSpinBox::setParentValue(double val)
{
	hasParent_ = true;
	pValue_ = val;
}

bool SMMSpinBox::useParentValue()
{
	bool ret = useParentValue_;
	useParentValue_ = false;
	return ret;
}

void SMMSpinBox::interpretText()
{
	QString t = text();
	if (hasParent_ && (t == "" || t.isEmpty() || t == QString::null))
	{
		useParentValue_ = true;
		setValue(pValue_, true);
	}
}

void SMMSpinBox::setFont(bool wantBold)
{
	QFont f(font());
	f.setBold(wantBold);
	MSpinBox::setFont(f);
}

void SMMSpinBox::slotValueChanged()
{
	if(hasParent_)
		setFont(true);
}

/***********************************************************************/
/***********************************************************************/

SMScComboBox::SMScComboBox(QWidget *parent, const char *name)
: ScComboBox(parent, name),
  hasParent_(false),
  useParentValue_(false),
  pItem_(0)
{
	
}

SMScComboBox::SMScComboBox(bool rw, QWidget* parent, const char* name)
: ScComboBox(rw, parent, name),
  hasParent_(false),
  useParentValue_(false),
  pItem_(0)
{
	
}

void SMScComboBox::setCurrentItem(int i)
{
	disconnect(this, SIGNAL(highlighted(int)), this, SLOT(currentChanged()));
	setFont(false);
	hasParent_ = false;
	pItem_ = 0;
	ScComboBox::setCurrentItem(i);
}

void SMScComboBox::setCurrentItem(int i, bool isParentValue)
{
	disconnect(this, SIGNAL(highlighted(int)), this, SLOT(currentChanged()));
	hasParent_ = true;
	pItem_ = i;
	setFont(!isParentValue);
	if (!isParentValue)
	{
		useParentValue_ = true;
		insertItem(tr("Use Parent Value"));
	}

	ScComboBox::setCurrentItem(i);
	connect(this, SIGNAL(highlighted(int)), this, SLOT(currentChanged()));
}

void SMScComboBox::setParentItem(int i)
{
	hasParent_ = true;
	pItem_ = i;
}

bool SMScComboBox::useParentValue()
{
	bool ret = false;

	if (useParentValue_ && hasParent_)
	{
		ret = currentItem() == (count() - 1);
		if (ret)
		{
			removeItem(count() - 1);
			setFont(false);
			setCurrentItem(pItem_, true);
			useParentValue_ = false;
		}
	}

	return ret;
}

void SMScComboBox::setFont(bool wantBold)
{
	QFont f(font());
	f.setBold(wantBold);
	ScComboBox::setFont(f);
}

void SMScComboBox::currentChanged()
{
	if (hasParent_ && !useParentValue_)
	{
		setFont(true);
		insertItem(tr("Use Parent Value"));
		useParentValue_ = true;
	}
}

/***********************************************************************/
/***********************************************************************/

SMAlignSelect::SMAlignSelect(QWidget *parent)
: AlignSelect(parent),
  hasParent_(false),
  useParentStyle_(false),
  pStyle_(0)
{
	parentButton = new QToolButton(this, "parentButton");
	parentButton->setMaximumSize( QSize( 22, 22 ) );
	parentButton->setToggleButton( true );
	parentButton->setText(tr("P", "P as in Parent"));
	QToolTip::add(parentButton, tr("Use parent style's alignment instead of overriding it"));
	GroupAlignLayout->addWidget( parentButton, 0, 5 );
	resize(minimumSizeHint());
	parentButton->hide();
}

void SMAlignSelect::setStyle(int i)
{
	disconnect(this, SIGNAL(State(int)), this, SLOT(styleChanged()));
	disconnect(parentButton, SIGNAL(pressed()), this, SLOT(pbPressed()));
	setFont(false);
	hasParent_ = false;
	pStyle_ = 0;
	parentButton->hide();
	AlignSelect::setStyle(i);
}

void SMAlignSelect::setStyle(int i, bool isParentValue)
{
	disconnect(this, SIGNAL(State(int)), this, SLOT(styleChanged()));
	disconnect(parentButton, SIGNAL(pressed()), this, SLOT(pbPressed()));
	hasParent_ = true;
	pStyle_ = i;
	setFont(!isParentValue);
	if (isParentValue)
		parentButton->hide();
	else
		parentButton->show();

	AlignSelect::setStyle(i);
	connect(this, SIGNAL(State(int)), this, SLOT(styleChanged()));
	connect(parentButton, SIGNAL(pressed()), this, SLOT(pbPressed()));
}

void SMAlignSelect::setParentItem(int i)
{
	hasParent_ = true;
	pStyle_ = i;
}

bool SMAlignSelect::useParentValue()
{
	bool ret = useParentStyle_;
	useParentStyle_ = false;
	if (ret)
		setStyle(pStyle_, true);

	return ret;
}

void SMAlignSelect::setFont(bool wantBold)
{
	QFont f(font());
	f.setBold(wantBold);
	parentButton->setFont(f);
}

void SMAlignSelect::styleChanged()
{
	if (hasParent_)
	{
		setFont(true);
		parentButton->show();
	}
}

void SMAlignSelect::pbPressed()
{
	useParentStyle_ = true;
}

/***********************************************************************/
/***********************************************************************/
