#include <Python.h>
#include <structmember.h>
#include <qfileinfo.h>

#include "cmdvar.h"
#include "cmdutil.h"
#include "objpdffile.h"
#include <vector>
// these functions are located at utils.cpp
void ReOrderText(ScribusDoc *doc, ScribusView *view);
// end of utils.cpp
//this is in file scribus.cpp

extern ProfilesL InputProfiles;
#ifdef HAVE_CMS
extern bool CMSuse;
#endif
extern double UmReFaktor;
//

static int minmaxi(int val, int min, int max)
{
        if (val < min)
                return min;
        else if (val > max)
                return max;
        else return val;
}

static double minmaxd(double val, double min, double max)
{
        if (val < min)
                return min;
        else if (val > max)
                return max;
        else return val;
}

typedef struct
{
        PyObject_HEAD
        PyObject *file; // string - file to save into
        PyObject *fonts; // list of string - fonts to  embed
        PyObject *pages; // list of int - pages to print
        int thumbnails; // bool -
        int compress; // bool -
        int compressmtd; // int - 0=automatic 1=jpeg 2=zip 3=none
        int quality; // int - 0=Maximum 4=minimum
        PyObject *resolution; // int - 35 - 4000 default=300 dpi
        PyObject *downsample; // int - 35 - 4000 default=0 do not downsample ; other downsample to this resolution
        int bookmarks; // bool -
        int binding; // bool - 0 -left margin 1 -right margin
        int presentation; // bool -
        PyObject *effval; // list of list of 5 int - effect to apply to each page during presentation
        int article; // bool -
        int encrypt; // bool -
        int uselpi; // bool -
        PyObject *lpival; // list of elements which has structure [siii]
        PyObject *owner; // string - owner's password
        PyObject *user; // string - user's password
        int aprint; // bool -  allow printing
        int achange; // bool - allow changing
        int acopy; // bool - allow copying
        int aanot; // bool - allow adding annotation and fields
        int version; // int - version of pdf (12=1.2; 13=1.3; 14=1.4)
        int outdst; // int - output destination 0 - screen, 1 - printer

        int profiles; // bool
        int profilei; // bool
        int intents; // int - 0 - 3 QString tmp_ip[] = { tr("Perceptual"), tr("Relative Colorimetric"), tr("Saturation"), tr("Absolute Colorimetric")};
        int intenti; // int - 0 - 3 QString tmp_ip[] = { tr("Perceptual"), tr("Relative Colorimetric"), tr("Saturation"), tr("Absolute Colorimetric")};
        int noembicc; // bool - "Don't use embedded ICC profiles"
        PyObject *solidpr; // string
        PyObject *imagepr; // string
        PyObject *printprofc; // string
        PyObject *info; // string
        double bleedt; // double - 0 to hight of page
        double bleedl; // double - 0 to width of page
        double bleedr; // double - 0 to width of page
        double bleedb; // double - 0 to hight of page

} PDFfile;

static void PDFfile_dealloc(PDFfile *self)
{
        Py_XDECREF(self->file);
        Py_XDECREF(self->fonts);
        Py_XDECREF(self->pages);
        Py_XDECREF(self->resolution);
        Py_XDECREF(self->downsample);
        Py_XDECREF(self->effval);
        Py_XDECREF(self->lpival);
        Py_XDECREF(self->owner);
        Py_XDECREF(self->user);
        Py_XDECREF(self->solidpr);
        Py_XDECREF(self->imagepr);
        Py_XDECREF(self->printprofc);
        Py_XDECREF(self->info);
        self->ob_type->tp_free((PyObject *)self);
}

static PyObject * PDFfile_new(PyTypeObject *type, PyObject *args, PyObject *kwds)
{
// do not create new object if there is no opened document
        if (!Carrier->HaveDoc) {
                PyErr_SetString(PyExc_SystemError, "Need to open document first");
                return NULL;
        }

        PDFfile *self;

        self = (PDFfile *)type->tp_alloc(type, 0);
        if (self) {
// set file attribute
                self->file = PyString_FromString("");
                if (!self->file){
                        Py_DECREF(self);
                        return NULL;
                }
// set fonts attribute
                self->fonts = PyList_New(0);
                if (!self->fonts){
                        Py_DECREF(self);
                        return NULL;
                }
// set pages attribute
                self->pages = PyList_New(0);
                if (self->pages == NULL){
                        Py_DECREF(self);
                        return NULL;
                }
// set thumbnails attribute
                self->thumbnails = 0;
// set compress attribute
                self->compress = 0;
// set compressmtd attribute
                self->compressmtd = 0;
// set quality attribute
                self->quality = 0;
// set resolution attribute
                self->resolution = PyInt_FromLong(300);
                if (!self->resolution){
                        Py_DECREF(self);
                        return NULL;
                }
// set downsample attribute
                self->downsample = PyInt_FromLong(0);
                if (!self->downsample){
                        Py_DECREF(self);
                        return NULL;
                }
// set bookmarks attribute
                self->bookmarks = 0;
// set binding attribute
                self->binding = 0;
// set presentation attribute
                self->presentation = 0;
// set effval attribute
                self->effval = PyList_New(0);
                if (!self->effval){
                        Py_DECREF(self);
                        return NULL;
                }
// set article attribute
                self->article = 0;
// set encrypt attribute
                self->encrypt = 0;
// set uselpi attribute
                self->uselpi = 0;
// set lpival attribute
                self->lpival = PyList_New(0);
                if (!self->lpival){
                        Py_DECREF(self);
                        return NULL;
                }
// set owner attribute
                self->owner = PyString_FromString("");
                if (!self->owner){
                        Py_DECREF(self);
                        return NULL;
                }
// set user attribute
                self->user = PyString_FromString("");
                if (!self->user){
                        Py_DECREF(self);
                        return NULL;
                }
// set aprint attribute
                self->aprint = 1;
// set achange attribute
                self->achange = 1;
// set acopy attribute
                self->acopy = 1;
// set aanot attribute
                self->aanot = 1;
// set version attribute
                self->version = 14;
// set output attribute
                self->outdst = 0;


                self->profiles = 0; // bool
                self->profilei = 0; // bool
                self->intents = 0; // int - 0 - ?
                self->intenti = 0; // int - 0 - ?
                self->noembicc = 0; // bool
                self->solidpr = PyString_FromString("");
                if (!self->solidpr){
                        Py_DECREF(self);
                        return NULL;
                }
                self->imagepr = PyString_FromString("");
                if (!self->imagepr){
                        Py_DECREF(self);
                        return NULL;
                }
                self->printprofc = PyString_FromString("");
                if (!self->printprofc){
                        Py_DECREF(self);
                        return NULL;
                }
                self->info = PyString_FromString("");
                if (!self->info){
                        Py_DECREF(self);
                        return NULL;
                }
                self->bleedt = 0; // double -
                self->bleedl = 0; // double -
                self->bleedr = 0; // double -
                self->bleedb = 0; // double -
        }
        return (PyObject *) self;
}

