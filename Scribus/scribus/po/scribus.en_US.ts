<!DOCTYPE TS><TS>
<context>
    <name></name>
    <message>
        <source>getColorNames() -&gt; list

Returns a list containing the names of all defined colors in the document.
If no document is open, returns a list of the default document colors.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>newDocDialog() -&gt; bool

Displays the &quot;New Document&quot; dialog box. Creates a new document if the user
accepts the settings. Does not create a document if the user presses cancel.
Returns true if a new document was created.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>newDocument(size, margins, orientation, firstPageNumber,
                        unit, pagesType, firstPageOrder, numPages) -&gt; bool

Creates a new document and returns true if successful. The parameters have the
following meaning:

size = A tuple (width, height) describing the size of the document. You can
use predefined constants named PAPER_&lt;paper_type&gt; e.g. PAPER_A4 etc.

margins = A tuple (left, right, top, bottom) describing the document
margins

orientation = the page orientation - constants PORTRAIT, LANDSCAPE

firstPageNumer = is the number of the first page in the document used for
pagenumbering. While you&apos;ll usually want 1, it&apos;s useful to have higher
numbers if you&apos;re creating a document in several parts.

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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFillColor([&quot;name&quot;]) -&gt; string

Returns the name of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>moveObject(dx, dy [, &quot;name&quot;])

Moves the object &quot;name&quot; by dx and dy relative to its current position. The
distances are expressed in the current measurement unit of the document (see
UNIT constants). If &quot;name&quot; is not given the currently selected item is used.
If the object &quot;name&quot; belongs to a group, the whole group is moved.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setRedraw(bool)

