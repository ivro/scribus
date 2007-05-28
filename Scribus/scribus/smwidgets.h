/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#ifndef SMWIDGETS_H
#define SMWIDGETS_H

#include "scrspinbox.h"
#include "sccombobox.h"
#include "alignselect.h"
#include "styleselect.h"
#include "shadebutton.h"
#include "colorcombo.h"
#include "fontcombo.h"
#include "tabruler.h"
//Added by qt3to4:
#include <Q3ValueList>

class SMSpinBox : public QSpinBox
{
	Q_OBJECT
public:
	SMSpinBox(QWidget *parent, const char *name);
	~SMSpinBox() {};

	void setValue(int val);
	void setValue(int val, bool isParentVal);

	void clear();

	void setParentValue(int val);

	bool useParentValue();

protected:
	void interpretText();

private:
	bool   hasParent_;
	bool   useParentValue_;
	int    pValue_;
	void setFont(bool wantBold);

private slots:
	void slotValueChanged();
};

class SMScrSpinBox : public ScrSpinBox
{
	Q_OBJECT
public:
	SMScrSpinBox(QWidget *pa, int s);
	SMScrSpinBox(double minValue, double maxValue, QWidget *pa, int s);
	SMScrSpinBox(QWidget *parent, const char * name = 0);
	~SMScrSpinBox() {};

	void setValue(double val);
	void setValue(double val, bool isParentVal);

	void clear();

	void setParentValue(double val);

	bool useParentValue();

protected:
	void interpretText();

private:
	bool   hasParent_;
	bool   useParentValue_;
	double pValue_;
	void setFont(bool wantBold);

private slots:
	void slotValueChanged();
};

class SMScComboBox  : public ScComboBox
{
	Q_OBJECT
public:
	SMScComboBox(QWidget *parent, const char *name);
	SMScComboBox(bool rw, QWidget* parent, const char* name);
	~SMScComboBox() {};

	void setCurrentItem(int i);
	void setCurrentItem(int i, bool isParentValue);

	void setParentItem(int i);

	bool useParentValue();

private:
	bool   hasParent_;
	bool   useParentValue_;
	int    pItem_;
	void setFont(bool wantBold);

private slots:
	void currentChanged();
};

class SMAlignSelect : public AlignSelect
{
	Q_OBJECT
public:
	SMAlignSelect(QWidget *parent);
	~SMAlignSelect() {}

	void setStyle(int i);
	void setStyle(int i, bool isParentValue);

	void setParentItem(int i);

	bool useParentValue();

	QToolButton *parentButton;

private:
	bool   hasParent_;
	bool   useParentStyle_;
	int    pStyle_;
	void setFont(bool wantBold);

private slots:
	void styleChanged();
	void pbPressed();
};

class SMStyleSelect  : public StyleSelect
{
	Q_OBJECT
public:
	SMStyleSelect(QWidget *parent);
	~SMStyleSelect() {}

	void setStyle(int i);
	void setStyle(int i, bool isParentValue);

	void setParentItem(int i);

	bool useParentValue();

	QToolButton *parentButton;

private:
	bool   hasParent_;
	bool   useParentStyle_;
	int    pStyle_;
	void setFont(bool wantBold);

private slots:
	void styleChanged();
	void pbPressed();
};

class SMShadeButton  : public ShadeButton
{
	Q_OBJECT
public:
	SMShadeButton(QWidget *parent);
	~SMShadeButton() {};

	void setValue(int i);
	void setValue(int i, bool isParentValue);

	void setParentValue(int i);

	bool useParentValue();

private:
	bool   hasParent_;
	bool   useParentValue_;
	int    pValue_;
	void setFont(bool wantBold);

private slots:
	void currentChanged();
	void slotUseParent();
};

class SMColorCombo  : public ColorCombo
{
	Q_OBJECT
public:
	SMColorCombo(QWidget *parent, const char *name);
	SMColorCombo(bool rw, QWidget* parent, const char* name);
	~SMColorCombo() {};

	void setCurrentItem(int i);
	void setCurrentItem(int i, bool isParentValue);

	void setCurrentText(const QString &s);
	void setCurrentText(const QString &s, bool isParentValue);

	void setParentItem(int i);
	void setParentText(const QString &s);

	bool useParentValue();

private:
	bool   hasParent_;
	bool   useParentValue_;
	int    pItem_;
	QString pText_;
	void setFont(bool wantBold);

private slots:
	void currentChanged();
};

class SMFontComboH  : public FontComboH
{
	Q_OBJECT
public:
	SMFontComboH(QWidget *parent);
	~SMFontComboH() {};
	
	void setCurrentFont(const QString &s);
	void setCurrentFont(const QString &s, bool isParentValue);

	void setParentFont(const QString &s);
	
	bool useParentFont();

private:
	bool   hasParent_;
	bool   useParentValue_;
	QString pFont_;
	QString usePFont_;
	void setFont(bool wantBold);

private slots:
	void currentChanged();
	void checkStyle();
};

class SMTabruler : public Tabruler
{
	Q_OBJECT
public:
	SMTabruler(QWidget* parent,
			   bool haveFirst = true,
			   int dEin = 1,
			   Q3ValueList<ParagraphStyle::TabRecord> Tabs = Q3ValueList<ParagraphStyle::TabRecord>(),
			   double wid = -1);
	~SMTabruler() {};

	void setTabs(Q3ValueList<ParagraphStyle::TabRecord> Tabs, int dEin);
	void setTabs(Q3ValueList<ParagraphStyle::TabRecord> Tabs, int dEin, bool isParentValue);
	void setParentTabs(Q3ValueList<ParagraphStyle::TabRecord> Tabs);

	void setFirstLineValue(double t);
	void setFirstLineValue(double t, bool isParentValue);
	void setParentFirstLine(double t);

	void setLeftIndentValue(double t);
	void setLeftIndentValue(double t, bool isParentValue);
	void setParentLeftIndent(double t);

	void setRightIndentValue(double t);
	void setRightIndentValue(double t, bool isParentValue);
	void setParentRightIndent(double t);

	bool useParentTabs();
	bool useParentFirstLine();
	bool useParentLeftIndent();
	bool useParentRightIndent();

	SMScrSpinBox *first_;
	SMScrSpinBox *left_;
	SMScrSpinBox *right_;

private:
	Q3ValueList<ParagraphStyle::TabRecord> pTabs_;
	int pDein_;
	QToolButton *parentButton_;
	bool hasParent_;
	bool tabsChanged_;
	bool useParentTabs_;
	bool isSetupRight_;
	bool isSetupLeft_;
	bool isSetupFirst_;

private slots:
	void slotTabsChanged();
	void pbClicked();
	void firstDataChanged();
	void leftDataChanged();
	void rightDataChanged();
	void firstValueChanged();
	void leftValueChanged();
	void rightValueChanged();
};

#endif

