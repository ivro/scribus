/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
#include "pdfopts.h"
#include "pdfopts.moc"

#include <qmessagebox.h>

#include "customfdialog.h"
#include "prefsmanager.h"
#include "prefsfile.h"
#include "units.h"
#include "pdfoptions.h"
#include "util.h"
#include "commonstrings.h"
#include "scconfig.h"

PDFExportDialog::PDFExportDialog( QWidget* parent, const QString & docFileName,
								  const QMap<QString, int > & DocFonts,
								  ScribusView *currView, PDFOptions & pdfOptions,
								  const QValueList<PDFPresentationData> & Eff,
								  const ProfilesL & PDFXProfiles, const SCFonts &AllFonts,
								  double unitRatio, const ProfilesL & printerProfiles)
	: QDialog( parent, "pdf", true, 0 ),
	doc(currView->Doc),
	EffVal(Eff),
	Opts(pdfOptions),
	docUnitRatio(unitRatio),
	cmsDescriptorName(""),
	components(3),
	appPrinterProfiles(printerProfiles)
{
	setCaption( tr( "Save as PDF" ) );
	setIcon(loadIcon("AppIcon.png"));
	PDFExportLayout = new QVBoxLayout( this );
	PDFExportLayout->setSpacing( 5 );
	PDFExportLayout->setMargin( 10 );
	Name = new QGroupBox( this, "GroupBox" );
	Name->setTitle( tr( "O&utput to File:" ) );
	Name->setColumnLayout(0, Qt::Vertical );
	Name->layout()->setSpacing( 5 );
	Name->layout()->setMargin( 10 );
	NameLayout = new QGridLayout( Name->layout() );
	NameLayout->setAlignment( Qt::AlignTop );
	fileNameLineEdit = new QLineEdit( Name, "fileNameLineEdit" );
	fileNameLineEdit->setMinimumSize( QSize( 268, 22 ) );
	if (!Opts.Datei.isEmpty())
		fileNameLineEdit->setText(Opts.Datei);
	else
	{
		PrefsContext* dirs = PrefsManager::instance()->prefsFile->getContext("dirs");
		QFileInfo fi = QFileInfo(docFileName);
		QString pdfdir = dirs->get("pdf", fi.dirPath());
		if (pdfdir.right(1) != "/")
			pdfdir += "/";
		fileNameLineEdit->setText(pdfdir+fi.baseName()+".pdf");
	}
	NameLayout->addWidget( fileNameLineEdit, 0, 0 );
	FileC = new QToolButton( Name, "FileC" );
	FileC->setText( tr( "Cha&nge..." ) );
	FileC->setMinimumSize( QSize( 88, 24 ) );
	NameLayout->addWidget( FileC, 0, 1 );
	multiFile = new QCheckBox( tr( "Output one file for eac&h page" ), Name, "multiFile" );
	multiFile->setChecked(Opts.doMultiFile);
	NameLayout->addWidget( multiFile, 1, 0 );
	PDFExportLayout->addWidget( Name );
	Options = new TabPDFOptions( this, pdfOptions, AllFonts, PDFXProfiles, DocFonts,
								Eff, currView->Doc->unitIndex(), currView->Doc->pageHeight,
								currView->Doc->pageWidth, currView->Doc, true );
	PDFExportLayout->addWidget( Options );
	Layout7 = new QHBoxLayout;
	Layout7->setSpacing( 5 );
	Layout7->setMargin( 0 );
	QSpacerItem* spacer_2 = new QSpacerItem( 20, 20, QSizePolicy::Expanding, QSizePolicy::Minimum );
	Layout7->addItem( spacer_2 );
	OK = new QPushButton( tr( "&Save" ), this, "OK" );
	OK->setAutoDefault( true );
	OK->setDefault( true );
	Layout7->addWidget( OK );
	Cancel = new QPushButton( CommonStrings::tr_Cancel, this, "Cancel" );
	Layout7->addWidget( Cancel );
	PDFExportLayout->addLayout( Layout7 );
	if ((Opts.Version == PDFOptions::PDFVersion_X3) && (Options->InfoString->text().isEmpty()))
		OK->setEnabled(false);
	resize(sizeHint());
//	setMaximumSize( sizeHint() );
//tooltips
	QToolTip::add( multiFile, "<qt>" + tr( "This enables exporting one individually named PDF file for each page in the document. Page numbers are added automatically. This is most useful for imposing PDF for commercial printing.") + "</qt>" );
	QToolTip::add( OK, "<qt>" + tr( "The save button will be disabled if you are trying to export PDF/X-3 and the info string is missing from the PDF/X-3 tab.") + "</qt>" );
	// signals and slots connections
	connect( FileC, SIGNAL( clicked() ), this, SLOT( ChangeFile() ) );
	connect( OK, SIGNAL( clicked() ), this, SLOT( DoExport() ) );
	connect( Cancel, SIGNAL( clicked() ), this, SLOT( reject() ) );
	connect( fileNameLineEdit, SIGNAL( lostFocus() ), this, SLOT( fileNameChanged() ) );
	connect( fileNameLineEdit, SIGNAL( returnPressed() ), this, SLOT( fileNameChanged() ) );
	connect( Options, SIGNAL(noInfo()), this, SLOT(disableSave()));
	connect( Options, SIGNAL(hasInfo()), this, SLOT(enableSave()));
}

