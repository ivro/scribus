/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
#include <qapplication.h>
#include <qpainter.h>
#include <qpixmap.h>
#include <qregexp.h>
#include "splash.h"
extern QPixmap loadIcon(QString nam);

/*!
 \fn SplashScreen::SplashScreen() 
 \author Franz Schmid
 \date
 \brief Constructor for SplashScreen
 \param None
 \retval None
 */
SplashScreen::SplashScreen() 
//	: QWidget( 0, 0, WStyle_Customize | WStyle_NoBorder | WStyle_StaysOnTop | WStyle_Tool | WX11BypassWM )
	: QWidget( 0, 0, WStyle_Customize | WStyle_NoBorder | WStyle_StaysOnTop | WStyle_Tool | WStyle_Splash )
{
	pix = loadIcon("Splash.png");
		if (pix.isNull()) {
		pix = QPixmap(360, 200);
		pix.fill(Qt::darkGray);
	}
	setErasePixmap( pix );
	resize( pix.size() );
	QRect scr = QApplication::desktop()->screenGeometry();
	move( scr.center() - rect().center() );
	show();
	repaint();
}

/*!
 \fn void SplashScreen::mousePressEvent( QMouseEvent * )
 \author Franz Schmid
 \date
 \brief When mouse is clicked the splashscreen is hidden
 \param QMouseEvent* QMouseEvent pointer
 \retval None
 */
void SplashScreen::mousePressEvent( QMouseEvent * )
{
	hide();
}

/*!
 \fn void SplashScreen::repaint()
 \author Franz Schmid
 \date
 \brief Repaints the splashscreen when status is changed in SplashScreen::setStatus
 \param None
 \retval None
 */
void SplashScreen::repaint()
{
	QWidget::repaint();
	QApplication::flush();
}

/*!
 \fn void SplashScreen::setStatus( const QString &message )
 \author Franz Schmid
 \date
 \brief Sets new status on SplashScreen and calls for a SplashScreen::repaint afterwards.
 \param message const QString& message to display as actions are performed on startup when SplashScreen is displayed.
 \retval None
 */
void SplashScreen::setStatus( const QString &message )
{
	QString tmp = message;
	int f = 0;
	while (f != -1)
	{
		f = tmp.find(QRegExp( "&\\S*" ));
		if (f != -1)
		{
			tmp.remove(f, 1);
			f = 0;
		}
	}
	QPixmap textPix = pix;
	QPainter painter( &textPix, this );
	painter.setFont(QFont("Helvetica", 10));
	painter.setPen( white );
	painter.drawText( 10, textPix.height()-8, tmp );
	painter.end();
	setErasePixmap( textPix );
	repaint();
}