static int PDFfile_init(PDFfile *self, PyObject *args, PyObject *kwds)
{
        if (!Carrier->HaveDoc) {
                PyErr_SetString(PyExc_SystemError, "Must open doc first");
                return -1;
        }
// defaut save into file
        QString tf = Carrier->doc->PDF_Optionen.Datei;
        if (tf == "") {
                QFileInfo fi = QFileInfo(Carrier->doc->DocName);
                tf = fi.dirPath()+"/"+fi.baseName()+".pdf";
        }
        PyObject *file = NULL;
        file = PyString_FromString(tf.ascii());
        if (file){
                Py_DECREF(self->file);
                self->file = file;
        } else {
                PyErr_SetString(PyExc_SystemError, "Can not initialize 'file' attribute");
                return -1;
        }
// embed all used fonts
        PyObject *fonts = NULL;
        fonts = PyList_New(0);
        if (fonts){
                Py_DECREF(self->fonts);
                self->fonts = fonts;
        } else {
                PyErr_SetString(PyExc_SystemError, "Can not initialize 'fonts' attribute");
                return -1;
        }
        // get all used fonts
        QMap<QString,QFont> ReallyUsed;
        ReallyUsed.clear();
        Carrier->GetUsedFonts(&ReallyUsed);
        // create list of all used fonts
        QValueList<QString> tmpEm;
        tmpEm = ReallyUsed.keys();
        QValueList<QString>::Iterator itef;
        for (itef = tmpEm.begin(); itef != tmpEm.end(); ++itef) {
                if (Carrier->Prefs.AvailFonts[(*itef).ascii()]->HasMetrics) {
                        PyObject *tmp= NULL;
                        tmp = PyString_FromString((*itef).ascii());
                        if (tmp) {
                                PyList_Append(self->fonts, tmp);
// do i need Py_DECREF(tmp) here?
// Does PyList_Append increase reference or 'steal' one from provided argument
// If it 'steal' reference comment next line
                                Py_DECREF(tmp);
                        }
                        else {
                                PyErr_SetString(PyExc_SystemError, "Can not initialize 'fonts' attribute");
                                return -1;
                        }
                }
        }
// set to print all pages
        PyObject *pages = NULL;
        int num = 0;
        // which one should I use ???
        // new = Carrier->view->Pages.count()
        num = Carrier->doc->PageC;
        pages = PyList_New(num);
        if (!pages){
                PyErr_SetString(PyExc_SystemError, "Can not initialize 'pages' attribute");
                return -1;
        }
        for (int i = 0; i<num; ++i) {
                PyObject *tmp;
                tmp = PyInt_FromLong((long)i+1L);
                if (tmp)
                        PyList_SetItem(pages, i, tmp);
                else {
                        PyErr_SetString(PyExc_SystemError, "Can not initialize 'pages' attribute");
                        return -1;
                }
        }
        Py_DECREF(self->pages);
        self->pages = pages;
// do not print thumbnails
        self->thumbnails = Carrier->doc->PDF_Optionen.Thumbnails;
// set automatic compression
        self->compress = Carrier->doc->PDF_Optionen.Compress;
        self->compressmtd = Carrier->doc->PDF_Optionen.CompressMethod;
// use maximum image quality
        self->quality = Carrier->doc->PDF_Optionen.Quality;
// default resolution
        PyObject *resolution = NULL;
        resolution = PyInt_FromLong(300);
        if (resolution){
                Py_DECREF(self->resolution);
                self->resolution = resolution;
        } else {
                PyErr_SetString(PyExc_SystemError, "Can not initialize 'resolutin' attribute");
                return -1;
        }
// do not downsample images
        int down = Carrier->doc->PDF_Optionen.RecalcPic ? Carrier->doc->PDF_Optionen.PicRes : 0;
        PyObject *downsample = NULL;
        downsample = PyInt_FromLong(down);
        if (downsample){
                Py_DECREF(self->downsample);
                self->downsample = downsample;
        } else {
                PyErr_SetString(PyExc_SystemError, "Can not initialize 'downsamle' attribute");
                return -1;
        }
// no bookmarks
        self->bookmarks = Carrier->doc->PDF_Optionen.Bookmarks;
// left margin binding
        self->binding = Carrier->doc->PDF_Optionen.Binding;
// do not enable presentation effects
        self->presentation = Carrier->doc->PDF_Optionen.PresentMode;
// set effects values for all pages
        PyObject *effval = NULL;
        num = 0;
        // which one should I use ???
        // new = Carrier->view->Pages.count();
        num = Carrier->doc->PageC;
        effval = PyList_New(num);
        if (!effval){
                PyErr_SetString(PyExc_SystemError, "Can not initialize 'effval' attribute");
                return -1;
        }
        int num2 = Carrier->doc->PDF_Optionen.PresentVals.count();
        int i;
        for (i = 0; i<num2; ++i) {
                PyObject *tmp;
                PreSet t = Carrier->doc->PDF_Optionen.PresentVals[i];
                tmp = Py_BuildValue("[iiiiii]", t.EffektLen, t.AnzeigeLen,
                                    t.Effekt, t.Dm, t.M, t.Di );
                if (tmp)
                        PyList_SetItem(effval, i, tmp);
                else {
                        PyErr_SetString(PyExc_SystemError, "Can not initialize 'effval' attribute");
                        return -1;
                }
                for (; i<num; ++i) {
                        PyObject *tmp;
                        tmp = Py_BuildValue("[iiiiii]", 1, 1, 0, 0, 0, 0);
                        if (tmp)
                                PyList_SetItem(effval, i, tmp);
                        else {
                                PyErr_SetString(PyExc_SystemError, "Can not initialize 'effval' attribute");
                                return -1;
                        }
                }
        }
        Py_DECREF(self->effval);
        self->effval = effval;
// do not save linked text frames as PDF article
        self->article = Carrier->doc->PDF_Optionen.Articles;
// do not encrypt file
        self->encrypt = Carrier->doc->PDF_Optionen.Encrypt;
// do not Use Custom Rendering Settings
        self->uselpi = Carrier->doc->PDF_Optionen.UseLPI;
// get default values for lpival
        int n = Carrier->doc->PDF_Optionen.LPISettings.size();
        PyObject *lpival=PyList_New(n);
        if (!lpival){
                PyErr_SetString(PyExc_SystemError, "Can not initialize 'lpival' attribute");
                return -1;
        }
        QMap<QString,LPIset>::Iterator it = Carrier->doc->PDF_Optionen.LPISettings.begin();
        while (it != Carrier->doc->PDF_Optionen.LPISettings.end()) {
                PyObject *tmp;
                tmp = Py_BuildValue("[siii]", it.key().ascii(), it.data().Frequency,
                                    it.data().Angle, it.data().SpotFunc);
                if (!tmp) {
                        PyErr_SetString(PyExc_SystemError, "Can not initialize 'lpival' attribute");
                        return -1;
                }
                PyList_SetItem(lpival, --n, tmp);
                ++it;
        }
        PyList_Reverse(lpival);
        Py_DECREF(self->lpival);
        self->lpival = lpival;
// set owner's password
        PyObject *owner = NULL;
        owner = PyString_FromString(Carrier->doc->PDF_Optionen.PassOwner.ascii());
        if (owner){
                Py_DECREF(self->owner);
                self->owner = owner;
        } else {
                PyErr_SetString(PyExc_SystemError, "Can not initialize 'owner' attribute");
                return -1;
        }
// set user'a password
        PyObject *user = NULL;
        user = PyString_FromString(Carrier->doc->PDF_Optionen.PassUser.ascii());
        if (user){
                Py_DECREF(self->user);
                self->user = user;
        } else {
                PyErr_SetString(PyExc_SystemError, "Can not initialize 'user' attribute");
                return -1;
        }
// allow printing document
        self->aprint = Carrier->doc->PDF_Optionen.Permissions & 4;
// allow changing document
        self->achange = Carrier->doc->PDF_Optionen.Permissions & 8;
// allow copying document
        self->acopy = Carrier->doc->PDF_Optionen.Permissions & 16;
// allow adding annotation and fields
        self->aanot = Carrier->doc->PDF_Optionen.Permissions & 32;
// use 1.4 pdf version *aka. Acrobat 5)
        self->version = Carrier->doc->PDF_Optionen.Version;
// output destination is screen
        self->outdst = Carrier->doc->PDF_Optionen.UseRGB ? 0 : 1;

        self->profiles = Carrier->doc->PDF_Optionen.UseProfiles; // bool
        self->profilei = Carrier->doc->PDF_Optionen.UseProfiles2; // bool
        self->noembicc = Carrier->doc->PDF_Optionen.EmbeddedI; // bool
        self->intents = Carrier->doc->PDF_Optionen.Intent; // int - 0 - 3
        self->intenti = Carrier->doc->PDF_Optionen.Intent2; // int - 0 - 3
        QString tp = Carrier->doc->PDF_Optionen.SolidProf;
	if (!InputProfiles.contains(tp))
		tp = Carrier->view->Doc->CMSSettings.DefaultInputProfile2;
        PyObject *solidpr = NULL;
        solidpr = PyString_FromString(tp.ascii());
        if (solidpr){
                Py_DECREF(self->solidpr);
                self->solidpr = solidpr;
        } else {
                PyErr_SetString(PyExc_SystemError, "Can not initialize 'solidpr' attribute");
                return -1;
        }
        QString tp2 = Carrier->doc->PDF_Optionen.ImageProf;
	if (!InputProfiles.contains(tp2))
		tp2 = Carrier->view->Doc->CMSSettings.DefaultInputProfile2;
        PyObject *imagepr = NULL;
	imagepr = PyString_FromString(tp2.ascii());
        if (imagepr){
                Py_DECREF(self->imagepr);
                self->imagepr = imagepr;
        } else {
                PyErr_SetString(PyExc_SystemError, "Can not initialize 'imagepr' attribute");
                return -1;
        }
	QString tp3 = Carrier->doc->PDF_Optionen.PrintProf;
	if (!Carrier->PDFXProfiles.contains(tp3))
		tp3 = Carrier->view->Doc->CMSSettings.DefaultPrinterProfile;
        PyObject *printprofc = NULL;
        printprofc = PyString_FromString(tp3.ascii());
        if (printprofc){
                Py_DECREF(self->printprofc);
                self->printprofc = printprofc;
        } else {
                PyErr_SetString(PyExc_SystemError, "Can not initialize 'printprofc' attribute");
                return -1;
        }
        QString tinfo = Carrier->doc->PDF_Optionen.Info;
        PyObject *info = NULL;
        info = PyString_FromString(tinfo.ascii());
        if (info){
                Py_DECREF(self->info);
                self->info = info;
        } else {
                PyErr_SetString(PyExc_SystemError, "Can not initialize 'info' attribute");
                return -1;
        }
        self->bleedt = Carrier->doc->PDF_Optionen.BleedTop*UmReFaktor; // double -
        self->bleedl = Carrier->doc->PDF_Optionen.BleedLeft*UmReFaktor; // double -
        self->bleedr = Carrier->doc->PDF_Optionen.BleedRight*UmReFaktor; // double -
        self->bleedb = Carrier->doc->PDF_Optionen.BleedBottom*UmReFaktor; // double -

        return 0;
}

