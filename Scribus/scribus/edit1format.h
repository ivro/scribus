/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef EDITSTYLE_H
#define EDITSTYLE_H

#include <qdialog.h>
#include <qbuttongroup.h>
#include <qlabel.h>
#include <qlineedit.h>
#include <qpushbutton.h>
#include <qradiobutton.h>
#include <qspinbox.h>
#include <qlayout.h>
#include <qtooltip.h>
#include <qcheckbox.h>
#include <qcombobox.h>

#include "scribusapi.h"
#include "scribusstructs.h"
#include "mspinbox.h"
#include "fontcombo.h"
#include "colorcombo.h"
#include "alignselect.h"
#include "shadebutton.h"
#include "styles/styleset.h"

class ScribusDoc;
class StyleSelect;
class Tabruler;
class SampleItem;
class PrefsContext;


/*! \brief GUI dialog for Paragraph Style setting.
*/
class SCRIBUS_API EditStyle : public QDialog
{
	Q_OBJECT

public:
	EditStyle( QWidget* parent, ParagraphStyle *vor, const StyleSet<ParagraphStyle>& v, bool neu,
	           double au, int dEin, ScribusDoc *doc);
	~EditStyle();

	QLabel* TextLabel1;
	QLabel* TextLabel1_2_2;
	QLabel* TextLabel1_2_3;
	QLabel* pixmapLabel3;
	QLabel* pixmapLabel3_3;
	QLabel* pixmapLabel2;
	QLabel* pixmapLabel3_2;
	QLabel* pixmapLabel3_20;
	QLabel* pixmapLabel3_20_3;
	QLabel* pixmapLabel3_19;
	QLineEdit* Name;
	MSpinBox* fontHScale;
	MSpinBox* fontVScale;
	MSpinBox* LineSpVal;
	MSpinBox* fontBase;
	MSpinBox* fontKern;
	QPopupMenu* lineSpacingPop;
	QToolButton* linespacingButton;
	Tabruler* TabList;
	MSpinBox* AboveV;
	MSpinBox* BelowV;
	StyleSelect* EffeS;
	AlignSelect* AligS;
	QGroupBox* GroupBox10;
	QGroupBox* AbstandV;
	QGroupBox* GroupFont;
	FontComboH* FontC;
	MSpinBox* SizeC;
	QLabel* TextF2;
	QLabel* StrokeIcon;
	ColorCombo* TxStroke;
	ShadeButton *PM1;
	QLabel* FillIcon;
	ColorCombo* TxFill;
	ShadeButton *PM2;
	QGroupBox* DropCaps;
	QLabel* CapLabel;
	QSpinBox* DropLines;
	QLabel* CapLabel2;
	MSpinBox* DropDist;
	QPushButton* Cancel;
	QPushButton* OkButton;
	ParagraphStyle *werte;
	const StyleSet<ParagraphStyle>& allV;
	QString OldName;
	bool IsNew;
	double AutoVal;
	int DocsEin;
	PrefsContext* prefs;
	//! \brief Label for holding "style preview" bitmap 12/30/2004 petr vanek
	QLabel *previewText;
	QCheckBox *previewCaption;
	//! \brief Preview background
	QPushButton *previewBgColor;
	//! \brief Reference to the own ScribusDoc (preferences etc.) 12/30/2004 petr vanek
	ScribusDoc *parentDoc;

private slots:
	void toggleLsp(int id);
	void Verlassen();
	void FontChange();
	void ColorChange();

	/*! \brief Enables or disables the style previewer */
	void togglePreview();
	/*! \brief Paragraph style preview generator.
	It takes values from the UI form, creates a temporary style.
	This style is appended into global styles list and removed from there
	after finishing. Then is created an item to draw QPixmap with it.
	\author Petr Vanek
	\date 4/7/2005
	 */
	void updatePreview();

	/*! \brief Sets the preview bg with user chosen color. */
	void setPreviewBackground();
	
	/*! \brief Copies the chosen settings into a ParagraphStyle object */
	void copyStyleSettings(ParagraphStyle& parstyle);

protected:
	/*! \brief sample pixmap generator */
	SampleItem *sampleItem;

	QHBoxLayout* Layout17;
	QHBoxLayout* layout5;
	QHBoxLayout* layout6;
	QHBoxLayout* layout7;
	QVBoxLayout* layout8;
	QHBoxLayout* layout9;
	QHBoxLayout* layout9a;
	QHBoxLayout* layout9b;
	QVBoxLayout* layoutPreview;
	QHBoxLayout* layoutPrevSet;
	QVBoxLayout* EditStyleLayout;
	QVBoxLayout* GroupBox10Layout;
	QGridLayout* AbstandVLayout;
	QGridLayout* DropCapsLayout;
	QVBoxLayout* GroupFontLayout;
};

#endif // EDITSTYLE_H
