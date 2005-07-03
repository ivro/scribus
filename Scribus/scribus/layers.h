/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
#ifndef LAYERPALETTE_H
#define LAYERPALETTE_H

#include <qdialog.h>
#include <qpushbutton.h>
#include <qtable.h>
#include <qlayout.h>
#include <qtooltip.h>
#include <qpixmap.h>
#include <qcheckbox.h>
#include <qheader.h>
#include <qptrlist.h>
#include <qvaluelist.h>
#include <scribusdoc.h>

class LayerTable : public QTable
{
	Q_OBJECT

public:
	LayerTable(QWidget* parent);
	~LayerTable() {};
	void keyPressEvent(QKeyEvent *k);

protected:
	virtual void endEdit ( int row, int col, bool accept, bool replace );

signals:
	void ToggleAllPalettes();
	void Schliessen();
	void updtName(int);
};

class LayerPalette : public QDialog
{
	Q_OBJECT

public:
	LayerPalette(QWidget* parent);
	~LayerPalette() {};

	QTable* Table;
	QHeader* Header;
	QPushButton* NewLayer;
	QPushButton* DeleteLayer;
	QPushButton* RaiseLayer;
	QPushButton* LowerLayer;
	QValueList<Layer> *layers;
	void closeEvent(QCloseEvent *ce);
	void setLayers(QValueList<Layer> *layin, int *act);
	void rebuildList();
	QPtrList<QCheckBox> FlagsPrint;
	QPtrList<QCheckBox> FlagsSicht;
	int *Activ;

public slots:
	void updateName(int r);
	void addLayer();
	void removeLayer();
	void upLayer();
	void downLayer();
	void changeName(int row, int col);
	void visibleLayer();
	void printLayer();
	void setActiveLayer(int row);
	void ClearInhalt();
	void MarkActiveLayer(int l);

signals:
	void LayerRemoved(int, bool);
	void LayerChanged();
	void LayerActivated(int);
	void Schliessen();

protected:
	QVBoxLayout* LayerPaletteLayout;
	QHBoxLayout* Layout1;

protected slots:
	virtual void reject();
};

#endif // LAYERPALETTE_H