static PyMemberDef PDFfile_members[] = {
        {"thumbnails", T_INT, offsetof(PDFfile, thumbnails), 0, "Generate thumbnails. Bool value."},
        {"compress", T_INT, offsetof(PDFfile, compress), 0, "Compression switch. Bool value."},
        {"compressmtd", T_INT, offsetof(PDFfile, compressmtd), 0, "Compression method.\n\t0 - Automatic\n\t1 - JPEG\n\t2 - zip\n\t3 - None."},
        {"quality", T_INT, offsetof(PDFfile, quality), 0, "Image quality\n\t0 - Maximum\n\t1 - High\n\t2 - Medium\n\t3 - Low\n\t4 - Minimum"},
        {"bookmarks", T_INT, offsetof(PDFfile, bookmarks), 0, "Embed the bookmarks you created in your document.\nThese are useful for navigating long PDF documents.\nBool value"},
        {"binding", T_INT, offsetof(PDFfile, binding), 0, "Choose binding.\n\t0 - Left binding\n\t1 - Right binding"},
        {"presentation", T_INT, offsetof(PDFfile, presentation), 0, "Enable Presentation Effects.Bool value"},
        {"article", T_INT, offsetof(PDFfile, article), 0, "Save Linked Text Frames as PDF Articles\n\tBool value"},
        {"encrypt", T_INT, offsetof(PDFfile, encrypt), 0, "Use Encription. Bool value"},
        {"uselpi", T_INT, offsetof(PDFfile, uselpi), 0, "Use Custom Rendering Settings. Bool value"},
        {"aprint", T_INT, offsetof(PDFfile, aprint), 0, "Allow Printing the Document. Bool value"},
        {"achange", T_INT, offsetof(PDFfile, achange), 0, "Allow Changing the Document. Bool value"},
        {"acopy", T_INT, offsetof(PDFfile, acopy), 0, "Allow Copying Text and Graphics. Bool value"},
        {"aanot", T_INT, offsetof(PDFfile, aanot), 0, "Allow Adding Annotations and Fields. Bool value"},
        {"version", T_INT, offsetof(PDFfile, version), 0, "Choose PDF version to use:\n\t12 = PDF/X-3\n\t13 = PDF 1.3 (Acrobat 4)\n\t14 = PDF 1.4 (Acrobat 5)"},
        {"outdst", T_INT, offsetof(PDFfile, outdst), 0, "Output destination.\n\t0 - screen\n\t1 - printer"},
        {"profiles", T_INT, offsetof(PDFfile, profiles), 0, "Embed a color profile for solid colors. Bool value."},
        {"profilei", T_INT, offsetof(PDFfile, profilei), 0, "Embed a color profile for images. Bool value."},
        {"intents", T_INT, offsetof(PDFfile, intents), 0, "Rendering intent for solid colors\n\t0 - Perceptual\n\t1 - Relative Colorimetric\n\t2 - Saturation\n\t3 - Absolute Colorimetric"},
        {"intenti", T_INT, offsetof(PDFfile, intenti), 0, "Rendering intent for images\n\t0 - Perceptual\n\t1 - Relative Colorimetric\n\t2 - Saturation\n\t3 - Absolute Colorimetric"},
        {"noembicc", T_INT, offsetof(PDFfile, noembicc), 0, "Don't use embedded ICC profiles. Bool value"},
        {"bleedt", T_DOUBLE, offsetof(PDFfile, bleedt), 0, "Bleed Top\n""Distance for bleed from the top of the physical page"},
        {"bleedl", T_DOUBLE, offsetof(PDFfile, bleedl), 0, "Bleed Left\n""Distance for bleed from the left of the physical page"},
        {"bleedr", T_DOUBLE, offsetof(PDFfile, bleedr), 0, "Bleed Right\n""Distance for bleed from the right of the physical page"},
        {"bleedb", T_DOUBLE, offsetof(PDFfile, bleedb), 0, "Bleed Bottom\n""Distance for bleed from the bottom of the physical page"},
        {NULL}                      // sentinel
};


