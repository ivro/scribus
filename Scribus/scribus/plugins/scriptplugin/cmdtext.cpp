#include <Python.h>
#include "cmdtext.h"
#include "cmdutil.h"
#include "cmdvar.h"

PyObject *scribus_getfontsize(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if (!Carrier->HaveDoc)
		return PyFloat_FromDouble(0.0);
	int i = GetItem(QString(Name));
	PageItem *it;
	if (i != -1)
		{
		it = doc->ActPage->Items.at(i);
		if (it->HasSel)
			{
			for (uint b = 0; b < it->Ptext.count(); b++)
				{
				if (it->Ptext.at(b)->cselect)
					return PyFloat_FromDouble(static_cast<double>(it->Ptext.at(b)->csize / 10.0));
				}
			}
		else
			return PyFloat_FromDouble(static_cast<long>(it->ISize / 10.0));
		}
	return PyFloat_FromDouble(0.0);
}

PyObject *scribus_getfont(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if (!Carrier->HaveDoc)
		return PyString_FromString("");
	int i = GetItem(QString(Name));
	PageItem *it;
	if (i != -1)
		{
		it = doc->ActPage->Items.at(i);
		if (it->HasSel)
			{
			for (uint b = 0; b < it->Ptext.count(); b++)
				{
				if (it->Ptext.at(b)->cselect)
					return PyString_FromString(it->Ptext.at(b)->cfont);
				}
			}
		else
			return PyString_FromString(it->IFont);
		}
	return PyString_FromString("");
}

PyObject *scribus_gettextsize(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if (!Carrier->HaveDoc)
		return PyInt_FromLong(0L);
	int i = GetItem(QString(Name));
	return i != -1 ?
		PyInt_FromLong(static_cast<long>(doc->ActPage->Items.at(i)->Ptext.count())) :
	  PyInt_FromLong(0L);
}

PyObject *scribus_getlinespace(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if (!Carrier->HaveDoc)
		return PyFloat_FromDouble(0.0);
	int i = GetItem(QString(Name));
	return i != -1 ?
		PyFloat_FromDouble(static_cast<double>(doc->ActPage->Items.at(i)->LineSp)) :
		PyFloat_FromDouble(0.0);
}

PyObject *scribus_getframetext(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if (!Carrier->HaveDoc)
		return PyString_FromString("");
	int i = GetItem(QString(Name));
	QString text = "";
	PageItem *it;
	if (i != -1)
		{
		it = doc->ActPage->Items.at(i);
		for (uint a = 0; a < it->Ptext.count(); a++)
			{
			if (it->HasSel)
				{
				if (it->Ptext.at(a)->cselect)
					text += it->Ptext.at(a)->ch;
				}
			else
				text += it->Ptext.at(a)->ch;
			}
		return PyString_FromString(text);
		}
	else
		return PyString_FromString("");
}

PyObject *scribus_gettext(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if (!Carrier->HaveDoc)
		return PyString_FromString("");
	int i = GetItem(QString(Name));
	QString text = "";
	PageItem *it;
	PageItem *is;
	if (i != -1)
		{
		it = doc->ActPage->Items.at(i);
		while (it->BackBox != 0)
			{
			is = doc->ActPage->Items.at(it->BackBox->ItemNr);
			it = is;
			}
		for (uint a = 0; a < it->Ptext.count(); a++)
			{
			if (it->HasSel)
				{
				if (it->Ptext.at(a)->cselect)
					text += it->Ptext.at(a)->ch;
				}
			else
				text += it->Ptext.at(a)->ch;
			}
		while (it->NextBox != 0)
			{
			is = doc->ActPage->Items.at(it->NextBox->ItemNr);
			it = is;
			for (uint a = 0; a < it->Ptext.count(); a++)
				{
				if (it->HasSel)
					{
					if (it->Ptext.at(a)->cselect)
						text += it->Ptext.at(a)->ch;
					}
				else
					text += it->Ptext.at(a)->ch;
				}
			}
		return PyString_FromString(text);
		}
	else
		return PyString_FromString("");
}

PyObject *scribus_setboxtext(PyObject *self, PyObject* args)
{
	char *Name = "";
	char *Text;
	int i;
	if (!PyArg_ParseTuple(args, "s|s", &Text, &Name))
		return NULL;
	Py_INCREF(Py_None);
	if (!Carrier->HaveDoc)
		return Py_None;
	i = GetItem(QString(Name));
	PageItem *it;
	QString Daten = QString(Text);
	if (i != -1)
		{
		it = doc->ActPage->Items.at(i);
		if (it->NextBox != 0)
			{
			PageItem *nb = it->NextBox;
			while (nb != 0)
				{
				nb->Ptext.clear();
				nb->CPos = 0;
				nb->Dirty = true;
				nb = nb->NextBox;
				}
			}
		it->Ptext.clear();
		it->CPos = 0;
		for (uint a = 0; a < Daten.length(); ++a)
			{
			struct Pti *hg = new Pti;
			hg->ch = Daten.at(a);
			if (hg->ch == QChar(10))
				hg->ch = QChar(13);
			if (hg->ch == QChar(9))
				hg->ch = " ";
			hg->cfont = it->IFont;
			hg->csize = it->ISize;
			hg->ccolor = it->TxtFill;
			hg->cshade = it->ShTxtFill;
			hg->cstroke = it->TxtStroke;
			hg->cshade2 = it->ShTxtStroke;
			hg->cscale = it->TxtScale;
			hg->cextra = 0;
			hg->cselect = false;
			hg->cstyle = 0;
 			hg->cab = doc->CurrentABStil;
			hg->xp = 0;
			hg->yp = 0;
			hg->PRot = 0;
			hg->PtransX = 0;
			hg->PtransY = 0;
			it->Ptext.append(hg);
			}
		}
	return Py_None;
}

