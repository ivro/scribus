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
        <source>newPage(where [,&quot;template&quot;])

Creates a new page. If &quot;where&quot; is -1 the new Page is appended to the
document, otherwise the new page is inserted before &quot;where&quot;. Page numbers are
counted from 1 upwards, no matter what the displayed first page number of your
document is. The optional parameter &quot;template&quot; specifies the name of the
template page for the new page.

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
        <source>messagebarText(&quot;string&quot;)

Writes the &quot;string&quot; into the Scribus message bar (status line). The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>@default</name>
    <message>
        <source>OK</source>
        <translation type="obsolete">Oke</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="obsolete">Nee</translation>
    </message>
    <message>
        <source>W:</source>
        <translation type="obsolete">W:</translation>
    </message>
    <message>
        <source>Add</source>
        <translation type="obsolete">Toevoegen</translation>
    </message>
    <message>
        <source>All</source>
        <translation type="obsolete">Alles</translation>
    </message>
    <message>
        <source>Big</source>
        <translation type="obsolete">Groot</translation>
    </message>
    <message>
        <source>Box</source>
        <translation type="obsolete">Box</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation type="obsolete">Knippen</translation>
    </message>
    <message>
        <source>GUI</source>
        <translation type="obsolete">GUI</translation>
    </message>
    <message>
        <source>New</source>
        <translation type="obsolete">Nieuw</translation>
    </message>
    <message>
        <source>Old</source>
        <translation type="obsolete">Oud</translation>
    </message>
    <message>
        <source>Use</source>
        <translation type="obsolete">Gebruik</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="obsolete">Ja</translation>
    </message>
    <message>
        <source>by:</source>
        <translation type="obsolete">Door:</translation>
    </message>
    <message>
        <source>sum</source>
        <translation type="obsolete">som</translation>
    </message>
    <message>
        <source>to:</source>
        <translation type="obsolete">naar:</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation type="obsolete">Doel</translation>
    </message>
    <message>
        <source>Bold</source>
        <translation type="obsolete">Vet</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation type="obsolete">Kopieëren</translation>
    </message>
    <message>
        <source>Date</source>
        <translation type="obsolete">Datum</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation type="obsolete">Bewerken</translation>
    </message>
    <message>
        <source>Face</source>
        <translation type="obsolete">Aangezicht</translation>
    </message>
    <message>
        <source>Exit</source>
        <translation type="obsolete">Afsluiten</translation>
    </message>
    <message>
        <source>File</source>
        <translation type="obsolete">Bestand</translation>
    </message>
    <message>
        <source>Font</source>
        <translation type="obsolete">Lettertype</translation>
    </message>
    <message>
        <source>Goto</source>
        <translation type="obsolete">Ga Naar</translation>
    </message>
    <message>
        <source>Help</source>
        <translation type="obsolete">Help</translation>
    </message>
    <message>
        <source>Item</source>
        <translation type="obsolete">Item</translation>
    </message>
    <message>
        <source>Left</source>
        <translation type="obsolete">Links</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="obsolete">Lijn</translation>
    </message>
    <message>
        <source>Link</source>
        <translation type="obsolete">Koppeling</translation>
    </message>
    <message>
        <source>Lock</source>
        <translation type="obsolete">Sluit</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Geen</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="obsolete">Openen</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="obsolete">Pagina</translation>
    </message>
    <message>
        <source>Path</source>
        <translation type="obsolete">Lokatie</translation>
    </message>
    <message>
        <source>Push</source>
        <translation type="obsolete">Druk</translation>
    </message>
    <message>
        <source>Redo</source>
        <translation type="obsolete">Opnieuw doen</translation>
    </message>
    <message>
        <source>Quit</source>
        <translation type="obsolete">Afsluiten</translation>
    </message>
    <message>
        <source>Save</source>
        <translation type="obsolete">Opslaan</translation>
    </message>
    <message>
        <source>Size</source>
        <translation type="obsolete">Afmeting</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation type="obsolete">Overslaan</translation>
    </message>
    <message>
        <source>Exiting now</source>
        <translation type="obsolete">Er wordt nu afgesloten</translation>
    </message>
    <message>
        <source>Star</source>
        <translation type="obsolete">Ster</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="obsolete">Tekst</translation>
    </message>
    <message>
        <source>Thin</source>
        <translation type="obsolete">Dun</translation>
    </message>
    <message>
        <source>Tile</source>
        <translation type="obsolete">Naast Elkaar</translation>
    </message>
    <message>
        <source>Time</source>
        <translation type="obsolete">Tijd</translation>
    </message>
    <message>
        <source>Top:</source>
        <translation type="obsolete">Boven:</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Type</translation>
    </message>
    <message>
        <source>Undo</source>
        <translation type="obsolete">Ongedaan maken</translation>
    </message>
    <message>
        <source>View</source>
        <translation type="obsolete">Bekijken</translation>
    </message>
    <message>
        <source>Wide</source>
        <translation type="obsolete">Wijd</translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation type="obsolete">Wegvegen</translation>
    </message>
    <message>
        <source>Shears the Path horizotal to the left</source>
        <translation type="obsolete">Schaart de richting horizontaal naar links</translation>
    </message>
    <message>
        <source>Align Right</source>
        <translation type="obsolete">Align Rechts</translation>
    </message>
    <message>
        <source>Moves to your Document Directory.
This can be set in the Preferences.</source>
        <translation type="obsolete">Verplaats naar Document Directory.
Kan bij voorkeuren worden ingesteld.</translation>
    </message>
    <message>
        <source>Shears the Path vertical up</source>
        <translation type="obsolete">Schaart de richting verticaal omhoog</translation>
    </message>
    <message>
        <source>Get Field Names</source>
        <translation type="obsolete">Haal Veldnamen</translation>
    </message>
    <message>
        <source>Strikethru</source>
        <translation type="obsolete">Doorhalen</translation>
    </message>
    <message>
        <source>Align Center</source>
        <translation type="obsolete">Align Gecentreerd</translation>
    </message>
    <message>
        <source>Print Preview</source>
        <translation type="obsolete">Afdruk voorbeeld</translation>
    </message>
    <message>
        <source>&amp;Font</source>
        <translation type="obsolete">&amp;Lettertype</translation>
    </message>
    <message>
        <source>&amp;Move</source>
        <translation type="obsolete">&amp;Verplaatsen</translation>
    </message>
    <message>
        <source>&amp;Red:</source>
        <translation type="obsolete">&amp;Rood:</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation type="obsolete">&amp;Grootte</translation>
    </message>
    <message>
        <source>Styles...</source>
        <translation type="obsolete">Stijlen...</translation>
    </message>
    <message>
        <source>Compress File</source>
        <translation type="obsolete">Comprimeer Bestand</translation>
    </message>
    <message>
        <source>Prepend Currency Symbol</source>
        <translation type="obsolete">Prepend Waarde Symbool</translation>
    </message>
    <message>
        <source>Images:</source>
        <translation type="obsolete">Afbeeldingen:</translation>
    </message>
    <message>
        <source>Submit Form</source>
        <translation type="obsolete">Verstuur Form</translation>
    </message>
    <message>
        <source>Distribute/Align...</source>
        <translation type="obsolete">Distribueer/Align...</translation>
    </message>
    <message>
        <source>Limit of</source>
        <translation type="obsolete">Limiet van</translation>
    </message>
    <message>
        <source>Loading aborted</source>
        <translation type="obsolete">Laden afgebroken</translation>
    </message>
    <message>
        <source>About</source>
        <translation type="obsolete">Over</translation>
    </message>
    <message>
        <source>Align</source>
        <translation type="obsolete">Align</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation type="obsolete">Toepassen</translation>
    </message>
    <message>
        <source>Block</source>
        <translation type="obsolete">Blok</translation>
    </message>
    <message>
        <source>Rounded Rectangle</source>
        <translation type="obsolete">Afgerond Vierkant</translation>
    </message>
    <message>
        <source>Check</source>
        <translation type="obsolete">Controle</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation type="obsolete">Leeg Maken</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="obsolete">Sluiten</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="obsolete">Kleur</translation>
    </message>
    <message>
        <source>Cross</source>
        <translation type="obsolete">Kruis</translation>
    </message>
    <message>
        <source>Binding:</source>
        <translation type="obsolete">Binding:</translation>
    </message>
    <message>
        <source>Face:</source>
        <translation type="obsolete">Aangezicht:</translation>
    </message>
    <message>
        <source>File </source>
        <translation type="obsolete">Bestand </translation>
    </message>
    <message>
        <source>File:</source>
        <translation type="obsolete">Bestand:</translation>
    </message>
    <message>
        <source>On Focus</source>
        <translation type="obsolete">Bij Focus</translation>
    </message>
    <message>
        <source>Fonts</source>
        <translation type="obsolete">Lettertypes</translation>
    </message>
    <message>
        <source>Frame</source>
        <translation type="obsolete">Kader</translation>
    </message>
    <message>
        <source>From:</source>
        <translation type="obsolete">Van:</translation>
    </message>
    <message>
        <source>Go To</source>
        <translation type="obsolete">Ga Naar</translation>
    </message>
    <message>
        <source>Group</source>
        <translation type="obsolete">Groeperen</translation>
    </message>
    <message>
        <source>Image</source>
        <translation type="obsolete">Afbeelding</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation type="obsolete">Minimaliseer</translation>
    </message>
    <message>
        <source>Inset</source>
        <translation type="obsolete">Inset</translation>
    </message>
    <message>
        <source>Round
Corners:</source>
        <translation type="obsolete">Ronde
Hoeken:</translation>
    </message>
    <message>
        <source>Left:</source>
        <translation type="obsolete">Links:</translation>
    </message>
    <message>
        <source>Level</source>
        <translation type="obsolete">Level</translation>
    </message>
    <message>
        <source>Line:</source>
        <translation type="obsolete">Lijn:</translation>
    </message>
    <message>
        <source>Lower</source>
        <translation type="obsolete">Lager</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="obsolete">Naam:</translation>
    </message>
    <message>
        <source>Even Pages only</source>
        <translation type="obsolete">Alleen Even Pagina&apos;s</translation>
    </message>
    <message>
        <source>Never</source>
        <translation type="obsolete">Nooit</translation>
    </message>
    <message>
        <source>Nodes</source>
        <translation type="obsolete">Nodes</translation>
    </message>
    <message>
        <source>Vert. Scale:</source>
        <translation type="obsolete">Vert. Schaling:</translation>
    </message>
    <message>
        <source>Print all</source>
        <translation type="obsolete">Alles Afdrukken</translation>
    </message>
    <message>
        <source>Page:</source>
        <translation type="obsolete">Pagina:</translation>
    </message>
    <message>
        <source>Paste</source>
        <translation type="obsolete">Invoegen</translation>
    </message>
    <message>
        <source>Paths</source>
        <translation type="obsolete">Lokaties</translation>
    </message>
    <message>
        <source>Other</source>
        <translation type="obsolete">Anders</translation>
    </message>
    <message>
        <source>Plain</source>
        <translation type="obsolete">Vlak</translation>
    </message>
    <message>
        <source>Print</source>
        <translation type="obsolete">Afdrukken</translation>
    </message>
    <message>
        <source>Raise</source>
        <translation type="obsolete">Hoger</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation type="obsolete">Gereed</translation>
    </message>
    <message>
        <source>Reset</source>
        <translation type="obsolete">Reset</translation>
    </message>
    <message>
        <source>Right</source>
        <translation type="obsolete">Rechts</translation>
    </message>
    <message>
        <source>Points (pts)</source>
        <translation type="obsolete">Punten (pts)</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation type="obsolete">Schaduw</translation>
    </message>
    <message>
        <source>Shape</source>
        <translation type="obsolete">Vorm</translation>
    </message>
    <message>
        <source>Inside:</source>
        <translation type="obsolete">Binnen:</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation type="obsolete">Afmeting:</translation>
    </message>
    <message>
        <source>Small</source>
        <translation type="obsolete">Klein</translation>
    </message>
    <message>
        <source>Solid</source>
        <translation type="obsolete">Vast</translation>
    </message>
    <message>
        <source>Split</source>
        <translation type="obsolete">Splitsen</translation>
    </message>
    <message>
        <source>instead</source>
        <translation type="obsolete">Als</translation>
    </message>
    <message>
        <source>Style</source>
        <translation type="obsolete">Stijl</translation>
    </message>
    <message>
        <source>Theme</source>
        <translation type="obsolete">Thema</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation type="obsolete">Gereedschappen</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation type="obsolete">Type:</translation>
    </message>
    <message>
        <source>Units</source>
        <translation type="obsolete">Eenheden</translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="obsolete">Waarde</translation>
    </message>
    <message>
        <source>User:</source>
        <translation type="obsolete">Gebruiker:</translation>
    </message>
    <message>
        <source>Options...</source>
        <translation type="obsolete">Opties...</translation>
    </message>
    <message>
        <source>Startoffset:</source>
        <translation type="obsolete">Startoffset</translation>
    </message>
    <message>
        <source>Snap to Guides</source>
        <translation type="obsolete">Snap tot Richtlijnen</translation>
    </message>
    <message>
        <source>Line Styles...</source>
        <translation type="obsolete">Lijn Stijlen...</translation>
    </message>
    <message>
        <source>Modify Textframe</source>
        <translation type="obsolete">Pas Tekstkader aan</translation>
    </message>
    <message>
        <source>If you uncheck this you will get an Dialog
everytime a possible Hyphenation is found.</source>
        <translation type="obsolete">Als je dit uitzet dan krijg je een waarschuwing
elke keer als een hyphenatie is gevonden.</translation>
    </message>
    <message>
        <source>Align Text Left</source>
        <translation type="obsolete">Align Tekst Links</translation>
    </message>
    <message>
        <source>Send to Back</source>
        <translation type="obsolete">Plaats naar achter</translation>
    </message>
    <message>
        <source>Send to Scrapbook</source>
        <translation type="obsolete">Stuur naar Kladblok</translation>
    </message>
    <message>
        <source>Local Y-Pos:</source>
        <translation type="obsolete">Lokale Y-Pos:</translation>
    </message>
    <message>
        <source>The following Programs are missing:</source>
        <translation type="obsolete">De volgende Programma&apos;s missen:</translation>
    </message>
    <message>
        <source>Major Grid Color:</source>
        <translation type="obsolete">Hoofdgrid kleur:</translation>
    </message>
    <message>
        <source>Minor Grid Color:</source>
        <translation type="obsolete">Subgrid Kleur:</translation>
    </message>
    <message>
        <source>Create Textchains</source>
        <translation type="obsolete">Maak TekstKoppelingen</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation type="obsolete">List Box</translation>
    </message>
    <message>
        <source>Local X-Pos:</source>
        <translation type="obsolete">Lokale X-Pos:</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation type="obsolete">Italiaans</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation type="obsolete">Oplossen</translation>
    </message>
    <message>
        <source>Snap to Grid</source>
        <translation type="obsolete">Snap tot Grid</translation>
    </message>
    <message>
        <source>Use Currency Symbol</source>
        <translation type="obsolete">Gebruik Waarde Symbool</translation>
    </message>
    <message>
        <source>Import Page Nr:</source>
        <translation type="obsolete">Importeer Pagina Nr:</translation>
    </message>
    <message>
        <source>Shears the Path horizotal to the right</source>
        <translation type="obsolete">Schaart de richting horizontaal naar rechts</translation>
    </message>
    <message>
        <source>Bezier Curve</source>
        <translation type="obsolete">Bezier Curve</translation>
    </message>
    <message>
        <source>Keyboard Shortcuts...</source>
        <translation type="obsolete">Toets-Snelkoppelingen...</translation>
    </message>
    <message>
        <source>Unable to create PDF-File.</source>
        <translation type="obsolete">Kon niet als PDF-Bestand opslaan.</translation>
    </message>
    <message>
        <source>Other Options</source>
        <translation type="obsolete">Andere Opties</translation>
    </message>
    <message>
        <source>Use ICC-Profile</source>
        <translation type="obsolete">Gebruik ICC-Profiel</translation>
    </message>
    <message>
        <source>Path to Fontfile</source>
        <translation type="obsolete">Lettertype Lokatie</translation>
    </message>
    <message>
        <source>&amp;Define Custom Colors &gt;&gt;</source>
        <translation type="obsolete">&amp;Bepaal Aangepaste Kleuren &gt;&gt;</translation>
    </message>
    <message>
        <source>New Document</source>
        <translation type="obsolete">Nieuw Document</translation>
    </message>
    <message>
        <source>User Defined Key</source>
        <translation type="obsolete">Gebruiker Gedefinieerde Toetsen</translation>
    </message>
    <message>
        <source>Opens a Document</source>
        <translation type="obsolete">Opent een Document</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="obsolete">Horizontaal</translation>
    </message>
    <message>
        <source>Number Format</source>
        <translation type="obsolete">Nummer Formaat</translation>
    </message>
    <message>
        <source>Printing-Error</source>
        <translation type="obsolete">Afdruk-Fouten</translation>
    </message>
    <message>
        <source>Closes this Bezier Curve</source>
        <translation type="obsolete">Sluit deze Bezier Curve</translation>
    </message>
    <message>
        <source>Convex Polygon</source>
        <translation type="obsolete">Convexe Polygoon</translation>
    </message>
    <message>
        <source>Zooms in or out</source>
        <translation type="obsolete">In of Uitzoomen</translation>
    </message>
    <message>
        <source>This is the length of the smallest word to be hyphenated.</source>
        <translation type="obsolete">Dit is de lengte van het kleinste te hyphenaten woord</translation>
    </message>
    <message>
        <source>Caption overlays Icon</source>
        <translation type="obsolete">Kapitaal over Icoon</translation>
    </message>
    <message>
        <source>Sorry, no Manual available!</source>
        <translation type="obsolete">Sorry, geen Handleiding beschikbaar</translation>
    </message>
    <message>
        <source>Is PDF-Bookmark</source>
        <translation type="obsolete">Is PDF-bladwijzer</translation>
    </message>
    <message>
        <source>Getting ICC-Profiles</source>
        <translation type="obsolete">Ophalen ICC-Profielen</translation>
    </message>
    <message>
        <source>Flip horizontal</source>
        <translation type="obsolete">Flip horizontaal</translation>
    </message>
    <message>
        <source>Check Style:</source>
        <translation type="obsolete">Controle Style:</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="obsolete">Absolute Kleurmetric</translation>
    </message>
    <message>
        <source>Initializing Plugins</source>
        <translation type="obsolete">Plugins worden geinitialiseerd</translation>
    </message>
    <message>
        <source>Moving Lines:</source>
        <translation type="obsolete">Verplaatste Lijnen:</translation>
    </message>
    <message>
        <source>No Print</source>
        <translation type="obsolete">Geen Afdruk</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation type="obsolete">Geen Stijl</translation>
    </message>
    <message>
        <source>No Title</source>
        <translation type="obsolete">Geen Titel</translation>
    </message>
    <message>
        <source>Smart Hyphen</source>
        <translation type="obsolete">Slim Hyphen</translation>
    </message>
    <message>
        <source>Leave Anyway</source>
        <translation type="obsolete">Ga Alsnog</translation>
    </message>
    <message>
        <source>Use Encryption</source>
        <translation type="obsolete">Gebruik Encryptie</translation>
    </message>
    <message>
        <source>To page:</source>
        <translation type="obsolete">Tot Pagina:</translation>
    </message>
    <message>
        <source>Error during EPS-Export</source>
        <translation type="obsolete">Fout tijdens EPS-Omzetting</translation>
    </message>
    <message>
        <source>Flip vertical</source>
        <translation type="obsolete">Flip verticaal</translation>
    </message>
    <message>
        <source>Picture Frame</source>
        <translation type="obsolete">Afbeeldings Kader</translation>
    </message>
    <message>
        <source>Name of the Style is not unique</source>
        <translation type="obsolete">De Stijlnaam is niet uniek</translation>
    </message>
    <message>
        <source>Template for this Page:</source>
        <translation type="obsolete">Template voor deze Pagina:</translation>
    </message>
    <message>
        <source>Page-Colors</source>
        <translation type="obsolete">Pagina-Kleuren</translation>
    </message>
    <message>
        <source>Missing Font</source>
        <translation type="obsolete">Ontbrekend Lettertype</translation>
    </message>
    <message>
        <source>Downsample Images to:</source>
        <translation type="obsolete">Afbeeldingen terugbrengen tot:</translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="obsolete">Achtergrond</translation>
    </message>
    <message>
        <source>Hide Outline</source>
        <translation type="obsolete">Verberg Omtrek</translation>
    </message>
    <message>
        <source>Don&apos;t change</source>
        <translation type="obsolete">Niet veranderen</translation>
    </message>
    <message>
        <source>Printing aborted</source>
        <translation type="obsolete">Afdrukken afgebroken</translation>
    </message>
    <message>
        <source>Move Bookmark</source>
        <translation type="obsolete">Verplaats Bladwijzer</translation>
    </message>
    <message>
        <source>Print Normal</source>
        <translation type="obsolete">Druk Normaal af</translation>
    </message>
    <message>
        <source>Modify Pathtext</source>
        <translation type="obsolete">Pas Lokatietekst aan</translation>
    </message>
    <message>
        <source>Top Sides</source>
        <translation type="obsolete">Boven Kant</translation>
    </message>
    <message>
        <source>Scale How:</source>
        <translation type="obsolete">Schaal Hoe:</translation>
    </message>
    <message>
        <source> saved</source>
        <translation type="obsolete"> opgeslagen</translation>
    </message>
    <message>
        <source>Submit to URL:</source>
        <translation type="obsolete">Stuur naar URL:</translation>
    </message>
    <message>
        <source>Character Settings</source>
        <translation type="obsolete">Teken Instellingen</translation>
    </message>
    <message>
        <source>Radial Gradient</source>
        <translation type="obsolete">Radiale Gradient</translation>
    </message>
    <message>
        <source>Layout:</source>
        <translation type="obsolete">Layout:</translation>
    </message>
    <message>
        <source>File &amp;type:</source>
        <translation type="obsolete">Bestands &amp;type:</translation>
    </message>
    <message>
        <source>Export Range</source>
        <translation type="obsolete">Exporteer Bereik</translation>
    </message>
    <message>
        <source>File &amp;name:</source>
        <translation type="obsolete">Bestands &amp;naam:</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation type="obsolete">Gestreepte Dubbel Onderbroken Lijn</translation>
    </message>
    <message>
        <source>Caption only</source>
        <translation type="obsolete">Alleen Kapitaal</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Sluiten</translation>
    </message>
    <message>
        <source>File Options</source>
        <translation type="obsolete">Bestands Instellingen</translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation type="obsolete">Lettertype %1 is niet geinstalleerd</translation>
    </message>
    <message>
        <source>Calculate</source>
        <translation type="obsolete">Bereken</translation>
    </message>
    <message>
        <source>Scaled to </source>
        <translation type="obsolete">Schalen naar </translation>
    </message>
    <message>
        <source>Horizontal Gradient</source>
        <translation type="obsolete">Horizontale Gradient</translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation type="obsolete">Rechter Rand</translation>
    </message>
    <message>
        <source>Simulate Printer on the Screen</source>
        <translation type="obsolete">Simuleer Afdruk op het scherm</translation>
    </message>
    <message>
        <source>Length:</source>
        <translation type="obsolete">Lengte:</translation>
    </message>
    <message>
        <source>Grab-Radius</source>
        <translation type="obsolete">Grijp-Radius</translation>
    </message>
    <message>
        <source>Delete...</source>
        <translation type="obsolete">Verwijderen...</translation>
    </message>
    <message>
        <source>Use PDF-1.4 Transparency Features</source>
        <translation type="obsolete">Gebruik PDF-1.4 Transparantie Kenmerken</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="obsolete">Kleine Koppen</translation>
    </message>
    <message>
        <source>Roll Over</source>
        <translation type="obsolete">Roll Over</translation>
    </message>
    <message>
        <source>Value is not validated</source>
        <translation type="obsolete">Waarde is niet gevalideerd</translation>
    </message>
    <message>
        <source>Effect Type:</source>
        <translation type="obsolete">Effect Type:</translation>
    </message>
    <message>
        <source>Select new Font:</source>
        <translation type="obsolete">Selecteer nieuw Font:</translation>
    </message>
    <message>
        <source>Document contains: %1 Page(s)</source>
        <translation type="obsolete">Document bevat: %1 Pagina(s)</translation>
    </message>
    <message>
        <source>Scaling X:</source>
        <translation type="obsolete">X Schaling:</translation>
    </message>
    <message>
        <source>Scaling Y:</source>
        <translation type="obsolete">Y Schaling</translation>
    </message>
    <message>
        <source>Line up</source>
        <translation type="obsolete">Naast Elkaar</translation>
    </message>
    <message>
        <source>Prints the current Document</source>
        <translation type="obsolete">Drukt het huidige Document af</translation>
    </message>
    <message>
        <source>Printing Mode</source>
        <translation type="obsolete">Afdruk Mode</translation>
    </message>
    <message>
        <source>Fonts to embed:</source>
        <translation type="obsolete">In te bedden Lettertypes:</translation>
    </message>
    <message>
        <source>Create PDF-File</source>
        <translation type="obsolete">Maak PDF-Bestand</translation>
    </message>
    <message>
        <source>Global JavaScripts</source>
        <translation type="obsolete">Globale JavaScripts</translation>
    </message>
    <message>
        <source>Select Character</source>
        <translation type="obsolete">Selecteer Teken</translation>
    </message>
    <message>
        <source>Effect Duration:</source>
        <translation type="obsolete">Effect Tijdsduur</translation>
    </message>
    <message>
        <source>Displacement</source>
        <translation type="obsolete">Verplaatsing</translation>
    </message>
    <message>
        <source>Multiple Duplicate</source>
        <translation type="obsolete">Meerdere Duplicaten</translation>
    </message>
    <message>
        <source>Error creating PDF-File..</source>
        <translation type="obsolete">Fout bij aanmaken PDF-Bestand...</translation>
    </message>
    <message>
        <source>Linespacing:</source>
        <translation type="obsolete">Lijnspatiëring</translation>
    </message>
    <message>
        <source>Insert Rectangles</source>
        <translation type="obsolete">Voeg Vierkant in</translation>
    </message>
    <message>
        <source>Insert Ovals</source>
        <translation type="obsolete">Voeg Ovaal in</translation>
    </message>
    <message>
        <source>Show Outline</source>
        <translation type="obsolete">Toon Omtrek</translation>
    </message>
    <message>
        <source>Load...</source>
        <translation type="obsolete">Laad...</translation>
    </message>
    <message>
        <source>Insert Lines</source>
        <translation type="obsolete">Voeg Lijn in</translation>
    </message>
    <message>
        <source>Programming:</source>
        <translation type="obsolete">Programmering:</translation>
    </message>
    <message>
        <source>Show Page Palette</source>
        <translation type="obsolete">Toon Pagina Pallet</translation>
    </message>
    <message>
        <source>Insert Picture</source>
        <translation type="obsolete">Voeg Afbeelding in</translation>
    </message>
    <message>
        <source>Colors...</source>
        <translation type="obsolete">Kleuren...</translation>
    </message>
    <message>
        <source>Distance from Curve:</source>
        <translation type="obsolete">Afstand van Curve:</translation>
    </message>
    <message>
        <source>Hide Page Palette</source>
        <translation type="obsolete">Verberg Pagina Pallet</translation>
    </message>
    <message>
        <source>Vertical Scaling</source>
        <translation type="obsolete">Verticale Schaling</translation>
    </message>
    <message>
        <source>Insert Pagenumber</source>
        <translation type="obsolete">Voeg Paginanummer in</translation>
    </message>
    <message>
        <source>Page per Sheet</source>
        <translation type="obsolete">Pagina per Sheet</translation>
    </message>
    <message>
        <source>maximum</source>
        <translation type="obsolete">maximum</translation>
    </message>
    <message>
        <source>Formatting</source>
        <translation type="obsolete">Formatering</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation type="obsolete">Combo Box</translation>
    </message>
    <message>
        <source>Thumbnails</source>
        <translation type="obsolete">Miniweergaven</translation>
    </message>
    <message>
        <source>Resolution:</source>
        <translation type="obsolete">Resolutie:</translation>
    </message>
    <message>
        <source>Template (Left Page):</source>
        <translation type="obsolete">Template (linker Pagina):</translation>
    </message>
    <message>
        <source>First Pagenumber:</source>
        <translation type="obsolete">Eerste Paginanummer:</translation>
    </message>
    <message>
        <source>Move Page(s):</source>
        <translation type="obsolete">Verplaats Pagina(s):</translation>
    </message>
    <message>
        <source>Custom validate script:</source>
        <translation type="obsolete">Eigen validatie script:</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation type="obsolete">Zoeken naar Lettertypen</translation>
    </message>
    <message>
        <source>Paper format</source>
        <translation type="obsolete">Papier formaat</translation>
    </message>
    <message>
        <source>Delete from:</source>
        <translation type="obsolete">Verwijderen van:</translation>
    </message>
    <message>
        <source>Enables automatic checking of your Text during Typing.</source>
        <translation type="obsolete">Aanzetten van automatische Tekst controle tijdens Typen.</translation>
    </message>
    <message>
        <source>Insert Page...</source>
        <translation type="obsolete">Voeg Pagina in...</translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation type="obsolete">Links naar Rechts</translation>
    </message>
    <message>
        <source>Delete Color</source>
        <translation type="obsolete">Verwijder Kleur</translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation type="obsolete">Rechts naar Links</translation>
    </message>
    <message>
        <source>Select Items</source>
        <translation type="obsolete">Selecteer Items</translation>
    </message>
    <message>
        <source>Scrapbooks (*.scs);; All Files (*)</source>
        <translation type="obsolete">Kladblok  (*.scs);; Alle Bestanden (*)</translation>
    </message>
    <message>
        <source>Document Setup</source>
        <translation type="obsolete">Document Opzet</translation>
    </message>
    <message>
        <source>Select color</source>
        <translation type="obsolete">Kies Kleur</translation>
    </message>
    <message>
        <source>System Profiles</source>
        <translation type="obsolete">Systeem Profielen</translation>
    </message>
    <message>
        <source>Edit Polygon</source>
        <translation type="obsolete">Bewerk Polygoon</translation>
    </message>
    <message>
        <source>Delete Nodes</source>
        <translation type="obsolete">Verwijder Nodes</translation>
    </message>
    <message>
        <source>Delete Page:</source>
        <translation type="obsolete">Verwijder Pagina:</translation>
    </message>
    <message>
        <source>Delete Pages</source>
        <translation type="obsolete">Verwijder pagina&apos;s</translation>
    </message>
    <message>
        <source>Middles</source>
        <translation type="obsolete">Midden</translation>
    </message>
    <message>
        <source>Delete Layer</source>
        <translation type="obsolete">Laag Verwijderen</translation>
    </message>
    <message>
        <source>Replace it with:</source>
        <translation type="obsolete">Vervangen met:</translation>
    </message>
    <message>
        <source>minimum</source>
        <translation type="obsolete">minimum</translation>
    </message>
    <message>
        <source>Caption below Icon</source>
        <translation type="obsolete">Kapitaal beneden Icoon</translation>
    </message>
    <message>
        <source>Hyphenator Settings</source>
        <translation type="obsolete">Hyphenatie Instellingen</translation>
    </message>
    <message>
        <source>Missing</source>
        <translation type="obsolete">Ontbrekend</translation>
    </message>
    <message>
        <source>Document Info...</source>
        <translation type="obsolete">Document Informatie...</translation>
    </message>
    <message>
        <source>Color Model</source>
        <translation type="obsolete">Kleur Model</translation>
    </message>
    <message>
        <source>Output Profile:</source>
        <translation type="obsolete">Uitvoer Profiel</translation>
    </message>
    <message>
        <source>Lower Layer</source>
        <translation type="obsolete">Verlaag Laag</translation>
    </message>
    <message>
        <source>Solid Colors:</source>
        <translation type="obsolete">Vaste Kleuren:</translation>
    </message>
    <message>
        <source>Generate Thumbnails</source>
        <translation type="obsolete">Maak Miniweergaven</translation>
    </message>
    <message>
        <source>&amp;Add To Custom Colors</source>
        <translation type="obsolete">&amp;Voegtoe aan Aangepaste Kleuren</translation>
    </message>
    <message>
        <source>Mark Colors out of Gamut</source>
        <translation type="obsolete">Markeer Kleuren vanuit Gamut</translation>
    </message>
    <message>
        <source>Move...</source>
        <translation type="obsolete">Verplaatsen...</translation>
    </message>
    <message>
        <source>Template:</source>
        <translation type="obsolete">Template:</translation>
    </message>
    <message>
        <source>Above:</source>
        <translation type="obsolete">Boven:</translation>
    </message>
    <message>
        <source>Accept</source>
        <translation type="obsolete">Accepteer</translation>
    </message>
    <message>
        <source>Add...</source>
        <translation type="obsolete">Toevoegen...</translation>
    </message>
    <message>
        <source>Action</source>
        <translation type="obsolete">Actie</translation>
    </message>
    <message>
        <source>Do you really want do delete this Style?</source>
        <translation type="obsolete">Wil je echt deze stijl verwijderen?</translation>
    </message>
    <message>
        <source>Display Frames</source>
        <translation type="obsolete">Toon Kaders</translation>
    </message>
    <message>
        <source>Show Frames</source>
        <translation type="obsolete">Toon Kaders</translation>
    </message>
    <message>
        <source>Rendering Intents</source>
        <translation type="obsolete">Rendering Intents</translation>
    </message>
    <message>
        <source>Rendering Intent:</source>
        <translation type="obsolete">Rendering Intent:</translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation type="obsolete">Rendering-Intentie:</translation>
    </message>
    <message>
        <source>Always</source>
        <translation type="obsolete">Altijd</translation>
    </message>
    <message>
        <source>Angle:</source>
        <translation type="obsolete">Hoek:</translation>
    </message>
    <message>
        <source>Append</source>
        <translation type="obsolete">Doorgaan</translation>
    </message>
    <message>
        <source>Align Text Center</source>
        <translation type="obsolete">Align Tekst geCentreerd</translation>
    </message>
    <message>
        <source>Below:</source>
        <translation type="obsolete">Onder:</translation>
    </message>
    <message>
        <source>Bl&amp;ue:</source>
        <translation type="obsolete">Bla&amp;uw:</translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation type="obsolete">Luiken</translation>
    </message>
    <message>
        <source>Border</source>
        <translation type="obsolete">Rand</translation>
    </message>
    <message>
        <source>Hide Frames</source>
        <translation type="obsolete">Verberg Kaders</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Annuleren</translation>
    </message>
    <message>
        <source>Date Format</source>
        <translation type="obsolete">Datum Formaat</translation>
    </message>
    <message>
        <source>Center</source>
        <translation type="obsolete">Centreer</translation>
    </message>
    <message>
        <source>Button</source>
        <translation type="obsolete">Knop</translation>
    </message>
    <message>
        <source>Advanced Options...</source>
        <translation type="obsolete">Geavanceerde Opties...</translation>
    </message>
    <message>
        <source>Circle</source>
        <translation type="obsolete">Cirkel</translation>
    </message>
    <message>
        <source>New Color:</source>
        <translation type="obsolete">Nieuwe Kleur:</translation>
    </message>
    <message>
        <source>Hide Guides</source>
        <translation type="obsolete">Verberg Richtlijnen</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="obsolete">Kleur:</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation type="obsolete">Kleuren</translation>
    </message>
    <message>
        <source>Field Properties</source>
        <translation type="obsolete">Veld Eigenschappen</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation type="obsolete">Deens</translation>
    </message>
    <message>
        <source>Dashed</source>
        <translation type="obsolete">Gestreept</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="obsolete">Verwijderen</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="obsolete">Aangepast</translation>
    </message>
    <message>
        <source>Time Format</source>
        <translation type="obsolete">Tijds Formaat</translation>
    </message>
    <message>
        <source>Endings:</source>
        <translation type="obsolete">Afsluitingen:</translation>
    </message>
    <message>
        <source>Disp.:</source>
        <translation type="obsolete">Verschuiving:</translation>
    </message>
    <message>
        <source>Czech:</source>
        <translation type="obsolete">Tzjechs:</translation>
    </message>
    <message>
        <source>Show Guides</source>
        <translation type="obsolete">Toon Richtlijnen</translation>
    </message>
    <message>
        <source>Horizontal Shift:</source>
        <translation type="obsolete">Horizontale Verschuiving:</translation>
    </message>
    <message>
        <source>Lock Guides</source>
        <translation type="obsolete">Zet Richtlijnen vast</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="obsolete">Landschap</translation>
    </message>
    <message>
        <source>Show Images</source>
        <translation type="obsolete">Toon Afbeeldingen</translation>
    </message>
    <message>
        <source>Edges:</source>
        <translation type="obsolete">Randen:</translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation type="obsolete">Geen Effect</translation>
    </message>
    <message>
        <source>Undo Object Change</source>
        <translation type="obsolete">Maak Object verandering ongedaan</translation>
    </message>
    <message>
        <source>Event:</source>
        <translation type="obsolete">Gebeurtenis:</translation>
    </message>
    <message>
        <source>Value is the</source>
        <translation type="obsolete">Waarde is de</translation>
    </message>
    <message>
        <source>Hide Images</source>
        <translation type="obsolete">Verberg Afbeeldingen</translation>
    </message>
    <message>
        <source>Extras</source>
        <translation type="obsolete">Extra&apos;s</translation>
    </message>
    <message>
        <source>Save Contents on Exit</source>
        <translation type="obsolete">Sla Inhoud op bij afsluiten</translation>
    </message>
    <message>
        <source>Description:</source>
        <translation type="obsolete">Omschrijving:</translation>
    </message>
    <message>
        <source>Forced</source>
        <translation type="obsolete">Gedwongen</translation>
    </message>
    <message>
        <source>Format</source>
        <translation type="obsolete">Formaat</translation>
    </message>
    <message>
        <source>Line Color:</source>
        <translation type="obsolete">LijnKleur:</translation>
    </message>
    <message>
        <source>Enter a comma separated list of Fields here</source>
        <translation type="obsolete">Voeg een komma gescheiden lijst van velden hier in</translation>
    </message>
    <message>
        <source>French</source>
        <translation type="obsolete">Frans</translation>
    </message>
    <message>
        <source>German</source>
        <translation type="obsolete">Duits</translation>
    </message>
    <message>
        <source>Text Color:</source>
        <translation type="obsolete">TekstKleur:</translation>
    </message>
    <message>
        <source>Fill Color:</source>
        <translation type="obsolete">VulKleur:</translation>
    </message>
    <message>
        <source>Language:</source>
        <translation type="obsolete">Taal:</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation type="obsolete">Richtlijnen</translation>
    </message>
    <message>
        <source>Grid Colors</source>
        <translation type="obsolete">Grid Kleuren</translation>
    </message>
    <message>
        <source>Available Fields</source>
        <translation type="obsolete">Beschikbare Velden</translation>
    </message>
    <message>
        <source>Edit Colors</source>
        <translation type="obsolete">Bewerk Kleuren</translation>
    </message>
    <message>
        <source>Hidden</source>
        <translation type="obsolete">Onzichtbaar</translation>
    </message>
    <message>
        <source>Custom calculation script:</source>
        <translation type="obsolete">Eigen calculatie script:</translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation type="obsolete">Beschikbare Lettertypes:</translation>
    </message>
    <message>
        <source>Images</source>
        <translation type="obsolete">Afbeeldingen</translation>
    </message>
    <message>
        <source>Custom Scripts</source>
        <translation type="obsolete">Eigen Scripts</translation>
    </message>
    <message>
        <source>Import</source>
        <translation type="obsolete">Importeer</translation>
    </message>
    <message>
        <source>Insert</source>
        <translation type="obsolete">Invoegen</translation>
    </message>
    <message>
        <source>Inside</source>
        <translation type="obsolete">Binnen</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation type="obsolete">Andersom</translation>
    </message>
    <message>
        <source>Show Template Names</source>
        <translation type="obsolete">Toon Template Namen</translation>
    </message>
    <message>
        <source>Textdistance</source>
        <translation type="obsolete">Tekstafstand</translation>
    </message>
    <message>
        <source>Italic</source>
        <translation type="obsolete">Italic</translation>
    </message>
    <message>
        <source>No Fill</source>
        <translation type="obsolete">Niet vullen</translation>
    </message>
    <message>
        <source>No View</source>
        <translation type="obsolete">Geen Weergave</translation>
    </message>
    <message>
        <source>Here you can see all Pages of your Document.</source>
        <translation type="obsolete">Hier kun je alle Pagina&apos;s van je Document zien</translation>
    </message>
    <message>
        <source>Layers</source>
        <translation type="obsolete">Lagen</translation>
    </message>
    <message>
        <source>Document contains: 0 Page(s)</source>
        <translation type="obsolete">Document bevat: 0 Pagina(s)</translation>
    </message>
    <message>
        <source>Edit Shape...</source>
        <translation type="obsolete">Bewerkt Vorm...</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="obsolete">Middel</translation>
    </message>
    <message>
        <source>Menues</source>
        <translation type="obsolete">Menuus</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation type="obsolete">Spiegelen</translation>
    </message>
    <message>
        <source>No Key</source>
        <translation type="obsolete">Geen Toets</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normaal</translation>
    </message>
    <message>
        <source>Object</source>
        <translation type="obsolete">Object</translation>
    </message>
    <message>
        <source>Number</source>
        <translation type="obsolete">Nummer</translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation type="obsolete">Lettertype Naam</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation type="obsolete">Afmeting Lettertype</translation>
    </message>
    <message>
        <source>Hide Layers</source>
        <translation type="obsolete">Verberg Lagen</translation>
    </message>
    <message>
        <source>Grid Layout</source>
        <translation type="obsolete">Grid Layout</translation>
    </message>
    <message>
        <source>There are no Postscript-Fonts on your System</source>
        <translation type="obsolete">Er zijn geen Postscript-lettertypes aanwezig</translation>
    </message>
    <message>
        <source>Option</source>
        <translation type="obsolete">Optie</translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation type="obsolete">Linker Rand</translation>
    </message>
    <message>
        <source>Other:</source>
        <translation type="obsolete">Anders:</translation>
    </message>
    <message>
        <source>Owner:</source>
        <translation type="obsolete">Eigenaar:</translation>
    </message>
    <message>
        <source>Show Layers</source>
        <translation type="obsolete">Toon Lagen</translation>
    </message>
    <message>
        <source>Closes this Dialog</source>
        <translation type="obsolete">Sluit dit Venster</translation>
    </message>
    <message>
        <source>Loading:</source>
        <translation type="obsolete">Laden:</translation>
    </message>
    <message>
        <source>Document to load:</source>
        <translation type="obsolete">Te laden Document:</translation>
    </message>
    <message>
        <source>Range:</source>
        <translation type="obsolete">Bereik:</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation type="obsolete">Verwijder</translation>
    </message>
    <message>
        <source>Result</source>
        <translation type="obsolete">Resultaat</translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation type="obsolete">Lijn Breedte:</translation>
    </message>
    <message>
        <source>Right:</source>
        <translation type="obsolete">Rechts:</translation>
    </message>
    <message>
        <source>Sample</source>
        <translation type="obsolete">Voorbeeld</translation>
    </message>
    <message>
        <source>Scale:</source>
        <translation type="obsolete">Schaal:</translation>
    </message>
    <message>
        <source>Screen</source>
        <translation type="obsolete">Scherm</translation>
    </message>
    <message>
        <source>Search</source>
        <translation type="obsolete">Zoeken</translation>
    </message>
    <message>
        <source>Select</source>
        <translation type="obsolete">Selecteer</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation type="obsolete">Schaduw:</translation>
    </message>
    <message>
        <source>New Script</source>
        <translation type="obsolete">Nieuw Script</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation type="obsolete">Slovaaks</translation>
    </message>
    <message>
        <source>Font Substitutions</source>
        <translation type="obsolete">Lettertype Vervangingen</translation>
    </message>
    <message>
        <source>Square</source>
        <translation type="obsolete">Vierkant</translation>
    </message>
    <message>
        <source>Status</source>
        <translation type="obsolete">Status</translation>
    </message>
    <message>
        <source>Styles</source>
        <translation type="obsolete">Stijlen</translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="obsolete">Document</translation>
    </message>
    <message>
        <source>New Style:</source>
        <translation type="obsolete">Nieuwe Stijl:</translation>
    </message>
    <message>
        <source>Title:</source>
        <translation type="obsolete">Titel:</translation>
    </message>
    <message>
        <source>To End</source>
        <translation type="obsolete">Tot Einde</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation type="obsolete">X-Pos:</translation>
    </message>
    <message>
        <source>Field is formatted as:</source>
        <translation type="obsolete">Veld is gevormd als:</translation>
    </message>
    <message>
        <source>Horizontal Guides</source>
        <translation type="obsolete">Horizontal Richtlijnen</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation type="obsolete">Y-Pos:</translation>
    </message>
    <message>
        <source>Compress Text and Vector Graphics</source>
        <translation type="obsolete">Comprimeer Tekst en Vector Afbeeldingen</translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation type="obsolete">Ontsluit</translation>
    </message>
    <message>
        <source>Closes the current Document</source>
        <translation type="obsolete">Sluit het huidige Document</translation>
    </message>
    <message>
        <source>Java Script</source>
        <translation type="obsolete">Java Script</translation>
    </message>
    <message>
        <source>In the Foreground</source>
        <translation type="obsolete">Op de voorgrond</translation>
    </message>
    <message>
        <source>Look &amp;in:</source>
        <translation type="obsolete">Kijk &amp;in:</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="obsolete">Naam &quot;%1&quot; is niet uniek.
Kies aub. een andere.</translation>
    </message>
    <message>
        <source>Smallest Word:</source>
        <translation type="obsolete">Kleinste Woord:</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation type="obsolete">Breedte:</translation>
    </message>
    <message>
        <source>Edit Styles</source>
        <translation type="obsolete">Bewerk Stijlen</translation>
    </message>
    <message>
        <source>Guide Snap Distance:</source>
        <translation type="obsolete">Richtlijn Snap Richting:</translation>
    </message>
    <message>
        <source>Hide Styles</source>
        <translation type="obsolete">Verberg Stijlen</translation>
    </message>
    <message>
        <source>Mirror Page(s) horizontal</source>
        <translation type="obsolete">Spiegel Pagina&apos;s horizontaal</translation>
    </message>
    <message>
        <source>Show Styles</source>
        <translation type="obsolete">Toon Stijlen</translation>
    </message>
    <message>
        <source>Tool-Tip:</source>
        <translation type="obsolete">Tool-Tip:</translation>
    </message>
    <message>
        <source>from the:</source>
        <translation type="obsolete">Van de:</translation>
    </message>
    <message>
        <source>Indentation</source>
        <translation type="obsolete">Inspringen</translation>
    </message>
    <message>
        <source>No Document</source>
        <translation type="obsolete">Geen Document</translation>
    </message>
    <message>
        <source>Right Sides</source>
        <translation type="obsolete">Rechter Kant</translation>
    </message>
    <message>
        <source>On Blur</source>
        <translation type="obsolete">Bij Blur</translation>
    </message>
    <message>
        <source>Icon only</source>
        <translation type="obsolete">Alleen Icoon</translation>
    </message>
    <message>
        <source>has been changed since the last save.</source>
        <translation type="obsolete">Is aangepast na laatste opslag.</translation>
    </message>
    <message>
        <source>Preview File Contents</source>
        <translation type="obsolete">Toon Bestands Inhoud</translation>
    </message>
    <message>
        <source>Show Margins</source>
        <translation type="obsolete">Toon Randen</translation>
    </message>
    <message>
        <source>Color Management Settings</source>
        <translation type="obsolete">KleurManagement Instellingen</translation>
    </message>
    <message>
        <source>First Line:</source>
        <translation type="obsolete">Eerste Regel:</translation>
    </message>
    <message>
        <source>Printer Options</source>
        <translation type="obsolete">Printer Opties</translation>
    </message>
    <message>
        <source>Bookmarks</source>
        <translation type="obsolete">Bladwijzers</translation>
    </message>
    <message>
        <source>Don&apos;t Export Value</source>
        <translation type="obsolete">Waarde Niet Exporteren</translation>
    </message>
    <message>
        <source>PDF-Options</source>
        <translation type="obsolete">PDF-Opties</translation>
    </message>
    <message>
        <source>Search Results for: </source>
        <translation type="obsolete">Zoekresultaten voor: </translation>
    </message>
    <message>
        <source>Print range</source>
        <translation type="obsolete">Afdruk bereik</translation>
    </message>
    <message>
        <source>Odd Pages only</source>
        <translation type="obsolete">Alleen Oneven Pagina&apos;s</translation>
    </message>
    <message>
        <source>When Icon is too small</source>
        <translation type="obsolete">Als Icoon te klein is</translation>
    </message>
    <message>
        <source>Columns:</source>
        <translation type="obsolete">Kolommen:</translation>
    </message>
    <message>
        <source>Don&apos;t print</source>
        <translation type="obsolete">Niet afdrukken</translation>
    </message>
    <message>
        <source>Command:</source>
        <translation type="obsolete">Commando:</translation>
    </message>
    <message>
        <source>Caption left to Icon</source>
        <translation type="obsolete">Kapitaal links van Icoon</translation>
    </message>
    <message>
        <source>Submit Data as HTML</source>
        <translation type="obsolete">Stuur Gegevens als HTML</translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation type="obsolete">Tekst Kader</translation>
    </message>
    <message>
        <source>Edit Frame</source>
        <translation type="obsolete">Bewerkt Kader</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation type="obsolete">Tekst Veld</translation>
    </message>
    <message>
        <source>Edit Color</source>
        <translation type="obsolete">Bewerkt Kleur</translation>
    </message>
    <message>
        <source>Monitor:</source>
        <translation type="obsolete">Beeldscherm:</translation>
    </message>
    <message>
        <source>Left Point</source>
        <translation type="obsolete">Linker Punt</translation>
    </message>
    <message>
        <source>Add Nodes</source>
        <translation type="obsolete">Voeg Nodes toe</translation>
    </message>
    <message>
        <source>Edit Contents of Frame</source>
        <translation type="obsolete">Bewerkt Inhoud van Kader</translation>
    </message>
    <message>
        <source>Caption right to Icon</source>
        <translation type="obsolete">Kapitaal rechts van Icoon</translation>
    </message>
    <message>
        <source>Contents</source>
        <translation type="obsolete">Inhoud</translation>
    </message>
    <message>
        <source>Fonts...</source>
        <translation type="obsolete">Lettertypes...</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);; All Files (*)</source>
        <translation type="obsolete">Documenten (*.sla *.scd);; Alle Bestanden (*)</translation>
    </message>
    <message>
        <source>Fontsize</source>
        <translation type="obsolete">LetterGrootte</translation>
    </message>
    <message>
        <source>Left Sides</source>
        <translation type="obsolete">Linker Kant</translation>
    </message>
    <message>
        <source>Edit Style</source>
        <translation type="obsolete">Bewerk Stijl</translation>
    </message>
    <message>
        <source>Font Size:</source>
        <translation type="obsolete">Afmeting Lettertype:</translation>
    </message>
    <message>
        <source>Open...</source>
        <translation type="obsolete">Openen...</translation>
    </message>
    <message>
        <source>Import a Page</source>
        <translation type="obsolete">Importeer een Pagina</translation>
    </message>
    <message>
        <source>Number of copies:</source>
        <translation type="obsolete">Aantal Kopieën</translation>
    </message>
    <message>
        <source>Number of Copies:</source>
        <translation type="obsolete">Aantal kopieen</translation>
    </message>
    <message>
        <source>Selected Fields</source>
        <translation type="obsolete">Geselecteerde Velden</translation>
    </message>
    <message>
        <source>Don&apos;t use embedded Profiles</source>
        <translation type="obsolete">Gebruik geen ingebedde profielen</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation type="obsolete">Opacity:</translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="obsolete">Opties</translation>
    </message>
    <message>
        <source>Copy of </source>
        <translation type="obsolete">Kopie van </translation>
    </message>
    <message>
        <source>page(s)</source>
        <translation type="obsolete">Pagina(s)</translation>
    </message>
    <message>
        <source>Manage Keyboard Shortcuts</source>
        <translation type="obsolete">Beheer Toets-Snelkoppelingen</translation>
    </message>
    <message>
        <source>at End</source>
        <translation type="obsolete">aan het eind</translation>
    </message>
    <message>
        <source>Hungarian and Italian:</source>
        <translation type="obsolete">Hongaars en Italiaans:</translation>
    </message>
    <message>
        <source>Show Grid</source>
        <translation type="obsolete">Toon Grid</translation>
    </message>
    <message>
        <source>Corners:</source>
        <translation type="obsolete">Hoeken:</translation>
    </message>
    <message>
        <source>Icon Placement...</source>
        <translation type="obsolete">Icoon Plaatsing...</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="obsolete">Portret</translation>
    </message>
    <message>
        <source>Rotation</source>
        <translation type="obsolete">Rotatie</translation>
    </message>
    <message>
        <source>Do you really want to overwrite the File:
%1 ?</source>
        <translation type="obsolete">Wil je echt het bestand %1 overschrijven:
?</translation>
    </message>
    <message>
        <source>Copying Text and Graphics is allowed</source>
        <translation type="obsolete">Kopieëren van Tekst en Afbeeldingen is toegestaan</translation>
    </message>
    <message>
        <source>Contributions from:</source>
        <translation type="obsolete">Contributies van:</translation>
    </message>
    <message>
        <source>RoundCap</source>
        <translation type="obsolete">RoundCap</translation>
    </message>
    <message>
        <source>Mouse Up</source>
        <translation type="obsolete">Muis Omhoog</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation type="obsolete">Omtrek</translation>
    </message>
    <message>
        <source>Outside</source>
        <translation type="obsolete">Buiten</translation>
    </message>
    <message>
        <source>Custom Spacing</source>
        <translation type="obsolete">Aangepaste Spatieëring</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation type="obsolete">Eigenschappen</translation>
    </message>
    <message>
        <source>Automatic Linespaceing:</source>
        <translation type="obsolete">Automatische Lijnspatiëring</translation>
    </message>
    <message>
        <source>Top-Left to Bottom-Right</source>
        <translation type="obsolete">Links-boven naar Rechts-onder</translation>
    </message>
    <message>
        <source>Move Control Points independently</source>
        <translation type="obsolete">Verplaats Controle Punten onafhankelijk</translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation type="obsolete">Browse...</translation>
    </message>
    <message>
        <source>Here are all your Templates, to create a new Page
drag a Template to the Pageview below.</source>
        <translation type="obsolete">Hier zijn al je Templages, om een nieuwe Pagina
te maken sleep een Template naar de Weergave beneden.</translation>
    </message>
    <message>
        <source>Recent Documents</source>
        <translation type="obsolete">Recente Documenten</translation>
    </message>
    <message>
        <source>Pick...</source>
        <translation type="obsolete">Selecteer...</translation>
    </message>
    <message>
        <source>Embed all Fonts</source>
        <translation type="obsolete">Alle Lettertypes inbedden</translation>
    </message>
    <message>
        <source>Mouse Enter</source>
        <translation type="obsolete">Mouse Aankomst</translation>
    </message>
    <message>
        <source>Allow Changing the Document</source>
        <translation type="obsolete">Verandering van het Document toestaan</translation>
    </message>
    <message>
        <source>Hide Scrapbook</source>
        <translation type="obsolete">Verberg Kladblok</translation>
    </message>
    <message>
        <source>Placing</source>
        <translation type="obsolete">Plaatsing</translation>
    </message>
    <message>
        <source>Raise Layer</source>
        <translation type="obsolete">Verhoog Laag</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation type="obsolete">Dupliceren</translation>
    </message>
    <message>
        <source>Translations</source>
        <translation type="obsolete">Vertalers</translation>
    </message>
    <message>
        <source> loaded</source>
        <translation type="obsolete"> Geladen</translation>
    </message>
    <message>
        <source>Shears the Path vertical down</source>
        <translation type="obsolete">Schaart de richting verticaal omlaag</translation>
    </message>
    <message>
        <source>Is Spot-Color</source>
        <translation type="obsolete">Is een Spot-Kleur</translation>
    </message>
    <message>
        <source>Use Icons</source>
        <translation type="obsolete">Gebruik Iconen</translation>
    </message>
    <message>
        <source>Move Nodes</source>
        <translation type="obsolete">Verplaats Nodes</translation>
    </message>
    <message>
        <source>Move Pages</source>
        <translation type="obsolete">Verplaats Pagina&apos;s</translation>
    </message>
    <message>
        <source>Line Width</source>
        <translation type="obsolete">Lijn Breedte</translation>
    </message>
    <message>
        <source>Hide Tools</source>
        <translation type="obsolete">Verberg Gereedschappen</translation>
    </message>
    <message>
        <source>Polish:</source>
        <translation type="obsolete">Pools:</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="obsolete">Marge Richtlijnen</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation type="obsolete">Polygoon</translation>
    </message>
    <message>
        <source>Read Only</source>
        <translation type="obsolete">Alleen Lezen</translation>
    </message>
    <message>
        <source>Hide Margins</source>
        <translation type="obsolete">Verberg Randen</translation>
    </message>
    <message>
        <source>Export...</source>
        <translation type="obsolete">Exporteren...</translation>
    </message>
    <message>
        <source>Import...</source>
        <translation type="obsolete">Importeren...</translation>
    </message>
    <message>
        <source>Save as...</source>
        <translation type="obsolete">Opslaan als...</translation>
    </message>
    <message>
        <source>Move Control Points</source>
        <translation type="obsolete">Verplaats Controle Punten</translation>
    </message>
    <message>
        <source>Manage Guides</source>
        <translation type="obsolete">Beheer Richtlijnen</translation>
    </message>
    <message>
        <source>Pressed</source>
        <translation type="obsolete">Gedrukt</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation type="obsolete">Voorbeeld</translation>
    </message>
    <message>
        <source>Printer</source>
        <translation type="obsolete">Printer</translation>
    </message>
    <message>
        <source>product</source>
        <translation type="obsolete">produkt</translation>
    </message>
    <message>
        <source>Actual Size</source>
        <translation type="obsolete">Actuele Afmeting</translation>
    </message>
    <message>
        <source>Check during Typing</source>
        <translation type="obsolete">Controle tijdens Typen</translation>
    </message>
    <message>
        <source>Annotation Properties</source>
        <translation type="obsolete">Annotatie Eigenschappen</translation>
    </message>
    <message>
        <source>When Icon is too big</source>
        <translation type="obsolete">Als Icoon te groot is</translation>
    </message>
    <message>
        <source>Get Picture...</source>
        <translation type="obsolete">Haal Afbeelding...</translation>
    </message>
    <message>
        <source>Vertical Gradient</source>
        <translation type="obsolete">Verticale Gradient</translation>
    </message>
    <message>
        <source>Copy Here</source>
        <translation type="obsolete">Kopieer hier</translation>
    </message>
    <message>
        <source>Copy Page</source>
        <translation type="obsolete">Kopieer Pagina</translation>
    </message>
    <message>
        <source>Polygon Properties</source>
        <translation type="obsolete">Polygoon Eigenschappen</translation>
    </message>
    <message>
        <source>Global Fontsettings</source>
        <translation type="obsolete">Globale Lettertype Instellingen</translation>
    </message>
    <message>
        <source>Replacement</source>
        <translation type="obsolete">Vervanging</translation>
    </message>
    <message>
        <source>Page Set</source>
        <translation type="obsolete">Pagina Setting</translation>
    </message>
    <message>
        <source>Font st&amp;yle</source>
        <translation type="obsolete">Lettertype St&amp;yle</translation>
    </message>
    <message>
        <source>Vertical flipped</source>
        <translation type="obsolete">Verticaal gedraait</translation>
    </message>
    <message>
        <source>Print in color if available</source>
        <translation type="obsolete">Druk af in kleur als mogelijk</translation>
    </message>
    <message>
        <source>Show Scrapbook</source>
        <translation type="obsolete">Toon Kladblok</translation>
    </message>
    <message>
        <source>Scale to Frame Size</source>
        <translation type="obsolete">Schaal naar Kader Afmeting</translation>
    </message>
    <message>
        <source>Ukrainian:</source>
        <translation type="obsolete">Ukraieens:</translation>
    </message>
    <message>
        <source>Attach Text to Path</source>
        <translation type="obsolete">Koppel Tekst aan Lokatie</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="obsolete">Gewoven zijden pyjama vervangen voor blauwe quartz</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation type="obsolete">Voor Pagina</translation>
    </message>
    <message>
        <source>Text for Roll Over</source>
        <translation type="obsolete">Tekst voor Roll Over</translation>
    </message>
    <message>
        <source>Validate</source>
        <translation type="obsolete">Valideer</translation>
    </message>
    <message>
        <source>CrossDiagonal Gradient</source>
        <translation type="obsolete">CrossDiagonale Gradient</translation>
    </message>
    <message>
        <source>Show PDF-Tools</source>
        <translation type="obsolete">Toon PDF-Gereedschappen</translation>
    </message>
    <message>
        <source>Bring to Front</source>
        <translation type="obsolete">Haal naar voren</translation>
    </message>
    <message>
        <source>Align Text Block</source>
        <translation type="obsolete">Align Tekst Blok</translation>
    </message>
    <message>
        <source>Adjusting Colors</source>
        <translation type="obsolete">Kleuren Aanpassen</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation type="obsolete">Verander...</translation>
    </message>
    <message>
        <source>Align Text Right</source>
        <translation type="obsolete">Align Tekst Rechts</translation>
    </message>
    <message>
        <source>Percent Format</source>
        <translation type="obsolete">Percentage Formaat</translation>
    </message>
    <message>
        <source>Print to file:</source>
        <translation type="obsolete">Afdrukken naar bestand:</translation>
    </message>
    <message>
        <source>Print first page first</source>
        <translation type="obsolete">Druk 1e pagina eerst</translation>
    </message>
    <message>
        <source>Characters</source>
        <translation type="obsolete">Tekens</translation>
    </message>
    <message>
        <source>Character:</source>
        <translation type="obsolete">Teken:</translation>
    </message>
    <message>
        <source>Manage Guides...</source>
        <translation type="obsolete">Beheer Richtlijnen...</translation>
    </message>
    <message>
        <source>Compression</source>
        <translation type="obsolete">Compressie</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation type="obsolete">Kladblok</translation>
    </message>
    <message>
        <source>Character</source>
        <translation type="obsolete">Teken</translation>
    </message>
    <message>
        <source>Margins:</source>
        <translation type="obsolete">Marges:</translation>
    </message>
    <message>
        <source>Hide PDF-Tools</source>
        <translation type="obsolete">Verberg PDF-Gereedschappen</translation>
    </message>
    <message>
        <source>Reading Scrapbook</source>
        <translation type="obsolete">Kladblok wordt Gelezen</translation>
    </message>
    <message>
        <source>Sent to Layer</source>
        <translation type="obsolete">Stuur naar Laag</translation>
    </message>
    <message>
        <source>Websave RGB</source>
        <translation type="obsolete">Webopslag RGB</translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS-Images</source>
        <translation type="obsolete">Ghostscript : Je kan geen EPS-Afbeeldingen gebruiken</translation>
    </message>
    <message>
        <source>To adjust the Display drag the Ruler below with the Slider.</source>
        <translation type="obsolete">Om het Beeld aan te passen sleep de liniaal omlaag met de Slider.</translation>
    </message>
    <message>
        <source>Password</source>
        <translation type="obsolete">Wachtwoord</translation>
    </message>
    <message>
        <source>Apply Effect on all Pages</source>
        <translation type="obsolete">Pas Effect toe op alle Pagina&apos;s</translation>
    </message>
    <message>
        <source>Font for use with PDF-1.3:</source>
        <translation type="obsolete">Te gebruiken Lettertype voor PDF-1.3:</translation>
    </message>
    <message>
        <source>Hyphenator...</source>
        <translation type="obsolete">Hyphenator...</translation>
    </message>
    <message>
        <source>Document Setup...</source>
        <translation type="obsolete">Document Opzetten...</translation>
    </message>
    <message>
        <source>Embed in:</source>
        <translation type="obsolete">Invoegen in:</translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation type="obsolete">Inbedden</translation>
    </message>
    <message>
        <source>Visibility:</source>
        <translation type="obsolete">Zichtbaarheid:</translation>
    </message>
    <message>
        <source>Save Now</source>
        <translation type="obsolete">Nu Opslaan</translation>
    </message>
    <message>
        <source>&amp;Restore</source>
        <translation type="obsolete">&amp;Terugzetten</translation>
    </message>
    <message>
        <source>Author:</source>
        <translation type="obsolete">Auteur:</translation>
    </message>
    <message>
        <source>Authors</source>
        <translation type="obsolete">Auteurs</translation>
    </message>
    <message>
        <source>average</source>
        <translation type="obsolete">gemiddelde</translation>
    </message>
    <message>
        <source>Beveled</source>
        <translation type="obsolete">Gebeveld</translation>
    </message>
    <message>
        <source>Fit in Window</source>
        <translation type="obsolete">Inpassen in Venster</translation>
    </message>
    <message>
        <source>Maximize</source>
        <translation type="obsolete">Maximaliseer</translation>
    </message>
    <message>
        <source>Insert PDF-Fields</source>
        <translation type="obsolete">Voeg PDF-Velden in</translation>
    </message>
    <message>
        <source>Strikeout</source>
        <translation type="obsolete">Strikeout</translation>
    </message>
    <message>
        <source>Print...</source>
        <translation type="obsolete">Afdrukken...</translation>
    </message>
    <message>
        <source>Printer:</source>
        <translation type="obsolete">Printer:</translation>
    </message>
    <message>
        <source>Apply ICC-Profiles</source>
        <translation type="obsolete">Pas ICC-Profielen toe</translation>
    </message>
    <message>
        <source>Printer settings</source>
        <translation type="obsolete">Printer instellingen</translation>
    </message>
    <message>
        <source>Import Data</source>
        <translation type="obsolete">Importeer Data</translation>
    </message>
    <message>
        <source>Insert Page</source>
        <translation type="obsolete">Voeg Pagina in</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation type="obsolete">Nieuwe Kleur</translation>
    </message>
    <message>
        <source>Static Color Bars</source>
        <translation type="obsolete">Statische Kleurenbar</translation>
    </message>
    <message>
        <source>New Entry</source>
        <translation type="obsolete">Nieuwe aanmelding</translation>
    </message>
    <message>
        <source>Show Curve</source>
        <translation type="obsolete">Toon Curve</translation>
    </message>
    <message>
        <source>New Layer</source>
        <translation type="obsolete">Nieuwe Laag</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation type="obsolete">Nieuwe Stijl</translation>
    </message>
    <message>
        <source>Profiles</source>
        <translation type="obsolete">Profielen</translation>
    </message>
    <message>
        <source>Show Tools</source>
        <translation type="obsolete">Toon Gereedschappen</translation>
    </message>
    <message>
        <source>Bottom:</source>
        <translation type="obsolete">Onder:</translation>
    </message>
    <message>
        <source>About Qt</source>
        <translation type="obsolete">Over Qt</translation>
    </message>
    <message>
        <source>Mouse Exit</source>
        <translation type="obsolete">Muis Aftocht</translation>
    </message>
    <message>
        <source>Mouse Down</source>
        <translation type="obsolete">Muis Omlaag</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *scd.gz);; All Files (*)</source>
        <translation type="obsolete">Documenten (*.sla *.sla.gz *.scd *scd.gz);; Alle Bestanden (*)</translation>
    </message>
    <message>
        <source>Use Font</source>
        <translation type="obsolete">Gebruik Lettertype</translation>
    </message>
    <message>
        <source>Get Text/Picture...</source>
        <translation type="obsolete">Haal Tekst/Afbeeldingen...</translation>
    </message>
    <message>
        <source>Scaling:</source>
        <translation type="obsolete">Schalen:</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="obsolete">Pica&apos;s (p)</translation>
    </message>
    <message>
        <source>Modify Pictureframe</source>
        <translation type="obsolete">Pas Afbeeldingskader aan</translation>
    </message>
    <message>
        <source>Cascade</source>
        <translation type="obsolete">Trapsgewijs</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="obsolete">Opslaan als</translation>
    </message>
    <message>
        <source>Manual Kerning</source>
        <translation type="obsolete">Handmatige Kerning</translation>
    </message>
    <message>
        <source>Scaling</source>
        <translation type="obsolete">Schaling</translation>
    </message>
    <message>
        <source>Apply Template...</source>
        <translation type="obsolete">Gebruik Template...</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation type="obsolete">Subscript</translation>
    </message>
    <message>
        <source>Pages per Sheet</source>
        <translation type="obsolete">Paginas per Sheet</translation>
    </message>
    <message>
        <source>Scr&amp;ipt</source>
        <translation type="obsolete">Scr&amp;ipt</translation>
    </message>
    <message>
        <source>Spanish and Catalan:</source>
        <translation type="obsolete">Spaans en Katalaans:</translation>
    </message>
    <message>
        <source>Script:</source>
        <translation type="obsolete">Script:</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="obsolete">Superscript</translation>
    </message>
    <message>
        <source>Percentage</source>
        <translation type="obsolete">Percentage</translation>
    </message>
    <message>
        <source>Insert Bezier Curves</source>
        <translation type="obsolete">Voeg Bezier Curve in</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="obsolete">Perceptueel</translation>
    </message>
    <message>
        <source>Set Key</source>
        <translation type="obsolete">Zet Toets</translation>
    </message>
    <message>
        <source>Exit without Saving</source>
        <translation type="obsolete">Afsluiten zonder Opslaan</translation>
    </message>
    <message>
        <source>Insert...</source>
        <translation type="obsolete">Invoegen...</translation>
    </message>
    <message>
        <source>Inserting</source>
        <translation type="obsolete">Invoegen</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation type="obsolete">Russisch</translation>
    </message>
    <message>
        <source>Printing failed!</source>
        <translation type="obsolete">Afdrukken mislukt!</translation>
    </message>
    <message>
        <source>Available Templates:</source>
        <translation type="obsolete">Beschikbare Templates:</translation>
    </message>
    <message>
        <source>N-Up Printing</source>
        <translation type="obsolete">N-Omhoog Afdrukken</translation>
    </message>
    <message>
        <source>Display Pages Side by Side</source>
        <translation type="obsolete">Toon Kaders naast elkaar</translation>
    </message>
    <message>
        <source>New Script:</source>
        <translation type="obsolete">Nieuw Script:</translation>
    </message>
    <message>
        <source>Decimals:</source>
        <translation type="obsolete">Decimalen:</translation>
    </message>
    <message>
        <source>Left Page first</source>
        <translation type="obsolete">Linker Pagina eerst</translation>
    </message>
    <message>
        <source>of the following fields:</source>
        <translation type="obsolete">van de volgende velden:</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="obsolete">Relatieve Kleurmetric</translation>
    </message>
    <message>
        <source>Hyphenate Text</source>
        <translation type="obsolete">Hyphenate Tekst</translation>
    </message>
    <message>
        <source>Convert to Polygons</source>
        <translation type="obsolete">Converter naar Polygonen</translation>
    </message>
    <message>
        <source>Display unprintable Area in Margin Color</source>
        <translation type="obsolete">Toon niet afdrukbare gebieden in Margekleur</translation>
    </message>
    <message>
        <source>Rotate Item</source>
        <translation type="obsolete">Roteer Item</translation>
    </message>
    <message>
        <source>Output to File:</source>
        <translation type="obsolete">Uitvoer naar Bestand:</translation>
    </message>
    <message>
        <source>Scribus-Document</source>
        <translation type="obsolete">Scribus-Document</translation>
    </message>
    <message>
        <source>Linespacing</source>
        <translation type="obsolete">Linespacing</translation>
    </message>
    <message>
        <source>Slovak:</source>
        <translation type="obsolete">Slovaaks:</translation>
    </message>
    <message>
        <source>Select Font</source>
        <translation type="obsolete">Selecteer Lettertype</translation>
    </message>
    <message>
        <source>Delete Page</source>
        <translation type="obsolete">Verwijder Pagina</translation>
    </message>
    <message>
        <source>Display Duration:</source>
        <translation type="obsolete">Weergave Tijdsduur:</translation>
    </message>
    <message>
        <source>Creates a new Document</source>
        <translation type="obsolete">Maak een nieuw Document</translation>
    </message>
    <message>
        <source>Millimeters (mm)</source>
        <translation type="obsolete">Millimeters (mm)</translation>
    </message>
    <message>
        <source>Import Data from:</source>
        <translation type="obsolete">Importeer Data van:</translation>
    </message>
    <message>
        <source>Background Color:</source>
        <translation type="obsolete">Achtergrond Kleur:</translation>
    </message>
    <message>
        <source>Comment</source>
        <translation type="obsolete">Comentaar</translation>
    </message>
    <message>
        <source>List View</source>
        <translation type="obsolete">Lijst Weergave</translation>
    </message>
    <message>
        <source>Select a Key for this Action</source>
        <translation type="obsolete">Selecteer een Toets voor deze Actie</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation type="obsolete">Spaans</translation>
    </message>
    <message>
        <source>and less or equal to:</source>
        <translation type="obsolete">en kleiner of gelijk aan:</translation>
    </message>
    <message>
        <source>Mouse-Settings</source>
        <translation type="obsolete">Muis-Instellingen</translation>
    </message>
    <message>
        <source>Hide Grid</source>
        <translation type="obsolete">Verberg Grid</translation>
    </message>
    <message>
        <source>Print destination</source>
        <translation type="obsolete">Afdruk richting</translation>
    </message>
    <message>
        <source>Fully Automatic</source>
        <translation type="obsolete">Volledig Automatisch</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation type="obsolete">Tabloid</translation>
    </message>
    <message>
        <source>Get Text...</source>
        <translation type="obsolete">Haal Tekst...</translation>
    </message>
    <message>
        <source>Danish:</source>
        <translation type="obsolete">Deens:</translation>
    </message>
    <message>
        <source>Rotation:</source>
        <translation type="obsolete">Rotatie:</translation>
    </message>
    <message>
        <source>Autom. Textframes</source>
        <translation type="obsolete">Autom. Tekstkaders</translation>
    </message>
    <message>
        <source>Color Management...</source>
        <translation type="obsolete">Kleur Management...</translation>
    </message>
    <message>
        <source>Distances</source>
        <translation type="obsolete">Afstanden</translation>
    </message>
    <message>
        <source>Rectangle</source>
        <translation type="obsolete">Vierkant</translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation type="obsolete">Wachtwoorden</translation>
    </message>
    <message>
        <source>Flag is ignored for PDF-1.3</source>
        <translation type="obsolete">Vlag is genegeerd bij PDF-1.3</translation>
    </message>
    <message>
        <source>Printing...</source>
        <translation type="obsolete">Bezig met Afdrukken...</translation>
    </message>
    <message>
        <source>Pictures:</source>
        <translation type="obsolete">Afbeeldingen:</translation>
    </message>
    <message>
        <source>Keystroke:</source>
        <translation type="obsolete">TekenAanslag:</translation>
    </message>
    <message>
        <source>Document:</source>
        <translation type="obsolete">Document:</translation>
    </message>
    <message>
        <source>Document </source>
        <translation type="obsolete">Document </translation>
    </message>
    <message>
        <source>Multi-Line</source>
        <translation type="obsolete">MeerLijnig</translation>
    </message>
    <message>
        <source>MiterJoin</source>
        <translation type="obsolete">MiterJoin</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation type="obsolete">Onderlijnen</translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation type="obsolete">&amp;Onderlijnen</translation>
    </message>
    <message>
        <source>To the End</source>
        <translation type="obsolete">Tot het Einde</translation>
    </message>
    <message>
        <source>Print via other Command</source>
        <translation type="obsolete">Druk af via ander Commando</translation>
    </message>
    <message>
        <source>&amp;Green:</source>
        <translation type="obsolete">&amp;Groen:</translation>
    </message>
    <message>
        <source>Other...</source>
        <translation type="obsolete">Anders...</translation>
    </message>
    <message>
        <source>Horiz. Scale:</source>
        <translation type="obsolete">Horiz. Schaling:</translation>
    </message>
    <message>
        <source>Diamond</source>
        <translation type="obsolete">Diamand</translation>
    </message>
    <message>
        <source>Scale Picture to Frame Size</source>
        <translation type="obsolete">Schaal Afbeelding naar Frame Grootte</translation>
    </message>
    <message>
        <source>Modify...</source>
        <translation type="obsolete">Aanpassen...</translation>
    </message>
    <message>
        <source>Save Page as EPS...</source>
        <translation type="obsolete">Sla pagina op als EPS...</translation>
    </message>
    <message>
        <source>Loading...</source>
        <translation type="obsolete">Laden...</translation>
    </message>
    <message>
        <source>Do you really want do delete this Template?</source>
        <translation type="obsolete">Wil je echt deze Template verwijderen?</translation>
    </message>
    <message>
        <source>Points (pt)</source>
        <translation type="obsolete">Punten (pt)</translation>
    </message>
    <message>
        <source>Display</source>
        <translation type="obsolete">Tonen</translation>
    </message>
    <message>
        <source>Editable</source>
        <translation type="obsolete">Bewerktbaar</translation>
    </message>
    <message>
        <source>Gutter Width:</source>
        <translation type="obsolete">Gutter Breedte:</translation>
    </message>
    <message>
        <source>X-Pos+:</source>
        <translation type="obsolete">X-Pos+:</translation>
    </message>
    <message>
        <source>Show Page Previews</source>
        <translation type="obsolete">Toon Pagina Voorbeeld</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation type="obsolete">Gestreepte Lijn</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation type="obsolete">Onderbroken lijn</translation>
    </message>
    <message>
        <source>Collect for Output...</source>
        <translation type="obsolete">Collect voor Uitvoer...</translation>
    </message>
    <message>
        <source>Undo Object Move</source>
        <translation type="obsolete">Maak Object Verplaatsing ongedaan</translation>
    </message>
    <message>
        <source>Lithuanian:</source>
        <translation type="obsolete">Lithuaans:</translation>
    </message>
    <message>
        <source>Horizontal Scaling</source>
        <translation type="obsolete">Horizontale Scaling</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation type="obsolete">Kies een Directory</translation>
    </message>
    <message>
        <source>Left Indent:</source>
        <translation type="obsolete">Links Inspringen:</translation>
    </message>
    <message>
        <source>Endpoints</source>
        <translation type="obsolete">Eindpunt</translation>
    </message>
    <message>
        <source>Text flows around Box</source>
        <translation type="obsolete">Tekst volgt Kader</translation>
    </message>
    <message>
        <source>Major Grid Spacing:</source>
        <translation type="obsolete">Hoofdgrid Afmeting:</translation>
    </message>
    <message>
        <source>PDF/X-3 Output Intent</source>
        <translation type="obsolete">PDF/X-3 Uitvoer Intentie</translation>
    </message>
    <message>
        <source>SquareCap</source>
        <translation type="obsolete">SquareCap</translation>
    </message>
    <message>
        <source>Show Bookmarks</source>
        <translation type="obsolete">Toon Bladwijzers</translation>
    </message>
    <message>
        <source>Appearance</source>
        <translation type="obsolete">Verschijning</translation>
    </message>
    <message>
        <source>Online-Help...</source>
        <translation type="obsolete">Online-Hulp...</translation>
    </message>
    <message>
        <source>Adjust Display Size</source>
        <translation type="obsolete">Pas Beeldgrootte aan</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation type="obsolete">CheckBox</translation>
    </message>
    <message>
        <source>AFM-File available</source>
        <translation type="obsolete">AFM-Bestand beschikbaar</translation>
    </message>
    <message>
        <source>Select all</source>
        <translation type="obsolete">Alles Selecteren</translation>
    </message>
    <message>
        <source>Value is not calculated</source>
        <translation type="obsolete">Waarde is niet berekend</translation>
    </message>
    <message>
        <source>Security</source>
        <translation type="obsolete">Beveiliging</translation>
    </message>
    <message>
        <source>Direction:</source>
        <translation type="obsolete">Richting:</translation>
    </message>
    <message>
        <source>Possible Hyphenation</source>
        <translation type="obsolete">Mogelijke Hyphenatie</translation>
    </message>
    <message>
        <source>System Menu</source>
        <translation type="obsolete">Systeem Menu</translation>
    </message>
    <message>
        <source>Edit...</source>
        <translation type="obsolete">Bewerk...</translation>
    </message>
    <message>
        <source>Saves the current Document</source>
        <translation type="obsolete">Slaat het huidige Document op</translation>
    </message>
    <message>
        <source>Hide Bookmarks</source>
        <translation type="obsolete">Verberg Bladwijzers</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation type="obsolete">Effecten</translation>
    </message>
    <message>
        <source>Bottom Sides</source>
        <translation type="obsolete">Bodem</translation>
    </message>
    <message>
        <source>Save Page as SVG...</source>
        <translation type="obsolete">Pagina Opslaan als SVG...</translation>
    </message>
    <message>
        <source>Stri&amp;keout</source>
        <translation type="obsolete">Door&amp;halen</translation>
    </message>
    <message>
        <source>This Key-Sequence is already in use</source>
        <translation type="obsolete">Deze Toets-Snelkoppeling is al in gebruik</translation>
    </message>
    <message>
        <source>Manage Pictures</source>
        <translation type="obsolete">Afbeeldingen Beheren</translation>
    </message>
    <message>
        <source>);;Vectorimages (*.eps *.pdf);;All Files (*)</source>
        <translation type="obsolete">);;Vectorafbeeldingen (*.eps *.pdf);;Alle Bestanden (*)</translation>
    </message>
    <message>
        <source>Wheel-Jump</source>
        <translation type="obsolete">Wiel-Sprong</translation>
    </message>
    <message>
        <source>End Editing</source>
        <translation type="obsolete">Eind Bewerking</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="obsolete">Inches (in)</translation>
    </message>
    <message>
        <source>Vertical Spaces</source>
        <translation type="obsolete">Verticale Spaties</translation>
    </message>
    <message>
        <source>Current Key</source>
        <translation type="obsolete">Huidige Toets</translation>
    </message>
    <message>
        <source>Preferences...</source>
        <translation type="obsolete">Voorkeuren...</translation>
    </message>
    <message>
        <source>Y-Pos+:</source>
        <translation type="obsolete">Y-Pos+:</translation>
    </message>
    <message>
        <source>Element</source>
        <translation type="obsolete">Element</translation>
    </message>
    <message>
        <source>&amp;Basic colors</source>
        <translation type="obsolete">&amp;Basis Kleuren</translation>
    </message>
    <message>
        <source>Vertical Shift:</source>
        <translation type="obsolete">Verticale Verschuiving:</translation>
    </message>
    <message>
        <source>Enable Presentation Effects</source>
        <translation type="obsolete">Activeer Presentatie Effecten</translation>
    </message>
    <message>
        <source>Documents:</source>
        <translation type="obsolete">Documenten:</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation type="obsolete">Na Pagina</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="obsolete">Aangezet</translation>
    </message>
    <message>
        <source>Activate Color Management</source>
        <translation type="obsolete">Activeer Kleur Management</translation>
    </message>
    <message>
        <source>RoundJoin</source>
        <translation type="obsolete">RoundJoin</translation>
    </message>
    <message>
        <source>English</source>
        <translation type="obsolete">Engels</translation>
    </message>
    <message>
        <source>Ungroup</source>
        <translation type="obsolete">Degroeperen</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation type="obsolete">Onbekend</translation>
    </message>
    <message>
        <source>Adding Annotations and Fields is allowed</source>
        <translation type="obsolete">Toevoegen van Annotaties en Velden is toegestaan</translation>
    </message>
    <message>
        <source>Reset Form</source>
        <translation type="obsolete">Reset Form</translation>
    </message>
    <message>
        <source>Geometry</source>
        <translation type="obsolete">Geometrie</translation>
    </message>
    <message>
        <source>&amp;Custom colors</source>
        <translation type="obsolete">&amp;Aangepaste Kleuren</translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation type="obsolete">Verplaats hier</translation>
    </message>
    <message>
        <source>Stepping:</source>
        <translation type="obsolete">Stappen:</translation>
    </message>
    <message>
        <source>Factor:</source>
        <translation type="obsolete">Factor:</translation>
    </message>
    <message>
        <source>General...</source>
        <translation type="obsolete">Algemeen...</translation>
    </message>
    <message>
        <source>Required</source>
        <translation type="obsolete">Vereist</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="obsolete">Saturnatie</translation>
    </message>
    <message>
        <source>Print in grayscale</source>
        <translation type="obsolete">Druk af in grijstonen</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="obsolete">Verticaal</translation>
    </message>
    <message>
        <source>Do Not Spell Check</source>
        <translation type="obsolete">Geen Spellings Controle</translation>
    </message>
    <message>
        <source>Russian:</source>
        <translation type="obsolete">Russisch:</translation>
    </message>
    <message>
        <source>Linestyle:</source>
        <translation type="obsolete">LijnStyle:</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation type="obsolete">Outlined</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation type="obsolete">Autoopslag</translation>
    </message>
    <message>
        <source>Outside:</source>
        <translation type="obsolete">Buiten:</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation type="obsolete">Instellingen</translation>
    </message>
    <message>
        <source>between:</source>
        <translation type="obsolete">Tussen:</translation>
    </message>
    <message>
        <source>BevelJoin</source>
        <translation type="obsolete">BevelJoin</translation>
    </message>
    <message>
        <source>Properties:</source>
        <translation type="obsolete">Eigenschappen:</translation>
    </message>
    <message>
        <source>Convert to</source>
        <translation type="obsolete">Converteer naar</translation>
    </message>
    <message>
        <source>Non Proportional</source>
        <translation type="obsolete">Niet Proportioneel</translation>
    </message>
    <message>
        <source>Proportional</source>
        <translation type="obsolete">Proportioneel</translation>
    </message>
    <message>
        <source>use Bounding Box</source>
        <translation type="obsolete">Gebruik Bounding Box</translation>
    </message>
    <message>
        <source>Linewidth:</source>
        <translation type="obsolete">LijnBreedte:</translation>
    </message>
    <message>
        <source>Preferences</source>
        <translation type="obsolete">Voorkeuren</translation>
    </message>
    <message>
        <source>Undo Delete Object</source>
        <translation type="obsolete">Maak Object Verwijdering ongedaan</translation>
    </message>
    <message>
        <source>Drag Pages or Template Pages onto the Trashbin to delete them.</source>
        <translation type="obsolete">Sleep Pagina&apos;s of Template Pagina&apos;s naar de vuilnisbak om ze te verwijderen</translation>
    </message>
    <message>
        <source>Default Size:</source>
        <translation type="obsolete">Normale Grootte:</translation>
    </message>
    <message>
        <source>Default Unit:</source>
        <translation type="obsolete">Normale Eenheid:</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation type="obsolete">Gestreepte Onderbroken Lijn</translation>
    </message>
    <message>
        <source>Default Font:</source>
        <translation type="obsolete">Normale lettertype:</translation>
    </message>
    <message>
        <source>Minor Grid Spacing:</source>
        <translation type="obsolete">Subgrid Afmeting:</translation>
    </message>
    <message>
        <source>Templates...</source>
        <translation type="obsolete">Templates...</translation>
    </message>
    <message>
        <source>Visible</source>
        <translation type="obsolete">Zichtbaar</translation>
    </message>
    <message>
        <source>Select Fields</source>
        <translation type="obsolete">Selecteer Velden</translation>
    </message>
    <message>
        <source>Reset this Control Points</source>
        <translation type="obsolete">Reset dit Controle Punt</translation>
    </message>
    <message>
        <source>FlatCap</source>
        <translation type="obsolete">FlatCap</translation>
    </message>
    <message>
        <source>Split Polygon</source>
        <translation type="obsolete">Deel Polygoon</translation>
    </message>
    <message>
        <source>Apply Template</source>
        <translation type="obsolete">Gebruik Template</translation>
    </message>
    <message>
        <source>Value must be greater than or equal to:</source>
        <translation type="obsolete">Waarde moet groter of gelijk zijn aan:</translation>
    </message>
    <message>
        <source>Image visible</source>
        <translation type="obsolete">Afmeting zichtbaar</translation>
    </message>
    <message>
        <source>Combine Polygons</source>
        <translation type="obsolete">Kombineer Polygonen</translation>
    </message>
    <message>
        <source>Vertical Guides</source>
        <translation type="obsolete">Verticale Richtlijnen</translation>
    </message>
    <message>
        <source>Typographics</source>
        <translation type="obsolete">Typograficus</translation>
    </message>
    <message>
        <source>Break Textchains</source>
        <translation type="obsolete">Verbreek TekstKoppelingen</translation>
    </message>
    <message>
        <source>Mi&amp;nimize</source>
        <translation type="obsolete">Mi&amp;nimaliseren</translation>
    </message>
    <message>
        <source>Free Scaling</source>
        <translation type="obsolete">Vrije Schaling</translation>
    </message>
    <message>
        <source>Print last page first</source>
        <translation type="obsolete">Druk laatste pagina eerst</translation>
    </message>
    <message>
        <source>Left Page</source>
        <translation type="obsolete">Linker Pagina</translation>
    </message>
    <message>
        <source>Format:</source>
        <translation type="obsolete">Formaat:</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation type="obsolete">Eigenschappen...</translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation type="obsolete">Lezen van Instellingen</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="obsolete">Pagina afmeting</translation>
    </message>
    <message>
        <source>Mirror Page(s) vertical</source>
        <translation type="obsolete">Spiegel Pagina&apos;s verticaal</translation>
    </message>
    <message>
        <source>Save linked Text Frames as PDF-Articles</source>
        <translation type="obsolete">Sla gekoppelde TekstKaders op als PDF-Artikel</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Waarschuwing</translation>
    </message>
    <message>
        <source>French:</source>
        <translation type="obsolete">Frans:</translation>
    </message>
    <message>
        <source>Save as PDF...</source>
        <translation type="obsolete">Opslaan als PDF...</translation>
    </message>
    <message>
        <source>Revert to Saved</source>
        <translation type="obsolete">Opgeslagen versie laden</translation>
    </message>
    <message>
        <source>Facing Pages</source>
        <translation type="obsolete">Zichtbare Pagina&apos;s</translation>
    </message>
    <message>
        <source>Measurements</source>
        <translation type="obsolete">Metingen</translation>
    </message>
    <message>
        <source>Insert Bookmark</source>
        <translation type="obsolete">Voeg Bladwijzer toe</translation>
    </message>
    <message>
        <source>Norwegian:</source>
        <translation type="obsolete">Noors:</translation>
    </message>
    <message>
        <source>Distribute/Align</source>
        <translation type="obsolete">Distribueer/Align</translation>
    </message>
    <message>
        <source>General</source>
        <translation type="obsolete">Algemeen</translation>
    </message>
    <message>
        <source>German:</source>
        <translation type="obsolete">Duits:</translation>
    </message>
    <message>
        <source>Dynamic Color Bars</source>
        <translation type="obsolete">Dynamische Kleurenbar</translation>
    </message>
    <message>
        <source>Hide Measurements</source>
        <translation type="obsolete">Verberg Metingen</translation>
    </message>
    <message>
        <source>One directory up</source>
        <translation type="obsolete">Directory Omhoog</translation>
    </message>
    <message>
        <source>Saves the current Document as PDF</source>
        <translation type="obsolete">Sla het huidige Document op als PDF</translation>
    </message>
    <message>
        <source>Show Measurements</source>
        <translation type="obsolete">Toon Metingen</translation>
    </message>
    <message>
        <source>Setting up Shortcuts</source>
        <translation type="obsolete">Opzetten van snelkoppelingen</translation>
    </message>
    <message>
        <source>Save and Exit</source>
        <translation type="obsolete">Opslaan en Afsluiten</translation>
    </message>
    <message>
        <source>Ma&amp;ximize</source>
        <translation type="obsolete">Ma&amp;ximaliseer</translation>
    </message>
    <message>
        <source>OK to delete Color:</source>
        <translation type="obsolete">Oke om kleur te verwijderen:</translation>
    </message>
    <message>
        <source>Highlight</source>
        <translation type="obsolete">HighLight</translation>
    </message>
    <message>
        <source>Insert Polygons</source>
        <translation type="obsolete">Voeg Polygoon in</translation>
    </message>
    <message>
        <source>Restore Down</source>
        <translation type="obsolete">Terugbrengen Tot</translation>
    </message>
    <message>
        <source>Antialias Text</source>
        <translation type="obsolete">Zachtomrande Tekst</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation type="obsolete">Fatale Fout</translation>
    </message>
    <message>
        <source>Align Left</source>
        <translation type="obsolete">Align Links</translation>
    </message>
    <message>
        <source>Windows</source>
        <translation type="obsolete">Schermen</translation>
    </message>
    <message>
        <source>Modify Frame</source>
        <translation type="obsolete">Pas Kader aan</translation>
    </message>
    <message>
        <source>Input Profile:</source>
        <translation type="obsolete">Invoer Profiel:</translation>
    </message>
    <message>
        <source>Default is Checked</source>
        <translation type="obsolete">Normaal is geslecteerd</translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation type="obsolete">Glitter</translation>
    </message>
    <message>
        <source>Advanced Options</source>
        <translation type="obsolete">Geavanceerde Opties</translation>
    </message>
    <message>
        <source>About Scribus</source>
        <translation type="obsolete">Over Scribus</translation>
    </message>
    <message>
        <source>Document Info</source>
        <translation type="obsolete">Document Informatie</translation>
    </message>
    <message>
        <source>Setup Printer</source>
        <translation type="obsolete">Printer Instellen</translation>
    </message>
    <message>
        <source>Is PDF-Annotation</source>
        <translation type="obsolete">Is een PDF-Aantekening</translation>
    </message>
    <message>
        <source>Opens a Polygon or cuts a Bezier Curve</source>
        <translation type="obsolete">Opent een Polygoon of knipt een Bezier Curve</translation>
    </message>
    <message>
        <source>All Pages</source>
        <translation type="obsolete">Alle Pagina&apos;s</translation>
    </message>
    <message>
        <source>Diagonal Gradient</source>
        <translation type="obsolete">Diagonale Gradient</translation>
    </message>
    <message>
        <source>JavaScripts (*.js);; All Files (*)</source>
        <translation type="obsolete">JavaScripts (*.js);; Alle Bestanden (*)</translation>
    </message>
    <message>
        <source>Shading:</source>
        <translation type="obsolete">Schaduw:</translation>
    </message>
    <message>
        <source>Distribute evenly</source>
        <translation type="obsolete">Distribueer evenredig</translation>
    </message>
    <message>
        <source>Example:</source>
        <translation type="obsolete">Voorbeeld:</translation>
    </message>
    <message>
        <source>Print Separations</source>
        <translation type="obsolete">Druk Separaties</translation>
    </message>
    <message>
        <source>Column Guides</source>
        <translation type="obsolete">Kolom Richtlijnen</translation>
    </message>
    <message>
        <source>Do Not Scroll</source>
        <translation type="obsolete">Niet Scrollen</translation>
    </message>
    <message>
        <source>Move Control Points symmetrical</source>
        <translation type="obsolete">Verplaats Controle Punten Symmetrisch</translation>
    </message>
    <message>
        <source>Text for Button Down</source>
        <translation type="obsolete">Tekst voor Ingedrukte Knop</translation>
    </message>
    <message>
        <source>You need at least the Icon for Normal to use Icons for Buttons</source>
        <translation type="obsolete">Je hebt minstens een &apos;Normaal&apos; Icoon nodig wil je Iconen voor Knoppen gebruiken</translation>
    </message>
    <message>
        <source>Height:</source>
        <translation type="obsolete">Hoogte:</translation>
    </message>
    <message>
        <source>Compatibility:</source>
        <translation type="obsolete">Compatibiliteit:</translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation type="obsolete">Beneden naar Boven</translation>
    </message>
    <message>
        <source>Background:</source>
        <translation type="obsolete">Achtergrond:</translation>
    </message>
    <message>
        <source>Init Hyphenator</source>
        <translation type="obsolete">Opzetten van Hyphenator</translation>
    </message>
    <message>
        <source>Caption above Icon</source>
        <translation type="obsolete">Kapitaal boven Icoon</translation>
    </message>
    <message>
        <source>Print to printer:</source>
        <translation type="obsolete">Afdrukken naar printer:</translation>
    </message>
    <message>
        <source>Corner Radius:</source>
        <translation type="obsolete">Hoek Radius:</translation>
    </message>
    <message>
        <source>Additional Paths</source>
        <translation type="obsolete">Additionele Lokaties</translation>
    </message>
    <message>
        <source>Antialias Graphics</source>
        <translation type="obsolete">Zachtomrande Afbeeldingen</translation>
    </message>
    <message>
        <source>Distance of Text</source>
        <translation type="obsolete">Afstand tot Tekst</translation>
    </message>
    <message>
        <source>Recent Documents:</source>
        <translation type="obsolete">Recente Documenten:</translation>
    </message>
    <message>
        <source>Deselect all</source>
        <translation type="obsolete">Alles deSelecteren</translation>
    </message>
    <message>
        <source>New Template</source>
        <translation type="obsolete">Nieuwe Template</translation>
    </message>
    <message>
        <source>Create New Folder</source>
        <translation type="obsolete">Maak een Directory</translation>
    </message>
    <message>
        <source>Insert PDF-Annotations</source>
        <translation type="obsolete">Voeg PDF-Annotaties in</translation>
    </message>
    <message>
        <source>Documentation:</source>
        <translation type="obsolete">Documentatie:</translation>
    </message>
    <message>
        <source>Selection Change</source>
        <translation type="obsolete">Selectie Wissel</translation>
    </message>
    <message>
        <source>Add a new Layer</source>
        <translation type="obsolete">Nieuwe Laag toevoegen</translation>
    </message>
    <message>
        <source>Allow Printing the Document</source>
        <translation type="obsolete">Afdrukken van het Document toestaan</translation>
    </message>
    <message>
        <source>Ordinary Text</source>
        <translation type="obsolete">Normale Tekst</translation>
    </message>
    <message>
        <source>Available Fonts</source>
        <translation type="obsolete">Beschikbare Lettertypes</translation>
    </message>
    <message>
        <source>Insert Textbox</source>
        <translation type="obsolete">Voeg Tekstbox in</translation>
    </message>
    <message>
        <source>Save Text...</source>
        <translation type="obsolete">Opslaan als Tekst...</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg);; All Files (*)</source>
        <translation type="obsolete">SVG-Afbeeldingen (*.svg);; Alle Bestanden (*)</translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation type="obsolete">Rechter Pagina</translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation type="obsolete">Harde Lijn</translation>
    </message>
    <message>
        <source>Printing completed</source>
        <translation type="obsolete">Afdrukken voltooid</translation>
    </message>
    <message>
        <source>Saving aborted</source>
        <translation type="obsolete">Opslaan afgebroken</translation>
    </message>
    <message>
        <source>From page:</source>
        <translation type="obsolete">Vanaf pagina:</translation>
    </message>
    <message>
        <source>Edit Templates</source>
        <translation type="obsolete">Bewerkt Templates</translation>
    </message>
    <message>
        <source>Can&apos;t write the File: 
%1</source>
        <translation type="obsolete">Kan niet naar bestand schrijven: 
%1&apos;</translation>
    </message>
    <message>
        <source>Resolution for EPS-Images:</source>
        <translation type="obsolete">Resolutie voor EPS-Afbeeldingen:</translation>
    </message>
    <message>
        <source>Output intended for:</source>
        <translation type="obsolete">Uitvoer bestemd voor:</translation>
    </message>
    <message>
        <source>Horizontal flipped</source>
        <translation type="obsolete">Horizontaal gedraait</translation>
    </message>
    <message>
        <source>Document Pages:</source>
        <translation type="obsolete">Document Pagina&apos;s:</translation>
    </message>
    <message>
        <source>Picture </source>
        <translation type="obsolete">Afbeelding </translation>
    </message>
    <message>
        <source>Pictures</source>
        <translation type="obsolete">Afbeeldingen</translation>
    </message>
    <message>
        <source>Detail View</source>
        <translation type="obsolete">Detail Weergave</translation>
    </message>
    <message>
        <source>Reset Control Points</source>
        <translation type="obsolete">Reset Controle Punten</translation>
    </message>
    <message>
        <source>Textfiles (*.txt);;All Files (*)</source>
        <translation type="obsolete">TekstBestanden (*.txt);;Alle Bestanden (*)</translation>
    </message>
    <message>
        <source>Scribus Manual</source>
        <translation type="obsolete">Scribus Handboek</translation>
    </message>
    <message>
        <source>Info String:</source>
        <translation type="obsolete">Info Regel:</translation>
    </message>
    <message>
        <source>Template (Right Page):</source>
        <translation type="obsolete">Template (Rechter Pagina):</translation>
    </message>
    <message>
        <source>In the Background</source>
        <translation type="obsolete">In de achtergrond</translation>
    </message>
    <message>
        <source>Arrange Pages</source>
        <translation type="obsolete">Herschik Pagina&apos;s</translation>
    </message>
    <message>
        <source>Orientation:</source>
        <translation type="obsolete">Orientatie:</translation>
    </message>
    <message>
        <source>Alignment</source>
        <translation type="obsolete">Alignment</translation>
    </message>
    <message>
        <source>User Guides Color:</source>
        <translation type="obsolete">Gebruikers Richtlijn Kleur:</translation>
    </message>
    <message>
        <source>Include Bookmarks</source>
        <translation type="obsolete">Invoegen Bladwijzers</translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation type="obsolete">Boven naar Beneden</translation>
    </message>
    <message>
        <source>Insert Special</source>
        <translation type="obsolete">Speciaal Invoegen</translation>
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
        <source>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame. Text
must be UTF encoded (see setText() as reference) The first character has an
index of 0. &quot;name&quot; If &quot;name&quot; is not given the currently selected Item is
used.

May throw IndexError for an insertion out of bounds.
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
        <source>saveDocAs(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -&gt; bool

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
        <source>rendeFont(&quot;name&quot;, &quot;filename&quot;, &quot;sample&quot;, size) -&gt; bool

Creates an image preview of font &quot;name&quot; with given text &quot;sample&quot; and size.
Image is saved into &quot;filename&quot;. Returns true when success.

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
        <source>setLayerPrintable(&quot;layer&quot;, printable)

Sets the layer &quot;layer&quot; to be printable or not. If is the printable set to
false the layer won&apos;t be printed.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns wether the Layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns wether the layer &quot;layer&quot; is printable or not, a value of True means
that the layer &quot;layer&quot; can be printed, a value of False means that printing
the layer &quot;layer&quot; is disabled.

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
        <source>textFlowsAroundFrame(&quot;name&quot; [, state])

Enables/disables &quot;Text Flows Around Frame&quot; feature for object &quot;name&quot;.
Called with parameters string name and optional boolean &quot;state&quot;. If &quot;state&quot;
is not passed, text flow is toggled.
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
        <source>getPageMargins()

Returns the page margins as a (left, right, top, bottom) tuple in the current
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
</context>
<context>
    <name>About</name>
    <message>
        <source>About Scribus%1%2</source>
        <translation type="obsolete">Info over Scribus%1%2</translation>
    </message>
    <message>
        <source>%1. %2 %3 </source>
        <translation>%1. %2 %3 </translation>
    </message>
    <message>
        <source>Scribus Version %1
%2 %3</source>
        <translation>Scribus versie %1
%2 %3</translation>
    </message>
    <message>
        <source>Build-ID:</source>
        <translation>Build-ID:</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>Inf&amp;o</translation>
    </message>
    <message>
        <source>Programming:</source>
        <translation type="obsolete">Programmering:</translation>
    </message>
    <message>
        <source>Contributions from:</source>
        <translation>Bijdragen van:</translation>
    </message>
    <message>
        <source>Windows port:</source>
        <translation>Windows-versie:</translation>
    </message>
    <message>
        <source>Documentation:</source>
        <translation type="obsolete">Documentatie:</translation>
    </message>
    <message>
        <source>A&amp;uthors</source>
        <translation>A&amp;uteurs</translation>
    </message>
    <message>
        <source>German:</source>
        <translation>Duits:</translation>
    </message>
    <message>
        <source>French:</source>
        <translation>Frans:</translation>
    </message>
    <message>
        <source>Spanish and Catalan:</source>
        <translation type="obsolete">Spaans en Catalaans:</translation>
    </message>
    <message>
        <source>Italian:</source>
        <translation>Italiaans:</translation>
    </message>
    <message>
        <source>Hungarian:</source>
        <translation>Hongaars:</translation>
    </message>
    <message>
        <source>Ukrainian:</source>
        <translation>Ukraïens:</translation>
    </message>
    <message>
        <source>Bulgarian:</source>
        <translation>Bulgaars:</translation>
    </message>
    <message>
        <source>Galician:</source>
        <translation>Galiciaans:</translation>
    </message>
    <message>
        <source>Turkish:</source>
        <translation>Turks:</translation>
    </message>
    <message>
        <source>Lithuanian:</source>
        <translation>Litouws:</translation>
    </message>
    <message>
        <source>Polish:</source>
        <translation>Pools:</translation>
    </message>
    <message>
        <source>Czech:</source>
        <translation>Tsjechisch:</translation>
    </message>
    <message>
        <source>Slovak:</source>
        <translation>Slovaaks:</translation>
    </message>
    <message>
        <source>Danish:</source>
        <translation>Deens:</translation>
    </message>
    <message>
        <source>Norwegian:</source>
        <translation>Noors:</translation>
    </message>
    <message>
        <source>Welsh:</source>
        <translation>Welsh:</translation>
    </message>
    <message>
        <source>Russian:</source>
        <translation>Russisch:</translation>
    </message>
    <message>
        <source>Brazilian:</source>
        <translation>Braziliaans:</translation>
    </message>
    <message>
        <source>Finnish:</source>
        <translation>Fins:</translation>
    </message>
    <message>
        <source>Slovenian:</source>
        <translation>Sloveens:</translation>
    </message>
    <message>
        <source>Basque:</source>
        <translation>Baskisch:</translation>
    </message>
    <message>
        <source>Swedish:</source>
        <translation>Zweeds:</translation>
    </message>
    <message>
        <source>&amp;Translations</source>
        <translation>Ver&amp;talingen</translation>
    </message>
    <message>
        <source>&amp;Online</source>
        <translation>&amp;Online</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Sluiten</translation>
    </message>
    <message>
        <source>This panel shows the version, build date and
 compiled in library support in Scribus
The C-C-T equates to C=CUPS C=littlecms T=TIFF support.
Missing library support is indicated by a *</source>
        <translation type="obsolete">Dit paneel toont de versie, compileerdatum en de
ingebouwde ondersteuning voor bibliotheken in Scribus.
&quot;C-C-T&quot; staat voor C=CUPS, C=littlecms, T=TIFF-onder-
steuning. Ontbrekende bibliotheken worden aangeduid met *</translation>
    </message>
    <message>
        <source>Development Team:</source>
        <translation>Ontwikkelteam:</translation>
    </message>
    <message>
        <source>Official Documentation:</source>
        <translation>Officiële documentatie:</translation>
    </message>
    <message>
        <source>Other Documentation:</source>
        <translation>Andere documentatie:</translation>
    </message>
    <message>
        <source>English (British):</source>
        <translation>Engels (Brits):</translation>
    </message>
    <message>
        <source>Homepage</source>
        <translation>Homepage</translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation>Online handleiding</translation>
    </message>
    <message>
        <source>Bugs and Feature Requests</source>
        <translation>Fouten en wensen</translation>
    </message>
    <message>
        <source>Mailing List</source>
        <translation>Mailinglijst</translation>
    </message>
    <message>
        <source>About Scribus %1</source>
        <translation>Info over Scribus %1</translation>
    </message>
    <message>
        <source>Official Translations and Translators:</source>
        <translation>Officiële vertalingen en vertalers:</translation>
    </message>
    <message>
        <source>Catalan:</source>
        <translation>Catalaans:</translation>
    </message>
    <message>
        <source>Esperanto:</source>
        <translation>Esperanto:</translation>
    </message>
    <message>
        <source>Korean:</source>
        <translation>Koreaans:</translation>
    </message>
    <message>
        <source>Serbian:</source>
        <translation>Servisch:</translation>
    </message>
    <message>
        <source>Spanish:</source>
        <translation>Spaans:</translation>
    </message>
    <message>
        <source>Previous Translation Contributors:</source>
        <translation>Eerdere bijdragers van vertalingen:</translation>
    </message>
    <message>
        <source>This panel shows the version, build date and
 compiled in library support in Scribus
The C-C-T equates to C=littlecms C=CUPS T=TIFF support.
Missing library support is indicated by a *</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AdvOptions</name>
    <message>
        <source>Advanced Options</source>
        <translation>Geavanceerde opties</translation>
    </message>
    <message>
        <source>Mirror Page(s) &amp;Horizontal</source>
        <translation>Pagina(&apos;s) &amp;horizontaal spiegelen</translation>
    </message>
    <message>
        <source>Mirror Page(s) &amp;Vertical</source>
        <translation>Pagina(&apos;s) &amp;verticaal spiegelen</translation>
    </message>
    <message>
        <source>Apply Under Color &amp;Removal</source>
        <translation>Onde&amp;rliggende kleuren verwijderen</translation>
    </message>
    <message>
        <source>Apply &amp;ICC Profiles</source>
        <translation>&amp;ICC-profielen toepassen</translation>
    </message>
    <message>
        <source>PostScript Level &amp;1</source>
        <translation>PostScript niveau &amp;1</translation>
    </message>
    <message>
        <source>PostScript Level &amp;2</source>
        <translation>PostScript niveau &amp;2</translation>
    </message>
    <message>
        <source>PostScript Level &amp;3</source>
        <translation>PostScript niveau &amp;3</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>Creates PostScript Level 3</source>
        <translation>Maakt PostScript niveau 3 aan</translation>
    </message>
    <message>
        <source>Creates PostScript Level 2 only, beware,
this can create huge files</source>
        <translation>Maakt PostScript niveau 2 aan, dit kan
zeer grote bestanden tot gevolg hebben</translation>
    </message>
    <message>
        <source>Creates PostScript Level 1 only, beware,
this can create huge files</source>
        <translation>Maakt PostScript niveau 1 aan, dit kan
zeer grote bestanden tot gevolg hebben</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>Een methode om grijstinten die zijn samengesteld uit cyaan, geel en magenta
te vervangen door tinten enkel op zwart gebaseerd.
UCR (Under Color Removal) heeft vooral invloed op donkere en neutrale tinten
die dicht bij grijs liggen. Sommige afbeeldingen worden fraaier afgedrukt door
deze functie; experimenteren kan nodig zijn.
UCR verkleint de kans op oververzadiging met CMY inkten.</translation>
    </message>
</context>
<context>
    <name>Align</name>
    <message>
        <source>Distribute/Align</source>
        <translation>Verdelen/uitlijnen</translation>
    </message>
    <message>
        <source>Align</source>
        <translation>Uitlijnen</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation>Horizontaal</translation>
    </message>
    <message>
        <source>Left Sides</source>
        <translation>Links</translation>
    </message>
    <message>
        <source>Middles</source>
        <translation>Midden</translation>
    </message>
    <message>
        <source>Right Sides</source>
        <translation>Rechts</translation>
    </message>
    <message>
        <source>&amp;Between:</source>
        <translation>&amp;Tussen:</translation>
    </message>
    <message>
        <source>&amp;Do Not Change</source>
        <translation>Niet veran&amp;deren</translation>
    </message>
    <message>
        <source>A&amp;lign</source>
        <translation>Uit&amp;lijnen</translation>
    </message>
    <message>
        <source>Di&amp;splacement</source>
        <translation>Verplaat&amp;sing</translation>
    </message>
    <message>
        <source>Distribute &amp;Evenly</source>
        <translation>G&amp;elijk verdelen</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation>Verticaal</translation>
    </message>
    <message>
        <source>Top Sides</source>
        <translation>Bovenkant</translation>
    </message>
    <message>
        <source>Bottom Sides</source>
        <translation>Onderkant</translation>
    </message>
    <message>
        <source>Bet&amp;ween:</source>
        <translation>T&amp;ussen:</translation>
    </message>
    <message>
        <source>Do &amp;Not Change</source>
        <translation>&amp;Niet veranderen</translation>
    </message>
    <message>
        <source>Al&amp;ign</source>
        <translation>U&amp;itlijnen</translation>
    </message>
    <message>
        <source>Dis&amp;placement</source>
        <translation>Ver&amp;plaatsing</translation>
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
        <translation>in</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>Distribute E&amp;venly</source>
        <translation>Gelijk &amp;verdelen</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>Toe&amp;passen</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
</context>
<context>
    <name>AlignSelect</name>
    <message>
        <source>Align Text Left</source>
        <translation>Tekst links uitlijnen</translation>
    </message>
    <message>
        <source>Align Text Right</source>
        <translation>Tekst rechts uitlijnen</translation>
    </message>
    <message>
        <source>Align Text Center</source>
        <translation>Tekst centreren</translation>
    </message>
    <message>
        <source>Align Text Justified</source>
        <translation>Tekst uitvullen</translation>
    </message>
    <message>
        <source>Align Text Forced Justified</source>
        <translation>Tekst geforceerd uitvullen</translation>
    </message>
</context>
<context>
    <name>Annot</name>
    <message>
        <source>Field Properties</source>
        <translation>Veldeigenschappen</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Type:</translation>
    </message>
    <message>
        <source>Button</source>
        <translation>Knop</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation>Tekstveld</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation>Keuzevakje</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation>Combobox</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation>Lijst</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation>Eigenschappen</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Naam:</translation>
    </message>
    <message>
        <source>Tool-Tip:</source>
        <translation>Hulpballon:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Tekst</translation>
    </message>
    <message>
        <source>Font for use with PDF 1.3:</source>
        <translation>Lettertype voor PDF 1.3:</translation>
    </message>
    <message>
        <source>Border</source>
        <translation>Rand</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Kleur:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation>Breedte:</translation>
    </message>
    <message>
        <source>Thin</source>
        <translation>Smal</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normaal</translation>
    </message>
    <message>
        <source>Wide</source>
        <translation>Breed</translation>
    </message>
    <message>
        <source>Style:</source>
        <translation>Stijl:</translation>
    </message>
    <message>
        <source>Solid</source>
        <translation>Effen</translation>
    </message>
    <message>
        <source>Dashed</source>
        <translation>Gestreept</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation>Onderstreept</translation>
    </message>
    <message>
        <source>Beveled</source>
        <translation>Afgeschuind</translation>
    </message>
    <message>
        <source>Inset</source>
        <translation>Inliggend</translation>
    </message>
    <message>
        <source>Other</source>
        <translation>Overig</translation>
    </message>
    <message>
        <source>Read Only</source>
        <translation>Alleen-lezen</translation>
    </message>
    <message>
        <source>Required</source>
        <translation>Vereist</translation>
    </message>
    <message>
        <source>Don&apos;t Export Value</source>
        <translation>Waarde niet exporteren</translation>
    </message>
    <message>
        <source>Visibility:</source>
        <translation>Zichtbaarheid:</translation>
    </message>
    <message>
        <source>Visible</source>
        <translation>Zichtbaar</translation>
    </message>
    <message>
        <source>Hidden</source>
        <translation>Onzichtbaar</translation>
    </message>
    <message>
        <source>No Print</source>
        <translation>Niet afdrukken</translation>
    </message>
    <message>
        <source>No View</source>
        <translation>Niet weergeven</translation>
    </message>
    <message>
        <source>Appearance</source>
        <translation>Uiterlijk</translation>
    </message>
    <message>
        <source>Text for Button Down</source>
        <translation>Tekst voor ingedrukte knop</translation>
    </message>
    <message>
        <source>Text for Roll Over</source>
        <translation>Tekst voor muis-over</translation>
    </message>
    <message>
        <source>Icons</source>
        <translation>Pictogrammen</translation>
    </message>
    <message>
        <source>Use Icons</source>
        <translation>Pictogrammen gebruiken</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Verwijderen</translation>
    </message>
    <message>
        <source>Pressed</source>
        <translation>Ingedrukt</translation>
    </message>
    <message>
        <source>Roll Over</source>
        <translation>Muis-over</translation>
    </message>
    <message>
        <source>Icon Placement...</source>
        <translation>Plaatsing van pictogram...</translation>
    </message>
    <message>
        <source>Highlight</source>
        <translation>Accentueren</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation>Inverteren</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation>Outline</translation>
    </message>
    <message>
        <source>Push</source>
        <translation>Druk</translation>
    </message>
    <message>
        <source>Multi-Line</source>
        <translation>Meerregelig</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>Wachtwoord</translation>
    </message>
    <message>
        <source>Limit of</source>
        <translation>Limiet van</translation>
    </message>
    <message>
        <source>Characters</source>
        <translation>tekens</translation>
    </message>
    <message>
        <source>Do Not Scroll</source>
        <translation>Niet schuiven</translation>
    </message>
    <message>
        <source>Do Not Spell Check</source>
        <translation>Geen spellingcontrole</translation>
    </message>
    <message>
        <source>Check Style:</source>
        <translation>Stijl controleren:</translation>
    </message>
    <message>
        <source>Check</source>
        <translation>Controleren</translation>
    </message>
    <message>
        <source>Cross</source>
        <translation>Kruis</translation>
    </message>
    <message>
        <source>Diamond</source>
        <translation>Diamant</translation>
    </message>
    <message>
        <source>Circle</source>
        <translation>Cirkel</translation>
    </message>
    <message>
        <source>Star</source>
        <translation>Ster</translation>
    </message>
    <message>
        <source>Square</source>
        <translation>Vierkant</translation>
    </message>
    <message>
        <source>Default is Checked</source>
        <translation>Standaard is geselecteerd</translation>
    </message>
    <message>
        <source>Editable</source>
        <translation>Bewerkbaar</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opties</translation>
    </message>
    <message>
        <source>Java Script</source>
        <translation>Javascript</translation>
    </message>
    <message>
        <source>Go To</source>
        <translation>Ga naar</translation>
    </message>
    <message>
        <source>Submit Form</source>
        <translation>Formulier verzenden</translation>
    </message>
    <message>
        <source>Reset Form</source>
        <translation>Formulier wissen</translation>
    </message>
    <message>
        <source>Import Data</source>
        <translation>Gegevens importeren</translation>
    </message>
    <message>
        <source>Event:</source>
        <translation>Gebeurtenis:</translation>
    </message>
    <message>
        <source>Mouse Up</source>
        <translation>Muisknop omhoog</translation>
    </message>
    <message>
        <source>Mouse Down</source>
        <translation>Muisknop omlaag</translation>
    </message>
    <message>
        <source>Mouse Enter</source>
        <translation>Muis komt over</translation>
    </message>
    <message>
        <source>Mouse Exit</source>
        <translation>Muis gaat weg</translation>
    </message>
    <message>
        <source>On Focus</source>
        <translation>Bij focus</translation>
    </message>
    <message>
        <source>On Blur</source>
        <translation>Bij verlaten van focus</translation>
    </message>
    <message>
        <source>Script:</source>
        <translation>Script:</translation>
    </message>
    <message>
        <source>Edit...</source>
        <translation>Bewerken...</translation>
    </message>
    <message>
        <source>Submit to URL:</source>
        <translation>Verzenden naar URL:</translation>
    </message>
    <message>
        <source>Submit Data as HTML</source>
        <translation>Gegevens als HTML versturen</translation>
    </message>
    <message>
        <source>Import Data from:</source>
        <translation>Gegevens importeren van:</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>Doel</translation>
    </message>
    <message>
        <source>To File:</source>
        <translation>Naar bestand:</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation>Wijzigen...</translation>
    </message>
    <message>
        <source>Page:</source>
        <translation>Pagina:</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation>X-positie:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation>Y-positie:</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Actie</translation>
    </message>
    <message>
        <source>Field is formatted as:</source>
        <translation>Veld is geformatteerd als:</translation>
    </message>
    <message>
        <source>Plain</source>
        <translation>Eenvoudig</translation>
    </message>
    <message>
        <source>Number</source>
        <translation>Nummer</translation>
    </message>
    <message>
        <source>Percentage</source>
        <translation>Percentage</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Datum</translation>
    </message>
    <message>
        <source>Time</source>
        <translation>Tijd</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Aangepast</translation>
    </message>
    <message>
        <source>Number Format</source>
        <translation>Nummerformaat</translation>
    </message>
    <message>
        <source>Decimals:</source>
        <translation>Decimalen:</translation>
    </message>
    <message>
        <source>Use Currency Symbol</source>
        <translation>Geldwaarde-symbool gebruiken</translation>
    </message>
    <message>
        <source>Prepend Currency Symbol</source>
        <translation>Waarde-symbool vooraan plaatsen</translation>
    </message>
    <message>
        <source>Formatting</source>
        <translation>Formattering</translation>
    </message>
    <message>
        <source>Percent Format</source>
        <translation>Percentageformaat</translation>
    </message>
    <message>
        <source>Date Format</source>
        <translation>Datumformaat</translation>
    </message>
    <message>
        <source>Time Format</source>
        <translation>Tijdformaat</translation>
    </message>
    <message>
        <source>Custom Scripts</source>
        <translation>Eigen scripts</translation>
    </message>
    <message>
        <source>Format:</source>
        <translation>Formaat:</translation>
    </message>
    <message>
        <source>Keystroke:</source>
        <translation>Toetsaanslag:</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>Formaat</translation>
    </message>
    <message>
        <source>Value is not validated</source>
        <translation>Waarde is niet gevalideerd</translation>
    </message>
    <message>
        <source>Value must be greater than or equal to:</source>
        <translation>Waarde moet groter of gelijk zijn aan:</translation>
    </message>
    <message>
        <source>and less or equal to:</source>
        <translation>en kleiner of gelijk aan:</translation>
    </message>
    <message>
        <source>Custom validate script:</source>
        <translation>Eigen validatiescript:</translation>
    </message>
    <message>
        <source>Validate</source>
        <translation>Valideren</translation>
    </message>
    <message>
        <source>Value is not calculated</source>
        <translation>Waarde is niet berekend</translation>
    </message>
    <message>
        <source>Value is the</source>
        <translation>Waarde is</translation>
    </message>
    <message>
        <source>sum</source>
        <translation>de som</translation>
    </message>
    <message>
        <source>product</source>
        <translation>het produkt</translation>
    </message>
    <message>
        <source>average</source>
        <translation>het gemiddelde</translation>
    </message>
    <message>
        <source>minimum</source>
        <translation>het minimum</translation>
    </message>
    <message>
        <source>maximum</source>
        <translation>het maximum</translation>
    </message>
    <message>
        <source>of the following fields:</source>
        <translation>van de volgende velden:</translation>
    </message>
    <message>
        <source>Pick...</source>
        <translation>Selecteren...</translation>
    </message>
    <message>
        <source>Custom calculation script:</source>
        <translation>Eigen calculatiescript:</translation>
    </message>
    <message>
        <source>Calculate</source>
        <translation>Berekenen</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message>
        <source>Flag is ignored for PDF 1.3</source>
        <translation>Deze vlag wordt genegeerd in PDF 1.3</translation>
    </message>
    <message>
        <source>Enter a comma separated list of fields here</source>
        <translation>Voer hier een door komma&apos;s gescheiden lijst van velden in</translation>
    </message>
    <message>
        <source>You need at least the Icon for Normal to use Icons for Buttons</source>
        <translation>U hebt tenminste een pictogram &apos;Normaal&apos; nodig om pictogrammen voor knoppen te kunnen gebruiken</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>Images (*.tif *.png *.jpg *.xpm);;Postscript (*.eps);;All Files (*)</source>
        <translation>Afbeeldingen (*.tif *.png *.jpg *.xpm);;Postscript (*.eps);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Example:</source>
        <translation>Voorbeeld:</translation>
    </message>
    <message>
        <source>Selection Change</source>
        <translation>Selectie wijzigen</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>PDF-bestanden (*.pdf);;Alle bestanden (*)</translation>
    </message>
</context>
<context>
    <name>Annota</name>
    <message>
        <source>Annotation Properties</source>
        <translation>Annotatie-eigenschappen</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation type="obsolete">Type:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Tekst</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Koppeling</translation>
    </message>
    <message>
        <source>External Link</source>
        <translation>Externe koppeling</translation>
    </message>
    <message>
        <source>External Web-Link</source>
        <translation>Externe webkoppeling</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>Doel</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation type="obsolete">Wijzigen...</translation>
    </message>
    <message>
        <source>Page:</source>
        <translation type="obsolete">Pagina:</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation type="obsolete">X-positie:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation type="obsolete">Y-positie:</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Annuleren</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>PDF-Documents (*.pdf);;All Files (*)</source>
        <translation>PDF-bestanden (*.pdf);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>&amp;Type:</source>
        <translation>&amp;Type:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Wijzigen...</translation>
    </message>
    <message>
        <source>&amp;Page:</source>
        <translation>&amp;Pagina:</translation>
    </message>
    <message>
        <source>&amp;X-Pos</source>
        <translation>&amp;X-pos</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y-pos:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
</context>
<context>
    <name>ApplyT</name>
    <message>
        <source>Apply Template</source>
        <translation>Sjabloon toepassen</translation>
    </message>
    <message>
        <source>&amp;Template:</source>
        <translation>&amp;Sjabloon:</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normaal</translation>
    </message>
    <message>
        <source>Apply to &amp;Current Page</source>
        <translation>Toepassen op &amp;huidige pagina</translation>
    </message>
    <message>
        <source>Apply to all &amp;even Pages</source>
        <translation>Toepassen op &amp;even pagina&apos;s</translation>
    </message>
    <message>
        <source>Apply to all &amp;odd Pages</source>
        <translation>Toepassen op &amp;oneven pagina&apos;s</translation>
    </message>
    <message>
        <source>Apply from &amp;Page:</source>
        <translation>Toepassen vanaf &amp;pagina:</translation>
    </message>
    <message>
        <source>To:</source>
        <translation>tot:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
</context>
<context>
    <name>Biblio</name>
    <message>
        <source>Scrapbook</source>
        <translation>Kladblok</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nieuw</translation>
    </message>
    <message>
        <source>&amp;Load...</source>
        <translation>&amp;Openen...</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>Op&amp;slaan</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Opslaan &amp;als...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Sluiten</translation>
    </message>
    <message>
        <source>&amp;Small</source>
        <translation>&amp;Klein</translation>
    </message>
    <message>
        <source>&amp;Medium</source>
        <translation>&amp;Middel</translation>
    </message>
    <message>
        <source>&amp;Large</source>
        <translation>&amp;Groot</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Bestand</translation>
    </message>
    <message>
        <source>&amp;Preview</source>
        <translation>&amp;Voorbeeld</translation>
    </message>
    <message>
        <source>Scrapbooks (*.scs);;All Files (*)</source>
        <translation>Kladblokbestanden (*.scs);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Hernoemen</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Verwijderen</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation>De naam &quot;%1&quot; is niet uniek.
Kies een andere naam.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Object</source>
        <translation>Object</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Naam:</translation>
    </message>
    <message>
        <source>New Entry</source>
        <translation>Nieuwe ingang</translation>
    </message>
</context>
<context>
    <name>BookMView</name>
    <message>
        <source>Bookmarks</source>
        <translation>Bladwijzers</translation>
    </message>
    <message>
        <source>Move Bookmark</source>
        <translation>Bladwijzer verplaatsen</translation>
    </message>
    <message>
        <source>Insert Bookmark</source>
        <translation>Bladwijzer invoegen</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
</context>
<context>
    <name>BookPalette</name>
    <message>
        <source>Bookmarks</source>
        <translation>Bladwijzers</translation>
    </message>
</context>
<context>
    <name>ButtonIcon</name>
    <message>
        <source>Icon Placement</source>
        <translation>Plaatsing van pictogrammen</translation>
    </message>
    <message>
        <source>Layout:</source>
        <translation>Layout:</translation>
    </message>
    <message>
        <source>Caption only</source>
        <translation>Alleen tekst</translation>
    </message>
    <message>
        <source>Icon only</source>
        <translation>Alleen pictogrammen</translation>
    </message>
    <message>
        <source>Caption below Icon</source>
        <translation>Tekst onder pictogram</translation>
    </message>
    <message>
        <source>Caption above Icon</source>
        <translation>Tekst boven pictogram</translation>
    </message>
    <message>
        <source>Caption right to Icon</source>
        <translation>Tekst rechts van pictogram</translation>
    </message>
    <message>
        <source>Caption left to Icon</source>
        <translation>Tekst links van pictogram</translation>
    </message>
    <message>
        <source>Caption overlays Icon</source>
        <translation>Tekst over pictogram heen</translation>
    </message>
    <message>
        <source>Scale:</source>
        <translation>Schaal:</translation>
    </message>
    <message>
        <source>Always</source>
        <translation>Altijd</translation>
    </message>
    <message>
        <source>When Icon is too small</source>
        <translation>Als pictogram te klein is</translation>
    </message>
    <message>
        <source>When Icon is too big</source>
        <translation>Als pictogram te groot is</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>Nooit</translation>
    </message>
    <message>
        <source>Scale How:</source>
        <translation>Schaalmethode:</translation>
    </message>
    <message>
        <source>Proportional</source>
        <translation>Proportioneel</translation>
    </message>
    <message>
        <source>Non Proportional</source>
        <translation>Niet proportioneel</translation>
    </message>
    <message>
        <source>Icon</source>
        <translation>Pictogram</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message>
        <source>Reset</source>
        <translation>Opnieuw instellen</translation>
    </message>
</context>
<context>
    <name>CMSPrefs</name>
    <message>
        <source>Color Management Settings</source>
        <translation>Instellingen voor kleurbeheer</translation>
    </message>
    <message>
        <source>&amp;Activate Color Management</source>
        <translation>Kleurbeheer &amp;activeren</translation>
    </message>
    <message>
        <source>System Profiles</source>
        <translation>Systeemprofielen</translation>
    </message>
    <message>
        <source>&amp;Pictures:</source>
        <translation>A&amp;fbeeldingen:</translation>
    </message>
    <message>
        <source>&amp;Solid Colors:</source>
        <translation>&amp;Effen kleuren:</translation>
    </message>
    <message>
        <source>&amp;Monitor:</source>
        <translation>&amp;Beeldscherm:</translation>
    </message>
    <message>
        <source>P&amp;rinter:</source>
        <translation>&amp;Printer:</translation>
    </message>
    <message>
        <source>Rendering Intents</source>
        <translation>Rendering intents</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Perceptueel</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Relatief colorimetrisch</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Verzadiging</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Absoluut colorimetrisch</translation>
    </message>
    <message>
        <source>M&amp;onitor:</source>
        <translation>Bee&amp;ldscherm:</translation>
    </message>
    <message>
        <source>Pr&amp;inter:</source>
        <translation>Pr&amp;inter:</translation>
    </message>
    <message>
        <source>Sim&amp;ulate Printer on the Screen</source>
        <translation>Printerweergave op scherm sim&amp;uleren</translation>
    </message>
    <message>
        <source>Mark Colors out of &amp;Gamut</source>
        <translation>Kleuren buiten de &amp;gamut markeren</translation>
    </message>
    <message>
        <source>Use &amp;Blackpoint Compensation</source>
        <translation>&amp;Zwartpuntcompensatie gebruiken</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>Default color profile for imported images</source>
        <translation>Standaard kleurprofiel voor geïmporteerde afbeeldingen</translation>
    </message>
    <message>
        <source>Default color profile for solid colors on the page</source>
        <translation>Standaard kleurprofiel voor effen kleuren op de pagina</translation>
    </message>
    <message>
        <source>Color profile that you have generated or received from the manufacturer.
This profile should be specific to your monitor and not a generic profile (i.e. sRGB).</source>
        <translation>Door uzelf aangemaakt of via fabrikant verkregen kleurprofiel.
Dit profiel is specifiek voor uw beeldscherm en niet algemeen (zoals bijv. sRGB).</translation>
    </message>
    <message>
        <source>Color profile for your printer model from the manufacturer.
This profile should be specific to your printer and not a generic profile (i.e. sRGB).</source>
        <translation>Kleurprofiel voor uw printer van de printerfabrikant.
Dit profiel is specifiek voor uw printer en niet algemeen (zoals bijv. sRGB).</translation>
    </message>
    <message>
        <source>Default rendering intent for your monitor. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation>Standaard rendering intent voor uw beeldscherm. Kies, tenzij u precies weet
wat u doet, voor Relatief colorimetrisch of Perceptueel.</translation>
    </message>
    <message>
        <source>Default rendering intent for your printer. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation>Standaard rendering intent voor uw printer. Kies, tenzij u precies weet
wat u doet, voor Relatief colorimetrisch of Perceptueel.</translation>
    </message>
    <message>
        <source>Enable &apos;soft proofing&apos; of how your document colors will print,
based on the chosen printer profile.</source>
        <translation>Laat een weergave op uw scherm zien, gebaseerd
op het gekozen printerprofiel.</translation>
    </message>
    <message>
        <source>Method of showing colors on the screen which may not print properly.
This requires very accurate profiles and serves only as a warning.</source>
        <translation>Hiermee kunnen kleurgebieden gemarkeerd worden die niet correct zouden worden
afgedrukt. Dit vereist zeer accurate profielen en dient enkel als waarschuwing.</translation>
    </message>
    <message>
        <source>Black Point Compensation is a method of improving contrast in photos.
It is recommended that you enable this if you have photos in your document.</source>
        <translation>Zwartpuntcompensatie is een methode om het contrast in foto&apos;s te verbeteren.
Als uw document foto&apos;s bevat wordt deze instelling aangeraden.</translation>
    </message>
</context>
<context>
    <name>CMYKChoose</name>
    <message>
        <source>Edit Color</source>
        <translation>Kleur bewerken</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Naam:</translation>
    </message>
    <message>
        <source>Color &amp;Model</source>
        <translation>Kleur&amp;model</translation>
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
        <translation>RGB voor web</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Nieuw</translation>
    </message>
    <message>
        <source>Old</source>
        <translation>Oud</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>HSV-Colormap</source>
        <translation>HSV-kleurenkaart</translation>
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
        <translation>Dynamische kleurbalken</translation>
    </message>
    <message>
        <source>Static Color Bars</source>
        <translation>Statische kleurbalken</translation>
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
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>Name of the Color is not unique</source>
        <translation>Deze kleurnaam is niet uniek</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>You cannot create a color named &quot;%1&quot;.
It&apos;s a reserved name for transparent color</source>
        <translation>U kunt geen kleur aanmaken met de naam &quot;%1&quot;.
Deze naam is reeds gereserveerd voor transparante kleuren</translation>
    </message>
</context>
<context>
    <name>Cpalette</name>
    <message>
        <source>Shade:</source>
        <translation>Tint:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation>Ondoorzichtigheid:</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normaal</translation>
    </message>
    <message>
        <source>Horizontal Gradient</source>
        <translation>Horizontaal verloop</translation>
    </message>
    <message>
        <source>Vertical Gradient</source>
        <translation>Verticaal verloop</translation>
    </message>
    <message>
        <source>Diagonal Gradient</source>
        <translation>Diagonaal verloop</translation>
    </message>
    <message>
        <source>Cross Diagonal Gradient</source>
        <translation>Kruislings diagonaal verloop</translation>
    </message>
    <message>
        <source>Radial Gradient</source>
        <translation>Straalsgewijs verloop</translation>
    </message>
    <message>
        <source>Free linear Gradient</source>
        <translation>Vrij lineair verloop</translation>
    </message>
    <message>
        <source>Free radial Gradient</source>
        <translation>Vrij straalsgewijs verloop</translation>
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
        <translation>Lijnkleur bewerken</translation>
    </message>
    <message>
        <source>Edit Fill Color Properties</source>
        <translation>Vulkleur bewerken</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation>Kleurverzadiging</translation>
    </message>
    <message>
        <source>Normal or gradient fill method</source>
        <translation>Vulmethode: normaal of kleurverloop</translation>
    </message>
    <message>
        <source>Set the transparency for the color selected</source>
        <translation>Geeft de mate van ondoorschijnendheid aan</translation>
    </message>
    <message>
        <source>Color of selected object</source>
        <translation>Kleur van het geselecteerde object</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source> mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation>in</translation>
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
        <translation>Opties voor importeren CSV</translation>
    </message>
    <message>
        <source>Field delimiter:</source>
        <translation>Veldscheidingsteken:</translation>
    </message>
    <message>
        <source>(TAB)</source>
        <translation>(TAB)</translation>
    </message>
    <message>
        <source>Value delimiter:</source>
        <translation>Waardescheidingsteken:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>First row is a header</source>
        <translation>Eerste regel is een kopregel</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
</context>
<context>
    <name>CupsOptions</name>
    <message>
        <source>Printer Options</source>
        <translation>Afdrukinstellingen</translation>
    </message>
    <message>
        <source>Page Set</source>
        <translation>Bereik</translation>
    </message>
    <message>
        <source>All Pages</source>
        <translation>Alle pagina&apos;s</translation>
    </message>
    <message>
        <source>Even Pages only</source>
        <translation>Even pagina&apos;s</translation>
    </message>
    <message>
        <source>Odd Pages only</source>
        <translation>Oneven pagina&apos;s</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation>Spiegelen</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Nee</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Ja</translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation>Oriëntatie</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Staand</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Liggend</translation>
    </message>
    <message>
        <source>N-Up Printing</source>
        <translation>Pagina&apos;s per vel</translation>
    </message>
    <message>
        <source>Page per Sheet</source>
        <translation>pagina per vel</translation>
    </message>
    <message>
        <source>Pages per Sheet</source>
        <translation>pagina&apos;s per vel</translation>
    </message>
    <message>
        <source>Option</source>
        <translation>Optie</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Waarde</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>This panel displays various CUPS options when printing. 
The exact parameters available will depend on your printer driver.
You can confirm CUPS support by selecting Help &gt; About.
Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support.
Missing library support is indicated by a *</source>
        <translation>Dit paneel toont verschillende CUPS-opties voor het afdrukken.
Welke instellingen precies mogelijk zijn hangt van uw printerdriver af.
Onder &quot;Help &gt; Info over&quot; kunt u kijken of CUPS-ondersteuning is ingebouwd.
Kijk voor de tekens C-C-T, welke staan voor C=CUPS, C=littlecms, T=TIFF-ondersteuning.
Een * geeft aan welke bibliotheken ontbreken</translation>
    </message>
</context>
<context>
    <name>CustomFDialog</name>
    <message>
        <source>&amp;Compress File</source>
        <translation>Bestand &amp;comprimeren</translation>
    </message>
    <message>
        <source>&amp;Include Fonts</source>
        <translation>Lettertypen &amp;inbedden</translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation>Codering:</translation>
    </message>
    <message>
        <source>Moves to your Document Directory.
This can be set in the Preferences.</source>
        <translation>Gaat naar uw documentenmap.
Deze kan worden ingesteld in de voorkeuren.</translation>
    </message>
</context>
<context>
    <name>DelColor</name>
    <message>
        <source>Delete Color</source>
        <translation>Kleur verwijderen</translation>
    </message>
    <message>
        <source>Delete color:</source>
        <translation>Kleur verwijderen:</translation>
    </message>
    <message>
        <source>?</source>
        <translation>?</translation>
    </message>
    <message>
        <source>Replace it with:</source>
        <translation>Vervangen door:</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Annuleren</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
</context>
<context>
    <name>DelPages</name>
    <message>
        <source>Delete Pages</source>
        <translation>Pagina&apos;s verwijderen</translation>
    </message>
    <message>
        <source>Delete from:</source>
        <translation>Verwijderen van:</translation>
    </message>
    <message>
        <source>to:</source>
        <translation>tot:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren
</translation>
    </message>
</context>
<context>
    <name>DmF</name>
    <message>
        <source>Missing Font</source>
        <translation>Ontbrekend lettertype</translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation>Het lettertype %1 is niet geinstalleerd.</translation>
    </message>
    <message>
        <source>Use</source>
        <translation>Gebruik</translation>
    </message>
    <message>
        <source>instead</source>
        <translation>in plaats daarvan</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
</context>
<context>
    <name>DocInfos</name>
    <message>
        <source>Document Information</source>
        <translation>Documentinformatie</translation>
    </message>
    <message>
        <source>&amp;Title:</source>
        <translation>&amp;Titel:</translation>
    </message>
    <message>
        <source>&amp;Author:</source>
        <translation>&amp;Auteur:</translation>
    </message>
    <message>
        <source>&amp;Keywords:</source>
        <translation>T&amp;refwoorden:</translation>
    </message>
    <message>
        <source>Descri&amp;ption:</source>
        <translation>Om&amp;schrijving:</translation>
    </message>
    <message>
        <source>P&amp;ublisher:</source>
        <translation>&amp;Uitgever:</translation>
    </message>
    <message>
        <source>&amp;Contributors:</source>
        <translation>&amp;Medewerkers:</translation>
    </message>
    <message>
        <source>Dat&amp;e:</source>
        <translation>&amp;Datum:</translation>
    </message>
    <message>
        <source>T&amp;ype:</source>
        <translation>T&amp;ype:</translation>
    </message>
    <message>
        <source>F&amp;ormat:</source>
        <translation>&amp;Formaat:</translation>
    </message>
    <message>
        <source>Identi&amp;fier:</source>
        <translation>&amp;Identifier:</translation>
    </message>
    <message>
        <source>&amp;Source:</source>
        <translation>Br&amp;on:</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>T&amp;aal:</translation>
    </message>
    <message>
        <source>&amp;Relation:</source>
        <translation>R&amp;elatie:</translation>
    </message>
    <message>
        <source>Co&amp;verage:</source>
        <translation>Gaat o&amp;ver:</translation>
    </message>
    <message>
        <source>Ri&amp;ghts:</source>
        <translation>Rec&amp;hten:</translation>
    </message>
    <message>
        <source>&amp;Document</source>
        <translation>Docu&amp;ment</translation>
    </message>
    <message>
        <source>Further &amp;Information</source>
        <translation>Meer &amp;informatie</translation>
    </message>
    <message>
        <source>The person or organisation primarily responsible for making the content of the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation>De persoon of organisatie die de hoofdverantwoordelijke is voor het aanmaken van de inhoud van dit document.
Dit veld kan worden ingebed in het Scribus document, maar ook in de metadata van een PDF-bestand</translation>
    </message>
    <message>
        <source>A name given to the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation>Een naam voor dit document.
Dit veld kan worden ingebed in het Scribus document, maar ook in de metadata van een PDF-bestand</translation>
    </message>
    <message>
        <source>An account of the content of the document.
This field is for a brief description or abstract of the document. It is embedded in the PDF on export</source>
        <translation>Een korte weergave van de inhoud van het document.
Dit wordt ook ingebed in PDF-bestanden bij exporteren</translation>
    </message>
    <message>
        <source>The topic of the content of the document.
This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</source>
        <translation>De onderwerpen van het document.
Deze sleutelwoorden worden ingebed in de PDF om zoeken en indexeren van PDF-bestanden mogelijk te maken</translation>
    </message>
    <message>
        <source>A person or organisation responsible for making the document available</source>
        <translation>De persoon of organisatie die dit document beschikbaar maakt</translation>
    </message>
    <message>
        <source>A person or organisation responsible for making contributions to the content of the document</source>
        <translation>Personen of organisaties die hebben bijgedragen aan dit document</translation>
    </message>
    <message>
        <source>A date associated with an event in the life cycle of the document, in YYYY-MM-DD format, as per ISO 8601</source>
        <translation>Datum die bij het document hoort, bijv. de aanmaakdatum, in JJJJ-MM-DD formaat, zoals in ISO 8601</translation>
    </message>
    <message>
        <source>The nature or genre of the content of the document, eg. categories, functions, genres, etc</source>
        <translation>Genre, categorie of type van dit document</translation>
    </message>
    <message>
        <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting.
RFC2045,RFC2046 for MIME types are also useful here</source>
        <translation>De fysieke of digitale gestalte van het document, zoals mediatype en afmetingen.
RFC2045, RFC2046 voor MIME-bestandstypen zijn ook bruikbaar hier</translation>
    </message>
    <message>
        <source>An unambiguous reference to the document within a given context such as ISBN or URI</source>
        <translation>Een exacte referentie naar dit document, zoals een ISBN-nummer of een URI</translation>
    </message>
    <message>
        <source>A reference to a document from which the present document is derived, eg. ISBN or URI</source>
        <translation>Een verwijzing naar een document waar dit document van is afgelijk, bijv. ISBN of een URI</translation>
    </message>
    <message>
        <source>The language in which the content of the document is written, usually a ISO-639 language code
optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
        <translation>De taal waarin het document is geschreven, normaal gesproken een ISO-639 taalcode,
optioneel gevolgd door een koppelteken en een ISO-3166 landcode, bijv. en-GB, nl-BE</translation>
    </message>
    <message>
        <source>A reference to a related document, possibly using a formal identifier such as a ISBN or URI</source>
        <translation>Een verwijzing naar een gerelateerd document, mogelijk via een ISBN-nummer of URI</translation>
    </message>
    <message>
        <source>The extent or scope of the content of the document, possibly including location, time and jurisdiction ranges</source>
        <translation>Het bereik dat door het document wordt omvat, bijvoorbeeld in plaats, tijd of jurisdictie</translation>
    </message>
    <message>
        <source>Information about rights held in and over the document, eg. copyright, patent or trademark</source>
        <translation>Informatie over rechten die voor dit document gelden, zoals copyright, patenten of handelsmerken</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
</context>
<context>
    <name>Druck</name>
    <message>
        <source>Setup Printer</source>
        <translation>Printer instellen</translation>
    </message>
    <message>
        <source>Print Destination</source>
        <translation>Afdrukken naar</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Bestand</translation>
    </message>
    <message>
        <source>&amp;Options...</source>
        <translation>&amp;Opties...</translation>
    </message>
    <message>
        <source>&amp;File:</source>
        <translation>&amp;Bestand:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Wijzigen...</translation>
    </message>
    <message>
        <source>A&amp;lternative Printer Command</source>
        <translation>A&amp;lternatief printcommando</translation>
    </message>
    <message>
        <source>Use an alternative print manager, such as kprinter or gtklp,
to utilize additional printing options</source>
        <translation>Gebruik een alternatief printcommando, zoals kprinter of gtklp,
om extra printopties te kunnen gebruiken</translation>
    </message>
    <message>
        <source>Co&amp;mmand:</source>
        <translation>Co&amp;mmando:</translation>
    </message>
    <message>
        <source>Range</source>
        <translation>Bereik</translation>
    </message>
    <message>
        <source>Print &amp;All</source>
        <translation>&amp;Alle pagina&apos;s</translation>
    </message>
    <message>
        <source>Print Current Pa&amp;ge</source>
        <translation>Huidige pa&amp;gina</translation>
    </message>
    <message>
        <source>Print &amp;Range</source>
        <translation>Be&amp;reik</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Voer hier de paginanummer(s) in die u wilt afdrukken,
bijvoorbeeld 1,3,5 of 1-5 (pag. 1 t/m 5 afdrukken).
Een * staat voor alle pagina&apos;s.</translation>
    </message>
    <message>
        <source>N&amp;umber of Copies:</source>
        <translation>Aantal &amp;kopieën:</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opties</translation>
    </message>
    <message>
        <source>Print &amp;Normal</source>
        <translation>&amp;Normaal afdrukken</translation>
    </message>
    <message>
        <source>Print &amp;Separations</source>
        <translation>Ge&amp;scheiden afdrukken</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Alles</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation>Cyaan</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation>Magenta</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation>Geel</translation>
    </message>
    <message>
        <source>Black</source>
        <translation>Zwart</translation>
    </message>
    <message>
        <source>Pr&amp;int In Color If Available</source>
        <translation>&amp;In kleur afdrukken indien beschikbaar</translation>
    </message>
    <message>
        <source>Print In Gra&amp;yscale</source>
        <translation>In &amp;grijstinten afdrukken</translation>
    </message>
    <message>
        <source>Ad&amp;vanced Options...</source>
        <translation>Gea&amp;vanceerd...</translation>
    </message>
    <message>
        <source>&amp;Print</source>
        <translation>Afdru&amp;kken</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Opslaan als</translation>
    </message>
    <message>
        <source>Postscript-Files (*.ps);;All Files (*)</source>
        <translation>Postscriptbestanden (*.ps);;Alle bestanden (*)</translation>
    </message>
</context>
<context>
    <name>EPSPlug</name>
    <message>
        <source>Importing File:
%1
failed!</source>
        <translation>Het importeren van het bestand:
%1
is mislukt!</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation>Fatale fout</translation>
    </message>
</context>
<context>
    <name>EditStyle</name>
    <message>
        <source>Edit Style</source>
        <translation>Stijl bewerken</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Naam:</translation>
    </message>
    <message>
        <source>Character</source>
        <translation>Teken</translation>
    </message>
    <message>
        <source>&amp;Font:</source>
        <translation>&amp;Lettertype:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Si&amp;ze:</source>
        <translation>&amp;Grootte:</translation>
    </message>
    <message>
        <source>Effect:</source>
        <translation>Effect:</translation>
    </message>
    <message>
        <source>&amp;Alignment:</source>
        <translation>&amp;Uitlijning:</translation>
    </message>
    <message>
        <source>&amp;Drop Caps</source>
        <translation>&amp;Drop caps</translation>
    </message>
    <message>
        <source>&amp;Lines:</source>
        <translation>Rege&amp;ls:</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation>&amp;Vulkleur:</translation>
    </message>
    <message>
        <source>St&amp;roke Color:</source>
        <translation>&amp;Lijnkleur:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>Vertical Spaces</source>
        <translation>Verticale tussenruimtes</translation>
    </message>
    <message>
        <source>Adjust to Baseline &amp;Grid</source>
        <translation>Aanpassen aan basislijn &amp;raster</translation>
    </message>
    <message>
        <source>Line &amp;Spacing:</source>
        <translation>Regel&amp;spatiëring:</translation>
    </message>
    <message>
        <source>Abo&amp;ve:</source>
        <translation>Bo&amp;ven:</translation>
    </message>
    <message>
        <source>&amp;Below:</source>
        <translation>On&amp;der:</translation>
    </message>
    <message>
        <source>Tabulators and Indentation</source>
        <translation>Tabs en inspringing</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>Name of your paragraph style</source>
        <translation>Naam van uw paragraafstijl</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation>Lettertype van object of geselecteerde tekst</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Tekengrootte</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Kleur van de tekstvulling</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Kleur van de tekstlijnen</translation>
    </message>
    <message>
        <source>Provides an oversized first letter for a paragraph. Used for stylistic effect</source>
        <translation>Maakt de eerste letter van een paragraaf groter aan de bovenkant uitgelijnd met het vervolg van een regel</translation>
    </message>
    <message>
        <source>Determines the overall height, in line numbers, of the Drop Caps</source>
        <translation>Geeft de hoogte van de kapitaal aan in het aantal regels dat deze beslaat</translation>
    </message>
    <message>
        <source>Align text to baseline grid</source>
        <translation>Tekst aan de basislijn van het raster uitlijnen</translation>
    </message>
    <message>
        <source>Spacing above the paragraph</source>
        <translation>Witruimte boven de paragraaf</translation>
    </message>
    <message>
        <source>Spacing below the paragraph</source>
        <translation>Witruimte onder de paragraaf</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation>Tussenruimte tussen de regels</translation>
    </message>
    <message>
        <source> mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation>in</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>Name of the Style is not unique</source>
        <translation>De stijlnaam is niet uniek</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
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
        <translation>&amp;Nieuw</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Openen...</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Opslaan &amp;als...</translation>
    </message>
    <message>
        <source>&amp;Save and Exit</source>
        <translation>Op&amp;slaan en sluiten</translation>
    </message>
    <message>
        <source>&amp;Exit without Saving</source>
        <translation>Sluit&amp;en zonder opslaan</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Ongedaan maken</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>O&amp;pnieuw doen</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Kni&amp;ppen</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiëren</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>P&amp;lakken</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>W&amp;issen</translation>
    </message>
    <message>
        <source>&amp;Get Field Names</source>
        <translation>Veldnamen opvra&amp;gen</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Bestand</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>Be&amp;werken</translation>
    </message>
    <message>
        <source>Javascripts (*.js);;All Files (*)</source>
        <translation>Javascripts (*.js);;Alle bestanden (*)</translation>
    </message>
</context>
<context>
    <name>ExportForm</name>
    <message>
        <source>Choose a Export Directory</source>
        <translation>Kies een map om naar te exporteren</translation>
    </message>
    <message>
        <source>Export as Image(s)</source>
        <translation>Exporteren als afbeelding(en)</translation>
    </message>
    <message>
        <source>&amp;Export to Directory:</source>
        <translation>&amp;Exporteren naar map:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Wijzigen...</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opties</translation>
    </message>
    <message>
        <source>Image &amp;Type:</source>
        <translation>Afbeeldings&amp;type:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation>&amp;Kwaliteit:</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation>&amp;Resolutie:</translation>
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
        <translation>Bereik</translation>
    </message>
    <message>
        <source>&amp;Current page</source>
        <translation>Huidige pa&amp;gina</translation>
    </message>
    <message>
        <source>&amp;All pages</source>
        <translation>Alle &amp;pagina&apos;s</translation>
    </message>
    <message>
        <source>&amp;Range</source>
        <translation>&amp;Bereik</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>C</source>
        <translation>C</translation>
    </message>
    <message>
        <source>Export a range of pages</source>
        <translation>Een bepaald bereik exporteren</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Voer hier de paginanummer(s) in die u wilt exporteren,
bijvoorbeeld 1,3,5 of 1-5 (pag. 1 t/m 5 exporteren).
Een * staat voor alle pagina&apos;s.</translation>
    </message>
    <message>
        <source>Export all pages</source>
        <translation>Alle pagina&apos;s exporteren</translation>
    </message>
    <message>
        <source>Export only the current page</source>
        <translation>Alleen de huidige pagina exporteren</translation>
    </message>
    <message>
        <source>Resolution of the Images
Use 72 dpi for Images intended for the Screen</source>
        <translation>Oplossend vermogen (resolutie). Gebruik 72dpi voor
afbeeldingen bedoeld voor schermweergave</translation>
    </message>
    <message>
        <source>The quality of your images - 100% is the best, 1% the lowest quality</source>
        <translation>De gewenste kwaliteit: 100% geeft de hoogste kwaliteit, 1% de laagste</translation>
    </message>
    <message>
        <source>Available export formats</source>
        <translation>Beschikbare exportformaten</translation>
    </message>
    <message>
        <source>The output directory - the place to store your images.
Name of the export file will be &apos;documentname-pagenumber.filetype&apos;</source>
        <translation>De plaats waar de afbeeldingen moeten worden opgeslagen.
De naam van het bestand zal zijn &apos;documentnaam-pagina.type&apos;</translation>
    </message>
    <message>
        <source>Change the output directory</source>
        <translation>De uitvoermap wijzigen</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Grootte:</translation>
    </message>
    <message>
        <source>Size of the images. 100% for no changes, 200% for two times larger etc.</source>
        <translation>Grootte van de afbeeldingen. 100% voor geen verandering, 200% voor twee maal groter, etc.</translation>
    </message>
</context>
<context>
    <name>FDialogPreview</name>
    <message>
        <source>Size:</source>
        <translation>Grootte:</translation>
    </message>
    <message>
        <source>Title:</source>
        <translation>Titel:</translation>
    </message>
    <message>
        <source>No Title</source>
        <translation>Geen titel</translation>
    </message>
    <message>
        <source>Author:</source>
        <translation>Auteur:</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Onbekend</translation>
    </message>
    <message>
        <source>Scribus Document</source>
        <translation>Scribus document</translation>
    </message>
</context>
<context>
    <name>Farbmanager</name>
    <message>
        <source>Colors</source>
        <translation>Kleuren</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>Toe&amp;voegen</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nieuw</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>Be&amp;werken</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;upliceren</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>&amp;Remove Unused</source>
        <translation>Ongebruikte ve&amp;rwijderen</translation>
    </message>
    <message>
        <source>Color Sets</source>
        <translation>Kleurensets</translation>
    </message>
    <message>
        <source>Current Color Set:</source>
        <translation>Huidige kleurenset:</translation>
    </message>
    <message>
        <source>&amp;Save Color Set</source>
        <translation>Kleurenset op&amp;slaan</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>Choose a color set to load</source>
        <translation>Kies de te laden kleurenset</translation>
    </message>
    <message>
        <source>Save the current color set</source>
        <translation>De huidige kleurenset opslaan</translation>
    </message>
    <message>
        <source>Remove unused colors from current document&apos;s color set</source>
        <translation>Verwijdert de ongebruikte kleuren uit de kleurenset van dit document</translation>
    </message>
    <message>
        <source>Append colors to the current set from an existing document</source>
        <translation>Voeg kleuren toe van een ander document aan het huidige</translation>
    </message>
    <message>
        <source>Create a new color within the current set</source>
        <translation>Een nieuwe kleur aanmaken in de huidige set</translation>
    </message>
    <message>
        <source>Edit the currently selected color</source>
        <translation>De huidige kleur bewerken</translation>
    </message>
    <message>
        <source>Make a copy of the currently selected color</source>
        <translation>Een kopie van de momenteel geselecteerde kleur maken</translation>
    </message>
    <message>
        <source>Delete the currently selected color</source>
        <translation>De huidige kleur verwijderen</translation>
    </message>
    <message>
        <source>Make the current colorset the default color set</source>
        <translation>Stelt de huidige kleurenset in als standaard</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Naam:</translation>
    </message>
    <message>
        <source>Choose a Name</source>
        <translation>Kies een naam</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documenten (*.sla *.sla.gz *.scd *.scd.gz);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documenten (*.sla *.scd);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Kopie van %1</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation>Nieuwe kleur</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
</context>
<context>
    <name>FontPrefs</name>
    <message>
        <source>Global Font Settings</source>
        <translation>Algemene lettertype-instellingen</translation>
    </message>
    <message>
        <source>Available Fonts</source>
        <translation>Beschikbare lettertypen</translation>
    </message>
    <message>
        <source>Font Substitutions</source>
        <translation>Lettertype-vervangingen</translation>
    </message>
    <message>
        <source>Additional Paths</source>
        <translation>Additionele lokaties</translation>
    </message>
    <message>
        <source>Postscript</source>
        <translation>Postscript</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Ja</translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation>Lettertype Naam</translation>
    </message>
    <message>
        <source>Use Font</source>
        <translation>Lettertype gebruiken</translation>
    </message>
    <message>
        <source>Embed in:</source>
        <translation>Invoegen in:</translation>
    </message>
    <message>
        <source>Subset</source>
        <translation>Subset</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Type</translation>
    </message>
    <message>
        <source>Path to Font File</source>
        <translation>Pad naar lettertypebestand</translation>
    </message>
    <message>
        <source>&amp;Available Fonts</source>
        <translation>Beschikbare &amp;lettertypen</translation>
    </message>
    <message>
        <source>Replacement</source>
        <translation>Vervanging</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>Font &amp;Substitutions</source>
        <translation>Lettertype-&amp;vervangingen</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Wijzigen...</translation>
    </message>
    <message>
        <source>A&amp;dd...</source>
        <translation>&amp;Toevoegen...</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>Ve&amp;rwijderen</translation>
    </message>
    <message>
        <source>Additional &amp;Paths</source>
        <translation>Additionele l&amp;okaties</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Kies een map</translation>
    </message>
</context>
<context>
    <name>FontPreview</name>
    <message>
        <source>Fonts Preview</source>
        <translation>Lettertypevoorbeeld</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Atl+O</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation>Filmquiz bracht knappe ex-yogi van de wijs</translation>
    </message>
    <message>
        <source>Append selected font into Style, Font menu</source>
        <translation>Het geselecteerde lettertype toevoegen aan het menu Stijl, Lettertype</translation>
    </message>
    <message>
        <source>Leave preview</source>
        <translation>Voorbeeld sluiten</translation>
    </message>
</context>
<context>
    <name>GradientEditor</name>
    <message>
        <source>Position:</source>
        <translation>Positie:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Here you can add, change or remove Color-Stops.</source>
        <translation>Hier kunt u kleur-stops toevoegen, bewerken of verwijderen.</translation>
    </message>
</context>
<context>
    <name>GuideManager</name>
    <message>
        <source>Manage Guides</source>
        <translation>Hulplijnen beheren</translation>
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
        <translation>in</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>Horizontal Guides</source>
        <translation>Horizontale hulplijnen</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y-pos:</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Toevoegen</translation>
    </message>
    <message>
        <source>D&amp;elete</source>
        <translation>V&amp;erwijderen</translation>
    </message>
    <message>
        <source>Vertical Guides</source>
        <translation>Verticale hulplijnen</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>&amp;X-pos:</translation>
    </message>
    <message>
        <source>A&amp;dd</source>
        <translation>Toe&amp;voegen</translation>
    </message>
    <message>
        <source>De&amp;lete</source>
        <translation>Ve&amp;rwijderen</translation>
    </message>
    <message>
        <source>&amp;Lock Guides</source>
        <translation>Hulplijnen vast&amp;zetten</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
</context>
<context>
    <name>HelpBrowser</name>
    <message>
        <source>Sorry, no manual available! Please see: http://docs.scribus.net for updated docs
and www.scribus.net for downloads.</source>
        <translation>Helaas, geen handleiding beschikbaar! Kijk op http://docs.scribus.net/ voor bijgewerkte
documentatie en op http://www.scribus.net/ voor downloads.</translation>
    </message>
    <message>
        <source>Contents</source>
        <translation>Inhoud</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Koppeling</translation>
    </message>
    <message>
        <source>Scribus Online Help</source>
        <translation>Scribus online hulp</translation>
    </message>
</context>
<context>
    <name>HyAsk</name>
    <message>
        <source>Possible Hyphenation</source>
        <translation>Mogelijke afbreking</translation>
    </message>
    <message>
        <source>Accept</source>
        <translation>Accepteren</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>Overslaan</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
</context>
<context>
    <name>HySettings</name>
    <message>
        <source>Hyphenator Settings</source>
        <translation>Afbreekinstellingen</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Taal:</translation>
    </message>
    <message>
        <source>&amp;Smallest Word:</source>
        <translation>&amp;Kleinste woord:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>Length of the smallest word to be hyphenated.</source>
        <translation>Woorden korter dan deze lengte worden niet afgebroken.</translation>
    </message>
    <message>
        <source>Maximum number of Hyphenations following each other.
A value of 0 means unlimited hyphenations.</source>
        <translation>Maximaal aantal afbrekingen dat elkaar mag opvolgen.
De waarde 0 betekent onbeperkt.</translation>
    </message>
    <message>
        <source>&amp;Hyphenation Suggestions</source>
        <translation>A&amp;fbreeksuggesties</translation>
    </message>
    <message>
        <source>Hyphenate Text Automatically &amp;During Typing</source>
        <translation>Automatisch afbreken tij&amp;dens typen</translation>
    </message>
    <message>
        <source>Consecutive Hypenations &amp;Allowed:</source>
        <translation type="obsolete">Opeenvolgende afbrekingen &amp;toestaan:</translation>
    </message>
    <message>
        <source>A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</source>
        <translation>Met de optie Extra, Tekst afbreken krijgt u een dialoogvenster te zien met alle afbreekmogelijkheden voor elk woord.</translation>
    </message>
    <message>
        <source>Enables automatic hyphenation of your text while typing.</source>
        <translation>Voorziet tekst tijdens het typen direct van afbreektekens.</translation>
    </message>
    <message>
        <source>Consecutive Hyphenations &amp;Allowed:</source>
        <translation>Opeenvolgende &amp;afbrekingen toegestaan:</translation>
    </message>
</context>
<context>
    <name>InsPage</name>
    <message>
        <source>Insert Page</source>
        <translation>Pagina invoegen</translation>
    </message>
    <message>
        <source>&amp;Inserting</source>
        <translation>&amp;Invoegen</translation>
    </message>
    <message>
        <source>Page(s)</source>
        <translation>pagina&apos;s</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation>voor pagina</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation>na pagina</translation>
    </message>
    <message>
        <source>at End</source>
        <translation>aan het eind</translation>
    </message>
    <message>
        <source>Inserting</source>
        <translation>Invoegen</translation>
    </message>
    <message>
        <source>&amp;Template (Left Page):</source>
        <translation>&amp;Sjabloon (linker pagina):</translation>
    </message>
    <message>
        <source>&amp;Template:</source>
        <translation>&amp;Sjabloon:</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normaal</translation>
    </message>
    <message>
        <source>Template (Right Page):</source>
        <translation>Sjabloon (rechter pagina):</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
</context>
<context>
    <name>InsertTable</name>
    <message>
        <source>Insert Table</source>
        <translation>Tabel invoegen</translation>
    </message>
    <message>
        <source>Number of Rows:</source>
        <translation>Aantal rijen:</translation>
    </message>
    <message>
        <source>Number of Columns:</source>
        <translation>Aantal kolommen:</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
</context>
<context>
    <name>JavaDocs</name>
    <message>
        <source>Edit JavaScripts</source>
        <translation>JavaScripts bewerken</translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation>B&amp;ewerken...</translation>
    </message>
    <message>
        <source>&amp;Add...</source>
        <translation>&amp;Toevoegen...</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Sluiten&amp;Sluiten</translation>
    </message>
    <message>
        <source>&amp;New Script:</source>
        <translation>&amp;Nieuw script:</translation>
    </message>
    <message>
        <source>New Script</source>
        <translation>Nieuw script</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Nee</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Ja</translation>
    </message>
    <message>
        <source>Do you really want to delete this Script?</source>
        <translation>Wilt u dit script werkelijk verwijderen?</translation>
    </message>
</context>
<context>
    <name>KeyManager</name>
    <message>
        <source>Manage Keyboard Shortcuts</source>
        <translation>Sneltoetsen instellen</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Actie</translation>
    </message>
    <message>
        <source>Current Key</source>
        <translation>Huidige toets</translation>
    </message>
    <message>
        <source>Select a Key for this Action</source>
        <translation>Selecteer een toets voor deze actie</translation>
    </message>
    <message>
        <source>&amp;No Key</source>
        <translation>&amp;Geen toets</translation>
    </message>
    <message>
        <source>&amp;User Defined Key</source>
        <translation>Gebr&amp;uikersgedefiniëerd</translation>
    </message>
    <message>
        <source>ALT+SHIFT+T</source>
        <translation>Alt+Shift+T</translation>
    </message>
    <message>
        <source>Set &amp;Key</source>
        <translation>&amp;Toets instellen</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
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
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>This Key Sequence is already in use</source>
        <translation>Deze toets is al in gebruik</translation>
    </message>
</context>
<context>
    <name>LayerPalette</name>
    <message>
        <source>Layers</source>
        <translation>Lagen</translation>
    </message>
    <message>
        <source>Add a new Layer</source>
        <translation>Nieuwe laag toevoegen</translation>
    </message>
    <message>
        <source>Delete Layer</source>
        <translation>Laag verwijderen</translation>
    </message>
    <message>
        <source>Raise Layer</source>
        <translation>Laag verhogen</translation>
    </message>
    <message>
        <source>Lower Layer</source>
        <translation>Laag verlagen</translation>
    </message>
    <message>
        <source>New Layer</source>
        <translation>Nieuwe laag</translation>
    </message>
    <message>
        <source>Do you want to delete all Objects on this Layer too?</source>
        <translation>Wilt u alle objecten op deze laag ook verwijderen?</translation>
    </message>
</context>
<context>
    <name>LineFormate</name>
    <message>
        <source>Edit Line Styles</source>
        <translation>Lijnstijlen bewerken</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>&amp;Toevoegen</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nieuw</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>B&amp;ewerken</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;upliceren</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>Op&amp;slaan</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Kopie van %1</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation>Nieuwe stijl</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>Do you really want do delete this Style?</source>
        <translation type="obsolete">Wil je echt deze stijl verwijderen?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Nee</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Ja</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documenten (*.sla *.sla.gz *.scd *.scd.gz);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documenten (*.sla *.scd);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation>Wilt u deze stijl werkelijk verwijderen?</translation>
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
        <translation>in</translation>
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
        <translation>in</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
</context>
<context>
    <name>Mdup</name>
    <message>
        <source>Multiple Duplicate</source>
        <translation>Meervoudig dupliceren</translation>
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
        <translation>in</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>&amp;Number of Copies:</source>
        <translation>Aa&amp;ntal kopieën:</translation>
    </message>
    <message>
        <source>&amp;Horizontal Shift:</source>
        <translation>&amp;Horizontale verplaatsing:</translation>
    </message>
    <message>
        <source>&amp;Vertical Shift:</source>
        <translation>&amp;Verticale verplaatsing:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
</context>
<context>
    <name>Measurements</name>
    <message>
        <source>Distances</source>
        <translation>Afstanden</translation>
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
        <translation>dX:</translation>
    </message>
    <message>
        <source>DY:</source>
        <translation>dY:</translation>
    </message>
    <message>
        <source>Angle:</source>
        <translation>Hoek:</translation>
    </message>
    <message>
        <source>Length:</source>
        <translation>Lengte:</translation>
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
        <translation>in</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
</context>
<context>
    <name>MenuTest</name>
    <message>
        <source>Script error</source>
        <translation>Scriptfout</translation>
    </message>
    <message>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation>Als dit een officieel script is, geef deze fout dan a.u.b. door op &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation>Dit bericht staat ook op het klembord. Met Ctrl+V kunt u het in de bugtracker plakken.</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation>&amp;Console weergeven</translation>
    </message>
    <message>
        <source>Hide &amp;Console</source>
        <translation>&amp;Console verbergen</translation>
    </message>
</context>
<context>
    <name>MergeDoc</name>
    <message>
        <source>Import Template</source>
        <translation>Sjabloon importeren</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation>Pagina(&apos;s) importeren</translation>
    </message>
    <message>
        <source>From Document:</source>
        <translation>Van document:</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation>Wijzigen...</translation>
    </message>
    <message>
        <source>Import Page(s):</source>
        <translation>Pagina(&apos;s) importeren:</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Voer hier de paginanummer(s) in die u wilt importeren,
bijvoorbeeld 1,3,5 of 1-5 (pag. 1 t/m 5 importeren).
Een * staat voor alle pagina&apos;s.</translation>
    </message>
    <message>
        <source> from 0</source>
        <translation>van 0</translation>
    </message>
    <message>
        <source>Create Page(s)</source>
        <translation>Pagina(&apos;s) aanmaken</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation>voor pagina</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation>na pagina</translation>
    </message>
    <message>
        <source>at End</source>
        <translation>aan het eind</translation>
    </message>
    <message>
        <source>Import</source>
        <translation>Importeren</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documenten (*.sla *.sla.gz *.scd *.scd.gz);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documenten (*.sla *.scd);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source> from %1</source>
        <translation>van %1</translation>
    </message>
</context>
<context>
    <name>MovePages</name>
    <message>
        <source>Move Pages</source>
        <translation>Pagina&apos;s verplaatsen</translation>
    </message>
    <message>
        <source>Copy Page</source>
        <translation>Pagina kopiëren</translation>
    </message>
    <message>
        <source>Move Page(s):</source>
        <translation>Pagina(&apos;s) verplaatsen:</translation>
    </message>
    <message>
        <source>to:</source>
        <translation>naar:</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation>voor pagina</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation>na pagina</translation>
    </message>
    <message>
        <source>at End</source>
        <translation>aan het eind</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
</context>
<context>
    <name>Mpalette</name>
    <message>
        <source>Properties</source>
        <translation>Eigenschappen</translation>
    </message>
    <message>
        <source>X, Y, &amp;Z</source>
        <translation>X, Y, &amp;Z</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>&amp;Vorm</translation>
    </message>
    <message>
        <source>&amp;Text</source>
        <translation>&amp;Tekst</translation>
    </message>
    <message>
        <source>&amp;Image</source>
        <translation>Afbeeld&amp;ing</translation>
    </message>
    <message>
        <source>&amp;Line</source>
        <translation>&amp;Lijn</translation>
    </message>
    <message>
        <source>&amp;Colors</source>
        <translation>&amp;Kleuren</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <source>Geometry</source>
        <translation>Geometrie</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>&amp;X-pos:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y-pos:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Breedte:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Hoogte:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Rotatie:</translation>
    </message>
    <message>
        <source>Basepoint:</source>
        <translation>Basispunt:</translation>
    </message>
    <message>
        <source>Level</source>
        <translation>Niveau</translation>
    </message>
    <message>
        <source>Shape:</source>
        <translation>Vorm:</translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation>Vorm b&amp;ewerken...</translation>
    </message>
    <message>
        <source>R&amp;ound
Corners:</source>
        <translation>R&amp;onde
hoeken:</translation>
    </message>
    <message>
        <source>Distance of Text</source>
        <translation>Afstand tot tekst</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>Kolo&amp;mmen:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>Tussen&amp;ruimte:</translation>
    </message>
    <message>
        <source>To&amp;p:</source>
        <translation>&amp;Boven:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>On&amp;der:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Links:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>&amp;Rechts:</translation>
    </message>
    <message>
        <source>T&amp;abulators...</source>
        <translation>T&amp;abulators...</translation>
    </message>
    <message>
        <source>Path Text Properties</source>
        <translation>Tekstpad-eigenschappen</translation>
    </message>
    <message>
        <source>Show Curve</source>
        <translation>Curve weergeven</translation>
    </message>
    <message>
        <source>Start Offset:</source>
        <translation>Beginafstand:</translation>
    </message>
    <message>
        <source>Distance from Curve:</source>
        <translation>Afstand van curve:</translation>
    </message>
    <message>
        <source>Text &amp;Flows Around Frame</source>
        <translation>Tekst &amp;loopt om frame</translation>
    </message>
    <message>
        <source>Use &amp;Bounding Box</source>
        <translation>&amp;Bounding Box gebruiken</translation>
    </message>
    <message>
        <source>&amp;Use Contour Line</source>
        <translation>Contourlijn gebr&amp;uiken</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation>&amp;Tekengrootte:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation>Tint:</translation>
    </message>
    <message>
        <source>Custom Spacing</source>
        <translation>Aangepaste spatiëring</translation>
    </message>
    <message>
        <source>&amp;Kerning:</source>
        <translation>&amp;Kerning:</translation>
    </message>
    <message>
        <source>L&amp;ine Spacing:</source>
        <translation>&amp;Regelspatiëring:</translation>
    </message>
    <message>
        <source>St&amp;yle:</source>
        <translation>Sti&amp;jl:</translation>
    </message>
    <message>
        <source>Lan&amp;guage:</source>
        <translation>&amp;Taal:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation>&amp;Vrije schaal</translation>
    </message>
    <message>
        <source>X-Sc&amp;ale:</source>
        <translation>&amp;X-schaal:</translation>
    </message>
    <message>
        <source>Y-Scal&amp;e:</source>
        <translation>&amp;Y-schaal:</translation>
    </message>
    <message>
        <source>Scale &amp;To Frame Size</source>
        <translation>Schalen naar &amp;framegrootte</translation>
    </message>
    <message>
        <source>P&amp;roportional</source>
        <translation>&amp;Proportioneel</translation>
    </message>
    <message>
        <source>Input Profile:</source>
        <translation>Invoerprofiel:</translation>
    </message>
    <message>
        <source>Rendering Intent:</source>
        <translation>Rendering intent:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Perceptueel</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Relatief colorimetrisch</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Verzadiging</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Absoluut colorimetrisch</translation>
    </message>
    <message>
        <source>Left Point</source>
        <translation>Linker punt</translation>
    </message>
    <message>
        <source>End Points</source>
        <translation>Eindpunt</translation>
    </message>
    <message>
        <source>&amp;Basepoint:</source>
        <translation>&amp;Basispunt:</translation>
    </message>
    <message>
        <source>T&amp;ype of Line:</source>
        <translation>Lijnt&amp;ype:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation>Linedi&amp;kte:</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation>Verstek</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Schuin</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation>Rond</translation>
    </message>
    <message>
        <source>Ed&amp;ges:</source>
        <translation>&amp;Hoeken:</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>Plat</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation>Vierkant</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation>Rond</translation>
    </message>
    <message>
        <source>&amp;Endings:</source>
        <translation>&amp;Einden:</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation>Geen stijl</translation>
    </message>
    <message>
        <source>Cell Lines</source>
        <translation>Cellijnen</translation>
    </message>
    <message>
        <source>Line at Top</source>
        <translation>Bovenlijn</translation>
    </message>
    <message>
        <source>Line at the Left</source>
        <translation>Linkerlijn</translation>
    </message>
    <message>
        <source>Line at the Right </source>
        <translation>Rechterlijn</translation>
    </message>
    <message>
        <source>Line at Bottom</source>
        <translation>Onderlijn</translation>
    </message>
    <message>
        <source>Name of selected object</source>
        <translation>Naam van geselecteerd object</translation>
    </message>
    <message>
        <source>Horizontal position of current basepoint</source>
        <translation>Horizontale positie van het huidige basispunt</translation>
    </message>
    <message>
        <source>Vertical position of current basepoint</source>
        <translation>Verticale positie van het huidige basispunt</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>Breedte</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>Hoogte</translation>
    </message>
    <message>
        <source>Rotation of object at current basepoint</source>
        <translation>Rotatie van object op huidig basispunt</translation>
    </message>
    <message>
        <source>Point from which measurements or rotation angles are referenced</source>
        <translation>Punt waarvandaan de rotatiehoeken worden berekend</translation>
    </message>
    <message>
        <source>Select top left for basepoint</source>
        <translation>Linksboven als basispunt gebruiken</translation>
    </message>
    <message>
        <source>Select top right for basepoint</source>
        <translation>Rechtsboven als basispunt gebruiken</translation>
    </message>
    <message>
        <source>Select bottom left for basepoint</source>
        <translation>Linksonder als basispunt gebruiken</translation>
    </message>
    <message>
        <source>Select bottom right for basepoint</source>
        <translation>Rechtsonder als basispunt gebruiken</translation>
    </message>
    <message>
        <source>Select center for basepoint</source>
        <translation>Midden als basispunt gebruiken</translation>
    </message>
    <message>
        <source>Flip Horizontal</source>
        <translation>Horizontaal spiegelen</translation>
    </message>
    <message>
        <source>Flip Vertical</source>
        <translation>Verticaal spiegelen</translation>
    </message>
    <message>
        <source>Move one level up</source>
        <translation>Een niveau hoger</translation>
    </message>
    <message>
        <source>Move one level down</source>
        <translation>Een niveau lager</translation>
    </message>
    <message>
        <source>Move to front</source>
        <translation>Naar voorgrond</translation>
    </message>
    <message>
        <source>Move to back</source>
        <translation>Naar achtergrond</translation>
    </message>
    <message>
        <source>Indicates the level the object is on, 0 means the object is at the bottom</source>
        <translation>Geeft weer op welk niveau dit opject is, 0 betekent onderaan</translation>
    </message>
    <message>
        <source>Lock or unlock the object</source>
        <translation>Object vergrendelen of losmaken</translation>
    </message>
    <message>
        <source>Lock or unlock the size of the object</source>
        <translation>Grootte van het object vergrendelen of losmaken</translation>
    </message>
    <message>
        <source>Enable or disable printing of the object</source>
        <translation>Dit object wel of niet afdrukken</translation>
    </message>
    <message>
        <source>Make text in lower frames flow around the object shape</source>
        <translation>Laat tekst in lager gelegen frames om de vorm van dit object heen vloeien</translation>
    </message>
    <message>
        <source>Use a surrounding box instead of the frame&apos;s shape for text flow</source>
        <translation>Gebruik een omliggende rechthoek in plaats van de vorm van het frame voor de tekstomloop</translation>
    </message>
    <message>
        <source>Use a second line originally based on the frame&apos;s shape for text flow</source>
        <translation>Gebruik een tweede lijn gebaseerd op de vorm van het frame voor de tekstomloop</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation>Lettertype van geselecteerde tekst of object</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Tekengrootte</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation>Schaalbreedte van tekens</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Kleur van tekstlijnen</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Kleur van tekstinvulling</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation>Verzadiging van kleur van tekstlijnen</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation>Verzadiging van kleur van tekstinvulling</translation>
    </message>
    <message>
        <source>Reverse Writing</source>
        <translation type="obsolete">Omgekeerd schrift</translation>
    </message>
    <message>
        <source>Manual Kerning</source>
        <translation>Handmatige kerning</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation>Regelspatiëring</translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation>Stijl van huidige paragraaf</translation>
    </message>
    <message>
        <source>Hyphenation language of frame</source>
        <translation>Taalinstelling (voor afbreken) van frame</translation>
    </message>
    <message>
        <source>Change settings for left or end points</source>
        <translation>Instellingen voor linkerpunt of eindpunt aanpassen</translation>
    </message>
    <message>
        <source>Pattern of line</source>
        <translation>Lijnpatroon</translation>
    </message>
    <message>
        <source>Thickness of line</source>
        <translation>Lijndikte</translation>
    </message>
    <message>
        <source>Type of line joins</source>
        <translation>Type lijnverbindingen</translation>
    </message>
    <message>
        <source>Type of line end</source>
        <translation>Type lijneinden</translation>
    </message>
    <message>
        <source>Line style of current object</source>
        <translation>Lijnstijl van huidig object</translation>
    </message>
    <message>
        <source>Choose the shape of frame...</source>
        <translation>Vorm van het frame kiezen...</translation>
    </message>
    <message>
        <source>Edit shape of the frame...</source>
        <translation>Vorm van het frame bewerken...</translation>
    </message>
    <message>
        <source>Set radius of corner rounding</source>
        <translation>Straal van ronde hoeken instellen</translation>
    </message>
    <message>
        <source>Number of columns in text frame</source>
        <translation>Aantal kolommen in tekstframe</translation>
    </message>
    <message>
        <source>Switches between Gap or Column width</source>
        <translation>Schakelt tussen Tussenruimte of Kolombreedte</translation>
    </message>
    <message>
        <source>Distance between columns</source>
        <translation>Afstand tussen kolommen</translation>
    </message>
    <message>
        <source>Distance of text from top of frame</source>
        <translation>Afstand van tekst tot bovenkant frame</translation>
    </message>
    <message>
        <source>Distance of text from bottom of frame</source>
        <translation>Afstand van tekst tot onderkant frame</translation>
    </message>
    <message>
        <source>Distance of text from left of frame</source>
        <translation>Afstand van tekst tot linkerkant frame</translation>
    </message>
    <message>
        <source>Distance of text from right of frame</source>
        <translation>Afstand van tekst tot rechterkant frame</translation>
    </message>
    <message>
        <source>Edit tab settings of text frame...</source>
        <translation>Tabinstellingen van tekstframe bewerken...</translation>
    </message>
    <message>
        <source>Allow the image to be a different size to the frame</source>
        <translation>Toestaan dat een afbeelding een andere grootte heeft dan het frame</translation>
    </message>
    <message>
        <source>Horizontal offset of image within frame</source>
        <translation>Horizontale afstand van afbeelding in frame</translation>
    </message>
    <message>
        <source>Vertical offset of image within frame</source>
        <translation>Verticale afstand van afbeelding in frame</translation>
    </message>
    <message>
        <source>Resize the image horizontally</source>
        <translation>De afbeelding horizontaal schalen</translation>
    </message>
    <message>
        <source>Resize the image vertically</source>
        <translation>De afbeelding verticaal schalen</translation>
    </message>
    <message>
        <source>Keep the X and Y scaling the same</source>
        <translation>X- en Y-schaling gelijk houden</translation>
    </message>
    <message>
        <source>Keep the aspect ratio</source>
        <translation>Beeldverhouding behouden</translation>
    </message>
    <message>
        <source>Make the image fit within the size of the frame</source>
        <translation>Afbeelding passend maken</translation>
    </message>
    <message>
        <source>Use image proportions rather than those of the frame</source>
        <translation>De afbeeldingsverhoudingen gebruiken in plaats van die van het frame</translation>
    </message>
    <message>
        <source>Source profile of the image</source>
        <translation>Bronprofiel van de afbeelding</translation>
    </message>
    <message>
        <source>Rendering intent for the image</source>
        <translation>Rendering intent van de afbeelding</translation>
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
        <translation>in</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>Column width</source>
        <translation>Kolombreedte</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation>De naam &quot;%1&quot; is niet uniek.
Kies een andere naam.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Right to Left Writing</source>
        <translation>Rechts naar links scrijven</translation>
    </message>
</context>
<context>
    <name>MultiLine</name>
    <message>
        <source>Edit Style</source>
        <translation>Stijl bewerken</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>Plat eind</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation>Vierkant eind</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation>Rond eind</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation>Verstekverbinding</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Schuine verbinding</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation>Ronde verbinding</translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation>Lijndikte:</translation>
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
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source> pt </source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation>Ononderbroken lijn</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation>Gestreepte lijn</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation>Stippellijn</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation>Streep-stip lijn</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation>Streep-stip-stip lijn</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation>De naam &quot;%1&quot; is niet uniek.
Kies een andere naam.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
</context>
<context>
    <name>MusterSeiten</name>
    <message>
        <source>Edit Templates</source>
        <translation>Sjablonen bewerken</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>Toe&amp;voegen</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nieuw</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;upliceren</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Sluiten</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>Do you really want do delete this Template?</source>
        <translation type="obsolete">Wil je echt deze Template verwijderen?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Nee</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Ja</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Naam:</translation>
    </message>
    <message>
        <source>New Template</source>
        <translation>Nieuwe sjabloon</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Kopie van %1</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Naam:</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation>Kopie #%1 van</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normaal</translation>
    </message>
    <message>
        <source>Do you really want to delete this Template?</source>
        <translation>Wilt u deze sjabloon werkelijk verwijderen?</translation>
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
        <translation>in</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>New Document</source>
        <translation>Nieuw document</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Paginagrootte</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Grootte:</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation>Letter (US)</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation>Tabloid</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Aangepast</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Orië&amp;ntatie:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Staand</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Liggend</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Breedte:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Hoogte:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation>&amp;Tegenover elkaar</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation>Linker&amp;pagina eerst</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Marge hulplijnen</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Links:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>&amp;Rechts:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>&amp;Boven:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>On&amp;der:</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>OptiesOpties</translation>
    </message>
    <message>
        <source>F&amp;irst Page Number:</source>
        <translation>N&amp;ummer eerste pagina:</translation>
    </message>
    <message>
        <source>&amp;Default Unit:</source>
        <translation>Stan&amp;daard eenheid:</translation>
    </message>
    <message>
        <source>Points (pts)</source>
        <translation>Punten (pt)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation>Millimeter (mm)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation>Inch (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation>Pica (p)</translation>
    </message>
    <message>
        <source>&amp;Automatic Text Frames</source>
        <translation>&amp;Automatische tekstframes</translation>
    </message>
    <message>
        <source>Column Guides</source>
        <translation>Kolom hulplijnen</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>&amp;Ruimte:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>Kolo&amp;mmen:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>Document page size, either a standard size or a custom size</source>
        <translation>Paginagrootte, standaard of aangepast</translation>
    </message>
    <message>
        <source>Orientation of the document&apos;s pages</source>
        <translation>Oriëntatie van de pagina&apos;s van dit document</translation>
    </message>
    <message>
        <source>Width of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Breedte van de pagina&apos;s in dit document, kies &apos;Aangepast&apos; om hier een waarde in te kunnen stellen</translation>
    </message>
    <message>
        <source>Height of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Hoogte van de pagina&apos;s in dit document, kies &apos;Aangepast&apos; om hier een waarde in te kunnen stellen</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation>Alle pagina&apos;s hetzelfde of onderscheid tussen linker en rechterpagina&apos;s</translation>
    </message>
    <message>
        <source>Make the first page the left page of the document</source>
        <translation>Laat het document beginnen met een linker pagina</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Afstand tussen de bovenkant van de marge en de rand van het papier</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Afstand tussen de onderkant van de marge en de rand van het papier</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Afstand tussen de linkerkant van de marge en de rand van het papier.
Als &apos;Tegenover elkaar&apos; is geselecteerd wordt deze breedte gebruikt aan de rugkant van het document</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Afstand tussen de rechterkant van de marge en de rand van het papier.
Als &apos;Tegenover elkaar&apos; is geselecteerd wordt deze breedte gebruikt aan de buitenkant van het document</translation>
    </message>
    <message>
        <source>First page number of the document</source>
        <translation>Eerste paginanummer van dit document</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation>Standaard meeteenheid voor het bewerken van dit document</translation>
    </message>
    <message>
        <source>Create text frames automatically when new pages are added</source>
        <translation>Automatisch tekstframes aanmaken zodra nieuwe pagina&apos;s worden toegevoegd</translation>
    </message>
    <message>
        <source>Number of columns to create in automatically created text frames</source>
        <translation>Aantal kolommen dat in automatisch aangemaakte tekstframes moet worden opgenomen</translation>
    </message>
    <message>
        <source>Distance between automatically created columns</source>
        <translation>Afstand tussen de automatisch aangemaakte kolommen</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation>B&amp;innenkant:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation>B&amp;uitenkant:</translation>
    </message>
    <message>
        <source>Executive</source>
        <translation>Executive</translation>
    </message>
    <message>
        <source>Folio</source>
        <translation>Folio</translation>
    </message>
    <message>
        <source>Ledger</source>
        <translation>Ledger</translation>
    </message>
</context>
<context>
    <name>NewTm</name>
    <message>
        <source>Left Page</source>
        <translation>Linker pagina</translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation>Rechter pagina</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
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
        <translation>&amp;Absolute coördinaten</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>&amp;X-pos:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y-pos:</translation>
    </message>
    <message>
        <source>Edit &amp;Contour Line</source>
        <translation>&amp;Contourlijn bewerken</translation>
    </message>
    <message>
        <source>&amp;Reset Contour Line</source>
        <translation>Contou&amp;rlijn opnieuw instellen</translation>
    </message>
    <message>
        <source>&amp;End Editing</source>
        <translation>B&amp;ewerking beëindigen</translation>
    </message>
    <message>
        <source>Move Nodes</source>
        <translation>Nodes verplaatsen</translation>
    </message>
    <message>
        <source>Move Control Points</source>
        <translation>Controlepunten verplaatsen</translation>
    </message>
    <message>
        <source>Add Nodes</source>
        <translation>Nodes toevoegen</translation>
    </message>
    <message>
        <source>Delete Nodes</source>
        <translation>Nodes verwijderen</translation>
    </message>
    <message>
        <source>Move Control Points Independently</source>
        <translation>Controlepunten onafhankelijk verplaatsen</translation>
    </message>
    <message>
        <source>Move Control Points Symmetrical</source>
        <translation>Controlepunten symmetrisch verplaatsen</translation>
    </message>
    <message>
        <source>Reset Control Points</source>
        <translation>Controlepunten opnieuw instellen</translation>
    </message>
    <message>
        <source>Reset this Control Point</source>
        <translation>Dit controlepunt opnieuw instellen</translation>
    </message>
    <message>
        <source>Open a Polygon or Cuts a Bezier Curve</source>
        <translation>Veelhoek starten of beziercurve knippen</translation>
    </message>
    <message>
        <source>Close this Bezier Curve</source>
        <translation>Deze beziercurve sluiten</translation>
    </message>
    <message>
        <source>Mirror the Path Horizontally</source>
        <translation>Pad horizontaal spiegelen</translation>
    </message>
    <message>
        <source>Mirror the Path Vertically</source>
        <translation>Pad verticaal spiegelen</translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Right</source>
        <translation>Pad horizontaal naar rechts scheeftrekken</translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Left</source>
        <translation>Pad horizontaal naar links scheeftrekken</translation>
    </message>
    <message>
        <source>Shear the Path Vertically Up</source>
        <translation>Pad verticaal omhoog scheeftrekken</translation>
    </message>
    <message>
        <source>Shear the Path Vertically Down</source>
        <translation>Pad verticaal naar beneden scheeftrekken</translation>
    </message>
    <message>
        <source>Rotate the Path Counter-Clockwise</source>
        <translation>Pad tegen de klok in roteren</translation>
    </message>
    <message>
        <source>Rotate the Path Clockwise</source>
        <translation>Pad met de klok mee roteren</translation>
    </message>
    <message>
        <source>Reduce the Size of the Path by shown %</source>
        <translation>Pad met getoonde % vergroten</translation>
    </message>
    <message>
        <source>Enlarge the Size of the Path by shown %</source>
        <translation>Pad met getoonde % verkleinen</translation>
    </message>
    <message>
        <source>Angle of Rotation</source>
        <translation>Rotatiehoek</translation>
    </message>
    <message>
        <source>% to Enlarge or Reduce By</source>
        <translation>Te vergroten of verkleinen %</translation>
    </message>
    <message>
        <source>Activate Contour Line Editing Mode</source>
        <translation>Contourlijnen bewerken</translation>
    </message>
    <message>
        <source>Reset the Contour Line to the Original Shape of the Frame</source>
        <translation>Contourlijnen terugzetten naar oorspronkelijke framevorm</translation>
    </message>
    <message>
        <source>When checked use Coordinates relative to the Page,
otherwise Coordinates are relative to the Object.</source>
        <translation>Indien geselecteerd worden coördinaten relatief t.o.v. de pagina
gebruikt, anders zijn de coördinaten relatief t.o.v. het object.</translation>
    </message>
</context>
<context>
    <name>PConsole</name>
    <message>
        <source>Script Console</source>
        <translation>Scriptconsole</translation>
    </message>
</context>
<context>
    <name>PDF_Opts</name>
    <message>
        <source>Create PDF File</source>
        <translation>PDF-bestand aanmaken</translation>
    </message>
    <message>
        <source>O&amp;utput to File:</source>
        <translation>&amp;Uitvoeren naar bestand:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation>Wijzige&amp;n...</translation>
    </message>
    <message>
        <source>Export Range</source>
        <translation>Exportbereik</translation>
    </message>
    <message>
        <source>&amp;All Pages</source>
        <translation>&amp;Alle pagina&apos;s</translation>
    </message>
    <message>
        <source>C&amp;hoose Pages</source>
        <translation>&amp;Pagina&apos;s kiezen</translation>
    </message>
    <message>
        <source>File Options</source>
        <translation>Bestandsopties</translation>
    </message>
    <message>
        <source>Compatibilit&amp;y:</source>
        <translation>&amp;Compatibiliteit:</translation>
    </message>
    <message>
        <source>&amp;Binding:</source>
        <translation>In&amp;binden:</translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation>Linkermarge</translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation>Rechtermarge</translation>
    </message>
    <message>
        <source>Generate &amp;Thumbnails</source>
        <translation>Minia&amp;turen aanmaken</translation>
    </message>
    <message>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation>Gekoppe&amp;lde tekstframes als PDF-artikelen opslaan</translation>
    </message>
    <message>
        <source>&amp;Include Bookmarks</source>
        <translation>Bladwijzers &amp;invoegen</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation>dpi</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation>&amp;Resolutie:</translation>
    </message>
    <message>
        <source>Com&amp;press Text and Vector Graphics</source>
        <translation type="obsolete">Tekst en vectorafbeeldingen compri&amp;meren</translation>
    </message>
    <message>
        <source>Image Settings</source>
        <translation>Afbeeldingsinstellingen</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automatisch</translation>
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
        <translation>Geen</translation>
    </message>
    <message>
        <source>&amp;Method:</source>
        <translation>&amp;Methode:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation>&amp;Kwaliteit:</translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation>Maximaal</translation>
    </message>
    <message>
        <source>High</source>
        <translation>Hoog</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation>Medium</translation>
    </message>
    <message>
        <source>Low</source>
        <translation>Laag</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation>Minimaal</translation>
    </message>
    <message>
        <source>&amp;Downsample Images to:</source>
        <translation>A&amp;fbeeldingen terugsampelen naar:</translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation>Al&amp;gemeen</translation>
    </message>
    <message>
        <source>&amp;Embed all Fonts</source>
        <translation>Alle l&amp;ettertypen inbedden</translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation>Inbedden</translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation>Beschikbare lettertypen:</translation>
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
        <translation>In te bedden lettertypen:</translation>
    </message>
    <message>
        <source>&amp;Fonts</source>
        <translation>&amp;Lettertypen</translation>
    </message>
    <message>
        <source>Enable &amp;Presentation Effects</source>
        <translation type="obsolete">&amp;Presentatie-effecten</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Pagina</translation>
    </message>
    <message>
        <source>Show Page Pre&amp;views</source>
        <translation>Pagina&amp;voorbeelden tonen</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation>Effecten</translation>
    </message>
    <message>
        <source>&amp;Display Duration:</source>
        <translation>Weergave tij&amp;dsduur:</translation>
    </message>
    <message>
        <source>Effec&amp;t Duration:</source>
        <translation>Effec&amp;t tijdsduur:</translation>
    </message>
    <message>
        <source>Effect T&amp;ype:</source>
        <translation>Effectt&amp;ype:</translation>
    </message>
    <message>
        <source>&amp;Moving Lines:</source>
        <translation>&amp;Bewegende lijnen:</translation>
    </message>
    <message>
        <source>F&amp;rom the:</source>
        <translation>&amp;Van de:</translation>
    </message>
    <message>
        <source>D&amp;irection:</source>
        <translation>R&amp;ichting:</translation>
    </message>
    <message>
        <source> sec</source>
        <translation>sec</translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation>Geen effect</translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation>Lamellen</translation>
    </message>
    <message>
        <source>Box</source>
        <translation>Box</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation>Oplossen</translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation>Glitter</translation>
    </message>
    <message>
        <source>Split</source>
        <translation>Splitsen</translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation>Wegvegen</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation>Horizontaal</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation>Verticaal</translation>
    </message>
    <message>
        <source>Inside</source>
        <translation>Binnen</translation>
    </message>
    <message>
        <source>Outside</source>
        <translation>Buiten</translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation>Links naar rechts</translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation>Boven naar beneden</translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation>Beneden naar boven</translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation>Rechts naar links</translation>
    </message>
    <message>
        <source>Top-left to Bottom-Right</source>
        <translation>Linksboven naar rechtsonder</translation>
    </message>
    <message>
        <source>&amp;Apply Effect on all Pages</source>
        <translation>Effect op &amp;alle pagina&apos;s toepassen</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation type="obsolete">E&amp;xtra&apos;s</translation>
    </message>
    <message>
        <source>&amp;Use Encryption</source>
        <translation>Versle&amp;uteling gebruiken</translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation>Wachtwoorden</translation>
    </message>
    <message>
        <source>&amp;User:</source>
        <translation>Gebr&amp;uiker:</translation>
    </message>
    <message>
        <source>&amp;Owner:</source>
        <translation>&amp;Eigenaar:</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation>Instellingen</translation>
    </message>
    <message>
        <source>Allow &amp;Printing the Document</source>
        <translation>A&amp;fdrukken van het document toestaan</translation>
    </message>
    <message>
        <source>Allow &amp;Changing the Document</source>
        <translation>Wi&amp;jzigen van het document toestaan</translation>
    </message>
    <message>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation>&amp;Kopiëren van tekst en afbeeldingen toestaan</translation>
    </message>
    <message>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation>Toevoegen van &amp;annotaties en velden toestaan</translation>
    </message>
    <message>
        <source>S&amp;ecurity</source>
        <translation>V&amp;eiligheid</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Algemeen</translation>
    </message>
    <message>
        <source>Output &amp;Intended For:</source>
        <translation>&amp;Uitvoer bestemd voor:</translation>
    </message>
    <message>
        <source>Screen / Web</source>
        <translation>Scherm / web</translation>
    </message>
    <message>
        <source>Printer</source>
        <translation>Printer</translation>
    </message>
    <message>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation>Aangepaste &amp;weergaveinstellingen gebruiken</translation>
    </message>
    <message>
        <source>Rendering Settings</source>
        <translation>Weergaveinstellingen</translation>
    </message>
    <message>
        <source>Fre&amp;quency:</source>
        <translation>Fre&amp;quentie:</translation>
    </message>
    <message>
        <source>&amp;Angle:</source>
        <translation>&amp;Hoek:</translation>
    </message>
    <message>
        <source>S&amp;pot Function:</source>
        <translation>&amp;Punt-functie:</translation>
    </message>
    <message>
        <source>Simple Dot</source>
        <translation>Enkele stip</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Lijn</translation>
    </message>
    <message>
        <source>Round</source>
        <translation>Rond</translation>
    </message>
    <message>
        <source>Ellipse</source>
        <translation>Ellips</translation>
    </message>
    <message>
        <source>Solid Colors:</source>
        <translation>Effen kleuren:</translation>
    </message>
    <message>
        <source>Use ICC Profile</source>
        <translation>ICC-profiel gebruiken</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation>Profiel:</translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation>Rendering intent:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Perceptueel</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Relatief colorimetrisch</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Verzadiging</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Absoluut colorimetrisch</translation>
    </message>
    <message>
        <source>Images:</source>
        <translation>Afbeeldingen:</translation>
    </message>
    <message>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation>Geen ingebedde ICC-profielen gebruiken</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation>&amp;Kleur</translation>
    </message>
    <message>
        <source>PDF/X-3 Output Intent</source>
        <translation>PDF/X-3 uitvoer intent</translation>
    </message>
    <message>
        <source>&amp;Info String:</source>
        <translation>&amp;Infotekst:</translation>
    </message>
    <message>
        <source>Output &amp;Profile:</source>
        <translation>Uitvoer&amp;profiel:</translation>
    </message>
    <message>
        <source>Trim Box</source>
        <translation>Rechthoek bijknippen</translation>
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
        <translation>in</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>Op&amp;slaan</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>Export all pages to PDF</source>
        <translation>Alle pagina&apos;s naar PDF exporteren</translation>
    </message>
    <message>
        <source>Export a range of pages to PDF</source>
        <translation>Een bereik exporteren naar PDF</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Voer hier de paginanummer(s) in die u wilt exporteren,
bijvoorbeeld 1,3,5 of 1-5 (pag. 1 t/m 5 exporteren).
Een * staat voor alle pagina&apos;s.</translation>
    </message>
    <message>
        <source>Determines the PDF compatibility. The default is Acrobat 4.0 which gives the widest compatibility.
Choose Acrobat 5.0 if your file has PDF 1.4 features such as transparency or you require 128 bit encryption.
PDF/X-3 is for exporting the PDF for commercial printing and is selectable when you have activated color management.</source>
        <translation>Bepaalt de PDF-compatibiliteit. Standaard is &quot;Acrobat 4.0&quot;, dat de breedste compatibiliteit biedt.
Gebruik Acrobat 5.0 als u functies uit PDF 1.4 gebruikt zoals transparantie of 128-bit versleuteling.
PDF/X-3 is voor professionele kleurendruk en kan worden gebruikt als u Kleurbeheer heeft ingeschakeld.</translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know
you need to change it leave the default choice - Left.</source>
        <translation>Bepaalt hoe de pagina&apos;s gebonden worden in de PDF. Laat hier de
standaardwaarde (links) staan, tenzij u weet wat u doet.</translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF.
Some viewers can use the thumbnails for navigation.</source>
        <translation>Maakt miniatuurweergaven aan van elke pagina in de PDF.
Sommige viewers kunnen deze gebruiken.</translation>
    </message>
    <message>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation>Maakt PDF-artikelen aan, zodat het gemakkelijker is door de tekst te navigeren.</translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document.
These are useful for navigating long PDF documents.</source>
        <translation>Bewaart de bladwijzers in het document, zodat lange
documenten eenvoudiger kunnen worden doorgebladerd.</translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics.
This does not affect the resolution of bitmap images like photos.</source>
        <translation>Bepaalt de exportresolutie voor tekst en vectorafbeeldingen.
Heeft geen invloed op de resolutie van bitmapafbeeldingen zoals foto&apos;s.</translation>
    </message>
    <message>
        <source>Compression of text and graphics.
Unless you have a reason, leave this checked. This reduces PDF size.</source>
        <translation>Comprimeert tekst en afbeeldingen, zodat de resulterende PDF kleiner wordt.
Laat deze instelling aan staan, tenzij u een speciale reden hebt.</translation>
    </message>
    <message>
        <source>Version of compression for images.
Automatic allows Scribus to choose the best method.
ZIP is good for images with solid colors.
JPEG is better at creating smaller PDF files which have many photos (with slight image loss possible).
Leave it set to automatic, unless you have a need for special compression options.</source>
        <translation>Compressiemethode voor afbeeldingen.
&apos;Automatisch&apos; laat Scribus de beste methode kiezen.
ZIP is goed voor afbeeldingen met effen kleuren.
JPEG is vooral effectief bij veel foto&apos;s (waarbij een gering verlies mogelijk is).
Laat bij voorkeur de instelling op &apos;automatisch&apos; staan, tenzij u een reden hebt om voor een bepaalde compressie te kiezen.</translation>
    </message>
    <message>
        <source>Compression levels: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%)</source>
        <translation>Compressieniveau: Minimaal (25%), laag (50%), medium (75%), hoog (85%), maximaal (95%)</translation>
    </message>
    <message>
        <source>Downsample your bitmap images to the selected DPI.
Leaving this unchecked will render them at their native resolution.</source>
        <translation>Bitmapafbeeldingen terugsampelen naar het geselecteerde aantal DPI. Als u deze
optie niet selecteert, worden afbeeldingen op hun eigen resolutie weergegeven.</translation>
    </message>
    <message>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation>DPI (dots per inch) voor afbeeldingen.</translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts
will preserve the layout and appearance of your document.</source>
        <translation>Lettertypen inbedden in de PDF.  Hierdoor weet u zeker
dat layout en uiterlijk bewaard zullen blijven.</translation>
    </message>
    <message>
        <source>Enables presentation effects when using Acrobat Reader in full screen mode.</source>
        <translation>Schakelt presentatie-effecten in wanneer Acrobat Reader in volledig scherm-modus wordt gebruikt.</translation>
    </message>
    <message>
        <source>Show page previews of each page listed above.</source>
        <translation>Laat van elke pagina een voorbeeld zien.</translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page.</source>
        <translation>Hoe lang de pagina wordt weergegeven voordat de presentatie start op de geselecteerde pagina.</translation>
    </message>
    <message>
        <source>Length of time the effect runs.
A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation>Hoe lang het effect erover mag doen.
Een kortere tijd maakt het effect sneller.</translation>
    </message>
    <message>
        <source>Type of the display effect.</source>
        <translation>Type van het overgangseffect.</translation>
    </message>
    <message>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation>Richting van het effect van bewegende lijnen en de lamel-effecten.</translation>
    </message>
    <message>
        <source>Starting position for the box and split effects.</source>
        <translation>Startpositie voor de rechthoek en split-effecten.</translation>
    </message>
    <message>
        <source>Direction of the glitter or wipe effects.</source>
        <translation>Richting voor de glitter of veeg-effecten.</translation>
    </message>
    <message>
        <source>Apply the selected effect to all pages.</source>
        <translation>Het geselecteerde effect op alle pagina&apos;s toepassen.</translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF.
If you selected Acrobat 4.0, the PDF will be protected by 40 bit encryption.
If you selected Acrobat 5.0, the PDF will be protected by 128 bit encryption.
Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation>Schakelt beveiligingsfuncties in uw PDF in.
Als u Acrobat 4.0 selecteerde, zal de PDF beschermd zijn met 40-bit versleuteling.
Als u Acrobat 5.0 selecteerde, zal de PDF beschermd zijn met 128-bit versleuteling.
Let op: PDF-versleuteling is niet zo veilig als GPG of PGP-versleuteling en heeft enkele andere beperkingen.</translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the
security features in your exported PDF</source>
        <translation>Kies een master-wachtwoord om alle beveiligingsinstellingen
in of uit te schakelen in uw PDF</translation>
    </message>
    <message>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation>Kies een wachtwoord voor gebruikers om de PDF te kunnen lezen.</translation>
    </message>
    <message>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation>Het afdrukken van de PDF toestaan. Indien niet geselecteerd is afdrukken onmogelijk.</translation>
    </message>
    <message>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation>Wijzigen van de PDF toestaan. Indien niet geselecteerd is wijzigen onmogelijk.</translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. 
If un-checked, text and graphics cannot be copied.</source>
        <translation>Het kopiëren van tekst of afbeeldingen uit de PDF toestaan.
Indien niet geselecteerd is dit onmogelijk.</translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. 
If un-checked, editing annotations and fileds is prevented.</source>
        <translation>Het toevoegen van annotaties en velden aan de PDF toestaan.
Indien niet geselecteerd, is dit onmogelijk.</translation>
    </message>
    <message>
        <source>Color model for the output of your PDF.
Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets.
Choose Printer when printing to a true 4 color CMYK printer.</source>
        <translation>Kleurmodel voor de uitvoer van uw PDF.
Kies Scherm/web voor PDF&apos;s die vanaf het scherm zullen worden gelezen of op gemiddelde inkjets afgedrukt.
Kies Printer als u naar een echte vierkleuren (CMYK) printer afdrukt.</translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled
when specifically requested by your printer and they have given you the exact details needed.
Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation>Dit is een geavanceerde instelling die standaard uit staat. Dit mag alleen worden ingeschakeld
als dit voor uw printer werkelijk noodzakelijk is, en als u over de juiste details beschkt.
Anders kan uw PDF niet correct op papier verschijnen, en is ook niet bruikbaar op andere systemen.</translation>
    </message>
    <message>
        <source>Embed a color profile for solid colors</source>
        <translation>Een kleurprofiel inbedden voor effen kleuren</translation>
    </message>
    <message>
        <source>Color profile for solid colors</source>
        <translation>Kleurprofiel voor effen kleuren</translation>
    </message>
    <message>
        <source>Rendering intent for solid colors</source>
        <translation>Rendering intent voor effen kleuren</translation>
    </message>
    <message>
        <source>Embed a color profile for images</source>
        <translation>Een kleurprofiel inbedden voor afbeeldingen</translation>
    </message>
    <message>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation>Kleurprofielen in bronafbeeldingen niet gebruiken</translation>
    </message>
    <message>
        <source>Color profile for images</source>
        <translation>Kleurprofiel voor afbeeldingen</translation>
    </message>
    <message>
        <source>Rendering intent for images</source>
        <translation>Rendering intent voor afbeeldingen</translation>
    </message>
    <message>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation>Uitvoerprofiel voor het afdrukken. Indien mogelijk, probeer uw printer te gebruiken bij het selecteren van een profiel.</translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail
PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation>Een verplichte tekst voor PDF/X-3, anders is de PDF niet conformerend aan
deze standaard. We bevelen aan de titel van het document te gebruiken.</translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation>Afloop-afstand vanaf de bovenkant van de fysieke pagina</translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation>Afloop-afstand vanaf de onderkant van de fysieke pagina</translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation>Afloop-afstand vanaf de linkerkant van de fysieke pagina</translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation>Afloop-afstand vanaf de rechterkant van de fysieke pagina</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Opslaan als</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>PDF-bestanden (*.pdf);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Rotatie:</translation>
    </message>
    <message>
        <source>Compress Text and &amp;Vector Graphics</source>
        <translation>Tekst en &amp;vectorafbeeldingen comprimeren</translation>
    </message>
    <message>
        <source>&amp;Subset all Fonts</source>
        <translation>&amp;Subset van alle lettertypen</translation>
    </message>
    <message>
        <source>Fonts to subset:</source>
        <translation>Lettertypen om subset van te nemen:</translation>
    </message>
    <message>
        <source>En&amp;able Presentation Effects</source>
        <translation>Presentatie-effecten insch&amp;akelen</translation>
    </message>
    <message>
        <source>&amp;Presentation</source>
        <translation>&amp;Presentatie</translation>
    </message>
    <message>
        <source>Mirror Page(s) horizontally</source>
        <translation>Pagina(&apos;s) horizontaal spiegelen</translation>
    </message>
    <message>
        <source>Mirror Page(s) vertically</source>
        <translation>Pagina(&apos;s) verticaal spiegelen</translation>
    </message>
</context>
<context>
    <name>PPreview</name>
    <message>
        <source>Print Preview</source>
        <translation>Afdrukvoorbeeld</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Text</source>
        <translation>Anti-alias &amp;tekst</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Graphics</source>
        <translation>Anti-alias &amp;grafisch</translation>
    </message>
    <message>
        <source>Display Trans&amp;parency</source>
        <translation>Trans&amp;parantie weergeven</translation>
    </message>
    <message>
        <source>&amp;Under Color Removal</source>
        <translation>Onderliggende kle&amp;uren verwijderen</translation>
    </message>
    <message>
        <source>&amp;Display CMYK</source>
        <translation>CMYK &amp;weergeven</translation>
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
        <translation>Tekst ziet er beter uit met deze optie, maar de weergave wordt iets
trager. Dit heeft alleen effect op Type 1 lettertypen</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of True Type Fonts, Open Type Fonts, EPS, PDF and
vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation type="obsolete">Tekst in TrueType of OpenType lettertypen, EPS-, PDF- en vectorafbeeldingen zien er
beter uit met deze optie, maar de weergave wordt iets trager</translation>
    </message>
    <message>
        <source>Shows transparency and transparent items in your document. Requires Ghostscript 7.07 or later</source>
        <translation>Toont doorschijnende elementen in uw document. Ghostscript 7.07 of hoger is hiervoor vereist</translation>
    </message>
    <message>
        <source>Gives a print preview using simulations of generic CMYK inks, instead of RGB colors</source>
        <translation>Geeft een afdrukvoorbeeld weer met simulaties van CMYK-inkten, inplaats van RGB-kleuren</translation>
    </message>
    <message>
        <source>Enable/disable the C (Cyan) ink plate</source>
        <translation>Schakelt de C (Cyaan) inktplaat in of uit</translation>
    </message>
    <message>
        <source>Enable/disable the M (Magenta) ink plate</source>
        <translation>Schakelt de M (Magenta) inktplaat in of uit</translation>
    </message>
    <message>
        <source>Enable/disable the Y (Yellow) ink plate</source>
        <translation>Schakelt de Y (Yellow = geel) inktplaat in of uit</translation>
    </message>
    <message>
        <source>Enable/disable the K (Black) ink plate</source>
        <translation>Schakelt de K (Black = zwart) inktplaat in of uit</translation>
    </message>
    <message>
        <source>A way of switching some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="obsolete">Een methode om grijstinten die zijn samengesteld uit cyaan, geel en magenta
te vervangen door tinten enkel op zwart gebaseerd.
UCR (Under Color Removal) heeft vooral invloed op donkere en neutrale tinten
die dicht bij grijs liggen. Sommige afbeeldingen worden fraaier afgedrukt door
deze functie; experimenteren kan nodig zijn.
UCR verkleint de kans op oververzadiging met CMY inkten.</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Alles</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>Een methode om grijstinten die zijn samengesteld uit cyaan, geel en magenta
te vervangen door tinten enkel op zwart gebaseerd.
UCR (Under Color Removal) heeft vooral invloed op donkere en neutrale tinten
die dicht bij grijs liggen. Sommige afbeeldingen worden fraaier afgedrukt door
deze functie; experimenteren kan nodig zijn.
UCR verkleint de kans op oververzadiging met CMY inkten.</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of TrueType Fonts, OpenType Fonts, EPS, PDF and
vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation>Geeft een fraaiere weergave van True- en OpenType lettertypen, EPS, PDF en
vectorafbeeldingen in de voorbeeldweergave, ten koste van een wat tragere beeldopbouw</translation>
    </message>
</context>
<context>
    <name>Page</name>
    <message>
        <source>Copy Here</source>
        <translation>Hierheen kopiëren</translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation>Hierheen verplaatsen</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Plakken</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation>&amp;Marges tonen</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation>&amp;Frames tonen</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation>Afbeeld&amp;ingen tonen</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation>R&amp;aster tonen</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation>H&amp;ulplijnen tonen</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation>&amp;Basislijn-raster tonen</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation>Ma&amp;gnetisch raster</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation>Magnetische hul&amp;plijnen</translation>
    </message>
    <message>
        <source>Picture</source>
        <translation>Afbeelding</translation>
    </message>
    <message>
        <source>File: </source>
        <translation>Bestand:</translation>
    </message>
    <message>
        <source>Original PPI: </source>
        <translation>Oorspronkelijk PPI:</translation>
    </message>
    <message>
        <source>Actual PPI: </source>
        <translation>Werkelijk PPI:</translation>
    </message>
    <message>
        <source>Linked Text</source>
        <translation>Gekoppelde tekst</translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation>Tekstframe</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation>Tekst op een pad</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation>Alinea&apos;s:</translation>
    </message>
    <message>
        <source>Words: </source>
        <translation>Woorden:</translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation>Tekens:</translation>
    </message>
    <message>
        <source>Print: </source>
        <translation>Afdrukken:</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Aan</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Uit</translation>
    </message>
    <message>
        <source>In&amp;fo</source>
        <translation>In&amp;fo</translation>
    </message>
    <message>
        <source>&amp;Get Picture...</source>
        <translation>Afbeelding verkrij&amp;gen...</translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation>Af&amp;beelding zichtbaar</translation>
    </message>
    <message>
        <source>&amp;Update Picture</source>
        <translation>Afbeelding bij&amp;werken</translation>
    </message>
    <message>
        <source>&amp;Edit Picture</source>
        <translation>Afb&amp;eelding bewerken</translation>
    </message>
    <message>
        <source>&amp;Adjust Frame to Picture</source>
        <translation>Frame aan &amp;afbeelding aanpassen</translation>
    </message>
    <message>
        <source>&amp;Get Text...</source>
        <translation>Tekst verkrij&amp;gen...</translation>
    </message>
    <message>
        <source>&amp;Append Text...</source>
        <translation>Tekst &amp;toevoegen...</translation>
    </message>
    <message>
        <source>&amp;Edit Text...</source>
        <translation>T&amp;ekst bewerken...</translation>
    </message>
    <message>
        <source>Is PDF &amp;Bookmark</source>
        <translation>Dit is een PDF-&amp;bladwijzer</translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation>Dit is een PDF-a&amp;nnotatie</translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation>&amp;Eigenschappen van annotatie</translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation>&amp;Veldeigenschappen</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation>&amp;PDF-opties</translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation>Tekst bewerken...</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation>Vergrende&amp;len</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation>&amp;Losmaken</translation>
    </message>
    <message>
        <source>Lock Object &amp;Size</source>
        <translation>Object&amp;grootte vergrendelen</translation>
    </message>
    <message>
        <source>Unlock Object &amp;Size</source>
        <translation>Object&amp;grootte losmaken</translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation>In &amp;kladblok zetten</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation>In &amp;laag zetten</translation>
    </message>
    <message>
        <source>&amp;Insert Sample Text</source>
        <translation>Voorbeeldtekst &amp;invoegen</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation>&amp;Groeperen</translation>
    </message>
    <message>
        <source>Un&amp;group</source>
        <translation>&amp;Groep losmaken</translation>
    </message>
    <message>
        <source>Le&amp;vel</source>
        <translation>Ni&amp;veau</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation>Naar &amp;achtergrond</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation>Naar &amp;voorgrond</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation>&amp;Lager</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation>&amp;Hoger</translation>
    </message>
    <message>
        <source>&amp;Picture Frame</source>
        <translation>Afbeeldings&amp;frame</translation>
    </message>
    <message>
        <source>Pol&amp;ygon</source>
        <translation>Pol&amp;ygoon</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <translation>&amp;Outline</translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation>&amp;Tekstframe</translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation>&amp;Beziercurve</translation>
    </message>
    <message>
        <source>Conve&amp;rt to</source>
        <translation>Omzetten naa&amp;r</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Kni&amp;ppen</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiëren</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>C&amp;lear Contents</source>
        <translation>Inhoud &amp;leegmaken</translation>
    </message>
    <message>
        <source>Show P&amp;roperties...</source>
        <translation>&amp;Eigenschappen tonen...</translation>
    </message>
    <message>
        <source>Hide P&amp;roperties...</source>
        <translation>&amp;Eigenschappen verbergen...</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation>Wilt u werkelijk alle tekst wissen?</translation>
    </message>
    <message>
        <source>The Program</source>
        <translation>Het programma</translation>
    </message>
    <message>
        <source>is missing!</source>
        <translation>ontbreekt op uw systeem!</translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation>Kopie van</translation>
    </message>
</context>
<context>
    <name>PageItem</name>
    <message>
        <source>Image</source>
        <translation>Afbeelding</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Tekst</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Lijn</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Polygoon</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation>Polylijn</translation>
    </message>
    <message>
        <source>PathText</source>
        <translation>Tekstpad</translation>
    </message>
</context>
<context>
    <name>PageSelector</name>
    <message>
        <source>Page </source>
        <translation>Pagina</translation>
    </message>
    <message>
        <source> of %1</source>
        <translation>van %1</translation>
    </message>
</context>
<context>
    <name>PicSearch</name>
    <message>
        <source>Result</source>
        <translation>Resultaat</translation>
    </message>
    <message>
        <source>Search Results for: </source>
        <translation>Zoekresultaten voor: </translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Voorbeeld</translation>
    </message>
    <message>
        <source>Select</source>
        <translation>Selecteren</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
</context>
<context>
    <name>PicStatus</name>
    <message>
        <source>Pictures</source>
        <translation>Afbeeldingen</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <source>Path</source>
        <translation>Lokatie</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Pagina</translation>
    </message>
    <message>
        <source>Print</source>
        <translation>Afdrukken</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Status</translation>
    </message>
    <message>
        <source>Goto</source>
        <translation>Ga naar</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Ja</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Missing</source>
        <translation>Ontbrekend</translation>
    </message>
    <message>
        <source>Search</source>
        <translation>Zoeken</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
</context>
<context>
    <name>PolygonProps</name>
    <message>
        <source>Polygon Properties</source>
        <translation>Polygoon-eigenschappen</translation>
    </message>
    <message>
        <source>Corn&amp;ers:</source>
        <translation>Ho&amp;eken:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Rotatie:</translation>
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
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation>Aantal hoeken voor polygoon</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation>Rotatie in graden voor polygoon</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation>Voorbeeld</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation>&amp;Factor toepassen</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation>Convex/concaaf-factor toepassen op de vorm van polygonen</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation>Een negatieve waarde maakt de polygoon concaaf (stervormig),
een positieve waarde maakt haar convex</translation>
    </message>
</context>
<context>
    <name>Preferences</name>
    <message>
        <source>Preferences</source>
        <translation>Voorkeuren</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Algemeen</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Document</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation>Hulplijnen</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation>Typografie</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation>Gereedschappen</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation>Kladblok</translation>
    </message>
    <message>
        <source>Display</source>
        <translation>Tonen</translation>
    </message>
    <message>
        <source>External Tools</source>
        <translation>Externe hulpprogramma&apos;s</translation>
    </message>
    <message>
        <source>Misc.</source>
        <translation>Diversen</translation>
    </message>
    <message>
        <source>GUI</source>
        <translation>GUI</translation>
    </message>
    <message>
        <source>&amp;Theme:</source>
        <translation>S&amp;tijl:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation>&amp;Tekengrootte:</translation>
    </message>
    <message>
        <source>Units</source>
        <translation>Eenheden</translation>
    </message>
    <message>
        <source>Points (pt)</source>
        <translation>Punten (pt)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation>Millimeter (mm)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation>Inch (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation>Pica&apos;s (p)</translation>
    </message>
    <message>
        <source>Mouse Settings</source>
        <translation>Muisinstellingen</translation>
    </message>
    <message>
        <source>&amp;Wheel Jump:</source>
        <translation>Muis&amp;wiel:</translation>
    </message>
    <message>
        <source> px</source>
        <translation>px</translation>
    </message>
    <message>
        <source>&amp;Grab Radius:</source>
        <translation>&amp;Objecten vastpakken:</translation>
    </message>
    <message>
        <source>Menus</source>
        <translation>Menu&apos;s</translation>
    </message>
    <message>
        <source>&amp;Recent Documents:</source>
        <translation>&amp;Recente documenten:</translation>
    </message>
    <message>
        <source>Paths</source>
        <translation>Lokaties</translation>
    </message>
    <message>
        <source>&amp;Documents:</source>
        <translation>&amp;Documenten:</translation>
    </message>
    <message>
        <source>&amp;Change...</source>
        <translation>&amp;Wijzigen...</translation>
    </message>
    <message>
        <source>&amp;ICC Profiles:</source>
        <translation>&amp;ICC-profielen:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>Wijzige&amp;n...</translation>
    </message>
    <message>
        <source>&amp;Scripts:</source>
        <translation>&amp;Scripts:</translation>
    </message>
    <message>
        <source>Ch&amp;ange...</source>
        <translation>Wij&amp;zigen...</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Paginagrootte</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Aangepast</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Grootte:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Staand</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Liggend</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Orië&amp;ntatie:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Breedte:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Hoogte:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation>&amp;Tegenover elkaar</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation>Linker&amp;pagina eerst</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Marge hulplijnen</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>On&amp;der:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>&amp;Boven:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>&amp;Rechts:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Links:</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation>Automatisch opslaan</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation>&amp;Aan</translation>
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
        <translation>Rasterlayout</translation>
    </message>
    <message>
        <source>M&amp;inor Grid Spacing:</source>
        <translation>Kl&amp;eine rasterspatiëring:</translation>
    </message>
    <message>
        <source>Ma&amp;jor Grid Spacing:</source>
        <translation>&amp;Grote rasterspatiëring:</translation>
    </message>
    <message>
        <source>Guide &amp;Snap Distance:</source>
        <translation>Hulplijn&amp;magnetisme:</translation>
    </message>
    <message>
        <source>Grid Colors</source>
        <translation>Rasterkleuren</translation>
    </message>
    <message>
        <source>Min&amp;or Grid Color:</source>
        <translation>&amp;Klein raster:</translation>
    </message>
    <message>
        <source>Majo&amp;r Grid Color:</source>
        <translation>&amp;Groot raster:</translation>
    </message>
    <message>
        <source>&amp;User Guides Color:</source>
        <translation>H&amp;ulplijnen:</translation>
    </message>
    <message>
        <source>Base&amp;line Grid Color:</source>
        <translation>Basis&amp;lijn-raster:</translation>
    </message>
    <message>
        <source>Placing</source>
        <translation>Plaatsing</translation>
    </message>
    <message>
        <source>In the &amp;Background</source>
        <translation>&amp;Achtergrond</translation>
    </message>
    <message>
        <source>In the Fore&amp;ground</source>
        <translation>&amp;Voorgrond</translation>
    </message>
    <message>
        <source>Baseline Grid</source>
        <translation>Basislijn raster</translation>
    </message>
    <message>
        <source>O&amp;n</source>
        <translation>&amp;Aan</translation>
    </message>
    <message>
        <source>O&amp;ff</source>
        <translation>&amp;Uit</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation>Subscript</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>&amp;Displacement:</source>
        <translation>Ver&amp;plaatsing:</translation>
    </message>
    <message>
        <source>&amp;Scaling:</source>
        <translation>&amp;Schaal:</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation>Superscript</translation>
    </message>
    <message>
        <source>D&amp;isplacement:</source>
        <translation>Verplaat&amp;sing:</translation>
    </message>
    <message>
        <source>S&amp;caling:</source>
        <translation>S&amp;chaal:</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation>Kleinkapitalen</translation>
    </message>
    <message>
        <source>Sc&amp;aling:</source>
        <translation>Sch&amp;aal:</translation>
    </message>
    <message>
        <source>Other</source>
        <translation>Overig</translation>
    </message>
    <message>
        <source>Baseline &amp;Grid:</source>
        <translation>Basislijn &amp;raster:</translation>
    </message>
    <message>
        <source>Baseline &amp;Offset:</source>
        <translation>Basislijn &amp;afstand:</translation>
    </message>
    <message>
        <source>Automatic &amp;Line Spacing:</source>
        <translation>Automatische &amp;regelspatiëring:</translation>
    </message>
    <message>
        <source>Default &amp;Font:</source>
        <translation>Stan&amp;daardlettertype:</translation>
    </message>
    <message>
        <source>Default &amp;Size:</source>
        <translation>Standaard&amp;grootte:</translation>
    </message>
    <message>
        <source>&amp;Text Color:</source>
        <translation>&amp;Tekstkleur:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>Kolo&amp;mmen:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>Tussen&amp;ruimte:</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation>Filmquiz bracht knappe ex-yogi van de wijs</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>&amp;Line Color:</source>
        <translation>&amp;Lijnkleur:</translation>
    </message>
    <message>
        <source>&amp;Shading:</source>
        <translation>&amp;Tint:</translation>
    </message>
    <message>
        <source>&amp;Fill Color:</source>
        <translation>&amp;Vulkleur:</translation>
    </message>
    <message>
        <source>S&amp;hading:</source>
        <translation>T&amp;int:</translation>
    </message>
    <message>
        <source>&amp;Type of Line:</source>
        <translation>Lijnt&amp;ype:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation>Linedi&amp;kte:</translation>
    </message>
    <message>
        <source>Mi&amp;nimum:</source>
        <translation>Mi&amp;nimaal:</translation>
    </message>
    <message>
        <source>Ma&amp;ximum:</source>
        <translation>Ma&amp;ximaal:</translation>
    </message>
    <message>
        <source>&amp;Stepping:</source>
        <translation>In &amp;stappen:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation>&amp;Vrije schaal</translation>
    </message>
    <message>
        <source>&amp;Horizontal Scaling:</source>
        <translation>&amp;Horizontale schaal:</translation>
    </message>
    <message>
        <source>&amp;Vertical Scaling:</source>
        <translation>&amp;Verticale schaal:</translation>
    </message>
    <message>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation>Afbeelding &amp;schalen naar framegrootte</translation>
    </message>
    <message>
        <source>Keep Aspect &amp;Ratio</source>
        <translation>Beeldve&amp;rhouding behouden</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation>V&amp;ulkleur:</translation>
    </message>
    <message>
        <source>Corn&amp;ers:</source>
        <translation>Ho&amp;eken:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Rotatie:</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation>&amp;Factor:</translation>
    </message>
    <message>
        <source>Other Options</source>
        <translation>Overige opties</translation>
    </message>
    <message>
        <source>Sa&amp;ve Contents on Changes</source>
        <translation>Inhoud &amp;opslaan bij wijzigen</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Voorbeeld</translation>
    </message>
    <message>
        <source>Small</source>
        <translation>Klein</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation>Middel</translation>
    </message>
    <message>
        <source>Large</source>
        <translation>Groot</translation>
    </message>
    <message>
        <source>Display Pages &amp;Side by Side</source>
        <translation>Pagina&apos;s naa&amp;st elkaar tonen</translation>
    </message>
    <message>
        <source>Page Colors</source>
        <translation>Paginakleuren</translation>
    </message>
    <message>
        <source>&amp;Background:</source>
        <translation>&amp;Achtergrond:</translation>
    </message>
    <message>
        <source>&amp;Margins:</source>
        <translation>&amp;Marges:</translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation>&amp;Niet-afdrukbare gebieden in margekleur weergeven</translation>
    </message>
    <message>
        <source>Use PDF 1.4 &amp;Transparency Features</source>
        <translation>PDF-1.4 &amp;transparantie gebruiken</translation>
    </message>
    <message>
        <source>&amp;Adjust Display Size</source>
        <translation>Venstergrootte &amp;aanpassen</translation>
    </message>
    <message>
        <source>To adjust the display drag the ruler below with the Slider.</source>
        <translation>Om aan te passen sleep de schuifknop op het lineaal hieronder.</translation>
    </message>
    <message>
        <source>Postscript Interpreter</source>
        <translation>PostScript-interpreter</translation>
    </message>
    <message>
        <source>&amp;Name of Executable:</source>
        <translation>&amp;Naam van uitvoerbaar programma:</translation>
    </message>
    <message>
        <source>Antialias &amp;Text</source>
        <translation>Anti-alias &amp;tekst</translation>
    </message>
    <message>
        <source>Antialias &amp;Graphics</source>
        <translation>Anti-alias &amp;grafisch</translation>
    </message>
    <message>
        <source>Image Processing Tool</source>
        <translation>Programma voor beeldbewerking</translation>
    </message>
    <message>
        <source>Name of &amp;Executable:</source>
        <translation>Naam van uitvoerbaar &amp;programma:</translation>
    </message>
    <message>
        <source>Printing</source>
        <translation>Afdrukken</translation>
    </message>
    <message>
        <source>Clip to Page &amp;Margins</source>
        <translation>Bij pagina-&amp;marges afknippen</translation>
    </message>
    <message>
        <source>Apply &amp;Under Color Removal</source>
        <translation>Onde&amp;rliggende kleuren verwijderen</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>Choose the default window decoration and looks.
Scribus inherits any available KDE or Qt themes</source>
        <translation>Kies de standaard vensterdecoratie en stijl.
Scribus kan elke beschikbare KDE- of Qt-stijl overnemen</translation>
    </message>
    <message>
        <source>Default font size for the menus and windows</source>
        <translation>Standaardtekengrootte voor menu&apos;s en vensters</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation>Standaard meeteenheid voor het bewerken van dit document</translation>
    </message>
    <message>
        <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
        <translation>Bepaalt hoeveel regels Scribus doorschuift bij een stap van het muiswiel</translation>
    </message>
    <message>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation>Geeft de straal aan van het gebied waar Scribus het u toestaat een object vast te pakken</translation>
    </message>
    <message>
        <source>Number of recently edited documents to show in the File menu</source>
        <translation>Bepaalt hoeveel recent geopende documenten Scribus toont in het menu Bestand</translation>
    </message>
    <message>
        <source>Default documents directory</source>
        <translation>Standaardmap voor documenten</translation>
    </message>
    <message>
        <source>Default ICC profiles directory</source>
        <translation>Standaardmap voor ICC-profielen</translation>
    </message>
    <message>
        <source>Default Scripter scripts directory</source>
        <translation>Standaardmap voor Scripts</translation>
    </message>
    <message>
        <source>Default page size, either a standard size or a custom size</source>
        <translation>Standaard paginagrootte</translation>
    </message>
    <message>
        <source>Default orientation of document pages</source>
        <translation>Standaardoriëntatie van de pagina&apos;s van een document</translation>
    </message>
    <message>
        <source>Width of document pages, editable if you have chosen a custom page size</source>
        <translation>Breedte van de pagina&apos;s, kies &apos;Aangepast&apos; om hier een waarde in te kunnen stellen</translation>
    </message>
    <message>
        <source>Height of document pages, editable if you have chosen a custom page size</source>
        <translation>Hoogte van de pagina&apos;s, kies &apos;Aangepast&apos; om hier een waarde in te kunnen stellen</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation>Alle pagina&apos;s hetzelfde of onderscheid tussen linker en rechterpagina&apos;s</translation>
    </message>
    <message>
        <source>Make the first page the left page of a document</source>
        <translation>Laat het document beginnen met een linker pagina</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Afstand tussen de bovenkant van de marge en de rand van het papier</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Afstand tussen de onderkant van de marge en de rand van het papier</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Afstand tussen de linkerkant van de marge en de rand van het papier.
Als &apos;Tegenover elkaar&apos; is geselecteerd wordt deze breedte gebruikt aan de rugkant van het document</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Afstand tussen de rechterkant van de marge en de rand van het papier.
Als &apos;Tegenover elkaar&apos; is geselecteerd wordt deze breedte gebruikt aan de buitenkant van het document</translation>
    </message>
    <message>
        <source>When enabled, Scribus saves a backup copy of your file with the .bak extension
each time the time period elapses</source>
        <translation>Indien ingeschakeld, zal Scibus om elk ingesteld tijdsinterval een veiligheidskopie
van uw document opslaan met de .bak-extensie</translation>
    </message>
    <message>
        <source>Time period between saving automatically</source>
        <translation>Tijdsinterval voor automatisch opslaan</translation>
    </message>
    <message>
        <source>Distance between the minor grid lines</source>
        <translation>Afstand tussen de kleine rasterlijnen</translation>
    </message>
    <message>
        <source>Distance between the major grid lines</source>
        <translation>Afstand tussen de grote rasterlijnen</translation>
    </message>
    <message>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation>Afstand vanaf welke een object zal aantrekken tot de hulplijnen</translation>
    </message>
    <message>
        <source>Color of the minor grid lines</source>
        <translation>Kleur van de kleine rasterlijnen</translation>
    </message>
    <message>
        <source>Color of the major grid lines</source>
        <translation>Kleur van de grote rasterlijnen</translation>
    </message>
    <message>
        <source>Color of the guide lines you insert</source>
        <translation>Kleur van uw eigen hulplijnen</translation>
    </message>
    <message>
        <source>Place the grid behind your page objects</source>
        <translation>Het raster onder uw andere pagina-objecten plaatsen</translation>
    </message>
    <message>
        <source>Place the grid in front of your page objects</source>
        <translation>Het raster voor alle objecten plaatsen</translation>
    </message>
    <message>
        <source>Turns on the basegrid</source>
        <translation>Basisraster inschakelen</translation>
    </message>
    <message>
        <source>Turns off the basegrid</source>
        <translation>Basisraster uitschakelen</translation>
    </message>
    <message>
        <source>Displacement above the baseline of the font on a line</source>
        <translation>Verplaatsing boven de basislijn van een lettertype op een regel</translation>
    </message>
    <message>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation>Relatieve grootte van het superscript t.o.v. de normale tekengrootte</translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation>Verplaatsing onder de basislijn van een lettertype op een regel</translation>
    </message>
    <message>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation>Relatieve grootte van het subscript t.o.v. de normale tekengrootte</translation>
    </message>
    <message>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation>Relatieve grootte van de kleinkapitalen t.o.v. de normale tekengrootte</translation>
    </message>
    <message>
        <source>Percentage increase over the font size for the line spacing</source>
        <translation>Toename van regelhoogte in procent van de waarde die het lettertype aangeeft</translation>
    </message>
    <message>
        <source>Text Frame Properties</source>
        <translation>Eigenschappen voor tekstframe</translation>
    </message>
    <message>
        <source>Picture Frame Properties</source>
        <translation>Eigenschappen voor afbeeldingsframe</translation>
    </message>
    <message>
        <source>Shape Drawing Properties</source>
        <translation>Eigenschappen voor tekenen van vormen</translation>
    </message>
    <message>
        <source>Magnification Level Defaults</source>
        <translation>Standaardwaarden voor vergrotingsniveau</translation>
    </message>
    <message>
        <source>Line Drawing Properties</source>
        <translation>Lijneigenschappen</translation>
    </message>
    <message>
        <source>Polygon Drawing Properties</source>
        <translation>Polygooneigenschappen</translation>
    </message>
    <message>
        <source>Font for new text frames</source>
        <translation>Lettertype voor nieuwe tekstframes</translation>
    </message>
    <message>
        <source>Size of font for new text frames</source>
        <translation>Tekengrootte voor nieuwe tekstframes</translation>
    </message>
    <message>
        <source>Color of font</source>
        <translation>Letterkleur</translation>
    </message>
    <message>
        <source>Number of columns in a text frame</source>
        <translation>Aantal kolommen in een tekstframe</translation>
    </message>
    <message>
        <source>Gap between text frame columns</source>
        <translation>Tussenruimte tussen kolommen</translation>
    </message>
    <message>
        <source>Sample of your font</source>
        <translation>Voorbeeld van uw lettertype</translation>
    </message>
    <message>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation>Afbeeldingsframes kunnen afbeeldingen meeschalen naar elke grootte</translation>
    </message>
    <message>
        <source>Horizontal scaling of images</source>
        <translation>Horizontale schaal voor afbeeldingen</translation>
    </message>
    <message>
        <source>Vertical scaling of images</source>
        <translation>Verticale schaal voor afbeeldingen</translation>
    </message>
    <message>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation>Houdt de horizontale en verticale schaal gelijk</translation>
    </message>
    <message>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation>Afbeeldingen in afbeeldingsframes worden altijd naar de grootte van het frame geschaald</translation>
    </message>
    <message>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation>Automatisch geschaalde afbeeldingen houden hun oorspronkelijke beeldverhouding</translation>
    </message>
    <message>
        <source>Fill color of picture frames</source>
        <translation>Vulkleur voor afbeeldingsframes</translation>
    </message>
    <message>
        <source>Saturation of color of fill</source>
        <translation>Verzadiging van de vulkleur</translation>
    </message>
    <message>
        <source>Line color of shapes</source>
        <translation>Lijnkleur van vormen</translation>
    </message>
    <message>
        <source>Saturation of color of lines</source>
        <translation>Verzadiging van de lijnkleur</translation>
    </message>
    <message>
        <source>Fill color of shapes</source>
        <translation>Vulkleur van vormen</translation>
    </message>
    <message>
        <source>Line style of shapes</source>
        <translation>Lijnstijl van vormen</translation>
    </message>
    <message>
        <source>Line width of shapes</source>
        <translation>Lijndikte van vormen</translation>
    </message>
    <message>
        <source>Minimum magnification allowed</source>
        <translation>Minimaal toegestane vergroting</translation>
    </message>
    <message>
        <source>Maximum magnification allowed</source>
        <translation>Maximaal toegestane vergroting</translation>
    </message>
    <message>
        <source>Change in magnification for each zoom operation</source>
        <translation>Verandering in grootte bij elke zoom-stap</translation>
    </message>
    <message>
        <source>Color of lines</source>
        <translation>Lijnkleur</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation>Kleurverzadiging</translation>
    </message>
    <message>
        <source>Style of lines</source>
        <translation>Lijnstijl</translation>
    </message>
    <message>
        <source>Width of lines</source>
        <translation>Dikte van lijnen</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation>Aantal hoeken van polygonen (veelhoeken)</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation>Graden in rotatie van polygonen</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation>Voorbeeldpolygoon</translation>
    </message>
    <message>
        <source>Choose the size of the preview in the scrapbook palette</source>
        <translation>Kies de grootte van de voorbeeldweergave in het kladblok-palet</translation>
    </message>
    <message>
        <source>Save the scrapbook contents everytime after a change</source>
        <translation>Het kladblok telkens opslaan na een wijziging</translation>
    </message>
    <message>
        <source>When using facing pages, show the two pages side by side</source>
        <translation>Wanneer u pagina&apos;s tegenover elkaar gebruikt, toon dan de twee pagina&apos;s naast elkaar</translation>
    </message>
    <message>
        <source>Color for paper</source>
        <translation>Papierkleur</translation>
    </message>
    <message>
        <source>Color for the margin lines</source>
        <translation>Kleur voor de kantlijnen</translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation>Maskeert het gebied buiten de kantlijnen in de kantlijnkleur</translation>
    </message>
    <message>
        <source>Enable transparency features within PDF 1.4 export</source>
        <translation>Schakelt doorschijnende mogelijkheden van PDF-1.4 in</translation>
    </message>
    <message>
        <source>Set the default zoom level</source>
        <translation>Stelt het standaardzoom-niveau in</translation>
    </message>
    <message>
        <source>Filesystem location for the Ghostscript interpreter</source>
        <translation>Plaats van de Ghostscript-interpreter in uw bestandssysteem</translation>
    </message>
    <message>
        <source>Antialias text for EPS and PDF onscreen rendering</source>
        <translation>Tekst voor EPS en PDF voorzien van zachte weergave op het scherm (anti-alias)</translation>
    </message>
    <message>
        <source>Antialias graphics for EPS and PDF onscreen rendering</source>
        <translation>Grafische objecten voor EPS en PDF weergeven met vloeiende lijnen</translation>
    </message>
    <message>
        <source>Filesystem location for graphics editor</source>
        <translation>Lokatie van een programma voor het bewerken van afbeeldingen</translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page or exported file</source>
        <translation>Objecten die buiten de marges vallen niet weergeven bij afdrukken of exporteren</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Kies een map</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation>B&amp;innenkant:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation>B&amp;uitenkant:</translation>
    </message>
    <message>
        <source> mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation>in</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>T&amp;emplates:</source>
        <translation>Sjablon&amp;en:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation>Wijzige&amp;n...</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation>&amp;Factor toepassen</translation>
    </message>
    <message>
        <source>Additional Directory for Document Templates</source>
        <translation>Andere map voor document-sjablonen</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation>Convex/concaaf-factor toepassen op de vorm van polygonen</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation>Een negatieve waarde maakt de polygoon concaaf (stervormig),
een positieve waarde maakt haar convex</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>Een methode om grijstinten die zijn samengesteld uit cyaan, geel en magenta
te vervangen door tinten enkel op zwart gebaseerd.
UCR (Under Color Removal) heeft vooral invloed op donkere en neutrale tinten
die dicht bij grijs liggen. Sommige afbeeldingen worden fraaier afgedrukt door
deze functie; experimenteren kan nodig zijn.
UCR verkleint de kans op oververzadiging met CMY inkten.</translation>
    </message>
    <message>
        <source>Executive</source>
        <translation>Executive</translation>
    </message>
    <message>
        <source>Folio</source>
        <translation>Folio</translation>
    </message>
    <message>
        <source>Ledger</source>
        <translation>Ledger</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation>Letter (US)</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation>Tabloid</translation>
    </message>
</context>
<context>
    <name>QColorDialog</name>
    <message>
        <source>Hu&amp;e:</source>
        <translation>Tin&amp;t:</translation>
    </message>
    <message>
        <source>&amp;Sat:</source>
        <translation>&amp;Verz.:</translation>
    </message>
    <message>
        <source>&amp;Val:</source>
        <translation>&amp;Waarde:</translation>
    </message>
    <message>
        <source>&amp;Red:</source>
        <translation>&amp;Rood:</translation>
    </message>
    <message>
        <source>&amp;Green:</source>
        <translation>&amp;Groen:</translation>
    </message>
    <message>
        <source>Bl&amp;ue:</source>
        <translation>&amp;Blauw:</translation>
    </message>
    <message>
        <source>A&amp;lpha channel:</source>
        <translation>&amp;Alfakanaal:</translation>
    </message>
    <message>
        <source>&amp;Basic colors</source>
        <translation>&amp;Basiskleuren</translation>
    </message>
    <message>
        <source>&amp;Custom colors</source>
        <translation>&amp;Aangepaste kleuren</translation>
    </message>
    <message>
        <source>&amp;Define Custom Colors &gt;&gt;</source>
        <translation>Aangepaste kleuren &amp;instellen &gt;&gt;</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message>
        <source>&amp;Add to Custom Colors</source>
        <translation>&amp;Toevoegen aan kleuren</translation>
    </message>
    <message>
        <source>Select color</source>
        <translation>Kleur kiezen</translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <source>Copy or Move a File</source>
        <translation>Bestand kopiëren of verplaatsen</translation>
    </message>
    <message>
        <source>Read: %1</source>
        <translation>Lezen: %1</translation>
    </message>
    <message>
        <source>Write: %1</source>
        <translation>Schrijven: %1</translation>
    </message>
    <message>
        <source>File &amp;name:</source>
        <translation>Bestands&amp;naam:</translation>
    </message>
    <message>
        <source>File &amp;type:</source>
        <translation>Bestands&amp;type:</translation>
    </message>
    <message>
        <source>One directory up</source>
        <translation>Bovenliggende map</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Grootte</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Type</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Datum</translation>
    </message>
    <message>
        <source>Attributes</source>
        <translation>Attributen</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Look &amp;in:</source>
        <translation>Zoeken &amp;in:</translation>
    </message>
    <message>
        <source>Back</source>
        <translation>Terug</translation>
    </message>
    <message>
        <source>Create New Folder</source>
        <translation>Nieuwe map</translation>
    </message>
    <message>
        <source>List View</source>
        <translation>Lijstweergave</translation>
    </message>
    <message>
        <source>Detail View</source>
        <translation>Detailweergave</translation>
    </message>
    <message>
        <source>Preview File Info</source>
        <translation>Bestandsinfo tonen</translation>
    </message>
    <message>
        <source>Preview File Contents</source>
        <translation>Bestandsinhoud tonen</translation>
    </message>
    <message>
        <source>Read-write</source>
        <translation>Lezen en schrijven</translation>
    </message>
    <message>
        <source>Read-only</source>
        <translation>Alleen-lezen</translation>
    </message>
    <message>
        <source>Write-only</source>
        <translation>Alleen-schrijven</translation>
    </message>
    <message>
        <source>Inaccessible</source>
        <translation>Niet toegankelijk</translation>
    </message>
    <message>
        <source>Symlink to File</source>
        <translation>Symlink naar bestand</translation>
    </message>
    <message>
        <source>Symlink to Directory</source>
        <translation>Symlink naar map</translation>
    </message>
    <message>
        <source>Symlink to Special</source>
        <translation>Symlink naar speciaal</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Bestand</translation>
    </message>
    <message>
        <source>Dir</source>
        <translation>Map</translation>
    </message>
    <message>
        <source>Special</source>
        <translation>Speciaal</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation>Opslaan als</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Openen</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>Op&amp;slaan</translation>
    </message>
    <message>
        <source>&amp;Rename</source>
        <translation>He&amp;rnoemen</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>R&amp;eload</source>
        <translation>Opni&amp;euw laden</translation>
    </message>
    <message>
        <source>Sort by &amp;Name</source>
        <translation>Sorteren op &amp;naam</translation>
    </message>
    <message>
        <source>Sort by &amp;Size</source>
        <translation>Sorteren op &amp;grootte</translation>
    </message>
    <message>
        <source>Sort by &amp;Date</source>
        <translation>Sorteren op &amp;datum</translation>
    </message>
    <message>
        <source>&amp;Unsorted</source>
        <translation>Niet &amp;sorteren</translation>
    </message>
    <message>
        <source>Sort</source>
        <translation>Sorteren</translation>
    </message>
    <message>
        <source>Show &amp;hidden files</source>
        <translation>&amp;Verborgen bestanden tonen</translation>
    </message>
    <message>
        <source>the file</source>
        <translation>het bestand</translation>
    </message>
    <message>
        <source>the directory</source>
        <translation>de map</translation>
    </message>
    <message>
        <source>the symlink</source>
        <translation>de symlink</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>%1 verwijderen</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Are you sure you wish to delete %1 &quot;%2&quot;?&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Wilt u werkelijk %1 &quot;%2&quot; verwijderen?&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Ja, verwijderen</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Nee</translation>
    </message>
    <message>
        <source>New Folder 1</source>
        <translation>Nieuwe map 1</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>Nieuwe map</translation>
    </message>
    <message>
        <source>New Folder %1</source>
        <translation>Nieuwe map %1</translation>
    </message>
    <message>
        <source>Find Directory</source>
        <translation>Map zoeken</translation>
    </message>
    <message>
        <source>Directories</source>
        <translation>Mappen</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>Opslaan</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Fout</translation>
    </message>
    <message>
        <source>%1
File not found.
Check path and filename.</source>
        <translation>%1
Bestand niet gevonden.
Controleer het pad en de bestandsnaam.</translation>
    </message>
    <message>
        <source>All Files (*.*)</source>
        <translation>Alle bestanden (*.*)</translation>
    </message>
    <message>
        <source>Select a Directory</source>
        <translation>Map kiezen</translation>
    </message>
    <message>
        <source>Directory:</source>
        <translation>Map:</translation>
    </message>
</context>
<context>
    <name>QFontDialog</name>
    <message>
        <source>&amp;Font</source>
        <translation>&amp;Lettertype</translation>
    </message>
    <message>
        <source>Font st&amp;yle</source>
        <translation>St&amp;ijl</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;Grootte</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation>Effecten</translation>
    </message>
    <message>
        <source>Stri&amp;keout</source>
        <translation>Door&amp;halen</translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation>&amp;Onderstrepen</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation>&amp;Kleur</translation>
    </message>
    <message>
        <source>Sample</source>
        <translation>Voorbeeld</translation>
    </message>
    <message>
        <source>Scr&amp;ipt</source>
        <translation>Scr&amp;ipt</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Toepassen</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Sluiten</translation>
    </message>
    <message>
        <source>Select Font</source>
        <translation>Lettertype selecteren</translation>
    </message>
</context>
<context>
    <name>QLineEdit</name>
    <message>
        <source>Clear</source>
        <translation>Leegmaken</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>Alles selecteren</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Ongedaan maken</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>O&amp;pnieuw doen</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Kni&amp;ppen</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiëren</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>P&amp;lakken</translation>
    </message>
</context>
<context>
    <name>QMainWindow</name>
    <message>
        <source>Line up</source>
        <translation>Naast elkaar</translation>
    </message>
    <message>
        <source>Customize...</source>
        <translation>Aanpassen...</translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <source>&lt;h3&gt;About Qt&lt;/h3&gt;&lt;p&gt;This program uses Qt version %1.&lt;/p&gt;&lt;p&gt;Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p&gt;&lt;p&gt;Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br&gt;Qt is also available for embedded devices.&lt;/p&gt;&lt;p&gt;Qt is a Trolltech product. See &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt; for more information.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Info over Qt&lt;/h3&gt;&lt;p&gt;Dit programma gebruikt Qt versie %1.&lt;/p&gt;&lt;p&gt;Qt is een C++-toolkit voor het ontwikkelen van toepassingen op verschillende platformen.&lt;/p&gt;&lt;p&gt;Qt biedt broncode-compatibiliteit tussen MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, en alle belangrijke UNIX-varianten.&lt;br&gt;Qt is ook beschikbaar voor ingebedde apparaten.&lt;/p&gt;&lt;p&gt;Qt is een product van Trolltech. Zie &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt; voor meer informatie.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Oook! Wrong arguments! Call: </source>
        <translation type="obsolete">Oeps: Verkeerde argumenten! Aanroep:</translation>
    </message>
    <message>
        <source>Importing text</source>
        <translation>Tekst wordt geïmporteerd</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation>Alle ondersteunde formaten</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Initializing...</source>
        <translation>Bezig te initialiseren...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Document</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Achtergrond</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>Do you really want to overwrite the File:
%1 ?</source>
        <translation>Wilt u werkelijk het bestand %1 overschrijven:?</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview</source>
        <translation>&amp;Lettertypeweergave</translation>
    </message>
    <message>
        <source>&amp;Insert Special</source>
        <translation>&amp;Invoegen speciaal</translation>
    </message>
    <message>
        <source>New &amp;from Template...</source>
        <translation>Nieuw van &amp;sjabloon...</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;Nieuw</translation>
    </message>
    <message>
        <source>Template: </source>
        <translation>Sjabloon:</translation>
    </message>
    <message>
        <source>Newsletters</source>
        <translation>Nieuwsbrieven</translation>
    </message>
    <message>
        <source>Brochures</source>
        <translation>Brochures</translation>
    </message>
    <message>
        <source>Catalogs</source>
        <translation>Catalogi</translation>
    </message>
    <message>
        <source>Flyers</source>
        <translation>Flyers</translation>
    </message>
    <message>
        <source>Signs</source>
        <translation>Tekens</translation>
    </message>
    <message>
        <source>Cards</source>
        <translation>Kaarten</translation>
    </message>
    <message>
        <source>Letterheads</source>
        <translation>Briefhoofden</translation>
    </message>
    <message>
        <source>Envelopes</source>
        <translation>Enveloppen</translation>
    </message>
    <message>
        <source>Business Cards</source>
        <translation>Visitekaartjes</translation>
    </message>
    <message>
        <source>Calendars</source>
        <translation>Kalenders</translation>
    </message>
    <message>
        <source>Advertisements</source>
        <translation>Advertenties</translation>
    </message>
    <message>
        <source>Labels</source>
        <translation>Labels</translation>
    </message>
    <message>
        <source>Menus</source>
        <translation>Menu&apos;s</translation>
    </message>
    <message>
        <source>Programs</source>
        <translation>Programma&apos;s</translation>
    </message>
    <message>
        <source>PDF Forms</source>
        <translation>PDF-formulieren</translation>
    </message>
    <message>
        <source>PDF Presentations</source>
        <translation>PDF-presentaties</translation>
    </message>
    <message>
        <source>Magazines</source>
        <translation>Magazines</translation>
    </message>
    <message>
        <source>Posters</source>
        <translation>Posters</translation>
    </message>
    <message>
        <source>Announcements</source>
        <translation>Aankondigingen</translation>
    </message>
    <message>
        <source>Text Documents</source>
        <translation>Tekstdocumenten</translation>
    </message>
    <message>
        <source>Folds</source>
        <translation>Gevouwen documenten</translation>
    </message>
    <message>
        <source>Own Templates</source>
        <translation>Eigen sjablonen</translation>
    </message>
    <message>
        <source>Save as &amp;Image...</source>
        <translation>Opslaan als &amp;afbeelding...</translation>
    </message>
    <message>
        <source>Save as Image</source>
        <translation>Opslaan als afbeelding</translation>
    </message>
    <message>
        <source>Error writting the output file(s).</source>
        <translation>Fout tijdens het schrijven naar uitvoerbestand(en).</translation>
    </message>
    <message>
        <source>Error writing the output file(s).</source>
        <translation>Fout tijdens het schrijven naar uitvoerbestand(en).</translation>
    </message>
    <message>
        <source>Export successful.</source>
        <translation>Export was succesvol.</translation>
    </message>
    <message>
        <source>File exists. Overwrite?</source>
        <translation>Het bestand bestaat. Wilt u het overschrijven?</translation>
    </message>
    <message>
        <source>exists already. Overwrite?</source>
        <translation>bestaat al. Wilt u het overschrijven?</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Nee</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Ja</translation>
    </message>
    <message>
        <source>Yes all</source>
        <translation>Ja, alles</translation>
    </message>
    <message>
        <source>Print Preview</source>
        <translation>Afdrukvoorbeeld</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation type="obsolete">Afdru&amp;kken...</translation>
    </message>
    <message>
        <source>Print Previe&amp;w</source>
        <translation>Afdruk&amp;voorbeeld</translation>
    </message>
    <message>
        <source>Import &amp;EPS/PS...</source>
        <translation>&amp;EPS/PS importeren...</translation>
    </message>
    <message>
        <source>All Supported Formats (*.eps *.EPS *.ps *.PS);;</source>
        <translation>Alle ondersteunde formaten (*.eps *.EPS *.ps *.PS);;</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>Save as &amp;Template...</source>
        <translation>Opslaan als &amp;sjabloon...</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="obsolete">Opslaan &amp;als...</translation>
    </message>
    <message>
        <source>Oook! You&apos;re trying to load image into an object doesn&apos;t exist or isn&apos;t selected!</source>
        <translation type="obsolete">Oeps! U probeert een afbeelding in een object te laden dat niet bestaat of niet is geselecteerd!</translation>
    </message>
    <message>
        <source>Oook! You&apos;re trying to (un)lock an object doesn&apos;t exist! None selected too.</source>
        <translation type="obsolete">Oeps! U probeert een object te vergrendelen of los te maken dat niet bestaat of niet is geselecteerd.</translation>
    </message>
    <message>
        <source>Oook! You&apos;re trying to query an object doesn&apos;t exist! None selected too.</source>
        <translation type="obsolete">Oeps! U probeert de eigenschappen van een object op te vragen dat niet bestaat of niet is geselecteerd.</translation>
    </message>
    <message>
        <source>Oook! You&apos;re calling an object doesn&apos;t exist!</source>
        <translation type="obsolete">Oeps! U roept een object aan dat niet bestaat!</translation>
    </message>
    <message>
        <source>Oook! You&apos;re trying to erase an object doesn&apos;t exist!</source>
        <translation type="obsolete">Oeps! U probeert een object te wissen dat niet bestaat!</translation>
    </message>
    <message>
        <source>Oook! An object you&apos;re trying to textflow doesn&apos;t exist!</source>
        <translation type="obsolete">Oeps! U probeert het tekstverloop in te stellen bij een object dat niet bestaat!</translation>
    </message>
    <message>
        <source>S&amp;cripter Manual...</source>
        <translation>Scripter &amp;handleiding...</translation>
    </message>
    <message>
        <source>&amp;Scribus Scripts</source>
        <translation>&amp;Scribus scripts</translation>
    </message>
    <message>
        <source>&amp;Execute Script...</source>
        <translation>Script &amp;uitvoeren...</translation>
    </message>
    <message>
        <source>&amp;Recent Scripts</source>
        <translation>&amp;Recente scripts</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation>&amp;Console tonen</translation>
    </message>
    <message>
        <source>S&amp;cript</source>
        <translation>S&amp;cript</translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation>Online naslag</translation>
    </message>
    <message>
        <source>Python Scripts (*.py);; All Files (*)</source>
        <translation>Python scripts (*.py);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Save Page as &amp;SVG...</source>
        <translation>Pagina opslaan als &amp;SVG...</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Opslaan als</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg *.svgz);;All Files (*)</source>
        <translation>SVG-afbeeldingen (*.svg *.svgz);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg);;All Files (*)</source>
        <translation>SVG-afbeeldingen (*.svg);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Import &amp;SVG...</source>
        <translation>&amp;SVG importeren...</translation>
    </message>
    <message>
        <source>Comma Separated Value Files</source>
        <translation>Bestanden met kommagescheiden-waarden (CSV)</translation>
    </message>
    <message>
        <source>CSV_data</source>
        <translation>CSV_gegevens</translation>
    </message>
    <message>
        <source>CSV_header</source>
        <translation>CSV_kopregel</translation>
    </message>
    <message>
        <source>HTML Files</source>
        <translation>HTML-bestanden</translation>
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
Externe koppelingen
</translation>
    </message>
    <message>
        <source>Text Files</source>
        <translation>Tekstbestanden</translation>
    </message>
    <message>
        <source>Font %1 is broken, discarding it</source>
        <translation>Het lettertype %1 is beschadigd en wordt weggelaten</translation>
    </message>
    <message>
        <source>OO.o Writer Documents</source>
        <translation type="obsolete">OpenOffice.org Writer-documenten</translation>
    </message>
    <message>
        <source>Text Filters</source>
        <translation>Tekstfilters</translation>
    </message>
    <message>
        <source>Albanian</source>
        <translation>Albanees</translation>
    </message>
    <message>
        <source>Basque</source>
        <translation>Baskisch</translation>
    </message>
    <message>
        <source>Bulgarian</source>
        <translation>Bulgaars</translation>
    </message>
    <message>
        <source>Brazilian</source>
        <translation>Brazilliaans</translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation>Catalaans</translation>
    </message>
    <message>
        <source>Chinese</source>
        <translation>Chinees</translation>
    </message>
    <message>
        <source>Czech</source>
        <translation>Tsjechisch</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation>Deens</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation>Nederlands</translation>
    </message>
    <message>
        <source>English</source>
        <translation>Engels</translation>
    </message>
    <message>
        <source>English (British)</source>
        <translation>Engels (Brits)</translation>
    </message>
    <message>
        <source>Esperanto</source>
        <translation>Esperanto</translation>
    </message>
    <message>
        <source>German</source>
        <translation>Duits</translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation>Fins</translation>
    </message>
    <message>
        <source>French</source>
        <translation>Frans</translation>
    </message>
    <message>
        <source>Galician</source>
        <translation>Galiciaans</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation>Grieks</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation>Hongaars</translation>
    </message>
    <message>
        <source>Indonesian</source>
        <translation>Indonesisch</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation>Italiaans</translation>
    </message>
    <message>
        <source>Korean</source>
        <translation>Koreaans</translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation>Litouws</translation>
    </message>
    <message>
        <source>Norwegian (Bokmaal)</source>
        <translation>Noors (Bokmaal)</translation>
    </message>
    <message>
        <source>Norwegian (Nnyorsk)</source>
        <translation>Noors (Nnyorsk)</translation>
    </message>
    <message>
        <source>Norwegian</source>
        <translation>Noors</translation>
    </message>
    <message>
        <source>Polish</source>
        <translation>Pools</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation>Russisch</translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation>Zweeds</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation>Spaans</translation>
    </message>
    <message>
        <source>Spanish (Latin)</source>
        <translation>Spaans (Latijn)</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation>Slovaaks</translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation>Sloveens</translation>
    </message>
    <message>
        <source>Serbian</source>
        <translation>Servisch</translation>
    </message>
    <message>
        <source>Media Cases</source>
        <translation>Media-cases</translation>
    </message>
    <message>
        <source>Tried to set progress &gt; maximum progress</source>
        <translation>Kan voortgang niet &gt; max. voortgang instellen</translation>
    </message>
    <message>
        <source>&amp;About Script...</source>
        <translation>&amp;Over script...</translation>
    </message>
    <message>
        <source>About Script</source>
        <translation>Over script</translation>
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
        <source>Insert index out of bounds</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alignment out of range. Use one of the scribus.ALIGN* constants.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t set text alignment on a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font size out of bounds - must be 1 &lt;= size &lt;= 512</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t set font size on a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t set font on a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font not found</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line space out of bounds, must be &gt;= 0.1</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t line spacing on a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Column gap out of bounds, must be positive</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t column gap on a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Column count out of bounds, must be &gt; 1</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t number of columns on a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selection index out of bounds</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t select text in a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t delete text from a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t set text fill on a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t set text stroke on a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t set text shade on a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can only link text frames</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target frame must be empty</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target frame links to another frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Target frame is linked to by another frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Source and target are the same object</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t unlink a non-text frame</source>
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
        <source>Can&apos;t convert a non-text frame to outlines</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to open document</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to save document</source>
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
        <source>Can&apos;t scale by 0%</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t render an empty sample</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t save to a blank filename</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t have an empty layer name</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer not found</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t remove the last layer</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t create layer without a name</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An object with the requested name already exists</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain at least two points (four values)</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain an even number of values</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain at least three points (six values)</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain at least four points (eight values)</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must have a multiple of six values</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object not found</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Style not found</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can&apos;t set style on a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to save EPS</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page number out of range</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>argument is not list: must be list of float values</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>argument contains non-numeric values: must be list of float values</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Corner radius must be a positive number.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line style not found</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color not found</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot change a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color not found in document</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color not found in default colors</source>
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
        <source>Import &amp;OpenOffice.org Draw...</source>
        <translation>&amp;OpenOffice.org Draw importeren...</translation>
    </message>
    <message>
        <source>OpenOffice.org Draw (*.sxd);;All Files (*)</source>
        <translation>OpenOffice.org Draw-bestanden (*.sxd);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Documents</source>
        <translation>OpenOffice.org Writer-documenten</translation>
    </message>
    <message>
        <source>Color not found - python error</source>
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
        <source>Short &amp;Words...</source>
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
</context>
<context>
    <name>QTextEdit</name>
    <message>
        <source>Clear</source>
        <translation>Leegmaken</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>Alles selecteren</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Ongedaan maken</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>O&amp;pnieuw doen</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Kni&amp;ppen</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiëren</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>P&amp;lakken</translation>
    </message>
</context>
<context>
    <name>QTitleBar</name>
    <message>
        <source>System Menu</source>
        <translation>Systeemmenu</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Oprollen</translation>
    </message>
    <message>
        <source>Unshade</source>
        <translation>Tevoorschijn halen</translation>
    </message>
    <message>
        <source>Normalize</source>
        <translation>Normaliseren</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>Minimaliseren</translation>
    </message>
    <message>
        <source>Maximize</source>
        <translation>Maximaliseren</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Sluiten</translation>
    </message>
</context>
<context>
    <name>QWorkspace</name>
    <message>
        <source>&amp;Restore</source>
        <translation>&amp;Herstellen</translation>
    </message>
    <message>
        <source>&amp;Move</source>
        <translation>&amp;Verplaatsen</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;Grootte</translation>
    </message>
    <message>
        <source>Mi&amp;nimize</source>
        <translation>Mi&amp;nimaliseren</translation>
    </message>
    <message>
        <source>Ma&amp;ximize</source>
        <translation>Ma&amp;ximaliseren</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Sluiten</translation>
    </message>
    <message>
        <source>Stay on &amp;Top</source>
        <translation>Altijd op &amp;voorgrond</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>Minimaliseren</translation>
    </message>
    <message>
        <source>Restore Down</source>
        <translation>Herstellen onder</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Sluiten</translation>
    </message>
    <message>
        <source>Sh&amp;ade</source>
        <translation>&amp;Oprollen</translation>
    </message>
    <message>
        <source>%1 - [%2]</source>
        <translation>%1 - [%2]</translation>
    </message>
    <message>
        <source>&amp;Unshade</source>
        <translation>&amp;Tevoorschijn halen</translation>
    </message>
</context>
<context>
    <name>Query</name>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
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
        <translation>in</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>Document Setup</source>
        <translation>Instellingen voor document</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Marge hulplijnen</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>&amp;Boven:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Links:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>On&amp;der:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>&amp;Rechts:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation>&amp;Tegenover elkaar</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation>Linker&amp;pagina eerst</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation>Alle pagina&apos;s hetzelfde of onderscheid tussen linker en rechterpagina&apos;s</translation>
    </message>
    <message>
        <source>Make the first page the left page of the document</source>
        <translation>Laat het document beginnen met een linker pagina</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Afstand tussen de bovenkant van de marge en de rand van het papier</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Afstand tussen de onderkant van de marge en de rand van het papier</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Afstand tussen de linkerkant van de marge en de rand van het papier.
Als &apos;Tegenover elkaar&apos; is geselecteerd wordt deze breedte gebruikt aan de rugkant van het document</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Afstand tussen de rechterkant van de marge en de rand van het papier.
Als &apos;Tegenover elkaar&apos; is geselecteerd wordt deze breedte gebruikt aan de buitenkant van het document</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation>B&amp;innenkant:</translation>
    </message>
    <message>
        <source>&amp;Outside:</source>
        <translation>B&amp;uitenkant:</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Paginagrootte</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>Grootte:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Aangepast</translation>
    </message>
    <message>
        <source>Orientation:</source>
        <translation>Orientatie:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Staand</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Liggend</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation>Breedte:</translation>
    </message>
    <message>
        <source>Height:</source>
        <translation>Hoogte:</translation>
    </message>
    <message>
        <source>F&amp;irst Page Number:</source>
        <translation>N&amp;ummer eerste pagina:</translation>
    </message>
</context>
<context>
    <name>SToolBAlign</name>
    <message>
        <source>Style Settings</source>
        <translation>Stijlinstellingen</translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation>Stijl van huidige alinea</translation>
    </message>
</context>
<context>
    <name>SToolBColorF</name>
    <message>
        <source>Fill Color Settings</source>
        <translation>Vulkleur-instellingen</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Kleur van de tekstvulling</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation>Verzadiging van kleur van tekstinvulling</translation>
    </message>
</context>
<context>
    <name>SToolBColorS</name>
    <message>
        <source>Stroke Color Settings</source>
        <translation>Lijnkleur-instellingen</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Kleur van de tekstlijnen</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation>Verzadiging van kleur van tekstlijnen</translation>
    </message>
</context>
<context>
    <name>SToolBFont</name>
    <message>
        <source>Font Settings</source>
        <translation>Lettertype-instellingen</translation>
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
        <translation>Lettertype van geselecteerde tekst</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Tekengrootte</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation>Schaalbreedte van tekens</translation>
    </message>
</context>
<context>
    <name>SToolBStyle</name>
    <message>
        <source>Character Settings</source>
        <translation>Teken-instellingen</translation>
    </message>
    <message>
        <source>Kerning:</source>
        <translation>Kerning:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Manual Kerning</source>
        <translation>Handmatige kerning</translation>
    </message>
</context>
<context>
    <name>ScriXmlDoc</name>
    <message>
        <source>Copy #%1 of </source>
        <translation>Kopie #%1 van</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Achtergrond</translation>
    </message>
</context>
<context>
    <name>ScribusApp</name>
    <message>
        <source>Normal</source>
        <translation>Normaal</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Bestand</translation>
    </message>
    <message>
        <source>Create a new Document</source>
        <translation>Nieuw document aanmaken</translation>
    </message>
    <message>
        <source>Open a Document</source>
        <translation>Een document openen</translation>
    </message>
    <message>
        <source>Save the current Document</source>
        <translation>Het huidige document opslaan</translation>
    </message>
    <message>
        <source>Close the current Document</source>
        <translation>Het huidige document sluiten</translation>
    </message>
    <message>
        <source>Print the current Document</source>
        <translation>Het huidige document afdrukken</translation>
    </message>
    <message>
        <source>Save the current Document as PDF</source>
        <translation>Het huidige document als PDF opslaan</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation>Zoeken naar lettertypen</translation>
    </message>
    <message>
        <source>There are no Postscript-Fonts on your System</source>
        <translation>Er zijn geen Postscript-lettertypen aanwezig op uw systeem</translation>
    </message>
    <message>
        <source>Exiting now</source>
        <translation>Bezig af te sluiten</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation>Fatale fout</translation>
    </message>
    <message>
        <source>Smart Hyphen</source>
        <translation>Intelligent afbreken</translation>
    </message>
    <message>
        <source>Align Left</source>
        <translation>Links uitlijnen</translation>
    </message>
    <message>
        <source>Align Right</source>
        <translation>Rechts uitlijnen</translation>
    </message>
    <message>
        <source>Align Center</source>
        <translation>Centreren</translation>
    </message>
    <message>
        <source>Insert Page Number</source>
        <translation>Paginanummer invoegen</translation>
    </message>
    <message>
        <source>Attach Text to Path</source>
        <translation>Tekst aan pad toevoegen</translation>
    </message>
    <message>
        <source>Show Layers</source>
        <translation>Lagen tonen</translation>
    </message>
    <message>
        <source>Javascripts...</source>
        <translation>Javascripts...</translation>
    </message>
    <message>
        <source>Undo</source>
        <translation>Ongedaan maken</translation>
    </message>
    <message>
        <source>Show Page Palette</source>
        <translation>Paginapalet tonen</translation>
    </message>
    <message>
        <source>Lock/Unlock</source>
        <translation>Vergrendelen/losmaken</translation>
    </message>
    <message>
        <source>Non Breaking Space</source>
        <translation>Harde spatie</translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation>Instellingen worden gelezen</translation>
    </message>
    <message>
        <source>Getting ICC Profiles</source>
        <translation>ICC-profielen worden opgehaald</translation>
    </message>
    <message>
        <source>Init Hyphenator</source>
        <translation>Afbreekprogramma wordt ingesteld</translation>
    </message>
    <message>
        <source>Setting up Shortcuts</source>
        <translation>Sneltoetsen worden geladen</translation>
    </message>
    <message>
        <source>&amp;Color Management...</source>
        <translation>&amp;Kleurbeheer...</translation>
    </message>
    <message>
        <source>Reading Scrapbook</source>
        <translation>Kladblok wordt gelezen</translation>
    </message>
    <message>
        <source>Initializing Plugins</source>
        <translation>Plugins worden ingesteld</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nieuw</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Openen...</translation>
    </message>
    <message>
        <source>Open &amp;Recent</source>
        <translation>&amp;Recent geopend</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Nieuw</translation>
    </message>
    <message>
        <source>Open...</source>
        <translation>Openen...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Sluiten</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Sluiten</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>Op&amp;slaan</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>Opslaan</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Opslaan &amp;als...</translation>
    </message>
    <message>
        <source>Save as...</source>
        <translation>Opslaan als...</translation>
    </message>
    <message>
        <source>Re&amp;vert to Saved</source>
        <translation>Terug&amp;zetten naar opgeslagen</translation>
    </message>
    <message>
        <source>Collect for O&amp;utput...</source>
        <translation>Verzamelen voor &amp;uitvoer...</translation>
    </message>
    <message>
        <source>&amp;Get Text/Picture...</source>
        <translation>Tekst/afbeelding verkrij&amp;gen...</translation>
    </message>
    <message>
        <source>Append &amp;Text...</source>
        <translation>Tekst &amp;toevoegen...</translation>
    </message>
    <message>
        <source>Import &amp;Page(s)...</source>
        <translation>&amp;Pagina(&apos;s) importeren...</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importeren</translation>
    </message>
    <message>
        <source>Save &amp;Text...</source>
        <translation>&amp;Tekst opslaan...</translation>
    </message>
    <message>
        <source>Save Page as &amp;EPS...</source>
        <translation>Pagina opslaan als &amp;EPS...</translation>
    </message>
    <message>
        <source>Save as P&amp;DF...</source>
        <translation>Opslaan als P&amp;DF...</translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation>&amp;Exporteren</translation>
    </message>
    <message>
        <source>Document &amp;Information...</source>
        <translation>Document&amp;informatie...</translation>
    </message>
    <message>
        <source>Document Info...</source>
        <translation>Documentinformatie...</translation>
    </message>
    <message>
        <source>Document &amp;Setup...</source>
        <translation>Documentin&amp;stellingen...</translation>
    </message>
    <message>
        <source>Document Setup...</source>
        <translation>Documentinstellingen...</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation>Afdru&amp;kken...</translation>
    </message>
    <message>
        <source>Print...</source>
        <translation>Afdrukken...</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>A&amp;fsluiten</translation>
    </message>
    <message>
        <source>Quit</source>
        <translation>Afsluiten</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Ongedaan maken</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Kni&amp;ppen</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiëren</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>P&amp;lakken</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>W&amp;issen</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>&amp;Alles selecteren</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation>Knippen</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>Kopiëren</translation>
    </message>
    <message>
        <source>Paste</source>
        <translation>Plakken</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation>Wissen</translation>
    </message>
    <message>
        <source>Select all</source>
        <translation>Alles selecteren</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation>&amp;Zoeken/vervangen...</translation>
    </message>
    <message>
        <source>C&amp;olors...</source>
        <translation>Kle&amp;uren...</translation>
    </message>
    <message>
        <source>Colors...</source>
        <translation>Kleuren...</translation>
    </message>
    <message>
        <source>&amp;Paragraph Styles...</source>
        <translation>&amp;Alineastijlen...</translation>
    </message>
    <message>
        <source>&amp;Line Styles...</source>
        <translation>&amp;Lijnstijlen...</translation>
    </message>
    <message>
        <source>Styles...</source>
        <translation>Stijlen...</translation>
    </message>
    <message>
        <source>&amp;Templates...</source>
        <translation>&amp;Sjablonen...</translation>
    </message>
    <message>
        <source>Templates...</source>
        <translation>Sjablonen...</translation>
    </message>
    <message>
        <source>&amp;Javascripts...</source>
        <translation>&amp;Javascripts...</translation>
    </message>
    <message>
        <source>Select New Font</source>
        <translation>Nieuw lettertype selecteren</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;upliceren</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation>Dupliceren</translation>
    </message>
    <message>
        <source>&amp;Multiple Duplicate</source>
        <translation>&amp;Meervoudig dupliceren</translation>
    </message>
    <message>
        <source>Multiple Duplicate</source>
        <translation>Meervoudig dupliceren</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Verwijderen</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation>&amp;Groeperen</translation>
    </message>
    <message>
        <source>Group</source>
        <translation>Groeperen</translation>
    </message>
    <message>
        <source>&amp;Ungroup</source>
        <translation>&amp;Groep losmaken</translation>
    </message>
    <message>
        <source>Un-group</source>
        <translation>Groep losmaken</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation>Vergrende&amp;len</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation>Naar &amp;achtergrond</translation>
    </message>
    <message>
        <source>Send to Back</source>
        <translation>Naar achtergrond</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation>Naar &amp;voorgrond</translation>
    </message>
    <message>
        <source>Bring to Front</source>
        <translation>Naar voorgrond</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation>&amp;Lager</translation>
    </message>
    <message>
        <source>Lower</source>
        <translation>Lager</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation>&amp;Hoger</translation>
    </message>
    <message>
        <source>Raise</source>
        <translation>Hoger</translation>
    </message>
    <message>
        <source>Distribute/&amp;Align...</source>
        <translation>Verdelen/&amp;uitlijnen...</translation>
    </message>
    <message>
        <source>Distribute/Align...</source>
        <translation>Verdelen/uitlijnen...</translation>
    </message>
    <message>
        <source>&amp;Edit Shape</source>
        <translation>Vorm b&amp;ewerken</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>&amp;Vorm</translation>
    </message>
    <message>
        <source>&amp;Attach Text to Path</source>
        <translation>Tekst &amp;aan pad toevoegen</translation>
    </message>
    <message>
        <source>&amp;Detach Text from Path</source>
        <translation>Tekst van &amp;pad losmaken</translation>
    </message>
    <message>
        <source>&amp;Combine Polygons</source>
        <translation>Polygonen &amp;samenvoegen</translation>
    </message>
    <message>
        <source>Split &amp;Polygons</source>
        <translation>&amp;Polygonen opsplitsen</translation>
    </message>
    <message>
        <source>C&amp;onvert to Outlines</source>
        <translation>Omzetten naar &amp;outlines</translation>
    </message>
    <message>
        <source>&amp;Insert...</source>
        <translation>&amp;Invoegen...</translation>
    </message>
    <message>
        <source>Insert...</source>
        <translation>Invoegen...</translation>
    </message>
    <message>
        <source>&amp;Delete...</source>
        <translation>Verwij&amp;deren...</translation>
    </message>
    <message>
        <source>Delete...</source>
        <translation>Verwijderen...</translation>
    </message>
    <message>
        <source>&amp;Move...</source>
        <translation>&amp;Verplaatsen...</translation>
    </message>
    <message>
        <source>Move...</source>
        <translation>Verplaatsen...</translation>
    </message>
    <message>
        <source>&amp;Apply Template...</source>
        <translation>Sj&amp;abloon toepassen...</translation>
    </message>
    <message>
        <source>Apply Template...</source>
        <translation>Sjabloon toepassen...</translation>
    </message>
    <message>
        <source>Manage &amp;Guides...</source>
        <translation>&amp;Hulplijnen beheren...</translation>
    </message>
    <message>
        <source>Manage Guides...</source>
        <translation>Hulplijnen beheren...</translation>
    </message>
    <message>
        <source>&amp;Fit in Window</source>
        <translation>Aanpassen aan &amp;venstergrootte</translation>
    </message>
    <message>
        <source>Fit in Window</source>
        <translation>Aanpassen aan venstergrootte</translation>
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
        <translation>Minia&amp;turen</translation>
    </message>
    <message>
        <source>Thumbnails</source>
        <translation>Miniaturen</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation>&amp;Marges tonen</translation>
    </message>
    <message>
        <source>Hide Margins</source>
        <translation>Marges verbergen</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation>&amp;Frames tonen</translation>
    </message>
    <message>
        <source>Hide Frames</source>
        <translation>Frames verbergen</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation>Afbeeld&amp;ingen tonen</translation>
    </message>
    <message>
        <source>Hide Images</source>
        <translation>Afbeeldingen verbergen</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation>R&amp;aster tonen</translation>
    </message>
    <message>
        <source>Show Grid</source>
        <translation>Raster tonen</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation>H&amp;ulplijnen tonen</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation>&amp;Basislijn-raster tonen</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation>Ma&amp;gnetisch raster</translation>
    </message>
    <message>
        <source>Snap to Grid</source>
        <translation>Magnetisch raster</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation>Magnetische hul&amp;plijnen</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>&amp;Eigenschappen</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation>Eigenschappen</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <translation>&amp;Outline</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation>Outline</translation>
    </message>
    <message>
        <source>&amp;Scrapbook</source>
        <translation>&amp;Kladblok</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation>Kladblok</translation>
    </message>
    <message>
        <source>&amp;Layers</source>
        <translation>&amp;Lagen</translation>
    </message>
    <message>
        <source>P&amp;age Palette</source>
        <translation>P&amp;aginapalet</translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation>&amp;Bladwijzers</translation>
    </message>
    <message>
        <source>&amp;Manage Pictures</source>
        <translation>Afbeeldingen &amp;beheren</translation>
    </message>
    <message>
        <source>Manage Pictures</source>
        <translation>Afbeeldingen beheren</translation>
    </message>
    <message>
        <source>&amp;Hyphenate Text</source>
        <translation>Tekst a&amp;fbreken</translation>
    </message>
    <message>
        <source>Hyphenate Text</source>
        <translation>Tekst afbreken</translation>
    </message>
    <message>
        <source>Toolti&amp;ps</source>
        <translation>Hul&amp;pballonnen</translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation>&amp;Gereedschappen</translation>
    </message>
    <message>
        <source>P&amp;DF Tools</source>
        <translation>P&amp;DF-gereedschappen</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation>Gereedschappen</translation>
    </message>
    <message>
        <source>Tooltips</source>
        <translation>Hulpballonnen</translation>
    </message>
    <message>
        <source>P&amp;references...</source>
        <translation>&amp;Voorkeuren...</translation>
    </message>
    <message>
        <source>&amp;Fonts...</source>
        <translation>&amp;Lettertypen...</translation>
    </message>
    <message>
        <source>Fonts...</source>
        <translation>Lettertypen...</translation>
    </message>
    <message>
        <source>&amp;Hyphenator...</source>
        <translation>&amp;Afbreekinstellingen...</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts...</source>
        <translation>&amp;Sneltoetsen...</translation>
    </message>
    <message>
        <source>&amp;About Scribus</source>
        <translation>&amp;Info over Scribus</translation>
    </message>
    <message>
        <source>About Scribus</source>
        <translation>Info over Scribus</translation>
    </message>
    <message>
        <source>About &amp;Qt</source>
        <translation>Info over &amp;Qt</translation>
    </message>
    <message>
        <source>About Qt</source>
        <translation>Info over Qt</translation>
    </message>
    <message>
        <source>Scribus &amp;Manual...</source>
        <translation>Scribus &amp;handboek...</translation>
    </message>
    <message>
        <source>Online-Help...</source>
        <translation>Online hulp...</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Bestand</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>Be&amp;werken</translation>
    </message>
    <message>
        <source>St&amp;yle</source>
        <translation>Sti&amp;jl</translation>
    </message>
    <message>
        <source>&amp;Item</source>
        <translation>&amp;Item</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation>&amp;Pagina</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>Beel&amp;d</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation>E&amp;xtra</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation>In&amp;stellingen</translation>
    </message>
    <message>
        <source>&amp;Windows</source>
        <translation>&amp;Venster</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;Help</translation>
    </message>
    <message>
        <source>&amp;Left</source>
        <translation>&amp;Links</translation>
    </message>
    <message>
        <source>&amp;Center</source>
        <translation>&amp;Midden</translation>
    </message>
    <message>
        <source>&amp;Right</source>
        <translation>&amp;Rechts</translation>
    </message>
    <message>
        <source>&amp;Block</source>
        <translation>&amp;Blok</translation>
    </message>
    <message>
        <source>&amp;Forced</source>
        <translation>Ge&amp;forceerd</translation>
    </message>
    <message>
        <source>&amp;Other...</source>
        <translation>&amp;Overig...</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation>Onderstreept</translation>
    </message>
    <message>
        <source>Strikethru</source>
        <translation>Doorhalen</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation>Kleinkapitalen</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation>Superscript</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation>Subscript</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation>Outline</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation>X-Pos:</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation>Y-Pos:</translation>
    </message>
    <message>
        <source> mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation>in</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation>Gereed</translation>
    </message>
    <message>
        <source>&amp;Cascade</source>
        <translation>&amp;Trapsgewijs</translation>
    </message>
    <message>
        <source>&amp;Tile</source>
        <translation>&amp;Tegels</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>Get Text/Picture...</source>
        <translation>Tekst/afbeelding verkrijgen...</translation>
    </message>
    <message>
        <source>Get Picture...</source>
        <translation>Afbeelding verkrijgen...</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation>&amp;Kleur</translation>
    </message>
    <message>
        <source>&amp;Invert</source>
        <translation>&amp;Inverteren</translation>
    </message>
    <message>
        <source>&amp;Get Text...</source>
        <translation>Tekst verkrij&amp;gen...</translation>
    </message>
    <message>
        <source>&amp;Font</source>
        <translation>&amp;Lettertype</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;Grootte</translation>
    </message>
    <message>
        <source>&amp;Effects</source>
        <translation>&amp;Effecten</translation>
    </message>
    <message>
        <source>&amp;Alignment</source>
        <translation>&amp;Uitlijning</translation>
    </message>
    <message>
        <source>&amp;Shade</source>
        <translation>&amp;Tint</translation>
    </message>
    <message>
        <source>&amp;Tabulators...</source>
        <translation>&amp;Tabulators...</translation>
    </message>
    <message>
        <source>Get Text...</source>
        <translation>Tekst verkrijgen...</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Lettertype</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Grootte</translation>
    </message>
    <message>
        <source>Style</source>
        <translation>Stijl</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Kleur</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Tint</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation>&amp;Losmaken</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documenten (*.sla *.sla.gz *.scd *.scd.gz);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documenten (*.sla *.scd);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Importing Pages...</source>
        <translation>Pagina&apos;s worden geïmporteerd...</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation>Pagina(&apos;s) importeren</translation>
    </message>
    <message>
        <source>&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</source>
        <translation>&lt;p&gt;U probeert meer pagina&apos;s te importeren dan beschikbaar in het huidige document (geteld vanaf de actieve pagina).&lt;/p&gt;Kies een van de volgende mogelijkheden:&lt;br&gt;&lt;ul&gt;&lt;li&gt;Ontbrekende pagina&apos;s &lt;b&gt;aanmaken&lt;/b&gt;&lt;/li&gt;&lt;li&gt;Pagina&apos;s &lt;b&gt;importeren&lt;/b&gt; tot aan laatste pagina&lt;/li&gt;&lt;li&gt;&lt;b&gt;Annuleren&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>Aanmaken</translation>
    </message>
    <message>
        <source>Import</source>
        <translation>Importeren tot laatste</translation>
    </message>
    <message>
        <source>Import done</source>
        <translation>Importeren voltooid</translation>
    </message>
    <message>
        <source>Found nothing to import</source>
        <translation>Niets gevonden om te importeren</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>File %1 is not in Scribus format</source>
        <translation>Het bestand %1 is niet in Scribus-formaat</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Loading...</source>
        <translation>Laden...</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation>Alle ondersteunde formaten</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Can&apos;t write the File: 
%1</source>
        <translation>Kan niet naar bestand schrijven: 
%1</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Opslaan als</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</source>
        <translation>Documenten (*.sla *.sla.gz *.scd *.scd.gz);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Saving...</source>
        <translation>Opslaan...</translation>
    </message>
    <message>
        <source>Printing...</source>
        <translation>Bezig met afdrukken...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Document</translation>
    </message>
    <message>
        <source>Printing failed!</source>
        <translation>Afdrukken mislukt!</translation>
    </message>
    <message>
        <source>Scribus Manual</source>
        <translation>Scribus handboek</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Tekstbestanden (*.txt);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Grootte:</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation>&amp;Tint:</translation>
    </message>
    <message>
        <source>Hide Baseline Grid</source>
        <translation>Basislijn-raster verbergen</translation>
    </message>
    <message>
        <source>Show Baseline Grid</source>
        <translation>Basislijn-raster tonen</translation>
    </message>
    <message>
        <source>The following Programs are missing:</source>
        <translation>De volgende programma&apos;s ontbreken:</translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS Images</source>
        <translation>Ghostscript: U kunt niet met EPS-afbeeldingen werken</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Alle</translation>
    </message>
    <message>
        <source>EPS-Files (*.eps);;All Files (*)</source>
        <translation>EPS-bestanden (*.eps *.epsi);;Alle bestanden (*)</translation>
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
        <source>Some Objects are locked.</source>
        <translation>Enkele objecten zijn vergrendeld.</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message>
        <source>Lock all</source>
        <translation>Alle vergrendelen</translation>
    </message>
    <message>
        <source>Unlock all</source>
        <translation>Alle losmaken</translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation>Losmaken</translation>
    </message>
    <message>
        <source>Lock</source>
        <translation>Vergrendelen</translation>
    </message>
    <message>
        <source>Loading:</source>
        <translation>Laden:</translation>
    </message>
    <message>
        <source>Adjusting Colors</source>
        <translation>Bezig kleuren aan te passen</translation>
    </message>
    <message>
        <source>&amp;Undo Delete Object</source>
        <translation>&amp;Object verwijderen ongedaan maken</translation>
    </message>
    <message>
        <source>&amp;Undo Object Move</source>
        <translation>&amp;Object verplaatsen ongedaan maken</translation>
    </message>
    <message>
        <source>&amp;Undo Object Change</source>
        <translation>&amp;Object wijzigen ongedaan maken</translation>
    </message>
    <message>
        <source>German</source>
        <translation>Duits</translation>
    </message>
    <message>
        <source>Polish</source>
        <translation>Pools</translation>
    </message>
    <message>
        <source>English</source>
        <translation>Engels</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation>Spaans</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation>Italiaans</translation>
    </message>
    <message>
        <source>French</source>
        <translation>Frans</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation>Russisch</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation>Deens</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation>Slovaaks</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation>Hongaars</translation>
    </message>
    <message>
        <source>Czech</source>
        <translation>Tsjechisch</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation>Nederlands</translation>
    </message>
    <message>
        <source>Portuguese</source>
        <translation>Portugees</translation>
    </message>
    <message>
        <source>Ukrainian</source>
        <translation>Ukraïns</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation>Grieks</translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation>Catalaans</translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation>Fins</translation>
    </message>
    <message>
        <source>Irish</source>
        <translation>Iers</translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation>Litouws</translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation>Zweeds</translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation>Sloveens</translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation>Afrikaans</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Kies een map</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation>Inverteren</translation>
    </message>
    <message>
        <source>Scribus Crash</source>
        <translation>Scribus is gecrashed</translation>
    </message>
    <message>
        <source>Scribus crashes due to Signal #%1</source>
        <translation>Scribus is gecrashed met signaal #%1</translation>
    </message>
    <message>
        <source>Font System Initialized</source>
        <translation>Lettertypen geïnitialiseerd</translation>
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
        <translation>Laag</translation>
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
        <source>All</source>
        <translation>Alles</translation>
    </message>
</context>
<context>
    <name>ScribusWin</name>
    <message>
        <source>&amp;Leave Anyway</source>
        <translation>Toch a&amp;fsluiten</translation>
    </message>
    <message>
        <source>C&amp;lose Anyway</source>
        <translation>Toch s&amp;luiten</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>Document:</source>
        <translation>Het document:</translation>
    </message>
    <message>
        <source>has been changed since the last save.</source>
        <translation>is gewijzigd na de laatste keer opslaan.</translation>
    </message>
    <message>
        <source>&amp;Save Now</source>
        <translation>Nu op&amp;slaan</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
</context>
<context>
    <name>SeList</name>
    <message>
        <source>Show Page Previews</source>
        <translation>Paginavoorbeelden tonen</translation>
    </message>
</context>
<context>
    <name>SeView</name>
    <message>
        <source>Show Template Names</source>
        <translation>Sjabloonnamen tonen</translation>
    </message>
</context>
<context>
    <name>SearchReplace</name>
    <message>
        <source>Search/Replace</source>
        <translation>Zoeken/vervangen</translation>
    </message>
    <message>
        <source>Search for:</source>
        <translation>Zoeken naar:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Tekst</translation>
    </message>
    <message>
        <source>Paragraph Style</source>
        <translation>Alineastijl</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Lettertype</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Lettergrootte</translation>
    </message>
    <message>
        <source>Font Effects</source>
        <translation>Lettertype-effecten</translation>
    </message>
    <message>
        <source>Fill Color</source>
        <translation>Vulkleur</translation>
    </message>
    <message>
        <source>Fill Shade</source>
        <translation>Vultint</translation>
    </message>
    <message>
        <source>Stroke Color</source>
        <translation>Lijnkleur</translation>
    </message>
    <message>
        <source>Stroke Shade</source>
        <translation>Lijntint</translation>
    </message>
    <message>
        <source>Left</source>
        <translation>Links</translation>
    </message>
    <message>
        <source>Center</source>
        <translation>Midden</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Rechts</translation>
    </message>
    <message>
        <source>Block</source>
        <translation>Blok</translation>
    </message>
    <message>
        <source>Forced</source>
        <translation>Geforceerd</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>Replace with:</source>
        <translation>Vervangen door:</translation>
    </message>
    <message>
        <source>&amp;Whole Word</source>
        <translation>&amp;Heel woord</translation>
    </message>
    <message>
        <source>&amp;Ignore Case</source>
        <translation>Hoofdletteron&amp;gevoelig</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Zoeken</translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation>&amp;Vervangen</translation>
    </message>
    <message>
        <source>Replace &amp;All</source>
        <translation>&amp;Alles vervangen</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Sluiten</translation>
    </message>
    <message>
        <source>Search finished</source>
        <translation>Zoeken voltooid</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>W&amp;issen</translation>
    </message>
</context>
<context>
    <name>SeitenPal</name>
    <message>
        <source>Arrange Pages</source>
        <translation>Pagina&apos;s herschikken</translation>
    </message>
    <message>
        <source>Available Templates:</source>
        <translation>Beschikbare sjablonen:</translation>
    </message>
    <message>
        <source>Document Pages:</source>
        <translation>Documentpagina&apos;s:</translation>
    </message>
    <message>
        <source>Facing Pages</source>
        <translation>Tegenover elkaar</translation>
    </message>
    <message>
        <source>Left Page first</source>
        <translation>Linkerpagina eerst</translation>
    </message>
    <message>
        <source>Drag Pages or Template Pages onto the Trashbin to delete them.</source>
        <translation>Sleep pagina&apos;s of Sjabloonpagina&apos;s naar de prullenbak om ze te verwijderen.</translation>
    </message>
    <message>
        <source>Previews all the pages of your document.</source>
        <translation>Toont voorbeelden van alle pagina&apos;s in uw document.</translation>
    </message>
    <message>
        <source>Here are all your Templates, to create a new Page
drag a Template to the Pageview below.</source>
        <translation>Hier zijn al uw sjablonen. Sleep, om een nieuwe pagina
aan te maken, een sjabloon naar de paginaweergave hieronder.</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normaal</translation>
    </message>
</context>
<context>
    <name>SelectFields</name>
    <message>
        <source>Select Fields</source>
        <translation>Velden selecteren</translation>
    </message>
    <message>
        <source>Available Fields</source>
        <translation>Beschikbare velden</translation>
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
        <translation>Geselecteerde velden</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
</context>
<context>
    <name>ShadeButton</name>
    <message>
        <source>Other...</source>
        <translation>Overig...</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation>&amp;Tint:</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Tint</translation>
    </message>
</context>
<context>
    <name>SideBar</name>
    <message>
        <source>No Style</source>
        <translation>Geen stijl</translation>
    </message>
</context>
<context>
    <name>Spalette</name>
    <message>
        <source>No Style</source>
        <translation>Geen stijl</translation>
    </message>
</context>
<context>
    <name>StilFormate</name>
    <message>
        <source>Edit Styles</source>
        <translation>Stijlen bewerken</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>Toe&amp;voegen</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nieuw</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>Be&amp;werken</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;upliceren</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>Op&amp;slaan</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Kopie van %1</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation>Nieuwe stijl</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>Do you really want do delete this Style?</source>
        <translation type="obsolete">Wil je echt deze stijl verwijderen?</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Nee</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Ja</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documenten (*.sla *.sla.gz *.scd *.scd.gz);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documenten (*.sla *.scd);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation>Wilt u deze stijl werkelijk verwijderen?</translation>
    </message>
</context>
<context>
    <name>StoryEditor</name>
    <message>
        <source>Story Editor</source>
        <translation>Story-editor</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nieuw</translation>
    </message>
    <message>
        <source>&amp;Reload Text from Frame</source>
        <translation>Tekst uit frame &amp;herladen</translation>
    </message>
    <message>
        <source>&amp;Save to File...</source>
        <translation>Op&amp;slaan naar bestand...</translation>
    </message>
    <message>
        <source>&amp;Load from File...</source>
        <translation>&amp;Laden uit bestand...</translation>
    </message>
    <message>
        <source>Save &amp;Document</source>
        <translation>&amp;Document opslaan</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame and Exit</source>
        <translation>Tekstframe bijwerken en sl&amp;uiten</translation>
    </message>
    <message>
        <source>&amp;Exit Without Updating Text Frame</source>
        <translation>Sluit&amp;en zonder tekstframe bij te werken</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>&amp;Alles selecteren</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Kni&amp;ppen</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiëren</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>P&amp;lakken</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>W&amp;issen</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation>&amp;Zoeken/vervangen...</translation>
    </message>
    <message>
        <source>&amp;Insert Special...</source>
        <translation>&amp;Invoegen speciaal...</translation>
    </message>
    <message>
        <source>&amp;Edit Styles...</source>
        <translation>Stijlen b&amp;ewerken...</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview...</source>
        <translation>&amp;Lettertypeweergave...</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame</source>
        <translation>Tekstframe bij&amp;werken</translation>
    </message>
    <message>
        <source>&amp;Background...</source>
        <translation>&amp;Achtergrond...</translation>
    </message>
    <message>
        <source>&amp;Display Font...</source>
        <translation>Weergave&amp;lettertype...</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Bestand</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>Be&amp;werken</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation>In&amp;stellingen</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Bestand</translation>
    </message>
    <message>
        <source>Clear all Text</source>
        <translation>Alle tekst wissen</translation>
    </message>
    <message>
        <source>Load Text from File</source>
        <translation>Tekst laden uit bestand</translation>
    </message>
    <message>
        <source>Save Text to File</source>
        <translation>Tekst opslaan naar bestand</translation>
    </message>
    <message>
        <source>Update Text Frame and Exit</source>
        <translation>Tekstframe bijwerken en sluiten</translation>
    </message>
    <message>
        <source>Exit Without Updating Text Frame</source>
        <translation>Sluiten zonder tekstframe bij te werken</translation>
    </message>
    <message>
        <source>Reload Text from Frame</source>
        <translation>Tekst uit frame herladen</translation>
    </message>
    <message>
        <source>Update Text Frame</source>
        <translation>Tekstframe bijwerken</translation>
    </message>
    <message>
        <source>Search/Replace</source>
        <translation>Zoeken/vervangen</translation>
    </message>
    <message>
        <source>Current Paragraph:</source>
        <translation>Huidige alinea:</translation>
    </message>
    <message>
        <source>Words: </source>
        <translation>Woorden:</translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation>Tekens:</translation>
    </message>
    <message>
        <source>Totals:</source>
        <translation>Totalen:</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation>Alinea&apos;s:</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>Do you want to save your changes?</source>
        <translation>Wilt u uw wijzigingen opslaan?</translation>
    </message>
    <message>
        <source>&amp;Insert Special</source>
        <translation type="obsolete">&amp;Invoegen speciaal</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview</source>
        <translation type="obsolete">&amp;Lettertypeweergave</translation>
    </message>
    <message>
        <source>Do you really want to lose all your Changes?</source>
        <translation>Wilt u werkelijk al uw wijzigingen verwerpen?</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation>Wilt u werkelijk alle tekst wissen?</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Tekstbestanden (*.txt);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Opslaan als</translation>
    </message>
    <message>
        <source>&amp;Smart text selection</source>
        <translation>Intelligente tekst&amp;selectie</translation>
    </message>
</context>
<context>
    <name>StyleSelect</name>
    <message>
        <source>Underline</source>
        <translation>Onderstreept</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation>Kleinkapitalen</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation>Subscript</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation>Superscript</translation>
    </message>
    <message>
        <source>Strike Out</source>
        <translation>Doorhalen</translation>
    </message>
    <message>
        <source>Outline Text</source>
        <translation>Outline tekst</translation>
    </message>
</context>
<context>
    <name>SxwDialog</name>
    <message>
        <source>OO.o Writer Importer Options</source>
        <translation type="obsolete">Opties voor OpenOffice.org Writer importeren</translation>
    </message>
    <message>
        <source>Update paragraph styles</source>
        <translation>Alineastijlen bijwerken</translation>
    </message>
    <message>
        <source>If there already exists a paragraph style with the same
name than current OO.o document&apos;s paragraph should the style
in Scribus be edited to match the one being imported
or left untouched</source>
        <translation type="obsolete">Als er in uw Scribus-document reeds een alineastijl bestaat met dezelfde
naam als de geïmporteerde OpenOffice.org-alina, wilt u dat de stijl in Scribus
dan wordt bijgewerkt naar de versie uit OpenOffice.org, of wilt u de Scribus-
stijl ongemoeid laten?</translation>
    </message>
    <message>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation>Documentnaam als prefix voor alineastijlen gebruiken</translation>
    </message>
    <message>
        <source>Should importer add the name of the document
on front of the paragraph style name in Scirubs</source>
        <translation type="obsolete">Selecteer deze optie als u wilt dat de importer de naam
van het document toevoegt aan de alineastijlnaam in Scribus</translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation>Deze vraag niet meer stellen</translation>
    </message>
    <message>
        <source>Should the importer always use currently
set value when importing OO.o document and
never ask your confirmation again</source>
        <translation type="obsolete">Selecteer deze optie als u wilt dat Scribus de volgende keer
dezelfde instelling gebruikt als u nu opgeeft, en deze dialoog
dan niet meer toont</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>If a paragraph style already exists with the same name as the current
OpenOffice.org document&apos;s paragraph, should the style in Scribus be
edited to match the one being imported, or left untouched</source>
        <translation>Als er reeds een paragraafstijl bestaat met dezelfde naam als de huidige
paragraaf in het OpenOffice.org-document, wilt u dan de stijl in Scribus
aanpassen aan de geïmporteerde stijl, of deze laten zoals ze is
</translation>
    </message>
    <message>
        <source>Should importer add the name of the document
on front of the paragraph style name in Scribus</source>
        <translation>Wilt u dat de importer de naam van het document aan de
paragraaf-stijlnamen toevoegt in Scribus</translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Importer Options</source>
        <translation>Instellingen voor OpenOffice.org Writer-import</translation>
    </message>
    <message>
        <source>Should the importer always use currently
set value when importing OpenOffice.org document and
never ask your confirmation again</source>
        <translation>Wilt u dat de importer deze instellingen steeds gebruikt
zonder u telkens om bevestiging te vragen</translation>
    </message>
    <message>
        <source>Pack paragraph styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Group paragraph styles by attributes.
Less paragraph styles but controlling them may be hard.
Should be used if it is known that text must not be edited
after importing.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabManager</name>
    <message>
        <source>Manage Tabulators</source>
        <translation>Tabulators beheren</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
</context>
<context>
    <name>Tabruler</name>
    <message>
        <source>Left</source>
        <translation>Links</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Rechts</translation>
    </message>
    <message>
        <source>Full Stop</source>
        <translation>Volledige stop</translation>
    </message>
    <message>
        <source>Comma</source>
        <translation>Komma</translation>
    </message>
    <message>
        <source>Center</source>
        <translation>Centreren</translation>
    </message>
    <message>
        <source>&amp;Position:</source>
        <translation>&amp;Positie:</translation>
    </message>
    <message>
        <source>First &amp;Line:</source>
        <translation>Eerste &amp;regel:</translation>
    </message>
    <message>
        <source>Ind&amp;ent:</source>
        <translation type="obsolete">Inspring&amp;en:</translation>
    </message>
    <message>
        <source>Delete All</source>
        <translation>Alles verwijderen</translation>
    </message>
    <message>
        <source>Indentation for first line of the paragraph</source>
        <translation>Inspringen voor de eerste regel van de alinea</translation>
    </message>
    <message>
        <source>Indentation from the left for the whole paragraph</source>
        <translation>Inspringen vanaf links voor de hele alinea</translation>
    </message>
    <message>
        <source>Delete all Tabulators</source>
        <translation>Alle tabstops verwijderen</translation>
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
        <translation>in</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>Left Ind&amp;ent:</source>
        <translation>Links inspring&amp;en:</translation>
    </message>
</context>
<context>
    <name>Tree</name>
    <message>
        <source>Outline</source>
        <translation>Outline</translation>
    </message>
    <message>
        <source>Element</source>
        <translation>Element</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Type</translation>
    </message>
    <message>
        <source>Information</source>
        <translation>Info</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation>De naam &quot;%1&quot; is niet uniek.
Kies een andere naam.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
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
        <translation>Lettertype:</translation>
    </message>
    <message>
        <source>Group </source>
        <translation>Groep</translation>
    </message>
    <message>
        <source>Image</source>
        <translation>Afbeelding</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Tekst</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Lijn</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Polygoon</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation>Polylijn</translation>
    </message>
    <message>
        <source>PathText</source>
        <translation>Tekstpad</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Pagina</translation>
    </message>
</context>
<context>
    <name>ValueDialog</name>
    <message>
        <source>Insert value</source>
        <translation>Waarde invoegen</translation>
    </message>
    <message>
        <source>Enter a value then press OK.</source>
        <translation>Voer een waarde in en klik op OK.</translation>
    </message>
    <message>
        <source>Enter a value then press OK</source>
        <translation>Voer een waarde in en klik op OK</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Atl+O</translation>
    </message>
    <message>
        <source>Send your value to the script</source>
        <translation>Geef uw waarde door aan het script</translation>
    </message>
</context>
<context>
    <name>VlnaDialog</name>
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
        <source>&amp;OK</source>
        <comment>short words plugin</comment>
        <translation type="unfinished">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Info and
Languages</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Replace defaults by user config</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>When the user config file exists 
(%1)
you can choose if you want to append your config
to the global configuration by unchecked button.

You can replace predefined values by yours
with checked button too.</source>
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
    <message>
        <source>Short Words for Scribus</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Available in the following languages</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>About Short Words</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>WerkToolB</name>
    <message>
        <source>Tools</source>
        <translation>Gereedschappen</translation>
    </message>
    <message>
        <source>Select Items</source>
        <translation>Items selecteren</translation>
    </message>
    <message>
        <source>Insert Text Frame</source>
        <translation>Tekstframe invoegen</translation>
    </message>
    <message>
        <source>Insert Picture</source>
        <translation>Afbeelding invoegen</translation>
    </message>
    <message>
        <source>Insert Table</source>
        <translation>Tabel invoegen</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation>Eigenschappen...</translation>
    </message>
    <message>
        <source>Insert Polygons</source>
        <translation>Polygoon invoegen</translation>
    </message>
    <message>
        <source>Insert Lines</source>
        <translation>Lijnen invoegen</translation>
    </message>
    <message>
        <source>Insert Bezier Curves</source>
        <translation>Beziercurven invoegen</translation>
    </message>
    <message>
        <source>Insert Freehand Line</source>
        <translation>Vrijehand-curve invoegen</translation>
    </message>
    <message>
        <source>Rotate Item</source>
        <translation>Item roteren</translation>
    </message>
    <message>
        <source>Zoom in or out</source>
        <translation>In- of uitzoomen</translation>
    </message>
    <message>
        <source>Edit Contents of Frame</source>
        <translation>Inhoud van frame bewerken</translation>
    </message>
    <message>
        <source>Edit the text with the Story Editor</source>
        <translation>Tekst met de story-editor bewerken</translation>
    </message>
    <message>
        <source>Link Text Frames</source>
        <translation>Tekstframes koppelen</translation>
    </message>
    <message>
        <source>Unlink Text Frames</source>
        <translation>Tekstframes loskoppelen</translation>
    </message>
    <message>
        <source>Do measurements</source>
        <translation>Metingen uitvoeren</translation>
    </message>
    <message>
        <source>Draw various Shapes</source>
        <translation>Verschillende vormen tekenen</translation>
    </message>
</context>
<context>
    <name>WerkToolBP</name>
    <message>
        <source>PDF Tools</source>
        <translation>PDF-gereedschappen</translation>
    </message>
    <message>
        <source>Button</source>
        <translation>Knop</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation>Tekstveld</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation>Checkbox</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation>Combobox</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation>Listbox</translation>
    </message>
    <message>
        <source>Insert PDF Fields</source>
        <translation>PDF-velden invoegen</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Tekst</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Koppeling</translation>
    </message>
    <message>
        <source>Insert PDF Annotations</source>
        <translation>PDF-annotaties invoegen</translation>
    </message>
</context>
<context>
    <name>ZAuswahl</name>
    <message>
        <source>Select Character:</source>
        <translation>Karakter selecteren:</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation>&amp;Invoegen</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>W&amp;issen</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Sluiten</translation>
    </message>
    <message>
        <source>Insert the characters at the cursor in the text</source>
        <translation>Voegt de tekens in op de huidige cursorpositie</translation>
    </message>
    <message>
        <source>Delete the current selection(s).</source>
        <translation>Verwijdert de huidige selectie(s).</translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing.</source>
        <translation>Sluit deze dialoog om verder te werken aan de tekst.</translation>
    </message>
</context>
<context>
    <name>gtFileDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation>Selecteer de te gebruiken importer</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automatisch</translation>
    </message>
    <message>
        <source>Get text only</source>
        <translation>Alleen de tekst ophalen</translation>
    </message>
    <message>
        <source>Import text without any formatting</source>
        <translation>Tekst importeren zonder enige opmaak</translation>
    </message>
    <message>
        <source>Importer:</source>
        <translation>Importer:</translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation>Codering:</translation>
    </message>
</context>
<context>
    <name>gtImporterDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation>Selecteer de te gebruiken importer</translation>
    </message>
    <message>
        <source></source>
        <translation></translation>
    </message>
    <message>
        <source>Remember association</source>
        <translation>Deze associatie onhouden</translation>
    </message>
    <message>
        <source>Remember the file extension - importer association
and do not ask again to select an importer for
files of this type.</source>
        <translation>Onthoudt de bestandsnaamextensie-importer associatie.
De volgende keer wordt bij het importeren van een bestand
van dit type dezelfde importer gebruikt.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
</context>
<context>
    <name>nftdialog</name>
    <message>
        <source>New From Template</source>
        <translation>Nieuw van sjabloon</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>Ve&amp;rwijderen</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Openen</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Alles</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Paginagrootte</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Kleuren</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Omschrijving</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation>Gebruik</translation>
    </message>
    <message>
        <source>Created with</source>
        <translation>Aangemaakt met</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Datum</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Auteur</translation>
    </message>
    <message>
        <source>Downloading Templates</source>
        <translation>Sjablonen downloaden</translation>
    </message>
    <message>
        <source>Document templates can be found at http://www.scribus.net/ in the Downloads section.</source>
        <translation>U kunt documentsjablonen vinden op http://www.scribus.net/ in de Downloads-sectie.</translation>
    </message>
    <message>
        <source>Installing Templates</source>
        <translation>Sjablonen installeren</translation>
    </message>
    <message>
        <source>Extract the package to the template directory ~/.scribus/templates for the current user or PREFIX/share/scribus/templates for all users in the system.</source>
        <translation>Pak het pakketje uit in de sjablonenmap van Scibus: ~/.scribus/templates voor de huidige gebruiker of PREFIX/share/scribus/templates voor alle gebruikers van het systeem.</translation>
    </message>
    <message>
        <source>Preparing a template</source>
        <translation>Sjabloon prepareren</translation>
    </message>
    <message>
        <source>Make sure images and fonts you use can be used freely. If fonts cannot be shared do not collect them when saving as a template.</source>
        <translation>Vergewis u ervan dat afbeeldingen en lettertypen vrij gebruikt kunnen worden. Als lettertypen niet kunnen worden gedeeld, verzamel deze dan niet als u een document opslaat als een sjabloon.</translation>
    </message>
    <message>
        <source>The template creator should also make sure that the Installing Templates section above applies to their templates as well. This means a user should be able to download a template package and be able to extract them to the template directory and start using them.</source>
        <translation>Wie een sjabloon maakt dient ook zeker te zijn dat het installeren van de sjabllon goed zal werken, zodat een gebruiker deze eenvoudig kan uitpakken en beginnen te gebruiken.</translation>
    </message>
    <message>
        <source>Removing a template</source>
        <translation>Sjablonen verwijderen</translation>
    </message>
    <message>
        <source>Removing a template from the New From Template dialog will only remove the entry from the template.xml, it will not delete the document files. A popup menu with remove is only shown if you have write access to the template.xml file.</source>
        <translation>Als u een sjabloon verwijdert wordt enkel de ingang in het bestand template.xml verwijderd, niet de documentbestanden zelf. De optie verwijderen wordt enkel weergegeven als u schrijftoegang hebt tot het template-xml-bestand.</translation>
    </message>
    <message>
        <source>Translating template.xml</source>
        <translation>Het template.xml-bestand vertalen</translation>
    </message>
    <message>
        <source>Copy an existing template.xml to a file called template.lang_COUNTRY.xml (use the same lang code that is present in the qm file for your language), for example template.fi.xml for Finnish language template.xml. The copy must be located in the same directory as the original template.xml so Scribus can load it.</source>
        <translation>Dit kan door een bestaand template.xml te kopiëren naar een bestand met de naam template.lang_LANDCODE.xml (gebruik dezelfde landcode als het .ts-bestand voor uw taal), bijvoorbeeld template.nl.xml voor de Nederlandse vertaling van sjabloonnamen. De kopie dient zich in dezelfde map te bevingen als het oorspronkelijke bestand, zodat Scribus het kan vinden.</translation>
    </message>
</context>
<context>
    <name>satdialog</name>
    <message>
        <source>Save as Template</source>
        <translation>Opslaan als sjabloon</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Categorie</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Paginagrootte</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Kleuren</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Omschrijving</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation>Gebruik</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Auteur</translation>
    </message>
    <message>
        <source>Email</source>
        <translation>E-mail</translation>
    </message>
    <message>
        <source>More Details</source>
        <translation>Meer informatie</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Less Details</source>
        <translation>Minder informatie</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation>Letter (US)</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation>Tabloid</translation>
    </message>
    <message>
        <source>landscape</source>
        <translation>liggend</translation>
    </message>
    <message>
        <source>portrait</source>
        <translation>staand</translation>
    </message>
    <message>
        <source>custom</source>
        <translation>aangepast</translation>
    </message>
</context>
<context>
    <name>tfDia</name>
    <message>
        <source>Create filter</source>
        <translation>Filter aanmaken</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>W&amp;issen</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>Choose a previously saved filter</source>
        <translation>Kies een eerder bewaard filter</translation>
    </message>
    <message>
        <source>Give a name to this filter for saving</source>
        <translation>Geef dit filter een naam om op te slaan</translation>
    </message>
    <message>
        <source>Give a name for saving</source>
        <translation>Voer een naam in</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
</context>
<context>
    <name>tfFilter</name>
    <message>
        <source>Disable or enable this filter row</source>
        <translation>Deze filterregel in- of uitschakelen</translation>
    </message>
    <message>
        <source>Remove this filter row</source>
        <translation>Deze filterregel verwijderen</translation>
    </message>
    <message>
        <source>Add a new filter row</source>
        <translation>Een nieuwe regel toevoegen</translation>
    </message>
    <message>
        <source>to</source>
        <translation>aan</translation>
    </message>
    <message>
        <source>and</source>
        <translation>en</translation>
    </message>
    <message>
        <source>remove match</source>
        <translation>verwijder overeenkomst</translation>
    </message>
    <message>
        <source>do not remove match</source>
        <translation>verwijder overeenkomst niet</translation>
    </message>
    <message>
        <source>words</source>
        <translation>woorden</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Verwijderen</translation>
    </message>
    <message>
        <source>Replace</source>
        <translation>Vervangen</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Toepassen</translation>
    </message>
    <message>
        <source>Value at the left is a regular expression</source>
        <translation>De waarde links is een reguliere expressie</translation>
    </message>
    <message>
        <source>with</source>
        <translation>met</translation>
    </message>
    <message>
        <source>paragraph style</source>
        <translation>alinastijl</translation>
    </message>
    <message>
        <source>all instances of</source>
        <translation>alle instanties van</translation>
    </message>
    <message>
        <source>all paragraphs</source>
        <translation>alle alinea&apos;s</translation>
    </message>
    <message>
        <source>paragraphs starting with</source>
        <translation>alinea&apos;s die beginnen met</translation>
    </message>
    <message>
        <source>paragraphs with less than</source>
        <translation>alinea&apos;s met minder dan</translation>
    </message>
    <message>
        <source>paragraphs with more than</source>
        <translation>alinea&apos;s met meer dan</translation>
    </message>
</context>
</TS>