/* Here begins Getter & Setter functions */

static PyObject *PDFfile_getfile(PDFfile *self, void *closure)
{
        Py_INCREF(self->file);
        return self->file;
}

static int PDFfile_setfile(PDFfile *self, PyObject *value, void *closure)
{
        if (value == NULL) {
                PyErr_SetString(PyExc_TypeError, "Cannot delete 'file' attribute.");
                return -1;
        }
        if (!PyString_Check(value)) {
                PyErr_SetString(PyExc_TypeError, "The 'file' attribute value must be string.");
                return -1;
        }
        Py_DECREF(self->file);
        Py_INCREF(value);
        self->file = value;
        return 0;
}

static PyObject *PDFfile_getfonts(PDFfile *self, void *closure)
{
        Py_INCREF(self->fonts);
        return self->fonts;
}

static int PDFfile_setfonts(PDFfile *self, PyObject *value, void *closure)
{
        if (value == NULL) {
                PyErr_SetString(PyExc_TypeError, "Cannot delete 'fonts' attribute.");
                return -1;
        }
        if (!PyList_Check(value)) {
                PyErr_SetString(PyExc_TypeError, "The 'fonts' attribute value must be list of strings.");
                return -1;
        }
        int n;
        n = PyList_Size(value);
        for (int i=0; i<n; ++i)
                if (!PyString_Check(PyList_GetItem(value, i))) {
                        PyErr_SetString(PyExc_TypeError, "The 'fonts' list must contain only strings.");
                        return -1;
                }
// Do I need to check if supplied string is really
// name of available font???
// this is not implemented yet
        Py_DECREF(self->fonts);
        Py_INCREF(value);
        self->fonts = value;
        PyList_Sort(self->fonts);
        return 0;
}

static PyObject *PDFfile_getpages(PDFfile *self, void *closure)
{
        Py_INCREF(self->pages);
        return self->pages;
}

static int PDFfile_setpages(PDFfile *self, PyObject *value, void *closure)
{
        if (value == NULL) {
                PyErr_SetString(PyExc_TypeError, "Cannot delete 'pages' attribute.");
                return -1;
        }
        if (!PyList_Check(value)) {
                PyErr_SetString(PyExc_TypeError, "'pages' attribute value must be list of integers.");
                return -1;
        }
        int len = PyList_Size(value);
        for (int i = 0; i<len; i++){
                PyObject *tmp = PyList_GetItem(value, i);
                // I did not check if tmp is NULL
                // how can PyList_GetItem fail in this case (my guess: short of available memory?)
                // Also do I need Py_INCREF or Py_DECREF here?
                if (!PyInt_Check(tmp)){
                        PyErr_SetString(PyExc_TypeError, "'pages' list must contain only integers.");
                        return -1;
                }
                if (PyInt_AsLong(tmp) > Carrier->doc->PageC || PyInt_AsLong(tmp) < 1) {
                        PyErr_SetString(PyExc_ValueError, "'pages' value out of range.");
                        return -1;
                }
        }
        Py_DECREF(self->pages);
        Py_INCREF(value);
        self->pages = value;
        PyList_Sort(self->pages);
        return 0;
}


static PyObject *PDFfile_getresolution(PDFfile *self, void *closure)
{
        Py_INCREF(self->resolution);
        return self->resolution;
}

static int PDFfile_setresolution(PDFfile *self, PyObject *value, void *closure)
{
        if (value == NULL) {
                PyErr_SetString(PyExc_TypeError, "Cannot delete 'resolution' attribute.");
                return -1;
        }
        if (!PyInt_Check(value)) {
                PyErr_SetString(PyExc_TypeError, "'resolution' attribute value must be integer.");
                return -1;
        }
        int n = PyInt_AsLong(value);
        if (n<35 || n>4000) {
                PyErr_SetString(PyExc_ValueError, "'compress' value must be in interval from 35 to 4000");
                return -1;
        }
        Py_DECREF(self->resolution);
        Py_INCREF(value);
        self->resolution = value;
        return 0;
}

