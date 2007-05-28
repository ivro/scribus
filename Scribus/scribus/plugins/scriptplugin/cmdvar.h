/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef CMDVAR_H
#define CMDVAR_H

#if defined(_XOPEN_SOURCE)
#undef _XOPEN_SOURCE
#endif

#include "scconfig.h"

#if defined(HAVE_BOOST_PYTHON)
#include <boost/python.hpp>
#else
#include <Python.h>
#endif

#include <qstring.h>

#include "scribus.h"

#ifndef Py_RETURN_NONE
	#define Py_RETURN_NONE return Py_INCREF(Py_None), Py_None
#endif

#ifndef Py_RETURN_TRUE
	#define Py_RETURN_TRUE return Py_INCREF(Py_True), Py_True
#endif

class ScripterCore;

// Globals for testing Qt properties and probably other more intresting future
// uses.
/** @brief A PyCObject containing a pointer to qApp */
extern PyObject* wrappedQApp;
/** @brief A PyCObject containing a pointer to the main window ('Carrier') */
extern PyObject* wrappedMainWindow;

/** @brief A pointer to the ScripterCore instance */
extern ScripterCore* scripterCore;

/** @brief Initialize the 'scribus' Python module in the currently active interpreter */
extern "C" void initscribus(ScribusMainWindow *pl);

/* Exceptions */
/*! Common scribus Exception */
extern PyObject* ScribusException;
/*! Exception raised when no document opened - see checkHaveDocument() in cmdutil.cpp */
extern PyObject* NoDocOpenError;
/*! Exception raised when an operation is performed on a frame type that doesn't support it.*/
extern PyObject* WrongFrameTypeError;
/*! Exception raised by GetUniqueItem when it can't find a valid frame or a suitable selection to use. */
extern PyObject* NoValidObjectError;
/*! A general exception for when objects such as colors and fonts cannot be found. */
extern PyObject* NotFoundError;
/*! Exception raised when the user tries to create an object with the same name as one that already exists */
extern PyObject* NameExistsError;

#endif

