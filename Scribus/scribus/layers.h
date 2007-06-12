/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef LAYERPALETTE_H
#define LAYERPALETTE_H

#include <QList>

#include "scribusapi.h"
#include "scrpalettebase.h"
#include "scribusstructs.h"

class QHBoxLayout;
class QVBoxLayout;
class QSpinBox;
class QLabel;
class CheckBox;
class QToolButton;
class QPushButton;
class QTableWidget;
class QTableWidgetItem;
class QHeaderView;
class ScComboBox;
class ScribusDoc;

class SCRIBUS_API LayerPalette : public ScrPaletteBase
{
	Q_OBJECT

public:
	LayerPalette(QWidget* parent);
	~LayerPalette() {};

	void setDoc(ScribusDoc* doc);
	void rebuildList();
	
	QTableWidget* Table;	//public for the event filter in scribus.cpp.. TODO

public slots:
	void addLayer();
	void dupLayer();
	void removeLayer();
	void upLayer();
	void downLayer();
	void changeName(int row, int col);
	void visibleLayer();
	void printLayer();
	void lockLayer();
	void flowToggleLayer();
	void outlineToggleLayer();
	void markLayer();
	void changeOpacity();
	void changeBlendMode(int blend);
	void setActiveLayer(int row);
	void ClearInhalt();
	void markActiveLayer(int layerNumber=-1);
	void languageChange();

signals:
	void LayerChanged();
	void LayerActivated(int);

protected:
	ScribusDoc* m_Doc;
	QVBoxLayout* LayerPaletteLayout;
	QHBoxLayout* Layout1;
	QHBoxLayout* layout1;
	QLabel* textLabel1;
	ScComboBox* blendMode;
	QLabel* textLabel2;
	QSpinBox* opacitySpinBox;
	QHeaderView* Header;
	QPushButton* newLayerButton;
	QPushButton* duplicateLayerButton;
	QPushButton* deleteLayerButton;
	QPushButton* raiseLayerButton;
	QPushButton* lowerLayerButton;
	QList<Layer> *layers;
};

#endif // LAYERPALETTE_H
