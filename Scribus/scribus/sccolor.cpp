/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
                          sccolor.cpp  -  description
                             -------------------
    begin                : Sun Sep 9 2001
    copyright            : (C) 2001 by Franz Schmid
    email                : Franz.Schmid@altmuehlnet.de
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include <qcolor.h>
#include <qstring.h>

#include "sccolor.h"

#include "scconfig.h"

#ifdef HAVE_CMS
	#include CMS_INC
	extern cmsHTRANSFORM stdTransRGBMonG;
	extern cmsHTRANSFORM stdTransCMYKMonG;
	extern cmsHTRANSFORM stdProofG;
	extern cmsHTRANSFORM stdTransCMYKG;
	extern cmsHTRANSFORM stdProofCMYKG;
	extern cmsHTRANSFORM stdTransRGBG;
	extern cmsHTRANSFORM stdProofGCG;
	extern cmsHTRANSFORM stdProofCMYKGCG;
 	extern bool SoftProofing;
	extern bool Gamut;
	extern bool CMSuse;
#endif
extern bool CMSavail;
bool ScColor::UseProf = true;

ScColor::ScColor()
{
//	setColor(0, 0, 0, 0);
	Model = colorModelCMYK;
	C = M = Y = K = 0;
	R = G = B = 255;
	RGB = Qt::white;

	Spot = false;
	outOfGamutFlag = false;
	Regist = false;
}

ScColor::ScColor(int c, int m, int y, int k)
{
	setColor(c, m, y, k);
	Spot = false;
	outOfGamutFlag = false;
	Regist = false;
}
 
ScColor::ScColor(int r, int g, int b)
{
	setColorRGB(r, g, b);
	Spot = false;
	outOfGamutFlag = false;
	Regist = false;
}

bool ScColor::operator==(const ScColor& rhs) const
{
	if (Model!=rhs.Model)
		return false;
	if (Spot!=rhs.Spot)
		return false;
	if (Regist!=rhs.Regist)
		return false;
	if (Model==colorModelRGB)
	{
		return (R==rhs.R && G==rhs.G && B==rhs.B);
	}
	if (Model==colorModelCMYK)
	{
		return (C==rhs.C && M==rhs.M && Y==rhs.Y && K==rhs.K);
	}
	return false;
}

void ScColor::setColor(int c, int m, int y, int k)
{
	C = c;
	M = m;
	Y = y;
	K = k;
	Model = colorModelCMYK;
	RecalcRGB();
}

void ScColor::setColorRGB(int r, int g, int b)
{
	R = r;
	G = g;
	B = b;
	Model = colorModelRGB;
	RecalcRGB();
}

void ScColor::setColorModel (colorModel cm)
{
	Model = cm;
	RecalcRGB();
}

colorModel ScColor::getColorModel ()
{
	return Model;
 }

void ScColor::fromQColor(QColor color)
{
	int r, g, b;
	color.rgb(&r, &g, &b);
	setColorRGB(r, g, b);
}

QColor ScColor::getRGBColor()
{
	return RGB;
}

QColor ScColor::getShadeColor(int level)
{
	int r, g, b;
	getShadeColorRGB(&r, &g, &b, level);
	return QColor(r, g, b);
}
 
void ScColor::getShadeColorCMYK(int *c, int *m, int *y, int *k, int level)
{
	if (Model == colorModelRGB)
	{
		int r, g, b;
		ScColor tmpR;
		getShadeColorRGB(&r, &g, &b, level);
		tmpR.setColorRGB(r, g, b);
		tmpR.getCMYK(c, m, y, k);
	}
	else
	{
		*c = C * level / 100;
		*m = M * level / 100;
		*y = Y * level / 100;
		*k = K * level / 100;
	}
}

void ScColor::getShadeColorRGB(int *r, int *g, int *b, int level)
{
	int h, s, v, snew;
	
	if (Model == colorModelCMYK)
	{
		int c, m, y, k;
		getShadeColorCMYK(&c, &m, &y, &k, level);
		ScColor tmpC(c, m, y, k);
		tmpC.getRGB(r, g, b);
	}
	else
	{
		QColor tmpR(R, G, B);
		tmpR.hsv(&h, &s, &v);
		
		if (R == G && G == B)
		{
			snew = 255 - ((255 - v) * level / 100);
			tmpR.setHsv(h, s, snew);
		}
		else
		{
			snew = s * level / 100;
			tmpR.setHsv(h, snew, v);
		}

		tmpR.getRgb(r, g, b);
	}
}

