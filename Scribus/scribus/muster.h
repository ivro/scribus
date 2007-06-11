/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef MUSTERPAGES_H
#define MUSTERPAGES_H

#include <QDialog>
class QListWidget;
class QListWidgetItem;
class QToolButton;
class QHBoxLayout;
class QVBoxLayout;
class QCloseEvent;

#include "scribusapi.h"
class ScribusDoc;
class ScribusView;

class SCRIBUS_API MasterPagesPalette : public QDialog
{
	Q_OBJECT

public:
	MasterPagesPalette( QWidget* parent, ScribusDoc *pCurrentDoc, ScribusView *pCurrentView, QString masterPageName);
	~MasterPagesPalette() {};
	void closeEvent(QCloseEvent *closeEvent);
	void updateMasterPageList(QString MasterPageName);

public slots:
	void selectMasterPage(QString name);

protected slots:
	void reject();

private:
	QListWidget* masterPageListBox;
	QToolButton* importButton;
	QToolButton* newButton;
	QToolButton* duplicateButton;
	QToolButton* deleteButton;
	QToolButton* closeButton;
	ScribusDoc *currentDoc;
	ScribusView *currentView;
	QString sMuster;

protected:
	QVBoxLayout* masterPagesLayout;
	QHBoxLayout* buttonLayout;

private slots:
	void duplicateMasterPage();
	void deleteMasterPage();
	void newMasterPage();
	void renameMasterPage(QListWidgetItem * item);
	void appendPage();
	void selectMasterPage(QListWidgetItem *item);

signals:
	void removePage(int);
	void finished();
};

#endif // MUSTERPAGES_H
