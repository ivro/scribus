/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "hysettings.h"
#include "QToolTip"
#include "sccombobox.h"
#include "scribusdoc.h"

HySettings::HySettings( QWidget* parent, QMap<QString,QString>* langs ) : QWidget( parent, "Settings" )
{
	langsMap = *langs;

	layout3 = new QGridLayout( this );
	layout3->setMargin(0);
	layout3->setSpacing(5);
	layout3->setAlignment( Qt::AlignTop );
	verbose = new QCheckBox( tr("&Hyphenation Suggestions"), this, "Verbose");
	layout3->addWidget(verbose, 0, 0, 1, 2);
	
	input = new QCheckBox( tr("Hyphenate Text Automatically &During Typing"), this, "inp");
	layout3->addWidget(input, 1, 0, 1, 2);
	
		// languages
// 	langMgr.init();
// 	QStringList languageList;
// 	langMgr.fillInstalledStringList(&languageList, true);
// 	languageList.sort();
// 	guiLangCombo->insertStringList( languageList );
	
	language = new ScComboBox( false, this, "Language" );
	QMap<QString,QString>::Iterator it;
	QStringList lada;
	for (it = langs->begin(); it != langs->end(); ++it)
		lada.append(it.data());
	lada.sort();
	language->insertStringList(lada);
	text1 = new QLabel( language, tr( "&Language:" ), this, "Text1" );
	layout3->addWidget( text1, 2, 0 );
	layout3->addWidget( language, 2, 1, Qt::AlignLeft );
	
	wordLen = new QSpinBox( this, "WordLen" );
	wordLen->setMinValue( 3 );
	text2 = new QLabel( wordLen, tr( "&Smallest Word:" ), this, "Text2" );
	layout3->addWidget( text2, 3, 0 );
	layout3->addWidget( wordLen, 3, 1, Qt::AlignLeft );
	
	maxCount = new QSpinBox( this, "MaxCount" );
	maxCount->setMinValue( 0 );
	text3 = new QLabel(maxCount, tr("Consecutive Hyphenations &Allowed:"), this, "Text3");
	layout3->addWidget( text3, 4, 0 );
	layout3->addWidget( maxCount, 4, 1, Qt::AlignLeft);
	
	QToolTip::add( verbose, tr( "A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option." ) );
	QToolTip::add( input, tr("Enables automatic hyphenation of your text while typing."));
	QToolTip::add( wordLen, tr( "Length of the smallest word to be hyphenated." ) );
	QToolTip::add( maxCount, tr( "Maximum number of Hyphenations following each other.\nA value of 0 means unlimited hyphenations." ) );
}

void HySettings::restoreDefaults(struct ApplicationPrefs *prefsData)
{
	verbose->setChecked(!prefsData->Automatic);
	input->setChecked(prefsData->AutoCheck);
	language->setCurrentText(langsMap[prefsData->Language]);
	wordLen->setValue(prefsData->MinWordLen);
	maxCount->setValue(prefsData->HyCount);
	
}

void HySettings::restoreDefaults(ScribusDoc *prefsData)
{
	verbose->setChecked(!prefsData->Automatic);
	input->setChecked(prefsData->AutoCheck);
	language->setCurrentText(langsMap[prefsData->Language]);
	wordLen->setValue(prefsData->MinWordLen);
	maxCount->setValue(prefsData->HyCount);
}