QColor ScColor::getDisplayColor()
{
	QColor tmp;
	if (Model == colorModelRGB)
		tmp = getDisplayColor(R, G, B);
	else
		tmp = getDisplayColor(C, M, Y, K);
	return tmp;
}

QColor ScColor::getDisplayColorGC()
{
	QColor tmp;
	if( SoftProofing && Gamut )
	{
		checkGamut();
		tmp = outOfGamutFlag ? QColor(0, 255, 0) : getDisplayColor();
	}
	else
		tmp = getDisplayColor();
	return tmp;
}

QColor ScColor::getColorProof(bool gamutCheck)
{
	QColor tmp;
	if (Model == colorModelRGB)
		tmp = getColorProof(R, G, B, gamutCheck & Gamut);
	else
		tmp = getColorProof(C, M, Y, K, gamutCheck & Gamut);
	return tmp;
}

QColor ScColor::getShadeColorProof(int level)
{
	QColor tmp;
	ScColor tmp2;
	int r, g, b, c, m ,y, k;
#if defined HAVE_CMS
	bool doGC = Gamut;
#else
	bool doGC = false;
#endif
	
	if (Model == colorModelRGB)
	{
		getShadeColorRGB(&r, &g, &b, level);
		tmp = getColorProof(r, g, b, doGC);
	}
	else
	{
		getShadeColorCMYK(&c, &m, &y, &k, level);
		tmp = getColorProof(c, m, y, k, doGC);
	}
	
	return tmp;
}

void ScColor::getRawRGBColor(int *r, int *g, int *b)
{
	*r = 255-QMIN(255, C+K);
	*g = 255-QMIN(255, M+K);
	*b = 255-QMIN(255, Y+K);
}

QColor ScColor::getRawRGBColor()
{
	return QColor(255-QMIN(255, C+K), 255-QMIN(255, M+K), 255-QMIN(255, Y+K));
}

void ScColor::getRGB(int *r, int *g, int *b)
{
	*r = R;
	*g = G;
	*b = B;
}

void ScColor::getCMYK(int *c, int *m, int *y, int *k)
{
	*c = C;
	*m = M;
	*y = Y;
	*k = K;
}

void ScColor::applyGCR()
{
#ifdef HAVE_CMS
	if (!(CMSuse && CMSavail))
	{
#endif
		int k = QMIN(QMIN(C, M), Y);
		C = C - k;
		M = M - k;
		Y = Y - k;
		K = QMIN((K + k), 255);
#ifdef HAVE_CMS
	}
#endif
}

QString ScColor::name()
{
	QString tmp, name="#";
	switch (Model) 
	{
	case colorModelCMYK:
		tmp.setNum(C, 16);
		if (tmp.length() < 2)
			tmp.insert(0, "0");
		name += tmp;
		tmp.setNum(M, 16);
		if (tmp.length() < 2)
			tmp.insert(0, "0");
		name += tmp;
		tmp.setNum(Y, 16);
		if (tmp.length() < 2)
			tmp.insert(0, "0");
		name += tmp;
		tmp.setNum(K, 16);
		if (tmp.length() < 2)
			tmp.insert(0, "0");
		name += tmp;
		return name;
		break;
	case colorModelRGB:
		tmp.setNum(R, 16);
		if (tmp.length() < 2)
			tmp.insert(0, "0");
		name += tmp;
		tmp.setNum(G, 16);
		if (tmp.length() < 2)
			tmp.insert(0, "0");
		name += tmp;
		tmp.setNum(B, 16);
		if (tmp.length() < 2)
			tmp.insert(0, "0");
		name += tmp;
		return name;
	}
	return "";
}

QString ScColor::nameCMYK()
{
	QString tmp, name="#";
	tmp.setNum(C, 16);
	if (tmp.length() < 2)
		tmp.insert(0, "0");
	name += tmp;
	tmp.setNum(M, 16);
	if (tmp.length() < 2)
		tmp.insert(0, "0");
	name += tmp;
	tmp.setNum(Y, 16);
	if (tmp.length() < 2)
		tmp.insert(0, "0");
	name += tmp;
	tmp.setNum(K, 16);
	if (tmp.length() < 2)
		tmp.insert(0, "0");
	name += tmp;
	return name;
}

