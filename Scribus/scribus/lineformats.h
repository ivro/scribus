/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef LINEFORMATE_H
#define LINEFORMATE_H

#include <qdialog.h>

#include "scribusapi.h"
#include "multiline.h"
#include "scribusstructs.h"

class QListBox;
class QPushButton;
class QVBoxLayout;
class QHBoxLayout;
class ScribusDoc;

class SCRIBUS_API LineFormate : public QDialog
{
	Q_OBJECT

public:
	LineFormate( QWidget* parent, ScribusDoc *doc);
	~LineFormate() {};

	QListBox* ListBox1;
	QPushButton* LoadLS;
	QPushButton* NewB;
	QPushButton* EditB;
	QPushButton* DublicateB;
	QPushButton* DeleteB;
	QPushButton* SaveB;
	QPushButton* ExitB;
	QPushButton* CancelB;
	QString sFnumber;
	QMap<QString,multiLine> TempStyles;
	QMap<QString,QString> Replacement;
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
	void loadLStyles();

signals:
	void saveStyle(LineFormate *);
	
protected:
	QHBoxLayout* StilFormateLayout;
	QVBoxLayout* Layout15;
};

class SCRIBUS_API LineFormateItem : public QListBoxItem
{
public:
	LineFormateItem(ScribusDoc* Doc, const multiLine& MultiLine, const QString& Text);
	virtual int	width( const QListBox * )  const;
	virtual int	height( const QListBox * ) const;
	virtual void paint( QPainter * );
	virtual int rtti() const { return 148523874; }
protected:
	multiLine mLine;
	ScribusDoc* doc;
};

#endif
