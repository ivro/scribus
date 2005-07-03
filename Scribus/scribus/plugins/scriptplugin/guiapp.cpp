/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
#include "guiapp.h"
#include "cmdutil.h"

#include <qstring.h>
#include <qcursor.h>

PyObject *scribus_messagebartext(PyObject */*self*/, PyObject* args)
{
	char *aText;
	if (!PyArg_ParseTuple(args, "es", "utf-8", &aText))
		return NULL;
	Carrier->FMess->setText(QString::fromUtf8(aText));
	Py_INCREF(Py_None);
	return Py_None;
}

PyObject *scribus_progressreset(PyObject */*self*/)
{
	Carrier->FProg->reset();
	qApp->processEvents();
	Py_INCREF(Py_None);
	return Py_None;
}

PyObject *scribus_progresssettotalsteps(PyObject */*self*/, PyObject* args)
{
	int steps;
	if (!PyArg_ParseTuple(args, "i", &steps))
		return NULL;
	Carrier->FProg->setTotalSteps(steps);
	Carrier->FProg->setProgress(0);
	qApp->processEvents();
	Py_INCREF(Py_None);
	return Py_None;
}

PyObject *scribus_progresssetprogress(PyObject */*self*/, PyObject* args)
{
	int position;
	if (!PyArg_ParseTuple(args, "i", &position))
		return NULL;
	if (position > Carrier->FProg->totalSteps())
	{
		PyErr_SetString(PyExc_ValueError, QObject::tr("Tried to set progress > maximum progress"));
		return NULL;
	}
	Carrier->FProg->setProgress(position);
	qApp->processEvents();
	Py_INCREF(Py_None);
	return Py_None;
}


PyObject *scribus_setcursor(PyObject */*self*/, PyObject* args)
{
	char *aCursor;
	qDebug("WARNING! SetCursor() is not stable!");
	if (!PyArg_ParseTuple(args, "es", "ascii", &aCursor))
		return NULL;
	if (strcmp(aCursor, "wait") == 0)
		qApp->setOverrideCursor(Qt::WaitCursor);
	else
		qApp->restoreOverrideCursor();
	Py_INCREF(Py_None);
	return Py_None;
}

PyObject *scribus_docchanged(PyObject */*self*/, PyObject* args)
{
	int aValue;
	if (!PyArg_ParseTuple(args, "i", &aValue))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	Carrier->slotDocCh(static_cast<bool>(aValue));
	/*
	if (aValue>0)
		Carrier->slotDocCh(true);
	else
		Carrier->slotDocCh(false);*/
	Py_INCREF(Py_None);
	return Py_None;
}