QString ScColor::nameRGB()
{
	QString tmp, name="#";
	tmp.setNum(R, 16);
	if (tmp.length() < 2)
		tmp.insert(0, "0");
	name += tmp;
	tmp.setNum(G, 16);
	if (tmp.length() < 2)
		tmp.insert(0, "0");
	name += tmp;
	tmp.setNum(B, 16);
	if (tmp.length() < 2)
		tmp.insert(0, "0");
	name += tmp;
	return name;
}

void ScColor::setNamedColor(QString name)
{
	bool ok;
	if (name.length () == 9)
	{
		int c = name.mid(1,2).toInt(&ok, 16);
		int m = name.mid(3,2).toInt(&ok, 16);
		int y = name.mid(5,2).toInt(&ok, 16);
		int k = name.mid(7,2).toInt(&ok, 16);
		setColor(c, m, y, k);
	}
	else if (name.length () == 7)
	{
		int r = name.mid(1,2).toInt(&ok, 16);
		int g = name.mid(3,2).toInt(&ok, 16);
		int b = name.mid(5,2).toInt(&ok, 16);
		setColorRGB(r, g, b);
	}
}

bool ScColor::isOutOfGamut()
{
	return outOfGamutFlag;
}

void ScColor::checkGamut()
{
	outOfGamutFlag = false;
	if (Spot)
		return;
#ifdef HAVE_CMS
	WORD inC[4];
	WORD outC[4];
	if (CMSuse && CMSavail)
	{
		bool alert = true;
		cmsHTRANSFORM xformProof;
		if (Model == colorModelRGB)
		{
			inC[0] = R*257;
			inC[1] = G*257;
			inC[2] = B*257;
			xformProof = stdProofGCG;
			if ((R == 0) && (B == 0) && (G == 255))
				alert = false;
			if ((R == G && G == B))
				alert = false;
		}
		else
		{
			inC[0] = C*257;
			inC[1] = M*257;
			inC[2] = Y*257;
			inC[3] = K*257;
			xformProof = stdProofCMYKGCG;
			if ((M == 0) && (K == 0) && (C == 255) && (Y == 255))
				alert = false;
			if ((M == 0) && (C == 0) && (Y == 0))
				alert = false;
			if ((M == C) && (C == Y) && (Y == K))
				alert = false;
		}
		if (alert)
		{
			cmsDoTransform(xformProof, inC, outC, 1);
			if ((alert) && ((outC[0]/257 == 0) && (outC[1]/257 == 255) & (outC[2]/257 == 0)))
				outOfGamutFlag = true;
		}
	}
#endif
}

void ScColor::RecalcRGB()
{
	outOfGamutFlag = false;
	bool alert = true;
#ifdef HAVE_CMS
	WORD inC[4];
	WORD outC[4];
	if ((CMSuse && CMSavail) && (!Spot))
	{
		if (Model == colorModelRGB)
		{
			// allow RGB greys to go got to CMYK greys without transform
			if (R == G && G == B)
			{
				C = M = Y = 0;
				K = 255 - R;
			}
			else
			{
				inC[0] = R * 257;
				inC[1] = G * 257;
				inC[2] = B * 257;
				cmsDoTransform(stdTransCMYKG, inC, outC, 1);
				C = outC[0] / 257;
				M = outC[1] / 257;
				Y = outC[2] / 257;
				K = outC[3] / 257;
				checkGamut();
			}
		}
		else
		{
			inC[0] = C * 257;
			inC[1] = M * 257;
			inC[2] = Y * 257;
			inC[3] = K * 257;
			cmsDoTransform(stdTransRGBG, inC, outC, 1);
			R = outC[0] / 257;
			G = outC[1] / 257;
			B = outC[2] / 257;
			checkGamut();
		}
	}
	else
	{
#endif
		if (Model == colorModelRGB)
		{
			K = QMIN(QMIN(255 - R, 255 - G), 255 - B);
			C = 255 - R - K;
			M = 255 - G - K;
			Y = 255 - B - K;
		}
		else
		{
			R = 255 - QMIN(255, C + K);
			G = 255 - QMIN(255, M + K);
			B = 255 - QMIN(255, Y + K);
		}
#ifdef HAVE_CMS
	}
#endif
	RGB = QColor(R, G, B);
}