static PyObject *PDFfile_getdownsample(PDFfile *self, void *closure)
{
        Py_INCREF(self->downsample);
        return self->downsample;
}

static int PDFfile_setdownsample(PDFfile *self, PyObject *value, void *closure)
{
        if (value == NULL) {
                PyErr_SetString(PyExc_TypeError, "Cannot delete 'downsample' attribute.");
                return -1;
        }
        if (!PyInt_Check(value)) {
                PyErr_SetString(PyExc_TypeError, "'downsample' attribute value must be integer.");
                return -1;
        }
        int n = PyInt_AsLong(value);
        if (n!=0 && (n<35 || n>PyInt_AsLong(self->resolution))) {
                PyErr_SetString(PyExc_TypeError, "'downsample' value must be 0 or in interval from 35 to value of 'resolutin'");
                return -1;
        }
        Py_DECREF(self->downsample);
        Py_INCREF(value);
        self->downsample = value;
        return 0;
}

static PyObject *PDFfile_geteffval(PDFfile *self, void *closure)
{
        Py_INCREF(self->effval);
        return self->effval;
}

static int PDFfile_seteffval(PDFfile *self, PyObject *value, void *closure)
{
        if (value == NULL) {
                PyErr_SetString(PyExc_TypeError, "Cannot delete 'effval' attribute.");
                return -1;
        }
        if (!PyList_Check(value)) {
                PyErr_SetString(PyExc_TypeError, "'effval' must be list.");
                return -1;
        }
        int n = PyList_Size(value);
        for (int i=0; i<n; ++i) {
                PyObject *tmp = PyList_GetItem(value, i);
                if (!PyList_Check(tmp)) {
                        PyErr_SetString(PyExc_TypeError, "elemets of 'effval' must be list of five integers.");
                        return -1;
                }
                int j = PyList_Size(tmp);
                if (j != 6) {
                        PyErr_SetString(PyExc_TypeError, "elemets of 'effval' must have exactly six integers.");
                        return -1;
                }
                for ( --j; j > -1; --j) {
                        if (!PyInt_Check(PyList_GetItem(tmp, j))) {
                                PyErr_SetString(PyExc_TypeError, "innermost element of 'effval' must be integers.");
                                return -1;
                        }
                }
        }
        Py_DECREF(self->effval);
        Py_INCREF(value);
        self->effval = value;
        return 0;
}

static PyObject *PDFfile_getlpival(PDFfile *self, void *closure)
{
        Py_INCREF(self->lpival);
        return self->lpival;
}

static int PDFfile_setlpival(PDFfile *self, PyObject *value, void *closure)
{
        if (value == NULL) {
                PyErr_SetString(PyExc_TypeError, "Cannot delete 'lpival' attribute.");
                return -1;
        }
        if (!PyList_Check(value)) {
                PyErr_SetString(PyExc_TypeError, "'lpival' must be list.");
                return -1;
        }
        // Do I need Py_INCREF or Py_DECREF here?
        int n = PyList_Size(value);
        for (int i=0; i<n; ++i) {
                PyObject *tmp = PyList_GetItem(value, i);
                if (!PyList_Check(tmp)) {
                        PyErr_SetString(PyExc_TypeError, "elemets of 'lpival' must be list of five integers.");
                        return -1;
                }
                int j = PyList_Size(tmp);
                if (j != 4) {
                        PyErr_SetString(PyExc_TypeError, "elemets of 'lpival' must have exactly four members.");
                        return -1;
                }
                for ( --j; j > 0; --j) {
                        if (!PyInt_Check(PyList_GetItem(tmp, j))) {
                                PyErr_SetString(PyExc_TypeError, "'lpival'elements must have structure [siii]");
                                return -1;
                        }
                }
                if (!PyString_Check(PyList_GetItem(tmp, 0))) {
                        PyErr_SetString(PyExc_TypeError, "'lpival'elements must have structure [siii]");
                        return -1;
                }
        }
        Py_DECREF(self->lpival);
        Py_INCREF(value);
        self->lpival = value;
        return 0;
}

static PyObject *PDFfile_getowner(PDFfile *self, void *closure)
{
        Py_INCREF(self->owner);
        return self->owner;
}

static int PDFfile_setowner(PDFfile *self, PyObject *value, void *closure)
{
        if (value == NULL) {
                PyErr_SetString(PyExc_TypeError, "Cannot delete 'owner' attribute.");
                return -1;
        }
        if (!PyString_Check(value)) {
                PyErr_SetString(PyExc_TypeError, "'owner' attribute value must be string.");
                return -1;
        }
        Py_DECREF(self->owner);
        Py_INCREF(value);
        self->owner = value;
        return 0;
}

static PyObject *PDFfile_getuser(PDFfile *self, void *closure)
{
        Py_INCREF(self->user);
        return self->user;
}

static int PDFfile_setuser(PDFfile *self, PyObject *value, void *closure)
{
        if (value == NULL) {
                PyErr_SetString(PyExc_TypeError, "Cannot delete 'user' attribute.");
                return -1;
        }
        if (!PyString_Check(value)) {
                PyErr_SetString(PyExc_TypeError, "'user' attribute value must be string.");
                return -1;
        }
        Py_DECREF(self->user);
        Py_INCREF(value);
        self->user = value;
        return 0;
}

static PyObject *PDFfile_getsolidpr(PDFfile *self, void *closure)
{
        Py_INCREF(self->solidpr);
        return self->solidpr;
}

static int PDFfile_setsolidpr(PDFfile *self, PyObject *value, void *closure)
{
        if (value == NULL) {
                PyErr_SetString(PyExc_TypeError, "Cannot delete 'solidpr' attribute.");
                return -1;
        }
        if (!PyString_Check(value)) {
                PyErr_SetString(PyExc_TypeError, "The 'solidpr' attribute value must be string.");
                return -1;
        }
        Py_DECREF(self->solidpr);
        Py_INCREF(value);
        self->solidpr = value;
        return 0;
}

static PyObject *PDFfile_getimagepr(PDFfile *self, void *closure)
{
        Py_INCREF(self->imagepr);
        return self->imagepr;
}

static int PDFfile_setimagepr(PDFfile *self, PyObject *value, void *closure)
{
        if (value == NULL) {
                PyErr_SetString(PyExc_TypeError, "Cannot delete 'imagepr' attribute.");
                return -1;
        }
        if (!PyString_Check(value)) {
                PyErr_SetString(PyExc_TypeError, "The 'imagepr' attribute value must be string.");
                return -1;
        }
        Py_DECREF(self->imagepr);
        Py_INCREF(value);
        self->imagepr = value;
        return 0;
}