Disables page redraw when bool = False, otherwise redrawing is enabled.
This change will persist even after the script exits, so make sure to call
setRedraw(True) in a finally: clause at the top level of your script.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createRect(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new rectangle on the current page and returns its name. The
coordinates are given in the current measurement units of the document
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object
because you need this name to reference that object in future. If &quot;name&quot;
is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setGradientFill(type, &quot;color1&quot;, shade1, &quot;color2&quot;, shade2, [&quot;name&quot;])

Sets the gradient fill of the object &quot;name&quot; to type. Color descriptions are
the same as for setFillColor() and setFillShade(). See the constants for
available types (FILL_&lt;type&gt;).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFontSize([&quot;name&quot;]) -&gt; float

Returns the font size in points for the text frame &quot;name&quot;. If this text
frame has some text selected the value assigned to the first character of
the selection is returned.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>messagebarText(&quot;string&quot;)

Writes the &quot;string&quot; into the Scribus message bar (status line). The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>importSVG(&quot;string&quot;)

The &quot;string&quot; must be a valid filename for a SVG image. The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>@default</name>
    <message>
        <source>getColor(&quot;name&quot;) -&gt; tuple

Returns a tuple (C, M, Y, K) containing the four color components of the
color &quot;name&quot; from the current document. If no document is open, returns
the value of the named color from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getColorAsRGB(&quot;name&quot;) -&gt; tuple

Returns a tuple (R,G,B) containing the three color components of the
color &quot;name&quot; from the current document, converted to the RGB color
space. If no document is open, returns the value of the named color
from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>changeColor(&quot;name&quot;, c, m, y, k)

Changes the color &quot;name&quot; to the specified CMYK value. The color value is
defined via four components c = Cyan, m = Magenta, y = Yellow and k = Black.
Color components should be in the range from 0 to 255.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deleteColor(&quot;name&quot;, &quot;replace&quot;)

Deletes the color &quot;name&quot;. Every occurence of that color is replaced by the
color &quot;replace&quot;. If not specified, &quot;replace&quot; defaults to the color
&quot;None&quot; - transparent.

deleteColor works on the default document colors if there is no document open.
In that case, &quot;replace&quot;, if specified, has no effect.

May raise NotFoundError if a named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>replaceColor(&quot;name&quot;, &quot;replace&quot;)

Every occurence of the color &quot;name&quot; is replaced by the color &quot;replace&quot;.

May raise NotFoundError if a named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>fileDialog(&quot;caption&quot;, [&quot;filter&quot;, &quot;defaultname&quot;, haspreview, issave, isdir]) -&gt; string with filename

Shows a File Open dialog box with the caption &quot;caption&quot;. Files are filtered
with the filter string &quot;filter&quot;. A default filename or file path can also
supplied, leave this string empty when you don&apos;t want to use it.  A value of
True for haspreview enables a small preview widget in the FileSelect box.  When
the issave parameter is set to True the dialog acts like a &quot;Save As&quot; dialog
otherwise it acts like a &quot;File Open Dialog&quot;. When the isdir parameter is True
the dialog shows and returns only directories. The default for all of the
opional parameters is False.

The filter, if specified, takes the form &apos;comment (*.type *.type2 ...)&apos;.
For example &apos;Images (*.png *.xpm *.jpg)&apos;.

Refer to the Qt-Documentation for QFileDialog for details on filters.

Example: fileDialog(&apos;Open input&apos;, &apos;CSV files (*.csv)&apos;)
Example: fileDialog(&apos;Save report&apos;, defaultname=&apos;report.txt&apos;, issave=True)
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>messageBox(&quot;caption&quot;, &quot;message&quot;,
    icon=ICON_NONE, button1=BUTTON_OK|BUTTONOPT_DEFAULT,
    button2=BUTTON_NONE, button3=BUTTON_NONE) -&gt; integer

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
result = messageBox(&apos;Script failed&apos;,
                    &apos;This script only works when you have a text frame selected.&apos;,
                    ICON_ERROR)
result = messageBox(&apos;Monkeys!&apos;, &apos;Something went ook! &lt;i&gt;Was it a monkey?&lt;/i&gt;&apos;,
                    ICON_WARNING, BUTTON_YES|BUTTONOPT_DEFAULT,
                    BUTTON_NO, BUTTON_IGNORE|BUTTONOPT_ESCAPE)

Defined button and icon constants:
BUTTON_NONE, BUTTON_ABORT, BUTTON_CANCEL, BUTTON_IGNORE, BUTTON_NO,
BUTTON_NOALL, BUTTON_OK, BUTTON_RETRY, BUTTON_YES, BUTTON_YESALL,
ICON_NONE, ICON_INFORMATION, ICON_WARNING, ICON_CRITICAL.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>valueDialog(caption, message [,defaultvalue]) -&gt; string

Shows the common &apos;Ask for string&apos; dialog and returns its value as a string
Parameters: window title, text in the window and optional &apos;default&apos; value.

Example: valueDialog(&apos;title&apos;, &apos;text in the window&apos;, &apos;optional&apos;)
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>newStyleDialog() -&gt; string

Shows &apos;Create new paragraph style&apos; dialog. Function returns real
style name or None when user cancels the dialog.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>newDoc(size, margins, orientation, firstPageNumber,
                   unit, facingPages, firstSideLeft) -&gt; bool

WARNING: Obsolete procedure! Use newDocument instead.

Creates a new document and returns true if successful. The parameters have the
following meaning:

    size = A tuple (width, height) describing the size of the document. You can
    use predefined constants named PAPER_&lt;paper_type&gt; e.g. PAPER_A4 etc.

    margins = A tuple (left, right, top, bottom) describing the document
    margins

    orientation = the page orientation - constants PORTRAIT, LANDSCAPE

    firstPageNumer = is the number of the first page in the document used for
    pagenumbering. While you&apos;ll usually want 1, it&apos;s useful to have higher
    numbers if you&apos;re creating a document in several parts.

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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>closeDoc()

Closes the current document without prompting to save.

May throw NoDocOpenError if there is no document to close
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>haveDoc() -&gt; bool

Returns true if there is a document open.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>openDoc(&quot;name&quot;)

Opens the document &quot;name&quot;.

May raise ScribusError if the document could not be opened.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>saveDoc()

Saves the current document with its current name, returns true if successful.
If the document has not already been saved, this may bring up an interactive
save file dialog.

If the save fails, there is currently no way to tell.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>saveDocAs(&quot;name&quot;)

Saves the current document under the new name &quot;name&quot; (which may be a full or
relative path).

May raise ScribusError if the save fails.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setInfo(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -&gt; bool

Sets the document information. &quot;Author&quot;, &quot;Info&quot;, &quot;Description&quot; are
strings.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setMargins(lr, rr, tr, br)

Sets the margins of the document, Left(lr), Right(rr), Top(tr) and Bottom(br)
margins are given in the measurement units of the document - see UNIT_&lt;type&gt;
constants.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setUnit(type)

Changes the measurement unit of the document. Possible values for &quot;unit&quot; are
defined as constants UNIT_&lt;type&gt;.

May raise ValueError if an invalid unit is passed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getUnit() -&gt; integer (Scribus unit constant)

Returns the measurement units of the document. The returned value will be one
of the UNIT_* constants:
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>loadStylesFromFile(&quot;filename&quot;)

Loads paragraph styles from the Scribus document at &quot;filename&quot; into the
current document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setDocType(facingPages, firstPageLeft)

Sets the document type. To get facing pages set the first parameter to
FACINGPAGES, to switch facingPages off use NOFACINGPAGES instead.  If you want
to be the first page a left side set the second parameter to FIRSTPAGELEFT, for
a right page use FIRSTPAGERIGHT.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>closeMasterPage()

Closes the currently active master page, if any, and returns editing
to normal. Begin editing with editMasterPage().
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>masterPageNames()

Returns a list of the names of all master pages in the document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>editMasterPage(pageName)

Enables master page editing and opens the named master page
for editing. Finish editing with closeMasterPage().
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createMasterPage(pageName)

Creates a new master page named pageName and opens it for
editing.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deleteMasterPage(pageName)

Delete the named master page.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFillTransparency([&quot;name&quot;]) -&gt; float

Returns the fill transparency of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFillBlendmode([&quot;name&quot;]) -&gt; integer

Returns the fill blendmode of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineColor([&quot;name&quot;]) -&gt; string

Returns the name of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineTransparency([&quot;name&quot;]) -&gt; float

Returns the line transparency of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineBlendmode([&quot;name&quot;]) -&gt; integer

Returns the line blendmode of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineWidth([&quot;name&quot;]) -&gt; integer

Returns the line width of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineJoin([&quot;name&quot;]) -&gt; integer (see contants)

Returns the line join style of the object &quot;name&quot;. If &quot;name&quot; is not given
the currently selected item is used.  The join types are:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineEnd([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line cap style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. The cap types are:
CAP_FLAT, CAP_ROUND, CAP_SQUARE
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineStyle([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. Line style constants are:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFillShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getImageScale([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple containing the scaling values of the image frame
&quot;name&quot;.  If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getImageName([&quot;name&quot;]) -&gt; string

Returns the filename for the image in the image frame. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getSize([&quot;name&quot;]) -&gt; (width,height)

Returns a (width, height) tuple with the size of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. The size is
expressed in the current measurement unit of the document - see UNIT_&lt;type&gt;
for reference.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getRotation([&quot;name&quot;]) -&gt; integer

Returns the rotation of the object &quot;name&quot;. The value is expressed in degrees,
and clockwise is positive. If &quot;name&quot; is not given the currently selected item
is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getAllObjects() -&gt; list

Returns a list containing the names of all objects on the current page.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPropertyCType(object, property, includesuper=True)

Returns the name of the C type of `property&apos; of `object&apos;. See getProperty()
for details of arguments.

If `includesuper&apos; is true, search inherited properties too.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPropertyNames(object, includesuper=True)

Return a list of property names supported by `object&apos;.
If `includesuper&apos; is true, return properties supported
by parent classes as well.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getProperty(object, property)

Return the value of the property `property&apos; of the passed `object&apos;.

The `object&apos; argument may be a string, in which case the named PageItem
is searched for. It may also be a PyCObject, which may point to any
C++ QObject instance.

The `property&apos; argument must be a string, and is the name of the property
to look up on `object&apos;.

The return value varies depending on the type of the property.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setProperty(object, property, value)

Set `property&apos; of `object&apos; to `value&apos;. If `value&apos; cannot be converted to a type
compatible with the type of `property&apos;, an exception is raised. An exception may
also be raised if the underlying setter fails.

See getProperty() for more information.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getChildren(object, ofclass=None, ofname=None, regexpmatch=False, recursive=True)

Return a list of children of `object&apos;, possibly restricted to children
of class named `ofclass&apos; or children named `ofname&apos;. If `recursive&apos; is true,
search recursively through children, grandchildren, etc.

See QObject::children() in the Qt docs for more information.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getChild(object, childname, ofclass=None, recursive=True)

Return the first child of `object&apos; named `childname&apos;, possibly restricting
the search to children of type name `ofclass&apos;. If `recursive&apos; is true,
search recursively through children, grandchildren, etc.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>moveObjectAbs(x, y [, &quot;name&quot;])

Moves the object &quot;name&quot; to a new location. The coordinates are expressed in
the current measurement unit of the document (see UNIT constants).  If &quot;name&quot;
is not given the currently selected item is used.  If the object &quot;name&quot;
belongs to a group, the whole group is moved.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>rotateObject(rot [, &quot;name&quot;])

Rotates the object &quot;name&quot; by &quot;rot&quot; degrees relatively. The object is
rotated by the vertex that is currently selected as the rotation point - by
default, the top left vertext at zero rotation. Positive values mean counter
clockwise rotation when the default rotation point is used. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>sizeObject(width, height [, &quot;name&quot;])

Resizes the object &quot;name&quot; to the given width and height. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getSelectedObject([nr]) -&gt; string

Returns the name of the selected object. &quot;nr&quot; if given indicates the number
of the selected object, e.g. 0 means the first selected object, 1 means the
second selected Object and so on.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>selectionCount() -&gt; integer

Returns the number of selected objects.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>selectObject(&quot;name&quot;)

Selects the object with the given &quot;name&quot;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deselectAll()

Deselects all objects in the whole document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>groupObjects(list)

Groups the objects named in &quot;list&quot; together. &quot;list&quot; must contain the names
of the objects to be grouped. If &quot;list&quot; is not given the currently selected
items are used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>unGroupObjects(&quot;name&quot;)

Destructs the group the object &quot;name&quot; belongs to.If &quot;name&quot; is not given the currently selected item is used.</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>loadImage(&quot;filename&quot; [, &quot;name&quot;])

Loads the picture &quot;picture&quot; into the image frame &quot;name&quot;. If &quot;name&quot; is
not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>scaleImage(x, y [, &quot;name&quot;])

Sets the scaling factors of the picture in the image frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. A number of 1
means 100 %.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>lockObject([&quot;name&quot;]) -&gt; bool

Locks the object &quot;name&quot; if it&apos;s unlocked or unlock it if it&apos;s locked.
If &quot;name&quot; is not given the currently selected item is used. Returns true
if locked.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isLocked([&quot;name&quot;]) -&gt; bool

Returns true if is the object &quot;name&quot; locked.  If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setScaleImageToFrame(scaletoframe, proportional=None, name=&lt;selection&gt;)

Sets the scale to frame on the selected or specified image frame to `scaletoframe&apos;.
If `proportional&apos; is specified, set fixed aspect ratio scaling to `proportional&apos;.
Both `scaletoframe&apos; and `proportional&apos; are boolean.

May raise WrongFrameTypeError.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFontNames() -&gt; list

Returns a list with the names of all available fonts.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getXFontNames() -&gt; list of tuples

Returns a larger font info. It&apos;s a list of the tuples with:
[ (Scribus name, Family, Real name, subset (1|0), embed PS (1|0), font file), (...), ... ]
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>renderFont(&quot;name&quot;, &quot;filename&quot;, &quot;sample&quot;, size, format=&quot;PPM&quot;) -&gt; bool

Creates an image preview of font &quot;name&quot; with given text &quot;sample&quot; and size.
If &quot;filename&quot; is not &quot;&quot;, image is saved into &quot;filename&quot;. Otherwise
image data is returned as a string. The optional &quot;format&quot; argument
specifies the image format to generate, and supports any format allowed
by QPixmap.save(). Common formats are PPM, JPEG, PNG and XPM.

May raise NotFoundError if the specified font can&apos;t be found.
May raise ValueError if an empty sample or filename is passed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLayers() -&gt; list

Returns a list with the names of all defined layers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setActiveLayer(&quot;name&quot;)

Sets the active layer to the layer named &quot;name&quot;.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getActiveLayer() -&gt; string

Returns the name of the current active layer.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>sentToLayer(&quot;layer&quot; [, &quot;name&quot;])

Sends the object &quot;name&quot; to the layer &quot;layer&quot;. The layer must exist.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLayerVisible(&quot;layer&quot;, visible)

Sets the layer &quot;layer&quot; to be visible or not. If is the visible set to false
the layer is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLayerLocked(&quot;layer&quot;, locked)

Sets the layer &quot;layer&quot; to be locked or not. If locked is set to
true the layer will be locked.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLayerOutlined&quot;layer&quot;, outline)

Sets the layer &quot;layer&quot; to be locked or not. If outline is set to
true the layer will be displayed outlined.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLayerFlow&quot;layer&quot;, flow)

Sets the layers &quot;layer&quot;  flowcontrol to flow. If flow is set to
true text in layers above this one will flow around objects on this layer.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLayerBlendmode&quot;layer&quot;, blend)

Sets the layers &quot;layer&quot;  blendmode to blend.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLayerTransparency&quot;layer&quot;, trans)

Sets the layers &quot;layer&quot;  transparency to trans.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is printable or not, a value of True means
that the layer &quot;layer&quot; can be printed, a value of False means that printing
the layer &quot;layer&quot; is disabled.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isLayerLocked(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is locked or not, a value of True means
that the layer &quot;layer&quot; is editable, a value of False means that the layer
&quot;layer&quot; is locked.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isLayerOutlined(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is outlined or not, a value of True means
that the layer &quot;layer&quot; is outlined, a value of False means that the layer
&quot;layer&quot; is normal.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isLayerFlow(&quot;layer&quot;) -&gt; bool

Returns whether text flows around objects on layer &quot;layer&quot;, a value of True means
that text flows around, a value of False means that the text does not flow around.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLayerBlendmode(&quot;layer&quot;) -&gt; int

Returns the &quot;layer&quot; layer blendmode,

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLayerTransparency(&quot;layer&quot;) -&gt; float

Returns the &quot;layer&quot; layer transparency,

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deleteLayer(&quot;layer&quot;)

Deletes the layer with the name &quot;layer&quot;. Nothing happens if the layer doesn&apos;t
exists or if it&apos;s the only layer in the document.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createLayer(layer)

Creates a new layer with the name &quot;name&quot;.

May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getGuiLanguage() -&gt; string

Returns a string with the -lang value.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createEllipse(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new ellipse on the current page and returns its name.
The coordinates are given in the current measurement units of the document
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object
because you need this name for further referencing of that object. If &quot;name&quot;
is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createImage(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new picture frame on the current page and returns its name. The
coordinates are given in the current measurement units of the document.
&quot;name&quot; should be a unique identifier for the object because you need this
name for further access to that object. If &quot;name&quot; is not given Scribus will
create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createText(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new text frame on the actual page and returns its name.
The coordinates are given in the actual measurement unit of the document (see
UNIT constants). &quot;name&quot; should be a unique identifier for the object because
you need this name for further referencing of that object. If &quot;name&quot; is not
given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createLine(x1, y1, x2, y2, [&quot;name&quot;]) -&gt; string

Creates a new line from the point(x1, y1) to the point(x2, y2) and returns
its name. The coordinates are given in the current measurement unit of the
document (see UNIT constants). &quot;name&quot; should be a unique identifier for the
object because you need this name for further access to that object. If
&quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createPolyLine(list, [&quot;name&quot;]) -&gt; string

Creates a new polyline and returns its name. The points for the polyline are
stored in the list &quot;list&quot; in the following order: [x1, y1, x2, y2...xn. yn].
The coordinates are given in the current measurement units of the document (see
UNIT constants). &quot;name&quot; should be a unique identifier for the object because
you need this name for further access to that object. If &quot;name&quot; is not given
Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don&apos;t group into points without leftovers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createPolygon(list, [&quot;name&quot;]) -&gt; string

Creates a new polygon and returns its name. The points for the polygon are
stored in the list &quot;list&quot; in the following order: [x1, y1, x2, y2...xn. yn].
At least three points are required. There is no need to repeat the first point
to close the polygon. The polygon is automatically closed by connecting the
first and the last point.  The coordinates are given in the current measurement
units of the document (see UNIT constants).  &quot;name&quot; should be a unique
identifier for the object because you need this name for further access to that
object. If &quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don&apos;t group into points without leftovers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createBezierLine(list, [&quot;name&quot;]) -&gt; string

Creates a new bezier curve and returns its name. The points for the bezier
curve are stored in the list &quot;list&quot; in the following order:
[x1, y1, kx1, ky1, x2, y2, kx2, ky2...xn. yn, kxn. kyn]
In the points list, x and y mean the x and y coordinates of the point and kx
and ky meaning the control point for the curve.  The coordinates are given in
the current measurement units of the document (see UNIT constants). &quot;name&quot;
should be a unique identifier for the object because you need this name for
further access to that object. If &quot;name&quot; is not given Scribus will create one
for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don&apos;t group into points without leftovers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createPathText(x, y, &quot;textbox&quot;, &quot;beziercurve&quot;, [&quot;name&quot;]) -&gt; string

Creates a new pathText by merging the two objects &quot;textbox&quot; and
&quot;beziercurve&quot; and returns its name. The coordinates are given in the current
measurement unit of the document (see UNIT constants). &quot;name&quot; should be a
unique identifier for the object because you need this name for further access
to that object. If &quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise NotFoundError if one or both of the named base object don&apos;t exist.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deleteObject([&quot;name&quot;])

Deletes the item with the name &quot;name&quot;. If &quot;name&quot; is not given the currently
selected item is deleted.
</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>objectExists([&quot;name&quot;]) -&gt; bool

Test if an object with specified name really exists in the document.
The optional parameter is the object name. When no object name is given,
returns True if there is something selected.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setStyle(&quot;style&quot; [, &quot;name&quot;])

Apply the named &quot;style&quot; to the object named &quot;name&quot;. If is no object name
given, it&apos;s applied on the selected object.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getAllStyles() -&gt; list

Return a list of the names of all paragraph styles in the current document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>duplicateObject([&quot;name&quot;]) -&gt; string

creates a Duplicate of the selected Object (or Selection Group).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>currentPage() -&gt; integer

Returns the number of the current working page. Page numbers are counted from 1
upwards, no matter what the displayed first page number of your document is.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>redrawAll()

Redraws all pages.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPageType() -&gt; integer

Returns the type of the Page, 0 means left Page, 1 is a middle Page and 2 is a right Page
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>savePageAsEPS(&quot;name&quot;)

Saves the current page as an EPS to the file &quot;name&quot;.

May raise ScribusError if the save failed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deletePage(nr)

Deletes the given page. Does nothing if the document contains only one page.
Page numbers are counted from 1 upwards, no matter what the displayed first
page number is.

May raise IndexError if the page number is out of range
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>gotoPage(nr)

Moves to the page &quot;nr&quot; (that is, makes the current page &quot;nr&quot;). Note that
gotoPage doesn&apos;t (curently) change the page the user&apos;s view is displaying, it
just sets the page that script commands will operates on.

May raise IndexError if the page number is out of range.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>pageCount() -&gt; integer

Returns the number of pages in the document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getHGuides() -&gt; list

Returns a list containing positions of the horizontal guides. Values are in the
document&apos;s current units - see UNIT_&lt;type&gt; constants.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setHGuides(list)

Sets horizontal guides. Input parameter must be a list of guide positions
measured in the current document units - see UNIT_&lt;type&gt; constants.

Example: setHGuides(getHGuides() + [200.0, 210.0] # add new guides without any lost
         setHGuides([90,250]) # replace current guides entirely
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getVGuides()

See getHGuides.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setVGuides()

See setHGuides.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPageSize() -&gt; tuple

Returns a tuple with page dimensions measured in the document&apos;s current units.
See UNIT_&lt;type&gt; constants and getPageMargins()
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPageItems() -&gt; list

Returns a list of tuples with items on the current page. The tuple is:
(name, objectType, order) E.g. [(&apos;Text1&apos;, 4, 0), (&apos;Image1&apos;, 2, 1)]
means that object named &apos;Text1&apos; is a text frame (type 4) and is the first at
the page...
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPageMargins()

Returns the page margins as a (top, left, right, bottom) tuple in the current
units. See UNIT_&lt;type&gt; constants and getPageSize().
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFillColor(&quot;color&quot;, [&quot;name&quot;])

Sets the fill color of the object &quot;name&quot; to the color &quot;color&quot;. &quot;color&quot;
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFillTransparency(transparency, [&quot;name&quot;])

Sets the fill transparency of the object &quot;name&quot; to transparency
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFillBlendmode(blendmode, [&quot;name&quot;])

Sets the fill blendmode of the object &quot;name&quot; to blendmode
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineColor(&quot;color&quot;, [&quot;name&quot;])

Sets the line color of the object &quot;name&quot; to the color &quot;color&quot;. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineTransparency(transparency, [&quot;name&quot;])

Sets the line transparency of the object &quot;name&quot; to transparency
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineBlendmode(blendmode, [&quot;name&quot;])

Sets the line blendmode of the object &quot;name&quot; to blendmode
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineWidth(width, [&quot;name&quot;])

Sets line width of the object &quot;name&quot; to &quot;width&quot;. &quot;width&quot; must be in the
range from 0.0 to 12.0 inclusive, and is measured in points. If &quot;name&quot; is not
given the currently selected item is used.

May raise ValueError if the line width is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineShade(shade, [&quot;name&quot;])

Sets the shading of the line color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full color intensity). If &quot;name&quot; is not given the currently selected item
is used.

May raise ValueError if the line shade is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineJoin(join, [&quot;name&quot;])

Sets the line join style of the object &quot;name&quot; to the style &quot;join&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for join - JOIN_&lt;type&gt;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineEnd(endtype, [&quot;name&quot;])

Sets the line cap style of the object &quot;name&quot; to the style &quot;cap&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for &quot;cap&quot; - CAP_&lt;type&gt;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineStyle(style, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the style &quot;style&quot;. If &quot;name&quot;
is not given the currently selected item is used. There are predefined
constants for &quot;style&quot; - LINE_&lt;style&gt;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFillShade(shade, [&quot;name&quot;])

Sets the shading of the fill color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full Color intensity). If &quot;name&quot; is not given the currently selected
Item is used.

May raise ValueError if the fill shade is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setCornerRadius(radius, [&quot;name&quot;])

Sets the corner radius of the object &quot;name&quot;. The radius is expressed
in points. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if the corner radius is negative.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setMultiLine(&quot;namedStyle&quot;, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the named style &quot;namedStyle&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the line style doesn&apos;t exist.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFont([&quot;name&quot;]) -&gt; string

Returns the font name for the text frame &quot;name&quot;. If this text frame
has some text selected the value assigned to the first character
of the selection is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getTextLength([&quot;name&quot;]) -&gt; integer

Returns the length of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getTextLines([&quot;name&quot;]) -&gt; integer

Returns the number of lines of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot;. If this text frame has some text
selected, the selected text is returned. All text in the frame, not just
currently visible text, is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getAllText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot; and of all text frames which are
linked with this frame. If this textframe has some text selected, the selected
text is returned. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineSpacing([&quot;name&quot;]) -&gt; float

Returns the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; expressed in
points. If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getColumnGap([&quot;name&quot;]) -&gt; float

Returns the column gap size of the text frame &quot;name&quot; expressed in points. If
&quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getColumns([&quot;name&quot;]) -&gt; integer

Gets the number of columns of the text frame &quot;name&quot;. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setText(&quot;text&quot;, [&quot;name&quot;])

Sets the text of the text frame &quot;name&quot; to the text of the string &quot;text&quot;.
Text must be UTF8 encoded - use e.g. unicode(text, &apos;iso-8859-2&apos;). See the FAQ
for more details. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFont(&quot;font&quot;, [&quot;name&quot;])

Sets the font of the text frame &quot;name&quot; to &quot;font&quot;. If there is some text
selected only the selected text is changed.  If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError if the font cannot be found.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFontSize(size, [&quot;name&quot;])

Sets the font size of the text frame &quot;name&quot; to &quot;size&quot;. &quot;size&quot; is treated
as a value in points. If there is some text selected only the selected text is
changed. &quot;size&quot; must be in the range 1 to 512. If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError for a font size that&apos;s out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineSpacing(size, [&quot;name&quot;])

Sets the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; to &quot;size&quot;.
&quot;size&quot; is a value in points. If &quot;name&quot; is not given the currently selected
item is used.

May throw ValueError if the line spacing is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setColumnGap(size, [&quot;name&quot;])

Sets the column gap of the text frame &quot;name&quot; to the value &quot;size&quot;. If
&quot;name&quot; is not given the currently selected item is used.

May throw ValueError if the column gap is out of bounds (must be positive).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setColumns(nr, [&quot;name&quot;])

Sets the number of columns of the text frame &quot;name&quot; to the integer &quot;nr&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May throw ValueError if number of columns is not at least one.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setTextAlignment(align, [&quot;name&quot;])

Sets the text alignment of the text frame &quot;name&quot; to the specified alignment.
If &quot;name&quot; is not given the currently selected item is used. &quot;align&quot; should
be one of the ALIGN_ constants defined in this module - see dir(scribus).

May throw ValueError for an invalid alignment constant.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>selectText(start, count, [&quot;name&quot;])

Selects &quot;count&quot; characters of text in the text frame &quot;name&quot; starting from the
character &quot;start&quot;. Character counting starts at 0. If &quot;count&quot; is zero, any
text selection will be cleared.  If &quot;name&quot; is not given the currently
selected item is used.

May throw IndexError if the selection is outside the bounds of the text.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deleteText([&quot;name&quot;])

Deletes any text in the text frame &quot;name&quot;. If there is some text selected,
only the selected text will be deleted. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setTextColor(&quot;color&quot;, [&quot;name&quot;])

Sets the text color of the text frame &quot;name&quot; to the color &quot;color&quot;. If there
is some text selected only the selected text is changed. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setTextStroke(&quot;color&quot;, [&quot;name&quot;])

Set &quot;color&quot; of the text stroke. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setTextShade(shade, [&quot;name&quot;])

Sets the shading of the text color of the object &quot;name&quot; to &quot;shade&quot;. If
there is some text selected only the selected text is changed. &quot;shade&quot; must
be an integer value in the range from 0 (lightest) to 100 (full color
intensity). If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>linkTextFrames(&quot;fromname&quot;, &quot;toname&quot;)

Link two text frames. The frame named &quot;fromname&quot; is linked to the
frame named &quot;toname&quot;. The target frame must be an empty text frame
and must not link to or be linked from any other frames already.

May throw ScribusException if linking rules are violated.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>unlinkTextFrames(&quot;name&quot;)

Remove the specified (named) object from the text frame flow/linkage. If the
frame was in the middle of a chain, the previous and next frames will be
connected, eg &apos;a-&gt;b-&gt;c&apos; becomes &apos;a-&gt;c&apos; when you unlinkTextFrames(b)&apos;

May throw ScribusException if linking rules are violated.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>traceText([&quot;name&quot;])

Convert the text frame &quot;name&quot; to outlines. If &quot;name&quot; is not given the
currently selected item is used.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>textOverflows([&quot;name&quot;, nolinks]) -&gt; integer

Returns the actual number of overflowing characters in text frame &quot;name&quot;.
If is nolinks set to non zero value it takes only one frame - it doesn&apos;t
use text frame linking. Without this parameter it search all linking chain.

May raise WrongFrameTypeError if the target frame is not an text frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setPDFBookmark(&quot;toggle&quot;, [&quot;name&quot;])

Sets wether (toggle = 1) the text frame &quot;name&quot; is a bookmark nor not.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isPDFBookmark([&quot;name&quot;]) -&gt; bool

Returns true if the text frame &quot;name&quot; is a PDF bookmark.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>progressReset()

Cleans up the Scribus progress bar previous settings. It is called before the
new progress bar use. See progressSet.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>progressTotal(max)

Sets the progress bar&apos;s maximum steps value to the specified number.
See progressSet.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>progressSet(nr)

Set the progress bar position to &quot;nr&quot;, a value relative to the previously set
progressTotal. The progress bar uses the concept of steps; you give it the
total number of steps and the number of steps completed so far and it will
display the percentage of steps that have been completed. You can specify the
total number of steps with progressTotal(). The current number of steps is set
with progressSet(). The progress bar can be rewound to the beginning with
progressReset(). [based on info taken from Trolltech&apos;s Qt docs]
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setCursor()

[UNSUPPORTED!] This might break things, so steer clear for now.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>docChanged(bool)

Enable/disable save icon in the Scribus icon bar and the Save menu item. It&apos;s
useful to call this procedure when you&apos;re changing the document, because Scribus
won&apos;t automatically notice when you change the document using a script.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>zoomDocument(double)

Zoom the document in main GUI window. Actions have whole number
values like 20.0, 100.0, etc. Zoom to Fit uses -100 as a marker.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>defineColor(&quot;name&quot;, c, m, y, k)

Defines a new color &quot;name&quot;. The color Value is defined via four components:
c = Cyan, m = Magenta, y = Yellow and k = Black. Color components should be in
the range from 0 to 255.

May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getCornerRadius([&quot;name&quot;]) -&gt; integer

Returns the corner radius of the object &quot;name&quot;. The radius is
expressed in points. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPosition([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple with the position of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
The position is expressed in the actual measurement unit of the document
- see UNIT_&lt;type&gt; for reference.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>rotateObjectAbs(rot [, &quot;name&quot;])

Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positive values
mean counter clockwise rotation. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLayerPrintable(&quot;layer&quot;, printable)

Sets the layer &quot;layer&quot; to be printable or not. If is the
printable set to false the layer won&apos;t be printed.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isLayerVisible(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame &quot;name&quot;.
Text must be UTF encoded (see setText() as reference) The first character has an
index of 0. Inserting text at position -1 appends it to the frame. If &quot;name&quot; is
not given the currently selected Item is used.

May throw IndexError for an insertion out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>About</name>
    <message>
        <source>About Scribus %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 %2 %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%3-%2-%1 %4 %5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Using Ghostscript version %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Ghostscript version available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Scribus Version %1&lt;/b&gt;&lt;p&gt;%2&lt;br/&gt;%3 %4&lt;br/&gt;%5&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Build ID:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Development Team:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Contributions from:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mac OS&amp;#174; X Aqua Port:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Windows&amp;#174; Port:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Official Documentation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Other Documentation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tango Project Icons:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A&amp;uthors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Official Translations and Translators:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Previous Translation Contributors:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Translations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Homepage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wiki</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bugs and Feature Requests</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mailing List</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Online</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Updates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for &amp;Updates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This panel shows the version, build date and compiled in library support in Scribus. The C-C-T-F equates to C=littlecms C=CUPS T=TIFF support F=Fontconfig support. Last Letter is the renderer C=cairo or A=libart Missing library support is indicated by a *. This also indicates the version of Ghostscript which Scribus has detected. The Windows version does not use fontconfig or CUPS libraries.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for updates to Scribus. No data from your machine will be transferred off it.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OS/2&amp;#174;/eComStation&amp;#8482; Port:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AboutPlugins</name>
    <message>
        <source>Filename:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Version:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enabled:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Release Date:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Description:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Author(s):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copyright:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>License:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AboutPluginsBase</name>
    <message>
        <source>Scribus: About Plug-ins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ActionManager</name>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Re&amp;vert to Saved</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Collect for O&amp;utput...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Get Text...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Append &amp;Text...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Get Image...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save &amp;Text...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as &amp;EPS...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as P&amp;DF...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document &amp;Setup...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>P&amp;references...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print Previe&amp;w</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Item Action Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paste (&amp;Absolute)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Deselect All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit Image...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;olors...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Patterns...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S&amp;tyles...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Paragraph Styles...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Line Styles...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Master Pages...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;JavaScripts...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Other...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Center</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Block</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Forced</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;%1 %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Underline &amp;Words</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Strike Through</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;All Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Small &amp;Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Su&amp;perscript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Su&amp;bscript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <comment>type effect</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S&amp;hadow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Image Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Tabulators...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Multiple Duplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Ungroup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Is &amp;Locked</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Si&amp;ze is Locked</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Printing Enabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Flip Horizontally</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Flip Vertically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lower to &amp;Bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Raise to &amp;Top</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Send to Patterns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Attributes...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>More Info...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Update Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Adjust Frame to Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Extended Image Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Low Resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Normal Resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Full Resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Is PDF &amp;Bookmark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Attach Text to Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Detach Text from Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Combine Polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Split &amp;Polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Image Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <comment>Convert to oulines</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Polygon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Frame...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Glyph...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Insert...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Im&amp;port...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Move...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Apply Master Page...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Convert to Master Page...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Manage &amp;Guides...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Manage Page Properties...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;50%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;75%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;100%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;200%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preview Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Thumbnails</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Layer Indicators</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Text Frame Columns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;Text Chain</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Control Characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Rulers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rulers relative to Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <comment>Document Outline Palette</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Layers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Arrange Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Measurements</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Action &amp;History</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preflight &amp;Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Align and Distribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>P&amp;DF Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>T&amp;able</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Freehand Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rotate Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom in or out</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom in</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom out</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit Contents of Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Link Text Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unlink Text Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Eye Dropper</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy Item Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit the text with the Story Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Image Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Polygon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Bezier Curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Freehand Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert PDF Push Button</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert PDF Text Field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert PDF Check Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert PDF Combo Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert PDF List Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Text Annotation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Link Annotation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Manage Pictures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Hyphenate Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dehyphenate Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Generate Table Of Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cascade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Tile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;About Scribus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;About Plug-ins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>About &amp;Qt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Toolti&amp;ps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus &amp;Manual...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Toggle Palettes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Toggle Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Smart &amp;Hyphen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Non Breaking Dash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Non Breaking &amp;Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page &amp;Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Frame Break</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Column Break</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copyright</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Registered Trademark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Trademark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Solidus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bullet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Middle Dot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Em Dash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>En Dash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Figure Dash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quotation Dash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apostrophe</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Straight Double</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Single Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Single Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Double Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Double Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Single Reversed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Double Reversed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Single Left Guillemet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Single Right Guillemet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Double Left Guillemet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Double Right Guillemet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Low Single Comma</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Low Double Comma</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CJK Single Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CJK Single Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CJK Double Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CJK Double Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>En Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Em Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Thin Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Thick Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mid Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hair Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Smart Hyphen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Non Breaking Dash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Non Breaking Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Page Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>ff</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>fi</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>fl</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>ffi</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>ffl</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>ft</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>st</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sticky Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Fit to Height</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fit to Width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Bleeds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Zero Width Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zero Width NB Space</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AlignDistributeBase</name>
    <message>
        <source>Align and Distribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Selected Guide:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Relative To:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Distance:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AlignDistributePalette</name>
    <message>
        <source>Align and Distribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Relative to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>First Selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Last Selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align bottoms</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align right sides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Center on vertical axis</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align left sides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Center on horizontal axis</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align tops</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Selected Guide:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distribute right sides equidistantly</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distribute bottoms equidistantly</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distribute centers equidistantly horizontally</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distribute left sides equidistantly</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distribute centers equidistantly vertically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distribute tops equidistantly</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Distance:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distribute the items with the distance specified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None Selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y: %1%2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X: %1%2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align right sides of items to left side of anchor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align left sides of items to right side of anchor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align tops of items to bottom of anchor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align bottoms of items to top of anchor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make horizontal gaps between items equal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make horizontal gaps between items equal to the value specified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make vertical gaps between items equal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make vertical gaps between items equal to the value specified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make horizontal gaps between items and sides of page equal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make vertical gaps between items and the top and bottom of page margins equal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make horizontal gaps between items and sides of page margins equal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make vertical gaps between items and the top and bottom of page equal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distribute</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AlignSelect</name>
    <message>
        <source>Align Text Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align Text Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align Text Center</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align Text Justified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align Text Forced Justified</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Annot</name>
    <message>
        <source>Field Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Button</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>List Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tooltip:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font for use with PDF 1.3:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Border</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Thin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Style:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Solid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dashed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Underline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Beveled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Inset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Other</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Read Only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Required</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do Not Export Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Visibility:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Visible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hidden</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Print</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No View</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Appearance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text for Button Down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text for Roll Over</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Icons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use Icons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pressed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Roll Over</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Icon Placement...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Highlight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <comment>highlight</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Push</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Multi-Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Limit of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do Not Scroll</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do Not Spell Check</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check Style:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cross</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Diamond</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Circle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Star</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Square</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default is Checked</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Editable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <comment>action</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>JavaScript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Go To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Submit Form</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset Form</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Event:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mouse Up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mouse Down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mouse Enter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mouse Exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>On Focus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>On Blur</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Script:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Submit to URL:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Submit Data as HTML</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import Data from:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Destination</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To File:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Field is formatted as:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plain</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Percentage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Date</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number Format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Decimals:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use Currency Symbol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Prepend Currency Symbol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Formatting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Percent Format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Date Format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Time Format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom Scripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Format:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keystroke:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value is not validated</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value must be greater than or equal to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>and less or equal to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom validate script:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Validate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value is not calculated</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value is the</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>sum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>product</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>average</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>minimum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>maximum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>of the following fields:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pick...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom calculation script:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Calculate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Flag is ignored for PDF 1.3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter a comma separated list of fields here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You need at least the Icon for Normal to use Icons for Buttons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Example:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selection Change</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Images (*.tif *.png *.jpg *.xpm);;PostScript (*.eps *.epsi);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Annota</name>
    <message>
        <source>Annotation Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Link</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>External Link</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>External Web-Link</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Destination</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;X-Pos</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF-Documents (*.pdf);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ApplyMasterPageDialog</name>
    <message>
        <source>Apply Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Master Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Current &amp;page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Even pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+E</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>O&amp;dd pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;All pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Within range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+W</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply the selected master page to even, odd or all pages within the following range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>to</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ArrowChooser</name>
    <message>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Barcode</name>
    <message>
        <source>&amp;Barcode Generator...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus frontend for Pure Postscript Barcode Writer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>BarcodeGenerator</name>
    <message>
        <source>12 or 13 digits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>8 digits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>11 or 12 digits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>7 or 8 digits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>5 digits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>2 digits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>For ISBN-10 the data should contain 9 or 10 <byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/>digits separated appropriately by dash characters.
For ISBN-13 the data should contain 12 or 13 <byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/>digits separated appropriately by dash characters.
If the last digit is not given then the ISBN <byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/>checkdigit is calculated automatically.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Variable number of characters, digits and any of the symbols -. *$/+%.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Variable number of ASCII characters and special function symbols, starting with the appropriate start character for the initial character set. UCC/EAN-128s must have a mandatory FNC 1 symbol immediately following the start character.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Variable number of digits and any of the symbols -$:/.+ABCD.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Variable number of digits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Variable number of digits. An ITF-14 is 14 characters and does not have a check digit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Variable number of digits and capital letters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Variable number of hexadecimal characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error opening file: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Barcode incomplete</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>BarcodeGeneratorBase</name>
    <message>
        <source>Barcode Creator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Barcode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Co&amp;de:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select one of the available barcode type here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The numeric representation of the code itself. See the help message below</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset the barcode samples</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Include text in barcode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+I</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>If checked, there will be numbers in the barcode too</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Guard whitespace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+G</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Draw arrows to be sure of space next the code</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>I&amp;nclude checksum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Generate and include a checksum in barcode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Incl&amp;ude checksum digit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Include the checksum digit in the barcode text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+B</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Background color - under the code lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of the lines in barcode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+T</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of the text and numbers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hints and help is shown here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preview of the result. 72dpi sample.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Biblio</name>
    <message>
        <source>Main</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copied Items</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a Scrapbook Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scrapbook (*.scs)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a scrapbook file to import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rename</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy To:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move To:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Entry</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; is not unique.
Please choose another.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create a new scrapbook page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Load an existing scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save the selected scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import an scrapbook file from Scribus &lt;=1.3.2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close the selected scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>BookMView</name>
    <message>
        <source>Move Bookmark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Bookmark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bookmarks</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>BookPalette</name>
    <message>
        <source>Bookmarks</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ButtonIcon</name>
    <message>
        <source>Icon Placement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layout:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Caption only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Icon only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Caption below Icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Caption above Icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Caption right to Icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Caption left to Icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Caption overlays Icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scale:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Always</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>When Icon is too small</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>When Icon is too big</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Never</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scale How:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Proportional</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Non Proportional</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CMSPrefs</name>
    <message>
        <source>&amp;Activate Color Management</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>System Profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;RGB Pictures:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;CMYK Pictures:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;RGB Solid Colors:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;CMYK Solid Colors:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Monitor:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>P&amp;rinter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rendering Intents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pictures:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sol&amp;id Colors:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sim&amp;ulate Printer on the Screen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Convert all colors to printer space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mark Colors out of &amp;Gamut</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use &amp;Blackpoint Compensation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default color profile for imported CMYK images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default color profile for imported RGB images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default color profile for solid RGB colors on the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default color profile for solid CMYK colors on the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color profile that you have generated or received from the manufacturer.
This profile should be specific to your monitor and not a generic profile (i.e. sRGB).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color profile for your printer model from the manufacturer.
This profile should be specific to your printer and not a generic profile (i.e. sRGB).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default rendering intent for solid colors. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default rendering intent for images. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable &apos;soft proofing&apos; of how your document colors will print,
based on the chosen printer profile.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Simulate a full color managed environment :
all colors, rgb or cmyk, are converted to printer color space.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Method of showing colors on the screen which may not print properly.
This requires very accurate profiles and serves only as a warning.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Black Point Compensation is a method of improving contrast in photos.
It is recommended that you enable this if you have photos in your document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CMYKChoose</name>
    <message>
        <source>Edit Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color &amp;Model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>RGB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Web Safe RGB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Is Spot Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Is Registration Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Old</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>HSV-Colormap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>M:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>K:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choosing this will enable printing this on all plates. Registration colors are used for printer marks such as crop marks, registration marks and the like. These are not typically used in the layout itself.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choosing this will make this color a spot color, thus creating another spot when creating plates or separations. This is used most often when a logo or other color needs exact representation or cannot be replicated with CMYK inks. Metallic and fluorescent inks are good examples which cannot be easily replicated with CMYK inks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dynamic Color Bars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Static Color Bars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>R:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>G:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>B:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>If color management is enabled, a triangle warning indicator is a warning the the color maybe outside of the color gamut of the current printer profile selected. What this means is the color may not print exactly as indicated on screen. More hints about gamut warnings are in the online help under Color Management.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You cannot create a color named &quot;%1&quot;.
It is a reserved name for transparent color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The name of the color already exists,
please choose another one.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CStylePBase</name>
    <message>
        <source>Form1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Parent</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CWDialog</name>
    <message>
        <source>Merging colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color %1 exists already!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color %1 appended.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Now opening the color manager.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Merging</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to find the requested color. You have probably selected black, gray or white. There is no way to process this color.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CWDialogBase</name>
    <message>
        <source>Color Wheel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Click the wheel to get the base color. Its color model depends on the chosen tab.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>M:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>K:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>RGB:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>RGB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>R:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>G:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>B:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CMYK:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select one of the methods to create a color scheme. Refer to documentation for more information.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Angle:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Difference between the selected value and the counted ones. Refer to documentation for more information.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preview:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vision Defect Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample color scheme.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colors of your chosen color scheme.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Merge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Merge created colors into the document colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+R</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Replace created colors in the document colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Leave colors untouched</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Simulate common vision defects here. Select type of the defect.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Scheme Method</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>HSV:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>HSV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>H:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>V:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Result Colors</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CharSelect</name>
    <message>
        <source>Font:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Character Class:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert the characters at the cursor in the text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete the current selection(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You can see a thumbnail if you press and hold down the right mouse button. The Insert key inserts a Glyph into the Selection below and the Delete key removes the last inserted one</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Full Character Set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Basic Latin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Latin-1 Supplement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Latin Extended-A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Latin Extended-B</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>General Punctuation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Super- and Subscripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Currency Symbols</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Letterlike Symbols</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number Forms</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arrows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mathematical Operators</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Box Drawing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Block Elements</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Geometric Shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Miscellaneous Symbols</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dingbats</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Small Form Variants</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ligatures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Specials</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Greek</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Greek Extended</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cyrillic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cyrillic Supplement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arabic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arabic Extended A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arabic Extended B</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hebrew</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus Char Palette (*.ucp);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enhanced Palette</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quick Palette</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hide Enhanced</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a filename to open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error reading file %1 - file is corrupted propably.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a filename to save under</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot write file %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clean the Palette?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You will clean all characters from this palette. Are you sure?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Character Palette</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CharTable</name>
    <message>
        <source>Delete</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CheckDocument</name>
    <message>
        <source>Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Problems found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transparency used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Blendmode used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer &quot;%1&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Free Objects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Problems found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Ignore Errors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preflight Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Items</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Problems</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Current Profile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check again</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Glyphs missing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text overflow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object is not on a Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Missing Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image resolution below %1 DPI, currently %2 x %3 DPI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image resolution above %1 DPI, currently %2 x %3 DPI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object has transparency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object is a PDF Annotation or Field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object is a placed PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image is GIF</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ChooseStyles</name>
    <message>
        <source>Choose Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Available Styles</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CollectForOutput</name>
    <message>
        <source>Choose a Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Collecting...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot collect all files for output for file:
%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot collect the file: 
%1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ColorManager</name>
    <message>
        <source>Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Remove Unused</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Sets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Current Color Set:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save Color Set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a color set to load</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save the current color set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove unused colors from current document&apos;s color set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import colors to the current set from an existing document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create a new color within the current set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit the currently selected color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make a copy of the currently selected color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete the currently selected color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make the current colorset the default color set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>If color management is enabled, a triangle warning indicator is a warning the the color maybe outside of the color gamut of the current printer profile selected.What this means is the color may not print exactly as indicated on screen. Spot colors are indicated by a red circle. Registration colors will have a registration mark next to the color. More hints about gamut warnings are in the online help under Color Management.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;Other Files (*.eps *.epsi *.ps *.ai);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;Other Files (*.eps *.epsi *.ps *.ai);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The file %1 does not contain any new colors.
If the file was an EPS try to import it with File -&gt; Import</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ColorWheel</name>
    <message>
        <source>Monochromatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Analogous</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Complementary</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Split Complementary</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Triadic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tetradic (Double Complementary)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Base Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Monochromatic Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Monochromatic Dark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>1st. Analogous</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>2nd. Analogous</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>1st. Split</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>2nd. Split</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>3rd. Split</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>4th. Split</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>1st. Triadic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>2nd. Triadic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>1st. Tetradic (base opposite)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>2nd. Tetradic (angle)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>3rd. Tetradic (angle opposite)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ColorWheelPlugin</name>
    <message>
        <source>&amp;Color Wheel...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color setting helper</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color selector with color theory included.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CommonStrings</name>
    <message>
        <source>&amp;Apply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <comment>color name</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom</source>
        <comment>CommonStrings, custom page size</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Single Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Double Sided</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>3-Fold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>4-Fold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Monday</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tuesday</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wednesday</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Thursday</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Friday</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturday</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sunday</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>January</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>February</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>March</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>April</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>May</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>June</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>July</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>August</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>September</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>October</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>November</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>December</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Left Page</source>
        <comment>Left page location</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Middle</source>
        <comment>Middle page location</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Middle Left</source>
        <comment>Middle Left page location</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Middle Right</source>
        <comment>Middle Right page location</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Right Page</source>
        <comment>Right page location</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal</source>
        <comment>Default single master page</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal Left</source>
        <comment>Default left master page</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal Middle</source>
        <comment>Default middle master page</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal Right</source>
        <comment>Default right master page</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal Vision</source>
        <comment>Color Blindness - Normal Vision</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Protanopia (Red)</source>
        <comment>Color Blindness - Red Color Blind</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Deuteranopia (Green)</source>
        <comment>Color Blindness - Greed Color Blind</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tritanopia (Blue)</source>
        <comment>Color Blindness - Blue Color Blind</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Full Color Blindness</source>
        <comment>Color Blindness - Full Color Blindness</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom: </source>
        <comment>Custom Tab Fill Option</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Cpalette</name>
    <message>
        <source>Transparency Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Offsets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X-Scale:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y-Scale:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rotation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Angle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X2:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y2:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move Vector</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontal Gradient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vertical Gradient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Diagonal Gradient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cross Diagonal Gradient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Radial Gradient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Free linear Gradient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Free radial Gradient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Blend Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Darken</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lighten</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Multiply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Screen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Overlay</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hard Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Soft Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Difference</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exclusion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Dodge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Burn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Luminosity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit Line Color Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit Fill Color Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal or gradient fill method</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set the transparency for the color selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move the start of the gradient vector with the left mouse button pressed and move the end of the gradient vector with the right mouse button pressed</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CreateRangeBase</name>
    <message>
        <source>Create Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of Pages in Document:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Doc Page Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Basic Range Selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add a Range of Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Consecutive Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>From:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Comma Separated List</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Even Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Odd Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add To Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Range of Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move &amp;Up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move &amp;Down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>De&amp;lete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Advanced Reordering</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Group Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample Page Order:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Order</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CsvDialog</name>
    <message>
        <source>CSV Importer Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Field delimiter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(TAB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value delimiter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <comment>delimiter</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>First row is a header</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CupsOptions</name>
    <message>
        <source>Printer Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Even Pages only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Odd Pages only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>N-Up Printing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page per Sheet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pages per Sheet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Option</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This panel displays various CUPS options when printing. The exact parameters available will depend on your printer driver. You can confirm CUPS support by selecting Help &gt; About. Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support. Missing library support is indicated by a *</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CurveWidget</name>
    <message>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Curve Files (*.scu);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot write the file: 
%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Inverts the curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resets the curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Switches between linear and cubic interpolation of the curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Loads a curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saves this curve</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CustomFDialog</name>
    <message>
        <source>&amp;Compress File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Include Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Include ICC Profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Moves to your Document Directory.
This can be set in the Preferences.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DeferredTask</name>
    <message>
        <source>Cancelled by user</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DelColor</name>
    <message>
        <source>Delete Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Replace With:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DelPages</name>
    <message>
        <source>Delete Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete From:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>to:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DelStyle</name>
    <message>
        <source>Delete Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete Style:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Replace With:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Style</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DocIm</name>
    <message>
        <source>Importing failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Importing Word document failed 
%1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DocInfos</name>
    <message>
        <source>Document Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Title:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Author:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Keywords:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Descri&amp;ption:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>P&amp;ublisher:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Contributors:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dat&amp;e:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>T&amp;ype:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>F&amp;ormat:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Identi&amp;fier:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Source:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Relation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Co&amp;verage:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ri&amp;ghts:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documen&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Further &amp;Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The person or organisation primarily responsible for making the content of the document. This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A name given to the document. This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An account of the content of the document. This field is for a brief description or abstract of the document. It is embedded in the PDF on export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The topic of the content of the document. This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A person or organisation responsible for making the document available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A person or organisation responsible for making contributions to the content of the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A date associated with an event in the life cycle of the document, in YYYY-MM-DD format, as per ISO 8601</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The nature or genre of the content of the document, eg. categories, functions, genres, etc</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting. RFC2045,RFC2046 for MIME types are also useful here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An unambiguous reference to the document within a given context such as ISBN or URI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A reference to a document from which the present document is derived, eg. ISBN or URI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The language in which the content of the document is written, usually a ISO-639 language code optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A reference to a related document, possibly using a formal identifier such as a ISBN or URI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The extent or scope of the content of the document, possibly including location, time and jurisdiction ranges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Information about rights held in and over the document, eg. copyright, patent or trademark</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DocSections</name>
    <message>
        <source>Add a page numbering section to the document. The new section will be added after the currently selected section.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete the currently selected section.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Name:&lt;/b&gt; Optional name for section eg. Index&lt;br/&gt;&lt;b&gt;Shown:&lt;/b&gt; Select to show the page numbers in this section if there is one or more text frames setup to do so.&lt;br/&gt;&lt;b&gt;From:&lt;/b&gt; The page index for this section to start at.&lt;br/&gt;&lt;b&gt;To:&lt;/b&gt; The page index for this section to stop at.&lt;br/&gt;&lt;b&gt;Style:&lt;/b&gt; Select the page number style to be used.&lt;br/&gt;&lt;b&gt;Start:&lt;/b&gt; The index within the Style&apos;s range to star at. Eg. If Start=2 and Style=a,b,c, ..., the numbers will begin at b. For the first section in the document this replaces the older First Page Number in the new file window.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>1, 2, 3, ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>i, ii, iii, ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>I, II, III, ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>a, b, c, ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A, B, C, ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Number Out Of Bounds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The value you have entered is outside the range of page numbers in the current document (%1-%2).</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DocSectionsBase</name>
    <message>
        <source>Document Sections</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>From</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Start</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DocumentItemAttributes</name>
    <message>
        <source>None</source>
        <comment>relationship</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Relates To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Is Parent Of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Is Child Of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <comment>auto add</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <comment>types</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Boolean</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Integer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Real Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>String</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DocumentItemAttributesBase</name>
    <message>
        <source>Document Item Attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Relationship</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Relationship To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Auto Add To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Druck</name>
    <message>
        <source>Setup Printer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print Destination</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Options...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;File:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A&amp;lternative Printer Command</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Co&amp;mmand:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print &amp;All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print Current Pa&amp;ge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print &amp;Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>N&amp;umber of Copies:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print Separations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print in Color if Available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print in Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Black</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostScript Level 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostScript Level 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostScript Level 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mirror Page(s) Horizontal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mirror Page(s) Vertical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set Media Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clip to Page Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply Under Color Removal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Convert Spot Colors to Process Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Force Overprint Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply ICC Profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Advanced Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preview...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Print</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use an alternative print manager, such as kprinter or gtklp, to utilize additional printing options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sets the PostScript Level.
 Setting to Level 1 or 2 can create huge files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis.UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables global Overprint Mode for this document, overrides object settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allows you to embed ICC profiles in the print stream when color management is enabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This enables you to explicitely set the media size of the PostScript file. Not recommended unless requested by your printer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to retrieve printer settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostScript Files (*.ps);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Printer Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Crop Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bleed Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Registration Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Bars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Offset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bleed Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Top:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use Document Bleeds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bleeds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Inside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Outside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>EPSPlug</name>
    <message>
        <source>Analyzing PostScript:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Group%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Importing File:
%1
failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Generating Items</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Converting of %1 images failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Importing: %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>EditStyle</name>
    <message>
        <source>Edit Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Character</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distances</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fixed Linespacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatic Linespacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align to Baseline Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Drop Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Lines:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance from Text:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tabulators and Indentation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preview of the Paragraph Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name of your paragraph style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Determines the overall height, in line numbers, of the Drop Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Determines the gap between the DropCaps and the Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spacing above the paragraph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spacing below the paragraph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Offset to baseline of characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Click to select the line spacing mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Toggles sample text of this paragraph style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name of the style is not unique</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select for easier reading of light colored text styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Auto</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Editor</name>
    <message>
        <source>Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save and Exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Exit without Saving</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Get Field Names</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>JavaScripts (*.js);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>EffectsDialog</name>
    <message>
        <source>Image Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Options:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Brightness:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Contrast:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Radius:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Posterize:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color 1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color 2:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color 3:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color 4:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Available Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Blur</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Brightness</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colorize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Duotone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tritone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quadtone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Contrast</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Curves</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Posterize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sharpen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&gt;&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;&lt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Effects in use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ExportBitmap</name>
    <message>
        <source>File exists. Overwrite?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>exists already. Overwrite?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ExportForm</name>
    <message>
        <source>Choose a Export Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export as Image(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Export to Directory:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image &amp;Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Current page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;All pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image size in Pixels</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export a range of pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export all pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export only the current page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resolution of the Images
Use 72 dpi for Images intended for the Screen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Size of the images. 100% for no changes, 200% for two times larger etc.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The quality of your images - 100% is the best, 1% the lowest quality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Available export formats</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The output directory - the place to store your images.
Name of the export file will be &apos;documentname-pagenumber.filetype&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change the output directory</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ExtImageProps</name>
    <message>
        <source>Extended Image Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Darken</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lighten</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Luminosity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Multiply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Screen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Overlay</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hard Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Soft Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Difference</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exclusion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Dodge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Burn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Blend Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Don&apos;t use any Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paths</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FDialogPreview</name>
    <message>
        <source>Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resolution:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DPI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>RGB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Duotone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colorspace:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Title:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Title</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Author:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus Document</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FileLoader</name>
    <message>
        <source>Some fonts used by this document have been substituted:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> was replaced by: </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FontPrefs</name>
    <message>
        <source>Available Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Substitutions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Additional Paths</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Name</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use Font</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Embed in PostScript</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Subset</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Path to Font File</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Available Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Replacement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font &amp;Substitutions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A&amp;dd...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Additional &amp;Paths</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font search paths can only be set in File &gt; Preferences, and only when there is no document currently open. Close any open documents, then use File &gt; Preferences &gt; Fonts to change the font search path.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FontPreview</name>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Append selected font into Style, Font menu</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Leave preview</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Typing the text here provides quick searching in the font names. Searching is case insensitive. You can provide a common wild cards (*, ?, [...]) in your phrase. Examples: t* will list all fonts starting with t or T. *bold* will list all fonts with word bold, bolder etc. in the name.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Start searching</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Size of the selected font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample will be shown after key release</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>User</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>System</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FontPreviewBase</name>
    <message>
        <source>Fonts Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Quick Search:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Doc</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Subset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Access</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample text to display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Se&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+T</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset the text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FontPreviewPlugin</name>
    <message>
        <source>&amp;Font Preview...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Preview dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sorting, searching and browsing available fonts.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FontReplaceDialog</name>
    <message>
        <source>Font Substitution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This document contains some fonts that are not installed on your system, please choose a suitable replacement for them. Cancel will stop the document from loading.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Original Font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Substitution Font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make these substitutions permanent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancels these font substitutions and stops loading the document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enabling this tells Scribus to use these replacements for missing fonts permanently in all future layouts. This can be reverted or changed in Edit &gt; Preferences &gt; Fonts.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>If you select OK, then save, these substitutions are made permanent in the document.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>GradientEditor</name>
    <message>
        <source>Add, change or remove color stops here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Position:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>GuideManager</name>
    <message>
        <source>Edit Guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter a position:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Guide</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>GuideManagerBase</name>
    <message>
        <source>Manage Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Single</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontals</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D&amp;elete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+E</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Verticals</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A&amp;dd</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>De&amp;lete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Lock Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Appl&amp;y to All Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+Y</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Column/Row</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Number:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>U&amp;se Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Refer To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>M&amp;argins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S&amp;election</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Nu&amp;mber:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use &amp;Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+G</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Misc</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete all guides from the current page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete all guides from the current document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete Guides from Current &amp;Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete Guides from &amp;All Pages</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>HelpBrowser</name>
    <message>
        <source>Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Link</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Relevance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Se&amp;arch</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>De&amp;lete All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Book&amp;marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>E&amp;xit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Find...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Find &amp;Next</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Find &amp;Previous</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add Bookmark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D&amp;elete All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus Online Help</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Searching is case unsensitive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sorry, no manual available! Please see: http://docs.scribus.net for updated docs
and www.scribus.net for downloads.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Find</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search Term:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Bookmark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Bookmark&apos;s Title:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>HyAsk</name>
    <message>
        <source>Possible Hyphenation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Accept</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Skip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>HySettings</name>
    <message>
        <source>&amp;Hyphenation Suggestions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hyphenate Text Automatically &amp;During Typing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Smallest Word:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Consecutive Hyphenations &amp;Allowed:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables automatic hyphenation of your text while typing.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Length of the smallest word to be hyphenated.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Maximum number of Hyphenations following each other.
A value of 0 means unlimited hyphenations.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ImageInfoDialog</name>
    <message>
        <source>Image Info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>General Info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Date / Time:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Has Embedded Profile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Profile Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Has Embedded Paths:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Has Layers:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>EXIF Info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Artist:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Comment:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>User Comment:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Camera Model:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Camera Manufacturer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Description:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copyright:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scanner Model:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scanner Manufacturer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exposure time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Aperture:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>ISO equiv.:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ImportPSPlugin</name>
    <message>
        <source>Import &amp;EPS/PS...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Imports EPS Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Imports most EPS files into the current document,
converting their vector data into Scribus objects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>InsPage</name>
    <message>
        <source>Insert Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>before Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>after Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>at End</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Master Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Master Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move Objects with their Page</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>InsertAFrame</name>
    <message>
        <source>&lt;b&gt;Insert a text frame&lt;/b&gt;&lt;br/&gt;A text frame allows you to enter any text in a defined position with the formatting you choose. You may select a text file on the Options tab if you want to immediately import a document into the frame. Scribus supports a wide variety of importable format from plain text to OpenOffice.org.&lt;br/&gt;Your text may be edited and formatted on the page directly or in the simple Story Editor.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Insert an image frame&lt;/b&gt;&lt;br/&gt;An image frame allows you to place an image onto your page. Various image effects may be applied or combined including transparencies, brightness, posterisation that allow retouching or the creation of interesting visual results. Image scaling and shaping is performed with the Properties Palette.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>InsertAFrameBase</name>
    <message>
        <source>Insert A Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>T&amp;ype</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+T</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Image Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+I</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>T&amp;able</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Location</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Placement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Current Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selecting this will place the frame only on the current page.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Range of Pages:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selecting this will place frame on the selected range. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Position of Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Top Left of Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selecting this puts the frame on the top left with postion 0,0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Top Left of Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selecting this places the frame in the upper left of the page margins defined in your doc setup.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom Position:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set the dimensions wished below in the X: Y: dialog below.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Same as the Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Same as the Page Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Source Image:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Select File...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>There are no options for this type of frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Source Document:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Columns:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Link Created Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Top Left of Bleed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selecting this places the frame in the upper left of the page bleed defined in your doc setup.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Same as the Bleed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Same as the Imported Image</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>InsertTable</name>
    <message>
        <source>Insert Table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of rows:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of columns:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>JavaDocs</name>
    <message>
        <source>Edit JavaScripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Adds a new Script, predefines a function with the same name. If you want to use this script as an &quot;Open Action&quot; script be sure not to change the name of the function.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New Script:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you really want to delete this script?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LayerPalette</name>
    <message>
        <source>Opacity:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete Layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you want to delete all objects on this layer too?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Blend Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Darken</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lighten</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Multiply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Screen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Overlay</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hard Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Soft Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Difference</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exclusion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Dodge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Burn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Luminosity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add a new layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Duplicates the current layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Raise layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lower layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of the Layer Indicator - Each layer has a color assigned to display on the canvas when layer indicators are enabled. You can double click to edit the color. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make Layer Visible - Uncheck to hide the layer from the display </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print Layer - Uncheck to disable printing. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lock or Unlock Layer - Unchecked is unlocked </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text flows around objects in lower Layers - Enabling this forces text frames to flow around other objects, even in layers below</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Outline Mode - Toggles the &apos;wireframe&apos; display of objects to speed the display of very complex objects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name of the Layer - Double clicking on the name of a layer enabled editing</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LineFormate</name>
    <message>
        <source>Edit Line Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you really want to delete this style?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LineStyleWBase</name>
    <message>
        <source>LineStyleWBase</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LineStyleWidget</name>
    <message>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add a new line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove a line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>End style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Join style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line shade</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LoadSavePlugin</name>
    <message>
        <source>All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LoremManager</name>
    <message>
        <source>Select Lorem Ipsum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Author:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Get More:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>XML File:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lorem Ipsum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paragraphs:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Standard Lorem Ipsum</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MarginDialog</name>
    <message>
        <source>Manage Page Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move Objects with their Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Other Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Master Page:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MarginWidget</name>
    <message>
        <source>Preset Layouts:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply settings to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Document Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Master Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply the margin changes to all existing pages in the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply the margin changes to all existing master pages in the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Printer Margins...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import the margins for the selected page size from the available printers.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Top:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bleeds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Inside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Outside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page. If a double-sided, 3 or 4-fold layout is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page. If a double-sided, 3 or 4-fold layout is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MasterPagesPalette</name>
    <message>
        <source>Edit Master Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Duplicate the selected master page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete the selected master page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add a new master page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import master pages from another document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you really want to delete this master page?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New MasterPage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Master Page %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to Rename Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The Normal page is not allowed to be renamed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rename Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Name:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Mdup</name>
    <message>
        <source>Multiple Duplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Number of Copies:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Horizontal Shift:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Vertical Shift:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Measurements</name>
    <message>
        <source>pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distances</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X2:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y2:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DX:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DY:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Angle:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Length:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MergeDoc</name>
    <message>
        <source>Import Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;From Document:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Chan&amp;ge...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import Page(s):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens import where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> from 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create Page(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Before Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>After Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>At End</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> from %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MissingFont</name>
    <message>
        <source>Missing Font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>instead</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ModeToolBar</name>
    <message>
        <source>Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MovePages</name>
    <message>
        <source>Move Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move Page(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of copies:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Before Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>After Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>At End</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move Page(s):</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Mpalette</name>
    <message>
        <source>Transparency Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fixed Linespacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatic Linespacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align to Baseline Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;X1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X&amp;2:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y&amp;1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Y2:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between columns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Column width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.&lt;br/&gt;Please choose another.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X, Y, &amp;Z</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Geometry</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Basepoint:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shape:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Blend Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Darken</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lighten</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Multiply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Screen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Overlay</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hard Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Soft Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Difference</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exclusion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Dodge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Burn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>R&amp;ound
Corners:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance of Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To&amp;p:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>T&amp;abulators...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Path Text Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Start Offset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance from Curve:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill Rule</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Even-Odd</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Non Zero</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text &amp;Flow Around Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use Frame &amp;Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use &amp;Bounding Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Use Contour Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>St&amp;yle:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Actual X-DPI:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Actual Y-DPI:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X-Sc&amp;ale:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y-Scal&amp;e:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scale &amp;To Frame Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>P&amp;roportional</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Extended Image Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Input Profile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rendering Intent:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Left Point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>End Points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Basepoint:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>T&amp;ype of Line:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Start Arrow:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>End Arrow:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ed&amp;ges:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Endings:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cell Lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line at Top</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line at the Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line at the Right </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line at Bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Overprinting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Knockout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Overprint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name of selected object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontal position of current basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vertical position of current basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Height</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rotation of object at current basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point from which measurements or rotation angles are referenced</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select top left for basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select top right for basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select bottom left for basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select bottom right for basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select center for basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Group the selected objects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Destroys the selected group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Flip Horizontal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Flip Vertical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move one level up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move one level down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move to front</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move to back</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Indicates the level the object is on, 0 means the object is at the bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lock or unlock the object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lock or unlock the size of the object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable or disable printing of the object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Disable text flow from lower frames around object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use the frame shape for text flow of text frames below the object.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use the bounding box, which is always rectangular, instead of the frame&apos;s shape for text flow of text frames below the object. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Offset to baseline of characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scaling height of characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of text stroke and/or drop shadow, depending which is chosen.If both are chosen, then they share the same color.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of selected text. If Outline text decoration is enabled, this color will be the fill color. If Drop Shadow Text is enabled, then this will be the top most color.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Right to Left Writing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change settings for left or end points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pattern of line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Thickness of line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type of line joins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type of line end</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line style of current object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose the shape of frame...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit shape of the frame...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set radius of corner rounding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of columns in text frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Switches between Gap or Column width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance of text from top of frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance of text from bottom of frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance of text from left of frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance of text from right of frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit tab settings of text frame...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow the image to be a different size to the frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontal offset of image within frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vertical offset of image within frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resize the image horizontally</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resize the image vertically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keep the X and Y scaling the same</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keep the aspect ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make the image fit within the size of the frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use image proportions rather than those of the frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Source profile of the image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rendering intent for the image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Auto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>When chosen, the contour line can be edited with the Edit Shape Tool on the palette further above. When edited via the shape palette, this becomes a second separate line originally based on the frame&apos;s shape for text flow of text frames below the object. T</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Click and hold down to select the line spacing mode.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MultiLine</name>
    <message>
        <source>Edit Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.&lt;br/&gt;Please choose another.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MultiProgressDialogBase</name>
    <message>
        <source>Progress</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Overall Progress:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MultipleDuplicate</name>
    <message>
        <source>&amp;Horizontal Shift:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Vertical Shift:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Horizontal Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Vertical Gap:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MultipleDuplicateBase</name>
    <message>
        <source>Multiple Duplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;By Number of Copies</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Number of Copies:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Shift Created Items By</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create &amp;Gap Between Items Of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+G</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Horizontal Shift:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Vertical Shift:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>By &amp;Rows &amp;&amp; Columns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vertical Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontal Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of Rows:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of Columns:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MyPlugin</name>
    <message>
        <source>My &amp;Plugin</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MyPluginImpl</name>
    <message>
        <source>Scribus - My Plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The plugin worked!</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NewDoc</name>
    <message>
        <source>New Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open &amp;Existing Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open Recent &amp;Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not show this dialog again</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document page size, either a standard size or a custom size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Orientation of the document&apos;s pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Width of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Height of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Initial number of pages of the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create text frames automatically when new pages are added</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of columns to create in automatically created text frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between automatically created columns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>N&amp;umber of Pages:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Default Unit:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Automatic Text Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>First Page is:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Document Settings After Creation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document Layout</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NewFromTemplatePlugin</name>
    <message>
        <source>New &amp;from Template...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Load documents with predefined layout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Start a document from a template made by other users or yourself (f.e. for documents you have a constant style).</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NodePalette</name>
    <message>
        <source>Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Absolute Coordinates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit &amp;Contour Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Reset Contour Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;End Editing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move Control Points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move Control Points Independently</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move Control Points Symmetrical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset Control Points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset this Control Point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open a Polygon or Cuts a Bezier Curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close this Bezier Curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mirror the Path Horizontally</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mirror the Path Vertically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shear the Path Vertically Up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shear the Path Vertically Down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rotate the Path Counter-Clockwise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rotate the Path Clockwise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shrink the Size of the Path by shown %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enlarge the Size of the Path by shown %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reduce the Size of the Path by the shown value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enlarge the Size of the Path by the shown value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Angle of Rotation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>% to Enlarge or Shrink By</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value to Enlarge or Shrink By</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Activate Contour Line Editing Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset the Contour Line to the Original Shape of the Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>When checked use coordinates relative to the page, otherwise coordinates are relative to the Object.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OODPlug</name>
    <message>
        <source>This document does not seem to be an OpenOffice Draw file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Group%1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OODrawImportPlugin</name>
    <message>
        <source>Import &amp;OpenOffice.org Draw...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Imports OpenOffice.org Draw Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Imports most OpenOffice.org Draw files into the current document, converting their vector data into Scribus objects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OpenDocument 1.0 Draw</source>
        <comment>Import/export format name</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OpenOffice.org 1.x Draw</source>
        <comment>Import/export format name</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This file contains some unsupported features</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OdtDialog</name>
    <message>
        <source>OpenDocument Importer Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Overwrite Paragraph Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enabling this will overwrite existing styles in the current Scribus document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Merge Paragraph Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document&apos;s styles are named differently.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make these settings the default and do not prompt again when importing an OASIS OpenDocument.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OldScribusFormat</name>
    <message>
        <source>Scribus Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus 1.2.x Document</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OneClick</name>
    <message>
        <source>Origin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Length:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Angle:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remember Values</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OutlineValues</name>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Linewidth</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PDFExportDialog</name>
    <message>
        <source>Save as PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>O&amp;utput to File:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Output one file for eac&amp;h page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This enables exporting one individually named PDF file for each page in the document. Page numbers are added automatically. This is most useful for imposing PDF for commercial printing.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The save button will be disabled if you are trying to export PDF/X-3 and the info string is missing from the PDF/X-3 tab.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 does not exists and will be created, continue?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot create directory: 
%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PDFToolBar</name>
    <message>
        <source>PDF Tools</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PDFlib</name>
    <message>
        <source>Saving PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exporting Master Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exporting Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exporting Items on Current Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Date:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PPreview</name>
    <message>
        <source>Print Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable &amp;Antialiasing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display Trans&amp;parency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Display CMYK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Y</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;K</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Separation Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Black</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mirror Page(s) Horizontal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mirror Page(s) Vertical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clip to Page Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print in Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Under Color Removal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Force Overprint Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Convert Spot Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply ICC Profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scaling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fit to Width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fit to Height</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fit to Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Provides a more pleasant view of Type 1 fonts, TrueType Fonts, OpenType Fonts, EPS, PDF and vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shows transparency and transparent items in your document. Requires Ghostscript 7.07 or later</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Gives a print preview using simulations of generic CMYK inks, instead of RGB colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis. UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resize the scale of the page.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables global Overprint Mode for this document, overrides object settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allows you to embed ICC profiles in the print stream when color management is enabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable/disable the C (Cyan) ink plate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable/disable the M (Magenta) ink plate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable/disable the Y (Yellow) ink plate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable/disable the K (Black) ink plate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PSLib</name>
    <message>
        <source>Processing Master Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exporting Page:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PStyleWBase</name>
    <message>
        <source>Form1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Parent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distances and Alignment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Drop Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Parent&apos;s Drop Cap Status</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tabulators and Indentation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ch&amp;aracter Style</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PageItem</name>
    <message>
        <source>Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PathText</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PageItemAttributes</name>
    <message>
        <source>None</source>
        <comment>relationship</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Relates To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Is Parent Of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Is Child Of</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PageItemAttributesBase</name>
    <message>
        <source>Page Item Attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Relationship</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Relationship To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PageLayouts</name>
    <message>
        <source>First Page is:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document Layout</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PagePalette</name>
    <message>
        <source>Double sided</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Middle Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Drag pages or master pages onto the trashbin to delete them</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Here are all your master pages. To create a new page, drag a master page to the page view below</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arrange Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Available Master Pages:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document Pages:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PageSelector</name>
    <message>
        <source>%1 of %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 of %2</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PatternDialog</name>
    <message>
        <source>Choose a Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Loading Patterns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PicSearchBase</name>
    <message>
        <source>Result</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search Results for: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Select</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PicStatus</name>
    <message>
        <source>Manage Pictures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Status</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Case insensitive search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The filesystem will be searched for case insensitive file names when you check this on. Remember it is not default on most operating systems except MS Windows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set a new location for the selected items. Useful when you may have moved the document but not the images.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Missing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Goto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select a base directory for search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus - Image Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The search failed: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No images named &quot;%1&quot; were found.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select a base directory for your selected rows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show thumbnails</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show/hide image thumbnails</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PixmapExportPlugin</name>
    <message>
        <source>Save as &amp;Image...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export As Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exports selected pages as bitmap images.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error writing the output file(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export successful</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PluginManager</name>
    <message>
        <source>Cannot find plugin</source>
        <comment>plugin manager</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>unknown error</source>
        <comment>plugin manager</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot find symbol (%1)</source>
        <comment>plugin manager</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugin: loading %1</source>
        <comment>plugin manager</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>There is a problem loading %1 of %2 plugins. %3 This is probably caused by some kind of dependency issue or old plugins existing in your install directory. If you clean out your install directory and reinstall and this still occurs, please report it on bugs.scribus.net.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>init failed</source>
        <comment>plugin load error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>unknown plugin type</source>
        <comment>plugin load error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugin: %1 loaded</source>
        <comment>plugin manager</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugin: %1 failed to load: %2</source>
        <comment>plugin manager</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugin: %1 initialized ok </source>
        <comment>plugin manager</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugin: %1 failed post initialization</source>
        <comment>plugin manager</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PluginManagerPrefsGui</name>
    <message>
        <source>Plugin Manager</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>How to run</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Load it?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugin ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You need to restart the application to apply the changes.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PolygonProps</name>
    <message>
        <source>Polygon Properties</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PolygonWidget</name>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped), a positive value will make it convex</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Preferences</name>
    <message>
        <source>Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>General</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Typography</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hyphenator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preflight Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Management</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document Item Attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>External Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Miscellaneous</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Printer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PrefsDialogBase</name>
    <message>
        <source>Export...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Defaults</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All preferences can be reset here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply all changes without closing the dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export current preferences into file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save Preferences</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PrefsManager</name>
    <message>
        <source>PostScript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Migrate Old Scribus Settings?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus has detected existing Scribus 1.2 preferences files.
Do you want to migrate them to the new Scribus version?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not open preferences file &quot;%1&quot; for writing: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Writing to preferences file &quot;%1&quot; failed: QIODevice status code %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to open prefs file &quot;%1&quot;: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to read prefs XML from &quot;%1&quot;: %2 at line %3, col %4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Postscript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF 1.3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF 1.4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF/X-3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error Writing Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus was not able to save its preferences:&lt;br&gt;%1&lt;br&gt;Please check file and directory permissions and available disk space.</source>
        <comment>scribus app error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error Loading Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus was not able to load its preferences:&lt;br&gt;%1&lt;br&gt;Default settings will be loaded.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PresetLayout</name>
    <message>
        <source>None</source>
        <comment>layout type</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Gutenberg</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Magazine</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fibonacci</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Golden Mean</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Nine Parts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You can select a predefined page layout here. &apos;None&apos; leave margins as is, Gutenberg sets margins classically. &apos;Magazine&apos; sets all margins for same value. Leading is Left/Inside value.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PythonConsole</name>
    <message>
        <source>&amp;Open...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Run</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Run As &amp;Console</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save Output...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus Python Console</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This is derived from standard Python console so it contains some limitations esp. in the case of whitespaces. Please consult Scribus manual for more informations.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line: %1 Column: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Script Console</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Write your commands here. A selection is processed as script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Output of your script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Python Scripts (*.py *.PY)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open Python Script File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save the Python Commands in File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Files (*.txt)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save Current Output</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QColorDialog</name>
    <message>
        <source>Hu&amp;e:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Sat:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Val:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Red:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Green:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bl&amp;ue:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A&amp;lpha channel:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Basic colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Custom colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Define Custom Colors &gt;&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add to Custom Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select color</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <source>Copy or Move a File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Read: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Write: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File &amp;name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File &amp;type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>One directory up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Date</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Look &amp;in:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Back</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create New Folder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>List View</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Detail View</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preview File Info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preview File Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Read-write</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Read-only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Write-only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Inaccessible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Symlink to File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Symlink to Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Symlink to Special</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dir</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Special</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save As</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Rename</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>R&amp;eload</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sort by &amp;Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sort by &amp;Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sort by &amp;Date</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Unsorted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sort</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;hidden files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>the file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>the directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>the symlink</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Are you sure you wish to delete %1 &quot;%2&quot;?&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Folder 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Folder %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Find Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Directories</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1
File not found.
Check path and filename.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Files (*.*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select a Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Directory:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QFontDialog</name>
    <message>
        <source>&amp;Font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font st&amp;yle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stri&amp;keout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scr&amp;ipt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select Font</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QLineEdit</name>
    <message>
        <source>Clear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QMainWindow</name>
    <message>
        <source>Line up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Customize...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <source>&lt;h3&gt;About Qt&lt;/h3&gt;&lt;p&gt;This program uses Qt version %1.&lt;/p&gt;&lt;p&gt;Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p&gt;&lt;p&gt;Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br&gt;Qt is also available for embedded devices.&lt;/p&gt;&lt;p&gt;Qt is a Trolltech product. See &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt; for more information.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Font %1 is broken (no Face), discarding it</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font %1 cannot be read, no embedding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Importing text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arabic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Albanian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Basque</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bulgarian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Breton</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Chinese</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Croatian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Czech</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Danish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dzongkha</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>English</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>English (British)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Esperanto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Estonian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>German</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>German (Trad.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>French</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Galician</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Greek</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Latin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Icelandic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Indonesian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Italian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Japanese</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Korean</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Luxembourgish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Norwegian (Bokm&#xc3;&#xa5;l)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Norwegian (Nnyorsk)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Norwegian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Polish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Portuguese</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Portuguese (BR)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Romanian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Russian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spanish (Latin)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Serbian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Thai</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turkish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ukranian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Welsh</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus Crash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus crashes due to Signal #%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus crashes due to the following exception : %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Master Page </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>4A0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>2A0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quarto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Foolscap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Letter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Govt. Letter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Legal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ledger</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Executive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Post</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Crown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Large Post</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Demy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Royal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Elephant</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Double Demy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quad Demy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>STMT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>B</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>E</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Comm10E</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DLE</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not open output file %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Output stream not writeable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Verification of settings failed: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not open input file %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to read settings XML:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 (line %2 col %3)</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to read settings XML: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>null root node</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;pdfVersion&gt; invalid</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>found %1 &lt;%2&gt; nodes, need 1.</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>unexpected null &lt;%2&gt; node</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>node &lt;%1&gt; not an element</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>element &lt;%1&gt; lacks `value&apos; attribute</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>element &lt;%1&gt; value must be `true&apos; or `false&apos;</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>element &lt;lpiSettingsEntry&gt; lacks `name&apos; attribute</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exporting PostScript File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Printing File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Black</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Creating Font Cache</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font %1 is broken, discarding it</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to load font %1 - font type unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Font found, checking...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font %1 has broken glyph %2 (charcode %3)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Modified Font found, checking...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font %1 loaded from %2(%3)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font %1(%2) is duplicate of %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Loading font %1 (found using fontconfig)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to load a font - freetype2 couldn&apos;t find the font file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reading Font Cache</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Writing updated Font Cache</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 may be corrupted : missing or wrong resolution tags</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The Font(s):
%1 are not available.
They have been replaced by &quot;Courier&quot;
Therefore the image may be not correct</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 may be corrupted : missing resolution tags</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus Development Version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You are running a development version of Scribus 1.3.x. The document you are working with was created in Scribus 1.2.x.  Saving the current file under 1.3.x renders it unable to be edited in Scribus 1.2.x versions. To preserve the ability to edit in 1.2.x, save this file under a different name and further edit the newly named file and the original will be untouched. Are you sure you wish to proceed with this operation?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;reate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The changes to your document have not been saved and you have requested to revert them. Do you wish to continue?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Initializing...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> cm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> c</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>mm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>in</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>p</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>cm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>c</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Points (pt)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Millimeters (mm)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Centimeters (cm)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cicero (c)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File exists</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A file named &apos;%1&apos; already exists.&lt;br/&gt;Do you want to replace it with the file you are saving?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>page</source>
        <comment>page export</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Freetype2 library not available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font %1(%2) is broken</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font %1 has broken glyph %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font %1 is broken (read stream), no embedding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>extracting face %1 from font %2 (offset=%3, nTables=%4)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>memcpy header: %1 %2 %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>table &apos;%1&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>memcpy table: %1 %2 %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>memcpy offset: %1 %2 %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>font %1 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>size %1 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>+style </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>+color </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>+underline </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>-underline </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>+strikeout </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>-strikeout </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>+shadow </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>-shadow </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>+outline </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>-outline </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>+tracking %1 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>-tracking </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>+baseline %1 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>+stretch </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>parent= %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Barcode Generator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Wheel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>My Plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New From Template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document Template: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Newsletters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Brochures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Catalogs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Flyers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Signs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cards</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Letterheads</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Envelopes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Business Cards</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Calendars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Advertisements</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Labels</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Menus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Programs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF Forms</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF Presentations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Magazines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Posters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Announcements</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Documents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Folds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Media Cases</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Own Templates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PS/EPS Importer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save As Template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot change a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color not found in document.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color not found in default colors.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot create a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot delete a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot replace a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>firstPageOrder is bigger than allowed.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to open document.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to save document.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unit out of range. Use one of the scribus.UNIT_* constants.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color not found - python error</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Argument must be page item name, or PyCObject instance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Property not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Child not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Couldn&apos;t convert result type &apos;%1&apos;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Property type &apos;%1&apos; not supported</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Couldn&apos;t convert &apos;%1&apos; to property type &apos;%2&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Types matched, but setting property failed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target is not an image frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Specified item not an image frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot group less than two items</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t group less than two items</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Need selection or argument list of items to group</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot scale by 0%.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot render an empty sample.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to save pixmap</source>
        <comment>scripter error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot have an empty layer name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot remove the last layer.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot create layer without a name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An object with the requested name already exists.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain at least two points (four values).</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain an even number of values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain at least three points (six values).</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain at least four points (eight values).</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must have a multiple of six values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Style not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set style on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page number out of range.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to save EPS.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Given master page name does not match any existing.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>argument is not list: must be list of float values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>argument contains non-numeric values: must be list of float values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>argument contains no-numeric values: must be list of float values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transparency out of bounds, must be 0 &lt;= transparency &lt;= 1.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Blendmode out of bounds, must be 0 &lt;= blendmode &lt;= 15.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Corner radius must be a positive number.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line style not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get font size of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get font of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get text size of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get number of lines of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get column count of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get line space of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get column gap of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get text of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set text of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot insert text into non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert index out of bounds.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alignment out of range. Use one of the scribus.ALIGN* constants.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set text alignment on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font size out of bounds - must be 1 &lt;= size &lt;= 512.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set font size on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set font on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line space out of bounds, must be &gt;= 0.1.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set line spacing on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Column gap out of bounds, must be positive.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set column gap on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Column count out of bounds, must be &gt; 1.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set number of columns on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selection index out of bounds</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot select text in a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot delete text from a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set text fill on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set text stroke on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set text shade on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can only link text frames.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target frame must be empty.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target frame links to another frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target frame is linked to by another frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Source and target are the same object.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot unlink a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object is not a linked text frame, can&apos;t unlink.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object the last frame in a series, can&apos;t unlink. Unlink the previous frame instead.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot convert a non-text frame to outlines.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Only text frames can be checked for overflowing</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t set bookmark on a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t get info from a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The filename must be a string.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The filename should not be empty string.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot delete image type settings.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The image type must be a string.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&apos;allTypes&apos; attribute is READ-ONLY</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to export image</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Execute Script...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;About Script...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Scribus Scripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Recent Scripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>About Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scripter</source>
        <translation type="unfinished"></translation>
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
raise a NoValidObjectError if it can&apos;t find anything to operate
on.
- Many functions will raise WrongFrameTypeError if you try to use them
on a frame type that they do not make sense with. For example, setting
the text color on a graphics frame doesn&apos;t make sense, and will result
in this exception being raised.
- Errors resulting from calls to the underlying Python API will be
passed through unaltered. As such, the list of exceptions thrown by
any function as provided here and in its docstring is incomplete.

Details of what exceptions each function may throw are provided on the
function&apos;s documentation, though as with most Python code this list
is not exhaustive due to exceptions from called functions.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom (optional) configuration: </source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Standard configuration: </source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Short Words</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Short Words processing. Wait please...</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Short Words processing. Done.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SVG Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SVG-Images (*.svg *.svgz);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SVG-Images (*.svg);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you really want to overwrite the File:
%1 ?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SVG Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Old .sla format support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OpenOffice.org Draw Importer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OpenOffice.org Draw (*.sxd *.odg);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus 1.2.x Support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus 1.3.4 Support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Comma Separated Value Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CSV_data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CSV_header</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Word Documents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>HTML Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>html</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>
External Links
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OpenDocument Text Documents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Palm PDB Documents</source>
        <comment>PDB Importer</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDB_data</source>
        <comment>PDB Importer</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDB Import</source>
        <comment>PDB Importer</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not open file %1</source>
        <comment>PDB Importer</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This file is not recognized as a PDB document. Please, report this as a bug if you are sure it is one.</source>
        <comment>PDB Importer</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Documents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Filters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>English (American)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>English (Australian)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Supported Formats (*.eps *.EPS *.epsi *.EPSI *.ps *.PS);;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>German (Swiss)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hebrew</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus 1.3.0-&gt;1.3.3.7 Support</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QTextEdit</name>
    <message>
        <source>Clear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QTitleBar</name>
    <message>
        <source>System Menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unshade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normalize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Maximize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QWorkspace</name>
    <message>
        <source>&amp;Restore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Move</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mi&amp;nimize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ma&amp;ximize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stay on &amp;Top</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Restore Down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sh&amp;ade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 - [%2]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Unshade</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ReformDoc</name>
    <message>
        <source>Document Setup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Typography</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hyphenator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preflight Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document Item Attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sections</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Management</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Adjusting Colors</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>RunScriptDialog</name>
    <message>
        <source>Python Scripts (*.py *.PY);; All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Run as Extension Script</source>
        <comment>run script dialog</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMAlignSelect</name>
    <message>
        <source>P</source>
        <comment>P as in Parent</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use parent style&apos;s alignment instead of overriding it</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMBase</name>
    <message>
        <source>Style Manager</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Clone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+I</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Please select a unique name for the style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;&lt; &amp;Done</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Reset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+R</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMCStylePage</name>
    <message>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Parent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Parent style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font face</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tracking</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Baseline offset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontal scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vertical scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stroke color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stroke shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shade</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMCharacterStyle</name>
    <message>
        <source>Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Character Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Character Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clone of %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 (%2)</source>
        <comment>This for unique name when creating a new character style. %1 will be the name of the style and %2 will be a number forming a style name like: New Style (2)</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMColorCombo</name>
    <message>
        <source>Use Parent Value</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMFontComboH</name>
    <message>
        <source>Use Parent Font</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMLineStyle</name>
    <message>
        <source>Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clone of %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 (%2)</source>
        <comment>This for unique name when creating a new character style. %1 will be the name of the style and %2 will be a number forming a style name like: New Style (2)</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMPStyleWidget</name>
    <message>
        <source>Fixed Linespacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatic Linespacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align to Baseline Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Parent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distances and Alignment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Drop Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tabulators and Indentation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Character Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Lines:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance from Text:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Based on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Parent style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line spacing mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line spacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Space above</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Space below</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable or disable drop cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Drop cap lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Drop cap offset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alignment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>First line indent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Left indent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Right indent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tabulators</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMParagraphStyle</name>
    <message>
        <source>Paragraph Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paragraph Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clone of %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 (%2)</source>
        <comment>This for unique name when creating a new character style. %1 will be the name of the style and %2 will be a number forming a style name like: New Style (2)</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMReplaceDia</name>
    <message>
        <source>Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Replace with</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMReplaceDiaBase</name>
    <message>
        <source>Delete Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ca&amp;ncel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMRowWidget</name>
    <message>
        <source>No Style</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMScComboBox</name>
    <message>
        <source>Use Parent Value</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMShadeButton</name>
    <message>
        <source>Use Parent Value</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMStyleSelect</name>
    <message>
        <source>P</source>
        <comment>P as in Parent</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use parent style&apos;s effects instead of overriding them</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMTabruler</name>
    <message>
        <source> Parent Tabs </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SToolBAlign</name>
    <message>
        <source>Style Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SToolBColorF</name>
    <message>
        <source>Fill Color Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SToolBColorS</name>
    <message>
        <source>Stroke Color Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SToolBFont</name>
    <message>
        <source>Font Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font of selected text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scaling height of characters</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SToolBStyle</name>
    <message>
        <source>Character Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SVGExportPlugin</name>
    <message>
        <source>Save as &amp;SVG...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exports SVG Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exports the current page into an SVG file.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SVGImportPlugin</name>
    <message>
        <source>Import &amp;SVG...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Imports SVG Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Imports most SVG files into the current document,
converting their vector data into Scribus objects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scalable Vector Graphics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SVG file contains some unsupported features</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SVGPlug</name>
    <message>
        <source>Group%1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SWDialog</name>
    <message>
        <source>Short Words</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply unbreakable space on:</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Selected frames</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Active &amp;page</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;All items</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Only selected frames processed.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Only actual page processed.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All items in document processed.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SWPrefsGui</name>
    <message>
        <source>User settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>System wide configuration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Reset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save user configuration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reload system wide configuration and remove user defined one</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit custom configuration. If you save it, it will be used over system wide configuration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Short Words</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>User configuration exists elready. Do you really want to overwrite it?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot write file %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>User settings saved</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>System wide configuration reloaded</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot open file %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SaveAsTemplatePlugin</name>
    <message>
        <source>Save as &amp;Template...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save a document as a template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save a document as a template. Good way to ease the initial work for documents with a constant look</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScGTFileDialog</name>
    <message>
        <source>Select a file to import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Append</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show options</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScInputDialog</name>
    <message>
        <source>Input Dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>InputDialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScPlugin</name>
    <message>
        <source>Load/Save/Import/Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Persistent</source>
        <comment>plugin manager plugin type</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Action</source>
        <comment>plugin manager plugin type</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScProgressBar</name>
    <message>
        <source>%1 of %2</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScToolBar</name>
    <message>
        <source>Top</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow Docking To...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Floating Orientation...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScWinPrint</name>
    <message>
        <source>Printing...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Scribus12Format</name>
    <message>
        <source>Scribus 1.2.x Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Scribus134Format</name>
    <message>
        <source>Scribus 1.3.4 Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Scribus13Format</name>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus 1.3.0-&gt;1.3.3.7 Document</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusCore</name>
    <message>
        <source>Initializing Plugins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Initializing Keyboard Shortcuts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reading ICC Profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>There are no fonts found on your system.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exiting now.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font System Initialized</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusDoc</name>
    <message>
        <source>Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An error occurred while opening ICC profiles, color management is not enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Adjusting Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you really want to clear all your text?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot Delete In-Use Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The item %1 is currently being edited by Story Editor. The delete operation will be cancelled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Some objects are locked.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Unlock All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Skip locked objects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of copies: %1
Horizontal shift: %2
Vertical shift: %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of copies: %1
Horizontal gap: %2
Vertical gap: %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default Paragraph Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default Character Style</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusMainWindow</name>
    <message>
        <source>Setting up Shortcuts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Initializing Story Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Initializing Hyphenator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reading Scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open &amp;Recent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paste Recent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>St&amp;yle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preview Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;onvert To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>I&amp;nsert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Character</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Quote</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S&amp;paces &amp;&amp; Breaks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Liga&amp;ture</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Windows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Alignment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ready</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Updating Pictures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Importing Pages...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import done</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Found nothing to import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File %1 is not in an acceptable format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Loading...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Some ICC profiles used by this document are not installed:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> was replaced by: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(converted)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot write the file: 
%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save As</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saving...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus has detected some errors. Consider using the Preflight Verifier to correct them</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Ignore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Abort</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Printing...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Printing failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot Cut In-Use Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The item %1 is currently being edited by Story Editor. The cut operation will be cancelled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>About Qt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus Manual</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Convert Page to Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Master Page %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The following programs are missing:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS images or Print Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS images or PostScript Print Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ghostscript is missing : Postscript Print Preview is not available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus detected some errors.
Consider using the Preflight Verifier  to correct them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>EPS Files (*.eps);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Detected some errors.
Consider using the Preflight Verifier to correct them</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>-Page%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Some objects are locked.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Lock All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Unlock All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Group%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The program %1 is already running!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The program %1 is missing!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The selected color does not exist in the document&apos;s color set. Please enter a name for this new color.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Not Found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The name you have selected already exists. Please enter a different name for this new color.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Send to Layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Previe&amp;w Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Character</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quote</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you really want to replace your existing image?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you really want to clear all your text?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusQApp</name>
    <message>
        <source>Invalid argument: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File %1 does not exist, aborting.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Usage: scribus [option ... ] [file]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Options:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print help (this message) and exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Uses xx as shortcut for a language, eg `en&apos; or `de&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>List the currently installed interface languages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show information on the console when fonts are being loaded</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not show the splashscreen on startup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stop the showing of the splashscreen on startup. Writes an empty file called .neversplash in ~/.scribus.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Download a file from the Scribus website and show the latest available version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Output version information and exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use right to left dialog button ordering (eg. Cancel/No/Yes instead of Yes/No/Cancel)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>filename</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use filename as path for user given preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display a console window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Installed interface languages for Scribus are as follows:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To override the default language choice:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>scribus -l xx or scribus --lang xx, where xx is the language of choice.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus Version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus, Open Source Desktop Publishing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Homepage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documentation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wiki</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Issues</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show location ICC profile information on console while starting</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusView</name>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables the Preview Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Here you can select the visual appearance of the display
You can choose between normal and several color blindness forms</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy Here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paste Recent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Picture</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Original PPI: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Actual PPI: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colorspace: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>RGB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Duotone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Linked Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lines: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Words: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>In&amp;fo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preview Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Le&amp;vel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Conve&amp;rt to</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Linking Text Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You are trying to link to a filled frame, or a frame to itself.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page %1 to %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Group%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot Convert In-Use Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The item %1 is currently being edited by Story Editor. The convert to outlines operation for this item will be skipped</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Switches Color Management on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preview Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CMS is active. Therefore the color display may not match the perception by visually impaired</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter Object Size</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusWin</name>
    <message>
        <source>Document:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>has been changed since the last save.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Discard</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScriptPlugin</name>
    <message>
        <source>Embedded Python scripting support.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scripter</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScripterCore</name>
    <message>
        <source>Script error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>There was an internal error while trying the command you entered. Details were printed to stderr. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Examine Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Python Scripts (*.py *.PY);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documentation for:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> doesn&apos;t contain any docstring!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Setting up the Python plugin failed. Error details were printed to stderr. </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScripterPrefsGui</name>
    <message>
        <source>Extensions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Console</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scripter Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable Extension Scripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Startup Script:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Errors:</source>
        <comment>syntax highlighting</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Comments:</source>
        <comment>syntax highlighting</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keywords:</source>
        <comment>syntax highlighting</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Signs:</source>
        <comment>syntax highlighting</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Numbers:</source>
        <comment>syntax highlighting</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Strings:</source>
        <comment>syntax highlighting</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Base Texts:</source>
        <comment>syntax highlighting</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Locate Startup Script</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SeList</name>
    <message>
        <source>Show Page Previews</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SearchReplace</name>
    <message>
        <source>Search/Replace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search for:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paragraph Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill Shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stroke Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stroke Shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Center</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Block</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Forced</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Replace with:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Whole Word</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Ignore Case</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Replace &amp;All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search finished</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search finished, found %1 matches</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SelectFields</name>
    <message>
        <source>Select Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Available Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;&gt;&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;&lt;&lt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selected Fields</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ShadeButton</name>
    <message>
        <source>Other...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shade</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ShadowValues</name>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X-Offset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y-Offset</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ShortWordsPlugin</name>
    <message>
        <source>Short &amp;Words...</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Short Words</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Special plug-in for adding non-breaking spaces before or after so called short words. Available in the following languages: </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ShortcutWidget</name>
    <message>
        <source>&amp;No Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;User Defined Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>ALT+SHIFT+T</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set &amp;Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ctrl</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shift</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Meta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Meta+</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shift+</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ctrl+</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No shortcut for the style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Style has user defined shortcut</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Assign a shortcut for the style</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SideBar</name>
    <message>
        <source>No Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit Styles...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Spalette</name>
    <message>
        <source>No Style</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>StilFormate</name>
    <message>
        <source>Edit Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>StoryEditor</name>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Character</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quote</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spaces &amp;&amp; Breaks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ligature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Story Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clear All Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Reload Text from Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save to File...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Load from File...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save &amp;Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Update Text Frame and Exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Exit Without Updating Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit Styles...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Fonts Preview...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Update Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Insert Glyph...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Background...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Display Font...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Smart text selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Current Paragraph:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Words: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Totals:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Story Editor - %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you want to save your changes?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you really want to lose all your changes?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you really want to clear all your text?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>StrikeValues</name>
    <message>
        <source>Auto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Displacement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Linewidth</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>StyleManager</name>
    <message>
        <source>Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Reset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;&lt; &amp;Done</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit &gt;&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Clone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset all changes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply all changes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply all changes and exit edit mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create a new style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import styles from another document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clone selected style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete selected styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Send to Scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Done</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shortcut</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name of the selected style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This key sequence is already in use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>More than one style selected</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>StyleSelect</name>
    <message>
        <source>Underline Text. Hold down the button momentarily to set line width and displacement options.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Underline Words Only. Hold down the button momentarily to set line width and displacement options.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Strike Out. Hold down the button momentarily to set line width and displacement options.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Outline. Hold down the button momentarily to change the outline stroke width.</source>
        <comment>Text Style Selector</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shadowed Text. Hold down the button momentarily to enable the offset spacing.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SxwDialog</name>
    <message>
        <source>OpenOffice.org Writer Importer Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Overwrite Paragraph Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enabling this will overwrite existing styles in the current Scribus document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Merge Paragraph Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document&apos;s styles are named differently.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make these settings the default and do not prompt again when importing an OpenOffice.org 1.x document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TOCIndexPrefs</name>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The frame the table of contents will be placed into</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Numbers Placed:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Item Attribute Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The Item Attribute that will be set on frames used as a basis for creation of the entries</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Place page numbers of the entries at the beginning or the end of the line, or not at all</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>List Non-Printing Entries</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Include frames that are set to not print as well</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The paragraph style used for the entry lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paragraph Style:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Destination Frame:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Table Of Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>At the beginning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>At the end</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Not Shown</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TOCIndexPrefsBase</name>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Table Of Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The frame the table of contents will be placed into</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Numbers Placed:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Item Attribute Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The Item Attribute that will be set on frames used as a basis for creation of the entries</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Place page numbers of the entries at the beginning or the end of the line, or not at all</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>List Non-Printing Entries</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Include frames that are set to not print as well</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The paragraph style used for the entry lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paragraph Style:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Destination Frame:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabCheckDoc</name>
    <message>
        <source>Ignore all errors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatic check before printing or exporting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for missing glyphs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for overflow in text frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for missing images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check image resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lowest allowed resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Highest allowed resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for placed PDF Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for GIF images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for PDF Annotations and Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ignore non-printable Layers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add Profile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove Profile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for items not on a page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for used transparencies</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabDisplay</name>
    <message>
        <source>Color for paper</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable or disable  the display of linked frames.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display non-printing characters such as paragraph markers in text frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the display of frames on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the display of layer indicators on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the display of pictures on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Defines amount of space left of the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Defines amount of space right of the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Defines amount of space above the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Defines amount of space below the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set the default zoom level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Place a ruler against your screen and drag the slider to set the zoom level so Scribus will display your pages and objects on them at the correct size</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabDisplayBase</name>
    <message>
        <source>General</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Pictures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Text Control Characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rulers Relative to Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Text Chains</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Layer Indicators</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scratch Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Gaps Between Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontal:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vertical:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Adjust Display Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To adjust the display drag the ruler below with the slider.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pages:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selected Page Border:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Locked:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selected:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Linked:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Grouped:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Annotation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Control Characters:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Bleed Area</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TabDisplayBase</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scale%</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabDocument</name>
    <message>
        <source>Page Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Units:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply settings to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Document Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Master Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>min</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Undo/Redo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Action history length</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Width of document pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Height of document pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default page size, either a standard size or a custom size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default orientation of document pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>When enabled, Scribus saves a backup copy of your file with the .bak extension each time the time period elapses</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Time period between saving automatically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set the length of the action history in steps. If set to 0 infinite amount of actions will be stored.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply the page size changes to all existing pages in the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply the page size changes to all existing master pages in the document</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabExternalToolsWidget</name>
    <message>
        <source>Locate Ghostscript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Locate your image editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Locate your web browser</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabExternalToolsWidgetBase</name>
    <message>
        <source>External Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostScript Interpreter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Name of Executable:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;Add the path for the Ghostscript interpreter. On Windows, please note it is important to note you need to use the program named gswin32c.exe - NOT gswin32.exe. Otherwise, this maybe cause a hang when starting Scribus.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Change..</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Antialias &amp;Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+T</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Antialias text for EPS and PDF onscreen rendering</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Antialias &amp;Graphics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+G</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Antialias graphics for EPS and PDF onscreen rendering</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resolution:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image Processing Tool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name of &amp;Executable:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;File system location for graphics editor. If you use gimp and your distribution includes it, we recommend &apos;gimp-remote&apos;, as it allows you to edit the image in an already running instance of gimp.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Change...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Web Browser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Web Browser to launch with links from the Help system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;File system location for your web browser. This is used for external links from the Help system.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Rescan</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+R</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rescan for the external tools if they do not exist in the already specified location</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabGeneral</name>
    <message>
        <source>Select your default language for Scribus to run with. Leave this blank to choose based on environment variables. You can still override this by passing a command line option when starting Scribus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of recently edited documents to show in the File menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose the default window decoration and looks. Scribus inherits any available KDE or Qt themes, if Qt is configured to search KDE plugins.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default font size for the menus and windows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default font size for the tool windows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default documents directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default ICC profiles directory. This cannot be changed with a document open. By default, Scribus will look in the System Directories under Mac OSX and Windows. On Linux and Unix, Scribus will search $home/.color/icc,/usr/share/color/icc and /usr/local/share/color/icc </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default Scripter scripts directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Additional directory for document templates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabGeneralBase</name>
    <message>
        <source>User Interface</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Theme:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> ms</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Time before a Move or Resize starts:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Size (&amp;Palettes):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Font Size (Menus):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Wheel Jump:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Recent Documents:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Startup Dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Splashscreen on Startup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paths</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ch&amp;ange...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document &amp;Templates:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Documents:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;ICC Profiles:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Scripts:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Change...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TabGeneralBase</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabGuides</name>
    <message>
        <source>Common Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Placing in Documents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>In the Background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>In the Foreground</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Snapping</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Snap Distance:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Grab Radius:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Page Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Major Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spacing:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Minor Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Baseline Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Baseline Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Baseline &amp;Grid:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Baseline &amp;Offset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Guides are not visible through objects on the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Guides are visible above all objects on the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the minor grid lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the major grid lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of the minor grid lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of the major grid lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of the guide lines you insert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color for the margin lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color for the baseline grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the basegrid on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the lines of the baseline grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance from the top of the page for the first baseline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the gridlines on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the guides on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the margins on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> px</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabKeyboardShortcutsWidget</name>
    <message>
        <source>Key Set XML Files (*.ksxml)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ctrl</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shift</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Meta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Meta+</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shift+</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ctrl+</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This key sequence is already in use</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabKeyboardShortcutsWidgetBase</name>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shortcut</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shortcut for Selected Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;No Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;User Defined Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set &amp;Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+K</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CTRL+ALT+SHIFT+W</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Loadable Shortcut Sets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keyboard shortcut sets available to load</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Load</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Load the selected shortcut set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+I</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import a shortcut set into the current configuration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Export...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+E</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export the current shortcuts into an importable file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Reset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+R</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reload the default Scribus shortcuts</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabManager</name>
    <message>
        <source>Manage Tabulators</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabMiscellaneousBase</name>
    <message>
        <source>Form1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Always ask before fonts are replaced when loading a document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preview of current Paragraph Style visible when editing Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lorem Ipsum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Always use standard Lorem Ipsum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Count of the Paragraphs:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabPDFOptions</name>
    <message>
        <source>Export Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;All Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;hoose Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clip to Page Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Compatibilit&amp;y:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Binding:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Generate &amp;Thumbnails</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Include Bookmarks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Include La&amp;yers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Resolution for EPS Graphics:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Com&amp;press Text and Vector Graphics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image Compression Method</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lossy - JPEG</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lossless - Zip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Compression Metho&amp;d:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>High</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Low</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Compression &amp;Quality:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resa&amp;mple Images to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;&gt;&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;&lt;&lt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fonts to embed:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable &amp;Presentation Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Page Pre&amp;views</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Display Duration:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Effec&amp;t Duration:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Effect T&amp;ype:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Moving Lines:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>F&amp;rom the:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D&amp;irection:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> sec</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Split</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Inside</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Outside</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Top-left to Bottom-Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Apply Effect on all Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Single Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Continuous</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Double Page Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Double Page Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Visual Appearance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use Viewers Defaults</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use Full Screen Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display Bookmarks Tab</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display Thumbnails</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display Layers Tab</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hide Viewers Toolbar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hide Viewers Menubar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom Pages to fit Viewer Window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Special Actions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Javascript to be executed
when PDF document is opened:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Viewer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Use Encryption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;User:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Owner:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow &amp;Printing the Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow &amp;Changing the Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S&amp;ecurity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>General</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Output &amp;Intended For:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Screen / Web</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Printer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Convert Spot Colors to Process Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Force Overprint Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rendering Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fre&amp;quency:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Angle:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S&amp;pot Function:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Simple Dot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Round</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ellipse</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Solid Colors:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use ICC Profile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Images:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF/X-3 Output Intent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Info String:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Output &amp;Profile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts will preserve the layout and appearance of your document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables presentation effects when using Adobe&amp;#174; Reader&amp;#174; and other PDF viewers which support this in full screen mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show page previews of each page listed above.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page. Setting 0 will disable automatic page transition.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Length of time the effect runs. A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type of the display effect.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Starting position for the box and split effects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Direction of the glitter or wipe effects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply the selected effect to all pages.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export all pages to PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export a range of pages to PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Determines the PDF compatibility.&lt;br/&gt;The default is &lt;b&gt;PDF 1.3&lt;/b&gt; which gives the widest compatibility.&lt;br/&gt;Choose &lt;b&gt;PDF 1.4&lt;/b&gt; if your file uses features such as transparency or you require 128 bit encryption.&lt;br/&gt;&lt;b&gt;PDF 1.5&lt;/b&gt; is necessary when you wish to preserve objects in separate layers within the PDF.&lt;br/&gt;&lt;b&gt;PDF/X-3&lt;/b&gt; is for exporting the PDF when you want color managed RGB for commercial printing and is selectable when you have activated color management. Use only when advised by your printer or in some cases printing to a 4 color digital color laser printer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know you need to change it leave the default choice - Left.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF. Some viewers can use the thumbnails for navigation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layers in your document are exported to the PDF Only available if PDF 1.5 is chosen.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document. These are useful for navigating long PDF documents.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics. This does not affect the resolution of bitmap images like photos.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables lossless compression of text and graphics. Unless you have a reason, leave this checked. This reduces PDF file size.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Re-sample your bitmap images to the selected DPI. Leaving this unchecked will render them at their native resolution. Enabling this will increase memory usage and slow down export.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF. If you selected PDF 1.3, the PDF will be protected by 40 bit encryption. If you selected PDF 1.4, the PDF will be protected by 128 bit encryption. Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the security features in your exported PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. If unchecked, text and graphics cannot be copied.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. If unchecked, editing annotations and fields is prevented.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color model for the output of your PDF. Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets. Choose Printer when printing to a true 4 color CMYK printer. Choose Grayscale when you want a grey scale PDF.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled when specifically requested by your printer and they have given you the exact details needed. Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Embed a color profile for solid colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color profile for solid colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rendering intent for solid colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Embed a color profile for images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color profile for images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rendering intent for images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mirror Page(s) horizontally</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mirror Page(s) vertically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables global Overprint Mode for this document, overrides object settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not show objects outside the margins in the exported file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Embed all</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fonts to outline:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Outline all</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Printer Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Crop Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bleed Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Registration Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Bars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Offset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bleed Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Top:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use Document Bleeds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pre-Press</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Convert all glyphs in the document to outlines.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Method of compression to use for images. Automatic allows Scribus to choose the best method. ZIP is lossless and good for images with solid colors. JPEG is better at creating smaller PDF files which have many photos (with slight image quality loss possible). Leave it set to Automatic unless you have a need for special compression options.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Compression quality levels for lossy compression methods: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%). Note that a quality level does not directly determine the size of the resulting image - both size and quality loss vary from image to image at any given quality level. Even with Maximum selected, there is always some quality loss with jpeg.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Inside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Outside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document Layout</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabPrinter</name>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use an alternative print manager, such as kprinter or gtklp, to utilize additional printing options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sets the PostScript Level.
 Setting to Level 1 or 2 can create huge files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis.UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables global Overprint Mode for this document, overrides object settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allows you to embed ICC profiles in the print stream when color management is enabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This enables you to explicitely set the media size of the PostScript file. Not recommended unless requested by your printer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabPrinterBase</name>
    <message>
        <source>Print Destination</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alternative Printer Command</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Command:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Postscript Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Level 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Level 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Level 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print in Color if Available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print in Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mirror Page(s) Horizontal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mirror Page(s) Vertical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set Media Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clip to Page Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply Under Color Removal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Convert Spot Colors to Process Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Force Overprint Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply ICC Profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>General</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print Separations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Marks &amp;&amp; Bleeds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Printer Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Crop Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bleed Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Registration Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Offset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Bars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bleed Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Top:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TabPrinterBase</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabScrapbookBase</name>
    <message>
        <source>Send Copied Items Automatically to Scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This enables the scrapbook to be used an extension to the copy/paste buffers. Simply copying an object or grouped object will send this to the Scrapbook automatically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keep Copied Items Permanently Across Sessions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This enables copied items to be kept permanently in the scrapbook.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of Copied Items to Keep in Scrapbook:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The minimum number is 1; the maximum us 100.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TabScrapbookBase</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabTools</name>
    <message>
        <source>Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shading:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Stroke:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stroke Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tab Fill Character:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tab Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Line Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Shading:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Fill Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S&amp;hading:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Style:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line S&amp;tyle:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arrows:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Start:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>End:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Horizontal Scaling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Vertical Scaling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keep Aspect &amp;Ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use embedded Clipping Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>On Screen Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Full Resolution Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal Resolution Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Low Resolution Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Regular Polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mi&amp;nimum:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ma&amp;ximum:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Stepping:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rotation Tool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Constrain to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Frame Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Picture Frame Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shape Drawing Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Magnification Level Defaults</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Drawing Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Polygon Drawing Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Other Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font for new text frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Size of font for new text frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of columns in a text frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Gap between text frame columns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample of your font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontal scaling of images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vertical scaling of images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill color of picture frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation of color of fill</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line color of shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation of color of lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill color of shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line style of shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line width of shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Minimum magnification allowed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Maximum magnification allowed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change in magnification for each zoom operation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Style of lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Width of lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <comment>tab fill</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hyphen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Underscore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Miscellaneous Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Item Duplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X Displacement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y Displacement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontal displacement of page items</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vertical displacement of page items</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Constrain value for the rotation tool when the Control key is pressed</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabTypograpy</name>
    <message>
        <source>Subscript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Displacement:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Scaling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D&amp;isplacement:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S&amp;caling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Underline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Displacement:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Auto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Strikethru</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sc&amp;aling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatic &amp;Line Spacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Spacing:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Displacement above the baseline of the font on a line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Percentage increase over the font size for the line spacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font expressed as a percentage of the fonts descender</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line width expressed as a percentage of the font size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Displacement above the baseline of the normal font expressed as a percentage of the fonts ascender</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Tabruler</name>
    <message>
        <source>Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Full Stop</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Comma</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Center</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Position:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <comment>tab fill</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hyphen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Underscore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill Char:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Indentation for first line of the paragraph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Indentation from the left for the whole paragraph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Indentation from the right for the whole paragraph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete all Tabulators</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TextBrowser</name>
    <message>
        <source>Locate your web browser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>External Web Browser Failed to Start</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus was not able to start the external web browser application %1. Please check the setting in Preferences</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Tree</name>
    <message>
        <source>Free Objects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Group </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Outline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Element</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Free items</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UnderlineValues</name>
    <message>
        <source>Auto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Displacement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Linewidth</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UndoManager</name>
    <message>
        <source>Add vertical guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add horizontal guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove vertical guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove horizontal guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move vertical guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move horizontal guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lock guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unlock guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rotate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X1: %1, Y1: %2, %3
X2: %4, Y2: %5, %6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>W1: %1, H1: %2
W2: %3, H2: %4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change Image Offset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change Image Scale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X1: %1, Y1: %2
X2: %4, Y2: %5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X: %1, Y: %2
X: %4, Y: %5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selection/Group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X: %1, Y: %2
W: %3, H: %4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align/Distribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Items involved</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set fill color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color1: %1, Color2: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set fill color shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set line color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set line color shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Flip horizontally</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Flip vertically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lock</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lock size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unlock size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable Item Printing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Disable Item Printing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ungroup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rename</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>From %1
to %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paste</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cut</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set fill color transparency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set line color transparency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set line style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set the style of line end</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set the style of line join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set line width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set custom line style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not use custom line style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set start arrow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set end arrow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rows: %1, Cols: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font height</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font fill color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font stroke color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font fill color shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font stroke color shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set kerning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set line spacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set paragraph style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font effect</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bezier curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Convert to</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import SVG image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import EPS image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import OpenOffice.org Draw image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scratch space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text flows around the frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text flows around bounding box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text flows around contour line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No text flow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No object frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No bounding box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No contour line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set image scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Frame size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Free scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keep aspect ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Break aspect ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit contour line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset contour line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rename layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Raise layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lower layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Send to layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable printing of layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Disable printing of layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change name of the layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Get image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Multiple duplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply text style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Undo: %1</source>
        <comment>f.e. Undo: Move</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Redo: %1</source>
        <comment>f.e. Redo: Move</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset control point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset control points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply image effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Adjust frame to the image size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set start and end arrows</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UndoPalette</name>
    <message>
        <source>Initial State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Action History</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show selected object only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UndoWidget</name>
    <message>
        <source>%1: %2</source>
        <comment>undo target: action (f.e. Text frame: Resize)</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UnicodeSearchBase</name>
    <message>
        <source>Unicode Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Search:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hex</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Meaning</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UpgradeChecker</name>
    <message>
        <source>Attempting to get the Scribus version update file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(No data on your computer will be sent to an external location)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Timed out when attempting to get update file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error when attempting to get update file: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File not found on server</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not open version file: %1
Error:%2 at line: %3, row: %4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An error occurred while looking for updates for Scribus, please check your internet connection.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No updates are available for your version of Scribus %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>One or more updates for your version of Scribus (%1) are available:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Please visit www.scribus.net for details.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This list may contain development versions.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UsePrinterMarginsDialog</name>
    <message>
        <source>Minimum Margins for Page Size %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UsePrinterMarginsDialogBase</name>
    <message>
        <source>Use Printer Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select &amp;Printer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ValueDialog</name>
    <message>
        <source>Insert value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter a value then press OK.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter a value then press OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Send your value to the script</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>gtFileDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import Text Only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import text without any formatting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Importer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>gtImporterDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remember association</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remember the file extension - importer association and do not ask again to select an importer for files of this type.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>nftdialog</name>
    <message>
        <source>New From Template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Usage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Created with</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Date</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Author</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Downloading Templates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document templates can be found at http://www.scribus.net/ in the Downloads section.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Installing Templates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Extract the package to the template directory ~/.scribus/templates for the current user or PREFIX/share/scribus/templates for all users in the system.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preparing a template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make sure images and fonts you use can be used freely. If fonts cannot be shared do not collect them when saving as a template.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The template creator should also make sure that the Installing Templates section above applies to their templates as well. This means a user should be able to download a template package and be able to extract them to the template directory and start using them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Removing a template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Removing a template from the New From Template dialog will only remove the entry from the template.xml, it will not delete the document files. A popup menu with remove is only shown if you have write access to the template.xml file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Translating template.xml</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy an existing template.xml to a file called template.lang_COUNTRY.xml (use the same lang code that is present in the qm file for your language), for example template.fi.xml for Finnish language template.xml. The copy must be located in the same directory as the original template.xml so Scribus can load it.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>patternDialogBase</name>
    <message>
        <source>Patterns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Load</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Load Set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove All</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>satdialog</name>
    <message>
        <source>Save as Template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Category</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Usage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Author</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Email</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>More Details</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Less Details</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Legal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Letter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>landscape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>portrait</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>custom</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>tfDia</name>
    <message>
        <source>Create filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a previously saved filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Give a name to this filter for saving</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Give a name for saving</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>tfFilter</name>
    <message>
        <source>Disable or enable this filter row</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove this filter row</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add a new filter row</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>to</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>and</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>remove match</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>do not remove match</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>words</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Replace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value at the left is a regular expression</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>with</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>paragraph style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>all instances of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>all paragraphs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>paragraphs starting with</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>paragraphs with less than</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>paragraphs with more than</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
