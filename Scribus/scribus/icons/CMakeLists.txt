INCLUDE_DIRECTORIES(
${CMAKE_SOURCE_DIR}
${CMAKE_SOURCE_DIR}/scribus
)

INSTALL(FILES
AddNode.png
AddPoint.png
AllCaps.png
AppIcon.png
AppIcon2.png
BevelJoin.png
BezierClose.png
ButtCap.png
Corner.xpm
DelPoint.png
DeleteNode.png
DragPix.xpm
DrawFrame.xpm
DrawFreeLine.png
DrawImageFrame.xpm
DrawLatexFrame.xpm
DrawPolylineFrame.xpm
DrawTable.xpm
DrawTextFrame.xpm
Editm.xpm
Editm16.png
HandC.xpm
Hoch.xpm
Kapital.xpm
Kern.xpm
Kreise.xpm
Kreuz.xpm
Lupe.xpm
LupeZ.xpm
LupeZm.xpm
MiterJoin.png
MoveAsym.png
MoveKontrol.png
MoveNode.png
MoveSym.png
NoPrint.png
PolyCut.png
Reset1Node.png
ResetNode.png
Revers.png
Rotieren2.png
RoundCap.png
RoundJoin.png
Spacing.xpm
Splash.png
Split.png
SquareCap.png
Stift.xpm
Stift16.xpm
Strike.xpm
Tief.xpm
Unter.xpm
Winkel.xpm
Zeichen.xpm
above.png
acroread16.png
acroread22.png
acroread32.png
alert.png
below.png
beziertool.png
beziertool16.png
blend.png
chain-closed.png
chain-open.png
checkdoc.png
clear_right.png
cmsOff.png
cmsOn.png
cmyk.png
colorpicker.png
colorpickercursor.png
compfile.png
compfile16.png
configure.png
crop.png
curve.png
curvebezier.png
curvelinear.png
dist.png
dist22.png
doc.png
docattributes.png
document2.png
documentinfo.png
documentinfo32.png
ellipsis.png
exit.png
exit22.png
expand.png
externaltools.png
find.png
find16.png
firstline.png
flow-bounding.png
flow-contour.png
flow-frame.png
flow-none.png
font.png
font_otf.png
font_otf16.png
font_subst16.png
font_truetype.png
font_truetype16.png
font_type1.png
font_type1_16.png
framenoresize.png
frameresize.png
goto.png
goto16.png
group.png
guides.png
hmirror.png
hyphenate.png
invert.png
irreg.png
key_bindings.png
launch.png
launch16.png
layer-outline.png
leftindent.png
linespacing.png
linespacing2.png
locked.png
lower-to-bottom.png
lower.png
misc.png
mover.png
noicon.xpm
ok.png
ok22.png
ooo_draw.png
ooo_writer.png
outlined.png
pdf.png
penciladd.png
pencilsub.png
plugins.png
postscript.png
previewOff.png
previewOn.png
printer.png
python.png
raise-to-top.png
raise.png
register.png
reload.png
reload16.png
revert.png
rgb.png
rightindent.png
rotate_ccw.png
rotate_cw.png
scrap.png
screen.png
scribus_logo.png
scribusdoc.png
scribusdoc16.png
scribus.png
shade.png
shadow.png
shortwords.png
spacewidth.png
spiral.png
spline.png
spline16.png
spot.png
tab.png
tabtocindex.png
testfill.png
textbase.png
textkern.png
textscaleh.png
textscalev.png
tools.png
trashcan.png
trashcan2.png
triangle.png
txt.png
typography.png
u_align.png
u_arrow.png
u_create.png
u_cut.png
u_delete.png
u_disableprint.png
u_enableprint.png
u_eps.png
u_fill.png
u_fliph.png
u_flipv.png
u_font.png
u_group.png
u_line.png
u_lock.png
u_margins.png
u_margins_locked.png
u_move.png
u_multiple.png
u_redo.png
u_redo16.png
u_resize.png
u_rotate.png
u_scale_image.png
u_shade.png
u_shape.png
u_svg.png
u_transp.png
u_undo.png
u_undo16.png
u_unlock.png
ungroup.png
unlock.png
vectorgfx.png
view.png
viewmag1.png
viewmagin.png
viewmagout.png
vmirror.png
vpl.png
wizard.png
wizard16.png
wordsOnly.png

  DESTINATION ${ICONDIR}
)

