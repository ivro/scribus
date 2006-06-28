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
        <translation>getFontSize([&quot;nom&quot;]) -&gt; float

Retorna la mida del tipus de lletra en punts del quadre de text &quot;nom&quot;. Si 
aquest quadre de text té algun text seleccionat es torna el primer caràcter 
de la selecció.
Si no es passa &quot;nom&quot;  es fa servir l&apos;ítem actualment seleccionat.
</translation>
    </message>
    <message>
        <source>getColorNames() -&gt; list

Returns a list containing the names of all defined colors in the document.
If no document is open, returns a list of the default document colors.
</source>
        <translation>getColorNames() -&gt; llista

Retorna una llista que conté els noms dels colors definits en el document.
Si no hi ha cap document obert, retorna una llista amb els colors per defecte.
</translation>
    </message>
    <message>
        <source>newDocDialog() -&gt; bool

Displays the &quot;New Document&quot; dialog box. Creates a new document if the user
accepts the settings. Does not create a document if the user presses cancel.
Returns true if a new document was created.
</source>
        <translation>newDocDialog() -&gt; bool

Mostra el diàleg &quot;Nou Document&quot;. Crea un nou document si l&apos;usuari accepta 
els paràmetres. No en fa cap en cas de que hagi triat cancel.lar. 
Retorna cert si s&apos;ha creat un nou document.
</translation>
    </message>
    <message>
        <source>getFillColor([&quot;name&quot;]) -&gt; string

Returns the name of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getFillColor([&quot;nom&quot;]) -&gt; string

Retorna el nom del color de l&apos;objecte &quot;nom&quot;.
Si no es dóna cap &quot;nom&quot;, es fa servir l&apos;ítem sel.leccionat.
</translation>
    </message>
    <message>
        <source>moveObject(dx, dy [, &quot;name&quot;])

Moves the object &quot;name&quot; by dx and dy relative to its current position. The
distances are expressed in the current measurement unit of the document (see
UNIT constants). If &quot;name&quot; is not given the currently selected item is used.
If the object &quot;name&quot; belongs to a group, the whole group is moved.
</source>
        <translation>moveObject(dx, dy [,&quot;nom&quot;])

Mou l&apos;objecte &quot;nom&quot; una distància dx i dx respecte la posició actual. Les
distàncies estan expressades en les unitats actuals del document (mireu
unitats). Si no es dóna cap &quot;nom&quot;, es fa servir l&apos;ítem sel.leccionat.
Si l&apos;objecte &quot;nom&quot; pertany a un grup, es mou tot el grup.
</translation>
    </message>
    <message>
        <source>setRedraw(bool)

Disables page redraw when bool = False, otherwise redrawing is enabled.
This change will persist even after the script exits, so make sure to call
setRedraw(True) in a finally: clause at the top level of your script.
</source>
        <translation>setRedraw(bool)

Desactiva el repintat de la pàgina quan bool=fals, altrament està activat.
Aquest canvi continuarà fins i tot quan acabi l&apos;execució de la seqüència, per tant cal estar 
segur d&apos;acabar amb setRedraw(True): clausula a nivell alt de la teva seqüència.
</translation>
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
        <translation>createRect(x,y,amplada, alçada, [&quot;name&quot;]) -&gt; string

Crea un nou rectangle en la pàgina actual i retorna el seu nom. Les 
coordenades donades estaran en les unitats per defecte del document 
(mireu unitats). &quot;nom&quot; ha de ser un identificador únic per l&apos;objecte 
ja que necessites aquest nom per fer referència a l&apos;objecte en el futur. Si no
es dóna &quot;nom&quot; Scribus en crearà un per nosaltres.

Es generar un NameExistsError si passem un nom que ja existeix.
</translation>
    </message>
    <message>
        <source>newPage(where [,&quot;template&quot;])

Creates a new page. If &quot;where&quot; is -1 the new Page is appended to the
document, otherwise the new page is inserted before &quot;where&quot;. Page numbers are
counted from 1 upwards, no matter what the displayed first page number of your
document is. The optional parameter &quot;template&quot; specifies the name of the
template page for the new page.

May raise IndexError if the page number is out of range
</source>
        <translation>newPage(on [,&quot;plantilla&quot;])

Crea una nova pàgina. Si &quot;on&quot; és -1 la nova pàgina es afegida al 
document, altrament la nova pàgina es afegida abans de &quot;on&quot;. Els números de pàgina estan
contats des de 1 endavant, no importa el número de pàgina que s&apos;ensenya al 
document. El paràmetre opcional &quot;plantilla&quot; especifica el nom de la 
plantilla a fer servir en la pàgina.

Es pot generar un IndexError si el número de pàgina està fora de rang
</translation>
    </message>
    <message>
        <source>setGradientFill(type, &quot;color1&quot;, shade1, &quot;color2&quot;, shade2, [&quot;name&quot;])

Sets the gradient fill of the object &quot;name&quot; to type. Color descriptions are
the same as for setFillColor() and setFillShade(). See the constants for
available types (FILL_&lt;type&gt;).
</source>
        <translation>setGradientFill(tipus, &quot;color1&quot;, intensitat1, &quot;color2&quot;, intensitat2, [&quot;nom&quot;])

Estableix el gradient d&apos;emplenat de l&apos;objecte &quot;nom&quot; a tipus. Les descripcions de colors
són les mateixes que per setFillColor() i setFillShade(). Mireu les constants pels
tipus disponibles (FILL_&lt;tipus&gt;).
</translation>
    </message>
    <message>
        <source>messagebarText(&quot;string&quot;)

Writes the &quot;string&quot; into the Scribus message bar (status line). The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
</source>
        <translation>messagebarText(&quot;string&quot;)

Escriu la cadena &quot;string&quot; en la barra d&apos;estat de l&apos;Scribus. El text
ha de ser codificat en UTF8 o una cadena &apos;unicode&apos; (recomanat).
</translation>
    </message>
    <message>
        <source>register_macro_callable(name, callable, accel=&apos;&apos;)

Create a macro called &quot;name&quot; with the existing callable object &quot;callable&quot;.
The passed callable must not require any arguments when called (it may take
optional arguments, but will not be given any).
If provided, the string &quot;accel&quot; will be used to set a keyboard shortcut
for the macro.
If the passed callable is a class, it will be rejected. Functions and bound
methods are quite acceptable, as are instances of classes that provide a
__call__ method with no arguments. There is no problem with registering
a callable more than once, nor with registering multiple bound methods
of a single instance.
</source>
        <translation>register_macro_callable(nom, callable, accel=&apos;&apos;)

Crea una macro anomenada &quot;nom&quot; amb l&apos;objecte usable existent &quot;callable&quot;.
Aquest objecte no ha de requerir cap argument quan es cridi (en pot tenir
d&apos;opcionals, però no se li&apos;n poden donar). 
Si s&apos;afegeix el paràmetre &quot;accel&quot; serà fet servir er crear una drecera de teclat
per la macro.
Si l&apos;objecte que es vol usar és una classe, serà rebutjada. Es permeten funcions i 
mètodes embedits, ja que són instàncies classes que tenen un mètode
__call__ sense arguments. No hi haurà problemes per registrar
un objecte usable més d&apos;un cop, ni per registrar múltiples mètodes embedits 
d&apos;una sola instància.
</translation>
    </message>
    <message>
        <source>newDocument(size, margins, orientation, firstPageNumber,
unit, pagesType, firstPageOrder) -&gt; bool

WARNING: This is backported function from 1.3.x series. You are using constants
larger PAGE_3 and bigger on your own risk. So do you with firstPageOrder biger
than 1.

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

The values for width, height and the margins are expressed in the given unit
for the document. PAPER_* constants are expressed in points. If your document
is not in points, make sure to account for this.

example: newDocument(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 7, UNIT_POINTS,
PAGE_4, 3)

May raise ScribusError if is firstPageOrder bigger than allowed by pagesType.
</source>
        <translation>newDocument(size, margins, orientation, firstPageNumber,(new line)
unit, pagesType, firstPageOrder) -&gt; bool

AVÍS: Aquesta funció s&apos;ha portat de les versions 1.3.x. Estas fent servir constants
més grans PAGE_3 sota la teva responsabilitat. Per fer-ho fes servir firstPageOrder més 
gran que 1.

Crea un nou document i retorna cert si ha funcionat. Els paràmetres tenen el
següent significat:

size = Una parella (amplada, alçada) que descriu la mida del document. Pots fer
servir constants predefinides PAPER_&lt;tipus de paper&gt;. Ex. PAPER_A4 etc.

margins = una tupla (esquerra, dreta, dalt, baix) que descriu els marges del 
document

orientation = la orientació de la pàgina - constants PORTRAIT, LANDSCAPE

firstPageNumber = és el número de la primera pàgina que farà servir el document
Normalment farem servir 1, però a vegades és útil tenir números més grans
si es crea un document en varies parts

unit: thaquest valor estableix les unitats que el document farà servir. Cal usar una 
    constant predefinida, pot ser una de: UNIT_INCHES, UNIT_MILLIMETERS, 
    UNIT_PICAS, UNIT_POINTS.

pagesType = Una de les constants predefinides PAGE_n. PAGE_1 és una pàgina simple, 
PAGE_2 és per pàgines pels dos costats, PAGE_3 és per pàgines amb tres plecs
PAGE_4 és per pàgines amb 4 plecs

firstPageOrder = Quina és la posició de la primera pàgina del document.
Indexades des de 0 (0 = primera)

Els valors per amplada i alçada i els marges han d&apos;estar expressats en les unitats per defecte
del document. Les constants PAPER_* estan expressades en punts. Recorda-ho si el teu document
no està en punts

exemple: newDocument(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 7, UNIT_POINTS,(new line)
PAGE_4, 3)(new line)
(new line)
Pot generar un ScribusError si firstPageOrder és més gran que el permès per pagesType.
</translation>
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
        <translation>getFont([&quot;nom]) -&gt; string

Retorna el nom de la font del quadre de text &quot;nom&quot;. Si aquest quadre
de text té algun text seleccionat es retorna el valor assignat al primer
caràcter de la selecció. Si no especifiquem &quot;nom&quot;  es fa servir l&apos;ítem
seleccionat.
</translation>
    </message>
    <message>
        <source>getTextLength([&quot;name&quot;]) -&gt; integer

Returns the length of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getFillColor([&quot;nom&quot;]) -&gt; string

Retorna el nom del color de l&apos;objecte &quot;nom&quot;.
Si no es dóna cap &quot;nom&quot;, es fa servir l&apos;ítem sel.leccionat.
getTextLength([&quot;nom&quot;]) -&gt; integer

Retorna la llargada del text del quadre de text &quot;nom&quot;.
Si no es dóna cap &quot;nom&quot;, es fa servir l&apos;ítem sel.leccionat.
</translation>
    </message>
    <message>
        <source>getText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot;. If this text frame has some text
selected, the selected text is returned. All text in the frame, not just
currently visible text, is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>getText([&quot;nom&quot;]) -&gt; string

Retorna el text del quadre de text &quot;nom&quot;. Si el quadre de text té algun 
text seleccionat, es torna el text seleccionat. Es torna tot el text, 
no només el text visible. Si no es dóna cap &quot;nom&quot;, es fa servir 
l&apos;ítem sel.leccionat.
</translation>
    </message>
    <message>
        <source>getAllText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot; and of all text frames which are
linked with this frame. If this textframe has some text selected, the selected
text is returned. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation>getAllText([&quot;nom&quot;]) -&gt; string

Retorna el text del quadre de text &quot;nom&quot; i de tots els quadres de text que estan
enllaçats amb aquest. Si el quadre de text té algun text seleccionat, es retorna 
el text seleccionat. Si no es dóna cap &quot;nom&quot;, es fa servir l&apos;ítem 
sel.leccionat.
</translation>
    </message>
    <message>
        <source>getLineSpacing([&quot;name&quot;]) -&gt; float

Returns the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; expressed in
points. If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getLineSpacing([&quot;nom&quot;]) -&gt; float

Retorna l&apos;espaiat entre línies del quadre de text &quot;nom&quot; expressat en
punts. Si no es dóna cap &quot;nom&quot;, es fa servir l&apos;ítem sel.leccionat.
</translation>
    </message>
    <message>
        <source>getColumnGap([&quot;name&quot;]) -&gt; float

Returns the column gap size of the text frame &quot;name&quot; expressed in points. If
&quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getColumnGap([&quot;nom&quot;]) -&gt; float

Retorna l&apos;espai entre columnes del quadre de text &quot;nom&quot; expressat en punts. Si
no es dóna cap &quot;nom&quot;, es fa servir l&apos;ítem sel.leccionat.
</translation>
    </message>
    <message>
        <source>getColumns([&quot;name&quot;]) -&gt; integer

Gets the number of columns of the text frame &quot;name&quot;. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>getColumns([&quot;nom&quot;]) -&gt; integer

Dóna el número de columnes del quadre de text &quot;nom&quot;. Si no es dóna 
cap &quot;nom&quot;, es fa servir l&apos;ítem sel.leccionat.
</translation>
    </message>
    <message>
        <source>setText(&quot;text&quot;, [&quot;name&quot;])

Sets the text of the text frame &quot;name&quot; to the text of the string &quot;text&quot;.
Text must be UTF8 encoded - use e.g. unicode(text, &apos;iso-8859-2&apos;). See the FAQ
for more details. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation>setText(&quot;text&quot;,[&quot;nom&quot;])

Posa al quadre de text &quot;name&quot; el text contingut a la cadena &quot;text&quot;. 
El text ha de ser codificat UTF8 - feu servir unicode(text, &apos;iso-8859-2&apos;). Mireu el 
FAQ per més detalls. Si no es dóna cap &quot;nom&quot;, es fa servir l&apos;ítem 
sel.leccionat.
</translation>
    </message>
    <message>
        <source>setFont(&quot;font&quot;, [&quot;name&quot;])

Sets the font of the text frame &quot;name&quot; to &quot;font&quot;. If there is some text
selected only the selected text is changed.  If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError if the font cannot be found.
</source>
        <translation>setFont(&quot;font&quot;,[&quot;nom])

Passa el quadre de text &quot;nom&quot; al tipus de lletra &quot;font&quot;. Si hi ha alguna
part de text seleccionada només canvia aquesta.   Si no especifiquem &quot;nom&quot;  
es fa servir l&apos;ítem seleccionat.

Pot generar ValueError si la font no es pot trobar.
</translation>
    </message>
    <message>
        <source>setFontSize(size, [&quot;name&quot;])

Sets the font size of the text frame &quot;name&quot; to &quot;size&quot;. &quot;size&quot; is treated
as a value in points. If there is some text selected only the selected text is
changed. &quot;size&quot; must be in the range 1 to 512. If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError for a font size that&apos;s out of bounds.
</source>
        <translation>setFontSize(mida, [&quot;nom&quot;])

Estableix la mida de la font del quadre de text &quot;nom&quot; a &quot;mida&quot;. &quot;mida&quot;
ha de ser en punts. Si hi ha text seleccionat només es canvia 
aquest. &quot;mida&quot; ha de ser un valor entre 1 i 512. Si no especifiquem 
&quot;nom&quot;  es fa servir l&apos;ítem seleccionat.

Pot provocar ValueError per mides fora de rang.
</translation>
    </message>
    <message>
        <source>setLineSpacing(size, [&quot;name&quot;])

Sets the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; to &quot;size&quot;.
&quot;size&quot; is a value in points. If &quot;name&quot; is not given the currently selected
item is used.

May throw ValueError if the line spacing is out of bounds.
</source>
        <translation>setLineSpacing(mida,[&quot;nom&quot;])

Estableix l&apos;espaiat de línia del quadre de text &quot;nom&quot; a &quot;mida&quot;.
&quot;mida&quot; està en punts. Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem 
seleccionat.

Pot provocar ValueError si l&apos;espaiat està fora de marges.</translation>
    </message>
    <message>
        <source>setColumnGap(size, [&quot;name&quot;])

Sets the column gap of the text frame &quot;name&quot; to the value &quot;size&quot;. If
&quot;name&quot; is not given the currently selected item is used.

May throw ValueError if the column gap is out of bounds (must be positive).
</source>
        <translation>setColumnGap(mida,[&quot;nom&quot;])

Estableix l&apos;espai entre columnes del quadre de text &quot;nom&quot; a &quot;mida&quot;. Si 
no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat.

Pot provocar ValueError si el valor està fora de rang (ha de ser positiu).
</translation>
    </message>
    <message>
        <source>setColumns(nr, [&quot;name&quot;])

Sets the number of columns of the text frame &quot;name&quot; to the integer &quot;nr&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May throw ValueError if number of columns is not at least one.
</source>
        <translation>setColumns(nr, [&quot;nom&quot;])

Estableix que el quadre de text &quot;nom&quot; tindrà &quot;nr&quot; columnes.
Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat.

Pot provocar ValueError si el número de columnes no és almenys una.
</translation>
    </message>
    <message>
        <source>setTextAlignment(align, [&quot;name&quot;])

Sets the text alignment of the text frame &quot;name&quot; to the specified alignment.
If &quot;name&quot; is not given the currently selected item is used. &quot;align&quot; should
be one of the ALIGN_ constants defined in this module - see dir(scribus).

May throw ValueError for an invalid alignment constant.
</source>
        <translation>setTextAlignment(alineacio, [&quot;nom&quot;])

Estableix l&apos;alineació del quadre de text &quot;nom&quot; a la especificada.
Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat. &quot;alineació&quot; ha de ser
una de les constants ALIGN_ definides en aquest mòdul - Mireu dir(scribus).

Pot provocar ValueError si posem una constant invàl.lida.
</translation>
    </message>
    <message>
        <source>deleteText([&quot;name&quot;])

Deletes any text in the text frame &quot;name&quot;. If there is some text selected,
only the selected text will be deleted. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>deleteText([&quot;nom&quot;])

Esborra qualsevol text del quadre de text &quot;nom&quot;. Si hi ha algun text 
seleccionat només s&apos;esborra la selecció. Si no especifiquem &quot;nom&quot;  
es fa servir l&apos;ítem seleccionat.
</translation>
    </message>
    <message>
        <source>setTextColor(&quot;color&quot;, [&quot;name&quot;])

Sets the text color of the text frame &quot;name&quot; to the color &quot;color&quot;. If there
is some text selected only the selected text is changed. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>setTextColor(&quot;color&quot;, [&quot;nom&quot;])

Posa el text del quadre de text &quot;nom&quot; al color &quot;color&quot;. Si hi ha algun
text seleccionat només es canvia el text seleccionat. Si no 
especifiquem &quot;nom&quot;  es fa servir l&apos;ítem seleccionat.
</translation>
    </message>
    <message>
        <source>setTextStroke(&quot;color&quot;, [&quot;name&quot;])

Set &quot;color&quot; of the text stroke. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>setTextStroke(&quot;color&quot;, [&quot;nom&quot;])

Posa el &quot;color&quot; a les línies de contorn. Si no especifiquem &quot;nom&quot;  
es fa servir l&apos;ítem seleccionat.
</translation>
    </message>
    <message>
        <source>setTextShade(shade, [&quot;name&quot;])

Sets the shading of the text color of the object &quot;name&quot; to &quot;shade&quot;. If
there is some text selected only the selected text is changed. &quot;shade&quot; must
be an integer value in the range from 0 (lightest) to 100 (full color
intensity). If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation>setTextShade(intensitat, [&quot;nom&quot;])

Posa la intensitat del color del text &quot;nom&quot; a &quot;intensitat&quot;. Si hi ha algun
text seleccionat només es canvia aquest. &quot;intensitat&quot; ha de ser
un valor enter que va des de 0 (clarejat) a 100 (intensitat de 
color).Si no especifiquem &quot;nom&quot;  es fa servir l&apos;ítem 
seleccionat.
</translation>
    </message>
    <message>
        <source>linkTextFrames(&quot;fromname&quot;, &quot;toname&quot;)

Link two text frames. The frame named &quot;fromname&quot; is linked to the
frame named &quot;toname&quot;. The target frame must be an empty text frame
and must not link to or be linked from any other frames already.

May throw ScribusException if linking rules are violated.
</source>
        <translation>linkTextFrames(&quot;desdenom&quot;,&quot;anom&quot;)

Enllaça dos quadres de text. El quadre de text &quot;desdenom&quot; és enllaçat a
el quadre de text &quot;anom&quot;. El quadre de text de destí ha de ser buit
i no es pot enllaçar o ser enllaçat per cap altre quadre de text.

Podem tenir ScribusException si es violen les normes d&apos;enllaçat.
</translation>
    </message>
    <message>
        <source>unlinkTextFrames(&quot;name&quot;)

Remove the specified (named) object from the text frame flow/linkage. If the
frame was in the middle of a chain, the previous and next frames will be
connected, eg &apos;a-&gt;b-&gt;c&apos; becomes &apos;a-&gt;c&apos; when you unlinkTextFrames(b)&apos;

May throw ScribusException if linking rules are violated.
</source>
        <translation>unlinkTextFrames(&quot;nom&quot;)

Elimina l&apos;objecte especificat del camí de quadre de text. Si el quadre
de text estava al mig d&apos;una cadena, els anteriors i els següents seran
connectats, ex. &apos;a-&gt;b-&gt;c&apos; esdevé &apos;a-&gt;c&apos; quan fem unlinkTextFrames(b)&apos;

Podem tenir ScribusException si violem les normes.
</translation>
    </message>
    <message>
        <source>traceText([&quot;name&quot;])

Convert the text frame &quot;name&quot; to outlines. If &quot;name&quot; is not given the
currently selected item is used.</source>
        <translation>traceText([&quot;nom&quot;])

Convertim el quadre de text &quot;nom&quot; a esquema. Si no especifiquem 
&quot;nom&quot; es fa servir l&apos;ítem seleccionat.</translation>
    </message>
    <message>
        <source>getColor(&quot;name&quot;) -&gt; tuple

Returns a tuple (C, M, Y, K) containing the four color components of the
color &quot;name&quot; from the current document. If no document is open, returns
the value of the named color from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation>getColor(&quot;nom&quot;) -&gt; tupla

Retorna una tupla (C, M, Y, K) que conté els quatre components de color
de &quot;nom&quot; del document actual. Si no hi ha cap document obert, torna
el valor del color anomenat dels colors per defecte.

Pot produir un NotFoundError si no es troba el color.
Pot produir ValueError si s&apos;especifica un color invàl.lid.
</translation>
    </message>
    <message>
        <source>changeColor(&quot;name&quot;, c, m, y, k)

Changes the color &quot;name&quot; to the specified CMYK value. The color value is
defined via four components c = Cyan, m = Magenta, y = Yellow and k = Black.
Color components should be in the range from 0 to 255.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation>changeColor(&quot;nom&quot;, c, m, y, k)

Canvia el color &quot;nom&quot; a els valors CMYK. El valor del color està 
definit via els quatre components c=Cian, m=Magenta, y=Groc i k=Negre
Els colors del component han d&apos;estar dins del rang 0 a 255.

Pot produir un NotFoundError si no es troba el color.
Pot produir ValueError si s&apos;especifica un color erròni.</translation>
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
        <translation>deleteColor(&quot;nom&quot;, &quot;canvi&quot;)

Esborra el color &quot;nom&quot;. Cada ocurrència d&apos;aquest color es canvia pel 
color &quot;canvi&quot;. Si no s&apos;especifica, &quot;canvi&quot; es canvia pel color &quot;cap&quot;
- transparent.

deleteColor treballa en els colors per defecte del document  si no n&apos;hi
ha cap d&apos;obert, encara que s&apos;especifiqui, no fa res.

Pot generar NotFoundError si no existeix el color.
Pot generar ValueError si s&apos;especifica un color invàlid.
</translation>
    </message>
    <message>
        <source>replaceColor(&quot;name&quot;, &quot;replace&quot;)

Every occurence of the color &quot;name&quot; is replaced by the color &quot;replace&quot;.

May raise NotFoundError if a named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation>replaceColor(&quot;nom&quot;, &quot;canvi&quot;)

Cada ocurrència del color &quot;name&quot; es canvia pel color &quot;canvi&quot;.

Pot generar un NotFoundError si no existeix el color.
Pot generar un ValueError si el color especificat és invalid.
</translation>
    </message>
    <message>
        <source>fileDialog(&quot;caption&quot;, [&quot;filter&quot;, &quot;defaultname&quot; ,haspreview, issave]) -&gt; string with filename

Shows a File Open dialog box with the caption &quot;caption&quot;. Files are filtered
with the filter string &quot;filter&quot;. A default filename or file path can also
supplied, leave this string empty when you don&apos;t want to use it.  A value of
True for haspreview enables a small preview widget in the FileSelect box.  When
the issave parameter is set to True the dialog acts like a &quot;Save As&quot; dialog
otherwise it acts like a &quot;File Open Dialog&quot;. The default for both of the
opional parameters is False.

The filter, if specified, takes the form &apos;comment (*.type *.type2 ...)&apos;.
For example &apos;Images (*.png *.xpm *.jpg)&apos;.

Refer to the Qt-Documentation for QFileDialog for details on filters.

Example: fileDialog(&apos;Open input&apos;, &apos;CSV files (*.csv)&apos;)
Example: fileDialog(&apos;Save report&apos;, defaultname=&apos;report.txt&apos;, issave=True)
</source>
        <translation>fileDialog(&quot;caption&quot;, [&quot;filtre&quot;, &quot;nomdefecte&quot;, haspreview, issave])-&gt;string

Mostra el diàleg d&apos;obrir fitxer amb el text &quot;caption&quot;. Els fitxers seran filtrats
amb la cadena de filtre &quot;filter&quot;. També es podrà donar un nom de fitxer, 
deixa aquesta cadena buida si no el vols fer servir.  Quan el paràmetre
&quot;issave&quot; està com a Cert el diàleg actua com un diàleg &quot;Desa com&quot;
altrament actual com un diàleg &quot;Obrir&quot;. Per defecte els paràmetres 
opcionals són falsos.

El filtre, si s&apos;especifica, agafa la forma &apos;comentari (*.tipus, *.tipus2 ...)&apos;
Per exemple &apos;Imatges (*.png *.xpm *.jpg)&apos;. 

Per més detalls aneu a la Documentació Qt en el QFileDialog pels filtres.

Exemple: fileDialog(&apos;Obrir entrades&apos;, &apos;CSV files (*.csv)&apos;)
Exemple: fileDialog(&apos;Gravar resultat&apos;, defaultname=&apos;report.txt&apos;, issave=True)
</translation>
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
        <translation>messageBox(&quot;caption&quot;, &quot;missatge&quot;,
    icon=ICON_NONE, button1=BUTTON_OK|BUTTONOPT_DEFAULT,
    button2=BUTTON_NONE, button3=BUTTON_NONE) -&gt; integer

Mostra un diàleg amb el títol de finestra &quot;caption&quot;, el missatge &quot;missatge&quot;, i 
una icona &quot;icon&quot; amb fins a 3 botons. Per defecte no es fa servir cap icona i
només un sol botó, OK. Només calen els textos de &quot;caption&quot; i de &quot;missatge&quot;,
per tant afegir una icona i els botons apropiats és molt 
recomanat. El missatge de text pot contenir tags HTML.

Retorna el número del botó que l&apos;usuari a premit. El número de botos comença
a 1.

Per la icona i pels paràmetres dels botons hi ha diverses constants predeterminades
amb els mateixos noms que a la documentació de Qt. Són constants BUTTON_* i
ICON_* definides al mòdul. També hi ha constants extres a les que poden fer
un OR binari amb constants de botó:
    BUTTONOPT_DEFAULT   Prement enter tria aquest botó.
    BUTTONOPT_ESCAPE    Prement escape tria aquest botó.

Exemples d&apos;ús:
result = messageBox(&apos;Script failed&apos;,
messageBox(&quot;caption&quot;, &quot;message&quot;,(new line)
(sp)(sp)(sp)(sp)icon=ICON_NONE, button1=BUTTON_OK|BUTTONOPT_DEFAULT,(new line)
(sp)(sp)(sp)(sp)button2=BUTTON_NONE, button3=BUTTON_NONE) -&gt; integer(new line)
(new line)
Displays a message box with the title &quot;caption&quot;, the message &quot;message&quot;, and(new line)
an icon &quot;icon&quot; and up to 3 buttons. By default no icon is used and a single(new line)
button, OK, is displayed. Only the caption and message arguments are required,(new line)
though setting an icon and appropriate button(s) is strongly(new line)
recommended. The message text may contain simple HTML-like markup.(new line)
(new line)
Returns the number of the button the user pressed. Button numbers start(new line)
at 1.(new line)
(new line)
For the icon and the button parameters there are predefined constants available(new line)
with the same names as in the Qt Documentation. These are the BUTTON_* and(new line)
ICON_* constants defined in the module. There are also two extra constants that(new line)
can be binary-ORed with button constants:(new line)
(sp)(sp)(sp)(sp)BUTTONOPT_DEFAULT(sp)(sp)(sp)Pressing enter presses this button.(new line)
(sp)(sp)(sp)(sp)BUTTONOPT_ESCAPE(sp)(sp)(sp)(sp)Pressing escape presses this button.(new line)
(new line)
Usage examples:(new line)
result = messageBox(&apos;Script failed&apos;,(new line)
                    &apos;This script only works when you have a text frame selected.&apos;,
                    ICON_ERROR)
result = messageBox(&apos;Monkeys!&apos;, &apos;Something went ook! &lt;i&gt;Was it a monkey?&lt;/i&gt;&apos;,
                    ICON_WARNING, BUTTON_YES|BUTTONOPT_DEFAULT,
                    BUTTON_NO, BUTTON_IGNORE|BUTTONOPT_ESCAPE)

Les constants de botó són: 
BUTTON_NONE, BUTTON_ABORT, BUTTON_CANCEL, BUTTON_IGNORE, BUTTON_NO,
BUTTON_NOALL, BUTTON_OK, BUTTON_RETRY, BUTTON_YES, BUTTON_YESALL,
ICON_NONE, ICON_INFORMATION, ICON_WARNING, ICON_CRITICAL.
</translation>
    </message>
    <message>
        <source>valueDialog(caption, message [,defaultvalue]) -&gt; string

Shows the common &apos;Ask for string&apos; dialog and returns its value as a string
Parameters: window title, text in the window and optional &apos;default&apos; value.

Example: valueDialog(&apos;title&apos;, &apos;text in the window&apos;, &apos;optional&apos;)
</source>
        <translation>valueDialog(caption, missatge, [,valorperdefecte]) -&gt; string

Mostra el diàleg comú &quot;Demana per cadena&quot; i retorna el seu valor.
Paràmetres: títol de finestra, text en la finestra i un valor per defecte opcional.

Exemple: valueDialog(&apos;titol&apos;, &apos;text en la finestra&apos;, &apos;opcional&apos;)
</translation>
    </message>
    <message>
        <source>closeDoc()

Closes the current document without prompting to save.

May throw NoDocOpenError if there is no document to close
</source>
        <translation>closeDoc()

Tanca el document actual sense preguntar per desar.

Pot generar un NoDocOpenError si no hi ha cap document per tancar
</translation>
    </message>
    <message>
        <source>haveDoc() -&gt; bool

Returns true if there is a document open.
</source>
        <translation>haveDoc() -&gt; bool

Retorna cert si hi ha un document obert.
</translation>
    </message>
    <message>
        <source>openDoc(&quot;name&quot;)

Opens the document &quot;name&quot;.

May raise ScribusError if the document could not be opened.
</source>
        <translation>openDoc(&quot;nom&quot;)

Obre el document &quot;nom&quot;.

Pot generar ScribusError si el document no es pot obrir.</translation>
    </message>
    <message>
        <source>saveDoc()

Saves the current document with its current name, returns true if successful.
If the document has not already been saved, this may bring up an interactive
save file dialog.

If the save fails, there is currently no way to tell.
</source>
        <translation>saveDoc()

Desa el document actual amb el seu nom actual, retorna cert si ha funcionat.
Si el document no ha estat gravat previament, ens sortirà un diàleg interactiu
per guardar.

Si no es pot desar, no hi ha cap forma de saber-ho.
</translation>
    </message>
    <message>
        <source>saveDocAs(&quot;name&quot;)

Saves the current document under the new name &quot;name&quot; (which may be a full or
relative path).

May raise ScribusError if the save fails.
</source>
        <translation>saveDocAs(&quot;nom&quot;)

Desa el document actual sota el nou nom &quot;nom&quot; (que pot ser amb camí absolut
o camí relatiu).

Pot generar un ScribusError si falla el desat.
</translation>
    </message>
    <message>
        <source>saveDocAs(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -&gt; bool

Sets the document information. &quot;Author&quot;, &quot;Info&quot;, &quot;Description&quot; are
strings.
</source>
        <translation>saveDocAs(&quot;autor&quot;, &quot;info&quot;, &quot;descripcio&quot;) -&gt; bool

Posa la informació al document. &quot;Autor&quot;, &quot;Informació&quot;, &quot;Descripció&quot; són
cadenes.
</translation>
    </message>
    <message>
        <source>setMargins(lr, rr, tr, br)

Sets the margins of the document, Left(lr), Right(rr), Top(tr) and Bottom(br)
margins are given in the measurement units of the document - see UNIT_&lt;type&gt;
constants.
</source>
        <translation>setMargins(lr, rr, tr, br)

Posa els marges del document, Esquerra (lr), Dreta (rr), Dalt (tr) i Baix (br)
Els marges s&apos;han de posar en unitats de mesura del document - veure les constants
UNIT_&lt;tipus&gt;.
</translation>
    </message>
    <message>
        <source>setUnit(type)

Changes the measurement unit of the document. Possible values for &quot;unit&quot; are
defined as constants UNIT_&lt;type&gt;.

May raise ValueError if an invalid unit is passed.
</source>
        <translation>setUnit(unitats)

Canvia les unitats de mesura del document. Possible valors de les unitats estan
definides com a constants UNIT_&lt;tipus&gt;.
</translation>
    </message>
    <message>
        <source>getUnit() -&gt; integer (Scribus unit constant)

Returns the measurement units of the document. The returned value will be one
of the UNIT_* constants:
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.
</source>
        <translation>getUnit() -&gt; integer (unitats de constants Scribus)

Retorna les unitats des mesura del document. El valor retornat serà una de 
les constants UNIT_*: 
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.
</translation>
    </message>
    <message>
        <source>loadStylesFromFile(&quot;filename&quot;)

Loads paragraph styles from the Scribus document at &quot;filename&quot; into the
current document.
</source>
        <translation>loadStylesFromFile(&quot;nomfitxer&quot;)

Carregar els estils de paràgraf des d&apos;un document Scribus especificat a &quot;nomfitxer&quot; 
en el document actual.
</translation>
    </message>
    <message>
        <source>setDocType(facingPages, firstPageLeft)

Sets the document type. To get facing pages set the first parameter to
FACINGPAGES, to switch facingPages off use NOFACINGPAGES instead.  If you want
to be the first page a left side set the second parameter to FIRSTPAGELEFT, for
a right page use FIRSTPAGERIGHT.
</source>
        <translation>setDocType(facingPages, firstPageLeft)

Estableix el tipus de document. Per tenir pàgines acarades cal establir primer
paràmetre a FACINPAGES, i per no tenir-ne NOFACINPAGES.  Si vols que la primera 
pàgina sigui a l&apos;esquerra cal posar al segon paràmetre FIRSTPAGELEFT, i perquè 
sigui la dreta FIRSTPAGERIGHT.
</translation>
    </message>
    <message>
        <source>getLineColor([&quot;name&quot;]) -&gt; string

Returns the name of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getLineColor([&quot;nom&quot;]) -&gt; string

Retorna el nom del color de línia de l&apos;objecte &quot;nom&quot;.
Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat.
</translation>
    </message>
    <message>
        <source>getLineWidth([&quot;name&quot;]) -&gt; integer

Returns the line width of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation>getLineWidth([&quot;nom&quot;]) -&gt; integer

Retorna l&apos;amplada de la línia de l&apos;objecte &quot;nom&quot;. Si no 
especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat.
</translation>
    </message>
    <message>
        <source>getLineShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getLineShade([&quot;nom&quot;]) -&gt; integer

Retorna el valor de la intensitat del color de la línia de l&apos;objecte &quot;nom&quot;.
Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat.
</translation>
    </message>
    <message>
        <source>getLineJoin([&quot;name&quot;]) -&gt; integer (see contants)

Returns the line join style of the object &quot;name&quot;. If &quot;name&quot; is not given
the currently selected item is used.  The join types are:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND
</source>
        <translation>getLineJoin([&quot;nom&quot;]) -&gt; integer (mirar constants)

Retorna l&apos;estil d&apos;unió de línia de l&apos;objecte &quot;nom&quot;. Si no especifiquem 
&quot;nom&quot; es fa servir l&apos;ítem seleccionat.  Els tipus d&apos;unió són:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND
</translation>
    </message>
    <message>
        <source>getLineEnd([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line cap style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. The cap types are:
CAP_FLAT, CAP_ROUND, CAP_SQUARE
</source>
        <translation>getLineEnd([&quot;nom&quot;]) -&gt; integer (mirar constants)

Retorna el tap de línia de l&apos;objecte &quot;nom&quot;. Si no especifiquem &quot;nom&quot; es fa 
servir l&apos;ítem seleccionat. Els tipus de tap són:
CAP_FLAT, CAP_ROUND, CAP_SQUARE
</translation>
    </message>
    <message>
        <source>getLineStyle([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. Line style constants are:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID
</source>
        <translation>getLineStyle([&quot;nom&quot;]) -&gt; integer (mirar constants)

Retorna l&apos;estil de línia de l&apos;objecte &quot;nom&quot;. Si no especifiquem &quot;nom&quot; es 
fa servir l&apos;ítem seleccionat.. Les constants de línia són:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID
</translation>
    </message>
    <message>
        <source>getFillShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getFillShade([&quot;nom&quot;]) -&gt; integer

Retorna el valor de la intensitat del color d&apos;emplenament de l&apos;objecte &quot;nom&quot;.
Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat.
</translation>
    </message>
    <message>
        <source>getImageScale([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple containing the scaling values of the image frame
&quot;name&quot;.  If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getImageScale([&quot;name&quot;]) -&gt; (x,y)

Retorna una parella (x,y) contenint els valors d&apos;escalat de la imatge
&quot;nom&quot;.  Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat.
</translation>
    </message>
    <message>
        <source>getImageName([&quot;name&quot;]) -&gt; string

Returns the filename for the image in the image frame. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>getImageName([&quot;nom&quot;]) -&gt; string

Retorna el nom del fitxer de la imatge que tenim. Si no especifiquem &quot;nom&quot;
 es fa servir l&apos;ítem seleccionat.</translation>
    </message>
    <message>
        <source>getSize([&quot;name&quot;]) -&gt; (width,height)

Returns a (width, height) tuple with the size of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. The size is
expressed in the current measurement unit of the document - see UNIT_&lt;type&gt;
for reference.
</source>
        <translation>getSize([&quot;nom&quot;]) -&gt; (amplada,alçada)

Retorna un parell (amplada, alçada) amb la mida de l&apos;objecte &quot;nom&quot;.
Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat. La mida està
expressada en les unitats de mesura del document - mireu UNIT_&lt;tipus&gt;
per referència.</translation>
    </message>
    <message>
        <source>getRotation([&quot;name&quot;]) -&gt; integer

Returns the rotation of the object &quot;name&quot;. The value is expressed in degrees,
and clockwise is positive. If &quot;name&quot; is not given the currently selected item
is used.
</source>
        <translation>getRotation([&quot;name&quot;]) -&gt; integer

Retorna la rotació de l&apos;objecte &quot;nom&quot;. El valor està expressat en graus, 
en sentit horari és positiu. Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem 
seleccionat.
</translation>
    </message>
    <message>
        <source>getAllObjects() -&gt; list

Returns a list containing the names of all objects on the current page.
</source>
        <translation>getAllObjects() -&gt; list

Retorna una llista que conté els noms de tots els objectes de la pàgina actual.
</translation>
    </message>
    <message>
        <source>moveObjectAbs(x, y [, &quot;name&quot;])

Moves the object &quot;name&quot; to a new location. The coordinates are expressed in
the current measurement unit of the document (see UNIT constants).  If &quot;name&quot;
is not given the currently selected item is used.  If the object &quot;name&quot;
belongs to a group, the whole group is moved.
</source>
        <translation>moveObjectAbs(x, y [, &quot;nom&quot;])

Mou l&apos;objecte &quot;nom&quot; a una nova posició. Les coordenades estan expressades en
les unitats de mesura del document (veure constants UNIT).  Si no especifiquem &quot;nom&quot; 
es fa servir l&apos;ítem seleccionat.  Si l&apos;objecte &quot;nom&quot; pertany a un grup,
es mou tot el grup.
</translation>
    </message>
    <message>
        <source>rotateObject(rot [, &quot;name&quot;])

Rotates the object &quot;name&quot; by &quot;rot&quot; degrees relatively. The object is
rotated by the vertex that is currently selected as the rotation point - by
default, the top left vertext at zero rotation. Positive values mean counter
clockwise rotation when the default rotation point is used. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>rotateObject(rot, [, &quot;nom&quot;])

Rota l&apos;objecte &quot;nom&quot; &quot;rot&quot; graus respecte el punt actual. L&apos;objecte és 
rotat pel vertex seleccionat com a punt de rotació - per defecte, el 
punt superior esquerre a rotació zero. Valors positius representen rodar
en sentit horari quan es fa servir el punt de rotació per defecte. Si no 
especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat.
</translation>
    </message>
    <message>
        <source>sizeObject(width, height [, &quot;name&quot;])

Resizes the object &quot;name&quot; to the given width and height. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation>sizeObject(amplada, alçada [, &quot;nom&quot;])

Canvia la mida de l&apos;objecte &quot;nom&quot; a la mida especificada. Si no 
especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat.
</translation>
    </message>
    <message>
        <source>getSelectedObject([nr]) -&gt; string

Returns the name of the selected object. &quot;nr&quot; if given indicates the number
of the selected object, e.g. 0 means the first selected object, 1 means the
second selected Object and so on.
</source>
        <translation>getSelectedObject([nr]) -&gt; string

Retorna el nom de l&apos;objecte seleccionat. &quot;nr&quot; si es dóna especifica el número
de l&apos;objecte seleccionat, ex. 0 significa el primer objecte seleccionat, 1 el 
segon i així.
</translation>
    </message>
    <message>
        <source>selectionCount() -&gt; integer

Returns the number of selected objects.
</source>
        <translation>seleccionCount() -&gt; integer

Retorna el número d&apos;objectes seleccionats.
</translation>
    </message>
    <message>
        <source>selectObject(&quot;name&quot;)

Selects the object with the given &quot;name&quot;.
</source>
        <translation>selectObject(&quot;nom&quot;)

Selecciona l&apos;objecte amb el nom &quot;nom&quot;.
</translation>
    </message>
    <message>
        <source>deselectAll()

Deselects all objects in the whole document.
</source>
        <translation>deselectAll()

Deselecciona tots els objectes de tot el document.
</translation>
    </message>
    <message>
        <source>groupObjects(list)

Groups the objects named in &quot;list&quot; together. &quot;list&quot; must contain the names
of the objects to be grouped. If &quot;list&quot; is not given the currently selected
items are used.
</source>
        <translation>groupObjects(llista)

Agrupa els objectes que especifiquem a la llista &quot;llista&quot;. La llista ha de contenir
els noms dels objectes a agrupar. Si no s&apos;especifica llista es fan servir els 
objectes que estiguin seleccionats.
</translation>
    </message>
    <message>
        <source>unGroupObjects(&quot;name&quot;)

Destructs the group the object &quot;name&quot; belongs to.If &quot;name&quot; is not given the currently selected item is used.</source>
        <translation>unGroupObjects(&quot;nom&quot;)

Destrueix el grup al qual pertany l&apos;objecte &quot;nom&quot;. Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat.</translation>
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
        <translation>scaleGroup(factor [,&quot;nom&quot;])

Escala el grup al qual pertany l&apos;objecte &quot;nom&quot;. Valors més grans que 1 incrementen
el grup, i valors més petits que 1 decrementen el grup. ex. Un valor de 0.5 escala 
el grup al 50% del valor original, un valor de 1.5 escala el grup a un 
150% del valor original.  El valor de &quot;factor&quot; ha de ser més gran que 
0. Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat.

Pot provocar un ValueError si s&apos;especifica un factor invàlid.
</translation>
    </message>
    <message>
        <source>loadImage(&quot;filename&quot; [, &quot;name&quot;])

Loads the picture &quot;picture&quot; into the image frame &quot;name&quot;. If &quot;name&quot; is
not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation>loadImage(&quot;nomFitxer&quot;, [,&quot;nom&quot;])

Carrega la imatge &quot;nomFitxer&quot; en el marc d&apos;imatge &quot;nom&quot;. Si no especifiquem 
&quot;nom&quot; es fa servir l&apos;ítem seleccionat.

Pot provocar WrongFrameTypeError si el marc no és d&apos;imatge
</translation>
    </message>
    <message>
        <source>scaleImage(x, y [, &quot;name&quot;])

Sets the scaling factors of the picture in the image frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. A number of 1
means 100 %.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation>scaleImage(x, y [, &quot;nom&quot;])

Estableix els factors d&apos;escalat de la imatge del marc d&apos;imatge &quot;nom&quot;.
Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat. Un valor de 1
significa 100 %.

Pot provocar WrongFrameTypeError si el marc no és d&apos;imatge
</translation>
    </message>
    <message>
        <source>lockObject([&quot;name&quot;]) -&gt; bool

Locks the object &quot;name&quot; if it&apos;s unlocked or unlock it if it&apos;s locked.
If &quot;name&quot; is not given the currently selected item is used. Returns true
if locked.
</source>
        <translation>lockObject([&quot;nom&quot;]) -&gt; bool

Bloqueja l&apos;objecte &quot;nom&quot; si està desbloquejat o el desbloqueja si està bloquejat.
Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat. Retorna cert
si bloqueja.
</translation>
    </message>
    <message>
        <source>isLocked([&quot;name&quot;]) -&gt; bool

Returns true if is the object &quot;name&quot; locked.  If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation>isLocked([&quot;nom&quot;]) -&gt; bool

Retorna cert si l&apos;objecte &quot;nom&quot; està bloquejat.  Si no especifiquem &quot;nom&quot; es 
fa servir l&apos;ítem seleccionat.
</translation>
    </message>
    <message>
        <source>getFontNames() -&gt; list

Returns a list with the names of all available fonts.
</source>
        <translation>getFontNames() -&gt; llista

Retorna una llista amb els noms de totes les fonts.
</translation>
    </message>
    <message>
        <source>getXFontNames() -&gt; list of tuples

Returns a larger font info. It&apos;s a list of the tuples with:
[ (Scribus name, Family, Real name, subset (1|0), embed PS (1|0), font file), (...), ... ]
</source>
        <translation>getXFontNames() -&gt; llista de tuples

Retorna molta informació de font. És una llista de tuples amb:
[ (Nom Scribus, Familia, Nom Real, subconjunt (1|0), embed PS (1|0), fitxer de font), (...), ...]
</translation>
    </message>
    <message>
        <source>getLayers() -&gt; list

Returns a list with the names of all defined layers.
</source>
        <translation>getLayers() -&gt; llista

Retorna una llista amb els noms de totes les capes.
</translation>
    </message>
    <message>
        <source>setActiveLayer(&quot;name&quot;)

Sets the active layer to the layer named &quot;name&quot;.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>setActiveLayer(&quot;nom&quot;)

Canvia la capa activa a una capa anomenada &quot;nom&quot;.

Pot generar NotFoundError si la capa no es pot trobar.
Pot generar ValueError si la capa nom no és acceptable.
</translation>
    </message>
    <message>
        <source>getActiveLayer() -&gt; string

Returns the name of the current active layer.
</source>
        <translation>getActiveLayer() -&gt; string

Retorna el nom de la capa activa.
</translation>
    </message>
    <message>
        <source>sentToLayer(&quot;layer&quot; [, &quot;name&quot;])

Sends the object &quot;name&quot; to the layer &quot;layer&quot;. The layer must exist.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>sendToLayer(&quot;capa&quot; [, &quot;nom&quot;])

Envia l&apos;objecte &quot;nom&quot; a la capa &quot;capa&quot;. La capa ha d&apos;existir.
Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat.

Pot provocar NotFoundError si la capa no es pot trobar.
Pot provocar ValueError si el nom no és acceptable.


</translation>
    </message>
    <message>
        <source>setLayerVisible(&quot;layer&quot;, visible)

Sets the layer &quot;layer&quot; to be visible or not. If is the visible set to false
the layer is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>setLayerVisible(&quot;capa&quot;, visible)

Estableix la capa especificada a visible o no. Si visible està false
la capa és invisible.

Pot generar NotFoundError si la capa no es pot trobar.
Pot generar ValueError si el nom de capa no és acceptable.
</translation>
    </message>
    <message>
        <source>setLayerPrintable(&quot;layer&quot;, printable)

Sets the layer &quot;layer&quot; to be printable or not. If is the printable set to
false the layer won&apos;t be printed.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>setLayerPrintable(&quot;capa&quot;, printable)

Estableix la capa especificada a printable o no. Si printable està 
false la capa no s&apos;imprimirà.

Pot generar NotFoundError si la capa no es pot trobar.
Pot generar ValueError si el nom de capa no és acceptable.
</translation>
    </message>
    <message>
        <source>deleteLayer(&quot;layer&quot;)

Deletes the layer with the name &quot;layer&quot;. Nothing happens if the layer doesn&apos;t
exists or if it&apos;s the only layer in the document.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>deleteLayer(&quot;capa&quot;)

Esborra la capa amb el nom &quot;capa&quot;. Si la capa no existeix o és la única del 
document no passa res.

Pot generar NotFoundError si la capa no es pot trobar.
Pot generar ValueError si el nom de capa no és acceptable.
</translation>
    </message>
    <message>
        <source>createLayer(layer)

Creates a new layer with the name &quot;name&quot;.

May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>createLayer(capa)

Crea una nova capa amb el nom &quot;capa&quot;.

Pot generar ValueError si el nom de capa no és acceptable.
</translation>
    </message>
    <message>
        <source>getGuiLanguage() -&gt; string

Returns a string with the -lang value.
</source>
        <translation>getGuiLanguage() -&gt; string

Retorna una cadena amb el valor de -lang.
</translation>
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
        <translation>createEllipse(x, y, amplada, alçada, [&quot;nom&quot;]) -&gt; string

Crea una nova elipse en la pàgina actual i en retorna el nom.
Les coordenades estan especificades amb les unitats de mesura del document
(mireu constants UNIT). &quot;nom&quot; ha de ser un identificador únic per l&apos;objecte
ja que necessitem aquest nom per referències futures. Si &quot;nom&quot; no s&apos;especifica
Scribus en crearà un per nosaltres.

Pot generar un NameExistsError si especifiquem un nom que ja es fa servir.
</translation>
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
        <translation>createImage(x, y, amplada, alçada, [&quot;nom&quot;]) -&gt; string

Crea un nou marc d&apos;imatge en la pàgina actual i en retorna el nom.
Les coordenades estan especificades amb les unitats de mesura del document
(mireu constants UNIT). &quot;nom&quot; ha de ser un identificador únic per l&apos;objecte
ja que necessitem aquest nom per referències futures. Si &quot;nom&quot; no s&apos;especifica
Scribus en crearà un per nosaltres.

Pot generar un NameExistsError si especifiquem un nom que ja es fa servir.
</translation>
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
        <translation>createText(x, y, amplada, alçada, [&quot;nom&quot;]) -&gt; string

Crea un nou quadre de text en la pàgina actual i en retorna el nom.
Les coordenades estan especificades amb les unitats de mesura del document
(mireu constants UNIT). &quot;nom&quot; ha de ser un identificador únic per l&apos;objecte
ja que necessitem aquest nom per referències futures. Si &quot;nom&quot; no s&apos;especifica
Scribus en crearà un per nosaltres.

Pot generar un NameExistsError si especifiquem un nom que ja es fa servir.
</translation>
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
        <translation>createLine(x1, y1, x2, y2, [&quot;nom&quot;]) -&gt; string

Crea una nova línia des del punt (x1,y1) al punt (x2,y2) i en retorna el 
nom. Les coordenades estan especificades amb les unitats de mesura del 
document (mireu constants UNIT). &quot;nom&quot; ha de ser un identificador únic 
per l&apos;objecte ja que necessitem aquest nom per referències futures. Si 
&quot;nom&quot; no s&apos;especifica Scribus en crearà un per nosaltres.

Pot generar un NameExistsError si especifiquem un nom que ja es fa servir.
</translation>
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
        <translation>createPolyLine(llista, [&quot;nom&quot;]) -&gt; string

Crea un nou conjunt de línies i en retorna el nom. Els punts de cada línia estan
guardats en la llista &quot;llista&quot; en l&apos;ordre [x1, y1, x2, y2, .., xn, yn].
Les coordenades estan especificades amb les unitats de mesura del document
(mireu constants UNIT). &quot;nom&quot; ha de ser un identificador únic per l&apos;objecte
ja que necessitem aquest nom per referències futures. Si &quot;nom&quot; no s&apos;especifica
Scribus en crearà un per nosaltres.

Pot generar un NameExistsError si especifiquem un nom que ja es fa servir.
Pot generar un ValueError si es passa un número de punts insuficient o si el
número de valors passat no agrupa bé els punts.
</translation>
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
        <translation>createPolygon(llista, [&quot;nom&quot;]) -&gt; string

Crea un nou polígon i en retorna el nom. Els punts pel polígon estan 
guardats en la llista &quot;llista&quot; en el següent ordre: [x1, y1, x2, y2, ...xn, yn].
Almenys calen tres punts. No cal repetir el primer punt per 
tancar el polígon. El polígon es tancarà automàticament connectant el 
primer punt i el darrer.  Les coordenades estan especificades amb les unitats 
de mesura del document (mireu constants UNIT).  &quot;nom&quot; ha de ser un identificador 
únic per l&apos;objecte ja que necessitem aquest nom per referències futures. 
Si &quot;nom&quot; no s&apos;especifica Scribus en crearà un per nosaltres.

Pot generar un NameExistsError si especifiquem un nom que ja es fa servir.
Pot generar un ValueError si es passa un número de punts insuficient o si el
número de valors passat no agrupa bé els punts.
</translation>
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
        <translation>createBezierLine(llista, [&quot;nom&quot;]) -&gt; string

Crea una corba bezier i en retorna el nom. Els punts per la corba bezier es
guarden en la llista &quot;llista&quot; en el següent ordre:  
[x1, y1, kx1, ky1, x2, y2, kx2, ky2, ...xn, yn, kxn, kyn].
En els punts x i y són els valors de x i de y del punt, mentre que kx 
i ky són els punts de control de la corba.  Les coordenades es dónen en
les unitats de mesura del document (mireu constants UNIT).  &quot;nom&quot; 
ha de ser un identificador únic per l&apos;objecte ja que necessitem aquest nom 
per referències futures. Si &quot;nom&quot; no s&apos;especifica Scribus en crearà un per 
nosaltres.

Pot generar un NameExistsError si especifiquem un nom que ja es fa servir.
Pot generar un ValueError si es passa un número de punts insuficient o si el
número de valors passat no agrupa bé els punts.
</translation>
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
        <translation>createPathText(x, y, &quot;textbox&quot;, &quot;beziercurve&quot;, [&quot;nom&quot;]) -&gt; string

Crea una nou camí de text barrejant els dos objectes &quot;textbox&quot; i 
&quot;beziercurve&quot; i en retorna el nom. Les coordenades estan especificades 
amb les unitats de mesura del document (mireu constants UNIT). &quot;nom&quot; ha de 
ser un identificador únic per l&apos;objecte ja que necessitem aquest nom per referències 
futures. Si &quot;nom&quot; no s&apos;especifica Scribus en crearà un per nosaltres.

Pot generar un NameExistsError si especifiquem un nom que ja es fa servir.
Pot generar un NotFoundError si un dels dos objectes no existeix.
</translation>
    </message>
    <message>
        <source>deleteObject([&quot;name&quot;])

Deletes the item with the name &quot;name&quot;. If &quot;name&quot; is not given the currently
selected item is deleted.
</source>
        <translation>deleteObject([&quot;nom&quot;])

Esborra l&apos;ítem amb el nom &quot;nom&quot;. Si no especifiquem &quot;nom&quot; l&apos;ítem 
seleccionat és el que s&apos;esborra.
</translation>
    </message>
    <message>
        <source>textFlowsAroundFrame(&quot;name&quot; [, state])

Enables/disables &quot;Text Flows Around Frame&quot; feature for object &quot;name&quot;.
Called with parameters string name and optional boolean &quot;state&quot;. If &quot;state&quot;
is not passed, text flow is toggled.
</source>
        <translation>textFlowsAroundFrame(&quot;nom&quot; [,estat])

Activa/desactiva &quot;El Text flueix al voltant del marc&quot; de l&apos;objecte &quot;nom&quot;.
Creat amb els paràmetres nom del objecte i el opcional &quot;estat&quot;. Si &quot;estat&quot;
no es passa, s&apos;activa.
</translation>
    </message>
    <message>
        <source>objectExists([&quot;name&quot;]) -&gt; bool

Test if an object with specified name really exists in the document.
The optional parameter is the object name. When no object name is given,
returns True if there is something selected.
</source>
        <translation>objectExists([&quot;nom&quot;]) -&gt; bool

Prova si un objecte amb el nom especificat existeix en el document.
El paràmetre opcional és el nom de l&apos;objecte. Quan no especifiquem cap
nom retorna cert si hi ha res seleccionat.</translation>
    </message>
    <message>
        <source>setStyle(&quot;style&quot; [, &quot;name&quot;])

Apply the named &quot;style&quot; to the object named &quot;name&quot;. If is no object name
given, it&apos;s applied on the selected object.
</source>
        <translation>setStyle(&quot;estil&quot; [, &quot;nom&quot;])

Aplica l&apos;estil especificat a &quot;estil&quot; a l&apos;objecte &quot;nom&quot;. Si no especifiquem el nom
s&apos;aplica a l&apos;ítem seleccionat.</translation>
    </message>
    <message>
        <source>getAllStyles() -&gt; list

Return a list of the names of all paragraph styles in the current document.
</source>
        <translation>getAllStyles() -&gt; llista

Retorna una llista amb els noms dels estils de paràgraf del document actual.
</translation>
    </message>
    <message>
        <source>currentPage() -&gt; integer

Returns the number of the current working page. Page numbers are counted from 1
upwards, no matter what the displayed first page number of your document is.
</source>
        <translation>currentPage() -&gt; integer

Retorna el número de pàgina actual. Els números de pàgina comencen per 1
i van endavant, no importa de quina forma fem numerar les pàgines.
</translation>
    </message>
    <message>
        <source>redrawAll()

Redraws all pages.
</source>
        <translation>redrawAll()

Repinta totes les pàgines.
</translation>
    </message>
    <message>
        <source>savePageAsEPS(&quot;name&quot;)

Saves the current page as an EPS to the file &quot;name&quot;.

May raise ScribusError if the save failed.
</source>
        <translation>savePageAsEPS(&quot;nom&quot;)

Desa la pàgina actual com un fitxer EPS amb el nom &quot;nom&quot;.

Pot generar un  ScribusError si el desat falla.</translation>
    </message>
    <message>
        <source>deletePage(nr)

Deletes the given page. Does nothing if the document contains only one page.
Page numbers are counted from 1 upwards, no matter what the displayed first
page number is.

May raise IndexError if the page number is out of range
</source>
        <translation>deletePage(nr)

Esborra la pàgina especificada. No fa res si el document només conté una pàgina.
Els números de pàgina estan comptats des de 1, no importa la forma en que 
mostrem els números de pàgina.

Pot generar un IndexError si el número de pàgina està fora de rang
</translation>
    </message>
    <message>
        <source>gotoPage(nr)

Moves to the page &quot;nr&quot; (that is, makes the current page &quot;nr&quot;). Note that
gotoPage doesn&apos;t (curently) change the page the user&apos;s view is displaying, it
just sets the page that script commands will operates on.

May raise IndexError if the page number is out of range.
</source>
        <translation>gotoPage(nr)

Canvia a la pàgina &quot;nr&quot; (o sigui, fa que &quot;nr&quot; sigui la pàgina actual). Cal tenir
en compte que gotoPage no canvia la visió de pàgina que té l&apos;usuari, només
canvia la pàgina en que les seqüències treballaran.

Pot generar un IndexError si la pàgina està fora de rang.
</translation>
    </message>
    <message>
        <source>pageCount() -&gt; integer

Returns the number of pages in the document.
</source>
        <translation>pageCount() -&gt; integer

Retorna el número de pàgines del document.
</translation>
    </message>
    <message>
        <source>getHGuides() -&gt; list

Returns a list containing positions of the horizontal guides. Values are in the
document&apos;s current units - see UNIT_&lt;type&gt; constants.
</source>
        <translation>getHGuides() -&gt; llista

Retorna una llista que conté posicions de les guies horitzontals. Els valors estan
en les unitats del document - mireu les constants UNIT_&lt;tipus&gt;.
</translation>
    </message>
    <message>
        <source>setHGuides(list)

Sets horizontal guides. Input parameter must be a list of guide positions
measured in the current document units - see UNIT_&lt;type&gt; constants.

Example: setHGuides(getHGuides() + [200.0, 210.0] # add new guides without any lost
         setHGuides([90,250]) # replace current guides entirely
</source>
        <translation>setHGuides(llista)

Estableix les guies horitzontals. La entrada ha de ser una llista de posicions 
mesurades en les unitats del document - mireu les constants UNIT_&lt;tipus&gt;.

Exemple setHGuides(getHGuides() + [200.0, 210.0] # afegeix noves guies sense perdre
                setHGuides([90,250]) # canvia les guies actuals completament
</translation>
    </message>
    <message>
        <source>getVGuides()

See getHGuides.
</source>
        <translation>getVGuides()

Mireu getHGuides.
</translation>
    </message>
    <message>
        <source>setVGuides()

See setHGuides.
</source>
        <translation>setVGuides()

Mireu setHGuides.
</translation>
    </message>
    <message>
        <source>getPageSize() -&gt; tuple

Returns a tuple with page dimensions measured in the document&apos;s current units.
See UNIT_&lt;type&gt; constants and getPageMargins()
</source>
        <translation>getPageSize() -&gt; tupla

Retorna una tupla amb les mides de la pàgina mesurades amb les unitats del document.
Mireu les constants UNIT_&lt;tipus&gt;  i getPageMargins()
</translation>
    </message>
    <message>
        <source>getPageItems() -&gt; list

Returns a list of tuples with items on the current page. The tuple is:
(name, objectType, order) E.g. [(&apos;Text1&apos;, 4, 0), (&apos;Image1&apos;, 2, 1)]
means that object named &apos;Text1&apos; is a text frame (type 4) and is the first at
the page...
</source>
        <translation>getPageItems() -&gt; llista

Retorna una llista de tuples amb els ítems de la pàgina actual. La tupla és:
(nom, Tipusd&apos;Objecte, ordre) Ex. [ (&apos;Text1&apos;, 4, 0), (&apos;Image1&apos;, 2, 1)]
significa que l&apos;objecte &apos;Text1&apos; és un marc de text (tipus 4) i és el primer de
la pàgina ...
</translation>
    </message>
    <message>
        <source>setFillColor(&quot;color&quot;, [&quot;name&quot;])

Sets the fill color of the object &quot;name&quot; to the color &quot;color&quot;. &quot;color&quot;
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation>setFillColor(&quot;color&quot;, [&quot;nom&quot;])

Estableix el color d&apos;ompliment de l&apos;objecte &quot;nom&quot; al color &quot;color&quot;. 
&quot;color&quot; és el nom d&apos;un dels colors definits. Si no especifiquem &quot;nom&quot; 
es fa servir l&apos;ítem seleccionat.
</translation>
    </message>
    <message>
        <source>setLineColor(&quot;color&quot;, [&quot;name&quot;])

Sets the line color of the object &quot;name&quot; to the color &quot;color&quot;. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation>setLineColor(&quot;color&quot;, [&quot;nom&quot;])

Estableix el color de la línia de l&apos;objecte &quot;nom&quot; al color &quot;color&quot;. Si no 
especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat.
</translation>
    </message>
    <message>
        <source>setLineWidth(width, [&quot;name&quot;])

Sets line width of the object &quot;name&quot; to &quot;width&quot;. &quot;width&quot; must be in the
range from 0.0 to 12.0 inclusive, and is measured in points. If &quot;name&quot; is not
given the currently selected item is used.

May raise ValueError if the line width is out of bounds.
</source>
        <translation>setLineWidth(amplada, [&quot;nom&quot;])

Estableix l&apos;amplada de línia de l&apos;objecte &quot;nom&quot; a &quot;amplada&quot;. &quot;amplada&quot; ha d&apos;estar
dins d&apos;un rang  entre 0.0 a 12.0, i està mesurat en punts. Si no especifiquem &quot;nom&quot; 
es fa servir l&apos;ítem seleccionat.

Pot generar un ValueError si l&apos;ample de línia és erròni.
</translation>
    </message>
    <message>
        <source>setLineShade(shade, [&quot;name&quot;])

Sets the shading of the line color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full color intensity). If &quot;name&quot; is not given the currently selected item
is used.

May raise ValueError if the line shade is out of bounds.
</source>
        <translation>setLineShade(intensitat, [&quot;nom&quot;])

Estableix la intensitat del color de la línea de contorn de l&apos;objecte &quot;nom&quot;
a &quot;intensitat&quot;.&quot;intensitat&quot; ha de ser un valor enter entre 0 (més clar) i 100 
(intensitat total). Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem 
seleccionat.

Pot generar un ValueError si &quot;intensitat&quot; està fora de marges.
</translation>
    </message>
    <message>
        <source>setLineJoin(join, [&quot;name&quot;])

Sets the line join style of the object &quot;name&quot; to the style &quot;join&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for join - JOIN_&lt;type&gt;.
</source>
        <translation>setLineJoin(Unio, [&quot;nom&quot;])

Estableix l&apos;estil d&apos;unió de l&apos;objecte &quot;nom&quot; a l&apos;estil &quot;join&quot;.
Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat. Hi ha
constants predefinides d&apos;unions - JOIN_&lt;tipus&gt;.
</translation>
    </message>
    <message>
        <source>setLineEnd(endtype, [&quot;name&quot;])

Sets the line cap style of the object &quot;name&quot; to the style &quot;cap&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for &quot;cap&quot; - CAP_&lt;type&gt;.
</source>
        <translation>setLsetLineEnd(Final, [&quot;nom&quot;])

Estableix l&apos;estil de tancament de l&apos;objecte &quot;nom&quot; a l&apos;estil &quot;final&quot;.
Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat. Hi ha
constants predefinides de tancaments - CAP_&lt;tipus&gt;.
</translation>
    </message>
    <message>
        <source>setLineStyle(style, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the style &quot;style&quot;. If &quot;name&quot;
is not given the currently selected item is used. There are predefined
constants for &quot;style&quot; - LINE_&lt;style&gt;.
</source>
        <translation>setLsetLineStyle(estil, [&quot;nom&quot;])

Estableix l&apos;estil de línia de l&apos;objecte &quot;nom&quot; a l&apos;estil &quot;estil&quot;.
Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat. Hi ha
constants predefinides d&apos;estils de línia - LINE_&lt;tipus&gt;.
</translation>
    </message>
    <message>
        <source>setFillShade(shade, [&quot;name&quot;])

Sets the shading of the fill color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full Color intensity). If &quot;name&quot; is not given the currently selected
Item is used.

May raise ValueError if the fill shade is out of bounds.
</source>
        <translation>setLineShade(intensitat, [&quot;nom&quot;])

Estableix la intensitat del color d&apos;ompliment de l&apos;objecte &quot;nom&quot; a &quot;intensitat&quot;
&quot;intensitat&quot; ha de ser un valor enter entre 0 (més clar) i 100 
(intensitat total). Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem 
seleccionat.

Pot generar un ValueError si la intensitat està fora de marges.
</translation>
    </message>
    <message>
        <source>setCornerRadius(radius, [&quot;name&quot;])

Sets the corner radius of the object &quot;name&quot;. The radius is expressed
in points. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if the corner radius is negative.
</source>
        <translation>setCornerRadius(radi, [&quot;nom&quot;])

Estableix el radi d&apos;arrodoniment de l&apos;objecte &quot;nom&quot;. El radi està expressat
en punts. Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat.

Pot generar un ValueError si el radi és negatiu.
</translation>
    </message>
    <message>
        <source>setMultiLine(&quot;namedStyle&quot;, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the named style &quot;namedStyle&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the line style doesn&apos;t exist.
</source>
        <translation>setMultiLine(&quot;nomEstil&quot;, [&quot;nom&quot;])

Estableix l&apos;estil de línia de l&apos;objecte &quot;nom&quot; a &quot;nomEstil&quot;.
Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat.

Pot generar un NotFoundError si l&apos;estil de línia no existeix.
</translation>
    </message>
    <message>
        <source>progressReset()

Cleans up the Scribus progress bar previous settings. It is called before the
new progress bar use. See progressSet.
</source>
        <translation>progressReset()

Buida la barra de progrés de l&apos;Scribus. Es fa servir abans de fer servir
una nova barra de progrés. Mireu ProgressSet.
</translation>
    </message>
    <message>
        <source>progressTotal(max)

Sets the progress bar&apos;s maximum steps value to the specified number.
See progressSet.
</source>
        <translation>progressTotal(max)

Estableix el màxim número de salts d&apos;una barra de progrés al número.
Mireu progressSet.
</translation>
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
        <translation>progressSet(nr)

Estableix la posició de la barra de progrés a &quot;nr&quot;, un valor relatiu al de 
progressTotal. La barra de progrés fa servir el concepte de passes; pits donar 
el número total de passes i el número total de passes fetes i es mostrarà
el percentatge de passes que s&apos;han completat. Pots especificar el número total 
de passes amb progressTotal(). El número actual de passes es passa amb 
progressSet(). La barra de progrés pot tornar-se al principi amb progressReset(). 
[basat en la informació passada la documentació de QT de TrollTech]
</translation>
    </message>
    <message>
        <source>setCursor()

[UNSUPPORTED!] This might break things, so steer clear for now.
</source>
        <translation>setCursor()

[NO SUPORTAT!] Això farà anar malament, per tant no l&apos;utilitzeu per ara.
</translation>
    </message>
    <message>
        <source>docChanged(bool)

Enable/disable save icon in the Scribus icon bar and the Save menu item. It&apos;s
useful to call this procedure when you&apos;re changing the document, because Scribus
won&apos;t automatically notice when you change the document using a script.
</source>
        <translation>docChanged(bool)

Activa/desactiva la icona de desar en la barra d&apos;icones i el menu de l&apos;Scribus. És 
útil cridar aquest procediment quan estas canviant el document amb una
seqüència, perquè Scribus no se n&apos;adonarà automàticament dels canvis.
</translation>
    </message>
    <message>
        <source>defineColor(&quot;name&quot;, c, m, y, k)

Defines a new color &quot;name&quot;. The color Value is defined via four components:
c = Cyan, m = Magenta, y = Yellow and k = Black. Color components should be in
the range from 0 to 255.

May raise ValueError if an invalid color name is specified.
</source>
        <translation>defineColor(&quot;nom&quot;, c, m, y, k)

Defineix un nou color &quot;nom&quot;. El valor del color està definit amb els quatre components:
c=cian, m=Magenta, y=Groc i k=Negre. Els components de color han d&apos;estar dins
del rang que va des de 0 a 255.

Pot provocar un ValueError si s&apos;especifica un color invàlid.
</translation>
    </message>
    <message>
        <source>getCornerRadius([&quot;name&quot;]) -&gt; integer

Returns the corner radius of the object &quot;name&quot;. The radius is
expressed in points. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>getCornerRadius([&quot;nom&quot;]) -&gt; integer

Retorna el radi d&apos;arrodoniment de l&apos;objecte &quot;nom&quot;. El radi està
expressat en punts. Si no especifiquem &quot;nom&quot; es fa servir 
l&apos;ítem seleccionat.
</translation>
    </message>
    <message>
        <source>getPosition([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple with the position of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
The position is expressed in the actual measurement unit of the document
- see UNIT_&lt;type&gt; for reference.
</source>
        <translation>getPosition([&quot;nom&quot;]) -&gt; (x,y)

Retorna una parella (x,y) amb la posició de l&apos;objecte &quot;nom&quot;.
Si no especifiquem &quot;nom&quot; es fa servir l&apos;ítem seleccionat.
La posició està expressada en les unitats de mesura del document
- mireu UNIT_&lt;tipus&gt; per referència.
</translation>
    </message>
    <message>
        <source>rotateObjectAbs(rot [, &quot;name&quot;])

Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positive values
mean counter clockwise rotation. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>rotateObjectAbs(rot [,&quot;nom&quot;])

Estableix la rotació de l&apos;objecte &quot;nom&quot; a &quot;rot&quot;. Els valors positius
signifiquen rotació horaria. Si no especifiquem &quot;nom&quot; es fa servir 
l&apos;ítem seleccionat.
</translation>
    </message>
    <message>
        <source>setScaleImageToFrame(scaletoframe, proportional=None, name=&lt;selection&gt;)

Sets the scale to frame on the selected or specified image frame to `scaletoframe&apos;.
If `proportional&apos; is specified, set fixed aspect ratio scaling to `proportional&apos;.
Both `scaletoframe&apos; and `proportional&apos; are boolean.

May raise WrongFrameTypeError.
</source>
        <translation>setScaleImageToFrame(escalaamarc, proporcional=None, nom=&lt;selection&gt;)

Estableix la escala del marc especificat o seleccionat a &apos;escalaamarc&apos;.
Si hi posem valor a &apos;proporcional&apos;, estableix l&apos;aspecte de representació a &apos;proporcional&apos;.
Ambdós &apos;escalaamarc&apos; i &apos;proporcional&apos; són booleans.

Pot provocar WrongFrameTypeError.
</translation>
    </message>
    <message>
        <source>selectText(start, count, [&quot;name&quot;])

Selects &quot;count&quot; characters of text in the text frame &quot;name&quot; starting from the
character &quot;start&quot;. Character counting starts at 0. If &quot;count&quot; is zero, any
text selection will be cleared. If &quot;count&quot; is -1, all text in the frame will
be selected. If &quot;name&quot; is not given the currently selected item is used.

May throw IndexError if the selection is outside the bounds of the text.
</source>
        <translation>selectText(inici, compte, [&quot;nom&quot;])

Assigna &quot;compte&quot; caràcters de text en el marc de text &quot;nom&quot; començant pel 
caràcter &quot;inici&quot;. El compte de caràcters comença per 0. Si &quot;compte&quot; és zero, la 
selecció es netejarà. Si &quot;count&quot; és -1, tot el text del marc serà seleccionat.
Si &quot;nom&quot; no és dóna es fa servir l&apos;Ítem seleccionat.

Pot generar IndexError si la selecció està fora dels marges del text.
</translation>
    </message>
    <message>
        <source>register_macro_code(name, sourcetext, accel=&apos;&apos;)

Create a macro named &quot;name&quot; by evaluating the the source code &quot;sourcetext&quot;.
&quot;sourcetext&quot; must follow the same rules as macros created in the GUI.
If provided, the string &quot;accel&quot; will be used to set a keyboard shortcut
for the macro.
</source>
        <translation>register_macro_code(nom, textorigen, accel=&apos;&apos;)

Crea una macro anomenada &quot;nom&quot; evaluant el codi font &quot;textorigen&quot;.
&quot;textorigen&quot; ha de seguir les mateixes regles que les macros creades en l&apos;entorn.
Si es posa, la cadena &quot;accel&quot; serà feta servir per crear una drecera de teclat
per la macro.
</translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is printable or not, a value of True means
that the layer &quot;layer&quot; can be printed, a value of False means that printing
the layer &quot;layer&quot; is disabled.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>isLayerPrintable(&quot;capa&quot;) -&gt;bool

Retorna si la capa &quot;capa&quot; és visible o no, un valor de cert significa
que la capa &quot;capa&quot; està activada, un valor de fals significa que la capa
&quot;capa&quot; està desactivada.

Pot generar NotFoundError si la capa no es pot trobar.
Pot generar ValueError si el nom de la capa no és acceptable.
</translation>
    </message>
    <message>
        <source>getColorAsRGB(&quot;name&quot;) -&gt; tuple

Returns a tuple (R,G,B) containing the three color components of the
color &quot;name&quot; from the current document, converted to the RGB colour
space. If no document is open, returns the value of the named color
from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation>getColorAsRGB(&quot;nom&quot;) -&gt; tupla

Retorna una tupla (R,G,B) que conté els tres components de color del
color &quot;nom&quot; que està en el document actual, convertit en un color RGB.
Si no hi ha cap document obert, retorna el valor del nom del color que
hi hagi en els colors per defecte.

Pot generar NotFoundError si la capa no es pot trobar.
Pot generar ValueError si el nom de la capa no és acceptable.</translation>
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
        <translation>renderFont(&quot;nom&quot;, &quot;fitxer&quot;, &quot;mostra&quot;, size, format=&quot;PPM&quot;) -&gt; bool

Crea una previsualització de la font &quot;nom&quot; amb el text &quot;mostra&quot; a la mida especificada.
Si el nom no és &quot;&quot;,  la imatge es guarda a &quot;nom&quot;. I si no ho és es retornen les 
dades de la imatge com una cadena. L&apos;argument opcional &quot;format&quot;
especifica el format de la imatge a generar, i suporta tots els formats permesos
per QPixmap.save(). Els formats més comuns són PPM, JPEG, PNG and XPM.

Pot generar NotFoundError si la capa no es pot trobar.
Pot generar ValueError si el nom de la capa no és acceptable.
</translation>
    </message>
    <message>
        <source>isLayerVisible(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>isLayerVisible(&quot;capa&quot;) -&gt;bool

Retorna si la capa &quot;capa&quot; és visible o no, un valor de cert significa
que la capa &quot;capa&quot; és visible, un valor de fals significa que la capa
&quot;capa&quot; és invisible.

Pot generar NotFoundError si la capa no es pot trobar.
Pot generar ValueError si el nom de la capa no és acceptable.
</translation>
    </message>
    <message>
        <source>setPDFBookmark(&quot;toggle&quot;, [&quot;name&quot;])

Sets wether (toggle = 1) the text frame &quot;name&quot; is a bookmark nor not.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
        <translation>setPDFBookmark(&quot;toggle&quot;, [&quot;nom&quot;])

Posa quan (toggle = 1) si el marc de text &quot;nom&quot; és una drecera o no.
Si no s&apos;especifica &quot;nom&quot; es fa servir l&apos;ítem actual.

Pot generar WrongFrameTypeError si el marc de destí no és un Marc de text</translation>
    </message>
    <message>
        <source>isPDFBookmark([&quot;name&quot;]) -&gt; bool

Returns true if the text frame &quot;name&quot; is a PDF bookmark.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
        <translation>isPDFBookmark([&quot;nom&quot;]) -&gt; bool

Retorna cert si el marc de text &quot;nom&quot; és una drecera PDF.
Si no s&apos;especifica &quot;nom&quot; es fa servir l&apos;item actual.

Pot generar WrongFrameTypeError si el marc de destí no és un marc de text</translation>
    </message>
    <message>
        <source>getPageMargins()

Returns the page margins as a (top, left, right, bottom) tuple in the current
units. See UNIT_&lt;type&gt; constants and getPageSize().
</source>
        <translation>getPageMargins() -&gt; tupla

Retorna els marges de pàgina com una tupla (dalt, esquerra, dreta, baix) amb les mides 
mesurades amb les unitats del document. Mireu les constants UNIT_&lt;tipus&gt;  i getPageSize().
</translation>
    </message>
    <message>
        <source>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame &quot;name&quot;.
Text must be UTF encoded (see setText() as reference). The first character has
an index of 0. Inserting at position -1 appends text to the frame. If &quot;name&quot;
is not given the currently selected Item is used.

May throw IndexError for an insertion out of bounds.
</source>
        <translation>Agafa el nom de document per l&apos;estil de paràgraf en Scribus.</translation>
    </message>
    <message>
        <source>newDoc(size, margins, orientation, firstPageNumber,
                   unit, facingPages, firstSideLeft) -&gt; bool

Creates a new document and returns true if successful. The parameters have the
following meaning:

    size = A tuple (width, height) describing the size of the document. You can
    use predefined constants named PAPER_&lt;paper_type&gt; e.g. PAPER_A4 etc.

    margins = A tuple (left, right, top, bottom) describing the document
    margins

    orientation = the page orientation - constants PORTRAIT, LANDSCAPE

    firstPageNumber = is the number of the first page in the document used for
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
        <translation>newDoc(mida, marges, orientació, primerNúmeroPàgina,
                   unitats, PaginesAcarades, primeraPaginaEsquerra) -&gt; bool

Crea un nou document i retorna cert si tot ha anat bé. Els paràmetres tenen el 
següent significat:

    mida = Una parella (amplada, alçada) que descriu la mida del document. Pots
    fer servir constants predefinides com PAPER_&lt;tipus de paper&gt; ex. PAPER_A4 etc.

    marges = Una agrupació (esquerra, dreta, dalt, baix) que descriu els marges
    del document.

    orientació = la orientació de la pàgina - constants PORTRAIT, LANDSCAPE

    PrimerNúmeroPàgina = és el número de la primera pàgina en el document que farem
    servir per numerar les pàgines. Encara que normalment es farà servir 1, a vegades
    es útil poder posar números més grans si es creen documents en parts.

    unitats : aquest valor estableix les unitats que el document farà servir. Cal usar una 
    constant predefinida, pot ser una de: UNIT_INCHES, UNIT_MILLIMETERS, 
    UNIT_PICAS, UNIT_POINTS.

    PàginesAcarades = FACINPAGES, NOFACINPAGES

    PrimeraPàginaEsquerra = FIRSTPAGELEFT, FIRSTPAGERIGHT

Els valors per l&apos;amplada, l&apos;alçada i els marges està expressada en les unitats donades
pel document. Les constants PAPER_* estan expressades en punts. Si el nostre document
no està en punts, cal tenir-ho en compte.

exemple: newDoc(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 1, UNIT_POINTS,
                 FACINGPAGES, FIRSTPAGERIGHT)
</translation>
    </message>
    <message>
        <source>textOverflows([&quot;name&quot;, nolinks]) -&gt; integer

Returns the actual number of overflowing characters in text frame &quot;name&quot;.
If is nolinks set to non zero value it takes only one frame - it doesn&apos;t
use text frame linking. Without this parameter it search all linking chain.

May raise WrongFrameTypeError if the target frame is not an text frame
</source>
        <translation>textOverflows([&quot;nom&quot;, nolinks]) -&gt; integer

Retorna el número actual de caràcters que sobreeixen del marc de text &quot;nom&quot;.
Si &apos;nolinks&apos; val zero només mira un marc - no segueix els enllaços de
text. Sense aquest paràmetre busca per tots els marcs que estiguin enllaçats.

Pot generar un WrongFrameTypeError si el marc de destí no és un marc de text</translation>
    </message>
    <message>
        <source>zoomDocument(double)

Zoom the document in main GUI window. Actions have whole number
values like 20.0, 100.0, etc. Zoom to Fit uses -100 as a marker.
</source>
        <translation>zoomDocument(double)

Amplia la visió del document en la finestra principal. Les accions tenen un
número amb valors 20.0, 100.0 etc. Per ajustar a la pàgina posem -100.
</translation>
    </message>
</context>
<context>
    <name>About</name>
    <message>
        <source>Scribus Version %1
%2 %3</source>
        <translation>Scribus Versió %1
%2 %3</translation>
    </message>
    <message>
        <source>Build-ID:</source>
        <translation>ID-Creació:</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>&amp;Quant a</translation>
    </message>
    <message>
        <source>Development Team:</source>
        <translation>Equip de Desenvolupament:</translation>
    </message>
    <message>
        <source>Contributions from:</source>
        <translation>Contribucions des de:</translation>
    </message>
    <message>
        <source>Windows port:</source>
        <translation>Versió Windows:</translation>
    </message>
    <message>
        <source>Official Documentation:</source>
        <translation>Documentació Oficial:</translation>
    </message>
    <message>
        <source>Other Documentation:</source>
        <translation>Altra Documentació:</translation>
    </message>
    <message>
        <source>A&amp;uthors</source>
        <translation>A&amp;utors</translation>
    </message>
    <message>
        <source>Basque:</source>
        <translation>Basc:</translation>
    </message>
    <message>
        <source>Brazilian:</source>
        <translation>Brasil.ler:</translation>
    </message>
    <message>
        <source>Bulgarian:</source>
        <translation>Búlgar:</translation>
    </message>
    <message>
        <source>Czech:</source>
        <translation>Txec:</translation>
    </message>
    <message>
        <source>Danish:</source>
        <translation>Danès:</translation>
    </message>
    <message>
        <source>English (British):</source>
        <translation>Anglès (Britànic):</translation>
    </message>
    <message>
        <source>Finnish:</source>
        <translation>Finès:</translation>
    </message>
    <message>
        <source>French:</source>
        <translation>Francès:</translation>
    </message>
    <message>
        <source>Galician:</source>
        <translation>Gallec:</translation>
    </message>
    <message>
        <source>German:</source>
        <translation>Alemany:</translation>
    </message>
    <message>
        <source>Hungarian:</source>
        <translation>Hongarès:</translation>
    </message>
    <message>
        <source>Italian:</source>
        <translation>Italià:</translation>
    </message>
    <message>
        <source>Lithuanian:</source>
        <translation>Lituà:</translation>
    </message>
    <message>
        <source>Norwegian:</source>
        <translation>Noruec:</translation>
    </message>
    <message>
        <source>Polish:</source>
        <translation>Polonès:</translation>
    </message>
    <message>
        <source>Russian:</source>
        <translation>Rus:</translation>
    </message>
    <message>
        <source>Slovak:</source>
        <translation>Eslovac:</translation>
    </message>
    <message>
        <source>Slovenian:</source>
        <translation>Eslovè:</translation>
    </message>
    <message>
        <source>Swedish:</source>
        <translation>Suec:</translation>
    </message>
    <message>
        <source>Turkish:</source>
        <translation>Turc:</translation>
    </message>
    <message>
        <source>Ukrainian:</source>
        <translation>Ucranià:</translation>
    </message>
    <message>
        <source>Welsh:</source>
        <translation>Galès:</translation>
    </message>
    <message>
        <source>&amp;Translations</source>
        <translation>&amp;Traduccions</translation>
    </message>
    <message>
        <source>Homepage</source>
        <translation>Pàgina inicial</translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation>Referència en línia</translation>
    </message>
    <message>
        <source>Bugs and Feature Requests</source>
        <translation>Errors i Sol.licitud de Característiques</translation>
    </message>
    <message>
        <source>Mailing List</source>
        <translation>Llista de correu</translation>
    </message>
    <message>
        <source>&amp;Online</source>
        <translation>&amp;En Linia</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Tanca</translation>
    </message>
    <message>
        <source>Official Translations and Translators:</source>
        <translation>Traduccions oficials i Traductors:</translation>
    </message>
    <message>
        <source>Esperanto:</source>
        <translation>Esperanto:</translation>
    </message>
    <message>
        <source>Korean:</source>
        <translation>Coreà:</translation>
    </message>
    <message>
        <source>Serbian:</source>
        <translation>Serbi:</translation>
    </message>
    <message>
        <source>Spanish:</source>
        <translation>Espanyol:</translation>
    </message>
    <message>
        <source>Previous Translation Contributors:</source>
        <translation>Antics Col.laboradors en Traduccions:</translation>
    </message>
    <message>
        <source>Catalan:</source>
        <translation>Català:</translation>
    </message>
    <message>
        <source>About Scribus %1</source>
        <translation>Sobre Scribus %1</translation>
    </message>
    <message>
        <source>This panel shows the version, build date and
 compiled in library support in Scribus
The C-C-T equates to C=littlecms C=CUPS T=TIFF support.
Missing library support is indicated by a *</source>
        <translation>Aquest panell mostra la versió, data de generació i 
el suport de llibreries compilades a Scribus
El C-C-T significa C=littlecms C=CUPS T=suport TIFF.
Les llibreries que manquen es mostren amb un *</translation>
    </message>
    <message>
        <source>%1 %2 %3 </source>
        <translation>%1 %2 %3 </translation>
    </message>
    <message>
        <source>Afrikaans:</source>
        <translation>Africaner:</translation>
    </message>
    <message>
        <source>Portuguese (Brazilian):</source>
        <translation>Portuguès (Brasil.ler):</translation>
    </message>
    <message>
        <source>Japanese:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AdvOptions</name>
    <message>
        <source>Advanced Options</source>
        <translation>Opcions Avançades</translation>
    </message>
    <message>
        <source>Mirror Page(s) &amp;Horizontal</source>
        <translation>Enmiralla la Pàgina(es) &amp;Horitzontalment</translation>
    </message>
    <message>
        <source>Mirror Page(s) &amp;Vertical</source>
        <translation>Enmiralla la Pàgina(es) &amp;Verticalment</translation>
    </message>
    <message>
        <source>Apply Under Color &amp;Removal</source>
        <translation>Aplica sobre Elimina&amp;r Color</translation>
    </message>
    <message>
        <source>Apply &amp;ICC Profiles</source>
        <translation>Aplica perfils &amp;ICC</translation>
    </message>
    <message>
        <source>PostScript Level &amp;1</source>
        <translation>PostScript Nivell &amp;1</translation>
    </message>
    <message>
        <source>PostScript Level &amp;2</source>
        <translation>PostScript Nivell &amp;2</translation>
    </message>
    <message>
        <source>PostScript Level &amp;3</source>
        <translation>PostScript Nivell &amp;3</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>Creates PostScript Level 3</source>
        <translation>Crea PostScript Nivell 3</translation>
    </message>
    <message>
        <source>Creates PostScript Level 2 only, beware,
this can create huge files</source>
        <translation>Crea només PostScript Nivell 2, compte,
això pot crear fitxers molt grans</translation>
    </message>
    <message>
        <source>Creates PostScript Level 1 only, beware,
this can create huge files</source>
        <translation>Crea només PostScript Nivell 1, compte,
això pot crear fitxers molt grans</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>Una forma d&apos;apagar algunes de les ombres grises que estan composades
per cian, groc i magenta però fan servir negre
UCR pot afectar parts de imatges que són de color neutral o tons foscos
propers a gris. Fes servir això pot millorar la impressió d&apos;algunes imatges 
però cal algunes proves i experimentació per cada cas
UCR redueix la possibilitat de sobre saturar amb tintes CMY.</translation>
    </message>
    <message>
        <source>Set Media Size</source>
        <translation>Posa Mida Paper</translation>
    </message>
    <message>
        <source>This enables you to explicitely set,
the media size of the PostScript file.
Not recommended unless
 requested by your printer.</source>
        <translation>Això et permet establir explicitament,
la mida del fitxers PostScript.
No es recomana a menys que
t&apos;ho demani el teu impressor.</translation>
    </message>
</context>
<context>
    <name>Align</name>
    <message>
        <source>Distribute/Align</source>
        <translation>Distribueix/Alinea</translation>
    </message>
    <message>
        <source>Align</source>
        <translation>Alinea</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation>Horitzontal</translation>
    </message>
    <message>
        <source>Left Sides</source>
        <translation>Costats Esquerres</translation>
    </message>
    <message>
        <source>Middles</source>
        <translation>Punts Mitjos</translation>
    </message>
    <message>
        <source>Right Sides</source>
        <translation>Costats Drets</translation>
    </message>
    <message>
        <source>&amp;Between:</source>
        <translation>&amp;Entre:</translation>
    </message>
    <message>
        <source>&amp;Do Not Change</source>
        <translation>&amp;No Canviar</translation>
    </message>
    <message>
        <source>A&amp;lign</source>
        <translation>A&amp;linea</translation>
    </message>
    <message>
        <source>Di&amp;splacement</source>
        <translation>De&amp;splaçament</translation>
    </message>
    <message>
        <source>Distribute &amp;Evenly</source>
        <translation>Distribueix R&amp;egularment</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation>Vertical</translation>
    </message>
    <message>
        <source>Top Sides</source>
        <translation>Costats Superiors</translation>
    </message>
    <message>
        <source>Bottom Sides</source>
        <translation>Costats Inferiors</translation>
    </message>
    <message>
        <source>Bet&amp;ween:</source>
        <translation>&amp;Entre:</translation>
    </message>
    <message>
        <source>Do &amp;Not Change</source>
        <translation>&amp;No Canviar</translation>
    </message>
    <message>
        <source>Al&amp;ign</source>
        <translation>Al&amp;inea</translation>
    </message>
    <message>
        <source>Dis&amp;placement</source>
        <translation>Des&amp;plaçament</translation>
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
        <translation>po</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>Distribute E&amp;venly</source>
        <translation>Distribueix Re&amp;gularment</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Aplicar</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
</context>
<context>
    <name>AlignSelect</name>
    <message>
        <source>Align Text Left</source>
        <translation>Alinea Text Esquerra</translation>
    </message>
    <message>
        <source>Align Text Right</source>
        <translation>Alinea Text Dreta</translation>
    </message>
    <message>
        <source>Align Text Center</source>
        <translation>Centra Text</translation>
    </message>
    <message>
        <source>Align Text Justified</source>
        <translation>Justifica Text</translation>
    </message>
    <message>
        <source>Align Text Forced Justified</source>
        <translation>Justificació forçada de Text</translation>
    </message>
</context>
<context>
    <name>Annot</name>
    <message>
        <source>Field Properties</source>
        <translation>Propietats del Camp</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Tipus:</translation>
    </message>
    <message>
        <source>Button</source>
        <translation>Botó</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation>Camp de Text</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation>Quadre de Verificació</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation>Quadre Combinat</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation>Quadre de Llista</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation>Propietats</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Nom:</translation>
    </message>
    <message>
        <source>Tool-Tip:</source>
        <translation>Rètol indicador:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Text</translation>
    </message>
    <message>
        <source>Font for use with PDF 1.3:</source>
        <translation>Font a usar amb PDF 1.3:</translation>
    </message>
    <message>
        <source>Border</source>
        <translation>Contorn</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Color:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Cap</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation>Amplada:</translation>
    </message>
    <message>
        <source>Thin</source>
        <translation>Prim</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Wide</source>
        <translation>Ample</translation>
    </message>
    <message>
        <source>Style:</source>
        <translation>Estil:</translation>
    </message>
    <message>
        <source>Solid</source>
        <translation>Sòlid</translation>
    </message>
    <message>
        <source>Dashed</source>
        <translation>Traçat</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation>Subratllat</translation>
    </message>
    <message>
        <source>Beveled</source>
        <translation>Oblicu</translation>
    </message>
    <message>
        <source>Inset</source>
        <translation>Intercalat</translation>
    </message>
    <message>
        <source>Other</source>
        <translation>Altre</translation>
    </message>
    <message>
        <source>Read Only</source>
        <translation>Només de lectura</translation>
    </message>
    <message>
        <source>Required</source>
        <translation>Requerit</translation>
    </message>
    <message>
        <source>Don&apos;t Export Value</source>
        <translation>No Expotar Valors</translation>
    </message>
    <message>
        <source>Visibility:</source>
        <translation>Visibilitat:</translation>
    </message>
    <message>
        <source>Visible</source>
        <translation>Visible</translation>
    </message>
    <message>
        <source>Hidden</source>
        <translation>Amagat</translation>
    </message>
    <message>
        <source>No Print</source>
        <translation>No Imprimir</translation>
    </message>
    <message>
        <source>No View</source>
        <translation>No Veure</translation>
    </message>
    <message>
        <source>Appearance</source>
        <translation>Aspecte</translation>
    </message>
    <message>
        <source>Text for Button Down</source>
        <translation>Text al prémer el botó</translation>
    </message>
    <message>
        <source>Text for Roll Over</source>
        <translation>Text al Passar per Damunt</translation>
    </message>
    <message>
        <source>Icons</source>
        <translation>Icones</translation>
    </message>
    <message>
        <source>Use Icons</source>
        <translation>Usar Icones</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <source>Pressed</source>
        <translation>Premut</translation>
    </message>
    <message>
        <source>Roll Over</source>
        <translation>Passar per Sobre</translation>
    </message>
    <message>
        <source>Icon Placement...</source>
        <translation>Col.locar Icones...</translation>
    </message>
    <message>
        <source>Highlight</source>
        <translation>Ressaltar</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation>Inverteix</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation>Contornat</translation>
    </message>
    <message>
        <source>Push</source>
        <translation>Premut</translation>
    </message>
    <message>
        <source>Multi-Line</source>
        <translation>Multilínia</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>Contrassenya</translation>
    </message>
    <message>
        <source>Limit of</source>
        <translation>Límit de</translation>
    </message>
    <message>
        <source>Characters</source>
        <translation>Caràcters</translation>
    </message>
    <message>
        <source>Do Not Scroll</source>
        <translation>No Desplaçar</translation>
    </message>
    <message>
        <source>Do Not Spell Check</source>
        <translation>No Revisar</translation>
    </message>
    <message>
        <source>Check Style:</source>
        <translation>Comprova Estil:</translation>
    </message>
    <message>
        <source>Check</source>
        <translation>Comprova</translation>
    </message>
    <message>
        <source>Cross</source>
        <translation>Creu</translation>
    </message>
    <message>
        <source>Diamond</source>
        <translation>Diamant</translation>
    </message>
    <message>
        <source>Circle</source>
        <translation>Cercle</translation>
    </message>
    <message>
        <source>Star</source>
        <translation>Estrella</translation>
    </message>
    <message>
        <source>Square</source>
        <translation>Requadre</translation>
    </message>
    <message>
        <source>Default is Checked</source>
        <translation>Marcat per defecte</translation>
    </message>
    <message>
        <source>Editable</source>
        <translation>Editable</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opcions</translation>
    </message>
    <message>
        <source>Go To</source>
        <translation>Anar A</translation>
    </message>
    <message>
        <source>Submit Form</source>
        <translation>Enviar Formulari</translation>
    </message>
    <message>
        <source>Reset Form</source>
        <translation>Reiniciar Formulari</translation>
    </message>
    <message>
        <source>Import Data</source>
        <translation>Importar Dades</translation>
    </message>
    <message>
        <source>Event:</source>
        <translation>Incidència:</translation>
    </message>
    <message>
        <source>Mouse Up</source>
        <translation>Ratolí Amunt</translation>
    </message>
    <message>
        <source>Mouse Down</source>
        <translation>Ratolí Avall</translation>
    </message>
    <message>
        <source>Mouse Enter</source>
        <translation>Entrar amb el Ratolí</translation>
    </message>
    <message>
        <source>Mouse Exit</source>
        <translation>Sortir amb el Ratolí</translation>
    </message>
    <message>
        <source>On Focus</source>
        <translation>En Prendre el Focus</translation>
    </message>
    <message>
        <source>On Blur</source>
        <translation>En Difuminar</translation>
    </message>
    <message>
        <source>Script:</source>
        <translation>Seqüència: </translation>
    </message>
    <message>
        <source>Edit...</source>
        <translation>Edició...</translation>
    </message>
    <message>
        <source>Submit to URL:</source>
        <translation>Enviar a URL:</translation>
    </message>
    <message>
        <source>Submit Data as HTML</source>
        <translation>Enviar Dades com HTML</translation>
    </message>
    <message>
        <source>Import Data from:</source>
        <translation>Importar dades des de:</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>Destí</translation>
    </message>
    <message>
        <source>To File:</source>
        <translation>Al Fitxer:</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation>Canvi...</translation>
    </message>
    <message>
        <source>Page:</source>
        <translation>Pàgina:</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation>Posició X:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation>Posició Y:</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Acció</translation>
    </message>
    <message>
        <source>Field is formatted as:</source>
        <translation>El camp està formatat com:</translation>
    </message>
    <message>
        <source>Plain</source>
        <translation>Senzill</translation>
    </message>
    <message>
        <source>Number</source>
        <translation>Número</translation>
    </message>
    <message>
        <source>Percentage</source>
        <translation>Percentatge</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Data</translation>
    </message>
    <message>
        <source>Time</source>
        <translation>Hora</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalitzat</translation>
    </message>
    <message>
        <source>Number Format</source>
        <translation>Format numèric</translation>
    </message>
    <message>
        <source>Decimals:</source>
        <translation>Decimals:</translation>
    </message>
    <message>
        <source>Use Currency Symbol</source>
        <translation>Símbol de Moneda</translation>
    </message>
    <message>
        <source>Prepend Currency Symbol</source>
        <translation>Agafa Símbol de Moneda</translation>
    </message>
    <message>
        <source>Formatting</source>
        <translation>Donant format</translation>
    </message>
    <message>
        <source>Percent Format</source>
        <translation>Percentatge Formatat</translation>
    </message>
    <message>
        <source>Date Format</source>
        <translation>Format de Data</translation>
    </message>
    <message>
        <source>Time Format</source>
        <translation>Format d&apos;hora</translation>
    </message>
    <message>
        <source>Custom Scripts</source>
        <translation>Seqüències personalitzades</translation>
    </message>
    <message>
        <source>Format:</source>
        <translation>Format:</translation>
    </message>
    <message>
        <source>Keystroke:</source>
        <translation>Pulsació de tecla:</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>Format</translation>
    </message>
    <message>
        <source>Value is not validated</source>
        <translation>El valor no està validat</translation>
    </message>
    <message>
        <source>Value must be greater than or equal to:</source>
        <translation>El Valor ha de ser més gran o igual que:</translation>
    </message>
    <message>
        <source>and less or equal to:</source>
        <translation>i més petit o igual que:</translation>
    </message>
    <message>
        <source>Custom validate script:</source>
        <translation>Seqüències personalitzades de validació:</translation>
    </message>
    <message>
        <source>Validate</source>
        <translation>Validar</translation>
    </message>
    <message>
        <source>Value is not calculated</source>
        <translation>El valor no és calculat</translation>
    </message>
    <message>
        <source>Value is the</source>
        <translation>El Valor és el</translation>
    </message>
    <message>
        <source>sum</source>
        <translation>suma</translation>
    </message>
    <message>
        <source>product</source>
        <translation>producte</translation>
    </message>
    <message>
        <source>average</source>
        <translation>mitjana</translation>
    </message>
    <message>
        <source>minimum</source>
        <translation>mínim</translation>
    </message>
    <message>
        <source>maximum</source>
        <translation>màxim</translation>
    </message>
    <message>
        <source>of the following fields:</source>
        <translation>dels següents camps:</translation>
    </message>
    <message>
        <source>Pick...</source>
        <translation>Pren...</translation>
    </message>
    <message>
        <source>Custom calculation script:</source>
        <translation>Seqüències personalitzades de càlcul:</translation>
    </message>
    <message>
        <source>Calculate</source>
        <translation>Calcula</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancel.la</translation>
    </message>
    <message>
        <source>Flag is ignored for PDF 1.3</source>
        <translation>Senyal ignorada per PDF 1.3</translation>
    </message>
    <message>
        <source>Enter a comma separated list of fields here</source>
        <translation>Entra una llista separada per comes </translation>
    </message>
    <message>
        <source>You need at least the Icon for Normal to use Icons for Buttons</source>
        <translation>Necessites almenys la icona Normal per utilitzar icones de Botons</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Obre</translation>
    </message>
    <message>
        <source>Example:</source>
        <translation>Exemple:</translation>
    </message>
    <message>
        <source>Selection Change</source>
        <translation>Canvi de Selecció</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>Fitxers PDF (*.pdf);;Tots els fitxers (*)</translation>
    </message>
    <message>
        <source>JavaScript</source>
        <translation>JavaScript</translation>
    </message>
    <message>
        <source>Images (*.tif *.png *.jpg *.xpm);;PostScript (*.eps);;All Files (*)</source>
        <translation>Imatges (*.tif *.png *.jpg *.xpm);PostScript (*.eps);;All Files (*)</translation>
    </message>
</context>
<context>
    <name>Annota</name>
    <message>
        <source>Annotation Properties</source>
        <translation>Propietats de l&apos;Anotació</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Text</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Enllaç</translation>
    </message>
    <message>
        <source>External Link</source>
        <translation>Enllaç Extern</translation>
    </message>
    <message>
        <source>External Web-Link</source>
        <translation>Enllaç Web</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>Destí</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Obre</translation>
    </message>
    <message>
        <source>PDF-Documents (*.pdf);;All Files (*)</source>
        <translation>Documents PDF (*.pdf);;Tots els fitxers (*)</translation>
    </message>
    <message>
        <source>&amp;Type:</source>
        <translation>&amp;Tipus:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>C&amp;anvia...</translation>
    </message>
    <message>
        <source>&amp;Page:</source>
        <translation>&amp;Pàgina:</translation>
    </message>
    <message>
        <source>&amp;X-Pos</source>
        <translation>Posició &amp;X</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>Posició &amp;Y:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
</context>
<context>
    <name>ApplyT</name>
    <message>
        <source>Apply Template</source>
        <translation>Aplica Plantilla</translation>
    </message>
    <message>
        <source>&amp;Template:</source>
        <translation>&amp;Plantilla:</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Apply to &amp;Current Page</source>
        <translation>Aplica a la Pàgina A&amp;ctual</translation>
    </message>
    <message>
        <source>Apply to all &amp;even Pages</source>
        <translation>Aplica a les pàgines par&amp;elles</translation>
    </message>
    <message>
        <source>Apply to all &amp;odd Pages</source>
        <translation>Aplica a les pàgines &amp;senars</translation>
    </message>
    <message>
        <source>Apply from &amp;Page:</source>
        <translation>Aplica des de la &amp;Pagina:</translation>
    </message>
    <message>
        <source>To:</source>
        <translation>A:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
</context>
<context>
    <name>Biblio</name>
    <message>
        <source>Scrapbook</source>
        <translation></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nou</translation>
    </message>
    <message>
        <source>&amp;Load...</source>
        <translation>&amp;Carrega...</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Desa</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>&amp;Anomena i Desa...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Tanca</translation>
    </message>
    <message>
        <source>&amp;Small</source>
        <translation>&amp;Petita</translation>
    </message>
    <message>
        <source>&amp;Medium</source>
        <translation>&amp;Mitjana</translation>
    </message>
    <message>
        <source>&amp;Large</source>
        <translation>&amp;Gran</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Fitxer</translation>
    </message>
    <message>
        <source>&amp;Preview</source>
        <translation>Visualització &amp;Previa</translation>
    </message>
    <message>
        <source>Scrapbooks (*.scs);;All Files (*)</source>
        <translation></translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Reanomena</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Esborra</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Avís</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation>El Nom &quot;%1&quot; no és únic
Si us plau tria&apos;n un altre.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
    <message>
        <source>Object</source>
        <translation>Objecte</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nom:</translation>
    </message>
    <message>
        <source>New Entry</source>
        <translation>Nova Entrada</translation>
    </message>
</context>
<context>
    <name>BookMView</name>
    <message>
        <source>Bookmarks</source>
        <translation>Punts</translation>
    </message>
    <message>
        <source>Move Bookmark</source>
        <translation>Mou Punt</translation>
    </message>
    <message>
        <source>Insert Bookmark</source>
        <translation>Insereix Punt</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancel.la</translation>
    </message>
</context>
<context>
    <name>BookPalette</name>
    <message>
        <source>Bookmarks</source>
        <translation>Punts</translation>
    </message>
</context>
<context>
    <name>ButtonIcon</name>
    <message>
        <source>Icon Placement</source>
        <translation>Col.locació d&apos;Icones</translation>
    </message>
    <message>
        <source>Layout:</source>
        <translation>Format:</translation>
    </message>
    <message>
        <source>Caption only</source>
        <translation>Només Put</translation>
    </message>
    <message>
        <source>Icon only</source>
        <translation>Només Icona</translation>
    </message>
    <message>
        <source>Caption below Icon</source>
        <translation>Ròtul sota la Icona</translation>
    </message>
    <message>
        <source>Caption above Icon</source>
        <translation>Ròtul sobre la Icona</translation>
    </message>
    <message>
        <source>Caption right to Icon</source>
        <translation>Ròtul a la dreta de la icona</translation>
    </message>
    <message>
        <source>Caption left to Icon</source>
        <translation>Ròtul a l&apos;esquerra de la icona</translation>
    </message>
    <message>
        <source>Caption overlays Icon</source>
        <translation>Ròtul al damunt de la icona</translation>
    </message>
    <message>
        <source>Scale:</source>
        <translation>Escala:</translation>
    </message>
    <message>
        <source>Always</source>
        <translation>Sempre</translation>
    </message>
    <message>
        <source>When Icon is too small</source>
        <translation>Quan la Icona és massa petita</translation>
    </message>
    <message>
        <source>When Icon is too big</source>
        <translation>Quan la Icona és massa gran</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>Mai</translation>
    </message>
    <message>
        <source>Scale How:</source>
        <translation>Escala com:</translation>
    </message>
    <message>
        <source>Proportional</source>
        <translation>Proporcional</translation>
    </message>
    <message>
        <source>Non Proportional</source>
        <translation>No Proporcional</translation>
    </message>
    <message>
        <source>Icon</source>
        <translation>Icona</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancel.la</translation>
    </message>
    <message>
        <source>Reset</source>
        <translation>Reiniciar</translation>
    </message>
</context>
<context>
    <name>CMSPrefs</name>
    <message>
        <source>Color Management Settings</source>
        <translation>Paràmetres Gestió del Color</translation>
    </message>
    <message>
        <source>&amp;Activate Color Management</source>
        <translation>&amp;Activar Gestió del Color</translation>
    </message>
    <message>
        <source>System Profiles</source>
        <translation>Perfils de Sistema</translation>
    </message>
    <message>
        <source>&amp;Pictures:</source>
        <translation>&amp;Imatges:</translation>
    </message>
    <message>
        <source>&amp;Solid Colors:</source>
        <translation>Colors &amp;Sòlids:</translation>
    </message>
    <message>
        <source>&amp;Monitor:</source>
        <translation>&amp;Monitor:</translation>
    </message>
    <message>
        <source>P&amp;rinter:</source>
        <translation>Imp&amp;ressora:</translation>
    </message>
    <message>
        <source>Rendering Intents</source>
        <translation>Intents de representació</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Perceptual</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Colorimètric Relatiu</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Saturació</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Colorimètric Absolut</translation>
    </message>
    <message>
        <source>M&amp;onitor:</source>
        <translation>M&amp;onitor:</translation>
    </message>
    <message>
        <source>Pr&amp;inter:</source>
        <translation>&amp;Impressora:</translation>
    </message>
    <message>
        <source>Sim&amp;ulate Printer on the Screen</source>
        <translation>Sim&amp;ula Impressora en Pantalla</translation>
    </message>
    <message>
        <source>Mark Colors out of &amp;Gamut</source>
        <translation>Marca colors fora de &amp;Gama</translation>
    </message>
    <message>
        <source>Use &amp;Blackpoint Compensation</source>
        <translation>Usar Compensació de &amp;Punt negre</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>Default color profile for imported images</source>
        <translation>Perfil de color per defecte en imatges importades</translation>
    </message>
    <message>
        <source>Default color profile for solid colors on the page</source>
        <translation>Perfil de color per defecte de colors sòlids de la pàgina</translation>
    </message>
    <message>
        <source>Color profile that you have generated or received from the manufacturer.
This profile should be specific to your monitor and not a generic profile (i.e. sRGB).</source>
        <translation>Perfil de color que has generat o rebut del fabricant
Aquest perfil hauria de ser específic del teu monitor i no un perfil genèric (ex.sRGB).</translation>
    </message>
    <message>
        <source>Color profile for your printer model from the manufacturer.
This profile should be specific to your printer and not a generic profile (i.e. sRGB).</source>
        <translation>Perfil de color del fabricant del teu model d&apos;impressora.
Aquest perfil hauria de ser específic de la teva impressora i no genèric (ex.sRGB).</translation>
    </message>
    <message>
        <source>Default rendering intent for your monitor. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation>Representació per defecte del teu monitor. A menys que sàpigues perquè,
s&apos;hauria de triar el Colimètric Relatiu o Perceptual.</translation>
    </message>
    <message>
        <source>Default rendering intent for your printer. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation>Representació per defecte de la impressora. A menys que sàpigues perquè,
s&apos;hauria de triar el Colorimètric Relatiu o Perceptual.</translation>
    </message>
    <message>
        <source>Enable &apos;soft proofing&apos; of how your document colors will print,
based on the chosen printer profile.</source>
        <translation>Activa &apos;soft proofing&apos;  de com els colors dels documents s&apos;imprimiran,
basant-se en el perfil d&apos;impressora triat.</translation>
    </message>
    <message>
        <source>Method of showing colors on the screen which may not print properly.
This requires very accurate profiles and serves only as a warning.</source>
        <translation>Mètode de mostrar colors per pantalla que poden no imprimir-se bé.
Això requereix perfils molt acurats i serveix només d&apos;avís.</translation>
    </message>
    <message>
        <source>Black Point Compensation is a method of improving contrast in photos.
It is recommended that you enable this if you have photos in your document.</source>
        <translation>La Compensació de Punt Negre és un mètode per millorar el contrast en fotos.
Es recomana activar-lo si tens colors en el teu document.</translation>
    </message>
</context>
<context>
    <name>CMYKChoose</name>
    <message>
        <source>Edit Color</source>
        <translation>Edita Color</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nom:</translation>
    </message>
    <message>
        <source>Color &amp;Model</source>
        <translation>&amp;Model de Color</translation>
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
        <translation>RGB per Web</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Nou</translation>
    </message>
    <message>
        <source>Old</source>
        <translation>Vell</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>HSV-Colormap</source>
        <translation>Mapa de Colors HSV</translation>
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
        <translation>Barra de Colors dinàmica</translation>
    </message>
    <message>
        <source>Static Color Bars</source>
        <translation>Barra estàtica de Colors</translation>
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
        <translation>Avís</translation>
    </message>
    <message>
        <source>Name of the Color is not unique</source>
        <translation>El nom del color no és únic</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Cap</translation>
    </message>
    <message>
        <source>You cannot create a color named &quot;%1&quot;.
It&apos;s a reserved name for transparent color</source>
        <translation>No pots crear un color que es digui &quot;%1&quot;.
És un nom reservat per un color transparent</translation>
    </message>
</context>
<context>
    <name>ChooseStyles</name>
    <message>
        <source>Choose Styles</source>
        <translation>Tria Estils</translation>
    </message>
    <message>
        <source>Available Styles</source>
        <translation>Estils Disponibles</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancel.la</translation>
    </message>
</context>
<context>
    <name>Cpalette</name>
    <message>
        <source>Shade:</source>
        <translation>Intensitat:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation>Opacitat:</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Horizontal Gradient</source>
        <translation>Gradient Horitzontal</translation>
    </message>
    <message>
        <source>Vertical Gradient</source>
        <translation>Gradient Vertical</translation>
    </message>
    <message>
        <source>Diagonal Gradient</source>
        <translation>Gradient Diagonal</translation>
    </message>
    <message>
        <source>Cross Diagonal Gradient</source>
        <translation>Gradient Diagonal en Creu</translation>
    </message>
    <message>
        <source>Radial Gradient</source>
        <translation>Gradient Radial</translation>
    </message>
    <message>
        <source>Free linear Gradient</source>
        <translation>Gradient linear lliure</translation>
    </message>
    <message>
        <source>Free radial Gradient</source>
        <translation>Gradient radial lliure</translation>
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
        <translation>Edita propietats de Color de la Línia</translation>
    </message>
    <message>
        <source>Edit Fill Color Properties</source>
        <translation>Edita propietats de color d&apos;Emplenat</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation>Saturació del color</translation>
    </message>
    <message>
        <source>Normal or gradient fill method</source>
        <translation>Emplenat Normal o gradient</translation>
    </message>
    <message>
        <source>Set the transparency for the color selected</source>
        <translation>Estableix transparència pel color seleccionat</translation>
    </message>
    <message>
        <source>Color of selected object</source>
        <translation>Color del objecte seleccionat</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Cap</translation>
    </message>
    <message>
        <source> mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation>po</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
</context>
<context>
    <name>CsvDialog</name>
    <message>
        <source>CSV Importer Options</source>
        <translation>Opcions d&apos;Importació CSV</translation>
    </message>
    <message>
        <source>Field delimiter:</source>
        <translation>Delimitador de camp:</translation>
    </message>
    <message>
        <source>(TAB)</source>
        <translation>(TAB)</translation>
    </message>
    <message>
        <source>Value delimiter:</source>
        <translation>Valor Delimitador:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Cap</translation>
    </message>
    <message>
        <source>First row is a header</source>
        <translation>Primera fila és capçalera</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancel.la</translation>
    </message>
</context>
<context>
    <name>CupsOptions</name>
    <message>
        <source>Printer Options</source>
        <translation>Opcions d&apos;Impressora</translation>
    </message>
    <message>
        <source>Page Set</source>
        <translation>Definir Pàgina</translation>
    </message>
    <message>
        <source>All Pages</source>
        <translation>Totes les Pàgines</translation>
    </message>
    <message>
        <source>Even Pages only</source>
        <translation>Només Pàgines Parelles</translation>
    </message>
    <message>
        <source>Odd Pages only</source>
        <translation>Només Pàgines Senars</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation>Mirall</translation>
    </message>
    <message>
        <source>No</source>
        <translation>No</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Si</translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation>Orientació</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Vertical</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Apaisat</translation>
    </message>
    <message>
        <source>N-Up Printing</source>
        <translation>Impressió N-Up </translation>
    </message>
    <message>
        <source>Page per Sheet</source>
        <translation>Pàgina per Full</translation>
    </message>
    <message>
        <source>Pages per Sheet</source>
        <translation>Pàgines per Full</translation>
    </message>
    <message>
        <source>Option</source>
        <translation>Opció</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valor</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>This panel displays various CUPS options when printing. 
The exact parameters available will depend on your printer driver.
You can confirm CUPS support by selecting Help &gt; About.
Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support.
Missing library support is indicated by a *</source>
        <translation>Aquest panell mostra les diverses opcions del CUPS per imprimir.
Els paràmetres disponibles depenen del controlador d&apos;impressora.
Pots confirmar el suport de CUPS seleccionant Ajuda&gt;Quant a.
Mira per les lletres C-C-T que equivalen a suport C=CUPS C=littlecms T=TIFF.
Si alguna llibreria no hi és hi ha un *</translation>
    </message>
</context>
<context>
    <name>CustomFDialog</name>
    <message>
        <source>&amp;Compress File</source>
        <translation>&amp;Comprimeix Fitxer</translation>
    </message>
    <message>
        <source>&amp;Include Fonts</source>
        <translation>&amp;Inclou Fonts</translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation>Codificant:</translation>
    </message>
    <message>
        <source>Moves to your Document Directory.
This can be set in the Preferences.</source>
        <translation>Mou al Directori del Document.
Això es pot posar en les Preferències.</translation>
    </message>
</context>
<context>
    <name>DelColor</name>
    <message>
        <source>Delete Color</source>
        <translation>Esborra Color</translation>
    </message>
    <message>
        <source>Delete color:</source>
        <translation>Esborra Color:</translation>
    </message>
    <message>
        <source>?</source>
        <translation>?</translation>
    </message>
    <message>
        <source>Replace it with:</source>
        <translation>Canvia&apos;l per:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Cap</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
</context>
<context>
    <name>DelPages</name>
    <message>
        <source>Delete Pages</source>
        <translation>Esborra Pàgines</translation>
    </message>
    <message>
        <source>Delete from:</source>
        <translation>Esborra des de:</translation>
    </message>
    <message>
        <source>to:</source>
        <translation>a:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
</context>
<context>
    <name>DmF</name>
    <message>
        <source>Missing Font</source>
        <translation>Font Perduda</translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation>La Font %1 no està instal.lada.</translation>
    </message>
    <message>
        <source>Use</source>
        <translation>Usa</translation>
    </message>
    <message>
        <source>instead</source>
        <translation>en comptes</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
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
        <translation>Informació del Document</translation>
    </message>
    <message>
        <source>&amp;Title:</source>
        <translation>&amp;Títol:</translation>
    </message>
    <message>
        <source>&amp;Author:</source>
        <translation>&amp;Autor:</translation>
    </message>
    <message>
        <source>&amp;Keywords:</source>
        <translation>&amp;Paraules clau:</translation>
    </message>
    <message>
        <source>Descri&amp;ption:</source>
        <translation>Descri&amp;pció:</translation>
    </message>
    <message>
        <source>P&amp;ublisher:</source>
        <translation>Edi&amp;tor:</translation>
    </message>
    <message>
        <source>&amp;Contributors:</source>
        <translation>&amp;Col.laboradors:</translation>
    </message>
    <message>
        <source>Dat&amp;e:</source>
        <translation>Da&amp;ta:</translation>
    </message>
    <message>
        <source>T&amp;ype:</source>
        <translation>T&amp;ipus:</translation>
    </message>
    <message>
        <source>F&amp;ormat:</source>
        <translation>F&amp;ormat:</translation>
    </message>
    <message>
        <source>Identi&amp;fier:</source>
        <translation>Identi&amp;ficador:</translation>
    </message>
    <message>
        <source>&amp;Source:</source>
        <translation>&amp;Font:</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Idioma:</translation>
    </message>
    <message>
        <source>&amp;Relation:</source>
        <translation>&amp;Relació:</translation>
    </message>
    <message>
        <source>Co&amp;verage:</source>
        <translation>Co&amp;bertura:</translation>
    </message>
    <message>
        <source>Ri&amp;ghts:</source>
        <translation>Dr&amp;ets:</translation>
    </message>
    <message>
        <source>&amp;Document</source>
        <translation>&amp;Document</translation>
    </message>
    <message>
        <source>Further &amp;Information</source>
        <translation>&amp;Informació Posterior</translation>
    </message>
    <message>
        <source>The person or organisation primarily responsible for making the content of the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation>Persona o organització responsable del contingut d&apos;aquest document.
Aquest camp pot estar inclòs en el document Scribus com referència, així com a metadades del PDF</translation>
    </message>
    <message>
        <source>A name given to the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation>Ún nom donat al document.
Aquest camp pot estar inclòs en el document Scribus com referència, així com a metadades del PDF</translation>
    </message>
    <message>
        <source>An account of the content of the document.
This field is for a brief description or abstract of the document. It is embedded in the PDF on export</source>
        <translation>Un resum del contingut del document.
Aquest és una breu descripció del document. Està inclòs en el PDF al exportar</translation>
    </message>
    <message>
        <source>The topic of the content of the document.
This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</source>
        <translation>El tòpic del contingut del document.
Aquest camp que s&apos;encabirà en el PDF resultat és per ajudar les recerques i la classificació dels PDF</translation>
    </message>
    <message>
        <source>A person or organisation responsible for making the document available</source>
        <translation>Una persona o organització responsable de fer el document disponible</translation>
    </message>
    <message>
        <source>A person or organisation responsible for making contributions to the content of the document</source>
        <translation>Una persona o organització responsable de fer contribucions al contingut del document</translation>
    </message>
    <message>
        <source>A date associated with an event in the life cycle of the document, in YYYY-MM-DD format, as per ISO 8601</source>
        <translation>Una data associada amb un event del cicle de vida del document, format AAAA-MM-DD, segons ISO 8601</translation>
    </message>
    <message>
        <source>The nature or genre of the content of the document, eg. categories, functions, genres, etc</source>
        <translation>El gènere del contingut del document, ex. categories, funcions, gèneres, etc</translation>
    </message>
    <message>
        <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting.
RFC2045,RFC2046 for MIME types are also useful here</source>
        <translation>La manifestació física o digital del document. El Tipus de medi i dimensions .
També és útil posar aquí el RFC2045, RFC2046 per tipus MIME</translation>
    </message>
    <message>
        <source>An unambiguous reference to the document within a given context such as ISBN or URI</source>
        <translation>Una forma de referir-se al document de forma única, pot ser un ISBN o un URI</translation>
    </message>
    <message>
        <source>A reference to a document from which the present document is derived, eg. ISBN or URI</source>
        <translation>Una referència al document des del que derivem el document actual, ex. ISBN o URI</translation>
    </message>
    <message>
        <source>The language in which the content of the document is written, usually a ISO-639 language code
optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
        <translation>L&apos;idioma en que el document està escrit, normalment el codi d&apos;idioma segons l&apos;ISO-639 
opcionalment amb el sufixe de país de ISO-3166, ex. en-GB, fr-CH</translation>
    </message>
    <message>
        <source>A reference to a related document, possibly using a formal identifier such as a ISBN or URI</source>
        <translation>Una referència a un document semblant, si és possible donant el seu ISBN o URI</translation>
    </message>
    <message>
        <source>The extent or scope of the content of the document, possibly including location, time and jurisdiction ranges</source>
        <translation>L&apos;abast d&apos;aquest document , incloent lloc, data i rangs de jurisdicció</translation>
    </message>
    <message>
        <source>Information about rights held in and over the document, eg. copyright, patent or trademark</source>
        <translation>Informació sobre els drets que es mantenen sobre el document, ex.copyright, patents o marques</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
</context>
<context>
    <name>Druck</name>
    <message>
        <source>Setup Printer</source>
        <translation>Configuració Impressora</translation>
    </message>
    <message>
        <source>Print Destination</source>
        <translation>Destí d&apos;Impressió</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Fitxer</translation>
    </message>
    <message>
        <source>&amp;Options...</source>
        <translation>&amp;Opcions...</translation>
    </message>
    <message>
        <source>&amp;File:</source>
        <translation>&amp;Fitxer:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>C&amp;anvi...</translation>
    </message>
    <message>
        <source>A&amp;lternative Printer Command</source>
        <translation>Comanda A&amp;lternativa d&apos;Impressió</translation>
    </message>
    <message>
        <source>Use an alternative print manager, such as kprinter or gtklp,
to utilize additional printing options</source>
        <translation>Fes servir un servidor d&apos;impressió alternatiu com kprinter o gtklp,
per fer servir opcions addicionals</translation>
    </message>
    <message>
        <source>Co&amp;mmand:</source>
        <translation>Co&amp;manda:</translation>
    </message>
    <message>
        <source>Range</source>
        <translation>Rang</translation>
    </message>
    <message>
        <source>Print &amp;All</source>
        <translation>Imprimeix &amp;Tot</translation>
    </message>
    <message>
        <source>Print Current Pa&amp;ge</source>
        <translation>Imprimeix Pà&amp;gina Actual</translation>
    </message>
    <message>
        <source>Print &amp;Range</source>
        <translation>Imprimeix &amp;Rang</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Insereix una llista de tokens separats per coma
un token pot ser * per totes, 1-5 per
un rang de pàgines o un número sol.
</translation>
    </message>
    <message>
        <source>N&amp;umber of Copies:</source>
        <translation>N&amp;úmero de Còpies:</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opcions</translation>
    </message>
    <message>
        <source>Print &amp;Normal</source>
        <translation>Impressió &amp;Normal</translation>
    </message>
    <message>
        <source>Print &amp;Separations</source>
        <translation>Imprimeix &amp;Separacions</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Tot</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation>Cian</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation>Magenta</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation>Groc</translation>
    </message>
    <message>
        <source>Black</source>
        <translation>Negre</translation>
    </message>
    <message>
        <source>Pr&amp;int In Color If Available</source>
        <translation>&amp;Imprimeix En Color Si Es Pot</translation>
    </message>
    <message>
        <source>Print In Gra&amp;yscale</source>
        <translation>Imprimeix en escala de &amp;grisos</translation>
    </message>
    <message>
        <source>Ad&amp;vanced Options...</source>
        <translation>Opcions A&amp;vançades...</translation>
    </message>
    <message>
        <source>&amp;Print</source>
        <translation>&amp;Imprimir</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Anomena i desa</translation>
    </message>
    <message>
        <source>PostScript Files (*.ps);;All Files (*)</source>
        <translation>Fitxers PostScript (*.ps);;Tots els Fitxers (*)</translation>
    </message>
</context>
<context>
    <name>EPSPlug</name>
    <message>
        <source>Importing File:
%1
failed!</source>
        <translation>Importació del Fitxer:
%1
ha fallat!</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation>Error Fatal</translation>
    </message>
</context>
<context>
    <name>EditMacroDialog</name>
    <message>
        <source>Editing Macro: &lt;b&gt;</source>
        <translation>Editant Macro: &lt;b&gt;</translation>
    </message>
    <message>
        <source>Scribus - Macro Manager</source>
        <translation>Scribus - Gestor de Macros</translation>
    </message>
    <message>
        <source>The file &apos;%1&apos; already exists.
Are you sure you want to overwrite it?
</source>
        <translation>El fitxer &apos;%1&apos; ja existeix.
Estas segur que vols sobreescriure&apos;l?</translation>
    </message>
    <message>
        <source>You have already edited this macro.
Are you sure you want to discard all your changes?
</source>
        <translation>Has editat aquesta macro.
Estas segur que vols descartar tots els canvis?
</translation>
    </message>
    <message>
        <source>A full traceback follows:

%1
</source>
        <translation>La llista de crides és:

%1
</translation>
    </message>
    <message>
        <source>Compilation of the macro failed, so it can not 
be saved in its current form. The error was:
%1
</source>
        <translation>Ha fallat la compilació de la macro, per tant no
es pot desar amb aquest formulari. L&apos;error és:
%1
</translation>
    </message>
    <message>
        <source>Scribus - New Macro</source>
        <translation>Scribus - Nova Macro</translation>
    </message>
    <message>
        <source>&lt;qt&gt;This is the Edit Macro / New Macro dialog box. Here you can change the source code to macros. Edit the source code to the macro in the text editing area below the &quot;Source Code&quot; label and click OK to save your changes to the macro.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Aquest és el diàleg Edició/Nova Macro. Aquí potscanviar el codi font de les macros. Edita el codi de la macro en el quadre d&apos;edició de sota la etiqueta &quot;Codi Font&quot; i clica D&apos;ACORD per guardar els canvis a la macro.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Source Code:</source>
        <translation>Codi Font:</translation>
    </message>
    <message>
        <source>Editing Macro:</source>
        <translation>Editant Macro:</translation>
    </message>
    <message>
        <source>The name of the macro being edited.</source>
        <translation>El nom de la macro està sent editat.</translation>
    </message>
    <message>
        <source>&lt;/qt&gt;This item displays the name of the macro you are currently editing.&lt;qt&gt;</source>
        <translation>&lt;/qt&gt;Aquest item mostra el nom dela macro que s&apos;està editant.&lt;qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Discard all changes and exit.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Descarta tots els canvis i surt.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Exit the editing dialog, discarding all changes you have made. If you want to exit without saving the macro but don&apos;t want to lose your changes, save your changes with &quot;Save Source As...&quot;.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Sortir del diàleg d&apos;edició, descartant tots els canvis que has fet. Si vols sortir sense desar la macro però no vols perdre tots els canvis, desa els canvis amb &quot;Desar Codi Font Com...&quot;.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Ok</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Save changes and exit.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Desa ens canvis i surt.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Save changes to the macro and exit. If there is a problem with the macro, a message will be displayed and the editing dialog will not close.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Desa ens canvis en la macro i surt. Si hi ha un problema amb la macro, sortirà un missatge i no es tancarà el quadre de diàleg.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;This text area contains the source code of the macro. If you&apos;re creating a new macro there won&apos;t be anything in it, and if you&apos;re editing an existing macro the source code the macro was defined with will be shown here.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Aquesta àrea de text conté el codi font de la macro. Si estas creant una nova macro no hi haurà res a dins, i si n&apos;estas editant una que ja existeixi hi haurà el codi font de la macro.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Load Source ...</source>
        <translation>&amp;Carregar Codi Font...</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Replace the current source code with code from a file.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Remplaça el codi font actual amb el codi del fitxer.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Load new source code into the editing area from &quot;file&quot;. Any source code in the editing area is replaced. The loaded source must be a Scribus macro function. If you load any other script, you&apos;ll need to edit it so that it&apos;ll work as a scripter macro before saving it.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Carregar el codi font del &quot;fitxer&quot; a l&apos;àrea d&apos;edició. Tot el codi font de l&apos;àrea d&apos;edició es substituirà. El codi font carregat ha de ser una macro d&apos;Scribus. Si carregues un altre tipus de seqüència, necessitaras editar-lo fins que funcioni com una macro abans de desar-lo.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Save Source As...</source>
        <translation>&amp;Desa Codi Font Com...</translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation>Alt+S</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Save the source code being edited to a file.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Desa el codi font que s&apos;està editant en un fitxer.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Save the source code - the text - of the macro to a file. You can edit the saved source and load it again with &quot;Load Source...&quot;.</source>
        <translation>Desa el codi font -el text- de la macro en un fitxer. Pots editar el  codi font i tornar-lo a carregar amb &quot;Carregar Codi Font...&quot;.</translation>
    </message>
    <message>
        <source>Save File Dialog</source>
        <translation>Diàleg de Desar Fitxer</translation>
    </message>
    <message>
        <source>Save macro source</source>
        <translation>Desa la font de macro</translation>
    </message>
    <message>
        <source>Open File Dialog</source>
        <translation>Diàleg de Obrir Fitxer</translation>
    </message>
    <message>
        <source>Select the source file to load</source>
        <translation>Tria el codi font a carregar</translation>
    </message>
    <message>
        <source>Python source files (*.py)</source>
        <translation>Codi font de Python (*.py)</translation>
    </message>
</context>
<context>
    <name>EditStyle</name>
    <message>
        <source>Edit Style</source>
        <translation>Edita Estil</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nom:</translation>
    </message>
    <message>
        <source>Character</source>
        <translation>Caràcter</translation>
    </message>
    <message>
        <source>&amp;Font:</source>
        <translation>&amp;Font:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Si&amp;ze:</source>
        <translation>Mi&amp;da:</translation>
    </message>
    <message>
        <source>Effect:</source>
        <translation>Efecte:</translation>
    </message>
    <message>
        <source>&amp;Alignment:</source>
        <translation>&amp;Alineació:</translation>
    </message>
    <message>
        <source>&amp;Drop Caps</source>
        <translation>Llet&amp;ra Capital</translation>
    </message>
    <message>
        <source>&amp;Lines:</source>
        <translation>&amp;Liníes:</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation>Color d&apos;&amp;Emplenat:</translation>
    </message>
    <message>
        <source>St&amp;roke Color:</source>
        <translation>Colo&amp;r del Voltant:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Cap</translation>
    </message>
    <message>
        <source>Vertical Spaces</source>
        <translation>Espais Verticals</translation>
    </message>
    <message>
        <source>Adjust to Baseline &amp;Grid</source>
        <translation>Ajusta a la &amp;Reixa Base</translation>
    </message>
    <message>
        <source>Line &amp;Spacing:</source>
        <translation>Interli&amp;neat:</translation>
    </message>
    <message>
        <source>Abo&amp;ve:</source>
        <translation>A So&amp;bre:</translation>
    </message>
    <message>
        <source>&amp;Below:</source>
        <translation>A So&amp;ta:</translation>
    </message>
    <message>
        <source>Tabulators and Indentation</source>
        <translation>Tabuladors i sangrat</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>Name of your paragraph style</source>
        <translation>Nom de l&apos;estil de paràgraf</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation>Font del text o l&apos;objecte seleccionat</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Mida de Font</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Color d&apos;emplenat de text</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Color del voltant del text</translation>
    </message>
    <message>
        <source>Provides an oversized first letter for a paragraph. Used for stylistic effect</source>
        <translation>Dóna una primera lletra més gran al paràgraf. És per efectes estilístics</translation>
    </message>
    <message>
        <source>Determines the overall height, in line numbers, of the Drop Caps</source>
        <translation>Determina l&apos;alçada mitja, en números de línia, de la Lletra Gran</translation>
    </message>
    <message>
        <source>Align text to baseline grid</source>
        <translation>Alinea el text a la reixa base</translation>
    </message>
    <message>
        <source>Spacing above the paragraph</source>
        <translation>Espaiat per sobre del paràgraf</translation>
    </message>
    <message>
        <source>Spacing below the paragraph</source>
        <translation>Espaiat per sota del paràgraf</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation>Interlineat</translation>
    </message>
    <message>
        <source> mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation>po</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Avís</translation>
    </message>
    <message>
        <source>Name of the Style is not unique</source>
        <translation>El nom de l&apos;Estil no és únic</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
</context>
<context>
    <name>Editor</name>
    <message>
        <source>Editor</source>
        <translation>Editor</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nou</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Obre...</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>&amp;Anomena i Desa...</translation>
    </message>
    <message>
        <source>&amp;Save and Exit</source>
        <translation>De&amp;sa i Surt</translation>
    </message>
    <message>
        <source>&amp;Exit without Saving</source>
        <translation>Surt s&amp;ense Desar</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>Des&amp;fés</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Refés</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>T&amp;alla</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copia</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Enganxa</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>B&amp;uida</translation>
    </message>
    <message>
        <source>&amp;Get Field Names</source>
        <translation>&amp;Obtenir noms de camp</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Fitxer</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Edició</translation>
    </message>
    <message>
        <source>JavaScripts (*.js);;All Files (*)</source>
        <translation>JavaScripts (*.js);;Tots els Fitxers (*)</translation>
    </message>
</context>
<context>
    <name>ExportForm</name>
    <message>
        <source>Choose a Export Directory</source>
        <translation>Tria un Directori d&apos;Exportació</translation>
    </message>
    <message>
        <source>Export as Image(s)</source>
        <translation>Exporta com Imatge(s)</translation>
    </message>
    <message>
        <source>&amp;Export to Directory:</source>
        <translation>&amp;Exporta al Directori:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>C&amp;anvia...</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opcions</translation>
    </message>
    <message>
        <source>Image &amp;Type:</source>
        <translation>&amp;Tipus d&apos;Imatge:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation>&amp;Qualitat:</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation>&amp;Resolució:</translation>
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
        <translation>Rang</translation>
    </message>
    <message>
        <source>&amp;Current page</source>
        <translation>Pàgina &amp;Actual</translation>
    </message>
    <message>
        <source>&amp;All pages</source>
        <translation>&amp;Totes les pàgines</translation>
    </message>
    <message>
        <source>&amp;Range</source>
        <translation>&amp;Rang</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>C</source>
        <translation>C</translation>
    </message>
    <message>
        <source>Export a range of pages</source>
        <translation>Exporta rang de pàgines</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Insereix una llista de tokens separats per coma
un token pot ser * per totes, 1-5 per
un rang de pàgines o un número sol.
</translation>
    </message>
    <message>
        <source>Export all pages</source>
        <translation>Exporta totes les pàgines</translation>
    </message>
    <message>
        <source>Export only the current page</source>
        <translation>Exporta pàgina actual</translation>
    </message>
    <message>
        <source>Resolution of the Images
Use 72 dpi for Images intended for the Screen</source>
        <translation>Resolució de les imatges
Fes servir 72 dpi per imatges per pantalla</translation>
    </message>
    <message>
        <source>The quality of your images - 100% is the best, 1% the lowest quality</source>
        <translation>La qualitat de les imatges - 100% és la millor, 1% és la pitjor</translation>
    </message>
    <message>
        <source>Available export formats</source>
        <translation>Formats disponibles per exportar</translation>
    </message>
    <message>
        <source>The output directory - the place to store your images.
Name of the export file will be &apos;documentname-pagenumber.filetype&apos;</source>
        <translation>El directori de sortida - El lloc on guardar les imatges.
El Nom del fitxer exportat serà &apos;nomdocument-numpagina.tipusfitxer&apos;</translation>
    </message>
    <message>
        <source>Change the output directory</source>
        <translation>Canvia el directori de sortida</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Mida:</translation>
    </message>
    <message>
        <source>Size of the images. 100% for no changes, 200% for two times larger etc.</source>
        <translation>Mida de les imatges. 100% per no canviar, 200% per dues vegades més gros etc.</translation>
    </message>
</context>
<context>
    <name>FDialogPreview</name>
    <message>
        <source>Size:</source>
        <translation>Mida:</translation>
    </message>
    <message>
        <source>Title:</source>
        <translation>Títol:</translation>
    </message>
    <message>
        <source>No Title</source>
        <translation>No té Títol</translation>
    </message>
    <message>
        <source>Author:</source>
        <translation>Autor:</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Desconegut</translation>
    </message>
    <message>
        <source>Scribus Document</source>
        <translation>Document Scribus</translation>
    </message>
</context>
<context>
    <name>Farbmanager</name>
    <message>
        <source>Colors</source>
        <translation>Colors</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>&amp;Afegeix</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nou</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Edició</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;uplica</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Es&amp;borra</translation>
    </message>
    <message>
        <source>&amp;Remove Unused</source>
        <translation>Esborra No &amp;Usats</translation>
    </message>
    <message>
        <source>Color Sets</source>
        <translation>Conjunts de Colors</translation>
    </message>
    <message>
        <source>Current Color Set:</source>
        <translation>Conjunt de Colors Actual:</translation>
    </message>
    <message>
        <source>&amp;Save Color Set</source>
        <translation>&amp;Desa Conjunt Colors</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>Choose a color set to load</source>
        <translation>Tria conjunt de colors a carregar</translation>
    </message>
    <message>
        <source>Save the current color set</source>
        <translation>Desa el conjunt de colors actual</translation>
    </message>
    <message>
        <source>Remove unused colors from current document&apos;s color set</source>
        <translation>Esborra els colors del document que no es fan servir</translation>
    </message>
    <message>
        <source>Append colors to the current set from an existing document</source>
        <translation>Afegeix colors al conjunt actual en un document existent</translation>
    </message>
    <message>
        <source>Create a new color within the current set</source>
        <translation>Crea un nou color en el conjunt actual</translation>
    </message>
    <message>
        <source>Edit the currently selected color</source>
        <translation>Edita el color seleccionat</translation>
    </message>
    <message>
        <source>Make a copy of the currently selected color</source>
        <translation>Fes una còpia del color seleccionat</translation>
    </message>
    <message>
        <source>Delete the currently selected color</source>
        <translation>Esborra el color seleccionat</translation>
    </message>
    <message>
        <source>Make the current colorset the default color set</source>
        <translation>Fes que el color seleccionat sigui el de defecte</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nom:</translation>
    </message>
    <message>
        <source>Choose a Name</source>
        <translation>Tria un Nom</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Obre</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documents (*.sla *.sla.gz *.scd *.scd.gz);;Tots els fitxers (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documents (*.sla *.scd);;Tots els fitxers (*)</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Copia de %1</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation>Nou Color</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Cap</translation>
    </message>
</context>
<context>
    <name>FontPrefs</name>
    <message>
        <source>Global Font Settings</source>
        <translation>Paràmetres Globals de Fonts</translation>
    </message>
    <message>
        <source>Available Fonts</source>
        <translation>Fonts Disponibles</translation>
    </message>
    <message>
        <source>Font Substitutions</source>
        <translation>Substitució de Fonts</translation>
    </message>
    <message>
        <source>Additional Paths</source>
        <translation>Camins Addicionals</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Si</translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation>Nom de Font</translation>
    </message>
    <message>
        <source>Use Font</source>
        <translation>Usar Font</translation>
    </message>
    <message>
        <source>Embed in:</source>
        <translation>Incloure A:</translation>
    </message>
    <message>
        <source>Subset</source>
        <translation>Subconjunt</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Tipus</translation>
    </message>
    <message>
        <source>Path to Font File</source>
        <translation>Camí a la Font</translation>
    </message>
    <message>
        <source>&amp;Available Fonts</source>
        <translation>Fonts &amp;Disponibles</translation>
    </message>
    <message>
        <source>Replacement</source>
        <translation>Canvis</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Esborra</translation>
    </message>
    <message>
        <source>Font &amp;Substitutions</source>
        <translation>&amp;Substitució de Fonts</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>C&amp;anvi...</translation>
    </message>
    <message>
        <source>A&amp;dd...</source>
        <translation>A&amp;fegir...</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Esborra</translation>
    </message>
    <message>
        <source>Additional &amp;Paths</source>
        <translation>Ca&amp;mins Addicionals</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Tria un Directori</translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation>PostScript</translation>
    </message>
</context>
<context>
    <name>FontPreview</name>
    <message>
        <source>Fonts Preview</source>
        <translation>Vista Prèvia de Fonts</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation>Woven silk pyjamas exchanged for blue quartz</translation>
    </message>
    <message>
        <source>Append selected font into Style, Font menu</source>
        <translation>Afegir font seleccionada a l&apos;Estil, Menu Font</translation>
    </message>
    <message>
        <source>Leave preview</source>
        <translation>Sortir de la previsualització</translation>
    </message>
    <message>
        <source>Size of the Font</source>
        <translation>Mida de Font</translation>
    </message>
</context>
<context>
    <name>GradientEditor</name>
    <message>
        <source>Position:</source>
        <translation>Posició:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Here you can add, change or remove Color-Stops.</source>
        <translation>Aquí es pot afegir, canviar o esborrar Color-Stops.</translation>
    </message>
</context>
<context>
    <name>GuideManager</name>
    <message>
        <source>Manage Guides</source>
        <translation>Gestiona Guies</translation>
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
        <translation>po</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>Horizontal Guides</source>
        <translation>Guies Horitzontals</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>Posició &amp;Y:</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Afegeix</translation>
    </message>
    <message>
        <source>D&amp;elete</source>
        <translation>&amp;Esborra</translation>
    </message>
    <message>
        <source>Vertical Guides</source>
        <translation>Guies Verticals</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>Posició &amp;X:</translation>
    </message>
    <message>
        <source>A&amp;dd</source>
        <translation>A&amp;fegir</translation>
    </message>
    <message>
        <source>De&amp;lete</source>
        <translation>&amp;Esborra</translation>
    </message>
    <message>
        <source>&amp;Lock Guides</source>
        <translation>&amp;Bloqueja Guies</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
</context>
<context>
    <name>HelpBrowser</name>
    <message>
        <source>Sorry, no manual available! Please see: http://docs.scribus.net for updated docs
and www.scribus.net for downloads.</source>
        <translation>Ho sento, no hi ha manual! Si us plau mira: http://docs.scribus.net per la documentació actualitzada
i www.scribus.net per descàrregues.</translation>
    </message>
    <message>
        <source>Contents</source>
        <translation>Contingut</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Enllaç</translation>
    </message>
    <message>
        <source>Scribus Online Help</source>
        <translation>Ajuda en línia de l&apos;Scribus</translation>
    </message>
    <message>
        <source>&amp;Contents</source>
        <translation>&amp;Contingut</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Cerca</translation>
    </message>
    <message>
        <source>S&amp;earch</source>
        <translation>C&amp;erca</translation>
    </message>
    <message>
        <source>Ctrl+F</source>
        <translation>Ctrl+F</translation>
    </message>
    <message>
        <source>F3</source>
        <translation>F3</translation>
    </message>
    <message>
        <source>unknown</source>
        <translation>desconegut</translation>
    </message>
    <message>
        <source>Find</source>
        <translation>Cerca</translation>
    </message>
    <message>
        <source>Search Term:</source>
        <translation>Terme a Cercar:</translation>
    </message>
</context>
<context>
    <name>HyAsk</name>
    <message>
        <source>Possible Hyphenation</source>
        <translation>Possible separació</translation>
    </message>
    <message>
        <source>Accept</source>
        <translation>Accepta</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>Salta</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancel.la</translation>
    </message>
</context>
<context>
    <name>HySettings</name>
    <message>
        <source>Hyphenator Settings</source>
        <translation>Paràmetres Separador Sil.làbic</translation>
    </message>
    <message>
        <source>Hyphenate Text Automatically &amp;During Typing</source>
        <translation>Separar Automàticament A l&apos;E&amp;scriure</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Idioma:</translation>
    </message>
    <message>
        <source>&amp;Smallest Word:</source>
        <translation>Paraula mé&amp;s Curta:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</source>
        <translation>Un quadre de diàleg amb totes els possibles guions per cada paraula es mostrarà si feu servir Extres, Separació síl.labes Text.</translation>
    </message>
    <message>
        <source>Enables automatic hyphenation of your text while typing.</source>
        <translation>Activa la separació automàtica de text al escriure.</translation>
    </message>
    <message>
        <source>Length of the smallest word to be hyphenated.</source>
        <translation>Llargada de la paraula més petita a separar.</translation>
    </message>
    <message>
        <source>Maximum number of Hyphenations following each other.
A value of 0 means unlimited hyphenations.</source>
        <translation>Número màxim de separacions amb guions seguides.
Un valor de 0 significa infinites separacions.</translation>
    </message>
    <message>
        <source>&amp;Hyphenation Suggestions</source>
        <translation>Consells de &amp;separació</translation>
    </message>
    <message>
        <source>Consecutive Hyphenations &amp;Allowed:</source>
        <translation>Separacions consecutives &amp;Permeses:</translation>
    </message>
</context>
<context>
    <name>InsPage</name>
    <message>
        <source>Insert Page</source>
        <translation>Insereix Pàgina</translation>
    </message>
    <message>
        <source>&amp;Inserting</source>
        <translation>&amp;Inserint</translation>
    </message>
    <message>
        <source>Page(s)</source>
        <translation>Pàgina(es)</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation>abans Pàgina</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation>després Pàgina</translation>
    </message>
    <message>
        <source>at End</source>
        <translation>al Final</translation>
    </message>
    <message>
        <source>Inserting</source>
        <translation>Inserint</translation>
    </message>
    <message>
        <source>&amp;Template (Left Page):</source>
        <translation>Plan&amp;tilla (Pàgina Esquerra):</translation>
    </message>
    <message>
        <source>&amp;Template:</source>
        <translation>&amp;Plantilla:</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Template (Right Page):</source>
        <translation>Plantilla (Pàgina Dreta):</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
</context>
<context>
    <name>InsertTable</name>
    <message>
        <source>Insert Table</source>
        <translation>Insereix Taula</translation>
    </message>
    <message>
        <source>Number of Rows:</source>
        <translation>Número de Files:</translation>
    </message>
    <message>
        <source>Number of Columns:</source>
        <translation>Número de Columnes:</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancel.la</translation>
    </message>
</context>
<context>
    <name>JavaDocs</name>
    <message>
        <source>Edit JavaScripts</source>
        <translation>Edita JavaScripts</translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation>&amp;Edició...</translation>
    </message>
    <message>
        <source>&amp;Add...</source>
        <translation>&amp;Afegeix...</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Esborra</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Tanca</translation>
    </message>
    <message>
        <source>&amp;New Script:</source>
        <translation>&amp;Nova Seqüència:</translation>
    </message>
    <message>
        <source>New Script</source>
        <translation>Nova Seqüència</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Avís</translation>
    </message>
    <message>
        <source>Do you really want to delete this Script?</source>
        <translation>Realment vols esborrar la Seqüència?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;No</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Si</translation>
    </message>
</context>
<context>
    <name>KeyManager</name>
    <message>
        <source>Manage Keyboard Shortcuts</source>
        <translation>Gestió de dreceres de Teclat</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Acció</translation>
    </message>
    <message>
        <source>Current Key</source>
        <translation>Tecla Actual</translation>
    </message>
    <message>
        <source>Select a Key for this Action</source>
        <translation>Tria una tecla per aquesta Acció</translation>
    </message>
    <message>
        <source>&amp;No Key</source>
        <translation>&amp;Sense Tecla</translation>
    </message>
    <message>
        <source>&amp;User Defined Key</source>
        <translation>&amp;Tecla Definida per l&apos;Usuari</translation>
    </message>
    <message>
        <source>ALT+SHIFT+T</source>
        <translation>ALT+SHIFT+T</translation>
    </message>
    <message>
        <source>Set &amp;Key</source>
        <translation>Tria &amp;Tecla</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
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
        <translation>Maj</translation>
    </message>
    <message>
        <source>Shift+</source>
        <translation>Maj+</translation>
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
        <translation>Avís</translation>
    </message>
    <message>
        <source>This Key Sequence is already in use</source>
        <translation>Aquesta Seqüència ja es fa servir</translation>
    </message>
</context>
<context>
    <name>LayerPalette</name>
    <message>
        <source>Layers</source>
        <translation>Capes</translation>
    </message>
    <message>
        <source>Add a new Layer</source>
        <translation>Afegeix una nova Capa</translation>
    </message>
    <message>
        <source>Delete Layer</source>
        <translation>Esborra Capa</translation>
    </message>
    <message>
        <source>Raise Layer</source>
        <translation>Apuja Capa</translation>
    </message>
    <message>
        <source>Lower Layer</source>
        <translation>Abaixa Capa</translation>
    </message>
    <message>
        <source>New Layer</source>
        <translation>Nova Capa</translation>
    </message>
    <message>
        <source>Do you want to delete all Objects on this Layer too?</source>
        <translation>També vols esborrar tots els Objectes d&apos;aquesta capa?</translation>
    </message>
</context>
<context>
    <name>LineFormate</name>
    <message>
        <source>Edit Line Styles</source>
        <translation>Edita Estils de Línia</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>&amp;Afegeix</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nou</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Edició</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;uplica</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Esborra</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Desa</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Copia de %1</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation>Nou Estil</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Avís</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation>Realment vols esborrar aquest Estil?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;No</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Si</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Obre</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documents (*.sla *.sla.gz *.scd *.scd.gz);;Tots els fitxers (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documents (*.sla *.scd);;Tots els fitxers (*)</translation>
    </message>
</context>
<context>
    <name>MSpinBox</name>
    <message>
        <source> pt</source>
        <translation>pt</translation>
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
        <translation>po</translation>
    </message>
    <message>
        <source>p</source>
        <translation>p</translation>
    </message>
    <message>
        <source> mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation>po</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
</context>
<context>
    <name>Macro</name>
    <message>
        <source>Passed object is not callable</source>
        <comment>python error</comment>
        <translation>L&apos;objecte passat no és cridable</translation>
    </message>
</context>
<context>
    <name>MacroManager</name>
    <message>
        <source>Manage Macros</source>
        <translation>Gestiona Macros</translation>
    </message>
    <message>
        <source>Brings up a graphical window for creating, deleting, editing, saving and loading macros.</source>
        <translation>Mostra una finestra gràfica per crear, esborrar, editar, desar i carregar macros.</translation>
    </message>
    <message>
        <source>Create, edit and delete macros</source>
        <translation>Crear, editar i esborrar macros</translation>
    </message>
    <message>
        <source>&amp;Macro</source>
        <translation>&amp;Macro</translation>
    </message>
    <message>
        <source>Scribus - Macro Manager</source>
        <translation>Scribus - Gestor de Macros</translation>
    </message>
    <message>
        <source>Unable to open the requested file: %1</source>
        <translation>No puc obrir el fitxer demanat: %1</translation>
    </message>
    <message>
        <source>Scribus - Edit Macro</source>
        <translation>Scribus - Edició de Macro</translation>
    </message>
    <message>
        <source>&lt;qt&gt;The macro name you requested is already taken  by another macro.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;El nom de la macro que demanes ja el té  una altra macro.&lt;/qt&gt;  </translation>
    </message>
    <message>
        <source>&lt;qt&gt;Macro creation failed. The macro manager was unable to set up the macro.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Ha fallat la creació de la macro. El gestor de macros no pot activar la macro.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>The macro &apos;%1&apos; has reported a minor error.
The error is: %2
A full traceback follows:

%3
</source>
        <translation>La macro &apos;%1&apos; ha generat un petit error.
L&apos;error és: %2
L&apos;error ve de:

%3
</translation>
    </message>
    <message>
        <source>The macro &apos;%1&apos; failed to execute correctly.
The error is: %2
A full traceback follows:

%3
</source>
        <translation>La macro &apos;%1&apos; no s&apos;ha pogut executar correctament.
L&apos;error és: %2
L&apos;error ve de:

%3
</translation>
    </message>
    <message>
        <source>Scribus - New Macro</source>
        <translation>Scribus - Nova Macro</translation>
    </message>
    <message>
        <source>Enter name for new macro: </source>
        <translation>Entra un nom per la nova macro: </translation>
    </message>
</context>
<context>
    <name>ManageMacrosDialog</name>
    <message>
        <source>Scribus - Macro Manager</source>
        <translation>Scribus - Gestor de Macros</translation>
    </message>
    <message>
        <source>Renaming the macro failed because the name is already in use.</source>
        <translation>Ha fallat el canvi de nom perquè el nou nom ja està fent-se servir.</translation>
    </message>
    <message>
        <source>Scribus - Manage Macros</source>
        <translation>Scribus - Gestió de Macros</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;This window is the Scribus Macro Manager. Here you can create macros, edit macros, etc. All changes are made using the buttons on the right hand side of the window.&lt;/p&gt;
&lt;p&gt;All changes made in this dialog take effect instantly - you cannot cancel the actions you make here.
The table in the center of the dialog lists what macros are currently loaded and some information about them. Use &quot;What&apos;s this&quot; on the table for more information.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;&lt;p&gt;Aquesta finestra és el Gestor de Macros d&apos;Scribus. Aquí pots crear, editar macros, etc. Tots els canvis es fan amb els botons del costat dret de la finestra.&lt;/p&gt;
&lt;p&gt;Tots els canvis fets en aquest diàleg són instantanis - no pots cancel.lar les accions que es facin aquí.
La taula del centre del diàleg llista quines macros estan actualment carregades i informació sobre elles. Fes servir &quot;Què és&quot; de la taula per obtenir més informació.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nou</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation>Alt+N</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Create a new macro.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Crea una nova macro.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Create a new macro by prompting for the macro name then bringing up the edit macro dialog box.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Crea una nova macro preguntant pel seu nom i posant-la en el quadre de diàleg d&apos;edició de macros.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Ok</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <source>Macro</source>
        <translation>Macro</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>Edició</translation>
    </message>
    <message>
        <source>Accel</source>
        <translation>Accelerador</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Descripció</translation>
    </message>
    <message>
        <source>Rena&amp;me</source>
        <translation>Reano&amp;mena</translation>
    </message>
    <message>
        <source>Alt+M</source>
        <translation>Alt+M</translation>
    </message>
    <message>
        <source>Rename the selected macro.</source>
        <translation>Reanomena la macro seleccionada.</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Rename the selected macro. You will be prompted for the new name.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Canvia el nom a la macro seleccionada. Et preguntarà el nou nom.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation>&amp;Edició...</translation>
    </message>
    <message>
        <source>Alt+E</source>
        <translation>Alt+E</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Edit the source of the selected macro, if the source is availible.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Edita el codi font de la macro seleccionada, si el codi està disponible.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Es&amp;borra</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Delete the currently selected macro.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Esborra la macro seleccionada actualment.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;p&gt;Delete the selected macro. This is instant, and there is no way to recover the macro once deleted. If the macro is created by a start-up script, it will reappear next time you load Scribus.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Esborra la macro seleccionada. S&apos;esborra instantàniament, i no hi ha forma de recuperar-la un cop s&apos;hagi esborrat. Si la macro és creada al iniciar el programa, reapareixerà al reiniciar Scribus.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>&amp;Set Accel</source>
        <translation>Acti&amp;va Drecera</translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation>Alt+S</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Set the keyboard shortcut for the selected macro.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Posa la drecera de teclat a aquesta macro.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;p&gt;Set the keyboard shortcut (accelerator) key of the selected macro. You will be prompted for the new shortcut in a dialog box.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Activa la drecera de teclat (accelerador) de la macro actual. Et preguntarà quina drecera vols en un quadre de diàleg.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>E&amp;xport</source>
        <translation>E&amp;xporta</translation>
    </message>
    <message>
        <source>Alt+X</source>
        <translation>Alt+X</translation>
    </message>
    <message>
        <source>Export macros to a file.</source>
        <translation>Exporta macros a un fitxer.</translation>
    </message>
    <message>
        <source>&lt;p&gt;Export macros to an external file. The file will be a Python script containing the scripter commands to re-create the macros. It can be run using &lt;tt&gt;Load extension script&lt;/tt&gt; from the &lt;tt&gt;Script&lt;/tt&gt; menu, or the import button in the macro manager.&lt;/p&gt;
&lt;p&gt;If you want a nice, human readable version of your macros, select the macro you want, press the &lt;tt&gt;Edit&lt;/tt&gt;  button, and use the &lt;tt&gt;Save source&lt;/tt&gt; button in the &lt;tt&gt;Edit Macro&lt;/tt&gt; dialog. You won&apos;t be able to load that version with &lt;tt&gt;Load extension script&lt;/tt&gt; - instead, create a new macro with the&lt;tt&gt; New&lt;/tt&gt; button and use &lt;tt&gt;Load source&lt;/tt&gt;.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Exporta macros a un fitxer extern. El fitxer ha de ser una seqüència Python que contingui les comandes per recrear les macros. Es pot executar amb la opció &lt;tt&gt;Carregar Extensions&lt;/tt&gt; del menú &lt;tt&gt;Seqüència&lt;/tt&gt;, o amb el botó d&apos;importar del gestor de macros.&lt;/p&gt;
&lt;p&gt;si voleu una versió inteligible pels humans de les macros, seleccioneu la macro que voleu, premeu &lt;tt&gt;Edició&lt;/tt&gt;  , i feu servir el botó &lt;tt&gt;Desar codi Font&lt;/tt&gt; en el quadre de diàleg &lt;tt&gt;Edició de Macro&lt;/tt&gt;. No se&apos;n podran carregar  amb &lt;tt&gt;Carregar extensions&lt;/tt&gt;, a menys que creem una nova macro amb el botó &lt;tt&gt;Nova&lt;/tt&gt; i fem servir &lt;tt&gt;Carregar Codi Font&lt;/tt&gt;.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Delete &amp;All</source>
        <translation>Esborr&amp;a Tot</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>Delete all macros.</source>
        <translation>Esborra totes les macros.</translation>
    </message>
    <message>
        <source>&lt;p&gt;Delete all registered macros. This is instant, and there is no way to recover the deleted macros. Any macros created by your start-up script will reappear next time you load Scribus.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Esborra totes les macros registrades. Quan s&apos;esborri, no hi haurà forma de recuperar-les. Qualsevol macro definida a l&apos;arrencar el programa es tornarà a carregar el proper cop que engeguem Scribus.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importa</translation>
    </message>
    <message>
        <source>Alt+I</source>
        <translation>Alt+I</translation>
    </message>
    <message>
        <source>Import macros from a file.</source>
        <translation>Importa macros d&apos;un fitxer.</translation>
    </message>
    <message>
        <source>&lt;p&gt;Loads macros from an external file.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Carrega les macros d&apos;un fitxer extern.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Close this dialog</source>
        <translation>Tanca aquest diàleg</translation>
    </message>
    <message>
        <source>Return to Scribus</source>
        <translation>Torna a Scribus</translation>
    </message>
    <message>
        <source>&lt;p&gt;Edit the selected macro. &lt;/p&gt;
&lt;p&gt;If this button is greyed out, either there is no selected macro or the macro manager does not have the source code for the macro you have selected (in which case &lt;tt&gt;No&lt;/tt&gt; will be shown in the &lt;tt&gt;Edit &lt;/tt&gt;column of the macro).&lt;/p&gt;
&lt;p&gt;If Scribus doesn&apos;t have the source, the macro was probably created by a script.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Edita la macro seleccionada.&lt;/p&gt;
&lt;p&gt;Si aquest botó està desactivat, és que no hi és o que el gestor de macros  no té el codi font  de la macro que has seleccionat (en aquest cas es veurà &lt;tt&gt;No&lt;/tt&gt; en la columna &lt;tt&gt;Edit&lt;/tt&gt; de la macro).&lt;/p&gt;
&lt;p&gt;Si Scribus no té el codi font de la macro és perquè provablement ha estat creada per una seqüència.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Scribus Macro Files (*.pymacro)</source>
        <translation>Fitxers de Macro d&apos;Scribus (*.pymacro)</translation>
    </message>
    <message>
        <source>Open File Dialog</source>
        <translation>Diàleg de Obrir Fitxer</translation>
    </message>
    <message>
        <source>Select the macro file to load.</source>
        <translation>Tria la macro a carregar.</translation>
    </message>
    <message>
        <source>Save File Dialog</source>
        <translation>Diàleg de Desar Fitxer</translation>
    </message>
    <message>
        <source>Save all macros</source>
        <translation>Desa totes les macros</translation>
    </message>
    <message>
        <source>Scribus - Rename Macro</source>
        <translation>Scribus - Macro de Canvi de nom</translation>
    </message>
    <message>
        <source>Enter new name: </source>
        <translation>Entra el nou nom: </translation>
    </message>
    <message>
        <source>Scribus - Set Macro Shortcut</source>
        <translation>Scribus - Fer Drecera de Macro</translation>
    </message>
    <message>
        <source>Enter new shortcut: </source>
        <translation>Entra la nova drecera: </translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Si</translation>
    </message>
    <message>
        <source>No</source>
        <translation>No</translation>
    </message>
    <message>
        <source>&lt;p&gt;This table lists the macros that are currently defined.&lt;/p&gt;

&lt;p&gt;&lt;b&gt;Macro:&lt;/b&gt; The name of the macro, as shown in the menu bar and in other places around Scribus.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Edit:&lt;/b&gt; If the macro can be edited, &quot;Yes&quot; appears in this column. Usually if a macro cannot be edited it was created using the register_macro command in a script.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Accel:&lt;/b&gt; The menu shortcut key sequence, if any, associated with the macro. For example, CTRL-F8 means that you can press Control-F8 when in Scribus to run the macro.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Description:&lt;/b&gt; If the macro contains a &quot;docstring&quot;, a special string at the start of its definition that describes it, that is shown here. If the docstring is long, only the beginning is shown - use &quot;What&apos;s This&quot; on the macro&apos;s entry in the Macro menu to see the full description.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Aquesta taula llista les macros que estan definides actualment.&lt;/p&gt;

&lt;p&gt;&lt;b&gt;Macro:&lt;/b&gt;El nom de la macro, es mostra a la barra de menus i en altres llocs dins d&apos;Scribus.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Edit:&lt;/b&gt;Si la macro es editable, apareix &quot;Si&quot; en aquesta columna. Normalment si una macro es pot editar va ser creada fent servir gravar macro en una seqüència.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Accel:&lt;/b&gt;La drecera de teclat, si n&apos;hi ha, associada a la macro. Per exempre CTRL-F8 significa que prement CTRL-F8 perquè Scribus executi la macro.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Descripció:&lt;/p&gt;Si la macro conté una &quot;docstring&quot;, una cadena especial al principi de la definició que la descriu, es mostra aquí. Si la cadena és massa llarga, només es mostra el principi - feu servir &quot;Què és&quot; en la entrada de la macro del menú per veure la descripció completa.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>Mdup</name>
    <message>
        <source>Multiple Duplicate</source>
        <translation>Duplicació Múltiple</translation>
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
        <translation>po</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>&amp;Number of Copies:</source>
        <translation>&amp;Número de Còpies:</translation>
    </message>
    <message>
        <source>&amp;Horizontal Shift:</source>
        <translation>Desplaçament &amp;Horitzontal:</translation>
    </message>
    <message>
        <source>&amp;Vertical Shift:</source>
        <translation>Desplaçament &amp;Vertical:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
</context>
<context>
    <name>Measurements</name>
    <message>
        <source>Distances</source>
        <translation>Distàncies</translation>
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
        <translation>Àngle:</translation>
    </message>
    <message>
        <source>Length:</source>
        <translation>Llargada:</translation>
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
        <translation>po</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
</context>
<context>
    <name>MergeDoc</name>
    <message>
        <source>Import Template</source>
        <translation>Importa Plantilla</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation>Importa Pàgina(es)</translation>
    </message>
    <message>
        <source>From Document:</source>
        <translation>Des del Document:</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation>Canvia...</translation>
    </message>
    <message>
        <source>Import Page(s):</source>
        <translation>Importa Pàgina(es):</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Insereix una llista de tokens separats per coma
un token pot ser * per totes, 1-5 per
un rang de pàgines o un número sol.
</translation>
    </message>
    <message>
        <source> from 0</source>
        <translation>Des de 0</translation>
    </message>
    <message>
        <source>Create Page(s)</source>
        <translation>Crea Pàgina(es)</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation>abans Pàgina</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation>després Pàgina</translation>
    </message>
    <message>
        <source>at End</source>
        <translation>al Final</translation>
    </message>
    <message>
        <source>Import</source>
        <translation>Importa</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancel.la</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Obre</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documents (*.sla *.sla.gz *.scd *.scd.gz);;Tots els fitxers (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documents (*.sla *.scd);;Tots els fitxers (*)</translation>
    </message>
    <message>
        <source> from %1</source>
        <translation>Des de %1</translation>
    </message>
</context>
<context>
    <name>MovePages</name>
    <message>
        <source>Move Pages</source>
        <translation>Mou Pàgines</translation>
    </message>
    <message>
        <source>Copy Page</source>
        <translation>Copia Pàgina</translation>
    </message>
    <message>
        <source>Move Page(s):</source>
        <translation>Mou Pàgina(es):</translation>
    </message>
    <message>
        <source>to:</source>
        <translation>a:</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation>abans Pàgina</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation>després Pàgina</translation>
    </message>
    <message>
        <source>at End</source>
        <translation>al Final</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
</context>
<context>
    <name>Mpalette</name>
    <message>
        <source>Properties</source>
        <translation>Propietats</translation>
    </message>
    <message>
        <source>X, Y, &amp;Z</source>
        <translation>X, Y, &amp;Z</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>&amp;Forma</translation>
    </message>
    <message>
        <source>&amp;Text</source>
        <translation>&amp;Text</translation>
    </message>
    <message>
        <source>&amp;Image</source>
        <translation>&amp;Imatge</translation>
    </message>
    <message>
        <source>&amp;Line</source>
        <translation>&amp;Línia</translation>
    </message>
    <message>
        <source>&amp;Colors</source>
        <translation>&amp;Colors</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nom</translation>
    </message>
    <message>
        <source>Geometry</source>
        <translation>Geometria</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>Posició &amp;X:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>Posició &amp;Y:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Amplada:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>A&amp;lçada:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Rotació:</translation>
    </message>
    <message>
        <source>Basepoint:</source>
        <translation>Punt Base:</translation>
    </message>
    <message>
        <source>Level</source>
        <translation>Nivell</translation>
    </message>
    <message>
        <source>Shape:</source>
        <translation>Forma:</translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation>&amp;Edita Forma...</translation>
    </message>
    <message>
        <source>R&amp;ound
Corners:</source>
        <translation>Vèrtex 
A&amp;rrodonits:</translation>
    </message>
    <message>
        <source>Distance of Text</source>
        <translation>Distància del Text</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>Colu&amp;mnes:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>&amp;Buit:</translation>
    </message>
    <message>
        <source>To&amp;p:</source>
        <translation>Dal&amp;t:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>&amp;Baix:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Esquerra:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>&amp;Dreta:</translation>
    </message>
    <message>
        <source>T&amp;abulators...</source>
        <translation>T&amp;abuladors...</translation>
    </message>
    <message>
        <source>Path Text Properties</source>
        <translation>Propietats Camí Text</translation>
    </message>
    <message>
        <source>Show Curve</source>
        <translation>Mostra Corba</translation>
    </message>
    <message>
        <source>Start Offset:</source>
        <translation>Inici Desplaçament:</translation>
    </message>
    <message>
        <source>Distance from Curve:</source>
        <translation>Distància de la Corba:</translation>
    </message>
    <message>
        <source>Text &amp;Flows Around Frame</source>
        <translation>Text &amp;Flueix al voltant del Marc</translation>
    </message>
    <message>
        <source>Use &amp;Bounding Box</source>
        <translation>&amp;Limitar amb Caixes</translation>
    </message>
    <message>
        <source>&amp;Use Contour Line</source>
        <translation>Línia de &amp;Contorn</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation>Mida de &amp;Font:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation>Intensitat:</translation>
    </message>
    <message>
        <source>Custom Spacing</source>
        <translation>Personalització Espaiat</translation>
    </message>
    <message>
        <source>L&amp;ine Spacing:</source>
        <translation>Inter&amp;lineat:</translation>
    </message>
    <message>
        <source>St&amp;yle:</source>
        <translation>Est&amp;il:</translation>
    </message>
    <message>
        <source>Lan&amp;guage:</source>
        <translation>&amp;Idioma:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation>Escalat Lli&amp;ure</translation>
    </message>
    <message>
        <source>X-Sc&amp;ale:</source>
        <translation>Esc&amp;ala X:</translation>
    </message>
    <message>
        <source>Y-Scal&amp;e:</source>
        <translation>&amp;Escala Y:</translation>
    </message>
    <message>
        <source>Scale &amp;To Frame Size</source>
        <translation>Escala a Mida de M&amp;arc</translation>
    </message>
    <message>
        <source>P&amp;roportional</source>
        <translation>P&amp;roporcional</translation>
    </message>
    <message>
        <source>Input Profile:</source>
        <translation>Perfil d&apos;Entrada:</translation>
    </message>
    <message>
        <source>Rendering Intent:</source>
        <translation>Intent de representació:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Perceptual</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Colorimètric Relatiu</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Saturació</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Colorimètric Absolut</translation>
    </message>
    <message>
        <source>Left Point</source>
        <translation>Punt Esquerre</translation>
    </message>
    <message>
        <source>End Points</source>
        <translation>Punts Finals</translation>
    </message>
    <message>
        <source>&amp;Basepoint:</source>
        <translation>&amp;Punt Base:</translation>
    </message>
    <message>
        <source>T&amp;ype of Line:</source>
        <translation>T&amp;ipus de Línia:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation>&amp;Amplada Línia:</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation>Unió en Punta</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Unió obliqua</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation>Unió arrodonida</translation>
    </message>
    <message>
        <source>Ed&amp;ges:</source>
        <translation>Vo&amp;res:</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>Tap Planer</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation>Tap Rectangular</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation>Tap Arrodonit</translation>
    </message>
    <message>
        <source>&amp;Endings:</source>
        <translation>T&amp;erminacions:</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation>Sense Estil</translation>
    </message>
    <message>
        <source>Cell Lines</source>
        <translation>Línies de Cel.la</translation>
    </message>
    <message>
        <source>Line at Top</source>
        <translation>Línia a Dalt</translation>
    </message>
    <message>
        <source>Line at the Left</source>
        <translation>Línia a l&apos;Esquerra</translation>
    </message>
    <message>
        <source>Line at the Right </source>
        <translation>Línia a la Dreta</translation>
    </message>
    <message>
        <source>Line at Bottom</source>
        <translation>Línia a Baix</translation>
    </message>
    <message>
        <source>Name of selected object</source>
        <translation>Nom de l&apos;objecte seleccionat</translation>
    </message>
    <message>
        <source>Horizontal position of current basepoint</source>
        <translation>Posició Horitzontal del Punt Base</translation>
    </message>
    <message>
        <source>Vertical position of current basepoint</source>
        <translation>Posició Vertical del Punt Base</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>Amplada</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>Alçada</translation>
    </message>
    <message>
        <source>Rotation of object at current basepoint</source>
        <translation>Rotació de l&apos;objecte en el Punt Base</translation>
    </message>
    <message>
        <source>Point from which measurements or rotation angles are referenced</source>
        <translation>Punt des del que es fan els mesuraments i les rotacions d&apos;angles</translation>
    </message>
    <message>
        <source>Select top left for basepoint</source>
        <translation>Tria punt base esquerra superior</translation>
    </message>
    <message>
        <source>Select top right for basepoint</source>
        <translation>Tria punt base dret superior</translation>
    </message>
    <message>
        <source>Select bottom left for basepoint</source>
        <translation>Tria punt base esquerra inferior</translation>
    </message>
    <message>
        <source>Select bottom right for basepoint</source>
        <translation>Tria punt base dret inferior</translation>
    </message>
    <message>
        <source>Select center for basepoint</source>
        <translation>Tria centre pel punt base</translation>
    </message>
    <message>
        <source>Flip Horizontal</source>
        <translation>Inversió Horitzontal</translation>
    </message>
    <message>
        <source>Flip Vertical</source>
        <translation>Inversió Vertical</translation>
    </message>
    <message>
        <source>Move one level up</source>
        <translation>Mou un nivell amunt</translation>
    </message>
    <message>
        <source>Move one level down</source>
        <translation>Mou un nivell avall</translation>
    </message>
    <message>
        <source>Move to front</source>
        <translation>Mou a davant</translation>
    </message>
    <message>
        <source>Move to back</source>
        <translation>Mou al fons</translation>
    </message>
    <message>
        <source>Indicates the level the object is on, 0 means the object is at the bottom</source>
        <translation>Indica el nivell en que està l&apos;objectet, 0 vol dir que és al fons de tot</translation>
    </message>
    <message>
        <source>Lock or unlock the object</source>
        <translation>Bloqueja o desbloqueja l&apos;objecte</translation>
    </message>
    <message>
        <source>Lock or unlock the size of the object</source>
        <translation>Bloqueja o desbloqueja la mida</translation>
    </message>
    <message>
        <source>Enable or disable printing of the object</source>
        <translation>Activa o desactiva la impressió</translation>
    </message>
    <message>
        <source>Make text in lower frames flow around the object shape</source>
        <translation>Fa que el text de capes inferiors flueixi al voltant del marc</translation>
    </message>
    <message>
        <source>Use a surrounding box instead of the frame&apos;s shape for text flow</source>
        <translation>Fa servir una caixa envoltant en comptes del marc per fer fluir el text</translation>
    </message>
    <message>
        <source>Use a second line originally based on the frame&apos;s shape for text flow</source>
        <translation>Fer servir una segona línia basada en el marc per fer fluir el text</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation>Font del objecte o text triat</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Mida de Font</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation>Escalant amplada de caràcters</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Color del voltant del text</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Color d&apos;emplenat de text</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation>Saturació del color del voltant del text</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation>Saturació del color d&apos;omplir el text</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation>Interlineat</translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation>Estil del paràgraf actual</translation>
    </message>
    <message>
        <source>Hyphenation language of frame</source>
        <translation>Idioma de separació en síl.labes del marc</translation>
    </message>
    <message>
        <source>Change settings for left or end points</source>
        <translation>Canvia paràmetres de punts finals o esquerres</translation>
    </message>
    <message>
        <source>Pattern of line</source>
        <translation>Patró de línia</translation>
    </message>
    <message>
        <source>Thickness of line</source>
        <translation>Gruix de línia</translation>
    </message>
    <message>
        <source>Type of line joins</source>
        <translation>Unions de línia</translation>
    </message>
    <message>
        <source>Type of line end</source>
        <translation>Finals de línia</translation>
    </message>
    <message>
        <source>Line style of current object</source>
        <translation>Estil de línia de l&apos;objecte</translation>
    </message>
    <message>
        <source>Choose the shape of frame...</source>
        <translation>Tria la forma del marc...</translation>
    </message>
    <message>
        <source>Edit shape of the frame...</source>
        <translation>Edita la ombra del marc...</translation>
    </message>
    <message>
        <source>Set radius of corner rounding</source>
        <translation>Radi dels costats arrodonits</translation>
    </message>
    <message>
        <source>Number of columns in text frame</source>
        <translation>Número de columnes de text</translation>
    </message>
    <message>
        <source>Switches between Gap or Column width</source>
        <translation>Canvia entre Gap o Amplada de Comumna</translation>
    </message>
    <message>
        <source>Distance between columns</source>
        <translation>Distància entre columnes</translation>
    </message>
    <message>
        <source>Distance of text from top of frame</source>
        <translation>Distància del text a dalt del marc</translation>
    </message>
    <message>
        <source>Distance of text from bottom of frame</source>
        <translation>Distància del text a baix del marc</translation>
    </message>
    <message>
        <source>Distance of text from left of frame</source>
        <translation>Distància del text a l&apos;esquerra del marc</translation>
    </message>
    <message>
        <source>Distance of text from right of frame</source>
        <translation>Distància del text a la dreta del marc</translation>
    </message>
    <message>
        <source>Edit tab settings of text frame...</source>
        <translation>Paràmetres de tabuladors del marc...</translation>
    </message>
    <message>
        <source>Allow the image to be a different size to the frame</source>
        <translation>Permet a la imatge tenir mida diferent del marc</translation>
    </message>
    <message>
        <source>Horizontal offset of image within frame</source>
        <translation>Desplaçament horitzontal de la imatge al marc</translation>
    </message>
    <message>
        <source>Vertical offset of image within frame</source>
        <translation>Desplaçament Vertical de la imatge al marc</translation>
    </message>
    <message>
        <source>Resize the image horizontally</source>
        <translation>Redimensiona la imatge horitzontalment</translation>
    </message>
    <message>
        <source>Resize the image vertically</source>
        <translation>Redimensiona la imatge verticalment</translation>
    </message>
    <message>
        <source>Keep the X and Y scaling the same</source>
        <translation>Mantenir l&apos;escalat de X i Y igual</translation>
    </message>
    <message>
        <source>Keep the aspect ratio</source>
        <translation>Mantenir l&apos;aspecte</translation>
    </message>
    <message>
        <source>Make the image fit within the size of the frame</source>
        <translation>Fer que la imatge encaixi en la mida del marc</translation>
    </message>
    <message>
        <source>Use image proportions rather than those of the frame</source>
        <translation>Fer servir proporcions d&apos;imatge en comptes de marc</translation>
    </message>
    <message>
        <source>Source profile of the image</source>
        <translation>Perfil font de la imatge</translation>
    </message>
    <message>
        <source>Rendering intent for the image</source>
        <translation></translation>
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
        <translation>mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation>po</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>Column width</source>
        <translation>Amplada de Columna</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Cap</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Avís</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation>El Nom &quot;%1&quot; no és únic
Si us plau tria&apos;n un altre.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
    <message>
        <source>Right to Left Writing</source>
        <translation>Escriptura d&apos;esquerra a dreta</translation>
    </message>
    <message>
        <source>Trac&amp;king:</source>
        <translation>Inte&amp;rlletrat:</translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation>Interlletrat Manual</translation>
    </message>
</context>
<context>
    <name>MultiLine</name>
    <message>
        <source>Edit Style</source>
        <translation>Edita Estil</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation></translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation></translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation></translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation>Unió en Punta</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Unió Obliqua</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation>Unió arrodonida</translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation>Amplada Línia:</translation>
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
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source> pt </source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation>Línia Solida</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation>Línia de Guions</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation>Línia de Punts</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation>Linia Guió Punt </translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation>Línia Guió Punt Punt </translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Avís</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation>El Nom &quot;%1&quot; no és únic
Si us plau tria&apos;n un altre.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
</context>
<context>
    <name>MusterSeiten</name>
    <message>
        <source>Edit Templates</source>
        <translation>Edita Plantilles</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>&amp;Afegeix</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nou</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;uplica</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Es&amp;borra</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Tanca</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Avís</translation>
    </message>
    <message>
        <source>Do you really want to delete this Template?</source>
        <translation>Realment vols esborrar la Plantilla?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;No</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Si</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nom:</translation>
    </message>
    <message>
        <source>New Template</source>
        <translation>Nova Plantilla</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Copia de %1</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Nom:</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation>Còpia #%1 de</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>New Template %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NewDoc</name>
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
        <translation>po</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>New Document</source>
        <translation>Nou Document</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Mida de Pàgina</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Mida:</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation>Carta</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation>Tabloide</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalitzat</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Orie&amp;ntació:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Vertical</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Apaisat</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Amplada:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>A&amp;lçada:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation>Pàgines &amp;Encarades</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation>Primera &amp;Pàgina Esquerra</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Guia de Marges</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Esquerra:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>&amp;Dreta:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>Dal&amp;t:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>&amp;Baix:</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opcions</translation>
    </message>
    <message>
        <source>F&amp;irst Page Number:</source>
        <translation>Pr&amp;imer Número de Pàgina:</translation>
    </message>
    <message>
        <source>&amp;Default Unit:</source>
        <translation>Unitats per &amp;Defecte:</translation>
    </message>
    <message>
        <source>Points (pts)</source>
        <translation>Punts (pts)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation>Milímetres (mm)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation>Polzades (po)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation>Piques (p)</translation>
    </message>
    <message>
        <source>&amp;Automatic Text Frames</source>
        <translation>Marcs de Text &amp;Automàtics</translation>
    </message>
    <message>
        <source>Column Guides</source>
        <translation>Guies de Columna</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>&amp;Gap:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>Colu&amp;mnes:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>Document page size, either a standard size or a custom size</source>
        <translation>Mida de pàgina, tant mides estàndard com personalitzades</translation>
    </message>
    <message>
        <source>Orientation of the document&apos;s pages</source>
        <translation>Orientació de les pàgines del document</translation>
    </message>
    <message>
        <source>Width of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Amplada de les pàgines del document, editable si tenim mida personalitzada</translation>
    </message>
    <message>
        <source>Height of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Alçada de les pàgines del document, editable si tenim mida personalitzada</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation>Activa la distribució sola o extesa</translation>
    </message>
    <message>
        <source>Make the first page the left page of the document</source>
        <translation>Fer que la primera pàgina sigui a l&apos;esquerra</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Distància entre la guia superior i la vora del paper</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Distància entre la guia inferior i la vora del paper</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Distància entre el marge esquerre i la vora del paper.
Si tenim Pàgines Encarades, aquest espai es pot fer servir per trobar els marges per enquadernar</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Distància entre el marge dret i la vora del paper.
Si tenim Pàgines Encarades, aquest espai es pot fer servir per obtenir els marges per enquadernar</translation>
    </message>
    <message>
        <source>First page number of the document</source>
        <translation>Primer número de pàgina del document</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation>Unitats de mesura utilitzades en la edició</translation>
    </message>
    <message>
        <source>Create text frames automatically when new pages are added</source>
        <translation>Crear caixes de text automàticament quan s&apos;afegeixin pàgines</translation>
    </message>
    <message>
        <source>Number of columns to create in automatically created text frames</source>
        <translation>Número de columnes a crear en els quadres de text automàtics</translation>
    </message>
    <message>
        <source>Distance between automatically created columns</source>
        <translation>Distància entre les columnes creades automàticament</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation>&amp;Dins:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation>&amp;Fora:</translation>
    </message>
    <message>
        <source>Executive</source>
        <translation>Executiu</translation>
    </message>
    <message>
        <source>Folio</source>
        <translation>Foli</translation>
    </message>
    <message>
        <source>Ledger</source>
        <translation>Llibre major</translation>
    </message>
</context>
<context>
    <name>NewTm</name>
    <message>
        <source>Left Page</source>
        <translation>Pàgina Esquerra</translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation>Pàgina Dreta</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
</context>
<context>
    <name>NodePalette</name>
    <message>
        <source>Nodes</source>
        <translation>Nodes</translation>
    </message>
    <message>
        <source>&amp;Absolute Coordinates</source>
        <translation>Coordenades &amp;Absolutes</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>Posició &amp;X:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>Posició &amp;Y:</translation>
    </message>
    <message>
        <source>Edit &amp;Contour Line</source>
        <translation>Edita Línia del &amp;Voltant</translation>
    </message>
    <message>
        <source>&amp;Reset Contour Line</source>
        <translation>&amp;Restableix Línia del Voltant</translation>
    </message>
    <message>
        <source>&amp;End Editing</source>
        <translation>Fi d&apos;&amp;Edició</translation>
    </message>
    <message>
        <source>Move Nodes</source>
        <translation>Mou Nodes</translation>
    </message>
    <message>
        <source>Move Control Points</source>
        <translation>Mou Punts de Control</translation>
    </message>
    <message>
        <source>Add Nodes</source>
        <translation>Afegeix Nodes</translation>
    </message>
    <message>
        <source>Delete Nodes</source>
        <translation>Esborra Nodes</translation>
    </message>
    <message>
        <source>Move Control Points Independently</source>
        <translation>Mou Punts de Control independentment</translation>
    </message>
    <message>
        <source>Move Control Points Symmetrical</source>
        <translation>Moure Punts de Control simetricament</translation>
    </message>
    <message>
        <source>Reset Control Points</source>
        <translation>Restableix Punts de Control</translation>
    </message>
    <message>
        <source>Reset this Control Point</source>
        <translation>Restableix Punt de Control</translation>
    </message>
    <message>
        <source>Open a Polygon or Cuts a Bezier Curve</source>
        <translation>Obre un Polígon o Tallar una Corba Bezier</translation>
    </message>
    <message>
        <source>Close this Bezier Curve</source>
        <translation>Tanca aquesta Corba Bezier</translation>
    </message>
    <message>
        <source>Mirror the Path Horizontally</source>
        <translation>Enmiralla el camí Horitzontalment</translation>
    </message>
    <message>
        <source>Mirror the Path Vertically</source>
        <translation>Enmiralla el camí Verticalment</translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Right</source>
        <translation>Esquila el Camí cap a la Dreta</translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Left</source>
        <translation>Esquila el Camí cap a l&apos;esquerra</translation>
    </message>
    <message>
        <source>Shear the Path Vertically Up</source>
        <translation>Esquila el Camí cap Amunt</translation>
    </message>
    <message>
        <source>Shear the Path Vertically Down</source>
        <translation>Esquila el Camí cap Avall</translation>
    </message>
    <message>
        <source>Rotate the Path Counter-Clockwise</source>
        <translation>Rota el camí antihorariament</translation>
    </message>
    <message>
        <source>Rotate the Path Clockwise</source>
        <translation>Rota el camí horariament</translation>
    </message>
    <message>
        <source>Reduce the Size of the Path by shown %</source>
        <translation>Redueix la Mida del camí per mostrar %</translation>
    </message>
    <message>
        <source>Enlarge the Size of the Path by shown %</source>
        <translation>Allarga el camí per mostrar %</translation>
    </message>
    <message>
        <source>Angle of Rotation</source>
        <translation>Angle de Rotació</translation>
    </message>
    <message>
        <source>% to Enlarge or Reduce By</source>
        <translation>% d&apos;allargament o Reduir Per</translation>
    </message>
    <message>
        <source>Activate Contour Line Editing Mode</source>
        <translation>Activa Edició de Contorn de Línia</translation>
    </message>
    <message>
        <source>Reset the Contour Line to the Original Shape of the Frame</source>
        <translation>Restableix el Contorn de línia a la Forma Original del Marc</translation>
    </message>
    <message>
        <source>When checked use Coordinates relative to the Page,
otherwise Coordinates are relative to the Object.</source>
        <translation>Si està clicat fa servir Coordenades Relatives de 
Pàgina, i sinó Coordenades Relatives a l&apos;Objecte.</translation>
    </message>
</context>
<context>
    <name>OdtDialog</name>
    <message>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation>Fes servir el nom de document com estil de paràgraf</translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation>No ho tornis a preguntar</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
    <message>
        <source>OpenDocument Importer Options</source>
        <translation>Opcions de l&apos;Importador de OpenDocument</translation>
    </message>
    <message>
        <source>Update paragraph Styles</source>
        <translation>Actualitza Estils de paràgraf</translation>
    </message>
    <message>
        <source>Enabling this will overwrite existing styles in the current Scribus document</source>
        <translation>Activant això es sobreescriuran els estils existents pels del document Scribus actual</translation>
    </message>
    <message>
        <source>Merge Paragraph Styles</source>
        <translation>Barreja Estils de Paràgraf</translation>
    </message>
    <message>
        <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document&apos;s styles are named differently.</source>
        <translation>Barreja atributs de tots els estils de paràgraf. Això farà que hi hagi pocs estils similars, mantindrà els atributs d&apos;estil fins i tot si el del document original tenen noms diferents.</translation>
    </message>
    <message>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation>Agafa el nom de document per l&apos;estil de paràgraf en Scribus.</translation>
    </message>
    <message>
        <source>Make these settings the default and do not prompt again when importing an OASIS OpenDocument.</source>
        <translation>Fes que les característiques actuals siguin per defecte i no preguntis més al importar un document OASIS.</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancel.la</translation>
    </message>
</context>
<context>
    <name>PConsole</name>
    <message>
        <source>Script Console</source>
        <translation>Cònsola de Seqüències</translation>
    </message>
</context>
<context>
    <name>PDF_Opts</name>
    <message>
        <source>O&amp;utput to File:</source>
        <translation>So&amp;rtida a Fitxer:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation>Ca&amp;nvi...</translation>
    </message>
    <message>
        <source>Export Range</source>
        <translation>Exporta Rang</translation>
    </message>
    <message>
        <source>&amp;All Pages</source>
        <translation>&amp;Totes les pàgines</translation>
    </message>
    <message>
        <source>C&amp;hoose Pages</source>
        <translation>Tr&amp;ia Pàgines</translation>
    </message>
    <message>
        <source>File Options</source>
        <translation>Opcions de Fitxer</translation>
    </message>
    <message>
        <source>Compatibilit&amp;y:</source>
        <translation>Co&amp;mpatibilitat:</translation>
    </message>
    <message>
        <source>&amp;Binding:</source>
        <translation>&amp;Enquadernar:</translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation>Marge Esquerre</translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation>Marge Dret</translation>
    </message>
    <message>
        <source>Generate &amp;Thumbnails</source>
        <translation>Generar Minia&amp;tures</translation>
    </message>
    <message>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation>Desa Marcs de Text en&amp;llaçats com Articles PDF</translation>
    </message>
    <message>
        <source>&amp;Include Bookmarks</source>
        <translation>&amp;Inclou Punts</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation>dpi</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation>&amp;Resolució:</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automàtic</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Cap</translation>
    </message>
    <message>
        <source>&amp;Method:</source>
        <translation>&amp;Mètode:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation>&amp;Qualitat:</translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation>Màxim</translation>
    </message>
    <message>
        <source>High</source>
        <translation>Alta</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation>Mitjana</translation>
    </message>
    <message>
        <source>Low</source>
        <translation>Baixa</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation>Mínim</translation>
    </message>
    <message>
        <source>&amp;Downsample Images to:</source>
        <translation>&amp;Redueix Imatges a:</translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation>&amp;General</translation>
    </message>
    <message>
        <source>&amp;Embed all Fonts</source>
        <translation>&amp;Encasta totes les Fonts</translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation>Encastant</translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation>Fonts Disponibles:</translation>
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
        <translation>Fonts a encastar:</translation>
    </message>
    <message>
        <source>&amp;Fonts</source>
        <translation>&amp;Fonts</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Pàgina</translation>
    </message>
    <message>
        <source>Show Page Pre&amp;views</source>
        <translation>Mostra Pre&amp;visualització de Pàgina</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation>Efectes</translation>
    </message>
    <message>
        <source>&amp;Display Duration:</source>
        <translation>&amp;Durada de la Visualització:</translation>
    </message>
    <message>
        <source>Effec&amp;t Duration:</source>
        <translation>Duració de l&apos;Efec&amp;te:</translation>
    </message>
    <message>
        <source>Effect T&amp;ype:</source>
        <translation>T&amp;ipus d&apos;Efecte:</translation>
    </message>
    <message>
        <source>&amp;Moving Lines:</source>
        <translation>&amp;Movent Línies:</translation>
    </message>
    <message>
        <source>F&amp;rom the:</source>
        <translation>De&amp;s del:</translation>
    </message>
    <message>
        <source>D&amp;irection:</source>
        <translation>D&amp;irecció:</translation>
    </message>
    <message>
        <source> sec</source>
        <translation>sec</translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation>Sense Efecte</translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation>Blinds</translation>
    </message>
    <message>
        <source>Box</source>
        <translation>Caixa</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation>Dissolució</translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation>Brillantor (Glitter)</translation>
    </message>
    <message>
        <source>Split</source>
        <translation>Separació (Split)</translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation>Neteja (Wipe)</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation>Horitzontal</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation>Vertical</translation>
    </message>
    <message>
        <source>Inside</source>
        <translation>Interior</translation>
    </message>
    <message>
        <source>Outside</source>
        <translation>Exterior</translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation>Esquerra a Dreta</translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation>Dalt a Baix</translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation>Baix a Dalt</translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation>Dreta a Esquerra</translation>
    </message>
    <message>
        <source>Top-left to Bottom-Right</source>
        <translation>Dalt-Esquerra a Baix-Dreta</translation>
    </message>
    <message>
        <source>&amp;Apply Effect on all Pages</source>
        <translation>&amp;Efectes a totes les Pàgines</translation>
    </message>
    <message>
        <source>&amp;Use Encryption</source>
        <translation>&amp;Usa Encriptació</translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation>Contrassenyes</translation>
    </message>
    <message>
        <source>&amp;User:</source>
        <translation>&amp;Usuari:</translation>
    </message>
    <message>
        <source>&amp;Owner:</source>
        <translation>&amp;Propietari:</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation>Paràmetres</translation>
    </message>
    <message>
        <source>Allow &amp;Printing the Document</source>
        <translation>Permet Im&amp;primir el Document</translation>
    </message>
    <message>
        <source>Allow &amp;Changing the Document</source>
        <translation>Permet &amp;Canviar el Document</translation>
    </message>
    <message>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation>Permet Cop&amp;iar Text i Gràfics</translation>
    </message>
    <message>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation>Permet Afegir &amp;Anotacions i Camps</translation>
    </message>
    <message>
        <source>S&amp;ecurity</source>
        <translation>S&amp;eguretat</translation>
    </message>
    <message>
        <source>General</source>
        <translation>General</translation>
    </message>
    <message>
        <source>Output &amp;Intended For:</source>
        <translation>&amp;Sortida Preparada Per:</translation>
    </message>
    <message>
        <source>Screen / Web</source>
        <translation>Pantalla / Web</translation>
    </message>
    <message>
        <source>Printer</source>
        <translation>Impressora</translation>
    </message>
    <message>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation>&amp;Paràmetres de Representació Personalitzada</translation>
    </message>
    <message>
        <source>Rendering Settings</source>
        <translation>Paràmetres de Representació</translation>
    </message>
    <message>
        <source>Fre&amp;quency:</source>
        <translation>Fre&amp;qüència:</translation>
    </message>
    <message>
        <source>&amp;Angle:</source>
        <translation>&amp;Angle:</translation>
    </message>
    <message>
        <source>S&amp;pot Function:</source>
        <translation>Funció d&apos;Esquit&amp;xar:</translation>
    </message>
    <message>
        <source>Simple Dot</source>
        <translation>Punt Simple</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Línia</translation>
    </message>
    <message>
        <source>Round</source>
        <translation>Rodona</translation>
    </message>
    <message>
        <source>Ellipse</source>
        <translation>Elipse</translation>
    </message>
    <message>
        <source>Solid Colors:</source>
        <translation>Colors Sòlids:</translation>
    </message>
    <message>
        <source>Use ICC Profile</source>
        <translation>Usar Perfils ICC</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation>Perfils:</translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation>Intent de representació:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Perceptual</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Colorimètric Relatiu</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Saturació</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Colorimètric Absolut</translation>
    </message>
    <message>
        <source>Images:</source>
        <translation>Imatges:</translation>
    </message>
    <message>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation>No fer servir perfils encastats ICC</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation>C&amp;olor</translation>
    </message>
    <message>
        <source>PDF/X-3 Output Intent</source>
        <translation>Sortida a PDF/X-3 </translation>
    </message>
    <message>
        <source>&amp;Info String:</source>
        <translation>Cadena d&apos;&amp;Informació:</translation>
    </message>
    <message>
        <source>Output &amp;Profile:</source>
        <translation>&amp;Perfil de Sortida:</translation>
    </message>
    <message>
        <source>Trim Box</source>
        <translation>Caixa de Retallat</translation>
    </message>
    <message>
        <source>PDF/X-&amp;3</source>
        <translation>PDF/X-&amp;3</translation>
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
        <translation>po</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Desa</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>Export all pages to PDF</source>
        <translation>Exporta pàgines a PDF</translation>
    </message>
    <message>
        <source>Export a range of pages to PDF</source>
        <translation>Exporta rang de pàgines a PDF</translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know
you need to change it leave the default choice - Left.</source>
        <translation>Determina el &quot;binding&quot; de les pàgines en el PDF. A menys que sàpigues
que necessites canviar-lo deixa el valor per defecte - Esquerra.</translation>
    </message>
    <message>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation>Genera Articles PDF, això és útil per navegar pels articles del PDF.</translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document.
These are useful for navigating long PDF documents.</source>
        <translation>Encasta els punts creats en el document.
Això és útil per navegar per PDFs que són grans.</translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics.
This does not affect the resolution of bitmap images like photos.</source>
        <translation>Redueix la resolució del text i els gràfics vectorials.
Això no afecta la resolució de les imatges bitmap com les fotos.</translation>
    </message>
    <message>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation>DPI (Punts per polzada) per exportació d&apos;imatges.</translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts
will preserve the layout and appearance of your document.</source>
        <translation>Encasta fonts en el PDF. Encastar les fonts
preservarà la distribució i l&apos;apariència del teu document .</translation>
    </message>
    <message>
        <source>Enables presentation effects when using Acrobat Reader in full screen mode.</source>
        <translation>Activa efectes de presentació en Acrobat Reader a pantalla senzera.</translation>
    </message>
    <message>
        <source>Show page previews of each page listed above.</source>
        <translation>Mostra previsualització de cada pàgina llistada a sota.</translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page.</source>
        <translation>Temps en que la pàgina es mostrarà abans de que la presentació comenci en la pàgina actual.</translation>
    </message>
    <message>
        <source>Length of time the effect runs.
A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation>La duració de l&apos;efecte.
Un temps més curt farà que l&apos;efecte sigui més ràpid, i a l&apos;inversa.</translation>
    </message>
    <message>
        <source>Type of the display effect.</source>
        <translation>Tipus d&apos;efecte per pantalla.</translation>
    </message>
    <message>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation>Direcció del moviment de les línies d&apos;efecte de Separació i Blind.</translation>
    </message>
    <message>
        <source>Starting position for the box and split effects.</source>
        <translation>Posició d&apos;inici dels efectes de Caixa i Separació.</translation>
    </message>
    <message>
        <source>Direction of the glitter or wipe effects.</source>
        <translation>Direcció dels efectes de brillantor o neteja.</translation>
    </message>
    <message>
        <source>Apply the selected effect to all pages.</source>
        <translation>Aplica l&apos;efecte actual a totes les pàgines.</translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF.
If you selected Acrobat 4.0, the PDF will be protected by 40 bit encryption.
If you selected Acrobat 5.0, the PDF will be protected by 128 bit encryption.
Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation>Activa les característiques de seguretat en el PDF.
Si tries Acrobat 4.0, el PDF estarà protegit per encriptació de 40 bits.
Si tries Acrobat 5.0, el PDF estarà protegit per encriptació de 128 bits.
Atenció: La encriptació de PDF no és tan bona com la de GPG o PGP i també té algunes limitacions.</translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the
security features in your exported PDF</source>
        <translation>Tria una contrassenya mestra que activarà o desactivarà les
característiques de seguretat del PDF generat</translation>
    </message>
    <message>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation>Tria un password perquè els usuaris puguin llegir el PDF.</translation>
    </message>
    <message>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation>Permet imprimir el PDF. Si no està marcat, no ho permet.</translation>
    </message>
    <message>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation>Permet modificar el PDF. Si no està marcat, no es permet modificar el PDF.</translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. 
If un-checked, text and graphics cannot be copied.</source>
        <translation>Permet copiar text o gràfics del PDF.
Si no està marcat, no es pot copiar text ni gràfics.</translation>
    </message>
    <message>
        <source>Color model for the output of your PDF.
Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets.
Choose Printer when printing to a true 4 color CMYK printer.</source>
        <translation>Model de color per la sortida del PDF.
Tria Pantalla/Web per PDFs que es llegiran per pantalla i imprimiran en impressores d&apos;injecció.
Tria Impressora per imprimir en impressores de 4 colors CMYK.</translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled
when specifically requested by your printer and they have given you the exact details needed.
Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation>Aquesta és una característica avançada no activada per defecte. Només s&apos;ha d&apos;activar
quan l&apos;impressor te l&apos;hagi demanat específicament i t&apos;hagi donat els requisits necessaris.
Altrament, el teu PDF no s&apos;imprimirà correctament i no serà portable entre plataformes.</translation>
    </message>
    <message>
        <source>Embed a color profile for solid colors</source>
        <translation>Encasta un perfil de color per colors sòlids</translation>
    </message>
    <message>
        <source>Color profile for solid colors</source>
        <translation>Perfil de color per colors sòlids</translation>
    </message>
    <message>
        <source>Rendering intent for solid colors</source>
        <translation>Representació per colors sòlids</translation>
    </message>
    <message>
        <source>Embed a color profile for images</source>
        <translation>Encasta un perfil de color per imatges</translation>
    </message>
    <message>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation>No fer servir perfils de color encastats en les imatges </translation>
    </message>
    <message>
        <source>Color profile for images</source>
        <translation>Perfil de color per imatges</translation>
    </message>
    <message>
        <source>Rendering intent for images</source>
        <translation>Representació per imatges</translation>
    </message>
    <message>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation>Perfil de sortida per impressió. Si pots, demana consells al teu impressor sobre la tria de perfils.</translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail
PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation>Cadena obligatòria per PDF/X3 o el PDF fallarà.
Ajustos PDF/X-3. Recomanem fer servir el títol del document.</translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation>Distància de la sangria des de dalt de la pàgina real</translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation>Distància de la sangria des de baix de la pàgina real</translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation>Distància de la sangria des de l&apos;esquerra de la pàgina real</translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation>Distància de la sangria des de la dreta de la pàgina real</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Anomena i Desa</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>Fitxers PDF (*.pdf);;Tots els fitxers (*)</translation>
    </message>
    <message>
        <source>Compress Text and &amp;Vector Graphics</source>
        <translation>Comprimir Text i gràfics &amp;Vectorials</translation>
    </message>
    <message>
        <source>En&amp;able Presentation Effects</source>
        <translation>&amp;Activa Efectes de Presentació</translation>
    </message>
    <message>
        <source>&amp;Presentation</source>
        <translation>&amp;Presentació</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Rotació:</translation>
    </message>
    <message>
        <source>&amp;Subset all Fonts</source>
        <translation>Agrupa totes les Font&amp;s</translation>
    </message>
    <message>
        <source>Fonts to subset:</source>
        <translation>Fonts a agrupar:</translation>
    </message>
    <message>
        <source>Mirror Page(s) horizontally</source>
        <translation>Enmiralla la Pàgina(es) horitzontalment</translation>
    </message>
    <message>
        <source>Mirror Page(s) vertically</source>
        <translation>Enmiralla la Pàgina(es) verticalment</translation>
    </message>
    <message>
        <source>Save as PDF</source>
        <translation>Desa com PDF</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Color management must be enabled to use PDF/X-3. You can enable color management from the Settings menu.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;La gestió del color s&apos;ha d&apos;activar per fer servir PDF/X-3. Pots activar la gestió de color en el menú Preferències.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;PDF/X-3 is supported and enabled, but can not be used for the selected PDF version. If you want to use PDF/X-3, you need to set PDF/X-3 as your PDF version (compatibility level).&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;PDF/X-3 està suportat i activat, però no es pot fer servir per la versió de PDF seleccionada. Si vols fer servir PDF/X-3, necessites activar PDF/X-3 com a versió de PDF (nivell de compatibilitat).&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;PDF/X-3 is not supported by this Scribus build (CMS support not present).&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;PDF/X-3 no és suportat en aquesta compilació d&apos;Scribus (no hi ha suport CMS).&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. 
If un-checked, editing annotations and fields is prevented.</source>
        <translation>Permet afegir anotacions i camps al PDF.
Si està desmarcat, la edició d&apos;anotacions i camps no es permet.</translation>
    </message>
    <message>
        <source>PDF security settings</source>
        <translation>Paràmetres de seguretat PDF</translation>
    </message>
    <message>
        <source>PDF/X-3 settings</source>
        <translation>Paràmetres PDF/X-3</translation>
    </message>
    <message>
        <source>&lt;qt&gt;PDF security can not be used with PDF/X-3. If you want to turn on security, change your PDF version (compatibility level) to something other than PDF/X-3.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;La seguretat PDF no es pot fer servir amb PDF/X-3. Si vols activar la seguretat, has de canviar la versió de PDF (nivell de compatibilitat) a alguna cosa que no sigu PDF/X-3.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source> Lossless compression of text and graphics.
Unless you have a reason, leave this checked. This reduces PDF size.</source>
        <translation> Compressió sense pèrdua de text i gràfics.
A menys que tinguis una bona raó, deixà això marcat. Redueix la mida dels PDF.</translation>
    </message>
    <message>
        <source>Determines the PDF compatibility. The default is Acrobat 4.0 which gives the widest compatibility. Choose Acrobat 5.0 if your file has PDF 1.4 features such as transparency or you require 128 bit encryption. PDF/X-3 is for exporting the PDF when you want color managed RGB for commercial printing and is selectable when you have activated color management. Note: PDF/X-3 will convert all CMYK images to ICC based RGB colors. Use only when advised by your printer or in some cases printing to a 4 color digital color laser printer.</source>
        <translation>Determina la compatibilitat del PDF. Per defecte Acrobat 4.0 és el que dóna la millor compatibilitat. Tria Acrobat 5.0 si el PDF tindrà característiques com transparència o necessita encriptació de 128 bits. PDF/X-3 és per exportar el PDF quan es vol color gestionat RGB per impressió comercial i es pot triar quan s&apos;hagi activat la gestió del color. Nota: PDF/X-3 convertirà totes les imatges CMYK a imatges RGB basades en ICC. Fes-ho servir només quan t&apos;ho hagi demanat el teu impressor o en alguns casos imprimint en una impressora laser digital de 4 colors.</translation>
    </message>
    <message>
        <source>Image Compression Methods</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>JPEG - Lossy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zip - Lossless</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF. Some viewers can use the thumbnails for navigation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Method of compression to use for images. Automatic allows Scribus to choose the best method. ZIP is lossless and good for images with solid colors. JPEG is better at creating smaller PDF files which have many photos (with slight image quality loss possible). Leave it set to Automatic, unless you have a need for special compression options. This only applies to JPEG images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Compression levels: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%) - This only affects JPEG images.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Re-sample your bitmap images to the selected DPI. Leaving this unchecked will render them at their native resolution. This can increase memory usage and slow down export.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PPreview</name>
    <message>
        <source>Print Preview</source>
        <translation>Previsualització</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Text</source>
        <translation>Antiàlies de &amp;Text</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Graphics</source>
        <translation>Antiàlies de &amp;Gràfics</translation>
    </message>
    <message>
        <source>Display Trans&amp;parency</source>
        <translation>Mostra Trans&amp;parències</translation>
    </message>
    <message>
        <source>&amp;Under Color Removal</source>
        <translation>Sobre Elimina&amp;r Color</translation>
    </message>
    <message>
        <source>&amp;Display CMYK</source>
        <translation>&amp;Mostra CMYK</translation>
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
        <translation>Dóna un punt de vista més agradabe dels items de text en el visor, a canvi
d&apos;un petit ralentiment de la previsualització. Només afecta les fonts Type 1</translation>
    </message>
    <message>
        <source>Shows transparency and transparent items in your document. Requires Ghostscript 7.07 or later</source>
        <translation>Mostra transparències i ítems transparents en el document. Requereix Ghostcript 7.07 o posterior</translation>
    </message>
    <message>
        <source>Gives a print preview using simulations of generic CMYK inks, instead of RGB colors</source>
        <translation>Permet a la previsualització simular l&apos;ús de tintes CMYK en comptes de colors RGB</translation>
    </message>
    <message>
        <source>Enable/disable the C (Cyan) ink plate</source>
        <translation>Activa/desactiva la placa de tinta C(Cian) </translation>
    </message>
    <message>
        <source>Enable/disable the M (Magenta) ink plate</source>
        <translation>Activa/desactiva la placa de tinta M(Magenta)</translation>
    </message>
    <message>
        <source>Enable/disable the Y (Yellow) ink plate</source>
        <translation>Activa/desactiva la placa de tinta Y(Groc)</translation>
    </message>
    <message>
        <source>Enable/disable the K (Black) ink plate</source>
        <translation>Activa/desactiva la placa de tinta K(Negre)</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Tot</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>Una forma d&apos;apagar algunes de les intensitats de grisos que estan 
composades per cian, groc i magenta però es veuen negres.
UCR pot afectar parts de imatges que són de color neutral o de tons foscos
propers a gris. Fes servir això pot millorar la impressió d&apos;algunes imatges 
però cal algunes proves i experimentació per cada cas.
UCR redueix la possibilitat de sobre saturar amb tintes CMY.</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of TrueType Fonts, OpenType Fonts, EPS, PDF and
vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation>Dóna una visió més agradable de les fonts TrueType, OpenType, EPS, PDF i 
els gràfics vectorials en la previsualització, però la previsualitació serà més lenta</translation>
    </message>
</context>
<context>
    <name>Page</name>
    <message>
        <source>Copy Here</source>
        <translation>Copia Aquí</translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation>Mou Aquí</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancel.la</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Enganxa</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation>Mostra &amp;Marges</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation>Mostra &amp;Marcs</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation>Mostra &amp;Imatges</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation>Mostra &amp;Reixa</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation>Mostra G&amp;uies</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation>Mostra Reixa &amp;Base</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation>Desplaça &amp;a la Reixa</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation>Des&amp;plaça a les Guies</translation>
    </message>
    <message>
        <source>Picture</source>
        <translation>Imatge</translation>
    </message>
    <message>
        <source>File: </source>
        <translation>Fitxer:</translation>
    </message>
    <message>
        <source>Original PPI: </source>
        <translation>Original PPI:</translation>
    </message>
    <message>
        <source>Actual PPI: </source>
        <translation>Actual PPI:</translation>
    </message>
    <message>
        <source>Linked Text</source>
        <translation>Text enllaçat</translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation>Marc de Text</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation>Text en un Camí</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation>Paràgrafs:</translation>
    </message>
    <message>
        <source>Words: </source>
        <translation>Paraules:</translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation>Lletres:</translation>
    </message>
    <message>
        <source>Print: </source>
        <translation>Impressió:</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Activat</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Desactivat</translation>
    </message>
    <message>
        <source>In&amp;fo</source>
        <translation>In&amp;formació</translation>
    </message>
    <message>
        <source>&amp;Get Picture...</source>
        <translation>&amp;Obtenir Imatge...</translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation>I&amp;matge Visible</translation>
    </message>
    <message>
        <source>&amp;Update Picture</source>
        <translation>&amp;Actualitza Imatge</translation>
    </message>
    <message>
        <source>&amp;Edit Picture</source>
        <translation>&amp;Edita Imatge</translation>
    </message>
    <message>
        <source>&amp;Adjust Frame to Picture</source>
        <translation>&amp;Ajusta Marc a la Imatge</translation>
    </message>
    <message>
        <source>&amp;Get Text...</source>
        <translation>&amp;Obtenir Text...</translation>
    </message>
    <message>
        <source>&amp;Append Text...</source>
        <translation>&amp;Afegeix Text...</translation>
    </message>
    <message>
        <source>&amp;Edit Text...</source>
        <translation>&amp;Editar Text...</translation>
    </message>
    <message>
        <source>Is PDF &amp;Bookmark</source>
        <translation>Es un P&amp;unt de PDF</translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation>És una A&amp;notació de PDF</translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation>P&amp;ropietats Anotació</translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation>P&amp;ropietats de Camp</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation>Opcions &amp;PDF</translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation>Edita Text...</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation>&amp;Bloqueja</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation>DesB&amp;loqueja</translation>
    </message>
    <message>
        <source>Lock Object &amp;Size</source>
        <translation>Bloqueja &amp;Mida</translation>
    </message>
    <message>
        <source>Unlock Object &amp;Size</source>
        <translation>Desbloqueja M&amp;ida</translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation>Envia a l&apos;àlbum de &amp;retalls</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation>Envia a la Ca&amp;pa</translation>
    </message>
    <message>
        <source>&amp;Insert Sample Text</source>
        <translation>&amp;Inserir Text de Mostra</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation>A&amp;grupa</translation>
    </message>
    <message>
        <source>Un&amp;group</source>
        <translation>Desa&amp;grupa</translation>
    </message>
    <message>
        <source>Le&amp;vel</source>
        <translation>Ni&amp;vell</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation>Envia al &amp;fons</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation>Envia a &amp;Davant</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation>&amp;Abaixa</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation>A&amp;puja</translation>
    </message>
    <message>
        <source>&amp;Picture Frame</source>
        <translation>&amp;Marc d&apos;Imatge</translation>
    </message>
    <message>
        <source>Pol&amp;ygon</source>
        <translation>Polí&amp;gon</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <translation>&amp;Esquemes</translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation>Marc de &amp;Text</translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation>Corba &amp;Bezier</translation>
    </message>
    <message>
        <source>Conve&amp;rt to</source>
        <translation>Conve&amp;rteix a</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>T&amp;alla</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copia</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Es&amp;borra</translation>
    </message>
    <message>
        <source>C&amp;lear Contents</source>
        <translation>Neteja C&amp;ontingut</translation>
    </message>
    <message>
        <source>Show P&amp;roperties...</source>
        <translation>Mostra P&amp;ropietats...</translation>
    </message>
    <message>
        <source>Hide P&amp;roperties...</source>
        <translation>Amaga P&amp;ropietats...</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Cap</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Avís</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation>Realment vols esborrar tot el Text?</translation>
    </message>
    <message>
        <source>The Program</source>
        <translation>El Programa</translation>
    </message>
    <message>
        <source>is missing!</source>
        <translation>està perdut!</translation>
    </message>
</context>
<context>
    <name>PageItem</name>
    <message>
        <source>Image</source>
        <translation>Imatge</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Text</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Línia</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Polígon</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation>Polilínia</translation>
    </message>
    <message>
        <source>PathText</source>
        <translation>Camí de Text</translation>
    </message>
</context>
<context>
    <name>PageSelector</name>
    <message>
        <source>Page </source>
        <translation>Pàgina</translation>
    </message>
    <message>
        <source> of %1</source>
        <translation>de %1</translation>
    </message>
</context>
<context>
    <name>PicSearch</name>
    <message>
        <source>Result</source>
        <translation>Resultat</translation>
    </message>
    <message>
        <source>Search Results for: </source>
        <translation>Busca Resultats per:</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Previsualitzar</translation>
    </message>
    <message>
        <source>Select</source>
        <translation>Selecciona</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancel.la</translation>
    </message>
</context>
<context>
    <name>PicStatus</name>
    <message>
        <source>Pictures</source>
        <translation>Imatges</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nom</translation>
    </message>
    <message>
        <source>Path</source>
        <translation>Camí</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Pàgina</translation>
    </message>
    <message>
        <source>Print</source>
        <translation>Imprimir</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Estat</translation>
    </message>
    <message>
        <source>Goto</source>
        <translation>Anar a</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Si</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
    <message>
        <source>Missing</source>
        <translation>Perdut</translation>
    </message>
    <message>
        <source>Search</source>
        <translation>Cerca</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
</context>
<context>
    <name>PolygonProps</name>
    <message>
        <source>Polygon Properties</source>
        <translation>Propietats del Polígon</translation>
    </message>
    <message>
        <source>Corn&amp;ers:</source>
        <translation>Can&amp;tos:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Rotació:</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation>Aplica &amp;Factor</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation>&amp;Factor:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation>Número de vèrtex pels polígons</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation>Graus de rotació dels polígons</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation>Aplica factor Convex/Concau per canviar la forma del Polígon</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation>Polígon de Mostra</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation>Un valor negatiu farà el polígon concau ( o de forma estrellada),
i un valor positiu el farà convex</translation>
    </message>
</context>
<context>
    <name>Preferences</name>
    <message>
        <source>Preferences</source>
        <translation>Preferències</translation>
    </message>
    <message>
        <source>General</source>
        <translation>General</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Document</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation>Guies</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation>Tipografia</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation>Eines</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation>Àlbum de retalls</translation>
    </message>
    <message>
        <source>Display</source>
        <translation>Pantalla</translation>
    </message>
    <message>
        <source>External Tools</source>
        <translation>Eines Externes</translation>
    </message>
    <message>
        <source>Misc.</source>
        <translation>Misc.</translation>
    </message>
    <message>
        <source>GUI</source>
        <translation>GUI</translation>
    </message>
    <message>
        <source>&amp;Theme:</source>
        <translation>&amp;Tema:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation>Mida de &amp;Font:</translation>
    </message>
    <message>
        <source>Units</source>
        <translation>Unitats</translation>
    </message>
    <message>
        <source>Points (pt)</source>
        <translation>Punts (pts)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation>Milímetres (mm)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation>Polzades (po)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation>Piques (p)</translation>
    </message>
    <message>
        <source>Mouse Settings</source>
        <translation>Paràmetres del Ratolí</translation>
    </message>
    <message>
        <source>&amp;Wheel Jump:</source>
        <translation>&amp;Salt de Roda:</translation>
    </message>
    <message>
        <source> px</source>
        <translation>px</translation>
    </message>
    <message>
        <source>&amp;Grab Radius:</source>
        <translation>&amp;Radi de Captura:</translation>
    </message>
    <message>
        <source>Menus</source>
        <translation>Menus</translation>
    </message>
    <message>
        <source>&amp;Recent Documents:</source>
        <translation>Documents &amp;Recents:</translation>
    </message>
    <message>
        <source>Paths</source>
        <translation>Camins</translation>
    </message>
    <message>
        <source>&amp;Documents:</source>
        <translation>&amp;Documents:</translation>
    </message>
    <message>
        <source>&amp;Change...</source>
        <translation>&amp;Canvi...</translation>
    </message>
    <message>
        <source>&amp;ICC Profiles:</source>
        <translation>Perfils &amp;ICC:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>C&amp;anvi...</translation>
    </message>
    <message>
        <source>&amp;Scripts:</source>
        <translation>&amp;Seqüències: </translation>
    </message>
    <message>
        <source>Ch&amp;ange...</source>
        <translation>C&amp;anvi...</translation>
    </message>
    <message>
        <source>T&amp;emplates:</source>
        <translation>Plantill&amp;es:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation>Ca&amp;nvi...</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Mida de Pàgina</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalitzat</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Mida:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Vertical</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Apaisat</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Orie&amp;ntació:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Amplada:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>A&amp;lçada:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation>Pàgines &amp;Encarades</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation>Primera &amp;Pàgina Esquerra</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Guia de Marges</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>&amp;Baix:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>Dal&amp;t:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>&amp;Dreta:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Esquerra:</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation>Autodesat</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation>&amp;Activat</translation>
    </message>
    <message>
        <source>min</source>
        <translation>min</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation>&amp;Interval:</translation>
    </message>
    <message>
        <source>Grid Layout</source>
        <translation>Distribució de Reixa</translation>
    </message>
    <message>
        <source>M&amp;inor Grid Spacing:</source>
        <translation>Espai pet&amp;it de Reixa:</translation>
    </message>
    <message>
        <source>Ma&amp;jor Grid Spacing:</source>
        <translation>Espai &amp;Gran de Reixa:</translation>
    </message>
    <message>
        <source>Guide &amp;Snap Distance:</source>
        <translation>De&amp;splaçament de Guia:</translation>
    </message>
    <message>
        <source>Grid Colors</source>
        <translation>Colors de Reixa</translation>
    </message>
    <message>
        <source>Min&amp;or Grid Color:</source>
        <translation>Color de Reixa Pe&amp;tita:</translation>
    </message>
    <message>
        <source>Majo&amp;r Grid Color:</source>
        <translation>Color de Reixa G&amp;ran:</translation>
    </message>
    <message>
        <source>&amp;User Guides Color:</source>
        <translation>Color de Guies d&apos;&amp;Usuari:</translation>
    </message>
    <message>
        <source>Base&amp;line Grid Color:</source>
        <translation>Co&amp;lor de Reixa Base:</translation>
    </message>
    <message>
        <source>Placing</source>
        <translation>Colocant</translation>
    </message>
    <message>
        <source>In the &amp;Background</source>
        <translation>e&amp;n Segon Pla</translation>
    </message>
    <message>
        <source>In the Fore&amp;ground</source>
        <translation>en &amp;Primer Pla</translation>
    </message>
    <message>
        <source>Baseline Grid</source>
        <translation>Reixa Base</translation>
    </message>
    <message>
        <source>O&amp;n</source>
        <translation>O&amp;n</translation>
    </message>
    <message>
        <source>O&amp;ff</source>
        <translation>O&amp;ff</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation>Subíndex</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>&amp;Displacement:</source>
        <translation>&amp;Desplaçament:</translation>
    </message>
    <message>
        <source>&amp;Scaling:</source>
        <translation>E&amp;scalat:</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation>Superíndex</translation>
    </message>
    <message>
        <source>D&amp;isplacement:</source>
        <translation>De&amp;splaçament:</translation>
    </message>
    <message>
        <source>S&amp;caling:</source>
        <translation>Es&amp;calat:</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation>Majúscules Petites</translation>
    </message>
    <message>
        <source>Sc&amp;aling:</source>
        <translation>Es&amp;calat:</translation>
    </message>
    <message>
        <source>Other</source>
        <translation>Altres</translation>
    </message>
    <message>
        <source>Baseline &amp;Grid:</source>
        <translation>&amp;Reixa Base:</translation>
    </message>
    <message>
        <source>Baseline &amp;Offset:</source>
        <translation>C&amp;ompensa Linea Base:</translation>
    </message>
    <message>
        <source>Automatic &amp;Line Spacing:</source>
        <translation>Inter&amp;lineat Automàtic:</translation>
    </message>
    <message>
        <source>Default &amp;Font:</source>
        <translation>&amp;Font per Defecte:</translation>
    </message>
    <message>
        <source>Default &amp;Size:</source>
        <translation>&amp;Mida per defecte:</translation>
    </message>
    <message>
        <source>&amp;Text Color:</source>
        <translation>Color de &amp;Text:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>Colu&amp;mnes:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>&amp;Buit:</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation>Woven silk pyjamas exchanged for blue quartz</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Cap</translation>
    </message>
    <message>
        <source>&amp;Line Color:</source>
        <translation>Color de &amp;Línia:</translation>
    </message>
    <message>
        <source>&amp;Shading:</source>
        <translation>Inten&amp;sitat:</translation>
    </message>
    <message>
        <source>&amp;Fill Color:</source>
        <translation>Color d&apos;&amp;Emplenat:</translation>
    </message>
    <message>
        <source>S&amp;hading:</source>
        <translation>Intensit&amp;at:</translation>
    </message>
    <message>
        <source>&amp;Type of Line:</source>
        <translation>&amp;Tipus de Línia:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation>&amp;Gruix Línia:</translation>
    </message>
    <message>
        <source>Mi&amp;nimum:</source>
        <translation>Mí&amp;nim:</translation>
    </message>
    <message>
        <source>Ma&amp;ximum:</source>
        <translation>Mà&amp;xim:</translation>
    </message>
    <message>
        <source>&amp;Stepping:</source>
        <translation>&amp;Increment:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation>Escalat Lli&amp;ure</translation>
    </message>
    <message>
        <source>&amp;Horizontal Scaling:</source>
        <translation>Escalat &amp;Horitzontal:</translation>
    </message>
    <message>
        <source>&amp;Vertical Scaling:</source>
        <translation>Escalat &amp;Vertical:</translation>
    </message>
    <message>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation>E&amp;scala Imatge a Mida de Marc</translation>
    </message>
    <message>
        <source>Keep Aspect &amp;Ratio</source>
        <translation>Manteni&amp;r l&apos;aspecte</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation>Color d&apos;&amp;Emplenat:</translation>
    </message>
    <message>
        <source>Corn&amp;ers:</source>
        <translation>Vert&amp;ex:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Rotació:</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation>Aplica &amp;Factor</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation>&amp;Factor:</translation>
    </message>
    <message>
        <source>Other Options</source>
        <translation>Altres Opcions</translation>
    </message>
    <message>
        <source>Sa&amp;ve Contents on Changes</source>
        <translation>Desa Contingut dels Can&amp;vis</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Previsualitzar</translation>
    </message>
    <message>
        <source>Small</source>
        <translation>Petita</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation>Mitjana</translation>
    </message>
    <message>
        <source>Large</source>
        <translation>Gran</translation>
    </message>
    <message>
        <source>Display Pages &amp;Side by Side</source>
        <translation>Mostra Pàgines Co&amp;stat per Costat</translation>
    </message>
    <message>
        <source>Page Colors</source>
        <translation>Colors de Pàgina</translation>
    </message>
    <message>
        <source>&amp;Background:</source>
        <translation>Sego&amp;n Pla:</translation>
    </message>
    <message>
        <source>&amp;Margins:</source>
        <translation>&amp;Marges:</translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation>Mostra àrea no imprimible en C&amp;olor de marge</translation>
    </message>
    <message>
        <source>Use PDF 1.4 &amp;Transparency Features</source>
        <translation>Característiques de &amp;Transparècies PDF 1.4</translation>
    </message>
    <message>
        <source>&amp;Adjust Display Size</source>
        <translation>&amp;Ajusta Mida de Pantalla</translation>
    </message>
    <message>
        <source>To adjust the display drag the ruler below with the Slider.</source>
        <translation>Per ajustar la pantalla arrossega el desplaçador pel regle.</translation>
    </message>
    <message>
        <source>&amp;Name of Executable:</source>
        <translation>&amp;Nom de l&apos;Executable:</translation>
    </message>
    <message>
        <source>Antialias &amp;Text</source>
        <translation>&amp;Text Antiàlies </translation>
    </message>
    <message>
        <source>Antialias &amp;Graphics</source>
        <translation>&amp;Gràfics Antiàlies</translation>
    </message>
    <message>
        <source>Image Processing Tool</source>
        <translation>Eina de Processat d&apos;Imatges</translation>
    </message>
    <message>
        <source>Name of &amp;Executable:</source>
        <translation>Nom de l&apos;&amp;Executable:</translation>
    </message>
    <message>
        <source>Printing</source>
        <translation>Imprimint</translation>
    </message>
    <message>
        <source>Clip to Page &amp;Margins</source>
        <translation>Retalla a &amp;Marges de Pàgina</translation>
    </message>
    <message>
        <source>Apply &amp;Under Color Removal</source>
        <translation>Aplica sobre Elimina&amp;r Color</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>Choose the default window decoration and looks.
Scribus inherits any available KDE or Qt themes</source>
        <translation>Tria la decoració i l&apos;aspecte de finestres per defecte .
Scribus hereta qualsevol tema de KDE disponible</translation>
    </message>
    <message>
        <source>Default font size for the menus and windows</source>
        <translation>Mida per defecte de les fonts dels menus i finestres</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation>Unitats de mesura per defecte en la edició</translation>
    </message>
    <message>
        <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
        <translation>Número de línies que escribus es mourà en els moviments de la rodeta</translation>
    </message>
    <message>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation>Radi de l&apos;àrea on Scribus pemetrà capturar objectes</translation>
    </message>
    <message>
        <source>Number of recently edited documents to show in the File menu</source>
        <translation>Número de documents oberts recentment a mostrar en el menu Fitxer</translation>
    </message>
    <message>
        <source>Default documents directory</source>
        <translation>Directori de documents per defecte</translation>
    </message>
    <message>
        <source>Default Scripter scripts directory</source>
        <translation>Directori de seqüències per defecte</translation>
    </message>
    <message>
        <source>Additional Directory for Document Templates</source>
        <translation>Directori adicional per Plantilles de Document</translation>
    </message>
    <message>
        <source>Default page size, either a standard size or a custom size</source>
        <translation>Mida de pàgina per defecte, mida estàndard i/o personalitzada</translation>
    </message>
    <message>
        <source>Default orientation of document pages</source>
        <translation>Orientació per defecte dels documents</translation>
    </message>
    <message>
        <source>Width of document pages, editable if you have chosen a custom page size</source>
        <translation>Amplada de les pàgines del document, editable si tenim mida personalitzada</translation>
    </message>
    <message>
        <source>Height of document pages, editable if you have chosen a custom page size</source>
        <translation>Alçada de les pàgines del document, editable si tenim mida personalitzada</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation>Activa la distribució sola o extesa</translation>
    </message>
    <message>
        <source>Make the first page the left page of a document</source>
        <translation>Fer que la primera pàgina sigui a l&apos;esquerra</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Distància entre la guia superior i la vora del paper</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Distància entre la guia inferior i la vora del paper</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Distància entre el marge esquerre i la vora del paper.
Si tenim Pàgines Encarades, aquest espai es pot fer servir per trobar els marges per enquadernar</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Distància entre el marge dret i la vora del paper.
Si tenim Pàgines Encarades, aquest espai es pot fer servir per obtenir els marges per enquadernar</translation>
    </message>
    <message>
        <source>When enabled, Scribus saves a backup copy of your file with the .bak extension
each time the time period elapses</source>
        <translation>Quan s&apos;activa, Scribus fa una còpia del fitxer amb extensió .bak 
cada vegada que passa el període de temps</translation>
    </message>
    <message>
        <source>Time period between saving automatically</source>
        <translation>Temps per desar automàticament</translation>
    </message>
    <message>
        <source>Distance between the minor grid lines</source>
        <translation>Distància entre les línies de reixa petites</translation>
    </message>
    <message>
        <source>Distance between the major grid lines</source>
        <translation>Distància entre les línies de reixa grans</translation>
    </message>
    <message>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation>Distància en la qual un objecte des desplaçarà cap a les guies</translation>
    </message>
    <message>
        <source>Color of the minor grid lines</source>
        <translation>Color de les línies de reixa petites</translation>
    </message>
    <message>
        <source>Color of the major grid lines</source>
        <translation>Color de les línies de reixa grans</translation>
    </message>
    <message>
        <source>Color of the guide lines you insert</source>
        <translation>Color de les línies guia que inserim</translation>
    </message>
    <message>
        <source>Place the grid behind your page objects</source>
        <translation>Col.loca la reixa darrera els objectes</translation>
    </message>
    <message>
        <source>Place the grid in front of your page objects</source>
        <translation>Col.loca la reixa davant dels objectes</translation>
    </message>
    <message>
        <source>Displacement above the baseline of the font on a line</source>
        <translation>Desplaçament sobre la línia base de la font de la línia</translation>
    </message>
    <message>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation>Mida relativa del superíndex comparat amb la font normal</translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation>Desplaçament sota la línia base de la font de la línia</translation>
    </message>
    <message>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation>Mida relativa del subíndex comparat amb la font normal</translation>
    </message>
    <message>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation>Mida relativa del les majúscules petites comparades amb la font normal</translation>
    </message>
    <message>
        <source>Percentage increase over the font size for the line spacing</source>
        <translation>Percentatge d&apos;increment sobre la mida de font per interliniat</translation>
    </message>
    <message>
        <source>Text Frame Properties</source>
        <translation>Propietats de Marc de Text</translation>
    </message>
    <message>
        <source>Picture Frame Properties</source>
        <translation>Propietats de Marc d&apos;Imatge</translation>
    </message>
    <message>
        <source>Shape Drawing Properties</source>
        <translation>Propietats de la Forma del Dibuix</translation>
    </message>
    <message>
        <source>Magnification Level Defaults</source>
        <translation>Defecte de Nivell de Magnificació</translation>
    </message>
    <message>
        <source>Line Drawing Properties</source>
        <translation>Propietats del Dibuix de Línies</translation>
    </message>
    <message>
        <source>Polygon Drawing Properties</source>
        <translation>Propietats del Dibuix de Polígons</translation>
    </message>
    <message>
        <source>Font for new text frames</source>
        <translation>Font pels propers marcs</translation>
    </message>
    <message>
        <source>Size of font for new text frames</source>
        <translation>Mida de la font pels nous Marcs</translation>
    </message>
    <message>
        <source>Color of font</source>
        <translation>Color de la font</translation>
    </message>
    <message>
        <source>Number of columns in a text frame</source>
        <translation>Número de columnes en un text</translation>
    </message>
    <message>
        <source>Gap between text frame columns</source>
        <translation>Espai entre les columnes de text</translation>
    </message>
    <message>
        <source>Sample of your font</source>
        <translation>Exemple de la font</translation>
    </message>
    <message>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation>Els Marcs d&apos;Imatges es poden escalar a qualsevol mida</translation>
    </message>
    <message>
        <source>Horizontal scaling of images</source>
        <translation>Escalat Horitzontal d&apos;imatges</translation>
    </message>
    <message>
        <source>Vertical scaling of images</source>
        <translation>Escalat Vertical d&apos;imatges</translation>
    </message>
    <message>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation>Mantenir iguals l&apos;escalat horitzontal i vertical</translation>
    </message>
    <message>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation>Imatges en marcs d&apos;imatges són escalades a la mida del marc</translation>
    </message>
    <message>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation>Les imatges escalades automàticament mantenen les proporcions</translation>
    </message>
    <message>
        <source>Fill color of picture frames</source>
        <translation>Color d&apos;omplir Marcs d&apos;Imatges</translation>
    </message>
    <message>
        <source>Saturation of color of fill</source>
        <translation>Saturació del color d&apos;omplir el text</translation>
    </message>
    <message>
        <source>Line color of shapes</source>
        <translation>Color de Formes</translation>
    </message>
    <message>
        <source>Saturation of color of lines</source>
        <translation>Saturació del color de línies</translation>
    </message>
    <message>
        <source>Fill color of shapes</source>
        <translation>Color d&apos;emplenat de formes</translation>
    </message>
    <message>
        <source>Line style of shapes</source>
        <translation>Estil de línia de Formes</translation>
    </message>
    <message>
        <source>Line width of shapes</source>
        <translation>Gruix de línia de Formes</translation>
    </message>
    <message>
        <source>Minimum magnification allowed</source>
        <translation>Magnificació mínima permesa</translation>
    </message>
    <message>
        <source>Maximum magnification allowed</source>
        <translation>Magnificació màxima permesa</translation>
    </message>
    <message>
        <source>Change in magnification for each zoom operation</source>
        <translation>Canvis en la magnificació per cada desplaçament</translation>
    </message>
    <message>
        <source>Color of lines</source>
        <translation>Color de les línies</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation>Saturació del color</translation>
    </message>
    <message>
        <source>Style of lines</source>
        <translation>Estils de Línia</translation>
    </message>
    <message>
        <source>Width of lines</source>
        <translation>Gruix de línies</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation>Número de vèrtex dels polígons</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation>Graus de rotació dels polígons</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation>Aplica factor Convex/Concau per canviar la forma del Polígon</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation>Polígon de Mostra</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation>Un valor negatiu farà el polígon concau ( o de forma estrellada),
i un valor positiu el farà convex</translation>
    </message>
    <message>
        <source>Choose the size of the preview in the scrapbook palette</source>
        <translation>Tria la mida de previsualització en l&apos;àlbum de retalls</translation>
    </message>
    <message>
        <source>Save the scrapbook contents everytime after a change</source>
        <translation>Desa l&apos;àlbum després de cada canvi</translation>
    </message>
    <message>
        <source>When using facing pages, show the two pages side by side</source>
        <translation>Al fer servir pàgines acarades, motre-les de costat</translation>
    </message>
    <message>
        <source>Color for paper</source>
        <translation>Color del paper</translation>
    </message>
    <message>
        <source>Color for the margin lines</source>
        <translation>Color de les línies de marge</translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation>Marca l&apos;àrea fora de marges amb el color de marge</translation>
    </message>
    <message>
        <source>Enable transparency features within PDF 1.4 export</source>
        <translation>Activa característique de transparència amb PDF 1.4</translation>
    </message>
    <message>
        <source>Set the default zoom level</source>
        <translation>Estableix el nivell de zoom</translation>
    </message>
    <message>
        <source>Antialias text for EPS and PDF onscreen rendering</source>
        <translation>Text antialies per representació EPS i PDF en pantalla</translation>
    </message>
    <message>
        <source>Antialias graphics for EPS and PDF onscreen rendering</source>
        <translation>Gràfics antialies per representació EPS i PDF en pantalla</translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page or exported file</source>
        <translation>No mostrar els objectes que quedin fora dels marges a l&apos;imprimir o exportar</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Tria un Directori</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation>&amp;Dins:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation>&amp;Fora:</translation>
    </message>
    <message>
        <source> mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation>po</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>Executive</source>
        <translation>Executiu</translation>
    </message>
    <message>
        <source>Folio</source>
        <translation>Foli</translation>
    </message>
    <message>
        <source>Ledger</source>
        <translation>Llibre Major</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation>Carta</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation>Tabloide</translation>
    </message>
    <message>
        <source>Default ICC profiles directory. This cannot
be changed with documents open.</source>
        <translation>Directori per defecte dels perfils ICC. No es pot
canviar pels documents oberts.</translation>
    </message>
    <message>
        <source>Turns on the base grid</source>
        <translation>Activa la reixa base</translation>
    </message>
    <message>
        <source>Turns off the base grid</source>
        <translation>Desactiva la reixa base</translation>
    </message>
    <message>
        <source>File system location for graphics editor. If you use gimp
and your distro includes it, we recommend &apos;gimp-remote&apos;,
as it allows you to edit the image in an already running
instance of gimp.</source>
        <translation>Localització de l&apos;editor de gràfics. Si fas servir Gimp
i la teva distribució l&apos;inclou, et recomanem &apos;gimp-remote&apos;,
ja que permet editar la imatge en una instància de Gimp
que ja estigui engegada.</translation>
    </message>
    <message>
        <source>PostScript Interpreter</source>
        <translation>Interpret PostScript</translation>
    </message>
    <message>
        <source>File system location for the GhostScript interpreter</source>
        <translation>Localització de l&apos;interpret GhostScript</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis. UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QColorDialog</name>
    <message>
        <source>Hu&amp;e:</source>
        <translation>T&amp;on:</translation>
    </message>
    <message>
        <source>&amp;Sat:</source>
        <translation>&amp;Sat:</translation>
    </message>
    <message>
        <source>&amp;Val:</source>
        <translation>&amp;Val:</translation>
    </message>
    <message>
        <source>&amp;Red:</source>
        <translation>&amp;Vermell:</translation>
    </message>
    <message>
        <source>&amp;Green:</source>
        <translation>V&amp;erd:</translation>
    </message>
    <message>
        <source>Bl&amp;ue:</source>
        <translation>Bl&amp;au:</translation>
    </message>
    <message>
        <source>A&amp;lpha channel:</source>
        <translation>Canal A&amp;lfa:</translation>
    </message>
    <message>
        <source>&amp;Basic colors</source>
        <translation>Colors &amp;Bàsics</translation>
    </message>
    <message>
        <source>&amp;Custom colors</source>
        <translation>&amp;Colors Personalitzats</translation>
    </message>
    <message>
        <source>&amp;Define Custom Colors &gt;&gt;</source>
        <translation>&amp;Definir Colors personalitzats &gt;&gt;</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancel.la</translation>
    </message>
    <message>
        <source>&amp;Add to Custom Colors</source>
        <translation>&amp;Afegeix Colors Personalitzats</translation>
    </message>
    <message>
        <source>Select color</source>
        <translation>Tria Color</translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <source>Copy or Move a File</source>
        <translation>Copia o Mou un Fitxer</translation>
    </message>
    <message>
        <source>Read: %1</source>
        <translation>Llegir: %1</translation>
    </message>
    <message>
        <source>Write: %1</source>
        <translation>Escriure: %1</translation>
    </message>
    <message>
        <source>File &amp;name:</source>
        <translation>&amp;Nom Fitxer:</translation>
    </message>
    <message>
        <source>File &amp;type:</source>
        <translation>&amp;Tipus Fitxer:</translation>
    </message>
    <message>
        <source>One directory up</source>
        <translation>Directori amunt</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancel.la</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Tots els Fitxers (*)</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nom</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Mida</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Tipus</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Data</translation>
    </message>
    <message>
        <source>Attributes</source>
        <translation>Atributs</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
    <message>
        <source>Look &amp;in:</source>
        <translation>M&amp;ira a:</translation>
    </message>
    <message>
        <source>Back</source>
        <translation>Enrere</translation>
    </message>
    <message>
        <source>Create New Folder</source>
        <translation>Crea Nova Carpeta</translation>
    </message>
    <message>
        <source>List View</source>
        <translation>Vista de Llista</translation>
    </message>
    <message>
        <source>Detail View</source>
        <translation>Vista Detallada</translation>
    </message>
    <message>
        <source>Preview File Info</source>
        <translation>Preveure Informació</translation>
    </message>
    <message>
        <source>Preview File Contents</source>
        <translation>Preveure Contingut</translation>
    </message>
    <message>
        <source>Read-write</source>
        <translation>Llegir-Escriure</translation>
    </message>
    <message>
        <source>Read-only</source>
        <translation>Només Llegir</translation>
    </message>
    <message>
        <source>Write-only</source>
        <translation>Només Escriure</translation>
    </message>
    <message>
        <source>Inaccessible</source>
        <translation>Inaccessible</translation>
    </message>
    <message>
        <source>Symlink to File</source>
        <translation>Enllaç al Fitxer</translation>
    </message>
    <message>
        <source>Symlink to Directory</source>
        <translation>Enllaç al Directori</translation>
    </message>
    <message>
        <source>Symlink to Special</source>
        <translation>Enllaç a Especial</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Fitxer</translation>
    </message>
    <message>
        <source>Dir</source>
        <translation>Dir</translation>
    </message>
    <message>
        <source>Special</source>
        <translation>Especial</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Obre</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation>Anomena i desa</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Obre</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Desa</translation>
    </message>
    <message>
        <source>&amp;Rename</source>
        <translation>&amp;Reanomena</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Esborra</translation>
    </message>
    <message>
        <source>R&amp;eload</source>
        <translation>Re&amp;carregar</translation>
    </message>
    <message>
        <source>Sort by &amp;Name</source>
        <translation>Ordena per &amp;Nom</translation>
    </message>
    <message>
        <source>Sort by &amp;Size</source>
        <translation>Ordena per &amp;Mida</translation>
    </message>
    <message>
        <source>Sort by &amp;Date</source>
        <translation>Ordena per &amp;Data</translation>
    </message>
    <message>
        <source>&amp;Unsorted</source>
        <translation>&amp;Desordenat</translation>
    </message>
    <message>
        <source>Sort</source>
        <translation>Ordenar</translation>
    </message>
    <message>
        <source>Show &amp;hidden files</source>
        <translation>Mostra fitxers ocult&amp;s</translation>
    </message>
    <message>
        <source>the file</source>
        <translation>el fitxer</translation>
    </message>
    <message>
        <source>the directory</source>
        <translation>el directori</translation>
    </message>
    <message>
        <source>the symlink</source>
        <translation>l&apos;enllaç</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>Esborra %1</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Are you sure you wish to delete %1 &quot;%2&quot;?&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Estas segur de voler esborrar %1 &quot;%2&quot;?&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Si</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;No</translation>
    </message>
    <message>
        <source>New Folder 1</source>
        <translation>Nova Carpeta 1</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>Nova Carpeta</translation>
    </message>
    <message>
        <source>New Folder %1</source>
        <translation>Nova Carpeta %1</translation>
    </message>
    <message>
        <source>Find Directory</source>
        <translation>Troba Directori</translation>
    </message>
    <message>
        <source>Directories</source>
        <translation>Directoris</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>Desa</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Error</translation>
    </message>
    <message>
        <source>%1
File not found.
Check path and filename.</source>
        <translation>%1 
Fitxer no trobat. 
Comprova el nom i el camí.</translation>
    </message>
    <message>
        <source>All Files (*.*)</source>
        <translation>Tots els Fitxers (*.*)</translation>
    </message>
    <message>
        <source>Select a Directory</source>
        <translation>Tria un Directori</translation>
    </message>
    <message>
        <source>Directory:</source>
        <translation>Directori:</translation>
    </message>
</context>
<context>
    <name>QFontDialog</name>
    <message>
        <source>&amp;Font</source>
        <translation>&amp;Font</translation>
    </message>
    <message>
        <source>Font st&amp;yle</source>
        <translation>Est&amp;il de Font</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;Mida</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation>Efectes</translation>
    </message>
    <message>
        <source>Stri&amp;keout</source>
        <translation>Bar&amp;rat</translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation>S&amp;ubratllat</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation>&amp;Color</translation>
    </message>
    <message>
        <source>Sample</source>
        <translation>Mostra</translation>
    </message>
    <message>
        <source>Scr&amp;ipt</source>
        <translation>Seqüènc&amp;ia</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Aplicar</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancel.la</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Tanca</translation>
    </message>
    <message>
        <source>Select Font</source>
        <translation>Tria Font</translation>
    </message>
</context>
<context>
    <name>QLineEdit</name>
    <message>
        <source>Clear</source>
        <translation>Buida</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>Selecciona Tot</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>Des&amp;fés</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Refés</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>T&amp;alla</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copia</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Enganxa</translation>
    </message>
</context>
<context>
    <name>QMainWindow</name>
    <message>
        <source>Line up</source>
        <translation>Preparar</translation>
    </message>
    <message>
        <source>Customize...</source>
        <translation>Personalitza...</translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <source>&lt;h3&gt;About Qt&lt;/h3&gt;&lt;p&gt;This program uses Qt version %1.&lt;/p&gt;&lt;p&gt;Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p&gt;&lt;p&gt;Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br&gt;Qt is also available for embedded devices.&lt;/p&gt;&lt;p&gt;Qt is a Trolltech product. See &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt; for more information.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;En quant a Qt&lt;/h3&gt;&lt;p&gt;Aquest programa fa servir Qt versió %1.&lt;/p&gt;&lt;p&gt;Qt és un conjunt d&apos;eines per desenvolupament multiplataforma.&lt;/p&gt;&lt;p&gt;Qt dóna portabilitat entre &amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, i la majoria de les variants Unix &lt;br&gt;Qt també està disponible per dispositius empotrats&lt;/p&gt;&lt;p&gt;Qt és un producte de Trolltech. Mira &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt; per més informació.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Importing text</source>
        <translation>Important text</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation>Tots els Formats Suportats</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Tots els Fitxers (*)</translation>
    </message>
    <message>
        <source>Font %1 is broken, discarding it</source>
        <translation>La Font %1 està malament, descartant-la</translation>
    </message>
    <message>
        <source>Initializing...</source>
        <translation>Iniciant...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Document</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Segon Pla</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Avís</translation>
    </message>
    <message>
        <source>Do you really want to overwrite the File:
%1 ?</source>
        <translation>Realment vols sobreescriure el Fitxer:
%1?</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview</source>
        <translation>Vista Prèvia de &amp;Fonts</translation>
    </message>
    <message>
        <source>&amp;Insert Special</source>
        <translation>&amp;Inserir Especial</translation>
    </message>
    <message>
        <source>New &amp;from Template...</source>
        <translation>Nou des de P&amp;lantilla...</translation>
    </message>
    <message>
        <source>Template: </source>
        <translation>Plantilla:</translation>
    </message>
    <message>
        <source>Newsletters</source>
        <translation>Butlletins</translation>
    </message>
    <message>
        <source>Brochures</source>
        <translation>Fulletons</translation>
    </message>
    <message>
        <source>Catalogs</source>
        <translation>Catàlegs</translation>
    </message>
    <message>
        <source>Flyers</source>
        <translation>Quartilles</translation>
    </message>
    <message>
        <source>Signs</source>
        <translation>Rètols</translation>
    </message>
    <message>
        <source>Cards</source>
        <translation>Cartes</translation>
    </message>
    <message>
        <source>Letterheads</source>
        <translation>Membrets</translation>
    </message>
    <message>
        <source>Envelopes</source>
        <translation>Sobres</translation>
    </message>
    <message>
        <source>Business Cards</source>
        <translation>Cartes de Negoci</translation>
    </message>
    <message>
        <source>Calendars</source>
        <translation>Calendaris</translation>
    </message>
    <message>
        <source>Advertisements</source>
        <translation>Anuncis</translation>
    </message>
    <message>
        <source>Labels</source>
        <translation>Etiquetes</translation>
    </message>
    <message>
        <source>Menus</source>
        <translation>Menus</translation>
    </message>
    <message>
        <source>Programs</source>
        <translation>Programes</translation>
    </message>
    <message>
        <source>PDF Forms</source>
        <translation>Formularis PDF</translation>
    </message>
    <message>
        <source>PDF Presentations</source>
        <translation>Presentacions PDF</translation>
    </message>
    <message>
        <source>Magazines</source>
        <translation>Revistes</translation>
    </message>
    <message>
        <source>Posters</source>
        <translation>Posters</translation>
    </message>
    <message>
        <source>Announcements</source>
        <translation>Anuncis</translation>
    </message>
    <message>
        <source>Text Documents</source>
        <translation>Documents de Text</translation>
    </message>
    <message>
        <source>Folds</source>
        <translation>Díptics</translation>
    </message>
    <message>
        <source>Own Templates</source>
        <translation>Plantilles Pròpies</translation>
    </message>
    <message>
        <source>Save as &amp;Image...</source>
        <translation>Desa com &amp;Imatge...</translation>
    </message>
    <message>
        <source>Save as Image</source>
        <translation>Desa com Imatge</translation>
    </message>
    <message>
        <source>Error writting the output file(s).</source>
        <translation>Error desant els fitxer(s).</translation>
    </message>
    <message>
        <source>Error writing the output file(s).</source>
        <translation>Error desant els fitxer(s).</translation>
    </message>
    <message>
        <source>Export successful.</source>
        <translation>Exportació correcta.</translation>
    </message>
    <message>
        <source>File exists. Overwrite?</source>
        <translation>Fitxer existent. Sobreescric?</translation>
    </message>
    <message>
        <source>exists already. Overwrite?</source>
        <translation>continua existint. Sobreescric?</translation>
    </message>
    <message>
        <source>No</source>
        <translation>No</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Si</translation>
    </message>
    <message>
        <source>Yes all</source>
        <translation>Si a tot</translation>
    </message>
    <message>
        <source>Print Preview</source>
        <translation>Previsualització</translation>
    </message>
    <message>
        <source>Print Previe&amp;w</source>
        <translation>Previsualitzaci&amp;ó</translation>
    </message>
    <message>
        <source>Import &amp;EPS/PS...</source>
        <translation>Importa &amp;EPS/PS...</translation>
    </message>
    <message>
        <source>All Supported Formats (*.eps *.EPS *.ps *.PS);;</source>
        <translation>Tots els Formats Suportats (*.eps *.EPS *.ps *.PS);;</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Obre</translation>
    </message>
    <message>
        <source>Save as &amp;Template...</source>
        <translation>Desa com &amp;Plantilla...</translation>
    </message>
    <message>
        <source>S&amp;cripter Manual...</source>
        <translation>Manual de Seqüèn&amp;cies...</translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation>Referència en Línia</translation>
    </message>
    <message>
        <source>Save Page as &amp;SVG...</source>
        <translation>Desa Pàgina com &amp;SVG...</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Anomena i desa</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg *.svgz);;All Files (*)</source>
        <translation>Imatges SVG (*.svg *.svgz);;Tots els Fitxers (*)</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg);;All Files (*)</source>
        <translation>Imatges SVG (*.svg);;Tots els Fitxers (*)</translation>
    </message>
    <message>
        <source>Import &amp;SVG...</source>
        <translation>Importa &amp;SVG...</translation>
    </message>
    <message>
        <source>Comma Separated Value Files</source>
        <translation>Valors separats per Comes</translation>
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
        <translation>Fitxers HTML</translation>
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
Enllaços Externs

</translation>
    </message>
    <message>
        <source>Text Files</source>
        <translation>Fitxers de Text</translation>
    </message>
    <message>
        <source>Media Cases</source>
        <translation>Caixes de dispositius</translation>
    </message>
    <message>
        <source>Text Filters</source>
        <translation>Filtres de Text</translation>
    </message>
    <message>
        <source>Albanian</source>
        <translation>Albanès</translation>
    </message>
    <message>
        <source>Basque</source>
        <translation>Basc</translation>
    </message>
    <message>
        <source>Bulgarian</source>
        <translation>Búlgar</translation>
    </message>
    <message>
        <source>Brazilian</source>
        <translation>Brasil.ler</translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation>Català</translation>
    </message>
    <message>
        <source>Chinese</source>
        <translation>Xinès</translation>
    </message>
    <message>
        <source>Czech</source>
        <translation>Txec</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation>Danès</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation>Holandès</translation>
    </message>
    <message>
        <source>English</source>
        <translation>Anglès</translation>
    </message>
    <message>
        <source>English (British)</source>
        <translation>Anglès (Britànic)</translation>
    </message>
    <message>
        <source>Esperanto</source>
        <translation>Esperanto</translation>
    </message>
    <message>
        <source>German</source>
        <translation>Alemany</translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation>Finès</translation>
    </message>
    <message>
        <source>French</source>
        <translation>Francès</translation>
    </message>
    <message>
        <source>Galician</source>
        <translation>Gallec</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation>Grec</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation>Hongarès</translation>
    </message>
    <message>
        <source>Indonesian</source>
        <translation>Indonesi</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation>Italià</translation>
    </message>
    <message>
        <source>Korean</source>
        <translation>Coreà</translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation>Lituà</translation>
    </message>
    <message>
        <source>Norwegian (Bokmaal)</source>
        <translation>Noruec (Bokmaal)</translation>
    </message>
    <message>
        <source>Norwegian (Nnyorsk)</source>
        <translation>Noruec (Nnyorsk)</translation>
    </message>
    <message>
        <source>Norwegian</source>
        <translation>Noruec</translation>
    </message>
    <message>
        <source>Polish</source>
        <translation>Polonès</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation>Rus</translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation>Suec</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation>Espanyol</translation>
    </message>
    <message>
        <source>Spanish (Latin)</source>
        <translation>Espanyol (Sudamericà)</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation>Eslovac</translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation>Eslovè</translation>
    </message>
    <message>
        <source>Serbian</source>
        <translation>Serbi</translation>
    </message>
    <message>
        <source>Tried to set progress &gt; maximum progress</source>
        <translation>Triat per marcar el progrés &gt; Màxim progrés</translation>
    </message>
    <message>
        <source>Cannot get font size of non-text frame.</source>
        <comment>python error</comment>
        <translation>No puc obtenir la mida de font si no és un quadre de text.</translation>
    </message>
    <message>
        <source>Cannot get font of non-text frame.</source>
        <comment>python error</comment>
        <translation>No puc obtenir la font si no és un quadre de text.</translation>
    </message>
    <message>
        <source>Cannot get text size of non-text frame.</source>
        <comment>python error</comment>
        <translation>No puc obtenir la mida de text si no és un quadre de text.</translation>
    </message>
    <message>
        <source>Cannot get column count of non-text frame.</source>
        <comment>python error</comment>
        <translation>No puc obtenir les columnes si no és un quadre de text.</translation>
    </message>
    <message>
        <source>Cannot get line space of non-text frame.</source>
        <comment>python error</comment>
        <translation>No puc obtenir l&apos;espaiat de línia si no és un quadre de text.</translation>
    </message>
    <message>
        <source>Cannot get column gap of non-text frame.</source>
        <comment>python error</comment>
        <translation>No puc obtenir l&apos;espai entre les columnes si no és un quadre de text.</translation>
    </message>
    <message>
        <source>Cannot get text of non-text frame.</source>
        <comment>python error</comment>
        <translation>No puc obtenir el text si no és un quadre de text.</translation>
    </message>
    <message>
        <source>Cannot set text of non-text frame.</source>
        <comment>python error</comment>
        <translation>No puc posar el text si no és un quadre de text.</translation>
    </message>
    <message>
        <source>Cannot insert text into non-text frame.</source>
        <comment>python error</comment>
        <translation>No puc inserir el text si no és un quadre de text.</translation>
    </message>
    <message>
        <source>Alignment out of range. Use one of the scribus.ALIGN* constants.</source>
        <comment>python error</comment>
        <translation>Alineament fora de rang. Feu servir les constants d&apos;Scribus ALIGN* .</translation>
    </message>
    <message>
        <source>Selection index out of bounds</source>
        <comment>python error</comment>
        <translation>Índex de selecció fora de marge</translation>
    </message>
    <message>
        <source>Failed to open document</source>
        <comment>python error</comment>
        <translation>Error a l&apos;obrir el document</translation>
    </message>
    <message>
        <source>Failed to save document</source>
        <comment>python error</comment>
        <translation>Error al guardar el document</translation>
    </message>
    <message>
        <source>Unit out of range. Use one of the scribus.UNIT_* constants.</source>
        <comment>python error</comment>
        <translation>Unitats errònies. Feu servir les constants UNIT_* d&apos;Scribus.</translation>
    </message>
    <message>
        <source>Target is not an image frame.</source>
        <comment>python error</comment>
        <translation>El destí no és una imatge.</translation>
    </message>
    <message>
        <source>An object with the requested name already exists</source>
        <comment>python error</comment>
        <translation>Ja hi ha un objecte amb aquest nom</translation>
    </message>
    <message>
        <source>Point list must contain at least two points (four values)</source>
        <comment>python error</comment>
        <translation>La llista de punts ha de tenir almenys dos punts (4 valors)</translation>
    </message>
    <message>
        <source>Point list must contain an even number of values</source>
        <comment>python error</comment>
        <translation>La llista de punts ha de tenir un número parell de valors</translation>
    </message>
    <message>
        <source>Point list must contain at least three points (six values)</source>
        <comment>python error</comment>
        <translation>La llista de punts ha de tenir almenys tres punts (6 valors)</translation>
    </message>
    <message>
        <source>Point list must contain at least four points (eight values)</source>
        <comment>python error</comment>
        <translation>La llista de punts ha de tenir almenys quatre punts (8 valors)</translation>
    </message>
    <message>
        <source>Point list must have a multiple of six values</source>
        <comment>python error</comment>
        <translation>La llista de punts ha de tenir un múltiple de sis valors</translation>
    </message>
    <message>
        <source>Object not found</source>
        <comment>python error</comment>
        <translation>Objecte no trobat</translation>
    </message>
    <message>
        <source>Style not found</source>
        <comment>python error</comment>
        <translation>Estil no trobat</translation>
    </message>
    <message>
        <source>Can&apos;t set style on a non-text frame</source>
        <comment>python error</comment>
        <translation>No puc posar estil si no és un quadre de text</translation>
    </message>
    <message>
        <source>Failed to save EPS</source>
        <comment>python error</comment>
        <translation>Error al gravar l&apos;EPS</translation>
    </message>
    <message>
        <source>Page number out of range</source>
        <comment>python error</comment>
        <translation>Número de pàgina fora de rang</translation>
    </message>
    <message>
        <source>argument is not list: must be list of float values</source>
        <comment>python error</comment>
        <translation>L&apos;argument no és una llista: ha de ser una llista de floats</translation>
    </message>
    <message>
        <source>argument contains non-numeric values: must be list of float values</source>
        <comment>python error</comment>
        <translation>L&apos;argument conté valors no numèrics: ha de ser una llista de floats</translation>
    </message>
    <message>
        <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12</source>
        <comment>python error</comment>
        <translation>Amplada de línia errònia, ha de ser 0 &lt;= amplada &lt;=12</translation>
    </message>
    <message>
        <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100</source>
        <comment>python error</comment>
        <translation>Intensitat de línia errònia, ha de ser 0 &lt;= intensitat &lt;= 100</translation>
    </message>
    <message>
        <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100</source>
        <comment>python error</comment>
        <translation>Intensitat d&apos;emplenat erròni, ha de ser 0 &lt;= emplenat &lt;= 100</translation>
    </message>
    <message>
        <source>Corner radius must be a positive number.</source>
        <comment>python error</comment>
        <translation>L&apos;arrodoniment ha de ser un número positiu.</translation>
    </message>
    <message>
        <source>Line style not found</source>
        <comment>python error</comment>
        <translation>Estil de línia no trobat</translation>
    </message>
    <message>
        <source>Cannot get a color with an empty name.</source>
        <comment>python error</comment>
        <translation>No es pot tenir un color sense nom.</translation>
    </message>
    <message>
        <source>Color not found</source>
        <comment>python error</comment>
        <translation>Color no trobat</translation>
    </message>
    <message>
        <source>Cannot change a color with an empty name.</source>
        <comment>python error</comment>
        <translation>No es pot canviar un color sense nom.</translation>
    </message>
    <message>
        <source>Cannot create a color with an empty name.</source>
        <comment>python error</comment>
        <translation>No puc crear un color sense nom.</translation>
    </message>
    <message>
        <source>Cannot delete a color with an empty name.</source>
        <comment>python error</comment>
        <translation>No es pot esborrar un color sense nom.</translation>
    </message>
    <message>
        <source>Cannot replace a color with an empty name.</source>
        <comment>python error</comment>
        <translation>No es pot remplaçar un color sense nom.</translation>
    </message>
    <message>
        <source>Import &amp;OpenOffice.org Draw...</source>
        <translation>Importar Dibuixos d&apos;&amp;OpenOffice.org...</translation>
    </message>
    <message>
        <source>OpenOffice.org Draw (*.sxd);;All Files (*)</source>
        <translation>Imatges d&apos;OpenOffice.org (*.sxd);;Tots els fitxers (*)</translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Documents</source>
        <translation>Documents d&apos;OpenOffice.org Writer</translation>
    </message>
    <message>
        <source>Color not found - python error</source>
        <comment>python error</comment>
        <translation>Color no trobat - error de python</translation>
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
- Many functions will raise a NoDocOpenError if you try to use themwithout a document to operate on.
- If you do not pass a frame name to a function that requires one,the function will use the currently selected frame, if any, orraise a NoValidObjectError if it can&apos;t find anything to operateon.
- Many functions will raise WrongFrameTypeError if you try to use them
on a frame type that they do not make sense with. For example, setting
the text colour on a graphics frame doesn&apos;t make sense, and will result
in this exception being raised.
- Errors resulting from calls to the underlying Python API will be
passed through unaltered. As such, the list of exceptions thrown by
any function as provided here and in its docstring is incomplete.

Details of what exceptions each function may throw are provided on the
function&apos;s documentation.</source>
        <translation>Mòdul d&apos;interficie Python de l&apos;Scribus 

Aquest mòdul és la interfície Python per l&apos;Scribus. Dóna funcions
per controlar scribus i manipular-ne els objectes de treball. Cada 
funció està documentada individualment a sota.

Algunes coses són comunes a través de la major part de l&apos;interface.

La majoria de les funcions operen en marcs. Els Marcs s&apos;identifiquen pel seu nom, 
una cadena - i no són objectes Python reals. Algunes funcions prenen un 
paràmetre opcional (non-keyword), com a nom de marc.
Algunes de les excepcions són comunes a la majoria de les funcions. Aquestes no estan
actualment documentades en la explicació de cada funció. 
- Algunes funcions poden generar una excepció NoDocOpenError si es fan servir sense tenir un document obert.
- Si no es passa un nom de marc a una funció que el requereix, la funció farà servir el marc actualment seleccionat, si n&apos;hi ha algun o generarà un NoValidObjectError si no se&apos;n pot trobar cap.
- Algunes funcions generaran WrongFrameTypeError si es prova de fer-les servir
en un marc que no té res a veure amb la funció. Per exemple posar 
el color de text en un gràfic no té sentit, i generarà
aquest tipus d&apos;excepció.
- Els errors resultants de crides a la API Python seran passats inalterats
de forma que, la llista d&apos;excepcions a capturar per 
qualsevol funció que es defineix aquí és incompleta.

Els detalls de quines excepcions pot capturar cada funció estan donats en 
la documentació de la funció.
</translation>
    </message>
    <message>
        <source>Custom (optional) configuration: </source>
        <comment>short words plugin</comment>
        <translation>Configuració (opcional) Personalitzada:</translation>
    </message>
    <message>
        <source>Standard configuration: </source>
        <comment>short words plugin</comment>
        <translation>Configuració estàndard:</translation>
    </message>
    <message>
        <source>Short &amp;Words...</source>
        <comment>short words plugin</comment>
        <translation>A&amp;breviacions ...</translation>
    </message>
    <message>
        <source>Short Words processing. Wait please...</source>
        <comment>short words plugin</comment>
        <translation>Processant Abreviacions. Si us plau espera...</translation>
    </message>
    <message>
        <source>Short Words processing. Done.</source>
        <comment>short words plugin</comment>
        <translation>Processant Abreviacions. Fet.</translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation>Africaner</translation>
    </message>
    <message>
        <source>Turkish</source>
        <translation>Turc</translation>
    </message>
    <message>
        <source>Ukranian</source>
        <translation>Ucranià</translation>
    </message>
    <message>
        <source>Welsh</source>
        <translation>Galès</translation>
    </message>
    <message>
        <source>The filename must be a string.</source>
        <comment>python error</comment>
        <translation>El nom del fitxer ha de ser una cadena.</translation>
    </message>
    <message>
        <source>Cannot delete image type settings.</source>
        <comment>python error</comment>
        <translation>No puc esborrar característiques de la imatge.</translation>
    </message>
    <message>
        <source>The image type must be a string.</source>
        <comment>python error</comment>
        <translation>El tipus d&apos;imatge ha de ser una cadena.</translation>
    </message>
    <message>
        <source>&apos;allTypes&apos; attribute is READ-ONLY</source>
        <comment>python error</comment>
        <translation>L&apos;atribut &apos;totsTipus&apos; és de NOMÉS LECTURA</translation>
    </message>
    <message>
        <source>Failed to export image</source>
        <comment>python error</comment>
        <translation>No puc exportar la imatge</translation>
    </message>
    <message>
        <source>Color not found.</source>
        <comment>python error</comment>
        <translation>Color no trobat.</translation>
    </message>
    <message>
        <source>Color not found in document.</source>
        <comment>python error</comment>
        <translation>Color no trobat al document.</translation>
    </message>
    <message>
        <source>Color not found in default colors.</source>
        <comment>python error</comment>
        <translation>Color no trobat en els colors per defecte.</translation>
    </message>
    <message>
        <source>Cannot scale by 0%.</source>
        <comment>python error</comment>
        <translation>No puc escalar un 0%.</translation>
    </message>
    <message>
        <source>Specified item not an image frame.</source>
        <comment>python error</comment>
        <translation>L&apos;Ítem especificat no és un marc d&apos;imatges.</translation>
    </message>
    <message>
        <source>Font not found.</source>
        <comment>python error</comment>
        <translation>Font no trobada.</translation>
    </message>
    <message>
        <source>Cannot render an empty sample.</source>
        <comment>python error</comment>
        <translation>No puc representar un exemple buit.</translation>
    </message>
    <message>
        <source>Cannot have an empty layer name.</source>
        <comment>python error</comment>
        <translation>No hi pot haver una capa sense nom.</translation>
    </message>
    <message>
        <source>Layer not found.</source>
        <comment>python error</comment>
        <translation>Capa no trobada.</translation>
    </message>
    <message>
        <source>Cannot remove the last layer.</source>
        <comment>python error</comment>
        <translation>No es pot esborrar la darrera capa.</translation>
    </message>
    <message>
        <source>Cannot create layer without a name.</source>
        <comment>python error</comment>
        <translation>No puc crear una capa sense nom.</translation>
    </message>
    <message>
        <source>Insert index out of bounds.</source>
        <comment>python error</comment>
        <translation>Índex d&apos;inserció fora de marge.</translation>
    </message>
    <message>
        <source>Cannot set text alignment on a non-text frame.</source>
        <comment>python error</comment>
        <translation>No puc establir alineació de text en un marc que no és de text.</translation>
    </message>
    <message>
        <source>Font size out of bounds - must be 1 &lt;= size &lt;= 512.</source>
        <comment>python error</comment>
        <translation>Mida de la font fora de rang - ha d&apos;estar entre 1 &lt;=mida&lt;=512.</translation>
    </message>
    <message>
        <source>Cannot set font size on a non-text frame.</source>
        <comment>python error</comment>
        <translation>No puc establir mida de font en un marc que no és de text.</translation>
    </message>
    <message>
        <source>Cannot set font on a non-text frame.</source>
        <comment>python error</comment>
        <translation>No puc posar una font en un marc que no és de text.</translation>
    </message>
    <message>
        <source>Line space out of bounds, must be &gt;= 0.1.</source>
        <comment>python error</comment>
        <translation>Interlineat fora de marges, ha de ser &gt;=0.1.</translation>
    </message>
    <message>
        <source>Cannot set line spacing on a non-text frame.</source>
        <comment>python error</comment>
        <translation>No es pot posar interlineat en un marc que no és de text.</translation>
    </message>
    <message>
        <source>Column gap out of bounds, must be positive.</source>
        <comment>python error</comment>
        <translation>Espai entre columnes fora de marges, ha de ser positiu.</translation>
    </message>
    <message>
        <source>Cannot set column gap on a non-text frame.</source>
        <comment>python error</comment>
        <translation>No es pot posar espai entre columnes en un marc que no és de text.</translation>
    </message>
    <message>
        <source>Column count out of bounds, must be &gt; 1.</source>
        <comment>python error</comment>
        <translation>El número de columnes fora de marges, ha de ser &gt;1.</translation>
    </message>
    <message>
        <source>Cannot set number of columns on a non-text frame.</source>
        <comment>python error</comment>
        <translation>No es pot posar número de columnes en un marc que no és de text.</translation>
    </message>
    <message>
        <source>Cannot select text in a non-text frame</source>
        <comment>python error</comment>
        <translation>No es pot seleccionar text en un marc que no és de text</translation>
    </message>
    <message>
        <source>Cannot delete text from a non-text frame.</source>
        <comment>python error</comment>
        <translation>No es pot esborrar text en un marc que no és de text.</translation>
    </message>
    <message>
        <source>Cannot set text fill on a non-text frame.</source>
        <comment>python error</comment>
        <translation>No es pot posar emplenat de text en un marc que no és de text.</translation>
    </message>
    <message>
        <source>Cannot set text stroke on a non-text frame.</source>
        <comment>python error</comment>
        <translation>No es pot posar voltant de text en un marc que no és de text.</translation>
    </message>
    <message>
        <source>Cannot set text shade on a non-text frame.</source>
        <comment>python error</comment>
        <translation>No es pot posar intensitat de text en un marc que no és de text.</translation>
    </message>
    <message>
        <source>Can only link text frames.</source>
        <comment>python error</comment>
        <translation>Només es poden enllaçar marcs de text.</translation>
    </message>
    <message>
        <source>Target frame must be empty.</source>
        <comment>python error</comment>
        <translation>El marc de destí ha de ser buit.</translation>
    </message>
    <message>
        <source>Target frame links to another frame.</source>
        <comment>python error</comment>
        <translation>El marc de destí s&apos;enllaça a un altre marc.</translation>
    </message>
    <message>
        <source>Target frame is linked to by another frame.</source>
        <comment>python error</comment>
        <translation>El marc de destí està enllaçat a un altre marc.</translation>
    </message>
    <message>
        <source>Source and target are the same object.</source>
        <comment>python error</comment>
        <translation>L&apos;Origen i el destí són el mateix objecte.</translation>
    </message>
    <message>
        <source>Cannot unlink a non-text frame.</source>
        <comment>python error</comment>
        <translation>No es pot desenllaçar un marc que no és de text.</translation>
    </message>
    <message>
        <source>Object is not a linked text frame, cannot unlink.</source>
        <comment>python error</comment>
        <translation>L&apos;objecte no és un marc de text enllaçat, no es pot desenllaçar.</translation>
    </message>
    <message>
        <source>Object the last frame in a series, cannot unlink. Unlink the previous frame instead.</source>
        <comment>python error</comment>
        <translation>L&apos;Objecte està en una sèrie, no es pot desenllaçar. Abans desenllaça l&apos;anterior.</translation>
    </message>
    <message>
        <source>Cannot convert a non-text frame to outlines.</source>
        <comment>python error</comment>
        <translation>No es pot convertir un marc que no és de text a esquema.</translation>
    </message>
    <message>
        <source>Portuguese (Brazilian)</source>
        <translation>Portuguès (Brasil.ler)</translation>
    </message>
    <message>
        <source>Cannot get a colour with an empty name.</source>
        <comment>python error</comment>
        <translation>No es pot tenir un color sense nom.</translation>
    </message>
    <message>
        <source>Unable to save pixmap.</source>
        <comment>scripter error</comment>
        <translation>No es pot desar la imatge.</translation>
    </message>
    <message>
        <source>Can&apos;t set bookmark on a non-text frame</source>
        <comment>python error</comment>
        <translation>Només es pot fer una drecera d&apos;un Marc de text</translation>
    </message>
    <message>
        <source>Can&apos;t get info from a non-text frame</source>
        <comment>python error</comment>
        <translation>Només es pot obtenir informació de camps de text</translation>
    </message>
    <message>
        <source>OpenDocument Text Documents</source>
        <translation>Documents de text OpenDocument </translation>
    </message>
    <message>
        <source>Croatian</source>
        <translation>Croat</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>page</source>
        <comment>page export</comment>
        <translation>pàgina</translation>
    </message>
    <message>
        <source>The changes to your document have not been saved and you have requested to revert them. Do you wish to continue?</source>
        <translation>Els canvis en el teu document no han estat desats i has demanat de descartar-los. Vols continuar?</translation>
    </message>
    <message>
        <source>firstPageOrder is bigger than allowed.</source>
        <comment>python error</comment>
        <translation>firstPageOrder és més gran del permès.</translation>
    </message>
    <message>
        <source>Only text frames can be checked for overflowing</source>
        <comment>python error</comment>
        <translation>Només es pot comprovar el sobreeiximent en marcs de text</translation>
    </message>
    <message>
        <source>Dzongkha</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Icelandic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font %1 (found using fontconfig) is broken, discarding it</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to load a font - freetype couldn&apos;t find the font file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Word Documents</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QTextEdit</name>
    <message>
        <source>Clear</source>
        <translation>Buida</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>Selecciona Tot</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>Des&amp;fés</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Refés</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>T&amp;alla</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copia</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Enganxa</translation>
    </message>
</context>
<context>
    <name>QTitleBar</name>
    <message>
        <source>System Menu</source>
        <translation>Menu de Sistema</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Intensitat</translation>
    </message>
    <message>
        <source>Unshade</source>
        <translation>Desintensifica</translation>
    </message>
    <message>
        <source>Normalize</source>
        <translation>Normalitza</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>Minimitza</translation>
    </message>
    <message>
        <source>Maximize</source>
        <translation>Maximitza</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Tanca</translation>
    </message>
</context>
<context>
    <name>QWorkspace</name>
    <message>
        <source>&amp;Restore</source>
        <translation>&amp;Restaura</translation>
    </message>
    <message>
        <source>&amp;Move</source>
        <translation>&amp;Mou</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>M&amp;ida</translation>
    </message>
    <message>
        <source>Mi&amp;nimize</source>
        <translation>Mi&amp;nimitza</translation>
    </message>
    <message>
        <source>Ma&amp;ximize</source>
        <translation>Ma&amp;ximitza</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Tanca</translation>
    </message>
    <message>
        <source>Stay on &amp;Top</source>
        <translation>Mantenir-se a &amp;Dalt</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>Minimitza</translation>
    </message>
    <message>
        <source>Restore Down</source>
        <translation>Retorna a baix</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Tanca</translation>
    </message>
    <message>
        <source>Sh&amp;ade</source>
        <translation>Intensit&amp;at</translation>
    </message>
    <message>
        <source>%1 - [%2]</source>
        <translation>%1 - [%2]</translation>
    </message>
    <message>
        <source>&amp;Unshade</source>
        <translation>&amp;Desintensifica</translation>
    </message>
</context>
<context>
    <name>Query</name>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
</context>
<context>
    <name>ReformDoc</name>
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
        <translation>po</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>Document Setup</source>
        <translation>Configura Document</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Guia de Marges</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>Dal&amp;t:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Esquerra:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>&amp;Baix:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>&amp;Dreta:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation>Pàgines &amp;Encarades</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation>Primera &amp;Pàgina Esquerra</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation>Activa la distribució sola o extesa</translation>
    </message>
    <message>
        <source>Make the first page the left page of the document</source>
        <translation>Fer que la primera pàgina sigui a l&apos;esquerra</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Distància entre la guia superior i la vora del paper</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Distància entre la guia inferior i la vora del paper</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Distància entre el marge esquerre i la vora del paper.
Si tenim Pàgines Encarades, aquest espai es pot fer servir per trobar els marges per enquadernar</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Distància entre el marge dret i la vora del paper.
Si tenim Pàgines Encarades, aquest espai es pot fer servir per obtenir els marges per enquadernar</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation>&amp;Dins:</translation>
    </message>
    <message>
        <source>&amp;Outside:</source>
        <translation>&amp;Fora:</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Mida de Pàgina</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>Mida:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalitzat</translation>
    </message>
    <message>
        <source>Orientation:</source>
        <translation>Orientació:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Vertical</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Apaisat</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation>Amplada:</translation>
    </message>
    <message>
        <source>Height:</source>
        <translation>Alçada:</translation>
    </message>
    <message>
        <source>F&amp;irst Page Number:</source>
        <translation>Pr&amp;imer Número de Pàgina:</translation>
    </message>
</context>
<context>
    <name>SToolBAlign</name>
    <message>
        <source>Style Settings</source>
        <translation>Paràmetres d&apos;Estil</translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation>Estil del paràgraf actual</translation>
    </message>
</context>
<context>
    <name>SToolBColorF</name>
    <message>
        <source>Fill Color Settings</source>
        <translation>Paràmetres de Color d&apos;Emplenat</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Cap</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Color d&apos;emplenat de text</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation>Saturació del color d&apos;omplir el text</translation>
    </message>
</context>
<context>
    <name>SToolBColorS</name>
    <message>
        <source>Stroke Color Settings</source>
        <translation>Paràmetres del Color del Voltant</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Cap</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Color del voltant del text</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation>Saturació del color del voltant del text</translation>
    </message>
</context>
<context>
    <name>SToolBFont</name>
    <message>
        <source>Font Settings</source>
        <translation>Paràmetres de Fonts</translation>
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
        <translation>Font del text marcat</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Mida de Font</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation>Escalant amplada de caràcters</translation>
    </message>
</context>
<context>
    <name>SToolBStyle</name>
    <message>
        <source>Character Settings</source>
        <translation>Paràmetres de Caràcter</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Tracking:</source>
        <translation>Interlletrat:</translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation>Interlletrat Manual</translation>
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
        <translation type="unfinished">Dreta</translation>
    </message>
    <message>
        <source>Bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Left</source>
        <translation type="unfinished">Esquerra</translation>
    </message>
    <message>
        <source>Allow Docking To...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="unfinished">Horitzontal</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="unfinished">Vertical</translation>
    </message>
    <message>
        <source>Floating Orientation...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScriXmlDoc</name>
    <message>
        <source>Copy #%1 of </source>
        <translation>Còpia #%1 de</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Segon Pla</translation>
    </message>
</context>
<context>
    <name>ScribusApp</name>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Fitxer</translation>
    </message>
    <message>
        <source>Create a new Document</source>
        <translation>Crea un Nou Document</translation>
    </message>
    <message>
        <source>Open a Document</source>
        <translation>Obre un Document</translation>
    </message>
    <message>
        <source>Save the current Document</source>
        <translation>Desa el Document actual</translation>
    </message>
    <message>
        <source>Close the current Document</source>
        <translation>Tanca el Document actual</translation>
    </message>
    <message>
        <source>Print the current Document</source>
        <translation>Imprimeix el Document actual</translation>
    </message>
    <message>
        <source>Save the current Document as PDF</source>
        <translation>Desa el Document com a PDF</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation>Buscant les Fonts</translation>
    </message>
    <message>
        <source>Exiting now</source>
        <translation>Sortint ara</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation>Error Fatal</translation>
    </message>
    <message>
        <source>Smart Hyphen</source>
        <translation>Separació Sil.labica Intel.ligent</translation>
    </message>
    <message>
        <source>Align Left</source>
        <translation>Alineació Esquerra</translation>
    </message>
    <message>
        <source>Align Right</source>
        <translation>Alineació Dreta</translation>
    </message>
    <message>
        <source>Align Center</source>
        <translation>Centrar</translation>
    </message>
    <message>
        <source>Insert Page Number</source>
        <translation>Inserir Número de Pàgina</translation>
    </message>
    <message>
        <source>Attach Text to Path</source>
        <translation>Ajusta Text al Camí</translation>
    </message>
    <message>
        <source>Show Layers</source>
        <translation>Mostra Capes</translation>
    </message>
    <message>
        <source>Undo</source>
        <translation>Desfés</translation>
    </message>
    <message>
        <source>Show Page Palette</source>
        <translation>Mostra Mapa de Pàgines</translation>
    </message>
    <message>
        <source>Lock/Unlock</source>
        <translation>Bloqueja/Desbloqueja</translation>
    </message>
    <message>
        <source>Non Breaking Space</source>
        <translation>Espai no separable </translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation>Carregant Preferències</translation>
    </message>
    <message>
        <source>Getting ICC Profiles</source>
        <translation>Obtenint Perfils ICC</translation>
    </message>
    <message>
        <source>Init Hyphenator</source>
        <translation>Iniciant Separador</translation>
    </message>
    <message>
        <source>Setting up Shortcuts</source>
        <translation>Activant Dreceres</translation>
    </message>
    <message>
        <source>&amp;Color Management...</source>
        <translation>Gestió del &amp;Color...</translation>
    </message>
    <message>
        <source>Reading Scrapbook</source>
        <translation>Llegint l&apos;Àlbum de Retalls</translation>
    </message>
    <message>
        <source>Initializing Plugins</source>
        <translation>Iniciant Connectors</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nou</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Obre...</translation>
    </message>
    <message>
        <source>Open &amp;Recent</source>
        <translation>Obre &amp;Recent</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Nou</translation>
    </message>
    <message>
        <source>Open...</source>
        <translation>Obre...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Tanca</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Tanca</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Desa</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>Desa</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>&amp;Anomena i Desa...</translation>
    </message>
    <message>
        <source>Save as...</source>
        <translation>Anomena i Desa...</translation>
    </message>
    <message>
        <source>Re&amp;vert to Saved</source>
        <translation>Re&amp;carregar el Desat</translation>
    </message>
    <message>
        <source>Collect for O&amp;utput...</source>
        <translation>Recull per &amp;Sortir...</translation>
    </message>
    <message>
        <source>&amp;Get Text/Picture...</source>
        <translation>&amp;Obtenir Text/Imatge...</translation>
    </message>
    <message>
        <source>Append &amp;Text...</source>
        <translation>Afegeix &amp;Text...</translation>
    </message>
    <message>
        <source>Import &amp;Page(s)...</source>
        <translation>Importa &amp;Pàgina(es)...</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importa</translation>
    </message>
    <message>
        <source>Save &amp;Text...</source>
        <translation>Desa &amp;Text...</translation>
    </message>
    <message>
        <source>Save Page as &amp;EPS...</source>
        <translation>Desa Pàgina com &amp;EPS...</translation>
    </message>
    <message>
        <source>Save as P&amp;DF...</source>
        <translation>Desa com P&amp;DF...</translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation>&amp;Exporta</translation>
    </message>
    <message>
        <source>Document &amp;Information...</source>
        <translation>&amp;Informació del Document...</translation>
    </message>
    <message>
        <source>Document Info...</source>
        <translation>Info de Document...</translation>
    </message>
    <message>
        <source>Document &amp;Setup...</source>
        <translation>&amp;Configura Document...</translation>
    </message>
    <message>
        <source>Document Setup...</source>
        <translation>Configura Document...</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation>Im&amp;primir...</translation>
    </message>
    <message>
        <source>Print...</source>
        <translation>Imprimir...</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>&amp;Sortir</translation>
    </message>
    <message>
        <source>Quit</source>
        <translation>Sortir</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>Des&amp;fés</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>T&amp;alla</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copia</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Enganxa</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>B&amp;uida</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>Selecciona &amp;Tot</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation>Talla</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>Copia</translation>
    </message>
    <message>
        <source>Paste</source>
        <translation>Enganxa</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation>Buida</translation>
    </message>
    <message>
        <source>Select all</source>
        <translation>Selecciona Tot</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation>&amp;Cerca/Reemplaça...</translation>
    </message>
    <message>
        <source>C&amp;olors...</source>
        <translation>C&amp;olors...</translation>
    </message>
    <message>
        <source>Colors...</source>
        <translation>Colors...</translation>
    </message>
    <message>
        <source>&amp;Paragraph Styles...</source>
        <translation>Estils de &amp;Paràgraf...</translation>
    </message>
    <message>
        <source>&amp;Line Styles...</source>
        <translation>Estils de &amp;Línia...</translation>
    </message>
    <message>
        <source>Styles...</source>
        <translation>Estils...</translation>
    </message>
    <message>
        <source>&amp;Templates...</source>
        <translation>Plan&amp;tilles...</translation>
    </message>
    <message>
        <source>Templates...</source>
        <translation>Plantilles...</translation>
    </message>
    <message>
        <source>Select New Font</source>
        <translation>Tria Nova Font</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;uplica</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation>Duplica</translation>
    </message>
    <message>
        <source>&amp;Multiple Duplicate</source>
        <translation>Duplicació &amp;Múltiple</translation>
    </message>
    <message>
        <source>Multiple Duplicate</source>
        <translation>Duplicació Múltiple</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Es&amp;borra</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Esborra</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation>A&amp;grupa</translation>
    </message>
    <message>
        <source>Group</source>
        <translation>Agrupa</translation>
    </message>
    <message>
        <source>&amp;Ungroup</source>
        <translation>Desagr&amp;upa</translation>
    </message>
    <message>
        <source>Un-group</source>
        <translation>Desagrupa</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation>B&amp;loqueja</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation>Envia al &amp;Fons</translation>
    </message>
    <message>
        <source>Send to Back</source>
        <translation>Envia al Fons</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation>Envia a &amp;Davant</translation>
    </message>
    <message>
        <source>Bring to Front</source>
        <translation>Envia a Davant</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation>&amp;Abaixa</translation>
    </message>
    <message>
        <source>Lower</source>
        <translation>Abaixa</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation>A&amp;puja</translation>
    </message>
    <message>
        <source>Raise</source>
        <translation>Apuja</translation>
    </message>
    <message>
        <source>Distribute/&amp;Align...</source>
        <translation>Distribueix/&amp;Alinea...</translation>
    </message>
    <message>
        <source>Distribute/Align...</source>
        <translation>Distribueix/Alinea...</translation>
    </message>
    <message>
        <source>&amp;Edit Shape</source>
        <translation>&amp;Edita Forma</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>&amp;Forma</translation>
    </message>
    <message>
        <source>&amp;Attach Text to Path</source>
        <translation>&amp;Ajusta Text al Camí</translation>
    </message>
    <message>
        <source>&amp;Detach Text from Path</source>
        <translation>&amp;Desajusta Text al Camí</translation>
    </message>
    <message>
        <source>&amp;Combine Polygons</source>
        <translation>&amp;Combina Polígons</translation>
    </message>
    <message>
        <source>Split &amp;Polygons</source>
        <translation>Separa &amp;Polígons</translation>
    </message>
    <message>
        <source>C&amp;onvert to Outlines</source>
        <translation>C&amp;onverteix a Esquema</translation>
    </message>
    <message>
        <source>&amp;Insert...</source>
        <translation>&amp;Insereix...</translation>
    </message>
    <message>
        <source>Insert...</source>
        <translation>Insereix...</translation>
    </message>
    <message>
        <source>&amp;Delete...</source>
        <translation>Es&amp;borra...</translation>
    </message>
    <message>
        <source>Delete...</source>
        <translation>Esborra...</translation>
    </message>
    <message>
        <source>&amp;Move...</source>
        <translation>&amp;Mou...</translation>
    </message>
    <message>
        <source>Move...</source>
        <translation>Mou...</translation>
    </message>
    <message>
        <source>&amp;Apply Template...</source>
        <translation>&amp;Aplica Plantilla...</translation>
    </message>
    <message>
        <source>Apply Template...</source>
        <translation>Desa com Plantilla...</translation>
    </message>
    <message>
        <source>Manage &amp;Guides...</source>
        <translation>Gestiona &amp;Guies...</translation>
    </message>
    <message>
        <source>Manage Guides...</source>
        <translation>Gestiona Guies...</translation>
    </message>
    <message>
        <source>&amp;Fit in Window</source>
        <translation>Encaixa a &amp;Finestra</translation>
    </message>
    <message>
        <source>Fit in Window</source>
        <translation>Encaixa a Finestra</translation>
    </message>
    <message>
        <source>50%</source>
        <translation>50%</translation>
    </message>
    <message>
        <source>75%</source>
        <translation>75%</translation>
    </message>
    <message>
        <source>&amp;100%</source>
        <translation>&amp;100%</translation>
    </message>
    <message>
        <source>100%</source>
        <translation>100%</translation>
    </message>
    <message>
        <source>200%</source>
        <translation>200%</translation>
    </message>
    <message>
        <source>&amp;Thumbnails</source>
        <translation>&amp;Miniatures</translation>
    </message>
    <message>
        <source>Thumbnails</source>
        <translation>Miniatures</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation>Mostra &amp;Marges</translation>
    </message>
    <message>
        <source>Hide Margins</source>
        <translation>Amaga Marges</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation>Mostra &amp;Marcs</translation>
    </message>
    <message>
        <source>Hide Frames</source>
        <translation>Amaga Marcs</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation>Mostra &amp;Imatges</translation>
    </message>
    <message>
        <source>Hide Images</source>
        <translation>Amaga Imatges</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation>Mostra &amp;Reixa</translation>
    </message>
    <message>
        <source>Show Grid</source>
        <translation>Mostra Reixa</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation>Mostra G&amp;uies</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation>Mostra Reixa &amp;Base</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation>Desplaça &amp;a la Reixa</translation>
    </message>
    <message>
        <source>Snap to Grid</source>
        <translation>Desplaça a la Reixa</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation>Des&amp;plaça a les Guies</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>&amp;Propietats</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation>Propietats</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <translation>&amp;Esquema</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation>Esquema</translation>
    </message>
    <message>
        <source>&amp;Scrapbook</source>
        <translation>Àlbu&amp;m de retalls</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation>Àlbum de retalls</translation>
    </message>
    <message>
        <source>&amp;Layers</source>
        <translation>&amp;Capes</translation>
    </message>
    <message>
        <source>P&amp;age Palette</source>
        <translation>M&amp;apa de Pàgines</translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation>&amp;Punts</translation>
    </message>
    <message>
        <source>&amp;Manage Pictures</source>
        <translation>Gestiona I&amp;matges</translation>
    </message>
    <message>
        <source>Manage Pictures</source>
        <translation>Gestiona Imatges</translation>
    </message>
    <message>
        <source>&amp;Hyphenate Text</source>
        <translation>&amp;Separació en síl.labes</translation>
    </message>
    <message>
        <source>Hyphenate Text</source>
        <translation>Separació en síl.labes</translation>
    </message>
    <message>
        <source>Toolti&amp;ps</source>
        <translation>Rètols indica&amp;dors</translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation>Ei&amp;nes</translation>
    </message>
    <message>
        <source>P&amp;DF Tools</source>
        <translation>Eines P&amp;DF</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation>Eines</translation>
    </message>
    <message>
        <source>Tooltips</source>
        <translation>Rètols indicadors</translation>
    </message>
    <message>
        <source>P&amp;references...</source>
        <translation>P&amp;referències...</translation>
    </message>
    <message>
        <source>&amp;Fonts...</source>
        <translation>&amp;Fonts...</translation>
    </message>
    <message>
        <source>Fonts...</source>
        <translation>Fonts...</translation>
    </message>
    <message>
        <source>&amp;Hyphenator...</source>
        <translation>&amp;Separador...</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts...</source>
        <translation>Dreceres de &amp;Teclat...</translation>
    </message>
    <message>
        <source>&amp;About Scribus</source>
        <translation>Quant &amp;a Scribus</translation>
    </message>
    <message>
        <source>About Scribus</source>
        <translation>Quant a Scribus</translation>
    </message>
    <message>
        <source>About &amp;Qt</source>
        <translation>Quant a &amp;Qt</translation>
    </message>
    <message>
        <source>About Qt</source>
        <translation>Quant a Qt</translation>
    </message>
    <message>
        <source>Scribus &amp;Manual...</source>
        <translation>&amp;Manual d&apos;Scribus...</translation>
    </message>
    <message>
        <source>Online-Help...</source>
        <translation>Ajuda en Línia...</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Fitxer</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Edició</translation>
    </message>
    <message>
        <source>St&amp;yle</source>
        <translation>Est&amp;il</translation>
    </message>
    <message>
        <source>&amp;Item</source>
        <translation>&amp;Item</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation>&amp;Pàgina</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>&amp;Visualització</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation>E&amp;xtres</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation>Paràmetre&amp;s</translation>
    </message>
    <message>
        <source>&amp;Windows</source>
        <translation>&amp;Finestres</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;Ajuda</translation>
    </message>
    <message>
        <source>&amp;Left</source>
        <translation>&amp;Esquerra</translation>
    </message>
    <message>
        <source>&amp;Center</source>
        <translation>&amp;Centre</translation>
    </message>
    <message>
        <source>&amp;Right</source>
        <translation>&amp;Dreta</translation>
    </message>
    <message>
        <source>&amp;Block</source>
        <translation>&amp;Justificat</translation>
    </message>
    <message>
        <source>&amp;Forced</source>
        <translation>&amp;Forçat</translation>
    </message>
    <message>
        <source>&amp;Other...</source>
        <translation>&amp;Altres...</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation>Subratllat</translation>
    </message>
    <message>
        <source>Strikethru</source>
        <translation>Barrat</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation>Majúscules Petites</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation>Superíndex</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation>Subíndex</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation>Contornat</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation>Posició X:</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation>Posició Y:</translation>
    </message>
    <message>
        <source> mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation>po</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation>Preparat</translation>
    </message>
    <message>
        <source>&amp;Cascade</source>
        <translation>&amp;Cascada</translation>
    </message>
    <message>
        <source>&amp;Tile</source>
        <translation>&amp;Mosaic</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Cap</translation>
    </message>
    <message>
        <source>Get Text/Picture...</source>
        <translation>Obtenir Text/Imatge...</translation>
    </message>
    <message>
        <source>Get Picture...</source>
        <translation>Obtenir Imatge...</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation>&amp;Color</translation>
    </message>
    <message>
        <source>&amp;Invert</source>
        <translation>&amp;Inverteix</translation>
    </message>
    <message>
        <source>&amp;Get Text...</source>
        <translation>&amp;Obtenir Text...</translation>
    </message>
    <message>
        <source>&amp;Font</source>
        <translation>&amp;Font</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;Mida</translation>
    </message>
    <message>
        <source>&amp;Effects</source>
        <translation>&amp;Efectes</translation>
    </message>
    <message>
        <source>&amp;Alignment</source>
        <translation>&amp;Alineació</translation>
    </message>
    <message>
        <source>&amp;Shade</source>
        <translation>&amp;Intensitat</translation>
    </message>
    <message>
        <source>&amp;Tabulators...</source>
        <translation>&amp;Tabuladors...</translation>
    </message>
    <message>
        <source>Get Text...</source>
        <translation>Obtenir Text...</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Font</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Mida</translation>
    </message>
    <message>
        <source>Style</source>
        <translation>Estil</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Color</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Intensitat</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation>DesB&amp;loqueja</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Obre</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documents (*.sla *.sla.gz *.scd *.scd.gz);;Tots els fitxers (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documents (*.sla *.scd);;Tots els fitxers (*)</translation>
    </message>
    <message>
        <source>Importing Pages...</source>
        <translation>Important Pàgina(es)...</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation>Importa Pàgina(es)</translation>
    </message>
    <message>
        <source>&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</source>
        <translation>&lt;p&gt;Estas provant d&apos;importar més pàgines de les que hi ha a partir de la pàgina actual en aquest document. &lt;/p&gt;Tria una de les següents coses: &lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Crear&lt;/b&gt; pàgines que falten&lt;/li&gt;&lt;li&gt;&lt;b&gt;Importar&lt;/b&gt; pàgines fins al final&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel.lar&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>Crea</translation>
    </message>
    <message>
        <source>Import</source>
        <translation>Importa</translation>
    </message>
    <message>
        <source>Import done</source>
        <translation>Importació feta</translation>
    </message>
    <message>
        <source>Found nothing to import</source>
        <translation>No he trobat res a importar</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Avís</translation>
    </message>
    <message>
        <source>File %1 is not in Scribus format</source>
        <translation>El Fitxer %1 no està en format Scribus</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
    <message>
        <source>Loading...</source>
        <translation>Carregant...</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation>Tots els Formats Suportats</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Tots els Fitxers (*)</translation>
    </message>
    <message>
        <source>Can&apos;t write the File: 
%1</source>
        <translation>No puc escriure el Fitxer:
%1</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Anomena i desa</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</source>
        <translation>Documents (*.sla *.sla.gz *.scd *.scd.gz);;Tots els fitxers (*)</translation>
    </message>
    <message>
        <source>Saving...</source>
        <translation>Desant...</translation>
    </message>
    <message>
        <source>Printing...</source>
        <translation>Imprimint...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Document</translation>
    </message>
    <message>
        <source>Printing failed!</source>
        <translation>Impressió fallida!</translation>
    </message>
    <message>
        <source>Scribus Manual</source>
        <translation>Manual d&apos;Scribus</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Text (*.txt);;Tots els Fitxers (*)</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Mida:</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation>&amp;Intensitat:</translation>
    </message>
    <message>
        <source>Hide Baseline Grid</source>
        <translation>Amaga Reixa Base</translation>
    </message>
    <message>
        <source>Show Baseline Grid</source>
        <translation>Mostra Reixa Base</translation>
    </message>
    <message>
        <source>The following Programs are missing:</source>
        <translation>No s&apos;han trobat els següents programes:</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Tot</translation>
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
        <translation>po</translation>
    </message>
    <message>
        <source>p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>Some Objects are locked.</source>
        <translation>Alguns Objectes estan bloquejats.</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancel.la</translation>
    </message>
    <message>
        <source>Lock all</source>
        <translation>Bloqueja tot</translation>
    </message>
    <message>
        <source>Unlock all</source>
        <translation>Desbloqueja tot</translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation>Desbloqueja</translation>
    </message>
    <message>
        <source>Lock</source>
        <translation>Bloqueja</translation>
    </message>
    <message>
        <source>Loading:</source>
        <translation>Carregant:</translation>
    </message>
    <message>
        <source>Adjusting Colors</source>
        <translation>Ajustant Colors</translation>
    </message>
    <message>
        <source>&amp;Undo Delete Object</source>
        <translation>&amp;Desfés Esborrar Objecte</translation>
    </message>
    <message>
        <source>&amp;Undo Object Move</source>
        <translation>&amp;Desfés Moure Objecte</translation>
    </message>
    <message>
        <source>&amp;Undo Object Change</source>
        <translation>&amp;Desfés Canvis en l&apos;Objecte</translation>
    </message>
    <message>
        <source>German</source>
        <translation>Alemany</translation>
    </message>
    <message>
        <source>Polish</source>
        <translation>Polonès</translation>
    </message>
    <message>
        <source>English</source>
        <translation>Anglès</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation>Espanyol</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation>Italià</translation>
    </message>
    <message>
        <source>French</source>
        <translation>Francès</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation>Rus</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation>Danès</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation>Eslovac</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation>Hongarès</translation>
    </message>
    <message>
        <source>Czech</source>
        <translation>Txec</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation>Holandès</translation>
    </message>
    <message>
        <source>Portuguese</source>
        <translation>Portuguès</translation>
    </message>
    <message>
        <source>Ukrainian</source>
        <translation>Ucranià</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation>Grec</translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation>Català</translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation>Finès</translation>
    </message>
    <message>
        <source>Irish</source>
        <translation>Irlandès</translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation>Lituà</translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation>Suec</translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation>Eslovè</translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation>Africaner</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Tria un Directori</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation>Inverteix</translation>
    </message>
    <message>
        <source>Scribus Crash</source>
        <translation>Scribus ha Petat</translation>
    </message>
    <message>
        <source>Scribus crashes due to Signal #%1</source>
        <translation>Scribus ha petat amb el Signal #%1</translation>
    </message>
    <message>
        <source>Font System Initialized</source>
        <translation>Sistema de Fonts Iniciat</translation>
    </message>
    <message>
        <source>Portuguese (BR)</source>
        <translation>Portuguès (BR)</translation>
    </message>
    <message>
        <source>There are no suitable Fonts on your System</source>
        <translation>No hi ha Fonts utilitzables en el Sistema</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Color management is supported but can not currently be enabled. Make sure you have ICC color profiles installed and that the profile path in the preferences points to where they&apos;re installed.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Es suporta la gestió de color però actualment no es pot activar. Assegura&apos;t que tens els perfils de color ICC instal.lats i que el camí a aquests és correcte.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Color management is not supported by this Scribus build (not compiled in).&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;No es suporta la gestió de color en aquesta compilació d&apos;Scribus.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Croatian</source>
        <translation>Croat</translation>
    </message>
    <message>
        <source>JavaScripts...</source>
        <translation>JavaScripts...</translation>
    </message>
    <message>
        <source>&amp;JavaScripts...</source>
        <translation>&amp;JavaScripts...</translation>
    </message>
    <message>
        <source>GhostScript : You cannot use EPS Images</source>
        <translation>GhostScript : No pots usar imatges EPS</translation>
    </message>
    <message>
        <source>EPS Files (*.eps);;All Files (*)</source>
        <translation>Fitxers EPS (*.eps);;Tots els fitxers (*)</translation>
    </message>
    <message>
        <source>Norwegian</source>
        <translation>Noruec</translation>
    </message>
    <message>
        <source>Icelandic</source>
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
        <translation>Capa</translation>
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
        <translation>po</translation>
    </message>
    <message>
        <source>p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Tot</translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation>Còpia de</translation>
    </message>
</context>
<context>
    <name>ScribusWin</name>
    <message>
        <source>&amp;Leave Anyway</source>
        <translation>D&amp;eixa Com Està</translation>
    </message>
    <message>
        <source>C&amp;lose Anyway</source>
        <translation>Tanca Igua&amp;lment</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Avís</translation>
    </message>
    <message>
        <source>Document:</source>
        <translation>Document:</translation>
    </message>
    <message>
        <source>has been changed since the last save.</source>
        <translation>ha canviat des del darrer cop.</translation>
    </message>
    <message>
        <source>&amp;Save Now</source>
        <translation>&amp;Desa Ara</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
</context>
<context>
    <name>ScripterCore</name>
    <message>
        <source>&amp;Scribus Scripts</source>
        <translation>Seqüències &amp;Scribus</translation>
    </message>
    <message>
        <source>&amp;Execute Script...</source>
        <translation>&amp;Executa Seqüència...</translation>
    </message>
    <message>
        <source>Run a Python script from a file.</source>
        <comment>scripter</comment>
        <translation>Executa seqüència Python d&apos;un fitxer.</translation>
    </message>
    <message>
        <source>&amp;Load Extension Script...</source>
        <translation>&amp;Carregar seqüència d&apos;Extensió...</translation>
    </message>
    <message>
        <source>Load a Python script as an extension. Used for loading macros and for advanced Python scripts that extend the Scribus user interface.</source>
        <comment>scripter</comment>
        <translation>Carrega una seqüència Python com una extensió. Es fa servir per carregar macros i per seqüències avançades Python que s&apos;afegeixen a la interficie d&apos;usuari d&apos;Scribus.</translation>
    </message>
    <message>
        <source>&amp;Recent Scripts</source>
        <translation>Seqüències &amp;Recents</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation>Mostra &amp;Cònsola</translation>
    </message>
    <message>
        <source>Display an interactive Python console where you can write and run Python programs that use the Scripter tools.</source>
        <comment>scripter</comment>
        <translation>Mostra una cònsola interactiva Python on es pot escriure i executar programes que fan servir les eines del Sequenciador.</translation>
    </message>
    <message>
        <source>&amp;About Script...</source>
        <translation>Quant &amp;a Sequència...</translation>
    </message>
    <message>
        <source>S&amp;cript</source>
        <translation>Seqüèn&amp;cia</translation>
    </message>
    <message>
        <source>Scripter &amp;Settings</source>
        <comment>script menu</comment>
        <translation>Paràmetres del &amp;Sequenciador</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Obre</translation>
    </message>
    <message>
        <source>Python Scripts (*.py);; All Files (*)</source>
        <translation>Seqüències Python (*.py);;Tots els fitxers (*)</translation>
    </message>
    <message>
        <source>Script error</source>
        <translation>Error en Seqüència</translation>
    </message>
    <message>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation>Si executes una seqüència oficial, si us plau avisa a &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation>Aquest missatge també és al portapapers. Usa Ctrl+V per enganxar-lo al bug tracker.</translation>
    </message>
    <message>
        <source>Scribus - Script Plugin</source>
        <translation>Scribus - Seqüència Plugin</translation>
    </message>
    <message>
        <source>The &apos;Load Script&apos; function of the script plugin is currently disabled.
If you just want to run a normal script, you probably want to use
&apos;Execute Script...&apos; instead.

If you do actually want to load a Python extension script or macro, you
need to go into the Scripter Settings in the Script menu and enable
scripter extensions there.

Please read the documentation on extension scripts first.
</source>
        <translation>La funció &apos;Carrega Seqüència&apos; de seqüència plugin està desactivada actualment.
Si només vols execturar seqüències normals, provablement voldras fer servir
&apos;Executa Seqüència...&apos;.

Si vols carregar extensions Python o macros, hauras d&apos;anar a 
la opció Paràmetres del Seqüenciador en el menú i activar les 
extensions d&apos;aquí.

Si us plau abans llegeix la documentació de les extensions.
</translation>
    </message>
    <message>
        <source>Hide &amp;Console</source>
        <translation>Amaga &amp;Consola</translation>
    </message>
    <message>
        <source>About Script</source>
        <translation>Quant a Sequència</translation>
    </message>
</context>
<context>
    <name>ScripterPreferences</name>
    <message>
        <source>Scribus - Scripter Preferences</source>
        <translation>Scribus - Preferències del Sequenciador</translation>
    </message>
    <message>
        <source>Enable Scripter Extensions</source>
        <translation>Activa les Extensions</translation>
    </message>
    <message>
        <source>Turn on extension scripts and macros</source>
        <translation>Activa les extensions i les macros</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;Enabling scripter extensions turns on additional scripter functionality including Python macros and the option of loading a Python script at start-up. Turning on this option unlocks the &lt;tt&gt;Load Extension Script&lt;/tt&gt; item in the Script menu.&lt;/p&gt;
&lt;p&gt;
Only scripts written to be run as extension scripts should be used with &lt;tt&gt;Load Extension Script&lt;/tt&gt; or as start-up scripts. See the scripter documentation for more details.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;&lt;p&gt;Activar les extensions activa funcionalitats extres incloent macros Python i les opcions de carregar les seqüències d&apos;inici Python. Activant aquesta opció desbloqueja l&apos;ítem &lt;tt&gt;Carrega Extensions&lt;/tt&gt; del menú Script.&lt;/p&gt;
&lt;p&gt;
Només les seqüències escrites per ser executades com extensions es poden fer servir amb la opció &lt;tt&gt;Carrega Extensions&lt;/tt&gt; o com a seqüències d&apos;inici. Mireu la documentació del sequenciador per tenir més detalls.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Use a Startup Script</source>
        <translation>Fes servir una seqüencia d&apos;Inici</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;If &lt;tt&gt;Use a Startup Script&lt;/tt&gt; is checked, Scribus will load the script file specified here as an extension script at start-up. It is important that the script be written as an extension script, as if not written carefully it can potentially cause problems.&lt;/p&gt;
&lt;p&gt;&lt;tt&gt;Use a Startup Script&lt;/tt&gt; will be disabled if scripter extensions are off, as extension scripts cannot be loaded without scripter extensions enabled.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;&lt;p&gt;Si &lt;tt&gt;Fer Servir Seqüència d&apos;Inici&lt;/tt&gt; està marcat, Scribus carregarà la seqüència especificada quan s&apos;inicii. És important que la seqüència sigui escrita com una extensió, perquè sinó pot provocar greus problemes.&lt;/p&gt;
&lt;p&gt;&lt;tt&gt;Fer Servir Seqüència d&apos;Inici&lt;/tt&gt; estarà desactivat si les extensions estan desactivades, i no es podran carregar seqüències d&apos;inici&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation>Explora...</translation>
    </message>
    <message>
        <source>Browse for a new script file</source>
        <translation>Tria un fitxer de seqüència</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Browse for a new script file&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Explora per trobar un fitxer de seqüència&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>What script file to load at start-up</source>
        <translation>Quina seqüència d&apos;inici es carregarà</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;The file containing the Python script to run as an extension script at start-up.&lt;/p&gt;
&lt;p&gt;Note that when this script is run, Scribus has not completely started up and the workspace does not yet exist.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;&lt;p&gt;El fitxer conté una seqüència Python que s&apos;executarà com una extensió al Iniciar el programa.&lt;/p&gt;
&lt;p&gt;Cal tenir en compte que la seqüència s&apos;executa quan l&apos;Scribus no està completament carregat i no hi ha espai de treball.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Script File:</source>
        <translation>Fitxer de Seqüència:</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <source>Close without saving changes</source>
        <translation>Tanca sense desar els canvis</translation>
    </message>
    <message>
        <source>&amp;Ok</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <source>Save changes and close</source>
        <translation>Desa els canvis i surt</translation>
    </message>
    <message>
        <source>Advanced Options</source>
        <translation>Opcions Avançades</translation>
    </message>
    <message>
        <source>Import All Names at Startup</source>
        <translation>Importa tot al Iniciar</translation>
    </message>
    <message>
        <source>Run &apos;from scribus import *&apos; in the script console at start-up</source>
        <translation>Executa &apos;importa tot *&apos; en la cònsola al iniciar</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Import All Names at Startup&lt;/tt&gt; is an advanced option. You should probably leave it checked unless you have read the documentation and know what you are doing.&lt;/p&gt;
&lt;p&gt;Unchecking this option will prevent the scripter from running its usual &lt;tt&gt;from scribus import *&lt;/tt&gt; command when it initializes the main interpreter (used for the script console and extension scripts) at start-up.&lt;/p&gt;
&lt;p&gt;This option does not take effect until Scribus is restarted.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Importa Tots els Noms a l&apos;Inici&lt;/tt&gt; és una opció avançada. Normalment l&apos;hauríes de deixar desmarcada a menys que t&apos;hagis llegit la documentació i sàpigues què estas fent.&lt;/p&gt;
&lt;p&gt;Desactivant aquesta opció evita que el sequenciador executi la comanda &lt;tt&gt;Importa des d&apos;Scribus *&lt;/tt&gt; quan s&apos;inicii l&apos;interpret principal (el fa servir la seqüència de cònsola i les extensions) al Iniciar.&lt;/p&gt;
&lt;p&gt;Aquesta opció no funcionarà fins que reiniciem Scribus&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Enable Legacy Name Aliases</source>
        <translation>Activa àlies de Noms</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Enable the use of OldStyle function names&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Activa els noms de funció a l&apos;estil antic&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Use Fake Stdin</source>
        <translation>Fer servir una entrada estàndard falsa</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Replace sys.stdin with a fake file to prevent Scribus hanging when a script tries to read from stdin.&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Remplaça sys.stdin amb un fitxer fals per prevenir que Scribus es pengi quan una seqüència provi de llegir de la entrada estàndard.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Use Fake Stdin&lt;/tt&gt; is an advanced option. You should probably leave it how it is.&lt;/p&gt;
&lt;p&gt;Normally, scribus will provide Python with a fake file object for &lt;tt&gt;sys.stdin&lt;/tt&gt;, so that reads from stdin always return an empty string. If the real &lt;tt&gt;sys.stdin&lt;/tt&gt; is left in place, scripts that try to read from it will block - and in turn block scribus&apos;s execution, making the app appear to hang - until input arrives on stdin. It&apos;s unusual for GUI apps to expect anything on stdin, so mostly users will think scribus has crashed.&lt;/p&gt;
&lt;p&gt;You can disable this option if you want to accept input on stdin. Generally you should use &lt;tt&gt;os.popen&lt;/tt&gt; to make a pipe instead, or use some other input mechanism, but this option is here just in case.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Fer servir una entrada estàndard falsa&lt;/tt&gt; és una opció avançada. Normalment s&apos;hauria de deixar tal com està.&lt;/p&gt;
&lt;p&gt;Normalment, Scribus dóna a Python una entrada estàndard falsa &lt;tt&gt;sys.stdin&lt;/tt&gt;, i fa que la resposta sigui una cadena buida per totes les peticions. Si es posa el fitxer real &lt;tt&gt;sys.stdin&lt;/tt&gt; en el seu lloc, quan les seqüències vulguin carregar entrades bloquejaran la execucio del programa fins que es faci l&apos;entrada de teclat -donant la impressió de que s&apos;ha bloquejat Scribus-.És rar que les aplicacions gràfiques esperin una entrada de teclat per executar-se, i per tant molts usuaris es pensaran que l&apos;Scribus ha fallat.&lt;/p&gt;
&lt;p&gt;Pots desactivar aquesta opció si vols acceptar entrades de l&apos;entrada estàndard. Generalment hauras de fer servir &lt;tt&gt;os.popen&lt;/tt&gt; per fer una pila, o bé fer servir algun mecanisme d&apos;entrada, però aquesta opció només funcionarà en casos concrets.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Enable Legacy Name Aliases&lt;/tt&gt; is an advanced option. You should probably leave it how it is.&lt;/p&gt;
&lt;p&gt;If checked, this option will cause the scripter to create a large number of function and constant name aliases for 1.2.0 script compatibility. It defaults to checked.&lt;/p&gt;
&lt;p&gt;This option does not take effect until Scribus is restarted.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Activa Àlies de Noms&lt;/tt&gt; és una opció avançada. Normalment s&apos;hauría de deixar tal com està.&lt;/p&gt;
&lt;p&gt;Si està marcat, aquesta opció provocarà que el sequenciador crei una gran quantitat de àlies de funcions i constants per compatibilitat amb les versions 1.2.0. Per defecte està activat.&lt;/p&gt;
&lt;p&gt;Aquesta opció no pren efecte fins que es reinicii Scribus.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
</context>
<context>
    <name>SeList</name>
    <message>
        <source>Show Page Previews</source>
        <translation>Visualització Previa de Pàgina</translation>
    </message>
</context>
<context>
    <name>SeView</name>
    <message>
        <source>Show Template Names</source>
        <translation>Mostra Noms de Plantilla</translation>
    </message>
</context>
<context>
    <name>SearchReplace</name>
    <message>
        <source>Search/Replace</source>
        <translation>Cerca/Reemplaça</translation>
    </message>
    <message>
        <source>Search for:</source>
        <translation>Cerca:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Text</translation>
    </message>
    <message>
        <source>Paragraph Style</source>
        <translation>Estil de Paràgraf</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Font</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Mida de Font</translation>
    </message>
    <message>
        <source>Font Effects</source>
        <translation>Efectes de Font</translation>
    </message>
    <message>
        <source>Fill Color</source>
        <translation>Color d&apos;Emplenat</translation>
    </message>
    <message>
        <source>Fill Shade</source>
        <translation>Intensitat d&apos;ompliment</translation>
    </message>
    <message>
        <source>Stroke Color</source>
        <translation>Color del Voltant</translation>
    </message>
    <message>
        <source>Stroke Shade</source>
        <translation>Intensitat del Voltant</translation>
    </message>
    <message>
        <source>Left</source>
        <translation>Esquerra</translation>
    </message>
    <message>
        <source>Center</source>
        <translation>Centrat</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Dreta</translation>
    </message>
    <message>
        <source>Block</source>
        <translation>Justificat</translation>
    </message>
    <message>
        <source>Forced</source>
        <translation>Forçat</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Cap</translation>
    </message>
    <message>
        <source>Replace with:</source>
        <translation>Canvia&apos;l per:</translation>
    </message>
    <message>
        <source>&amp;Whole Word</source>
        <translation>Paraula Sen&amp;cera</translation>
    </message>
    <message>
        <source>&amp;Ignore Case</source>
        <translation>&amp;Ignora Maj/Min</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Cerca</translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation>&amp;Remplaça</translation>
    </message>
    <message>
        <source>Replace &amp;All</source>
        <translation>Remplaça &amp;Tot</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Tanca</translation>
    </message>
    <message>
        <source>Search finished</source>
        <translation>Recerca acabada</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>B&amp;uida</translation>
    </message>
</context>
<context>
    <name>SeitenPal</name>
    <message>
        <source>Arrange Pages</source>
        <translation>Organitza Pàgines</translation>
    </message>
    <message>
        <source>Available Templates:</source>
        <translation>Plantilles Disponibles:</translation>
    </message>
    <message>
        <source>Document Pages:</source>
        <translation>Pàgines:</translation>
    </message>
    <message>
        <source>Facing Pages</source>
        <translation>Pàgines Encarades</translation>
    </message>
    <message>
        <source>Left Page first</source>
        <translation>Primera Pàgina Esquerra</translation>
    </message>
    <message>
        <source>Drag Pages or Template Pages onto the Trashbin to delete them.</source>
        <translation>Mou les pàgines o les Plantilles a la Paperera per esborrar-les.</translation>
    </message>
    <message>
        <source>Previews all the pages of your document.</source>
        <translation>Previsualitza totes les pàgines del document.</translation>
    </message>
    <message>
        <source>Here are all your Templates, to create a new Page
drag a Template to the Pageview below.</source>
        <translation>Aquí hi ha les teves Plantilles, per crear una nova 
Pàgina arrossega una Plantilla cap a sota.</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
</context>
<context>
    <name>SelectFields</name>
    <message>
        <source>Select Fields</source>
        <translation>Tria Camps</translation>
    </message>
    <message>
        <source>Available Fields</source>
        <translation>Camps Disponibles</translation>
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
        <translation>Camps Triats</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
</context>
<context>
    <name>ShadeButton</name>
    <message>
        <source>Other...</source>
        <translation>Altres...</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation>&amp;Intensitat:</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Intensitat</translation>
    </message>
</context>
<context>
    <name>SideBar</name>
    <message>
        <source>No Style</source>
        <translation>Sense Estil</translation>
    </message>
</context>
<context>
    <name>Spalette</name>
    <message>
        <source>No Style</source>
        <translation>Sense Estil</translation>
    </message>
</context>
<context>
    <name>StilFormate</name>
    <message>
        <source>Edit Styles</source>
        <translation>Edita Estil</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>&amp;Afegeix</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nou</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Edició</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;uplica</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Es&amp;borra</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Desa</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Copia de %1</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation>Nou Estil</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Avís</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation>Realment vols esborrar aquest Estil?</translation>
    </message>
    <message>
        <source>No</source>
        <translation>No</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Si</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Obre</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documents (*.sla *.sla.gz *.scd *.scd.gz);;Tots els fitxers (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documents (*.sla *.scd);;Tots els fitxers (*)</translation>
    </message>
</context>
<context>
    <name>StoryEditor</name>
    <message>
        <source>Story Editor</source>
        <translation>Editor de Notícies</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nou</translation>
    </message>
    <message>
        <source>&amp;Reload Text from Frame</source>
        <translation>&amp;Recarrega el Text del Marc</translation>
    </message>
    <message>
        <source>&amp;Save to File...</source>
        <translation>&amp;Desa a un Fitxer...</translation>
    </message>
    <message>
        <source>&amp;Load from File...</source>
        <translation>&amp;Carrega d&apos;un Fitxer...</translation>
    </message>
    <message>
        <source>Save &amp;Document</source>
        <translation>Desa &amp;Document</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame and Exit</source>
        <translation>&amp;Actualitza el Text i Surt</translation>
    </message>
    <message>
        <source>&amp;Exit Without Updating Text Frame</source>
        <translation>&amp;Surt Sense Actualitzar el Text</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>Selecciona &amp;Tot</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>T&amp;alla</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copia</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Enganxa</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>B&amp;uida</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation>&amp;Cerca/Reemplaça...</translation>
    </message>
    <message>
        <source>&amp;Insert Special...</source>
        <translation>&amp;Inserir Especial...</translation>
    </message>
    <message>
        <source>&amp;Edit Styles...</source>
        <translation>&amp;Edita Estils...</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview...</source>
        <translation>Vista Prèvia de &amp;Fonts...</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame</source>
        <translation>Actualitza &amp;el Text</translation>
    </message>
    <message>
        <source>&amp;Background...</source>
        <translation>Sego&amp;n Pla...</translation>
    </message>
    <message>
        <source>&amp;Display Font...</source>
        <translation>&amp;Mostra Font...</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Fitxer</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Edició</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation>Paràmetre&amp;s</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Fitxer</translation>
    </message>
    <message>
        <source>Clear all Text</source>
        <translation>Buida tot el text</translation>
    </message>
    <message>
        <source>Load Text from File</source>
        <translation>Carrega el text d&apos;un Fitxer</translation>
    </message>
    <message>
        <source>Save Text to File</source>
        <translation>Desa el Text a un Fitxer</translation>
    </message>
    <message>
        <source>Update Text Frame and Exit</source>
        <translation>Actualitza el Text i Surt</translation>
    </message>
    <message>
        <source>Exit Without Updating Text Frame</source>
        <translation>Surt Sense Actualitzar el Text</translation>
    </message>
    <message>
        <source>Reload Text from Frame</source>
        <translation>Recarrega el Text del Marc</translation>
    </message>
    <message>
        <source>Update Text Frame</source>
        <translation>Actualitza el Text</translation>
    </message>
    <message>
        <source>Search/Replace</source>
        <translation>Cerca/Reemplaça</translation>
    </message>
    <message>
        <source>Current Paragraph:</source>
        <translation>Paràgraf Actual:</translation>
    </message>
    <message>
        <source>Words: </source>
        <translation>Paraules:</translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation>Lletres:</translation>
    </message>
    <message>
        <source>Totals:</source>
        <translation>Totals:</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation>Paràgrafs:</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Avís</translation>
    </message>
    <message>
        <source>Do you want to save your changes?</source>
        <translation>Vols desar els canvis?</translation>
    </message>
    <message>
        <source>Do you really want to lose all your Changes?</source>
        <translation>Realment vols perdre els teus Canvis?</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation>Realment vols esborrar tot el Text?</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Obre</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Text (*.txt);;Tots els Fitxers (*)</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Anomena i desa</translation>
    </message>
    <message>
        <source>&amp;Smart text selection</source>
        <translation>&amp;Selecció acurada de text</translation>
    </message>
</context>
<context>
    <name>StyleSelect</name>
    <message>
        <source>Underline</source>
        <translation>Subratllat</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation>Majúscules Petites</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation>Subíndex</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation>Superíndex</translation>
    </message>
    <message>
        <source>Strike Out</source>
        <translation>Barrat</translation>
    </message>
    <message>
        <source>Outline Text</source>
        <translation>Text amb Contorn</translation>
    </message>
</context>
<context>
    <name>SxwDialog</name>
    <message>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation>Fes servir el nom de document com estil de paràgraf</translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation>No ho tornis a preguntar</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Importer Options</source>
        <translation>Opcions de l&apos;Importador d&apos;OpenOffice.org Writer</translation>
    </message>
    <message>
        <source>Update Paragraph Styles</source>
        <translation>Actualitza Estils de Paràgraf</translation>
    </message>
    <message>
        <source>Enabling this will overwrite existing styles in the current Scribus document</source>
        <translation>Activant això es sobreescriuran els estils del document Scribus actual</translation>
    </message>
    <message>
        <source>Merge Paragraph Styles</source>
        <translation>Barreja Estils de Paràgraf</translation>
    </message>
    <message>
        <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document&apos;s styles are named differently.</source>
        <translation>Barreja atributs de tots els estils de paràgraf. Això farà que hi hagi pocs estils similars, mantindrà els atributs d&apos;estil fins i tot si el del document original tenen noms diferents.</translation>
    </message>
    <message>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation>Agafa el nom de document per l&apos;estil de paràgraf en Scribus.</translation>
    </message>
    <message>
        <source>Make these settings the default and do not prompt again when importing an OpenOffice.org 1.x document.</source>
        <translation>Fes que les característiques actuals siguin per defecte i no preguntis més al importar un document OpenOffice.org 1.x.</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancel.la</translation>
    </message>
</context>
<context>
    <name>TabManager</name>
    <message>
        <source>Manage Tabulators</source>
        <translation>Gestiona Tabuladors</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
</context>
<context>
    <name>Tabruler</name>
    <message>
        <source>Left</source>
        <translation>Esquerra</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Dreta</translation>
    </message>
    <message>
        <source>Full Stop</source>
        <translation>Aturada</translation>
    </message>
    <message>
        <source>Comma</source>
        <translation>Coma</translation>
    </message>
    <message>
        <source>Center</source>
        <translation>Centrat</translation>
    </message>
    <message>
        <source>&amp;Position:</source>
        <translation>&amp;Posició:</translation>
    </message>
    <message>
        <source>First &amp;Line:</source>
        <translation>Primera &amp;Línia:</translation>
    </message>
    <message>
        <source>Delete All</source>
        <translation>Esborra Tot</translation>
    </message>
    <message>
        <source>Indentation for first line of the paragraph</source>
        <translation>Sangrat per primera línia d&apos;un paràgraf</translation>
    </message>
    <message>
        <source>Indentation from the left for the whole paragraph</source>
        <translation>Sangrat per l&apos;esquerra de tot el paràgraf</translation>
    </message>
    <message>
        <source>Delete all Tabulators</source>
        <translation>Esborra tots els Tabuladors</translation>
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
        <translation>po</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>Left Ind&amp;ent:</source>
        <translation>Id&amp;entació Esquerra:</translation>
    </message>
</context>
<context>
    <name>Tree</name>
    <message>
        <source>Outline</source>
        <translation>Esquema</translation>
    </message>
    <message>
        <source>Element</source>
        <translation>Element</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Tipus</translation>
    </message>
    <message>
        <source>Information</source>
        <translation>Informació</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Avís</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation>El Nom &quot;%1&quot; no és únic
Si us plau tria&apos;n un altre.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
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
        <source>Font:</source>
        <translation>Font:</translation>
    </message>
    <message>
        <source>Group </source>
        <translation>Grup</translation>
    </message>
    <message>
        <source>Image</source>
        <translation>Imatge</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Text</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Línia</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Polígon</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation>Polilínia</translation>
    </message>
    <message>
        <source>PathText</source>
        <translation>Camí de Text</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Pàgina</translation>
    </message>
</context>
<context>
    <name>ValueDialog</name>
    <message>
        <source>Insert value</source>
        <translation>Insereix valor</translation>
    </message>
    <message>
        <source>Enter a value then press OK.</source>
        <translation>Entra un valor i prem D&apos;acord.</translation>
    </message>
    <message>
        <source>Enter a value then press OK</source>
        <translation>Entra un valor i prem D&apos;acord</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <source>Send your value to the script</source>
        <translation>Envia el valor a la seqüència</translation>
    </message>
</context>
<context>
    <name>VlnaDialog</name>
    <message>
        <source>Short Words</source>
        <comment>short words plugin</comment>
        <translation>Abreviacions</translation>
    </message>
    <message>
        <source>Apply unbreakable space on:</source>
        <comment>short words plugin</comment>
        <translation>Aplica espai inseparable a:</translation>
    </message>
    <message>
        <source>&amp;Selected frames</source>
        <comment>short words plugin</comment>
        <translation>Marcs &amp;seleccionats</translation>
    </message>
    <message>
        <source>Active &amp;page</source>
        <comment>short words plugin</comment>
        <translation>&amp;Pàgina Activa</translation>
    </message>
    <message>
        <source>&amp;All items</source>
        <comment>short words plugin</comment>
        <translation>&amp;Tots els Ítems</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <comment>short words plugin</comment>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <comment>short words plugin</comment>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>&amp;Info and
Languages</source>
        <comment>short words plugin</comment>
        <translation>&amp;Informació i
Idiomes</translation>
    </message>
    <message>
        <source>Replace defaults by user config</source>
        <comment>short words plugin</comment>
        <translation>Remplaça la configuració per la de l&apos;usuari</translation>
    </message>
    <message>
        <source>When the user config file exists 
(%1)
you can choose if you want to append your config
to the global configuration by unchecked button.

You can replace predefined values by yours
with checked button too.</source>
        <comment>short words plugin</comment>
        <translation>Quan la configuració de l&apos;usuari existeix
(%1)
pots triar si vols afegir la teva configuració
a la configuració global si no es marca el botó.

Pots remplaçar els valors predefinits pels teus
si el botó està marcat.</translation>
    </message>
    <message>
        <source>Only selected frames processed.</source>
        <comment>short words plugin</comment>
        <translation>Només es processen els marcs seleccionats.</translation>
    </message>
    <message>
        <source>Only actual page processed.</source>
        <comment>short words plugin</comment>
        <translation>Només es processa la pàgina actual.</translation>
    </message>
    <message>
        <source>All items in document processed.</source>
        <comment>short words plugin</comment>
        <translation>Tots els ítems del document processats.</translation>
    </message>
    <message>
        <source>Short Words for Scribus</source>
        <comment>short words plugin</comment>
        <translation>Abreviacions per Scribus</translation>
    </message>
    <message>
        <source>Available in the following languages</source>
        <comment>short words plugin</comment>
        <translation>Disponible en els següents idiomes</translation>
    </message>
    <message>
        <source>About Short Words</source>
        <comment>short words plugin</comment>
        <translation>Quant a Abreviacions</translation>
    </message>
</context>
<context>
    <name>WerkToolB</name>
    <message>
        <source>Tools</source>
        <translation>Eines</translation>
    </message>
    <message>
        <source>Select Items</source>
        <translation>Tria Ítems</translation>
    </message>
    <message>
        <source>Insert Text Frame</source>
        <translation>Insereix Marc de Text</translation>
    </message>
    <message>
        <source>Insert Picture</source>
        <translation>Insereix Imatge</translation>
    </message>
    <message>
        <source>Insert Table</source>
        <translation>Insereix Taula</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation>Propietats...</translation>
    </message>
    <message>
        <source>Insert Polygons</source>
        <translation>Insereix Polígons</translation>
    </message>
    <message>
        <source>Insert Lines</source>
        <translation>Insereix Línies</translation>
    </message>
    <message>
        <source>Insert Bezier Curves</source>
        <translation>Insereix Corbes Bezier</translation>
    </message>
    <message>
        <source>Insert Freehand Line</source>
        <translation>Insereix Línia manual</translation>
    </message>
    <message>
        <source>Rotate Item</source>
        <translation>Rota Ítem</translation>
    </message>
    <message>
        <source>Zoom in or out</source>
        <translation>Acosta o Allunya</translation>
    </message>
    <message>
        <source>Edit Contents of Frame</source>
        <translation>Edita Contingut de Marc</translation>
    </message>
    <message>
        <source>Edit the text with the Story Editor</source>
        <translation>Edita el text amb l&apos;Editor de Notícies</translation>
    </message>
    <message>
        <source>Link Text Frames</source>
        <translation>Enllaça Marcs de Text</translation>
    </message>
    <message>
        <source>Unlink Text Frames</source>
        <translation>Desenllaça Marcs de Text</translation>
    </message>
    <message>
        <source>Do measurements</source>
        <translation>Mesura</translation>
    </message>
    <message>
        <source>Draw various Shapes</source>
        <translation>Dibuixa diferents Formes</translation>
    </message>
</context>
<context>
    <name>WerkToolBP</name>
    <message>
        <source>PDF Tools</source>
        <translation>Eines de PDF</translation>
    </message>
    <message>
        <source>Button</source>
        <translation>Botó</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation>Camp de Text</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation>Quadre de Verificació</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation>Quadre Combinat</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation>Quadre de Llista</translation>
    </message>
    <message>
        <source>Insert PDF Fields</source>
        <translation>Inserir Camps PDF</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Text</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Enllaç</translation>
    </message>
    <message>
        <source>Insert PDF Annotations</source>
        <translation>Insereix Anotacions PDF</translation>
    </message>
</context>
<context>
    <name>ZAuswahl</name>
    <message>
        <source>Select Character:</source>
        <translation>Tria Caràcter:</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation>&amp;Insereix</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>B&amp;uida</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Tanca</translation>
    </message>
    <message>
        <source>Insert the characters at the cursor in the text</source>
        <translation>Insereix el caràcter a la posició del cursor</translation>
    </message>
    <message>
        <source>Delete the current selection(s).</source>
        <translation>Esborra la selecció actual.</translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing.</source>
        <translation>Tanca aquest diàleg i torna a l&apos;edició.</translation>
    </message>
</context>
<context>
    <name>gtFileDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation>Tria l&apos;importador a fer servir</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automàtic</translation>
    </message>
    <message>
        <source>Import text without any formatting</source>
        <translation>Importar text sense format</translation>
    </message>
    <message>
        <source>Importer:</source>
        <translation>Importador:</translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation>Codificant:</translation>
    </message>
    <message>
        <source>Import Text Only</source>
        <translation>Importar Només Text</translation>
    </message>
</context>
<context>
    <name>gtImporterDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation>Tria l&apos;importador a fer servir</translation>
    </message>
    <message>
        <source></source>
        <translation></translation>
    </message>
    <message>
        <source>Remember association</source>
        <translation>Recorda l&apos;associació</translation>
    </message>
    <message>
        <source>Remember the file extension - importer association
and do not ask again to select an importer for
files of this type.</source>
        <translation>Recorda la extensió del fitxer - Associa l&apos;Importador
i no tornis a preguntar quin importador necessito
per fitxers d&apos;aquest tipus.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
</context>
<context>
    <name>nftdialog</name>
    <message>
        <source>New From Template</source>
        <translation>Nou des de Plantilla</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Esborra</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Obre</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Tot</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nom</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Mida de Pàgina</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Colors</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Descripció</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation>Ús</translation>
    </message>
    <message>
        <source>Created with</source>
        <translation>Creat amb</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Data</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Autor</translation>
    </message>
    <message>
        <source>Downloading Templates</source>
        <translation>Descarregar Plantilles</translation>
    </message>
    <message>
        <source>Document templates can be found at http://www.scribus.net/ in the Downloads section.</source>
        <translation>Es poden trobar noves Plantilles a http://www.scribus.net/ en la secció Downloads.</translation>
    </message>
    <message>
        <source>Installing Templates</source>
        <translation>Instal.lar Plantilles</translation>
    </message>
    <message>
        <source>Extract the package to the template directory ~/.scribus/templates for the current user or PREFIX/share/scribus/templates for all users in the system.</source>
        <translation>Cal extreure el paquet en el directori de Plantilles ~/.scribus/templates per l&apos;usuari actual o a PREFIX/share/scribus/templates per tots els usuaris.</translation>
    </message>
    <message>
        <source>Preparing a template</source>
        <translation>Preparar una Plantilla</translation>
    </message>
    <message>
        <source>Make sure images and fonts you use can be used freely. If fonts cannot be shared do not collect them when saving as a template.</source>
        <translation>Cal assegurar-se que les imatges i els tipus de lletra que fas servir poden ser usades lliurement. Si les fonts no són lliures no les guardis amb la plantilla.</translation>
    </message>
    <message>
        <source>The template creator should also make sure that the Installing Templates section above applies to their templates as well. This means a user should be able to download a template package and be able to extract them to the template directory and start using them.</source>
        <translation>El creador de Plantilles hauria d&apos;estar segur que la secció d&apos;instal.lació de Plantilles anterior també li funciona a ell. Això farà que un usuari es podrà descarregar el paquet, descomprimir-lo i començar a fer servir la plantilla.</translation>
    </message>
    <message>
        <source>Removing a template</source>
        <translation>Eliminar una Plantilla</translation>
    </message>
    <message>
        <source>Removing a template from the New From Template dialog will only remove the entry from the template.xml, it will not delete the document files. A popup menu with remove is only shown if you have write access to the template.xml file.</source>
        <translation>Si eliminem una Plantilla des del diàleg &quot;Nova des de Plantilla&quot; només s&apos;eliminarà la entrada de template.xml, no s&apos;esborraran fisicament els fitxers del document. Només us apareixerà un menú emergent demanant confirmació per esborrar si teniu accés al fitxer template.xml.</translation>
    </message>
    <message>
        <source>Translating template.xml</source>
        <translation>Traduir template.xml</translation>
    </message>
    <message>
        <source>Copy an existing template.xml to a file called template.lang_COUNTRY.xml (use the same lang code that is present in the qm file for your language), for example template.fi.xml for Finnish language template.xml. The copy must be located in the same directory as the original template.xml so Scribus can load it.</source>
        <translation>Copia el fitxer template.xml a un fitxer amb nom template.lang_PAIS.xml (fes servir el mateix codi que hi ha en el fitxer qm del teu idioma), per exemple template.fi.xml per una versió en finès de template.xml. La copia ha d&apos;estar en el mateix directori que el template.xml l&apos;original perquè l&apos;Scribus el pugui fer servir.</translation>
    </message>
</context>
<context>
    <name>satdialog</name>
    <message>
        <source>Save as Template</source>
        <translation>Desa com Plantilla</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nom</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Categoria</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Mida de Pàgina</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Colors</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Descripció</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation>Ús</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Autor</translation>
    </message>
    <message>
        <source>Email</source>
        <translation>Correu electrònic</translation>
    </message>
    <message>
        <source>More Details</source>
        <translation>Més Detalls</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>D&apos;acord</translation>
    </message>
    <message>
        <source>Less Details</source>
        <translation>Menys Detalls</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation>Carta</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation>Tabloide</translation>
    </message>
    <message>
        <source>landscape</source>
        <translation>Apaisat</translation>
    </message>
    <message>
        <source>portrait</source>
        <translation></translation>
    </message>
    <message>
        <source>custom</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>tfDia</name>
    <message>
        <source>Create filter</source>
        <translation>Crea un filtre</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>B&amp;uida</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Es&amp;borra</translation>
    </message>
    <message>
        <source>Choose a previously saved filter</source>
        <translation>Tria un filtre gravat previament</translation>
    </message>
    <message>
        <source>Give a name to this filter for saving</source>
        <translation>Dóna un nom al filtre per desar-lo</translation>
    </message>
    <message>
        <source>Give a name for saving</source>
        <translation>Dóna un nom per desar</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>D&apos;ac&amp;ord</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancel.la</translation>
    </message>
</context>
<context>
    <name>tfFilter</name>
    <message>
        <source>Disable or enable this filter row</source>
        <translation>Desactiva o activa aquest filtre de línia</translation>
    </message>
    <message>
        <source>Remove this filter row</source>
        <translation>Esborra aquest filtre de línia</translation>
    </message>
    <message>
        <source>Add a new filter row</source>
        <translation>Afegeix un nou filtre de línia</translation>
    </message>
    <message>
        <source>to</source>
        <translation>a</translation>
    </message>
    <message>
        <source>and</source>
        <translation>i</translation>
    </message>
    <message>
        <source>remove match</source>
        <translation>elimina coincidents</translation>
    </message>
    <message>
        <source>do not remove match</source>
        <translation>no eliminis coincidents</translation>
    </message>
    <message>
        <source>words</source>
        <translation>paraules</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <source>Replace</source>
        <translation>Remplaça</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Aplicar</translation>
    </message>
    <message>
        <source>Value at the left is a regular expression</source>
        <translation>El valor de l&apos;esquerra és una expressió regular</translation>
    </message>
    <message>
        <source>with</source>
        <translation>amb</translation>
    </message>
    <message>
        <source>paragraph style</source>
        <translation>estil de paràgraf</translation>
    </message>
    <message>
        <source>all instances of</source>
        <translation>totes les instàncies de </translation>
    </message>
    <message>
        <source>all paragraphs</source>
        <translation>tots els paràgrafs</translation>
    </message>
    <message>
        <source>paragraphs starting with</source>
        <translation>paràgrafs començats per</translation>
    </message>
    <message>
        <source>paragraphs with less than</source>
        <translation>paràgrafs amb menys de</translation>
    </message>
    <message>
        <source>paragraphs with more than</source>
        <translation>paràgrafs amb més de</translation>
    </message>
</context>
</TS>
