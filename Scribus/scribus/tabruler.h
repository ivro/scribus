/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef TABRULER_H
#define TABRULER_H

#include <qvariant.h>
#include <qwidget.h>
//Added by qt3to4:
#include <Q3HBoxLayout>
#include <QPaintEvent>
#include <Q3GridLayout>
#include <Q3ValueList>
#include <QLabel>
#include <QMouseEvent>
#include <QEvent>
#include <Q3VBoxLayout>

#include "scribusapi.h"
#include "sctextstruct.h"

class Q3VBoxLayout;
class Q3HBoxLayout;
class Q3GridLayout;
class QComboBox;
class QLabel;
class QPushButton;
class ScrSpinBox;
class QToolButton;

class SCRIBUS_API RulerT : public QWidget
{
	Q_OBJECT

public:
	RulerT(QWidget* parent, int ein, Q3ValueList<ParagraphStyle::TabRecord> Tabs, bool ind, double wid);
	~RulerT() {};
	void setTabs(Q3ValueList<ParagraphStyle::TabRecord> Tabs, int dEin);
	void updateTabList();
	bool mousePressed;
	Q3ValueList<ParagraphStyle::TabRecord> tabValues;
	bool haveInd;
	int unitIndex;
	int offset;
	int actTab;
	double leftIndent;
	double firstLine;
	double Width;
	int rulerCode;
	int mouseX;
	int offsetIncrement;

public slots:
	void resetOffsetInc();
	void decreaseOffset();
	void increaseOffset();
	void changeTab(int t);
	void changeTabChar(QChar t);
	void moveTab(double t);
	void moveFirstLine(double t);
	void moveLeftIndent(double t);

signals:
	void tabMoved(double);
	void typeChanged(int);
	void fillCharChanged(QChar);
	void leftIndentMoved(double);
	void firstLineMoved(double);
	void noTabs();
	void newTab();
	void mouseReleased();
	void tabSelected();

protected:
	virtual void paintEvent(QPaintEvent *);
	virtual void mousePressEvent(QMouseEvent *m);
	virtual void mouseReleaseEvent(QMouseEvent *);
	virtual void mouseMoveEvent(QMouseEvent *m);
	virtual void leaveEvent(QEvent*);
	
private:
	double iter, iter2;
};

class SCRIBUS_API Tabruler : public QWidget
{
	Q_OBJECT

public:
	Tabruler( QWidget* parent,
	          bool haveFirst = true,
	          int dEin = 1,
	          Q3ValueList<ParagraphStyle::TabRecord> Tabs = Q3ValueList<ParagraphStyle::TabRecord>(),
	          double wid = -1);
	~Tabruler() {};

	virtual void setTabs(Q3ValueList<ParagraphStyle::TabRecord> Tabs, int dEin);

	Q3ValueList<ParagraphStyle::TabRecord> getTabVals();
	bool haveF;
	double getFirstLine();
	double getLeftIndent();
	double getRightIndent();

public slots:
	void resetOFfL();
	void resetOFfR();
	void clearAll();
	void tabAdded();
	void lastTabRemoved();
	void setTabType(int t);
	void setType();
	void setTabData(double t);
	void setTab();
	void setFirstLineData(double t);
	void setFirstLine();
	void setLeftIndentData(double t);
	void setLeftIndent();
	void setRightIndentData(double t);
	void setRightIndent();
	void setTabFillChar(QChar t);
	void setFillChar();
	void setCustomFillChar(const QString &txt);

signals:
	/*! This signal is emited when is something changed in the tab ruler dialog/widget.
	4/11/2005 pv */
	void tabrulerChanged();

	/** emitted when tabs are changed */
	void tabsChanged();
	/** emitted when left indent is changed */
	void leftIndentChanged(double);
	/** emitted when right indent is changed */
	void rightIndentChanged(double);
	/** emitted when first line is changed */
	void firstLineChanged(double);
	void mouseReleased();

protected:
	Q3VBoxLayout* tabrulerLayout;
	Q3HBoxLayout* layout2;
	Q3HBoxLayout* layout1;
	Q3HBoxLayout* indentLayout;
	Q3VBoxLayout* layout3;
	Q3HBoxLayout *layout4;
	QComboBox* TypeCombo;
	QComboBox* tabFillCombo;
	QLabel* tabFillComboT;
	RulerT* ruler;
	QToolButton* rulerScrollL;
	QToolButton* rulerScrollR;
	QLabel* positionLabel;
	QLabel* firstLineLabel;
	QLabel* leftIndentLabel;
	QLabel* rightIndentLabel;
	ScrSpinBox* tabData;
	ScrSpinBox* firstLineData;
	ScrSpinBox* leftIndentData;
	ScrSpinBox* rightIndentData;
	QPushButton* clearButton;

	double docUnitRatio;
protected slots:
	void slotMouseReleased();
};

#endif // TABRULER_H