QColor ScColor::getColorProof(int r, int g, int b, bool gamutCkeck)
{
#ifdef HAVE_CMS
	WORD inC[4];
	WORD outC[4];
	bool alert = true;
	if ((CMSuse && CMSavail) && (!Spot))
	{
		inC[0] = r * 257;
		inC[1] = g * 257;
		inC[2] = b * 257;
		if (SoftProofing)
		{
			cmsHTRANSFORM xform = gamutCkeck ? stdProofGCG : stdProofG;
			cmsDoTransform(xform, inC, outC, 1);
			r = outC[0] / 257;
			g = outC[1] / 257;
			b = outC[2] / 257;
		}
		else
		{
			cmsDoTransform(stdTransRGBMonG, inC, outC, 1);
			r = outC[0] / 257;
			g = outC[1] / 257;
			b = outC[2] / 257;
		}
	}
#endif
	return QColor(r, g, b);
}

QColor ScColor::getColorProof(int c, int m, int y, int k, bool gamutCkeck)
{
	int  r = 0, g = 0, b = 0;
#ifdef HAVE_CMS
	WORD inC[4];
	WORD outC[4];
	bool alert = true;
	if ((CMSuse && CMSavail) && (!Spot))
	{
		inC[0] = c * 257;
		inC[1] = m * 257;
		inC[2] = y * 257;
		inC[3] = k * 257;
		if (SoftProofing)
		{
			cmsHTRANSFORM xform = gamutCkeck ? stdProofCMYKGCG : stdProofCMYKG;
			cmsDoTransform(xform, inC, outC, 1);
			r = outC[0] / 257;
			g = outC[1] / 257;
			b = outC[2] / 257;
		}
		else
		{
			cmsDoTransform(stdTransCMYKMonG, inC, outC, 1);
			r = outC[0] / 257;
			g = outC[1] / 257;
			b = outC[2] / 257;
		}
	}
	else
	{
#endif
		r = 255 - QMIN(255, c + k);
		g = 255 - QMIN(255, m + k);
		b = 255 - QMIN(255, y + k);
#ifdef HAVE_CMS
	}
#endif
	return QColor(r, g, b);
}

QColor ScColor::getDisplayColor(int r, int g, int b)
{
#ifdef HAVE_CMS
	WORD inC[4];
	WORD outC[4];
	bool alert = true;
	if ((CMSuse && CMSavail) && (!Spot))
	{
		inC[0] = r * 257;
		inC[1] = g * 257;
		inC[2] = b * 257;
		cmsDoTransform(stdTransRGBMonG, inC, outC, 1);
		r = outC[0] / 257;
		g = outC[1] / 257;
		b = outC[2] / 257;
	}
#endif
	return QColor(r, g, b);
}

QColor ScColor::getDisplayColor(int c, int m, int y, int k)
{
	int  r = 0, g = 0, b = 0;
#ifdef HAVE_CMS
	WORD inC[4];
	WORD outC[4];
	bool alert = true;
	if ((CMSuse && CMSavail) && (!Spot))
	{
		inC[0] = c * 257;
		inC[1] = m * 257;
		inC[2] = y * 257;
		inC[3] = k * 257;
		cmsDoTransform(stdTransCMYKMonG, inC, outC, 1);
		r = outC[0] / 257;
		g = outC[1] / 257;
		b = outC[2] / 257;
	}
	else
	{
#endif
		r = 255 - QMIN(255, c + k);
		g = 255 - QMIN(255, m + k);
		b = 255 - QMIN(255, y + k);
#ifdef HAVE_CMS
	}
#endif
	return QColor(r, g, b);
}

bool ScColor::isRegistrationColor()
{
	return Regist;
}

void ScColor::setRegistrationColor(bool s)
{
	Regist = s;
}

bool ScColor::isSpotColor()
{
	return Spot;
}

void ScColor::setSpotColor(bool s)
{
	Spot = s;
}
