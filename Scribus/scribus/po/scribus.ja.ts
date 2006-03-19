<!DOCTYPE TS>
<TS>
  <context>
    <name></name>
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
                        unit, pagesType, firstPageOrder) -> bool

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

The values for width, height and the margins are expressed in the given unit
for the document. PAPER_* constants are expressed in points. If your document
is not in points, make sure to account for this.

example: newDocument(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 7, UNIT_POINTS,
PAGE_4, 3)

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
      <source>importSVG(&quot;string&quot;)

The &quot;string&quot; must be a valid filename for a SVG image. The text
must be UTF8 encoded or 'unicode' string(recommended).
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
      <source>defineColor(&quot;name&quot;, c, m, y, k)

Defines a new color &quot;name&quot;. The color Value is defined via four components:
c = Cyan, m = Magenta, y = Yello and k = Black. Color components should be in
the range from 0 to 255.

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
      <source>fileDialog(&quot;caption&quot;, [&quot;filter&quot;, &quot;defaultname&quot;, haspreview, issave, isdir]) -> string with filename

Shows a File Open dialog box with the caption &quot;caption&quot;. Files are filtered
with the filter string &quot;filter&quot;. A default filename or file path can also
supplied, leave this string empty when you don't want to use it.  A value of
True for haspreview enables a small preview widget in the FileSelect box.  When
the issave parameter is set to True the dialog acts like a &quot;Save As&quot; dialog
otherwise it acts like a &quot;File Open Dialog&quot;. When the isdir parameter is True
the dialog shows and returns only directories. The default for all of the
opional parameters is False.

The filter, if specified, takes the form 'comment (*.type *.type2 ...)'.
For example 'Images (*.png *.xpm *.jpg)'.

Refer to the Qt-Documentation for QFileDialog for details on filters.

Example: fileDialog('Open input', 'CSV files (*.csv)')
Example: fileDialog('Save report', defaultname='report.txt', issave=True)
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
      <source>saveDocAs(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -> bool

Sets the document information. &quot;Author&quot;, &quot;Info&quot;, &quot;Description&quot; are
strings.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>setMargins(lr, rr, tr, br)

Sets the margins of the document, Left(lr), Right(rr), Top(tr) and Bottom(br)
margins are given in the measurement units of the document - see UNIT_&lt;type>
constants.
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
      <source>getLineJoin([&quot;name&quot;]) -> integer (see contants)

Returns the line join style of the object &quot;name&quot;. If &quot;name&quot; is not given
the currently selected item is used.  The join types are:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND
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
      <source>getCornerRadius([&quot;name&quot;]) -> integer

Returns the corner radius of the object &quot;name&quot;. The radius isexpressed in points. If &quot;name&quot; is not given the currentlyselected item is used.
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
      <source>getPosition([&quot;name&quot;]) -> (x,y)

Returns a (x, y) tuple with the position of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.The position is expressed in the actual measurement unit of the document
- see UNIT_&lt;type> for reference.
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
      <source>getChildren(object, ofclass=None, ofname=None, regexpmatch=False, recursive=True)

Return a list of children of `object', possibly restricted to children
of class named `ofclass' or children named `ofname'. If `recursive' is true,
search recursively through children, grandchildren, etc.

See QObject::children() in the Qt docs for more information.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>getChild(object, childname, ofclass=None, recursive=True)

Return the first child of `object' named `childname', possibly restricting
the search to children of type name `ofclass'. If `recursive' is true,
search recursively through children, grandchildren, etc.
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
      <source>rotateObject(rot [, &quot;name&quot;])

Rotates the object &quot;name&quot; by &quot;rot&quot; degrees relatively. The object is
rotated by the vertex that is currently selected as the rotation point - by
default, the top left vertext at zero rotation. Positive values mean counter
clockwise rotation when the default rotation point is used. If &quot;name&quot; is not
given the currently selected item is used.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>rotateObjectAbs(rot [, &quot;name&quot;])

Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positve values
mean counter clockwise rotation. If &quot;name&quot; is not given the currently
selected item is used.
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
      <source>setLayerPrintable(&quot;layer&quot;, printable)

Sets the layer &quot;layer&quot; to be printable or not. If is the printable set to
false the layer won't be printed.

May raise NotFoundError if the layer can't be found.
May raise ValueError if the layer name isn't acceptable.
</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>isLayerPrintable(&quot;layer&quot;) -> bool

Returns whether the layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

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
      <source>textFlowsAroundFrame(&quot;name&quot; [, state])

Enables/disables &quot;Text Flows Around Frame&quot; feature for object &quot;name&quot;.
Called with parameters string name and optional boolean &quot;state&quot;. If &quot;state&quot;
is not passed, text flow is toggled.
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
      <source>gotoPage(nr)

Moves to the page &quot;nr&quot; (that is, makes the current page &quot;nr&quot;). Note that
gotoPage doesn't (curently) change the page the user's view is displaying, it
just sets the page that script commands will operates on.

May raise IndexError if the page number is out of range.
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
      <source>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame &quot;name&quot;.
Text must be UTF encoded (see setText() as reference) The first character has an
index of 0. Inserting at position -1 appends text to the frame. If &quot;name&quot; is
not given the currently selected Item is used.

May throw IndexError for an insertion out of bounds.
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
      <source>setPDFBookmark(&quot;toggle&quot;, [&quot;name&quot;])

Sets wether (toggle = 1) the text frame &quot;name&quot; is a bookmark nor not.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
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
  </context>
  <context>
    <name>About</name>
    <message>
      <source>About Scribus %1</source>
      <translation>Scribusについて %1</translation>
    </message>
    <message>
      <source>January</source>
      <translation>January</translation>
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
      <translation>Ghostscriptバージョン %1 を使用</translation>
    </message>
    <message>
      <source>No Ghostscript version available</source>
      <translation>利用可能なGhostscriptのバージョンはありません</translation>
    </message>
    <message>
      <source>&lt;b>Scribus Version %1&lt;/b>&lt;p>%2&lt;br/>%3 %4&lt;br/>%5&lt;/p></source>
      <translation>&lt;b>Scribusバージョン %1&lt;/b>&lt;p>%2&lt;br/>%3 %4&lt;br/>%5&lt;/p></translation>
    </message>
    <message>
      <source>Build ID:</source>
      <translation>ビルドID:</translation>
    </message>
    <message>
      <source>&amp;About</source>
      <translation>バージョン情報(&amp;A)</translation>
    </message>
    <message>
      <source>Development Team:</source>
      <translation>開発チーム:</translation>
    </message>
    <message>
      <source>Contributions from:</source>
      <translation>貢献者:</translation>
    </message>
    <message>
      <source>Mac OS&amp;#174; X Aqua Port:</source>
      <translation>Mac OS&amp;#174; X Aqua 移植:</translation>
    </message>
    <message>
      <source>Windows&amp;#174; Port:</source>
      <translation>Windows&amp;#174; 移植:</translation>
    </message>
    <message>
      <source>Official Documentation:</source>
      <translation>オフィシャルなドキュメント担当者:</translation>
    </message>
    <message>
      <source>Other Documentation:</source>
      <translation>その他のドキュメント担当者:</translation>
    </message>
    <message>
      <source>A&amp;uthors</source>
      <translation>作者(&amp;U)</translation>
    </message>
    <message>
      <source>Official Translations and Translators:</source>
      <translation>オフィシャルな翻訳並びに翻訳者:</translation>
    </message>
    <message>
      <source>Previous Translation Contributors:</source>
      <translation>以前の翻訳の貢献者:</translation>
    </message>
    <message>
      <source>&amp;Translations</source>
      <translation>翻訳(&amp;T)</translation>
    </message>
    <message>
      <source>Homepage</source>
      <translation>ホームページ</translation>
    </message>
    <message>
      <source>Online Reference</source>
      <translation>オンラインリファレンス</translation>
    </message>
    <message>
      <source>Wiki</source>
      <translation>Wiki</translation>
    </message>
    <message>
      <source>Bugs and Feature Requests</source>
      <translation>バグや機能の要望</translation>
    </message>
    <message>
      <source>Mailing List</source>
      <translation>メーリングリスト</translation>
    </message>
    <message>
      <source>&amp;Online</source>
      <translation>オンライン(&amp;O)</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>閉じる(&amp;C)</translation>
    </message>
    <message>
      <source>This panel shows the version, build date and compiled in library support in Scribus. The C-C-T-F equates to C=littlecms C=CUPS T=TIFF support F=Fontconfig support. Last Letter is the renderer C=cairo or A=libart Missing library support is indicated by a *. This also indicates the version of Ghostscript which Scribus has detected.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>AboutPlugins</name>
    <message>
      <source>Yes</source>
      <translation>はい</translation>
    </message>
    <message>
      <source>No</source>
      <translation>いいえ</translation>
    </message>
  </context>
  <context>
    <name>AboutPluginsBase</name>
    <message>
      <source>Scribus: About Plug-ins</source>
      <translation>Scribus: プラグインについて</translation>
    </message>
    <message>
      <source>File Name:</source>
      <translation>ファイル名:</translation>
    </message>
    <message>
      <source>Version:</source>
      <translation>バージョン:</translation>
    </message>
    <message>
      <source>Enabled:</source>
      <translation>有効:</translation>
    </message>
    <message>
      <source>Release Date:</source>
      <translation>リリース日時:</translation>
    </message>
    <message>
      <source>Copyright:</source>
      <translation>著作権:</translation>
    </message>
    <message>
      <source>Author(s):</source>
      <translation>作者:</translation>
    </message>
    <message>
      <source>Description:</source>
      <translation>詳細:</translation>
    </message>
    <message>
      <source>License:</source>
      <translation>ライセンス:</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>閉じる(&amp;C)</translation>
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
      <translation>新規(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Open...</source>
      <translation>開く(&amp;O)...</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>閉じる(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>保存(&amp;S)</translation>
    </message>
    <message>
      <source>Save &amp;As...</source>
      <translation>名前を付けて保存(&amp;A)...</translation>
    </message>
    <message>
      <source>Re&amp;vert to Saved</source>
      <translation>保存した状態に戻す(&amp;V)</translation>
    </message>
    <message>
      <source>Collect for O&amp;utput...</source>
      <translation>まとめて出力(&amp;U)...</translation>
    </message>
    <message>
      <source>Get Text...</source>
      <translation>テキストを取得...</translation>
    </message>
    <message>
      <source>Append &amp;Text...</source>
      <translation>テキストを追加(&amp;T)...</translation>
    </message>
    <message>
      <source>Get Image...</source>
      <translation>画像を取得...</translation>
    </message>
    <message>
      <source>Save &amp;Text...</source>
      <translation>テキストを保存(&amp;T)...</translation>
    </message>
    <message>
      <source>Save Page as &amp;EPS...</source>
      <translation>EPS形式でページを保存(&amp;E)...</translation>
    </message>
    <message>
      <source>Save as P&amp;DF...</source>
      <translation>PDF形式で保存(&amp;D)...</translation>
    </message>
    <message>
      <source>Document &amp;Setup...</source>
      <translation>ドキュメント設定(&amp;S)...</translation>
    </message>
    <message>
      <source>&amp;Print...</source>
      <translation>印刷(&amp;P)...</translation>
    </message>
    <message>
      <source>Print Previe&amp;w</source>
      <translation>印刷プレビュー(&amp;W)</translation>
    </message>
    <message>
      <source>&amp;Quit</source>
      <translation>終了(&amp;Q)</translation>
    </message>
    <message>
      <source>&amp;Undo</source>
      <translation>元に戻す(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Redo</source>
      <translation>やり直し(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Item Action Mode</source>
      <translation>アイテムアクションモード(&amp;I)</translation>
    </message>
    <message>
      <source>Cu&amp;t</source>
      <translation>切り取り(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>コピー(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation>貼り付け(&amp;P)</translation>
    </message>
    <message>
      <source>C&amp;lear Contents</source>
      <translation>内容をクリア(&amp;L)</translation>
    </message>
    <message>
      <source>Select &amp;All</source>
      <translation>全て選択(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;Deselect All</source>
      <translation>全てを選択解除(&amp;D)</translation>
    </message>
    <message>
      <source>&amp;Search/Replace...</source>
      <translation>検索/置換(&amp;S)...</translation>
    </message>
    <message>
      <source>Edit Image...</source>
      <translation>画像を編集...</translation>
    </message>
    <message>
      <source>C&amp;olors...</source>
      <translation>色(&amp;O)...</translation>
    </message>
    <message>
      <source>&amp;Paragraph Styles...</source>
      <translation>段落スタイル(&amp;P)...</translation>
    </message>
    <message>
      <source>&amp;Line Styles...</source>
      <translation>線スタイル(&amp;L)...</translation>
    </message>
    <message>
      <source>&amp;Master Pages...</source>
      <translation>マスターページ(&amp;M)...</translation>
    </message>
    <message>
      <source>&amp;JavaScripts...</source>
      <translation>Javascript(&amp;J)...</translation>
    </message>
    <message>
      <source>P&amp;references...</source>
      <translation>設定(&amp;R)...</translation>
    </message>
    <message>
      <source>%1 pt</source>
      <translation>%1 pt</translation>
    </message>
    <message>
      <source>&amp;Other...</source>
      <translation>その他(&amp;O)...</translation>
    </message>
    <message>
      <source>&amp;Left</source>
      <translation>左(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Center</source>
      <translation>中央(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Right</source>
      <translation>右(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Block</source>
      <translation>ブロック(&amp;B)</translation>
    </message>
    <message>
      <source>&amp;Forced</source>
      <translation>強制(&amp;F)</translation>
    </message>
    <message>
      <source>&amp;%1 %</source>
      <translation>&amp;%1 %</translation>
    </message>
    <message>
      <source>&amp;Normal</source>
      <translation>標準(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Underline</source>
      <translation>下線(&amp;U)</translation>
    </message>
    <message>
      <source>Underline &amp;Words</source>
      <translation>ワードに下線を引く</translation>
    </message>
    <message>
      <source>&amp;Strike Through</source>
      <translation>取り消し線(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;All Caps</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Small &amp;Caps</source>
      <translation>スモールキャピタル(&amp;C)</translation>
    </message>
    <message>
      <source>Su&amp;perscript</source>
      <translation>上付き文字(&amp;P)</translation>
    </message>
    <message>
      <source>Su&amp;bscript</source>
      <translation>下付き文字(&amp;B)</translation>
    </message>
    <message>
      <source>&amp;Outline</source>
      <translation>アウトライン(&amp;O)</translation>
    </message>
    <message>
      <source>S&amp;hadow</source>
      <translation>影(&amp;H)</translation>
    </message>
    <message>
      <source>&amp;Image Effects</source>
      <translation>画像のエフェクト(&amp;I)</translation>
    </message>
    <message>
      <source>&amp;Tabulators...</source>
      <translation>タブ(&amp;T)...</translation>
    </message>
    <message>
      <source>D&amp;uplicate</source>
      <translation>複製(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Multiple Duplicate</source>
      <translation>複数コピー(&amp;M)</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>削除(&amp;D)</translation>
    </message>
    <message>
      <source>&amp;Group</source>
      <translation>グループ化(&amp;G)</translation>
    </message>
    <message>
      <source>&amp;Ungroup</source>
      <translation>グループ解除(&amp;U)</translation>
    </message>
    <message>
      <source>Is &amp;Locked</source>
      <translation>ロック(&amp;L)</translation>
    </message>
    <message>
      <source>Si&amp;ze is Locked</source>
      <translation>サイズをロック(&amp;Z)</translation>
    </message>
    <message>
      <source>Lower to &amp;Bottom</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Raise to &amp;Top</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Lower</source>
      <translation>背面へ(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Raise</source>
      <translation>前面へ(&amp;R)</translation>
    </message>
    <message>
      <source>Send to S&amp;crapbook</source>
      <translation>スクラップブックに送る(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Attributes...</source>
      <translation>属性(&amp;A)...</translation>
    </message>
    <message>
      <source>More Info...</source>
      <translation>詳細な情報...</translation>
    </message>
    <message>
      <source>I&amp;mage Visible</source>
      <translation>画像表示が可能(&amp;M)</translation>
    </message>
    <message>
      <source>&amp;Update Image</source>
      <translation>画像を更新(&amp;U)</translation>
    </message>
    <message>
      <source>Adjust Frame to Image</source>
      <translation>フレームを画像に合わせる</translation>
    </message>
    <message>
      <source>Extended Image Properties</source>
      <translation>拡張画像のプロパティ</translation>
    </message>
    <message>
      <source>&amp;Low Resolution</source>
      <translation>低解像度(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Normal Resolution</source>
      <translation>標準解像度(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Full Resolution</source>
      <translation>最大解像度(&amp;F)</translation>
    </message>
    <message>
      <source>Is PDF &amp;Bookmark</source>
      <translation>PDFブックマーク(&amp;B)</translation>
    </message>
    <message>
      <source>Is PDF A&amp;nnotation</source>
      <translation>PDF注釈(&amp;N)</translation>
    </message>
    <message>
      <source>Annotation P&amp;roperties</source>
      <translation>注釈のプロパティ(&amp;R)</translation>
    </message>
    <message>
      <source>Field P&amp;roperties</source>
      <translation>フィールドのプロパティ(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Edit Shape...</source>
      <translation>形状を編集(&amp;E)...</translation>
    </message>
    <message>
      <source>&amp;Attach Text to Path</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Detach Text from Path</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Combine Polygons</source>
      <translation>多角形を結合(&amp;C)</translation>
    </message>
    <message>
      <source>Split &amp;Polygons</source>
      <translation>多角形を分割(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;Bezier Curve</source>
      <translation>ベジエ曲線(&amp;B)</translation>
    </message>
    <message>
      <source>&amp;Image Frame</source>
      <translation>画像フレーム(&amp;I)</translation>
    </message>
    <message>
      <source>&amp;Outlines</source>
      <translation>アウトライン(&amp;O)</translation>
    </message>
    <message>
      <source>&amp;Polygon</source>
      <translation>多角形(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;Text Frame</source>
      <translation>テキストフレーム(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;Glyph...</source>
      <translation>グリフ(&amp;G)...</translation>
    </message>
    <message>
      <source>Sample Text</source>
      <translation>サンプルテキスト</translation>
    </message>
    <message>
      <source>&amp;Insert...</source>
      <translation>挿入(&amp;I)...</translation>
    </message>
    <message>
      <source>Im&amp;port...</source>
      <translation>インポート(&amp;P)...</translation>
    </message>
    <message>
      <source>&amp;Delete...</source>
      <translation>削除(&amp;D)...</translation>
    </message>
    <message>
      <source>&amp;Copy...</source>
      <translation>コピー(&amp;C)...</translation>
    </message>
    <message>
      <source>&amp;Move...</source>
      <translation>移動(&amp;M)...</translation>
    </message>
    <message>
      <source>&amp;Apply Master Page...</source>
      <translation>マスターページに適用(&amp;A)...</translation>
    </message>
    <message>
      <source>Convert to Master Page...</source>
      <translation>マスターページに変換...</translation>
    </message>
    <message>
      <source>Manage &amp;Guides...</source>
      <translation>ガイドを管理(&amp;G)...</translation>
    </message>
    <message>
      <source>Manage Page Properties...</source>
      <translation>ページプロパティを管理...</translation>
    </message>
    <message>
      <source>&amp;Fit in window</source>
      <translation>ウィンドウに合わせる(&amp;F)</translation>
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
      <translation>サムネイル(&amp;T)</translation>
    </message>
    <message>
      <source>Show &amp;Margins</source>
      <translation>マージンを表示(&amp;M)</translation>
    </message>
    <message>
      <source>Show &amp;Frames</source>
      <translation>フレームを表示(&amp;F)</translation>
    </message>
    <message>
      <source>Show &amp;Images</source>
      <translation>画像を表示(&amp;I)</translation>
    </message>
    <message>
      <source>Show &amp;Grid</source>
      <translation>グリッドを表示(&amp;G)</translation>
    </message>
    <message>
      <source>Show G&amp;uides</source>
      <translation>ガイドを表示(&amp;U)</translation>
    </message>
    <message>
      <source>Show &amp;Baseline Grid</source>
      <translation>ベースライングリッドを表示(&amp;B)</translation>
    </message>
    <message>
      <source>Show &amp;Text Chain</source>
      <translation>テキストチェーンを表示(&amp;T)</translation>
    </message>
    <message>
      <source>Show Control Characters</source>
      <translation>制御文字を表示</translation>
    </message>
    <message>
      <source>Rulers relative to Page</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Sn&amp;ap to Grid</source>
      <translation>グリッドに合わせる(&amp;A)</translation>
    </message>
    <message>
      <source>Sna&amp;p to Guides</source>
      <translation>ガイドに合わせる(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;Properties</source>
      <translation>プロパティ(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;Scrapbook</source>
      <translation>スクラップブック(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Layers</source>
      <translation>レイヤー(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Arrange Pages</source>
      <translation>ページの配置(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;Bookmarks</source>
      <translation>ブックマーク(&amp;B)</translation>
    </message>
    <message>
      <source>&amp;Measurements</source>
      <translation>計測(&amp;M)</translation>
    </message>
    <message>
      <source>Action &amp;History</source>
      <translation>アクション履歴(&amp;H)</translation>
    </message>
    <message>
      <source>Preflight &amp;Verifier</source>
      <translation>プリフライト検証(&amp;V)</translation>
    </message>
    <message>
      <source>&amp;Align and Distribute</source>
      <translation>整列と配置(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;Tools</source>
      <translation>ツール(&amp;T)</translation>
    </message>
    <message>
      <source>P&amp;DF Tools</source>
      <translation>PDFツール(&amp;D)</translation>
    </message>
    <message>
      <source>Select Item</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>T&amp;able</source>
      <translation>テーブル(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;Shape</source>
      <translation>形状(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Line</source>
      <translation>線(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Freehand Line</source>
      <translation>フリーハンド線(&amp;F)</translation>
    </message>
    <message>
      <source>Rotate Item</source>
      <translation>アイテムを回転</translation>
    </message>
    <message>
      <source>Zoom in or out</source>
      <translation>ズームイン/アウト</translation>
    </message>
    <message>
      <source>Zoom in</source>
      <translation>ズームイン</translation>
    </message>
    <message>
      <source>Zoom out</source>
      <translation>ズームアウト</translation>
    </message>
    <message>
      <source>Edit Contents of Frame</source>
      <translation>フレームの内容を編集</translation>
    </message>
    <message>
      <source>Edit Text...</source>
      <translation>テキストを編集...</translation>
    </message>
    <message>
      <source>Link Text Frames</source>
      <translation>テキストフレームを繋ぐ</translation>
    </message>
    <message>
      <source>Unlink Text Frames</source>
      <translation>テキストフレームを離す</translation>
    </message>
    <message>
      <source>&amp;Eye Dropper</source>
      <translation>スポイト(&amp;E)</translation>
    </message>
    <message>
      <source>Copy Item Properties</source>
      <translation>アイテムのプロパティをコピー</translation>
    </message>
    <message>
      <source>Edit the text with the Story Editor</source>
      <translation>ストーリエディタでテキストを編集</translation>
    </message>
    <message>
      <source>Insert Text Frame</source>
      <translation>テキストフレームを挿入</translation>
    </message>
    <message>
      <source>Insert Image Frame</source>
      <translation>画像フレームを挿入</translation>
    </message>
    <message>
      <source>Insert Table</source>
      <translation>テーブルを挿入</translation>
    </message>
    <message>
      <source>Insert Shape</source>
      <translation>形状を挿入</translation>
    </message>
    <message>
      <source>Insert Polygon</source>
      <translation>多角形を挿入</translation>
    </message>
    <message>
      <source>Insert Line</source>
      <translation>線を挿入</translation>
    </message>
    <message>
      <source>Insert Bezier Curve</source>
      <translation>ベジエ曲線を挿入</translation>
    </message>
    <message>
      <source>Insert Freehand Line</source>
      <translation>フリーハンド線を挿入</translation>
    </message>
    <message>
      <source>&amp;Manage Pictures</source>
      <translation>画像を管理(&amp;M)</translation>
    </message>
    <message>
      <source>&amp;Hyphenate Text</source>
      <translation>テキストをハイフンでつなぐ(&amp;H)</translation>
    </message>
    <message>
      <source>Dehyphenate Text</source>
      <translation>テキストのハイフンを取る</translation>
    </message>
    <message>
      <source>&amp;Generate Table Of Contents</source>
      <translation>目次を生成(&amp;G)</translation>
    </message>
    <message>
      <source>&amp;Cascade</source>
      <translation>カスケード表示(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Tile</source>
      <translation>タイル表示(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;About Scribus</source>
      <translation>Scribusについて(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;About Plug-ins</source>
      <translation>プラグインについて(&amp;A)</translation>
    </message>
    <message>
      <source>About &amp;Qt</source>
      <translation>Qtについて(&amp;Q)</translation>
    </message>
    <message>
      <source>Toolti&amp;ps</source>
      <translation>ツールチップ(&amp;P)</translation>
    </message>
    <message>
      <source>Scribus &amp;Manual...</source>
      <translation>Scribusマニュアル(&amp;M)...</translation>
    </message>
    <message>
      <source>Smart &amp;Hyphen</source>
      <translation>スマートハイフン(&amp;H)</translation>
    </message>
    <message>
      <source>Non Breaking Dash</source>
      <translation>改行なしダッシュ</translation>
    </message>
    <message>
      <source>Non Breaking &amp;Space</source>
      <translation>改行なしスペース(&amp;S)</translation>
    </message>
    <message>
      <source>Page &amp;Number</source>
      <translation>ページ番号(&amp;N)</translation>
    </message>
    <message>
      <source>New Line</source>
      <comment>#, fuzzy</comment>
      <translation>復帰改行</translation>
    </message>
    <message>
      <source>Frame Break</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Column Break</source>
      <translation>改コラム</translation>
    </message>
    <message>
      <source>Copyright</source>
      <translation>著作権</translation>
    </message>
    <message>
      <source>Registered Trademark</source>
      <translation>登録商標</translation>
    </message>
    <message>
      <source>Trademark</source>
      <translation>商標</translation>
    </message>
    <message>
      <source>Bullet</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Em Dash</source>
      <translation>emダッシュ</translation>
    </message>
    <message>
      <source>En Dash</source>
      <translation>enダッシュ</translation>
    </message>
    <message>
      <source>Figure Dash</source>
      <translation>figureダッシュ</translation>
    </message>
    <message>
      <source>Quotation Dash</source>
      <translation>quotationダッシュ</translation>
    </message>
    <message>
      <source>Apostrophe</source>
      <translation>アポストロフィー</translation>
    </message>
    <message>
      <source>Straight Double</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Single Left</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Single Right</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Double Left</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Double Right</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Single Reversed</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Double Reversed</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Single Left Guillemet</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Single Right Guillemet</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Double Left Guillemet</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Double Right Guillemet</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Low Single Comma</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Low Double Comma</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>CJK Single Left</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>CJK Single Right</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>CJK Double Left</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>CJK Double Right</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Toggle Palettes</source>
      <translation>パレットを切替え</translation>
    </message>
    <message>
      <source>Toggle Guides</source>
      <translation>ガイドを切替え</translation>
    </message>
  </context>
  <context>
    <name>AlignDistributePalette</name>
    <message>
      <source>Align and Distribute</source>
      <translation>整列と配置</translation>
    </message>
    <message>
      <source>Align</source>
      <translation>整列</translation>
    </message>
    <message>
      <source>&amp;Relative to:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>First Selected</source>
      <translation>最初に選択されたもの</translation>
    </message>
    <message>
      <source>Last Selected</source>
      <translation>最後に選択されたもの</translation>
    </message>
    <message>
      <source>Page</source>
      <translation>ページ</translation>
    </message>
    <message>
      <source>Margins</source>
      <translation>マージン</translation>
    </message>
    <message>
      <source>Guide</source>
      <translation>ガイド</translation>
    </message>
    <message>
      <source>Selection</source>
      <translation>選択</translation>
    </message>
    <message>
      <source>Align right sides of objects to left side of anchor</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Align left sides of objects to right side of anchor</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Align bottoms</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Align right sides</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Align tops of objects to bottom of anchor</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Center on vertical axis</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Align left sides</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Center on horizontal axis</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Align bottoms of objects to top of anchor</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Align tops</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Selected Guide:</source>
      <translation>選択されたガイド(&amp;S):</translation>
    </message>
    <message>
      <source>Distribute</source>
      <translation>配置</translation>
    </message>
    <message>
      <source>Make horizontal gaps between objects equal</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Make horizontal gaps between objects equal to the value specified</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Distribute right sides equidistantly</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Distribute bottoms equidistantly</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Distribute centers equidistantly horizontally</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Make vertical gaps between objects equal</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Make vertical gaps between objects equal to the value specified</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Distribute left sides equidistantly</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Distribute centers equidistantly vertically</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Distribute tops equidistantly</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Distance:</source>
      <translation>距離(&amp;D):</translation>
    </message>
    <message>
      <source>Distribute the items with the distance specified</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>None Selected</source>
      <translation>何も選択されていません</translation>
    </message>
    <message>
      <source>Some objects are locked.</source>
      <translation>オブジェクトがロックされています。</translation>
    </message>
    <message>
      <source>&amp;Unlock All</source>
      <translation>全てロック解除(&amp;U)</translation>
    </message>
    <message>
      <source>Y: %1%2</source>
      <translation>Y: %1%2</translation>
    </message>
    <message>
      <source>X: %1%2</source>
      <translation>X: %1%2</translation>
    </message>
  </context>
  <context>
    <name>AlignSelect</name>
    <message>
      <source>Align Text Left</source>
      <translation>テキストを左揃え</translation>
    </message>
    <message>
      <source>Align Text Right</source>
      <translation>テキストを右揃え</translation>
    </message>
    <message>
      <source>Align Text Center</source>
      <translation>テキストを中央揃え</translation>
    </message>
    <message>
      <source>Align Text Justified</source>
      <translation>テキストを両端揃え</translation>
    </message>
    <message>
      <source>Align Text Forced Justified</source>
      <translation>テキストを強制的に両端揃え</translation>
    </message>
  </context>
  <context>
    <name>Annot</name>
    <message>
      <source>Field Properties</source>
      <translation>フィールドのプロパティ</translation>
    </message>
    <message>
      <source>Type:</source>
      <translation>タイプ:</translation>
    </message>
    <message>
      <source>Button</source>
      <translation>ボタン</translation>
    </message>
    <message>
      <source>Text Field</source>
      <translation>テキストフィールド</translation>
    </message>
    <message>
      <source>Check Box</source>
      <translation>チェックボックス</translation>
    </message>
    <message>
      <source>Combo Box</source>
      <translation>コンボボックス</translation>
    </message>
    <message>
      <source>List Box</source>
      <translation>リストボックス</translation>
    </message>
    <message>
      <source>Properties</source>
      <translation>プロパティ</translation>
    </message>
    <message>
      <source>Name:</source>
      <translation>名前:</translation>
    </message>
    <message>
      <source>Tool-Tip:</source>
      <translation>ツールチップ:</translation>
    </message>
    <message>
      <source>Text</source>
      <translation>テキスト</translation>
    </message>
    <message>
      <source>Font for use with PDF 1.3:</source>
      <translation>PDF 1.3で利用するフォント:</translation>
    </message>
    <message>
      <source>Border</source>
      <translation>境界</translation>
    </message>
    <message>
      <source>Color:</source>
      <translation>色:</translation>
    </message>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
    <message>
      <source>Width:</source>
      <translation>幅:</translation>
    </message>
    <message>
      <source>Thin</source>
      <translation>狭い</translation>
    </message>
    <message>
      <source>Normal</source>
      <translation>標準</translation>
    </message>
    <message>
      <source>Wide</source>
      <translation>広い</translation>
    </message>
    <message>
      <source>Style:</source>
      <translation>スタイル:</translation>
    </message>
    <message>
      <source>Solid</source>
      <translation>実線</translation>
    </message>
    <message>
      <source>Dashed</source>
      <translation>破線</translation>
    </message>
    <message>
      <source>Underline</source>
      <translation>下線</translation>
    </message>
    <message>
      <source>Beveled</source>
      <translation>斜線</translation>
    </message>
    <message>
      <source>Inset</source>
      <translation>挿入</translation>
    </message>
    <message>
      <source>Other</source>
      <translation>その他</translation>
    </message>
    <message>
      <source>Read Only</source>
      <translation>読み込み専用</translation>
    </message>
    <message>
      <source>Required</source>
      <translation>必須</translation>
    </message>
    <message>
      <source>Don't Export Value</source>
      <translation>値をエクスポートしない</translation>
    </message>
    <message>
      <source>Visibility:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Visible</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Hidden</source>
      <translation>隠し</translation>
    </message>
    <message>
      <source>No Print</source>
      <translation>印刷なし</translation>
    </message>
    <message>
      <source>No View</source>
      <translation>ビューなし</translation>
    </message>
    <message>
      <source>Appearance</source>
      <translation>外観</translation>
    </message>
    <message>
      <source>Text for Button Down</source>
      <translation>Button Downのテキスト</translation>
    </message>
    <message>
      <source>Text for Roll Over</source>
      <translation>Roll Overのテキスト</translation>
    </message>
    <message>
      <source>Icons</source>
      <translation>アイコン</translation>
    </message>
    <message>
      <source>Use Icons</source>
      <translation>アイコンを使用</translation>
    </message>
    <message>
      <source>Remove</source>
      <translation>削除</translation>
    </message>
    <message>
      <source>Pressed</source>
      <translation>Pressed</translation>
    </message>
    <message>
      <source>Roll Over</source>
      <translation>Roll Over</translation>
    </message>
    <message>
      <source>Icon Placement...</source>
      <translation>アイコンの位置ずれ...</translation>
    </message>
    <message>
      <source>Highlight</source>
      <translation>強調</translation>
    </message>
    <message>
      <source>Invert</source>
      <translation>反転</translation>
    </message>
    <message>
      <source>Outlined</source>
      <translation>アウトライン化</translation>
    </message>
    <message>
      <source>Push</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Multi-Line</source>
      <translation>複数行</translation>
    </message>
    <message>
      <source>Password</source>
      <translation>パスワード</translation>
    </message>
    <message>
      <source>Limit of</source>
      <comment>#, fuzzy</comment>
      <translation>制限</translation>
    </message>
    <message>
      <source>Characters</source>
      <translation>文字</translation>
    </message>
    <message>
      <source>Do Not Scroll</source>
      <translation>スクロールしない</translation>
    </message>
    <message>
      <source>Do Not Spell Check</source>
      <translation>スペルチェックしない</translation>
    </message>
    <message>
      <source>Check Style:</source>
      <translation>スタイルをチェック:</translation>
    </message>
    <message>
      <source>Check</source>
      <translation>チェック</translation>
    </message>
    <message>
      <source>Cross</source>
      <translation>十字</translation>
    </message>
    <message>
      <source>Diamond</source>
      <translation>ダイアモンド</translation>
    </message>
    <message>
      <source>Circle</source>
      <translation>円</translation>
    </message>
    <message>
      <source>Star</source>
      <translation>星</translation>
    </message>
    <message>
      <source>Square</source>
      <translation>四角</translation>
    </message>
    <message>
      <source>Default is Checked</source>
      <comment>#, fuzzy</comment>
      <translation>デフォルトでチェック</translation>
    </message>
    <message>
      <source>Editable</source>
      <translation>編集可能</translation>
    </message>
    <message>
      <source>Options</source>
      <translation>オプション</translation>
    </message>
    <message>
      <source>JavaScript</source>
      <translation>JavaScript</translation>
    </message>
    <message>
      <source>Go To</source>
      <translation>移動</translation>
    </message>
    <message>
      <source>Submit Form</source>
      <translation>送信フォーム</translation>
    </message>
    <message>
      <source>Reset Form</source>
      <translation>リセットフォーム</translation>
    </message>
    <message>
      <source>Import Data</source>
      <translation>データをインポート</translation>
    </message>
    <message>
      <source>Event:</source>
      <translation>イベント:</translation>
    </message>
    <message>
      <source>Mouse Up</source>
      <translation>Mouse Up</translation>
    </message>
    <message>
      <source>Mouse Down</source>
      <translation>Mouse Down</translation>
    </message>
    <message>
      <source>Mouse Enter</source>
      <translation>Mouse Enter</translation>
    </message>
    <message>
      <source>Mouse Exit</source>
      <translation>Mouse Exit</translation>
    </message>
    <message>
      <source>On Focus</source>
      <translation>On Focus</translation>
    </message>
    <message>
      <source>On Blur</source>
      <translation>On Blur</translation>
    </message>
    <message>
      <source>Script:</source>
      <translation>スクリプト:</translation>
    </message>
    <message>
      <source>Edit...</source>
      <translation>編集...</translation>
    </message>
    <message>
      <source>Submit to URL:</source>
      <translation>以下のURLに送信:</translation>
    </message>
    <message>
      <source>Submit Data as HTML</source>
      <translation>データをHTMLとして送信</translation>
    </message>
    <message>
      <source>Import Data from:</source>
      <translation>以下からデータをインポート:</translation>
    </message>
    <message>
      <source>Destination</source>
      <translation>出力先</translation>
    </message>
    <message>
      <source>To File:</source>
      <translation>ファイルへ:</translation>
    </message>
    <message>
      <source>Change...</source>
      <translation>変更...</translation>
    </message>
    <message>
      <source>Page:</source>
      <translation>ページ:</translation>
    </message>
    <message>
      <source>X-Pos:</source>
      <translation>位置X:</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source>Y-Pos:</source>
      <translation>位置Y:</translation>
    </message>
    <message>
      <source>Action</source>
      <translation>アクション</translation>
    </message>
    <message>
      <source>Field is formatted as:</source>
      <translation>フィールドをフォーマット:</translation>
    </message>
    <message>
      <source>Plain</source>
      <translation>プレーン</translation>
    </message>
    <message>
      <source>Number</source>
      <translation>数字</translation>
    </message>
    <message>
      <source>Percentage</source>
      <translation>パーセント</translation>
    </message>
    <message>
      <source>Date</source>
      <translation>日付</translation>
    </message>
    <message>
      <source>Time</source>
      <translation>時刻</translation>
    </message>
    <message>
      <source>Custom</source>
      <translation>カスタム</translation>
    </message>
    <message>
      <source>Number Format</source>
      <translation>数字のフォーマット</translation>
    </message>
    <message>
      <source>Decimals:</source>
      <translation>小数:</translation>
    </message>
    <message>
      <source>Use Currency Symbol</source>
      <translation>通貨シンボルを使用</translation>
    </message>
    <message>
      <source>Prepend Currency Symbol</source>
      <translation>通貨シンボルを前に追加</translation>
    </message>
    <message>
      <source>Formatting</source>
      <translation>フォーマット中</translation>
    </message>
    <message>
      <source>Percent Format</source>
      <translation>パーセントのフォーマット</translation>
    </message>
    <message>
      <source>Date Format</source>
      <translation>日付のフォーマット</translation>
    </message>
    <message>
      <source>Time Format</source>
      <translation>時刻のフォーマット</translation>
    </message>
    <message>
      <source>Custom Scripts</source>
      <translation>カスタムスクリプト</translation>
    </message>
    <message>
      <source>Format:</source>
      <translation>フォーマット:</translation>
    </message>
    <message>
      <source>Keystroke:</source>
      <translation>キー入力:</translation>
    </message>
    <message>
      <source>Format</source>
      <translation>フォーマット</translation>
    </message>
    <message>
      <source>Value is not validated</source>
      <translation>値は認証されていません</translation>
    </message>
    <message>
      <source>Value must be greater than or equal to:</source>
      <translation>値は等しいか大きいものでなければなりません:</translation>
    </message>
    <message>
      <source>and less or equal to:</source>
      <translation>等しいか少ない:</translation>
    </message>
    <message>
      <source>Custom validate script:</source>
      <translation>カスタム認証スクリプト:</translation>
    </message>
    <message>
      <source>Validate</source>
      <translation>認証</translation>
    </message>
    <message>
      <source>Value is not calculated</source>
      <translation>値は計算されていません</translation>
    </message>
    <message>
      <source>Value is the</source>
      <translation>値は</translation>
    </message>
    <message>
      <source>sum</source>
      <translation>合計</translation>
    </message>
    <message>
      <source>product</source>
      <translation>積</translation>
    </message>
    <message>
      <source>average</source>
      <translation>平均</translation>
    </message>
    <message>
      <source>minimum</source>
      <translation>最小</translation>
    </message>
    <message>
      <source>maximum</source>
      <translation>最大</translation>
    </message>
    <message>
      <source>of the following fields:</source>
      <translation>以下のフィールド:</translation>
    </message>
    <message>
      <source>Pick...</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Custom calculation script:</source>
      <translation>カスタム計算スクリプト:</translation>
    </message>
    <message>
      <source>Calculate</source>
      <translation>計算</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>キャンセル</translation>
    </message>
    <message>
      <source>Flag is ignored for PDF 1.3</source>
      <translation>フラグはPDF 1.3では無視されます</translation>
    </message>
    <message>
      <source>Enter a comma separated list of fields here</source>
      <translation>ここにカンマ区切りのフィールドのリストを入力してください</translation>
    </message>
    <message>
      <source>You need at least the Icon for Normal to use Icons for Buttons</source>
      <translation>ボタンにアイコンを使うには正常なアイコンが少なくとも必要です</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>開く</translation>
    </message>
    <message>
      <source>Images (*.tif *.png *.jpg *.xpm);;PostScript (*.eps);;All Files (*)</source>
      <translation>画像 (*.tif *.png *.jpg *.xpm);;PostScript (*.eps);;全てのファイル (*)</translation>
    </message>
    <message>
      <source>Example:</source>
      <translation>例:</translation>
    </message>
    <message>
      <source>Selection Change</source>
      <translation>選択を変更</translation>
    </message>
    <message>
      <source>PDF Files (*.pdf);;All Files (*)</source>
      <translation>PDFファイル (*.pdf);;全てのファイル (*)</translation>
    </message>
  </context>
  <context>
    <name>Annota</name>
    <message>
      <source>Annotation Properties</source>
      <translation>注釈のプロパティ</translation>
    </message>
    <message>
      <source>Text</source>
      <translation>テキスト</translation>
    </message>
    <message>
      <source>Link</source>
      <translation>リンク</translation>
    </message>
    <message>
      <source>External Link</source>
      <translation>外部リンク</translation>
    </message>
    <message>
      <source>External Web-Link</source>
      <translation>外部ウェブリンク</translation>
    </message>
    <message>
      <source>&amp;Type:</source>
      <translation>タイプ(&amp;T):</translation>
    </message>
    <message>
      <source>Destination</source>
      <translation>出力先</translation>
    </message>
    <message>
      <source>C&amp;hange...</source>
      <translation>変更(&amp;H)...</translation>
    </message>
    <message>
      <source>&amp;Page:</source>
      <translation>ページ(&amp;P):</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source>&amp;X-Pos</source>
      <translation>位置&amp;X</translation>
    </message>
    <message>
      <source>&amp;Y-Pos:</source>
      <translation>位置&amp;Y:</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>開く</translation>
    </message>
    <message>
      <source>PDF-Documents (*.pdf);;All Files (*)</source>
      <translation>PDFドキュメント (*.pdf);;全てのファイル (*)</translation>
    </message>
  </context>
  <context>
    <name>ApplyMasterPageDialog</name>
    <message>
      <source>Normal</source>
      <translation>標準</translation>
    </message>
    <message>
      <source>Apply Master Page</source>
      <translation>マスターページに適用</translation>
    </message>
    <message>
      <source>&amp;Master Page:</source>
      <translation>マスターページ(&amp;M):</translation>
    </message>
    <message>
      <source>Apply To</source>
      <translation>適用先</translation>
    </message>
    <message>
      <source>Current &amp;page</source>
      <translation>現在のページ(&amp;P)</translation>
    </message>
    <message>
      <source>Alt+P</source>
      <translation>Alt+P</translation>
    </message>
    <message>
      <source>&amp;Even pages</source>
      <translation>偶数ページ(&amp;E)</translation>
    </message>
    <message>
      <source>Alt+E</source>
      <translation>Alt+E</translation>
    </message>
    <message>
      <source>O&amp;dd pages</source>
      <translation>奇数ページ(&amp;D)</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>&amp;All pages</source>
      <translation>全てのページ(&amp;A)</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Within range</source>
      <translation>範囲内(&amp;W)</translation>
    </message>
    <message>
      <source>Alt+W</source>
      <translation>Alt+W</translation>
    </message>
    <message>
      <source>Apply the selected template to even, odd or all pages within the following range</source>
      <translation>以下の範囲の偶数、奇数、全てのページに選択したテンプレートを適用する</translation>
    </message>
    <message>
      <source>to</source>
      <comment>#, fuzzy</comment>
      <translation>から</translation>
    </message>
    <message>
      <source>Alt+O</source>
      <translation>Alt+O</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
  </context>
  <context>
    <name>ArrowChooser</name>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
  </context>
  <context>
    <name>Biblio</name>
    <message>
      <source>Scrapbooks (*.scs);;All Files (*)</source>
      <translation>スクラップブック (*.scs);;全てのファイル (*)</translation>
    </message>
    <message>
      <source>Rename</source>
      <translation>名前を変更</translation>
    </message>
    <message>
      <source>Delete</source>
      <translation>削除</translation>
    </message>
    <message>
      <source>Scrapbook</source>
      <translation>スクラップブック</translation>
    </message>
    <message>
      <source>Name &quot;%1&quot; is not unique.
Please choose another.</source>
      <translation>名前 &quot;%1&quot; はすでに存在します。
他のものを選択してください。</translation>
    </message>
    <message>
      <source>Object</source>
      <translation>オブジェクト</translation>
    </message>
    <message>
      <source>&amp;Name:</source>
      <translation>名前(&amp;N):</translation>
    </message>
    <message>
      <source>New Entry</source>
      <translation>新規エントリ</translation>
    </message>
    <message>
      <source>&amp;File</source>
      <translation>ファイル(&amp;F)</translation>
    </message>
    <message>
      <source>&amp;Preview</source>
      <translation>プレビュー(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>新規(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Load...</source>
      <translation>読み込み(&amp;L)...</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>保存(&amp;S)</translation>
    </message>
    <message>
      <source>Save &amp;As...</source>
      <translation>名前を付けて保存(&amp;A)...</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>閉じる(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Small</source>
      <translation>小(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Medium</source>
      <translation>中(&amp;M)</translation>
    </message>
    <message>
      <source>&amp;Large</source>
      <translation>大(&amp;L)</translation>
    </message>
  </context>
  <context>
    <name>BookMView</name>
    <message>
      <source>Move Bookmark</source>
      <translation>ブックマークを移動</translation>
    </message>
    <message>
      <source>Insert Bookmark</source>
      <translation>ブックマークを挿入</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>キャンセル</translation>
    </message>
    <message>
      <source>Bookmarks</source>
      <translation>ブックマーク</translation>
    </message>
  </context>
  <context>
    <name>BookPalette</name>
    <message>
      <source>Bookmarks</source>
      <translation>ブックマーク</translation>
    </message>
  </context>
  <context>
    <name>ButtonIcon</name>
    <message>
      <source>Icon Placement</source>
      <translation>アイコンの位置ずれ</translation>
    </message>
    <message>
      <source>Layout:</source>
      <translation>レイアウト:</translation>
    </message>
    <message>
      <source>Caption only</source>
      <translation>キャプションのみ</translation>
    </message>
    <message>
      <source>Icon only</source>
      <translation>アイコンのみ</translation>
    </message>
    <message>
      <source>Caption below Icon</source>
      <translation>アイコンの下にキャプション</translation>
    </message>
    <message>
      <source>Caption above Icon</source>
      <translation>アイコンの上にキャプション</translation>
    </message>
    <message>
      <source>Caption right to Icon</source>
      <translation>アイコンの右にキャプション</translation>
    </message>
    <message>
      <source>Caption left to Icon</source>
      <translation>アイコンの左にキャプション</translation>
    </message>
    <message>
      <source>Caption overlays Icon</source>
      <comment>#, fuzzy</comment>
      <translation>アイコンにオーバーレイでキャプション</translation>
    </message>
    <message>
      <source>Scale:</source>
      <translation>倍率:</translation>
    </message>
    <message>
      <source>Always</source>
      <translation>常に</translation>
    </message>
    <message>
      <source>When Icon is too small</source>
      <translation>アイコンが小さすぎるとき</translation>
    </message>
    <message>
      <source>When Icon is too big</source>
      <translation>アイコンが大きすぎるとき</translation>
    </message>
    <message>
      <source>Never</source>
      <translation>しない</translation>
    </message>
    <message>
      <source>Scale How:</source>
      <translation>倍率の大きさ:</translation>
    </message>
    <message>
      <source>Proportional</source>
      <translation>プロポーショナル</translation>
    </message>
    <message>
      <source>Non Proportional</source>
      <translation>非プロポーショナル</translation>
    </message>
    <message>
      <source>Icon</source>
      <translation>アイコン</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>キャンセル</translation>
    </message>
    <message>
      <source>Reset</source>
      <translation>リセット</translation>
    </message>
  </context>
  <context>
    <name>CMSPrefs</name>
    <message>
      <source>&amp;Activate Color Management</source>
      <translation>カラー管理を有効に(&amp;A)</translation>
    </message>
    <message>
      <source>System Profiles</source>
      <translation>システムプロファイル</translation>
    </message>
    <message>
      <source>&amp;RGB Pictures:</source>
      <translation>RGB画像(&amp;R):</translation>
    </message>
    <message>
      <source>&amp;CMYK Pictures:</source>
      <translation>CMYK画像(&amp;C):</translation>
    </message>
    <message>
      <source>&amp;Solid Colors:</source>
      <translation>無色(&amp;S):</translation>
    </message>
    <message>
      <source>&amp;Monitor:</source>
      <translation>モニタ(&amp;M):</translation>
    </message>
    <message>
      <source>P&amp;rinter:</source>
      <translation>プリンタ(&amp;R):</translation>
    </message>
    <message>
      <source>Rendering Intents</source>
      <translation>レンダリングインテント</translation>
    </message>
    <message>
      <source>Perceptual</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Relative Colorimetric</source>
      <translation>相対的な色彩</translation>
    </message>
    <message>
      <source>Saturation</source>
      <translation>彩度</translation>
    </message>
    <message>
      <source>Absolute Colorimetric</source>
      <translation>絶対的な色彩</translation>
    </message>
    <message>
      <source>M&amp;onitor:</source>
      <translation>モニタ(&amp;O):</translation>
    </message>
    <message>
      <source>Pr&amp;inter:</source>
      <translation>プリンタ(&amp;I):</translation>
    </message>
    <message>
      <source>Sim&amp;ulate Printer on the Screen</source>
      <translation>画面上でプリンタをシミュレートする(&amp;U)</translation>
    </message>
    <message>
      <source>Mark Colors out of &amp;Gamut</source>
      <translation>範囲外の色をマークする</translation>
    </message>
    <message>
      <source>Use &amp;Blackpoint Compensation</source>
      <translation>黒点補正を使用(&amp;B)</translation>
    </message>
    <message>
      <source>Default color profile for imported CMYK images</source>
      <translation>インポートしたCMYK画像のデフォルトのカラープロファイル</translation>
    </message>
    <message>
      <source>Default color profile for imported RGB images</source>
      <translation>インポートしたRGB画像のデフォルトのカラープロファイル</translation>
    </message>
    <message>
      <source>Default color profile for solid colors on the page</source>
      <comment>#, fuzzy</comment>
      <translation>ページ上の無色のデフォルトのカラープロファイル</translation>
    </message>
    <message>
      <source>Color profile that you have generated or received from the manufacturer.
This profile should be specific to your monitor and not a generic profile (i.e. sRGB).</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color profile for your printer model from the manufacturer.
This profile should be specific to your printer and not a generic profile (i.e. sRGB).</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Default rendering intent for your monitor. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Default rendering intent for your printer. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Enable 'soft proofing' of how your document colors will print,
based on the chosen printer profile.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Method of showing colors on the screen which may not print properly.
This requires very accurate profiles and serves only as a warning.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Black Point Compensation is a method of improving contrast in photos.
It is recommended that you enable this if you have photos in your document.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>CMYKChoose</name>
    <message>
      <source>Edit Color</source>
      <translation>色を編集</translation>
    </message>
    <message>
      <source>&amp;Name:</source>
      <translation>名前(&amp;N):</translation>
    </message>
    <message>
      <source>Color &amp;Model</source>
      <translation>カラーモデル(&amp;M)</translation>
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
      <translation>Webセーフ RGB</translation>
    </message>
    <message>
      <source>Is Spot Color</source>
      <translation>スポットカラー</translation>
    </message>
    <message>
      <source>Is Registration Color</source>
      <translation>登録色</translation>
    </message>
    <message>
      <source>New</source>
      <translation>新規</translation>
    </message>
    <message>
      <source>Old</source>
      <translation>前の色</translation>
    </message>
    <message>
      <source>HSV-Colormap</source>
      <translation>HSVカラーマップ</translation>
    </message>
    <message>
      <source>C:</source>
      <translation>C:</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>M:</source>
      <translation>M:</translation>
    </message>
    <message>
      <source>Y:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <source>K:</source>
      <translation>K:</translation>
    </message>
    <message>
      <source>Dynamic Color Bars</source>
      <translation>ダイナミックカラーバー</translation>
    </message>
    <message>
      <source>Static Color Bars</source>
      <translation>スタティックカラーバー</translation>
    </message>
    <message>
      <source>R:</source>
      <translation>R:</translation>
    </message>
    <message>
      <source>G:</source>
      <translation>G:</translation>
    </message>
    <message>
      <source>B:</source>
      <translation>B:</translation>
    </message>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
    <message>
      <source>You cannot create a color named &quot;%1&quot;.
It is a reserved name for transparent color</source>
      <translation>&quot;%1&quot;という名前の色を作成できません。 
透明色の名前として予約されています。</translation>
    </message>
    <message>
      <source>Name of the color is not unique</source>
      <translation>その名前の色はすでに存在します</translation>
    </message>
  </context>
  <context>
    <name>ChTable</name>
    <message>
      <source>You can see a thumbnail if you press and hold down the right mouse button. The Insert key inserts a Glyph into the Selection below and the Delete key removes the last inserted one</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>CharSelect</name>
    <message>
      <source>Select Character:</source>
      <translation>文字を選択:</translation>
    </message>
    <message>
      <source>Font:</source>
      <translation>フォント:</translation>
    </message>
    <message>
      <source>Character Class:</source>
      <translation>文字クラス:</translation>
    </message>
    <message>
      <source>&amp;Insert</source>
      <translation>挿入(&amp;I)</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>クリア(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>閉じる(&amp;C)</translation>
    </message>
    <message>
      <source>Insert the characters at the cursor in the text</source>
      <translation>テキスト中のカーソルの文字を挿入</translation>
    </message>
    <message>
      <source>Delete the current selection(s).</source>
      <translation>現在選択しているものを削除</translation>
    </message>
    <message>
      <source>Close this dialog and return to text editing.</source>
      <translation>このダイアログを閉じてテキスト編集に戻る</translation>
    </message>
    <message>
      <source>Full Character Set</source>
      <translation>全キャラクタセット</translation>
    </message>
    <message>
      <source>Basic Latin</source>
      <translation>基本ラテン</translation>
    </message>
    <message>
      <source>Latin-1 Supplement</source>
      <translation>ラテン-1補助</translation>
    </message>
    <message>
      <source>Latin Extended-A</source>
      <translation>ラテン拡張Ａ</translation>
    </message>
    <message>
      <source>Latin Extended-B</source>
      <translation>ラテン拡張Ｂ</translation>
    </message>
    <message>
      <source>General Punctuation</source>
      <translation>一般句読点</translation>
    </message>
    <message>
      <source>Super- and Subscripts</source>
      <translation>上-下付き文字</translation>
    </message>
    <message>
      <source>Currency Symbols</source>
      <translation>通貨シンボル</translation>
    </message>
    <message>
      <source>Letterlike Symbols</source>
      <translation>文字様記号</translation>
    </message>
    <message>
      <source>Number Forms</source>
      <translation>数字の形</translation>
    </message>
    <message>
      <source>Arrows</source>
      <translation>矢印</translation>
    </message>
    <message>
      <source>Mathematical Operators</source>
      <translation>数学記号</translation>
    </message>
    <message>
      <source>Box Drawing</source>
      <translation>罫線素片</translation>
    </message>
    <message>
      <source>Block Elements</source>
      <translation>ブロック要素</translation>
    </message>
    <message>
      <source>Geometric Shapes</source>
      <translation>幾何学模様</translation>
    </message>
    <message>
      <source>Miscellaneous Symbols</source>
      <translation>その他の記号</translation>
    </message>
    <message>
      <source>Dingbats</source>
      <translation>装飾記号</translation>
    </message>
    <message>
      <source>Small Form Variants</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Ligatures</source>
      <translation>リガチャ</translation>
    </message>
    <message>
      <source>Specials</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Greek</source>
      <translation>ギリシャ</translation>
    </message>
    <message>
      <source>Greek Extended</source>
      <translation>ギリシャ拡張</translation>
    </message>
    <message>
      <source>Cyrillic</source>
      <translation>キリル</translation>
    </message>
    <message>
      <source>Cyrillic Supplement</source>
      <translation>キリル補助</translation>
    </message>
    <message>
      <source>Arabic</source>
      <translation>アラビア</translation>
    </message>
    <message>
      <source>Arabic Extended A</source>
      <translation>アラビア拡張A</translation>
    </message>
    <message>
      <source>Arabic Extended B</source>
      <translation>アラビア拡張B</translation>
    </message>
    <message>
      <source>Hebrew</source>
      <translation>ヘブライ</translation>
    </message>
  </context>
  <context>
    <name>CheckDocument</name>
    <message>
      <source>Glyphs missing</source>
      <translation>グリフが見つかりません</translation>
    </message>
    <message>
      <source>Text overflow</source>
      <translation>テキストがあふれています</translation>
    </message>
    <message>
      <source>Object is not on a Page</source>
      <translation>オブジェクトはページ上にありません</translation>
    </message>
    <message>
      <source>Missing Image</source>
      <translation>画像が見つかりません</translation>
    </message>
    <message>
      <source>Image has a DPI-Value less than %1 DPI</source>
      <translation>画像のDPI値は %1 DPIより低いです</translation>
    </message>
    <message>
      <source>Object has transparency</source>
      <translation>オブジェクトは透明です</translation>
    </message>
    <message>
      <source>Object is a PDF Annotation or Field</source>
      <translation>オブジェクトはPDF注釈もしくはフィールドです</translation>
    </message>
    <message>
      <source>Object is a placed PDF</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Document</source>
      <translation>ドキュメント</translation>
    </message>
    <message>
      <source>No Problems found</source>
      <translation>問題は見つかりませんでした</translation>
    </message>
    <message>
      <source>Page </source>
      <translation>ページ </translation>
    </message>
    <message>
      <source>Free Objects</source>
      <translation>フリーオブジェクト</translation>
    </message>
    <message>
      <source>Problems found</source>
      <translation>問題が見つかりました</translation>
    </message>
    <message>
      <source>Preflight Verifier</source>
      <translation>プリフライト検証</translation>
    </message>
    <message>
      <source>Items</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Problems</source>
      <translation>問題</translation>
    </message>
    <message>
      <source>Current Profile:</source>
      <translation>現在のプロファイル:</translation>
    </message>
    <message>
      <source>&amp;Ignore Errors</source>
      <translation>エラーを無視(&amp;I)</translation>
    </message>
  </context>
  <context>
    <name>ChooseStyles</name>
    <message>
      <source>Choose Styles</source>
      <translation>スタイルを選択</translation>
    </message>
    <message>
      <source>Available Styles</source>
      <translation>利用可能なスタイル</translation>
    </message>
  </context>
  <context>
    <name>CollectForOutput</name>
    <message>
      <source>Choose a Directory</source>
      <translation>ディレクトリを選択</translation>
    </message>
    <message>
      <source>Collecting...</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot collect the file: 
%1</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Warning</source>
      <translation>警告</translation>
    </message>
    <message>
      <source>Cannot collect all files for output for file:
%1</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>ColorListBox</name>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
  </context>
  <context>
    <name>ColorManager</name>
    <message>
      <source>Colors</source>
      <translation>色</translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation>インポート(&amp;I)</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>新規(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation>編集(&amp;E)</translation>
    </message>
    <message>
      <source>D&amp;uplicate</source>
      <translation>複製(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>削除(&amp;D)</translation>
    </message>
    <message>
      <source>&amp;Remove Unused</source>
      <translation>使用しないものを削除(&amp;R)</translation>
    </message>
    <message>
      <source>Color Sets</source>
      <translation>カラーセット</translation>
    </message>
    <message>
      <source>Current Color Set:</source>
      <translation>現在のカラーセット:</translation>
    </message>
    <message>
      <source>&amp;Save Color Set</source>
      <translation>カラーセットを保存(&amp;S)</translation>
    </message>
    <message>
      <source>Choose a color set to load</source>
      <translation>読み込むカラーセットを選択</translation>
    </message>
    <message>
      <source>Save the current color set</source>
      <translation>現在のカラーセットを保存</translation>
    </message>
    <message>
      <source>Remove unused colors from current document's color set</source>
      <translation>現在のドキュメントのカラーセットから使用されていない色を削除します</translation>
    </message>
    <message>
      <source>Import colors to the current set from an existing document</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Create a new color within the current set</source>
      <translation>現在のセット中に新しい色を作成します</translation>
    </message>
    <message>
      <source>Edit the currently selected color</source>
      <translation>現在選択されている色を編集</translation>
    </message>
    <message>
      <source>Make a copy of the currently selected color</source>
      <translation>現在選択されている色のコピーを作成</translation>
    </message>
    <message>
      <source>Delete the currently selected color</source>
      <translation>現在選択されている色を削除</translation>
    </message>
    <message>
      <source>Make the current colorset the default color set</source>
      <translation>現在の色をデフォルトのカラーセットに設定する</translation>
    </message>
    <message>
      <source>&amp;Name:</source>
      <translation>名前(&amp;N):</translation>
    </message>
    <message>
      <source>Choose a Name</source>
      <translation>名前を選択</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>開く</translation>
    </message>
    <message>
      <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
      <translation>ドキュメント (*.sla *.sla.gz *.scd *.scd.gz);;全てのファイル (*)</translation>
    </message>
    <message>
      <source>Documents (*.sla *.scd);;All Files (*)</source>
      <translation>ドキュメント (*.sla *.scd);;全てのファイル (*)</translation>
    </message>
    <message>
      <source>Copy of %1</source>
      <translation>%1のコピー</translation>
    </message>
    <message>
      <source>New Color</source>
      <translation>新しい色</translation>
    </message>
  </context>
  <context>
    <name>ColorWheel</name>
    <message>
      <source>Monochromatic</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Analogous</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Complementary</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Split Complementary</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Triadic</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Tetradic (Double Complementary)</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Base Color</source>
      <translation>基調色</translation>
    </message>
    <message>
      <source>Monochromatic Light</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Monochromatic Dark</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>1st. Analogous</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>2nd. Analogous</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>1st. Split</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>2nd. Split</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>3rd. Split</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>4th. Split</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>1st. Triadic</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>2nd. Triadic</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>1st. Tetradic (base opposite)</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>2nd. Tetradic (angle)</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>3rd. Tetradic (angle opposite)</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>ColorWheelDialog</name>
    <message>
      <source>Cr&amp;eate color...</source>
      <translation>色を作成(&amp;E)...</translation>
    </message>
    <message>
      <source>C&amp;olor Components...</source>
      <translation>色成分(&amp;O)...</translation>
    </message>
    <message>
      <source>&amp;Import existing color...</source>
      <translation>すでにある色をインポート(&amp;I)...</translation>
    </message>
    <message>
      <source>&amp;Merge colors</source>
      <translation>色をマージ(&amp;M)</translation>
    </message>
    <message>
      <source>&amp;Replace colors</source>
      <translation>色を置換(&amp;R)</translation>
    </message>
    <message>
      <source>E&amp;xit</source>
      <translation>終了(&amp;X)</translation>
    </message>
    <message>
      <source>C&amp;olor</source>
      <translation>色(&amp;O)</translation>
    </message>
    <message>
      <source>Normal Vision</source>
      <translation>正常視力</translation>
    </message>
    <message>
      <source>Protanopia (Red)</source>
      <translation>赤色覚異常</translation>
    </message>
    <message>
      <source>Deuteranopia (Green)</source>
      <translation>緑色覚異常</translation>
    </message>
    <message>
      <source>Tritanopia (Blue)</source>
      <translation>青黄 色覚異常</translation>
    </message>
    <message>
      <source>Full Color Blindness</source>
      <translation>全色覚異常</translation>
    </message>
    <message>
      <source>Vision Defect:</source>
      <translation>視覚異常:</translation>
    </message>
    <message>
      <source>Color Wheel</source>
      <translation>カラーホイール</translation>
    </message>
    <message>
      <source>Color</source>
      <translation>色</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>名前</translation>
    </message>
    <message>
      <source>C</source>
      <translation>C</translation>
    </message>
    <message>
      <source>M</source>
      <translation>M</translation>
    </message>
    <message>
      <source>Y</source>
      <translation>Y</translation>
    </message>
    <message>
      <source>K</source>
      <translation>K</translation>
    </message>
    <message>
      <source>Select Method:</source>
      <translation>方法を選択:</translation>
    </message>
    <message>
      <source>Angle (0 - 90 degrees):</source>
      <translation>角度(0 - 90度):</translation>
    </message>
    <message>
      <source>&amp;Merge Colors</source>
      <translation>色をマージ(&amp;M)</translation>
    </message>
    <message>
      <source>&amp;Replace Colors</source>
      <translation>色を置換(&amp;R)</translation>
    </message>
    <message>
      <source>Merge created colors into the document colors</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Replace created colors in the document colors</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Leave colors untouched</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Difference between the selected value and the counted ones. Refer to documentation for more information.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Click the wheel to get the base color. It is hue in HSV mode.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Sample color scheme</source>
      <translation>サンプル色スキーム</translation>
    </message>
    <message>
      <source>Select one of the methods to create a color scheme. Refer to documentation for more information.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Colors of your chosen color scheme</source>
      <translation>選択した色スキームの色</translation>
    </message>
    <message>
      <source>Simulate common vision defects here. Select type of the defect.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Merging colors</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Error: </source>
      <translation>エラー: </translation>
    </message>
    <message>
      <source>Color %1 exists already!</source>
      <translation>色 %1 はすでに存在しています</translation>
    </message>
    <message>
      <source>Color %1 appended.</source>
      <translation>色 %1 が追加されました</translation>
    </message>
    <message>
      <source>Now opening the color manager.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color Merging</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>New Color</source>
      <translation>新しい色</translation>
    </message>
    <message>
      <source>Unable to find the requested color. You have probably selected black, gray or white. There is no way to process this color.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>ColorWheelPlugin</name>
    <message>
      <source>&amp;Color Wheel...</source>
      <translation>カラーホイール(&amp;C)...</translation>
    </message>
    <message>
      <source>Color setting helper</source>
      <translation>色設定ヘルパー</translation>
    </message>
    <message>
      <source>Color selector with color theory included.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>CommonStrings</name>
    <message>
      <source>&amp;Apply</source>
      <translation>適用(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>キャンセル(&amp;C)</translation>
    </message>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>OK(&amp;O)</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>保存(&amp;S)</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>警告</translation>
    </message>
  </context>
  <context>
    <name>Cpalette</name>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Shade:</source>
      <translation>色の濃さ:</translation>
    </message>
    <message>
      <source>Opacity:</source>
      <translation>不透明度:</translation>
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
      <source>Move Vector</source>
      <translation>ベクトルを移動</translation>
    </message>
    <message>
      <source>Normal</source>
      <translation>標準</translation>
    </message>
    <message>
      <source>Horizontal Gradient</source>
      <translation>水平グラディエント</translation>
    </message>
    <message>
      <source>Vertical Gradient</source>
      <translation>垂直グラディエント</translation>
    </message>
    <message>
      <source>Diagonal Gradient</source>
      <translation>対角グラディエント</translation>
    </message>
    <message>
      <source>Cross Diagonal Gradient</source>
      <translation>クロス対角グラディエント</translation>
    </message>
    <message>
      <source>Radial Gradient</source>
      <translation>放射グラディエント</translation>
    </message>
    <message>
      <source>Free linear Gradient</source>
      <translation>自由直線グラディエント</translation>
    </message>
    <message>
      <source>Free radial Gradient</source>
      <translation>自由放射グラディエント</translation>
    </message>
    <message>
      <source>Edit Line Color Properties</source>
      <translation>線の色のプロパティを編集</translation>
    </message>
    <message>
      <source>Edit Fill Color Properties</source>
      <translation>塗りつぶし色のプロパティを編集</translation>
    </message>
    <message>
      <source>Saturation of color</source>
      <translation>色の彩度</translation>
    </message>
    <message>
      <source>Normal or gradient fill method</source>
      <translation>標準もしくはグラディエントの塗りつぶし方</translation>
    </message>
    <message>
      <source>Set the transparency for the color selected</source>
      <translation>選択した色の透明度を設定してください</translation>
    </message>
    <message>
      <source>Move the start of the gradient vector with the left mouse button pressed and move the end of the gradient vector with the right mouse button pressed</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>CsvDialog</name>
    <message>
      <source>CSV Importer Options</source>
      <translation>CSVインポータオプション</translation>
    </message>
    <message>
      <source>Field delimiter:</source>
      <translation>フィールド区切り:</translation>
    </message>
    <message>
      <source>(TAB)</source>
      <translation>(TAB)</translation>
    </message>
    <message>
      <source>Value delimiter:</source>
      <translation>値の区切り:</translation>
    </message>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
    <message>
      <source>First row is a header</source>
      <translation>最初の行をヘッダにする</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>キャンセル</translation>
    </message>
  </context>
  <context>
    <name>CupsOptions</name>
    <message>
      <source>Printer Options</source>
      <translation>プリンタオプション</translation>
    </message>
    <message>
      <source>Page Set</source>
      <translation>ページセット</translation>
    </message>
    <message>
      <source>All Pages</source>
      <translation>全てのページ</translation>
    </message>
    <message>
      <source>Even Pages only</source>
      <translation>偶数ページのみ</translation>
    </message>
    <message>
      <source>Odd Pages only</source>
      <translation>奇数ページのみ</translation>
    </message>
    <message>
      <source>Mirror</source>
      <comment>#, fuzzy</comment>
      <translation>ミラー</translation>
    </message>
    <message>
      <source>No</source>
      <translation>いいえ</translation>
    </message>
    <message>
      <source>Yes</source>
      <translation>はい</translation>
    </message>
    <message>
      <source>Orientation</source>
      <translation>方向</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation>縦方向</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation>横方向</translation>
    </message>
    <message>
      <source>N-Up Printing</source>
      <translation>集約印刷</translation>
    </message>
    <message>
      <source>Page per Sheet</source>
      <translation>シートあたりのページ数</translation>
    </message>
    <message>
      <source>Pages per Sheet</source>
      <translation>シートあたりのページ数</translation>
    </message>
    <message>
      <source>Option</source>
      <translation>オプション</translation>
    </message>
    <message>
      <source>Value</source>
      <translation>値</translation>
    </message>
    <message>
      <source>This panel displays various CUPS options when printing. The exact parameters available will depend on your printer driver. You can confirm CUPS support by selecting Help > About. Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support. Missing library support is indicated by a *</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>CustomFDialog</name>
    <message>
      <source>&amp;Compress File</source>
      <translation>ファイルを圧縮(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Include Fonts</source>
      <translation>フォントを含める(&amp;I)</translation>
    </message>
    <message>
      <source>Encoding:</source>
      <translation>エンコーディング:</translation>
    </message>
    <message>
      <source>Moves to your Document Directory.
This can be set in the Preferences.</source>
      <translation>ドキュメントディレクトリに移動します。
設定でこれを設定することができます。</translation>
    </message>
  </context>
  <context>
    <name>CwSetColor</name>
    <message>
      <source>Set Color Components</source>
      <translation type="unfinished" />
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
      <source>H:</source>
      <translation>H:</translation>
    </message>
    <message>
      <source>S:</source>
      <translation>S:</translation>
    </message>
    <message>
      <source>V:</source>
      <translation>V:</translation>
    </message>
    <message>
      <source>R:</source>
      <translation>R:</translation>
    </message>
    <message>
      <source>G:</source>
      <translation>G:</translation>
    </message>
    <message>
      <source>B:</source>
      <translation>B:</translation>
    </message>
    <message>
      <source>C:</source>
      <translation>C:</translation>
    </message>
    <message>
      <source>M:</source>
      <translation>M:</translation>
    </message>
    <message>
      <source>Y:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <source>K:</source>
      <translation>K:</translation>
    </message>
    <message>
      <source>Set &amp;RGB</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set C&amp;MYK</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set &amp;HSV</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>DeferredTask</name>
    <message>
      <source>Cancelled by user</source>
      <translation>ユーザによってキャンセルされました</translation>
    </message>
  </context>
  <context>
    <name>DelColor</name>
    <message>
      <source>Delete Color</source>
      <translation>色を削除</translation>
    </message>
    <message>
      <source>Delete Color:</source>
      <translation>色を削除:</translation>
    </message>
    <message>
      <source>Replace With:</source>
      <translation>以下で置換:</translation>
    </message>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
  </context>
  <context>
    <name>DelPages</name>
    <message>
      <source>Delete Pages</source>
      <translation>ページを削除</translation>
    </message>
    <message>
      <source>Delete From:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>to:</source>
      <comment>#, fuzzy</comment>
      <translation>から</translation>
    </message>
  </context>
  <context>
    <name>DelStyle</name>
    <message>
      <source>Delete Style</source>
      <translation>スタイルを削除</translation>
    </message>
    <message>
      <source>Delete Style:</source>
      <translation>スタイルを削除:</translation>
    </message>
    <message>
      <source>Replace With:</source>
      <translation>以下で置換:</translation>
    </message>
    <message>
      <source>No Style</source>
      <translation>スタイルなし</translation>
    </message>
  </context>
  <context>
    <name>DocInfos</name>
    <message>
      <source>Document Information</source>
      <translation>ドキュメント情報</translation>
    </message>
    <message>
      <source>&amp;Title:</source>
      <translation>タイトル(&amp;T):</translation>
    </message>
    <message>
      <source>&amp;Author:</source>
      <translation>作者(&amp;A):</translation>
    </message>
    <message>
      <source>&amp;Keywords:</source>
      <translation>キーワード(&amp;K):</translation>
    </message>
    <message>
      <source>Descri&amp;ption:</source>
      <translation>詳細(&amp;P):</translation>
    </message>
    <message>
      <source>P&amp;ublisher:</source>
      <translation>発行者(&amp;U):</translation>
    </message>
    <message>
      <source>&amp;Contributors:</source>
      <translation>寄稿者(&amp;C):</translation>
    </message>
    <message>
      <source>Dat&amp;e:</source>
      <translation>日付(&amp;E):</translation>
    </message>
    <message>
      <source>T&amp;ype:</source>
      <translation>タイプ(&amp;Y):</translation>
    </message>
    <message>
      <source>F&amp;ormat:</source>
      <translation>フォーマット(&amp;O):</translation>
    </message>
    <message>
      <source>Identi&amp;fier:</source>
      <translation>識別子(&amp;F):</translation>
    </message>
    <message>
      <source>&amp;Source:</source>
      <translation>ソース(&amp;S):</translation>
    </message>
    <message>
      <source>&amp;Language:</source>
      <translation>言語(&amp;L):</translation>
    </message>
    <message>
      <source>&amp;Relation:</source>
      <translation>関連(&amp;R):</translation>
    </message>
    <message>
      <source>Co&amp;verage:</source>
      <translation>範囲(&amp;V):</translation>
    </message>
    <message>
      <source>Ri&amp;ghts:</source>
      <translation>権利(&amp;G):</translation>
    </message>
    <message>
      <source>Documen&amp;t</source>
      <translation>ドキュメント(&amp;T)</translation>
    </message>
    <message>
      <source>Further &amp;Information</source>
      <translation>詳細情報(&amp;I)</translation>
    </message>
    <message>
      <source>The person or organisation primarily responsible for making the content of the document. This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>A name given to the document. This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>An account of the content of the document. This field is for a brief description or abstract of the document. It is embedded in the PDF on export</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>The topic of the content of the document. This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>A person or organisation responsible for making the document available</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>A person or organisation responsible for making contributions to the content of the document</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>A date associated with an event in the life cycle of the document, in YYYY-MM-DD format, as per ISO 8601</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>The nature or genre of the content of the document, eg. categories, functions, genres, etc</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting. RFC2045,RFC2046 for MIME types are also useful here</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>An unambiguous reference to the document within a given context such as ISBN or URI</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>A reference to a document from which the present document is derived, eg. ISBN or URI</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>The language in which the content of the document is written, usually a ISO-639 language code optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>A reference to a related document, possibly using a formal identifier such as a ISBN or URI</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>The extent or scope of the content of the document, possibly including location, time and jurisdiction ranges</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Information about rights held in and over the document, eg. copyright, patent or trademark</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>DocSections</name>
    <message>
      <source>Add a page numbering section to the document. The new section will be added after the currently selected section.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Delete the currently selected section.</source>
      <translation>現在選択されているセクションを削除</translation>
    </message>
    <message>
      <source>Name: Optional name for section eg. Index&lt;br/>Shown: Select to show the page numbers in this section if there is one or more text frames setup to do so.&lt;br/>From: The page index for this section to start at.&lt;br/>To: The page index for this section to stop at.&lt;br/>Style: Select the page number style to be used.&lt;br/>Start: The index within the Style's range to star at. Eg. If Start=2 and Style=a,b,c, ..., the numbers will begin at b.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>1, 2, 3, ...</source>
      <translation>1, 2, 3, ...</translation>
    </message>
    <message>
      <source>i, ii, iii, ...</source>
      <translation>i, ii, iii, ...</translation>
    </message>
    <message>
      <source>I, II, III, ...</source>
      <translation>I, II, III, ...</translation>
    </message>
    <message>
      <source>a, b, c, ...</source>
      <translation>a, b, c, ...</translation>
    </message>
    <message>
      <source>A, B, C, ...</source>
      <translation>A, B, C, ...</translation>
    </message>
  </context>
  <context>
    <name>DocSectionsBase</name>
    <message>
      <source>Document Sections</source>
      <translation>ドキュメントセクション</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>名前</translation>
    </message>
    <message>
      <source>Shown</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>From</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>To</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Style</source>
      <translation>スタイル</translation>
    </message>
    <message>
      <source>Start</source>
      <translation>開始</translation>
    </message>
    <message>
      <source>&amp;Add</source>
      <translation>追加(&amp;A)</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>削除(&amp;D)</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
  </context>
  <context>
    <name>DocumentItemAttributes</name>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
    <message>
      <source>Relates To</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Is Parent Of</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Is Child Of</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Text Frames</source>
      <translation>テキストフレーム</translation>
    </message>
    <message>
      <source>Image Frames</source>
      <translation>画像フレーム</translation>
    </message>
    <message>
      <source>Boolean</source>
      <translation>ブーリアン</translation>
    </message>
    <message>
      <source>Integer</source>
      <translation>整数</translation>
    </message>
    <message>
      <source>String</source>
      <translation>文字列</translation>
    </message>
  </context>
  <context>
    <name>DocumentItemAttributesBase</name>
    <message>
      <source>Document Item Attributes</source>
      <translation>ドキュメントアイテム属性</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>名前</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>タイプ</translation>
    </message>
    <message>
      <source>Value</source>
      <translation>値</translation>
    </message>
    <message>
      <source>Parameter</source>
      <translation>パラメータ</translation>
    </message>
    <message>
      <source>Relationship</source>
      <translation>関連</translation>
    </message>
    <message>
      <source>Relationship To</source>
      <translation>関連先</translation>
    </message>
    <message>
      <source>Auto Add To</source>
      <translation>自動追加先</translation>
    </message>
    <message>
      <source>&amp;Add</source>
      <translation>追加(&amp;A)</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>コピー(&amp;C)</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>削除(&amp;D)</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>クリア(&amp;L)</translation>
    </message>
    <message>
      <source>Alt+L</source>
      <translation>Alt+L</translation>
    </message>
  </context>
  <context>
    <name>Druck</name>
    <message>
      <source>Setup Printer</source>
      <translation>プリンタ設定</translation>
    </message>
    <message>
      <source>Print Destination</source>
      <translation>印刷先</translation>
    </message>
    <message>
      <source>File</source>
      <translation>ファイル</translation>
    </message>
    <message>
      <source>&amp;Options...</source>
      <translation>オプション(&amp;O)...</translation>
    </message>
    <message>
      <source>&amp;File:</source>
      <translation>ファイル(&amp;F):</translation>
    </message>
    <message>
      <source>C&amp;hange...</source>
      <translation>変更(&amp;H)...</translation>
    </message>
    <message>
      <source>A&amp;lternative Printer Command</source>
      <translation>代わりのプリンタコマンド(&amp;L)</translation>
    </message>
    <message>
      <source>Co&amp;mmand:</source>
      <translation>コマンド(&amp;M):</translation>
    </message>
    <message>
      <source>Range</source>
      <translation>範囲</translation>
    </message>
    <message>
      <source>Print &amp;All</source>
      <translation>全て印刷(&amp;A)</translation>
    </message>
    <message>
      <source>Print Current Pa&amp;ge</source>
      <translation>現在のページを印刷(&amp;G)</translation>
    </message>
    <message>
      <source>Print &amp;Range</source>
      <translation>指定された範囲を印刷(&amp;R)</translation>
    </message>
    <message>
      <source>N&amp;umber of Copies:</source>
      <translation>部数(&amp;U):</translation>
    </message>
    <message>
      <source>Print Normal</source>
      <translation>標準で印刷</translation>
    </message>
    <message>
      <source>Print Separations</source>
      <translation>色分解して印刷</translation>
    </message>
    <message>
      <source>Print in Color if Available</source>
      <translation>可能ならカラーで印刷</translation>
    </message>
    <message>
      <source>Print in Grayscale</source>
      <translation>グレースケールで印刷</translation>
    </message>
    <message>
      <source>All</source>
      <translation>全て</translation>
    </message>
    <message>
      <source>Cyan</source>
      <translation>シアン</translation>
    </message>
    <message>
      <source>Magenta</source>
      <translation>マゼンダ</translation>
    </message>
    <message>
      <source>Yellow</source>
      <translation>イエロー</translation>
    </message>
    <message>
      <source>Black</source>
      <translation>ブラック</translation>
    </message>
    <message>
      <source>PostScript Level 1</source>
      <translation>PostScript レベル1</translation>
    </message>
    <message>
      <source>PostScript Level 2</source>
      <translation>PostScript レベル2</translation>
    </message>
    <message>
      <source>PostScript Level 3</source>
      <translation>PostScript レベル3</translation>
    </message>
    <message>
      <source>Options</source>
      <translation>オプション</translation>
    </message>
    <message>
      <source>Page</source>
      <translation>ページ</translation>
    </message>
    <message>
      <source>Mirror Page(s) Horizontal</source>
      <translation>ページを水平方向に反転</translation>
    </message>
    <message>
      <source>Mirror Page(s) Vertical</source>
      <translation>ページを垂直方向に反転</translation>
    </message>
    <message>
      <source>Set Media Size</source>
      <translation>メディアサイズを設定</translation>
    </message>
    <message>
      <source>Color</source>
      <translation>色</translation>
    </message>
    <message>
      <source>Apply Under Color Removal</source>
      <translation>下色除去を適用</translation>
    </message>
    <message>
      <source>Convert Spot Colors to Process Colors</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Apply ICC Profiles</source>
      <translation>ICCプロファイルを適用</translation>
    </message>
    <message>
      <source>Advanced Options</source>
      <translation>詳細オプション</translation>
    </message>
    <message>
      <source>Preview...</source>
      <translation>プレビュー...</translation>
    </message>
    <message>
      <source>&amp;Print</source>
      <translation>印刷(&amp;P)</translation>
    </message>
    <message>
      <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
      <translation>カンマで区切られたトークンのリストを入力してください。
トークンは*で全てのページを、1-5のようにしてページ範囲を、
もしくは単一のページ番号が利用できます。</translation>
    </message>
    <message>
      <source>Use an alternative print manager, such as kprinter or gtklp, to utilize additional printing options</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Sets the PostScript Level.
 Setting to Level 1 or 2 can create huge files</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis.UCR reduces the possibility of over saturation with CMY inks.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Allows you to embed ICC profiles in the print stream when color management is enabled</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>This enables you to explicitely set the media size of the PostScript file. Not recommended unless requested by your printer.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Failed to retrieve printer settings</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Save as</source>
      <translation>名前を付けて保存</translation>
    </message>
    <message>
      <source>PostScript Files (*.ps);;All Files (*)</source>
      <translation>PostScriptファイル (*.ps);;全てのファイル (*)</translation>
    </message>
  </context>
  <context>
    <name>EPSPlug</name>
    <message>
      <source>Importing File:
%1
failed!</source>
      <translation>ファイルのインポート:
%1
に失敗しました!</translation>
    </message>
    <message>
      <source>Fatal Error</source>
      <translation>致命的なエラー</translation>
    </message>
  </context>
  <context>
    <name>EditStyle</name>
    <message>
      <source>Edit Style</source>
      <translation>スタイルを編集</translation>
    </message>
    <message>
      <source>&amp;Name:</source>
      <translation>名前(&amp;N):</translation>
    </message>
    <message>
      <source>Character</source>
      <translation>文字</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
    <message>
      <source>Distances</source>
      <translation>距離</translation>
    </message>
    <message>
      <source>Fixed Linespacing</source>
      <translation>固定した行間隔</translation>
    </message>
    <message>
      <source>Automatic Linespacing</source>
      <translation>自動行間隔</translation>
    </message>
    <message>
      <source>Align to Baseline Grid</source>
      <translation>ベースライングリッドに合わせる</translation>
    </message>
    <message>
      <source>Drop Caps</source>
      <translation>ドロップキャップ</translation>
    </message>
    <message>
      <source>&amp;Lines:</source>
      <translation>行数(&amp;L):</translation>
    </message>
    <message>
      <source>Distance from Text:</source>
      <translation>テキストからの距離:</translation>
    </message>
    <message>
      <source>Tabulators and Indentation</source>
      <translation>タブとインデント</translation>
    </message>
    <message>
      <source>Preview of the Paragraph Style</source>
      <translation>段落スタイルのプレビュー</translation>
    </message>
    <message>
      <source>Background</source>
      <translation>背景</translation>
    </message>
    <message>
      <source>Name of your paragraph style</source>
      <translation>段落スタイルの名前</translation>
    </message>
    <message>
      <source>Font of selected text or object</source>
      <translation>選択されたテキストまたはオブジェクトのフォント</translation>
    </message>
    <message>
      <source>Font Size</source>
      <translation>フォントサイズ</translation>
    </message>
    <message>
      <source>Color of text fill</source>
      <translation>テキストの塗りつぶし色</translation>
    </message>
    <message>
      <source>Color of text stroke</source>
      <translation>テキストの輪郭色</translation>
    </message>
    <message>
      <source>Determines the overall height, in line numbers, of the Drop Caps</source>
      <comment>#, fuzzy</comment>
      <translation>ドロップキャップの全体的な高さである行数を決定します</translation>
    </message>
    <message>
      <source>Determines the gap between the DropCaps and the Text</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Spacing above the paragraph</source>
      <translation>段落上の間隔</translation>
    </message>
    <message>
      <source>Spacing below the paragraph</source>
      <translation>段落下の間隔</translation>
    </message>
    <message>
      <source>Line Spacing</source>
      <translation>行間隔</translation>
    </message>
    <message>
      <source>Toggles sample text of this paragraph style</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Name of the style is not unique</source>
      <translation>スタイル名はすでに存在します</translation>
    </message>
  </context>
  <context>
    <name>Editor</name>
    <message>
      <source>Editor</source>
      <translation>エディタ</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>新規(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Open...</source>
      <translation>開く(&amp;O)...</translation>
    </message>
    <message>
      <source>Save &amp;As...</source>
      <translation>名前を付けて保存(&amp;A)...</translation>
    </message>
    <message>
      <source>&amp;Save and Exit</source>
      <translation>保存して終了(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Exit without Saving</source>
      <translation>保存せずに終了(&amp;E)</translation>
    </message>
    <message>
      <source>&amp;Undo</source>
      <translation>元に戻す(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Redo</source>
      <translation>やり直し(&amp;R)</translation>
    </message>
    <message>
      <source>Cu&amp;t</source>
      <translation>切り取り(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>コピー(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation>貼り付け(&amp;P)</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>クリア(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Get Field Names</source>
      <translation>フィールド名を取得(&amp;G)</translation>
    </message>
    <message>
      <source>&amp;File</source>
      <translation>ファイル(&amp;F)</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation>編集(&amp;E)</translation>
    </message>
    <message>
      <source>JavaScripts (*.js);;All Files (*)</source>
      <translation>JavaScript (*.js);;全てのファイル (*)</translation>
    </message>
  </context>
  <context>
    <name>EffectsDialog</name>
    <message>
      <source>Image Effects</source>
      <translation>画像のエフェクト</translation>
    </message>
    <message>
      <source>Options:</source>
      <translation>オプション:</translation>
    </message>
    <message>
      <source>Color:</source>
      <translation>色:</translation>
    </message>
    <message>
      <source>Shade:</source>
      <translation>色の濃さ:</translation>
    </message>
    <message>
      <source>Brightness:</source>
      <translation>輝度:</translation>
    </message>
    <message>
      <source>Contrast:</source>
      <translation>コントラスト:</translation>
    </message>
    <message>
      <source>Radius:</source>
      <translation>半径:</translation>
    </message>
    <message>
      <source>Value:</source>
      <translation>値:</translation>
    </message>
    <message>
      <source>Posterize:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Available Effects</source>
      <translation>利用可能なエフェクト</translation>
    </message>
    <message>
      <source>Blur</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Brightness</source>
      <translation>輝度</translation>
    </message>
    <message>
      <source>Colorize</source>
      <translation>色を付ける</translation>
    </message>
    <message>
      <source>Contrast</source>
      <translation>コントラスト</translation>
    </message>
    <message>
      <source>Grayscale</source>
      <translation>グレースケール</translation>
    </message>
    <message>
      <source>Invert</source>
      <translation>反転</translation>
    </message>
    <message>
      <source>Posterize</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Sharpen</source>
      <comment>#, fuzzy</comment>
      <translation>強調</translation>
    </message>
    <message>
      <source>>></source>
      <translation>>></translation>
    </message>
    <message>
      <source>&lt;&lt;</source>
      <translation>&lt;&lt;</translation>
    </message>
    <message>
      <source>Effects in use</source>
      <translation>エフェクトは使用中です</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>キャンセル</translation>
    </message>
  </context>
  <context>
    <name>ExportForm</name>
    <message>
      <source>Choose a Export Directory</source>
      <translation>エクスポートするディレクトリを選択</translation>
    </message>
    <message>
      <source>Export as Image(s)</source>
      <translation>画像としてエクスポート</translation>
    </message>
    <message>
      <source>&amp;Export to Directory:</source>
      <translation>エクスポートするディレクトリ(&amp;E):</translation>
    </message>
    <message>
      <source>C&amp;hange...</source>
      <translation>変更(&amp;H)...</translation>
    </message>
    <message>
      <source>Options</source>
      <translation>オプション</translation>
    </message>
    <message>
      <source>Image &amp;Type:</source>
      <translation>画像タイプ(&amp;T):</translation>
    </message>
    <message>
      <source>&amp;Quality:</source>
      <translation>品質(&amp;Q):</translation>
    </message>
    <message>
      <source>&amp;Resolution:</source>
      <translation>解像度(&amp;R):</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>サイズ(&amp;S):</translation>
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
      <translation>範囲</translation>
    </message>
    <message>
      <source>&amp;Current page</source>
      <translation>現在のページ(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;All pages</source>
      <translation>全てのページ(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;Range</source>
      <translation>範囲(&amp;R)</translation>
    </message>
    <message>
      <source>C</source>
      <translation>C</translation>
    </message>
    <message>
      <source>Export a range of pages</source>
      <translation>指定範囲をエクスポート</translation>
    </message>
    <message>
      <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
      <translation>カンマで区切られたトークンのリストを入力してください。
トークンは*で全てのページを、1-5のようにしてページ範囲を、
もしくは単一のページ番号が利用できます。</translation>
    </message>
    <message>
      <source>Export all pages</source>
      <translation>全てのページをエクスポート</translation>
    </message>
    <message>
      <source>Export only the current page</source>
      <translation>現在のページのみエクスポート</translation>
    </message>
    <message>
      <source>Resolution of the Images
Use 72 dpi for Images intended for the Screen</source>
      <translation>画像の解像度 
画面向けの画像には72 dpiを使用してください</translation>
    </message>
    <message>
      <source>Size of the images. 100% for no changes, 200% for two times larger etc.</source>
      <translation>画像のサイズ。100%では変化せず、200%では2倍大きくなります。</translation>
    </message>
    <message>
      <source>The quality of your images - 100% is the best, 1% the lowest quality</source>
      <translation>画像の品質 - 100%が最高で、1%は最低の品質です</translation>
    </message>
    <message>
      <source>Available export formats</source>
      <translation>エクスポート可能なフォーマット</translation>
    </message>
    <message>
      <source>The output directory - the place to store your images.
Name of the export file will be 'documentname-pagenumber.filetype'</source>
      <translation>出力ディレクトリ - 画像を保存する場所です。
出力ファイル名は 'ドキュメント名-ページ番号.ファイルタイプ' になります。</translation>
    </message>
    <message>
      <source>Change the output directory</source>
      <translation>出力ディレクトリを変更</translation>
    </message>
  </context>
  <context>
    <name>ExtImageProps</name>
    <message>
      <source>Extended Image Properties</source>
      <translation>拡張画像のプロパティ</translation>
    </message>
    <message>
      <source>Normal</source>
      <translation>標準</translation>
    </message>
    <message>
      <source>Darken</source>
      <translation>暗くする</translation>
    </message>
    <message>
      <source>Lighten</source>
      <translation>明るくする</translation>
    </message>
    <message>
      <source>Hue</source>
      <translation>色合い</translation>
    </message>
    <message>
      <source>Saturation</source>
      <translation>彩度</translation>
    </message>
    <message>
      <source>Color</source>
      <translation>色</translation>
    </message>
    <message>
      <source>Luminosity</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Multiply</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Screen</source>
      <translation>スクリーン</translation>
    </message>
    <message>
      <source>Dissolve</source>
      <translation>ディソルブ</translation>
    </message>
    <message>
      <source>Overlay</source>
      <translation>オーバーレイ</translation>
    </message>
    <message>
      <source>Hard Light</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Soft Light</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Difference</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Exclusion</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color Dodge</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color Burn</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Exlusion</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Blend Mode:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Opacity:</source>
      <translation>不透明度:</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>名前</translation>
    </message>
    <message>
      <source>Background</source>
      <translation>背景</translation>
    </message>
    <message>
      <source>Layers</source>
      <translation>レイヤー</translation>
    </message>
    <message>
      <source>Don't use any Path</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Paths</source>
      <translation>パス</translation>
    </message>
  </context>
  <context>
    <name>FDialogPreview</name>
    <message>
      <source>Size:</source>
      <translation>サイズ:</translation>
    </message>
    <message>
      <source>Resolution:</source>
      <translation>解像度:</translation>
    </message>
    <message>
      <source>DPI</source>
      <translation>DPI</translation>
    </message>
    <message>
      <source>Unknown</source>
      <translation>不明</translation>
    </message>
    <message>
      <source>RGB</source>
      <translation>RGB</translation>
    </message>
    <message>
      <source>CMYK</source>
      <translation>CMYK</translation>
    </message>
    <message>
      <source>Grayscale</source>
      <translation>グレースケール</translation>
    </message>
    <message>
      <source>Colorspace:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Title:</source>
      <translation>タイトル:</translation>
    </message>
    <message>
      <source>No Title</source>
      <translation>タイトルなし</translation>
    </message>
    <message>
      <source>Author:</source>
      <translation>作者:</translation>
    </message>
    <message>
      <source>Scribus Document</source>
      <translation>Scribusドキュメント</translation>
    </message>
  </context>
  <context>
    <name>FileLoader</name>
    <message>
      <source>Some fonts used by this document have been substituted:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source> was replaced by: </source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>FontPrefs</name>
    <message>
      <source>Available Fonts</source>
      <translation>利用可能なフォント</translation>
    </message>
    <message>
      <source>Font Substitutions</source>
      <translation>フォント置換</translation>
    </message>
    <message>
      <source>Additional Paths</source>
      <translation>追加パス</translation>
    </message>
    <message>
      <source>Font Name</source>
      <comment>font preview</comment>
      <translation>フォント名</translation>
    </message>
    <message>
      <source>Use Font</source>
      <comment>font preview</comment>
      <translation>フォントの使用</translation>
    </message>
    <message>
      <source>Embed in:</source>
      <comment>font preview</comment>
      <translation>埋め込み</translation>
    </message>
    <message>
      <source>Subset</source>
      <comment>font preview</comment>
      <translation>サブセット</translation>
    </message>
    <message>
      <source>Path to Font File</source>
      <comment>font preview</comment>
      <translation>フォントファイルのパス</translation>
    </message>
    <message>
      <source>PostScript</source>
      <translation>PostScript</translation>
    </message>
    <message>
      <source>&amp;Available Fonts</source>
      <translation>利用可能なフォント(&amp;A)</translation>
    </message>
    <message>
      <source>Font Name</source>
      <translation>フォント名</translation>
    </message>
    <message>
      <source>Replacement</source>
      <translation>代替フォント</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>削除(&amp;D)</translation>
    </message>
    <message>
      <source>Font &amp;Substitutions</source>
      <translation>フォント置換(&amp;S)</translation>
    </message>
    <message>
      <source>C&amp;hange...</source>
      <translation>変更(&amp;H)...</translation>
    </message>
    <message>
      <source>A&amp;dd...</source>
      <translation>追加(&amp;D)...</translation>
    </message>
    <message>
      <source>&amp;Remove</source>
      <translation>削除(&amp;R)</translation>
    </message>
    <message>
      <source>Font search paths can only be set in Preferences, and only when there is no document currently open. Close any open documents, then use Edit->Settings to change the font search path.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Additional &amp;Paths</source>
      <translation>追加パス(&amp;P)</translation>
    </message>
    <message>
      <source>Choose a Directory</source>
      <translation>ディレクトリを選択</translation>
    </message>
  </context>
  <context>
    <name>FontPreview</name>
    <message>
      <source>Woven silk pyjamas exchanged for blue quartz</source>
      <comment>font preview</comment>
      <translation>Woven silk pyjamas exchanged for blue quartz</translation>
    </message>
    <message>
      <source>Font Name</source>
      <comment>font preview</comment>
      <translation>フォント名</translation>
    </message>
    <message>
      <source>Doc</source>
      <comment>font preview</comment>
      <translation>ドキュメント</translation>
    </message>
    <message>
      <source>Type</source>
      <comment>font preview</comment>
      <translation>タイプ</translation>
    </message>
    <message>
      <source>Subset</source>
      <comment>font preview</comment>
      <translation>サブセット</translation>
    </message>
    <message>
      <source>Access</source>
      <comment>font preview</comment>
      <translation>アクセス</translation>
    </message>
    <message>
      <source>Font Size:</source>
      <translation>フォントサイズ:</translation>
    </message>
    <message>
      <source>Fonts Preview</source>
      <comment>font preview</comment>
      <translation>フォントプレビュー</translation>
    </message>
    <message>
      <source>&amp;Append</source>
      <translation>追加(&amp;A)</translation>
    </message>
    <message>
      <source>Alt+O</source>
      <comment>font preview</comment>
      <translation>Alt+O</translation>
    </message>
    <message>
      <source>Quick Search: </source>
      <translation>クイックサーチ: </translation>
    </message>
    <message>
      <source>&amp;Search</source>
      <translation>検索(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <comment>font preview</comment>
      <translation>閉じる(&amp;C)</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <comment>font preview</comment>
      <translation>Alt+C</translation>
    </message>
    <message>
      <source>Append selected font into Style, Font menu</source>
      <comment>font preview</comment>
      <translation>選択されたフォントをスタイル、フォントメニューに追加します</translation>
    </message>
    <message>
      <source>Leave preview</source>
      <comment>font preview</comment>
      <translation>プレビューを終了</translation>
    </message>
    <message>
      <source>Typing the text here provides quick searching in the font names. E.g. 'bold' shows all fonts with Bold in name. Searching is case insensitive.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Start searching</source>
      <translation>検索の開始</translation>
    </message>
    <message>
      <source>Size of the selected font</source>
      <translation>選択されたフォントのサイズ</translation>
    </message>
    <message>
      <source>User</source>
      <comment>font preview</comment>
      <translation>ユーザ</translation>
    </message>
    <message>
      <source>System</source>
      <comment>font preview</comment>
      <translation>システム</translation>
    </message>
  </context>
  <context>
    <name>FontPreviewPlugin</name>
    <message>
      <source>&amp;Font Preview...</source>
      <translation>フォントプレビュー(&amp;F)...</translation>
    </message>
    <message>
      <source>Font Preview dialog</source>
      <translation>フォントプレビューダイアログ</translation>
    </message>
    <message>
      <source>Sorting, searching and browsing available fonts.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>FontReplaceDialog</name>
    <message>
      <source>Font Substitution</source>
      <translation>フォント置換</translation>
    </message>
    <message>
      <source>This document contains some fonts that are not installed on your system, please choose a suitable replacement for them. Cancel will stop the document from loading.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Original Font</source>
      <translation>元のフォント</translation>
    </message>
    <message>
      <source>Substitution Font</source>
      <translation>代替フォント</translation>
    </message>
    <message>
      <source>Make these substitutions permanent</source>
      <translation>これらの置換を常に行う</translation>
    </message>
    <message>
      <source>Cancels these font substitutions and stops loading the document.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Enabling this tells Scribus to use these replacements for missing fonts permanently in all future layouts. This can be reverted or changed in Edit > Preferences > Fonts.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>If you select OK, then save, these substitutions are made permanent in the document.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>GradientEditor</name>
    <message>
      <source>Position:</source>
      <translation>位置:</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Here you can add, change or remove Color-Stops.</source>
      <translation>ここでカラーストップを追加、変更、削除できます</translation>
    </message>
  </context>
  <context>
    <name>GuideManager</name>
    <message>
      <source>Manage Guides</source>
      <translation>ガイドを管理</translation>
    </message>
    <message>
      <source>Horizontal Guides</source>
      <translation>水平ガイド</translation>
    </message>
    <message>
      <source>Guide</source>
      <translation>ガイド</translation>
    </message>
    <message>
      <source>Unit</source>
      <translation>単位</translation>
    </message>
    <message>
      <source>&amp;Y-Pos:</source>
      <translation>位置&amp;Y:</translation>
    </message>
    <message>
      <source>&amp;Add</source>
      <translation>追加(&amp;A)</translation>
    </message>
    <message>
      <source>D&amp;elete</source>
      <translation>削除(&amp;E)</translation>
    </message>
    <message>
      <source>Vertical Guides</source>
      <translation>垂直ガイド</translation>
    </message>
    <message>
      <source>&amp;X-Pos:</source>
      <translation>位置&amp;X:</translation>
    </message>
    <message>
      <source>A&amp;dd</source>
      <translation>追加(&amp;D)</translation>
    </message>
    <message>
      <source>De&amp;lete</source>
      <translation>削除(&amp;L)</translation>
    </message>
    <message>
      <source>Rows and Columns - Automatic Guides</source>
      <translation>行列 - 自動ガイド</translation>
    </message>
    <message>
      <source>&amp;Rows:</source>
      <translation>行(&amp;R):</translation>
    </message>
    <message>
      <source>C&amp;olumns:</source>
      <translation>列(&amp;O):</translation>
    </message>
    <message>
      <source>Row &amp;Gap</source>
      <translation>行ギャップ(&amp;G)</translation>
    </message>
    <message>
      <source>Colum&amp;n Gap</source>
      <translation>列ギャップ(&amp;N)</translation>
    </message>
    <message>
      <source>Refer to:</source>
      <translation>参照:</translation>
    </message>
    <message>
      <source>&amp;Page</source>
      <translation>ページ(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;Margins</source>
      <translation>マージン(&amp;M)</translation>
    </message>
    <message>
      <source>&amp;Selection</source>
      <translation>選択範囲(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Lock Guides</source>
      <translation>ガイドをロック(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Apply to All Pages</source>
      <translation>全てのページに適用(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>閉じる(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Update</source>
      <translation>更新(&amp;U)</translation>
    </message>
    <message>
      <source>Preview</source>
      <translation>プレビュー</translation>
    </message>
    <message>
      <source>Set the guides in document. Guide manager is still opened but the changes are persistant</source>
      <comment>guide manager</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>There is empty (0.0) guide already</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>HelpBrowser</name>
    <message>
      <source>Contents</source>
      <translation>目次</translation>
    </message>
    <message>
      <source>Link</source>
      <translation>リンク</translation>
    </message>
    <message>
      <source>&amp;Contents</source>
      <translation>目次(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Search</source>
      <translation>検索(&amp;S)</translation>
    </message>
    <message>
      <source>Se&amp;arch</source>
      <translation>検索(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>新規(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>削除(&amp;D)</translation>
    </message>
    <message>
      <source>De&amp;lete All</source>
      <translation>全て削除(&amp;L)</translation>
    </message>
    <message>
      <source>Book&amp;marks</source>
      <translation>ブックマーク(&amp;M)</translation>
    </message>
    <message>
      <source>&amp;Print...</source>
      <translation>印刷(&amp;P)...</translation>
    </message>
    <message>
      <source>E&amp;xit</source>
      <translation>終了(&amp;X)</translation>
    </message>
    <message>
      <source>&amp;File</source>
      <translation>ファイル(&amp;F)</translation>
    </message>
    <message>
      <source>&amp;Find...</source>
      <translation>検索(&amp;F)...</translation>
    </message>
    <message>
      <source>Find &amp;Next</source>
      <translation>次を検索(&amp;N)</translation>
    </message>
    <message>
      <source>Find &amp;Previous</source>
      <translation>前を検索(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation>編集(&amp;E)</translation>
    </message>
    <message>
      <source>&amp;Add Bookmark</source>
      <translation>ブックマークに追加(&amp;A)</translation>
    </message>
    <message>
      <source>D&amp;elete All</source>
      <translation>全て削除(&amp;E)</translation>
    </message>
    <message>
      <source>&amp;Bookmarks</source>
      <translation>ブックマーク(&amp;B)</translation>
    </message>
    <message>
      <source>Scribus Online Help</source>
      <translation>Scribus オンラインヘルプ</translation>
    </message>
    <message>
      <source>Searching is case unsensitive</source>
      <translation>検索で大文字小文字を区別しません</translation>
    </message>
    <message>
      <source>Sorry, no manual available! Please see: http://docs.scribus.net for updated docs
and www.scribus.net for downloads.</source>
      <translation>すみませんが、利用可能なマニュアルはありません! 最新のドキュメントは http://docs.scribus.net を 
ダウンロードは www.scribus.net を参照してください。</translation>
    </message>
    <message>
      <source>unknown</source>
      <translation>不明</translation>
    </message>
    <message>
      <source>Find</source>
      <translation>検索</translation>
    </message>
    <message>
      <source>Search Term:</source>
      <translation>検索語:</translation>
    </message>
    <message>
      <source>New Bookmark</source>
      <translation>新規ブックマーク</translation>
    </message>
    <message>
      <source>New Bookmark's Title:</source>
      <translation>新規ブックマークのタイトル:</translation>
    </message>
  </context>
  <context>
    <name>HyAsk</name>
    <message>
      <source>Possible Hyphenation</source>
      <translation>利用可能なハイフネーション</translation>
    </message>
    <message>
      <source>Accept</source>
      <translation>許可</translation>
    </message>
    <message>
      <source>Skip</source>
      <translation>スキップ</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>キャンセル</translation>
    </message>
  </context>
  <context>
    <name>HySettings</name>
    <message>
      <source>&amp;Hyphenation Suggestions</source>
      <translation>ハイフネーションの提案(&amp;H)</translation>
    </message>
    <message>
      <source>Hyphenate Text Automatically &amp;During Typing</source>
      <translation>入力中に自動的にテキストをハイフンでつなぐ(&amp;D)</translation>
    </message>
    <message>
      <source>&amp;Language:</source>
      <translation>言語(&amp;L):</translation>
    </message>
    <message>
      <source>&amp;Smallest Word:</source>
      <translation>最小のワード数(&amp;S):</translation>
    </message>
    <message>
      <source>Consecutive Hyphenations &amp;Allowed:</source>
      <translation>連続したハイフネーションを許可(&amp;A):</translation>
    </message>
    <message>
      <source>A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Enables automatic hyphenation of your text while typing.</source>
      <translation>入力中にテキストの自動ハイフネーションを有効にする</translation>
    </message>
    <message>
      <source>Length of the smallest word to be hyphenated.</source>
      <translation>ワードをハイフンで結ぶ最小の長さ</translation>
    </message>
    <message>
      <source>Maximum number of Hyphenations following each other.
A value of 0 means unlimited hyphenations.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>ImageInfoDialog</name>
    <message>
      <source>Image Info</source>
      <translation>画像情報</translation>
    </message>
    <message>
      <source>General Info</source>
      <translation>全般情報</translation>
    </message>
    <message>
      <source>Date / Time:</source>
      <translation>日付 / 時刻:</translation>
    </message>
    <message>
      <source>Has Embedded Profile:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Yes</source>
      <translation>はい</translation>
    </message>
    <message>
      <source>No</source>
      <translation>いいえ</translation>
    </message>
    <message>
      <source>Profile Name:</source>
      <translation>プロファイル名:</translation>
    </message>
    <message>
      <source>Has Embedded Paths:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Has Layers:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>EXIF Info</source>
      <translation>EXIF情報</translation>
    </message>
    <message>
      <source>Artist:</source>
      <translation>アーティスト:</translation>
    </message>
    <message>
      <source>Comment:</source>
      <translation>コメント:</translation>
    </message>
    <message>
      <source>User Comment:</source>
      <translation>ユーザコメント:</translation>
    </message>
    <message>
      <source>Camera Model:</source>
      <translation>カメラモデル:</translation>
    </message>
    <message>
      <source>Camera Manufacturer:</source>
      <translation>カメラ製造者:</translation>
    </message>
    <message>
      <source>Description:</source>
      <translation>詳細:</translation>
    </message>
    <message>
      <source>Copyright:</source>
      <translation>著作権:</translation>
    </message>
    <message>
      <source>Scanner Model:</source>
      <translation>スキャナモデル:</translation>
    </message>
    <message>
      <source>Scanner Manufacturer:</source>
      <translation>スキャナ製造者:</translation>
    </message>
  </context>
  <context>
    <name>ImportPSPlugin</name>
    <message>
      <source>Import &amp;EPS/PS...</source>
      <translation>EPS/PSをインポート(&amp;E)...</translation>
    </message>
    <message>
      <source>Imports EPS Files</source>
      <translation>EPSファイルをインポート</translation>
    </message>
    <message>
      <source>Imports most EPS files into the current document,
converting their vector data into Scribus objects.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>PostScript</source>
      <translation>PostScript</translation>
    </message>
  </context>
  <context>
    <name>InsPage</name>
    <message>
      <source>Insert Page</source>
      <translation>ページを挿入</translation>
    </message>
    <message>
      <source>&amp;Insert</source>
      <translation>挿入(&amp;I)</translation>
    </message>
    <message>
      <source>Page(s)</source>
      <translation>ページ</translation>
    </message>
    <message>
      <source>before Page</source>
      <translation>ページの前に</translation>
    </message>
    <message>
      <source>after Page</source>
      <translation>ページの後に</translation>
    </message>
    <message>
      <source>at End</source>
      <translation>最後に</translation>
    </message>
    <message>
      <source>Master Pages</source>
      <translation>マスターページ</translation>
    </message>
    <message>
      <source>Normal</source>
      <translation>標準</translation>
    </message>
    <message>
      <source>&amp;Master Page:</source>
      <translation>マスターページ(&amp;M):</translation>
    </message>
    <message>
      <source>Page Size</source>
      <translation>ページサイズ</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>サイズ(&amp;S):</translation>
    </message>
    <message>
      <source>Custom</source>
      <translation>カスタム</translation>
    </message>
    <message>
      <source>Orie&amp;ntation:</source>
      <translation>方向(&amp;N):</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation>縦方向</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation>横方向</translation>
    </message>
    <message>
      <source>&amp;Width:</source>
      <translation>幅(&amp;W):</translation>
    </message>
    <message>
      <source>&amp;Height:</source>
      <translation>高さ(&amp;H):</translation>
    </message>
    <message>
      <source>Move Objects with their Page</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>InsertTable</name>
    <message>
      <source>Insert Table</source>
      <translation>テーブルを挿入</translation>
    </message>
    <message>
      <source>Number of rows:</source>
      <translation>行数:</translation>
    </message>
    <message>
      <source>Number of columns:</source>
      <translation>列数:</translation>
    </message>
  </context>
  <context>
    <name>JavaDocs</name>
    <message>
      <source>Edit JavaScripts</source>
      <translation>JavaScriptを編集</translation>
    </message>
    <message>
      <source>&amp;Edit...</source>
      <translation>編集(&amp;E)...</translation>
    </message>
    <message>
      <source>&amp;Add...</source>
      <translation>追加(&amp;A)...</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>削除(&amp;D)</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>閉じる(&amp;C)</translation>
    </message>
    <message>
      <source>Adds a new Script, predefines a function with the same name. If you want to use this script as an &quot;Open Action&quot; script be sure not to change the name of the function.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;New Script:</source>
      <translation>新規スクリプト(&amp;N):</translation>
    </message>
    <message>
      <source>New Script</source>
      <translation>新規スクリプト</translation>
    </message>
    <message>
      <source>Do you really want to delete this script?</source>
      <translation>本当にこのスクリプトを削除しますか?</translation>
    </message>
    <message>
      <source>&amp;Yes</source>
      <translation>はい(&amp;Y)</translation>
    </message>
    <message>
      <source>&amp;No</source>
      <translation>いいえ(&amp;N)</translation>
    </message>
  </context>
  <context>
    <name>KeyManager</name>
    <message>
      <source>Action</source>
      <translation>アクション</translation>
    </message>
    <message>
      <source>Current Key</source>
      <translation>現在のキー</translation>
    </message>
    <message>
      <source>Select a Key for this Action</source>
      <translation>このアクションに対するキーを選択</translation>
    </message>
    <message>
      <source>&amp;No Key</source>
      <translation>キーなし(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;User Defined Key</source>
      <translation>ユーザ定義キー(&amp;U)</translation>
    </message>
    <message>
      <source>ALT+SHIFT+T</source>
      <translation>ALT+SHIFT+T</translation>
    </message>
    <message>
      <source>Set &amp;Key</source>
      <translation>キーを設定(&amp;K)</translation>
    </message>
    <message>
      <source>Loadable Shortcut Sets</source>
      <translation>読み込み可能なショートカットのセット</translation>
    </message>
    <message>
      <source>&amp;Load</source>
      <translation>読み込み(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Import...</source>
      <translation>インポート(&amp;I)...</translation>
    </message>
    <message>
      <source>&amp;Export...</source>
      <translation>エクスポート(&amp;E)...</translation>
    </message>
    <message>
      <source>&amp;Reset</source>
      <translation>リセット(&amp;R)</translation>
    </message>
    <message>
      <source>Keyboard shortcut sets available to load</source>
      <translation>読み込み可能なキーボードショートカットのセットです</translation>
    </message>
    <message>
      <source>Load the selected shortcut set</source>
      <translation>選択されたショートカットセットを読み込みます</translation>
    </message>
    <message>
      <source>Import a shortcut set into the current configuration</source>
      <translation>ショートカットセットを現在の設定にインポートします</translation>
    </message>
    <message>
      <source>Export the current shortcuts into an importable file</source>
      <translation>現在のショートカットをインポート可能なファイルにエクスポートします</translation>
    </message>
    <message>
      <source>Reload the default Scribus shortcuts</source>
      <translation>デフォルトのScribusショートカットを再読み込みします</translation>
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
      <source>Meta</source>
      <translation>Meta</translation>
    </message>
    <message>
      <source>Meta+</source>
      <translation>Meta+</translation>
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
      <source>This key sequence is already in use</source>
      <translation>このキーシーケンスはすでに使用されています</translation>
    </message>
    <message>
      <source>Key Set XML Files (*.ksxml)</source>
      <translation>キーセットXMLファイル (*.ksxml)</translation>
    </message>
  </context>
  <context>
    <name>LayerPalette</name>
    <message>
      <source>Delete Layer</source>
      <translation>レイヤーを削除</translation>
    </message>
    <message>
      <source>Do you want to delete all objects on this layer too?</source>
      <translation>このレイヤー上の全てのオブジェクトも削除しますか?</translation>
    </message>
    <message>
      <source>Layers</source>
      <translation>レイヤー</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>名前</translation>
    </message>
    <message>
      <source>Add a new layer</source>
      <translation>新規レイヤーを追加</translation>
    </message>
    <message>
      <source>Delete layer</source>
      <translation>レイヤーを削除</translation>
    </message>
    <message>
      <source>Raise layer</source>
      <translation>レイヤーを上に</translation>
    </message>
    <message>
      <source>Lower layer</source>
      <translation>レイヤーを下に</translation>
    </message>
  </context>
  <context>
    <name>LineFormate</name>
    <message>
      <source>Edit Line Styles</source>
      <translation>線スタイルを編集</translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation>インポート(&amp;I)</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>新規(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation>編集(&amp;E)</translation>
    </message>
    <message>
      <source>D&amp;uplicate</source>
      <translation>複製(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>削除(&amp;D)</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>保存(&amp;S)</translation>
    </message>
    <message>
      <source>Copy of %1</source>
      <translation>%1のコピー</translation>
    </message>
    <message>
      <source>New Style</source>
      <translation>新規スタイル</translation>
    </message>
    <message>
      <source>Do you really want to delete this style?</source>
      <translation>本当にこのスタイルを削除しますか?</translation>
    </message>
    <message>
      <source>&amp;Yes</source>
      <translation>はい(&amp;Y)</translation>
    </message>
    <message>
      <source>&amp;No</source>
      <translation>いいえ(&amp;N)</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>開く</translation>
    </message>
    <message>
      <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
      <translation>ドキュメント (*.sla *.sla.gz *.scd *.scd.gz);;全てのファイル (*)</translation>
    </message>
    <message>
      <source>Documents (*.sla *.scd);;All Files (*)</source>
      <translation>ドキュメント (*.sla *.scd);;全てのファイル (*)</translation>
    </message>
  </context>
  <context>
    <name>LoadSavePlugin</name>
    <message>
      <source>All Files (*)</source>
      <translation>全てのファイル (*)</translation>
    </message>
  </context>
  <context>
    <name>LoremManager</name>
    <message>
      <source>Select Lorem Ipsum</source>
      <translation>Lorem Ipsumを選択</translation>
    </message>
    <message>
      <source>Author:</source>
      <translation>作者:</translation>
    </message>
    <message>
      <source>Get More:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>XML File:</source>
      <translation>XMLファイル:</translation>
    </message>
    <message>
      <source>Lorem Ipsum</source>
      <translation>Lorem Ipsum</translation>
    </message>
    <message>
      <source>Paragraphs:</source>
      <translation>段落:</translation>
    </message>
    <message>
      <source>Alt+O</source>
      <translation>Alt+O</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
  </context>
  <context>
    <name>MarginDialog</name>
    <message>
      <source>Manage Page Properties</source>
      <translation>ページプロパティを管理</translation>
    </message>
    <message>
      <source>Page Size</source>
      <translation>ページサイズ</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>サイズ(&amp;S):</translation>
    </message>
    <message>
      <source>Custom</source>
      <translation>カスタム</translation>
    </message>
    <message>
      <source>Orie&amp;ntation:</source>
      <translation>方向(&amp;N):</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation>縦方向</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation>横方向</translation>
    </message>
    <message>
      <source>&amp;Width:</source>
      <translation>幅(&amp;W):</translation>
    </message>
    <message>
      <source>&amp;Height:</source>
      <translation>高さ(&amp;H):</translation>
    </message>
    <message>
      <source>Move Objects with their Page</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Type:</source>
      <translation>タイプ:</translation>
    </message>
    <message>
      <source>Margin Guides</source>
      <translation>マージンガイド</translation>
    </message>
  </context>
  <context>
    <name>MarginWidget</name>
    <message>
      <source>Preset Layouts:</source>
      <translation>プリセットレイアウト:</translation>
    </message>
    <message>
      <source>&amp;Bottom:</source>
      <translation>下(&amp;B):</translation>
    </message>
    <message>
      <source>&amp;Top:</source>
      <translation>上(&amp;T):</translation>
    </message>
    <message>
      <source>&amp;Right:</source>
      <translation>右(&amp;R):</translation>
    </message>
    <message>
      <source>&amp;Left:</source>
      <translation>左(&amp;L):</translation>
    </message>
    <message>
      <source>Apply margin settings to all pages</source>
      <translation>マージン設定を全てのページに適用</translation>
    </message>
    <message>
      <source>Apply the margin changes to all existing pages in the document</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Distance between the top margin guide and the edge of the page</source>
      <translation>上のマージンガイドとページの端の間隔</translation>
    </message>
    <message>
      <source>Distance between the bottom margin guide and the edge of the page</source>
      <translation>下のマージンガイドとページの端の間隔</translation>
    </message>
    <message>
      <source>Distance between the left margin guide and the edge of the page. If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Distance between the right margin guide and the edge of the page. If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Inside:</source>
      <translation>内側(&amp;I):</translation>
    </message>
    <message>
      <source>O&amp;utside:</source>
      <translation>外側(&amp;U):</translation>
    </message>
  </context>
  <context>
    <name>MasterPagesPalette</name>
    <message>
      <source>Edit Master Pages</source>
      <translation>マスターページを編集</translation>
    </message>
    <message>
      <source>Duplicate the selected master page</source>
      <translation>選択されたマスターページを複製する</translation>
    </message>
    <message>
      <source>Delete the selected master page</source>
      <translation>選択されたマスターページを削除する</translation>
    </message>
    <message>
      <source>Add a new master page</source>
      <translation>新規マスターページを追加</translation>
    </message>
    <message>
      <source>Import master pages from another document</source>
      <translation>他のドキュメントからマスターページをインポート</translation>
    </message>
    <message>
      <source>Do you really want to delete this master page?</source>
      <translation>本当にこのマスターページを削除しますか?</translation>
    </message>
    <message>
      <source>&amp;Yes</source>
      <translation>はい(&amp;Y)</translation>
    </message>
    <message>
      <source>&amp;No</source>
      <translation>いいえ(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Name:</source>
      <translation>名前(&amp;N):</translation>
    </message>
    <message>
      <source>New Master Page</source>
      <translation>新規マスターページ</translation>
    </message>
    <message>
      <source>Copy of %1</source>
      <translation>%1のコピー</translation>
    </message>
    <message>
      <source>Name:</source>
      <translation>名前:</translation>
    </message>
    <message>
      <source>New MasterPage</source>
      <translation>新規マスターページ</translation>
    </message>
    <message>
      <source>New Master Page %1</source>
      <translation>新規マスターページ %1</translation>
    </message>
    <message>
      <source>Copy #%1 of </source>
      <translation>#%1のコピー</translation>
    </message>
    <message>
      <source>Normal</source>
      <translation>標準</translation>
    </message>
  </context>
  <context>
    <name>Mdup</name>
    <message>
      <source>Multiple Duplicate</source>
      <translation>複数コピー</translation>
    </message>
    <message>
      <source>&amp;Number of Copies:</source>
      <translation>部数(&amp;N):</translation>
    </message>
    <message>
      <source>&amp;Horizontal Shift:</source>
      <translation>水平移動(&amp;H):</translation>
    </message>
    <message>
      <source>&amp;Vertical Shift:</source>
      <translation>垂直移動(&amp;V):</translation>
    </message>
  </context>
  <context>
    <name>Measurements</name>
    <message>
      <source>Distances</source>
      <translation>距離</translation>
    </message>
    <message>
      <source>pt</source>
      <translation>pt</translation>
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
      <translation>距離X:</translation>
    </message>
    <message>
      <source>DY:</source>
      <translation>距離Y:</translation>
    </message>
    <message>
      <source>Angle:</source>
      <translation>角度:</translation>
    </message>
    <message>
      <source>Length:</source>
      <translation>長さ:</translation>
    </message>
  </context>
  <context>
    <name>MergeDoc</name>
    <message>
      <source>Import Master Page</source>
      <translation>マスターページをインポート</translation>
    </message>
    <message>
      <source>Import Page(s)</source>
      <translation>ページをインポート</translation>
    </message>
    <message>
      <source>&amp;From Document:</source>
      <translation>ドキュメントから(&amp;F):</translation>
    </message>
    <message>
      <source>Chan&amp;ge...</source>
      <translation>変更(&amp;G)...</translation>
    </message>
    <message>
      <source>&amp;Import Page(s):</source>
      <translation>ページをインポート(&amp;I):</translation>
    </message>
    <message>
      <source>&amp;Import Master Page</source>
      <translation>マスターページをインポート(&amp;I)</translation>
    </message>
    <message>
      <source>Insert a comma separated list of tokens import where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
      <translation>カンマで区切られたトークンのリストを入力してください。
トークンは*で全てのページを、1-5のようにしてページ範囲を、
もしくは単一のページ番号が利用できます。</translation>
    </message>
    <message>
      <source> from 0</source>
      <translation>0 から</translation>
    </message>
    <message>
      <source>Create Page(s)</source>
      <translation>ページを作成</translation>
    </message>
    <message>
      <source>Before Page</source>
      <translation>ページの前に</translation>
    </message>
    <message>
      <source>After Page</source>
      <translation>ページの後に</translation>
    </message>
    <message>
      <source>At End</source>
      <translation>最後に</translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation>インポート(&amp;I)</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>開く</translation>
    </message>
    <message>
      <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
      <translation>ドキュメント (*.sla *.sla.gz *.scd *.scd.gz);;全てのファイル (*)</translation>
    </message>
    <message>
      <source>Documents (*.sla *.scd);;All Files (*)</source>
      <translation>ドキュメント (*.sla *.scd);;全てのファイル (*)</translation>
    </message>
    <message>
      <source> from %1</source>
      <translation>%1 から</translation>
    </message>
  </context>
  <context>
    <name>MissingFont</name>
    <message>
      <source>Missing Font</source>
      <translation>不明なフォント</translation>
    </message>
    <message>
      <source>The Font %1 is not installed.</source>
      <translation>フォント %1 はインストールされていません</translation>
    </message>
    <message>
      <source>Use</source>
      <translation>使用</translation>
    </message>
    <message>
      <source>instead</source>
      <translation>代替として</translation>
    </message>
  </context>
  <context>
    <name>MovePages</name>
    <message>
      <source>Move Pages</source>
      <translation>ページを移動</translation>
    </message>
    <message>
      <source>Copy Page</source>
      <translation>ページをコピー</translation>
    </message>
    <message>
      <source>Move Page(s)</source>
      <translation>ページを移動</translation>
    </message>
    <message>
      <source>To:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Number of copies:</source>
      <translation>部数:</translation>
    </message>
    <message>
      <source>Before Page</source>
      <translation>ページの前に</translation>
    </message>
    <message>
      <source>After Page</source>
      <translation>ページの後に</translation>
    </message>
    <message>
      <source>At End</source>
      <translation>最後に</translation>
    </message>
    <message>
      <source>Move Page(s):</source>
      <translation>ページを移動:</translation>
    </message>
  </context>
  <context>
    <name>Mpalette</name>
    <message>
      <source>Fixed Linespacing</source>
      <translation>固定した行間隔</translation>
    </message>
    <message>
      <source>Automatic Linespacing</source>
      <translation>自動行間隔</translation>
    </message>
    <message>
      <source>Align to Baseline Grid</source>
      <translation>ベースライングリッドに合わせる</translation>
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
      <translation>位置&amp;X:</translation>
    </message>
    <message>
      <source>&amp;Width:</source>
      <translation>幅(&amp;W):</translation>
    </message>
    <message>
      <source>&amp;Y-Pos:</source>
      <translation>位置&amp;Y:</translation>
    </message>
    <message>
      <source>&amp;Height:</source>
      <translation>高さ(&amp;H):</translation>
    </message>
    <message>
      <source>Distance between columns</source>
      <translation>列の間隔</translation>
    </message>
    <message>
      <source>Column width</source>
      <translation>列幅</translation>
    </message>
    <message>
      <source>No Style</source>
      <translation>スタイルなし</translation>
    </message>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
    <message>
      <source>Name &quot;%1&quot; isn't unique.&lt;br/>Please choose another.</source>
      <translation>名前 &quot;%1&quot; はすでに存在します。&lt;br/>他の名前を選んでください。</translation>
    </message>
    <message>
      <source>Properties</source>
      <translation>プロパティ</translation>
    </message>
    <message>
      <source>X, Y, &amp;Z</source>
      <translation>X, Y, &amp;Z</translation>
    </message>
    <message>
      <source>&amp;Text</source>
      <translation>テキスト(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;Image</source>
      <translation>画像(&amp;I)</translation>
    </message>
    <message>
      <source>&amp;Shape</source>
      <translation>形状(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Line</source>
      <translation>線(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Colors</source>
      <translation>色(&amp;C)</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>名前</translation>
    </message>
    <message>
      <source>Geometry</source>
      <translation>ジオメトリ</translation>
    </message>
    <message>
      <source>&amp;Rotation:</source>
      <translation>回転(&amp;R):</translation>
    </message>
    <message>
      <source>Basepoint:</source>
      <translation>ベースポイント:</translation>
    </message>
    <message>
      <source>Level</source>
      <translation>レベル</translation>
    </message>
    <message>
      <source>Shape:</source>
      <translation>形状:</translation>
    </message>
    <message>
      <source>&amp;Edit Shape...</source>
      <translation>形状を編集(&amp;E)...</translation>
    </message>
    <message>
      <source>R&amp;ound
Corners:</source>
      <translation>角を丸める(&amp;O):</translation>
    </message>
    <message>
      <source>Distance of Text</source>
      <translation>テキストの間隔</translation>
    </message>
    <message>
      <source>Colu&amp;mns:</source>
      <translation>列数(&amp;M):</translation>
    </message>
    <message>
      <source>&amp;Gap:</source>
      <translation>ギャップ(&amp;G):</translation>
    </message>
    <message>
      <source>To&amp;p:</source>
      <translation>上(&amp;P):</translation>
    </message>
    <message>
      <source>&amp;Bottom:</source>
      <translation>下(&amp;B):</translation>
    </message>
    <message>
      <source>&amp;Left:</source>
      <translation>左(&amp;L):</translation>
    </message>
    <message>
      <source>&amp;Right:</source>
      <translation>右(&amp;R):</translation>
    </message>
    <message>
      <source>T&amp;abulators...</source>
      <translation>タブ(&amp;A)...</translation>
    </message>
    <message>
      <source>Path Text Properties</source>
      <translation>パステキストのプロパティ</translation>
    </message>
    <message>
      <source>Show Curve</source>
      <translation>曲線を表示</translation>
    </message>
    <message>
      <source>Start Offset:</source>
      <translation>オフセットを開始:</translation>
    </message>
    <message>
      <source>Distance from Curve:</source>
      <translation>曲線からの距離:</translation>
    </message>
    <message>
      <source>Text &amp;Flows Around Frame</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Use &amp;Bounding Box</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Use Contour Line</source>
      <translation>等高線を使用(&amp;U)</translation>
    </message>
    <message>
      <source>St&amp;yle:</source>
      <translation>スタイル(&amp;Y):</translation>
    </message>
    <message>
      <source>Lan&amp;guage:</source>
      <translation>言語(&amp;G):</translation>
    </message>
    <message>
      <source>&amp;Free Scaling</source>
      <translation>自由倍率(&amp;F)</translation>
    </message>
    <message>
      <source>Actual X-DPI:</source>
      <translation>実X-DPI:</translation>
    </message>
    <message>
      <source>Actual Y-DPI:</source>
      <translation>実Y-DPI:</translation>
    </message>
    <message>
      <source>X-Sc&amp;ale:</source>
      <translation>比率X (&amp;A):</translation>
    </message>
    <message>
      <source>Y-Scal&amp;e:</source>
      <translation>比率Y (&amp;E):</translation>
    </message>
    <message>
      <source>Scale &amp;To Frame Size</source>
      <translation>フレームサイズに合わせる(&amp;T)</translation>
    </message>
    <message>
      <source>P&amp;roportional</source>
      <translation>プロポーショナル(&amp;R)</translation>
    </message>
    <message>
      <source>Input Profile:</source>
      <translation>プロファイルを入力:</translation>
    </message>
    <message>
      <source>Rendering Intent:</source>
      <translation>レンダリングインテント:</translation>
    </message>
    <message>
      <source>Perceptual</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Relative Colorimetric</source>
      <translation>相対的な色彩</translation>
    </message>
    <message>
      <source>Saturation</source>
      <translation>彩度</translation>
    </message>
    <message>
      <source>Absolute Colorimetric</source>
      <translation>絶対的な色彩</translation>
    </message>
    <message>
      <source>Left Point</source>
      <translation>左点</translation>
    </message>
    <message>
      <source>End Points</source>
      <translation>終点</translation>
    </message>
    <message>
      <source>&amp;Basepoint:</source>
      <translation>ベースポイント(&amp;B):</translation>
    </message>
    <message>
      <source>T&amp;ype of Line:</source>
      <translation>線の種類(&amp;Y):</translation>
    </message>
    <message>
      <source>Start Arrow:</source>
      <translation>始点矢印:</translation>
    </message>
    <message>
      <source>End Arrow:</source>
      <translation>終端矢印:</translation>
    </message>
    <message>
      <source>Line &amp;Width:</source>
      <translation>線幅(&amp;W):</translation>
    </message>
    <message>
      <source>Ed&amp;ges:</source>
      <translation>先端(&amp;G):</translation>
    </message>
    <message>
      <source>Miter Join</source>
      <translation>マイタージョイン</translation>
    </message>
    <message>
      <source>Bevel Join</source>
      <translation>ベベルジョイン</translation>
    </message>
    <message>
      <source>Round Join</source>
      <translation>ラウンドジョイン</translation>
    </message>
    <message>
      <source>Flat Cap</source>
      <translation>フラットキャップ</translation>
    </message>
    <message>
      <source>Square Cap</source>
      <translation>スクェアキャップ</translation>
    </message>
    <message>
      <source>Round Cap</source>
      <translation>ラウンドキャップ</translation>
    </message>
    <message>
      <source>&amp;Endings:</source>
      <translation>終端(&amp;E):</translation>
    </message>
    <message>
      <source>Cell Lines</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Line at Top</source>
      <translation>上の線</translation>
    </message>
    <message>
      <source>Line at the Left</source>
      <translation>左の線</translation>
    </message>
    <message>
      <source>Line at the Right </source>
      <translation>右の線</translation>
    </message>
    <message>
      <source>Line at Bottom</source>
      <translation>下の線</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source>Name of selected object</source>
      <translation>選択されたオブジェクトの名前</translation>
    </message>
    <message>
      <source>Horizontal position of current basepoint</source>
      <translation>現在のベースポイントの水平位置</translation>
    </message>
    <message>
      <source>Vertical position of current basepoint</source>
      <translation>現在のベースポイントの垂直位置</translation>
    </message>
    <message>
      <source>Width</source>
      <translation>幅</translation>
    </message>
    <message>
      <source>Height</source>
      <translation>高さ</translation>
    </message>
    <message>
      <source>Rotation of object at current basepoint</source>
      <translation>現在のベースポイントのオブジェクトの回転</translation>
    </message>
    <message>
      <source>Point from which measurements or rotation angles are referenced</source>
      <translation>計測や回転角で参照されるポイント</translation>
    </message>
    <message>
      <source>Select top left for basepoint</source>
      <translation>左上をベースポイントにする</translation>
    </message>
    <message>
      <source>Select top right for basepoint</source>
      <translation>右上をベースポイントにする</translation>
    </message>
    <message>
      <source>Select bottom left for basepoint</source>
      <translation>左下をベースポイントにする</translation>
    </message>
    <message>
      <source>Select bottom right for basepoint</source>
      <translation>右下をベースポイントにする</translation>
    </message>
    <message>
      <source>Select center for basepoint</source>
      <translation>中央をベースポイントにする</translation>
    </message>
    <message>
      <source>Flip Horizontal</source>
      <translation>水平方向に反転</translation>
    </message>
    <message>
      <source>Flip Vertical</source>
      <translation>垂直方向に反転</translation>
    </message>
    <message>
      <source>Move one level up</source>
      <translation>1つ上に移動</translation>
    </message>
    <message>
      <source>Move one level down</source>
      <translation>1つ下に移動</translation>
    </message>
    <message>
      <source>Move to front</source>
      <translation>前面に移動</translation>
    </message>
    <message>
      <source>Move to back</source>
      <translation>背面に移動</translation>
    </message>
    <message>
      <source>Indicates the level the object is on, 0 means the object is at the bottom</source>
      <translation>オブジェクトのあるレベルを示します。0はオブジェクトが一番下にあることを意味します。</translation>
    </message>
    <message>
      <source>Lock or unlock the object</source>
      <translation>オブジェクトをロック/ロック解除</translation>
    </message>
    <message>
      <source>Lock or unlock the size of the object</source>
      <translation>オブジェクトのサイズをロック/ロック解除</translation>
    </message>
    <message>
      <source>Enable or disable printing of the object</source>
      <translation>オブジェクトの印刷の有効/無効</translation>
    </message>
    <message>
      <source>Make text in lower frames flow around the object shape</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Use a surrounding box instead of the frame's shape for text flow</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Use a second line originally based on the frame's shape for text flow</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Font of selected text or object</source>
      <translation>選択されたテキストまたはオブジェクトのフォント</translation>
    </message>
    <message>
      <source>Font Size</source>
      <translation>フォントサイズ</translation>
    </message>
    <message>
      <source>Offset to baseline of characters</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scaling width of characters</source>
      <translation>文字幅の倍率</translation>
    </message>
    <message>
      <source>Scaling height of characters</source>
      <translation>文字高さの倍率</translation>
    </message>
    <message>
      <source>Color of text stroke. Only available with &quot;outline&quot; text decoration.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color of text fill. Only available with &quot;outline&quot; text decoration.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Saturation of color of text stroke</source>
      <translation>テキストの輪郭色の彩度</translation>
    </message>
    <message>
      <source>Saturation of color of text fill</source>
      <translation>テキストの塗りつぶし色の彩度</translation>
    </message>
    <message>
      <source>Right to Left Writing</source>
      <translation>右から左の書式</translation>
    </message>
    <message>
      <source>Manual Tracking</source>
      <translation>手動でのトラッキング</translation>
    </message>
    <message>
      <source>Line Spacing</source>
      <translation>行間隔</translation>
    </message>
    <message>
      <source>Style of current paragraph</source>
      <translation>現在の段落のスタイル</translation>
    </message>
    <message>
      <source>Hyphenation language of frame</source>
      <translation>フレームのハイフネーションの言語</translation>
    </message>
    <message>
      <source>Change settings for left or end points</source>
      <translation>左点もしくは終点の設定を変更</translation>
    </message>
    <message>
      <source>Pattern of line</source>
      <translation>線のパターン</translation>
    </message>
    <message>
      <source>Thickness of line</source>
      <translation>線の太さ</translation>
    </message>
    <message>
      <source>Type of line joins</source>
      <translation>線の結合の種類</translation>
    </message>
    <message>
      <source>Type of line end</source>
      <translation>線の端の種類</translation>
    </message>
    <message>
      <source>Line style of current object</source>
      <translation>現在のオブジェクトの線スタイル</translation>
    </message>
    <message>
      <source>Choose the shape of frame...</source>
      <translation>フレームの形状を選択...</translation>
    </message>
    <message>
      <source>Edit shape of the frame...</source>
      <translation>フレームの形状を編集...</translation>
    </message>
    <message>
      <source>Set radius of corner rounding</source>
      <translation>角の丸みの半径を設定</translation>
    </message>
    <message>
      <source>Number of columns in text frame</source>
      <translation>テキストフレーム中の列数</translation>
    </message>
    <message>
      <source>Switches between Gap or Column width</source>
      <translation>ギャップもしくは列幅に切替えます</translation>
    </message>
    <message>
      <source>Distance of text from top of frame</source>
      <translation>フレームの上部からのテキストの距離</translation>
    </message>
    <message>
      <source>Distance of text from bottom of frame</source>
      <translation>フレームの下部からのテキストの距離</translation>
    </message>
    <message>
      <source>Distance of text from left of frame</source>
      <translation>フレームの左からのテキストの距離</translation>
    </message>
    <message>
      <source>Distance of text from right of frame</source>
      <translation>フレームの右からのテキストの距離</translation>
    </message>
    <message>
      <source>Edit tab settings of text frame...</source>
      <translation>テキストフレームのタブ設定を編集...</translation>
    </message>
    <message>
      <source>Allow the image to be a different size to the frame</source>
      <translation>画像がフレームのサイズと異なるのを許可</translation>
    </message>
    <message>
      <source>Horizontal offset of image within frame</source>
      <translation>フレーム内の画像の水平オフセット</translation>
    </message>
    <message>
      <source>Vertical offset of image within frame</source>
      <translation>フレーム内の画像の垂直オフセット</translation>
    </message>
    <message>
      <source>Resize the image horizontally</source>
      <translation>画像を水平方向にサイズ変更する</translation>
    </message>
    <message>
      <source>Resize the image vertically</source>
      <translation>画像を垂直方向にサイズ変更する</translation>
    </message>
    <message>
      <source>Keep the X and Y scaling the same</source>
      <translation>XY方向の倍率が同じになるようにする</translation>
    </message>
    <message>
      <source>Keep the aspect ratio</source>
      <translation>アスペクト比を保持</translation>
    </message>
    <message>
      <source>Make the image fit within the size of the frame</source>
      <translation>画像をフレームのサイズ内に合わせる</translation>
    </message>
    <message>
      <source>Use image proportions rather than those of the frame</source>
      <translation>フレームの比率より画像の比率を使用する</translation>
    </message>
    <message>
      <source>Source profile of the image</source>
      <translation>画像のソースプロファイル</translation>
    </message>
    <message>
      <source>Rendering intent for the image</source>
      <translation>画像のレンダリングインテント</translation>
    </message>
  </context>
  <context>
    <name>MultiLine</name>
    <message>
      <source>Edit Style</source>
      <translation>スタイルを編集</translation>
    </message>
    <message>
      <source>Flat Cap</source>
      <translation>フラットキャップ</translation>
    </message>
    <message>
      <source>Square Cap</source>
      <translation>スクェアキャップ</translation>
    </message>
    <message>
      <source>Round Cap</source>
      <translation>ラウンドキャップ</translation>
    </message>
    <message>
      <source>Miter Join</source>
      <translation>マイタージョイン</translation>
    </message>
    <message>
      <source>Bevel Join</source>
      <translation>ベベルジョイン</translation>
    </message>
    <message>
      <source>Round Join</source>
      <translation>ラウンドジョイン</translation>
    </message>
    <message>
      <source>Line Width:</source>
      <translation>線幅:</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source> pt </source>
      <translation> pt </translation>
    </message>
    <message>
      <source>Solid Line</source>
      <translation>実線</translation>
    </message>
    <message>
      <source>Dashed Line</source>
      <translation>破線</translation>
    </message>
    <message>
      <source>Dotted Line</source>
      <translation>点線</translation>
    </message>
    <message>
      <source>Dash Dot Line</source>
      <translation>破点線</translation>
    </message>
    <message>
      <source>Dash Dot Dot Line</source>
      <translation>破点点線</translation>
    </message>
    <message>
      <source>Name &quot;%1&quot; isn't unique.&lt;br/>Please choose another.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
  </context>
  <context>
    <name>MultiProgressDialogBase</name>
    <message>
      <source>Progress</source>
      <translation>進捗</translation>
    </message>
    <message>
      <source>Overall Progress:</source>
      <translation>全体の進捗:</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>キャンセル(&amp;C)</translation>
    </message>
  </context>
  <context>
    <name>MyPlugin</name>
    <message>
      <source>My &amp;Plugin</source>
      <translation>自作プラグイン(&amp;P)</translation>
    </message>
  </context>
  <context>
    <name>MyPluginImpl</name>
    <message>
      <source>Scribus - My Plugin</source>
      <translation>Scribus - 自作プラグイン</translation>
    </message>
    <message>
      <source>The plugin worked!</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>NewDoc</name>
    <message>
      <source>New Document</source>
      <translation>新規ドキュメント</translation>
    </message>
    <message>
      <source>&amp;New Document</source>
      <translation>新規ドキュメント(&amp;N)</translation>
    </message>
    <message>
      <source>Open &amp;Existing Document</source>
      <translation>既存のドキュメントを開く(&amp;E)</translation>
    </message>
    <message>
      <source>Open Recent &amp;Document</source>
      <translation>最近のドキュメントを開く(&amp;D)</translation>
    </message>
    <message>
      <source>Do not show this dialog again</source>
      <translation>次回このダイアログを表示しない</translation>
    </message>
    <message>
      <source>Document page size, either a standard size or a custom size</source>
      <translation>ドキュメントのページサイズ。標準サイズとカスタムサイズの両方</translation>
    </message>
    <message>
      <source>Orientation of the document's pages</source>
      <translation>デフォルトのドキュメントページの方向</translation>
    </message>
    <message>
      <source>Width of the document's pages, editable if you have chosen a custom page size</source>
      <translation>ドキュメントのページ幅。カスタムページサイズを選べば編集が可能です</translation>
    </message>
    <message>
      <source>Height of the document's pages, editable if you have chosen a custom page size</source>
      <translation>ドキュメントのページの高さ。カスタムページサイズを選べば編集が可能です</translation>
    </message>
    <message>
      <source>First page number of the document</source>
      <translation>ドキュメントの最初のページ番号</translation>
    </message>
    <message>
      <source>Initial number of pages of the document</source>
      <translation>ドキュメントの初期のページ数</translation>
    </message>
    <message>
      <source>Default unit of measurement for document editing</source>
      <translation>ドキュメントを編集する際のデフォルトの計測単位</translation>
    </message>
    <message>
      <source>Create text frames automatically when new pages are added</source>
      <translation>新規ページが追加された際にテキストフレームを自動的に作成します</translation>
    </message>
    <message>
      <source>Number of columns to create in automatically created text frames</source>
      <translation>自動的に生成されたテキストフレーム中に作成する列の数</translation>
    </message>
    <message>
      <source>Distance between automatically created columns</source>
      <translation>自動的に生成された列の間隔</translation>
    </message>
    <message>
      <source>Page Size</source>
      <translation>ページサイズ</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>サイズ(&amp;S):</translation>
    </message>
    <message>
      <source>Orie&amp;ntation:</source>
      <translation>方向(&amp;N):</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation>縦方向</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation>横方向</translation>
    </message>
    <message>
      <source>&amp;Width:</source>
      <translation>幅(&amp;W):</translation>
    </message>
    <message>
      <source>&amp;Height:</source>
      <translation>高さ(&amp;H):</translation>
    </message>
    <message>
      <source>Margin Guides</source>
      <translation>マージンガイド</translation>
    </message>
    <message>
      <source>Options</source>
      <translation>オプション</translation>
    </message>
    <message>
      <source>F&amp;irst Page Number:</source>
      <translation>最初のページ番号(&amp;I):</translation>
    </message>
    <message>
      <source>N&amp;umber of Pages:</source>
      <translation>総ページ数(&amp;U):</translation>
    </message>
    <message>
      <source>&amp;Default Unit:</source>
      <translation>デフォルトの単位(&amp;D):</translation>
    </message>
    <message>
      <source>&amp;Automatic Text Frames</source>
      <translation>自動テキストフレーム(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;Gap:</source>
      <translation>ギャップ(&amp;G):</translation>
    </message>
    <message>
      <source>Colu&amp;mns:</source>
      <translation>列数(&amp;M):</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>開く</translation>
    </message>
  </context>
  <context>
    <name>NewFromTemplatePlugin</name>
    <message>
      <source>New &amp;from Template...</source>
      <translation>テンプレートから新規作成(&amp;F)...</translation>
    </message>
    <message>
      <source>Load documents with predefined layout</source>
      <translation>あらかじめ定義されたレイアウトでドキュメントを読み込む</translation>
    </message>
    <message>
      <source>Start a document from a template made by other users or yourself (f.e. for documents you have a constant style).</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>NodePalette</name>
    <message>
      <source>Nodes</source>
      <translation>ノード</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>&amp;Absolute Coordinates</source>
      <translation>絶対座標(&amp;A)</translation>
    </message>
    <message>
      <source>&amp;X-Pos:</source>
      <translation>位置&amp;X:</translation>
    </message>
    <message>
      <source>&amp;Y-Pos:</source>
      <translation>位置&amp;Y:</translation>
    </message>
    <message>
      <source>Edit &amp;Contour Line</source>
      <translation>等高線を編集(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Reset Contour Line</source>
      <translation>等高線をリセット(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;End Editing</source>
      <translation>編集を終了(&amp;E)</translation>
    </message>
    <message>
      <source>Move Nodes</source>
      <translation>ノードを移動</translation>
    </message>
    <message>
      <source>Move Control Points</source>
      <translation>コントロールポイントを移動</translation>
    </message>
    <message>
      <source>Add Nodes</source>
      <translation>ノードを追加</translation>
    </message>
    <message>
      <source>Delete Nodes</source>
      <translation>ノードを削除</translation>
    </message>
    <message>
      <source>Move Control Points Independently</source>
      <translation>コントロールポイントを無関係に移動</translation>
    </message>
    <message>
      <source>Move Control Points Symmetrical</source>
      <translation>コントロールポイントを対称的に移動</translation>
    </message>
    <message>
      <source>Reset Control Points</source>
      <translation>コントロールポイントをリセット</translation>
    </message>
    <message>
      <source>Reset this Control Point</source>
      <translation>このコントロールポイントをリセット</translation>
    </message>
    <message>
      <source>Open a Polygon or Cuts a Bezier Curve</source>
      <translation>多角形を開くかベジエ曲線を切る</translation>
    </message>
    <message>
      <source>Close this Bezier Curve</source>
      <translation>このベジエ曲線を閉じる</translation>
    </message>
    <message>
      <source>Mirror the Path Horizontally</source>
      <translation>パスを水平方向にコピーする</translation>
    </message>
    <message>
      <source>Mirror the Path Vertically</source>
      <translation>パスを垂直方向にコピーする</translation>
    </message>
    <message>
      <source>Shear the Path Horizontally to the Right</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Shear the Path Horizontally to the Left</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Shear the Path Vertically Up</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Shear the Path Vertically Down</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Rotate the Path Counter-Clockwise</source>
      <translation>パスを反時計回りに回転</translation>
    </message>
    <message>
      <source>Rotate the Path Clockwise</source>
      <translation>パスを時計回りに回転</translation>
    </message>
    <message>
      <source>Reduce the Size of the Path by shown %</source>
      <translation>表示された%だけパスのサイズを小さくする</translation>
    </message>
    <message>
      <source>Enlarge the Size of the Path by shown %</source>
      <translation>表示された%だけパスのサイズを大きくする</translation>
    </message>
    <message>
      <source>Angle of Rotation</source>
      <translation>回転角</translation>
    </message>
    <message>
      <source>% to Enlarge or Reduce By</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Activate Contour Line Editing Mode</source>
      <translation>等高線編集モードを有効に</translation>
    </message>
    <message>
      <source>Reset the Contour Line to the Original Shape of the Frame</source>
      <translation>フレームの本来の形状に等高線をリセット</translation>
    </message>
    <message>
      <source>When checked use coordinates relative to the page, otherwise coordinates are relative to the Object.</source>
      <translation>チェックするとページに相対する座標を使用します。
そうでなければ、オブジェクトに相対する座標を使用します。</translation>
    </message>
  </context>
  <context>
    <name>OODrawImportPlugin</name>
    <message>
      <source>Import &amp;OpenOffice.org Draw...</source>
      <translation>OpenOffice.org Drawをインポート(&amp;O)...</translation>
    </message>
    <message>
      <source>Imports OpenOffice.org Draw Files</source>
      <translation>OpenOffice.org Drawファイルをインポート</translation>
    </message>
    <message>
      <source>Imports most OpenOffice.org Draw files into the current document, converting their vector data into Scribus objects.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>OpenDocument 1.0 Draw</source>
      <comment>Import/export format name</comment>
      <translation>OpenDocument 1.0 Draw</translation>
    </message>
    <message>
      <source>OpenOffice.org 1.x Draw</source>
      <comment>Import/export format name</comment>
      <translation>OpenOffice.org 1.x Draw</translation>
    </message>
  </context>
  <context>
    <name>OdtDialog</name>
    <message>
      <source>OpenDocument Importer Options</source>
      <translation>OpenDocument インポータオプション</translation>
    </message>
    <message>
      <source>Overwrite Paragraph Styles</source>
      <translation>段落スタイルを上書き</translation>
    </message>
    <message>
      <source>Enabling this will overwrite existing styles in the current Scribus document</source>
      <translation>これを有効にすると、現在のScribusドキュメント中の既存のスタイルを上書きします</translation>
    </message>
    <message>
      <source>Merge Paragraph Styles</source>
      <translation>段落スタイルをマージ</translation>
    </message>
    <message>
      <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document's styles are named differently.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Use document name as a prefix for paragraph styles</source>
      <translation>段落スタイルをドキュメント名のプレフィックスとして使用する</translation>
    </message>
    <message>
      <source>Prepend the document name to the paragraph style name in Scribus.</source>
      <translation>段落スタイル名の先頭にドキュメント名を追加します。</translation>
    </message>
    <message>
      <source>Do not ask again</source>
      <translation>次回は尋ねない</translation>
    </message>
    <message>
      <source>Make these settings the default and do not prompt again when importing an OASIS OpenDocument.</source>
      <translation>これらの設定をデフォルトにして、OASISオープンドキュメントをインポートする際に再度尋ねません。</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>キャンセル</translation>
    </message>
  </context>
  <context>
    <name>OldScribusFormat</name>
    <message>
      <source>Scribus Document</source>
      <translation>Scribusドキュメント</translation>
    </message>
    <message>
      <source>Scribus 1.2.x Document</source>
      <translation>Scribus 1.2.x ドキュメント</translation>
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
      <translation>線幅</translation>
    </message>
  </context>
  <context>
    <name>PDFExportDialog</name>
    <message>
      <source>Save as PDF</source>
      <translation>PDF形式で保存</translation>
    </message>
    <message>
      <source>O&amp;utput to File:</source>
      <translation>ファイルに出力(&amp;U):</translation>
    </message>
    <message>
      <source>Cha&amp;nge...</source>
      <translation>変更(&amp;N)...</translation>
    </message>
    <message>
      <source>Output one file for eac&amp;h page</source>
      <translation>複数ページを一つのファイルに出力(&amp;H)</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>保存(&amp;S)</translation>
    </message>
    <message>
      <source>This enables exporting one individually named PDF file for each page in the document. Page numbers are added automatically. This is most useful for imposing PDF for commercial printing.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Save as</source>
      <translation>名前を付けて保存</translation>
    </message>
    <message>
      <source>PDF Files (*.pdf);;All Files (*)</source>
      <translation>PDFファイル (*.pdf);;全てのファイル (*)</translation>
    </message>
  </context>
  <context>
    <name>PDFlib</name>
    <message>
      <source>Saving PDF</source>
      <translation>PDFを保存中</translation>
    </message>
    <message>
      <source>Exporting Master Pages:</source>
      <translation>マスターページをエクスポート中:</translation>
    </message>
    <message>
      <source>Exporting Pages:</source>
      <translation>ページをエクスポート中:</translation>
    </message>
    <message>
      <source>Exporting Items on Current Page:</source>
      <translation>現在のページのアイテムをエクスポート中:</translation>
    </message>
  </context>
  <context>
    <name>PPreview</name>
    <message>
      <source>Print Preview</source>
      <translation>印刷プレビュー</translation>
    </message>
    <message>
      <source>Anti-alias &amp;Text</source>
      <translation>テキストのアンチエイリアス(&amp;T)</translation>
    </message>
    <message>
      <source>Anti-alias &amp;Graphics</source>
      <translation>画像のアンチエイリアス(&amp;G)</translation>
    </message>
    <message>
      <source>Display Trans&amp;parency</source>
      <translation>透明度を表示(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;Under Color Removal</source>
      <translation>下色除去(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Display CMYK</source>
      <translation>CMYKを表示(&amp;D)</translation>
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
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cyan</source>
      <translation>シアン</translation>
    </message>
    <message>
      <source>Magenta</source>
      <translation>マゼンダ</translation>
    </message>
    <message>
      <source>Yellow</source>
      <translation>イエロー</translation>
    </message>
    <message>
      <source>Black</source>
      <translation>ブラック</translation>
    </message>
    <message>
      <source>Scaling:</source>
      <translation>倍率:</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>閉じる</translation>
    </message>
    <message>
      <source>Print...</source>
      <translation>印刷...</translation>
    </message>
    <message>
      <source>Provides a more pleasant view of text items in the viewer, at the expense of a slight slowdown in previewing. This only affects Type 1 fonts</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Provides a more pleasant view of TrueType Fonts, OpenType Fonts, EPS, PDF and vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Shows transparency and transparent items in your document. Requires Ghostscript 7.07 or later</source>
      <translation>ドキュメント中で透明度や透明アイテムを表示します。Ghostscript 7.07もしくはそれ以降が必要です</translation>
    </message>
    <message>
      <source>Gives a print preview using simulations of generic CMYK inks, instead of RGB colors</source>
      <translation>RGBカラーの代わりにCMYKインクのシミュレーションで印刷プレビューする</translation>
    </message>
    <message>
      <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis. UCR reduces the possibility of over saturation with CMY inks.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Resize the scale of the page.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Enable/disable the C (Cyan) ink plate</source>
      <translation>C(シアン)インクの有効/無効</translation>
    </message>
    <message>
      <source>Enable/disable the M (Magenta) ink plate</source>
      <translation>M(マゼンダ)インクの有効/無効</translation>
    </message>
    <message>
      <source>Enable/disable the Y (Yellow) ink plate</source>
      <translation>Y(イエロー)インクの有効/無効</translation>
    </message>
    <message>
      <source>Enable/disable the K (Black) ink plate</source>
      <translation>K(ブラック)インクの有効/無効</translation>
    </message>
    <message>
      <source>All</source>
      <translation>全て</translation>
    </message>
    <message>
      <source>File</source>
      <translation>ファイル</translation>
    </message>
  </context>
  <context>
    <name>PSLib</name>
    <message>
      <source>Processing Master Pages:</source>
      <translation>マスターページを処理中:</translation>
    </message>
    <message>
      <source>Exporting Pages:</source>
      <translation>ページをエクスポート中:</translation>
    </message>
  </context>
  <context>
    <name>PageItem</name>
    <message>
      <source>Image</source>
      <translation>画像</translation>
    </message>
    <message>
      <source>Text</source>
      <translation>テキスト</translation>
    </message>
    <message>
      <source>Line</source>
      <translation>線</translation>
    </message>
    <message>
      <source>Polygon</source>
      <translation>多角形</translation>
    </message>
    <message>
      <source>Polyline</source>
      <translation>ポリライン</translation>
    </message>
    <message>
      <source>PathText</source>
      <translation>パステキスト</translation>
    </message>
    <message>
      <source>Copy of</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>PageItemAttributes</name>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
    <message>
      <source>Relates To</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Is Parent Of</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Is Child Of</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>PageItemAttributesBase</name>
    <message>
      <source>Page Item Attributes</source>
      <translation>ページアイテム属性</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>名前</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>タイプ</translation>
    </message>
    <message>
      <source>Value</source>
      <translation>値</translation>
    </message>
    <message>
      <source>Parameter</source>
      <translation>パラメータ</translation>
    </message>
    <message>
      <source>Relationship</source>
      <translation>関連</translation>
    </message>
    <message>
      <source>Relationship To</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Add</source>
      <translation>追加(&amp;A)</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>コピー(&amp;C)</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>削除(&amp;D)</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>クリア(&amp;L)</translation>
    </message>
    <message>
      <source>Alt+L</source>
      <translation>Alt+L</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>OK(&amp;O)</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>キャンセル(&amp;C)</translation>
    </message>
  </context>
  <context>
    <name>PageLayouts</name>
    <message>
      <source>Page Layout</source>
      <translation>ページレイアウト</translation>
    </message>
    <message>
      <source>First Page is:</source>
      <translation>最初のページ:</translation>
    </message>
  </context>
  <context>
    <name>PagePalette</name>
    <message>
      <source>Double sided</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Middle Right</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Drag pages or master pages onto the trashbin to delete them</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Here are all your master pages. To create a new page, drag a master page to the page view below</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Normal</source>
      <translation>標準</translation>
    </message>
    <message>
      <source>Arrange Pages</source>
      <translation>ページの配置</translation>
    </message>
    <message>
      <source>Available Master Pages:</source>
      <translation>利用できるマスターページ:</translation>
    </message>
    <message>
      <source>Document Pages:</source>
      <translation>ドキュメントページ:</translation>
    </message>
  </context>
  <context>
    <name>PageSelector</name>
    <message>
      <source>%1 of %1</source>
      <translation>%1 of %1</translation>
    </message>
    <message>
      <source>%1 of %2</source>
      <translation>%1 of %2</translation>
    </message>
  </context>
  <context>
    <name>PageSize</name>
    <message>
      <source>Quarto</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Foolscap</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Letter</source>
      <translation>レター</translation>
    </message>
    <message>
      <source>Government Letter</source>
      <comment>#, fuzzy</comment>
      <translation>行政レター</translation>
    </message>
    <message>
      <source>Legal</source>
      <translation>リーガル</translation>
    </message>
    <message>
      <source>Ledger</source>
      <translation>レジャー</translation>
    </message>
    <message>
      <source>Executive</source>
      <translation>エグゼクティブ</translation>
    </message>
    <message>
      <source>Post</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Crown</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Large Post</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Demy</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Medium</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Royal</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Elephant</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Double Demy</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Quad Demy</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>STMT</source>
      <translation type="unfinished" />
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
  </context>
  <context>
    <name>PicSearch</name>
    <message>
      <source>Result</source>
      <translation>結果</translation>
    </message>
    <message>
      <source>Search Results for: </source>
      <translation>検索結果: </translation>
    </message>
    <message>
      <source>Preview</source>
      <translation>プレビュー</translation>
    </message>
    <message>
      <source>Select</source>
      <translation>選択</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>キャンセル</translation>
    </message>
  </context>
  <context>
    <name>PicStatus</name>
    <message>
      <source>Manage Pictures</source>
      <translation>画像を管理</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>名前</translation>
    </message>
    <message>
      <source>Path</source>
      <translation>パス</translation>
    </message>
    <message>
      <source>Page</source>
      <translation>ページ</translation>
    </message>
    <message>
      <source>Print</source>
      <translation>印刷</translation>
    </message>
    <message>
      <source>Status</source>
      <translation>状態</translation>
    </message>
    <message>
      <source>Yes</source>
      <translation>はい</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Missing</source>
      <translation>見つかりません</translation>
    </message>
    <message>
      <source>Search</source>
      <translation>検索</translation>
    </message>
    <message>
      <source>Cancel Search</source>
      <translation>検索をキャンセル</translation>
    </message>
    <message>
      <source>Goto</source>
      <translation>移動</translation>
    </message>
    <message>
      <source>Select a base directory for search</source>
      <translation>検索で使うベースディレクトリを選択</translation>
    </message>
    <message>
      <source>Scribus - Image Search</source>
      <translation>Scribus - 画像検索</translation>
    </message>
    <message>
      <source>The search failed: %1</source>
      <translation>検索に失敗しました: %1</translation>
    </message>
    <message>
      <source>No images named &quot;%1&quot; were found.</source>
      <translation>画像 &quot;%1&quot; は見つかりませんでした</translation>
    </message>
  </context>
  <context>
    <name>PixmapExportPlugin</name>
    <message>
      <source>Save as &amp;Image...</source>
      <translation>画像として保存(&amp;I)...</translation>
    </message>
    <message>
      <source>Export As Image</source>
      <translation>画像としてエクスポート</translation>
    </message>
    <message>
      <source>Exports selected pages as bitmap images.</source>
      <translation>選択されたページをビットマップ画像としてエクスポート</translation>
    </message>
  </context>
  <context>
    <name>PluginManager</name>
    <message>
      <source>Cannot find plugin</source>
      <comment>plugin manager</comment>
      <translation>プラグインが見つかりません</translation>
    </message>
    <message>
      <source>unknown error</source>
      <comment>plugin manager</comment>
      <translation>未知のエラー</translation>
    </message>
    <message>
      <source>Cannot find symbol (%1)</source>
      <comment>plugin manager</comment>
      <translation>シンボル (%1) が見つかりません</translation>
    </message>
    <message>
      <source>Plugin: loading %1</source>
      <comment>plugin manager</comment>
      <translation>プラグイン: %1 を読み込み中</translation>
    </message>
    <message>
      <source>init failed</source>
      <comment>plugin load error</comment>
      <translation>初期化に失敗しました</translation>
    </message>
    <message>
      <source>unknown plugin type</source>
      <comment>plugin load error</comment>
      <translation>未知のプラグインタイプ</translation>
    </message>
    <message>
      <source>Plugin: %1 loaded</source>
      <comment>plugin manager</comment>
      <translation>プラグイン: %1 読み込み完了</translation>
    </message>
    <message>
      <source>Plugin: %1 failed to load: %2</source>
      <comment>plugin manager</comment>
      <translation>プラグイン: %1 読み込みに失敗: %2</translation>
    </message>
  </context>
  <context>
    <name>PluginManagerPrefsGui</name>
    <message>
      <source>Plugin Manager</source>
      <translation>プラグインマネージャ</translation>
    </message>
    <message>
      <source>Plugin</source>
      <translation>プラグイン</translation>
    </message>
    <message>
      <source>How to run</source>
      <translation>実行方法</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>タイプ</translation>
    </message>
    <message>
      <source>Load it?</source>
      <translation>読み込むか</translation>
    </message>
    <message>
      <source>Plugin ID</source>
      <translation>プラグイン ID</translation>
    </message>
    <message>
      <source>File</source>
      <translation>ファイル</translation>
    </message>
    <message>
      <source>Yes</source>
      <translation>はい</translation>
    </message>
    <message>
      <source>No</source>
      <translation>いいえ</translation>
    </message>
    <message>
      <source>You need to restart the application to apply the changes.</source>
      <translation>変更を適用するにはアプリケーションの再起動が必要です</translation>
    </message>
  </context>
  <context>
    <name>PolygonProps</name>
    <message>
      <source>Polygon Properties</source>
      <translation>多角形のプロパティ</translation>
    </message>
  </context>
  <context>
    <name>PolygonWidget</name>
    <message>
      <source>Corn&amp;ers:</source>
      <translation>角(&amp;E):</translation>
    </message>
    <message>
      <source>&amp;Rotation:</source>
      <translation>回転(&amp;R):</translation>
    </message>
    <message>
      <source>Apply &amp;Factor</source>
      <translation>因数を適用(&amp;F)</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>&amp;Factor:</source>
      <translation>因数(&amp;F):</translation>
    </message>
    <message>
      <source>Number of corners for polygons</source>
      <translation>多角形の角の数</translation>
    </message>
    <message>
      <source>Degrees of rotation for polygons</source>
      <translation>多角形の回転の度数</translation>
    </message>
    <message>
      <source>Apply Convex/Concave Factor to change shape of Polygons</source>
      <translation>多角形の形状を変更するのに凹凸の因数を適用する</translation>
    </message>
    <message>
      <source>Sample Polygon</source>
      <translation>サンプルの多角形</translation>
    </message>
    <message>
      <source>A negative value will make the polygon concave (or star shaped), a positive value will make it convex</source>
      <translation>負の値だと多角形は凸になり(もしくは星の形)、
正の値だと凹になります</translation>
    </message>
  </context>
  <context>
    <name>Preferences</name>
    <message>
      <source>Preferences</source>
      <translation>設定</translation>
    </message>
    <message>
      <source>GUI</source>
      <translation>GUI</translation>
    </message>
    <message>
      <source>&amp;Language:</source>
      <translation>言語(&amp;L):</translation>
    </message>
    <message>
      <source>&amp;Theme:</source>
      <translation>テーマ(&amp;T):</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source>&amp;Font Size (Menus):</source>
      <translation>フォントサイズ(メニュー)(&amp;F):</translation>
    </message>
    <message>
      <source>Font Size (&amp;Palettes):</source>
      <translation>フォントサイズ(パレット)(&amp;P):</translation>
    </message>
    <message>
      <source>&amp;Wheel Jump:</source>
      <translation>ホイールの移動量(&amp;W):</translation>
    </message>
    <message>
      <source>&amp;Recent Documents:</source>
      <translation>最近開いたドキュメント(&amp;R):</translation>
    </message>
    <message>
      <source>Paths</source>
      <translation>パス</translation>
    </message>
    <message>
      <source>&amp;Documents:</source>
      <translation>ドキュメント(&amp;D):</translation>
    </message>
    <message>
      <source>&amp;Change...</source>
      <translation>変更(&amp;C)...</translation>
    </message>
    <message>
      <source>&amp;ICC Profiles:</source>
      <translation>ICCプロファイル(&amp;I):</translation>
    </message>
    <message>
      <source>C&amp;hange...</source>
      <translation>変更(&amp;H)...</translation>
    </message>
    <message>
      <source>&amp;Scripts:</source>
      <translation>スクリプト(&amp;S):</translation>
    </message>
    <message>
      <source>Ch&amp;ange...</source>
      <translation>変更(&amp;A)...</translation>
    </message>
    <message>
      <source>Document T&amp;emplates:</source>
      <translation>ドキュメントテンプレート(&amp;E):</translation>
    </message>
    <message>
      <source>Cha&amp;nge...</source>
      <translation>変更(&amp;N)...</translation>
    </message>
    <message>
      <source>General</source>
      <translation>全般</translation>
    </message>
    <message>
      <source>Page Size</source>
      <translation>ページサイズ</translation>
    </message>
    <message>
      <source>Custom</source>
      <translation>カスタム</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>サイズ(&amp;S):</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation>縦方向</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation>横方向</translation>
    </message>
    <message>
      <source>Orie&amp;ntation:</source>
      <translation>方向(&amp;N):</translation>
    </message>
    <message>
      <source>Units:</source>
      <translation>単位:</translation>
    </message>
    <message>
      <source>&amp;Width:</source>
      <translation>幅(&amp;W):</translation>
    </message>
    <message>
      <source>&amp;Height:</source>
      <translation>高さ(&amp;H):</translation>
    </message>
    <message>
      <source>Margin Guides</source>
      <translation>マージンガイド</translation>
    </message>
    <message>
      <source>Autosave</source>
      <translation>自動保存</translation>
    </message>
    <message>
      <source>min</source>
      <translation>分</translation>
    </message>
    <message>
      <source>&amp;Interval:</source>
      <translation>間隔(&amp;I):</translation>
    </message>
    <message>
      <source>Undo/Redo</source>
      <translation>元に戻す/やり直す</translation>
    </message>
    <message>
      <source>Action history length</source>
      <translation>アクション履歴の長さ</translation>
    </message>
    <message>
      <source>Document</source>
      <translation>ドキュメント</translation>
    </message>
    <message>
      <source>Guides</source>
      <translation>ガイド</translation>
    </message>
    <message>
      <source>Typography</source>
      <translation>タイポグラフィ</translation>
    </message>
    <message>
      <source>Tools</source>
      <translation>ツール</translation>
    </message>
    <message>
      <source>Hyphenator</source>
      <translation>ハイフン</translation>
    </message>
    <message>
      <source>Fonts</source>
      <translation>フォント</translation>
    </message>
    <message>
      <source>Preflight Verifier</source>
      <translation>プリフライト検証</translation>
    </message>
    <message>
      <source>Color Management</source>
      <translation>カラー管理</translation>
    </message>
    <message>
      <source>PDF Export</source>
      <translation>PDF出力</translation>
    </message>
    <message>
      <source>Document Item Attributes</source>
      <translation>ドキュメントアイテム属性</translation>
    </message>
    <message>
      <source>Table of Contents and Indexes</source>
      <translation>目次とインデックス</translation>
    </message>
    <message>
      <source>Keyboard Shortcuts</source>
      <translation>キーボードショートカット</translation>
    </message>
    <message>
      <source>Other Options</source>
      <translation>その他のオプション</translation>
    </message>
    <message>
      <source>Sa&amp;ve Contents on Changes</source>
      <translation>変更内容を保存(&amp;V)</translation>
    </message>
    <message>
      <source>Preview</source>
      <translation>プレビュー</translation>
    </message>
    <message>
      <source>Small</source>
      <translation>小</translation>
    </message>
    <message>
      <source>Medium</source>
      <translation>中</translation>
    </message>
    <message>
      <source>Large</source>
      <translation>大</translation>
    </message>
    <message>
      <source>Scrapbook</source>
      <translation>スクラップブック</translation>
    </message>
    <message>
      <source>Page Display</source>
      <translation>ページ表示</translation>
    </message>
    <message>
      <source>Color:</source>
      <translation>色:</translation>
    </message>
    <message>
      <source>Display &amp;Unprintable Area in Margin Color</source>
      <translation>印刷できない範囲をマージンの色で表示(&amp;U)</translation>
    </message>
    <message>
      <source>Alt+U</source>
      <translation>Alt+U</translation>
    </message>
    <message>
      <source>Show Pictures</source>
      <translation>画像を表示</translation>
    </message>
    <message>
      <source>Show Text Chains</source>
      <translation>テキストチェーンを表示</translation>
    </message>
    <message>
      <source>Show Text Control Characters</source>
      <translation>テキストの制御文字を表示</translation>
    </message>
    <message>
      <source>Show Frames</source>
      <translation>フレームを表示</translation>
    </message>
    <message>
      <source>Rulers relative to Page</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scratch Space</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Top:</source>
      <translation>上(&amp;T):</translation>
    </message>
    <message>
      <source>&amp;Left:</source>
      <translation>左(&amp;L):</translation>
    </message>
    <message>
      <source>&amp;Bottom:</source>
      <translation>下(&amp;B):</translation>
    </message>
    <message>
      <source>&amp;Right:</source>
      <translation>右(&amp;R):</translation>
    </message>
    <message>
      <source>Gaps between Pages</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Horizontal:</source>
      <translation>水平:</translation>
    </message>
    <message>
      <source>Vertical:</source>
      <translation>垂直:</translation>
    </message>
    <message>
      <source>&amp;Adjust Display Size</source>
      <translation>表示サイズを調整(&amp;A)</translation>
    </message>
    <message>
      <source>To adjust the display drag the ruler below with the slider.</source>
      <translation>表示を調整するには下の定規をスライドバーで動かしてください</translation>
    </message>
    <message>
      <source>Display</source>
      <translation>表示</translation>
    </message>
    <message>
      <source>PostScript Interpreter</source>
      <translation>Postscriptインタプリタ</translation>
    </message>
    <message>
      <source>&amp;Name of Executable:</source>
      <translation>実行ファイル名(&amp;N):</translation>
    </message>
    <message>
      <source>Antialias &amp;Text</source>
      <translation>テキストのアンチエイリアス(&amp;T)</translation>
    </message>
    <message>
      <source>Antialias &amp;Graphics</source>
      <translation>画像のアンチエイリアス(&amp;G)</translation>
    </message>
    <message>
      <source>dpi</source>
      <translation>dpi</translation>
    </message>
    <message>
      <source>Resolution:</source>
      <translation>解像度:</translation>
    </message>
    <message>
      <source>Image Processing Tool</source>
      <translation>画像処理ツール</translation>
    </message>
    <message>
      <source>Name of &amp;Executable:</source>
      <translation>実行ファイル名(&amp;E):</translation>
    </message>
    <message>
      <source>External Tools</source>
      <translation>外部ツール</translation>
    </message>
    <message>
      <source>Printing</source>
      <translation>印刷中</translation>
    </message>
    <message>
      <source>Clip to Page &amp;Margins</source>
      <translation>ページマージンで切り取る(&amp;M)</translation>
    </message>
    <message>
      <source>Apply &amp;Under Color Removal</source>
      <translation>下色除去を適用(&amp;U)</translation>
    </message>
    <message>
      <source>Always ask before fonts are replaced when loading a document</source>
      <translation>ドキュメントの読み込み時にフォントを置換する際に常に尋ねる</translation>
    </message>
    <message>
      <source>Preview of current Paragraph Style visible when editing Styles</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Show Startup Dialog</source>
      <translation>スタートアップダイアログを表示</translation>
    </message>
    <message>
      <source>Lorem Ipsum</source>
      <translation>Lorem Ipsum</translation>
    </message>
    <message>
      <source>Always use standard Lorem Ipsum</source>
      <translation>常に標準のLorem Ipsumを使用する</translation>
    </message>
    <message>
      <source>Count of the Paragraphs:</source>
      <translation>段落の数:</translation>
    </message>
    <message>
      <source>Miscellaneous</source>
      <translation>その他</translation>
    </message>
    <message>
      <source>Plugins</source>
      <translation>プラグイン</translation>
    </message>
    <message>
      <source>Enable or disable  the display of linked frames.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Display non-printing characters such as paragraph markers in text frames</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Turns the display of frames on or off</source>
      <translation>フレームの表示をON/OFFする</translation>
    </message>
    <message>
      <source>Turns the display of pictures on or off</source>
      <translation>画像の表示をON/OFFする</translation>
    </message>
    <message>
      <source>Select your default language for Scribus to run with. Leave this blank to choose based on environment variables. You can still override this by passing a command line option when starting Scribus</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Choose the default window decoration and looks. Scribus inherits any available KDE or Qt themes, if Qt is configured to search KDE plugins.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Default font size for the menus and windows</source>
      <translation>メニューやウィンドウのデフォルトのフォントサイズ</translation>
    </message>
    <message>
      <source>Default font size for the tool windows</source>
      <translation>ツールウィンドウのデフォルトのフォントサイズ</translation>
    </message>
    <message>
      <source>Default unit of measurement for document editing</source>
      <translation>ドキュメントを編集する際のデフォルトの計測単位</translation>
    </message>
    <message>
      <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
      <translation>マウスホイールの動きに応じてスクロールする行数</translation>
    </message>
    <message>
      <source>Number of recently edited documents to show in the File menu</source>
      <translation>ファイルメニューの中に表示される最近編集したドキュメントの数</translation>
    </message>
    <message>
      <source>Default documents directory</source>
      <translation>デフォルトのドキュメントディレクトリ</translation>
    </message>
    <message>
      <source>Default ICC profiles directory. This cannot be changed with a document open. By default, Scribus will look in the System Directories under Mac OSX and Windows. On Linux and Unix, Scribus will search $home/.color/icc,/usr/share/color/icc and /usr/local/share/color/icc </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Default Scripter scripts directory</source>
      <translation>デフォルトのスクリプタスクリプトのディレクトリ</translation>
    </message>
    <message>
      <source>Additional directory for document templates</source>
      <translation>ドキュメントテンプレートの追加ディレクトリ</translation>
    </message>
    <message>
      <source>Default page size, either a standard size or a custom size</source>
      <translation>デフォルトの標準サイズとカスタムサイズの両方のページサイズ</translation>
    </message>
    <message>
      <source>Default orientation of document pages</source>
      <translation>デフォルトのドキュメントページの方向</translation>
    </message>
    <message>
      <source>Width of document pages, editable if you have chosen a custom page size</source>
      <translation>ドキュメントのページ幅。カスタムページサイズを選べば編集が可能です</translation>
    </message>
    <message>
      <source>Height of document pages, editable if you have chosen a custom page size</source>
      <translation>ドキュメントのページの高さ。カスタムページサイズを選べば編集が可能です</translation>
    </message>
    <message>
      <source>When enabled, Scribus saves a backup copy of your file with the .bak extension each time the time period elapses</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Time period between saving automatically</source>
      <translation>自動保存の間隔</translation>
    </message>
    <message>
      <source>Set the length of the action history in steps. If set to 0 infinite amount of actions will be stored.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Choose the size of the preview in the scrapbook palette</source>
      <translation>スクラップブックパレット中のプレビューのサイズを選択します</translation>
    </message>
    <message>
      <source>Save the scrapbook contents everytime after a change</source>
      <translation>変更するたびにスクラップブックの内容を保存</translation>
    </message>
    <message>
      <source>Color for paper</source>
      <translation>紙の色</translation>
    </message>
    <message>
      <source>Mask the area outside the margins in the margin color</source>
      <translation>マージンの外側の領域をマージンの色でマスクする</translation>
    </message>
    <message>
      <source>Set the default zoom level</source>
      <translation>デフォルトのズームレベルを設定</translation>
    </message>
    <message>
      <source>Place a ruler against your screen and drag the slider to set the zoom level so Scribus will display your pages and objects on them at the correct size</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Filesystem location for the Ghostscript interpreter</source>
      <translation>Ghostscriptインタープリタのファイルシステムの位置</translation>
    </message>
    <message>
      <source>Antialias text for EPS and PDF onscreen rendering</source>
      <translation>EPSとPDFのテキストの画面でのレンダリングをアンチエイリアスにする</translation>
    </message>
    <message>
      <source>Antialias graphics for EPS and PDF onscreen rendering</source>
      <translation>EPSとPDFの画像の画面でのレンダリングをアンチエイリアスにする</translation>
    </message>
    <message>
      <source>File system location for graphics editor. If you use gimp and your distro includes it, we recommend 'gimp-remote', as it allows you to edit the image in an already running instance of gimp.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Do not show objects outside the margins on the printed page or exported file</source>
      <translation>印刷されたページもしくは出力ファイルで、マージンの外側のオブジェクトを表示しません</translation>
    </message>
    <message>
      <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis. UCR reduces the possibility of over saturation with CMY inks.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Defines amount of space left of the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Defines amount of space right of the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Defines amount of space above the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Defines amount of space below the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Choose a Directory</source>
      <translation>ディレクトリを選択</translation>
    </message>
    <message>
      <source>Locate Ghostscript</source>
      <translation>Ghostscriptの位置</translation>
    </message>
    <message>
      <source>Locate your image editor</source>
      <translation>画像エディタの位置</translation>
    </message>
  </context>
  <context>
    <name>PrefsDialogBase</name>
    <message>
      <source>Save...</source>
      <translation>保存...</translation>
    </message>
    <message>
      <source>&amp;Defaults</source>
      <translation>標準設定(&amp;D)</translation>
    </message>
    <message>
      <source>Save Preferences</source>
      <translation>設定を保存</translation>
    </message>
  </context>
  <context>
    <name>PrefsManager</name>
    <message>
      <source>Single Page</source>
      <translation>単一ページ</translation>
    </message>
    <message>
      <source>Double sided</source>
      <translation>両面</translation>
    </message>
    <message>
      <source>Left Page</source>
      <translation>左ページ</translation>
    </message>
    <message>
      <source>Right Page</source>
      <translation>右ページ</translation>
    </message>
    <message>
      <source>3-Fold</source>
      <translation>三つ折り</translation>
    </message>
    <message>
      <source>Middle</source>
      <translation>中央ページ</translation>
    </message>
    <message>
      <source>4-Fold</source>
      <translation>四つ折り</translation>
    </message>
    <message>
      <source>Middle Left</source>
      <translation>中央左ページ</translation>
    </message>
    <message>
      <source>Middle Right</source>
      <translation>中央右ページ</translation>
    </message>
    <message>
      <source>PostScript</source>
      <translation>PostScript</translation>
    </message>
    <message>
      <source>Migrate Old Scribus Settings?</source>
      <translation>古いScribusの設定を移行しますか?</translation>
    </message>
    <message>
      <source>Scribus has detected existing Scribus 1.2 preferences files.
Do you want to migrate them to the new Scribus version?</source>
      <translation>Scribusは既存のScribus 1.2設定ファイルを発見しました。
新しいScribusのバージョンにこの設定を移行しますか?</translation>
    </message>
    <message>
      <source>Could not open preferences file &quot;%1&quot; for writing: %2</source>
      <translation>書き込みの際に設定ファイル&quot;%1&quot;を開けませんでした: %2</translation>
    </message>
    <message>
      <source>Writing to preferences file &quot;%1&quot; failed: QIODevice status code %2</source>
      <translation>設定ファイル&quot;%1&quot;の書き込みに失敗しました: QIOデバイスステータスコード %2</translation>
    </message>
    <message>
      <source>Failed to open prefs file &quot;%1&quot;: %2</source>
      <translation>設定ファイル&quot;%1&quot;を開くのに失敗しました: %2</translation>
    </message>
    <message>
      <source>Failed to read prefs XML from &quot;%1&quot;: %2 at line %3, col %4</source>
      <translation>&quot;%1&quot;からの設定XMLの読み込みに失敗しました: %2 行 %3 列 %4</translation>
    </message>
    <message>
      <source>Postscript</source>
      <translation>Postscript</translation>
    </message>
    <message>
      <source>PDF 1.3</source>
      <translation>PDF 1.3</translation>
    </message>
    <message>
      <source>PDF 1.4</source>
      <translation>PDF 1.4</translation>
    </message>
    <message>
      <source>PDF/X-3</source>
      <translation>PDF/X-3</translation>
    </message>
    <message>
      <source>Error Writing Preferences</source>
      <translation>設定の書き込みエラー</translation>
    </message>
    <message>
      <source>Scribus was not able to save its preferences:&lt;br>%1&lt;br>Please check file and directory permissions and available disk space.</source>
      <comment>scribus app error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Error Loading Preferences</source>
      <translation>設定の読み込みエラー</translation>
    </message>
    <message>
      <source>Scribus was not able to load its preferences:&lt;br>%1&lt;br>Default settings will be loaded.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>PresetLayout</name>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
    <message>
      <source>Gutenberg</source>
      <translation>グーテンベルク</translation>
    </message>
    <message>
      <source>Magazine</source>
      <translation>雑誌</translation>
    </message>
    <message>
      <source>Fibonacci</source>
      <translation>フィボナッチ</translation>
    </message>
    <message>
      <source>Golden Mean</source>
      <translation>黄金分割</translation>
    </message>
    <message>
      <source>Nine Parts</source>
      <translation>九分割</translation>
    </message>
    <message>
      <source>You can select predefined page layout here. 'None' leave margins as is, Gutenberg sets margins classically. 'Magazine' sets all margins for same value. Leading is Left/Inside value.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>PythonConsole</name>
    <message>
      <source>&amp;Open...</source>
      <translation>開く(&amp;O)...</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>保存(&amp;S)</translation>
    </message>
    <message>
      <source>Save &amp;As...</source>
      <translation>名前を付けて保存(&amp;A)...</translation>
    </message>
    <message>
      <source>&amp;Exit</source>
      <translation>終了(&amp;E)</translation>
    </message>
    <message>
      <source>&amp;File</source>
      <translation>ファイル(&amp;F)</translation>
    </message>
    <message>
      <source>&amp;Run</source>
      <translation>実行(&amp;R)</translation>
    </message>
    <message>
      <source>Run As &amp;Console</source>
      <translation>コンソールで実行(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Save Output...</source>
      <translation>出力を保存(&amp;S)...</translation>
    </message>
    <message>
      <source>&amp;Script</source>
      <translation>スクリプト(&amp;S)</translation>
    </message>
    <message>
      <source>Scribus Python Console</source>
      <translation>Scribus Pythonコンソール</translation>
    </message>
    <message>
      <source>This is derived from standard Python console so it contains some limitations esp. in the case of whitespaces. Please consult Scribus manual for more informations.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Script Console</source>
      <translation>スクリプトコンソール</translation>
    </message>
    <message>
      <source>Write your commands here. A selection is processed as script</source>
      <translation>ここにコマンドを記述してください。選択したものはスクリプトとして処理されます。</translation>
    </message>
    <message>
      <source>Output of your script</source>
      <translation>スクリプトの出力</translation>
    </message>
    <message>
      <source>Python Scripts (*.py)</source>
      <translation>Pythonスクリプト (*.py)</translation>
    </message>
    <message>
      <source>Open Python Script File</source>
      <translation>Pythonスクリプトファイルを開く</translation>
    </message>
    <message>
      <source>Save the Python Commands in File</source>
      <translation>Pythonコマンドをファイルに保存</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>警告</translation>
    </message>
    <message>
      <source>Text Files (*.txt)</source>
      <translation>テキストファイル (*.txt)</translation>
    </message>
    <message>
      <source>Save Current Output</source>
      <translation>現在の出力を保存</translation>
    </message>
  </context>
  <context>
    <name>QColorDialog</name>
    <message>
      <source>Hu&amp;e:</source>
      <translation>色相(&amp;E):</translation>
    </message>
    <message>
      <source>&amp;Sat:</source>
      <translation>彩度(&amp;S):</translation>
    </message>
    <message>
      <source>&amp;Val:</source>
      <translation>明度(&amp;V):</translation>
    </message>
    <message>
      <source>&amp;Red:</source>
      <translation>赤(&amp;R):</translation>
    </message>
    <message>
      <source>&amp;Green:</source>
      <translation>緑(&amp;G):</translation>
    </message>
    <message>
      <source>Bl&amp;ue:</source>
      <translation>青(&amp;U):</translation>
    </message>
    <message>
      <source>A&amp;lpha channel:</source>
      <translation>アルファチャンネル(&amp;L):</translation>
    </message>
    <message>
      <source>&amp;Basic colors</source>
      <translation>基本色(&amp;B)</translation>
    </message>
    <message>
      <source>&amp;Custom colors</source>
      <translation>カスタムカラー(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Define Custom Colors >></source>
      <translation>カスタムカラーを定義(&amp;D) >></translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>キャンセル</translation>
    </message>
    <message>
      <source>&amp;Add to Custom Colors</source>
      <translation>カスタムカラーに追加(&amp;A)</translation>
    </message>
    <message>
      <source>Select color</source>
      <translation>色を選択</translation>
    </message>
  </context>
  <context>
    <name>QFileDialog</name>
    <message>
      <source>Copy or Move a File</source>
      <translation>ファイルをコピーもしくは移動</translation>
    </message>
    <message>
      <source>Read: %1</source>
      <translation>読み込み: %1</translation>
    </message>
    <message>
      <source>Write: %1</source>
      <translation>書き込み: %1</translation>
    </message>
    <message>
      <source>File &amp;name:</source>
      <translation>ファイル名(&amp;N):</translation>
    </message>
    <message>
      <source>File &amp;type:</source>
      <translation>ファイルタイプ(&amp;T):</translation>
    </message>
    <message>
      <source>One directory up</source>
      <translation>一つ上のディレクトリへ</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>キャンセル</translation>
    </message>
    <message>
      <source>All Files (*)</source>
      <translation>全てのファイル (*)</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>名前</translation>
    </message>
    <message>
      <source>Size</source>
      <translation>サイズ</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>タイプ</translation>
    </message>
    <message>
      <source>Date</source>
      <translation>日付</translation>
    </message>
    <message>
      <source>Attributes</source>
      <translation>属性</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Look &amp;in:</source>
      <comment>#, fuzzy</comment>
      <translation>参照(&amp;I):</translation>
    </message>
    <message>
      <source>Back</source>
      <translation>戻る</translation>
    </message>
    <message>
      <source>Create New Folder</source>
      <translation>新規フォルダを作成</translation>
    </message>
    <message>
      <source>List View</source>
      <translation>リストビュー</translation>
    </message>
    <message>
      <source>Detail View</source>
      <translation>詳細ビュー</translation>
    </message>
    <message>
      <source>Preview File Info</source>
      <translation>ファイル情報をプレビュー</translation>
    </message>
    <message>
      <source>Preview File Contents</source>
      <translation>ファイル内容をプレビュー</translation>
    </message>
    <message>
      <source>Read-write</source>
      <translation>読み書き</translation>
    </message>
    <message>
      <source>Read-only</source>
      <translation>読み込み専用</translation>
    </message>
    <message>
      <source>Write-only</source>
      <translation>書き込み専用</translation>
    </message>
    <message>
      <source>Inaccessible</source>
      <translation>アクセス不能</translation>
    </message>
    <message>
      <source>Symlink to File</source>
      <translation>ファイルへのシンボリックリンク</translation>
    </message>
    <message>
      <source>Symlink to Directory</source>
      <translation>ディレクトリへのシンボリックリンク</translation>
    </message>
    <message>
      <source>Symlink to Special</source>
      <translation>特殊ファイルへのシンボリックリンク</translation>
    </message>
    <message>
      <source>File</source>
      <translation>ファイル</translation>
    </message>
    <message>
      <source>Dir</source>
      <translation>ディレクトリ</translation>
    </message>
    <message>
      <source>Special</source>
      <translation>スペシャル</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>開く</translation>
    </message>
    <message>
      <source>Save As</source>
      <translation>名前を付けて保存</translation>
    </message>
    <message>
      <source>&amp;Open</source>
      <translation>開く(&amp;O)</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>保存(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Rename</source>
      <translation>名前変更(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>削除(&amp;D)</translation>
    </message>
    <message>
      <source>R&amp;eload</source>
      <translation>リロード(&amp;E)</translation>
    </message>
    <message>
      <source>Sort by &amp;Name</source>
      <translation>名前でソート(&amp;N)</translation>
    </message>
    <message>
      <source>Sort by &amp;Size</source>
      <translation>サイズでソート(&amp;S)</translation>
    </message>
    <message>
      <source>Sort by &amp;Date</source>
      <translation>日付でソート(&amp;D)</translation>
    </message>
    <message>
      <source>&amp;Unsorted</source>
      <translation>ソートしない(&amp;U)</translation>
    </message>
    <message>
      <source>Sort</source>
      <translation>ソート</translation>
    </message>
    <message>
      <source>Show &amp;hidden files</source>
      <translation>隠しファイルを表示(&amp;H)</translation>
    </message>
    <message>
      <source>the file</source>
      <translation>ファイル</translation>
    </message>
    <message>
      <source>the directory</source>
      <translation>ディレクトリ</translation>
    </message>
    <message>
      <source>the symlink</source>
      <translation>シンボリックリンク</translation>
    </message>
    <message>
      <source>Delete %1</source>
      <translation>%1 を削除</translation>
    </message>
    <message>
      <source>&lt;qt>Are you sure you wish to delete %1 &quot;%2&quot;?&lt;/qt></source>
      <translation>&lt;qt>本当に%1 &quot;%2&quot;を削除しますか ?&lt;/qt></translation>
    </message>
    <message>
      <source>&amp;Yes</source>
      <translation>はい(&amp;Y)</translation>
    </message>
    <message>
      <source>&amp;No</source>
      <translation>いいえ(&amp;N)</translation>
    </message>
    <message>
      <source>New Folder 1</source>
      <translation>新規フォルダ 1</translation>
    </message>
    <message>
      <source>New Folder</source>
      <translation>新規フォルダ</translation>
    </message>
    <message>
      <source>New Folder %1</source>
      <translation>新規フォルダ %1</translation>
    </message>
    <message>
      <source>Find Directory</source>
      <translation>ディレクトリを検索</translation>
    </message>
    <message>
      <source>Directories</source>
      <translation>ディレクトリ</translation>
    </message>
    <message>
      <source>Save</source>
      <translation>保存</translation>
    </message>
    <message>
      <source>Error</source>
      <translation>エラー</translation>
    </message>
    <message>
      <source>%1
File not found.
Check path and filename.</source>
      <translation>%1
ファイルが見つかりません。
パスとファイル名を確認してください。</translation>
    </message>
    <message>
      <source>All Files (*.*)</source>
      <translation>全てのファイル (*.*)</translation>
    </message>
    <message>
      <source>Select a Directory</source>
      <translation>ディレクトリを選択</translation>
    </message>
    <message>
      <source>Directory:</source>
      <translation>ディレクトリ:</translation>
    </message>
  </context>
  <context>
    <name>QFontDialog</name>
    <message>
      <source>&amp;Font</source>
      <translation>フォント(&amp;F)</translation>
    </message>
    <message>
      <source>Font st&amp;yle</source>
      <translation>フォントスタイル(&amp;Y)</translation>
    </message>
    <message>
      <source>&amp;Size</source>
      <translation>サイズ(&amp;S)</translation>
    </message>
    <message>
      <source>Effects</source>
      <translation>エフェクト</translation>
    </message>
    <message>
      <source>Stri&amp;keout</source>
      <translation>取り消し線(&amp;K)</translation>
    </message>
    <message>
      <source>&amp;Underline</source>
      <translation>下線(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Color</source>
      <translation>色(&amp;C)</translation>
    </message>
    <message>
      <source>Sample</source>
      <translation>サンプル</translation>
    </message>
    <message>
      <source>Scr&amp;ipt</source>
      <translation>スクリプト(&amp;I)</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Apply</source>
      <translation>適用</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>キャンセル</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>閉じる</translation>
    </message>
    <message>
      <source>Select Font</source>
      <translation>フォントを選択</translation>
    </message>
  </context>
  <context>
    <name>QLineEdit</name>
    <message>
      <source>Clear</source>
      <translation>クリア</translation>
    </message>
    <message>
      <source>Select All</source>
      <translation>全て選択</translation>
    </message>
    <message>
      <source>&amp;Undo</source>
      <translation>元に戻す(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Redo</source>
      <translation>やり直し(&amp;R)</translation>
    </message>
    <message>
      <source>Cu&amp;t</source>
      <translation>切り取り(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>コピー(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation>貼り付け(&amp;P)</translation>
    </message>
  </context>
  <context>
    <name>QMainWindow</name>
    <message>
      <source>Line up</source>
      <translation>整列</translation>
    </message>
    <message>
      <source>Customize...</source>
      <translation>カスタマイズ...</translation>
    </message>
  </context>
  <context>
    <name>QMessageBox</name>
    <message>
      <source>&lt;h3>About Qt&lt;/h3>&lt;p>This program uses Qt version %1.&lt;/p>&lt;p>Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p>&lt;p>Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br>Qt is also available for embedded devices.&lt;/p>&lt;p>Qt is a Trolltech product. See &lt;tt>http://www.trolltech.com/qt/&lt;/tt> for more information.&lt;/p></source>
      <translation>&lt;h3>Qt について&lt;/h3>&lt;p>このプログラムは Qt バージョン %1 を使用しています。&lt;/p>&lt;p>
QtはクロスプラットフォームのC++ GUI &amp;amp; アプリケーション開発ツールキットです。&lt;/p>&lt;p>
Qtにより、MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, 商用のUnix派生版でソースの移植性があります。&lt;br>
Qtは組込みデバイスでも利用可能です。&lt;/p>&lt;p>QtはTrolltechの製品です。詳細は&lt;tt>http://www.trolltech.com/qt/&lt;
/tt>を参照してください。&lt;/p></translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <source>Copy #%1 of </source>
      <translation>#%1のコピー</translation>
    </message>
    <message>
      <source>Background</source>
      <translation>背景</translation>
    </message>
    <message>
      <source>Importing text</source>
      <translation>テキストをインポート中</translation>
    </message>
    <message>
      <source>All Supported Formats</source>
      <translation>サポートされている全てのフォーマット</translation>
    </message>
    <message>
      <source>All Files (*)</source>
      <translation>全てのファイル (*)</translation>
    </message>
    <message>
      <source>Afrikaans</source>
      <translation>アフリカーンス語</translation>
    </message>
    <message>
      <source>Albanian</source>
      <translation>アルバニア語</translation>
    </message>
    <message>
      <source>Basque</source>
      <translation>バスク語</translation>
    </message>
    <message>
      <source>Bulgarian</source>
      <translation>ブルガリア語</translation>
    </message>
    <message>
      <source>Brazilian</source>
      <translation>ブラジル</translation>
    </message>
    <message>
      <source>Catalan</source>
      <translation>カタロニア語</translation>
    </message>
    <message>
      <source>Chinese</source>
      <translation>中国語</translation>
    </message>
    <message>
      <source>Croatian</source>
      <translation>クロアチア語</translation>
    </message>
    <message>
      <source>Czech</source>
      <translation>チェコ語</translation>
    </message>
    <message>
      <source>Danish</source>
      <translation>デンマーク語</translation>
    </message>
    <message>
      <source>Dutch</source>
      <translation>オランダ語</translation>
    </message>
    <message>
      <source>English</source>
      <translation>英語</translation>
    </message>
    <message>
      <source>English (British)</source>
      <translation>英語 (イギリス)</translation>
    </message>
    <message>
      <source>Esperanto</source>
      <translation>エスペラント語</translation>
    </message>
    <message>
      <source>German</source>
      <translation>ドイツ語</translation>
    </message>
    <message>
      <source>German (Trad.)</source>
      <translation>ドイツ語 (Trad.)</translation>
    </message>
    <message>
      <source>Finnish</source>
      <translation>フィンランド語</translation>
    </message>
    <message>
      <source>French</source>
      <translation>フランス語</translation>
    </message>
    <message>
      <source>Galician</source>
      <translation>ガリシア語</translation>
    </message>
    <message>
      <source>Greek</source>
      <translation>ギリシャ語</translation>
    </message>
    <message>
      <source>Hungarian</source>
      <translation>ハンガリー語</translation>
    </message>
    <message>
      <source>Indonesian</source>
      <translation>インドネシア語</translation>
    </message>
    <message>
      <source>Italian</source>
      <translation>イタリア語</translation>
    </message>
    <message>
      <source>Korean</source>
      <translation>韓国語</translation>
    </message>
    <message>
      <source>Lithuanian</source>
      <translation>リトアニア語</translation>
    </message>
    <message>
      <source>Norwegian (Bokmaal)</source>
      <translation>ノルウェー語 (ブークモール)</translation>
    </message>
    <message>
      <source>Norwegian (Nnyorsk)</source>
      <translation>ノルウェー語 (ニーノシュク)</translation>
    </message>
    <message>
      <source>Norwegian</source>
      <translation>ノルウェー語</translation>
    </message>
    <message>
      <source>Polish</source>
      <translation>ポーランド語</translation>
    </message>
    <message>
      <source>Portuguese</source>
      <translation>ポルトガル語</translation>
    </message>
    <message>
      <source>Portuguese (BR)</source>
      <translation>ポルトガル語(BR)</translation>
    </message>
    <message>
      <source>Russian</source>
      <translation>ロシア語</translation>
    </message>
    <message>
      <source>Swedish</source>
      <translation>スウェーデン語</translation>
    </message>
    <message>
      <source>Spanish</source>
      <translation>スペイン語</translation>
    </message>
    <message>
      <source>Spanish (Latin)</source>
      <translation>スペイン語(ラテン)</translation>
    </message>
    <message>
      <source>Slovak</source>
      <translation>スロバキア語</translation>
    </message>
    <message>
      <source>Slovenian</source>
      <translation>スロベニア語</translation>
    </message>
    <message>
      <source>Serbian</source>
      <translation>セルビア語</translation>
    </message>
    <message>
      <source>Thai</source>
      <translation>タイ語</translation>
    </message>
    <message>
      <source>Turkish</source>
      <translation>トルコ語</translation>
    </message>
    <message>
      <source>Ukranian</source>
      <translation>ウクライナ語</translation>
    </message>
    <message>
      <source>Welsh</source>
      <translation>ウェールズ語</translation>
    </message>
    <message>
      <source>Scribus Crash</source>
      <translation>Scribusはクラッシュしました</translation>
    </message>
    <message>
      <source>Scribus crashes due to Signal #%1</source>
      <translation>Scribusはシグナル #%1 でクラッシュしました</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>OK(&amp;O)</translation>
    </message>
    <message>
      <source>Scribus crashes due to the following exception : %1</source>
      <translation>Scribusは以下の例外によりクラッシュしました : %1</translation>
    </message>
    <message>
      <source>Custom</source>
      <translation>カスタム</translation>
    </message>
    <message>
      <source>Page</source>
      <translation>ページ</translation>
    </message>
    <message>
      <source>Master Page </source>
      <translation>マスターページ </translation>
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
      <translation>出力ファイル %1 を開けませんでした</translation>
    </message>
    <message>
      <source>Output stream not writeable</source>
      <translation>出力ストリームは書き込み可能ではありません</translation>
    </message>
    <message>
      <source>Verification of settings failed: %1</source>
      <translation>設定の検証に失敗しました: %1</translation>
    </message>
    <message>
      <source>Could not open input file %1</source>
      <translation>入力ファイル %1 を開けませんでした</translation>
    </message>
    <message>
      <source>Unable to read settings XML:</source>
      <translation>設定XMLを読み込めません:</translation>
    </message>
    <message>
      <source>%1 (line %2 col %3)</source>
      <comment>Load PDF settings</comment>
      <translation>%1 (行 %2 列 %3)</translation>
    </message>
    <message>
      <source>Unable to read settings XML: %1</source>
      <translation>設定XMLを読み込めません: %1</translation>
    </message>
    <message>
      <source>null root node</source>
      <comment>Load PDF settings</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&lt;pdfVersion> invalid</source>
      <comment>Load PDF settings</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>found %1 &lt;%2> nodes, need 1.</source>
      <comment>Load PDF settings</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>unexpected null &lt;%2> node</source>
      <comment>Load PDF settings</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>node &lt;%1> not an element</source>
      <comment>Load PDF settings</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>element &lt;%1> lacks `value' attribute</source>
      <comment>Load PDF settings</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>element &lt;%1> value must be `true' or `false'</source>
      <comment>Load PDF settings</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>element &lt;lpiSettingsEntry> lacks `name' attribute</source>
      <comment>Load PDF settings</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>All</source>
      <translation>全て</translation>
    </message>
    <message>
      <source>Exporting PostScript File</source>
      <translation>PostScriptファイルをエクスポート中</translation>
    </message>
    <message>
      <source>Printing File</source>
      <translation>ファイルを印刷中</translation>
    </message>
    <message>
      <source>Black</source>
      <translation>ブラック</translation>
    </message>
    <message>
      <source>Cyan</source>
      <translation>シアン</translation>
    </message>
    <message>
      <source>Magenta</source>
      <translation>マゼンダ</translation>
    </message>
    <message>
      <source>Yellow</source>
      <translation>イエロー</translation>
    </message>
    <message>
      <source>Freetype2 library not available</source>
      <translation>Freetype2ライブラリが利用可能ではありません</translation>
    </message>
    <message>
      <source>Font %1 is broken, no embedding</source>
      <translation>フォント %1 は破損しているので、埋め込まれません</translation>
    </message>
    <message>
      <source>Font %1 is broken (read stream), no embedding</source>
      <translation>フォント %1 は破損しているので(読み込みストリーム)、埋め込まれません</translation>
    </message>
    <message>
      <source>Font %1 is broken (FreeType2), discarding it</source>
      <translation>フォント %1 は破損しているので(FreeType2)、破棄されます</translation>
    </message>
    <message>
      <source>Font %1 is broken (no Face), discarding it</source>
      <translation>フォント %1 は破損しているので(フェースなし)、破棄されます</translation>
    </message>
    <message>
      <source>Font %1 has broken glyph %2 (charcode %3)</source>
      <translation>フォント %1 は破損したグリフです %2 (文字コード %3)</translation>
    </message>
    <message>
      <source>Font %1 is broken and will be discarded</source>
      <translation>フォント %1 は破損しているので破棄されます</translation>
    </message>
    <message>
      <source>Font %1 cannot be read, no embedding</source>
      <translation>フォント %1 が読み込めないので、埋め込まれません</translation>
    </message>
    <message>
      <source>Font %1 is broken, discarding it</source>
      <translation>フォント %1 は壊れているので破棄されます</translation>
    </message>
    <message>
      <source>Creating Font Cache</source>
      <translation>フォントキャッシュを作成中</translation>
    </message>
    <message>
      <source>Failed to load font %1 - font type unknown</source>
      <translation>フォント %1 の読み込みに失敗しました - フォントタイプ不明</translation>
    </message>
    <message>
      <source>New Font found, checking...</source>
      <translation>新しいフォントが見つかりました。チェック中...</translation>
    </message>
    <message>
      <source>Modified Font found, checking...</source>
      <translation>変更されたフォントを発見、チェック中...</translation>
    </message>
    <message>
      <source>Font %1 loaded from %2(%3)</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Font %1(%2) is duplicate of %3</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Loading font %1 (found using fontconfig)</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Font %1 (found using fontconfig) is broken, discarding it</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Failed to load a font - freetype2 couldn't find the font file</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Reading Font Cache</source>
      <translation>フォントキャッシュを読み込み中</translation>
    </message>
    <message>
      <source>Writing updated Font Cache</source>
      <translation>更新されたフォントキャッシュを書き込み中</translation>
    </message>
    <message>
      <source>Searching for Fonts</source>
      <translation>フォントを検索中</translation>
    </message>
    <message>
      <source>Font %1 is broken (FreeType), discarding it</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Font %1  has invalid glyph %2 (charcode %3), discarding it</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>extracting face %1 from font %2 (offset=%3, nTables=%4)</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>memcpy header: %1 %2 %3</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>table '%1'</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>memcpy table: %1 %2 %3</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>memcpy offset: %1 %2 %3</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Initializing...</source>
      <translation>初期化中...</translation>
    </message>
    <message>
      <source>Scribus Development Version</source>
      <translation>Scribus 開発バージョン</translation>
    </message>
    <message>
      <source>You are running a development version of Scribus 1.3.x. The document you are working with was created in Scribus 1.2.3 or lower. The process of saving will make this file unusable again in Scribus 1.2.3 unless you use File->Save As. Are you sure you wish to proceed with this operation?</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&lt;p>You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p>Choose one of the following:&lt;br>&lt;ul>&lt;li>&lt;b>Create&lt;/b> missing pages&lt;/li>&lt;li>&lt;b>Import&lt;/b> pages until the last page&lt;/li>&lt;li>&lt;b>Cancel&lt;/b>&lt;/li>&lt;/ul></source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>C&amp;reate</source>
      <translation>作成(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation>インポート(&amp;I)</translation>
    </message>
    <message>
      <source>The changes to your document have not been saved and you have requested to revert them. Do you wish to continue?</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Save as</source>
      <translation>名前を付けて保存</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source> mm</source>
      <translation> mm</translation>
    </message>
    <message>
      <source> in</source>
      <translation> in</translation>
    </message>
    <message>
      <source> p</source>
      <translation> p</translation>
    </message>
    <message>
      <source> cm</source>
      <translation> cm</translation>
    </message>
    <message>
      <source> c</source>
      <translation> c</translation>
    </message>
    <message>
      <source>pt</source>
      <translation>pt</translation>
    </message>
    <message>
      <source>mm</source>
      <translation>mm</translation>
    </message>
    <message>
      <source>in</source>
      <translation>in</translation>
    </message>
    <message>
      <source>p</source>
      <translation>p</translation>
    </message>
    <message>
      <source>cm</source>
      <translation>cm</translation>
    </message>
    <message>
      <source>c</source>
      <translation>c</translation>
    </message>
    <message>
      <source>Points (pt)</source>
      <translation>ポイント (pt)</translation>
    </message>
    <message>
      <source>Millimeters (mm)</source>
      <translation>ミリメートル(mm)</translation>
    </message>
    <message>
      <source>Inches (in)</source>
      <translation>インチ (in)</translation>
    </message>
    <message>
      <source>Picas (p)</source>
      <translation>パイカ (p)</translation>
    </message>
    <message>
      <source>Centimeters (cm)</source>
      <translation>センチメートル(cm)</translation>
    </message>
    <message>
      <source>Cicero (c)</source>
      <translation>シセロ (c)</translation>
    </message>
    <message>
      <source>File exists</source>
      <translation>ファイルは存在します</translation>
    </message>
    <message>
      <source>A file named '%1' already exists.&lt;br/>Do you want to replace it with the file you are saving?</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Replace</source>
      <translation>置換(&amp;R)</translation>
    </message>
    <message>
      <source>page</source>
      <comment>page export</comment>
      <translation>ページ</translation>
    </message>
    <message>
      <source>Color Wheel</source>
      <translation>カラーホイール</translation>
    </message>
    <message>
      <source>Font Preview</source>
      <translation>フォントプレビュー</translation>
    </message>
    <message>
      <source>My Plugin</source>
      <translation>自作プラグイン</translation>
    </message>
    <message>
      <source>New From Template</source>
      <translation>テンプレートから新規作成</translation>
    </message>
    <message>
      <source>Document Template: </source>
      <translation>ドキュメントテンプレート:</translation>
    </message>
    <message>
      <source>Newsletters</source>
      <translation>ニュースレター</translation>
    </message>
    <message>
      <source>Brochures</source>
      <translation>パンフレット</translation>
    </message>
    <message>
      <source>Catalogs</source>
      <translation>カタログ</translation>
    </message>
    <message>
      <source>Flyers</source>
      <translation>チラシ</translation>
    </message>
    <message>
      <source>Signs</source>
      <translation>看板</translation>
    </message>
    <message>
      <source>Cards</source>
      <translation>カード</translation>
    </message>
    <message>
      <source>Letterheads</source>
      <translation>レターヘッド</translation>
    </message>
    <message>
      <source>Envelopes</source>
      <translation>封筒</translation>
    </message>
    <message>
      <source>Business Cards</source>
      <translation>名刺</translation>
    </message>
    <message>
      <source>Calendars</source>
      <translation>カレンダー</translation>
    </message>
    <message>
      <source>Advertisements</source>
      <translation>広告</translation>
    </message>
    <message>
      <source>Labels</source>
      <translation>ラベル</translation>
    </message>
    <message>
      <source>Menus</source>
      <translation>メニュー</translation>
    </message>
    <message>
      <source>Programs</source>
      <translation>プログラム</translation>
    </message>
    <message>
      <source>PDF Forms</source>
      <translation>PDFフォーム</translation>
    </message>
    <message>
      <source>PDF Presentations</source>
      <translation>PDFプレゼンテーション</translation>
    </message>
    <message>
      <source>Magazines</source>
      <translation>雑誌</translation>
    </message>
    <message>
      <source>Posters</source>
      <translation>ポスター</translation>
    </message>
    <message>
      <source>Announcements</source>
      <translation>アナウンス</translation>
    </message>
    <message>
      <source>Text Documents</source>
      <translation>テキストドキュメント</translation>
    </message>
    <message>
      <source>Folds</source>
      <translation>折り目</translation>
    </message>
    <message>
      <source>Media Cases</source>
      <translation>メディアケース</translation>
    </message>
    <message>
      <source>Own Templates</source>
      <translation>自作のテンプレート</translation>
    </message>
    <message>
      <source>Export As Image</source>
      <translation>画像としてエクスポート</translation>
    </message>
    <message>
      <source>Save as Image</source>
      <translation>画像として保存</translation>
    </message>
    <message>
      <source>Error writing the output file(s).</source>
      <translation>出力ファイルの書き込み中にエラー</translation>
    </message>
    <message>
      <source>Export successful.</source>
      <translation>エクスポートに成功しました</translation>
    </message>
    <message>
      <source>File exists. Overwrite?</source>
      <translation>ファイルは存在します。上書きしますか?</translation>
    </message>
    <message>
      <source>exists already. Overwrite?</source>
      <translation>すでに存在します。上書きしますか?</translation>
    </message>
    <message>
      <source>Yes</source>
      <translation>はい</translation>
    </message>
    <message>
      <source>No</source>
      <translation>いいえ</translation>
    </message>
    <message>
      <source>Yes all</source>
      <translation>全てはい</translation>
    </message>
    <message>
      <source>PS/EPS Importer</source>
      <translation>PS/EPSインポータ</translation>
    </message>
    <message>
      <source>All Supported Formats (*.eps *.EPS *.ps *.PS);;</source>
      <translation>サポートされている全てのフォーマット (*.eps *.EPS *.ps *.PS);;</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>開く</translation>
    </message>
    <message>
      <source>Save As Template</source>
      <translation>テンプレートに名前を付けて保存</translation>
    </message>
    <message>
      <source>Cannot get a color with an empty name.</source>
      <comment>python error</comment>
      <translation>名前をつけずに色を取得することはできません</translation>
    </message>
    <message>
      <source>Color not found.</source>
      <comment>python error</comment>
      <translation>色が見つかりません</translation>
    </message>
    <message>
      <source>Cannot change a color with an empty name.</source>
      <comment>python error</comment>
      <translation>名前をつけずに色を変更することはできません</translation>
    </message>
    <message>
      <source>Color not found in document.</source>
      <comment>python error</comment>
      <translation>ドキュメント中に色が見つかりません</translation>
    </message>
    <message>
      <source>Color not found in default colors.</source>
      <comment>python error</comment>
      <translation>デフォルト色の中に色が見つかりません</translation>
    </message>
    <message>
      <source>Cannot create a color with an empty name.</source>
      <comment>python error</comment>
      <translation>名前をつけずに色を作成することはできません</translation>
    </message>
    <message>
      <source>Cannot delete a color with an empty name.</source>
      <comment>python error</comment>
      <translation>名前をつけずに色を削除することはできません</translation>
    </message>
    <message>
      <source>Cannot replace a color with an empty name.</source>
      <comment>python error</comment>
      <translation>名前をつけずに色を置き換えることはできません</translation>
    </message>
    <message>
      <source>firstPageOrder is bigger than allowed.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Failed to open document.</source>
      <comment>python error</comment>
      <translation>ドキュメントを開くのに失敗しました</translation>
    </message>
    <message>
      <source>Failed to save document.</source>
      <comment>python error</comment>
      <translation>ドキュメントの保存に失敗しました</translation>
    </message>
    <message>
      <source>Unit out of range. Use one of the scribus.UNIT_* constants.</source>
      <comment>python error</comment>
      <translation>単位が範囲を越えています。scribus.UNIT_*定数のうち一つを使用してください。</translation>
    </message>
    <message>
      <source>Color not found - python error</source>
      <comment>python error</comment>
      <translation>色が見つかりません - pythonエラー</translation>
    </message>
    <message>
      <source>Argument must be page item name, or PyCObject instance</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Property not found</source>
      <translation>プロパティが見つかりません</translation>
    </message>
    <message>
      <source>Child not found</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Couldn't convert result type '%1'.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Property type '%1' not supported</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Couldn't convert '%1' to property type '%2'</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Types matched, but setting property failed.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Target is not an image frame.</source>
      <comment>python error</comment>
      <translation>ターゲットは画像フレームではありません</translation>
    </message>
    <message>
      <source>Specified item not an image frame.</source>
      <comment>python error</comment>
      <translation>指定されたアイテムは画像フレームではありません</translation>
    </message>
    <message>
      <source>Cannot group less than two items</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Can't group less than two items</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Need selection or argument list of items to group</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot scale by 0%.</source>
      <comment>python error</comment>
      <translation>スケールは0%にできません</translation>
    </message>
    <message>
      <source>Font not found.</source>
      <comment>python error</comment>
      <translation>フォントが見つかりません</translation>
    </message>
    <message>
      <source>Cannot render an empty sample.</source>
      <comment>python error</comment>
      <translation>サンプルなしでは描画できません</translation>
    </message>
    <message>
      <source>Unable to save pixmap</source>
      <comment>scripter error</comment>
      <translation>ピックスマップを保存できません</translation>
    </message>
    <message>
      <source>Cannot have an empty layer name.</source>
      <comment>python error</comment>
      <translation>レイヤー名なしにすることはできません</translation>
    </message>
    <message>
      <source>Layer not found.</source>
      <comment>python error</comment>
      <translation>レイヤーが見つかりません</translation>
    </message>
    <message>
      <source>Cannot remove the last layer.</source>
      <comment>python error</comment>
      <translation>最後のレイヤーは削除できません</translation>
    </message>
    <message>
      <source>Cannot create layer without a name.</source>
      <comment>python error</comment>
      <translation>名前のないレイヤーを作成することはできません</translation>
    </message>
    <message>
      <source>An object with the requested name already exists.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Point list must contain at least two points (four values).</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Point list must contain an even number of values.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Point list must contain at least three points (six values).</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Point list must contain at least four points (eight values).</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Point list must have a multiple of six values.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Object not found.</source>
      <comment>python error</comment>
      <translation>オブジェクトが見つかりません</translation>
    </message>
    <message>
      <source>Style not found.</source>
      <comment>python error</comment>
      <translation>スタイルが見つかりません</translation>
    </message>
    <message>
      <source>Cannot set style on a non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームのスタイルを設定できません</translation>
    </message>
    <message>
      <source>Failed to save EPS.</source>
      <comment>python error</comment>
      <translation>EPSの保存に失敗しました</translation>
    </message>
    <message>
      <source>Page number out of range.</source>
      <comment>python error</comment>
      <translation>ページ番号が範囲を越えています</translation>
    </message>
    <message>
      <source>argument is not list: must be list of float values.</source>
      <comment>python error</comment>
      <translation>引数がリストではありません: 浮動少数の値のリストでなければなりません</translation>
    </message>
    <message>
      <source>argument contains non-numeric values: must be list of float values.</source>
      <comment>python error</comment>
      <translation>引数に数値以外の値が含まれています: 浮動少数の値のリストでなければなりません</translation>
    </message>
    <message>
      <source>argument contains no-numeric values: must be list of float values.</source>
      <comment>python error</comment>
      <translation>引数に数値以外の値が含まれています: 浮動少数の値のリストでなければなりません</translation>
    </message>
    <message>
      <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12.</source>
      <comment>python error</comment>
      <translation>線幅が範囲を越えています。0&lt;=線幅&lt;=12でなければなりません。</translation>
    </message>
    <message>
      <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
      <comment>python error</comment>
      <translation>線の濃さが範囲を越えています。0&lt;=濃さ&lt;=100でなければなりません。</translation>
    </message>
    <message>
      <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
      <comment>python error</comment>
      <translation>塗りつぶし色の濃さが範囲を越えています。0&lt;=濃さ&lt;=100でなければなりません。</translation>
    </message>
    <message>
      <source>Corner radius must be a positive number.</source>
      <comment>python error</comment>
      <translation>コーナーの角度は正数でなければなりません</translation>
    </message>
    <message>
      <source>Line style not found.</source>
      <comment>python error</comment>
      <translation>線スタイルが見つかりません</translation>
    </message>
    <message>
      <source>Cannot get font size of non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームのフォントサイズを取得できません</translation>
    </message>
    <message>
      <source>Cannot get font of non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームのフォントを取得できません</translation>
    </message>
    <message>
      <source>Cannot get text size of non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームのテキストサイズを取得できません</translation>
    </message>
    <message>
      <source>Cannot get column count of non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームの列数を取得できません</translation>
    </message>
    <message>
      <source>Cannot get line space of non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームの行間隔を取得できません</translation>
    </message>
    <message>
      <source>Cannot get column gap of non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームの列のギャップを取得できません</translation>
    </message>
    <message>
      <source>Cannot get text of non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームのテキストを取得できません</translation>
    </message>
    <message>
      <source>Cannot set text of non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームのテキストを設定できません</translation>
    </message>
    <message>
      <source>Cannot insert text into non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームにテキストを挿入できません</translation>
    </message>
    <message>
      <source>Insert index out of bounds.</source>
      <comment>python error</comment>
      <translation>挿入されたインデックスが範囲を越えています</translation>
    </message>
    <message>
      <source>Alignment out of range. Use one of the scribus.ALIGN* constants.</source>
      <comment>python error</comment>
      <translation>配置が範囲を越えています。scribus.ALIGN*定数のうち一つを使用してください。</translation>
    </message>
    <message>
      <source>Cannot set text alignment on a non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームにテキスト配置を設定できません</translation>
    </message>
    <message>
      <source>Font size out of bounds - must be 1 &lt;= size &lt;= 512.</source>
      <comment>python error</comment>
      <translation>フォントサイズが範囲を越えています。 1&lt;=サイズ&lt;=512でなければなりません。</translation>
    </message>
    <message>
      <source>Cannot set font size on a non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームのフォントサイズを設定できません</translation>
    </message>
    <message>
      <source>Cannot set font on a non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームのフォントを設定できません</translation>
    </message>
    <message>
      <source>Line space out of bounds, must be >= 0.1.</source>
      <comment>python error</comment>
      <translation>行間隔が範囲を越えています。0.1以上にしてください。</translation>
    </message>
    <message>
      <source>Cannot set line spacing on a non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームに行間隔を設定できません</translation>
    </message>
    <message>
      <source>Column gap out of bounds, must be positive.</source>
      <comment>python error</comment>
      <translation>列のギャップが範囲を越えています。正の値でなければなりません。</translation>
    </message>
    <message>
      <source>Cannot set column gap on a non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームの列のギャップを設定できません</translation>
    </message>
    <message>
      <source>Column count out of bounds, must be > 1.</source>
      <comment>python error</comment>
      <translation>列数が範囲を越えています。1以上でなければなりません。</translation>
    </message>
    <message>
      <source>Cannot set number of columns on a non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームに行数を設定できません</translation>
    </message>
    <message>
      <source>Selection index out of bounds</source>
      <comment>python error</comment>
      <translation>選択されたインデックスが範囲を越えています</translation>
    </message>
    <message>
      <source>Cannot select text in a non-text frame</source>
      <comment>python error</comment>
      <translation>非テキストフレームでテキストを選択できません</translation>
    </message>
    <message>
      <source>Cannot delete text from a non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームからテキストを削除できません。</translation>
    </message>
    <message>
      <source>Cannot set text fill on a non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームにテキストの塗りつぶしを設定できません</translation>
    </message>
    <message>
      <source>Cannot set text stroke on a non-text frame.</source>
      <comment>python error</comment>
      <translation>テキストの輪郭は非テキストフレームには設定できません</translation>
    </message>
    <message>
      <source>Cannot set text shade on a non-text frame.</source>
      <comment>python error</comment>
      <translation>テキストの濃さは非テキストフレームには設定できません</translation>
    </message>
    <message>
      <source>Can only link text frames.</source>
      <comment>python error</comment>
      <translation>テキストフレームのみにリンクできます</translation>
    </message>
    <message>
      <source>Target frame must be empty.</source>
      <comment>python error</comment>
      <translation>ターゲットフレームは空でなければなりません</translation>
    </message>
    <message>
      <source>Target frame links to another frame.</source>
      <comment>python error</comment>
      <translation>ターゲットフレームは他のフレームにリンクしています</translation>
    </message>
    <message>
      <source>Target frame is linked to by another frame.</source>
      <comment>python error</comment>
      <translation>ターゲットフレームは他のフレームによってリンクされています</translation>
    </message>
    <message>
      <source>Source and target are the same object.</source>
      <comment>python error</comment>
      <translation>ソースとターゲットが同じオブジェクトです</translation>
    </message>
    <message>
      <source>Cannot unlink a non-text frame.</source>
      <comment>python error</comment>
      <translation>非テキストフレームのリンクを解除できません</translation>
    </message>
    <message>
      <source>Object is not a linked text frame, can't unlink.</source>
      <comment>python error</comment>
      <translation>オブジェクトはテキストフレームにリンクされておらず、リンク解除できません</translation>
    </message>
    <message>
      <source>Object the last frame in a series, can't unlink. Unlink the previous frame instead.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot convert a non-text frame to outlines.</source>
      <comment>python error</comment>
      <translation>非テキストフレームをアウトラインに変換できません</translation>
    </message>
    <message>
      <source>Only text frames can be checked for overflowing</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Can't set bookmark on a non-text frame</source>
      <comment>python error</comment>
      <translation>非テキストフレームにブックマークを設定できません</translation>
    </message>
    <message>
      <source>Can't get info from a non-text frame</source>
      <comment>python error</comment>
      <translation>非テキストフレームから情報を取得できません</translation>
    </message>
    <message>
      <source>The filename must be a string.</source>
      <comment>python error</comment>
      <translation>ファイル名は文字列でなければなりません</translation>
    </message>
    <message>
      <source>The filename should not be empty string.</source>
      <comment>python error</comment>
      <translation>ファイル名は空文字列ではいけません</translation>
    </message>
    <message>
      <source>Cannot delete image type settings.</source>
      <comment>python error</comment>
      <translation>画像タイプ設定を削除できません</translation>
    </message>
    <message>
      <source>The image type must be a string.</source>
      <comment>python error</comment>
      <translation>画像タイプは文字列でなければなりません</translation>
    </message>
    <message>
      <source>'allTypes' attribute is READ-ONLY</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Failed to export image</source>
      <comment>python error</comment>
      <translation>画像のエクスポートに失敗しました</translation>
    </message>
    <message>
      <source>&amp;Execute Script...</source>
      <translation>スクリプトを実行(&amp;E)...</translation>
    </message>
    <message>
      <source>Show &amp;Console</source>
      <translation>コンソールを表示(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;About Script...</source>
      <translation>スクリプトについて(&amp;A)...</translation>
    </message>
    <message>
      <source>&amp;Script</source>
      <translation>スクリプト(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Scribus Scripts</source>
      <translation>Scribusスクリプト(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Recent Scripts</source>
      <translation>最近開いたスクリプト(&amp;R)</translation>
    </message>
    <message>
      <source>About Script</source>
      <translation>スクリプトについて</translation>
    </message>
    <message>
      <source>Scripter</source>
      <translation>スクリプタ</translation>
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
      <translation>カスタム(オプション)設定:</translation>
    </message>
    <message>
      <source>Standard configuration: </source>
      <comment>short words plugin</comment>
      <translation>標準設定:</translation>
    </message>
    <message>
      <source>Short Words</source>
      <translation>ショートワード</translation>
    </message>
    <message>
      <source>Short Words processing. Wait please...</source>
      <comment>short words plugin</comment>
      <translation>ショートワードを処理しています。お待ちください...</translation>
    </message>
    <message>
      <source>Short Words processing. Done.</source>
      <comment>short words plugin</comment>
      <translation>ショートワードを処理しています。完了。</translation>
    </message>
    <message>
      <source>SVG Export</source>
      <translation>SVGエクスポート</translation>
    </message>
    <message>
      <source>SVG-Images (*.svg *.svgz);;All Files (*)</source>
      <translation>SVG画像 (*.svg *.svgz);;全てのファイル (*)</translation>
    </message>
    <message>
      <source>SVG-Images (*.svg);;All Files (*)</source>
      <translation>SVG画像 (*.svg);;全てのファイル (*)</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>警告</translation>
    </message>
    <message>
      <source>Do you really want to overwrite the File:
%1 ?</source>
      <translation>本当にファイルを上書きしますか? :%1</translation>
    </message>
    <message>
      <source>SVG Import</source>
      <translation>SVGインポート</translation>
    </message>
    <message>
      <source>Old .sla format support</source>
      <translation>旧.slaフォーマットのサポート</translation>
    </message>
    <message>
      <source>OpenOffice.org Draw Importer</source>
      <translation>OpenOffice.org Drawインポータ</translation>
    </message>
    <message>
      <source>OpenOffice.org Draw (*.sxd);;All Files (*)</source>
      <translation>OpenOffice.org Draw (*.sxd);;全てのファイル (*)</translation>
    </message>
    <message>
      <source>Comma Separated Value Files</source>
      <translation>カンマ区切りの値のファイル</translation>
    </message>
    <message>
      <source>CSV_data</source>
      <translation>CSV_data</translation>
    </message>
    <message>
      <source>CSV_header</source>
      <translation>CSV_header</translation>
    </message>
    <message>
      <source>HTML Files</source>
      <translation>HTMLファイル</translation>
    </message>
    <message>
      <source>html</source>
      <translation>html</translation>
    </message>
    <message>
      <source>
External Links
</source>
      <translation>外部リンク</translation>
    </message>
    <message>
      <source>OpenDocument Text Documents</source>
      <translation>OpenDocument テキストドキュメント</translation>
    </message>
    <message>
      <source>OpenOffice.org Writer Documents</source>
      <translation>OpenOffice.org Writerドキュメント</translation>
    </message>
    <message>
      <source>Text Filters</source>
      <translation>テキストフィルタ</translation>
    </message>
    <message>
      <source>Text Files</source>
      <translation>テキストファイル</translation>
    </message>
  </context>
  <context>
    <name>QTextEdit</name>
    <message>
      <source>Clear</source>
      <translation>クリア</translation>
    </message>
    <message>
      <source>Select All</source>
      <translation>全て選択</translation>
    </message>
    <message>
      <source>&amp;Undo</source>
      <translation>元に戻す(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Redo</source>
      <translation>やり直し(&amp;R)</translation>
    </message>
    <message>
      <source>Cu&amp;t</source>
      <translation>切り取り(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>コピー(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation>貼り付け(&amp;P)</translation>
    </message>
  </context>
  <context>
    <name>QTitleBar</name>
    <message>
      <source>System Menu</source>
      <translation>システムメニュー</translation>
    </message>
    <message>
      <source>Shade</source>
      <translation>シェード</translation>
    </message>
    <message>
      <source>Unshade</source>
      <translation>シェードを解除</translation>
    </message>
    <message>
      <source>Normalize</source>
      <translation>正規化</translation>
    </message>
    <message>
      <source>Minimize</source>
      <translation>最小化</translation>
    </message>
    <message>
      <source>Maximize</source>
      <translation>最大化</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>閉じる</translation>
    </message>
  </context>
  <context>
    <name>QWorkspace</name>
    <message>
      <source>&amp;Restore</source>
      <translation>修復(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Move</source>
      <translation>移動(&amp;M)</translation>
    </message>
    <message>
      <source>&amp;Size</source>
      <translation>サイズ(&amp;S)</translation>
    </message>
    <message>
      <source>Mi&amp;nimize</source>
      <translation>最小化(&amp;N)</translation>
    </message>
    <message>
      <source>Ma&amp;ximize</source>
      <translation>最大化(&amp;X)</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>閉じる(&amp;C)</translation>
    </message>
    <message>
      <source>Stay on &amp;Top</source>
      <translation>最前面に置く(&amp;T)</translation>
    </message>
    <message>
      <source>Minimize</source>
      <translation>最小化</translation>
    </message>
    <message>
      <source>Restore Down</source>
      <translation>元のサイズに戻す</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>閉じる</translation>
    </message>
    <message>
      <source>Sh&amp;ade</source>
      <translation>シェード(&amp;A)</translation>
    </message>
    <message>
      <source>%1 - [%2]</source>
      <translation>%1 - [%2]</translation>
    </message>
    <message>
      <source>&amp;Unshade</source>
      <translation>非シェード(&amp;U)</translation>
    </message>
  </context>
  <context>
    <name>ReformDoc</name>
    <message>
      <source>Document Setup</source>
      <translation>ドキュメントセットアップ</translation>
    </message>
    <message>
      <source>Page Size</source>
      <translation>ページサイズ</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>サイズ(&amp;S):</translation>
    </message>
    <message>
      <source>Custom</source>
      <translation>カスタム</translation>
    </message>
    <message>
      <source>Orie&amp;ntation:</source>
      <translation>方向(&amp;N):</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation>縦方向</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation>横方向</translation>
    </message>
    <message>
      <source>&amp;Width:</source>
      <translation>幅(&amp;W):</translation>
    </message>
    <message>
      <source>&amp;Height:</source>
      <translation>高さ(&amp;H):</translation>
    </message>
    <message>
      <source>&amp;Unit:</source>
      <translation>単位(&amp;U):</translation>
    </message>
    <message>
      <source>Apply size settings to all pages</source>
      <translation>サイズ設定を全てのページに適用</translation>
    </message>
    <message>
      <source>Margin Guides</source>
      <translation>マージンガイド</translation>
    </message>
    <message>
      <source>Autosave</source>
      <translation>自動保存</translation>
    </message>
    <message>
      <source>min</source>
      <translation>分</translation>
    </message>
    <message>
      <source>&amp;Interval:</source>
      <translation>間隔(&amp;I):</translation>
    </message>
    <message>
      <source>Document</source>
      <translation>ドキュメント</translation>
    </message>
    <message>
      <source>Document Information</source>
      <translation>ドキュメント情報</translation>
    </message>
    <message>
      <source>Guides</source>
      <translation>ガイド</translation>
    </message>
    <message>
      <source>Page Display</source>
      <translation>ページ表示</translation>
    </message>
    <message>
      <source>Color:</source>
      <translation>色:</translation>
    </message>
    <message>
      <source>Display &amp;Unprintable Area in Margin Color</source>
      <translation>印刷できない範囲をマージンの色で表示(&amp;U)</translation>
    </message>
    <message>
      <source>Alt+U</source>
      <translation>Alt+U</translation>
    </message>
    <message>
      <source>Show Pictures</source>
      <translation>画像を表示</translation>
    </message>
    <message>
      <source>Show Text Chains</source>
      <translation>テキストチェーンを表示</translation>
    </message>
    <message>
      <source>Show Text Control Characters</source>
      <translation>テキスト制御文字を表示</translation>
    </message>
    <message>
      <source>Show Frames</source>
      <translation>フレームを表示</translation>
    </message>
    <message>
      <source>Rulers relative to Page</source>
      <translation>ページに相対するルーラ</translation>
    </message>
    <message>
      <source>Minimum Scratch Space</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Top:</source>
      <translation>上(&amp;T):</translation>
    </message>
    <message>
      <source>&amp;Left:</source>
      <translation>左(&amp;L):</translation>
    </message>
    <message>
      <source>&amp;Bottom:</source>
      <translation>下(&amp;B):</translation>
    </message>
    <message>
      <source>&amp;Right:</source>
      <translation>右(&amp;R):</translation>
    </message>
    <message>
      <source>Gaps between Pages</source>
      <translation>ページ間のギャップ</translation>
    </message>
    <message>
      <source>Horizontal:</source>
      <translation>水平:</translation>
    </message>
    <message>
      <source>Vertical:</source>
      <translation>垂直:</translation>
    </message>
    <message>
      <source>Display</source>
      <translation>表示</translation>
    </message>
    <message>
      <source>Typography</source>
      <translation>タイポグラフィ</translation>
    </message>
    <message>
      <source>Tools</source>
      <translation>ツール</translation>
    </message>
    <message>
      <source>Hyphenator</source>
      <translation>ハイフン</translation>
    </message>
    <message>
      <source>Fonts</source>
      <translation>フォント</translation>
    </message>
    <message>
      <source>Preflight Verifier</source>
      <translation>プリフライト検証</translation>
    </message>
    <message>
      <source>PDF Export</source>
      <translation>PDF出力</translation>
    </message>
    <message>
      <source>Document Item Attributes</source>
      <translation>ドキュメントアイテム属性</translation>
    </message>
    <message>
      <source>Table of Contents and Indexes</source>
      <translation>目次とインデックス</translation>
    </message>
    <message>
      <source>Sections</source>
      <translation>セクション</translation>
    </message>
    <message>
      <source>Color Management</source>
      <translation>カラー管理</translation>
    </message>
    <message>
      <source>Enable or disable the display of linked text frames.</source>
      <translation>リンクされたテキストフレームの表示の有効/無効</translation>
    </message>
    <message>
      <source>Display non-printing characters such as paragraph markers in text frames</source>
      <translation>テキストフレーム中の段落記号のような非印字文字を表示する</translation>
    </message>
    <message>
      <source>Turns the display of frames on or off</source>
      <translation>フレームの表示をON/OFF</translation>
    </message>
    <message>
      <source>Turns the display of pictures on or off</source>
      <translation>画像の表示をON/OFF</translation>
    </message>
    <message>
      <source>Color for paper</source>
      <translation>紙の色</translation>
    </message>
    <message>
      <source>Mask the area outside the margins in the margin color</source>
      <translation>マージンの外側の領域をマージンの色でマスクする</translation>
    </message>
    <message>
      <source>Apply the page size changes to all existing pages in the document</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Adjusting Colors</source>
      <translation>色を調整中</translation>
    </message>
  </context>
  <context>
    <name>RunScriptDialog</name>
    <message>
      <source>Python Scripts (*.py);; All Files (*)</source>
      <translation>Pythonスクリプト (*.py);;全てのファイル (*)</translation>
    </message>
    <message>
      <source>Run as Extension Script</source>
      <comment>run script dialog</comment>
      <translation>拡張スクリプトとして実行</translation>
    </message>
  </context>
  <context>
    <name>SToolBAlign</name>
    <message>
      <source>Style Settings</source>
      <translation>スタイル設定</translation>
    </message>
    <message>
      <source>Style of current paragraph</source>
      <translation>現在の段落のスタイル</translation>
    </message>
  </context>
  <context>
    <name>SToolBColorF</name>
    <message>
      <source>Fill Color Settings</source>
      <translation>塗りつぶし色の設定</translation>
    </message>
    <message>
      <source>Color of text fill</source>
      <translation>テキストの塗りつぶし色</translation>
    </message>
    <message>
      <source>Saturation of color of text fill</source>
      <translation>テキストの塗りつぶし色の彩度</translation>
    </message>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
  </context>
  <context>
    <name>SToolBColorS</name>
    <message>
      <source>Stroke Color Settings</source>
      <translation>輪郭色の設定</translation>
    </message>
    <message>
      <source>Color of text stroke</source>
      <translation>テキストの輪郭色</translation>
    </message>
    <message>
      <source>Saturation of color of text stroke</source>
      <translation>テキストの輪郭色の彩度</translation>
    </message>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
  </context>
  <context>
    <name>SToolBFont</name>
    <message>
      <source>Font Settings</source>
      <translation>フォント設定</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Font of selected text</source>
      <translation>選択されたテキストのフォント</translation>
    </message>
    <message>
      <source>Font Size</source>
      <translation>フォントサイズ</translation>
    </message>
    <message>
      <source>Scaling width of characters</source>
      <translation>文字幅の倍率</translation>
    </message>
    <message>
      <source>Scaling height of characters</source>
      <translation>文字高さの倍率</translation>
    </message>
  </context>
  <context>
    <name>SToolBStyle</name>
    <message>
      <source>Character Settings</source>
      <translation>文字設定</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Manual Tracking</source>
      <translation>手動トラッキング</translation>
    </message>
  </context>
  <context>
    <name>SVGExportPlugin</name>
    <message>
      <source>Save Page as &amp;SVG...</source>
      <translation>SVGとしてページを保存(&amp;S)...</translation>
    </message>
    <message>
      <source>Exports SVG Files</source>
      <translation>SVGファイルをエクスポート</translation>
    </message>
    <message>
      <source>Exports the current page into an SVG file.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>SVGImportPlugin</name>
    <message>
      <source>Import &amp;SVG...</source>
      <translation>SVGをインポート(&amp;S)...</translation>
    </message>
    <message>
      <source>Imports SVG Files</source>
      <translation>SVGファイルをインポート</translation>
    </message>
    <message>
      <source>Imports most SVG files into the current document,
converting their vector data into Scribus objects.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scalable Vector Graphics</source>
      <translation>スケーラブルベクトルグラフィックス</translation>
    </message>
    <message>
      <source>SVG file contains some unsupported features</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>SWDialog</name>
    <message>
      <source>Short Words</source>
      <comment>short words plugin</comment>
      <translation>ショートワード</translation>
    </message>
    <message>
      <source>Apply unbreakable space on:</source>
      <comment>short words plugin</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Selected frames</source>
      <comment>short words plugin</comment>
      <translation>選択されたフレーム(&amp;S)</translation>
    </message>
    <message>
      <source>Active &amp;page</source>
      <comment>short words plugin</comment>
      <translation>アクティブなページ(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;All items</source>
      <comment>short words plugin</comment>
      <translation>全てのアイテム(&amp;A)</translation>
    </message>
    <message>
      <source>Only selected frames processed.</source>
      <comment>short words plugin</comment>
      <translation>選択されたフレームのみ処理しました</translation>
    </message>
    <message>
      <source>Only actual page processed.</source>
      <comment>short words plugin</comment>
      <translation>実際のページのみ処理しました</translation>
    </message>
    <message>
      <source>All items in document processed.</source>
      <comment>short words plugin</comment>
      <translation>ドキュメント中の全てのアイテムを処理しました</translation>
    </message>
  </context>
  <context>
    <name>SWPrefsGui</name>
    <message>
      <source>User settings</source>
      <translation>ユーザ設定</translation>
    </message>
    <message>
      <source>System wide configuration</source>
      <translation>システム全般の設定</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation>保存(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Reset</source>
      <translation>リセット(&amp;R)</translation>
    </message>
    <message>
      <source>Save user configuration</source>
      <translation>ユーザ設定を保存</translation>
    </message>
    <message>
      <source>Reload system wide configuration and remove user defined one</source>
      <translation>システム全般の設定を再読み込みしてユーザ定義の設定を削除する</translation>
    </message>
    <message>
      <source>Edit custom configuration. If you save it, it will be used over system wide configuration</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Short Words</source>
      <translation>ショートワード</translation>
    </message>
    <message>
      <source>User configuration exists elready. Do you really want to overwrite it?</source>
      <translation>ユーザ設定はすでに存在します。本当に上書きしますか?</translation>
    </message>
    <message>
      <source>Cannot write file %1.</source>
      <translation>ファイル %1 の書き込みができません</translation>
    </message>
    <message>
      <source>User settings saved</source>
      <translation>ユーザ設定を保存しました</translation>
    </message>
    <message>
      <source>System wide configuration reloaded</source>
      <translation>システム全般の設定を再読み込みしました</translation>
    </message>
    <message>
      <source>Cannot open file %1</source>
      <translation>ファイル %1 が開けません</translation>
    </message>
  </context>
  <context>
    <name>SaveAsTemplatePlugin</name>
    <message>
      <source>Save as &amp;Template...</source>
      <translation>テンプレートとして保存(&amp;T)...</translation>
    </message>
    <message>
      <source>Save a document as a template</source>
      <translation>ドキュメントをテンプレートとして保存</translation>
    </message>
    <message>
      <source>Save a document as a template. Good way to ease the initial work for documents with a constant look</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>ScPlugin</name>
    <message>
      <source>Load/Save/Import/Export</source>
      <translation>読み込み/保存/インポート/エクスポート</translation>
    </message>
    <message>
      <source>Persistent</source>
      <comment>plugin manager plugin type</comment>
      <translation>保護</translation>
    </message>
    <message>
      <source>Action</source>
      <comment>plugin manager plugin type</comment>
      <translation>アクション</translation>
    </message>
    <message>
      <source>Unknown</source>
      <translation>不明</translation>
    </message>
  </context>
  <context>
    <name>ScWinPrint</name>
    <message>
      <source>Printing...</source>
      <translation>印刷中...</translation>
    </message>
  </context>
  <context>
    <name>ScriXmlDoc</name>
    <message>
      <source>Copy #%1 of </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Background</source>
      <translation>背景</translation>
    </message>
  </context>
  <context>
    <name>ScribusColorList</name>
    <message>
      <source>Document Colors</source>
      <translation>ドキュメント色</translation>
    </message>
  </context>
  <context>
    <name>ScribusDoc</name>
    <message>
      <source>Document</source>
      <translation>ドキュメント</translation>
    </message>
    <message>
      <source>Background</source>
      <translation>背景</translation>
    </message>
    <message>
      <source>New Layer</source>
      <translation>新規レイヤー</translation>
    </message>
    <message>
      <source>Normal</source>
      <translation>標準</translation>
    </message>
  </context>
  <context>
    <name>ScribusMainWindow</name>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
    <message>
      <source>Initializing Plugins</source>
      <translation>プラグインを初期化中</translation>
    </message>
    <message>
      <source>Initializing Keyboard Shortcuts</source>
      <translation>キーボードショートカットを初期化中</translation>
    </message>
    <message>
      <source>Reading Preferences</source>
      <translation>設定を読み込み中</translation>
    </message>
    <message>
      <source>Initializing Story Editor</source>
      <translation>ストーリエディタを初期化中</translation>
    </message>
    <message>
      <source>Reading ICC Profiles</source>
      <translation>ICCプロファイルを読み込み中</translation>
    </message>
    <message>
      <source>Initializing Hyphenator</source>
      <translation>ハイフンを初期化中</translation>
    </message>
    <message>
      <source>Reading Scrapbook</source>
      <translation>スクラップブックを読み込み中</translation>
    </message>
    <message>
      <source>Setting up Shortcuts</source>
      <translation>ショートカットを設定中</translation>
    </message>
    <message>
      <source>File</source>
      <translation>ファイル</translation>
    </message>
    <message>
      <source>Edit</source>
      <translation>編集</translation>
    </message>
    <message>
      <source>Searching for Fonts</source>
      <translation>フォントを検索中</translation>
    </message>
    <message>
      <source>There are no fonts found on your system.</source>
      <translation>システム上にフォントがありません</translation>
    </message>
    <message>
      <source>Exiting now.</source>
      <translation>終了しています</translation>
    </message>
    <message>
      <source>Fatal Error</source>
      <translation>致命的なエラー</translation>
    </message>
    <message>
      <source>Font System Initialized</source>
      <translation>フォントシステムを初期化</translation>
    </message>
    <message>
      <source>&amp;File</source>
      <translation>ファイル(&amp;F)</translation>
    </message>
    <message>
      <source>Open &amp;Recent</source>
      <translation>最近のファイルを開く(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation>インポート(&amp;I)</translation>
    </message>
    <message>
      <source>&amp;Export</source>
      <translation>エクスポート(&amp;E)</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation>編集(&amp;E)</translation>
    </message>
    <message>
      <source>St&amp;yle</source>
      <translation>スタイル(&amp;Y)</translation>
    </message>
    <message>
      <source>&amp;Color</source>
      <translation>色(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Size</source>
      <translation>サイズ(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Shade</source>
      <translation>色の濃さ(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Font</source>
      <translation>フォント(&amp;F)</translation>
    </message>
    <message>
      <source>&amp;Effects</source>
      <translation>エフェクト(&amp;E)</translation>
    </message>
    <message>
      <source>&amp;Item</source>
      <translation>アイテム(&amp;I)</translation>
    </message>
    <message>
      <source>Preview Settings</source>
      <translation>プレビュー設定</translation>
    </message>
    <message>
      <source>Level</source>
      <translation>レベル</translation>
    </message>
    <message>
      <source>Send to La&amp;yer</source>
      <translation>レイヤーに送る(&amp;Y)</translation>
    </message>
    <message>
      <source>&amp;PDF Options</source>
      <translation>PDFオプション(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;Shape</source>
      <translation>形状(&amp;S)</translation>
    </message>
    <message>
      <source>C&amp;onvert To</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>I&amp;nsert</source>
      <translation>挿入(&amp;N)</translation>
    </message>
    <message>
      <source>Character</source>
      <translation>文字</translation>
    </message>
    <message>
      <source>Quote</source>
      <translation>引用符</translation>
    </message>
    <message>
      <source>Space</source>
      <translation>空白</translation>
    </message>
    <message>
      <source>&amp;Page</source>
      <translation>ページ(&amp;P)</translation>
    </message>
    <message>
      <source>&amp;View</source>
      <translation>ビュー(&amp;V)</translation>
    </message>
    <message>
      <source>E&amp;xtras</source>
      <translation>拡張(&amp;X)</translation>
    </message>
    <message>
      <source>&amp;Windows</source>
      <translation>ウィンドウ(&amp;W)</translation>
    </message>
    <message>
      <source>&amp;Help</source>
      <translation>ヘルプ(&amp;H)</translation>
    </message>
    <message>
      <source>&amp;Alignment</source>
      <translation>配置(&amp;A)</translation>
    </message>
    <message>
      <source>Ready</source>
      <translation>準備完了</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>開く</translation>
    </message>
    <message>
      <source>Importing Pages...</source>
      <translation>ページをインポート中...</translation>
    </message>
    <message>
      <source>Import Page(s)</source>
      <translation>ページをインポート</translation>
    </message>
    <message>
      <source>Import done</source>
      <translation>インポート完了</translation>
    </message>
    <message>
      <source>Found nothing to import</source>
      <translation>インポートするものが見つかりません</translation>
    </message>
    <message>
      <source>File %1 is not in an acceptable format</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Loading...</source>
      <translation>読み込み中...</translation>
    </message>
    <message>
      <source>PostScript</source>
      <translation>PostScript</translation>
    </message>
    <message>
      <source>Some ICC profiles used by this document are not installed:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source> was replaced by: </source>
      <translation> は以下で置換されます: </translation>
    </message>
    <message>
      <source>(converted)</source>
      <translation>（変換済み）</translation>
    </message>
    <message>
      <source>All Supported Formats</source>
      <translation>サポートされている全てのフォーマット</translation>
    </message>
    <message>
      <source>All Files (*)</source>
      <translation>全てのファイル (*)</translation>
    </message>
    <message>
      <source>Cannot write the file: 
%1</source>
      <translation>ファイルを書き込めません: 
%1</translation>
    </message>
    <message>
      <source>Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</source>
      <translation>ドキュメント (*.sla *.sla.gz *.scd *scd.gz);;全てのファイル (*)</translation>
    </message>
    <message>
      <source>Documents (*.sla *.scd);;All Files (*)</source>
      <translation>ドキュメント (*.sla *.scd);;全てのファイル (*)</translation>
    </message>
    <message>
      <source>Save As</source>
      <translation>名前を付けて保存</translation>
    </message>
    <message>
      <source>Saving...</source>
      <translation>保存中...</translation>
    </message>
    <message>
      <source>Scribus has detected some errors. Consider using the Preflight Verifier to correct them</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Ignore</source>
      <translation>無視(&amp;I)</translation>
    </message>
    <message>
      <source>&amp;Abort</source>
      <translation>中止(&amp;A)</translation>
    </message>
    <message>
      <source>Printing...</source>
      <translation>印刷中...</translation>
    </message>
    <message>
      <source>Document</source>
      <translation>ドキュメント</translation>
    </message>
    <message>
      <source>Printing failed!</source>
      <translation>印刷に失敗しました!</translation>
    </message>
    <message>
      <source>Cannot Cut In-Use Item</source>
      <translation>使用中のアイテムは切り取りできません</translation>
    </message>
    <message>
      <source>The item %1 is currently being edited by Story Editor. The cut operation will be cancelled</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>About Qt</source>
      <translation>Qtについて</translation>
    </message>
    <message>
      <source>Scribus Manual</source>
      <translation>Scribusマニュアル</translation>
    </message>
    <message>
      <source>Save as</source>
      <translation>名前を付けて保存</translation>
    </message>
    <message>
      <source>Text Files (*.txt);;All Files(*)</source>
      <translation>テキストファイル (*.txt);;全てのファイル(*)</translation>
    </message>
    <message>
      <source>Normal</source>
      <translation>標準</translation>
    </message>
    <message>
      <source>Name:</source>
      <translation>名前:</translation>
    </message>
    <message>
      <source>Convert Page to Master Page</source>
      <translation>ページをマスターページに変換</translation>
    </message>
    <message>
      <source>New Master Page</source>
      <translation>新規マスターページ</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>サイズ(&amp;S):</translation>
    </message>
    <message>
      <source>Size</source>
      <translation>サイズ</translation>
    </message>
    <message>
      <source>&amp;Shade:</source>
      <translation>色の濃さ(&amp;S):</translation>
    </message>
    <message>
      <source>Shade</source>
      <translation>色の濃さ</translation>
    </message>
    <message>
      <source>No Style</source>
      <translation>スタイルなし</translation>
    </message>
    <message>
      <source>The following programs are missing:</source>
      <translation>以下のプログラムが見つかりません:</translation>
    </message>
    <message>
      <source>Ghostscript : You cannot use EPS images or Print Preview</source>
      <translation>Ghostscript : EPS画像や印刷プレビューは使用できません</translation>
    </message>
    <message>
      <source>Ghostscript : You cannot use EPS images or PostScript Print Preview</source>
      <translation>Ghostscript : EPS画像やPostScript印刷プレビューは使用できません</translation>
    </message>
    <message>
      <source>Ghostscript is missing : Postscript Print Preview is not available</source>
      <translation>Ghostscriptが見つかりません : Postscript印刷プレビューは利用できません</translation>
    </message>
    <message>
      <source>All</source>
      <translation>全て</translation>
    </message>
    <message>
      <source>Scribus detected some errors.
Consider using the Preflight Verifier  to correct them.</source>
      <translation>エラーを検知しました。 
これらを訂正するためにプリフライト検証を使用することを考えてください。</translation>
    </message>
    <message>
      <source>EPS Files (*.eps);;All Files (*)</source>
      <translation>EPSファイル (*.eps);;全てのファイル (*)</translation>
    </message>
    <message>
      <source>Detected some errors.
Consider using the Preflight Verifier to correct them</source>
      <translation>エラーを検知しました。 
これらを訂正するためにプリフライト検証を使用することを考えてください。</translation>
    </message>
    <message>
      <source>-Page%1</source>
      <translation> ページ%1</translation>
    </message>
    <message>
      <source>Some objects are locked.</source>
      <translation>オブジェクトがロックされています</translation>
    </message>
    <message>
      <source>&amp;Lock All</source>
      <translation>全てロック(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Unlock All</source>
      <translation>全てロック解除(&amp;U)</translation>
    </message>
    <message>
      <source>Information</source>
      <translation>情報</translation>
    </message>
    <message>
      <source>The program %1 is already running!</source>
      <translation>プログラム %1 はすでに実行しています!</translation>
    </message>
    <message>
      <source>The program %1 is missing!</source>
      <translation>プログラム %1 が見つかりません!</translation>
    </message>
    <message>
      <source>The selected color does not exist in the document's color set. Please enter a name for this new color.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color Not Found</source>
      <translation>色が見つかりません</translation>
    </message>
    <message>
      <source>The name you have selected already exists. Please enter a different name for this new color.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Level</source>
      <translation>レベル(&amp;L)</translation>
    </message>
    <message>
      <source>Send to Layer</source>
      <translation>レイヤーに送る</translation>
    </message>
    <message>
      <source>Previe&amp;w Settings</source>
      <translation>プレビュー設定(&amp;W)</translation>
    </message>
    <message>
      <source>&amp;Tools</source>
      <translation>ツール(&amp;T)</translation>
    </message>
    <message>
      <source>X-Pos:</source>
      <translation>位置X:</translation>
    </message>
    <message>
      <source>Y-Pos:</source>
      <translation>位置Y:</translation>
    </message>
  </context>
  <context>
    <name>ScribusQApp</name>
    <message>
      <source>Invalid argument: </source>
      <translation>無効な引数: </translation>
    </message>
    <message>
      <source>File %1 does not exist, aborting.</source>
      <translation>ファイル %1 が存在しないので中断します</translation>
    </message>
    <message>
      <source>Usage: scribus [option ... ] [file]</source>
      <translation>使い方: scribus [オプション ... ] [ファイル]</translation>
    </message>
    <message>
      <source>Options:</source>
      <translation>オプション:</translation>
    </message>
    <message>
      <source>Print help (this message) and exit</source>
      <translation>ヘルプを表示(このメッセージ)して終了します</translation>
    </message>
    <message>
      <source>Uses xx as shortcut for a language, eg `en' or `de'</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>List the currently installed interface languages</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Show information on the console when fonts are being loaded</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Do not show the splashscreen on startup</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Output version information and exit</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Use right to left dialog button ordering (eg. Cancel/No/Yes instead of Yes/No/Cancel)</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>filename</source>
      <translation>ファイル名</translation>
    </message>
    <message>
      <source>Use filename as path for user given preferences</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Installed interface languages for Scribus are as follows:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>To override the default language choice:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>scribus -l xx or scribus --lang xx, where xx is the language of choice.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scribus Version</source>
      <translation>Scribusバージョン</translation>
    </message>
    <message>
      <source>Scribus, Open Source Desktop Publishing</source>
      <translation>Scribus, オープンソースデスクトップパブリッシング</translation>
    </message>
    <message>
      <source>Homepage</source>
      <translation>ホームページ</translation>
    </message>
    <message>
      <source>Documentation</source>
      <translation>ドキュメント</translation>
    </message>
    <message>
      <source>Wiki</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Issues</source>
      <translation type="unfinished" />
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
      <translation>レイヤー</translation>
    </message>
    <message>
      <source>Copy Here</source>
      <translation>ここにコピー</translation>
    </message>
    <message>
      <source>Move Here</source>
      <translation>ここに移動</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>キャンセル</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation>貼り付け(&amp;P)</translation>
    </message>
    <message>
      <source>Picture</source>
      <translation>画像</translation>
    </message>
    <message>
      <source>File: </source>
      <translation>ファイル:</translation>
    </message>
    <message>
      <source>Original PPI: </source>
      <translation>オリジナルPPI: </translation>
    </message>
    <message>
      <source>Actual PPI: </source>
      <translation>実PPI: </translation>
    </message>
    <message>
      <source>Colorspace: </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Unknown</source>
      <translation>不明</translation>
    </message>
    <message>
      <source>RGB</source>
      <translation>RGB</translation>
    </message>
    <message>
      <source>CMYK</source>
      <translation>CMYK</translation>
    </message>
    <message>
      <source>Grayscale</source>
      <translation>グレースケール</translation>
    </message>
    <message>
      <source>Linked Text</source>
      <translation>リンクされたテキスト</translation>
    </message>
    <message>
      <source>Text Frame</source>
      <translation>テキストフレーム</translation>
    </message>
    <message>
      <source>Text on a Path</source>
      <translation>パス上のテキスト</translation>
    </message>
    <message>
      <source>Paragraphs: </source>
      <translation>段落: </translation>
    </message>
    <message>
      <source>Words: </source>
      <translation>ワード: </translation>
    </message>
    <message>
      <source>Chars: </source>
      <translation>文字: </translation>
    </message>
    <message>
      <source>Print: </source>
      <translation>印刷: </translation>
    </message>
    <message>
      <source>Enabled</source>
      <translation>有効</translation>
    </message>
    <message>
      <source>Disabled</source>
      <translation>無効</translation>
    </message>
    <message>
      <source>In&amp;fo</source>
      <translation>情報(&amp;F)</translation>
    </message>
    <message>
      <source>Preview Settings</source>
      <translation>プレビューの設定</translation>
    </message>
    <message>
      <source>&amp;PDF Options</source>
      <translation>PDFオプション(&amp;P)</translation>
    </message>
    <message>
      <source>Send to La&amp;yer</source>
      <translation>レイヤーに送る(&amp;Y)</translation>
    </message>
    <message>
      <source>Le&amp;vel</source>
      <translation>レベル(&amp;V)</translation>
    </message>
    <message>
      <source>Conve&amp;rt to</source>
      <translation>変換(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>削除(&amp;D)</translation>
    </message>
    <message>
      <source>Linking Text Frames</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>You are trying to link to a filled frame, or a frame to itself.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Do you really want to clear all your text?</source>
      <translation>本当に全てのテキストを消去しますか?</translation>
    </message>
    <message>
      <source>Cannot Delete In-Use Item</source>
      <translation>使用中のアイテムは削除できません</translation>
    </message>
    <message>
      <source>The item %1 is currently being edited by Story Editor. The delete operation will be cancelled</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Page %1 to %2</source>
      <translation>ページ %1 から %2</translation>
    </message>
    <message>
      <source>Cannot Convert In-Use Item</source>
      <translation>使用中のアイテムは変換できません</translation>
    </message>
    <message>
      <source>The item %1 is currently being edited by Story Editor. The convert to outlines operation for this item will be skipped</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>ScribusWin</name>
    <message>
      <source>Document:</source>
      <translation>ドキュメント:</translation>
    </message>
    <message>
      <source>has been changed since the last save.</source>
      <translation>最後に保存した時点から変更されています</translation>
    </message>
    <message>
      <source>&amp;Discard</source>
      <translation>無視(&amp;D)</translation>
    </message>
  </context>
  <context>
    <name>ScriptPlugin</name>
    <message>
      <source>Embedded Python scripting support.</source>
      <translation>埋め込みPythonスクリプトサポート</translation>
    </message>
    <message>
      <source>Scripter</source>
      <translation>スクリプタ</translation>
    </message>
  </context>
  <context>
    <name>ScripterCore</name>
    <message>
      <source>Script error</source>
      <translation>スクリプトエラー</translation>
    </message>
    <message>
      <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;>bugs.scribus.net&lt;/a> please.</source>
      <translation>もしオフィシャルのスクリプトを実行しているのであれば、 
&lt;a href=&quot;http://bugs.scribus.net&quot;>bugs.scribus.net&lt;/a> 
に報告してください。</translation>
    </message>
    <message>
      <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
      <translation>このメッセージはクリップボードにもあります。Ctrl+Vでバグトラックにペーストしてください。</translation>
    </message>
    <message>
      <source>There was an internal error while trying the command you entered. Details were printed to stderr. </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Examine Script</source>
      <translation>スクリプトを試す</translation>
    </message>
    <message>
      <source>Python Scripts (*.py);;All Files (*)</source>
      <translation>Pythonスクリプト (*.py);;全てのファイル (*)</translation>
    </message>
    <message>
      <source>Setting up the Python plugin failed. Error details were printed to stderr. </source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>ScripterPrefsGui</name>
    <message>
      <source>Extensions</source>
      <translation>拡張</translation>
    </message>
    <message>
      <source>Console</source>
      <translation>コンソール</translation>
    </message>
    <message>
      <source>Scripter Preferences</source>
      <translation>スクリプタ設定</translation>
    </message>
    <message>
      <source>Enable Extension Scripts</source>
      <translation>拡張スクリプトを有効に</translation>
    </message>
    <message>
      <source>Startup Script:</source>
      <translation>起動スクリプト:</translation>
    </message>
    <message>
      <source>Errors:</source>
      <comment>syntax highlighting</comment>
      <translation>エラー:</translation>
    </message>
    <message>
      <source>Comments:</source>
      <comment>syntax highlighting</comment>
      <translation>コメント:</translation>
    </message>
    <message>
      <source>Keywords:</source>
      <comment>syntax highlighting</comment>
      <translation>キーワード:</translation>
    </message>
    <message>
      <source>Signs:</source>
      <comment>syntax highlighting</comment>
      <translation>記号:</translation>
    </message>
    <message>
      <source>Numbers:</source>
      <comment>syntax highlighting</comment>
      <translation>数字:</translation>
    </message>
    <message>
      <source>Strings:</source>
      <comment>syntax highlighting</comment>
      <translation>文字列:</translation>
    </message>
    <message>
      <source>Base Texts:</source>
      <comment>syntax highlighting</comment>
      <translation>ベーステキスト:</translation>
    </message>
    <message>
      <source>Select Color</source>
      <translation>色を選択</translation>
    </message>
  </context>
  <context>
    <name>SeList</name>
    <message>
      <source>Show Page Previews</source>
      <translation>ページプレビューを表示</translation>
    </message>
  </context>
  <context>
    <name>SearchReplace</name>
    <message>
      <source>Search/Replace</source>
      <translation>検索/置換</translation>
    </message>
    <message>
      <source>Search for:</source>
      <translation>以下で検索:</translation>
    </message>
    <message>
      <source>Text</source>
      <translation>テキスト</translation>
    </message>
    <message>
      <source>Paragraph Style</source>
      <translation>段落スタイル</translation>
    </message>
    <message>
      <source>Font</source>
      <translation>フォント</translation>
    </message>
    <message>
      <source>Font Size</source>
      <translation>フォントサイズ</translation>
    </message>
    <message>
      <source>Font Effects</source>
      <translation>フォントエフェクト</translation>
    </message>
    <message>
      <source>Fill Color</source>
      <translation>塗りつぶし色</translation>
    </message>
    <message>
      <source>Fill Shade</source>
      <translation>塗りつぶし色の濃さ</translation>
    </message>
    <message>
      <source>Stroke Color</source>
      <translation>輪郭色</translation>
    </message>
    <message>
      <source>Stroke Shade</source>
      <translation>輪郭色の濃さ</translation>
    </message>
    <message>
      <source>Left</source>
      <translation>左</translation>
    </message>
    <message>
      <source>Center</source>
      <translation>中央</translation>
    </message>
    <message>
      <source>Right</source>
      <translation>右</translation>
    </message>
    <message>
      <source>Block</source>
      <translation>ブロック</translation>
    </message>
    <message>
      <source>Forced</source>
      <translation>強制</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
    <message>
      <source>Replace with:</source>
      <translation>次で置換:</translation>
    </message>
    <message>
      <source>&amp;Whole Word</source>
      <translation>ワード全体(&amp;W)</translation>
    </message>
    <message>
      <source>&amp;Ignore Case</source>
      <translation>大文字小文字を区別しない(&amp;I)</translation>
    </message>
    <message>
      <source>&amp;Search</source>
      <translation>検索(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;Replace</source>
      <translation>置換(&amp;R)</translation>
    </message>
    <message>
      <source>Replace &amp;All</source>
      <translation>全て置換(&amp;A)</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>クリア(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>閉じる(&amp;C)</translation>
    </message>
    <message>
      <source>Search finished</source>
      <translation>検索終了</translation>
    </message>
    <message>
      <source>Search finished, found %1 matches</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>SelectFields</name>
    <message>
      <source>Select Fields</source>
      <translation>フィールドを選択</translation>
    </message>
    <message>
      <source>Available Fields</source>
      <translation>利用可能なフィールド</translation>
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
      <translation>選択されたフィールド</translation>
    </message>
  </context>
  <context>
    <name>ShadeButton</name>
    <message>
      <source>Other...</source>
      <translation>その他...</translation>
    </message>
    <message>
      <source>&amp;Shade:</source>
      <translation>色の濃さ(&amp;S):</translation>
    </message>
    <message>
      <source>Shade</source>
      <translation>色の濃さ</translation>
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
      <translation>X オフセット</translation>
    </message>
    <message>
      <source>Y-Offset</source>
      <translation>Y オフセット</translation>
    </message>
  </context>
  <context>
    <name>ShortWordsPlugin</name>
    <message>
      <source>Short &amp;Words...</source>
      <comment>short words plugin</comment>
      <translation>ショートワード(&amp;W)...</translation>
    </message>
    <message>
      <source>Short Words</source>
      <translation>ショートワード</translation>
    </message>
  </context>
  <context>
    <name>SideBar</name>
    <message>
      <source>No Style</source>
      <translation>スタイルなし</translation>
    </message>
    <message>
      <source>Edit Styles...</source>
      <translation>スタイルを編集...</translation>
    </message>
  </context>
  <context>
    <name>Spalette</name>
    <message>
      <source>No Style</source>
      <translation>スタイルなし</translation>
    </message>
  </context>
  <context>
    <name>StilFormate</name>
    <message>
      <source>Edit Styles</source>
      <translation>スタイルを編集</translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation>インポート(&amp;I)</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>新規(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation>編集(&amp;E)</translation>
    </message>
    <message>
      <source>D&amp;uplicate</source>
      <translation>複製(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>削除(&amp;D)</translation>
    </message>
    <message>
      <source>Copy of %1</source>
      <translation>%1のコピー</translation>
    </message>
    <message>
      <source>New Style</source>
      <translation>新規スタイル</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>開く</translation>
    </message>
    <message>
      <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
      <translation>ドキュメント (*.sla *.sla.gz *.scd *.scd.gz);;全てのファイル (*)</translation>
    </message>
    <message>
      <source>Documents (*.sla *.scd);;All Files (*)</source>
      <translation>ドキュメント (*.sla *.scd);;全てのファイル (*)</translation>
    </message>
  </context>
  <context>
    <name>StoryEditor</name>
    <message>
      <source>&amp;New</source>
      <translation>新規(&amp;N)</translation>
    </message>
    <message>
      <source>&amp;Reload Text from Frame</source>
      <translation>フレームからテキストを再読み込み(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Save to File...</source>
      <translation>ファイルに保存(&amp;S)...</translation>
    </message>
    <message>
      <source>&amp;Load from File...</source>
      <translation>ファイルから読み込み(&amp;L)...</translation>
    </message>
    <message>
      <source>Save &amp;Document</source>
      <translation>ドキュメントを保存(&amp;D)</translation>
    </message>
    <message>
      <source>&amp;Update Text Frame and Exit</source>
      <translation>テキストフレームを更新して終了(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Exit Without Updating Text Frame</source>
      <translation>テキストフレームを更新せずに終了(&amp;E)</translation>
    </message>
    <message>
      <source>Select &amp;All</source>
      <translation>全て選択(&amp;A)</translation>
    </message>
    <message>
      <source>Cu&amp;t</source>
      <translation>切り取り(&amp;T)</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation>コピー(&amp;C)</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation>貼り付け(&amp;P)</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>クリア(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Search/Replace...</source>
      <translation>検索/置換(&amp;S)...</translation>
    </message>
    <message>
      <source>&amp;Insert Glyph...</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Edit Styles...</source>
      <translation>スタイルを編集(&amp;E)...</translation>
    </message>
    <message>
      <source>&amp;Fonts Preview...</source>
      <translation>フォントプレビュー(&amp;F)...</translation>
    </message>
    <message>
      <source>&amp;Update Text Frame</source>
      <translation>テキストフレームを更新(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Background...</source>
      <translation>背景(&amp;B)...</translation>
    </message>
    <message>
      <source>&amp;Display Font...</source>
      <translation>フォントを表示(&amp;D)...</translation>
    </message>
    <message>
      <source>&amp;Smart text selection</source>
      <translation>スマートテキスト選択(&amp;S)</translation>
    </message>
    <message>
      <source>&amp;File</source>
      <translation>ファイル(&amp;F)</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation>編集(&amp;E)</translation>
    </message>
    <message>
      <source>&amp;Settings</source>
      <translation>設定(&amp;S)</translation>
    </message>
    <message>
      <source>Story Editor</source>
      <translation>ストーリエディタ</translation>
    </message>
    <message>
      <source>File</source>
      <translation>ファイル</translation>
    </message>
    <message>
      <source>Clear All Text</source>
      <translation>全てのテキストをクリア</translation>
    </message>
    <message>
      <source>Load Text from File</source>
      <translation>ファイルからテキストを読み込む</translation>
    </message>
    <message>
      <source>Save Text to File</source>
      <translation>テキストをファイルに保存</translation>
    </message>
    <message>
      <source>Update Text Frame and Exit</source>
      <translation>テキストフレームを更新して終了</translation>
    </message>
    <message>
      <source>Exit Without Updating Text Frame</source>
      <translation>テキストフレームを更新せずに終了</translation>
    </message>
    <message>
      <source>Reload Text from Frame</source>
      <translation>フレームからテキストを再読み込み</translation>
    </message>
    <message>
      <source>Update Text Frame</source>
      <translation>テキストフレームを更新</translation>
    </message>
    <message>
      <source>Search/Replace</source>
      <translation>検索/置換</translation>
    </message>
    <message>
      <source>Current Paragraph:</source>
      <translation>現在の段落:</translation>
    </message>
    <message>
      <source>Words: </source>
      <translation>ワード数: </translation>
    </message>
    <message>
      <source>Chars: </source>
      <translation>文字数: </translation>
    </message>
    <message>
      <source>Totals:</source>
      <translation>合計:</translation>
    </message>
    <message>
      <source>Paragraphs: </source>
      <translation>段落数: </translation>
    </message>
    <message>
      <source>Story Editor - %1</source>
      <translation>ストーリエディタ - %1</translation>
    </message>
    <message>
      <source>Do you want to save your changes?</source>
      <translation>変更点を保存しますか?</translation>
    </message>
    <message>
      <source>Do you really want to lose all your changes?</source>
      <translation>本当に全ての変更点を破棄してもよろしいですか?</translation>
    </message>
    <message>
      <source>Do you really want to clear all your text?</source>
      <translation>本当に全てのテキストを消去しますか?</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>開く</translation>
    </message>
    <message>
      <source>Text Files (*.txt);;All Files(*)</source>
      <translation>テキストファイル (*.txt);;全てのファイル(*)</translation>
    </message>
    <message>
      <source>Save as</source>
      <translation>名前を付けて保存</translation>
    </message>
  </context>
  <context>
    <name>StrikeValues</name>
    <message>
      <source>Auto</source>
      <translation>自動</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Displacement</source>
      <translation>位置ずれ</translation>
    </message>
    <message>
      <source>Linewidth</source>
      <translation>線幅</translation>
    </message>
  </context>
  <context>
    <name>StyleSelect</name>
    <message>
      <source>Underline</source>
      <translation>下線</translation>
    </message>
    <message>
      <source>Underline Words Only</source>
      <translation>下線のワードのみ</translation>
    </message>
    <message>
      <source>All Caps</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Small Caps</source>
      <translation>スモールキャピタル</translation>
    </message>
    <message>
      <source>Subscript</source>
      <translation>下付き文字</translation>
    </message>
    <message>
      <source>Superscript</source>
      <translation>上付き文字</translation>
    </message>
    <message>
      <source>Strike Out</source>
      <translation>取り消し線</translation>
    </message>
    <message>
      <source>Outline</source>
      <translation>アウトライン</translation>
    </message>
    <message>
      <source>Shadow</source>
      <translation>影</translation>
    </message>
  </context>
  <context>
    <name>SxwDialog</name>
    <message>
      <source>OpenOffice.org Writer Importer Options</source>
      <translation>OpenOffice.org Writerインポータオプション</translation>
    </message>
    <message>
      <source>Overwrite Paragraph Styles</source>
      <translation>段落スタイルを上書き</translation>
    </message>
    <message>
      <source>Enabling this will overwrite existing styles in the current Scribus document</source>
      <translation>これを有効にすると、現在のScribusドキュメント中の既存のスタイルを上書きします</translation>
    </message>
    <message>
      <source>Merge Paragraph Styles</source>
      <translation>段落スタイルをマージ</translation>
    </message>
    <message>
      <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document's styles are named differently.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Use document name as a prefix for paragraph styles</source>
      <translation>ドキュメント名を段落スタイルのプレフィックスとして使用する</translation>
    </message>
    <message>
      <source>Prepend the document name to the paragraph style name in Scribus.</source>
      <translation>Scribusの段落スタイル名の先頭にドキュメント名を追加します。</translation>
    </message>
    <message>
      <source>Do not ask again</source>
      <translation>次回は尋ねない</translation>
    </message>
    <message>
      <source>Make these settings the default and do not prompt again when importing an OpenOffice.org 1.x document.</source>
      <translation>これらの設定をデフォルトにし、OpenOffice.org 1.x のドキュメントをインポートする際に再度尋ねません</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>キャンセル</translation>
    </message>
  </context>
  <context>
    <name>TOCIndexPrefs</name>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
    <message>
      <source>At the beginning</source>
      <translation>始めに</translation>
    </message>
    <message>
      <source>At the end</source>
      <translation>後ろに</translation>
    </message>
    <message>
      <source>Not Shown</source>
      <translation>表示しない</translation>
    </message>
    <message>
      <source>Table of Contents and Indexes</source>
      <translation>目次とインデックス</translation>
    </message>
    <message>
      <source>Table Of Contents</source>
      <translation>目次</translation>
    </message>
    <message>
      <source>&amp;Add</source>
      <translation>追加(&amp;A)</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>削除(&amp;D)</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>The frame the table of contents will be placed into</source>
      <translation>目次を配置するフレーム</translation>
    </message>
    <message>
      <source>Page Numbers Placed:</source>
      <translation>ページ番号の配置:</translation>
    </message>
    <message>
      <source>Item Attribute Name:</source>
      <translation>アイテム属性名:</translation>
    </message>
    <message>
      <source>The Item Attribute that will be set on frames used as a basis for creation of the entries</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Place page numbers of the entries at the beginning or the end of the line, or not at all</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>List Non-Printing Entries</source>
      <translation>非印字エントリをリストにする</translation>
    </message>
    <message>
      <source>Include frames that are set to not print as well</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>The paragraph style used for the entry lines</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Paragraph Style:</source>
      <translation>段落スタイル:</translation>
    </message>
    <message>
      <source>Destination Frame:</source>
      <translation>出力先フレーム:</translation>
    </message>
    <message>
      <source>Inde&amp;x</source>
      <translation>インデックス(&amp;X)</translation>
    </message>
  </context>
  <context>
    <name>TOCIndexPrefsBase</name>
    <message>
      <source>Table of Contents and Indexes</source>
      <translation>目次とインデックス</translation>
    </message>
    <message>
      <source>Table Of Contents</source>
      <translation>目次</translation>
    </message>
    <message>
      <source>&amp;Add</source>
      <translation>追加(&amp;A)</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>削除(&amp;D)</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>The frame the table of contents will be placed into</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Page Numbers Placed:</source>
      <translation>ページ番号の配置:</translation>
    </message>
    <message>
      <source>Item Attribute Name:</source>
      <translation>アイテム属性名:</translation>
    </message>
    <message>
      <source>The Item Attribute that will be set on frames used as a basis for creation of the entries</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Place page numbers of the entries at the beginning or the end of the line, or not at all</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>List Non-Printing Entries</source>
      <translation>非印字エントリをリストにする</translation>
    </message>
    <message>
      <source>Include frames that are set to not print as well</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>The paragraph style used for the entry lines</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Paragraph Style:</source>
      <translation>段落スタイル:</translation>
    </message>
    <message>
      <source>Destination Frame:</source>
      <translation>出力先フレーム:</translation>
    </message>
    <message>
      <source>Inde&amp;x</source>
      <translation>インデックス(&amp;X)</translation>
    </message>
  </context>
  <context>
    <name>TabCheckDoc</name>
    <message>
      <source>Ignore all errors</source>
      <translation>全てのエラーを無視</translation>
    </message>
    <message>
      <source>Automatic check before printing or exporting</source>
      <translation>印刷または出力前に自動チェック</translation>
    </message>
    <message>
      <source>Check for missing glyphs</source>
      <translation>見つからないグリフをチェック</translation>
    </message>
    <message>
      <source>Check for objects not on a page</source>
      <translation>ページ上にないオブジェクトをチェック</translation>
    </message>
    <message>
      <source>Check for overflow in text frames</source>
      <translation>テキストフレームでのオーバーフローをチェック</translation>
    </message>
    <message>
      <source>Check for transparencies used</source>
      <translation>透明機能を使っているかチェック</translation>
    </message>
    <message>
      <source>Check for missing images</source>
      <translation>見つからない画像をチェック</translation>
    </message>
    <message>
      <source>Check image resolution</source>
      <translation>画像の解像度をチェック</translation>
    </message>
    <message>
      <source>Lowest allowed resolution</source>
      <translation>許可する最低解像度</translation>
    </message>
    <message>
      <source> dpi</source>
      <translation> dpi</translation>
    </message>
    <message>
      <source>Check for placed PDF Files</source>
      <translation>PDFファイルの配置をチェック</translation>
    </message>
    <message>
      <source>Check for PDF Annotations and Fields</source>
      <translation>PDF注釈とフィールドをチェック</translation>
    </message>
    <message>
      <source>Add Profile</source>
      <translation>プロファイルを追加</translation>
    </message>
    <message>
      <source>Remove Profile</source>
      <translation>プロファイルを削除</translation>
    </message>
  </context>
  <context>
    <name>TabGuides</name>
    <message>
      <source>Common Settings</source>
      <translation>共通設定</translation>
    </message>
    <message>
      <source>Placing in Documents</source>
      <translation>ドキュメント中の配置</translation>
    </message>
    <message>
      <source>In the Background</source>
      <translation>背景に</translation>
    </message>
    <message>
      <source>In the Foreground</source>
      <translation>前景に</translation>
    </message>
    <message>
      <source>Snapping</source>
      <translation>スナップ</translation>
    </message>
    <message>
      <source>Snap Distance:</source>
      <translation>スナップ距離:</translation>
    </message>
    <message>
      <source>Grab Radius:</source>
      <translation>つかむ範囲:</translation>
    </message>
    <message>
      <source> px</source>
      <translation> px</translation>
    </message>
    <message>
      <source>Show Guides</source>
      <translation>ガイドの表示</translation>
    </message>
    <message>
      <source>Color:</source>
      <translation>色:</translation>
    </message>
    <message>
      <source>Show Margins</source>
      <translation>マージンの表示</translation>
    </message>
    <message>
      <source>Show Page Grid</source>
      <translation>ページグリッドの表示</translation>
    </message>
    <message>
      <source>Major Grid</source>
      <translation>メジャーグリッド</translation>
    </message>
    <message>
      <source>Spacing:</source>
      <translation>間隔:</translation>
    </message>
    <message>
      <source>Minor Grid</source>
      <translation>マイナーグリッド</translation>
    </message>
    <message>
      <source>Show Baseline Grid</source>
      <translation>ベースライングリッドの表示</translation>
    </message>
    <message>
      <source>Baseline Settings</source>
      <translation>ベースライン設定</translation>
    </message>
    <message>
      <source>Baseline &amp;Grid:</source>
      <translation>ベースライングリッド(&amp;G):</translation>
    </message>
    <message>
      <source>Baseline &amp;Offset:</source>
      <translation>ベースラインオフセット(&amp;O):</translation>
    </message>
    <message>
      <source>Guides are not visible through objects on the page</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Guides are visible above all objects on the page</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Distance between the minor grid lines</source>
      <translation>マイナーグリッド線の間隔</translation>
    </message>
    <message>
      <source>Distance between the major grid lines</source>
      <translation>メジャーグリッド線の間隔</translation>
    </message>
    <message>
      <source>Distance within which an object will snap to your placed guides</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
      <translation>オブジェクトを扱う際につかむことのできる範囲の半径</translation>
    </message>
    <message>
      <source>Color of the minor grid lines</source>
      <translation>マイナーグリッド線の色</translation>
    </message>
    <message>
      <source>Color of the major grid lines</source>
      <translation>メジャーグリッド線の色</translation>
    </message>
    <message>
      <source>Color of the guide lines you insert</source>
      <translation>挿入したガイドラインの色</translation>
    </message>
    <message>
      <source>Color for the margin lines</source>
      <translation>マージン線の色</translation>
    </message>
    <message>
      <source>Color for the baseline grid</source>
      <translation>ベースライングリッドの色</translation>
    </message>
    <message>
      <source>Turns the basegrid on or off</source>
      <translation>ベースグリッドをON/OFFする</translation>
    </message>
    <message>
      <source>Distance between the lines of the baseline grid</source>
      <translation>ベースライングリッドの線の間の間隔</translation>
    </message>
    <message>
      <source>Distance from the top of the page for the first baseline</source>
      <translation>ページの上から最初のベースラインまでの距離</translation>
    </message>
    <message>
      <source>Turns the gridlines on or off</source>
      <translation>グリッドラインをON/OFFする</translation>
    </message>
    <message>
      <source>Turns the guides on or off</source>
      <translation>ガイドをON/OFFする</translation>
    </message>
    <message>
      <source>Turns the margins on or off</source>
      <translation>マージンをON/OFFする</translation>
    </message>
  </context>
  <context>
    <name>TabManager</name>
    <message>
      <source>Manage Tabulators</source>
      <translation>タブの管理</translation>
    </message>
  </context>
  <context>
    <name>TabPDFOptions</name>
    <message>
      <source>Export Range</source>
      <translation>エクスポート範囲</translation>
    </message>
    <message>
      <source>&amp;All Pages</source>
      <translation>全てのページ(&amp;A)</translation>
    </message>
    <message>
      <source>C&amp;hoose Pages</source>
      <translation>ページを選択(&amp;H)</translation>
    </message>
    <message>
      <source>&amp;Rotation:</source>
      <translation>回転(&amp;R):</translation>
    </message>
    <message>
      <source>File Options</source>
      <translation>ファイルオプション</translation>
    </message>
    <message>
      <source>Compatibilit&amp;y:</source>
      <translation>互換性(&amp;Y):</translation>
    </message>
    <message>
      <source>&amp;Binding:</source>
      <translation>結合(&amp;B):</translation>
    </message>
    <message>
      <source>Left Margin</source>
      <translation>左マージン</translation>
    </message>
    <message>
      <source>Right Margin</source>
      <translation>右マージン</translation>
    </message>
    <message>
      <source>Generate &amp;Thumbnails</source>
      <translation>サムネイルを生成(&amp;T)</translation>
    </message>
    <message>
      <source>Save &amp;Linked Text Frames as PDF Articles</source>
      <translation>リンクされたテキストフレームをPDF記事として保存(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Include Bookmarks</source>
      <translation>ブックマークを取り込む(&amp;I)</translation>
    </message>
    <message>
      <source>Include La&amp;yers</source>
      <translation>レイヤーを取り込む(&amp;Y)</translation>
    </message>
    <message>
      <source> dpi</source>
      <translation> dpi</translation>
    </message>
    <message>
      <source>&amp;Resolution for EPS Graphics:</source>
      <translation>EPS画像の解像度(&amp;R):</translation>
    </message>
    <message>
      <source>Com&amp;press Text and Vector Graphics</source>
      <translation>テキストとベクトルグラフィックを圧縮(&amp;P)</translation>
    </message>
    <message>
      <source>Image Settings</source>
      <translation>画像の設定</translation>
    </message>
    <message>
      <source>Automatic</source>
      <translation>自動</translation>
    </message>
    <message>
      <source>JPEG</source>
      <translation>JPEG</translation>
    </message>
    <message>
      <source>Zip</source>
      <translation>Zip</translation>
    </message>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
    <message>
      <source>Compression Metho&amp;d:</source>
      <translation>圧縮方法(&amp;D):</translation>
    </message>
    <message>
      <source>Maximum</source>
      <translation>最高</translation>
    </message>
    <message>
      <source>High</source>
      <translation>高</translation>
    </message>
    <message>
      <source>Medium</source>
      <translation>中</translation>
    </message>
    <message>
      <source>Low</source>
      <translation>低</translation>
    </message>
    <message>
      <source>Minimum</source>
      <translation>最低</translation>
    </message>
    <message>
      <source>Compression &amp;Quality:</source>
      <translation>圧縮の品質(&amp;Q):</translation>
    </message>
    <message>
      <source>Resa&amp;mple Images to:</source>
      <translation>画像のリサンプル(&amp;M):</translation>
    </message>
    <message>
      <source>&amp;General</source>
      <translation>全般(&amp;G)</translation>
    </message>
    <message>
      <source>&amp;Embed all Fonts</source>
      <translation>全てのフォントを埋め込む(&amp;E)</translation>
    </message>
    <message>
      <source>&amp;Subset all Fonts</source>
      <translation>全てのフォントのサブセット(&amp;S)</translation>
    </message>
    <message>
      <source>Embedding</source>
      <translation>埋め込み</translation>
    </message>
    <message>
      <source>Available Fonts:</source>
      <translation>利用可能なフォント:</translation>
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
      <source>Fonts to embed:</source>
      <translation>埋め込むフォント:</translation>
    </message>
    <message>
      <source>Fonts to subset:</source>
      <translation>フォントのサブセット:</translation>
    </message>
    <message>
      <source>&amp;Fonts</source>
      <translation>フォント(&amp;F)</translation>
    </message>
    <message>
      <source>Enable &amp;Presentation Effects</source>
      <translation>プレゼンテーションのエフェクトを有効に(&amp;P)</translation>
    </message>
    <message>
      <source>Page</source>
      <translation>ページ</translation>
    </message>
    <message>
      <source>Show Page Pre&amp;views</source>
      <translation>ページプレビューを表示(&amp;V)</translation>
    </message>
    <message>
      <source>Effects</source>
      <translation>エフェクト</translation>
    </message>
    <message>
      <source>&amp;Display Duration:</source>
      <translation>表示する時間(&amp;D):</translation>
    </message>
    <message>
      <source>Effec&amp;t Duration:</source>
      <translation>エフェクトの持続時間(&amp;T):</translation>
    </message>
    <message>
      <source>Effect T&amp;ype:</source>
      <translation>エフェクトの種類(&amp;Y):</translation>
    </message>
    <message>
      <source>&amp;Moving Lines:</source>
      <translation>線の移動(&amp;M):</translation>
    </message>
    <message>
      <source>F&amp;rom the:</source>
      <translation>どこから(&amp;R):</translation>
    </message>
    <message>
      <source>D&amp;irection:</source>
      <translation>方向(&amp;I):</translation>
    </message>
    <message>
      <source> sec</source>
      <translation> 秒</translation>
    </message>
    <message>
      <source>No Effect</source>
      <translation>エフェクトなし</translation>
    </message>
    <message>
      <source>Blinds</source>
      <translation>ブラインド</translation>
    </message>
    <message>
      <source>Box</source>
      <translation>ボックス</translation>
    </message>
    <message>
      <source>Dissolve</source>
      <translation>ディソルブ</translation>
    </message>
    <message>
      <source>Glitter</source>
      <translation>輝き</translation>
    </message>
    <message>
      <source>Split</source>
      <translation>分割</translation>
    </message>
    <message>
      <source>Wipe</source>
      <translation>ワイプ</translation>
    </message>
    <message>
      <source>Horizontal</source>
      <translation>水平</translation>
    </message>
    <message>
      <source>Vertical</source>
      <translation>垂直</translation>
    </message>
    <message>
      <source>Inside</source>
      <translation>内側</translation>
    </message>
    <message>
      <source>Outside</source>
      <translation>外側</translation>
    </message>
    <message>
      <source>Left to Right</source>
      <translation>左から右に</translation>
    </message>
    <message>
      <source>Top to Bottom</source>
      <translation>上から下へ</translation>
    </message>
    <message>
      <source>Bottom to Top</source>
      <translation>下から上へ</translation>
    </message>
    <message>
      <source>Right to Left</source>
      <translation>右から左に</translation>
    </message>
    <message>
      <source>Top-left to Bottom-Right</source>
      <translation>左上から右下に</translation>
    </message>
    <message>
      <source>&amp;Apply Effect on all Pages</source>
      <translation>全てのページにエフェクトを適用(&amp;A)</translation>
    </message>
    <message>
      <source>E&amp;xtras</source>
      <translation>拡張(&amp;X)</translation>
    </message>
    <message>
      <source>Display Settings</source>
      <translation>表示設定</translation>
    </message>
    <message>
      <source>Page Layout</source>
      <translation>ページレイアウト</translation>
    </message>
    <message>
      <source>Single Page</source>
      <translation>単一ページ</translation>
    </message>
    <message>
      <source>Continuous</source>
      <translation>連続ページ</translation>
    </message>
    <message>
      <source>Double Page Left</source>
      <translation>左見開きページ</translation>
    </message>
    <message>
      <source>Double Page Right</source>
      <translation>右見開きページ</translation>
    </message>
    <message>
      <source>Visual Appearance</source>
      <translation>外観</translation>
    </message>
    <message>
      <source>Use Viewers Defaults</source>
      <translation>ビューアをデフォルトで使用する</translation>
    </message>
    <message>
      <source>Use Full Screen Mode</source>
      <translation>フルスクリーンモードで使用する</translation>
    </message>
    <message>
      <source>Display Bookmarks Tab</source>
      <translation>ブックマークタブを表示</translation>
    </message>
    <message>
      <source>Display Thumbnails</source>
      <translation>サムネイルを表示</translation>
    </message>
    <message>
      <source>Display Layers Tab</source>
      <translation>レイヤータブを表示</translation>
    </message>
    <message>
      <source>Hide Viewers Toolbar</source>
      <translation>ビューアのツールバーを隠す</translation>
    </message>
    <message>
      <source>Hide Viewers Menubar</source>
      <translation>ビューアのメニューバーを隠す</translation>
    </message>
    <message>
      <source>Zoom Pages to fit Viewer Window</source>
      <translation>ビューアのウィンドウにあわせてページをズームする</translation>
    </message>
    <message>
      <source>Special Actions</source>
      <translation>特殊なアクション</translation>
    </message>
    <message>
      <source>Javascript to be executed
when Document is opened:</source>
      <translation>ドキュメントを開いたときに実行されるJavascript:</translation>
    </message>
    <message>
      <source>No Script</source>
      <translation>スクリプトなし</translation>
    </message>
    <message>
      <source>Viewer</source>
      <translation>ビューア</translation>
    </message>
    <message>
      <source>&amp;Use Encryption</source>
      <translation>暗号化を使用(&amp;U)</translation>
    </message>
    <message>
      <source>Passwords</source>
      <translation>パスワード</translation>
    </message>
    <message>
      <source>&amp;User:</source>
      <translation>ユーザ(&amp;U):</translation>
    </message>
    <message>
      <source>&amp;Owner:</source>
      <translation>所有者(&amp;O):</translation>
    </message>
    <message>
      <source>Settings</source>
      <translation>設定</translation>
    </message>
    <message>
      <source>Allow &amp;Printing the Document</source>
      <translation>ドキュメントの印刷を許可(&amp;P)</translation>
    </message>
    <message>
      <source>Allow &amp;Changing the Document</source>
      <translation>ドキュメントの変更を許可(&amp;C)</translation>
    </message>
    <message>
      <source>Allow Cop&amp;ying Text and Graphics</source>
      <translation>テキストとグラフィックのコピーを許可(&amp;Y)</translation>
    </message>
    <message>
      <source>Allow Adding &amp;Annotations and Fields</source>
      <translation>注釈とフィールドの追加を許可(&amp;A)</translation>
    </message>
    <message>
      <source>S&amp;ecurity</source>
      <translation>セキュリティ(&amp;E)</translation>
    </message>
    <message>
      <source>General</source>
      <translation>全般</translation>
    </message>
    <message>
      <source>Output &amp;Intended For:</source>
      <translation>出力の目的(&amp;I):</translation>
    </message>
    <message>
      <source>Screen / Web</source>
      <translation>画面 / ウェブ</translation>
    </message>
    <message>
      <source>Printer</source>
      <translation>プリンタ</translation>
    </message>
    <message>
      <source>Grayscale</source>
      <translation>グレースケール</translation>
    </message>
    <message>
      <source>Convert Spot Colors to Process Colors</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Use Custom Rendering Settings</source>
      <translation>カスタムのレンダリング設定を使用(&amp;U)</translation>
    </message>
    <message>
      <source>Rendering Settings</source>
      <translation>レンダリング設定</translation>
    </message>
    <message>
      <source>Fre&amp;quency:</source>
      <translation>周波数(&amp;Q):</translation>
    </message>
    <message>
      <source>&amp;Angle:</source>
      <translation>角度(&amp;A):</translation>
    </message>
    <message>
      <source>S&amp;pot Function:</source>
      <translation>スポット機能(&amp;P):</translation>
    </message>
    <message>
      <source>Simple Dot</source>
      <translation>単一点</translation>
    </message>
    <message>
      <source>Line</source>
      <translation>線</translation>
    </message>
    <message>
      <source>Round</source>
      <translation>円</translation>
    </message>
    <message>
      <source>Ellipse</source>
      <translation>楕円</translation>
    </message>
    <message>
      <source>Solid Colors:</source>
      <translation>無色:</translation>
    </message>
    <message>
      <source>Use ICC Profile</source>
      <translation>ICCプロファイルを使用</translation>
    </message>
    <message>
      <source>Profile:</source>
      <translation>プロファイル:</translation>
    </message>
    <message>
      <source>Rendering-Intent:</source>
      <translation>レンダリングインテント:</translation>
    </message>
    <message>
      <source>Perceptual</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Relative Colorimetric</source>
      <translation>相対的な色彩</translation>
    </message>
    <message>
      <source>Saturation</source>
      <translation>彩度</translation>
    </message>
    <message>
      <source>Absolute Colorimetric</source>
      <translation>絶対的な色彩</translation>
    </message>
    <message>
      <source>Images:</source>
      <translation>画像:</translation>
    </message>
    <message>
      <source>Don't use embedded ICC profiles</source>
      <translation>埋め込まれたICCプロファイルを利用しない</translation>
    </message>
    <message>
      <source>C&amp;olor</source>
      <translation>色(&amp;O)</translation>
    </message>
    <message>
      <source>PDF/X-3 Output Intent</source>
      <translation>PDF/X-3 出力インテント</translation>
    </message>
    <message>
      <source>&amp;Info String:</source>
      <comment>#, fuzzy</comment>
      <translation>文字列の情報(&amp;I):</translation>
    </message>
    <message>
      <source>Output &amp;Profile:</source>
      <translation>プロファイルを出力(&amp;P):</translation>
    </message>
    <message>
      <source>Trim Box</source>
      <translation>トリムボックス</translation>
    </message>
    <message>
      <source>PDF/X-&amp;3</source>
      <translation>PDF/X-&amp;3</translation>
    </message>
    <message>
      <source>Embed fonts into the PDF. Embedding the fonts will preserve the layout and appearance of your document.</source>
      <translation>PDFにフォントを埋め込みます。フォントを埋め込むとドキュメントのレイアウトと見た目が保たれます。</translation>
    </message>
    <message>
      <source>Enables presentation effects when using Adobe&amp;#174; Reader&amp;#174; in full screen mode.</source>
      <translation>フルスクリーンモードでAdobe&amp;#174; Reader&amp;#174;を使用している時にプレゼンテーションエフェクトを有効にします。</translation>
    </message>
    <message>
      <source>Show page previews of each page listed above.</source>
      <translation>上のリストにある各ページのプレビューを表示</translation>
    </message>
    <message>
      <source>Length of time the page is shown before the presentation starts on the selected page.</source>
      <translation>選択されたページのプレゼンテーションを開始する前に、ページが表示されている時間</translation>
    </message>
    <message>
      <source>Length of time the effect runs. A shorter time will speed up the effect, a longer one will slow it down.</source>
      <translation>エフェクトが有効になっている時間です。短い時間を指定するとエフェクトの速度が速くなり、長い時間だと遅くなります。</translation>
    </message>
    <message>
      <source>Type of the display effect.</source>
      <translation>表示エフェクトの種類</translation>
    </message>
    <message>
      <source>Direction of the effect of moving lines for the split and blind effects.</source>
      <translation>分割やブラインドエフェクトでのムービングラインのエフェクトの方向</translation>
    </message>
    <message>
      <source>Starting position for the box and split effects.</source>
      <translation>ボックスと分割エフェクトの開始位置</translation>
    </message>
    <message>
      <source>Direction of the glitter or wipe effects.</source>
      <translation>輝きもしくはワイプエフェクトの方向</translation>
    </message>
    <message>
      <source>Apply the selected effect to all pages.</source>
      <translation>選択されたエフェクトを全てのページに適用</translation>
    </message>
    <message>
      <source>Export all pages to PDF</source>
      <translation>全てのページをPDFにエクスポート</translation>
    </message>
    <message>
      <source>Export a range of pages to PDF</source>
      <translation>指定された範囲をPDFにエクスポート</translation>
    </message>
    <message>
      <source>Insert a comma separated list of tokens where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
      <translation>カンマで区切られたトークンのリストを入力してください。
トークンは*で全てのページを、1-5のようにしてページ範囲を、
もしくは単一のページ番号が利用できます。</translation>
    </message>
    <message>
      <source>Determines the PDF compatibility. The default is PDF 1.3 which gives the widest compatibility. Choose PDF 1.4 if your file uses features such as transparency or you require 128 bit encryption. PDF/X-3 is for exporting the PDF when you want color managed RGB for commercial printing and is selectable when you have activated color management. Use only when advised by your printer or in some cases printing to a 4 color digital color laser printer.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Determines the binding of pages in the PDF. Unless you know you need to change it leave the default choice - Left.</source>
      <translation>PDF中のページの結合を決定します。
変更する必要がなければ、デフォルトの選択 - 左マージン のままにしておいてください。</translation>
    </message>
    <message>
      <source>Generates thumbnails of each page in the PDF. Some viewers can use the thumbnails for navigation.</source>
      <translation>PDF中にある各ページのサムネイルを生成します。
いくつかのビューワではサムネイルをナビゲーションとして利用できます。</translation>
    </message>
    <message>
      <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
      <translation>PDF中のリンクされた記事をナビゲートするのに役立つPDF記事を作成します。</translation>
    </message>
    <message>
      <source>Layers in your document are exported to the PDF Only available if PDF 1.5 is choosen.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Embed the bookmarks you created in your document. These are useful for navigating long PDF documents.</source>
      <translation>ドキュメント中で作成したブックマークを埋め込みます。長いPDFドキュメントをナビゲートするのに役にたちます。</translation>
    </message>
    <message>
      <source>Export resolution of text and vector graphics. This does not affect the resolution of bitmap images like photos.</source>
      <translation>テキストとベクトルグラフィックの解像度を出力します。写真のように、ビットマップ画像の解像度には影響しません。</translation>
    </message>
    <message>
      <source>Enables lossless compression of text and graphics. Unless you have a reason, leave this checked. This reduces PDF file size.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Method of compression to use for images. Automatic allows Scribus to choose the best method. ZIP is lossless and good for images with solid colors. JPEG is better at creating smaller PDF files which have many photos (with slight image quality loss possible). Leave it set to Automatic unless you have a need for special compression options.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Compression quality levels for lossy compression methods: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%). Note that a quality level does not directly determine the size of the resulting image - both size and quality loss vary from image to image at any given quality level.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Re-sample your bitmap images to the selected DPI. Leaving this unchecked will render them at their native resolution. This can increase memory usage and slow down export.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>DPI (Dots Per Inch) for image export.</source>
      <translation>出力画像のDPI (Dots Per Inch)</translation>
    </message>
    <message>
      <source>Enable the security features in your exported PDF. If you selected PDF 1.3, the PDF will be protected by 40 bit encryption. If you selected PDF 1.4, the PDF will be protected by 128 bit encryption. Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Choose a master password which enables or disables all the security features in your exported PDF</source>
      <translation>出力するPDFで全てのセキュリティ機能を有効/無効にするマスターパスワードを選択</translation>
    </message>
    <message>
      <source>Choose a password for users to be able to read your PDF.</source>
      <translation>PDFが読めるユーザのパスワードを選択</translation>
    </message>
    <message>
      <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
      <translation>PDFの印刷を許可します。チェックされていなければ、印刷を禁止します。</translation>
    </message>
    <message>
      <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
      <translation>PDFの変更を許可します。チェックされていなければ、PDFの変更を禁止します。</translation>
    </message>
    <message>
      <source>Allow copying of text or graphics from the PDF. If unchecked, text and graphics cannot be copied.</source>
      <translation>PDFからテキストやグラフィックのコピーを許可します。チェックされていなければ、テキストやグラフィックはコピーできません。</translation>
    </message>
    <message>
      <source>Allow adding annotations and fields to the PDF. If unchecked, editing annotations and fields is prevented.</source>
      <translation>PDFに注釈とフィールドの追加を許可します。チェックされていなければ、注釈とフィールドの編集を禁止します。</translation>
    </message>
    <message>
      <source>Color model for the output of your PDF. Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets. Choose Printer when printing to a true 4 color CMYK printer.</source>
      <translation>PDF出力のカラーモデルです。ディスプレイで使用するPDFや一般的なインクジェットで印刷する場合は 画面/Web を選択してください。4色CMYKプリンタで印刷する場合はプリンタを選択してください。</translation>
    </message>
    <message>
      <source>This is an advanced setting which is not enabled by default. This should only be enabled when specifically requested by your printer and they have given you the exact details needed. Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Embed a color profile for solid colors</source>
      <translation>無色のカラープロファイルを埋め込む</translation>
    </message>
    <message>
      <source>Color profile for solid colors</source>
      <translation>無色のカラープロファイル</translation>
    </message>
    <message>
      <source>Rendering intent for solid colors</source>
      <translation>無色のレンダリングインテント</translation>
    </message>
    <message>
      <source>Embed a color profile for images</source>
      <translation>画像のカラープロファイルを埋め込む</translation>
    </message>
    <message>
      <source>Do not use color profiles that are embedded in source images</source>
      <translation>元の画像に埋め込まれたカラープロファイルを使用しない</translation>
    </message>
    <message>
      <source>Color profile for images</source>
      <translation>画像のカラープロファイル</translation>
    </message>
    <message>
      <source>Rendering intent for images</source>
      <translation>画像のレンダリングインテント</translation>
    </message>
    <message>
      <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
      <translation>印刷のための出力プロファイルです。できれば、プロファイル選択に関するプリンタの手引を入手してください。</translation>
    </message>
    <message>
      <source>Mandatory string for PDF/X-3 or the PDF will fail PDF/X-3 conformance. We recommend you use the title of the document.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Distance for bleed from the top of the physical page</source>
      <translation>物理ページの上から断ち切りまでの間隔</translation>
    </message>
    <message>
      <source>Distance for bleed from the bottom of the physical page</source>
      <translation>物理ページの下から断ち切りまでの間隔</translation>
    </message>
    <message>
      <source>Distance for bleed from the left of the physical page</source>
      <translation>物理ページの左から断ち切りまでの間隔</translation>
    </message>
    <message>
      <source>Distance for bleed from the right of the physical page</source>
      <translation>物理ページの右から断ち切りまでの間隔</translation>
    </message>
    <message>
      <source>Mirror Page(s) horizontally</source>
      <translation>ページを水平方向に反転</translation>
    </message>
    <message>
      <source>Mirror Page(s) vertically</source>
      <translation>ページを垂直方向に反転</translation>
    </message>
    <message>
      <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>TabTools</name>
    <message>
      <source>Font:</source>
      <translation>フォント:</translation>
    </message>
    <message>
      <source> pt</source>
      <translation> pt</translation>
    </message>
    <message>
      <source>Size:</source>
      <translation>サイズ:</translation>
    </message>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
    <message>
      <source>Text Color:</source>
      <translation>テキスト色:</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Shading:</source>
      <translation>色の濃さ:</translation>
    </message>
    <message>
      <source>Text Stroke:</source>
      <translation>テキストの輪郭:</translation>
    </message>
    <message>
      <source>Fill Color:</source>
      <translation>塗りつぶし色:</translation>
    </message>
    <message>
      <source>Stroke Color:</source>
      <translation>輪郭色:</translation>
    </message>
    <message>
      <source>Dot</source>
      <translation>ドット</translation>
    </message>
    <message>
      <source>Hyphen</source>
      <translation>ハイフン</translation>
    </message>
    <message>
      <source>Underscore</source>
      <translation>下線</translation>
    </message>
    <message>
      <source>Custom</source>
      <translation>カスタム</translation>
    </message>
    <message>
      <source>Tab Fill Character:</source>
      <translation>タブ埋め文字:</translation>
    </message>
    <message>
      <source>Tab Width:</source>
      <translation>タブ幅:</translation>
    </message>
    <message>
      <source>Colu&amp;mns:</source>
      <translation>列数(&amp;M):</translation>
    </message>
    <message>
      <source>&amp;Gap:</source>
      <translation>ギャップ(&amp;G):</translation>
    </message>
    <message>
      <source>Woven silk pyjamas exchanged for blue quartz</source>
      <translation>Woven silk pyjamas exchanged for blue quartz</translation>
    </message>
    <message>
      <source>&amp;Line Color:</source>
      <translation>線の色(&amp;L):</translation>
    </message>
    <message>
      <source>&amp;Shading:</source>
      <translation>色の濃さ(&amp;S):</translation>
    </message>
    <message>
      <source>&amp;Fill Color:</source>
      <translation>塗りつぶし色(&amp;F):</translation>
    </message>
    <message>
      <source>S&amp;hading:</source>
      <translation>色の濃さ(&amp;H):</translation>
    </message>
    <message>
      <source>Line Style:</source>
      <translation>線スタイル:</translation>
    </message>
    <message>
      <source>Line &amp;Width:</source>
      <translation>線幅(&amp;W):</translation>
    </message>
    <message>
      <source>Line S&amp;tyle:</source>
      <translation>線スタイル(&amp;T):</translation>
    </message>
    <message>
      <source>Arrows:</source>
      <translation>矢印:</translation>
    </message>
    <message>
      <source>Start:</source>
      <translation>開始:</translation>
    </message>
    <message>
      <source>End:</source>
      <translation>終了:</translation>
    </message>
    <message>
      <source>&amp;Free Scaling</source>
      <translation>自由倍率(&amp;F)</translation>
    </message>
    <message>
      <source>&amp;Horizontal Scaling:</source>
      <translation>水平方向の倍率(&amp;H):</translation>
    </message>
    <message>
      <source>&amp;Vertical Scaling:</source>
      <translation>垂直方向の倍率(&amp;V):</translation>
    </message>
    <message>
      <source>&amp;Scale Picture to Frame Size</source>
      <translation>フレームサイズに合わせて画像を拡大縮小(&amp;S)</translation>
    </message>
    <message>
      <source>Keep Aspect &amp;Ratio</source>
      <translation>アスペクト比を保持(&amp;R)</translation>
    </message>
    <message>
      <source>F&amp;ill Color:</source>
      <translation>塗りつぶし色(&amp;I):</translation>
    </message>
    <message>
      <source>Use embedded Clipping Path</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>On Screen Preview</source>
      <translation>画面上のプレビュー</translation>
    </message>
    <message>
      <source>Full Resolution Preview</source>
      <translation>最大解像度のプレビュー</translation>
    </message>
    <message>
      <source>Normal Resolution Preview</source>
      <translation>通常解像度のプレビュー</translation>
    </message>
    <message>
      <source>Low Resolution Preview</source>
      <translation>低解像度のプレビュー</translation>
    </message>
    <message>
      <source>Mi&amp;nimum:</source>
      <translation>最小(&amp;N):</translation>
    </message>
    <message>
      <source>Ma&amp;ximum:</source>
      <translation>最大(&amp;X):</translation>
    </message>
    <message>
      <source>&amp;Stepping:</source>
      <translation>ステップ(&amp;S):</translation>
    </message>
    <message>
      <source>Text Frame Properties</source>
      <translation>テキストフレームのプロパティ</translation>
    </message>
    <message>
      <source>Picture Frame Properties</source>
      <translation>画像フレームのプロパティ</translation>
    </message>
    <message>
      <source>Shape Drawing Properties</source>
      <translation>形状の描画のプロパティ</translation>
    </message>
    <message>
      <source>Magnification Level Defaults</source>
      <translation>デフォルトの拡大率</translation>
    </message>
    <message>
      <source>Line Drawing Properties</source>
      <translation>線の描画プロパティ</translation>
    </message>
    <message>
      <source>Polygon Drawing Properties</source>
      <translation>多角形の描画プロパティ</translation>
    </message>
    <message>
      <source>Font for new text frames</source>
      <translation>新規テキストフレームのフォント</translation>
    </message>
    <message>
      <source>Size of font for new text frames</source>
      <translation>新規テキストフレームのフォントサイズ</translation>
    </message>
    <message>
      <source>Color of font</source>
      <translation>フォントの色</translation>
    </message>
    <message>
      <source>Number of columns in a text frame</source>
      <translation>テキストフレーム中の列数</translation>
    </message>
    <message>
      <source>Gap between text frame columns</source>
      <translation>テキストフレームの列の間のギャップ</translation>
    </message>
    <message>
      <source>Sample of your font</source>
      <translation>フォントのサンプル</translation>
    </message>
    <message>
      <source>Picture frames allow pictures to scale to any size</source>
      <translation>画像フレームは画像を任意のサイズに拡大縮小できます</translation>
    </message>
    <message>
      <source>Horizontal scaling of images</source>
      <translation>画像の水平方向の倍率</translation>
    </message>
    <message>
      <source>Vertical scaling of images</source>
      <translation>画像の垂直方向の倍率</translation>
    </message>
    <message>
      <source>Keep horizontal and vertical scaling the same</source>
      <translation>水平方向と垂直方向の倍率を同じに保ちます</translation>
    </message>
    <message>
      <source>Pictures in picture frames are scaled to the size of the frame</source>
      <translation>画像フレームの画像はフレームのサイズに拡大縮小されます</translation>
    </message>
    <message>
      <source>Automatically scaled pictures keep their original proportions</source>
      <translation>自動的に拡大縮小された画像をオリジナルの比率に保ちます</translation>
    </message>
    <message>
      <source>Fill color of picture frames</source>
      <translation>画像フレームの塗りつぶし色</translation>
    </message>
    <message>
      <source>Saturation of color of fill</source>
      <translation>塗りつぶし色の彩度</translation>
    </message>
    <message>
      <source>Line color of shapes</source>
      <translation>形状の線の色</translation>
    </message>
    <message>
      <source>Saturation of color of lines</source>
      <translation>線の色の彩度</translation>
    </message>
    <message>
      <source>Fill color of shapes</source>
      <translation>形状の塗りつぶし色</translation>
    </message>
    <message>
      <source>Line style of shapes</source>
      <translation>形状の線スタイル</translation>
    </message>
    <message>
      <source>Line width of shapes</source>
      <translation>形状の線幅</translation>
    </message>
    <message>
      <source>Minimum magnification allowed</source>
      <translation>利用できる最小の拡大率</translation>
    </message>
    <message>
      <source>Maximum magnification allowed</source>
      <translation>利用できる最大の拡大率</translation>
    </message>
    <message>
      <source>Change in magnification for each zoom operation</source>
      <translation>ズーム操作のたびに倍率が変化します</translation>
    </message>
    <message>
      <source>Color of lines</source>
      <translation>線の色</translation>
    </message>
    <message>
      <source>Saturation of color</source>
      <translation>色の彩度</translation>
    </message>
    <message>
      <source>Style of lines</source>
      <translation>線のスタイル</translation>
    </message>
    <message>
      <source>Width of lines</source>
      <translation>線幅</translation>
    </message>
    <message>
      <source>Custom:</source>
      <translation>カスタム:</translation>
    </message>
    <message>
      <source>Custom: </source>
      <translation>カスタム: </translation>
    </message>
  </context>
  <context>
    <name>TabTypograpy</name>
    <message>
      <source>Subscript</source>
      <translation>下付き文字</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>&amp;Displacement:</source>
      <translation>位置ずれ(&amp;D):</translation>
    </message>
    <message>
      <source>&amp;Scaling:</source>
      <translation>倍率(&amp;S):</translation>
    </message>
    <message>
      <source>Superscript</source>
      <translation>上付き文字</translation>
    </message>
    <message>
      <source>D&amp;isplacement:</source>
      <translation>位置ずれ(&amp;I):</translation>
    </message>
    <message>
      <source>S&amp;caling:</source>
      <translation>倍率(&amp;C):</translation>
    </message>
    <message>
      <source>Underline</source>
      <translation>下線</translation>
    </message>
    <message>
      <source>Displacement:</source>
      <translation>位置ずれ</translation>
    </message>
    <message>
      <source>Auto</source>
      <translation>自動</translation>
    </message>
    <message>
      <source>Line Width:</source>
      <translation>線幅:</translation>
    </message>
    <message>
      <source>Strikethru</source>
      <translation>取り消し線</translation>
    </message>
    <message>
      <source>Small Caps</source>
      <translation>スモールキャピタル</translation>
    </message>
    <message>
      <source>Sc&amp;aling:</source>
      <translation>倍率(&amp;A):</translation>
    </message>
    <message>
      <source>Automatic &amp;Line Spacing</source>
      <translation>自動行間隔(&amp;L)</translation>
    </message>
    <message>
      <source>Line Spacing:</source>
      <translation>行間隔:</translation>
    </message>
    <message>
      <source>Displacement above the baseline of the font on a line</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Relative size of the superscript compared to the normal font</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Displacement below the baseline of the normal font on a line</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Relative size of the subscript compared to the normal font</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Relative size of the small caps font compared to the normal font</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Percentage increase over the font size for the line spacing</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Displacement below the baseline of the normal font expressed as a percentage of the fonts descender</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Line width expressed as a percentage of the font size</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Displacement above the baseline of the normal font expressed as a percentage of the fonts ascender</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>Tabruler</name>
    <message>
      <source>Left</source>
      <translation>左</translation>
    </message>
    <message>
      <source>Right</source>
      <translation>右</translation>
    </message>
    <message>
      <source>Full Stop</source>
      <translation>ピリオド</translation>
    </message>
    <message>
      <source>Comma</source>
      <translation>コンマ</translation>
    </message>
    <message>
      <source>Center</source>
      <translation>中央</translation>
    </message>
    <message>
      <source>&amp;Position:</source>
      <translation>位置(&amp;P):</translation>
    </message>
    <message>
      <source>None</source>
      <translation>なし</translation>
    </message>
    <message>
      <source>Dot</source>
      <translation>ドット</translation>
    </message>
    <message>
      <source>Hyphen</source>
      <translation>ハイフン</translation>
    </message>
    <message>
      <source>Underscore</source>
      <translation>下線</translation>
    </message>
    <message>
      <source>Custom</source>
      <translation>カスタム</translation>
    </message>
    <message>
      <source>Fill Char:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Delete All</source>
      <translation>全て削除</translation>
    </message>
    <message>
      <source>Indentation for first line of the paragraph</source>
      <translation>段落の先頭行に対するインデント</translation>
    </message>
    <message>
      <source>Indentation from the left for the whole paragraph</source>
      <translation>段落全体に対する左側のインデント</translation>
    </message>
    <message>
      <source>Delete all Tabulators</source>
      <translation>全てのタブを削除</translation>
    </message>
    <message>
      <source>Custom:</source>
      <translation>カスタム:</translation>
    </message>
    <message>
      <source>Custom: </source>
      <translation>カスタム: </translation>
    </message>
  </context>
  <context>
    <name>Tree</name>
    <message>
      <source>Free Objects</source>
      <translation>フリーオブジェクト</translation>
    </message>
    <message>
      <source>Group </source>
      <translation>グループ </translation>
    </message>
    <message>
      <source>Page </source>
      <translation>ページ </translation>
    </message>
    <message>
      <source>Outline</source>
      <translation>アウトライン</translation>
    </message>
    <message>
      <source>Element</source>
      <translation>要素</translation>
    </message>
  </context>
  <context>
    <name>UnderlineValues</name>
    <message>
      <source>Auto</source>
      <translation>自動</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Displacement</source>
      <translation>位置ずれ</translation>
    </message>
    <message>
      <source>Linewidth</source>
      <translation>線幅</translation>
    </message>
  </context>
  <context>
    <name>UndoManager</name>
    <message>
      <source>Add vertical guide</source>
      <translation>垂直ガイドを追加</translation>
    </message>
    <message>
      <source>Add horizontal guide</source>
      <translation>水平ガイドを追加</translation>
    </message>
    <message>
      <source>Remove vertical guide</source>
      <translation>垂直ガイドを削除</translation>
    </message>
    <message>
      <source>Remove horizontal guide</source>
      <translation>水平ガイドを削除</translation>
    </message>
    <message>
      <source>Move vertical guide</source>
      <translation>垂直ガイドを移動</translation>
    </message>
    <message>
      <source>Move horizontal guide</source>
      <translation>水平ガイドを移動</translation>
    </message>
    <message>
      <source>Lock guides</source>
      <translation>ガイドをロック</translation>
    </message>
    <message>
      <source>Unlock guides</source>
      <translation>ガイドをロック解除</translation>
    </message>
    <message>
      <source>Move</source>
      <translation>移動</translation>
    </message>
    <message>
      <source>Resize</source>
      <translation>サイズ変更</translation>
    </message>
    <message>
      <source>Rotate</source>
      <translation>回転</translation>
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
      <translation>選択</translation>
    </message>
    <message>
      <source>Group</source>
      <translation>グループ</translation>
    </message>
    <message>
      <source>Selection/Group</source>
      <translation>選択/グループ</translation>
    </message>
    <message>
      <source>Create</source>
      <translation>作成</translation>
    </message>
    <message>
      <source>X: %1, Y: %2
W: %3, H: %4</source>
      <translation>X: %1, Y: %2
W: %3, H: %4</translation>
    </message>
    <message>
      <source>Align/Distribute</source>
      <translation>整列/配置</translation>
    </message>
    <message>
      <source>Items involved</source>
      <translation>アイテムは含まれています</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>キャンセル</translation>
    </message>
    <message>
      <source>Set fill color</source>
      <translation>塗りつぶし色を設定</translation>
    </message>
    <message>
      <source>Color1: %1, Color2: %2</source>
      <translation>色1: %1, 色2: %2</translation>
    </message>
    <message>
      <source>Set fill color shade</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set line color</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set line color shade</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Flip horizontally</source>
      <translation>水平方向に反転</translation>
    </message>
    <message>
      <source>Flip vertically</source>
      <translation>垂直方向に反転</translation>
    </message>
    <message>
      <source>Lock</source>
      <translation>ロック</translation>
    </message>
    <message>
      <source>Unlock</source>
      <translation>ロック解除</translation>
    </message>
    <message>
      <source>Lock size</source>
      <translation>サイズをロック</translation>
    </message>
    <message>
      <source>Unlock size</source>
      <translation>サイズをロック解除</translation>
    </message>
    <message>
      <source>Ungroup</source>
      <translation>グループ解除</translation>
    </message>
    <message>
      <source>Delete</source>
      <translation>削除</translation>
    </message>
    <message>
      <source>Rename</source>
      <translation>名前を変更</translation>
    </message>
    <message>
      <source>From %1
to %2</source>
      <translation>%1 から %2</translation>
    </message>
    <message>
      <source>Apply Master Page</source>
      <translation>マスターページに適用</translation>
    </message>
    <message>
      <source>Paste</source>
      <translation>貼り付け</translation>
    </message>
    <message>
      <source>Cut</source>
      <translation>切り取り</translation>
    </message>
    <message>
      <source>Set fill color transparency</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set line color transparency</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set line style</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set the style of line end</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set the style of line join</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set line width</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>No style</source>
      <translation>スタイルなし</translation>
    </message>
    <message>
      <source>Set custom line style</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Do not use custom line style</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set start arrow</source>
      <translation>始点矢印の設定</translation>
    </message>
    <message>
      <source>Set end arrow</source>
      <translation>終端矢印の設定</translation>
    </message>
    <message>
      <source>Create table</source>
      <translation>テーブルを作成</translation>
    </message>
    <message>
      <source>Rows: %1, Cols: %2</source>
      <translation>行: %1, 列: %2</translation>
    </message>
    <message>
      <source>Set font</source>
      <translation>フォントを設定</translation>
    </message>
    <message>
      <source>Set font size</source>
      <translation>フォントサイズを設定</translation>
    </message>
    <message>
      <source>Set font width</source>
      <translation>フォント幅を設定</translation>
    </message>
    <message>
      <source>Set font height</source>
      <translation>フォント高さを設定</translation>
    </message>
    <message>
      <source>Set font fill color</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set font stroke color</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set font fill color shade</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set font stroke color shade</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set kerning</source>
      <translation>カーニングの設定</translation>
    </message>
    <message>
      <source>Set line spacing</source>
      <translation>行間隔の設定</translation>
    </message>
    <message>
      <source>Set paragraph style</source>
      <translation>段落スタイルを設定</translation>
    </message>
    <message>
      <source>Set language</source>
      <translation>言語を設定</translation>
    </message>
    <message>
      <source>Align text</source>
      <translation>テキストを整列</translation>
    </message>
    <message>
      <source>Set font effect</source>
      <translation>フォントエフェクトを設定</translation>
    </message>
    <message>
      <source>Image frame</source>
      <translation>画像フレーム</translation>
    </message>
    <message>
      <source>Text frame</source>
      <translation>テキストフレーム</translation>
    </message>
    <message>
      <source>Polygon</source>
      <translation>多角形</translation>
    </message>
    <message>
      <source>Bezier curve</source>
      <translation>ベジエ曲線</translation>
    </message>
    <message>
      <source>Polyline</source>
      <translation>ポリライン</translation>
    </message>
    <message>
      <source>Text on a Path</source>
      <translation>パス上のテキスト</translation>
    </message>
    <message>
      <source>Convert to</source>
      <translation>変換</translation>
    </message>
    <message>
      <source>Import SVG image</source>
      <translation>SVG画像をインポート</translation>
    </message>
    <message>
      <source>Import EPS image</source>
      <translation>EPS画像をインポート</translation>
    </message>
    <message>
      <source>Import OpenOffice.org Draw image</source>
      <translation>OpenOffice.org Draw画像をインポート</translation>
    </message>
    <message>
      <source>Scratch space</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Text flows around the frame</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Text flows around bounding box</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Text flows around contour line</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>No text flow</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>No bounding box</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>No contour line</source>
      <translation>等高線なし</translation>
    </message>
    <message>
      <source>Page %1</source>
      <translation>ページ %1</translation>
    </message>
    <message>
      <source>Set image scaling</source>
      <translation>画像倍率を設定</translation>
    </message>
    <message>
      <source>Frame size</source>
      <translation>フレームサイズ</translation>
    </message>
    <message>
      <source>Free scaling</source>
      <translation>自由倍率</translation>
    </message>
    <message>
      <source>Keep aspect ratio</source>
      <translation>アスペクト比を保持</translation>
    </message>
    <message>
      <source>Break aspect ratio</source>
      <translation>アスペクト比を保持しない</translation>
    </message>
    <message>
      <source>Edit contour line</source>
      <translation>等高線を編集</translation>
    </message>
    <message>
      <source>Edit shape</source>
      <translation>形状を編集</translation>
    </message>
    <message>
      <source>Reset contour line</source>
      <translation>等高線をリセット</translation>
    </message>
    <message>
      <source>Add page</source>
      <translation>ページを追加</translation>
    </message>
    <message>
      <source>Add pages</source>
      <translation>ページを追加</translation>
    </message>
    <message>
      <source>Delete page</source>
      <translation>ページを削除</translation>
    </message>
    <message>
      <source>Delete pages</source>
      <translation>ページを削除</translation>
    </message>
    <message>
      <source>Add layer</source>
      <translation>レイヤーを追加</translation>
    </message>
    <message>
      <source>Delete layer</source>
      <translation>レイヤーを削除</translation>
    </message>
    <message>
      <source>Rename layer</source>
      <translation>レイヤー名を変更</translation>
    </message>
    <message>
      <source>Raise layer</source>
      <translation>レイヤーを上げる</translation>
    </message>
    <message>
      <source>Lower layer</source>
      <translation>レイヤーを下げる</translation>
    </message>
    <message>
      <source>Send to layer</source>
      <translation>レイヤーに送る</translation>
    </message>
    <message>
      <source>Enable printing of layer</source>
      <translation>レイヤーの印刷を有効にする</translation>
    </message>
    <message>
      <source>Disable printing of layer</source>
      <translation>レイヤーの印刷を無効にする</translation>
    </message>
    <message>
      <source>Change name of the layer</source>
      <translation>レイヤーの名前を変更</translation>
    </message>
    <message>
      <source>Get image</source>
      <translation>画像を取得</translation>
    </message>
  </context>
  <context>
    <name>UndoPalette</name>
    <message>
      <source>Initial State</source>
      <translation>初期状態</translation>
    </message>
    <message>
      <source>Action History</source>
      <translation>アクション履歴</translation>
    </message>
    <message>
      <source>Show selected object only</source>
      <translation>選択されたオブジェクトのみ表示</translation>
    </message>
    <message>
      <source>&amp;Undo</source>
      <translation>元に戻す(&amp;U)</translation>
    </message>
    <message>
      <source>&amp;Redo</source>
      <translation>やり直し(&amp;R)</translation>
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
    <name>ValueDialog</name>
    <message>
      <source>Insert value</source>
      <translation>値を挿入</translation>
    </message>
    <message>
      <source>Enter a value then press OK.</source>
      <translation>値を入力してOKを押してください</translation>
    </message>
    <message>
      <source>Enter a value then press OK</source>
      <translation>値を入力してOKを押してください</translation>
    </message>
    <message>
      <source>Alt+O</source>
      <translation>Alt+O</translation>
    </message>
    <message>
      <source>Send your value to the script</source>
      <translation>値をスクリプトに渡します</translation>
    </message>
  </context>
  <context>
    <name>WerkToolB</name>
    <message>
      <source>Tools</source>
      <translation>ツール</translation>
    </message>
    <message>
      <source>Properties...</source>
      <translation>プロパティ...</translation>
    </message>
  </context>
  <context>
    <name>WerkToolBP</name>
    <message>
      <source>PDF Tools</source>
      <translation>PDFツール</translation>
    </message>
    <message>
      <source>Button</source>
      <translation>ボタン</translation>
    </message>
    <message>
      <source>Text Field</source>
      <translation>テキストフィールド</translation>
    </message>
    <message>
      <source>Check Box</source>
      <translation>チェックボックス</translation>
    </message>
    <message>
      <source>Combo Box</source>
      <translation>コンボボックス</translation>
    </message>
    <message>
      <source>List Box</source>
      <translation>リストボックス</translation>
    </message>
    <message>
      <source>Insert PDF Fields</source>
      <translation>PDFフィールドを挿入</translation>
    </message>
    <message>
      <source>Insert PDF Annotations</source>
      <translation>PDF注釈を挿入</translation>
    </message>
    <message>
      <source>Text</source>
      <translation>テキスト</translation>
    </message>
    <message>
      <source>Link</source>
      <translation>リンク</translation>
    </message>
  </context>
  <context>
    <name>gtFileDialog</name>
    <message>
      <source>Choose the importer to use</source>
      <translation>使用するインポータを選択</translation>
    </message>
    <message>
      <source>Automatic</source>
      <translation>自動</translation>
    </message>
    <message>
      <source>Import Text Only</source>
      <translation>テキストのみインポート</translation>
    </message>
    <message>
      <source>Import text without any formatting</source>
      <translation>書式なしでテキストをインポート</translation>
    </message>
    <message>
      <source>Importer:</source>
      <translation>インポータ:</translation>
    </message>
    <message>
      <source>Encoding:</source>
      <translation>エンコーディング:</translation>
    </message>
  </context>
  <context>
    <name>gtImporterDialog</name>
    <message>
      <source>Choose the importer to use</source>
      <translation>使用するインポータを選択</translation>
    </message>
    <message>
      <source>Remember association</source>
      <translation>関連付けを記憶</translation>
    </message>
    <message>
      <source>Remember the file extension - importer association and do not ask again to select an importer for files of this type.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>nftdialog</name>
    <message>
      <source>New From Template</source>
      <translation>テンプレートから新規作成</translation>
    </message>
    <message>
      <source>&amp;Remove</source>
      <translation>削除(&amp;R)</translation>
    </message>
    <message>
      <source>&amp;Open</source>
      <translation>開く(&amp;O)</translation>
    </message>
    <message>
      <source>All</source>
      <translation>全て</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>名前</translation>
    </message>
    <message>
      <source>Page Size</source>
      <translation>ページサイズ</translation>
    </message>
    <message>
      <source>Colors</source>
      <translation>色</translation>
    </message>
    <message>
      <source>Description</source>
      <translation>詳細</translation>
    </message>
    <message>
      <source>Usage</source>
      <translation>使い方</translation>
    </message>
    <message>
      <source>Created with</source>
      <translation>作成ツール</translation>
    </message>
    <message>
      <source>Date</source>
      <translation>日付</translation>
    </message>
    <message>
      <source>Author</source>
      <translation>作者</translation>
    </message>
    <message>
      <source>Downloading Templates</source>
      <translation>テンプレートをダウンロード中</translation>
    </message>
    <message>
      <source>Document templates can be found at http://www.scribus.net/ in the Downloads section.</source>
      <translation>ドキュメントのテンプレートは http://www.scribus.net/ の Downloads セクションにあります.</translation>
    </message>
    <message>
      <source>Installing Templates</source>
      <translation>テンプレートをインストール中</translation>
    </message>
    <message>
      <source>Extract the package to the template directory ~/.scribus/templates for the current user or PREFIX/share/scribus/templates for all users in the system.</source>
      <translation>パッケージは、現在のユーザのテンプレートディレクトリ ~/.scribus/templates か、システム中の全てのユーザであれば PREFIX/share/scribus/templates に展開してください。</translation>
    </message>
    <message>
      <source>Preparing a template</source>
      <translation>テンプレートを準備中</translation>
    </message>
    <message>
      <source>Make sure images and fonts you use can be used freely. If fonts cannot be shared do not collect them when saving as a template.</source>
      <translation>使用している画像とフォントが自由に使用できるものかどうか確認してください。フォントを共有することができないのであれば、テンプレートとして保存する際に含めないようにしてください。</translation>
    </message>
    <message>
      <source>The template creator should also make sure that the Installing Templates section above applies to their templates as well. This means a user should be able to download a template package and be able to extract them to the template directory and start using them.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Removing a template</source>
      <translation>テンプレートを削除中</translation>
    </message>
    <message>
      <source>Removing a template from the New From Template dialog will only remove the entry from the template.xml, it will not delete the document files. A popup menu with remove is only shown if you have write access to the template.xml file.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Translating template.xml</source>
      <translation>template.xmlを変換中</translation>
    </message>
    <message>
      <source>Copy an existing template.xml to a file called template.lang_COUNTRY.xml (use the same lang code that is present in the qm file for your language), for example template.fi.xml for Finnish language template.xml. The copy must be located in the same directory as the original template.xml so Scribus can load it.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>satdialog</name>
    <message>
      <source>Save as Template</source>
      <translation>テンプレートとして保存</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>名前</translation>
    </message>
    <message>
      <source>Category</source>
      <translation>カテゴリ</translation>
    </message>
    <message>
      <source>Page Size</source>
      <translation>ページサイズ</translation>
    </message>
    <message>
      <source>Colors</source>
      <translation>色</translation>
    </message>
    <message>
      <source>Description</source>
      <translation>詳細</translation>
    </message>
    <message>
      <source>Usage</source>
      <translation>使い方</translation>
    </message>
    <message>
      <source>Author</source>
      <translation>作者</translation>
    </message>
    <message>
      <source>Email</source>
      <translation>Eメール</translation>
    </message>
    <message>
      <source>More Details</source>
      <translation>細かい詳細</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <source>Less Details</source>
      <translation>おおまかな詳細</translation>
    </message>
    <message>
      <source>Legal</source>
      <translation>リーガル</translation>
    </message>
    <message>
      <source>Letter</source>
      <translation>レター</translation>
    </message>
    <message>
      <source>Tabloid</source>
      <translation>タブロイド</translation>
    </message>
    <message>
      <source>landscape</source>
      <translation>横方向</translation>
    </message>
    <message>
      <source>portrait</source>
      <translation>縦方向</translation>
    </message>
    <message>
      <source>custom</source>
      <translation>カスタム</translation>
    </message>
  </context>
  <context>
    <name>tfDia</name>
    <message>
      <source>Create filter</source>
      <translation>フィルタを作成</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation>クリア(&amp;L)</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation>削除(&amp;D)</translation>
    </message>
    <message>
      <source>Choose a previously saved filter</source>
      <translation>前に保存したフィルタを選択</translation>
    </message>
    <message>
      <source>Give a name to this filter for saving</source>
      <translation>このフィルタに保存する名前をつける</translation>
    </message>
    <message>
      <source>Give a name for saving</source>
      <translation>保存する名前を指定</translation>
    </message>
  </context>
  <context>
    <name>tfFilter</name>
    <message>
      <source>Disable or enable this filter row</source>
      <translation>このフィルタ行を無効/有効に</translation>
    </message>
    <message>
      <source>Remove this filter row</source>
      <translation>このフィルタ行を削除</translation>
    </message>
    <message>
      <source>Add a new filter row</source>
      <translation>新規フィルタ行を追加</translation>
    </message>
    <message>
      <source>to</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>and</source>
      <translation>と</translation>
    </message>
    <message>
      <source>remove match</source>
      <translation>マッチしたものを削除する</translation>
    </message>
    <message>
      <source>do not remove match</source>
      <translation>マッチしたものを削除しない</translation>
    </message>
    <message>
      <source>words</source>
      <translation>ワード</translation>
    </message>
    <message>
      <source>Remove</source>
      <translation>削除</translation>
    </message>
    <message>
      <source>Replace</source>
      <translation>置換</translation>
    </message>
    <message>
      <source>Apply</source>
      <translation>適用</translation>
    </message>
    <message>
      <source>Value at the left is a regular expression</source>
      <translation>左の値は正規表現です</translation>
    </message>
    <message>
      <source>with</source>
      <translation>で</translation>
    </message>
    <message>
      <source>paragraph style</source>
      <translation>段落スタイル</translation>
    </message>
    <message>
      <source>all instances of</source>
      <translation>全てのインスタンス</translation>
    </message>
    <message>
      <source>all paragraphs</source>
      <translation>全ての段落</translation>
    </message>
    <message>
      <source>paragraphs starting with</source>
      <translation>以下で始まる段落</translation>
    </message>
    <message>
      <source>paragraphs with less than</source>
      <translation>未満の段落</translation>
    </message>
    <message>
      <source>paragraphs with more than</source>
      <translation>以上の段落</translation>
    </message>
  </context>
</TS>