void PDFExportDialog::enableSave()
{
	OK->setEnabled(true);
}

void PDFExportDialog::disableSave()
{
	OK->setEnabled(false);
}

void PDFExportDialog::DoExport()
{
	QString fn = fileNameLineEdit->text();
	// Checking if the path exists
	QFileInfo fi(fn);
	QString dirPath = QDir::convertSeparators(fi.dirPath(true));
	if (!QFile::exists(fi.dirPath(true)))
	{
		if (QMessageBox::question(this,
									tr( "Save as PDF" ),
									tr("%1 does not exists and will be created, continue?").arg(dirPath),
									CommonStrings::tr_OK, CommonStrings::tr_Cancel, QString::null, 1, 1)
				  != 0)
		{
			return;
		}
	}
	// NOTE: Qt4 contains QDir::mkpath()
	QDir d(fn);
	QStringList dirList = QStringList::split(QDir::separator(), dirPath);
	QString existingPath;
#ifndef _WIN32
	existingPath = QDir::separator();
#endif
	for (QStringList::Iterator it = dirList.begin(); it != dirList.end(); ++it )
	{
		existingPath += (*it) + QDir::separator();
		if (!d.exists(existingPath))
		{
			if (!d.mkdir(existingPath))
			{
				QMessageBox::warning(this,
									 CommonStrings::trWarning,
									 tr("Cannot create directory: \n%1").arg(existingPath),
									 CommonStrings::tr_OK);
				return;
			}
		}
	} // end of Qt4 QDir::mkpath() simulation

	bool doIt = false;
	if (multiFile->isChecked())
		doIt = true;
	else
		doIt = overwrite(this, fn);
	if (doIt)
	{
		EffVal = Options->EffVal;
		EffVal[Options->PgSel].pageViewDuration = Options->PageTime->value();
		EffVal[Options->PgSel].pageEffectDuration = Options->EffectTime->value();
		EffVal[Options->PgSel].effectType = Options->EffectType->currentItem();
		EffVal[Options->PgSel].Dm = Options->EDirection->currentItem();
		EffVal[Options->PgSel].M = Options->EDirection_2->currentItem();
		EffVal[Options->PgSel].Di = Options->EDirection_2_2->currentItem();
		Opts.LPISettings[Options->SelLPIcolor].Frequency = Options->LPIfreq->value();
		Opts.LPISettings[Options->SelLPIcolor].Angle = Options->LPIangle->value();
		Opts.LPISettings[Options->SelLPIcolor].SpotFunc = Options->LPIfunc->currentItem();
		accept();
	}
	else
		return;
}