static PyObject *PDFfile_getprintprofc(PDFfile *self, void *closure)
{
        Py_INCREF(self->printprofc);
        return self->printprofc;
}

static int PDFfile_setprintprofc(PDFfile *self, PyObject *value, void *closure)
{
        if (value == NULL) {
                PyErr_SetString(PyExc_TypeError, "Cannot delete 'printprofc' attribute.");
                return -1;
        }
        if (!PyString_Check(value)) {
                PyErr_SetString(PyExc_TypeError, "The 'printprofc' attribute value must be string.");
                return -1;
        }
        Py_DECREF(self->printprofc);
        Py_INCREF(value);
        self->printprofc = value;
        return 0;
}

static PyObject *PDFfile_getinfo(PDFfile *self, void *closure)
{
        Py_INCREF(self->info);
        return self->info;
}

static int PDFfile_setinfo(PDFfile *self, PyObject *value, void *closure)
{
        if (value == NULL) {
                PyErr_SetString(PyExc_TypeError, "Cannot delete 'info' attribute.");
                return -1;
        }
        if (!PyString_Check(value)) {
                PyErr_SetString(PyExc_TypeError, "The 'info' attribute value must be string.");
                return -1;
        }
        Py_DECREF(self->info);
        Py_INCREF(value);
        self->info = value;
        return 0;
}

static char *effval_doc =
"List of effection values for each saved page.\n"
"It is list of list of six integers. Those int has followin meaning:\n\t"
"- Length of time the page is shown before the presentation\n\tstarts on the selected page. (1-3600)\n\t"
"- Length of time the effect runs. (1 - 3600)\n\t\tA shorter time will speed up the effect,\n\t\ta longer one will slow it down\n\t"
"- Type of the display effect\n\t\t0 - No Effect\n\t\t1 - Blinds\n\t\t2 - Box\n\t\t3 - Dissolve\n\t\t4 - Glitter\n\t\t5 - Split\n\t\t6 - Wipe\n\t"
"- Direction of the effect of moving lines\n\tfor the split and blind effects.\n\t\t0 - Horizontal\n\t\t1 - Vertical\n\t"
"- Starting position for the box and split effects.\n\t\t0 - Inside\n\t\t1 - Outside\n\t"
"- Direction of the glitter or wipe effects.\n\t\t0 - Left to Right\n\t\t1 - Top to Bottom\n\t\t2 - Bottom to Top\n\t\t3 - Right to Left\n\t\t4 - Top-left to Bottom-Right";

static char *lpival_doc =
"Rendering Settings for individual colors.\n\n"
"This is list of values for each color\n"
"Color values have structure [siii] which stand for:\n\t"
"s - Color name ('Black', 'Cyan', 'Magenta', 'Yellow')\n\t"
"i - Frequency (10 to 1000)\n\t"
"i - Angle (-180 to 180)\n\t"
"i - Spot Function\n\t\t0 - Simple Dot\n\t\t1 - Line\n\t\t2 - Round\n\t\t3 - Ellipse\n"
"Be carefull when supplying these values as they\nare not checked for validity.";

static PyGetSetDef PDFfile_getseters [] = {
        {"file", (getter)PDFfile_getfile, (setter)PDFfile_setfile, "Name of file to save into", NULL},
        {"fonts", (getter)PDFfile_getfonts, (setter)PDFfile_setfonts, "List of fonts to embed.", NULL},
        {"pages", (getter)PDFfile_getpages, (setter)PDFfile_setpages, "List of pages to print", NULL},
        {"resolution", (getter)PDFfile_getresolution, (setter)PDFfile_setresolution, "Resolution of output file. Values from 35 to 4000.", NULL},
        {"downsample", (getter)PDFfile_getdownsample, (setter)PDFfile_setdownsample, "Downsample image resolusion to this value. Values from 35 to 4000\nSet 0 for not to downsample", NULL},
        {"effval", (getter)PDFfile_geteffval, (setter)PDFfile_seteffval, effval_doc, NULL},
        {"lpival", (getter)PDFfile_getlpival, (setter)PDFfile_setlpival, lpival_doc, NULL},
        {"owner", (getter)PDFfile_getowner, (setter)PDFfile_setowner, "Owner's password", NULL},
        {"user", (getter)PDFfile_getuser, (setter)PDFfile_setuser, "User's password", NULL},
        {"solidpr", (getter)PDFfile_getsolidpr, (setter)PDFfile_setsolidpr, "Color profile for solid colors", NULL},
        {"imagepr", (getter)PDFfile_getimagepr, (setter)PDFfile_setimagepr, "Color profile for images", NULL},
        {"printprofc", (getter)PDFfile_getprintprofc, (setter)PDFfile_setprintprofc, "Output profile for printing. If possible, get some guidance from your printer on profile selection.", NULL},
        {"info", (getter)PDFfile_getinfo, (setter)PDFfile_setinfo, "Mandatory string for PDF/X-3 or the PDF will fail\nPDF/X-3 conformance. We recommend you use the title of the document.", NULL},
        {NULL}  // sentinel
};

