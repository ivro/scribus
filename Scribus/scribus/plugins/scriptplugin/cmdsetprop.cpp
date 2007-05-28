/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "cmdsetprop.h"
#include "cmdutil.h"
#include "scribuscore.h"

PyObject *scribus_setgradfill(PyObject* /* self */, PyObject* args)
{
	char *Name = const_cast<char*>("");
	char *Color1;
	char *Color2;
	int typ, shade1, shade2;
	if (!PyArg_ParseTuple(args, "iesiesi|es", &typ, "utf-8", &Color1, &shade1, "utf-8", &Color2, &shade2, "utf-8", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *currItem = GetUniqueItem(QString::fromUtf8(Name));
	if (currItem == NULL)
		return NULL;
	QColor tmp;
	currItem->fill_gradient.clearStops();
	QString c1 = QString::fromUtf8(Color1);
	QString c2 = QString::fromUtf8(Color2);
	currItem->SetFarbe(&tmp, c1, shade1);
	currItem->fill_gradient.addStop(tmp, 0.0, 0.5, 1.0, c1, shade1);
	currItem->SetFarbe(&tmp, c2, shade2);
	currItem->fill_gradient.addStop(tmp, 1.0, 0.5, 1.0, c2, shade2);
	currItem->GrType = typ;
	switch (currItem->GrType)
	{
		case 0:
		case 1:
			currItem->GrStartX = 0;
			currItem->GrStartY = currItem->height() / 2.0;
			currItem->GrEndX = currItem->width();
			currItem->GrEndY = currItem->height() / 2.0;
			break;
		case 2:
			currItem->GrStartX = currItem->width() / 2.0;
			currItem->GrStartY = 0;
			currItem->GrEndX = currItem->width() / 2.0;
			currItem->GrEndY = currItem->height();
			break;
		case 3:
			currItem->GrStartX = 0;
			currItem->GrStartY = 0;
			currItem->GrEndX = currItem->width();
			currItem->GrEndY = currItem->height();
			break;
		case 4:
			currItem->GrStartX = 0;
			currItem->GrStartY = currItem->height();
			currItem->GrEndX = currItem->width();
			currItem->GrEndY = 0;
			break;
		case 5:
			currItem->GrStartX = currItem->width() / 2.0;
			currItem->GrStartY = currItem->height() / 2.0;
			if (currItem->width() >= currItem->height())
			{
				currItem->GrEndX = currItem->width();
				currItem->GrEndY = currItem->height() / 2.0;
			}
			else
			{
				currItem->GrEndX = currItem->width() / 2.0;
				currItem->GrEndY = currItem->height();
			}
			break;
		default:
			break;
	}
	//ScCore->primaryMainWindow()->view->updateGradientVectors(currItem);
	currItem->updateGradientVectors();
	ScCore->primaryMainWindow()->view->RefreshItem(currItem);
// 	Py_INCREF(Py_None);
// 	return Py_None;
	Py_RETURN_NONE;
}

PyObject *scribus_setfillcolor(PyObject* /* self */, PyObject* args)
{
	char *Name = const_cast<char*>("");
	char *Color;
	if (!PyArg_ParseTuple(args, "es|es", "utf-8", &Color, "utf-8", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *i = GetUniqueItem(QString::fromUtf8(Name));
	if (i == NULL)
		return NULL;
	i->setFillColor(QString::fromUtf8(Color));
 //	Py_INCREF(Py_None);
 //	return Py_None;
	Py_RETURN_NONE;
}

PyObject *scribus_setfilltrans(PyObject* /* self */, PyObject* args)
{
	char *Name = const_cast<char*>("");
	double w;
	if (!PyArg_ParseTuple(args, "d|es", &w, "utf-8", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	if ((w < 0.0) || (w > 1.0))
	{
		PyErr_SetString(PyExc_ValueError, QObject::tr("Transparency out of bounds, must be 0 <= transparency <= 1.","python error"));
		return NULL;
	}
	PageItem *i = GetUniqueItem(QString::fromUtf8(Name));
	if (i == NULL)
		return NULL;
	i->setFillTransparency(1.0 - w);
 //	Py_INCREF(Py_None);
// 	return Py_None;
	Py_RETURN_NONE;
}

PyObject *scribus_setfillblend(PyObject* /* self */, PyObject* args)
{
	char *Name = const_cast<char*>("");
	int w;
	if (!PyArg_ParseTuple(args, "i|es", &w, "utf-8", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	if ((w < 0) || (w > 15))
	{
		PyErr_SetString(PyExc_ValueError, QObject::tr("Blendmode out of bounds, must be 0 <= blendmode <= 15.","python error"));
		return NULL;
	}
	PageItem *i = GetUniqueItem(QString::fromUtf8(Name));
	if (i == NULL)
		return NULL;
	i->setFillBlendmode(w);
 //	Py_INCREF(Py_None);
 //	return Py_None;
	Py_RETURN_NONE;
}

PyObject *scribus_setlinecolor(PyObject* /* self */, PyObject* args)
{
	char *Name = const_cast<char*>("");
	char *Color;
	if (!PyArg_ParseTuple(args, "es|es", "utf-8", &Color, "utf-8", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *it = GetUniqueItem(QString::fromUtf8(Name));
	if (it == NULL)
		return NULL;
	it->setLineColor(QString::fromUtf8(Color));
// 	Py_INCREF(Py_None);
// 	return Py_None;
	Py_RETURN_NONE;
}

PyObject *scribus_setlinetrans(PyObject* /* self */, PyObject* args)
{
	char *Name = const_cast<char*>("");
	double w;
	if (!PyArg_ParseTuple(args, "d|es", &w, "utf-8", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	if ((w < 0.0) || (w > 1.0))
	{
		PyErr_SetString(PyExc_ValueError, QObject::tr("Transparency out of bounds, must be 0 <= transparency <= 1.","python error"));
		return NULL;
	}
	PageItem *i = GetUniqueItem(QString::fromUtf8(Name));
	if (i == NULL)
		return NULL;
	i->setLineTransparency(1.0 - w);
 //	Py_INCREF(Py_None);
 //	return Py_None;
	Py_RETURN_NONE;
}

PyObject *scribus_setlineblend(PyObject* /* self */, PyObject* args)
{
	char *Name = const_cast<char*>("");
	int w;
	if (!PyArg_ParseTuple(args, "i|es", &w, "utf-8", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	if ((w < 0) || (w > 15))
	{
		PyErr_SetString(PyExc_ValueError, QObject::tr("Blendmode out of bounds, must be 0 <= blendmode <= 15.","python error"));
		return NULL;
	}
	PageItem *i = GetUniqueItem(QString::fromUtf8(Name));
	if (i == NULL)
		return NULL;
	i->setLineBlendmode(w);
 //	Py_INCREF(Py_None);
// 	return Py_None;
	Py_RETURN_NONE;
}

PyObject *scribus_setlinewidth(PyObject* /* self */, PyObject* args)
{
	char *Name = const_cast<char*>("");
	double w;
	if (!PyArg_ParseTuple(args, "d|es", &w, "utf-8", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	if ((w < 0.0) || (w > 12.0))
	{
		PyErr_SetString(PyExc_ValueError, QObject::tr("Line width out of bounds, must be 0 <= line_width <= 12.","python error"));
		return NULL;
	}
	PageItem *i = GetUniqueItem(QString::fromUtf8(Name));
	if (i == NULL)
		return NULL;
	i->setLineWidth(w);
// 	Py_INCREF(Py_None);
// 	return Py_None;
	Py_RETURN_NONE;
}

PyObject *scribus_setlineshade(PyObject* /* self */, PyObject* args)
{
	char *Name = const_cast<char*>("");
	int w;
	if (!PyArg_ParseTuple(args, "i|es", &w, "utf-8", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	if ((w < 0) || (w > 100))
	{
		PyErr_SetString(PyExc_ValueError, QObject::tr("Line shade out of bounds, must be 0 <= shade <= 100.","python error"));
		return NULL;
	}
	PageItem *it = GetUniqueItem(QString::fromUtf8(Name));
	if (it == NULL)
		return NULL;
	it->setLineShade(w);
 //	Py_INCREF(Py_None);
// 	return Py_None;
	Py_RETURN_NONE;
}

PyObject *scribus_setfillshade(PyObject* /* self */, PyObject* args)
{
	char *Name = const_cast<char*>("");
	int w;
	if (!PyArg_ParseTuple(args, "i|es", &w, "utf-8", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	if ((w < 0) || (w > 100))
	{
		PyErr_SetString(PyExc_ValueError, QObject::tr("Fill shade out of bounds, must be 0 <= shade <= 100.","python error"));
		return NULL;
	}
	PageItem *i = GetUniqueItem(QString::fromUtf8(Name));
	if (i == NULL)
		return NULL;
	i->setFillShade(w);
 //	Py_INCREF(Py_None);
// 	return Py_None;
	Py_RETURN_NONE;
}

PyObject *scribus_setlinejoin(PyObject* /* self */, PyObject* args)
{
	char *Name = const_cast<char*>("");
	int w;
	if (!PyArg_ParseTuple(args, "i|es", &w, "utf-8", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *i = GetUniqueItem(QString::fromUtf8(Name));
	if (i == NULL)
		return NULL;
	i->PLineJoin = Qt::PenJoinStyle(w);
 //	Py_INCREF(Py_None);
 //	return Py_None;
	Py_RETURN_NONE;
}

PyObject *scribus_setlineend(PyObject* /* self */, PyObject* args)
{
	char *Name = const_cast<char*>("");
	int w;
	if (!PyArg_ParseTuple(args, "i|es", &w, "utf-8", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *i = GetUniqueItem(QString::fromUtf8(Name));
	if (i == NULL)
		return NULL;
	i->PLineEnd = Qt::PenCapStyle(w);
// 	Py_INCREF(Py_None);
// 	return Py_None;
	Py_RETURN_NONE;
}

PyObject *scribus_setlinestyle(PyObject* /* self */, PyObject* args)
{
	char *Name = const_cast<char*>("");
	int w;
	if (!PyArg_ParseTuple(args, "i|es", &w, "utf-8", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *i = GetUniqueItem(QString::fromUtf8(Name));
	if (i == NULL)
		return NULL;
	i->PLineArt = Qt::PenStyle(w);
 //	Py_INCREF(Py_None);
// 	return Py_None;
	Py_RETURN_NONE;
}

PyObject *scribus_setcornerrad(PyObject* /* self */, PyObject* args)
{
	char *Name = const_cast<char*>("");
	int w;
	if (!PyArg_ParseTuple(args, "i|es", &w, "utf-8", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	if (w < 0)
	{
		PyErr_SetString(PyExc_ValueError, QObject::tr("Corner radius must be a positive number.","python error"));
		return NULL;
	}
	PageItem *currItem = GetUniqueItem(QString::fromUtf8(Name));
	if (currItem == NULL)
		return NULL;
	// apply rounding
	currItem->setCornerRadius(w);
	currItem->SetFrameRound();
	ScCore->primaryMainWindow()->doc->setRedrawBounding(currItem);
	ScCore->primaryMainWindow()->view->SetFrameRounded();
 //	Py_INCREF(Py_None);
// 	return Py_None;
	Py_RETURN_NONE;
}

PyObject *scribus_setmultiline(PyObject* /* self */, PyObject* args)
{
	char *Name = const_cast<char*>("");
	char *Style = NULL;
	if (!PyArg_ParseTuple(args, "es|es", "utf-8", &Style, "utf-8", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *currItem = GetUniqueItem(QString::fromUtf8(Name));
	if (currItem == NULL)
		return NULL;
	if (!ScCore->primaryMainWindow()->doc->MLineStyles.contains(QString::fromUtf8(Style)))
	{
		PyErr_SetString(NotFoundError, QObject::tr("Line style not found.","python error"));
		return NULL;
	}
	currItem->NamedLStyle = QString::fromUtf8(Style);
 //	Py_INCREF(Py_None);
// 	return Py_None;
	Py_RETURN_NONE;
}

/*! HACK: this removes "warning: 'blah' defined but not used" compiler warnings
with header files structure untouched (docstrings are kept near declarations)
PV */
void cmdsetpropdocwarnings()
{
    QStringList s;
    s << scribus_setgradfill__doc__ << scribus_setfillcolor__doc__ << scribus_setfilltrans__doc__  << scribus_setfillblend__doc__  <<  scribus_setlinecolor__doc__  <<  scribus_setlinetrans__doc__  << scribus_setlineblend__doc__  <<  scribus_setlinewidth__doc__  <<  scribus_setlineshade__doc__  << scribus_setlinejoin__doc__  <<  scribus_setlineend__doc__  <<  scribus_setlinestyle__doc__  << scribus_setfillshade__doc__  <<  scribus_setcornerrad__doc__  <<  scribus_setmultiline__doc__;
}
