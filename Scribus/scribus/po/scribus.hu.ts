<!DOCTYPE TS><TS>
<context>
    <name></name>
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
        <source>setGradientFill(type, &quot;color1&quot;, shade1, &quot;color2&quot;, shade2, [&quot;name&quot;])

Sets the gradient fill of the object &quot;name&quot; to type. Color descriptions are
the same as for setFillColor() and setFillShade(). See the constants for
available types (FILL_&lt;type&gt;).
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
        <source>importSVG(&quot;string&quot;)

The &quot;string&quot; must be a valid filename for a SVG image. The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
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
</context>
<context>
    <name>@default</name>
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
        <source>getLineColor([&quot;name&quot;]) -&gt; string

Returns the name of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
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
        <source>setFillColor(&quot;color&quot;, [&quot;name&quot;])

Sets the fill color of the object &quot;name&quot; to the color &quot;color&quot;. &quot;color&quot;
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
        <source>setScaleImageToFrame(scaletoframe, proportional=None, name=&lt;selection&gt;)

Sets the scale to frame on the selected or specified image frame to `scaletoframe&apos;.
If `proportional&apos; is specified, set fixed aspect ratio scaling to `proportional&apos;.
Both `scaletoframe&apos; and `proportional&apos; are boolean.

May raise WrongFrameTypeError.
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
        <source>newStyleDialog() -&gt; string

Shows &apos;Create new paragraph style&apos; dialog. Function returns real
style name or None when user cancels the dialog.
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
        <source>zoomDocument(double)

Zoom the document in main GUI window. Actions have whole number
values like 20.0, 100.0, etc. Zoom to Fit uses -100 as a marker.
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
        <source>duplicateObject([&quot;name&quot;]) -&gt; string

creates a Duplicate of the selected Object (or Selection Group).
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
        <source>setInfo(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -&gt; bool

Sets the document information. &quot;Author&quot;, &quot;Info&quot;, &quot;Description&quot; are
strings.
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
        <source>getTextLines([&quot;name&quot;]) -&gt; integer

Returns the number of lines of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
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
        <source>&amp;About</source>
        <translation>&amp;Névjegy</translation>
    </message>
    <message>
        <source>Contributions from:</source>
        <translation>Közreműködők:</translation>
    </message>
    <message>
        <source>A&amp;uthors</source>
        <translation>Szerzők</translation>
    </message>
    <message>
        <source>&amp;Translations</source>
        <translation>&amp;Fordítók</translation>
    </message>
    <message>
        <source>&amp;Online</source>
        <translation>&amp;Online</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>Be&amp;zárás</translation>
    </message>
    <message>
        <source>Development Team:</source>
        <translation>Feljesztő csapat:</translation>
    </message>
    <message>
        <source>Official Documentation:</source>
        <translation>Hivatalos dokumentáció:</translation>
    </message>
    <message>
        <source>Other Documentation:</source>
        <translation>További dokumentáció:</translation>
    </message>
    <message>
        <source>Homepage</source>
        <translation>Honlap</translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation>Online referencia</translation>
    </message>
    <message>
        <source>Bugs and Feature Requests</source>
        <translation>Hibabejelentés és új funkció kérés</translation>
    </message>
    <message>
        <source>Mailing List</source>
        <translation>Levelező lista</translation>
    </message>
    <message>
        <source>Official Translations and Translators:</source>
        <translation>Hivatalos fordítások és fordítók:</translation>
    </message>
    <message>
        <source>Previous Translation Contributors:</source>
        <translation>Előző fordítás kiadások:</translation>
    </message>
    <message>
        <source>About Scribus %1</source>
        <translation>Scribus %1 névjegy</translation>
    </message>
    <message>
        <source>Wiki</source>
        <translation>Wiki</translation>
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
        <translation>%1 verziójú Ghostscript használata</translation>
    </message>
    <message>
        <source>No Ghostscript version available</source>
        <translation>Nem érhető el Ghoszscript verzió</translation>
    </message>
    <message>
        <source>&lt;b&gt;Scribus Version %1&lt;/b&gt;&lt;p&gt;%2&lt;br/&gt;%3 %4&lt;br/&gt;%5&lt;/p&gt;</source>
        <translation>&lt;b&gt;Scribus Verzió %1&lt;/b&gt;&lt;p&gt;%2&lt;br/&gt;%3 %4&lt;br/&gt;%5&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Build ID:</source>
        <translation>Build ID:</translation>
    </message>
    <message>
        <source>Mac OS&amp;#174; X Aqua Port:</source>
        <translation>Mac OS&amp;#174; X Aqua Port:</translation>
    </message>
    <message>
        <source>Windows&amp;#174; Port:</source>
        <translation>Windows&amp;#174; Port:</translation>
    </message>
    <message>
        <source>March</source>
        <translation type="obsolete">Március</translation>
    </message>
    <message>
        <source>Tango Project Icons:</source>
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
        <source>Yes</source>
        <translation type="obsolete">Igen</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="obsolete">Nem</translation>
    </message>
    <message>
        <source>Filename:</source>
        <translation>Fájlnév:</translation>
    </message>
    <message>
        <source>Version:</source>
        <translation>Verzió:</translation>
    </message>
    <message>
        <source>Enabled:</source>
        <translation>Engedélyezve:</translation>
    </message>
    <message>
        <source>Release Date:</source>
        <translation>Kiadás dátuma:</translation>
    </message>
    <message>
        <source>Description:</source>
        <translation>Leírás:</translation>
    </message>
    <message>
        <source>Author(s):</source>
        <translation>Szerző(k):</translation>
    </message>
    <message>
        <source>Copyright:</source>
        <translation>Copyright:</translation>
    </message>
    <message>
        <source>License:</source>
        <translation>Licensz:</translation>
    </message>
</context>
<context>
    <name>AboutPluginsBase</name>
    <message>
        <source>Scribus: About Plug-ins</source>
        <translation>Scribus: Bedolgozó modulok névjegye</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>Be&amp;zárás</translation>
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
        <translation>&amp;Új</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Megnyitás...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>Be&amp;zárás</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Mentés</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Ment másként...</translation>
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
        <translation>Szöveg betöltése...</translation>
    </message>
    <message>
        <source>Append &amp;Text...</source>
        <translation>Szöveg hozzáfűzése...</translation>
    </message>
    <message>
        <source>Get Image...</source>
        <translation>Kép betöltése...</translation>
    </message>
    <message>
        <source>Save &amp;Text...</source>
        <translation>Szöveg mentése...</translation>
    </message>
    <message>
        <source>Save Page as &amp;EPS...</source>
        <translation type="obsolete">Oldal mentése EPS-ként...</translation>
    </message>
    <message>
        <source>Save as P&amp;DF...</source>
        <translation>Mentés PDF-ként...</translation>
    </message>
    <message>
        <source>Document &amp;Setup...</source>
        <translation>Dokumentum beállítás...</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation>Nyomtatás</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>&amp;Kilépés</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Visszavonás</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Újra végrehajtás</translation>
    </message>
    <message>
        <source>&amp;Item Action Mode</source>
        <translation>&amp;Elem akció mód</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>&amp;Kivágás</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Másolás</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Beillesztés</translation>
    </message>
    <message>
        <source>C&amp;lear Contents</source>
        <translation type="obsolete">&amp;Tartalmak törlése</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>&amp;Minden kijelölése</translation>
    </message>
    <message>
        <source>&amp;Deselect All</source>
        <translation>Minden kiválasztásának törlése</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation>&amp;Keresés/csere...</translation>
    </message>
    <message>
        <source>Edit Image...</source>
        <translation>Kép szerkesztése</translation>
    </message>
    <message>
        <source>C&amp;olors...</source>
        <translation>&amp;Színek...</translation>
    </message>
    <message>
        <source>&amp;Paragraph Styles...</source>
        <translation>&amp;Bekezdés stílusa...</translation>
    </message>
    <message>
        <source>&amp;Line Styles...</source>
        <translation>&amp;Vonal stílusa...</translation>
    </message>
    <message>
        <source>&amp;Master Pages...</source>
        <translation>&amp;Mester lapok...</translation>
    </message>
    <message>
        <source>P&amp;references...</source>
        <translation>&amp;Beállítások...</translation>
    </message>
    <message>
        <source>%1 pt</source>
        <translation>%1 pt</translation>
    </message>
    <message>
        <source>&amp;Other...</source>
        <translation>&amp;Egyéb...</translation>
    </message>
    <message>
        <source>&amp;Left</source>
        <translation>&amp;Bal</translation>
    </message>
    <message>
        <source>&amp;Center</source>
        <translation>&amp;Középső</translation>
    </message>
    <message>
        <source>&amp;Right</source>
        <translation>&amp;Jobb</translation>
    </message>
    <message>
        <source>&amp;Block</source>
        <translation>&amp;Klisé</translation>
    </message>
    <message>
        <source>&amp;Forced</source>
        <translation>&amp;Kikényszerített</translation>
    </message>
    <message>
        <source>&amp;%1 %</source>
        <translation>&amp;%1 %</translation>
    </message>
    <message>
        <source>&amp;Normal</source>
        <translation>&amp;Normál</translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation>&amp;Aláhúzott</translation>
    </message>
    <message>
        <source>Underline &amp;Words</source>
        <translation>&amp;Szavak aláhúzása</translation>
    </message>
    <message>
        <source>&amp;Strike Through</source>
        <translation>&amp;Áthúzott</translation>
    </message>
    <message>
        <source>&amp;All Caps</source>
        <translation>&amp;Minden nagybetűs</translation>
    </message>
    <message>
        <source>Small &amp;Caps</source>
        <translation>&amp;Kiskapitális</translation>
    </message>
    <message>
        <source>Su&amp;perscript</source>
        <translation>&amp;Felső index</translation>
    </message>
    <message>
        <source>Su&amp;bscript</source>
        <translation>&amp;Alsó index</translation>
    </message>
    <message>
        <source>S&amp;hadow</source>
        <translation>&amp;Árnyék</translation>
    </message>
    <message>
        <source>&amp;Image Effects</source>
        <translation>&amp;Kép effektek</translation>
    </message>
    <message>
        <source>&amp;Tabulators...</source>
        <translation>&amp;Tabulátorok...</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>&amp;Kettőzés</translation>
    </message>
    <message>
        <source>&amp;Multiple Duplicate</source>
        <translation>&amp;Többszörös duplázás</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation>&amp;Csoport</translation>
    </message>
    <message>
        <source>&amp;Ungroup</source>
        <translation>&amp;Csoportosítás megszüntetése</translation>
    </message>
    <message>
        <source>Is &amp;Locked</source>
        <translation>rögzített</translation>
    </message>
    <message>
        <source>Si&amp;ze is Locked</source>
        <translation>&amp;Méret rögzített</translation>
    </message>
    <message>
        <source>Lower to &amp;Bottom</source>
        <translation>&amp;Legalulra</translation>
    </message>
    <message>
        <source>Raise to &amp;Top</source>
        <translation>&amp;Legfelülre</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation>&amp;Hátrébb</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation>&amp;Előrébb</translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation>Küldés gyűjtőalbumba</translation>
    </message>
    <message>
        <source>&amp;Attributes...</source>
        <translation>&amp;Jellemzők...</translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation>&amp;Kép látható</translation>
    </message>
    <message>
        <source>&amp;Update Image</source>
        <translation>Kép &amp;frissítése</translation>
    </message>
    <message>
        <source>Adjust Frame to Image</source>
        <translation>Keret képhez igazítása</translation>
    </message>
    <message>
        <source>Extended Image Properties</source>
        <translation>Bővített kép tulajdonságok</translation>
    </message>
    <message>
        <source>&amp;Low Resolution</source>
        <translation>&amp;Alacsony felbontás</translation>
    </message>
    <message>
        <source>&amp;Normal Resolution</source>
        <translation>&amp;Normál felbontás</translation>
    </message>
    <message>
        <source>&amp;Full Resolution</source>
        <translation>&amp;Teljes felbontás</translation>
    </message>
    <message>
        <source>Is PDF &amp;Bookmark</source>
        <translation>ez PDF könyvjelző</translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation>ez PDF kommentár</translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation>&amp;Kommentár tulajdonságok</translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation>&amp;Mező tulajdonságok</translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation>&amp;Alak szerkesztése...</translation>
    </message>
    <message>
        <source>&amp;Attach Text to Path</source>
        <translation>&amp;Szöveg hozzáadása az útvonalhoz</translation>
    </message>
    <message>
        <source>&amp;Detach Text from Path</source>
        <translation>Szö&amp;veg eltávolítása az útvonalból</translation>
    </message>
    <message>
        <source>&amp;Combine Polygons</source>
        <translation>&amp;Sokszögek összekapcsolása</translation>
    </message>
    <message>
        <source>Split &amp;Polygons</source>
        <translation>So&amp;kszögek felosztása</translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation>&amp;Bezier görbe</translation>
    </message>
    <message>
        <source>&amp;Image Frame</source>
        <translation>&amp;Kép keret</translation>
    </message>
    <message>
        <source>&amp;Polygon</source>
        <translation>&amp;Sokszög</translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation>&amp;Szöveg keret</translation>
    </message>
    <message>
        <source>&amp;Glyph...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample Text</source>
        <translation>Minta szöveg</translation>
    </message>
    <message>
        <source>&amp;Insert...</source>
        <translation>&amp;Beillesztés...</translation>
    </message>
    <message>
        <source>Im&amp;port...</source>
        <translation>&amp;Importálás...</translation>
    </message>
    <message>
        <source>&amp;Delete...</source>
        <translation>&amp;Törlés...</translation>
    </message>
    <message>
        <source>&amp;Copy...</source>
        <translation>&amp;Másolás...</translation>
    </message>
    <message>
        <source>&amp;Move...</source>
        <translation>&amp;Mozgatás...</translation>
    </message>
    <message>
        <source>&amp;Apply Master Page...</source>
        <translation>&amp;Mester oldal alkalmazása...</translation>
    </message>
    <message>
        <source>Manage &amp;Guides...</source>
        <translation>&amp;Segédvonalak kezelése...</translation>
    </message>
    <message>
        <source>Manage Page Properties...</source>
        <translation>Oldal tulajdonságok kezelése...</translation>
    </message>
    <message>
        <source>&amp;Fit in window</source>
        <translation type="obsolete">&amp;Ablakhoz igazítás</translation>
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
        <translation>&amp;Előnézet</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation>&amp;Margók mutatása</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation>&amp;Keretek mutatása</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation>&amp;Képek mutatása</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation>&amp;Rács mutatása</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation>&amp;Segédvonalak mutatása</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation>&amp;Alaprács mutatása</translation>
    </message>
    <message>
        <source>Show &amp;Text Chain</source>
        <translation>&amp;Szöveg lánc mutatása</translation>
    </message>
    <message>
        <source>Show Control Characters</source>
        <translation>Vezérlő karakterek mutatása</translation>
    </message>
    <message>
        <source>Rulers relative to Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation>Rácshoz igazít</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>&amp;Tulajdonságok</translation>
    </message>
    <message>
        <source>&amp;Scrapbook</source>
        <translation>&amp;Gyűjtőalbum</translation>
    </message>
    <message>
        <source>&amp;Layers</source>
        <translation>&amp;Rétegek</translation>
    </message>
    <message>
        <source>&amp;Arrange Pages</source>
        <translation>&amp;Oldalak rendezése</translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation>&amp;Könyvjelzők</translation>
    </message>
    <message>
        <source>&amp;Measurements</source>
        <translation>&amp;Mértékegységek</translation>
    </message>
    <message>
        <source>Action &amp;History</source>
        <translation>&amp;Művelet előzmény</translation>
    </message>
    <message>
        <source>Preflight &amp;Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Align and Distribute</source>
        <translation>&amp;Igazítás és elosztás</translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation>&amp;Eszközök</translation>
    </message>
    <message>
        <source>P&amp;DF Tools</source>
        <translation>P&amp;DF eszközök</translation>
    </message>
    <message>
        <source>Select Item</source>
        <translation>Elem kiválasztása</translation>
    </message>
    <message>
        <source>T&amp;able</source>
        <translation>&amp;Táblázat</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>&amp;Alak</translation>
    </message>
    <message>
        <source>&amp;Line</source>
        <translation>&amp;Vonal</translation>
    </message>
    <message>
        <source>&amp;Freehand Line</source>
        <translation>&amp;Szabadkézi vonal</translation>
    </message>
    <message>
        <source>Rotate Item</source>
        <translation>Elem forgatása</translation>
    </message>
    <message>
        <source>Zoom in or out</source>
        <translation>Zoomolás be és ki</translation>
    </message>
    <message>
        <source>Zoom in</source>
        <translation>Bezoomolás</translation>
    </message>
    <message>
        <source>Zoom out</source>
        <translation>Kizoomolás</translation>
    </message>
    <message>
        <source>Edit Contents of Frame</source>
        <translation>Keret tartalmának szerkesztése</translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation>Szöveg szerkesztése...</translation>
    </message>
    <message>
        <source>Link Text Frames</source>
        <translation>Szöveg keretek összekapcsolása</translation>
    </message>
    <message>
        <source>Unlink Text Frames</source>
        <translation>Szöveg keretek közti kapcsolat megszüntetése</translation>
    </message>
    <message>
        <source>&amp;Eye Dropper</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy Item Properties</source>
        <translation>Elem tulajdonságának másolása</translation>
    </message>
    <message>
        <source>Edit the text with the Story Editor</source>
        <translation>Szöveg szerkesztése a Szövegszerkesztővel</translation>
    </message>
    <message>
        <source>Insert Text Frame</source>
        <translation>Szöveg keret beszúrása</translation>
    </message>
    <message>
        <source>Insert Image Frame</source>
        <translation>Kép keret beszúrása</translation>
    </message>
    <message>
        <source>Insert Table</source>
        <translation>Táblázat beszúrása</translation>
    </message>
    <message>
        <source>Insert Shape</source>
        <translation>Alak beszúrása</translation>
    </message>
    <message>
        <source>Insert Polygon</source>
        <translation>Sokszög beszúrása</translation>
    </message>
    <message>
        <source>Insert Line</source>
        <translation>Vonal beszúrása</translation>
    </message>
    <message>
        <source>Insert Bezier Curve</source>
        <translation>Bezier görbe beszúrása</translation>
    </message>
    <message>
        <source>Insert Freehand Line</source>
        <translation>Szabadkézi vonal beszúrása</translation>
    </message>
    <message>
        <source>&amp;Manage Pictures</source>
        <translation>&amp;Képek kezelése</translation>
    </message>
    <message>
        <source>&amp;Hyphenate Text</source>
        <translation>&amp;Elválasztás a szövegben</translation>
    </message>
    <message>
        <source>Dehyphenate Text</source>
        <translation>Nincs elválasztás a szövegben</translation>
    </message>
    <message>
        <source>&amp;Generate Table Of Contents</source>
        <translation>&amp;Tartalomjegyzék előállítása</translation>
    </message>
    <message>
        <source>&amp;About Scribus</source>
        <translation>&amp;Scribus névjegye</translation>
    </message>
    <message>
        <source>About &amp;Qt</source>
        <translation>&amp;Qt névjegye</translation>
    </message>
    <message>
        <source>Toolti&amp;ps</source>
        <translation>Buboréksúgók</translation>
    </message>
    <message>
        <source>Scribus &amp;Manual...</source>
        <translation>Scribus &amp;kézikönyv...</translation>
    </message>
    <message>
        <source>Smart &amp;Hyphen</source>
        <translation>&amp;Okos elválasztás</translation>
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
        <translation>Oldalszám</translation>
    </message>
    <message>
        <source>New Line</source>
        <translation>Új sor</translation>
    </message>
    <message>
        <source>Frame Break</source>
        <translation>Keret törés</translation>
    </message>
    <message>
        <source>Column Break</source>
        <translation>Oszlop törés</translation>
    </message>
    <message>
        <source>Copyright</source>
        <translation>Copyright</translation>
    </message>
    <message>
        <source>Registered Trademark</source>
        <translation>Regisztrált védjegy</translation>
    </message>
    <message>
        <source>Trademark</source>
        <translation>Védjegy</translation>
    </message>
    <message>
        <source>Bullet</source>
        <translation>Golyó</translation>
    </message>
    <message>
        <source>Em Dash</source>
        <translation>Kötőjel</translation>
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
        <translation>Idéző jel</translation>
    </message>
    <message>
        <source>Apostrophe</source>
        <translation>Aposztróf</translation>
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
        <source>Toggle Palettes</source>
        <translation>Paletták váltása</translation>
    </message>
    <message>
        <source>Toggle Guides</source>
        <translation>Segédvonalak váltása</translation>
    </message>
    <message>
        <source>Print Previe&amp;w</source>
        <translation>Nyomtatás előnézet</translation>
    </message>
    <message>
        <source>&amp;JavaScripts...</source>
        <translation>&amp;JavaSzkriptek...</translation>
    </message>
    <message>
        <source>Convert to Master Page...</source>
        <translation>Mester oldallá konvertálás...</translation>
    </message>
    <message>
        <source>&amp;Cascade</source>
        <translation>&amp;Kaszkád</translation>
    </message>
    <message>
        <source>&amp;Tile</source>
        <translation>&amp;Cím</translation>
    </message>
    <message>
        <source>&amp;About Plug-ins</source>
        <translation>&amp;Modulok névjegye</translation>
    </message>
    <message>
        <source>More Info...</source>
        <translation>További információ...</translation>
    </message>
    <message>
        <source>Copy Contents</source>
        <translation type="obsolete">Tartalom másolása</translation>
    </message>
    <message>
        <source>Paste Contents</source>
        <translation type="obsolete">Tartalom beillesztése</translation>
    </message>
    <message>
        <source>&amp;Printing Enabled</source>
        <translation>&amp;Nyomtatás engedélyezése</translation>
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
        <source>Show Rulers</source>
        <translation>Szabályozók mutatása</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <comment>

Document Outline Palette</comment>
        <translation type="obsolete">&amp;Körvonal</translation>
    </message>
    <message>
        <source>Solidus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Middle Dot</source>
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
        <translation>Oldalszám beszúrása</translation>
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
        <source>S&amp;tyles...</source>
        <translation>&amp;Stílusok...</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <comment>

type effect</comment>
        <translation type="obsolete">&amp;Körvonal</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <comment>

Convert to oulines</comment>
        <translation type="obsolete">&amp;Körvonalak</translation>
    </message>
    <message>
        <source>Save as &amp;EPS...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paste (&amp;Absolute)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished">&amp;Törlés</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <comment>type effect</comment>
        <translation type="unfinished">&amp;Körvonal</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <comment>Convert to oulines</comment>
        <translation type="unfinished">&amp;Körvonalak</translation>
    </message>
    <message>
        <source>Show Text Frame Columns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <comment>Document Outline Palette</comment>
        <translation type="unfinished">&amp;Körvonal</translation>
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
        <source>&amp;Frame...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preview Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Layer Indicators</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Patterns...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Send to Patterns</source>
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
        <translation type="unfinished">Igazítás és elosztás</translation>
    </message>
    <message>
        <source>Align</source>
        <translation type="unfinished">Igazítás</translation>
    </message>
    <message>
        <source>&amp;Selected Guide:</source>
        <translation type="unfinished">&amp;Kiválasztott segítség:</translation>
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
        <translation type="unfinished">Elosztás</translation>
    </message>
    <message>
        <source>&amp;Distance:</source>
        <translation type="unfinished">&amp;Távolság:</translation>
    </message>
</context>
<context>
    <name>AlignDistributePalette</name>
    <message>
        <source>Align and Distribute</source>
        <translation>Igazítás és elosztás</translation>
    </message>
    <message>
        <source>Align</source>
        <translation type="unfinished">Igazítás</translation>
    </message>
    <message>
        <source>&amp;Relative to:</source>
        <translation>&amp;Viszonylagos:</translation>
    </message>
    <message>
        <source>First Selected</source>
        <translation>Először kiválasztott</translation>
    </message>
    <message>
        <source>Last Selected</source>
        <translation>Utoljára kiválasztott</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Oldal</translation>
    </message>
    <message>
        <source>Margins</source>
        <translation>Margók</translation>
    </message>
    <message>
        <source>Guide</source>
        <translation>Segédlet</translation>
    </message>
    <message>
        <source>Selection</source>
        <translation>Kiválasztás</translation>
    </message>
    <message>
        <source>Align right sides of objects to left side of anchor</source>
        <translation type="obsolete">Az objektum jobb oldalának igazítása a horgony bal oldalához</translation>
    </message>
    <message>
        <source>Align left sides of objects to right side of anchor</source>
        <translation type="obsolete">Az objektum bal oldalának igazítása a horgony jobb oldalához</translation>
    </message>
    <message>
        <source>Align bottoms</source>
        <translation>Igazítás alulra</translation>
    </message>
    <message>
        <source>Align right sides</source>
        <translation>Igazítás jobb oldalra</translation>
    </message>
    <message>
        <source>Align tops of objects to bottom of anchor</source>
        <translation type="obsolete">Az objektum tetejének igazítása a horgony aljához</translation>
    </message>
    <message>
        <source>Center on vertical axis</source>
        <translation>Középre igazítás a függőleges tengelyen</translation>
    </message>
    <message>
        <source>Align left sides</source>
        <translation>Igazítés a bal oldalhoz</translation>
    </message>
    <message>
        <source>Center on horizontal axis</source>
        <translation>Középre igazítás a vízszintes tengelyen</translation>
    </message>
    <message>
        <source>Align bottoms of objects to top of anchor</source>
        <translation type="obsolete">Az objektum aljának igazítása a horgony tetejéhez</translation>
    </message>
    <message>
        <source>Align tops</source>
        <translation>Igazítás felülre</translation>
    </message>
    <message>
        <source>&amp;Selected Guide:</source>
        <translation>&amp;Kiválasztott segítség:</translation>
    </message>
    <message>
        <source>Distribute</source>
        <translation type="unfinished">Elosztás</translation>
    </message>
    <message>
        <source>Make horizontal gaps between objects equal</source>
        <translation type="obsolete">Objektumok közötti vízszintes közök egyenlőek legyenek</translation>
    </message>
    <message>
        <source>Make horizontal gaps between objects equal to the value specified</source>
        <translation type="obsolete">Objektumok közötti vízszintes közök egy adott értéknek megfelelőek legyenek</translation>
    </message>
    <message>
        <source>Distribute right sides equidistantly</source>
        <translation>Jobb oldalak elosztása egyenletesen</translation>
    </message>
    <message>
        <source>Distribute bottoms equidistantly</source>
        <translation>Gombok elosztása egyenletesen</translation>
    </message>
    <message>
        <source>Distribute centers equidistantly horizontally</source>
        <translation>Közepek elosztása vízszintesen egyenletesen</translation>
    </message>
    <message>
        <source>Make vertical gaps between objects equal</source>
        <translation type="obsolete">Objektumok közötti függőleges közök egyenlőek legyenek</translation>
    </message>
    <message>
        <source>Make vertical gaps between objects equal to the value specified</source>
        <translation type="obsolete">Objektumok közötti függőleges közök egy adott értéknek megfelelőek legyenek</translation>
    </message>
    <message>
        <source>Distribute left sides equidistantly</source>
        <translation>Bal oldalak elosztása egyenletesen</translation>
    </message>
    <message>
        <source>Distribute centers equidistantly vertically</source>
        <translation>Közepek elosztása függőlegesen egyenletesen</translation>
    </message>
    <message>
        <source>Distribute tops equidistantly</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Distance:</source>
        <translation>&amp;Távolság:</translation>
    </message>
    <message>
        <source>Distribute the items with the distance specified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None Selected</source>
        <translation>Nem kiválasztott</translation>
    </message>
    <message>
        <source>Some objects are locked.</source>
        <translation type="obsolete">Néhány objektum zárolt.</translation>
    </message>
    <message>
        <source>&amp;Unlock All</source>
        <translation type="obsolete">&amp;Minden zárolás feloldása</translation>
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
</context>
<context>
    <name>AlignSelect</name>
    <message>
        <source>Align Text Left</source>
        <translation>Szöveg balra igazítása</translation>
    </message>
    <message>
        <source>Align Text Right</source>
        <translation>Szöveg jobbra igazítása </translation>
    </message>
    <message>
        <source>Align Text Center</source>
        <translation>Szöveg középre igazítása</translation>
    </message>
    <message>
        <source>Align Text Justified</source>
        <translation>Sorkizárt igazítás</translation>
    </message>
    <message>
        <source>Align Text Forced Justified</source>
        <translation>Kényszerített sorkizárt igazítás</translation>
    </message>
</context>
<context>
    <name>Annot</name>
    <message>
        <source>Field Properties</source>
        <translation>Mező jellemzők</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Típus:</translation>
    </message>
    <message>
        <source>Button</source>
        <translation>Gomb</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation>Szövegmező</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation>Jelölő nézet</translation>
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
        <translation>Tulajdonságok</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Név:</translation>
    </message>
    <message>
        <source>Tool-Tip:</source>
        <translation type="obsolete">Buboréksúgó:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Szöveg</translation>
    </message>
    <message>
        <source>Font for use with PDF 1.3:</source>
        <translation>PDF 1.3-al használható betűtípusok:</translation>
    </message>
    <message>
        <source>Border</source>
        <translation>Keret</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Szín:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nincs</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation>Szélesség:</translation>
    </message>
    <message>
        <source>Thin</source>
        <translation>Vékony</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normál</translation>
    </message>
    <message>
        <source>Wide</source>
        <translation>Széles</translation>
    </message>
    <message>
        <source>Style:</source>
        <translation>Stílus:</translation>
    </message>
    <message>
        <source>Solid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dashed</source>
        <translation>Gondolatjel</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation>Aláhúzott</translation>
    </message>
    <message>
        <source>Beveled</source>
        <translation>Ferde</translation>
    </message>
    <message>
        <source>Inset</source>
        <translation>Beillesztés</translation>
    </message>
    <message>
        <source>Other</source>
        <translation>Egyéb</translation>
    </message>
    <message>
        <source>Read Only</source>
        <translation>Csak olvasható</translation>
    </message>
    <message>
        <source>Required</source>
        <translation>Szükséges</translation>
    </message>
    <message>
        <source>Don&apos;t Export Value</source>
        <translation type="obsolete">Nem exportálható érték</translation>
    </message>
    <message>
        <source>Visibility:</source>
        <translation>Láthatóság:</translation>
    </message>
    <message>
        <source>Visible</source>
        <translation>Látható</translation>
    </message>
    <message>
        <source>Hidden</source>
        <translation>Láthatatlan</translation>
    </message>
    <message>
        <source>No Print</source>
        <translation>Nem nyomtatható</translation>
    </message>
    <message>
        <source>No View</source>
        <translation>Nem látható</translation>
    </message>
    <message>
        <source>Appearance</source>
        <translation>Megjelenés</translation>
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
        <translation>Ikonok</translation>
    </message>
    <message>
        <source>Use Icons</source>
        <translation>Ikonok használata</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Eltávolítás</translation>
    </message>
    <message>
        <source>Pressed</source>
        <translation>Lenyomva</translation>
    </message>
    <message>
        <source>Roll Over</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Icon Placement...</source>
        <translation>Ikon elhelyezése</translation>
    </message>
    <message>
        <source>Highlight</source>
        <translation>Kijelölés</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation>Invertálás</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation>Szerkezet</translation>
    </message>
    <message>
        <source>Push</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Multi-Line</source>
        <translation>Többsoros</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>Jelszó</translation>
    </message>
    <message>
        <source>Limit of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Characters</source>
        <translation>Karakterek</translation>
    </message>
    <message>
        <source>Do Not Scroll</source>
        <translation>Ne görgesd</translation>
    </message>
    <message>
        <source>Do Not Spell Check</source>
        <translation>Ne ellenőrzid a helyesírást</translation>
    </message>
    <message>
        <source>Check Style:</source>
        <translation>Kijelölés stílusa:</translation>
    </message>
    <message>
        <source>Check</source>
        <translation>Kijelölés</translation>
    </message>
    <message>
        <source>Cross</source>
        <translation>Kereszt</translation>
    </message>
    <message>
        <source>Diamond</source>
        <translation>Gyémánt</translation>
    </message>
    <message>
        <source>Circle</source>
        <translation>Kör</translation>
    </message>
    <message>
        <source>Star</source>
        <translation>Csillag</translation>
    </message>
    <message>
        <source>Square</source>
        <translation>Négyzet</translation>
    </message>
    <message>
        <source>Default is Checked</source>
        <translation>Alapértelmezett: kijelölve</translation>
    </message>
    <message>
        <source>Editable</source>
        <translation>Szerkeszthető</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Beállítások</translation>
    </message>
    <message>
        <source>Go To</source>
        <translation>Ugrás</translation>
    </message>
    <message>
        <source>Submit Form</source>
        <translation>Űrlap elküldése</translation>
    </message>
    <message>
        <source>Reset Form</source>
        <translation>Űrlap törlése</translation>
    </message>
    <message>
        <source>Import Data</source>
        <translation>Adat importálása</translation>
    </message>
    <message>
        <source>Event:</source>
        <translation>Esemény:</translation>
    </message>
    <message>
        <source>Mouse Up</source>
        <translation>Egér fel</translation>
    </message>
    <message>
        <source>Mouse Down</source>
        <translation>Egér le</translation>
    </message>
    <message>
        <source>Mouse Enter</source>
        <translation>Egér belépés</translation>
    </message>
    <message>
        <source>Mouse Exit</source>
        <translation>Egér kilépés</translation>
    </message>
    <message>
        <source>On Focus</source>
        <translation>Fókusz</translation>
    </message>
    <message>
        <source>On Blur</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Script:</source>
        <translation>Szkript:</translation>
    </message>
    <message>
        <source>Edit...</source>
        <translation>Szerkesztés...</translation>
    </message>
    <message>
        <source>Submit to URL:</source>
        <translation>Küldés URL-re:</translation>
    </message>
    <message>
        <source>Submit Data as HTML</source>
        <translation>Adat küldése HTML-ként</translation>
    </message>
    <message>
        <source>Import Data from:</source>
        <translation>Adat importálása</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>Cél</translation>
    </message>
    <message>
        <source>To File:</source>
        <translation>Fájlba:</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation>Módosítás...</translation>
    </message>
    <message>
        <source>Page:</source>
        <translation>Oldal:</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation>X pozíció:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation>Y pozíció:</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Művelet</translation>
    </message>
    <message>
        <source>Field is formatted as:</source>
        <translation>Mező formázva:</translation>
    </message>
    <message>
        <source>Plain</source>
        <translation>Egyszerű</translation>
    </message>
    <message>
        <source>Number</source>
        <translation>Szám</translation>
    </message>
    <message>
        <source>Percentage</source>
        <translation>Százalék</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Dátum</translation>
    </message>
    <message>
        <source>Time</source>
        <translation>Idő</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Egyedi</translation>
    </message>
    <message>
        <source>Number Format</source>
        <translation>Számformátum</translation>
    </message>
    <message>
        <source>Decimals:</source>
        <translation>Tizedesjegyek:</translation>
    </message>
    <message>
        <source>Use Currency Symbol</source>
        <translation>Pénzügyi szimbólum használata</translation>
    </message>
    <message>
        <source>Prepend Currency Symbol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Formatting</source>
        <translation>Formázás</translation>
    </message>
    <message>
        <source>Percent Format</source>
        <translation>Százalékformátum</translation>
    </message>
    <message>
        <source>Date Format</source>
        <translation>Dátumformátum</translation>
    </message>
    <message>
        <source>Time Format</source>
        <translation>Időformátum</translation>
    </message>
    <message>
        <source>Custom Scripts</source>
        <translation>Saját szkriptek</translation>
    </message>
    <message>
        <source>Format:</source>
        <translation>Formátum:</translation>
    </message>
    <message>
        <source>Keystroke:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Format</source>
        <translation>Formátum</translation>
    </message>
    <message>
        <source>Value is not validated</source>
        <translation>Az érték nincs jóváhagyva</translation>
    </message>
    <message>
        <source>Value must be greater than or equal to:</source>
        <translation>Az értéknek nagyobbnak vagy egyenlőnek kell lenni, mint</translation>
    </message>
    <message>
        <source>and less or equal to:</source>
        <translation>és kisebbnek vagy egyenlőnek, mint</translation>
    </message>
    <message>
        <source>Custom validate script:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Validate</source>
        <translation>Érvényesít</translation>
    </message>
    <message>
        <source>Value is not calculated</source>
        <translation>Érték nincs kiszámolva</translation>
    </message>
    <message>
        <source>Value is the</source>
        <translation>Az érték</translation>
    </message>
    <message>
        <source>sum</source>
        <translation>összeg</translation>
    </message>
    <message>
        <source>product</source>
        <translation>termék</translation>
    </message>
    <message>
        <source>average</source>
        <translation>átlagos</translation>
    </message>
    <message>
        <source>minimum</source>
        <translation>minimum</translation>
    </message>
    <message>
        <source>maximum</source>
        <translation>maximum</translation>
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
        <translation>Kiszámítás</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Rendben</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
    <message>
        <source>Flag is ignored for PDF 1.3</source>
        <translation>Jelző gigyelemn kívül marad 1.3 PDF esetén</translation>
    </message>
    <message>
        <source>Enter a comma separated list of fields here</source>
        <translation>Adja meg a vesszővel elválasztott mező listát</translation>
    </message>
    <message>
        <source>You need at least the Icon for Normal to use Icons for Buttons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Megnyitás</translation>
    </message>
    <message>
        <source>Example:</source>
        <translation>Példa:</translation>
    </message>
    <message>
        <source>Selection Change</source>
        <translation>Kiválasztás megváltoztatása</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>PDF fájlok (*.pdf);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>JavaScript</source>
        <translation>JavaSzkript</translation>
    </message>
    <message>
        <source>Images (*.tif *.png *.jpg *.xpm);;PostScript (*.eps);;All Files (*)</source>
        <translation type="obsolete">Képek (*.tif *.png *.jpg *.xpm);;PostScript (*.eps);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>None</source>
        <comment>

highlight</comment>
        <translation type="obsolete">Nincs</translation>
    </message>
    <message>
        <source>None</source>
        <comment>

action</comment>
        <translation type="obsolete">Nincs</translation>
    </message>
    <message>
        <source>None</source>
        <comment>highlight</comment>
        <translation type="unfinished">Nincs</translation>
    </message>
    <message>
        <source>None</source>
        <comment>action</comment>
        <translation type="unfinished">Nincs</translation>
    </message>
    <message>
        <source>Tooltip:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do Not Export Value</source>
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
        <translation>Megjegyzés tulajdonságai</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Szöveg</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Kapcsolat</translation>
    </message>
    <message>
        <source>External Link</source>
        <translation>Külső kapcsolat</translation>
    </message>
    <message>
        <source>External Web-Link</source>
        <translation>Külső web kapcsolat</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>Cél</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Megnyitás</translation>
    </message>
    <message>
        <source>PDF-Documents (*.pdf);;All Files (*)</source>
        <translation>PDF dokumentum (*.pdf);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>&amp;Type:</source>
        <translation>&amp;Típus:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Módosítás...</translation>
    </message>
    <message>
        <source>&amp;Page:</source>
        <translation>&amp;Oldal:</translation>
    </message>
    <message>
        <source>&amp;X-Pos</source>
        <translation>&amp;X pozíció</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y pozíció:</translation>
    </message>
</context>
<context>
    <name>ApplyMasterPageDialog</name>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normál</translation>
    </message>
    <message>
        <source>Apply Master Page</source>
        <translation>Mester oldal alkalmazása</translation>
    </message>
    <message>
        <source>&amp;Master Page:</source>
        <translation>&amp;Mester oldal:</translation>
    </message>
    <message>
        <source>Apply To</source>
        <translation>Alkalmazás</translation>
    </message>
    <message>
        <source>Current &amp;page</source>
        <translation>Jelenlegi oldal</translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation>Alt+P</translation>
    </message>
    <message>
        <source>&amp;Even pages</source>
        <translation>&amp;Páros oldalak</translation>
    </message>
    <message>
        <source>Alt+E</source>
        <translation>Alt+E</translation>
    </message>
    <message>
        <source>O&amp;dd pages</source>
        <translation>Pá&amp;ratlan oldalak</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>&amp;All pages</source>
        <translation>&amp;Minden oldal</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Within range</source>
        <translation>&amp;Tartományon belül</translation>
    </message>
    <message>
        <source>Alt+W</source>
        <translation>Alt+W</translation>
    </message>
    <message>
        <source>to</source>
        <translation type="unfinished"></translation>
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
        <translation>A kijelölt mester oldal alkalmazása a páros, páratlan vagy az összes oldalon a következő tartományban</translation>
    </message>
</context>
<context>
    <name>ArrowChooser</name>
    <message>
        <source>None</source>
        <translation>Nincs</translation>
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
        <source>Error opening file: %1</source>
        <translation>Hiba fájl megnyitásakor: %1</translation>
    </message>
    <message>
        <source>12 or 13 digits</source>
        <translation>12 vagy 13 számjegy</translation>
    </message>
    <message>
        <source>8 digits</source>
        <translation>8 számjegy</translation>
    </message>
    <message>
        <source>11 or 12 digits</source>
        <translation>11 vagy 12 számjegy</translation>
    </message>
    <message>
        <source>7 or 8 digits</source>
        <translation>7 vagy 8 számjegy</translation>
    </message>
    <message>
        <source>5 digits</source>
        <translation>5 számjegy</translation>
    </message>
    <message>
        <source>2 digits</source>
        <translation>2 számjegy</translation>
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
        <source>Variable number of digits. An ITF-14 is 14 characters and does not have a check digit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Variable number of digits</source>
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
        <source>Barcode incomplete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>For ISBN-10 the data should contain 9 or 10 <byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/>digits separated appropriately by dash characters.
For ISBN-13 the data should contain 12 or 13 <byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/>digits separated appropriately by dash characters.
If the last digit is not given then the ISBN <byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/><byte value="x9"/>checkdigit is calculated automatically.</source>
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
        <translation>&amp;Típus:</translation>
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
        <translation>Alt+I</translation>
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
        <translation>Alt+G</translation>
    </message>
    <message>
        <source>Draw arrows to be sure of space next the code</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Színek</translation>
    </message>
    <message>
        <source>&amp;Background</source>
        <translation>&amp;Háttér</translation>
    </message>
    <message>
        <source>Alt+B</source>
        <translation>Alt+B</translation>
    </message>
    <message>
        <source>Background color - under the code lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Lines</source>
        <translation>&amp;Vonalak</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <source>Color of the lines in barcode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Text</source>
        <translation>&amp;Szöveg</translation>
    </message>
    <message>
        <source>Alt+T</source>
        <translation>Alt+T</translation>
    </message>
    <message>
        <source>Color of the text and numbers</source>
        <translation>A szöveg és a számok színe</translation>
    </message>
    <message>
        <source>Hints and help is shown here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preview of the result. 72dpi sample.</source>
        <translation>Az eredmény előnézete. 72 dpi felbontású minta.</translation>
    </message>
    <message>
        <source>Co&amp;de:</source>
        <translation>&amp;Kód:</translation>
    </message>
    <message>
        <source>I&amp;nclude checksum</source>
        <translation>&amp;Ellenőrző összeg belefoglalása</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation>Alt+N</translation>
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
        <translation>Alt+U</translation>
    </message>
    <message>
        <source>Include the checksum digit in the barcode text</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Biblio</name>
    <message>
        <source>Scrapbook</source>
        <translation>Gyűjtőalbum</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;Új</translation>
    </message>
    <message>
        <source>&amp;Load...</source>
        <translation type="obsolete">&amp;Betöltés...</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="obsolete">M&amp;ent másként...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">Be&amp;zárás</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="obsolete">&amp;Fájl</translation>
    </message>
    <message>
        <source>&amp;Preview</source>
        <translation type="obsolete">&amp;Előnézet</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Átnevezés</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Törlés</translation>
    </message>
    <message>
        <source>Object</source>
        <translation>Objektum</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Név:</translation>
    </message>
    <message>
        <source>New Entry</source>
        <translation>Új bejegyzés</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; is not unique.
Please choose another.</source>
        <translation>\&quot;%1\&quot; név nem egyedi. Válasszon másikat.</translation>
    </message>
    <message>
        <source>Choose a Scrapbook Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Jelölje ki a könyvtárat</translation>
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
    <message>
        <source>Copy To:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move To:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Main</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copied Items</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>BookMView</name>
    <message>
        <source>Bookmarks</source>
        <translation>Könyvjelzők</translation>
    </message>
    <message>
        <source>Move Bookmark</source>
        <translation>Könyvjelző mozgatása</translation>
    </message>
    <message>
        <source>Insert Bookmark</source>
        <translation>Könyvjelző beszúrása</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
</context>
<context>
    <name>BookPalette</name>
    <message>
        <source>Bookmarks</source>
        <translation>Könyvjelzők</translation>
    </message>
</context>
<context>
    <name>ButtonIcon</name>
    <message>
        <source>Icon Placement</source>
        <translation>Ikon elhelyezése</translation>
    </message>
    <message>
        <source>Layout:</source>
        <translation>Elrendezés:</translation>
    </message>
    <message>
        <source>Caption only</source>
        <translation>Csak szöveg</translation>
    </message>
    <message>
        <source>Icon only</source>
        <translation>Csak ikon</translation>
    </message>
    <message>
        <source>Caption below Icon</source>
        <translation>Szöveg az ikon alatt</translation>
    </message>
    <message>
        <source>Caption above Icon</source>
        <translation>Szöveg az ikon felett</translation>
    </message>
    <message>
        <source>Caption right to Icon</source>
        <translation>Szöveg az ikontól jobbra</translation>
    </message>
    <message>
        <source>Caption left to Icon</source>
        <translation>Szöveg az ikontól balra</translation>
    </message>
    <message>
        <source>Caption overlays Icon</source>
        <translation>Szöveg az ikonon</translation>
    </message>
    <message>
        <source>Scale:</source>
        <translation>Méretezés:</translation>
    </message>
    <message>
        <source>Always</source>
        <translation>Mindig</translation>
    </message>
    <message>
        <source>When Icon is too small</source>
        <translation>Ha az ikon túl kicsi</translation>
    </message>
    <message>
        <source>When Icon is too big</source>
        <translation>Ha az ikon túl nagy</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>Soha</translation>
    </message>
    <message>
        <source>Scale How:</source>
        <translation>Méretezés módja:</translation>
    </message>
    <message>
        <source>Proportional</source>
        <translation>Arányos</translation>
    </message>
    <message>
        <source>Non Proportional</source>
        <translation>Nem arányos</translation>
    </message>
    <message>
        <source>Icon</source>
        <translation>Ikon</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Rendben</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
    <message>
        <source>Reset</source>
        <translation>Visszaállítás</translation>
    </message>
</context>
<context>
    <name>CMSPrefs</name>
    <message>
        <source>&amp;Activate Color Management</source>
        <translation>&amp;Szín kezelés aktiválása</translation>
    </message>
    <message>
        <source>System Profiles</source>
        <translation>Rendszer profilok</translation>
    </message>
    <message>
        <source>&amp;Monitor:</source>
        <translation>&amp;Monitor:</translation>
    </message>
    <message>
        <source>P&amp;rinter:</source>
        <translation>&amp;Nyomtató:</translation>
    </message>
    <message>
        <source>Rendering Intents</source>
        <translation>Megjelenítési prioritások</translation>
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
        <translation>Telítettség</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Abszolút kolorimetriás</translation>
    </message>
    <message>
        <source>M&amp;onitor:</source>
        <translation type="obsolete">Monitor:</translation>
    </message>
    <message>
        <source>Pr&amp;inter:</source>
        <translation type="obsolete">Nyomtató:</translation>
    </message>
    <message>
        <source>Sim&amp;ulate Printer on the Screen</source>
        <translation>Nyomtató szimulálása a képernyőn</translation>
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
        <source>Default color profile for solid colors on the page</source>
        <translation type="obsolete">Alapértelmezett szín profil az oldalon lévő egyedi színekhez</translation>
    </message>
    <message>
        <source>Color profile that you have generated or received from the manufacturer.
This profile should be specific to your monitor and not a generic profile (i.e. sRGB).</source>
        <translation>Szín profil, melyet Ön előállított, vagy a gyártótól kapott. 
Ez a profil a monitorához kialakított s nem egy általános profil (pl. sRGB).</translation>
    </message>
    <message>
        <source>Color profile for your printer model from the manufacturer.
This profile should be specific to your printer and not a generic profile (i.e. sRGB).</source>
        <translation>Szín profil a nyomtatójához a gyártótól. Ez a profil a nyomtatójához kialakított s nem egy általános profil (pl. sRGB).</translation>
    </message>
    <message>
        <source>Enable &apos;soft proofing&apos; of how your document colors will print,
based on the chosen printer profile.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Method of showing colors on the screen which may not print properly.
This requires very accurate profiles and serves only as a warning.</source>
        <translation>A képernyőn megjelenő színek módszere miatt a nyomtatás nem megfelelő lehet. Emiatt nagyon precíz profilokra van szükség.</translation>
    </message>
    <message>
        <source>Black Point Compensation is a method of improving contrast in photos.
It is recommended that you enable this if you have photos in your document.</source>
        <translation>A Fekete pont kompenzáció egy módszer fényképek kontrasztjának növelésére. Javasolt az engedélyezése, ha a dokumentuma fényképet is tartalmaz.</translation>
    </message>
    <message>
        <source>&amp;RGB Pictures:</source>
        <translation>&amp;RGB képek:</translation>
    </message>
    <message>
        <source>&amp;CMYK Pictures:</source>
        <translation>&amp;CMYK képek:</translation>
    </message>
    <message>
        <source>Default color profile for imported CMYK images</source>
        <translation>Alapértelmezett szín profil az importált CMYK képekhez</translation>
    </message>
    <message>
        <source>Default color profile for imported RGB images</source>
        <translation>Alapértelmezett szín profil az importált RGB képekhez</translation>
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
        <source>Pictures:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sol&amp;id Colors:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Convert all colors to printer space</source>
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
        <source>Simulate a full color managed environment :
all colors, rgb or cmyk, are converted to printer color space.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CMYKChoose</name>
    <message>
        <source>Edit Color</source>
        <translation>Szín szerkesztése</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Név:</translation>
    </message>
    <message>
        <source>Color &amp;Model</source>
        <translation>&amp;Szín modell</translation>
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
        <translation>Webre alkalmas RGB</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Új</translation>
    </message>
    <message>
        <source>Old</source>
        <translation>Régi</translation>
    </message>
    <message>
        <source>HSV-Colormap</source>
        <translation>HSV-Színtérkép</translation>
    </message>
    <message>
        <source>C:</source>
        <translation>C:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
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
        <translation>Dinamikus színcsúszkák</translation>
    </message>
    <message>
        <source>Static Color Bars</source>
        <translation>Statikus színcsúszkák</translation>
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
        <source>Is Spot Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Is Registration Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You cannot create a color named &quot;%1&quot;.
It is a reserved name for transparent color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name of the color is not unique</source>
        <translation type="obsolete">A szín neve nem egyedi</translation>
    </message>
    <message>
        <source>Choosing this will enable printing this on all plates. Registration colors are used for printer marks such as crop marks, registration marks and the like. These are not typically used in the layout itself.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>If color management is enabled, a triangle warning indicator is a warning the the color maybe outside of the color gamut of the current printer profile selected. What this means is the color may not print exactly as indicated on screen. More hints about gamut warnings are in the online help under Color Management.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The name of the color already exists,
please choose another one.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choosing this will make this color a spot color, thus creating another spot when creating plates or separations. This is used most often when a logo or other color needs exact representation or cannot be replicated with CMYK inks. Metallic and fluorescent inks are good examples which cannot be easily replicated with CMYK inks.</source>
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
        <source>Normal Vision</source>
        <translation type="obsolete">Normál nézet</translation>
    </message>
    <message>
        <source>Merging colors</source>
        <translation type="unfinished">Színek összefésülése</translation>
    </message>
    <message>
        <source>Error: </source>
        <translation type="unfinished">Hiba: </translation>
    </message>
    <message>
        <source>Color %1 exists already!</source>
        <translation type="unfinished">%1 szín már létezik!</translation>
    </message>
    <message>
        <source>Color %1 appended.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Now opening the color manager.</source>
        <translation type="unfinished">Szín kezelő megnyitása folyik.</translation>
    </message>
    <message>
        <source>Color Merging</source>
        <translation type="unfinished">Szín összefésülés</translation>
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
        <translation type="unfinished">Színkerék</translation>
    </message>
    <message>
        <source>Click the wheel to get the base color. Its color model depends on the chosen tab.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation type="unfinished">CMYK</translation>
    </message>
    <message>
        <source>C:</source>
        <translation type="unfinished">C:</translation>
    </message>
    <message>
        <source>M:</source>
        <translation type="unfinished">M:</translation>
    </message>
    <message>
        <source>Y:</source>
        <translation type="unfinished">Y:</translation>
    </message>
    <message>
        <source>K:</source>
        <translation type="unfinished">K:</translation>
    </message>
    <message>
        <source>RGB:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>RGB</source>
        <translation type="unfinished">RGB</translation>
    </message>
    <message>
        <source>R:</source>
        <translation type="unfinished">R:</translation>
    </message>
    <message>
        <source>G:</source>
        <translation type="unfinished">G:</translation>
    </message>
    <message>
        <source>B:</source>
        <translation type="unfinished">B:</translation>
    </message>
    <message>
        <source>CMYK:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished">Dokumentum</translation>
    </message>
    <message>
        <source>Select one of the methods to create a color scheme. Refer to documentation for more information.</source>
        <translation type="unfinished">A szín séma létrehozásához válasszon a módszerek közül. További információt a dokumentációban talál.</translation>
    </message>
    <message>
        <source>Angle:</source>
        <translation type="unfinished">Szög:</translation>
    </message>
    <message>
        <source>Difference between the selected value and the counted ones. Refer to documentation for more information.</source>
        <translation type="unfinished">Különbség a kiválasztott érték és a számított között. További információért forduljon a dokumentációhoz.</translation>
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
        <translation type="unfinished">Létrehozott színek összefésülése a dokumentum színeivel</translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation type="unfinished">&amp;Csere</translation>
    </message>
    <message>
        <source>Alt+R</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Replace created colors in the document colors</source>
        <translation type="unfinished">Helyettesítse a létrejött színekkel a dokumentum színeit</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">&amp;Mégsem</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
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
        <translation type="unfinished">%</translation>
    </message>
    <message>
        <source>HSV:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>HSV</source>
        <translation type="unfinished">HSV</translation>
    </message>
    <message>
        <source>H:</source>
        <translation type="unfinished">H:</translation>
    </message>
    <message>
        <source>S:</source>
        <translation type="unfinished">S:</translation>
    </message>
    <message>
        <source>V:</source>
        <translation type="unfinished">V:</translation>
    </message>
    <message>
        <source>Result Colors</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CharSelect</name>
    <message>
        <source>Select Character:</source>
        <translation type="obsolete">Karakter kiválasztása:</translation>
    </message>
    <message>
        <source>Font:</source>
        <translation>Betűtípus:</translation>
    </message>
    <message>
        <source>Character Class:</source>
        <translation>Karakter osztály:</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation>&amp;Beillesztés</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">Be&amp;zárás</translation>
    </message>
    <message>
        <source>Insert the characters at the cursor in the text</source>
        <translation>Karakterek beillesztése a szövegbe a kurzornál</translation>
    </message>
    <message>
        <source>Delete the current selection(s).</source>
        <translation>Az érvényes kiválasztás(ok) törlése</translation>
    </message>
    <message>
        <source>Full Character Set</source>
        <translation>Teljes karakter készlet</translation>
    </message>
    <message>
        <source>Basic Latin</source>
        <translation>Alap latin</translation>
    </message>
    <message>
        <source>Latin-1 Supplement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Latin Extended-A</source>
        <translation>Bővített latin A</translation>
    </message>
    <message>
        <source>Latin Extended-B</source>
        <translation>Bővített latin B</translation>
    </message>
    <message>
        <source>General Punctuation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Super- and Subscripts</source>
        <translation>Felső és alsó index</translation>
    </message>
    <message>
        <source>Currency Symbols</source>
        <translation>Pénz szimbólumok</translation>
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
        <translation>Nyílak</translation>
    </message>
    <message>
        <source>Mathematical Operators</source>
        <translation>Matematikai operátorok</translation>
    </message>
    <message>
        <source>Box Drawing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Block Elements</source>
        <translation>Klisé elemek</translation>
    </message>
    <message>
        <source>Geometric Shapes</source>
        <translation>Geometrikus alakzatok</translation>
    </message>
    <message>
        <source>Miscellaneous Symbols</source>
        <translation>Különböző szimbólumok</translation>
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
        <translation>Ikerbetűk</translation>
    </message>
    <message>
        <source>Specials</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Greek</source>
        <translation>Görörg</translation>
    </message>
    <message>
        <source>Greek Extended</source>
        <translation>Görög kibővített</translation>
    </message>
    <message>
        <source>Cyrillic</source>
        <translation>Ciril</translation>
    </message>
    <message>
        <source>Cyrillic Supplement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arabic</source>
        <translation>Arab</translation>
    </message>
    <message>
        <source>Arabic Extended A</source>
        <translation>Bővített arab A</translation>
    </message>
    <message>
        <source>Arabic Extended B</source>
        <translation>Bővített arab B</translation>
    </message>
    <message>
        <source>Hebrew</source>
        <translation>Héber</translation>
    </message>
    <message>
        <source>&amp;Insert Code:</source>
        <translation type="obsolete">&amp;Kód beszúrása:</translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing</source>
        <translation type="obsolete">Párbeszéd ablak bezárása és visszatérés a szöveg szerkesztéséhez</translation>
    </message>
    <message>
        <source>You can see a thumbnail if you press and hold down the right mouse button. The Insert key inserts a Glyph into the Selection below and the Delete key removes the last inserted one</source>
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
        <translation type="unfinished">Törlés</translation>
    </message>
</context>
<context>
    <name>CheckDocument</name>
    <message>
        <source>Current Profile:</source>
        <translation>Jelenlegi profil:</translation>
    </message>
    <message>
        <source>Items</source>
        <translation>Elemek</translation>
    </message>
    <message>
        <source>Problems</source>
        <translation>Problémák</translation>
    </message>
    <message>
        <source>Glyphs missing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text overflow</source>
        <translation>Szöveg túlcsordulás</translation>
    </message>
    <message>
        <source>Object is not on a Page</source>
        <translation>Az objektum nincs az oldalon</translation>
    </message>
    <message>
        <source>Missing Image</source>
        <translation>Hiányzó kép</translation>
    </message>
    <message>
        <source>Object has transparency</source>
        <translation>Az objektum transzparens</translation>
    </message>
    <message>
        <source>Object is a placed PDF</source>
        <translation>Az objektum PDF</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Dokumentum</translation>
    </message>
    <message>
        <source>No Problems found</source>
        <translation>Nem keletkezett probléma</translation>
    </message>
    <message>
        <source>Page </source>
        <translation>Oldal</translation>
    </message>
    <message>
        <source>Free Objects</source>
        <translation>Szabad objektum</translation>
    </message>
    <message>
        <source>Problems found</source>
        <translation>Probléma keletkezett</translation>
    </message>
    <message>
        <source>Preflight Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object is a PDF Annotation or Field</source>
        <translation>Az objektum egy PDF kommentár vagy mező</translation>
    </message>
    <message>
        <source>&amp;Ignore Errors</source>
        <translation>Hibák figyelmen kívül hagyása</translation>
    </message>
    <message>
        <source>Check again</source>
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
        <source>Image is GIF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Rendben</translation>
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
</context>
<context>
    <name>ChooseStyles</name>
    <message>
        <source>Choose Styles</source>
        <translation>Stílus kiválasztása</translation>
    </message>
    <message>
        <source>Available Styles</source>
        <translation>Elérhető stílusok</translation>
    </message>
</context>
<context>
    <name>CollectForOutput</name>
    <message>
        <source>Choose a Directory</source>
        <translation>Könyvtár kiválasztása</translation>
    </message>
    <message>
        <source>Collecting...</source>
        <translation>Összegyűjtés...</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Figyelmeztetés</translation>
    </message>
    <message>
        <source>Cannot collect all files for output for file:
%1</source>
        <translation>Nem gyűjthetők össze a fájlok a %1 kimeneti fáljhoz.</translation>
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
        <translation>Színek</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importálás</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Új</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Szerkesztés</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>&amp;Kettőzés</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>&amp;Remove Unused</source>
        <translation>&amp;Nem használtak eltávolítása</translation>
    </message>
    <message>
        <source>Color Sets</source>
        <translation>Szín készlet</translation>
    </message>
    <message>
        <source>Current Color Set:</source>
        <translation>Jelenlegi szín készlet:</translation>
    </message>
    <message>
        <source>&amp;Save Color Set</source>
        <translation>&amp;Szín készket mentése</translation>
    </message>
    <message>
        <source>Choose a color set to load</source>
        <translation>Válassza ki a betöltendő szín készletet</translation>
    </message>
    <message>
        <source>Save the current color set</source>
        <translation>Jelenlegi szín készlet mentése</translation>
    </message>
    <message>
        <source>Remove unused colors from current document&apos;s color set</source>
        <translation>Nem használt színek eltávolítása a jelenlegi dokumentum szín készletéből</translation>
    </message>
    <message>
        <source>Import colors to the current set from an existing document</source>
        <translation>Egy létező dokumentumból a színek importálása a jelenlegi készletbe.</translation>
    </message>
    <message>
        <source>Create a new color within the current set</source>
        <translation>Új szín létrehozása a jelenlegi készletben</translation>
    </message>
    <message>
        <source>Edit the currently selected color</source>
        <translation>Kiválasztott szín szerkesztése</translation>
    </message>
    <message>
        <source>Make a copy of the currently selected color</source>
        <translation>Jelenleg kijelölt szín lemásolása</translation>
    </message>
    <message>
        <source>Delete the currently selected color</source>
        <translation>A kiválasztott szín törlése</translation>
    </message>
    <message>
        <source>Make the current colorset the default color set</source>
        <translation>A jelenlegi szín készlet legyen az alapértelmezett</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Név:</translation>
    </message>
    <message>
        <source>Choose a Name</source>
        <translation>Név kiválasztása</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Megnyitás</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="obsolete">Dokumentumok (*.sla *.sla.gz *.scd *.scd.gz);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="obsolete">Dokumentumok (*.sla *.scd);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>%1 másolása</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation>Új szín</translation>
    </message>
    <message>
        <source>If color management is enabled, a triangle warning indicator is a warning the the color maybe outside of the color gamut of the current printer profile selected.What this means is the color may not print exactly as indicated on screen. Spot colors are indicated by a red circle. Registration colors will have a registration mark next to the color. More hints about gamut warnings are in the online help under Color Management.</source>
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
        <translation type="unfinished">Információ</translation>
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
        <translation>Monokromatikus</translation>
    </message>
    <message>
        <source>Analogous</source>
        <translation>Analóg</translation>
    </message>
    <message>
        <source>Complementary</source>
        <translation>Komplemens</translation>
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
        <translation>Alapszín</translation>
    </message>
    <message>
        <source>Monochromatic Light</source>
        <translation>Monokromatikus világos</translation>
    </message>
    <message>
        <source>Monochromatic Dark</source>
        <translation>Monokromatikus sötét</translation>
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
    <name>ColorWheelDialog</name>
    <message>
        <source>Normal Vision</source>
        <translation type="obsolete">Normál nézet</translation>
    </message>
    <message>
        <source>Color Wheel</source>
        <translation type="obsolete">Színkerék</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="obsolete">Szín</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="obsolete">Név</translation>
    </message>
    <message>
        <source>C</source>
        <translation type="obsolete">C</translation>
    </message>
    <message>
        <source>M</source>
        <translation type="obsolete">M</translation>
    </message>
    <message>
        <source>Y</source>
        <translation type="obsolete">Y</translation>
    </message>
    <message>
        <source>K</source>
        <translation type="obsolete">K</translation>
    </message>
    <message>
        <source>Select Method:</source>
        <translation type="obsolete">Módszer kiválasztása:</translation>
    </message>
    <message>
        <source>Angle (0 - 90 degrees):</source>
        <translation type="obsolete">Szög (0 - 90 fok):</translation>
    </message>
    <message>
        <source>&amp;Merge Colors</source>
        <translation type="obsolete">&amp;Színek összefésülése</translation>
    </message>
    <message>
        <source>&amp;Replace Colors</source>
        <translation type="obsolete">Színek &amp;kicserélése</translation>
    </message>
    <message>
        <source>Merge created colors into the document colors</source>
        <translation type="obsolete">Létrehozott színek összefésülése a dokumentum színeivel</translation>
    </message>
    <message>
        <source>Replace created colors in the document colors</source>
        <translation type="obsolete">Helyettesítse a létrejött színekkel a dokumentum színeit</translation>
    </message>
    <message>
        <source>Merging colors</source>
        <translation type="obsolete">Színek összefésülése</translation>
    </message>
    <message>
        <source>Error: </source>
        <translation type="obsolete">Hiba: </translation>
    </message>
    <message>
        <source>Now opening the color manager.</source>
        <translation type="obsolete">Szín kezelő megnyitása folyik.</translation>
    </message>
    <message>
        <source>Color Merging</source>
        <translation type="obsolete">Szín összefésülés</translation>
    </message>
    <message>
        <source>Cr&amp;eate color...</source>
        <translation type="obsolete">Szín létrehozása...</translation>
    </message>
    <message>
        <source>&amp;Import existing color...</source>
        <translation type="obsolete">Létező szín importálása...</translation>
    </message>
    <message>
        <source>&amp;Merge colors</source>
        <translation type="obsolete">Színek összefésülése</translation>
    </message>
    <message>
        <source>&amp;Replace colors</source>
        <translation type="obsolete">Színek kicserélése</translation>
    </message>
    <message>
        <source>E&amp;xit</source>
        <translation type="obsolete">Kilépés</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation type="obsolete">&amp;Szín</translation>
    </message>
    <message>
        <source>Difference between the selected value and the counted ones. Refer to documentation for more information.</source>
        <translation type="obsolete">Különbség a kiválasztott érték és a számított között. További információért forduljon a dokumentációhoz.</translation>
    </message>
    <message>
        <source>Sample color scheme</source>
        <translation type="obsolete">Szín séma minta</translation>
    </message>
    <message>
        <source>Select one of the methods to create a color scheme. Refer to documentation for more information.</source>
        <translation type="obsolete">A szín séma létrehozásához válasszon a módszerek közül. További információt a dokumentációban talál.</translation>
    </message>
    <message>
        <source>Colors of your chosen color scheme</source>
        <translation type="obsolete">A kiválasztott szín séma színei</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation type="obsolete">Új szín</translation>
    </message>
    <message>
        <source>Color %1 exists already!</source>
        <translation type="obsolete">%1 szín már létezik!</translation>
    </message>
</context>
<context>
    <name>ColorWheelPlugin</name>
    <message>
        <source>&amp;Color Wheel...</source>
        <translation>&amp;Színkerék...</translation>
    </message>
    <message>
        <source>Color setting helper</source>
        <translation>Szín beállítás segítség</translation>
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
        <translation>&amp;Alkalmazás</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Mégsem</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Rendben</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Mentés</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Figyelmeztetés</translation>
    </message>
    <message>
        <source>None</source>
        <comment>

color name</comment>
        <translation type="obsolete">Nincs</translation>
    </message>
    <message>
        <source>Custom</source>
        <comment>

CommonStrings, custom page size</comment>
        <translation type="obsolete">Egyedi</translation>
    </message>
    <message>
        <source>Single Page</source>
        <translation>Egyoldalas</translation>
    </message>
    <message>
        <source>Double Sided</source>
        <translation>Kétoldalas</translation>
    </message>
    <message>
        <source>3-Fold</source>
        <translation>3 lapos</translation>
    </message>
    <message>
        <source>4-Fold</source>
        <translation>4 lapos</translation>
    </message>
    <message>
        <source>Left Page</source>
        <translation type="obsolete">Bal oldal</translation>
    </message>
    <message>
        <source>Middle</source>
        <translation type="obsolete">Középső</translation>
    </message>
    <message>
        <source>Middle Left</source>
        <translation type="obsolete">Középső bal</translation>
    </message>
    <message>
        <source>Middle Right</source>
        <translation type="obsolete">Középső jobb</translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation type="obsolete">Jobb oldal</translation>
    </message>
    <message>
        <source>None</source>
        <comment>color name</comment>
        <translation type="unfinished">Nincs</translation>
    </message>
    <message>
        <source>Custom</source>
        <comment>CommonStrings, custom page size</comment>
        <translation type="unfinished">Egyedi</translation>
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
        <translation type="unfinished">Március</translation>
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
        <source>Yes</source>
        <translation type="unfinished">Igen</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="unfinished">Nem</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="unfinished">&amp;Igen</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="unfinished">&amp;Nem</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normál</translation>
    </message>
    <message>
        <source>Left Page</source>
        <comment>Left page location</comment>
        <translation type="unfinished">Bal oldal</translation>
    </message>
    <message>
        <source>Middle</source>
        <comment>Middle page location</comment>
        <translation type="unfinished">Középső</translation>
    </message>
    <message>
        <source>Middle Left</source>
        <comment>Middle Left page location</comment>
        <translation type="unfinished">Középső bal</translation>
    </message>
    <message>
        <source>Middle Right</source>
        <comment>Middle Right page location</comment>
        <translation type="unfinished">Középső jobb</translation>
    </message>
    <message>
        <source>Right Page</source>
        <comment>Right page location</comment>
        <translation type="unfinished">Jobb oldal</translation>
    </message>
    <message>
        <source>Normal</source>
        <comment>Default single master page</comment>
        <translation type="unfinished">Normál</translation>
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
        <translation type="unfinished">Normál nézet</translation>
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
        <translation type="unfinished">Egyedi:</translation>
    </message>
</context>
<context>
    <name>Cpalette</name>
    <message>
        <source>Shade:</source>
        <translation>Árnyalat:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation>Átlátszatlanság:</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normál</translation>
    </message>
    <message>
        <source>Horizontal Gradient</source>
        <translation>Vízszintes átmenet</translation>
    </message>
    <message>
        <source>Vertical Gradient</source>
        <translation>Függőleges átmenet</translation>
    </message>
    <message>
        <source>Diagonal Gradient</source>
        <translation>Átlós átmenet</translation>
    </message>
    <message>
        <source>Cross Diagonal Gradient</source>
        <translation>Kereszt átlós átmenet</translation>
    </message>
    <message>
        <source>Radial Gradient</source>
        <translation>Sugaras átmenet</translation>
    </message>
    <message>
        <source>Free linear Gradient</source>
        <translation>Szabad vonalas átmenet</translation>
    </message>
    <message>
        <source>Free radial Gradient</source>
        <translation>Szabad sugaras átmenet</translation>
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
        <source> pt</source>
        <translation>pt</translation>
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
        <source>Edit Line Color Properties</source>
        <translation>Vonal szín tulajdonságainak szerkesztése</translation>
    </message>
    <message>
        <source>Edit Fill Color Properties</source>
        <translation>Kitöltő szín tulajdonságainak szerkesztése</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation>Színtelítettség</translation>
    </message>
    <message>
        <source>Normal or gradient fill method</source>
        <translation>Normál vagy átmenet kitöltési módszer</translation>
    </message>
    <message>
        <source>Set the transparency for the color selected</source>
        <translation>Kiválasztott szín atlátszhatóságának beállítása</translation>
    </message>
    <message>
        <source>Move Vector</source>
        <translation>Vektor mozgatása</translation>
    </message>
    <message>
        <source>Move the start of the gradient vector with the left mouse button pressed and move the end of the gradient vector with the right mouse button pressed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transparency Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Blend Mode:</source>
        <translation type="unfinished">Szemcsézés módja:</translation>
    </message>
    <message>
        <source>Darken</source>
        <translation type="unfinished">Sötétít</translation>
    </message>
    <message>
        <source>Lighten</source>
        <translation type="unfinished">Világosít</translation>
    </message>
    <message>
        <source>Multiply</source>
        <translation type="unfinished">Többszörös</translation>
    </message>
    <message>
        <source>Screen</source>
        <translation type="unfinished">Képernyő</translation>
    </message>
    <message>
        <source>Overlay</source>
        <translation type="unfinished">Átfedés</translation>
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
        <translation type="unfinished">Különbség</translation>
    </message>
    <message>
        <source>Exlusion</source>
        <translation type="obsolete">Kivétel</translation>
    </message>
    <message>
        <source>Color Dodge</source>
        <translation type="unfinished">Szín trükk</translation>
    </message>
    <message>
        <source>Color Burn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hue</source>
        <translation type="unfinished">Színárnyalat</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished">Telítettség</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished">Szín</translation>
    </message>
    <message>
        <source>Luminosity</source>
        <translation type="unfinished">Fényesség</translation>
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
        <translation type="unfinished">Y:</translation>
    </message>
    <message>
        <source>Scaling</source>
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
        <source>Pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exclusion</source>
        <translation type="unfinished">Kivétel</translation>
    </message>
    <message>
        <source>X-Scale:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y-Scale:</source>
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
        <translation type="unfinished">Ig:</translation>
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
        <translation type="unfinished">Alt+A</translation>
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
        <translation type="unfinished">Alt+U</translation>
    </message>
    <message>
        <source>Move &amp;Down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished">Alt+D</translation>
    </message>
    <message>
        <source>De&amp;lete</source>
        <translation type="unfinished">&amp;Törlés</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="unfinished">Alt+L</translation>
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
        <translation type="unfinished">&amp;Rendben</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="unfinished">Alt+O</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">&amp;Mégsem</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
</context>
<context>
    <name>CsvDialog</name>
    <message>
        <source>CSV Importer Options</source>
        <translation>CSV importálás beállítások</translation>
    </message>
    <message>
        <source>Field delimiter:</source>
        <translation>Mező határoló:</translation>
    </message>
    <message>
        <source>(TAB)</source>
        <translation>(TAB)</translation>
    </message>
    <message>
        <source>Value delimiter:</source>
        <translation>Érték határoló:</translation>
    </message>
    <message>
        <source>First row is a header</source>
        <translation>Az első sor a fejléc</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Rendben</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
    <message>
        <source>None</source>
        <comment>

delimiter</comment>
        <translation type="obsolete">Nincs</translation>
    </message>
    <message>
        <source>None</source>
        <comment>delimiter</comment>
        <translation type="unfinished">Nincs</translation>
    </message>
</context>
<context>
    <name>CupsOptions</name>
    <message>
        <source>Printer Options</source>
        <translation>Nyomtató beállítások</translation>
    </message>
    <message>
        <source>Page Set</source>
        <translation>Oldal beállítás</translation>
    </message>
    <message>
        <source>All Pages</source>
        <translation>Minden oldal</translation>
    </message>
    <message>
        <source>Even Pages only</source>
        <translation>Csak páros oldalak</translation>
    </message>
    <message>
        <source>Odd Pages only</source>
        <translation>Csak páratlan oldalak</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation>Tükrözés</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="obsolete">Nem</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="obsolete">Igen</translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation>Orientáció</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Álló</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Fekvő</translation>
    </message>
    <message>
        <source>N-Up Printing</source>
        <translation>n-Up nyomtatás</translation>
    </message>
    <message>
        <source>Page per Sheet</source>
        <translation>Oldal ívenként</translation>
    </message>
    <message>
        <source>Pages per Sheet</source>
        <translation>Oldalak ívenként</translation>
    </message>
    <message>
        <source>Option</source>
        <translation>Beállítások</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Érték</translation>
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
        <translation type="unfinished">Megnyitás</translation>
    </message>
    <message>
        <source>Curve Files (*.scu);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished">Ment másként</translation>
    </message>
    <message>
        <source>Cannot write the file: 
%1</source>
        <translation type="unfinished">Fájl nem írható: %1</translation>
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
        <translation>&amp;Fájl tömörítése</translation>
    </message>
    <message>
        <source>&amp;Include Fonts</source>
        <translation>&amp;Fontok belefoglalása</translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation>Kódolás:</translation>
    </message>
    <message>
        <source>Moves to your Document Directory.
This can be set in the Preferences.</source>
        <translation>Eljutás a dokumentum könyvtárába. Ez megadható a Beállításoknál.</translation>
    </message>
    <message>
        <source>&amp;Include ICC Profiles</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CwSetColor</name>
    <message>
        <source>Set Color Components</source>
        <translation type="obsolete">Szín komponensek beállítása</translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation type="obsolete">CMYK</translation>
    </message>
    <message>
        <source>RGB</source>
        <translation type="obsolete">RGB</translation>
    </message>
    <message>
        <source>HSV</source>
        <translation type="obsolete">HSV</translation>
    </message>
    <message>
        <source>H:</source>
        <translation type="obsolete">H:</translation>
    </message>
    <message>
        <source>S:</source>
        <translation type="obsolete">S:</translation>
    </message>
    <message>
        <source>V:</source>
        <translation type="obsolete">V:</translation>
    </message>
    <message>
        <source>R:</source>
        <translation type="obsolete">R:</translation>
    </message>
    <message>
        <source>G:</source>
        <translation type="obsolete">G:</translation>
    </message>
    <message>
        <source>B:</source>
        <translation type="obsolete">B:</translation>
    </message>
    <message>
        <source>C:</source>
        <translation type="obsolete">C:</translation>
    </message>
    <message>
        <source>M:</source>
        <translation type="obsolete">M:</translation>
    </message>
    <message>
        <source>Y:</source>
        <translation type="obsolete">Y:</translation>
    </message>
    <message>
        <source>K:</source>
        <translation type="obsolete">K:</translation>
    </message>
    <message>
        <source>Set &amp;RGB</source>
        <translation type="obsolete">&amp;RGB beállítása</translation>
    </message>
    <message>
        <source>Set C&amp;MYK</source>
        <translation type="obsolete">&amp;CMYK beállítása</translation>
    </message>
    <message>
        <source>Set &amp;HSV</source>
        <translation type="obsolete">&amp;HSV beállítása</translation>
    </message>
</context>
<context>
    <name>DeferredTask</name>
    <message>
        <source>Cancelled by user</source>
        <translation>Felhasználó megszakította</translation>
    </message>
</context>
<context>
    <name>DelColor</name>
    <message>
        <source>Delete Color</source>
        <translation>Szín törlése</translation>
    </message>
    <message>
        <source>Delete Color:</source>
        <translation>Szín törlése:</translation>
    </message>
    <message>
        <source>Replace With:</source>
        <translation>Helyettesítve:</translation>
    </message>
</context>
<context>
    <name>DelPages</name>
    <message>
        <source>Delete Pages</source>
        <translation>Oldalak törlése</translation>
    </message>
    <message>
        <source>to:</source>
        <translation>oldalig:</translation>
    </message>
    <message>
        <source>Delete From:</source>
        <translation>Törlés eddig:</translation>
    </message>
</context>
<context>
    <name>DelStyle</name>
    <message>
        <source>Delete Style</source>
        <translation>Stílus törlése</translation>
    </message>
    <message>
        <source>Delete Style:</source>
        <translation>Stílus törlése:</translation>
    </message>
    <message>
        <source>Replace With:</source>
        <translation>Helyettesítve:</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation>Nincs stílus megadva</translation>
    </message>
</context>
<context>
    <name>DocIm</name>
    <message>
        <source>Importing failed</source>
        <translation>Importálás hibát jelzett</translation>
    </message>
    <message>
        <source>Importing Word document failed 
%1</source>
        <translation>Word dokumentum importálása hibát jelzett</translation>
    </message>
</context>
<context>
    <name>DocInfos</name>
    <message>
        <source>Document Information</source>
        <translation>Dokumentum információ</translation>
    </message>
    <message>
        <source>&amp;Title:</source>
        <translation>&amp;Cím:</translation>
    </message>
    <message>
        <source>&amp;Author:</source>
        <translation>&amp;Szerző:</translation>
    </message>
    <message>
        <source>&amp;Keywords:</source>
        <translation>&amp;Kulcsszavak:</translation>
    </message>
    <message>
        <source>Descri&amp;ption:</source>
        <translation>&amp;Leírás:</translation>
    </message>
    <message>
        <source>P&amp;ublisher:</source>
        <translation>&amp;Kiadó:</translation>
    </message>
    <message>
        <source>&amp;Contributors:</source>
        <translation>&amp;Közreműködők:</translation>
    </message>
    <message>
        <source>Dat&amp;e:</source>
        <translation>&amp;Dátum:</translation>
    </message>
    <message>
        <source>T&amp;ype:</source>
        <translation>&amp;Típus:</translation>
    </message>
    <message>
        <source>F&amp;ormat:</source>
        <translation>&amp;Formátum:</translation>
    </message>
    <message>
        <source>Identi&amp;fier:</source>
        <translation>&amp;Azonosító:</translation>
    </message>
    <message>
        <source>&amp;Source:</source>
        <translation>&amp;Forrás:</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Nyelv:</translation>
    </message>
    <message>
        <source>&amp;Relation:</source>
        <translation>&amp;Összefüggés:</translation>
    </message>
    <message>
        <source>Co&amp;verage:</source>
        <translation>&amp;Terjedelem:</translation>
    </message>
    <message>
        <source>Ri&amp;ghts:</source>
        <translation>&amp;Jogok:</translation>
    </message>
    <message>
        <source>Further &amp;Information</source>
        <translation>&amp;További információ</translation>
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
        <source>An unambiguous reference to the document within a given context such as ISBN or URI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A reference to a document from which the present document is derived, eg. ISBN or URI</source>
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
        <translation>Információ a dokumentummal kapcsolatos jogokról, pl. másolásvédelem, szabadalom, védett márka</translation>
    </message>
    <message>
        <source>Documen&amp;t</source>
        <translation>&amp;Dokumentum</translation>
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
        <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting. RFC2045,RFC2046 for MIME types are also useful here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The language in which the content of the document is written, usually a ISO-639 language code optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
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
        <translation>A kijelölt szakasz törlése.</translation>
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
    <message>
        <source>&lt;b&gt;Name:&lt;/b&gt; Optional name for section eg. Index&lt;br/&gt;&lt;b&gt;Shown:&lt;/b&gt; Select to show the page numbers in this section if there is one or more text frames setup to do so.&lt;br/&gt;&lt;b&gt;From:&lt;/b&gt; The page index for this section to start at.&lt;br/&gt;&lt;b&gt;To:&lt;/b&gt; The page index for this section to stop at.&lt;br/&gt;&lt;b&gt;Style:&lt;/b&gt; Select the page number style to be used.&lt;br/&gt;&lt;b&gt;Start:&lt;/b&gt; The index within the Style&apos;s range to star at. Eg. If Start=2 and Style=a,b,c, ..., the numbers will begin at b. For the first section in the document this replaces the older First Page Number in the new file window.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Number Out Of Bounds</source>
        <translation>Oldalszám kívül esik a tartományon</translation>
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
        <translation>Dokumentum szekciók</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Név</translation>
    </message>
    <message>
        <source>Shown</source>
        <translation>Mutat</translation>
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
        <translation>Stílus</translation>
    </message>
    <message>
        <source>Start</source>
        <translation>Kezdet</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Hozzáadás</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
</context>
<context>
    <name>DocumentItemAttributes</name>
    <message>
        <source>Relates To</source>
        <translation>Összefüggésben</translation>
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
        <source>Text Frames</source>
        <translation>Szöveg keretek</translation>
    </message>
    <message>
        <source>Image Frames</source>
        <translation>Kép keretek</translation>
    </message>
    <message>
        <source>Boolean</source>
        <translation>Logikai</translation>
    </message>
    <message>
        <source>Integer</source>
        <translation>Egész</translation>
    </message>
    <message>
        <source>String</source>
        <translation>Sztring</translation>
    </message>
    <message>
        <source>None</source>
        <comment>

relationship</comment>
        <translation type="obsolete">Nincs</translation>
    </message>
    <message>
        <source>None</source>
        <comment>

auto add</comment>
        <translation type="obsolete">Nincs</translation>
    </message>
    <message>
        <source>None</source>
        <comment>

types</comment>
        <translation type="obsolete">Nincs</translation>
    </message>
    <message>
        <source>Real Number</source>
        <translation>Valós szám</translation>
    </message>
    <message>
        <source>None</source>
        <comment>relationship</comment>
        <translation type="unfinished">Nincs</translation>
    </message>
    <message>
        <source>None</source>
        <comment>auto add</comment>
        <translation type="unfinished">Nincs</translation>
    </message>
    <message>
        <source>None</source>
        <comment>types</comment>
        <translation type="unfinished">Nincs</translation>
    </message>
</context>
<context>
    <name>DocumentItemAttributesBase</name>
    <message>
        <source>Document Item Attributes</source>
        <translation>Dokumentum elem jellemzők</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Név</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Típus</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Érték</translation>
    </message>
    <message>
        <source>Parameter</source>
        <translation>Paraméter</translation>
    </message>
    <message>
        <source>Relationship</source>
        <translation>Összefüggés</translation>
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
        <translation>&amp;Hozzáadás</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Másolás</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Törlés</translation>
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
        <translation>Nyomtató beállítása</translation>
    </message>
    <message>
        <source>Print Destination</source>
        <translation>Nyomtatási cél</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Fájl</translation>
    </message>
    <message>
        <source>&amp;Options...</source>
        <translation>&amp;Beállítások...</translation>
    </message>
    <message>
        <source>&amp;File:</source>
        <translation>&amp;Fájl:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Módosítás...</translation>
    </message>
    <message>
        <source>A&amp;lternative Printer Command</source>
        <translation>&amp;Alternatív nyomtató parancs</translation>
    </message>
    <message>
        <source>Co&amp;mmand:</source>
        <translation>&amp;Parancs:</translation>
    </message>
    <message>
        <source>Range</source>
        <translation>Tartomány</translation>
    </message>
    <message>
        <source>Print &amp;All</source>
        <translation>&amp;Minden nyomtatása</translation>
    </message>
    <message>
        <source>Print Current Pa&amp;ge</source>
        <translation>&amp;Aktuális oldal nyomtatása</translation>
    </message>
    <message>
        <source>Print &amp;Range</source>
        <translation>&amp;Tartomány nyomtatása</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>N&amp;umber of Copies:</source>
        <translation>&amp;Másolatok száma:</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Beállítások</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Minden</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation>Kékeszöld</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation>Bíborvörös</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation>Sárga</translation>
    </message>
    <message>
        <source>Black</source>
        <translation>Fekete</translation>
    </message>
    <message>
        <source>&amp;Print</source>
        <translation>&amp;Nyomtatás</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Ment másként</translation>
    </message>
    <message>
        <source>Print Normal</source>
        <translation>Normál nyomtatás</translation>
    </message>
    <message>
        <source>Print Separations</source>
        <translation>Elválasztó oldal nyomtatása</translation>
    </message>
    <message>
        <source>Print in Color if Available</source>
        <translation>Színes nyomtatás, ha lehetséges</translation>
    </message>
    <message>
        <source>Print in Grayscale</source>
        <translation>Nyomtatás szürkeskálában</translation>
    </message>
    <message>
        <source>PostScript Level 1</source>
        <translation>PostScript 1 szint</translation>
    </message>
    <message>
        <source>PostScript Level 2</source>
        <translation>PostScript 2 szint</translation>
    </message>
    <message>
        <source>PostScript Level 3</source>
        <translation>PostScript 3 szint</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Oldal</translation>
    </message>
    <message>
        <source>Mirror Page(s) Horizontal</source>
        <translation>Vízszintesen tükrözött oldal(ak)</translation>
    </message>
    <message>
        <source>Mirror Page(s) Vertical</source>
        <translation>Függőlegesen tükrözött oldal(ak)</translation>
    </message>
    <message>
        <source>Set Media Size</source>
        <translation>Média méret beállítása</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Szín</translation>
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
        <source>Apply ICC Profiles</source>
        <translation>ICC profilok alkalmazása</translation>
    </message>
    <message>
        <source>Advanced Options</source>
        <translation>További beállítások</translation>
    </message>
    <message>
        <source>Preview...</source>
        <translation>Előnézet...</translation>
    </message>
    <message>
        <source>Sets the PostScript Level.
 Setting to Level 1 or 2 can create huge files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostScript Files (*.ps);;All Files (*)</source>
        <translation>PostScript fájlok (*.ps);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>Use an alternative print manager, such as kprinter or gtklp, to utilize additional printing options</source>
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
        <source>Allows you to embed ICC profiles in the print stream when color management is enabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This enables you to explicitely set the media size of the PostScript file. Not recommended unless requested by your printer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clip to Page Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to retrieve printer settings</source>
        <translation>Nyomtató beállítások nem érhetők el</translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page</source>
        <translation>A nyomtatott oldalon ne mutassa a margón kívüli objektumokat</translation>
    </message>
    <message>
        <source>Force Overprint Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables global Overprint Mode for this document, overrides object settings</source>
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
        <translation type="unfinished">Jobb:</translation>
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
        <source>Importing File:
%1
failed!</source>
        <translation>%1 fájl importálásakor hiba történt!</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation>Végzetes hiba</translation>
    </message>
    <message>
        <source>Converting Image:
%1
failed!</source>
        <translation type="obsolete">Kép konvertálása hibát jelzett: 
%1</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Hiba</translation>
    </message>
    <message>
        <source>Analyzing PostScript:</source>
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
        <source>Group%1</source>
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
        <translation>Stílus szerkesztése</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Név:</translation>
    </message>
    <message>
        <source>Character</source>
        <translation>Karakter</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>&amp;Lines:</source>
        <translation>&amp;Vonalak:</translation>
    </message>
    <message>
        <source>Tabulators and Indentation</source>
        <translation>Tabulátorok és rovátkolás</translation>
    </message>
    <message>
        <source>Name of your paragraph style</source>
        <translation>Bekezdés stílusának neve</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation>A kijelölt szöveg vagy objektum betűtípusa</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Betűméret</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Szöveg kitöltő színe</translation>
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
        <source>Spacing above the paragraph</source>
        <translation>Távolság a bekezdés előtt</translation>
    </message>
    <message>
        <source>Spacing below the paragraph</source>
        <translation>Távolság a bekezdés után</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation>Vonal távolság</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Distances</source>
        <translation>Távolságok</translation>
    </message>
    <message>
        <source>Fixed Linespacing</source>
        <translation>Rögzített sortávolság</translation>
    </message>
    <message>
        <source>Automatic Linespacing</source>
        <translation>Automatikus vonaltávolság</translation>
    </message>
    <message>
        <source>Align to Baseline Grid</source>
        <translation>Igazítás alaprácshoz</translation>
    </message>
    <message>
        <source>Drop Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance from Text:</source>
        <translation>Távolság a szövegtől:</translation>
    </message>
    <message>
        <source>Preview of the Paragraph Style</source>
        <translation>Bekezdés stílus előnézete</translation>
    </message>
    <message>
        <source>Determines the gap between the DropCaps and the Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Toggles sample text of this paragraph style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Háttér</translation>
    </message>
    <message>
        <source>Name of the style is not unique</source>
        <translation>A sítlus neve nem egyedi</translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation type="unfinished">Kézi követés</translation>
    </message>
    <message>
        <source>Offset to baseline of characters</source>
        <translation type="unfinished">Karakterek alapvonalának eltolása</translation>
    </message>
    <message>
        <source>Click to select the line spacing mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select for easier reading of light colored text styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Auto</source>
        <translation type="unfinished">Automatikus</translation>
    </message>
</context>
<context>
    <name>Editor</name>
    <message>
        <source>Editor</source>
        <translation>Szerkesztő</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Új</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Megnyitás...</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>&amp;Ment másként...</translation>
    </message>
    <message>
        <source>&amp;Save and Exit</source>
        <translation>&amp;Mentés és kilépés</translation>
    </message>
    <message>
        <source>&amp;Exit without Saving</source>
        <translation>&amp;Kilépés mentés nélkül</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Visszavonás</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Újra végrehajtás</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>&amp;Kivágás</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Másolás</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Beillesztés</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>&amp;Get Field Names</source>
        <translation>&amp;Mező nevek megadása</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Fájl</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Szerkesztés</translation>
    </message>
    <message>
        <source>JavaScripts (*.js);;All Files (*)</source>
        <translation>Java Szkriptek (*.js);;Minden fájl (*)</translation>
    </message>
</context>
<context>
    <name>EffectsDialog</name>
    <message>
        <source>Image Effects</source>
        <translation>Kép effektusok</translation>
    </message>
    <message>
        <source>Options:</source>
        <translation>Beállítások:</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Szín:</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation>Árnyalat:</translation>
    </message>
    <message>
        <source>Brightness:</source>
        <translation>Fényesség:</translation>
    </message>
    <message>
        <source>Contrast:</source>
        <translation>Kontraszt:</translation>
    </message>
    <message>
        <source>Radius:</source>
        <translation>Sugár:</translation>
    </message>
    <message>
        <source>Value:</source>
        <translation>Érték:</translation>
    </message>
    <message>
        <source>Posterize:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Available Effects</source>
        <translation>Elérhető effektek</translation>
    </message>
    <message>
        <source>Blur</source>
        <translation>Életlenség</translation>
    </message>
    <message>
        <source>Brightness</source>
        <translation>Fényesség</translation>
    </message>
    <message>
        <source>Colorize</source>
        <translation>Színezés</translation>
    </message>
    <message>
        <source>Contrast</source>
        <translation>Kontraszt</translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation>Szürkeskála</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation>Invertálás</translation>
    </message>
    <message>
        <source>Posterize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sharpen</source>
        <translation>Élesít</translation>
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
        <translation>Használt effektek</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Rendben</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
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
        <source>Curves</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ExportBitmap</name>
    <message>
        <source>File exists. Overwrite?</source>
        <translation type="unfinished">Fájl már létezik. Felülírja?</translation>
    </message>
    <message>
        <source>exists already. Overwrite?</source>
        <translation type="unfinished">már létezik. Felülírja?</translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished">Minden</translation>
    </message>
</context>
<context>
    <name>ExportForm</name>
    <message>
        <source>Choose a Export Directory</source>
        <translation>Exportálás könyvtár kiválasztása</translation>
    </message>
    <message>
        <source>Export as Image(s)</source>
        <translation>Exportálás kép(ek)ként</translation>
    </message>
    <message>
        <source>&amp;Export to Directory:</source>
        <translation>&amp;Exportálás könyvtárba:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Módosítás...</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Beállítások</translation>
    </message>
    <message>
        <source>Image &amp;Type:</source>
        <translation>Kép &amp;típus:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation>&amp;Minőség:</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation>&amp;Felbontás:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation>dpi</translation>
    </message>
    <message>
        <source>Range</source>
        <translation>Tartomány</translation>
    </message>
    <message>
        <source>&amp;Current page</source>
        <translation>&amp;Aktuális oldal</translation>
    </message>
    <message>
        <source>&amp;All pages</source>
        <translation>&amp;Minden oldal</translation>
    </message>
    <message>
        <source>&amp;Range</source>
        <translation>&amp;Tartomány</translation>
    </message>
    <message>
        <source>C</source>
        <translation>C</translation>
    </message>
    <message>
        <source>Export a range of pages</source>
        <translation>Oldal tartomány exportálása</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export all pages</source>
        <translation>Összes oldal exportálása</translation>
    </message>
    <message>
        <source>Export only the current page</source>
        <translation>Csak a jelenlegi oldal exportálása</translation>
    </message>
    <message>
        <source>Resolution of the Images
Use 72 dpi for Images intended for the Screen</source>
        <translation>Kép felbontása 
A képekhez 72 dpi-t használjon.</translation>
    </message>
    <message>
        <source>The quality of your images - 100% is the best, 1% the lowest quality</source>
        <translation>Képek minősége - 100% a legjobb, 1% a legrosszabb minőség</translation>
    </message>
    <message>
        <source>Available export formats</source>
        <translation>Elérhető exportálási formátumok</translation>
    </message>
    <message>
        <source>The output directory - the place to store your images.
Name of the export file will be &apos;documentname-pagenumber.filetype&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change the output directory</source>
        <translation>A Kimeneti könyvtár megváltoztatása</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Méret:</translation>
    </message>
    <message>
        <source>Size of the images. 100% for no changes, 200% for two times larger etc.</source>
        <translation>Képek mérete. 100%: eredeti méret, 200 %: kétszeres méret stb.</translation>
    </message>
    <message>
        <source>Image size in Pixels</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ExtImageProps</name>
    <message>
        <source>Extended Image Properties</source>
        <translation>Bővített kép tulajdonságok</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normál</translation>
    </message>
    <message>
        <source>Darken</source>
        <translation>Sötétít</translation>
    </message>
    <message>
        <source>Lighten</source>
        <translation>Világosít</translation>
    </message>
    <message>
        <source>Hue</source>
        <translation>Színárnyalat</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Telítettség</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Szín</translation>
    </message>
    <message>
        <source>Luminosity</source>
        <translation>Fényesség</translation>
    </message>
    <message>
        <source>Multiply</source>
        <translation>Többszörös</translation>
    </message>
    <message>
        <source>Screen</source>
        <translation>Képernyő</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation>Eltűnés</translation>
    </message>
    <message>
        <source>Overlay</source>
        <translation>Átfedés</translation>
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
        <translation>Különbség</translation>
    </message>
    <message>
        <source>Exclusion</source>
        <translation>Kivétel</translation>
    </message>
    <message>
        <source>Color Dodge</source>
        <translation>Szín trükk</translation>
    </message>
    <message>
        <source>Color Burn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exlusion</source>
        <translation type="obsolete">Kivétel</translation>
    </message>
    <message>
        <source>Blend Mode:</source>
        <translation>Szemcsézés módja:</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation>Átlátszatlanság:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Név</translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="obsolete">Háttér</translation>
    </message>
    <message>
        <source>Layers</source>
        <translation>Rétegek</translation>
    </message>
    <message>
        <source>Don&apos;t use any Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paths</source>
        <translation>Útvonalak</translation>
    </message>
</context>
<context>
    <name>FDialogPreview</name>
    <message>
        <source>Size:</source>
        <translation>Méret:</translation>
    </message>
    <message>
        <source>Title:</source>
        <translation>Cím:</translation>
    </message>
    <message>
        <source>No Title</source>
        <translation>Nincs cím</translation>
    </message>
    <message>
        <source>Author:</source>
        <translation>Szerző:</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Ismeretlen</translation>
    </message>
    <message>
        <source>Scribus Document</source>
        <translation>Scribus dokumentum</translation>
    </message>
    <message>
        <source>Resolution:</source>
        <translation>Felbontás:</translation>
    </message>
    <message>
        <source>DPI</source>
        <translation>DPI</translation>
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
        <source>Colorspace:</source>
        <translation>Színskála:</translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation>Szükreskála</translation>
    </message>
    <message>
        <source>Duotone</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FileLoader</name>
    <message>
        <source>Some fonts used by this document have been substituted:</source>
        <translation>A dokumentum néhány betűtípusa helyettesítve van:</translation>
    </message>
    <message>
        <source> was replaced by: </source>
        <translation>helyettesítve: </translation>
    </message>
</context>
<context>
    <name>FontPrefs</name>
    <message>
        <source>Available Fonts</source>
        <translation>Rendelkezésre álló betűtípusok:</translation>
    </message>
    <message>
        <source>Font Substitutions</source>
        <translation>Betűtípus helyettesítés</translation>
    </message>
    <message>
        <source>Additional Paths</source>
        <translation>További útvonalak</translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation>Betűtípus neve</translation>
    </message>
    <message>
        <source>&amp;Available Fonts</source>
        <translation>Elérhető betűtípusok</translation>
    </message>
    <message>
        <source>Replacement</source>
        <translation>Helyettesítés</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>Font &amp;Substitutions</source>
        <translation>&amp;Betűtípus helyettesítések</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Módosítás...</translation>
    </message>
    <message>
        <source>A&amp;dd...</source>
        <translation>&amp;Hozzáadás</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Eltávolítás</translation>
    </message>
    <message>
        <source>Additional &amp;Paths</source>
        <translation>További &amp;útvonalak</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Könyvtár kiválasztás</translation>
    </message>
    <message>
        <source>Font Name</source>
        <comment>font preview</comment>
        <translation>Betűtípus neve</translation>
    </message>
    <message>
        <source>Use Font</source>
        <comment>font preview</comment>
        <translation>Betűtípus használata</translation>
    </message>
    <message>
        <source>Embed in:</source>
        <comment>font preview</comment>
        <translation type="obsolete">Beágyazás:</translation>
    </message>
    <message>
        <source>Subset</source>
        <comment>font preview</comment>
        <translation>Részhalmaz</translation>
    </message>
    <message>
        <source>Path to Font File</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation type="obsolete">PostScript</translation>
    </message>
    <message>
        <source>Embed in PostScript</source>
        <comment>font preview</comment>
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
        <source>User</source>
        <comment>font preview</comment>
        <translation>Felhasználó</translation>
    </message>
    <message>
        <source>System</source>
        <comment>font preview</comment>
        <translation>Rendszer</translation>
    </message>
    <message>
        <source>Append selected font into Style, Font menu</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Leave preview</source>
        <comment>font preview</comment>
        <translation>Előnézet bezárása</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <comment>font preview</comment>
        <translation>Betűtípusnéző próbamondatszörny.</translation>
    </message>
    <message>
        <source>Start searching</source>
        <translation>Keresés indítása</translation>
    </message>
    <message>
        <source>Size of the selected font</source>
        <translation>A kiválasztott betűtípus mérete</translation>
    </message>
    <message>
        <source>Sample will be shown after key release</source>
        <translation>A példa a billentyű elengedése után látható</translation>
    </message>
    <message>
        <source>Typing the text here provides quick searching in the font names. Searching is case insensitive. You can provide a common wild cards (*, ?, [...]) in your phrase. Examples: t* will list all fonts starting with t or T. *bold* will list all fonts with word bold, bolder etc. in the name.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FontPreviewBase</name>
    <message>
        <source>Fonts Preview</source>
        <translation>Betűtípus előnézet</translation>
    </message>
    <message>
        <source>&amp;Quick Search:</source>
        <translation>&amp;Gyors keresés:</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Keresés</translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation>Alt+S</translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation>Betűtípus neve</translation>
    </message>
    <message>
        <source>Doc</source>
        <translation>Dokumentum</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Típus</translation>
    </message>
    <message>
        <source>Subset</source>
        <translation>Részhalmaz</translation>
    </message>
    <message>
        <source>Access</source>
        <translation>Hozzáférés</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation>&amp;Betűméret</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Szöveg</translation>
    </message>
    <message>
        <source>Sample text to display</source>
        <translation>Minta szöveg a megjelenítéshez</translation>
    </message>
    <message>
        <source>Se&amp;t</source>
        <translation>&amp;Beállítás</translation>
    </message>
    <message>
        <source>Alt+T</source>
        <translation>Alt+T</translation>
    </message>
    <message>
        <source>Reset the text</source>
        <translation>Szöveg alapállapotba hozása</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>&amp;Hozzáfűzés</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>Be&amp;zárás</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
</context>
<context>
    <name>FontPreviewPlugin</name>
    <message>
        <source>&amp;Font Preview...</source>
        <translation>&amp;Betűtípus előnézet...</translation>
    </message>
    <message>
        <source>Font Preview dialog</source>
        <translation>Betűtípus előnézet párbeszéd ablak</translation>
    </message>
    <message>
        <source>Sorting, searching and browsing available fonts.</source>
        <translation>Az elérhető betűtípusok rendezése, keresése, listázása.</translation>
    </message>
</context>
<context>
    <name>FontReplaceDialog</name>
    <message>
        <source>Font Substitution</source>
        <translation>Betűtípus helyettesítés</translation>
    </message>
    <message>
        <source>Original Font</source>
        <translation>Eredeti betűtípus</translation>
    </message>
    <message>
        <source>Substitution Font</source>
        <translation>Helyettesítő betűtípus</translation>
    </message>
    <message>
        <source>Make these substitutions permanent</source>
        <translation>A helyettesítés állandó legyen</translation>
    </message>
    <message>
        <source>This document contains some fonts that are not installed on your system, please choose a suitable replacement for them. Cancel will stop the document from loading.</source>
        <translation>Ez a dokumentum a rendszerében nem telepített betűtípusokat tartalmaz,kérem válasszon helyettesítő típust. A Mégsem megállítja a dokumentum betöltését.</translation>
    </message>
    <message>
        <source>Cancels these font substitutions and stops loading the document.</source>
        <translation>A betűtípus helyettesítés megszakítása és a dokumentum betötlésének megállítása.</translation>
    </message>
    <message>
        <source>Enabling this tells Scribus to use these replacements for missing fonts permanently in all future layouts. This can be reverted or changed in Edit &gt; Preferences &gt; Fonts.</source>
        <translation>Ezt engedélyezve a Scribus a hiányzó betűtípusok helyettesítésére a jövőben ezt a típust használja. Ezt módosíthatja, megváltoztathatja a Szerkesztés &gt; Beállítások &gt; Betűtípusok -nál.</translation>
    </message>
    <message>
        <source>If you select OK, then save, these substitutions are made permanent in the document.</source>
        <translation>Ha OK-ra kattint, majd elmenti, akkor a a helyettesítés állandóvá válik a dokumentumban.</translation>
    </message>
</context>
<context>
    <name>GradientEditor</name>
    <message>
        <source>Position:</source>
        <translation>Elhelyezkedés:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Add, change or remove color stops here</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>GuideManager</name>
    <message>
        <source>Manage Guides</source>
        <translation type="obsolete">Segédvonalak kezelése</translation>
    </message>
    <message>
        <source>Horizontal Guides</source>
        <translation type="obsolete">Vízszintes segédvonalak</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation type="obsolete">&amp;Y pozíció:</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="obsolete">&amp;Hozzáadás</translation>
    </message>
    <message>
        <source>D&amp;elete</source>
        <translation type="obsolete">&amp;Törlés</translation>
    </message>
    <message>
        <source>Vertical Guides</source>
        <translation type="obsolete">Függőleges segédvonalak</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation type="obsolete">&amp;X pozíció:</translation>
    </message>
    <message>
        <source>A&amp;dd</source>
        <translation type="obsolete">&amp;Hozzáadás</translation>
    </message>
    <message>
        <source>De&amp;lete</source>
        <translation type="obsolete">&amp;Törlés</translation>
    </message>
    <message>
        <source>&amp;Lock Guides</source>
        <translation type="obsolete">&amp;Segédvonalak rögzítése</translation>
    </message>
    <message>
        <source>Rows and Columns - Automatic Guides</source>
        <translation type="obsolete">Sorok és oszlopok - Automatikus vonalak</translation>
    </message>
    <message>
        <source>&amp;Rows:</source>
        <translation type="obsolete">&amp;Sorok:</translation>
    </message>
    <message>
        <source>C&amp;olumns:</source>
        <translation type="obsolete">&amp;Oszlopok:</translation>
    </message>
    <message>
        <source>Row &amp;Gap</source>
        <translation type="obsolete">&amp;Sortávolság</translation>
    </message>
    <message>
        <source>Colum&amp;n Gap</source>
        <translation type="obsolete">&amp;Oszlop távolság</translation>
    </message>
    <message>
        <source>Refer to:</source>
        <translation type="obsolete">Hivatkozva:</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation type="obsolete">&amp;Oldal</translation>
    </message>
    <message>
        <source>&amp;Margins</source>
        <translation type="obsolete">&amp;Margók</translation>
    </message>
    <message>
        <source>&amp;Selection</source>
        <translation type="obsolete">&amp;Kiválasztás</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">Be&amp;zárás</translation>
    </message>
    <message>
        <source>&amp;Update</source>
        <translation type="obsolete">&amp;Frissítés</translation>
    </message>
    <message>
        <source>&amp;Apply to All Pages</source>
        <translation type="obsolete">&amp;Alkalmazás minden oldalra</translation>
    </message>
    <message>
        <source>Guide</source>
        <translation type="obsolete">Segédlet</translation>
    </message>
    <message>
        <source>Unit</source>
        <translation type="obsolete">Egység</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation type="obsolete">Előnézet</translation>
    </message>
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
        <translation type="unfinished">Segédvonalak kezelése</translation>
    </message>
    <message>
        <source>Horizontals</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Guide</source>
        <translation type="unfinished">Segédlet</translation>
    </message>
    <message>
        <source>Unit</source>
        <translation type="obsolete">Egység</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="unfinished">&amp;Hozzáadás</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished">Alt+A</translation>
    </message>
    <message>
        <source>D&amp;elete</source>
        <translation type="unfinished">&amp;Törlés</translation>
    </message>
    <message>
        <source>Alt+E</source>
        <translation type="unfinished">Alt+E</translation>
    </message>
    <message>
        <source>Verticals</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A&amp;dd</source>
        <translation type="unfinished">&amp;Hozzáadás</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished">Alt+D</translation>
    </message>
    <message>
        <source>De&amp;lete</source>
        <translation type="unfinished">&amp;Törlés</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="unfinished">Alt+L</translation>
    </message>
    <message>
        <source>&amp;Lock Guides</source>
        <translation type="unfinished">&amp;Segédvonalak rögzítése</translation>
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
        <source>&amp;Number:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>U&amp;se Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="unfinished">Alt+S</translation>
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
        <translation type="unfinished">Alt+G</translation>
    </message>
    <message>
        <source>Refer To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation type="unfinished">&amp;Oldal</translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation type="unfinished">Alt+P</translation>
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
        <source>&amp;Single</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Column/Row</source>
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
        <source>Sorry, no manual available! Please see: http://docs.scribus.net for updated docs
and www.scribus.net for downloads.</source>
        <translation>Kézikönyv nem elérhető! Kérem nézzen utánna a http://docs.scribus.net honlapon a frissített dokumentumnak, valamint a www.scribus.net honlapon a letöltéseknek.</translation>
    </message>
    <message>
        <source>Contents</source>
        <translation>Tartalom</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Kapcsolat</translation>
    </message>
    <message>
        <source>Scribus Online Help</source>
        <translation>Scribus online segítség</translation>
    </message>
    <message>
        <source>&amp;Contents</source>
        <translation>&amp;Tartalom</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Keresés</translation>
    </message>
    <message>
        <source>Se&amp;arch</source>
        <translation>&amp;Keresés</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Új</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>De&amp;lete All</source>
        <translation>&amp;Minden törlése</translation>
    </message>
    <message>
        <source>Book&amp;marks</source>
        <translation>&amp;Könyvjelző</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation>&amp;Nyomtatás...</translation>
    </message>
    <message>
        <source>E&amp;xit</source>
        <translation>&amp;Kilépés</translation>
    </message>
    <message>
        <source>Searching is case unsensitive</source>
        <translation>Keresés nem nagy betű érzékeny</translation>
    </message>
    <message>
        <source>Find</source>
        <translation>Keresés</translation>
    </message>
    <message>
        <source>Search Term:</source>
        <translation>Keresési feltétel:</translation>
    </message>
    <message>
        <source>New Bookmark</source>
        <translation>Új könyvjelző</translation>
    </message>
    <message>
        <source>New Bookmark&apos;s Title:</source>
        <translation>Új könyvjelző címe:</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Fájl</translation>
    </message>
    <message>
        <source>&amp;Find...</source>
        <translation>&amp;Keresés...</translation>
    </message>
    <message>
        <source>Find &amp;Next</source>
        <translation>&amp;Következő keresése</translation>
    </message>
    <message>
        <source>Find &amp;Previous</source>
        <translation>&amp;Előző keresése</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Szerkesztés</translation>
    </message>
    <message>
        <source>&amp;Add Bookmark</source>
        <translation>&amp;Könyvjelző hozzáadása</translation>
    </message>
    <message>
        <source>D&amp;elete All</source>
        <translation>&amp;Minden törlése</translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation>&amp;Könyvjelző</translation>
    </message>
    <message>
        <source>Relevance</source>
        <translation>Tárgyhoz tartozás</translation>
    </message>
</context>
<context>
    <name>HyAsk</name>
    <message>
        <source>Possible Hyphenation</source>
        <translation>Lehetséges elválasztás</translation>
    </message>
    <message>
        <source>Accept</source>
        <translation>Elfogadás</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>Kihagyás</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
</context>
<context>
    <name>HySettings</name>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Nyelv</translation>
    </message>
    <message>
        <source>&amp;Smallest Word:</source>
        <translation>&amp;Legrövidebb szöveg:</translation>
    </message>
    <message>
        <source>Length of the smallest word to be hyphenated.</source>
        <translation>A legrövidebb szó, melyet elválaszthatunk.</translation>
    </message>
    <message>
        <source>Maximum number of Hyphenations following each other.
A value of 0 means unlimited hyphenations.</source>
        <translation>Az egymást követő elválasztás maximális száma. 0 érték esetén nincs elválasztási korlát.</translation>
    </message>
    <message>
        <source>&amp;Hyphenation Suggestions</source>
        <translation>&amp;Elválasztási javaslat</translation>
    </message>
    <message>
        <source>Hyphenate Text Automatically &amp;During Typing</source>
        <translation>&amp;Szöveg elválasztás automatikusan gépelés alatt</translation>
    </message>
    <message>
        <source>A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables automatic hyphenation of your text while typing.</source>
        <translation>Automatikus elválasztás engedélyezése gépelés közben.</translation>
    </message>
    <message>
        <source>Consecutive Hyphenations &amp;Allowed:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ImageInfoDialog</name>
    <message>
        <source>Image Info</source>
        <translation>Kép információ</translation>
    </message>
    <message>
        <source>General Info</source>
        <translation>Általános információ</translation>
    </message>
    <message>
        <source>Date / Time:</source>
        <translation>Dátum / idő:</translation>
    </message>
    <message>
        <source>Has Embedded Profile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="obsolete">Igen</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="obsolete">Nem</translation>
    </message>
    <message>
        <source>Profile Name:</source>
        <translation>Profil név:</translation>
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
        <translation>EXIF információ</translation>
    </message>
    <message>
        <source>Artist:</source>
        <translation>Szerző:</translation>
    </message>
    <message>
        <source>Comment:</source>
        <translation>Megjegyzés:</translation>
    </message>
    <message>
        <source>User Comment:</source>
        <translation>Felhasználói megjegyzés:</translation>
    </message>
    <message>
        <source>Camera Model:</source>
        <translation>Kamera modell:</translation>
    </message>
    <message>
        <source>Camera Manufacturer:</source>
        <translation>Kamera gyártója:</translation>
    </message>
    <message>
        <source>Description:</source>
        <translation>Leírás:</translation>
    </message>
    <message>
        <source>Copyright:</source>
        <translation>Copyright:</translation>
    </message>
    <message>
        <source>Scanner Model:</source>
        <translation>Szkenner modell:</translation>
    </message>
    <message>
        <source>Scanner Manufacturer:</source>
        <translation>Szkenner gyártója:</translation>
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
        <translation>&amp;EPS/PS importálása...</translation>
    </message>
    <message>
        <source>Imports EPS Files</source>
        <translation>EPS fájl importálása</translation>
    </message>
    <message>
        <source>Imports most EPS files into the current document,
converting their vector data into Scribus objects.</source>
        <translation>A legtöbb EPS fájl importálása a jelenlegi dokumentumba, vektor adatok konvertálása a Scribus objektumokba.</translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation>PostScript</translation>
    </message>
    <message>
        <source>PDF</source>
        <translation>PDF</translation>
    </message>
</context>
<context>
    <name>InsPage</name>
    <message>
        <source>Insert Page</source>
        <translation>Oldal beszúrása</translation>
    </message>
    <message>
        <source>Page(s)</source>
        <translation>Oldal(ak)</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation>Oldal elé</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation>Oldal után</translation>
    </message>
    <message>
        <source>at End</source>
        <translation>Végén</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normál</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation>&amp;Beillesztés</translation>
    </message>
    <message>
        <source>Master Pages</source>
        <translation>Mester oldal</translation>
    </message>
    <message>
        <source>&amp;Master Page:</source>
        <translation>&amp;Mester oldal:</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Oldal méret</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Méret:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="obsolete">Egyedi</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>&amp;Orientáció:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Álló</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Fekvő</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Szélesség:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Magasság:</translation>
    </message>
    <message>
        <source>Move Objects with their Page</source>
        <translation>Objektumok mozgatása az oldalukkal együtt</translation>
    </message>
</context>
<context>
    <name>InsertAFrame</name>
    <message>
        <source>Open</source>
        <translation type="unfinished">Megnyitás</translation>
    </message>
    <message>
        <source>&lt;b&gt;Insert a text frame&lt;/b&gt;&lt;br/&gt;A text frame allows you to enter any text in a defined position with the formatting you choose. You may select a text file on the Options tab if you want to immediately import a document into the frame. Scribus supports a wide variety of importable format from plain text to OpenOffice.org.&lt;br/&gt;Your text may be edited and formatted on the page directly or in the simple Story Editor.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Insert an image frame&lt;/b&gt;&lt;br/&gt;An image frame allows you to place an image onto your page. Various image effects may be applied or combined including transparencies, brightness, posterisation that allow retouching or the creation of interesting visual results. Image scaling and shaping is performed with the Properties Palette.</source>
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
        <translation type="unfinished">&amp;Szöveg keret</translation>
    </message>
    <message>
        <source>Alt+T</source>
        <translation type="unfinished">Alt+T</translation>
    </message>
    <message>
        <source>&amp;Image Frame</source>
        <translation type="unfinished">&amp;Kép keret</translation>
    </message>
    <message>
        <source>Alt+I</source>
        <translation type="unfinished">Alt+I</translation>
    </message>
    <message>
        <source>T&amp;able</source>
        <translation type="unfinished">&amp;Táblázat</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished">Alt+A</translation>
    </message>
    <message>
        <source>Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation type="unfinished">Sokszög</translation>
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
        <translation type="unfinished">Y:</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation type="unfinished">&amp;Méret</translation>
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
        <translation type="unfinished">Szélesség:</translation>
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
        <translation type="unfinished">Alt+S</translation>
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
        <source>&amp;OK</source>
        <translation type="unfinished">&amp;Rendben</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">&amp;Mégsem</translation>
    </message>
    <message>
        <source>Link Created Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Pages</source>
        <translation type="unfinished">Minden oldal</translation>
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
        <translation>Táblázat beillesztése</translation>
    </message>
    <message>
        <source>Number of rows:</source>
        <translation>Sorok száma:</translation>
    </message>
    <message>
        <source>Number of columns:</source>
        <translation>Oszlopok száma:</translation>
    </message>
</context>
<context>
    <name>JavaDocs</name>
    <message>
        <source>Edit JavaScripts</source>
        <translation>JavaSzkript szerkesztése</translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation>&amp;Szerkesztés...</translation>
    </message>
    <message>
        <source>&amp;Add...</source>
        <translation>&amp;Hozzáadás...</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>Be&amp;zárás</translation>
    </message>
    <message>
        <source>&amp;New Script:</source>
        <translation>&amp;Új szkript:</translation>
    </message>
    <message>
        <source>New Script</source>
        <translation>Új szkript</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="obsolete">&amp;Nem</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="obsolete">&amp;Igen</translation>
    </message>
    <message>
        <source>Do you really want to delete this script?</source>
        <translation>Tényleg törölni akarja ezt a szkriptet?</translation>
    </message>
    <message>
        <source>Adds a new Script, predefines a function with the same name. If you want to use this script as an &quot;Open Action&quot; script be sure not to change the name of the function.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>KeyManager</name>
    <message>
        <source>Action</source>
        <translation type="obsolete">Művelet</translation>
    </message>
    <message>
        <source>Current Key</source>
        <translation type="obsolete">Jelenlegi billentyűparancs</translation>
    </message>
    <message>
        <source>Select a Key for this Action</source>
        <translation type="obsolete">Válasszon ki egy billentyűt a művelethez</translation>
    </message>
    <message>
        <source>&amp;No Key</source>
        <translation type="obsolete">&amp;Nincs billentyűzet</translation>
    </message>
    <message>
        <source>&amp;User Defined Key</source>
        <translation type="obsolete">&amp;Felhasználó által definiált billentyű</translation>
    </message>
    <message>
        <source>ALT+SHIFT+T</source>
        <translation type="obsolete">ALT+SHIFT+T</translation>
    </message>
    <message>
        <source>Set &amp;Key</source>
        <translation type="obsolete">&amp;Billentyű beállítása</translation>
    </message>
    <message>
        <source>Alt</source>
        <translation type="obsolete">Alt</translation>
    </message>
    <message>
        <source>Ctrl</source>
        <translation type="obsolete">Ctrl</translation>
    </message>
    <message>
        <source>Shift</source>
        <translation type="obsolete">Shift</translation>
    </message>
    <message>
        <source>Shift+</source>
        <translation type="obsolete">Shift+</translation>
    </message>
    <message>
        <source>Alt+</source>
        <translation type="obsolete">Alt+</translation>
    </message>
    <message>
        <source>Ctrl+</source>
        <translation type="obsolete">Ctrl+</translation>
    </message>
    <message>
        <source>Loadable Shortcut Sets</source>
        <translation type="obsolete">Betölthető gyors billentyű készletek</translation>
    </message>
    <message>
        <source>&amp;Load</source>
        <translation type="obsolete">&amp;Betöltés</translation>
    </message>
    <message>
        <source>&amp;Import...</source>
        <translation type="obsolete">&amp;Importálás...</translation>
    </message>
    <message>
        <source>&amp;Export...</source>
        <translation type="obsolete">&amp;Exportálás...</translation>
    </message>
    <message>
        <source>&amp;Reset</source>
        <translation type="obsolete">&amp;Alaphelyzetbe állítás</translation>
    </message>
    <message>
        <source>Keyboard shortcut sets available to load</source>
        <translation type="obsolete">Gyors billentyű készlet betölthető</translation>
    </message>
    <message>
        <source>Load the selected shortcut set</source>
        <translation type="obsolete">A kijelölt gyors billentyű készlet betöltése</translation>
    </message>
    <message>
        <source>Import a shortcut set into the current configuration</source>
        <translation type="obsolete">Gyors billentyű készlet importálása a jelenlegi konfigurációba</translation>
    </message>
    <message>
        <source>Export the current shortcuts into an importable file</source>
        <translation type="obsolete">A jelenlegi gyors billentyűk exportálása egy importálható fájlba</translation>
    </message>
    <message>
        <source>Reload the default Scribus shortcuts</source>
        <translation type="obsolete">Az alapértelmezett Scribus gyors billentyűk visszatöltése</translation>
    </message>
    <message>
        <source>Key Set XML Files (*.ksxml)</source>
        <translation type="obsolete">Key Set XML fájlok (*.ksxml)</translation>
    </message>
    <message>
        <source>Meta</source>
        <translation type="obsolete">Meta</translation>
    </message>
    <message>
        <source>Meta+</source>
        <translation type="obsolete">Meta+</translation>
    </message>
    <message>
        <source>This key sequence is already in use</source>
        <translation type="obsolete">Ez a billentyűzet kombináció már foglalt</translation>
    </message>
</context>
<context>
    <name>LayerPalette</name>
    <message>
        <source>Layers</source>
        <translation>Rétegek</translation>
    </message>
    <message>
        <source>Delete Layer</source>
        <translation>Réteg törlése</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Név</translation>
    </message>
    <message>
        <source>Do you want to delete all objects on this layer too?</source>
        <translation>Tényleg törölni akarja ezen a rétegen lévő összes objektumot is?</translation>
    </message>
    <message>
        <source>Add a new layer</source>
        <translation>Új réteg hozzáadása</translation>
    </message>
    <message>
        <source>Delete layer</source>
        <translation>Réteg törlése</translation>
    </message>
    <message>
        <source>Raise layer</source>
        <translation>Réteg előrébb mozgatása</translation>
    </message>
    <message>
        <source>Lower layer</source>
        <translation>Réteg hátrébb mozgatása</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation type="unfinished">Átlátszatlanság:</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished">%</translation>
    </message>
    <message>
        <source>Blend Mode:</source>
        <translation type="unfinished">Szemcsézés módja:</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">Normál</translation>
    </message>
    <message>
        <source>Darken</source>
        <translation type="unfinished">Sötétít</translation>
    </message>
    <message>
        <source>Lighten</source>
        <translation type="unfinished">Világosít</translation>
    </message>
    <message>
        <source>Multiply</source>
        <translation type="unfinished">Többszörös</translation>
    </message>
    <message>
        <source>Screen</source>
        <translation type="unfinished">Képernyő</translation>
    </message>
    <message>
        <source>Overlay</source>
        <translation type="unfinished">Átfedés</translation>
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
        <translation type="unfinished">Különbség</translation>
    </message>
    <message>
        <source>Exlusion</source>
        <translation type="obsolete">Kivétel</translation>
    </message>
    <message>
        <source>Color Dodge</source>
        <translation type="unfinished">Szín trükk</translation>
    </message>
    <message>
        <source>Color Burn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exclusion</source>
        <translation type="unfinished">Kivétel</translation>
    </message>
    <message>
        <source>Hue</source>
        <translation type="unfinished">Színárnyalat</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished">Telítettség</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished">Szín</translation>
    </message>
    <message>
        <source>Luminosity</source>
        <translation type="unfinished">Fényesség</translation>
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
    <message>
        <source>Duplicates the current layer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LineFormate</name>
    <message>
        <source>Edit Line Styles</source>
        <translation>Vonal stílus szerkesztése</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Új</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Szerkesztés</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>&amp;Kettőzés</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Mentés</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>%1 másolása</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation>Új stílus</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="obsolete">&amp;Nem</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="obsolete">&amp;Igen</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Megnyitás</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Dokumentumok (*.sla *.sla.gz *.scd *.scd.gz);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Dokumentumok (*.sla *.scd);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importálás</translation>
    </message>
    <message>
        <source>Do you really want to delete this style?</source>
        <translation>Tényleg törölni akarja ezt a stílust?</translation>
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
        <translation>%</translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation>Vonalvastagság:</translation>
    </message>
</context>
<context>
    <name>LineStyleWidget</name>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>14*17\&quot; papíralak</translation>
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
        <translation>Ferde átlapolás</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation type="obsolete">Folytonos vonal</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation type="obsolete">Szaggatott vonal</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation type="obsolete">Pontozott vonal</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation type="obsolete">Tá-ti vonal</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation type="obsolete">Tá-ti-ti vonal</translation>
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
        <translation>Minden fájl (*)</translation>
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
        <translation>Szerző:</translation>
    </message>
    <message>
        <source>Get More:</source>
        <translation>További információ:</translation>
    </message>
    <message>
        <source>XML File:</source>
        <translation>XML fájl:</translation>
    </message>
    <message>
        <source>Lorem Ipsum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paragraphs:</source>
        <translation>Bekezdések:</translation>
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
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MarginDialog</name>
    <message>
        <source>Manage Page Properties</source>
        <translation>Oldal tulajdonságok kezelése</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Oldal méret</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Méret:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="obsolete">Egyedi</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>&amp;Orientáció:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Álló</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Fekvő</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Szélesség:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Magasság:</translation>
    </message>
    <message>
        <source>Move Objects with their Page</source>
        <translation>Objektumok mozgatása az oldalukkal együtt</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Típus:</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Margók</translation>
    </message>
    <message>
        <source>Other Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Master Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normál</translation>
    </message>
</context>
<context>
    <name>MarginWidget</name>
    <message>
        <source>&amp;Bottom:</source>
        <translation>&amp;Alsó:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>&amp;Felső:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>&amp;Jobb:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Bal:</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Felső margó és az oldal széle közötti távolság</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Alsó margó és az oldal széle közötti távolság</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation>&amp;Belül:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation>&amp;Kívül</translation>
    </message>
    <message>
        <source>Preset Layouts:</source>
        <translation>Előre beállított rétegek:</translation>
    </message>
    <message>
        <source>Apply margin settings to all pages</source>
        <translation type="obsolete">Margó beállítások alkalmazása az összes oldalra</translation>
    </message>
    <message>
        <source>Apply the margin changes to all existing pages in the document</source>
        <translation>Margó változások alkalmazása a dokumentum összes létező oldalára</translation>
    </message>
    <message>
        <source>Printer Margins...</source>
        <translation>Nyomtató margók...</translation>
    </message>
    <message>
        <source>Import the margins for the selected page size from the available printers.</source>
        <translation>A kijelölt oldal mérethez a margó importálása az elérhető nyomtatóktól</translation>
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
        <source>Apply the margin changes to all existing master pages in the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="unfinished">Margók</translation>
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
        <translation type="unfinished">Jobb:</translation>
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
        <translation>Mester oldal szerkesztése</translation>
    </message>
    <message>
        <source>Do you really want to delete this master page?</source>
        <translation>Tényleg törölni akarja ezt a mester oldalt?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="obsolete">&amp;Nem</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="obsolete">&amp;Igen</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Név:</translation>
    </message>
    <message>
        <source>New Master Page</source>
        <translation>Új mester oldal</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="obsolete">%1 másolása</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Név:</translation>
    </message>
    <message>
        <source>New MasterPage</source>
        <translation>Új mester oldal</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation>#%1 másolata</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normál</translation>
    </message>
    <message>
        <source>Duplicate the selected master page</source>
        <translation>A kijelölt mester oldal megduplázása</translation>
    </message>
    <message>
        <source>Delete the selected master page</source>
        <translation>A kijelölt mester oldal törlése</translation>
    </message>
    <message>
        <source>Add a new master page</source>
        <translation>Új mester oldal hozzáadása</translation>
    </message>
    <message>
        <source>Import master pages from another document</source>
        <translation>Mester oldalak importálása más dokumentumból</translation>
    </message>
    <message>
        <source>New Master Page %1</source>
        <translation>Új mester oldal %1</translation>
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
        <translation>Többszörös duplikálás</translation>
    </message>
    <message>
        <source>&amp;Number of Copies:</source>
        <translation>&amp;Másolatok száma:</translation>
    </message>
    <message>
        <source>&amp;Horizontal Shift:</source>
        <translation>&amp;Vízszintes eltolás:</translation>
    </message>
    <message>
        <source>&amp;Vertical Shift:</source>
        <translation>&amp;Függőleges eltolás:</translation>
    </message>
</context>
<context>
    <name>Measurements</name>
    <message>
        <source>Distances</source>
        <translation>Távolságok</translation>
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
        <translation>DX:</translation>
    </message>
    <message>
        <source>DY:</source>
        <translation>DY:</translation>
    </message>
    <message>
        <source>Angle:</source>
        <translation>Szög:</translation>
    </message>
    <message>
        <source>Length:</source>
        <translation>Hosszúság:</translation>
    </message>
    <message>
        <source>pt</source>
        <translation>pt</translation>
    </message>
</context>
<context>
    <name>MergeDoc</name>
    <message>
        <source>Import Page(s)</source>
        <translation>Oldal(ak) importálása</translation>
    </message>
    <message>
        <source> from 0</source>
        <translation>0 -tól</translation>
    </message>
    <message>
        <source>Create Page(s)</source>
        <translation>Oldal(ak) létrehozása</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Megnyitás</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Dokumentumok (*.sla *.sla.gz *.scd *.scd.gz);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Dokumentumok (*.sla *.scd);;Minden fájl (*)</translation>
    </message>
    <message>
        <source> from %1</source>
        <translation>%1 -től</translation>
    </message>
    <message>
        <source>&amp;From Document:</source>
        <translation>&amp;Dokumentumból:</translation>
    </message>
    <message>
        <source>Chan&amp;ge...</source>
        <translation>&amp;Módosítás...</translation>
    </message>
    <message>
        <source>&amp;Import Page(s):</source>
        <translation>&amp;Oldal(ak) importálása</translation>
    </message>
    <message>
        <source>Before Page</source>
        <translation>Oldal elé</translation>
    </message>
    <message>
        <source>After Page</source>
        <translation>Oldal után</translation>
    </message>
    <message>
        <source>At End</source>
        <translation>Végén</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importálás</translation>
    </message>
    <message>
        <source>Import Master Page</source>
        <translation>Mester oldal importálása</translation>
    </message>
    <message>
        <source>&amp;Import Master Page</source>
        <translation>&amp;Mester oldal importálása</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens import where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MissingFont</name>
    <message>
        <source>Missing Font</source>
        <translation>Hiányzó betűtípus</translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation>A(z) %1 betűtípus nincs telepítve.</translation>
    </message>
    <message>
        <source>Use</source>
        <translation>Használd</translation>
    </message>
    <message>
        <source>instead</source>
        <translation>-t helyette</translation>
    </message>
</context>
<context>
    <name>ModeToolBar</name>
    <message>
        <source>Tools</source>
        <translation type="unfinished">Eszközök</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation type="unfinished">Tulajdonságok...</translation>
    </message>
</context>
<context>
    <name>MovePages</name>
    <message>
        <source>Move Pages</source>
        <translation>Oldalak mozgatása</translation>
    </message>
    <message>
        <source>Copy Page</source>
        <translation>Oldal másolása</translation>
    </message>
    <message>
        <source>Move Page(s):</source>
        <translation>Oldal(ak) mozgatása:</translation>
    </message>
    <message>
        <source>Move Page(s)</source>
        <translation>Oldal(ak) mozagtása</translation>
    </message>
    <message>
        <source>Before Page</source>
        <translation>Oldal elé</translation>
    </message>
    <message>
        <source>After Page</source>
        <translation>Oldal után</translation>
    </message>
    <message>
        <source>At End</source>
        <translation>Végén</translation>
    </message>
    <message>
        <source>To:</source>
        <translation>Ig:</translation>
    </message>
    <message>
        <source>Number of copies:</source>
        <translation>Másolatok száma:</translation>
    </message>
</context>
<context>
    <name>Mpalette</name>
    <message>
        <source>Properties</source>
        <translation>Tulajdonságok</translation>
    </message>
    <message>
        <source>X, Y, &amp;Z</source>
        <translation>X, Y, &amp;Z</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>&amp;Alak</translation>
    </message>
    <message>
        <source>&amp;Text</source>
        <translation>&amp;Szöveg</translation>
    </message>
    <message>
        <source>&amp;Image</source>
        <translation>&amp;Kép</translation>
    </message>
    <message>
        <source>&amp;Line</source>
        <translation>&amp;Vonal</translation>
    </message>
    <message>
        <source>&amp;Colors</source>
        <translation>&amp;Színek</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Név</translation>
    </message>
    <message>
        <source>Geometry</source>
        <translation>Elhelyezkedés</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>&amp;X pozíció:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y pozíció:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Szélesség:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Magasság:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Forgatás:</translation>
    </message>
    <message>
        <source>Basepoint:</source>
        <translation>Bázispont:</translation>
    </message>
    <message>
        <source>Level</source>
        <translation>Szint</translation>
    </message>
    <message>
        <source>Shape:</source>
        <translation>Alak:</translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation>&amp;Alak szerkesztése...</translation>
    </message>
    <message>
        <source>R&amp;ound
Corners:</source>
        <translation>&amp;Lekerekített sarkok:</translation>
    </message>
    <message>
        <source>Distance of Text</source>
        <translation>Szöveg távolsága</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>&amp;Oszlopok:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="obsolete">&amp;Hézag:</translation>
    </message>
    <message>
        <source>To&amp;p:</source>
        <translation>&amp;Felső:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>&amp;Alsó:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Bal:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>&amp;Jobb:</translation>
    </message>
    <message>
        <source>T&amp;abulators...</source>
        <translation>&amp;Tabulátorok...</translation>
    </message>
    <message>
        <source>Path Text Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Curve</source>
        <translation>Görbe mutatása</translation>
    </message>
    <message>
        <source>Start Offset:</source>
        <translation>Kezdeti offszet:</translation>
    </message>
    <message>
        <source>Distance from Curve:</source>
        <translation>Távolság a görbétől:</translation>
    </message>
    <message>
        <source>Text &amp;Flows Around Frame</source>
        <translation type="obsolete">&amp;Szöveg a keretet körbeveszi</translation>
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
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>St&amp;yle:</source>
        <translation>&amp;Stílus:</translation>
    </message>
    <message>
        <source>Lan&amp;guage:</source>
        <translation type="obsolete">&amp;Nyelv</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation>&amp;Szabad skálázású</translation>
    </message>
    <message>
        <source>X-Sc&amp;ale:</source>
        <translation>X-&amp;Skála:</translation>
    </message>
    <message>
        <source>Y-Scal&amp;e:</source>
        <translation>Y-&amp;Skála:</translation>
    </message>
    <message>
        <source>Scale &amp;To Frame Size</source>
        <translation>&amp;Méretezés a keret méretéhez</translation>
    </message>
    <message>
        <source>P&amp;roportional</source>
        <translation>&amp;Arányos</translation>
    </message>
    <message>
        <source>Input Profile:</source>
        <translation>Bemeneti profil:</translation>
    </message>
    <message>
        <source>Rendering Intent:</source>
        <translation>Megjelenítési prioritások:</translation>
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
        <translation>Telítettség</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Abszolút kolorimetriás</translation>
    </message>
    <message>
        <source>Left Point</source>
        <translation>Bal pont</translation>
    </message>
    <message>
        <source>End Points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Basepoint:</source>
        <translation>&amp;Bázispont:</translation>
    </message>
    <message>
        <source>T&amp;ype of Line:</source>
        <translation>&amp;Vonal típusa:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation>&amp;Vonalvastagság:</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Ferde átlapolás</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ed&amp;ges:</source>
        <translation>&amp;Metszés:</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>14*17\&quot; papíralak</translation>
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
        <source>No Style</source>
        <translation>Nincs stílus megadva</translation>
    </message>
    <message>
        <source>Cell Lines</source>
        <translation>Cella vonalak</translation>
    </message>
    <message>
        <source>Line at Top</source>
        <translation>Felső vonal</translation>
    </message>
    <message>
        <source>Line at the Left</source>
        <translation>Bal oldali vonal</translation>
    </message>
    <message>
        <source>Line at the Right </source>
        <translation>Jobb oldali vonal</translation>
    </message>
    <message>
        <source>Line at Bottom</source>
        <translation>Alsó vonal</translation>
    </message>
    <message>
        <source>Name of selected object</source>
        <translation>Kijelölt objektum neve</translation>
    </message>
    <message>
        <source>Horizontal position of current basepoint</source>
        <translation>Jelenlegi alappont vízszintes pozíciója</translation>
    </message>
    <message>
        <source>Vertical position of current basepoint</source>
        <translation>Jelenlegi alappont függőleges pozíciója</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>Szélesség</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>Magasság</translation>
    </message>
    <message>
        <source>Rotation of object at current basepoint</source>
        <translation>Objektum jelenlegi alappont körüli forgatása</translation>
    </message>
    <message>
        <source>Point from which measurements or rotation angles are referenced</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select top left for basepoint</source>
        <translation>Jelölje ki a bal felső pontot az alappont számára</translation>
    </message>
    <message>
        <source>Select top right for basepoint</source>
        <translation>Jelölje ki a jobb felső pontot az alappont számára</translation>
    </message>
    <message>
        <source>Select bottom left for basepoint</source>
        <translation>Jelölje ki a bal alsó pontot az alappont számára</translation>
    </message>
    <message>
        <source>Select bottom right for basepoint</source>
        <translation>Jelölje ki a jobb alsó pontot az alappont számára</translation>
    </message>
    <message>
        <source>Select center for basepoint</source>
        <translation>Jelölje ki a középső pontot az alappont számára</translation>
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
        <translation>Egy szinttel előrébb mozgat</translation>
    </message>
    <message>
        <source>Move one level down</source>
        <translation>Egy szinttel hátrébb mozgat</translation>
    </message>
    <message>
        <source>Move to front</source>
        <translation>Előre mozgat</translation>
    </message>
    <message>
        <source>Move to back</source>
        <translation>Hátra mozgat</translation>
    </message>
    <message>
        <source>Indicates the level the object is on, 0 means the object is at the bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lock or unlock the object</source>
        <translation>Objektum zárolása vagy zárolás feloldása</translation>
    </message>
    <message>
        <source>Lock or unlock the size of the object</source>
        <translation>Objektum méretének zárolása vagy zárolás feloldása</translation>
    </message>
    <message>
        <source>Enable or disable printing of the object</source>
        <translation>Objektum nyomtatásánek engedélyezése vagy tiltása</translation>
    </message>
    <message>
        <source>Make text in lower frames flow around the object shape</source>
        <translation type="obsolete">Az alsóbb keret szövege foglalja körbe az objektumot</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation>A kijelölt szöveg vagy objektum betűtípusa</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Betűméret</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation>Karakter szélesség skálázása</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation>Szöveg kitöltő szín telítettsége</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation>Vonal távolság</translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation>Jelenlegi bekezdés stílusa</translation>
    </message>
    <message>
        <source>Hyphenation language of frame</source>
        <translation type="obsolete">Keret elválasztási nyelve</translation>
    </message>
    <message>
        <source>Change settings for left or end points</source>
        <translation>Bal vagy végpontok beállításainak megváltoztatása</translation>
    </message>
    <message>
        <source>Pattern of line</source>
        <translation>Vonal mintázata</translation>
    </message>
    <message>
        <source>Thickness of line</source>
        <translation>Vonal vékonyság</translation>
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
        <translation>Jelenlegi objektum vonal stílusa</translation>
    </message>
    <message>
        <source>Choose the shape of frame...</source>
        <translation>Válassza ki a keret alakját...</translation>
    </message>
    <message>
        <source>Edit shape of the frame...</source>
        <translation>Keret alakjának szerkesztése...</translation>
    </message>
    <message>
        <source>Set radius of corner rounding</source>
        <translation>A sarok lekerekítési sugarának beállítása</translation>
    </message>
    <message>
        <source>Number of columns in text frame</source>
        <translation>Oszlopok száma egy szöveg keretben</translation>
    </message>
    <message>
        <source>Switches between Gap or Column width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between columns</source>
        <translation>Oszlopok közötti távolság</translation>
    </message>
    <message>
        <source>Distance of text from top of frame</source>
        <translation>Szöveg távolsága a keret tetejétől</translation>
    </message>
    <message>
        <source>Distance of text from bottom of frame</source>
        <translation>Szöveg távolsága a keret aljától</translation>
    </message>
    <message>
        <source>Distance of text from left of frame</source>
        <translation>Szöveg távolsága a keret bal szélétől</translation>
    </message>
    <message>
        <source>Distance of text from right of frame</source>
        <translation>Szöveg távolsága a keret jobb szélétől</translation>
    </message>
    <message>
        <source>Edit tab settings of text frame...</source>
        <translation>Szöveg keret tabulátor beálíítások szerkesztése...</translation>
    </message>
    <message>
        <source>Allow the image to be a different size to the frame</source>
        <translation>Kép különböző méretű lehet mint a keret</translation>
    </message>
    <message>
        <source>Horizontal offset of image within frame</source>
        <translation>Kép vízszintes eltolása a kereten belül</translation>
    </message>
    <message>
        <source>Vertical offset of image within frame</source>
        <translation>A kép kereten belüli függőleges eltolása</translation>
    </message>
    <message>
        <source>Resize the image horizontally</source>
        <translation>Kép átnéretezése vízszintesen</translation>
    </message>
    <message>
        <source>Resize the image vertically</source>
        <translation>Kép átméretezése függőlegesen</translation>
    </message>
    <message>
        <source>Keep the X and Y scaling the same</source>
        <translation>X és Y skálázás azonos maradjon</translation>
    </message>
    <message>
        <source>Keep the aspect ratio</source>
        <translation>Oldalarány megtartása</translation>
    </message>
    <message>
        <source>Make the image fit within the size of the frame</source>
        <translation>A képet a keret méretéhez illessze</translation>
    </message>
    <message>
        <source>Use image proportions rather than those of the frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Source profile of the image</source>
        <translation>Kép forrás profilja</translation>
    </message>
    <message>
        <source>Rendering intent for the image</source>
        <translation type="unfinished"></translation>
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
        <source>Column width</source>
        <translation>Oszlop szélesség</translation>
    </message>
    <message>
        <source>Right to Left Writing</source>
        <translation>Jobbról balra írás</translation>
    </message>
    <message>
        <source>Start Arrow:</source>
        <translation>Kezdő nyíl:</translation>
    </message>
    <message>
        <source>End Arrow:</source>
        <translation>Vége nyíl:</translation>
    </message>
    <message>
        <source>Fixed Linespacing</source>
        <translation>Rögzített sortávolság</translation>
    </message>
    <message>
        <source>Automatic Linespacing</source>
        <translation>Automatikus vonaltávolság</translation>
    </message>
    <message>
        <source>Align to Baseline Grid</source>
        <translation>Igazítás alaprácshoz</translation>
    </message>
    <message>
        <source>Actual X-DPI:</source>
        <translation>Érvényes X-DPI:</translation>
    </message>
    <message>
        <source>Actual Y-DPI:</source>
        <translation>Érvényes Y-DPI:</translation>
    </message>
    <message>
        <source>Offset to baseline of characters</source>
        <translation>Karakterek alapvonalának eltolása</translation>
    </message>
    <message>
        <source>Scaling height of characters</source>
        <translation>Karakterek magasságának skálázása</translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation>Kézi követés</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.&lt;br/&gt;Please choose another.</source>
        <translation>A \&quot;%1\&quot; név nem egyedi. &lt;br&gt;Kérem válasszon másikat.</translation>
    </message>
    <message>
        <source>Fill Rule</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Even-Odd</source>
        <translation>Páratlan - páros</translation>
    </message>
    <message>
        <source>Non Zero</source>
        <translation>Nem nulla</translation>
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
        <source>Color of text stroke and/or drop shadow, depending which is chosen.If both are chosen, then they share the same color.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of selected text. If Outline text decoration is enabled, this color will be the fill color. If Drop Shadow Text is enabled, then this will be the top most color.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Width:</source>
        <translation type="unfinished">Szélesség:</translation>
    </message>
    <message>
        <source>Text &amp;Flow Around Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation type="unfinished">Letiltva</translation>
    </message>
    <message>
        <source>Use Frame &amp;Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image Effects</source>
        <translation type="unfinished">Kép effektusok</translation>
    </message>
    <message>
        <source>Extended Image Properties</source>
        <translation type="unfinished">Bővített kép tulajdonságok</translation>
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
        <source>Transparency Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="unfinished">&amp;Csoport</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation type="unfinished">Átlátszatlanság:</translation>
    </message>
    <message>
        <source>Blend Mode:</source>
        <translation type="unfinished">Szemcsézés módja:</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">Normál</translation>
    </message>
    <message>
        <source>Darken</source>
        <translation type="unfinished">Sötétít</translation>
    </message>
    <message>
        <source>Lighten</source>
        <translation type="unfinished">Világosít</translation>
    </message>
    <message>
        <source>Multiply</source>
        <translation type="unfinished">Többszörös</translation>
    </message>
    <message>
        <source>Screen</source>
        <translation type="unfinished">Képernyő</translation>
    </message>
    <message>
        <source>Overlay</source>
        <translation type="unfinished">Átfedés</translation>
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
        <translation type="unfinished">Különbség</translation>
    </message>
    <message>
        <source>Exclusion</source>
        <translation type="unfinished">Kivétel</translation>
    </message>
    <message>
        <source>Color Dodge</source>
        <translation type="unfinished">Szín trükk</translation>
    </message>
    <message>
        <source>Color Burn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hue</source>
        <translation type="unfinished">Színárnyalat</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished">Szín</translation>
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
        <source>Auto</source>
        <translation type="unfinished">Automatikus</translation>
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
        <translation>Stílus szerkesztése</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>14*17\&quot; papíralak</translation>
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
        <translation>Ferde átlapolás</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation>Vonalvastagság:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source> pt </source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation>Folytonos vonal</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation>Szaggatott vonal</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation>Pontozott vonal</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation>Tá-ti vonal</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation>Tá-ti-ti vonal</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Rendben</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.&lt;br/&gt;Please choose another.</source>
        <translation>A \&quot;%1\&quot; név nem egyedi. &lt;br&gt;Kérem válasszon másikat.</translation>
    </message>
</context>
<context>
    <name>MultiProgressDialogBase</name>
    <message>
        <source>Progress</source>
        <translation>Folyamat</translation>
    </message>
    <message>
        <source>Overall Progress:</source>
        <translation>Teljes folyamat:</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Mégsem</translation>
    </message>
</context>
<context>
    <name>MultipleDuplicate</name>
    <message>
        <source>&amp;Horizontal Shift:</source>
        <translation type="unfinished">&amp;Vízszintes eltolás:</translation>
    </message>
    <message>
        <source>&amp;Vertical Shift:</source>
        <translation type="unfinished">&amp;Függőleges eltolás:</translation>
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
        <translation type="unfinished">Többszörös duplikálás</translation>
    </message>
    <message>
        <source>&amp;By Number of Copies</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Number of Copies:</source>
        <translation type="unfinished">&amp;Másolatok száma:</translation>
    </message>
    <message>
        <source>Create &amp;Gap Between Items Of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+G</source>
        <translation type="unfinished">Alt+G</translation>
    </message>
    <message>
        <source>&amp;Shift Created Items By</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="unfinished">Alt+S</translation>
    </message>
    <message>
        <source>&amp;Horizontal Shift:</source>
        <translation type="unfinished">&amp;Vízszintes eltolás:</translation>
    </message>
    <message>
        <source>&amp;Vertical Shift:</source>
        <translation type="unfinished">&amp;Függőleges eltolás:</translation>
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
        <translation type="unfinished">&amp;Rendben</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">&amp;Mégsem</translation>
    </message>
</context>
<context>
    <name>MyPlugin</name>
    <message>
        <source>My &amp;Plugin</source>
        <translation>&amp;Beépülő moduljaim</translation>
    </message>
</context>
<context>
    <name>MyPluginImpl</name>
    <message>
        <source>Scribus - My Plugin</source>
        <translation>Scribus - Beépülő moduljaim</translation>
    </message>
    <message>
        <source>The plugin worked!</source>
        <translation>Beépülő modul működik!</translation>
    </message>
</context>
<context>
    <name>NewDoc</name>
    <message>
        <source>New Document</source>
        <translation>Új dokumentum</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="obsolete">Oldal méret</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Méret:</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>&amp;Orientáció:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Álló</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Fekvő</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Szélesség:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Magasság:</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Margók</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Beállítások</translation>
    </message>
    <message>
        <source>&amp;Default Unit:</source>
        <translation>Alapértelmezett egység:</translation>
    </message>
    <message>
        <source>&amp;Automatic Text Frames</source>
        <translation>&amp;Automatikus szöveg keretek</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>&amp;Hézag:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>&amp;Oszlopok:</translation>
    </message>
    <message>
        <source>Document page size, either a standard size or a custom size</source>
        <translation>Dokument oldal méret, vagy standard vagy egyedi méretű</translation>
    </message>
    <message>
        <source>Orientation of the document&apos;s pages</source>
        <translation>Dokumentum oldalak orientációja</translation>
    </message>
    <message>
        <source>Width of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Dokumentum oldal szélessége, ha egyedi oldal méretet választ, szerkeszthető</translation>
    </message>
    <message>
        <source>Height of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Dokumentum oldal magassága, ha egyedi oldal méretet választ, szerkeszthető</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation>Dokumentum szerkesztésének alapértelmezett mértékegysége</translation>
    </message>
    <message>
        <source>Create text frames automatically when new pages are added</source>
        <translation>Szöveg keretek automatikus létrehozása új oldal hozzáadásakor</translation>
    </message>
    <message>
        <source>Number of columns to create in automatically created text frames</source>
        <translation>Oszlopok száma egy automatikusan létrehozott szöveg keretben</translation>
    </message>
    <message>
        <source>Distance between automatically created columns</source>
        <translation>Automatikusan létrehozott oszlopok közötti távolság</translation>
    </message>
    <message>
        <source>Do not show this dialog again</source>
        <translation>Ne mutasd ezt az ablakot ismét</translation>
    </message>
    <message>
        <source>Initial number of pages of the document</source>
        <translation>Dokumentum kezdeti oldalszáma</translation>
    </message>
    <message>
        <source>N&amp;umber of Pages:</source>
        <translation>&amp;Oldalak száma:</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Megnyitás</translation>
    </message>
    <message>
        <source>&amp;New Document</source>
        <translation>&amp;Új dokumentum</translation>
    </message>
    <message>
        <source>Open &amp;Existing Document</source>
        <translation>&amp;Létező dokumentum megnyitása</translation>
    </message>
    <message>
        <source>Open Recent &amp;Document</source>
        <translation>&amp;Legutóbbi dokumentum megnyitása</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="obsolete">Egyedi</translation>
    </message>
    <message>
        <source>Page Layout</source>
        <translation type="obsolete">Oldal elrendezés</translation>
    </message>
    <message>
        <source>First Page is:</source>
        <translation type="unfinished">Első oldal:</translation>
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
        <translation>&amp;Új sablonból...</translation>
    </message>
    <message>
        <source>Load documents with predefined layout</source>
        <translation>Dokumentumok betölése előre definiált kialakítással</translation>
    </message>
    <message>
        <source>Start a document from a template made by other users or yourself (f.e. for documents you have a constant style).</source>
        <translation>Dokumentum indítása sablonból, melyet Ön vagy más felhasználó készített.</translation>
    </message>
</context>
<context>
    <name>NodePalette</name>
    <message>
        <source>Nodes</source>
        <translation>Csomópontok</translation>
    </message>
    <message>
        <source>&amp;Absolute Coordinates</source>
        <translation>&amp;Abszolút koordináták</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>&amp;X pozíció:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y pozíció:</translation>
    </message>
    <message>
        <source>Edit &amp;Contour Line</source>
        <translation>&amp;Kontúr vonal szerkesztése</translation>
    </message>
    <message>
        <source>&amp;Reset Contour Line</source>
        <translation>&amp;Kontúr vonal alaphelyzetbe állítása</translation>
    </message>
    <message>
        <source>&amp;End Editing</source>
        <translation>&amp;Szerkesztés vége</translation>
    </message>
    <message>
        <source>Move Nodes</source>
        <translation>Csomópontok mozgatása</translation>
    </message>
    <message>
        <source>Move Control Points</source>
        <translation>Kontrollpontok mozgatása</translation>
    </message>
    <message>
        <source>Add Nodes</source>
        <translation>Csomópontok hozzáadása</translation>
    </message>
    <message>
        <source>Delete Nodes</source>
        <translation>Csomópontok törlése</translation>
    </message>
    <message>
        <source>Move Control Points Independently</source>
        <translation>Vezérlő pontok mozgatása egymástól függetlenül</translation>
    </message>
    <message>
        <source>Move Control Points Symmetrical</source>
        <translation>Vezérlő pontok mozgatása szimmetrikusan</translation>
    </message>
    <message>
        <source>Reset Control Points</source>
        <translation>Kontrollpontok mozgatása</translation>
    </message>
    <message>
        <source>Reset this Control Point</source>
        <translation>Vezérlő pont alaphelyzetbe állítása</translation>
    </message>
    <message>
        <source>Open a Polygon or Cuts a Bezier Curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close this Bezier Curve</source>
        <translation>Bezier görbe bezárása</translation>
    </message>
    <message>
        <source>Mirror the Path Horizontally</source>
        <translation>Útvonal tükrözése vízszintesen</translation>
    </message>
    <message>
        <source>Mirror the Path Vertically</source>
        <translation>Útvonal tükrözése függőlegesen</translation>
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
        <translation>Órajárás irányának ellenkezőleg forgatás</translation>
    </message>
    <message>
        <source>Rotate the Path Clockwise</source>
        <translation>Órajárás irányába forgatás</translation>
    </message>
    <message>
        <source>Enlarge the Size of the Path by shown %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Angle of Rotation</source>
        <translation>Forgatási szög</translation>
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
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>When checked use coordinates relative to the page, otherwise coordinates are relative to the Object.</source>
        <translation>Ha kijelöli, a koordináták az oldalhoz viszonyítva értendők, egyébként az objektumhoz</translation>
    </message>
    <message>
        <source>Shrink the Size of the Path by shown %</source>
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
        <source>% to Enlarge or Shrink By</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value to Enlarge or Shrink By</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OODPlug</name>
    <message>
        <source>This document does not seem to be an OpenOffice Draw file.</source>
        <translation>Ez a dokumentum nem OpenOffice Rajz fájl.</translation>
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
        <translation>&amp;OpenOffice.org Rajz importálása</translation>
    </message>
    <message>
        <source>Imports OpenOffice.org Draw Files</source>
        <translation>OpenOffice Rajz fájl importálása</translation>
    </message>
    <message>
        <source>Imports most OpenOffice.org Draw files into the current document, converting their vector data into Scribus objects.</source>
        <translation>A legtöbb OpenOffice.org Rajz fájl importálása a jelenlegi dokumentumba, a vektor adatok konvertálása Scribus objektumokká.</translation>
    </message>
    <message>
        <source>OpenDocument 1.0 Draw</source>
        <comment>Import/export format name</comment>
        <translation>OpenDocument 1.0 Rajz</translation>
    </message>
    <message>
        <source>OpenOffice.org 1.x Draw</source>
        <comment>Import/export format name</comment>
        <translation>OpenOffice.org 1.x Rajz</translation>
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
        <translation>OpenDocument importáló beállítások</translation>
    </message>
    <message>
        <source>Overwrite Paragraph Styles</source>
        <translation>Bekezdés stílusainak felülírása</translation>
    </message>
    <message>
        <source>Enabling this will overwrite existing styles in the current Scribus document</source>
        <translation>Engedélyezve felülírja a jelenlegi Scribus dokumentumban lévő stílusokat</translation>
    </message>
    <message>
        <source>Merge Paragraph Styles</source>
        <translation>Bekezdés stílusok összefésülése</translation>
    </message>
    <message>
        <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document&apos;s styles are named differently.</source>
        <translation>Bekezdés stílusok összefűzése jellemzők szerint. Ez kevesebb hasonló bekezdés stílust eredményez, de megtartja a stílus jellemzőket, még akkor is, ha az eredeti dokumentum stílusai különböző nevűek.</translation>
    </message>
    <message>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation>Használja a dokumentum nevét a bekezdés stílus előtagjaként</translation>
    </message>
    <message>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation>Ne kérdezd ismét</translation>
    </message>
    <message>
        <source>Make these settings the default and do not prompt again when importing an OASIS OpenDocument.</source>
        <translation>A beállítások legyenek alapértlemezettek, többé ne kérdezzen, mikor OASIS OpenDocument -et importálok.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Rendben</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
</context>
<context>
    <name>OldScribusFormat</name>
    <message>
        <source>Scribus Document</source>
        <translation>Scribus dokumentum</translation>
    </message>
    <message>
        <source>Scribus 1.2.x Document</source>
        <translation>Scribus 1.2.x dokumentum</translation>
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
        <translation type="unfinished">Méret</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation type="unfinished">Szélesség:</translation>
    </message>
    <message>
        <source>Length:</source>
        <translation type="unfinished">Hosszúság:</translation>
    </message>
    <message>
        <source>Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Angle:</source>
        <translation type="unfinished">Szög:</translation>
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
        <translation>%</translation>
    </message>
    <message>
        <source>Linewidth</source>
        <translation>Vonalvastagság</translation>
    </message>
</context>
<context>
    <name>PDFExportDialog</name>
    <message>
        <source>Save as PDF</source>
        <translation>Mentés PDF-ként</translation>
    </message>
    <message>
        <source>O&amp;utput to File:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation>&amp;Módosítás...</translation>
    </message>
    <message>
        <source>Output one file for eac&amp;h page</source>
        <translation>Az &amp;egyes oldalak külön fájlba kerülnek.</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Mentés</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Ment másként</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>PDF fájlok (*.pdf);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>This enables exporting one individually named PDF file for each page in the document. Page numbers are added automatically. This is most useful for imposing PDF for commercial printing.</source>
        <translation>Ez engedélyezi a dokumentum egyes oldalainak külön PDF fájlba exportálását. Az oldalszám automatikusan hozzáadódik. Ez leginkább a PDF általános nyomtatásakor hasznos.</translation>
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
</context>
<context>
    <name>PDFToolBar</name>
    <message>
        <source>PDF Tools</source>
        <translation type="unfinished">PDF eszközök</translation>
    </message>
</context>
<context>
    <name>PDFlib</name>
    <message>
        <source>Saving PDF</source>
        <translation>PDF mentése</translation>
    </message>
    <message>
        <source>Exporting Master Pages:</source>
        <translation type="obsolete">Mester oldalak exportálása:</translation>
    </message>
    <message>
        <source>Exporting Pages:</source>
        <translation type="obsolete">Oldalak exportálása:</translation>
    </message>
    <message>
        <source>Exporting Items on Current Page:</source>
        <translation>A jelenlegi oldal elemeinek exportálása:</translation>
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
        <source>Page:</source>
        <translation type="unfinished">Oldal:</translation>
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
        <translation>Nyomtatási nézet</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Text</source>
        <translation type="obsolete">Anti-alias &amp;Szöveg</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Graphics</source>
        <translation type="obsolete">Anti-alias &amp;Grafika</translation>
    </message>
    <message>
        <source>Display Trans&amp;parency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Under Color Removal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Display CMYK</source>
        <translation>CMYK &amp;megjelenítése</translation>
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
        <source>Shows transparency and transparent items in your document. Requires Ghostscript 7.07 or later</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Gives a print preview using simulations of generic CMYK inks, instead of RGB colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable/disable the C (Cyan) ink plate</source>
        <translation>C (cián) szín engedélyezése / tiltása</translation>
    </message>
    <message>
        <source>Enable/disable the M (Magenta) ink plate</source>
        <translation>M (magenta) szín engedélyezése / tiltása</translation>
    </message>
    <message>
        <source>Enable/disable the Y (Yellow) ink plate</source>
        <translation>Y (sárga) szín engedélyezése / tiltása</translation>
    </message>
    <message>
        <source>Enable/disable the K (Black) ink plate</source>
        <translation>K (fekete) szín engedélyezése / tiltása</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Minden</translation>
    </message>
    <message>
        <source>Separation Name</source>
        <translation>Elválasztó neve</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation>Kékeszöld</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation>Bíborvörös</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation>Sárga</translation>
    </message>
    <message>
        <source>Black</source>
        <translation>Fekete</translation>
    </message>
    <message>
        <source>Scaling:</source>
        <translation>Méretezés:</translation>
    </message>
    <message>
        <source>Print...</source>
        <translation>Nyomtatás...</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis. UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resize the scale of the page.</source>
        <translation>Oldal skála átméretezése</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Bezárás</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Fájl</translation>
    </message>
    <message>
        <source>Force Overprint Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable &amp;Antialiasing</source>
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
        <source>Provides a more pleasant view of Type 1 fonts, TrueType Fonts, OpenType Fonts, EPS, PDF and vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display Settings</source>
        <translation type="unfinished">Megjelenítési beállítások</translation>
    </message>
    <message>
        <source>Print Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mirror Page(s) Horizontal</source>
        <translation type="unfinished">Vízszintesen tükrözött oldal(ak)</translation>
    </message>
    <message>
        <source>Mirror Page(s) Vertical</source>
        <translation type="unfinished">Függőlegesen tükrözött oldal(ak)</translation>
    </message>
    <message>
        <source>Clip to Page Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print in Grayscale</source>
        <translation type="unfinished">Nyomtatás szürkeskálában</translation>
    </message>
    <message>
        <source>Convert Spot Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply ICC Profiles</source>
        <translation type="unfinished">ICC profilok alkalmazása</translation>
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
</context>
<context>
    <name>PSLib</name>
    <message>
        <source>Processing Master Pages:</source>
        <translation type="obsolete">Mester oldalak feldolgozása:</translation>
    </message>
    <message>
        <source>Exporting Pages:</source>
        <translation type="obsolete">Oldalak exportálása:</translation>
    </message>
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
        <translation type="unfinished">Tulajdonságok</translation>
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
        <translation type="unfinished">Tabulátorok és rovátkolás</translation>
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
        <translation>Kép</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Szöveg</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Vonal</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Sokszög</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation>Sokszögvonal</translation>
    </message>
    <message>
        <source>PathText</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation>Másolása</translation>
    </message>
</context>
<context>
    <name>PageItemAttributes</name>
    <message>
        <source>Relates To</source>
        <translation>Összefüggésben</translation>
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
        <comment>

relationship</comment>
        <translation type="obsolete">Nincs</translation>
    </message>
    <message>
        <source>None</source>
        <comment>relationship</comment>
        <translation type="unfinished">Nincs</translation>
    </message>
</context>
<context>
    <name>PageItemAttributesBase</name>
    <message>
        <source>Page Item Attributes</source>
        <translation>Oldal elem jellemzők</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Név</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Típus</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Érték</translation>
    </message>
    <message>
        <source>Parameter</source>
        <translation>Paraméter</translation>
    </message>
    <message>
        <source>Relationship</source>
        <translation>Összefüggés</translation>
    </message>
    <message>
        <source>Relationship To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Hozzáadás</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Másolás</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Rendben</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Mégsem</translation>
    </message>
</context>
<context>
    <name>PageLayouts</name>
    <message>
        <source>Page Layout</source>
        <translation type="obsolete">Oldal elrendezés</translation>
    </message>
    <message>
        <source>First Page is:</source>
        <translation>Első oldal:</translation>
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
        <translation>Kétoldalas</translation>
    </message>
    <message>
        <source>Middle Right</source>
        <translation>Középső jobb</translation>
    </message>
    <message>
        <source>Drag pages or master pages onto the trashbin to delete them</source>
        <translation>Dobja az oldalakat, vagy mester oldalakat a szemetesbe a törlésükhöz</translation>
    </message>
    <message>
        <source>Here are all your master pages. To create a new page, drag a master page to the page view below</source>
        <translation>Itt található az összes mester oldal. Új oldal létrehozásához dobja a mester oldalt az oldal nézetre</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normál</translation>
    </message>
    <message>
        <source>Arrange Pages</source>
        <translation>Oldalak elrendezése</translation>
    </message>
    <message>
        <source>Available Master Pages:</source>
        <translation>Elérhető mester oldalak:</translation>
    </message>
    <message>
        <source>Document Pages:</source>
        <translation>Oldalak:</translation>
    </message>
</context>
<context>
    <name>PageSelector</name>
    <message>
        <source>%1 of %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 of %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PageSize</name>
    <message>
        <source>Quarto</source>
        <translation type="obsolete">Kvartó</translation>
    </message>
    <message>
        <source>Foolscap</source>
        <translation type="obsolete">Írópapír (43*34 cm)</translation>
    </message>
    <message>
        <source>Executive</source>
        <translation type="obsolete">Végrehajtó</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="obsolete">Közepes</translation>
    </message>
    <message>
        <source>Elephant</source>
        <translation type="obsolete">Elefánt</translation>
    </message>
    <message>
        <source>Double Demy</source>
        <translation type="obsolete">Kettős papíralak</translation>
    </message>
    <message>
        <source>STMT</source>
        <translation type="obsolete">STMT</translation>
    </message>
    <message>
        <source>A</source>
        <translation type="obsolete">A</translation>
    </message>
    <message>
        <source>B</source>
        <translation type="obsolete">B</translation>
    </message>
    <message>
        <source>C</source>
        <translation type="obsolete">C</translation>
    </message>
    <message>
        <source>D</source>
        <translation type="obsolete">D</translation>
    </message>
    <message>
        <source>E</source>
        <translation type="obsolete">E</translation>
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
        <translation type="unfinished">Minden fájl (*)</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">Megnyitás</translation>
    </message>
</context>
<context>
    <name>PicSearch</name>
    <message>
        <source>Result</source>
        <translation type="obsolete">Eredmény</translation>
    </message>
    <message>
        <source>Search Results for: </source>
        <translation type="obsolete">A keresés eredménye: </translation>
    </message>
    <message>
        <source>Preview</source>
        <translation type="obsolete">Előnézet</translation>
    </message>
    <message>
        <source>Select</source>
        <translation type="obsolete">Kijelölés</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Mégsem</translation>
    </message>
</context>
<context>
    <name>PicSearchBase</name>
    <message>
        <source>Result</source>
        <translation type="unfinished">Eredmény</translation>
    </message>
    <message>
        <source>Search Results for: </source>
        <translation type="unfinished">A keresés eredménye: </translation>
    </message>
    <message>
        <source>&amp;Preview</source>
        <translation type="unfinished">&amp;Előnézet</translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation type="unfinished">Alt+P</translation>
    </message>
    <message>
        <source>&amp;Select</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="unfinished">Alt+S</translation>
    </message>
</context>
<context>
    <name>PicStatus</name>
    <message>
        <source>Name</source>
        <translation>Név</translation>
    </message>
    <message>
        <source>Path</source>
        <translation>Útvonal</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Oldal</translation>
    </message>
    <message>
        <source>Print</source>
        <translation>Nyomtatás</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Státusz</translation>
    </message>
    <message>
        <source>Goto</source>
        <translation>Ugrás</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="obsolete">Igen</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Rendben</translation>
    </message>
    <message>
        <source>Missing</source>
        <translation>Hiányzik</translation>
    </message>
    <message>
        <source>Search</source>
        <translation>Keresés</translation>
    </message>
    <message>
        <source>Cancel Search</source>
        <translation>Keresés leállítása</translation>
    </message>
    <message>
        <source>Manage Pictures</source>
        <translation>Képek kezelése</translation>
    </message>
    <message>
        <source>Scribus - Image Search</source>
        <translation>Scribus - Kép keresése</translation>
    </message>
    <message>
        <source>The search failed: %1</source>
        <translation>A keresés hibát jelzett: %1</translation>
    </message>
    <message>
        <source>No images named &quot;%1&quot; were found.</source>
        <translation>\&quot;%1\&quot; nevű kép nem található.</translation>
    </message>
    <message>
        <source>Select a base directory for search</source>
        <translation>Válassza ki a keresés alapkönyvtárát</translation>
    </message>
    <message>
        <source>Search Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished">Bezárás</translation>
    </message>
    <message>
        <source>Set a new location for the selected items. Useful when you may have moved the document but not the images.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select a base directory for your selected rows</source>
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
        <translation>&amp;Mentés képként...</translation>
    </message>
    <message>
        <source>Export As Image</source>
        <translation>Exportálás képként</translation>
    </message>
    <message>
        <source>Exports selected pages as bitmap images.</source>
        <translation>A kijelölt oldal exportálása bitmap képként.</translation>
    </message>
    <message>
        <source>Save as Image</source>
        <translation type="unfinished">Mentés képként</translation>
    </message>
    <message>
        <source>Error writing the output file(s).</source>
        <translation type="unfinished">Hiba a fájl(ok) írásakor.</translation>
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
        <translation>Bedolgozó modul nem található.</translation>
    </message>
    <message>
        <source>unknown error</source>
        <comment>plugin manager</comment>
        <translation>ismeretlen hiba</translation>
    </message>
    <message>
        <source>Cannot find symbol (%1)</source>
        <comment>plugin manager</comment>
        <translation>Nem található szimbólum (%1)</translation>
    </message>
    <message>
        <source>Plugin: loading %1</source>
        <comment>plugin manager</comment>
        <translation>Beépülő modul: %1 betöltése</translation>
    </message>
    <message>
        <source>init failed</source>
        <comment>plugin load error</comment>
        <translation>Hiba történt az inicializáláskor</translation>
    </message>
    <message>
        <source>unknown plugin type</source>
        <comment>plugin load error</comment>
        <translation>ismeretlen beépülő modul típus</translation>
    </message>
    <message>
        <source>Plugin: %1 loaded</source>
        <comment>plugin manager</comment>
        <translation>Beépülő modul: %1 betöltve</translation>
    </message>
    <message>
        <source>Plugin: %1 failed to load: %2</source>
        <comment>plugin manager</comment>
        <translation>Beépülő modul: %1 betöltési hiba: %2</translation>
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
    <message>
        <source>There is a problem loading %1 of %2 plugins. %3 This is probably caused by some kind of dependency issue or old plugins existing in your install directory. If you clean out your install directory and reinstall and this still occurs, please report it on bugs.scribus.net.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PluginManagerPrefsGui</name>
    <message>
        <source>Plugin Manager</source>
        <translation>Beépülő modul kezelő</translation>
    </message>
    <message>
        <source>Plugin</source>
        <translation>Beépülő modul</translation>
    </message>
    <message>
        <source>How to run</source>
        <translation>Hogyan futtassa</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Típus</translation>
    </message>
    <message>
        <source>Load it?</source>
        <translation>Betöltsem?</translation>
    </message>
    <message>
        <source>Plugin ID</source>
        <translation>Beépülő modul ID</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Fájl</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="obsolete">Igen</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="obsolete">Nem</translation>
    </message>
    <message>
        <source>You need to restart the application to apply the changes.</source>
        <translation>Újra kell indítania az alkalmazást a változások érvényre juttatásához.</translation>
    </message>
</context>
<context>
    <name>PolygonProps</name>
    <message>
        <source>Polygon Properties</source>
        <translation>Sokszög tulajdonságai</translation>
    </message>
</context>
<context>
    <name>PolygonWidget</name>
    <message>
        <source>Corn&amp;ers:</source>
        <translation>&amp;Szögek:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Forgatás:</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation>&amp;Faktor alkalamzása</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation>&amp;Faktor:</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation>Sokszögek szögeinek száma</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation>Sokszög elforgatásának mértéke</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation>Minta sokszög</translation>
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
        <translation>Alapbeállítások</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Általános</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Dokumentum</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation>Segédvonalak</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation>Tipográfia</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation>Eszközök</translation>
    </message>
    <message>
        <source>Display</source>
        <translation>Kijelző</translation>
    </message>
    <message>
        <source>GUI</source>
        <translation type="obsolete">Grafikus felhasználói felület</translation>
    </message>
    <message>
        <source>&amp;Theme:</source>
        <translation type="obsolete">&amp;Téma:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source>&amp;Wheel Jump:</source>
        <translation type="obsolete">&amp;Görgetés:</translation>
    </message>
    <message>
        <source>&amp;Recent Documents:</source>
        <translation type="obsolete">&amp;Jelenlegi dokumentumok:</translation>
    </message>
    <message>
        <source>Paths</source>
        <translation type="obsolete">Útvonalak</translation>
    </message>
    <message>
        <source>&amp;Documents:</source>
        <translation type="obsolete">&amp;Dokumentumok:</translation>
    </message>
    <message>
        <source>&amp;Change...</source>
        <translation type="obsolete">&amp;Módosítás...</translation>
    </message>
    <message>
        <source>&amp;ICC Profiles:</source>
        <translation type="obsolete">&amp;ICC profilok:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="obsolete">&amp;Módosítás...</translation>
    </message>
    <message>
        <source>&amp;Scripts:</source>
        <translation type="obsolete">&amp;Szkriptek:</translation>
    </message>
    <message>
        <source>Ch&amp;ange...</source>
        <translation type="obsolete">&amp;Módosítás...</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="obsolete">Oldal méret</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="obsolete">Egyedi</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="obsolete">&amp;Méret:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="obsolete">Álló</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="obsolete">Fekvő</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="obsolete">&amp;Orientáció:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="obsolete">&amp;Szélesség:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="obsolete">&amp;Magasság:</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="obsolete">Margók</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="obsolete">&amp;Alsó:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="obsolete">&amp;Felső:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="obsolete">&amp;Jobb:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="obsolete">&amp;Bal:</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation type="obsolete">Automatikus mentés</translation>
    </message>
    <message>
        <source>min</source>
        <translation type="obsolete">perc</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation type="obsolete">&amp;Időzítés:</translation>
    </message>
    <message>
        <source>&amp;Adjust Display Size</source>
        <translation type="obsolete">&amp;Megjelenítés méretének módosítása</translation>
    </message>
    <message>
        <source>&amp;Name of Executable:</source>
        <translation type="obsolete">&amp;Futtató neve:</translation>
    </message>
    <message>
        <source>Antialias &amp;Text</source>
        <translation type="obsolete">Anti-alias &amp;Szöveg</translation>
    </message>
    <message>
        <source>Antialias &amp;Graphics</source>
        <translation type="obsolete">Anti-alias &amp;Grafika</translation>
    </message>
    <message>
        <source>Image Processing Tool</source>
        <translation type="obsolete">Kép feldolgozó eszköz</translation>
    </message>
    <message>
        <source>Name of &amp;Executable:</source>
        <translation type="obsolete">&amp;Futtató neve:</translation>
    </message>
    <message>
        <source>Default font size for the menus and windows</source>
        <translation type="obsolete">A menü és az ablakok alapértelmezett betűmérete</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation type="obsolete">Dokumentum szerkesztésének alapértelmezett mértékegysége</translation>
    </message>
    <message>
        <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
        <translation type="obsolete">Az egér görgő mozgatásakor a görgetett sorok száma</translation>
    </message>
    <message>
        <source>Number of recently edited documents to show in the File menu</source>
        <translation type="obsolete">A fájl menüben mutatott legutóbbi dokumentumok száma</translation>
    </message>
    <message>
        <source>Default documents directory</source>
        <translation type="obsolete">Alapértelmezett dokumentum könyvtár</translation>
    </message>
    <message>
        <source>Default Scripter scripts directory</source>
        <translation type="obsolete">Alapértelmezett Szkripter szkript könyvtár</translation>
    </message>
    <message>
        <source>Default page size, either a standard size or a custom size</source>
        <translation type="obsolete">Alapértelmezett oldalméret, az általános és egyedi méret esetében is</translation>
    </message>
    <message>
        <source>Default orientation of document pages</source>
        <translation type="obsolete">A dokumentum oldalak alapértelmezett orientációja</translation>
    </message>
    <message>
        <source>Width of document pages, editable if you have chosen a custom page size</source>
        <translation type="obsolete">Dokumentum oldalak szélessége, ha egyedi oldal méretet választ, szerkeszthető</translation>
    </message>
    <message>
        <source>Height of document pages, editable if you have chosen a custom page size</source>
        <translation type="obsolete">Dokumentum oldalak magassága, ha egyedi oldal méretet választ, szerkeszthető</translation>
    </message>
    <message>
        <source>Time period between saving automatically</source>
        <translation type="obsolete">Automatikus mentések közötti időtartam</translation>
    </message>
    <message>
        <source>Color for paper</source>
        <translation type="obsolete">Lap színe</translation>
    </message>
    <message>
        <source>Set the default zoom level</source>
        <translation type="obsolete">Alapértelmezett nagyítási szint beállítása</translation>
    </message>
    <message>
        <source>Filesystem location for the Ghostscript interpreter</source>
        <translation type="obsolete">Ghostscript értelemző meghatározása a fájl rendszerben.</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation type="obsolete">Könyvtár kiválasztás</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation type="obsolete">&amp;Módosítás...</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation type="obsolete">&amp;Nyelv</translation>
    </message>
    <message>
        <source>Units:</source>
        <translation type="obsolete">Mértékegység:</translation>
    </message>
    <message>
        <source>Undo/Redo</source>
        <translation type="obsolete">Visszavonás/Újra végrehajtás</translation>
    </message>
    <message>
        <source>Action history length</source>
        <translation type="obsolete">Művelet előzmény hossza</translation>
    </message>
    <message>
        <source>Hyphenator</source>
        <translation>Elválasztó</translation>
    </message>
    <message>
        <source>Fonts</source>
        <translation>Betűtípusok</translation>
    </message>
    <message>
        <source>Color Management</source>
        <translation>Szín kezelés</translation>
    </message>
    <message>
        <source>PDF Export</source>
        <translation>PDF exportálás</translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation>Gyors billentyűk</translation>
    </message>
    <message>
        <source>Page Display</source>
        <translation type="obsolete">Oldal megjelenítése</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="obsolete">Szín:</translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation type="obsolete">Alt+U</translation>
    </message>
    <message>
        <source>Show Pictures</source>
        <translation type="obsolete">Képek mutatása</translation>
    </message>
    <message>
        <source>Show Text Chains</source>
        <translation type="obsolete">Szöveg láncok mutatása</translation>
    </message>
    <message>
        <source>Show Frames</source>
        <translation type="obsolete">Keretek mutatása</translation>
    </message>
    <message>
        <source>Plugins</source>
        <translation>Beépülő modulok</translation>
    </message>
    <message>
        <source>Turns the display of frames on or off</source>
        <translation type="obsolete">Keretek megjelenítésének be- és kikapcsolása</translation>
    </message>
    <message>
        <source>Turns the display of pictures on or off</source>
        <translation type="obsolete">Képek megjelenítésének be- és kikapcsolása</translation>
    </message>
    <message>
        <source>Document T&amp;emplates:</source>
        <translation type="obsolete">&amp;Dokumentum sablon:</translation>
    </message>
    <message>
        <source>Preflight Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document Item Attributes</source>
        <translation>Dokumentum elem jellemzők</translation>
    </message>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation>Tartalomjegyzék és indexek</translation>
    </message>
    <message>
        <source>Show Text Control Characters</source>
        <translation type="obsolete">Szöveg vezérlő karakterek mutatása</translation>
    </message>
    <message>
        <source>Gaps between Pages</source>
        <translation type="obsolete">Oldalak közötti hézag</translation>
    </message>
    <message>
        <source>Horizontal:</source>
        <translation type="obsolete">Vízszintes:</translation>
    </message>
    <message>
        <source>Vertical:</source>
        <translation type="obsolete">Függőleges:</translation>
    </message>
    <message>
        <source>dpi</source>
        <translation type="obsolete">dpi</translation>
    </message>
    <message>
        <source>Resolution:</source>
        <translation type="obsolete">Felbontás:</translation>
    </message>
    <message>
        <source>External Tools</source>
        <translation>Külső eszközök</translation>
    </message>
    <message>
        <source>Always ask before fonts are replaced when loading a document</source>
        <translation type="obsolete">Mindig kérdezzen rá a dokumentum betöltésekor a betűtípus helyettesítésére</translation>
    </message>
    <message>
        <source>Show Startup Dialog</source>
        <translation type="obsolete">Indítási dialógus mutatása</translation>
    </message>
    <message>
        <source>Count of the Paragraphs:</source>
        <translation type="obsolete">Bekezdések száma:</translation>
    </message>
    <message>
        <source>Miscellaneous</source>
        <translation>Különböző</translation>
    </message>
    <message>
        <source>Display non-printing characters such as paragraph markers in text frames</source>
        <translation type="obsolete">Nem nyomtatandó karakterek, mint bekezdés jelölés, mutatása a szöveg keretben</translation>
    </message>
    <message>
        <source>Additional directory for document templates</source>
        <translation type="obsolete">További könyvtárak a dokumentum sablonhoz</translation>
    </message>
    <message>
        <source>Locate Ghostscript</source>
        <translation type="obsolete">Ghostscript helye</translation>
    </message>
    <message>
        <source>Locate your image editor</source>
        <translation type="obsolete">Kép szerkesztő kijelölése</translation>
    </message>
    <message>
        <source>PostScript Interpreter</source>
        <translation type="obsolete">PostScript értelmező</translation>
    </message>
    <message>
        <source>Enable or disable  the display of linked frames.</source>
        <translation type="obsolete">Kapcsolot ekretek megjelenítésének engedélyezése vagy tiltása.</translation>
    </message>
    <message>
        <source>Select your default language for Scribus to run with. Leave this blank to choose based on environment variables. You can still override this by passing a command line option when starting Scribus</source>
        <translation type="obsolete">Scribus alapértelmezett nyelvének kiválasztása. Hagyja üresen, ha a rendszer változót akarja használni. Ezt felülírhatja a Scribus indításakor a parancssori kapcsoló megadásával.</translation>
    </message>
    <message>
        <source>&amp;Font Size (Menus):</source>
        <translation type="obsolete">&amp;Betűméret (menük):</translation>
    </message>
    <message>
        <source>Font Size (&amp;Palettes):</source>
        <translation type="obsolete">Betűméret (&amp;Paletták):</translation>
    </message>
    <message>
        <source>Default font size for the tool windows</source>
        <translation type="obsolete">Eszköz ablak alapértelmezett betűmérete</translation>
    </message>
    <message>
        <source>When enabled, Scribus saves a backup copy of your file with the .bak extension each time the time period elapses</source>
        <translation type="obsolete">Ha negedélyezi, a Scribus készít egy .bak kiterjesztésű biztonsági másolatot a fájljáról a beállított időközönként</translation>
    </message>
    <message>
        <source>Set the length of the action history in steps. If set to 0 infinite amount of actions will be stored.</source>
        <translation type="obsolete">Állítsa be a változtatások megjegyzésének mértékét. Ha 0 értéket ad meg, korlátozás nélkül tárolódnak a változtatások.</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation type="unfinished">Gyűjtőalbum</translation>
    </message>
    <message>
        <source>Printer</source>
        <translation type="unfinished">Nyomtató</translation>
    </message>
</context>
<context>
    <name>PrefsDialogBase</name>
    <message>
        <source>&amp;Defaults</source>
        <translation>&amp;Alapértékek</translation>
    </message>
    <message>
        <source>Save...</source>
        <translation type="obsolete">mentés...</translation>
    </message>
    <message>
        <source>Save Preferences</source>
        <translation>Mentés jellemzők</translation>
    </message>
    <message>
        <source>Export...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation type="unfinished">&amp;Alkalmazás</translation>
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
</context>
<context>
    <name>PrefsManager</name>
    <message>
        <source>Postscript</source>
        <translation>Postscript</translation>
    </message>
    <message>
        <source>Migrate Old Scribus Settings?</source>
        <translation>Migrálja a régi Scribus beállításokat?</translation>
    </message>
    <message>
        <source>Scribus has detected existing Scribus 1.2 preferences files.
Do you want to migrate them to the new Scribus version?</source>
        <translation>Scribus 1.2 verziójú beállítási fájlt talált. Akarja migrálni az új Scribus verzióba?</translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation>PostScript</translation>
    </message>
    <message>
        <source>Could not open preferences file &quot;%1&quot; for writing: %2</source>
        <translation>Nem lehet a \&quot;%1\&quot; beállítási fájlt megnyitni írásra: %2</translation>
    </message>
    <message>
        <source>Writing to preferences file &quot;%1&quot; failed: QIODevice status code %2</source>
        <translation>\&quot;%1\&quot; beállítási fájl írásakor hiba történt: QIODevice státusz kód %2</translation>
    </message>
    <message>
        <source>Failed to open prefs file &quot;%1&quot;: %2</source>
        <translation>Hiba történt a \&quot;%1\&quot; beállítás fájl megnyitásakor: %2</translation>
    </message>
    <message>
        <source>Failed to read prefs XML from &quot;%1&quot;: %2 at line %3, col %4</source>
        <translation>Hiba történt a \&quot;%1\&quot; -ből az XML beállítások olvasásakor: a %3 sornál, %4 oszlopnál %2</translation>
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
        <translation>Hiba a beállítások mentésénél</translation>
    </message>
    <message>
        <source>Scribus was not able to save its preferences:&lt;br&gt;%1&lt;br&gt;Please check file and directory permissions and available disk space.</source>
        <comment>scribus app error</comment>
        <translation>Scribus nem tudta mentesi a beállításait: &lt;br&gt;%1&lt;br&gt; Kérem ellenőrizze a fájl és konyvtár engedélyeket, valamint a szabad lemez területet</translation>
    </message>
    <message>
        <source>Error Loading Preferences</source>
        <translation>Hiba a beállítások betöltésénél</translation>
    </message>
    <message>
        <source>Scribus was not able to load its preferences:&lt;br&gt;%1&lt;br&gt;Default settings will be loaded.</source>
        <translation>Scribus nem tudja betölteni a beállításokat:&lt;br&gt;%1&lt;br&gt; Az alapértelmezett beálításokat tölti be.</translation>
    </message>
</context>
<context>
    <name>PresetLayout</name>
    <message>
        <source>Magazine</source>
        <translation>Magazin</translation>
    </message>
    <message>
        <source>Gutenberg</source>
        <translation>Gutenberg</translation>
    </message>
    <message>
        <source>Fibonacci</source>
        <translation>Fibonacci</translation>
    </message>
    <message>
        <source>Golden Mean</source>
        <translation>Golden Mean</translation>
    </message>
    <message>
        <source>Nine Parts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <comment>

layout type</comment>
        <translation type="obsolete">Nincs</translation>
    </message>
    <message>
        <source>None</source>
        <comment>layout type</comment>
        <translation type="unfinished">Nincs</translation>
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
        <translation>&amp;Megnyitás...</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Mentés</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>&amp;Ment másként...</translation>
    </message>
    <message>
        <source>&amp;Exit</source>
        <translation>&amp;Kilépés</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Fájl</translation>
    </message>
    <message>
        <source>&amp;Run</source>
        <translation>&amp;Futtatás</translation>
    </message>
    <message>
        <source>Run As &amp;Console</source>
        <translation>&amp;Futtatás konzolként</translation>
    </message>
    <message>
        <source>&amp;Save Output...</source>
        <translation>&amp;Kimenet mentése...</translation>
    </message>
    <message>
        <source>&amp;Script</source>
        <translation>&amp;Szkript</translation>
    </message>
    <message>
        <source>Scribus Python Console</source>
        <translation>Scribus Python konzol</translation>
    </message>
    <message>
        <source>This is derived from standard Python console so it contains some limitations esp. in the case of whitespaces. Please consult Scribus manual for more informations.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Script Console</source>
        <translation>Szkript konzol</translation>
    </message>
    <message>
        <source>Write your commands here. A selection is processed as script</source>
        <translation>Írja be a parancsokat. A kijelölés szkriptként hajtódik végre</translation>
    </message>
    <message>
        <source>Output of your script</source>
        <translation>Szkript kimenete</translation>
    </message>
    <message>
        <source>Python Scripts (*.py)</source>
        <translation type="obsolete">Python szkript (*.py)</translation>
    </message>
    <message>
        <source>Save the Python Commands in File</source>
        <translation>Python parancs fájlba mentése</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Figyelmeztetés</translation>
    </message>
    <message>
        <source>Text Files (*.txt)</source>
        <translation>Szöveg fájlok (*.txt)</translation>
    </message>
    <message>
        <source>Save Current Output</source>
        <translation>Jelenlegi kimenet mentése</translation>
    </message>
    <message>
        <source>Open Python Script File</source>
        <translation>Python szkript fájl megnyitása</translation>
    </message>
    <message>
        <source>Python Scripts (*.py *.PY)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line: %1 Column: %2</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QColorDialog</name>
    <message>
        <source>Hu&amp;e:</source>
        <translation>&amp;Színárnyalat:</translation>
    </message>
    <message>
        <source>&amp;Sat:</source>
        <translation>&amp;Telítettség:</translation>
    </message>
    <message>
        <source>&amp;Val:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Red:</source>
        <translation>&amp;Vörös:</translation>
    </message>
    <message>
        <source>&amp;Green:</source>
        <translation>&amp;Zöld:</translation>
    </message>
    <message>
        <source>Bl&amp;ue:</source>
        <translation>&amp;Kék:</translation>
    </message>
    <message>
        <source>A&amp;lpha channel:</source>
        <translation>&amp;Alfa csatorna:</translation>
    </message>
    <message>
        <source>&amp;Basic colors</source>
        <translation>Alapszínek</translation>
    </message>
    <message>
        <source>&amp;Custom colors</source>
        <translation>Saját színek</translation>
    </message>
    <message>
        <source>&amp;Define Custom Colors &gt;&gt;</source>
        <translation>Saját színek definiálása &gt;&gt;</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Rendben</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
    <message>
        <source>&amp;Add to Custom Colors</source>
        <translation>Egyedi színek hozzáadása</translation>
    </message>
    <message>
        <source>Select color</source>
        <translation>Szín kiválasztása</translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <source>Copy or Move a File</source>
        <translation>Fájl másolása vagy mozgatása</translation>
    </message>
    <message>
        <source>Read: %1</source>
        <translation>%1 olvasása</translation>
    </message>
    <message>
        <source>Write: %1</source>
        <translation>Írás: %1</translation>
    </message>
    <message>
        <source>File &amp;name:</source>
        <translation>Fájl&amp;név:</translation>
    </message>
    <message>
        <source>File &amp;type:</source>
        <translation>Fájl&amp;típus:</translation>
    </message>
    <message>
        <source>One directory up</source>
        <translation>Egy könyvtárral feljebb</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Minden fájl (*)</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Név</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Méret</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Típus</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Dátum</translation>
    </message>
    <message>
        <source>Attributes</source>
        <translation>Jellemzők</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Rendben</translation>
    </message>
    <message>
        <source>Look &amp;in:</source>
        <translation>Megtek&amp;intés:</translation>
    </message>
    <message>
        <source>Back</source>
        <translation>Vissza</translation>
    </message>
    <message>
        <source>Create New Folder</source>
        <translation>Könyvtár létrehozása</translation>
    </message>
    <message>
        <source>List View</source>
        <translation>Listanézet</translation>
    </message>
    <message>
        <source>Detail View</source>
        <translation>Részletes nézet</translation>
    </message>
    <message>
        <source>Preview File Info</source>
        <translation>Fálj információ mutatása</translation>
    </message>
    <message>
        <source>Preview File Contents</source>
        <translation>Fájl tartalmának mutatása</translation>
    </message>
    <message>
        <source>Read-write</source>
        <translation>Olvasható - írható</translation>
    </message>
    <message>
        <source>Read-only</source>
        <translation>Csak olvasható</translation>
    </message>
    <message>
        <source>Write-only</source>
        <translation>Csak írható</translation>
    </message>
    <message>
        <source>Inaccessible</source>
        <translation>Elérhetetlen</translation>
    </message>
    <message>
        <source>Symlink to File</source>
        <translation>Fájlra mutató szimlink</translation>
    </message>
    <message>
        <source>Symlink to Directory</source>
        <translation>Könyvtárra mutató szimlink</translation>
    </message>
    <message>
        <source>Symlink to Special</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File</source>
        <translation>Fájl</translation>
    </message>
    <message>
        <source>Dir</source>
        <translation>Könyvtár</translation>
    </message>
    <message>
        <source>Special</source>
        <translation>Speciális</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Megnyitás</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation>Ment másként</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Megnyitás</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Mentés</translation>
    </message>
    <message>
        <source>&amp;Rename</source>
        <translation>&amp;Átnevezés</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>R&amp;eload</source>
        <translation>&amp;Újratöltés</translation>
    </message>
    <message>
        <source>Sort by &amp;Name</source>
        <translation>Rendezés &amp;név szerint</translation>
    </message>
    <message>
        <source>Sort by &amp;Size</source>
        <translation>Rendezés &amp;méret szerint</translation>
    </message>
    <message>
        <source>Sort by &amp;Date</source>
        <translation>Rendezés &amp;dátum szerint</translation>
    </message>
    <message>
        <source>&amp;Unsorted</source>
        <translation>&amp;Nem rendezett</translation>
    </message>
    <message>
        <source>Sort</source>
        <translation>Rendezés</translation>
    </message>
    <message>
        <source>Show &amp;hidden files</source>
        <translation>Rejtett fájlok mutatása</translation>
    </message>
    <message>
        <source>the file</source>
        <translation>fájl</translation>
    </message>
    <message>
        <source>the directory</source>
        <translation>a könyvtár</translation>
    </message>
    <message>
        <source>the symlink</source>
        <translation>szimlink</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>%1 törlése</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Are you sure you wish to delete %1 &quot;%2&quot;?&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Biztos törölni akarja %1 \&quot;%2\&quot;?&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="obsolete">&amp;Igen</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="obsolete">&amp;Nem</translation>
    </message>
    <message>
        <source>New Folder 1</source>
        <translation>Új könyvtár %1</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>Új könyvtár</translation>
    </message>
    <message>
        <source>New Folder %1</source>
        <translation>Új könyvtár %1</translation>
    </message>
    <message>
        <source>Find Directory</source>
        <translation>Könyvtár keresése</translation>
    </message>
    <message>
        <source>Directories</source>
        <translation>Könyvtárak</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>Mentés</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>hiba</translation>
    </message>
    <message>
        <source>%1
File not found.
Check path and filename.</source>
        <translation>%1 fájl nem található. Ellenőrizze az elérési útvonalat és a fájl nevet.</translation>
    </message>
    <message>
        <source>All Files (*.*)</source>
        <translation>Minden fájl (*.*)</translation>
    </message>
    <message>
        <source>Select a Directory</source>
        <translation>Válasszon ki egy könyvtárt</translation>
    </message>
    <message>
        <source>Directory:</source>
        <translation>Könyvtár:</translation>
    </message>
</context>
<context>
    <name>QFontDialog</name>
    <message>
        <source>&amp;Font</source>
        <translation>Betűtípus</translation>
    </message>
    <message>
        <source>Font st&amp;yle</source>
        <translation>Betűstílus</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;Méret</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation>Hatások</translation>
    </message>
    <message>
        <source>Stri&amp;keout</source>
        <translation>Áthúzott</translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation>Aláhúzott</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation>&amp;Szín</translation>
    </message>
    <message>
        <source>Sample</source>
        <translation>Minta</translation>
    </message>
    <message>
        <source>Scr&amp;ipt</source>
        <translation>Szkript</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Rendben</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Alkalmazás</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Bezárás</translation>
    </message>
    <message>
        <source>Select Font</source>
        <translation>Betűtípus választása</translation>
    </message>
</context>
<context>
    <name>QLineEdit</name>
    <message>
        <source>Clear</source>
        <translation>Törlés</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>Minden kijelölése</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Visszavonás</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Újra végrehajtás</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>&amp;Kivágás</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Másolás</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Beillesztés</translation>
    </message>
</context>
<context>
    <name>QMainWindow</name>
    <message>
        <source>Line up</source>
        <translation>Felgörgetés</translation>
    </message>
    <message>
        <source>Customize...</source>
        <translation>Egyedivé tétel...</translation>
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
        <source>Importing text</source>
        <translation>Szöveg importálása</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation>Minden támogatott formátum</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Minden fájl (*)</translation>
    </message>
    <message>
        <source>Initializing...</source>
        <translation>Inicializálás...</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Háttér</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Figyelmeztetés</translation>
    </message>
    <message>
        <source>Do you really want to overwrite the File:
%1 ?</source>
        <translation>Tényleg felül akarja írni a(z)
%1 fájlt?</translation>
    </message>
    <message>
        <source>Newsletters</source>
        <translation>Hírlevél</translation>
    </message>
    <message>
        <source>Brochures</source>
        <translation>Brosúra</translation>
    </message>
    <message>
        <source>Catalogs</source>
        <translation>Katalógus</translation>
    </message>
    <message>
        <source>Flyers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Signs</source>
        <translation>Jelek</translation>
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
        <translation>Boriték</translation>
    </message>
    <message>
        <source>Business Cards</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Calendars</source>
        <translation>Naptár</translation>
    </message>
    <message>
        <source>Advertisements</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Labels</source>
        <translation>Címkék</translation>
    </message>
    <message>
        <source>Menus</source>
        <translation>Menük</translation>
    </message>
    <message>
        <source>Programs</source>
        <translation>Programok</translation>
    </message>
    <message>
        <source>PDF Forms</source>
        <translation>PDF űrlap</translation>
    </message>
    <message>
        <source>PDF Presentations</source>
        <translation>PDF bemutatók</translation>
    </message>
    <message>
        <source>Magazines</source>
        <translation>Magazinok</translation>
    </message>
    <message>
        <source>Posters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Announcements</source>
        <translation>Kommentárok</translation>
    </message>
    <message>
        <source>Text Documents</source>
        <translation>Szöveg dokumetumok</translation>
    </message>
    <message>
        <source>Folds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Own Templates</source>
        <translation>Sablonjaim</translation>
    </message>
    <message>
        <source>Save as Image</source>
        <translation type="obsolete">Mentés képként</translation>
    </message>
    <message>
        <source>Error writing the output file(s).</source>
        <translation type="obsolete">Hiba a fájl(ok) írásakor.</translation>
    </message>
    <message>
        <source>Export successful.</source>
        <translation type="obsolete">Exportálás sikeresen megtörtént.</translation>
    </message>
    <message>
        <source>File exists. Overwrite?</source>
        <translation type="obsolete">Fájl már létezik. Felülírja?</translation>
    </message>
    <message>
        <source>exists already. Overwrite?</source>
        <translation type="obsolete">már létezik. Felülírja?</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="obsolete">Nem</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="obsolete">Igen</translation>
    </message>
    <message>
        <source>Yes all</source>
        <translation type="obsolete">Igen mindenre</translation>
    </message>
    <message>
        <source>All Supported Formats (*.eps *.EPS *.ps *.PS);;</source>
        <translation type="obsolete">Minden támogatott formátum (*.eps *.EPS *.ps *.PS);;</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Megnyitás</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Ment másként</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg *.svgz);;All Files (*)</source>
        <translation>SVGH képek (*.svg *.svgz);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg);;All Files (*)</source>
        <translation>SVG képek (*.svg);; Minden fájl (*)</translation>
    </message>
    <message>
        <source>Comma Separated Value Files</source>
        <translation>Vesszővel elválasztott értékek (CSV) fájl</translation>
    </message>
    <message>
        <source>CSV_data</source>
        <translation>CSV_adat</translation>
    </message>
    <message>
        <source>CSV_header</source>
        <translation>CSV_fej</translation>
    </message>
    <message>
        <source>HTML Files</source>
        <translation>HTML fájlok</translation>
    </message>
    <message>
        <source>html</source>
        <translation>html</translation>
    </message>
    <message>
        <source>
External Links
</source>
        <translation>Külső kapcsolatok</translation>
    </message>
    <message>
        <source>Text Files</source>
        <translation>Szöveg fájlok</translation>
    </message>
    <message>
        <source>Font %1 is broken, discarding it</source>
        <translation>%1 betűtípus sérült, figyelmen kívül hagyva</translation>
    </message>
    <message>
        <source>Text Filters</source>
        <translation>Szöveg szűrők</translation>
    </message>
    <message>
        <source>Media Cases</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Albanian</source>
        <translation>Albán</translation>
    </message>
    <message>
        <source>Basque</source>
        <translation>Baszk</translation>
    </message>
    <message>
        <source>Bulgarian</source>
        <translation>Bulgár</translation>
    </message>
    <message>
        <source>Brazilian</source>
        <translation type="obsolete">Brazil</translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation>Katalán</translation>
    </message>
    <message>
        <source>Chinese</source>
        <translation>Kinai</translation>
    </message>
    <message>
        <source>Czech</source>
        <translation>Cseh</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation>Dán</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation>Holland</translation>
    </message>
    <message>
        <source>English</source>
        <translation>Angol</translation>
    </message>
    <message>
        <source>English (British)</source>
        <translation>Angol (Brit)</translation>
    </message>
    <message>
        <source>Esperanto</source>
        <translation>Eszperanto</translation>
    </message>
    <message>
        <source>German</source>
        <translation>Német</translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation>Befejezés</translation>
    </message>
    <message>
        <source>French</source>
        <translation>Francia</translation>
    </message>
    <message>
        <source>Galician</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Greek</source>
        <translation>Görög</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation>Magyar</translation>
    </message>
    <message>
        <source>Indonesian</source>
        <translation>Indonézia</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation>Olasz</translation>
    </message>
    <message>
        <source>Korean</source>
        <translation>Koreai</translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation>Litván</translation>
    </message>
    <message>
        <source>Norwegian (Bokmaal)</source>
        <translation type="obsolete">Norvég (Bokmaal)</translation>
    </message>
    <message>
        <source>Norwegian (Nnyorsk)</source>
        <translation>Norvég (Nnyorsk)</translation>
    </message>
    <message>
        <source>Norwegian</source>
        <translation>Norvég</translation>
    </message>
    <message>
        <source>Polish</source>
        <translation>Lengyel</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation>Orosz</translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation>Svéd</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation>Spanyol</translation>
    </message>
    <message>
        <source>Spanish (Latin)</source>
        <translation>Spanyol (latin)</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation>Szlovák</translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation>Szlovén</translation>
    </message>
    <message>
        <source>Serbian</source>
        <translation>Szerb</translation>
    </message>
    <message>
        <source>Cannot get font size of non-text frame.</source>
        <comment>python error</comment>
        <translation>Nem szöveg keret betűtípus mérete nem határozható meg.</translation>
    </message>
    <message>
        <source>Cannot get font of non-text frame.</source>
        <comment>python error</comment>
        <translation>Nem szöveg keret betűtípusa nem határozható meg.</translation>
    </message>
    <message>
        <source>Cannot get text size of non-text frame.</source>
        <comment>python error</comment>
        <translation>Nem szöveg keret szöveg mérete nem határozható meg.</translation>
    </message>
    <message>
        <source>Cannot get column count of non-text frame.</source>
        <comment>python error</comment>
        <translation>Nem szöveg keret oszlop száma nem határozható meg.</translation>
    </message>
    <message>
        <source>Cannot get line space of non-text frame.</source>
        <comment>python error</comment>
        <translation>Nem szöveg keret vonal távolsága nem határozható meg.</translation>
    </message>
    <message>
        <source>Cannot get column gap of non-text frame.</source>
        <comment>python error</comment>
        <translation>Nem szöveg keret oszlop köze nem határozható meg.</translation>
    </message>
    <message>
        <source>Cannot get text of non-text frame.</source>
        <comment>python error</comment>
        <translation>Nem szöveg keret szövege nem határozható meg.</translation>
    </message>
    <message>
        <source>Cannot set text of non-text frame.</source>
        <comment>python error</comment>
        <translation>Nem szöveg keret szövege nem adható meg.</translation>
    </message>
    <message>
        <source>Cannot insert text into non-text frame.</source>
        <comment>python error</comment>
        <translation>Nem szöveg keretbe szöveg nem tölthető be.</translation>
    </message>
    <message>
        <source>Alignment out of range. Use one of the scribus.ALIGN* constants.</source>
        <comment>python error</comment>
        <translation>Igazítás nem esik a tartományba. Használj az egyik scribus.ALIGN* állandót.</translation>
    </message>
    <message>
        <source>Selection index out of bounds</source>
        <comment>python error</comment>
        <translation>Kijelölt index tartományon kívüli</translation>
    </message>
    <message>
        <source>Unit out of range. Use one of the scribus.UNIT_* constants.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target is not an image frame.</source>
        <comment>python error</comment>
        <translation>A cél nem kép keret.</translation>
    </message>
    <message>
        <source>Corner radius must be a positive number.</source>
        <comment>python error</comment>
        <translation>Sarok lekerekítés pozitív szám legyen.</translation>
    </message>
    <message>
        <source>Cannot get a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Név nélkül nem határozható meg a szín.</translation>
    </message>
    <message>
        <source>Cannot change a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Név nélkül nem változtatható meg a szín.</translation>
    </message>
    <message>
        <source>Cannot create a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Nem hozható létre név nélkül szín.</translation>
    </message>
    <message>
        <source>Cannot delete a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Név nélkül nem törölhető a szín.</translation>
    </message>
    <message>
        <source>Cannot replace a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Nem cserélhető le a szín egy üres névvel.</translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Documents</source>
        <translation>OpenOffice.org Szöveg dokumentumok</translation>
    </message>
    <message>
        <source>Color not found - python error</source>
        <comment>python error</comment>
        <translation>Szín nem található - python hiba</translation>
    </message>
    <message>
        <source>Custom (optional) configuration: </source>
        <comment>short words plugin</comment>
        <translation>Egyedi (opcionális) konfiguráció: </translation>
    </message>
    <message>
        <source>Standard configuration: </source>
        <comment>short words plugin</comment>
        <translation>Sztandard konfiguráció: </translation>
    </message>
    <message>
        <source>Short Words processing. Wait please...</source>
        <comment>short words plugin</comment>
        <translation>Rövid szó feldolgozás. Kérem várjon...</translation>
    </message>
    <message>
        <source>Short Words processing. Done.</source>
        <comment>short words plugin</comment>
        <translation>Rövid szó feldolgozás. Kész.</translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation>Afrikai</translation>
    </message>
    <message>
        <source>Turkish</source>
        <translation>Török</translation>
    </message>
    <message>
        <source>Ukranian</source>
        <translation>Ukrán</translation>
    </message>
    <message>
        <source>Welsh</source>
        <translation>Welszi</translation>
    </message>
    <message>
        <source>The filename must be a string.</source>
        <comment>python error</comment>
        <translation>A fájlnév karakter sorozat legyen.</translation>
    </message>
    <message>
        <source>Cannot delete image type settings.</source>
        <comment>python error</comment>
        <translation>Nem törölhetők a kép típus beállítások.</translation>
    </message>
    <message>
        <source>The image type must be a string.</source>
        <comment>python error</comment>
        <translation>A kép típusa karakter sorozat legyen.</translation>
    </message>
    <message>
        <source>&apos;allTypes&apos; attribute is READ-ONLY</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to export image</source>
        <comment>python error</comment>
        <translation>Hiba történt a kép exportálásakor</translation>
    </message>
    <message>
        <source>Cannot scale by 0%.</source>
        <comment>python error</comment>
        <translation>Nem skálázható át 0%-kal.</translation>
    </message>
    <message>
        <source>Specified item not an image frame.</source>
        <comment>python error</comment>
        <translation>A kijelölt elem nem kép keret.</translation>
    </message>
    <message>
        <source>Font not found.</source>
        <comment>python error</comment>
        <translation>Betűtípus nem található.</translation>
    </message>
    <message>
        <source>Cannot render an empty sample.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot have an empty layer name.</source>
        <comment>python error</comment>
        <translation>Üres réteg név nem lehetséges.</translation>
    </message>
    <message>
        <source>Layer not found.</source>
        <comment>python error</comment>
        <translation>Réteg nem található.</translation>
    </message>
    <message>
        <source>Cannot remove the last layer.</source>
        <comment>python error</comment>
        <translation>Az utolsó réteg nem távolítható el.</translation>
    </message>
    <message>
        <source>Cannot create layer without a name.</source>
        <comment>python error</comment>
        <translation>Név nélkül nem hozható létre réteg.</translation>
    </message>
    <message>
        <source>Insert index out of bounds.</source>
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
        <translation>Betűméret nem megfelelő - 1 és 512 közé kell esnie</translation>
    </message>
    <message>
        <source>Cannot set font size on a non-text frame.</source>
        <comment>python error</comment>
        <translation>A betűméretet nem lehet beállítani egy nem szöveg keretben.</translation>
    </message>
    <message>
        <source>Cannot set font on a non-text frame.</source>
        <comment>python error</comment>
        <translation>A betűtípust nem lehet beállítani egy nem szöveg keretben.</translation>
    </message>
    <message>
        <source>Line space out of bounds, must be &gt;= 0.1.</source>
        <comment>python error</comment>
        <translation>Vonal távolságnak 0,1-nél nagyobbnak kell lennie.</translation>
    </message>
    <message>
        <source>Cannot set line spacing on a non-text frame.</source>
        <comment>python error</comment>
        <translation>A sortávolságot nem lehet beállítani egy nem szöveg keretben.</translation>
    </message>
    <message>
        <source>Column gap out of bounds, must be positive.</source>
        <comment>python error</comment>
        <translation>Az oszlop távolság kívül esik a tartományon, pozitív számnak kell lennie.</translation>
    </message>
    <message>
        <source>Cannot set column gap on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Az oszlop távolság nem állítható be egy nem szöveg keretben.</translation>
    </message>
    <message>
        <source>Column count out of bounds, must be &gt; 1.</source>
        <comment>python error</comment>
        <translation>Oszlopok száma kívül esik a tartományon, 1-nél nagyobbnak kell lennie.</translation>
    </message>
    <message>
        <source>Cannot set number of columns on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Az oszlopok száma nem adható meg egy nem szöveg keretben.</translation>
    </message>
    <message>
        <source>Cannot select text in a non-text frame</source>
        <comment>python error</comment>
        <translation>Nem jelölhető ki szöveg egy nem szöveg keretben.</translation>
    </message>
    <message>
        <source>Cannot delete text from a non-text frame.</source>
        <comment>python error</comment>
        <translation>Nem törölhető szöveg a nem szöveg keretből.</translation>
    </message>
    <message>
        <source>Cannot set text fill on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Nem állítható be szöveg kitöltés egy nem szöveg keretben.</translation>
    </message>
    <message>
        <source>Cannot set text stroke on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set text shade on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Nem állítható be szöveg árnyék egy nem szöveg keretben.</translation>
    </message>
    <message>
        <source>Can only link text frames.</source>
        <comment>python error</comment>
        <translation>Csak szöveg keretek kapcsolhatók össze.</translation>
    </message>
    <message>
        <source>Target frame must be empty.</source>
        <comment>python error</comment>
        <translation>Cél keretnek üresnek kell lennie.</translation>
    </message>
    <message>
        <source>Target frame links to another frame.</source>
        <comment>python error</comment>
        <translation>A cél keret egy másik kerethez van kapcsolva.</translation>
    </message>
    <message>
        <source>Target frame is linked to by another frame.</source>
        <comment>python error</comment>
        <translation>A cél keretet egy másik keret összekapcsolja.</translation>
    </message>
    <message>
        <source>Source and target are the same object.</source>
        <comment>python error</comment>
        <translation>A forrás és cél ugyanaz az objektum.</translation>
    </message>
    <message>
        <source>Cannot unlink a non-text frame.</source>
        <comment>python error</comment>
        <translation>Nem szöveg keret kapcsolat nem szüntethető meg.</translation>
    </message>
    <message>
        <source>Cannot convert a non-text frame to outlines.</source>
        <comment>python error</comment>
        <translation>Nem kovertálható a nem szöveg keret körvolnallá.</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Oldal</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="obsolete">Egyedi</translation>
    </message>
    <message>
        <source>Scribus Development Version</source>
        <translation>Scribus fejlesztői változat</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation>ban</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
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
        <translation>ban</translation>
    </message>
    <message>
        <source>p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>Points (pt)</source>
        <translation>Pont (pt)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation>Hüvelyk (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation>Pika (p)</translation>
    </message>
    <message>
        <source>File exists</source>
        <translation>Fájl már létezik</translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation>&amp;Csere</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Minden</translation>
    </message>
    <message>
        <source>Failed to open document.</source>
        <comment>python error</comment>
        <translation>Hiba történt a dokumentum megnyitásakor.</translation>
    </message>
    <message>
        <source>Failed to save document.</source>
        <comment>python error</comment>
        <translation>Hiba történt a dolumentum mentésekor.</translation>
    </message>
    <message>
        <source>Argument must be page item name, or PyCObject instance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Property not found</source>
        <translation>Tulajdonság nem található</translation>
    </message>
    <message>
        <source>Child not found</source>
        <translation>Gyermek nem található.</translation>
    </message>
    <message>
        <source>Couldn&apos;t convert result type &apos;%1&apos;.</source>
        <translation>&apos;%1&apos; típusú eredmény nem konvertálható át.</translation>
    </message>
    <message>
        <source>Property type &apos;%1&apos; not supported</source>
        <translation>%1 típusú tulajdonság nem támogatott</translation>
    </message>
    <message>
        <source>Couldn&apos;t convert &apos;%1&apos; to property type &apos;%2&apos;</source>
        <translation>Nem konvertálható át a &apos;%1&apos; a &apos;%2&apos; típusba</translation>
    </message>
    <message>
        <source>Types matched, but setting property failed.</source>
        <translation>Típusok egyeznek, de a tulajdonság beállításakor hiba történt.</translation>
    </message>
    <message>
        <source>Unable to save pixmap</source>
        <comment>scripter error</comment>
        <translation>Pixmap nem menthető</translation>
    </message>
    <message>
        <source>An object with the requested name already exists.</source>
        <comment>python error</comment>
        <translation>A kért nevű objektum már létezik.</translation>
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
        <translation>Objektum nem található.</translation>
    </message>
    <message>
        <source>Style not found.</source>
        <comment>python error</comment>
        <translation>Stílus nem található.</translation>
    </message>
    <message>
        <source>Cannot set style on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Nem állítható be stílus egy nem szöveg kereten.</translation>
    </message>
    <message>
        <source>Failed to save EPS.</source>
        <comment>python error</comment>
        <translation>Hiba történt az EPS mentésekor.</translation>
    </message>
    <message>
        <source>Page number out of range.</source>
        <comment>python error</comment>
        <translation>Oldalszám kívül esik a tartományon.</translation>
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
        <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12.</source>
        <comment>python error</comment>
        <translation>Vonal szélességnek 0 és 12 közé kell esnie.</translation>
    </message>
    <message>
        <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
        <comment>python error</comment>
        <translation>Vonal árnyékolásnak 0 és 100 közé kell esnie.</translation>
    </message>
    <message>
        <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line style not found.</source>
        <comment>python error</comment>
        <translation>Vonal stílus nem található.</translation>
    </message>
    <message>
        <source>Object is not a linked text frame, can&apos;t unlink.</source>
        <comment>python error</comment>
        <translation>Az objektum nem egy kapcsolt szöveg keret, így a kapcsolat nem bontható.</translation>
    </message>
    <message>
        <source>Object the last frame in a series, can&apos;t unlink. Unlink the previous frame instead.</source>
        <comment>python error</comment>
        <translation>Az objektum az utolsó keret a sorozatban, kapcsolat nem bontható. Ehelyett az előző keret kapcsolatát bontsa.</translation>
    </message>
    <message>
        <source>Only text frames can be checked for overflowing</source>
        <comment>python error</comment>
        <translation>Csak a szöveg keretek ellenőrizhetők túlcsordulásra</translation>
    </message>
    <message>
        <source>&amp;Execute Script...</source>
        <translation>&amp;Szkript végrehajtása</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation>&amp;Konzol mutatása</translation>
    </message>
    <message>
        <source>&amp;About Script...</source>
        <translation>Szkript névjegye...</translation>
    </message>
    <message>
        <source>&amp;Script</source>
        <translation>&amp;Szkript</translation>
    </message>
    <message>
        <source>&amp;Scribus Scripts</source>
        <translation>&amp;Scribus szkriptek</translation>
    </message>
    <message>
        <source>&amp;Recent Scripts</source>
        <translation>&amp;Legutóbbi szkriptek</translation>
    </message>
    <message>
        <source>About Script</source>
        <translation>Szkript névjegye</translation>
    </message>
    <message>
        <source>Croatian</source>
        <translation>Horvát</translation>
    </message>
    <message>
        <source>Portuguese</source>
        <translation>Portugál</translation>
    </message>
    <message>
        <source>Portuguese (BR)</source>
        <translation>Portugál (BR)</translation>
    </message>
    <message>
        <source>Scribus Crash</source>
        <translation>Scribus összeomlott</translation>
    </message>
    <message>
        <source>Scribus crashes due to Signal #%1</source>
        <translation>A Scribus összeomlott a #%1 Szignál miatt</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Rendben</translation>
    </message>
    <message>
        <source>Master Page </source>
        <translation>Mester oldal </translation>
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
        <translation>%1 kimeneti fálj nem nyitható meg</translation>
    </message>
    <message>
        <source>Output stream not writeable</source>
        <translation>A kimeneti sztrim nem írható</translation>
    </message>
    <message>
        <source>Verification of settings failed: %1</source>
        <translation>Beállítások ellenőrzése hibát jelzett: %1</translation>
    </message>
    <message>
        <source>Could not open input file %1</source>
        <translation>%1 bemeneti fájl nem nyitható meg</translation>
    </message>
    <message>
        <source>Unable to read settings XML:</source>
        <translation>Nem lehet az XML beállításokat olvasni:</translation>
    </message>
    <message>
        <source>%1 (line %2 col %3)</source>
        <comment>Load PDF settings</comment>
        <translation>%1 (%2 sor, %3 oszlop)</translation>
    </message>
    <message>
        <source>Unable to read settings XML: %1</source>
        <translation>Nem lehet az XML beállításokat olvasni: %1</translation>
    </message>
    <message>
        <source>null root node</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;pdfVersion&gt; invalid</source>
        <comment>Load PDF settings</comment>
        <translation>&lt;pdfVersion&gt; érvénytelen</translation>
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
        <translation>&lt;%1&gt; elem értéke &apos;igaz&apos; vagy &apos;hamis&apos; lehet</translation>
    </message>
    <message>
        <source>element &lt;lpiSettingsEntry&gt; lacks `name&apos; attribute</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Freetype2 library not available</source>
        <translation>Freetype2 könyvtár nem elérhető</translation>
    </message>
    <message>
        <source>Font %1 is broken (read stream), no embedding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font %1 has broken glyph %2 (charcode %3)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font %1 cannot be read, no embedding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to load font %1 - font type unknown</source>
        <translation>Hiba történt a %1 betűtípus betöltésekor - betűtípus ismeretlen</translation>
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
        <translation>%1 betűtípus betöltése (fontconfig szerint)</translation>
    </message>
    <message>
        <source>Failed to load a font - freetype2 couldn&apos;t find the font file</source>
        <translation>Hiba történt a betűtípus betöltésekor - freetype2 nem található a betűtípus fájl</translation>
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
        <translation>&apos;%1&apos; táblázat</translation>
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
        <source> cm</source>
        <translation>cm</translation>
    </message>
    <message>
        <source> c</source>
        <translation>c</translation>
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
        <source>Millimeters (mm)</source>
        <translation>Milliméter (mm)</translation>
    </message>
    <message>
        <source>Centimeters (cm)</source>
        <translation>Centiméter (cm)</translation>
    </message>
    <message>
        <source>Cicero (c)</source>
        <translation>Ciceró (c)</translation>
    </message>
    <message>
        <source>page</source>
        <comment>page export</comment>
        <translation>oldal</translation>
    </message>
    <message>
        <source>Document Template: </source>
        <translation>Dokumentum sablon: </translation>
    </message>
    <message>
        <source>Color not found.</source>
        <comment>python error</comment>
        <translation>A szín nem található.</translation>
    </message>
    <message>
        <source>Color not found in document.</source>
        <comment>python error</comment>
        <translation>A szín nem található a dokumentumban.</translation>
    </message>
    <message>
        <source>Color not found in default colors.</source>
        <comment>python error</comment>
        <translation>A szín nem található az alapértelmezett színek között.</translation>
    </message>
    <message>
        <source>Cannot group less than two items</source>
        <comment>python error</comment>
        <translation>Kettőnél kevesebb elemet nem csoportosíthat</translation>
    </message>
    <message>
        <source>Can&apos;t group less than two items</source>
        <comment>python error</comment>
        <translation>Kettőnél kevesebb elemet nem csoportosíthat</translation>
    </message>
    <message>
        <source>Need selection or argument list of items to group</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t set bookmark on a non-text frame</source>
        <comment>python error</comment>
        <translation>Nem állítható be könyvjelző egy nem szöveg keretben.</translation>
    </message>
    <message>
        <source>Can&apos;t get info from a non-text frame</source>
        <comment>python error</comment>
        <translation>Nem kapható információ egy nem szöveg keretről.</translation>
    </message>
    <message>
        <source>The filename should not be empty string.</source>
        <comment>python error</comment>
        <translation>A fájlnév nem lehet üres karakter sorozat.</translation>
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
        <source>OpenDocument Text Documents</source>
        <translation>OpenDocument szöveg dokumentumok</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished">#%1 másolata</translation>
    </message>
    <message>
        <source>Black</source>
        <translation>Fekete</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation>Kékeszöld</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation>Bíborvörös</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation>Sárga</translation>
    </message>
    <message>
        <source>Color Wheel</source>
        <translation>Színkerék</translation>
    </message>
    <message>
        <source>Font Preview</source>
        <translation>Betűtípus előnézet</translation>
    </message>
    <message>
        <source>My Plugin</source>
        <translation>Beépülő moduljaim</translation>
    </message>
    <message>
        <source>New From Template</source>
        <translation>Új sablonból</translation>
    </message>
    <message>
        <source>Export As Image</source>
        <translation type="obsolete">Exportálás képként</translation>
    </message>
    <message>
        <source>PS/EPS Importer</source>
        <translation>PS/EPS importáló</translation>
    </message>
    <message>
        <source>Save As Template</source>
        <translation>Mentés sablonként</translation>
    </message>
    <message>
        <source>Scripter</source>
        <translation>Szkripter</translation>
    </message>
    <message>
        <source>Short Words</source>
        <translation>Rövid szavak</translation>
    </message>
    <message>
        <source>SVG Export</source>
        <translation>SVG exportálás</translation>
    </message>
    <message>
        <source>SVG Import</source>
        <translation>SVG importálás</translation>
    </message>
    <message>
        <source>OpenOffice.org Draw Importer</source>
        <translation>OpenOffice.org Rajz importáló</translation>
    </message>
    <message>
        <source>German (Trad.)</source>
        <translation>Német (tradícionális)</translation>
    </message>
    <message>
        <source>Scribus crashes due to the following exception : %1</source>
        <translation>A Scribus összeomlott a következő kivétel miatt: %1</translation>
    </message>
    <message>
        <source>Exporting PostScript File</source>
        <translation>PostScript fájl exportálása</translation>
    </message>
    <message>
        <source>Printing File</source>
        <translation>Fájl nyomtatása</translation>
    </message>
    <message>
        <source>Creating Font Cache</source>
        <translation>Betű gyorstár létrehozása</translation>
    </message>
    <message>
        <source>New Font found, checking...</source>
        <translation>Új betűtípust találtam, ellenőrzöm...</translation>
    </message>
    <message>
        <source>Modified Font found, checking...</source>
        <translation>Megváltozott betűtípust találtam, ellenőrzöm...</translation>
    </message>
    <message>
        <source>Reading Font Cache</source>
        <translation>Betűtípus gyorstár olvasása</translation>
    </message>
    <message>
        <source>Writing updated Font Cache</source>
        <translation>Frissített betűtípus gyorstár írása</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation>Betűtípusok keresése</translation>
    </message>
    <message>
        <source>&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;reate</source>
        <translation>&amp;Létrehozás</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importálás</translation>
    </message>
    <message>
        <source>The changes to your document have not been saved and you have requested to revert them. Do you wish to continue?</source>
        <translation>A dokumentum változásai nem mentődtek el és vissza akarja vonni. Folytatni akarja?</translation>
    </message>
    <message>
        <source>A file named &apos;%1&apos; already exists.&lt;br/&gt;Do you want to replace it with the file you are saving?</source>
        <translation>&apos;%1&apos; fájlé név már létezik. &lt;br&gt;Felül akarja írni a most mentendő fájllal?</translation>
    </message>
    <message>
        <source>firstPageOrder is bigger than allowed.</source>
        <comment>python error</comment>
        <translation>fisrtPageOrder nagyobb a megengedettnél.</translation>
    </message>
    <message>
        <source>Old .sla format support</source>
        <translation>Régi .sla formátum támogatás</translation>
    </message>
    <message>
        <source>Thai</source>
        <translation>Taiföld</translation>
    </message>
    <message>
        <source>Barcode Generator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OpenOffice.org Draw (*.sxd *.odg);;All Files (*)</source>
        <translation>OpenOffice.org Rajz (*.sxd *.odg);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>Word Documents</source>
        <translation>Word dokumentum</translation>
    </message>
    <message>
        <source>Palm PDB Documents</source>
        <comment>PDB Importer</comment>
        <translation>Palm PDB dokumentumok</translation>
    </message>
    <message>
        <source>PDB_data</source>
        <comment>PDB Importer</comment>
        <translation>PDB_adat</translation>
    </message>
    <message>
        <source>PDB Import</source>
        <comment>PDB Importer</comment>
        <translation>PDB importálás</translation>
    </message>
    <message>
        <source>Could not open file %1</source>
        <comment>PDB Importer</comment>
        <translation>%1 fájl nem nyitható meg</translation>
    </message>
    <message>
        <source>This file is not recognized as a PDB document propably. Please, report this as a bug if you are sure it is one.</source>
        <comment>PDB Importer</comment>
        <translation type="obsolete">Ez a fájl valószínűleg nem PDB dokumentum. Kérem küldje el a hibajelentést, ha biztos, hogy ez a fájl az.</translation>
    </message>
    <message>
        <source>Luxembourgish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arabic</source>
        <translation type="unfinished">Arab</translation>
    </message>
    <message>
        <source>Dzongkha</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Estonian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Japanese</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font %1(%2) is broken</source>
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
        <source>-tracking </source>
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
        <source>Given master page name does not match any existing.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font %1 is broken (no Face), discarding it</source>
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
        <source>Norwegian (Bokm&#xc3;&#xa5;l)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Romanian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quarto</source>
        <translation type="unfinished">Kvartó</translation>
    </message>
    <message>
        <source>Foolscap</source>
        <translation type="unfinished">Írópapír (43*34 cm)</translation>
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
        <translation type="unfinished">Végrehajtó</translation>
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
        <translation type="unfinished">Közepes</translation>
    </message>
    <message>
        <source>Royal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Elephant</source>
        <translation type="unfinished">Elefánt</translation>
    </message>
    <message>
        <source>Double Demy</source>
        <translation type="unfinished">Kettős papíralak</translation>
    </message>
    <message>
        <source>Quad Demy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>STMT</source>
        <translation type="unfinished">STMT</translation>
    </message>
    <message>
        <source>A</source>
        <translation type="unfinished">A</translation>
    </message>
    <message>
        <source>B</source>
        <translation type="unfinished">B</translation>
    </message>
    <message>
        <source>C</source>
        <translation type="unfinished">C</translation>
    </message>
    <message>
        <source>D</source>
        <translation type="unfinished">D</translation>
    </message>
    <message>
        <source>E</source>
        <translation type="unfinished">E</translation>
    </message>
    <message>
        <source>%1 may be corrupted : missing resolution tags</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font %1 has broken glyph %2</source>
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
        <source>Scribus 1.2.x Support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus 1.3.4 Support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This file is not recognized as a PDB document. Please, report this as a bug if you are sure it is one.</source>
        <comment>PDB Importer</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get number of lines of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You are running a development version of Scribus 1.3.x. The document you are working with was created in Scribus 1.2.x.  Saving the current file under 1.3.x renders it unable to be edited in Scribus 1.2.x versions. To preserve the ability to edit in 1.2.x, save this file under a different name and further edit the newly named file and the original will be untouched. Are you sure you wish to proceed with this operation?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>+tracking %1 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>+baseline %1 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Breton</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>English (American)</source>
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
        <translation type="unfinished">Héber</translation>
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
        <translation>Törlés</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>Minden kijelölése</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Visszavonás</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Újra végrehajtás</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>&amp;Kivágás</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Másolás</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Beillesztés</translation>
    </message>
</context>
<context>
    <name>QTitleBar</name>
    <message>
        <source>System Menu</source>
        <translation>Rendszermenü</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Árnyalat</translation>
    </message>
    <message>
        <source>Unshade</source>
        <translation>Árnyékolatlan</translation>
    </message>
    <message>
        <source>Normalize</source>
        <translation>Normalizálás</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>Minimalizálás</translation>
    </message>
    <message>
        <source>Maximize</source>
        <translation>Maximalizálás</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Bezárás</translation>
    </message>
</context>
<context>
    <name>QWorkspace</name>
    <message>
        <source>&amp;Restore</source>
        <translation>Hely&amp;reállítás</translation>
    </message>
    <message>
        <source>&amp;Move</source>
        <translation>&amp;Mozgatás</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;Méret</translation>
    </message>
    <message>
        <source>Mi&amp;nimize</source>
        <translation>Mi&amp;nimalizálás</translation>
    </message>
    <message>
        <source>Ma&amp;ximize</source>
        <translation>Ma&amp;ximalizálás</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>Be&amp;zárás</translation>
    </message>
    <message>
        <source>Stay on &amp;Top</source>
        <translation>&amp;Mindig felül</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>Minimalizálás</translation>
    </message>
    <message>
        <source>Restore Down</source>
        <translation>Legörgetés</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Bezárás</translation>
    </message>
    <message>
        <source>Sh&amp;ade</source>
        <translation>&amp;Árnyalat</translation>
    </message>
    <message>
        <source>%1 - [%2]</source>
        <translation>%1 - [%2]</translation>
    </message>
    <message>
        <source>&amp;Unshade</source>
        <translation>&amp;Árnyékolatlan</translation>
    </message>
</context>
<context>
    <name>ReformDoc</name>
    <message>
        <source>Document Setup</source>
        <translation>Dokumentumbeállítások</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="obsolete">Margók</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="obsolete">&amp;Felső:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="obsolete">&amp;Bal:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="obsolete">&amp;Alsó:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="obsolete">&amp;Jobb:</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="obsolete">Oldal méret</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="obsolete">Egyedi</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="obsolete">Álló</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="obsolete">Fekvő</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="obsolete">&amp;Méret:</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="obsolete">&amp;Orientáció:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="obsolete">&amp;Szélesség:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="obsolete">&amp;Magasság:</translation>
    </message>
    <message>
        <source>&amp;Unit:</source>
        <translation type="obsolete">&amp;Egység:</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation type="obsolete">Automatikus mentés</translation>
    </message>
    <message>
        <source>min</source>
        <translation type="obsolete">perc</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation type="obsolete">&amp;Intervallum:</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Dokumentum</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation>Segédvonalak</translation>
    </message>
    <message>
        <source>Page Display</source>
        <translation type="obsolete">Oldal megjelenítése</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="obsolete">Szín:</translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation type="obsolete">Alt+U</translation>
    </message>
    <message>
        <source>Show Pictures</source>
        <translation type="obsolete">Képek mutatása</translation>
    </message>
    <message>
        <source>Show Text Chains</source>
        <translation type="obsolete">Szöveg láncok mutatása</translation>
    </message>
    <message>
        <source>Show Frames</source>
        <translation type="obsolete">Keretek mutatása</translation>
    </message>
    <message>
        <source>Display</source>
        <translation>Kijelző</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation>Tipográfia</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation>Eszközök</translation>
    </message>
    <message>
        <source>Hyphenator</source>
        <translation>Elválasztó</translation>
    </message>
    <message>
        <source>Fonts</source>
        <translation>Betűtípusok</translation>
    </message>
    <message>
        <source>PDF Export</source>
        <translation>PDF exportálás</translation>
    </message>
    <message>
        <source>Color Management</source>
        <translation>Szín kezelés</translation>
    </message>
    <message>
        <source>Turns the display of frames on or off</source>
        <translation type="obsolete">Keretek megjelenítésének be- és kikapcsolása</translation>
    </message>
    <message>
        <source>Turns the display of pictures on or off</source>
        <translation type="obsolete">Képek megjelenítésének be- és kikapcsolása</translation>
    </message>
    <message>
        <source>Color for paper</source>
        <translation type="obsolete">Lap színe</translation>
    </message>
    <message>
        <source>Document Information</source>
        <translation>Dokumentum információ</translation>
    </message>
    <message>
        <source>Show Text Control Characters</source>
        <translation type="obsolete">Szöveg vezérlő karakterek mutatása</translation>
    </message>
    <message>
        <source>Gaps between Pages</source>
        <translation type="obsolete">Oldalak közötti hézag</translation>
    </message>
    <message>
        <source>Horizontal:</source>
        <translation type="obsolete">Vízszintes:</translation>
    </message>
    <message>
        <source>Vertical:</source>
        <translation type="obsolete">Függőleges:</translation>
    </message>
    <message>
        <source>Preflight Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document Item Attributes</source>
        <translation>Dokumentum elem jellemzők</translation>
    </message>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation>Tartalomjegyzék és indexek</translation>
    </message>
    <message>
        <source>Display non-printing characters such as paragraph markers in text frames</source>
        <translation type="obsolete">Nem nyomtatandó karakterek, mint bekezdés jelölés, mutatása a szöveg keretben</translation>
    </message>
    <message>
        <source>Adjusting Colors</source>
        <translation>A színek módosítása</translation>
    </message>
    <message>
        <source>Enable or disable the display of linked text frames.</source>
        <translation type="obsolete">Összekapcsolt szöveg keret mutatásának engedélyezése, tiltása</translation>
    </message>
    <message>
        <source>Apply size settings to all pages</source>
        <translation type="obsolete">Méret beállítások alkalamzása az összes oldalra</translation>
    </message>
    <message>
        <source>Sections</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply the page size changes to all existing pages in the document</source>
        <translation type="obsolete">Oldal méret változások alkalmazása a dokumentum összes létező oldalán</translation>
    </message>
</context>
<context>
    <name>RunScriptDialog</name>
    <message>
        <source>Python Scripts (*.py);; All Files (*)</source>
        <translation type="obsolete">Python szkript (*.py);; Minden fájl (*)</translation>
    </message>
    <message>
        <source>Run as Extension Script</source>
        <comment>run script dialog</comment>
        <translation>Bővítő szkript futtatása</translation>
    </message>
    <message>
        <source>Python Scripts (*.py *.PY);; All Files (*)</source>
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
        <translation>Stílus kezelő</translation>
    </message>
    <message>
        <source>Column 1</source>
        <translation type="obsolete">1 oszlop</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="obsolete">&amp;Hozzáadás</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>C&amp;lone</source>
        <translation type="obsolete">&amp;Klón</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="obsolete">Alt+L</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Név:</translation>
    </message>
    <message>
        <source>O&amp;K</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>Alt+K</source>
        <translation type="obsolete">Alt+K</translation>
    </message>
    <message>
        <source>A&amp;pply</source>
        <translation type="obsolete">&amp;Alkalmaz</translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation type="obsolete">Alt+P</translation>
    </message>
    <message>
        <source>Ca&amp;ncel</source>
        <translation type="obsolete">&amp;Mégsem</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation>Alt+N</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation type="unfinished">&amp;Alkalmazás</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished">&amp;Új</translation>
    </message>
    <message>
        <source>&amp;Clone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished">&amp;Importálás</translation>
    </message>
    <message>
        <source>Alt+I</source>
        <translation type="unfinished">Alt+I</translation>
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
        <source>&amp;Reset</source>
        <translation type="unfinished">&amp;Alaphelyzetbe állítás</translation>
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
        <translation type="unfinished">pt</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished">%</translation>
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
        <translation type="unfinished">Árnyalat</translation>
    </message>
</context>
<context>
    <name>SMCharacterStyle</name>
    <message>
        <source>Properties</source>
        <translation type="unfinished">Tulajdonságok</translation>
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
        <translation type="unfinished">Új stílus</translation>
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
        <translation>Tulajdonságok</translation>
    </message>
    <message>
        <source>Lines</source>
        <translation type="obsolete">Vonalak</translation>
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
        <translation type="unfinished">Új stílus</translation>
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
        <translation type="unfinished">pt</translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation type="unfinished">Folytonos vonal</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation type="unfinished">Szaggatott vonal</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation type="unfinished">Pontozott vonal</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation type="unfinished">Tá-ti vonal</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation type="unfinished">Tá-ti-ti vonal</translation>
    </message>
    <message>
        <source> pt </source>
        <translation type="unfinished">pt</translation>
    </message>
</context>
<context>
    <name>SMPStyleWidget</name>
    <message>
        <source>Fixed Linespacing</source>
        <translation type="unfinished">Rögzített sortávolság</translation>
    </message>
    <message>
        <source>Automatic Linespacing</source>
        <translation type="unfinished">Automatikus vonaltávolság</translation>
    </message>
    <message>
        <source>Align to Baseline Grid</source>
        <translation type="unfinished">Igazítás alaprácshoz</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished">pt</translation>
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
        <translation type="unfinished">Tabulátorok és rovátkolás</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation type="unfinished">Tulajdonságok</translation>
    </message>
    <message>
        <source>Character Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Lines:</source>
        <translation type="unfinished">&amp;Vonalak:</translation>
    </message>
    <message>
        <source>Distance from Text:</source>
        <translation type="unfinished">Távolság a szövegtől:</translation>
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
        <translation type="unfinished">Bekezdés stílusa</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation type="unfinished">Új stílus</translation>
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
        <translation type="unfinished">Eltávolítás</translation>
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
        <translation type="unfinished">&amp;Rendben</translation>
    </message>
    <message>
        <source>Ca&amp;ncel</source>
        <translation type="unfinished">&amp;Mégsem</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation type="unfinished">Alt+N</translation>
    </message>
</context>
<context>
    <name>SMRowWidget</name>
    <message>
        <source>No Style</source>
        <translation type="unfinished">Nincs stílus megadva</translation>
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
        <translation>Stílus beállítások</translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation>Jelenlegi bekezdés stílusa</translation>
    </message>
</context>
<context>
    <name>SToolBColorF</name>
    <message>
        <source>Fill Color Settings</source>
        <translation>Kitöltő szín beállítások</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Szöveg kitöltő színe</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation>Szöveg kitöltő szín telítettsége</translation>
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
        <translation>Betűtípus beállítások</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Font of selected text</source>
        <translation>A kijelölt szöveg betűtípusa</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Betűméret</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation>Karakter szélesség skálázása</translation>
    </message>
    <message>
        <source>Scaling height of characters</source>
        <translation>Karakter magasság skálázása</translation>
    </message>
</context>
<context>
    <name>SToolBStyle</name>
    <message>
        <source>Character Settings</source>
        <translation>Karakter beállítások</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation>Kézi követés</translation>
    </message>
</context>
<context>
    <name>SVGExportPlugin</name>
    <message>
        <source>Save Page as &amp;SVG...</source>
        <translation type="obsolete">&amp;Oldal mentése SVG-ként...</translation>
    </message>
    <message>
        <source>Exports SVG Files</source>
        <translation>SVG fájlok exportálása</translation>
    </message>
    <message>
        <source>Exports the current page into an SVG file.</source>
        <translation>A jelenlegi oldal exportálása SVG fájlba.</translation>
    </message>
    <message>
        <source>Save as &amp;SVG...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SVGImportPlugin</name>
    <message>
        <source>Import &amp;SVG...</source>
        <translation>&amp;SVG importálása...</translation>
    </message>
    <message>
        <source>Imports SVG Files</source>
        <translation>SVG fájl importálása</translation>
    </message>
    <message>
        <source>Imports most SVG files into the current document,
converting their vector data into Scribus objects.</source>
        <translation>A legtöbb SVG fájl importálása a jelenlegi dokumentumba, vektor adatok konvertálása a Scribus objektumokba.</translation>
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
        <comment>

short words plugin</comment>
        <translation type="obsolete">Rövid szavak</translation>
    </message>
    <message>
        <source>Apply unbreakable space on:</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Selected frames</source>
        <comment>

short words plugin</comment>
        <translation type="obsolete">&amp;Kiválaszott keretek</translation>
    </message>
    <message>
        <source>Active &amp;page</source>
        <comment>

short words plugin</comment>
        <translation type="obsolete">Aktív &amp;oldal</translation>
    </message>
    <message>
        <source>&amp;All items</source>
        <comment>

short words plugin</comment>
        <translation type="obsolete">&amp;Minden elem</translation>
    </message>
    <message>
        <source>Only selected frames processed.</source>
        <comment>

short words plugin</comment>
        <translation type="obsolete">Csak a kijelölt kereteket dolgozta fel.</translation>
    </message>
    <message>
        <source>Only actual page processed.</source>
        <comment>

short words plugin</comment>
        <translation type="obsolete">Csak az aktuális oldalt dolgozta fel.</translation>
    </message>
    <message>
        <source>All items in document processed.</source>
        <comment>

short words plugin</comment>
        <translation type="obsolete">A dokumentum minden eleme feldolgozva.</translation>
    </message>
    <message>
        <source>Short Words</source>
        <comment>short words plugin</comment>
        <translation type="unfinished">Rövid szavak</translation>
    </message>
    <message>
        <source>&amp;Selected frames</source>
        <comment>short words plugin</comment>
        <translation type="unfinished">&amp;Kiválaszott keretek</translation>
    </message>
    <message>
        <source>Active &amp;page</source>
        <comment>short words plugin</comment>
        <translation type="unfinished">Aktív &amp;oldal</translation>
    </message>
    <message>
        <source>&amp;All items</source>
        <comment>short words plugin</comment>
        <translation type="unfinished">&amp;Minden elem</translation>
    </message>
    <message>
        <source>Only selected frames processed.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished">Csak a kijelölt kereteket dolgozta fel.</translation>
    </message>
    <message>
        <source>Only actual page processed.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished">Csak az aktuális oldalt dolgozta fel.</translation>
    </message>
    <message>
        <source>All items in document processed.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished">A dokumentum minden eleme feldolgozva.</translation>
    </message>
</context>
<context>
    <name>SWPrefsGui</name>
    <message>
        <source>User settings</source>
        <translation>Felhasználói beállítások</translation>
    </message>
    <message>
        <source>System wide configuration</source>
        <translation>Rendszer szintű konfiguráció</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Mentés</translation>
    </message>
    <message>
        <source>&amp;Reset</source>
        <translation>&amp;Alaphelyzetbe állítás</translation>
    </message>
    <message>
        <source>Save user configuration</source>
        <translation>Felhasználói konfiguráció mentése</translation>
    </message>
    <message>
        <source>Reload system wide configuration and remove user defined one</source>
        <translation>Rendszer szintű konfiguráció újratöltése és a felhasználói beállítások eltávolítása</translation>
    </message>
    <message>
        <source>Edit custom configuration. If you save it, it will be used over system wide configuration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Short Words</source>
        <translation>Rövid szavak</translation>
    </message>
    <message>
        <source>User configuration exists elready. Do you really want to overwrite it?</source>
        <translation>Felhasználói beállítások már léteznek. Tényleg felül akarja írni?</translation>
    </message>
    <message>
        <source>Cannot write file %1.</source>
        <translation>%1 fájl nem írható.</translation>
    </message>
    <message>
        <source>User settings saved</source>
        <translation>Felhasználói beállítások mentve</translation>
    </message>
    <message>
        <source>System wide configuration reloaded</source>
        <translation>Rendszer szintű konfiguráció újratöltve</translation>
    </message>
    <message>
        <source>Cannot open file %1</source>
        <translation>%1 fájl nem nyitható meg</translation>
    </message>
</context>
<context>
    <name>SaveAsTemplatePlugin</name>
    <message>
        <source>Save as &amp;Template...</source>
        <translation>Mentés sablonként...</translation>
    </message>
    <message>
        <source>Save a document as a template</source>
        <translation>Dokumentum mentése sablonként</translation>
    </message>
    <message>
        <source>Save a document as a template. Good way to ease the initial work for documents with a constant look</source>
        <translation>Dokumentum mentése sablonként. Ez egy jó módszer az állandó kinézetű dokumentumok kezdeti beállításainak megkönnyítésére.</translation>
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
        <translation type="unfinished">&amp;Rendben</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">&amp;Mégsem</translation>
    </message>
</context>
<context>
    <name>ScPlugin</name>
    <message>
        <source>Persistent</source>
        <comment>plugin manager plugin type</comment>
        <translation>Állandó</translation>
    </message>
    <message>
        <source>Action</source>
        <comment>plugin manager plugin type</comment>
        <translation>Művelet</translation>
    </message>
    <message>
        <source>Load/Save/Import/Export</source>
        <translation>Betöltés/Mentés/Importálás/Exportálás</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Ismeretlen</translation>
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
        <translation>Felső</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Jobbra</translation>
    </message>
    <message>
        <source>Bottom</source>
        <translation>Alsó</translation>
    </message>
    <message>
        <source>Left</source>
        <translation>Bal</translation>
    </message>
    <message>
        <source>Allow Docking To...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation>Vízszintes</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation>Függőleges</translation>
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
        <translation>Nyomtatás...</translation>
    </message>
</context>
<context>
    <name>ScriXmlDoc</name>
    <message>
        <source>Copy #%1 of </source>
        <translation type="obsolete">#%1 másolata</translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="obsolete">Háttér</translation>
    </message>
</context>
<context>
    <name>Scribus12Format</name>
    <message>
        <source>Scribus 1.2.x Document</source>
        <translation type="unfinished">Scribus 1.2.x dokumentum</translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="unfinished">Háttér</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished">#%1 másolata</translation>
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
        <translation type="unfinished">#%1 másolata</translation>
    </message>
</context>
<context>
    <name>Scribus13Format</name>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished">#%1 másolata</translation>
    </message>
    <message>
        <source>Scribus 1.3.0-&gt;1.3.3.7 Document</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusColorList</name>
    <message>
        <source>Document Colors</source>
        <translation type="obsolete">Dokumentum színei</translation>
    </message>
</context>
<context>
    <name>ScribusCore</name>
    <message>
        <source>Initializing Plugins</source>
        <translation type="unfinished">Beépülő modulok inicializálása</translation>
    </message>
    <message>
        <source>Initializing Keyboard Shortcuts</source>
        <translation type="unfinished">Gyors billentyűk inicializálása</translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation type="unfinished">Alapbeállítások beolvasása</translation>
    </message>
    <message>
        <source>Reading ICC Profiles</source>
        <translation type="unfinished">ICC profilok olvasása</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation type="unfinished">Betűtípusok keresése</translation>
    </message>
    <message>
        <source>There are no fonts found on your system.</source>
        <translation type="unfinished">A rendszerében nem található semmilyen betűtípus.</translation>
    </message>
    <message>
        <source>Exiting now.</source>
        <translation type="unfinished">Kilépés most.</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation type="unfinished">Végzetes hiba</translation>
    </message>
    <message>
        <source>Font System Initialized</source>
        <translation type="unfinished">Betűtípus rendszer inicializálva</translation>
    </message>
</context>
<context>
    <name>ScribusDoc</name>
    <message>
        <source>New Layer</source>
        <translation>Új réteg</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normál</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Dokumentum</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Háttér</translation>
    </message>
    <message>
        <source>Do you really want to clear all your text?</source>
        <translation>Tényleg törölni akarja a teljes szöveget?</translation>
    </message>
    <message>
        <source>Cannot Delete In-Use Item</source>
        <translation>Nem törölhető a használatban lévő elem.</translation>
    </message>
    <message>
        <source>The item %1 is currently being edited by Story Editor. The delete operation will be cancelled</source>
        <translation>%1 elem jelenleg a szövegszerkesztőben változtatható. A törlés megszakítva.</translation>
    </message>
    <message>
        <source>Some objects are locked.</source>
        <translation type="unfinished">Néhány objektum zárolt.</translation>
    </message>
    <message>
        <source>&amp;Unlock All</source>
        <translation type="unfinished">&amp;Minden zárolás feloldása</translation>
    </message>
    <message>
        <source>&amp;Skip locked objects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An error occurred while opening ICC profiles, color management is not enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of copies: %1
Horizontal shift: %2
Vertical shift: %3</source>
        <translation type="unfinished">Másolatok száma: %1 
Vízszintes eltolás: %2 
Függőleges eltolás :%3</translation>
    </message>
    <message>
        <source>Number of copies: %1
Horizontal gap: %2
Vertical gap: %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Adjusting Colors</source>
        <translation type="unfinished">A színek módosítása</translation>
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
        <source>Initializing Plugins</source>
        <translation type="obsolete">Beépülő modulok inicializálása</translation>
    </message>
    <message>
        <source>Initializing Keyboard Shortcuts</source>
        <translation type="obsolete">Gyors billentyűk inicializálása</translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation type="obsolete">Alapbeállítások beolvasása</translation>
    </message>
    <message>
        <source>Initializing Story Editor</source>
        <translation>Szövegszerkesztő inicializálása</translation>
    </message>
    <message>
        <source>Reading ICC Profiles</source>
        <translation type="obsolete">ICC profilok olvasása</translation>
    </message>
    <message>
        <source>Initializing Hyphenator</source>
        <translation>Elválasztás inicializálása</translation>
    </message>
    <message>
        <source>Reading Scrapbook</source>
        <translation>Vágólap olvasása</translation>
    </message>
    <message>
        <source>Setting up Shortcuts</source>
        <translation>Gyorsgombok beállítása</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Fájl</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>Szerkesztés</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation type="obsolete">Betűtípusok keresése</translation>
    </message>
    <message>
        <source>There are no fonts found on your system.</source>
        <translation type="obsolete">A rendszerében nem található semmilyen betűtípus.</translation>
    </message>
    <message>
        <source>Exiting now.</source>
        <translation type="obsolete">Kilépés most.</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation>Végzetes hiba</translation>
    </message>
    <message>
        <source>Font System Initialized</source>
        <translation type="obsolete">Betűtípus rendszer inicializálva</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Fájl</translation>
    </message>
    <message>
        <source>Open &amp;Recent</source>
        <translation>&amp;Legutóbbi megnyitása</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importálás</translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation>&amp;Exportálás</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Szerkesztés</translation>
    </message>
    <message>
        <source>St&amp;yle</source>
        <translation>&amp;Stílus</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation>&amp;Szín</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;Méret</translation>
    </message>
    <message>
        <source>&amp;Shade</source>
        <translation>&amp;Árnyalat</translation>
    </message>
    <message>
        <source>&amp;Font</source>
        <translation>&amp;Betűtípus</translation>
    </message>
    <message>
        <source>&amp;Effects</source>
        <translation>&amp;Hatások</translation>
    </message>
    <message>
        <source>&amp;Item</source>
        <translation>&amp;Elem</translation>
    </message>
    <message>
        <source>Preview Settings</source>
        <translation>Előnézet beállítások</translation>
    </message>
    <message>
        <source>Level</source>
        <translation>Szint</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation>&amp;Küldés a rétegre</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation>&amp;PDF beállítások</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>&amp;Alak</translation>
    </message>
    <message>
        <source>C&amp;onvert To</source>
        <translation>&amp;Átalakítás</translation>
    </message>
    <message>
        <source>I&amp;nsert</source>
        <translation>&amp;Beillesztés</translation>
    </message>
    <message>
        <source>Character</source>
        <translation>Karakter</translation>
    </message>
    <message>
        <source>Quote</source>
        <translation>Idézet</translation>
    </message>
    <message>
        <source>Space</source>
        <translation>Távolság</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation>&amp;Oldal</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>&amp;Nézet</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation>&amp;Extrák</translation>
    </message>
    <message>
        <source>&amp;Windows</source>
        <translation>&amp;Ablak</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;Segítség</translation>
    </message>
    <message>
        <source>&amp;Alignment</source>
        <translation>&amp;Igazítás</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation>Kész</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Megnyitás</translation>
    </message>
    <message>
        <source>Importing Pages...</source>
        <translation>Oldalak importálása...</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation>Oldal(ak) importálása</translation>
    </message>
    <message>
        <source>Import done</source>
        <translation>Importálás megtörtént</translation>
    </message>
    <message>
        <source>Found nothing to import</source>
        <translation>Nincs mit importálni</translation>
    </message>
    <message>
        <source>File %1 is not in an acceptable format</source>
        <translation>%1 fájl nem elfogadható formátumú</translation>
    </message>
    <message>
        <source>Loading...</source>
        <translation>Betöltés...</translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation>PostScript</translation>
    </message>
    <message>
        <source>Some ICC profiles used by this document are not installed:</source>
        <translation>A dokumentumban használt néhány ICC profil nincs telepítve:</translation>
    </message>
    <message>
        <source> was replaced by: </source>
        <translation>helyettesítve: </translation>
    </message>
    <message>
        <source>(converted)</source>
        <translation>(konvertált)</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation type="obsolete">Minden támogatott formátum</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation type="obsolete">Minden fájl (*)</translation>
    </message>
    <message>
        <source>Cannot write the file: 
%1</source>
        <translation>Fájl nem írható: %1</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</source>
        <translation type="obsolete">Dokumentumok (*.sla *.sla.gz *.scd *scd.gz);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="obsolete">Dokumentumok (*.sla *.scd);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation>Ment másként</translation>
    </message>
    <message>
        <source>Saving...</source>
        <translation>Mentés...</translation>
    </message>
    <message>
        <source>Scribus has detected some errors. Consider using the Preflight Verifier to correct them</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Ignore</source>
        <translation>&amp;Figyelmen kívül hagyás</translation>
    </message>
    <message>
        <source>&amp;Abort</source>
        <translation>&amp;Megszakítás</translation>
    </message>
    <message>
        <source>Printing...</source>
        <translation>Nyomtatás...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Dokumentum</translation>
    </message>
    <message>
        <source>Printing failed!</source>
        <translation>Sikertelen nyomtatás!</translation>
    </message>
    <message>
        <source>Cannot Cut In-Use Item</source>
        <translation>A használatban lévő elem nem vágható ki.</translation>
    </message>
    <message>
        <source>The item %1 is currently being edited by Story Editor. The cut operation will be cancelled</source>
        <translation>%1 elem jelenleg a szövegszerkesztőben változtatható. A kivágás megszakítva.</translation>
    </message>
    <message>
        <source>About Qt</source>
        <translation>A Qt névjegye</translation>
    </message>
    <message>
        <source>Scribus Manual</source>
        <translation>Scribus kézikönyv</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Ment másként</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Szöveg fájlok (*.txt);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normál</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Név:</translation>
    </message>
    <message>
        <source>Convert Page to Master Page</source>
        <translation>Oldal mester oldallá alakítása</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Méret:</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Méret</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation>&amp;Árnyalat:</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Árnyalat</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation>Nincs stílus megadva</translation>
    </message>
    <message>
        <source>The following programs are missing:</source>
        <translation>A következő programok hiányoznak:</translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS images or Print Preview</source>
        <translation>Ghostscript: EPS képek, illetve nyomtatási kép nem használható</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Minden</translation>
    </message>
    <message>
        <source>Scribus detected some errors.
Consider using the Preflight Verifier  to correct them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>EPS Files (*.eps);;All Files (*)</source>
        <translation>EPS fájlok (*.eps);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>Detected some errors.
Consider using the Preflight Verifier to correct them</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>-Page%1</source>
        <translation>-oldal %1</translation>
    </message>
    <message>
        <source>Some objects are locked.</source>
        <translation>Néhány objektum zárolt.</translation>
    </message>
    <message>
        <source>&amp;Lock All</source>
        <translation>&amp;Minden rögzítése</translation>
    </message>
    <message>
        <source>&amp;Unlock All</source>
        <translation>&amp;Minden zárolás feloldása</translation>
    </message>
    <message>
        <source>Information</source>
        <translation>Információ</translation>
    </message>
    <message>
        <source>The program %1 is already running!</source>
        <translation>%1 program már fut!</translation>
    </message>
    <message>
        <source>The program %1 is missing!</source>
        <translation>%1 program hiányzik!</translation>
    </message>
    <message>
        <source>The selected color does not exist in the document&apos;s color set. Please enter a name for this new color.</source>
        <translation>A kiválasztott szín nem található a dokumentum szín készletében. Kérem adja meg az új szín nevét.</translation>
    </message>
    <message>
        <source>Color Not Found</source>
        <translation>A szín nem található</translation>
    </message>
    <message>
        <source>The name you have selected already exists. Please enter a different name for this new color.</source>
        <translation>A kiválasztott név már létezik. Kérem adjon meg egy másik nevet az új színnek.</translation>
    </message>
    <message>
        <source>&amp;Level</source>
        <translation>&amp;Szint</translation>
    </message>
    <message>
        <source>Send to Layer</source>
        <translation>Küldés a rétegre</translation>
    </message>
    <message>
        <source>Previe&amp;w Settings</source>
        <translation>&amp;Előnézet beállítások</translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation>&amp;Eszközök</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation>X pozíció:</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation>Y pozíció:</translation>
    </message>
    <message>
        <source>New Master Page %1</source>
        <translation>Új %1 mester oldal</translation>
    </message>
    <message>
        <source>Number of copies: %1
Horizontal shift: %2
Vertical shift: %3</source>
        <translation type="obsolete">Másolatok száma: %1 
Vízszintes eltolás: %2 
Függőleges eltolás :%3</translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS images or PostScript Print Preview</source>
        <translation>Ghostscript : Nem használhat EPS képeket vagy PostScript nyomtatás előképet</translation>
    </message>
    <message>
        <source>Ghostscript is missing : Postscript Print Preview is not available</source>
        <translation>Ghostscript hiányzik : Postscript nyomtatás előkép nem elérhető</translation>
    </message>
    <message>
        <source>Do you really want to replace your existing image?</source>
        <translation>Tényleg ki akarja cserélni a létező képet?</translation>
    </message>
    <message>
        <source>Contents</source>
        <translation type="unfinished">Tartalom</translation>
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
        <source>Paste Recent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Updating Pictures</source>
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
        <source>Group%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you really want to clear all your text?</source>
        <translation type="unfinished">Tényleg törölni akarja a teljes szöveget?</translation>
    </message>
</context>
<context>
    <name>ScribusQApp</name>
    <message>
        <source>Invalid argument: </source>
        <translation>Érvénytelen jellemző: </translation>
    </message>
    <message>
        <source>File %1 does not exist, aborting.</source>
        <translation>%1 fájl nem létezik, megszakítva.</translation>
    </message>
    <message>
        <source>Usage: scribus [option ... ] [file]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Options:</source>
        <translation>Beállítások:</translation>
    </message>
    <message>
        <source>Print help (this message) and exit</source>
        <translation>Segítség (ezen üzenet) nyomtatása és kilépés</translation>
    </message>
    <message>
        <source>Uses xx as shortcut for a language, eg `en&apos; or `de&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>List the currently installed interface languages</source>
        <translation>A jelenleg telepített nyelvek listázása</translation>
    </message>
    <message>
        <source>Show information on the console when fonts are being loaded</source>
        <translation>Mutassa az információkat a konzolon a betűtípusok betöltése alaltt</translation>
    </message>
    <message>
        <source>Do not show the splashscreen on startup</source>
        <translation>Ne mutasd az indító képet az induláskor</translation>
    </message>
    <message>
        <source>Output version information and exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use right to left dialog button ordering (eg. Cancel/No/Yes instead of Yes/No/Cancel)</source>
        <translation>Jobbról balra dialógus gomb sorrend használata (pl. Mégesm/Nem/Igen az Igen/Nem/Mégsem helyett)</translation>
    </message>
    <message>
        <source>filename</source>
        <translation>fájlnév</translation>
    </message>
    <message>
        <source>Use filename as path for user given preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Installed interface languages for Scribus are as follows:</source>
        <translation>A Scribus telepített nyelvei a következők:</translation>
    </message>
    <message>
        <source>To override the default language choice:</source>
        <translation>Az alapértlemezett nyelv felülírásához válassza:</translation>
    </message>
    <message>
        <source>scribus -l xx or scribus --lang xx, where xx is the language of choice.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus Version</source>
        <translation>Scribus verzió</translation>
    </message>
    <message>
        <source>Scribus, Open Source Desktop Publishing</source>
        <translation>Scribus, nyílt forráskódú kiadvány szerkesztő</translation>
    </message>
    <message>
        <source>Homepage</source>
        <translation>Honlap</translation>
    </message>
    <message>
        <source>Documentation</source>
        <translation>Dokumentáció</translation>
    </message>
    <message>
        <source>Wiki</source>
        <translation>Wiki</translation>
    </message>
    <message>
        <source>Issues</source>
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
        <source>Display a console window</source>
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
        <translation>%</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation type="obsolete">Réteg</translation>
    </message>
    <message>
        <source>Copy Here</source>
        <translation>Másolás ide</translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation>Mozgatás ide</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Beillesztés</translation>
    </message>
    <message>
        <source>Picture</source>
        <translation>Kép</translation>
    </message>
    <message>
        <source>File: </source>
        <translation>Fájl:</translation>
    </message>
    <message>
        <source>Original PPI: </source>
        <translation>Eredeti PPI: </translation>
    </message>
    <message>
        <source>Actual PPI: </source>
        <translation>Érvényes PPI: </translation>
    </message>
    <message>
        <source>Linked Text</source>
        <translation>Kapcsolt szöveg</translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation>Szöveg keret</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation>Bekezdések:</translation>
    </message>
    <message>
        <source>Words: </source>
        <translation>Szavak:</translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation>Karakterek: </translation>
    </message>
    <message>
        <source>Print: </source>
        <translation>Nyomtatás:</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Engedélyezve</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Letiltva</translation>
    </message>
    <message>
        <source>In&amp;fo</source>
        <translation>&amp;Információ</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation>&amp;PDF beállítások</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation>&amp;Küldés a rétegre</translation>
    </message>
    <message>
        <source>Le&amp;vel</source>
        <translation>&amp;Szint</translation>
    </message>
    <message>
        <source>Conve&amp;rt to</source>
        <translation>&amp;Átalakízás</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>Preview Settings</source>
        <translation>Előnézet beállítások</translation>
    </message>
    <message>
        <source>Linking Text Frames</source>
        <translation>Kapcsolt szöveg keretek</translation>
    </message>
    <message>
        <source>You are trying to link to a filled frame, or a frame to itself.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot Convert In-Use Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The item %1 is currently being edited by Story Editor. The convert to outlines operation for this item will be skipped</source>
        <translation>%1 elem jelenleg a szövegszerkesztőben változtatható. A konvertálás megszakítva.</translation>
    </message>
    <message>
        <source>Page %1 to %2</source>
        <translation>%1 -től %2 -ig oldal</translation>
    </message>
    <message>
        <source>Colorspace: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Ismeretlen</translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Contents</source>
        <translation type="unfinished">Tartalom</translation>
    </message>
    <message>
        <source>Paste Recent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Duotone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lines: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Group%1</source>
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
        <source>Normal Vision</source>
        <translation type="obsolete">Normál nézet</translation>
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
        <translation>Dokumentum:</translation>
    </message>
    <message>
        <source>has been changed since the last save.</source>
        <translation>megváltozott a legutóbbi mentés óta.</translation>
    </message>
    <message>
        <source>&amp;Discard</source>
        <translation>&amp;Elvet</translation>
    </message>
</context>
<context>
    <name>ScriptPlugin</name>
    <message>
        <source>Embedded Python scripting support.</source>
        <translation>Beépített Python szkript támogatás.</translation>
    </message>
    <message>
        <source>Scripter</source>
        <translation>Szkripter</translation>
    </message>
</context>
<context>
    <name>ScripterCore</name>
    <message>
        <source>Script error</source>
        <translation>Szkript hiba</translation>
    </message>
    <message>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation>Ez az üzenet a vágólapra is kikerült. Használja a Crtl+V billentyűzet parancsot a hiba nyomkövetőbe való beillesztésre.</translation>
    </message>
    <message>
        <source>There was an internal error while trying the command you entered. Details were printed to stderr. </source>
        <translation>A megadott parancs végrehajtásakor belső hiba lépett fel. A részeletek a stderr-re kerültek.</translation>
    </message>
    <message>
        <source>Examine Script</source>
        <translation>Minta szkript</translation>
    </message>
    <message>
        <source>Setting up the Python plugin failed. Error details were printed to stderr. </source>
        <translation>Python beépülő modul beállítása hibát jelzett. Hiba részletei a stderr -re nyomtatva.</translation>
    </message>
    <message>
        <source>Python Scripts (*.py);;All Files (*)</source>
        <translation type="obsolete">Python szkript (*.py);; Minden fájl (*)</translation>
    </message>
    <message>
        <source>Documentation for:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Script</source>
        <translation>Szkript:</translation>
    </message>
    <message>
        <source> doesn&apos;t contain any docstring!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Python Scripts (*.py *.PY);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScripterPrefsGui</name>
    <message>
        <source>Scripter Preferences</source>
        <translation>Szkripter tulajdonságok</translation>
    </message>
    <message>
        <source>Enable Extension Scripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Extensions</source>
        <translation>Bővítmények</translation>
    </message>
    <message>
        <source>Console</source>
        <translation>Konzol</translation>
    </message>
    <message>
        <source>Startup Script:</source>
        <translation>Indítási szkript:</translation>
    </message>
    <message>
        <source>Errors:</source>
        <comment>syntax highlighting</comment>
        <translation>Hibák:</translation>
    </message>
    <message>
        <source>Comments:</source>
        <comment>syntax highlighting</comment>
        <translation>Megjegyzések:</translation>
    </message>
    <message>
        <source>Keywords:</source>
        <comment>syntax highlighting</comment>
        <translation>Kulcsszavak</translation>
    </message>
    <message>
        <source>Signs:</source>
        <comment>syntax highlighting</comment>
        <translation>Jelek:</translation>
    </message>
    <message>
        <source>Numbers:</source>
        <comment>syntax highlighting</comment>
        <translation>Számok:</translation>
    </message>
    <message>
        <source>Strings:</source>
        <comment>syntax highlighting</comment>
        <translation>Sztringek:</translation>
    </message>
    <message>
        <source>Base Texts:</source>
        <comment>syntax highlighting</comment>
        <translation>Alapszöveg:</translation>
    </message>
    <message>
        <source>Select Color</source>
        <translation>Szín kiválasztása</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation>Módosítás...</translation>
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
        <translation>Gyorsnézet mutatása</translation>
    </message>
</context>
<context>
    <name>SearchReplace</name>
    <message>
        <source>Search/Replace</source>
        <translation>Keresés/csere</translation>
    </message>
    <message>
        <source>Search for:</source>
        <translation>Keresés:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Szöveg</translation>
    </message>
    <message>
        <source>Paragraph Style</source>
        <translation>Bekezdés stílusa</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Betűtípus</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Betűméret</translation>
    </message>
    <message>
        <source>Font Effects</source>
        <translation>Betűtípus hatások</translation>
    </message>
    <message>
        <source>Fill Color</source>
        <translation>Kitöltő szín</translation>
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
        <translation>Bal</translation>
    </message>
    <message>
        <source>Center</source>
        <translation>Középre</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Jobbra</translation>
    </message>
    <message>
        <source>Block</source>
        <translation>Klisé</translation>
    </message>
    <message>
        <source>Forced</source>
        <translation>Kikényszerített</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Replace with:</source>
        <translation>Helyettesítve:</translation>
    </message>
    <message>
        <source>&amp;Whole Word</source>
        <translation>&amp;Teljes szó</translation>
    </message>
    <message>
        <source>&amp;Ignore Case</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Keresés</translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation>&amp;Csere</translation>
    </message>
    <message>
        <source>Replace &amp;All</source>
        <translation>&amp;Minden cseréje</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>Be&amp;zárás</translation>
    </message>
    <message>
        <source>Search finished</source>
        <translation>Keresés befejeződött</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Törlés</translation>
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
        <translation>Mezők kijelölése</translation>
    </message>
    <message>
        <source>Available Fields</source>
        <translation>Felhasználóható mezők</translation>
    </message>
    <message>
        <source>&amp;&gt;&gt;</source>
        <translation>&amp;&gt;&gt;</translation>
    </message>
    <message>
        <source>&amp;&lt;&lt;</source>
        <translation>&amp;&lt;&lt;</translation>
    </message>
    <message>
        <source>Selected Fields</source>
        <translation>Mezők kijelölése</translation>
    </message>
</context>
<context>
    <name>ShadeButton</name>
    <message>
        <source>Other...</source>
        <translation>Egyéb...</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation>&amp;Árnyalat:</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Árnyalat</translation>
    </message>
</context>
<context>
    <name>ShadowValues</name>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>X-Offset</source>
        <translation>X eltolás</translation>
    </message>
    <message>
        <source>Y-Offset</source>
        <translation>Y eltolás</translation>
    </message>
</context>
<context>
    <name>ShortWordsPlugin</name>
    <message>
        <source>Short &amp;Words...</source>
        <comment>short words plugin</comment>
        <translation>&amp;Rövid szavak...</translation>
    </message>
    <message>
        <source>Short Words</source>
        <translation>Rövid szavak</translation>
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
        <translation type="unfinished">&amp;Nincs billentyűzet</translation>
    </message>
    <message>
        <source>&amp;User Defined Key</source>
        <translation type="unfinished">&amp;Felhasználó által definiált billentyű</translation>
    </message>
    <message>
        <source>ALT+SHIFT+T</source>
        <translation type="unfinished">ALT+SHIFT+T</translation>
    </message>
    <message>
        <source>Set &amp;Key</source>
        <translation type="unfinished">&amp;Billentyű beállítása</translation>
    </message>
    <message>
        <source>Alt</source>
        <translation type="unfinished">Alt</translation>
    </message>
    <message>
        <source>Ctrl</source>
        <translation type="unfinished">Ctrl</translation>
    </message>
    <message>
        <source>Shift</source>
        <translation type="unfinished">Shift</translation>
    </message>
    <message>
        <source>Meta</source>
        <translation type="unfinished">Meta</translation>
    </message>
    <message>
        <source>Meta+</source>
        <translation type="unfinished">Meta+</translation>
    </message>
    <message>
        <source>Shift+</source>
        <translation type="unfinished">Shift+</translation>
    </message>
    <message>
        <source>Alt+</source>
        <translation type="unfinished">Alt+</translation>
    </message>
    <message>
        <source>Ctrl+</source>
        <translation type="unfinished">Ctrl+</translation>
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
        <translation>Nincs stílus megadva</translation>
    </message>
    <message>
        <source>Edit Styles...</source>
        <translation>Stílusok szerkesztése...</translation>
    </message>
</context>
<context>
    <name>Spalette</name>
    <message>
        <source>No Style</source>
        <translation>Nincs stílus megadva</translation>
    </message>
</context>
<context>
    <name>StilFormate</name>
    <message>
        <source>Edit Styles</source>
        <translation>Stílusok szerkesztése</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Új</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Szerkesztés</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>&amp;Kettőzés</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>%1 másolása</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation>Új stílus</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Megnyitás</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Dokumentumok (*.sla *.sla.gz *.scd *.scd.gz);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Dokumentumok (*.sla *.scd);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importálás</translation>
    </message>
</context>
<context>
    <name>StoryEditor</name>
    <message>
        <source>Story Editor</source>
        <translation>Szövegszerkesztő</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Új</translation>
    </message>
    <message>
        <source>&amp;Reload Text from Frame</source>
        <translation>Szöveg újratöltése a keretből</translation>
    </message>
    <message>
        <source>&amp;Save to File...</source>
        <translation>&amp;Mentés fájlba...</translation>
    </message>
    <message>
        <source>&amp;Load from File...</source>
        <translation>&amp;Betöltés fájlból</translation>
    </message>
    <message>
        <source>Save &amp;Document</source>
        <translation>&amp;Domkumentum mentése</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame and Exit</source>
        <translation>&amp;Szöveg keret frissítése és kilépés</translation>
    </message>
    <message>
        <source>&amp;Exit Without Updating Text Frame</source>
        <translation>&amp;Kilépés a szöveg keret frissírése nélkül</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>&amp;Minden kijelölése</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>&amp;Kivágás</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Másolás</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Beillesztés</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation>&amp;Keresés/csere...</translation>
    </message>
    <message>
        <source>&amp;Edit Styles...</source>
        <translation>&amp;Stílusok szerkesztése...</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview...</source>
        <translation>&amp;Betűtípus előnézet...</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame</source>
        <translation>&amp;Szöveg keret frissítése</translation>
    </message>
    <message>
        <source>&amp;Background...</source>
        <translation>&amp;Háttér...</translation>
    </message>
    <message>
        <source>&amp;Display Font...</source>
        <translation>&amp;Betűtípus megjelenítése...</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Fájl</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Szerkesztés</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation>&amp;Beállítások</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Fájl</translation>
    </message>
    <message>
        <source>Current Paragraph:</source>
        <translation>Jelenlegi bekezdés:</translation>
    </message>
    <message>
        <source>Words: </source>
        <translation>Szavak:</translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation>Karakterek: </translation>
    </message>
    <message>
        <source>Totals:</source>
        <translation>Összes:</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation>Bekezdések:</translation>
    </message>
    <message>
        <source>Do you want to save your changes?</source>
        <translation>Akarja menteni a változtatásait?</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Megnyitás</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Szöveg fájlok (*.txt);;Minden fájl (*)</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Ment másként</translation>
    </message>
    <message>
        <source>&amp;Smart text selection</source>
        <translation>&amp;Okos szöveg kijelölés</translation>
    </message>
    <message>
        <source>&amp;Insert Glyph...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clear All Text</source>
        <translation>Teljes szöveg törlése</translation>
    </message>
    <message>
        <source>Story Editor - %1</source>
        <translation>Szövegszerkesztő - %1</translation>
    </message>
    <message>
        <source>Do you really want to lose all your changes?</source>
        <translation>Tényleg el akarja veszíteni az összes változtatását?</translation>
    </message>
    <message>
        <source>Do you really want to clear all your text?</source>
        <translation>Tényleg törölni akarja a teljes szöveget?</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation>&amp;Beillesztés</translation>
    </message>
    <message>
        <source>Character</source>
        <translation>Karakter</translation>
    </message>
    <message>
        <source>Quote</source>
        <translation>Idézet</translation>
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
        <source>Space</source>
        <translation>Távolság</translation>
    </message>
</context>
<context>
    <name>StrikeValues</name>
    <message>
        <source>Auto</source>
        <translation>Automatikus</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Displacement</source>
        <translation>Eltolás</translation>
    </message>
    <message>
        <source>Linewidth</source>
        <translation>Vonalvastagság</translation>
    </message>
</context>
<context>
    <name>StyleManager</name>
    <message>
        <source>More than one item selected</source>
        <translation type="obsolete">Több mint egy elemet jelölt ki</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished">Név:</translation>
    </message>
    <message>
        <source>&amp;Reset</source>
        <translation type="unfinished">&amp;Alaphelyzetbe állítás</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation type="unfinished">&amp;Alkalmazás</translation>
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
        <translation type="unfinished">&amp;Új</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished">&amp;Importálás</translation>
    </message>
    <message>
        <source>&amp;Clone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">&amp;Törlés</translation>
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
        <translation type="unfinished">Új</translation>
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
        <translation type="unfinished">Törlés</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished">&amp;Szerkesztés</translation>
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
        <translation type="unfinished">Név</translation>
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
        <translation type="unfinished">Szerkesztés</translation>
    </message>
    <message>
        <source>New %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This key sequence is already in use</source>
        <translation type="unfinished">Ez a billentyűzet kombináció már foglalt</translation>
    </message>
    <message>
        <source>More than one style selected</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>StyleSelect</name>
    <message>
        <source>Underline</source>
        <translation type="obsolete">Aláhúzott</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation>Kiskapitális</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation>Alsó index</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation>Felső index</translation>
    </message>
    <message>
        <source>Strike Out</source>
        <translation type="obsolete">Áthúzott</translation>
    </message>
    <message>
        <source>Underline Words Only</source>
        <translation type="obsolete">Csak a szavak aláhúzása</translation>
    </message>
    <message>
        <source>All Caps</source>
        <translation>minden nagybetűs</translation>
    </message>
    <message>
        <source>Shadow</source>
        <translation type="obsolete">Árnyék</translation>
    </message>
    <message>
        <source>Outline</source>
        <comment>

Text Style Selector</comment>
        <translation type="obsolete">Szerkezet</translation>
    </message>
    <message>
        <source>Underline Text. Hold down the button momentarily to set line width and displacement options.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Underline Words Only. Hold down the button momentarily to set line width and displacement options.</source>
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
        <source>Use document name as a prefix for paragraph styles</source>
        <translation>Használja a dokumentum nevét a bekezdés stílus előtagjaként</translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation>Ne kérdezd ismét</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Rendben</translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Importer Options</source>
        <translation>OpenOffice.org Szöveg importáló beállítások</translation>
    </message>
    <message>
        <source>Overwrite Paragraph Styles</source>
        <translation>Bekezdés stílusainak felülírása</translation>
    </message>
    <message>
        <source>Enabling this will overwrite existing styles in the current Scribus document</source>
        <translation>Engedélyezve felülírja a jelenlegi Scribus dokumentumban lévő stílusokat</translation>
    </message>
    <message>
        <source>Merge Paragraph Styles</source>
        <translation>Bekezdés stílusok összefésülése</translation>
    </message>
    <message>
        <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document&apos;s styles are named differently.</source>
        <translation>Bekezdés stílusok összefűzése jellemzők szerint. Ez kevesebb hasonló bekezdés stílust eredményez, de megtartja a stílus jellemzőket, még akkor is, ha az eredeti dokumentum stílusai különböző nevűek.</translation>
    </message>
    <message>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make these settings the default and do not prompt again when importing an OpenOffice.org 1.x document.</source>
        <translation>A beállítások legyenek alapértlemezettek, többé ne kérdezzen, mikor OpenOffice.org 1.x dokumentumot importálok.</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
</context>
<context>
    <name>TOCIndexPrefs</name>
    <message>
        <source>None</source>
        <translation>Nincs</translation>
    </message>
    <message>
        <source>At the beginning</source>
        <translation>A kezdetén</translation>
    </message>
    <message>
        <source>At the end</source>
        <translation>A végén</translation>
    </message>
    <message>
        <source>Not Shown</source>
        <translation>Nincs mutatva</translation>
    </message>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation>Tartalomjegyzék és indexek</translation>
    </message>
    <message>
        <source>Table Of Contents</source>
        <translation>Tartalomjegyzék</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Hozzáadás</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
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
        <translation>Nem nyomtatandó bejegyzések listázása</translation>
    </message>
    <message>
        <source>Include frames that are set to not print as well</source>
        <translation>A nem nyomtatandónak beállított keretek is beletartoznak</translation>
    </message>
    <message>
        <source>The paragraph style used for the entry lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paragraph Style:</source>
        <translation>Bekezdés stílusa:</translation>
    </message>
    <message>
        <source>Destination Frame:</source>
        <translation>Cél keret:</translation>
    </message>
    <message>
        <source>Inde&amp;x</source>
        <translation type="obsolete">&amp;Index</translation>
    </message>
</context>
<context>
    <name>TOCIndexPrefsBase</name>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation>Tartalomjegyzék és indexek</translation>
    </message>
    <message>
        <source>Table Of Contents</source>
        <translation>Tartalomjegyzék</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Hozzáadás</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
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
        <translation>Nem nyomtatandó bejegyzések listázása</translation>
    </message>
    <message>
        <source>Include frames that are set to not print as well</source>
        <translation>A nem nyomtatandónak beállított keretek is beletartoznak</translation>
    </message>
    <message>
        <source>The paragraph style used for the entry lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paragraph Style:</source>
        <translation>Bekezdés stílusa:</translation>
    </message>
    <message>
        <source>Destination Frame:</source>
        <translation>Cél keret:</translation>
    </message>
    <message>
        <source>Inde&amp;x</source>
        <translation type="obsolete">&amp;Index</translation>
    </message>
</context>
<context>
    <name>TabCheckDoc</name>
    <message>
        <source>Ignore all errors</source>
        <translation>Minden hiba figyelmen kívül hagyása</translation>
    </message>
    <message>
        <source>Automatic check before printing or exporting</source>
        <translation>Automatikus ellenőrzés nyomtatás vagy exportálás előtt</translation>
    </message>
    <message>
        <source>Check for missing glyphs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for objects not on a page</source>
        <translation type="obsolete">Az oldalon nem szereplő objektumok ellenőrzése</translation>
    </message>
    <message>
        <source>Check for overflow in text frames</source>
        <translation>Ellenőrizze a túlcsordulást a szöveg keretben</translation>
    </message>
    <message>
        <source>Check for missing images</source>
        <translation>Ellenőrizze a hiányzó képet</translation>
    </message>
    <message>
        <source>Check image resolution</source>
        <translation>Ellenőrizze a kép felbontást</translation>
    </message>
    <message>
        <source>Lowest allowed resolution</source>
        <translation>Legalacsonyabb megengedett felbontás</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation>dpi</translation>
    </message>
    <message>
        <source>Check for PDF Annotations and Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add Profile</source>
        <translation>Profil hozzáadása</translation>
    </message>
    <message>
        <source>Remove Profile</source>
        <translation>Profil eltávolítása</translation>
    </message>
    <message>
        <source>Check for placed PDF Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Highest allowed resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for GIF images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ignore non-printable Layers</source>
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
        <translation type="unfinished">Lap színe</translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable or disable  the display of linked frames.</source>
        <translation type="unfinished">Kapcsolot ekretek megjelenítésének engedélyezése vagy tiltása.</translation>
    </message>
    <message>
        <source>Display non-printing characters such as paragraph markers in text frames</source>
        <translation type="unfinished">Nem nyomtatandó karakterek, mint bekezdés jelölés, mutatása a szöveg keretben</translation>
    </message>
    <message>
        <source>Turns the display of frames on or off</source>
        <translation type="unfinished">Keretek megjelenítésének be- és kikapcsolása</translation>
    </message>
    <message>
        <source>Turns the display of layer indicators on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the display of pictures on or off</source>
        <translation type="unfinished">Képek megjelenítésének be- és kikapcsolása</translation>
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
        <translation type="unfinished">Alapértelmezett nagyítási szint beállítása</translation>
    </message>
    <message>
        <source>Place a ruler against your screen and drag the slider to set the zoom level so Scribus will display your pages and objects on them at the correct size</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabDisplayBase</name>
    <message>
        <source>Page Display</source>
        <translation type="unfinished">Oldal megjelenítése</translation>
    </message>
    <message>
        <source>Show Layer Indicators</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Frames</source>
        <translation type="unfinished">Keretek mutatása</translation>
    </message>
    <message>
        <source>Show Text Chains</source>
        <translation type="unfinished">Szöveg láncok mutatása</translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation type="unfinished">Alt+U</translation>
    </message>
    <message>
        <source>Rulers Relative to Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Text Control Characters</source>
        <translation type="unfinished">Szöveg vezérlő karakterek mutatása</translation>
    </message>
    <message>
        <source>Show Pictures</source>
        <translation type="unfinished">Képek mutatása</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="obsolete">Szín:</translation>
    </message>
    <message>
        <source>Scratch Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="unfinished">&amp;Bal:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="unfinished">&amp;Jobb:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="unfinished">&amp;Alsó:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="unfinished">&amp;Felső:</translation>
    </message>
    <message>
        <source>Gaps Between Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontal:</source>
        <translation type="unfinished">Vízszintes:</translation>
    </message>
    <message>
        <source>Vertical:</source>
        <translation type="unfinished">Függőleges:</translation>
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
        <source>General</source>
        <translation type="unfinished">Általános</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation type="unfinished">Színek</translation>
    </message>
    <message>
        <source>Pages:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill Color:</source>
        <translation type="unfinished">Kitöltő szín:</translation>
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
        <source>Custom</source>
        <translation type="obsolete">Egyedi</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished">Oldal méret</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished">&amp;Méret:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished">Álló</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished">Fekvő</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished">&amp;Orientáció:</translation>
    </message>
    <message>
        <source>Units:</source>
        <translation type="unfinished">Mértékegység:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished">&amp;Szélesség:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished">&amp;Magasság:</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="unfinished">Margók</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation type="unfinished">Automatikus mentés</translation>
    </message>
    <message>
        <source>min</source>
        <translation type="unfinished">perc</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Undo/Redo</source>
        <translation type="unfinished">Visszavonás/Újra végrehajtás</translation>
    </message>
    <message>
        <source>Action history length</source>
        <translation type="unfinished">Művelet előzmény hossza</translation>
    </message>
    <message>
        <source>Width of document pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished">Dokumentum oldalak szélessége, ha egyedi oldal méretet választ, szerkeszthető</translation>
    </message>
    <message>
        <source>Height of document pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished">Dokumentum oldalak magassága, ha egyedi oldal méretet választ, szerkeszthető</translation>
    </message>
    <message>
        <source>Default page size, either a standard size or a custom size</source>
        <translation type="unfinished">Alapértelmezett oldalméret, az általános és egyedi méret esetében is</translation>
    </message>
    <message>
        <source>Default orientation of document pages</source>
        <translation type="unfinished">A dokumentum oldalak alapértelmezett orientációja</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation type="unfinished">Dokumentum szerkesztésének alapértelmezett mértékegysége</translation>
    </message>
    <message>
        <source>When enabled, Scribus saves a backup copy of your file with the .bak extension each time the time period elapses</source>
        <translation type="unfinished">Ha negedélyezi, a Scribus készít egy .bak kiterjesztésű biztonsági másolatot a fájljáról a beállított időközönként</translation>
    </message>
    <message>
        <source>Time period between saving automatically</source>
        <translation type="unfinished">Automatikus mentések közötti időtartam</translation>
    </message>
    <message>
        <source>Set the length of the action history in steps. If set to 0 infinite amount of actions will be stored.</source>
        <translation type="unfinished">Állítsa be a változtatások megjegyzésének mértékét. Ha 0 értéket ad meg, korlátozás nélkül tárolódnak a változtatások.</translation>
    </message>
    <message>
        <source>Apply the page size changes to all existing pages in the document</source>
        <translation type="unfinished">Oldal méret változások alkalmazása a dokumentum összes létező oldalán</translation>
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
        <source>Apply the page size changes to all existing master pages in the document</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabExternalToolsWidget</name>
    <message>
        <source>Locate Ghostscript</source>
        <translation type="unfinished">Ghostscript helye</translation>
    </message>
    <message>
        <source>Locate your image editor</source>
        <translation type="unfinished">Kép szerkesztő kijelölése</translation>
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
        <translation type="unfinished">Külső eszközök</translation>
    </message>
    <message>
        <source>PostScript Interpreter</source>
        <translation type="unfinished">PostScript értelmező</translation>
    </message>
    <message>
        <source>&amp;Name of Executable:</source>
        <translation type="unfinished">&amp;Futtató neve:</translation>
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
        <translation type="unfinished">Alt+C</translation>
    </message>
    <message>
        <source>Antialias &amp;Text</source>
        <translation type="unfinished">Anti-alias &amp;Szöveg</translation>
    </message>
    <message>
        <source>Alt+T</source>
        <translation type="unfinished">Alt+T</translation>
    </message>
    <message>
        <source>Antialias text for EPS and PDF onscreen rendering</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Antialias &amp;Graphics</source>
        <translation type="unfinished">Anti-alias &amp;Grafika</translation>
    </message>
    <message>
        <source>Alt+G</source>
        <translation type="unfinished">Alt+G</translation>
    </message>
    <message>
        <source>Antialias graphics for EPS and PDF onscreen rendering</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resolution:</source>
        <translation type="unfinished">Felbontás:</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="unfinished">dpi</translation>
    </message>
    <message>
        <source>Image Processing Tool</source>
        <translation type="unfinished">Kép feldolgozó eszköz</translation>
    </message>
    <message>
        <source>Name of &amp;Executable:</source>
        <translation type="unfinished">&amp;Futtató neve:</translation>
    </message>
    <message>
        <source>&lt;qt&gt;File system location for graphics editor. If you use gimp and your distribution includes it, we recommend &apos;gimp-remote&apos;, as it allows you to edit the image in an already running instance of gimp.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Change...</source>
        <translation type="unfinished">&amp;Módosítás...</translation>
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
        <translation type="unfinished">Scribus alapértelmezett nyelvének kiválasztása. Hagyja üresen, ha a rendszer változót akarja használni. Ezt felülírhatja a Scribus indításakor a parancssori kapcsoló megadásával.</translation>
    </message>
    <message>
        <source>Number of recently edited documents to show in the File menu</source>
        <translation type="unfinished">A fájl menüben mutatott legutóbbi dokumentumok száma</translation>
    </message>
    <message>
        <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
        <translation type="unfinished">Az egér görgő mozgatásakor a görgetett sorok száma</translation>
    </message>
    <message>
        <source>Choose the default window decoration and looks. Scribus inherits any available KDE or Qt themes, if Qt is configured to search KDE plugins.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default font size for the menus and windows</source>
        <translation type="unfinished">A menü és az ablakok alapértelmezett betűmérete</translation>
    </message>
    <message>
        <source>Default font size for the tool windows</source>
        <translation type="unfinished">Eszköz ablak alapértelmezett betűmérete</translation>
    </message>
    <message>
        <source>Default documents directory</source>
        <translation type="unfinished">Alapértelmezett dokumentum könyvtár</translation>
    </message>
    <message>
        <source>Default ICC profiles directory. This cannot be changed with a document open. By default, Scribus will look in the System Directories under Mac OSX and Windows. On Linux and Unix, Scribus will search $home/.color/icc,/usr/share/color/icc and /usr/local/share/color/icc </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default Scripter scripts directory</source>
        <translation type="unfinished">Alapértelmezett Szkripter szkript könyvtár</translation>
    </message>
    <message>
        <source>Additional directory for document templates</source>
        <translation type="unfinished">További könyvtárak a dokumentum sablonhoz</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabGeneralBase</name>
    <message>
        <source>GUI</source>
        <translation type="obsolete">Grafikus felhasználói felület</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Theme:</source>
        <translation type="unfinished">&amp;Téma:</translation>
    </message>
    <message>
        <source>Time before a Move or Resize starts:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> ms</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Font Size (Menus):</source>
        <translation type="unfinished">&amp;Betűméret (menük):</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished">pt</translation>
    </message>
    <message>
        <source>Font Size (&amp;Palettes):</source>
        <translation type="unfinished">Betűméret (&amp;Paletták):</translation>
    </message>
    <message>
        <source>&amp;Wheel Jump:</source>
        <translation type="unfinished">&amp;Görgetés:</translation>
    </message>
    <message>
        <source>&amp;Recent Documents:</source>
        <translation type="unfinished">&amp;Jelenlegi dokumentumok:</translation>
    </message>
    <message>
        <source>Paths</source>
        <translation type="unfinished">Útvonalak</translation>
    </message>
    <message>
        <source>&amp;Documents:</source>
        <translation type="unfinished">&amp;Dokumentumok:</translation>
    </message>
    <message>
        <source>&amp;Change...</source>
        <translation type="unfinished">&amp;Módosítás...</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
    <message>
        <source>&amp;ICC Profiles:</source>
        <translation type="unfinished">&amp;ICC profilok:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="unfinished">&amp;Módosítás...</translation>
    </message>
    <message>
        <source>Alt+H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Scripts:</source>
        <translation type="unfinished">&amp;Szkriptek:</translation>
    </message>
    <message>
        <source>Ch&amp;ange...</source>
        <translation type="unfinished">&amp;Módosítás...</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished">Alt+A</translation>
    </message>
    <message>
        <source>Document &amp;Templates:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation type="unfinished">&amp;Módosítás...</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation type="unfinished">Alt+N</translation>
    </message>
    <message>
        <source>User Interface</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Startup Dialog</source>
        <translation type="unfinished">Indítási dialógus mutatása</translation>
    </message>
    <message>
        <source>Show Splashscreen on Startup</source>
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
        <translation>Közös beállítások</translation>
    </message>
    <message>
        <source>Placing in Documents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>In the Background</source>
        <translation>Háttérben</translation>
    </message>
    <message>
        <source>In the Foreground</source>
        <translation>Előtérben</translation>
    </message>
    <message>
        <source>Snapping</source>
        <translation>Igazítás</translation>
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
        <source> px</source>
        <translation>px</translation>
    </message>
    <message>
        <source>Show Guides</source>
        <translation>Segédvonalak mutatása</translation>
    </message>
    <message>
        <source>Show Margins</source>
        <translation>Margók mutatása</translation>
    </message>
    <message>
        <source>Show Page Grid</source>
        <translation>Oldal rács mutatása</translation>
    </message>
    <message>
        <source>Major Grid</source>
        <translation>Fő rács</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Szín:</translation>
    </message>
    <message>
        <source>Spacing:</source>
        <translation>Távolság:</translation>
    </message>
    <message>
        <source>Minor Grid</source>
        <translation>Segédrács</translation>
    </message>
    <message>
        <source>Show Baseline Grid</source>
        <translation>Alaprács mutatása</translation>
    </message>
    <message>
        <source>Baseline &amp;Grid:</source>
        <translation>&amp;Alaprács:</translation>
    </message>
    <message>
        <source>Baseline &amp;Offset:</source>
        <translation>&amp;Alapvonal eltolás</translation>
    </message>
    <message>
        <source>Distance between the minor grid lines</source>
        <translation>Alrács vonalak közötti távolság</translation>
    </message>
    <message>
        <source>Distance between the major grid lines</source>
        <translation>Főrács vonalak közötti távolság</translation>
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
        <translation>Alrács vonalak színe</translation>
    </message>
    <message>
        <source>Color of the major grid lines</source>
        <translation>Főrács vonalak színe</translation>
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
        <source>Turns the basegrid on or off</source>
        <translation>Alaprács be- és kikapcsolása</translation>
    </message>
    <message>
        <source>Turns the gridlines on or off</source>
        <translation>Rácsvonalak be- és kikapcsolása</translation>
    </message>
    <message>
        <source>Turns the guides on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the margins on or off</source>
        <translation>Margók be- és kikapcsolása</translation>
    </message>
    <message>
        <source>Baseline Settings</source>
        <translation>Alapvonal beállítások</translation>
    </message>
    <message>
        <source>Guides are not visible through objects on the page</source>
        <translation>Az oldalon lévő objektumokon keresztül a segédvonalak nem láthatók</translation>
    </message>
    <message>
        <source>Guides are visible above all objects on the page</source>
        <translation>Az oldalon lévő összes objektumok előtt láthatók a segédvonalak</translation>
    </message>
    <message>
        <source>Color for the baseline grid</source>
        <translation>Alaprács színe</translation>
    </message>
    <message>
        <source>Distance between the lines of the baseline grid</source>
        <translation>Alaprács vonalak közötti távolság</translation>
    </message>
    <message>
        <source>Distance from the top of the page for the first baseline</source>
        <translation>Az első alapvonal távolsága az oldal tetejétől</translation>
    </message>
</context>
<context>
    <name>TabKeyboardShortcutsWidget</name>
    <message>
        <source>Key Set XML Files (*.ksxml)</source>
        <translation type="unfinished">Key Set XML fájlok (*.ksxml)</translation>
    </message>
    <message>
        <source>Alt</source>
        <translation type="unfinished">Alt</translation>
    </message>
    <message>
        <source>Ctrl</source>
        <translation type="unfinished">Ctrl</translation>
    </message>
    <message>
        <source>Shift</source>
        <translation type="unfinished">Shift</translation>
    </message>
    <message>
        <source>Meta</source>
        <translation type="unfinished">Meta</translation>
    </message>
    <message>
        <source>Meta+</source>
        <translation type="unfinished">Meta+</translation>
    </message>
    <message>
        <source>Shift+</source>
        <translation type="unfinished">Shift+</translation>
    </message>
    <message>
        <source>Alt+</source>
        <translation type="unfinished">Alt+</translation>
    </message>
    <message>
        <source>Ctrl+</source>
        <translation type="unfinished">Ctrl+</translation>
    </message>
    <message>
        <source>This key sequence is already in use</source>
        <translation type="unfinished">Ez a billentyűzet kombináció már foglalt</translation>
    </message>
</context>
<context>
    <name>TabKeyboardShortcutsWidgetBase</name>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation type="unfinished">Gyors billentyűk</translation>
    </message>
    <message>
        <source>Search:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Action</source>
        <translation type="unfinished">Művelet</translation>
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
        <translation type="unfinished">&amp;Nincs billentyűzet</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation type="unfinished">Alt+N</translation>
    </message>
    <message>
        <source>&amp;User Defined Key</source>
        <translation type="unfinished">&amp;Felhasználó által definiált billentyű</translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation type="unfinished">Alt+U</translation>
    </message>
    <message>
        <source>Set &amp;Key</source>
        <translation type="unfinished">&amp;Billentyű beállítása</translation>
    </message>
    <message>
        <source>Alt+K</source>
        <translation type="unfinished">Alt+K</translation>
    </message>
    <message>
        <source>CTRL+ALT+SHIFT+W</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Loadable Shortcut Sets</source>
        <translation type="unfinished">Betölthető gyors billentyű készletek</translation>
    </message>
    <message>
        <source>Keyboard shortcut sets available to load</source>
        <translation type="unfinished">Gyors billentyű készlet betölthető</translation>
    </message>
    <message>
        <source>&amp;Load</source>
        <translation type="unfinished">&amp;Betöltés</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="unfinished">Alt+L</translation>
    </message>
    <message>
        <source>Load the selected shortcut set</source>
        <translation type="unfinished">A kijelölt gyors billentyű készlet betöltése</translation>
    </message>
    <message>
        <source>&amp;Import...</source>
        <translation type="unfinished">&amp;Importálás...</translation>
    </message>
    <message>
        <source>Alt+I</source>
        <translation type="unfinished">Alt+I</translation>
    </message>
    <message>
        <source>Import a shortcut set into the current configuration</source>
        <translation type="unfinished">Gyors billentyű készlet importálása a jelenlegi konfigurációba</translation>
    </message>
    <message>
        <source>&amp;Export...</source>
        <translation type="unfinished">&amp;Exportálás...</translation>
    </message>
    <message>
        <source>Alt+E</source>
        <translation type="unfinished">Alt+E</translation>
    </message>
    <message>
        <source>Export the current shortcuts into an importable file</source>
        <translation type="unfinished">A jelenlegi gyors billentyűk exportálása egy importálható fájlba</translation>
    </message>
    <message>
        <source>&amp;Reset</source>
        <translation type="unfinished">&amp;Alaphelyzetbe állítás</translation>
    </message>
    <message>
        <source>Alt+R</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reload the default Scribus shortcuts</source>
        <translation type="unfinished">Az alapértelmezett Scribus gyors billentyűk visszatöltése</translation>
    </message>
</context>
<context>
    <name>TabManager</name>
    <message>
        <source>Manage Tabulators</source>
        <translation>Tabulátorok kezelése</translation>
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
        <translation type="unfinished">Mindig kérdezzen rá a dokumentum betöltésekor a betűtípus helyettesítésére</translation>
    </message>
    <message>
        <source>Preview of current Paragraph Style visible when editing Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Startup Dialog</source>
        <translation type="obsolete">Indítási dialógus mutatása</translation>
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
        <translation type="unfinished">Bekezdések száma:</translation>
    </message>
</context>
<context>
    <name>TabPDFOptions</name>
    <message>
        <source>Export Range</source>
        <translation>Exportálás hatóköre</translation>
    </message>
    <message>
        <source>&amp;All Pages</source>
        <translation>&amp;Minden oldal</translation>
    </message>
    <message>
        <source>C&amp;hoose Pages</source>
        <translation>&amp;Oldalak kiválasztása</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Forgatás:</translation>
    </message>
    <message>
        <source>File Options</source>
        <translation>Fájl beállítások</translation>
    </message>
    <message>
        <source>Compatibilit&amp;y:</source>
        <translation>Kompatibilitás:</translation>
    </message>
    <message>
        <source>&amp;Binding:</source>
        <translation>&amp;Fedél:</translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation>Bal margó</translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation>Jobb margó</translation>
    </message>
    <message>
        <source>Generate &amp;Thumbnails</source>
        <translation>&amp;Miniatűrök létrehozása</translation>
    </message>
    <message>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Include Bookmarks</source>
        <translation>Könyvjelzők belefoglalása</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation>dpi</translation>
    </message>
    <message>
        <source>Com&amp;press Text and Vector Graphics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automatikus</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nincs</translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation>Maximális</translation>
    </message>
    <message>
        <source>High</source>
        <translation>Magas</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation>Közepes</translation>
    </message>
    <message>
        <source>Low</source>
        <translation>Alacsony</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation>Minimum</translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation>&amp;Általános</translation>
    </message>
    <message>
        <source>&amp;Embed all Fonts</source>
        <translation type="obsolete">Az összes betűtípus beágyazása</translation>
    </message>
    <message>
        <source>&amp;Subset all Fonts</source>
        <translation type="obsolete">Betűtípusok részhalmaza</translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation>Beágyazás</translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation>Rendelkezésre álló betűtípusok:</translation>
    </message>
    <message>
        <source>&amp;&gt;&gt;</source>
        <translation>&amp;&gt;&gt;</translation>
    </message>
    <message>
        <source>&amp;&lt;&lt;</source>
        <translation>&amp;&lt;&lt;</translation>
    </message>
    <message>
        <source>Fonts to embed:</source>
        <translation>Beágyazandó betűtípusok:</translation>
    </message>
    <message>
        <source>&amp;Fonts</source>
        <translation>&amp;Betűtípusok</translation>
    </message>
    <message>
        <source>Enable &amp;Presentation Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Oldal</translation>
    </message>
    <message>
        <source>Show Page Pre&amp;views</source>
        <translation>Gyorsnézet mutatása</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation>Hatások</translation>
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
        <translation>&amp;Hatás típusok:</translation>
    </message>
    <message>
        <source>&amp;Moving Lines:</source>
        <translation>&amp;Vonalak mozgatása:</translation>
    </message>
    <message>
        <source>F&amp;rom the:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D&amp;irection:</source>
        <translation>Irány:</translation>
    </message>
    <message>
        <source> sec</source>
        <translation>másodperc</translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation>Nincs effektus</translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation>Vaknyomás</translation>
    </message>
    <message>
        <source>Box</source>
        <translation>Doboz</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation>Eltűnés</translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation>Csillogás</translation>
    </message>
    <message>
        <source>Split</source>
        <translation>Felosztás</translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation>Törlés</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation>Vízszintes</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation>Függőleges</translation>
    </message>
    <message>
        <source>Inside</source>
        <translation>Belül</translation>
    </message>
    <message>
        <source>Outside</source>
        <translation>Kívül</translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation>Balról jobbra:</translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation>Függőlegesen, lefelé:</translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation>Függőlegesen, fölfelé:</translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation>Jobbról balra:</translation>
    </message>
    <message>
        <source>Top-left to Bottom-Right</source>
        <translation>Bal felsőtől a jobb alsóig</translation>
    </message>
    <message>
        <source>&amp;Apply Effect on all Pages</source>
        <translation>&amp;Hatás alkalmazása minden oldalon</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation>&amp;Extrák</translation>
    </message>
    <message>
        <source>&amp;Use Encryption</source>
        <translation>&amp;Titkosítás használata</translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation>Jelszavak</translation>
    </message>
    <message>
        <source>&amp;User:</source>
        <translation>&amp;Felhasználó:</translation>
    </message>
    <message>
        <source>&amp;Owner:</source>
        <translation>&amp;Tulajdonos:</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation>Beállítások</translation>
    </message>
    <message>
        <source>Allow &amp;Printing the Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow &amp;Changing the Document</source>
        <translation>&amp;Dokumentum változtatásának engedélyezése</translation>
    </message>
    <message>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation>&amp;Szöveg és grafika másolásának engedélyezése</translation>
    </message>
    <message>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S&amp;ecurity</source>
        <translation>&amp;Biztonság</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Általános</translation>
    </message>
    <message>
        <source>Output &amp;Intended For:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Screen / Web</source>
        <translation>Képernyő / web</translation>
    </message>
    <message>
        <source>Printer</source>
        <translation>Nyomtató</translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation>Szürkeskála</translation>
    </message>
    <message>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rendering Settings</source>
        <translation>Renderelési beállítások</translation>
    </message>
    <message>
        <source>Fre&amp;quency:</source>
        <translation>&amp;Frekvencia:</translation>
    </message>
    <message>
        <source>&amp;Angle:</source>
        <translation>&amp;Szög:</translation>
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
        <translation>Vonal</translation>
    </message>
    <message>
        <source>Round</source>
        <translation>Lekerekített</translation>
    </message>
    <message>
        <source>Ellipse</source>
        <translation>Ellipszis</translation>
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
        <translation>Profil:</translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation>Megjelenítési prioritások:</translation>
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
        <translation>Telítettség</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Abszolút kolorimetriás</translation>
    </message>
    <message>
        <source>Images:</source>
        <translation>Képek:</translation>
    </message>
    <message>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation>&amp;Szín</translation>
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
        <source>PDF/X-&amp;3</source>
        <translation type="obsolete">PDF/X-&amp;3</translation>
    </message>
    <message>
        <source>Show page previews of each page listed above.</source>
        <translation>Az alább felsorolt oldalak előnézetének mutatása</translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page.</source>
        <translation type="obsolete">Az oldal megjelenítésésnek idötartama mielőtt a bemutató elindul az oldalon.</translation>
    </message>
    <message>
        <source>Type of the display effect.</source>
        <translation>Megjelenési hatás típusa.</translation>
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
        <translation>A kijelölt hatás alkalmazása az összes oldalon.</translation>
    </message>
    <message>
        <source>Export all pages to PDF</source>
        <translation>Összes oldal exportálása PDF-be</translation>
    </message>
    <message>
        <source>Export a range of pages to PDF</source>
        <translation>Oldal tartomány exportálása PDF-be</translation>
    </message>
    <message>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation>DPI (pontok inchenként) kép exportálásához</translation>
    </message>
    <message>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation>Válasszon a felhasználói jelszót a PDF olvasásához.</translation>
    </message>
    <message>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation>PDF nyomtatásának emgedélyezése. Ha nem jelöli ki, a nyomtatás nem lehetséges.</translation>
    </message>
    <message>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation>PDF módosításának engedélyezése. Ha nem jelöli ki, a PDF módosítása nem lehetséges.</translation>
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
        <translation>Oldal(ak) vízszintes tükrözése</translation>
    </message>
    <message>
        <source>Mirror Page(s) vertically</source>
        <translation>Oldal(ak) függőleges tükrözése</translation>
    </message>
    <message>
        <source>&amp;Resolution for EPS Graphics:</source>
        <translation>&amp;EPS grafika felbontása:</translation>
    </message>
    <message>
        <source>Convert Spot Colors to Process Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Include La&amp;yers</source>
        <translation>&amp;Rétegek belefoglalása</translation>
    </message>
    <message>
        <source>Compression Metho&amp;d:</source>
        <translation>&amp;Tömörítési módszer:</translation>
    </message>
    <message>
        <source>Compression &amp;Quality:</source>
        <translation>Tö&amp;mörítési minőség:</translation>
    </message>
    <message>
        <source>Resa&amp;mple Images to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts will preserve the layout and appearance of your document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Length of time the effect runs. A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know you need to change it leave the default choice - Left.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF. Some viewers can use the thumbnails for navigation.</source>
        <translation>Előnézet generálása az egyes PDF lapoknak. Néhány megjelenítő a navigáláshoz használja ezeket.</translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document. These are useful for navigating long PDF documents.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics. This does not affect the resolution of bitmap images like photos.</source>
        <translation>A szöveg és a vektor grafika felbontásának exportálása. Ez nem befolyásolja a bitmap képek (pl. fotók) felbontását.</translation>
    </message>
    <message>
        <source>Enables lossless compression of text and graphics. Unless you have a reason, leave this checked. This reduces PDF file size.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF. If you selected PDF 1.3, the PDF will be protected by 40 bit encryption. If you selected PDF 1.4, the PDF will be protected by 128 bit encryption. Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the security features in your exported PDF</source>
        <translation>Válassza ki a mester jelszót, mely engedélyezi, illetve tiltja az exportált PDF összes biztonsági funkcióit</translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. If unchecked, text and graphics cannot be copied.</source>
        <translation>Szöveg és grafikák másolásának engedélyezése a PDF-ből. Ha nem jelöli ki, a szöveg és a grafikák nem másolhatók.</translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. If unchecked, editing annotations and fields is prevented.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled when specifically requested by your printer and they have given you the exact details needed. Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display Settings</source>
        <translation>Megjelenítési beállítások</translation>
    </message>
    <message>
        <source>Page Layout</source>
        <translation type="obsolete">Oldal elrendezés</translation>
    </message>
    <message>
        <source>Single Page</source>
        <translation>Egyoldalas</translation>
    </message>
    <message>
        <source>Continuous</source>
        <translation>Folyamatos</translation>
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
        <translation>Könyvjelző fül megjelenítése</translation>
    </message>
    <message>
        <source>Display Thumbnails</source>
        <translation>Előnézet megjelenítése</translation>
    </message>
    <message>
        <source>Display Layers Tab</source>
        <translation>Rétegek fül megjelenítése</translation>
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
        <source>No Script</source>
        <translation>Nincs szkript</translation>
    </message>
    <message>
        <source>Viewer</source>
        <translation>Megtekintő</translation>
    </message>
    <message>
        <source>Clip to Page Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lossy - JPEG</source>
        <translation>Veszteséges - JPEG</translation>
    </message>
    <message>
        <source>Lossless - Zip</source>
        <translation>Veszteség mentes - Zip</translation>
    </message>
    <message>
        <source>Image Compression Method</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Javascript to be executed
when PDF document is opened:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables presentation effects when using Adobe&amp;#174; Reader&amp;#174; and other PDF viewers which support this in full screen mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layers in your document are exported to the PDF Only available if PDF 1.5 is chosen.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Re-sample your bitmap images to the selected DPI. Leaving this unchecked will render them at their native resolution. Enabling this will increase memory usage and slow down export.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color model for the output of your PDF. Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets. Choose Printer when printing to a true 4 color CMYK printer. Choose Grayscale when you want a grey scale PDF.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not show objects outside the margins in the exported file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Force Overprint Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page. Setting 0 will disable automatic page transition.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables global Overprint Mode for this document, overrides object settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Determines the PDF compatibility.&lt;br/&gt;The default is &lt;b&gt;PDF 1.3&lt;/b&gt; which gives the widest compatibility.&lt;br/&gt;Choose &lt;b&gt;PDF 1.4&lt;/b&gt; if your file uses features such as transparency or you require 128 bit encryption.&lt;br/&gt;&lt;b&gt;PDF 1.5&lt;/b&gt; is necessary when you wish to preserve objects in separate layers within the PDF.&lt;br/&gt;&lt;b&gt;PDF/X-3&lt;/b&gt; is for exporting the PDF when you want color managed RGB for commercial printing and is selectable when you have activated color management. Use only when advised by your printer or in some cases printing to a 4 color digital color laser printer.</source>
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
        <translation type="unfinished">Jobb:</translation>
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
        <translation type="unfinished">A nyomtatott oldalon ne mutassa a margón kívüli objektumokat</translation>
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
        <translation type="unfinished">Fájl</translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished">Minden</translation>
    </message>
</context>
<context>
    <name>TabPrinterBase</name>
    <message>
        <source>Print Destination</source>
        <translation type="unfinished">Nyomtatási cél</translation>
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
        <translation type="unfinished">Beállítások</translation>
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
        <translation type="unfinished">Színes nyomtatás, ha lehetséges</translation>
    </message>
    <message>
        <source>Print in Grayscale</source>
        <translation type="unfinished">Nyomtatás szürkeskálában</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished">Oldal</translation>
    </message>
    <message>
        <source>Mirror Page(s) Horizontal</source>
        <translation type="unfinished">Vízszintesen tükrözött oldal(ak)</translation>
    </message>
    <message>
        <source>Mirror Page(s) Vertical</source>
        <translation type="unfinished">Függőlegesen tükrözött oldal(ak)</translation>
    </message>
    <message>
        <source>Set Media Size</source>
        <translation type="unfinished">Média méret beállítása</translation>
    </message>
    <message>
        <source>Clip to Page Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished">Szín</translation>
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
        <translation type="unfinished">ICC profilok alkalmazása</translation>
    </message>
    <message>
        <source>General</source>
        <translation type="unfinished">Általános</translation>
    </message>
    <message>
        <source>Print Normal</source>
        <translation type="unfinished">Normál nyomtatás</translation>
    </message>
    <message>
        <source>Print Separations</source>
        <translation type="unfinished">Elválasztó oldal nyomtatása</translation>
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
        <translation type="unfinished">Jobb:</translation>
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
        <source>Font:</source>
        <translation>Betűtípus:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>Méret:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nincs</translation>
    </message>
    <message>
        <source>Fill Color:</source>
        <translation>Kitöltő szín:</translation>
    </message>
    <message>
        <source>Stroke Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>&amp;Oszlopok:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>&amp;Hézag:</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation>Betűtípusnéző próbamondatszörny.</translation>
    </message>
    <message>
        <source>&amp;Line Color:</source>
        <translation>&amp;Vonal színe:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>&amp;Shading:</source>
        <translation>&amp;Árnyákolás:</translation>
    </message>
    <message>
        <source>&amp;Fill Color:</source>
        <translation>&amp;Kitöltő szín:</translation>
    </message>
    <message>
        <source>S&amp;hading:</source>
        <translation>&amp;Árnyékolás:</translation>
    </message>
    <message>
        <source>Line Style:</source>
        <translation>Vonal stílusa:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation>&amp;Vonalvastagság:</translation>
    </message>
    <message>
        <source>Line S&amp;tyle:</source>
        <translation>&amp;Vonal stílusa:</translation>
    </message>
    <message>
        <source>Arrows:</source>
        <translation>Nyílak:</translation>
    </message>
    <message>
        <source>Start:</source>
        <translation>Kezdet:</translation>
    </message>
    <message>
        <source>End:</source>
        <translation>Vége:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation>&amp;Szabad skálázású</translation>
    </message>
    <message>
        <source>&amp;Horizontal Scaling:</source>
        <translation>&amp;Vízszintes skálázás:</translation>
    </message>
    <message>
        <source>&amp;Vertical Scaling:</source>
        <translation>&amp;Függőleges skálázás:</translation>
    </message>
    <message>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation>Kép méretezése a keret méretéhez</translation>
    </message>
    <message>
        <source>Keep Aspect &amp;Ratio</source>
        <translation>&amp;Oldalarány megtartása</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation>&amp;Kitöltő szín:</translation>
    </message>
    <message>
        <source>Mi&amp;nimum:</source>
        <translation>&amp;Minimum:</translation>
    </message>
    <message>
        <source>Ma&amp;ximum:</source>
        <translation>&amp;Maximum:</translation>
    </message>
    <message>
        <source>&amp;Stepping:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Frame Properties</source>
        <translation>Szöveg keret tulajdonságok</translation>
    </message>
    <message>
        <source>Picture Frame Properties</source>
        <translation>Kép keret tulajdonságok</translation>
    </message>
    <message>
        <source>Shape Drawing Properties</source>
        <translation>Alak rajz tulajdonsáok</translation>
    </message>
    <message>
        <source>Magnification Level Defaults</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Drawing Properties</source>
        <translation>Vonal rajzolás tulajdonságok</translation>
    </message>
    <message>
        <source>Polygon Drawing Properties</source>
        <translation>Sokszög rajzolási tulajdonságok</translation>
    </message>
    <message>
        <source>Font for new text frames</source>
        <translation>A következő szöveg keretek betűtípusa</translation>
    </message>
    <message>
        <source>Size of font for new text frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of font</source>
        <translation>Betűtípus színe</translation>
    </message>
    <message>
        <source>Number of columns in a text frame</source>
        <translation>Oszlopok száma egy szöveg keretben</translation>
    </message>
    <message>
        <source>Gap between text frame columns</source>
        <translation>Szöveg keret oszlopok közötti hézag</translation>
    </message>
    <message>
        <source>Sample of your font</source>
        <translation>Betűtípusai mintája</translation>
    </message>
    <message>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation>Kép keret a képek bármilyen átméretezését megengedi</translation>
    </message>
    <message>
        <source>Horizontal scaling of images</source>
        <translation>Képek vízszintes skálázása</translation>
    </message>
    <message>
        <source>Vertical scaling of images</source>
        <translation>Képek függőleges skálázása</translation>
    </message>
    <message>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation>Vízszintes és függőleges skálázás mértéek azonos maradjon</translation>
    </message>
    <message>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation>Kép keretben lévő képek a keret méretére átméretezhetők</translation>
    </message>
    <message>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill color of picture frames</source>
        <translation>Kép keret kitöltő színe</translation>
    </message>
    <message>
        <source>Saturation of color of fill</source>
        <translation>kitöltő szín telítettsége</translation>
    </message>
    <message>
        <source>Line color of shapes</source>
        <translation>Alakzat vonal színe</translation>
    </message>
    <message>
        <source>Saturation of color of lines</source>
        <translation>Vonal szín telítettsége</translation>
    </message>
    <message>
        <source>Fill color of shapes</source>
        <translation>Alakzat kitöltő színe</translation>
    </message>
    <message>
        <source>Line style of shapes</source>
        <translation>Alak vonal stílusa</translation>
    </message>
    <message>
        <source>Line width of shapes</source>
        <translation>Alakok vonal szélessége</translation>
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
        <translation>Vonal színe</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation>Színtelítettség</translation>
    </message>
    <message>
        <source>Style of lines</source>
        <translation>Vonal stílusa</translation>
    </message>
    <message>
        <source>Width of lines</source>
        <translation>Vonal szélessége</translation>
    </message>
    <message>
        <source>Tab Fill Character:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tab Width:</source>
        <translation>Tabulátor szélesség:</translation>
    </message>
    <message>
        <source>Use embedded Clipping Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>On Screen Preview</source>
        <translation>Előnézet képernyőn</translation>
    </message>
    <message>
        <source>Full Resolution Preview</source>
        <translation>Teljes felbontású előnézet</translation>
    </message>
    <message>
        <source>Normal Resolution Preview</source>
        <translation>Normál felbontású előnézet</translation>
    </message>
    <message>
        <source>Low Resolution Preview</source>
        <translation>Alacsony felbontású előnézet</translation>
    </message>
    <message>
        <source>Custom:</source>
        <translation type="obsolete">Egyedi:</translation>
    </message>
    <message>
        <source>Custom: </source>
        <translation type="obsolete">Egyedi:</translation>
    </message>
    <message>
        <source>Text Color:</source>
        <translation>Szöveg színe:</translation>
    </message>
    <message>
        <source>Shading:</source>
        <translation>Árnyékolás:</translation>
    </message>
    <message>
        <source>Text Stroke:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dot</source>
        <translation>Pont</translation>
    </message>
    <message>
        <source>Hyphen</source>
        <translation>Elválasztás</translation>
    </message>
    <message>
        <source>Underscore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Egyedi</translation>
    </message>
    <message>
        <source>None</source>
        <comment>tab fill</comment>
        <translation type="unfinished">Nincs</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished">Szöveg</translation>
    </message>
    <message>
        <source>Shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lines</source>
        <translation type="unfinished">Vonalak</translation>
    </message>
    <message>
        <source>Images</source>
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
        <source>Rotation Tool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Constrain to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Other Properties</source>
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
        <translation>Alsó index</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>&amp;Displacement:</source>
        <translation>&amp;Eltolás:</translation>
    </message>
    <message>
        <source>&amp;Scaling:</source>
        <translation>&amp;Méretezés:</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation>Felső index</translation>
    </message>
    <message>
        <source>D&amp;isplacement:</source>
        <translation>&amp;Eltolás:</translation>
    </message>
    <message>
        <source>S&amp;caling:</source>
        <translation>&amp;Méretezés:</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation>Kiskapitális</translation>
    </message>
    <message>
        <source>Sc&amp;aling:</source>
        <translation>&amp;Méretezés:</translation>
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
        <source>Underline</source>
        <translation>Aláhúzott</translation>
    </message>
    <message>
        <source>Displacement:</source>
        <translation>Eltolás:</translation>
    </message>
    <message>
        <source>Auto</source>
        <translation type="unfinished">Automatikus</translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation>Vonalvastagság:</translation>
    </message>
    <message>
        <source>Strikethru</source>
        <translation>Áthúzott</translation>
    </message>
    <message>
        <source>Automatic &amp;Line Spacing</source>
        <translation>Automatikus &amp;vonaltávolság</translation>
    </message>
    <message>
        <source>Line Spacing:</source>
        <translation>Vonal távolság:</translation>
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
        <translation>Bal</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Jobbra</translation>
    </message>
    <message>
        <source>Full Stop</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Comma</source>
        <translation>Vessző</translation>
    </message>
    <message>
        <source>Center</source>
        <translation>Középre</translation>
    </message>
    <message>
        <source>&amp;Position:</source>
        <translation>&amp;Elhelyezkedés:</translation>
    </message>
    <message>
        <source>Delete All</source>
        <translation>Minden törlése</translation>
    </message>
    <message>
        <source>Indentation for first line of the paragraph</source>
        <translation>Bekezdés első sorának azonosítása</translation>
    </message>
    <message>
        <source>Indentation from the left for the whole paragraph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete all Tabulators</source>
        <translation>Minden tabulátor törlése</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Nincs</translation>
    </message>
    <message>
        <source>Dot</source>
        <translation>Pont</translation>
    </message>
    <message>
        <source>Hyphen</source>
        <translation>Elválasztás</translation>
    </message>
    <message>
        <source>Underscore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Egyedi</translation>
    </message>
    <message>
        <source>Fill Char:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom:</source>
        <translation type="obsolete">Egyedi:</translation>
    </message>
    <message>
        <source>Custom: </source>
        <translation type="obsolete">Egyedi:</translation>
    </message>
    <message>
        <source>None</source>
        <comment>tab fill</comment>
        <translation type="unfinished">Nincs</translation>
    </message>
    <message>
        <source>Indentation from the right for the whole paragraph</source>
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
        <source>Outline</source>
        <translation>Szerkezet</translation>
    </message>
    <message>
        <source>Element</source>
        <translation>Elem</translation>
    </message>
    <message>
        <source>Group </source>
        <translation>Csoport</translation>
    </message>
    <message>
        <source>Free Objects</source>
        <translation>Szabad objektum</translation>
    </message>
    <message>
        <source>Page </source>
        <translation>Oldal</translation>
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
        <translation type="unfinished">Automatikus</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Displacement</source>
        <translation>Eltolás</translation>
    </message>
    <message>
        <source>Linewidth</source>
        <translation>Vonalvastagság</translation>
    </message>
</context>
<context>
    <name>UndoManager</name>
    <message>
        <source>Add vertical guide</source>
        <translation>Függőleges segédvonal hozzáadása</translation>
    </message>
    <message>
        <source>Add horizontal guide</source>
        <translation>Vízszintes segédvonal hozzáadása</translation>
    </message>
    <message>
        <source>Remove vertical guide</source>
        <translation>Függőleges segédvonalak eltávolítása</translation>
    </message>
    <message>
        <source>Remove horizontal guide</source>
        <translation>Vízszintes segédvonalak eltávolítása</translation>
    </message>
    <message>
        <source>Move vertical guide</source>
        <translation>Függőleges segédvonal mozgatása</translation>
    </message>
    <message>
        <source>Move horizontal guide</source>
        <translation>Vízszintes segédvonal mozgatása</translation>
    </message>
    <message>
        <source>Lock guides</source>
        <translation>Segédvonalak rögzítése</translation>
    </message>
    <message>
        <source>Unlock guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move</source>
        <translation>Mozgatás</translation>
    </message>
    <message>
        <source>Resize</source>
        <translation>Átméretezés</translation>
    </message>
    <message>
        <source>Rotate</source>
        <translation>Forgatás</translation>
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
        <translation>Kiválasztás</translation>
    </message>
    <message>
        <source>Group</source>
        <translation>Csoport</translation>
    </message>
    <message>
        <source>Selection/Group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create</source>
        <translation>Létrehozás</translation>
    </message>
    <message>
        <source>X: %1, Y: %2
W: %3, H: %4</source>
        <translation>X: %1, Y: %2
W: %3, H: %4</translation>
    </message>
    <message>
        <source>Align/Distribute</source>
        <translation>Igazítás/elosztás</translation>
    </message>
    <message>
        <source>Items involved</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
    <message>
        <source>Set fill color</source>
        <translation>Kitöltő szín beállítása</translation>
    </message>
    <message>
        <source>Color1: %1, Color2: %2</source>
        <translation>Szín1: %1, szín2: %2</translation>
    </message>
    <message>
        <source>Set fill color shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set line color</source>
        <translation>Vonal szín beállítása</translation>
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
        <translation>Rögzítés</translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation>Feloldás</translation>
    </message>
    <message>
        <source>Lock size</source>
        <translation>Zárolás mérete</translation>
    </message>
    <message>
        <source>Unlock size</source>
        <translation>Méret zárolás feloldása</translation>
    </message>
    <message>
        <source>Ungroup</source>
        <translation>Csoportosítás megszüntetése</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Törlés</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Átnevezés</translation>
    </message>
    <message>
        <source>From %1
to %2</source>
        <translation>%1-től %2-ig</translation>
    </message>
    <message>
        <source>Paste</source>
        <translation>Beillesztés</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation>Kivágás</translation>
    </message>
    <message>
        <source>Set fill color transparency</source>
        <translation>Kitöltő szín átlátszhatóság beállítása</translation>
    </message>
    <message>
        <source>Set line color transparency</source>
        <translation>Vonal szín átlátszhatóság beállítása</translation>
    </message>
    <message>
        <source>Set line style</source>
        <translation>Vonal stílus beállítása</translation>
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
        <translation>Vonal szélesség beállítása</translation>
    </message>
    <message>
        <source>No style</source>
        <translation>Nincs stílus megadva</translation>
    </message>
    <message>
        <source>Set custom line style</source>
        <translation>Egyedi sor stílus beállítása</translation>
    </message>
    <message>
        <source>Do not use custom line style</source>
        <translation>Ne használd az egyedi vonal stílust</translation>
    </message>
    <message>
        <source>Set start arrow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set end arrow</source>
        <translation>Vége nyíl beállítása</translation>
    </message>
    <message>
        <source>Create table</source>
        <translation>Tábla létrehozása</translation>
    </message>
    <message>
        <source>Rows: %1, Cols: %2</source>
        <translation>Sor: %1, oszlop: %2</translation>
    </message>
    <message>
        <source>Set font</source>
        <translation>Betűtípus beállítása</translation>
    </message>
    <message>
        <source>Set font size</source>
        <translation>Betűtípus méret beállítása</translation>
    </message>
    <message>
        <source>Set font width</source>
        <translation>Betűtípus szélesség beállítása</translation>
    </message>
    <message>
        <source>Set font fill color</source>
        <translation>Betűtípus szín beállítása</translation>
    </message>
    <message>
        <source>Set font stroke color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font fill color shade</source>
        <translation>Betűtípus szín árnyék beállítása</translation>
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
        <translation>Sortávolság beállítása</translation>
    </message>
    <message>
        <source>Set paragraph style</source>
        <translation>Bekezdés stílus beállítása</translation>
    </message>
    <message>
        <source>Set language</source>
        <translation>Nyelv beállítása</translation>
    </message>
    <message>
        <source>Align text</source>
        <translation>Szöveg igazítása</translation>
    </message>
    <message>
        <source>Set font effect</source>
        <translation>Betűtípus hatás beállítása</translation>
    </message>
    <message>
        <source>Image frame</source>
        <translation>Kép keret</translation>
    </message>
    <message>
        <source>Text frame</source>
        <translation>Szöveg keret</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Sokszög</translation>
    </message>
    <message>
        <source>Bezier curve</source>
        <translation>Bezier görbe</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation>Sokszögvonal</translation>
    </message>
    <message>
        <source>Convert to</source>
        <translation>Átalakítás</translation>
    </message>
    <message>
        <source>Import SVG image</source>
        <translation>SVG kép importálása</translation>
    </message>
    <message>
        <source>Import EPS image</source>
        <translation>EPS kép importálása</translation>
    </message>
    <message>
        <source>Scratch space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text flows around the frame</source>
        <translation>Szöveg a keretet körbeveszi</translation>
    </message>
    <message>
        <source>Text flows around bounding box</source>
        <translation>Szöveg körbeveszi a keretes dobozt</translation>
    </message>
    <message>
        <source>Text flows around contour line</source>
        <translation>Szöveg köbreveszi a kontúr vonalat</translation>
    </message>
    <message>
        <source>No text flow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No bounding box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No contour line</source>
        <translation>Nincs kontúr vonal</translation>
    </message>
    <message>
        <source>Page %1</source>
        <translation>Oldal %1</translation>
    </message>
    <message>
        <source>Set image scaling</source>
        <translation>Kép skálázás beállítása</translation>
    </message>
    <message>
        <source>Frame size</source>
        <translation>Keret méret</translation>
    </message>
    <message>
        <source>Free scaling</source>
        <translation>Szabad skálázású</translation>
    </message>
    <message>
        <source>Keep aspect ratio</source>
        <translation>Oldalarány megtartása</translation>
    </message>
    <message>
        <source>Break aspect ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit contour line</source>
        <translation>Kontúr vonal szerkesztése</translation>
    </message>
    <message>
        <source>Edit shape</source>
        <translation>Alak szerkesztése</translation>
    </message>
    <message>
        <source>Reset contour line</source>
        <translation>Kontúr vonal alaphelyzetbe állítása</translation>
    </message>
    <message>
        <source>Apply Master Page</source>
        <translation>Mester oldal alkalmazása</translation>
    </message>
    <message>
        <source>Set font height</source>
        <translation>Betűtípus magasság beállítása</translation>
    </message>
    <message>
        <source>Import OpenOffice.org Draw image</source>
        <translation>&amp;OpenOffice.org Rajz kép importálása</translation>
    </message>
    <message>
        <source>Add page</source>
        <translation>Oldal hozáadása</translation>
    </message>
    <message>
        <source>Add pages</source>
        <translation>Oldalak hozzáadása</translation>
    </message>
    <message>
        <source>Delete page</source>
        <translation>Oldal törlése</translation>
    </message>
    <message>
        <source>Delete pages</source>
        <translation>Oldal törlése</translation>
    </message>
    <message>
        <source>Add layer</source>
        <translation>Réteg hozzáadása</translation>
    </message>
    <message>
        <source>Delete layer</source>
        <translation>Réteg törlése</translation>
    </message>
    <message>
        <source>Rename layer</source>
        <translation>Réteg átnevezése</translation>
    </message>
    <message>
        <source>Raise layer</source>
        <translation>Réteg előrébb mozgatása</translation>
    </message>
    <message>
        <source>Lower layer</source>
        <translation>Réteg hátrébb mozgatása</translation>
    </message>
    <message>
        <source>Send to layer</source>
        <translation>Küldés a rétegre</translation>
    </message>
    <message>
        <source>Enable printing of layer</source>
        <translation>Réteg nyomtatásának engedélyezése</translation>
    </message>
    <message>
        <source>Disable printing of layer</source>
        <translation>Kéreg nyomtatásának tiltása</translation>
    </message>
    <message>
        <source>Change name of the layer</source>
        <translation>Réteg nevének megváltoztatása</translation>
    </message>
    <message>
        <source>Get image</source>
        <translation>Kép betöltése</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable Item Printing</source>
        <translation>Elem nyomtatásának engedélyezése</translation>
    </message>
    <message>
        <source>Disable Item Printing</source>
        <translation>Elem nyomtatásának tiltása</translation>
    </message>
    <message>
        <source>Multiple duplicate</source>
        <translation>Többszörös duplázás</translation>
    </message>
    <message>
        <source>Change Image Offset</source>
        <translation>Kép eltolás változtatása</translation>
    </message>
    <message>
        <source>Change Image Scale</source>
        <translation>Kép skálázás változtatása</translation>
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
        <translation type="unfinished">&amp;Visszavonás</translation>
    </message>
    <message>
        <source>&amp;Redo: %1</source>
        <comment>f.e. Redo: Move</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished">&amp;Újra végrehajtás</translation>
    </message>
    <message>
        <source>No object frame</source>
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
        <source>Action History</source>
        <translation>Művelet előzmény</translation>
    </message>
    <message>
        <source>Show selected object only</source>
        <translation>Csak a kiválasztott objektumok mutatása</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Visszavonás</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Újra végrehajtás</translation>
    </message>
    <message>
        <source>Initial State</source>
        <translation>Kezdeti állapot</translation>
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
        <translation>Nyomtató margók használata</translation>
    </message>
    <message>
        <source>Select &amp;Printer:</source>
        <translation>&amp;Nyomtató kiválasztása:</translation>
    </message>
    <message>
        <source>Margins</source>
        <translation>Margók</translation>
    </message>
    <message>
        <source>Right:</source>
        <translation>Jobb:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>&amp;Felső:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>&amp;Alsó:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Bal:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;Rendben</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Mégsem</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
</context>
<context>
    <name>ValueDialog</name>
    <message>
        <source>Insert value</source>
        <translation>Érték beszúrása</translation>
    </message>
    <message>
        <source>Enter a value then press OK.</source>
        <translation>Adja meg az értéket, majd nyomja meg az OK-t</translation>
    </message>
    <message>
        <source>Enter a value then press OK</source>
        <translation>Adja meg az értéket, majd nyomja meg az OK-t</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <source>Send your value to the script</source>
        <translation>Érték küldése a szkriptnek</translation>
    </message>
</context>
<context>
    <name>WerkToolB</name>
    <message>
        <source>Tools</source>
        <translation type="obsolete">Eszközök</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation type="obsolete">Tulajdonságok...</translation>
    </message>
</context>
<context>
    <name>WerkToolBP</name>
    <message>
        <source>PDF Tools</source>
        <translation type="obsolete">PDF eszközök</translation>
    </message>
    <message>
        <source>Button</source>
        <translation type="obsolete">Gomb</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation type="obsolete">Szövegmező</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation type="obsolete">Jelölő négyzet</translation>
    </message>
    <message>
        <source>Insert PDF Fields</source>
        <translation type="obsolete">PDF mezők beszúrása</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="obsolete">Szöveg</translation>
    </message>
    <message>
        <source>Link</source>
        <translation type="obsolete">Kapcsolat</translation>
    </message>
    <message>
        <source>Insert PDF Annotations</source>
        <translation type="obsolete">PDF kommentár beszúrása</translation>
    </message>
</context>
<context>
    <name>gtFileDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation>Válassza ki az importert</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automatikus</translation>
    </message>
    <message>
        <source>Import text without any formatting</source>
        <translation>Szöveg importálása formázás nélkül</translation>
    </message>
    <message>
        <source>Importer:</source>
        <translation>Importáló:</translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation>Kódolás:</translation>
    </message>
    <message>
        <source>Import Text Only</source>
        <translation>Csak szöveg importálása</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">Megnyitás</translation>
    </message>
</context>
<context>
    <name>gtImporterDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation>Válassza ki az importert</translation>
    </message>
    <message>
        <source></source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remember association</source>
        <translation>Emlékezzen a társításra</translation>
    </message>
    <message>
        <source>Remember the file extension - importer association and do not ask again to select an importer for files of this type.</source>
        <translation>Emlékezzen a fájl kiterjesztés - importáló összekapcsolásra és ne kérdezze meg ismét az ilyen típusú fájl esetében ezt.</translation>
    </message>
</context>
<context>
    <name>nftdialog</name>
    <message>
        <source>New From Template</source>
        <translation>Új sablonból</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Eltávolítás</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Megnyitás</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Minden</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Név</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Oldal méret</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Színek</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Leírás</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation>Használat</translation>
    </message>
    <message>
        <source>Created with</source>
        <translation>Létrehozva</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Dátum</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Szerző</translation>
    </message>
    <message>
        <source>Downloading Templates</source>
        <translation>Sablonok letöltése</translation>
    </message>
    <message>
        <source>Document templates can be found at http://www.scribus.net/ in the Downloads section.</source>
        <translation>Dokumentum sablonok a http://www.scribus.net/ honlapon, a Letötlések részben találhatók.</translation>
    </message>
    <message>
        <source>Installing Templates</source>
        <translation>Sablonok telepítése</translation>
    </message>
    <message>
        <source>Extract the package to the template directory ~/.scribus/templates for the current user or PREFIX/share/scribus/templates for all users in the system.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preparing a template</source>
        <translation>Sablon létrehozása</translation>
    </message>
    <message>
        <source>Make sure images and fonts you use can be used freely. If fonts cannot be shared do not collect them when saving as a template.</source>
        <translation>Bizonyosodjon meg arról, hogy az alkalmazott képek és betűtípusok szabadon használhatók. Ha a betűtípusok nem oszthatók meg, ne használja fel, mikor sablonként menti el.</translation>
    </message>
    <message>
        <source>The template creator should also make sure that the Installing Templates section above applies to their templates as well. This means a user should be able to download a template package and be able to extract them to the template directory and start using them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Removing a template</source>
        <translation>Sablon eltávolítása</translation>
    </message>
    <message>
        <source>Removing a template from the New From Template dialog will only remove the entry from the template.xml, it will not delete the document files. A popup menu with remove is only shown if you have write access to the template.xml file.</source>
        <translation>Az Új sablonból dialógus ablakban ha eltávolít egy sablont, akkor csak a bejegyzést távolítja el a template.xml fájlból. Az eltávolítás felugró menü csak akkor jelenik meg, ha van írás joga a template.xml fájlra.</translation>
    </message>
    <message>
        <source>Translating template.xml</source>
        <translation>sablon.xml fordítása</translation>
    </message>
    <message>
        <source>Copy an existing template.xml to a file called template.lang_COUNTRY.xml (use the same lang code that is present in the qm file for your language), for example template.fi.xml for Finnish language template.xml. The copy must be located in the same directory as the original template.xml so Scribus can load it.</source>
        <translation>A létező template.xml fájl másolása a template.lang_COUNTRY.xml fájlba (haználja ugyanazt a nyelvi kódot, mint az Ön nyelvéhez tartozó qm fájl), például template.fi.xml a finn nyelvű template.xml esetében. A másolatnak ugyanabban a könyvtárban kell lennie mint az eredeti template.xml fájlnak, hogy a Scribus betölthesse.</translation>
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
        <translation type="unfinished">Eltávolítás</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">Rendben</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Mégsem</translation>
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
        <translation>Mentés sablonként</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Név</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Kategória</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Oldal méret</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Színek</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Leírás</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation>Használat</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Szerző</translation>
    </message>
    <message>
        <source>Email</source>
        <translation>E-mail</translation>
    </message>
    <message>
        <source>More Details</source>
        <translation>További részletek</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>Rendben</translation>
    </message>
    <message>
        <source>Less Details</source>
        <translation>Részletek elrejtése</translation>
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
        <translation>Tabloid</translation>
    </message>
    <message>
        <source>landscape</source>
        <translation>fekvő</translation>
    </message>
    <message>
        <source>portrait</source>
        <translation>álló</translation>
    </message>
    <message>
        <source>custom</source>
        <translation>egyedi</translation>
    </message>
</context>
<context>
    <name>tfDia</name>
    <message>
        <source>Create filter</source>
        <translation>Szűrő létrehozása</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Törlés</translation>
    </message>
    <message>
        <source>Choose a previously saved filter</source>
        <translation>Válasszon egy előzőleg elmentett szűrőt</translation>
    </message>
    <message>
        <source>Give a name to this filter for saving</source>
        <translation>A mentéshez adja meg a szűrő nevét</translation>
    </message>
    <message>
        <source>Give a name for saving</source>
        <translation>Adja meg a mentés nevét</translation>
    </message>
</context>
<context>
    <name>tfFilter</name>
    <message>
        <source>Disable or enable this filter row</source>
        <translation>Szűrő sor engedélyezése, tiltása</translation>
    </message>
    <message>
        <source>Remove this filter row</source>
        <translation>Szűrő eltávolítása</translation>
    </message>
    <message>
        <source>Add a new filter row</source>
        <translation>Új szűrő sor hozzáadása</translation>
    </message>
    <message>
        <source>to</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>and</source>
        <translation>és</translation>
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
        <translation>szavak</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Eltávolítás</translation>
    </message>
    <message>
        <source>Replace</source>
        <translation>Csere</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Alkalmazás</translation>
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
        <translation>bekezdés stílusa</translation>
    </message>
    <message>
        <source>all instances of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>all paragraphs</source>
        <translation>minden bekezdés</translation>
    </message>
    <message>
        <source>paragraphs starting with</source>
        <translation>bekezdés kezdődik</translation>
    </message>
    <message>
        <source>paragraphs with less than</source>
        <translation>bekezdés kisebb mint</translation>
    </message>
    <message>
        <source>paragraphs with more than</source>
        <translation>bekezdés nagyobb mint</translation>
    </message>
</context>
</TS>
