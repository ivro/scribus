/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef STILFORMATE_H
#define STILFORMATE_H

#include <qdialog.h>
#include <qlistbox.h>
#include <qlistview.h>
#include <qpushbutton.h>
#include <qlayout.h>
#include <qtooltip.h>
#include <qmap.h>
#include <qlabel.h>
#include "scribusapi.h"
#include "scribusstructs.h"
#include "styles/styleset.h"

class ScribusDoc;
class ScComboBox;

/*! \brief Dialog to replace deleted style with one existing */
class SCRIBUS_API DelStyle : public QDialog
{
	Q_OBJECT

public:
	DelStyle(QWidget* parent, StyleSet<ParagraphStyle>& sty, QString styleName);
	~DelStyle() {};
	const QString getReplacementStyle();

private:
	QLabel* deleteLabel;
	QLabel* styleToDelLabel;
	QLabel* replaceLabel;
	QPushButton* okButton;
	QPushButton* cancelButton;
	ScComboBox* replacementStyleData;
	QVBoxLayout* dialogLayout;
	QGridLayout* delStyleLayout;
	QHBoxLayout* okCancelLayout;

	QString replacementStyle;

private slots:
	virtual void ReplaceStyle(int);
};


class SCRIBUS_API ChooseStyles : public QDialog
{
	Q_OBJECT

public:
	ChooseStyles( QWidget* parent, StyleSet<ParagraphStyle> *styleList, StyleSet<ParagraphStyle> *styleOld );
	~ChooseStyles() {};

	QListView* StyleView;
	QPushButton* OkButton;
	QPushButton* CancelButton;
	QMap<QCheckListItem*, int> storedStyles;

protected:
	QVBoxLayout* ChooseStylesLayout;
	QHBoxLayout* layout2;

};


class SCRIBUS_API StilFormate : public QDialog
{
	Q_OBJECT

public:
	StilFormate( QWidget* parent, ScribusDoc *doc);
	//~StilFormate() {};

	QListBox* ListBox1;
	QPushButton* LoadS;
	QPushButton* NewB;
	QPushButton* EditB;
	QPushButton* DublicateB;
	QPushButton* DeleteB;
	QPushButton* SaveB;
	QPushButton* ExitB;
	QPushButton* CancelB;
	int sFnumber;
	StyleSet<ParagraphStyle> TempVorl;
	QMap<QString, QString> ReplaceList;
	ScribusDoc *Docu;
	void UpdateFList();

public slots:
	void saveIt();
	void selFormat(QListBoxItem *c);
	void selEditFormat(QListBoxItem *c);
	void editFormat();
	void neuesFormat();
	void dupFormat();
	void deleteFormat();
	void loadStyles();

signals:
	void saveStyle(StilFormate *);

protected:
	QHBoxLayout* StilFormateLayout;
	QVBoxLayout* Layout15;
};

#endif // STILFORMATE_H
