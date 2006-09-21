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

Returns whether the layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

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
        <source>defineColor(&quot;name&quot;, c, m, y, k)

Defines a new color &quot;name&quot;. The color Value is defined via four components:
c = Cyan, m = Magenta, y = Yello and k = Black. Color components should be in
the range from 0 to 255.

May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getCornerRadius([&quot;name&quot;]) -&gt; integer

Returns the corner radius of the object &quot;name&quot;. The radius isexpressed in points. If &quot;name&quot; is not given the currentlyselected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPosition([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple with the position of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.The position is expressed in the actual measurement unit of the document
- see UNIT_&lt;type&gt; for reference.
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
        <source>rotateObjectAbs(rot [, &quot;name&quot;])

Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positve values
mean counter clockwise rotation. If &quot;name&quot; is not given the currently
selected item is used.
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
        <source>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame &quot;name&quot;.
Text must be UTF encoded (see setText() as reference) The first character has an
index of 0. Inserting at position -1 appends text to the frame. If &quot;name&quot; is
not given the currently selected Item is used.

May throw IndexError for an insertion out of bounds.
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
        <source>setLayerPrintable(&quot;layer&quot;, printable)

Sets the layer &quot;layer&quot; to be printable or not. If printable is set to
false the layer won&apos;t be printed.

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
</context>
<context>
    <name>About</name>
    <message>
        <source>About Scribus%1%2</source>
        <translation type="obsolete">О Scribus-у%1%2</translation>
    </message>
    <message>
        <source>%1. %2 %3 </source>
        <translation type="obsolete">%1. %2 %3 </translation>
    </message>
    <message>
        <source>Scribus Version %1
%2 %3</source>
        <translation type="obsolete">Scribus верзија %1
%2 %3</translation>
    </message>
    <message>
        <source>Build-ID:</source>
        <translation type="obsolete">ID градње:</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>О прогр&amp;аму</translation>
    </message>
    <message>
        <source>Development Team:</source>
        <translation>Развојни тим:</translation>
    </message>
    <message>
        <source>Contributions from:</source>
        <translation>Прилози од стране:</translation>
    </message>
    <message>
        <source>Windows port:</source>
        <translation type="obsolete">Порт за windows:</translation>
    </message>
    <message>
        <source>Official Documentation:</source>
        <translation>Званична документација:</translation>
    </message>
    <message>
        <source>Other Documentation:</source>
        <translation>Остала документација:</translation>
    </message>
    <message>
        <source>A&amp;uthors</source>
        <translation>А&amp;утори</translation>
    </message>
    <message>
        <source>Basque:</source>
        <translation type="obsolete">Баскијски:</translation>
    </message>
    <message>
        <source>Brazilian:</source>
        <translation type="obsolete">Бразилски:</translation>
    </message>
    <message>
        <source>Bulgarian:</source>
        <translation type="obsolete">Бугарски:</translation>
    </message>
    <message>
        <source>Catalan:</source>
        <translation type="obsolete">Каталански:</translation>
    </message>
    <message>
        <source>Czech:</source>
        <translation type="obsolete">Чешки:</translation>
    </message>
    <message>
        <source>Danish:</source>
        <translation type="obsolete">Дански:</translation>
    </message>
    <message>
        <source>English (British):</source>
        <translation type="obsolete">Енглески (Британски):</translation>
    </message>
    <message>
        <source>Esperanto:</source>
        <translation type="obsolete">Есперанто:</translation>
    </message>
    <message>
        <source>Finnish:</source>
        <translation type="obsolete">Фински:</translation>
    </message>
    <message>
        <source>French:</source>
        <translation type="obsolete">Француски:</translation>
    </message>
    <message>
        <source>Galician:</source>
        <translation type="obsolete">Галицијски:</translation>
    </message>
    <message>
        <source>German:</source>
        <translation type="obsolete">Немачки:</translation>
    </message>
    <message>
        <source>Hungarian:</source>
        <translation type="obsolete">Мађарски:</translation>
    </message>
    <message>
        <source>Italian:</source>
        <translation type="obsolete">Италијански:</translation>
    </message>
    <message>
        <source>Korean:</source>
        <translation type="obsolete">Корејски:</translation>
    </message>
    <message>
        <source>Lithuanian:</source>
        <translation type="obsolete">Литвански:</translation>
    </message>
    <message>
        <source>Norwegian:</source>
        <translation type="obsolete">Норвешки:</translation>
    </message>
    <message>
        <source>Polish:</source>
        <translation type="obsolete">Пољски:</translation>
    </message>
    <message>
        <source>Russian:</source>
        <translation type="obsolete">Руски:</translation>
    </message>
    <message>
        <source>Slovak:</source>
        <translation type="obsolete">Словачки:</translation>
    </message>
    <message>
        <source>Slovenian:</source>
        <translation type="obsolete">Словеначки:</translation>
    </message>
    <message>
        <source>Spanish:</source>
        <translation type="obsolete">Шпански:</translation>
    </message>
    <message>
        <source>Swedish:</source>
        <translation type="obsolete">Шведски:</translation>
    </message>
    <message>
        <source>Turkish:</source>
        <translation type="obsolete">Турски:</translation>
    </message>
    <message>
        <source>Ukrainian:</source>
        <translation type="obsolete">Украјински:</translation>
    </message>
    <message>
        <source>Welsh:</source>
        <translation type="obsolete">Велшки:</translation>
    </message>
    <message>
        <source>&amp;Translations</source>
        <translation>&amp;Преводи</translation>
    </message>
    <message>
        <source>Homepage</source>
        <translation>Почетна страница</translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation>Веб референца</translation>
    </message>
    <message>
        <source>Bugs and Feature Requests</source>
        <translation>Грешке и захтеви за нове могућности</translation>
    </message>
    <message>
        <source>Mailing List</source>
        <translation>Дискусиона листа</translation>
    </message>
    <message>
        <source>&amp;Online</source>
        <translation>На &amp;вези</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Затвори</translation>
    </message>
    <message>
        <source>This panel shows the version, build date and
 compiled in library support in Scribus
The C-C-T equates to C=CUPS C=littlecms T=TIFF support.
Missing library support is indicated by a *</source>
        <translation type="obsolete">Овај панел приказује верзију, датум прављења и
 укомпајлирану подршку за библиотеке у Scribus-у
C-C-T означава: C=CUPS C=littlecms T=TIFF подршку.
Подршка за библиотеке које недостају је обележена *</translation>
    </message>
    <message>
        <source>Official Translations and Translators:</source>
        <translation>Званични преводи и преводиоци:</translation>
    </message>
    <message>
        <source>Serbian:</source>
        <translation type="obsolete">Српски:</translation>
    </message>
    <message>
        <source>Previous Translation Contributors:</source>
        <translation>Они који су претходно допринели превођењу:</translation>
    </message>
    <message>
        <source>About Scribus %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wiki</source>
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
        <source>Mac OS&amp;#174; X Aqua Port:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Windows&amp;#174; Port:</source>
        <translation type="unfinished"></translation>
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
</context>
<context>
    <name>AboutPlugins</name>
    <message>
        <source>Yes</source>
        <translation type="unfinished">Да</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="unfinished">Не</translation>
    </message>
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
        <translation type="unfinished">&amp;Затвори</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
</context>
<context>
    <name>ActionManager</name>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished">&amp;Нови</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation type="unfinished">&amp;Отвори...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">&amp;Затвори</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished">&amp;Сними</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="unfinished">Сними &amp;као...</translation>
    </message>
    <message>
        <source>Re&amp;vert to Saved</source>
        <translation type="unfinished">Вр&amp;ати на снимљено</translation>
    </message>
    <message>
        <source>Collect for O&amp;utput...</source>
        <translation type="unfinished">Сакупи за и&amp;злаз...</translation>
    </message>
    <message>
        <source>Get Text...</source>
        <translation type="unfinished">Добави текст...</translation>
    </message>
    <message>
        <source>Append &amp;Text...</source>
        <translation type="unfinished">Примени &amp;текст...</translation>
    </message>
    <message>
        <source>Get Image...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save &amp;Text...</source>
        <translation type="unfinished">Сними &amp;текст...</translation>
    </message>
    <message>
        <source>Save Page as &amp;EPS...</source>
        <translation type="obsolete">Сними страницу као &amp;EPS...</translation>
    </message>
    <message>
        <source>Save as P&amp;DF...</source>
        <translation type="unfinished">Сними као P&amp;DF...</translation>
    </message>
    <message>
        <source>Document &amp;Setup...</source>
        <translation type="unfinished">&amp;Поставке документа...</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation type="unfinished">Ш&amp;тампај...</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation type="unfinished">&amp;Заврши</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="unfinished">&amp;Опозови</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished">Поно&amp;ви</translation>
    </message>
    <message>
        <source>&amp;Item Action Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="unfinished">&amp;Исеци</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished">&amp;Копирај</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished">&amp;Пренеси</translation>
    </message>
    <message>
        <source>C&amp;lear Contents</source>
        <translation type="obsolete">О&amp;чисти садржај</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation type="unfinished">Изабери &amp;све</translation>
    </message>
    <message>
        <source>&amp;Deselect All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation type="unfinished">&amp;Тражи/Замени...</translation>
    </message>
    <message>
        <source>Edit Image...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;olors...</source>
        <translation type="unfinished">Б&amp;оје...</translation>
    </message>
    <message>
        <source>&amp;Paragraph Styles...</source>
        <translation type="unfinished">Стилови &amp;пасуса....</translation>
    </message>
    <message>
        <source>&amp;Line Styles...</source>
        <translation type="unfinished">Стилови &amp;линија...</translation>
    </message>
    <message>
        <source>&amp;Master Pages...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Javascripts...</source>
        <translation type="obsolete">&amp;Javascript-ови...</translation>
    </message>
    <message>
        <source>P&amp;references...</source>
        <translation type="unfinished">П&amp;одешавања...</translation>
    </message>
    <message>
        <source>%1 pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Other...</source>
        <translation type="unfinished">&amp;Остало...</translation>
    </message>
    <message>
        <source>&amp;Left</source>
        <translation type="unfinished">&amp;Лево</translation>
    </message>
    <message>
        <source>&amp;Center</source>
        <translation type="unfinished">&amp;Средина</translation>
    </message>
    <message>
        <source>&amp;Right</source>
        <translation type="unfinished">&amp;Десно</translation>
    </message>
    <message>
        <source>&amp;Block</source>
        <translation type="unfinished">&amp;Блокирај</translation>
    </message>
    <message>
        <source>&amp;Forced</source>
        <translation type="unfinished">&amp;Приморано</translation>
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
        <translation type="unfinished">&amp;Подвуци</translation>
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
        <translation type="obsolete">&amp;Контура</translation>
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
        <translation type="unfinished">&amp;Табулатори...</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Multiple Duplicate</source>
        <translation type="unfinished">&amp;Умножено дуплирање</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">&amp;Обриши</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="unfinished">&amp;Група</translation>
    </message>
    <message>
        <source>&amp;Ungroup</source>
        <translation type="unfinished">&amp;Растури групу</translation>
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
        <source>Lower to &amp;Bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Raise to &amp;Top</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation type="unfinished">&amp;Спусти</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation type="unfinished">&amp;Подигни</translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation type="unfinished">Пошаљи у св&amp;еску</translation>
    </message>
    <message>
        <source>&amp;Attributes...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation type="unfinished">С&amp;лика видљива</translation>
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
        <translation type="unfinished">Је PDF &amp;маркер</translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation type="unfinished">Је PDF ан&amp;отација</translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation type="unfinished">С&amp;војства анотације</translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation type="unfinished">С&amp;војства поља</translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation type="unfinished">&amp;Уређивање облика...</translation>
    </message>
    <message>
        <source>&amp;Attach Text to Path</source>
        <translation type="unfinished">&amp;Прикачи текст уз путању</translation>
    </message>
    <message>
        <source>&amp;Detach Text from Path</source>
        <translation type="unfinished">&amp;Откачи текст од путање</translation>
    </message>
    <message>
        <source>&amp;Combine Polygons</source>
        <translation type="unfinished">&amp;Комбинуј полигоне</translation>
    </message>
    <message>
        <source>Split &amp;Polygons</source>
        <translation type="unfinished">Раздвоји &amp;полигоне</translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation type="unfinished">&amp;Bezier крива</translation>
    </message>
    <message>
        <source>&amp;Image Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <translation type="obsolete">&amp;Оквирне линије</translation>
    </message>
    <message>
        <source>&amp;Polygon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation type="unfinished">&amp;Текстуални оквир</translation>
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
        <translation type="unfinished">Уметн&amp;и...</translation>
    </message>
    <message>
        <source>Im&amp;port...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete...</source>
        <translation type="unfinished">&amp;Обриши...</translation>
    </message>
    <message>
        <source>&amp;Copy...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Move...</source>
        <translation type="unfinished">&amp;Помери...</translation>
    </message>
    <message>
        <source>&amp;Apply Master Page...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Manage &amp;Guides...</source>
        <translation type="unfinished">Управљање &amp;водиљама...</translation>
    </message>
    <message>
        <source>Manage Page Properties...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Fit in window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;50%</source>
        <translation type="unfinished">&amp;50%</translation>
    </message>
    <message>
        <source>&amp;75%</source>
        <translation type="unfinished">&amp;75%</translation>
    </message>
    <message>
        <source>&amp;100%</source>
        <translation type="unfinished">&amp;100%</translation>
    </message>
    <message>
        <source>&amp;200%</source>
        <translation type="unfinished">&amp;200%</translation>
    </message>
    <message>
        <source>&amp;Thumbnails</source>
        <translation type="unfinished">&amp;Сличице</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation type="unfinished">Прикажи &amp;маргине</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation type="unfinished">Прикажи &amp;оквире</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation type="unfinished">Прикажи &amp;слике</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation type="unfinished">Прикажи &amp;мрежу</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation type="unfinished">Прикажи &amp;водиље</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation type="unfinished">Прикажи мрежу &amp;основне линије</translation>
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
        <source>Rulers relative to Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation type="unfinished">Пре&amp;баци на мрежу</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation type="unfinished">Преб&amp;аци на водиље</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation type="unfinished">&amp;Својства</translation>
    </message>
    <message>
        <source>&amp;Scrapbook</source>
        <translation type="unfinished">&amp;Албум</translation>
    </message>
    <message>
        <source>&amp;Layers</source>
        <translation type="unfinished">&amp;Слојеви</translation>
    </message>
    <message>
        <source>&amp;Arrange Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation type="unfinished">&amp;Маркери</translation>
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
        <translation type="unfinished">&amp;Алати</translation>
    </message>
    <message>
        <source>P&amp;DF Tools</source>
        <translation type="unfinished">P&amp;DF алати</translation>
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
        <translation type="unfinished">&amp;Облик</translation>
    </message>
    <message>
        <source>&amp;Line</source>
        <translation type="unfinished">&amp;Линија</translation>
    </message>
    <message>
        <source>&amp;Freehand Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rotate Item</source>
        <translation type="unfinished">Ротирај ставку</translation>
    </message>
    <message>
        <source>Zoom in or out</source>
        <translation type="unfinished">Увеличај или умањи</translation>
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
        <translation type="unfinished">Уређивање садржаја оквира</translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation type="unfinished">Уреди текст...</translation>
    </message>
    <message>
        <source>Link Text Frames</source>
        <translation type="unfinished">Повежи текстуалне оквире</translation>
    </message>
    <message>
        <source>Unlink Text Frames</source>
        <translation type="unfinished">Прекини везу између текстуалних оквира</translation>
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
        <translation type="unfinished">Уређивање текста помоћу уређивача</translation>
    </message>
    <message>
        <source>Insert Text Frame</source>
        <translation type="unfinished">Уметни текстуални оквир</translation>
    </message>
    <message>
        <source>Insert Image Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Table</source>
        <translation type="unfinished">Убаци табелу</translation>
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
        <translation type="unfinished">Уметни слободоручну линију</translation>
    </message>
    <message>
        <source>&amp;Manage Pictures</source>
        <translation type="unfinished">&amp;Управљање сликама</translation>
    </message>
    <message>
        <source>&amp;Hyphenate Text</source>
        <translation type="unfinished">&amp;Споји текст цртицама</translation>
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
        <source>&amp;About Scribus</source>
        <translation type="unfinished">&amp;О Scribus-у</translation>
    </message>
    <message>
        <source>About &amp;Qt</source>
        <translation type="unfinished">О &amp;Qt-у</translation>
    </message>
    <message>
        <source>Toolti&amp;ps</source>
        <translation type="unfinished">Облач&amp;ићи</translation>
    </message>
    <message>
        <source>Scribus &amp;Manual...</source>
        <translation type="unfinished">Scribus &amp;Приручник...</translation>
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
        <source>Bullet</source>
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
        <source>Toggle Palettes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Toggle Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print Previe&amp;w</source>
        <translation type="unfinished">Прегл&amp;ед за штампање</translation>
    </message>
    <message>
        <source>&amp;JavaScripts...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Convert to Master Page...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cascade</source>
        <translation type="unfinished">&amp;Наслажи</translation>
    </message>
    <message>
        <source>&amp;Tile</source>
        <translation type="unfinished">Поп&amp;лочај</translation>
    </message>
    <message>
        <source>&amp;About Plug-ins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>More Info...</source>
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
        <source>Show Rulers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <comment>Document Outline Palette</comment>
        <translation type="unfinished">&amp;Контура</translation>
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
        <translation type="unfinished">Уметни број странице</translation>
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
        <source>S&amp;tyles...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <comment>type effect</comment>
        <translation type="unfinished">&amp;Контура</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <comment>Convert to oulines</comment>
        <translation type="unfinished">&amp;Оквирне линије</translation>
    </message>
    <message>
        <source>Paste (&amp;Absolute)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished">Оч&amp;исти</translation>
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
        <source>Save as &amp;EPS...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Text Frame Columns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Get Text 2...</source>
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
</context>
<context>
    <name>AdvOptions</name>
    <message>
        <source>Advanced Options</source>
        <translation type="obsolete">Напредне опције</translation>
    </message>
    <message>
        <source>Mirror Page(s) &amp;Horizontal</source>
        <translation type="obsolete">Окрени страницу(е) &amp;водоравно</translation>
    </message>
    <message>
        <source>Mirror Page(s) &amp;Vertical</source>
        <translation type="obsolete">Окрени страницу(е) &amp;усправно</translation>
    </message>
    <message>
        <source>Apply Under Color &amp;Removal</source>
        <translation type="obsolete">Примени под &amp;уклањањем боја</translation>
    </message>
    <message>
        <source>Apply &amp;ICC Profiles</source>
        <translation type="obsolete">Примени &amp;ICC профиле</translation>
    </message>
    <message>
        <source>PostScript Level &amp;1</source>
        <translation type="obsolete">PostScript ниво &amp;1</translation>
    </message>
    <message>
        <source>PostScript Level &amp;2</source>
        <translation type="obsolete">PostScript ниво &amp;2</translation>
    </message>
    <message>
        <source>PostScript Level &amp;3</source>
        <translation type="obsolete">PostScript ниво &amp;3</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Creates PostScript Level 3</source>
        <translation type="obsolete">Прави PostScript ниво 3</translation>
    </message>
    <message>
        <source>Creates PostScript Level 2 only, beware,
this can create huge files</source>
        <translation type="obsolete">Прави PostScript ниво 2 само, опрез,
ово може направити огромне фајлове</translation>
    </message>
    <message>
        <source>Creates PostScript Level 1 only, beware,
this can create huge files</source>
        <translation type="obsolete">Прави PostScript ниво 1 само, опрез, 
oво може направити огромне фајловеНиво огроман</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="obsolete">Начин за искључивање неких сивих сенки које су састављене
од цијан, жуте, и магенте и коришћења црне уместо тога.
UCR највише утиче на делове слике који имају неутралне и/или тамне тонове
који су блиски сивој. Коришћење овога може поправити штампу неких слика
и потребно је мало експериментисања у зависности од случаја.
UCR смањује могућност презасићености CMY мастилима</translation>
    </message>
</context>
<context>
    <name>Align</name>
    <message>
        <source>Distribute/Align</source>
        <translation type="obsolete">Распореди/Поравнај</translation>
    </message>
    <message>
        <source>Align</source>
        <translation type="obsolete">Поравнај</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="obsolete">Водоравно</translation>
    </message>
    <message>
        <source>Left Sides</source>
        <translation type="obsolete">Леве стране</translation>
    </message>
    <message>
        <source>Middles</source>
        <translation type="obsolete">Средине</translation>
    </message>
    <message>
        <source>Right Sides</source>
        <translation type="obsolete">Десне стране</translation>
    </message>
    <message>
        <source>&amp;Between:</source>
        <translation type="obsolete">&amp;Између:</translation>
    </message>
    <message>
        <source>&amp;Do Not Change</source>
        <translation type="obsolete">&amp;Немој да мењаш</translation>
    </message>
    <message>
        <source>A&amp;lign</source>
        <translation type="obsolete">П&amp;оравнај</translation>
    </message>
    <message>
        <source>Di&amp;splacement</source>
        <translation type="obsolete">Погрешно &amp;постављање</translation>
    </message>
    <message>
        <source>Distribute &amp;Evenly</source>
        <translation type="obsolete">Распореди &amp;равномерно</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="obsolete">Усправно</translation>
    </message>
    <message>
        <source>Top Sides</source>
        <translation type="obsolete">Горње стране</translation>
    </message>
    <message>
        <source>Bottom Sides</source>
        <translation type="obsolete">Доње стране</translation>
    </message>
    <message>
        <source>Bet&amp;ween:</source>
        <translation type="obsolete">Изм&amp;еђу:</translation>
    </message>
    <message>
        <source>Do &amp;Not Change</source>
        <translation type="obsolete">&amp;Немој да мењаш</translation>
    </message>
    <message>
        <source>Al&amp;ign</source>
        <translation type="obsolete">По&amp;равнај</translation>
    </message>
    <message>
        <source>Dis&amp;placement</source>
        <translation type="obsolete">Погрешно &amp;постављање</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> тач.</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Distribute E&amp;venly</source>
        <translation type="obsolete">Распореди рав&amp;номерно</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation type="obsolete">&amp;Примени</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
</context>
<context>
    <name>AlignDistributePalette</name>
    <message>
        <source>Align and Distribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align</source>
        <translation type="unfinished">Поравнај</translation>
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
        <translation type="unfinished">Страница</translation>
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
        <source>Align right sides of objects to left side of anchor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align left sides of objects to right side of anchor</source>
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
        <source>Align tops of objects to bottom of anchor</source>
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
        <source>Align bottoms of objects to top of anchor</source>
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
        <source>Distribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make horizontal gaps between objects equal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make horizontal gaps between objects equal to the value specified</source>
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
        <source>Make vertical gaps between objects equal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make vertical gaps between objects equal to the value specified</source>
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
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Y: %1%2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X: %1%2</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AlignSelect</name>
    <message>
        <source>Align Text Left</source>
        <translation>Поравнај текст лево</translation>
    </message>
    <message>
        <source>Align Text Right</source>
        <translation>Поравнај текст десно</translation>
    </message>
    <message>
        <source>Align Text Center</source>
        <translation>Поравнај текст по средини</translation>
    </message>
    <message>
        <source>Align Text Justified</source>
        <translation>Поравнај текст развучено</translation>
    </message>
    <message>
        <source>Align Text Forced Justified</source>
        <translation>Поравнај текст насилно развучено</translation>
    </message>
</context>
<context>
    <name>Annot</name>
    <message>
        <source>Field Properties</source>
        <translation>Својства поља</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Врста:</translation>
    </message>
    <message>
        <source>Button</source>
        <translation>Дугме</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation>Поље за текст</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation>Кућица</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation>Комбо кутија</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation>Кутија листе</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation>Својства</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Име:</translation>
    </message>
    <message>
        <source>Tool-Tip:</source>
        <translation type="obsolete">Алат-Савет:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Текст</translation>
    </message>
    <message>
        <source>Font for use with PDF 1.3:</source>
        <translation>Фонт за коришћење са PDF 1.3:</translation>
    </message>
    <message>
        <source>Border</source>
        <translation>Оквир</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Боја:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Ниједан</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation>Ширина:</translation>
    </message>
    <message>
        <source>Thin</source>
        <translation>Танак</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Нормално</translation>
    </message>
    <message>
        <source>Wide</source>
        <translation>Широк</translation>
    </message>
    <message>
        <source>Style:</source>
        <translation>Стил:</translation>
    </message>
    <message>
        <source>Solid</source>
        <translation>Пуно</translation>
    </message>
    <message>
        <source>Dashed</source>
        <translation>Испрекидано</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation>Подвучено</translation>
    </message>
    <message>
        <source>Beveled</source>
        <translation>Искошено</translation>
    </message>
    <message>
        <source>Inset</source>
        <translation>Уметак</translation>
    </message>
    <message>
        <source>Other</source>
        <translation>Остало</translation>
    </message>
    <message>
        <source>Read Only</source>
        <translation>Само за читање</translation>
    </message>
    <message>
        <source>Required</source>
        <translation>Захтевано</translation>
    </message>
    <message>
        <source>Don&apos;t Export Value</source>
        <translation type="obsolete">Немој да извозиш вредност</translation>
    </message>
    <message>
        <source>Visibility:</source>
        <translation>Видљивост:</translation>
    </message>
    <message>
        <source>Visible</source>
        <translation>Видљиво</translation>
    </message>
    <message>
        <source>Hidden</source>
        <translation>Скривен</translation>
    </message>
    <message>
        <source>No Print</source>
        <translation>Не штампај</translation>
    </message>
    <message>
        <source>No View</source>
        <translation>Без приказа</translation>
    </message>
    <message>
        <source>Appearance</source>
        <translation>Изглед</translation>
    </message>
    <message>
        <source>Text for Button Down</source>
        <translation>Текст за Дугме Доле</translation>
    </message>
    <message>
        <source>Text for Roll Over</source>
        <translation>Текст за превртање</translation>
    </message>
    <message>
        <source>Icons</source>
        <translation>Иконе</translation>
    </message>
    <message>
        <source>Use Icons</source>
        <translation>Користи иконе</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Уклони</translation>
    </message>
    <message>
        <source>Pressed</source>
        <translation>Притиснуто</translation>
    </message>
    <message>
        <source>Roll Over</source>
        <translation>Превртање</translation>
    </message>
    <message>
        <source>Icon Placement...</source>
        <translation>Постављање икона...</translation>
    </message>
    <message>
        <source>Highlight</source>
        <translation>Истицање</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation>Инвертуј</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation>Уоквирено</translation>
    </message>
    <message>
        <source>Push</source>
        <translation>Гурни</translation>
    </message>
    <message>
        <source>Multi-Line</source>
        <translation>Мулти-линија</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>Лозинка</translation>
    </message>
    <message>
        <source>Limit of</source>
        <translation>Лимит од</translation>
    </message>
    <message>
        <source>Characters</source>
        <translation>Знакови</translation>
    </message>
    <message>
        <source>Do Not Scroll</source>
        <translation>Немој да скролујеш</translation>
    </message>
    <message>
        <source>Do Not Spell Check</source>
        <translation>Немој да провераваш правопис</translation>
    </message>
    <message>
        <source>Check Style:</source>
        <translation>Провери стил:</translation>
    </message>
    <message>
        <source>Check</source>
        <translation>Провери</translation>
    </message>
    <message>
        <source>Cross</source>
        <translation>Крст</translation>
    </message>
    <message>
        <source>Diamond</source>
        <translation>Дијамант</translation>
    </message>
    <message>
        <source>Circle</source>
        <translation>Круг</translation>
    </message>
    <message>
        <source>Star</source>
        <translation>Звезда</translation>
    </message>
    <message>
        <source>Square</source>
        <translation>Квадрат</translation>
    </message>
    <message>
        <source>Default is Checked</source>
        <translation>Подразумевано је обележено</translation>
    </message>
    <message>
        <source>Editable</source>
        <translation>Може се уређивати</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Опције</translation>
    </message>
    <message>
        <source>Java Script</source>
        <translation type="obsolete">Java Script</translation>
    </message>
    <message>
        <source>Go To</source>
        <translation>Иди на</translation>
    </message>
    <message>
        <source>Submit Form</source>
        <translation>Пошаљи формулар</translation>
    </message>
    <message>
        <source>Reset Form</source>
        <translation>Ресетуј формулар</translation>
    </message>
    <message>
        <source>Import Data</source>
        <translation>Увези податке</translation>
    </message>
    <message>
        <source>Event:</source>
        <translation>Догађај:</translation>
    </message>
    <message>
        <source>Mouse Up</source>
        <translation>Миш горе</translation>
    </message>
    <message>
        <source>Mouse Down</source>
        <translation>Миш доле</translation>
    </message>
    <message>
        <source>Mouse Enter</source>
        <translation>Миш унеси</translation>
    </message>
    <message>
        <source>Mouse Exit</source>
        <translation>Миш изађи</translation>
    </message>
    <message>
        <source>On Focus</source>
        <translation>На фокус</translation>
    </message>
    <message>
        <source>On Blur</source>
        <translation>На замућење</translation>
    </message>
    <message>
        <source>Script:</source>
        <translation>Скрипта:</translation>
    </message>
    <message>
        <source>Edit...</source>
        <translation>Уреди...</translation>
    </message>
    <message>
        <source>Submit to URL:</source>
        <translation>Пошаљи до URL-а:</translation>
    </message>
    <message>
        <source>Submit Data as HTML</source>
        <translation>Пошаљи податке као HTML</translation>
    </message>
    <message>
        <source>Import Data from:</source>
        <translation>Увези податке од:</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>Одредиште</translation>
    </message>
    <message>
        <source>To File:</source>
        <translation>У фајл:</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation>Измени...</translation>
    </message>
    <message>
        <source>Page:</source>
        <translation>Страна:</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation>X Поз:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> тач.</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation>Y Поз:</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Акција</translation>
    </message>
    <message>
        <source>Field is formatted as:</source>
        <translation>Поље је форматирано као:</translation>
    </message>
    <message>
        <source>Plain</source>
        <translation>Обичан</translation>
    </message>
    <message>
        <source>Number</source>
        <translation>Број</translation>
    </message>
    <message>
        <source>Percentage</source>
        <translation>Проценат</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Датум</translation>
    </message>
    <message>
        <source>Time</source>
        <translation>Време</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Произвољно</translation>
    </message>
    <message>
        <source>Number Format</source>
        <translation>Формат бројева</translation>
    </message>
    <message>
        <source>Decimals:</source>
        <translation>Децимале:</translation>
    </message>
    <message>
        <source>Use Currency Symbol</source>
        <translation>Користи симбол валуте</translation>
    </message>
    <message>
        <source>Prepend Currency Symbol</source>
        <translation>Валута Симбол</translation>
    </message>
    <message>
        <source>Formatting</source>
        <translation>Форматирање</translation>
    </message>
    <message>
        <source>Percent Format</source>
        <translation>Процентни формат</translation>
    </message>
    <message>
        <source>Date Format</source>
        <translation>Формат датума</translation>
    </message>
    <message>
        <source>Time Format</source>
        <translation>Формат времена</translation>
    </message>
    <message>
        <source>Custom Scripts</source>
        <translation>Произвољне скрипте</translation>
    </message>
    <message>
        <source>Format:</source>
        <translation>Формат:</translation>
    </message>
    <message>
        <source>Keystroke:</source>
        <translation>Притисак дугмета:</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>Формат</translation>
    </message>
    <message>
        <source>Value is not validated</source>
        <translation>Вредност није оверена</translation>
    </message>
    <message>
        <source>Value must be greater than or equal to:</source>
        <translation>Вредност мора бити већа или једнака са:</translation>
    </message>
    <message>
        <source>and less or equal to:</source>
        <translation>и мања или једнака са:</translation>
    </message>
    <message>
        <source>Custom validate script:</source>
        <translation>Произвољне скрипте за оверавање:</translation>
    </message>
    <message>
        <source>Validate</source>
        <translation>Овери</translation>
    </message>
    <message>
        <source>Value is not calculated</source>
        <translation>Вредност није израчуната</translation>
    </message>
    <message>
        <source>Value is the</source>
        <translation>Вредност је</translation>
    </message>
    <message>
        <source>sum</source>
        <translation>сума</translation>
    </message>
    <message>
        <source>product</source>
        <translation>производ</translation>
    </message>
    <message>
        <source>average</source>
        <translation>средња вредност</translation>
    </message>
    <message>
        <source>minimum</source>
        <translation>минимум</translation>
    </message>
    <message>
        <source>maximum</source>
        <translation>максимум</translation>
    </message>
    <message>
        <source>of the following fields:</source>
        <translation>од следећих поља:</translation>
    </message>
    <message>
        <source>Pick...</source>
        <translation>Изабери...</translation>
    </message>
    <message>
        <source>Custom calculation script:</source>
        <translation>Произвољна скрипта за израчунавање:</translation>
    </message>
    <message>
        <source>Calculate</source>
        <translation>Израчунај</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>У реду</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Поништи</translation>
    </message>
    <message>
        <source>Flag is ignored for PDF 1.3</source>
        <translation>Застава се игнорише за PDF 1.3</translation>
    </message>
    <message>
        <source>Enter a comma separated list of fields here</source>
        <translation>Овде унесите листу поља одвојених зарезима</translation>
    </message>
    <message>
        <source>You need at least the Icon for Normal to use Icons for Buttons</source>
        <translation>Потребна Вам је барем икона за Нормално да бисте користили икону за дугмад</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Отвори</translation>
    </message>
    <message>
        <source>Images (*.tif *.png *.jpg *.xpm);;Postscript (*.eps);;All Files (*)</source>
        <translation type="obsolete">Слике (*.tif *.png *.jpg *.xpm);;Postscript (*.eps);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Example:</source>
        <translation>Пример:</translation>
    </message>
    <message>
        <source>Selection Change</source>
        <translation>Промена избора</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>PDF фајлови (*.pdf);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>JavaScript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Images (*.tif *.png *.jpg *.xpm);;PostScript (*.eps);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <comment>highlight</comment>
        <translation type="unfinished">Ниједан</translation>
    </message>
    <message>
        <source>None</source>
        <comment>action</comment>
        <translation type="unfinished">Ниједан</translation>
    </message>
    <message>
        <source>Tooltip:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do Not Export Value</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Annota</name>
    <message>
        <source>Annotation Properties</source>
        <translation>Својства анотације</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Текст</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Веза</translation>
    </message>
    <message>
        <source>External Link</source>
        <translation>Спољашња веза</translation>
    </message>
    <message>
        <source>External Web-Link</source>
        <translation>Спољашња веб-веза</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>Одредиште</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> тач.</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Отвори</translation>
    </message>
    <message>
        <source>PDF-Documents (*.pdf);;All Files (*)</source>
        <translation>PDF-Документи (*.pdf);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>&amp;Type:</source>
        <translation>&amp;Врста:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>И&amp;змени...</translation>
    </message>
    <message>
        <source>&amp;Page:</source>
        <translation>&amp;Страница:</translation>
    </message>
    <message>
        <source>&amp;X-Pos</source>
        <translation>&amp;X-Поз</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y Поз:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
</context>
<context>
    <name>ApplyMasterPageDialog</name>
    <message>
        <source>Normal</source>
        <translation type="unfinished">Нормално</translation>
    </message>
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
        <translation type="unfinished">&amp;Све странице</translation>
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
        <source>to</source>
        <translation type="unfinished">до</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="unfinished">Alt+O</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
    <message>
        <source>Apply the selected master page to even, odd or all pages within the following range</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ApplyT</name>
    <message>
        <source>Apply Template</source>
        <translation type="obsolete">Примени шаблон</translation>
    </message>
    <message>
        <source>&amp;Template:</source>
        <translation type="obsolete">Ша&amp;блон:</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Нормално</translation>
    </message>
    <message>
        <source>Apply to &amp;Current Page</source>
        <translation type="obsolete">Примени на &amp;текућу страницу</translation>
    </message>
    <message>
        <source>Apply to all &amp;even Pages</source>
        <translation type="obsolete">Примени на све &amp;парне странице</translation>
    </message>
    <message>
        <source>Apply to all &amp;odd Pages</source>
        <translation type="obsolete">Примени на све &amp;непарне стране</translation>
    </message>
    <message>
        <source>Apply from &amp;Page:</source>
        <translation type="obsolete">Примени од &amp;стране:</translation>
    </message>
    <message>
        <source>To:</source>
        <translation type="obsolete">За:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
</context>
<context>
    <name>ArrowChooser</name>
    <message>
        <source>None</source>
        <translation type="unfinished">Ниједан</translation>
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
        <translation type="unfinished"></translation>
    </message>
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
        <translation type="unfinished">&amp;Врста:</translation>
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
        <source>Colors</source>
        <translation type="unfinished">Боје</translation>
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
        <translation type="unfinished">&amp;Текст</translation>
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
    <message>
        <source>Co&amp;de:</source>
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
</context>
<context>
    <name>Biblio</name>
    <message>
        <source>Scrapbook</source>
        <translation>Албум</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;Нови</translation>
    </message>
    <message>
        <source>&amp;Load...</source>
        <translation type="obsolete">&amp;Учитај...</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="obsolete">&amp;Сними</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="obsolete">Сними &amp;као...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Затвори</translation>
    </message>
    <message>
        <source>&amp;Small</source>
        <translation type="obsolete">&amp;Мала</translation>
    </message>
    <message>
        <source>&amp;Medium</source>
        <translation type="obsolete">&amp;Средње</translation>
    </message>
    <message>
        <source>&amp;Large</source>
        <translation type="obsolete">&amp;Велики</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="obsolete">&amp;Фајл</translation>
    </message>
    <message>
        <source>&amp;Preview</source>
        <translation type="obsolete">&amp;Преглед</translation>
    </message>
    <message>
        <source>Scrapbooks (*.scs);;All Files (*)</source>
        <translation type="obsolete">Албуми (*.scs);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Преименуј</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Обриши</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="obsolete">Име „%1“ није јединствено.
Молим Вас изаберите друго.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">У реду</translation>
    </message>
    <message>
        <source>Object</source>
        <translation>Објекат</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Име:</translation>
    </message>
    <message>
        <source>New Entry</source>
        <translation>Нов унос</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; is not unique.
Please choose another.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a Scrapbook Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation type="unfinished">Изаберите директоријум</translation>
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
        <translation>Маркери</translation>
    </message>
    <message>
        <source>Move Bookmark</source>
        <translation>Помери маркер</translation>
    </message>
    <message>
        <source>Insert Bookmark</source>
        <translation>Уметни маркер</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Поништи</translation>
    </message>
</context>
<context>
    <name>BookPalette</name>
    <message>
        <source>Bookmarks</source>
        <translation>Маркери</translation>
    </message>
</context>
<context>
    <name>ButtonIcon</name>
    <message>
        <source>Icon Placement</source>
        <translation>Постављање икона</translation>
    </message>
    <message>
        <source>Layout:</source>
        <translation>Распоред:</translation>
    </message>
    <message>
        <source>Caption only</source>
        <translation>Само натпис</translation>
    </message>
    <message>
        <source>Icon only</source>
        <translation>Само икона</translation>
    </message>
    <message>
        <source>Caption below Icon</source>
        <translation>Натпис испод иконе</translation>
    </message>
    <message>
        <source>Caption above Icon</source>
        <translation>Натпис изнад иконе</translation>
    </message>
    <message>
        <source>Caption right to Icon</source>
        <translation>Натпис десно од иконе</translation>
    </message>
    <message>
        <source>Caption left to Icon</source>
        <translation>Натпис лево од иконе</translation>
    </message>
    <message>
        <source>Caption overlays Icon</source>
        <translation>Натпис преко иконе</translation>
    </message>
    <message>
        <source>Scale:</source>
        <translation>Размера:</translation>
    </message>
    <message>
        <source>Always</source>
        <translation>Увек</translation>
    </message>
    <message>
        <source>When Icon is too small</source>
        <translation>Када је икона превише мала</translation>
    </message>
    <message>
        <source>When Icon is too big</source>
        <translation>Када је икона превише велика</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>Никад</translation>
    </message>
    <message>
        <source>Scale How:</source>
        <translation>Скалирај како:</translation>
    </message>
    <message>
        <source>Proportional</source>
        <translation>Пропорционалан</translation>
    </message>
    <message>
        <source>Non Proportional</source>
        <translation>Непропорционално</translation>
    </message>
    <message>
        <source>Icon</source>
        <translation>Икона</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>У реду</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Поништи</translation>
    </message>
    <message>
        <source>Reset</source>
        <translation>Ресетуј</translation>
    </message>
</context>
<context>
    <name>CMSPrefs</name>
    <message>
        <source>Color Management Settings</source>
        <translation type="obsolete">Подешавање управљања бојама</translation>
    </message>
    <message>
        <source>&amp;Activate Color Management</source>
        <translation>&amp;Активирај управљање бојама</translation>
    </message>
    <message>
        <source>System Profiles</source>
        <translation>Системски профили</translation>
    </message>
    <message>
        <source>&amp;Pictures:</source>
        <translation type="obsolete">&amp;Слике:</translation>
    </message>
    <message>
        <source>&amp;Solid Colors:</source>
        <translation type="obsolete">&amp;Пуне боје:</translation>
    </message>
    <message>
        <source>&amp;Monitor:</source>
        <translation>&amp;Надгледач:</translation>
    </message>
    <message>
        <source>P&amp;rinter:</source>
        <translation>Ш&amp;тампач:</translation>
    </message>
    <message>
        <source>Rendering Intents</source>
        <translation>Намере рендеровања</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Перцептуално</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Релативна колорметрика</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Засићење</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Апсолутна колорметрика</translation>
    </message>
    <message>
        <source>M&amp;onitor:</source>
        <translation type="obsolete">М&amp;онитор:</translation>
    </message>
    <message>
        <source>Pr&amp;inter:</source>
        <translation type="obsolete">Шт&amp;ампач:</translation>
    </message>
    <message>
        <source>Sim&amp;ulate Printer on the Screen</source>
        <translation>Симу&amp;лирај штампач на екрану</translation>
    </message>
    <message>
        <source>Mark Colors out of &amp;Gamut</source>
        <translation>Означи боје изван &amp;gamut-а</translation>
    </message>
    <message>
        <source>Use &amp;Blackpoint Compensation</source>
        <translation>Користи компензацију &amp;црне тачке</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Default color profile for imported images</source>
        <translation type="obsolete">Подразумевани профил боја за увезене слике</translation>
    </message>
    <message>
        <source>Default color profile for solid colors on the page</source>
        <translation type="obsolete">Подразумевани профил боја за пуне боје на страници</translation>
    </message>
    <message>
        <source>Color profile that you have generated or received from the manufacturer.
This profile should be specific to your monitor and not a generic profile (i.e. sRGB).</source>
        <translation>Профил боја који сте направили или добили од произвођача.
Овај профил би требало да буде баш за Ваш монитор, а не генерички профил (тј. sRGB).</translation>
    </message>
    <message>
        <source>Color profile for your printer model from the manufacturer.
This profile should be specific to your printer and not a generic profile (i.e. sRGB).</source>
        <translation>Профил боја за Ваш модел штампача од произвођача.
Овај профил би требало да буде баш за Ваш штампач, а не генерички профил (тј. sRGB).</translation>
    </message>
    <message>
        <source>Default rendering intent for your monitor. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation type="obsolete">Подразумеване намере рендеровања за Ваш монитор. Уколико не знате зашто ово да промените,
требало би да буде изабрано „Релативна колорметрика“ или „Перцептуално“.</translation>
    </message>
    <message>
        <source>Default rendering intent for your printer. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation type="obsolete">Подразумеване намере рендеровања за Ваш штампач. Уколико не знате зашто ово да промените,
требало би да буде изабрано „Релативна колорметрика“ или „Перцептуално“.</translation>
    </message>
    <message>
        <source>Enable &apos;soft proofing&apos; of how your document colors will print,
based on the chosen printer profile.</source>
        <translation>Укључи „меко проверавање“ како ће се штампати боје у Вашем документу,
на основу изабраног профила за штампач.</translation>
    </message>
    <message>
        <source>Method of showing colors on the screen which may not print properly.
This requires very accurate profiles and serves only as a warning.</source>
        <translation>Метод за приказивање боја на екрану које можда неће бити добро одштампане.
Ово захтева веома прецизне профиле и служи само као упозорење.</translation>
    </message>
    <message>
        <source>Black Point Compensation is a method of improving contrast in photos.
It is recommended that you enable this if you have photos in your document.</source>
        <translation>Компензација црне тачке је метод поправљања контраста на фотографијама.
Препоручљиво је да ово укључите ако имате фотографије у документу.</translation>
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
        <source>Default color profile for imported CMYK images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default color profile for imported RGB images</source>
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
        <translation>Уређивање боја</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Име:</translation>
    </message>
    <message>
        <source>Color &amp;Model</source>
        <translation>&amp;Модел боја</translation>
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
        <translation>Веб сигуран RGB</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Нови</translation>
    </message>
    <message>
        <source>Old</source>
        <translation>Стари</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>HSV-Colormap</source>
        <translation>HSV мапа боја</translation>
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
        <translation>Динамичке линије боја</translation>
    </message>
    <message>
        <source>Static Color Bars</source>
        <translation>Статичне линије боја</translation>
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
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Name of the Color is not unique</source>
        <translation type="obsolete">Име боје није јединствено</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">У реду</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source>You cannot create a color named &quot;%1&quot;.
It&apos;s a reserved name for transparent color</source>
        <translation type="obsolete">Не можете направити боју под називом „%1“. 
То име је резервисано за провидну боју</translation>
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
    <name>ChTable</name>
    <message>
        <source>You can see a thumbnail if you press and hold down the right mouse button. The Insert key inserts a Glyph into the Selection below and the Delete key removes the last inserted one</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CharSelect</name>
    <message>
        <source>Select Character:</source>
        <translation type="unfinished">Изаберите карактер:</translation>
    </message>
    <message>
        <source>Font:</source>
        <translation type="unfinished">Фонт:</translation>
    </message>
    <message>
        <source>Character Class:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="unfinished">Уметн&amp;и</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished">Оч&amp;исти</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">&amp;Затвори</translation>
    </message>
    <message>
        <source>Insert the characters at the cursor in the text</source>
        <translation type="unfinished">Уметни карактере на месту курсора у тексту</translation>
    </message>
    <message>
        <source>Delete the current selection(s).</source>
        <translation type="unfinished">Обриши текући избор(е).</translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing.</source>
        <translation type="obsolete">Затвори овај прозор и врати се на уређивање текста.</translation>
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
        <translation type="unfinished">Грчки</translation>
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
        <source>&amp;Insert Code:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type in a four digit unicode value directly here</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CheckDocument</name>
    <message>
        <source>Current Profile:</source>
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
        <source>Object has transparency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object is a placed PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished">Документ</translation>
    </message>
    <message>
        <source>No Problems found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page </source>
        <translation type="unfinished">Страница</translation>
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
        <source>Preflight Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object is a PDF Annotation or Field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Ignore Errors</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">У реду</translation>
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
    <name>CheckerPrefsList</name>
    <message>
        <source>Postscript</source>
        <translation type="obsolete">Postscript</translation>
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
    <message>
        <source>OK</source>
        <translation type="obsolete">У реду</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Поништи</translation>
    </message>
</context>
<context>
    <name>CollectForOutput</name>
    <message>
        <source>Choose a Directory</source>
        <translation type="unfinished">Изаберите директоријум</translation>
    </message>
    <message>
        <source>Collecting...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
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
        <translation type="unfinished">Боје</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished">&amp;Увези</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished">&amp;Нови</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished">&amp;Уреди</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">&amp;Обриши</translation>
    </message>
    <message>
        <source>&amp;Remove Unused</source>
        <translation type="unfinished">&amp;Уклони некоришћено</translation>
    </message>
    <message>
        <source>Color Sets</source>
        <translation type="unfinished">Скупови боја</translation>
    </message>
    <message>
        <source>Current Color Set:</source>
        <translation type="unfinished">Текући скуп боја:</translation>
    </message>
    <message>
        <source>&amp;Save Color Set</source>
        <translation type="unfinished">&amp;Сними скуп боја</translation>
    </message>
    <message>
        <source>Choose a color set to load</source>
        <translation type="unfinished">Изаберите скуп боја за учитавање</translation>
    </message>
    <message>
        <source>Save the current color set</source>
        <translation type="unfinished">Сними текући скуп боја</translation>
    </message>
    <message>
        <source>Remove unused colors from current document&apos;s color set</source>
        <translation type="unfinished">Уклони некоришћене боје из скупа боја текућег документа</translation>
    </message>
    <message>
        <source>Import colors to the current set from an existing document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create a new color within the current set</source>
        <translation type="unfinished">Направи нову боју у оквиру текућег скупа</translation>
    </message>
    <message>
        <source>Edit the currently selected color</source>
        <translation type="unfinished">Уреди тренутно изабрану боју</translation>
    </message>
    <message>
        <source>Make a copy of the currently selected color</source>
        <translation type="unfinished">Направи копију тренутно изабране боје</translation>
    </message>
    <message>
        <source>Delete the currently selected color</source>
        <translation type="unfinished">Обриши тренутно изабрану боју</translation>
    </message>
    <message>
        <source>Make the current colorset the default color set</source>
        <translation type="unfinished">Учини да тренутни скуп боја буде подразумевани</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished">&amp;Име:</translation>
    </message>
    <message>
        <source>Choose a Name</source>
        <translation type="unfinished">Изаберите име</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">Отвори</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="obsolete">Документи (*.sla *.sla.gz *.scd *.scd.gz);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="obsolete">Документи (*.sla *.scd);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="unfinished">Копија од %1</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation type="unfinished">Нова боја</translation>
    </message>
    <message>
        <source>If color management is enabled, a triangle warning indicator is a warning the the color maybe outside of the color gamut of the current printer profile selected.What this means is the color may not print exactly as indicated on screen. Spot colors are indicated by a red circle. Registration colors will have a registration mark next to the color. More hints about gamut warnings are in the online help under Color Management.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;Other Files (*.eps *.ps *.ai);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;Other Files (*.eps *.ps *.ai);;All Files (*)</source>
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
    <name>ColorWheelDialog</name>
    <message>
        <source>Normal Vision</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Full Color Blindness</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vision Defect:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Wheel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished">Боја</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Име</translation>
    </message>
    <message>
        <source>C</source>
        <translation type="unfinished">C</translation>
    </message>
    <message>
        <source>M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>K</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select Method:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Angle (0 - 90 degrees):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Merge Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Replace Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Merge created colors into the document colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Replace created colors in the document colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Leave colors untouched</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Merging colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error: </source>
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
        <source>Cr&amp;eate color...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import existing color...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Merge colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Replace colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>E&amp;xit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation type="unfinished">Б&amp;оја</translation>
    </message>
    <message>
        <source>Difference between the selected value and the counted ones. Refer to documentation for more information.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Click the wheel to get the base color. It is hue in HSV mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample color scheme</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select one of the methods to create a color scheme. Refer to documentation for more information.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colors of your chosen color scheme</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Simulate common vision defects here. Select type of the defect.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Color</source>
        <translation type="unfinished">Нова боја</translation>
    </message>
    <message>
        <source>Unable to find the requested color. You have probably selected black, gray or white. There is no way to process this color.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;olor Components...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Protanopia (Red)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Deuteranopia (Green)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tritanopia (Blue)</source>
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
        <translation type="unfinished">&amp;Примени</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">&amp;Откажи</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished">&amp;Сними</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Упозорење</translation>
    </message>
    <message>
        <source>None</source>
        <comment>color name</comment>
        <translation type="unfinished">Ниједан</translation>
    </message>
    <message>
        <source>Custom</source>
        <comment>CommonStrings, custom page size</comment>
        <translation type="unfinished">Произвољно</translation>
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
        <source>Left Page</source>
        <translation type="unfinished">Лева страница</translation>
    </message>
    <message>
        <source>Middle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Middle Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Middle Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation type="unfinished">Десна страница</translation>
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
</context>
<context>
    <name>Cpalette</name>
    <message>
        <source>Shade:</source>
        <translation>Сенка:</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation>Непрозирност:</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Нормално</translation>
    </message>
    <message>
        <source>Horizontal Gradient</source>
        <translation>Водоравни прелаз</translation>
    </message>
    <message>
        <source>Vertical Gradient</source>
        <translation>Усправни прелаз</translation>
    </message>
    <message>
        <source>Diagonal Gradient</source>
        <translation>Дијагонални прелаз</translation>
    </message>
    <message>
        <source>Cross Diagonal Gradient</source>
        <translation>Укрштени дијагонални прелаз</translation>
    </message>
    <message>
        <source>Radial Gradient</source>
        <translation>Радијални прелаз</translation>
    </message>
    <message>
        <source>Free linear Gradient</source>
        <translation>Слободни линијски прелаз</translation>
    </message>
    <message>
        <source>Free radial Gradient</source>
        <translation>Слободни радијални прелаз</translation>
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
        <translation> тач.</translation>
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
        <translation>Уреди поставке линије са бојама</translation>
    </message>
    <message>
        <source>Edit Fill Color Properties</source>
        <translation>Уреди поставке попуњености бојама</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation>Засићење боје</translation>
    </message>
    <message>
        <source>Normal or gradient fill method</source>
        <translation>Нормални или прелазни метод попуњавања</translation>
    </message>
    <message>
        <source>Set the transparency for the color selected</source>
        <translation>Постави прозирност за изабрану боју</translation>
    </message>
    <message>
        <source>Color of selected object</source>
        <translation type="obsolete">Боја изабраног објекта</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Move Vector</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">Засићење</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished">Боја</translation>
    </message>
    <message>
        <source>Luminosity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Offsets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X:</source>
        <translation type="unfinished">X:</translation>
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
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CsvDialog</name>
    <message>
        <source>CSV Importer Options</source>
        <translation>Опције CSV увозника</translation>
    </message>
    <message>
        <source>Field delimiter:</source>
        <translation>Границе поља:</translation>
    </message>
    <message>
        <source>(TAB)</source>
        <translation>(TAB)</translation>
    </message>
    <message>
        <source>Value delimiter:</source>
        <translation>Граничне вредности:</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source>First row is a header</source>
        <translation>Први ред је заглавље</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>У реду</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Поништи</translation>
    </message>
    <message>
        <source>None</source>
        <comment>delimiter</comment>
        <translation type="unfinished">Ниједан</translation>
    </message>
</context>
<context>
    <name>CupsOptions</name>
    <message>
        <source>Printer Options</source>
        <translation>Опције штампача</translation>
    </message>
    <message>
        <source>Page Set</source>
        <translation>Поставка странице</translation>
    </message>
    <message>
        <source>All Pages</source>
        <translation>Све странице</translation>
    </message>
    <message>
        <source>Even Pages only</source>
        <translation>Само парне странице</translation>
    </message>
    <message>
        <source>Odd Pages only</source>
        <translation>Само непарне странице</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation>Огледало</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Не</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Да</translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation>Усмерење</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Усправно</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Водоравно</translation>
    </message>
    <message>
        <source>N-Up Printing</source>
        <translation>N-Горе штампање</translation>
    </message>
    <message>
        <source>Page per Sheet</source>
        <translation>Једна страница по листу</translation>
    </message>
    <message>
        <source>Pages per Sheet</source>
        <translation>Број страница на листу</translation>
    </message>
    <message>
        <source>Option</source>
        <translation>Опција</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Вредност</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>This panel displays various CUPS options when printing. 
The exact parameters available will depend on your printer driver.
You can confirm CUPS support by selecting Help &gt; About.
Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support.
Missing library support is indicated by a *</source>
        <translation type="obsolete">Овај панел приказује различите опције CUPS-а током штампања. 
Доступни параметри ће зависити од управљачког програма Вашег штампача.
Можете потврдити CUPS подршку избором „Помоћ &gt; О програму“.
Тражите ставке: C-C-T Оне означавају C=CUPS C=littlecms T=TIFF подршку.
Непостојећа подршка за библиотеке је означена *</translation>
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
        <translation type="unfinished">Отвори</translation>
    </message>
    <message>
        <source>Curve Files (*.scu);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished">Сними као</translation>
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
        <translation>&amp;Компресуј фајл</translation>
    </message>
    <message>
        <source>&amp;Include Fonts</source>
        <translation>&amp;Укључи фонтове</translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation>Кодирање:</translation>
    </message>
    <message>
        <source>Moves to your Document Directory.
This can be set in the Preferences.</source>
        <translation>Премешта у Ваш директоријум за документе.
Ово се може наместити у поставкама.</translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation type="unfinished">CMYK</translation>
    </message>
    <message>
        <source>RGB</source>
        <translation type="unfinished">RGB</translation>
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
        <source>Set &amp;RGB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set C&amp;MYK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set &amp;HSV</source>
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
        <translation>Обриши боју</translation>
    </message>
    <message>
        <source>Delete color:</source>
        <translation type="obsolete">Обриши боју:</translation>
    </message>
    <message>
        <source>?</source>
        <translation type="obsolete">?</translation>
    </message>
    <message>
        <source>Replace it with:</source>
        <translation type="obsolete">Замени је са:</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">У реду</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Поништи</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
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
        <translation>Обриши странице</translation>
    </message>
    <message>
        <source>Delete from:</source>
        <translation type="obsolete">Обриши од:</translation>
    </message>
    <message>
        <source>to:</source>
        <translation>у:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Delete From:</source>
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
        <translation type="unfinished">Нема стила</translation>
    </message>
</context>
<context>
    <name>DmF</name>
    <message>
        <source>Missing Font</source>
        <translation type="obsolete">Недостаје фонт</translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation type="obsolete">Фонт %1 није инсталиран.</translation>
    </message>
    <message>
        <source>Use</source>
        <translation type="obsolete">Користи</translation>
    </message>
    <message>
        <source>instead</source>
        <translation type="obsolete">уместо</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">У реду</translation>
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
        <translation>Информације о документу</translation>
    </message>
    <message>
        <source>&amp;Title:</source>
        <translation>&amp;Наслов:</translation>
    </message>
    <message>
        <source>&amp;Author:</source>
        <translation>&amp;Аутор:</translation>
    </message>
    <message>
        <source>&amp;Keywords:</source>
        <translation>&amp;Кључне речи:</translation>
    </message>
    <message>
        <source>Descri&amp;ption:</source>
        <translation>Оп&amp;ис:</translation>
    </message>
    <message>
        <source>P&amp;ublisher:</source>
        <translation>И&amp;здавач:</translation>
    </message>
    <message>
        <source>&amp;Contributors:</source>
        <translation>&amp;Помагачи:</translation>
    </message>
    <message>
        <source>Dat&amp;e:</source>
        <translation>&amp;Датум:</translation>
    </message>
    <message>
        <source>T&amp;ype:</source>
        <translation>В&amp;рста:</translation>
    </message>
    <message>
        <source>F&amp;ormat:</source>
        <translation>Ф&amp;ормат:</translation>
    </message>
    <message>
        <source>Identi&amp;fier:</source>
        <translation>Означ&amp;ивач:</translation>
    </message>
    <message>
        <source>&amp;Source:</source>
        <translation>&amp;Извор:</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Језик:</translation>
    </message>
    <message>
        <source>&amp;Relation:</source>
        <translation>&amp;Однос:</translation>
    </message>
    <message>
        <source>Co&amp;verage:</source>
        <translation>Покр&amp;ивеност:</translation>
    </message>
    <message>
        <source>Ri&amp;ghts:</source>
        <translation>Пр&amp;ава:</translation>
    </message>
    <message>
        <source>&amp;Document</source>
        <translation type="obsolete">&amp;Документ</translation>
    </message>
    <message>
        <source>Further &amp;Information</source>
        <translation>Додатне &amp;информације</translation>
    </message>
    <message>
        <source>The person or organisation primarily responsible for making the content of the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation type="obsolete">Особа или организација примарно одговорна за прављење садржаја документа.
Ово поље се може уметнути у scribus документ као референца, као и у meta податке PDF-а</translation>
    </message>
    <message>
        <source>A name given to the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation type="obsolete">Име дато документу.
Ово поље се може уметнути у scribus документ као референца, као и у meta податке PDF-а</translation>
    </message>
    <message>
        <source>An account of the content of the document.
This field is for a brief description or abstract of the document. It is embedded in the PDF on export</source>
        <translation type="obsolete">Извод из садржаја документа.
Ово поље служи за кратак опис или апстракт документа. Умеће се у PDF приликом изласка</translation>
    </message>
    <message>
        <source>The topic of the content of the document.
This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</source>
        <translation type="obsolete">Тема садржаја документа.
Ово поље служи за кључне речи документа које желите да уметнете у PDF, да би побољшали индексирање и претрагу PDF фајлова</translation>
    </message>
    <message>
        <source>A person or organisation responsible for making the document available</source>
        <translation>Особа или организација одговорни за издавање документа</translation>
    </message>
    <message>
        <source>A person or organisation responsible for making contributions to the content of the document</source>
        <translation>Особа или организација одговорни за допринос садржају документа</translation>
    </message>
    <message>
        <source>A date associated with an event in the life cycle of the document, in YYYY-MM-DD format, as per ISO 8601</source>
        <translation>Датум повезан са неким догађајем у животном циклусу документа, у ГГГГ-ММ-ДД формату, као по ISO 8601</translation>
    </message>
    <message>
        <source>The nature or genre of the content of the document, eg. categories, functions, genres, etc</source>
        <translation>Природа или жанр садржаја документа, нпр. категорије, функције, жанрови, итд.</translation>
    </message>
    <message>
        <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting.
RFC2045,RFC2046 for MIME types are also useful here</source>
        <translation type="obsolete">Физичка или дигитална манифестација документа. Врста медија и димензије не би ничему служили.
RFC2045,RFC2046 за MIME врсте су такође корисни овде</translation>
    </message>
    <message>
        <source>An unambiguous reference to the document within a given context such as ISBN or URI</source>
        <translation>Прецизна референца на документ у оквиру датог контекста као што је ISBN 
или URI</translation>
    </message>
    <message>
        <source>A reference to a document from which the present document is derived, eg. ISBN or URI</source>
        <translation>Референца на документ из кога је тренутни документ изведен, нпр. 
ISBN или URI</translation>
    </message>
    <message>
        <source>The language in which the content of the document is written, usually a ISO-639 language code
optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
        <translation type="obsolete">Језик којим је написан садржај документа, обично ISO-
639 језички код
коме опционо претходи цртица и ISO-3166 код земље, нпр. en-GB, fr-
CH</translation>
    </message>
    <message>
        <source>A reference to a related document, possibly using a formal identifier such as a ISBN or URI</source>
        <translation>Референца на повезани документ, вероватно коришћењем формалног идентификатора као што је ISBN или URI</translation>
    </message>
    <message>
        <source>The extent or scope of the content of the document, possibly including location, time and jurisdiction ranges</source>
        <translation>Степен или делокруг садржаја документа, вероватно укључујући место, време и опсеге надлежности</translation>
    </message>
    <message>
        <source>Information about rights held in and over the document, eg. copyright, patent or trademark</source>
        <translation>Информације о правима у и над документом, нпр. copyright, патент или бренд</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Documen&amp;t</source>
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
        <source>&lt;b&gt;Name:&lt;/b&gt; Optional name for section eg. Index&lt;br/&gt;&lt;b&gt;Shown:&lt;/b&gt; Select to show the page numbers in this section if there is one or more text frames setup to do so.&lt;br/&gt;&lt;b&gt;From:&lt;/b&gt; The page index for this section to start at.&lt;br/&gt;&lt;b&gt;To:&lt;/b&gt; The page index for this section to stop at.&lt;br/&gt;&lt;b&gt;Style:&lt;/b&gt; Select the page number style to be used.&lt;br/&gt;&lt;b&gt;Start:&lt;/b&gt; The index within the Style&apos;s range to star at. Eg. If Start=2 and Style=a,b,c, ..., the numbers will begin at b. For the first section in the document this replaces the older First Page Number in the new file window.</source>
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
        <translation type="unfinished">Име</translation>
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
        <translation type="unfinished">Стил</translation>
    </message>
    <message>
        <source>Start</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="unfinished">&amp;Додај</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">&amp;Обриши</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shown</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DocumentItemAttributes</name>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
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
        <source>Text Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image Frames</source>
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
        <source>String</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="obsolete">Име</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Врста</translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="obsolete">Вредност</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="obsolete">&amp;Додај</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="obsolete">&amp;Копирај</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Обриши</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="obsolete">Оч&amp;исти</translation>
    </message>
    <message>
        <source>None</source>
        <comment>relationship</comment>
        <translation type="unfinished">Ниједан</translation>
    </message>
    <message>
        <source>None</source>
        <comment>auto add</comment>
        <translation type="unfinished">Ниједан</translation>
    </message>
    <message>
        <source>None</source>
        <comment>types</comment>
        <translation type="unfinished">Ниједан</translation>
    </message>
    <message>
        <source>Real Number</source>
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
        <translation type="unfinished">Име</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished">Врста</translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="unfinished">Вредност</translation>
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
        <translation type="unfinished">&amp;Додај</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished">&amp;Копирај</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">&amp;Обриши</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished">Оч&amp;исти</translation>
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
        <translation>Подеси штампач</translation>
    </message>
    <message>
        <source>Print Destination</source>
        <translation>Одредиште за штампу</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Фајл</translation>
    </message>
    <message>
        <source>&amp;Options...</source>
        <translation>&amp;Опције...</translation>
    </message>
    <message>
        <source>&amp;File:</source>
        <translation>&amp;Фајл:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>И&amp;змени...</translation>
    </message>
    <message>
        <source>A&amp;lternative Printer Command</source>
        <translation>А&amp;лтернативна наредба штампача</translation>
    </message>
    <message>
        <source>Use an alternative print manager, such as kprinter or gtklp,
to utilize additional printing options</source>
        <translation type="obsolete">Користи или до</translation>
    </message>
    <message>
        <source>Co&amp;mmand:</source>
        <translation>&amp;Наредба:</translation>
    </message>
    <message>
        <source>Range</source>
        <translation>Опсег</translation>
    </message>
    <message>
        <source>Print &amp;All</source>
        <translation>Штампај &amp;све</translation>
    </message>
    <message>
        <source>Print Current Pa&amp;ge</source>
        <translation>Штампај текућу стр&amp;аницу</translation>
    </message>
    <message>
        <source>Print &amp;Range</source>
        <translation>&amp;Опсег штампања</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Унесите листу обележја раздвојених зарезима где
обележје може бити * за све странице, 1-5 за
опсег страница или број једне странице.</translation>
    </message>
    <message>
        <source>N&amp;umber of Copies:</source>
        <translation>Б&amp;рој копија:</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Опције</translation>
    </message>
    <message>
        <source>Print &amp;Normal</source>
        <translation type="obsolete">Штампај &amp;нормално</translation>
    </message>
    <message>
        <source>Print &amp;Separations</source>
        <translation type="obsolete">Штампај &amp;раздвајања</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Све</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation>Цијан</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation>Магента</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation>Жута</translation>
    </message>
    <message>
        <source>Black</source>
        <translation>Црна</translation>
    </message>
    <message>
        <source>Pr&amp;int In Color If Available</source>
        <translation type="obsolete">Шт&amp;ампај у боји ако је доступно</translation>
    </message>
    <message>
        <source>Print In Gra&amp;yscale</source>
        <translation type="obsolete">Штампај у &amp;сивим тоновима</translation>
    </message>
    <message>
        <source>Ad&amp;vanced Options...</source>
        <translation type="obsolete">&amp;Напредне опције...</translation>
    </message>
    <message>
        <source>&amp;Print</source>
        <translation>&amp;Штампај</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Сними као</translation>
    </message>
    <message>
        <source>Postscript-Files (*.ps);;All Files (*)</source>
        <translation type="obsolete">Postscript-фајлови (*.ps);;Сви фајлови (*)</translation>
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
        <source>Page</source>
        <translation type="unfinished">Страница</translation>
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
        <source>Color</source>
        <translation type="unfinished">Боја</translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Advanced Options</source>
        <translation type="unfinished">Напредне опције</translation>
    </message>
    <message>
        <source>Preview...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sets the PostScript Level.
 Setting to Level 1 or 2 can create huge files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostScript Files (*.ps);;All Files (*)</source>
        <translation type="unfinished"></translation>
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
        <source>Do not show objects outside the margins on the printed page or exported file</source>
        <translation type="obsolete">Немој да приказујеш објекте изван маргина на одштампаној страници или извезеном фајлу</translation>
    </message>
    <message>
        <source>Failed to retrieve printer settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Force Overprint Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables global Overprint Mode for this document, overrides object settings</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>EPSPlug</name>
    <message>
        <source>Importing File:
%1
failed!</source>
        <translation>Увожење фајла: 
%1 
није успело!</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation>Фатална грешка</translation>
    </message>
    <message>
        <source>Error</source>
        <translation type="unfinished">Грешка</translation>
    </message>
    <message>
        <source>Importing PostScript</source>
        <translation type="unfinished"></translation>
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
</context>
<context>
    <name>EditMacroDialog</name>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+O</translation>
    </message>
</context>
<context>
    <name>EditStyle</name>
    <message>
        <source>Edit Style</source>
        <translation>Уреди стил</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Име:</translation>
    </message>
    <message>
        <source>Character</source>
        <translation>Знак</translation>
    </message>
    <message>
        <source>&amp;Font:</source>
        <translation type="obsolete">&amp;Фонт:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> тач.</translation>
    </message>
    <message>
        <source>Si&amp;ze:</source>
        <translation type="obsolete">&amp;Величина:</translation>
    </message>
    <message>
        <source>Effect:</source>
        <translation type="obsolete">Ефекат:</translation>
    </message>
    <message>
        <source>&amp;Alignment:</source>
        <translation type="obsolete">&amp;Поравнање:</translation>
    </message>
    <message>
        <source>&amp;Drop Caps</source>
        <translation type="obsolete">&amp;Испусти велика слова</translation>
    </message>
    <message>
        <source>&amp;Lines:</source>
        <translation>&amp;Линије:</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation type="obsolete">Боја за поп&amp;уњавање:</translation>
    </message>
    <message>
        <source>St&amp;roke Color:</source>
        <translation type="obsolete">Боја за црт&amp;ање:</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source>Vertical Spaces</source>
        <translation type="obsolete">Усправни размаци</translation>
    </message>
    <message>
        <source>Adjust to Baseline &amp;Grid</source>
        <translation type="obsolete">Прилагоди основној &amp;мрежи</translation>
    </message>
    <message>
        <source>Line &amp;Spacing:</source>
        <translation type="obsolete">&amp;Проред:</translation>
    </message>
    <message>
        <source>Abo&amp;ve:</source>
        <translation type="obsolete">Изн&amp;ад:</translation>
    </message>
    <message>
        <source>&amp;Below:</source>
        <translation type="obsolete">&amp;Испод:</translation>
    </message>
    <message>
        <source>Tabulators and Indentation</source>
        <translation>Табулатори и увлачење</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Name of your paragraph style</source>
        <translation>Име Вашег стила пасуса</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation>Фонт изабраног текста или објекта</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Величина фонта</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Боја попуњеног текста</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Боја текста</translation>
    </message>
    <message>
        <source>Provides an oversized first letter for a paragraph. Used for stylistic effect</source>
        <translation type="obsolete">Обезбеђује увеличано прво слово за пасус. Користи се ради стилског ефекта</translation>
    </message>
    <message>
        <source>Determines the overall height, in line numbers, of the Drop Caps</source>
        <translation>Утврђује свеукупну висину, бројеве у низу, испуштених великих слова</translation>
    </message>
    <message>
        <source>Align text to baseline grid</source>
        <translation type="obsolete">Поравнај текст са основном мрежом</translation>
    </message>
    <message>
        <source>Spacing above the paragraph</source>
        <translation>Проред изнад пасуса</translation>
    </message>
    <message>
        <source>Spacing below the paragraph</source>
        <translation>Проред испод пасуса</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation>Проред</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Name of the Style is not unique</source>
        <translation type="obsolete">Име стила није јединствено</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">У реду</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Distances</source>
        <translation type="unfinished">Удаљеност</translation>
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
        <source>Distance from Text:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preview of the Paragraph Style</source>
        <translation type="unfinished"></translation>
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
        <source>Name of the style is not unique</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="unfinished">Позадина</translation>
    </message>
    <message>
        <source>Select for easier reading of light coloured text styles</source>
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
        <source>Click to select the line spacing mode</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Editor</name>
    <message>
        <source>Editor</source>
        <translation>Уређивач</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Нови</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Отвори...</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Сними &amp;као...</translation>
    </message>
    <message>
        <source>&amp;Save and Exit</source>
        <translation>&amp;Сними и изађи</translation>
    </message>
    <message>
        <source>&amp;Exit without Saving</source>
        <translation>&amp;Изађи без снимања</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Опозови</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>Поно&amp;ви</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>&amp;Исеци</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Копирај</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Пренеси</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>Оч&amp;исти</translation>
    </message>
    <message>
        <source>&amp;Get Field Names</source>
        <translation>&amp;Добави имена поља</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Фајл</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Уреди</translation>
    </message>
    <message>
        <source>Javascripts (*.js);;All Files (*)</source>
        <translation type="obsolete">Javascripts (*.js);;Сви фајлови (*)</translation>
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
        <translation type="unfinished">Боја:</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation type="unfinished">Сенка:</translation>
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
        <source>Contrast</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invert</source>
        <translation type="unfinished">Инвертуј</translation>
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
        <translation type="unfinished">У реду</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Поништи</translation>
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
    <name>ExportForm</name>
    <message>
        <source>Choose a Export Directory</source>
        <translation>Изаберите директоријум за извоз</translation>
    </message>
    <message>
        <source>Export as Image(s)</source>
        <translation>Извези као слику(е)</translation>
    </message>
    <message>
        <source>&amp;Export to Directory:</source>
        <translation>&amp;Извези у директоријум:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>И&amp;змени...</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Опције</translation>
    </message>
    <message>
        <source>Image &amp;Type:</source>
        <translation>&amp;Врста слике:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation>&amp;Квалитет:</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation>&amp;Резолуција:</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation> тпи</translation>
    </message>
    <message>
        <source>Range</source>
        <translation>Опсег</translation>
    </message>
    <message>
        <source>&amp;Current page</source>
        <translation>&amp;Текућа страница</translation>
    </message>
    <message>
        <source>&amp;All pages</source>
        <translation>&amp;Све странице</translation>
    </message>
    <message>
        <source>&amp;Range</source>
        <translation>&amp;Опсег</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>C</source>
        <translation>C</translation>
    </message>
    <message>
        <source>Export a range of pages</source>
        <translation>Извези опсег страница</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Унесите листу обележја раздвојених зарезима где
обележје може бити * за све странице, 1-5 за
опсег страница или број једне странице.</translation>
    </message>
    <message>
        <source>Export all pages</source>
        <translation>Извези све странице</translation>
    </message>
    <message>
        <source>Export only the current page</source>
        <translation>Извези само текућу страницу</translation>
    </message>
    <message>
        <source>Resolution of the Images
Use 72 dpi for Images intended for the Screen</source>
        <translation>Резолуција слика
Користи 72 тпи за слике предвиђене за приказивање на екрану</translation>
    </message>
    <message>
        <source>The quality of your images - 100% is the best, 1% the lowest quality</source>
        <translation>Квалитет Ваших слика - 100\\% је најбољи, 1\\% је најлошији</translation>
    </message>
    <message>
        <source>Available export formats</source>
        <translation>Доступни формати за извоз</translation>
    </message>
    <message>
        <source>The output directory - the place to store your images.
Name of the export file will be &apos;documentname-pagenumber.filetype&apos;</source>
        <translation>Излазни директоријум - место за смештање Ваших слика.
Име извезеног фајла ће бити „имедокумента-бројстране.врстафајла“</translation>
    </message>
    <message>
        <source>Change the output directory</source>
        <translation>Промени излазни директоријум</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished">&amp;Величина:</translation>
    </message>
    <message>
        <source>Size of the images. 100% for no changes, 200% for two times larger etc.</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">Нормално</translation>
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
        <translation type="unfinished">Засићење</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished">Боја</translation>
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
        <translation type="unfinished">Растварање</translation>
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
        <translation type="unfinished">Непрозирност:</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Име</translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="unfinished">Позадина</translation>
    </message>
    <message>
        <source>Layers</source>
        <translation type="unfinished">Слојеви</translation>
    </message>
    <message>
        <source>Don&apos;t use any Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paths</source>
        <translation type="unfinished">Путање</translation>
    </message>
</context>
<context>
    <name>FDialogPreview</name>
    <message>
        <source>Size:</source>
        <translation>Величина:</translation>
    </message>
    <message>
        <source>Title:</source>
        <translation>Наслов:</translation>
    </message>
    <message>
        <source>No Title</source>
        <translation>Без наслова</translation>
    </message>
    <message>
        <source>Author:</source>
        <translation>Аутор:</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Непознат</translation>
    </message>
    <message>
        <source>Scribus Document</source>
        <translation>Scribus документ</translation>
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
        <source>CMYK</source>
        <translation type="unfinished">CMYK</translation>
    </message>
    <message>
        <source>RGB</source>
        <translation type="unfinished">RGB</translation>
    </message>
    <message>
        <source>Colorspace:</source>
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
</context>
<context>
    <name>Farbmanager</name>
    <message>
        <source>Colors</source>
        <translation type="obsolete">Боје</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="obsolete">&amp;Примени</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;Нови</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="obsolete">&amp;Уреди</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="obsolete">Д&amp;уплирај</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Обриши</translation>
    </message>
    <message>
        <source>&amp;Remove Unused</source>
        <translation type="obsolete">&amp;Уклони некоришћено</translation>
    </message>
    <message>
        <source>Color Sets</source>
        <translation type="obsolete">Скупови боја</translation>
    </message>
    <message>
        <source>Current Color Set:</source>
        <translation type="obsolete">Текући скуп боја:</translation>
    </message>
    <message>
        <source>&amp;Save Color Set</source>
        <translation type="obsolete">&amp;Сними скуп боја</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Choose a color set to load</source>
        <translation type="obsolete">Изаберите скуп боја за учитавање</translation>
    </message>
    <message>
        <source>Save the current color set</source>
        <translation type="obsolete">Сними текући скуп боја</translation>
    </message>
    <message>
        <source>Remove unused colors from current document&apos;s color set</source>
        <translation type="obsolete">Уклони некоришћене боје из скупа боја текућег документа</translation>
    </message>
    <message>
        <source>Append colors to the current set from an existing document</source>
        <translation type="obsolete">Примени боје на текући скуп из постојећег документа</translation>
    </message>
    <message>
        <source>Create a new color within the current set</source>
        <translation type="obsolete">Направи нову боју у оквиру текућег скупа</translation>
    </message>
    <message>
        <source>Edit the currently selected color</source>
        <translation type="obsolete">Уреди тренутно изабрану боју</translation>
    </message>
    <message>
        <source>Make a copy of the currently selected color</source>
        <translation type="obsolete">Направи копију тренутно изабране боје</translation>
    </message>
    <message>
        <source>Delete the currently selected color</source>
        <translation type="obsolete">Обриши тренутно изабрану боју</translation>
    </message>
    <message>
        <source>Make the current colorset the default color set</source>
        <translation type="obsolete">Учини да тренутни скуп боја буде подразумевани</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="obsolete">&amp;Име:</translation>
    </message>
    <message>
        <source>Choose a Name</source>
        <translation type="obsolete">Изаберите име</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="obsolete">Отвори</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="obsolete">Документи (*.sla *.sla.gz *.scd *.scd.gz);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="obsolete">Документи (*.sla *.scd);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="obsolete">Копија од %1</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation type="obsolete">Нова боја</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="obsolete">&amp;Увези</translation>
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
        <source>Global Font Settings</source>
        <translation type="obsolete">Глобалне поставке фонтова</translation>
    </message>
    <message>
        <source>Available Fonts</source>
        <translation>Доступни фонтови</translation>
    </message>
    <message>
        <source>Font Substitutions</source>
        <translation>Замене за фонтове</translation>
    </message>
    <message>
        <source>Additional Paths</source>
        <translation>Додатне путање</translation>
    </message>
    <message>
        <source>Postscript</source>
        <translation type="obsolete">Postscript</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="obsolete">Да</translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation>Име фонта</translation>
    </message>
    <message>
        <source>Use Font</source>
        <translation type="obsolete">Користи фонт</translation>
    </message>
    <message>
        <source>Embed in:</source>
        <translation type="obsolete">Уметни у:</translation>
    </message>
    <message>
        <source>Subset</source>
        <translation type="obsolete">Подсет</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Врста</translation>
    </message>
    <message>
        <source>Path to Font File</source>
        <translation type="obsolete">Путања до фајла фонта</translation>
    </message>
    <message>
        <source>&amp;Available Fonts</source>
        <translation>&amp;Доступни фонтови</translation>
    </message>
    <message>
        <source>Replacement</source>
        <translation>Замена</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Обриши</translation>
    </message>
    <message>
        <source>Font &amp;Substitutions</source>
        <translation>&amp;Замене за фонтове</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>И&amp;змени...</translation>
    </message>
    <message>
        <source>A&amp;dd...</source>
        <translation>&amp;Додај...</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Уклони</translation>
    </message>
    <message>
        <source>Additional &amp;Paths</source>
        <translation>Додатне &amp;путање</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Изаберите директоријум</translation>
    </message>
    <message>
        <source>Font Name</source>
        <comment>font preview</comment>
        <translation type="unfinished">Име фонта</translation>
    </message>
    <message>
        <source>Use Font</source>
        <comment>font preview</comment>
        <translation type="unfinished">Користи фонт</translation>
    </message>
    <message>
        <source>Embed in:</source>
        <comment>font preview</comment>
        <translation type="obsolete">Уметни у:</translation>
    </message>
    <message>
        <source>Subset</source>
        <comment>font preview</comment>
        <translation type="unfinished">Подсет</translation>
    </message>
    <message>
        <source>Path to Font File</source>
        <comment>font preview</comment>
        <translation type="unfinished">Путања до фајла фонта</translation>
    </message>
    <message>
        <source>Font search paths can only be set in Preferences, and only when there is no document currently open. Close any open documents, then use Edit-&gt;Settings to change the font search path.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Embed in PostScript</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FontPreview</name>
    <message>
        <source>Fonts Preview</source>
        <translation type="obsolete">Преглед фонтова</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+O</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="obsolete">Плетене свилене пиџаме замењене за плави кварц</translation>
    </message>
    <message>
        <source>Font Name</source>
        <comment>font preview</comment>
        <translation type="obsolete">Име фонта</translation>
    </message>
    <message>
        <source>Type</source>
        <comment>font preview</comment>
        <translation type="obsolete">Врста</translation>
    </message>
    <message>
        <source>Subset</source>
        <comment>font preview</comment>
        <translation type="obsolete">Подсет</translation>
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
    <message>
        <source>Fonts Preview</source>
        <comment>font preview</comment>
        <translation type="obsolete">Преглед фонтова</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <comment>font preview</comment>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <comment>font preview</comment>
        <translation type="obsolete">Alt+O</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <comment>font preview</comment>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <comment>font preview</comment>
        <translation type="obsolete">Alt+C</translation>
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
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <comment>font preview</comment>
        <translation type="unfinished">Плетене свилене пиџаме замењене за плави кварц</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation type="obsolete">&amp;Тражи</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <comment>font preview</comment>
        <translation type="obsolete">&amp;Затвори</translation>
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
        <source>&amp;Append</source>
        <translation type="obsolete">&amp;Примени</translation>
    </message>
    <message>
        <source>Sample will be shown after key release</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">Преглед фонтова</translation>
    </message>
    <message>
        <source>&amp;Quick Search:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation type="unfinished">&amp;Тражи</translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation type="unfinished">Име фонта</translation>
    </message>
    <message>
        <source>Doc</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished">Врста</translation>
    </message>
    <message>
        <source>Subset</source>
        <translation type="unfinished">Подсет</translation>
    </message>
    <message>
        <source>Access</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation type="unfinished">Величина &amp;фонта:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished">Текст</translation>
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
        <translation type="unfinished">&amp;Примени</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">&amp;Затвори</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
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
        <source>OK</source>
        <translation type="obsolete">У реду</translation>
    </message>
    <message>
        <source>This document contains some fonts that are not installed on your system, please choose a suitable replacement for them. Cancel will stop the document from loading.</source>
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
        <source>Position:</source>
        <translation>Позиција:</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Here you can add, change or remove Color-Stops.</source>
        <translation type="obsolete">Овде можете додавати, мењати или уклањати зауставне боје.</translation>
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
        <translation type="obsolete">Управљање водиљама</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> тач.</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Horizontal Guides</source>
        <translation type="obsolete">Водоравне водиље</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation type="obsolete">&amp;Y Поз:</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="obsolete">&amp;Додај</translation>
    </message>
    <message>
        <source>D&amp;elete</source>
        <translation type="obsolete">&amp;Обриши</translation>
    </message>
    <message>
        <source>Vertical Guides</source>
        <translation type="obsolete">Усправне водиље</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation type="obsolete">&amp;X Поз:</translation>
    </message>
    <message>
        <source>A&amp;dd</source>
        <translation type="obsolete">&amp;Додај</translation>
    </message>
    <message>
        <source>De&amp;lete</source>
        <translation type="obsolete">&amp;Обриши</translation>
    </message>
    <message>
        <source>&amp;Lock Guides</source>
        <translation type="obsolete">&amp;Закључај водиље</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation type="obsolete">&amp;Страна</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Затвори</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation type="obsolete">Преглед</translation>
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
        <translation type="unfinished">Управљање водиљама</translation>
    </message>
    <message>
        <source>&amp;Standard</source>
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
        <translation type="unfinished">&amp;Додај</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>D&amp;elete</source>
        <translation type="unfinished">&amp;Обриши</translation>
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
        <translation type="unfinished">&amp;Додај</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>De&amp;lete</source>
        <translation type="unfinished">&amp;Обриши</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Lock Guides</source>
        <translation type="unfinished">&amp;Закључај водиље</translation>
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
        <source>A&amp;utomatic</source>
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
        <source>Refer To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation type="unfinished">&amp;Страна</translation>
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
        <source>&amp;Misc</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete &amp;Page Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete all guides from the current page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete &amp;Document guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete all guides from the current document</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>HelpBrowser</name>
    <message>
        <source>Sorry, no manual available! Please see: http://docs.scribus.net for updated docs
and www.scribus.net for downloads.</source>
        <translation>Извините, нема доступног упутства! Молим Вас погледајте: http://docs.scribus.net за освежене документе
и www.scribus.net за преузимање.</translation>
    </message>
    <message>
        <source>Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Link</source>
        <translation type="unfinished">Веза</translation>
    </message>
    <message>
        <source>Scribus Online Help</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation type="unfinished">&amp;Тражи</translation>
    </message>
    <message>
        <source>Se&amp;arch</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished">&amp;Нови</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">&amp;Обриши</translation>
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
        <translation type="unfinished">Ш&amp;тампај...</translation>
    </message>
    <message>
        <source>E&amp;xit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Searching is case unsensitive</source>
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
    <message>
        <source>&amp;File</source>
        <translation type="unfinished">&amp;Фајл</translation>
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
        <translation type="unfinished">&amp;Уреди</translation>
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
        <translation type="unfinished">&amp;Маркери</translation>
    </message>
    <message>
        <source>Relevance</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>HyAsk</name>
    <message>
        <source>Possible Hyphenation</source>
        <translation>Могуће спајање цртицом</translation>
    </message>
    <message>
        <source>Accept</source>
        <translation>Прихвати</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>Прескочи</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Поништи</translation>
    </message>
</context>
<context>
    <name>HySettings</name>
    <message>
        <source>Hyphenator Settings</source>
        <translation type="obsolete">Поставке спајања цртицом</translation>
    </message>
    <message>
        <source>&amp;Hyphenation Suggestions</source>
        <translation>Предлози за &amp;спајање цртицом</translation>
    </message>
    <message>
        <source>Hyphenate Text Automatically &amp;During Typing</source>
        <translation>Аутоматски спајај текст цртицама &amp;приликом куцања</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Језик:</translation>
    </message>
    <message>
        <source>&amp;Smallest Word:</source>
        <translation>&amp;Најмања реч:</translation>
    </message>
    <message>
        <source>Consecutive Hyphenations &amp;Allowed:</source>
        <translation>&amp;Дозвољена су узастопна спајања цртицом:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</source>
        <translation>Појавиће се прозор који приказује сва могућа спајања цртицом за сваку реч када користите опцију „Екстра&gt;Спајај текст цртицом“.</translation>
    </message>
    <message>
        <source>Enables automatic hyphenation of your text while typing.</source>
        <translation>Укључује аутоматско спајање текста цртицама у току куцања.</translation>
    </message>
    <message>
        <source>Length of the smallest word to be hyphenated.</source>
        <translation>Дужина најмање речи која се може спајати цртицом.</translation>
    </message>
    <message>
        <source>Maximum number of Hyphenations following each other.
A value of 0 means unlimited hyphenations.</source>
        <translation>Максималан број спајања цртицом који могу ићи једно за другим.
Вредност 0 означава неограничено спајање цртицом.</translation>
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
        <source>Yes</source>
        <translation type="unfinished">Да</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="unfinished">Не</translation>
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
</context>
<context>
    <name>ImportPSPlugin</name>
    <message>
        <source>Import &amp;EPS/PS...</source>
        <translation type="unfinished">Увези &amp;EPS/PS...</translation>
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
        <translation>Убаци страну</translation>
    </message>
    <message>
        <source>&amp;Inserting</source>
        <translation type="obsolete">&amp;Умећем</translation>
    </message>
    <message>
        <source>Page(s)</source>
        <translation>Страна(е)</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation>пре странице</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation>после странице</translation>
    </message>
    <message>
        <source>at End</source>
        <translation>на крају</translation>
    </message>
    <message>
        <source>Inserting</source>
        <translation type="obsolete">Умећем</translation>
    </message>
    <message>
        <source>&amp;Template (Left Page):</source>
        <translation type="obsolete">&amp;Шаблон (Лева страна):</translation>
    </message>
    <message>
        <source>&amp;Template:</source>
        <translation type="obsolete">Ша&amp;блон:</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Нормално</translation>
    </message>
    <message>
        <source>Template (Right Page):</source>
        <translation type="obsolete">Шаблон (Десна страна):</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="unfinished">Уметн&amp;и</translation>
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
        <translation type="unfinished">Величина папира</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished">&amp;Величина:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">Произвољно</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished">Усм&amp;ерење:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished">Усправно</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished">Водоравно</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished">Ш&amp;ирина:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished">&amp;Висина:</translation>
    </message>
    <message>
        <source>Move Objects with their Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal Middle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal Right</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>InsertAFrame</name>
    <message>
        <source>Open</source>
        <translation type="unfinished">Отвори</translation>
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
        <translation type="unfinished">&amp;Текстуални оквир</translation>
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
        <translation type="unfinished">Полигон</translation>
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
        <translation type="unfinished">X:</translation>
    </message>
    <message>
        <source>Y:</source>
        <translation type="unfinished">Y:</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation type="unfinished">&amp;Величина</translation>
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
        <translation type="unfinished">Висина:</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation type="unfinished">Ширина:</translation>
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
        <source>&amp;OK</source>
        <translation type="unfinished">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">&amp;Откажи</translation>
    </message>
    <message>
        <source>Link Created Frames</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>InsertTable</name>
    <message>
        <source>Insert Table</source>
        <translation>Убаци табелу</translation>
    </message>
    <message>
        <source>Number of Rows:</source>
        <translation type="obsolete">Број редова:</translation>
    </message>
    <message>
        <source>Number of Columns:</source>
        <translation type="obsolete">Број колона:</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">У реду</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Поништи</translation>
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
        <translation>Уређивање JavaScript-а</translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation>&amp;Уреди...</translation>
    </message>
    <message>
        <source>&amp;Add...</source>
        <translation>&amp;Додај...</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Обриши</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Затвори</translation>
    </message>
    <message>
        <source>&amp;New Script:</source>
        <translation>&amp;Нови скрипта:</translation>
    </message>
    <message>
        <source>New Script</source>
        <translation>Нова скрипта</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Do you really want to delete this Script?</source>
        <translation type="obsolete">Да ли стварно желите да обришете ову скрипту?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Не</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Да</translation>
    </message>
    <message>
        <source>Do you really want to delete this script?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Adds a new Script, predefines a function with the same name. If you want to use this script as an &quot;Open Action&quot; script be sure not to change the name of the function.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>KeyManager</name>
    <message>
        <source>Manage Keyboard Shortcuts</source>
        <translation type="obsolete">Управљање пречицама на тастатури</translation>
    </message>
    <message>
        <source>Action</source>
        <translation type="obsolete">Акција</translation>
    </message>
    <message>
        <source>Current Key</source>
        <translation type="obsolete">Текуће дугме</translation>
    </message>
    <message>
        <source>Select a Key for this Action</source>
        <translation type="obsolete">Изаберите дугме за ову акцију</translation>
    </message>
    <message>
        <source>&amp;No Key</source>
        <translation type="obsolete">&amp;Нема дугмета</translation>
    </message>
    <message>
        <source>&amp;User Defined Key</source>
        <translation type="obsolete">&amp;Дугме дефинисано од стране корисника</translation>
    </message>
    <message>
        <source>ALT+SHIFT+T</source>
        <translation type="obsolete">ALT+SHIFT+T</translation>
    </message>
    <message>
        <source>Set &amp;Key</source>
        <translation type="obsolete">Постави &amp;дугме</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
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
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>This Key Sequence is already in use</source>
        <translation type="obsolete">Та комбинација дугмади је већ у употреби</translation>
    </message>
</context>
<context>
    <name>LayerPalette</name>
    <message>
        <source>Layers</source>
        <translation>Слојеви</translation>
    </message>
    <message>
        <source>Add a new Layer</source>
        <translation type="obsolete">Додај нови слој</translation>
    </message>
    <message>
        <source>Delete Layer</source>
        <translation>Обриши слој</translation>
    </message>
    <message>
        <source>Raise Layer</source>
        <translation type="obsolete">Подигни слој</translation>
    </message>
    <message>
        <source>Lower Layer</source>
        <translation type="obsolete">Спусти слој</translation>
    </message>
    <message>
        <source>New Layer</source>
        <translation type="obsolete">Нови слој</translation>
    </message>
    <message>
        <source>Do you want to delete all Objects on this Layer too?</source>
        <translation type="obsolete">Да ли такође желите да обришете све објекте на овом слоју?</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Име</translation>
    </message>
    <message>
        <source>Do you want to delete all objects on this layer too?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add a new layer</source>
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
        <source>Opacity:</source>
        <translation type="unfinished">Непрозирност:</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Blend Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">Нормално</translation>
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
        <source>Color Dodge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Burn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exclusion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished">Засићење</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished">Боја</translation>
    </message>
    <message>
        <source>Luminosity</source>
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
    <message>
        <source>Duplicates the current layer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LineFormate</name>
    <message>
        <source>Edit Line Styles</source>
        <translation>Уређивање стилова линија</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="obsolete">&amp;Примени</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Нови</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Уреди</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>Д&amp;упликуј</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Обриши</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Сними</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Копија од %1</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation>Нови стил</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation type="obsolete">Да ли стварно желите да обришете овај стил?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Не</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Да</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Отвори</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Документи (*.sla *.sla.gz *.scd *.scd.gz);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Документи (*.sla *.scd);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished">&amp;Увези</translation>
    </message>
    <message>
        <source>Do you really want to delete this style?</source>
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
        <translation type="unfinished">Ширина линије:</translation>
    </message>
</context>
<context>
    <name>LineStyleWidget</name>
    <message>
        <source> pt</source>
        <translation type="unfinished"> тач.</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation type="unfinished">Раван поклопац</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation type="unfinished">Квадратни поклопац</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation type="unfinished">Кружни поклопац</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation type="unfinished">Угаони спој</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation type="unfinished">Коси спој</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation type="unfinished">Кружни спој</translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation type="obsolete">Непрекидна линија</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation type="obsolete">Испрекидана линија</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation type="obsolete">Тачкаста линија</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation type="obsolete">Црта-тачка</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation type="obsolete">Црта-тачка-тачка</translation>
    </message>
</context>
<context>
    <name>LoadSavePlugin</name>
    <message>
        <source>All Files (*)</source>
        <translation type="unfinished">Сви фајлови (*)</translation>
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
        <translation type="unfinished">Аутор:</translation>
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
        <translation type="unfinished">Alt+O</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
</context>
<context>
    <name>MSpinBox</name>
    <message>
        <source> pt</source>
        <translation type="obsolete"> тач.</translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source>mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source>in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source>p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
</context>
<context>
    <name>ManageMacrosDialog</name>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;Нови</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+O</translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="obsolete">Опис</translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation type="obsolete">&amp;Уреди...</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Обриши</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="obsolete">&amp;Увези</translation>
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
        <translation type="unfinished">Величина папира</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished">&amp;Величина:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">Произвољно</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished">Усм&amp;ерење:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished">Усправно</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished">Водоравно</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished">Ш&amp;ирина:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished">&amp;Висина:</translation>
    </message>
    <message>
        <source>Move Objects with their Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type:</source>
        <translation type="unfinished">Врста:</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="unfinished">Водиље маргина</translation>
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
        <translation type="unfinished">Нормално</translation>
    </message>
</context>
<context>
    <name>MarginWidget</name>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="unfinished">&amp;Дно:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="unfinished">&amp;Врх:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="unfinished">&amp;Десно:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="unfinished">&amp;Лево:</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation type="unfinished">Растојање између водиље горње маргине и обода странице</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation type="unfinished">Растојање између водиље доње маргине и обода странице</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Растојање између водиље леве маргине и обода странице.
Ако је изабрано „Упоредне странице“, овај размак маргина се може користити за постизање исправних маргина за повезивање</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation type="unfinished">&amp;Унутра:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation type="unfinished">Спо&amp;ља:</translation>
    </message>
    <message>
        <source>Preset Layouts:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply the margin changes to all existing pages in the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page. If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page. If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
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
</context>
<context>
    <name>MasterPagesPalette</name>
    <message>
        <source>Edit Master Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Do you really want to delete this master page?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="unfinished">&amp;Не</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="unfinished">&amp;Да</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished">&amp;Име:</translation>
    </message>
    <message>
        <source>New Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="obsolete">Копија од %1</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished">Име:</translation>
    </message>
    <message>
        <source>New MasterPage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished">Копија #%1 од</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">Нормално</translation>
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
    <message>
        <source>Normal Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal Middle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal Right</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Mdup</name>
    <message>
        <source>Multiple Duplicate</source>
        <translation>Многоструки дупликат</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> тач.</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>&amp;Number of Copies:</source>
        <translation>&amp;Број копија:</translation>
    </message>
    <message>
        <source>&amp;Horizontal Shift:</source>
        <translation>&amp;Водоравна промена:</translation>
    </message>
    <message>
        <source>&amp;Vertical Shift:</source>
        <translation>&amp;Усправна промена:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
</context>
<context>
    <name>Measurements</name>
    <message>
        <source>Distances</source>
        <translation>Удаљеност</translation>
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
        <translation>Угао:</translation>
    </message>
    <message>
        <source>Length:</source>
        <translation>Дужина:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> тач.</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="unfinished">pt</translation>
    </message>
</context>
<context>
    <name>MenuTest</name>
    <message>
        <source>Script error</source>
        <translation type="obsolete">Грешка скрипте</translation>
    </message>
    <message>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation type="obsolete">Ако радите са званичном скриптом молим Вас пријавите грешку на &lt;a href=\&quot;http://bugs.scribus.net\&quot;&gt;bugs.scribus.net&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation type="obsolete">Ова порука је и у Вашем клипборду. Користите Ctrl+V да је пренесете у пратиоца грешака.</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation type="obsolete">Прикажи &amp;конзолу</translation>
    </message>
    <message>
        <source>Hide &amp;Console</source>
        <translation type="obsolete">Сакриј &amp;конзолу</translation>
    </message>
</context>
<context>
    <name>MergeDoc</name>
    <message>
        <source>Import Template</source>
        <translation type="obsolete">Увези шаблон</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation>Увези страницу(е)</translation>
    </message>
    <message>
        <source>From Document:</source>
        <translation type="obsolete">Из документа:</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation type="obsolete">Измени...</translation>
    </message>
    <message>
        <source>Import Page(s):</source>
        <translation type="obsolete">Увези страницу(е):</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="obsolete">Унесите листу обележја раздвојених зарезима где\n
обележје може бити * за све странице, 1-5 за\n
опсег страница или број једне странице.</translation>
    </message>
    <message>
        <source> from 0</source>
        <translation> из 0</translation>
    </message>
    <message>
        <source>Create Page(s)</source>
        <translation>Направи страницу(е)</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation type="obsolete">пре странице</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation type="obsolete">после странице</translation>
    </message>
    <message>
        <source>at End</source>
        <translation type="obsolete">на крају</translation>
    </message>
    <message>
        <source>Import</source>
        <translation type="obsolete">Увези</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Поништи</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Отвори</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Документи (*.sla *.sla.gz *.scd *.scd.gz);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Документи (*.sla *.scd);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source> from %1</source>
        <translation> из %1</translation>
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
        <translation type="unfinished">&amp;Увези</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Import Master Page</source>
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
</context>
<context>
    <name>MissingFont</name>
    <message>
        <source>Missing Font</source>
        <translation type="unfinished">Недостаје фонт</translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation type="unfinished">Фонт %1 није инсталиран.</translation>
    </message>
    <message>
        <source>Use</source>
        <translation type="unfinished">Користи</translation>
    </message>
    <message>
        <source>instead</source>
        <translation type="unfinished">уместо</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
</context>
<context>
    <name>ModeToolBar</name>
    <message>
        <source>Tools</source>
        <translation type="unfinished">Алати</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation type="unfinished">Својства...</translation>
    </message>
</context>
<context>
    <name>MovePages</name>
    <message>
        <source>Move Pages</source>
        <translation>Помери странице</translation>
    </message>
    <message>
        <source>Copy Page</source>
        <translation>Копирај страницу</translation>
    </message>
    <message>
        <source>Move Page(s):</source>
        <translation>Помери страницу(е):</translation>
    </message>
    <message>
        <source>to:</source>
        <translation type="obsolete">у:</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation type="obsolete">пре странице</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation type="obsolete">после странице</translation>
    </message>
    <message>
        <source>at End</source>
        <translation type="obsolete">на крају</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Move Page(s)</source>
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
        <source>To:</source>
        <translation type="unfinished">За:</translation>
    </message>
    <message>
        <source>Number of copies:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Mpalette</name>
    <message>
        <source>Properties</source>
        <translation>Својства</translation>
    </message>
    <message>
        <source>X, Y, &amp;Z</source>
        <translation>X, Y, &amp;Z</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>&amp;Облик</translation>
    </message>
    <message>
        <source>&amp;Text</source>
        <translation>&amp;Текст</translation>
    </message>
    <message>
        <source>&amp;Image</source>
        <translation>Сл&amp;ика</translation>
    </message>
    <message>
        <source>&amp;Line</source>
        <translation>&amp;Линија</translation>
    </message>
    <message>
        <source>&amp;Colors</source>
        <translation>&amp;Боје</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Име</translation>
    </message>
    <message>
        <source>Geometry</source>
        <translation>Геометрија</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> тач.</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>&amp;X Поз:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y Поз:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>Ш&amp;ирина:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Висина:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Ротација:</translation>
    </message>
    <message>
        <source>Basepoint:</source>
        <translation>Почетна тачка:</translation>
    </message>
    <message>
        <source>Level</source>
        <translation>Ниво</translation>
    </message>
    <message>
        <source>Shape:</source>
        <translation>Облик:</translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation>&amp;Уређивање облика...</translation>
    </message>
    <message>
        <source>R&amp;ound
Corners:</source>
        <translation>За&amp;обљени углови:</translation>
    </message>
    <message>
        <source>Distance of Text</source>
        <translation>Растојање текста</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>&amp;Колоне:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="obsolete">&amp;Процеп:</translation>
    </message>
    <message>
        <source>To&amp;p:</source>
        <translation>Вр&amp;х:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>&amp;Дно:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Лево:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>&amp;Десно:</translation>
    </message>
    <message>
        <source>T&amp;abulators...</source>
        <translation>Т&amp;абулатори...</translation>
    </message>
    <message>
        <source>Path Text Properties</source>
        <translation>Својства путање текста</translation>
    </message>
    <message>
        <source>Show Curve</source>
        <translation>Прикажи криву</translation>
    </message>
    <message>
        <source>Start Offset:</source>
        <translation>Покрени померај:</translation>
    </message>
    <message>
        <source>Distance from Curve:</source>
        <translation>Растојање од криве:</translation>
    </message>
    <message>
        <source>Text &amp;Flows Around Frame</source>
        <translation type="obsolete">Текст &amp;плута око оквира</translation>
    </message>
    <message>
        <source>Use &amp;Bounding Box</source>
        <translation>Користи кутија за &amp;везивање</translation>
    </message>
    <message>
        <source>&amp;Use Contour Line</source>
        <translation>&amp;Користи контуру</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation type="obsolete">Величина &amp;фонта:</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation type="obsolete">Сенка:</translation>
    </message>
    <message>
        <source>Custom Spacing</source>
        <translation type="obsolete">Произвољан проред</translation>
    </message>
    <message>
        <source>&amp;Kerning:</source>
        <translation type="obsolete">&amp;Кернинг:</translation>
    </message>
    <message>
        <source>L&amp;ine Spacing:</source>
        <translation type="obsolete">&amp;Проред:</translation>
    </message>
    <message>
        <source>St&amp;yle:</source>
        <translation>Ст&amp;ил:</translation>
    </message>
    <message>
        <source>Lan&amp;guage:</source>
        <translation type="obsolete">Је&amp;зик:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation>&amp;Слободно скалирање</translation>
    </message>
    <message>
        <source>X-Sc&amp;ale:</source>
        <translation>X Ска&amp;лирај:</translation>
    </message>
    <message>
        <source>Y-Scal&amp;e:</source>
        <translation>Y Ска&amp;лирај:</translation>
    </message>
    <message>
        <source>Scale &amp;To Frame Size</source>
        <translation>Скалирај &amp;до величине оквира</translation>
    </message>
    <message>
        <source>P&amp;roportional</source>
        <translation>Пр&amp;опорционалан</translation>
    </message>
    <message>
        <source>Input Profile:</source>
        <translation>Улазни профил:</translation>
    </message>
    <message>
        <source>Rendering Intent:</source>
        <translation>Намера рендеровања:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Перцептуално</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Релативна колорметрика</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Засићење</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Апсолутна колорметрика</translation>
    </message>
    <message>
        <source>Left Point</source>
        <translation>Лева тачка</translation>
    </message>
    <message>
        <source>End Points</source>
        <translation>Крајње тачке</translation>
    </message>
    <message>
        <source>&amp;Basepoint:</source>
        <translation>&amp;Основна тачка:</translation>
    </message>
    <message>
        <source>T&amp;ype of Line:</source>
        <translation>В&amp;рста линије:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation>&amp;Ширина линије:</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation>Угаони спој</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Коси спој</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation>Кружни спој</translation>
    </message>
    <message>
        <source>Ed&amp;ges:</source>
        <translation>Ив&amp;ице:</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>Раван поклопац</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation>Квадратни поклопац</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation>Кружни поклопац</translation>
    </message>
    <message>
        <source>&amp;Endings:</source>
        <translation>&amp;Завршеци:</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation>Нема стила</translation>
    </message>
    <message>
        <source>Cell Lines</source>
        <translation>Линије ћелије</translation>
    </message>
    <message>
        <source>Line at Top</source>
        <translation>Линија на врху</translation>
    </message>
    <message>
        <source>Line at the Left</source>
        <translation>Линија лево</translation>
    </message>
    <message>
        <source>Line at the Right </source>
        <translation>Линија десно</translation>
    </message>
    <message>
        <source>Line at Bottom</source>
        <translation>Линија на дну</translation>
    </message>
    <message>
        <source>Name of selected object</source>
        <translation>Име изабраног објекта</translation>
    </message>
    <message>
        <source>Horizontal position of current basepoint</source>
        <translation>Водоравни положај тренутне почетне тачке</translation>
    </message>
    <message>
        <source>Vertical position of current basepoint</source>
        <translation>Усправни положај тренутне почетне тачке</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>Ширина</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>Висина</translation>
    </message>
    <message>
        <source>Rotation of object at current basepoint</source>
        <translation>Ротација објекта у тренутној почетној тачки</translation>
    </message>
    <message>
        <source>Point from which measurements or rotation angles are referenced</source>
        <translation>Тачка од које се референцирају мере или углови ротације</translation>
    </message>
    <message>
        <source>Select top left for basepoint</source>
        <translation>Изабери врх лево за почетну тачку</translation>
    </message>
    <message>
        <source>Select top right for basepoint</source>
        <translation>Изабери врх десно за почетну тачку</translation>
    </message>
    <message>
        <source>Select bottom left for basepoint</source>
        <translation>Изабери дно лево за почетну тачку</translation>
    </message>
    <message>
        <source>Select bottom right for basepoint</source>
        <translation>Изабери дно десно за почетну тачку</translation>
    </message>
    <message>
        <source>Select center for basepoint</source>
        <translation>Изабери центар за почетну тачку</translation>
    </message>
    <message>
        <source>Flip Horizontal</source>
        <translation>Преврни водоравно</translation>
    </message>
    <message>
        <source>Flip Vertical</source>
        <translation>Преврни усправно</translation>
    </message>
    <message>
        <source>Move one level up</source>
        <translation>Помери за један ниво на горе</translation>
    </message>
    <message>
        <source>Move one level down</source>
        <translation>Помери за један ниво на доле</translation>
    </message>
    <message>
        <source>Move to front</source>
        <translation>Помери ка напред</translation>
    </message>
    <message>
        <source>Move to back</source>
        <translation>Помери у позадину</translation>
    </message>
    <message>
        <source>Indicates the level the object is on, 0 means the object is at the bottom</source>
        <translation>Указује на ком је нивоу објекат, 0 значи да је објекат на дну</translation>
    </message>
    <message>
        <source>Lock or unlock the object</source>
        <translation>Закључај или откључај објекат</translation>
    </message>
    <message>
        <source>Lock or unlock the size of the object</source>
        <translation>Закључај или откључај величину објекта</translation>
    </message>
    <message>
        <source>Enable or disable printing of the object</source>
        <translation>Укључи или искључи штампање објекта</translation>
    </message>
    <message>
        <source>Make text in lower frames flow around the object shape</source>
        <translation type="obsolete">Натерај текст у нижим оквирима да плута око објекта</translation>
    </message>
    <message>
        <source>Use a surrounding box instead of the frame&apos;s shape for text flow</source>
        <translation type="obsolete">Користи окружујућу кутију уместо облика оквира за плутање текста</translation>
    </message>
    <message>
        <source>Use a second line originally based on the frame&apos;s shape for text flow</source>
        <translation type="obsolete">Користи другу линију оригинално постављену на облик оквира за плутање текста</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation>Фонт изабраног текста или објекта</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Величина фонта</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation>Скалирање ширине карактера</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation type="obsolete">Боја текста</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation type="obsolete">Боја попуњеног текста</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation>Засићење боје текста</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation>Засићење боје испуњеног текста</translation>
    </message>
    <message>
        <source>Manual Kerning</source>
        <translation type="obsolete">Ручни кернинг</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation>Проред</translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation>Стил тренутног пасуса</translation>
    </message>
    <message>
        <source>Hyphenation language of frame</source>
        <translation type="obsolete">Језик оквира за спајање цртицом</translation>
    </message>
    <message>
        <source>Change settings for left or end points</source>
        <translation>Измени поставке за леве или крајње тачке</translation>
    </message>
    <message>
        <source>Pattern of line</source>
        <translation>Узорак линије</translation>
    </message>
    <message>
        <source>Thickness of line</source>
        <translation>Дебљина линије</translation>
    </message>
    <message>
        <source>Type of line joins</source>
        <translation>Врста спојева линија</translation>
    </message>
    <message>
        <source>Type of line end</source>
        <translation>Врста краја линије</translation>
    </message>
    <message>
        <source>Line style of current object</source>
        <translation>Стил линија тренутног објекта</translation>
    </message>
    <message>
        <source>Choose the shape of frame...</source>
        <translation>Изаберите облик оквира...</translation>
    </message>
    <message>
        <source>Edit shape of the frame...</source>
        <translation>Уређивање облика оквира...</translation>
    </message>
    <message>
        <source>Set radius of corner rounding</source>
        <translation>Постави полупречник за заобљавање углова</translation>
    </message>
    <message>
        <source>Number of columns in text frame</source>
        <translation>Број колона у тексталном оквиру</translation>
    </message>
    <message>
        <source>Switches between Gap or Column width</source>
        <translation>Пребацује између ширине процепа и ширине колоне</translation>
    </message>
    <message>
        <source>Distance between columns</source>
        <translation>Растојање између колона</translation>
    </message>
    <message>
        <source>Distance of text from top of frame</source>
        <translation>Растојање текста од врха оквира</translation>
    </message>
    <message>
        <source>Distance of text from bottom of frame</source>
        <translation>Растојање текста од дна оквира</translation>
    </message>
    <message>
        <source>Distance of text from left of frame</source>
        <translation>Растојање текста од леве стране оквира</translation>
    </message>
    <message>
        <source>Distance of text from right of frame</source>
        <translation>Растојање текста од десне стране оквира</translation>
    </message>
    <message>
        <source>Edit tab settings of text frame...</source>
        <translation>Уређивање поставки језичака текстуалног оквира...</translation>
    </message>
    <message>
        <source>Allow the image to be a different size to the frame</source>
        <translation>Дозволи да слика буде различите величине од оквира</translation>
    </message>
    <message>
        <source>Horizontal offset of image within frame</source>
        <translation>Водоравно одступање слике унутар оквира</translation>
    </message>
    <message>
        <source>Vertical offset of image within frame</source>
        <translation>Усправно одступање слике унутар оквира</translation>
    </message>
    <message>
        <source>Resize the image horizontally</source>
        <translation>Промени величину слике водоравно</translation>
    </message>
    <message>
        <source>Resize the image vertically</source>
        <translation>Промени величину слике усправно</translation>
    </message>
    <message>
        <source>Keep the X and Y scaling the same</source>
        <translation>Задржи исто X и Y скалирање</translation>
    </message>
    <message>
        <source>Keep the aspect ratio</source>
        <translation>Задржи аспектни однос</translation>
    </message>
    <message>
        <source>Make the image fit within the size of the frame</source>
        <translation>Натерај слику да стане у оквир</translation>
    </message>
    <message>
        <source>Use image proportions rather than those of the frame</source>
        <translation>Радије користи пропорције слике него оквира</translation>
    </message>
    <message>
        <source>Source profile of the image</source>
        <translation>Изворни профил слике</translation>
    </message>
    <message>
        <source>Rendering intent for the image</source>
        <translation>Намера рендеровања за слику</translation>
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
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Column width</source>
        <translation>Ширина колона</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="obsolete">Име „%1“ није јединствено.
Молим вас изаберите друго.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">У реду</translation>
    </message>
    <message>
        <source>Right to Left Writing</source>
        <translation>Писање с десна на лево</translation>
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
        <source>Actual X-DPI:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Actual Y-DPI:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Offset to baseline of characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scaling height of characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.&lt;br/&gt;Please choose another.</source>
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
        <source>Click to select the line spacing mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Width:</source>
        <translation type="unfinished">Ширина:</translation>
    </message>
    <message>
        <source>Text &amp;Flow Around Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation type="unfinished">Искључено</translation>
    </message>
    <message>
        <source>Use Frame &amp;Shape</source>
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
        <source>Use a second line originally based on the frame&apos;s shape for text flow of text frames below the object. </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MultiLine</name>
    <message>
        <source>Edit Style</source>
        <translation>Уреди стил</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>Раван поклопац</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation>Квадратни поклопац</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation>Кружни поклопац</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation>Угаони спој</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Коси спој</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation>Кружни спој</translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation>Ширина линије:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> тач.</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source> pt </source>
        <translation> pt </translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation>Непрекидна линија</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation>Испрекидана линија</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation>Тачкаста линија</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation>Црта-тачка</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation>Црта-тачка-тачка</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="obsolete">Име „%1“ није јединствено.
Молим вас изаберите друго.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>У реду</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.&lt;br/&gt;Please choose another.</source>
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
        <translation type="unfinished">&amp;Откажи</translation>
    </message>
</context>
<context>
    <name>MultipleDuplicate</name>
    <message>
        <source>&amp;Horizontal Shift:</source>
        <translation type="unfinished">&amp;Водоравна промена:</translation>
    </message>
    <message>
        <source>&amp;Vertical Shift:</source>
        <translation type="unfinished">&amp;Усправна промена:</translation>
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
        <translation type="unfinished">Многоструки дупликат</translation>
    </message>
    <message>
        <source>&amp;By Number of Copies</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Number of Copies:</source>
        <translation type="unfinished">&amp;Број копија:</translation>
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
        <source>&amp;Shift Created Items By</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Horizontal Shift:</source>
        <translation type="unfinished">&amp;Водоравна промена:</translation>
    </message>
    <message>
        <source>&amp;Vertical Shift:</source>
        <translation type="unfinished">&amp;Усправна промена:</translation>
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
        <translation type="unfinished">Број редова:</translation>
    </message>
    <message>
        <source>Number of Columns:</source>
        <translation type="unfinished">Број колона:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">&amp;Откажи</translation>
    </message>
</context>
<context>
    <name>MusterPages</name>
    <message>
        <source>Edit Templates</source>
        <translation type="obsolete">Уређивање шаблона</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Do you really want to delete this Template?</source>
        <translation type="obsolete">Да ли стварно желите да обришете овај шаблон?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="obsolete">&amp;Не</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="obsolete">&amp;Да</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="obsolete">&amp;Име:</translation>
    </message>
    <message>
        <source>New Template</source>
        <translation type="obsolete">Нови шаблон</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="obsolete">Копија од %1</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="obsolete">Име:</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="obsolete">Копија #%1 од</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Нормално</translation>
    </message>
</context>
<context>
    <name>MusterSeiten</name>
    <message>
        <source>Edit Templates</source>
        <translation type="obsolete">Уређивање шаблона</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="obsolete">&amp;Примени</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;Нови</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="obsolete">Д&amp;уплирај</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Обриши</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Затвори</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Do you really want to delete this Template?</source>
        <translation type="obsolete">Да ли стварно желите да обришете овај шаблон?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="obsolete">&amp;Не</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="obsolete">&amp;Да</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="obsolete">&amp;Име:</translation>
    </message>
    <message>
        <source>New Template</source>
        <translation type="obsolete">Нови шаблон</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="obsolete">Копија од %1</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="obsolete">Име:</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="obsolete">Копија #%1 од</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Нормално</translation>
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
        <source> pt</source>
        <translation type="obsolete"> тач.</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>New Document</source>
        <translation>Нови документ</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Величина папира</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Величина:</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation type="obsolete">Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation type="obsolete">Letter</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation type="obsolete">Таблоид</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">Произвољно</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Усм&amp;ерење:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Усправно</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Водоравно</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>Ш&amp;ирина:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Висина:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation type="obsolete">&amp;Упоредне странице</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation type="obsolete">Прво лева &amp;страница</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Водиље маргина</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="obsolete">&amp;Лево:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="obsolete">&amp;Десно:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="obsolete">&amp;Врх:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="obsolete">&amp;Дно:</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Опције</translation>
    </message>
    <message>
        <source>F&amp;irst Page Number:</source>
        <translation type="obsolete">П&amp;рви број странице:</translation>
    </message>
    <message>
        <source>&amp;Default Unit:</source>
        <translation>&amp;Подразумевана јединица:</translation>
    </message>
    <message>
        <source>Points (pts)</source>
        <translation type="obsolete">Тачке (pts)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation type="obsolete">Милиметри (mm)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="obsolete">Инчи (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="obsolete">Пика (p)</translation>
    </message>
    <message>
        <source>&amp;Automatic Text Frames</source>
        <translation>&amp;Аутоматски текстуални оквир</translation>
    </message>
    <message>
        <source>Column Guides</source>
        <translation type="obsolete">Водиље колоне</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>&amp;Процеп:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>&amp;Колоне:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Document page size, either a standard size or a custom size</source>
        <translation>Величина странице документа, или стандардна величина или произвољна величина</translation>
    </message>
    <message>
        <source>Orientation of the document&apos;s pages</source>
        <translation>Усмерење страница документа</translation>
    </message>
    <message>
        <source>Width of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Ширина страница документа, подложна изменама ако изаберете произвољну величину странице</translation>
    </message>
    <message>
        <source>Height of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Висина страница документа, подложна изменама ако изаберете произвољну величину странице</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation type="obsolete">Укључи једноструки распоред или раширени распоред</translation>
    </message>
    <message>
        <source>Make the first page the left page of the document</source>
        <translation type="obsolete">Учини да прва страница буде лева</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation type="obsolete">Растојање између водиље горње маргине и обода странице</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation type="obsolete">Растојање између водиље доње маргине и обода странице</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Растојање између водиље леве маргине и обода странице.
Ако је изабрано „Упоредне странице“, овај размак маргина се може користити за постизање исправних маргина за повезивање</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Растојање између водиље десне маргине и обода странице.\n
Ако је изабрано „Упоредне странице“, овај размак маргина се може користити за постизање исправних маргина за повезивање</translation>
    </message>
    <message>
        <source>First page number of the document</source>
        <translation type="obsolete">Први број стране документа</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation>Подразумевана јединица мере за уређивање документа</translation>
    </message>
    <message>
        <source>Create text frames automatically when new pages are added</source>
        <translation>Направи текстуалне оквире аутоматски при додавању нових страница</translation>
    </message>
    <message>
        <source>Number of columns to create in automatically created text frames</source>
        <translation>Број колона у аутоматски направљеним текстуалним оквирима</translation>
    </message>
    <message>
        <source>Distance between automatically created columns</source>
        <translation>Растојање између аутоматски направљених колона</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation type="obsolete">&amp;Унутра:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation type="obsolete">Спо&amp;ља:</translation>
    </message>
    <message>
        <source>Do not show this dialog again</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Initial number of pages of the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>N&amp;umber of Pages:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation type="obsolete">Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">Отвори</translation>
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
</context>
<context>
    <name>NewFromTemplatePlugin</name>
    <message>
        <source>New &amp;from Template...</source>
        <translation type="unfinished">Нови &amp;из шаблона...</translation>
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
    <name>NewTm</name>
    <message>
        <source>Left Page</source>
        <translation type="obsolete">Лева страница</translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation type="obsolete">Десна страница</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
</context>
<context>
    <name>NodePalette</name>
    <message>
        <source>Nodes</source>
        <translation>Нодови</translation>
    </message>
    <message>
        <source>&amp;Absolute Coordinates</source>
        <translation>&amp;Апсолутне координате</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>&amp;X Поз:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y Поз:</translation>
    </message>
    <message>
        <source>Edit &amp;Contour Line</source>
        <translation>Уреди &amp;контуру</translation>
    </message>
    <message>
        <source>&amp;Reset Contour Line</source>
        <translation>&amp;Ресетуј контуру</translation>
    </message>
    <message>
        <source>&amp;End Editing</source>
        <translation>&amp;Крај уређивања</translation>
    </message>
    <message>
        <source>Move Nodes</source>
        <translation>Помери нодове</translation>
    </message>
    <message>
        <source>Move Control Points</source>
        <translation>Помери контролне тачке</translation>
    </message>
    <message>
        <source>Add Nodes</source>
        <translation>Додај нодове</translation>
    </message>
    <message>
        <source>Delete Nodes</source>
        <translation>Обриши нодове</translation>
    </message>
    <message>
        <source>Move Control Points Independently</source>
        <translation>Помери контролне тачке независно</translation>
    </message>
    <message>
        <source>Move Control Points Symmetrical</source>
        <translation>Помери контролне тачке симетрично</translation>
    </message>
    <message>
        <source>Reset Control Points</source>
        <translation>Ресетуј контролне тачке</translation>
    </message>
    <message>
        <source>Reset this Control Point</source>
        <translation>Ресетуј ову контролну тачку</translation>
    </message>
    <message>
        <source>Open a Polygon or Cuts a Bezier Curve</source>
        <translation>Отвори полигон или исеци bezier криву</translation>
    </message>
    <message>
        <source>Close this Bezier Curve</source>
        <translation>Затвори ову bezier криву</translation>
    </message>
    <message>
        <source>Mirror the Path Horizontally</source>
        <translation>Окрени путању водоравно</translation>
    </message>
    <message>
        <source>Mirror the Path Vertically</source>
        <translation>Окрени путању усправно</translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Right</source>
        <translation>Развуци путању водоравно на десно</translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Left</source>
        <translation>Развуци путању водоравно на лево</translation>
    </message>
    <message>
        <source>Shear the Path Vertically Up</source>
        <translation>Развуци путању усправно на горе</translation>
    </message>
    <message>
        <source>Shear the Path Vertically Down</source>
        <translation>Развуци путању усправно на доле</translation>
    </message>
    <message>
        <source>Rotate the Path Counter-Clockwise</source>
        <translation>Ротирај путању супротно од смера казаљке на часовнику</translation>
    </message>
    <message>
        <source>Rotate the Path Clockwise</source>
        <translation>Ротирај путању у смеру казаљке на часовнику</translation>
    </message>
    <message>
        <source>Reduce the Size of the Path by shown %</source>
        <translation type="obsolete">Умањи величину путање за приказаних %</translation>
    </message>
    <message>
        <source>Enlarge the Size of the Path by shown %</source>
        <translation>Повећај величину путање за приказаних %</translation>
    </message>
    <message>
        <source>Angle of Rotation</source>
        <translation>Угао ротације</translation>
    </message>
    <message>
        <source>% to Enlarge or Reduce By</source>
        <translation type="obsolete">% to Enlarge or Reduce By</translation>
    </message>
    <message>
        <source>Activate Contour Line Editing Mode</source>
        <translation>Активирај режим уређивања контура</translation>
    </message>
    <message>
        <source>Reset the Contour Line to the Original Shape of the Frame</source>
        <translation>Ресетуј контуре на оригинални облик оквира</translation>
    </message>
    <message>
        <source>When checked use Coordinates relative to the Page,
otherwise Coordinates are relative to the Object.</source>
        <translation type="obsolete">Када је штиклирано користи координате у односу на страну,
иначе, координате се односе на објекат.</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>When checked use coordinates relative to the page, otherwise coordinates are relative to the Object.</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">Користи име документа као префикс за стилове пасуса</translation>
    </message>
    <message>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation type="unfinished">Не питај опет</translation>
    </message>
    <message>
        <source>Make these settings the default and do not prompt again when importing an OASIS OpenDocument.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">У реду</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Поништи</translation>
    </message>
</context>
<context>
    <name>OldScribusFormat</name>
    <message>
        <source>Scribus Document</source>
        <translation type="unfinished">Scribus документ</translation>
    </message>
    <message>
        <source>Scribus 1.2.x Document</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OutlineValues</name>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Linewidth</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PConsole</name>
    <message>
        <source>Script Console</source>
        <translation type="obsolete">Конзола за скрипте</translation>
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
        <translation type="unfinished">Из&amp;лаз у фајл:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation type="unfinished">Изме&amp;ни...</translation>
    </message>
    <message>
        <source>Output one file for eac&amp;h page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished">&amp;Сними</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished">Сними као</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation type="unfinished">PDF фајлови (*.pdf);;Сви фајлови (*)</translation>
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
</context>
<context>
    <name>PDFToolBar</name>
    <message>
        <source>PDF Tools</source>
        <translation type="unfinished">PDF алати</translation>
    </message>
</context>
<context>
    <name>PDF_Opts</name>
    <message>
        <source>Create PDF File</source>
        <translation type="obsolete">Направи PDF фајл</translation>
    </message>
    <message>
        <source>O&amp;utput to File:</source>
        <translation type="obsolete">Из&amp;лаз у фајл:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation type="obsolete">Изме&amp;ни...</translation>
    </message>
    <message>
        <source>Export Range</source>
        <translation type="obsolete">Опсег извожења</translation>
    </message>
    <message>
        <source>&amp;All Pages</source>
        <translation type="obsolete">&amp;Све странице</translation>
    </message>
    <message>
        <source>C&amp;hoose Pages</source>
        <translation type="obsolete">Изаб&amp;ерите странице</translation>
    </message>
    <message>
        <source>File Options</source>
        <translation type="obsolete">Опције за фајлове</translation>
    </message>
    <message>
        <source>Compatibilit&amp;y:</source>
        <translation type="obsolete">Компатибилнос&amp;т:</translation>
    </message>
    <message>
        <source>&amp;Binding:</source>
        <translation type="obsolete">&amp;Повезивање</translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation type="obsolete">Лева маргина</translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation type="obsolete">Десна маргина</translation>
    </message>
    <message>
        <source>Generate &amp;Thumbnails</source>
        <translation type="obsolete">Направи &amp;сличице</translation>
    </message>
    <message>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation type="obsolete">Сними &amp;повезане текстуалне оквире као PDF чланке</translation>
    </message>
    <message>
        <source>&amp;Include Bookmarks</source>
        <translation type="obsolete">&amp;Обухвати маркере</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="obsolete"> тпи</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation type="obsolete">&amp;Резолуција:</translation>
    </message>
    <message>
        <source>Image Settings</source>
        <translation type="obsolete">Поставке слике</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation type="obsolete">Аутоматски</translation>
    </message>
    <message>
        <source>JPEG</source>
        <translation type="obsolete">JPEG</translation>
    </message>
    <message>
        <source>Zip</source>
        <translation type="obsolete">Zip</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source>&amp;Method:</source>
        <translation type="obsolete">&amp;Метод:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation type="obsolete">&amp;Квалитет:</translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation type="obsolete">Максимално</translation>
    </message>
    <message>
        <source>High</source>
        <translation type="obsolete">Висок</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="obsolete">Средњи</translation>
    </message>
    <message>
        <source>Low</source>
        <translation type="obsolete">Низак</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation type="obsolete">Минимално</translation>
    </message>
    <message>
        <source>&amp;Downsample Images to:</source>
        <translation type="obsolete">&amp;Смањи резолуцију слике на:</translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation type="obsolete">&amp;Опште</translation>
    </message>
    <message>
        <source>&amp;Embed all Fonts</source>
        <translation type="obsolete">&amp;Уметни све фонтове</translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation type="obsolete">Уметање</translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation type="obsolete">Доступни фонтови:</translation>
    </message>
    <message>
        <source>&amp;&gt;&gt;</source>
        <translation type="obsolete">&amp;&gt;&gt;</translation>
    </message>
    <message>
        <source>&amp;&lt;&lt;</source>
        <translation type="obsolete">&amp;&lt;&lt;</translation>
    </message>
    <message>
        <source>Fonts to embed:</source>
        <translation type="obsolete">Фонтови за уметање:</translation>
    </message>
    <message>
        <source>&amp;Fonts</source>
        <translation type="obsolete">&amp;Фонтови</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="obsolete">&amp;Ротација:</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="obsolete">Страница</translation>
    </message>
    <message>
        <source>Show Page Pre&amp;views</source>
        <translation type="obsolete">Прикажи пред&amp;приказе страница</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation type="obsolete">Ефекти</translation>
    </message>
    <message>
        <source>&amp;Display Duration:</source>
        <translation type="obsolete">&amp;Прикажи трајање:</translation>
    </message>
    <message>
        <source>Effec&amp;t Duration:</source>
        <translation type="obsolete">Ефека&amp;т трајање:</translation>
    </message>
    <message>
        <source>Effect T&amp;ype:</source>
        <translation type="obsolete">Ефекат в&amp;рста:</translation>
    </message>
    <message>
        <source>&amp;Moving Lines:</source>
        <translation type="obsolete">&amp;Премештам линије:</translation>
    </message>
    <message>
        <source>F&amp;rom the:</source>
        <translation type="obsolete">&amp;Од:</translation>
    </message>
    <message>
        <source>D&amp;irection:</source>
        <translation type="obsolete">С&amp;мера:</translation>
    </message>
    <message>
        <source> sec</source>
        <translation type="obsolete"> сек.</translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation type="obsolete">Без ефеката</translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation type="obsolete">Ролетне</translation>
    </message>
    <message>
        <source>Box</source>
        <translation type="obsolete">Кутија</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation type="obsolete">Растварање</translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation type="obsolete">Сјај</translation>
    </message>
    <message>
        <source>Split</source>
        <translation type="obsolete">Раздвоји</translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation type="obsolete">Обриши</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="obsolete">Водоравно</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="obsolete">Усправно</translation>
    </message>
    <message>
        <source>Inside</source>
        <translation type="obsolete">Унутра</translation>
    </message>
    <message>
        <source>Outside</source>
        <translation type="obsolete">Споља</translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation type="obsolete">С лева на десно</translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation type="obsolete">Од врха до дна</translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation type="obsolete">Од дна до врха</translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation type="obsolete">С десна на лево</translation>
    </message>
    <message>
        <source>Top-left to Bottom-Right</source>
        <translation type="obsolete">Врх-лево до дно-десно</translation>
    </message>
    <message>
        <source>&amp;Apply Effect on all Pages</source>
        <translation type="obsolete">&amp;Примени ефекат на све странице</translation>
    </message>
    <message>
        <source>&amp;Use Encryption</source>
        <translation type="obsolete">&amp;Користи шифровање</translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation type="obsolete">Лозинке</translation>
    </message>
    <message>
        <source>&amp;User:</source>
        <translation type="obsolete">&amp;Корисник:</translation>
    </message>
    <message>
        <source>&amp;Owner:</source>
        <translation type="obsolete">&amp;Власник:</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation type="obsolete">Поставке</translation>
    </message>
    <message>
        <source>Allow &amp;Printing the Document</source>
        <translation type="obsolete">Дозволи &amp;штампање документа</translation>
    </message>
    <message>
        <source>Allow &amp;Changing the Document</source>
        <translation type="obsolete">Дозволи &amp;измену документа</translation>
    </message>
    <message>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation type="obsolete">Дозволи &amp;копирање текста и графике</translation>
    </message>
    <message>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation type="obsolete">Дозволи додавање &amp;анотација и поља</translation>
    </message>
    <message>
        <source>S&amp;ecurity</source>
        <translation type="obsolete">&amp;Безбедност</translation>
    </message>
    <message>
        <source>General</source>
        <translation type="obsolete">Опште</translation>
    </message>
    <message>
        <source>Output &amp;Intended For:</source>
        <translation type="obsolete">Излаз &amp;намењен за:</translation>
    </message>
    <message>
        <source>Screen / Web</source>
        <translation type="obsolete">Екран / веб</translation>
    </message>
    <message>
        <source>Printer</source>
        <translation type="obsolete">Штампач</translation>
    </message>
    <message>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation type="obsolete">&amp;Користи произвољне поставке рендеровања</translation>
    </message>
    <message>
        <source>Rendering Settings</source>
        <translation type="obsolete">Поставке рендеровања</translation>
    </message>
    <message>
        <source>Fre&amp;quency:</source>
        <translation type="obsolete">Уче&amp;сталост:</translation>
    </message>
    <message>
        <source>&amp;Angle:</source>
        <translation type="obsolete">&amp;Угао:</translation>
    </message>
    <message>
        <source>S&amp;pot Function:</source>
        <translation type="obsolete">Та&amp;чка функција:</translation>
    </message>
    <message>
        <source>Simple Dot</source>
        <translation type="obsolete">Једноставна тачка</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="obsolete">Линија</translation>
    </message>
    <message>
        <source>Round</source>
        <translation type="obsolete">Кружна</translation>
    </message>
    <message>
        <source>Ellipse</source>
        <translation type="obsolete">Елипса</translation>
    </message>
    <message>
        <source>Solid Colors:</source>
        <translation type="obsolete">Пуне боје:</translation>
    </message>
    <message>
        <source>Use ICC Profile</source>
        <translation type="obsolete">Користи ICC профил</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation type="obsolete">Профил:</translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation type="obsolete">Намера рендеровања:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="obsolete">Перцептуално</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="obsolete">Релативна колорметрика</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="obsolete">Засићење</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="obsolete">Апсолутна колорметрика</translation>
    </message>
    <message>
        <source>Images:</source>
        <translation type="obsolete">Слике:</translation>
    </message>
    <message>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation type="obsolete">Немој да користиш уметнуте ICC профиле</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation type="obsolete">Б&amp;оја</translation>
    </message>
    <message>
        <source>PDF/X-3 Output Intent</source>
        <translation type="obsolete">PDF/X-3 на излазу</translation>
    </message>
    <message>
        <source>&amp;Info String:</source>
        <translation type="obsolete">&amp;Инфо знаковни низ:</translation>
    </message>
    <message>
        <source>Output &amp;Profile:</source>
        <translation type="obsolete">Излазни &amp;профил:</translation>
    </message>
    <message>
        <source>Trim Box</source>
        <translation type="obsolete">Подсеци кутију</translation>
    </message>
    <message>
        <source>PDF/X-&amp;3</source>
        <translation type="obsolete">PDF/X-&amp;3</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> тач.</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="obsolete">&amp;Сними</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Export all pages to PDF</source>
        <translation type="obsolete">Извези све странице у PDF</translation>
    </message>
    <message>
        <source>Export a range of pages to PDF</source>
        <translation type="obsolete">Извези опсег страница у PDF</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="obsolete">Унесите листу обележја раздвојених зарезима где
обележје може бити * за све странице, 1-5 за
опсег страница или број једне странице.</translation>
    </message>
    <message>
        <source>Determines the PDF compatibility. The default is Acrobat 4.0 which gives the widest compatibility.
Choose Acrobat 5.0 if your file has PDF 1.4 features such as transparency or you require 128 bit encryption.
PDF/X-3 is for exporting the PDF for commercial printing and is selectable when you have activated color management.</source>
        <translation type="obsolete">Утврђује PDF компатибилност. Подразумевана је Acrobat 4.0 који даје најширу компатибилност.
Изаберите Acrobat 5.0 ако Ваши фајлови поседују PDF 1.4 карактеристике као што су провидност или Вам је потребна 128. битно шифровање.
PDF/X-3 служи за извоз у PDF за комерцијалну штампу и могуће га је изабрати када активирате управљање бојама.</translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know
you need to change it leave the default choice - Left.</source>
        <translation type="obsolete">Утврђује повезивање страна у PDF-у. Отавите подразумевани
избор - Лево, осим ако знате да ово треба да промените.</translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF.
Some viewers can use the thumbnails for navigation.</source>
        <translation type="obsolete">Прави сличицу сваке стране у PDF-у.
Неки прегледачи могу користити сличице за навигацију.</translation>
    </message>
    <message>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation type="obsolete">Прави PDF чланке, што је корисно за навигацију по повезаним чланцима у PDF-у.</translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document.
These are useful for navigating long PDF documents.</source>
        <translation type="obsolete">Умеће маркере које сте направили у Ваш документ.
Ово је корисно при навигацији кроз дугачке PDF документе.</translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics.
This does not affect the resolution of bitmap images like photos.</source>
        <translation type="obsolete">Извози резолуцију текста и векторске графике.
Ово не утиче на резолуцију bitmap слика као што су фотографије.</translation>
    </message>
    <message>
        <source>Compression of text and graphics.
Unless you have a reason, leave this checked. This reduces PDF size.</source>
        <translation type="obsolete">Компресија текста и графике.
Оставите ово штиклирано, осим ако немате разлога за супротно. Ово смањује величину PDF-а.</translation>
    </message>
    <message>
        <source>Version of compression for images.
Automatic allows Scribus to choose the best method.
ZIP is good for images with solid colors.
JPEG is better at creating smaller PDF files which have many photos (with slight image loss possible).
Leave it set to automatic, unless you have a need for special compression options.</source>
        <translation type="obsolete">Верзија компресије за слике.
„Аутоматска“ дозвољава Scribus-у да изабере најбољи метод.
ZIP је добар за слике са пуним бојама.
JPEG је бољи за прављење PDF фајлова који садрже много фотографија (са могућим малим губитком квалитета).
Оставите поставку на „Аутоматска“, уколико немате потребу за специјалним опцијама компресије.</translation>
    </message>
    <message>
        <source>Compression levels: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%)</source>
        <translation type="obsolete">Нивои компресије: Минималан (25\\%), Низак (50\\%), Средњи (75\\%), Висок (85\\%), Максималан (95\\%)</translation>
    </message>
    <message>
        <source>Downsample your bitmap images to the selected DPI.
Leaving this unchecked will render them at their native resolution.</source>
        <translation type="obsolete">Смањите резолуцију Ваших битмап слика на изабрани резолуцију (тпи).
Ако ово оставите нештиклирано рендероваће се у матичној резолуцији.</translation>
    </message>
    <message>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation type="obsolete">ТПИ (Тачака По Инчу) за извоз слика.</translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts
will preserve the layout and appearance of your document.</source>
        <translation type="obsolete">Уметни фонтове у PDF. Уметање фонтова
ће сачувати распоред и изглед Вашег документа.</translation>
    </message>
    <message>
        <source>Enables presentation effects when using Acrobat Reader in full screen mode.</source>
        <translation type="obsolete">Укључује ефекте презентације када се користи Acrobat Reader у режиму преко целог екрана.</translation>
    </message>
    <message>
        <source>Show page previews of each page listed above.</source>
        <translation type="obsolete">Прикажи преглед стране за сваку од горе излистаних страница.</translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page.</source>
        <translation type="obsolete">Временски интервал за који се приказује страница пре него што почне презентација на изабраној страници.</translation>
    </message>
    <message>
        <source>Length of time the effect runs.
A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation type="obsolete">Дужина трајања ефекта.
Краће време ће убрзати ефекат, а дуже ће га успорити.</translation>
    </message>
    <message>
        <source>Type of the display effect.</source>
        <translation type="obsolete">Врста ефекта приказа.</translation>
    </message>
    <message>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation type="obsolete">Смер ефекта крећућих линија за ефекте „подели“ и „ролетна“.</translation>
    </message>
    <message>
        <source>Starting position for the box and split effects.</source>
        <translation type="obsolete">Почетна позиција за ефекте „подели“ и „кутија“.</translation>
    </message>
    <message>
        <source>Direction of the glitter or wipe effects.</source>
        <translation type="obsolete">Смер ефеката „сјај“ и „брисање“.</translation>
    </message>
    <message>
        <source>Apply the selected effect to all pages.</source>
        <translation type="obsolete">Примени изабрани ефекат на све странице.</translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF.
If you selected Acrobat 4.0, the PDF will be protected by 40 bit encryption.
If you selected Acrobat 5.0, the PDF will be protected by 128 bit encryption.
Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation type="obsolete">Укључи сигурносна својства у PDF-у.
Ако сте изабрали Acrobat 4.0, PDF ће бити заштићен 40 битном 
енкрипцијом.
Ако сте изабрали Acrobat 5.0, PDF ће бити заштићен 128 битном 
енкрипцијом.
Обавештење: PDF енкрипција није тако поуздана као GPG или PGP енкрипција и има неких ограничења.</translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the
security features in your exported PDF</source>
        <translation type="obsolete">Изаберите главну лозинку која укључује или искључује сва
сигурносна својства и Вашем извезеном PDF-у</translation>
    </message>
    <message>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation type="obsolete">Изаберите лозинку помоћу које ће корисници моћи да читају Ваш PDF.</translation>
    </message>
    <message>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation type="obsolete">Дозволи штампање PDF-а. Ако није штиклирано, штампање није омогућено. </translation>
    </message>
    <message>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation type="obsolete">Дозволи измену PDF-а. Ако није штиклирано, измена PDF-а није омогућена.</translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. 
If un-checked, text and graphics cannot be copied.</source>
        <translation type="obsolete">Дозволи копирање текста и графике из PDF-а. 
Ако није штиклирано, текст и графика се не могу копирати.</translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. 
If un-checked, editing annotations and fileds is prevented.</source>
        <translation type="obsolete">Дозволи додавање анотација и поља у PDF. 
Ако није штиклирано, уређивање анотација и поља је онемогућено.</translation>
    </message>
    <message>
        <source>Color model for the output of your PDF.
Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets.
Choose Printer when printing to a true 4 color CMYK printer.</source>
        <translation type="obsolete">Модел боја за излазни PDF.
Изаберите Екран/Веб за PDF-ове који се користе за приказ на екрану и штампање на обичним штампачима.
Изабери штампач када се штампа на штампачу са CMYK четворобојном штампом.</translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled
when specifically requested by your printer and they have given you the exact details needed.
Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation type="obsolete">јОво је напредно поешавање које није укључено као подразумевано. Ово би требало да буде укључено само
када се то експлицитно захтева од стране Вашег штампача и имате прецизне податке који су Вам потребни.
Иначе, Ваш извезени PDF може да има грешке при штампању и да не буде преносив између различитих система.</translation>
    </message>
    <message>
        <source>Embed a color profile for solid colors</source>
        <translation type="obsolete">Уметни профил боја за пуне боје</translation>
    </message>
    <message>
        <source>Color profile for solid colors</source>
        <translation type="obsolete">Профил боја за пуне боје</translation>
    </message>
    <message>
        <source>Rendering intent for solid colors</source>
        <translation type="obsolete">Намера рендеровања за пуне боје</translation>
    </message>
    <message>
        <source>Embed a color profile for images</source>
        <translation type="obsolete">Уметни профил боја за слик</translation>
    </message>
    <message>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation type="obsolete">Немој да користиш профиле боја који су уметнути у изворне слике</translation>
    </message>
    <message>
        <source>Color profile for images</source>
        <translation type="obsolete">Профил боја за слике</translation>
    </message>
    <message>
        <source>Rendering intent for images</source>
        <translation type="obsolete">Намера рендеровања за слике</translation>
    </message>
    <message>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation type="obsolete">Излазни профил за штампу. Ако је могуће, добавите нека упутства од Вашег штампача везана за избор профила.</translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail
PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation type="obsolete">Обавезан знаковни низ за PDF/X-3 или неће успети прилагођавање
PDF-а PDF/X-3-у. Препоручујемо да користите наслов документа.</translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="obsolete">Растојање за цурење од врха физичке странице</translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="obsolete">Растојање за цурење од дна физичке странице</translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="obsolete">Растојање за цурење с лева физичке странице</translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="obsolete">Растојање за цурење с десна физичке странице</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="obsolete">Сними као</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation type="obsolete">PDF фајлови (*.pdf);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Compress Text and &amp;Vector Graphics</source>
        <translation type="obsolete">Компресуј текст и &amp;векторску графику</translation>
    </message>
    <message>
        <source>En&amp;able Presentation Effects</source>
        <translation type="obsolete">Ук&amp;ључи ефекте за презентацију</translation>
    </message>
    <message>
        <source>&amp;Presentation</source>
        <translation type="obsolete">&amp;Презентација</translation>
    </message>
    <message>
        <source>&amp;Subset all Fonts</source>
        <translation type="obsolete">Сви фонтови у &amp;подсет</translation>
    </message>
    <message>
        <source>Fonts to subset:</source>
        <translation type="obsolete">Фонтови за подсет:</translation>
    </message>
    <message>
        <source>Mirror Page(s) horizontally</source>
        <translation type="obsolete">Окрени страницу(е) водоравно</translation>
    </message>
    <message>
        <source>Mirror Page(s) vertically</source>
        <translation type="obsolete">Окрени страницу(е) усправно</translation>
    </message>
</context>
<context>
    <name>PDFlib</name>
    <message>
        <source>Saving PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exporting Items on Current Page:</source>
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
</context>
<context>
    <name>PPreview</name>
    <message>
        <source>Print Preview</source>
        <translation>Преглед пре штампања</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Text</source>
        <translation type="obsolete">Омекшај &amp;текст</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Graphics</source>
        <translation type="obsolete">Омекшај &amp;графику</translation>
    </message>
    <message>
        <source>Display Trans&amp;parency</source>
        <translation>Прикажи провидн&amp;ост</translation>
    </message>
    <message>
        <source>&amp;Under Color Removal</source>
        <translation>&amp;Под уклањањем боја</translation>
    </message>
    <message>
        <source>&amp;Display CMYK</source>
        <translation>&amp;Прикажи CMYK</translation>
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
        <source>Provides a more pleasant view of text items in the viewer, at the expense
of a slight slowdown in previewing. This only affects Type 1 fonts</source>
        <translation type="obsolete">Обезбеђује пријатнији приказ текстуалних ставки у прегледачу, на рачун
незнатног успорења при прегледању. Ово утиче само на Type 1 фонтове</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of True Type Fonts, Open Type Fonts, EPS, PDF and
vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation type="obsolete">Обезбеђује пријатнији приказ True Type фонтова, Open Type фонтова, EPS, PDF 
и 
векторске графике у прегледу, на рачун незнатног успорења при прегледању</translation>
    </message>
    <message>
        <source>Shows transparency and transparent items in your document. Requires Ghostscript 7.07 or later</source>
        <translation>Приказује провидност и провидне ставке у Вашем документу. Захтева Ghostscript 7.07 или новији</translation>
    </message>
    <message>
        <source>Gives a print preview using simulations of generic CMYK inks, instead of RGB colors</source>
        <translation>Даје преглед за штампу користећи симулацију генеричких CMYK мастила, уместо RGB боја</translation>
    </message>
    <message>
        <source>Enable/disable the C (Cyan) ink plate</source>
        <translation>Укључи/искључи C (Цијан) палету мастила</translation>
    </message>
    <message>
        <source>Enable/disable the M (Magenta) ink plate</source>
        <translation>Укључи/искључи М (Магента) палету мастила</translation>
    </message>
    <message>
        <source>Enable/disable the Y (Yellow) ink plate</source>
        <translation>Укључи/искључи Y (Жута) палету мастила</translation>
    </message>
    <message>
        <source>Enable/disable the K (Black) ink plate</source>
        <translation>Укључи/искључи К (Црна) палету мастила</translation>
    </message>
    <message>
        <source>A way of switching some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="obsolete">Начин за замену неких од сивих нијанси које се састоје од
цијан, жуте и магенте и коришћење црне уместо тога.
UCR највише утиче на делове слике који су неутрални и/или тамни тонови
блиски сивој. Коришћење овога може поправити штампу неких слика,
а потребно је мало експериментисања и тестирања у зависности од случаја.
UCR смањује могућност презасићења CMY мастилима.</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Све</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Separation Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation type="unfinished">Цијан</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation type="unfinished">Магента</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation type="unfinished">Жута</translation>
    </message>
    <message>
        <source>Black</source>
        <translation type="unfinished">Црна</translation>
    </message>
    <message>
        <source>Scaling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print...</source>
        <translation type="unfinished">Штампај...</translation>
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
        <source>Close</source>
        <translation type="unfinished">Затвори</translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished">Фајл</translation>
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
        <translation type="unfinished">Својства</translation>
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
        <translation type="unfinished">Табулатори и увлачење</translation>
    </message>
    <message>
        <source>Ch&amp;aracter Style</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Page</name>
    <message>
        <source>Copy Here</source>
        <translation type="obsolete">Копирај овде</translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation type="obsolete">Помери овде</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Поништи</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="obsolete">&amp;Пренеси</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation type="obsolete">Прикажи &amp;маргине</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation type="obsolete">Прикажи &amp;оквире</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation type="obsolete">Прикажи &amp;слике</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation type="obsolete">Прикажи &amp;мрежу</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation type="obsolete">Прикажи &amp;водиље</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation type="obsolete">Прикажи мрежу &amp;основне линије</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation type="obsolete">Пре&amp;баци на мрежу</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation type="obsolete">Преб&amp;аци на водиље</translation>
    </message>
    <message>
        <source>Picture</source>
        <translation type="obsolete">Слика</translation>
    </message>
    <message>
        <source>File: </source>
        <translation type="obsolete">Фајл: </translation>
    </message>
    <message>
        <source>Original PPI: </source>
        <translation type="obsolete">Оригинални PPI: </translation>
    </message>
    <message>
        <source>Actual PPI: </source>
        <translation type="obsolete">Стварни PPI: </translation>
    </message>
    <message>
        <source>Linked Text</source>
        <translation type="obsolete">Повезан текст</translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation type="obsolete">Текстуални оквир</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation type="obsolete">Текст на путањи</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation type="obsolete">Пасуси: </translation>
    </message>
    <message>
        <source>Words: </source>
        <translation type="obsolete">Речи: </translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation type="obsolete">Карактери: </translation>
    </message>
    <message>
        <source>Print: </source>
        <translation type="obsolete">Штампај: </translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="obsolete">Укључено</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation type="obsolete">Искључено</translation>
    </message>
    <message>
        <source>In&amp;fo</source>
        <translation type="obsolete">Ин&amp;фо</translation>
    </message>
    <message>
        <source>&amp;Get Picture...</source>
        <translation type="obsolete">&amp;Добави слику...</translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation type="obsolete">С&amp;лика видљива</translation>
    </message>
    <message>
        <source>&amp;Update Picture</source>
        <translation type="obsolete">&amp;Ажурирај слику</translation>
    </message>
    <message>
        <source>&amp;Edit Picture</source>
        <translation type="obsolete">&amp;Уређивање слике</translation>
    </message>
    <message>
        <source>&amp;Adjust Frame to Picture</source>
        <translation type="obsolete">&amp;Подеси оквир према слици</translation>
    </message>
    <message>
        <source>&amp;Get Text...</source>
        <translation type="obsolete">&amp;Добави текст...</translation>
    </message>
    <message>
        <source>&amp;Append Text...</source>
        <translation type="obsolete">&amp;Примени текст...</translation>
    </message>
    <message>
        <source>&amp;Edit Text...</source>
        <translation type="obsolete">&amp;Уређивање текста...</translation>
    </message>
    <message>
        <source>Is PDF &amp;Bookmark</source>
        <translation type="obsolete">Је PDF &amp;маркер</translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation type="obsolete">Је PDF ан&amp;отација</translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation type="obsolete">С&amp;војства анотације</translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation type="obsolete">С&amp;војства поља</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation type="obsolete">&amp;PDF опције</translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation type="obsolete">Уреди текст...</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation type="obsolete">&amp;Закључај</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation type="obsolete">От&amp;кључај</translation>
    </message>
    <message>
        <source>Lock Object &amp;Size</source>
        <translation type="obsolete">Закључај &amp;величину објекта</translation>
    </message>
    <message>
        <source>Unlock Object &amp;Size</source>
        <translation type="obsolete">Откључај &amp;величину објекта</translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation type="obsolete">Пошаљи у св&amp;еску</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation type="obsolete">Пошаљи у сл&amp;ој</translation>
    </message>
    <message>
        <source>&amp;Insert Sample Text</source>
        <translation type="obsolete">&amp;Уметни пример текста</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="obsolete">&amp;Група</translation>
    </message>
    <message>
        <source>Un&amp;group</source>
        <translation type="obsolete">Од&amp;групиши</translation>
    </message>
    <message>
        <source>Le&amp;vel</source>
        <translation type="obsolete">Ни&amp;во</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation type="obsolete">&amp;Пошаљи иза свега</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation type="obsolete">&amp;Доведи испред свега</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation type="obsolete">&amp;Спусти</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation type="obsolete">&amp;Подигни</translation>
    </message>
    <message>
        <source>&amp;Picture Frame</source>
        <translation type="obsolete">Оквир &amp;слике</translation>
    </message>
    <message>
        <source>Pol&amp;ygon</source>
        <translation type="obsolete">Пол&amp;игон</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <translation type="obsolete">&amp;Оквирне линије</translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation type="obsolete">&amp;Текстуални оквир</translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation type="obsolete">&amp;Bezier крива</translation>
    </message>
    <message>
        <source>Conve&amp;rt to</source>
        <translation type="obsolete">Претв&amp;ори у</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="obsolete">&amp;Исеци</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="obsolete">&amp;Копирај</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Обриши</translation>
    </message>
    <message>
        <source>C&amp;lear Contents</source>
        <translation type="obsolete">О&amp;чисти садржај</translation>
    </message>
    <message>
        <source>Show P&amp;roperties...</source>
        <translation type="obsolete">Прикажи с&amp;војства...</translation>
    </message>
    <message>
        <source>Hide P&amp;roperties...</source>
        <translation type="obsolete">Сакриј св&amp;ојства...</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation type="obsolete">Да ли стварно желите да очистите сав текст?</translation>
    </message>
    <message>
        <source>The Program</source>
        <translation type="obsolete">Програм</translation>
    </message>
    <message>
        <source>is missing!</source>
        <translation type="obsolete">недостаје!</translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation type="obsolete">Копија</translation>
    </message>
</context>
<context>
    <name>PageItem</name>
    <message>
        <source>Image</source>
        <translation>Слика</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Текст</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Линија</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Полигон</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation>Полилинија</translation>
    </message>
    <message>
        <source>PathText</source>
        <translation>Текста путање</translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation type="unfinished">Копија</translation>
    </message>
</context>
<context>
    <name>PageItemAttributes</name>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
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
        <source>Name</source>
        <translation type="obsolete">Име</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Врста</translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="obsolete">Вредност</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="obsolete">&amp;Додај</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="obsolete">&amp;Копирај</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Обриши</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="obsolete">Оч&amp;исти</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>None</source>
        <comment>relationship</comment>
        <translation type="unfinished">Ниједан</translation>
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
        <translation type="unfinished">Име</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished">Врста</translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="unfinished">Вредност</translation>
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
        <translation type="unfinished">&amp;Додај</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished">&amp;Копирај</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">&amp;Обриши</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished">Оч&amp;исти</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">&amp;Откажи</translation>
    </message>
</context>
<context>
    <name>PageLayouts</name>
    <message>
        <source>Page Layout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>First Page is:</source>
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
        <source>Normal</source>
        <translation type="unfinished">Нормално</translation>
    </message>
    <message>
        <source>Arrange Pages</source>
        <translation type="unfinished">Намести странице</translation>
    </message>
    <message>
        <source>Available Master Pages:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document Pages:</source>
        <translation type="unfinished">Странице документа:</translation>
    </message>
</context>
<context>
    <name>PageSelector</name>
    <message>
        <source>Page </source>
        <translation type="obsolete">Страница</translation>
    </message>
    <message>
        <source> of %1</source>
        <translation type="obsolete"> од %1</translation>
    </message>
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
        <source>Letter</source>
        <translation type="obsolete">Letter</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation type="obsolete">Legal</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="obsolete">Средњи</translation>
    </message>
    <message>
        <source>C</source>
        <translation type="obsolete">C</translation>
    </message>
</context>
<context>
    <name>PatternDialog</name>
    <message>
        <source>Choose a Directory</source>
        <translation type="unfinished">Изаберите директоријум</translation>
    </message>
    <message>
        <source>Loading Patterns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation type="unfinished">Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">Отвори</translation>
    </message>
</context>
<context>
    <name>PicSearch</name>
    <message>
        <source>Result</source>
        <translation>Резултат</translation>
    </message>
    <message>
        <source>Search Results for: </source>
        <translation>Тражи резултате за: </translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Преглед</translation>
    </message>
    <message>
        <source>Select</source>
        <translation>Изабери</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Поништи</translation>
    </message>
</context>
<context>
    <name>PicStatus</name>
    <message>
        <source>Pictures</source>
        <translation type="obsolete">Слике</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Име</translation>
    </message>
    <message>
        <source>Path</source>
        <translation>Путања</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Страница</translation>
    </message>
    <message>
        <source>Print</source>
        <translation>Штампај</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Статус</translation>
    </message>
    <message>
        <source>Goto</source>
        <translation>Иди на</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Да</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>У реду</translation>
    </message>
    <message>
        <source>Missing</source>
        <translation>Недостаје</translation>
    </message>
    <message>
        <source>Search</source>
        <translation>Тражи</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>Cancel Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Manage Pictures</source>
        <translation type="unfinished">Управљање сликама</translation>
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
        <source>Select a base directory for search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished">Затвори</translation>
    </message>
    <message>
        <source>Set a new location for the selected items. Useful when you may have moved the document but not the images.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select a base directory for your selected rows</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PixmapExportPlugin</name>
    <message>
        <source>Save as &amp;Image...</source>
        <translation type="unfinished">Сними као &amp;слику...</translation>
    </message>
    <message>
        <source>Export As Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exports selected pages as bitmap images.</source>
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
        <source>Import</source>
        <comment>plugin manager</comment>
        <translation type="obsolete">Увези</translation>
    </message>
    <message>
        <source>Unknown</source>
        <comment>plugin manager</comment>
        <translation type="obsolete">Непознат</translation>
    </message>
    <message>
        <source>Plugin: loading %1</source>
        <comment>plugin manager</comment>
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
    <message>
        <source>There is a problem loading %1 of %2 plugins. %3 This is probably caused by some kind of dependency issue or old plugins existing in your install directory. If you clean out your install directory and reinstall and this still occurs, please report it on bugs.scribus.net.</source>
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
        <translation type="unfinished">Врста</translation>
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
        <translation type="unfinished">Фајл</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="unfinished">Да</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="unfinished">Не</translation>
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
        <translation>Својства полигона</translation>
    </message>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="obsolete">Угл&amp;ови:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="obsolete">&amp;Ротација:</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="obsolete">Примени &amp;фактор</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="obsolete"> %</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="obsolete">&amp;Фактор:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="obsolete">Број углова за полигоне</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="obsolete">Степени ротације за полигоне</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="obsolete">Примени конвексно/конкавно фактор да би променио облик полигона</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="obsolete">Пример полигона</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="obsolete">Негативна вредност ће полигон учинити конкавним 
(или у облику звезде),
 позитивна вредност ће га учинити конвексним</translation>
    </message>
</context>
<context>
    <name>PolygonWidget</name>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="unfinished">Угл&amp;ови:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="unfinished">&amp;Ротација:</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="unfinished">Примени &amp;фактор</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="unfinished">&amp;Фактор:</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="unfinished">Број углова за полигоне</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="unfinished">Степени ротације за полигоне</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="unfinished">Примени конвексно/конкавно фактор да би променио облик полигона</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="unfinished">Пример полигона</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="obsolete">Негативна вредност ће полигон учинити конкавним 
(или у облику звезде),
 позитивна вредност ће га учинити конвексним</translation>
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
        <translation>Подешавања</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Опште</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Документ</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation>Водиље</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation>Типографија</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation>Алати</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation type="unfinished">Албум</translation>
    </message>
    <message>
        <source>Display</source>
        <translation>Приказ</translation>
    </message>
    <message>
        <source>External Tools</source>
        <translation type="unfinished">Спољашњи алати</translation>
    </message>
    <message>
        <source>Misc.</source>
        <translation type="obsolete">Разно</translation>
    </message>
    <message>
        <source>GUI</source>
        <translation type="obsolete">Кориснички интерфејс</translation>
    </message>
    <message>
        <source>&amp;Theme:</source>
        <translation type="obsolete">&amp;Тема:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> тач.</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation type="obsolete">Величина &amp;фонта:</translation>
    </message>
    <message>
        <source>Units</source>
        <translation type="obsolete">Јединице</translation>
    </message>
    <message>
        <source>Points (pt)</source>
        <translation type="obsolete">тачке (pt)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation type="obsolete">Милиметри (mm)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="obsolete">Инчи (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="obsolete">Пика (p)</translation>
    </message>
    <message>
        <source>Mouse Settings</source>
        <translation type="obsolete">Поставке миша</translation>
    </message>
    <message>
        <source>&amp;Wheel Jump:</source>
        <translation type="obsolete">&amp;Скок помоћу точкића:</translation>
    </message>
    <message>
        <source> px</source>
        <translation type="obsolete"> px</translation>
    </message>
    <message>
        <source>&amp;Grab Radius:</source>
        <translation type="obsolete">&amp;Зграби полупречник:</translation>
    </message>
    <message>
        <source>Menus</source>
        <translation type="obsolete">Менији</translation>
    </message>
    <message>
        <source>&amp;Recent Documents:</source>
        <translation type="obsolete">&amp;Скорашњи документи:</translation>
    </message>
    <message>
        <source>Paths</source>
        <translation type="obsolete">Путање</translation>
    </message>
    <message>
        <source>&amp;Documents:</source>
        <translation type="obsolete">&amp;Документи:</translation>
    </message>
    <message>
        <source>&amp;Change...</source>
        <translation type="obsolete">&amp;Измени...</translation>
    </message>
    <message>
        <source>&amp;ICC Profiles:</source>
        <translation type="obsolete">&amp;ICC профили:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="obsolete">И&amp;змени...</translation>
    </message>
    <message>
        <source>&amp;Scripts:</source>
        <translation type="obsolete">С&amp;крипте:</translation>
    </message>
    <message>
        <source>Ch&amp;ange...</source>
        <translation type="obsolete">Изм&amp;ени...</translation>
    </message>
    <message>
        <source>T&amp;emplates:</source>
        <translation type="obsolete">Ш&amp;аблони:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation type="obsolete">Изме&amp;ни...</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="obsolete">Величина папира</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="obsolete">Произвољно</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="obsolete">&amp;Величина:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="obsolete">Усправно</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="obsolete">Водоравно</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="obsolete">Усм&amp;ерење:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="obsolete">Ш&amp;ирина:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="obsolete">&amp;Висина:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation type="obsolete">&amp;Упоредне странице</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation type="obsolete">Прво лева &amp;страница</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="obsolete">Водиље маргина</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="obsolete">&amp;Дно:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="obsolete">&amp;Врх:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="obsolete">&amp;Десно:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="obsolete">&amp;Лево:</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation type="obsolete">Аутоматско снимање</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation type="obsolete">Укључ&amp;ено</translation>
    </message>
    <message>
        <source>min</source>
        <translation type="obsolete">мин</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation type="obsolete">&amp;Период:</translation>
    </message>
    <message>
        <source>Grid Layout</source>
        <translation type="obsolete">Распоред мреже</translation>
    </message>
    <message>
        <source>M&amp;inor Grid Spacing:</source>
        <translation type="obsolete">С&amp;итни проред мреже:</translation>
    </message>
    <message>
        <source>Ma&amp;jor Grid Spacing:</source>
        <translation type="obsolete">Озб&amp;иљни проред мреже:</translation>
    </message>
    <message>
        <source>Guide &amp;Snap Distance:</source>
        <translation type="obsolete">Растојање &amp;пресецања водиља:</translation>
    </message>
    <message>
        <source>Grid Colors</source>
        <translation type="obsolete">Боје мреже</translation>
    </message>
    <message>
        <source>Min&amp;or Grid Color:</source>
        <translation type="obsolete">Си&amp;тне боје мреже:</translation>
    </message>
    <message>
        <source>Majo&amp;r Grid Color:</source>
        <translation type="obsolete">Озб&amp;иљне боје мреже:</translation>
    </message>
    <message>
        <source>&amp;User Guides Color:</source>
        <translation type="obsolete">Боје &amp;корисничких водиља:</translation>
    </message>
    <message>
        <source>Base&amp;line Grid Color:</source>
        <translation type="obsolete">Боја осн&amp;овне мреже:</translation>
    </message>
    <message>
        <source>Placing</source>
        <translation type="obsolete">Постављање</translation>
    </message>
    <message>
        <source>In the &amp;Background</source>
        <translation type="obsolete">У &amp;позадини</translation>
    </message>
    <message>
        <source>In the Fore&amp;ground</source>
        <translation type="obsolete">&amp;Спреда</translation>
    </message>
    <message>
        <source>Baseline Grid</source>
        <translation type="obsolete">Основна мрежа</translation>
    </message>
    <message>
        <source>O&amp;n</source>
        <translation type="obsolete">&amp;Укључи</translation>
    </message>
    <message>
        <source>O&amp;ff</source>
        <translation type="obsolete">И&amp;скључи се</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation type="obsolete">Индекс</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="obsolete"> %</translation>
    </message>
    <message>
        <source>&amp;Displacement:</source>
        <translation type="obsolete">&amp;Погрешно постављање:</translation>
    </message>
    <message>
        <source>&amp;Scaling:</source>
        <translation type="obsolete">&amp;Скалирање:</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="obsolete">Изложилац</translation>
    </message>
    <message>
        <source>D&amp;isplacement:</source>
        <translation type="obsolete">По&amp;грешно постављање:</translation>
    </message>
    <message>
        <source>S&amp;caling:</source>
        <translation type="obsolete">С&amp;калирање:</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="obsolete">Мала верзална слова</translation>
    </message>
    <message>
        <source>Sc&amp;aling:</source>
        <translation type="obsolete">Ска&amp;лирање:</translation>
    </message>
    <message>
        <source>Other</source>
        <translation type="obsolete">Остало</translation>
    </message>
    <message>
        <source>Baseline &amp;Grid:</source>
        <translation type="obsolete">Основна &amp;мрежа:</translation>
    </message>
    <message>
        <source>Baseline &amp;Offset:</source>
        <translation type="obsolete">Основни &amp;померај:</translation>
    </message>
    <message>
        <source>Automatic &amp;Line Spacing:</source>
        <translation type="obsolete">Аутоматски проред &amp;линија:</translation>
    </message>
    <message>
        <source>Default &amp;Font:</source>
        <translation type="obsolete">Подразумевани &amp;фонт:</translation>
    </message>
    <message>
        <source>Default &amp;Size:</source>
        <translation type="obsolete">Подразумевана &amp;величина:</translation>
    </message>
    <message>
        <source>&amp;Text Color:</source>
        <translation type="obsolete">Боја &amp;текста:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation type="obsolete">&amp;Колоне:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="obsolete">&amp;Процеп:</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="obsolete">Плетене свилене пиџаме замењене за плави кварц</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source>&amp;Line Color:</source>
        <translation type="obsolete">Боја &amp;линије:</translation>
    </message>
    <message>
        <source>&amp;Shading:</source>
        <translation type="obsolete">&amp;Сенчење:</translation>
    </message>
    <message>
        <source>&amp;Fill Color:</source>
        <translation type="obsolete">Боја &amp;испуњавања:</translation>
    </message>
    <message>
        <source>S&amp;hading:</source>
        <translation type="obsolete">Се&amp;нчење:</translation>
    </message>
    <message>
        <source>&amp;Type of Line:</source>
        <translation type="obsolete">&amp;Врста линије:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation type="obsolete">&amp;Ширина линије:</translation>
    </message>
    <message>
        <source>Mi&amp;nimum:</source>
        <translation type="obsolete">Мин&amp;имално:</translation>
    </message>
    <message>
        <source>Ma&amp;ximum:</source>
        <translation type="obsolete">Мак&amp;симално:</translation>
    </message>
    <message>
        <source>&amp;Stepping:</source>
        <translation type="obsolete">&amp;Кораци:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation type="obsolete">&amp;Слободно скалирање</translation>
    </message>
    <message>
        <source>&amp;Horizontal Scaling:</source>
        <translation type="obsolete">&amp;Водоравно скалирање:</translation>
    </message>
    <message>
        <source>&amp;Vertical Scaling:</source>
        <translation type="obsolete">&amp;Усправно скалирање:</translation>
    </message>
    <message>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation type="obsolete">&amp;Скалирај слику на величину оквира</translation>
    </message>
    <message>
        <source>Keep Aspect &amp;Ratio</source>
        <translation type="obsolete">Задржи аспектну &amp;сразмеру</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation type="obsolete">Боја за поп&amp;уњавање:</translation>
    </message>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="obsolete">Угл&amp;ови:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="obsolete">&amp;Ротација:</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="obsolete">Примени &amp;фактор</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="obsolete">&amp;Фактор:</translation>
    </message>
    <message>
        <source>Other Options</source>
        <translation type="obsolete">Остале опције</translation>
    </message>
    <message>
        <source>Sa&amp;ve Contents on Changes</source>
        <translation type="obsolete">Сн&amp;ими садржај приликом измена</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation type="obsolete">Преглед</translation>
    </message>
    <message>
        <source>Small</source>
        <translation type="obsolete">Мали</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="obsolete">Средњи</translation>
    </message>
    <message>
        <source>Large</source>
        <translation type="obsolete">Велики</translation>
    </message>
    <message>
        <source>Display Pages &amp;Side by Side</source>
        <translation type="obsolete">Прикажи странице &amp;једну до друге</translation>
    </message>
    <message>
        <source>Page Colors</source>
        <translation type="obsolete">Боје странице</translation>
    </message>
    <message>
        <source>&amp;Background:</source>
        <translation type="obsolete">&amp;Позадина:</translation>
    </message>
    <message>
        <source>&amp;Margins:</source>
        <translation type="obsolete">&amp;Маргине:</translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation type="obsolete">Прикажи област која се не може одштампати у боји маргине</translation>
    </message>
    <message>
        <source>Use PDF 1.4 &amp;Transparency Features</source>
        <translation type="obsolete">Користи опције &amp;провидности PDF 1.4</translation>
    </message>
    <message>
        <source>&amp;Adjust Display Size</source>
        <translation type="obsolete">&amp;Подеси величину приказа</translation>
    </message>
    <message>
        <source>To adjust the display drag the ruler below with the Slider.</source>
        <translation type="obsolete">Да бисте подесили приказ вуците лењир испод помоћу клизача.</translation>
    </message>
    <message>
        <source>Postscript Interpreter</source>
        <translation type="obsolete">Postscript интерпретатор</translation>
    </message>
    <message>
        <source>&amp;Name of Executable:</source>
        <translation type="obsolete">&amp;Име извршног фајла:</translation>
    </message>
    <message>
        <source>Antialias &amp;Text</source>
        <translation type="obsolete">Омекшај &amp;текст</translation>
    </message>
    <message>
        <source>Antialias &amp;Graphics</source>
        <translation type="obsolete">Омекшај &amp;графику</translation>
    </message>
    <message>
        <source>Image Processing Tool</source>
        <translation type="obsolete">Алат за обраду слика</translation>
    </message>
    <message>
        <source>Name of &amp;Executable:</source>
        <translation type="obsolete">Имена &amp;извршних фајлова:</translation>
    </message>
    <message>
        <source>Printing</source>
        <translation type="obsolete">Штампање</translation>
    </message>
    <message>
        <source>Clip to Page &amp;Margins</source>
        <translation type="obsolete">Исеци у &amp;маргину странице</translation>
    </message>
    <message>
        <source>Apply &amp;Under Color Removal</source>
        <translation type="obsolete">Примени &amp;под уклањање боја</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Choose the default window decoration and looks.
Scribus inherits any available KDE or Qt themes</source>
        <translation type="obsolete">Изаберите подразумевано украшавање прозора и изглед.
Scribus наслеђује било које доступне KDE или Qt теме</translation>
    </message>
    <message>
        <source>Default font size for the menus and windows</source>
        <translation type="obsolete">Подразумевана величина за меније и прозоре</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation type="obsolete">Подразумевана јединица мере за уређивање документа</translation>
    </message>
    <message>
        <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
        <translation type="obsolete">Број линија које ће се скроловати при сваком померању точкића на мишу</translation>
    </message>
    <message>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation type="obsolete">Радијус области где ће Вам scribus дозволити да хватате објекте</translation>
    </message>
    <message>
        <source>Number of recently edited documents to show in the File menu</source>
        <translation type="obsolete">Број скорије измењених докумената који се приказују у менију „Фајл“</translation>
    </message>
    <message>
        <source>Default documents directory</source>
        <translation type="obsolete">Подразумевани директоријум за документе</translation>
    </message>
    <message>
        <source>Default ICC profiles directory</source>
        <translation type="obsolete">Подразумевани директоријум за ICC профиле</translation>
    </message>
    <message>
        <source>Default Scripter scripts directory</source>
        <translation type="obsolete">Подразумевани директоријум за scripter скрипте</translation>
    </message>
    <message>
        <source>Additional Directory for Document Templates</source>
        <translation type="obsolete">Додатни директоријум за шаблоне докумената</translation>
    </message>
    <message>
        <source>Default page size, either a standard size or a custom size</source>
        <translation type="obsolete">Подразумевана величина странице, или стандардна или произвољна величина</translation>
    </message>
    <message>
        <source>Default orientation of document pages</source>
        <translation type="obsolete">Подразумевана оријентација страница документа</translation>
    </message>
    <message>
        <source>Width of document pages, editable if you have chosen a custom page size</source>
        <translation type="obsolete">Ширина страница документа, измењива ако сте изабрали произвољну величину странице</translation>
    </message>
    <message>
        <source>Height of document pages, editable if you have chosen a custom page size</source>
        <translation type="obsolete">Висина страница документа, измењива ако сте изабрали произвољну величину странице</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation type="obsolete">Укључи једноструки распоред или раширени распоред</translation>
    </message>
    <message>
        <source>Make the first page the left page of a document</source>
        <translation type="obsolete">Учини да прва страица документа буде лева</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation type="obsolete">Растојање између водиље горње маргине и обода странице</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation type="obsolete">Растојање између водиље доње маргине и обода странице</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Растојање између водиље леве маргине и обода странице.
Ако је изабрано „Упоредне странице“, овај размак маргина се може користити за постизање исправних маргина за повезивање</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Растојање између водиље десне маргине и обода странице.
Ако је изабрано „Упоредне странице“, овај размак маргина се може користити за постизање исправних маргина за повезивање</translation>
    </message>
    <message>
        <source>When enabled, Scribus saves a backup copy of your file with the .bak extension
each time the time period elapses</source>
        <translation type="obsolete">Када је укључено, Scribus снима резервну копију Вашег документа са наставком .bak
сваки пут када истекне временски период</translation>
    </message>
    <message>
        <source>Time period between saving automatically</source>
        <translation type="obsolete">Временски период између аутоматског снимања</translation>
    </message>
    <message>
        <source>Distance between the minor grid lines</source>
        <translation type="obsolete">Растојање између мањих линија мреже</translation>
    </message>
    <message>
        <source>Distance between the major grid lines</source>
        <translation type="obsolete">Растојање између озбиљних линија мреже</translation>
    </message>
    <message>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation type="obsolete">Растојање у оквиру кога ће се објекат пребацити на постављене водиље</translation>
    </message>
    <message>
        <source>Color of the minor grid lines</source>
        <translation type="obsolete">Боја мањих линија мреже</translation>
    </message>
    <message>
        <source>Color of the major grid lines</source>
        <translation type="obsolete">Боја озбиљнијих линија мреже</translation>
    </message>
    <message>
        <source>Color of the guide lines you insert</source>
        <translation type="obsolete">Боја водиља које Ви умећете</translation>
    </message>
    <message>
        <source>Place the grid behind your page objects</source>
        <translation type="obsolete">Постави мрежу иза Ваших објеката на страници</translation>
    </message>
    <message>
        <source>Place the grid in front of your page objects</source>
        <translation type="obsolete">Постави мрежу испред Ваших објеката на страници</translation>
    </message>
    <message>
        <source>Turns on the basegrid</source>
        <translation type="obsolete">Укључује основну мрежу</translation>
    </message>
    <message>
        <source>Turns off the basegrid</source>
        <translation type="obsolete">Искључује основну мрежу</translation>
    </message>
    <message>
        <source>Displacement above the baseline of the font on a line</source>
        <translation type="obsolete">Погрешно постављање изнад основне линије фонта на линији</translation>
    </message>
    <message>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation type="obsolete">Релативна величина superscript-а у поређењу са нормалним фонтом</translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation type="obsolete">Погрешно постављање испод основне линије фонта на линији</translation>
    </message>
    <message>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation type="obsolete">Релативна величина subscript-а у поређењу са нормалним фонтом</translation>
    </message>
    <message>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation type="obsolete">Релативна величина фонта малих слова у поређењу са нормалним фонтом</translation>
    </message>
    <message>
        <source>Percentage increase over the font size for the line spacing</source>
        <translation type="obsolete">Процентуално повећање величине фонта за проред линија</translation>
    </message>
    <message>
        <source>Text Frame Properties</source>
        <translation type="obsolete">Својства текстуалног оквира</translation>
    </message>
    <message>
        <source>Picture Frame Properties</source>
        <translation type="obsolete">Својства оквира за слике</translation>
    </message>
    <message>
        <source>Shape Drawing Properties</source>
        <translation type="obsolete">Својства исцртавања облика</translation>
    </message>
    <message>
        <source>Magnification Level Defaults</source>
        <translation type="obsolete">Подразумеване вредности нивоа увеличавања</translation>
    </message>
    <message>
        <source>Line Drawing Properties</source>
        <translation type="obsolete">Својства исцртавања линија</translation>
    </message>
    <message>
        <source>Polygon Drawing Properties</source>
        <translation type="obsolete">Својства исцртавања полигона</translation>
    </message>
    <message>
        <source>Font for new text frames</source>
        <translation type="obsolete">Фонт за нове текстуалне оквире</translation>
    </message>
    <message>
        <source>Size of font for new text frames</source>
        <translation type="obsolete">Величина фонта за нове текстуалне оквире</translation>
    </message>
    <message>
        <source>Color of font</source>
        <translation type="obsolete">Боја фонта</translation>
    </message>
    <message>
        <source>Number of columns in a text frame</source>
        <translation type="obsolete">Број колона у текстуалном оквиру</translation>
    </message>
    <message>
        <source>Gap between text frame columns</source>
        <translation type="obsolete">Размак између колона текстуалног оквира</translation>
    </message>
    <message>
        <source>Sample of your font</source>
        <translation type="obsolete">Пример Вашег фонта</translation>
    </message>
    <message>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation type="obsolete">Оквири за слике дозвољавају скалирање слика на било коју величину</translation>
    </message>
    <message>
        <source>Horizontal scaling of images</source>
        <translation type="obsolete">Водоравно скалирање слика</translation>
    </message>
    <message>
        <source>Vertical scaling of images</source>
        <translation type="obsolete">Усправно скалирање слика</translation>
    </message>
    <message>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation type="obsolete">Задржи подједнако водоравно и усправно скалирање</translation>
    </message>
    <message>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation type="obsolete">Слике у оквирима за слике се скалирају према величини оквира</translation>
    </message>
    <message>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation type="obsolete">Аутоматски скалиране слике задржавају своје оригиналне пропорције</translation>
    </message>
    <message>
        <source>Fill color of picture frames</source>
        <translation type="obsolete">Боја за испуњавање оквира за слике</translation>
    </message>
    <message>
        <source>Saturation of color of fill</source>
        <translation type="obsolete">Засићење боје за испуњавање</translation>
    </message>
    <message>
        <source>Line color of shapes</source>
        <translation type="obsolete">Боја линије за облике</translation>
    </message>
    <message>
        <source>Saturation of color of lines</source>
        <translation type="obsolete">Засићење боје за линије</translation>
    </message>
    <message>
        <source>Fill color of shapes</source>
        <translation type="obsolete">Боја испуњавања за облике</translation>
    </message>
    <message>
        <source>Line style of shapes</source>
        <translation type="obsolete">Стил линије за облике</translation>
    </message>
    <message>
        <source>Line width of shapes</source>
        <translation type="obsolete">Ширина линије за облике</translation>
    </message>
    <message>
        <source>Minimum magnification allowed</source>
        <translation type="obsolete">Минимално увећање дозвољено</translation>
    </message>
    <message>
        <source>Maximum magnification allowed</source>
        <translation type="obsolete">Максимално увећање дозвољено</translation>
    </message>
    <message>
        <source>Change in magnification for each zoom operation</source>
        <translation type="obsolete">Измена увеличања за сваку операцију увеличавања/умањивања</translation>
    </message>
    <message>
        <source>Color of lines</source>
        <translation type="obsolete">Боја линија</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation type="obsolete">Засићење боје</translation>
    </message>
    <message>
        <source>Style of lines</source>
        <translation type="obsolete">Стил линија</translation>
    </message>
    <message>
        <source>Width of lines</source>
        <translation type="obsolete">Ширина линија</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="obsolete">Број углова за полигоне</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="obsolete">Степени ротације за полигоне</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="obsolete">Примени конвексно/конкавно фактор да би променио облик полигона</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="obsolete">Пример полигона</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="obsolete">Негативна вредност ће полигон учинити конкавним 
(или у облику звезде),
 позитивна вредност ће га учинити конвексним</translation>
    </message>
    <message>
        <source>Choose the size of the preview in the scrapbook palette</source>
        <translation type="obsolete">Изаберите величину прегледа у албумској палети</translation>
    </message>
    <message>
        <source>Save the scrapbook contents everytime after a change</source>
        <translation type="obsolete">Сними садржај албума после сваке измене</translation>
    </message>
    <message>
        <source>When using facing pages, show the two pages side by side</source>
        <translation type="obsolete">Када се користе наспрамне странице, прикажи две странице једну поред друге</translation>
    </message>
    <message>
        <source>Color for paper</source>
        <translation type="obsolete">Боја папира</translation>
    </message>
    <message>
        <source>Color for the margin lines</source>
        <translation type="obsolete">Боја линија маргина</translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation type="obsolete">Маскирај област изван линија маргина у боју тих линија</translation>
    </message>
    <message>
        <source>Enable transparency features within PDF 1.4 export</source>
        <translation type="obsolete">Укључи својства провидности у оквиру PDF 1.4 извоза</translation>
    </message>
    <message>
        <source>Set the default zoom level</source>
        <translation type="obsolete">Постави подразумевани ниво увеличања/умањења</translation>
    </message>
    <message>
        <source>Filesystem location for the Ghostscript interpreter</source>
        <translation type="obsolete">Локација фајл система за Ghostscript интепретатор</translation>
    </message>
    <message>
        <source>Antialias text for EPS and PDF onscreen rendering</source>
        <translation type="obsolete">Омекшај текст за EPS и PDF рендеровање на екрану</translation>
    </message>
    <message>
        <source>Antialias graphics for EPS and PDF onscreen rendering</source>
        <translation type="obsolete">Омекшај графику за EPS и PDF рендеровање на екрану</translation>
    </message>
    <message>
        <source>Filesystem location for graphics editor</source>
        <translation type="obsolete">Локација фајл система за измењивач графике</translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page or exported file</source>
        <translation type="obsolete">Немој да приказујеш објекте изван маргина на одштампаној страници или извезеном фајлу</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="obsolete">Начин за искључивање неких сивих сенки које су састављене
од цијан, жуте, и магенте и коришћења црне уместо тога.
UCR највише утиче на делове слике који имају неутралне и/или тамне тонове
који су блиски сивој. Коришћење овога може поправити штампу неких слика
и потребно је мало експериментисања у зависности од случаја.
UCR смањује могућност презасићености CMY мастилима.</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation type="obsolete">Изаберите директоријум</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation type="obsolete">&amp;Унутра:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation type="obsolete">Спо&amp;ља:</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation type="obsolete">Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation type="obsolete">Letter</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation type="obsolete">Таблоид</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation type="obsolete">&amp;Језик:</translation>
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
        <source>Color Management</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="obsolete">Боја:</translation>
    </message>
    <message>
        <source>Plugins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preflight Verifier</source>
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
        <source>Miscellaneous</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Врста</translation>
    </message>
    <message>
        <source>File</source>
        <translation type="obsolete">Фајл</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="obsolete">Да</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="obsolete">Не</translation>
    </message>
</context>
<context>
    <name>PrefsDialogBase</name>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>&amp;Defaults</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation type="unfinished">&amp;Примени</translation>
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
        <source>Left Page</source>
        <translation type="obsolete">Лева страница</translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation type="obsolete">Десна страница</translation>
    </message>
    <message>
        <source>Postscript</source>
        <translation type="unfinished">Postscript</translation>
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
        <source>PostScript</source>
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
        <translation type="obsolete">Ниједан</translation>
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
        <source>Gutenberg</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <comment>layout type</comment>
        <translation type="unfinished">Ниједан</translation>
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
        <translation type="unfinished">&amp;Отвори...</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished">&amp;Сними</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="unfinished">Сними &amp;као...</translation>
    </message>
    <message>
        <source>&amp;Exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished">&amp;Фајл</translation>
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
        <source>Script Console</source>
        <translation type="unfinished">Конзола за скрипте</translation>
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
        <source>Save the Python Commands in File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Text Files (*.txt)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save Current Output</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open Python Script File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Python Scripts (*.py *.PY)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QColorDialog</name>
    <message>
        <source>Hu&amp;e:</source>
        <translation>Нијансира&amp;ј:</translation>
    </message>
    <message>
        <source>&amp;Sat:</source>
        <translation>&amp;Зас:</translation>
    </message>
    <message>
        <source>&amp;Val:</source>
        <translation>&amp;Вре:</translation>
    </message>
    <message>
        <source>&amp;Red:</source>
        <translation>&amp;Црвена:</translation>
    </message>
    <message>
        <source>&amp;Green:</source>
        <translation>&amp;Зелена:</translation>
    </message>
    <message>
        <source>Bl&amp;ue:</source>
        <translation>Пл&amp;ава:</translation>
    </message>
    <message>
        <source>A&amp;lpha channel:</source>
        <translation>А&amp;лфа канал:</translation>
    </message>
    <message>
        <source>&amp;Basic colors</source>
        <translation>&amp;Основне боје</translation>
    </message>
    <message>
        <source>&amp;Custom colors</source>
        <translation>&amp;Произвољне боје</translation>
    </message>
    <message>
        <source>&amp;Define Custom Colors &gt;&gt;</source>
        <translation>&amp;Дефинишите произвољне боје &gt;&gt;</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>У реду</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Поништи</translation>
    </message>
    <message>
        <source>&amp;Add to Custom Colors</source>
        <translation>&amp;Додај у биране боје</translation>
    </message>
    <message>
        <source>Select color</source>
        <translation>Изаберите боју</translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <source>Copy or Move a File</source>
        <translation>Копирај или помери фајл</translation>
    </message>
    <message>
        <source>Read: %1</source>
        <translation>Прочитај: %1</translation>
    </message>
    <message>
        <source>Write: %1</source>
        <translation>Упиши: %1</translation>
    </message>
    <message>
        <source>File &amp;name:</source>
        <translation>&amp;Име фајла:</translation>
    </message>
    <message>
        <source>File &amp;type:</source>
        <translation>&amp;Врста фајла:</translation>
    </message>
    <message>
        <source>One directory up</source>
        <translation>Један директоријум горе</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Поништи</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Име</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Величина</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Врста</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Датум</translation>
    </message>
    <message>
        <source>Attributes</source>
        <translation>Атрибути</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>У реду</translation>
    </message>
    <message>
        <source>Look &amp;in:</source>
        <translation>Т&amp;ражи у:</translation>
    </message>
    <message>
        <source>Back</source>
        <translation>Назад</translation>
    </message>
    <message>
        <source>Create New Folder</source>
        <translation>Направи нови директоријум</translation>
    </message>
    <message>
        <source>List View</source>
        <translation>Приказ листе</translation>
    </message>
    <message>
        <source>Detail View</source>
        <translation>Приказ детаља</translation>
    </message>
    <message>
        <source>Preview File Info</source>
        <translation>Преглед информација о фајлу</translation>
    </message>
    <message>
        <source>Preview File Contents</source>
        <translation>Преглед садржаја фајла</translation>
    </message>
    <message>
        <source>Read-write</source>
        <translation>Читање-упис</translation>
    </message>
    <message>
        <source>Read-only</source>
        <translation>Само за читање</translation>
    </message>
    <message>
        <source>Write-only</source>
        <translation>Само за упис</translation>
    </message>
    <message>
        <source>Inaccessible</source>
        <translation>Није приступачан</translation>
    </message>
    <message>
        <source>Symlink to File</source>
        <translation>Симболичка веза до фајла</translation>
    </message>
    <message>
        <source>Symlink to Directory</source>
        <translation>Симболичка веза до директоријума</translation>
    </message>
    <message>
        <source>Symlink to Special</source>
        <translation>Симболичка веза до специјалног</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Фајл</translation>
    </message>
    <message>
        <source>Dir</source>
        <translation>Дир.</translation>
    </message>
    <message>
        <source>Special</source>
        <translation>Специјално</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Отвори</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation>Сними као</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Отвори</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Сними</translation>
    </message>
    <message>
        <source>&amp;Rename</source>
        <translation>&amp;Преименуј</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Обриши</translation>
    </message>
    <message>
        <source>R&amp;eload</source>
        <translation>У&amp;читај поново</translation>
    </message>
    <message>
        <source>Sort by &amp;Name</source>
        <translation>Поређај по &amp;имену</translation>
    </message>
    <message>
        <source>Sort by &amp;Size</source>
        <translation>Поређај по &amp;величини</translation>
    </message>
    <message>
        <source>Sort by &amp;Date</source>
        <translation>Поређај по &amp;датуму</translation>
    </message>
    <message>
        <source>&amp;Unsorted</source>
        <translation>&amp;Није поређано</translation>
    </message>
    <message>
        <source>Sort</source>
        <translation>Поређај</translation>
    </message>
    <message>
        <source>Show &amp;hidden files</source>
        <translation>Приказуј &amp;скривене фајлове</translation>
    </message>
    <message>
        <source>the file</source>
        <translation>тај фајл</translation>
    </message>
    <message>
        <source>the directory</source>
        <translation>тај директоријум</translation>
    </message>
    <message>
        <source>the symlink</source>
        <translation>та симболичка веза</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>Обриши %1</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Are you sure you wish to delete %1 &quot;%2&quot;?&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Да ли сте сигурни да желите да обришете %1 „%2“?&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Да</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Не</translation>
    </message>
    <message>
        <source>New Folder 1</source>
        <translation>Нови директоријум 1</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>Нови директоријум</translation>
    </message>
    <message>
        <source>New Folder %1</source>
        <translation>Нови директоријум %1</translation>
    </message>
    <message>
        <source>Find Directory</source>
        <translation>Нађи директоријум</translation>
    </message>
    <message>
        <source>Directories</source>
        <translation>Директоријуми</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>Сними</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Грешка</translation>
    </message>
    <message>
        <source>%1
File not found.
Check path and filename.</source>
        <translation>%1
Фајл није пронађен.
Проверите путању и име фајла.</translation>
    </message>
    <message>
        <source>All Files (*.*)</source>
        <translation>Сви фајлови (*.*)</translation>
    </message>
    <message>
        <source>Select a Directory</source>
        <translation>Изаберите директоријум</translation>
    </message>
    <message>
        <source>Directory:</source>
        <translation>Директоријум:</translation>
    </message>
</context>
<context>
    <name>QFontDialog</name>
    <message>
        <source>&amp;Font</source>
        <translation>&amp;Фонт</translation>
    </message>
    <message>
        <source>Font st&amp;yle</source>
        <translation>Ст&amp;ил фонта</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;Величина</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation>Ефекти</translation>
    </message>
    <message>
        <source>Stri&amp;keout</source>
        <translation>&amp;Прецртано</translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation>&amp;Подвуци</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation>&amp;Боја</translation>
    </message>
    <message>
        <source>Sample</source>
        <translation>Пример</translation>
    </message>
    <message>
        <source>Scr&amp;ipt</source>
        <translation>Скр&amp;ипт</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>У реду</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Примени</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Поништи</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Затвори</translation>
    </message>
    <message>
        <source>Select Font</source>
        <translation>Изаберите фонт</translation>
    </message>
</context>
<context>
    <name>QLineEdit</name>
    <message>
        <source>Clear</source>
        <translation>Очисти</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>Изабери све</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Опозови</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>Поно&amp;ви</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>&amp;Исеци</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Копирај</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Пренеси</translation>
    </message>
</context>
<context>
    <name>QMainWindow</name>
    <message>
        <source>Line up</source>
        <translation>Поравнај</translation>
    </message>
    <message>
        <source>Customize...</source>
        <translation>Подеси...</translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <source>&lt;h3&gt;About Qt&lt;/h3&gt;&lt;p&gt;This program uses Qt version %1.&lt;/p&gt;&lt;p&gt;Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p&gt;&lt;p&gt;Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br&gt;Qt is also available for embedded devices.&lt;/p&gt;&lt;p&gt;Qt is a Trolltech product. See &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt; for more information.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;О Qt-у&lt;/h3&gt;
&lt;p&gt;Овај програм користи Qt верзију %1.&lt;/p&gt;
&lt;p&gt;Qt је  вишеплатформски C++ GUI скуп алата од 
фирме Trolltech.&lt;/p&gt;
&lt;p&gt;Qt пружа портабилност на нивоу изворног 
кода кроз MS Windows, Mac OS X, Linux, и све главне 
комерцијалне Unix варијанте.
&lt;br&gt;Qt такође, постоји и за преносне и 
уградиве уређаје.&lt;/p&gt;
&lt;p&gt;Погледајте &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt; за више 
информација.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Oook! Wrong arguments! Call: </source>
        <translation type="obsolete">Упс! Погрешни аргументи! Позови: </translation>
    </message>
    <message>
        <source>Importing text</source>
        <translation>Увозим текст</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation>Сви подржани формати</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Font %1 is broken, discarding it</source>
        <translation>Фонт %1 није исправан, одбацујем га</translation>
    </message>
    <message>
        <source>Initializing...</source>
        <translation>Иницијализује се...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="obsolete">Документ</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Позадина</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Do you really want to overwrite the File:
%1 ?</source>
        <translation>Да ли стварно желите да пребришете фајл: 
%1 ?</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview</source>
        <translation type="obsolete">Преглед &amp;фонтова</translation>
    </message>
    <message>
        <source>&amp;Insert Special</source>
        <translation type="obsolete">&amp;Уметни специјално</translation>
    </message>
    <message>
        <source>New &amp;from Template...</source>
        <translation type="obsolete">Нови &amp;из шаблона...</translation>
    </message>
    <message>
        <source>Template: </source>
        <translation type="obsolete">Шаблон:  </translation>
    </message>
    <message>
        <source>Newsletters</source>
        <translation>Кружно писмо</translation>
    </message>
    <message>
        <source>Brochures</source>
        <translation>Брошуре</translation>
    </message>
    <message>
        <source>Catalogs</source>
        <translation>Каталози</translation>
    </message>
    <message>
        <source>Flyers</source>
        <translation>Флајери</translation>
    </message>
    <message>
        <source>Signs</source>
        <translation>Знаци</translation>
    </message>
    <message>
        <source>Cards</source>
        <translation>Картице</translation>
    </message>
    <message>
        <source>Letterheads</source>
        <translation>Заглавља</translation>
    </message>
    <message>
        <source>Envelopes</source>
        <translation>Коверте</translation>
    </message>
    <message>
        <source>Business Cards</source>
        <translation>Подсетнице</translation>
    </message>
    <message>
        <source>Calendars</source>
        <translation>Календари</translation>
    </message>
    <message>
        <source>Advertisements</source>
        <translation>Огласи</translation>
    </message>
    <message>
        <source>Labels</source>
        <translation>Ознаке</translation>
    </message>
    <message>
        <source>Menus</source>
        <translation>Менији</translation>
    </message>
    <message>
        <source>Programs</source>
        <translation>Програми</translation>
    </message>
    <message>
        <source>PDF Forms</source>
        <translation>PDF формулари</translation>
    </message>
    <message>
        <source>PDF Presentations</source>
        <translation>PDF презентације</translation>
    </message>
    <message>
        <source>Magazines</source>
        <translation>Часописи</translation>
    </message>
    <message>
        <source>Posters</source>
        <translation>Постери</translation>
    </message>
    <message>
        <source>Announcements</source>
        <translation>Објаве</translation>
    </message>
    <message>
        <source>Text Documents</source>
        <translation>Текстуални документи</translation>
    </message>
    <message>
        <source>Folds</source>
        <translation>Фасцикле</translation>
    </message>
    <message>
        <source>Own Templates</source>
        <translation>Властити шаблони</translation>
    </message>
    <message>
        <source>Save as &amp;Image...</source>
        <translation type="obsolete">Сними као &amp;слику...</translation>
    </message>
    <message>
        <source>Save as Image</source>
        <translation>Сними као слику</translation>
    </message>
    <message>
        <source>Error writting the output file(s).</source>
        <translation type="obsolete">Грешка при писању излазног фајла(ова).</translation>
    </message>
    <message>
        <source>Error writing the output file(s).</source>
        <translation>Грешка при писању излазног фајла(ова).</translation>
    </message>
    <message>
        <source>Export successful.</source>
        <translation>Извоз успешан.</translation>
    </message>
    <message>
        <source>File exists. Overwrite?</source>
        <translation>Фајл постоји. Да пребришем?</translation>
    </message>
    <message>
        <source>exists already. Overwrite?</source>
        <translation>већ постоји Да пребришем?</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Не</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Да</translation>
    </message>
    <message>
        <source>Yes all</source>
        <translation>Да све</translation>
    </message>
    <message>
        <source>Print Preview</source>
        <translation type="obsolete">Преглед пре штампања</translation>
    </message>
    <message>
        <source>Print Previe&amp;w</source>
        <translation type="obsolete">Прегл&amp;ед за штампање</translation>
    </message>
    <message>
        <source>Import &amp;EPS/PS...</source>
        <translation type="obsolete">Увези &amp;EPS/PS...</translation>
    </message>
    <message>
        <source>All Supported Formats (*.eps *.EPS *.ps *.PS);;</source>
        <translation>Сви подржани формати (*.eps *.EPS *.ps *.PS);;</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Отвори</translation>
    </message>
    <message>
        <source>Save as &amp;Template...</source>
        <translation type="obsolete">Сними као &amp;шаблон...</translation>
    </message>
    <message>
        <source>Oook! You&apos;re trying to load image into an object doesn&apos;t exist or isn&apos;t selected!</source>
        <translation type="obsolete">Упс! Покушавате да учитате слику у објекат који не постоји или није изабран.</translation>
    </message>
    <message>
        <source>Oook! You&apos;re trying to (un)lock an object doesn&apos;t exist! None selected too.</source>
        <translation type="obsolete">Упс! Покушавате да (откључате)закључате објекат који не постоји! Такође, ниједан није изабран.</translation>
    </message>
    <message>
        <source>Oook! You&apos;re trying to query an object doesn&apos;t exist! None selected too.</source>
        <translation type="obsolete">Упс! Покушавате да позовете објекат који не постоји! Такође, ниједан није изабран.</translation>
    </message>
    <message>
        <source>Oook! You&apos;re calling an object doesn&apos;t exist!</source>
        <translation type="obsolete">Упс! Позивате објекат који не постоји!</translation>
    </message>
    <message>
        <source>Oook! You&apos;re trying to erase an object doesn&apos;t exist!</source>
        <translation type="obsolete">Упс! Покушавате да обришете објекат који не постоји!</translation>
    </message>
    <message>
        <source>Oook! An object you&apos;re trying to textflow doesn&apos;t exist!</source>
        <translation type="obsolete">Упс! Објекат који покушавате да придружите тексту не постоји!</translation>
    </message>
    <message>
        <source>S&amp;cripter Manual...</source>
        <translation type="obsolete">S&amp;cripter приручник...</translation>
    </message>
    <message>
        <source>&amp;Scribus Scripts</source>
        <translation type="unfinished">&amp;Scribus скрипте</translation>
    </message>
    <message>
        <source>&amp;Execute Script...</source>
        <translation type="unfinished">&amp;Изврши скрипту...</translation>
    </message>
    <message>
        <source>&amp;Recent Scripts</source>
        <translation type="unfinished">&amp;Скорашње скрипте</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation type="unfinished">Прикажи &amp;конзолу</translation>
    </message>
    <message>
        <source>S&amp;cript</source>
        <translation type="obsolete">С&amp;крипта</translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation type="obsolete">Веб референца</translation>
    </message>
    <message>
        <source>Python Scripts (*.py);; All Files (*)</source>
        <translation type="obsolete">Python скрипте (*.py);; Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Save Page as &amp;SVG...</source>
        <translation type="obsolete">Сними страницу као &amp;SVG...</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Сними као</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg *.svgz);;All Files (*)</source>
        <translation>SVG-слике (*.svg *.svgz);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg);;All Files (*)</source>
        <translation>SVG-слике (*.svg);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Import &amp;SVG...</source>
        <translation type="obsolete">Увези &amp;SVG...</translation>
    </message>
    <message>
        <source>Comma Separated Value Files</source>
        <translation>Фајлови са вредностима одвојеним запетом</translation>
    </message>
    <message>
        <source>CSV_data</source>
        <translation>CSV_подаци</translation>
    </message>
    <message>
        <source>CSV_header</source>
        <translation>CSV_заглавље</translation>
    </message>
    <message>
        <source>HTML Files</source>
        <translation>HTML фајлови</translation>
    </message>
    <message>
        <source>html</source>
        <translation>html</translation>
    </message>
    <message>
        <source>
External Links
</source>
        <translation>
Спољашње везе</translation>
    </message>
    <message>
        <source>OO.o Writer Documents</source>
        <translation type="obsolete">OO.o Writer документи</translation>
    </message>
    <message>
        <source>Text Filters</source>
        <translation>Текст филтери</translation>
    </message>
    <message>
        <source>Text Files</source>
        <translation>Текстуални фајлови</translation>
    </message>
    <message>
        <source>Media Cases</source>
        <translation>Медисјки случајеви</translation>
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
        <source>Brazilian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation type="unfinished">Каталански</translation>
    </message>
    <message>
        <source>Chinese</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Czech</source>
        <translation type="unfinished">Чешки</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation type="unfinished">Дански</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation type="unfinished">Холандски</translation>
    </message>
    <message>
        <source>English</source>
        <translation type="unfinished">Енглески</translation>
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
        <source>German</source>
        <translation type="unfinished">Немачки</translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation type="unfinished">Фински</translation>
    </message>
    <message>
        <source>French</source>
        <translation type="unfinished">Француски</translation>
    </message>
    <message>
        <source>Galician</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Greek</source>
        <translation type="unfinished">Грчки</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation type="unfinished">Мађарски</translation>
    </message>
    <message>
        <source>Indonesian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Italian</source>
        <translation type="unfinished">Италијански</translation>
    </message>
    <message>
        <source>Korean</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation type="unfinished">Литвански</translation>
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
        <translation type="unfinished">Пољски</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation type="unfinished">Руски</translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation type="unfinished">Шведски</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation type="unfinished">Шпански</translation>
    </message>
    <message>
        <source>Spanish (Latin)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation type="unfinished">Словачки</translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation type="unfinished">Словеначки</translation>
    </message>
    <message>
        <source>Serbian</source>
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
        <source>Alignment out of range. Use one of the scribus.ALIGN* constants.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selection index out of bounds</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unit out of range. Use one of the scribus.UNIT_* constants.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target is not an image frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Corner radius must be a positive number.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot change a color with an empty name.</source>
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
        <source>OpenOffice.org Writer Documents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color not found - python error</source>
        <comment>python error</comment>
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
        <source>Afrikaans</source>
        <translation type="unfinished">Африканерски</translation>
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
        <source>The filename must be a string.</source>
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
        <source>Cannot scale by 0%.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Specified item not an image frame.</source>
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
        <source>Cannot convert a non-text frame to outlines.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished">Страница</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">Произвољно</translation>
    </message>
    <message>
        <source>Scribus Development Version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> тач.</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished"> p</translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="unfinished">pt</translation>
    </message>
    <message>
        <source>mm</source>
        <translation type="unfinished">mm</translation>
    </message>
    <message>
        <source>in</source>
        <translation type="unfinished">in</translation>
    </message>
    <message>
        <source>p</source>
        <translation type="unfinished">p</translation>
    </message>
    <message>
        <source>Points (pt)</source>
        <translation type="unfinished">тачке (pt)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation type="obsolete">Милиметри (mm)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="unfinished">Инчи (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="unfinished">Пика (p)</translation>
    </message>
    <message>
        <source>File exists</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation type="unfinished">&amp;Замени</translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished">Све</translation>
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
        <source>Unable to save pixmap</source>
        <comment>scripter error</comment>
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
        <source>Failed to save EPS.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page number out of range.</source>
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
        <source>Line style not found.</source>
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
        <source>Only text frames can be checked for overflowing</source>
        <comment>python error</comment>
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
        <source>About Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Croatian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Portuguese</source>
        <translation type="unfinished">Португалски</translation>
    </message>
    <message>
        <source>Portuguese (BR)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus Crash</source>
        <translation type="unfinished">Пуцање scribus-а</translation>
    </message>
    <message>
        <source>Scribus crashes due to Signal #%1</source>
        <translation type="unfinished">Scribus пуца због сигнала #%1</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished">&amp;У реду</translation>
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
        <source>Freetype2 library not available</source>
        <translation type="unfinished"></translation>
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
        <source> cm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> c</source>
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
        <source>Millimeters (mm)</source>
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
        <source>page</source>
        <comment>page export</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Fonts Preview...</source>
        <translation type="obsolete">Преглед &amp;фонтова...</translation>
    </message>
    <message>
        <source>Document Template: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color not found.</source>
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
        <source>The filename should not be empty string.</source>
        <comment>python error</comment>
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
        <source>OpenDocument Text Documents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished">Копија #%1 од</translation>
    </message>
    <message>
        <source>Black</source>
        <translation type="unfinished">Црна</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation type="unfinished">Цијан</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation type="unfinished">Магента</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation type="unfinished">Жута</translation>
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
        <translation type="unfinished">Нови из шаблона</translation>
    </message>
    <message>
        <source>Export As Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PS/EPS Importer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save As Template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scripter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Short Words</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SVG Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SVG Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OpenOffice.org Draw Importer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus crashes due to the following exception : %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Creating Font Cache</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Font found, checking...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Modified Font found, checking...</source>
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
        <translation type="unfinished">Тражим фонтове</translation>
    </message>
    <message>
        <source>The changes to your document have not been saved and you have requested to revert them. Do you wish to continue?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A file named &apos;%1&apos; already exists.&lt;br/&gt;Do you want to replace it with the file you are saving?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>firstPageOrder is bigger than allowed.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Old .sla format support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>German (Trad.)</source>
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
        <source>&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;reate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished">&amp;Увези</translation>
    </message>
    <message>
        <source>Thai</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Barcode Generator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OpenOffice.org Draw (*.sxd *.odg);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Word Documents</source>
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
        <source>Luxembourgish</source>
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
        <source>Given master page name does not match any existing.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arabic</source>
        <translation type="unfinished"></translation>
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
        <source>+tracking %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>-tracking </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>+baseline %1</source>
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
        <source>unnamed</source>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Foolscap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Letter</source>
        <translation type="unfinished">Letter</translation>
    </message>
    <message>
        <source>Govt. Letter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Legal</source>
        <translation type="unfinished">Legal</translation>
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
        <translation type="unfinished">Средњи</translation>
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
        <translation type="unfinished">C</translation>
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
        <source>Scribus 1.3.0-&gt;1.3.3.2 Support</source>
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
</context>
<context>
    <name>QTextEdit</name>
    <message>
        <source>Clear</source>
        <translation>Очисти</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>Изабери све</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Опозови</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>Поно&amp;ви</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>&amp;Исеци</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Копирај</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Пренеси</translation>
    </message>
</context>
<context>
    <name>QTitleBar</name>
    <message>
        <source>System Menu</source>
        <translation>Системски мени</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Намотај</translation>
    </message>
    <message>
        <source>Unshade</source>
        <translation>Одмотај</translation>
    </message>
    <message>
        <source>Normalize</source>
        <translation>Нормализуј</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>Минимизуј</translation>
    </message>
    <message>
        <source>Maximize</source>
        <translation>Максимизуј</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Затвори</translation>
    </message>
</context>
<context>
    <name>QWorkspace</name>
    <message>
        <source>&amp;Restore</source>
        <translation>&amp;Обнови</translation>
    </message>
    <message>
        <source>&amp;Move</source>
        <translation>&amp;Помери</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;Величина</translation>
    </message>
    <message>
        <source>Mi&amp;nimize</source>
        <translation>Ми&amp;нимизуј</translation>
    </message>
    <message>
        <source>Ma&amp;ximize</source>
        <translation>Ма&amp;ксимизуј</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Затвори</translation>
    </message>
    <message>
        <source>Stay on &amp;Top</source>
        <translation>Ос&amp;тани на врху</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>Минимизуј</translation>
    </message>
    <message>
        <source>Restore Down</source>
        <translation>Врати доле</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Затвори</translation>
    </message>
    <message>
        <source>Sh&amp;ade</source>
        <translation>Намот&amp;ај</translation>
    </message>
    <message>
        <source>%1 - [%2]</source>
        <translation>%1 - [%2]</translation>
    </message>
    <message>
        <source>&amp;Unshade</source>
        <translation>&amp;Одмотај</translation>
    </message>
</context>
<context>
    <name>Query</name>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
</context>
<context>
    <name>ReformDoc</name>
    <message>
        <source> pt</source>
        <translation type="obsolete"> тач.</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Document Setup</source>
        <translation>Поставке документа</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="obsolete">Водиље маргина</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="obsolete">&amp;Врх:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="obsolete">&amp;Лево:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="obsolete">&amp;Дно:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="obsolete">&amp;Десно:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation type="obsolete">&amp;Упоредне странице</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation type="obsolete">Прво лева &amp;страница</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation type="obsolete">Укључи једноструки распоред или раширени распоред</translation>
    </message>
    <message>
        <source>Make the first page the left page of the document</source>
        <translation type="obsolete">Учини да прва страница буде лева</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation type="obsolete">Растојање између водиље горње маргине и обода странице</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation type="obsolete">Растојање између водиље доње маргине и обода странице</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Растојање између водиље леве маргине и обода странице.
Ако је изабрано „Упоредне странице“, овај размак маргина се може користити за постизање исправних маргина за повезивање</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Растојање између водиље десне маргине и обода странице.\n
Ако је изабрано „Упоредне странице“, овај размак маргина се може користити за постизање исправних маргина за повезивање</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation type="obsolete">&amp;Унутра:</translation>
    </message>
    <message>
        <source>&amp;Outside:</source>
        <translation type="obsolete">&amp;Споља:</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="obsolete">Величина папира</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation type="obsolete">Величина:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="obsolete">Произвољно</translation>
    </message>
    <message>
        <source>Orientation:</source>
        <translation type="obsolete">Оријентација:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="obsolete">Усправно</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="obsolete">Водоравно</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation type="obsolete">Ширина:</translation>
    </message>
    <message>
        <source>Height:</source>
        <translation type="obsolete">Висина:</translation>
    </message>
    <message>
        <source>F&amp;irst Page Number:</source>
        <translation type="obsolete">П&amp;рви број странице:</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="obsolete">&amp;Величина:</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation type="obsolete">Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation type="obsolete">Letter</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation type="obsolete">Таблоид</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="obsolete">Усм&amp;ерење:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="obsolete">Ш&amp;ирина:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="obsolete">&amp;Висина:</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation type="obsolete">Аутоматско снимање</translation>
    </message>
    <message>
        <source>min</source>
        <translation type="obsolete">мин</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation type="obsolete">&amp;Период:</translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished">Документ</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation type="unfinished">Водиље</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="obsolete">Боја:</translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation type="obsolete">Прикажи област која се не може одштампати у боји маргине</translation>
    </message>
    <message>
        <source>Display</source>
        <translation type="unfinished">Приказ</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation type="unfinished">Типографија</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation type="unfinished">Алати</translation>
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
        <source>PDF Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Management</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color for paper</source>
        <translation type="obsolete">Боја папира</translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation type="obsolete">Маскирај област изван линија маргина у боју тих линија</translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="obsolete">Опције</translation>
    </message>
    <message>
        <source>Document Information</source>
        <translation type="unfinished">Информације о документу</translation>
    </message>
    <message>
        <source>Preflight Verifier</source>
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
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source>Adjusting Colors</source>
        <translation type="unfinished">Прилагођавам боје</translation>
    </message>
    <message>
        <source>Sections</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>RunScriptDialog</name>
    <message>
        <source>Python Scripts (*.py);; All Files (*)</source>
        <translation type="obsolete">Python скрипте (*.py);; Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Run as Extension Script</source>
        <comment>run script dialog</comment>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="obsolete">&amp;Додај</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">&amp;Обриши</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished">Име:</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation type="unfinished">&amp;Примени</translation>
    </message>
    <message>
        <source>name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>shortcut</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished">&amp;Нови</translation>
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
        <translation type="unfinished">&amp;Увези</translation>
    </message>
    <message>
        <source>Alt+I</source>
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
        <translation type="unfinished"> тач.</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Parent</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMCharacterStyle</name>
    <message>
        <source>Properties</source>
        <translation type="unfinished">Својства</translation>
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
        <translation type="unfinished">Нови стил</translation>
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
        <translation type="unfinished">Својства</translation>
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
        <translation type="unfinished">Нови стил</translation>
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
        <translation type="unfinished"> тач.</translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation type="unfinished">Непрекидна линија</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation type="unfinished">Испрекидана линија</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation type="unfinished">Тачкаста линија</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation type="unfinished">Црта-тачка</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation type="unfinished">Црта-тачка-тачка</translation>
    </message>
    <message>
        <source> pt </source>
        <translation type="unfinished"> pt </translation>
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
        <translation type="unfinished"> тач.</translation>
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
        <translation type="unfinished">Табулатори и увлачење</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation type="unfinished">Својства</translation>
    </message>
    <message>
        <source>Character Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Lines:</source>
        <translation type="unfinished">&amp;Линије:</translation>
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
        <source>Parent&apos;s Character Style</source>
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
        <translation type="unfinished">Стил пасуса</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation type="unfinished">Нови стил</translation>
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
        <translation type="unfinished">Уклони</translation>
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
        <translation type="unfinished">&amp;У реду</translation>
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
        <translation type="unfinished">Нема стила</translation>
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
        <translation>Поставке стила</translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation>Стил тренутног пасуса</translation>
    </message>
</context>
<context>
    <name>SToolBColorF</name>
    <message>
        <source>Fill Color Settings</source>
        <translation>Поставке боје за испуњавање</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Боја попуњеног текста</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation>Засићење боје испуњеног текста</translation>
    </message>
</context>
<context>
    <name>SToolBColorS</name>
    <message>
        <source>Stroke Color Settings</source>
        <translation>Поставке боје за потезе</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Боја текста</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation>Засићење боје текста</translation>
    </message>
</context>
<context>
    <name>SToolBFont</name>
    <message>
        <source>Font Settings</source>
        <translation>Поставке фонта</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> тач.</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Font of selected text</source>
        <translation>Фонт изабраног текста</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Величина фонта</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation>Скалирање ширине карактера</translation>
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
        <translation>Поставке карактера</translation>
    </message>
    <message>
        <source>Kerning:</source>
        <translation type="obsolete">Кернинг:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> тач.</translation>
    </message>
    <message>
        <source>Manual Kerning</source>
        <translation type="obsolete">Ручни кернинг</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SVGExportPlugin</name>
    <message>
        <source>Save Page as &amp;SVG...</source>
        <translation type="obsolete">Сними страницу као &amp;SVG...</translation>
    </message>
    <message>
        <source>Exports SVG Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exports the current page into an SVG file.</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">Увези &amp;SVG...</translation>
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
        <translation type="unfinished">&amp;Сними</translation>
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
        <translation type="unfinished">Сними као &amp;шаблон...</translation>
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
        <translation type="unfinished">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">&amp;Откажи</translation>
    </message>
</context>
<context>
    <name>ScPlugin</name>
    <message>
        <source>Persistent</source>
        <comment>plugin manager plugin type</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import</source>
        <comment>plugin manager plugin type</comment>
        <translation type="obsolete">Увези</translation>
    </message>
    <message>
        <source>Action</source>
        <comment>plugin manager plugin type</comment>
        <translation type="unfinished">Акција</translation>
    </message>
    <message>
        <source>Load/Save/Import/Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation type="unfinished">Непознат</translation>
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
        <translation type="unfinished">Десна</translation>
    </message>
    <message>
        <source>Bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Left</source>
        <translation type="unfinished">Лева</translation>
    </message>
    <message>
        <source>Allow Docking To...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="unfinished">Водоравно</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="unfinished">Усправно</translation>
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
        <translation type="unfinished">Штампам...</translation>
    </message>
</context>
<context>
    <name>ScriXmlDoc</name>
    <message>
        <source>Copy #%1 of </source>
        <translation type="obsolete">Копија #%1 од</translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="obsolete">Позадина</translation>
    </message>
    <message>
        <source>Postscript</source>
        <translation type="obsolete">Postscript</translation>
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
        <translation type="unfinished">Позадина</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished">Копија #%1 од</translation>
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
        <translation type="unfinished">Копија #%1 од</translation>
    </message>
</context>
<context>
    <name>Scribus13Format</name>
    <message>
        <source>Scribus 1.3.0-&gt;1.3.3.2 Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished">Копија #%1 од</translation>
    </message>
</context>
<context>
    <name>ScribusApp</name>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Нормално</translation>
    </message>
    <message>
        <source>File</source>
        <translation type="obsolete">Фајл</translation>
    </message>
    <message>
        <source>Create a new Document</source>
        <translation type="obsolete">Направи нови документ</translation>
    </message>
    <message>
        <source>Open a Document</source>
        <translation type="obsolete">Отвори документ</translation>
    </message>
    <message>
        <source>Save the current Document</source>
        <translation type="obsolete">Сними текући документ</translation>
    </message>
    <message>
        <source>Close the current Document</source>
        <translation type="obsolete">Затвори текући документ</translation>
    </message>
    <message>
        <source>Print the current Document</source>
        <translation type="obsolete">Штампај текући документ</translation>
    </message>
    <message>
        <source>Save the current Document as PDF</source>
        <translation type="obsolete">Сними текући документ као PDF</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation type="obsolete">Тражим фонтове</translation>
    </message>
    <message>
        <source>There are no Postscript-Fonts on your System</source>
        <translation type="obsolete">Нема postscript фонтова на Вашем систему</translation>
    </message>
    <message>
        <source>Exiting now</source>
        <translation type="obsolete">Излазим сада</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation type="obsolete">Фатална грешка</translation>
    </message>
    <message>
        <source>Smart Hyphen</source>
        <translation type="obsolete">Паметно спајање цртицом</translation>
    </message>
    <message>
        <source>Align Left</source>
        <translation type="obsolete">Поравнај лево</translation>
    </message>
    <message>
        <source>Align Right</source>
        <translation type="obsolete">Поравнај десно</translation>
    </message>
    <message>
        <source>Align Center</source>
        <translation type="obsolete">Поравнај по средини</translation>
    </message>
    <message>
        <source>Insert Page Number</source>
        <translation type="obsolete">Уметни број странице</translation>
    </message>
    <message>
        <source>Attach Text to Path</source>
        <translation type="obsolete">Прикачи текст уз путању</translation>
    </message>
    <message>
        <source>Show Layers</source>
        <translation type="obsolete">Прикажи слојеве</translation>
    </message>
    <message>
        <source>Javascripts...</source>
        <translation type="obsolete">Javascript-ови...</translation>
    </message>
    <message>
        <source>Undo</source>
        <translation type="obsolete">Опозови</translation>
    </message>
    <message>
        <source>Show Page Palette</source>
        <translation type="obsolete">Прикажи палету странице</translation>
    </message>
    <message>
        <source>Lock/Unlock</source>
        <translation type="obsolete">Закључај/Откључај</translation>
    </message>
    <message>
        <source>Non Breaking Space</source>
        <translation type="obsolete">Непреломиви размак</translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation type="obsolete">Читам подешавања</translation>
    </message>
    <message>
        <source>Getting ICC Profiles</source>
        <translation type="obsolete">Добави ICC профиле</translation>
    </message>
    <message>
        <source>Init Hyphenator</source>
        <translation type="obsolete">Покрени спајача</translation>
    </message>
    <message>
        <source>Setting up Shortcuts</source>
        <translation type="obsolete">Постављам пречице</translation>
    </message>
    <message>
        <source>&amp;Color Management...</source>
        <translation type="obsolete">&amp;Управљање бојама...</translation>
    </message>
    <message>
        <source>Reading Scrapbook</source>
        <translation type="obsolete">Читам албум</translation>
    </message>
    <message>
        <source>Initializing Plugins</source>
        <translation type="obsolete">Покрећем прикључке</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;Нови</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation type="obsolete">&amp;Отвори...</translation>
    </message>
    <message>
        <source>Open &amp;Recent</source>
        <translation type="obsolete">Отво&amp;ри скорашњи</translation>
    </message>
    <message>
        <source>New</source>
        <translation type="obsolete">Нови</translation>
    </message>
    <message>
        <source>Open...</source>
        <translation type="obsolete">Отвори...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Затвори</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="obsolete">Затвори</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="obsolete">&amp;Сними</translation>
    </message>
    <message>
        <source>Save</source>
        <translation type="obsolete">Сними</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="obsolete">Сними &amp;као...</translation>
    </message>
    <message>
        <source>Save as...</source>
        <translation type="obsolete">Сними као...</translation>
    </message>
    <message>
        <source>Re&amp;vert to Saved</source>
        <translation type="obsolete">Вр&amp;ати на снимљено</translation>
    </message>
    <message>
        <source>Collect for O&amp;utput...</source>
        <translation type="obsolete">Сакупи за и&amp;злаз...</translation>
    </message>
    <message>
        <source>&amp;Get Text/Picture...</source>
        <translation type="obsolete">&amp;Добави текст/слику...</translation>
    </message>
    <message>
        <source>Append &amp;Text...</source>
        <translation type="obsolete">Примени &amp;текст...</translation>
    </message>
    <message>
        <source>Import &amp;Page(s)...</source>
        <translation type="obsolete">Увези &amp;страницу(е)...</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="obsolete">&amp;Увези</translation>
    </message>
    <message>
        <source>Save &amp;Text...</source>
        <translation type="obsolete">Сними &amp;текст...</translation>
    </message>
    <message>
        <source>Save Page as &amp;EPS...</source>
        <translation type="obsolete">Сними страницу као &amp;EPS...</translation>
    </message>
    <message>
        <source>Save as P&amp;DF...</source>
        <translation type="obsolete">Сними као P&amp;DF...</translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation type="obsolete">&amp;Извези</translation>
    </message>
    <message>
        <source>Document &amp;Information...</source>
        <translation type="obsolete">&amp;Информације о документу...</translation>
    </message>
    <message>
        <source>Document Info...</source>
        <translation type="obsolete">Информације о документу...</translation>
    </message>
    <message>
        <source>Document &amp;Setup...</source>
        <translation type="obsolete">&amp;Поставке документа...</translation>
    </message>
    <message>
        <source>Document Setup...</source>
        <translation type="obsolete">Поставке документа...</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation type="obsolete">Ш&amp;тампај...</translation>
    </message>
    <message>
        <source>Print...</source>
        <translation type="obsolete">Штампај...</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation type="obsolete">&amp;Заврши</translation>
    </message>
    <message>
        <source>Quit</source>
        <translation type="obsolete">Заврши</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="obsolete">&amp;Опозови</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="obsolete">&amp;Исеци</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="obsolete">&amp;Копирај</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="obsolete">&amp;Пренеси</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="obsolete">Оч&amp;исти</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation type="obsolete">Изабери &amp;све</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation type="obsolete">Исеци</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation type="obsolete">Копирај</translation>
    </message>
    <message>
        <source>Paste</source>
        <translation type="obsolete">Пренеси</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation type="obsolete">Очисти</translation>
    </message>
    <message>
        <source>Select all</source>
        <translation type="obsolete">Изабери све</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation type="obsolete">&amp;Тражи/Замени...</translation>
    </message>
    <message>
        <source>C&amp;olors...</source>
        <translation type="obsolete">Б&amp;оје...</translation>
    </message>
    <message>
        <source>Colors...</source>
        <translation type="obsolete">Боје...</translation>
    </message>
    <message>
        <source>&amp;Paragraph Styles...</source>
        <translation type="obsolete">Стилови &amp;пасуса....</translation>
    </message>
    <message>
        <source>&amp;Line Styles...</source>
        <translation type="obsolete">Стилови &amp;линија...</translation>
    </message>
    <message>
        <source>Styles...</source>
        <translation type="obsolete">Стилови...</translation>
    </message>
    <message>
        <source>&amp;Templates...</source>
        <translation type="obsolete">&amp;Шаблони...</translation>
    </message>
    <message>
        <source>Templates...</source>
        <translation type="obsolete">Шаблони...</translation>
    </message>
    <message>
        <source>&amp;Javascripts...</source>
        <translation type="obsolete">&amp;Javascript-ови...</translation>
    </message>
    <message>
        <source>Select New Font</source>
        <translation type="obsolete">Изаберите нови фонт</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="obsolete">Д&amp;упликуј</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation type="obsolete">Дуплирај</translation>
    </message>
    <message>
        <source>&amp;Multiple Duplicate</source>
        <translation type="obsolete">&amp;Умножено дуплирање</translation>
    </message>
    <message>
        <source>Multiple Duplicate</source>
        <translation type="obsolete">Многоструки дупликат</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Обриши</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="obsolete">Обриши</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="obsolete">&amp;Група</translation>
    </message>
    <message>
        <source>Group</source>
        <translation type="obsolete">Група</translation>
    </message>
    <message>
        <source>&amp;Ungroup</source>
        <translation type="obsolete">&amp;Растури групу</translation>
    </message>
    <message>
        <source>Un-group</source>
        <translation type="obsolete">Од-групиши</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation type="obsolete">&amp;Закључај</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation type="obsolete">&amp;Пошаљи иза свега</translation>
    </message>
    <message>
        <source>Send to Back</source>
        <translation type="obsolete">Пошаљи иза свега</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation type="obsolete">&amp;Доведи испред свега</translation>
    </message>
    <message>
        <source>Bring to Front</source>
        <translation type="obsolete">Доведи испред свега</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation type="obsolete">&amp;Спусти</translation>
    </message>
    <message>
        <source>Lower</source>
        <translation type="obsolete">Спусти</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation type="obsolete">&amp;Подигни</translation>
    </message>
    <message>
        <source>Raise</source>
        <translation type="obsolete">Подигни</translation>
    </message>
    <message>
        <source>Distribute/&amp;Align...</source>
        <translation type="obsolete">Распореди/&amp;Поравнај...</translation>
    </message>
    <message>
        <source>Distribute/Align...</source>
        <translation type="obsolete">Распореди/Поравнај...</translation>
    </message>
    <message>
        <source>&amp;Edit Shape</source>
        <translation type="obsolete">&amp;Уређивање облика</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation type="obsolete">&amp;Облик</translation>
    </message>
    <message>
        <source>&amp;Attach Text to Path</source>
        <translation type="obsolete">&amp;Прикачи текст уз путању</translation>
    </message>
    <message>
        <source>&amp;Detach Text from Path</source>
        <translation type="obsolete">&amp;Откачи текст од путање</translation>
    </message>
    <message>
        <source>&amp;Combine Polygons</source>
        <translation type="obsolete">&amp;Комбинуј полигоне</translation>
    </message>
    <message>
        <source>Split &amp;Polygons</source>
        <translation type="obsolete">Раздвоји &amp;полигоне</translation>
    </message>
    <message>
        <source>C&amp;onvert to Outlines</source>
        <translation type="obsolete">Прет&amp;вори у контуре</translation>
    </message>
    <message>
        <source>&amp;Insert...</source>
        <translation type="obsolete">Уметн&amp;и...</translation>
    </message>
    <message>
        <source>Insert...</source>
        <translation type="obsolete">Уметни...</translation>
    </message>
    <message>
        <source>&amp;Delete...</source>
        <translation type="obsolete">&amp;Обриши...</translation>
    </message>
    <message>
        <source>Delete...</source>
        <translation type="obsolete">Обриши...</translation>
    </message>
    <message>
        <source>&amp;Move...</source>
        <translation type="obsolete">&amp;Помери...</translation>
    </message>
    <message>
        <source>Move...</source>
        <translation type="obsolete">Помери...</translation>
    </message>
    <message>
        <source>&amp;Apply Template...</source>
        <translation type="obsolete">&amp;Примени шаблон...</translation>
    </message>
    <message>
        <source>Apply Template...</source>
        <translation type="obsolete">Примени шаблон...</translation>
    </message>
    <message>
        <source>Manage &amp;Guides...</source>
        <translation type="obsolete">Управљање &amp;водиљама...</translation>
    </message>
    <message>
        <source>Manage Guides...</source>
        <translation type="obsolete">Управљање водиљама...</translation>
    </message>
    <message>
        <source>&amp;Fit in Window</source>
        <translation type="obsolete">&amp;Смести у прозор</translation>
    </message>
    <message>
        <source>Fit in Window</source>
        <translation type="obsolete">Смести у прозор</translation>
    </message>
    <message>
        <source>50%</source>
        <translation type="obsolete">50%</translation>
    </message>
    <message>
        <source>75%</source>
        <translation type="obsolete">75%</translation>
    </message>
    <message>
        <source>&amp;100%</source>
        <translation type="obsolete">&amp;100%</translation>
    </message>
    <message>
        <source>100%</source>
        <translation type="obsolete">100%</translation>
    </message>
    <message>
        <source>200%</source>
        <translation type="obsolete">200%</translation>
    </message>
    <message>
        <source>&amp;Thumbnails</source>
        <translation type="obsolete">&amp;Сличице</translation>
    </message>
    <message>
        <source>Thumbnails</source>
        <translation type="obsolete">Сличице</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation type="obsolete">Прикажи &amp;маргине</translation>
    </message>
    <message>
        <source>Hide Margins</source>
        <translation type="obsolete">Сакриј маргине</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation type="obsolete">Прикажи &amp;оквире</translation>
    </message>
    <message>
        <source>Hide Frames</source>
        <translation type="obsolete">Сакриј оквире</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation type="obsolete">Прикажи &amp;слике</translation>
    </message>
    <message>
        <source>Hide Images</source>
        <translation type="obsolete">Сакриј слике</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation type="obsolete">Прикажи &amp;мрежу</translation>
    </message>
    <message>
        <source>Show Grid</source>
        <translation type="obsolete">Прикажи мрежу</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation type="obsolete">Прикажи &amp;водиље</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation type="obsolete">Прикажи мрежу &amp;основне линије</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation type="obsolete">Пре&amp;баци на мрежу</translation>
    </message>
    <message>
        <source>Snap to Grid</source>
        <translation type="obsolete">Уклапај уз мрежу</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation type="obsolete">Преб&amp;аци на водиље</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation type="obsolete">&amp;Својства</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation type="obsolete">Својства</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <translation type="obsolete">&amp;Контура</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation type="obsolete">Контура</translation>
    </message>
    <message>
        <source>&amp;Scrapbook</source>
        <translation type="obsolete">&amp;Албум</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation type="obsolete">Албум</translation>
    </message>
    <message>
        <source>&amp;Layers</source>
        <translation type="obsolete">&amp;Слојеви</translation>
    </message>
    <message>
        <source>P&amp;age Palette</source>
        <translation type="obsolete">Палета стр&amp;анице</translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation type="obsolete">&amp;Маркери</translation>
    </message>
    <message>
        <source>&amp;Manage Pictures</source>
        <translation type="obsolete">&amp;Управљање сликама</translation>
    </message>
    <message>
        <source>Manage Pictures</source>
        <translation type="obsolete">Управљање сликама</translation>
    </message>
    <message>
        <source>&amp;Hyphenate Text</source>
        <translation type="obsolete">&amp;Споји текст цртицама</translation>
    </message>
    <message>
        <source>Hyphenate Text</source>
        <translation type="obsolete">Споји текст цртицама</translation>
    </message>
    <message>
        <source>Toolti&amp;ps</source>
        <translation type="obsolete">Облач&amp;ићи</translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation type="obsolete">&amp;Алати</translation>
    </message>
    <message>
        <source>P&amp;DF Tools</source>
        <translation type="obsolete">P&amp;DF алати</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation type="obsolete">Алати</translation>
    </message>
    <message>
        <source>Tooltips</source>
        <translation type="obsolete">Облачићи</translation>
    </message>
    <message>
        <source>P&amp;references...</source>
        <translation type="obsolete">П&amp;одешавања...</translation>
    </message>
    <message>
        <source>&amp;Fonts...</source>
        <translation type="obsolete">&amp;Фонтови...</translation>
    </message>
    <message>
        <source>Fonts...</source>
        <translation type="obsolete">Фонтови...</translation>
    </message>
    <message>
        <source>&amp;Hyphenator...</source>
        <translation type="obsolete">&amp;Спајач...</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts...</source>
        <translation type="obsolete">&amp;Пречице на тастатури...</translation>
    </message>
    <message>
        <source>&amp;About Scribus</source>
        <translation type="obsolete">&amp;О Scribus-у</translation>
    </message>
    <message>
        <source>About Scribus</source>
        <translation type="obsolete">О Scribus-у</translation>
    </message>
    <message>
        <source>About &amp;Qt</source>
        <translation type="obsolete">О &amp;Qt-у</translation>
    </message>
    <message>
        <source>About Qt</source>
        <translation type="obsolete">О Qt-у</translation>
    </message>
    <message>
        <source>Scribus &amp;Manual...</source>
        <translation type="obsolete">Scribus &amp;Приручник...</translation>
    </message>
    <message>
        <source>Online-Help...</source>
        <translation type="obsolete">Веб помоћ...</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="obsolete">&amp;Фајл</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="obsolete">&amp;Уреди</translation>
    </message>
    <message>
        <source>St&amp;yle</source>
        <translation type="obsolete">Ст&amp;ил</translation>
    </message>
    <message>
        <source>&amp;Item</source>
        <translation type="obsolete">&amp;Ставка</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation type="obsolete">&amp;Страна</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation type="obsolete">&amp;Прикажи</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation type="obsolete">Пр&amp;оширења</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation type="obsolete">&amp;Подешавања</translation>
    </message>
    <message>
        <source>&amp;Windows</source>
        <translation type="obsolete">&amp;Прозори</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation type="obsolete">По&amp;моћ</translation>
    </message>
    <message>
        <source>&amp;Left</source>
        <translation type="obsolete">&amp;Лево</translation>
    </message>
    <message>
        <source>&amp;Center</source>
        <translation type="obsolete">&amp;Средина</translation>
    </message>
    <message>
        <source>&amp;Right</source>
        <translation type="obsolete">&amp;Десно</translation>
    </message>
    <message>
        <source>&amp;Block</source>
        <translation type="obsolete">&amp;Блокирај</translation>
    </message>
    <message>
        <source>&amp;Forced</source>
        <translation type="obsolete">&amp;Приморано</translation>
    </message>
    <message>
        <source>&amp;Other...</source>
        <translation type="obsolete">&amp;Остало...</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> тач.</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation type="obsolete">Подвучено</translation>
    </message>
    <message>
        <source>Strikethru</source>
        <translation type="obsolete">Право напред</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="obsolete">Мала верзална слова</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="obsolete">Изложилац</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation type="obsolete">Индекс</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation type="obsolete">Уоквирено</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation type="obsolete">X Поз:</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation type="obsolete">Y Поз:</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation type="obsolete">Спреман</translation>
    </message>
    <message>
        <source>&amp;Cascade</source>
        <translation type="obsolete">&amp;Наслажи</translation>
    </message>
    <message>
        <source>&amp;Tile</source>
        <translation type="obsolete">Поп&amp;лочај</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source>Get Text/Picture...</source>
        <translation type="obsolete">Добави Текст/Слику...</translation>
    </message>
    <message>
        <source>Get Picture...</source>
        <translation type="obsolete">Добави слику...</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation type="obsolete">&amp;Боја</translation>
    </message>
    <message>
        <source>&amp;Invert</source>
        <translation type="obsolete">&amp;Изврни</translation>
    </message>
    <message>
        <source>&amp;Get Text...</source>
        <translation type="obsolete">&amp;Добави текст...</translation>
    </message>
    <message>
        <source>&amp;Font</source>
        <translation type="obsolete">&amp;Фонт</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation type="obsolete">&amp;Величина</translation>
    </message>
    <message>
        <source>&amp;Effects</source>
        <translation type="obsolete">&amp;Ефекти</translation>
    </message>
    <message>
        <source>&amp;Alignment</source>
        <translation type="obsolete">&amp;Поравнање</translation>
    </message>
    <message>
        <source>&amp;Shade</source>
        <translation type="obsolete">&amp;Намотај</translation>
    </message>
    <message>
        <source>&amp;Tabulators...</source>
        <translation type="obsolete">&amp;Табулатори...</translation>
    </message>
    <message>
        <source>Get Text...</source>
        <translation type="obsolete">Добави текст...</translation>
    </message>
    <message>
        <source>Font</source>
        <translation type="obsolete">Фонт</translation>
    </message>
    <message>
        <source>Size</source>
        <translation type="obsolete">Величина</translation>
    </message>
    <message>
        <source>Style</source>
        <translation type="obsolete">Стил</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="obsolete">Боја</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation type="obsolete">Намотај</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation type="obsolete">От&amp;кључај</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="obsolete">Отвори</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="obsolete">Документи (*.sla *.sla.gz *.scd *.scd.gz);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="obsolete">Документи (*.sla *.scd);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Importing Pages...</source>
        <translation type="obsolete">Увозим странице...</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation type="obsolete">Увези страницу(е)</translation>
    </message>
    <message>
        <source>&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</source>
        <translation type="obsolete">&lt;p&gt;Покушавате да увезете више страница него што је доступно у 
текућем документу ако се броји од активне странице.&lt;/p&gt;Изаберите нешто од следећег:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Направи&lt;/b&gt; стране које 
недостају&lt;/li&gt;&lt;li&gt;&lt;b&gt;Увези&lt;/b&gt; 
странице до последње&lt;/li&gt;&lt;li&gt;&lt;b&gt;Поништи&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation type="obsolete">Направи</translation>
    </message>
    <message>
        <source>Import</source>
        <translation type="obsolete">Увези</translation>
    </message>
    <message>
        <source>Import done</source>
        <translation type="obsolete">Увези готово</translation>
    </message>
    <message>
        <source>Found nothing to import</source>
        <translation type="obsolete">Нисам пронашао ништа да увезем</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>File %1 is not in Scribus format</source>
        <translation type="obsolete">Фајл %1 није у scribus-овом формату</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">У реду</translation>
    </message>
    <message>
        <source>Loading...</source>
        <translation type="obsolete">Учитавам...</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation type="obsolete">Сви подржани формати</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation type="obsolete">Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Can&apos;t write the File: 
%1</source>
        <translation type="obsolete">t Фајл 1</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="obsolete">Сними као</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</source>
        <translation type="obsolete">Документи (*.sla *.sla.gz *.scd *scd.gz);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Saving...</source>
        <translation type="obsolete">Снимам...</translation>
    </message>
    <message>
        <source>Printing...</source>
        <translation type="obsolete">Штампам...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="obsolete">Документ</translation>
    </message>
    <message>
        <source>Printing failed!</source>
        <translation type="obsolete">Штампање није успело!</translation>
    </message>
    <message>
        <source>Scribus Manual</source>
        <translation type="obsolete">Scribus приручник</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation type="obsolete">Текстуални фајлови (*.txt);;Сви фајлови(*)</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="obsolete">&amp;Величина:</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation type="obsolete">&amp;Сенка:</translation>
    </message>
    <message>
        <source>Hide Baseline Grid</source>
        <translation type="obsolete">Сакриј основну мрежу</translation>
    </message>
    <message>
        <source>Show Baseline Grid</source>
        <translation type="obsolete">Прикажи основну мрежу</translation>
    </message>
    <message>
        <source>The following Programs are missing:</source>
        <translation type="obsolete">Недостају следећи програми:</translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS Images</source>
        <translation type="obsolete">Ghostscript : Не можете да користите EPS слике</translation>
    </message>
    <message>
        <source>All</source>
        <translation type="obsolete">Све</translation>
    </message>
    <message>
        <source>EPS-Files (*.eps);;All Files (*)</source>
        <translation type="obsolete">EPS-фајлови (*.eps);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source>mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source>in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source>p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source>Some Objects are locked.</source>
        <translation type="obsolete">Неки објекти су закључани.</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Поништи</translation>
    </message>
    <message>
        <source>Lock all</source>
        <translation type="obsolete">Закључај све</translation>
    </message>
    <message>
        <source>Unlock all</source>
        <translation type="obsolete">Откључај све</translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation type="obsolete">Откључај</translation>
    </message>
    <message>
        <source>Lock</source>
        <translation type="obsolete">Закључај</translation>
    </message>
    <message>
        <source>Loading:</source>
        <translation type="obsolete">Учитавање:</translation>
    </message>
    <message>
        <source>Adjusting Colors</source>
        <translation type="obsolete">Прилагођавам боје</translation>
    </message>
    <message>
        <source>&amp;Undo Delete Object</source>
        <translation type="obsolete">&amp;Опозови брисање објекта</translation>
    </message>
    <message>
        <source>&amp;Undo Object Move</source>
        <translation type="obsolete">&amp;Опозови померање објекта</translation>
    </message>
    <message>
        <source>&amp;Undo Object Change</source>
        <translation type="obsolete">&amp;Опозови измену објекта</translation>
    </message>
    <message>
        <source>German</source>
        <translation type="obsolete">Немачки</translation>
    </message>
    <message>
        <source>Polish</source>
        <translation type="obsolete">Пољски</translation>
    </message>
    <message>
        <source>English</source>
        <translation type="obsolete">Енглески</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation type="obsolete">Шпански</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation type="obsolete">Италијански</translation>
    </message>
    <message>
        <source>French</source>
        <translation type="obsolete">Француски</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation type="obsolete">Руски</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation type="obsolete">Дански</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation type="obsolete">Словачки</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation type="obsolete">Мађарски</translation>
    </message>
    <message>
        <source>Czech</source>
        <translation type="obsolete">Чешки</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation type="obsolete">Холандски</translation>
    </message>
    <message>
        <source>Portuguese</source>
        <translation type="obsolete">Португалски</translation>
    </message>
    <message>
        <source>Ukrainian</source>
        <translation type="obsolete">Украјински</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation type="obsolete">Грчки</translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation type="obsolete">Каталански</translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation type="obsolete">Фински</translation>
    </message>
    <message>
        <source>Irish</source>
        <translation type="obsolete">Ирски</translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation type="obsolete">Литвански</translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation type="obsolete">Шведски</translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation type="obsolete">Словеначки</translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation type="obsolete">Африканерски</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation type="obsolete">Изаберите директоријум</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation type="obsolete">Инвертуј</translation>
    </message>
    <message>
        <source>Scribus Crash</source>
        <translation type="obsolete">Пуцање scribus-а</translation>
    </message>
    <message>
        <source>Scribus crashes due to Signal #%1</source>
        <translation type="obsolete">Scribus пуца због сигнала #%1</translation>
    </message>
    <message>
        <source>Postscript</source>
        <translation type="obsolete">Postscript</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="obsolete">Поно&amp;ви</translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation type="obsolete">&amp;Подвуци</translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation type="obsolete">&amp;Уређивање облика...</translation>
    </message>
    <message>
        <source>&amp;50%</source>
        <translation type="obsolete">&amp;50%</translation>
    </message>
    <message>
        <source>&amp;75%</source>
        <translation type="obsolete">&amp;75%</translation>
    </message>
    <message>
        <source>&amp;200%</source>
        <translation type="obsolete">&amp;200%</translation>
    </message>
    <message>
        <source>&amp;Insert Special</source>
        <translation type="obsolete">&amp;Уметни специјално</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>The Program</source>
        <translation type="obsolete">Програм</translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="obsolete">Информација</translation>
    </message>
    <message>
        <source>is missing!</source>
        <translation type="obsolete">недостаје!</translation>
    </message>
    <message>
        <source>Level</source>
        <translation type="obsolete">Ниво</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation type="obsolete">Пошаљи у сл&amp;ој</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation type="obsolete">&amp;PDF опције</translation>
    </message>
    <message>
        <source>Character</source>
        <translation type="obsolete">Знак</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation type="obsolete">Сними као</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="obsolete">Име:</translation>
    </message>
</context>
<context>
    <name>ScribusColorList</name>
    <message>
        <source>Sample</source>
        <translation type="obsolete">Пример</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="obsolete">Боја</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source>Document Colors</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusCore</name>
    <message>
        <source>Initializing Plugins</source>
        <translation type="unfinished">Покрећем прикључке</translation>
    </message>
    <message>
        <source>Initializing Keyboard Shortcuts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation type="unfinished">Читам подешавања</translation>
    </message>
    <message>
        <source>Reading ICC Profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation type="unfinished">Тражим фонтове</translation>
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
        <translation type="unfinished">Фатална грешка</translation>
    </message>
    <message>
        <source>Font System Initialized</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusDoc</name>
    <message>
        <source>New Layer</source>
        <translation type="unfinished">Нови слој</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">Нормално</translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished">Документ</translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="unfinished">Позадина</translation>
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
        <source>An error occurred while opening icc profiles, color management is not enabled.</source>
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
</context>
<context>
    <name>ScribusMainWindow</name>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source>Initializing Plugins</source>
        <translation type="obsolete">Покрећем прикључке</translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation type="obsolete">Читам подешавања</translation>
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
        <translation type="unfinished">Читам албум</translation>
    </message>
    <message>
        <source>Setting up Shortcuts</source>
        <translation type="unfinished">Постављам пречице</translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished">Фајл</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation type="obsolete">Тражим фонтове</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation type="unfinished">Фатална грешка</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished">&amp;Фајл</translation>
    </message>
    <message>
        <source>Open &amp;Recent</source>
        <translation type="unfinished">Отво&amp;ри скорашњи</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished">&amp;Увези</translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation type="unfinished">&amp;Извези</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished">&amp;Уреди</translation>
    </message>
    <message>
        <source>St&amp;yle</source>
        <translation type="unfinished">Ст&amp;ил</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation type="unfinished">&amp;Боја</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation type="unfinished">&amp;Величина</translation>
    </message>
    <message>
        <source>&amp;Shade</source>
        <translation type="unfinished">&amp;Намотај</translation>
    </message>
    <message>
        <source>&amp;Font</source>
        <translation type="unfinished">&amp;Фонт</translation>
    </message>
    <message>
        <source>&amp;Effects</source>
        <translation type="unfinished">&amp;Ефекти</translation>
    </message>
    <message>
        <source>&amp;Item</source>
        <translation type="unfinished">&amp;Ставка</translation>
    </message>
    <message>
        <source>Preview Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Level</source>
        <translation type="unfinished">Ниво</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation type="unfinished">Пошаљи у сл&amp;ој</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation type="unfinished">&amp;PDF опције</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation type="unfinished">&amp;Облик</translation>
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
        <source>Character</source>
        <translation type="unfinished">Знак</translation>
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
        <source>&amp;Page</source>
        <translation type="unfinished">&amp;Страна</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation type="unfinished">&amp;Прикажи</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation type="unfinished">Пр&amp;оширења</translation>
    </message>
    <message>
        <source>&amp;Windows</source>
        <translation type="unfinished">&amp;Прозори</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation type="unfinished">По&amp;моћ</translation>
    </message>
    <message>
        <source>&amp;Alignment</source>
        <translation type="unfinished">&amp;Поравнање</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation type="unfinished">Спреман</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">Отвори</translation>
    </message>
    <message>
        <source>Importing Pages...</source>
        <translation type="unfinished">Увозим странице...</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation type="unfinished">Увези страницу(е)</translation>
    </message>
    <message>
        <source>Import done</source>
        <translation type="unfinished">Увези готово</translation>
    </message>
    <message>
        <source>Found nothing to import</source>
        <translation type="unfinished">Нисам пронашао ништа да увезем</translation>
    </message>
    <message>
        <source>File %1 is not in an acceptable format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Loading...</source>
        <translation type="unfinished">Учитавам...</translation>
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
        <source>All Supported Formats</source>
        <translation type="obsolete">Сви подржани формати</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation type="obsolete">Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Cannot write the file: 
%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</source>
        <translation type="unfinished">Документи (*.sla *.sla.gz *.scd *scd.gz);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="unfinished">Документи (*.sla *.scd);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation type="unfinished">Сними као</translation>
    </message>
    <message>
        <source>Saving...</source>
        <translation type="unfinished">Снимам...</translation>
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
        <translation type="unfinished">Штампам...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished">Документ</translation>
    </message>
    <message>
        <source>Printing failed!</source>
        <translation type="unfinished">Штампање није успело!</translation>
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
        <translation type="unfinished">О Qt-у</translation>
    </message>
    <message>
        <source>Scribus Manual</source>
        <translation type="unfinished">Scribus приручник</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished">Сними као</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation type="unfinished">Текстуални фајлови (*.txt);;Сви фајлови(*)</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">Нормално</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished">Име:</translation>
    </message>
    <message>
        <source>Convert Page to Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished">&amp;Величина:</translation>
    </message>
    <message>
        <source>Size</source>
        <translation type="unfinished">Величина</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation type="unfinished">&amp;Сенка:</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation type="unfinished">Намотај</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation type="unfinished">Нема стила</translation>
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
        <source>All</source>
        <translation type="unfinished">Све</translation>
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
        <source>Information</source>
        <translation type="unfinished">Информација</translation>
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
        <source>&amp;Tools</source>
        <translation type="unfinished">&amp;Алати</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation type="unfinished">X Поз:</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation type="unfinished">Y Поз:</translation>
    </message>
    <message>
        <source>New Master Page %1</source>
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
        <source>Do you really want to replace your existing image?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Contents</source>
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
        <source>Paste Recent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal Middle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Updating Pictures</source>
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
        <translation type="unfinished">Почетна страница</translation>
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
</context>
<context>
    <name>ScribusView</name>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation>Слој</translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source>mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source>in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source>p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source>All</source>
        <translation type="obsolete">Све</translation>
    </message>
    <message>
        <source>Copy Here</source>
        <translation type="unfinished">Копирај овде</translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation type="unfinished">Помери овде</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Поништи</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished">&amp;Пренеси</translation>
    </message>
    <message>
        <source>Picture</source>
        <translation type="unfinished">Слика</translation>
    </message>
    <message>
        <source>File: </source>
        <translation type="unfinished">Фајл: </translation>
    </message>
    <message>
        <source>Original PPI: </source>
        <translation type="unfinished">Оригинални PPI: </translation>
    </message>
    <message>
        <source>Actual PPI: </source>
        <translation type="unfinished">Стварни PPI: </translation>
    </message>
    <message>
        <source>Linked Text</source>
        <translation type="unfinished">Повезан текст</translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation type="unfinished">Текстуални оквир</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation type="unfinished">Текст на путањи</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation type="unfinished">Пасуси: </translation>
    </message>
    <message>
        <source>Words: </source>
        <translation type="unfinished">Речи: </translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation type="unfinished">Карактери: </translation>
    </message>
    <message>
        <source>Print: </source>
        <translation type="unfinished">Штампај: </translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="unfinished">Укључено</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation type="unfinished">Искључено</translation>
    </message>
    <message>
        <source>In&amp;fo</source>
        <translation type="unfinished">Ин&amp;фо</translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation type="obsolete">С&amp;лика видљива</translation>
    </message>
    <message>
        <source>&amp;Update Picture</source>
        <translation type="obsolete">&amp;Ажурирај слику</translation>
    </message>
    <message>
        <source>&amp;Edit Picture</source>
        <translation type="obsolete">&amp;Уређивање слике</translation>
    </message>
    <message>
        <source>&amp;Adjust Frame to Picture</source>
        <translation type="obsolete">&amp;Подеси оквир према слици</translation>
    </message>
    <message>
        <source>&amp;Edit Text...</source>
        <translation type="obsolete">&amp;Уређивање текста...</translation>
    </message>
    <message>
        <source>Is PDF &amp;Bookmark</source>
        <translation type="obsolete">Је PDF &amp;маркер</translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation type="obsolete">Је PDF ан&amp;отација</translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation type="obsolete">С&amp;војства анотације</translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation type="obsolete">С&amp;војства поља</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation type="unfinished">&amp;PDF опције</translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation type="obsolete">Уреди текст...</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation type="obsolete">&amp;Закључај</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation type="obsolete">От&amp;кључај</translation>
    </message>
    <message>
        <source>Lock Object &amp;Size</source>
        <translation type="obsolete">Закључај &amp;величину објекта</translation>
    </message>
    <message>
        <source>Unlock Object &amp;Size</source>
        <translation type="obsolete">Откључај &amp;величину објекта</translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation type="obsolete">Пошаљи у св&amp;еску</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation type="unfinished">Пошаљи у сл&amp;ој</translation>
    </message>
    <message>
        <source>&amp;Insert Sample Text</source>
        <translation type="obsolete">&amp;Уметни пример текста</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="obsolete">&amp;Група</translation>
    </message>
    <message>
        <source>Un&amp;group</source>
        <translation type="obsolete">Од&amp;групиши</translation>
    </message>
    <message>
        <source>Le&amp;vel</source>
        <translation type="unfinished">Ни&amp;во</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation type="obsolete">&amp;Пошаљи иза свега</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation type="obsolete">&amp;Доведи испред свега</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation type="obsolete">&amp;Спусти</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation type="obsolete">&amp;Подигни</translation>
    </message>
    <message>
        <source>&amp;Picture Frame</source>
        <translation type="obsolete">Оквир &amp;слике</translation>
    </message>
    <message>
        <source>Pol&amp;ygon</source>
        <translation type="obsolete">Пол&amp;игон</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <translation type="obsolete">&amp;Оквирне линије</translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation type="obsolete">&amp;Текстуални оквир</translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation type="obsolete">&amp;Bezier крива</translation>
    </message>
    <message>
        <source>Conve&amp;rt to</source>
        <translation type="unfinished">Претв&amp;ори у</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">&amp;Обриши</translation>
    </message>
    <message>
        <source>C&amp;lear Contents</source>
        <translation type="obsolete">О&amp;чисти садржај</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation type="obsolete">Да ли стварно желите да очистите сав текст?</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation type="obsolete">Копија</translation>
    </message>
    <message>
        <source>Preview Settings</source>
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
        <source>Cannot Convert In-Use Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The item %1 is currently being edited by Story Editor. The convert to outlines operation for this item will be skipped</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page %1 to %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colorspace: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation type="unfinished">Непознат</translation>
    </message>
    <message>
        <source>RGB</source>
        <translation type="unfinished">RGB</translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation type="unfinished">CMYK</translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Contents</source>
        <translation type="unfinished"></translation>
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
</context>
<context>
    <name>ScribusWin</name>
    <message>
        <source>&amp;Leave Anyway</source>
        <translation type="obsolete">&amp;Напусти свакако</translation>
    </message>
    <message>
        <source>C&amp;lose Anyway</source>
        <translation type="obsolete">За&amp;твори свакако</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Document:</source>
        <translation>Документ:</translation>
    </message>
    <message>
        <source>has been changed since the last save.</source>
        <translation>је измењен од последњег снимања.</translation>
    </message>
    <message>
        <source>&amp;Save Now</source>
        <translation type="obsolete">&amp;Сними сада</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
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
        <source>&amp;Scribus Scripts</source>
        <translation type="obsolete">&amp;Scribus скрипте</translation>
    </message>
    <message>
        <source>&amp;Execute Script...</source>
        <translation type="obsolete">&amp;Изврши скрипту...</translation>
    </message>
    <message>
        <source>&amp;Recent Scripts</source>
        <translation type="obsolete">&amp;Скорашње скрипте</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation type="obsolete">Прикажи &amp;конзолу</translation>
    </message>
    <message>
        <source>S&amp;cript</source>
        <translation type="obsolete">С&amp;крипта</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="obsolete">Отвори</translation>
    </message>
    <message>
        <source>Python Scripts (*.py);; All Files (*)</source>
        <translation type="obsolete">Python скрипте (*.py);; Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Script error</source>
        <translation type="unfinished">Грешка скрипте</translation>
    </message>
    <message>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation type="unfinished">Ако радите са званичном скриптом молим Вас пријавите грешку на &lt;a href=\&quot;http://bugs.scribus.net\&quot;&gt;bugs.scribus.net&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation type="unfinished">Ова порука је и у Вашем клипборду. Користите Ctrl+V да је пренесете у пратиоца грешака.</translation>
    </message>
    <message>
        <source>Hide &amp;Console</source>
        <translation type="obsolete">Сакриј &amp;конзолу</translation>
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
        <source>Setting up the Python plugin failed. Error details were printed to stderr. </source>
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
        <source>Python Scripts (*.py *.PY);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScripterPreferences</name>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+O</translation>
    </message>
    <message>
        <source>Advanced Options</source>
        <translation type="obsolete">Напредне опције</translation>
    </message>
</context>
<context>
    <name>ScripterPrefsGui</name>
    <message>
        <source>Scripter Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable Extension Scripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Extensions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Console</source>
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
        <source>Change...</source>
        <translation type="unfinished">Измени...</translation>
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
        <translation>Прикажи прегледе страница</translation>
    </message>
</context>
<context>
    <name>SeView</name>
    <message>
        <source>Show Template Names</source>
        <translation type="obsolete">Прикажи имена шаблона</translation>
    </message>
</context>
<context>
    <name>SearchReplace</name>
    <message>
        <source>Search/Replace</source>
        <translation>Тражи/Замени</translation>
    </message>
    <message>
        <source>Search for:</source>
        <translation>Тражи:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Текст</translation>
    </message>
    <message>
        <source>Paragraph Style</source>
        <translation>Стил пасуса</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Фонт</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Величина фонта</translation>
    </message>
    <message>
        <source>Font Effects</source>
        <translation>Ефекти за фонтове</translation>
    </message>
    <message>
        <source>Fill Color</source>
        <translation>Боја испуњавања</translation>
    </message>
    <message>
        <source>Fill Shade</source>
        <translation>Сенка испуњавања</translation>
    </message>
    <message>
        <source>Stroke Color</source>
        <translation>Боја потеза</translation>
    </message>
    <message>
        <source>Stroke Shade</source>
        <translation>Сенка потеза</translation>
    </message>
    <message>
        <source>Left</source>
        <translation>Лева</translation>
    </message>
    <message>
        <source>Center</source>
        <translation>Средина</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Десна</translation>
    </message>
    <message>
        <source>Block</source>
        <translation>Блок</translation>
    </message>
    <message>
        <source>Forced</source>
        <translation>Приморано</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> тач.</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
    </message>
    <message>
        <source>Replace with:</source>
        <translation>Замени са:</translation>
    </message>
    <message>
        <source>&amp;Whole Word</source>
        <translation>&amp;Цела реч</translation>
    </message>
    <message>
        <source>&amp;Ignore Case</source>
        <translation>Игнориши величину слова</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Тражи</translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation>&amp;Замени</translation>
    </message>
    <message>
        <source>Replace &amp;All</source>
        <translation>Замени &amp;све</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Затвори</translation>
    </message>
    <message>
        <source>Search finished</source>
        <translation>Претрага је завршена</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">У реду</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished">Оч&amp;исти</translation>
    </message>
    <message>
        <source>Search finished, found %1 matches</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SeitenPal</name>
    <message>
        <source>Arrange Pages</source>
        <translation type="obsolete">Намести странице</translation>
    </message>
    <message>
        <source>Available Templates:</source>
        <translation type="obsolete">Доступни шаблони:</translation>
    </message>
    <message>
        <source>Document Pages:</source>
        <translation type="obsolete">Странице документа:</translation>
    </message>
    <message>
        <source>Facing Pages</source>
        <translation type="obsolete">Страница окренуте једна према другој</translation>
    </message>
    <message>
        <source>Left Page first</source>
        <translation type="obsolete">Прво лева страница</translation>
    </message>
    <message>
        <source>Drag Pages or Template Pages onto the Trashbin to delete them.</source>
        <translation type="obsolete">Превуците странице или их шаблонирајте у канту за отпатке да бисте их обрисали.</translation>
    </message>
    <message>
        <source>Previews all the pages of your document.</source>
        <translation type="obsolete">Даје преглед свих страница у Вашем документу.</translation>
    </message>
    <message>
        <source>Here are all your Templates, to create a new Page
drag a Template to the Pageview below.</source>
        <translation type="obsolete">Ово су сви Ваши шаблони, да бисте напавили нову страницу
превуците шаблон у поглед странице испод.</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Нормално</translation>
    </message>
</context>
<context>
    <name>SelectFields</name>
    <message>
        <source>Select Fields</source>
        <translation>Изаберите поља</translation>
    </message>
    <message>
        <source>Available Fields</source>
        <translation>Доступна поља</translation>
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
        <translation>Изабрана поља</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
</context>
<context>
    <name>ShadeButton</name>
    <message>
        <source>Other...</source>
        <translation>Остало...</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation>&amp;Сенка:</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Намотај</translation>
    </message>
</context>
<context>
    <name>ShadowValues</name>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
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
</context>
<context>
    <name>ShortcutWidget</name>
    <message>
        <source>&amp;No Key</source>
        <translation type="unfinished">&amp;Нема дугмета</translation>
    </message>
    <message>
        <source>&amp;User Defined Key</source>
        <translation type="unfinished">&amp;Дугме дефинисано од стране корисника</translation>
    </message>
    <message>
        <source>ALT+SHIFT+T</source>
        <translation type="unfinished">ALT+SHIFT+T</translation>
    </message>
    <message>
        <source>Set &amp;Key</source>
        <translation type="unfinished">Постави &amp;дугме</translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Meta+</source>
        <translation type="unfinished"></translation>
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
</context>
<context>
    <name>SideBar</name>
    <message>
        <source>No Style</source>
        <translation>Нема стила</translation>
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
        <translation>Нема стила</translation>
    </message>
</context>
<context>
    <name>StilFormate</name>
    <message>
        <source>Edit Styles</source>
        <translation>Уреди стилове</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="obsolete">&amp;Примени</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Нови</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Уреди</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>Д&amp;уплирај</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Обриши</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="obsolete">&amp;Сними</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Копија од %1</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation>Нови стил</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation type="obsolete">Да ли стварно желите да обришете овај стил?</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="obsolete">Не</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="obsolete">Да</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Отвори</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Документи (*.sla *.sla.gz *.scd *.scd.gz);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Документи (*.sla *.scd);;Сви фајлови (*)</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished">&amp;Увези</translation>
    </message>
</context>
<context>
    <name>StoryEditor</name>
    <message>
        <source>Story Editor</source>
        <translation>Уређивач приче</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Нови</translation>
    </message>
    <message>
        <source>&amp;Reload Text from Frame</source>
        <translation>&amp;Учитај поново текст из оквира</translation>
    </message>
    <message>
        <source>&amp;Save to File...</source>
        <translation>&amp;Сними у фајл...</translation>
    </message>
    <message>
        <source>&amp;Load from File...</source>
        <translation>&amp;Учитај из фајла...</translation>
    </message>
    <message>
        <source>Save &amp;Document</source>
        <translation>Сними &amp;документ</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame and Exit</source>
        <translation>&amp;Ажурирај текстуални оквир и изађи</translation>
    </message>
    <message>
        <source>&amp;Exit Without Updating Text Frame</source>
        <translation>&amp;Изађи без ажурирања текстуалног оквира</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>Изабери &amp;све</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>&amp;Исеци</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Копирај</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Пренеси</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>Оч&amp;исти</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation>&amp;Тражи/Замени...</translation>
    </message>
    <message>
        <source>&amp;Insert Special...</source>
        <translation type="obsolete">&amp;Уметни специјално...</translation>
    </message>
    <message>
        <source>&amp;Edit Styles...</source>
        <translation>&amp;Уређивање стилова...</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview...</source>
        <translation>Преглед &amp;фонтова...</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame</source>
        <translation>&amp;Ажурирај текстуални оквир</translation>
    </message>
    <message>
        <source>&amp;Background...</source>
        <translation>&amp;Позадина...</translation>
    </message>
    <message>
        <source>&amp;Display Font...</source>
        <translation>&amp;Прикажи фонт...</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Фајл</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Уреди</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation>&amp;Подешавања</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Фајл</translation>
    </message>
    <message>
        <source>Clear all Text</source>
        <translation type="obsolete">Очисти сав текст</translation>
    </message>
    <message>
        <source>Load Text from File</source>
        <translation type="obsolete">Учитај текст из фајла</translation>
    </message>
    <message>
        <source>Save Text to File</source>
        <translation type="obsolete">Сними текст у фајл</translation>
    </message>
    <message>
        <source>Update Text Frame and Exit</source>
        <translation type="obsolete">Ажурирај текстуални оквир и изађи</translation>
    </message>
    <message>
        <source>Exit Without Updating Text Frame</source>
        <translation type="obsolete">Изађи без ажурирања текстуалног оквира</translation>
    </message>
    <message>
        <source>Reload Text from Frame</source>
        <translation type="obsolete">Учитај поново текст из оквира</translation>
    </message>
    <message>
        <source>Update Text Frame</source>
        <translation type="obsolete">Ажурирај текстуални оквир</translation>
    </message>
    <message>
        <source>Search/Replace</source>
        <translation type="obsolete">Тражи/Замени</translation>
    </message>
    <message>
        <source>Current Paragraph:</source>
        <translation>Текући пасус:</translation>
    </message>
    <message>
        <source>Words: </source>
        <translation>Речи: </translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation>Карактери: </translation>
    </message>
    <message>
        <source>Totals:</source>
        <translation>Укупно:</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation>Пасуси: </translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Do you want to save your changes?</source>
        <translation>Да ли желите да снимите измене?</translation>
    </message>
    <message>
        <source>&amp;Insert Special</source>
        <translation type="obsolete">&amp;Уметни специјално</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview</source>
        <translation type="obsolete">Преглед &amp;фонтова</translation>
    </message>
    <message>
        <source>Do you really want to lose all your Changes?</source>
        <translation type="obsolete">Да ли стварно желите да се изгубе све измене?</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation type="obsolete">Да ли стварно желите да очистите сав текст?</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Отвори</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Текстуални фајлови (*.txt);;Сви фајлови(*)</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Сними као</translation>
    </message>
    <message>
        <source>&amp;Smart text selection</source>
        <translation>Избор &amp;паметног текста</translation>
    </message>
    <message>
        <source>&amp;Insert Glyph...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clear All Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Story Editor - %1</source>
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
        <source>&amp;Insert</source>
        <translation type="unfinished">Уметн&amp;и</translation>
    </message>
    <message>
        <source>Character</source>
        <translation type="unfinished">Знак</translation>
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
        <source>Space</source>
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
        <translation type="unfinished"> %</translation>
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
        <translation type="unfinished">Име:</translation>
    </message>
    <message>
        <source>&amp;Reset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation type="unfinished">&amp;Примени</translation>
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
        <translation type="unfinished">&amp;Нови</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished">&amp;Увези</translation>
    </message>
    <message>
        <source>&amp;Clone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">&amp;Обриши</translation>
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
        <translation type="unfinished">Нови</translation>
    </message>
    <message>
        <source>Import</source>
        <translation type="unfinished">Увези</translation>
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
        <translation type="unfinished">Обриши</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished">&amp;Уреди</translation>
    </message>
    <message>
        <source>&amp;Done</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shortcut</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>StyleSelect</name>
    <message>
        <source>Underline</source>
        <translation type="obsolete">Подвучено</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation>Мала верзална слова</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation>Индекс</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation>Изложилац</translation>
    </message>
    <message>
        <source>Strike Out</source>
        <translation type="obsolete">Прецртано</translation>
    </message>
    <message>
        <source>Outline Text</source>
        <translation type="obsolete">Контура текста</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation type="obsolete">Контура</translation>
    </message>
    <message>
        <source>All Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Outline</source>
        <comment>Text Style Selector</comment>
        <translation type="obsolete">Контура</translation>
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
        <source>OO.o Writer Importer Options</source>
        <translation type="obsolete">Опције OO.o Writer увозника</translation>
    </message>
    <message>
        <source>Update paragraph styles</source>
        <translation type="obsolete">Ажурирај стилове пасуса</translation>
    </message>
    <message>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation>Користи име документа као префикс за стилове пасуса</translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation>Не питај опет</translation>
    </message>
    <message>
        <source>Should the importer always use currently
set value when importing OO.o document and
never ask your confirmation again</source>
        <translation type="obsolete">Да ли би увозник увек требало да користи текућу
постављену вредност приликом увоза OO.o докумената и
да никада више не пита за потврду</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>У реду</translation>
    </message>
    <message>
        <source>Should importer add the name of the document
on front of the paragraph style name in Scribus</source>
        <translation type="obsolete">Да ли би увозник требало да дода име документа 
испред имена стила параграфа у Scribus-у</translation>
    </message>
    <message>
        <source>If a paragraph style already exists with the same name as the current
OpenOffice.org document&apos;s paragraph, should the style in Scribus be
edited to match the one being imported, or left untouched</source>
        <translation type="obsolete">Ако стил пасуса са истим именом као текући пасус OpenOffice.org-а већ постоји, да ли би требало изменити стил у Scribus-у да се поклапа са оним који се увози, или би требало да остане непромењен</translation>
    </message>
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
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make these settings the default and do not prompt again when importing an OpenOffice.org 1.x document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Поништи</translation>
    </message>
</context>
<context>
    <name>TOCIndexPrefs</name>
    <message>
        <source>None</source>
        <translation type="unfinished">Ниједан</translation>
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
        <translation type="unfinished">&amp;Додај</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">&amp;Обриши</translation>
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
        <source>Inde&amp;x</source>
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
        <translation type="unfinished">&amp;Додај</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">&amp;Обриши</translation>
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
        <source>Inde&amp;x</source>
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
        <source>Check for objects not on a page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for overflow in text frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for transparencies used</source>
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
        <translation type="unfinished"> тпи</translation>
    </message>
    <message>
        <source>Check for PDF Annotations and Fields</source>
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
</context>
<context>
    <name>TabDisplay</name>
    <message>
        <source>Color for paper</source>
        <translation type="unfinished">Боја папира</translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation type="unfinished">Маскирај област изван линија маргина у боју тих линија</translation>
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
        <translation type="unfinished">Постави подразумевани ниво увеличања/умањења</translation>
    </message>
    <message>
        <source>Place a ruler against your screen and drag the slider to set the zoom level so Scribus will display your pages and objects on them at the correct size</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabDisplayBase</name>
    <message>
        <source>Form2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Layer Indicators</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Text Chains</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation type="unfinished">Прикажи област која се не може одштампати у боји маргине</translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rulers Relative to Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Text Control Characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Pictures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="obsolete">Боја:</translation>
    </message>
    <message>
        <source>Scratch Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="unfinished">&amp;Лево:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="unfinished">&amp;Десно:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="unfinished">&amp;Дно:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="unfinished">&amp;Врх:</translation>
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
        <source>textLabel16</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>General</source>
        <translation type="unfinished">Опште</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation type="unfinished">Боје</translation>
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
</context>
<context>
    <name>TabDocument</name>
    <message>
        <source>Custom</source>
        <translation type="unfinished">Произвољно</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished">Величина папира</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished">&amp;Величина:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished">Усправно</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished">Водоравно</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished">Усм&amp;ерење:</translation>
    </message>
    <message>
        <source>Units:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished">Ш&amp;ирина:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished">&amp;Висина:</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="unfinished">Водиље маргина</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation type="unfinished">Аутоматско снимање</translation>
    </message>
    <message>
        <source>min</source>
        <translation type="unfinished">мин</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation type="unfinished">&amp;Период:</translation>
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
        <translation type="unfinished">Ширина страница документа, измењива ако сте изабрали произвољну величину странице</translation>
    </message>
    <message>
        <source>Height of document pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished">Висина страница документа, измењива ако сте изабрали произвољну величину странице</translation>
    </message>
    <message>
        <source>Default page size, either a standard size or a custom size</source>
        <translation type="unfinished">Подразумевана величина странице, или стандардна или произвољна величина</translation>
    </message>
    <message>
        <source>Default orientation of document pages</source>
        <translation type="unfinished">Подразумевана оријентација страница документа</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation type="unfinished">Подразумевана јединица мере за уређивање документа</translation>
    </message>
    <message>
        <source>When enabled, Scribus saves a backup copy of your file with the .bak extension each time the time period elapses</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Time period between saving automatically</source>
        <translation type="unfinished">Временски период између аутоматског снимања</translation>
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
        <translation type="unfinished">&amp;Име извршног фајла:</translation>
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
        <translation type="unfinished">Омекшај &amp;текст</translation>
    </message>
    <message>
        <source>Alt+T</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Antialias text for EPS and PDF onscreen rendering</source>
        <translation type="unfinished">Омекшај текст за EPS и PDF рендеровање на екрану</translation>
    </message>
    <message>
        <source>Antialias &amp;Graphics</source>
        <translation type="unfinished">Омекшај &amp;графику</translation>
    </message>
    <message>
        <source>Alt+G</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Antialias graphics for EPS and PDF onscreen rendering</source>
        <translation type="unfinished">Омекшај графику за EPS и PDF рендеровање на екрану</translation>
    </message>
    <message>
        <source>Resolution:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="unfinished"> тпи</translation>
    </message>
    <message>
        <source>Image Processing Tool</source>
        <translation type="unfinished">Алат за обраду слика</translation>
    </message>
    <message>
        <source>Name of &amp;Executable:</source>
        <translation type="unfinished">Имена &amp;извршних фајлова:</translation>
    </message>
    <message>
        <source>&amp;Change...</source>
        <translation type="unfinished">&amp;Измени...</translation>
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
        <source>&lt;qt&gt;Add the path for the Ghostscript interpreter. On Windows, please note it is important to note you need to use the program named gswin32c.exe - NOT gswin32.exe. Otherwise, this maybe cause a hang when starting Scribus.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;qt&gt;File system location for graphics editor. If you use gimp and your distribution includes it, we recommend &apos;gimp-remote&apos;, as it allows you to edit the image in an already running instance of gimp.&lt;/qt&gt;</source>
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
        <translation type="unfinished">Број скорије измењених докумената који се приказују у менију „Фајл“</translation>
    </message>
    <message>
        <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
        <translation type="unfinished">Број линија које ће се скроловати при сваком померању точкића на мишу</translation>
    </message>
    <message>
        <source>Choose the default window decoration and looks. Scribus inherits any available KDE or Qt themes, if Qt is configured to search KDE plugins.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default font size for the menus and windows</source>
        <translation type="unfinished">Подразумевана величина за меније и прозоре</translation>
    </message>
    <message>
        <source>Default font size for the tool windows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default documents directory</source>
        <translation type="unfinished">Подразумевани директоријум за документе</translation>
    </message>
    <message>
        <source>Default ICC profiles directory. This cannot be changed with a document open. By default, Scribus will look in the System Directories under Mac OSX and Windows. On Linux and Unix, Scribus will search $home/.color/icc,/usr/share/color/icc and /usr/local/share/color/icc </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default Scripter scripts directory</source>
        <translation type="unfinished">Подразумевани директоријум за scripter скрипте</translation>
    </message>
    <message>
        <source>Additional directory for document templates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation type="unfinished">Изаберите директоријум</translation>
    </message>
</context>
<context>
    <name>TabGeneralBase</name>
    <message>
        <source>Form1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GUI</source>
        <translation type="obsolete">Кориснички интерфејс</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation type="unfinished">&amp;Језик:</translation>
    </message>
    <message>
        <source>&amp;Theme:</source>
        <translation type="unfinished">&amp;Тема:</translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> тач.</translation>
    </message>
    <message>
        <source>Font Size (&amp;Palettes):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Wheel Jump:</source>
        <translation type="unfinished">&amp;Скок помоћу точкића:</translation>
    </message>
    <message>
        <source>&amp;Recent Documents:</source>
        <translation type="unfinished">&amp;Скорашњи документи:</translation>
    </message>
    <message>
        <source>Paths</source>
        <translation type="unfinished">Путање</translation>
    </message>
    <message>
        <source>&amp;Documents:</source>
        <translation type="unfinished">&amp;Документи:</translation>
    </message>
    <message>
        <source>&amp;Change...</source>
        <translation type="unfinished">&amp;Измени...</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
    <message>
        <source>&amp;ICC Profiles:</source>
        <translation type="unfinished">&amp;ICC профили:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="unfinished">И&amp;змени...</translation>
    </message>
    <message>
        <source>Alt+H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Scripts:</source>
        <translation type="unfinished">С&amp;крипте:</translation>
    </message>
    <message>
        <source>Ch&amp;ange...</source>
        <translation type="unfinished">Изм&amp;ени...</translation>
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
        <source>Cha&amp;nge...</source>
        <translation type="unfinished">Изме&amp;ни...</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>User Interface</source>
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
        <source> px</source>
        <translation type="unfinished"> px</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation type="obsolete">Водиље</translation>
    </message>
    <message>
        <source>Show Guides</source>
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
        <source>Color:</source>
        <translation type="unfinished">Боја:</translation>
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
        <source>Baseline Grid</source>
        <translation type="obsolete">Основна мрежа</translation>
    </message>
    <message>
        <source>Show Baseline Grid</source>
        <translation type="unfinished">Прикажи основну мрежу</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="obsolete"> %</translation>
    </message>
    <message>
        <source>Automatic &amp;Line Spacing:</source>
        <translation type="obsolete">Аутоматски проред &amp;линија:</translation>
    </message>
    <message>
        <source>Baseline &amp;Grid:</source>
        <translation type="unfinished">Основна &amp;мрежа:</translation>
    </message>
    <message>
        <source>Baseline &amp;Offset:</source>
        <translation type="unfinished">Основни &amp;померај:</translation>
    </message>
    <message>
        <source>Distance between the minor grid lines</source>
        <translation type="unfinished">Растојање између мањих линија мреже</translation>
    </message>
    <message>
        <source>Distance between the major grid lines</source>
        <translation type="unfinished">Растојање између озбиљних линија мреже</translation>
    </message>
    <message>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation type="unfinished">Растојање у оквиру кога ће се објекат пребацити на постављене водиље</translation>
    </message>
    <message>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation type="unfinished">Радијус области где ће Вам scribus дозволити да хватате објекте</translation>
    </message>
    <message>
        <source>Color of the minor grid lines</source>
        <translation type="unfinished">Боја мањих линија мреже</translation>
    </message>
    <message>
        <source>Color of the major grid lines</source>
        <translation type="unfinished">Боја озбиљнијих линија мреже</translation>
    </message>
    <message>
        <source>Color of the guide lines you insert</source>
        <translation type="unfinished">Боја водиља које Ви умећете</translation>
    </message>
    <message>
        <source>Color for the margin lines</source>
        <translation type="unfinished">Боја линија маргина</translation>
    </message>
    <message>
        <source>Turns the basegrid on or off</source>
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
        <source>Percentage increase over the font size for the line spacing</source>
        <translation type="obsolete">Процентуално повећање величине фонта за проред линија</translation>
    </message>
    <message>
        <source>Baseline Settings</source>
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
        <source>Color for the baseline grid</source>
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
</context>
<context>
    <name>TabKeyboardShortcutsWidget</name>
    <message>
        <source>Key Set XML Files (*.ksxml)</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Meta+</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">Акција</translation>
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
        <translation type="unfinished">&amp;Нема дугмета</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;User Defined Key</source>
        <translation type="unfinished">&amp;Дугме дефинисано од стране корисника</translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set &amp;Key</source>
        <translation type="unfinished">Постави &amp;дугме</translation>
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
        <translation>Управљање табулаторима</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
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
        <translation type="unfinished">Опсег извожења</translation>
    </message>
    <message>
        <source>&amp;All Pages</source>
        <translation type="unfinished">&amp;Све странице</translation>
    </message>
    <message>
        <source>C&amp;hoose Pages</source>
        <translation type="unfinished">Изаб&amp;ерите странице</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="unfinished">&amp;Ротација:</translation>
    </message>
    <message>
        <source>File Options</source>
        <translation type="unfinished">Опције за фајлове</translation>
    </message>
    <message>
        <source>Compatibilit&amp;y:</source>
        <translation type="unfinished">Компатибилнос&amp;т:</translation>
    </message>
    <message>
        <source>&amp;Binding:</source>
        <translation type="unfinished">&amp;Повезивање</translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation type="unfinished">Лева маргина</translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation type="unfinished">Десна маргина</translation>
    </message>
    <message>
        <source>Generate &amp;Thumbnails</source>
        <translation type="unfinished">Направи &amp;сличице</translation>
    </message>
    <message>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation type="unfinished">Сними &amp;повезане текстуалне оквире као PDF чланке</translation>
    </message>
    <message>
        <source>&amp;Include Bookmarks</source>
        <translation type="unfinished">&amp;Обухвати маркере</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="unfinished"> тпи</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation type="obsolete">&amp;Резолуција:</translation>
    </message>
    <message>
        <source>Com&amp;press Text and Vector Graphics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image Settings</source>
        <translation type="obsolete">Поставке слике</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation type="unfinished">Аутоматски</translation>
    </message>
    <message>
        <source>JPEG</source>
        <translation type="obsolete">JPEG</translation>
    </message>
    <message>
        <source>Zip</source>
        <translation type="obsolete">Zip</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Ниједан</translation>
    </message>
    <message>
        <source>&amp;Method:</source>
        <translation type="obsolete">&amp;Метод:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation type="obsolete">&amp;Квалитет:</translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation type="unfinished">Максимално</translation>
    </message>
    <message>
        <source>High</source>
        <translation type="unfinished">Висок</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="unfinished">Средњи</translation>
    </message>
    <message>
        <source>Low</source>
        <translation type="unfinished">Низак</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation type="unfinished">Минимално</translation>
    </message>
    <message>
        <source>&amp;Downsample Images to:</source>
        <translation type="obsolete">&amp;Смањи резолуцију слике на:</translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation type="unfinished">&amp;Опште</translation>
    </message>
    <message>
        <source>&amp;Embed all Fonts</source>
        <translation type="unfinished">&amp;Уметни све фонтове</translation>
    </message>
    <message>
        <source>&amp;Subset all Fonts</source>
        <translation type="unfinished">Сви фонтови у &amp;подсет</translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation type="unfinished">Уметање</translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation type="unfinished">Доступни фонтови:</translation>
    </message>
    <message>
        <source>&amp;&gt;&gt;</source>
        <translation type="unfinished">&amp;&gt;&gt;</translation>
    </message>
    <message>
        <source>&amp;&lt;&lt;</source>
        <translation type="unfinished">&amp;&lt;&lt;</translation>
    </message>
    <message>
        <source>Fonts to embed:</source>
        <translation type="unfinished">Фонтови за уметање:</translation>
    </message>
    <message>
        <source>Fonts to subset:</source>
        <translation type="unfinished">Фонтови за подсет:</translation>
    </message>
    <message>
        <source>&amp;Fonts</source>
        <translation type="unfinished">&amp;Фонтови</translation>
    </message>
    <message>
        <source>Enable &amp;Presentation Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished">Страница</translation>
    </message>
    <message>
        <source>Show Page Pre&amp;views</source>
        <translation type="unfinished">Прикажи пред&amp;приказе страница</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation type="unfinished">Ефекти</translation>
    </message>
    <message>
        <source>&amp;Display Duration:</source>
        <translation type="unfinished">&amp;Прикажи трајање:</translation>
    </message>
    <message>
        <source>Effec&amp;t Duration:</source>
        <translation type="unfinished">Ефека&amp;т трајање:</translation>
    </message>
    <message>
        <source>Effect T&amp;ype:</source>
        <translation type="unfinished">Ефекат в&amp;рста:</translation>
    </message>
    <message>
        <source>&amp;Moving Lines:</source>
        <translation type="unfinished">&amp;Премештам линије:</translation>
    </message>
    <message>
        <source>F&amp;rom the:</source>
        <translation type="unfinished">&amp;Од:</translation>
    </message>
    <message>
        <source>D&amp;irection:</source>
        <translation type="unfinished">С&amp;мера:</translation>
    </message>
    <message>
        <source> sec</source>
        <translation type="unfinished"> сек.</translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation type="unfinished">Без ефеката</translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation type="unfinished">Ролетне</translation>
    </message>
    <message>
        <source>Box</source>
        <translation type="unfinished">Кутија</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation type="unfinished">Растварање</translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation type="unfinished">Сјај</translation>
    </message>
    <message>
        <source>Split</source>
        <translation type="unfinished">Раздвоји</translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation type="unfinished">Обриши</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="unfinished">Водоравно</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="unfinished">Усправно</translation>
    </message>
    <message>
        <source>Inside</source>
        <translation type="unfinished">Унутра</translation>
    </message>
    <message>
        <source>Outside</source>
        <translation type="unfinished">Споља</translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation type="unfinished">С лева на десно</translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation type="unfinished">Од врха до дна</translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation type="unfinished">Од дна до врха</translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation type="unfinished">С десна на лево</translation>
    </message>
    <message>
        <source>Top-left to Bottom-Right</source>
        <translation type="unfinished">Врх-лево до дно-десно</translation>
    </message>
    <message>
        <source>&amp;Apply Effect on all Pages</source>
        <translation type="unfinished">&amp;Примени ефекат на све странице</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation type="unfinished">Пр&amp;оширења</translation>
    </message>
    <message>
        <source>&amp;Use Encryption</source>
        <translation type="unfinished">&amp;Користи шифровање</translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation type="unfinished">Лозинке</translation>
    </message>
    <message>
        <source>&amp;User:</source>
        <translation type="unfinished">&amp;Корисник:</translation>
    </message>
    <message>
        <source>&amp;Owner:</source>
        <translation type="unfinished">&amp;Власник:</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation type="unfinished">Поставке</translation>
    </message>
    <message>
        <source>Allow &amp;Printing the Document</source>
        <translation type="unfinished">Дозволи &amp;штампање документа</translation>
    </message>
    <message>
        <source>Allow &amp;Changing the Document</source>
        <translation type="unfinished">Дозволи &amp;измену документа</translation>
    </message>
    <message>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation type="unfinished">Дозволи &amp;копирање текста и графике</translation>
    </message>
    <message>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation type="unfinished">Дозволи додавање &amp;анотација и поља</translation>
    </message>
    <message>
        <source>S&amp;ecurity</source>
        <translation type="unfinished">&amp;Безбедност</translation>
    </message>
    <message>
        <source>General</source>
        <translation type="unfinished">Опште</translation>
    </message>
    <message>
        <source>Output &amp;Intended For:</source>
        <translation type="unfinished">Излаз &amp;намењен за:</translation>
    </message>
    <message>
        <source>Screen / Web</source>
        <translation type="unfinished">Екран / веб</translation>
    </message>
    <message>
        <source>Printer</source>
        <translation type="unfinished">Штампач</translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation type="unfinished">&amp;Користи произвољне поставке рендеровања</translation>
    </message>
    <message>
        <source>Rendering Settings</source>
        <translation type="unfinished">Поставке рендеровања</translation>
    </message>
    <message>
        <source>Fre&amp;quency:</source>
        <translation type="unfinished">Уче&amp;сталост:</translation>
    </message>
    <message>
        <source>&amp;Angle:</source>
        <translation type="unfinished">&amp;Угао:</translation>
    </message>
    <message>
        <source>S&amp;pot Function:</source>
        <translation type="unfinished">Та&amp;чка функција:</translation>
    </message>
    <message>
        <source>Simple Dot</source>
        <translation type="unfinished">Једноставна тачка</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="unfinished">Линија</translation>
    </message>
    <message>
        <source>Round</source>
        <translation type="unfinished">Кружна</translation>
    </message>
    <message>
        <source>Ellipse</source>
        <translation type="unfinished">Елипса</translation>
    </message>
    <message>
        <source>Solid Colors:</source>
        <translation type="unfinished">Пуне боје:</translation>
    </message>
    <message>
        <source>Use ICC Profile</source>
        <translation type="unfinished">Користи ICC профил</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation type="unfinished">Профил:</translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation type="unfinished">Намера рендеровања:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="unfinished">Перцептуално</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="unfinished">Релативна колорметрика</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished">Засићење</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="unfinished">Апсолутна колорметрика</translation>
    </message>
    <message>
        <source>Images:</source>
        <translation type="unfinished">Слике:</translation>
    </message>
    <message>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation type="unfinished">Немој да користиш уметнуте ICC профиле</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation type="unfinished">Б&amp;оја</translation>
    </message>
    <message>
        <source>PDF/X-3 Output Intent</source>
        <translation type="unfinished">PDF/X-3 на излазу</translation>
    </message>
    <message>
        <source>&amp;Info String:</source>
        <translation type="unfinished">&amp;Инфо знаковни низ:</translation>
    </message>
    <message>
        <source>Output &amp;Profile:</source>
        <translation type="unfinished">Излазни &amp;профил:</translation>
    </message>
    <message>
        <source>Trim Box</source>
        <translation type="unfinished">Подсеци кутију</translation>
    </message>
    <message>
        <source>PDF/X-&amp;3</source>
        <translation type="unfinished">PDF/X-&amp;3</translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts
will preserve the layout and appearance of your document.</source>
        <translation type="obsolete">Уметни фонтове у PDF. Уметање фонтова
ће сачувати распоред и изглед Вашег документа.</translation>
    </message>
    <message>
        <source>Enables presentation effects when using Acrobat Reader in full screen mode.</source>
        <translation type="obsolete">Укључује ефекте презентације када се користи Acrobat Reader у режиму преко целог екрана.</translation>
    </message>
    <message>
        <source>Show page previews of each page listed above.</source>
        <translation type="unfinished">Прикажи преглед стране за сваку од горе излистаних страница.</translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page.</source>
        <translation type="obsolete">Временски интервал за који се приказује страница пре него што почне презентација на изабраној страници.</translation>
    </message>
    <message>
        <source>Length of time the effect runs.
A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation type="obsolete">Дужина трајања ефекта.
Краће време ће убрзати ефекат, а дуже ће га успорити.</translation>
    </message>
    <message>
        <source>Type of the display effect.</source>
        <translation type="unfinished">Врста ефекта приказа.</translation>
    </message>
    <message>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation type="unfinished">Смер ефекта крећућих линија за ефекте „подели“ и „ролетна“.</translation>
    </message>
    <message>
        <source>Starting position for the box and split effects.</source>
        <translation type="unfinished">Почетна позиција за ефекте „подели“ и „кутија“.</translation>
    </message>
    <message>
        <source>Direction of the glitter or wipe effects.</source>
        <translation type="unfinished">Смер ефеката „сјај“ и „брисање“.</translation>
    </message>
    <message>
        <source>Apply the selected effect to all pages.</source>
        <translation type="unfinished">Примени изабрани ефекат на све странице.</translation>
    </message>
    <message>
        <source>Export all pages to PDF</source>
        <translation type="unfinished">Извези све странице у PDF</translation>
    </message>
    <message>
        <source>Export a range of pages to PDF</source>
        <translation type="unfinished">Извези опсег страница у PDF</translation>
    </message>
    <message>
        <source>Determines the PDF compatibility. The default is Acrobat 4.0 which gives the widest compatibility.
Choose Acrobat 5.0 if your file has PDF 1.4 features such as transparency or you require 128 bit encryption.
PDF/X-3 is for exporting the PDF for commercial printing and is selectable when you have activated color management.</source>
        <translation type="obsolete">Утврђује PDF компатибилност. Подразумевана је Acrobat 4.0 који даје најширу компатибилност.
Изаберите Acrobat 5.0 ако Ваши фајлови поседују PDF 1.4 карактеристике као што су провидност или Вам је потребна 128. битно шифровање.
PDF/X-3 служи за извоз у PDF за комерцијалну штампу и могуће га је изабрати када активирате управљање бојама.</translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know
you need to change it leave the default choice - Left.</source>
        <translation type="obsolete">Утврђује повезивање страна у PDF-у. Отавите подразумевани
избор - Лево, осим ако знате да ово треба да промените.</translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF.
Some viewers can use the thumbnails for navigation.</source>
        <translation type="obsolete">Прави сличицу сваке стране у PDF-у.
Неки прегледачи могу користити сличице за навигацију.</translation>
    </message>
    <message>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation type="unfinished">Прави PDF чланке, што је корисно за навигацију по повезаним чланцима у PDF-у.</translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document.
These are useful for navigating long PDF documents.</source>
        <translation type="obsolete">Умеће маркере које сте направили у Ваш документ.
Ово је корисно при навигацији кроз дугачке PDF документе.</translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics.
This does not affect the resolution of bitmap images like photos.</source>
        <translation type="obsolete">Извози резолуцију текста и векторске графике.
Ово не утиче на резолуцију bitmap слика као што су фотографије.</translation>
    </message>
    <message>
        <source>Compression of text and graphics.
Unless you have a reason, leave this checked. This reduces PDF size.</source>
        <translation type="obsolete">Компресија текста и графике.
Оставите ово штиклирано, осим ако немате разлога за супротно. Ово смањује величину PDF-а.</translation>
    </message>
    <message>
        <source>Version of compression for images.
Automatic allows Scribus to choose the best method.
ZIP is good for images with solid colors.
JPEG is better at creating smaller PDF files which have many photos (with slight image loss possible).
Leave it set to automatic, unless you have a need for special compression options.</source>
        <translation type="obsolete">Верзија компресије за слике.
„Аутоматска“ дозвољава Scribus-у да изабере најбољи метод.
ZIP је добар за слике са пуним бојама.
JPEG је бољи за прављење PDF фајлова који садрже много фотографија (са могућим малим губитком квалитета).
Оставите поставку на „Аутоматска“, уколико немате потребу за специјалним опцијама компресије.</translation>
    </message>
    <message>
        <source>Compression levels: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%)</source>
        <translation type="obsolete">Нивои компресије: Минималан (25\\%), Низак (50\\%), Средњи (75\\%), Висок (85\\%), Максималан (95\\%)</translation>
    </message>
    <message>
        <source>Downsample your bitmap images to the selected DPI.
Leaving this unchecked will render them at their native resolution.</source>
        <translation type="obsolete">Смањите резолуцију Ваших битмап слика на изабрани резолуцију (тпи).
Ако ово оставите нештиклирано рендероваће се у матичној резолуцији.</translation>
    </message>
    <message>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation type="unfinished">ТПИ (Тачака По Инчу) за извоз слика.</translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF.
If you selected Acrobat 4.0, the PDF will be protected by 40 bit encryption.
If you selected Acrobat 5.0, the PDF will be protected by 128 bit encryption.
Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation type="obsolete">Укључи сигурносна својства у PDF-у.
Ако сте изабрали Acrobat 4.0, PDF ће бити заштићен 40 битном 
енкрипцијом.
Ако сте изабрали Acrobat 5.0, PDF ће бити заштићен 128 битном 
енкрипцијом.
Обавештење: PDF енкрипција није тако поуздана као GPG или PGP енкрипција и има неких ограничења.</translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the
security features in your exported PDF</source>
        <translation type="obsolete">Изаберите главну лозинку која укључује или искључује сва
сигурносна својства и Вашем извезеном PDF-у</translation>
    </message>
    <message>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation type="unfinished">Изаберите лозинку помоћу које ће корисници моћи да читају Ваш PDF.</translation>
    </message>
    <message>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation type="unfinished">Дозволи штампање PDF-а. Ако није штиклирано, штампање није омогућено. </translation>
    </message>
    <message>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation type="unfinished">Дозволи измену PDF-а. Ако није штиклирано, измена PDF-а није омогућена.</translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. 
If un-checked, text and graphics cannot be copied.</source>
        <translation type="obsolete">Дозволи копирање текста и графике из PDF-а. 
Ако није штиклирано, текст и графика се не могу копирати.</translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. 
If un-checked, editing annotations and fileds is prevented.</source>
        <translation type="obsolete">Дозволи додавање анотација и поља у PDF. 
Ако није штиклирано, уређивање анотација и поља је онемогућено.</translation>
    </message>
    <message>
        <source>Color model for the output of your PDF.
Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets.
Choose Printer when printing to a true 4 color CMYK printer.</source>
        <translation type="obsolete">Модел боја за излазни PDF.
Изаберите Екран/Веб за PDF-ове који се користе за приказ на екрану и штампање на обичним штампачима.
Изабери штампач када се штампа на штампачу са CMYK четворобојном штампом.</translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled
when specifically requested by your printer and they have given you the exact details needed.
Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation type="obsolete">јОво је напредно поешавање које није укључено као подразумевано. Ово би требало да буде укључено само
када се то експлицитно захтева од стране Вашег штампача и имате прецизне податке који су Вам потребни.
Иначе, Ваш извезени PDF може да има грешке при штампању и да не буде преносив између различитих система.</translation>
    </message>
    <message>
        <source>Embed a color profile for solid colors</source>
        <translation type="unfinished">Уметни профил боја за пуне боје</translation>
    </message>
    <message>
        <source>Color profile for solid colors</source>
        <translation type="unfinished">Профил боја за пуне боје</translation>
    </message>
    <message>
        <source>Rendering intent for solid colors</source>
        <translation type="unfinished">Намера рендеровања за пуне боје</translation>
    </message>
    <message>
        <source>Embed a color profile for images</source>
        <translation type="unfinished">Уметни профил боја за слик</translation>
    </message>
    <message>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation type="unfinished">Немој да користиш профиле боја који су уметнути у изворне слике</translation>
    </message>
    <message>
        <source>Color profile for images</source>
        <translation type="unfinished">Профил боја за слике</translation>
    </message>
    <message>
        <source>Rendering intent for images</source>
        <translation type="unfinished">Намера рендеровања за слике</translation>
    </message>
    <message>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation type="unfinished">Излазни профил за штампу. Ако је могуће, добавите нека упутства од Вашег штампача везана за избор профила.</translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail
PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation type="obsolete">Обавезан знаковни низ за PDF/X-3 или неће успети прилагођавање
PDF-а PDF/X-3-у. Препоручујемо да користите наслов документа.</translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="unfinished">Растојање за цурење од врха физичке странице</translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="unfinished">Растојање за цурење од дна физичке странице</translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="unfinished">Растојање за цурење с лева физичке странице</translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="unfinished">Растојање за цурење с десна физичке странице</translation>
    </message>
    <message>
        <source>Mirror Page(s) horizontally</source>
        <translation type="unfinished">Окрени страницу(е) водоравно</translation>
    </message>
    <message>
        <source>Mirror Page(s) vertically</source>
        <translation type="unfinished">Окрени страницу(е) усправно</translation>
    </message>
    <message>
        <source>&amp;Resolution for EPS Graphics:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Convert Spot Colors to Process Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Compression &amp;Quality:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Compression quality levels for lossy compression methods: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%). Note that a quality level does not directly determine the size of the resulting image - both size and quality loss vary from image to image at any given quality level.</source>
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
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Include La&amp;yers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Compression Metho&amp;d:</source>
        <translation type="unfinished"></translation>
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
        <source>Enable the security features in your exported PDF. If you selected PDF 1.3, the PDF will be protected by 40 bit encryption. If you selected PDF 1.4, the PDF will be protected by 128 bit encryption. Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the security features in your exported PDF</source>
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
        <source>Display Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Layout</source>
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
        <source>No Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Viewer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clip to Page Margins</source>
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
        <source>Method of compression to use for images. Automatic allows Scribus to choose the best method. ZIP is lossless and good for images with solid colors. JPEG is better at creating smaller PDF files which have many photos (with slight image quality loss possible). Leave it set to Automatic unless you have a need for special compression options. This only affects JPEG images</source>
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
</context>
<context>
    <name>TabScrapbookBase</name>
    <message>
        <source>Form2</source>
        <translation type="unfinished"></translation>
    </message>
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
</context>
<context>
    <name>TabTools</name>
    <message>
        <source>Font:</source>
        <translation type="unfinished">Фонт:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> тач.</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation type="unfinished">Величина:</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">Ниједан</translation>
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
        <source>Colu&amp;mns:</source>
        <translation type="unfinished">&amp;Колоне:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="unfinished">&amp;Процеп:</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="unfinished">Плетене свилене пиџаме замењене за плави кварц</translation>
    </message>
    <message>
        <source>&amp;Line Color:</source>
        <translation type="unfinished">Боја &amp;линије:</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>&amp;Shading:</source>
        <translation type="unfinished">&amp;Сенчење:</translation>
    </message>
    <message>
        <source>&amp;Fill Color:</source>
        <translation type="unfinished">Боја &amp;испуњавања:</translation>
    </message>
    <message>
        <source>S&amp;hading:</source>
        <translation type="unfinished">Се&amp;нчење:</translation>
    </message>
    <message>
        <source>Line Style:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation type="unfinished">&amp;Ширина линије:</translation>
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
        <source>&amp;Free Scaling</source>
        <translation type="unfinished">&amp;Слободно скалирање</translation>
    </message>
    <message>
        <source>&amp;Horizontal Scaling:</source>
        <translation type="unfinished">&amp;Водоравно скалирање:</translation>
    </message>
    <message>
        <source>&amp;Vertical Scaling:</source>
        <translation type="unfinished">&amp;Усправно скалирање:</translation>
    </message>
    <message>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation type="unfinished">&amp;Скалирај слику на величину оквира</translation>
    </message>
    <message>
        <source>Keep Aspect &amp;Ratio</source>
        <translation type="unfinished">Задржи аспектну &amp;сразмеру</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation type="unfinished">Боја за поп&amp;уњавање:</translation>
    </message>
    <message>
        <source>Mi&amp;nimum:</source>
        <translation type="unfinished">Мин&amp;имално:</translation>
    </message>
    <message>
        <source>Ma&amp;ximum:</source>
        <translation type="unfinished">Мак&amp;симално:</translation>
    </message>
    <message>
        <source>&amp;Stepping:</source>
        <translation type="unfinished">&amp;Кораци:</translation>
    </message>
    <message>
        <source>Text Frame Properties</source>
        <translation type="unfinished">Својства текстуалног оквира</translation>
    </message>
    <message>
        <source>Picture Frame Properties</source>
        <translation type="unfinished">Својства оквира за слике</translation>
    </message>
    <message>
        <source>Shape Drawing Properties</source>
        <translation type="unfinished">Својства исцртавања облика</translation>
    </message>
    <message>
        <source>Magnification Level Defaults</source>
        <translation type="unfinished">Подразумеване вредности нивоа увеличавања</translation>
    </message>
    <message>
        <source>Line Drawing Properties</source>
        <translation type="unfinished">Својства исцртавања линија</translation>
    </message>
    <message>
        <source>Polygon Drawing Properties</source>
        <translation type="unfinished">Својства исцртавања полигона</translation>
    </message>
    <message>
        <source>Font for new text frames</source>
        <translation type="unfinished">Фонт за нове текстуалне оквире</translation>
    </message>
    <message>
        <source>Size of font for new text frames</source>
        <translation type="unfinished">Величина фонта за нове текстуалне оквире</translation>
    </message>
    <message>
        <source>Color of font</source>
        <translation type="unfinished">Боја фонта</translation>
    </message>
    <message>
        <source>Number of columns in a text frame</source>
        <translation type="unfinished">Број колона у текстуалном оквиру</translation>
    </message>
    <message>
        <source>Gap between text frame columns</source>
        <translation type="unfinished">Размак између колона текстуалног оквира</translation>
    </message>
    <message>
        <source>Sample of your font</source>
        <translation type="unfinished">Пример Вашег фонта</translation>
    </message>
    <message>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation type="unfinished">Оквири за слике дозвољавају скалирање слика на било коју величину</translation>
    </message>
    <message>
        <source>Horizontal scaling of images</source>
        <translation type="unfinished">Водоравно скалирање слика</translation>
    </message>
    <message>
        <source>Vertical scaling of images</source>
        <translation type="unfinished">Усправно скалирање слика</translation>
    </message>
    <message>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation type="unfinished">Задржи подједнако водоравно и усправно скалирање</translation>
    </message>
    <message>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation type="unfinished">Слике у оквирима за слике се скалирају према величини оквира</translation>
    </message>
    <message>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation type="unfinished">Аутоматски скалиране слике задржавају своје оригиналне пропорције</translation>
    </message>
    <message>
        <source>Fill color of picture frames</source>
        <translation type="unfinished">Боја за испуњавање оквира за слике</translation>
    </message>
    <message>
        <source>Saturation of color of fill</source>
        <translation type="unfinished">Засићење боје за испуњавање</translation>
    </message>
    <message>
        <source>Line color of shapes</source>
        <translation type="unfinished">Боја линије за облике</translation>
    </message>
    <message>
        <source>Saturation of color of lines</source>
        <translation type="unfinished">Засићење боје за линије</translation>
    </message>
    <message>
        <source>Fill color of shapes</source>
        <translation type="unfinished">Боја испуњавања за облике</translation>
    </message>
    <message>
        <source>Line style of shapes</source>
        <translation type="unfinished">Стил линије за облике</translation>
    </message>
    <message>
        <source>Line width of shapes</source>
        <translation type="unfinished">Ширина линије за облике</translation>
    </message>
    <message>
        <source>Minimum magnification allowed</source>
        <translation type="unfinished">Минимално увећање дозвољено</translation>
    </message>
    <message>
        <source>Maximum magnification allowed</source>
        <translation type="unfinished">Максимално увећање дозвољено</translation>
    </message>
    <message>
        <source>Change in magnification for each zoom operation</source>
        <translation type="unfinished">Измена увеличања за сваку операцију увеличавања/умањивања</translation>
    </message>
    <message>
        <source>Color of lines</source>
        <translation type="unfinished">Боја линија</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation type="unfinished">Засићење боје</translation>
    </message>
    <message>
        <source>Style of lines</source>
        <translation type="unfinished">Стил линија</translation>
    </message>
    <message>
        <source>Width of lines</source>
        <translation type="unfinished">Ширина линија</translation>
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
        <source>Custom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Color:</source>
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
        <translation type="unfinished">Произвољно</translation>
    </message>
    <message>
        <source>None</source>
        <comment>tab fill</comment>
        <translation type="unfinished">Ниједан</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished">Текст</translation>
    </message>
    <message>
        <source>Shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lines</source>
        <translation type="unfinished"></translation>
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
</context>
<context>
    <name>TabTypograpy</name>
    <message>
        <source>Subscript</source>
        <translation type="unfinished">Индекс</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>&amp;Displacement:</source>
        <translation type="unfinished">&amp;Погрешно постављање:</translation>
    </message>
    <message>
        <source>&amp;Scaling:</source>
        <translation type="unfinished">&amp;Скалирање:</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="unfinished">Изложилац</translation>
    </message>
    <message>
        <source>D&amp;isplacement:</source>
        <translation type="unfinished">По&amp;грешно постављање:</translation>
    </message>
    <message>
        <source>S&amp;caling:</source>
        <translation type="unfinished">С&amp;калирање:</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="unfinished">Мала верзална слова</translation>
    </message>
    <message>
        <source>Sc&amp;aling:</source>
        <translation type="unfinished">Ска&amp;лирање:</translation>
    </message>
    <message>
        <source>Displacement above the baseline of the font on a line</source>
        <translation type="unfinished">Погрешно постављање изнад основне линије фонта на линији</translation>
    </message>
    <message>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation type="unfinished">Релативна величина superscript-а у поређењу са нормалним фонтом</translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation type="unfinished">Погрешно постављање испод основне линије фонта на линији</translation>
    </message>
    <message>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation type="unfinished">Релативна величина subscript-а у поређењу са нормалним фонтом</translation>
    </message>
    <message>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation type="unfinished">Релативна величина фонта малих слова у поређењу са нормалним фонтом</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation type="unfinished">Подвучено</translation>
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
        <translation type="unfinished">Ширина линије:</translation>
    </message>
    <message>
        <source>Strikethru</source>
        <translation type="unfinished">Право напред</translation>
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
        <source>Percentage increase over the font size for the line spacing</source>
        <translation type="unfinished">Процентуално повећање величине фонта за проред линија</translation>
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
        <translation>Лева</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Десна</translation>
    </message>
    <message>
        <source>Full Stop</source>
        <translation>Тачка</translation>
    </message>
    <message>
        <source>Comma</source>
        <translation>Запета</translation>
    </message>
    <message>
        <source>Center</source>
        <translation>Средина</translation>
    </message>
    <message>
        <source>&amp;Position:</source>
        <translation>&amp;Положај:</translation>
    </message>
    <message>
        <source>First &amp;Line:</source>
        <translation type="obsolete">Прва &amp;линија:</translation>
    </message>
    <message>
        <source>Ind&amp;ent:</source>
        <translation type="obsolete">Увла&amp;чење:</translation>
    </message>
    <message>
        <source>Delete All</source>
        <translation>Обриши све</translation>
    </message>
    <message>
        <source>Indentation for first line of the paragraph</source>
        <translation>Увлачење за прву линију пасуса</translation>
    </message>
    <message>
        <source>Indentation from the left for the whole paragraph</source>
        <translation>Увлачење од леве стране за цео пасус</translation>
    </message>
    <message>
        <source>Delete all Tabulators</source>
        <translation>Обриши све табулаторе</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> тач.</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Ниједан</translation>
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
        <translation type="unfinished">Произвољно</translation>
    </message>
    <message>
        <source>Fill Char:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <comment>tab fill</comment>
        <translation type="unfinished">Ниједан</translation>
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
        <translation>Контура</translation>
    </message>
    <message>
        <source>Element</source>
        <translation>Елемент</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Врста</translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="obsolete">Информација</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Упозорење</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="obsolete">Име „%1“ није јединствено. 
Молим Вас изаберите друго.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">У реду</translation>
    </message>
    <message>
        <source>X:</source>
        <translation type="obsolete">X:</translation>
    </message>
    <message>
        <source>Y:</source>
        <translation type="obsolete">Y:</translation>
    </message>
    <message>
        <source>Font:</source>
        <translation type="obsolete">Фонт:</translation>
    </message>
    <message>
        <source>Group </source>
        <translation>Група </translation>
    </message>
    <message>
        <source>Image</source>
        <translation type="obsolete">Слика</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="obsolete">Текст</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="obsolete">Линија</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation type="obsolete">Полигон</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation type="obsolete">Полилинија</translation>
    </message>
    <message>
        <source>PathText</source>
        <translation type="obsolete">Текста путање</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="obsolete">Страница</translation>
    </message>
    <message>
        <source>Free Objects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page </source>
        <translation type="unfinished">Страница</translation>
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
        <translation type="unfinished"> %</translation>
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
        <source>Selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Group</source>
        <translation type="unfinished">Група</translation>
    </message>
    <message>
        <source>Selection/Group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create</source>
        <translation type="unfinished">Направи</translation>
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
        <translation type="unfinished">Поништи</translation>
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
        <translation type="unfinished">Закључај</translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation type="unfinished">Откључај</translation>
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
        <source>Ungroup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="unfinished">Обриши</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation type="unfinished">Преименуј</translation>
    </message>
    <message>
        <source>From %1
to %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Paste</source>
        <translation type="unfinished">Пренеси</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation type="unfinished">Исеци</translation>
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
        <translation type="unfinished">Полигон</translation>
    </message>
    <message>
        <source>Bezier curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation type="unfinished">Полилинија</translation>
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
        <source>Apply Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set font height</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import OpenOffice.org Draw image</source>
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
        <source>Text on a Path</source>
        <translation type="unfinished">Текст на путањи</translation>
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
        <source>Multiple duplicate</source>
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
        <translation type="unfinished">&amp;Опозови</translation>
    </message>
    <message>
        <source>&amp;Redo: %1</source>
        <comment>f.e. Redo: Move</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished">Поно&amp;ви</translation>
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
</context>
<context>
    <name>UndoPalette</name>
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
        <translation type="unfinished">&amp;Опозови</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished">Поно&amp;ви</translation>
    </message>
    <message>
        <source>Initial State</source>
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
        <translation type="unfinished">&amp;Врх:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="unfinished">&amp;Дно:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="unfinished">&amp;Лево:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished">&amp;У реду</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="unfinished">Alt+O</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">&amp;Откажи</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
</context>
<context>
    <name>ValueDialog</name>
    <message>
        <source>Insert value</source>
        <translation>Уметни вредност</translation>
    </message>
    <message>
        <source>Enter a value then press OK.</source>
        <translation>Унесите вредност а затим притисните „У реду“.</translation>
    </message>
    <message>
        <source>Enter a value then press OK</source>
        <translation>Унесите вредност а затим притисните „У реду“</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <source>Send your value to the script</source>
        <translation>Пошаљите Вашу вредност скрипти</translation>
    </message>
</context>
<context>
    <name>VlnaDialog</name>
    <message>
        <source>&amp;OK</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="obsolete">&amp;Уреди</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation type="obsolete">По&amp;моћ</translation>
    </message>
</context>
<context>
    <name>WerkToolB</name>
    <message>
        <source>Tools</source>
        <translation type="obsolete">Алати</translation>
    </message>
    <message>
        <source>Select Items</source>
        <translation type="obsolete">Изаберите ставке</translation>
    </message>
    <message>
        <source>Insert Text Frame</source>
        <translation type="obsolete">Уметни текстуални оквир</translation>
    </message>
    <message>
        <source>Insert Picture</source>
        <translation type="obsolete">Убаци слику</translation>
    </message>
    <message>
        <source>Insert Table</source>
        <translation type="obsolete">Убаци табелу</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation type="obsolete">Својства...</translation>
    </message>
    <message>
        <source>Insert Polygons</source>
        <translation type="obsolete">Уметни полигоне</translation>
    </message>
    <message>
        <source>Insert Lines</source>
        <translation type="obsolete">Уметни линије</translation>
    </message>
    <message>
        <source>Insert Bezier Curves</source>
        <translation type="obsolete">Уметни bezier криве</translation>
    </message>
    <message>
        <source>Insert Freehand Line</source>
        <translation type="obsolete">Уметни слободоручну линију</translation>
    </message>
    <message>
        <source>Rotate Item</source>
        <translation type="obsolete">Ротирај ставку</translation>
    </message>
    <message>
        <source>Zoom in or out</source>
        <translation type="obsolete">Увеличај или умањи</translation>
    </message>
    <message>
        <source>Edit Contents of Frame</source>
        <translation type="obsolete">Уређивање садржаја оквира</translation>
    </message>
    <message>
        <source>Edit the text with the Story Editor</source>
        <translation type="obsolete">Уређивање текста помоћу уређивача</translation>
    </message>
    <message>
        <source>Link Text Frames</source>
        <translation type="obsolete">Повежи текстуалне оквире</translation>
    </message>
    <message>
        <source>Unlink Text Frames</source>
        <translation type="obsolete">Прекини везу између текстуалних оквира</translation>
    </message>
    <message>
        <source>Do measurements</source>
        <translation type="obsolete">Одради премеравање</translation>
    </message>
    <message>
        <source>Draw various Shapes</source>
        <translation type="obsolete">Исцртај различите облике</translation>
    </message>
</context>
<context>
    <name>WerkToolBP</name>
    <message>
        <source>PDF Tools</source>
        <translation type="obsolete">PDF алати</translation>
    </message>
    <message>
        <source>Button</source>
        <translation type="obsolete">Дугме</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation type="obsolete">Поље за текст</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation type="obsolete">Кућица</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation type="obsolete">Комбо кутија</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation type="obsolete">Кутија листе</translation>
    </message>
    <message>
        <source>Insert PDF Fields</source>
        <translation type="obsolete">Уметни PDF поља</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="obsolete">Текст</translation>
    </message>
    <message>
        <source>Link</source>
        <translation type="obsolete">Веза</translation>
    </message>
    <message>
        <source>Insert PDF Annotations</source>
        <translation type="obsolete">Уметни PDF анотације</translation>
    </message>
</context>
<context>
    <name>ZAuswahl</name>
    <message>
        <source>Select Character:</source>
        <translation type="obsolete">Изаберите карактер:</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="obsolete">Уметн&amp;и</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="obsolete">Оч&amp;исти</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Затвори</translation>
    </message>
    <message>
        <source>Insert the characters at the cursor in the text</source>
        <translation type="obsolete">Уметни карактере на месту курсора у тексту</translation>
    </message>
    <message>
        <source>Delete the current selection(s).</source>
        <translation type="obsolete">Обриши текући избор(е).</translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing.</source>
        <translation type="obsolete">Затвори овај прозор и врати се на уређивање текста.</translation>
    </message>
</context>
<context>
    <name>gtFileDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation>Изаберите увозника</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Аутоматски</translation>
    </message>
    <message>
        <source>Get text only</source>
        <translation type="obsolete">Добави само текст</translation>
    </message>
    <message>
        <source>Import text without any formatting</source>
        <translation>Увези текст без било каквог форматирања</translation>
    </message>
    <message>
        <source>Importer:</source>
        <translation>Увозник:</translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation>Кодирање:</translation>
    </message>
    <message>
        <source>Import Text Only</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>gtImporterDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation>Изаберите увозника</translation>
    </message>
    <message>
        <source>Remember association</source>
        <translation>Запамти везе</translation>
    </message>
    <message>
        <source>Remember the file extension - importer association
and do not ask again to select an importer for
files of this type.</source>
        <translation type="obsolete">Запамти наставак фајла - везе увозника
и немој опет да ме питаш да изаберем увозника за
фајлове ове врсте.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">У реду</translation>
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
        <translation>Нови из шаблона</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Уклони</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Отвори</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Све</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Име</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Величина папира</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Боје</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Опис</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation>Употреба</translation>
    </message>
    <message>
        <source>Created with</source>
        <translation>Направљен са</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Датум</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Аутор</translation>
    </message>
    <message>
        <source>Downloading Templates</source>
        <translation>Преузимам шаблоне</translation>
    </message>
    <message>
        <source>Document templates can be found at http://www.scribus.net/ in the Downloads section.</source>
        <translation>Шаблони докумената могу се наћи на http://www.scribus.net/ у одељку Downloads.</translation>
    </message>
    <message>
        <source>Installing Templates</source>
        <translation>Инсталирам шаблоне</translation>
    </message>
    <message>
        <source>Extract the package to the template directory ~/.scribus/templates for the current user or PREFIX/share/scribus/templates for all users in the system.</source>
        <translation>Распакујте пакет у директоријум за шаблоне ~/.scribus/templates за 
текућег корисника или PREFIX/share/scribus/templates за све кориснике на систему.</translation>
    </message>
    <message>
        <source>Preparing a template</source>
        <translation>Спремам шаблон</translation>
    </message>
    <message>
        <source>Make sure images and fonts you use can be used freely. If fonts cannot be shared do not collect them when saving as a template.</source>
        <translation>Уверите се да се слике и фонтови које користите могу слободно користити. Ако фонтови не могу бити дељени немојте их скупљати када снимате као шаблон.</translation>
    </message>
    <message>
        <source>The template creator should also make sure that the Installing Templates section above applies to their templates as well. This means a user should be able to download a template package and be able to extract them to the template directory and start using them.</source>
        <translation>Онај који прави шаблоне би такође требало да се увери да се одељак „Инсталирање шаблона“ изнад може применити и на њихове шаблоне. Ово значи да би корисник требало да буде у могућности да преузме пакет шаблона и да би требало да их распакује у директоријум за шаблоне и да почне да их користи.</translation>
    </message>
    <message>
        <source>Removing a template</source>
        <translation>Уклањам шаблон</translation>
    </message>
    <message>
        <source>Removing a template from the New From Template dialog will only remove the entry from the template.xml, it will not delete the document files. A popup menu with remove is only shown if you have write access to the template.xml file.</source>
        <translation>Уклањање шаблона из прозора „Нови из шаблона“ ће само уклонити унос из фајла template.xml, неће обрисати фајлове документа. Искачући прозор за уклањање ће се појавити само ако имате права за уписивање у фајл template.xml.</translation>
    </message>
    <message>
        <source>Translating template.xml</source>
        <translation>Преводим template.xml</translation>
    </message>
    <message>
        <source>Copy an existing template.xml to a file called template.lang_COUNTRY.xml (use the same lang code that is present in the qm file for your language), for example template.fi.xml for Finnish language template.xml. The copy must be located in the same directory as the original template.xml so Scribus can load it.</source>
        <translation>Копирајте постојећи template.xml у фајл под називом template.lang_COUNTRY.xml (користите исти код језика који је присутан у qm фајлу за Ваш језик), на пример template.fi.xml за Фински језик. Копија се мора налазити у истом директоријуму као и оригинални template.xml да би Scribus могао да га учита.</translation>
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
        <translation type="unfinished">Уклони</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">У реду</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Поништи</translation>
    </message>
</context>
<context>
    <name>satdialog</name>
    <message>
        <source>Save as Template</source>
        <translation>Сними као шаблон</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Име</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Категорија</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Величина папира</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Боје</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Опис</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation>Употреба</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Аутор</translation>
    </message>
    <message>
        <source>Email</source>
        <translation>Е-пошта</translation>
    </message>
    <message>
        <source>More Details</source>
        <translation>Више детаља</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>У реду</translation>
    </message>
    <message>
        <source>Less Details</source>
        <translation>Мање детаља</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation>Letter</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation>Таблоид</translation>
    </message>
    <message>
        <source>landscape</source>
        <translation>пејзаж</translation>
    </message>
    <message>
        <source>portrait</source>
        <translation>портрет</translation>
    </message>
    <message>
        <source>custom</source>
        <translation>произвољно</translation>
    </message>
</context>
<context>
    <name>tfDia</name>
    <message>
        <source>Create filter</source>
        <translation>Направи филтер</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>Оч&amp;исти</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Обриши</translation>
    </message>
    <message>
        <source>Choose a previously saved filter</source>
        <translation>Изаберите претходно снимљен филтер</translation>
    </message>
    <message>
        <source>Give a name to this filter for saving</source>
        <translation>Дајте име за снимање овом филтеру</translation>
    </message>
    <message>
        <source>Give a name for saving</source>
        <translation>Дајте име за снимање</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;У реду</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Откажи</translation>
    </message>
</context>
<context>
    <name>tfFilter</name>
    <message>
        <source>Disable or enable this filter row</source>
        <translation>Искључи или укључи овај ред филтера</translation>
    </message>
    <message>
        <source>Remove this filter row</source>
        <translation>Уклони овај ред филтера</translation>
    </message>
    <message>
        <source>Add a new filter row</source>
        <translation>Додај нови ред филтера</translation>
    </message>
    <message>
        <source>to</source>
        <translation>до</translation>
    </message>
    <message>
        <source>and</source>
        <translation>и</translation>
    </message>
    <message>
        <source>remove match</source>
        <translation>уклони поклапање</translation>
    </message>
    <message>
        <source>do not remove match</source>
        <translation>немој да уклониш поклапање</translation>
    </message>
    <message>
        <source>words</source>
        <translation>речи</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Уклони</translation>
    </message>
    <message>
        <source>Replace</source>
        <translation>Замени</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Примени</translation>
    </message>
    <message>
        <source>Value at the left is a regular expression</source>
        <translation>Вредност са леве стране је регуларни израз</translation>
    </message>
    <message>
        <source>with</source>
        <translation>са</translation>
    </message>
    <message>
        <source>paragraph style</source>
        <translation>стил пасуса</translation>
    </message>
    <message>
        <source>all instances of</source>
        <translation>сви делови</translation>
    </message>
    <message>
        <source>all paragraphs</source>
        <translation>сви пасуси</translation>
    </message>
    <message>
        <source>paragraphs starting with</source>
        <translation>пасуси који почињу са</translation>
    </message>
    <message>
        <source>paragraphs with less than</source>
        <translation>пасуси са мање од</translation>
    </message>
    <message>
        <source>paragraphs with more than</source>
        <translation>пасуси са више од</translation>
    </message>
</context>
</TS>