static PyObject *PDFfile_save(PDFfile *self)
{
        if (!Carrier->HaveDoc) {
                PyErr_SetString(PyExc_SystemError, "Need to open document first");
                return NULL;
        };

// copied from file scribus.cpp
//void ScribusApp::SaveAsPDF()
        int Components = 3;
        QString nam = "";
        if (Carrier->BookPal->BView->childCount() == 0)
                Carrier->doc->PDF_Optionen.Bookmarks = false;

// apply fonts attribute
        Carrier->doc->PDF_Optionen.EmbedList.clear();
        int n = PyList_Size(self->fonts);
        for ( int i=0; i<n; ++i){
                QString tmpFon;
                tmpFon = QString(PyString_AsString(PyList_GetItem(self->fonts, i)));
                Carrier->doc->PDF_Optionen.EmbedList.append(tmpFon);
        }
// apply file attribute
        QString fn;
        fn = QString(PyString_AsString(self->file));
        Carrier->doc->PDF_Optionen.Datei = fn;
// apply pages attribute
        std::vector<int> pageNs;
        int nn=PyList_Size(self->pages);
        for (int i = 0; i < nn; ++i) {
                pageNs.push_back((int)PyInt_AsLong(PyList_GetItem(self->pages, i)));
        }
// apply thumbnails attribute
        Carrier->doc->PDF_Optionen.Thumbnails = self->thumbnails;
// apply compress attribute
        self->compressmtd = minmaxi(self->compressmtd, 0, 3);
        Carrier->doc->PDF_Optionen.Compress = self->compress;
        Carrier->doc->PDF_Optionen.CompressMethod = self->compressmtd;
// apply quality attribute
        self->quality = minmaxi(self->quality, 0, 4);
        Carrier->doc->PDF_Optionen.Quality = self->quality;
// apply resolusion attribute
        Carrier->doc->PDF_Optionen.Resolution = PyInt_AsLong(self->resolution);
// apply downsample attribute
        Carrier->doc->PDF_Optionen.RecalcPic = PyInt_AsLong(self->downsample);
        if (Carrier->doc->PDF_Optionen.RecalcPic)
                Carrier->doc->PDF_Optionen.PicRes = PyInt_AsLong(self->downsample);
        else
                Carrier->doc->PDF_Optionen.PicRes = Carrier->doc->PDF_Optionen.Resolution;
// apply bookmarks attribute
        Carrier->doc->PDF_Optionen.Bookmarks = self->bookmarks;
// apply binding attribute
        Carrier->doc->PDF_Optionen.Binding = self->binding;
// apply presentation attribute
        Carrier->doc->PDF_Optionen.PresentMode = self->presentation;

        QValueList<PreSet> PresentVals;
        PresentVals.clear();
        int tmpnum;
        tmpnum=PyList_Size(self->effval);
        for (int i=0; i<tmpnum; ++i) {
                PreSet t;
// How do I make this commented piece of code to work?
// I always get an error here
                PyObject *ti = PyList_GetItem(self->effval, i);
//                 if (!PyArg_ParseTuple(ti , "[iiiiii]",
//                                  &t.EffektLen, &t.AnzeigeLen, &t.Effekt, &t.Dm,
//                                  &t.M, &t.Di)) {
//                         PyErr_SetString(PyExc_SystemError, "while parsing 'effval'. WHY THIS HAPPENED????");
//                         return NULL;
//                 }
//                 PresentVals.append(t);
				// pv 10/03/2004 crashed when pt is null
				if (ti)
				{
					// Do I Need to check if every PyInt_AsLong and PyList_GetItem funtion succeed???
					t.EffektLen = PyInt_AsLong(PyList_GetItem(ti, 0));
					t.AnzeigeLen = PyInt_AsLong(PyList_GetItem(ti, 1));
					t.Effekt = PyInt_AsLong(PyList_GetItem(ti, 2));
					t.Dm = PyInt_AsLong(PyList_GetItem(ti, 3));
					t.M = PyInt_AsLong(PyList_GetItem(ti, 4));
					t.Di = PyInt_AsLong(PyList_GetItem(ti, 5));
					PresentVals.append(t);
				} // if ti=NULL

        }

        Carrier->doc->PDF_Optionen.PresentVals = PresentVals;
// apply lpival
        int n2 = PyList_Size(self->lpival);
        for (int i=0; i<n2; ++i){
                LPIset lpi;
                PyObject *t = PyList_GetItem(self->lpival, i);
// This code always raise exception - WHY???
//                char *s;
//                 if (!PyArg_ParseTuple(t, "[siii]", &s, &lpi.Frequency,
//                                  &lpi.Angle, &lpi.SpotFunc)) {
//                         PyErr_SetString(PyExc_SystemError, "while parsing 'lpival'. WHY THIS HAPPENED????");
//                         return NULL;
//                 }
//                 Carrier->doc->PDF_Optionen.LPISettings[QString(s)]=lpi;
                QString st;
                st = QString(PyString_AsString(PyList_GetItem(t,0)));
                lpi.Frequency = PyInt_AsLong(PyList_GetItem(t, 1));
                lpi.Angle = PyInt_AsLong(PyList_GetItem(t, 2));
                lpi.SpotFunc = PyInt_AsLong(PyList_GetItem(t, 3));
                Carrier->doc->PDF_Optionen.LPISettings[st]=lpi;
        }

        Carrier->doc->PDF_Optionen.Articles = self->article;
        Carrier->doc->PDF_Optionen.Encrypt = self->encrypt;
        Carrier->doc->PDF_Optionen.UseLPI = self->uselpi;
        self->version = minmaxi(self->version, 12, 14);
        Carrier->doc->PDF_Optionen.Version = self->version;
        if (self->encrypt)
        {
                int Perm = -64;
                if (Carrier->doc->PDF_Optionen.Version == 14)
                        Perm &= ~0x00240000;
                if (self->aprint)
                        Perm += 4;
                if (self->achange)
                        Perm += 8;
                if (self->acopy)
                        Perm += 16;
                if (self->aanot)
                        Perm += 32;
                Carrier->doc->PDF_Optionen.Permissions = Perm;
                Carrier->doc->PDF_Optionen.PassOwner = QString(PyString_AsString(self->owner));
                Carrier->doc->PDF_Optionen.PassUser = QString(PyString_AsString(self->user));
        }
        if (self->outdst == 0)
        {
                Carrier->doc->PDF_Optionen.UseRGB = true;
                Carrier->doc->PDF_Optionen.UseProfiles = false;
                Carrier->doc->PDF_Optionen.UseProfiles2 = false;
        }
        else
        {
                Carrier->doc->PDF_Optionen.UseRGB = false;
#ifdef HAVE_CMS
                if (CMSuse)
                {
                        Carrier->doc->PDF_Optionen.UseProfiles = self->profiles;
                        Carrier->doc->PDF_Optionen.UseProfiles2 = self->profilei;
                        self->intents = minmaxi(self->intents, 0, 3);
                        Carrier->doc->PDF_Optionen.Intent = self->intents;
                        self->intenti = minmaxi(self->intenti, 0, 3);
                        Carrier->doc->PDF_Optionen.Intent2 = self->intenti;
                        Carrier->doc->PDF_Optionen.EmbeddedI = self->noembicc;
                        Carrier->doc->PDF_Optionen.SolidProf = PyString_AsString(self->solidpr);
                        Carrier->doc->PDF_Optionen.ImageProf = PyString_AsString(self->imagepr);
                        Carrier->doc->PDF_Optionen.PrintProf = PyString_AsString(self->printprofc);
                        if (Carrier->doc->PDF_Optionen.Version == 12)
                        {
// Where does compiler find cms function when I have not included header for it
                                const char *Descriptor;
                                cmsHPROFILE hIn;
                                hIn = cmsOpenProfileFromFile(Carrier->PrinterProfiles[Carrier->doc->PDF_Optionen.PrintProf], "r");
                                Descriptor = cmsTakeProductDesc(hIn);
                                nam = QString(Descriptor);
                                if (static_cast<int>(cmsGetColorSpace(hIn)) == icSigRgbData)
                                        Components = 3;
                                if (static_cast<int>(cmsGetColorSpace(hIn)) == icSigCmykData)
                                        Components = 4;
                                if (static_cast<int>(cmsGetColorSpace(hIn)) == icSigCmyData)
                                        Components = 3;
                                cmsCloseProfile(hIn);
                                Carrier->doc->PDF_Optionen.Info = PyString_AsString(self->info);
                                self->bleedt = minmaxd(self->bleedt, 0, Carrier->view->Doc->PageH*UmReFaktor);
                                Carrier->doc->PDF_Optionen.BleedTop = self->bleedt/UmReFaktor;
                                self->bleedl = minmaxd(self->bleedl, 0, Carrier->view->Doc->PageB*UmReFaktor);
                                Carrier->doc->PDF_Optionen.BleedLeft = self->bleedl/UmReFaktor;
                                self->bleedr = minmaxd(self->bleedr, 0, Carrier->view->Doc->PageB*UmReFaktor);
                                Carrier->doc->PDF_Optionen.BleedRight = self->bleedr/UmReFaktor;
                                self->bleedb = minmaxd(self->bleedb, 0, Carrier->view->Doc->PageH*UmReFaktor);
                                Carrier->doc->PDF_Optionen.BleedBottom = self->bleedb/UmReFaktor;
                                Carrier->doc->PDF_Optionen.Encrypt = false;
                                Carrier->doc->PDF_Optionen.PresentMode = false;
                        }
                }
                else
                {
                        Carrier->doc->PDF_Optionen.UseProfiles = false;
                        Carrier->doc->PDF_Optionen.UseProfiles2 = false;
                }
#else
                Carrier->doc->PDF_Optionen.UseProfiles = false;
                Carrier->doc->PDF_Optionen.UseProfiles2 = false;
#endif

        }
        QMap<int,QPixmap> thumbs;
        for (uint ap = 0; ap < pageNs.size(); ++ap)
        {
                QPixmap pm(10,10);
                if (Carrier->doc->PDF_Optionen.Thumbnails)
                        pm = Carrier->view->PageToPixmap(pageNs[ap]-1, 100);
                thumbs.insert(pageNs[ap], pm);
        }
        ReOrderText(Carrier->doc, Carrier->view);
        if (!Carrier->getPDFDriver(fn, nam, Components, pageNs, thumbs)) {
                fn = "Can't write the File: " + fn;
                PyErr_SetString(PyExc_SystemError, fn.ascii());
                return NULL;
        }
        Py_INCREF(Py_None);
        return Py_None;
}

