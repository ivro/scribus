/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
 *   Riku Leino, tsoots@gmail.com                                          *
 ***************************************************************************/

#ifndef NFTDIALOG_H
#define NFTDIALOG_H

#include <utility>
#include <vector>

#include "ui_nftdialog.h"
#include "nftsettings.h"

class QAction;


typedef std::pair<nfttemplate*, QListWidgetItem*> ListItem;


class nftdialog: public QDialog, public Ui::nftdialog
{
	Q_OBJECT

private:
	nftsettings* settings;

	QAction * removeAction;
	QAction * openAction;
	std::vector<ListItem*> iconItems;
	void setupCategories();
	void setupListItems();
	void setupAbout();
public:
	nfttemplate* currentDocumentTemplate;
	nftdialog(QWidget* parent, QString lang, QString templateDir);
	~nftdialog();
private slots: 
	void setTNails();
	void setInfo();
	void getCurrentDocumentTemplate(QListWidgetItem* item);
	void removeTemplate();
};

#endif
