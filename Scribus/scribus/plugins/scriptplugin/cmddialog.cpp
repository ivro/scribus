#include "cmddialog.h"
#include "cmdutil.h"
#include "valuedialog.h"

#include <qmessagebox.h>
#include <qcursor.h>

PyObject *scribus_newdocdia(PyObject */*self*/)
{
	QApplication::setOverrideCursor(QCursor(Qt::ArrowCursor));
	bool ret = Carrier->slotFileNew();
	QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
//	qApp->processEvents();
	return PyInt_FromLong(static_cast<long>(ret));
}

PyObject *scribus_filedia(PyObject */*self*/, PyObject* args, PyObject* kw)
{
	char *caption = const_cast<char*>("");
	char *filter = const_cast<char*>("");
	char *defName = const_cast<char*>("");
	int haspreview = 0;
	int issave = 0;
	char* kwargs[] = {const_cast<char*>("caption"), const_cast<char*>("filter"),
						const_cast<char*>("defaultname"), const_cast<char*>("haspreview"),
						const_cast<char*>("issave"), const_cast<char*>("")};
	if (!PyArg_ParseTupleAndKeywords(args, kw, "es|esesii", kwargs,
									 "utf-8", &caption, "utf-8", &filter, "utf-8", &defName,
									 &haspreview, &issave))
		return NULL;
	QApplication::setOverrideCursor(QCursor(Qt::ArrowCursor));
	QString fName = Carrier->CFileDialog(".", QString::fromUtf8(caption), QString::fromUtf8(filter),
										 QString::fromUtf8(defName), static_cast<bool>(haspreview),
										 static_cast<bool>(issave), 0, 0);
	QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
	// FIXME: filename return unicode OK?
	return PyString_FromString(fName.utf8());
}

PyObject *scribus_messdia(PyObject */*self*/, PyObject* args, PyObject* kw)
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
						const_cast<char*>("button2"), const_cast<char*>("button3"), const_cast<char*>("")};
	if (!PyArg_ParseTupleAndKeywords(args, kw, "eses|iiii", kwargs, "utf-8", &caption, "utf-8", &message, &ico, &butt1, &butt2, &butt3))
		return NULL;
	QApplication::setOverrideCursor(QCursor(Qt::ArrowCursor));
	QMessageBox mb(QString::fromUtf8(caption), QString::fromUtf8(message), ico, butt1, butt2, butt3, Carrier);
	result = mb.exec();
	QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
	return PyInt_FromLong(static_cast<long>(result));
}

PyObject *scribus_valdialog(PyObject */*self*/, PyObject* args)
{
	char *caption = const_cast<char*>("");
	char *message = const_cast<char*>("");
	char *value = "";
	if (!PyArg_ParseTuple(args, "eses|es", "utf-8", &caption, "utf-8", &message, "utf-8", &value))
		return NULL;
	QApplication::setOverrideCursor(QCursor(Qt::ArrowCursor));
	ValueDialog *d = new ValueDialog(Carrier, "d", TRUE, 0);
	d->dialogLabel->setText(QString::fromUtf8(message));
	d->valueEdit->setText(QString::fromUtf8(value));
	d->setCaption(QString::fromUtf8(caption));
	d->exec();
	QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
	return PyString_FromString(d->valueEdit->text().utf8());
}