static PyMethodDef PDFfile_methods[] = {
	{"Save", (PyCFunction)PDFfile_save, METH_NOARGS, "This method is deprecated - use save() instead."},
        {"save", (PyCFunction)PDFfile_save, METH_NOARGS, "Save selected pages to pdf file"},
        {NULL} // sentinel
};

PyTypeObject PDFfile_Type = {
        PyObject_HEAD_INIT(NULL) // PyObject_VAR_HEAD
        0,                      //
        "PDFfile", // char *tp_name; /* For printing, in format "<module>.<name>" */
        sizeof(PDFfile),     // int tp_basicsize, /* For allocation */
        0,                    // int tp_itemsize; /* For allocation */

	/* Methods to implement standard operations */

        (destructor) PDFfile_dealloc, //     destructor tp_dealloc;
        0, //     printfunc tp_print;
        0, //     getattrfunc tp_getattr;
        0, //     setattrfunc tp_setattr;
        0, //     cmpfunc tp_compare;
        0, //     reprfunc tp_repr;

	/* Method suites for standard classes */

        0, //     PyNumberMethods *tp_as_number;
        0, //     PySequenceMethods *tp_as_sequence;
        0, //     PyMappingMethods *tp_as_mapping;

	/* More standard operations (here for binary compatibility) */

        0, //     hashfunc tp_hash;
        0, //     ternaryfunc tp_call;
        0, //     reprfunc tp_str;
        0, //     getattrofunc tp_getattro;
        0, //     setattrofunc tp_setattro;

	/* Functions to access object as input/output buffer */
        0, //     PyBufferProcs *tp_as_buffer;

	/* Flags to define presence of optional/expanded features */
        Py_TPFLAGS_DEFAULT|Py_TPFLAGS_BASETYPE,    // long tp_flags;

        "PDFfile Object",      // char *tp_doc; /* Documentation string */

	/* Assigned meaning in release 2.0 */
	/* call function for all accessible objects */
        0, //     traverseproc tp_traverse;

	/* delete references to contained objects */
        0, //     inquiry tp_clear;

	/* Assigned meaning in release 2.1 */
	/* rich comparisons */
        0, //     richcmpfunc tp_richcompare;

	/* weak reference enabler */
        0, //     long tp_weaklistoffset;

	/* Added in release 2.2 */
	/* Iterators */
        0, //     getiterfunc tp_iter;
        0, //     iternextfunc tp_iternext;

	/* Attribute descriptor and subclassing stuff */
        PDFfile_methods, //     struct PyMethodDef *tp_methods;
        PDFfile_members, //     struct PyMemberDef *tp_members;
        PDFfile_getseters, //     struct PyGetSetDef *tp_getset;
        0, //     struct _typeobject *tp_base;
        0, //     PyObject *tp_dict;
        0, //     descrgetfunc tp_descr_get;
        0, //     descrsetfunc tp_descr_set;
        0, //     long tp_dictoffset;
        (initproc)PDFfile_init, //     initproc tp_init;
        0, //     allocfunc tp_alloc;
        PDFfile_new, //     newfunc tp_new;
        0, //     freefunc tp_free; /* Low-level free-memory routine */
        0, //     inquiry tp_is_gc; /* For PyObject_IS_GC */
        0, //     PyObject *tp_bases;
        0, //     PyObject *tp_mro; /* method resolution order */
        0, //     PyObject *tp_cache;
        0, //     PyObject *tp_subclasses;
        0, //     PyObject *tp_weaklist;
        0, //     destructor tp_del;

#ifdef COUNT_ALLOCS
	/* these must be last and never explicitly initialized */
        //    int tp_allocs;
        //    int tp_frees;
        //    int tp_maxalloc;
        //    struct _typeobject *tp_next;
#endif
};
