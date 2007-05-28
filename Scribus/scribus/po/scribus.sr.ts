<!DOCTYPE TS>
<TS>
  <context>
    <name></name>
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
      <source>setGradientFill(type, &quot;color1&quot;, shade1, &quot;color2&quot;, shade2, [&quot;name&quot;])

Sets the gradient fill of the object &quot;name&quot; to type. Color descriptions are
the same as for setFillColor() and setFillShade(). See the constants for
available types (FILL_&lt;type>).
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
      <source>setScaleImageToFrame(scaletoframe, proportional=None, name=&lt;selection>)

Sets the scale to frame on the selected or specified image frame to `scaletoframe'.
If `proportional' is specified, set fixed aspect ratio scaling to `proportional'.
Both `scaletoframe' and `proportional' are boolean.

May raise WrongFrameTypeError.
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
      <source>newStyleDialog() -> string

Shows 'Create new paragraph style' dialog. Function returns real
style name or None when user cancels the dialog.
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
      <source>Copy #%1 of </source>
      <translation type="unfinished" >Копија #%1 од</translation>
    </message>
  </context>
  <context>
    <name>About</name>
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
      <source>Official Translations and Translators:</source>
      <translation>Званични преводи и преводиоци:</translation>
    </message>
    <message>
      <source>Previous Translation Contributors:</source>
      <translation>Они који су претходно допринели превођењу:</translation>
    </message>
    <message>
      <source>About Scribus %1</source>
      <translation>О Скрибусу %1</translation>
    </message>
    <message>
      <source>Wiki</source>
      <translation>Вики</translation>
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
      <translation>Користим Гоустскрипт верзију %1</translation>
    </message>
    <message>
      <source>No Ghostscript version available</source>
      <translation>Гоустскрипт није доступан</translation>
    </message>
    <message>
      <source>&lt;b>Scribus Version %1&lt;/b>&lt;p>%2&lt;br/>%3 %4&lt;br/>%5&lt;/p></source>
      <translation>&lt;b>Скрибус верзија %1&lt;/b>&lt;p>%2&lt;br/>%3 %4&lt;br/>%5&lt;/p></translation>
    </message>
    <message>
      <source>Build ID:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Mac OS&amp;#174; X Aqua Port:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Windows&amp;#174; Port:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Tango Project Icons:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Updates</source>
      <translation>&amp;Updates</translation>
    </message>
    <message>
      <source>Check for &amp;Updates</source>
      <translation>&amp;Aжурирај</translation>
    </message>
    <message>
      <source>This panel shows the version, build date and compiled in library support in Scribus. The C-C-T-F equates to C=littlecms C=CUPS T=TIFF support F=Fontconfig support. Last Letter is the renderer C=cairo or A=libart Missing library support is indicated by a *. This also indicates the version of Ghostscript which Scribus has detected. The Windows version does not use fontconfig or CUPS libraries.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Check for updates to Scribus. No data from your machine will be transferred off it.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>OS/2&amp;#174;/eComStation&amp;#8482; Port:</source>
      <translation>OS/2&amp;#174;/eComStation&amp;#8482; Port:</translation>
    </message>
  </context>
  <context>
    <name>AboutPlugins</name>
    <message>
      <source>Filename:</source>
      <translation>Име фајла:</translation>
    </message>
    <message>
      <source>Version:</source>
      <translation>Верзија:</translation>
    </message>
    <message>
      <source>Enabled:</source>
      <translation>Укључен:</translation>
    </message>
    <message>
      <source>Release Date:</source>
      <translation>Датум објављивања:</translation>
    </message>
    <message>
      <source>Description:</source>
      <translation>Опис:</translation>
    </message>
    <message>
      <source>Author(s):</source>
      <translation>Аутор(и):</translation>
    </message>
    <message>
      <source>Copyright:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>License:</source>
      <translation>Лиценца:</translation>
    </message>
  </context>
  <context>
    <name>AboutPluginsBase</name>
    <message>
      <source>Scribus: About Plug-ins</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Close</source>
      <translation type="unfinished" >&amp;Затвори</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation type="unfinished" >Alt+C</translation>
    </message>
  </context>
  <context>
    <name>ActionManager</name>
    <message>
      <source>&amp;New</source>
      <translation type="unfinished" >&amp;Нови</translation>
    </message>
    <message>
      <source>&amp;Open...</source>
      <translation type="unfinished" >&amp;Отвори...</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation type="unfinished" >&amp;Затвори</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation type="unfinished" >&amp;Сними</translation>
    </message>
    <message>
      <source>Save &amp;As...</source>
      <translation type="unfinished" >Сними &amp;као...</translation>
    </message>
    <message>
      <source>Re&amp;vert to Saved</source>
      <translation type="unfinished" >Вр&amp;ати на снимљено</translation>
    </message>
    <message>
      <source>Collect for O&amp;utput...</source>
      <translation type="unfinished" >Сакупи за и&amp;злаз...</translation>
    </message>
    <message>
      <source>Get Text...</source>
      <translation type="unfinished" >Добави текст...</translation>
    </message>
    <message>
      <source>Append &amp;Text...</source>
      <translation type="unfinished" >Примени &amp;текст...</translation>
    </message>
    <message>
      <source>Get Image...</source>
      <translation>Добави слику...</translation>
    </message>
    <message>
      <source>Save &amp;Text...</source>
      <translation type="unfinished" >Сними &amp;текст...</translation>
    </message>
    <message>
      <source>Save as P&amp;DF...</source>
      <translation type="unfinished" >Сними као P&amp;DF...</translation>
    </message>
    <message>
      <source>Document &amp;Setup...</source>
      <translation type="unfinished" >&amp;Поставке документа...</translation>
    </message>
    <message>
      <source>&amp;Print...</source>
      <translation type="unfinished" >Ш&amp;тампај...</translation>
    </message>
    <message>
      <source>&amp;Quit</source>
      <translation type="unfinished" >&amp;Заврши</translation>
    </message>
    <message>
      <source>&amp;Undo</source>
      <translation type="unfinished" >&amp;Опозови</translation>
    </message>
    <message>
      <source>&amp;Redo</source>
      <translation type="unfinished" >Поно&amp;ви</translation>
    </message>
    <message>
      <source>&amp;Item Action Mode</source>
      <translation>&amp;Опозов по појединачним ставкама</translation>
    </message>
    <message>
      <source>Cu&amp;t</source>
      <translation type="unfinished" >&amp;Исеци</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation type="unfinished" >&amp;Копирај</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation type="unfinished" >&amp;Пренеси</translation>
    </message>
    <message>
      <source>Select &amp;All</source>
      <translation type="unfinished" >Изабери &amp;све</translation>
    </message>
    <message>
      <source>&amp;Deselect All</source>
      <translation>&amp;Откази све изабрано</translation>
    </message>
    <message>
      <source>&amp;Search/Replace...</source>
      <translation type="unfinished" >&amp;Тражи/Замени...</translation>
    </message>
    <message>
      <source>Edit Image...</source>
      <translation>Доради слику...</translation>
    </message>
    <message>
      <source>C&amp;olors...</source>
      <translation type="unfinished" >Б&amp;оје...</translation>
    </message>
    <message>
      <source>&amp;Master Pages...</source>
      <translation>&amp;Главне стране...</translation>
    </message>
    <message>
      <source>P&amp;references...</source>
      <translation type="unfinished" >П&amp;одешавања...</translation>
    </message>
    <message>
      <source>%1 pt</source>
      <translation>%1 тачака</translation>
    </message>
    <message>
      <source>&amp;Other...</source>
      <translation type="unfinished" >&amp;Остало...</translation>
    </message>
    <message>
      <source>&amp;Left</source>
      <translation type="unfinished" >&amp;Лево</translation>
    </message>
    <message>
      <source>&amp;Center</source>
      <translation>&amp;Централно</translation>
    </message>
    <message>
      <source>&amp;Right</source>
      <translation type="unfinished" >&amp;Десно</translation>
    </message>
    <message>
      <source>&amp;Block</source>
      <translation>У &amp;блок</translation>
    </message>
    <message>
      <source>&amp;Forced</source>
      <translation>&amp;Усиљено</translation>
    </message>
    <message>
      <source>&amp;%1 %</source>
      <translation>&amp;%1 %</translation>
    </message>
    <message>
      <source>&amp;Normal</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Underline</source>
      <translation type="unfinished" >&amp;Подвуци</translation>
    </message>
    <message>
      <source>Underline &amp;Words</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Strike Through</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;All Caps</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Small &amp;Caps</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Su&amp;perscript</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Su&amp;bscript</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>S&amp;hadow</source>
      <translation>С&amp;енка</translation>
    </message>
    <message>
      <source>&amp;Image Effects</source>
      <translation>&amp;Ефекти на слици</translation>
    </message>
    <message>
      <source>&amp;Tabulators...</source>
      <translation type="unfinished" >&amp;Табулатори...</translation>
    </message>
    <message>
      <source>D&amp;uplicate</source>
      <translation>Д&amp;уплирање</translation>
    </message>
    <message>
      <source>&amp;Multiple Duplicate</source>
      <translation type="unfinished" >&amp;Умножено дуплирање</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation type="unfinished" >&amp;Обриши</translation>
    </message>
    <message>
      <source>&amp;Group</source>
      <translation type="unfinished" >&amp;Група</translation>
    </message>
    <message>
      <source>&amp;Ungroup</source>
      <translation type="unfinished" >&amp;Растури групу</translation>
    </message>
    <message>
      <source>Is &amp;Locked</source>
      <translation>је &amp;закључано</translation>
    </message>
    <message>
      <source>Si&amp;ze is Locked</source>
      <translation>В&amp;еличина је закључана</translation>
    </message>
    <message>
      <source>Lower to &amp;Bottom</source>
      <translation>Спусти на &amp;дно</translation>
    </message>
    <message>
      <source>Raise to &amp;Top</source>
      <translation>Подигни на &amp;врх</translation>
    </message>
    <message>
      <source>&amp;Lower</source>
      <translation type="unfinished" >&amp;Спусти</translation>
    </message>
    <message>
      <source>&amp;Raise</source>
      <translation type="unfinished" >&amp;Подигни</translation>
    </message>
    <message>
      <source>Send to S&amp;crapbook</source>
      <translation type="unfinished" >Пошаљи у св&amp;еску</translation>
    </message>
    <message>
      <source>&amp;Attributes...</source>
      <translation>&amp;Својства...</translation>
    </message>
    <message>
      <source>I&amp;mage Visible</source>
      <translation type="unfinished" >С&amp;лика видљива</translation>
    </message>
    <message>
      <source>&amp;Update Image</source>
      <translation>&amp;Ажурирај слику</translation>
    </message>
    <message>
      <source>Adjust Frame to Image</source>
      <translation>Подеси оквир према слици</translation>
    </message>
    <message>
      <source>Extended Image Properties</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Low Resolution</source>
      <translation>&amp;Лоша резолуција</translation>
    </message>
    <message>
      <source>&amp;Normal Resolution</source>
      <translation>&amp;Нормална резолуција</translation>
    </message>
    <message>
      <source>&amp;Full Resolution</source>
      <translation>&amp;Висока резолуција</translation>
    </message>
    <message>
      <source>Is PDF &amp;Bookmark</source>
      <translation type="unfinished" >Је PDF &amp;маркер</translation>
    </message>
    <message>
      <source>Is PDF A&amp;nnotation</source>
      <translation type="unfinished" >Је PDF ан&amp;отација</translation>
    </message>
    <message>
      <source>Annotation P&amp;roperties</source>
      <translation type="unfinished" >С&amp;војства анотације</translation>
    </message>
    <message>
      <source>Field P&amp;roperties</source>
      <translation type="unfinished" >С&amp;војства поља</translation>
    </message>
    <message>
      <source>&amp;Edit Shape...</source>
      <translation type="unfinished" >&amp;Уређивање облика...</translation>
    </message>
    <message>
      <source>&amp;Attach Text to Path</source>
      <translation type="unfinished" >&amp;Прикачи текст уз путању</translation>
    </message>
    <message>
      <source>&amp;Detach Text from Path</source>
      <translation type="unfinished" >&amp;Откачи текст од путање</translation>
    </message>
    <message>
      <source>&amp;Combine Polygons</source>
      <translation type="unfinished" >&amp;Комбинуј полигоне</translation>
    </message>
    <message>
      <source>Split &amp;Polygons</source>
      <translation type="unfinished" >Раздвоји &amp;полигоне</translation>
    </message>
    <message>
      <source>&amp;Bezier Curve</source>
      <translation type="unfinished" >&amp;Bezier крива</translation>
    </message>
    <message>
      <source>&amp;Image Frame</source>
      <translation>&amp;Оквир слике</translation>
    </message>
    <message>
      <source>&amp;Polygon</source>
      <translation>&amp;Полигон</translation>
    </message>
    <message>
      <source>&amp;Text Frame</source>
      <translation type="unfinished" >&amp;Текстуални оквир</translation>
    </message>
    <message>
      <source>&amp;Glyph...</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Sample Text</source>
      <translation>Пробни текст</translation>
    </message>
    <message>
      <source>&amp;Insert...</source>
      <translation type="unfinished" >Уметн&amp;и...</translation>
    </message>
    <message>
      <source>Im&amp;port...</source>
      <translation>Ув&amp;ези</translation>
    </message>
    <message>
      <source>&amp;Delete...</source>
      <translation type="unfinished" >&amp;Обриши...</translation>
    </message>
    <message>
      <source>&amp;Copy...</source>
      <translation>&amp;Копирај...</translation>
    </message>
    <message>
      <source>&amp;Move...</source>
      <translation type="unfinished" >&amp;Помери...</translation>
    </message>
    <message>
      <source>&amp;Apply Master Page...</source>
      <translation>&amp;Примени главну страну...</translation>
    </message>
    <message>
      <source>Manage &amp;Guides...</source>
      <translation type="unfinished" >Управљање &amp;водиљама...</translation>
    </message>
    <message>
      <source>Manage Page Properties...</source>
      <translation>Управљање својствима стране...</translation>
    </message>
    <message>
      <source>&amp;50%</source>
      <translation type="unfinished" >&amp;50%</translation>
    </message>
    <message>
      <source>&amp;75%</source>
      <translation type="unfinished" >&amp;75%</translation>
    </message>
    <message>
      <source>&amp;100%</source>
      <translation type="unfinished" >&amp;100%</translation>
    </message>
    <message>
      <source>&amp;200%</source>
      <translation type="unfinished" >&amp;200%</translation>
    </message>
    <message>
      <source>&amp;Thumbnails</source>
      <translation type="unfinished" >&amp;Сличице</translation>
    </message>
    <message>
      <source>Show &amp;Margins</source>
      <translation type="unfinished" >Прикажи &amp;маргине</translation>
    </message>
    <message>
      <source>Show &amp;Frames</source>
      <translation type="unfinished" >Прикажи &amp;оквире</translation>
    </message>
    <message>
      <source>Show &amp;Images</source>
      <translation type="unfinished" >Прикажи &amp;слике</translation>
    </message>
    <message>
      <source>Show &amp;Grid</source>
      <translation type="unfinished" >Прикажи &amp;мрежу</translation>
    </message>
    <message>
      <source>Show G&amp;uides</source>
      <translation type="unfinished" >Прикажи &amp;водиље</translation>
    </message>
    <message>
      <source>Show &amp;Baseline Grid</source>
      <translation type="unfinished" >Прикажи мрежу &amp;основне линије</translation>
    </message>
    <message>
      <source>Show &amp;Text Chain</source>
      <translation>Прикажи &amp;везе текстуалних оквира</translation>
    </message>
    <message>
      <source>Show Control Characters</source>
      <translation>Прикажи контролне знакове</translation>
    </message>
    <message>
      <source>Rulers relative to Page</source>
      <translation>Лењири се односе на страну</translation>
    </message>
    <message>
      <source>Sn&amp;ap to Grid</source>
      <translation type="unfinished" >Пре&amp;баци на мрежу</translation>
    </message>
    <message>
      <source>Sna&amp;p to Guides</source>
      <translation type="unfinished" >Преб&amp;аци на водиље</translation>
    </message>
    <message>
      <source>&amp;Properties</source>
      <translation type="unfinished" >&amp;Својства</translation>
    </message>
    <message>
      <source>&amp;Scrapbook</source>
      <translation type="unfinished" >&amp;Албум</translation>
    </message>
    <message>
      <source>&amp;Layers</source>
      <translation type="unfinished" >&amp;Слојеви</translation>
    </message>
    <message>
      <source>&amp;Arrange Pages</source>
      <translation>&amp;Распореди стране</translation>
    </message>
    <message>
      <source>&amp;Bookmarks</source>
      <translation type="unfinished" >&amp;Маркери</translation>
    </message>
    <message>
      <source>&amp;Measurements</source>
      <translation>&amp;Мерења</translation>
    </message>
    <message>
      <source>Action &amp;History</source>
      <translation>Историја &amp;промена</translation>
    </message>
    <message>
      <source>Preflight &amp;Verifier</source>
      <translation>Провера &amp;могућих проблема</translation>
    </message>
    <message>
      <source>&amp;Align and Distribute</source>
      <translation>&amp;Поравнај и распореди</translation>
    </message>
    <message>
      <source>&amp;Tools</source>
      <translation type="unfinished" >&amp;Алати</translation>
    </message>
    <message>
      <source>P&amp;DF Tools</source>
      <translation type="unfinished" >P&amp;DF алати</translation>
    </message>
    <message>
      <source>Select Item</source>
      <translation>Изабери ставку</translation>
    </message>
    <message>
      <source>T&amp;able</source>
      <translation>Т&amp;абела</translation>
    </message>
    <message>
      <source>&amp;Shape</source>
      <translation type="unfinished" >&amp;Облик</translation>
    </message>
    <message>
      <source>&amp;Line</source>
      <translation type="unfinished" >&amp;Линија</translation>
    </message>
    <message>
      <source>&amp;Freehand Line</source>
      <translation>Линија &amp;слободном руком</translation>
    </message>
    <message>
      <source>Rotate Item</source>
      <translation type="unfinished" >Ротирај ставку</translation>
    </message>
    <message>
      <source>Zoom in or out</source>
      <translation type="unfinished" >Увеличај или умањи</translation>
    </message>
    <message>
      <source>Zoom in</source>
      <translation>Увеличај</translation>
    </message>
    <message>
      <source>Zoom out</source>
      <translation>Умањи</translation>
    </message>
    <message>
      <source>Edit Contents of Frame</source>
      <translation type="unfinished" >Уређивање садржаја оквира</translation>
    </message>
    <message>
      <source>Edit Text...</source>
      <translation type="unfinished" >Уреди текст...</translation>
    </message>
    <message>
      <source>Link Text Frames</source>
      <translation type="unfinished" >Повежи текстуалне оквире</translation>
    </message>
    <message>
      <source>Unlink Text Frames</source>
      <translation type="unfinished" >Прекини везу између текстуалних оквира</translation>
    </message>
    <message>
      <source>&amp;Eye Dropper</source>
      <translation>&amp;Пипета</translation>
    </message>
    <message>
      <source>Copy Item Properties</source>
      <translation>Копирај својства ставке</translation>
    </message>
    <message>
      <source>Edit the text with the Story Editor</source>
      <translation type="unfinished" >Уређивање текста помоћу уређивача</translation>
    </message>
    <message>
      <source>Insert Text Frame</source>
      <translation type="unfinished" >Уметни текстуални оквир</translation>
    </message>
    <message>
      <source>Insert Image Frame</source>
      <translation>Уметни оквир за слику</translation>
    </message>
    <message>
      <source>Insert Table</source>
      <translation type="unfinished" >Убаци табелу</translation>
    </message>
    <message>
      <source>Insert Shape</source>
      <translation>Убаци облик</translation>
    </message>
    <message>
      <source>Insert Polygon</source>
      <translation>Убаци полигон</translation>
    </message>
    <message>
      <source>Insert Line</source>
      <translation>Убаци линију</translation>
    </message>
    <message>
      <source>Insert Bezier Curve</source>
      <translation>Убаци Безијерову криву</translation>
    </message>
    <message>
      <source>Insert Freehand Line</source>
      <translation type="unfinished" >Уметни слободоручну линију</translation>
    </message>
    <message>
      <source>&amp;Manage Pictures</source>
      <translation type="unfinished" >&amp;Управљање сликама</translation>
    </message>
    <message>
      <source>&amp;Hyphenate Text</source>
      <translation>&amp;Растави на слогове</translation>
    </message>
    <message>
      <source>Dehyphenate Text</source>
      <translation>Састави цртицама растављене речи</translation>
    </message>
    <message>
      <source>&amp;Generate Table Of Contents</source>
      <translation>&amp;Направи садржај</translation>
    </message>
    <message>
      <source>&amp;About Scribus</source>
      <translation type="unfinished" >&amp;О Scribus-у</translation>
    </message>
    <message>
      <source>About &amp;Qt</source>
      <translation type="unfinished" >О &amp;Qt-у</translation>
    </message>
    <message>
      <source>Toolti&amp;ps</source>
      <translation type="unfinished" >Облач&amp;ићи</translation>
    </message>
    <message>
      <source>Scribus &amp;Manual...</source>
      <translation type="unfinished" >Scribus &amp;Приручник...</translation>
    </message>
    <message>
      <source>Smart &amp;Hyphen</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Non Breaking Dash</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Non Breaking &amp;Space</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Page &amp;Number</source>
      <translation>&amp;Број стране</translation>
    </message>
    <message>
      <source>New Line</source>
      <translation>Нови ред</translation>
    </message>
    <message>
      <source>Frame Break</source>
      <translation>Прекид оквира</translation>
    </message>
    <message>
      <source>Column Break</source>
      <translation>Прекид колоне</translation>
    </message>
    <message>
      <source>Copyright</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Registered Trademark</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Trademark</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Bullet</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Em Dash</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>En Dash</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Figure Dash</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Quotation Dash</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Toggle Palettes</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Toggle Guides</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Print Previe&amp;w</source>
      <translation type="unfinished" >Прегл&amp;ед за штампање</translation>
    </message>
    <message>
      <source>&amp;JavaScripts...</source>
      <translation>&amp;Јава Скрипте...</translation>
    </message>
    <message>
      <source>Convert to Master Page...</source>
      <translation>Преведи у главну страну...</translation>
    </message>
    <message>
      <source>&amp;Cascade</source>
      <translation type="unfinished" >&amp;Наслажи</translation>
    </message>
    <message>
      <source>&amp;Tile</source>
      <translation type="unfinished" >Поп&amp;лочај</translation>
    </message>
    <message>
      <source>&amp;About Plug-ins</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>More Info...</source>
      <translation>Више података...</translation>
    </message>
    <message>
      <source>&amp;Printing Enabled</source>
      <translation>&amp;Штампање могуће</translation>
    </message>
    <message>
      <source>&amp;Flip Horizontally</source>
      <translation>&amp;Изврни водоравно</translation>
    </message>
    <message>
      <source>&amp;Flip Vertically</source>
      <translation>&amp;Изврни усправно</translation>
    </message>
    <message>
      <source>Show Rulers</source>
      <translation>Прикажи лењире</translation>
    </message>
    <message>
      <source>&amp;Outline</source>
      <comment>



Document Outline Palette</comment>
      <translation type="unfinished" >&amp;Контура</translation>
    </message>
    <message>
      <source>Solidus</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Middle Dot</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>En Space</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Em Space</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Thin Space</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Thick Space</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Mid Space</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Hair Space</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Insert Smart Hyphen</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Insert Non Breaking Dash</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Insert Non Breaking Space</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Insert Page Number</source>
      <translation type="unfinished" >Уметни број странице</translation>
    </message>
    <message>
      <source>ff</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>fi</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>fl</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>ffi</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>ffl</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>ft</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>st</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>S&amp;tyles...</source>
      <translation>С&amp;тилови...</translation>
    </message>
    <message>
      <source>&amp;Outline</source>
      <comment>



type effect</comment>
      <translation type="unfinished" >&amp;Контура</translation>
    </message>
    <message>
      <source>&amp;Outlines</source>
      <comment>Convert to oulines</comment>
      <translation>&amp;Контурне линије</translation>
    </message>
    <message>
      <source>Paste (&amp;Absolute)</source>
      <translation>Налепи (&amp;Апсолутно)</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation type="unfinished" >Оч&amp;исти</translation>
    </message>
    <message>
      <source>Insert PDF Push Button</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Insert PDF Text Field</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Insert PDF Check Box</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Insert PDF Combo Box</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Insert PDF List Box</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Insert Text Annotation</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Insert Link Annotation</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Save as &amp;EPS...</source>
      <translation>Сними као &amp;EPS...</translation>
    </message>
    <message>
      <source>Show Text Frame Columns</source>
      <translation>Приказуј колоне текстуалног оквира</translation>
    </message>
    <message>
      <source>&amp;Frame...</source>
      <translation>&amp;Оквир...</translation>
    </message>
    <message>
      <source>Preview Mode</source>
      <translation>Преглед стране</translation>
    </message>
    <message>
      <source>Show Layer Indicators</source>
      <translation>Прикажи показатеље слојева</translation>
    </message>
    <message>
      <source>Patterns...</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Send to Patterns</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Sticky Tools</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Fit to Height</source>
      <translation>&amp;Рашири према висини</translation>
    </message>
    <message>
      <source>Fit to Width</source>
      <translation>Рашири према ширини</translation>
    </message>
    <message>
      <source>Show Bleeds</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Zero Width Space</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Zero Width NB Space</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Apostrophe</source>
      <comment>Unicode 0x0027</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Straight Double</source>
      <comment>Unicode 0x0022</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Single Left</source>
      <comment>Unicode 0x2018</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Single Right</source>
      <comment>Unicode 0x2019</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Double Left</source>
      <comment>Unicode 0x201C</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Double Right</source>
      <comment>Unicode 0x201D</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Single Reversed</source>
      <comment>Unicode 0x201B</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Double Reversed</source>
      <comment>Unicode 0x201F</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Single Left Guillemet</source>
      <comment>Unicode 0x2039</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Single Right Guillemet</source>
      <comment>Unicode 0x203A</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Double Left Guillemet</source>
      <comment>Unicode 0x00AB</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Double Right Guillemet</source>
      <comment>Unicode 0x00BB</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Low Single Comma</source>
      <comment>Unicode 0x201A</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Low Double Comma</source>
      <comment>Unicode 0x201E</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>CJK Single Left</source>
      <comment>Unicode 0x300C</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>CJK Single Right</source>
      <comment>Unicode 0x300D</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>CJK Double Left</source>
      <comment>Unicode 0x300E</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>CJK Double Right</source>
      <comment>Unicode 0x300F</comment>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>AlignDistributeBase</name>
    <message>
      <source>Align and Distribute</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Align</source>
      <translation type="unfinished" >Поравнај</translation>
    </message>
    <message>
      <source>&amp;Selected Guide:</source>
      <translation>&amp;Изабрана водиља:</translation>
    </message>
    <message>
      <source>&amp;Relative To:</source>
      <translation>&amp;У односу на:</translation>
    </message>
    <message>
      <source>...</source>
      <translation>...</translation>
    </message>
    <message>
      <source>Distribute</source>
      <translation>Распореди</translation>
    </message>
    <message>
      <source>&amp;Distance:</source>
      <translation>&amp;Удаљеност:</translation>
    </message>
  </context>
  <context>
    <name>AlignDistributePalette</name>
    <message>
      <source>Align and Distribute</source>
      <translation>Поравнај и распореди</translation>
    </message>
    <message>
      <source>Align</source>
      <translation type="unfinished" >Поравнај</translation>
    </message>
    <message>
      <source>&amp;Relative to:</source>
      <translation>&amp;У односу на:</translation>
    </message>
    <message>
      <source>First Selected</source>
      <translation>Први изабрани</translation>
    </message>
    <message>
      <source>Last Selected</source>
      <translation>Последњи изабрани</translation>
    </message>
    <message>
      <source>Page</source>
      <translation>Страницу</translation>
    </message>
    <message>
      <source>Margins</source>
      <translation>Маргине</translation>
    </message>
    <message>
      <source>Guide</source>
      <translation>Водиље</translation>
    </message>
    <message>
      <source>Selection</source>
      <translation>Избор</translation>
    </message>
    <message>
      <source>Align bottoms</source>
      <translation>Поравнај дна</translation>
    </message>
    <message>
      <source>Align right sides</source>
      <translation>Поравнај десне стране</translation>
    </message>
    <message>
      <source>Center on vertical axis</source>
      <translation>Центрирај по усправној оси</translation>
    </message>
    <message>
      <source>Align left sides</source>
      <translation>Поравнај леве стране</translation>
    </message>
    <message>
      <source>Center on horizontal axis</source>
      <translation>Центрирај по водоравној оси</translation>
    </message>
    <message>
      <source>Align tops</source>
      <translation>Поравнај врхове</translation>
    </message>
    <message>
      <source>&amp;Selected Guide:</source>
      <translation>&amp;Изабрана водиља:</translation>
    </message>
    <message>
      <source>Distribute right sides equidistantly</source>
      <translation>Распореди десне стране на једнаку удаљеност</translation>
    </message>
    <message>
      <source>Distribute bottoms equidistantly</source>
      <translation>Распореди дна на једнаку удаљеност</translation>
    </message>
    <message>
      <source>Distribute centers equidistantly horizontally</source>
      <translation>Распореди центре на једнаку удаљеност водоравно</translation>
    </message>
    <message>
      <source>Distribute left sides equidistantly</source>
      <translation>Распореди леве стране на једнаку удаљеност</translation>
    </message>
    <message>
      <source>Distribute centers equidistantly vertically</source>
      <translation>Распореди центре на једнаку удаљеност усправно</translation>
    </message>
    <message>
      <source>Distribute tops equidistantly</source>
      <translation>Распореди врхове на једнаку удаљеност</translation>
    </message>
    <message>
      <source>&amp;Distance:</source>
      <translation>&amp;Удаљеност:</translation>
    </message>
    <message>
      <source>Distribute the items with the distance specified</source>
      <translation>Распоред ставки са назначеним растојањем</translation>
    </message>
    <message>
      <source>None Selected</source>
      <translation>Нема избора</translation>
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
      <translation type="unfinished" />
    </message>
    <message>
      <source>Align left sides of items to right side of anchor</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Align tops of items to bottom of anchor</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Align bottoms of items to top of anchor</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Make horizontal gaps between items equal</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Make horizontal gaps between items equal to the value specified</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Make vertical gaps between items equal</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Make vertical gaps between items equal to the value specified</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Make horizontal gaps between items and sides of page equal</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Make vertical gaps between items and the top and bottom of page margins equal</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Make horizontal gaps between items and sides of page margins equal</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Make vertical gaps between items and the top and bottom of page equal</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Distribute</source>
      <translation>Распореди</translation>
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
      <translation>JavaScript</translation>
    </message>
    <message>
      <source>None</source>
      <comment>



highlight</comment>
      <translation type="unfinished" >Ниједан</translation>
    </message>
    <message>
      <source>None</source>
      <comment>



action</comment>
      <translation type="unfinished" >Ниједан</translation>
    </message>
    <message>
      <source>Tooltip:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Do Not Export Value</source>
      <translation>Не извози вредност</translation>
    </message>
    <message>
      <source>Images (*.tif *.png *.jpg *.xpm);;PostScript (*.eps *.epsi);;All Files (*)</source>
      <translation>Слике (*.tif *.png *.jpg *.xpm);;Пост скрипт (*.eps *.epsi);;Сви фајлови (*)</translation>
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
  </context>
  <context>
    <name>ApplyMasterPageDialog</name>
    <message>
      <source>Apply Master Page</source>
      <translation>Примени главну страну</translation>
    </message>
    <message>
      <source>&amp;Master Page:</source>
      <translation>&amp;Главна страна:</translation>
    </message>
    <message>
      <source>Apply To</source>
      <translation>Примени на</translation>
    </message>
    <message>
      <source>Current &amp;page</source>
      <translation>Текућу &amp;страну</translation>
    </message>
    <message>
      <source>Alt+P</source>
      <translation>Alt+P</translation>
    </message>
    <message>
      <source>&amp;Even pages</source>
      <translation>&amp;Парне стране</translation>
    </message>
    <message>
      <source>Alt+E</source>
      <translation>Alt+E</translation>
    </message>
    <message>
      <source>O&amp;dd pages</source>
      <translation>&amp;Непарне стране</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>&amp;All pages</source>
      <translation type="unfinished" >&amp;Све странице</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Within range</source>
      <translation>&amp;У опсегу</translation>
    </message>
    <message>
      <source>Alt+W</source>
      <translation>Alt+W</translation>
    </message>
    <message>
      <source>to</source>
      <translation type="unfinished" >до</translation>
    </message>
    <message>
      <source>Alt+O</source>
      <translation type="unfinished" >Alt+O</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation type="unfinished" >Alt+C</translation>
    </message>
    <message>
      <source>Apply the selected master page to even, odd or all pages within the following range</source>
      <translation>Примени изабрану главну страну на парне, непарне или све стране у опсегу</translation>
    </message>
  </context>
  <context>
    <name>ArrowChooser</name>
    <message>
      <source>None</source>
      <translation type="unfinished" >Ниједан</translation>
    </message>
  </context>
  <context>
    <name>Barcode</name>
    <message>
      <source>&amp;Barcode Generator...</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scribus frontend for Pure Postscript Barcode Writer</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>BarcodeGenerator</name>
    <message>
      <source>Error opening file: %1</source>
      <translation>Грешка при отварању фајла: %1</translation>
    </message>
    <message>
      <source>12 or 13 digits</source>
      <translation>12 или 13 цифара</translation>
    </message>
    <message>
      <source>8 digits</source>
      <translation>8 цифара</translation>
    </message>
    <message>
      <source>11 or 12 digits</source>
      <translation>11 или 12 цифара</translation>
    </message>
    <message>
      <source>7 or 8 digits</source>
      <translation>7 или 8 цифара</translation>
    </message>
    <message>
      <source>5 digits</source>
      <translation>5 цифара</translation>
    </message>
    <message>
      <source>2 digits</source>
      <translation>2 цифре</translation>
    </message>
    <message>
      <source>Variable number of characters, digits and any of the symbols -. *$/+%.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Variable number of ASCII characters and special function symbols, starting with the appropriate start character for the initial character set. UCC/EAN-128s must have a mandatory FNC 1 symbol immediately following the start character.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Variable number of digits and any of the symbols -$:/.+ABCD.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Variable number of digits. An ITF-14 is 14 characters and does not have a check digit</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Variable number of digits</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Variable number of digits and capital letters</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Variable number of hexadecimal characters</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Barcode incomplete</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>12 or 13 digits with dashes. The legacy ISBN-10 format accepts 9 or 10 digits with dashes, but this standard was depreciated for public use after 1st January 2007. (Note: To convert an old ISBN-10 to a new ISBN-13, prefix 978- to the first 9 digits, e.g. 1-56592-479-7 -> 978-1-56592-479. The final check-digit will be calculated automatically.)</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>BarcodeGeneratorBase</name>
    <message>
      <source>Barcode Creator</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Barcode</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Type:</source>
      <translation type="unfinished" >&amp;Врста:</translation>
    </message>
    <message>
      <source>Select one of the available barcode type here</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>The numeric representation of the code itself. See the help message below</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Reset the barcode samples</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Include text in barcode</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Alt+I</source>
      <translation>Alt+I</translation>
    </message>
    <message>
      <source>If checked, there will be numbers in the barcode too</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Guard whitespace</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Alt+G</source>
      <translation>Alt+G</translation>
    </message>
    <message>
      <source>Draw arrows to be sure of space next the code</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Colors</source>
      <translation type="unfinished" >Боје</translation>
    </message>
    <message>
      <source>&amp;Background</source>
      <translation>&amp;Позадина</translation>
    </message>
    <message>
      <source>Alt+B</source>
      <translation>Alt+B</translation>
    </message>
    <message>
      <source>Background color - under the code lines</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Lines</source>
      <translation>&amp;Линије</translation>
    </message>
    <message>
      <source>Alt+L</source>
      <translation>Alt+L</translation>
    </message>
    <message>
      <source>Color of the lines in barcode</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Text</source>
      <translation type="unfinished" >&amp;Текст</translation>
    </message>
    <message>
      <source>Alt+T</source>
      <translation>Alt+T</translation>
    </message>
    <message>
      <source>Color of the text and numbers</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Hints and help is shown here</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Preview of the result. 72dpi sample.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Co&amp;de:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>I&amp;nclude checksum</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Alt+N</source>
      <translation>Alt+N</translation>
    </message>
    <message>
      <source>Generate and include a checksum in barcode</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Incl&amp;ude checksum digit</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Alt+U</source>
      <translation>Alt+U</translation>
    </message>
    <message>
      <source>Include the checksum digit in the barcode text</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>Biblio</name>
    <message>
      <source>Scrapbook</source>
      <translation>Албум</translation>
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
      <translation>Име &quot;%1&quot; није јединствено. 
Изабери друго.</translation>
    </message>
    <message>
      <source>Choose a Scrapbook Directory</source>
      <translation>Изабери директоријум Албума</translation>
    </message>
    <message>
      <source>Choose a Directory</source>
      <translation type="unfinished" >Изаберите директоријум</translation>
    </message>
    <message>
      <source>Scrapbook (*.scs)</source>
      <translation>Албум (*.scs)</translation>
    </message>
    <message>
      <source>Choose a scrapbook file to import</source>
      <translation>Изабери фајл Албума за ивоз</translation>
    </message>
    <message>
      <source>Create a new scrapbook page</source>
      <translation>Направи нову страну Албума</translation>
    </message>
    <message>
      <source>Load an existing scrapbook</source>
      <translation>Учитај постојећи Албум</translation>
    </message>
    <message>
      <source>Save the selected scrapbook</source>
      <translation>Сними изабрани Албум</translation>
    </message>
    <message>
      <source>Import an scrapbook file from Scribus &lt;=1.3.2</source>
      <translation>Увези Албум из Скрибуса &lt;=1.3.2</translation>
    </message>
    <message>
      <source>Close the selected scrapbook</source>
      <translation>Затвори изабрани Албум</translation>
    </message>
    <message>
      <source>Copy To:</source>
      <translation>Копирај у:</translation>
    </message>
    <message>
      <source>Move To:</source>
      <translation>Премести у:</translation>
    </message>
    <message>
      <source>Main</source>
      <translation>Главни</translation>
    </message>
    <message>
      <source>Copied Items</source>
      <translation>Копиране ставке</translation>
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
      <source>&amp;Activate Color Management</source>
      <translation>&amp;Активирај управљање бојама</translation>
    </message>
    <message>
      <source>System Profiles</source>
      <translation>Системски профили</translation>
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
      <source>Enable 'soft proofing' of how your document colors will print,
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
      <translation>&amp;RGB слике:</translation>
    </message>
    <message>
      <source>&amp;CMYK Pictures:</source>
      <translation>&amp;CMYK слике:</translation>
    </message>
    <message>
      <source>Default color profile for imported CMYK images</source>
      <translation>Подразумевани профил боја за ивезене CMYK слике</translation>
    </message>
    <message>
      <source>Default color profile for imported RGB images</source>
      <translation>Подразумевани профил боја за ивезене RGB слике</translation>
    </message>
    <message>
      <source>&amp;RGB Solid Colors:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;CMYK Solid Colors:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Pictures:</source>
      <translation>Слике:</translation>
    </message>
    <message>
      <source>Sol&amp;id Colors:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Convert all colors to printer space</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Default color profile for solid RGB colors on the page</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Default color profile for solid CMYK colors on the page</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Default rendering intent for solid colors. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Default rendering intent for images. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Simulate a full color managed environment :
all colors, rgb or cmyk, are converted to printer color space.</source>
      <translation type="unfinished" />
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
      <source>Is Spot Color</source>
      <translation>је спот боја</translation>
    </message>
    <message>
      <source>Is Registration Color</source>
      <translation>је регистрациона боја</translation>
    </message>
    <message>
      <source>You cannot create a color named &quot;%1&quot;.
It is a reserved name for transparent color</source>
      <translation>Не можеш да направиш боју под називом &quot;%1&quot;. 
Назив је режервисан за провидну боју</translation>
    </message>
    <message>
      <source>Choosing this will enable printing this on all plates. Registration colors are used for printer marks such as crop marks, registration marks and the like. These are not typically used in the layout itself.</source>
      <translation>Избор ће одобрити штампање овога на свим плочама. Регистрационе боје се користе за штампарске ознаке као што су: ознаке за сечење, регистрационе ознаке и сл. Обично се не користе при креирању садржаја самих страна.</translation>
    </message>
    <message>
      <source>If color management is enabled, a triangle warning indicator is a warning the the color maybe outside of the color gamut of the current printer profile selected. What this means is the color may not print exactly as indicated on screen. More hints about gamut warnings are in the online help under Color Management.</source>
      <translation>Ако је управљање бојама укључено, упозорење у виду троугла је упзорење да је боја можда изван гамута тренутно изабраног колор профила штампе. То значи да боја можда неће бити одштампана како је приказана на екрану. Више савета о упозорењима о гамуту је доступно у помоћи под Управљање бојама, на мрежи.</translation>
    </message>
    <message>
      <source>The name of the color already exists,
please choose another one.</source>
      <translation>Име боје већ постоји, изабери друго име.</translation>
    </message>
    <message>
      <source>Choosing this will make this color a spot color, thus creating another spot when creating plates or separations. This is used most often when a logo or other color needs exact representation or cannot be replicated with CMYK inks. Metallic and fluorescent inks are good examples which cannot be easily replicated with CMYK inks.</source>
      <translation>Избор ће направити ову боју спот бојом, стога, направиће још једну плочи или сепарацију. Најчешћа примена је када лого или нека боја захтевају потпуно тачну репродукцију или се жељена боја не може репродуковати коришћењем CMYK процесних боја. Металик и флуоресцентне боје су добри примери шта четворобојна CMYK штампа не може да пружи.</translation>
    </message>
  </context>
  <context>
    <name>CStylePBase</name>
    <message>
      <source>Form1</source>
      <translation>Формулар1</translation>
    </message>
    <message>
      <source>Based On:</source>
      <translation>На основу:</translation>
    </message>
    <message>
      <source>Basic Formatting</source>
      <translation>Основно уобличавање</translation>
    </message>
    <message>
      <source>Advanced Formatting</source>
      <translation>Напредно уобличавање</translation>
    </message>
    <message>
      <source>Colors</source>
      <translation type="unfinished" >Боје</translation>
    </message>
  </context>
  <context>
    <name>CWDialog</name>
    <message>
      <source>Merging colors</source>
      <translation>Спајам боје</translation>
    </message>
    <message>
      <source>Error: </source>
      <translation>Грешка:</translation>
    </message>
    <message>
      <source>Color %1 exists already!</source>
      <translation>Боја %1 већ постоји!</translation>
    </message>
    <message>
      <source>Color %1 appended.</source>
      <translation>Боја %1 придодата.</translation>
    </message>
    <message>
      <source>Now opening the color manager.</source>
      <translation>Сада отварам управљач бојама.</translation>
    </message>
    <message>
      <source>Color Merging</source>
      <translation>Спајање боја</translation>
    </message>
    <message>
      <source>Unable to find the requested color. You have probably selected black, gray or white. There is no way to process this color.</source>
      <translation>Немогуће је наћи жељену боју. Вероватно је изабрана црна, сива или бела. Нема начина да се направи ова боја.</translation>
    </message>
  </context>
  <context>
    <name>CWDialogBase</name>
    <message>
      <source>Color Wheel</source>
      <translation>Точак боја</translation>
    </message>
    <message>
      <source>Click the wheel to get the base color. Its color model depends on the chosen tab.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>CMYK</source>
      <translation type="unfinished" >CMYK</translation>
    </message>
    <message>
      <source>C:</source>
      <translation type="unfinished" >C:</translation>
    </message>
    <message>
      <source>M:</source>
      <translation type="unfinished" >M:</translation>
    </message>
    <message>
      <source>Y:</source>
      <translation type="unfinished" >Y:</translation>
    </message>
    <message>
      <source>K:</source>
      <translation type="unfinished" >K:</translation>
    </message>
    <message>
      <source>RGB:</source>
      <translation>RGB:</translation>
    </message>
    <message>
      <source>RGB</source>
      <translation type="unfinished" >RGB</translation>
    </message>
    <message>
      <source>R:</source>
      <translation type="unfinished" >R:</translation>
    </message>
    <message>
      <source>G:</source>
      <translation type="unfinished" >G:</translation>
    </message>
    <message>
      <source>B:</source>
      <translation type="unfinished" >B:</translation>
    </message>
    <message>
      <source>CMYK:</source>
      <translation>CMYK:</translation>
    </message>
    <message>
      <source>Document</source>
      <translation type="unfinished" >Документ</translation>
    </message>
    <message>
      <source>Select one of the methods to create a color scheme. Refer to documentation for more information.</source>
      <translation>Изабери један од наћина за прављење шеме боја. Обрати се документацији за више информација.</translation>
    </message>
    <message>
      <source>Angle:</source>
      <translation type="unfinished" >Угао:</translation>
    </message>
    <message>
      <source>Difference between the selected value and the counted ones. Refer to documentation for more information.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Preview:</source>
      <translation>Преглед:</translation>
    </message>
    <message>
      <source>Vision Defect Type:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Sample color scheme.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Colors of your chosen color scheme.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Merge</source>
      <translation>&amp;Сједини</translation>
    </message>
    <message>
      <source>Alt+M</source>
      <translation>Alt+M</translation>
    </message>
    <message>
      <source>Merge created colors into the document colors</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Replace</source>
      <translation type="unfinished" >&amp;Замени</translation>
    </message>
    <message>
      <source>Alt+R</source>
      <translation>Alt+R</translation>
    </message>
    <message>
      <source>Replace created colors in the document colors</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation type="unfinished" >&amp;Откажи</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation type="unfinished" >Alt+C</translation>
    </message>
    <message>
      <source>Leave colors untouched</source>
      <translation>Остави боје нетакнуте</translation>
    </message>
    <message>
      <source>Simulate common vision defects here. Select type of the defect.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color Scheme Method</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source> %</source>
      <translation type="unfinished" > %</translation>
    </message>
    <message>
      <source>HSV:</source>
      <translation>HSV:</translation>
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
      <source>Result Colors</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>CharSelect</name>
    <message>
      <source>Font:</source>
      <translation type="unfinished" >Фонт:</translation>
    </message>
    <message>
      <source>Character Class:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Insert</source>
      <translation type="unfinished" >Уметн&amp;и</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation type="unfinished" >Оч&amp;исти</translation>
    </message>
    <message>
      <source>Insert the characters at the cursor in the text</source>
      <translation type="unfinished" >Уметни карактере на месту курсора у тексту</translation>
    </message>
    <message>
      <source>Delete the current selection(s).</source>
      <translation type="unfinished" >Обриши текући избор(е).</translation>
    </message>
    <message>
      <source>Full Character Set</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Basic Latin</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Latin-1 Supplement</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Latin Extended-A</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Latin Extended-B</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>General Punctuation</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Super- and Subscripts</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Currency Symbols</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Letterlike Symbols</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Number Forms</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Arrows</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Mathematical Operators</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Box Drawing</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Block Elements</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Geometric Shapes</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Miscellaneous Symbols</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Dingbats</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Small Form Variants</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Ligatures</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Specials</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Greek</source>
      <translation type="unfinished" >Грчки</translation>
    </message>
    <message>
      <source>Greek Extended</source>
      <translation>Проширени грчки</translation>
    </message>
    <message>
      <source>Cyrillic</source>
      <translation>Ћирилични</translation>
    </message>
    <message>
      <source>Cyrillic Supplement</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Arabic</source>
      <translation>Арапски</translation>
    </message>
    <message>
      <source>Arabic Extended A</source>
      <translation>Проширени арапски А</translation>
    </message>
    <message>
      <source>Arabic Extended B</source>
      <translation>Проширени арапски Б</translation>
    </message>
    <message>
      <source>Hebrew</source>
      <translation>Хебрејски</translation>
    </message>
    <message>
      <source>You can see a thumbnail if you press and hold down the right mouse button. The Insert key inserts a Glyph into the Selection below and the Delete key removes the last inserted one</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scribus Char Palette (*.ucp);;All Files (*)</source>
      <translation>Скрибусова палета знакова (*.ucp);;Сви фајлови (*)</translation>
    </message>
    <message>
      <source>Enhanced Palette</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Quick Palette</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Hide Enhanced</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Choose a filename to open</source>
      <translation>Изабери име фајла који желиш да отвориш</translation>
    </message>
    <message>
      <source>Error</source>
      <translation type="unfinished" >Грешка</translation>
    </message>
    <message>
      <source>Error reading file %1 - file is corrupted propably.</source>
      <translation>Грешка при отварању фајла %1 - фајл је вероватно оштећен.</translation>
    </message>
    <message>
      <source>Choose a filename to save under</source>
      <translation>Изабери име фајла у којем желиш да буде сачувано</translation>
    </message>
    <message>
      <source>Cannot write file %1</source>
      <translation>Не могу да запишем у фајл %1</translation>
    </message>
    <message>
      <source>Clean the Palette?</source>
      <translation>Очистити палету?</translation>
    </message>
    <message>
      <source>You will clean all characters from this palette. Are you sure?</source>
      <translation>Очистићеш све знакове из ове палете. Да ли си сигуран?</translation>
    </message>
    <message>
      <source>Character Palette</source>
      <translation>Палета знакова</translation>
    </message>
  </context>
  <context>
    <name>CharStyleComboBox</name>
    <message>
      <source>No Style</source>
      <translation type="unfinished" >Нема стила</translation>
    </message>
  </context>
  <context>
    <name>CharTable</name>
    <message>
      <source>Delete</source>
      <translation type="unfinished" >Обриши</translation>
    </message>
  </context>
  <context>
    <name>CheckDocument</name>
    <message>
      <source>Current Profile:</source>
      <translation>Тренутни профил:</translation>
    </message>
    <message>
      <source>Items</source>
      <translation>Ставке</translation>
    </message>
    <message>
      <source>Problems</source>
      <translation>Проблеми</translation>
    </message>
    <message>
      <source>Glyphs missing</source>
      <translation>Знак недостаје</translation>
    </message>
    <message>
      <source>Text overflow</source>
      <translation>Текст прелива</translation>
    </message>
    <message>
      <source>Object is not on a Page</source>
      <translation>Објекат се не налази на страни</translation>
    </message>
    <message>
      <source>Missing Image</source>
      <translation>Слика недостаје</translation>
    </message>
    <message>
      <source>Object has transparency</source>
      <translation>Објекат има провидност</translation>
    </message>
    <message>
      <source>Object is a placed PDF</source>
      <translation>Објекат је постављени PDF</translation>
    </message>
    <message>
      <source>Document</source>
      <translation type="unfinished" >Документ</translation>
    </message>
    <message>
      <source>No Problems found</source>
      <translation>Нема пронађених проблема</translation>
    </message>
    <message>
      <source>Page </source>
      <translation type="unfinished" >Страница</translation>
    </message>
    <message>
      <source>Free Objects</source>
      <translation>Слободни објекти</translation>
    </message>
    <message>
      <source>Problems found</source>
      <translation>Пронађени проблеми</translation>
    </message>
    <message>
      <source>Preflight Verifier</source>
      <translation>Провера могућих проблема</translation>
    </message>
    <message>
      <source>Object is a PDF Annotation or Field</source>
      <translation>Објекат је PDF анотација или поље</translation>
    </message>
    <message>
      <source>&amp;Ignore Errors</source>
      <translation>&amp;Игнориши грешке</translation>
    </message>
    <message>
      <source>Check again</source>
      <translation>Провери поново</translation>
    </message>
    <message>
      <source>Image resolution below %1 DPI, currently %2 x %3 DPI</source>
      <translation>Резолуција слике је испод %1 тпи, тренутно %2 x %3 тпи</translation>
    </message>
    <message>
      <source>Image resolution above %1 DPI, currently %2 x %3 DPI</source>
      <translation>Резолуција слике је преко %1 тпи, тренутно %2 x %3 тпи</translation>
    </message>
    <message>
      <source>Image is GIF</source>
      <translation>Слика је GIF</translation>
    </message>
    <message>
      <source>OK</source>
      <translation type="unfinished" >У реду</translation>
    </message>
    <message>
      <source>Transparency used</source>
      <translation>Провидност је коришћена</translation>
    </message>
    <message>
      <source>Blendmode used</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Layer &quot;%1&quot;</source>
      <translation>Слој &quot;%1&quot;</translation>
    </message>
    <message>
      <source>Annotation uses a non TrueType font</source>
      <translation>Анотација користи font који није TrueType</translation>
    </message>
  </context>
  <context>
    <name>ChooseStyles</name>
    <message>
      <source>Choose Styles</source>
      <translation>Изабери стил</translation>
    </message>
    <message>
      <source>Available Styles</source>
      <translation>Доступни стилови</translation>
    </message>
  </context>
  <context>
    <name>CollectForOutput</name>
    <message>
      <source>Choose a Directory</source>
      <translation type="unfinished" >Изаберите директоријум</translation>
    </message>
    <message>
      <source>Collecting...</source>
      <translation>Сакупљам...</translation>
    </message>
    <message>
      <source>Cannot collect all files for output for file:
%1</source>
      <translation>Не могу да покупим све за извоз у фајл:
%1</translation>
    </message>
    <message>
      <source>Cannot collect the file: 
%1</source>
      <translation>Не могу да покупим фајл: 
%1</translation>
    </message>
  </context>
  <context>
    <name>ColorManager</name>
    <message>
      <source>Colors</source>
      <translation type="unfinished" >Боје</translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation type="unfinished" >&amp;Увези</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation type="unfinished" >&amp;Нови</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation type="unfinished" >&amp;Уреди</translation>
    </message>
    <message>
      <source>D&amp;uplicate</source>
      <translation>Д&amp;уплирај</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation type="unfinished" >&amp;Обриши</translation>
    </message>
    <message>
      <source>&amp;Remove Unused</source>
      <translation type="unfinished" >&amp;Уклони некоришћено</translation>
    </message>
    <message>
      <source>Color Sets</source>
      <translation type="unfinished" >Скупови боја</translation>
    </message>
    <message>
      <source>Current Color Set:</source>
      <translation type="unfinished" >Текући скуп боја:</translation>
    </message>
    <message>
      <source>&amp;Save Color Set</source>
      <translation type="unfinished" >&amp;Сними скуп боја</translation>
    </message>
    <message>
      <source>Choose a color set to load</source>
      <translation type="unfinished" >Изаберите скуп боја за учитавање</translation>
    </message>
    <message>
      <source>Save the current color set</source>
      <translation type="unfinished" >Сними текући скуп боја</translation>
    </message>
    <message>
      <source>Remove unused colors from current document's color set</source>
      <translation type="unfinished" >Уклони некоришћене боје из скупа боја текућег документа</translation>
    </message>
    <message>
      <source>Import colors to the current set from an existing document</source>
      <translation>Увези боје у текући скуп боја из документа</translation>
    </message>
    <message>
      <source>Create a new color within the current set</source>
      <translation type="unfinished" >Направи нову боју у оквиру текућег скупа</translation>
    </message>
    <message>
      <source>Edit the currently selected color</source>
      <translation type="unfinished" >Уреди тренутно изабрану боју</translation>
    </message>
    <message>
      <source>Make a copy of the currently selected color</source>
      <translation type="unfinished" >Направи копију тренутно изабране боје</translation>
    </message>
    <message>
      <source>Delete the currently selected color</source>
      <translation type="unfinished" >Обриши тренутно изабрану боју</translation>
    </message>
    <message>
      <source>Make the current colorset the default color set</source>
      <translation type="unfinished" >Учини да тренутни скуп боја буде подразумевани</translation>
    </message>
    <message>
      <source>&amp;Name:</source>
      <translation type="unfinished" >&amp;Име:</translation>
    </message>
    <message>
      <source>Choose a Name</source>
      <translation type="unfinished" >Изаберите име</translation>
    </message>
    <message>
      <source>Copy of %1</source>
      <translation type="unfinished" >Копија од %1</translation>
    </message>
    <message>
      <source>New Color</source>
      <translation type="unfinished" >Нова боја</translation>
    </message>
    <message>
      <source>If color management is enabled, a triangle warning indicator is a warning the the color maybe outside of the color gamut of the current printer profile selected.What this means is the color may not print exactly as indicated on screen. Spot colors are indicated by a red circle. Registration colors will have a registration mark next to the color. More hints about gamut warnings are in the online help under Color Management.</source>
      <translation>Ако је управљање бојама укључено, упозорење у виду троугла је упзорење да је боја можда изван гамута тренутно изабраног колор профила штампе. То значи да боја можда неће бити одштампана како је приказана на екрану. Спот боје су означене црвеним кругом. Регистрационе боје имају регистрациони знак одмах до боје саме. Више савета о упозорењима о гамуту је доступно у помоћи под Управљање бојама, на мрежи.</translation>
    </message>
    <message>
      <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;Other Files (*.eps *.epsi *.ps *.ai);;All Files (*)</source>
      <translation>Документи (*.sla *.sla.gz *.scd *.scd.gz);;Остали фајлови (*.eps *.epsi *.ps *.ai);;Сви фајлови (*)</translation>
    </message>
    <message>
      <source>Information</source>
      <translation type="unfinished" >Информација</translation>
    </message>
    <message>
      <source>Import</source>
      <translation type="unfinished" >Увези</translation>
    </message>
    <message>
      <source>The file %1 does not contain colors which can be imported.
If the file was a PostScript-based, try to import it with File -&amp;gt; Import. 
Not all files have DSC conformant comments where the color descriptions are located.
 This prevents importing colors from some files.
See the Edit Colors section of the documentation for more details.</source>
      <translation>Фајл %1 не садржи боје које је могуће увести. 
Ако је фајл заснован на ПостСкрипт-у, покушај да га увезеш са File -&amp;gt; Import. 
Не садрже сви фајлови DSC коментаре где се налази опис боја. 
 То онемогућује увоз  боја из неких фајлова. 
Обрати се \&quot;Уређивање боја\&quot; одељку документације за више детаља.</translation>
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
      <translation type="unfinished" />
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
    <name>ColorWheelPlugin</name>
    <message>
      <source>&amp;Color Wheel...</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color setting helper</source>
      <translation type="unfinished" />
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
      <translation type="unfinished" >&amp;Примени</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation type="unfinished" >&amp;Откажи</translation>
    </message>
    <message>
      <source>None</source>
      <translation type="unfinished" >Ниједан</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation type="unfinished" >&amp;У реду</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation type="unfinished" >&amp;Сними</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation type="unfinished" >Упозорење</translation>
    </message>
    <message>
      <source>None</source>
      <comment>

color name</comment>
      <translation>Ниједна</translation>
    </message>
    <message>
      <source>Custom</source>
      <comment>



CommonStrings, custom page size</comment>
      <translation type="unfinished" >Произвољно</translation>
    </message>
    <message>
      <source>Single Page</source>
      <translation>Једнострано</translation>
    </message>
    <message>
      <source>Double Sided</source>
      <translation>Двострано</translation>
    </message>
    <message>
      <source>3-Fold</source>
      <translation>Троструко савијен</translation>
    </message>
    <message>
      <source>4-Fold</source>
      <translation>Четвороструко савијен</translation>
    </message>
    <message>
      <source>Monday</source>
      <translation>Понедељак</translation>
    </message>
    <message>
      <source>Tuesday</source>
      <translation>Уторак</translation>
    </message>
    <message>
      <source>Wednesday</source>
      <translation>Среда</translation>
    </message>
    <message>
      <source>Thursday</source>
      <translation>Четвртак</translation>
    </message>
    <message>
      <source>Friday</source>
      <translation>Петак</translation>
    </message>
    <message>
      <source>Saturday</source>
      <translation>Субота</translation>
    </message>
    <message>
      <source>Sunday</source>
      <translation>Недеља</translation>
    </message>
    <message>
      <source>January</source>
      <translation>Јануар</translation>
    </message>
    <message>
      <source>February</source>
      <translation>Фебруар</translation>
    </message>
    <message>
      <source>March</source>
      <translation>Март</translation>
    </message>
    <message>
      <source>April</source>
      <translation>Април</translation>
    </message>
    <message>
      <source>May</source>
      <translation>Мај</translation>
    </message>
    <message>
      <source>June</source>
      <translation>Јун</translation>
    </message>
    <message>
      <source>July</source>
      <translation>Јул</translation>
    </message>
    <message>
      <source>August</source>
      <translation>Август</translation>
    </message>
    <message>
      <source>September</source>
      <translation>Септембар</translation>
    </message>
    <message>
      <source>October</source>
      <translation>Октобар</translation>
    </message>
    <message>
      <source>November</source>
      <translation>Новембар</translation>
    </message>
    <message>
      <source>December</source>
      <translation>Децембар</translation>
    </message>
    <message>
      <source>Yes</source>
      <translation type="unfinished" >Да</translation>
    </message>
    <message>
      <source>No</source>
      <translation type="unfinished" >Не</translation>
    </message>
    <message>
      <source>&amp;Yes</source>
      <translation type="unfinished" >&amp;Да</translation>
    </message>
    <message>
      <source>&amp;No</source>
      <translation type="unfinished" >&amp;Не</translation>
    </message>
    <message>
      <source>Left Page</source>
      <comment>Left page location</comment>
      <translation>Лева страна</translation>
    </message>
    <message>
      <source>Middle</source>
      <comment>Middle page location</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Middle Left</source>
      <comment>Middle Left page location</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Middle Right</source>
      <comment>Middle Right page location</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Right Page</source>
      <comment>Right page location</comment>
      <translation>Десна страна</translation>
    </message>
    <message>
      <source>Normal</source>
      <comment>



Default single master page</comment>
      <translation type="unfinished" >Нормално</translation>
    </message>
    <message>
      <source>Normal Left</source>
      <comment>Default left master page</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Normal Middle</source>
      <comment>Default middle master page</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Normal Right</source>
      <comment>Default right master page</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Normal Vision</source>
      <comment>Color Blindness - Normal Vision</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Protanopia (Red)</source>
      <comment>Color Blindness - Red Color Blind</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Deuteranopia (Green)</source>
      <comment>Color Blindness - Greed Color Blind</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Tritanopia (Blue)</source>
      <comment>Color Blindness - Blue Color Blind</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Full Color Blindness</source>
      <comment>Color Blindness - Full Color Blindness</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Custom: </source>
      <comment>Custom Tab Fill Option</comment>
      <translation>Произвољна:</translation>
    </message>
    <message>
      <source>Solid Line</source>
      <translation type="unfinished" >Непрекидна линија</translation>
    </message>
    <message>
      <source>Dashed Line</source>
      <translation type="unfinished" >Испрекидана линија</translation>
    </message>
    <message>
      <source>Dotted Line</source>
      <translation>Истачкана линија</translation>
    </message>
    <message>
      <source>Dash Dot Line</source>
      <translation type="unfinished" >Црта-тачка</translation>
    </message>
    <message>
      <source>Dash Dot Dot Line</source>
      <translation type="unfinished" >Црта-тачка-тачка</translation>
    </message>
    <message>
      <source>None</source>
      <comment>



Optical Margin Setting</comment>
      <translation type="unfinished" >Ниједан</translation>
    </message>
    <message>
      <source>Left Protruding</source>
      <comment>Optical Margin Setting</comment>
      <translation>Избачен лево</translation>
    </message>
    <message>
      <source>Right Protruding</source>
      <comment>Optical Margin Setting</comment>
      <translation>Избачен десно</translation>
    </message>
    <message>
      <source>Left Hanging Punctuation</source>
      <comment>Optical Margin Setting</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Right Hanging Punctuation</source>
      <comment>Optical Margin Setting</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Both sides</source>
      <comment>Optical Margin Setting</comment>
      <translation>Обе стране</translation>
    </message>
    <message>
      <source>Min. Word Tracking</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Norm. Word Tracking</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Min. Glyph Extension</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Max. Glyph Extension</source>
      <translation type="unfinished" />
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
      <translation>Водоравни ферлауф</translation>
    </message>
    <message>
      <source>Vertical Gradient</source>
      <translation>Усправни ферлауф</translation>
    </message>
    <message>
      <source>Diagonal Gradient</source>
      <translation>Дијагонални ферлауф</translation>
    </message>
    <message>
      <source>Cross Diagonal Gradient</source>
      <translation>Укрштени дијагонални ферлауф</translation>
    </message>
    <message>
      <source>Radial Gradient</source>
      <translation>Кружни ферлауф</translation>
    </message>
    <message>
      <source>Free linear Gradient</source>
      <translation>Слободни линијски ферлауф</translation>
    </message>
    <message>
      <source>Free radial Gradient</source>
      <translation>Слободни кружни ферлауф</translation>
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
      <source>Move Vector</source>
      <translation>Помери правац</translation>
    </message>
    <message>
      <source>Move the start of the gradient vector with the left mouse button pressed and move the end of the gradient vector with the right mouse button pressed</source>
      <translation>Помери почетну тачку правца ферлауфа притиснутим левим тастером миша и помери крајњу тачку ферлауфа користећи десни тастер миша</translation>
    </message>
    <message>
      <source>Transparency Settings</source>
      <translation>Подешавања провидности</translation>
    </message>
    <message>
      <source>Blend Mode:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Darken</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Lighten</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Multiply</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Screen</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Overlay</source>
      <translation type="unfinished" />
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
      <source>Color Dodge</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color Burn</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Hue</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Saturation</source>
      <translation type="unfinished" >Засићење</translation>
    </message>
    <message>
      <source>Color</source>
      <translation type="unfinished" >Боја</translation>
    </message>
    <message>
      <source>Luminosity</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Offsets</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>X:</source>
      <translation type="unfinished" >X:</translation>
    </message>
    <message>
      <source>Y:</source>
      <translation type="unfinished" >Y:</translation>
    </message>
    <message>
      <source>Scaling</source>
      <translation>Скалирање</translation>
    </message>
    <message>
      <source>Rotation</source>
      <translation>Окретање</translation>
    </message>
    <message>
      <source>Angle</source>
      <translation>Угао</translation>
    </message>
    <message>
      <source>Pattern</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Exclusion</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>X-Scale:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Y-Scale:</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>CreateRangeBase</name>
    <message>
      <source>Create Range</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Number of Pages in Document:</source>
      <translation>Број страна у документу:</translation>
    </message>
    <message>
      <source>Doc Page Range</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Basic Range Selection</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Add a Range of Pages</source>
      <translation>Додај опсег страна</translation>
    </message>
    <message>
      <source>Consecutive Pages</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>From:</source>
      <translation>Од:</translation>
    </message>
    <message>
      <source>To:</source>
      <translation>До:</translation>
    </message>
    <message>
      <source>Comma Separated List</source>
      <translation>Листа страна одвојена зарезом</translation>
    </message>
    <message>
      <source>Even Pages</source>
      <translation>Парне стане </translation>
    </message>
    <message>
      <source>Odd Pages</source>
      <translation>Непарне стране</translation>
    </message>
    <message>
      <source>&amp;Add To Range</source>
      <translation>&amp;Додај опсегу</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>Range of Pages</source>
      <translation>Опсег страна</translation>
    </message>
    <message>
      <source>Move &amp;Up</source>
      <translation>Помери &amp;Горе</translation>
    </message>
    <message>
      <source>Alt+U</source>
      <translation>Alt+U</translation>
    </message>
    <message>
      <source>Move &amp;Down</source>
      <translation>Помери &amp;доле</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>De&amp;lete</source>
      <translation type="unfinished" >&amp;Обриши</translation>
    </message>
    <message>
      <source>Alt+L</source>
      <translation>Alt+L</translation>
    </message>
    <message>
      <source>Advanced Reordering</source>
      <translation>Напредна реорганизација</translation>
    </message>
    <message>
      <source>Page Group Size:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Sample Page Order:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Page Order</source>
      <translation>Редослед страна</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation type="unfinished" >&amp;У реду</translation>
    </message>
    <message>
      <source>Alt+O</source>
      <translation type="unfinished" >Alt+O</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation type="unfinished" >&amp;Откажи</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation type="unfinished" >Alt+C</translation>
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
      <comment>



delimiter</comment>
      <translation type="unfinished" >Ниједан</translation>
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
      <source>This panel displays various CUPS options when printing. The exact parameters available will depend on your printer driver. You can confirm CUPS support by selecting Help > About. Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support. Missing library support is indicated by a *</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>CurveWidget</name>
    <message>
      <source>Open</source>
      <translation type="unfinished" >Отвори</translation>
    </message>
    <message>
      <source>Curve Files (*.scu);;All Files (*)</source>
      <translation>Фајл који садржи криве (*.scu);;Сви фајлови (*)</translation>
    </message>
    <message>
      <source>Save as</source>
      <translation type="unfinished" >Сними као</translation>
    </message>
    <message>
      <source>Cannot write the file: 
%1</source>
      <translation>Не могу да запишем фалј: 
%1</translation>
    </message>
    <message>
      <source>Inverts the curve</source>
      <translation>Преокреће криву уназад</translation>
    </message>
    <message>
      <source>Resets the curve</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Switches between linear and cubic interpolation of the curve</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Loads a curve</source>
      <translation>Учитава криву</translation>
    </message>
    <message>
      <source>Saves this curve</source>
      <translation>Снима ову криву</translation>
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
      <translation>&amp;Укључи ICC профиле</translation>
    </message>
  </context>
  <context>
    <name>DeferredTask</name>
    <message>
      <source>Cancelled by user</source>
      <translation>Обустављено од стране корисника</translation>
    </message>
  </context>
  <context>
    <name>DelColor</name>
    <message>
      <source>Delete Color</source>
      <translation>Обриши боју</translation>
    </message>
    <message>
      <source>Delete Color:</source>
      <translation>Обриши боју: </translation>
    </message>
    <message>
      <source>Replace With:</source>
      <translation>Замени са: </translation>
    </message>
  </context>
  <context>
    <name>DelPages</name>
    <message>
      <source>Delete Pages</source>
      <translation>Обриши странице</translation>
    </message>
    <message>
      <source>to:</source>
      <translation>у:</translation>
    </message>
    <message>
      <source>Delete From:</source>
      <translation>Обриши од:</translation>
    </message>
  </context>
  <context>
    <name>DelStyle</name>
    <message>
      <source>Delete Style</source>
      <translation>Обриши стил</translation>
    </message>
    <message>
      <source>Delete Style:</source>
      <translation>Обриши стил:</translation>
    </message>
    <message>
      <source>Replace With:</source>
      <translation>Замени са: </translation>
    </message>
    <message>
      <source>No Style</source>
      <translation type="unfinished" >Нема стила</translation>
    </message>
  </context>
  <context>
    <name>DocIm</name>
    <message>
      <source>Importing failed</source>
      <translation>Ивожење није успело</translation>
    </message>
    <message>
      <source>Importing Word document failed 
%1</source>
      <translation>Увожење Word документа није успело 
%1</translation>
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
      <source>Further &amp;Information</source>
      <translation>Додатне &amp;информације</translation>
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
      <source>Documen&amp;t</source>
      <translation>Докумен&amp;т</translation>
    </message>
    <message>
      <source>The person or organisation primarily responsible for making the content of the document. This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
      <translation>Особа или организација првенствено одговорна за настанак овог документа. Ово поље може бити укључено у Скрибусов документ, као и у мета-податке PDF-а</translation>
    </message>
    <message>
      <source>A name given to the document. This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
      <translation>Име дато документу. Ово поље може бити укључено у Скрибусов документ, као и у мета-податке PDF-а</translation>
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
      <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting. RFC2045,RFC2046 for MIME types are also useful here</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>The language in which the content of the document is written, usually a ISO-639 language code optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
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
      <translation>Обриши тренутно изабран одељак.</translation>
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
      <source>&lt;b>Name:&lt;/b> Optional name for section eg. Index&lt;br/>&lt;b>Shown:&lt;/b> Select to show the page numbers in this section if there is one or more text frames setup to do so.&lt;br/>&lt;b>From:&lt;/b> The page index for this section to start at.&lt;br/>&lt;b>To:&lt;/b> The page index for this section to stop at.&lt;br/>&lt;b>Style:&lt;/b> Select the page number style to be used.&lt;br/>&lt;b>Start:&lt;/b> The index within the Style's range to star at. Eg. If Start=2 and Style=a,b,c, ..., the numbers will begin at b. For the first section in the document this replaces the older First Page Number in the new file window.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Page Number Out Of Bounds</source>
      <translation>Број стране је изван опсега</translation>
    </message>
    <message>
      <source>The value you have entered is outside the range of page numbers in the current document (%1-%2).</source>
      <translation>Унешена вредност је изван опсега броја страна овог документа (%1-%2).</translation>
    </message>
  </context>
  <context>
    <name>DocSectionsBase</name>
    <message>
      <source>Document Sections</source>
      <translation>Одељци у документу</translation>
    </message>
    <message>
      <source>Name</source>
      <translation type="unfinished" >Име</translation>
    </message>
    <message>
      <source>From</source>
      <translation>Од</translation>
    </message>
    <message>
      <source>To</source>
      <translation>Ка</translation>
    </message>
    <message>
      <source>Style</source>
      <translation type="unfinished" >Стил</translation>
    </message>
    <message>
      <source>Start</source>
      <translation>Почетак</translation>
    </message>
    <message>
      <source>&amp;Add</source>
      <translation type="unfinished" >&amp;Додај</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation type="unfinished" >&amp;Обриши</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>Shown</source>
      <translation>Приказан</translation>
    </message>
  </context>
  <context>
    <name>DocumentItemAttributes</name>
    <message>
      <source>Relates To</source>
      <translation>Односи се према</translation>
    </message>
    <message>
      <source>Is Parent Of</source>
      <translation>је предак</translation>
    </message>
    <message>
      <source>Is Child Of</source>
      <translation>је наследник</translation>
    </message>
    <message>
      <source>Text Frames</source>
      <translation>Текстуални оквири</translation>
    </message>
    <message>
      <source>Image Frames</source>
      <translation>Оквири слика</translation>
    </message>
    <message>
      <source>Boolean</source>
      <translation>Логичка вредност</translation>
    </message>
    <message>
      <source>Integer</source>
      <translation>Целобројна вредност</translation>
    </message>
    <message>
      <source>String</source>
      <translation>Низ знакова</translation>
    </message>
    <message>
      <source>None</source>
      <comment>



relationship</comment>
      <translation type="unfinished" >Ниједан</translation>
    </message>
    <message>
      <source>None</source>
      <comment>



auto add</comment>
      <translation type="unfinished" >Ниједан</translation>
    </message>
    <message>
      <source>None</source>
      <comment>



types</comment>
      <translation type="unfinished" >Ниједан</translation>
    </message>
    <message>
      <source>Real Number</source>
      <translation>Реалан број</translation>
    </message>
  </context>
  <context>
    <name>DocumentItemAttributesBase</name>
    <message>
      <source>Document Item Attributes</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Name</source>
      <translation type="unfinished" >Име</translation>
    </message>
    <message>
      <source>Type</source>
      <translation type="unfinished" >Врста</translation>
    </message>
    <message>
      <source>Value</source>
      <translation type="unfinished" >Вредност</translation>
    </message>
    <message>
      <source>Parameter</source>
      <translation>Парамета</translation>
    </message>
    <message>
      <source>Relationship</source>
      <translation>Однос</translation>
    </message>
    <message>
      <source>Relationship To</source>
      <translation>Однос према</translation>
    </message>
    <message>
      <source>Auto Add To</source>
      <translation>Сам додај</translation>
    </message>
    <message>
      <source>&amp;Add</source>
      <translation type="unfinished" >&amp;Додај</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation type="unfinished" >&amp;Копирај</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation type="unfinished" >Alt+C</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation type="unfinished" >&amp;Обриши</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation type="unfinished" >Оч&amp;исти</translation>
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
      <source>&amp;Print</source>
      <translation>&amp;Штампај</translation>
    </message>
    <message>
      <source>Save as</source>
      <translation>Сними као</translation>
    </message>
    <message>
      <source>Print Normal</source>
      <translation>Нормална штампа</translation>
    </message>
    <message>
      <source>Print Separations</source>
      <translation>Штампа издвајања боја</translation>
    </message>
    <message>
      <source>Print in Color if Available</source>
      <translation>Штампа у боји ако је могуће</translation>
    </message>
    <message>
      <source>Print in Grayscale</source>
      <translation>Штампа у нијансама сиве</translation>
    </message>
    <message>
      <source>PostScript Level 1</source>
      <translation>PostScript Level 1</translation>
    </message>
    <message>
      <source>PostScript Level 2</source>
      <translation>PostScript Level 2</translation>
    </message>
    <message>
      <source>PostScript Level 3</source>
      <translation>PostScript Level 3</translation>
    </message>
    <message>
      <source>Page</source>
      <translation>Страна</translation>
    </message>
    <message>
      <source>Mirror Page(s) Horizontal</source>
      <translation>Изврни страну(е) водоравно</translation>
    </message>
    <message>
      <source>Mirror Page(s) Vertical</source>
      <translation>Изврни страну(е) усправно</translation>
    </message>
    <message>
      <source>Set Media Size</source>
      <translation>Подеси величину медиа</translation>
    </message>
    <message>
      <source>Color</source>
      <translation type="unfinished" >Боја</translation>
    </message>
    <message>
      <source>Apply Under Color Removal</source>
      <translation>Примени смањење засићења бојом</translation>
    </message>
    <message>
      <source>Convert Spot Colors to Process Colors</source>
      <translation>Преведи Спот боје у процесне боје</translation>
    </message>
    <message>
      <source>Apply ICC Profiles</source>
      <translation>Примени ICC профиле</translation>
    </message>
    <message>
      <source>Advanced Options</source>
      <translation type="unfinished" >Напредне опције</translation>
    </message>
    <message>
      <source>Preview...</source>
      <translation>Преглед...</translation>
    </message>
    <message>
      <source>Sets the PostScript Level.
 Setting to Level 1 or 2 can create huge files</source>
      <translation>Одређује Пост скрипт ниво. 
Постављање на Level 1 или 2 може да направи огромне фајлове</translation>
    </message>
    <message>
      <source>PostScript Files (*.ps);;All Files (*)</source>
      <translation>Пост скрипт фајлови (*.ps);;Сви фајлови (*)</translation>
    </message>
    <message>
      <source>Use an alternative print manager, such as kprinter or gtklp, to utilize additional printing options</source>
      <translation>Користи алтернативни управљач штампом, као што је kprinter или gtklp, да би подесио додатне опције штампе</translation>
    </message>
    <message>
      <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis.UCR reduces the possibility of over saturation with CMY inks.</source>
      <translation>Начин замене неких нијанси сиве које су састављене од цијана, жуте и магенте и коришћење црне уместо њих. UCR (смањење засићења бојом) углавном утиче на делове слика које су неутрални или тамних тонова који су врло близу сивој. Коришћење ове опције може умногоме побољшати неке слике и захтева одређено експериментисање и пробе од слушаја до случаја. UCR смањује могућност презасићења CMY бојама.</translation>
    </message>
    <message>
      <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
      <translation>Омогућава да спот боје буду преведене у композитне боје. Ако није планирано да се спот боје штампају у комерцијалној штампи, најбоље је оставити ово поље укључено.</translation>
    </message>
    <message>
      <source>Allows you to embed ICC profiles in the print stream when color management is enabled</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>This enables you to explicitely set the media size of the PostScript file. Not recommended unless requested by your printer.</source>
      <translation>Омогућава да се назначи величина медијума штампе у ПостСкрипт фајлу. Ноје препоручљино уколико није захтевано од стране штампара.</translation>
    </message>
    <message>
      <source>Clip to Page Margins</source>
      <translation>Одсеци до маргина стране</translation>
    </message>
    <message>
      <source>Failed to retrieve printer settings</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Do not show objects outside the margins on the printed page</source>
      <translation>Не приказуј објекте изван маргина на штампаној страни</translation>
    </message>
    <message>
      <source>Force Overprint Mode</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Enables global Overprint Mode for this document, overrides object settings</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Printer Marks</source>
      <translation>Ознаке за штампу</translation>
    </message>
    <message>
      <source>Crop Marks</source>
      <translation>Ознаке за сечење</translation>
    </message>
    <message>
      <source>Bleed Marks</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Registration Marks</source>
      <translation>Регистрационе ознаке</translation>
    </message>
    <message>
      <source>Color Bars</source>
      <translation>Клинови боја</translation>
    </message>
    <message>
      <source>Offset:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Marks</source>
      <translation>Ознаке</translation>
    </message>
    <message>
      <source>Bleed Settings</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Top:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Bottom:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Left:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Right:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Use Document Bleeds</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Bleeds</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Inside:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Outside:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Distance for bleed from the top of the physical page</source>
      <translation type="unfinished" >Растојање за цурење од врха физичке странице</translation>
    </message>
    <message>
      <source>Distance for bleed from the bottom of the physical page</source>
      <translation type="unfinished" >Растојање за цурење од дна физичке странице</translation>
    </message>
    <message>
      <source>Distance for bleed from the left of the physical page</source>
      <translation type="unfinished" >Растојање за цурење с лева физичке странице</translation>
    </message>
    <message>
      <source>Distance for bleed from the right of the physical page</source>
      <translation type="unfinished" >Растојање за цурење с десна физичке странице</translation>
    </message>
    <message>
      <source>This creates crop marks in the PDF indicating where the paper should be cut or trimmed after printing.</source>
      <translation>Поставља ознаке за сечење у PDF-у да укаже где папир треба сећи или обрезати након штампања.</translation>
    </message>
    <message>
      <source>This creates bleed marks which are indicated by  _ . _ and show the bleed limit</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Add registration marks which are added to each separation</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Add color calibration bars</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Indicate the distance offset for the registration marks</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Use the existing bleed settings from the document preferences</source>
      <translation type="unfinished" />
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
      <translation>Кобна грешка</translation>
    </message>
    <message>
      <source>Error</source>
      <translation type="unfinished" >Грешка</translation>
    </message>
    <message>
      <source>Analyzing PostScript:</source>
      <translation>Пост скрипт анализа:</translation>
    </message>
    <message>
      <source>Generating Items</source>
      <translation>Правим ставке</translation>
    </message>
    <message>
      <source>Converting of %1 images failed!</source>
      <translation>Конверзија %1 слика није успела!</translation>
    </message>
    <message>
      <source>Group%1</source>
      <translation>Група%1</translation>
    </message>
    <message>
      <source>Importing: %1</source>
      <translation>Увожење: %1</translation>
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
      <source> pt</source>
      <translation> тач.</translation>
    </message>
    <message>
      <source>&amp;Lines:</source>
      <translation>&amp;Линије:</translation>
    </message>
    <message>
      <source>Tabulators and Indentation</source>
      <translation>Табулатори и увлачење</translation>
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
      <source>Determines the overall height, in line numbers, of the Drop Caps</source>
      <translation>Утврђује свеукупну висину, бројеве у низу, испуштених великих слова</translation>
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
      <source> %</source>
      <translation type="unfinished" > %</translation>
    </message>
    <message>
      <source>Distances</source>
      <translation type="unfinished" >Удаљеност</translation>
    </message>
    <message>
      <source>Fixed Linespacing</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Automatic Linespacing</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Align to Baseline Grid</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Drop Caps</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Distance from Text:</source>
      <translation>Удаљеност од текста:</translation>
    </message>
    <message>
      <source>Preview of the Paragraph Style</source>
      <translation>Приказ стила параграфа</translation>
    </message>
    <message>
      <source>Determines the gap between the DropCaps and the Text</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Toggles sample text of this paragraph style</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Name of the style is not unique</source>
      <translation>Име овог стила није јединствено</translation>
    </message>
    <message>
      <source>Background</source>
      <translation type="unfinished" >Позадина</translation>
    </message>
    <message>
      <source>Manual Tracking</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Offset to baseline of characters</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Click to select the line spacing mode</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Select for easier reading of light colored text styles</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Auto</source>
      <translation type="unfinished" />
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
      <source>JavaScripts (*.js);;All Files (*)</source>
      <translation>Јава Скрипт (*.js);;Сви фајлови (*)</translation>
    </message>
  </context>
  <context>
    <name>EffectsDialog</name>
    <message>
      <source>Image Effects</source>
      <translation>Ефекти на слици</translation>
    </message>
    <message>
      <source>Options:</source>
      <translation>Опције:</translation>
    </message>
    <message>
      <source>Color:</source>
      <translation type="unfinished" >Боја:</translation>
    </message>
    <message>
      <source>Shade:</source>
      <translation type="unfinished" >Сенка:</translation>
    </message>
    <message>
      <source>Brightness:</source>
      <translation>Осветљеност:</translation>
    </message>
    <message>
      <source>Contrast:</source>
      <translation>Контраст:</translation>
    </message>
    <message>
      <source>Radius:</source>
      <translation>Пречник:</translation>
    </message>
    <message>
      <source>Value:</source>
      <translation>Вредност:</translation>
    </message>
    <message>
      <source>Posterize:</source>
      <translation>Постеризација:</translation>
    </message>
    <message>
      <source>Available Effects</source>
      <translation>Доступни ефекти</translation>
    </message>
    <message>
      <source>Blur</source>
      <translation>Замућење</translation>
    </message>
    <message>
      <source>Brightness</source>
      <translation>Осветљеност</translation>
    </message>
    <message>
      <source>Colorize</source>
      <translation>Колоризација</translation>
    </message>
    <message>
      <source>Contrast</source>
      <translation>Контраст</translation>
    </message>
    <message>
      <source>Grayscale</source>
      <translation>Нијансе сиве</translation>
    </message>
    <message>
      <source>Invert</source>
      <translation type="unfinished" >Инвертуј</translation>
    </message>
    <message>
      <source>Posterize</source>
      <translation>Постеризација</translation>
    </message>
    <message>
      <source>Sharpen</source>
      <translation>Изоштравање</translation>
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
      <translation>Ефекти у употреби</translation>
    </message>
    <message>
      <source>OK</source>
      <translation type="unfinished" >У реду</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation type="unfinished" >Поништи</translation>
    </message>
    <message>
      <source>Color 1:</source>
      <translation>Боја 1:</translation>
    </message>
    <message>
      <source>Color 2:</source>
      <translation>Боја 2:</translation>
    </message>
    <message>
      <source>Color 3:</source>
      <translation>Боја 3:</translation>
    </message>
    <message>
      <source>Color 4:</source>
      <translation>Боја 4:</translation>
    </message>
    <message>
      <source>Duotone</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Tritone</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Quadtone</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Curves</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>ExportBitmap</name>
    <message>
      <source>File exists. Overwrite?</source>
      <translation type="unfinished" >Фајл постоји. Да пребришем?</translation>
    </message>
    <message>
      <source>exists already. Overwrite?</source>
      <translation type="unfinished" >већ постоји Да пребришем?</translation>
    </message>
    <message>
      <source>All</source>
      <translation type="unfinished" >Све</translation>
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
Name of the export file will be 'documentname-pagenumber.filetype'</source>
      <translation>Излазни директоријум - место за смештање Ваших слика.
Име извезеног фајла ће бити „имедокумента-бројстране.врстафајла“</translation>
    </message>
    <message>
      <source>Change the output directory</source>
      <translation>Промени излазни директоријум</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation type="unfinished" >&amp;Величина:</translation>
    </message>
    <message>
      <source>Size of the images. 100% for no changes, 200% for two times larger etc.</source>
      <translation>Величина слике. 100% за непромењену величину, 200% за два пута већу слику итд.</translation>
    </message>
    <message>
      <source>Image size in Pixels</source>
      <translation>Величина слике у пикселима</translation>
    </message>
  </context>
  <context>
    <name>ExtImageProps</name>
    <message>
      <source>Extended Image Properties</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Normal</source>
      <translation type="unfinished" >Нормално</translation>
    </message>
    <message>
      <source>Darken</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Lighten</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Hue</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Saturation</source>
      <translation type="unfinished" >Засићење</translation>
    </message>
    <message>
      <source>Color</source>
      <translation type="unfinished" >Боја</translation>
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
      <translation type="unfinished" />
    </message>
    <message>
      <source>Dissolve</source>
      <translation type="unfinished" >Растварање</translation>
    </message>
    <message>
      <source>Overlay</source>
      <translation type="unfinished" />
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
      <source>Blend Mode:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Opacity:</source>
      <translation type="unfinished" >Непрозирност:</translation>
    </message>
    <message>
      <source> %</source>
      <translation type="unfinished" > %</translation>
    </message>
    <message>
      <source>Name</source>
      <translation type="unfinished" >Име</translation>
    </message>
    <message>
      <source>Layers</source>
      <translation type="unfinished" >Слојеви</translation>
    </message>
    <message>
      <source>Don't use any Path</source>
      <translation>Не користи ниједну путању</translation>
    </message>
    <message>
      <source>Paths</source>
      <translation type="unfinished" >Путање</translation>
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
      <translation>Резолуција:</translation>
    </message>
    <message>
      <source>DPI</source>
      <translation>тпи</translation>
    </message>
    <message>
      <source>CMYK</source>
      <translation type="unfinished" >CMYK</translation>
    </message>
    <message>
      <source>RGB</source>
      <translation type="unfinished" >RGB</translation>
    </message>
    <message>
      <source>Colorspace:</source>
      <translation>Простор боја:</translation>
    </message>
    <message>
      <source>Grayscale</source>
      <translation>Нијансе сиве</translation>
    </message>
    <message>
      <source>Duotone</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>FileLoader</name>
    <message>
      <source>Some fonts used by this document have been substituted:</source>
      <translation>Неки фонтови коришћени у овом докумену су замењени:</translation>
    </message>
    <message>
      <source> was replaced by: </source>
      <translation>је замењен са:</translation>
    </message>
  </context>
  <context>
    <name>FontComboH</name>
    <message>
      <source>Face:</source>
      <translation>Изглед:</translation>
    </message>
    <message>
      <source>Style:</source>
      <translation type="unfinished" >Стил:</translation>
    </message>
  </context>
  <context>
    <name>FontPrefs</name>
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
      <source>Font Name</source>
      <translation>Име фонта</translation>
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
      <source>Choose a Directory</source>
      <translation>Изаберите директоријум</translation>
    </message>
    <message>
      <source>Font Name</source>
      <comment>



font preview</comment>
      <translation type="unfinished" >Име фонта</translation>
    </message>
    <message>
      <source>Use Font</source>
      <comment>



font preview</comment>
      <translation type="unfinished" >Користи фонт</translation>
    </message>
    <message>
      <source>Subset</source>
      <comment>



font preview</comment>
      <translation type="unfinished" >Подсет</translation>
    </message>
    <message>
      <source>Path to Font File</source>
      <comment>



font preview</comment>
      <translation type="unfinished" >Путања до фајла фонта</translation>
    </message>
    <message>
      <source>Embed in PostScript</source>
      <comment>font preview</comment>
      <translation>Укључи у PostScript</translation>
    </message>
    <message>
      <source>Font search paths can only be set in File > Preferences, and only when there is no document currently open. Close any open documents, then use File > Preferences > Fonts to change the font search path.</source>
      <translation>Путања за тражење фонтова се може подесити у File > Preferences и само онда када нема тренутно отвореног документа. Затвори отворене документе, па затим користи File > Preferences > Fonts за промену путање у којој се фонтови траже.</translation>
    </message>
  </context>
  <context>
    <name>FontPreview</name>
    <message>
      <source>User</source>
      <comment>font preview</comment>
      <translation>Кориснички</translation>
    </message>
    <message>
      <source>System</source>
      <comment>font preview</comment>
      <translation>Системски</translation>
    </message>
    <message>
      <source>Append selected font into Style, Font menu</source>
      <comment>font preview</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Leave preview</source>
      <comment>font preview</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Woven silk pyjamas exchanged for blue quartz</source>
      <comment>



font preview</comment>
      <translation type="unfinished" >Плетене свилене пиџаме замењене за плави кварц</translation>
    </message>
    <message>
      <source>Start searching</source>
      <translation>Започни претрагу</translation>
    </message>
    <message>
      <source>Size of the selected font</source>
      <translation>Величина изабраног фонта</translation>
    </message>
    <message>
      <source>Sample will be shown after key release</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Typing the text here provides quick searching in the font names. Searching is case insensitive. You can provide a common wild cards (*, ?, [...]) in your phrase. Examples: t* will list all fonts starting with t or T. *bold* will list all fonts with word bold, bolder etc. in the name.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>FontPreviewBase</name>
    <message>
      <source>Fonts Preview</source>
      <translation type="unfinished" >Преглед фонтова</translation>
    </message>
    <message>
      <source>&amp;Quick Search:</source>
      <translation>&amp;Брза претрага:</translation>
    </message>
    <message>
      <source>&amp;Search</source>
      <translation type="unfinished" >&amp;Тражи</translation>
    </message>
    <message>
      <source>Alt+S</source>
      <translation>Alt+S</translation>
    </message>
    <message>
      <source>Font Name</source>
      <translation type="unfinished" >Име фонта</translation>
    </message>
    <message>
      <source>Doc</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Type</source>
      <translation type="unfinished" >Врста</translation>
    </message>
    <message>
      <source>Subset</source>
      <translation type="unfinished" >Подсет</translation>
    </message>
    <message>
      <source>Access</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Font Size:</source>
      <translation type="unfinished" >Величина &amp;фонта:</translation>
    </message>
    <message>
      <source>Text</source>
      <translation type="unfinished" >Текст</translation>
    </message>
    <message>
      <source>Sample text to display</source>
      <translation>Узорак текста за приказ</translation>
    </message>
    <message>
      <source>Se&amp;t</source>
      <translation>Пос&amp;тави</translation>
    </message>
    <message>
      <source>Alt+T</source>
      <translation>Alt+T</translation>
    </message>
    <message>
      <source>Reset the text</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Append</source>
      <translation type="unfinished" >&amp;Примени</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation type="unfinished" >&amp;Затвори</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation type="unfinished" >Alt+C</translation>
    </message>
  </context>
  <context>
    <name>FontPreviewPlugin</name>
    <message>
      <source>&amp;Font Preview...</source>
      <translation>Приказ &amp;фонта...</translation>
    </message>
    <message>
      <source>Font Preview dialog</source>
      <translation>Прозор прегледа фонтова</translation>
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
      <translation>Замене фонтова</translation>
    </message>
    <message>
      <source>Original Font</source>
      <translation>Изворни фонт</translation>
    </message>
    <message>
      <source>Substitution Font</source>
      <translation>Фонт замене</translation>
    </message>
    <message>
      <source>Make these substitutions permanent</source>
      <translation>Учини ову замену трајном</translation>
    </message>
    <message>
      <source>This document contains some fonts that are not installed on your system, please choose a suitable replacement for them. Cancel will stop the document from loading.</source>
      <translation>Овај документ садржи неке фонтове који нису присутни на овом систему, изабери одговарајућу замену за њих. Поништење ће зауставити учитавање документа.</translation>
    </message>
    <message>
      <source>Cancels these font substitutions and stops loading the document.</source>
      <translation>Поништава замену фонтова и зауставља учитавање документа.</translation>
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
      <translation>Позиција:</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <source>Add, change or remove color stops here</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>GuideManager</name>
    <message>
      <source>Edit Guide</source>
      <translation>Уреди водиље</translation>
    </message>
    <message>
      <source>Enter a position:</source>
      <translation>Позиција:</translation>
    </message>
    <message>
      <source>New Guide</source>
      <translation>Нова водиља</translation>
    </message>
  </context>
  <context>
    <name>GuideManagerBase</name>
    <message>
      <source>Manage Guides</source>
      <translation type="unfinished" >Управљање водиљама</translation>
    </message>
    <message>
      <source>Horizontals</source>
      <translation>Хоризонтале</translation>
    </message>
    <message>
      <source>Guide</source>
      <translation>Водиља</translation>
    </message>
    <message>
      <source>&amp;Add</source>
      <translation type="unfinished" >&amp;Додај</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>D&amp;elete</source>
      <translation type="unfinished" >&amp;Обриши</translation>
    </message>
    <message>
      <source>Alt+E</source>
      <translation>Alt+E</translation>
    </message>
    <message>
      <source>Verticals</source>
      <translation>Вертикале</translation>
    </message>
    <message>
      <source>A&amp;dd</source>
      <translation type="unfinished" >&amp;Додај</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>De&amp;lete</source>
      <translation type="unfinished" >&amp;Обриши</translation>
    </message>
    <message>
      <source>Alt+L</source>
      <translation>Alt+L</translation>
    </message>
    <message>
      <source>&amp;Lock Guides</source>
      <translation type="unfinished" >&amp;Закључај водиље</translation>
    </message>
    <message>
      <source>Appl&amp;y to All Pages</source>
      <translation>Примен&amp;и на све стране</translation>
    </message>
    <message>
      <source>Alt+Y</source>
      <translation>Alt+Y</translation>
    </message>
    <message>
      <source>&amp;Number:</source>
      <translation>&amp;Број:</translation>
    </message>
    <message>
      <source>U&amp;se Gap:</source>
      <translation>К&amp;ористи размак:</translation>
    </message>
    <message>
      <source>Alt+S</source>
      <translation>Alt+S</translation>
    </message>
    <message>
      <source>Nu&amp;mber:</source>
      <translation>&amp;Број:</translation>
    </message>
    <message>
      <source>Use &amp;Gap:</source>
      <translation>Користи &amp;размак:</translation>
    </message>
    <message>
      <source>Alt+G</source>
      <translation>Alt+G</translation>
    </message>
    <message>
      <source>Refer To</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Page</source>
      <translation type="unfinished" >&amp;Страна</translation>
    </message>
    <message>
      <source>Alt+P</source>
      <translation>Alt+P</translation>
    </message>
    <message>
      <source>M&amp;argins</source>
      <translation>М&amp;аргине</translation>
    </message>
    <message>
      <source>S&amp;election</source>
      <translation>И&amp;збор</translation>
    </message>
    <message>
      <source>&amp;Misc</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Delete all guides from the current page</source>
      <translation>Избриши све водиље са текуће стране</translation>
    </message>
    <message>
      <source>Delete all guides from the current document</source>
      <translation>Избриши све водиље из текућег документа</translation>
    </message>
    <message>
      <source>&amp;Single</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Column/Row</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Delete Guides from Current &amp;Page</source>
      <translation>Избриши водиље са текуће &amp;стране</translation>
    </message>
    <message>
      <source>Delete Guides from &amp;All Pages</source>
      <translation>Избриши водиље са с&amp;вих страна</translation>
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
      <translation type="unfinished" />
    </message>
    <message>
      <source>Link</source>
      <translation type="unfinished" >Веза</translation>
    </message>
    <message>
      <source>Scribus Online Help</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Contents</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Search</source>
      <translation type="unfinished" >&amp;Тражи</translation>
    </message>
    <message>
      <source>Se&amp;arch</source>
      <translation>Тр&amp;ажи</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation type="unfinished" >&amp;Нови</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation type="unfinished" >&amp;Обриши</translation>
    </message>
    <message>
      <source>De&amp;lete All</source>
      <translation>Обр&amp;иши све</translation>
    </message>
    <message>
      <source>Book&amp;marks</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Print...</source>
      <translation type="unfinished" >Ш&amp;тампај...</translation>
    </message>
    <message>
      <source>E&amp;xit</source>
      <translation>Из&amp;ађи</translation>
    </message>
    <message>
      <source>Searching is case unsensitive</source>
      <translation>Тражење је неосетљиво на велика и мала слова</translation>
    </message>
    <message>
      <source>Find</source>
      <translation>Фражи</translation>
    </message>
    <message>
      <source>Search Term:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>New Bookmark</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>New Bookmark's Title:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;File</source>
      <translation type="unfinished" >&amp;Фајл</translation>
    </message>
    <message>
      <source>&amp;Find...</source>
      <translation>&amp;Тражи...</translation>
    </message>
    <message>
      <source>Find &amp;Next</source>
      <translation>Нађи &amp;наредно</translation>
    </message>
    <message>
      <source>Find &amp;Previous</source>
      <translation>Нађи &amp;претходно</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation type="unfinished" >&amp;Уреди</translation>
    </message>
    <message>
      <source>&amp;Add Bookmark</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>D&amp;elete All</source>
      <translation>Из&amp;бриши све</translation>
    </message>
    <message>
      <source>&amp;Bookmarks</source>
      <translation type="unfinished" >&amp;Маркери</translation>
    </message>
    <message>
      <source>Relevance</source>
      <translation>Важност</translation>
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
      <source>A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</source>
      <translation>Појавиће се прозор који приказује сва могућа спајања цртицом за сваку реч када користите опцију „Екстра>Спајај текст цртицом“.</translation>
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
      <translation>Подаци о слици</translation>
    </message>
    <message>
      <source>General Info</source>
      <translation>Општи подаци</translation>
    </message>
    <message>
      <source>Date / Time:</source>
      <translation>Датум / Време:</translation>
    </message>
    <message>
      <source>Has Embedded Profile:</source>
      <translation>Има укључен профил:</translation>
    </message>
    <message>
      <source>Profile Name:</source>
      <translation>Име профила:</translation>
    </message>
    <message>
      <source>Has Embedded Paths:</source>
      <translation>Има укључене стазе:</translation>
    </message>
    <message>
      <source>Has Layers:</source>
      <translation>Има слојеве:</translation>
    </message>
    <message>
      <source>EXIF Info</source>
      <translation>EXIF подаци</translation>
    </message>
    <message>
      <source>Artist:</source>
      <translation>Уметник:</translation>
    </message>
    <message>
      <source>Comment:</source>
      <translation>Коментар:</translation>
    </message>
    <message>
      <source>User Comment:</source>
      <translation>Корисников коментар:</translation>
    </message>
    <message>
      <source>Camera Model:</source>
      <translation>Модел фото апарата:</translation>
    </message>
    <message>
      <source>Camera Manufacturer:</source>
      <translation>Произвођач фото апарата:</translation>
    </message>
    <message>
      <source>Description:</source>
      <translation>Опис:</translation>
    </message>
    <message>
      <source>Copyright:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scanner Model:</source>
      <translation>Тип скенера:</translation>
    </message>
    <message>
      <source>Scanner Manufacturer:</source>
      <translation>Произвођач скенера:</translation>
    </message>
    <message>
      <source>Exposure time</source>
      <translation>Време експозиције</translation>
    </message>
    <message>
      <source>Aperture:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>ISO equiv.:</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>ImportDialog</name>
    <message>
      <source>Choose Styles</source>
      <translation>Изабери стилове</translation>
    </message>
    <message>
      <source>Available Styles</source>
      <translation>Доступни стилови</translation>
    </message>
    <message>
      <source>Character Styles</source>
      <translation>Стилови знакова</translation>
    </message>
    <message>
      <source>Paragraph Styles</source>
      <translation>Стилови параграфа</translation>
    </message>
    <message>
      <source>Line Styles</source>
      <translation>Стилови линија</translation>
    </message>
    <message>
      <source>In case of a name clash</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Rename imported style</source>
      <translation>Преименуј увезени стил</translation>
    </message>
    <message>
      <source>Replace existing style</source>
      <translation>Уклони постојећи стил</translation>
    </message>
  </context>
  <context>
    <name>ImportPSPlugin</name>
    <message>
      <source>Import &amp;EPS/PS...</source>
      <translation type="unfinished" >Увези &amp;EPS/PS...</translation>
    </message>
    <message>
      <source>Imports EPS Files</source>
      <translation>Увози EPS фајлове</translation>
    </message>
    <message>
      <source>Imports most EPS files into the current document,
converting their vector data into Scribus objects.</source>
      <translation>Увози већину EPS фајлова у текући документ, преводећи њихове векторске податке у Скрибусове објекте.</translation>
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
      <translation>Убаци страну</translation>
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
      <source>&amp;Insert</source>
      <translation type="unfinished" >Уметн&amp;и</translation>
    </message>
    <message>
      <source>Master Pages</source>
      <translation>Главне стране</translation>
    </message>
    <message>
      <source>&amp;Master Page:</source>
      <translation>&amp;Главна страна:</translation>
    </message>
    <message>
      <source>Page Size</source>
      <translation type="unfinished" >Величина папира</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation type="unfinished" >&amp;Величина:</translation>
    </message>
    <message>
      <source>Orie&amp;ntation:</source>
      <translation type="unfinished" >Усм&amp;ерење:</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation type="unfinished" >Усправно</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation type="unfinished" >Водоравно</translation>
    </message>
    <message>
      <source>&amp;Width:</source>
      <translation type="unfinished" >Ш&amp;ирина:</translation>
    </message>
    <message>
      <source>&amp;Height:</source>
      <translation type="unfinished" >&amp;Висина:</translation>
    </message>
    <message>
      <source>Move Objects with their Page</source>
      <translation>Премести објекте са њиховом страном</translation>
    </message>
  </context>
  <context>
    <name>InsertAFrame</name>
    <message>
      <source>Open</source>
      <translation type="unfinished" >Отвори</translation>
    </message>
    <message>
      <source>&lt;b>Insert a text frame&lt;/b>&lt;br/>A text frame allows you to enter any text in a defined position with the formatting you choose. You may select a text file on the Options tab if you want to immediately import a document into the frame. Scribus supports a wide variety of importable format from plain text to OpenOffice.org.&lt;br/>Your text may be edited and formatted on the page directly or in the simple Story Editor.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&lt;b>Insert an image frame&lt;/b>&lt;br/>An image frame allows you to place an image onto your page. Various image effects may be applied or combined including transparencies, brightness, posterisation that allow retouching or the creation of interesting visual results. Image scaling and shaping is performed with the Properties Palette.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>InsertAFrameBase</name>
    <message>
      <source>Insert A Frame</source>
      <translation>Убаци оквир</translation>
    </message>
    <message>
      <source>T&amp;ype</source>
      <translation>Т&amp;ип</translation>
    </message>
    <message>
      <source>&amp;Text Frame</source>
      <translation type="unfinished" >&amp;Текстуални оквир</translation>
    </message>
    <message>
      <source>Alt+T</source>
      <translation>Alt+T</translation>
    </message>
    <message>
      <source>&amp;Image Frame</source>
      <translation>&amp;Оквир слике</translation>
    </message>
    <message>
      <source>Alt+I</source>
      <translation>Alt+I</translation>
    </message>
    <message>
      <source>T&amp;able</source>
      <translation>Т&amp;абела</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>Shape</source>
      <translation>Облик</translation>
    </message>
    <message>
      <source>Polygon</source>
      <translation type="unfinished" >Полигон</translation>
    </message>
    <message>
      <source>&amp;Location</source>
      <translation>&amp;Локација</translation>
    </message>
    <message>
      <source>Page Placement</source>
      <translation>Постављање на страни</translation>
    </message>
    <message>
      <source>Current Page</source>
      <translation>Текућа страна</translation>
    </message>
    <message>
      <source>Selecting this will place the frame only on the current page.</source>
      <translation>Овај избор ће поставити оквир само на текућу страну.</translation>
    </message>
    <message>
      <source>Range of Pages:</source>
      <translation>Опсег страна:</translation>
    </message>
    <message>
      <source>Selecting this will place frame on the selected range. </source>
      <translation>Овај избор ће поставити оквир у изабраном опсегу.</translation>
    </message>
    <message>
      <source>Position of Frame</source>
      <translation>Положај оквира</translation>
    </message>
    <message>
      <source>Top Left of Page</source>
      <translation>Горе лево на страни</translation>
    </message>
    <message>
      <source>Selecting this puts the frame on the top left with postion 0,0</source>
      <translation>Овај избор ће поставити оквир у горњи леви положај 0,0</translation>
    </message>
    <message>
      <source>Top Left of Margins</source>
      <translation>Горе лево на маргини</translation>
    </message>
    <message>
      <source>Selecting this places the frame in the upper left of the page margins defined in your doc setup.</source>
      <translation>Овај избор ће поставити оквир у горе лево на маргине стране одређене у подешењима документа.</translation>
    </message>
    <message>
      <source>Custom Position:</source>
      <translation>Произвољан положај:</translation>
    </message>
    <message>
      <source>Set the dimensions wished below in the X: Y: dialog below.</source>
      <translation>Упиши жељену димензију у X: Y: поља доле.</translation>
    </message>
    <message>
      <source>X:</source>
      <translation type="unfinished" >X:</translation>
    </message>
    <message>
      <source>Y:</source>
      <translation type="unfinished" >Y:</translation>
    </message>
    <message>
      <source>&amp;Size</source>
      <translation type="unfinished" >&amp;Величина</translation>
    </message>
    <message>
      <source>Same as the Page</source>
      <translation>Исто као и страна</translation>
    </message>
    <message>
      <source>Same as the Page Margins</source>
      <translation>Исто као и маргине стране</translation>
    </message>
    <message>
      <source>Custom Size:</source>
      <translation>Произвољна величина:</translation>
    </message>
    <message>
      <source>Height:</source>
      <translation type="unfinished" >Висина:</translation>
    </message>
    <message>
      <source>Width:</source>
      <translation type="unfinished" >Ширина:</translation>
    </message>
    <message>
      <source>&amp;Options</source>
      <translation>&amp;Опције</translation>
    </message>
    <message>
      <source>Source Image:</source>
      <translation>Изворна слика:</translation>
    </message>
    <message>
      <source>&amp;Select File...</source>
      <translation>&amp;Изабери фајл...</translation>
    </message>
    <message>
      <source>Alt+S</source>
      <translation>Alt+S</translation>
    </message>
    <message>
      <source>There are no options for this type of frame</source>
      <translation>Не постоје опције за овај тип оквира</translation>
    </message>
    <message>
      <source>Source Document:</source>
      <translation>Изворни документ</translation>
    </message>
    <message>
      <source>Columns:</source>
      <translation>Колоне:</translation>
    </message>
    <message>
      <source>Gap:</source>
      <translation>Размак:</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation type="unfinished" >&amp;У реду</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation type="unfinished" >&amp;Откажи</translation>
    </message>
    <message>
      <source>Link Created Frames</source>
      <translation>Повежи направљене оквире</translation>
    </message>
    <message>
      <source>All Pages</source>
      <translation type="unfinished" >Све странице</translation>
    </message>
    <message>
      <source>...</source>
      <translation>...</translation>
    </message>
    <message>
      <source>Top Left of Bleed</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Selecting this places the frame in the upper left of the page bleed defined in your doc setup.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Same as the Bleed</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Same as the Imported Image</source>
      <translation>Исто као и увезена слика</translation>
    </message>
  </context>
  <context>
    <name>InsertTable</name>
    <message>
      <source>Insert Table</source>
      <translation>Убаци табелу</translation>
    </message>
    <message>
      <source>Number of rows:</source>
      <translation>Број редова:</translation>
    </message>
    <message>
      <source>Number of columns:</source>
      <translation>Број колона:</translation>
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
      <source>Do you really want to delete this script?</source>
      <translation>Да ли стварно желиш да избришеш ову скрипту?</translation>
    </message>
    <message>
      <source>Adds a new Script, predefines a function with the same name. If you want to use this script as an &quot;Open Action&quot; script be sure not to change the name of the function.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>LayerPalette</name>
    <message>
      <source>Layers</source>
      <translation>Слојеви</translation>
    </message>
    <message>
      <source>Delete Layer</source>
      <translation>Обриши слој</translation>
    </message>
    <message>
      <source>Name</source>
      <translation type="unfinished" >Име</translation>
    </message>
    <message>
      <source>Do you want to delete all objects on this layer too?</source>
      <translation>Да ли желиш да избришеш све објекте на овом слоју такође?</translation>
    </message>
    <message>
      <source>Add a new layer</source>
      <translation>Додај нови слој</translation>
    </message>
    <message>
      <source>Delete layer</source>
      <translation>Обриши слој</translation>
    </message>
    <message>
      <source>Raise layer</source>
      <translation>Подигни слој</translation>
    </message>
    <message>
      <source>Lower layer</source>
      <translation>Спусти слој</translation>
    </message>
    <message>
      <source>Opacity:</source>
      <translation type="unfinished" >Непрозирност:</translation>
    </message>
    <message>
      <source> %</source>
      <translation type="unfinished" > %</translation>
    </message>
    <message>
      <source>Blend Mode:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Normal</source>
      <translation type="unfinished" >Нормално</translation>
    </message>
    <message>
      <source>Darken</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Lighten</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Multiply</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Screen</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Overlay</source>
      <translation type="unfinished" />
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
      <source>Color Dodge</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color Burn</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Exclusion</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Hue</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Saturation</source>
      <translation type="unfinished" >Засићење</translation>
    </message>
    <message>
      <source>Color</source>
      <translation type="unfinished" >Боја</translation>
    </message>
    <message>
      <source>Luminosity</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color of the Layer Indicator - Each layer has a color assigned to display on the canvas when layer indicators are enabled. You can double click to edit the color. </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Make Layer Visible - Uncheck to hide the layer from the display </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Print Layer - Uncheck to disable printing. </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Lock or Unlock Layer - Unchecked is unlocked </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Text flows around objects in lower Layers - Enabling this forces text frames to flow around other objects, even in layers below</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Outline Mode - Toggles the 'wireframe' display of objects to speed the display of very complex objects.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Name of the Layer - Double clicking on the name of a layer enabled editing</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Duplicates the current layer</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>LineFormate</name>
    <message>
      <source>Edit Line Styles</source>
      <translation>Уређивање стилова линија</translation>
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
      <source>Copy of %1</source>
      <translation>Копија од %1</translation>
    </message>
    <message>
      <source>New Style</source>
      <translation>Нови стил</translation>
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
      <source>&amp;Import</source>
      <translation type="unfinished" >&amp;Увези</translation>
    </message>
    <message>
      <source>Do you really want to delete this style?</source>
      <translation>Да ли стварно желиш да избришеш овај стил?</translation>
    </message>
  </context>
  <context>
    <name>LineStyleWBase</name>
    <message>
      <source>LineStyleWBase</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>%</source>
      <translation>%</translation>
    </message>
    <message>
      <source>Line Width:</source>
      <translation type="unfinished" >Ширина линије:</translation>
    </message>
  </context>
  <context>
    <name>LineStyleWidget</name>
    <message>
      <source> pt</source>
      <translation type="unfinished" > тач.</translation>
    </message>
    <message>
      <source>Flat Cap</source>
      <translation type="unfinished" >Раван поклопац</translation>
    </message>
    <message>
      <source>Square Cap</source>
      <translation type="unfinished" >Квадратни поклопац</translation>
    </message>
    <message>
      <source>Round Cap</source>
      <translation type="unfinished" >Кружни поклопац</translation>
    </message>
    <message>
      <source>Miter Join</source>
      <translation type="unfinished" >Угаони спој</translation>
    </message>
    <message>
      <source>Bevel Join</source>
      <translation type="unfinished" >Коси спој</translation>
    </message>
    <message>
      <source>Round Join</source>
      <translation type="unfinished" >Кружни спој</translation>
    </message>
    <message>
      <source>Add a new line</source>
      <translation>Додај нову линију</translation>
    </message>
    <message>
      <source>Remove a line</source>
      <translation>Уклони линију</translation>
    </message>
    <message>
      <source>Line style</source>
      <translation>Стил линије</translation>
    </message>
    <message>
      <source>Line width</source>
      <translation>Дебљина линије</translation>
    </message>
    <message>
      <source>End style</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Join style</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Line color</source>
      <translation>Боја линије</translation>
    </message>
    <message>
      <source>Line shade</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>LoadSavePlugin</name>
    <message>
      <source>All Files (*)</source>
      <translation type="unfinished" >Сви фајлови (*)</translation>
    </message>
    <message>
      <source>No File Loader Plugins Found</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>LoremManager</name>
    <message>
      <source>Select Lorem Ipsum</source>
      <translation>Изабери Lorem Ipsum</translation>
    </message>
    <message>
      <source>Author:</source>
      <translation type="unfinished" >Аутор:</translation>
    </message>
    <message>
      <source>Get More:</source>
      <translation>Добави више:</translation>
    </message>
    <message>
      <source>XML File:</source>
      <translation>XML фајл:</translation>
    </message>
    <message>
      <source>Lorem Ipsum</source>
      <translation>Lorem Ipsum</translation>
    </message>
    <message>
      <source>Paragraphs:</source>
      <translation>Параграфи:</translation>
    </message>
    <message>
      <source>Alt+O</source>
      <translation type="unfinished" >Alt+O</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation type="unfinished" >Alt+C</translation>
    </message>
    <message>
      <source>Standard Lorem Ipsum</source>
      <translation>Уоблићајни Lorem Ipsum</translation>
    </message>
  </context>
  <context>
    <name>MarginDialog</name>
    <message>
      <source>Manage Page Properties</source>
      <translation>Управљај својствима стране</translation>
    </message>
    <message>
      <source>Page Size</source>
      <translation type="unfinished" >Величина папира</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation type="unfinished" >&amp;Величина:</translation>
    </message>
    <message>
      <source>Orie&amp;ntation:</source>
      <translation type="unfinished" >Усм&amp;ерење:</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation type="unfinished" >Усправно</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation type="unfinished" >Водоравно</translation>
    </message>
    <message>
      <source>&amp;Width:</source>
      <translation type="unfinished" >Ш&amp;ирина:</translation>
    </message>
    <message>
      <source>&amp;Height:</source>
      <translation type="unfinished" >&amp;Висина:</translation>
    </message>
    <message>
      <source>Move Objects with their Page</source>
      <translation>Помери објекте са њиховом страном</translation>
    </message>
    <message>
      <source>Type:</source>
      <translation type="unfinished" >Врста:</translation>
    </message>
    <message>
      <source>Margin Guides</source>
      <translation type="unfinished" >Водиље маргина</translation>
    </message>
    <message>
      <source>Other Settings</source>
      <translation>Остала подешавања</translation>
    </message>
    <message>
      <source>Master Page:</source>
      <translation>Главна страна:</translation>
    </message>
  </context>
  <context>
    <name>MarginWidget</name>
    <message>
      <source>&amp;Bottom:</source>
      <translation type="unfinished" >&amp;Дно:</translation>
    </message>
    <message>
      <source>&amp;Top:</source>
      <translation type="unfinished" >&amp;Врх:</translation>
    </message>
    <message>
      <source>&amp;Right:</source>
      <translation type="unfinished" >&amp;Десно:</translation>
    </message>
    <message>
      <source>&amp;Left:</source>
      <translation type="unfinished" >&amp;Лево:</translation>
    </message>
    <message>
      <source>Distance between the top margin guide and the edge of the page</source>
      <translation type="unfinished" >Растојање између водиље горње маргине и обода странице</translation>
    </message>
    <message>
      <source>Distance between the bottom margin guide and the edge of the page</source>
      <translation type="unfinished" >Растојање између водиље доње маргине и обода странице</translation>
    </message>
    <message>
      <source>&amp;Inside:</source>
      <translation type="unfinished" >&amp;Унутра:</translation>
    </message>
    <message>
      <source>O&amp;utside:</source>
      <translation type="unfinished" >Спо&amp;ља:</translation>
    </message>
    <message>
      <source>Preset Layouts:</source>
      <translation>Предефинисање распореда страна:</translation>
    </message>
    <message>
      <source>Apply the margin changes to all existing pages in the document</source>
      <translation>Примени промене маргина на све постојеће стране документа</translation>
    </message>
    <message>
      <source>Printer Margins...</source>
      <translation>Маргине штампача...</translation>
    </message>
    <message>
      <source>Import the margins for the selected page size from the available printers.</source>
      <translation>Увези маргине за изабрану величину папира од доступних штампача.</translation>
    </message>
    <message>
      <source>Apply settings to:</source>
      <translation>Примени подешења на:</translation>
    </message>
    <message>
      <source>All Document Pages</source>
      <translation>Све стране документа</translation>
    </message>
    <message>
      <source>All Master Pages</source>
      <translation>Све главне стране</translation>
    </message>
    <message>
      <source>Apply the margin changes to all existing master pages in the document</source>
      <translation>Примени промене маргина на све постојеће главне стране документа</translation>
    </message>
    <message>
      <source>Margin Guides</source>
      <translation type="unfinished" >Водиље маргина</translation>
    </message>
    <message>
      <source>Top:</source>
      <translation>Горе:</translation>
    </message>
    <message>
      <source>Bottom:</source>
      <translation>Доле:</translation>
    </message>
    <message>
      <source>Distance for bleed from the top of the physical page</source>
      <translation type="unfinished" >Растојање за цурење од врха физичке странице</translation>
    </message>
    <message>
      <source>Distance for bleed from the bottom of the physical page</source>
      <translation type="unfinished" >Растојање за цурење од дна физичке странице</translation>
    </message>
    <message>
      <source>Distance for bleed from the left of the physical page</source>
      <translation type="unfinished" >Растојање за цурење с лева физичке странице</translation>
    </message>
    <message>
      <source>Distance for bleed from the right of the physical page</source>
      <translation type="unfinished" >Растојање за цурење с десна физичке странице</translation>
    </message>
    <message>
      <source>Bleeds</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Inside:</source>
      <translation>Унутар:</translation>
    </message>
    <message>
      <source>Outside:</source>
      <translation>Споља:</translation>
    </message>
    <message>
      <source>Left:</source>
      <translation>Лево:</translation>
    </message>
    <message>
      <source>Right:</source>
      <translation>Десно:</translation>
    </message>
    <message>
      <source>Distance between the left margin guide and the edge of the page. If a double-sided, 3 or 4-fold layout is selected, this margin space can be used to achieve the correct margins for binding</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Distance between the right margin guide and the edge of the page. If a double-sided, 3 or 4-fold layout is selected, this margin space can be used to achieve the correct margins for binding</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>MasterPagesPalette</name>
    <message>
      <source>Edit Master Pages</source>
      <translation>Уреди главне стране</translation>
    </message>
    <message>
      <source>Do you really want to delete this master page?</source>
      <translation>Да ли стварно желиш да избришеш ову главну страну?</translation>
    </message>
    <message>
      <source>&amp;Name:</source>
      <translation type="unfinished" >&amp;Име:</translation>
    </message>
    <message>
      <source>New Master Page</source>
      <translation>Нова главна страна</translation>
    </message>
    <message>
      <source>Name:</source>
      <translation type="unfinished" >Име:</translation>
    </message>
    <message>
      <source>New MasterPage</source>
      <translation>Нова главна страна</translation>
    </message>
    <message>
      <source>Copy #%1 of </source>
      <translation type="unfinished" >Копија #%1 од</translation>
    </message>
    <message>
      <source>Duplicate the selected master page</source>
      <translation>Дуплирај изабрану главну страну</translation>
    </message>
    <message>
      <source>Delete the selected master page</source>
      <translation>Избриши изабрану главну страну</translation>
    </message>
    <message>
      <source>Add a new master page</source>
      <translation>Додај нову главну страну</translation>
    </message>
    <message>
      <source>Import master pages from another document</source>
      <translation>Увези главну страну из другог документа</translation>
    </message>
    <message>
      <source>New Master Page %1</source>
      <translation>Нова главна страна %1</translation>
    </message>
    <message>
      <source>Unable to Rename Master Page</source>
      <translation>Не могу да преименујем главну страну</translation>
    </message>
    <message>
      <source>The Normal page is not allowed to be renamed.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Rename Master Page</source>
      <translation>Преименуј главну страну</translation>
    </message>
    <message>
      <source>New Name:</source>
      <translation>Ново име:</translation>
    </message>
    <message>
      <source>Copy #%1 of %2</source>
      <translation>Копија #%1 од %2</translation>
    </message>
  </context>
  <context>
    <name>Mdup</name>
    <message>
      <source>Multiple Duplicate</source>
      <translation>Многоструки дупликат</translation>
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
      <source>pt</source>
      <translation type="unfinished" >pt</translation>
    </message>
  </context>
  <context>
    <name>MergeDoc</name>
    <message>
      <source>Import Page(s)</source>
      <translation>Увези страницу(е)</translation>
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
      <source>Open</source>
      <translation>Отвори</translation>
    </message>
    <message>
      <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
      <translation>Документи (*.sla *.sla.gz *.scd *.scd.gz);;Сви фајлови (*)</translation>
    </message>
    <message>
      <source> from %1</source>
      <translation> из %1</translation>
    </message>
    <message>
      <source>&amp;From Document:</source>
      <translation>&amp;Из документа:</translation>
    </message>
    <message>
      <source>Chan&amp;ge...</source>
      <translation>Про&amp;мени...</translation>
    </message>
    <message>
      <source>&amp;Import Page(s):</source>
      <translation>&amp;Увези страну(е):</translation>
    </message>
    <message>
      <source>Before Page</source>
      <translation>Пре стране</translation>
    </message>
    <message>
      <source>After Page</source>
      <translation>После стране</translation>
    </message>
    <message>
      <source>At End</source>
      <translation>На крају</translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation type="unfinished" >&amp;Увези</translation>
    </message>
    <message>
      <source>Import Master Page</source>
      <translation>Увези главну страну</translation>
    </message>
    <message>
      <source>&amp;Import Master Page</source>
      <translation>&amp;Увези главну страну</translation>
    </message>
    <message>
      <source>Insert a comma separated list of tokens import where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>MissingFont</name>
    <message>
      <source>Missing Font</source>
      <translation type="unfinished" >Недостаје фонт</translation>
    </message>
    <message>
      <source>The Font %1 is not installed.</source>
      <translation type="unfinished" >Фонт %1 није инсталиран.</translation>
    </message>
    <message>
      <source>Use</source>
      <translation type="unfinished" >Користи</translation>
    </message>
    <message>
      <source>instead</source>
      <translation type="unfinished" >уместо</translation>
    </message>
  </context>
  <context>
    <name>ModeToolBar</name>
    <message>
      <source>Tools</source>
      <translation type="unfinished" >Алати</translation>
    </message>
    <message>
      <source>Properties...</source>
      <translation type="unfinished" >Својства...</translation>
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
      <source>Move Page(s)</source>
      <translation>Помери страницу(е)</translation>
    </message>
    <message>
      <source>Before Page</source>
      <translation>Пре стране</translation>
    </message>
    <message>
      <source>After Page</source>
      <translation>После стране</translation>
    </message>
    <message>
      <source>At End</source>
      <translation>На крају</translation>
    </message>
    <message>
      <source>To:</source>
      <translation type="unfinished" >За:</translation>
    </message>
    <message>
      <source>Number of copies:</source>
      <translation>Број копија:</translation>
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
      <source>Use &amp;Bounding Box</source>
      <translation>Користи  оквирни правоугаоник                  &amp;</translation>
    </message>
    <message>
      <source>&amp;Use Contour Line</source>
      <translation>&amp;Користи контуру</translation>
    </message>
    <message>
      <source> %</source>
      <translation> %</translation>
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
      <source>Saturation of color of text stroke</source>
      <translation>Засићење боје текста</translation>
    </message>
    <message>
      <source>Saturation of color of text fill</source>
      <translation>Засићење боје испуњеног текста</translation>
    </message>
    <message>
      <source>Line Spacing</source>
      <translation>Проред</translation>
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
      <translation>Подеси полупречник за заобљавање углова</translation>
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
      <source>Column width</source>
      <translation>Ширина колона</translation>
    </message>
    <message>
      <source>Right to Left Writing</source>
      <translation>Писање с десна на лево</translation>
    </message>
    <message>
      <source>Start Arrow:</source>
      <translation>Изглед почетка стрелице:</translation>
    </message>
    <message>
      <source>End Arrow:</source>
      <translation>Изглед краја стрелице:</translation>
    </message>
    <message>
      <source>Fixed Linespacing</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Automatic Linespacing</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Align to Baseline Grid</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Actual X-DPI:</source>
      <translation>Стварна X-тпи:</translation>
    </message>
    <message>
      <source>Actual Y-DPI:</source>
      <translation>Стварна Y-тпи:</translation>
    </message>
    <message>
      <source>Offset to baseline of characters</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scaling height of characters</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Manual Tracking</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Name &quot;%1&quot; isn't unique.&lt;br/>Please choose another.</source>
      <translation>Име &quot;%1&quot; Није јединствено.&lt;br/>Изабери друго.</translation>
    </message>
    <message>
      <source>Fill Rule</source>
      <translation>Начин попуњавања</translation>
    </message>
    <message>
      <source>Even-Odd</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Non Zero</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Overprinting</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Knockout</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Overprint</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color of text stroke and/or drop shadow, depending which is chosen.If both are chosen, then they share the same color.</source>
      <translation>Боја уоквирења текста или бачене сенке, у зависности од тога која је опција одабрана. Ако су обе активне онда деле исту боју.</translation>
    </message>
    <message>
      <source>Color of selected text. If Outline text decoration is enabled, this color will be the fill color. If Drop Shadow Text is enabled, then this will be the top most color.</source>
      <translation>Боја изабраног текста. Ако је уоквиравање текста изабрано, ово ће бити боја попуњавања. Ако је изабрана и бачена сенка, онда ће ово бити \&quot;највиша\&quot; боја.</translation>
    </message>
    <message>
      <source>Gap:</source>
      <translation>Размак:</translation>
    </message>
    <message>
      <source>Width:</source>
      <translation type="unfinished" >Ширина:</translation>
    </message>
    <message>
      <source>Text &amp;Flow Around Frame</source>
      <translation>Текст тече око рама</translation>
    </message>
    <message>
      <source>Disabled</source>
      <translation>Не</translation>
    </message>
    <message>
      <source>Use Frame &amp;Shape</source>
      <translation>Користи облик рама</translation>
    </message>
    <message>
      <source>Image Effects</source>
      <translation>Ефекти на слици</translation>
    </message>
    <message>
      <source>Extended Image Properties</source>
      <translation>Додатна својства слике</translation>
    </message>
    <message>
      <source>Disable text flow from lower frames around object</source>
      <translation>Искључи проток текста из оквира постављених испод објекта</translation>
    </message>
    <message>
      <source>Use the frame shape for text flow of text frames below the object.</source>
      <translation>За ток текста користи облик из текстуалних оквира испод објекта</translation>
    </message>
    <message>
      <source>Use the bounding box, which is always rectangular, instead of the frame's shape for text flow of text frames below the object. </source>
      <translation>Користи оквирну линију, која је увек правоугаона, уместо облика рама за ток текста из текстуалних оквира испод објекта.</translation>
    </message>
    <message>
      <source>Transparency Settings</source>
      <translation>Подешења провидности</translation>
    </message>
    <message>
      <source>&amp;Group</source>
      <translation type="unfinished" >&amp;Група</translation>
    </message>
    <message>
      <source>Opacity:</source>
      <translation type="unfinished" >Непрозирност:</translation>
    </message>
    <message>
      <source>Blend Mode:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Normal</source>
      <translation type="unfinished" >Нормално</translation>
    </message>
    <message>
      <source>Darken</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Lighten</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Multiply</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Screen</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Overlay</source>
      <translation type="unfinished" />
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
      <source>Hue</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color</source>
      <translation type="unfinished" >Боја</translation>
    </message>
    <message>
      <source>Group the selected objects</source>
      <translation>Групиши изабране објекте</translation>
    </message>
    <message>
      <source>Destroys the selected group</source>
      <translation>Растури изабрану групу</translation>
    </message>
    <message>
      <source>Auto</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>When chosen, the contour line can be edited with the Edit Shape Tool on the palette further above. When edited via the shape palette, this becomes a second separate line originally based on the frame's shape for text flow of text frames below the object. T</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Click and hold down to select the line spacing mode.</source>
      <translation>Кликни и држи притиснут тастер миша да би изабрао проред између редова текста.</translation>
    </message>
    <message>
      <source>Default</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Stair Step</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Skew</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Flip Text</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Type:</source>
      <translation type="unfinished" >Врста:</translation>
    </message>
    <message>
      <source>Use Image Clip Path</source>
      <translation>Користи стазу за опсецање</translation>
    </message>
    <message>
      <source>Paragraph St&amp;yle:</source>
      <translation>Ст&amp;ил параграфа:</translation>
    </message>
    <message>
      <source>Character St&amp;yle:</source>
      <translation>Ст&amp;ил знака:</translation>
    </message>
    <message>
      <source>Optical Margins:</source>
      <translation>Оптичке маргине:</translation>
    </message>
    <message>
      <source>Word Tracking</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Min:</source>
      <translation>Мин:</translation>
    </message>
    <message>
      <source>Norm:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Glyph Extension</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Max:</source>
      <translation>Макс:</translation>
    </message>
    <message>
      <source>Use the clipping path of the image</source>
      <translation>Користи линију опсецања слике</translation>
    </message>
    <message>
      <source>Paragraph style of currently selected text or paragraph</source>
      <translation>Стил параграфа тренутно изабраног текста или параграфа</translation>
    </message>
    <message>
      <source>Character style of currently selected text or paragraph</source>
      <translation>Стил знака тренутно изабраног текста или параграфа</translation>
    </message>
    <message>
      <source>Minimal width of spaces between words</source>
      <translation>Најмања ширина размака између речи</translation>
    </message>
    <message>
      <source>Normal width of spaces between words</source>
      <translation>Уобичајна ширина размака између речи</translation>
    </message>
    <message>
      <source>Minimal shrinkage of glyphs for justification</source>
      <translation>Најмање скупљање знака за коришћење при поравнавању текста</translation>
    </message>
    <message>
      <source>Maximal extension of glyphs for justification</source>
      <translation>Највеће проширење знака за коришћење при поравнавању текста</translation>
    </message>
    <message>
      <source>Uses hanging punctuation and margin kerning to achieve nicer looking columns</source>
      <translation type="unfinished" />
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
      <source>OK</source>
      <translation>У реду</translation>
    </message>
    <message>
      <source>Name &quot;%1&quot; isn't unique.&lt;br/>Please choose another.</source>
      <translation>Име &quot;%1&quot; није јединствено.&lt;br/>Изабери неко друго.</translation>
    </message>
    <message>
      <source>pt</source>
      <translation type="unfinished" >pt</translation>
    </message>
  </context>
  <context>
    <name>MultiProgressDialogBase</name>
    <message>
      <source>Progress</source>
      <translation>Напредовање</translation>
    </message>
    <message>
      <source>Overall Progress:</source>
      <translation>Укупно напредовање:</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation type="unfinished" >&amp;Откажи</translation>
    </message>
  </context>
  <context>
    <name>MultipleDuplicate</name>
    <message>
      <source>&amp;Horizontal Shift:</source>
      <translation type="unfinished" >&amp;Водоравна промена:</translation>
    </message>
    <message>
      <source>&amp;Vertical Shift:</source>
      <translation type="unfinished" >&amp;Усправна промена:</translation>
    </message>
    <message>
      <source>&amp;Horizontal Gap:</source>
      <translation>&amp;Водоравни размак:</translation>
    </message>
    <message>
      <source>&amp;Vertical Gap:</source>
      <translation>&amp;Усправни размак:</translation>
    </message>
  </context>
  <context>
    <name>MultipleDuplicateBase</name>
    <message>
      <source>Multiple Duplicate</source>
      <translation>Многострукио умножавање</translation>
    </message>
    <message>
      <source>&amp;By Number of Copies</source>
      <translation>&amp;По броју жељених копија</translation>
    </message>
    <message>
      <source>&amp;Number of Copies:</source>
      <translation type="unfinished" >&amp;Број копија:</translation>
    </message>
    <message>
      <source>Create &amp;Gap Between Items Of</source>
      <translation>Направи &amp;размак између ставки од</translation>
    </message>
    <message>
      <source>Alt+G</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Shift Created Items By</source>
      <translation>&amp;Помери направљене ставке за</translation>
    </message>
    <message>
      <source>Alt+S</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Horizontal Shift:</source>
      <translation>&amp;Водоравно померање:</translation>
    </message>
    <message>
      <source>&amp;Vertical Shift:</source>
      <translation>&amp;Усправно померање:</translation>
    </message>
    <message>
      <source>By &amp;Rows &amp;&amp; Columns</source>
      <translation>По &amp;редовима и колонама</translation>
    </message>
    <message>
      <source>Vertical Gap:</source>
      <translation>Усправни размак:</translation>
    </message>
    <message>
      <source>Horizontal Gap:</source>
      <translation>Водоравни размак:</translation>
    </message>
    <message>
      <source>Number of Rows:</source>
      <translation type="unfinished" >Број редова:</translation>
    </message>
    <message>
      <source>Number of Columns:</source>
      <translation type="unfinished" >Број колона:</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation type="unfinished" >&amp;У реду</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation type="unfinished" >&amp;Откажи</translation>
    </message>
    <message>
      <source>Rotation:</source>
      <translation>Заокретање:</translation>
    </message>
  </context>
  <context>
    <name>MyPlugin</name>
    <message>
      <source>My &amp;Plugin</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>MyPluginImpl</name>
    <message>
      <source>Scribus - My Plugin</source>
      <translation type="unfinished" />
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
      <translation>Нови документ</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>&amp;Величина:</translation>
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
      <source>Margin Guides</source>
      <translation>Водиље маргина</translation>
    </message>
    <message>
      <source>Options</source>
      <translation>Опције</translation>
    </message>
    <message>
      <source>&amp;Default Unit:</source>
      <translation>&amp;Подразумевана јединица:</translation>
    </message>
    <message>
      <source>&amp;Automatic Text Frames</source>
      <translation>&amp;Аутоматски текстуални оквир</translation>
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
      <source>Document page size, either a standard size or a custom size</source>
      <translation>Величина странице документа, или стандардна величина или произвољна величина</translation>
    </message>
    <message>
      <source>Orientation of the document's pages</source>
      <translation>Усмерење страница документа</translation>
    </message>
    <message>
      <source>Width of the document's pages, editable if you have chosen a custom page size</source>
      <translation>Ширина страница документа, подложна изменама ако изаберете произвољну величину странице</translation>
    </message>
    <message>
      <source>Height of the document's pages, editable if you have chosen a custom page size</source>
      <translation>Висина страница документа, подложна изменама ако изаберете произвољну величину странице</translation>
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
      <source>Do not show this dialog again</source>
      <translation>Не приказуј овај прозор поново</translation>
    </message>
    <message>
      <source>Initial number of pages of the document</source>
      <translation>Почетни број страна документа</translation>
    </message>
    <message>
      <source>N&amp;umber of Pages:</source>
      <translation>Б&amp;рој страна:</translation>
    </message>
    <message>
      <source>Open</source>
      <translation type="unfinished" >Отвори</translation>
    </message>
    <message>
      <source>&amp;New Document</source>
      <translation>&amp;Нови документ</translation>
    </message>
    <message>
      <source>Open &amp;Existing Document</source>
      <translation>Отвори &amp;Постојећи документ</translation>
    </message>
    <message>
      <source>Open Recent &amp;Document</source>
      <translation>Отвори скорашњи документ</translation>
    </message>
    <message>
      <source>First Page is:</source>
      <translation>Прва страна је:</translation>
    </message>
    <message>
      <source>Show Document Settings After Creation</source>
      <translation>Прикажи поставке документа након што је документ направљен</translation>
    </message>
    <message>
      <source>Document Layout</source>
      <translation>Шема распореда страна у документу</translation>
    </message>
  </context>
  <context>
    <name>NewFromTemplatePlugin</name>
    <message>
      <source>New &amp;from Template...</source>
      <translation type="unfinished" >Нови &amp;из шаблона...</translation>
    </message>
    <message>
      <source>Load documents with predefined layout</source>
      <translation>Учитај документ са унапред одређеном шемом</translation>
    </message>
  </context>
  <context>
    <name>NewFromPlugin</name>
    <message>
      <source>Start a document from a template made by other users or yourself (f.e. for documents you have a constant style).</source>
      <translation>Начини документ из шаблона који је направио други корисник или ти сам (нпр. документи где имаш стилове које би поново користио)</translation>
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
      <translation>&amp;X Позиција:</translation>
    </message>
    <message>
      <source>&amp;Y-Pos:</source>
      <translation>&amp;Y Позиција:</translation>
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
      <source>Enlarge the Size of the Path by shown %</source>
      <translation>Повећај величину путање за приказаних %</translation>
    </message>
    <message>
      <source>Angle of Rotation</source>
      <translation>Угао ротације</translation>
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
      <source> %</source>
      <translation type="unfinished" > %</translation>
    </message>
    <message>
      <source>When checked use coordinates relative to the page, otherwise coordinates are relative to the Object.</source>
      <translation>Када је изабрано, користе се координате стране, у супротном, координате се постављају у односу на објекат.</translation>
    </message>
    <message>
      <source>Shrink the Size of the Path by shown %</source>
      <translation>Повећај стазу за приказаних %</translation>
    </message>
    <message>
      <source>Reduce the Size of the Path by the shown value</source>
      <translation>Смањи стазу за приказану вредност</translation>
    </message>
    <message>
      <source>Enlarge the Size of the Path by the shown value</source>
      <translation>Повећај стазу за приказану вредност</translation>
    </message>
    <message>
      <source>% to Enlarge or Shrink By</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Value to Enlarge or Shrink By</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set Contour to Image Clip</source>
      <translation>Постави контуру по одсецању слике</translation>
    </message>
    <message>
      <source>Reset the Contour Line to the Clipping Path of the Image</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>OODPlug</name>
    <message>
      <source>This document does not seem to be an OpenOffice Draw file.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Group%1</source>
      <translation>Група%1</translation>
    </message>
  </context>
  <context>
    <name>OODrawImportPlugin</name>
    <message>
      <source>Import &amp;OpenOffice.org Draw...</source>
      <translation>Увези &amp;OpenOffice.org Draw...</translation>
    </message>
    <message>
      <source>Imports OpenOffice.org Draw Files</source>
      <translation>Увези &amp;OpenOffice.org Draw фајлове</translation>
    </message>
    <message>
      <source>Imports most OpenOffice.org Draw files into the current document, converting their vector data into Scribus objects.</source>
      <translation>Увози већину OpenOffice.org Draw фајлове у текући документ, претварајући њихове векторске податке у Скрибусове објекте.</translation>
    </message>
    <message>
      <source>OpenDocument 1.0 Draw</source>
      <comment>Import/export format name</comment>
      <translation>OpenDocument 1.0 Draw</translation>
    </message>
    <message>
      <source>OpenOffice.org 1.x Draw</source>
      <comment>Import/export format name</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>This file contains some unsupported features</source>
      <translation>Фајл садржи неке неподржане функције</translation>
    </message>
    <message>
      <source>The file could not be imported</source>
      <translation>Не могу да увезем фајл</translation>
    </message>
  </context>
  <context>
    <name>OdtDialog</name>
    <message>
      <source>OpenDocument Importer Options</source>
      <translation>Опције увозника OpenDocument фајлова</translation>
    </message>
    <message>
      <source>Overwrite Paragraph Styles</source>
      <translation>Написати преко стила параграфа</translation>
    </message>
    <message>
      <source>Enabling this will overwrite existing styles in the current Scribus document</source>
      <translation>Омогућење овога ће дозволити писање преко постојећих стилова  текућег Скрибусовог документа</translation>
    </message>
    <message>
      <source>Merge Paragraph Styles</source>
      <translation>Сједини стилове параграфа</translation>
    </message>
    <message>
      <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document's styles are named differently.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Use document name as a prefix for paragraph styles</source>
      <translation type="unfinished" >Користи име документа као префикс за стилове пасуса</translation>
    </message>
    <message>
      <source>Prepend the document name to the paragraph style name in Scribus.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Do not ask again</source>
      <translation type="unfinished" >Не питај опет</translation>
    </message>
    <message>
      <source>Make these settings the default and do not prompt again when importing an OASIS OpenDocument.</source>
      <translation>Постави ова подешења као подразумевана и не питај поново при увозу OASIS OpenDocument формата.</translation>
    </message>
    <message>
      <source>OK</source>
      <translation type="unfinished" >У реду</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation type="unfinished" >Поништи</translation>
    </message>
  </context>
  <context>
    <name>OldScribusFormat</name>
    <message>
      <source>Scribus Document</source>
      <translation type="unfinished" >Scribus документ</translation>
    </message>
    <message>
      <source>Scribus 1.2.x Document</source>
      <translation>Документ Скрибуса 1.2.x</translation>
    </message>
  </context>
  <context>
    <name>OneClick</name>
    <message>
      <source>Origin</source>
      <translation>Порекло</translation>
    </message>
    <message>
      <source>Size</source>
      <translation type="unfinished" >Величина</translation>
    </message>
    <message>
      <source>Width:</source>
      <translation type="unfinished" >Ширина:</translation>
    </message>
    <message>
      <source>Length:</source>
      <translation type="unfinished" >Дужина:</translation>
    </message>
    <message>
      <source>Height:</source>
      <translation type="unfinished" >Висина:</translation>
    </message>
    <message>
      <source>Angle:</source>
      <translation type="unfinished" >Угао:</translation>
    </message>
    <message>
      <source>Remember Values</source>
      <translation>Запамти вредности</translation>
    </message>
  </context>
  <context>
    <name>OutlineValues</name>
    <message>
      <source> %</source>
      <translation type="unfinished" > %</translation>
    </message>
    <message>
      <source>Linewidth</source>
      <translation>Дужина реда</translation>
    </message>
  </context>
  <context>
    <name>PDFExportDialog</name>
    <message>
      <source>Save as PDF</source>
      <translation>Сачувај као  PDF</translation>
    </message>
    <message>
      <source>O&amp;utput to File:</source>
      <translation type="unfinished" >Из&amp;лаз у фајл:</translation>
    </message>
    <message>
      <source>Cha&amp;nge...</source>
      <translation type="unfinished" >Изме&amp;ни...</translation>
    </message>
    <message>
      <source>Output one file for eac&amp;h page</source>
      <translation>Извези по један фајл за сваку страну</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation type="unfinished" >&amp;Сними</translation>
    </message>
    <message>
      <source>Save as</source>
      <translation type="unfinished" >Сними као</translation>
    </message>
    <message>
      <source>PDF Files (*.pdf);;All Files (*)</source>
      <translation type="unfinished" >PDF фајлови (*.pdf);;Сви фајлови (*)</translation>
    </message>
    <message>
      <source>This enables exporting one individually named PDF file for each page in the document. Page numbers are added automatically. This is most useful for imposing PDF for commercial printing.</source>
      <translation>Извоз PDF фајла јединственог имена за сваку страну документа. Бројеви страна се додају аутоматски. Ово је најкорисније користити за PDF-ове намењене за комерцијалну штампу.</translation>
    </message>
    <message>
      <source>The save button will be disabled if you are trying to export PDF/X-3 and the info string is missing from the PDF/X-3 tab.</source>
      <translation>Дугме за снимање неће бити доступно при покушају извоза PDF/X-3 ако  \&quot;info string\&quot; није попуњен у PDF/X-3 страници.</translation>
    </message>
    <message>
      <source>%1 does not exists and will be created, continue?</source>
      <translation>%1 не постоји и биће направљен, наставити?</translation>
    </message>
    <message>
      <source>Cannot create directory: 
%1</source>
      <translation>Не могу да направим директоријум: 
%1</translation>
    </message>
  </context>
  <context>
    <name>PDFToolBar</name>
    <message>
      <source>PDF Tools</source>
      <translation type="unfinished" >PDF алати</translation>
    </message>
  </context>
  <context>
    <name>PDFlib</name>
    <message>
      <source>Saving PDF</source>
      <translation>Снимам PDF</translation>
    </message>
    <message>
      <source>Exporting Items on Current Page:</source>
      <translation>Извозим ставке са текуће стране:</translation>
    </message>
    <message>
      <source>Exporting Master Page:</source>
      <translation>Извозим главне стране:</translation>
    </message>
    <message>
      <source>Exporting Page:</source>
      <translation>Извозим страну:</translation>
    </message>
    <message>
      <source>Page:</source>
      <translation type="unfinished" >Страна:</translation>
    </message>
    <message>
      <source>Date:</source>
      <translation>Датум:</translation>
    </message>
  </context>
  <context>
    <name>PPreview</name>
    <message>
      <source>Print Preview</source>
      <translation>Преглед пре штампања</translation>
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
      <source>All</source>
      <translation>Све</translation>
    </message>
    <message>
      <source>Separation Name</source>
      <translation>Име издвајања</translation>
    </message>
    <message>
      <source>Cyan</source>
      <translation type="unfinished" >Цијан</translation>
    </message>
    <message>
      <source>Magenta</source>
      <translation type="unfinished" >Магента</translation>
    </message>
    <message>
      <source>Yellow</source>
      <translation type="unfinished" >Жута</translation>
    </message>
    <message>
      <source>Black</source>
      <translation type="unfinished" >Црна</translation>
    </message>
    <message>
      <source>Scaling:</source>
      <translation>Скалирање:</translation>
    </message>
    <message>
      <source>Print...</source>
      <translation type="unfinished" >Штампај...</translation>
    </message>
    <message>
      <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis. UCR reduces the possibility of over saturation with CMY inks.</source>
      <translation>Начин замене неких нијанси сиве које су састављене од цијана, жуте и магенте и коришћење црне уместо њих. UCR (смањење засићења бојом) углавном утиче на делове слика које су неутрални или тамних тонова који су врло близу сивој. Коришћење ове опције може умногоме побољшати неке слике и захтева одређено експериментисање и пробе од слушаја до случаја. UCR смањује могућност презасићења CMY бојама.</translation>
    </message>
    <message>
      <source>Resize the scale of the page.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Close</source>
      <translation type="unfinished" >Затвори</translation>
    </message>
    <message>
      <source>File</source>
      <translation type="unfinished" >Фајл</translation>
    </message>
    <message>
      <source>Force Overprint Mode</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Enable &amp;Antialiasing</source>
      <translation>Одобри &amp;ублажабање</translation>
    </message>
    <message>
      <source>Fit to Width</source>
      <translation>Углави у ширину</translation>
    </message>
    <message>
      <source>Fit to Height</source>
      <translation>Углави у висину</translation>
    </message>
    <message>
      <source>Fit to Page</source>
      <translation>Углави целу страну</translation>
    </message>
    <message>
      <source>Provides a more pleasant view of Type 1 fonts, TrueType Fonts, OpenType Fonts, EPS, PDF and vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
      <translation>Омогућава много пријатнији доживљај Type 1, TrueType и OpenType фонтова, EPS, PDF и векторске графике у прегледу, али по цени мало споријег прегледа</translation>
    </message>
    <message>
      <source>Display Settings</source>
      <translation>Подешења приказа</translation>
    </message>
    <message>
      <source>Print Settings</source>
      <translation>Подешења штампе</translation>
    </message>
    <message>
      <source>Mirror Page(s) Horizontal</source>
      <translation>Изврни страну(е) водоравно</translation>
    </message>
    <message>
      <source>Mirror Page(s) Vertical</source>
      <translation>Изврни страну(е) усправно</translation>
    </message>
    <message>
      <source>Clip to Page Margins</source>
      <translation>Одсеци до маргина стране</translation>
    </message>
    <message>
      <source>Print in Grayscale</source>
      <translation>Штампај у нијансама сиве</translation>
    </message>
    <message>
      <source>Convert Spot Colors</source>
      <translation>Преведи спот боје</translation>
    </message>
    <message>
      <source>Apply ICC Profiles</source>
      <translation>Примени ICC профиле</translation>
    </message>
    <message>
      <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
      <translation>Омогућава да спот боје буду преведене у композитне боје. Уколико је планирано да се штампање врши у комерцијалној штампи, најбоље је оставити омогућено.</translation>
    </message>
    <message>
      <source>Enables global Overprint Mode for this document, overrides object settings</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Allows you to embed ICC profiles in the print stream when color management is enabled</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>PSLib</name>
    <message>
      <source>Processing Master Page:</source>
      <translation>Обрађујем главне стране:</translation>
    </message>
    <message>
      <source>Exporting Page:</source>
      <translation>Извозим стране:</translation>
    </message>
  </context>
  <context>
    <name>PStyleWBase</name>
    <message>
      <source>Form1</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Properties</source>
      <translation type="unfinished" >Својства</translation>
    </message>
    <message>
      <source>Distances and Alignment</source>
      <translation>Удаљености и поравнања</translation>
    </message>
    <message>
      <source>Drop Caps</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Parent's Drop Cap Status</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Tabulators and Indentation</source>
      <translation type="unfinished" >Табулатори и увлачење</translation>
    </message>
    <message>
      <source>Ch&amp;aracter Style</source>
      <translation>Стилови зн&amp;акова</translation>
    </message>
    <message>
      <source>Based On:</source>
      <translation>Заснива се на:</translation>
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
      <translation type="unfinished" >Копија</translation>
    </message>
  </context>
  <context>
    <name>PageItemAttributes</name>
    <message>
      <source>Relates To</source>
      <translation>Односи се на</translation>
    </message>
    <message>
      <source>Is Parent Of</source>
      <translation>је предак</translation>
    </message>
    <message>
      <source>Is Child Of</source>
      <translation>је наследник</translation>
    </message>
    <message>
      <source>None</source>
      <comment>



relationship</comment>
      <translation type="unfinished" >Ниједан</translation>
    </message>
  </context>
  <context>
    <name>PageItemAttributesBase</name>
    <message>
      <source>Page Item Attributes</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Name</source>
      <translation type="unfinished" >Име</translation>
    </message>
    <message>
      <source>Type</source>
      <translation type="unfinished" >Врста</translation>
    </message>
    <message>
      <source>Value</source>
      <translation type="unfinished" >Вредност</translation>
    </message>
    <message>
      <source>Parameter</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Relationship</source>
      <translation>Однос</translation>
    </message>
    <message>
      <source>Relationship To</source>
      <translation>Однос према</translation>
    </message>
    <message>
      <source>&amp;Add</source>
      <translation type="unfinished" >&amp;Додај</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Copy</source>
      <translation type="unfinished" >&amp;Копирај</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation type="unfinished" >Alt+C</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation type="unfinished" >&amp;Обриши</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>C&amp;lear</source>
      <translation type="unfinished" >Оч&amp;исти</translation>
    </message>
    <message>
      <source>Alt+L</source>
      <translation>Alt+L</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation type="unfinished" >&amp;У реду</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation type="unfinished" >&amp;Откажи</translation>
    </message>
  </context>
  <context>
    <name>PageLayouts</name>
    <message>
      <source>First Page is:</source>
      <translation>Прва страна је:</translation>
    </message>
    <message>
      <source>Document Layout</source>
      <translation>Шема распореда страна у документу</translation>
    </message>
  </context>
  <context>
    <name>PagePalette</name>
    <message>
      <source>Double sided</source>
      <translation>Двострано</translation>
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
      <source>Arrange Pages</source>
      <translation type="unfinished" >Намести странице</translation>
    </message>
    <message>
      <source>Available Master Pages:</source>
      <translation>Доступне главне стране:</translation>
    </message>
    <message>
      <source>Document Pages:</source>
      <translation type="unfinished" >Странице документа:</translation>
    </message>
  </context>
  <context>
    <name>PageSelector</name>
    <message>
      <source>%1 of %2</source>
      <translation>%1 од %2</translation>
    </message>
    <message>
      <source>%1 of %1</source>
      <translation>%1 од %1</translation>
    </message>
  </context>
  <context>
    <name>ParaStyleComboBox</name>
    <message>
      <source>No Style</source>
      <translation type="unfinished" >Нема стила</translation>
    </message>
  </context>
  <context>
    <name>PatternDialog</name>
    <message>
      <source>Choose a Directory</source>
      <translation type="unfinished" >Изаберите директоријум</translation>
    </message>
    <message>
      <source>Loading Patterns</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>All Files (*)</source>
      <translation type="unfinished" >Сви фајлови (*)</translation>
    </message>
    <message>
      <source>Open</source>
      <translation type="unfinished" >Отвори</translation>
    </message>
  </context>
  <context>
    <name>PicSearch</name>
    <message>
      <source>Size:</source>
      <translation type="unfinished" >Величина:</translation>
    </message>
    <message>
      <source>Resolution:</source>
      <translation>Резолуција:</translation>
    </message>
    <message>
      <source>DPI</source>
      <translation>тпи</translation>
    </message>
    <message>
      <source>Unknown</source>
      <translation type="unfinished" >Непознат</translation>
    </message>
    <message>
      <source>RGB</source>
      <translation type="unfinished" >RGB</translation>
    </message>
    <message>
      <source>CMYK</source>
      <translation type="unfinished" >CMYK</translation>
    </message>
    <message>
      <source>Grayscale</source>
      <translation>Нијансе сиве</translation>
    </message>
    <message>
      <source>Duotone</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Colorspace:</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>PicSearchBase</name>
    <message>
      <source>Result</source>
      <translation type="unfinished" >Резултат</translation>
    </message>
    <message>
      <source>Search Results for: </source>
      <translation type="unfinished" >Тражи резултате за: </translation>
    </message>
    <message>
      <source>&amp;Preview</source>
      <translation type="unfinished" >&amp;Преглед</translation>
    </message>
    <message>
      <source>Alt+P</source>
      <translation>Alt+P</translation>
    </message>
    <message>
      <source>&amp;Select</source>
      <translation>&amp;Изабери</translation>
    </message>
    <message>
      <source>Alt+S</source>
      <translation>Alt+S</translation>
    </message>
  </context>
  <context>
    <name>PicSearchOptions</name>
    <message>
      <source>The filesystem will be searched for case insensitive file names when you check this on. Remember it is not default on most operating systems except MS Windows</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cancel Search</source>
      <translation>Обустави претрагу</translation>
    </message>
    <message>
      <source>Start Search</source>
      <translation>Започни претрагу</translation>
    </message>
    <message>
      <source>Select a base directory for search</source>
      <translation>Изабери почетни директоријум за претрагу</translation>
    </message>
    <message>
      <source>Scribus - Image Search</source>
      <translation>Скрибус - Тражење слика</translation>
    </message>
    <message>
      <source>The search failed: %1</source>
      <translation>Претрага није успела: %1</translation>
    </message>
  </context>
  <context>
    <name>PicSearchOptionsBase</name>
    <message>
      <source>Search Images</source>
      <translation>Тражи слике</translation>
    </message>
    <message>
      <source>Start at:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Change...</source>
      <translation type="unfinished" >Измени...</translation>
    </message>
    <message>
      <source>Search for:</source>
      <translation type="unfinished" >Тражи:</translation>
    </message>
    <message>
      <source>Case insensitive search</source>
      <translation>Претрага неосетљива на величину слова</translation>
    </message>
    <message>
      <source>Search recursivly</source>
      <translation>Rekuryivna pretraga</translation>
    </message>
    <message>
      <source>Searching</source>
      <translation>Претрага...</translation>
    </message>
    <message>
      <source>Start Search</source>
      <translation>Започни претрагу</translation>
    </message>
  </context>
  <context>
    <name>PicStatus</name>
    <message>
      <source>Scribus - Image Search</source>
      <translation>Скрибус - Тражење слика</translation>
    </message>
    <message>
      <source>No images named &quot;%1&quot; were found.</source>
      <translation>Слика са именом &quot;%1&quot; није пронађена.</translation>
    </message>
    <message>
      <source>Not on a Page</source>
      <translation>Није на страни</translation>
    </message>
    <message>
      <source>JPG</source>
      <translation>JPG</translation>
    </message>
    <message>
      <source>TIFF</source>
      <translation>TIFF</translation>
    </message>
    <message>
      <source>PSD</source>
      <translation>PSD</translation>
    </message>
    <message>
      <source>EPS/PS</source>
      <translation>EPS/PS</translation>
    </message>
    <message>
      <source>PDF</source>
      <translation>PDF</translation>
    </message>
    <message>
      <source>JPG2000</source>
      <translation>JPG2000</translation>
    </message>
    <message>
      <source>emb. PSD</source>
      <translation>emb. PSD</translation>
    </message>
    <message>
      <source>Unknown</source>
      <translation type="unfinished" >Непознат</translation>
    </message>
    <message>
      <source>RGB</source>
      <translation type="unfinished" >RGB</translation>
    </message>
    <message>
      <source>CMYK</source>
      <translation type="unfinished" >CMYK</translation>
    </message>
    <message>
      <source>Grayscale</source>
      <translation>Нијансе сиве</translation>
    </message>
    <message>
      <source>Duotone</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>n/a</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>PicStatusBase</name>
    <message>
      <source>Manage Pictures</source>
      <translation type="unfinished" >Управљање сликама</translation>
    </message>
    <message>
      <source>Information</source>
      <translation type="unfinished" >Информација</translation>
    </message>
    <message>
      <source>Path:</source>
      <translation>Путања:</translation>
    </message>
    <message>
      <source>Search...</source>
      <translation>Тражи...</translation>
    </message>
    <message>
      <source>Name:</source>
      <translation type="unfinished" >Име:</translation>
    </message>
    <message>
      <source>Image</source>
      <translation type="unfinished" >Слика</translation>
    </message>
    <message>
      <source>DPI:</source>
      <translation>тпи:</translation>
    </message>
    <message>
      <source>Format:</source>
      <translation type="unfinished" >Формат:</translation>
    </message>
    <message>
      <source>Colorspace:</source>
      <translation>Простор боја:</translation>
    </message>
    <message>
      <source>Size</source>
      <translation type="unfinished" >Величина</translation>
    </message>
    <message>
      <source>Pixels:</source>
      <translation>Пиксела:</translation>
    </message>
    <message>
      <source>Scale:</source>
      <translation type="unfinished" >Размера:</translation>
    </message>
    <message>
      <source>Printed:</source>
      <translation>Штампано:</translation>
    </message>
    <message>
      <source>Layout</source>
      <translation>Распоред</translation>
    </message>
    <message>
      <source>On Page:</source>
      <translation>На страни:</translation>
    </message>
    <message>
      <source>Goto</source>
      <translation type="unfinished" >Иди на</translation>
    </message>
    <message>
      <source>eff. DPI:</source>
      <translation>eff. :</translation>
    </message>
    <message>
      <source>Object:</source>
      <translation>Објекат:</translation>
    </message>
    <message>
      <source>Select</source>
      <translation type="unfinished" >Изабери</translation>
    </message>
    <message>
      <source>Image Tools</source>
      <translation>Алати за слике</translation>
    </message>
    <message>
      <source>Layers &amp;&amp; Paths...</source>
      <translation>Слојеви и путање...</translation>
    </message>
    <message>
      <source>Image Visible</source>
      <translation>Слика видљива</translation>
    </message>
    <message>
      <source>Image Effects...</source>
      <translation>Ефекти на слици...</translation>
    </message>
    <message>
      <source>Edit Image...</source>
      <translation>Мењај слику...</translation>
    </message>
    <message>
      <source>Print Image</source>
      <translation>Штампај слику</translation>
    </message>
    <message>
      <source>Close</source>
      <translation type="unfinished" >Затвори</translation>
    </message>
  </context>
  <context>
    <name>PixmapExportPlugin</name>
    <message>
      <source>Save as &amp;Image...</source>
      <translation type="unfinished" >Сними као &amp;слику...</translation>
    </message>
    <message>
      <source>Export As Image</source>
      <translation>Извези као слику</translation>
    </message>
    <message>
      <source>Exports selected pages as bitmap images.</source>
      <translation>Извози изабране стране као растерске слике.</translation>
    </message>
    <message>
      <source>Save as Image</source>
      <translation type="unfinished" >Сними као слику</translation>
    </message>
    <message>
      <source>Error writing the output file(s).</source>
      <translation type="unfinished" >Грешка при писању излазног фајла(ова).</translation>
    </message>
    <message>
      <source>Export successful</source>
      <translation>Извезено успешно</translation>
    </message>
  </context>
  <context>
    <name>PluginManager</name>
    <message>
      <source>Cannot find plugin</source>
      <comment>plugin manager</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>unknown error</source>
      <comment>plugin manager</comment>
      <translation>непозната грешка</translation>
    </message>
    <message>
      <source>Cannot find symbol (%1)</source>
      <comment>plugin manager</comment>
      <translation>Не могу да нађем симбол (%1)</translation>
    </message>
    <message>
      <source>Plugin: loading %1</source>
      <comment>plugin manager</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>init failed</source>
      <comment>plugin load error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>unknown plugin type</source>
      <comment>plugin load error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Plugin: %1 loaded</source>
      <comment>plugin manager</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Plugin: %1 failed to load: %2</source>
      <comment>plugin manager</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Plugin: %1 initialized ok </source>
      <comment>plugin manager</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Plugin: %1 failed post initialization</source>
      <comment>plugin manager</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>There is a problem loading %1 of %2 plugins. %3 This is probably caused by some kind of dependency issue or old plugins existing in your install directory. If you clean out your install directory and reinstall and this still occurs, please report it on bugs.scribus.net.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>PluginManagerPrefsGui</name>
    <message>
      <source>Plugin Manager</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Plugin</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>How to run</source>
      <translation>Како покренути</translation>
    </message>
    <message>
      <source>Type</source>
      <translation type="unfinished" >Врста</translation>
    </message>
    <message>
      <source>Load it?</source>
      <translation>Да учитам?</translation>
    </message>
    <message>
      <source>Plugin ID</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>File</source>
      <translation type="unfinished" >Фајл</translation>
    </message>
    <message>
      <source>You need to restart the application to apply the changes.</source>
      <translation>Програм је неопходно поново покренути да би се промене примениле.</translation>
    </message>
  </context>
  <context>
    <name>PolygonProps</name>
    <message>
      <source>Polygon Properties</source>
      <translation>Својства полигона</translation>
    </message>
  </context>
  <context>
    <name>PolygonWidget</name>
    <message>
      <source>Corn&amp;ers:</source>
      <translation type="unfinished" >Угл&amp;ови:</translation>
    </message>
    <message>
      <source>&amp;Rotation:</source>
      <translation type="unfinished" >&amp;Ротација:</translation>
    </message>
    <message>
      <source>Apply &amp;Factor</source>
      <translation type="unfinished" >Примени &amp;фактор</translation>
    </message>
    <message>
      <source> %</source>
      <translation type="unfinished" > %</translation>
    </message>
    <message>
      <source>&amp;Factor:</source>
      <translation type="unfinished" >&amp;Фактор:</translation>
    </message>
    <message>
      <source>Number of corners for polygons</source>
      <translation type="unfinished" >Број углова за полигоне</translation>
    </message>
    <message>
      <source>Degrees of rotation for polygons</source>
      <translation type="unfinished" >Степени ротације за полигоне</translation>
    </message>
    <message>
      <source>Apply Convex/Concave Factor to change shape of Polygons</source>
      <translation type="unfinished" >Примени конвексно/конкавно фактор да би променио облик полигона</translation>
    </message>
    <message>
      <source>Sample Polygon</source>
      <translation type="unfinished" >Пример полигона</translation>
    </message>
    <message>
      <source>A negative value will make the polygon concave (or star shaped), a positive value will make it convex</source>
      <translation>Негативна вредност ће начинити полигон цонкавним (звездолики облик), а позитивна вредност конвексним.</translation>
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
      <translation type="unfinished" >Албум</translation>
    </message>
    <message>
      <source>Display</source>
      <translation>Приказ</translation>
    </message>
    <message>
      <source>External Tools</source>
      <translation type="unfinished" >Спољашњи алати</translation>
    </message>
    <message>
      <source>Hyphenator</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Fonts</source>
      <translation>Фонтови</translation>
    </message>
    <message>
      <source>Color Management</source>
      <translation>Управљање бојама</translation>
    </message>
    <message>
      <source>PDF Export</source>
      <translation>Извоз PDF-ова</translation>
    </message>
    <message>
      <source>Keyboard Shortcuts</source>
      <translation>Пречице са тастатуре</translation>
    </message>
    <message>
      <source>Plugins</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Preflight Verifier</source>
      <translation>Провера могућих проблема</translation>
    </message>
    <message>
      <source>Document Item Attributes</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Table of Contents and Indexes</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Miscellaneous</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Printer</source>
      <translation type="unfinished" >Штампач</translation>
    </message>
  </context>
  <context>
    <name>PrefsDialogBase</name>
    <message>
      <source>&amp;Defaults</source>
      <translation>&amp;Подразумевано</translation>
    </message>
    <message>
      <source>Save Preferences</source>
      <translation>Сачувај подешавања</translation>
    </message>
    <message>
      <source>Export...</source>
      <translation>Извоз...</translation>
    </message>
    <message>
      <source>&amp;Apply</source>
      <translation type="unfinished" >&amp;Примени</translation>
    </message>
    <message>
      <source>All preferences can be reset here</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Apply all changes without closing the dialog</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Export current preferences into file</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>PrefsManager</name>
    <message>
      <source>Postscript</source>
      <translation type="unfinished" >Postscript</translation>
    </message>
    <message>
      <source>Migrate Old Scribus Settings?</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scribus has detected existing Scribus 1.2 preferences files.
Do you want to migrate them to the new Scribus version?</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>PostScript</source>
      <translation>PostScript</translation>
    </message>
    <message>
      <source>Could not open preferences file &quot;%1&quot; for writing: %2</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Writing to preferences file &quot;%1&quot; failed: QIODevice status code %2</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Failed to open prefs file &quot;%1&quot;: %2</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Failed to read prefs XML from &quot;%1&quot;: %2 at line %3, col %4</source>
      <translation type="unfinished" />
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
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scribus was not able to save its preferences:&lt;br>%1&lt;br>Please check file and directory permissions and available disk space.</source>
      <comment>scribus app error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Error Loading Preferences</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scribus was not able to load its preferences:&lt;br>%1&lt;br>Default settings will be loaded.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>PDF 1.5</source>
      <translation>PDF 1.5</translation>
    </message>
  </context>
  <context>
    <name>PresetLayout</name>
    <message>
      <source>Magazine</source>
      <translation>Магазин</translation>
    </message>
    <message>
      <source>Fibonacci</source>
      <translation>Фибоначи</translation>
    </message>
    <message>
      <source>Golden Mean</source>
      <translation>Златни пресек</translation>
    </message>
    <message>
      <source>Nine Parts</source>
      <translation>Девет делова</translation>
    </message>
    <message>
      <source>Gutenberg</source>
      <translation>Гутенберг</translation>
    </message>
    <message>
      <source>None</source>
      <comment>



layout type</comment>
      <translation type="unfinished" >Ниједан</translation>
    </message>
    <message>
      <source>You can select a predefined page layout here. 'None' leave margins as is, Gutenberg sets margins classically. 'Magazine' sets all margins for same value. Leading is Left/Inside value.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>PythonConsole</name>
    <message>
      <source>&amp;Open...</source>
      <translation type="unfinished" >&amp;Отвори...</translation>
    </message>
    <message>
      <source>&amp;Save</source>
      <translation type="unfinished" >&amp;Сними</translation>
    </message>
    <message>
      <source>Save &amp;As...</source>
      <translation type="unfinished" >Сними &amp;као...</translation>
    </message>
    <message>
      <source>&amp;Exit</source>
      <translation>&amp;Изађи</translation>
    </message>
    <message>
      <source>&amp;File</source>
      <translation type="unfinished" >&amp;Фајл</translation>
    </message>
    <message>
      <source>&amp;Run</source>
      <translation>&amp;Покрени</translation>
    </message>
    <message>
      <source>Run As &amp;Console</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Save Output...</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Script</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scribus Python Console</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>This is derived from standard Python console so it contains some limitations esp. in the case of whitespaces. Please consult Scribus manual for more informations.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Script Console</source>
      <translation type="unfinished" >Конзола за скрипте</translation>
    </message>
    <message>
      <source>Write your commands here. A selection is processed as script</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Output of your script</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Save the Python Commands in File</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Text Files (*.txt)</source>
      <translation>Текстуални фајлови (*.txt)</translation>
    </message>
    <message>
      <source>Save Current Output</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Open Python Script File</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Python Scripts (*.py *.PY)</source>
      <translation>Python скрипте (*.py *.PY)</translation>
    </message>
    <message>
      <source>Line: %1 Column: %2</source>
      <translation>Линија: %1 Колона: %2</translation>
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
      <source>&amp;Define Custom Colors >></source>
      <translation>&amp;Дефинишите произвољне боје >></translation>
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
      <source>&lt;qt>Are you sure you wish to delete %1 &quot;%2&quot;?&lt;/qt></source>
      <translation>&lt;qt>Да ли сте сигурни да желите да обришете %1 „%2“?&lt;/qt></translation>
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
      <source>&lt;h3>About Qt&lt;/h3>&lt;p>This program uses Qt version %1.&lt;/p>&lt;p>Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p>&lt;p>Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br>Qt is also available for embedded devices.&lt;/p>&lt;p>Qt is a Trolltech product. See &lt;tt>http://www.trolltech.com/qt/&lt;/tt> for more information.&lt;/p></source>
      <translation>&lt;h3>О Qt-у&lt;/h3>
&lt;p>Овај програм користи Qt верзију %1.&lt;/p>
&lt;p>Qt је  вишеплатформски C++ GUI скуп алата од 
фирме Trolltech.&lt;/p>
&lt;p>Qt пружа портабилност на нивоу изворног 
кода кроз MS Windows, Mac OS X, Linux, и све главне 
комерцијалне Unix варијанте.
&lt;br>Qt такође, постоји и за преносне и 
уградиве уређаје.&lt;/p>
&lt;p>Погледајте &lt;tt>http://www.trolltech.com/qt/&lt;/tt> за више 
информација.&lt;/p></translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
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
      <source>Background</source>
      <translation>Позадина</translation>
    </message>
    <message>
      <source>Do you really want to overwrite the File:
%1 ?</source>
      <translation>Да ли стварно желите да пребришете фајл: 
%1 ?</translation>
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
      <source>Open</source>
      <translation>Отвори</translation>
    </message>
    <message>
      <source>&amp;Scribus Scripts</source>
      <translation type="unfinished" >&amp;Scribus скрипте</translation>
    </message>
    <message>
      <source>&amp;Execute Script...</source>
      <translation type="unfinished" >&amp;Изврши скрипту...</translation>
    </message>
    <message>
      <source>&amp;Recent Scripts</source>
      <translation type="unfinished" >&amp;Скорашње скрипте</translation>
    </message>
    <message>
      <source>Show &amp;Console</source>
      <translation type="unfinished" >Прикажи &amp;конзолу</translation>
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
      <translation>Албански</translation>
    </message>
    <message>
      <source>Basque</source>
      <translation>Баскијски</translation>
    </message>
    <message>
      <source>Bulgarian</source>
      <translation>Бугарски</translation>
    </message>
    <message>
      <source>Catalan</source>
      <translation type="unfinished" >Каталански</translation>
    </message>
    <message>
      <source>Chinese</source>
      <translation>Кинески</translation>
    </message>
    <message>
      <source>Czech</source>
      <translation type="unfinished" >Чешки</translation>
    </message>
    <message>
      <source>Danish</source>
      <translation type="unfinished" >Дански</translation>
    </message>
    <message>
      <source>Dutch</source>
      <translation type="unfinished" >Холандски</translation>
    </message>
    <message>
      <source>English</source>
      <translation type="unfinished" >Енглески</translation>
    </message>
    <message>
      <source>English (British)</source>
      <translation>Британски енглески</translation>
    </message>
    <message>
      <source>Esperanto</source>
      <translation>Есперанто</translation>
    </message>
    <message>
      <source>German</source>
      <translation type="unfinished" >Немачки</translation>
    </message>
    <message>
      <source>Finnish</source>
      <translation type="unfinished" >Фински</translation>
    </message>
    <message>
      <source>French</source>
      <translation type="unfinished" >Француски</translation>
    </message>
    <message>
      <source>Galician</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Greek</source>
      <translation type="unfinished" >Грчки</translation>
    </message>
    <message>
      <source>Hungarian</source>
      <translation type="unfinished" >Мађарски</translation>
    </message>
    <message>
      <source>Indonesian</source>
      <translation>Индонежански</translation>
    </message>
    <message>
      <source>Italian</source>
      <translation type="unfinished" >Италијански</translation>
    </message>
    <message>
      <source>Korean</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Lithuanian</source>
      <translation type="unfinished" >Литвански</translation>
    </message>
    <message>
      <source>Norwegian (Nnyorsk)</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Norwegian</source>
      <translation>Норвешки</translation>
    </message>
    <message>
      <source>Polish</source>
      <translation type="unfinished" >Пољски</translation>
    </message>
    <message>
      <source>Russian</source>
      <translation type="unfinished" >Руски</translation>
    </message>
    <message>
      <source>Swedish</source>
      <translation type="unfinished" >Шведски</translation>
    </message>
    <message>
      <source>Spanish</source>
      <translation type="unfinished" >Шпански</translation>
    </message>
    <message>
      <source>Spanish (Latin)</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Slovak</source>
      <translation type="unfinished" >Словачки</translation>
    </message>
    <message>
      <source>Slovenian</source>
      <translation type="unfinished" >Словеначки</translation>
    </message>
    <message>
      <source>Serbian</source>
      <translation>Српски</translation>
    </message>
    <message>
      <source>Cannot get font size of non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot get font of non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot get text size of non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot get column count of non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot get line space of non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot get column gap of non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot get text of non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot set text of non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot insert text into non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Alignment out of range. Use one of the scribus.ALIGN* constants.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Selection index out of bounds</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Unit out of range. Use one of the scribus.UNIT_* constants.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Target is not an image frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Corner radius must be a positive number.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot get a color with an empty name.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot change a color with an empty name.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot create a color with an empty name.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot delete a color with an empty name.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot replace a color with an empty name.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>OpenOffice.org Writer Documents</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color not found - python error</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Custom (optional) configuration: </source>
      <comment>short words plugin</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Standard configuration: </source>
      <comment>short words plugin</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Short Words processing. Wait please...</source>
      <comment>short words plugin</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Short Words processing. Done.</source>
      <comment>short words plugin</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Afrikaans</source>
      <translation type="unfinished" >Африканерски</translation>
    </message>
    <message>
      <source>Turkish</source>
      <translation>Турски</translation>
    </message>
    <message>
      <source>Ukranian</source>
      <translation>Украјински</translation>
    </message>
    <message>
      <source>Welsh</source>
      <translation>Велшки</translation>
    </message>
    <message>
      <source>The filename must be a string.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot delete image type settings.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>The image type must be a string.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>'allTypes' attribute is READ-ONLY</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Failed to export image</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot scale by 0%.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Specified item not an image frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Font not found.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot render an empty sample.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot have an empty layer name.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Layer not found.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot remove the last layer.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot create layer without a name.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Insert index out of bounds.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot set text alignment on a non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Font size out of bounds - must be 1 &lt;= size &lt;= 512.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot set font size on a non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot set font on a non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Line space out of bounds, must be >= 0.1.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot set line spacing on a non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Column gap out of bounds, must be positive.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot set column gap on a non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Column count out of bounds, must be > 1.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot set number of columns on a non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot select text in a non-text frame</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot delete text from a non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot set text fill on a non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot set text stroke on a non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot set text shade on a non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Can only link text frames.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Target frame links to another frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Target frame is linked to by another frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Source and target are the same object.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot unlink a non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot convert a non-text frame to outlines.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Page</source>
      <translation type="unfinished" >Страница</translation>
    </message>
    <message>
      <source>Scribus Development Version</source>
      <translation>Развојни тим Скрибуса</translation>
    </message>
    <message>
      <source> pt</source>
      <translation type="unfinished" > тач.</translation>
    </message>
    <message>
      <source> mm</source>
      <translation type="unfinished" > mm</translation>
    </message>
    <message>
      <source> in</source>
      <translation type="unfinished" > in</translation>
    </message>
    <message>
      <source> p</source>
      <translation type="unfinished" > p</translation>
    </message>
    <message>
      <source>pt</source>
      <translation type="unfinished" >pt</translation>
    </message>
    <message>
      <source>mm</source>
      <translation type="unfinished" >mm</translation>
    </message>
    <message>
      <source>in</source>
      <translation type="unfinished" >in</translation>
    </message>
    <message>
      <source>p</source>
      <translation type="unfinished" >p</translation>
    </message>
    <message>
      <source>Points (pt)</source>
      <translation type="unfinished" >тачке (pt)</translation>
    </message>
    <message>
      <source>Inches (in)</source>
      <translation type="unfinished" >Инчи (in)</translation>
    </message>
    <message>
      <source>Picas (p)</source>
      <translation type="unfinished" >Пика (p)</translation>
    </message>
    <message>
      <source>File exists</source>
      <translation>Фајл постоји</translation>
    </message>
    <message>
      <source>&amp;Replace</source>
      <translation type="unfinished" >&amp;Замени</translation>
    </message>
    <message>
      <source>All</source>
      <translation type="unfinished" >Све</translation>
    </message>
    <message>
      <source>Failed to open document.</source>
      <comment>python error</comment>
      <translation>Неуспешно опварање документа.</translation>
    </message>
    <message>
      <source>Failed to save document.</source>
      <comment>python error</comment>
      <translation>Неуспешно снимање документа.</translation>
    </message>
    <message>
      <source>Argument must be page item name, or PyCObject instance</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Property not found</source>
      <translation type="unfinished" />
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
      <source>Unable to save pixmap</source>
      <comment>scripter error</comment>
      <translation type="unfinished" />
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
      <translation>Објекат није пронађен.</translation>
    </message>
    <message>
      <source>Style not found.</source>
      <comment>python error</comment>
      <translation>Стил није пронађен.</translation>
    </message>
    <message>
      <source>Cannot set style on a non-text frame.</source>
      <comment>python error</comment>
      <translation>Не могу да подесим стил нетекстуалног оквира.</translation>
    </message>
    <message>
      <source>Failed to save EPS.</source>
      <comment>python error</comment>
      <translation>Неуспешно снимање EPS.</translation>
    </message>
    <message>
      <source>Page number out of range.</source>
      <comment>python error</comment>
      <translation>Број стране изван опсега.</translation>
    </message>
    <message>
      <source>argument is not list: must be list of float values.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>argument contains non-numeric values: must be list of float values.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>argument contains no-numeric values: must be list of float values.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Line style not found.</source>
      <comment>python error</comment>
      <translation>Стил линије није пронађен.</translation>
    </message>
    <message>
      <source>Object is not a linked text frame, can't unlink.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Only text frames can be checked for overflowing</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;About Script...</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Script</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>About Script</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Croatian</source>
      <translation>Хрватски</translation>
    </message>
    <message>
      <source>Portuguese</source>
      <translation type="unfinished" >Португалски</translation>
    </message>
    <message>
      <source>Portuguese (BR)</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scribus Crash</source>
      <translation type="unfinished" >Пуцање scribus-а</translation>
    </message>
    <message>
      <source>Scribus crashes due to Signal #%1</source>
      <translation type="unfinished" >Scribus пуца због сигнала #%1</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation type="unfinished" >&amp;У реду</translation>
    </message>
    <message>
      <source>Master Page </source>
      <translation>Главна страна</translation>
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
      <translation type="unfinished" />
    </message>
    <message>
      <source>Output stream not writeable</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Verification of settings failed: %1</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Could not open input file %1</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Unable to read settings XML:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>%1 (line %2 col %3)</source>
      <comment>Load PDF settings</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Unable to read settings XML: %1</source>
      <translation type="unfinished" />
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
      <source>Freetype2 library not available</source>
      <translation>Freetype2 библиотека није доступна</translation>
    </message>
    <message>
      <source>Font %1 is broken (read stream), no embedding</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Font %1 has broken glyph %2 (charcode %3)</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Font %1 cannot be read, no embedding</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Failed to load font %1 - font type unknown</source>
      <translation type="unfinished" />
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
      <source>Failed to load a font - freetype2 couldn't find the font file</source>
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
      <source> cm</source>
      <translation> cm</translation>
    </message>
    <message>
      <source> c</source>
      <translation> c</translation>
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
      <translation>Милиметри (mm)</translation>
    </message>
    <message>
      <source>Centimeters (cm)</source>
      <translation>Центиметри (cm)</translation>
    </message>
    <message>
      <source>Cicero (c)</source>
      <translation>Цицеро (c)</translation>
    </message>
    <message>
      <source>page</source>
      <comment>page export</comment>
      <translation>страна</translation>
    </message>
    <message>
      <source>Document Template: </source>
      <translation>Шаблон документа:</translation>
    </message>
    <message>
      <source>Color not found.</source>
      <comment>python error</comment>
      <translation>Боја није пронађена.</translation>
    </message>
    <message>
      <source>Color not found in document.</source>
      <comment>python error</comment>
      <translation>Боја није пронађена у документу.</translation>
    </message>
    <message>
      <source>Color not found in default colors.</source>
      <comment>python error</comment>
      <translation>Боја није пронађена међу подразумеваним бојама.</translation>
    </message>
    <message>
      <source>Cannot group less than two items</source>
      <comment>python error</comment>
      <translation>Не могу да направим групу са мање од две ставке</translation>
    </message>
    <message>
      <source>Can't group less than two items</source>
      <comment>python error</comment>
      <translation>Не могу да направим групу са мање од две ставке</translation>
    </message>
    <message>
      <source>Need selection or argument list of items to group</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Can't set bookmark on a non-text frame</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Can't get info from a non-text frame</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>The filename should not be empty string.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
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
      <source>OpenDocument Text Documents</source>
      <translation>OpenDocument текстуални документи</translation>
    </message>
    <message>
      <source>Copy #%1 of </source>
      <translation type="unfinished" >Копија #%1 од</translation>
    </message>
    <message>
      <source>Black</source>
      <translation type="unfinished" >Црна</translation>
    </message>
    <message>
      <source>Cyan</source>
      <translation type="unfinished" >Цијан</translation>
    </message>
    <message>
      <source>Magenta</source>
      <translation type="unfinished" >Магента</translation>
    </message>
    <message>
      <source>Yellow</source>
      <translation type="unfinished" >Жута</translation>
    </message>
    <message>
      <source>Color Wheel</source>
      <translation>Точак боја</translation>
    </message>
    <message>
      <source>Font Preview</source>
      <translation>Преглед фонтова</translation>
    </message>
    <message>
      <source>My Plugin</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>New From Template</source>
      <translation type="unfinished" >Нови из шаблона</translation>
    </message>
    <message>
      <source>PS/EPS Importer</source>
      <translation>PS/EPS увозник</translation>
    </message>
    <message>
      <source>Save As Template</source>
      <translation>Сачувај као шаблон</translation>
    </message>
    <message>
      <source>Scripter</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Short Words</source>
      <translation>Скраћенице</translation>
    </message>
    <message>
      <source>SVG Export</source>
      <translation>SVG извоз</translation>
    </message>
    <message>
      <source>SVG Import</source>
      <translation>SVG увоз</translation>
    </message>
    <message>
      <source>OpenOffice.org Draw Importer</source>
      <translation>OpenOffice.org Draw увозник</translation>
    </message>
    <message>
      <source>Scribus crashes due to the following exception : %1</source>
      <translation>Скрибус је умро због: %1</translation>
    </message>
    <message>
      <source>Creating Font Cache</source>
      <translation>Правим фонт кеш</translation>
    </message>
    <message>
      <source>New Font found, checking...</source>
      <translation>Нови фонт пронађен, проверавам...</translation>
    </message>
    <message>
      <source>Modified Font found, checking...</source>
      <translation>Промењен фон пронађен, проверавам...</translation>
    </message>
    <message>
      <source>Reading Font Cache</source>
      <translation>Читам фонт кеш</translation>
    </message>
    <message>
      <source>Writing updated Font Cache</source>
      <translation>Пишем ажурирани фон кеш</translation>
    </message>
    <message>
      <source>Searching for Fonts</source>
      <translation type="unfinished" >Тражим фонтове</translation>
    </message>
    <message>
      <source>The changes to your document have not been saved and you have requested to revert them. Do you wish to continue?</source>
      <translation>Промене на документу нису сачуване, а захтевано је враћање на последњу сачувану варијанту. Да ли желиш да наставиш?</translation>
    </message>
    <message>
      <source>A file named '%1' already exists.&lt;br/>Do you want to replace it with the file you are saving?</source>
      <translation>Фајл под именом '%1' већ постоји.&lt;br/>Да ли желиш да га преснимиш?</translation>
    </message>
    <message>
      <source>firstPageOrder is bigger than allowed.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Old .sla format support</source>
      <translation>Подршка за стари .sla формат.</translation>
    </message>
    <message>
      <source>German (Trad.)</source>
      <translation>Немачки (трад.)</translation>
    </message>
    <message>
      <source>Exporting PostScript File</source>
      <translation>Извозим PostScript фајл</translation>
    </message>
    <message>
      <source>Printing File</source>
      <translation>Штампам фај</translation>
    </message>
    <message>
      <source>&lt;p>You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p>Choose one of the following:&lt;br>&lt;ul>&lt;li>&lt;b>Create&lt;/b> missing pages&lt;/li>&lt;li>&lt;b>Import&lt;/b> pages until the last page&lt;/li>&lt;li>&lt;b>Cancel&lt;/b>&lt;/li>&lt;/ul></source>
      <translation>&lt;p>Покушаваш да увезеш више страна него што је могуће у текућем документу, бројећи од активне стране.&lt;/p>Изабери једану од следећих могућности:&lt;br>&lt;ul>&lt;li>&lt;b>Направи&lt;/b> недостајуће стране&lt;/li>&lt;li>&lt;b>Увези&lt;/b> до последње стране&lt;/li>&lt;li>&lt;b>Поништи&lt;/b>&lt;/li>&lt;/ul></translation>
    </message>
    <message>
      <source>C&amp;reate</source>
      <translation>Н&amp;аправи</translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation type="unfinished" >&amp;Увези</translation>
    </message>
    <message>
      <source>Thai</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Barcode Generator</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>OpenOffice.org Draw (*.sxd *.odg);;All Files (*)</source>
      <translation>OpenOffice.org Draw (*.sxd *.odg);;Сви фајлови (*)</translation>
    </message>
    <message>
      <source>Word Documents</source>
      <translation>Word документи</translation>
    </message>
    <message>
      <source>Palm PDB Documents</source>
      <comment>PDB Importer</comment>
      <translation>Palm PDB документи</translation>
    </message>
    <message>
      <source>PDB_data</source>
      <comment>PDB Importer</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>PDB Import</source>
      <comment>PDB Importer</comment>
      <translation>PDB увоз</translation>
    </message>
    <message>
      <source>Could not open file %1</source>
      <comment>PDB Importer</comment>
      <translation>Не могу да отворим фајл %1</translation>
    </message>
    <message>
      <source>Luxembourgish</source>
      <translation>Луксембургшки</translation>
    </message>
    <message>
      <source>Japanese</source>
      <translation>Јапанск</translation>
    </message>
    <message>
      <source>Font %1(%2) is broken</source>
      <translation>Фонт %1(%2) је неисправан</translation>
    </message>
    <message>
      <source>Given master page name does not match any existing.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Arabic</source>
      <translation>Арапски</translation>
    </message>
    <message>
      <source>Dzongkha</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Estonian</source>
      <translation>Естонски</translation>
    </message>
    <message>
      <source>font %1 </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>size %1 </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>+style </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>+color </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>+underline </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>-underline </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>+strikeout </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>-strikeout </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>+shadow </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>-shadow </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>+outline </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>-outline </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>-tracking </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>+stretch </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>parent= %1</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Font %1 is broken (no Face), discarding it</source>
      <translation>Фонт %1 је неисправан (нема изглед), распуштам га</translation>
    </message>
    <message>
      <source>Latin</source>
      <translation>Латински</translation>
    </message>
    <message>
      <source>Icelandic</source>
      <translation>Исландски</translation>
    </message>
    <message>
      <source>Norwegian (BokmÃ¥l)</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Romanian</source>
      <translation>Румунски</translation>
    </message>
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
      <translation type="unfinished" >Letter</translation>
    </message>
    <message>
      <source>Govt. Letter</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Legal</source>
      <translation type="unfinished" >Legal</translation>
    </message>
    <message>
      <source>Ledger</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Executive</source>
      <translation type="unfinished" />
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
      <translation type="unfinished" >Средњи</translation>
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
      <translation type="unfinished" >C</translation>
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
      <translation type="unfinished" />
    </message>
    <message>
      <source>Font %1 has broken glyph %2</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Transparency out of bounds, must be 0 &lt;= transparency &lt;= 1.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Blendmode out of bounds, must be 0 &lt;= blendmode &lt;= 15.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scribus 1.2.x Support</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scribus 1.3.4 Support</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>This file is not recognized as a PDB document. Please, report this as a bug if you are sure it is one.</source>
      <comment>PDB Importer</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot get number of lines of non-text frame.</source>
      <comment>python error</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>You are running a development version of Scribus 1.3.x. The document you are working with was created in Scribus 1.2.x.  Saving the current file under 1.3.x renders it unable to be edited in Scribus 1.2.x versions. To preserve the ability to edit in 1.2.x, save this file under a different name and further edit the newly named file and the original will be untouched. Are you sure you wish to proceed with this operation?</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>+tracking %1 </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>+baseline %1 </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Breton</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>English (American)</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>%1 may be corrupted : missing or wrong resolution tags</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>The Font(s):
%1 are not available.
They have been replaced by &quot;Courier&quot;
Therefore the image may be not correct</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>English (Australian)</source>
      <translation>Аустралијски енглески</translation>
    </message>
    <message>
      <source>All Supported Formats (*.eps *.EPS *.epsi *.EPSI *.ps *.PS);;</source>
      <translation>Сви подржани формати (*.eps *.EPS *.epsi *.EPSI *.ps *.PS);;</translation>
    </message>
    <message>
      <source>German (Swiss)</source>
      <translation>Немачни (Швајцарска)</translation>
    </message>
    <message>
      <source>Hebrew</source>
      <translation>Хебрејски</translation>
    </message>
    <message>
      <source>Scribus 1.3.0->1.3.3.7 Support</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Font %1 has broken metrics in file %2, ignoring metrics</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Image</source>
      <translation type="unfinished" >Слика</translation>
    </message>
    <message>
      <source>PDF Push Button</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>PDF Text Field</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>PDF Check Box</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>PDF Combo Box</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>PDF List Box</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>PDF Text Annotation</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>PDF Link Annotation</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Text</source>
      <translation type="unfinished" >Текст</translation>
    </message>
    <message>
      <source>Line</source>
      <translation type="unfinished" >Линија</translation>
    </message>
    <message>
      <source>Polygon</source>
      <translation type="unfinished" >Полигон</translation>
    </message>
    <message>
      <source>Polyline</source>
      <translation type="unfinished" >Полилинија</translation>
    </message>
    <message>
      <source>PathText</source>
      <translation type="unfinished" >Текста путање</translation>
    </message>
    <message>
      <source>Copy of %1 (%2)</source>
      <translation>Копија %1 (%2)</translation>
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
    <name>ReformDoc</name>
    <message>
      <source>Document Setup</source>
      <translation>Поставке документа</translation>
    </message>
    <message>
      <source>Document</source>
      <translation type="unfinished" >Документ</translation>
    </message>
    <message>
      <source>Guides</source>
      <translation type="unfinished" >Водиље</translation>
    </message>
    <message>
      <source>Display</source>
      <translation type="unfinished" >Приказ</translation>
    </message>
    <message>
      <source>Typography</source>
      <translation type="unfinished" >Типографија</translation>
    </message>
    <message>
      <source>Tools</source>
      <translation type="unfinished" >Алати</translation>
    </message>
    <message>
      <source>Hyphenator</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Fonts</source>
      <translation>Фонтови</translation>
    </message>
    <message>
      <source>PDF Export</source>
      <translation>Извоз PDF-ова</translation>
    </message>
    <message>
      <source>Color Management</source>
      <translation>Управљање бојама</translation>
    </message>
    <message>
      <source>Document Information</source>
      <translation type="unfinished" >Информације о документу</translation>
    </message>
    <message>
      <source>Preflight Verifier</source>
      <translation>Провера могућих проблема</translation>
    </message>
    <message>
      <source>Document Item Attributes</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Table of Contents and Indexes</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Adjusting Colors</source>
      <translation type="unfinished" >Прилагођавам боје</translation>
    </message>
    <message>
      <source>Sections</source>
      <translation>Избор</translation>
    </message>
  </context>
  <context>
    <name>RunScriptDialog</name>
    <message>
      <source>Run as Extension Script</source>
      <comment>run script dialog</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Python Scripts (*.py *.PY);; All Files (*)</source>
      <translation>Python скрипта (*.py *.PY);; Сви фајлови (*)</translation>
    </message>
  </context>
  <context>
    <name>SMAlignSelect</name>
    <message>
      <source>P</source>
      <comment>P as in Parent</comment>
      <translation>P</translation>
    </message>
    <message>
      <source>Use parent style's alignment instead of overriding it</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>SMBase</name>
    <message>
      <source>Style Manager</source>
      <translation>Управљач стиловима</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation type="unfinished" >&amp;Обриши</translation>
    </message>
    <message>
      <source>Alt+D</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>Name:</source>
      <translation type="unfinished" >Име:</translation>
    </message>
    <message>
      <source>Alt+N</source>
      <translation>Alt+N</translation>
    </message>
    <message>
      <source>&amp;Apply</source>
      <translation type="unfinished" >&amp;Примени</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation type="unfinished" >&amp;Нови</translation>
    </message>
    <message>
      <source>&amp;Clone</source>
      <translation>&amp;Клонирај</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation type="unfinished" >Alt+C</translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation type="unfinished" >&amp;Увези</translation>
    </message>
    <message>
      <source>Alt+I</source>
      <translation>Alt+I</translation>
    </message>
    <message>
      <source>Please select a unique name for the style</source>
      <translation>Изабери јединствено име за стил</translation>
    </message>
    <message>
      <source>&lt;&lt; &amp;Done</source>
      <translation>&lt;&lt; &amp;Готово</translation>
    </message>
    <message>
      <source>&amp;Reset</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Alt+R</source>
      <translation>Alt+R</translation>
    </message>
  </context>
  <context>
    <name>SMCStylePage</name>
    <message>
      <source> %</source>
      <translation type="unfinished" > %</translation>
    </message>
    <message>
      <source>Parent style</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Font face</source>
      <translation>Изглед фонта</translation>
    </message>
    <message>
      <source>Font size</source>
      <translation>Величина фонта</translation>
    </message>
    <message>
      <source>Tracking</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Baseline offset</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Horizontal scaling</source>
      <translation>Водоравно скалирање</translation>
    </message>
    <message>
      <source>Vertical scaling</source>
      <translation>Вертикално скалирање</translation>
    </message>
    <message>
      <source>Language</source>
      <translation>Језик</translation>
    </message>
    <message>
      <source>Fill color</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Fill shade</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Stroke color</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Stroke shade</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Shade</source>
      <translation type="unfinished" >Намотај</translation>
    </message>
    <message>
      <source>Based On:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Language:</source>
      <translation>Језик:</translation>
    </message>
  </context>
  <context>
    <name>SMCharacterStyle</name>
    <message>
      <source>Properties</source>
      <translation type="unfinished" >Својства</translation>
    </message>
    <message>
      <source>Character Styles</source>
      <translation>Стилови знакова</translation>
    </message>
    <message>
      <source>Character Style</source>
      <translation>Стил знака</translation>
    </message>
    <message>
      <source>New Style</source>
      <translation type="unfinished" >Нови стил</translation>
    </message>
    <message>
      <source>Clone of %1</source>
      <translation>Клон %1</translation>
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
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>SMFontComboH</name>
    <message>
      <source>Use Parent Font</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>SMLineStyle</name>
    <message>
      <source>Properties</source>
      <translation type="unfinished" >Својства</translation>
    </message>
    <message>
      <source>Line Styles</source>
      <translation>Стилови линија</translation>
    </message>
    <message>
      <source>Line Style</source>
      <translation>Стил линије</translation>
    </message>
    <message>
      <source>New Style</source>
      <translation type="unfinished" >Нови стил</translation>
    </message>
    <message>
      <source>Clone of %1</source>
      <translation>Клон %1</translation>
    </message>
    <message>
      <source>%1 (%2)</source>
      <comment>This for unique name when creating a new character style. %1 will be the name of the style and %2 will be a number forming a style name like: New Style (2)</comment>
      <translation>%1 (%2)</translation>
    </message>
    <message>
      <source> pt</source>
      <translation type="unfinished" > тач.</translation>
    </message>
    <message>
      <source>Solid Line</source>
      <translation type="unfinished" >Непрекидна линија</translation>
    </message>
    <message>
      <source>Dashed Line</source>
      <translation type="unfinished" >Испрекидана линија</translation>
    </message>
    <message>
      <source>Dotted Line</source>
      <translation type="unfinished" >Тачкаста линија</translation>
    </message>
    <message>
      <source>Dash Dot Line</source>
      <translation type="unfinished" >Црта-тачка</translation>
    </message>
    <message>
      <source>Dash Dot Dot Line</source>
      <translation type="unfinished" >Црта-тачка-тачка</translation>
    </message>
    <message>
      <source> pt </source>
      <translation type="unfinished" > pt </translation>
    </message>
  </context>
  <context>
    <name>SMPStyleWidget</name>
    <message>
      <source>Fixed Linespacing</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Automatic Linespacing</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Align to Baseline Grid</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Distances and Alignment</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Drop Caps</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Tabulators and Indentation</source>
      <translation type="unfinished" >Табулатори и увлачење</translation>
    </message>
    <message>
      <source>Properties</source>
      <translation type="unfinished" >Својства</translation>
    </message>
    <message>
      <source>Character Style</source>
      <translation>Стил знака</translation>
    </message>
    <message>
      <source>&amp;Lines:</source>
      <translation type="unfinished" >&amp;Линије:</translation>
    </message>
    <message>
      <source>Distance from Text:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Alignment</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Parent Style</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Line Spacing Mode</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Line Spacing</source>
      <translation type="unfinished" >Проред</translation>
    </message>
    <message>
      <source>Space Above</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Space Below</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Drop Cap Lines</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Drop Cap Offset</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>First Line Indent</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Left Indent</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Right Indent</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Based On:</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>SMParagraphStyle</name>
    <message>
      <source>Paragraph Styles</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Paragraph Style</source>
      <translation type="unfinished" >Стил пасуса</translation>
    </message>
    <message>
      <source>New Style</source>
      <translation type="unfinished" >Нови стил</translation>
    </message>
    <message>
      <source>Clone of %1</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>%1 (%2)</source>
      <comment>This for unique name when creating a new character style. %1 will be the name of the style and %2 will be a number forming a style name like: New Style (2)</comment>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>SMReplaceDia</name>
    <message>
      <source>Remove</source>
      <translation type="unfinished" >Уклони</translation>
    </message>
    <message>
      <source>Replace with</source>
      <translation>Замени са</translation>
    </message>
  </context>
  <context>
    <name>SMReplaceDiaBase</name>
    <message>
      <source>Delete Styles</source>
      <translation>Уклони стил</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation type="unfinished" >&amp;У реду</translation>
    </message>
    <message>
      <source>Ca&amp;ncel</source>
      <translation>Оду&amp;стани</translation>
    </message>
    <message>
      <source>Alt+N</source>
      <translation>Alt+N</translation>
    </message>
  </context>
  <context>
    <name>SMRowWidget</name>
    <message>
      <source>No Style</source>
      <translation type="unfinished" >Нема стила</translation>
    </message>
  </context>
  <context>
    <name>SMScComboBox</name>
    <message>
      <source>Use Parent Value</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>SMShadeButton</name>
    <message>
      <source>Use Parent Value</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>SMStyleSelect</name>
    <message>
      <source>P</source>
      <comment>P as in Parent</comment>
      <translation>P</translation>
    </message>
    <message>
      <source>Use parent style's effects instead of overriding them</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>SMTabruler</name>
    <message>
      <source> Parent Tabs </source>
      <translation type="unfinished" />
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
      <translation>Скалирање ширине знакова</translation>
    </message>
    <message>
      <source>Scaling height of characters</source>
      <translation>Скалирање висине знакова</translation>
    </message>
  </context>
  <context>
    <name>SToolBStyle</name>
    <message>
      <source>Character Settings</source>
      <translation>Поставке карактера</translation>
    </message>
    <message>
      <source> %</source>
      <translation type="unfinished" > %</translation>
    </message>
    <message>
      <source>Manual Tracking</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>SVGExportPlugin</name>
    <message>
      <source>Exports SVG Files</source>
      <translation>Извози SVG фајлове</translation>
    </message>
    <message>
      <source>Exports the current page into an SVG file.</source>
      <translation>Извози текућу страну у SVG фајл.</translation>
    </message>
    <message>
      <source>Save as &amp;SVG...</source>
      <translation>Сачувај као &amp;SVG...</translation>
    </message>
  </context>
  <context>
    <name>SVGImportPlugin</name>
    <message>
      <source>Import &amp;SVG...</source>
      <translation type="unfinished" >Увези &amp;SVG...</translation>
    </message>
    <message>
      <source>Imports SVG Files</source>
      <translation>Увози SVG фајлове</translation>
    </message>
    <message>
      <source>Imports most SVG files into the current document,
converting their vector data into Scribus objects.</source>
      <translation>Увози већину SVG фајлова у текући документ, преводећи њихове векторске податке у Скрибусове објекте.</translation>
    </message>
    <message>
      <source>Scalable Vector Graphics</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>SVG file contains some unsupported features</source>
      <translation>SVG фајл садржи нека неподржана својства</translation>
    </message>
    <message>
      <source>The file could not be imported</source>
      <translation>Фајл се не може бити увежен</translation>
    </message>
  </context>
  <context>
    <name>SVGPlug</name>
    <message>
      <source>Group%1</source>
      <translation>Група%1</translation>
    </message>
  </context>
  <context>
    <name>SWDialog</name>
    <message>
      <source>Short Words</source>
      <comment>short words plugin</comment>
      <translation>Скраћенице</translation>
    </message>
    <message>
      <source>Apply unbreakable space on:</source>
      <comment>short words plugin</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Selected frames</source>
      <comment>short words plugin</comment>
      <translation>&amp;Изабрани оквири</translation>
    </message>
    <message>
      <source>Active &amp;page</source>
      <comment>short words plugin</comment>
      <translation>Текућа &amp;страна</translation>
    </message>
    <message>
      <source>&amp;All items</source>
      <comment>short words plugin</comment>
      <translation>&amp;Све ставке</translation>
    </message>
    <message>
      <source>Only selected frames processed.</source>
      <comment>short words plugin</comment>
      <translation>Обрађени су само изабрани оквири.</translation>
    </message>
    <message>
      <source>Only actual page processed.</source>
      <comment>short words plugin</comment>
      <translation>Обраћена је само текућа страна.</translation>
    </message>
    <message>
      <source>All items in document processed.</source>
      <comment>short words plugin</comment>
      <translation>Све ставке из документа су обрађене.</translation>
    </message>
  </context>
  <context>
    <name>SWPrefsGui</name>
    <message>
      <source>User settings</source>
      <translation>Корисникова подешења</translation>
    </message>
    <message>
      <source>System wide configuration</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Save</source>
      <translation type="unfinished" >&amp;Сними</translation>
    </message>
    <message>
      <source>&amp;Reset</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Save user configuration</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Reload system wide configuration and remove user defined one</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Edit custom configuration. If you save it, it will be used over system wide configuration</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Short Words</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>User configuration exists elready. Do you really want to overwrite it?</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot write file %1.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>User settings saved</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>System wide configuration reloaded</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cannot open file %1</source>
      <translation>Не могу да отворим фајл %1</translation>
    </message>
  </context>
  <context>
    <name>SaveAsTemplatePlugin</name>
    <message>
      <source>Save as &amp;Template...</source>
      <translation type="unfinished" >Сними као &amp;шаблон...</translation>
    </message>
    <message>
      <source>Save a document as a template</source>
      <translation>Сачувај документ као шаблон</translation>
    </message>
    <message>
      <source>Save a document as a template. Good way to ease the initial work for documents with a constant look</source>
      <translation>Сачувај документ као шаблон. Добар начин да се олакша започињање рада на документима са приближно им изгледом</translation>
    </message>
  </context>
  <context>
    <name>ScGTFileDialog</name>
    <message>
      <source>Select a file to import</source>
      <translation>Изабери фајл за увоз</translation>
    </message>
    <message>
      <source>Append</source>
      <translation>Додај</translation>
    </message>
    <message>
      <source>Show options</source>
      <translation>Покажи опције</translation>
    </message>
  </context>
  <context>
    <name>ScInputDialog</name>
    <message>
      <source>Input Dialog</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>InputDialog</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;OK</source>
      <translation type="unfinished" >&amp;У реду</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation type="unfinished" >&amp;Откажи</translation>
    </message>
  </context>
  <context>
    <name>ScPlugin</name>
    <message>
      <source>Persistent</source>
      <comment>plugin manager plugin type</comment>
      <translation>Трајна</translation>
    </message>
    <message>
      <source>Action</source>
      <comment>



plugin manager plugin type</comment>
      <translation type="unfinished" >Акција</translation>
    </message>
    <message>
      <source>Load/Save/Import/Export</source>
      <translation>Учитај/Сачувај/Увези/Извези</translation>
    </message>
    <message>
      <source>Unknown</source>
      <translation type="unfinished" >Непознат</translation>
    </message>
  </context>
  <context>
    <name>ScProgressBar</name>
    <message>
      <source>%1 of %2</source>
      <translation>%1 од %2</translation>
    </message>
  </context>
  <context>
    <name>ScToolBar</name>
    <message>
      <source>Top</source>
      <translation>Горе</translation>
    </message>
    <message>
      <source>Right</source>
      <translation>Десно</translation>
    </message>
    <message>
      <source>Bottom</source>
      <translation>Доле</translation>
    </message>
    <message>
      <source>Left</source>
      <translation>Лево</translation>
    </message>
    <message>
      <source>Allow Docking To...</source>
      <translation>Дозволи качење...</translation>
    </message>
    <message>
      <source>Horizontal</source>
      <translation type="unfinished" >Водоравно</translation>
    </message>
    <message>
      <source>Vertical</source>
      <translation type="unfinished" >Усправно</translation>
    </message>
    <message>
      <source>Floating Orientation...</source>
      <translation>Плутајућа оријентација...</translation>
    </message>
  </context>
  <context>
    <name>ScWinPrint</name>
    <message>
      <source>Printing...</source>
      <translation type="unfinished" >Штампам...</translation>
    </message>
  </context>
  <context>
    <name>Scribus12Format</name>
    <message>
      <source>Scribus 1.2.x Document</source>
      <translation>Документ Скрибуса 1.2.x</translation>
    </message>
    <message>
      <source>Background</source>
      <translation type="unfinished" >Позадина</translation>
    </message>
  </context>
  <context>
    <name>Scribus134Format</name>
    <message>
      <source>Scribus 1.3.4 Document</source>
      <translation>Документ Скрибуса 1.3.4</translation>
    </message>
    <message>
      <source>Copy #%1 of </source>
      <translation type="unfinished" >Копија #%1 од</translation>
    </message>
  </context>
  <context>
    <name>Scribus13Format</name>
    <message>
      <source>Copy #%1 of </source>
      <translation type="unfinished" >Копија #%1 од</translation>
    </message>
    <message>
      <source>Scribus 1.3.0->1.3.3.7 Document</source>
      <translation>Документи Скрибуса 1.3.0 до 1.3.3.7</translation>
    </message>
  </context>
  <context>
    <name>ScribusCore</name>
    <message>
      <source>Initializing Plugins</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Initializing Keyboard Shortcuts</source>
      <translation>Покрећем пречице на тастатури</translation>
    </message>
    <message>
      <source>Reading Preferences</source>
      <translation type="unfinished" >Читам подешавања</translation>
    </message>
    <message>
      <source>Reading ICC Profiles</source>
      <translation>Читам ICC профиле</translation>
    </message>
    <message>
      <source>Searching for Fonts</source>
      <translation type="unfinished" >Тражим фонтове</translation>
    </message>
    <message>
      <source>There are no fonts found on your system.</source>
      <translation>Фонтови нису пронађени на овом систему.</translation>
    </message>
    <message>
      <source>Exiting now.</source>
      <translation>Сада излазим.</translation>
    </message>
    <message>
      <source>Fatal Error</source>
      <translation type="unfinished" >Фатална грешка</translation>
    </message>
    <message>
      <source>Font System Initialized</source>
      <translation>Покрећем фонт систем</translation>
    </message>
  </context>
  <context>
    <name>ScribusDoc</name>
    <message>
      <source>New Layer</source>
      <translation type="unfinished" >Нови слој</translation>
    </message>
    <message>
      <source>Document</source>
      <translation type="unfinished" >Документ</translation>
    </message>
    <message>
      <source>Background</source>
      <translation type="unfinished" >Позадина</translation>
    </message>
    <message>
      <source>Do you really want to clear all your text?</source>
      <translation>Да ли желиш да очистиш сав твој текст?</translation>
    </message>
    <message>
      <source>Cannot Delete In-Use Item</source>
      <translation>Не могу да обришем ставку у употреби</translation>
    </message>
    <message>
      <source>The item %1 is currently being edited by Story Editor. The delete operation will be cancelled</source>
      <translation>Ставка %1 се тренутно користи у уређивачу текста. Брисање ће бити отказано</translation>
    </message>
    <message>
      <source>Some objects are locked.</source>
      <translation>Неки објекти су закључани.</translation>
    </message>
    <message>
      <source>&amp;Unlock All</source>
      <translation>&amp;Откључај све</translation>
    </message>
    <message>
      <source>&amp;Skip locked objects</source>
      <translation>&amp;Прескочи закључане објекте</translation>
    </message>
    <message>
      <source>An error occurred while opening ICC profiles, color management is not enabled.</source>
      <translation>Грешка се десила при отварању ICC профила, управљање бојама није могуће.</translation>
    </message>
    <message>
      <source>Number of copies: %1
Horizontal gap: %2
Vertical gap: %3</source>
      <translation>Број копија: %1
Водоравни размак: %2
Усправни размак: %3</translation>
    </message>
    <message>
      <source>Adjusting Colors</source>
      <translation type="unfinished" >Прилагођавам боје</translation>
    </message>
    <message>
      <source>Default Paragraph Style</source>
      <translation>Подразумевани стил параграфа</translation>
    </message>
    <message>
      <source>Default Character Style</source>
      <translation>Подразумевани стил знака</translation>
    </message>
    <message>
      <source>remove manual paragraphstyle</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>remove manual charstyle</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Number of copies: %1
Horizontal shift: %2
Vertical shift: %3
Rotation: %4</source>
      <translation>Број копија: %1
Водоравно померање: %2
Усправно померање: %3</translation>
    </message>
  </context>
  <context>
    <name>ScribusMainWindow</name>
    <message>
      <source>Initializing Story Editor</source>
      <translation>Покрећем Уређивач текста</translation>
    </message>
    <message>
      <source>Initializing Hyphenator</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Reading Scrapbook</source>
      <translation type="unfinished" >Читам албум</translation>
    </message>
    <message>
      <source>Setting up Shortcuts</source>
      <translation type="unfinished" >Постављам пречице</translation>
    </message>
    <message>
      <source>File</source>
      <translation type="unfinished" >Фајл</translation>
    </message>
    <message>
      <source>Edit</source>
      <translation>Уреди</translation>
    </message>
    <message>
      <source>Fatal Error</source>
      <translation>Кобна грешка</translation>
    </message>
    <message>
      <source>&amp;File</source>
      <translation type="unfinished" >&amp;Фајл</translation>
    </message>
    <message>
      <source>Open &amp;Recent</source>
      <translation type="unfinished" >Отво&amp;ри скорашњи</translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation type="unfinished" >&amp;Увези</translation>
    </message>
    <message>
      <source>&amp;Export</source>
      <translation type="unfinished" >&amp;Извези</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation type="unfinished" >&amp;Уреди</translation>
    </message>
    <message>
      <source>St&amp;yle</source>
      <translation type="unfinished" >Ст&amp;ил</translation>
    </message>
    <message>
      <source>&amp;Color</source>
      <translation type="unfinished" >&amp;Боја</translation>
    </message>
    <message>
      <source>&amp;Size</source>
      <translation type="unfinished" >&amp;Величина</translation>
    </message>
    <message>
      <source>&amp;Shade</source>
      <translation type="unfinished" >&amp;Намотај</translation>
    </message>
    <message>
      <source>&amp;Font</source>
      <translation type="unfinished" >&amp;Фонт</translation>
    </message>
    <message>
      <source>&amp;Effects</source>
      <translation type="unfinished" >&amp;Ефекти</translation>
    </message>
    <message>
      <source>&amp;Item</source>
      <translation type="unfinished" >&amp;Ставка</translation>
    </message>
    <message>
      <source>Preview Settings</source>
      <translation>Подешења прегледа</translation>
    </message>
    <message>
      <source>Level</source>
      <translation type="unfinished" >Ниво</translation>
    </message>
    <message>
      <source>Send to La&amp;yer</source>
      <translation type="unfinished" >Пошаљи у сл&amp;ој</translation>
    </message>
    <message>
      <source>&amp;PDF Options</source>
      <translation type="unfinished" >&amp;PDF опције</translation>
    </message>
    <message>
      <source>&amp;Shape</source>
      <translation type="unfinished" >&amp;Облик</translation>
    </message>
    <message>
      <source>C&amp;onvert To</source>
      <translation>П&amp;реведи у</translation>
    </message>
    <message>
      <source>I&amp;nsert</source>
      <translation>У&amp;баци</translation>
    </message>
    <message>
      <source>Character</source>
      <translation type="unfinished" >Знак</translation>
    </message>
    <message>
      <source>Quote</source>
      <translation>Наводник</translation>
    </message>
    <message>
      <source>Space</source>
      <translation>Размак</translation>
    </message>
    <message>
      <source>&amp;Page</source>
      <translation type="unfinished" >&amp;Страна</translation>
    </message>
    <message>
      <source>&amp;View</source>
      <translation type="unfinished" >&amp;Прикажи</translation>
    </message>
    <message>
      <source>E&amp;xtras</source>
      <translation type="unfinished" >Пр&amp;оширења</translation>
    </message>
    <message>
      <source>&amp;Windows</source>
      <translation type="unfinished" >&amp;Прозори</translation>
    </message>
    <message>
      <source>&amp;Help</source>
      <translation type="unfinished" >По&amp;моћ</translation>
    </message>
    <message>
      <source>&amp;Alignment</source>
      <translation type="unfinished" >&amp;Поравнање</translation>
    </message>
    <message>
      <source>Ready</source>
      <translation type="unfinished" >Спреман</translation>
    </message>
    <message>
      <source>Open</source>
      <translation type="unfinished" >Отвори</translation>
    </message>
    <message>
      <source>Importing Pages...</source>
      <translation type="unfinished" >Увозим странице...</translation>
    </message>
    <message>
      <source>Import Page(s)</source>
      <translation type="unfinished" >Увези страницу(е)</translation>
    </message>
    <message>
      <source>Import done</source>
      <translation>Увожење готово</translation>
    </message>
    <message>
      <source>Found nothing to import</source>
      <translation type="unfinished" >Нисам пронашао ништа да увезем</translation>
    </message>
    <message>
      <source>File %1 is not in an acceptable format</source>
      <translation>Фајл %1 није у прихватљивом формату</translation>
    </message>
    <message>
      <source>Loading...</source>
      <translation type="unfinished" >Учитавам...</translation>
    </message>
    <message>
      <source>PostScript</source>
      <translation>PostScript</translation>
    </message>
    <message>
      <source>Some ICC profiles used by this document are not installed:</source>
      <translation>Неки колор профили коришћени у овом документу нису инсталирани:</translation>
    </message>
    <message>
      <source> was replaced by: </source>
      <translation>замењени су са:</translation>
    </message>
    <message>
      <source>(converted)</source>
      <translation>(преведени)</translation>
    </message>
    <message>
      <source>Cannot write the file: 
%1</source>
      <translation>Не могу да запишем фајл: 
%1</translation>
    </message>
    <message>
      <source>Save As</source>
      <translation type="unfinished" >Сними као</translation>
    </message>
    <message>
      <source>Saving...</source>
      <translation type="unfinished" >Снимам...</translation>
    </message>
    <message>
      <source>Scribus has detected some errors. Consider using the Preflight Verifier to correct them</source>
      <translation>Скрибус је пронашао неке грешке. Размисли о \&quot;Провери могућих проблема\&quot; као опцији да их исправиш</translation>
    </message>
    <message>
      <source>&amp;Ignore</source>
      <translation>&amp;Игнориши</translation>
    </message>
    <message>
      <source>&amp;Abort</source>
      <translation>&amp;Одустани</translation>
    </message>
    <message>
      <source>Printing...</source>
      <translation type="unfinished" >Штампам...</translation>
    </message>
    <message>
      <source>Document</source>
      <translation type="unfinished" >Документ</translation>
    </message>
    <message>
      <source>Printing failed!</source>
      <translation type="unfinished" >Штампање није успело!</translation>
    </message>
    <message>
      <source>Cannot Cut In-Use Item</source>
      <translation>Не могу да исечем ставку у употреби</translation>
    </message>
    <message>
      <source>The item %1 is currently being edited by Story Editor. The cut operation will be cancelled</source>
      <translation>Ставка %1 се тренутно користи у уређивачу текста. Сечење ће бити отказано</translation>
    </message>
    <message>
      <source>About Qt</source>
      <translation type="unfinished" >О Qt-у</translation>
    </message>
    <message>
      <source>Scribus Manual</source>
      <translation type="unfinished" >Scribus приручник</translation>
    </message>
    <message>
      <source>Save as</source>
      <translation type="unfinished" >Сними као</translation>
    </message>
    <message>
      <source>Text Files (*.txt);;All Files(*)</source>
      <translation type="unfinished" >Текстуални фајлови (*.txt);;Сви фајлови(*)</translation>
    </message>
    <message>
      <source>Name:</source>
      <translation type="unfinished" >Име:</translation>
    </message>
    <message>
      <source>Convert Page to Master Page</source>
      <translation>Преведи страну у главну страну</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation type="unfinished" >&amp;Величина:</translation>
    </message>
    <message>
      <source>Size</source>
      <translation type="unfinished" >Величина</translation>
    </message>
    <message>
      <source>&amp;Shade:</source>
      <translation type="unfinished" >&amp;Сенка:</translation>
    </message>
    <message>
      <source>Shade</source>
      <translation type="unfinished" >Намотај</translation>
    </message>
    <message>
      <source>No Style</source>
      <translation type="unfinished" >Нема стила</translation>
    </message>
    <message>
      <source>The following programs are missing:</source>
      <translation>Наведени програми недостају:</translation>
    </message>
    <message>
      <source>Ghostscript : You cannot use EPS images or Print Preview</source>
      <translation>Гоустскрипт : EPS слике и преглед штампе се не могу користити</translation>
    </message>
    <message>
      <source>All</source>
      <translation type="unfinished" >Све</translation>
    </message>
    <message>
      <source>Scribus detected some errors.
Consider using the Preflight Verifier  to correct them.</source>
      <translation>Скрибус је пронашао неке грешке. 
 Размисли о \&quot;Провери могућих проблема\&quot; као опцији да их исправиш</translation>
    </message>
    <message>
      <source>EPS Files (*.eps);;All Files (*)</source>
      <translation>EPS фајлови (*.eps);;Сви фајлови (*)</translation>
    </message>
    <message>
      <source>Detected some errors.
Consider using the Preflight Verifier to correct them</source>
      <translation>Скрибус је пронашао неке грешке. Размисли о \&quot;Провери могућих проблема\&quot; као опцији да их исправиш</translation>
    </message>
    <message>
      <source>-Page%1</source>
      <translation>-Страна%1</translation>
    </message>
    <message>
      <source>Some objects are locked.</source>
      <translation>Неки објекти су закључани.</translation>
    </message>
    <message>
      <source>&amp;Lock All</source>
      <translation>&amp;Закључај све</translation>
    </message>
    <message>
      <source>&amp;Unlock All</source>
      <translation>&amp;Откључај све</translation>
    </message>
    <message>
      <source>Information</source>
      <translation type="unfinished" >Информација</translation>
    </message>
    <message>
      <source>The program %1 is already running!</source>
      <translation>Програм %1 је већ покренут!</translation>
    </message>
    <message>
      <source>The program %1 is missing!</source>
      <translation>Програм %1недостаје!</translation>
    </message>
    <message>
      <source>The selected color does not exist in the document's color set. Please enter a name for this new color.</source>
      <translation>Изабрана боја не постоји у скупу боја овог документа. Унеси име нове боје.</translation>
    </message>
    <message>
      <source>Color Not Found</source>
      <translation>Боја није пронађена</translation>
    </message>
    <message>
      <source>The name you have selected already exists. Please enter a different name for this new color.</source>
      <translation>Изабрано име већ постоји. Унеси друго име за ову нову боју.</translation>
    </message>
    <message>
      <source>&amp;Level</source>
      <translation>&amp;Ниво</translation>
    </message>
    <message>
      <source>Send to Layer</source>
      <translation>Пошаљи на слој</translation>
    </message>
    <message>
      <source>Previe&amp;w Settings</source>
      <translation>Подешења преглед&amp;а</translation>
    </message>
    <message>
      <source>&amp;Tools</source>
      <translation type="unfinished" >&amp;Алати</translation>
    </message>
    <message>
      <source>X-Pos:</source>
      <translation type="unfinished" >X Поз:</translation>
    </message>
    <message>
      <source>Y-Pos:</source>
      <translation type="unfinished" >Y Поз:</translation>
    </message>
    <message>
      <source>New Master Page %1</source>
      <translation>Нова главна страна %1</translation>
    </message>
    <message>
      <source>Ghostscript : You cannot use EPS images or PostScript Print Preview</source>
      <translation>Гоустскрипт : EPS слике и преглед штампе се не могу користити</translation>
    </message>
    <message>
      <source>Ghostscript is missing : Postscript Print Preview is not available</source>
      <translation>Гоустскрипт недостаје : Постскрипт преглед штампе се не могу користити</translation>
    </message>
    <message>
      <source>Do you really want to replace your existing image?</source>
      <translation>Да ли стварно желиш да замениш постојећу слику?</translation>
    </message>
    <message>
      <source>Contents</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Character</source>
      <translation>&amp;Знак</translation>
    </message>
    <message>
      <source>&amp;Quote</source>
      <translation>&amp;Навод</translation>
    </message>
    <message>
      <source>S&amp;paces &amp;&amp; Breaks</source>
      <translation>Р&amp;азмаци и Прекиди</translation>
    </message>
    <message>
      <source>Liga&amp;ture</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Paste Recent</source>
      <translation>Налепи претходно</translation>
    </message>
    <message>
      <source>Updating Pictures</source>
      <translation>Ажурирам слике</translation>
    </message>
    <message>
      <source>Documents (*.sla *.sla.gz);;All Files (*)</source>
      <translation>Документе (*.sla *.sla.gz);;Све фајлове (*)</translation>
    </message>
    <message>
      <source>Group%1</source>
      <translation>Група%1</translation>
    </message>
    <message>
      <source>Do you really want to clear all your text?</source>
      <translation>Да ли стварно желиш да очистиш сав текст?</translation>
    </message>
  </context>
  <context>
    <name>ScribusQApp</name>
    <message>
      <source>Invalid argument: </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>File %1 does not exist, aborting.</source>
      <translation>Фајл %1 не постојиt, одустајем.</translation>
    </message>
    <message>
      <source>Usage: scribus [option ... ] [file]</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Options:</source>
      <translation>Опције:</translation>
    </message>
    <message>
      <source>Print help (this message) and exit</source>
      <translation type="unfinished" />
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
      <translation type="unfinished" />
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
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scribus, Open Source Desktop Publishing</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Homepage</source>
      <translation type="unfinished" >Почетна страница</translation>
    </message>
    <message>
      <source>Documentation</source>
      <translation>Документација</translation>
    </message>
    <message>
      <source>Wiki</source>
      <translation>Вики</translation>
    </message>
    <message>
      <source>Issues</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Stop the showing of the splashscreen on startup. Writes an empty file called .neversplash in ~/.scribus.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Download a file from the Scribus website and show the latest available version.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Display a console window</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Show location ICC profile information on console while starting</source>
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
      <source>Copy Here</source>
      <translation type="unfinished" >Копирај овде</translation>
    </message>
    <message>
      <source>Move Here</source>
      <translation type="unfinished" >Помери овде</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation type="unfinished" >Поништи</translation>
    </message>
    <message>
      <source>&amp;Paste</source>
      <translation type="unfinished" >&amp;Пренеси</translation>
    </message>
    <message>
      <source>Picture</source>
      <translation type="unfinished" >Слика</translation>
    </message>
    <message>
      <source>File: </source>
      <translation type="unfinished" >Фајл: </translation>
    </message>
    <message>
      <source>Original PPI: </source>
      <translation type="unfinished" >Оригинални PPI: </translation>
    </message>
    <message>
      <source>Actual PPI: </source>
      <translation type="unfinished" >Стварни PPI: </translation>
    </message>
    <message>
      <source>Linked Text</source>
      <translation type="unfinished" >Повезан текст</translation>
    </message>
    <message>
      <source>Text Frame</source>
      <translation type="unfinished" >Текстуални оквир</translation>
    </message>
    <message>
      <source>Text on a Path</source>
      <translation type="unfinished" >Текст на путањи</translation>
    </message>
    <message>
      <source>Paragraphs: </source>
      <translation type="unfinished" >Пасуси: </translation>
    </message>
    <message>
      <source>Words: </source>
      <translation type="unfinished" >Речи: </translation>
    </message>
    <message>
      <source>Chars: </source>
      <translation type="unfinished" >Карактери: </translation>
    </message>
    <message>
      <source>Print: </source>
      <translation type="unfinished" >Штампај: </translation>
    </message>
    <message>
      <source>Enabled</source>
      <translation type="unfinished" >Укључено</translation>
    </message>
    <message>
      <source>Disabled</source>
      <translation type="unfinished" >Искључено</translation>
    </message>
    <message>
      <source>In&amp;fo</source>
      <translation type="unfinished" >Ин&amp;фо</translation>
    </message>
    <message>
      <source>&amp;PDF Options</source>
      <translation type="unfinished" >&amp;PDF опције</translation>
    </message>
    <message>
      <source>Send to La&amp;yer</source>
      <translation type="unfinished" >Пошаљи у сл&amp;ој</translation>
    </message>
    <message>
      <source>Le&amp;vel</source>
      <translation type="unfinished" >Ни&amp;во</translation>
    </message>
    <message>
      <source>Conve&amp;rt to</source>
      <translation type="unfinished" >Претв&amp;ори у</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation type="unfinished" >&amp;Обриши</translation>
    </message>
    <message>
      <source>Preview Settings</source>
      <translation>Подешења прегледа</translation>
    </message>
    <message>
      <source>Linking Text Frames</source>
      <translation>Повезивање текстуалних оквира</translation>
    </message>
    <message>
      <source>Cannot Convert In-Use Item</source>
      <translation>Не могу да преведем ставку у употреби</translation>
    </message>
    <message>
      <source>The item %1 is currently being edited by Story Editor. The convert to outlines operation for this item will be skipped</source>
      <translation>Ставка %1 се тренутно користи у уређивачу текста. Превођење ове ставке у контуре биће прескочено</translation>
    </message>
    <message>
      <source>Page %1 to %2</source>
      <translation>Страна %1 до %2</translation>
    </message>
    <message>
      <source>Colorspace: </source>
      <translation>Просто боја:</translation>
    </message>
    <message>
      <source>Unknown</source>
      <translation type="unfinished" >Непознат</translation>
    </message>
    <message>
      <source>RGB</source>
      <translation type="unfinished" >RGB</translation>
    </message>
    <message>
      <source>CMYK</source>
      <translation type="unfinished" >CMYK</translation>
    </message>
    <message>
      <source>Grayscale</source>
      <translation>Нијансе сиве</translation>
    </message>
    <message>
      <source>Contents</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Paste Recent</source>
      <translation>Налепи претходни</translation>
    </message>
    <message>
      <source>Duotone</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Lines: </source>
      <translation>Линија:</translation>
    </message>
    <message>
      <source>Group%1</source>
      <translation>Група%1</translation>
    </message>
    <message>
      <source>Enables the Preview Mode</source>
      <translation>Омогућује Преглед начин рада</translation>
    </message>
    <message>
      <source>Here you can select the visual appearance of the display
You can choose between normal and several color blindness forms</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Switches Color Management on or off</source>
      <translation>Укључује/искључује управљање бојама</translation>
    </message>
    <message>
      <source>Preview Mode</source>
      <translation>Преглед начин рада</translation>
    </message>
    <message>
      <source>CMS is active. Therefore the color display may not match the perception by visually impaired</source>
      <translation>Систем управљања бојама је укључен. Због тога преглед у боји може да не одговара доживљају особа са оштећеним видом</translation>
    </message>
    <message>
      <source>Enter Object Size</source>
      <translation>Унеси величину објекта</translation>
    </message>
    <message>
      <source>No Image Loaded</source>
      <translation>Нема учитане слике</translation>
    </message>
    <message>
      <source>You are trying to link a frame to itself.</source>
      <translation>Покушаваш да повежеш оквира са ним самим.</translation>
    </message>
    <message>
      <source>You are trying to link a frame which is already linked.</source>
      <translation>Покушаваш да повежеш оквир који је већ везан.</translation>
    </message>
  </context>
  <context>
    <name>ScribusWin</name>
    <message>
      <source>Document:</source>
      <translation>Документ:</translation>
    </message>
    <message>
      <source>has been changed since the last save.</source>
      <translation>је измењен од последњег снимања.</translation>
    </message>
    <message>
      <source>&amp;Discard</source>
      <translation>&amp;Распусти</translation>
    </message>
  </context>
  <context>
    <name>ScriptPlugin</name>
    <message>
      <source>Embedded Python scripting support.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scripter</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>ScripterCore</name>
    <message>
      <source>Script error</source>
      <translation type="unfinished" >Грешка скрипте</translation>
    </message>
    <message>
      <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;>bugs.scribus.net&lt;/a> please.</source>
      <translation type="unfinished" >Ако радите са званичном скриптом молим Вас пријавите грешку на &lt;a href=\&quot;http://bugs.scribus.net\&quot;>bugs.scribus.net&lt;/a>.</translation>
    </message>
    <message>
      <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
      <translation type="unfinished" >Ова порука је и у Вашем клипборду. Користите Ctrl+V да је пренесете у пратиоца грешака.</translation>
    </message>
    <message>
      <source>There was an internal error while trying the command you entered. Details were printed to stderr. </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Examine Script</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Setting up the Python plugin failed. Error details were printed to stderr. </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Documentation for:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Script</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source> doesn't contain any docstring!</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Python Scripts (*.py *.PY);;All Files (*)</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>ScripterPrefsGui</name>
    <message>
      <source>Scripter Preferences</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Enable Extension Scripts</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Extensions</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Console</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Startup Script:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Errors:</source>
      <comment>syntax highlighting</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Comments:</source>
      <comment>syntax highlighting</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Keywords:</source>
      <comment>syntax highlighting</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Signs:</source>
      <comment>syntax highlighting</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Numbers:</source>
      <comment>syntax highlighting</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Strings:</source>
      <comment>syntax highlighting</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Base Texts:</source>
      <comment>syntax highlighting</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Select Color</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Change...</source>
      <translation type="unfinished" >Измени...</translation>
    </message>
    <message>
      <source>Locate Startup Script</source>
      <translation type="unfinished" />
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
      <source>C&amp;lear</source>
      <translation type="unfinished" >Оч&amp;исти</translation>
    </message>
    <message>
      <source>Search finished, found %1 matches</source>
      <translation>Претрага завршена, пронађено %1</translation>
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
      <source>&amp;>></source>
      <translation>&amp;>></translation>
    </message>
    <message>
      <source>&amp;&lt;&lt;</source>
      <translation>&amp;&lt;&lt;</translation>
    </message>
    <message>
      <source>Selected Fields</source>
      <translation>Изабрана поља</translation>
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
      <translation type="unfinished" > %</translation>
    </message>
    <message>
      <source>X-Offset</source>
      <translation>X-померање</translation>
    </message>
    <message>
      <source>Y-Offset</source>
      <translation>Y-померање</translation>
    </message>
  </context>
  <context>
    <name>ShortWordsPlugin</name>
    <message>
      <source>Short &amp;Words...</source>
      <comment>short words plugin</comment>
      <translation>Скраће&amp;нице...</translation>
    </message>
    <message>
      <source>Short Words</source>
      <translation>Скраћенице</translation>
    </message>
    <message>
      <source>Special plug-in for adding non-breaking spaces before or after so called short words. Available in the following languages: </source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>ShortcutWidget</name>
    <message>
      <source>&amp;No Key</source>
      <translation type="unfinished" >&amp;Нема дугмета</translation>
    </message>
    <message>
      <source>&amp;User Defined Key</source>
      <translation type="unfinished" >&amp;Дугме дефинисано од стране корисника</translation>
    </message>
    <message>
      <source>ALT+SHIFT+T</source>
      <translation type="unfinished" >ALT+SHIFT+T</translation>
    </message>
    <message>
      <source>Set &amp;Key</source>
      <translation type="unfinished" >Постави &amp;дугме</translation>
    </message>
    <message>
      <source>Alt</source>
      <translation type="unfinished" >Alt</translation>
    </message>
    <message>
      <source>Ctrl</source>
      <translation type="unfinished" >Ctrl</translation>
    </message>
    <message>
      <source>Shift</source>
      <translation type="unfinished" >Shift</translation>
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
      <translation type="unfinished" >Shift+</translation>
    </message>
    <message>
      <source>Alt+</source>
      <translation type="unfinished" >Alt+</translation>
    </message>
    <message>
      <source>Ctrl+</source>
      <translation type="unfinished" >Ctrl+</translation>
    </message>
    <message>
      <source>No shortcut for the style</source>
      <translation>Нема пречице за стил</translation>
    </message>
    <message>
      <source>Style has user defined shortcut</source>
      <translation>Стил има кориснички одређену пречицу</translation>
    </message>
    <message>
      <source>Assign a shortcut for the style</source>
      <translation>Додели пречицу стилу</translation>
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
      <translation>Уреди стилове...</translation>
    </message>
  </context>
  <context>
    <name>StilFormate</name>
    <message>
      <source>Edit Styles</source>
      <translation>Уреди стилове</translation>
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
      <source>Copy of %1</source>
      <translation>Копија од %1</translation>
    </message>
    <message>
      <source>New Style</source>
      <translation>Нови стил</translation>
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
      <source>&amp;Import</source>
      <translation type="unfinished" >&amp;Увези</translation>
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
      <source>Do you want to save your changes?</source>
      <translation>Да ли желите да снимите измене?</translation>
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
      <translation type="unfinished" />
    </message>
    <message>
      <source>Clear All Text</source>
      <translation>Очисти сав текст</translation>
    </message>
    <message>
      <source>Story Editor - %1</source>
      <translation>Уређивач приче - %1</translation>
    </message>
    <message>
      <source>Do you really want to lose all your changes?</source>
      <translation>Да ли стварно желиш да изгубиш све промене?</translation>
    </message>
    <message>
      <source>Do you really want to clear all your text?</source>
      <translation>Да ли стварно желиш да очистиш сав текст?</translation>
    </message>
    <message>
      <source>&amp;Insert</source>
      <translation type="unfinished" >Уметн&amp;и</translation>
    </message>
    <message>
      <source>Character</source>
      <translation type="unfinished" >Знак</translation>
    </message>
    <message>
      <source>Quote</source>
      <translation>Навод</translation>
    </message>
    <message>
      <source>Spaces &amp;&amp; Breaks</source>
      <translation>Одвајања и прекиди</translation>
    </message>
    <message>
      <source>Ligature</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Space</source>
      <translation>Одвајање</translation>
    </message>
  </context>
  <context>
    <name>StrikeValues</name>
    <message>
      <source>Auto</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source> %</source>
      <translation type="unfinished" > %</translation>
    </message>
    <message>
      <source>Displacement</source>
      <translation>Размештање</translation>
    </message>
    <message>
      <source>Linewidth</source>
      <translation>Дебљина линије</translation>
    </message>
  </context>
  <context>
    <name>StyleManager</name>
    <message>
      <source>Name:</source>
      <translation type="unfinished" >Име:</translation>
    </message>
    <message>
      <source>&amp;Reset</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Apply</source>
      <translation type="unfinished" >&amp;Примени</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation type="unfinished" >&amp;Нови</translation>
    </message>
    <message>
      <source>&amp;Import</source>
      <translation type="unfinished" >&amp;Увези</translation>
    </message>
    <message>
      <source>&amp;Clone</source>
      <translation>&amp;Клонирај</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation type="unfinished" >&amp;Обриши</translation>
    </message>
    <message>
      <source>Reset all changes</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Apply all changes</source>
      <translation>Примени све промене</translation>
    </message>
    <message>
      <source>Apply all changes and exit edit mode</source>
      <translation>Примени све промене и напусти уређивачки начин рада</translation>
    </message>
    <message>
      <source>Create a new style</source>
      <translation>Направи нови стил</translation>
    </message>
    <message>
      <source>Import styles from another document</source>
      <translation>Увези стилове из другог документа</translation>
    </message>
    <message>
      <source>Clone selected style</source>
      <translation>Клонирај изабрани стил</translation>
    </message>
    <message>
      <source>Delete selected styles</source>
      <translation>Обриши изабрани стил</translation>
    </message>
    <message>
      <source>New</source>
      <translation type="unfinished" >Нови</translation>
    </message>
    <message>
      <source>Import</source>
      <translation type="unfinished" >Увези</translation>
    </message>
    <message>
      <source>Clone</source>
      <translation>Клонирај</translation>
    </message>
    <message>
      <source>Send to Scrapbook</source>
      <translation>Пошаљи у Албум</translation>
    </message>
    <message>
      <source>Delete</source>
      <translation type="unfinished" >Обриши</translation>
    </message>
    <message>
      <source>&amp;Edit</source>
      <translation type="unfinished" >&amp;Уреди</translation>
    </message>
    <message>
      <source>&amp;Done</source>
      <translation>&amp;Готово</translation>
    </message>
    <message>
      <source>Shortcut</source>
      <translation>Пречица</translation>
    </message>
    <message>
      <source>Name</source>
      <translation type="unfinished" >Име</translation>
    </message>
    <message>
      <source>Edit styles</source>
      <translation>Уреди стилове</translation>
    </message>
    <message>
      <source>Name of the selected style</source>
      <translation>Име изабраног стила</translation>
    </message>
    <message>
      <source>Edit</source>
      <translation>Уреди</translation>
    </message>
    <message>
      <source>New %1</source>
      <translation>Нови %1</translation>
    </message>
    <message>
      <source>This key sequence is already in use</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>More than one style selected</source>
      <translation>Више од једног стила је изабрано</translation>
    </message>
    <message>
      <source>Open</source>
      <translation type="unfinished" >Отвори</translation>
    </message>
    <message>
      <source>documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
      <translation>документа (*.sla *.sla.gz *.scd *.scd.gz);;Сви фајлови (*)</translation>
    </message>
  </context>
  <context>
    <name>StyleSelect</name>
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
      <source>All Caps</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Underline Text. Hold down the button momentarily to set line width and displacement options.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Underline Words Only. Hold down the button momentarily to set line width and displacement options.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Strike Out. Hold down the button momentarily to set line width and displacement options.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Outline. Hold down the button momentarily to change the outline stroke width.</source>
      <comment>Text Style Selector</comment>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Shadowed Text. Hold down the button momentarily to enable the offset spacing.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>SxwDialog</name>
    <message>
      <source>Use document name as a prefix for paragraph styles</source>
      <translation>Користи име документа као префикс за стилове пасуса</translation>
    </message>
    <message>
      <source>Do not ask again</source>
      <translation>Не питај опет</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>У реду</translation>
    </message>
    <message>
      <source>OpenOffice.org Writer Importer Options</source>
      <translation>Опције OpenOffice.org Writer увозника</translation>
    </message>
    <message>
      <source>Overwrite Paragraph Styles</source>
      <translation>Препиши преко стилова параграфа</translation>
    </message>
    <message>
      <source>Enabling this will overwrite existing styles in the current Scribus document</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Merge Paragraph Styles</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document's styles are named differently.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Prepend the document name to the paragraph style name in Scribus.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Make these settings the default and do not prompt again when importing an OpenOffice.org 1.x document.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cancel</source>
      <translation type="unfinished" >Поништи</translation>
    </message>
  </context>
  <context>
    <name>TOCIndexPrefs</name>
    <message>
      <source>None</source>
      <translation type="unfinished" >Ниједан</translation>
    </message>
    <message>
      <source>At the beginning</source>
      <translation>На почетак</translation>
    </message>
    <message>
      <source>At the end</source>
      <translation>На крај</translation>
    </message>
    <message>
      <source>Not Shown</source>
      <translation>Није приказано</translation>
    </message>
    <message>
      <source>Table of Contents and Indexes</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Table Of Contents</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Add</source>
      <translation type="unfinished" >&amp;Додај</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation type="unfinished" >&amp;Обриши</translation>
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
      <translation type="unfinished" />
    </message>
    <message>
      <source>Item Attribute Name:</source>
      <translation type="unfinished" />
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
      <translation type="unfinished" />
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
      <translation type="unfinished" />
    </message>
    <message>
      <source>Destination Frame:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Table of Contents %1</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>TOCIndexPrefsBase</name>
    <message>
      <source>Table of Contents and Indexes</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Table Of Contents</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Add</source>
      <translation type="unfinished" >&amp;Додај</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation type="unfinished" >&amp;Обриши</translation>
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
      <translation type="unfinished" />
    </message>
    <message>
      <source>Item Attribute Name:</source>
      <translation type="unfinished" />
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
      <translation type="unfinished" />
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
      <translation type="unfinished" />
    </message>
    <message>
      <source>Destination Frame:</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>TabCheckDoc</name>
    <message>
      <source>Ignore all errors</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Automatic check before printing or exporting</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Check for missing glyphs</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Check for overflow in text frames</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Check for missing images</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Check image resolution</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Lowest allowed resolution</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source> dpi</source>
      <translation type="unfinished" > тпи</translation>
    </message>
    <message>
      <source>Check for PDF Annotations and Fields</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Add Profile</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Remove Profile</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Check for placed PDF Files</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Highest allowed resolution</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Check for GIF images</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Ignore non-printable Layers</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Check for items not on a page</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Check for used transparencies</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>TabDisplay</name>
    <message>
      <source>Color for paper</source>
      <translation type="unfinished" >Боја папира</translation>
    </message>
    <message>
      <source>Mask the area outside the margins in the margin color</source>
      <translation type="unfinished" >Маскирај област изван линија маргина у боју тих линија</translation>
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
      <translation type="unfinished" />
    </message>
    <message>
      <source>Turns the display of layer indicators on or off</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Turns the display of pictures on or off</source>
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
      <source>Set the default zoom level</source>
      <translation type="unfinished" >Постави подразумевани ниво увеличања/умањења</translation>
    </message>
    <message>
      <source>Place a ruler against your screen and drag the slider to set the zoom level so Scribus will display your pages and objects on them at the correct size</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>TabDisplayBase</name>
    <message>
      <source>Page Display</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Show Layer Indicators</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Show Frames</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Show Text Chains</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Display &amp;Unprintable Area in Margin Color</source>
      <translation type="unfinished" >Прикажи област која се не може одштампати у боји маргине</translation>
    </message>
    <message>
      <source>Alt+U</source>
      <translation>Alt+U</translation>
    </message>
    <message>
      <source>Rulers Relative to Page</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Show Text Control Characters</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Show Pictures</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scratch Space</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Left:</source>
      <translation type="unfinished" >&amp;Лево:</translation>
    </message>
    <message>
      <source>&amp;Right:</source>
      <translation type="unfinished" >&amp;Десно:</translation>
    </message>
    <message>
      <source>&amp;Bottom:</source>
      <translation type="unfinished" >&amp;Дно:</translation>
    </message>
    <message>
      <source>&amp;Top:</source>
      <translation type="unfinished" >&amp;Врх:</translation>
    </message>
    <message>
      <source>Gaps Between Pages</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Horizontal:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Vertical:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Adjust Display Size</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>To adjust the display drag the ruler below with the slider.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>General</source>
      <translation type="unfinished" >Опште</translation>
    </message>
    <message>
      <source>Colors</source>
      <translation type="unfinished" >Боје</translation>
    </message>
    <message>
      <source>Pages:</source>
      <translation>Стране:</translation>
    </message>
    <message>
      <source>Fill Color:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Selected Page Border:</source>
      <translation>Ивица изабране стране:</translation>
    </message>
    <message>
      <source>Frames</source>
      <translation>Оквири</translation>
    </message>
    <message>
      <source>Locked:</source>
      <translation>Закључано:</translation>
    </message>
    <message>
      <source>Normal:</source>
      <translation>Нормално:</translation>
    </message>
    <message>
      <source>Selected:</source>
      <translation>Изабрано:</translation>
    </message>
    <message>
      <source>Linked:</source>
      <translation>Закључано:</translation>
    </message>
    <message>
      <source>Grouped:</source>
      <translation>Груписано:</translation>
    </message>
    <message>
      <source>Annotation:</source>
      <translation>Анотација:</translation>
    </message>
    <message>
      <source>Text:</source>
      <translation>ТекстЧ</translation>
    </message>
    <message>
      <source>Control Characters:</source>
      <translation>Контролно знакови:</translation>
    </message>
    <message>
      <source>Show Bleed Area</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>TabDisplayBase</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scale%</source>
      <translation>Скалирање%</translation>
    </message>
  </context>
  <context>
    <name>TabDocument</name>
    <message>
      <source>Page Size</source>
      <translation type="unfinished" >Величина папира</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation type="unfinished" >&amp;Величина:</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation type="unfinished" >Усправно</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation type="unfinished" >Водоравно</translation>
    </message>
    <message>
      <source>Orie&amp;ntation:</source>
      <translation type="unfinished" >Усм&amp;ерење:</translation>
    </message>
    <message>
      <source>Units:</source>
      <translation>Јединице:</translation>
    </message>
    <message>
      <source>&amp;Width:</source>
      <translation type="unfinished" >Ш&amp;ирина:</translation>
    </message>
    <message>
      <source>&amp;Height:</source>
      <translation type="unfinished" >&amp;Висина:</translation>
    </message>
    <message>
      <source>Margin Guides</source>
      <translation type="unfinished" >Водиље маргина</translation>
    </message>
    <message>
      <source>Autosave</source>
      <translation type="unfinished" >Аутоматско снимање</translation>
    </message>
    <message>
      <source>min</source>
      <translation type="unfinished" >мин</translation>
    </message>
    <message>
      <source>&amp;Interval:</source>
      <translation type="unfinished" >&amp;Период:</translation>
    </message>
    <message>
      <source>Undo/Redo</source>
      <translation>Опозови/понови</translation>
    </message>
    <message>
      <source>Action history length</source>
      <translation>Дужина историје промена</translation>
    </message>
    <message>
      <source>Width of document pages, editable if you have chosen a custom page size</source>
      <translation type="unfinished" >Ширина страница документа, измењива ако сте изабрали произвољну величину странице</translation>
    </message>
    <message>
      <source>Height of document pages, editable if you have chosen a custom page size</source>
      <translation type="unfinished" >Висина страница документа, измењива ако сте изабрали произвољну величину странице</translation>
    </message>
    <message>
      <source>Default page size, either a standard size or a custom size</source>
      <translation type="unfinished" >Подразумевана величина странице, или стандардна или произвољна величина</translation>
    </message>
    <message>
      <source>Default orientation of document pages</source>
      <translation type="unfinished" >Подразумевана оријентација страница документа</translation>
    </message>
    <message>
      <source>Default unit of measurement for document editing</source>
      <translation type="unfinished" >Подразумевана јединица мере за уређивање документа</translation>
    </message>
    <message>
      <source>When enabled, Scribus saves a backup copy of your file with the .bak extension each time the time period elapses</source>
      <translation>Када је укључено, Скрибус чува копије радног фајла са .bak екстензијом сваки пут када се наврши временски период</translation>
    </message>
    <message>
      <source>Time period between saving automatically</source>
      <translation type="unfinished" >Временски период између аутоматског снимања</translation>
    </message>
    <message>
      <source>Set the length of the action history in steps. If set to 0 infinite amount of actions will be stored.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Apply the page size changes to all existing pages in the document</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Apply settings to:</source>
      <translation>Примени подешавања на:</translation>
    </message>
    <message>
      <source>All Document Pages</source>
      <translation>Све стране документа</translation>
    </message>
    <message>
      <source>All Master Pages</source>
      <translation>Све главне стране</translation>
    </message>
    <message>
      <source>Apply the page size changes to all existing master pages in the document</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>TabExternalToolsWidget</name>
    <message>
      <source>Locate Ghostscript</source>
      <translation>Пронађи Гоустскрипт</translation>
    </message>
    <message>
      <source>Locate your image editor</source>
      <translation>Пронађи свој едитор слика</translation>
    </message>
    <message>
      <source>Locate your web browser</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>TabExternalToolsWidgetBase</name>
    <message>
      <source>External Tools</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>PostScript Interpreter</source>
      <translation>PostScript преводила</translation>
    </message>
    <message>
      <source>&amp;Name of Executable:</source>
      <translation type="unfinished" >&amp;Име извршног фајла:</translation>
    </message>
    <message>
      <source>&amp;Change..</source>
      <translation>&amp;Промени...</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation type="unfinished" >Alt+C</translation>
    </message>
    <message>
      <source>Antialias &amp;Text</source>
      <translation type="unfinished" >Омекшај &amp;текст</translation>
    </message>
    <message>
      <source>Alt+T</source>
      <translation>Alt+T</translation>
    </message>
    <message>
      <source>Antialias text for EPS and PDF onscreen rendering</source>
      <translation type="unfinished" >Омекшај текст за EPS и PDF рендеровање на екрану</translation>
    </message>
    <message>
      <source>Antialias &amp;Graphics</source>
      <translation type="unfinished" >Омекшај &amp;графику</translation>
    </message>
    <message>
      <source>Alt+G</source>
      <translation>Alt+G</translation>
    </message>
    <message>
      <source>Antialias graphics for EPS and PDF onscreen rendering</source>
      <translation type="unfinished" >Омекшај графику за EPS и PDF рендеровање на екрану</translation>
    </message>
    <message>
      <source>Resolution:</source>
      <translation>Резолуција:</translation>
    </message>
    <message>
      <source> dpi</source>
      <translation type="unfinished" > тпи</translation>
    </message>
    <message>
      <source>Image Processing Tool</source>
      <translation type="unfinished" >Алат за обраду слика</translation>
    </message>
    <message>
      <source>Name of &amp;Executable:</source>
      <translation type="unfinished" >Имена &amp;извршних фајлова:</translation>
    </message>
    <message>
      <source>&amp;Change...</source>
      <translation type="unfinished" >&amp;Измени...</translation>
    </message>
    <message>
      <source>&amp;Rescan</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Alt+R</source>
      <translation>Alt+R</translation>
    </message>
    <message>
      <source>&lt;qt>Add the path for the Ghostscript interpreter. On Windows, please note it is important to note you need to use the program named gswin32c.exe - NOT gswin32.exe. Otherwise, this maybe cause a hang when starting Scribus.&lt;/qt></source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&lt;qt>File system location for graphics editor. If you use gimp and your distribution includes it, we recommend 'gimp-remote', as it allows you to edit the image in an already running instance of gimp.&lt;/qt></source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Web Browser</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Web Browser to launch with links from the Help system</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&lt;qt>File system location for your web browser. This is used for external links from the Help system.&lt;/qt></source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Rescan for the external tools if they do not exist in the already specified location</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>TabGeneral</name>
    <message>
      <source>Select your default language for Scribus to run with. Leave this blank to choose based on environment variables. You can still override this by passing a command line option when starting Scribus</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Number of recently edited documents to show in the File menu</source>
      <translation type="unfinished" >Број скорије измењених докумената који се приказују у менију „Фајл“</translation>
    </message>
    <message>
      <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
      <translation type="unfinished" >Број линија које ће се скроловати при сваком померању точкића на мишу</translation>
    </message>
    <message>
      <source>Choose the default window decoration and looks. Scribus inherits any available KDE or Qt themes, if Qt is configured to search KDE plugins.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Default font size for the menus and windows</source>
      <translation type="unfinished" >Подразумевана величина за меније и прозоре</translation>
    </message>
    <message>
      <source>Default font size for the tool windows</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Default documents directory</source>
      <translation type="unfinished" >Подразумевани директоријум за документе</translation>
    </message>
    <message>
      <source>Default ICC profiles directory. This cannot be changed with a document open. By default, Scribus will look in the System Directories under Mac OSX and Windows. On Linux and Unix, Scribus will search $home/.color/icc,/usr/share/color/icc and /usr/local/share/color/icc </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Default Scripter scripts directory</source>
      <translation type="unfinished" >Подразумевани директоријум за scripter скрипте</translation>
    </message>
    <message>
      <source>Additional directory for document templates</source>
      <translation>Додатни директоријум за шаблоне докумената</translation>
    </message>
    <message>
      <source>Choose a Directory</source>
      <translation type="unfinished" >Изаберите директоријум</translation>
    </message>
  </context>
  <context>
    <name>TabGeneralBase</name>
    <message>
      <source>&amp;Language:</source>
      <translation type="unfinished" >&amp;Језик:</translation>
    </message>
    <message>
      <source>&amp;Theme:</source>
      <translation type="unfinished" >&amp;Тема:</translation>
    </message>
    <message>
      <source>Time before a Move or Resize starts:</source>
      <translation>Време пре него што померање и промена величине запчне:</translation>
    </message>
    <message>
      <source> ms</source>
      <translation> ms</translation>
    </message>
    <message>
      <source>&amp;Font Size (Menus):</source>
      <translation>&amp;Величина фонта (менији)</translation>
    </message>
    <message>
      <source> pt</source>
      <translation type="unfinished" > тач.</translation>
    </message>
    <message>
      <source>Font Size (&amp;Palettes):</source>
      <translation>Величина &amp;фонта (палете)</translation>
    </message>
    <message>
      <source>&amp;Wheel Jump:</source>
      <translation type="unfinished" >&amp;Скок помоћу точкића:</translation>
    </message>
    <message>
      <source>&amp;Recent Documents:</source>
      <translation type="unfinished" >&amp;Скорашњи документи:</translation>
    </message>
    <message>
      <source>Paths</source>
      <translation type="unfinished" >Путање</translation>
    </message>
    <message>
      <source>&amp;Documents:</source>
      <translation type="unfinished" >&amp;Документи:</translation>
    </message>
    <message>
      <source>&amp;Change...</source>
      <translation type="unfinished" >&amp;Измени...</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation type="unfinished" >Alt+C</translation>
    </message>
    <message>
      <source>&amp;ICC Profiles:</source>
      <translation type="unfinished" >&amp;ICC профили:</translation>
    </message>
    <message>
      <source>C&amp;hange...</source>
      <translation type="unfinished" >И&amp;змени...</translation>
    </message>
    <message>
      <source>Alt+H</source>
      <translation>Alt+H</translation>
    </message>
    <message>
      <source>&amp;Scripts:</source>
      <translation type="unfinished" >С&amp;крипте:</translation>
    </message>
    <message>
      <source>Ch&amp;ange...</source>
      <translation type="unfinished" >Изм&amp;ени...</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>Document &amp;Templates:</source>
      <translation>Документ и шаблони:</translation>
    </message>
    <message>
      <source>Cha&amp;nge...</source>
      <translation type="unfinished" >Изме&amp;ни...</translation>
    </message>
    <message>
      <source>Alt+N</source>
      <translation>Alt+N</translation>
    </message>
    <message>
      <source>User Interface</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Show Startup Dialog</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Show Splashscreen on Startup</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>TabGeneralBase</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>TabGuides</name>
    <message>
      <source>Common Settings</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Placing in Documents</source>
      <translation>Постављање у документу</translation>
    </message>
    <message>
      <source>In the Background</source>
      <translation>У позадину</translation>
    </message>
    <message>
      <source>In the Foreground</source>
      <translation>Испред</translation>
    </message>
    <message>
      <source>Snapping</source>
      <translation>Лепљење</translation>
    </message>
    <message>
      <source>Snap Distance:</source>
      <translation>Близина лепљења</translation>
    </message>
    <message>
      <source>Grab Radius:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source> px</source>
      <translation type="unfinished" > px</translation>
    </message>
    <message>
      <source>Show Guides</source>
      <translation>Покажи водиље</translation>
    </message>
    <message>
      <source>Show Margins</source>
      <translation>Покажи маргине</translation>
    </message>
    <message>
      <source>Show Page Grid</source>
      <translation>Покажи мрежу стране</translation>
    </message>
    <message>
      <source>Major Grid</source>
      <translation>Главне линије мреже</translation>
    </message>
    <message>
      <source>Color:</source>
      <translation type="unfinished" >Боја:</translation>
    </message>
    <message>
      <source>Spacing:</source>
      <translation>Размак:</translation>
    </message>
    <message>
      <source>Minor Grid</source>
      <translation>Споредне линије мреже</translation>
    </message>
    <message>
      <source>Show Baseline Grid</source>
      <translation type="unfinished" >Прикажи основну мрежу</translation>
    </message>
    <message>
      <source>Baseline &amp;Grid:</source>
      <translation type="unfinished" >Основна &amp;мрежа:</translation>
    </message>
    <message>
      <source>Baseline &amp;Offset:</source>
      <translation type="unfinished" >Основни &amp;померај:</translation>
    </message>
    <message>
      <source>Distance between the minor grid lines</source>
      <translation type="unfinished" >Растојање између мањих линија мреже</translation>
    </message>
    <message>
      <source>Distance between the major grid lines</source>
      <translation type="unfinished" >Растојање између озбиљних линија мреже</translation>
    </message>
    <message>
      <source>Distance within which an object will snap to your placed guides</source>
      <translation type="unfinished" >Растојање у оквиру кога ће се објекат пребацити на постављене водиље</translation>
    </message>
    <message>
      <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
      <translation type="unfinished" >Радијус области где ће Вам scribus дозволити да хватате објекте</translation>
    </message>
    <message>
      <source>Color of the minor grid lines</source>
      <translation type="unfinished" >Боја мањих линија мреже</translation>
    </message>
    <message>
      <source>Color of the major grid lines</source>
      <translation type="unfinished" >Боја озбиљнијих линија мреже</translation>
    </message>
    <message>
      <source>Color of the guide lines you insert</source>
      <translation type="unfinished" >Боја водиља које Ви умећете</translation>
    </message>
    <message>
      <source>Color for the margin lines</source>
      <translation type="unfinished" >Боја линија маргина</translation>
    </message>
    <message>
      <source>Turns the basegrid on or off</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Turns the gridlines on or off</source>
      <translation>Искључи мрежу</translation>
    </message>
    <message>
      <source>Turns the guides on or off</source>
      <translation>Искључи водиље</translation>
    </message>
    <message>
      <source>Turns the margins on or off</source>
      <translation>Искључи маргине</translation>
    </message>
    <message>
      <source>Baseline Settings</source>
      <translation type="unfinished" />
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
      <source>Color for the baseline grid</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Distance between the lines of the baseline grid</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Distance from the top of the page for the first baseline</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>px</source>
      <translation>px</translation>
    </message>
  </context>
  <context>
    <name>TabKeyboardShortcutsWidget</name>
    <message>
      <source>Key Set XML Files (*.ksxml)</source>
      <translation>Key Set XML Files (*.ksxml)</translation>
    </message>
    <message>
      <source>Alt</source>
      <translation type="unfinished" >Alt</translation>
    </message>
    <message>
      <source>Ctrl</source>
      <translation type="unfinished" >Ctrl</translation>
    </message>
    <message>
      <source>Shift</source>
      <translation type="unfinished" >Shift</translation>
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
      <translation type="unfinished" >Shift+</translation>
    </message>
    <message>
      <source>Alt+</source>
      <translation type="unfinished" >Alt+</translation>
    </message>
    <message>
      <source>Ctrl+</source>
      <translation type="unfinished" >Ctrl+</translation>
    </message>
    <message>
      <source>This key sequence is already in use</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>TabKeyboardShortcutsWidgetBase</name>
    <message>
      <source>Keyboard Shortcuts</source>
      <translation>Пречице на тастатури</translation>
    </message>
    <message>
      <source>Search:</source>
      <translation>Тражи:</translation>
    </message>
    <message>
      <source>Action</source>
      <translation type="unfinished" >Акција</translation>
    </message>
    <message>
      <source>Shortcut</source>
      <translation>Пречица</translation>
    </message>
    <message>
      <source>Shortcut for Selected Action</source>
      <translation>Пречица за изабрану акцију</translation>
    </message>
    <message>
      <source>&amp;No Key</source>
      <translation type="unfinished" >&amp;Нема дугмета</translation>
    </message>
    <message>
      <source>Alt+N</source>
      <translation>Alt+N</translation>
    </message>
    <message>
      <source>&amp;User Defined Key</source>
      <translation type="unfinished" >&amp;Дугме дефинисано од стране корисника</translation>
    </message>
    <message>
      <source>Alt+U</source>
      <translation>Alt+U</translation>
    </message>
    <message>
      <source>Set &amp;Key</source>
      <translation type="unfinished" >Постави &amp;дугме</translation>
    </message>
    <message>
      <source>Alt+K</source>
      <translation>Alt+K</translation>
    </message>
    <message>
      <source>CTRL+ALT+SHIFT+W</source>
      <translation>CTRL+ALT+SHIFT+W</translation>
    </message>
    <message>
      <source>Loadable Shortcut Sets</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Keyboard shortcut sets available to load</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Load</source>
      <translation>&amp;Учитај</translation>
    </message>
    <message>
      <source>Alt+L</source>
      <translation>Alt+L</translation>
    </message>
    <message>
      <source>Load the selected shortcut set</source>
      <translation>Учирај изабрани скуп пречица</translation>
    </message>
    <message>
      <source>&amp;Import...</source>
      <translation>&amp;Увези...</translation>
    </message>
    <message>
      <source>Alt+I</source>
      <translation>Alt+I</translation>
    </message>
    <message>
      <source>Import a shortcut set into the current configuration</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Export...</source>
      <translation>&amp;Извези...</translation>
    </message>
    <message>
      <source>Alt+E</source>
      <translation>Alt+E</translation>
    </message>
    <message>
      <source>Export the current shortcuts into an importable file</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Reset</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Alt+R</source>
      <translation>Alt+R</translation>
    </message>
    <message>
      <source>Reload the default Scribus shortcuts</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>TabManager</name>
    <message>
      <source>Manage Tabulators</source>
      <translation>Управљање табулаторима</translation>
    </message>
  </context>
  <context>
    <name>TabMiscellaneousBase</name>
    <message>
      <source>Form1</source>
      <translation>Формулар1</translation>
    </message>
    <message>
      <source>Always ask before fonts are replaced when loading a document</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Preview of current Paragraph Style visible when editing Styles</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Lorem Ipsum</source>
      <translation>Lorem Ipsum</translation>
    </message>
    <message>
      <source>Always use standard Lorem Ipsum</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Count of the Paragraphs:</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>TabPDFOptions</name>
    <message>
      <source>Export Range</source>
      <translation type="unfinished" >Опсег извожења</translation>
    </message>
    <message>
      <source>&amp;All Pages</source>
      <translation type="unfinished" >&amp;Све странице</translation>
    </message>
    <message>
      <source>C&amp;hoose Pages</source>
      <translation type="unfinished" >Изаб&amp;ерите странице</translation>
    </message>
    <message>
      <source>&amp;Rotation:</source>
      <translation type="unfinished" >&amp;Ротација:</translation>
    </message>
    <message>
      <source>File Options</source>
      <translation type="unfinished" >Опције за фајлове</translation>
    </message>
    <message>
      <source>Compatibilit&amp;y:</source>
      <translation type="unfinished" >Компатибилнос&amp;т:</translation>
    </message>
    <message>
      <source>&amp;Binding:</source>
      <translation type="unfinished" >&amp;Повезивање</translation>
    </message>
    <message>
      <source>Left Margin</source>
      <translation type="unfinished" >Лева маргина</translation>
    </message>
    <message>
      <source>Right Margin</source>
      <translation type="unfinished" >Десна маргина</translation>
    </message>
    <message>
      <source>Generate &amp;Thumbnails</source>
      <translation type="unfinished" >Направи &amp;сличице</translation>
    </message>
    <message>
      <source>Save &amp;Linked Text Frames as PDF Articles</source>
      <translation type="unfinished" >Сними &amp;повезане текстуалне оквире као PDF чланке</translation>
    </message>
    <message>
      <source>&amp;Include Bookmarks</source>
      <translation type="unfinished" >&amp;Обухвати маркере</translation>
    </message>
    <message>
      <source> dpi</source>
      <translation type="unfinished" > тпи</translation>
    </message>
    <message>
      <source>Com&amp;press Text and Vector Graphics</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Automatic</source>
      <translation type="unfinished" >Аутоматски</translation>
    </message>
    <message>
      <source>None</source>
      <translation type="unfinished" >Ниједан</translation>
    </message>
    <message>
      <source>Maximum</source>
      <translation type="unfinished" >Максимално</translation>
    </message>
    <message>
      <source>High</source>
      <translation type="unfinished" >Висок</translation>
    </message>
    <message>
      <source>Medium</source>
      <translation type="unfinished" >Средњи</translation>
    </message>
    <message>
      <source>Low</source>
      <translation type="unfinished" >Низак</translation>
    </message>
    <message>
      <source>Minimum</source>
      <translation type="unfinished" >Минимално</translation>
    </message>
    <message>
      <source>&amp;General</source>
      <translation type="unfinished" >&amp;Опште</translation>
    </message>
    <message>
      <source>Embedding</source>
      <translation type="unfinished" >Уметање</translation>
    </message>
    <message>
      <source>Available Fonts:</source>
      <translation type="unfinished" >Доступни фонтови:</translation>
    </message>
    <message>
      <source>Fonts to embed:</source>
      <translation type="unfinished" >Фонтови за уметање:</translation>
    </message>
    <message>
      <source>&amp;Fonts</source>
      <translation type="unfinished" >&amp;Фонтови</translation>
    </message>
    <message>
      <source>Enable &amp;Presentation Effects</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Page</source>
      <translation type="unfinished" >Страница</translation>
    </message>
    <message>
      <source>Show Page Pre&amp;views</source>
      <translation type="unfinished" >Прикажи пред&amp;приказе страница</translation>
    </message>
    <message>
      <source>Effects</source>
      <translation type="unfinished" >Ефекти</translation>
    </message>
    <message>
      <source>&amp;Display Duration:</source>
      <translation type="unfinished" >&amp;Прикажи трајање:</translation>
    </message>
    <message>
      <source>Effec&amp;t Duration:</source>
      <translation type="unfinished" >Ефека&amp;т трајање:</translation>
    </message>
    <message>
      <source>Effect T&amp;ype:</source>
      <translation type="unfinished" >Ефекат в&amp;рста:</translation>
    </message>
    <message>
      <source>&amp;Moving Lines:</source>
      <translation type="unfinished" >&amp;Премештам линије:</translation>
    </message>
    <message>
      <source>F&amp;rom the:</source>
      <translation type="unfinished" >&amp;Од:</translation>
    </message>
    <message>
      <source>D&amp;irection:</source>
      <translation type="unfinished" >С&amp;мера:</translation>
    </message>
    <message>
      <source> sec</source>
      <translation type="unfinished" > сек.</translation>
    </message>
    <message>
      <source>No Effect</source>
      <translation type="unfinished" >Без ефеката</translation>
    </message>
    <message>
      <source>Blinds</source>
      <translation type="unfinished" >Ролетне</translation>
    </message>
    <message>
      <source>Box</source>
      <translation type="unfinished" >Кутија</translation>
    </message>
    <message>
      <source>Dissolve</source>
      <translation type="unfinished" >Растварање</translation>
    </message>
    <message>
      <source>Glitter</source>
      <translation type="unfinished" >Сјај</translation>
    </message>
    <message>
      <source>Split</source>
      <translation type="unfinished" >Раздвоји</translation>
    </message>
    <message>
      <source>Wipe</source>
      <translation type="unfinished" >Обриши</translation>
    </message>
    <message>
      <source>Horizontal</source>
      <translation type="unfinished" >Водоравно</translation>
    </message>
    <message>
      <source>Vertical</source>
      <translation type="unfinished" >Усправно</translation>
    </message>
    <message>
      <source>Inside</source>
      <translation type="unfinished" >Унутра</translation>
    </message>
    <message>
      <source>Outside</source>
      <translation type="unfinished" >Споља</translation>
    </message>
    <message>
      <source>Left to Right</source>
      <translation type="unfinished" >С лева на десно</translation>
    </message>
    <message>
      <source>Top to Bottom</source>
      <translation type="unfinished" >Од врха до дна</translation>
    </message>
    <message>
      <source>Bottom to Top</source>
      <translation type="unfinished" >Од дна до врха</translation>
    </message>
    <message>
      <source>Right to Left</source>
      <translation type="unfinished" >С десна на лево</translation>
    </message>
    <message>
      <source>Top-left to Bottom-Right</source>
      <translation type="unfinished" >Врх-лево до дно-десно</translation>
    </message>
    <message>
      <source>&amp;Apply Effect on all Pages</source>
      <translation type="unfinished" >&amp;Примени ефекат на све странице</translation>
    </message>
    <message>
      <source>E&amp;xtras</source>
      <translation type="unfinished" >Пр&amp;оширења</translation>
    </message>
    <message>
      <source>&amp;Use Encryption</source>
      <translation type="unfinished" >&amp;Користи шифровање</translation>
    </message>
    <message>
      <source>Passwords</source>
      <translation type="unfinished" >Лозинке</translation>
    </message>
    <message>
      <source>&amp;User:</source>
      <translation type="unfinished" >&amp;Корисник:</translation>
    </message>
    <message>
      <source>&amp;Owner:</source>
      <translation type="unfinished" >&amp;Власник:</translation>
    </message>
    <message>
      <source>Settings</source>
      <translation type="unfinished" >Поставке</translation>
    </message>
    <message>
      <source>Allow &amp;Printing the Document</source>
      <translation type="unfinished" >Дозволи &amp;штампање документа</translation>
    </message>
    <message>
      <source>Allow &amp;Changing the Document</source>
      <translation type="unfinished" >Дозволи &amp;измену документа</translation>
    </message>
    <message>
      <source>Allow Cop&amp;ying Text and Graphics</source>
      <translation type="unfinished" >Дозволи &amp;копирање текста и графике</translation>
    </message>
    <message>
      <source>Allow Adding &amp;Annotations and Fields</source>
      <translation type="unfinished" >Дозволи додавање &amp;анотација и поља</translation>
    </message>
    <message>
      <source>S&amp;ecurity</source>
      <translation type="unfinished" >&amp;Безбедност</translation>
    </message>
    <message>
      <source>General</source>
      <translation type="unfinished" >Опште</translation>
    </message>
    <message>
      <source>Output &amp;Intended For:</source>
      <translation type="unfinished" >Излаз &amp;намењен за:</translation>
    </message>
    <message>
      <source>Screen / Web</source>
      <translation type="unfinished" >Екран / веб</translation>
    </message>
    <message>
      <source>Printer</source>
      <translation type="unfinished" >Штампач</translation>
    </message>
    <message>
      <source>Grayscale</source>
      <translation>Нијансе сиве</translation>
    </message>
    <message>
      <source>&amp;Use Custom Rendering Settings</source>
      <translation type="unfinished" >&amp;Користи произвољне поставке рендеровања</translation>
    </message>
    <message>
      <source>Rendering Settings</source>
      <translation type="unfinished" >Поставке рендеровања</translation>
    </message>
    <message>
      <source>Fre&amp;quency:</source>
      <translation type="unfinished" >Уче&amp;сталост:</translation>
    </message>
    <message>
      <source>&amp;Angle:</source>
      <translation type="unfinished" >&amp;Угао:</translation>
    </message>
    <message>
      <source>S&amp;pot Function:</source>
      <translation type="unfinished" >Та&amp;чка функција:</translation>
    </message>
    <message>
      <source>Simple Dot</source>
      <translation type="unfinished" >Једноставна тачка</translation>
    </message>
    <message>
      <source>Line</source>
      <translation type="unfinished" >Линија</translation>
    </message>
    <message>
      <source>Round</source>
      <translation type="unfinished" >Кружна</translation>
    </message>
    <message>
      <source>Ellipse</source>
      <translation type="unfinished" >Елипса</translation>
    </message>
    <message>
      <source>Solid Colors:</source>
      <translation type="unfinished" >Пуне боје:</translation>
    </message>
    <message>
      <source>Use ICC Profile</source>
      <translation type="unfinished" >Користи ICC профил</translation>
    </message>
    <message>
      <source>Profile:</source>
      <translation type="unfinished" >Профил:</translation>
    </message>
    <message>
      <source>Rendering-Intent:</source>
      <translation type="unfinished" >Намера рендеровања:</translation>
    </message>
    <message>
      <source>Perceptual</source>
      <translation type="unfinished" >Перцептуално</translation>
    </message>
    <message>
      <source>Relative Colorimetric</source>
      <translation type="unfinished" >Релативна колорметрика</translation>
    </message>
    <message>
      <source>Saturation</source>
      <translation type="unfinished" >Засићење</translation>
    </message>
    <message>
      <source>Absolute Colorimetric</source>
      <translation type="unfinished" >Апсолутна колорметрика</translation>
    </message>
    <message>
      <source>Images:</source>
      <translation type="unfinished" >Слике:</translation>
    </message>
    <message>
      <source>Don't use embedded ICC profiles</source>
      <translation type="unfinished" >Немој да користиш уметнуте ICC профиле</translation>
    </message>
    <message>
      <source>C&amp;olor</source>
      <translation type="unfinished" >Б&amp;оја</translation>
    </message>
    <message>
      <source>PDF/X-3 Output Intent</source>
      <translation type="unfinished" >PDF/X-3 на излазу</translation>
    </message>
    <message>
      <source>&amp;Info String:</source>
      <translation type="unfinished" >&amp;Инфо знаковни низ:</translation>
    </message>
    <message>
      <source>Output &amp;Profile:</source>
      <translation type="unfinished" >Излазни &amp;профил:</translation>
    </message>
    <message>
      <source>Show page previews of each page listed above.</source>
      <translation type="unfinished" >Прикажи преглед стране за сваку од горе излистаних страница.</translation>
    </message>
    <message>
      <source>Type of the display effect.</source>
      <translation type="unfinished" >Врста ефекта приказа.</translation>
    </message>
    <message>
      <source>Direction of the effect of moving lines for the split and blind effects.</source>
      <translation type="unfinished" >Смер ефекта крећућих линија за ефекте „подели“ и „ролетна“.</translation>
    </message>
    <message>
      <source>Starting position for the box and split effects.</source>
      <translation type="unfinished" >Почетна позиција за ефекте „подели“ и „кутија“.</translation>
    </message>
    <message>
      <source>Direction of the glitter or wipe effects.</source>
      <translation type="unfinished" >Смер ефеката „сјај“ и „брисање“.</translation>
    </message>
    <message>
      <source>Apply the selected effect to all pages.</source>
      <translation type="unfinished" >Примени изабрани ефекат на све странице.</translation>
    </message>
    <message>
      <source>Export all pages to PDF</source>
      <translation type="unfinished" >Извези све странице у PDF</translation>
    </message>
    <message>
      <source>Export a range of pages to PDF</source>
      <translation type="unfinished" >Извези опсег страница у PDF</translation>
    </message>
    <message>
      <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
      <translation type="unfinished" >Прави PDF чланке, што је корисно за навигацију по повезаним чланцима у PDF-у.</translation>
    </message>
    <message>
      <source>DPI (Dots Per Inch) for image export.</source>
      <translation type="unfinished" >ТПИ (Тачака По Инчу) за извоз слика.</translation>
    </message>
    <message>
      <source>Choose a password for users to be able to read your PDF.</source>
      <translation type="unfinished" >Изаберите лозинку помоћу које ће корисници моћи да читају Ваш PDF.</translation>
    </message>
    <message>
      <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
      <translation type="unfinished" >Дозволи штампање PDF-а. Ако није штиклирано, штампање није омогућено. </translation>
    </message>
    <message>
      <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
      <translation type="unfinished" >Дозволи измену PDF-а. Ако није штиклирано, измена PDF-а није омогућена.</translation>
    </message>
    <message>
      <source>Embed a color profile for solid colors</source>
      <translation type="unfinished" >Уметни профил боја за пуне боје</translation>
    </message>
    <message>
      <source>Color profile for solid colors</source>
      <translation type="unfinished" >Профил боја за пуне боје</translation>
    </message>
    <message>
      <source>Rendering intent for solid colors</source>
      <translation type="unfinished" >Намера рендеровања за пуне боје</translation>
    </message>
    <message>
      <source>Embed a color profile for images</source>
      <translation type="unfinished" >Уметни профил боја за слик</translation>
    </message>
    <message>
      <source>Do not use color profiles that are embedded in source images</source>
      <translation type="unfinished" >Немој да користиш профиле боја који су уметнути у изворне слике</translation>
    </message>
    <message>
      <source>Color profile for images</source>
      <translation type="unfinished" >Профил боја за слике</translation>
    </message>
    <message>
      <source>Rendering intent for images</source>
      <translation type="unfinished" >Намера рендеровања за слике</translation>
    </message>
    <message>
      <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
      <translation type="unfinished" >Излазни профил за штампу. Ако је могуће, добавите нека упутства од Вашег штампача везана за избор профила.</translation>
    </message>
    <message>
      <source>Distance for bleed from the top of the physical page</source>
      <translation type="unfinished" >Растојање за цурење од врха физичке странице</translation>
    </message>
    <message>
      <source>Distance for bleed from the bottom of the physical page</source>
      <translation type="unfinished" >Растојање за цурење од дна физичке странице</translation>
    </message>
    <message>
      <source>Distance for bleed from the left of the physical page</source>
      <translation type="unfinished" >Растојање за цурење с лева физичке странице</translation>
    </message>
    <message>
      <source>Distance for bleed from the right of the physical page</source>
      <translation type="unfinished" >Растојање за цурење с десна физичке странице</translation>
    </message>
    <message>
      <source>Mirror Page(s) horizontally</source>
      <translation>Изврни страну(е) водоравно</translation>
    </message>
    <message>
      <source>Mirror Page(s) vertically</source>
      <translation>Изврни страну(е) усправно</translation>
    </message>
    <message>
      <source>&amp;Resolution for EPS Graphics:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Convert Spot Colors to Process Colors</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Compression &amp;Quality:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Allow copying of text or graphics from the PDF. If unchecked, text and graphics cannot be copied.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Allow adding annotations and fields to the PDF. If unchecked, editing annotations and fields is prevented.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Include La&amp;yers</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Compression Metho&amp;d:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Embed fonts into the PDF. Embedding the fonts will preserve the layout and appearance of your document.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Length of time the effect runs. A shorter time will speed up the effect, a longer one will slow it down.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Insert a comma separated list of tokens where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Determines the binding of pages in the PDF. Unless you know you need to change it leave the default choice - Left.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Generates thumbnails of each page in the PDF. Some viewers can use the thumbnails for navigation.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Embed the bookmarks you created in your document. These are useful for navigating long PDF documents.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Export resolution of text and vector graphics. This does not affect the resolution of bitmap images like photos.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Enables lossless compression of text and graphics. Unless you have a reason, leave this checked. This reduces PDF file size.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Enable the security features in your exported PDF. If you selected PDF 1.3, the PDF will be protected by 40 bit encryption. If you selected PDF 1.4, the PDF will be protected by 128 bit encryption. Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Choose a master password which enables or disables all the security features in your exported PDF</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>This is an advanced setting which is not enabled by default. This should only be enabled when specifically requested by your printer and they have given you the exact details needed. Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Mandatory string for PDF/X-3 or the PDF will fail PDF/X-3 conformance. We recommend you use the title of the document.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Display Settings</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Single Page</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Continuous</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Double Page Left</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Double Page Right</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Visual Appearance</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Use Viewers Defaults</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Use Full Screen Mode</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Display Bookmarks Tab</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Display Thumbnails</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Display Layers Tab</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Hide Viewers Toolbar</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Hide Viewers Menubar</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Zoom Pages to fit Viewer Window</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Special Actions</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>No Script</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Viewer</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Clip to Page Margins</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Lossy - JPEG</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Lossless - Zip</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Image Compression Method</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Javascript to be executed
when PDF document is opened:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Enables presentation effects when using Adobe&amp;#174; Reader&amp;#174; and other PDF viewers which support this in full screen mode.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Layers in your document are exported to the PDF Only available if PDF 1.5 is chosen.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color model for the output of your PDF. Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets. Choose Printer when printing to a true 4 color CMYK printer. Choose Grayscale when you want a grey scale PDF.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Do not show objects outside the margins in the exported file</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Force Overprint Mode</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Length of time the page is shown before the presentation starts on the selected page. Setting 0 will disable automatic page transition.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Enables global Overprint Mode for this document, overrides object settings</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Determines the PDF compatibility.&lt;br/>The default is &lt;b>PDF 1.3&lt;/b> which gives the widest compatibility.&lt;br/>Choose &lt;b>PDF 1.4&lt;/b> if your file uses features such as transparency or you require 128 bit encryption.&lt;br/>&lt;b>PDF 1.5&lt;/b> is necessary when you wish to preserve objects in separate layers within the PDF.&lt;br/>&lt;b>PDF/X-3&lt;/b> is for exporting the PDF when you want color managed RGB for commercial printing and is selectable when you have activated color management. Use only when advised by your printer or in some cases printing to a 4 color digital color laser printer.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Embed all</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Fonts to outline:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Outline all</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Printer Marks</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Crop Marks</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Bleed Marks</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Registration Marks</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color Bars</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Page Information</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Offset:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Bleed Settings</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Top:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Bottom:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Left:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Right:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Use Document Bleeds</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Pre-Press</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Convert all glyphs in the document to outlines.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Method of compression to use for images. Automatic allows Scribus to choose the best method. ZIP is lossless and good for images with solid colors. JPEG is better at creating smaller PDF files which have many photos (with slight image quality loss possible). Leave it set to Automatic unless you have a need for special compression options.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Compression quality levels for lossy compression methods: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%). Note that a quality level does not directly determine the size of the resulting image - both size and quality loss vary from image to image at any given quality level. Even with Maximum selected, there is always some quality loss with jpeg.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Inside:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Outside:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Document Layout</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Maximum Image Resolution:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Show the document in single page mode</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Show the document in single page mode with the pages displayed continuously end to end like a scroll</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Show the document with facing pages, starting with the first page displayed on the left</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Show the document with facing pages, starting with the first page displayed on the right</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Use the viewer's defaults or the user's preferences if set differently from the viewer defaults</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Enables viewing the document in full screen</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Display the bookmarks upon opening</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Display the page thumbnails upon opening</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Forces the displaying of layers. Useful only for PDF 1.5+.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Hides the Tool Bar which has selection and other editing capabilities</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Hides the Menu Bar for the viewer, the PDF will display in a plain window. </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Fit the document page or pages to the available space in the viewer window.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Limits the resolution of your bitmap images to the selected DPI. Images with a lower resolution will be left untouched. Leaving this unchecked will render them at their native resolution. Enabling this will increase memory usage and slow down export.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>This creates crop marks in the PDF indicating where the paper should be cut or trimmed after printing.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>This creates bleed marks which are indicated by  _ . _ and show the bleed limit</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Add registration marks which are added to each separation</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Add color calibration bars</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Add document information which includes the document title and page numbers</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Indicate the distance offset for the registration marks</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Use the existing bleed settings from the document preferences</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>TabPrinter</name>
    <message>
      <source>Distance for bleed from the top of the physical page</source>
      <translation type="unfinished" >Растојање за цурење од врха физичке странице</translation>
    </message>
    <message>
      <source>Distance for bleed from the bottom of the physical page</source>
      <translation type="unfinished" >Растојање за цурење од дна физичке странице</translation>
    </message>
    <message>
      <source>Distance for bleed from the left of the physical page</source>
      <translation type="unfinished" >Растојање за цурење с лева физичке странице</translation>
    </message>
    <message>
      <source>Distance for bleed from the right of the physical page</source>
      <translation type="unfinished" >Растојање за цурење с десна физичке странице</translation>
    </message>
    <message>
      <source>Do not show objects outside the margins on the printed page</source>
      <translation type="unfinished" />
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
      <source>Enables global Overprint Mode for this document, overrides object settings</source>
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
      <source>File</source>
      <translation type="unfinished" >Фајл</translation>
    </message>
    <message>
      <source>All</source>
      <translation type="unfinished" >Све</translation>
    </message>
  </context>
  <context>
    <name>TabPrinterBase</name>
    <message>
      <source>Print Destination</source>
      <translation type="unfinished" >Одредиште за штампу</translation>
    </message>
    <message>
      <source>Alternative Printer Command</source>
      <translation>Алтернативна наредба за штампање</translation>
    </message>
    <message>
      <source>Command:</source>
      <translation>Наредба:</translation>
    </message>
    <message>
      <source>Options</source>
      <translation type="unfinished" >Опције</translation>
    </message>
    <message>
      <source>Postscript Options</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Level 1</source>
      <translation>Level 1</translation>
    </message>
    <message>
      <source>Level 2</source>
      <translation>Level 2</translation>
    </message>
    <message>
      <source>Level 3</source>
      <translation>Level 3</translation>
    </message>
    <message>
      <source>Print in Color if Available</source>
      <translation>Штампај у боји ако је могуће</translation>
    </message>
    <message>
      <source>Print in Grayscale</source>
      <translation>Штампај у нијансама сиве</translation>
    </message>
    <message>
      <source>Page</source>
      <translation type="unfinished" >Страница</translation>
    </message>
    <message>
      <source>Mirror Page(s) Horizontal</source>
      <translation>Изврни страну(е) водоравно</translation>
    </message>
    <message>
      <source>Mirror Page(s) Vertical</source>
      <translation>Изврни страну(е) усправно</translation>
    </message>
    <message>
      <source>Set Media Size</source>
      <translation>Подеси величину медиа</translation>
    </message>
    <message>
      <source>Clip to Page Margins</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color</source>
      <translation type="unfinished" >Боја</translation>
    </message>
    <message>
      <source>Apply Under Color Removal</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Convert Spot Colors to Process Colors</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Force Overprint Mode</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Apply ICC Profiles</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>General</source>
      <translation type="unfinished" >Опште</translation>
    </message>
    <message>
      <source>Print Normal</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Print Separations</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Marks &amp;&amp; Bleeds</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Printer Marks</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Crop Marks</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Bleed Marks</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Registration Marks</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Offset:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color Bars</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Bleed Settings</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Top:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Bottom:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Left:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Right:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>TabPrinterBase</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>This creates crop marks in the PDF indicating where the paper should be cut or trimmed after printing</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>This creates bleed marks which are indicated by  _ . _ and show the bleed limit</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Add registration marks which are added to each separation</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>ndicate the distance offset for the registration marks</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Add color calibration bars</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>TabScrapbookBase</name>
    <message>
      <source>Send Copied Items Automatically to Scrapbook</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>This enables the scrapbook to be used an extension to the copy/paste buffers. Simply copying an object or grouped object will send this to the Scrapbook automatically</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Keep Copied Items Permanently Across Sessions</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>This enables copied items to be kept permanently in the scrapbook.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Number of Copied Items to Keep in Scrapbook:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>The minimum number is 1; the maximum us 100.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>TabScrapbookBase</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>TabTools</name>
    <message>
      <source>Font:</source>
      <translation type="unfinished" >Фонт:</translation>
    </message>
    <message>
      <source> pt</source>
      <translation type="unfinished" > тач.</translation>
    </message>
    <message>
      <source>Size:</source>
      <translation type="unfinished" >Величина:</translation>
    </message>
    <message>
      <source>None</source>
      <translation type="unfinished" >Ниједан</translation>
    </message>
    <message>
      <source>Fill Color:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Stroke Color:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Colu&amp;mns:</source>
      <translation type="unfinished" >&amp;Колоне:</translation>
    </message>
    <message>
      <source>&amp;Gap:</source>
      <translation type="unfinished" >&amp;Процеп:</translation>
    </message>
    <message>
      <source>Woven silk pyjamas exchanged for blue quartz</source>
      <translation type="unfinished" >Плетене свилене пиџаме замењене за плави кварц</translation>
    </message>
    <message>
      <source>&amp;Line Color:</source>
      <translation type="unfinished" >Боја &amp;линије:</translation>
    </message>
    <message>
      <source> %</source>
      <translation type="unfinished" > %</translation>
    </message>
    <message>
      <source>&amp;Shading:</source>
      <translation type="unfinished" >&amp;Сенчење:</translation>
    </message>
    <message>
      <source>&amp;Fill Color:</source>
      <translation type="unfinished" >Боја &amp;испуњавања:</translation>
    </message>
    <message>
      <source>S&amp;hading:</source>
      <translation type="unfinished" >Се&amp;нчење:</translation>
    </message>
    <message>
      <source>Line Style:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Line &amp;Width:</source>
      <translation type="unfinished" >&amp;Ширина линије:</translation>
    </message>
    <message>
      <source>Line S&amp;tyle:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Arrows:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Start:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>End:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Free Scaling</source>
      <translation type="unfinished" >&amp;Слободно скалирање</translation>
    </message>
    <message>
      <source>&amp;Horizontal Scaling:</source>
      <translation type="unfinished" >&amp;Водоравно скалирање:</translation>
    </message>
    <message>
      <source>&amp;Vertical Scaling:</source>
      <translation type="unfinished" >&amp;Усправно скалирање:</translation>
    </message>
    <message>
      <source>&amp;Scale Picture to Frame Size</source>
      <translation type="unfinished" >&amp;Скалирај слику на величину оквира</translation>
    </message>
    <message>
      <source>Keep Aspect &amp;Ratio</source>
      <translation type="unfinished" >Задржи аспектну &amp;сразмеру</translation>
    </message>
    <message>
      <source>F&amp;ill Color:</source>
      <translation type="unfinished" >Боја за поп&amp;уњавање:</translation>
    </message>
    <message>
      <source>Mi&amp;nimum:</source>
      <translation type="unfinished" >Мин&amp;имално:</translation>
    </message>
    <message>
      <source>Ma&amp;ximum:</source>
      <translation type="unfinished" >Мак&amp;симално:</translation>
    </message>
    <message>
      <source>&amp;Stepping:</source>
      <translation type="unfinished" >&amp;Кораци:</translation>
    </message>
    <message>
      <source>Text Frame Properties</source>
      <translation type="unfinished" >Својства текстуалног оквира</translation>
    </message>
    <message>
      <source>Picture Frame Properties</source>
      <translation type="unfinished" >Својства оквира за слике</translation>
    </message>
    <message>
      <source>Shape Drawing Properties</source>
      <translation type="unfinished" >Својства исцртавања облика</translation>
    </message>
    <message>
      <source>Magnification Level Defaults</source>
      <translation type="unfinished" >Подразумеване вредности нивоа увеличавања</translation>
    </message>
    <message>
      <source>Line Drawing Properties</source>
      <translation type="unfinished" >Својства исцртавања линија</translation>
    </message>
    <message>
      <source>Polygon Drawing Properties</source>
      <translation type="unfinished" >Својства исцртавања полигона</translation>
    </message>
    <message>
      <source>Font for new text frames</source>
      <translation type="unfinished" >Фонт за нове текстуалне оквире</translation>
    </message>
    <message>
      <source>Size of font for new text frames</source>
      <translation type="unfinished" >Величина фонта за нове текстуалне оквире</translation>
    </message>
    <message>
      <source>Color of font</source>
      <translation type="unfinished" >Боја фонта</translation>
    </message>
    <message>
      <source>Number of columns in a text frame</source>
      <translation type="unfinished" >Број колона у текстуалном оквиру</translation>
    </message>
    <message>
      <source>Gap between text frame columns</source>
      <translation type="unfinished" >Размак између колона текстуалног оквира</translation>
    </message>
    <message>
      <source>Sample of your font</source>
      <translation type="unfinished" >Пример Вашег фонта</translation>
    </message>
    <message>
      <source>Picture frames allow pictures to scale to any size</source>
      <translation type="unfinished" >Оквири за слике дозвољавају скалирање слика на било коју величину</translation>
    </message>
    <message>
      <source>Horizontal scaling of images</source>
      <translation type="unfinished" >Водоравно скалирање слика</translation>
    </message>
    <message>
      <source>Vertical scaling of images</source>
      <translation type="unfinished" >Усправно скалирање слика</translation>
    </message>
    <message>
      <source>Keep horizontal and vertical scaling the same</source>
      <translation type="unfinished" >Задржи подједнако водоравно и усправно скалирање</translation>
    </message>
    <message>
      <source>Pictures in picture frames are scaled to the size of the frame</source>
      <translation type="unfinished" >Слике у оквирима за слике се скалирају према величини оквира</translation>
    </message>
    <message>
      <source>Automatically scaled pictures keep their original proportions</source>
      <translation type="unfinished" >Аутоматски скалиране слике задржавају своје оригиналне пропорције</translation>
    </message>
    <message>
      <source>Fill color of picture frames</source>
      <translation type="unfinished" >Боја за испуњавање оквира за слике</translation>
    </message>
    <message>
      <source>Saturation of color of fill</source>
      <translation type="unfinished" >Засићење боје за испуњавање</translation>
    </message>
    <message>
      <source>Line color of shapes</source>
      <translation type="unfinished" >Боја линије за облике</translation>
    </message>
    <message>
      <source>Saturation of color of lines</source>
      <translation type="unfinished" >Засићење боје за линије</translation>
    </message>
    <message>
      <source>Fill color of shapes</source>
      <translation type="unfinished" >Боја испуњавања за облике</translation>
    </message>
    <message>
      <source>Line style of shapes</source>
      <translation type="unfinished" >Стил линије за облике</translation>
    </message>
    <message>
      <source>Line width of shapes</source>
      <translation type="unfinished" >Ширина линије за облике</translation>
    </message>
    <message>
      <source>Minimum magnification allowed</source>
      <translation type="unfinished" >Минимално увећање дозвољено</translation>
    </message>
    <message>
      <source>Maximum magnification allowed</source>
      <translation type="unfinished" >Максимално увећање дозвољено</translation>
    </message>
    <message>
      <source>Change in magnification for each zoom operation</source>
      <translation type="unfinished" >Измена увеличања за сваку операцију увеличавања/умањивања</translation>
    </message>
    <message>
      <source>Color of lines</source>
      <translation type="unfinished" >Боја линија</translation>
    </message>
    <message>
      <source>Saturation of color</source>
      <translation type="unfinished" >Засићење боје</translation>
    </message>
    <message>
      <source>Style of lines</source>
      <translation type="unfinished" >Стил линија</translation>
    </message>
    <message>
      <source>Width of lines</source>
      <translation type="unfinished" >Ширина линија</translation>
    </message>
    <message>
      <source>Tab Fill Character:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Tab Width:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Use embedded Clipping Path</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>On Screen Preview</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Full Resolution Preview</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Normal Resolution Preview</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Low Resolution Preview</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Text Color:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Shading:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Text Stroke:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Dot</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Hyphen</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Underscore</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Custom</source>
      <translation type="unfinished" >Произвољно</translation>
    </message>
    <message>
      <source>None</source>
      <comment>



tab fill</comment>
      <translation type="unfinished" >Ниједан</translation>
    </message>
    <message>
      <source>Text</source>
      <translation type="unfinished" >Текст</translation>
    </message>
    <message>
      <source>Shapes</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Lines</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Images</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Regular Polygons</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Zoom</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Rotation Tool</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Constrain to:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Other Properties</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Miscellaneous Settings</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Item Duplicate</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>X Displacement</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Y Displacement</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Horizontal displacement of page items</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Vertical displacement of page items</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Constrain value for the rotation tool when the Control key is pressed</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Degrees</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Use the embedded clipping paths in images when importing them. JPEG, PSD and TIFF are the image formats which can embedded clipping paths.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>TabTypograpy</name>
    <message>
      <source>Subscript</source>
      <translation type="unfinished" >Индекс</translation>
    </message>
    <message>
      <source> %</source>
      <translation type="unfinished" > %</translation>
    </message>
    <message>
      <source>&amp;Displacement:</source>
      <translation type="unfinished" >&amp;Погрешно постављање:</translation>
    </message>
    <message>
      <source>&amp;Scaling:</source>
      <translation type="unfinished" >&amp;Скалирање:</translation>
    </message>
    <message>
      <source>Superscript</source>
      <translation type="unfinished" >Изложилац</translation>
    </message>
    <message>
      <source>D&amp;isplacement:</source>
      <translation type="unfinished" >По&amp;грешно постављање:</translation>
    </message>
    <message>
      <source>S&amp;caling:</source>
      <translation type="unfinished" >С&amp;калирање:</translation>
    </message>
    <message>
      <source>Small Caps</source>
      <translation type="unfinished" >Мала верзална слова</translation>
    </message>
    <message>
      <source>Sc&amp;aling:</source>
      <translation type="unfinished" >Ска&amp;лирање:</translation>
    </message>
    <message>
      <source>Displacement above the baseline of the font on a line</source>
      <translation type="unfinished" >Погрешно постављање изнад основне линије фонта на линији</translation>
    </message>
    <message>
      <source>Relative size of the superscript compared to the normal font</source>
      <translation type="unfinished" >Релативна величина superscript-а у поређењу са нормалним фонтом</translation>
    </message>
    <message>
      <source>Displacement below the baseline of the normal font on a line</source>
      <translation type="unfinished" >Погрешно постављање испод основне линије фонта на линији</translation>
    </message>
    <message>
      <source>Relative size of the subscript compared to the normal font</source>
      <translation type="unfinished" >Релативна величина subscript-а у поређењу са нормалним фонтом</translation>
    </message>
    <message>
      <source>Relative size of the small caps font compared to the normal font</source>
      <translation type="unfinished" >Релативна величина фонта малих слова у поређењу са нормалним фонтом</translation>
    </message>
    <message>
      <source>Underline</source>
      <translation type="unfinished" >Подвучено</translation>
    </message>
    <message>
      <source>Displacement:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Auto</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Line Width:</source>
      <translation type="unfinished" >Ширина линије:</translation>
    </message>
    <message>
      <source>Strikethru</source>
      <translation type="unfinished" >Право напред</translation>
    </message>
    <message>
      <source>Automatic &amp;Line Spacing</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Line Spacing:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Percentage increase over the font size for the line spacing</source>
      <translation type="unfinished" >Процентуално повећање величине фонта за проред линија</translation>
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
      <source>Dot</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Hyphen</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Underscore</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Custom</source>
      <translation type="unfinished" >Произвољно</translation>
    </message>
    <message>
      <source>Fill Char:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>None</source>
      <comment>



tab fill</comment>
      <translation type="unfinished" >Ниједан</translation>
    </message>
    <message>
      <source>Indentation from the right for the whole paragraph</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Fill Character of Tab</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Type/Orientation of Tab</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Position of Tab</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>TextBrowser</name>
    <message>
      <source>Locate your web browser</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>External Web Browser Failed to Start</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Scribus was not able to start the external web browser application %1. Please check the setting in Preferences</source>
      <translation type="unfinished" />
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
      <source>Group </source>
      <translation>Група </translation>
    </message>
    <message>
      <source>Free Objects</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Page </source>
      <translation type="unfinished" >Страница</translation>
    </message>
    <message>
      <source>Picture</source>
      <translation type="unfinished" >Слика</translation>
    </message>
    <message>
      <source>File: </source>
      <translation type="unfinished" >Фајл: </translation>
    </message>
    <message>
      <source>Original PPI: </source>
      <translation type="unfinished" >Оригинални PPI: </translation>
    </message>
    <message>
      <source>Actual PPI: </source>
      <translation type="unfinished" >Стварни PPI: </translation>
    </message>
    <message>
      <source>Colorspace: </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Unknown</source>
      <translation type="unfinished" >Непознат</translation>
    </message>
    <message>
      <source>RGB</source>
      <translation type="unfinished" >RGB</translation>
    </message>
    <message>
      <source>CMYK</source>
      <translation type="unfinished" >CMYK</translation>
    </message>
    <message>
      <source>Grayscale</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Duotone</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>No Image Loaded</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Linked Text</source>
      <translation type="unfinished" >Повезан текст</translation>
    </message>
    <message>
      <source>Text Frame</source>
      <translation type="unfinished" >Текстуални оквир</translation>
    </message>
    <message>
      <source>Text on a Path</source>
      <translation type="unfinished" >Текст на путањи</translation>
    </message>
    <message>
      <source>Paragraphs: </source>
      <translation type="unfinished" >Пасуси: </translation>
    </message>
    <message>
      <source>Lines: </source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Words: </source>
      <translation type="unfinished" >Речи: </translation>
    </message>
    <message>
      <source>Chars: </source>
      <translation type="unfinished" >Карактери: </translation>
    </message>
    <message>
      <source>Print: </source>
      <translation type="unfinished" >Штампај: </translation>
    </message>
    <message>
      <source>Enabled</source>
      <translation type="unfinished" >Укључено</translation>
    </message>
    <message>
      <source>Disabled</source>
      <translation type="unfinished" >Искључено</translation>
    </message>
    <message>
      <source>In&amp;fo</source>
      <translation type="unfinished" >Ин&amp;фо</translation>
    </message>
    <message>
      <source>Preview Settings</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;PDF Options</source>
      <translation type="unfinished" >&amp;PDF опције</translation>
    </message>
    <message>
      <source>Send to La&amp;yer</source>
      <translation type="unfinished" >Пошаљи у сл&amp;ој</translation>
    </message>
    <message>
      <source>Le&amp;vel</source>
      <translation type="unfinished" >Ни&amp;во</translation>
    </message>
    <message>
      <source>Conve&amp;rt to</source>
      <translation type="unfinished" >Претв&amp;ори у</translation>
    </message>
    <message>
      <source>Rename</source>
      <translation type="unfinished" >Преименуј</translation>
    </message>
    <message>
      <source>&amp;Delete</source>
      <translation type="unfinished" >&amp;Обриши</translation>
    </message>
    <message>
      <source>Contents</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Name &quot;%1&quot; isn't unique.&lt;br/>Please choose another.</source>
      <translation>Име &quot;%1&quot;није јединствено.&lt;br/>Изабери друго.</translation>
    </message>
  </context>
  <context>
    <name>UnderlineValues</name>
    <message>
      <source>Auto</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source> %</source>
      <translation type="unfinished" > %</translation>
    </message>
    <message>
      <source>Displacement</source>
      <translation>Диспозиција</translation>
    </message>
    <message>
      <source>Linewidth</source>
      <translation>Дебљина линије</translation>
    </message>
  </context>
  <context>
    <name>UndoManager</name>
    <message>
      <source>Add vertical guide</source>
      <translation>Додај усправну водиљу</translation>
    </message>
    <message>
      <source>Add horizontal guide</source>
      <translation>Додај водоравну водиљу</translation>
    </message>
    <message>
      <source>Remove vertical guide</source>
      <translation>Уклони усправну водиљу</translation>
    </message>
    <message>
      <source>Remove horizontal guide</source>
      <translation>Уклони водоравну водиљу</translation>
    </message>
    <message>
      <source>Move vertical guide</source>
      <translation>Помери усправну водиљу</translation>
    </message>
    <message>
      <source>Move horizontal guide</source>
      <translation>Помери водоравну водиљу</translation>
    </message>
    <message>
      <source>Lock guides</source>
      <translation>Закључај водиље</translation>
    </message>
    <message>
      <source>Unlock guides</source>
      <translation>Откључај водиље</translation>
    </message>
    <message>
      <source>Move</source>
      <translation>Помери</translation>
    </message>
    <message>
      <source>Resize</source>
      <translation>Промени величину</translation>
    </message>
    <message>
      <source>Rotate</source>
      <translation>Заокрени</translation>
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
      <translation>Избор</translation>
    </message>
    <message>
      <source>Group</source>
      <translation type="unfinished" >Група</translation>
    </message>
    <message>
      <source>Selection/Group</source>
      <translation>Избор/група</translation>
    </message>
    <message>
      <source>Create</source>
      <translation type="unfinished" >Направи</translation>
    </message>
    <message>
      <source>X: %1, Y: %2
W: %3, H: %4</source>
      <translation>X: %1, Y: %2
W: %3, H: %4</translation>
    </message>
    <message>
      <source>Align/Distribute</source>
      <translation>Поравнај/Распореди</translation>
    </message>
    <message>
      <source>Items involved</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Cancel</source>
      <translation type="unfinished" >Поништи</translation>
    </message>
    <message>
      <source>Set fill color</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Color1: %1, Color2: %2</source>
      <translation>Боја 1: %1, Боја 2: %2</translation>
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
      <translation>Изврни водоравно</translation>
    </message>
    <message>
      <source>Flip vertically</source>
      <translation>Изврни усправно</translation>
    </message>
    <message>
      <source>Lock</source>
      <translation type="unfinished" >Закључај</translation>
    </message>
    <message>
      <source>Unlock</source>
      <translation type="unfinished" >Откључај</translation>
    </message>
    <message>
      <source>Lock size</source>
      <translation>Закључај величину</translation>
    </message>
    <message>
      <source>Unlock size</source>
      <translation>Откључак величину</translation>
    </message>
    <message>
      <source>Ungroup</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Delete</source>
      <translation type="unfinished" >Обриши</translation>
    </message>
    <message>
      <source>Rename</source>
      <translation type="unfinished" >Преименуј</translation>
    </message>
    <message>
      <source>From %1
to %2</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Paste</source>
      <translation type="unfinished" >Пренеси</translation>
    </message>
    <message>
      <source>Cut</source>
      <translation type="unfinished" >Исеци</translation>
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
      <translation>Нема стила</translation>
    </message>
    <message>
      <source>Set custom line style</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Do not use custom line style</source>
      <translation>Не користи произвољну линију стила</translation>
    </message>
    <message>
      <source>Set start arrow</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set end arrow</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Create table</source>
      <translation>Направи табелу</translation>
    </message>
    <message>
      <source>Rows: %1, Cols: %2</source>
      <translation>Редова: %1, Колона: %2</translation>
    </message>
    <message>
      <source>Set font</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set font size</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set font width</source>
      <translation type="unfinished" />
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
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set line spacing</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set paragraph style</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Set language</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Align text</source>
      <translation>Поравнај текст</translation>
    </message>
    <message>
      <source>Set font effect</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Image frame</source>
      <translation>Оквир слике</translation>
    </message>
    <message>
      <source>Text frame</source>
      <translation>Текстуални оквир</translation>
    </message>
    <message>
      <source>Polygon</source>
      <translation type="unfinished" >Полигон</translation>
    </message>
    <message>
      <source>Bezier curve</source>
      <translation>Безијерова крива</translation>
    </message>
    <message>
      <source>Polyline</source>
      <translation type="unfinished" >Полилинија</translation>
    </message>
    <message>
      <source>Convert to</source>
      <translation>Преведи у</translation>
    </message>
    <message>
      <source>Import SVG image</source>
      <translation>Увези SVG слику</translation>
    </message>
    <message>
      <source>Import EPS image</source>
      <translation>Увези EPS слику</translation>
    </message>
    <message>
      <source>Scratch space</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Text flows around the frame</source>
      <translation>Текст тече око оквира</translation>
    </message>
    <message>
      <source>Text flows around bounding box</source>
      <translation>Текст тече око оквирног правоугаоника</translation>
    </message>
    <message>
      <source>Text flows around contour line</source>
      <translation>Текст тече око контуре</translation>
    </message>
    <message>
      <source>No text flow</source>
      <translation>Нема тока текста</translation>
    </message>
    <message>
      <source>No bounding box</source>
      <translation>Нема оквирног правоугаоника</translation>
    </message>
    <message>
      <source>No contour line</source>
      <translation>Нема контурне линије</translation>
    </message>
    <message>
      <source>Page %1</source>
      <translation>Страна %1</translation>
    </message>
    <message>
      <source>Set image scaling</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Frame size</source>
      <translation>Величина оквира</translation>
    </message>
    <message>
      <source>Free scaling</source>
      <translation>Слободно скалирање</translation>
    </message>
    <message>
      <source>Keep aspect ratio</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Break aspect ratio</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Edit contour line</source>
      <translation>Уреди контуру</translation>
    </message>
    <message>
      <source>Edit shape</source>
      <translation>Уреди облик</translation>
    </message>
    <message>
      <source>Reset contour line</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Apply Master Page</source>
      <translation>Примени главну страну</translation>
    </message>
    <message>
      <source>Set font height</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Import OpenOffice.org Draw image</source>
      <translation>Увези OpenOffice.org Draw слику</translation>
    </message>
    <message>
      <source>Add page</source>
      <translation>Додај страну</translation>
    </message>
    <message>
      <source>Add pages</source>
      <translation>Додај стране</translation>
    </message>
    <message>
      <source>Delete page</source>
      <translation>Уклони страну</translation>
    </message>
    <message>
      <source>Delete pages</source>
      <translation>Уклони стране</translation>
    </message>
    <message>
      <source>Add layer</source>
      <translation>Додај слој</translation>
    </message>
    <message>
      <source>Delete layer</source>
      <translation>Уклони слој</translation>
    </message>
    <message>
      <source>Rename layer</source>
      <translation>Преименуј слој</translation>
    </message>
    <message>
      <source>Raise layer</source>
      <translation>Подигни слој</translation>
    </message>
    <message>
      <source>Lower layer</source>
      <translation>Спусти слој</translation>
    </message>
    <message>
      <source>Send to layer</source>
      <translation>Пошаљи на слој</translation>
    </message>
    <message>
      <source>Enable printing of layer</source>
      <translation>Одобри штампање слоја</translation>
    </message>
    <message>
      <source>Disable printing of layer</source>
      <translation>Онемогући штампање слоја</translation>
    </message>
    <message>
      <source>Change name of the layer</source>
      <translation>Промени име слоја</translation>
    </message>
    <message>
      <source>Get image</source>
      <translation>Добави слику</translation>
    </message>
    <message>
      <source>Text on a Path</source>
      <translation type="unfinished" >Текст на путањи</translation>
    </message>
    <message>
      <source>Enable Item Printing</source>
      <translation>Омогући штампање ставке</translation>
    </message>
    <message>
      <source>Disable Item Printing</source>
      <translation>Онемогући штампање ставке</translation>
    </message>
    <message>
      <source>Multiple duplicate</source>
      <translation>Вишеструко умножавање</translation>
    </message>
    <message>
      <source>Change Image Offset</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Change Image Scale</source>
      <translation type="unfinished" />
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
      <translation>Примени стил текста</translation>
    </message>
    <message>
      <source>&amp;Undo: %1</source>
      <comment>f.e. Undo: Move</comment>
      <translation>&amp;Опозови : %1</translation>
    </message>
    <message>
      <source>&amp;Undo</source>
      <translation type="unfinished" >&amp;Опозови</translation>
    </message>
    <message>
      <source>&amp;Redo: %1</source>
      <comment>f.e. Redo: Move</comment>
      <translation>Поно&amp;ви: %1</translation>
    </message>
    <message>
      <source>&amp;Redo</source>
      <translation type="unfinished" >Поно&amp;ви</translation>
    </message>
    <message>
      <source>No object frame</source>
      <translation>Објекат нема оквир</translation>
    </message>
    <message>
      <source>Reset control point</source>
      <translation>Ресетуј контролну тачку</translation>
    </message>
    <message>
      <source>Reset control points</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Apply image effects</source>
      <translation>Примени ефекте на слици</translation>
    </message>
    <message>
      <source>Insert frame</source>
      <translation>Убаци оквир</translation>
    </message>
    <message>
      <source>Adjust frame to the image size</source>
      <translation>Подеси оквир на величину слике</translation>
    </message>
    <message>
      <source>Set start and end arrows</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Text flows around image clipping path</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Remove all guides</source>
      <translation>Уклони све водиље</translation>
    </message>
    <message>
      <source>Copy</source>
      <translation type="unfinished" >Копирај</translation>
    </message>
    <message>
      <source>Copy page</source>
      <translation>Копирај страну</translation>
    </message>
  </context>
  <context>
    <name>UndoPalette</name>
    <message>
      <source>Action History</source>
      <translation>Историја промена</translation>
    </message>
    <message>
      <source>Show selected object only</source>
      <translation>Покажи само изабрани објекат</translation>
    </message>
    <message>
      <source>&amp;Undo</source>
      <translation type="unfinished" >&amp;Опозови</translation>
    </message>
    <message>
      <source>&amp;Redo</source>
      <translation type="unfinished" >Поно&amp;ви</translation>
    </message>
    <message>
      <source>Initial State</source>
      <translation>Полазно стање</translation>
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
      <translation type="unfinished" />
    </message>
    <message>
      <source>&amp;Search:</source>
      <translation>&amp;Претрага:</translation>
    </message>
    <message>
      <source>Hex</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Meaning</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>UpgradeChecker</name>
    <message>
      <source>Attempting to get the Scribus version update file</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>(No data on your computer will be sent to an external location)</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Timed out when attempting to get update file.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Error when attempting to get update file: %1</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>File not found on server</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Could not open version file: %1
Error:%2 at line: %3, row: %4</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>An error occurred while looking for updates for Scribus, please check your internet connection.</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>No updates are available for your version of Scribus %1</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>One or more updates for your version of Scribus (%1) are available:</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Please visit www.scribus.net for details.</source>
      <translation>Молимо Вас посетите www.scribus.net у вези са детаљима.</translation>
    </message>
    <message>
      <source>This list may contain development versions.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>UsePrinterMarginsDialog</name>
    <message>
      <source>Minimum Margins for Page Size %1</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>UsePrinterMarginsDialogBase</name>
    <message>
      <source>Use Printer Margins</source>
      <translation>Користи маргине штампача</translation>
    </message>
    <message>
      <source>Select &amp;Printer:</source>
      <translation>Изабрани &amp;штампач:</translation>
    </message>
    <message>
      <source>Margins</source>
      <translation>Маргине</translation>
    </message>
    <message>
      <source>Right:</source>
      <translation>Десно:</translation>
    </message>
    <message>
      <source>&amp;Top:</source>
      <translation type="unfinished" >&amp;Врх:</translation>
    </message>
    <message>
      <source>&amp;Bottom:</source>
      <translation type="unfinished" >&amp;Дно:</translation>
    </message>
    <message>
      <source>&amp;Left:</source>
      <translation type="unfinished" >&amp;Лево:</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation type="unfinished" >&amp;У реду</translation>
    </message>
    <message>
      <source>Alt+O</source>
      <translation type="unfinished" >Alt+O</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation type="unfinished" >&amp;Откажи</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation type="unfinished" >Alt+C</translation>
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
      <source>Alt+O</source>
      <translation>Alt+O</translation>
    </message>
    <message>
      <source>Send your value to the script</source>
      <translation>Пошаљите Вашу вредност скрипти</translation>
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
      <translation>Увези само текст</translation>
    </message>
    <message>
      <source>Open</source>
      <translation type="unfinished" >Отвори</translation>
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
      <source>Remember the file extension - importer association and do not ask again to select an importer for files of this type.</source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>nftdialog</name>
    <message>
      <source>New From Template</source>
      <translation>Нови из шаблона</translation>
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
      <translation type="unfinished" />
    </message>
    <message>
      <source>Load</source>
      <translation>Учитај</translation>
    </message>
    <message>
      <source>Load Set</source>
      <translation>Учитај сет</translation>
    </message>
    <message>
      <source>Remove</source>
      <translation type="unfinished" >Уклони</translation>
    </message>
    <message>
      <source>OK</source>
      <translation type="unfinished" >У реду</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation type="unfinished" >Поништи</translation>
    </message>
    <message>
      <source>Remove All</source>
      <translation>Уклони све</translation>
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
