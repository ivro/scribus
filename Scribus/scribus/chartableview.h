/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef CHARTABLEVIEW_H
#define CHARTABLEVIEW_H

#include <QTableView>

class CharTableModel;
class CharZoom;


/*! \brief A visual widget for displaying the unicode glyphs map.
setAcceptDrops() note:
It sets the right-button behaviour too. It enables delete popup
menu when e is true instead of larger preview dialog. The idea:
When user can drop items into it, he could want to delete it too.
\author Petr Vanek <petr@scribus.info>
*/
class CharTableView : public QTableView
{
	Q_OBJECT

	public:
		CharTableView(QWidget * parent = 0);

	signals:
		void selectChar(uint);
		//! \brief When user press the DELETE/BACKSPACE key
		void delChar();

	protected:
		//! \brief Magnify dialog reference
		CharZoom* zoom;
		bool mPressed;
		QPoint mousePos;

		QAction * deleteAct;
		QMenu * actionMenu;

		CharTableModel * model();
		void keyPressEvent(QKeyEvent *k);
		void mouseReleaseEvent(QMouseEvent *m);
		void mousePressEvent(QMouseEvent* e);
		void mouseMoveEvent(QMouseEvent* e);
		// d'n'd
		void dropEvent(QDropEvent *e);
		void dragEnterEvent(QDragEnterEvent * e);
		void dragMoveEvent(QDragMoveEvent *e);

		int currentValue();
		

	private slots:
		void removeCharacter();
};

#endif