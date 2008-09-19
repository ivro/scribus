<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS><TS version="1.1" language="ko_KR">
<defaultcodec></defaultcodec>
  <context>
    <name>@default</name>
    <message>
      <source>getColorNames() -> list

Returns a list containing the names of all defined colors in the document.
If no document is open, returns a list of the default document colors.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>newDocDialog() -> bool

Displays the &quot;New Document&quot; dialog box. Creates a new document if the user
accepts the settings. Does not create a document if the user presses cancel.
Returns true if a new document was created.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>newDocument(size, margins, orientation, firstPageNumber,
                        unit, pagesType, firstPageOrder, numPages) -> bool

Creates a new document and returns true if successful. The parameters have the
following meaning:

size = A tuple (width, height) describing the size of the document. You can
use predefined constants named PAPER_&lt;paper_type> e.g. PAPER_A4 etc.

margins = A tuple (left, right, top, bottom) describing the document
margins

orientation = the page orientation - constants PORTRAIT, LANDSCAPE

firstPageNumer = is the number of the first page in the document used for
pagenumbering. While you'll usually want 1, it's useful to have higher
numbers if you're creating a document in several parts.

unit: this value sets the measurement units used by the document. Use a
predefined constant for this, one of: UNIT_INCHES, UNIT_MILLIMETERS,
UNIT_PICAS, UNIT_POINTS.

pagesType = One of the predefined constants PAGE_n. PAGE_1 is single page,
PAGE_2 is for double sided documents, PAGE_3 is for 3 pages fold and
PAGE_4 is 4-fold.

firstPageOrder = What is position of first page in the document.
Indexed from 0 (0 = first).

numPage = Number of pages to be created.

The values for width, height and the margins are expressed in the given unit
for the document. PAPER_* constants are expressed in points. If your document
is not in points, make sure to account for this.

example: newDocument(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 7, UNIT_POINTS,
PAGE_4, 3, 1)

May raise ScribusError if is firstPageOrder bigger than allowed by pagesType.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getFillColor([&quot;name&quot;]) -> string

Returns the name of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>moveObject(dx, dy [, &quot;name&quot;])

Moves the object &quot;name&quot; by dx and dy relative to its current position. The
distances are expressed in the current measurement unit of the document (see
UNIT constants). If &quot;name&quot; is not given the currently selected item is used.
If the object &quot;name&quot; belongs to a group, the whole group is moved.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setRedraw(bool)

Disables page redraw when bool = False, otherwise redrawing is enabled.
This change will persist even after the script exits, so make sure to call
setRedraw(True) in a finally: clause at the top level of your script.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>createRect(x, y, width, height, [&quot;name&quot;]) -> string

Creates a new rectangle on the current page and returns its name. The
coordinates are given in the current measurement units of the document
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object
because you need this name to reference that object in future. If &quot;name&quot;
is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that's already used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>newPage(where [,&quot;masterpage&quot;])

Creates a new page. If &quot;where&quot; is -1 the new Page is appended to the
document, otherwise the new page is inserted before &quot;where&quot;. Page numbers are
counted from 1 upwards, no matter what the displayed first page number of your
document is. The optional parameter &quot;masterpage&quot; specifies the name of the
master page for the new page.

May raise IndexError if the page number is out of range
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setGradientFill(type, &quot;color1&quot;, shade1, &quot;color2&quot;, shade2, [&quot;name&quot;])

Sets the gradient fill of the object &quot;name&quot; to type. Color descriptions are
the same as for setFillColor() and setFillShade(). See the constants for
available types (FILL_&lt;type>).
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>createParagraphStyle(...)

Creates a paragraph style. This function takes the following keyword parameters:

&quot;name&quot; [required] -> specifies the name of the paragraphstyle to create

linespacingmode [optional] -> specifies the linespacing mode; possible modes are:

fixed linespacing:          0

automatic linespacing:      1

baseline grid linespacing:  2

linespacing [optional] -> specifies the linespacing if using fixed linespacing

alignment [optional] -> specifies the alignment of the paragraph

-> left:     0

-> center:   1

-> right:    2

-> justify:  3

-> extend:   4

leftmargin [optional], rightmargin [optional] -> specify the margin

gapbefore [optional], gapafter [optional] -> specify the gaps to the heading and following paragraphs

firstindent [optional] -> the indent of the first line

hasdropcap [optional] -> specifies if there are caps (1 = yes, 0 = no)

dropcaplines [optional] -> height (in lines) of the caps if used

dropcapoffset [optional] -> offset of the caps if used

&quot;charstyle&quot; [optional] -> char style to use

</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getFontSize([&quot;name&quot;]) -> float

Returns the font size in points for the text frame &quot;name&quot;. If this text
frame has some text selected the value assigned to the first character of
the selection is returned.
If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>messagebarText(&quot;string&quot;)

Writes the &quot;string&quot; into the Scribus message bar (status line). The text
must be UTF8 encoded or 'unicode' string(recommended).
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>placeSVG(&quot;filename&quot;, x, y)

Places the SVG &quot;filename&quot; onto the current page,
x and y specify the coordinate of the topleft corner of the SVG placed on the page

If loading was successful, the selection contains the imported SVG
</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>@default</name>
    <message>
      <source>getColor(&quot;name&quot;) -> tuple

Returns a tuple (C, M, Y, K) containing the four color components of the
color &quot;name&quot; from the current document. If no document is open, returns
the value of the named color from the default document colors.

May raise NotFoundError if the named color wasn't found.
May raise ValueError if an invalid color name is specified.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getColorAsRGB(&quot;name&quot;) -> tuple

Returns a tuple (R,G,B) containing the three color components of the
color &quot;name&quot; from the current document, converted to the RGB color
space. If no document is open, returns the value of the named color
from the default document colors.

May raise NotFoundError if the named color wasn't found.
May raise ValueError if an invalid color name is specified.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>changeColor(&quot;name&quot;, c, m, y, k)

Changes the color &quot;name&quot; to the specified CMYK value. The color value is
defined via four components c = Cyan, m = Magenta, y = Yellow and k = Black.
Color components should be in the range from 0 to 255.

May raise NotFoundError if the named color wasn't found.
May raise ValueError if an invalid color name is specified.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>deleteColor(&quot;name&quot;, &quot;replace&quot;)

Deletes the color &quot;name&quot;. Every occurence of that color is replaced by the
color &quot;replace&quot;. If not specified, &quot;replace&quot; defaults to the color
&quot;None&quot; - transparent.

deleteColor works on the default document colors if there is no document open.
In that case, &quot;replace&quot;, if specified, has no effect.

May raise NotFoundError if a named color wasn't found.
May raise ValueError if an invalid color name is specified.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>replaceColor(&quot;name&quot;, &quot;replace&quot;)

Every occurence of the color &quot;name&quot; is replaced by the color &quot;replace&quot;.

May raise NotFoundError if a named color wasn't found.
May raise ValueError if an invalid color name is specified.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>messageBox(&quot;caption&quot;, &quot;message&quot;,
    icon=ICON_NONE, button1=BUTTON_OK|BUTTONOPT_DEFAULT,
    button2=BUTTON_NONE, button3=BUTTON_NONE) -> integer

Displays a message box with the title &quot;caption&quot;, the message &quot;message&quot;, and
an icon &quot;icon&quot; and up to 3 buttons. By default no icon is used and a single
button, OK, is displayed. Only the caption and message arguments are required,
though setting an icon and appropriate button(s) is strongly
recommended. The message text may contain simple HTML-like markup.

Returns the number of the button the user pressed. Button numbers start
at 1.

For the icon and the button parameters there are predefined constants available
with the same names as in the Qt Documentation. These are the BUTTON_* and
ICON_* constants defined in the module. There are also two extra constants that
can be binary-ORed with button constants:
    BUTTONOPT_DEFAULT   Pressing enter presses this button.
    BUTTONOPT_ESCAPE    Pressing escape presses this button.

Usage examples:
result = messageBox('Script failed',
                    'This script only works when you have a text frame selected.',
                    ICON_ERROR)
result = messageBox('Monkeys!', 'Something went ook! &lt;i>Was it a monkey?&lt;/i>',
                    ICON_WARNING, BUTTON_YES|BUTTONOPT_DEFAULT,
                    BUTTON_NO, BUTTON_IGNORE|BUTTONOPT_ESCAPE)

Defined button and icon constants:
BUTTON_NONE, BUTTON_ABORT, BUTTON_CANCEL, BUTTON_IGNORE, BUTTON_NO,
BUTTON_NOALL, BUTTON_OK, BUTTON_RETRY, BUTTON_YES, BUTTON_YESALL,
ICON_NONE, ICON_INFORMATION, ICON_WARNING, ICON_CRITICAL.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>valueDialog(caption, message [,defaultvalue]) -> string

Shows the common 'Ask for string' dialog and returns its value as a string
Parameters: window title, text in the window and optional 'default' value.

Example: valueDialog('title', 'text in the window', 'optional')
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>newStyleDialog() -> string

Shows 'Create new paragraph style' dialog. Function returns real
style name or None when user cancels the dialog.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>newDoc(size, margins, orientation, firstPageNumber,
                   unit, facingPages, firstSideLeft) -> bool

WARNING: Obsolete procedure! Use newDocument instead.

Creates a new document and returns true if successful. The parameters have the
following meaning:

    size = A tuple (width, height) describing the size of the document. You can
    use predefined constants named PAPER_&lt;paper_type> e.g. PAPER_A4 etc.

    margins = A tuple (left, right, top, bottom) describing the document
    margins

    orientation = the page orientation - constants PORTRAIT, LANDSCAPE

    firstPageNumer = is the number of the first page in the document used for
    pagenumbering. While you'll usually want 1, it's useful to have higher
    numbers if you're creating a document in several parts.

    unit: this value sets the measurement units used by the document. Use a
    predefined constant for this, one of: UNIT_INCHES, UNIT_MILLIMETERS,
    UNIT_PICAS, UNIT_POINTS.

    facingPages = FACINGPAGES, NOFACINGPAGES

    firstSideLeft = FIRSTPAGELEFT, FIRSTPAGERIGHT

The values for width, height and the margins are expressed in the given unit
for the document. PAPER_* constants are expressed in points. If your document
is not in points, make sure to account for this.

example: newDoc(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 1, UNIT_POINTS,
                FACINGPAGES, FIRSTPAGERIGHT)
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>closeDoc()

Closes the current document without prompting to save.

May throw NoDocOpenError if there is no document to close
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>haveDoc() -> bool

Returns true if there is a document open.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>openDoc(&quot;name&quot;)

Opens the document &quot;name&quot;.

May raise ScribusError if the document could not be opened.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>saveDoc()

Saves the current document with its current name, returns true if successful.
If the document has not already been saved, this may bring up an interactive
save file dialog.

If the save fails, there is currently no way to tell.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>saveDocAs(&quot;name&quot;)

Saves the current document under the new name &quot;name&quot; (which may be a full or
relative path).

May raise ScribusError if the save fails.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setUnit(type)

Changes the measurement unit of the document. Possible values for &quot;unit&quot; are
defined as constants UNIT_&lt;type>.

May raise ValueError if an invalid unit is passed.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getUnit() -> integer (Scribus unit constant)

Returns the measurement units of the document. The returned value will be one
of the UNIT_* constants:
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>loadStylesFromFile(&quot;filename&quot;)

Loads paragraph styles from the Scribus document at &quot;filename&quot; into the
current document.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setDocType(facingPages, firstPageLeft)

Sets the document type. To get facing pages set the first parameter to
FACINGPAGES, to switch facingPages off use NOFACINGPAGES instead.  If you want
to be the first page a left side set the second parameter to FIRSTPAGELEFT, for
a right page use FIRSTPAGERIGHT.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>closeMasterPage()

Closes the currently active master page, if any, and returns editing
to normal. Begin editing with editMasterPage().
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>masterPageNames()

Returns a list of the names of all master pages in the document.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>editMasterPage(pageName)

Enables master page editing and opens the named master page
for editing. Finish editing with closeMasterPage().
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>createMasterPage(pageName)

Creates a new master page named pageName and opens it for
editing.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>deleteMasterPage(pageName)

Delete the named master page.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getLineColor([&quot;name&quot;]) -> string

Returns the name of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getLineWidth([&quot;name&quot;]) -> integer

Returns the line width of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getLineShade([&quot;name&quot;]) -> integer

Returns the shading value of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getLineEnd([&quot;name&quot;]) -> integer (see constants)

Returns the line cap style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. The cap types are:
CAP_FLAT, CAP_ROUND, CAP_SQUARE
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getLineStyle([&quot;name&quot;]) -> integer (see constants)

Returns the line style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. Line style constants are:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getFillShade([&quot;name&quot;]) -> integer

Returns the shading value of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getImageScale([&quot;name&quot;]) -> (x,y)

Returns a (x, y) tuple containing the scaling values of the image frame
&quot;name&quot;.  If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getImageName([&quot;name&quot;]) -> string

Returns the filename for the image in the image frame. If &quot;name&quot; is not
given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getSize([&quot;name&quot;]) -> (width,height)

Returns a (width, height) tuple with the size of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. The size is
expressed in the current measurement unit of the document - see UNIT_&lt;type>
for reference.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getRotation([&quot;name&quot;]) -> integer

Returns the rotation of the object &quot;name&quot;. The value is expressed in degrees,
and clockwise is positive. If &quot;name&quot; is not given the currently selected item
is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getAllObjects() -> list

Returns a list containing the names of all objects on the current page.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getPropertyCType(object, property, includesuper=True)

Returns the name of the C type of `property' of `object'. See getProperty()
for details of arguments.

If `includesuper' is true, search inherited properties too.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getPropertyNames(object, includesuper=True)

Return a list of property names supported by `object'.
If `includesuper' is true, return properties supported
by parent classes as well.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getProperty(object, property)

Return the value of the property `property' of the passed `object'.

The `object' argument may be a string, in which case the named PageItem
is searched for. It may also be a PyCObject, which may point to any
C++ QObject instance.

The `property' argument must be a string, and is the name of the property
to look up on `object'.

The return value varies depending on the type of the property.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setProperty(object, property, value)

Set `property' of `object' to `value'. If `value' cannot be converted to a type
compatible with the type of `property', an exception is raised. An exception may
also be raised if the underlying setter fails.

See getProperty() for more information.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>moveObjectAbs(x, y [, &quot;name&quot;])

Moves the object &quot;name&quot; to a new location. The coordinates are expressed in
the current measurement unit of the document (see UNIT constants).  If &quot;name&quot;
is not given the currently selected item is used.  If the object &quot;name&quot;
belongs to a group, the whole group is moved.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>sizeObject(width, height [, &quot;name&quot;])

Resizes the object &quot;name&quot; to the given width and height. If &quot;name&quot;
is not given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getSelectedObject([nr]) -> string

Returns the name of the selected object. &quot;nr&quot; if given indicates the number
of the selected object, e.g. 0 means the first selected object, 1 means the
second selected Object and so on.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>selectionCount() -> integer

Returns the number of selected objects.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>selectObject(&quot;name&quot;)

Selects the object with the given &quot;name&quot;.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>deselectAll()

Deselects all objects in the whole document.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>groupObjects(list)

Groups the objects named in &quot;list&quot; together. &quot;list&quot; must contain the names
of the objects to be grouped. If &quot;list&quot; is not given the currently selected
items are used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>unGroupObjects(&quot;name&quot;)

Destructs the group the object &quot;name&quot; belongs to.If &quot;name&quot; is not given the currently selected item is used.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>scaleGroup(factor [,&quot;name&quot;])

Scales the group the object &quot;name&quot; belongs to. Values greater than 1 enlarge
the group, values smaller than 1 make the group smaller e.g a value of 0.5
scales the group to 50 % of its original size, a value of 1.5 scales the group
to 150 % of its original size.  The value for &quot;factor&quot; must be greater than
0. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if an invalid scale factor is passed.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>loadImage(&quot;filename&quot; [, &quot;name&quot;])

Loads the picture &quot;picture&quot; into the image frame &quot;name&quot;. If &quot;name&quot; is
not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>scaleImage(x, y [, &quot;name&quot;])

Sets the scaling factors of the picture in the image frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. A number of 1
means 100 %.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>lockObject([&quot;name&quot;]) -> bool

Locks the object &quot;name&quot; if it's unlocked or unlock it if it's locked.
If &quot;name&quot; is not given the currently selected item is used. Returns true
if locked.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>isLocked([&quot;name&quot;]) -> bool

Returns true if is the object &quot;name&quot; locked.  If &quot;name&quot; is not given the
currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setScaleImageToFrame(scaletoframe, proportional=None, name=&lt;selection>)

Sets the scale to frame on the selected or specified image frame to `scaletoframe'.
If `proportional' is specified, set fixed aspect ratio scaling to `proportional'.
Both `scaletoframe' and `proportional' are boolean.

May raise WrongFrameTypeError.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getFontNames() -> list

Returns a list with the names of all available fonts.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getXFontNames() -> list of tuples

Returns a larger font info. It's a list of the tuples with:
[ (Scribus name, Family, Real name, subset (1|0), embed PS (1|0), font file), (...), ... ]
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>renderFont(&quot;name&quot;, &quot;filename&quot;, &quot;sample&quot;, size, format=&quot;PPM&quot;) -> bool

Creates an image preview of font &quot;name&quot; with given text &quot;sample&quot; and size.
If &quot;filename&quot; is not &quot;&quot;, image is saved into &quot;filename&quot;. Otherwise
image data is returned as a string. The optional &quot;format&quot; argument
specifies the image format to generate, and supports any format allowed
by QPixmap.save(). Common formats are PPM, JPEG, PNG and XPM.

May raise NotFoundError if the specified font can't be found.
May raise ValueError if an empty sample or filename is passed.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getLayers() -> list

Returns a list with the names of all defined layers.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setActiveLayer(&quot;name&quot;)

Sets the active layer to the layer named &quot;name&quot;.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getActiveLayer() -> string

Returns the name of the current active layer.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>sentToLayer(&quot;layer&quot; [, &quot;name&quot;])

Sends the object &quot;name&quot; to the layer &quot;layer&quot;. The layer must exist.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setLayerVisible(&quot;layer&quot;, visible)

Sets the layer &quot;layer&quot; to be visible or not. If is the visible set to false
the layer is invisible.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>isLayerPrintable(&quot;layer&quot;) -> bool

Returns whether the layer &quot;layer&quot; is printable or not, a value of True means
that the layer &quot;layer&quot; can be printed, a value of False means that printing
the layer &quot;layer&quot; is disabled.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>deleteLayer(&quot;layer&quot;)

Deletes the layer with the name &quot;layer&quot;. Nothing happens if the layer doesn't
exists or if it's the only layer in the document.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>createLayer(layer)

Creates a new layer with the name &quot;name&quot;.

May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getGuiLanguage() -> string

Returns a string with the -lang value.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>createEllipse(x, y, width, height, [&quot;name&quot;]) -> string

Creates a new ellipse on the current page and returns its name.
The coordinates are given in the current measurement units of the document
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object
because you need this name for further referencing of that object. If &quot;name&quot;
is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that's already used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>createImage(x, y, width, height, [&quot;name&quot;]) -> string

Creates a new picture frame on the current page and returns its name. The
coordinates are given in the current measurement units of the document.
&quot;name&quot; should be a unique identifier for the object because you need this
name for further access to that object. If &quot;name&quot; is not given Scribus will
create one for you.

May raise NameExistsError if you explicitly pass a name that's already used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>createText(x, y, width, height, [&quot;name&quot;]) -> string

Creates a new text frame on the actual page and returns its name.
The coordinates are given in the actual measurement unit of the document (see
UNIT constants). &quot;name&quot; should be a unique identifier for the object because
you need this name for further referencing of that object. If &quot;name&quot; is not
given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that's already used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>createLine(x1, y1, x2, y2, [&quot;name&quot;]) -> string

Creates a new line from the point(x1, y1) to the point(x2, y2) and returns
its name. The coordinates are given in the current measurement unit of the
document (see UNIT constants). &quot;name&quot; should be a unique identifier for the
object because you need this name for further access to that object. If
&quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that's already used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>createPolyLine(list, [&quot;name&quot;]) -> string

Creates a new polyline and returns its name. The points for the polyline are
stored in the list &quot;list&quot; in the following order: [x1, y1, x2, y2...xn. yn].
The coordinates are given in the current measurement units of the document (see
UNIT constants). &quot;name&quot; should be a unique identifier for the object because
you need this name for further access to that object. If &quot;name&quot; is not given
Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that's already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don't group into points without leftovers.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>createPolygon(list, [&quot;name&quot;]) -> string

Creates a new polygon and returns its name. The points for the polygon are
stored in the list &quot;list&quot; in the following order: [x1, y1, x2, y2...xn. yn].
At least three points are required. There is no need to repeat the first point
to close the polygon. The polygon is automatically closed by connecting the
first and the last point.  The coordinates are given in the current measurement
units of the document (see UNIT constants).  &quot;name&quot; should be a unique
identifier for the object because you need this name for further access to that
object. If &quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that's already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don't group into points without leftovers.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>createBezierLine(list, [&quot;name&quot;]) -> string

Creates a new bezier curve and returns its name. The points for the bezier
curve are stored in the list &quot;list&quot; in the following order:
[x1, y1, kx1, ky1, x2, y2, kx2, ky2...xn. yn, kxn. kyn]
In the points list, x and y mean the x and y coordinates of the point and kx
and ky meaning the control point for the curve.  The coordinates are given in
the current measurement units of the document (see UNIT constants). &quot;name&quot;
should be a unique identifier for the object because you need this name for
further access to that object. If &quot;name&quot; is not given Scribus will create one
for you.

May raise NameExistsError if you explicitly pass a name that's already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don't group into points without leftovers.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>createPathText(x, y, &quot;textbox&quot;, &quot;beziercurve&quot;, [&quot;name&quot;]) -> string

Creates a new pathText by merging the two objects &quot;textbox&quot; and
&quot;beziercurve&quot; and returns its name. The coordinates are given in the current
measurement unit of the document (see UNIT constants). &quot;name&quot; should be a
unique identifier for the object because you need this name for further access
to that object. If &quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that's already used.
May raise NotFoundError if one or both of the named base object don't exist.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>deleteObject([&quot;name&quot;])

Deletes the item with the name &quot;name&quot;. If &quot;name&quot; is not given the currently
selected item is deleted.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>objectExists([&quot;name&quot;]) -> bool

Test if an object with specified name really exists in the document.
The optional parameter is the object name. When no object name is given,
returns True if there is something selected.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setStyle(&quot;style&quot; [, &quot;name&quot;])

Apply the named &quot;style&quot; to the object named &quot;name&quot;. If is no object name
given, it's applied on the selected object.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getAllStyles() -> list

Return a list of the names of all paragraph styles in the current document.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>currentPage() -> integer

Returns the number of the current working page. Page numbers are counted from 1
upwards, no matter what the displayed first page number of your document is.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>redrawAll()

Redraws all pages.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>savePageAsEPS(&quot;name&quot;)

Saves the current page as an EPS to the file &quot;name&quot;.

May raise ScribusError if the save failed.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>deletePage(nr)

Deletes the given page. Does nothing if the document contains only one page.
Page numbers are counted from 1 upwards, no matter what the displayed first
page number is.

May raise IndexError if the page number is out of range
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>pageCount() -> integer

Returns the number of pages in the document.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getHGuides() -> list

Returns a list containing positions of the horizontal guides. Values are in the
document's current units - see UNIT_&lt;type> constants.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setHGuides(list)

Sets horizontal guides. Input parameter must be a list of guide positions
measured in the current document units - see UNIT_&lt;type> constants.

Example: setHGuides(getHGuides() + [200.0, 210.0] # add new guides without any lost
         setHGuides([90,250]) # replace current guides entirely
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getVGuides()

See getHGuides.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setVGuides()

See setHGuides.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getPageSize() -> tuple

Returns a tuple with page dimensions measured in the document's current units.
See UNIT_&lt;type> constants and getPageMargins()
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getPageItems() -> list

Returns a list of tuples with items on the current page. The tuple is:
(name, objectType, order) E.g. [('Text1', 4, 0), ('Image1', 2, 1)]
means that object named 'Text1' is a text frame (type 4) and is the first at
the page...
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getPageMargins()

Returns the page margins as a (top, left, right, bottom) tuple in the current
units. See UNIT_&lt;type> constants and getPageSize().
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setFillColor(&quot;color&quot;, [&quot;name&quot;])

Sets the fill color of the object &quot;name&quot; to the color &quot;color&quot;. &quot;color&quot;
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setLineColor(&quot;color&quot;, [&quot;name&quot;])

Sets the line color of the object &quot;name&quot; to the color &quot;color&quot;. If &quot;name&quot;
is not given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setLineWidth(width, [&quot;name&quot;])

Sets line width of the object &quot;name&quot; to &quot;width&quot;. &quot;width&quot; must be in the
range from 0.0 to 12.0 inclusive, and is measured in points. If &quot;name&quot; is not
given the currently selected item is used.

May raise ValueError if the line width is out of bounds.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setLineShade(shade, [&quot;name&quot;])

Sets the shading of the line color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full color intensity). If &quot;name&quot; is not given the currently selected item
is used.

May raise ValueError if the line shade is out of bounds.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setLineJoin(join, [&quot;name&quot;])

Sets the line join style of the object &quot;name&quot; to the style &quot;join&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for join - JOIN_&lt;type>.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setLineEnd(endtype, [&quot;name&quot;])

Sets the line cap style of the object &quot;name&quot; to the style &quot;cap&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for &quot;cap&quot; - CAP_&lt;type>.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setLineStyle(style, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the style &quot;style&quot;. If &quot;name&quot;
is not given the currently selected item is used. There are predefined
constants for &quot;style&quot; - LINE_&lt;style>.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setFillShade(shade, [&quot;name&quot;])

Sets the shading of the fill color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full Color intensity). If &quot;name&quot; is not given the currently selected
Item is used.

May raise ValueError if the fill shade is out of bounds.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setCornerRadius(radius, [&quot;name&quot;])

Sets the corner radius of the object &quot;name&quot;. The radius is expressed
in points. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if the corner radius is negative.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setMultiLine(&quot;namedStyle&quot;, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the named style &quot;namedStyle&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the line style doesn't exist.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getFont([&quot;name&quot;]) -> string

Returns the font name for the text frame &quot;name&quot;. If this text frame
has some text selected the value assigned to the first character
of the selection is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getTextLength([&quot;name&quot;]) -> integer

Returns the length of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getText([&quot;name&quot;]) -> string

Returns the text of the text frame &quot;name&quot;. If this text frame has some text
selected, the selected text is returned. All text in the frame, not just
currently visible text, is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getAllText([&quot;name&quot;]) -> string

Returns the text of the text frame &quot;name&quot; and of all text frames which are
linked with this frame. If this textframe has some text selected, the selected
text is returned. If &quot;name&quot; is not given the currently selected item is
used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getLineSpacing([&quot;name&quot;]) -> float

Returns the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; expressed in
points. If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getColumnGap([&quot;name&quot;]) -> float

Returns the column gap size of the text frame &quot;name&quot; expressed in points. If
&quot;name&quot; is not given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getColumns([&quot;name&quot;]) -> integer

Gets the number of columns of the text frame &quot;name&quot;. If &quot;name&quot; is not
given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setText(&quot;text&quot;, [&quot;name&quot;])

Sets the text of the text frame &quot;name&quot; to the text of the string &quot;text&quot;.
Text must be UTF8 encoded - use e.g. unicode(text, 'iso-8859-2'). See the FAQ
for more details. If &quot;name&quot; is not given the currently selected item is
used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setFont(&quot;font&quot;, [&quot;name&quot;])

Sets the font of the text frame &quot;name&quot; to &quot;font&quot;. If there is some text
selected only the selected text is changed.  If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError if the font cannot be found.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setFontSize(size, [&quot;name&quot;])

Sets the font size of the text frame &quot;name&quot; to &quot;size&quot;. &quot;size&quot; is treated
as a value in points. If there is some text selected only the selected text is
changed. &quot;size&quot; must be in the range 1 to 512. If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError for a font size that's out of bounds.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setLineSpacing(size, [&quot;name&quot;])

Sets the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; to &quot;size&quot;.
&quot;size&quot; is a value in points. If &quot;name&quot; is not given the currently selected
item is used.

May throw ValueError if the line spacing is out of bounds.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setColumnGap(size, [&quot;name&quot;])

Sets the column gap of the text frame &quot;name&quot; to the value &quot;size&quot;. If
&quot;name&quot; is not given the currently selected item is used.

May throw ValueError if the column gap is out of bounds (must be positive).
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setColumns(nr, [&quot;name&quot;])

Sets the number of columns of the text frame &quot;name&quot; to the integer &quot;nr&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May throw ValueError if number of columns is not at least one.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setTextAlignment(align, [&quot;name&quot;])

Sets the text alignment of the text frame &quot;name&quot; to the specified alignment.
If &quot;name&quot; is not given the currently selected item is used. &quot;align&quot; should
be one of the ALIGN_ constants defined in this module - see dir(scribus).

May throw ValueError for an invalid alignment constant.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>selectText(start, count, [&quot;name&quot;])

Selects &quot;count&quot; characters of text in the text frame &quot;name&quot; starting from the
character &quot;start&quot;. Character counting starts at 0. If &quot;count&quot; is zero, any
text selection will be cleared.  If &quot;name&quot; is not given the currently
selected item is used.

May throw IndexError if the selection is outside the bounds of the text.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>deleteText([&quot;name&quot;])

Deletes any text in the text frame &quot;name&quot;. If there is some text selected,
only the selected text will be deleted. If &quot;name&quot; is not given the currently
selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setTextColor(&quot;color&quot;, [&quot;name&quot;])

Sets the text color of the text frame &quot;name&quot; to the color &quot;color&quot;. If there
is some text selected only the selected text is changed. If &quot;name&quot; is not
given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setTextStroke(&quot;color&quot;, [&quot;name&quot;])

Set &quot;color&quot; of the text stroke. If &quot;name&quot; is not given the currently
selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setTextShade(shade, [&quot;name&quot;])

Sets the shading of the text color of the object &quot;name&quot; to &quot;shade&quot;. If
there is some text selected only the selected text is changed. &quot;shade&quot; must
be an integer value in the range from 0 (lightest) to 100 (full color
intensity). If &quot;name&quot; is not given the currently selected item is
used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>linkTextFrames(&quot;fromname&quot;, &quot;toname&quot;)

Link two text frames. The frame named &quot;fromname&quot; is linked to the
frame named &quot;toname&quot;. The target frame must be an empty text frame
and must not link to or be linked from any other frames already.

May throw ScribusException if linking rules are violated.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>unlinkTextFrames(&quot;name&quot;)

Remove the specified (named) object from the text frame flow/linkage. If the
frame was in the middle of a chain, the previous and next frames will be
connected, eg 'a->b->c' becomes 'a->c' when you unlinkTextFrames(b)'

May throw ScribusException if linking rules are violated.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>traceText([&quot;name&quot;])

Convert the text frame &quot;name&quot; to outlines. If &quot;name&quot; is not given the
currently selected item is used.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>textOverflows([&quot;name&quot;, nolinks]) -> integer

Returns the actual number of overflowing characters in text frame &quot;name&quot;.
If is nolinks set to non zero value it takes only one frame - it doesn't
use text frame linking. Without this parameter it search all linking chain.

May raise WrongFrameTypeError if the target frame is not an text frame
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>isPDFBookmark([&quot;name&quot;]) -> bool

Returns true if the text frame &quot;name&quot; is a PDF bookmark.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>progressReset()

Cleans up the Scribus progress bar previous settings. It is called before the
new progress bar use. See progressSet.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>progressTotal(max)

Sets the progress bar's maximum steps value to the specified number.
See progressSet.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>progressSet(nr)

Set the progress bar position to &quot;nr&quot;, a value relative to the previously set
progressTotal. The progress bar uses the concept of steps; you give it the
total number of steps and the number of steps completed so far and it will
display the percentage of steps that have been completed. You can specify the
total number of steps with progressTotal(). The current number of steps is set
with progressSet(). The progress bar can be rewound to the beginning with
progressReset(). [based on info taken from Trolltech's Qt docs]
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setCursor()

[UNSUPPORTED!] This might break things, so steer clear for now.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>docChanged(bool)

Enable/disable save icon in the Scribus icon bar and the Save menu item. It's
useful to call this procedure when you're changing the document, because Scribus
won't automatically notice when you change the document using a script.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>zoomDocument(double)

Zoom the document in main GUI window. Actions have whole number
values like 20.0, 100.0, etc. Zoom to Fit uses -100 as a marker.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getFillTransparency([&quot;name&quot;]) -> float

Returns the fill transparency of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getFillBlendmode([&quot;name&quot;]) -> integer

Returns the fill blendmode of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getLineTransparency([&quot;name&quot;]) -> float

Returns the line transparency of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getLineBlendmode([&quot;name&quot;]) -> integer

Returns the line blendmode of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setLayerLocked(&quot;layer&quot;, locked)

Sets the layer &quot;layer&quot; to be locked or not. If locked is set to
true the layer will be locked.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>isLayerLocked(&quot;layer&quot;) -> bool

Returns whether the layer &quot;layer&quot; is locked or not, a value of True means
that the layer &quot;layer&quot; is editable, a value of False means that the layer
&quot;layer&quot; is locked.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>isLayerOutlined(&quot;layer&quot;) -> bool

Returns whether the layer &quot;layer&quot; is outlined or not, a value of True means
that the layer &quot;layer&quot; is outlined, a value of False means that the layer
&quot;layer&quot; is normal.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>isLayerFlow(&quot;layer&quot;) -> bool

Returns whether text flows around objects on layer &quot;layer&quot;, a value of True means
that text flows around, a value of False means that the text does not flow around.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getLayerBlendmode(&quot;layer&quot;) -> int

Returns the &quot;layer&quot; layer blendmode,

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getLayerTransparency(&quot;layer&quot;) -> float

Returns the &quot;layer&quot; layer transparency,

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>textFlowMode(&quot;name&quot; [, state])

Enables/disables &quot;Text Flows Around Frame&quot; feature for object &quot;name&quot;.
Called with parameters string name and optional int &quot;state&quot; (0 &lt;= state &lt;= 3).
Setting &quot;state&quot; to 0 will disable text flow.
Setting &quot;state&quot; to 1 will make text flow around object frame.
Setting &quot;state&quot; to 2 will make text flow around bounding box.
Setting &quot;state&quot; to 3 will make text flow around contour line.
If &quot;state&quot; is not passed, text flow is toggled.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>duplicateObject([&quot;name&quot;]) -> string

creates a Duplicate of the selected Object (or Selection Group).
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setInfo(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -> bool

Sets the document information. &quot;Author&quot;, &quot;Info&quot;, &quot;Description&quot; are
strings.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getPageType() -> integer

Returns the type of the Page, 0 means left Page, 1 is a middle Page and 2 is a right Page
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getTextLines([&quot;name&quot;]) -> integer

Returns the number of lines of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>defineColor(&quot;name&quot;, c, m, y, k)

Defines a new color &quot;name&quot;. The color Value is defined via four components:
c = Cyan, m = Magenta, y = Yellow and k = Black. Color components should be in
the range from 0 to 255.

May raise ValueError if an invalid color name is specified.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getCornerRadius([&quot;name&quot;]) -> integer

Returns the corner radius of the object &quot;name&quot;. The radius is
expressed in points. If &quot;name&quot; is not given the currently
selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getPosition([&quot;name&quot;]) -> (x,y)

Returns a (x, y) tuple with the position of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
The position is expressed in the actual measurement unit of the document
- see UNIT_&lt;type> for reference.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>rotateObjectAbs(rot [, &quot;name&quot;])

Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positive values
mean counter clockwise rotation. If &quot;name&quot; is not given the currently
selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setLayerPrintable(&quot;layer&quot;, printable)

Sets the layer &quot;layer&quot; to be printable or not. If is the
printable set to false the layer won't be printed.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>isLayerVisible(&quot;layer&quot;) -> bool

Returns whether the layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame &quot;name&quot;.
Text must be UTF encoded (see setText() as reference) The first character has an
index of 0. Inserting text at position -1 appends it to the frame. If &quot;name&quot; is
not given the currently selected Item is used.

May throw IndexError for an insertion out of bounds.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setMargins(lr, rr, tr, br)

Sets the margins of the document, Qt::DockLeft(lr), Qt::DockRight(rr), Qt::DockTop(tr) and Qt::DockBottom(br)
margins are given in the measurement units of the document - see UNIT_&lt;type>
constants.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setLayerOutlined(&quot;layer&quot;, outline)

Sets the layer &quot;layer&quot; to be locked or not. If outline is set to
true the layer will be displayed outlined.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setLayerFlow(&quot;layer&quot;, flow)

Sets the layers &quot;layer&quot;  flowcontrol to flow. If flow is set to
true text in layers above this one will flow around objects on this layer.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setLayerBlendmode(&quot;layer&quot;, blend)

Sets the layers &quot;layer&quot;  blendmode to blend.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setLayerTransparency(&quot;layer&quot;, trans)

Sets the layers &quot;layer&quot;  transparency to trans.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setFillTransparency(transparency, [&quot;name&quot;])

Sets the fill transparency of the object &quot;name&quot; to transparency
If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setFillBlendmode(blendmode, [&quot;name&quot;])

Sets the fill blendmode of the object &quot;name&quot; to blendmode
If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setLineTransparency(transparency, [&quot;name&quot;])

Sets the line transparency of the object &quot;name&quot; to transparency
If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setLineBlendmode(blendmode, [&quot;name&quot;])

Sets the line blendmode of the object &quot;name&quot; to blendmode
If &quot;name&quot; is not given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>placeEPS(&quot;filename&quot;, x, y)

Places the EPS &quot;filename&quot; onto the current page,
x and y specify the coordinate of the topleft corner of the EPS placed on the page

If loading was successful, the selection contains the imported EPS
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>placeSXD(&quot;filename&quot;, x, y)

Places the SXD &quot;filename&quot; onto the current page,
x and y specify the coordinate of the topleft corner of the SXD placed on the page

If loading was successful, the selection contains the imported SXD
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>placeODG(&quot;filename&quot;, x, y)

Places the ODG &quot;filename&quot; onto the current page,
x and y specify the coordinate of the topleft corner of the ODG placed on the page

If loading was successful, the selection contains the imported ODG
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>fileDialog(&quot;caption&quot;, [&quot;filter&quot;, &quot;defaultname&quot;, haspreview, issave, isdir]) -> string with filename

Shows a File Open dialog box with the caption &quot;caption&quot;. Files are filtered
with the filter string &quot;filter&quot;. A default filename or file path can also
supplied, leave this string empty when you don't want to use it.  A value of
True for haspreview enables a small preview widget in the FileSelect box.  When
the issave parameter is set to True the dialog acts like a &quot;Save As&quot; dialog
otherwise it acts like a &quot;File Open Dialog&quot;. When the isdir parameter is True
the dialog shows and returns only directories. The default for all of the
optional parameters is False.

The filter, if specified, takes the form 'comment (*.type *.type2 ...)'.
For example 'Images (*.png *.xpm *.jpg)'.

Refer to the Qt-Documentation for QFileDialog for details on filters.

Example: fileDialog('Open input', 'CSV files (*.csv)')
Example: fileDialog('Save report', defaultname='report.txt', issave=True)
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getLineJoin([&quot;name&quot;]) -> integer (see constants)

Returns the line join style of the object &quot;name&quot;. If &quot;name&quot; is not given
the currently selected item is used.  The join types are:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>rotateObject(rot [, &quot;name&quot;])

Rotates the object &quot;name&quot; by &quot;rot&quot; degrees relatively. The object is
rotated by the vertex that is currently selected as the rotation point - by
default, the top left vertex at zero rotation. Positive values mean counter
clockwise rotation when the default rotation point is used. If &quot;name&quot; is not
given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>gotoPage(nr)

Moves to the page &quot;nr&quot; (that is, makes the current page &quot;nr&quot;). Note that
gotoPage doesn't (currently) change the page the user's view is displaying, it
just sets the page that script commands will operates on.

May raise IndexError if the page number is out of range.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setPDFBookmark(&quot;toggle&quot;, [&quot;name&quot;])

Sets whether (toggle = 1) the text frame &quot;name&quot; is a bookmark nor not.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>moveSelectionToFront()

Moves current selection to front.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>moveSelectionToFront()

Moves current selection to back.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>importPage(&quot;fromDoc&quot;, (pageList), [create, imortwhere, importwherePage])

Imports a set of pages (given as a tuple) from an existing document (the file name must be given). This functions maps the &quot;Page->Import&quot; dropdown menu function.
fromDoc: string; the filename of the document to import pages from
pageList: tuple with page numbers of pages to import
create: number; 0 to replace existing pages, 1 (default) to insert new pages
importWhere: number; the page number (of the current document) at which import the pages
importWherePage: number; used if create==1; 0 to create pages before selected page; 1 to create pages after selected page; 2 (default) to create pages at the end of the document
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>createCharStyle(...)

Creates a character style. This function takes the following keyword parameters:

&quot;name&quot; [required] -> name of the char style to create

&quot;font&quot; [optional] -> name of the font to use

fontsize [optional] -> font size to set (double)

&quot;features&quot; [optional] -> nearer typographic details can be defined by a string that might contain the following phrases comma-seperated (without spaces!):

-> inherit

-> bold

-> italic

-> underline

-> underlinewords

-> strike

-> superscript

-> subscript

-> outline

-> shadowed

-> allcaps

-> smallcaps

&quot;fillcolor&quot; [optional], &quot;fillshade&quot; [optional] -> specify fill options

&quot;strokecolor&quot; [optional], &quot;strokeshade&quot; [optional] -> specify stroke options

baselineoffset [optional] -> offset of the baseline

shadowxoffset [optional], shadowyoffset [optional] -> offset of the shadow if used

outlinewidth [optional] -> width of the outline if used

underlineoffset [optional], underlinewidth [optional] -> underline options if used

strikethruoffset [optional], strikethruwidth [optional] -> strikethru options if used

scaleh [optional], scalev [optional] -> scale of the chars

tracking [optional] -> tracking of the text

&quot;language&quot; [optional] -> language code

</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>hyphenateText([&quot;name&quot;]) -> bool

Does hyphenation on text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>dehyphenateText([&quot;name&quot;]) -> bool

Does dehyphenation on text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>scrollDocument(x,y)

Scroll the document in main GUI window by x and y.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getTextDistances([&quot;name&quot;]) -> tuple

Returns the text distances of the text frame &quot;name&quot; expressed in points. The
distances are returned as a tuple like (left, right, top, bottom). If &quot;name&quot;
is not given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setTextDistances(left, right, top, bottom, [&quot;name&quot;])

Sets the text distances of the text frame &quot;name&quot; to the values &quot;left&quot;
&quot;right&quot;, &quot;top&quot; and &quot;bottom&quot;. If &quot;name&quot; is not given the currently
selected item is used.

May throw ValueError if any of the distances are out of bounds (must be positive).
</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>AIPlug</name>
    <message>
      <source>Importing: %1</source>
      <translation>들여오는 중: %1</translation>
    </message>
    <message>
      <source>Analyzing File:</source>
      <translation>파일 분석 중:</translation>
    </message>
    <message>
      <source>Group%1</source>
      <translation>그룹 %1</translation>
    </message>
    <message>
      <source>Generating Items</source>
      <translation>객체 생성 중</translation>
    </message>
  </context>
  <context>
    <name>About</name>
    <message>
      <source>About Scribus %1</source>
      <translation>Scribus %1에 대하여</translation>
    </message>
    <message>
      <source>%1 %2 %3</source>
      <translation>%1 %2 %3</translation>
    </message>
    <message>
      <source>%3-%2-%1 %4 %5</source>
      <translation>%3-%2-%1 %4 %5</translation>
    </message>
    <message>
      <source>Using Ghostscript version %1</source>
      <translation>Ghostscript버전 %1 사용 중</translation>
    </message>
    <message>
      <source>No Ghostscript version available</source>
      <translation>사용 가능한 Ghostscript 버전이 없습니다</translation>
    </message>
    <message>
      <source>Build ID:</source>
      <translation>빌드ID:</translation>
    </message>
    <message>
      <source>&amp;About</source>
      <translation>대하여(&amp;A)</translation>
    </message>
    <message>
      <source>Development Team:</source>
      <translation>개발팀:</translation>
    </message>
    <message>
      <source>Contributions from:</source>
      <translation>기여:</translation>
    </message>
    <message>
      <source>Mac OS&amp;#174; X Aqua Port:</source>
      <translation>맥 OS&amp;#174; X 아쿠아 포트:</translation>
    </message>
    <message>
      <source>Windows&amp;#174; Port:</source>
      <translation>윈도우&amp;#174; 포트:</translation>
    </message>
    <message>
      <source>Official Documentation:</source>
      <translation>공식 문서:</translation>
    </message>
    <message>
      <source>Other Documentation:</source>
      <translation>기타 문서:</translation>
    </message>
    <message>
      <source>A&amp;uthors</source>
      <translation>저자(&amp;U)</translation>
    </message>
    <message>
      <source>Official Translations and Translators:</source>
      <translation>공식 번역 및 번역자:</translation>
    </message>
    <message>
      <source>Previous Translation Contributors:</source>
      <translation>기존 번역 기여자:</translation>
    </message>
    <message>
      <source>&amp;Translations</source>
      <translation>번역(&amp;T)</translation>
    </message>
    <message>
      <source>Homepage</source>
      <translation>홈페이지</translation>
    </message>
    <message>
      <source>Online Reference</source>
      <translation>온라인 참조</translation>
    </message>
    <message>
      <source>Wiki</source>
      <translation>Wiki</translation>
    </message>
    <message>
      <source>Bugs and Feature Requests</source>
      <translation>버그와 특성 요청</translation>
    </message>
    <message>
      <source>Mailing List</source>
      <translation>메일링 목록</translation>
    </message>
    <message>
      <source>&amp;Online</source>
      <translation>온라인(&amp;O)</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>닫기(&amp;C)</translation>
    </message>
    <message>
      <source>Tango Project Icons:</source>
      <translation>Tango 프로젝트 아이콘:</translation>
    </message>
    <message>
      <source>&amp;Updates</source>
      <translation>업데이트(&amp;U)</translation>
    </message>
    <message>
      <source>Check for updates to Scribus. No data from your machine will be transferred off it.</source>
      <translation>Scribus를 업데이트하기 위하여 체크합니다. 여러분의 PC의 자료는 전송되지 않습니다.</translation>
    </message>
    <message>
      <source>OS/2&amp;#174;/eComStation&amp;#8482; Port:</source>
      <translation>OS/2&amp;#174;/eComStation&amp;#8482; 포트:</translation>
    </message>
    <message>
      <source>Splash Screen:</source>
      <translation>스플래시 화면:</translation>
    </message>
    <message>
      <source>This panel shows the version, build date and compiled in library support in Scribus.</source>
      <translation>Scribus에서,버전과 빌드 날짜 그리고 컴파일된 라이브러리 지원을 나타냅니다.</translation>
    </message>
    <message>
      <source>The C-C-T-F equates to C=littlecms C=CUPS T=TIFF support F=Fontconfig support.Last Letter is the renderer C=cairo or Q=Qt</source>
      <translation>C-C-T-F는 C=littlecms C=CUPS T=TIFF지원 F=Fontconfig지원과 같습니다. 최종 문자는 렌더러 C=cairo 또는 Q=Qt입니다</translation>
    </message>
    <message>
      <source>Missing library support is indicated by a *. This also indicates the version of Ghostscript which Scribus has detected.</source>
      <translation>*.은 빠진 라이브러리 지원을 나타냅니다. 이것은 또한 Scribus가 인지한 Ghostscript 버전을 나타냅니다.</translation>
    </message>
    <message>
      <source>The Windows version does not use fontconfig or CUPS libraries.</source>
      <translation>Windows 버전은 fontconfig 또는 CUPS 라이브러리를 이용하지 않습니다.</translation>
    </message>
    <message>
      <source>&lt;p align=&quot;center&quot;>&lt;b>%1 %2&lt;/b>&lt;/p>&lt;p align=&quot;center&quot;>%3&lt;br>%4 %5&lt;br>%6&lt;/p></source>
      <translation>&lt;p 배열=&quot;중앙&quot;>&lt;b>%1 %2&lt;/b>&lt;/p>&lt;p 배열=&quot;중앙&quot;>%3&lt;br>%4 %5&lt;br>%6&lt;/p></translation>
    </message>
    <message>
      <source>Scribus Version</source>
      <translation>Scribus 버전</translation>
    </message>
    <message>
      <source>Check for Updates</source>
      <translation>업데이트 체크</translation>
    </message>
    <message>
      <source>Abort Update Check</source>
      <translation>뎁데이트 체크 취소</translation>
    </message>
    <message>
      <source>Developer Blog</source>
      <translation>개발자 블로그</translation>
    </message>
    <message>
      <source>&amp;Licence</source>
      <translation>허가권(&amp;L)</translation>
    </message>
    <message>
      <source>Unable to open licence file. Please check your install directory or the Scribus website for licencing information.</source>
      <translation>허가권 파일을 열수 없음.  허가권 정보를 위하여 설치 폴더 또는 Scribus 웹사이트를 체크하시오.</translation>
    </message>
  </context>
  <context>
    <name>AboutPlugins</name>
    <message>
      <source>Scribus: About Plug-ins</source>
      <translation>Scribus: 플러그인에 대하여</translation>
    </message>
  </context>
<context>
    <name>AboutPluginsBase</name>
    <message>
        <source>Scribus: About Plug-ins</source>
        <translation>Scribus: 플러그인에 대하여</translation>
    </message>
    <message>
        <source>File Name:</source>
        <translation>파일명:</translation>
    </message>
    <message>
        <source>Version:</source>
        <translation>버전:</translation>
    </message>
    <message>
        <source>Enabled:</source>
        <translation>가능:</translation>
    </message>
    <message>
        <source>Release Date:</source>
        <translation>공개 날짜:</translation>
    </message>
    <message>
        <source>Copyright:</source>
        <translation>저작권:</translation>
    </message>
    <message>
        <source>Author(s):</source>
        <translation>저작자:</translation>
    </message>
    <message>
        <source>Description:</source>
        <translation>설명:</translation>
    </message>
    <message>
        <source>License:</source>
        <translation>허가권:</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>닫기(&amp;C)</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
</context> 
 <context>
    <name>ActionManager</name>
    <message>
      <source>&amp;New</source>
      <translation>새 파일(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Open...</source>
      <translation>열기(&amp;O)...</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>닫기(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>저장(&amp;S)</translation>
    </message>
    <message>
      <source>Save &amp;As...</source>
      <translation>다른 이름으로(&amp;A)...</translation>
    </message>
    <message>
      <source>Re&amp;vert to Saved</source>
      <translation>이전 저장 파일로 복원(&amp;V)</translation>
    </message>
    <message>
      <source>Collect for O&amp;utput...</source>
      <translation>저장 폴더 지정(&amp;U)...</translation>
    </message>
    <message>
      <source>Get Text...</source>
      <translation>텍스트 파일 얻기...</translation>
    </message>
    <message>
      <source>Append &amp;Text...</source>
      <translation>텍스트 추가하기(&amp;T)...</translation>
    </message>
    <message>
      <source>Get Image...</source>
      <translation>이미지 얻기...</translation>
    </message>
    <message>
      <source>Save &amp;Text...</source>
      <translation>텍스트 저장(&amp;T)...</translation>
    </message>
     <message>
        <source>Save Page as &amp;EPS...</source>
        <translation>EPS 저장(&amp;E)...</translation>
    </message> 
  <message>
      <source>Save as P&amp;DF...</source>
      <translation>PDF 저장(&amp;D)...</translation>
    </message>
    <message>
      <source>Document &amp;Setup...</source>
      <translation>문서 설정(&amp;S)...</translation>
    </message>
    <message>
      <source>&amp;Print...</source>
      <translation>인쇄(&amp;P)...</translation>
    </message>
    <message>
      <source>Print Previe&amp;w</source>
      <translation>인쇄 미리보기(&amp;W)</translation>
    </message>
    <message>
      <source>&amp;Quit</source>
      <translation>종료(&amp;Q)</translation>
    </message>
    <message>
      <source>&amp;Undo</source>
      <translation>이전작업(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Redo</source>
      <translation>재실행(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Item Action Mode</source>
      <translation>객체 실행 모드(&amp;I)</translation>
    </message>
    <message>
      <source>Cu&amp;t</source>
      <translation>잘라내기(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>복사(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation>붙여넣기(&amp;P)</translation>
    </message>
    <message>
        <source>C&amp;lear Contents</source>
        <translation>내용 삭제(&amp;L)</translation>
    </message> 
 <message>
      <source>Select &amp;All</source>
      <translation>전체 선택(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;Deselect All</source>
      <translation>전체 선택 취소(&amp;D)</translation>
    </message>
    <message>
      <source>&amp;Search/Replace...</source>
      <translation>찾기/치환(&amp;S)...</translation>
    </message>
    <message>
      <source>Edit Image...</source>
      <translation>이미지 편집...</translation>
    </message>
    <message>
      <source>C&amp;olors...</source>
      <translation>색상(&amp;O)...</translation>
    </message>
	    <message>
        <source>&amp;Paragraph Styles...</source>
        <translation>문단 스타일(&amp;P)...</translation>
    </message>
    <message>
        <source>&amp;Line Styles...</source>
        <translation>선 스타일(&amp;L)...</translation>
    </message>
    <message>
      <source>&amp;Master Pages...</source>
      <translation>마스터 페이지(&amp;M)...</translation>
    </message>
    <message>
      <source>&amp;JavaScripts...</source>
      <translation>자바스크립트(&amp;J)...</translation>
    </message>
    <message>
      <source>P&amp;references...</source>
      <translation>기본 설정(&amp;R)...</translation>
    </message>
    <message>
      <source>%1 pt</source>
      <translation>%1 포인트</translation>
    </message>
    <message>
      <source>&amp;Other...</source>
      <translation>기타(&amp;O)...</translation>
    </message>
    <message>
      <source>&amp;Left</source>
      <translation>왼쪽(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Center</source>
      <translation>중앙(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Right</source>
      <translation>오른쪽(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Block</source>
      <translation>블록(&amp;B)</translation>
    </message>
    <message>
      <source>&amp;Forced</source>
      <translation>강제(&amp;F)</translation>
    </message>
    <message>
      <source>&amp;%1 %</source>
      <translation>&amp;%1 %</translation>
    </message>
    <message>
      <source>&amp;Normal</source>
      <translation>보통(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Underline</source>
      <translation>밑줄(&amp;U)</translation>
    </message>
    <message>
      <source>Underline &amp;Words</source>
      <translation>밑줄 단어(&amp;W)</translation>
    </message>
    <message>
      <source>&amp;Strike Through</source>
      <translation>취소선(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;All Caps</source>
      <translation>대문자(&amp;A)</translation>
    </message>
    <message>
      <source>Small &amp;Caps</source>
      <translation>소문자(&amp;C)</translation>
    </message>
    <message>
      <source>Su&amp;perscript</source>
      <translation>윗첨자(&amp;P)</translation>
    </message>
    <message>
      <source>Su&amp;bscript</source>
      <translation>아래첨자(&amp;B)</translation>
    </message>
	    <message>
        <source>&amp;Outline</source>
        <translation>윤곽선(&amp;O)</translation>
    </message>
    <message>
      <source>S&amp;hadow</source>
      <translation>음영(&amp;H)</translation>
    </message>
    <message>
      <source>&amp;Image Effects</source>
      <translation>이미지 효과(&amp;I)</translation>
    </message>
    <message>
      <source>&amp;Tabulators...</source>
      <translation>탭키 설정(&amp;T)...</translation>
    </message>
    <message>
      <source>D&amp;uplicate</source>
      <translation>복제(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Multiple Duplicate</source>
      <translation>다수 복제(&amp;M)</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>삭제(&amp;D)</translation>
    </message>
    <message>
      <source>&amp;Group</source>
      <translation>그룹(&amp;G)</translation>
    </message>
    <message>
      <source>&amp;Ungroup</source>
      <translation>그룹해제(&amp;U)</translation>
    </message>
    <message>
      <source>Is &amp;Locked</source>
      <translation>잠금(&amp;L)</translation>
    </message>
    <message>
      <source>Si&amp;ze is Locked</source>
      <translation>크기 잠금(&amp;Z)</translation>
    </message>
    <message>
      <source>Lower to &amp;Bottom</source>
      <translation>아래로 이동(&amp;B)</translation>
    </message>
    <message>
      <source>Raise to &amp;Top</source>
      <translation>위로 이동(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;Lower</source>
      <translation>내리기(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Raise</source>
      <translation>올리기(&amp;R)</translation>
    </message>
    <message>
      <source>Send to S&amp;crapbook</source>
      <translation>스크랩북으로 보내기(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Attributes...</source>
      <translation>속성(&amp;A)...</translation>
    </message>
    <message>
      <source>More Info...</source>
      <translation>자세한 정보...</translation>
    </message>
    <message>
      <source>I&amp;mage Visible</source>
      <translation>이미지 보기(&amp;M)</translation>
    </message>
    <message>
      <source>&amp;Update Image</source>
      <translation>이미지 업데이트(&amp;U)</translation>
    </message>
    <message>
      <source>Adjust Frame to Image</source>
      <translation>프레임을 이미지에 맞추기</translation>
    </message>
    <message>
      <source>Extended Image Properties</source>
      <translation>확장 이미지 속성</translation>
    </message>
    <message>
      <source>&amp;Low Resolution</source>
      <translation>저 해상도(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Normal Resolution</source>
      <translation>일반 해상도(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Full Resolution</source>
      <translation>최대 해상도(&amp;F)</translation>
    </message>
    <message>
      <source>Is PDF &amp;Bookmark</source>
      <translation>PDF 북마크(&amp;B)</translation>
    </message>
    <message>
      <source>Is PDF A&amp;nnotation</source>
      <translation>PDF 주석(&amp;N)</translation>
    </message>
    <message>
      <source>Annotation P&amp;roperties</source>
      <translation>주석 속성(&amp;R)</translation>
    </message>
    <message>
      <source>Field P&amp;roperties</source>
      <translation>필드 속성(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Edit Shape...</source>
      <translation>도형 편집(&amp;E)...</translation>
    </message>
    <message>
      <source>&amp;Attach Text to Path</source>
      <translation>텍스트를 경로에 붙임(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;Detach Text from Path</source>
      <translation>경로에서 텍스트를 분리함(&amp;D)</translation>
    </message>
    <message>
      <source>&amp;Combine Polygons</source>
      <translation>다각형 결합(&amp;C)</translation>
    </message>
    <message>
      <source>Split &amp;Polygons</source>
      <translation>다각형 분리(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;Bezier Curve</source>
      <translation>베지어 곡선(&amp;B)</translation>
    </message>
    <message>
      <source>&amp;Image Frame</source>
      <translation>이미지 프레임(&amp;I)</translation>
    </message>
	    <message>
        <source>&amp;Outlines</source>
        <translation>윤곽선(&amp;O)</translation>
    </message>
    <message>
      <source>&amp;Polygon</source>
      <translation>다각형(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;Text Frame</source>
      <translation>텍스트 프레임(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;Glyph...</source>
      <translation>사용자 문자표(&amp;G)...</translation>
    </message>
    <message>
      <source>Sample Text</source>
      <translation>예제 텍스트</translation>
    </message>
    <message>
      <source>&amp;Insert...</source>
      <translation>삽입(&amp;I)...</translation>
    </message>
    <message>
      <source>Im&amp;port...</source>
      <translation>읽어오기(&amp;P)...</translation>
    </message>
    <message>
      <source>&amp;Delete...</source>
      <translation>삭제(&amp;D)...</translation>
    </message>
    <message>
      <source>&amp;Copy...</source>
      <translation>복사(&amp;C)...</translation>
    </message>
    <message>
      <source>&amp;Move...</source>
      <translation>이동(&amp;M)...</translation>
    </message>
    <message>
      <source>&amp;Apply Master Page...</source>
      <translation>마스터 페이지 적용(&amp;A)...</translation>
    </message>
    <message>
      <source>Convert to Master Page...</source>
      <translation>마스터 페이지 변환...</translation>
    </message>
    <message>
      <source>Manage &amp;Guides...</source>
      <translation>안내선 설정(&amp;G)...</translation>
    </message>
    <message>
      <source>Manage Page Properties...</source>
      <translation>페이지 속성 설정...</translation>
    </message>
	    <message>
        <source>&amp;Fit in window</source>
        <translation>창 조정(&amp;F)</translation>
    </message>
    <message>
      <source>&amp;50%</source>
      <translation>&amp;50%</translation>
    </message>
    <message>
      <source>&amp;75%</source>
      <translation>&amp;75%</translation>
    </message>
    <message>
      <source>&amp;100%</source>
      <translation>&amp;100%</translation>
    </message>
    <message>
      <source>&amp;200%</source>
      <translation>&amp;200%</translation>
    </message>
    <message>
        <source>&amp;Thumbnails</source>
        <translation>썸네일(&amp;T)</translation>
    </message>
    <message>
      <source>Show &amp;Margins</source>
      <translation>여백 보이기(&amp;M)</translation>
    </message>
    <message>
      <source>Show &amp;Frames</source>
      <translation>프레임 보이기(&amp;F)</translation>
    </message>
    <message>
      <source>Show &amp;Images</source>
      <translation>이미지 보이기(&amp;I)</translation>
    </message>
    <message>
      <source>Show &amp;Grid</source>
      <translation>격자 보이기(&amp;G)</translation>
    </message>
    <message>
      <source>Show G&amp;uides</source>
      <translation>안내선 보이기(&amp;U)</translation>
    </message>
    <message>
      <source>Show &amp;Baseline Grid</source>
      <translation>기준선 격자 보이기(&amp;B)</translation>
    </message>
    <message>
      <source>Show &amp;Text Chain</source>
      <translation>텍스트 체인 보이기(&amp;T)</translation>
    </message>
    <message>
      <source>Show Control Characters</source>
      <translation>제어문자 보이기</translation>
    </message>
   <message>
        <location filename="../actionmanager.cpp" line="1399"/>
        <source>Rulers relative to Page</source>
        <translation>페이지 관련 눈금자</translation>
    </message> 
 <message>
      <source>Sn&amp;ap to Grid</source>
      <translation>격자에 붙이기(&amp;A)</translation>
    </message>
    <message>
      <source>Sna&amp;p to Guides</source>
      <translation>안내선에 붙이기(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;Properties</source>
      <translation>속성 편집(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;Scrapbook</source>
      <translation>스크랩북(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Layers</source>
      <translation>레이어(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Arrange Pages</source>
      <translation>페이지 배열(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;Bookmarks</source>
      <translation>북마크(&amp;B)</translation>
    </message>
    <message>
      <source>&amp;Measurements</source>
      <translation>측정(&amp;M)</translation>
    </message>
    <message>
      <source>Action &amp;History</source>
      <translation>작업 내역(&amp;H)</translation>
    </message>
    <message>
      <source>Preflight &amp;Verifier</source>
      <translation>문서 검증(&amp;V)</translation>
    </message>
    <message>
      <source>&amp;Align and Distribute</source>
      <translation>정렬/배치(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;Tools</source>
      <translation>도구(&amp;T)</translation>
    </message>
    <message>
      <source>P&amp;DF Tools</source>
      <translation>PDF 도구(&amp;D)</translation>
    </message>
    <message>
      <source>Select Item</source>
      <translation>객체 선택</translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1351"/>
        <source>T&amp;able</source>
        <translation>표(&amp;A)</translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1352"/>
        <source>&amp;Shape</source>
        <translation>도형(&amp;S)</translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1354"/>
        <source>&amp;Line</source>
        <translation>선(&amp;L)</translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1356"/>
        <source>&amp;Freehand Line</source>
        <translation>자유로운 선(&amp;F)</translation>
    </message>
    <message>
      <source>Rotate Item</source>
      <translation>객체 회전</translation>
    </message>
    <message>
      <source>Zoom in or out</source>
      <translation>돋보기</translation>
    </message>
    <message>
      <source>Zoom in</source>
      <translation>확대</translation>
    </message>
    <message>
      <source>Zoom out</source>
      <translation>축소</translation>
    </message>
    <message>
      <source>Edit Contents of Frame</source>
      <translation>프레임 내용 편집</translation>
    </message>
    <message>
      <source>Edit Text...</source>
      <translation>텍스트 편집...</translation>
    </message>
    <message>
      <source>Link Text Frames</source>
      <translation>텍스트 프레임 링크</translation>
    </message>
    <message>
      <source>Unlink Text Frames</source>
      <translation>텍스트 프레임 링크 해제</translation>
    </message>
    <message>
      <source>&amp;Eye Dropper</source>
      <translation>색상 추출기(&amp;E)</translation>
    </message>
    <message>
      <source>Copy Item Properties</source>
      <translation>객체 속성 복사</translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1368"/>
        <source>Edit the text with the Story Editor</source>
        <translation>스토리 편집기로 텍스트 편집</translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1370"/>
        <source>Insert Text Frame</source>
        <translation>텍스트 프레임 삽입</translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1371"/>
        <source>Insert Image Frame</source>
        <translation>이미지 프레임 삽입</translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1372"/>
        <source>Insert Table</source>
        <translation>표 삽입</translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1373"/>
        <source>Insert Shape</source>
        <translation>도형 삽입</translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1374"/>
        <source>Insert Polygon</source>
        <translation>다각형 삽입</translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1375"/>
        <source>Insert Line</source>
        <translation>선 삽입</translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1376"/>
        <source>Insert Bezier Curve</source>
        <translation>베지어 곡선 삽입</translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1377"/>
        <source>Insert Freehand Line</source>
        <translation>자유로운 선 삽입</translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1412"/>
        <source>&amp;Manage Pictures</source>
        <translation>이미지 관리(&amp;M)</translation>
    </message>
    <message>
      <source>&amp;Hyphenate Text</source>
      <translation>하이픈 연결(&amp;H)</translation>
    </message>
    <message>
      <source>Dehyphenate Text</source>
      <translation>하이픈 연결 해제</translation>
    </message>
    <message>
      <source>&amp;Generate Table Of Contents</source>
      <translation>목차 생성(&amp;G)</translation>
    </message>
    <message>
      <source>&amp;Cascade</source>
      <translation>계단식(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Tile</source>
      <translation>타일식(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;About Scribus</source>
      <translation>Scribus에 대하여(&amp;A)</translation>
    </message>
	    <message>
        <location filename="../actionmanager.cpp" line="1423"/>
        <source>&amp;About Plug-ins</source>
        <translation>플러그인에 대하여(&amp;A)</translation>
    </message>
    <message>
      <source>About &amp;Qt</source>
      <translation>Qt에 대하여(&amp;Q)</translation>
    </message>
    <message>
      <source>Toolti&amp;ps</source>
      <translation>도구설명(&amp;P)</translation>
    </message>
    <message>
      <source>Scribus &amp;Manual...</source>
      <translation>Scribus 메뉴얼(&amp;M)...</translation>
    </message>
    <message>
      <source>Smart &amp;Hyphen</source>
      <translation>하이픈 능동적용(&amp;H)</translation>
    </message>
    <message>
      <source>Non Breaking Dash</source>
      <translation>개행없음 대시</translation>
    </message>
    <message>
      <source>Non Breaking &amp;Space</source>
      <translation>개행없음 공백(&amp;S)</translation>
    </message>
    <message>
      <source>Page &amp;Number</source>
      <translation>페이지 번호(&amp;N)</translation>
    </message>
	    <message>
        <location filename="../../scribus/actionmanager.cpp" line="1481"/>
        <source>New Line</source>
        <translation>새로운 줄</translation>
    </message>
    <message>
      <source>Frame Break</source>
      <translation>프레임 개행</translation>
    </message>
    <message>
      <source>Column Break</source>
      <translation>열 개행</translation>
    </message>
    <message>
      <source>Copyright</source>
      <translation>저작권</translation>
    </message>
    <message>
      <source>Registered Trademark</source>
      <translation>등록상표(R)</translation>
    </message>
    <message>
      <source>Trademark</source>
      <translation>등록상표(T)</translation>
    </message>
    <message>
      <source>Bullet</source>
      <translation>작은 점</translation>
    </message>
    <message>
      <source>Em Dash</source>
      <translation>Em 대시</translation>
    </message>
    <message>
      <source>En Dash</source>
      <translation>En 대시</translation>
    </message>
    <message>
      <source>Figure Dash</source>
      <translation>숫자 대시</translation>
    </message>
    <message>
      <source>Quotation Dash</source>
      <translation>인용 대시</translation>
    </message>
	    <message>
        <source>Apostrophe</source>
        <translation>어포스트로피</translation>
    </message>
    <message>
      <source>Toggle Palettes</source>
      <translation>팔레트 전환</translation>
    </message>
    <message>
      <source>Toggle Guides</source>
      <translation>안내선 전환</translation>
    </message>
	  <message>
        <location filename="../../scribus/actionmanager.cpp" line="1330"/>
        <source>More Info...</source>
        <translation>자세한 정보...</translation>
    </message>
    <message>
        <source>Copy Contents</source>
        <translation>내용 복사</translation>
    </message>
    <message>
        <source>Paste Contents</source>
        <translation>내용 붙여넣기</translation>
    </message>
    <message>
      <source>Paste (&amp;Absolute)</source>
      <translation>붙여넣기 (절대값)(&amp;A)</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>제거(&amp;L)</translation>
    </message>
    <message>
      <source>S&amp;tyles...</source>
      <translation>스타일(&amp;T)...</translation>
    </message>
    <message>
      <source>&amp;Outline</source>
      <comment>type effect</comment>
      <translation>윤곽선(&amp;O)</translation>
    </message>
    <message>
      <source>&amp;Printing Enabled</source>
      <translation>인쇄 가능(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;Flip Horizontally</source>
      <translation>수평 뒤집기(&amp;F)</translation>
    </message>
    <message>
      <source>&amp;Flip Vertically</source>
      <translation>수직 뒤집기(&amp;F)</translation>
    </message>
    <message>
      <source>&amp;Outlines</source>
      <comment>Convert to oulines</comment>
      <translation>윤곽선(&amp;O)</translation>
    </message>
    <message>
      <source>Show Rulers</source>
      <translation>눈금자 보기</translation>
    </message>
    <message>
      <source>&amp;Outline</source>
      <comment>Document Outline Palette</comment>
      <translation>문서 전체 윤곽(&amp;O)</translation>
    </message>
    <message>
      <source>Insert PDF Push Button</source>
      <translation>PDF 누름 버튼 삽입</translation>
    </message>
    <message>
      <source>Insert PDF Text Field</source>
      <translation>PDF 텍스트 필드 삽입</translation>
    </message>
    <message>
      <source>Insert PDF Check Box</source>
      <translation>PDF 체크 상자 삽입</translation>
    </message>
    <message>
      <source>Insert PDF Combo Box</source>
      <translation>PDF 콤보 상자 삽입</translation>
    </message>
    <message>
      <source>Insert PDF List Box</source>
      <translation>PDF 목록 상자 삽입</translation>
    </message>
    <message>
      <source>Insert Text Annotation</source>
      <translation>텍스트 주석 삽입</translation>
    </message>
    <message>
      <source>Insert Link Annotation</source>
      <translation>링크 주석 삽입</translation>
    </message>
    <message>
      <source>New Line</source>
      <translation>새로운 줄</translation>
    </message>
    <message>
      <source>Solidus</source>
      <translation>사선</translation>
    </message>
    <message>
      <source>Middle Dot</source>
      <translation>중간 점</translation>
    </message>
    <message>
      <source>En Space</source>
      <translation>En 공백</translation>
    </message>
    <message>
      <source>Em Space</source>
      <translation>Em 공백</translation>
    </message>
    <message>
      <source>Thin Space</source>
      <translation>좁은 공백</translation>
    </message>
    <message>
      <source>Thick Space</source>
      <translation>두터운 공백</translation>
    </message>
    <message>
      <source>Mid Space</source>
      <translation>중간 공백</translation>
    </message>
    <message>
      <source>Hair Space</source>
      <translation>헤어 공백</translation>
    </message>
	    <message>
        <location filename="../actionmanager.cpp" line="1461"/>
        <source>Insert Smart Hyphen</source>
        <translation>능동 적용 하이픈 삽입</translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1462"/>
        <source>Insert Non Breaking Dash</source>
        <translation>개행없음 대시 삽입</translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1463"/>
        <source>Insert Non Breaking Space</source>
        <translation>개행없음 공백 삽입</translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1464"/>
        <source>Insert Page Number</source>
        <translation>페이지 번호 삽입</translation>
    </message>
    <message>
      <source>ff</source>
      <translation>ff</translation>
    </message>
    <message>
      <source>fi</source>
      <translation>fi</translation>
    </message>
    <message>
      <source>fl</source>
      <translation>fl</translation>
    </message>
    <message>
      <source>ffi</source>
      <translation>ffi</translation>
    </message>
    <message>
      <source>ffl</source>
      <translation>ffl</translation>
    </message>
    <message>
      <source>ft</source>
      <translation>ft</translation>
    </message>
    <message>
      <source>st</source>
      <translation>st</translation>
    </message>
    <message>
      <source>Save as &amp;EPS...</source>
      <translation>EPS 저장(&amp;E)...</translation>
    </message>
    <message>
      <source>Show Text Frame Columns</source>
      <translation>텍스트 프레임 열 보이기</translation>
    </message>
    <message>
      <source>&amp;Frame...</source>
      <translation>프레임(&amp;F)...</translation>
    </message>
    <message>
      <source>Preview Mode</source>
      <translation>미리보기 모드</translation>
    </message>
    <message>
      <source>Show Layer Indicators</source>
      <translation>레이어 지시자 보기</translation>
    </message>
    <message>
      <source>Patterns...</source>
      <translation>색상표...</translation>
    </message>
    <message>
      <source>Send to Patterns</source>
      <translation>색상표에 저장</translation>
    </message>
    <message>
      <source>Sticky Tools</source>
      <translation>스티키 도구</translation>
    </message>
    <message>
      <source>&amp;Fit to Height</source>
      <translation>높이에 맞게(&amp;F)</translation>
    </message>
    <message>
      <source>Fit to Width</source>
      <translation>너비에 맞게</translation>
    </message>
    <message>
      <source>Show Bleeds</source>
      <translation>물림재단 보이기</translation>
    </message>
    <message>
      <source>&amp;Zero Width Space</source>
      <translation>0 너비 공백(&amp;Z)</translation>
    </message>
    <message>
      <source>Zero Width NB Space</source>
      <translation>0 너비 NB 공백</translation>
    </message>
    <message>
      <source>Apostrophe</source>
      <comment>Unicode 0x0027</comment>
      <translation>'     0x0027삽입</translation>
    </message> 
    <message>
      <source>Straight Double</source>
      <comment>Unicode 0x0022</comment>
      <translation>"     0x0022삽입</translation>
    </message>
    <message>
      <source>Single Left</source>
      <comment>Unicode 0x2018</comment>
      <translation>‘     0x2018삽입</translation>
    </message>
    <message>
      <source>Single Right</source>
      <comment>Unicode 0x2019</comment>
      <translation>’     0x2019삽입</translation>
    </message>
    <message>
      <source>Double Left</source>
      <comment>Unicode 0x201C</comment>
      <translation>“     0x201C삽입</translation>
    </message>
    <message>
      <source>Double Right</source>
      <comment>Unicode 0x201D</comment>
      <translation>”     0x201D삽입</translation>
    </message>
    <message>
      <source>Single Reversed</source>
      <comment>Unicode 0x201B</comment>
      <translation>‛     0x201B삽입</translation>
    </message>
    <message>
      <source>Double Reversed</source>
      <comment>Unicode 0x201F</comment>
      <translation>``    0x201F삽입</translation>
    </message>
    <message>
      <source>Single Left Guillemet</source>
      <comment>Unicode 0x2039</comment>
      <translation>‹     0x2039삽입</translation>
    </message>
    <message>
      <source>Single Right Guillemet</source>
      <comment>Unicode 0x203A</comment>
      <translation>›     0x203A삽입</translation>
    </message>
    <message>
      <source>Double Left Guillemet</source>
      <comment>Unicode 0x00AB</comment>
      <translation>‹‹    0x00AB삽입</translation>
    </message>
    <message>
      <source>Double Right Guillemet</source>
      <comment>Unicode 0x00BB</comment>
      <translation>››    0x00BB삽입</translation>
    </message>
    <message>
      <source>Low Single Comma</source>
      <comment>Unicode 0x201A</comment>
      <translation>‚     0x201A삽입</translation>
    </message>
    <message>
      <source>Low Double Comma</source>
      <comment>Unicode 0x201E</comment>
      <translation>„     0x201E삽입</translation>
    </message>
    <message>
      <source>CJK Single Left</source>
      <comment>Unicode 0x300C</comment>
      <translation>왼쪽 따옴표</translation>
    </message>
    <message>
      <source>CJK Single Right</source>
      <comment>Unicode 0x300D</comment>
      <translation>오른쪽 따옴표</translation>
    </message>
    <message>
      <source>CJK Double Left</source>
      <comment>Unicode 0x300E</comment>
      <translation>왼쪽 이중 따옴표</translation>
    </message>
    <message>
      <source>CJK Double Right</source>
      <comment>Unicode 0x300F</comment>
      <translation>오른쪽 이중 따옴표</translation>
    </message>
    <message>
      <source>&amp;400%</source>
      <translation>&amp;400%</translation>
    </message>
    <message>
      <source>Insert &amp;Text Frame</source>
      <translation>텍스트 프레임 삽입(&amp;T)</translation>
    </message>
    <message>
      <source>Insert &amp;Image Frame</source>
      <translation>이미지 프레임 삽입(&amp;I)</translation>
    </message>
    <message>
      <source>Insert T&amp;able</source>
      <translation>표 삽입(&amp;A)</translation>
    </message>
    <message>
      <source>Insert &amp;Shape</source>
      <translation>도형 삽입(&amp;S)</translation>
    </message>
    <message>
      <source>Insert &amp;Polygon</source>
      <translation>다각형 삽입(&amp;P)</translation>
    </message>
    <message>
      <source>Insert &amp;Line</source>
      <translation>선 삽입(&amp;L)</translation>
    </message>
    <message>
      <source>Insert &amp;Bezier Curve</source>
      <translation>베지어선 삽입(&amp;B)</translation>
    </message>
    <message>
      <source>Insert &amp;Freehand Line</source>
      <translation>자유로운 선 삽입(&amp;F)</translation>
    </message>
    <message>
      <source>Scribus Homepage</source>
      <translation>Scribus 홈페이지</translation>
    </message>
    <message>
      <source>Scribus Online Documentation</source>
      <translation>Scribus 온라인 문서</translation>
    </message>
    <message>
      <source>Scribus Wiki</source>
      <translation>Scribus Wiki</translation>
    </message>
    <message>
      <source>Getting Started with Scribus</source>
      <translation>Scribus 시작하기</translation>
    </message>
    <message>
      <source>Show Context Menu</source>
      <translation>문맥 메뉴 보이기</translation>
    </message>
    <message>
      <source>&amp;Manage Images</source>
      <translation>이미지 관리(&amp;M)</translation>
    </message>
    <message>
      <source>&amp;About Plugins</source>
      <translation>플러그인에 대하여(&amp;A)</translation>
    </message>
    <message>
      <source>Insert Unicode Character Begin Sequence</source>
      <translation>Unicode문자 시작 순서 삽입</translation>
    </message>
    <message>
      <source>Get Vector File...</source>
      <translation>벡터 파일 얻기...</translation>
    </message>
    <message>
      <source>Advanced Select All...</source>
      <translation>고급 객체 선택...</translation>
    </message>
    <message>
      <source>Edit Source...</source>
      <translation>소스 편집...</translation>
    </message>
    <message>
      <source>Replace Colors...</source>
      <translation>색상 치환...</translation>
    </message>
    <message>
      <source>Rulers Relative to Page</source>
      <translation>페이지 관련 눈금자</translation>
    </message>
    <message>
      <source>Insert &amp;Render Frame</source>
      <translation>렌더 프레임 삽입(&amp;R)</translation>
    </message>
    <message>
      <source>Check for Updates</source>
      <translation>업데이트 체크</translation>
    </message>
    <message>
      <source>Number of Pages</source>
      <translation>페이지 총수</translation>
    </message>
  </context>
  <context>
    <name>AdjustCmsDialog</name>
    <message>
      <source>CMS Settings</source>
      <translation>CMS 설정</translation>
    </message>
  </context>
  <context>
    <name>AlignDistribute</name>
    <message>
      <source>Align</source>
      <translation>정렬</translation>
    </message>
    <message>
      <source>&amp;Selected Guide:</source>
      <translation>선택된 안내선(&amp;S):</translation>
    </message>
    <message>
      <source>&amp;Relative To:</source>
      <translation>관계(&amp;R):</translation>
    </message>
    <message>
      <source>...</source>
      <translation>...</translation>
    </message>
    <message>
      <source>Distribute</source>
      <translation>배치</translation>
    </message>
    <message>
      <source>&amp;Distance:</source>
      <translation>거리(&amp;D):</translation>
    </message>
  </context>
  <context>
    <name>AlignDistributePalette</name>
    <message>
       <source>Align and Distribute</source>
       <translation>정렬 및 배치</translation>
    </message>
    <message>
        <source>Align</source>
        <translation>정렬</translation>
    </message>
    <message>
        <source>&amp;Relative to:</source>
        <translation>기준(&amp;R):</translation>
    </message>
    <message>
        <source>First Selected</source>
        <translation>처음 선택된 것</translation>
    </message>
    <message>
        <source>Last Selected</source>
        <translation>마지막 선택된 것</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>페이지</translation>
    </message>
    <message>
        <source>Margins</source>
        <translation>여백</translation>
    </message>
    <message>
        <source>Guide</source>
        <translation>안내선</translation>
    </message>
    <message>
        <source>Selection</source>
        <translation>선택</translation>
    </message>
    <message>
        <source>Align right sides of objects to left side of anchor</source>
        <translation>객체 오른쪽에서 고정점 왼쪽면으로 정렬</translation>
    </message>
    <message>
        <source>Align left sides of objects to right side of anchor</source>
        <translation>객체 왼쪽에서 고정점 오른쪽면으로 정렬</translation>
    </message>
    <message>
        <source>Align bottoms</source>
        <translation>아래 정렬</translation>
    </message>
    <message>
        <source>Align right sides</source>
        <translation>오른쪽 정렬</translation>
    </message>
    <message>
        <source>Align tops of objects to bottom of anchor</source>
        <translation>객체 위에서 고정점 아래로 정렬</translation>
    </message>
    <message>
        <source>Center on vertical axis</source>
        <translation>수직축 중앙</translation>
    </message>
    <message>
        <source>Align left sides</source>
        <translation>왼쪽 면 정렬</translation>
    </message>
    <message>
        <source>Center on horizontal axis</source>
        <translation>수평 축 중앙</translation>
    </message>
    <message>
        <source>Align bottoms of objects to top of anchor</source>
        <translation>객체 아래에서 고정점 위로 정렬</translation>
    </message>
    <message>
        <source>Align tops</source>
        <translation>위로 정렬</translation>
    </message>
    <message>
        <source>&amp;Selected Guide:</source>
        <translation>선택된 안내선(&amp;S):</translation>
    </message>
    <message>
        <source>Distribute</source>
        <translation>배치</translation>
    </message>
    <message>
        <source>Make horizontal gaps between objects equal</source>
        <translation>객체 사이 수평 간격을 동일하게</translation>
    </message>
    <message>
        <source>Make horizontal gaps between objects equal to the value specified</source>
        <translation>객체 사이 수평 간격을 정한 값으로 동일하게</translation>
    </message>
    <message>
        <source>Distribute right sides equidistantly</source>
        <translation>오른쪽 면에 등거리 배치</translation>
    </message>
    <message>
        <source>Distribute bottoms equidistantly</source>
        <translation>아래에 등거리 배치</translation>
    </message>
    <message>
        <source>Distribute centers equidistantly horizontally</source>
        <translation>수평으로 중앙 등거리 배치</translation>
    </message>
    <message>
        <source>Make vertical gaps between objects equal</source>
        <translation>객체 사이 수직 간격을 동일하게</translation>
    </message>
    <message>
        <source>Make vertical gaps between objects equal to the value specified</source>
        <translation>객체 사이 수직 간격을 정한 값으로 동일하게</translation>
    </message>
    <message>
        <source>Distribute left sides equidistantly</source>
        <translation>왼쪽 면에 등거리 배치</translation>
    </message>
    <message>
        <source>Distribute centers equidistantly vertically</source>
        <translation>수직으로 중앙 등거리 배치</translation>
    </message>
    <message>
        <source>Distribute tops equidistantly</source>
        <translation>위에서 등거리 배치</translation>
    </message>
    <message>
       <source>&amp;Distance:</source>
        <translation>거리(&amp;D):</translation>
    </message>
    <message>
        <source>Distribute the items with the distance specified</source>
        <translation>객체를 지정거리로 배치</translation>
    </message>
    <message>
         <source>None Selected</source>
        <translation>없음</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>오류</translation>
    </message>
    <message>
        <source>Some objects are locked.</source>
        <translation>몇 객체가 잠금.</translation>
    </message>
    <message>
        <source>&amp;Unlock All</source>
        <translation>전체 잠금 해제(&amp;U)</translation>
    </message>
    <message>
        <source>Y: %1%2</source>
        <translation>Y: %1%2</translation>
    </message>
    <message>
        <source>X: %1%2</source>
        <translation>X: %1%2</translation>
    </message>
    <message>
        <source>Align right sides of items to left side of anchor</source>
        <translation>객체의 오른쪽면을  고정점의 왼쪽면으로 정렬</translation>
    </message>
    <message>
        <source>Align left sides of items to right side of anchor</source>
        <translation>객체 왼쪽면을 고정점의 오른쪽으로 정렬</translation>
    </message>
    <message>
        <source>Align tops of items to bottom of anchor</source>
        <translation>객체의 위를 고정점 아래에 정렬</translation>
    </message>
    <message>
        <source>Align bottoms of items to top of anchor</source>
        <translation>객체 아래를 고정점 상부에 정렬</translation>
    </message>
    <message>
        <source>Make horizontal gaps between items equal</source>
        <translation>객체 사이 수평 간격을 주어진 값과 같게 만듦</translation>
    </message>
    <message>
        <source>Make horizontal gaps between items equal to the value specified</source>
        <translation>객체 사이 수평 간격을 지정 값과 같게 만듦</translation>
    </message>
    <message>
        <source>Make vertical gaps between items equal</source>
        <translation>객체 사이 수직 간격을 지정 값으로 만듦</translation>
    </message>
    <message>
        <source>Make vertical gaps between items equal to the value specified</source>
        <translation>객체 사이 수직 간격을 정해진 값으로 만듦</translation>
    </message>
    <message>
        <source>Make horizontal gaps between items and sides of page equal</source>
        <translation>객체과 페이지면 사이에 수평 간격이 같게</translation>
    </message>
    <message>
        <source>Make vertical gaps between items and the top and bottom of page margins equal</source>
        <translation>객체과 페이지의 아래 윗쪽 사이 수직 간격이 같게</translation>
    </message>
    <message>
        <source>Make horizontal gaps between items and sides of page margins equal</source>
        <translation>객체와 페이지면의 간격사이의 수평여백이 같게</translation>
    </message>
    <message>
        <source>Make vertical gaps between items and the top and bottom of page equal</source>
        <translation>객체와 페이지의 아래윗쪽 사이 수직 간격이 같게</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Align relative to the:&lt;ul&gt;&lt;li&gt;First selected item&lt;/li&gt;&lt;li&gt;Second Selected Item&lt;/li&gt;&lt;li&gt;The current page&lt;/li&gt;&lt;li&gt;The margins of the current page&lt;/li&gt;&lt;li&gt;A Guide&lt;/li&gt;&lt;li&gt;The selection&lt;/ul&gt;&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;관련 정렬:&lt;ul&gt;&lt;li&gt;처음 선택된 객체&lt;/li&gt;&lt;li&gt;둘째 선택된 객체&lt;/li&gt;&lt;li&gt;현재 페이지&lt;/li&gt;&lt;li&gt;현재 페이지의 여백&lt;/li&gt;&lt;li&gt;안내선&lt;/li&gt;&lt;li&gt;선택&lt;/ul&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>The location of the selected guide to align to</source>
        <translation>정렬하기 위한 선택 안내선의 위치</translation>
    </message>
</context>
  <context>
    <name>AlignSelect</name>
    <message>
      <source>Align Text Left</source>
      <translation>텍스트 왼쪽 정렬</translation>
    </message>
    <message>
      <source>Align Text Right</source>
      <translation>텍스트 오른쪽 정렬</translation>
    </message>
    <message>
      <source>Align Text Center</source>
      <translation>텍스트 중앙 정렬</translation>
    </message>
    <message>
      <source>Align Text Justified</source>
      <translation>텍스트 양쪽 맞춤</translation>
    </message>
    <message>
      <source>Align Text Forced Justified</source>
      <translation>텍스트 강제 양쪽 맞춤</translation>
    </message>
  </context>
  <context>
    <name>Annot</name>
    <message>
      <source>Field Properties</source>
      <translation>필드 속성</translation>
    </message>
    <message>
      <source>Type:</source>
      <translation>형태:</translation>
    </message>
    <message>
      <source>Button</source>
      <translation>단추</translation>
    </message>
    <message>
      <source>Text Field</source>
      <translation>텍스트 필드</translation>
    </message>
    <message>
      <source>Check Box</source>
      <translation>체크 상자</translation>
    </message>
    <message>
      <source>Combo Box</source>
      <translation>콤보 상자</translation>
    </message>
    <message>
      <source>List Box</source>
      <translation>목록 상자</translation>
    </message>
    <message>
      <source>Properties</source>
      <translation>속성</translation>
    </message>
    <message>
      <source>Name:</source>
      <translation>이름:</translation>
    </message>
    <message>
      <source>Text</source>
      <translation>텍스트</translation>
    </message>
    <message>
      <source>Font for use with PDF 1.3:</source>
      <translation>PDF 1.3 사용하기 위한 글꼴:</translation>
    </message>
    <message>
      <source>Border</source>
      <translation>경계</translation>
    </message>
    <message>
      <source>Color:</source>
      <translation>색상:</translation>
    </message>
    <message>
      <source>None</source>
      <translation>없음</translation>
    </message>
    <message>
      <source>Width:</source>
      <translation>너비:</translation>
    </message>
    <message>
      <source>Thin</source>
      <translation>좁음</translation>
    </message>
    <message>
      <source>Normal</source>
      <translation>보통</translation>
    </message>
    <message>
      <source>Wide</source>
      <translation>넓음</translation>
    </message>
    <message>
      <source>Style:</source>
      <translation>형태:</translation>
    </message>
    <message>
      <source>Solid</source>
      <translation>실선</translation>
    </message>
    <message>
      <source>Dashed</source>
      <translation>파선</translation>
    </message>
    <message>
      <source>Underline</source>
      <translation>밑줄</translation>
    </message>
    <message>
      <source>Beveled</source>
      <translation>빗금</translation>
    </message>
    <message>
      <source>Inset</source>
      <translation>삽입</translation>
    </message>
    <message>
      <source>Other</source>
      <translation>기타</translation>
    </message>
    <message>
      <source>Read Only</source>
      <translation>읽기만</translation>
    </message>
    <message>
      <source>Required</source>
      <translation>필수</translation>
    </message>
    <message>
      <source>Visibility:</source>
      <translation>가시성:</translation>
    </message>
    <message>
      <source>Visible</source>
      <translation>보임</translation>
    </message>
    <message>
      <source>Hidden</source>
      <translation>숨김</translation>
    </message>
    <message>
      <source>No Print</source>
      <translation>인쇄 안함</translation>
    </message>
    <message>
      <source>No View</source>
      <translation>보기 없음</translation>
    </message>
    <message>
      <source>Appearance</source>
      <translation>외형</translation>
    </message>
    <message>
      <source>Text for Button Down</source>
      <translation>단추 누르기 텍스트</translation>
    </message>
    <message>
      <source>Text for Roll Over</source>
      <translation>말아올리기 텍스트</translation>
    </message>
    <message>
      <source>Icons</source>
      <translation>아이콘</translation>
    </message>
    <message>
      <source>Use Icons</source>
      <translation>아이콘 사용</translation>
    </message>
    <message>
      <source>Remove</source>
      <translation>제거</translation>
    </message>
    <message>
      <source>Pressed</source>
      <translation>누름</translation>
    </message>
    <message>
      <source>Roll Over</source>
      <translation>말아 올리기</translation>
    </message>
    <message>
      <source>Icon Placement...</source>
      <translation>아이콘 위치...</translation>
    </message>
    <message>
      <source>Highlight</source>
      <translation>강조</translation>
    </message>
    <message>
      <source>Invert</source>
      <translation>반전</translation>
    </message>
    <message>
      <source>Outlined</source>
      <translation>윤곽선</translation>
    </message>
    <message>
      <source>Push</source>
      <translation>밀기</translation>
    </message>
    <message>
      <source>Multi-Line</source>
      <translation>다중선</translation>
    </message>
    <message>
      <source>Password</source>
      <translation>암호</translation>
    </message>
    <message>
      <source>Characters</source>
      <translation>문자</translation>
    </message>
    <message>
      <source>Do Not Scroll</source>
      <translation>스크롤 안함</translation>
    </message>
    <message>
      <source>Do Not Spell Check</source>
      <translation>맞춤법 체크 안함</translation>
    </message>
    <message>
      <source>Check Style:</source>
      <translation>스타일 체크:</translation>
    </message>
    <message>
      <source>Check</source>
      <translation>체크</translation>
    </message>
    <message>
      <source>Cross</source>
      <translation>십자</translation>
    </message>
    <message>
      <source>Diamond</source>
      <translation>다이아몬드</translation>
    </message>
    <message>
      <source>Circle</source>
      <translation>원</translation>
    </message>
    <message>
      <source>Star</source>
      <translation>별</translation>
    </message>
    <message>
      <source>Square</source>
      <translation>사각</translation>
    </message>
    <message>
      <source>Editable</source>
      <translation>편집가능</translation>
    </message>
    <message>
      <source>Options</source>
      <translation>설정</translation>
    </message>
    <message>
      <source>JavaScript</source>
      <translation>자바스크립트</translation>
    </message>
    <message>
      <source>Go To</source>
      <translation>이동</translation>
    </message>
    <message>
      <source>Submit Form</source>
      <translation>전송 양식</translation>
    </message>
    <message>
      <source>Reset Form</source>
      <translation>양식 초기화</translation>
    </message>
    <message>
      <source>Import Data</source>
      <translation>자료 들여오기</translation>
    </message>
    <message>
      <source>Event:</source>
      <translation>이벤트:</translation>
    </message>
    <message>
      <source>Mouse Up</source>
      <translation>마우스 위로</translation>
    </message>
    <message>
      <source>Mouse Down</source>
      <translation>마우스 아래로</translation>
    </message>
    <message>
      <source>Mouse Enter</source>
      <translation>마우스 엔터</translation>
    </message>
    <message>
      <source>Mouse Exit</source>
      <translation>마우스 종료</translation>
    </message>
    <message>
      <source>On Focus</source>
      <translation>초점</translation>
    </message>
    <message>
      <source>On Blur</source>
      <translation>흐림</translation>
    </message>
    <message>
      <source>Script:</source>
      <translation>자바스크립트:</translation>
    </message>
    <message>
      <source>Edit...</source>
      <translation>편집...</translation>
    </message>
    <message>
      <source>Submit to URL:</source>
      <translation>다음 URL로 전송:</translation>
    </message>
    <message>
      <source>Submit Data as HTML</source>
      <translation>자료를 HTML로 보내기</translation>
    </message>
    <message>
      <source>Import Data from:</source>
      <translation>자료 들여오기:</translation>
    </message>
    <message>
      <source>Destination</source>
      <translation>출력대상</translation>
    </message>
    <message>
      <source>To File:</source>
      <translation>파일로:</translation>
    </message>
    <message>
      <source>Change...</source>
      <translation>바꾸기...</translation>
    </message>
    <message>
      <source>Page:</source>
      <translation>페이지:</translation>
    </message>
    <message>
      <source>X-Pos:</source>
      <translation>X 위치:</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> 포인트</translation>
    </message>
    <message>
      <source>Y-Pos:</source>
      <translation>Y 위치:</translation>
    </message>
    <message>
      <source>Action</source>
      <translation>작업</translation>
    </message>
    <message>
      <source>Field is formatted as:</source>
      <translation>필드 형식:</translation>
    </message>
    <message>
      <source>Plain</source>
      <translation>보통</translation>
    </message>
    <message>
      <source>Number</source>
      <translation>숫자</translation>
    </message>
    <message>
      <source>Percentage</source>
      <translation>백분율</translation>
    </message>
    <message>
      <source>Date</source>
      <translation>날짜</translation>
    </message>
    <message>
      <source>Time</source>
      <translation>시간</translation>
    </message>
    <message>
      <source>Custom</source>
      <translation>사용자</translation>
    </message>
    <message>
      <source>Number Format</source>
      <translation>숫자 형식</translation>
    </message>
    <message>
      <source>Decimals:</source>
      <translation>십진법:</translation>
    </message>
    <message>
      <source>Use Currency Symbol</source>
      <translation>통화 기호 사용</translation>
    </message>
    <message>
      <source>Prepend Currency Symbol</source>
      <translation>통화 기호 이전에 추가</translation>
    </message>
    <message>
      <source>Formatting</source>
      <translation>형식</translation>
    </message>
    <message>
      <source>Percent Format</source>
      <translation>백분율 형식</translation>
    </message>
    <message>
      <source>Date Format</source>
      <translation>날짜 형식</translation>
    </message>
    <message>
      <source>Time Format</source>
      <translation>시간 형식</translation>
    </message>
    <message>
      <source>Custom Scripts</source>
      <translation>사용자 스크립트</translation>
    </message>
    <message>
      <source>Format:</source>
      <translation>형식:</translation>
    </message>
    <message>
      <source>Keystroke:</source>
      <translation>키입력:</translation>
    </message>
    <message>
      <source>Format</source>
      <translation>형식</translation>
    </message>
    <message>
      <source>Value is not validated</source>
      <translation>값이 유효하지 않습니다</translation>
    </message>
    <message>
      <source>Value must be greater than or equal to:</source>
      <translation>값이 크거나 같아야 합니다:</translation>
    </message>
    <message>
      <source>and less or equal to:</source>
      <translation>값이 적거나 같아야 합니다:</translation>
    </message>
    <message>
      <source>Custom validate script:</source>
      <translation>사용자 인증 스크립트:</translation>
    </message>
    <message>
      <source>Validate</source>
      <translation>인증</translation>
    </message>
    <message>
      <source>Value is not calculated</source>
      <translation>값이 계산되지 않습니다</translation>
    </message>
    <message>
      <source>Value is the</source>
      <translation>값</translation>
    </message>
    <message>
      <source>sum</source>
      <translation>합계</translation>
    </message>
    <message>
      <source>product</source>
      <translation>곱</translation>
    </message>
    <message>
      <source>average</source>
      <translation>평균</translation>
    </message>
    <message>
      <source>minimum</source>
      <translation>최소</translation>
    </message>
    <message>
      <source>maximum</source>
      <translation>최대</translation>
    </message>
    <message>
      <source>of the following fields:</source>
      <translation>다음 필드:</translation>
    </message>
    <message>
      <source>Pick...</source>
      <translation>추출...</translation>
    </message>
    <message>
      <source>Custom calculation script:</source>
      <translation>사용자 계산 스크립트:</translation>
    </message>
    <message>
      <source>Calculate</source>
      <translation>계산</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>확인</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>취소</translation>
    </message>
    <message>
      <source>Flag is ignored for PDF 1.3</source>
      <translation>플래그를 PDF 1.3에서 무시합니다</translation>
    </message>
    <message>
      <source>Enter a comma separated list of fields here</source>
      <translation>여기에 쉼표로 구분된 필드의 목록을 입력하시오.</translation>
    </message>
    <message>
      <source>You need at least the Icon for Normal to use Icons for Buttons</source>
      <translation>버튼에 아이콘을 사용하려면 일반 아이콘이 적어도 필요합니다</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>열기</translation>
    </message>
    <message>
      <source>Example:</source>
      <translation>예제:</translation>
    </message>
    <message>
      <source>Selection Change</source>
      <translation>선택 변경</translation>
    </message>
    <message>
      <source>PDF Files (*.pdf);;All Files (*)</source>
      <translation>PDF 파일 (*.pdf);;전체 파일 (*)</translation>
    </message>
    <message>
      <source>None</source>
      <comment>highlight</comment>
      <translation>강조</translation>
    </message>
    <message>
      <source>Limit of</source>
      <translation>제한</translation>
    </message>
    <message>
      <source>Default is Checked</source>
      <translation>기본값이 체크됨</translation>
    </message>
    <message>
      <source>None</source>
      <comment>action</comment>
      <translation>작업</translation>
    </message>
    <message>
      <source>Tooltip:</source>
      <translation>도구설명:</translation>
    </message>
    <message>
      <source>Do Not Export Value</source>
      <translation>내보내기 값이 없음</translation>
    </message>
    <message>
      <source>Images (*.tif *.png *.jpg *.xpm);;PostScript (*.eps *.epsi);;All Files (*)</source>
      <translation>이미지 (*.tif *.png *.jpg *.xpm);;포스트스크립트 (*.eps *.epsi);;전체 파일 (*)</translation>
    </message>
    <message>
      <source>Images (*.tif *.png *.jpg *.xpm);;%1;;All Files (*)</source>
      <translation>이미지 (*.tif *.png *.jpg *.xpm);;%1;;전체 파일 (*)</translation>
    </message>
    <message>
      <source>Export absolute Filename</source>
      <translation>전체 파일 이름 내보내기</translation>
    </message>
  </context>
  <context>
    <name>Annota</name>
    <message>
      <source>Annotation Properties</source>
      <translation>주석 속성</translation>
    </message>
    <message>
      <source>Text</source>
      <translation>텍스트</translation>
    </message>
    <message>
      <source>Link</source>
      <translation>링크</translation>
    </message>
    <message>
      <source>External Link</source>
      <translation>외부 링크</translation>
    </message>
    <message>
      <source>External Web-Link</source>
      <translation>외부 웹-링크</translation>
    </message>
    <message>
      <source>&amp;Type:</source>
      <translation>형태(&amp;T):</translation>
    </message>
    <message>
      <source>Destination</source>
      <translation>출력방향</translation>
    </message>
    <message>
      <source>C&amp;hange...</source>
      <translation>변경(&amp;H)...</translation>
    </message>
    <message>
      <source>&amp;Page:</source>
      <translation>페이지(&amp;P):</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> 포인트</translation>
    </message>
    <message>
      <source>&amp;X-Pos</source>
      <translation>&amp;X위치</translation>
    </message>
    <message>
      <source>&amp;Y-Pos:</source>
      <translation>&amp;Y위치:</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>열기	</translation>
    </message>
    <message>
      <source>%1;;All Files (*)</source>
      <translation>%1;;전체 파일 (*)</translation>
    </message>
    <message>
      <source>Export absolute Filename</source>
      <translation>전체 파일명 내보내기</translation>
    </message>
  </context>
  <context>
    <name>ApplyMasterPageDialog</name>
    <message>
      <source>Apply Master Page</source>
      <translation>마스터 페이지 적용</translation>
    </message>
    <message>
      <source>&amp;Master Page:</source>
      <translation>마스터 페이지(&amp;M):</translation>
    </message>
    <message>
      <source>Apply To</source>
      <translation>적용 대상</translation>
    </message>
    <message>
      <source>Current &amp;page</source>
      <translation>현재 페이지(&amp;P)</translation>
    </message>
    <message>
      <source>Alt+P</source>
      <translation>Alt+P</translation>
    </message>
    <message>
      <source>&amp;Even pages</source>
      <translation>짝수 페이지(&amp;E)</translation>
    </message>
    <message>
      <source>Alt+E</source>
      <translation>Alt+E</translation>
    </message>
    <message>
      <source>O&amp;dd pages</source>
      <translation>홀수 페이지(&amp;D)</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>&amp;All pages</source>
      <translation>전체 페이지(&amp;A)</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Within range</source>
      <translation>범위내(&amp;W)</translation>
    </message>
    <message>
      <source>Alt+W</source>
      <translation>Alt+W</translation>
    </message>
    <message>
      <source>Alt+O</source>
      <translation>Alt+O</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
    <message>
      <source>Apply the selected master page to even, odd or all pages within the following range</source>
      <translation>선택한 마스터 페이지를 다음 범위 내의 짝수, 홀수, 전체 페이지에 적용합니다</translation>
    </message>
    <message>
      <source>to</source>
      <translation>로</translation>
    </message>
    <message>
      <source>Possible Hyphenation</source>
      <translation>이용가능한 하이픈</translation>
    </message>
  </context>
<context>
    <name>ArrowChooser</name>
    <message>
        <source>None</source>
        <translation>없음</translation>
    </message>
</context> 
 <context>
    <name>AspellPlugin</name>
    <message>
      <source>Spell-checking support</source>
      <translation>맞춤법 검사 지원</translation>
    </message>
    <message>
      <source>Adds support for spell-checking via aspell. Languages can be chosen from among the installed aspell dictionaries, and spell-checking can be done on the fly, or on selected text.</source>
      <translation>aspell을 통하여 맞춤법 검사 지원을 더합니다. 언어를 설치된 aspell 사전 중에서 선택할 수 있습니다 , 그리고 즉시 또는 선택한 텍스트상에서 맞춤법 검사를 수행할 수 있습니다 .</translation>
    </message>
    <message>
      <source>0.1</source>
      <translation>0.1</translation>
    </message>
    <message>
      <source>Spell Checker</source>
      <translation>맞춤법 검사기</translation>
    </message>
  </context>
  <context>
    <name>AspellPluginBase</name>
    <message>
      <source>Spell Check</source>
      <translation>맞춤법 검사</translation>
    </message>
    <message>
      <source>Mis-spelling:</source>
      <translation>오류-단어:</translation>
    </message>
    <message>
      <source>Replacement:</source>
      <translation>치환:</translation>
    </message>
    <message>
      <source>Active dictionary: </source>
      <translation>활성 사전: </translation>
    </message>
    <message>
      <source>Personal
Dictionary</source>
      <translation>개인 
	  사전</translation>
    </message>
    <message>
      <source>&amp;Add Word</source>
      <translation>단어 더하기(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;Change</source>
      <translation>변경(&amp;C)</translation>
    </message>
    <message>
      <source>C&amp;hange All</source>
      <translation>전체 변경(&amp;H)</translation>
    </message>
    <message>
      <source>&amp;Skip</source>
      <translation>건너뛰기(&amp;S)</translation>
    </message>
    <message>
      <source>S&amp;kip All</source>
      <translation>전체 건너뛰기(&amp;K)</translation>
    </message>
    <message>
      <source>&amp;Exit</source>
      <translation>종료(&amp;E)</translation>
    </message>
  </context>
  <context>
    <name>AspellPluginImpl</name>
    <message>
      <source>Loaded </source>
      <translation>읽어오기</translation>
    </message>
    <message>
      <source>default </source>
      <translation>기본값</translation>
    </message>
    <message>
      <source> aspell dictionary.</source>
      <translation> aspell 사전.</translation>
    </message>
    <message>
      <source>aspellplugin (AspellPluginImpl::AspellPluginImpl): Error in aspell speller configuration.</source>
      <translation>aspellplugin (AspellPluginImpl::AspellPluginImpl): aspell speller 설정 오류.</translation>
    </message>
    <message>
      <source>aspellplugin (AspellPluginImpl::AspellPluginImpl): Error in creating aspell speller.</source>
      <translation>aspellplugin (AspellPluginImpl::AspellPluginImpl): aspell speller 생성시 오류.</translation>
    </message>
    <message>
      <source>Spell-Checker</source>
      <translation>맞춤법 검사기</translation>
    </message>
    <message>
      <source>Spell-checking completed.</source>
      <translation>맞춤법 검사 완료.</translation>
    </message>
    <message>
      <source>Spell-checking done.</source>
      <translation>맞춤법 검사 종료</translation>
    </message>
    <message>
      <source>AspellPluginImpl::on_fskipAllBtn_clicked(): Unable to skip all instances of &quot;</source>
      <translation>AspellPluginImpl::on_fskipAllBtn_clicked(): 전체 경우를 생략할 수 없음 &quot;</translation>
    </message>
    <message>
      <source> by adding it to the session list.</source>
      <translation>세션 목록으로 더하기</translation>
    </message>
    <message>
      <source>AspellPluginImpl::on_faddWordBtn_clicked(): Unable to add word to personal list.</source>
      <translation>AspellPluginImpl::on_faddWordBtn_clicked(): 단어를 개인 목록에 더할 수 없음</translation>
    </message>
  </context>
  <context>
    <name>AutoformButtonGroup</name>
    <message>
      <source>Arrows</source>
      <translation>화살표</translation>
    </message>
    <message>
      <source>Flow Chart</source>
      <translation>플로우 차트</translation>
    </message>
    <message>
      <source>Jigsaw</source>
      <translation>퍼즐</translation>
    </message>
    <message>
      <source>Specials</source>
      <translation>기타</translation>
    </message>
    <message>
      <source>Default Shapes</source>
      <translation>기본 도형</translation>
    </message>
  </context>
  <context>
    <name>Barcode</name>
    <message>
      <source>Scribus frontend for Pure Postscript Barcode Writer</source>
      <translation>순수한 Postscript 바코드 작성자를 위한 Scribus 프런트 엔드</translation>
    </message>
    <message>
      <source>&amp;Barcode...</source>
      <translation>바코드(&amp;B)...</translation>
    </message>
  </context>
  <context>
    <name>BarcodeGeneratorBase</name>
    <message>
      <source>&amp;Type:</source>
      <translation>형태(&amp;T):</translation>
    </message>
    <message>
      <source>Co&amp;de:</source>
      <translation>코드(&amp;D):</translation>
    </message>
    <message>
      <source>Select one of the available barcode type here</source>
      <translation>이용가능한 바코드 형태 중 하나를 선택합니다</translation>
    </message>
    <message>
      <source>The numeric representation of the code itself. See the help message below</source>
      <translation>코드 자체를 나타내는 숫자. 다음 도움말 메시지를 참조하십시오.</translation>
    </message>
    <message>
      <source>Reset the barcode samples</source>
      <translation>바코드 샘플 초기화</translation>
    </message>
    <message>
      <source>&amp;Include text in barcode</source>
      <translation>바코드에 텍스트 포함(&amp;I)</translation>
    </message>
    <message>
      <source>Alt+I</source>
      <translation>Alt+I</translation>
    </message>
    <message>
      <source>If checked, there will be numbers in the barcode too</source>
      <translation>체크시 바코드에 숫자를 입력합니다</translation>
    </message>
    <message>
      <source>&amp;Guard whitespace</source>
      <translation>여백 보호(&amp;G)</translation>
    </message>
    <message>
      <source>Alt+G</source>
      <translation>Alt+G</translation>
    </message>
    <message>
      <source>Draw arrows to be sure of space next the code</source>
      <translation>다음 코드의 간격을 확인하기 위하여 화살표를 그립니다</translation>
    </message>
    <message>
      <source>I&amp;nclude checksum</source>
      <translation>체크섬 포함(&amp;N)</translation>
    </message>
    <message>
      <source>Alt+N</source>
      <translation>Alt+N</translation>
    </message>
    <message>
      <source>Generate and include a checksum in barcode</source>
      <translation>바코드에서 체크섬의 생성 및 포함</translation>
    </message>
    <message>
      <source>Incl&amp;ude checksum digit</source>
      <translation>체크섬 디지트 포함(&amp;U)</translation>
    </message>
    <message>
      <source>Alt+U</source>
      <translation>Alt+U</translation>
    </message>
    <message>
      <source>Include the checksum digit in the barcode text</source>
      <translation>바코드 텍스트에서 체크섬 디지트 포함</translation>
    </message>
    <message>
      <source>Colors</source>
      <translation>색상</translation>
    </message>
    <message>
      <source>&amp;Background</source>
      <translation>배경(&amp;B)</translation>
    </message>
    <message>
      <source>Alt+B</source>
      <translation>Alt+B</translation>
    </message>
    <message>
      <source>Background color - under the code lines</source>
      <translation>배경 색상 - 코드 선 하에서</translation>
    </message>
    <message>
      <source>&amp;Lines</source>
      <translation>선(&amp;L)</translation>
    </message>
    <message>
      <source>Alt+L</source>
      <translation>Alt+L</translation>
    </message>
    <message>
      <source>Color of the lines in barcode</source>
      <translation>바코드에서 선 색상</translation>
    </message>
    <message>
      <source>&amp;Text</source>
      <translation>텍스트(&amp;T)</translation>
    </message>
    <message>
      <source>Alt+T</source>
      <translation>Alt+T</translation>
    </message>
    <message>
      <source>Color of the text and numbers</source>
      <translation>텍스트와 숫자 색상</translation>
    </message>
    <message>
      <source>Hints and help is shown here</source>
      <translation>여기에 힌트와 도움말이 보입니다</translation>
    </message>
    <message>
      <source>Preview of the result. 72dpi sample.</source>
      <translation>출력 미리보기. 72dpi 샘플</translation>
    </message>
    <message>
      <source>Insert Barcode</source>
      <translation>바코드 입력</translation>
    </message>
    <message>
      <source>Format</source>
      <translation>형식</translation>
    </message>
  </context>
<context>
    <name>BarcodeGeneratorBase</name>
    <message>
        <source>&amp;Type:</source>
        <translation>형태(&amp;T):</translation>
    </message>
    <message>
       <source>Select one of the available barcode type here</source>
        <translation>이용가능한 바코드를 선택</translation>
    </message>
    <message>
         <source>The numeric representation of the code itself. See the help message below</source>
        <translation>코드의 수치 표현. 아래 도움 메세지를 보시오</translation>
    </message>
    <message>
         <source>Reset the barcode samples</source>
        <translation>바코드 예제 초기화</translation>
    </message>
    <message>
         <source>&amp;Include text in barcode</source>
        <translation>바코드에서 텍스트 포함</translation>
    </message>
    <message>
         <source>Alt+I</source>
        <translation>Alt+I</translation>
    </message>
    <message>
         <source>If checked, there will be numbers in the barcode too</source>
        <translation>체크시, 바코드는 숫자이어야 합니다</translation>
    </message>
    <message>
         <source>&amp;Guard whitespace</source>
        <translation>공백 보기(&amp;G)</translation>
    </message>
    <message>
         <source>Alt+G</source>
        <translation>Alt+G</translation>
    </message>
    <message>
         <source>Draw arrows to be sure of space next the code</source>
        <translation>다음 코드 공백을 확인하기 위한 화살표 그립니다</translation>
    </message>
    <message>
         <source>Colors</source>
        <translation>색상</translation>
    </message>
    <message>
         <source>&amp;Background</source>
        <translation>배경(&amp;B)</translation>
    </message>
    <message>
         <source>Alt+B</source>
        <translation>Alt+B</translation>
    </message>
    <message>
         <source>Background color - under the code lines</source>
        <translation>배경 색상 - 코드 선 아래</translation>
    </message>
    <message>
        <source>&amp;Lines</source>
        <translation>선(&amp;L)</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <source>Color of the lines in barcode</source>
        <translation>바코드 선 색상</translation>
    </message>
    <message>
        <source>&amp;Text</source>
        <translation>텍스트(&amp;T)</translation>
    </message>
    <message>
          <source>Alt+T</source>
        <translation>Alt+T</translation>
    </message>
    <message>
         <source>Color of the text and numbers</source>
        <translation>텍스트와 수치 색상</translation>
    </message>
    <message>
         <source>Hints and help is shown here</source>
        <translation>힌트와 도움말이 여기에서 보여집니다.</translation>
    </message>
    <message>
          <source>Preview of the result. 72dpi sample.</source>
        <translation>출력 미리보기, 72dpi 샘플</translation>
    </message>
    <message>
         <source>Co&amp;de:</source>
        <translation>코드(&amp;D)</translation>
    </message>
    <message>
         <source>I&amp;nclude checksum</source>
        <translation>체크섬 포함(&amp;N)</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation>Alt+N</translation>
    </message>
    <message>
         <source>Generate and include a checksum in barcode</source>
        <translation>바코드에 체크섬 생성 및 포함</translation>
    </message>
    <message>
        <source>Incl&amp;ude checksum digit</source>
       <translation>체크섬 디지트 포함(&amp;U)</translation>
    </message>
    <message>
         <source>Alt+U</source>
        <translation>Alt+U</translation>
    </message>
    <message>
        <source>Include the checksum digit in the barcode text</source>
        <translation>바코드 텍스트에서 체크섬 digit를 포함합니다</translation>
    </message>
    <message>
         <source>Insert Barcode</source>
        <translation>바코드 삽입</translation>
    </message>
    <message>
         <source>Format</source>
        <translation>형식</translation>
    </message>
</context>
  <context>
    <name>Biblio</name>
    <message>
      <source>Rename</source>
      <translation>다른 이름으로</translation>
    </message>
    <message>
      <source>Delete</source>
      <translation>삭제</translation>
    </message>
    <message>
      <source>Scrapbook</source>
      <translation>스크랩북</translation>
    </message>
    <message>
      <source>Name &quot;%1&quot; is not unique.
Please choose another.</source>
      <translation>이름 &quot;%1&quot;이 이미 있습니다.
다른 이름을 선택하시오.</translation>
    </message>
    <message>
      <source>Object</source>
      <translation>객체</translation>
    </message>
    <message>
      <source>&amp;Name:</source>
      <translation>이름(&amp;N):</translation>
    </message>
    <message>
      <source>New Entry</source>
      <translation>새 객체</translation>
    </message>
    <message>
      <source>Choose a Scrapbook Directory</source>
      <translation>스크랩북 사전 선택</translation>
    </message>
    <message>
      <source>Choose a scrapbook file to import</source>
      <translation>들여오기 위하여 스크랩북 파일 선택</translation>
    </message>
    <message>
      <source>Choose a Directory</source>
      <translation>사전 선택</translation>
    </message>
    <message>
      <source>Create a new scrapbook page</source>
      <translation>새 스크랩북 페이지 생성</translation>
    </message>
    <message>
      <source>Load an existing scrapbook</source>
      <translation>기존 스크랩북 읽어오기</translation>
    </message>
    <message>
      <source>Save the selected scrapbook</source>
      <translation>선택된 스크랩북 저장</translation>
    </message>
    <message>
      <source>Import an scrapbook file from Scribus &lt;=1.3.2</source>
      <translation>Scribus 1.3.2로 부터 스크랩북 파일을 들여오기</translation>
    </message>
    <message>
      <source>Close the selected scrapbook</source>
      <translation>선택된 스크랩북 닫기</translation>
    </message>
    <message>
      <source>Copy To:</source>
      <translation>복사:</translation>
    </message>
    <message>
      <source>Move To:</source>
      <translation>이동:</translation>
    </message>
    <message>
      <source>Main</source>
      <translation>메인</translation>
    </message>
    <message>
      <source>Copied Items</source>
      <translation>복사된 객체</translation>
    </message>
    <message>
      <source>New Name</source>
      <translation>새 이름:</translation>
    </message>
    <message>
      <source>Scrapbook (*.scs *.SCS)</source>
      <translation>스크랩북 (*.scs *.SCS)</translation>
    </message>
    <message>
      <source>Paste to Page</source>
      <translation>페이지에 붙여넣기</translation>
    </message>
    <message>
      <source>Save as...</source>
      <translation>다른 이름으로 저장...</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>닫기</translation>
    </message>
    <message>
      <source>Delete Contents</source>
      <translation>내용 삭제</translation>
    </message>
    <message>
      <source>Do you really want to delete all entries?</source>
      <translation>정말 전체 객체를 삭제하시겠습니까?</translation>
    </message>
  </context>
<context>
    <name>BookMView</name>
    <message>
       <source>Move Bookmark</source>
        <translation>북마크 이동</translation>
    </message>
    <message>
       <source>Insert Bookmark</source>
       <translation>북마크 삽입</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>취소</translation>
    </message>
    <message>
        <source>Bookmarks</source>
        <translation>북마크</translation>
    </message>
</context>
  <context>
    <name>BookPalette</name>
    <message>
      <source>Bookmarks</source>
      <translation>북마크</translation>
    </message>
  </context>
  <context>
    <name>ButtonIcon</name>
    <message>
      <source>Icon Placement</source>
      <translation>아이콘 위치이동</translation>
    </message>
    <message>
      <source>Layout:</source>
      <translation>배치:</translation>
    </message>
    <message>
      <source>Caption only</source>
      <translation>자막만</translation>
    </message>
    <message>
      <source>Icon only</source>
      <translation>아이콘만</translation>
    </message>
    <message>
      <source>Caption below Icon</source>
      <translation>아이콘 아래 자막</translation>
    </message>
    <message>
      <source>Caption above Icon</source>
      <translation>아이콘 위 자막</translation>
    </message>
    <message>
      <source>Caption right to Icon</source>
      <translation>아이콘 오른쪽 자막</translation>
    </message>
    <message>
      <source>Caption left to Icon</source>
      <translation>아이콘 왼쪽 자막</translation>
    </message>
    <message>
      <source>Scale:</source>
      <translation>비율:</translation>
    </message>
    <message>
      <source>Always</source>
      <translation>항상</translation>
    </message>
    <message>
      <source>When Icon is too small</source>
      <translation>아이콘이 너무 작을 때</translation>
    </message>
    <message>
      <source>When Icon is too big</source>
      <translation>아이콘이 너무 클 때</translation>
    </message>
    <message>
      <source>Never</source>
      <translation>결코 없음</translation>
    </message>
    <message>
      <source>Scale How:</source>
      <translation>비율 크기:</translation>
    </message>
    <message>
      <source>Proportional</source>
      <translation>비례</translation>
    </message>
    <message>
      <source>Non Proportional</source>
      <translation>비례 아님</translation>
    </message>
    <message>
      <source>Icon</source>
      <translation>아이콘</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>확인</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>취소</translation>
    </message>
    <message>
      <source>Reset</source>
      <translation>초기화</translation>
    </message>
    <message>
      <source>Caption overlays Icon</source>
      <translation>아이콘과 자막 겹침</translation>
    </message>
  </context>
  <context>
    <name>CMSPrefs</name>
    <message>
      <source>Perceptual</source>
      <translation>지각</translation>
    </message>
    <message>
      <source>Relative Colorimetric</source>
      <translation>상대 색상계</translation>
    </message>
    <message>
      <source>Saturation</source>
      <translation>채도</translation>
    </message>
    <message>
      <source>Absolute Colorimetric</source>
      <translation>절대 색상계</translation>
    </message>
  </context>
  <context>
    <name>CMSPrefsBase</name>
    <message>
      <source>Form</source>
      <translation>양식</translation>
    </message>
    <message>
      <source>&amp;Activate Color Management</source>
      <translation>색상 관리 활성화(&amp;A)</translation>
    </message>
    <message>
      <source>System Profiles</source>
      <translation>시스템 프로파일</translation>
    </message>
    <message>
      <source>&amp;RGB Images:</source>
      <translation>RGB 이미지(&amp;R):</translation>
    </message>
    <message>
      <source>Default color profile for imported RGB images</source>
      <translation>들여오는 RGB 이미지를 위한 기본 색상 프로파일</translation>
    </message>
    <message>
      <source>&amp;CMYK Images:</source>
      <translation>CMYK 이미지(&amp;C):</translation>
    </message>
    <message>
      <source>Default color profile for imported CMYK images</source>
      <translation>들여오는 CMYK 이미지를 위한 기본 색상 프로파일</translation>
    </message>
    <message>
      <source>&amp;RGB Solid Colors:</source>
      <translation>RGB 단일 색상(&amp;R):</translation>
    </message>
    <message>
      <source>Default color profile for solid RGB colors on the page</source>
      <translation>페이지상에서 단색 RGB 색상의 기본 색상 프로파일</translation>
    </message>
    <message>
      <source>&amp;CMYK Solid Colors:</source>
      <translation>CMY 단일색(&amp;C):</translation>
    </message>
    <message>
      <source>Default color profile for solid CMYK colors on the page</source>
      <translation>페이지상에서 단일색 CMYK 색상의 기본 색상 프로파일</translation>
    </message>
    <message>
      <source>&amp;Monitor:</source>
      <translation>모니터(&amp;M):</translation>
    </message>
    <message>
      <source>Color profile that you have generated or received from the manufacturer.
This profile should be specific to your monitor and not a generic profile (i.e. sRGB).</source>
      <translation>자신이 만든 또는 제조 업체에서받은 색상 프로필. 
이 프로필은 모니터 특유의 것이며, 일반 프로필(예 sRGB)이 아닙니다.</translation>
    </message>
    <message>
      <source>P&amp;rinter:</source>
      <translation>프린터(&amp;R):</translation>
    </message>
    <message>
      <source>Color profile for your printer model from the manufacturer.
This profile should be specific to your printer and not a generic profile (i.e. sRGB).</source>
      <translation>제조 업체에서 발행되는 프린터 모델에 맞는 색상 프로필. 
이 프로필은 프린터 특유의 것이며, 일반 프로필(예 sRGB)이 아닙니다.</translation>
    </message>
    <message>
      <source>Rendering Intents</source>
      <translation>렌더링 목적</translation>
    </message>
    <message>
      <source>Images:</source>
      <translation>이미지:</translation>
    </message>
    <message>
      <source>Default rendering intent for images. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
      <translation>이미지를 위한 기본 렌더링 목적. 변경하는 이유를 알 수없는 경우, 
상대적인 색상계 또는 지각을 선택하시오.</translation>
    </message>
    <message>
      <source>Sol&amp;id Colors:</source>
      <translation>단일 색상(&amp;I):</translation>
    </message>
    <message>
      <source>Default rendering intent for solid colors. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
      <translation>단일 색상을 위한 기본 렌더링 목적. 변경하는 이유를 알 수없는 경우, 
상대적인 색채계 또는 지각을 선택하시오.</translation>
  
</message>
  <message>
      <source>Enable 'soft proofing' of how your document colors will print,
based on the chosen printer profile.</source>
      <translation>선택한 프린터 프로필을 기반으로, 문서 색상을 어떻게 인쇄하는가는 'soft - proofing'를 사용.</translation>
    </message>
    <message>
      <source>Sim&amp;ulate Printer on the Screen</source>
      <translation>화면상 프린터 시뮬레이션(&amp;U)</translation>
    </message>
    <message>
      <source>Simulate a full color managed environment :
all colors, rgb or cmyk, are converted to printer color space.</source>
      <translation>전체 색상 관리 환경 시뮬레이션 :
rgb 또는 cmyk 전체 색상을 프린터 색상 공간으로 변환합니다.</translation>
    </message>
    <message>
      <source>Convert all colors to printer space</source>
      <translation>전체 색상을 프린터 색상공간으로 변환</translation>
    </message>
    <message>
      <source>Method of showing colors on the screen which may not print properly.
This requires very accurate profiles and serves only as a warning.</source>
      <translation>적절히 출력되지 않는 화면상에서 색상을 나타내는 방법.
이것은 매우 정확한 프로파일이 필요하고 단지 경고를 합니다.</translation>
    </message>
    <message>
      <source>Mark Colors out of &amp;Gamut</source>
      <translation>범위 밖 생상 표시(&amp;G)</translation>
    </message>
    <message>
      <source>Black Point Compensation is a method of improving contrast in photos.
It is recommended that you enable this if you have photos in your document.</source>
      <translation>흑점 보정은 사진 명암을 개선하는 방법입니다. 
문서 중 사진이 있는 경우, 이것의 사용을 추천합니다.</translation>
    </message>
    <message>
      <source>Use &amp;Blackpoint Compensation</source>
      <translation>흑점 보정 사용(&amp;B)</translation>
    </message>
  </context>
 <context>
    <name>CMYKChoose</name>
    <message>
      <source>Edit Color</source>
      <translation>색상 편집</translation>
    </message>
    <message>
      <source>&amp;Name:</source>
      <translation>이름(&amp;N):</translation>
    </message>
    <message>
      <source>Color &amp;Model</source>
      <translation>색상 모델(&amp;M)</translation>
    </message>
    <message>
      <source>CMYK</source>
      <translation>CMYK</translation>
    </message>
    <message>
      <source>RGB</source>
      <translation>RGB</translation>
    </message>
    <message>
      <source>Web Safe RGB</source>
      <translation>Web Safe RGB</translation>
    </message>
    <message>
      <source>Is Spot Color</source>
      <translation>Spot 색상</translation>
    </message>
    <message>
      <source>New</source>
      <translation>새로운 색</translation>
    </message>
    <message>
      <source>Old</source>
      <translation>이전 색</translation>
    </message>
    <message>
      <source>HSV-Colormap</source>
      <translation>HSV-색상도</translation>
    </message>
    <message>
      <source>C:</source>
      <translation>C(남색):</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>M:</source>
      <translation>M(자홍색):</translation>
    </message>
    <message>
      <source>Y:</source>
      <translation>Y(노란색):</translation>
    </message>
    <message>
      <source>K:</source>
      <translation>K(검은색):</translation>
    </message>
    <message>
      <source>Dynamic Color Bars</source>
      <translation>동적 색상 막대</translation>
    </message>
    <message>
      <source>Static Color Bars</source>
      <translation>정적 색상 막대</translation>
    </message>
    <message>
      <source>R:</source>
      <translation>R(적색):</translation>
    </message>
    <message>
      <source>G:</source>
      <translation>G(녹색):</translation>
    </message>
    <message>
      <source>B:</source>
      <translation>B(청색):</translation>
    </message>
    <message>
      <source>You cannot create a color named &quot;%1&quot;.
It is a reserved name for transparent color</source>
      <translation>&quot;%1&quot;라는 색상을 생성할 수 없습니다. 
투명 색상명으로 예약되었습니다.</translation>
    </message>
    <message>
      <source>The name of the color already exists,
please choose another one.</source>
      <translation>색상 이름이 이미 있습니다,
다른 이름을 선택하시오.</translation>
    </message>
    <message>
      <source>Choosing this will make this color a spot color, thus creating another spot when creating plates or separations. This is used most often when a logo or other color needs exact representation or cannot be replicated with CMYK inks. Metallic and fluorescent inks are good examples which cannot be easily replicated with CMYK inks.</source>
      <translation> 이것을 선택하는 것은 이 색상을 spot 색상으로 만들며, 평판이나 분리를 생성시킬 때 다른 spot을 생성시킵니다. 이것은 로고 또는 다른 색상을 정확하게 나타낼 때 자주 사용되며, 즉 CMYK 잉크로 복사될 수 없습니다. 메탈릭 또는 형광 잉크는 CMYK 잉크로 쉽게 복사할 수 없는 좋은 예입니다.</translation>
    </message>
    <message>
      <source>If color management is enabled, a triangle warning indicator is a warning that the color maybe outside of the color gamut of the current printer profile selected. What this means is the color may not print exactly as indicated on screen. More hints about gamut warnings are in the online help under Color Management.</source>
      <translation>색상관리를 할 수 있다면, 삼각형 경고 표시는 색상이 현재 선택된 프린터 프로파일의 색상범위 밖에 있다는 경고입니다. 이 의미는 화면상에서 보이는 것을 정확하게 색상을 출력할 수 없음을 의미합니다. 온라인 도움말 색상관리 부분에서 경고에 대한 더 많은 정보를 얻을 수 있습니다.</translation>
    </message>
    <message>
      <source>You cannot create a color without a name
Please give it a name</source>
      <translation>이름이 없이 색상을 생성할 수 없습니다
	  이름을 부여하시오</translation>
    </message>
  </context>
<context>
    <name>CStyleP</name>
    <message>
        <location filename="../smcstylew.ui" line="13"/>
        <source>Form1</source>
        <translation>양식1</translation>
    </message>
    <message>
        <location filename="../smcstylew.ui" line="49"/>
        <source>Based On:</source>
        <translation>근거:</translation>
    </message>
    <message>
        <location filename="../smcstylew.ui" line="109"/>
        <source>Colors</source>
        <translation>색상</translation>
    </message>
</context>
<context>
    <name>CStylePBase</name>
    <message>
        <source>Colors</source>
        <translation>색상</translation>
    </message>
</context> 
 <context>
    <name>CWDialog</name>
    <message>
      <source>Color Wheel</source>
      <translation>색상 판</translation>
    </message>
    <message>
      <source>Click the wheel to get the base color. Its color model depends on the chosen tab.</source>
      <translation>기본 색상을 얻기 위해 색상 판을 클릭합니다. 색상 모델은 선택된 탭에 의존합니다.</translation>
    </message>
    <message>
      <source>Result Colors</source>
      <translation>출력 색상</translation>
    </message>
    <message>
      <source>CMYK</source>
      <translation>CMYK</translation>
    </message>
    <message>
      <source>RGB</source>
      <translation>RGB</translation>
    </message>
    <message>
      <source>HSV</source>
      <translation>HSV</translation>
    </message>
    <message>
      <source>Colors of your chosen color scheme.</source>
      <translation>선택한 색상 체계의 색상</translation>
    </message>
    <message>
      <source>Color Scheme Method</source>
      <translation>색상 체계 방법</translation>
    </message>
    <message>
      <source>Angle:</source>
      <translation>각도:</translation>
    </message>
    <message>
      <source>Difference between the selected value and the counted ones. Refer to documentation for more information.</source>
      <translation>선택한 값과 다른 것 사이의 차이. 자세한 내용은 문서를 참조하십시오.</translation>
    </message>
    <message>
      <source>Select one of the methods to create a color scheme. Refer to documentation for more information.</source>
      <translation>색상 체계를 생성하는 방법을 선택. 자세한 정보는 문서를 참조하시오.</translation>
    </message>
    <message>
      <source>Merge created colors into the document colors</source>
      <translation>생성된 색상을 문서 색상으로 병합</translation>
    </message>
    <message>
      <source>&amp;Merge</source>
      <translation>병합(&amp;M)</translation>
    </message>
    <message>
      <source>Alt+M</source>
      <translation>Alt+M</translation>
    </message>
    <message>
      <source>Replace created colors in the document colors</source>
      <translation>문서 색상에서 생성 색깔을 치환</translation>
    </message>
    <message>
      <source>&amp;Replace</source>
      <translation>치환(&amp;R)</translation>
    </message>
    <message>
      <source>Alt+R</source>
      <translation>Alt+R</translation>
    </message>
    <message>
      <source>Leave colors untouched</source>
      <translation>손대지 않은 색상을 남겨둠</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>취소(&amp;C)</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
    <message>
      <source>Preview:</source>
      <translation>미리보기:</translation>
    </message>
    <message>
      <source>Sample color scheme.</source>
      <translation>예제 색상 체계.</translation>
    </message>
    <message>
      <source>Simulate common vision defects here. Select type of the defect.</source>
      <translation>일반 시력결손을 시험함. 시력 결손 형태를 선택하시오.</translation>
    </message>
    <message>
      <source>Vision Defect Type:</source>
      <translation>색맹 형태:</translation>
    </message>
    <message>
      <source>C:</source>
      <translation>C(남색):</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>M:</source>
      <translation>M(자홍색):</translation>
    </message>
    <message>
      <source>Y:</source>
      <translation>Y(노란색):</translation>
    </message>
    <message>
      <source>K:</source>
      <translation>K(검은색):</translation>
    </message>
    <message>
      <source>RGB:</source>
      <translation>RGB:</translation>
    </message>
    <message>
      <source>HSV:</source>
      <translation>HSV:</translation>
    </message>
    <message>
      <source>R:</source>
      <translation>R(적색):</translation>
    </message>
    <message>
      <source>G:</source>
      <translation>G(녹색):</translation>
    </message>
    <message>
      <source>B:</source>
      <translation>B(청색):</translation>
    </message>
    <message>
      <source>CMYK:</source>
      <translation>CMYK:</translation>
    </message>
    <message>
      <source>H:</source>
      <translation>H(색조):</translation>
    </message>
    <message>
      <source>S:</source>
      <translation>S(채도):</translation>
    </message>
    <message>
      <source>V:</source>
      <translation>V(명암):</translation>
    </message>
    <message>
      <source>Document</source>
      <translation>문서</translation>
    </message>
  </context>
<context>
    <name>CWDialogBase</name>
    <message>
        <source>Color Wheel</source>
        <translation>색상판</translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation>CMYK</translation>
    </message>
    <message>
        <source>C:</source>
        <translation>C(남색):</translation>
    </message>
    <message>
        <source>M:</source>
        <translation>M(자홍색):</translation>
    </message>
    <message>
        <source>Y:</source>
        <translation>Y(노란색):</translation>
    </message>
    <message>
        <source>K:</source>
        <translation>K(검은색):</translation>
    </message>
    <message>
        <source>RGB:</source>
        <translation>RGB:</translation>
    </message>
    <message>
        <source>RGB</source>
        <translation>RGB</translation>
    </message>
    <message>
        <source>R:</source>
        <translation>R(적색):</translation>
    </message>
    <message>
        <source>G:</source>
        <translation>G(녹색):</translation>
    </message>
    <message>
        <source>B:</source>
        <translation>B(청색):</translation>
    </message>
    <message>
        <source>CMYK:</source>
        <translation>CMYK:</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>문서</translation>
    </message>
    <message>
        <source>Select one of the methods to create a color scheme. Refer to documentation for more information.</source>
        <translation>색상 스킴을 생성하기 위하여 방법을 선택합니다. 더 자세한 정보는 문서를 참조하세요</translation>
    </message>
    <message>
        <source>Angle:</source>
        <translation>각도:</translation>
    </message>
    <message>
        <source>Difference between the selected value and the counted ones. Refer to documentation for more information.</source>
        <translation>선택된 값과 센 값과의 차이. 자세한 정보는 문서를 참조.</translation>
    </message>
    <message>
        <source>Preview:</source>
        <translation>미리보기:</translation>
    </message>
    <message>
        <source>Vision Defect Type:</source>
        <translation>색맹 형태:</translation>
    </message>
    <message>
        <source>Merge created colors into the document colors</source>
        <translation>생성된 색상을 문서색상로 병합</translation>
    </message>
    <message>
        <source>Replace created colors in the document colors</source>
        <translation>생성된 색상을 문서 색상로 치환</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>취소(&amp;C)</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <source>Leave colors untouched</source>
        <translation>손대지 않은 색상을 남겨둠.</translation>
    </message>
    <message>
        <source>Simulate common vision defects here. Select type of the defect.</source>
        <translation>여기에서 일반적인 색맹형태를 모의시험합니다. 색맹 형태를 선택하시오.</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
</context>
<context>
    <name>ChTable</name>
    <message>
        <source>You can see a thumbnail if you press
and hold down the right mouse button

The Insert key inserts a Glyph into the Selection below
and the Delete key removes the last inserted one</source>
        <translation>오른쪽 마우스 버튼을 누르고 있으면 썸네일을 볼 수 있습니다.
	
삽입키는 사용자문자를 아래 선택으로 삽입하고 삭제키는 마지막 삽입된 것을 제거합니다.</translation>
    </message>
</context>
  <context>
    <name>CharSelect</name>
    <message>
      <source>Font:</source>
      <translation>글꼴:</translation>
    </message>
    <message>
      <source>Character Class:</source>
      <translation>문자 종류:</translation>
    </message>
    <message>
      <source>&amp;Insert</source>
      <translation>삽입(&amp;I)</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>제거(&amp;L)</translation>
    </message>
    <message>
      <source>Insert the characters at the cursor in the text</source>
      <translation>텍스트에서 커서위치에 문자를 입력</translation>
    </message>
    <message>
      <source>Delete the current selection(s).</source>
      <translation>현재 선택을 삭제합니다.</translation>
    </message>
    <message>
      <source>You can see a thumbnail if you press and hold down the right mouse button. The Insert key inserts a Glyph into the Selection below and the Delete key removes the last inserted one</source>
      <translation>오른쪽 마우스 버튼을 계속 누르고 있으면 썸네일을 볼 수 있습니다. 삽입키는 사용자 문자표를 선택된 곳 아래에 삽입하며 삭제키는 마지막 삽입된 그림문자를 삭제합니다.</translation>
    </message>
    <message>
      <source>Enhanced Palette</source>
      <translation>사용자 문자표</translation>
    </message>
    <message>
      <source>Quick Palette</source>
      <translation>문자 빨리 찾기</translation>
    </message>
    <message>
      <source>Character Palette</source>
      <translation>문자 팔레트</translation>
    </message>
    <message>
      <source>Hide/Show Enhanced Palette</source>
      <translation>사용자 문자표 숨기기/보이기</translation>
    </message>
  </context>
  <context>
    <name>CharStyleComboBox</name>
    <message>
      <source>No Style</source>
      <translation>스타일 없음</translation>
    </message>
  </context>
<context>
    <name>CharTable</name>
    <message>
        <source>Delete</source>
        <translation>삭제</translation>
    </message>
</context> 
 <context>
    <name>CharTableView</name>
    <message>
      <source>Delete</source>
      <translation>삭제</translation>
    </message>
  </context>
  <context>
    <name>CheckDocument</name>
    <message>
      <source>Glyphs missing</source>
      <translation>사용자 문자표 빠짐</translation>
    </message>
    <message>
      <source>Text overflow</source>
      <translation>텍스트 오버플로우</translation>
    </message>
    <message>
      <source>Object is not on a Page</source>
      <translation>객체가 페이지에 없음</translation>
    </message>
    <message>
      <source>Missing Image</source>
      <translation>이미지 빠짐</translation>
    </message>
    <message>
      <source>Object has transparency</source>
      <translation>객체가 투명도를 가짐</translation>
    </message>
    <message>
      <source>Object is a PDF Annotation or Field</source>
      <translation>객체가 PDF 주석이나 필드임</translation>
    </message>
    <message>
      <source>Object is a placed PDF</source>
      <translation>객체가 배치된 PDF입니다</translation>
    </message>
    <message>
      <source>Document</source>
      <translation>문서</translation>
    </message>
    <message>
      <source>No Problems found</source>
      <translation>문제가 없습니다</translation>
    </message>
    <message>
      <source>Page </source>
      <translation>페이지 </translation>
    </message>
    <message>
      <source>Free Objects</source>
      <translation>자유 객체</translation>
    </message>
    <message>
      <source>Problems found</source>
      <translation>문제가 발견되었습니다</translation>
    </message>
    <message>
      <source>Preflight Verifier</source>
      <translation>문서 검증</translation>
    </message>
    <message>
      <source>Items</source>
      <translation>객체</translation>
    </message>
    <message>
      <source>Problems</source>
      <translation>문제</translation>
    </message>
    <message>
      <source>Current Profile:</source>
      <translation>현재 프로파일:</translation>
    </message>
    <message>
      <source>&amp;Ignore Errors</source>
      <translation>오류 무시(&amp;I)</translation>
    </message>
    <message>
      <source>Check again</source>
      <translation>다시 체크</translation>
    </message>
    <message>
      <source>Image resolution below %1 DPI, currently %2 x %3 DPI</source>
      <translation>이미지 해상도가 1 % DPI 미만, 현재 2 % x % 3 DPI입니다.</translation>
    </message>
    <message>
      <source>Image resolution above %1 DPI, currently %2 x %3 DPI</source>
      <translation>이미지 해상도가 1 % DPI 이상, 현재 2 % x % 3 DPI입니다.</translation>
    </message>
    <message>
      <source>Image is GIF</source>
      <translation>GIF 이미지 입니다</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>확인</translation>
    </message>
    <message>
      <source>Transparency used</source>
      <translation>투명도 사용 중</translation>
    </message>
    <message>
      <source>Blendmode used</source>
      <translation>혼합모드 사용 중</translation>
    </message>
    <message>
      <source>Layer &quot;%1&quot;</source>
      <translation>레이어 &quot;%1&quot;</translation>
    </message>
    <message>
      <source>Annotation uses a non TrueType font</source>
      <translation>주석에서 TrueType 글꼴이 아닌 것이 사용합니다</translation>
    </message>
    <message>
      <source>Preflight profile to base the report generation on. Options can be set in Document Setup or Preferences</source>
      <translation>문서 프로필을 기초로 보고서를 생성합니다. 옵션은 문서 설치나 기본설정을 설정할 수 있습니다</translation>
    </message>
    <message>
      <source>Ignore found errors and continue to export or print. Be sure to understand the errors you are ignoring before continuing.</source>
      <translation>오류 발견을 무시하고 내보내기 또는 출력을 계속합니다. 계속 하기 전 무시한 오류를 확인하시요.</translation>
    </message>
    <message>
      <source>Rerun the document scan to check corrections you may have made</source>
      <translation>정정을 체그하기 이하여 문서 스캔을 재 실행합니다</translation>
    </message>
    <message>
      <source>Empty Image Frame</source>
      <translation>빈 이미지 프레임</translation>
    </message>
  </context>
<context>
    <name>ChooseStyles</name>
    <message>
        <location filename="../editformats.cpp" line="95"/>
        <source>Choose Styles</source>
        <translation>스타일 선택</translation>
    </message>
    <message>
        <location filename="../editformats.cpp" line="100"/>
        <source>Available Styles</source>
        <translation>이용가능한 스타일</translation>
    </message>
</context>
  <context>
    <name>CollectForOutput</name>
    <message>
      <source>Choose a Directory</source>
      <translation>폴더 선택</translation>
    </message>
    <message>
      <source>Collecting...</source>
      <translation>수집 중...</translation>
    </message>
    <message>
      <source>Cannot collect the file: 
%1</source>
      <translation>파일을 수집할 수 없습니다:
%1</translation>
    </message>
    <message>
      <source>Cannot collect all files for output for file:
%1</source>
      <translation>출력 파일로 전체 파일을 모을 수 없습니다:
%1</translation>
    </message>
  </context>
  <context>
    <name>ColorManager</name>
    <message>
      <source>Colors</source>
      <translation>색상</translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation>들여오기(&amp;I)</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>새 파일(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation>편집(&amp;E)</translation>
    </message>
    <message>
      <source>D&amp;uplicate</source>
      <translation>복제(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>삭제(&amp;D)</translation>
    </message>
    <message>
      <source>&amp;Remove Unused</source>
      <translation>사용하지 않는 것 삭제(&amp;R)</translation>
    </message>
    <message>
      <source>Color Sets</source>
      <translation>색상 모음</translation>
    </message>
    <message>
      <source>Current Color Set:</source>
      <translation>현재 색상 모음:</translation>
    </message>
    <message>
      <source>&amp;Save Color Set</source>
      <translation>색상 모음 저장(&amp;S)</translation>
    </message>
    <message>
      <source>Choose a color set to load</source>
      <translation>읽어오는 색상 모음 선택</translation>
    </message>
    <message>
      <source>Save the current color set</source>
      <translation>현재 색상 모음 저장</translation>
    </message>
    <message>
      <source>Remove unused colors from current document's color set</source>
      <translation>현재 문서의 색상 모음에서 사용되지 않은 색상을 제거합니다</translation>
    </message>
    <message>
      <source>Import colors to the current set from an existing document</source>
      <translation>기존 문서에서 현재 색상 설정에 색상 들여오기</translation>
    </message>
    <message>
      <source>Create a new color within the current set</source>
      <translation>현재 설정 사이에 새로운 색상을 생성합니다</translation>
    </message>
    <message>
      <source>Edit the currently selected color</source>
      <translation>현재 선택된 색상 편집</translation>
    </message>
    <message>
      <source>Make a copy of the currently selected color</source>
      <translation>현재 선택된 색상의 사본 생성</translation>
    </message>
    <message>
      <source>Delete the currently selected color</source>
      <translation>현재 선택된 색상 삭제</translation>
    </message>
    <message>
      <source>Make the current colorset the default color set</source>
      <translation>현재 색상 모음을 기본 색상 모음으로 만듦니다</translation>
    </message>
    <message>
      <source>&amp;Name:</source>
      <translation>이름(&amp;N):</translation>
    </message>
    <message>
      <source>Choose a Name</source>
      <translation>새 이름 선택</translation>
    </message>
    <message>
      <source>Copy of %1</source>
      <translation>%1 복사</translation>
    </message>
    <message>
      <source>New Color</source>
      <translation>새 색상</translation>
    </message>
    <message>
      <source>Information</source>
      <translation>정보</translation>
    </message>
    <message>
      <source>Import</source>
      <translation>들여오기</translation>
    </message>
    <message>
      <source>The file %1 does not contain colors which can be imported.
If the file was a PostScript-based, try to import it with File -&amp;gt; Import. 
Not all files have DSC conformant comments where the color descriptions are located.
 This prevents importing colors from some files.
See the Edit Colors section of the documentation for more details.</source>
      <translation>% 1 파일을 가져올 수있는 색상을 포함하지 않습니다. 
이 파일이 포스트 스크립트 기반이라면, 파일을 읽어오려고 할 것입니다 - &amp;&gt; 읽어오기. 
모든 파일이 색상 설명이 위치한 DSC 준수 의견을 가지지 않습니다. 
 이것은 몇몇 파일로부터 색상을 읽어오는 것을 금지합니다. 
더 자세한 내용은 문서 색상 섹션의 편집부분을 참조하십시오.</translation>
    </message>
    <message>
      <source>If color management is enabled, a triangle warning indicator is a warning that the color maybe outside of the color gamut of the current printer profile selected. What this means is the color may not print exactly as indicated on screen. Spot colors are indicated by a red circle. More hints about gamut warnings are in the online help under Color Management. Registration colors will have a registration mark next to the color. Use Registration only for printers marks and crop marks.</source>
      <translation>색상 관리가 활성화 된다면 삼각형의 경고 지시자는 현재 선택된 프린터의 색상 범위 밖을 의미하는 것입니다. 이는  색상이 화면상에서 나타나는 것과 같이 정확히 출력이 되지 않은 것입니다. Spot 색상이 적색원으로 나타납니다.범위 오류에 대한 더 자세한 내용은 색상 관리부분에서 온라인 도움말이 있습니다. 등록색상은  등록마크 옆에 있는 색상을 가질 것입니다. 프린터 마크와 잘림 마크를 위한 등록을 사용합니다.</translation>
    </message>
    <message>
      <source>All Supported Formats (%1);;Documents (%2);;Other Files (%3);;All Files (*)</source>
      <translation>전체 지원 형식 (%1);;문서 (%2);;기타 파일 (%3);;전체 파일 (*)</translation>
    </message>
  </context>
  <context>
    <name>ColorWheel</name>
    <message>
      <source>Monochromatic</source>
      <translation>단일색상</translation>
    </message>
    <message>
      <source>Analogous</source>
      <translation>유사색상</translation>
    </message>
    <message>
      <source>Complementary</source>
      <translation>보색</translation>
    </message>
    <message>
      <source>Split Complementary</source>
      <translation>분열 보색</translation>
    </message>
    <message>
      <source>Triadic</source>
      <translation>3색</translation>
    </message>
    <message>
      <source>Tetradic (Double Complementary)</source>
      <translation>3색 (이중 보색)</translation>
    </message>
    <message>
      <source>Base Color</source>
      <translation>기본 색상</translation>
    </message>
    <message>
      <source>Monochromatic Light</source>
      <translation>밝은 단일색상</translation>
    </message>
    <message>
      <source>Monochromatic Dark</source>
      <translation>어두운 단일색상</translation>
    </message>
    <message>
      <source>1st. Analogous</source>
      <translation>첫째 유사색상</translation>
    </message>
    <message>
      <source>2nd. Analogous</source>
      <translation>둘째 유사색상</translation>
    </message>
    <message>
      <source>1st. Split</source>
      <translation>첫째 분열 색상</translation>
    </message>
    <message>
      <source>2nd. Split</source>
      <translation>둘째 분열 색상</translation>
    </message>
    <message>
      <source>3rd. Split</source>
      <translation>셋째 분열 색상</translation>
    </message>
    <message>
      <source>4th. Split</source>
      <translation>네째 분열 색상</translation>
    </message>
    <message>
      <source>1st. Triadic</source>
      <translation>첫째 3색</translation>
    </message>
    <message>
      <source>2nd. Triadic</source>
      <translation>둘째 3색</translation>
    </message>
    <message>
      <source>1st. Tetradic (base opposite)</source>
      <translation>첫째 3색 (기본 반대)</translation>
    </message>
    <message>
      <source>2nd. Tetradic (angle)</source>
      <translation>둘째 3색(각도)</translation>
    </message>
    <message>
      <source>3rd. Tetradic (angle opposite)</source>
      <translation>세째 3색(각도 반대)</translation>
    </message>
  </context>
<context>
    <name>ColorWheelDialog</name>
    <message>
        <source>Cr&amp;eate color...</source>
        <translation>색상 생성(&amp;E)...</translation>
    </message>
    <message>
        <source>&amp;Import existing color...</source>
        <translation>기존 색상 들여오기(&amp;I)...</translation>
    </message>
    <message>
        <source>&amp;Merge colors</source>
        <translation>색상 병합(&amp;M)</translation>
    </message>
    <message>
        <source>&amp;Replace colors</source>
        <translation>색상 치환(&amp;R)</translation>
    </message>
    <message>
        <source>E&amp;xit</source>
        <translation>종료(&amp;X)</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation>색상(&amp;O)</translation>
    </message>
    <message>
        <source>Normal Vision</source>
        <translation>정상 시력</translation>
    </message>
    <message>
        <source>Protanopia (red)</source>
        <translation>색맹 (적)</translation>
    </message>
    <message>
        <source>Deuteranopia (green)</source>
        <translation>색맹 (녹)</translation>
    </message>
    <message>
        <source>Tritanopia (blue)</source>
        <translation>색맹 (청)</translation>
    </message>
    <message>
        <source>Full Color Blindness</source>
        <translation>완전 색맹</translation>
    </message>
    <message>
        <source>Vision Defect:</source>
        <translation>색맹:</translation>
    </message>
    <message>
        <source>Saturation:</source>
        <translation>채도:</translation>
    </message>
    <message>
        <source>Value:</source>
        <translation>명암:</translation>
    </message>
    <message>
        <source>Color Wheel</source>
        <translation>색상판</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>색상</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>이름</translation>
    </message>
    <message>
        <source>C</source>
        <translation>C(남색)</translation>
    </message>
    <message>
        <source>M</source>
        <translation>M(자홍색)</translation>
    </message>
    <message>
        <source>Y</source>
        <translation>Y(노랑색)</translation>
    </message>
    <message>
        <source>K</source>
        <translation>K(검은색)</translation>
    </message>
    <message>
        <source>Select Method:</source>
        <translation>선택 방법:</translation>
    </message>
    <message>
        <source>Angle (0 - 90 degrees):</source>
        <translation>각도 (0 -90 도):</translation>
    </message>
    <message>
        <source>&amp;Merge Colors</source>
        <translation>색상 병합(&amp;M)</translation>
    </message>
    <message>
        <source>&amp;Replace Colors</source>
        <translation>색상 치환(&amp;R)</translation>
    </message>
    <message>
        <source>Merge created colors into the document colors</source>
        <translation>생성된 색상을 문서 색상으로 병합</translation>
    </message>
    <message>
        <source>Replace created colors in the document colors</source>
        <translation>문서 색상을 생성 색상으로 치환</translation>
    </message>
    <message>
        <source>Leave colors untouched</source>
        <translation>손대지 않은 색상을 남겨둠</translation>
    </message>
    <message>
        <source>Difference between the selected value and the counted ones. Refer to documentation for more information.</source>
        <translation>선택된 값과 센 값과의 차이. 자세한 정보는 문서를 참조</translation>
    </message>
    <message>
        <source>Saturation component in HSV mode</source>
        <translation>HSV 모드에서 채도 요소</translation>
    </message>
    <message>
        <source>Value component in HSV mode</source>
        <translation>HSV 모드에서 명암요소</translation>
    </message>
    <message>
        <source>Click the wheel to get the base color. It is hue in HSV mode.</source>
        <translation>기본색상을 얻기 위해 색상판을 클릭. HSV모드에서 색조임</translation>
    </message>
    <message>
        <source>Sample color scheme</source>
        <translation>샘플 색상 스킴</translation>
    </message>
    <message>
        <source>Select one of the methods to create a color scheme. Refer to documentation for more information.</source>
        <translation>색상 스키카를 생성하기 위하여 방법을 선택합니다. 더 자사한 정보는 문서를 참조하세요</translation>
    </message>
    <message>
        <source>Colors of your chosen color scheme</source>
        <translation>선택 색상 스킴 색상</translation>
    </message>
    <message>
        <source>Simulate common vision defects here. Select type of the defect.</source>
        <translation>여기에서 일반 색맹을 모의시험합니다. 색명 형태를 선택하세요..</translation>
    </message>
    <message>
        <source>Merging colors</source>
        <translation>색상 병합 중</translation>
    </message>
    <message>
        <source>Error: </source>
        <translation>오류: </translation>
    </message>
    <message>
        <source>Color %1 exists already!</source>
        <translation>색상 %1이 이미 있습니다!</translation>
    </message>
    <message>
        <source>Color %1 appended.</source>
        <translation>상 %1을 첨가합니다.</translation>
    </message>
    <message>
        <source>Now opening the color manager.</source>
        <translation>색상 관리자 여는 중</translation>
    </message>
    <message>
        <source>Color Merging</source>
        <translation>색상 병합</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation>새 색상</translation>
    </message>
    <message>
        <source>Unable to find the requested color. You have probably selected black, gray or white. There is no way to process this color.</source>
       <translation>요청받은 색상을 찾을 수 없습니다. 검정, 회색 또는 흰색을 선택하여야 합니다. 이 색상에 처리할 방법이 없습니다.</translation>
    </message>
    <message>
        <source>C&amp;olor Components...</source>
       <translation>요소(&amp;O)</translation>
    </message>
    <message>
        <source>Protanopia (Red)</source>
        <translation>색맹 (적)</translation>
    </message>
    <message>
        <source>Deuteranopia (Green)</source>
        <translation>색맹 (녹)</translation>
    </message>
    <message>
        <source>Tritanopia (Blue)</source>
        <translation>색맹 (청)</translation>
    </message>
</context> 
 <context>
    <name>ColorWheelPlugin</name>
    <message>
      <source>&amp;Color Wheel...</source>
      <translation>색상판(&amp;C)...</translation>
    </message>
    <message>
      <source>Color setting helper</source>
      <translation>색상 설정 도우미</translation>
    </message>
    <message>
      <source>Color selector with color theory included.</source>
      <translation>색상 이론을 포함하는 색상 선택기</translation>
    </message>
  </context>
  <context>
    <name>CommonStrings</name>
    <message>
      <source>&amp;Apply</source>
      <translation>적용(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>취소(&amp;C)</translation>
    </message>
    <message>
      <source>None</source>
      <translation>없음</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>확인(&amp;O)</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>저장(&amp;S)</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>경고</translation>
    </message>
    <message>
      <source>None</source>
      <comment>color name</comment>
      <translation>없음</translation>
    </message>
    <message>
      <source>Custom</source>
      <comment>CommonStrings, custom page size</comment>
      <translation>사용자 설정</translation>
    </message>
    <message>
      <source>Single Page</source>
      <translation>한 쪽</translation>
    </message>
    <message>
      <source>Double Sided</source>
      <translation>두 쪽</translation>
    </message>
    <message>
      <source>3-Fold</source>
      <translation>세 쪽</translation>
    </message>
    <message>
      <source>4-Fold</source>
      <translation>네 쪽</translation>
    </message>
	   <message>
        <source>Left Page</source>
        <translation>왼쪽 페이지</translation>
    </message>
    <message>
        <source>Middle</source>
        <translation>중앙 페이지</translation>
    </message>
    <message>
        <source>Middle Left</source>
        <translation>중앙 왼쪽 페이지</translation>
    </message>
    <message>
        <source>Middle Right</source>
        <translation>중앙 오른쪽 페이지</translation>
    </message>
    <message>
        <source>Right Page</source>
       <translation>오른쪽 페이지</translation>
    </message>
    <message>
      <source>Monday</source>
      <translation>월요일</translation>
    </message>
    <message>
      <source>Tuesday</source>
      <translation>화요일</translation>
    </message>
    <message>
      <source>Wednesday</source>
      <translation>수요일</translation>
    </message>
    <message>
      <source>Thursday</source>
      <translation>목요일</translation>
    </message>
    <message>
      <source>Friday</source>
      <translation>금요일</translation>
    </message>
    <message>
      <source>Saturday</source>
      <translation>토요일</translation>
    </message>
    <message>
      <source>Sunday</source>
      <translation>일요일</translation>
    </message>
    <message>
      <source>January</source>
      <translation>1월</translation>
    </message>
    <message>
      <source>February</source>
      <translation>2월</translation>
    </message>
    <message>
      <source>March</source>
      <translation>3월</translation>
    </message>
    <message>
      <source>April</source>
      <translation>4월</translation>
    </message>
    <message>
      <source>May</source>
      <translation>5월</translation>
    </message>
    <message>
      <source>June</source>
      <translation>6월</translation>
    </message>
    <message>
      <source>July</source>
      <translation>6월</translation>
    </message>
    <message>
      <source>August</source>
      <translation>8월</translation>
    </message>
    <message>
      <source>September</source>
      <translation>9월</translation>
    </message>
    <message>
      <source>October</source>
      <translation>10월</translation>
    </message>
    <message>
      <source>November</source>
      <translation>11월</translation>
    </message>
    <message>
      <source>December</source>
      <translation>12월</translation>
    </message>
    <message>
      <source>Yes</source>
      <translation>예</translation>
    </message>
    <message>
      <source>No</source>
      <translation>아니오</translation>
    </message>
    <message>
      <source>&amp;Yes</source>
      <translation>예(&amp;Y)</translation>
    </message>
    <message>
      <source>&amp;No</source>
      <translation>아니오(&amp;N)</translation>
    </message>
    <message>
      <source>Left Page</source>
      <comment>Left page location</comment>
      <translation>왼쪽 페이지</translation>
    </message>
    <message>
      <source>Middle</source>
      <comment>Middle page location</comment>
      <translation>중앙 페이지</translation>
    </message>
    <message>
      <source>Middle Left</source>
      <comment>Middle Left page location</comment>
      <translation>중앙 왼쪽 페이지</translation>
    </message>
    <message>
      <source>Middle Right</source>
      <comment>Middle Right page location</comment>
      <translation>중앙 오른쪽 페이지</translation>
    </message>
    <message>
      <source>Right Page</source>
      <comment>Right page location</comment>
      <translation>오른쪽 페이지</translation>
    </message>
    <message>
      <source>Normal</source>
      <comment>Default single master page</comment>
      <translation>기본 한 페이지</translation>
    </message>
    <message>
      <source>Normal Left</source>
      <comment>Default left master page</comment>
      <translation>기본 왼쪽 페이지</translation>
    </message>
    <message>
      <source>Normal Middle</source>
      <comment>Default middle master page</comment>
      <translation>기본 중앙 페이지</translation>
    </message>
    <message>
      <source>Normal Right</source>
      <comment>Default right master page</comment>
      <translation>기본 오른쪽 페이지</translation>
    </message>
    <message>
      <source>Normal Vision</source>
      <comment>Color Blindness - Normal Vision</comment>
      <translation>정상 시력</translation>
    </message>
    <message>
      <source>Protanopia (Red)</source>
      <comment>Color Blindness - Red Color Blind</comment>
      <translation>적색 이상</translation>
    </message>
    <message>
      <source>Deuteranopia (Green)</source>
      <comment>Color Blindness - Greed Color Blind</comment>
      <translation>녹색 이상</translation>
    </message>
    <message>
      <source>Tritanopia (Blue)</source>
      <comment>Color Blindness - Blue Color Blind</comment>
      <translation>청색 이상</translation>
    </message>
    <message>
      <source>Full Color Blindness</source>
      <comment>Color Blindness - Full Color Blindness</comment>
      <translation>전 색상 색맹</translation>
    </message>
    <message>
      <source>Custom: </source>
      <comment>Custom Tab Fill Option</comment>
      <translation>사용자 탭 설정: </translation>
    </message>
    <message>
      <source>Solid Line</source>
      <translation>실선</translation>
    </message>
    <message>
      <source>Dashed Line</source>
      <translation>대시선</translation>
    </message>
    <message>
      <source>Dotted Line</source>
      <translation>점선</translation>
    </message>
    <message>
      <source>Dash Dot Line</source>
      <translation>대시점선</translation>
    </message>
    <message>
      <source>Dash Dot Dot Line</source>
      <translation>대시점점선</translation>
    </message>
    <message>
      <source>None</source>
      <comment>Optical Margin Setting</comment>
      <translation>없음</translation>
    </message>
    <message>
      <source>Left Protruding</source>
      <comment>Optical Margin Setting</comment>
      <translation>왼쪽 돌출</translation>
    </message>
    <message>
      <source>Right Protruding</source>
      <comment>Optical Margin Setting</comment>
      <translation>오른쪽 돌출</translation>
    </message>
    <message>
      <source>Left Hanging Punctuation</source>
      <comment>Optical Margin Setting</comment>
      <translation>왼쪽 문장 부호</translation>
    </message>
    <message>
      <source>Right Hanging Punctuation</source>
      <comment>Optical Margin Setting</comment>
      <translation>오른쪽 문장 부호</translation>
    </message>
    <message>
      <source>Default</source>
      <comment>Optical Margin Setting</comment>
      <translation>기본값</translation>
    </message>
    <message>
      <source>Min. Word Tracking</source>
      <translation>최소 단어 찾기</translation>
    </message>
    <message>
      <source>Max. Word Tracking</source>
      <translation>최대 단어 찾기</translation>
    </message>
    <message>
      <source>Min. Glyph Extension</source>
      <translation>최소 사용자 문자표 확장</translation>
    </message>
    <message>
      <source>Max. Glyph Extension</source>
      <translation>최대 사용자 문자표 확장</translation>
    </message>
    <message>
      <source>RGB</source>
      <comment>Colorspace</comment>
      <translation>RGB</translation>
    </message>
    <message>
      <source>CMYK</source>
      <comment>Colorspace</comment>
      <translation>CMYK</translation>
    </message>
    <message>
      <source>Grayscale</source>
      <comment>Colorspace</comment>
      <translation>회색톤</translation>
    </message>
    <message>
      <source>Duotone</source>
      <comment>Colorspace</comment>
      <translation>2색조</translation>
    </message>
    <message>
      <source>Unknown</source>
      <comment>Colorspace (Unknown)</comment>
      <translation>미정</translation>
    </message>
    <message>
      <source>PostScript</source>
      <translation>포스트스크립트</translation>
    </message>
    <message>
      <source>Text Frame</source>
      <translation>텍스트 프레임</translation>
    </message>
    <message>
      <source>Image Frame</source>
      <translation>이미지 프레임</translation>
    </message>
    <message>
      <source>Line</source>
      <translation>선</translation>
    </message>
    <message>
      <source>Polygon</source>
      <translation>다각형</translation>
    </message>
    <message>
      <source>Polyline</source>
      <translation>다수 선</translation>
    </message>
    <message>
      <source>Text on a Path</source>
      <translation>경로상 텍스트</translation>
    </message>
    <message>
      <source>Multiple</source>
      <comment>Multiple frame types</comment>
      <translation>다수 프레임 형태</translation>
    </message>
    <message>
      <source>PDF Push Button</source>
      <translation>PDF 밀기 단추</translation>
    </message>
    <message>
      <source>PDF Text Field</source>
      <translation>PDF 텍스트 필드</translation>
    </message>
    <message>
      <source>PDF Check Box</source>
      <translation>PDF 체크상자</translation>
    </message>
    <message>
      <source>PDF Combo Box</source>
      <translation>PDF 콤보상자</translation>
    </message>
    <message>
      <source>PDF List Box</source>
      <translation>PDF 목록상자</translation>
    </message>
    <message>
      <source>PDF Text Annotation</source>
      <translation>PDF 텍스트 주석</translation>
    </message>
    <message>
      <source>PDF Link Annotation</source>
      <translation>PDF 링크 주석</translation>
    </message>
    <message>
      <source>PostScript Level 1</source>
      <translation>포스트스크립트 레벨 1</translation>
    </message>
    <message>
      <source>PostScript Level 2</source>
      <translation>포스트스크립트 레벨 2</translation>
    </message>
    <message>
      <source>PostScript Level 3</source>
      <translation>포스트스크립트 레벨 3</translation>
    </message>
    <message>
      <source>Windows GDI</source>
      <translation>Windows GDI</translation>
    </message>
    <message>
      <source>Render Frame</source>
      <translation>렌더 프레임</translation>
    </message>
    <message>
      <source>Default Paragraph Style</source>
      <translation>기본 문단 스타일</translation>
    </message>
    <message>
      <source>Default Character Style</source>
      <translation>기본 문자 스타일</translation>
    </message>
    <message>
      <source>Default Line Style</source>
      <translation>기본 선 스타일</translation>
    </message>
  </context>
  <context>
    <name>ContextMenu</name>
    <message>
      <source>Preview Settings</source>
      <translation>미리보기 설정</translation>
    </message>
    <message>
      <source>Paste File...</source>
      <translation>파일 붙여넣기...</translation>
    </message>
    <message>
      <source>Delete Page</source>
      <translation>페이지 삭제</translation>
    </message>
  </context>
  <context>
    <name>CopyPageToMasterPageBase</name>
    <message>
      <source>Convert Page to Master Page</source>
      <translation>페이지를 마스터 페이지로 변환</translation>
    </message>
    <message>
      <source>Name:</source>
      <translation>이름:</translation>
    </message>
    <message>
      <source>Copy Applied Master Page Items</source>
      <translation>적용된 마스터 페이지 객체 복사</translation>
    </message>
  </context>
  <context>
    <name>CopyPageToMasterPageDialog</name>
    <message>
      <source>New Master Page %1</source>
      <translation>새 마스터 페이지 %1</translation>
    </message>
  </context>
  <context>
    <name>Cpalette</name>
    <message>
      <source> pt</source>
      <translation> 포인트</translation>
    </message>
    <message>
      <source> %</source>
      <translation> 퍼센트</translation>
    </message>
    <message>
      <source>Shade:</source>
      <translation>음영:</translation>
    </message>
    <message>
      <source>Opacity:</source>
      <translation>불투명도:</translation>
    </message>
    <message>
      <source>Move Vector</source>
      <translation>벡터 이동</translation>
    </message>
    <message>
      <source>Normal</source>
      <translation>보통</translation>
    </message>
    <message>
      <source>Horizontal Gradient</source>
      <translation>수평 그라디언트</translation>
    </message>
    <message>
      <source>Vertical Gradient</source>
      <translation>수직 그라디언트</translation>
    </message>
    <message>
      <source>Diagonal Gradient</source>
      <translation>대각선 그라디언트</translation>
    </message>
    <message>
      <source>Cross Diagonal Gradient</source>
      <translation>교차 대각선 그라디언트</translation>
    </message>
    <message>
      <source>Radial Gradient</source>
      <translation>방사 그라디언트</translation>
    </message>
    <message>
      <source>Free linear Gradient</source>
      <translation>자유 직선 그라디언트</translation>
    </message>
    <message>
      <source>Free radial Gradient</source>
      <translation>자유 방사 그라디언트</translation>
    </message>
    <message>
      <source>Edit Line Color Properties</source>
      <translation>선 색상 속성 편집</translation>
    </message>
    <message>
      <source>Edit Fill Color Properties</source>
      <translation>채움 색상 속성 편집</translation>
    </message>
    <message>
      <source>Saturation of color</source>
      <translation>색상 채도</translation>
    </message>
    <message>
      <source>Normal or gradient fill method</source>
      <translation>보통 또는 그라디언트 채움 방법</translation>
    </message>
    <message>
      <source>Set the transparency for the color selected</source>
      <translation>선택 색상의 투명도 설정</translation>
    </message>
    <message>
      <source>Move the start of the gradient vector with the left mouse button pressed and move the end of the gradient vector with the right mouse button pressed</source>
      <translation>왼쪽 마우스 버튼을 눌러 그라디언트 백터의 시작을 이동하고 오른쪽 마우스를 눌러 그라디언트 벡터의 끝으로 이동시킵니다.</translation>
    </message>
    <message>
      <source>Transparency Settings</source>
      <translation>투명도 설정</translation>
    </message>
    <message>
      <source>Blend Mode:</source>
      <translation>혼합 모드:</translation>
    </message>
    <message>
      <source>Darken</source>
      <translation>어둡게</translation>
    </message>
    <message>
      <source>Lighten</source>
      <translation>밝게</translation>
    </message>
    <message>
      <source>Multiply</source>
      <translation>곱셈</translation>
    </message>
    <message>
      <source>Screen</source>
      <translation>화면</translation>
    </message>
    <message>
      <source>Overlay</source>
      <translation>중첩</translation>
    </message>
    <message>
      <source>Hard Light</source>
      <translation>아주 밝게</translation>
    </message>
    <message>
      <source>Soft Light</source>
      <translation>중간 밝게</translation>
    </message>
    <message>
      <source>Difference</source>
      <translation>차이</translation>
    </message>
    <message>
      <source>Color Dodge</source>
      <translation>피하기</translation>
    </message>
    <message>
      <source>Color Burn</source>
      <translation>태우기</translation>
    </message>
    <message>
      <source>Hue</source>
      <translation>색조</translation>
    </message>
    <message>
      <source>Saturation</source>
      <translation>채도</translation>
    </message>
    <message>
      <source>Color</source>
      <translation>색상</translation>
    </message>
    <message>
      <source>Luminosity</source>
      <translation>광도</translation>
    </message>
    <message>
      <source>Offsets</source>
      <translation>옵셋</translation>
    </message>
    <message>
      <source>X:</source>
      <translation>X:</translation>
    </message>
    <message>
      <source>Y:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <source>Scaling</source>
      <translation>비율</translation>
    </message>
    <message>
      <source>Rotation</source>
      <translation>회전</translation>
    </message>
    <message>
      <source>Angle</source>
      <translation>각도</translation>
    </message>
    <message>
      <source>Pattern</source>
      <translation>패턴</translation>
    </message>
    <message>
      <source>Exclusion</source>
      <translation>제외</translation>
    </message>
    <message>
      <source>X-Scale:</source>
      <translation>X비율:</translation>
    </message>
    <message>
      <source>Y-Scale:</source>
      <translation>Y비율:</translation>
    </message>
    <message>
      <source>Display only used Colors</source>
      <translation>사용된 색상만 표시</translation>
    </message>
    <message>
      <source>Display all colors from the document color list, or only the already used colors</source>
      <translation>문서 색상 몱록에서 모든 색상 또는 현재 사용되는 색깔만 나타내기</translation>
    </message>
  </context>
  <context>
    <name>CreateRange</name>
    <message>
      <source>Create Range</source>
      <translation>범위 생성</translation>
    </message>
    <message>
      <source>Number of Pages in Document:</source>
      <translation>문서 페이지 번호:</translation>
    </message>
    <message>
      <source>Doc Page Range</source>
      <translation>문서 페이지 범위</translation>
    </message>
    <message>
      <source>Basic Range Selection</source>
      <translation>기본 범위 선택</translation>
    </message>
    <message>
      <source>Range of Pages</source>
      <translation>페이지 범위</translation>
    </message>
    <message>
      <source>De&amp;lete</source>
      <translation>삭제(&amp;L)</translation>
    </message>
    <message>
      <source>Alt+L</source>
      <translation>Alt+L</translation>
    </message>
    <message>
      <source>Move &amp;Down</source>
      <translation>아래로 이동(&amp;D)</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>Move &amp;Up</source>
      <translation>위로 이동(&amp;U)</translation>
    </message>
    <message>
      <source>Alt+U</source>
      <translation>Alt+U</translation>
    </message>
    <message>
      <source>Add a Range of Pages</source>
      <translation>페이지 범위 더하기</translation>
    </message>
    <message>
      <source>Consecutive Pages</source>
      <translation>연속 페이지</translation>
    </message>
    <message>
      <source>Even Pages</source>
      <translation>짝수 페이지</translation>
    </message>
    <message>
      <source>From:</source>
      <translation>부터:</translation>
    </message>
    <message>
      <source>To:</source>
      <translation>까지:</translation>
    </message>
    <message>
      <source>&amp;Add To Range</source>
      <translation>범위에 더하기(&amp;A)</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>Odd Pages</source>
      <translation>홀수 페이지</translation>
    </message>
    <message>
      <source>Comma Separated List</source>
      <translation>쉼표로 구분된 목록</translation>
    </message>
    <message>
      <source>Advanced Reordering</source>
      <translation>자세한 정렬</translation>
    </message>
    <message>
      <source>Page Order</source>
      <translation>페이지 순서</translation>
    </message>
    <message>
      <source>Sample Page Order:</source>
      <translation>샘플 페이지 순서:</translation>
    </message>
    <message>
      <source>Page Group Size:</source>
      <translation>페이지 그룹 크기:</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>확인(&amp;O)</translation>
    </message>
    <message>
      <source>Alt+O</source>
      <translation>Alt+O</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>취소(&amp;C)</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
  </context>
<context>
    <name>CreateRangeBase</name>
    <message>
        <source>Alt+U</source>
        <translation>Alt+U</translation>
    </message>
    <message>
        <source>De&amp;lete</source>
        <translation>삭제(&amp;L)</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <source>Advanced Reordering</source>
        <translation>부가 순서</translation>
    </message>
    <message>
        <source>Page Group Size:</source>
        <translation>페이지그룹 크기:</translation>
    </message>
    <message>
        <source>Sample Page Order:</source>
        <translation>단순 페이지 순서:</translation>
    </message>
    <message>
        <source>Page Order</source>
        <translation>페이지 순서</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>확인(&amp;O)</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>취소(&amp;C)</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
</context>
  <context>
    <name>CsvDialog</name>
    <message>
      <source>CSV Importer Options</source>
      <translation>CSV 들여오기 설정</translation>
    </message>
    <message>
      <source>Field delimiter:</source>
      <translation>필드 구분자:</translation>
    </message>
    <message>
      <source>(TAB)</source>
      <translation>(탭)</translation>
    </message>
    <message>
      <source>Value delimiter:</source>
      <translation>값 구분자:</translation>
    </message>
    <message>
      <source>First row is a header</source>
      <translation>첫 번째 행이 헤더임</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>확인</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>취소</translation>
    </message>
    <message>
      <source>None</source>
      <comment>delimiter</comment>
      <translation>없음</translation>
    </message>
  </context>
  <context>
    <name>CupsOptions</name>
    <message>
      <source>Printer Options</source>
      <translation>프린터 설정</translation>
    </message>
    <message>
      <source>Page Set</source>
      <translation>페이지 설정</translation>
    </message>
    <message>
      <source>All Pages</source>
      <translation>전체 페이지</translation>
    </message>
    <message>
      <source>Even Pages only</source>
      <translation>짝수 페이지만</translation>
    </message>
    <message>
      <source>Odd Pages only</source>
      <translation>홀수 페이지만</translation>
    </message>
    <message>
      <source>Orientation</source>
      <translation>방향</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation>세로방향</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation>가로방향</translation>
    </message>
    <message>
      <source>N-Up Printing</source>
      <translation>집약인쇄</translation>
    </message>
    <message>
      <source>Page per Sheet</source>
      <translation>시트 당 페이지</translation>
    </message>
    <message>
      <source>Pages per Sheet</source>
      <translation>시트 당 페이지</translation>
    </message>
    <message>
      <source>Option</source>
      <translation>설정</translation>
    </message>
    <message>
      <source>Value</source>
      <translation>값</translation>
    </message>
    <message>
      <source>This panel displays various CUPS options when printing. The exact parameters available will depend on your printer driver. You can confirm CUPS support by selecting Help > About. Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support. Missing library support is indicated by a *</source>
      <translation>이 패널에서 인쇄시 각종 CUPS 옵션을 표시합니다. 사용할 수 있는 정확한 매개 변수는 프린터 드라이버에 따라 다릅니다.  "도움말 > Scribus에 대하여"를 선택하여 CUPS를 지원을 확인할 수 있습니다. 목록을 참조 : CCT는 C = CUPS C = littlecms T = TIFF 지원과 동일합니다. 지원 라이브러리가없는 경우는 *로 표시됩니다.</translation>
    </message>
    <message>
      <source>Mirror</source>
      <translation>미러</translation>
    </message>
  </context>
  <context>
    <name>CurveWidget</name>
    <message>
      <source>Open</source>
      <translation>열기</translation>
    </message>
    <message>
      <source>Curve Files (*.scu);;All Files (*)</source>
      <translation>곡선 파일 (*.scu);;전체 파일 (*)</translation>
    </message>
    <message>
      <source>Save as</source>
      <translation>다른 이름으로 저장</translation>
    </message>
    <message>
      <source>Cannot write the file: 
%1</source>
      <translation>파일을 쓸 수 없음: 
%1</translation>
    </message>
    <message>
      <source>Inverts the curve</source>
      <translation>곡선을 반전</translation>
    </message>
    <message>
      <source>Resets the curve</source>
      <translation>곡선을 초기화</translation>
    </message>
    <message>
      <source>Switches between linear and cubic interpolation of the curve</source>
      <translation>곡선의 직선 및 3 차 보간 사이에서 전환</translation>
    </message>
    <message>
      <source>Loads a curve</source>
      <translation>곡선 읽어오기</translation>
    </message>
    <message>
      <source>Saves this curve</source>
      <translation>이 곡선을 저장</translation>
    </message>
  </context>
  <context>
    <name>CustomFDialog</name>
    <message>
      <source>&amp;Compress File</source>
      <translation>파일 압축(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Include Fonts</source>
      <translation>글꼴 포함(&amp;I)</translation>
    </message>
    <message>
      <source>Encoding:</source>
      <translation>암호화:</translation>
    </message>
    <message>
      <source>Show Preview</source>
      <translation>미리보기 보이기</translation>
    </message>
    <message>
      <source>&amp;Include Color Profiles</source>
      <translation>색상 속성 포함(&amp;I)</translation>
    </message>
    <message>
      <source>Show a preview and information for the selected file</source>
      <translation>선택 파일의 미리보기 및 정보를 보이기</translation>
    </message>
    <message>
      <source>Compress the Scribus document on save</source>
      <translation>저장시 Scribus 문서를 압축</translation>
    </message>
    <message>
      <source>Include fonts when collecting files for the document. Be sure to know and understand licensing information for any fonts you collect and possibly redistribute.</source>
      <translation>문서의 파일을 수집 중 글꼴을 포함. 수집하고 재분배를 위한 임의 글꼴에 대한 라이센스 정보를 알아야 합니다.</translation>
    </message>
    <message>
      <source>Include color profiles when collecting files for the document</source>
      <translation>문서의 파일을 줒집 중 색상 프로파일을 포함</translation>
    </message>
  </context>
  <context>
    <name>DashEditor</name>
    <message>
      <source>Value:</source>
      <translation>값:</translation>
    </message>
    <message>
      <source>Offset:</source>
      <translation>옵셋:</translation>
    </message>
  </context>
  <context>
    <name>DeferredTask</name>
    <message>
      <source>Cancelled by user</source>
      <translation>사용자에 의한 취소</translation>
    </message>
  </context>
  <context>
    <name>DelColor</name>
    <message>
      <source>Delete Color</source>
      <translation>색상 삭제</translation>
    </message>
    <message>
      <source>Delete Color:</source>
      <translation>색상 삭제:</translation>
    </message>
    <message>
      <source>Replace With:</source>
      <translation>치환:</translation>
    </message>
  </context>
  <context>
    <name>DelPages</name>
    <message>
      <source>Delete Pages</source>
      <translation>페이지 삭제</translation>
    </message>
    <message>
      <source>Delete From:</source>
      <translation>삭제:</translation>
    </message>
    <message>
      <source>to:</source>
      <translation>to:</translation>
    </message>
  </context>
<context>
    <name>DelStyle</name>
    <message>
        <location filename="../editformats.cpp" line="36"/>
        <source>Delete Style</source>
        <translation>스타일 삭제</translation>
    </message>
    <message>
        <location filename="../editformats.cpp" line="42"/>
        <source>Delete Style:</source>
        <translation>스타일 삭제:</translation>
    </message>
    <message>
        <location filename="../editformats.cpp" line="46"/>
        <source>Replace With:</source>
        <translation>치환:</translation>
    </message>
    <message>
        <location filename="../editformats.cpp" line="49"/>
        <source>No Style</source>
        <translation>스타일 없음</translation>
    </message>
</context>
  <context>
    <name>DocIm</name>
    <message>
      <source>Importing failed</source>
      <translation>들여오기 실패</translation>
    </message>
    <message>
      <source>Importing Word document failed 
%1</source>
      <translation>Word 문서를 들여오는 데 실패
%1</translation>
    </message>
  </context>
  <context>
    <name>DocInfos</name>
    <message>
      <source>Document Information</source>
      <translation>문서 정보</translation>
    </message>
    <message>
      <source>&amp;Title:</source>
      <translation>제목(&amp;T):</translation>
    </message>
    <message>
      <source>&amp;Author:</source>
      <translation>저작자(&amp;A):</translation>
    </message>
    <message>
      <source>&amp;Keywords:</source>
      <translation>주제어(&amp;K):</translation>
    </message>
    <message>
      <source>Descri&amp;ption:</source>
      <translation>해설(&amp;P):</translation>
    </message>
    <message>
      <source>P&amp;ublisher:</source>
      <translation>게시자(&amp;U):</translation>
    </message>
    <message>
      <source>&amp;Contributors:</source>
      <translation>기여자(&amp;C):</translation>
    </message>
    <message>
      <source>Dat&amp;e:</source>
      <translation>날짜(&amp;E):</translation>
    </message>
    <message>
      <source>T&amp;ype:</source>
      <translation>형태(&amp;Y):</translation>
    </message>
    <message>
      <source>F&amp;ormat:</source>
      <translation>형식(&amp;O):</translation>
    </message>
    <message>
      <source>Identi&amp;fier:</source>
      <translation>식별자(&amp;F):</translation>
    </message>
    <message>
      <source>&amp;Source:</source>
      <translation>소스(&amp;S):</translation>
    </message>
    <message>
      <source>&amp;Language:</source>
      <translation>언어(&amp;L):</translation>
    </message>
    <message>
      <source>&amp;Relation:</source>
      <translation>관련(&amp;R):</translation>
    </message>
    <message>
      <source>Co&amp;verage:</source>
      <translation>범위(&amp;V):</translation>
    </message>
    <message>
      <source>Ri&amp;ghts:</source>
      <translation>권리(&amp;G):</translation>
    </message>
    <message>
      <source>Documen&amp;t</source>
      <translation>문서(&amp;T)</translation>
    </message>
    <message>
      <source>Further &amp;Information</source>
      <translation>자세한 정보(&amp;I)</translation>
    </message>
    <message>
      <source>The person or organisation primarily responsible for making the content of the document. This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
      <translation>개인이나 조직이 첫째로 문서 제작 책임이 있음. 이 객체은 PDF 메타 자료 뿐만 아니라  참조를 위한 Scribus 문서에서 중복될 수 있음.</translation>
    </message>
    <message>
      <source>A name given to the document. This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
      <translation>문서에 주어진 이름. 이 객체는 PDF 메타 자료 뿐만 아니라  참조를 위한 Scribus 문서에서 중복될 수 있음.</translation>
    </message>
    <message>
      <source>An account of the content of the document. This field is for a brief description or abstract of the document. It is embedded in the PDF on export</source>
      <translation>문서 내용 설명. 이 객체는 간략한 설명 또는 문서의 요약. 출력시 PDF에서 중복될 수 있음</translation>
    </message>
    <message>
      <source>The topic of the content of the document. This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</source>
      <translation>문서 내용의 주제. 이 객체는 문서에서 PDF에서 끼워넣는 핵심에서, 찾기와 PDF파일 인덱싱을 도와준다.</translation>
    </message>
    <message>
      <source>A person or organisation responsible for making the document available</source>
      <translation>자료를 활용가능하도록 만들 책임이 있는 사람이나 조직체</translation>
    </message>
    <message>
      <source>A person or organisation responsible for making contributions to the content of the document</source>
      <translation>문서 내용에 기여를 할 책임이 있는 사람이나 조직체</translation>
    </message>
    <message>
      <source>A date associated with an event in the life cycle of the document, in YYYY-MM-DD format, as per ISO 8601</source>
      <translation>ISO 8601에 따라 YYYY-MM-DD 형식 내 문서의 사용 기간 중 이벤트와 연관된 날짜</translation>
    </message>
    <message>
      <source>The nature or genre of the content of the document, eg. categories, functions, genres, etc</source>
      <translation>문서 내용의 요소 또는 장르, 즉 카테고리, 함수, 장르등</translation>
    </message>
    <message>
      <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting. RFC2045,RFC2046 for MIME types are also useful here</source>
      <translation>문서의 물리적 또는 디지탈 명시. 미디어 형태 및 차원은 중요하지 않음. MIME 형태를 위한 RFC2045,RFC2046 는 여기에서 유용함.</translation>
    </message>
    <message>
      <source>An unambiguous reference to the document within a given context such as ISBN or URI</source>
      <translation>ISBN 또는 URI와 같은 주어진 내용내의 문서에 대한 정확한 참고 자료</translation>
    </message>
    <message>
      <source>A reference to a document from which the present document is derived, eg. ISBN or URI</source>
      <translation>ISBN 또는 URI와 같은 현재 문서가 파생된 참조자료</translation>
    </message>
    <message>
      <source>The language in which the content of the document is written, usually a ISO-639 language code optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
      <translation>문서내용이 쓰여진 언어, 예를 들면  en-GB, fr-CH와 같이 하이픈과 ISO-3166 국가코드가 선택적으로 끝에 붙여지는 ISO-639 언어코드</translation>
    </message>
    <message>
      <source>A reference to a related document, possibly using a formal identifier such as a ISBN or URI</source>
      <translation>관계 문서 참조, ISBN 또는 URI과 같이 형식적인 지시자를 사용하는 것이 가능함</translation>
    </message>
    <message>
      <source>The extent or scope of the content of the document, possibly including location, time and jurisdiction ranges</source>
      <translation>문서 내용의 한계 또는 범위; 아마도 위치와 시간 그리고 영향 범위를 포함</translation>
    </message>
    <message>
      <source>Information about rights held in and over the document, eg. copyright, patent or trademark</source>
      <translation>문서 권리에 대한 정보, 예를 들어 저작권, 특허권, 상표권이 이에 해당</translation>
    </message>
  </context>
  <context>
    <name>DocSections</name>
    <message>
      <source>Document Sections</source>
      <translation>문서 섹션</translation>
    </message>
    <message>
      <source>&amp;Add</source>
      <translation>더하기(&amp;A)</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>삭제(&amp;D)</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>이름</translation>
    </message>
    <message>
      <source>Shown</source>
      <translation>표시</translation>
    </message>
    <message>
      <source>From</source>
      <translation>부터</translation>
    </message>
    <message>
      <source>To</source>
      <translation>까지</translation>
    </message>
    <message>
      <source>Style</source>
      <translation>스타일</translation>
    </message>
    <message>
      <source>Start</source>
      <translation>시작</translation>
    </message>
  </context>
<context>
    <name>DocSectionsBase</name>
    <message>
        <source>Document Sections</source>
        <translation>문서 섹션</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>이름</translation>
    </message>
    <message>
        <source>From</source>
        <translation>에서</translation>
    </message>
    <message>
        <source>To</source>
        <translation>로</translation>
    </message>
    <message>
        <source>Style</source>
        <translation>스타일</translation>
    </message>
    <message>
        <source>Start</source>
        <translation>시작</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>더하기(&amp;A)</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>삭제(&amp;D)</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>Shown</source>
        <translation>보임</translation>
    </message>
</context>
<context>
    <name>DocumentItemAttributes</name>
    <message>
        <source>None</source>
        <translation>없음</translation>
    </message>
    <message>
        <location filename="../../scribus/docitemattrprefs.cpp" line="17"/>
        <source>Relates To</source>
        <translation>관계</translation>
    </message>
    <message>
        <location filename="../../scribus/docitemattrprefs.cpp" line="17"/>
        <source>Is Parent Of</source>
        <translation>부모</translation>
    </message>
    <message>
        <location filename="../../scribus/docitemattrprefs.cpp" line="17"/>
        <source>Is Child Of</source>
        <translation>자식</translation>
    </message>
    <message>
        <location filename="../../scribus/docitemattrprefs.cpp" line="19"/>
        <source>Text Frames</source>
        <translation>텍스트 프레임</translation>
    </message>
    <message>
        <location filename="../../scribus/docitemattrprefs.cpp" line="19"/>
        <source>Image Frames</source>
        <translation>이미지 프레임</translation>
    </message>
    <message>
        <location filename="../../scribus/docitemattrprefs.cpp" line="21"/>
        <source>Boolean</source>
        <translation>부울식</translation>
    </message>
    <message>
        <location filename="../../scribus/docitemattrprefs.cpp" line="21"/>
        <source>Integer</source>
        <translation>정수</translation>
    </message>
    <message>
        <location filename="../../scribus/docitemattrprefs.cpp" line="21"/>
        <source>String</source>
        <translation>문자열</translation>
    </message>
    <message>
        <location filename="../../scribus/docitemattrprefs.ui" line="13"/>
        <source>Document Item Attributes</source>
        <translation>문서 객체 속성</translation>
    </message>
    <message>
        <location filename="../../scribus/docitemattrprefs.ui" line="26"/>
        <source>Name</source>
        <translation>이름</translation>
    </message>
    <message>
        <location filename="../../scribus/docitemattrprefs.ui" line="31"/>
        <source>Type</source>
        <translation>형태</translation>
    </message>
    <message>
        <location filename="../../scribus/docitemattrprefs.ui" line="36"/>
        <source>Value</source>
        <translation>값</translation>
    </message>
    <message>
        <location filename="../../scribus/docitemattrprefs.ui" line="41"/>
        <source>Parameter</source>
        <translation>매개변수</translation>
    </message>
    <message>
        <location filename="../../scribus/docitemattrprefs.ui" line="46"/>
        <source>Relationship</source>
        <translation>관계</translation>
    </message>
    <message>
        <location filename="../../scribus/docitemattrprefs.ui" line="51"/>
        <source>Relationship To</source>
        <translation>관련처</translation>
    </message>
    <message>
        <location filename="../../scribus/docitemattrprefs.ui" line="56"/>
        <source>Auto Add To</source>
        <translation>자동 더하기</translation>
    </message>
    <message>
      <source>&amp;Add</source>
      <translation>더하기(&amp;A)</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>복사(&amp;C)</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>삭제(&amp;D)</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>제거(&amp;L)</translation>
    </message>
    <message>
      <source>Alt+L</source>
      <translation>Alt+L</translation>
    </message>
	    <message>
        <location filename="../../scribus/docitemattrprefs.cpp" line="17"/>
        <source>None</source>
        <comment>relationship</comment>
        <translation>없음</translation>
    </message>
	    <message>
        <location filename="../../scribus/docitemattrprefs.cpp" line="19"/>
        <source>None</source>
        <comment>auto add</comment>
        <translation>없음</translation>
    </message>
    <message>
        <location filename="../../scribus/docitemattrprefs.cpp" line="21"/>
        <source>None</source>
        <comment>types</comment>
        <translation>없음</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>이름</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>형태</translation>
    </message>
    <message>
      <source>Value</source>
      <translation>값</translation>
    </message>
    <message>
      <source>Parameter</source>
      <translation>매개변수</translation>
    </message>
    <message>
      <source>Relationship</source>
      <translation>관계</translation>
    </message>
    <message>
      <source>Relationship To</source>
      <translation>관련처</translation>
    </message>
    <message>
      <source>Auto Add To</source>
      <translation>자동 더하기</translation>
    </message>
	    <message>
        <location filename="../../scribus/docitemattrprefs.cpp" line="21"/>
        <source>Real Number</source>
        <translation>실수</translation>
    </message>
  </context>
<context>
    <name>DocumentItemAttributesBase</name>
    <message>
        <source>Document Item Attributes</source>
        <translation>문서 객체 속성</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>이름</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>형태</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>값</translation>
    </message>
    <message>
        <source>Parameter</source>
        <translation>매개변수</translation>
    </message>
    <message>
        <source>Relationship</source>
        <translation>관계</translation>
    </message>
    <message>
        <source>Relationship To</source>
        <translation>관련처</translation>
    </message>
    <message>
        <source>Auto Add To</source>
        <translation>자동 더하기</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>더하기(&amp;A)</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>복사(&amp;C)</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>섹제(&amp;D)</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>삭제(&amp;L)</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
</context>
  <context>
    <name>EPSPlug</name>
    <message>
      <source>Importing File:
%1
failed!</source>
      <translation>파일 들여오기:
%1
실패함!</translation>
    </message>
    <message>
      <source>Fatal Error</source>
      <translation>치명적 오류</translation>
    </message>
     <message>
        <source>Converting Image:
%1
failed!</source>
        <translation>이미지 변환 중:
%1
실패!</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/psimport/importps.cpp" line="872"/>
        <source>Error</source>
        <translation>오류</translation>
    </message>
 <message>
      <source>Analyzing PostScript:</source>
      <translation>포스트스크립트 분석:</translation>
    </message>
    <message>
      <source>Generating Items</source>
      <translation>객체 생성</translation>
    </message>
    <message>
      <source>Converting of %1 images failed!</source>
      <translation>%1 이미지 변환 실패!</translation>
    </message>
    <message>
      <source>Error</source>
      <translation>오류</translation>
    </message>
    <message>
      <source>Group%1</source>
      <translation>그룹 %1</translation>
    </message>
    <message>
      <source>Importing: %1</source>
      <translation>들여오기: %1</translation>
    </message>
  </context>
<context>
    <name>EditStyle</name>
    <message>
        <location filename="../edit1format.cpp" line="47"/>
        <source>Edit Style</source>
        <translation>스타일 편집</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="67"/>
        <source>&amp;Name:</source>
       <translation>이름(&amp;N):</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="80"/>
        <source>Character</source>
        <translation>문자</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="272"/>
        <source> pt</source>
        <translation> 포인트</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="239"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>None</source>
        <translation>없음</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="200"/>
        <source>Distances</source>
        <translation>거리</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="209"/>
        <source>Fixed Linespacing</source>
       <translation>고정 줄 간격</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="210"/>
        <source>Automatic Linespacing</source>
        <translation>자동 줄 간격</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="211"/>
        <source>Align to Baseline Grid</source>
        <translation>기준선 격자 정렬</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="268"/>
        <source>&amp;Lines:</source>
        <translation>선(&amp;L):</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="274"/>
        <source>Distance from Text:</source>
        <translation>텍스트로부터 거리:</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="300"/>
        <source>Tabulators and Indentation</source>
        <translation>탭키 설정 및 들여쓰기</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="324"/>
        <source>Preview of the Paragraph Style</source>
        <translation>문단 스타일 미리보기</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="360"/>
        <source>Name of your paragraph style</source>
        <translation>문단 스타일 이름</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="361"/>
        <source>Font of selected text or object</source>
        <translation>선택된 텍스트나 객체 글꼴</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="362"/>
        <source>Font Size</source>
        <translation>글꼴 크기</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="363"/>
        <source>Color of text fill</source>
        <translation>텍스트 채움 색상</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="364"/>
        <source>Color of text stroke</source>
        <translation>텍스트 외곽선 색상</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="369"/>
        <source>Spacing above the paragraph</source>
        <translation>문단 위 여백</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="370"/>
        <source>Spacing below the paragraph</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="373"/>
        <source>Line Spacing</source>
        <translation>줄 간격</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="375"/>
        <source>Toggles sample text of this paragraph style</source>
       <translation>이 문단 스타일의 예제 텍스트 토글</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>경고</translation>
    </message>
    <message>
        <source>Name of the Style is not unique</source>
        <translation>스타일 이름이 이미 있습니다</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="328"/>
        <source>Background</source>
        <translation>배경</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="371"/>
        <source>Manual Tracking</source>
        <translation>수동 탐색</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="372"/>
        <source>Offset to baseline of characters</source>
        <translation>문자 기준선까지 옵셋</translation>
    </message>
    <message>
        <location filename="../edit1format.cpp" line="448"/>
        <source>Auto</source>
        <translation>자동</translation>
    </message>
</context>
  <context>
    <name>EditToolBar</name>
    <message>
      <source>Edit</source>
      <translation>편집</translation>
    </message>
  </context>
  <context>
    <name>Editor</name>
    <message>
      <source>Editor</source>
      <translation>편집기</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>새 파일(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Open...</source>
      <translation>열기(&amp;O)...</translation>
    </message>
    <message>
      <source>Save &amp;As...</source>
      <translation>다음 이름으로 저장(&amp;A)...</translation>
    </message>
    <message>
      <source>&amp;Save and Exit</source>
      <translation>저장 및 종료(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Exit without Saving</source>
      <translation>저장 없이 종료(&amp;E)</translation>
    </message>
    <message>
      <source>&amp;Undo</source>
      <translation>이전작업(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Redo</source>
      <translation>재실행(&amp;R)</translation>
    </message>
    <message>
      <source>Cu&amp;t</source>
      <translation>잘라내기(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>복사(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation>붙여넣기(&amp;P)</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>제거(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Get Field Names</source>
      <translation>필드명 얻기(&amp;G)</translation>
    </message>
    <message>
      <source>&amp;File</source>
      <translation>파일(&amp;F)</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation>편집(&amp;E)</translation>
    </message>
    <message>
      <source>JavaScripts (*.js);;All Files (*)</source>
      <translation>자바스크립트 (*.js);;전체 파일 (*)</translation>
    </message>
    <message>
      <source>Ctrl+N</source>
      <translation>Ctrl+N</translation>
    </message>
    <message>
      <source>Ctrl+Z</source>
      <translation>Ctrl+Z</translation>
    </message>
    <message>
      <source>Ctrl+X</source>
      <translation>Ctrl+X</translation>
    </message>
    <message>
      <source>Ctrl+C</source>
      <translation>Ctrl+C</translation>
    </message>
    <message>
      <source>Ctrl-V</source>
      <translation>Ctrl-V</translation>
    </message>
  </context>
  <context>
    <name>EffectsDialog</name>
    <message>
      <source>Image Effects</source>
      <translation>이미지 효과</translation>
    </message>
    <message>
      <source>Options:</source>
      <translation>설정:</translation>
    </message>
    <message>
      <source>Color:</source>
      <translation>색상:</translation>
    </message>
    <message>
      <source>Shade:</source>
      <translation>음영:</translation>
    </message>
    <message>
      <source>Brightness:</source>
      <translation>밝기:</translation>
    </message>
    <message>
      <source>Contrast:</source>
      <translation>대비:</translation>
    </message>
    <message>
      <source>Radius:</source>
      <translation>반경:</translation>
    </message>
    <message>
      <source>Value:</source>
      <translation>명도:</translation>
    </message>
    <message>
      <source>Posterize:</source>
      <translation>포스터화:</translation>
    </message>
    <message>
      <source>Available Effects</source>
      <translation>이용가능한 효과</translation>
    </message>
    <message>
      <source>Blur</source>
      <translation>흐림</translation>
    </message>
    <message>
      <source>Brightness</source>
      <translation>밝기</translation>
    </message>
    <message>
      <source>Colorize</source>
      <translation>색상화</translation>
    </message>
    <message>
      <source>Contrast</source>
      <translation>대비</translation>
    </message>
    <message>
      <source>Grayscale</source>
      <translation>회색톤</translation>
    </message>
    <message>
      <source>Invert</source>
      <translation>반전</translation>
    </message>
    <message>
      <source>Posterize</source>
      <translation>포스터화</translation>
    </message>
	    <message>
        <location filename="../../scribus/effectsdialog.cpp" line="1377"/>
        <source>Sharpen</source>
        <translation>강조</translation>
    </message>
    <message>
      <source>&gt;&gt;</source>
      <translation>&gt;&gt;</translation>
    </message>
    <message>
      <source>&lt;&lt;</source>
      <translation>&lt;&lt;</translation>
    </message>
    <message>
      <source>Effects in use</source>
      <translation>사용 중인 효과</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>확인</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>취소</translation>
    </message>
    <message>
      <source>Sharpen</source>
      <translation>강조</translation>
    </message>
    <message>
      <source>Color 1:</source>
      <translation>색상 1:</translation>
    </message>
    <message>
      <source>Color 2:</source>
      <translation>색상 2:</translation>
    </message>
    <message>
      <source>Color 3:</source>
      <translation>색상 3:</translation>
    </message>
    <message>
      <source>Color 4:</source>
      <translation>색상 4:</translation>
    </message>
    <message>
      <source>Duotone</source>
      <translation>2색조</translation>
    </message>
    <message>
      <source>Tritone</source>
      <translation>3색조</translation>
    </message>
    <message>
      <source>Quadtone</source>
      <translation>4색조</translation>
    </message>
    <message>
      <source>Curves</source>
      <translation>곡선</translation>
    </message>
  </context>
  <context>
    <name>ExportBitmap</name>
    <message>
      <source>File exists. Overwrite?</source>
      <translation>파일이 있습니다. 겹쳐쓰겠습니까?</translation>
    </message>
    <message>
      <source>exists already. Overwrite?</source>
      <translation>이미 있습니다. 겹쳐쓰겠습니까?</translation>
    </message>
    <message>
      <source>Save as Image</source>
      <translation>이미지 저장</translation>
    </message>
    <message>
      <source>Insufficient memory for this image size.</source>
      <translation>이 이미지 크기에 불충분한 메모리</translation>
    </message>
    <message>
      <source>Error writing the output file(s).</source>
      <translation>출력파일 쓰기 오류.</translation>
    </message>
  </context>
  <context>
    <name>ExportForm</name>
    <message>
      <source>Choose a Export Directory</source>
      <translation>내보낼 폴더 선택</translation>
    </message>
    <message>
      <source>Export as Image(s)</source>
      <translation>이미지로 내보내기</translation>
    </message>
    <message>
      <source>&amp;Export to Directory:</source>
      <translation>내보내기 폴더(&amp;E):</translation>
    </message>
    <message>
      <source>C&amp;hange...</source>
      <translation>바꾸기(&amp;H)...</translation>
    </message>
    <message>
      <source>Options</source>
      <translation>설정</translation>
    </message>
    <message>
      <source>Image &amp;Type:</source>
      <translation>이미지 형태(&amp;T):</translation>
    </message>
    <message>
      <source>&amp;Quality:</source>
      <translation>품질(&amp;Q):</translation>
    </message>
    <message>
      <source>&amp;Resolution:</source>
      <translation>해상도(&amp;R):</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>크기(&amp;S):</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source> dpi</source>
      <translation> dpi</translation>
    </message>
    <message>
      <source>Range</source>
      <translation>범위</translation>
    </message>
    <message>
      <source>&amp;Current page</source>
      <translation>현재 페이지(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;All pages</source>
      <translation>전체 페이지(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;Range</source>
      <translation>범위(&amp;R)</translation>
    </message>
    <message>
      <source>Export a range of pages</source>
      <translation>페이지 지정범위 내보내기</translation>
    </message>
    <message>
      <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
      <translation>콤마로 표시된 토큰 목록을 입력합니다. 
토큰에서 *은 모든 페이지를,일정범위를 나타날 때는 1-5과 같이, 
혹은 한 페이지 번호를 이용할 수 있습니다.</translation>
    </message>
    <message>
      <source>Export all pages</source>
      <translation>전체 페이지 내보내기</translation>
    </message>
    <message>
      <source>Export only the current page</source>
      <translation>현재 페이지만 내보내기</translation>
    </message>
    <message>
      <source>Resolution of the Images
Use 72 dpi for Images intended for the Screen</source>
      <translation>이미지의 해상도 
화면상에는 72 dpi 이미지를 사용합니다</translation>
    </message>
    <message>
      <source>Size of the images. 100% for no changes, 200% for two times larger etc.</source>
      <translation>이미지의 크기. 100%에서는 변화없고,200%에서는 2배 커집니다。</translation>
    </message>
    <message>
      <source>The quality of your images - 100% is the best, 1% the lowest quality</source>
      <translation>이미지 품질 - 100%는 최고,1%는 최저의 품질입니다</translation>
    </message>
    <message>
      <source>Available export formats</source>
      <translation>사용가능한 내보내기 형식</translation>
    </message>
    <message>
      <source>The output directory - the place to store your images.
Name of the export file will be 'documentname-pagenumber.filetype'</source>
      <translation>출력 폴더 -이미지를 저장하는 장소. 
출력 파일명은'문서명-페이지 번호.확장자'가 됩니다.</translation>
    </message>
    <message>
      <source>Change the output directory</source>
      <translation>출력 폴더 바꾸기</translation>
    </message>
    <message>
      <source>Image size in Pixels</source>
      <translation>화소단위 이미지 크기</translation>
    </message>
    <message>
      <source>TextLabel</source>
      <translation>텍스트 라벨</translation>
    </message>
  </context>
  <context>
    <name>ExtImageProps</name>
    <message>
      <source>Extended Image Properties</source>
      <translation>확장 이미지 속성</translation>
    </message>
    <message>
      <source>Normal</source>
      <translation>보통</translation>
    </message>
    <message>
      <source>Darken</source>
      <translation>어둡게</translation>
    </message>
    <message>
      <source>Lighten</source>
      <translation>밝게</translation>
    </message>
    <message>
      <source>Hue</source>
      <translation>색조</translation>
    </message>
    <message>
      <source>Saturation</source>
      <translation>채도</translation>
    </message>
    <message>
      <source>Color</source>
      <translation>색상</translation>
    </message>
    <message>
      <source>Luminosity</source>
      <translation>광도</translation>
    </message>
    <message>
      <source>Multiply</source>
      <translation>곱하기</translation>
    </message>
    <message>
      <source>Screen</source>
      <translation>화면</translation>
    </message>
    <message>
      <source>Dissolve</source>
      <translation>디졸브</translation>
    </message>
    <message>
      <source>Overlay</source>
      <translation>중첩</translation>
    </message>
    <message>
      <source>Hard Light</source>
      <translation>아주 밝게</translation>
    </message>
    <message>
      <source>Soft Light</source>
      <translation>중간 밝게</translation>
    </message>
    <message>
      <source>Difference</source>
      <translation>차이</translation>
    </message>
    <message>
      <source>Exclusion</source>
      <translation>제외</translation>
    </message>
    <message>
      <source>Color Dodge</source>
      <translation>피하기</translation>
    </message>
    <message>
      <source>Color Burn</source>
      <translation>태우기</translation>
    </message>
    <message>
      <source>Blend Mode:</source>
      <translation>혼합 모드:</translation>
    </message>
    <message>
      <source>Opacity:</source>
      <translation>불투명도:</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>이름</translation>
    </message>
    <message>
      <source>Layers</source>
      <translation>레이어</translation>
    </message>
    <message>
      <source>Don't use any Path</source>
      <translation>임의 경로를 사용하지 마시오</translation>
    </message>
    <message>
      <source>Paths</source>
      <translation>경로</translation>
    </message>
    <message>
      <source>Live Preview</source>
      <translation>라이브 미리보기</translation>
    </message>
  </context>
  <context>
    <name>FDialogPreview</name>
    <message>
      <source>Size:</source>
      <translation>크기:</translation>
    </message>
    <message>
      <source>Resolution:</source>
      <translation>해상도:</translation>
    </message>
    <message>
      <source>DPI</source>
      <translation>DPI</translation>
    </message>
    <message>
      <source>Unknown</source>
      <translation>미정</translation>
    </message>
    <message>
      <source>Colorspace:</source>
      <translation>색상공간:</translation>
    </message>
    <message>
      <source>Title:</source>
      <translation>제목:</translation>
    </message>
    <message>
      <source>No Title</source>
      <translation>제목 없음</translation>
    </message>
    <message>
      <source>Author:</source>
      <translation>저작자:</translation>
    </message>
    <message>
      <source>Scribus Document</source>
      <translation>Scribus 문서</translation>
    </message>
    <message>
      <source>File Format:</source>
      <translation>파일 형식:</translation>
    </message>
  </context>
 <context>
    <name>Farbmanager</name>
    <message>
        <source>Colors</source>
        <translation>색상</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>들여오기(&amp;I)</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>새 파일(&amp;N)</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>편집(&amp;E)</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>복제(&amp;U)</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>삭제(&amp;D)</translation>
    </message>
    <message>
        <source>&amp;Remove Unused</source>
        <translation>미사용 제거(&amp;R)</translation>
    </message>
    <message>
        <source>Color Sets</source>
       <translation>색상 모음</translation>
    </message>
    <message>
        <source>Current Color Set:</source>
        <translation>현재 색상 모음:</translation>
    </message>
    <message>
        <source>&amp;Save Color Set</source>
        <translation>색상 모음 저장(&amp;S)</translation>
    </message>
    <message>
        <source>Choose a color set to load</source>
        <translation>읽기위해 색상 모음 선택</translation>
    </message>
    <message>
        <source>Save the current color set</source>
        <translation>현재 색상 모음 저장</translation>
    </message>
    <message>
        <source>Remove unused colors from current document&apos;s color set</source>
        <translation>현재 문서에서 미사용 색상 제거</translation>
    </message>
    <message>
        <source>Import colors to the current set from an existing document</source>
        <translation>기존 문서로부터색상을 현재 모음으로 들여오기</translation>
    </message>
    <message>
        <source>Create a new color within the current set</source>
        <translation>현재 모음내에서 새 색상 생성</translation>
    </message>
    <message>
        <source>Edit the currently selected color</source>
        <translation>현재 선택 색상 편집</translation>
    </message>
    <message>
        <source>Make a copy of the currently selected color</source>
        <translation>현재 선택 색상의 사본 생성</translation>
    </message>
    <message>
        <source>Delete the currently selected color</source>
        <translation>현재 선택 색상을 삭제</translation>
    </message>
    <message>
        <source>Make the current colorset the default color set</source>
        <translation>현재 색상 모음을 기본 색상모음으로 만듦</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>이름(&amp;N):</translation>
    </message>
    <message>
        <source>Choose a Name</source>
        <translation>이름 선택</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>열기</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>문서 (*.sla *.sla.gz *.scd *.scd.gz);;전체 파일 (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>문서 (*.sla *.scd);;전체 파일 (*)</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>%1 복사</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation>새 색상</translation>
    </message>
    <message>
        <source>None</source>
        <translation>없음</translation>
    </message>
</context> 
  <context>
    <name>FileLoader</name>
    <message>
      <source>Some fonts used by this document have been substituted:</source>
      <translation>이 문서에서 사용되고 있는 몇개의 글꼴은 치환되었습니다:</translation>
    </message>
    <message>
      <source> was replaced by: </source>
      <translation>치환함: </translation>
    </message>
  </context>
  <context>
    <name>FileToolBar</name>
    <message>
      <source>File</source>
      <translation>파일</translation>
    </message>
  </context>
  <context>
    <name>FontComboH</name>
    <message>
      <source>Face:</source>
      <translation>인쇄면:</translation>
    </message>
    <message>
      <source>Style:</source>
      <translation>스타일:</translation>
    </message>
  </context>
  <context>
    <name>FontListModel</name>
    <message>
      <source>Font Name</source>
      <translation>글꼴명</translation>
    </message>
    <message>
      <source>Use Font</source>
      <translation>글꼴 사용</translation>
    </message>
    <message>
      <source>Family</source>
      <translation>패밀리</translation>
    </message>
    <message>
      <source>Style</source>
      <translation>스타일</translation>
    </message>
    <message>
      <source>Variant</source>
      <translation>변이</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>형태</translation>
    </message>
    <message>
      <source>Format</source>
      <translation>형식</translation>
    </message>
    <message>
      <source>Embed in PostScript</source>
      <translation>포스트스크립트에 내장</translation>
    </message>
    <message>
      <source>Subset</source>
      <translation>부분집합</translation>
    </message>
    <message>
      <source>Access</source>
      <translation>접근</translation>
    </message>
    <message>
      <source>Used in Doc</source>
      <translation>문서에서 사용 중</translation>
    </message>
    <message>
      <source>Path to Font File</source>
      <translation>글꼴 파일 경로</translation>
    </message>
    <message>
      <source>Unknown</source>
      <comment>font type</comment>
      <translation>미정</translation>
    </message>
    <message>
      <source>Unknown</source>
      <comment>font format</comment>
      <translation>미정</translation>
    </message>
    <message>
      <source>User</source>
      <comment>font preview</comment>
      <translation>사용자</translation>
    </message>
    <message>
      <source>System</source>
      <comment>font preview</comment>
      <translation>시스템</translation>
    </message>
    <message>
      <source>Click to change the value</source>
      <translation>값을 변경하기 위하여 클릭</translation>
    </message>
  </context>
  <context>
    <name>FontPrefs</name>
    <message>
      <source>Available Fonts</source>
      <translation>이용 가능한 글꼴</translation>
    </message>
    <message>
      <source>Font Substitutions</source>
      <translation>글꼴 치환</translation>
    </message>
    <message>
      <source>Additional Paths</source>
      <translation>부가 경로</translation>
    </message>
    <message>
      <source>&amp;Available Fonts</source>
      <translation>이용 가능한 글꼴(&amp;A)</translation>
    </message>
    <message>
      <source>Font Name</source>
      <translation>글꼴 이름</translation>
    </message>
    <message>
      <source>Replacement</source>
      <translation>치환</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>삭제(&amp;D)</translation>
    </message>
    <message>
      <source>Font &amp;Substitutions</source>
      <translation>글꼴 치환(&amp;S)</translation>
    </message>
    <message>
      <source>C&amp;hange...</source>
      <translation>바꾸기(&amp;H)...</translation>
    </message>
    <message>
      <source>A&amp;dd...</source>
      <translation>더하기(&amp;D)...</translation>
    </message>
    <message>
      <source>&amp;Remove</source>
      <translation>제거(&amp;R)</translation>
    </message>
    <message>
      <source>Additional &amp;Paths</source>
      <translation>부가 경로(&amp;P)</translation>
    </message>
    <message>
      <source>Choose a Directory</source>
      <translation>폴더 선택</translation>
    </message>
    <message>
      <source>Font search paths can only be set in File > Preferences, and only when there is no document currently open. Close any open documents, then use File > Preferences > Fonts to change the font search path.</source>
      <translation>글꼴 찾기 경로는 파일 > 기본설정에서 설정할 수 있습니다. 그리고 열린 문서가 현재 없을 때만 할 수 있습니다.  어떤 열린 문서를 닫고,  글꼴 찾기 경로를 변경하기 위하여 파일 > 기본설정 > 글꼴을 사용합니다.</translation>
    </message>
  </context>
 <context>
    <name>FontPreview</name>
    <message>
        <source>Font Name</source>
        <comment>font preview</comment>
       <translation>글꼴 이름</translation>
    </message>
    <message>
        <source>Type</source>
        <comment>font preview</comment>
       <translation>형태</translation>
    </message>
    <message>
        <source>Subset</source>
        <comment>font preview</comment>
        <translation>부분집합</translation>
    </message>
    <message>
        <source>Access</source>
        <comment>font preview</comment>
       <translation>접근</translation>
    </message>
    <message>
        <source>Font Size:</source>
       <translation>글꼴 크기</translation>
    </message>
    <message>
        <source>Fonts Preview</source>
        <comment>font preview</comment>
        <translation>글꼴 미리보기</translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.ui" line="209"/>
        <source>&amp;Append</source>
       <translation>첨가하기(&amp;A)</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <comment>font preview</comment>
        <translation>Alt+O</translation>
    </message>
    <message>
        <source>Quick Search: </source>
        <translation>빠른 찾기</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.ui" line="35"/>
        <source>&amp;Search</source>
       <translation>찾기(&amp;S)</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <comment>font preview</comment>
        <translation>닫기(&amp;C)</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <comment>font preview</comment>
        <translation>Alt+C</translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="164"/>
        <source>Append selected font into Style, Font menu</source>
        <comment>font preview</comment>
        <translation>선택된 글꼴을 스타일, 글꼴 메뉴로 첨가하기</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.cpp" line="112"/>
        <source>Leave preview</source>
        <comment>font preview</comment>
        <translation>미리보기 종료</translation>
    </message>
    <message>
        <source>Typing the text here provides quick searching in the font names. E.g. &apos;bold&apos; shows all fonts with Bold in name. Searching is case insensitive.</source>
        <translation>텍스트 입력은 글꼴 이름을 빠른 찾기를 제공함. 즉  &apos;bold&apos; 입력은 bold이름을 가진 모든 글꼴을 보여준다. 찾기는 대소문자 무시된다.</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.cpp" line="114"/>
        <source>Start searching</source>
        <translation>찾기 시작</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.cpp" line="115"/>
        <source>Size of the selected font</source>
        <translation>선택 글꼴 크기</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.cpp" line="44"/>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <comment>font preview</comment>
       <translation>단지, 살아있음에 감사하며 행복을 느낍니다...</translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="97"/>
        <source>User</source>
        <comment>font preview</comment>
       <translation>사용자</translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="98"/>
        <source>System</source>
        <comment>font preview</comment>
        <translation>시스템</translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="42"/>
        <source>Font Name</source>
        <translation>글꼴이름</translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="44"/>
        <source>Type</source>
        <translation>형태</translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="45"/>
        <source>Subset</source>
        <translation>부분집합</translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="46"/>
        <source>Access</source>
       <translation>접근</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.ui" line="13"/>
        <source>Fonts Preview</source>
        <translation>글꼴 미리보기</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.ui" line="19"/>
        <source>&amp;Quick Search:</source>
        <translation>빠른 찾기(&amp;Q):</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.ui" line="38"/>
        <source>Alt+S</source>
        <translation>Alt+S</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.ui" line="90"/>
        <source>&amp;Font Size:</source>
        <translation>글꼴 크기(&amp;F):</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.ui" line="113"/>
        <source>Text</source>
        <translation>텍스트</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.ui" line="123"/>
        <source>Sample text to display</source>
        <translation>보여질 예제 텍스트</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.ui" line="130"/>
        <source>Se&amp;t</source>
        <translation>설정(&amp;T)</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.ui" line="133"/>
        <source>Alt+T</source>
        <translation>Alt+T</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.ui" line="140"/>
        <source>Reset the text</source>
        <translation>텍스트 초기화</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.ui" line="183"/>
        <source>&amp;Close</source>
        <translation>닫기(&amp;C)</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.ui" line="186"/>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.cpp" line="113"/>
        <source>Typing the text here provides quick searching in the font names. Searching is case insensitive. The given text is taken as substring.</source>
        <translation>텍스트 입력은 글꼴 이름을 빠른 찾기를 제공함. 찾기는 대소문자 무시된다. 주어진 텍스트는 부분 문자열로 취급됨</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.ui" line="45"/>
        <source>Show Extended Font Informations</source>
        <translation>확장 글꼴 정보 보이기</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreview.ui" line="143"/>
        <source>&amp;Default</source>
       <translation>기본값(&amp;D)</translation>
    </message>
</context>
<context>
    <name>FontPreviewBase</name>
    <message>
        <source>Fonts Preview</source>
        <translation>글꼴 미리보기</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>찾기(&amp;S)</translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation>Alt+S</translation>
    </message>
    <message>
        <source>Font Name</source>
       <translation>글꼴 이름</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>형태</translation>
    </message>
    <message>
        <source>Subset</source>
        <translation>부분집합</translation>
    </message>
    <message>
        <source>Access</source>
        <translation>접근</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation>글꼴 크기(&amp;F):</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>텍스트</translation>
    </message>
    <message>
        <source>Sample text to display</source>
        <translation>보여질 예제 텍스트</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>추가하기(&amp;A)</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Close</source>
       <translation>닫기(&amp;C)</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
</context>
<context>
    <name>FontPreviewPlugin</name>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreviewplugin.cpp" line="49"/>
        <source>&amp;Font Preview...</source>
        <translation>글꼴 미리보기(&amp;F)...</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreviewplugin.cpp" line="66"/>
        <source>Font Preview dialog</source>
        <translation>글꼴 미리보기 대화창</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/fontpreview/fontpreviewplugin.cpp" line="67"/>
        <source>Sorting, searching and browsing available fonts.</source>
        <translation>이용 가능한 글꼴의 정렬, 찾기</translation>
    </message>
</context>
  <context>
    <name>FontReplaceDialog</name>
    <message>
      <source>Font Substitution</source>
      <translation>글꼴 치환</translation>
    </message>
    <message>
      <source>This document contains some fonts that are not installed on your system, please choose a suitable replacement for them. Cancel will stop the document from loading.</source>
      <translation>이 문서는 시스템에 사용되지 않는 글꼴을 기지고 있으므로, 적절한 대체 글꼴을 선택하시오. 취소하면, 문서 읽기를 중지합니다.</translation>
    </message>
    <message>
      <source>Original Font</source>
      <translation>초기 글꼴</translation>
    </message>
    <message>
      <source>Substitution Font</source>
      <translation>글꼴 치환</translation>
    </message>
    <message>
      <source>Make these substitutions permanent</source>
      <translation>계속 치환</translation>
    </message>
    <message>
      <source>Cancels these font substitutions and stops loading the document.</source>
      <translation>글꼴 치환을 취소시키고, 문서 읽기를 그만 둠.</translation>
    </message>
    <message>
      <source>Enabling this tells Scribus to use these replacements for missing fonts permanently in all future layouts. This can be reverted or changed in Edit > Preferences > Fonts.</source>
      <translation>이것의 사용은  Scribus가 계속 앞으로의 작업에서 없는 글꼴에 대한 대체물로 이용할 수 있습니다. 이것은 파일 - 기본 설정 - 글꼴에서 되돌리거나 변경할 수 있습니다.</translation>
    </message>
    <message>
      <source>If you select OK, then save, these substitutions are made permanent in the document.</source>
      <translation>확인를 눌러 저장하면, 그 변환은 영구적으로 저장됩니다.</translation>
    </message>
  </context>
  <context>
    <name>GradientEditor</name>
    <message>
      <source>Position:</source>
      <translation>위치:</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Add, change or remove color stops here</source>
      <translation>색상 눈금을 더하기, 변경하기 또는 제거하기</translation>
    </message>
  </context>
  <context>
    <name>GradientVectorDialog</name>
    <message>
      <source>Gradient Vector</source>
      <translation>그라디언트 벡터</translation>
    </message>
  </context>
  <context>
    <name>GuideManager</name>
	    <message>
        <source>Manage Guides</source>
        <translation>안내선 관리</translation>
    </message>
    <message>
        <source>Horizontal Guides</source>
        <translation>수평 안내선</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>Y 위치(&amp;Y):</translation>
    </message>
    <message>
      <source>&amp;Add</source>
      <translation>더하기(&amp;A)</translation>
    </message>
    <message>
      <source>D&amp;elete</source>
      <translation>삭제(&amp;E)</translation>
    </message>
	    <message>
        <source>Vertical Guides</source>
        <translation>수직 안내선</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>X 위치(&amp;X):</translation>
    </message>
    <message>
      <source>A&amp;dd</source>
      <translation>더하기(&amp;D)</translation>
    </message>
    <message>
      <source>De&amp;lete</source>
      <translation>삭제(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Page</source>
      <translation>페이지(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;Lock Guides</source>
      <translation>안내선 잠금(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Single</source>
     <translation>개별 설정</translation>
    </message>
    <message>
      <source>Horizontals</source>
      <translation>수평선</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>Alt+E</source>
      <translation>Alt+E</translation>
    </message>
    <message>
      <source>Verticals</source>
      <translation>수직선</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>Alt+L</source>
      <translation>Alt+L</translation>
    </message>
    <message>
      <source>Appl&amp;y to All Pages</source>
      <translation>전체 페이지 적용(&amp;Y)</translation>
    </message>
    <message>
      <source>Alt+Y</source>
      <translation>Alt+Y</translation>
    </message>
    <message>
      <source>&amp;Column/Row</source>
      <translation>행/열(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Number:</source>
      <translation>숫자(&amp;N):</translation>
    </message>
    <message>
      <source>U&amp;se Gap:</source>
      <translation>간격 사용(&amp;S):</translation>
    </message>
    <message>
      <source>Alt+S</source>
      <translation>Alt+S</translation>
    </message>
    <message>
      <source>Refer To</source>
      <translation>기준</translation>
    </message>
    <message>
      <source>Alt+P</source>
      <translation>Alt+P</translation>
    </message>
    <message>
      <source>M&amp;argins</source>
      <translation>여백(&amp;A)</translation>
    </message>
    <message>
      <source>S&amp;election</source>
      <translation>선택(&amp;E):</translation>
    </message>
    <message>
      <source>Nu&amp;mber:</source>
      <translation>숫자(&amp;M):</translation>
    </message>
    <message>
      <source>Use &amp;Gap:</source>
      <translation>간격 사용(&amp;G):</translation>
    </message>
    <message>
      <source>Alt+G</source>
      <translation>Alt+G</translation>
    </message>
    <message>
      <source>&amp;Misc</source>
      <translation>안내선 삭제(&amp;M)</translation>
    </message>
    <message>
      <source>Delete all guides from the current page</source>
      <translation>현재 페이지에서 전체 안내선 제거</translation>
    </message>
    <message>
      <source>Delete Guides from Current &amp;Page</source>
      <translation>현재 페이지에서 안내선 제거(&amp;P)</translation>
    </message>
    <message>
      <source>Delete all guides from the current document</source>
      <translation>현재 문서에서 전체 안내선 제거</translation>
    </message>
    <message>
      <source>Delete Guides from &amp;All Pages</source>
      <translation>전체 문서에서 안내선 제거(&amp;A)</translation>
    </message>
    <message>
      <source>Guide Manager</source>
      <translation>안내선 관리자</translation>
    </message>
  </context>
<context>
    <name>GuideManagerBase</name>
    <message>
        <source>Manage Guides</source>
        <translation>안내선 관리</translation>
    </message>
    <message>
        <source>Guide</source>
        <translation>안내선</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>더하기(&amp;A)</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>D&amp;elete</source>
        <translation>삭제(&amp;D)</translation>
    </message>
    <message>
        <source>Alt+E</source>
        <translation>Alt+E</translation>
    </message>
    <message>
        <source>A&amp;dd</source>
        <translation>더하기(&amp;D)</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>De&amp;lete</source>
        <translation>삭제(&amp;D)</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <source>&amp;Lock Guides</source>
        <translation>안내선 잠금(&amp;L)</translation>
    </message>
    <message>
        <source>Appl&amp;y to All Pages</source>
        <translation>전체 페이지에 적용(&amp;Y)</translation>
    </message>
    <message>
        <source>Alt+Y</source>
        <translation>Alt+Y</translation>
    </message>
    <message>
        <source>&amp;Number:</source>
        <translation>번호(&amp;N):</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation>페이지(&amp;P)</translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation>Alt+P</translation>
    </message>
</context>
  <context>
    <name>HelpBrowser</name>
    <message>
      <source>&amp;Contents</source>
      <translation>내용(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Search</source>
      <translation>찾기(&amp;S)</translation>
    </message>
    <message>
      <source>Se&amp;arch</source>
      <translation>찾기(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>새 파일(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>삭제(&amp;D)</translation>
    </message>
    <message>
      <source>Book&amp;marks</source>
      <translation>북마크(&amp;M)</translation>
    </message>
    <message>
      <source>&amp;Print...</source>
      <translation>인쇄(&amp;P)...</translation>
    </message>
    <message>
      <source>&amp;Find...</source>
      <translation>찾기(&amp;F)...</translation>
    </message>
    <message>
      <source>D&amp;elete All</source>
      <translation>전체 삭제(&amp;E)</translation>
    </message>
    <message>
      <source>Scribus Help</source>
      <translation>Scribus 도움말</translation>
    </message>
    <message>
      <source>Searching is case insensitive</source>
      <translation>찾기는 대소문자를 무시</translation>
    </message>
    <message>
      <source>1</source>
      <translation>1</translation>
    </message>
    <message>
      <source>&amp;Exit</source>
      <translation>종료(&amp;E)</translation>
    </message>
    <message>
      <source>Find &amp;Next...</source>
      <translation>다음 찾기(&amp;N)...</translation>
    </message>
    <message>
      <source>Find &amp;Previous...</source>
      <translation>이전 찾기(&amp;P)...</translation>
    </message>
    <message>
      <source>&amp;Add</source>
      <translation>더하기(&amp;A)</translation>
    </message>
  </context>
<context>
    <name>HelpBrowser2</name>
    <message>
        <location filename="../ui/hb2.ui" line="30"/>
        <source>&amp;Contents</source>
        <translation>내용(&amp;C)</translation>
    </message>
    <message>
        <location filename="../ui/hb2.ui" line="49"/>
        <source>Se&amp;arch</source>
        <translation>찾기(&amp;S)</translation>
    </message>
    <message>
        <location filename="../ui/hb2.ui" line="64"/>
        <source>&amp;Search</source>
        <translation>찾기(&amp;S)</translation>
    </message>
    <message>
        <location filename="../ui/hb2.ui" line="77"/>
        <source>Book&amp;marks</source>
        <translation>북마크(&amp;M)</translation>
    </message>
</context>
  <context>
    <name>HyAsk</name>
    <message>
      <source>Possible Hyphenation</source>
      <translation>이용가능한 하이픈</translation>
    </message>
    <message>
      <source>Accept</source>
      <translation>허용</translation>
    </message>
    <message>
      <source>Skip</source>
      <translation>건너뛰기</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>취소</translation>
    </message>
    <message>
      <source>Add to the
Exception List</source>
      <translation>예외 목록에 더하기</translation>
    </message>
    <message>
      <source>Add to the
Ignore List</source>
      <translation>무시 목록에 더하기</translation>
    </message>
  </context>
  <context>
    <name>HySettings</name>
    <message>
      <source>Ignore List</source>
      <translation>무시 목록</translation>
    </message>
    <message>
      <source>Add a new Entry</source>
      <translation>새 객체 더하기</translation>
    </message>
    <message>
      <source>Edit Entry</source>
      <translation>객체 편집</translation>
    </message>
    <message>
      <source>Exception List</source>
      <translation>예외 목록</translation>
    </message>
  </context>
  <context>
    <name>ImageInfoDialog</name>
    <message>
      <source>Image Info</source>
      <translation>이미지 정보</translation>
    </message>
    <message>
      <source>General Info</source>
      <translation>일반 정보</translation>
    </message>
    <message>
      <source>Date / Time:</source>
      <translation>날짜 / 시간:</translation>
    </message>
    <message>
      <source>Has Embedded Profile:</source>
      <translation>내장 프로파일 있음:</translation>
    </message>
    <message>
      <source>Profile Name:</source>
      <translation>프로파일 이름:</translation>
    </message>
    <message>
      <source>Has Embedded Paths:</source>
      <translation>내장 경로 있음:</translation>
    </message>
    <message>
      <source>Has Layers:</source>
      <translation>레이어 있음:</translation>
    </message>
    <message>
      <source>EXIF Info</source>
      <translation>EXIF 정보</translation>
    </message>
    <message>
      <source>Artist:</source>
      <translation>아티스트:</translation>
    </message>
    <message>
      <source>Comment:</source>
      <translation>설명:</translation>
    </message>
    <message>
      <source>User Comment:</source>
      <translation>사용자 설명:</translation>
    </message>
    <message>
      <source>Camera Model:</source>
      <translation>카메라 모델:</translation>
    </message>
    <message>
      <source>Camera Manufacturer:</source>
      <translation>카메라 제조사:</translation>
    </message>
    <message>
      <source>Description:</source>
      <translation>설명:</translation>
    </message>
    <message>
      <source>Copyright:</source>
      <translation>저작권:</translation>
    </message>
    <message>
      <source>Scanner Model:</source>
      <translation>스캐너 모델:</translation>
    </message>
    <message>
      <source>Scanner Manufacturer:</source>
      <translation>스캐너 제조사:</translation>
    </message>
    <message>
      <source>Exposure time</source>
      <translation>노출 시간</translation>
    </message>
    <message>
      <source>Aperture:</source>
      <translation>鮮明に見える範囲:</translation>
    </message>
    <message>
      <source>ISO equiv.:</source>
      <translation>ISO 감도:</translation>
    </message>
  </context>
  <context>
    <name>ImportAIPlugin</name>
    <message>
      <source>Import AI...</source>
      <translation>AI 들여오기...</translation>
    </message>
    <message>
      <source>Imports Illustrator Files</source>
      <translation>일러스트레이트 파일 들여오기</translation>
    </message>
    <message>
      <source>Imports most Illustrator files into the current document,
converting their vector data into Scribus objects.</source>
      <translation>일러스트레이트 파일을 현재 문서로 읽어오기,
벡터 자료를 Scribus 객체로 변환시킴.</translation>
    </message>
    <message>
      <source>The file could not be imported</source>
      <translation>파일을 들여올 수 없습니다</translation>
    </message>
  </context>
<context>
    <name>ImportDialog</name>
    <message>
        <location filename="../smstyleimport.cpp" line="30"/>
        <source>Choose Styles</source>
        <translation>스타일 선택</translation>
    </message>
    <message>
        <location filename="../smstyleimport.cpp" line="35"/>
        <source>Available Styles</source>
        <translation>이용 가능한 스타일</translation>
    </message>
    <message>
        <location filename="../smstyleimport.cpp" line="49"/>
        <source>Paragraph Styles</source>
        <translation>문단 스타일</translation>
    </message>
</context>
  <context>
    <name>ImportPSPlugin</name>
    <message>
      <source>Import PostScript...</source>
      <translation>포스트스크립트 들여오기...</translation>
    </message>
    <message>
      <source>Imports PostScript Files</source>
      <translation>포스트스크립트 파일 들여오기</translation>
    </message>
    <message>
      <source>Imports most PostScript files into the current document,
converting their vector data into Scribus objects.</source>
      <translation>포스트스크립트 파일을 현재 문서로 들여오기,
벡터 자료를 Scribus 객체로 변환시킴.</translation>
    </message>
  </context>
  <context>
    <name>ImportXfigPlugin</name>
    <message>
      <source>Import Xfig...</source>
      <translation>Xfig 들여오기...</translation>
    </message>
    <message>
      <source>Imports Xfig Files</source>
      <translation>Xfig 파일 들여오기</translation>
    </message>
    <message>
      <source>Imports most Xfig files into the current document,
converting their vector data into Scribus objects.</source>
      <translation>Xfig 파일을 현재 문서로 들여오기,
벡터 자료를 Scribus 객체로 변환시킴.</translation>
    </message>
    <message>
      <source>All Supported Formats</source>
      <translation>전체 지원 형식</translation>
    </message>
  </context>
  <context>
    <name>Imposition</name>
    <message>
      <source>Portrait</source>
      <translation>세로 방향</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation>가로 방향</translation>
    </message>
  </context>
  <context>
    <name>ImpositionBase</name>
    <message>
      <source>Imposition</source>
      <translation>정판</translation>
    </message>
    <message>
      <source>Gri&amp;d</source>
      <translation>격자(&amp;D)</translation>
    </message>
    <message>
      <source>Copies</source>
      <translation>부수</translation>
    </message>
    <message>
      <source>Do&amp;uble sided</source>
      <translation>양면(&amp;U)</translation>
    </message>
    <message>
      <source>Alt+U</source>
      <translation>Alt+U</translation>
    </message>
    <message>
      <source>Front side</source>
      <translation>정면</translation>
    </message>
    <message>
      <source>Back side</source>
      <translation>뒷면</translation>
    </message>
    <message>
      <source>&amp;Booklet</source>
      <translation>소책자(&amp;B)</translation>
    </message>
    <message>
      <source>Pages per sheet</source>
      <translation>시트당 페이지</translation>
    </message>
    <message>
      <source>4</source>
      <translation>4</translation>
    </message>
    <message>
      <source>8</source>
      <translation>8</translation>
    </message>
    <message>
      <source>16</source>
      <translation>16</translation>
    </message>
    <message>
      <source>Pages</source>
      <translation>페이지</translation>
    </message>
    <message>
      <source>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;style type=&quot;text/css&quot;>
p, li { white-space: pre-wrap; }
&lt;/style>&lt;/head>&lt;body style=&quot; font-family:'Sans Serif'; font-size:9pt; font-weight:400; font-style:normal;&quot;>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>Separate pages with a comma, ranges with a hyphen, e.g. 1,4,9-11 to get pages 1,4,9,10,11.&lt;/p>&lt;/body>&lt;/html></source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Fold</source>
      <translation>접힘</translation>
    </message>
    <message>
      <source>Front page from</source>
      <translation>정면 페이지</translation>
    </message>
    <message>
      <source>Double sided</source>
      <translation>양면</translation>
    </message>
    <message>
      <source>Back page from</source>
      <translation>뒷면 페이지</translation>
    </message>
    <message>
      <source>Destination page</source>
      <translation>목표 페이지</translation>
    </message>
    <message>
      <source>Size</source>
      <translation>크기</translation>
    </message>
    <message>
      <source>Orientation</source>
      <translation>방향</translation>
    </message>
    <message>
      <source>Width</source>
      <translation>너비</translation>
    </message>
    <message>
      <source>Height</source>
      <translation>높이</translation>
    </message>
    <message>
      <source>Preview</source>
      <translation>미리보기</translation>
    </message>
    <message>
      <source>Refresh preview</source>
      <translation>미리보기 업데이트</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>완료(&amp;O)</translation>
    </message>
    <message>
      <source>Alt+G</source>
      <translation>Alt+G</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>취소(&amp;C)</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
  </context>
  <context>
    <name>ImpositionPlugin</name>
    <message>
      <source>&amp;Imposition...</source>
      <translation>정판...(&amp;I)</translation>
    </message>
    <message>
      <source>Imposition dialog</source>
      <translation>정판 대화창</translation>
    </message>
    <message>
      <source>Imposition on grids, booklets and folds</source>
      <translation>격자,소책자와 접힘 정판</translation>
    </message>
  </context>
  <context>
    <name>InsPage</name>
    <message>
      <source>Insert Page</source>
      <translation>페이지 삽입</translation>
    </message>
    <message>
      <source>&amp;Insert</source>
      <translation>삽입(&amp;I)</translation>
    </message>
    <message>
      <source>Page(s)</source>
      <translation>페이지</translation>
    </message>
    <message>
      <source>before Page</source>
      <translation>페이지 이전</translation>
    </message>
    <message>
      <source>after Page</source>
      <translation>페이지 이후</translation>
    </message>
    <message>
      <source>at End</source>
      <translation>마지막에</translation>
    </message>
    <message>
      <source>Master Pages</source>
      <translation>마스터 페이지</translation>
    </message>
    <message>
      <source>&amp;Master Page:</source>
      <translation>마스터 페이지(&amp;M):</translation>
    </message>
    <message>
      <source>Page Size</source>
      <translation>페이지 크기</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>크기(&amp;S):</translation>
    </message>
    <message>
      <source>Orie&amp;ntation:</source>
      <translation>방향(&amp;N):</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation>세로 방향</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation>가로 방향</translation>
    </message>
    <message>
      <source>&amp;Width:</source>
      <translation>너비(&amp;W):</translation>
    </message>
    <message>
      <source>&amp;Height:</source>
      <translation>높이(&amp;H):</translation>
    </message>
    <message>
      <source>Move Objects with their Page</source>
      <translation>페이지의 객체 이동</translation>
    </message>
  </context>
  <context>
    <name>InsertAFrame</name>
    <message>
      <source>Insert A Frame</source>
      <translation>프레임 삽입</translation>
    </message>
    <message>
      <source>T&amp;ype</source>
      <translation>형태(&amp;Y)</translation>
    </message>
    <message>
      <source>&amp;Text Frame</source>
      <translation>텍스트 프레임(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;Image Frame</source>
      <translation>이미지 프레임(&amp;I)</translation>
    </message>
    <message>
      <source>&amp;Location</source>
      <translation>위치(&amp;L)</translation>
    </message>
    <message>
      <source>Page Placement</source>
      <translation>페이지 위치</translation>
    </message>
    <message>
      <source>Current Page</source>
      <translation>현재 페이지</translation>
    </message>
    <message>
      <source>All Pages</source>
      <translation>전체 페이지</translation>
    </message>
    <message>
      <source>...</source>
      <translation>...</translation>
    </message>
    <message>
      <source>Position of Frame</source>
      <translation>프레임 위치</translation>
    </message>
    <message>
      <source>Top Left of Margins</source>
      <translation>여백 왼쪽 위</translation>
    </message>
    <message>
      <source>Top Left of Page</source>
      <translation>페이지 왼쪽 위</translation>
    </message>
    <message>
      <source>Top Left of Bleed</source>
      <translation>물림재단 왼쪽 위</translation>
    </message>
    <message>
      <source>X:</source>
      <translation>X:</translation>
    </message>
    <message>
      <source>Y:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <source>&amp;Size</source>
      <translation>크기(&amp;S)</translation>
    </message>
    <message>
      <source>Same as the Page Margins</source>
      <translation>페이지 여백과 같음</translation>
    </message>
    <message>
      <source>Same as the Page</source>
      <translation>페이지와 같음</translation>
    </message>
    <message>
      <source>Same as the Bleed</source>
      <translation>물림재단과 같음</translation>
    </message>
    <message>
      <source>Same as the Imported Image</source>
      <translation>들여온 이미지와 같음</translation>
    </message>
    <message>
      <source>Height:</source>
      <translation>높이:</translation>
    </message>
    <message>
      <source>Width:</source>
      <translation>너비:</translation>
    </message>
    <message>
      <source>&amp;Options</source>
      <translation>설정(&amp;O)</translation>
    </message>
    <message>
      <source>Source Image:</source>
      <translation>소스 이미지:</translation>
    </message>
    <message>
      <source>There are no options for this type of frame</source>
      <translation>프레임 형식을 위한 설정이 없습니다.</translation>
    </message>
    <message>
      <source>Columns:</source>
      <translation>열:</translation>
    </message>
    <message>
      <source>Gap:</source>
      <translation>단 간격:</translation>
    </message>
    <message>
      <source>Link Created Frames</source>
      <translation>생성된 프레임 링크</translation>
    </message>
    <message>
      <source>Source Document:</source>
      <translation>소스 문서:</translation>
    </message>
    <message>
      <source>Range of Pages</source>
      <translation>페이지 범위</translation>
    </message>
    <message>
      <source>Custom Position</source>
      <translation>사용자 위치</translation>
    </message>
    <message>
      <source>Custom Size</source>
      <translation>사용자 크기</translation>
    </message>
    <message>
      <source>Link to Existing Frame</source>
      <translation>기존 프레임 링크</translation>
    </message>
  </context>
  <context>
    <name>InsertAFrameBase</name>
    <message>
        <source>&amp;Text Frame</source>
        <translation>텍스트 프레임(&amp;T)</translation>
    </message>
    <message>
        <source>Alt+T</source>
        <translation>Alt+T</translation>
    </message>
    <message>
        <source>&amp;Image Frame</source>
        <translation>이미지 프레임(&amp;I)</translation>
    </message>
    <message>
        <source>Alt+I</source>
        <translation>Alt+I</translation>
    </message>
    <message>
        <source>T&amp;able</source>
        <translation>표(&amp;A)</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>다각형</translation>
    </message>
    <message>
        <source>X:</source>
        <translation>X:</translation>
    </message>
    <message>
        <source>Y:</source>
        <translation>Y:</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>크기(&amp;S)</translation>
    </message>
    <message>
        <source>Height:</source>
        <translation>높이:</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation>너비:</translation>
    </message>
    <message>
        <source>&amp;Options</source>
        <translation>설정(&amp;O)</translation>
    </message>
    <message>
        <source>Source Image:</source>
        <translation>소스 이미지:</translation>
    </message>
    <message>
        <source>&amp;Select File...</source>
        <translation>파일 선택(&amp;S)...</translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation>Alt+S</translation>
    </message>
    <message>
        <source>Columns:</source>
        <translation>행:</translation>
    </message>
    <message>
        <source>Gap:</source>
        <translation>간격:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>확인(&amp;O)</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>취소(&amp;C)</translation>
    </message>
    <message>
        <source>All Pages</source>
        <translation>전체 페이지</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
</context>
  <context>
    <name>InsertTable</name>
    <message>
      <source>Insert Table</source>
      <translation>표 삽입</translation>
    </message>
    <message>
      <source>Number of rows:</source>
      <translation>삽입 행 수:</translation>
    </message>
    <message>
      <source>Number of columns:</source>
      <translation>삽입 열 수:</translation>
    </message>
  </context>
  <context>
    <name>JavaDocs</name>
    <message>
      <source>Edit JavaScripts</source>
      <translation>자바스크립 편집</translation>
    </message>
    <message>
      <source>&amp;Edit...</source>
      <translation>편집(&amp;E)...</translation>
    </message>
    <message>
      <source>&amp;Add...</source>
      <translation>더하기(&amp;A)...</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>삭제(&amp;D)</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>닫기(&amp;C)</translation>
    </message>
    <message>
      <source>Adds a new Script, predefines a function with the same name. If you want to use this script as an &quot;Open Action&quot; script be sure not to change the name of the function.</source>
      <translation>같은 이름을 가진 새로운 스크립트, 이미 정의된 함수를 더합니다.  스크립트를 &quot;Open Action&quot; 스크립트로 사용하려면 함수 이름을 변경하지 않도록 하여야 합니다.</translation>
    </message>
    <message>
      <source>&amp;New Script:</source>
      <translation>새 스크립트(&amp;N):</translation>
    </message>
    <message>
      <source>New Script</source>
      <translation>새 스크립트</translation>
    </message>
    <message>
      <source>Do you really want to delete this script?</source>
      <translation>이 스크립트를 정말로 삭제하시겠습니까?</translation>
    </message>
  </context>
<context>
    <name>KeyManager</name>
    <message>
        <source>Action</source>
        <translation>실행</translation>
    </message>
    <message>
        <source>Current Key</source>
        <translation>현재 키</translation>
    </message>
    <message>
        <source>Select a Key for this Action</source>
        <translation>실행 위해 키 선택</translation>
    </message>
    <message>
        <source>&amp;No Key</source>
        <translation>키 없음(&amp;N)</translation>
    </message>
    <message>
        <source>&amp;User Defined Key</source>
        <translation>사용자 정의 키(&amp;U)</translation>
    </message>
    <message>
        <source>ALT+SHIFT+T</source>
        <translation>ALT+SHIFT+T</translation>
    </message>
    <message>
        <source>Set &amp;Key</source>
        <translation>키 설정(&amp;K)</translation>
    </message>
    <message>
        <source>Loadable Shortcut Sets</source>
        <translation>읽을 수 있는 단축키 설정</translation>
    </message>
    <message>
        <source>&amp;Load</source>
        <translation>읽어오기(&amp;L)</translation>
    </message>
    <message>
        <source>&amp;Import...</source>
        <translation>들여오기(&amp;I)...</translation>
    </message>
    <message>
        <source>&amp;Export...</source>
        <translation>내보내기(&amp;E)...</translation>
    </message>
    <message>
        <source>&amp;Reset</source>
        <translation>초기화(&amp;R)</translation>
    </message>
    <message>
        <source>Keyboard shortcut sets available to load</source>
        <translation>읽어오기 가능한 키보드 단축키 설정</translation>
    </message>
    <message>
        <source>Load the selected shortcut set</source>
        <translation>선택한 단축키 설정 읽어오기</translation>
    </message>
    <message>
        <source>Import a shortcut set into the current configuration</source>
        <translation>단축키 설정을 현재 설정으로 들여오기</translation>
    </message>
    <message>
        <source>Export the current shortcuts into an importable file</source>
        <translation>현재 단축키를 파일로 내보내기</translation>
    </message>
    <message>
        <source>Reload the default Scribus shortcuts</source>
        <translation>기본 Scribus 단축키 다시 읽어오기</translation>
    </message>
    <message>
        <source>Alt</source>
        <translation>Alt</translation>
    </message>
    <message>
        <source>Ctrl</source>
        <translation>Ctrl</translation>
    </message>
    <message>
        <source>Shift</source>
        <translation>Shift</translation>
    </message>
    <message>
        <source>Shift+</source>
        <translation>Shift+</translation>
    </message>
    <message>
        <source>Alt+</source>
        <translation>Alt+</translation>
    </message>
    <message>
        <source>Ctrl+</source>
        <translation>Ctrl+</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>경고</translation>
    </message>
    <message>
        <source>This Key Sequence is already in use</source>
        <translation>이 키는 벌써 이용 중입니다</translation>
    </message>
    <message>
        <source>Key Set XML Files (*.ksxml)</source>
        <translation>키 모음 XML 파일 (*.ksxml)</translation>
    </message>
    <message>
        <source>This key sequence is already in use</source>
        <translation>이 키가 벌써 이용 중입니다</translation>
    </message>
    <message>
        <source>Meta</source>
        <translation>메타</translation>
    </message>
    <message>
        <source>Meta+</source>
        <translation>메타+</translation>
    </message>
</context>
  <context>
    <name>LatexEditor</name>
    <message>
      <source>Enter Code:</source>
      <translation>코드 입력:</translation>
    </message>
    <message>
      <source>Update</source>
      <translation>업데이트</translation>
    </message>
    <message>
      <source>Revert</source>
      <translation>거꾸로</translation>
    </message>
    <message>
      <source>Program Messages:</source>
      <translation>프로그램 메세지:</translation>
    </message>
    <message>
      <source>Status: Unknown</source>
      <translation>상태: 미정</translation>
    </message>
    <message>
      <source>Kill Program</source>
      <translation>프로그램을 삭제</translation>
    </message>
    <message>
      <source>Options</source>
      <translation>설정</translation>
    </message>
    <message>
      <source>Resolution:</source>
      <translation>해상도:</translation>
    </message>
    <message>
      <source>Automatic</source>
      <translation>자동</translation>
    </message>
    <message>
      <source> DPI</source>
      <translation> DPI</translation>
    </message>
    <message>
      <source>Program:</source>
      <translation>프로그램: </translation>
    </message>
    <message>
      <source>Use Preamble</source>
      <translation>머리말 사용</translation>
    </message>
    <message>
      <source>Editor</source>
      <translation>편집기</translation>
    </message>
  </context>
  <context>
    <name>LayerPalette</name>
    <message>
      <source>Delete Layer</source>
      <translation>레이어 삭제</translation>
    </message>
    <message>
      <source>Do you want to delete all objects on this layer too?</source>
      <translation>이 레이어에서 전체 객체를 지우겠습니까?</translation>
    </message>
    <message>
      <source>Layers</source>
      <translation>레이어</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>이름</translation>
    </message>
    <message>
      <source>Add a new layer</source>
      <translation>새 레이어 더하기</translation>
    </message>
    <message>
      <source>Delete layer</source>
      <translation>레이어 삭제</translation>
    </message>
    <message>
      <source>Raise layer</source>
      <translation>레이어 위로</translation>
    </message>
    <message>
      <source>Lower layer</source>
      <translation>레이어 아래로</translation>
    </message>
    <message>
      <source>Opacity:</source>
      <translation>불투명도:</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Blend Mode:</source>
      <translation>혼합 모드:</translation>
    </message>
    <message>
      <source>Normal</source>
      <translation>보통</translation>
    </message>
    <message>
      <source>Darken</source>
      <translation>어둡게</translation>
    </message>
    <message>
      <source>Lighten</source>
      <translation>밝게</translation>
    </message>
    <message>
      <source>Multiply</source>
      <translation>곱하기</translation>
    </message>
    <message>
      <source>Screen</source>
      <translation>화면</translation>
    </message>
    <message>
      <source>Overlay</source>
      <translation>중첩</translation>
    </message>
    <message>
      <source>Hard Light</source>
      <translation>아주 밝게</translation>
    </message>
    <message>
      <source>Soft Light</source>
      <translation>중간 밝게</translation>
    </message>
    <message>
      <source>Difference</source>
      <translation>차이</translation>
    </message>
    <message>
      <source>Color Dodge</source>
      <translation>피하기</translation>
    </message>
    <message>
      <source>Color Burn</source>
      <translation>태우기</translation>
    </message>
    <message>
      <source>Exclusion</source>
      <translation>제외</translation>
    </message>
    <message>
      <source>Hue</source>
      <translation>색조</translation>
    </message>
    <message>
      <source>Saturation</source>
      <translation>채도</translation>
    </message>
    <message>
      <source>Color</source>
      <translation>색상</translation>
    </message>
    <message>
      <source>Luminosity</source>
      <translation>광도</translation>
    </message>
    <message>
      <source>Duplicates the current layer</source>
      <translation>현재 레이어 복제</translation>
    </message>
    <message>
      <source>Color of the Layer Indicator - Each layer has a color assigned to display on the canvas when layer indicators are enabled. You can double click to edit the color. </source>
      <translation>레이어 지시계의 색상 - 레이어 지시자가 캔버스상에 나타낼 수 있는 색상을 가지고 있습니다. 색상을 편집하기 위하여 더블 클릭을 하십시오.</translation>
    </message>
    <message>
      <source>Make Layer Visible - Uncheck to hide the layer from the display </source>
      <translation>레이어를 볼 수 있도록 합니다. - 화면에서 레이어를 숨기기 위하여 체크하지 않습니다.</translation>
    </message>
    <message>
      <source>Print Layer - Uncheck to disable printing. </source>
      <translation>인쇄 레이어 - 인쇄하지 않을 경우 체크하지 않습니다.</translation>
    </message>
    <message>
      <source>Lock or Unlock Layer - Unchecked is unlocked </source>
      <translation>레이어 잠금 또는 해제 - 체크되지 않으면 잠금해제 상태임</translation>
    </message>
    <message>
      <source>Text flows around objects in lower Layers - Enabling this forces text frames to flow around other objects, even in layers below</source>
      <translation>아래 레이어에서 객체 주변의 텍스트 흐름 - 비록 레이어들 아래에서 조차 이것은 텍스트 프레임이 다른 객체 주변에 흐름을 만들 수 있습니다.</translation>
    </message>
    <message>
      <source>Outline Mode - Toggles the 'wireframe' display of objects to speed the display of very complex objects.</source>
      <translation>윤곽선 모드 - 아주 복잡한 객체를 빨리 보기 위하여 객체의 줄 프레임 보기를 토글시킵니다.</translation>
    </message>
    <message>
      <source>Name of the Layer - Double clicking on the name of a layer enabled editing</source>
      <translation>레이어 이름 - 편집 가능한 레어어의 이름을 더블 클릭합니다.</translation>
    </message>
  </context>
  <context>
    <name>LegacyMode</name>
    <message>
      <source>Open</source>
      <translation>열기</translation>
    </message>
    <message>
      <source>All Supported Formats</source>
      <translation>전체 지원 형식</translation>
    </message>
  </context>
  <context>
    <name>LensDialogBase</name>
    <message>
      <source>Optical Lens</source>
      <translation>광학 렌즈</translation>
    </message>
    <message>
      <source>Add Lens</source>
      <translation>렌즈 더하기</translation>
    </message>
    <message>
      <source>Remove Lens</source>
      <translation>렌즈 삭제</translation>
    </message>
    <message>
      <source>+</source>
      <translation>+</translation>
    </message>
    <message>
      <source>-</source>
      <translation>-</translation>
    </message>
    <message>
      <source>Lens Parameters</source>
      <translation>렌즈 매개변수</translation>
    </message>
    <message>
      <source>X Pos:</source>
      <translation>X위치:</translation>
    </message>
    <message>
      <source>Y Pos:</source>
      <translation>Y위치:</translation>
    </message>
    <message>
      <source>Radius:</source>
      <translation>반경:</translation>
    </message>
    <message>
      <source>Strength:</source>
      <translation>힘:</translation>
    </message>
    <message>
      <source>Magnification Lens</source>
      <translation>확대 렌즈</translation>
    </message>
    <message>
      <source>Fish Eye Lens</source>
      <translation>어안 렌즈</translation>
    </message>
  </context>
  <context>
    <name>LensEffectsPlugin</name>
    <message>
      <source>Lens Effects...</source>
      <translation>렌즈 효과...</translation>
    </message>
    <message>
      <source>Path Tools</source>
      <translation>경로 도구</translation>
    </message>
    <message>
      <source>Lens Effects</source>
      <translation>효과</translation>
    </message>
    <message>
      <source>Apply fancy lens effects</source>
      <translation>팬시 렌즈 효과 적용</translation>
    </message>
  </context>
<context>
    <name>LensEffectsPlugin</name>
    <message>
        <location filename="../../scribus/plugins/tools/lenseffects/lenseffects.cpp" line="66"/>
        <source>Lens Effects...</source>
        <translation>렌즈 효과...</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/tools/lenseffects/lenseffects.cpp" line="70"/>
        <source>Path Tools</source>
        <translation>경로 도구</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/tools/lenseffects/lenseffects.cpp" line="90"/>
        <source>Lens Effects</source>
        <translation>렌즈 효과</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/tools/lenseffects/lenseffects.cpp" line="91"/>
        <source>Apply fancy lens effects</source>
        <translation>팬시 렌즈 효과 적용</translation>
    </message>
</context>
<context>
    <name>LineFormate</name>
    <message>
        <location filename="../lineformats.cpp" line="33"/>
        <source>Edit Line Styles</source>
        <translation>선 스타일 편집</translation>
    </message>
    <message>
        <location filename="../lineformats.cpp" line="49"/>
        <source>&amp;Import</source>
        <translation>들여오기</translation>
    </message>
    <message>
        <location filename="../lineformats.cpp" line="52"/>
        <source>&amp;New</source>
        <translation>새 파일(&amp;N)</translation>
    </message>
    <message>
        <location filename="../lineformats.cpp" line="55"/>
        <source>&amp;Edit</source>
        <translation>편집(&amp;E)</translation>
    </message>
    <message>
        <location filename="../lineformats.cpp" line="60"/>
        <source>D&amp;uplicate</source>
        <translation>복제(&amp;U)</translation>
    </message>
    <message>
        <location filename="../lineformats.cpp" line="64"/>
        <source>&amp;Delete</source>
        <translation>삭제(&amp;D)</translation>
    </message>
    <message>
        <location filename="../lineformats.cpp" line="68"/>
        <source>&amp;Save</source>
        <translation>저장(&amp;S)</translation>
    </message>
    <message>
        <location filename="../lineformats.cpp" line="125"/>
        <source>Copy of %1</source>
        <translation>%1 복사</translation>
    </message>
    <message>
        <location filename="../lineformats.cpp" line="154"/>
        <source>New Style</source>
        <translation>새 스타일</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>경고</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation>이 스타일을 삭제하겠습니까?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>아니오(&amp;N)</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>예(&amp;Y)</translation>
    </message>
    <message>
        <location filename="../lineformats.cpp" line="216"/>
        <source>Open</source>
        <translation>열기</translation>
    </message>
    <message>
        <location filename="../lineformats.cpp" line="216"/>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>문서 (*.sla *.sla.gz *.scd *.scd.gz)전체 파일 (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>문서 (*.sla *.scd);;전체 파일 (*)</translation>
    </message>
    <message>
        <location filename="../lineformats.cpp" line="194"/>
        <source>Do you really want to delete this style?</source>
        <translation>이 스타일을 삭제하겠습니까?</translation>
    </message>
</context>
<context>
    <name>LineStyleW</name>
    <message>
        <location filename="../smlinestylew.ui" line="184"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location filename="../smlinestylew.ui" line="208"/>
        <source>Line Width:</source>
        <translation>선 너비:</translation>
    </message>
</context>
<context>
    <name>LineStyleWBase</name>
    <message>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation>선 너비:</translation>
    </message>
</context>
<context>
    <name>LineStyleWidget</name>
    <message>
        <location filename="../smlinestyle.cpp" line="180"/>
        <source> pt</source>
        <translation> 포인트</translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="52"/>
        <source>Flat Cap</source>
        <translation>평면형</translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="53"/>
        <source>Square Cap</source>
        <translation>사각형</translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="54"/>
        <source>Round Cap</source>
        <translation>둥근형</translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="56"/>
        <source>Miter Join</source>
        <translation>미터 결합</translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="57"/>
        <source>Bevel Join</source>
        <translation>경사 결합</translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="58"/>
        <source>Round Join</source>
        <translation>둥근 결합</translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation>실선</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation>대시선</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation>점선</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation>대시점선</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation>대시점점선</translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="70"/>
        <source>Add a new line</source>
        <translation>새 선 더하기</translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="71"/>
        <source>Remove a line</source>
        <translation>선 제거</translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="72"/>
        <source>Line style</source>
        <translation>선 스타일</translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="73"/>
        <source>Line width</source>
        <translation>선 너비</translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="74"/>
        <source>End style</source>
        <translation>끝 스타일</translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="75"/>
        <source>Join style</source>
        <translation>결합 스타일</translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="76"/>
        <source>Line color</source>
        <translation>선 색상</translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="77"/>
        <source>Line shade</source>
        <translation>선 음영</translation>
    </message>
</context>
  <context>
    <name>LoadSavePlugin</name>
    <message>
      <source>All Files (*)</source>
      <translation>전체 파일 (*)</translation>
    </message>
    <message>
      <source>No File Loader Plugins Found</source>
      <translation>파일 읽기 플러그인이 없음</translation>
    </message>
  </context>
  <context>
    <name>LoremManager</name>
    <message>
      <source>Select Lorem Ipsum</source>
      <translation>Lorem Ipsum 선택</translation>
    </message>
    <message>
      <source>Author:</source>
      <translation>저작자:</translation>
    </message>
    <message>
      <source>Get More:</source>
      <translation>더 많이 얻기:</translation>
    </message>
    <message>
      <source>XML File:</source>
      <translation>XML 파일:</translation>
    </message>
    <message>
      <source>Lorem Ipsum</source>
      <translation>Lorem Ipsum</translation>
    </message>
    <message>
      <source>Paragraphs:</source>
      <translation>문단:</translation>
    </message>
    <message>
      <source>Alt+O</source>
      <translation>Alt+O</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
    <message>
      <source>Standard Lorem Ipsum</source>
      <translation>표준 Lorem Ipsum</translation>
    </message>
    <message>
      <source>Random Paragraphs</source>
      <translation>무작위 문단</translation>
    </message>
    <message>
      <source>Number of paragraphs of selected sample text to insert</source>
      <translation>삽입될 선택 샘플 텍스트의 문단 갯수</translation>
    </message>
    <message>
      <source>List of languages available to insert sample text in</source>
      <translation>샘플 텍스트에 삽입 가능한 언어 목록</translation>
    </message>
  </context>
  <context>
    <name>MarginDialog</name>
    <message>
      <source>Manage Page Properties</source>
      <translation>페이지 속성 관리</translation>
    </message>
    <message>
      <source>Page Size</source>
      <translation>페이지 크기</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>크기(&amp;S):</translation>
    </message>
    <message>
      <source>Orie&amp;ntation:</source>
      <translation>방향(&amp;N):</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation>세로 방향</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation>가로 방향</translation>
    </message>
    <message>
      <source>&amp;Width:</source>
      <translation>너비(&amp;W):</translation>
    </message>
    <message>
      <source>&amp;Height:</source>
      <translation>높이(&amp;H):</translation>
    </message>
    <message>
      <source>Move Objects with their Page</source>
      <translation>페이지와 함께 객체 이동</translation>
    </message>
    <message>
      <source>Type:</source>
      <translation>형태:</translation>
    </message>
    <message>
      <source>Margin Guides</source>
      <translation>여백 안내선</translation>
    </message>
    <message>
      <source>Other Settings</source>
      <translation>기타 설정</translation>
    </message>
    <message>
      <source>Master Page:</source>
      <translation>마스터 페이지:</translation>
    </message>
    <message>
      <source>Size of the inserted pages, either a standard or custom size.</source>
      <translation>삽입된 페이지 크기: 표준 또는 사용자 크기.</translation>
    </message>
    <message>
      <source>Orientation of the page(s) to be inserted</source>
      <translation>삽입 페이지 방향</translation>
    </message>
    <message>
      <source>Width of the page(s) to be inserted</source>
      <translation>삽입 페이지 너비</translation>
    </message>
    <message>
      <source>Height of the page(s) to be inserted</source>
      <translation>삽입 페이지 높이</translation>
    </message>
    <message>
      <source>When inserting a new page between others, move objects with their current pages. This is the default action.</source>
      <translation>다른 페이지 사이에 새로운 페이지 삽입시, 현재 페이지와 객체를 이동. 이것은 기본 작동입니다.</translation>
    </message>
  </context>
  <context>
    <name>MarginWidget</name>
    <message>
      <source>Preset Layouts:</source>
      <translation>배치 사전 조정:</translation>
    </message>
    <message>
      <source>&amp;Bottom:</source>
      <translation>아래(&amp;B):</translation>
    </message>
    <message>
      <source>&amp;Top:</source>
      <translation>위(&amp;T):</translation>
    </message>
    <message>
      <source>&amp;Right:</source>
      <translation>오른쪽(&amp;R):</translation>
    </message>
    <message>
      <source>&amp;Left:</source>
      <translation>왼쪽(&amp;L):</translation>
    </message>
    <message>
      <source>Apply the margin changes to all existing pages in the document</source>
      <translation>문서의 전체 기존 마스터 페이지에 여백 변경을 적용</translation>
    </message>
    <message>
      <source>Distance between the top margin guide and the edge of the page</source>
      <translation>위 여백 안내선과 페이지 가장자리 사이의 거리</translation>
    </message>
    <message>
      <source>Distance between the bottom margin guide and the edge of the page</source>
      <translation>아래 여백 안내선과 페이지 가장자리 사이의 거리</translation>
    </message>
    <message>
      <source>&amp;Inside:</source>
      <translation>왼쪽(&amp;I):</translation>
    </message>
    <message>
      <source>O&amp;utside:</source>
      <translation>오른쪽(&amp;U):</translation>
    </message>
    <message>
      <source>Printer Margins...</source>
      <translation>프린터 여백...</translation>
    </message>
    <message>
      <source>Import the margins for the selected page size from the available printers.</source>
      <translation>이용가능한 프린터에서 선택된 페이지 크기에 맞는 여백 들여오기.</translation>
    </message>
    <message>
      <source>Apply settings to:</source>
      <translation>설정 적용:</translation>
    </message>
    <message>
      <source>All Document Pages</source>
      <translation>전체 문서 페이지</translation>
    </message>
    <message>
      <source>All Master Pages</source>
      <translation>전체 마스터 페이지</translation>
    </message>
    <message>
      <source>Apply the margin changes to all existing master pages in the document</source>
      <translation>문서에서 전체 기존 마스터 페이지에 여백 변경을 적용</translation>
    </message>
    <message>
      <source>Margin Guides</source>
      <translation>여백 안내선</translation>
    </message>
    <message>
      <source>Top:</source>
      <translation>위:</translation>
    </message>
    <message>
      <source>Bottom:</source>
      <translation>아래:</translation>
    </message>
    <message>
      <source>Distance for bleed from the top of the physical page</source>
      <translation>페이지 위부터 물림재단 거리</translation>
    </message>
    <message>
      <source>Distance for bleed from the bottom of the physical page</source>
      <translation>페이지 아래부터 물림재단 거리</translation>
    </message>
    <message>
      <source>Distance for bleed from the left of the physical page</source>
      <translation>페이지 왼쪽부터 물림재단 거리</translation>
    </message>
    <message>
      <source>Distance for bleed from the right of the physical page</source>
      <translation>페이지 오른쪽쪽부터 물림재단 거리</translation>
    </message>
    <message>
      <source>Bleeds</source>
      <translation>물림재단</translation>
    </message>
    <message>
      <source>Inside:</source>
      <translation>왼쪽:</translation>
    </message>
    <message>
      <source>Outside:</source>
      <translation>오른쪽:</translation>
    </message>
    <message>
      <source>Left:</source>
      <translation>왼쪽:</translation>
    </message>
    <message>
      <source>Right:</source>
      <translation>오른쪽:</translation>
    </message>
    <message>
      <source>Distance between the left margin guide and the edge of the page. If a double-sided, 3 or 4-fold layout is selected, this margin space can be used to achieve the correct margins for binding</source>
      <translation>왼쪽 여백 안내선과 페이지 모서리 사이의 거리. 두 쪽,세 쪽,네 쪽을 선택할 경우 이 여백 공간은 제본하기 위한 정확한 여백을 만들기 위하여 사용.</translation>
    </message>
    <message>
      <source>Distance between the right margin guide and the edge of the page. If a double-sided, 3 or 4-fold layout is selected, this margin space can be used to achieve the correct margins for binding</source>
      <translation>오른쪽 여백 안내선과 페이지 모서리 사이의 거리. 두 쪽,세 쪽,네 쪽을 선택할 경우 이 여백 공간은 제본하기 위한 정확한 여백을 만들기 위하여 사용.</translation>
    </message>
  </context>
  <context>
    <name>MasterPagesPalette</name>
    <message>
      <source>Edit Master Pages</source>
      <translation>마스터 페이지 편집</translation>
    </message>
    <message>
      <source>Duplicate the selected master page</source>
      <translation>선택된 마스터 페이지 복제</translation>
    </message>
    <message>
      <source>Delete the selected master page</source>
      <translation>선택된 마스터 페이지 삭제</translation>
    </message>
    <message>
      <source>Add a new master page</source>
      <translation>새 마스터 페이지 더하기</translation>
    </message>
    <message>
      <source>Import master pages from another document</source>
      <translation>다른 문서에서 마스터 페이지 들여오기</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>경고</translation>
    </message>
    <message>
      <source>Do you really want to delete this master page?</source>
      <translation>이 마스터 페이지를 정말로 삭제하시겠습니까?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>아니오(&amp;N)</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>예(&amp;Y)</translation>
    </message>
    <message>
      <source>&amp;Name:</source>
      <translation>이름(&amp;N):</translation>
    </message>
    <message>
      <source>New Master Page</source>
      <translation>새 마스터 페이지</translation>
    </message>
    <message>
      <source>Name:</source>
      <translation>이름:</translation>
    </message>
    <message>
      <source>New MasterPage</source>
      <translation>새 마스터 페이지</translation>
    </message>
    <message>
      <source>Copy #%1 of </source>
      <translation>#%1 복사</translation>
    </message>
    <message>
	    <source>Normal</source>
        <translation>보통</translation>
    </message>
    <message>
        <location filename="../../scribus/masterpagepalette.cpp" line="79"/>
        <source>Duplicate the selected master page</source>
        <translation>선택된 마스터 페이지를 복제합니다</translation>
    </message>
    <message>
        <location filename="../../scribus/masterpagepalette.cpp" line="80"/>
        <source>Delete the selected master page</source>
        <translation>선택된 마스터 페이지를 삭제합니다</translation>
    </message>
    <message>
        <location filename="../../scribus/masterpagepalette.cpp" line="81"/>
        <source>Add a new master page</source>
        <translation>새 마스터 페이지를 더합니다.</translation>
    </message>
    <message>
        <location filename="../../scribus/masterpagepalette.cpp" line="82"/>
        <source>Import master pages from another document</source>
        <translation>다른 문서에서 마스터 페이지를 들여옵니다</translation>
    </message>
    <message>
      <source>New Master Page %1</source>
      <translation>새 마스터 페이지 %1</translation>
    </message>
    <message>
      <source>Unable to Rename Master Page</source>
      <translation>마스터 페이지의 이름을 변경할 수 없음</translation>
    </message>
    <message>
      <source>The Normal page is not allowed to be renamed.</source>
      <translation>보통 페이지 이름을 변경할 수 없습니다.</translation>
    </message>
    <message>
      <source>Rename Master Page</source>
      <translation>마스터 페이지 다른 이름으로</translation>
    </message>
    <message>
      <source>New Name:</source>
      <translation>새 이름:</translation>
    </message>
    <message>
      <source>Copy #%1 of %2</source>
      <translation>#% 1을 %2에 복사</translation>
    </message>
  </context>
<context>
    <name>Mdup</name>
    <message>
        <location filename="../mdup.cpp" line="29"/>
        <source>Multiple Duplicate</source>
        <translation>다수 복제</translation>
    </message>
    <message>
        <location filename="../mdup.cpp" line="48"/>
        <source>&amp;Number of Copies:</source>
        <translation>복사 갯수(&amp;N):</translation>
    </message>
    <message>
        <location filename="../mdup.cpp" line="50"/>
        <source>&amp;Horizontal Shift:</source>
        <translation>수평 이동(&amp;H):</translation>
    </message>
    <message>
        <location filename="../mdup.cpp" line="52"/>
        <source>&amp;Vertical Shift:</source>
        <translation>수직 이동(&amp;V):</translation>
    </message>
</context>
  <context>
    <name>Measurements</name>
    <message>
      <source>Distances</source>
      <translation>거리</translation>
    </message>
	    <message>
        <location filename="../measurements.cpp" line="49"/>
        <source>pt</source>
        <translation>포인트</translation>
    </message>
    <message>
      <source>X1:</source>
      <translation>X1:</translation>
    </message>
    <message>
      <source>Y1:</source>
      <translation>Y1:</translation>
    </message>
    <message>
      <source>X2:</source>
      <translation>X2:</translation>
    </message>
    <message>
      <source>Y2:</source>
      <translation>Y2:</translation>
    </message>
    <message>
      <source>DX:</source>
      <translation>거리X:</translation>
    </message>
    <message>
      <source>DY:</source>
      <translation>거리Y:</translation>
    </message>
    <message>
      <source>Angle:</source>
      <translation>각도:</translation>
    </message>
    <message>
      <source>Length:</source>
      <translation>길이:</translation>
    </message>
    <message>
      <source> °</source>
      <translation> 도</translation>
    </message>
  </context>
  <context>
    <name>MergeDoc</name>
    <message>
      <source>Import Master Page</source>
      <translation>마스터 페이지 들여오기</translation>
    </message>
    <message>
      <source>Import Page(s)</source>
      <translation>페이지 들여오기</translation>
    </message>
    <message>
      <source>&amp;From Document:</source>
      <translation>문서(&amp;F):</translation>
    </message>
    <message>
      <source>Chan&amp;ge...</source>
      <translation>바꾸기(&amp;G)...</translation>
    </message>
    <message>
      <source>&amp;Import Page(s):</source>
      <translation>페이지 들여오기(&amp;I):</translation>
    </message>
    <message>
      <source>&amp;Import Master Page</source>
      <translation>마스터 페이지 들여오기(&amp;I)</translation>
    </message>
    <message>
      <source>Insert a comma separated list of tokens import where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
      <translation>전체 페이지는 *, 페이지의 일정 범위로 표시할 때는 1-5, 또는 단일 페이지 번호 1 로 표시하기 위하여 분리된 콤마를 삽입합니다.</translation>
    </message>
    <message>
      <source> from 0</source>
      <translation>0 부터</translation>
    </message>
    <message>
      <source>Create Page(s)</source>
      <translation>페이지 생성</translation>
    </message>
    <message>
      <source>Before Page</source>
      <translation>페이지 전</translation>
    </message>
    <message>
      <source>After Page</source>
      <translation>페이지 후</translation>
    </message>
    <message>
      <source>At End</source>
      <translation>끝에</translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation>들여오기(&amp;I)</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>열기</translation>
    </message>
    <message>
      <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
      <translation>문서 (*.sla *.sla.gz *.scd *.scd.gz)전체 파일 (*)</translation>
    </message>
    <message>
      <source> from %1</source>
      <translation>%1 부터</translation>
    </message>
  </context>
  <context>
    <name>MeshDistortionDialog</name>
    <message>
      <source>Dialog</source>
      <translation>대화창</translation>
    </message>
    <message>
      <source>+</source>
      <translation>+</translation>
    </message>
    <message>
      <source>-</source>
      <translation>-</translation>
    </message>
  </context>
  <context>
    <name>MeshDistortionPlugin</name>
    <message>
      <source>Mesh Distortion...</source>
      <translation>망사 왜곡...</translation>
    </message>
    <message>
      <source>Path Tools</source>
      <translation>경로 도구</translation>
    </message>
    <message>
      <source>Mesh Distortion of Polygons</source>
      <translation>다각형의 망사 왜곡</translation>
    </message>
  </context>
  <context>
    <name>MissingFont</name>
    <message>
      <source>Missing Font</source>
      <translation>없는 글꼴</translation>
    </message>
    <message>
      <source>The Font %1 is not installed.</source>
      <translation>글꼴 %1 이 설치되지 않았습니다.</translation>
    </message>
    <message>
      <source>Use</source>
      <translation>사용</translation>
    </message>
    <message>
      <source>instead</source>
      <translation>대체</translation>
    </message>
  </context>
  <context>
    <name>ModeToolBar</name>
    <message>
      <source>Tools</source>
      <translation>도구</translation>
    </message>
    <message>
      <source>Properties...</source>
      <translation>속성 지정...</translation>
    </message>
  </context>
  <context>
    <name>MovePages</name>
    <message>
      <source>Move Pages</source>
      <translation>페이지 이동</translation>
    </message>
    <message>
      <source>Copy Page</source>
      <translation>페이지 복사</translation>
    </message>
    <message>
      <source>Move Page(s)</source>
      <translation>페이지 이동</translation>
    </message>
    <message>
      <source>To:</source>
      <translation>To:</translation>
    </message>
    <message>
      <source>Number of copies:</source>
      <translation>복사 갯수:</translation>
    </message>
    <message>
      <source>Before Page</source>
      <translation>페이지 전</translation>
    </message>
    <message>
      <source>After Page</source>
      <translation>페이지 후</translation>
    </message>
    <message>
      <source>At End</source>
      <translation>끝에</translation>
    </message>
    <message>
      <source>Move Page(s):</source>
      <translation>페이지 이동:</translation>
    </message>
  </context>
<context>
    <name>MultiLine</name>
    <message>
        <location filename="../multiline.cpp" line="32"/>
        <source>Edit Style</source>
        <translation>스타일 편집</translation>
    </message>
    <message>
        <location filename="../multiline.cpp" line="86"/>
        <source>Flat Cap</source>
        <translation>평면형</translation>
    </message>
    <message>
        <location filename="../multiline.cpp" line="87"/>
        <source>Square Cap</source>
        <translation>사각형</translation>
    </message>
    <message>
        <location filename="../multiline.cpp" line="88"/>
        <source>Round Cap</source>
        <translation>둥근형</translation>
    </message>
    <message>
        <location filename="../multiline.cpp" line="92"/>
        <source>Miter Join</source>
        <translation>미터 결합</translation>
    </message>
    <message>
        <location filename="../multiline.cpp" line="93"/>
        <source>Bevel Join</source>
        <translation>경사 결합</translation>
    </message>
    <message>
        <location filename="../multiline.cpp" line="94"/>
        <source>Round Join</source>
        <translation>둥근 결합</translation>
    </message>
    <message>
        <location filename="../multiline.cpp" line="100"/>
        <source>Line Width:</source>
        <translation>선 너비:</translation>
    </message>
    <message>
        <location filename="../multiline.cpp" line="105"/>
        <source> pt</source>
        <translation> 포인트</translation>
    </message>
    <message>
        <location filename="../multiline.cpp" line="118"/>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source> pt </source>
        <translation> 포이트 </translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation>실선</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation>대시선</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation>점선</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation>대시점선</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation>대시점점선</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>경고</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation>이름 &quot;%1&quot; 이 이미 있습니다.
		다른 이름을 선택하세요.</translation>
    </message>
    <message>
        <location filename="../multiline.cpp" line="284"/>
        <source>OK</source>
        <translation>확인</translation>
    </message>
    <message>
        <location filename="../multiline.cpp" line="284"/>
        <source>Name &quot;%1&quot; isn&apos;t unique.&lt;br/&gt;Please choose another.</source>
        <translation>이름 &quot;%1&quot; 이 이미 있습니다.
		&lt;br/&gt;다른 이름을 선택하세요.</translation>
    </message>
    <message>
        <location filename="../multiline.cpp" line="270"/>
        <source>pt</source>
        <translation>포인트</translation>
    </message>
</context>

  <context>
    <name>MultiProgressDialog</name>
    <message>
      <source>Progress</source>
      <translation>진행</translation>
    </message>
    <message>
      <source>Overall Progress:</source>
      <translation>전체 진행:</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>취소(&amp;C)</translation>
    </message>
  </context>
  <context>
    <name>MultipleDuplicate</name>
    <message>
      <source>&amp;Horizontal Shift:</source>
      <translation>수평 이동(&amp;H):</translation>
    </message>
    <message>
      <source>&amp;Vertical Shift:</source>
      <translation>수직 이동(&amp;V):</translation>
    </message>
    <message>
        <location filename="../../scribus/multipleduplicate.cpp" line="69"/>
        <source>&amp;Horizontal Gap:</source>
        <translation>수평 간격(&amp;H):</translation>
    </message>
    <message>
        <location filename="../../scribus/multipleduplicate.cpp" line="70"/>
        <source>&amp;Vertical Gap:</source>
        <translation>수직 간격(&amp;V):</translation>
    </message>
    <message>
      <source>Multiple Duplicate</source>
      <translation>다수 복제 방법</translation>
    </message>
    <message>
      <source>&amp;By Number of Copies</source>
      <translation>복사 갯수(&amp;B)</translation>
    </message>
    <message>
      <source>&amp;Number of Copies:</source>
      <translation>복사할 갯수(&amp;N):</translation>
    </message>
    <message>
      <source>&amp;Shift Created Items By</source>
      <translation>생성 객체 이동(&amp;S)</translation>
    </message>
    <message>
      <source>Alt+S</source>
      <translation>Alt+S</translation>
    </message>
    <message>
      <source>Create &amp;Gap Between Items Of</source>
      <translation>객체 사이 간격 생성(&amp;G)</translation>
    </message>
    <message>
      <source>Alt+G</source>
      <translation>Alt+G</translation>
    </message>
    <message>
      <source>Rotation:</source>
      <translation>회전:</translation>
    </message>
    <message>
      <source>By &amp;Rows &amp;&amp; Columns</source>
      <translation>행/열(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Vertical Gap:</source>
      <translation>수직 간격(&amp;V):</translation>
    </message>
    <message>
      <source>&amp;Horizontal Gap:</source>
      <translation>수평 간격(&amp;H):</translation>
    </message>
    <message>
      <source>Number of Rows:</source>
      <translation>삽입 행:</translation>
    </message>
    <message>
      <source>Number of Columns:</source>
      <translation>삽입 열:</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>확인(&amp;O)</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>취소(&amp;C)</translation>
    </message>
  </context>
  <context>
    <name>MyPlugin</name>
    <message>
      <source>My &amp;Plugin</source>
      <translation>자작 플러그인(&amp;P)</translation>
    </message>
  </context>
  <context>
    <name>MyPluginImpl</name>
    <message>
      <source>Scribus - My Plugin</source>
      <translation>Scribus - 자작 플러그인</translation>
    </message>
    <message>
      <source>The plugin worked!</source>
      <translation>플러그인 작업 완료!</translation>
    </message>
  </context>
  <context>
    <name>NewDoc</name>
    <message>
      <source>New Document</source>
      <translation>새 문서</translation>
    </message>
    <message>
      <source>&amp;New Document</source>
      <translation>새 문서(&amp;N)</translation>
    </message>
    <message>
      <source>Open &amp;Existing Document</source>
      <translation>기존 문서 열기(&amp;E)</translation>
    </message>
    <message>
      <source>Open Recent &amp;Document</source>
      <translation>최근 문서 열기(&amp;D)</translation>
    </message>
    <message>
      <source>Do not show this dialog again</source>
      <translation>현재 창을 숨기기</translation>
    </message>
    <message>
      <source>Document page size, either a standard size or a custom size</source>
      <translation>문서 페이지 크기 또는 사용자 크기</translation>
    </message>
    <message>
      <source>Orientation of the document's pages</source>
      <translation>문서 페이지 방향</translation>
    </message>
    <message>
      <source>Width of the document's pages, editable if you have chosen a custom page size</source>
      <translation>문서 페이지 너비. 사용자 페이지 크기를 선택하면 편집이 가능</translation>
    </message>
    <message>
      <source>Height of the document's pages, editable if you have chosen a custom page size</source>
      <translation>문서 페이지 높이. 사용자 페이지 크기를 선택하면 편집이 가능</translation>
    </message>
    <message>
      <source>Initial number of pages of the document</source>
      <translation>문서의 초기 페이지수</translation>
    </message>
    <message>
      <source>Default unit of measurement for document editing</source>
      <translation>문서를 편집할 때 기본 측정 단위</translation>
    </message>
    <message>
      <source>Create text frames automatically when new pages are added</source>
      <translation>새 페이지를 더할 때 자동 텍스트 프레임 생성.</translation>
    </message>
    <message>
      <source>Number of columns to create in automatically created text frames</source>
      <translation>자동 생성된 텍스트 프레임에서 생성될 열 수</translation>
    </message>
    <message>
      <source>Distance between automatically created columns</source>
      <translation>자동 생성된 열 사이 공백</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>크기(&amp;S):</translation>
    </message>
    <message>
      <source>Orie&amp;ntation:</source>
      <translation>방향(&amp;N):</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation>세로 방향</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation>가로 방향</translation>
    </message>
    <message>
      <source>&amp;Width:</source>
      <translation>너비(&amp;W):</translation>
    </message>
    <message>
      <source>&amp;Height:</source>
      <translation>높이(&amp;H):</translation>
    </message>
    <message>
      <source>Margin Guides</source>
      <translation>여백 안내선</translation>
    </message>
    <message>
      <source>Options</source>
      <translation>설정</translation>
    </message>
    <message>
      <source>N&amp;umber of Pages:</source>
      <translation>페이지 수(&amp;U):</translation>
    </message>
    <message>
      <source>&amp;Default Unit:</source>
      <translation>기본 단위(&amp;D):</translation>
    </message>
    <message>
      <source>&amp;Automatic Text Frames</source>
      <translation>자동 텍스트 프레임(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;Gap:</source>
      <translation>간격(&amp;G):</translation>
    </message>
    <message>
      <source>Colu&amp;mns:</source>
      <translation>열(&amp;M):</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>열기</translation>
    </message>
    <message>
      <source>First Page is:</source>
      <translation>처음 페이지 위치:</translation>
    </message>
    <message>
      <source>Show Document Settings After Creation</source>
      <translation>생성 후 문서 설정 보이기</translation>
    </message>
    <message>
      <source>Document Layout</source>
      <translation>제책</translation>
    </message>
  </context>
  <context>
    <name>NewFromTemplatePlugin</name>
    <message>
      <source>New &amp;from Template...</source>
      <translation>서식에서 새 파일(&amp;F)...</translation>
    </message>
    <message>
      <source>Load documents with predefined layout</source>
      <translation>사전 정의된 배열로 문서 불러오기</translation>
    </message>
    <message>
      <source>Start a document from a template made by other users or yourself (f.e. for documents you have a constant style).</source>
      <translation>사용자에 의해 만들어진 서식으로 부터 문서를 시작합니다.</translation>
    </message>
  </context>
  <context>
    <name>NodePalette</name>
    <message>
      <source>Nodes</source>
      <translation>조절점</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>&amp;Absolute Coordinates</source>
      <translation>절대 좌표(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;X-Pos:</source>
      <translation>X 위치(&amp;X):</translation>
    </message>
    <message>
      <source>&amp;Y-Pos:</source>
      <translation>Y 위치(&amp;Y):</translation>
    </message>
    <message>
      <source>Edit &amp;Contour Line</source>
      <translation>기본 윤곽선 편집(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Reset Contour Line</source>
      <translation>기본 윤곽선 초기화(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;End Editing</source>
      <translation>편집 종료(&amp;E)</translation>
    </message>
    <message>
      <source>Move Nodes</source>
      <translation>조절점 이동</translation>
    </message>
    <message>
      <source>Move Control Points</source>
      <translation>제어점 이동</translation>
    </message>
    <message>
      <source>Add Nodes</source>
      <translation>조절점 더하기</translation>
    </message>
    <message>
      <source>Delete Nodes</source>
      <translation>조절점 삭제</translation>
    </message>
    <message>
      <source>Move Control Points Independently</source>
      <translation>제어점을 독립적으로 이동</translation>
    </message>
    <message>
      <source>Move Control Points Symmetrical</source>
      <translation>제어점을 대칭적으로 이동</translation>
    </message>
    <message>
      <source>Reset Control Points</source>
      <translation>제어점 초기화</translation>
    </message>
    <message>
      <source>Reset this Control Point</source>
      <translation>이 제어점 초기화</translation>
    </message>
    <message>
      <source>Open a Polygon or Cuts a Bezier Curve</source>
      <translation>다각형을 열거나 베지어곡선을 잘라내기</translation>
    </message>
    <message>
      <source>Close this Bezier Curve</source>
      <translation>이 베지어 곡선 닫기</translation>
    </message>
    <message>
      <source>Mirror the Path Horizontally</source>
      <translation>조절점 경로 수평으로 대칭이동</translation>
    </message>
    <message>
      <source>Mirror the Path Vertically</source>
      <translation>조절점 경로 수직으로 대칭이동</translation>
    </message>
    <message>
      <source>Shear the Path Horizontally to the Right</source>
      <translation>조절점 경로를 오른쪽 수평으로 기울이기</translation>
    </message>
    <message>
      <source>Shear the Path Horizontally to the Left</source>
      <translation>조절점 경로를 왼쪽 수평으로 기울이기</translation>
    </message>
    <message>
      <source>Shear the Path Vertically Up</source>
      <translation>조절점 경로를 위쪽 수직으로 기울이기</translation>
    </message>
    <message>
      <source>Shear the Path Vertically Down</source>
      <translation>조절점 경로를 아래쪽 수직으로 기울이기</translation>
    </message>
    <message>
      <source>Rotate the Path Counter-Clockwise</source>
      <translation>조절점 경로 반시계방향 회전</translation>
    </message>
    <message>
      <source>Rotate the Path Clockwise</source>
      <translation>조절점 경로 시계방향 회전</translation>
    </message>
    <message>
      <source>Enlarge the Size of the Path by shown %</source>
      <translation>% 로 조절점 경로 크기 늘임</translation>
    </message>
    <message>
      <source>Angle of Rotation</source>
      <translation>회전 각도</translation>
    </message>
    <message>
      <source>Activate Contour Line Editing Mode</source>
      <translation>기본 윤곽선 편집 모드 활성화</translation>
    </message>
    <message>
      <source>Reset the Contour Line to the Original Shape of the Frame</source>
      <translation>기본 윤곽선을 프레임 초기 상태로 되돌림</translation>
    </message>
    <message>
      <source>When checked use coordinates relative to the page, otherwise coordinates are relative to the Object.</source>
      <translation>체크되면 페이지와 연관된 좌표를 사용. 그렇지 않으면  좌표는 객체와 연관이 있음.</translation>
    </message>
    <message>
      <source>Shrink the Size of the Path by shown %</source>
      <translation>% 에 의해 나타나는 경로 크기 줄임</translation>
    </message>
    <message>
      <source>Reduce the Size of the Path by the shown value</source>
      <translation>제시된 값으로 조절점 경로 크기 줄임</translation>
    </message>
    <message>
      <source>Enlarge the Size of the Path by the shown value</source>
      <translation>보여지는 값으로 경로 크기를 크게</translation>
    </message>
    <message>
      <source>% to Enlarge or Shrink By</source>
      <translation>확대/축소 %단위</translation>
    </message>
    <message>
      <source>Value to Enlarge or Shrink By</source>
      <translation>확대/축소 수치 </translation>
    </message>
    <message>
      <source>Set Contour to Image Clip</source>
      <translation>이미지 클립으로 외곽선 설정</translation>
    </message>
    <message>
      <source>Reset the Contour Line to the Clipping Path of the Image</source>
      <translation>이미지 클립 경로의 외곽선을 초기화</translation>
    </message>
    <message>
      <source>to Canvas</source>
      <translation>캔버스로</translation>
    </message>
    <message>
      <source>to Page</source>
      <translation>페이지로</translation>
    </message>
  </context>
  <context>
    <name>OODPlug</name>
    <message>
      <source>This document does not seem to be an OpenOffice Draw file.</source>
      <translation>이 문서는 OpenOffice Draw 파일은 아닌 것 같습니다.</translation>
    </message>
    <message>
      <source>Group%1</source>
      <translation>그룹 %1</translation>
    </message>
  </context>
  <context>
    <name>OODrawImportPlugin</name>
    <message>
      <source>Import &amp;OpenOffice.org Draw...</source>
      <translation>OpenOffice.org Draw 들여오기(&amp;O)...</translation>
    </message>
    <message>
      <source>Imports OpenOffice.org Draw Files</source>
      <translation>OpenOffice.org Draw 파일 들여오기</translation>
    </message>
    <message>
      <source>Imports most OpenOffice.org Draw files into the current document, converting their vector data into Scribus objects.</source>
      <translation>OpenOffice.org Draw 파일을 현재 문서로 읽어오고, 벡터 자료를 Scribus 객체로 변환시킵니다.</translation>
    </message>
    <message>
      <source>OpenDocument 1.0 Draw</source>
      <comment>Import/export format name</comment>
      <translation>OpenDocument 1.0 Draw 들여오기</translation>
    </message>
    <message>
      <source>OpenOffice.org 1.x Draw</source>
      <comment>Import/export format name</comment>
      <translation>OpenOffice.org 1.x Draw 들여오기</translation>
    </message>
    <message>
      <source>This file contains some unsupported features</source>
      <translation>이 파일은 지원하지 않은 특성을 포함하고 있습니다</translation>
    </message>
    <message>
      <source>The file could not be imported</source>
      <translation>파일을 들여올 수 없습니다</translation>
    </message>
  </context>
  <context>
    <name>OdtDialog</name>
    <message>
      <source>OpenDocument Importer Options</source>
      <translation>OpenDocument 들여오기 설정</translation>
    </message>
    <message>
      <source>Overwrite Paragraph Styles</source>
      <translation>문단 스타일 겹쳐쓰기</translation>
    </message>
    <message>
      <source>Enabling this will overwrite existing styles in the current Scribus document</source>
      <translation>현재 Scribus문서에서 기존 스타일을 겹쳐쓰는 것이 가능합니다.</translation>
    </message>
    <message>
      <source>Merge Paragraph Styles</source>
      <translation>문단 스타일 병합</translation>
    </message>
    <message>
      <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document's styles are named differently.</source>
      <translation>속성에 의하여 문단 스타일을 합칩니다. 원래 문서 스타일이 다르게 명명되었더라도 이것은 약간 문단 스타일에 영향을 미치고 스타일 속성이 유지됩니다.</translation>
    </message>
    <message>
      <source>Use document name as a prefix for paragraph styles</source>
      <translation>문단 스타일에 접두어로 문서이름을 사용합니다.</translation>
    </message>
    <message>
      <source>Prepend the document name to the paragraph style name in Scribus.</source>
      <translation>Scribus에서 문서 이름을 문단 스타일 이름으로 추가합니다.</translation>
    </message>
    <message>
      <source>Do not ask again</source>
      <translation>다시 묻지 않음</translation>
    </message>
    <message>
      <source>Make these settings the default and do not prompt again when importing an OASIS OpenDocument.</source>
      <translation>이들 설정을 기본값으로 만들고, OASIS OpenDocument를 들여올 때 다시 묻지 않습니다.</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>확인</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>취소</translation>
    </message>
  </context>
  <context>
    <name>OldScribusFormat</name>
    <message>
      <source>Scribus Document</source>
      <translation>Scribus 문서</translation>
    </message>
    <message>
      <source>Scribus 1.2.x Document</source>
      <translation>Scribus 1.2.x 문서</translation>
    </message>
  </context>
  <context>
    <name>OneClick</name>
    <message>
      <source>Origin</source>
      <translation>시점</translation>
    </message>
    <message>
      <source>Size</source>
      <translation>크기</translation>
    </message>
    <message>
      <source>Width:</source>
      <translation>너비:</translation>
    </message>
    <message>
      <source>Length:</source>
      <translation>길이:</translation>
    </message>
    <message>
      <source>Height:</source>
      <translation>높이:</translation>
    </message>
    <message>
      <source>Angle:</source>
      <translation>각도:</translation>
    </message>
    <message>
      <source>Remember Values</source>
      <translation>값 기억</translation>
    </message>
  </context>
  <context>
    <name>OutlinePalette</name>
    <message>
      <source>Element</source>
      <translation>요소</translation>
    </message>
    <message>
      <source>Name &quot;%1&quot; isn't unique.&lt;br/>Please choose another.</source>
      <translation>이름 &quot;%1&quot; 이 이미 있습니다.&lt;br/>다른 이름을 선택하시오</translation>
    </message>
    <message>
      <source>Group </source>
      <translation>그룹 </translation>
    </message>
    <message>
      <source>Page </source>
      <translation>페이지 </translation>
    </message>
    <message>
      <source>Free Objects</source>
      <translation>자유 객체</translation>
    </message>
    <message>
      <source>Outline</source>
      <translation>문서 전체 윤곽</translation>
    </message>
    <message>
      <source>Enter a keyword or regular expression to filter the outline.</source>
      <translation>윤곽선을 필터하기 위한 키워드 또는 정규 표현식을 입력.</translation>
    </message>
    <message>
      <source>Ctrl+f</source>
      <comment>Filter the Outline using a keyword</comment>
      <translation>Ctrl+f</translation>
    </message>
    <message>
      <source>Filter:</source>
      <translation>필터:</translation>
    </message>
  </context>
  <context>
    <name>OutlineValues</name>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Linewidth</source>
      <translation>선 너비</translation>
    </message>
  </context>
  <context>
    <name>PDFExportDialog</name>
    <message>
      <source>Save as PDF</source>
      <translation>PDF 저장</translation>
    </message>
    <message>
      <source>O&amp;utput to File:</source>
      <translation>출력을 파일로(&amp;U):</translation>
    </message>
    <message>
      <source>Cha&amp;nge...</source>
      <translation>바꾸기(&amp;N)...</translation>
    </message>
    <message>
      <source>Output one file for eac&amp;h page</source>
      <translation>여러 페이지를 한 파일로 출력(&amp;H)</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>저장(&amp;S)</translation>
    </message>
    <message>
      <source>This enables exporting one individually named PDF file for each page in the document. Page numbers are added automatically. This is most useful for imposing PDF for commercial printing.</source>
      <translation>문서에서  각각 명명된 PDF파일을 개별적으로 내보낼 수 있습니다. 페이지번호를 자동으로 더합니다. 이것은 상업적 출판에서 PDF 생성에 가장 유용합니다.</translation>
    </message>
    <message>
      <source>Save as</source>
      <translation>다른 이름으로</translation>
    </message>
    <message>
      <source>PDF Files (*.pdf);;All Files (*)</source>
      <translation>PDF 파일 (*.pdf);;전체 파일 (*)</translation>
    </message>
    <message>
      <source>The save button will be disabled if you are trying to export PDF/X-3 and the info string is missing from the PDF/X-3 tab.</source>
      <translation>PDF/X-3내보내기를 시도하거나 the PDF/X-3 탭에서 정보 문자가 빠졌을 경우에는 저장 버튼은 사용할 수 없습니다.</translation>
    </message>
    <message>
      <source>%1 does not exists and will be created, continue?</source>
      <translation>%1이 없지만 생성시킬 수 있습니다. 계속 하시겠습니까?</translation>
    </message>
    <message>
      <source>Cannot create directory: 
%1</source>
      <translation>폴더를 생성할 수 없음: 
%1</translation>
    </message>
  </context>
  <context>
    <name>PDFLibCore</name>
    <message>
      <source>Saving PDF</source>
      <translation>PDF 저장 중</translation>
    </message>
    <message>
      <source>Exporting Master Page:</source>
      <translation>마스터 페이지 내보내기 중:</translation>
    </message>
    <message>
      <source>Exporting Page:</source>
      <translation>페이지 내보내기 중:</translation>
    </message>
    <message>
      <source>Exporting Items on Current Page:</source>
      <translation>현재 페이지 객체 내보내기 중:</translation>
    </message>
    <message>
      <source>Page:</source>
      <translation>페이지:</translation>
    </message>
    <message>
      <source>Date:</source>
      <translation>날짜:</translation>
    </message>
    <message>
      <source>Failed to load an image : %1</source>
      <translation>이미지 읽어오기 실패 : %1</translation>
    </message>
    <message>
      <source>Failed to write an image : %1</source>
      <translation>이미지 쓰기 실패 : %1</translation>
    </message>
    <message>
      <source>Failed to load an image mask : %1</source>
      <translation>이미지 마스크 읽어오기 실패 : %1</translation>
    </message>
    <message>
      <source>Insufficient memory for processing an image</source>
      <translation>이미지 처리를 위한 불충분한 메모리</translation>
    </message>
    <message>
      <source>A write error occured, please check available disk space</source>
      <translation>쓰기 오류 발생, 사용가능한 디스크 공간을 확인하시오</translation>
    </message>
  </context>
  <context>
    <name>PDFToolBar</name>
    <message>
      <source>PDF Tools</source>
      <translation>PDF 도구</translation>
    </message>
  </context>
  <context>
    <name>PPreview</name>
    <message>
      <source>Print Preview</source>
      <translation>인쇄 미리보기</translation>
    </message>
    <message>
      <source>Display Trans&amp;parency</source>
      <translation>투명도 보이기(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;Under Color Removal</source>
      <translation>색상 제거 상태(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Display CMYK</source>
      <translation>CMYK 보이기(&amp;D)</translation>
    </message>
    <message>
      <source>&amp;C</source>
      <translation>&amp;C</translation>
    </message>
    <message>
      <source>&amp;M</source>
      <translation>&amp;M</translation>
    </message>
    <message>
      <source>&amp;Y</source>
      <translation>&amp;Y</translation>
    </message>
    <message>
      <source>&amp;K</source>
      <translation>&amp;K</translation>
    </message>
    <message>
      <source>Separation Name</source>
      <translation>분해 이름</translation>
    </message>
    <message>
      <source>Cyan</source>
      <translation>남색</translation>
    </message>
    <message>
      <source>Magenta</source>
      <translation>자홍색</translation>
    </message>
    <message>
      <source>Yellow</source>
      <translation>노란색</translation>
    </message>
    <message>
      <source>Black</source>
      <translation>검은색</translation>
    </message>
    <message>
      <source>Scaling:</source>
      <translation>비율:</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>닫기</translation>
    </message>
    <message>
      <source>Print...</source>
      <translation>인쇄...</translation>
    </message>
    <message>
      <source>Shows transparency and transparent items in your document. Requires Ghostscript 7.07 or later</source>
      <translation>문서의 투명도와 투명 객체를 보입니다. 고스트 7.07버전이상을 요구합니다.</translation>
    </message>
    <message>
      <source>Gives a print preview using simulations of generic CMYK inks, instead of RGB colors</source>
      <translation>RGB색상 대신 CMYK의 가상실험을 이용하여 인쇄 미리보기를 합니다.</translation>
    </message>
    <message>
      <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis. UCR reduces the possibility of over saturation with CMY inks.</source>
      <translation>검정, 청록, 노랑, 자홍으로 구성된 그레이 음영으로 바꾸는 방법. UCR은 회색에 가까운 중간 또는 어두운 색조의 이미지부분에 영향을 준다.  이것은 이미지출력과 실험방법 및 개별적으로 필요한 테스팅등을 향상시킨다. UCR은 CMY 잉크의 과도한 채색의 가능성을 감소시켜 줍니다</translation>
    </message>
    <message>
      <source>Resize the scale of the page.</source>
      <translation>페이지 비율 변경</translation>
    </message>
    <message>
      <source>Enable/disable the C (Cyan) ink plate</source>
      <translation>C(남색)잉크 팔레트 가능/불가</translation>
    </message>
    <message>
      <source>Enable/disable the M (Magenta) ink plate</source>
      <translation>M(자홍색)잉크 팔레트 가능/불가</translation>
    </message>
    <message>
      <source>Enable/disable the Y (Yellow) ink plate</source>
      <translation>Y(노란색)잉크 팔레트 가능/불가</translation>
    </message>
    <message>
      <source>Enable/disable the K (Black) ink plate</source>
      <translation>K(검은색)잉크 팔레트 가능/불가</translation>
    </message>
    <message>
      <source>All</source>
      <translation>전체</translation>
    </message>
    <message>
      <source>File</source>
      <translation>파일</translation>
    </message>
    <message>
      <source>Enable &amp;Antialiasing</source>
      <translation>부드러운 처리 가능(&amp;A)</translation>
    </message>
    <message>
      <source>Fit to Width</source>
      <translation>너비에 맞춤</translation>
    </message>
    <message>
      <source>Fit to Height</source>
      <translation>높이에 맞춤</translation>
    </message>
    <message>
      <source>Fit to Page</source>
      <translation>페이지에 맞춤</translation>
    </message>
    <message>
      <source>Provides a more pleasant view of Type 1 fonts, TrueType Fonts, OpenType Fonts, EPS, PDF and vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
      <translation>미리보기할 때 약간 지체현상이 나타나지만  Type 1 글꼴, 트루타입 글꼴, 오픈타입 글꼴, EPS, PDF 그리고 벡터그래픽에서 보기 좋습니다.</translation>
    </message>
    <message>
      <source>Display Settings</source>
      <translation>설정 보이기</translation>
    </message>
    <message>
      <source>Print Settings</source>
      <translation>인쇄 설정</translation>
    </message>
    <message>
      <source>Mirror Page(s) Horizontal</source>
      <translation>페이지 수평 미러</translation>
    </message>
    <message>
      <source>Mirror Page(s) Vertical</source>
      <translation>페이지 수직 미러</translation>
    </message>
    <message>
      <source>Clip to Page Margins</source>
      <translation>페이지 여백으로 자르기</translation>
    </message>
    <message>
      <source>Print in Grayscale</source>
      <translation>회색톤 인쇄</translation>
    </message>
    <message>
      <source>Convert Spot Colors</source>
      <translation>Spot 색상 변환</translation>
    </message>
    <message>
      <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
      <translation>Spot 색상을 혼합 색상으로 변환 가능, Spot 색상 출력을 하지 않는다면 가능한 한 그대로 둡니다.</translation>
    </message>
    <message>
      <source>Apply Color Profiles</source>
      <translation>색상 프로파일 적용</translation>
    </message>
    <message>
      <source>Allows you to embed color profiles in the print stream when color management is enabled</source>
      <translation>컬러 관리가 가능한 경우 인쇄 스트림에 내장 색상 ICC 프로파일을 허용합니다.</translation>
    </message>
  </context>
  <context>
    <name>PSLib</name>
    <message>
      <source>Processing Master Page:</source>
      <translation>마스터 페이지 처리 중:</translation>
    </message>
    <message>
      <source>Exporting Page:</source>
      <translation>페이지 내보내는 중:</translation>
    </message>
    <message>
      <source>Failed to write data for an image</source>
      <translation>이미지 자료 쓰기 실패</translation>
    </message>
    <message>
      <source>Failed to load an image : %1</source>
      <translation>이미지 읽어오기 실패 : %1</translation>
    </message>
    <message>
      <source>Failed to load an image mask : %1</source>
      <translation>이미지 마스크 읽어오기 실패 : %1</translation>
    </message>
    <message>
      <source>Insufficient memory for processing an image</source>
      <translation>이미지 작업에 불충분한 메모리</translation>
    </message>
  </context>
  <context>
    <name>PageItem</name>
    <message>
      <source>Image</source>
      <translation>이미지</translation>
    </message>
    <message>
      <source>Text</source>
      <translation>텍스트</translation>
    </message>
    <message>
      <source>Line</source>
      <translation>선</translation>
    </message>
    <message>
      <source>Polygon</source>
      <translation>다각형</translation>
    </message>
    <message>
      <source>Polyline</source>
      <translation>다각형 선</translation>
    </message>
    <message>
      <source>PathText</source>
      <translation>경로텍스트</translation>
    </message>
    <message>
      <source>Copy of</source>
      <translation>복사</translation>
    </message>
  </context>
  <context>
    <name>PageItemAttributes</name>
    <message>
      <source>&amp;Add</source>
      <translation>더하기(&amp;A)</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>복사(&amp;C)</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>삭제(&amp;D)</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>제거(&amp;L)</translation>
    </message>
    <message>
      <source>Alt+L</source>
      <translation>Alt+L</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>확인(&amp;O)</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>취소(&amp;C)</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>이름</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>형태</translation>
    </message>
    <message>
      <source>Value</source>
      <translation>값</translation>
    </message>
    <message>
      <source>Parameter</source>
      <translation>매개변수</translation>
    </message>
    <message>
      <source>Relationship</source>
      <translation>관계</translation>
    </message>
    <message>
      <source>Relationship To</source>
      <translation>관계</translation>
    </message>
    <message>
      <source>Attributes</source>
      <translation>속성</translation>
    </message>
  </context>
  <context>
    <name>PageItem_ImageFrame</name>
    <message>
      <source>Preview Settings</source>
      <translation>미리보기 설정</translation>
    </message>
    <message>
      <source>Image</source>
      <translation>임지</translation>
    </message>
  </context>
  <context>
    <name>PageItem_LatexFrame</name>
    <message>
      <source>Error</source>
      <translation>오류</translation>
    </message>
    <message>
      <source>Running the external application failed!</source>
      <translation>외부 응용프로그램 실행 실패!</translation>
    </message>
    <message>
      <source>Could not create a temporary file to run the application!</source>
      <translation>응용프로그램을 실행하는데 필요한 임시파일을 생성할 수 없음!</translation>
    </message>
    <message>
      <source>Information</source>
      <translation>정보</translation>
    </message>
    <message>
      <source>An editor for this frame is already running!</source>
      <translation>이 프레임의 편집기가 실행 중!</translation>
    </message>
    <message>
      <source>Please specify an editor in the preferences!</source>
      <translation>기본설정에서 편집기를 지정하시오!</translation>
    </message>
    <message>
      <source>Could not create a temporary file to run the external editor!</source>
      <translation>외부 편집기를 실행하기 위하여 임시파일을 생성할 수 없음!</translation>
    </message>
    <message>
      <source>Running the editor failed with exitcode %d!</source>
      <translation>종료코드%d로 편집기 실행에 실패!</translation>
    </message>
    <message>
      <source>Running the editor &quot;%1&quot; failed!</source>
      <translation>편집기 &quot;\%1&quot; 실행 실패!</translation>
    </message>
    <message>
      <source>Running the application &quot;%1&quot; failed!</source>
      <translation>응용 프로그램 &quot;%1&quot;  실행 실패!</translation>
    </message>
    <message>
      <source>Running</source>
      <translation>실행 중</translation>
    </message>
    <message>
      <source>The application &quot;%1&quot; failed to start!</source>
      <translation>응용프로그램 &quot;%1&quot; 시작할 때 실패!</translation>
    </message>
    <message>
      <source>The application &quot;%1&quot; crashed!</source>
      <translation>응용프로그램 &quot;%1&quot;이 충돌이 발생!</translation>
    </message>
    <message>
      <source>Application</source>
      <translation>응용 프로그램</translation>
    </message>
    <message>
      <source>DPI</source>
      <translation>DPI</translation>
    </message>
    <message>
      <source>State</source>
      <translation>상태</translation>
    </message>
    <message>
      <source>Finished</source>
      <translation>종료</translation>
    </message>
    <message>
      <source>Render</source>
      <translation>렌더</translation>
    </message>
    <message>
      <source>The config file didn't specify a executable path!</source>
      <translation>설정 파일이 실행 경로를 지정하지 않았습니다!</translation>
    </message>
    <message>
      <source>Render Frame</source>
      <translation>렌더 프레임</translation>
    </message>
  </context>
  <context>
    <name>PageItem_PathText</name>
    <message>
      <source>Paragraphs: </source>
      <translation>문단수: </translation>
    </message>
    <message>
      <source>Lines: </source>
      <translation>줄수: </translation>
    </message>
    <message>
      <source>Words: </source>
      <translation>단어수: </translation>
    </message>
    <message>
      <source>Chars: </source>
      <translation>문자수: </translation>
    </message>
  </context>
  <context>
    <name>PageItem_TextFrame</name>
    <message>
      <source>Linked Text</source>
      <translation>링크된 텍스트</translation>
    </message>
    <message>
      <source>Text Frame</source>
      <translation>텍스트 프레임</translation>
    </message>
    <message>
      <source>Paragraphs: </source>
      <translation>문단수: </translation>
    </message>
    <message>
      <source>Lines: </source>
      <translation>줄수: </translation>
    </message>
    <message>
      <source>Words: </source>
      <translation>단어수: </translation>
    </message>
    <message>
      <source>Chars: </source>
      <translation>문자수: </translation>
    </message>
  </context>
  <context>
    <name>PageLayouts</name>
    <message>
      <source>First Page is:</source>
      <translation>첫 페이지 위치:</translation>
    </message>
    <message>
      <source>Document Layout</source>
      <translation>제책</translation>
    </message>
  </context>
  <context>
    <name>PagePalette</name>
	    <message>
        <location filename="../pagepalette.cpp" line="533"/>
        <source>Double sided</source>
        <translation>두 쪽</translation>
    </message>
    <message>
        <location filename="../pagepalette.cpp" line="541"/>
        <source>Middle Right</source>
        <translation>중앙 오른쪽</translation>
    </message>
    <message>
        <location filename="../pagepalette.cpp" line="573"/>
        <source>Drag pages or master pages onto the trashbin to delete them</source>
        <translation>삭제하기 위하여 페이지 또는 마스터 페이지를 쓰레기통에 드래그합니다</translation>
    </message>
    <message>
        <location filename="../pagepalette.cpp" line="574"/>
        <source>Here are all your master pages. To create a new page, drag a master page to the page view below</source>
        <translation>여기에 전체 마스터 페이지가 있습니다. 새 페이지를 생성하기 위하여 마스터 페이지를 아래 페이지 보기로 드래그 합니다</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>일반</translation>
    </message>
    <message>
      <source>Arrange Pages</source>
      <translation>페이지 배열</translation>
    </message>
    <message>
      <source>Available Master Pages:</source>
      <translation>이용 가능한 마스터 페이지:</translation>
    </message>
    <message>
      <source>Document Pages:</source>
      <translation>문서 페이지수:</translation>
    </message>
    <message>
      <source>List of normal pages in the document, shown with the document layout. Pages may be dragged to rearrange or delete them.</source>
      <translation>문서 배열에서 보이는 문서 일반 페이지들의 목록. 이들을 재배열 또는 삭제하기 위하여 페이지를 드래그.</translation>
    </message>
    <message>
      <source>Drag pages or master pages onto the trash to delete them</source>
      <translation>삭제하기 위하여 페이지 또는 마스터 페이지를 휴지통에 드래그</translation>
    </message>
    <message>
      <source>List of master pages in the document. Master page names may be dragged onto the page view below to apply master pages, or onto the empty space between pages to create new pages.</source>
      <translation>문서의 마스터 페이지 목록. 마스터 페이지에 적용하기 위하여 마스터 페이지 이름을 페이지 보기 아래로 드래그, 또는 새 페이지로 생성하기 위하여 페이지 사이 빈 공간으로 드래그</translation>
    </message>
  </context>
  <context>
    <name>PageSelector</name>
    <message>
      <source>%1 of %2</source>
      <translation>%1 of %2</translation>
    </message>
  </context>
  <context>
    <name>ParaStyleComboBox</name>
    <message>
      <source>No Style</source>
      <translation>스타일 없음</translation>
    </message>
  </context>
  <context>
    <name>PathAlongPathPlugin</name>
    <message>
      <source>Path Along Path...</source>
      <translation>경로에 따른 경로...</translation>
    </message>
    <message>
      <source>Path Tools</source>
      <translation>경로 도구</translation>
    </message>
    <message>
      <source>Bends a Polygon along a Polyline</source>
      <translation>다각형 선을 따라서 다각형을 굽힙니다</translation>
    </message>
    <message>
      <source>This plugin bends a Polygon with the help of a Polyline.</source>
      <translation>이 플러그인은 다각형 선 도움으로 다각형으로 굽힙니다.</translation>
    </message>
  </context>
  <context>
    <name>PathCutPlugin</name>
    <message>
      <source>Cut Polygon</source>
      <translation>다각형 잘라내기</translation>
    </message>
    <message>
      <source>Path Tools</source>
      <translation>경로 도구</translation>
    </message>
    <message>
      <source>Cuts a Polygon by a Polyline</source>
      <translation>다각형 선에 의해 다각형 잘라내기</translation>
    </message>
    <message>
      <source>Qt Version too old</source>
      <translation>Qt이 오랜된 버전입니다</translation>
    </message>
    <message>
      <source>This plugin requires at least version 4.3.3 of the Qt library</source>
      <translation>이 플러그인은 최소 Qt 라이브러리 버전4.3.3 이상이 필요합니다</translation>
    </message>
    <message>
      <source>Error</source>
      <translation>오류</translation>
    </message>
    <message>
      <source>The cutting line must cross the polygon and
both end points must lie outside of the polygon</source>
      <translation>잘라내기선은 다각형과 대각이어야 하고 양 끝점은 다각형 밖에 놓여야 합니다</translation>
    </message>
  </context>
  <context>
    <name>PathDialogBase</name>
    <message>
      <source>Path along Path</source>
      <translation>경로를 따르는 경로</translation>
    </message>
    <message>
      <source>Effect Type</source>
      <translation>효과 형태</translation>
    </message>
    <message>
      <source>Single</source>
      <translation>단독</translation>
    </message>
    <message>
      <source>Single, stretched</source>
      <translation>단독, 확장</translation>
    </message>
    <message>
      <source>Repeated</source>
      <translation>반복</translation>
    </message>
    <message>
      <source>Repeated, stretched</source>
      <translation>반복, 확장</translation>
    </message>
    <message>
      <source>Horizontal Offset</source>
      <translation>수평 옵셋</translation>
    </message>
    <message>
      <source>Vertical Offset</source>
      <translation>수직 옵셋</translation>
    </message>
	    <message encoding="UTF-8">
        <location filename="../../scribus/plugins/tools/2geomtools/pathalongpath/pathdialogbase.ui" line="72"/>
        <source>Rotate Object by 90°</source>
        <translation>90도 객체 회전</translation>
    </message>
    <message>
      <source>Gap between Objects</source>
      <translation>객체 사이 간격</translation>
    </message>
    <message>
      <source>Preview on Canvas</source>
      <translation>캔버스상 미리보기</translation>
    </message>
  </context>
  <context>
    <name>PathFinderBase</name>
    <message>
      <source>Boolean Path Operations</source>
      <translation>부울식 경로 작동</translation>
    </message>
    <message>
      <source>Keep a copy of the original Item after applying the operation</source>
     <translation>작업을 적용 후 원본 객체 복사본을 유지합니다</translation>
    </message>
    <message>
      <source>keep</source>
      <translation>유지</translation>
    </message>
    <message>
      <source>+</source>
      <translation>+</translation>
    </message>
    <message>
      <source>=</source>
      <translation>=</translation>
    </message>
    <message>
      <source>Operation</source>
      <translation>작업</translation>
    </message>
    <message>
      <source>...</source>
      <translation>...</translation>
    </message>
    <message>
      <source>Swap Shapes</source>
      <translation>도형 바꾸기</translation>
    </message>
    <message>
      <source>Options</source>
      <translation>설정</translation>
    </message>
    <message>
      <source>Result gets Color of:</source>
      <translation>결과는 색상을 얻음</translation>
    </message>
    <message>
      <source>first Shape</source>
      <translation>첫째 도형</translation>
    </message>
    <message>
      <source>second Shape</source>
      <translation>둘째 도형</translation>
    </message>
  </context>
  <context>
    <name>PathFinderDialog</name>
    <message>
      <source>Result gets Color of:</source>
      <translation>결과는 색상을 얻음</translation>
    </message>
    <message>
      <source>Intersection gets Color of:</source>
      <translation>교차는 색상을 얻음</translation>
    </message>
  </context>
  <context>
    <name>PathFinderPlugin</name>
    <message>
      <source>Path Operations...</source>
      <translation>경로 작업...</translation>
    </message>
    <message>
      <source>Path Tools</source>
      <translation>경로 도구</translation>
    </message>
    <message>
      <source>Path Operations</source>
      <translation>경로 작업</translation>
    </message>
    <message>
      <source>Apply fancy boolean operations to paths.</source>
      <translation>팬시 부울 작업을 경로에 적용</translation>
    </message>
    <message>
      <source>Qt Version too old</source>
      <translation>Qt 버전이 너무 오래되었습니다</translation>
    </message>
    <message>
      <source>This plugin requires at least version 4.3.3 of the Qt library</source>
      <translation>이 플러그인은 최소 Qt 라이브러리 버전4.3.3 이상이 필요합니다</translation>
    </message>
  </context>
  <context>
    <name>PathStrokerPlugin</name>
    <message>
      <source>Create Path from Stroke</source>
      <translation>스트로크로부터 경로 생성</translation>
    </message>
    <message>
      <source>Path Tools</source>
      <translation>경로 도구</translation>
    </message>
    <message>
      <source>Converts the stroke of a Path to a filled Path.</source>
      <translation>경로 스트로크를 채움 경로로 변환</translation>
    </message>
  </context>
  <context>
    <name>PatternDialog</name>
	    <message>
        <location filename="../../scribus/patterndialog.cpp" line="134"/>
        <source>Choose a Directory</source>
        <translation>폴더 선택</translation>
    </message>
    <message>
        <location filename="../../scribus/patterndialog.cpp" line="162"/>
        <source>Loading Patterns</source>
        <translation>패턴 읽어오는 중</translation>
    </message>
    <message>
        <location filename="../../scribus/patterndialog.cpp" line="296"/>
        <source>All Files (*)</source>
        <translation>전체 파일 (*)</translation>
    </message>
    <message>
        <location filename="../../scribus/patterndialog.cpp" line="310"/>
        <source>Open</source>
        <translation>열기</translation>
    </message>
    <message>
      <source>Patterns</source>
      <translation>패턴</translation>
    </message>
    <message>
      <source>Load</source>
      <translation>읽어오기</translation>
    </message>
    <message>
      <source>Load Set</source>
      <translation>설정 읽어오기</translation>
    </message>
    <message>
      <source>Remove</source>
      <translation>제거</translation>
    </message>
    <message>
      <source>Remove All</source>
      <translation>전체 제거</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>완료</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>취소</translation>
    </message>
	    <message>
        <location filename="../../scribus/patterndialog.cpp" line="84"/>
        <source>&amp;Name:</source>
        <translation>이름(&amp;N):</translation>
    </message>
    <message>
        <location filename="../../scribus/patterndialog.cpp" line="84"/>
        <source>Rename Entry</source>
        <translation>엔트리 다른 이름으로</translation>
    </message>
    <message>
        <location filename="../../scribus/patterndialog.cpp" line="213"/>
        <source>All Supported Formats</source>
        <translation>전체 지원 형식</translation>
    </message>
    <message>
      <source>Rename</source>
      <translation>다른 이름으로</translation>
    </message>
  </context>
  <context>
    <name>PicSearch</name>
    <message>
      <source>Result</source>
      <translation>결과</translation>
    </message>
    <message>
      <source>Search Results for: </source>
      <translation>결과 찾기: </translation>
    </message>
	   <message>
        <source>Preview</source>
        <translation>미리보기</translation>
    </message>
    <message>
        <source>Select</source>
        <translation>선택</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>취소</translation>
    </message>
	  <message>
        <location filename="../../scribus/picsearch.cpp" line="108"/>
        <source>Size:</source>
        <translation>크기:</translation>
    </message>
    <message>
        <location filename="../../scribus/picsearch.cpp" line="109"/>
        <source>Resolution:</source>
        <translation>해상도:</translation>
    </message>
    <message>
        <location filename="../../scribus/picsearch.cpp" line="109"/>
        <source>DPI</source>
        <translation>DPI</translation>
    </message>
    <message>
        <location filename="../../scribus/picsearch.cpp" line="112"/>
        <source>Unknown</source>
        <translation>미정</translation>
    </message>
    <message>
        <location filename="../picsearch.cpp" line="118"/>
        <source>RGB</source>
        <translation>RGB</translation>
    </message>
    <message>
        <location filename="../picsearch.cpp" line="121"/>
        <source>CMYK</source>
        <translation>CMYK</translation>
    </message>
    <message>
        <location filename="../picsearch.cpp" line="124"/>
        <source>Grayscale</source>
        <translation>회색톤</translation>
    </message>
    <message>
        <location filename="../picsearch.cpp" line="127"/>
        <source>Duotone</source>
        <translation>2색조</translation>
    </message>
    <message>
        <location filename="../../scribus/picsearch.cpp" line="115"/>
        <source>Colorspace:</source>
        <translation>색상공간:</translation>
    </message>
    <message>
      <source>&amp;Preview</source>
      <translation>미리보기(&amp;P)</translation>
    </message>
    <message>
      <source>Alt+P</source>
      <translation>Alt+P</translation>
    </message>
    <message>
      <source>&amp;Select</source>
      <translation>선택(&amp;S)</translation>
    </message>
    <message>
      <source>Alt+S</source>
      <translation>Alt+S</translation>
    </message>
  </context>
  <context>
    <name>PicSearchBase</name>
    <message>
        <source>Result</source>
        <translation>결과</translation>
    </message>
    <message>
        <source>Search Results for: </source>
        <translation>찾기 결과: </translation>
    </message>
    <message>
        <source>&amp;Preview</source>
        <translation>미리보기(&amp;P)</translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation>Alt+P</translation>
    </message>
    <message>
        <source>&amp;Select</source>
        <translation>선택(&amp;S)</translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation>Alt+S</translation>
    </message>
</context>
  <context>
    <name>PicSearchOptions</name>
      <message>
        <location filename="../../scribus/picsearchoptions.cpp" line="51"/>
        <source>The filesystem will be searched for case insensitive file names when you check this on. Remember it is not default on most operating systems except MS Windows</source>
        <translation>MS 윈도우만 대소문자 무시하고 파일시스템을 찾음. 다른 기종은 아님</translation>
    </message>
    <message>
        <location filename="../../scribus/picsearchoptions.cpp" line="58"/>
        <source>Cancel Search</source>
        <translation>찾기 취소</translation>
    </message>
	<message>
      <source>Start Search</source>
      <translation>찾기 시작</translation>
    </message>
	   <message>
        <location filename="../../scribus/picsearchoptions.cpp" line="91"/>
        <source>Select a base directory for search</source>
        <translation>찾기 기본 폴더 선택</translation>
    </message>
    <message>
        <location filename="../../scribus/picsearchoptions.cpp" line="140"/>
        <source>Scribus - Image Search</source>
        <translation>Scribus - 이미지 찾기</translation>
    </message>
    <message>
        <location filename="../../scribus/picsearchoptions.cpp" line="140"/>
        <source>The search failed: %1</source>
        <translation>찾기 실패: %1</translation>
    </message>
    <message>
      <source>Search Images</source>
      <translation>이미지 찾기</translation>
    </message>
    <message>
      <source>Search for:</source>
      <translation>찾기:</translation>
    </message>
    <message>
      <source>Start at:</source>
      <translation>시작:</translation>
    </message>
    <message>
      <source>Change...</source>
      <translation>바꾸기...</translation>
    </message>
    <message>
      <source>Searching</source>
      <translation>찾는 중</translation>
    </message>
    <message>
      <source>Case insensitive search</source>
      <translation>대소문자 무시 찾기</translation>
    </message>
    <message>
      <source>Search recursively</source>
      <translation>반복 찾기</translation>
    </message>
	<message>
        <location filename="../../scribus/picsearchoptions.cpp" line="103"/>
        <source>Base directory for search does not exist.
Please choose another one.</source>
        <translation>찾기 기본 폴더가 없습니다. 다른 폴더를 지정하십시오.</translation>
    </message>
  </context>
  <context>
    <name>PicSearchOptionsBase</name>
    <message>
        <source>Change...</source>
        <translation>바꾸기...</translation>
    </message>
    <message>
        <source>Search for:</source>
        <translation>찾기:</translation>
    </message>
</context>
  <context>
    <name>PicStatus</name>
	    <message>
        <location filename="../picstatus.ui" line="16"/>
        <source>Manage Pictures</source>
        <translation>이미지 관리</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>이름</translation>
    </message>
    <message>
        <source>Path</source>
        <translation>경로</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>페이지</translation>
    </message>
    <message>
        <source>Print</source>
        <translation>인쇄</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>상태</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>예</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>확인</translation>
    </message>
    <message>
        <source>Missing</source>
        <translation>빠짐</translation>
    </message>
    <message>
        <source>Search</source>
        <translation>찾기</translation>
    </message>
    <message>
        <source>Cancel Search</source>
        <translation>찾기 취소</translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="575"/>
        <source>Goto</source>
        <translation>이동</translation>
    </message>
    <message>
        <location filename="../../scribus/picstatus.cpp" line="403"/>
        <source>Scribus - Image Search</source>
        <translation>Scribus - 이미지 찾기v</translation>
    </message>
    <message>
        <source>The search failed: %1</source>
        <translation>찾기 실패: %1</translation>
    </message>
    <message>
        <location filename="../../scribus/picstatus.cpp" line="403"/>
        <source>No images named &quot;%1&quot; were found.</source>
        <translation>이미지 &quot;%1&quot; 이/가 없습니다</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>닫기</translation>
    </message>
	    <message>
        <location filename="../../scribus/picstatus.cpp" line="243"/>
        <source>Not on a Page</source>
        <translation>페이지에 없음</translation>
    </message>
	    <message>
        <location filename="../../scribus/picstatus.cpp" line="285"/>
        <source>Unknown</source>
        <translation>미정</translation>
    </message>
	   <message>
        <location filename="../picstatus.cpp" line="200"/>
        <source>Grayscale</source>
        <translation>회색톤</translation>
    </message>
    <message>
        <location filename="../picstatus.cpp" line="203"/>
        <source>Duotone</source>
        <translation>2색조</translation>
    </message>
    <message>
        <location filename="../../scribus/picstatus.cpp" line="303"/>
        <source>n/a</source>
        <translation>N/A</translation>
    </message>
    <message>
      <source>Information</source>
      <translation>정보</translation>
    </message>
    <message>
      <source>Path:</source>
      <translation>경로:</translation>
    </message>
    <message>
      <source>Search...</source>
      <translation>찾기...</translation>
    </message>
    <message>
      <source>Name:</source>
      <translation>이름:</translation>
    </message>
    <message>
      <source>Image</source>
      <translation>이미지</translation>
    </message>
    <message>
      <source>DPI:</source>
      <translation>DPI:</translation>
    </message>
    <message>
      <source>Format:</source>
      <translation>형식:</translation>
    </message>
    <message>
      <source>Colorspace:</source>
      <translation>색상공간:</translation>
    </message>
    <message>
      <source>Size</source>
      <translation>크기</translation>
    </message>
    <message>
      <source>Pixels:</source>
      <translation>화소:</translation>
    </message>
    <message>
      <source>Scale:</source>
      <translation>비율:</translation>
    </message>
    <message>
      <source>Printed:</source>
      <translation>인쇄:</translation>
    </message>
    <message>
      <source>Layout</source>
      <translation>배치:</translation>
    </message>
    <message>
      <source>On Page:</source>
      <translation>페이지 상:</translation>
    </message>
	    <message>
        <source>Goto</source>
        <translation>이동</translation>
    </message>
	    <message>
        <source>eff. DPI:</source>
        <translation>유효 DPI:</translation>
    </message>
    <message>
      <source>Object:</source>
      <translation>객체:</translation>
    </message>
    <message>
      <source>Select</source>
      <translation>선택</translation>
    </message>
    <message>
      <source>Image Tools</source>
      <translation>이미지 도구</translation>
    </message>
    <message>
      <source>Image Visible</source>
      <translation>이미지 보이기</translation>
    </message>
    <message>
      <source>Image Effects...</source>
      <translation>이미지 효과...</translation>
    </message>
    <message>
      <source>Edit Image...</source>
      <translation>이미지 편집...</translation>
    </message>
    <message>
      <source>Print Image</source>
      <translation>이미지 인쇄</translation>
    </message>
    <message>
      <source>Extended Image Properties...</source>
      <translation>확장 이미지 속성...</translation>
    </message>
	    <message>
        <location filename="../../scribus/picstatus.cpp" line="218"/>
        <source>Sort by Name</source>
        <translation>이름으로 정렬</translation>
    </message>
    <message>
        <location filename="../../scribus/picstatus.cpp" line="220"/>
        <source>Sort by Page</source>
        <translation>페이지로 정렬</translation>
    </message>
    <message>
      <source>Manage Images</source>
      <translation>이미지 관리</translation>
    </message>
    <message>
      <source>Eff. DPI:</source>
      <translation>유효 DPI:</translation>
    </message>
    <message>
      <source>Go to</source>
      <translation>이동</translation>
    </message>
  </context>
  <context>
    <name>PixmapExportPlugin</name>
    <message>
      <source>Save as &amp;Image...</source>
      <translation>이미지 저장(&amp;I)...</translation>
    </message>
    <message>
      <source>Export As Image</source>
      <translation>이미지로 내보내기</translation>
    </message>
    <message>
      <source>Exports selected pages as bitmap images.</source>
      <translation>비트맵 이미지로 선택된 페이지 내보내기</translation>
    </message>
	   <message>
        <location filename="../plugins/pixmapexport/export.cpp" line="129"/>
        <source>Save as Image</source>
        <translation>이미지로 저장</translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/export.cpp" line="130"/>
        <source>Error writing the output file(s).</source>
        <translation>출력 파일 쓰기 오류.</translation>
    </message>
    <message>
      <source>Export successful</source>
      <translation>내보내기 완료</translation>
    </message>
  </context>
  <context>
    <name>PluginManager</name>
    <message>
      <source>Cannot find plugin</source>
      <comment>plugin manager</comment>
      <translation>플러그인 찾을 수 없음</translation>
    </message>
    <message>
      <source>unknown error</source>
      <comment>plugin manager</comment>
      <translation>미정 오류</translation>
    </message>
    <message>
      <source>Cannot find symbol (%1)</source>
      <comment>plugin manager</comment>
      <translation>심볼 (%1) 을 찾을 수 없음</translation>
    </message>
    <message>
      <source>Plugin: loading %1</source>
      <comment>plugin manager</comment>
      <translation>플러그인: %1 읽어오는 중</translation>
    </message>
    <message>
      <source>init failed</source>
      <comment>plugin load error</comment>
      <translation>초기화 실패</translation>
    </message>
    <message>
      <source>unknown plugin type</source>
      <comment>plugin load error</comment>
      <translation>미정 플러그인 형태</translation>
    </message>
    <message>
      <source>Plugin: %1 loaded</source>
      <comment>plugin manager</comment>
      <translation>플러그인: %1 읽음</translation>
    </message>
    <message>
      <source>Plugin: %1 failed to load: %2</source>
      <comment>plugin manager</comment>
      <translation>플러그인: %1 읽기 실패: %2</translation>
    </message>
	  <message>
        <source>PostScript Files (*.eps *.EPS *.ps *.PS);;</source>
        <translation>포스트스크립트 파일 (*.eps *.EPS *.ps *.PS);;</translation>
    </message>
    <message>
        <source>SVG Images (*.svg *.svgz);;</source>
        <translation>SVG 이미지 (*.svg *.svgz);;</translation>
    </message>
    <message>
        <source>SVG Images (*.svg);;</source>
        <translation>SVG 이미지 (*.svg);;</translation>
    </message>
    <message>
        <source>OpenOffice.org Draw (*.sxd);;</source>
        <translation>OpenOffice.org Draw (*.sxd);;</translation>
    </message>
    <message>
      <source>Plugin: %1 initialized ok </source>
      <comment>plugin manager</comment>
      <translation>플러그인: %1초기화 완료 </translation>
    </message>
    <message>
      <source>Plugin: %1 failed post initialization</source>
      <comment>plugin manager</comment>
      <translation>플러그인: %1 후기 초기화 실패</translation>
    </message>
    <message>
      <source>There is a problem loading %1 of %2 plugins. %3 This is probably caused by some kind of dependency issue or old plugins existing in your install directory. If you clean out your install directory and reinstall and this still occurs, please report it on bugs.scribus.net.</source>
      <translation>%2플러그인의 %1을 읽어오는데 문제가 있습니다. %3 이것은 종속성 또는 설치폴더의 이전 플러그인 문제를 야기시킵니다. 설치 폴더를 깨끗히 지우고도 재설치할 경우 이 문제가 재발하면 scribus.net으로 버그보고합니다.</translation>
    </message>
  </context>
  <context>
    <name>PluginManagerPrefsGui</name>
    <message>
      <source>Plugin Manager</source>
      <translation>플러그인 관리자</translation>
    </message>
    <message>
      <source>Plugin</source>
      <translation>플러그인</translation>
    </message>
    <message>
      <source>How to run</source>
      <translation>실행 방법</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>형태</translation>
    </message>
    <message>
      <source>Load it?</source>
      <translation>이것을 읽어올까요?</translation>
    </message>
    <message>
      <source>Plugin ID</source>
      <translation>플러그인 ID</translation>
    </message>
    <message>
      <source>File</source>
      <translation>파일</translation>
    </message>
	    <message>
        <source>Yes</source>
        <translation>예</translation>
    </message>
    <message>
        <source>No</source>
        <translation>아니오</translation>
    </message>
    <message>
      <source>You need to restart the application to apply the changes.</source>
      <translation>변경을 적용하기 위하여 응용프로그램을 재실행하여야 합니다.</translation>
    </message>
    <message>
      <source>Form</source>
      <translation>양식</translation>
    </message>
  </context>
  <context>
    <name>PolygonProps</name>
    <message>
      <source>Polygon Properties</source>
      <translation>다각형 속성</translation>
    </message>
  </context>
  <context>
    <name>PolygonWidget</name>
    <message>
      <source>Corn&amp;ers:</source>
      <translation>꼭지점 수(&amp;E):</translation>
    </message>
    <message>
      <source>&amp;Rotation:</source>
      <translation>회전(&amp;R):</translation>
    </message>
    <message>
      <source>Apply &amp;Factor</source>
      <translation>모서리 굴곡 적용(&amp;F)</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>&amp;Factor:</source>
      <translation>굴곡 비율(&amp;F):</translation>
    </message>
    <message>
      <source>Number of corners for polygons</source>
      <translation>다각형 꼭지점 갯수</translation>
    </message>
    <message>
      <source>Degrees of rotation for polygons</source>
      <translation>다각형 회전 각도</translation>
    </message>
    <message>
      <source>Apply Convex/Concave Factor to change shape of Polygons</source>
      <translation>굴곡 비율을 변경하면 다각형의 모양이 오목/볼록으로 변합니다</translation>
    </message>
    <message>
      <source>Sample Polygon</source>
      <translation>샘플 다각형</translation>
    </message>
    <message>
      <source>A negative value will make the polygon concave (or star shaped), a positive value will make it convex</source>
      <translation>음수값은 다각형을 오목 또는 별 모양, 양수값은 볼록 모양을 만듧니다</translation>
    </message>
	   <message>
        <location filename="../../scribus/polygonwidget.cpp" line="146"/>
        <source>A negative value will make the polygon concave (or star shaped), a positive value will make it convex</source>
        <translation>음수값은 다각형을 오목 또는 별 모양, 양수값은 볼록 모양을 만듧니다</translation>
    </message>
  </context>
  <context>
    <name>Preferences</name>
    <message>
      <source>Preferences</source>
      <translation>기본설정</translation>
    </message>
	   <message>
        <source>GUI</source>
        <translation>GUI</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>언어(&amp;L):</translation>
    </message>
    <message>
        <source>&amp;Theme:</source>
        <translation>화면 테마(&amp;T):</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> 포인트</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation>글꼴 크기(&amp;F):</translation>
    </message>
    <message>
        <source>&amp;Wheel Jump:</source>
        <translation>마우스 이동양(&amp;W):</translation>
    </message>
    <message>
        <source>&amp;Recent Documents:</source>
        <translation>최근 문서(&amp;R):</translation>
    </message>
    <message>
        <source>Paths</source>
        <translation>경로</translation>
    </message>
    <message>
        <source>&amp;Documents:</source>
        <translation>문서(&amp;D):</translation>
    </message>
    <message>
        <source>&amp;Change...</source>
        <translation>바꾸기(&amp;C)...</translation>
    </message>
    <message>
        <source>&amp;ICC Profiles:</source>
        <translation>ICC 프로파일(&amp;I):</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>바꾸기(&amp;C)...</translation>
    </message>
    <message>
        <source>&amp;Scripts:</source>
        <translation>스크립트(&amp;S):</translation>
    </message>
    <message>
        <source>Ch&amp;ange...</source>
        <translation>바꾸기(&amp;A)...</translation>
    </message>
    <message>
        <source>Document T&amp;emplates:</source>
        <translation>문서 서식(&amp;E):</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation>바꾸기(&amp;N)...</translation>
    </message>
      <message>
      <source>General</source>
      <translation>일반</translation>
    </message>
	    <message>
        <source>Page Size</source>
        <translation>페이지 크기</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>사용자</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>크기(&amp;S):</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>세로 방향</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>가로 방향</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>방향(&amp;N):</translation>
    </message>
    <message>
        <source>Units:</source>
        <translation>단위:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>너비(&amp;W):</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>높이(&amp;H):</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>여백 안내선</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation>자동저장</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation>가능(&amp;E)</translation>
    </message>
    <message>
        <source>min</source>
        <translation> 분</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation>저장간격(&amp;I):</translation>
    </message>
    <message>
        <source>Undo/Redo</source>
        <translation>이전작업/재실행</translation>
    </message>
    <message>
        <source>Action history length</source>
        <translation>작업내역 길이</translation>
    </message>
    <message>
      <source>Document</source>
      <translation>문서</translation>
    </message>
    <message>
      <source>Guides</source>
      <translation>안내선</translation>
    </message>
    <message>
      <source>Typography</source>
      <translation>글씨체 모양</translation>
    </message>
    <message>
      <source>Tools</source>
      <translation>도구</translation>
    </message>
    <message>
      <source>Hyphenator</source>
      <translation>연결자</translation>
    </message>
    <message>
      <source>Fonts</source>
      <translation>글꼴</translation>
    </message>
    <message>
      <source>Preflight Verifier</source>
      <translation>문서 검증</translation>
    </message>
    <message>
      <source>Color Management</source>
      <translation>색상 관리</translation>
    </message>
    <message>
      <source>PDF Export</source>
      <translation>PDF 내보내기</translation>
    </message>
    <message>
      <source>Document Item Attributes</source>
      <translation>문서 객체 속성</translation>
    </message>
    <message>
      <source>Table of Contents and Indexes</source>
      <translation>목차와 인덱스</translation>
    </message>
    <message>
      <source>Keyboard Shortcuts</source>
      <translation>키보드 단축키</translation>
    </message>
	 <message>
        <source>Other Options</source>
        <translation>기타 설정</translation>
    </message>
    <message>
        <source>Sa&amp;ve Contents on Changes</source>
        <translation>변경 내용 저장(&amp;V)</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>미리보기</translation>
    </message>
    <message>
        <source>Small</source>
        <translation>작게</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation>중간</translation>
    </message>
    <message>
        <source>Large</source>
        <translation>크게</translation>
    </message>
    <message>
      <source>Scrapbook</source>
      <translation>스크랩북</translation>
    </message>
	 <message>
        <source>Page Display</source>
        <translation>페이지 보이기</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>색상:</translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation>여백 색상으로 비출력 구간을 보이기(&amp;U)</translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation>Alt+U</translation>
    </message>
    <message>
        <source>Show Pictures</source>
        <translation>이미지 보이기</translation>
    </message>
    <message>
        <source>Show Text Chains</source>
        <translation>텍스트 체인 보이기</translation>
    </message>
    <message>
        <source>Show Text Control Characters</source>
        <translation>텍스트 제어문자 보이기</translation>
    </message>
    <message>
        <source>Show Frames</source>
        <translation>프레임 보이기</translation>
    </message>
    <message>
        <source>Rulers relative to Page</source>
        <translation>페이지 관련 자</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>위(&amp;T):</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>왼쪽(&amp;L):</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>아래(&amp;B):</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>오른쪽(&amp;R):</translation>
    </message>
    <message>
        <source>Gaps between Pages</source>
        <translation>페이지 사이 간격:</translation>
    </message>
    <message>
        <source>Horizontal:</source>
        <translation>수평:</translation>
    </message>
    <message>
        <source>Vertical:</source>
        <translation>수직:</translation>
    </message>
    <message>
        <source>&amp;Adjust Display Size</source>
        <translation>화면 크기 조정(&amp;A):</translation>
    </message>
    <message>
        <source>To adjust the display drag the ruler below with the slider.</source>
        <translation>보기를 조정하기 위해 슬라이드바로 조정자를 끌기</translation>
    </message>
    <message>
      <source>Display</source>
      <translation>보이기</translation>
    </message>
    <message>
      <source>External Tools</source>
      <translation>외부 도구</translation>
    </message>
	  <message>
        <source>PostScript Interpreter</source>
        <translation>포스트스크립트 해석기</translation>
    </message>
    <message>
        <source>&amp;Name of Executable:</source>
        <translation>실행명(&amp;N):</translation>
    </message>
    <message>
        <source>Antialias &amp;Text</source>
        <translation>텍스트 부드럽게(&amp;T)</translation>
    </message>
    <message>
        <source>Antialias &amp;Graphics</source>
        <translation>이미지 부드럽게(&amp;G)</translation>
    </message>
    <message>
        <source>dpi</source>
        <translation>dpi</translation>
    </message>
    <message>
        <source>Resolution:</source>
        <translation>해상도:</translation>
    </message>
    <message>
        <source>Image Processing Tool</source>
        <translation>이미지 처리 도구</translation>
    </message>
    <message>
        <source>Name of &amp;Executable:</source>
        <translation>실행명(&amp;E):</translation>
    </message>
    <message>
        <location filename="../../scribus/prefs.cpp" line="141"/>
        <source>External Tools</source>
        <translation>외부 도구</translation>
    </message>
    <message>
        <source>Printing</source>
        <translation>인쇄</translation>
    </message>
    <message>
        <source>Clip to Page &amp;Margins</source>
        <translation>페이지 여백까지 잘라내기(&amp;M)</translation>
    </message>
    <message>
        <source>Apply &amp;Under Color Removal</source>
        <translation>색상 제거하에 적용(&amp;U)</translation>
    </message>
    <message>
        <source>Always ask before fonts are replaced when loading a document</source>
        <translation>문서를 읽을 때 글꼴을 대체하기 전에 항상 묻습니다.</translation>
    </message>
    <message>
        <source>Preview of current Paragraph Style visible when editing Styles</source>
        <translation>편집시 현재 보이는 문단 스타일 미리보기</translation>
    </message>
    <message>
        <source>Show Startup Dialog</source>
        <translation>새 문서 대화상자 보기</translation>
    </message>
    <message>
        <source>Lorem Ipsum</source>
        <translation>Lorem Ipsum</translation>
    </message>
    <message>
        <source>Always use standard Lorem Ipsum</source>
        <translation>항상 표준 Lorem Ipsum 을 사용</translation>
    </message>
    <message>
        <source>Count of the Paragraphs:</source>
        <translation>문단 수 :</translation>
    </message>
    <message>
      <source>Miscellaneous</source>
      <translation>기타</translation>
    </message>
    <message>
      <source>Plugins</source>
      <translation>플러그인</translation>
    </message>
    <message>
      <source>Printer</source>
      <translation>프린터</translation>
    </message>
  </context>
   <context>
    <name>PrefsDialogBase</name>
    <message>
      <source>&amp;Defaults</source>
      <translation>초기값(&amp;D)</translation>
    </message>
    <message>
      <source>Save Preferences</source>
      <translation>기본 설정 저장</translation>
    </message>
    <message>
      <source>Export...</source>
      <translation>내보내기...</translation>
    </message>
    <message>
      <source>&amp;Apply</source>
      <translation>적용(&amp;A)</translation>
    </message>
    <message>
      <source>All preferences can be reset here</source>
      <translation>전체 기본설정을 여기에서 초기화할 수 있습니다</translation>
    </message>
    <message>
      <source>Apply all changes without closing the dialog</source>
      <translation>대화창을 닫지 않고 전체 변경을 적용합니다</translation>
    </message>
    <message>
      <source>Export current preferences into file</source>
      <translation>현재 기본설정을 파일로 내보내기</translation>
    </message>
  </context>
  <context>
    <name>PrefsManager</name>
	   <message>
        <source>Single Page</source>
        <translation>한 쪽</translation>
    </message>
    <message>
        <source>Double sided</source>
        <translation>두 쪽</translation>
    </message>
    <message>
        <source>Left Page</source>
        <translation>왼쪽 페이지</translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation>오른쪽 페이지</translation>
    </message>
    <message>
        <source>3-Fold</source>
        <translation>세 쪽</translation>
    </message>
    <message>
        <source>Middle</source>
        <translation>중앙</translation>
    </message>
    <message>
        <source>4-Fold</source>
        <translation>네 쪽</translation>
    </message>
    <message>
        <source>Middle Left</source>
        <translation>중앙 왼쪽</translation>
    </message>
    <message>
        <source>Middle Right</source>
        <translation>중앙 오른쪽</translation>
    </message>
    <message>
      <source>PostScript</source>
      <translation>포스트스크립트</translation>
    </message>
    <message>
      <source>Migrate Old Scribus Settings?</source>
      <translation>이전 Scribus 설정을 바꾸시겠습니까?</translation>
    </message>
    <message>
      <source>Scribus has detected existing Scribus 1.2 preferences files.
Do you want to migrate them to the new Scribus version?</source>
      <translation>Scribus가 기존 Scribus 1.2 기본 설정 파일을 발견했습니다. 
새로운 Scribus의 버젼으로 설정을 바꾸시겠습니까?</translation>
    </message>
    <message>
      <source>Could not open preferences file &quot;%1&quot; for writing: %2</source>
      <translation>쓸 때 기본 설정 파일 &quot;%1&quot;을 열 수 없습니다: %2</translation>
    </message>
    <message>
      <source>Writing to preferences file &quot;%1&quot; failed: QIODevice status code %2</source>
      <translation>기본 설정파일 &quot;%1&quot;로 쓰기 실패: QIO 디바이스 상태 코드 %2</translation>
    </message>
    <message>
      <source>Failed to open prefs file &quot;%1&quot;: %2</source>
      <translation>기본 설정 파일 &quot;%1&quot; 열기 실패: %2</translation>
    </message>
    <message>
      <source>Failed to read prefs XML from &quot;%1&quot;: %2 at line %3, col %4</source>
      <translation>&quot;%1&quot;로 기본 설정 XML 읽기 실패: %2 , 행 %3 열 %4</translation>
    </message>
    <message>
      <source>Postscript</source>
      <translation>포스트스크립트</translation>
    </message>
    <message>
      <source>Error Writing Preferences</source>
      <translation>기본 설정 쓰기 오류</translation>
    </message>
    <message>
      <source>Scribus was not able to save its preferences:&lt;br>%1&lt;br>Please check file and directory permissions and available disk space.</source>
      <comment>scribus app error</comment>
      <translation>Scribus는 기본설정을 저장할 수 없음:&lt;br>%1&lt;br> 파일과 폴더 속성 및 이용가능한 디스크 공간을 체크하시오.</translation>
    </message>
    <message>
      <source>Error Loading Preferences</source>
      <translation>기본 설정 읽어오기 오류</translation>
    </message>
    <message>
      <source>Scribus was not able to load its preferences:&lt;br>%1&lt;br>Default settings will be loaded.</source>
      <translation>Scribus가 기본설정을 읽을 수 없습니다:&lt;br>%1&lt;br> 기본 설정을 읽어들입니다.</translation>
    </message>
  </context>
  <context>
    <name>PresetLayout</name>
    <message>
        <source>None</source>
        <translation>없음</translation>
    </message>
    <message>
        <source>Book</source>
        <translation>책</translation>
    </message>
    <message>
        <location filename="../../scribus/marginwidget.cpp" line="484"/>
        <source>Magazine</source>
        <translation>잡지</translation>
    </message>
    <message>
        <source>You can select predefined page layout here. &apos;None&apos; leave margins as is, &apos;Book&apos; sets margins classically (Gutenberg). &apos;Book&apos; is proposed for two-sided documents. &apos;Magazine&apos; sets all margins for same value. Leading is Left/Inside value.</source>
        <translation>여기에서 미리 정의된 페이지 형식을 선택할 수 있습니다.&apos;없음&apos;  여백을 그대로 둡니다,  &apos;책&apos; 고전적(구텐베르크)으로 여백을 설정합니다. . &apos;책&apos; 양면 문서 작성시 적용, &apos;잡지&apos; 전체 여백을 동일 값으로 설정. 리딩은 왼쪽/안쪽 값입니다.</translation>
    </message>
	   <message>
      <source>Fibonacci</source>
      <translation>피보나찌</translation>
    </message>
    <message>
      <source>Golden Mean</source>
      <translation>황금 분할</translation>
    </message>
    <message>
      <source>Nine Parts</source>
      <translation>9 분할</translation>
    </message>
	    <message>
        <location filename="../../scribus/marginwidget.cpp" line="483"/>
        <source>Gutenberg</source>
        <translation>구텐베르크</translation>
    </message>
    <message>
      <source>None</source>
      <comment>layout type</comment>
      <translation>없음</translation>
    </message>
    <message>
      <source>You can select a predefined page layout here. 'None' leaves margins as is, Gutenberg sets margins classically. 'Magazine' sets all margins to the same value. Leading is Left/Inside value.</source>
      <translation>미리 정의된 페이지 배치를 선택할 수 있습니다. 없음은 여백을 있는 그대로 두며, 구텐베르크는 여백을 고전적으로 설정. 매거진은 전체 여백을 동일 한 값으로 설정. 리딩은 왼쪽/안쪽 값입니다.</translation>
    </message>
  </context>
  <context>
    <name>PrintDialog</name>
	    <message>
        <location filename="../printdialog.cpp" line="67"/>
        <source>Setup Printer</source>
       <translation>프린터 설정</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="74"/>
        <source>Print Destination</source>
        <translation>인쇄 방향</translation>
    </message>
    <message>
      <source>File</source>
      <translation>파일</translation>
    </message>
	    <message>
        <location filename="../printdialog.cpp" line="89"/>
        <source>&amp;Options...</source>
        <translation>설정(&amp;O)...</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="100"/>
        <source>&amp;File:</source>
        <translation>파일(&amp;F):</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="106"/>
        <source>C&amp;hange...</source>
        <translation>바꾸기(&amp;H)...</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="113"/>
        <source>A&amp;lternative Printer Command</source>
        <translation>대안 프린터 명령어</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="122"/>
        <source>Co&amp;mmand:</source>
        <translation>명령어(&amp;M):</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="130"/>
        <source>Range</source>
        <translation>범위</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="135"/>
        <source>Print &amp;All</source>
       <translation>전체 인쇄(&amp;A)</translation>
    </message>
    <message>
      <source>Print Current Pa&amp;ge</source>
      <translation>현재 페이지 인쇄(&amp;G)</translation>
    </message>
	    <message>
        <location filename="../printdialog.cpp" line="139"/>
        <source>Print &amp;Range</source>
        <translation>인쇄 범위(&amp;R)</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="159"/>
        <source>N&amp;umber of Copies:</source>
        <translation>복사 갯수(&amp;U):</translation>
    </message>
    <message>
      <source>Print Normal</source>
      <translation>보통 인쇄</translation>
    </message>
	    <message>
        <location filename="../printdialog.cpp" line="172"/>
        <source>Print Separations</source>
        <translation>색분해 인쇄</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="176"/>
        <source>Print in Color if Available</source>
        <translation>가능하다면 색상 인쇄</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="177"/>
        <source>Print in Grayscale</source>
        <translation>회색톤 인쇄</translation>
    </message>
    <message>
      <source>All</source>
      <translation>전체</translation>
    </message>
    <message>
      <source>Cyan</source>
      <translation>남색(C)</translation>
    </message>
    <message>
      <source>Magenta</source>
      <translation>자홍색(M)</translation>
    </message>
    <message>
      <source>Yellow</source>
      <translation>노란색(Y)</translation>
    </message>
    <message>
      <source>Black</source>
      <translation>검은색(K)</translation>
    </message>
	    <message>
        <location filename="../printdialog.cpp" line="221"/>
        <source>PostScript Level 1</source>
        <translation>포스트스크립트 레벨 1</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="222"/>
        <source>PostScript Level 2</source>
        <translation>포스트스크립트 레벨 2</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="223"/>
        <source>PostScript Level 3</source>
        <translation>포스트스크립트 레벨 3</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="190"/>
        <source>Options</source>
        <translation>설정</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="196"/>
        <source>Page</source>
        <translation>페이지</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="202"/>
        <source>Mirror Page(s) Horizontal</source>
        <translation>페이지 수평 미러</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="205"/>
        <source>Mirror Page(s) Vertical</source>
       <translation>페이지 수직 미러</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="208"/>
        <source>Set Media Size</source>
        <translation>미디어 크기 설정</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="214"/>
        <source>Color</source>
        <translation>색상</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="220"/>
        <source>Apply Under Color Removal</source>
        <translation>색상 제거하에 적용</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="223"/>
        <source>Convert Spot Colors to Process Colors</source>
        <translation>Spot색상을 진행 색상으로 변환</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="263"/>
        <source>Apply ICC Profiles</source>
        <translation>ICC 프로파일 적용</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="232"/>
        <source>Advanced Options</source>
        <translation>자세한 설정</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="303"/>
        <source>Preview...</source>
        <translation>미리보기...</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="308"/>
        <source>&amp;Print</source>
        <translation>인쇄(&amp;P)</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="378"/>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>전체 페이지인 경우 
1페이지와 4-5페이지를 출력할 경우 1, 4-5로
콤마를 삽입하여 출력할 페이지 표시.</translation>
    </message>
    <message>
        <source>Use an alternative print manager, such as kprinter or gtklp,
to utilize additional printing options</source>
        <translation>부가적 출력 옵션을 사용할 때 kprinter 나 gtklp와 같은 대안 인쇄 관리자를 이용합니다.</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="380"/>
        <source>Sets the PostScript Level.
 Setting to Level 1 or 2 can create huge files</source>
        <translation>포스트스크립트 레벌을 설정.
레벨 1 또는 2 설정은 큰 파일이 생성됩니다.</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>검정, 청록, 노랑 자홍으로 
		구성된 그레이 음영으로 바꾸는 방법. 
		UCR은 회색에 가까운 중간 또는 어두운 색조의 이미지부분에 영향을 준다.  
		이것은 이미지출력과 실험방법 및 개별적으로 
		필요한 테스팅등을 향상시킨다. 
		UCR은 CMY 잉크의 과도한 혼합가능성을 감소시켜준다</translation>
    </message>
    <message>
      <source>Failed to retrieve printer settings</source>
      <translation>프린터 설정 복구 실패</translation>
    </message>
    <message>
      <source>Save as</source>
      <translation>다른 이름으로 저장</translation>
    </message>
    <message>
      <source>PostScript Files (*.ps);;All Files (*)</source>
      <translation>포스트스크립트 파일 (*.ps);;전체 파일 (*)</translation>
    </message>
	    <message>
        <location filename="../printdialog.cpp" line="379"/>
        <source>Use an alternative print manager, such as kprinter or gtklp, to utilize additional printing options</source>
        <translation>부가적 출력 옵션을 사용할 때 kprinter 나 gtklp와 같은 대안 인쇄 관리자를 이용합니다.</translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page or exported file</source>
        <translation>인쇄 페이지 또는 내보내기 파일에서 객체 밖의 여백을 보이지 않게 </translation>
    </message>
    <message>
        <location filename="../../scribus/printdialog.cpp" line="307"/>
        <source>Failed to retrieve printer settings</source>
        <translation>프린터 설정 복구 실패</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="226"/>
        <source>Force Overprint Mode</source>
        <translation>강제 중첩인쇄 모드</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="253"/>
        <source>Offset:</source>
        <translation>옵셋:</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="271"/>
        <source>Top:</source>
        <translation>위:</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="276"/>
        <source>Bottom:</source>
        <translation>아래:</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="281"/>
        <source>Left:</source>
        <translation>왼쪽:</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="286"/>
        <source>Right:</source>
        <translation>오른쪽:</translation>
    </message>
    <message>
      <source>Inside:</source>
      <translation>왼쪽:</translation>
    </message>
    <message>
      <source>Outside:</source>
      <translation>오른쪽:</translation>
    </message>
	<message>
        <location filename="../printdialog.cpp" line="391"/>
        <source>Distance for bleed from the top of the physical page</source>
        <translation>페이지 위부터 물림재단 거리</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="392"/>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation>페이지 아래부터 물림재단 거리</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="393"/>
        <source>Distance for bleed from the left of the physical page</source>
        <translation>페이지 왼쪽부터 물림재단 거리</translation>
    </message>
    <message>
        <location filename="../printdialog.cpp" line="394"/>
        <source>Distance for bleed from the right of the physical page</source>
        <translation>페이지 오른쪽부터 물림재단 거리</translation>
    </message>
  </context>
  <context>
    <name>PrintDialogBase</name>
    <message>
      <source>Setup Printer</source>
      <translation>프린터 설정</translation>
    </message>
    <message>
      <source>Print Destination</source>
      <translation>인쇄 방향</translation>
    </message>
    <message>
      <source>&amp;Options...</source>
      <translation>설정(&amp;O)...</translation>
    </message>
    <message>
      <source>&amp;File:</source>
      <translation>파일(&amp;F):</translation>
    </message>
    <message>
      <source>C&amp;hange...</source>
      <translation>바꾸기(&amp;H)...</translation>
    </message>
    <message>
      <source>Use an alternative print manager, such as kprinter or gtklp, to utilize additional printing options</source>
      <translation>부가적 인쇄 옵션을 사용할 때, kprinter 나 gtklp와 같은 대안 인쇄 관리자를 이용합니다.</translation>
    </message>
    <message>
      <source>A&amp;lternative Printer Command</source>
      <translation>대안 프린터 명령어(&amp;L)</translation>
    </message>
    <message>
      <source>Co&amp;mmand:</source>
      <translation>명령어(&amp;M):</translation>
    </message>
    <message>
      <source>Range</source>
      <translation>범위</translation>
    </message>
    <message>
      <source>Print &amp;All</source>
      <translation>전체 인쇄(&amp;A)</translation>
    </message>
    <message>
      <source>N&amp;umber of Copies:</source>
      <translation>복사 갯수(&amp;U):</translation>
    </message>
    <message>
      <source>Print Current Pa&amp;ge</source>
      <translation>현재 페이지 인쇄(&amp;G)</translation>
    </message>
    <message>
      <source>Print &amp;Range</source>
      <translation>범위 인쇄(&amp;R)</translation>
    </message>
    <message>
      <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
      <translation>전체 페이지인 경우 
1페이지와 4-5페이지를 출력할 경우 1, 4-5로
콤마를 삽입하여 출력할 페이지 표시.</translation>
    </message>
    <message>
      <source>Options</source>
      <translation>설정</translation>
    </message>
    <message>
      <source>Print Normal</source>
      <translation>일반 인쇄</translation>
    </message>
    <message>
      <source>Print Separations</source>
      <translation>색분해 인쇄</translation>
    </message>
    <message>
      <source>Print in Color if Available</source>
      <translation>가능하면 칼라로 인쇄</translation>
    </message>
    <message>
      <source>Print in Grayscale</source>
      <translation>회색톤으로 인쇄</translation>
    </message>
    <message>
      <source>Sets the PostScript Level.
 Setting to Level 1 or 2 can create huge files</source>
      <translation>포스트스크립 레벨을 설정. 
레벨  1혹은 2로 설정은 파일이 커질 수 있습니다</translation>
    </message>
    <message>
      <source>Advanced Options</source>
      <translation>자세한 설정</translation>
    </message>
    <message>
      <source>Page</source>
      <translation>페이지</translation>
    </message>
    <message>
      <source>Mirror Page(s) Horizontal</source>
      <translation>페이지 수평 미러</translation>
    </message>
    <message>
      <source>Mirror Page(s) Vertical</source>
      <translation>페이지 수직 미러</translation>
    </message>
    <message>
      <source>This enables you to explicitely set the media size of the PostScript file. Not recommended unless requested by your printer.</source>
      <translation>이것은 포스트스크립트 파일의 미디어 크기를 설정하도록 해줍니다. 프린터에서 요구하지 않으면 건드리지 마세요.</translation>
    </message>
    <message>
      <source>Set Media Size</source>
      <translation>미디어 크기 설정</translation>
    </message>
    <message>
      <source>Clip to Page Margins</source>
      <translation>페이지 여백으로 잘라내기</translation>
    </message>
    <message>
      <source>Color</source>
      <translation>색상</translation>
    </message>
    <message>
      <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis.UCR reduces the possibility of over saturation with CMY inks.</source>
      <translation>검정, 청록, 노랑, 자홍으로 구성된 회색 음영으로 바꾸는 방법. UCR은 회색에 가까운 중간 또는 어두운 색조의 이미지 부분에 영향을 줍니다.  이것은 이미지 인쇄와 실험방법 및 개별적으로 필요한 테스팅등을 향상시킵니다. UCR은 CMY 잉크의 과도한 채색의 가능성을 감소시켜줍니다</translation>
    </message>
    <message>
      <source>Apply Under Color Removal</source>
      <translation>색상 제거하에 적용</translation>
    </message>
    <message>
      <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
      <translation>Spot색상을 혼합색상으로 변환 가능, spot색상을 인쇄하지 않는다면 가능한 한 그대로 둡니다.</translation>
    </message>
    <message>
      <source>Convert Spot Colors to Process Colors</source>
      <translation>Spot색상을 진행 색상으로 변환</translation>
    </message>
    <message>
      <source>Allows you to embed color profiles in the print stream when color management is enabled</source>
      <translation>컬러 관리가 가능한 경우 인쇄 스트림에서 내장 ICC 프로파일을 허용한다</translation>
    </message>
    <message>
      <source>Apply Color Profiles</source>
      <translation>색상 프로파일 적용</translation>
    </message>
    <message>
      <source>Marks</source>
      <translation>마크</translation>
    </message>
    <message>
      <source>This creates crop marks in the PDF indicating where the paper should be cut or trimmed after printing</source>
      <translation>PDF에서 출력 후 페이퍼가 잘려질 수 있는 부분을 지시하는 잘라내기 마크를 생성합니다</translation>
    </message>
    <message>
      <source>Crop Marks</source>
      <translation>잘라내기 마크</translation>
    </message>
    <message>
      <source>Add registration marks which are added to each separation</source>
      <translation>각각의 분리자에 추가되는 등록 마크 더하기</translation>
    </message>
    <message>
      <source>Registration Marks</source>
      <translation>등록 마크</translation>
    </message>
    <message>
      <source>This creates bleed marks which are indicated by  _ . _ and show the bleed limit</source>
      <translation> _ . _ 를 나타내는 물림재단 마크를 생성하며 물림재단 한계를 보여줍니다</translation>
    </message>
    <message>
      <source>Bleed Marks</source>
      <translation>물림재단 마크</translation>
    </message>
    <message>
      <source>Add color calibration bars</source>
      <translation>색상 조정막대를 더하기</translation>
    </message>
    <message>
      <source>Color Bars</source>
      <translation>색상 막대</translation>
    </message>
    <message>
      <source>Offset:</source>
      <translation>옵셋:</translation>
    </message>
    <message>
      <source>Indicate the distance offset for the registration marks</source>
      <translation>등록 마크의 옵셋 거리를 표시합니다</translation>
    </message>
    <message>
      <source>Bleeds</source>
      <translation>물림재단</translation>
    </message>
    <message>
      <source>Top:</source>
      <translation>위:</translation>
    </message>
    <message>
      <source>Distance for bleed from the top of the physical page</source>
      <translation>페이지 위부터 물림재단 거리</translation>
    </message>
    <message>
      <source>Left:</source>
      <translation>왼쪽:</translation>
    </message>
    <message>
      <source>Distance for bleed from the right of the physical page</source>
      <translation>페이지 오른쪽으로부터 물림재단 거리</translation>
    </message>
    <message>
      <source>Bottom:</source>
      <translation>아래:</translation>
    </message>
    <message>
      <source>Distance for bleed from the bottom of the physical page</source>
      <translation>페이지 아래로부터 물림재단 거리</translation>
    </message>
    <message>
      <source>Right:</source>
      <translation>오른쪽:</translation>
    </message>
    <message>
      <source>Distance for bleed from the left of the physical page</source>
      <translation>페이지 왼쪽부터 물림재단 거리</translation>
    </message>
    <message>
      <source>Use the existing bleed settings from the document preferences</source>
      <translation>문서 선택사항으로부터 기존 물림재단 설정을 사용</translation>
    </message>
    <message>
      <source>Use Document Bleeds</source>
      <translation>문서 물림재단 사용</translation>
    </message>
    <message>
      <source>Preview...</source>
      <translation>이미보기...</translation>
    </message>
    <message>
      <source>&amp;Print</source>
      <translation>출력(&amp;P)</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>취소</translation>
    </message>
  </context>
  <context>
    <name>PropertiesPalette</name>
    <message>
      <source>Fixed Linespacing</source>
      <translation>고정 줄간격</translation>
    </message>
    <message>
      <source>Automatic Linespacing</source>
      <translation>자동 줄간격</translation>
    </message>
    <message>
      <source>Align to Baseline Grid</source>
      <translation>기준선 모눈으로 정렬</translation>
    </message>
    <message>
      <source>&amp;X1:</source>
      <translation>&amp;X1:</translation>
    </message>
    <message>
      <source>X&amp;2:</source>
      <translation>X&amp;2:</translation>
    </message>
    <message>
      <source>Y&amp;1:</source>
      <translation>Y&amp;1:</translation>
    </message>
    <message>
      <source>&amp;Y2:</source>
      <translation>&amp;Y2:</translation>
    </message>
    <message>
      <source>&amp;X-Pos:</source>
      <translation>X 위치(&amp;X):</translation>
    </message>
    <message>
      <source>&amp;Width:</source>
      <translation>너비(&amp;W):</translation>
    </message>
    <message>
      <source>&amp;Y-Pos:</source>
      <translation>Y 위치(&amp;Y):</translation>
    </message>
    <message>
      <source>&amp;Height:</source>
      <translation>높이(&amp;H):</translation>
    </message>
    <message>
      <source>Distance between columns</source>
      <translation>열사이 거리</translation>
    </message>
    <message>
      <source>Column width</source>
      <translation>열 너비</translation>
    </message>
    <message>
      <source>No Style</source>
      <translation>스타일 없음</translation>
    </message>
	    <message>
        <source>None</source>
        <translation>없음</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>경고</translation>
    </message>
    <message>
      <source>Name &quot;%1&quot; isn't unique.&lt;br/>Please choose another.</source>
      <translation>이름 &quot;%1&quot;이 이미 있습니다.&lt;br/>다른 이름을 선택하시오</translation>
    </message>
    <message>
      <source>Properties</source>
      <translation>객체 속성 편집</translation>
    </message>
    <message>
      <source>X, Y, &amp;Z</source>
      <translation>X, Y, &amp;Z</translation>
    </message>
    <message>
      <source>&amp;Text</source>
      <translation>텍스트(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;Image</source>
      <translation>이미지(&amp;I)</translation>
    </message>
    <message>
      <source>&amp;Shape</source>
      <translation>도형(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Line</source>
      <translation>선(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Colors</source>
      <translation>색상(&amp;C)</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>이름</translation>
    </message>
    <message>
      <source>Geometry</source>
      <translation>프레임 조정</translation>
    </message>
    <message>
      <source>&amp;Rotation:</source>
      <translation>회전(&amp;R):</translation>
    </message>
    <message>
      <source>Basepoint:</source>
      <translation>기준점:</translation>
    </message>
    <message>
      <source>Level</source>
      <translation>레벨</translation>
    </message>
    <message>
      <source>Shape:</source>
      <translation>도형:</translation>
    </message>
	    <message>
        <location filename="../propertiespalette.cpp" line="4341"/>
        <source>&amp;Edit Shape...</source>
        <translation>도형 편집(&amp;E)...</translation>
    </message>
    <message>
      <source>R&amp;ound
Corners:</source>
      <translation>둥근
	  모서리(&amp;O):</translation>
    </message>
    <message>
      <source>Distance of Text</source>
      <translation>텍스트 거리</translation>
    </message>
    <message>
      <source>Colu&amp;mns:</source>
      <translation>열(&amp;M):</translation>
    </message>
	    <message>
        <source>&amp;Gap:</source>
        <translation>간격(&amp;G):</translation>
    </message>
    <message>
      <source>To&amp;p:</source>
      <translation>위(&amp;P):</translation>
    </message>
    <message>
      <source>&amp;Bottom:</source>
      <translation>아래(&amp;B):</translation>
    </message>
    <message>
      <source>&amp;Left:</source>
      <translation>왼쪽(&amp;L):</translation>
    </message>
    <message>
      <source>&amp;Right:</source>
      <translation>오른쪽(&amp;R):</translation>
    </message>
    <message>
      <source>T&amp;abulators...</source>
      <translation>탭키 설정(&amp;A)...</translation>
    </message>
    <message>
      <source>Path Text Properties</source>
      <translation>경로 텍스트 속성</translation>
    </message>
    <message>
      <source>Show Curve</source>
      <translation>곡선 보이기</translation>
    </message>
    <message>
      <source>Start Offset:</source>
      <translation>시작 옵셋:</translation>
    </message>
    <message>
      <source>Distance from Curve:</source>
      <translation>곡선 거리:</translation>
    </message>
    <message>
      <source>Use &amp;Bounding Box</source>
      <translation>경계 상자 사용(&amp;B)</translation>
    </message>
    <message>
      <source>&amp;Use Contour Line</source>
      <translation>윤곽선 사용(&amp;U)</translation>
    </message>
	 <message>
        <source>St&amp;yle:</source>
        <translation>스타일(&amp;Y):</translation>
    </message>
    <message>
        <source>Lan&amp;guage:</source>
        <translation>언어(&amp;L):</translation>
    </message>
    <message>
      <source>&amp;Free Scaling</source>
      <translation>임의비율(&amp;F)</translation>
    </message>
    <message>
      <source>Actual X-DPI:</source>
      <translation>실제 X-DPI:</translation>
    </message>
    <message>
      <source>Actual Y-DPI:</source>
      <translation>실제 Y-DPI:</translation>
    </message>
    <message>
      <source>X-Sc&amp;ale:</source>
      <translation>X-비율 (&amp;A):</translation>
    </message>
    <message>
      <source>Y-Scal&amp;e:</source>
      <translation>Y-비율 (&amp;E):</translation>
    </message>
    <message>
      <source>Scale &amp;To Frame Size</source>
      <translation>프레임 크기로 비율 조정(&amp;T)</translation>
    </message>
    <message>
      <source>P&amp;roportional</source>
      <translation>비례(&amp;R)</translation>
    </message>
    <message>
      <source>Input Profile:</source>
      <translation>입력 프로파일:</translation>
    </message>
    <message>
      <source>Rendering Intent:</source>
      <translation>렌더링 목적:</translation>
    </message>
    <message>
      <source>Perceptual</source>
      <translation>지각</translation>
    </message>
    <message>
      <source>Relative Colorimetric</source>
      <translation>상대 색상계</translation>
    </message>
    <message>
      <source>Saturation</source>
      <translation>채도</translation>
    </message>
    <message>
      <source>Absolute Colorimetric</source>
      <translation>절대 색상계</translation>
    </message>
    <message>
      <source>Left Point</source>
      <translation>시작점</translation>
    </message>
    <message>
      <source>End Points</source>
      <translation>끝점</translation>
    </message>
    <message>
      <source>&amp;Basepoint:</source>
      <translation>기준점(&amp;B):</translation>
    </message>
    <message>
      <source>T&amp;ype of Line:</source>
      <translation>선 종류(&amp;Y):</translation>
    </message>
    <message>
      <source>Start Arrow:</source>
      <translation>시작 화살표:</translation>
    </message>
    <message>
      <source>End Arrow:</source>
      <translation>끝 화살표:</translation>
    </message>
    <message>
      <source>Line &amp;Width:</source>
      <translation>선 너비(&amp;W):</translation>
    </message>
    <message>
      <source>Ed&amp;ges:</source>
      <translation>가장자리(&amp;G):</translation>
    </message>
    <message>
      <source>Miter Join</source>
      <translation>미터 결합</translation>
    </message>
    <message>
      <source>Bevel Join</source>
      <translation>베벨 결합</translation>
    </message>
    <message>
      <source>Round Join</source>
      <translation>라운드 결합</translation>
    </message>
    <message>
      <source>Flat Cap</source>
      <translation>평면</translation>
    </message>
    <message>
      <source>Square Cap</source>
      <translation>사각</translation>
    </message>
    <message>
      <source>Round Cap</source>
      <translation>곡선</translation>
    </message>
    <message>
      <source>&amp;Endings:</source>
      <translation>끝 형태(&amp;E):</translation>
    </message>
    <message>
      <source>Cell Lines</source>
      <translation>표 선</translation>
    </message>
    <message>
      <source>Line at Top</source>
      <translation>위쪽 선</translation>
    </message>
    <message>
      <source>Line at the Left</source>
      <translation>왼쪽 선</translation>
    </message>
    <message>
      <source>Line at the Right </source>
      <translation>오른쪽 선</translation>
    </message>
    <message>
      <source>Line at Bottom</source>
      <translation>아래쪽 선</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> 포인트</translation>
    </message>
    <message>
      <source>Name of selected object</source>
      <translation>선택된 객체명</translation>
    </message>
    <message>
      <source>Horizontal position of current basepoint</source>
      <translation>현재 기준선에서 수평 위치</translation>
    </message>
    <message>
      <source>Vertical position of current basepoint</source>
      <translation>현재 기준선에서 수직 위치</translation>
    </message>
    <message>
      <source>Width</source>
      <translation>너비</translation>
    </message>
    <message>
      <source>Height</source>
      <translation>높이</translation>
    </message>
    <message>
      <source>Rotation of object at current basepoint</source>
      <translation>현재 기준선에서 객체 회전</translation>
    </message>
    <message>
      <source>Point from which measurements or rotation angles are referenced</source>
      <translation>측정 및 회전각을 참조할 수 있는 점</translation>
    </message>
    <message>
      <source>Flip Horizontal</source>
      <translation>수평으로 뒤집기</translation>
    </message>
    <message>
      <source>Flip Vertical</source>
      <translation>수직으로 뒤집기</translation>
    </message>
    <message>
      <source>Move one level up</source>
      <translation>한 레벨 위로 이동</translation>
    </message>
    <message>
      <source>Move one level down</source>
      <translation>한 레벨 아래로 이동</translation>
    </message>
    <message>
      <source>Move to front</source>
      <translation>맨앞으로 이동</translation>
    </message>
    <message>
      <source>Move to back</source>
      <translation>맨뒤로 이동</translation>
    </message>
    <message>
      <source>Indicates the level the object is on, 0 means the object is at the bottom</source>
      <translation>기입 숫자는 객체 위치 레벨 표시, 0은 객체가 밑바닥에 위치</translation>
    </message>
    <message>
      <source>Lock or unlock the object</source>
      <translation>객체 잠금/해제</translation>
    </message>
    <message>
      <source>Lock or unlock the size of the object</source>
      <translation>객체 크기 잠금/해제</translation>
    </message>
    <message>
      <source>Font of selected text or object</source>
      <translation>선택된 텍스트나 객체 글꼴</translation>
    </message>
    <message>
      <source>Font Size</source>
      <translation>글꼴 크기</translation>
    </message>
    <message>
      <source>Offset to baseline of characters</source>
      <translation>문자를 위 아래로 기준점 이동</translation>
    </message>
    <message>
      <source>Scaling width of characters</source>
      <translation>글자 너비 비율</translation>
    </message>
    <message>
      <source>Scaling height of characters</source>
      <translation>글자 높이 비율</translation>
    </message>
    <message>
      <source>Saturation of color of text stroke</source>
      <translation>텍스트 외곽선 색상 채도</translation>
    </message>
    <message>
      <source>Saturation of color of text fill</source>
      <translation>텍스트 채움 색상의 채도</translation>
    </message>
    <message>
      <source>Right to Left Writing</source>
      <translation>오른쪽에서 왼쪽으로 쓰기</translation>
    </message>
    <message>
      <source>Manual Tracking</source>
      <translation>글자 사이 간격</translation>
    </message>
    <message>
      <source>Line Spacing</source>
      <translation>줄 간격</translation>
    </message>
    <message>
      <source>Change settings for left or end points</source>
      <translation>왼쪽 또는 끝점의 설정 변경</translation>
    </message>
    <message>
      <source>Pattern of line</source>
      <translation>선 문양</translation>
    </message>
    <message>
      <source>Thickness of line</source>
      <translation>선 두께</translation>
    </message>
    <message>
      <source>Type of line joins</source>
      <translation>선 결합 형태</translation>
    </message>
    <message>
      <source>Type of line end</source>
      <translation>선 끝 형태</translation>
    </message>
    <message>
      <source>Line style of current object</source>
      <translation>현재 객체 선 스타일</translation>
    </message>
    <message>
      <source>Choose the shape of frame...</source>
      <translation>프레임 형태 선택...</translation>
    </message>
    <message>
      <source>Edit shape of the frame...</source>
      <translation>프레임 형태 편집...</translation>
    </message>
    <message>
      <source>Set radius of corner rounding</source>
      <translation>모서리 끝 반경 설정</translation>
    </message>
    <message>
      <source>Number of columns in text frame</source>
      <translation>텍스트 프레임의 열 수</translation>
    </message>
    <message>
      <source>Switches between Gap or Column width</source>
      <translation>간격이나 열 너비 사이에서 전환</translation>
    </message>
    <message>
      <source>Distance of text from top of frame</source>
      <translation>프레임 위에서 텍스트 거리</translation>
    </message>
    <message>
      <source>Distance of text from bottom of frame</source>
      <translation>프레임 아래에서 텍스트 거리</translation>
    </message>
    <message>
      <source>Distance of text from left of frame</source>
      <translation>프레임 왼쪽에서 텍스트 거리</translation>
    </message>
    <message>
      <source>Distance of text from right of frame</source>
      <translation>프레임 오른쪽에서 텍스트 거리</translation>
    </message>
    <message>
      <source>Edit tab settings of text frame...</source>
      <translation>텍스트 프레임의 탭 설정 편집...</translation>
    </message>
    <message>
      <source>Allow the image to be a different size to the frame</source>
      <translation>프레임에서 이미지가 다른 크기가 되는 것을 허용</translation>
    </message>
    <message>
      <source>Horizontal offset of image within frame</source>
      <translation>프레임 내에서 이미지의 수평 옵셋</translation>
    </message>
    <message>
      <source>Vertical offset of image within frame</source>
      <translation>프레임 내에서 이미지의 수직 옵셋</translation>
    </message>
    <message>
      <source>Resize the image horizontally</source>
      <translation>수평으로 이미지 크기를 재조정</translation>
    </message>
    <message>
      <source>Resize the image vertically</source>
      <translation>수직으로 이미지 크기를 재조정</translation>
    </message>
    <message>
      <source>Keep the X and Y scaling the same</source>
      <translation>X와 Y의 비율을 같게 유지</translation>
    </message>
    <message>
      <source>Keep the aspect ratio</source>
      <translation>종횡비 유지</translation>
    </message>
    <message>
      <source>Make the image fit within the size of the frame</source>
      <translation>프레임 크기 내에서 이미지를 적절히 맞춤</translation>
    </message>
    <message>
      <source>Use image proportions rather than those of the frame</source>
      <translation>프레임 비율보다 이미지 비율을 사용</translation>
    </message>
    <message>
      <source>Source profile of the image</source>
      <translation>이미지 소스 프로파일</translation>
    </message>
    <message>
      <source>Rendering intent for the image</source>
      <translation>이미지를 위한 렌더링 목적</translation>
    </message>
    <message>
      <source>Fill Rule</source>
      <translation>채움 규칙</translation>
    </message>
    <message>
      <source>Even-Odd</source>
      <translation>부분채움</translation>
    </message>
    <message>
      <source>Non Zero</source>
      <translation>전체</translation>
    </message>
    <message>
      <source>Overprinting</source>
      <translation>중첩인쇄</translation>
    </message>
    <message>
      <source>Knockout</source>
      <translation>녹아웃</translation>
    </message>
    <message>
      <source>Overprint</source>
      <translation>중첩인쇄</translation>
    </message>
    <message>
      <source>Color of text stroke and/or drop shadow, depending which is chosen.If both are chosen, then they share the same color.</source>
      <translation>선택된 것에 근거한 텍스트 외곽선 또는 물방울 음영 색상. 양쪽이 선택되면 같은 색상을 공유.</translation>
    </message>
    <message>
      <source>Color of selected text. If Outline text decoration is enabled, this color will be the fill color. If Drop Shadow Text is enabled, then this will be the top most color.</source>
      <translation>선택된 텍스트 색상.  외곽선 텍스트 효과가 가능하다면 이 색상은 채움 색상이 됩니다. 물방울 음영 텍스트가 가능하다면 이것은 상위 대부분 색상이 될 것임.</translation>
    </message>
    <message>
      <source>Gap:</source>
      <translation>간격:</translation>
    </message>
    <message>
      <source>Width:</source>
      <translation>너비:</translation>
    </message>
    <message>
      <source>Text &amp;Flow Around Frame</source>
      <translation>프레임상 텍스트 흐름(&amp;F)</translation>
    </message>
    <message>
      <source>Disabled</source>
      <translation>불가</translation>
    </message>
    <message>
      <source>Use Frame &amp;Shape</source>
      <translation>프레임 형태 사용(&amp;S)</translation>
    </message>
    <message>
      <source>Image Effects</source>
      <translation>이미지 효과</translation>
    </message>
    <message>
      <source>Extended Image Properties</source>
      <translation>확장 이미지 속성</translation>
    </message>
    <message>
      <source>Disable text flow from lower frames around object</source>
      <translation>객체 주위 아래쪽 프레임에서 텍스트 흐름 불가</translation>
    </message>
    <message>
      <source>Use the frame shape for text flow of text frames below the object.</source>
      <translation>객체 아래 텍스트 프레임의 흐름을 위한 프레임 형태 사용.</translation>
    </message>
    <message>
      <source>Use the bounding box, which is always rectangular, instead of the frame's shape for text flow of text frames below the object. </source>
      <translation>객체 아래 텍스트 프레임의 텍스트 흐름을 위한 프레임의 형태 대신, 항상 직사각형 경계 박스를 사용합니다.</translation>
    </message>
    <message>
      <source>Transparency Settings</source>
      <translation>투명도 설정</translation>
    </message>
    <message>
      <source>&amp;Group</source>
      <translation>그룹화(&amp;G)</translation>
    </message>
    <message>
      <source>Opacity:</source>
      <translation>불투명도:</translation>
    </message>
    <message>
      <source>Blend Mode:</source>
      <translation>혼합모드:</translation>
    </message>
    <message>
      <source>Normal</source>
      <translation>보통</translation>
    </message>
    <message>
      <source>Darken</source>
      <translation>어둡게</translation>
    </message>
    <message>
      <source>Lighten</source>
      <translation>밝게</translation>
    </message>
    <message>
      <source>Multiply</source>
      <translation>곱하기</translation>
    </message>
    <message>
      <source>Screen</source>
      <translation>화면</translation>
    </message>
    <message>
      <source>Overlay</source>
      <translation>중첩</translation>
    </message>
    <message>
      <source>Hard Light</source>
      <translation>강한 빛</translation>
    </message>
    <message>
      <source>Soft Light</source>
      <translation>부드러운 빛</translation>
    </message>
    <message>
      <source>Difference</source>
      <translation>차이</translation>
    </message>
    <message>
      <source>Exclusion</source>
      <translation>제외</translation>
    </message>
    <message>
      <source>Color Dodge</source>
      <translation>색상 피하기</translation>
    </message>
    <message>
      <source>Color Burn</source>
      <translation>색상 태움</translation>
    </message>
    <message>
      <source>Hue</source>
      <translation>색조</translation>
    </message>
    <message>
      <source>Color</source>
      <translation>색상</translation>
    </message>
    <message>
      <source>Group the selected objects</source>
      <translation>선택 객체 그룹화</translation>
    </message>
    <message>
      <source>Auto</source>
      <translation>자동</translation>
    </message>
    <message>
      <source>When chosen, the contour line can be edited with the Edit Shape Tool on the palette further above. When edited via the shape palette, this becomes a second separate line originally based on the frame's shape for text flow of text frames below the object. T</source>
      <translation>선택시, 윤곽선은 팔레트 윗쪽의 편집 형태 도구로 편집됩니다. 편집 팔레트를 통하여 편집할 때 이것은 객체 아래 텍스트 프레임의 텍스트 흐름을 위한 프레임 모양에 기초한 2번째 분리선이 됩니다.</translation>
    </message>
    <message>
      <source>Click and hold down to select the line spacing mode.</source>
      <translation>선 여백 모드를 선택하기 위하여 클릭하고 누르시오.</translation>
    </message>
    <message>
      <source>Default</source>
      <translation>기본값</translation>
    </message>
    <message>
      <source>Stair Step</source>
      <translation>한 단</translation>
    </message>
    <message>
      <source>Skew</source>
      <translation>왜곡</translation>
    </message>
    <message>
      <source>Flip Text</source>
      <translation>텍스트 뒤집기</translation>
    </message>
    <message>
      <source>Type:</source>
      <translation>형태:</translation>
    </message>
    <message>
      <source>Use Image Clip Path</source>
      <translation>이미지 자르기 경로 사용</translation>
    </message>
    <message>
      <source>Paragraph St&amp;yle:</source>
      <translation>문단 스타일(&amp;Y):</translation>
    </message>
    <message>
      <source>Character St&amp;yle:</source>
      <translation>문자 스타일(&amp;Y):</translation>
    </message>
    <message>
      <source>Optical Margins:</source>
      <translation>시각상 여백:</translation>
    </message>
    <message>
      <source>Word Tracking</source>
      <translation>단어 탐색</translation>
    </message>
    <message>
      <source>Min:</source>
      <translation>최소:</translation>
    </message>
    <message>
      <source>Norm:</source>
      <translation>보통:</translation>
    </message>
    <message>
      <source>Glyph Extension</source>
      <translation>문자 확장</translation>
    </message>
    <message>
      <source>Max:</source>
      <translation>최대:</translation>
    </message>
    <message>
      <source>Use the clipping path of the image</source>
      <translation>이미지의 자르기 경로 사용</translation>
    </message>
    <message>
      <source>Paragraph style of currently selected text or paragraph</source>
      <translation>현재 선택된 텍스트 또는 문단의 문단 스타일</translation>
    </message>
    <message>
      <source>Character style of currently selected text or paragraph</source>
      <translation>현재 선택된 텍스트 또는 문단의 글자 스타일</translation>
    </message>
    <message>
      <source>Remove Direct Paragraph Formatting</source>
      <translation>직접 문단 형식 제거</translation>
    </message>
    <message>
      <source>Remove Direct Character Formatting</source>
      <translation>직접 문자 형식 제거</translation>
    </message>
    <message>
      <source>Minimal width of spaces between words</source>
      <translation>단어사이 공백의 최소 너비</translation>
    </message>
    <message>
      <source>Normal width of spaces between words</source>
      <translation>단어사이 공백의 보통 너비</translation>
    </message>
    <message>
      <source>Minimal shrinkage of glyphs for justification</source>
      <translation>자리맞춤을 위한 사용자 문자표의 최소 축소</translation>
    </message>
    <message>
      <source>Maximal extension of glyphs for justification</source>
      <translation>자리맞춤을 위한 사용자 문자표의 최대 확장</translation>
    </message>
    <message>
      <source>Uses hanging punctuation and margin kerning to achieve nicer looking columns</source>
      <translation>열을 좋게 보이게 하기 위해 걸린 구두점 및 여백 돌출을 사용</translation>
    </message>
    <message>
      <source>Enable or disable exporting of the object</source>
      <translation>객체 내보내기 가능 또는 불가</translation>
    </message>
    <message>
      <source>Custom</source>
      <translation>사용자 설정</translation>
    </message>
    <message>
      <source>&amp;Edit...</source>
      <translation>편집(&amp;E)...</translation>
    </message>
    <message>
      <source>First Line Offset</source>
      <translation>첫 줄 옵셋</translation>
    </message>
    <message>
      <source>Maximum Ascent</source>
      <translation>최대 크게</translation>
    </message>
    <message>
      <source>Font Ascent</source>
      <translation>글꼴 크게</translation>
    </message>
    <message>
      <source>Color &amp; Effects</source>
      <translation>색상 효과</translation>
    </message>
    <message>
      <source>Advanced Settings</source>
      <translation>고급 설정</translation>
    </message>
    <message>
      <source>Style Settings</source>
      <translation>스타일 설정</translation>
    </message>
    <message>
      <source>Ungroup the selected group</source>
      <translation>선택그룹의 그룹해제</translation>
    </message>
  </context>
  <context>
    <name>PythonConsole</name>
    <message>
      <source>&amp;Open...</source>
      <translation>열기(&amp;O)...</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>저장(&amp;S)</translation>
    </message>
    <message>
      <source>Save &amp;As...</source>
      <translation>다른 이름으로 저장(&amp;A)...</translation>
    </message>
    <message>
      <source>&amp;File</source>
      <translation>파일(&amp;F)</translation>
    </message>
    <message>
      <source>&amp;Run</source>
      <translation>실행(&amp;R)</translation>
    </message>
    <message>
      <source>Run As &amp;Console</source>
      <translation>콘솔 실행(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Save Output...</source>
      <translation>출력 저장(&amp;S)...</translation>
    </message>
    <message>
      <source>&amp;Script</source>
      <translation>스크립트(&amp;S)</translation>
    </message>
    <message>
      <source>Script Console</source>
      <translation>스크립트 콘솔</translation>
    </message>
    <message>
      <source>&amp;Quit</source>
      <translation>종료(&amp;Q)</translation>
    </message>
  </context>
  <context>
    <name>QColorDialog</name>
    <message>
      <source>Hu&amp;e:</source>
      <translation>색조(&amp;E):</translation>
    </message>
    <message>
      <source>&amp;Sat:</source>
      <translation>채도(&amp;S):</translation>
    </message>
    <message>
      <source>&amp;Val:</source>
      <translation>명도(&amp;V):</translation>
    </message>
    <message>
      <source>&amp;Red:</source>
      <translation>적(&amp;R):</translation>
    </message>
    <message>
      <source>&amp;Green:</source>
      <translation>녹(&amp;G):</translation>
    </message>
    <message>
      <source>Bl&amp;ue:</source>
      <translation>청(&amp;U):</translation>
    </message>
    <message>
      <source>A&amp;lpha channel:</source>
      <translation>알파 채널(&amp;L):</translation>
    </message>
    <message>
      <source>&amp;Basic colors</source>
      <translation>기본 색상(&amp;B)</translation>
    </message>
    <message>
      <source>&amp;Custom colors</source>
      <translation>사용자 색상(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Define Custom Colors >></source>
      <translation>사용자 색상 정의(&amp;D) >></translation>
    </message>
    <message>
      <source>OK</source>
      <translation>완료</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>취소</translation>
    </message>
    <message>
      <source>&amp;Add to Custom Colors</source>
      <translation>사용자 색상 더하기(&amp;A)</translation>
    </message>
    <message>
      <source>Select color</source>
      <translation>색상 선택</translation>
    </message>
  </context>
  <context>
    <name>QFileDialog</name>
    <message>
      <source>Copy or Move a File</source>
      <translation>파일 복사 또는 이동</translation>
    </message>
    <message>
      <source>Read: %1</source>
      <translation>읽기: %1</translation>
    </message>
    <message>
      <source>Write: %1</source>
      <translation>쓰기: %1</translation>
    </message>
    <message>
      <source>File &amp;name:</source>
      <translation>파일명(&amp;N):</translation>
    </message>
    <message>
      <source>File &amp;type:</source>
      <translation>파일 형태(&amp;T):</translation>
    </message>
    <message>
      <source>One directory up</source>
      <translation>상위 폴더로</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>취소</translation>
    </message>
    <message>
      <source>All Files (*)</source>
      <translation>전체 파일 (*)</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>이름</translation>
    </message>
    <message>
      <source>Size</source>
      <translation>크기</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>형태</translation>
    </message>
    <message>
      <source>Date</source>
      <translation>날짜</translation>
    </message>
    <message>
      <source>Attributes</source>
      <translation>속성</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>완료</translation>
    </message>
    <message>
      <source>Back</source>
      <translation>뒤로</translation>
    </message>
    <message>
      <source>Create New Folder</source>
      <translation>새 폴더 생성</translation>
    </message>
    <message>
      <source>List View</source>
      <translation>목록 보기</translation>
    </message>
    <message>
      <source>Detail View</source>
      <translation>세부사항 보기</translation>
    </message>
    <message>
      <source>Preview File Info</source>
      <translation>파일정보 미리보기</translation>
    </message>
    <message>
      <source>Preview File Contents</source>
      <translation>파일 내용 미리보기</translation>
    </message>
    <message>
      <source>Read-write</source>
      <translation>읽기-쓰기</translation>
    </message>
    <message>
      <source>Read-only</source>
      <translation>읽기만</translation>
    </message>
    <message>
      <source>Write-only</source>
      <translation>쓰기만</translation>
    </message>
    <message>
      <source>Inaccessible</source>
      <translation>접근불가</translation>
    </message>
    <message>
      <source>Symlink to File</source>
      <translation>파일로 심볼링크</translation>
    </message>
    <message>
      <source>Symlink to Directory</source>
      <translation>폴더로 심불링크</translation>
    </message>
    <message>
      <source>Symlink to Special</source>
      <translation>특수문자로 심볼링크</translation>
    </message>
    <message>
      <source>File</source>
      <translation>파일</translation>
    </message>
    <message>
      <source>Dir</source>
      <translation>폴더</translation>
    </message>
    <message>
      <source>Special</source>
      <translation>특수문자</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>열기</translation>
    </message>
    <message>
      <source>Save As</source>
      <translation>다른 이름으로</translation>
    </message>
    <message>
      <source>&amp;Open</source>
      <translation>열기(&amp;O)</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>저장(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Rename</source>
      <translation>이름 다시(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>삭제(&amp;D)</translation>
    </message>
    <message>
      <source>R&amp;eload</source>
      <translation>다시 읽어오기(&amp;E)</translation>
    </message>
    <message>
      <source>Sort by &amp;Name</source>
      <translation>이름에 의한 정렬(&amp;N)</translation>
    </message>
    <message>
      <source>Sort by &amp;Size</source>
      <translation>크기에 의한 정렬(&amp;S)</translation>
    </message>
    <message>
      <source>Sort by &amp;Date</source>
      <translation>날짜에 의한 정렬(&amp;D)</translation>
    </message>
    <message>
      <source>&amp;Unsorted</source>
      <translation>정렬안함(&amp;U)</translation>
    </message>
    <message>
      <source>Sort</source>
      <translation>정렬</translation>
    </message>
    <message>
      <source>Show &amp;hidden files</source>
      <translation>숨긴 파일 보이기(&amp;H)</translation>
    </message>
    <message>
      <source>the file</source>
      <translation>파일</translation>
    </message>
    <message>
      <source>the directory</source>
      <translation>폴더</translation>
    </message>
    <message>
      <source>the symlink</source>
      <translation>심볼링크</translation>
    </message>
    <message>
      <source>Delete %1</source>
      <translation>%1 삭제</translation>
    </message>
    <message>
      <source>&lt;qt>Are you sure you wish to delete %1 &quot;%2&quot;?&lt;/qt></source>
      <translation>&lt;qt>%1 &quot;%2&quot;지우시겠습니까?&lt;/qt></translation>
    </message>
	    <message>
        <source>&amp;Yes</source>
        <translation>예(&amp;Y)</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>아니오(&amp;N)</translation>
    </message>
    <message>
      <source>New Folder 1</source>
      <translation>새 폴더 1</translation>
    </message>
    <message>
      <source>New Folder</source>
      <translation>새 폴더</translation>
    </message>
    <message>
      <source>New Folder %1</source>
      <translation>새 폴더 %1</translation>
    </message>
    <message>
      <source>Find Directory</source>
      <translation>폴더 찾기</translation>
    </message>
    <message>
      <source>Directories</source>
      <translation>폴더</translation>
    </message>
    <message>
      <source>Save</source>
      <translation>저장</translation>
    </message>
    <message>
      <source>Error</source>
      <translation>오류</translation>
    </message>
    <message>
      <source>%1
File not found.
Check path and filename.</source>
      <translation>%1
파일이 없습니다.
경로와 파일명을 체크하시오.</translation>
    </message>
    <message>
      <source>All Files (*.*)</source>
      <translation>전체 파일 (*.*)</translation>
    </message>
    <message>
      <source>Select a Directory</source>
      <translation>저장폴더 선택</translation>
    </message>
    <message>
      <source>Directory:</source>
      <translation>저장폴더:</translation>
    </message>
    <message>
      <source>Look &amp;in:</source>
      <translation>보기(&amp;I):</translation>
    </message>
  </context>
  <context>
    <name>QFontDialog</name>
    <message>
      <source>&amp;Font</source>
      <translation>글꼴(&amp;F)</translation>
    </message>
    <message>
      <source>Font st&amp;yle</source>
      <translation>글꼴 스타일(&amp;Y)</translation>
    </message>
    <message>
      <source>&amp;Size</source>
      <translation>크기(&amp;S)</translation>
    </message>
    <message>
      <source>Effects</source>
      <translation>효과</translation>
    </message>
    <message>
      <source>Stri&amp;keout</source>
      <translation>취소선(&amp;K)</translation>
    </message>
    <message>
      <source>&amp;Underline</source>
      <translation>밑줄(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Color</source>
      <translation>색상(&amp;C)</translation>
    </message>
    <message>
      <source>Sample</source>
      <translation>예제</translation>
    </message>
    <message>
      <source>Scr&amp;ipt</source>
      <translation>스크립트(&amp;I)</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>완료</translation>
    </message>
    <message>
      <source>Apply</source>
      <translation>적용</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>취소</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>닫기</translation>
    </message>
    <message>
      <source>Select Font</source>
      <translation>글꼴 선택</translation>
    </message>
  </context>
  <context>
    <name>QLineEdit</name>
    <message>
      <source>Clear</source>
      <translation>제거</translation>
    </message>
    <message>
      <source>Select All</source>
      <translation>전체 선택</translation>
    </message>
    <message>
      <source>&amp;Undo</source>
      <translation>이전작업(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Redo</source>
      <translation>재실행(&amp;R)</translation>
    </message>
    <message>
      <source>Cu&amp;t</source>
      <translation>잘라내기(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>복사(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation>붙여넣기(&amp;P)</translation>
    </message>
  </context>
  <context>
    <name>QMainWindow</name>
    <message>
      <source>Line up</source>
      <translation>정렬</translation>
    </message>
    <message>
      <source>Customize...</source>
      <translation>사용자 설정...</translation>
    </message>
  </context>
  <context>
    <name>QMessageBox</name>
    <message>
      <source>&lt;h3>About Qt&lt;/h3>&lt;p>This program uses Qt version %1.&lt;/p>&lt;p>Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p>&lt;p>Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br>Qt is also available for embedded devices.&lt;/p>&lt;p>Qt is a Trolltech product. See &lt;tt>http://www.trolltech.com/qt/&lt;/tt> for more information.&lt;/p></source>
      <translation>&lt;h3>Qt에 대하여&lt;/h3>&lt;p> 이 프로그램은 Qt 버전 %1을 사용합니다.&lt;/p>&lt;p>Qt 다양한 OS의 C++ 툴킷입니다 &amp;amp; 응용 프로그램 개발.&lt;/p>&lt;p>Qt는 MS를 능가하는 단일소스 이식가능성을 제공합니다.&amp;nbsp;윈도우, Mac&amp;nbsp;OS&amp;nbsp;X, 리눅스, 그리고 전체 주요 상업적 유닉스 변종.&lt;br>Qt는 내장 장치에도 이용할 수 있습니다.&lt;/p>&lt;p>Qt 는 Trolltech 제품입니다. 더 자세한 정보는&lt;tt>http://www.trolltech.com/qt/&lt;/tt> 를 참고하십시오.&lt;/p></translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <source>Copy #%1 of </source>
      <translation>#%1 복사</translation>
    </message>
    <message>
      <source>Background</source>
      <translation>배경</translation>
    </message>
    <message>
      <source>Importing text</source>
      <translation>텍스트 들여오는 중</translation>
    </message>
    <message>
      <source>All Supported Formats</source>
      <translation>전체 지원 형식</translation>
    </message>
    <message>
      <source>All Files (*)</source>
      <translation>전체 파일 (*)</translation>
    </message>
    <message>
      <source>Afrikaans</source>
      <translation>아프리카어</translation>
    </message>
    <message>
      <source>Albanian</source>
      <translation>알바니아어</translation>
    </message>
    <message>
      <source>Basque</source>
      <translation>바스크어</translation>
    </message>
    <message>
      <source>Bulgarian</source>
      <translation>불가리아어</translation>
    </message>
    <message>
      <source>Catalan</source>
      <translation>카탈로니아어</translation>
    </message>
    <message>
      <source>Chinese</source>
      <translation>중국어</translation>
    </message>
    <message>
      <source>Croatian</source>
      <translation>크로티아어</translation>
    </message>
    <message>
      <source>Czech</source>
      <translation>체코어</translation>
    </message>
    <message>
      <source>Danish</source>
      <translation>덴마크어</translation>
    </message>
    <message>
      <source>Dutch</source>
      <translation>네델란드어</translation>
    </message>
    <message>
      <source>English</source>
      <translation>영어</translation>
    </message>
    <message>
      <source>English (British)</source>
      <translation>영어 (영국)</translation>
    </message>
    <message>
      <source>Esperanto</source>
      <translation>에스페란토어</translation>
    </message>
    <message>
      <source>German</source>
      <translation>독일어</translation>
    </message>
    <message>
      <source>German (Trad.)</source>
      <translation>독일어 (전통)</translation>
    </message>
    <message>
      <source>Finnish</source>
      <translation>핀란드어</translation>
    </message>
    <message>
      <source>French</source>
      <translation>프랑스어</translation>
    </message>
    <message>
      <source>Galician</source>
      <translation>갈리시아어</translation>
    </message>
    <message>
      <source>Greek</source>
      <translation>그리스어</translation>
    </message>
    <message>
      <source>Hungarian</source>
      <translation>헝가리어</translation>
    </message>
    <message>
      <source>Indonesian</source>
      <translation>인도네시아어</translation>
    </message>
    <message>
      <source>Italian</source>
      <translation>아탈리아어</translation>
    </message>
    <message>
      <source>Korean</source>
      <translation>한국어</translation>
    </message>
    <message>
      <source>Lithuanian</source>
      <translation>리투아니아어</translation>
    </message>
	    <message>
        <source>Norwegian (Bokmål)</source>
        <translation>노르웨이어 (보크말)</translation>
    </message>
    <message>
      <source>Norwegian (Nnyorsk)</source>
      <translation>노르웨이어(뉘노르스크)</translation>
    </message>
    <message>
      <source>Norwegian</source>
      <translation>노르웨이어</translation>
    </message>
    <message>
      <source>Polish</source>
      <translation>폴란드어</translation>
    </message>
    <message>
      <source>Portuguese</source>
      <translation>포르투갈어</translation>
    </message>
    <message>
      <source>Portuguese (BR)</source>
      <translation>포르투갈어(BR)</translation>
    </message>
    <message>
      <source>Russian</source>
      <translation>러시아어</translation>
    </message>
    <message>
      <source>Swedish</source>
      <translation>스웨던어</translation>
    </message>
    <message>
      <source>Spanish</source>
      <translation>스페인어</translation>
    </message>
    <message>
      <source>Spanish (Latin)</source>
      <translation>스페인어(라틴)</translation>
    </message>
    <message>
      <source>Slovak</source>
      <translation>슬로바키아어</translation>
    </message>
    <message>
      <source>Slovenian</source>
      <translation>슬로베니아어</translation>
    </message>
    <message>
      <source>Serbian</source>
      <translation>세르비아어</translation>
    </message>
    <message>
      <source>Thai</source>
      <translation>태국어</translation>
    </message>
    <message>
      <source>Turkish</source>
      <translation>터키어</translation>
    </message>
    <message>
      <source>Ukranian</source>
      <translation>우크라이나어</translation>
    </message>
    <message>
      <source>Welsh</source>
      <translation>웨일스어</translation>
    </message>
    <message>
      <source>Scribus Crash</source>
      <translation>Scribus 충돌</translation>
    </message>
    <message>
      <source>Scribus crashes due to Signal #%1</source>
      <translation>Scribus가 신호 #%1 에 기인하여 충돌이 일어남</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>확인(&amp;O)</translation>
    </message>
    <message>
      <source>Scribus crashes due to the following exception : %1</source>
      <translation>Scribus가 다음 예외 때문에 충돌이 일어남: %1</translation>
    </message>
    <message>
      <source>Page</source>
      <translation>범위</translation>
    </message>
    <message>
      <source>Master Page </source>
      <translation>마스터 페이지</translation>
    </message>
    <message>
      <source>4A0</source>
      <translation>4A0</translation>
    </message>
    <message>
      <source>2A0</source>
      <translation>2A0</translation>
    </message>
    <message>
      <source>Comm10E</source>
      <translation>Comm10E</translation>
    </message>
    <message>
      <source>DLE</source>
      <translation>DLE</translation>
    </message>
    <message>
      <source>Could not open output file %1</source>
      <translation>출력 파일 %1 을 열 수 없습니다</translation>
    </message>
    <message>
      <source>Output stream not writeable</source>
      <translation>출력 스트림을 쓸 수 없음</translation>
    </message>
    <message>
      <source>Verification of settings failed: %1</source>
      <translation>설정 검증에 실패: %1</translation>
    </message>
    <message>
      <source>Could not open input file %1</source>
      <translation>입력 파일 %1 을 열 수 없음</translation>
    </message>
    <message>
      <source>Unable to read settings XML:</source>
      <translation>설정 XML을 읽을 수 없음:</translation>
    </message>
    <message>
      <source>%1 (line %2 col %3)</source>
      <comment>Load PDF settings</comment>
      <translation>%1 (행 %2 열 %3)</translation>
    </message>
    <message>
      <source>Unable to read settings XML: %1</source>
      <translation>설정 XML을 읽을 수 없음: %1</translation>
    </message>
    <message>
      <source>null root node</source>
      <comment>Load PDF settings</comment>
      <translation>null 루트 노드</translation>
    </message>
    <message>
      <source>&lt;pdfVersion> invalid</source>
      <comment>Load PDF settings</comment>
      <translation>&lt;PDF버전> 무효</translation>
    </message>
    <message>
      <source>found %1 &lt;%2> nodes, need 1.</source>
      <comment>Load PDF settings</comment>
      <translation>PDF 설정 읽어오기</translation>
    </message>
    <message>
      <source>unexpected null &lt;%2> node</source>
      <comment>Load PDF settings</comment>
      <translation>예기치않은 null &lt;%2> 노드</translation>
    </message>
    <message>
      <source>node &lt;%1> not an element</source>
      <comment>Load PDF settings</comment>
      <translation>노드 &lt;%1> 가 요소가 아님</translation>
    </message>
    <message>
      <source>element &lt;%1> lacks `value' attribute</source>
      <comment>Load PDF settings</comment>
      <translation>요소 &lt;%1> 가 `값' 속성이 부족</translation>
    </message>
    <message>
      <source>element &lt;%1> value must be `true' or `false'</source>
      <comment>Load PDF settings</comment>
      <translation>요소 &lt;%1> 값은 참 또는 거짓 이어야 함</translation>
    </message>
    <message>
      <source>element &lt;lpiSettingsEntry> lacks `name' attribute</source>
      <comment>Load PDF settings</comment>
      <translation>요소 &lt;lpiSettingsEntry> 은 이름 속성이 부족</translation>
    </message>
    <message>
      <source>All</source>
      <translation>전체</translation>
    </message>
    <message>
      <source>Exporting PostScript File</source>
      <translation>포스트스크립트 파일 내보내기 중</translation>
    </message>
    <message>
      <source>Printing File</source>
      <translation>파일 인쇄 중</translation>
    </message>
    <message>
      <source>Black</source>
      <translation>검은색</translation>
    </message>
    <message>
      <source>Cyan</source>
      <translation>남색</translation>
    </message>
    <message>
      <source>Magenta</source>
      <translation>자홍색</translation>
    </message>
    <message>
      <source>Yellow</source>
      <translation>노랑색</translation>
    </message>
    <message>
      <source>Freetype2 library not available</source>
      <translation>Freetype2 라이브러리를 사용할 수 없음</translation>
    </message>
    <message>
      <source>Font %1 is broken (read stream), no embedding</source>
      <translation>글꼴  %1 이 깨짐(읽기 스트림)、내장 아님</translation>
    </message>
    <message>
      <source>Font %1 is broken (no Face), discarding it</source>
      <translation>글꼴  %1 이 깨짐、이것을 무시</translation>
    </message>
    <message>
      <source>Font %1 has broken glyph %2 (charcode %3)</source>
      <translation>글꼴 %1은 사용자 문자표 %2를 깨지게 함(문자코드 %3)</translation>
    </message>
    <message>
      <source>Font %1 cannot be read, no embedding</source>
      <translation>글꼴 %1이 읽을 수도 없고 내장도 되지 않았습니다.</translation>
    </message>
    <message>
      <source>Font %1 is broken, discarding it</source>
      <translation>글꼴  %1 이 깨짐、이것을 무시</translation>
    </message>
    <message>
      <source>Creating Font Cache</source>
      <translation>글꼴 캐시 생성 중</translation>
    </message>
    <message>
      <source>Failed to load font %1 - font type unknown</source>
      <translation>글꼴 %1을 읽기 실패 - 글꼴 형식이 없음</translation>
    </message>
    <message>
      <source>New Font found, checking...</source>
      <translation>새 글꼴 찾음, 체크 중...</translation>
    </message>
    <message>
      <source>Modified Font found, checking...</source>
      <translation>변경된 글꼴 찾음, 체크 중...</translation>
    </message>
    <message>
      <source>Font %1 loaded from %2(%3)</source>
      <translation>%2(%3)로 부터 읽은 글꼴 %1</translation>
    </message>
    <message>
      <source>Font %1(%2) is duplicate of %3</source>
      <translation>글꼴 %1(%2)이 %3의 복사본</translation>
    </message>
    <message>
      <source>Loading font %1 (found using fontconfig)</source>
      <translation>글꼴 %1을 읽는 중(사용 글꼴 설정을 찾았습니다.)</translation>
    </message>
    <message>
      <source>Failed to load a font - freetype2 couldn't find the font file</source>
      <translation>글꼴 읽기 실패 - 프리타입2가 글꼴 파일에서 찾을 수 없음</translation>
    </message>
    <message>
      <source>Reading Font Cache</source>
      <translation>글꼴 캐시 읽는 중</translation>
    </message>
    <message>
      <source>Writing updated Font Cache</source>
      <translation>업데이트된 글꼴 캐시 쓰는 중</translation>
    </message>
    <message>
      <source>Searching for Fonts</source>
      <translation>글꼴 찾는 중</translation>
    </message>
    <message>
      <source>extracting face %1 from font %2 (offset=%3, nTables=%4)</source>
      <translation>글꼴 %2로 부터 페이스 %1을 추출함(옵셋=%3, n표= %4)</translation>
    </message>
    <message>
      <source>memcpy header: %1 %2 %3</source>
      <translation>memcpy 헤더: %1 %2 %3</translation>
    </message>
    <message>
      <source>table '%1'</source>
      <translation>ㅍ '%1'</translation>
    </message>
    <message>
      <source>memcpy table: %1 %2 %3</source>
      <translation>memcpy 표: %1 %2 %3</translation>
    </message>
    <message>
      <source>memcpy offset: %1 %2 %3</source>
      <translation>memcpy 옵셋: %1 %2 %3</translation>
    </message>
    <message>
      <source>Initializing...</source>
      <translation>초기화 중...</translation>
    </message>
    <message>
      <source>Scribus Development Version</source>
      <translation>Scribus 개발 버전</translation>
    </message>
    <message>
      <source>&lt;p>You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p>Choose one of the following:&lt;br>&lt;ul>&lt;li>&lt;b>Create&lt;/b> missing pages&lt;/li>&lt;li>&lt;b>Import&lt;/b> pages until the last page&lt;/li>&lt;li>&lt;b>Cancel&lt;/b>&lt;/li>&lt;/ul></source>
      <translation>&lt;p>현재 페이지로부터 현재 문서에서 이용할 수 있는 페이지보다 더 많은 페이지를 들여오려고 합니다.&lt;/p>다음의 하나를 선택하시오:&lt;br>&lt;ul>&lt;li>&lt;b>생성&lt;/b> 없는 페이지&lt;/li>&lt;li>&lt;b>읽어오기&lt;/b> 마지막 페이지 전까지 페이지&lt;/li>&lt;li>&lt;b>취소&lt;/b>&lt;/li>&lt;/ul></translation>
    </message>
    <message>
      <source>C&amp;reate</source>
      <translation>생성(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation>들여오기(&amp;I)</translation>
    </message>
    <message>
      <source>The changes to your document have not been saved and you have requested to revert them. Do you wish to continue?</source>
      <translation>문서 변경이 저장되지 않았습니다 그리고 변경을 되돌릴 수가 있습니다. 계속 하시겠습니까?</translation>
    </message>
    <message>
      <source>Save as</source>
      <translation>다른 이름으로 저장</translation>
    </message>
    <message>
      <source>pt</source>
      <translation>포인트</translation>
    </message>
    <message>
      <source>mm</source>
      <translation>밀리미터</translation>
    </message>
    <message>
      <source>in</source>
      <translation>인치</translation>
    </message>
    <message>
      <source>p</source>
      <translation>피카</translation>
    </message>
    <message>
      <source>cm</source>
      <translation>센티미터</translation>
    </message>
    <message>
      <source>c</source>
      <translation>시세로</translation>
    </message>
    <message>
      <source>Points (pt)</source>
      <translation>포인트 (pt)</translation>
    </message>
    <message>
      <source>Millimeters (mm)</source>
      <translation>밀리미터(mm)</translation>
    </message>
    <message>
      <source>Inches (in)</source>
      <translation>인치 (in)</translation>
    </message>
    <message>
      <source>Picas (p)</source>
      <translation>피카 (p)</translation>
    </message>
    <message>
      <source>Centimeters (cm)</source>
      <translation>센티미터 (cm)</translation>
    </message>
    <message>
      <source>Cicero (c)</source>
      <translation>시세로 (c)</translation>
    </message>
    <message>
      <source>File exists</source>
      <translation>파일이 있습니다</translation>
    </message>
    <message>
      <source>A file named '%1' already exists.&lt;br/>Do you want to replace it with the file you are saving?</source>
      <translation>파일 '%1' 이 이미 있습니다.&lt;br/>이 파일을 저장할 파일로 바꾸시겠습니까??</translation>
    </message>
    <message>
      <source>page</source>
      <comment>page export</comment>
      <translation>페이지</translation>
    </message>
    <message>
      <source>Color Wheel</source>
      <translation>색상 판</translation>
    </message>
    <message>
      <source>Font Preview</source>
      <translation>글꼴 미리보기</translation>
    </message>
    <message>
      <source>My Plugin</source>
      <translation>자작 플러그인</translation>
    </message>
    <message>
      <source>New From Template</source>
      <translation>서식으로부터 새로</translation>
    </message>
    <message>
      <source>Document Template: </source>
      <translation>문서 서식:</translation>
    </message>
    <message>
      <source>Newsletters</source>
      <translation>Newsletters</translation>
    </message>
    <message>
      <source>Brochures</source>
      <translation>Brochures</translation>
    </message>
    <message>
      <source>Catalogs</source>
      <translation>Catalogs</translation>
    </message>
    <message>
      <source>Flyers</source>
      <translation>Flyers</translation>
    </message>
    <message>
      <source>Signs</source>
      <translation>Signs</translation>
    </message>
    <message>
      <source>Cards</source>
      <translation>Cards</translation>
    </message>
    <message>
      <source>Letterheads</source>
      <translation>Letterheads</translation>
    </message>
    <message>
      <source>Envelopes</source>
      <translation>Envelopes</translation>
    </message>
    <message>
      <source>Business Cards</source>
      <translation>Business Cards</translation>
    </message>
    <message>
      <source>Calendars</source>
      <translation>Calendars</translation>
    </message>
    <message>
      <source>Advertisements</source>
      <translation>>Advertisements</translation>
    </message>
    <message>
      <source>Labels</source>
      <translation>라벨</translation>
    </message>
    <message>
      <source>Menus</source>
      <translation>메뉴</translation>
    </message>
    <message>
      <source>Programs</source>
      <translation>프로그램</translation>
    </message>
    <message>
      <source>PDF Forms</source>
      <translation>PDF 양식</translation>
    </message>
    <message>
      <source>PDF Presentations</source>
      <translation>PDF 프리젠테이션</translation>
    </message>
    <message>
      <source>Magazines</source>
      <translation>잡지</translation>
    </message>
    <message>
      <source>Posters</source>
      <translation>포서터</translation>
    </message>
    <message>
      <source>Announcements</source>
      <translation>알림</translation>
    </message>
    <message>
      <source>Text Documents</source>
      <translation>텍스트 문서</translation>
    </message>
    <message>
      <source>Folds</source>
      <translation>접힘</translation>
    </message>
    <message>
      <source>Media Cases</source>
      <translation>미디어 케이스</translation>
    </message>
    <message>
      <source>Own Templates</source>
      <translation>사용자 서식</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>열기</translation>
    </message>
    <message>
      <source>Save As Template</source>
      <translation>서식으로 저장</translation>
    </message>
    <message>
      <source>Cannot get a color with an empty name.</source>
      <comment>python error</comment>
      <translation>빈 이름의 색상을 얻을 수 없음</translation>
    </message>
    <message>
      <source>Color not found.</source>
      <comment>python error</comment>
      <translation>찾을 수 없음</translation>
    </message>
    <message>
      <source>Cannot change a color with an empty name.</source>
      <comment>python error</comment>
      <translation>빈 이름의 색상을 변경할 수 없음</translation>
    </message>
    <message>
      <source>Color not found in document.</source>
      <comment>python error</comment>
      <translation>문서에서 없는 색상</translation>
    </message>
    <message>
      <source>Color not found in default colors.</source>
      <comment>python error</comment>
      <translation>기본 색상에서 찾을 수 없는 색상</translation>
    </message>
    <message>
      <source>Cannot create a color with an empty name.</source>
      <comment>python error</comment>
      <translation>빈 이름을 가진 색상 생성할 수 없음</translation>
    </message>
    <message>
      <source>Cannot delete a color with an empty name.</source>
      <comment>python error</comment>
      <translation>빈 이름을 가진 색상 삭제할 수 없음</translation>
    </message>
    <message>
      <source>Cannot replace a color with an empty name.</source>
      <comment>python error</comment>
      <translation>빈 이름을 가진 색상을 치환할 수 없음</translation>
    </message>
    <message>
      <source>firstPageOrder is bigger than allowed.</source>
      <comment>python error</comment>
      <translation>firstPageOrder가 허용치보다 큼</translation>
    </message>
    <message>
      <source>Failed to open document.</source>
      <comment>python error</comment>
      <translation>문서 열기 실패.</translation>
    </message>
    <message>
      <source>Failed to save document.</source>
      <comment>python error</comment>
      <translation>문서 저장 실패.</translation>
    </message>
    <message>
      <source>Unit out of range. Use one of the scribus.UNIT_* constants.</source>
      <comment>python error</comment>
      <translation>범위밖의 단위. Scribs.UNIT_* 상수의 하나를 사용.</translation>
    </message>
    <message>
      <source>Color not found - python error</source>
      <comment>python error</comment>
      <translation>색상 찾을 수 없음 - 파이썬 오류</translation>
    </message>
    <message>
      <source>Argument must be page item name, or PyCObject instance</source>
      <translation>인수는 페이지 객체 이름 또는 PyCObject이어야 함</translation>
    </message>
    <message>
      <source>Property not found</source>
      <translation>속성 찾을 수 없음</translation>
    </message>
    <message>
      <source>Couldn't convert result type '%1'.</source>
      <translation>결과형태 '%1' 로 변환할 수 없음</translation>
    </message>
    <message>
      <source>Property type '%1' not supported</source>
      <translation>속성 형태 '%1'을 지원안함</translation>
    </message>
    <message>
      <source>Couldn't convert '%1' to property type '%2'</source>
      <translation>'%1' 을 속성 타입 '%2' 로 변환할 수 없음</translation>
    </message>
    <message>
      <source>Types matched, but setting property failed.</source>
      <translation>형태가 일치함, 그러나 실패한 설정 속성</translation>
    </message>
    <message>
      <source>Target is not an image frame.</source>
      <comment>python error</comment>
      <translation>목표는 이미지 프레임이 아님</translation>
    </message>
    <message>
      <source>Specified item not an image frame.</source>
      <comment>python error</comment>
      <translation>지정된 객체는 이미지 프레임이 아님</translation>
    </message>
    <message>
      <source>Cannot group less than two items</source>
      <comment>python error</comment>
      <translation>2 객체보다 적은 것을 그룹화 못함</translation>
    </message>
    <message>
      <source>Can't group less than two items</source>
      <comment>python error</comment>
      <translation>2 객체보다 적은 것을 그룹화 못함</translation>
    </message>
    <message>
      <source>Need selection or argument list of items to group</source>
      <comment>python error</comment>
      <translation>그룹화하기 위하여 선택이나 객체의 인수 목록이 필요</translation>
    </message>
    <message>
      <source>Cannot scale by 0%.</source>
      <comment>python error</comment>
      <translation>0%에 의하여 비율처리 할 수 없음</translation>
    </message>
    <message>
      <source>Font not found.</source>
      <comment>python error</comment>
      <translation>글꼴을 찾지 못함.</translation>
    </message>
    <message>
      <source>Cannot render an empty sample.</source>
      <comment>python error</comment>
      <translation>빈 샘플을 렌더할 수 없음.</translation>
    </message>
    <message>
      <source>Unable to save pixmap</source>
      <comment>scripter error</comment>
      <translation>픽스맵으로 저장할 수 없음</translation>
    </message>
    <message>
      <source>Cannot have an empty layer name.</source>
      <comment>python error</comment>
      <translation>빈 레이어명을 가질 수 없음</translation>
    </message>
    <message>
      <source>Layer not found.</source>
      <comment>python error</comment>
      <translation>레이어 찾을 수 없음</translation>
    </message>
    <message>
      <source>Cannot remove the last layer.</source>
      <comment>python error</comment>
      <translation>마지막 레이어 제거할 수 없음</translation>
    </message>
    <message>
      <source>Cannot create layer without a name.</source>
      <comment>python error</comment>
      <translation>이름없이 레이어 생성할 수 없음.</translation>
    </message>
    <message>
      <source>Point list must contain at least two points (four values).</source>
      <comment>python error</comment>
      <translation>점 목록은 적어도 두 점이 포함되어야 합니다(4개 값).</translation>
    </message>
    <message>
      <source>Point list must contain an even number of values.</source>
      <comment>python error</comment>
      <translation>점 목록 짝수값을 포함하여야 합니다. </translation>
    </message>
    <message>
      <source>Point list must contain at least three points (six values).</source>
      <comment>python error</comment>
      <translation>점 록록이 최소 3점을 포함하여야 합니다(6개 값).</translation>
    </message>
    <message>
      <source>Point list must contain at least four points (eight values).</source>
      <comment>python error</comment>
      <translation>점 록록이 최소 4점을 포함하여야 합니다(8개 값).</translation>
    </message>
    <message>
      <source>Point list must have a multiple of six values.</source>
      <comment>python error</comment>
      <translation>점 록록은 6개 복수값을 가져야 합니다.</translation>
    </message>
    <message>
      <source>Object not found.</source>
      <comment>python error</comment>
      <translation>객체를 찾을 수 없음.</translation>
    </message>
    <message>
      <source>Style not found.</source>
      <comment>python error</comment>
      <translation>스타일을 찾을 수 없음.</translation>
    </message>
    <message>
      <source>Cannot set style on a non-text frame.</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임의 스타일을 설정할 수 없습니다</translation>
    </message>
    <message>
      <source>Failed to save EPS.</source>
      <comment>python error</comment>
      <translation>EPS 저장 오류</translation>
    </message>
    <message>
      <source>Page number out of range.</source>
      <comment>python error</comment>
      <translation>범위 밖의 페이지 번호</translation>
    </message>
    <message>
      <source>argument is not list: must be list of float values.</source>
      <comment>python error</comment>
      <translation>인수가 나열되지 않았습니다: 부동값이어야 합니다.</translation>
    </message>
    <message>
      <source>argument contains non-numeric values: must be list of float values.</source>
      <comment>python error</comment>
      <translation>인수가 수치값이 아닌 것이 있습니다: 부동값이어야 합니다.</translation>
    </message>
    <message>
      <source>argument contains no-numeric values: must be list of float values.</source>
      <comment>python error</comment>
      <translation>인수가 수치값이 아닌 것이 있습니다: 부동값이어야 합니다.</translation>
    </message>
    <message>
      <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12.</source>
      <comment>python error</comment>
      <translation>범위 밖의 선 너비, 0&lt;= 선 너비 lt;=12 사이 값이어야 합니다.</translation>
    </message>
    <message>
      <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
      <comment>python error</comment>
      <translation>범위 밖의 선 음영, 0&lt;= 음영 lt;= 100 사이 값이어야 합니다.</translation>
    </message>
    <message>
      <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
      <comment>python error</comment>
      <translation>범위밖의 채움 음영, 0&lt;= 음영 lt;=100 사이 값이어야 합니다.</translation>
    </message>
    <message>
      <source>Corner radius must be a positive number.</source>
      <comment>python error</comment>
      <translation>모서리 반경은 양수값이어야 합니다.</translation>
    </message>
    <message>
      <source>Line style not found.</source>
      <comment>python error</comment>
      <translation>선 스타일을 찾을 수 없음</translation>
    </message>
    <message>
      <source>Cannot get font size of non-text frame.</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임의 글꼴 크기를 얻을 수 없습니다.</translation>
    </message>
    <message>
      <source>Cannot get font of non-text frame.</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임의 글꼴을 얻을 수 없습니다.</translation>
    </message>
    <message>
      <source>Cannot get text size of non-text frame.</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임의 텍스트 크기를 얻을 수 없습니다.</translation>
    </message>
    <message>
      <source>Cannot get column count of non-text frame.</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임의 열의 갯수를 얻을 수 없습니다.</translation>
    </message>
    <message>
      <source>Cannot get line space of non-text frame.</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임의 줄 간격을 얻을 수 없습니다.ん</translation>
    </message>
    <message>
      <source>Cannot get column gap of non-text frame.</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임의 행 간격을 얻을 수 없습니다.</translation>
    </message>
    <message>
      <source>Cannot get text of non-text frame.</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임의 텍스트를 얻을 수 없습니다.</translation>
    </message>
    <message>
      <source>Cannot set text of non-text frame.</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임의 텍스트를 설정 할 수 없습니다.</translation>
    </message>
    <message>
      <source>Cannot insert text into non-text frame.</source>
      <comment>python error</comment>
      <translation>텍스트를 비-텍스트 프레임으로 삽입할 수 없습니다.</translation>
    </message>
    <message>
      <source>Insert index out of bounds.</source>
      <comment>python error</comment>
      <translation>범위밖의 인덱스를 삽입하였습니다.</translation>
    </message>
    <message>
      <source>Alignment out of range. Use one of the scribus.ALIGN* constants.</source>
      <comment>python error</comment>
      <translation>범위 밖의 정렬. scribus.ALIGN* 상수 중 하나를 사용합니다.</translation>
    </message>
    <message>
      <source>Cannot set text alignment on a non-text frame.</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임에서 텍스트 정렬을 설정할 수 없습니다.</translation>
    </message>
    <message>
      <source>Font size out of bounds - must be 1 &lt;= size &lt;= 512.</source>
      <comment>python error</comment>
      <translation>범위밖 글꼴 크기 - 1 &lt;= 크기 &lt;= 512 사이 이어야 합니다.</translation>
    </message>
    <message>
      <source>Cannot set font size on a non-text frame.</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임에서 글꼴 크기를 설정할 수 없습니다.</translation>
    </message>
    <message>
      <source>Cannot set font on a non-text frame.</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임에서 글꼴을 설정할 수 없습니다.</translation>
    </message>
    <message>
      <source>Line space out of bounds, must be >= 0.1.</source>
      <comment>python error</comment>
      <translation>범위밖의 줄 간격, 0.1이상이어야 합니다.</translation>
    </message>
    <message>
      <source>Cannot set line spacing on a non-text frame.</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임의 줄 간격을 설정할 수 없습니다.</translation>
    </message>
    <message>
      <source>Column gap out of bounds, must be positive.</source>
      <comment>python error</comment>
      <translation>범위밖의 열 간격, 양수이어야 합니다.</translation>
    </message>
    <message>
      <source>Cannot set column gap on a non-text frame.</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임의 열 간격을 설정할 수 없습니다.</translation>
    </message>
    <message>
      <source>Column count out of bounds, must be > 1.</source>
      <comment>python error</comment>
      <translation>범위밖의 열 수, 1 이상이어야 합니다.</translation>
    </message>
    <message>
      <source>Cannot set number of columns on a non-text frame.</source>
      <comment>python error</comment>
      <translation>비텍스트 프레임상에서 열의 수를 설정할 수 없습니다.</translation>
    </message>
    <message>
      <source>Selection index out of bounds</source>
      <comment>python error</comment>
      <translation>범위밖의 인텍스 선택</translation>
    </message>
    <message>
      <source>Cannot select text in a non-text frame</source>
      <comment>python error</comment>
      <translation>비 텍스트 프레임에서 텍스트를 선택할 수 없습니다.</translation>
    </message>
    <message>
      <source>Cannot delete text from a non-text frame.</source>
      <comment>python error</comment>
      <translation>비 텍스트 프레임에서 텍스트를 삭제할 수 없습니다.</translation>
    </message>
    <message>
      <source>Cannot set text fill on a non-text frame.</source>
      <comment>python error</comment>
      <translation>비 텍스트 프레임에서 텍스트 채우기를 설정할 수 없습니다.</translation>
    </message>
    <message>
      <source>Cannot set text stroke on a non-text frame.</source>
      <comment>python error</comment>
      <translation>비 텍스트 프레임에서 텍스트 외곽선을 설정할 수 없습니다.</translation>
    </message>
    <message>
      <source>Cannot set text shade on a non-text frame.</source>
      <comment>python error</comment>
      <translation>비 텍스트 프레임에서 텍스트 음영을 설정할 수 없습니다.</translation>
    </message>
    <message>
      <source>Can only link text frames.</source>
      <comment>python error</comment>
      <translation>텍스트 프레임에서 링크만 할 수 있음</translation>
    </message>
    <message>
      <source>Target frame links to another frame.</source>
      <comment>python error</comment>
      <translation>적용되는 프레임이 다른 프레임에 링크를 하고 있습니다.</translation>
    </message>
    <message>
      <source>Target frame is linked to by another frame.</source>
      <comment>python error</comment>
      <translation>적용되는 프레임이 다른 프레임에 링크되어 있습니다.</translation>
    </message>
    <message>
      <source>Source and target are the same object.</source>
      <comment>python error</comment>
      <translation>소스와 적용되는 것이 동일 객체입니다.</translation>
    </message>
    <message>
      <source>Cannot unlink a non-text frame.</source>
      <comment>python error</comment>
      <translation>비 텍스트 프레임을 링크해제할 수 없습니다.</translation>
    </message>
    <message>
      <source>Object is not a linked text frame, can't unlink.</source>
      <comment>python error</comment>
      <translation>객체가 링크된 테스트 프레임이 아니며, 링크해제 할 수없습니다.</translation>
    </message>
    <message>
      <source>Cannot convert a non-text frame to outlines.</source>
      <comment>python error</comment>
      <translation>비텍스트 프레임을 윤곽선으로 변환할 수 없습니다</translation>
    </message>
    <message>
      <source>Only text frames can be checked for overflowing</source>
      <comment>python error</comment>
      <translation>텍스트 프레임만 오버플로우를 체크할 수 있습니다</translation>
    </message>
    <message>
      <source>Can't set bookmark on a non-text frame</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임상에서 북마크를 설정할 수 없습니다</translation>
    </message>
    <message>
      <source>Can't get info from a non-text frame</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임으로부터 얻을 수 없습니다</translation>
    </message>
    <message>
      <source>The filename must be a string.</source>
      <comment>python error</comment>
      <translation>파일명이 문자열이어야 합니다.</translation>
    </message>
    <message>
      <source>The filename should not be empty string.</source>
      <comment>python error</comment>
      <translation>파일명이 빈 문자열이면 안됩니다.</translation>
    </message>
    <message>
      <source>Cannot delete image type settings.</source>
      <comment>python error</comment>
      <translation>이미지 형태 설정을 삭제할 수 없습니다.</translation>
    </message>
    <message>
      <source>The image type must be a string.</source>
      <comment>python error</comment>
      <translation>이미지 형태가 문자열이어야 합니다.</translation>
    </message>
    <message>
      <source>'allTypes' attribute is READ-ONLY</source>
      <comment>python error</comment>
      <translation>'전체 형태' 속성이 읽기만 입니다.</translation>
    </message>
    <message>
      <source>Failed to export image</source>
      <comment>python error</comment>
      <translation>이미지 읽어오기 실패</translation>
    </message>
    <message>
      <source>&amp;Execute Script...</source>
      <translation>스크립트 실행(&amp;E)...</translation>
    </message>
    <message>
      <source>Show &amp;Console</source>
      <translation>콘솔 보이기(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;About Script...</source>
      <translation>스크립트에 대하여(&amp;A)...</translation>
    </message>
    <message>
      <source>&amp;Script</source>
      <translation>스크립트(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Scribus Scripts</source>
      <translation>Scribus 스크립트(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Recent Scripts</source>
      <translation>최근 스크립트(&amp;R)</translation>
    </message>
    <message>
      <source>About Script</source>
      <translation>스크립트에 대하여</translation>
    </message>
    <message>
      <source>Scripter</source>
      <translation>스크립터</translation>
    </message>
    <message>
      <source>Scribus Python interface module

This module is the Python interface for Scribus. It provides functions
to control scribus and to manipulate objects on the canvas. Each
function is documented individually below.

A few things are common across most of the interface.

Most functions operate on frames. Frames are identified by their name,
a string - they are not real Python objects. Many functions take an
optional (non-keyword) parameter, a frame name.
Many exceptions are also common across most functions. These are
not currently documented in the docstring for each function.
- Many functions will raise a NoDocOpenError if you try to use them
without a document to operate on.
- If you do not pass a frame name to a function that requires one,
the function will use the currently selected frame, if any, or
raise a NoValidObjectError if it can't find anything to operate
on.
- Many functions will raise WrongFrameTypeError if you try to use them
on a frame type that they do not make sense with. For example, setting
the text color on a graphics frame doesn't make sense, and will result
in this exception being raised.
- Errors resulting from calls to the underlying Python API will be
passed through unaltered. As such, the list of exceptions thrown by
any function as provided here and in its docstring is incomplete.

Details of what exceptions each function may throw are provided on the
function's documentation, though as with most Python code this list
is not exhaustive due to exceptions from called functions.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Custom (optional) configuration: </source>
      <comment>short words plugin</comment>
      <translation>사용자(부가) 설정:</translation>
    </message>
    <message>
      <source>Standard configuration: </source>
      <comment>short words plugin</comment>
      <translation>표준 설정:</translation>
    </message>
    <message>
      <source>Short Words</source>
      <translation>약어</translation>
    </message>
    <message>
      <source>Short Words processing. Wait please...</source>
      <comment>short words plugin</comment>
      <translation>약어 처리 중. 잠시 기다리세요...</translation>
    </message>
    <message>
      <source>Short Words processing. Done.</source>
      <comment>short words plugin</comment>
      <translation>약어 처리 중. 완료.</translation>
    </message>
    <message>
      <source>SVG Export</source>
      <translation>SVG 내보내기</translation>
    </message>
    <message>
      <source>SVG Import</source>
      <translation>SVG 들여오기</translation>
    </message>
    <message>
      <source>Old .sla format support</source>
      <translation>이전 sla 형식 지원</translation>
    </message>
    <message>
      <source>OpenOffice.org Draw Importer</source>
      <translation>OpenOffice.org Draw 해석기</translation>
    </message>
    <message>
      <source>Comma Separated Value Files</source>
      <translation>콤마 분리 파일</translation>
    </message>
    <message>
      <source>CSV_data</source>
      <translation>CSV_자료</translation>
    </message>
    <message>
      <source>CSV_header</source>
      <translation>CSV_헤더</translation>
    </message>
    <message>
      <source>HTML Files</source>
      <translation>HTML 파일</translation>
    </message>
    <message>
      <source>html</source>
      <translation>HTML</translation>
    </message>
    <message>
      <source>
External Links
</source>
      <translation>외부 링크</translation>
    </message>
    <message>
      <source>OpenDocument Text Documents</source>
      <translation>OpenDocument 텍스트 문서</translation>
    </message>
    <message>
      <source>OpenOffice.org Writer Documents</source>
      <translation>OpenOffice.org Writer 문서</translation>
    </message>
    <message>
      <source>Text Filters</source>
      <translation>텍스트 필터</translation>
    </message>
    <message>
      <source>Text Files</source>
      <translation>텍스트 파일</translation>
    </message>
    <message>
      <source>Japanese</source>
      <translation>일본어</translation>
    </message>
    <message>
      <source>Luxembourgish</source>
      <translation>룩셈부르크어</translation>
    </message>
    <message>
      <source>Font %1(%2) is broken</source>
      <translation>글꼴 %1(%2)이 깨졌습니다</translation>
    </message>
    <message>
      <source>Barcode Generator</source>
      <translation>바코드 생성기</translation>
    </message>
    <message>
      <source>Given master page name does not match any existing.</source>
      <comment>python error</comment>
      <translation>지정된 마스터 페이지가 기존의 것과 일치하지 않습니다</translation>
    </message>
    <message>
      <source>OpenOffice.org Draw (*.sxd *.odg);;All Files (*)</source>
      <translation>OpenOffice.org Draw (*.sxd *.odg);;전체 파일 (*)</translation>
    </message>
    <message>
      <source>Word Documents</source>
      <translation>단어 문서</translation>
    </message>
    <message>
      <source>Palm PDB Documents</source>
      <comment>PDB Importer</comment>
      <translation>Palm PDB 해석기</translation>
    </message>
    <message>
      <source>PDB_data</source>
      <comment>PDB Importer</comment>
      <translation>PDB_자료 </translation>
    </message>
    <message>
      <source>PDB Import</source>
      <comment>PDB Importer</comment>
      <translation>PDB 들여오기</translation>
    </message>
    <message>
      <source>Could not open file %1</source>
      <comment>PDB Importer</comment>
      <translation>파일 %1 을 들여올 수 없습니다</translation>
    </message>
    <message>
      <source>Arabic</source>
      <translation>아라비아어</translation>
    </message>
    <message>
      <source>Dzongkha</source>
      <translation>통가어</translation>
    </message>
    <message>
      <source>Estonian</source>
      <translation>에스토니아어</translation>
    </message>
    <message>
      <source>font %1 </source>
      <translation>글꼴 %1</translation>
    </message>
    <message>
      <source>size %1 </source>
      <translation>크기 %1</translation>
    </message>
    <message>
      <source>+style </source>
      <translation>+스타일 </translation>
    </message>
    <message>
      <source>+color </source>
      <translation>+색상 </translation>
    </message>
    <message>
      <source>+underline </source>
      <translation>+밑줄 </translation>
    </message>
    <message>
      <source>-underline </source>
      <translation>-밑줄 </translation>
    </message>
    <message>
      <source>+strikeout </source>
      <translation>+취소선 </translation>
    </message>
    <message>
      <source>-strikeout </source>
      <translation>-취소선 </translation>
    </message>
    <message>
      <source>+shadow </source>
      <translation>+음영 </translation>
    </message>
    <message>
      <source>-shadow </source>
      <translation>-음영 </translation>
    </message>
    <message>
      <source>+outline </source>
      <translation>+윤곽선 </translation>
    </message>
    <message>
      <source>-outline </source>
      <translation>-윤곽선 </translation>
    </message>
    <message>
      <source>-tracking </source>
      <translation>-탐색 </translation>
    </message>
    <message>
      <source>+stretch </source>
      <translation>-뻗음 </translation>
    </message>
    <message>
      <source>parent= %1</source>
      <translation>부모 = %1</translation>
    </message>
    <message>
      <source>Latin</source>
      <translation>라틴어</translation>
    </message>
    <message>
      <source>Icelandic</source>
      <translation>아이스란드어</translation>
    </message>
    <message>
      <source>Romanian</source>
      <translation>루마니아어</translation>
    </message>
    <message>
      <source>Quarto</source>
      <translation>Quarto</translation>
    </message>
    <message>
      <source>Foolscap</source>
      <translation>Foolscap</translation>
    </message>
    <message>
      <source>Letter</source>
      <translation>Letter</translation>
    </message>
    <message>
      <source>Govt. Letter</source>
      <translation>Govt. Letter</translation>
    </message>
    <message>
      <source>Legal</source>
      <translation>Legal</translation>
    </message>
    <message>
      <source>Ledger</source>
      <translation>Ledger</translation>
    </message>
    <message>
      <source>Executive</source>
      <translation>Executive</translation>
    </message>
    <message>
      <source>Post</source>
      <translation>Post</translation>
    </message>
    <message>
      <source>Crown</source>
      <translation>Crown</translation>
    </message>
    <message>
      <source>Large Post</source>
      <translation>Large Post</translation>
    </message>
    <message>
      <source>Demy</source>
      <translation>Demy</translation>
    </message>
    <message>
      <source>Medium</source>
      <translation>Medium</translation>
    </message>
    <message>
      <source>Royal</source>
      <translation>Royal</translation>
    </message>
    <message>
      <source>Elephant</source>
      <translation>Elephant</translation>
    </message>
    <message>
      <source>Double Demy</source>
      <translation>Double Demy</translation>
    </message>
    <message>
      <source>Quad Demy</source>
      <translation>Quad Demy</translation>
    </message>
    <message>
      <source>STMT</source>
      <translation>STMT</translation>
    </message>
    <message>
      <source>A</source>
      <translation>A</translation>
    </message>
    <message>
      <source>B</source>
      <translation>B</translation>
    </message>
    <message>
      <source>C</source>
      <translation>C</translation>
    </message>
    <message>
      <source>D</source>
      <translation>D</translation>
    </message>
    <message>
      <source>E</source>
      <translation>E</translation>
    </message>
    <message>
      <source>%1 may be corrupted : missing resolution tags</source>
      <translation>%1 이 충돌이 일어남 : 없는 해상도 태그</translation>
    </message>
    <message>
      <source>Font %1 has broken glyph %2</source>
      <translation>글꼴 %1이 사용자 문자표 %2에서 깨져보입니다.</translation>
    </message>
    <message>
      <source>Transparency out of bounds, must be 0 &lt;= transparency &lt;= 1.</source>
      <comment>python error</comment>
      <translation>범위 밖 투명도, 0 &lt;= 투명도 &lt;= 1. 사이의 값이어야 합니다.</translation>
    </message>
    <message>
      <source>Blendmode out of bounds, must be 0 &lt;= blendmode &lt;= 15.</source>
      <comment>python error</comment>
      <translation>범위밖 혼합모드, 。0 &lt;= 혼합모드 &lt;= 15 사이 값이어야 합니다.</translation>
    </message>
    <message>
      <source>Scribus 1.2.x Support</source>
      <translation>Scribus 1.2.x 지원</translation>
    </message>
    <message>
      <source>Scribus 1.3.4 Support</source>
      <translation>Scribus 1.3.4 지원</translation>
    </message>
    <message>
      <source>This file is not recognized as a PDB document. Please, report this as a bug if you are sure it is one.</source>
      <comment>PDB Importer</comment>
      <translation>파일이 PDB 문서로 인식을 할 수 없습니다. 발견된 오류를 보고하여 주세요.</translation>
    </message>
    <message>
      <source>Cannot get number of lines of non-text frame.</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임의 줄 수를 얻을 수 없습니다.</translation>
    </message>
    <message>
      <source>You are running a development version of Scribus 1.3.x. The document you are working with was created in Scribus 1.2.x.  Saving the current file under 1.3.x renders it unable to be edited in Scribus 1.2.x versions. To preserve the ability to edit in 1.2.x, save this file under a different name and further edit the newly named file and the original will be untouched. Are you sure you wish to proceed with this operation?</source>
      <translation>Scribus 1.3.x 개발버전을 실행하고 있습니다. 작업중인 문서는 Scribus 1.2.x에서 생성된 것입니다. 1.3.x버전으로 현재 파일을 저장하는 것은 Scribus 1.2.x 버전으로 수정할 수 없습니다. 1.2.x버전에서 편집할 수 있도록 다른 이름의 파일을 저장하고 , 저장된 새로운 파일로 편집하고, 원본 파일은 건드리지 마십시요. 이 작업을 진행하시겠습니까?</translation>
    </message>
    <message>
      <source>+tracking %1 </source>
      <translation>+탐색 %1 </translation>
    </message>
    <message>
      <source>+baseline %1 </source>
      <translation>+기준선 %1 </translation>
    </message>
    <message>
      <source>Breton</source>
      <translation>브르타뉴어</translation>
    </message>
    <message>
      <source>English (American)</source>
      <translation>영어 (미국)</translation>
    </message>
    <message>
      <source>%1 may be corrupted : missing or wrong resolution tags</source>
      <translation>%1 이 충돌합니다 : 빠졌거나 오류 해상도 태그</translation>
    </message>
    <message>
      <source>The Font(s):
%1 are not available.
They have been replaced by &quot;Courier&quot;
Therefore the image may be not correct</source>
      <translation>글꼴:
%1 을 사용할 수 없습니다.
&quot;Courier&quot;로 대체됩니다.
그러므로 이미지는 충돌하지 않습니다</translation>
    </message>
    <message>
      <source>English (Australian)</source>
      <translation>영어 (호주)</translation>
    </message>
    <message>
      <source>German (Swiss)</source>
      <translation>독일어 (스위스)</translation>
    </message>
    <message>
      <source>Hebrew</source>
      <translation>헤브루어</translation>
    </message>
    <message>
      <source>Font %1 has broken metrics in file %2, ignoring metrics</source>
      <translation>글꼴 %1은 파일 %2의 메트릭스가 망가져 있으므로, 메트릭스를 무시합니다</translation>
    </message>
    <message>
      <source>Chinese (Trad.)</source>
      <translation>중국어 (번자체)</translation>
    </message>
    <message>
      <source>Scribus 1.3.0->1.3.3.x Support</source>
      <translation>Scribus 1.3.0->1.3.3.x 지원</translation>
    </message>
    <message>
      <source>Copy of %1 (%2)</source>
      <translation>%1 (%2) 복사</translation>
    </message>
    <message>
      <source>%</source>
      <translation>%</translation>
    </message>
    <message>
      <source>Khmer</source>
      <translation>크메르어</translation>
    </message>
    <message>
      <source>Lao</source>
      <translation>라오스어</translation>
    </message>
    <message>
      <source>Vietnamese</source>
      <translation>베트남어</translation>
    </message>
    <message>
      <source>An error occurred while initializing icc transforms</source>
      <translation>ICC 변환을 초기화하는 동안 오류 발생</translation>
    </message>
    <message>
      <source>Output profile is not supported</source>
      <translation>출력 프로파일을 지원하지 않음</translation>>
    </message>
    <message>
      <source>WMF Import</source>
      <translation>WMF 들여오기</translation>
    </message>
    <message>
      <source>New Layer</source>
      <translation>새 레이어</translation>
    </message>
    <message>
      <source>Adobe Illustrator Importer</source>
      <translation>Adobe Illustrator 해석기</translation>
    </message>
    <message>
      <source>Imposition</source>
      <translation>부과</translation>
    </message>
    <message>
      <source>PostScript Importer</source>
      <translation>PostScript 해석기</translation>
    </message>
    <message>
      <source>%1;;All Files (*)</source>
      <translation>%1;;전체 파일 (*)</translation>
    </message>
    <message>
      <source>Do you really want to overwrite the file:
%1 ?</source>
      <translation>파일을 정말로 겹쳐쓰겠습니까:
%1 ?</translation>
    </message>
    <message>
      <source>Encapsulated PostScript</source>
      <translation>Encapsulated PostScript</translation>
    </message>
    <message>
      <source>GIF</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>JPEG</source>
      <translation>JPEG</translation>
    </message>
    <message>
      <source>Pattern Files</source>
      <translation>패턴 파일</translation>
    </message>
    <message>
      <source>PDF Document</source>
      <translation>PDF 문서</translation>
    </message>
    <message>
      <source>PNG</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>PostScript</source>
      <translation>포스트스크립트</translation>
    </message>
    <message>
      <source>Adobe Photoshop</source>
      <translation>포토샵 PSD파일</translation>
    </message>
    <message>
      <source>TIFF</source>
      <translation>TIFF</translation>
    </message>
    <message>
      <source>XPM</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Windows Meta File</source>
      <translation>윈도우 메타 파일</translation>>
    </message>
    <message>
      <source>Scalable Vector Graphics</source>
      <translation>확장 벡터 그래픽</translation>
    </message>
    <message>
      <source>Adobe Illustrator</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Valid metrics were found for font %1, using metrics in file %2</source>
      <translation>파일 %2에서 메트릭스를 사용하고 있는 글꼴 %1에 맞은 유효한 메트릭스를  찾았습니다</translation>
    </message>
    <message>
      <source>No metrics found for font %1, ignoring font</source>
      <translation>글꼴 %1을 위한 메트릭스를 찾을 수 없어 글꼴을 무시합니다</translation>
    </message>
    <message>
      <source>Error</source>
      <translation>오류</translation>
    </message>
    <message>
      <source>second argument is not tuple: must be tuple of int values.</source>
      <comment>python error</comment>
      <translation>둘째 인자가 요소가 아닙니다: 정수값이어야 합니다. </translation>
    </message>
    <message>
      <source>second argument contains non-numeric values: must be list of int values.</source>
      <comment>python error</comment>
      <translation>둘째 인자가 요소가 수치값을 포함하지 않았습니다: 정수값이어야 합니다.</translation>
    </message>
    <message>
      <source>Cannot have an empty paragraph style name.</source>
      <comment>python error</comment>
      <translation>빈 문단 스타일 이름을 가질 수 없습니다.</translation>
    </message>
    <message>
      <source>hasdropcap has to be 0 or 1.</source>
      <comment>python error</comment>
      <translation>hasdropcap이 0 또는 1을 가집니다.</translation>
    </message>
    <message>
      <source>Cannot have an empty char style name.</source>
      <comment>python error</comment>
      <translation>빈 문자 스타일 이름을 가질 수 없습니다.</translation>
    </message>
    <message>
      <source>Can only hyphenate text frame</source>
      <comment>python error</comment>
      <translation>텍스트 프레임만 하이픈 가능</translation>
    </message>
    <message>
      <source>Can only dehyphenate text frame</source>
      <comment>python error</comment>
      <translation>텍스트 프레임만 하이픈 해제 가능</translation>
    </message>
    <message>
      <source>Lens Effects</source>
      <translation>렌즈 효과</translation>
    </message>
    <message>
      <source>PathCutter</source>
      <translation>PathCutter</translation>
    </message>
    <message>
      <source>PathFinder</source>
      <translation>PathFinder</translation>
    </message>
    <message>
      <source>PathStroker</source>
      <translation>PathStroker</translation>
    </message>
    <message>
      <source>Spell check (aspell)</source>
     <translation>철자 검사</translation>
    </message>
    <message>
      <source>Subdivide</source>
      <translation>재분할</translation>
    </message>
    <message>
      <source>Xfig Importer</source>
      <translation>Xfig 해석기</translation>
    </message>
    <message>
      <source>Xfig File</source>
      <translation>Xfig 파일</translation>
    </message>
    <message>
      <source>Parsing the configfile %1 failed! Depending on the type of the error render frames might not work correctly!
%2</source>
      <translation>설정 파일 %1 파싱 실패! 렌더 프레임이 정확히 작동하지 않은 오류 형태에 의존!</translation>
    </message>
    <message>
      <source>MeshDistortion</source>
      <translation>망사왜곡</translation>
    </message>
    <message>
      <source>PathAlongPath</source>
      <translation>PathAlongPath</translation>
    </message>
    <message>
      <source>Transform Effect</source>
      <translation>변형 효과</translation>
    </message>
    <message>
      <source>°</source>
      <comment>degrees, unicode 0xB0</comment>
      <translation>각도</translation>
    </message>
    <message>
      <source>Norwegian (Bokmål)</source>
      <translation>노르웨이어</translation>
    </message>
    <message>
      <source>Cannot get text distances of non-text frame.</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임의 텍스트 거리를 얻을 수 없음.</translation>
    </message>
    <message>
      <source>Text distances out of bounds, must be positive.</source>
      <comment>python error</comment>
      <translation>범위밖 텍스트 거리, 양수이어야 합니다.</translation>
    </message>
    <message>
      <source>Cannot set text distances on a non-text frame.</source>
      <comment>python error</comment>
      <translation>비-텍스트 프레임의 텍스트 거리 설정할 수 없습니다.</translation>
    </message>
  </context>
  <context>
    <name>QTextEdit</name>
    <message>
      <source>Clear</source>
      <translation>제거</translation>
    </message>
    <message>
      <source>Select All</source>
      <translation>전체 선택</translation>
    </message>
    <message>
      <source>&amp;Undo</source>
      <translation>이전작업(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Redo</source>
      <translation>재실행(&amp;R)</translation>
    </message>
    <message>
      <source>Cu&amp;t</source>
      <translation>잘라내기(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>복사(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation>붙여넣기(&amp;P)</translation>
    </message>
  </context>
  <context>
    <name>QTitleBar</name>
    <message>
      <source>System Menu</source>
      <translation>시스템 메뉴</translation>
    </message>
    <message>
      <source>Shade</source>
      <translation>음영</translation>
    </message>
    <message>
      <source>Unshade</source>
      <translation>음영해제</translation>
    </message>
    <message>
      <source>Normalize</source>
      <translation>일반화</translation>
    </message>
    <message>
      <source>Minimize</source>
      <translation>최소화</translation>
    </message>
    <message>
      <source>Maximize</source>
      <translation>최대화</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>닫기</translation>
    </message>
  </context>
  <context>
    <name>QWorkspace</name>
    <message>
      <source>&amp;Restore</source>
      <translation>복구(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Move</source>
      <translation>이동(&amp;M)</translation>
    </message>
    <message>
      <source>&amp;Size</source>
      <translation>크기(&amp;S)</translation>
    </message>
    <message>
      <source>Mi&amp;nimize</source>
      <translation>최소화(&amp;N)</translation>
    </message>
    <message>
      <source>Ma&amp;ximize</source>
      <translation>최대화(&amp;X)</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>닫기(&amp;C)</translation>
    </message>
    <message>
      <source>Stay on &amp;Top</source>
      <translation>위에 위치く(&amp;T)</translation>
    </message>
    <message>
      <source>Minimize</source>
      <translation>최소화</translation>
    </message>
    <message>
      <source>Restore Down</source>
      <translation>본래로 복귀</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>닫기</translation>
    </message>
    <message>
      <source>Sh&amp;ade</source>
      <translation>음영(&amp;A)</translation>
    </message>
    <message>
      <source>%1 - [%2]</source>
      <translation>%1 - [%2]</translation>
    </message>
    <message>
      <source>&amp;Unshade</source>
      <translation>음영해제(&amp;U)</translation>
    </message>
  </context>
  <context>
    <name>ReformDoc</name>
    <message>
      <source>Document Setup</source>
      <translation>문서 설정</translation>
    </message>
    <message>
      <source>Document</source>
      <translation>문서</translation>
    </message>
    <message>
      <source>Document Information</source>
      <translation>문서 정보</translation>
    </message>
    <message>
      <source>Guides</source>
      <translation>안내선</translation>
    </message>
    <message>
      <source>Display</source>
      <translation>보이기</translation>
    </message>
    <message>
      <source>Typography</source>
      <translation>글씨체 모양</translation>
    </message>
    <message>
      <source>Tools</source>
      <translation>도구</translation>
    </message>
    <message>
      <source>Hyphenator</source>
      <translation>연결자</translation>
    </message>
    <message>
      <source>Fonts</source>
      <translation>글꼴</translation>
    </message>
    <message>
      <source>Preflight Verifier</source>
      <translation>문서 검증</translation>
    </message>
    <message>
      <source>PDF Export</source>
      <translation>PDF 내보내기</translation>
    </message>
    <message>
      <source>Document Item Attributes</source>
      <translation>문서 객체 속성</translation>
    </message>
    <message>
      <source>Table of Contents and Indexes</source>
      <translation>목차와 인덱스</translation>
    </message>
    <message>
      <source>Sections</source>
      <translation>섹션</translation>
    </message>
    <message>
      <source>Color Management</source>
      <translation>색상 관리</translation>
    </message>
    <message>
      <source>Adjusting Colors</source>
      <translation>색상 조정</translation>
    </message>
  </context>
  <context>
    <name>RunScriptDialog</name>
    <message>
      <source>Dialog</source>
      <translation>대화창</translation>
    </message>
    <message>
      <source>Run as Extension Script</source>
      <translation>확장 스크립트 실행</translation>
    </message>
  </context>
  <context>
    <name>SMAlignSelect</name>
    <message>
      <source>P</source>
      <comment>P as in Parent</comment>
      <translation>부모로 P</translation>
    </message>
    <message>
      <source>Use parent style's alignment instead of overriding it</source>
      <translation>취소하는 대신 부모의 정렬 스타일을 사용</translation>
    </message>
  </context>
  <context>
    <name>SMCStyleWidget</name>
    <message>
      <source>Based On:</source>
      <translation>기본:</translation>
    </message>
    <message>
      <source>Language:</source>
      <translation>언어:</translation>
    </message>
    <message>
      <source>Basic Formatting</source>
      <translation>기본 형식</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Advanced Formatting</source>
      <translation>고급 형식</translation>
    </message>
    <message>
      <source>TextLabel</source>
      <translation>TextLabel</translation>
    </message>
    <message>
      <source>Colors</source>
      <translation>색상</translation>
    </message>
  </context>
  <context>
    <name>SMCharacterStyle</name>
    <message>
      <source>Properties</source>
      <translation>속성</translation>
    </message>
    <message>
      <source>Character Styles</source>
      <translation>문자 스타일</translation>
    </message>
    <message>
      <source>Character Style</source>
      <translation>문자 스타일</translation>
    </message>
    <message>
      <source>New Style</source>
      <translation>새 스타일</translation>
    </message>
    <message>
      <source>Clone of %1</source>
      <translation>%1 사본</translation>
    </message>
    <message>
      <source>%1 (%2)</source>
      <comment>This for unique name when creating a new character style. %1 will be the name of the style and %2 will be a number forming a style name like: New Style (2)</comment>
      <translation>%1 (%2)</translation>
    </message>
  </context>
  <context>
    <name>SMColorCombo</name>
    <message>
      <source>Use Parent Value</source>
      <translation>부모 값 사용</translation>
    </message>
  </context>
  <context>
    <name>SMFontComboH</name>
    <message>
      <source>Use Parent Font</source>
      <translation>부모 글꼴 사용</translation>
    </message>
  </context>
  <context>
    <name>SMLineStyle</name>
    <message>
      <source>Properties</source>
      <translation>속성</translation>
    </message>
    <message>
      <source>Line Styles</source>
      <translation>선 스타일</translation>
    </message>
    <message>
      <source>Line Style</source>
      <translation>선 스타일</translation>
    </message>
    <message>
      <source>New Style</source>
      <translation>새 스타일</translation>
    </message>
    <message>
      <source>Clone of %1</source>
      <translation>%1 사본</translation>
    </message>
    <message>
      <source>%1 (%2)</source>
      <comment>This for unique name when creating a new character style. %1 will be the name of the style and %2 will be a number forming a style name like: New Style (2)</comment>
      <translation>%1 (%2)</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> 포인트</translation>
    </message>
    <message>
      <source>Solid Line</source>
      <translation>실선</translation>
    </message>
    <message>
      <source>Dashed Line</source>
      <translation>파선</translation>
    </message>
    <message>
      <source>Dotted Line</source>
      <translation>점선</translation>
    </message>
    <message>
      <source>Dash Dot Line</source>
      <translation>대시점선</translation>
    </message>
    <message>
      <source>Dash Dot Dot Line</source>
      <translation>대시점점선</translation>
    </message>
    <message>
      <source> pt </source>
      <translation> 포인트 </translation>
    </message>
  </context>
  <context>
    <name>SMLineStyleWidget</name>
    <message>
      <source>%</source>
      <translation>%</translation>
    </message>
    <message>
      <source>Line Width:</source>
      <translation>선 너비:</translation>
    </message>
  </context>
  <context>
    <name>SMPStyleWidget</name>
    <message>
      <source>Distances and Alignment</source>
      <translation>거리 및 배치</translation>
    </message>
    <message>
      <source>Drop Caps</source>
      <translation>문단 첫 글자</translation>
    </message>
    <message>
      <source>Tabulators and Indentation</source>
      <translation>탭키 설정 및 들여쓰기</translation>
    </message>
    <message>
      <source>Properties</source>
      <translation>속성</translation>
    </message>
    <message>
      <source>&amp;Lines:</source>
      <translation>줄 수(&amp;L):</translation>
    </message>
    <message>
      <source>Distance from Text:</source>
      <translation>텍스트로부터 거리:</translation>
    </message>
    <message>
      <source>Based On:</source>
      <translation>기본:</translation>
    </message>
    <message>
      <source>TextLabel</source>
      <translation>텍스트 라벨</translation>
    </message>
    <message>
      <source>Parent's Drop Cap Status</source>
      <translation>문단 첫 문자 입력 초기화</translation>
    </message>
    <message>
      <source>Ch&amp;aracter Style</source>
      <translation>문자 스타일(&amp;A)</translation>
    </message>
  </context>
  <context>
    <name>SMParagraphStyle</name>
    <message>
      <source>Paragraph Styles</source>
      <translation>문단 스타일</translation>
    </message>
    <message>
      <source>Paragraph Style</source>
      <translation>문단 스타일</translation>
    </message>
    <message>
      <source>New Style</source>
      <translation>새 스타일</translation>
    </message>
    <message>
      <source>Clone of %1</source>
      <translation>%1 사본</translation>
    </message>
    <message>
      <source>%1 (%2)</source>
      <comment>This for unique name when creating a new character style. %1 will be the name of the style and %2 will be a number forming a style name like: New Style (2)</comment>
      <translation>%1 (%2)</translation>
    </message>
  </context>
  <context>
    <name>SMReplaceDia</name>
    <message>
      <source>Delete Styles</source>
      <translation>스타일 삭제</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>확인(&amp;O)</translation>
    </message>
    <message>
      <source>Ca&amp;ncel</source>
      <translation>취소(&amp;N)</translation>
    </message>
    <message>
      <source>Alt+N</source>
      <translation>Alt+N</translation>
    </message>
  </context>
  <context>
    <name>SMScComboBox</name>
    <message>
      <source>Use Parent Value</source>
      <translation>부모값 사용</translation>
    </message>
  </context>
  <context>
    <name>SMShadeButton</name>
    <message>
      <source>Use Parent Value</source>
      <translation>부모값 사용</translation>
    </message>
  </context>
  <context>
    <name>SMStyleImport</name>
    <message>
      <source>Choose Styles</source>
      <translation>스타일 선택</translation>
    </message>
    <message>
      <source>Available Styles</source>
      <translation>사용가능한 스타일</translation>
    </message>
    <message>
      <source>In case of the name clash</source>
      <translation>이름 충돌 경우</translation>
    </message>
    <message>
      <source>&amp;Rename Imported Style</source>
      <translation>들여온 스타일 다른 이름으로</translation>
    </message>
    <message>
      <source>R&amp;eplace Existing Style</source>
     <translation>기존 스타일 치환</translation>
    </message>
  </context>
  <context>
    <name>SMStyleSelect</name>
    <message>
      <source>P</source>
      <comment>P as in Parent</comment>
      <translation>부모 P</translation>
    </message>
    <message>
      <source>Use parent style's effects instead of overriding them</source>
      <translation>취소하는 대신 부모의 스타일 효과를 사용</translation>
    </message>
  </context>
  <context>
    <name>SMTabruler</name>
    <message>
      <source> Parent Tabs </source>
      <translation> 부모 탭 </translation>
    </message>
  </context>
  <context>
    <name>SToolBAlign</name>
    <message>
      <source>Style Settings</source>
      <translation>스타일 설정</translation>
    </message>
    <message>
      <source>Style of current paragraph</source>
      <translation>현재 문단 스타일</translation>
    </message>
  </context>
  <context>
    <name>SToolBColorF</name>
    <message>
      <source>Fill Color Settings</source>
      <translation>채움 색상 설정</translation>
    </message>
    <message>
      <source>Color of text fill</source>
      <translation>텍스트 채움 색상</translation>
    </message>
    <message>
      <source>Saturation of color of text fill</source>
      <translation>텍스트 채움 색상 채도</translation>
    </message>
  </context>
  <context>
    <name>SToolBColorS</name>
    <message>
      <source>Stroke Color Settings</source>
      <translation>윤곽선 색상 설정</translation>
    </message>
    <message>
      <source>Color of text stroke</source>
      <translation>텍스트 윤곽선 색상</translation>
    </message>
    <message>
      <source>Saturation of color of text stroke</source>
      <translation>텍스트 윤곽선 색상 채도</translation>
    </message>
  </context>
  <context>
    <name>SToolBFont</name>
    <message>
      <source>Font Settings</source>
      <translation>글꼴 설정</translation>
    </message>
    <message>
      <source>Font of selected text</source>
      <translation>선택된 텍스트 글꼴</translation>
    </message>
    <message>
      <source>Font Size</source>
      <translation>글꼴 크기</translation>
    </message>
    <message>
      <source>Scaling width of characters</source>
      <translation>문자 너비 비율</translation>
    </message>
    <message>
      <source>Scaling height of characters</source>
      <translation>문자 높이 비율</translation>
    </message>
  </context>
  <context>
    <name>SToolBStyle</name>
    <message>
      <source>Character Settings</source>
      <translation>문자 설정</translation>
    </message>
    <message>
      <source>Manual Tracking</source>
      <translation>수동 탐색</translation>
    </message>
  </context>
  <context>
    <name>SVGExportPlugin</name>
    <message>
      <source>Exports SVG Files</source>
      <translation>SVG 내보내기</translation>
    </message>
    <message>
      <source>Exports the current page into an SVG file.</source>
      <translation>현재 페이지를 SVG 파일로 내보내기.</translation>
    </message>
    <message>
      <source>Save as &amp;SVG...</source>
      <translation>SVG 저장(&amp;S)...</translation>
    </message>
  </context>
  <context>
    <name>SVGImportPlugin</name>
    <message>
      <source>Import &amp;SVG...</source>
      <translation>SVG 들여오기(&amp;S)...</translation>
    </message>
    <message>
      <source>Imports SVG Files</source>
      <translation>SVG 들여오기</translation>
    </message>
    <message>
      <source>Imports most SVG files into the current document,
converting their vector data into Scribus objects.</source>
      <translation>벡터 자료를 Scribus 객체로 변환하고, 현재 문서로 대부분 SVG 파일을 읽어옵니다.</translation>
    </message>
    <message>
      <source>SVG file contains some unsupported features</source>
      <translation>SVG 파일이 지원하지 않는 몇몇 특성이 포홤되어 있습니다.</translation>
    </message>
    <message>
      <source>The file could not be imported</source>
      <translation>이 파일을 들여올 수 없습니다</translation>
    </message>
  </context>
  <context>
    <name>SVGPlug</name>
    <message>
      <source>Group%1</source>
      <translation>그룹 %1</translation>
    </message>
  </context>
  <context>
    <name>SWDialog</name>
    <message>
      <source>Short Words</source>
      <comment>short words plugin</comment>
      <translation>약어 플러그인</translation>
    </message>
    <message>
      <source>Apply unbreakable space on:</source>
      <comment>short words plugin</comment>
      <translation>개행없음 공백 적용:</translation>
    </message>
    <message>
      <source>&amp;Selected frames</source>
      <comment>short words plugin</comment>
      <translation>선택된 프레임(&amp;S)</translation>
    </message>
    <message>
      <source>Active &amp;page</source>
      <comment>short words plugin</comment>
      <translation>활성 페이지(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;All items</source>
      <comment>short words plugin</comment>
      <translation>전체 객체(&amp;A)</translation>
    </message>
    <message>
      <source>Only selected frames processed.</source>
      <comment>short words plugin</comment>
      <translation>선택된 프레임만 처리함.</translation>
    </message>
    <message>
      <source>Only actual page processed.</source>
      <comment>short words plugin</comment>
      <translation>실제 페이지만 처리함.</translation>
    </message>
    <message>
      <source>All items in document processed.</source>
      <comment>short words plugin</comment>
      <translation>문서 전체 객체를 처리함.</translation>
    </message>
  </context>
  <context>
    <name>SWPrefsGui</name>
    <message>
      <source>User settings</source>
      <translation>사용자 설정</translation>
    </message>
    <message>
      <source>System wide configuration</source>
      <translation>시스템 전체 설정</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>저장(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Reset</source>
      <translation>초기화(&amp;R)</translation>
    </message>
    <message>
      <source>Save user configuration</source>
      <translation>사용자 설정 저장</translation>
    </message>
    <message>
      <source>Reload system wide configuration and remove user defined one</source>
      <translation>시스템 전체 설정 다시 읽어오고 사용자 정의 설정을 제거합니다</translation>
    </message>
    <message>
      <source>Edit custom configuration. If you save it, it will be used over system wide configuration</source>
      <translation>사용자 설정을 편집. 저장시 시스템 전체 설정으로 사용됩니다</translation>
    </message>
    <message>
      <source>Short Words</source>
      <translation>약어</translation>
    </message>
    <message>
      <source>Cannot write file %1.</source>
      <translation>파일 %1 을 쓸 수 없습니다.</translation>
    </message>
    <message>
      <source>User settings saved</source>
      <translation>저장된 사용자 설정</translation>
    </message>
    <message>
      <source>System wide configuration reloaded</source>
      <translation>다시 읽어온 시스템 전체 설정</translation>
    </message>
    <message>
      <source>Cannot open file %1</source>
      <translation>파일 %1 을 열 수 없습니다</translation>
    </message>
    <message>
      <source>User configuration exists already. Do you really want to overwrite it?</source>
      <translation>사용자 설정이 이미 있습니다. 이것을 정말로 겹쳐쓸까요?</translation>
    </message>
  </context>
  <context>
    <name>SaveAsTemplatePlugin</name>
    <message>
      <source>Save as &amp;Template...</source>
      <translation>서식으로 저장(&amp;T)...</translation>
    </message>
    <message>
      <source>Save a document as a template</source>
      <translation>문서를 서식으로 저장</translation>
    </message>
    <message>
      <source>Save a document as a template. Good way to ease the initial work for documents with a constant look</source>
      <translation>문서를 서식으로 저장. 문서 초기 작업을 쉽게 할 수 있게 합니다.</translation>
    </message>
  </context>
  <context>
    <name>ScGTFileDialog</name>
    <message>
      <source>Select a file to import</source>
      <translation>들여오기 위하여 파일을 선택</translation>
    </message>
    <message>
      <source>Append</source>
      <translation>추가</translation>
    </message>
    <message>
      <source>Show options</source>
      <translation>설정 보기</translation>
    </message>
  </context>
  <context>
    <name>ScInputDialog</name>
    <message>
      <source>Input Dialog</source>
      <translation>입력 대화창</translation>
    </message>
    <message>
      <source>InputDialog</source>
      <translation>입력대화창</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>확인(&amp;O)</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>취소(&amp;C)</translation>
    </message>
  </context>
  <context>
    <name>ScPlugin</name>
    <message>
      <source>Load/Save/Import/Export</source>
      <translation>읽어오기/저장/들여오기/내보내기</translation>
    </message>
    <message>
      <source>Persistent</source>
      <comment>plugin manager plugin type</comment>
      <translation>연속</translation>
    </message>
    <message>
      <source>Action</source>
      <comment>plugin manager plugin type</comment>
      <translation>작동</translation>
    </message>
    <message>
      <source>Unknown</source>
      <translation>미정</translation>
    </message>
  </context>
  <context>
    <name>ScPrintEngine_GDI</name>
    <message>
      <source>Printing...</source>
      <translation>인쇄중...</translation>
    </message>
  </context>
  <context>
    <name>ScProgressBar</name>
    <message>
      <source>%1 of %2</source>
      <translation>%1 of %2</translation>
    </message>
  </context>
  <context>
    <name>Scribus12Format</name>
    <message>
      <source>Scribus 1.2.x Document</source>
      <translation>Scribus 1.2.x 문서</translation>
    </message>
    <message>
      <source>Copy #%1 of </source>
      <translation>#%1 복사</translation>
    </message>
  </context>
  <context>
    <name>Scribus134Format</name>
    <message>
      <source>Scribus 1.3.4 Document</source>
      <translation>Scribus 1.3.4 문서</translation>
    </message>
    <message>
      <source>Copy #%1 of </source>
      <translation>#%1 문서</translation>
    </message>
  </context>
  <context>
    <name>Scribus13Format</name>
    <message>
      <source>Copy #%1 of </source>
      <translation>#%1 복사</translation>
    </message>
    <message>
      <source>Scribus 1.3.0->1.3.3.7 Document</source>
      <translation>Scribus 1.3.0->1.3.3.7 문서</translation>
    </message>
  </context>
 <context>
    <name>ScribusApp</name>
    <message>
        <source>None</source>
        <translation>없음</translation>
    </message>
    <message>
        <source>Initializing Plugins</source>
        <translation>플러그인 초기화 중</translation>
    </message>
    <message>
        <source>Initializing Keyboard Shortcuts</source>
        <translation>키보드 단축키 초기화 중</translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation>기본설정 읽는 중</translation>
    </message>
    <message>
        <source>Initializing Story Editor</source>
        <translation>스토리 편집기 초기화 중</translation>
    </message>
    <message>
        <source>Reading ICC Profiles</source>
        <translation>ICC 프로파일 읽는 중</translation>
    </message>
    <message>
        <source>Initializing Hyphenator</source>
        <translation>연결자 초기화 중</translation>
    </message>
    <message>
        <source>Reading Scrapbook</source>
        <translation>스크랩북 읽는 중</translation>
    </message>
    <message>
        <source>Setting up Shortcuts</source>
        <translation>단축키 설정 중</translation>
    </message>
    <message>
        <source>File</source>
        <translation>파일</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>편집</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation>글꼴 찾는 중</translation>
    </message>
    <message>
        <source>There are no fonts found on your system.</source>
        <translation>시스템에서 찾은 글꼴이 없습니다.</translation>
    </message>
    <message>
        <source>Exiting now.</source>
        <translation>지금 종료 중.</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation>치명적 오류</translation>
    </message>
    <message>
        <source>Font System Initialized</source>
        <translation>글꼴 시스템 초기화</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>파일(&amp;F)</translation>
    </message>
    <message>
        <source>Open &amp;Recent</source>
        <translation>최근 파일 열기(&amp;R)</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>들여오기(&amp;I)</translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation>내보내기(&amp;E)</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>편집(&amp;E)</translation>
    </message>
    <message>
        <source>St&amp;yle</source>
        <translation>스타일(&amp;Y)</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation>색상(&amp;C)</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>크기(&amp;S)</translation>
    </message>
    <message>
        <source>&amp;Shade</source>
        <translation>음영(&amp;S)</translation>
    </message>
    <message>
        <source>&amp;Font</source>
        <translation>글꼴(&amp;F)</translation>
    </message>
    <message>
        <source>&amp;Effects</source>
        <translation>효과(&amp;E)</translation>
    </message>
    <message>
        <source>&amp;Item</source>
        <translation>객체(&amp;I)</translation>
    </message>
    <message>
        <source>Preview Settings</source>
        <translation>미리보기 설정</translation>
    </message>
    <message>
        <source>Level</source>
        <translation>레벨</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation>레이어로 보내기(&amp;Y)</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation>PDF 설정(&amp;P)</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>도형(&amp;S)</translation>
	 </message>
    <message>
        <source>C&amp;onvert To</source>
        <translation>변환(&amp;O)</translation>
    </message>
    <message>
        <source>I&amp;nsert</source>
        <translation>삽입(&amp;N)</translation>
    </message>
    <message>
        <source>Character</source>
         <translation>문자</translation>
    </message>
    <message>
        <source>Quote</source>
        <translation>인용부호</translation>
    </message>
    <message>
        <source>Space</source>
        <translation>공백</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation>페이지(&amp;P)</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>보기(&amp;V)</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation>부가기능(&amp;X)</translation>
    </message>
    <message>
        <source>&amp;Windows</source>
        <translation>창(&amp;W)</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>도움말(&amp;H)</translation>
    </message>
    <message>
        <source>&amp;Alignment</source>
        <translation>배치(&amp;A)</translation>
    </message>
    <message>
        <source>Normal</source>
       <translation>보통</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation>준비</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;</source>
        <translation>문서 (*.sla *sla.gz *.scd *scd.gz);;</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;</source>
        <translation>문서 (*.sla *.scd);;</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>전체 파일 (*)</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>열기</translation>
    </message>
    <message>
        <source>Importing Pages...</source>
        <translation>페이지 들여오는 중...</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation>페이지 들여오기</translation>
    </message>
    <message>
        <source>&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</source>
        <translation>&lt;p&gt;문서 크기상 현재 페이지에서 이용될 수 없는 많은 페이지를 들여오려고 합니다.&lt;/p&gt;다음 하나를 선택하시오:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;생성&lt;/b&gt; 빠진 페이지&lt;/li&gt;&lt;li&gt;&lt;b&gt;페이지 들여오기&lt;/b&gt; 마지막 페이지까지&lt;/li&gt;&lt;li&gt;&lt;b&gt;취소&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>생성</translation>
    </message>
    <message>
        <source>Import</source>
        <translation>들여오기</translation>
    </message>
    <message>
        <source>Import done</source>
        <translation>들여오기 완료</translation>
    </message>
    <message>
        <source>Found nothing to import</source>
        <translation>들여올 내용을 찾지 못함</translation>
    </message>
    <message>
        <source>File %1 is not in an acceptable format</source>
        <translation>파일 %1 은 허용된 형식이 아닙니다</translation>
    </message>
    <message>
        <source>&amp;Abort</source>
        <translation>취소(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;Ignore</source>
        <translation>무시(&amp;I)</translation>
    </message>
    <message>
        <source>Printing...</source>
        <translation>인쇄...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>문서</translation>
    </message>
    <message>
        <source>Printing failed!</source>
        <translation>인쇄 실패!</translation>
    </message>
    <message>
        <source>Cannot Cut In-Use Item</source>
        <translation>사용 중인 객체를 잘라낼 수 없습니다</translation>
    </message>
     <message>
        <source>&amp;Tools</source>
        <translation>도구(&amp;T)</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation>X 위치:</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation>Y 위치:</translation>
    </message>
</context>
<context>
    <name>ScribusColorList</name>
    <message>
        <source>Sample</source>
        <translation>샘플</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>색상</translation>
    </message>
    <message>
        <source>None</source>
        <translation>없음</translation>
    </message>
    <message>
        <source>Document Colors</source>
        <translation>문서 색상</translation>
    </message>
</context> 
  <context>
    <name>ScribusCore</name>
    <message>
      <source>Initializing Plugins</source>
      <translation>플러그인 초기화 중...</translation>
    </message>
    <message>
      <source>Initializing Keyboard Shortcuts</source>
      <translation>키보드 단축키 초기화 중...</translation>
    </message>
    <message>
      <source>Reading Preferences</source>
      <translation>기본설정 읽는 중...</translation>
    </message>
    <message>
      <source>Searching for Fonts</source>
      <translation>글꼴 찾는 중...</translation>
    </message>
    <message>
      <source>There are no fonts found on your system.</source>
      <translation>스시템에서 찾은 글꼴이 없습니다.</translation>
    </message>
    <message>
      <source>Exiting now.</source>
      <translation>지금 종료 중.</translation>
    </message>
    <message>
      <source>Fatal Error</source>
      <translation>치명적 오류</translation>
    </message>
    <message>
      <source>Font System Initialized</source>
      <translation>글꼴 시스템 초기화</translation>
    </message>
    <message>
      <source>Reading Color Profiles</source>
      <translation>색상 프로파일 읽는 중...</translation>
    </message>
  </context>
  <context>
    <name>ScribusDoc</name>
    <message>
      <source>Document</source>
      <translation>문서</translation>
    </message>
    <message>
      <source>Background</source>
      <translation>배경</translation>
    </message>
        <message>
        <location filename="../scribusdoc.cpp" line="1595"/>
        <source>New Layer</source>
        <translation>새 레이어</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>보통</translation>
    </message>
	<message>
      <source>Do you really want to clear all your text?</source>
      <translation>전체 텍스트를 정말로 제거하시겠습니까??</translation>
    </message>
    <message>
      <source>Cannot Delete In-Use Item</source>
      <translation>사용 중인 객체 제거할 수 없습니다</translation>
    </message>
    <message>
      <source>The item %1 is currently being edited by Story Editor. The delete operation will be cancelled</source>
      <translation>객체 %1은 현재 스토리 편집기에 의해 편집 중입니다. 삭제 작업이 취소될 것입니다.</translation>
    </message>
    <message>
      <source>Some objects are locked.</source>
      <translation>몇 객체가 잠겼습니다.</translation>
    </message>
    <message>
      <source>&amp;Unlock All</source>
      <translation>전체 잠금 해제(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Skip locked objects</source>
      <translation>잠긴 객체 건너뛰기(&amp;S)</translation>
    </message>
    <message>
      <source>An error occurred while opening ICC profiles, color management is not enabled.</source>
      <translation>ICC 프로파일을 여는 동안 오류가 발생하여 색상관리를 사용할 수 없습니다.</translation>
    </message>
    <message>
      <source>Number of copies: %1
Horizontal gap: %2
Vertical gap: %3</source>
      <translation>복사 갯수: %1
수평 간격: %2
수직 간격: %3</translation>
    </message>
    <message>
      <source>Adjusting Colors</source>
      <translation>색상 조정 중</translation>
    </message>
	    <message>
        <location filename="../../scribus/styles/paragraphstyle.cpp" line="66"/>
        <source>Default Paragraph Style</source>
        <translation>기본 문단 스타일</translation>
    </message>
    <message>
        <location filename="../../scribus/styles/charstyle.cpp" line="151"/>
        <source>Default Character Style</source>
        <translation>기본 문자 스타일</translation>
    </message>
	    <message>
        <source>remove manual paragraphstyle</source>
        <translation>매뉴얼 문단 스타일 제거</translation>
    </message>
    <message>
        <source>remove manual charstyle</source>
        <translation>매뉴얼 문자 스타일 제거</translation>
    </message>
    <message>
        <location filename="../../scribus/scribusdoc.cpp" line="8648"/>
        <source>Number of copies: %1
Horizontal shift: %2
Vertical shift: %3
Rotation: %4</source>
        <translation>복사 갯수: %1
수평 이동: %2
수직 이동: %3
회전: %4</translation>
    </message>
    <message>
      <source>remove direct paragraph formatting</source>
      <translation>직접 문단 형식 제거</translation>
    </message>
    <message>
      <source>remove direct char formatting</source>
      <translation>직접 문자 형식 제거</translation>
    </message>
    <message>
      <source>Group%1</source>
      <translation>그룹 %1</translation>
    </message>
    <message>
      <source>Copy_of_</source>
      <translation>복사 </translation>
    </message>
  </context>
  <context>
    <name>ScribusMainWindow</name>
	    <message>
        <source>Initializing Plugins</source>
        <translation>플러그인 초기화 중</translation>
    </message>
    <message>
        <source>Initializing Keyboard Shortcuts</source>
        <translation>키보드 단축키 초기화 중</translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation>기본설정 읽는 중</translation>
    </message>
    <message>
      <source>Initializing Story Editor</source>
      <translation>스토리 편집기 초기화 중</translation>
    </message>
	    <message>
        <source>Reading ICC Profiles</source>
        <translation>ICC 프로파일 읽는 중</translation>
    </message>
    <message>
      <source>Initializing Hyphenator</source>
      <translation>연결자 초기화 중</translation>
    </message>
    <message>
      <source>Reading Scrapbook</source>
      <translation>스크랩북 읽는 중</translation>
    </message>
	    <message>
        <location filename="../scribus.cpp" line="306"/>
        <source>Setting up Shortcuts</source>
        <translation>단축키 설정 중</translation>
    </message>
	    <message>
        <location filename="../scribus.cpp" line="373"/>
        <source>File</source>
        <translation>파일</translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="386"/>
        <source>Edit</source>
        <translation>편집</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation>글꼴을 찾는 중</translation>
    </message>
    <message>
        <source>There are no fonts found on your system.</source>
        <translation>시스템에서 찾은 글꼴이 없습니다.</translation>
    </message>
    <message>
        <source>Exiting now.</source>
        <translation>지금 종료 중.</translation>
    </message>
    <message>
      <source>Fatal Error</source>
      <translation>치명적 오류</translation>
    </message>
	    <message>
        <source>Font System Initialized</source>
        <translation>글꼴 시스템 초기화</translation>
    </message>
    <message>
      <source>&amp;File</source>
      <translation>파일(&amp;F)</translation>
    </message>
    <message>
      <source>Open &amp;Recent</source>
      <translation>최근 파일 열기(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation>들여오기(&amp;I)</translation>
    </message>
    <message>
      <source>&amp;Export</source>
      <translation>내보내기(&amp;E)</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation>편집(&amp;E)</translation>
    </message>
	<message>
        <location filename="../scribus.cpp" line="9304"/>
        <source>St&amp;yle</source>
        <translation>스타일(&amp;Y)</translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9305"/>
        <source>&amp;Color</source>
        <translation>색상(&amp;C)</translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9306"/>
        <source>&amp;Size</source>
        <translation>크기(&amp;S)</translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9307"/>
        <source>&amp;Shade</source>
        <translation>음영(&amp;S)</translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9308"/>
        <source>&amp;Font</source>
        <translation>글꼴(&amp;F)</translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9309"/>
        <source>&amp;Effects</source>
        <translation>효과(&amp;E)</translation>
    </message>
    <message>
      <source>&amp;Item</source>
      <translation>객체(&amp;I)</translation>
    </message>
    <message>
      <source>Preview Settings</source>
      <translation>미리보기 설정</translation>
    </message>
    <message>
      <source>Level</source>
      <translation>레벨</translation>
    </message>
    <message>
      <source>Send to La&amp;yer</source>
      <translation>레이어로 보내기(&amp;Y)</translation>
    </message>
    <message>
      <source>&amp;PDF Options</source>
      <translation>PDF 설정(&amp;P)</translation>
    </message>
    <message>
      <source>C&amp;onvert To</source>
      <translation>변환(&amp;O)</translation>
    </message>
    <message>
      <source>I&amp;nsert</source>
      <translation>삽입(&amp;N)</translation>
    </message>
    <message>
      <source>Character</source>
      <translation>문자</translation>
    </message>
    <message>
      <source>Quote</source>
      <translation>인용부호</translation>
    </message>
    <message>
      <source>Space</source>
      <translation>공백</translation>
    </message>
    <message>
      <source>&amp;Page</source>
      <translation>페이지(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;View</source>
      <translation>보기(&amp;V)</translation>
    </message>
    <message>
      <source>E&amp;xtras</source>
      <translation>부가기능(&amp;X)</translation>
    </message>
    <message>
      <source>&amp;Windows</source>
      <translation>창(&amp;W)</translation>
    </message>
    <message>
      <source>&amp;Help</source>
      <translation>도움말(&amp;H)</translation>
    </message>
    <message>
      <source>&amp;Alignment</source>
      <translation>배치(&amp;A)</translation>
    </message>
    <message>
      <source>Ready</source>
      <translation>준비완료</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>열기</translation>
    </message>
    <message>
      <source>Importing Pages...</source>
      <translation>페이지 들여오는 중...</translation>
    </message>
    <message>
      <source>Import Page(s)</source>
      <translation>페이지 들여오기</translation>
    </message>
    <message>
      <source>Import done</source>
      <translation>들여오기 완료</translation>
    </message>
    <message>
      <source>Found nothing to import</source>
      <translation>들여올 내용을 찾지 못함</translation>
    </message>
    <message>
      <source>File %1 is not in an acceptable format</source>
      <translation>파일 %1 은 허용된 형식이 아닙니다</translation>
    </message>
    <message>
      <source>Loading...</source>
      <translation>읽어오는 중...</translation>
    </message>
	    <message>
        <location filename="../scribus.cpp" line="3623"/>
        <source>PostScript</source>
        <translation>포스트스크립트</translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="3797"/>
        <source>Some ICC profiles used by this document are not installed:</source>
        <translation>문서에 사용된 몇몇 ICC 프로파일이 설치되지 않았습니다:</translation>
    </message>
    <message>
      <source> was replaced by: </source>
      <translation> 치환: </translation>
    </message>
    <message>
      <source>(converted)</source>
      <translation>（변환됨）</translation>
    </message>
    <message>
      <source>All Supported Formats</source>
      <translation>전체 지원 형식</translation>
    </message>
	    <message>
        <source>All Files (*)</source>
        <translation>전체 파일 (*)</translation>
    </message>
    <message>
      <source>Cannot write the file: 
%1</source>
      <translation>파일을 쓸 수 없음: 
%1</translation>
    </message>
	   <message>
        <source>Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</source>
        <translation>문서 (*.sla *.sla.gz *.scd *scd.gz);;전체 파일 (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>문서 (*.sla *.scd);;전체 파일 (*)</translation>
    </message>
    <message>
      <source>Save As</source>
      <translation>다른 이름으로 저장</translation>
    </message>
    <message>
      <source>Saving...</source>
      <translation>저장 중...</translation>
    </message>
    <message>
      <source>Scribus has detected some errors. Consider using the Preflight Verifier to correct them</source>
      <translation>Scribus에서 오류가 발견되었습니다. 정정하기 위하여 문서 검증하십시요.</translation>
    </message>
	    <message>
        <source>&amp;Ignore</source>
        <translation>무시(&amp;I)</translation>
    </message>
    <message>
        <source>&amp;Abort</source>
        <translation>취소(&amp;A)</translation>
    </message>
    <message>
      <source>Printing...</source>
      <translation>인쇄 중...</translation>
    </message>
    <message>
      <source>Document</source>
      <translation>문서</translation>
    </message>
    <message>
      <source>Printing failed!</source>
      <translation>인쇄 실패!</translation>
    </message>
    <message>
      <source>Cannot Cut In-Use Item</source>
      <translation>사용 중인 객체을 잘라낼 수 없음</translation>
    </message>
    <message>
      <source>The item %1 is currently being edited by Story Editor. The cut operation will be cancelled</source>
      <translation>객체 %1은 현재 스토리 편집기에서 편집중입니다. 잘라내기 작동이 취소됩니다.</translation>
    </message>
    <message>
      <source>About Qt</source>
      <translation>Qt에 대하여</translation>
    </message>
    <message>
      <source>Scribus Manual</source>
      <translation>Scribus 매뉴얼</translation>
    </message>
    <message>
      <source>Save as</source>
      <translation>다른 이름으로 저장</translation>
    </message>
    <message>
      <source>Text Files (*.txt);;All Files(*)</source>
      <translation>텍스트 파일 (*.txt);;전체 파일(*)</translation>
    </message>
	    <message>
        <source>Normal</source>
        <translation>보통</translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="5457"/>
        <source>Name:</source>
        <translation>이름:</translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="5457"/>
        <source>Convert Page to Master Page</source>
        <translation>페이지를 마스터 페이지로 변환</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>크기(&amp;S):</translation>
    </message>
    <message>
      <source>Size</source>
      <translation>크기</translation>
    </message>
    <message>
      <source>&amp;Shade:</source>
      <translation>음영(&amp;S):</translation>
    </message>
    <message>
      <source>Shade</source>
      <translation>음영</translation>
    </message>
    <message>
      <source>No Style</source>
      <translation>스타일 없음</translation>
    </message>
    <message>
      <source>The following programs are missing:</source>
      <translation>다음 프로그램이 빠졌습니다:</translation>
    </message>
    <message>
      <source>Ghostscript : You cannot use EPS images or Print Preview</source>
      <translation>고스트스크립트 : EPS 이미지나 인쇄 미리보기를 사용할 수 없습니다</translation>
    </message>
    <message>
      <source>Ghostscript : You cannot use EPS images or PostScript Print Preview</source>
      <translation>고스트스크립트 : EPS 이미지나 인쇄 미리보기를 사용할 수 없습니다</translation>
    </message>
    <message>
      <source>Ghostscript is missing : Postscript Print Preview is not available</source>
      <translation>고스트스크립트가 빠짐 : 포스트스크립트 인쇄 미리보기를 이용할 수 없습니다</translation>
    </message>
    <message>
      <source>All</source>
      <translation>전체</translation>
    </message>
    <message>
      <source>Scribus detected some errors.
Consider using the Preflight Verifier  to correct them.</source>
      <translation>Scribus에서 몇몇 오류가 있습니다. 
정정하기 위하여 문서 검증을 사용하시오.</translation>
    </message>
	    <message>
        <location filename="../scribus.cpp" line="7848"/>
        <source>EPS Files (*.eps);;All Files (*)</source>
        <translation>EPS 파일 (*.eps);;전체 파일 (*)</translation>
    </message>
    <message>
      <source>Detected some errors.
Consider using the Preflight Verifier to correct them</source>
      <translation>몇몇 오류 발견. 
정정하기 위하여 문서 검증을 사용하시오.</translation>
    </message>
    <message>
      <source>-Page%1</source>
      <translation>-페이지%1</translation>
    </message>
    <message>
      <source>Some objects are locked.</source>
      <translation>몇 객체가 잠금.</translation>
    </message>
    <message>
      <source>&amp;Lock All</source>
      <translation>전체 잠금(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Unlock All</source>
      <translation>전체 잠금 해제(&amp;U)</translation>
    </message>
    <message>
      <source>Information</source>
      <translation>정보</translation>
    </message>
    <message>
      <source>The program %1 is already running!</source>
      <translation>프로그램 %1 이 벌써 실행 중입니다!</translation>
    </message>
    <message>
      <source>The program %1 is missing!</source>
      <translation>프로그램 %1 이 빠졌습니다!</translation>
    </message>
    <message>
      <source>The selected color does not exist in the document's color set. Please enter a name for this new color.</source>
      <translation>선택된 색상이 문서 색상표에서 없습니다. 새 색상을 위한 이름을 넣어주세요.</translation>
    </message>
    <message>
      <source>Color Not Found</source>
      <translation>색상 찾지 못함</translation>
    </message>
    <message>
      <source>The name you have selected already exists. Please enter a different name for this new color.</source>
      <translation>선택된 이름이 이미 있습니다. 새로운 색상을 위한 다른 이름을 입력하세요.。</translation>
    </message>
    <message>
      <source>&amp;Level</source>
      <translation>레벨(&amp;L)</translation>
    </message>
    <message>
      <source>Send to Layer</source>
      <translation>레이어로 보내기</translation>
    </message>
    <message>
      <source>Previe&amp;w Settings</source>
      <translation>미리보기 설정(&amp;W)</translation>
    </message>
    <message>
      <source>&amp;Tools</source>
      <translation>도구(&amp;T)</translation>
    </message>
    <message>
      <source>X-Pos:</source>
      <translation>X위치:</translation>
    </message>
    <message>
      <source>Y-Pos:</source>
      <translation>Y위치:</translation>
    </message>
	   <message>
        <source>Spaces &amp;&amp; Breaks</source>
        <translation>공백 개행</translation>
    </message>
    <message>
        <source>Ligature</source>
        <translation>연결</translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="5457"/>
        <source>New Master Page %1</source>
        <translation>새 마스터 페이지 %1</translation>
    </message>
    <message>
        <location filename="../../scribus/scribus.cpp" line="7785"/>
        <source>Ghostscript : You cannot use EPS images or PostScript Print Preview</source>
        <translation>고스트스크립트 : EPS 이미지나 출력 미리보기를 사용할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../../scribus/scribus.cpp" line="7832"/>
        <source>Ghostscript is missing : Postscript Print Preview is not available</source>
        <translation>고스트스크립트가 없음 : 포스트스크립트 출력 미리보기를 이용할 수 없습니다.</translation>
    </message>
    <message>
        <location filename="../../scribus/scribus.cpp" line="9662"/>
        <source>Do you really want to replace your existing image?</source>
        <translation><translation>기존 이미지를 정말로 치환하겠습니까?</translation></translation>
    </message>
    <message>
      <source>Contents</source>
      <translation>텍스트 내용</translation>
    </message>
    <message>
      <source>&amp;Character</source>
      <translation>문자(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Quote</source>
      <translation>인용(&amp;Q)</translation>
    </message>
    <message>
      <source>S&amp;paces &amp;&amp; Breaks</source>
      <translation>공백 개행(&amp;P)</translation>
    </message>
    <message>
      <source>Liga&amp;ture</source>
      <translation>연결(&amp;T)</translation>
    </message>
    <message>
      <source>Do you really want to replace your existing image?</source>
      <translation>기존 이미지를 정말로 치환하겠습니까?</translation>
    </message>
    <message>
      <source>Paste Recent</source>
      <translation>최근 것 붙여넣기</translation>
    </message>
    <message>
      <source>Documents (*.sla *.sla.gz);;All Files (*)</source>
      <translation>문서 (*.sla *.sla.gz);;전체 파일 (*)</translation>
    </message>
	    <message>
        <location filename="../scribus.cpp" line="8316"/>
        <source>Group%1</source>
        <translation>그룹 %1</translation>
    </message>
    <message>
      <source>Do you really want to clear all your text?</source>
      <translation>전체 텍스트를 정말로 제거하겠습니까??</translation>
    </message>
	    <message>
        <location filename="../../scribus/scribus.cpp" line="283"/>
        <source>Scribus </source>
        <translation>Scribus</translation>
    </message>
    <message>
      <source>Online &amp;Tutorials</source>
      <translation>온라인 자습서(&amp;T)</translation>
    </message>
    <message>
      <source>Some color profiles used by this document are not installed:</source>
      <translation>이 문서의 몇몇 색상 프로파일은 설치되어 있지 않습니다:</translation>
    </message>
    <message>
      <source>%1;;All Files (*)</source>
      <translation>%1;;전체 파일 (*)</translation>
    </message>
    <message>
      <source>Applying User Shortcuts</source>
      <translation>사용자 단축키 적용 중</translation>
    </message>
    <message>
      <source>Updating Images</source>
      <translation>이미지 업데이트 중</translation>
    </message>
    <message>
      <source>Your document was saved to a temporary file and could not be moved: 
%1</source>
      <translation>문서를 임시파일로 저장되며 이동할 수 없습니다: %1</translation>
    </message>
    <message>
      <source>Print engine initialization failed</source>
      <translation>인쇄기 초기화 실패</translation>
    </message>
    <message>
      <source>&amp;Name:</source>
      <translation>이름(&amp;N):</translation>
    </message>
    <message>
      <source>New Entry</source>
      <translation>새 엔트리</translation>
    </message>
  </context>
  <context>
    <name>ScribusQApp</name>
    <message>
      <source>Invalid argument: </source>
      <translation>부적합한 인자: </translation>
    </message>
    <message>
      <source>File %1 does not exist, aborting.</source>
      <translation>파일 %1 이 없습니다. 취소 중</translation>
    </message>
    <message>
      <source>Usage: scribus [option ... ] [file]</source>
      <translation>사용법: scribus [설정 ... ] [파일]</translation>
    </message>
    <message>
      <source>Options:</source>
      <translation>설정:</translation>
    </message>
    <message>
      <source>Print help (this message) and exit</source>
      <translation>도움말(메세지)를 인쇄하고 종료합니다.</translation>
    </message>
    <message>
      <source>Uses xx as shortcut for a language, eg `en' or `de'</source>
      <translation>xx를 언어의 단축키로 사용합니다, 예로 'en' 또는 `ko'</translation>
    </message>
    <message>
      <source>List the currently installed interface languages</source>
      <translation>현재 설치된 언어 목록</translation>
    </message>
    <message>
      <source>Show information on the console when fonts are being loaded</source>
      <translation>글꼴을 읽어올 때 콘솔상에 정보를 나타냅니다</translation>
    </message>
    <message>
      <source>Do not show the splashscreen on startup</source>
      <translation>시작 창을 보여주지 않습니다.</translation>
    </message>
    <message>
      <source>Output version information and exit</source>
      <translation>출력 버전 정보와 종료</translation>
    </message>
    <message>
      <source>Use right to left dialog button ordering (eg. Cancel/No/Yes instead of Yes/No/Cancel)</source>
      <translation>오른쪽에서 왼쪽으로 대화상자 버튼순서 사용(즉 예/아니오/취소 대신 취소/아니오/예)</translation>
    </message>
    <message>
      <source>filename</source>
      <translation>파일명</translation>
    </message>
    <message>
      <source>Use filename as path for user given preferences</source>
      <translation>사용자 기본설정 경로로 파일이름 사용</translation>
    </message>
    <message>
      <source>Installed interface languages for Scribus are as follows:</source>
      <translation>Scribus에 설치된 각국 언어:</translation>
    </message>
    <message>
      <source>To override the default language choice:</source>
      <translation>기본언어 선택을 무시:</translation>
    </message>
    <message>
      <source>scribus -l xx or scribus --lang xx, where xx is the language of choice.</source>
      <translation>scribus -l xx 또는 scribus --lang xx,  xx는 선택된 언어임.</translation>
    </message>
    <message>
      <source>Scribus Version</source>
      <translation>Scribus 버전</translation>
    </message>
    <message>
      <source>Scribus, Open Source Desktop Publishing</source>
      <translation>Scribus, 오픈 소스 데스크톱 출판</translation>
    </message>
    <message>
      <source>Homepage</source>
      <translation>홈페이지</translation>
    </message>
    <message>
      <source>Documentation</source>
      <translation>문서</translation>
    </message>
    <message>
      <source>Wiki</source>
      <translation>Wiki</translation>
    </message>
    <message>
      <source>Issues</source>
      <translation>발행</translation>
    </message>
    <message>
      <source>Stop the showing of the splashscreen on startup. Writes an empty file called .neversplash in ~/.scribus.</source>
      <translation>시작창 보기 중지.  .neversplash 라 불리는 파일을 ~/.scribus폴더에 씁니다.</translation>
    </message>
    <message>
      <source>Download a file from the Scribus website and show the latest available version.</source>
      <translation>Scribus 웹사이트에서 파일을 다운로드하고, 사용 가능한 최신 버전을 보여줍니다.</translation>
    </message>
    <message>
      <source>Display a console window</source>
      <translation>콘솔창 보이기</translation>
    </message>
    <message>
      <source>Show location ICC profile information on console while starting</source>
      <translation>시작하는 동안 콘솔상에 ICC 프로파일 정보 위치를 보여줍니다.</translation>
    </message>
    <message>
      <source>Invalid argument: %1</source>
      <translation>부적합한 인자: %1</translation>
    </message>
  </context>
  <context>
    <name>ScribusView</name>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
	    <message>
        <source>Layer</source>
        <translation>레이어</translation>
    </message>
    <message>
      <source>Copy Here</source>
      <translation>여기에 복사</translation>
    </message>
    <message>
      <source>Move Here</source>
      <translation>여기로 이동</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>취소</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation>붙여넣기(&amp;P)</translation>
    </message>
	    <message>
        <location filename="../scribusview.cpp" line="2939"/>
        <source>Picture</source>
        <translation>이미지</translation>
    </message>
    <message>
      <source>File: </source>
      <translation>파일:</translation>
    </message>
    <message>
      <source>Original PPI: </source>
      <translation>초기 PPI: </translation>
    </message>
    <message>
      <source>Actual PPI: </source>
      <translation>실제 PPI: </translation>
    </message>
	   <message>
        <location filename="../scribusview.cpp" line="2965"/>
        <source>Linked Text</source>
        <translation>링크된 텍스트</translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2967"/>
        <source>Text Frame</source>
        <translation>텍스트 프레임</translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2970"/>
        <source>Text on a Path</source>
        <translation>경로상 텍스트</translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2973"/>
        <source>Paragraphs: </source>
        <translation>문단수:</translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2984"/>
        <source>Words: </source>
        <translation>단어수:</translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2991"/>
        <source>Chars: </source>
        <translation>문자수:</translation>
    </message>
    <message>
      <source>Colorspace: </source>
      <translation>색상공간: </translation>
    </message>
    <message>
      <source>Unknown</source>
      <translation>미정</translation>
    </message>
    <message>
      <source>Print: </source>
      <translation>인쇄: </translation>
    </message>
    <message>
      <source>Enabled</source>
      <translation>가능</translation>
    </message>
    <message>
      <source>Disabled</source>
      <translation>불가</translation>
    </message>
    <message>
      <source>In&amp;fo</source>
      <translation>정보(&amp;F)</translation>
    </message>
    <message>
      <source>&amp;PDF Options</source>
      <translation>PDF 설정(&amp;P)</translation>
    </message>
    <message>
      <source>Send to La&amp;yer</source>
      <translation>레이어로 보내기(&amp;Y)</translation>
    </message>
    <message>
      <source>Le&amp;vel</source>
      <translation>레벨(&amp;V)</translation>
    </message>
    <message>
      <source>Conve&amp;rt to</source>
      <translation>바꾸기(&amp;R)</translation>
    </message>
    <message>
      <source>Linking Text Frames</source>
      <translation>텍스트 프레임 링크</translation>
    </message>
    <message>
      <source>Page %1 to %2</source>
      <translation>페이지 %1 에서 %2</translation>
    </message>
    <message>
      <source>Cannot Convert In-Use Item</source>
      <translation>사용중인 객체를 변환할 수 없음</translation>
    </message>
    <message>
      <source>The item %1 is currently being edited by Story Editor. The convert to outlines operation for this item will be skipped</source>
      <translation>객체 %1을 스토리 편집기에 의해 편집하고 있는 중. 이 객체에서 윤곽선 작업에 대한 변환이 취소됩니다.</translation>
    </message>
    <message>
      <source>Contents</source>
      <translation>텍스트 내용</translation>
    </message>
    <message>
      <source>Paste Recent</source>
      <translation>최근 것 붙여넣기</translation>
    </message>
    <message>
      <source>Group%1</source>
      <translation>그룹 %1</translation>
    </message>
    <message>
      <source>Preview Mode</source>
      <translation>미리보기 모드</translation>
    </message>
    <message>
      <source>CMS is active. Therefore the color display may not match the perception by visually impaired</source>
      <translation>CMS가 활성화되어있음. 그러므로 시각적 결손에 의해 색상화면과 지각대상이 일치하지 않음.</translation>
    </message>
    <message>
      <source>Enter Object Size</source>
      <translation>객체 크기를 입력</translation>
    </message>
    <message>
      <source>No Image Loaded</source>
      <translation>읽어올 이미지 없음</translation>
    </message>
    <message>
      <source>You are trying to link a frame to itself.</source>
      <translation>프레임 자체에 링크를 시도하려고 합니다.</translation>
    </message>
    <message>
      <source>You are trying to link a frame which is already linked.</source>
      <translation>이미 링크된 프레임에 링크를 시도하려고 합니다.</translation>
    </message>
    <message>
      <source>Page: </source>
      <translation>페이지: </translation>
    </message>
    <message>
      <source>Pages: </source>
      <translation>페이지: </translation>
    </message>
    <message>
      <source>Enable/disable Color Management</source>
      <translation>색상관리 가능/불가</translation>
    </message>
    <message>
      <source>Enable/disable the Preview Mode</source>
      <translation>미리보기 모드 가능/불가</translation>
    </message>
    <message>
      <source>Select the visual appearance of the display. You can choose between normal and several color blindness forms</source>
      <translation>사물에 반응하는 시력 색상 선택. 정상인과 색맹의 시각 색상 차이 선택</translation>
    </message>
    <message>
      <source>Configure CMS...</source>
      <translation>CMS 설정...</translation>
    </message>
  </context>
  <context>
    <name>ScribusWin</name>
	    <message>
        <source>&amp;Leave Anyway</source>
        <translation>어째뜬 남겨둡니다(&amp;L)</translation>
    </message>
    <message>
        <source>C&amp;lose Anyway</source>
        <translation>어째뜬 닫습니다.(&amp;L)</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>경고</translation>
    </message>
    <message>
      <source>Document:</source>
      <translation>문서:</translation>
    </message>
    <message>
      <source>has been changed since the last save.</source>
      <translation>저장 후 변경되었습니다.</translation>
    </message>
	<message>
        <source>&amp;Save Now</source>
        <translation>지금 저장(&amp;S)</translation>
    </message>
    <message>
        <source>&amp;Discard</source>
        <translation>무시(&amp;D)</translation>
    </message>
	<message>
        <source>&amp;Cancel</source>
        <translation>취소(&amp;C)</translation>
    </message>
	<message>
        <source>Save Now</source>
        <translation>저장</translation>
    </message>
    <message>
    <source>Discard</source>
        <translation>무시</translation>
    </message>
	<message>
        <source>Cancel</source>
        <translation>취소</translation>
    </message>
  </context>
  <context>
    <name>ScriptPlugin</name>
    <message>
      <source>Embedded Python scripting support.</source>
      <translation>내장 파이썬 스트립트 지원</translation>
    </message>
    <message>
      <source>Scripter</source>
      <translation>스크립터</translation>
    </message>
  </context>
  <context>
    <name>ScripterCore</name>
    <message>
      <source>Script error</source>
      <translation>스크립트 오류</translation>
    </message>
    <message>
      <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;>bugs.scribus.net&lt;/a> please.</source>
      <translation>공식 스크립트 보고를 실행하고 있다면  
&lt;a href=&quot;http://bugs.scribus.net&quot;>bugs.scribus.net&lt;/a> 
에 알려주시기 바랍니다.</translation>
    </message>
    <message>
      <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
      <translation>이 메세지는 클립보드에 있습니다. Ctrl+V를 눌러 버그 탐색기에 붙여넣기 하세요.</translation>
    </message>
    <message>
      <source>There was an internal error while trying the command you entered. Details were printed to stderr. </source>
      <translation>입력 명령어를 실행하는 동안 내부 오류가 발생하였습니다. 자세한 사항은 stderr로 출력됩니다.</translation>
    </message>
    <message>
      <source>Examine Script</source>
      <translation>스크립트 검토 파일 선택...</translation>
    </message>
	   <message>
        <source>Python Scripts (*.py)</source>
        <translation>파이썬 스크립트 (*.py)</translation>
    </message>
    <message>
      <source>Setting up the Python plugin failed. Error details were printed to stderr. </source>
      <translation>Python 플러그인 설정에 실패했습니다. 오류에 대한 자세한 것은 stderr에 출력됩니다.</translation>
    </message>
	    <message>
        <source>Python Scripts (*.py);;All Files (*)</source>
        <translation>파이썬 스크립트 (*.py);;전체 파일 (*)</translation>
    </message>
    <message>
      <source>Documentation for:</source>
      <translation>문서:</translation>
    </message>
    <message>
      <source>Script</source>
      <translation>스크립트</translation>
    </message>
    <message>
      <source> doesn't contain any docstring!</source>
      <translation>문자열을 포함하고 있지 않습니다!</translation>
    </message>
    <message>
      <source>Python Scripts (*.py *.PY);;All Files (*)</source>
      <translation>파이썬 스크립트 (*.py *.PY);;전체 파일 (*)</translation>
    </message>
  </context>
  <context>
    <name>ScripterPrefsGui</name>
	    <message>
        <location filename="../../scribus/plugins/scriptplugin/scripterprefsgui.cpp" line="60"/>
        <source>Scripter Preferences</source>
        <translation>스크립터 설정</translation>
    </message>
    <message>
        <source>Extension Scripts</source>
        <translation>확장 스크립트</translation>
    </message>
    <message>
        <location filename="../../scribus/plugins/scriptplugin/scripterprefsgui.ui" line="81"/>
        <source>Enable Extension Scripts</source>
        <translation>확장 스크립트 가능</translation>
    </message>
    <message>
        <source>Startup Script</source>
        <translation>스크립트 시작</translation>
    </message>
    <message>
      <source>Extensions</source>
      <translation>확장</translation>
    </message>
    <message>
      <source>Console</source>
      <translation>콘솔</translation>
    </message>
    <message>
      <source>Enable Extension Scripts</source>
      <translation>확장 스크립트 가능</translation>
    </message>
    <message>
      <source>Startup Script:</source>
      <translation>시작 스크립트:</translation>
    </message>
	    <message>
        <source>Errors:</source>
        <comment>syntax highlighting</comment>
        <translation>오류:</translation>
    </message>
    <message>
        <source>Comments:</source>
        <comment>syntax highlighting</comment>
        <translation>주석:</translation>
    </message>
    <message>
        <source>Keywords:</source>
        <comment>syntax highlighting</comment>
        <translation>주제어:</translation>
    </message>
    <message>
        <source>Signs:</source>
        <comment>syntax highlighting</comment>
        <translation>기호:</translation>
    </message>
    <message>
        <source>Numbers:</source>
        <comment>syntax highlighting</comment>
        <translation>번호:</translation>
    </message>
    <message>
        <source>Strings:</source>
        <comment>syntax highlighting</comment>
        <translation>문자열:</translation>
    </message>
    <message>
        <source>Base Texts:</source>
        <comment>syntax highlighting</comment>
        <translation>기본 텍스트:</translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scripterprefsgui.cpp" line="92"/>
        <source>Select Color</source>
        <translation>색상 선택</translation>
    </message>
    <message>
      <source>Change...</source>
      <translation>바꾸기...</translation>
    </message>
	    <message>
        <location filename="../../scribus/plugins/scriptplugin/scripterprefsgui.cpp" line="129"/>
        <source>Locate Startup Script</source>
        <translation>시작 스크립트 위치</translation>
    </message>
    <message>
      <source>Form</source>
      <translation>양식</translation>
    </message>
    <message>
      <source>Comments:</source>
      <translation>주석:</translation>
    </message>
    <message>
      <source>Keywords:</source>
      <translation>주제어:</translation>
    </message>
    <message>
      <source>Signs:</source>
      <translation>기호:</translation>
    </message>
    <message>
      <source>Strings:</source>
      <translation>문자열:</translation>
    </message>
    <message>
      <source>Numbers:</source>
      <translation>숫자:</translation>
    </message>
    <message>
      <source>Errors:</source>
      <translation>오류:</translation>
    </message>
    <message>
      <source>Base Texts:</source>
      <translation>기본 텍스트:</translation>
    </message>
  </context>
  <context>
    <name>SeList</name>
    <message>
      <source>Show Page Previews</source>
      <translation>페이지 미리보기 보이기</translation>
    </message>
    <message>
      <source>Delete Master Page?</source>
      <translation>마스터 페이지 삭제하겠습니까?</translation>
    </message>
    <message>
      <source>Are you sure you want to delete this master page?</source>
      <translation>정말로 이 마스터 페이지 삭제하시겠습니까?</translation>
    </message>
  </context>
  <context>
    <name>SeView</name>
	    <message>
        <source>Show Master Page Names</source>
        <translation>마스터 페이지 이름 보이기</translation>
    </message>
    <message>
      <source>Delete Page?</source>
      <translation>페이지를 삭제하겠습니까?</translation>
    </message>
    <message>
      <source>Are you sure you want to delete this page?</source>
      <translation>이 페이지를 삭제하겠습니까?</translation>
    </message>
  </context>
  <context>
    <name>SearchReplace</name>
    <message>
      <source>Search/Replace</source>
      <translation>찾기/치환</translation>
    </message>
    <message>
      <source>Search for:</source>
      <translation>찾기:</translation>
    </message>
    <message>
      <source>Text</source>
      <translation>텍스트</translation>
    </message>
	   <message>
        <location filename="../search.cpp" line="156"/>
        <source>Paragraph Style</source>
        <translation>문단 스타일</translation>
    </message>
    <message>
      <source>Font</source>
      <translation>글꼴</translation>
    </message>
    <message>
      <source>Font Size</source>
      <translation>글꼴 크기</translation>
    </message>
    <message>
      <source>Font Effects</source>
      <translation>글꼴 효과</translation>
    </message>
    <message>
      <source>Fill Color</source>
      <translation>채움 색상</translation>
    </message>
    <message>
      <source>Fill Shade</source>
      <translation>채움 음영</translation>
    </message>
    <message>
      <source>Stroke Color</source>
      <translation>윤곽선 색상</translation>
    </message>
    <message>
      <source>Stroke Shade</source>
      <translation>윤곽선 음영</translation>
    </message>
    <message>
      <source>Left</source>
      <translation>왼쪽</translation>
    </message>
    <message>
      <source>Center</source>
      <translation>중앙</translation>
    </message>
    <message>
      <source>Right</source>
      <translation>오른쪽</translation>
    </message>
    <message>
      <source>Block</source>
      <translation>블록</translation>
    </message>
    <message>
      <source>Forced</source>
      <translation>강제</translation>
    </message>
	 <message>
	        <source> pt</source>
        <translation> 포인트</translation>
    </message>
    <message>
        <source>None</source>
        <translation>없음</translation>
    </message>
    <message>
      <source>Replace with:</source>
      <translation>치환:</translation>
    </message>
    <message>
      <source>&amp;Whole Word</source>
      <translation>전체 단어(&amp;W)</translation>
    </message>
    <message>
      <source>&amp;Ignore Case</source>
      <translation>대소문자 무시(&amp;I)</translation>
    </message>
    <message>
      <source>&amp;Search</source>
      <translation>찾기(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Replace</source>
      <translation>치환(&amp;R)</translation>
    </message>
    <message>
      <source>Replace &amp;All</source>
      <translation>전체 치환(&amp;A)</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>제거(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>닫기(&amp;C)</translation>
    </message>
    <message>
      <source>Search finished</source>
      <translation>찾기 완료</translation>
    </message>
    <message>
      <source>Search finished, found %1 matches</source>
      <translation>찾기 완료. %1개 발견되었습니다</translation>
    </message>
    <message>
      <source>Alignment</source>
      <translation>배치</translation>
    </message>
    <message>
      <source>Search for text or formatting in the current text</source>
      <translation>현재 텍스트에서 텍스트나 형식 찾기</translation>
    </message>
    <message>
      <source>Replace the searched for formatting with the replacement values</source>
      <translation>치환값 찾은 것으로 치환</translation>
    </message>
    <message>
      <source>Replace all found instances</source>
      <translation>찾은 전체 치환</translation>
    </message>
    <message>
      <source>Clear all search and replace options</source>
      <translation>전체 찾기를 제거하고 설정을 바꿉니다</translation>
    </message>
    <message>
      <source>Close search and replace</source>
      <translation>찾기와 치환을 닫음</translation>
    </message>
  </context>
  <context>
    <name>SeitenPal</name>
    <message>
        <source>Drag pages or master pages onto the trashbin to delete them</source>
        <translation>삭제하기 위하여 페이지 또는 마스터 페이지를 쓰레기통으로 드래그합니다</translation>
    </message>
    <message>
        <source>Previews all the pages of your document</source>
        <translation>문서 전체 페이지 미리보기</translation>
    </message>
    <message>
        <source>Here are all your master pages. To create a new page, drag a master page to the page view below</source>
        <translation>여기에 전체 페이지가 있습니다. 새로운 페이지를 생성하기 위하여 마스터 페이지를 페이지 보기 아래에 드래그합니다</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>보통</translation>
    </message>
    <message>
        <source>Arrange Pages</source>
       <translation>페이지 정렬</translation>
    </message>
    <message>
        <source>Available Master Pages:</source>
        <translation>이용가능한 마스터 페이지:</translation>
    </message>
    <message>
        <source>Document Pages:</source>
        <translation>문서 페이지:</translation>
    </message>
    <message>
        <source>Facing Pages</source>
        <translation>보이는 페이지</translation>
    </message>
    <message>
        <source>Left Page First</source>
        <translation>왼쪽 페이지 처음</translation>
    </message>
</context>
  <context>
    <name>SelectFields</name>
    <message>
      <source>Select Fields</source>
      <translation>필드 선택</translation>
    </message>
    <message>
      <source>Available Fields</source>
      <translation>이용가능한 필드</translation>
    </message>
    <message>
      <source>&amp;>></source>
      <translation>&amp;>></translation>
    </message>
    <message>
      <source>&amp;&lt;&lt;</source>
      <translation>&amp;&lt;&lt;</translation>
    </message>
    <message>
      <source>Selected Fields</source>
      <translation>선택된 필드</translation>
    </message>
  </context>
  <context>
    <name>ShadeButton</name>
    <message>
      <source>Other...</source>
      <translation>기타...</translation>
    </message>
    <message>
      <source>&amp;Shade:</source>
      <translation>음영(&amp;S):</translation>
    </message>
    <message>
      <source>Shade</source>
      <translation>음영</translation>
    </message>
  </context>
  <context>
    <name>ShadowValues</name>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>X-Offset</source>
      <translation>X 옵셋</translation>
    </message>
    <message>
      <source>Y-Offset</source>
      <translation>Y 옵셋</translation>
    </message>
  </context>
  <context>
    <name>ShortWordsPlugin</name>
    <message>
      <source>Short &amp;Words...</source>
      <comment>short words plugin</comment>
      <translation>약어 플러그인(&amp;W)...</translation>
    </message>
    <message>
      <source>Short Words</source>
      <translation>약어</translation>
    </message>
    <message>
      <source>Special plug-in for adding non-breaking spaces before or after so called short words. Available in the following languages: </source>
      <translation>약어 앞 또는 뒤에 개행없음 공백을 더하기 위한 특별한 플러그인. 다음과 같은 언어에서 이용할 수 있습니다: </translation>
    </message>
  </context>
  <context>
    <name>ShortcutWidget</name>
    <message>
      <source>&amp;No Key</source>
      <translation>키 없음(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;User Defined Key</source>
      <translation>사용자 정의 키(&amp;U)</translation>
    </message>
	    <message>
        <location filename="../stylemanager.cpp" line="1461"/>
        <source>ALT+SHIFT+T</source>
        <translation>ALT+SHIFT+T</translation>
    </message>
    <message>
      <source>Set &amp;Key</source>
      <translation>키 설정(&amp;K)</translation>
    </message>
	   <message>
        <location filename="../../scribus/shortcutwidget.cpp" line="116"/>
        <source>Alt</source>
        <translation>Alt</translation>
    </message>
    <message>
        <location filename="../../scribus/shortcutwidget.cpp" line="116"/>
        <source>Ctrl</source>
        <translation>Ctrl</translation>
    </message>
    <message>
        <location filename="../../scribus/shortcutwidget.cpp" line="116"/>
        <source>Shift</source>
        <translation>Shift</translation>
    </message>
    <message>
        <location filename="../../scribus/shortcutwidget.cpp" line="116"/>
        <source>Meta</source>
        <translation>메타</translation>
    </message>
    <message>
        <location filename="../../scribus/shortcutwidget.cpp" line="77"/>
        <source>Meta+</source>
        <translation>메타+</translation>
    </message>
    <message>
        <location filename="../../scribus/shortcutwidget.cpp" line="81"/>
        <source>Shift+</source>
        <translation>Shift+</translation>
    </message>
    <message>
        <location filename="../../scribus/shortcutwidget.cpp" line="85"/>
        <source>Alt+</source>
        <translation>Alt+</translation>
    </message>
    <message>
        <location filename="../../scribus/shortcutwidget.cpp" line="89"/>
        <source>Ctrl+</source>
        <translation>Ctrl+</translation>
    </message>
    <message>
        <location filename="../../scribus/shortcutwidget.cpp" line="45"/>
        <source>No shortcut for the style</source>
        <translation>스타일 단축키 없음</translation>
    </message>
    <message>
        <location filename="../../scribus/shortcutwidget.cpp" line="46"/>
        <source>Style has user defined shortcut</source>
        <translation>스타일이 사용자 정의 단축키가 있습니다</translation>
    </message>
    <message>
        <location filename="../../scribus/shortcutwidget.cpp" line="47"/>
        <source>Assign a shortcut for the style</source>
        <translation>스타일 단축키 지정</translation>
    </message>
  </context>
  <context>
    <name>SideBar</name>
    <message>
      <source>No Style</source>
      <translation>스타일 없음</translation>
    </message>
    <message>
      <source>Edit Styles...</source>
      <translation>스타일 편집...</translation>
    </message>
  </context>
 <context>
    <name>Spalette</name>
    <message>
        <source>No Style</source>
        <translation>스타일 없음</translation>
    </message>
</context>
<context>
    <name>StilFormate</name>
    <message>
        <location filename="../editformats.cpp" line="141"/>
        <source>Edit Styles</source>
        <translation>스타일 편집</translation>
    </message>
    <message>
        <location filename="../editformats.cpp" line="157"/>
        <source>&amp;Import</source>
        <translation>들여오기(&amp;I)</translation>
    </message>
    <message>
        <location filename="../editformats.cpp" line="160"/>
        <source>&amp;New</source>
        <translation>새 파일(&amp;N)</translation>
    </message>
    <message>
        <location filename="../editformats.cpp" line="163"/>
        <source>&amp;Edit</source>
        <translation>편집(&amp;E)</translation>
    </message>
    <message>
        <location filename="../editformats.cpp" line="168"/>
        <source>D&amp;uplicate</source>
        <translation>복제(&amp;U)</translation>
    </message>
    <message>
        <location filename="../editformats.cpp" line="172"/>
        <source>&amp;Delete</source>
        <translation>삭제(&amp;D)</translation>
    </message>
    <message>
        <location filename="../editformats.cpp" line="243"/>
        <source>Copy of %1</source>
        <translation>%1 복사</translation>
    </message>
    <message>
        <location filename="../editformats.cpp" line="259"/>
        <source>New Style</source>
        <translation>새 스타일</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>경고</translation>
    </message>
    <message>
        <source>Do you really want to delete this style?</source>
        <translation>이 스타일을 정말 삭제하시겠습니까?</translation>
    </message>
    <message>
        <source>No</source>
        <translation>아니오</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>예</translation>
    </message>
    <message>
        <location filename="../editformats.cpp" line="361"/>
        <source>Open</source>
        <translation>열기</translation>
    </message>
    <message>
        <location filename="../editformats.cpp" line="361"/>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>문서 (*.sla *sla.gz *.scd *scd.gz);;전체 파일 (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>문서 (*.sla *.scd);;전체 파일 (*)</translation>
    </message>
</context>
 <context>
    <name>StoryEditor</name>
	   <message>
        <location filename="../story.cpp" line="1636"/>
        <source>&amp;New</source>
        <translation>새로(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Reload Text from Frame</source>
      <translation>프레임에서 텍스트 다시 읽어오기(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Save to File...</source>
      <translation>파일로 저장(&amp;S)...</translation>
    </message>
    <message>
      <source>&amp;Load from File...</source>
      <translation>파일에서 읽어오기(&amp;L)...</translation>
    </message>
    <message>
      <source>Save &amp;Document</source>
      <translation>문서 저장(&amp;D)</translation>
    </message>
    <message>
      <source>&amp;Update Text Frame and Exit</source>
      <translation>텍스트 프레임 업데이트하고 종료(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Exit Without Updating Text Frame</source>
      <translation>텍스트 프레임 업데이트 없이 종료(&amp;E)</translation>
    </message>
    <message>
      <source>Select &amp;All</source>
      <translation>전체 선택(&amp;A)</translation>
    </message>
    <message>
      <source>Cu&amp;t</source>
      <translation>잘라내기(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>복사(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation>붙여넣기(&amp;P)</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>제거(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Search/Replace...</source>
      <translation>찾기/치환(&amp;S)...</translation>
    </message>
    <message>
      <source>&amp;Insert Glyph...</source>
      <translation>사용자 문자표 삽입(&amp;I)...</translation>
    </message>
    <message>
      <source>&amp;Edit Styles...</source>
      <translation>스타일 편집(&amp;E)...</translation>
    </message>
    <message>
      <source>&amp;Fonts Preview...</source>
      <translation>글꼴 미리보기(&amp;F)...</translation>
    </message>
    <message>
      <source>&amp;Update Text Frame</source>
      <translation>텍스트 프레임 업데이트(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Background...</source>
      <translation>배경(&amp;B)...</translation>
    </message>
    <message>
      <source>&amp;Display Font...</source>
      <translation>글꼴 보이기(&amp;D)...</translation>
    </message>
    <message>
      <source>&amp;Smart text selection</source>
      <translation>빠른 텍스트 선택(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;File</source>
      <translation>파일(&amp;F)</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation>편집(&amp;E)</translation>
    </message>
    <message>
      <source>&amp;Settings</source>
      <translation>설정(&amp;S)</translation>
    </message>
    <message>
      <source>Story Editor</source>
      <translation>스토리 편집기</translation>
    </message>
    <message>
      <source>File</source>
      <translation>파일</translation>
    </message>
    <message>
      <source>Clear All Text</source>
      <translation>전체 텍스트 제거</translation>
    </message>
	 <message>
        <source>Load Text from File</source>
        <translation>파일에서 텍스트 읽어오기</translation>
    </message>
    <message>
        <source>Save Text to File</source>
        <translation>텍스트를 파일로 저장</translation>
    </message>
    <message>
        <source>Update Text Frame and Exit</source>
        <translation>텍스트 프레임 업데이트하고 종료</translation>
    </message>
    <message>
        <source>Exit Without Updating Text Frame</source>
        <translation>텍스트 프레임 없데이트 없이 종료</translation>
    </message>
    <message>
        <source>Reload Text from Frame</source>
        <translation>프레임에서 텍스트 다시 읽어오기</translation>
    </message>
    <message>
        <source>Update Text Frame</source>
        <translation>텍스트 프레임 업데이트</translation>
    </message>
    <message>
        <source>Search/Replace</source>
        <translation>찾기/치환</translation>
    </message>
    <message>
      <source>Current Paragraph:</source>
      <translation>현재 문단:</translation>
    </message>
    <message>
      <source>Words: </source>
      <translation>단어수: </translation>
    </message>
    <message>
      <source>Chars: </source>
      <translation>문자수: </translation>
    </message>
    <message>
      <source>Totals:</source>
      <translation>합계:</translation>
    </message>
    <message>
      <source>Paragraphs: </source>
      <translation>문단수: </translation>
    </message>
    <message>
      <source>Story Editor - %1</source>
      <translation>스토리 편집기 - %1</translation>
    </message>
	    <message>
        <source>Warning</source>
        <translation>경고</translation>
    </message>
    <message>
      <source>Do you want to save your changes?</source>
      <translation>변경을 저장하겠습니까?</translation>
    </message>
    <message>
      <source>Do you really want to lose all your changes?</source>
      <translation>전체 변경내용을 정말로 잃어도 됩니까?</translation>
    </message>
    <message>
      <source>Do you really want to clear all your text?</source>
      <translation>전체 텍스트를 진짜로 제거하시겠습니까?</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>열기</translation>
    </message>
    <message>
      <source>Text Files (*.txt);;All Files(*)</source>
      <translation>텍스트 파일 (*.txt);;전체 파일(*)</translation>
    </message>
    <message>
      <source>Save as</source>
      <translation>다른 이름으로 저장</translation>
    </message>
    <message>
      <source>&amp;Insert</source>
      <translation>삽입(&amp;I)</translation>
    </message>
    <message>
      <source>Character</source>
      <translation>문자</translation>
    </message>
    <message>
      <source>Quote</source>
      <translation>인용부호</translation>
    </message>
    <message>
      <source>Spaces &amp;&amp; Breaks</source>
      <translation>공백 개행</translation>
    </message>
    <message>
      <source>Ligature</source>
      <translation>연결</translation>
    </message>
    <message>
      <source>Space</source>
      <translation>공백</translation>
    </message>
  </context>
  <context>
    <name>StrikeValues</name>
    <message>
      <source>Auto</source>
      <translation>자동</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Displacement</source>
      <translation>변위</translation>
    </message>
    <message>
      <source>Linewidth</source>
      <translation>선 너비</translation>
    </message>
  </context>
  <context>
    <name>StyleManager</name>
	    <message>
        <source>More than one item selected</source>
        <translation>1 객체 이상 선택</translation>
    </message>
    <message>
      <source>Name:</source>
      <translation>이름:</translation>
    </message>
    <message>
      <source>&amp;Reset</source>
      <translation>초기화(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Apply</source>
      <translation>적용(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>새 파일(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation>들여오기(&amp;I)</translation>
    </message>
    <message>
      <source>&amp;Clone</source>
      <translation>복제(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>삭제(&amp;D)</translation>
    </message>
	  <message>
        <location filename="../../scribus/stylemanager.cpp" line="107"/>
        <source>Reset all changes</source>
        <translation>전체 변경 초기화</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="108"/>
        <source>Apply all changes</source>
        <translation>전체 변경 적용</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="102"/>
        <source>Apply all changes and exit edit mode</source>
        <translation>전체 변경 적용하고 편집 모드를 종료</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="109"/>
        <source>Create a new style</source>
        <translation>새 스타일 생성</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="110"/>
        <source>Import styles from another document</source>
        <translation>다른 문서에서 스타일 들여오기</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="111"/>
        <source>Clone selected style</source>
        <translation>선택된 스타일 복제</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="112"/>
        <source>Delete selected styles</source>
        <translation>선택된 스타일 삭제</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="610"/>
        <source>New</source>
        <translation>새로</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="158"/>
        <source>Import</source>
        <translation>들여오기</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="161"/>
        <source>Clone</source>
        <translation>복제</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="162"/>
        <source>Send to Scrapbook</source>
        <translation>스크랩북으로 보내기</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="164"/>
        <source>Delete</source>
        <translation>삭제</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="702"/>
        <source>&amp;Edit</source>
        <translation>편집(&amp;E)</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="121"/>
        <source>&amp;Done</source>
        <translation>완료(&amp;D)</translation>
    </message>
    <message>
      <source>Shortcut</source>
      <translation>단축키</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>이름</translation>
    </message>
	    <message>
        <location filename="../../scribus/stylemanager.cpp" line="104"/>
        <source>Edit styles</source>
        <translation>스타일 편집</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="106"/>
        <source>Name of the selected style</source>
        <translation>선택된 스타일명</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="160"/>
        <source>Edit</source>
        <translation>편집</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="597"/>
        <source>New %1</source>
        <translation>새 %1</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="991"/>
        <source>This key sequence is already in use</source>
        <translation>이 키 조합은 이미 사용중입니다</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="1079"/>
        <source>More than one style selected</source>
        <translation>1개 이상 스타일 선택</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="287"/>
        <source>Open</source>
        <translation>열기</translation>
    </message>
    <message>
        <location filename="../../scribus/stylemanager.cpp" line="287"/>
        <source>documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>문서 (*.sla *sla.gz *.scd *scd.gz);;전체 파일 (*)</translation>
    </message>
    <message>
      <source>Alt+N</source>
      <translation>Alt+N</translation>
    </message>
    <message>
      <source>Clone copies the style to make similar styles easily.</source>
      <translation>복제는 쉽게 유사 스타일을 만들기 위한 스타일을 복사합니다.</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
    <message>
      <source>Alt+I</source>
      <translation>Alt+I</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>Please select a unique name for the style</source>
      <translation>스타일을 위한 유일한 이름을 선택하시오</translation>
    </message>
    <message>
      <source>&lt;&lt; &amp;Done</source>
      <translation>완료(&amp;D)</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>Alt+R</source>
      <translation>Alt+R</translation>
    </message>
    <message>
      <source>Style Manager</source>
      <translation>스타일 관리자</translation>
    </message>
  </context>
  <context>
    <name>StyleSelect</name>
	    <message>
        <source>Underline</source>
        <translation>밑줄</translation>
    </message>
    <message>
        <source>Underline Words Only</source>
        <translation>밑줄 단어만</translation>
    </message>
    <message>
      <source>All Caps</source>
      <translation>대문자</translation>
    </message>
    <message>
      <source>Small Caps</source>
      <translation>소문자</translation>
    </message>
    <message>
      <source>Subscript</source>
      <translation>아래첨자</translation>
    </message>
    <message>
      <source>Superscript</source>
      <translation>윗첨자</translation>
    </message>
	   <message>
        <source>Strike Out</source>
        <translation>취소선</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation>윤곽선</translation>
    </message>
    <message>
        <source>Shadow</source>
        <translation>음영</translation>
    </message>
    <message>
        <source>Outline</source>
        <comment>Text Style Selector</comment>
        <translation>윤곽선</translation>
    </message>
    <message>
      <source>Underline Text. Hold down the button momentarily to set line width and displacement options.</source>
      <translation>텍스트에 밑줄. 선 두께 및 변위 옵션을 설정하기 위하여 계속 마우스 버튼을 누르고 있어야 합니다.</translation>
    </message>
    <message>
      <source>Underline Words Only. Hold down the button momentarily to set line width and displacement options.</source>
      <translation>단어에만 밑줄. 선 두께 및 위치 옵션을 설정하기 위하여 계속 마우스 버튼을 누르고 있어야 합니다.</translation>
    </message>
    <message>
      <source>Strike Out. Hold down the button momentarily to set line width and displacement options.</source>
      <translation>취소선. 선 두께 및 위치 옵션을 설정하기 위하여 계속 마우스 버튼을 누르고 있어야 합니다.</translation>
    </message>
    <message>
      <source>Outline. Hold down the button momentarily to change the outline stroke width.</source>
      <comment>Text Style Selector</comment>
      <translation>윤곽선. 윤곽선 너비를 지정하기 위하여 계속 마우스 버튼을 누르고 있어야 합니다.</translation>
    </message>
    <message>
      <source>Shadowed Text. Hold down the button momentarily to enable the offset spacing.</source>
      <translation>음영. X,Y 위치를 지정하도록 계속 마우스 버튼을 누르고 있어야 합니다.</translation>
    </message>
  </context>
  <context>
    <name>SubdividePlugin</name>
    <message>
      <source>Subdivide Path</source>
      <translation>재분할 경로</translation>
    </message>
    <message>
      <source>Path Tools</source>
      <translation>경로 도구</translation>
    </message>
    <message>
      <source>Subdivide</source>
      <translation>재분할</translation>
    </message>
    <message>
      <source>Subdivide selected Path</source>
      <translation>선택된 경로 재분할</translation>
    </message>
  </context>
  <context>
    <name>SxwDialog</name>
    <message>
      <source>OpenOffice.org Writer Importer Options</source>
      <translation>OpenOffice.org Writer 해석기 설정</translation>
    </message>
    <message>
      <source>Overwrite Paragraph Styles</source>
      <translation>문단 스타일 겹쳐쓰기</translation>
    </message>
    <message>
      <source>Enabling this will overwrite existing styles in the current Scribus document</source>
      <translation>현재 Scribus문서에서 기존 스타일을 겹쳐쓸 수 있게 합니다.</translation>
    </message>
    <message>
      <source>Merge Paragraph Styles</source>
      <translation>문단 스타일 병합</translation>
    </message>
    <message>
      <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document's styles are named differently.</source>
      <translation>속성에 의하여 문단 스타일을 합칩니다. 원래 문서 스타일이 다르게 명명되었더라도 이것은 아주 조금 문단 스타일에 영향을 미치고 스타일 속성이 유지됩니다.</translation>
    </message>
    <message>
      <source>Use document name as a prefix for paragraph styles</source>
      <translation>문단 스타일에 접두어로 문서이름을 사용합니다.</translation>
    </message>
    <message>
      <source>Prepend the document name to the paragraph style name in Scribus.</source>
      <translation>Scribus에서 문서 이름을 문단 스타일 이름으로 설정</translation>
    </message>
    <message>
      <source>Do not ask again</source>
      <translation>다시 묻지 않음</translation>
    </message>
    <message>
      <source>Make these settings the default and do not prompt again when importing an OpenOffice.org 1.x document.</source>
      <translation>이들 설정을 기본값으로 만들고, OASIS OpenDocument를 읽을 때 나타나지 않게 합니다.</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>확인</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>취소</translation>
    </message>
  </context>
  <context>
    <name>TOCIndexPrefs</name>
	    <message>
        <location filename="../../scribus/tocindexprefs.cpp" line="114"/>
        <source>None</source>
        <translation>없음</translation>
    </message>
    <message>
        <location filename="../tocindexprefs.cpp" line="107"/>
        <source>At the beginning</source>
        <translation>시작</translation>
    </message>
    <message>
        <location filename="../tocindexprefs.cpp" line="109"/>
        <source>At the end</source>
        <translation>끝</translation>
    </message>
    <message>
        <location filename="../../scribus/tocindexprefs.cpp" line="120"/>
        <source>Not Shown</source>
        <translation>안보임</translation>
    </message>
    <message>
      <source>Table of Contents and Indexes</source>
      <translation>목차와 인덱스</translation>
    </message>
    <message>
      <source>Table Of Contents</source>
      <translation>목차</translation>
    </message>
    <message>
      <source>&amp;Add</source>
      <translation>더하기(&amp;A)</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>삭제(&amp;D)</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>The frame the table of contents will be placed into</source>
      <translation>목차를 위치시킬 프레임</translation>
    </message>
	    <message>
        <location filename="../tocindexprefs.ui" line="107"/>
        <source>Page Numbers Placed:</source>
        <translation>페이지 번호 위치:</translation>
    </message>
    <message>
      <source>Item Attribute Name:</source>
      <translation>객체 속성 이름:</translation>
    </message>
    <message>
      <source>The Item Attribute that will be set on frames used as a basis for creation of the entries</source>
      <translation>프레임에서 설정할 객체 속성을 엔트리 생성을 위한 기본으로 사용.</translation>
    </message>
    <message>
      <source>Place page numbers of the entries at the beginning or the end of the line, or not at all</source>
      <translation>줄의 처음 또는 끝에 엔트리 페이지 번호를 지정. 아니면 없음 선택.</translation>
    </message>
    <message>
      <source>List Non-Printing Entries</source>
      <translation>비출력 엔트리 리스트</translation>
    </message>
    <message>
      <source>Include frames that are set to not print as well</source>
      <translation>인쇄되지 않도록 설정되는 프레임 포함</translation>
    </message>
    <message>
      <source>The paragraph style used for the entry lines</source>
      <translation>엔트리선에 이용되는 문단 스타일</translation>
    </message>
    <message>
      <source>Paragraph Style:</source>
      <translation>문단 스타일:</translation>
    </message>
    <message>
      <source>Destination Frame:</source>
      <translation>출력방향 프레임:</translation>
    </message>
	 <message>
        <source>Inde&amp;x</source>
        <translation>인덱스(&amp;X)</translation>
    </message>
    <message>
        <location filename="../../scribus/tocindexprefs.cpp" line="256"/>
        <source>Table of Contents %1</source>
        <translation>목차 %1</translation>
    </message>
    <message>
      <source>Page Number Placement:</source>
      <translation>페이지 번호 위치:</translation>
    </message>
	  <message>
        <location filename="../../scribus/tocindexprefs.cpp" line="116"/>
        <source>Beginning</source>
        <translation>시작</translation>
    </message>
    <message>
        <location filename="../../scribus/tocindexprefs.cpp" line="118"/>
        <source>End</source>
        <translation>끝</translation>
    </message>
  </context>
  <context>
    <name>TOCIndexPrefsBase</name>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation>목차와 인덱스</translation>
    </message>
    <message>
        <source>Table Of Contents</source>
        <translation>목차</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>더하기(&amp;A)</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>삭제(&amp;D)</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>The frame the table of contents will be placed into</source>
        <translation>목차를 위치시킬 프레임</translation>
    </message>
    <message>
        <source>Page Numbers Placed:</source>
        <translation>페이지 번호 위치:</translation>
    </message>
    <message>
        <source>Item Attribute Name:</source>
        <translation>객체 속성 이름:</translation>
    </message>
    <message>
        <source>The Item Attribute that will be set on frames used as a basis for creation of the entries</source>
       <translation>프레임에서 설정할 객체 속성을 엔트리 생성을 위한 기본으로 사용.</translation>
    </message>
    <message>
        <source>Place page numbers of the entries at the beginning or the end of the line, or not at all</source>
        <translation>줄의 처음 또는 끝에 엔트리 페이지 번호를 지정. 아니면 없음 선택.</translation>
    </message>
    <message>
        <source>List Non-Printing Entries</source>
        <translation>비-출력 엔트리 목록</translation>
    </message>
    <message>
        <source>Include frames that are set to not print as well</source>
        <translation>인쇄되지 않도록 설정되는 프레임 포함</translation>
    </message>
    <message>
        <source>The paragraph style used for the entry lines</source>
        <translation>엔트리선에 이용되는 문단 스타일</translation>
    </message>
    <message>
        <source>Paragraph Style:</source>
        <translation>문단 스타일:</translation>
    </message>
    <message>
        <source>Destination Frame:</source>
        <translation>출력방향 프레임:</translation>
    </message>
    <message>
        <source>Inde&amp;x</source>
        <translation>인덱스(&amp;X)</translation>
    </message>
</context>
  <context>
    <name>TabCheckDoc</name>
    <message>
      <source>Ignore all errors</source>
      <translation>전체 오류 무시</translation>
    </message>
    <message>
      <source>Automatic check before printing or exporting</source>
      <translation>인쇄나 내보내기 전 자동 체크</translation>
    </message>
    <message>
      <source>Check for missing glyphs</source>
      <translation>빠진 사용자 문자표 체크</translation>
    </message>
    <message>
      <source>Check for overflow in text frames</source>
      <translation>텍스트 프레임 오버플로우 체크</translation>
    </message>
    <message>
      <source>Check for missing images</source>
      <translation>빠진 이미지 체크</translation>
    </message>
    <message>
      <source>Check image resolution</source>
      <translation>이미지 해상도 체크</translation>
    </message>
    <message>
      <source>Lowest allowed resolution</source>
      <translation>최소 허용 해상도</translation>
    </message>
    <message>
      <source> dpi</source>
      <translation> dpi</translation>
    </message>
    <message>
      <source>Check for placed PDF Files</source>
      <translation>PDF 파일 배치 체크</translation>
    </message>
    <message>
      <source>Check for PDF Annotations and Fields</source>
      <translation>PDF 주석 및 필드 체크</translation>
    </message>
    <message>
      <source>Add Profile</source>
      <translation>프로파일 더하기</translation>
    </message>
    <message>
      <source>Remove Profile</source>
      <translation>프로파일 제거</translation>
    </message>
    <message>
      <source>Highest allowed resolution</source>
      <translation>최대 허용 해상도</translation>
    </message>
    <message>
      <source>Check for GIF images</source>
      <translation>GIF 이미지 체크</translation>
    </message>
    <message>
      <source>Ignore non-printable Layers</source>
      <translation>비 출력 레이어 무시</translation>
    </message>
    <message>
      <source>Check for items not on a page</source>
      <translation>페이지상 없는 객체 체크</translation>
    </message>
    <message>
      <source>Check for used transparencies</source>
      <translation>사용된 투명도 체크</translation>
    </message>
  </context>
  <context>
    <name>TabDisplay</name>
	   <message>
        <location filename="../../scribus/tabdisplay.cpp" line="33"/>
        <source>Color for paper</source>
        <translation>종이 색상</translation>
    </message>
    <message>
        <location filename="../../scribus/tabdisplay.cpp" line="34"/>
        <source>Mask the area outside the margins in the margin color</source>
        <translation>여백 밖 구역을 여백 색상으로 마스킹</translation>
    </message>
    <message>
        <location filename="../../scribus/tabdisplay.cpp" line="35"/>
        <source>Enable or disable  the display of linked frames.</source>
        <translation>링크된 프레임의 보이기 가능 또는 불가능.</translation>
    </message>
    <message>
        <location filename="../../scribus/tabdisplay.cpp" line="36"/>
        <source>Display non-printing characters such as paragraph markers in text frames</source>
        <translation>텍스트 프레임에서 문단 표시와 같은 비-출력 문자를 보이기.</translation>
    </message>
    <message>
        <location filename="../../scribus/tabdisplay.cpp" line="37"/>
        <source>Turns the display of frames on or off</source>
        <translation>프레임 보이기 토글</translation>
    </message>
    <message>
        <location filename="../../scribus/tabdisplay.cpp" line="38"/>
        <source>Turns the display of layer indicators on or off</source>
        <translation>레이어 지시기 보이기 토글</translation>
    </message>
    <message>
        <location filename="../tabdisplay.cpp" line="36"/>
        <source>Turns the display of pictures on or off</source>
        <translation>이미지 보이기 토글</translation>
    </message>
    <message>
        <location filename="../../scribus/tabdisplay.cpp" line="40"/>
        <source>Defines amount of space left of the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation>객체의 생성과 수정 또는 객체를 활성 페이지로 끌어오기 위한 작업공간인 문서 캔버스 왼쪽 여백을 정함</translation>
    </message>
    <message>
        <location filename="../../scribus/tabdisplay.cpp" line="41"/>
        <source>Defines amount of space right of the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation>객체의 생성과 수정 또는 객체를 활성 페이지로 끌어오기 위한 작업공간인 문서 캔버스 오른쪽 여백을 정함</translation>
    </message>
    <message>
        <location filename="../../scribus/tabdisplay.cpp" line="42"/>
        <source>Defines amount of space above the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation>객체의 생성과 수정 또는 객체를 활성 페이지로 끌어오기 위한 작업공간인 문서 캔버스 위쪽 여백을 정함</translation>
    </message>
    <message>
        <location filename="../../scribus/tabdisplay.cpp" line="43"/>
        <source>Defines amount of space below the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation>객체의 생성과 수정 또는 객체를 활성 페이지로 끌어오기 위한 작업공간인 문서 캔버스 아래쪽 여백을 정함</translation>
    </message>
    <message>
        <location filename="../../scribus/tabdisplay.cpp" line="44"/>
        <source>Set the default zoom level</source>
        <translation>기본 확대 비율을 설정</translation>
    </message>
    <message>
        <location filename="../../scribus/tabdisplay.cpp" line="45"/>
        <source>Place a ruler against your screen and drag the slider to set the zoom level so Scribus will display your pages and objects on them at the correct size</source>
        <translation>화면상에서 자를 위치시키고 돋보기 확대 비율을 설정하기 위하여 슬라이더 끌기를 하면 Scribus는 페이지와 객체를 정확한 크기로 보여집니다.</translation>
    </message>
    <message>
      <source>TabDisplayBase</source>
      <translation>탭보기기준</translation>
    </message>
    <message>
      <source>General</source>
      <translation>일반</translation>
    </message>
    <message>
      <source>Adjust Display Size</source>
      <translation>보임 크기 조정</translation>
    </message>
    <message>
      <source>Scale%</source>
      <translation>비율 %</translation>
    </message>
    <message>
      <source>To adjust the display drag the ruler below with the slider.</source>
      <translation>보기를 조정하기 위해 슬라이드바로 조정자를 끌기</translation>
    </message>
    <message>
      <source>Gaps Between Pages</source>
      <translation>페이지 사이 간격</translation>
    </message>
    <message>
      <source>Vertical:</source>
      <translation>수직:</translation>
    </message>
    <message>
      <source>Horizontal:</source>
      <translation>수평:</translation>
    </message>
    <message>
      <source>Scratch Space</source>
      <translation>스크래치 공백</translation>
    </message>
    <message>
      <source>&amp;Bottom:</source>
      <translation>아래(&amp;B):</translation>
    </message>
    <message>
      <source>&amp;Top:</source>
      <translation>위(&amp;T):</translation>
    </message>
    <message>
      <source>&amp;Right:</source>
      <translation>오른쪽(&amp;R):</translation>
    </message>
    <message>
      <source>&amp;Left:</source>
      <translation>왼쪽(&amp;L):</translation>
    </message>
    <message>
      <source>Page Display</source>
      <translation>페이지 보이기</translation>
    </message>
    <message>
      <source>Show Bleed Area</source>
      <translation>물림재단 구역 보기</translation>
    </message>
    <message>
      <source>Display &amp;Unprintable Area in Margin Color</source>
      <translation>비출력 부분을 여백색상으로 보이기(&amp;U)</translation>
    </message>
    <message>
      <source>Alt+U</source>
      <translation>Alt+U</translation>
    </message>
    <message>
      <source>Show Layer Indicators</source>
      <translation>레이어 지시자 보이기</translation>
    </message>
    <message>
      <source>Show Frames</source>
      <translation>프레임 보이기</translation>
    </message>
    <message>
      <source>Show Text Chains</source>
      <translation>텍스트 체인 보이기</translation>
    </message>
    <message>
      <source>Rulers Relative to Page</source>
      <translation>페이지 관련 눈금자</translation>
    </message>
    <message>
      <source>Show Text Control Characters</source>
      <translation>텍스트 제어문자 보이기</translation>
    </message>
    <message>
      <source>Colors</source>
      <translation>색상</translation>
    </message>
    <message>
      <source>Pages:</source>
      <translation>페이지:</translation>
    </message>
    <message>
      <source>Selected Page Border:</source>
      <translation>선택된 페이지 경계:</translation>
    </message>
    <message>
      <source>Fill Color:</source>
      <translation>채움 색상:</translation>
    </message>
    <message>
      <source>Frames</source>
      <translation>프레임</translation>
    </message>
    <message>
      <source>Grouped:</source>
      <translation>그룹화:</translation>
    </message>
    <message>
      <source>Annotation:</source>
      <translation>주석:</translation>
    </message>
    <message>
      <source>Selected:</source>
      <translation>선택됨:</translation>
    </message>
    <message>
      <source>Linked:</source>
      <translation>링크됨:</translation>
    </message>
    <message>
      <source>Locked:</source>
      <translation>잠금:</translation>
    </message>
    <message>
      <source>Normal:</source>
      <translation>일반:</translation>
    </message>
    <message>
      <source>Text:</source>
      <translation>텍스트:</translation>
    </message>
    <message>
      <source>Control Characters:</source>
      <translation>제어문자:</translation>
    </message>
	    <message>
        <location filename="../../scribus/tabdisplay.cpp" line="39"/>
        <source>Turns the display of images on or off</source>
        <translation>이미지 보기 토글</translation>
    </message>
    <message>
      <source>Show Images</source>
      <translation>이미지 보이기</translation>
    </message>
	    <message>
        <location filename="../../scribus/tabdisplay.cpp" line="199"/>
        <source> dpi</source>
        <translation> dpi</translation>
    </message>
    <message>
      <source>Resets the scale to the default dpi of your display</source>
      <translation>화면의 기본 DPI 비율을 초기화</translation>
    </message>
  </context>
  <context>
    <name>TabDocument</name>
    <message>
      <source>Page Size</source>
      <translation>페이지 크기</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>크기(&amp;S):</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation>세로 방향</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation>가로 방향</translation>
    </message>
    <message>
      <source>Orie&amp;ntation:</source>
      <translation>방향(&amp;N):</translation>
    </message>
    <message>
      <source>Units:</source>
      <translation>단위:</translation>
    </message>
    <message>
      <source>&amp;Width:</source>
      <translation>너비(&amp;W):</translation>
    </message>
    <message>
      <source>&amp;Height:</source>
      <translation>높이(&amp;H):</translation>
    </message>
    <message>
      <source>Margin Guides</source>
      <translation>여백 안내선</translation>
    </message>
    <message>
      <source>Autosave</source>
      <translation>자동저장</translation>
    </message>
    <message>
      <source>min</source>
      <translation>분</translation>
    </message>
    <message>
      <source>&amp;Interval:</source>
      <translation>저장 간격(&amp;I):</translation>
    </message>
    <message>
      <source>Undo/Redo</source>
      <translation>이전작업/재실행</translation>
    </message>
    <message>
      <source>Action history length</source>
      <translation>저장할 작업내역 길이</translation>
    </message>
    <message>
      <source>Width of document pages, editable if you have chosen a custom page size</source>
      <translation>페이지 너비, 사용자 페이지 크기를 선택하면 편집가능</translation>
    </message>
    <message>
      <source>Height of document pages, editable if you have chosen a custom page size</source>
      <translation>페이지 높이, 사용자 페이지 크기를 선택하면 편집가능</translation>
    </message>
    <message>
      <source>Default page size, either a standard size or a custom size</source>
      <translation>기본 페이지 크기, 표준크기 또는 사용자 크기 선택</translation>
    </message>
    <message>
      <source>Default orientation of document pages</source>
      <translation>페이지 기본 방향</translation>
    </message>
    <message>
      <source>Default unit of measurement for document editing</source>
      <translation>문서편집 기본단위</translation>
    </message>
    <message>
      <source>When enabled, Scribus saves a backup copy of your file with the .bak extension each time the time period elapses</source>
      <translation>Scribus가 반복적으로 일정한 시간 경과 후 .bak파일 저장</translation>
    </message>
    <message>
      <source>Time period between saving automatically</source>
      <translation>자동 저장 시간 간격</translation>
    </message>
    <message>
      <source>Set the length of the action history in steps. If set to 0 infinite amount of actions will be stored.</source>
      <translation>저장될 작업내역 갯수 설정. 0은 무제한 저장.</translation>
    </message>
    <message>
      <source>Apply the page size changes to all existing pages in the document</source>
      <translation>문서에서 전체 페이지에 페이지 크기 변경을 적용한다.</translation>
    </message>
    <message>
      <source>Apply settings to:</source>
      <translation>설정 적용:</translation>
    </message>
    <message>
      <source>All Document Pages</source>
      <translation>전체 문서 페이지</translation>
    </message>
    <message>
      <source>All Master Pages</source>
      <translation>전체 마스터 페이지</translation>
    </message>
    <message>
      <source>Apply the page size changes to all existing master pages in the document</source>
      <translation>문서에서 전체 마스터 페이지에 페이지 크기 변경을 적용한다.</translation>
    </message>
  </context>
  <context>
    <name>TabExternalToolsWidget</name>
    <message>
      <source>External Tools</source>
      <translation>외부 도구</translation>
    </message>
    <message>
      <source>Web Browser to launch with links from the Help system</source>
      <translation>도움말 시스템에서 링크를 실행하기 위한 웹브라우저</translation>
    </message>
    <message>
      <source>Web Browser</source>
      <translation>웹 브라우저</translation>
    </message>
    <message>
      <source>&amp;Change...</source>
      <translation>바꾸기(&amp;C)...</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
    <message>
      <source>&lt;qt>File system location for your web browser. This is used for external links from the Help system.&lt;/qt></source>
      <translation>&lt;qt>웹 브라우저 파일 시스템 위치. 도움말시스템으로부터 외부 링크를 위하여 사용됩니다.&lt;/qt></translation>
    </message>
    <message>
      <source>Name of &amp;Executable:</source>
      <translation>실행 이름(&amp;E):</translation>
    </message>
    <message>
      <source>Image Processing Tool</source>
      <translation>이미지 처리 도구</translation>
    </message>
    <message>
      <source>&lt;qt>File system location for graphics editor. If you use gimp and your distribution includes it, we recommend 'gimp-remote', as it allows you to edit the image in an already running instance of gimp.&lt;/qt></source>
      <translation>&lt;qt> 그래픽 편집을 위한 파일 시스템 위치. 김프를 이용한다면 'gimp-remote'를 사용. 이를 통하여 김프 실행하여 이미지 편집이 가능합니다.&lt;/qt></translation>
    </message>
    <message>
      <source>PostScript Interpreter</source>
      <translation>포스트스크립트 해석기</translation>
    </message>
    <message>
      <source>Antialias text for EPS and PDF onscreen rendering</source>
      <translation>EPS와 PDF 스크린 렌더링에서 부드러게 처리한 텍스트</translation>
    </message>
    <message>
      <source>Antialias &amp;Text</source>
      <translation>부드럽게 처리한 텍스트(&amp;T)</translation>
    </message>
    <message>
      <source>Alt+T</source>
      <translation>Alt+T</translation>
    </message>
    <message>
      <source>Antialias graphics for EPS and PDF onscreen rendering</source>
      <translation>EPS와 PDF 스크린 렌더링에서 부드럽게 처리한 그림</translation>
    </message>
    <message>
      <source>Antialias &amp;Graphics</source>
      <translation>부드럽게 처리한 이미지(&amp;G)</translation>
    </message>
    <message>
      <source>Alt+G</source>
      <translation>Alt+G</translation>
    </message>
    <message>
      <source>Resolution:</source>
      <translation>해상도:</translation>
    </message>
    <message>
      <source> dpi</source>
      <translation> dpi</translation>
    </message>
    <message>
      <source>&amp;Name of Executable:</source>
      <translation>실행 이름(&amp;N):</translation>
    </message>
    <message>
      <source></source>
      <translation>&lt;qt>고스트스크립트 해석을 위한 경로를 더합니다. 윈도우에서, gswin32.exe이 아니라 gswin32c.exe라 불리는 프로그램을 사용하는 것을 알아야 합니다. 그렇지 않으면 Scribus를 실행시킬 때 속도저하를 야기시킵니다.&lt;/qt></translation>
    </message>
    <message>
      <source>Rescan for the external tools if they do not exist in the already specified location</source>
      <translation>이미 지정된 위치에 없다면 외부 도구를 다시 찾습니다.</translation>
    </message>
    <message>
      <source>&amp;Rescan</source>
      <translation>재검사(&amp;R)</translation>
    </message>
    <message>
      <source>Alt+R</source>
      <translation>Alt+R</translation>
    </message>
    <message>
      <source>Start with empty frame</source>
      <translation>빈 프레임에서 시작</translation>
    </message>
    <message>
      <source>Always use the configured DPI setting for calculating the size, even if the image file reports something different.</source>
      <translation>이미지 파일이 약간 다르더라도, 크기를 계산하기 위하여 지정된 DPI 설정을 사용.</translation>
    </message>
    <message>
      <source>Force DPI</source>
      <translation>강제 DPI</translation>
    </message>
    <message>
      <source>&lt;qt>Path to the editor executable.&lt;/qt></source>
      <translation>&lt;qt>편집기 실행 경로&lt;/qt></translation>
    </message>
    <message>
      <source>Use Embedded Editor</source>
      <translation>내장 편집기 사용</translation>
    </message>
    <message>
      <source>Configurations:</source>
      <translation>설정:</translation>
    </message>
    <message>
      <source>Up</source>
      <translation>위</translation>
    </message>
    <message>
      <source>Down</source>
      <translation>아래</translation>
    </message>
    <message>
      <source>Add</source>
      <translation>더하기</translation>
    </message>
    <message>
      <source>Delete</source>
      <translation>삭제</translation>
    </message>
    <message>
      <source>Render Frames</source>
      <translation>렌더 프레임</translation>
    </message>
    <message>
      <source>External Editor:</source>
      <translation>외부 편집기:</translation>
    </message>
  </context>
  <context>
    <name>TabGeneral</name>
    <message>
      <source>TabGeneralBase</source>
      <translation>TabGeneralBase</translation>
    </message>
    <message>
      <source>User Interface</source>
      <translation>사용자 인터페이스</translation>
    </message>
    <message>
      <source>&amp;Recent Documents:</source>
      <translation>최근 문서(&amp;R):</translation>
    </message>
    <message>
      <source>&amp;Wheel Jump:</source>
      <translation>마우스 이동양(&amp;W):</translation>
    </message>
    <message>
      <source>Show Splashscreen on Startup</source>
      <translation>초기화 설정과정 보이기</translation>
    </message>
    <message>
      <source>Show Startup Dialog</source>
      <translation>시작 대화창 보이기</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> 포인트</translation>
    </message>
    <message>
      <source>&amp;Font Size (Menus):</source>
      <translation>글꼴 크기(메뉴)(&amp;F):</translation>
    </message>
    <message>
      <source>Font Size (&amp;Palettes):</source>
      <translation>글꼴 크기(팔레트)(&amp;P):</translation>
    </message>
    <message>
      <source>Time before a Move or Resize starts:</source>
      <translation>이동 또는 크기 조정을 시작하기 전의 시간:</translation>
    </message>
    <message>
      <source> ms</source>
      <translation> 밀리초</translation>
    </message>
    <message>
      <source>&amp;Theme:</source>
      <translation>테마(&amp;T):</translation>
    </message>
    <message>
      <source>&amp;Language:</source>
      <translation>언어(&amp;L):</translation>
    </message>
    <message>
      <source>Paths</source>
      <translation>경로</translation>
    </message>
    <message>
      <source>&amp;Change...</source>
      <translation>변경(&amp;C)...</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
    <message>
      <source>C&amp;hange...</source>
      <translation>변경(&amp;H)...</translation>
    </message>
    <message>
      <source>Alt+H</source>
      <translation>Alt+H</translation>
    </message>
    <message>
      <source>&amp;Scripts:</source>
      <translation>스크립트(&amp;S):</translation>
    </message>
    <message>
      <source>Cha&amp;nge...</source>
      <translation>바꾸기(&amp;N)...</translation>
    </message>
    <message>
      <source>Alt+N</source>
      <translation>Alt+N</translation>
    </message>
    <message>
      <source>&amp;ICC Profiles:</source>
      <translation>ICC 프로파일(&amp;I):</translation>
    </message>
    <message>
      <source>&amp;Documents:</source>
      <translation>문서(&amp;D):</translation>
    </message>
    <message>
      <source>Document &amp;Templates:</source>
      <translation>문서 서식(&amp;T):</translation>
    </message>
    <message>
      <source>Ch&amp;ange...</source>
      <translation>바꾸기(&amp;A)...</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>Use Small Widgets in Palettes</source>
      <translation>팔레트에서 작은 위젯 사용</translation>
    </message>
  </context>
  <context>
    <name>TabGuides</name>
    <message>
      <source>Common Settings</source>
      <translation>공통 설정</translation>
    </message>
    <message>
      <source>Placing in Documents</source>
      <translation>문서 배치</translation>
    </message>
    <message>
      <source>In the Background</source>
      <translation>배경에서</translation>
    </message>
    <message>
      <source>In the Foreground</source>
      <translation>전경에서</translation>
    </message>
    <message>
      <source>Snapping</source>
      <translation>붙기</translation>
    </message>
    <message>
      <source>Snap Distance:</source>
      <translation>붙기 거리:</translation>
    </message>
    <message>
      <source>Grab Radius:</source>
      <translation>붙기 반경:</translation>
    </message>
    <message>
      <source> px</source>
      <translation> 화소</translation>
    </message>
    <message>
      <source>Show Guides</source>
      <translation>안내선 보이기</translation>
    </message>
    <message>
      <source>Color:</source>
      <translation>색상:</translation>
    </message>
    <message>
      <source>Show Margins</source>
      <translation>여백 보이기</translation>
    </message>
    <message>
      <source>Show Page Grid</source>
      <translation>페이지 격자 보이기</translation>
    </message>
    <message>
      <source>Major Grid</source>
      <translation>주 격자</translation>
    </message>
    <message>
      <source>Spacing:</source>
      <translation>간격:</translation>
    </message>
    <message>
      <source>Minor Grid</source>
      <translation>부 격자</translation>
    </message>
    <message>
      <source>Show Baseline Grid</source>
      <translation>기준선 격자 보이기</translation>
    </message>
    <message>
      <source>Baseline Settings</source>
      <translation>기준선 설정</translation>
    </message>
    <message>
      <source>Baseline &amp;Grid:</source>
      <translation>기준선 격자(&amp;G):</translation>
    </message>
    <message>
      <source>Baseline &amp;Offset:</source>
      <translation>기준선 옵셋(&amp;O):</translation>
    </message>
    <message>
      <source>Guides are not visible through objects on the page</source>
      <translation>안내선을 페이지상의 객체를 통하여 볼 수 없음</translation>
    </message>
    <message>
      <source>Guides are visible above all objects on the page</source>
      <translation>안내선이 페이지상 전체 객체위에서 보임</translation>
    </message>
    <message>
      <source>Distance between the minor grid lines</source>
      <translation>부 격자선 사이 거리</translation>
    </message>
    <message>
      <source>Distance between the major grid lines</source>
      <translation>주 격자선 사이 거리</translation>
    </message>
    <message>
      <source>Color of the minor grid lines</source>
      <translation>부 격자선의 색상</translation>
    </message>
    <message>
      <source>Color of the major grid lines</source>
      <translation>주 격자선의 색상</translation>
    </message>
    <message>
      <source>Color of the guide lines you insert</source>
      <translation>삽입된 안내선의 색상</translation>
    </message>
    <message>
      <source>Color for the margin lines</source>
      <translation>여백 선 색상</translation>
    </message>
    <message>
      <source>Color for the baseline grid</source>
      <translation>기준선 격자의 색상</translation>
    </message>
    <message>
      <source>Turns the basegrid on or off</source>
      <translation>기준격자 ON/OFF 토글</translation>
    </message>
    <message>
      <source>Distance between the lines of the baseline grid</source>
      <translation>기준 격자 선 사이 거리</translation>
    </message>
    <message>
      <source>Distance from the top of the page for the first baseline</source>
      <translation>페이지 위에서 첫 기준선까지 거리</translation>
    </message>
    <message>
      <source>Turns the gridlines on or off</source>
      <translation>격자 ON/OFF 토글</translation>
    </message>
    <message>
      <source>Turns the guides on or off</source>
      <translation>안내선 ON/OFF 토글</translation>
    </message>
    <message>
      <source>Turns the margins on or off</source>
      <translation>여백 ON/OFF 토글</translation>
    </message>
    <message>
      <source>px</source>
      <translation>화소</translation>
    </message>
    <message>
      <source>Distance within which an object will snap to your placed guides. After setting this you will need to restart Scribus to set this setting.</source>
      <translation>객체가 위치한 안내선에 붙잡을 수 있는 거리. 이 설정이 효력을 생기게 하기 위하여는 재실행합니다.</translation>
    </message>
    <message>
      <source>Radius of the area where Scribus will allow you to grab an objects handles.After setting this you will need to restart Scribus to set this setting.</source>
      <translation>Scribus가 객체 핸들을 붙잡을 수 있는 범위 반경. 이 설정이 효력을 생기게 하기 위하여는 재실행합니다.</translation>
    </message>
  </context>
  <context>
    <name>TabKeyboardShortcutsWidget</name>
    <message>
      <source>Keyboard Shortcuts</source>
      <translation>키보드 단축키</translation>
    </message>
    <message>
      <source>Action</source>
      <translation>작업</translation>
    </message>
    <message>
      <source>Shortcut</source>
      <translation>단축키</translation>
    </message>
    <message>
      <source>Search:</source>
      <translation>찾기:</translation>
    </message>
    <message>
      <source>Shortcut for Selected Action</source>
      <translation>선택된 작업을 위한 단축키</translation>
    </message>
    <message>
      <source>CTRL+ALT+SHIFT+W</source>
      <translation>CTRL+ALT+SHIFT+W</translation>
    </message>
    <message>
      <source>Set &amp;Key</source>
      <translation>키 설정(&amp;K)</translation>
    </message>
    <message>
      <source>Alt+K</source>
      <translation>Alt+K</translation>
    </message>
    <message>
      <source>&amp;User Defined Key</source>
      <translation>사용자 지정 키(&amp;U)</translation>
    </message>
    <message>
      <source>Alt+U</source>
      <translation>Alt+U</translation>
    </message>
    <message>
      <source>&amp;No Key</source>
      <translation>키 없음(&amp;N)</translation>
    </message>
    <message>
      <source>Alt+N</source>
      <translation>Alt+N</translation>
    </message>
    <message>
      <source>Loadable Shortcut Sets</source>
      <translation>읽어올 수 있는 단축키 모음</translation>
    </message>
    <message>
      <source>Reload the default Scribus shortcuts</source>
      <translation>기본 Scribus 단축키를 다시 읽어오기</translation>
    </message>
    <message>
      <source>&amp;Reset</source>
      <translation>초기화(&amp;R)</translation>
    </message>
    <message>
      <source>Alt+R</source>
      <translation>Alt+R</translation>
    </message>
    <message>
      <source>Export the current shortcuts into an importable file</source>
      <translation>현재 단축키를 들여오기 파일로 내보내기</translation>
    </message>
    <message>
      <source>&amp;Export...</source>
      <translation>내보내기(&amp;E)...</translation>
    </message>
    <message>
      <source>Alt+E</source>
      <translation>Alt+E</translation>
    </message>
    <message>
      <source>Import a shortcut set into the current configuration</source>
      <translation>단축키 모음을 현재 설정으로 들여오기</translation>
    </message>
    <message>
      <source>&amp;Import...</source>
      <translation>들여오기(&amp;I)...</translation>
    </message>
    <message>
      <source>Alt+I</source>
      <translation>Alt+I</translation>
    </message>
    <message>
      <source>Load the selected shortcut set</source>
      <translation>선택된 단축키 모음 읽어오기</translation>
    </message>
    <message>
      <source>&amp;Load</source>
      <translation>읽어오기(&amp;L)</translation>
    </message>
    <message>
      <source>Alt+L</source>
      <translation>Alt+L</translation>
    </message>
    <message>
      <source>Keyboard shortcut sets available to load</source>
      <translation>읽어올 수 있는 키보드 단축키 모음</translation>
    </message>
  </context>
  <context>
    <name>TabManager</name>
    <message>
      <source>Manage Tabulators</source>
      <translation>탭키 설정</translation>
    </message>
  </context>
  <context>
    <name>TabMiscellaneous</name>
    <message>
      <source>Lorem Ipsum</source>
      <translation>Lorem Ipsum</translation>
    </message>
    <message>
      <source>Count of the Paragraphs:</source>
      <translation>문단 갯수:</translation>
    </message>
    <message>
      <source>Always use standard Lorem Ipsum</source>
      <translation>항상 표준 Lorem Ipsum 사용</translation>
    </message>
    <message>
      <source>Preview of current Paragraph Style visible when editing Styles</source>
      <translation>편집시 현재 보이는 문단 스타일 미리보기</translation>
    </message>
    <message>
      <source>Always ask before fonts are replaced when loading a document</source>
      <translation>문서를 읽을 때 글꼴을 대체하기 전에 항상 묻습니다.</translation>
    </message>
    <message>
      <source>Default number of paragraphs for sample text insertion</source>
      <translation>샘플 텍스트 삽입시 기본 문단 갯수</translation>
    </message>
    <message>
      <source>Always use the typical Latin-based Lorem Ipsum text for sample text</source>
      <translation>항상 샘플 텍스트를 위하여 전형적인 라틴기반 Lorem Ipsum  사용</translation>
    </message>
    <message>
      <source>Show a preview by default when editing styles</source>
      <translation>스타일 편집시 기본으로 미리보기 보이기</translation>
    </message>
    <message>
      <source>Allow Scribus to automatically replace fonts when they are missing when opening a document</source>
      <translation>문서를 열 때 Scribus가 불분명한 폰트를 자동 치환하는 것을 허용</translation>
    </message>
  </context>
  <context>
    <name>TabPDFOptions</name>
    <message>
      <source>Export Range</source>
      <translation>범위 내보내기</translation>
    </message>
    <message>
      <source>&amp;All Pages</source>
      <translation>전체 페이지(&amp;A)</translation>
    </message>
    <message>
      <source>C&amp;hoose Pages</source>
      <translation>페이지 선택(&amp;H)</translation>
    </message>
    <message>
      <source>&amp;Rotation:</source>
      <translation>회전(&amp;R):</translation>
    </message>
    <message>
      <source>File Options</source>
      <translation>파일 설정</translation>
    </message>
    <message>
      <source>Compatibilit&amp;y:</source>
      <translation>호환성(&amp;Y):</translation>
    </message>
    <message>
      <source>&amp;Binding:</source>
      <translation>결합(&amp;B):</translation>
    </message>
    <message>
      <source>Left Margin</source>
      <translation>왼쪽 여백</translation>
    </message>
    <message>
      <source>Right Margin</source>
      <translation>오른쪽 여백</translation>
    </message>
    <message>
      <source>Generate &amp;Thumbnails</source>
      <translation>썸네일 생성(&amp;T)</translation>
    </message>
    <message>
      <source>Save &amp;Linked Text Frames as PDF Articles</source>
      <translation>링크된 텍스트 프레임을 PDF 객체로 저장 (&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Include Bookmarks</source>
      <translation>북마크 포함(&amp;I)</translation>
    </message>
    <message>
      <source>Include La&amp;yers</source>
      <translation>레이어 포함(&amp;Y)</translation>
    </message>
    <message>
      <source> dpi</source>
      <translation> dpi</translation>
    </message>
    <message>
      <source>&amp;Resolution for EPS Graphics:</source>
      <translation>EPS 이미지 해상도(&amp;R):</translation>
    </message>
    <message>
      <source>Com&amp;press Text and Vector Graphics</source>
      <translation>텍스트와 벡터 이미지 압축(&amp;P)</translation>
    </message>
    <message>
      <source>Automatic</source>
      <translation>자동</translation>
    </message>
    <message>
      <source>None</source>
      <translation>없음</translation>
    </message>
    <message>
      <source>Compression Metho&amp;d:</source>
      <translation>압축 방법(&amp;D):</translation>
    </message>
    <message>
      <source>Maximum</source>
      <translation>최대</translation>
    </message>
    <message>
      <source>High</source>
      <translation>고</translation>
    </message>
    <message>
      <source>Medium</source>
      <translation>중</translation>
    </message>
    <message>
      <source>Low</source>
      <translation>저</translation>
    </message>
    <message>
      <source>Minimum</source>
      <translation>최소</translation>
    </message>
    <message>
      <source>Compression &amp;Quality:</source>
      <translation>압축 품질(&amp;Q):</translation>
    </message>
    <message>
      <source>&amp;General</source>
      <translation>일반(&amp;G)</translation>
    </message>
    <message>
      <source>Embedding</source>
      <translation>내장</translation>
    </message>
    <message>
      <source>Available Fonts:</source>
      <translation>이용가능한 글꼴:</translation>
    </message>
    <message>
      <source>Fonts to embed:</source>
      <translation>내장 글꼴:</translation>
    </message>
    <message>
      <source>&amp;Fonts</source>
      <translation>글꼴(&amp;F)</translation>
    </message>
    <message>
      <source>Enable &amp;Presentation Effects</source>
      <translation>프리젠테이션 효과 가능(&amp;P)</translation>
    </message>
    <message>
      <source>Page</source>
      <translation>페이지</translation>
    </message>
    <message>
      <source>Show Page Pre&amp;views</source>
      <translation>페이지 미리보기 보기(&amp;V)</translation>
    </message>
    <message>
      <source>Effects</source>
      <translation>효과</translation>
    </message>
    <message>
      <source>&amp;Display Duration:</source>
      <translation>지속시간 보기(&amp;D):</translation>
    </message>
    <message>
      <source>Effec&amp;t Duration:</source>
      <translation>효과 지속시간(&amp;T):</translation>
    </message>
    <message>
      <source>Effect T&amp;ype:</source>
      <translation>효과 형태(&amp;Y):</translation>
    </message>
    <message>
      <source>&amp;Moving Lines:</source>
      <translation>선 이동(&amp;M):</translation>
    </message>
    <message>
      <source>F&amp;rom the:</source>
      <translation>부터(&amp;R):</translation>
    </message>
    <message>
      <source>D&amp;irection:</source>
      <translation>방향(&amp;I):</translation>
    </message>
    <message>
      <source> sec</source>
      <translation> 초</translation>
    </message>
    <message>
      <source>No Effect</source>
      <translation>효과 없음</translation>
    </message>
    <message>
      <source>Blinds</source>
      <translation>블라인드</translation>
    </message>
    <message>
      <source>Box</source>
      <translation>상자</translation>
    </message>
    <message>
      <source>Dissolve</source>
      <translation>디졸브</translation>
    </message>
    <message>
      <source>Glitter</source>
      <translation>지터</translation>
    </message>
    <message>
      <source>Split</source>
      <translation>나누기</translation>
    </message>
    <message>
      <source>Wipe</source>
      <translation>제거</translation>
    </message>
    <message>
      <source>Horizontal</source>
      <translation>수평</translation>
    </message>
    <message>
      <source>Vertical</source>
      <translation>수직</translation>
    </message>
    <message>
      <source>Inside</source>
      <translation>안쪽</translation>
    </message>
    <message>
      <source>Outside</source>
      <translation>바깥</translation>
    </message>
    <message>
      <source>Left to Right</source>
      <translation>왼쪽에서 오른쪽으로</translation>
    </message>
    <message>
      <source>Top to Bottom</source>
      <translation>위에서 아래로</translation>
    </message>
    <message>
      <source>Bottom to Top</source>
      <translation>아래에서 위로</translation>
    </message>
    <message>
      <source>Right to Left</source>
      <translation>오른쪽에서 왼쪽으로</translation>
    </message>
    <message>
      <source>Top-left to Bottom-Right</source>
      <translation>왼쪽 위에서 오른쪽 아래로</translation>
    </message>
    <message>
      <source>E&amp;xtras</source>
      <translation>확장(&amp;X)</translation>
    </message>
    <message>
      <source>Display Settings</source>
      <translation>설정 보이기</translation>
    </message>
    <message>
      <source>Single Page</source>
      <translation>한 쪽</translation>
    </message>
    <message>
      <source>Continuous</source>
      <translation>연속</translation>
    </message>
    <message>
      <source>Double Page Left</source>
      <translation>두 페이지 왼쪽</translation>
    </message>
    <message>
      <source>Double Page Right</source>
      <translation>두 페이지 오른쪽</translation>
    </message>
    <message>
      <source>Visual Appearance</source>
      <translation>외형</translation>
    </message>
    <message>
      <source>Use Viewers Defaults</source>
      <translation>뷰어 기본값 사용</translation>
    </message>
    <message>
      <source>Use Full Screen Mode</source>
      <translation>전체 화면 모드 사용</translation>
    </message>
    <message>
      <source>Display Bookmarks Tab</source>
      <translation>북마크 탭 보이기</translation>
    </message>
    <message>
      <source>Display Thumbnails</source>
      <translation>썸네일 보이기</translation>
    </message>
    <message>
      <source>Display Layers Tab</source>
      <translation>레이어 탭 보이기</translation>
    </message>
    <message>
      <source>Hide Viewers Toolbar</source>
      <translation>뷰어 도구막대 숨기기</translation>
    </message>
    <message>
      <source>Hide Viewers Menubar</source>
      <translation>뷰어 메뉴막대 숨기기</translation>
    </message>
    <message>
      <source>Zoom Pages to fit Viewer Window</source>
      <translation>페이지를 뷰어 창에 맞게 확대</translation>
    </message>
    <message>
      <source>Special Actions</source>
      <translation>특별 기능</translation>
    </message>
    <message>
      <source>No Script</source>
      <translation>스크립트 없음</translation>
    </message>
    <message>
      <source>Viewer</source>
      <translation>보기</translation>
    </message>
    <message>
      <source>&amp;Use Encryption</source>
      <translation>암호 사용(&amp;U)</translation>
    </message>
    <message>
      <source>Passwords</source>
      <translation>암호</translation>
    </message>
    <message>
      <source>&amp;User:</source>
      <translation>사용자(&amp;U):</translation>
    </message>
    <message>
      <source>&amp;Owner:</source>
      <translation>소유자(&amp;O):</translation>
    </message>
    <message>
      <source>Settings</source>
      <translation>설정</translation>
    </message>
    <message>
      <source>Allow &amp;Printing the Document</source>
      <translation>문서 출력 허용(&amp;P)</translation>
    </message>
    <message>
      <source>Allow &amp;Changing the Document</source>
      <translation>문서 변경 허용(&amp;C)</translation>
    </message>
    <message>
      <source>Allow Cop&amp;ying Text and Graphics</source>
      <translation>텍스트와 이미지 복사 허용(&amp;Y)</translation>
    </message>
    <message>
      <source>Allow Adding &amp;Annotations and Fields</source>
      <translation>주석과 필드 더하기 허용(&amp;A)</translation>
    </message>
    <message>
      <source>S&amp;ecurity</source>
      <translation>보안(&amp;E)</translation>
    </message>
    <message>
      <source>General</source>
      <translation>일반</translation>
    </message>
    <message>
      <source>Output &amp;Intended For:</source>
      <translation>출력 방법(&amp;I):</translation>
    </message>
    <message>
      <source>Screen / Web</source>
      <translation>화면 / 웹</translation>
    </message>
    <message>
      <source>Printer</source>
      <translation>프린터</translation>
    </message>
    <message>
      <source>Grayscale</source>
      <translation>회색톤</translation>
    </message>
    <message>
      <source>Convert Spot Colors to Process Colors</source>
      <translation>Spot 색상을 진행 색상으로 변환</translation>
    </message>
    <message>
      <source>&amp;Use Custom Rendering Settings</source>
      <translation>사용자 렌더링 설정 사용(&amp;U)</translation>
    </message>
    <message>
      <source>Rendering Settings</source>
      <translation>렌더링 설정</translation>
    </message>
    <message>
      <source>Fre&amp;quency:</source>
      <translation>빈도(&amp;Q):</translation>
    </message>
    <message>
      <source>&amp;Angle:</source>
      <translation>각도(&amp;A):</translation>
    </message>
    <message>
      <source>S&amp;pot Function:</source>
      <translation>스폿 기능(&amp;P):</translation>
    </message>
    <message>
      <source>Simple Dot</source>
      <translation>단일 점</translation>
    </message>
    <message>
      <source>Line</source>
      <translation>선</translation>
    </message>
    <message>
      <source>Round</source>
      <translation>원</translation>
    </message>
    <message>
      <source>Ellipse</source>
      <translation>타원</translation>
    </message>
    <message>
      <source>Solid Colors:</source>
      <translation>단색:</translation>
    </message>
    <message>
      <source>Profile:</source>
      <translation>프로파일:</translation>
    </message>
    <message>
      <source>Perceptual</source>
      <translation>인지</translation>
    </message>
    <message>
      <source>Relative Colorimetric</source>
      <translation>상대 색상계</translation>
    </message>
    <message>
      <source>Saturation</source>
      <translation>채도</translation>
    </message>
    <message>
      <source>Absolute Colorimetric</source>
      <translation>절대 색상계</translation>
    </message>
    <message>
      <source>Images:</source>
      <translation>이미지:</translation>
    </message>
    <message>
      <source>C&amp;olor</source>
      <translation>색상(&amp;O)</translation>
    </message>
    <message>
      <source>PDF/X-3 Output Intent</source>
      <translation>PDF/X-3 출력 목적</translation>
    </message>
    <message>
      <source>Output &amp;Profile:</source>
      <translation>프로파일 출력(&amp;P):</translation>
    </message>
    <message>
      <source>Embed fonts into the PDF. Embedding the fonts will preserve the layout and appearance of your document.</source>
      <translation>글꼴을 PDF 에 삽입. 폰트 삽입은 문서의 윤곽과 외형을 유지.</translation>
    </message>
    <message>
      <source>Show page previews of each page listed above.</source>
      <translation>위에 열거된 페이지 미리보기를 보여줍니다.</translation>
    </message>
    <message>
      <source>Length of time the effect runs. A shorter time will speed up the effect, a longer one will slow it down.</source>
      <translation>효과가 실행될 때 시간 길이. 짧은 시간은 효과를 빠르게 처리할 수 있고, 긴 시간은 느리게 처리됩니다.</translation>
    </message>
    <message>
      <source>Type of the display effect.</source>
      <translation>표시 효과 형태</translation>
    </message>
    <message>
      <source>Direction of the effect of moving lines for the split and blind effects.</source>
      <translation>분해 또는 색맹효과를 위해서 선을 이동시키는 효과의 방향</translation>
    </message>
    <message>
      <source>Starting position for the box and split effects.</source>
      <translation>박스와 분해 효과를 위한 시작위치</translation>
    </message>
    <message>
      <source>Direction of the glitter or wipe effects.</source>
      <translation>반짝임 또는 지우기 효과 방향</translation>
    </message>
    <message>
      <source>Apply the selected effect to all pages.</source>
      <translation>전체 페이지에 선택 효과 적용</translation>
    </message>
    <message>
      <source>Export all pages to PDF</source>
      <translation>전체 페이지를 PDF로 내보내기</translation>
    </message>
    <message>
      <source>Export a range of pages to PDF</source>
      <translation>범위 내 페이지를 PDF로 내보내기</translation>
    </message>
    <message>
      <source>Insert a comma separated list of tokens where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
      <translation>전체 페이지는 *로, 1페이지와 4-6페이지를 동시에 출력할 경우 1,4-6과 같이 콤마로 분리하여 표현합니다.</translation>
    </message>
    <message>
      <source>Determines the binding of pages in the PDF. Unless you know you need to change it leave the default choice - Left.</source>
      <translation>PDF에서 페이지 제본을 결정합니다. 특별한 경우가 아니라면 기본 선택인 왼쪽여백으로 설정합니다.</translation>
    </message>
    <message>
      <source>Generates thumbnails of each page in the PDF. Some viewers can use the thumbnails for navigation.</source>
      <translation>PDF에서 각 페이지의 썸네일을 생성한다. 사용자가 페이지 이동을 위하여 썸네일을 사용.</translation>
    </message>
    <message>
      <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
      <translation>PDF 문단을 생성한다. 이것은 PDF에서 링크된 문단을 이동할 때 유용하다.</translation>
    </message>
    <message>
      <source>Embed the bookmarks you created in your document. These are useful for navigating long PDF documents.</source>
      <translation>문서에서 생성된 북마크를 포함시킴. 이는 PDF 문서를 이동할 때 유용함.</translation>
    </message>
    <message>
      <source>Export resolution of text and vector graphics. This does not affect the resolution of bitmap images like photos.</source>
      <translation>텍스트와 벡터 그래픽의 해상도를 내보내기. 사진과 같은 비트맵 이미지의 해상도에는 영향을 주지 않음.</translation>
    </message>
    <message>
      <source>Enables lossless compression of text and graphics. Unless you have a reason, leave this checked. This reduces PDF file size.</source>
      <translation>텍스트와 그래픽의 무손실 압축 가능하도록 한다. 특별한 일이 없는 한 체크된 대로 두어야 하며 이 작업은 PDF 파일 크기를 줄입니다.</translation>
    </message>
    <message>
      <source>DPI (Dots Per Inch) for image export.</source>
      <translation>이미지 내보내기 위한 DPI (인치당 점)</translation>
    </message>
    <message>
      <source>Enable the security features in your exported PDF. If you selected PDF 1.3, the PDF will be protected by 40 bit encryption. If you selected PDF 1.4, the PDF will be protected by 128 bit encryption. Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
      <translation>출력된 PDF로 보안 기능을 가능. PDF 1.3을 선택했을 경우, PDF는 40비트 암호화로 보호. PDF 1.4를 선택했을 경우, PDF는 128비트 암호화로 보호. 
면책:  PDF 암호화는, GPG나 PGP 암호화(정도)만큼은 신뢰성이 높지 않고, 몇몇 제한이 있음.</translation>
    </message>
    <message>
      <source>Choose a master password which enables or disables all the security features in your exported PDF</source>
      <translation>내보내는 PDF에서 전체 보안 특성을 가능 또는 불가로 할 수 있는 마스터 암호를 선택합니다.</translation>
    </message>
    <message>
      <source>Choose a password for users to be able to read your PDF.</source>
      <translation>사용자가 PDF를 읽을 수 있도록 암호를 선택합니다.</translation>
    </message>
    <message>
      <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
      <translation>PDF 인쇄를 허용. 체크가 안되었다면 인쇄가 안됨.</translation>
    </message>
    <message>
      <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
      <translation>PDF수정을 허용. 체크가 되지 않았다면 PDF수정이 안됨</translation>
    </message>
    <message>
      <source>Allow copying of text or graphics from the PDF. If unchecked, text and graphics cannot be copied.</source>
      <translation>PDF에서 텍스트나 이미지 복사를 허용. 체크가 되지 않으면 텍스트나 이미지 복사가 안됨.</translation>
    </message>
    <message>
      <source>Allow adding annotations and fields to the PDF. If unchecked, editing annotations and fields is prevented.</source>
      <translation>주석이나 필드를 PDF에 더하기 허용. 미 체크시 주석과 필드 수정이 안됨.</translation>
    </message>
    <message>
      <source>This is an advanced setting which is not enabled by default. This should only be enabled when specifically requested by your printer and they have given you the exact details needed. Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
      <translation>기본을 사용할 수 없을 때의 고급 설정임. 이것은 프린터에 요청할 때만 사용가능하며 필요한 세부사항을 정확히 맞추어야 합니다. 그렇지 않으면 PDF가 제대로 인쇄되지 않습니다.</translation>
    </message>
    <message>
      <source>Embed a color profile for solid colors</source>
      <translation>단일 색상를 위한 색상 프로파일을 포함시킴</translation>
    </message>
    <message>
      <source>Color profile for solid colors</source>
      <translation>단일 색상을 위한 색상 프로파일</translation>
    </message>
    <message>
      <source>Rendering intent for solid colors</source>
      <translation>단일 색상을 위한 렌더링 목적</translation>
    </message>
    <message>
      <source>Embed a color profile for images</source>
      <translation>이미지를 위한 색상 프로파일 포함</translation>
    </message>
    <message>
      <source>Do not use color profiles that are embedded in source images</source>
      <translation>소스 이미지에서 포함시킨 색상 프로파일을 사용하지 않음</translation>
    </message>
    <message>
      <source>Color profile for images</source>
      <translation>이미지를 위한 색상 프로파일</translation>
    </message>
    <message>
      <source>Rendering intent for images</source>
      <translation>이미지를 위한 렌더링 목적</translation>
    </message>
    <message>
      <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
      <translation>인쇄를 위한 출력 프로파일. 가능하다면 프린터로부터 프로파일 선택을 위한 가이드를 얻음.</translation>
    </message>
    <message>
      <source>Mandatory string for PDF/X-3 or the PDF will fail PDF/X-3 conformance. We recommend you use the title of the document.</source>
      <translation>PDF/X-3 또는 PDF를 위한 필수 문자열은  PDF/X-3 일치에 실패할 것입니다. 문서의 제목을 사용하기를 추천합니다.</translation>
    </message>
    <message>
      <source>Distance for bleed from the top of the physical page</source>
      <translation>페이지 위부터 물림재단 거리</translation>
    </message>
    <message>
      <source>Distance for bleed from the bottom of the physical page</source>
      <translation>페이지 아래부터 물림재단 거리</translation>
    </message>
    <message>
      <source>Distance for bleed from the left of the physical page</source>
      <translation>페이지 왼쪽부터 물림재단 거리</translation>
    </message>
    <message>
      <source>Distance for bleed from the right of the physical page</source>
      <translation>페이지 오른쪽부터 물림재단 거리</translation>
    </message>
    <message>
      <source>Mirror Page(s) horizontally</source>
      <translation>페이지 수평 미러</translation>
    </message>
    <message>
      <source>Mirror Page(s) vertically</source>
      <translation>페이지 수직 미러</translation>
    </message>
    <message>
      <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
      <translation>Spot 색상을 혼합 색상으로 변환 가능, spot 색상 인쇄를 하지 않는다면 가능한 한 그대로 두십시오.</translation>
    </message>
    <message>
      <source>Clip to Page Margins</source>
      <translation>페이지 여백으로 자르기</translation>
    </message>
    <message>
      <source>Image Compression Method</source>
      <translation>이미지 압축 방법</translation>
    </message>
    <message>
      <source>Lossy - JPEG</source>
      <translation>손실 - JPEG</translation>
    </message>
    <message>
      <source>Lossless - Zip</source>
      <translation>비손실 - Zip</translation>
    </message>
    <message>
      <source>Javascript to be executed
when PDF document is opened:</source>
      <translation>PDF를 열 때 실행될 자바스크립트:</translation>
    </message>
    <message>
      <source>Force Overprint Mode</source>
      <translation>종첩인쇄 모드 강제</translation>
    </message>
    <message>
      <source>&amp;Info String:</source>
      <translation>문자열 정보(&amp;I):</translation>
    </message>
    <message>
      <source>Enables presentation effects when using Adobe&amp;#174; Reader&amp;#174; and other PDF viewers which support this in full screen mode.</source>
      <translation>전체 화면 모드로 Adobe &amp;#174; Reader&amp;#174;를 사용했을 때에 프레젠테이션 효과가 가능.</translation>
    </message>
    <message>
      <source>Length of time the page is shown before the presentation starts on the selected page. Setting 0 will disable automatic page transition.</source>
      <translation>선택된 페이지상 프리젠테이션을 시작하기 전, 페이지가 보여지는 시간. 0값 은 자동으로 페이지 전환을 할 수 없도록 합니다.</translation>
    </message>
    <message>
      <source>Layers in your document are exported to the PDF Only available if PDF 1.5 is chosen.</source>
      <translation>PDF 1.5를 선택한다면 레이어들을 이용가능한  PDF로 출력 가능.</translation>
    </message>
    <message>
      <source>Color model for the output of your PDF. Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets. Choose Printer when printing to a true 4 color CMYK printer. Choose Grayscale when you want a grey scale PDF.</source>
      <translation>PDF 인쇄를 위한 색상 모델. 화면 보기와 잉크젯 인쇄를 위한 PDF를 위하여 화면/웹을 선택. 트루 4색상 CMYK 프른터로 인쇄할 때 프린터를 선택. 회색톤 PDF 인쇄 할 때 회색톤 선택</translation>
    </message>
    <message>
      <source>Enables global Overprint Mode for this document, overrides object settings</source>
      <translation>문서를 위한 글로벌 중첩인쇄 모드 사용 가능, 객체 설정을 충첩시킨다.</translation>
    </message>
    <message>
      <source>Do not show objects outside the margins in the exported file</source>
      <translation>내보내기 파일에 객체 밖의 여백을 보이지 않게 합니다</translation>
    </message>
    <message>
      <source>Determines the PDF compatibility.&lt;br/>The default is &lt;b>PDF 1.3&lt;/b> which gives the widest compatibility.&lt;br/>Choose &lt;b>PDF 1.4&lt;/b> if your file uses features such as transparency or you require 128 bit encryption.&lt;br/>&lt;b>PDF 1.5&lt;/b> is necessary when you wish to preserve objects in separate layers within the PDF.&lt;br/>&lt;b>PDF/X-3&lt;/b> is for exporting the PDF when you want color managed RGB for commercial printing and is selectable when you have activated color management. Use only when advised by your printer or in some cases printing to a 4 color digital color laser printer.</source>
      <translation>PDF호환성 결정&lt;br/>기본값은 &lt;b>PDF 1.3&lt;/b>입니다. &lt;br/>폭 넓은 호환성을 가짐、&lt;b>PDF 1.4&lt;/b>선택합니다.&lt;br/>&lt;b>PDF 1.5&lt;/b>은 투명도 특성이나 128비트 암호를 필요로 할 때 사용합니다.&lt;br/>PDF/X-3은,상업 인쇄로 색상 관리 RGB를 사용하고 싶은 경우에、PDF、컬러 관리를 유효하게 하면 선택 가능하게 됩니다. 주의:  PDF/X-3은 모든 CMYK 화상을 ICC 베이스의 RGB 칼라로 변환합니다. 프린터로 추천 되고 있는지, 일부의 4색디지털 칼라 레이저 프린터에서 사용해 주세요.</translation>
    </message>
    <message>
      <source>&amp;Embed all</source>
      <translation>전체 중첩(&amp;E)</translation>
    </message>
    <message>
      <source>Fonts to outline:</source>
      <translation>외곽선 글꼴:</translation>
    </message>
    <message>
      <source>&amp;Outline all</source>
      <translation>전체 윤곽선(&amp;O)</translation>
    </message>
    <message>
      <source>Printer Marks</source>
      <translation>프린터 마크</translation>
    </message>
    <message>
      <source>Crop Marks</source>
      <translation>절단 마크</translation>
    </message>
    <message>
      <source>Bleed Marks</source>
      <translation>물림재단 마크</translation>
    </message>
    <message>
      <source>Registration Marks</source>
      <translation>등록마크</translation>
    </message>
    <message>
      <source>Color Bars</source>
      <translation>색상 막대</translation>
    </message>
    <message>
      <source>Page Information</source>
      <translation>페이지 정보</translation>
    </message>
    <message>
      <source>Offset:</source>
      <translation>옵셋:</translation>
    </message>
    <message>
      <source>Bleed Settings</source>
      <translation>물림재단 설정</translation>
    </message>
    <message>
      <source>Top:</source>
      <translation>위:</translation>
    </message>
    <message>
      <source>Bottom:</source>
      <translation>아래:</translation>
    </message>
    <message>
      <source>Left:</source>
      <translation>왼쪽:</translation>
    </message>
    <message>
      <source>Right:</source>
      <translation>오른쪽:</translation>
    </message>
    <message>
      <source>Use Document Bleeds</source>
      <translation>문서 물림재단 사용</translation>
    </message>
    <message>
      <source>Pre-Press</source>
      <translation>인쇄본</translation>
    </message>
    <message>
      <source>Convert all glyphs in the document to outlines.</source>
      <translation>문서의 전체 사용자 문자표를 외곽선으로 변환</translation>
    </message>
    <message>
      <source>Method of compression to use for images. Automatic allows Scribus to choose the best method. ZIP is lossless and good for images with solid colors. JPEG is better at creating smaller PDF files which have many photos (with slight image quality loss possible). Leave it set to Automatic unless you have a need for special compression options.</source>
      <translation>이미지 압축 처리 방법. 자동은 압축 최적방법을 사용. ZIP은 무손실이고 Solid color를 가진 이미지에 적합. JPEG는 많은 사진자료가 있는 PDF를 작은 파일을 생성하는데 좋으나 이미지 품질은 약간 떨어질 수 있다. 특별히 이유가 없으면 자동으로 두도록 합니다.</translation>
    </message>
    <message>
      <source>Compression quality levels for lossy compression methods: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%). Note that a quality level does not directly determine the size of the resulting image - both size and quality loss vary from image to image at any given quality level. Even with Maximum selected, there is always some quality loss with jpeg.</source>
      <translation>손실 압축방법을 위한 압축 품질 레벨 : 최소(25%), 낮음(50%), 중간(75%), 높음(85%),최대(95%).  압축 질 레벌은 출력 이미지 크기를 직접적으로 결정하는 것은 아닙니다. 이미지 크기와 품질의 손실은 정해지는 품질 레벌에서 다양하며 최대 조차 JPEG에서 약간 품질의 손실이 있습니다.</translation>
    </message>
    <message>
      <source>Inside:</source>
      <translation>왼쪽:</translation>
    </message>
    <message>
      <source>Outside:</source>
      <translation>오른쪽:</translation>
    </message>
    <message>
      <source>Document Layout</source>
      <translation>제책</translation>
    </message>
    <message>
      <source>Maximum Image Resolution:</source>
      <translation>최대 이미지 해상도:</translation>
    </message>
    <message>
      <source>Show the document in single page mode</source>
      <translation>단일 페이지 모드에서 문서 보기</translation>
    </message>
    <message>
      <source>Show the document in single page mode with the pages displayed continuously end to end like a scroll</source>
      <translation>스크롤동작과 같이 연속적으로  끝과 끝이 이어져 있는 페이지들에서 싱글 페이지 모드에서 문서를 보여주기</translation>
    </message>
    <message>
      <source>Show the document with facing pages, starting with the first page displayed on the left</source>
      <translation>보여지는 페이지, 왼쪽에 보이는 페이지로 시작하는 문서를 보기</translation>
    </message>
    <message>
      <source>Show the document with facing pages, starting with the first page displayed on the right</source>
      <translation>보여지는 페이지, 오른쪽에 보이는 페이지로 시작하는 문서를 보기</translation>
    </message>
    <message>
      <source>Use the viewer's defaults or the user's preferences if set differently from the viewer defaults</source>
      <translation>뷰어 기본과 다르게 설정되었을 경우 뷰어 기본값 또는 사용자 기본설정을 사용</translation>
    </message>
    <message>
      <source>Enables viewing the document in full screen</source>
      <translation>전체 화면상에서 다큐멘터리를 볼 수 있음.</translation>
    </message>
    <message>
      <source>Display the bookmarks upon opening</source>
      <translation>여는 동안 북마크 보이기</translation>
    </message>
    <message>
      <source>Display the page thumbnails upon opening</source>
      <translation>"여는 동안 페이지 썸네일 보이기</translation>
    </message>
    <message>
      <source>Forces the displaying of layers. Useful only for PDF 1.5+.</source>
      <translation>레이어 보기를 수행함. 단지 PDF 1.5+에만 유용.</translation>
    </message>
    <message>
      <source>Hides the Tool Bar which has selection and other editing capabilities</source>
      <translation>선택과 편집기능을 가진 툴바 숨기기</translation>
    </message>
    <message>
      <source>Hides the Menu Bar for the viewer, the PDF will display in a plain window. </source>
      <translation>뷰어를 위한 메뉴바 숨기기, PDF가 창에서 나타남.</translation>
    </message>
    <message>
      <source>Fit the document page or pages to the available space in the viewer window.</source>
      <translation>뷰어 창에서 문서 페이지가 이용할 수 있는 저장공간에 맞추도록 함.</translation>
    </message>
    <message>
      <source>Limits the resolution of your bitmap images to the selected DPI. Images with a lower resolution will be left untouched. Leaving this unchecked will render them at their native resolution. Enabling this will increase memory usage and slow down export.</source>
      <translation>비트맵 이미지 해상도를 선택 DPI로 제한. 저해상도 이미지는 변경하지 말고 그대로 둡니다. 체크하지 않으면 원 해상도로 이미지 렌더를 한다. 이 작업은 메모리 이용을 증가시키고 출력 지연이 있다.</translation>
    </message>
    <message>
      <source>Creates crop marks in the PDF indicating where the paper should be cut or trimmed after printing</source>
      <translation>출력 후 페이퍼가 자르거나 잘린 곳에서 보여지는 PDF에서 잘림 마크를 생성합니다.</translation>
    </message>
    <message>
      <source>This creates bleed marks which are indicated by  _ . _ and show the bleed limit</source>
      <translation>_ . _ 를 나타내는 물림재단 마크를 생성하며 물림재단 한계를 보여줌</translation>
    </message>
    <message>
      <source>Add registration marks to each separation</source>
      <translation>등록마크를 개별 분리자에 더하기</translation>
    </message>
    <message>
      <source>Add color calibration bars</source>
      <translation>색상 조정 막대 더하기</translation>
    </message>
    <message>
      <source>Add document information which includes the document title and page numbers</source>
      <translation>문서 제목과 페이지 갯수를 포함한 문서 정보 더하기</translation>
    </message>
    <message>
      <source>Indicate the distance offset for the registration marks</source>
      <translation>등록 마크를 위한 거리 옵셋을 지시</translation>
    </message>
    <message>
      <source>Use the existing bleed settings from the document preferences</source>
      <translation>문서 설정으로부터 기존 물림재단 설정을 사용</translation>
    </message>
    <message>
      <source>Use Color Profile</source>
      <translation>색상 프로파일 사용</translation>
    </message>
    <message>
      <source>Do not use embedded color profiles</source>
      <translation>중첩된 색상 프로파일 사용 안함</translation>
    </message>
    <message>
      <source>&amp;Apply Effect to all Pages</source>
      <translation>효과를 전 페이지에 적용(&amp;A)</translation>
    </message>
    <message>
      <source>Embed PDFs (EXPERIMENTAL)</source>
      <translation>중첩 PDF (실험적임)</translation>
    </message>
    <message>
      <source>Automatically rotate the exported pages</source>
      <translation>자동으로 내보내진 페이지 회전</translation>
    </message>
    <message>
      <source>Export PDFs in image frames as embedded PDFs. This does *not* yet take care of colorspaces, so you should know what you are doing before setting this to 'true'.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Push</source>
      <translation>밀음</translation>
    </message>
    <message>
      <source>Cover</source>
      <translation>덮음</translation>
    </message>
    <message>
      <source>Uncover</source>
      <translation>덮음해제</translation>
    </message>
    <message>
      <source>Fade</source>
      <translation>어두워지다</translation>
    </message>
    <message>
      <source>Rendering Intent:</source>
      <translation>렌더링 목적:</translation>
    </message>
  </context>
  <context>
    <name>TabPrinter</name>
    <message>
      <source>TabPrinterBase</source>
      <translation>탭출력기준선</translation>
    </message>
    <message>
      <source>Options</source>
      <translation>설정</translation>
    </message>
    <message>
      <source>Page</source>
      <translation>페이지</translation>
    </message>
    <message>
      <source>Mirror Page(s) Horizontal</source>
      <translation>페이지 수평방향 대칭이동</translation>
    </message>
    <message>
      <source>Mirror Page(s) Vertical</source>
      <translation>페이지 수직방향 대칭이동</translation>
    </message>
    <message>
      <source>Set Media Size</source>
      <translation>미디어 크기 설정</translation>
    </message>
    <message>
      <source>Clip to Page Margins</source>
      <translation>페이지 여백까지 자르기</translation>
    </message>
    <message>
      <source>Print in Grayscale</source>
      <translation>회색톤 출력</translation>
    </message>
    <message>
      <source>Print in Color if Available</source>
      <translation>가능하면 색상 출력</translation>
    </message>
    <message>
      <source>Level 1</source>
      <translation>레벨 1</translation>
    </message>
    <message>
      <source>Level 2</source>
      <translation>레벨 2</translation>
    </message>
    <message>
      <source>Level 3</source>
      <translation>레벨 3</translation>
    </message>
    <message>
      <source>General</source>
      <translation>일반</translation>
    </message>
    <message>
      <source>Print Separations</source>
      <translation>색분해 인쇄</translation>
    </message>
    <message>
      <source>Print Normal</source>
      <translation>표준 출력</translation>
    </message>
    <message>
      <source>Color</source>
      <translation>색상</translation>
    </message>
    <message>
      <source>Apply Under Color Removal</source>
      <translation>색상 제거하에 적용</translation>
    </message>
    <message>
      <source>Convert Spot Colors to Process Colors</source>
      <translation>강조 색상을 진행 색상으로 변환</translation>
    </message>
    <message>
      <source>Force Overprint Mode</source>
      <translation>중첩인쇄 모드 강제지정</translation>
    </message>
    <message>
      <source>Apply ICC Profiles</source>
      <translation>ICC 프로파일 적용</translation>
    </message>
    <message>
      <source>Marks &amp;&amp; Bleeds</source>
      <translation>물림재단 표시</translation>
    </message>
    <message>
      <source>Bleed Settings</source>
      <translation>물림재단 설정</translation>
    </message>
    <message>
      <source>Top:</source>
      <translation>위:</translation>
    </message>
    <message>
      <source>Bottom:</source>
      <translation>아래:</translation>
    </message>
    <message>
      <source>Left:</source>
      <translation>왼쪽:</translation>
    </message>
    <message>
      <source>Right:</source>
      <translation>오른쪽:</translation>
    </message>
    <message>
      <source>Printer Marks</source>
      <translation>프린터 마크</translation>
    </message>
    <message>
      <source>Add color calibration bars</source>
      <translation>색상 조정 막대 더하기</translation>
    </message>
    <message>
      <source>Color Bars</source>
      <translation>색상 막대</translation>
    </message>
    <message>
      <source>Offset:</source>
      <translation>옵셋:</translation>
    </message>
    <message>
      <source>Add registration marks which are added to each separation</source>
      <translation>개별 분리자에 더해지는 등록마크를 더함</translation>
    </message>
    <message>
      <source>Registration Marks</source>
      <translation>등록 마크</translation>
    </message>
    <message>
      <source>This creates bleed marks which are indicated by  _ . _ and show the bleed limit</source>
      <translation> _ . _ 를 나타내는 물림재단 마크를 생성하며 물림재단 한계를 보여줌</translation>
    </message>
    <message>
      <source>Bleed Marks</source>
      <translation>물림재단 마크</translation>
    </message>
    <message>
      <source>This creates crop marks in the PDF indicating where the paper should be cut or trimmed after printing</source>
      <translation>출력 후 종이가 잘려지는 부분을 나타내는 잘림 마크를 PDF에서 생성합니다.</translation>
    </message>
    <message>
      <source>Crop Marks</source>
      <translation>잘림 마크</translation>
    </message>
    <message>
      <source>Print Destination</source>
      <translation>출력 방향</translation>
    </message>
    <message>
      <source>Alternative Printer Command</source>
      <translation>대안 프린터 명령어(&amp;L)</translation>
    </message>
    <message>
      <source>Command:</source>
      <translation>명령어:</translation>
    </message>
    <message>
      <source>PostScript Options</source>
      <translation>PostScript 설정</translation>
    </message>
  </context>
  <context>
    <name>TabScrapbook</name>
    <message>
      <source>This enables the scrapbook to be used an extension to the copy/paste buffers. Simply copying an object or grouped object will send this to the Scrapbook automatically</source>
      <translation>스크랩북이 복사/붙여넣기 버퍼로 확장될 수 있도록 합니다. 단순히 객체 또는 그룹 객체의 복사는 이를 자동으로 스크랩북으로 보내집니다.</translation>
    </message>
    <message>
      <source>Send Copied Items Automatically to Scrapbook</source>
      <translation>복사 객체를 자동으로 스크랩북으로 보냅니다</translation>
    </message>
    <message>
      <source>This enables copied items to be kept permanently in the scrapbook.</source>
      <translation>복사된 객체가 스크랩북에서 지속적으로 유지되도록 합니다.</translation>
    </message>
    <message>
      <source>Keep Copied Items Permanently Across Sessions</source>
      <translation>지속적으로 복사된 객체 유지</translation>
    </message>
    <message>
      <source>The minimum number is 1; the maximum us 100.</source>
      <translation>최소값은 1; 최대값은 100.</translation>
    </message>
    <message>
      <source>Number of Copied Items to Keep in Scrapbook:</source>
      <translation>스크랩북에 있는 복사된 객체 갯수:</translation>
    </message>
  </context>
  <context>
    <name>TabTools</name>
    <message>
      <source>Font:</source>
      <translation>글꼴:</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> 포인트</translation>
    </message>
    <message>
      <source>Size:</source>
      <translation>크기:</translation>
    </message>
    <message>
      <source>None</source>
      <translation>없음</translation>
    </message>
    <message>
      <source>Text Color:</source>
      <translation>택스트 색상:</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Shading:</source>
      <translation>음영:</translation>
    </message>
    <message>
      <source>Text Stroke:</source>
      <translation>텍스트 윤곽선:</translation>
    </message>
    <message>
      <source>Fill Color:</source>
      <translation>채움 색상:</translation>
    </message>
    <message>
      <source>Stroke Color:</source>
      <translation>윤곽선 색상:</translation>
    </message>
    <message>
      <source>Dot</source>
      <translation>점</translation>
    </message>
    <message>
      <source>Hyphen</source>
      <translation>하이픈</translation>
    </message>
    <message>
      <source>Underscore</source>
      <translation>밑줄</translation>
    </message>
    <message>
      <source>Custom</source>
      <translation>사용자 정의</translation>
    </message>
    <message>
      <source>Tab Fill Character:</source>
      <translation>탭 채움 문자:</translation>
    </message>
    <message>
      <source>Tab Width:</source>
      <translation>탭 너비:</translation>
    </message>
    <message>
      <source>Colu&amp;mns:</source>
      <translation>열(&amp;M):</translation>
    </message>
    <message>
      <source>&amp;Gap:</source>
      <translation>간격(&amp;G):</translation>
    </message>
    <message>
      <source>Woven silk pyjamas exchanged for blue quartz</source>
      <translation>단지, 살아있음에 감사하며 행복을 느낍니다...</translation>
    </message>
    <message>
      <source>&amp;Line Color:</source>
      <translation>선 색상(&amp;L):</translation>
    </message>
    <message>
      <source>&amp;Shading:</source>
      <translation>음영(&amp;S):</translation>
    </message>
    <message>
      <source>&amp;Fill Color:</source>
      <translation>채움 색상(&amp;F):</translation>
    </message>
    <message>
      <source>S&amp;hading:</source>
      <translation>음영(&amp;H):</translation>
    </message>
    <message>
      <source>Line Style:</source>
      <translation>선 스타일:</translation>
    </message>
    <message>
      <source>Line &amp;Width:</source>
      <translation>선 너비(&amp;W):</translation>
    </message>
    <message>
      <source>Line S&amp;tyle:</source>
      <translation>선 스타일(&amp;T):</translation>
    </message>
    <message>
      <source>Arrows:</source>
      <translation>화살표:</translation>
    </message>
    <message>
      <source>Start:</source>
      <translation>시작:</translation>
    </message>
    <message>
      <source>End:</source>
      <translation>끝:</translation>
    </message>
    <message>
      <source>&amp;Free Scaling</source>
      <translation>임의 비율(&amp;F)</translation>
    </message>
    <message>
      <source>&amp;Horizontal Scaling:</source>
      <translation>수평 비율(&amp;H):</translation>
    </message>
    <message>
      <source>&amp;Vertical Scaling:</source>
      <translation>수직 비율(&amp;V):</translation>
    </message>
    <message>
      <source>Keep Aspect &amp;Ratio</source>
      <translation>종횡비 유지(&amp;R)</translation>
    </message>
    <message>
      <source>F&amp;ill Color:</source>
      <translation>채움 색상(&amp;I):</translation>
    </message>
    <message>
      <source>Use embedded Clipping Path</source>
      <translation>중첩 클리핑 경로 사용</translation>
    </message>
    <message>
      <source>On Screen Preview</source>
      <translation>화면상 미리보기</translation>
    </message>
    <message>
      <source>Full Resolution Preview</source>
      <translation>최대 해상도 미리보기</translation>
    </message>
    <message>
      <source>Normal Resolution Preview</source>
      <translation>보통 해상도 미리보기</translation>
    </message>
    <message>
      <source>Low Resolution Preview</source>
      <translation>저해상도 미리보기</translation>
    </message>
    <message>
      <source>Mi&amp;nimum:</source>
      <translation>최소(&amp;N):</translation>
    </message>
    <message>
      <source>Ma&amp;ximum:</source>
      <translation>최대(&amp;X):</translation>
    </message>
    <message>
      <source>&amp;Stepping:</source>
      <translation>단계(&amp;S):</translation>
    </message>
    <message>
      <source>Text Frame Properties</source>
      <translation>텍스트 프레임 속성</translation>
    </message>
    <message>
      <source>Shape Drawing Properties</source>
      <translation>도형 그리기 속성</translation>
    </message>
    <message>
      <source>Magnification Level Defaults</source>
      <translation>배율 레벨 기본값</translation>
    </message>
    <message>
      <source>Line Drawing Properties</source>
      <translation>선 그리기 속성</translation>
    </message>
    <message>
      <source>Polygon Drawing Properties</source>
      <translation>다각형 그리기 속성</translation>
    </message>
    <message>
      <source>Font for new text frames</source>
      <translation>새로운 택스트 프레임 글꼴</translation>
    </message>
    <message>
      <source>Size of font for new text frames</source>
      <translation>새로운 텍스트 프레임의 글꼴 크기</translation>
    </message>
    <message>
      <source>Color of font</source>
      <translation>글꼴 색상</translation>
    </message>
    <message>
      <source>Number of columns in a text frame</source>
      <translation>텍스트 프레임 열 갯수</translation>
    </message>
    <message>
      <source>Gap between text frame columns</source>
      <translation>텍스트 프레임 열 사이 간격</translation>
    </message>
    <message>
      <source>Sample of your font</source>
      <translation>글꼴 예제</translation>
    </message>
    <message>
      <source>Horizontal scaling of images</source>
      <translation>이미지의 수평 비율</translation>
    </message>
    <message>
      <source>Vertical scaling of images</source>
      <translation>이미지의 수직 비율</translation>
    </message>
    <message>
      <source>Keep horizontal and vertical scaling the same</source>
      <translation>수평 및 수직 비율을 동일하게 유지</translation>
    </message>
    <message>
      <source>Saturation of color of fill</source>
      <translation>채움 색상의 채도</translation>
    </message>
    <message>
      <source>Line color of shapes</source>
      <translation>도형 선 색상</translation>
    </message>
    <message>
      <source>Saturation of color of lines</source>
      <translation>선 색상의 채도</translation>
    </message>
    <message>
      <source>Fill color of shapes</source>
      <translation>도형 채움 색상</translation>
    </message>
    <message>
      <source>Line style of shapes</source>
      <translation>도형 선 스타일</translation>
    </message>
    <message>
      <source>Line width of shapes</source>
      <translation>도형 선 너비</translation>
    </message>
    <message>
      <source>Minimum magnification allowed</source>
      <translation>허용된 최소 배율</translation>
    </message>
    <message>
      <source>Maximum magnification allowed</source>
      <translation>허용된 최대 배율</translation>
    </message>
    <message>
      <source>Change in magnification for each zoom operation</source>
      <translation>돋보기 기능을 위한 배율 변경</translation>
    </message>
    <message>
      <source>Color of lines</source>
      <translation>선 색상</translation>
    </message>
    <message>
      <source>Saturation of color</source>
      <translation>색상 채도</translation>
    </message>
    <message>
      <source>Style of lines</source>
      <translation>선 스타일</translation>
    </message>
    <message>
      <source>Width of lines</source>
      <translation>선 너비</translation>
    </message>
    <message>
      <source>None</source>
      <comment>tab fill</comment>
      <translation>없음</translation>
    </message>
    <message>
      <source>Text</source>
      <translation>텍스트 프레임 설정</translation>
    </message>
    <message>
      <source>Shapes</source>
      <translation>도형 설정</translation>
    </message>
    <message>
      <source>Lines</source>
      <translation>선 설정</translation>
    </message>
    <message>
      <source>Images</source>
      <translation>이미지 프레임 설정</translation>
    </message>
    <message>
      <source>Regular Polygons</source>
      <translation>다각형 설정</translation>
    </message>
    <message>
      <source>Zoom</source>
      <translation>돋보기</translation>
    </message>
    <message>
      <source>Rotation Tool</source>
      <translation>회전 도구</translation>
    </message>
    <message>
      <source>Constrain to:</source>
      <translation>제한:</translation>
    </message>
    <message>
      <source>Other Properties</source>
      <translation>기타 속성</translation>
    </message>
    <message>
      <source>Miscellaneous Settings</source>
      <translation>복제 및 회전 설정</translation>
    </message>
    <message>
      <source>Item Duplicate</source>
      <translation>객체 복제</translation>
    </message>
    <message>
      <source>X Displacement</source>
      <translation>X 변위</translation>
    </message>
    <message>
      <source>Y Displacement</source>
      <translation>Y 변위</translation>
    </message>
    <message>
      <source>Horizontal displacement of page items</source>
      <translation>페이지 객체의 수평 변위</translation>
    </message>
    <message>
      <source>Vertical displacement of page items</source>
      <translation>페이지 객체의 수직 변위</translation>
    </message>
    <message>
      <source>Constrain value for the rotation tool when the Control key is pressed</source>
      <translation>제어키를 누를때 회전 도구의 제한 값</translation>
    </message>
    <message>
      <source>Degrees</source>
      <translation>각도</translation>
    </message>
    <message>
      <source>Use the embedded clipping paths in images when importing them. JPEG, PSD and TIFF are the image formats which can embedded clipping paths.</source>
      <translation>들여올 때 이미지의 중첩된 클리핑 경로를 사용합니다. JPEG, PSD 와 TIFF 는 중첩된 클리핑 경로에서 사용될 수 있는 파일 형식입니다.</translation>
    </message>
    <message>
      <source>&amp;Scale Image to Frame Size</source>
      <translation>이미지를 프레임 크기로(&amp;S)</translation>
    </message>
    <message>
      <source>Image Frame Properties</source>
      <translation>이미지 프레임 속성</translation>
    </message>
    <message>
      <source>Image frames allow images to scale to any size</source>
      <translation>이미지 프레임이 이미지의 임의 크기를 허용합니다.</translation>
    </message>
    <message>
      <source>Images in image frames are scaled to the size of the frame</source>
      <translation>이미지 프레임의 이미지를 프레임 크기로 크기 조정합니다</translation>
    </message>
    <message>
      <source>Automatically scaled images keep their original proportions</source>
      <translation>자동 배율 이미지는 원래 배율을 유지합니다</translation>
    </message>
    <message>
      <source>Fill color of image frames</source>
      <translation>이미지 프레임의 채움 색상</translation>
    </message>
  </context>
  <context>
    <name>TabTypograpy</name>
    <message>
      <source>Subscript</source>
      <translation>아래첨자</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>&amp;Displacement:</source>
      <translation>변위(&amp;D):</translation>
    </message>
    <message>
      <source>&amp;Scaling:</source>
      <translation>비율(&amp;S):</translation>
    </message>
    <message>
      <source>Superscript</source>
      <translation>윗첨자</translation>
    </message>
    <message>
      <source>D&amp;isplacement:</source>
      <translation>변위(&amp;I):</translation>
    </message>
    <message>
      <source>S&amp;caling:</source>
      <translation>비율(&amp;C):</translation>
    </message>
    <message>
      <source>Underline</source>
      <translation>밑줄</translation>
    </message>
    <message>
      <source>Displacement:</source>
      <translation>변위:</translation>
    </message>
    <message>
      <source>Auto</source>
      <translation>자동</translation>
    </message>
    <message>
      <source>Line Width:</source>
      <translation>선 너비:</translation>
    </message>
    <message>
      <source>Strikethru</source>
      <translation>취소선</translation>
    </message>
    <message>
      <source>Small Caps</source>
      <translation>소문자</translation>
    </message>
    <message>
      <source>Sc&amp;aling:</source>
      <translation>비율(&amp;A):</translation>
    </message>
    <message>
      <source>Automatic &amp;Line Spacing</source>
      <translation>자동 줄 간격(&amp;L)</translation>
    </message>
    <message>
      <source>Line Spacing:</source>
      <translation>줄 간격:</translation>
    </message>
    <message>
      <source>Displacement above the baseline of the font on a line</source>
      <translation>줄에서 글꼴의 기준선 위 변위</translation>
    </message>
    <message>
      <source>Relative size of the superscript compared to the normal font</source>
      <translation>일반 글꼴과 비교한 윗첨자의 상대적 크기</translation>
    </message>
    <message>
      <source>Displacement below the baseline of the normal font on a line</source>
      <translation>줄에서 일반글꼴의 기준선 아래 변위</translation>
    </message>
    <message>
      <source>Relative size of the subscript compared to the normal font</source>
      <translation>보통 글꼴과 비교한 아래 첨자의 상대적 크기</translation>
    </message>
    <message>
      <source>Relative size of the small caps font compared to the normal font</source>
      <translation>보통 글꼴과 비교한 소문자 글꼴의 상대적 크기</translation>
    </message>
    <message>
      <source>Percentage increase over the font size for the line spacing</source>
      <translation>선 공백을 위하여 글꼴 크기 이상의 백분율 증가</translation>
    </message>
    <message>
      <source>Displacement below the baseline of the normal font expressed as a percentage of the fonts descender</source>
      <translation>하행글꼴의 백분율로 나타내는 일반 글꼴의 기준선 아래 변위</translation>
    </message>
    <message>
      <source>Line width expressed as a percentage of the font size</source>
      <translation>글꼴 크기를 백분율로 나타낸 선 너비</translation>
    </message>
    <message>
      <source>Displacement above the baseline of the normal font expressed as a percentage of the fonts ascender</source>
      <translation>상행글꼴의 백분율로 표현되는 일반 글꼴의 기준선 위 변위</translation>
    </message>
  </context>
  <context>
    <name>Tabruler</name>
    <message>
      <source>Left</source>
      <translation>왼쪽</translation>
    </message>
    <message>
      <source>Right</source>
      <translation>오른쪽</translation>
    </message>
    <message>
      <source>Comma</source>
      <translation>콤마</translation>
    </message>
    <message>
      <source>Center</source>
      <translation>중앙</translation>
    </message>
    <message>
      <source>&amp;Position:</source>
      <translation>위치(&amp;P):</translation>
    </message>
    <message>
      <source>Dot</source>
      <translation>점</translation>
    </message>
    <message>
      <source>Hyphen</source>
      <translation>하이픈</translation>
    </message>
    <message>
      <source>Underscore</source>
      <translation>밑줄</translation>
    </message>
    <message>
      <source>Custom</source>
      <translation>사용자 설정</translation>
    </message>
    <message>
      <source>Fill Char:</source>
      <translation>채움 문자:</translation>
    </message>
    <message>
      <source>Delete All</source>
      <translation>전체 삭제</translation>
    </message>
    <message>
      <source>Indentation for first line of the paragraph</source>
      <translation>문단 첫 줄에서 들여쓰기</translation>
    </message>
    <message>
      <source>Indentation from the left for the whole paragraph</source>
      <translation>전체 문단의 왼쪽으로부터 들여쓰기</translation>
    </message>
    <message>
      <source>Delete all Tabulators</source>
      <translation>전체 탭키 삭제</translation>
    </message>
    <message>
      <source>None</source>
      <comment>tab fill</comment>
      <translation>탭 채움</translation>
    </message>
    <message>
      <source>Indentation from the right for the whole paragraph</source>
      <translation>전체 문단의 오른쪽에서 들여쓰기</translation>
    </message>
    <message>
      <source>Fill Character of Tab</source>
      <translation>탭 채움 문자</translation>
    </message>
    <message>
      <source>Type/Orientation of Tab</source>
      <translation>탭 형태/방향</translation>
    </message>
    <message>
      <source>Position of Tab</source>
      <translation>탭 위치</translation>
    </message>
    <message>
      <source>Period</source>
      <translation>피리어드</translation>
    </message>
  </context>
  <context>
    <name>TransformDialog</name>
    <message>
      <source>Scaling</source>
      <translation>비율</translation>
    </message>
    <message>
      <source>Translation</source>
      <translation>이동</translation>
    </message>
    <message>
      <source>Rotation</source>
      <translation>회전</translation>
    </message>
    <message>
      <source>Skewing</source>
      <translation>왜곡</translation>
    </message>
    <message>
      <source>Scale</source>
      <translation>비율</translation>
    </message>
    <message>
      <source>Scale H = %1 % V = %2 %</source>
      <translation> 비율 수직 = %1 % 수평 = %2 %</translation>
    </message>
    <message>
      <source>Translate</source>
      <translation>이동</translation>
    </message>
    <message>
      <source>Translate H = %1%2 V = %3%4</source>
      <translation>이동 H = %1%2 V = %3%4</translation>
    </message>
    <message>
      <source>Rotate</source>
      <translation>회전</translation>
    </message>
    <message>
      <source>Rotate Angle = %1%2</source>
      <translation>회전 각도 - %1%2</translation>
    </message>
    <message>
      <source>Skew</source>
      <translation>왜곡</translation>
    </message>
    <message>
      <source>Skew H = %1%2 V = %3%4</source>
      <translation>왜곡 H = %1%2 V = %3%4</translation>
    </message>
  </context>
  <context>
    <name>TransformDialogBase</name>
    <message>
      <source>Transform</source>
      <translation>변형</translation>
    </message>
    <message>
      <source>Add</source>
      <translation>더하기</translation>
    </message>
    <message>
      <source>Remove</source>
      <translation>삭제</translation>
    </message>
    <message>
      <source>u</source>
      <translation>u</translation>
    </message>
    <message>
      <source>d</source>
      <translation>d</translation>
    </message>
    <message>
      <source>Scaling</source>
      <translation>비율</translation>
    </message>
    <message>
      <source>Horizontal</source>
      <translation>수평</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Vertical</source>
      <translation>수직</translation>
    </message>
    <message>
      <source>Translation</source>
      <translation>이동</translation>
    </message>
    <message>
      <source>Rotate</source>
      <translation>회전</translation>
    </message>
    <message>
      <source>Angle</source>
      <translation>각도</translation>
    </message>
    <message>
      <source>Skew</source>
      <translation>왜곡</translation>
    </message>
    <message>
      <source>Origin</source>
      <translation>원본</translation>
    </message>
    <message>
      <source>Copies</source>
      <translation>복사</translation>
    </message>
  </context>
  <context>
    <name>TransformEffectPlugin</name>
    <message>
      <source>Transform...</source>
      <translation>객체 변형...</translation>
    </message>
    <message>
      <source>Transform Effect</source>
      <translation>객체 변형 효과</translation>
    </message>
    <message>
      <source>Apply multiple transformations at once</source>
      <translation>바로 다수 객체 변형 적용</translation>
    </message>
  </context>
  <context>
    <name>UnderlineValues</name>
    <message>
      <source>Auto</source>
      <translation>자동</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Displacement</source>
      <translation>변위</translation>
    </message>
    <message>
      <source>Linewidth</source>
      <translation>선 너비</translation>
    </message>
  </context>
  <context>
    <name>UndoManager</name>
    <message>
      <source>Add vertical guide</source>
      <translation>수직 안내선 더하기</translation>
    </message>
    <message>
      <source>Add horizontal guide</source>
      <translation>수평 안내선 더하기</translation>
    </message>
    <message>
      <source>Remove vertical guide</source>
      <translation>수직 안내선 제거</translation>
    </message>
    <message>
      <source>Remove horizontal guide</source>
      <translation>수평 안내선 제거</translation>
    </message>
    <message>
      <source>Move vertical guide</source>
      <translation>수직 안내선 이동</translation>
    </message>
    <message>
      <source>Move horizontal guide</source>
      <translation>수평 안내선 이동</translation>
    </message>
    <message>
      <source>Lock guides</source>
      <translation>안내선 잠금</translation>
    </message>
    <message>
      <source>Unlock guides</source>
      <translation>안내선 잠금 해제</translation>
    </message>
    <message>
      <source>Move</source>
      <translation>이동</translation>
    </message>
    <message>
      <source>Resize</source>
      <translation>크기 재설정</translation>
    </message>
    <message>
      <source>Rotate</source>
      <translation>회전</translation>
    </message>
    <message>
      <source>X1: %1, Y1: %2, %3
X2: %4, Y2: %5, %6</source>
      <translation>X1: %1, Y1: %2, %3
X2: %4, Y2: %5, %6</translation>
    </message>
    <message>
      <source>W1: %1, H1: %2
W2: %3, H2: %4</source>
      <translation>W1: %1, H1: %2
W2: %3, H2: %4</translation>
    </message>
    <message>
      <source>Selection</source>
      <translation>선택</translation>
    </message>
    <message>
      <source>Group</source>
      <translation>그룹</translation>
    </message>
    <message>
      <source>Selection/Group</source>
      <translation>선택/그룹</translation>
    </message>
    <message>
      <source>Create</source>
      <translation>생성</translation>
    </message>
    <message>
      <source>X: %1, Y: %2
W: %3, H: %4</source>
      <translation>X: %1, Y: %2
W: %3, H: %4</translation>
    </message>
    <message>
      <source>Align/Distribute</source>
      <translation>배열/배치</translation>
    </message>
    <message>
      <source>Items involved</source>
      <translation>포함된 객체</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>취소</translation>
    </message>
    <message>
      <source>Set fill color</source>
      <translation>채움 색상 설정</translation>
    </message>
    <message>
      <source>Color1: %1, Color2: %2</source>
      <translation>색상1: %1, 색상2: %2</translation>
    </message>
    <message>
      <source>Set fill color shade</source>
      <translation>채움 색상 음영 설정</translation>
    </message>
    <message>
      <source>Set line color</source>
      <translation>선 색상 설정</translation>
    </message>
    <message>
      <source>Set line color shade</source>
      <translation>선 색상 음영 설정</translation>
    </message>
    <message>
      <source>Flip horizontally</source>
      <translation>수평 거꾸로</translation>
    </message>
    <message>
      <source>Flip vertically</source>
      <translation>수직 거꾸로</translation>
    </message>
    <message>
      <source>Lock</source>
      <translation>잠금</translation>
    </message>
    <message>
      <source>Unlock</source>
      <translation>잠금 해제</translation>
    </message>
    <message>
      <source>Lock size</source>
      <translation>크기 잠금</translation>
    </message>
    <message>
      <source>Unlock size</source>
      <translation>크기 잠금 해제</translation>
    </message>
    <message>
      <source>Ungroup</source>
      <translation>그룹 해제</translation>
    </message>
    <message>
      <source>Delete</source>
      <translation>삭제</translation>
    </message>
    <message>
      <source>Rename</source>
      <translation>다른 이름으로</translation>
    </message>
    <message>
      <source>From %1
to %2</source>
      <translation>%1 에서 %2 로</translation>
    </message>
    <message>
      <source>Apply Master Page</source>
      <translation>마스터 페이지 적용</translation>
    </message>
    <message>
      <source>Paste</source>
      <translation>붙여넣기</translation>
    </message>
    <message>
      <source>Cut</source>
      <translation>잘라내기</translation>
    </message>
    <message>
      <source>Set fill color transparency</source>
      <translation>채움 색상 투명도 설정</translation>
    </message>
    <message>
      <source>Set line color transparency</source>
      <translation>선 색상 투명도 설정</translation>
    </message>
    <message>
      <source>Set line style</source>
      <translation>선 스타일 설정</translation>
    </message>
    <message>
      <source>Set the style of line end</source>
      <translation>선 끝 스타일 설정</translation>
    </message>
    <message>
      <source>Set the style of line join</source>
      <translation>선 결합 스타일 설정</translation>
    </message>
    <message>
      <source>Set line width</source>
      <translation>선 너비 설정</translation>
    </message>
    <message>
      <source>No style</source>
      <translation>스타일 없음</translation>
    </message>
    <message>
      <source>Set custom line style</source>
      <translation>사용자 지정 선 스타일 설정</translation>
    </message>
    <message>
      <source>Do not use custom line style</source>
      <translation>사용자 지정 선 스타일 사용 금지</translation>
    </message>
    <message>
      <source>Set start arrow</source>
      <translation>시작 화살표 설정</translation>
    </message>
    <message>
      <source>Set end arrow</source>
      <translation>끝 화살표 설정</translation>
    </message>
    <message>
      <source>Create table</source>
      <translation>표 생성</translation>
    </message>
    <message>
      <source>Rows: %1, Cols: %2</source>
      <translation>행: %1, 열: %2</translation>
    </message>
    <message>
      <source>Set font</source>
      <translation>글꼴 설정</translation>
    </message>
    <message>
      <source>Set font size</source>
      <translation>글꼴 크기 설정</translation>
    </message>
    <message>
      <source>Set font width</source>
      <translation>글꼴 너비 설정</translation>
    </message>
    <message>
      <source>Set font height</source>
      <translation>글꼴 높이 설정</translation>
    </message>
    <message>
      <source>Set font fill color</source>
      <translation>글꼴 채움 색상 설정</translation>
    </message>
    <message>
      <source>Set font stroke color</source>
      <translation>글꼴 윤곽선 색상</translation>
    </message>
    <message>
      <source>Set font fill color shade</source>
      <translation>글꼴 채움 색상 음영 설정</translation>
    </message>
    <message>
      <source>Set font stroke color shade</source>
      <translation>글꼴 외곽선 색상 음영 설정</translation>
    </message>
    <message>
      <source>Set kerning</source>
      <translation>돌출 설정</translation>
    </message>
    <message>
      <source>Set line spacing</source>
      <translation>선 여백 설정</translation>
    </message>
    <message>
      <source>Set paragraph style</source>
      <translation>문단 스타일 설정</translation>
    </message>
    <message>
      <source>Set language</source>
      <translation>언어 설정</translation>
    </message>
    <message>
      <source>Align text</source>
      <translation>텍스트 정렬</translation>
    </message>
    <message>
      <source>Set font effect</source>
      <translation>글꼴 효과 설정</translation>
    </message>
    <message>
      <source>Image frame</source>
      <translation>이미지 프레임</translation>
    </message>
    <message>
      <source>Text frame</source>
      <translation>텍스트 프레임</translation>
    </message>
    <message>
      <source>Polygon</source>
      <translation>다각형</translation>
    </message>
    <message>
      <source>Bezier curve</source>
      <translation>베지어 곡선</translation>
    </message>
    <message>
      <source>Polyline</source>
      <translation>n각형</translation>
    </message>
    <message>
      <source>Text on a Path</source>
      <translation>경로상 텍스트</translation>
    </message>
    <message>
      <source>Convert to</source>
      <translation>변환</translation>
    </message>
    <message>
      <source>Import SVG image</source>
      <translation>SVG 들여오기</translation>
    </message>
    <message>
      <source>Import EPS image</source>
      <translation>EPS 들여오기</translation>
    </message>
    <message>
      <source>Import OpenOffice.org Draw image</source>
      <translation>OpenOffice Draw 들여오기</translation>
    </message>
    <message>
      <source>Scratch space</source>
      <translation>스크래치 공간</translation>
    </message>
    <message>
      <source>Text flows around the frame</source>
      <translation>프레임 주변 텍스트 흐름</translation>
    </message>
    <message>
      <source>Text flows around bounding box</source>
      <translation>경계상자 주변 텍스트 흐름</translation>
    </message>
    <message>
      <source>Text flows around contour line</source>
      <translation>윤곽선 주변 텍스트 흐름</translation>
    </message>
    <message>
      <source>No text flow</source>
      <translation>텍스트 흐름 없음</translation>
    </message>
    <message>
      <source>No bounding box</source>
      <translation>경계상자 없음</translation>
    </message>
    <message>
      <source>No contour line</source>
      <translation>윤곽선 없음</translation>
    </message>
    <message>
      <source>Page %1</source>
      <translation>페이지 %1</translation>
    </message>
    <message>
      <source>Set image scaling</source>
      <translation>이미지 비율</translation>
    </message>
    <message>
      <source>Frame size</source>
      <translation>프레임 크기</translation>
    </message>
    <message>
      <source>Free scaling</source>
      <translation>자유 비율</translation>
    </message>
    <message>
      <source>Keep aspect ratio</source>
      <translation>종횡비 유지</translation>
    </message>
    <message>
      <source>Break aspect ratio</source>
      <translation>종횡비 임의값</translation>
    </message>
    <message>
      <source>Edit contour line</source>
      <translation>윤곽선 편집</translation>
    </message>
    <message>
      <source>Edit shape</source>
      <translation>도형 편집</translation>
    </message>
    <message>
      <source>Reset contour line</source>
      <translation>윤곽선 초기화</translation>
    </message>
    <message>
      <source>Add page</source>
      <translation>전체 페이지</translation>
    </message>
    <message>
      <source>Add pages</source>
      <translation>페이지 더하기</translation>
    </message>
    <message>
      <source>Delete page</source>
      <translation>페이지 삭제</translation>
    </message>
    <message>
      <source>Delete pages</source>
      <translation>페이지 삭제</translation>
    </message>
    <message>
      <source>Add layer</source>
      <translation>레어어 더하기</translation>
    </message>
    <message>
      <source>Delete layer</source>
      <translation>레이어 삭제</translation>
    </message>
    <message>
      <source>Rename layer</source>
      <translation>레이어명 재부여</translation>
    </message>
    <message>
      <source>Raise layer</source>
      <translation>레이어 위로</translation>
    </message>
    <message>
      <source>Lower layer</source>
      <translation>아래 레이어</translation>
    </message>
    <message>
      <source>Send to layer</source>
      <translation>레이어로 보내기</translation>
    </message>
    <message>
      <source>Enable printing of layer</source>
      <translation>레이어 출력 가능</translation>
    </message>
    <message>
      <source>Disable printing of layer</source>
      <translation>레이어 출력 불가</translation>
    </message>
    <message>
      <source>Change name of the layer</source>
      <translation>레이어명 변경</translation>
    </message>
    <message>
      <source>Get image</source>
      <translation>이미지 가져오기</translation>
    </message>
    <message>
      <source>Change Image Offset</source>
      <translation>이미지 옵셋 변경</translation>
    </message>
    <message>
      <source>Change Image Scale</source>
      <translation>이미지 비율 변경</translation>
    </message>
    <message>
      <source>X1: %1, Y1: %2
X2: %4, Y2: %5</source>
      <translation>X1: %1, Y1: %2
X2: %4, Y2: %5</translation>
    </message>
    <message>
      <source>X: %1, Y: %2
X: %4, Y: %5</source>
      <translation>X: %1, Y: %2
X: %4, Y: %5</translation>
    </message>
    <message>
      <source>Enable Item Printing</source>
      <translation>객체 출력 가능</translation>
    </message>
    <message>
      <source>Disable Item Printing</source>
      <translation>객체 출력 불가</translation>
    </message>
    <message>
      <source>Multiple duplicate</source>
      <translation>다수 복제</translation>
    </message>
    <message>
      <source>Apply text style</source>
      <translation>텍스트 스타일 적용</translation>
    </message>
    <message>
      <source>&amp;Undo: %1</source>
      <comment>f.e. Undo: Move</comment>
      <translation>이전작업(&amp;U): %1</translation>
    </message>
    <message>
      <source>&amp;Undo</source>
      <translation>이전작업(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Redo: %1</source>
      <comment>f.e. Redo: Move</comment>
      <translation>재실행(&amp;R): %1</translation>
    </message>
    <message>
      <source>&amp;Redo</source>
      <translation>재실행(&amp;R)</translation>
    </message>
    <message>
      <source>No object frame</source>
      <translation>객체 프레임 없음</translation>
    </message>
    <message>
      <source>Reset control point</source>
      <translation>조절점 초기화</translation>
    </message>
    <message>
      <source>Reset control points</source>
      <translation>조절점 초기화</translation>
    </message>
    <message>
      <source>Apply image effects</source>
      <translation>이미지 효과 적용</translation>
    </message>
    <message>
      <source>Insert frame</source>
      <translation>프레임 삽입</translation>
    </message>
    <message>
      <source>Adjust frame to the image size</source>
      <translation>프레임을 이미지 크기로 조정</translation>
    </message>
    <message>
      <source>Set start and end arrows</source>
      <translation>시작과 끝 화살표 설정</translation>
    </message>
    <message>
      <source>Remove vertical auto guide</source>
      <translation>수직 자동 안내선 제거</translation>
    </message>
    <message>
      <source>Remove horizontal auto guide</source>
      <translation>수평 자동 안내선 제거</translation>
    </message>
    <message>
      <source>Text flows around image clipping path</source>
      <translation>이미지 자름 경로를 따라 텍스트 흐름</translation>
    </message>
    <message>
      <source>Remove all guides</source>
      <translation>전체 안내선 제거</translation>
    </message>
    <message>
      <source>Remove page guides</source>
      <translation>페이지 안내선 제거</translation>
    </message>
    <message>
      <source>Copy</source>
      <translation>복사</translation>
    </message>
    <message>
      <source>Copy page</source>
      <translation>페이지 복사</translation>
    </message>
    <message>
      <source>Convert to outlines</source>
      <translation>윤곽선으로 변환</translation>
    </message>
    <message>
      <source>Change formula</source>
      <translation>공식규격 변경</translation>
    </message>
    <message>
      <source>Import AI drawing</source>
      <translation>AI 들여오기</translation>
    </message>
    <message>
      <source>Import XFig drawing</source>
      <translation>XFig 들여오기</translation>
    </message>
    <message>
      <source>Render frame</source>
      <translation>렌더 프레임</translation>
    </message>
    <message>
      <source>Import Barcode</source>
      <translation>바코드 들여오기</translation>
    </message>
    <message>
      <source>Duplicate layer %1</source>
      <translation>레이어 복제 %1</translation>
    </message>
  </context>
  <context>
    <name>UndoPalette</name>
    <message>
      <source>Initial State</source>
      <translation>초기 상태</translation>
    </message>
    <message>
      <source>Action History</source>
      <translation>작업내역</translation>
    </message>
    <message>
      <source>Show selected object only</source>
      <translation>선택된 객체만 보이기</translation>
    </message>
    <message>
      <source>&amp;Undo</source>
      <translation>이전작업(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Redo</source>
      <translation>재실행(&amp;R)</translation>
    </message>
    <message>
      <source>Show the action history for the selected item only. This changes the effect of the undo/redo buttons to act on the object or document.</source>
      <translation>선택된 객체만을 위해 작업이력을 나타냅니다. 이것은 객체 또는 문서를 작동시키기 위한 이전작업/재실행 버튼의 효과를 변경시킵니다.</translation>
    </message>
    <message>
      <source>Undo the last action for either the current object or the document</source>
      <translation>현재 객체나 문서의 마지막 작업으로 되돌립니다</translation>
    </message>
    <message>
      <source>Redo the last action for either the current object or the document</source>
      <translation>현재 객체나 문서의 마지막 작업을 재실행합니다</translation>
    </message>
  </context>
  <context>
    <name>UndoWidget</name>
    <message>
      <source>%1: %2</source>
      <comment>undo target: action (f.e. Text frame: Resize)</comment>
      <translation>%1: %2</translation>
    </message>
  </context>
  <context>
    <name>UnicodeChooseButton</name>
    <message>
        <location filename="../unicodesearch.cpp" line="47"/>
        <source>&amp;Search</source>
       <translation>찾기(&amp;S)</translation>
    </message>
</context>
  <context>
    <name>UnicodeSearch</name>
    <message>
      <source>Unicode Search</source>
      <translation>유니코드 찾기</translation>
    </message>
    <message>
      <source>&amp;Search:</source>
      <translation>찾기(&amp;S):</translation>
    </message>
  </context>
  <context>
    <name>UpgradeChecker</name>
    <message>
      <source>Attempting to get the Scribus version update file</source>
      <translation>Scribus 업데이트 파일을 얻기 위하여 시도 중</translation>
    </message>
    <message>
      <source>(No data on your computer will be sent to an external location)</source>
      <translation>(컴퓨터상의 어떠한 자료도 외부로 결코 내보내지 않습니다)</translation>
    </message>
    <message>
      <source>Timed out when attempting to get update file.</source>
      <translation>업데이트 파일을 얻는 동안 시간이 종료되었습니다.</translation>
    </message>
    <message>
      <source>File not found on server</source>
      <translation>서버에서 파일을 찾을 수 없습니다</translation>
    </message>
    <message>
      <source>Could not open version file: %1
Error:%2 at line: %3, row: %4</source>
      <translation>열수 없는 버전 파일: %1 
오류: %2 행: %3 열: %4</translation>
    </message>
    <message>
      <source>An error occurred while looking for updates for Scribus, please check your internet connection.</source>
      <translation>Scribus 업데이트시 오류가 생겼습니다. 인터넷 연결을 확인하세요.</translation>
    </message>
    <message>
      <source>No updates are available for your version of Scribus %1</source>
      <translation>Scribus (%1)에서 업데이트가 없습니다</translation>
    </message>
    <message>
      <source>One or more updates for your version of Scribus (%1) are available:</source>
      <translation>Scribus (%1)에서 한 개 이상의 업데이트가 가능합니다.:</translation>
    </message>
    <message>
      <source>Please visit www.scribus.net for details.</source>
      <translation>자세한 것은 http://www.scribus.net 방문하시오.</translation>
    </message>
    <message>
      <source>Finished</source>
      <translation>종료</translation>
    </message>
    <message>
      <source>Operation canceled</source>
      <translation>취소된 작업</translation>
    </message>
    <message>
      <source>This list may contain development/unstable versions.</source>
      <translation>이 목록은 개발 및 불안전한 버전을 포함합니다.</translation>
    </message>
    <message>
      <source>Error: %1</source>
      <translation>오류: %1</translation>
    </message>
  </context>
  <context>
    <name>UrlLauncher</name>
    <message>
      <source>Locate your web browser</source>
      <translation>실행 웹 브라우저 위치</translation>
    </message>
    <message>
      <source>External Web Browser Failed to Start</source>
      <translation>외부 웹 브라우저 시작 오류</translation>
    </message>
    <message>
      <source>Scribus was not able to start the external web browser application %1. Please check the setting in Preferences.
Would you like to start the system's default browser instead?</source>
      <translation>Scribus는 외부 웹 프라우저 응용프로그램 %1을 시작할 수 없습니다. 기본설정의 설정을 체크하세요.</translation>
    </message>
  </context>
  <context>
    <name>UsePrinterMarginsDialog</name>
    <message>
      <source>Use Printer Margins</source>
      <translation>사용 프린터 여백</translation>
    </message>
    <message>
      <source>Select &amp;Printer:</source>
      <translation>프린터 선택(&amp;P):</translation>
    </message>
    <message>
      <source>Margins</source>
      <translation>여백</translation>
    </message>
    <message>
      <source>&amp;Right:</source>
      <translation>오른쪽(&amp;R):</translation>
    </message>
    <message>
      <source>&amp;Top:</source>
      <translation>위(&amp;T):</translation>
    </message>
    <message>
      <source>&amp;Bottom:</source>
      <translation>아래(&amp;B):</translation>
    </message>
    <message>
      <source>&amp;Left:</source>
      <translation>왼쪽(&amp;L):</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>확인(&amp;O)</translation>
    </message>
    <message>
      <source>Alt+O</source>
      <translation>Alt+O</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>취소(&amp;C)</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
  </context>
  <context>
    <name>WMFImport</name>
    <message>
      <source>Group%1</source>
      <translation>그룹 %1</translation>
    </message>
  </context>
  <context>
    <name>WMFImportPlugin</name>
    <message>
      <source>Import &amp;WMF...</source>
      <translation>WMF 들여오기...(&amp;W)</translation>
    </message>
    <message>
      <source>Imports WMF Files</source>
      <translation>WMF 파일 들여오기</translation>
    </message>
    <message>
      <source>Imports most WMF files into the current document,
converting their vector data into Scribus objects.</source>
      <translation>대부분 WMF 파일들을 현재 문서로 들여와, 벡터 자료를 Scribus 객체로 변환 시킵니다.</translation>
    </message>
    <message>
      <source>The file could not be imported</source>
      <translation>파일을 들여올 수 없습니다</translation>
    </message>
    <message>
      <source>WMF file contains some unsupported features</source>
      <translation>WMF 파일이 지원하지 않는 특성을 포함합니다</translation>
    </message>
  </context>
  <context>
    <name>XfigPlug</name>
    <message>
      <source>Importing: %1</source>
      <translation>들여오는 중: %1</translation>
    </message>
    <message>
      <source>Analyzing File:</source>
      <translation>파일 분석 중:</translation>
    </message>
    <message>
      <source>Group%1</source>
      <translation>그룹%1</translation>
    </message>
    <message>
      <source>Generating Items</source>
      <translation>객체 생성 중</translation>
    </message>
  </context>
  <context>
    <name>gtFileDialog</name>
    <message>
      <source>Open</source>
      <translation>열기</translation>
    </message>
    <message>
      <source>&amp;Importer:</source>
      <translation>확장자(&amp;I):</translation>
    </message>
    <message>
      <source>Import &amp;Text Only</source>
      <translation>텍스트만 들여오기(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;Encoding:</source>
      <translation>암호화(&amp;E):</translation>
    </message>
  </context>
  <context>
    <name>gtImporterDialog</name>
    <message>
      <source>Choose the importer to use</source>
      <translation>이용 가능한 확장자 선택</translation>
    </message>
    <message>
      <source>Remember association</source>
      <translation>확장자 기억</translation>
    </message>
    <message>
      <source>Remember the file extension - importer association and do not ask again to select an importer for files of this type.</source>
      <translation>읽을 때 파일확장자를 기억하여 이 파일형식의 확장자 선택을 다시 묻지 않습니다.</translation>
    </message>
  </context>
  <context>
    <name>hysettingsBase</name>
    <message>
      <source>Form</source>
      <translation>양식</translation>
    </message>
    <message>
      <source>General Options</source>
      <translation>일반 설정</translation>
    </message>
    <message>
      <source>A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</source>
      <translation>하이픈 텍스트 옵션에서 기타를 사용시 각 단어의 전체 가능한 하이픈이 나타나는 대화창이 보입니다.</translation>
    </message>
    <message>
      <source>&amp;Hyphenation Suggestions</source>
      <translation>하이픈 제시(&amp;H)</translation>
    </message>
    <message>
      <source>Enables automatic hyphenation of your text while typing.</source>
      <translation>입력시 자동으로 하이픈 입력 가능</translation>
    </message>
    <message>
      <source>Hyphenate Text Automatically &amp;During Typing</source>
      <translation>입력시 자동으로 텍스트에 하이픈 삽입(&amp;D)</translation>
    </message>
    <message>
      <source>Behaviour</source>
      <translation>실행</translation>
    </message>
    <message>
      <source>&amp;Language:</source>
      <translation>언어(&amp;L):</translation>
    </message>
    <message>
      <source>&amp;Smallest Word:</source>
      <translation>가장 작은 단어(&amp;S):</translation>
    </message>
    <message>
      <source>Length of the smallest word to be hyphenated.</source>
      <translation>하이픈되는 가장 작은 단어의 길이</translation>
    </message>
    <message>
      <source>Chars</source>
      <translation>문자</translation>
    </message>
    <message>
      <source>Consecutive Hyphenations &amp;Allowed:</source>
      <translation>연속 하이픈 허용(&amp;A):</translation>
    </message>
    <message>
      <source>Maximum number of Hyphenations following each other.
A value of 0 means unlimited hyphenations.</source>
      <translation>하이픈의 최대 갯수로 0은 무제한 하이픈을 의미</translation>
    </message>
    <message>
      <source>Exceptions</source>
      <translation>예외</translation>
    </message>
    <message>
      <source>Edit</source>
      <translation>편집</translation>
    </message>
    <message>
      <source>Ignore List</source>
      <translation>목록 무시</translation>
    </message>
  </context>
  <context>
    <name>nftdialog</name>
    <message>
      <source>New From Template</source>
      <translation>서식에서 새로이</translation>
    </message>
    <message>
      <source>&amp;About</source>
      <translation>Scribus에 대하여(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;Image</source>
      <translation>이미지(&amp;I)</translation>
    </message>
    <message>
      <source>&amp;Help</source>
      <translation>도움말(&amp;H)</translation>
    </message>
  </context>
  <context>
    <name>replaceColorDialog</name>
    <message>
      <source>Replace Color</source>
      <translation>색상 치환</translation>
    </message>
    <message>
      <source>Replace:</source>
      <translation>치환:</translation>
    </message>
    <message>
      <source>with:</source>
      <translation>로:</translation>
    </message>
  </context>
  <context>
    <name>replaceColorsDialog</name>
    <message>
      <source>Replace Colors</source>
      <translation>색상 치환</translation>
    </message>
    <message>
      <source>Add ...</source>
      <translation>더하기...</translation>
    </message>
    <message>
      <source>Remove</source>
      <translation>제거</translation>
    </message>
    <message>
      <source>Edit...</source>
      <translation>편집...</translation>
    </message>
  </context>
  <context>
    <name>satdialog</name>
    <message>
      <source>Save as Template</source>
      <translation>서식으로 저장</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>이름</translation>
    </message>
    <message>
      <source>Category</source>
      <translation>카테고리</translation>
    </message>
    <message>
      <source>Page Size</source>
      <translation>페이지 크기</translation>
    </message>
    <message>
      <source>Colors</source>
      <translation>색상</translation>
    </message>
    <message>
      <source>Description</source>
      <translation>서술</translation>
    </message>
    <message>
      <source>Usage</source>
      <translation>사용법</translation>
    </message>
    <message>
      <source>Author</source>
      <translation>저자</translation>
    </message>
    <message>
      <source>Email</source>
      <translation>이메일</translation>
    </message>
    <message>
      <source>&amp;More Details</source>
      <translation>더 자세히(&amp;M)</translation>
    </message>
  </context>
  <context>
    <name>selectDialog</name>
    <message>
      <source>Select Objects</source>
      <translation>객체 선택</translation>
    </message>
    <message>
      <source>on current Page</source>
      <translation>현재 페이지</translation>
    </message>
    <message>
      <source>on current Layer</source>
      <translation>현재 레이어</translation>
    </message>
    <message>
      <source>on the Scratch Space</source>
      <translation>스크래치 공간</translation>
    </message>
    <message>
      <source>Select by</source>
      <translation>선택</translation>
    </message>
    <message>
      <source>Object Type</source>
      <translation>객체 형태</translation>
    </message>
    <message>
      <source>Text Frame</source>
      <translation>테스트 프레임</translation>
    </message>
    <message>
      <source>Image Frame</source>
      <translation>이미지 프레임</translation>
    </message>
    <message>
      <source>Shape</source>
      <translation>도형</translation>
    </message>
    <message>
      <source>Polyline</source>
      <translation>다각형</translation>
    </message>
    <message>
      <source>Line</source>
      <translation>선</translation>
    </message>
    <message>
      <source>Render Frame</source>
      <translation>렌더 프레임</translation>
    </message>
    <message>
      <source>Fill Color</source>
      <translation>채움 색상</translation>
    </message>
    <message>
      <source>Line Color</source>
      <translation>선 색상</translation>
    </message>
    <message>
      <source>Line Width</source>
      <translation>선 너비</translation>
    </message>
    <message>
      <source>Printable</source>
      <translation>출력가능</translation>
    </message>
    <message>
      <source>Yes</source>
      <translation>예</translation>
    </message>
    <message>
      <source>No</source>
      <translation>아니오</translation>
    </message>
    <message>
      <source>Locked</source>
      <translation>잠금</translation>
    </message>
    <message>
      <source>Resizeable</source>
      <translation>크기 재설정</translation>
    </message>
  </context>
  <context>
    <name>tfDia</name>
    <message>
      <source>Create filter</source>
      <translation>필터 생성</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>제거(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>삭제(&amp;D)</translation>
    </message>
    <message>
      <source>Choose a previously saved filter</source>
      <translation>이전에 저장된 필터를 선택</translation>
    </message>
    <message>
      <source>Give a name to this filter for saving</source>
      <translation>저장하기 위해 필터명 쓰기</translation>
    </message>
    <message>
      <source>Give a name for saving</source>
      <translation>저장 파일명을 쓰기</translation>
    </message>
  </context>
  <context>
    <name>tfFilter</name>
    <message>
      <source>Disable or enable this filter row</source>
      <translation>이 필터행의 사용 또는 불가</translation>
    </message>
    <message>
      <source>Remove this filter row</source>
      <translation>이 필터행 제거하기</translation>
    </message>
    <message>
      <source>Add a new filter row</source>
      <translation>새로운 필터 행 더하기</translation>
    </message>
    <message>
      <source>to</source>
      <translation>로</translation>
    </message>
    <message>
      <source>and</source>
      <translation>그리고/와</translation>
    </message>
    <message>
      <source>remove match</source>
      <translation>일치하는 것을 제거합니다</translation>
    </message>
    <message>
      <source>do not remove match</source>
      <translation>일치하는 것을 제거하지 않습니다</translation>
    </message>
    <message>
      <source>words</source>
      <translation>단어</translation>
    </message>
    <message>
      <source>Remove</source>
      <translation>제거</translation>
    </message>
    <message>
      <source>Replace</source>
      <translation>치환</translation>
    </message>
    <message>
      <source>Apply</source>
      <translation>적용</translation>
    </message>
    <message>
      <source>Value at the left is a regular expression</source>
      <translation>왼쪽값은 정규식입니다</translation>
    </message>
    <message>
      <source>with</source>
      <translation>와</translation>
    </message>
    <message>
      <source>paragraph style</source>
      <translation>문단 형태</translation>
    </message>
    <message>
      <source>all instances of</source>
      <translation>전체 경우</translation>
    </message>
    <message>
      <source>all paragraphs</source>
      <translation>전체 문단</translation>
    </message>
    <message>
      <source>paragraphs starting with</source>
      <translation>시작 문단</translation>
    </message>
    <message>
      <source>paragraphs with less than</source>
      <translation>이하의 문단</translation>
    </message>
    <message>
      <source>paragraphs with more than</source>
      <translation>이상의 문단</translation>
    </message>
  </context>
</TS>
