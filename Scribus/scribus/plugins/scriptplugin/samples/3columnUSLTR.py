from scribus import *
Margins = (50, 50, 50, 50)
size=(612,792)
if NewDoc(Paper_Letter, Margins, Landscape, 1, Points, NoFacingPages, FirstPageLeft):
	a = CreateText(50, 50, 230, 512)
	SetTextAlignment(1,a)
	SetText("Column A", a)
	SetFontSize(12, a)
	b = CreateText(280, 50, 230, 512)
	SetTextAlignment(1,b)
	SetText("Column B", b)
	SetFontSize(12, b)
	c = CreateText(510, 50, 230, 512)
	SetTextAlignment(1,b)
	SetText("Column C", c)
	SetFontSize(12, c)
	SaveDocAs("3columnUS.sla")
	CloseDoc()

