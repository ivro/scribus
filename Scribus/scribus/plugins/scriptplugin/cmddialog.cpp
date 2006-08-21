/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "cmddialog.h"
#include "cmdutil.h"
#include "scribuscore.h"
#include "valuedialog.h"
#include "editformats.h"
#include "customfdialog.h"

#include <qmessagebox.h>
#include <qcursor.h>

PyObject *scribus_newdocdia(PyObject* /* self */)
{
	QApplication::setOverrideCursor(QCursor(Qt::ArrowCursor));
	bool ret = ScCore->primaryMainWindow()->slotFileNew();
	QApplication::restoreOverrideCursor();
	return PyInt_FromLong(static_cast<long>(ret));
}

PyObject *scribus_filedia(PyObject* /* self */, PyObject* args, PyObject* kw)
{
	char *caption = const_cast<char*>("");
	char *filter = const_cast<char*>("");
	char *defName = const_cast<char*>("");
	int haspreview = 0;
	int issave = 0;
	int isdir = 0;
	// FIXME: parsing named params failure. e.g. fileDialog(caption="foo", issave=True)
	// FIXME: it's a bug in Python. I'm monitoring it
	// https://sourceforge.net/tracker/index.php?func=detail&aid=893549&group_id=5470&atid=105470
	char* kwargs[] = {const_cast<char*>("caption"), const_cast<char*>("filter"),
						const_cast<char*>("defaultname"), const_cast<char*>("haspreview"),
						const_cast<char*>("issave"), const_cast<char*>("isdir"),
						NULL};
	if (!PyArg_ParseTupleAndKeywords(args, kw, "es|esesiii", kwargs,
									 "utf-8", &caption, "utf-8", &filter, "utf-8", &defName,
									 &haspreview, &issave, &isdir))
	{
		return NULL;
	}
	QApplication::setOverrideCursor(QCursor(Qt::ArrowCursor));
	/* nobool = Nothing doing boolean for CFileDialog last attrs.
	Due the 'isdir' parameter. CFileDialog needs the last 2 pointers
	initialized. */
	bool nobool = false;
	int optionFlags = 0;
	if (haspreview)
		optionFlags |= fdShowPreview;
	if (issave)
		optionFlags |= fdExistingFiles;
	if (isdir)
		optionFlags |= fdDirectoriesOnly;
	QString fName = ScCore->primaryMainWindow()->CFileDialog(".",
										 QString::fromUtf8(caption),
										 QString::fromUtf8(filter),
										 QString::fromUtf8(defName),
										 optionFlags,
										 &nobool,
										 &nobool,
										 &nobool
										);
	QApplication::restoreOverrideCursor();
	// FIXME: filename return unicode OK?
	return PyString_FromString(fName.utf8());
}

PyObject *scribus_messdia(PyObject* /* self */, PyObject* args, PyObject* kw)
{
	char *caption = const_cast<char*>("");
	char *message = const_cast<char*>("");
	uint result;
	QMessageBox::Icon ico = QMessageBox::NoIcon;
	int butt1 = QMessageBox::Ok|QMessageBox::Default;
	int butt2 = QMessageBox::NoButton;
	int butt3 = QMessageBox::NoButton;
	char* kwargs[] = {const_cast<char*>("caption"), const_cast<char*>("message"),
						const_cast<char*>("icon"), const_cast<char*>("button1"),
						const_cast<char*>("button2"), const_cast<char*>("button3"), NULL};
	if (!PyArg_ParseTupleAndKeywords(args, kw, "eses|iiii", kwargs, "utf-8", &caption, "utf-8", &message, &ico, &butt1, &butt2, &butt3))
		return NULL;
	QApplication::setOverrideCursor(QCursor(Qt::ArrowCursor));
	QMessageBox mb(QString::fromUtf8(caption), QString::fromUtf8(message), ico, butt1, butt2, butt3, ScCore->primaryMainWindow());
	result = mb.exec();
	QApplication::restoreOverrideCursor();
	return PyInt_FromLong(static_cast<long>(result));
}

PyObject *scribus_valdialog(PyObject* /* self */, PyObject* args)
{
	char *caption = const_cast<char*>("");
	char *message = const_cast<char*>("");
	char *value = const_cast<char*>("");
	if (!PyArg_ParseTuple(args, "eses|es", "utf-8", &caption, "utf-8", &message, "utf-8", &value))
		return NULL;
	QApplication::setOverrideCursor(QCursor(Qt::ArrowCursor));
	ValueDialog *d = new ValueDialog(ScCore->primaryMainWindow(), "d", true, 0);
	d->dialogLabel->setText(QString::fromUtf8(message));
	d->valueEdit->setText(QString::fromUtf8(value));
	d->setCaption(QString::fromUtf8(caption));
	d->exec();
	QApplication::restoreOverrideCursor();
	return PyString_FromString(d->valueEdit->text().utf8());
}

PyObject *scribus_newstyledialog(PyObject*, PyObject* args)
{
	/* following code is an uglu HACK. Don't take it as example!
	Paragrap styles handling will be rewritten in 1.3.x devel
	series.
	It simulates user mouse clicking in the style dialogs. Ugly.
	Unpleasant. Etc. But working. */
	uint styleCount = ScCore->primaryMainWindow()->doc->docParagraphStyles.count();
	StilFormate *dia2 = new StilFormate(ScCore->primaryMainWindow(), ScCore->primaryMainWindow()->doc);
	QApplication::setOverrideCursor(QCursor(Qt::ArrowCursor));
	dia2->neuesFormat();
	QApplication::restoreOverrideCursor();
	ScCore->primaryMainWindow()->saveStyles(dia2);
	delete dia2;
	if (styleCount == ScCore->primaryMainWindow()->doc->docParagraphStyles.count())
	{
		Py_INCREF(Py_None);
		return Py_None;
	}
	return PyString_FromString(ScCore->primaryMainWindow()->doc->docParagraphStyles[ScCore->primaryMainWindow()->doc->docParagraphStyles.count() - 1].name().utf8());
}

/*! HACK: this removes "warning: 'blash' defined but not used" compiler warnings
with header files structure untouched (docstrings are kept near declarations)
PV */
void cmddialogdocwarnings()
{
    QStringList s;
    s << scribus_newdocdia__doc__ << scribus_filedia__doc__ << scribus_messdia__doc__;
    s << scribus_valdialog__doc__ << scribus_newstyledialog__doc__;
}