PyObject *scribus_inserttext(PyObject *self, PyObject* args)
{
	char *Name = "";
	char *Text;
	int pos;
	if (!PyArg_ParseTuple(args, "si|s", &Text, &pos, &Name))
		return NULL;
	Py_INCREF(Py_None);
	if (!Carrier->HaveDoc)
		return Py_None;
	int i = GetItem(QString(Name));
	PageItem *it;
	QString Daten = QString(Text);
	if (i != -1)
		{
		it = doc->ActPage->Items.at(i);
		if ((pos < 0) && (pos > static_cast<int>(it->Ptext.count())))
			return Py_None;
		for (uint a = 0; a < Daten.length(); ++a)
			{
			struct Pti *hg = new Pti;
			hg->ch = Daten.at(Daten.length()-1-a);
			if (hg->ch == QChar(10))
				hg->ch = QChar(13);
			if (hg->ch == QChar(9))
				hg->ch = " ";	
			hg->cfont = it->IFont;
			hg->csize = it->ISize;
			hg->ccolor = it->TxtFill;
			hg->cshade = it->ShTxtFill;
			hg->cstroke = it->TxtStroke;
			hg->cshade2 = it->ShTxtStroke;
			hg->cscale = it->TxtScale;
			hg->cextra = 0;
			hg->cselect = false;
			hg->cstyle = 0;
 			hg->cab = doc->CurrentABStil;
			hg->xp = 0;
			hg->yp = 0;
			hg->PRot = 0;
			hg->PtransX = 0;
			hg->PtransY = 0;
			it->Ptext.insert(pos, hg);
			}
		it->CPos = pos + Daten.length();
 		it->Dirty = true;
 		it->paintObj();
		}
	return Py_None;
}

PyObject *scribus_setalign(PyObject *self, PyObject* args)
{
	char *Name = "";
	int size;
	if (!PyArg_ParseTuple(args, "i|s", &size, &Name))
		return NULL;
	Py_INCREF(Py_None);
	if (!Carrier->HaveDoc)
		return Py_None;
	int i = GetItem(QString(Name));
	if ((size > 3) || (size < 0))
		return Py_None;
	if ((i != -1) && (doc->ActPage->Items.at(i)->PType == 4))
		{
		int Apm = doc->AppMode;
		doc->ActPage->SelItem.clear();
		doc->ActPage->SelItem.append(doc->ActPage->Items.at(i));
		if (doc->ActPage->Items.at(i)->HasSel)
			doc->AppMode = 7;
		Carrier->setNewAbStyle(size);
		doc->AppMode = Apm;
		doc->ActPage->Deselect();
		}
	return Py_None;
}

PyObject *scribus_setfontsize(PyObject *self, PyObject* args)
{
	char *Name = "";
	double size;
	if (!PyArg_ParseTuple(args, "d|s", &size, &Name))
		return NULL;
	Py_INCREF(Py_None);
	if (!Carrier->HaveDoc)
		return Py_None;
	int i = GetItem(QString(Name));
	if ((size > 512) || (size < 1))
		return Py_None;
	if ((i != -1) && (doc->ActPage->Items.at(i)->PType == 4))
		{
		int Apm = doc->AppMode;
		doc->ActPage->SelItem.clear();
		doc->ActPage->SelItem.append(doc->ActPage->Items.at(i));
		if (doc->ActPage->Items.at(i)->HasSel)
			doc->AppMode = 7;
		doc->ActPage->chFSize(qRound(size * 10.0));
		doc->AppMode = Apm;
		doc->ActPage->Deselect();
		}
	return Py_None;
}

PyObject *scribus_setfont(PyObject *self, PyObject* args)
{
	char *Name = "";
	char *Font = "";
	if (!PyArg_ParseTuple(args, "s|s", &Font, &Name))
		return NULL;
	Py_INCREF(Py_None);
	if (!Carrier->HaveDoc)
		return Py_None;
	int i = GetItem(QString(Name));
	if ((i != -1) && (doc->ActPage->Items.at(i)->PType == 4))
		{
		if (Carrier->Prefs.AvailFonts.find(QString(Font)))
			{
			int Apm = doc->AppMode;
			doc->ActPage->SelItem.clear();
			doc->ActPage->SelItem.append(doc->ActPage->Items.at(i));
			if (doc->ActPage->Items.at(i)->HasSel)
				doc->AppMode = 7;
			Carrier->SetNewFont(QString(Font));
			doc->AppMode = Apm;
			doc->ActPage->Deselect();
			}
		}
	return Py_None;
}