void PDFExportDialog::ChangeFile()
{
	QString fn;
	PrefsContext* dirs = PrefsManager::instance()->prefsFile->getContext("dirs");
	QString wdir = dirs->get("pdf", ".");
	CustomFDialog dia(this, wdir, tr("Save as"), tr("PDF Files (*.pdf);;All Files (*)"), fdNone);
	if (!fileNameLineEdit->text().isEmpty())
		dia.setSelection(fileNameLineEdit->text());
	if (dia.exec() == QDialog::Accepted)
	{
		fn = dia.selectedFile();
		dirs->set("pdf", fn.left(fn.findRev("/")));
	}
	else
		return;
	fileNameLineEdit->setText(fn);
}

void PDFExportDialog::fileNameChanged()
{
	fileNameLineEdit->setText(checkFileExtension(fileNameLineEdit->text(),"pdf"));
}

void PDFExportDialog::updateDocOptions()
{
	Opts.Datei = fileNameLineEdit->text();
	Opts.doMultiFile = multiFile->isChecked();
	Opts.Thumbnails = Options->CheckBox1->isChecked();
	Opts.Compress = Options->Compression->isChecked();
	Opts.CompressMethod = Options->CMethod->currentItem();
	Opts.Quality = Options->CQuality->currentItem();
	Opts.Resolution = Options->Resolution->value();
	Opts.EmbedList = Options->FontsToEmbed;
	Opts.SubsetList = Options->FontsToSubset;
	Opts.RecalcPic = Options->DSColor->isChecked();
	Opts.PicRes = Options->ValC->value();
	Opts.Bookmarks = Options->CheckBM->isChecked();
	Opts.Binding = Options->ComboBind->currentItem();
	Opts.MirrorH = Options->MirrorH->isOn();
	Opts.MirrorV = Options->MirrorV->isOn();
	Opts.doClip = Options->ClipMarg->isChecked();
	Opts.RotateDeg = Options->RotateDeg->currentItem() * 90;
	Opts.PresentMode = Options->CheckBox10->isChecked();
	Opts.PresentVals = EffVal;
	Opts.Articles = Options->Article->isChecked();
	Opts.Encrypt = Options->Encry->isChecked();
	Opts.UseLPI = Options->UseLPI->isChecked();
	Opts.useLayers = Options->useLayers->isChecked();
	Opts.UseSpotColors = !Options->useSpot->isChecked();
	Opts.doOverprint = Options->overprintMode->isChecked();
	Opts.displayBookmarks = Options->useBookmarks->isChecked();
	Opts.displayFullscreen = Options->useFullScreen->isChecked();
	Opts.displayLayers = Options->useLayers2->isChecked();
	Opts.displayThumbs = Options->useThumbnails->isChecked();
	Opts.hideMenuBar = Options->hideMenuBar->isChecked();
	Opts.hideToolBar = Options->hideToolBar->isChecked();
	Opts.fitWindow = Options->fitWindow->isChecked();
	int pgl = PDFOptions::SinglePage;
	if (Options->singlePage->isChecked())
		pgl = PDFOptions::SinglePage;
	else if (Options->continuousPages->isChecked())
		pgl = PDFOptions::OneColumn;
	else if (Options->doublePageLeft->isChecked())
		pgl = PDFOptions::TwoColumnLeft;
	else if (Options->doublePageRight->isChecked())
		pgl = PDFOptions::TwoColumnRight;
	Opts.PageLayout = pgl;
	if (Options->actionCombo->currentItem() != 0)
		Opts.openAction = Options->actionCombo->currentText();
	else
		Opts.openAction = "";
	if (Options->Encry->isChecked())
	{
		int Perm = -64;
		if (Options->PDFVersionCombo->currentItem() == 1)
			Perm &= ~0x00240000;
		if (Options->PrintSec->isChecked())
			Perm += 4;
		if (Options->ModifySec->isChecked())
			Perm += 8;
		if (Options->CopySec->isChecked())
			Perm += 16;
		if (Options->AddSec->isChecked())
			Perm += 32;
		Opts.Permissions = Perm;
		Opts.PassOwner = Options->PassOwner->text();
		Opts.PassUser = Options->PassUser->text();
	}
	if (Options->PDFVersionCombo->currentItem() == 0)
		Opts.Version = PDFOptions::PDFVersion_13;
	if (Options->PDFVersionCombo->currentItem() == 1)
		Opts.Version = PDFOptions::PDFVersion_14;
	if (Options->PDFVersionCombo->currentItem() == 2)
		Opts.Version = PDFOptions::PDFVersion_15;
	if (Options->PDFVersionCombo->currentItem() == 3)
		Opts.Version = PDFOptions::PDFVersion_X3;
	if (Options->OutCombo->currentItem() == 0)
	{
		Opts.UseRGB = true;
		Opts.isGrayscale = false;
		Opts.UseProfiles = false;
		Opts.UseProfiles2 = false;
	}
	else
	{
		if (Options->OutCombo->currentItem() == 2)
		{
			Opts.isGrayscale = true;
			Opts.UseRGB = false;
			Opts.UseProfiles = false;
			Opts.UseProfiles2 = false;
		}
		else
		{
			Opts.isGrayscale = false;
			Opts.UseRGB = false;
			if (doc->HasCMS)
			{
				Opts.UseProfiles = Options->EmbedProfs->isChecked();
				Opts.UseProfiles2 = Options->EmbedProfs2->isChecked();
				Opts.Intent = Options->IntendS->currentItem();
				Opts.Intent2 = Options->IntendI->currentItem();
				Opts.EmbeddedI = Options->NoEmbedded->isChecked();
				Opts.SolidProf = Options->SolidPr->currentText();
				Opts.ImageProf = Options->ImageP->currentText();
				Opts.PrintProf = Options->PrintProfC->currentText();
				if (Opts.Version == PDFOptions::PDFVersion_X3)
				{
					cmsHPROFILE hIn;
					QCString profilePath( appPrinterProfiles[Opts.PrintProf].local8Bit() );
					hIn = cmsOpenProfileFromFile(profilePath.data(), "r");
					const char *Descriptor = cmsTakeProductDesc(hIn);
					cmsDescriptorName = QString(Descriptor);
					if (static_cast<int>(cmsGetColorSpace(hIn)) == icSigRgbData)
						components = 3;
					if (static_cast<int>(cmsGetColorSpace(hIn)) == icSigCmykData)
						components = 4;
					if (static_cast<int>(cmsGetColorSpace(hIn)) == icSigCmyData)
						components = 3;
					cmsCloseProfile(hIn);
					Opts.Info = Options->InfoString->text();
					Opts.BleedTop = Options->BleedTop->value()/docUnitRatio;
					Opts.BleedLeft = Options->BleedLeft->value()/docUnitRatio;
					Opts.BleedRight = Options->BleedRight->value()/docUnitRatio;
					Opts.BleedBottom = Options->BleedBottom->value()/docUnitRatio;
					Opts.Encrypt = false;
					Opts.MirrorH = false;
					Opts.MirrorV = false;
					Opts.RotateDeg = 0;
					Opts.PresentMode = false;
					Opts.Encrypt = false;
				}
			}
			else
			{
				Opts.UseProfiles = false;
				Opts.UseProfiles2 = false;
			}
		}
	}
}

const QString PDFExportDialog::cmsDescriptor()
{
	return cmsDescriptorName;
}

const int PDFExportDialog::colorSpaceComponents()
{
	return components;
}

const QString PDFExportDialog::getPagesString()
{
	if (Options->AllPages->isChecked())
		return "*";
	return Options->PageNr->text();
}