INSTALL(FILES
16/align-horizontal-center.png
16/align-horizontal-left-out.png
16/align-horizontal-left.png
16/align-horizontal-right-out.png
16/align-horizontal-right.png
16/align-vertical-bottom-out.png
16/align-vertical-bottom.png
16/align-vertical-center.png
16/align-vertical-top-out.png
16/align-vertical-top.png
16/checkbox.png
16/close.png
16/color-fill.png
16/color-picker.png
16/color-stroke.png
16/combobox.png
16/distribute-horizontal-center.png
16/distribute-horizontal-equal.png
16/distribute-horizontal-left.png
16/distribute-horizontal-right.png
16/distribute-vertical-bottom.png
16/distribute-vertical-center.png
16/distribute-vertical-equal.png
16/distribute-vertical-top.png
16/document-new.png
16/document-open.png
16/document-print-preview.png
16/document-print.png
16/document-properties.png
16/document-save-as.png
16/document-save.png
16/draw-arrow-back.png
16/draw-arrow-down.png
16/draw-arrow-forward.png
16/draw-arrow-up.png
16/draw-bezier-curves.png
16/draw-cross.png
16/draw-donut.png
16/draw-ellipse.png
16/draw-freehand.png
16/draw-halfcircle1.png
16/draw-halfcircle2.png
16/draw-halfcircle3.png
16/draw-halfcircle4.png
16/draw-path.png
16/draw-polygon.png
16/draw-rectangle.png
16/draw-square-inverted-corners.png
16/draw-star.png
16/draw-triangle.png
16/draw-triangle1.png
16/draw-triangle2.png
16/draw-triangle3.png
16/draw-triangle4.png
16/edit-clear.png
16/edit-copy.png
16/edit-cut.png
16/edit-delete.png
16/edit-find-replace.png
16/edit-paste.png
16/edit-redo.png
16/edit-select-all.png
16/edit-undo.png
16/flip-object-horizontal.png
16/flip-object-vertical.png
16/format-justify-center.png
16/format-justify-fill-block.png
16/format-justify-fill.png
16/format-justify-left.png
16/format-justify-right.png
16/go-bottom.png
16/go-down.png
16/go-first.png
16/go-home.png
16/go-last.png
16/go-next.png
16/go-previous.png
16/go-top.png
16/go-up.png
16/help-browser.png
16/image-x-generic.png
16/information.png
16/insert-button.png
16/insert-image.png
16/insert-latex.png
16/insert-table.png
16/insert-text-frame.png
16/layer-flow-around.png
16/list-add.png
16/list-box.png
16/list-remove.png
16/lock-unlocked.png
16/lock.png
16/measure.png
16/page-3fold.png
16/page-4fold.png
16/page-doublesided.png
16/page-simple.png
16/pdf-annotations.png
16/pointer.png
16/preflight-verifier.png
16/show-object.png
16/story-editor.png
16/stroke-cap-butt.png
16/stroke-cap-round.png
16/stroke-cap-square.png
16/stroke-join-bevel.png
16/stroke-join-miter.png
16/stroke-join-round.png
16/text-field.png
16/text-frame-link.png
16/text-frame-unlink.png
16/transform-rotate.png
16/zoom-in.png
16/zoom-original.png
16/zoom-out.png
16/zoom.png
  DESTINATION ${ICONDIR}16
)

INSTALL(FILES
22/align-horizontal-center.png
22/align-horizontal-left-out.png
22/align-horizontal-left.png
22/align-horizontal-right-out.png
22/align-horizontal-right.png
22/align-vertical-bottom-out.png
22/align-vertical-bottom.png
22/align-vertical-center.png
22/align-vertical-top-out.png
22/align-vertical-top.png
22/checkbox.png
22/close.png
22/color-picker.png
22/combobox.png
22/dialog-error.png
22/dialog-warning.png
22/distribute-horizontal-center.png
22/distribute-horizontal-equal.png
22/distribute-horizontal-left.png
22/distribute-horizontal-margin.png
22/distribute-horizontal-page.png
22/distribute-horizontal-right.png
22/distribute-horizontal-x.png
22/distribute-vertical-bottom.png
22/distribute-vertical-center.png
22/distribute-vertical-equal.png
22/distribute-vertical-margin.png
22/distribute-vertical-page.png
22/distribute-vertical-top.png
22/distribute-vertical-y.png
22/document-new.png
22/document-open.png
22/document-print-preview.png
22/document-print.png
22/document-properties.png
22/document-save-as.png
22/document-save.png
22/draw-arrow-back.png
22/draw-arrow-down.png
22/draw-arrow-forward.png
22/draw-arrow-up.png
22/draw-bezier-curves.png
22/draw-cross.png
22/draw-donut.png
22/draw-ellipse.png
22/draw-freehand.png
22/draw-halfcircle1.png
22/draw-halfcircle2.png
22/draw-halfcircle3.png
22/draw-halfcircle4.png
22/draw-path.png
22/draw-polygon.png
22/draw-polyline.png
22/draw-rectangle.png
22/draw-square-inverted-corners.png
22/draw-star.png
22/draw-triangle.png
22/draw-triangle1.png
22/draw-triangle2.png
22/draw-triangle3.png
22/draw-triangle4.png
22/edit-clear.png
22/edit-copy.png
22/edit-cut.png
22/edit-delete.png
22/edit-find-replace.png
22/edit-paste.png
22/edit-redo.png
22/edit-select-all.png
22/edit-undo.png
22/go-bottom.png
22/go-down.png
22/go-first.png
22/go-home.png
22/go-last.png
22/go-next.png
22/go-previous.png
22/go-top.png
22/go-up.png
22/image-x-generic.png
22/insert-button.png
22/insert-image.png
22/insert-latex.png
22/insert-table.png
22/insert-text-frame.png
22/list-add.png
22/list-box.png
22/list-remove.png
22/lock-unlocked.png
22/lock.png
22/measure.png
22/pdf-annotations.png
22/pointer.png
22/preflight-verifier.png
22/story-editor.png
22/text-field.png
22/text-frame-link.png
22/text-frame-unlink.png
22/transform-rotate.png
22/transform-shear-down.png
22/transform-shear-left.png
22/transform-shear-right.png
22/transform-shear-up.png
22/zoom-in.png
22/zoom-original.png
22/zoom-out.png
22/zoom.png

  DESTINATION ${ICONDIR}22
)

INSTALL(FILES
32/page-3fold.png
32/page-4fold.png
32/page-doublesided.png
32/page-simple.png
  DESTINATION ${ICONDIR}32
)