PyObject *scribus_setlinespace(PyObject *self, PyObject* args)
{
	char *Name = "";
	double w;
	if (!PyArg_ParseTuple(args, "d|s", &w, &Name))
		return NULL;
	Py_INCREF(Py_None);
	if ((!Carrier->HaveDoc) || (w < 0.1))
		return Py_None;
	int i = GetItem(QString(Name));
	if (i != -1)
		doc->ActPage->Items.at(i)->LineSp = w;
	return Py_None;
}

PyObject *scribus_selecttext(PyObject *self, PyObject* args)
{
	char *Name = "";
	int start, ende;
	if (!PyArg_ParseTuple(args, "ii|s", &start, &ende, &Name))
		return NULL;
	Py_INCREF(Py_None);
	if (!Carrier->HaveDoc)
		return Py_None;
	int i = GetItem(QString(Name));
	PageItem *it;	
	if (i != -1)
		{
		it = doc->ActPage->Items.at(i);
		if ((start < 0) || ((start + ende) > static_cast<int>(it->Ptext.count()-1)))
			return Py_None;
		for (uint a = 0; a < it->Ptext.count(); ++a)
			it->Ptext.at(a)->cselect = false;
		if (ende == 0)
			{
			it->HasSel = false;
			return Py_None;
			}
		for (int aa = start; aa < (start + ende); ++aa)
			it->Ptext.at(aa)->cselect = true;
		it->HasSel = true;
		return Py_None;
		}
	else
		return Py_None;
}

PyObject *scribus_deletetext(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	Py_INCREF(Py_None);
	if (!Carrier->HaveDoc)
		return Py_None;
	int i = GetItem(QString(Name));
	PageItem *it;
	if (i != -1)
		{
		it = doc->ActPage->Items.at(i);
		if (it->HasSel)
			Carrier->DeleteSel(it);
		else
			{
			it->Ptext.clear();
			it->CPos = 0;
			}
		}
	return Py_None;
}

PyObject *scribus_settextfill(PyObject *self, PyObject* args)
{
	char *Name = "";
	char *Color;
	if (!PyArg_ParseTuple(args, "s|s", &Color, &Name))
		return NULL;
	Py_INCREF(Py_None);
	if (!Carrier->HaveDoc)
		return Py_None;
	int i = GetItem(QString(Name));
	PageItem *it;	
	if (i != -1)
		{
		it = doc->ActPage->Items.at(i);
		if ((it->PType == 4) || (it->PType == 8))
			{
			for (uint b = 0; b < it->Ptext.count(); b++)
				{
				if (it->HasSel)
					{
					if (it->Ptext.at(b)->cselect)
						it->Ptext.at(b)->ccolor = QString(Color);
					}
				else
					it->Ptext.at(b)->ccolor = QString(Color);
				}
			it->TxtFill = QString(Color);
			}
		}
	return Py_None;
}

PyObject *scribus_settextstroke(PyObject *self, PyObject* args)
{
	char *Name = "";
	char *Color;
	if (!PyArg_ParseTuple(args, "s|s", &Color, &Name))
		return NULL;
	Py_INCREF(Py_None);
	if (!Carrier->HaveDoc)
		return Py_None;
	int i = GetItem(QString(Name));
	PageItem *it;	
	if (i != -1)
		{
		it = doc->ActPage->Items.at(i);
		if ((it->PType == 4) || (it->PType == 8))
			{
			for (uint b = 0; b < it->Ptext.count(); b++)
				{
				if (it->HasSel)
					{
					if (it->Ptext.at(b)->cselect)
						it->Ptext.at(b)->cstroke = QString(Color);
					}
				else
					it->Ptext.at(b)->cstroke = QString(Color);
				}
			it->TxtStroke = QString(Color);
			}
		}
	return Py_None;
}

PyObject *scribus_settextshade(PyObject *self, PyObject* args)
{
	char *Name = "";
	int w;
	if (!PyArg_ParseTuple(args, "i|s", &w, &Name))
		return NULL;
	Py_INCREF(Py_None);
	if ((!Carrier->HaveDoc) || ((w < 0) || (w > 100)))
		return Py_None;
	int i = GetItem(QString(Name));
	PageItem *it;	
	if (i != -1)
		{
		it = doc->ActPage->Items.at(i);
		if ((it->PType == 4) || (it->PType == 8))
			{
			for (uint b = 0; b < it->Ptext.count(); ++b)
				{
				if (it->HasSel)
					{
					if (it->Ptext.at(b)->cselect)
						it->Ptext.at(b)->cshade = w;
					}
				else
					it->Ptext.at(b)->cshade = w;
				}
			}
		it->ShTxtFill = w;
		}
	return Py_None;
}

