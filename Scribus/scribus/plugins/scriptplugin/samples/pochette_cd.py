from scribus import *
SetUnit(1)
Margins = (0, 0, 0, 0)
Paper_A4 = (210, 297)
if NewDoc(Paper_A4, Margins, 1, 1, 1, NoFacingPages, FirstPageLeft):
	NewPage(-1)
	GotoPage(1)
	CreateLayer("normal")
	SetActiveLayer("normal")
	a = CreateText(98.5, 20, 100, 10)
	SetText("Gabarit de pochette de CD - Face avant", a)
	SetFontSize(11, a)
	SetTextAlignment(1, a)	
	b = CreateText(28.5, 45, 120, 120)
	SetFillColor("None", b)
	c = CreateText(148.5, 45, 120, 120)
	SetFillColor("None", c)
	CreateLayer("bords_perdus")
	SetActiveLayer("bords_perdus")
	img1 = CreateImage(24.35, 41.25 , 124.20, 127.95,)
	img2 = CreateImage(148.55, 41.25 , 124.20, 127.95,)
	CreateLayer("coupe")
	SetActiveLayer("coupe")
	t1 = CreateLine(28.5, 38, 28.5, 43) 
	SetLineWidth(0.1, t1)
	t2 = CreateLine(148.5, 38, 148.5, 43)
	SetLineWidth(0.1, t2)
	t3 = CreateLine(268.5, 38, 268.5, 43) 
	SetLineWidth(0.1, t3)
	t4 = CreateLine(28.5, 172, 28.5, 167)
	SetLineWidth(0.1, t4)
	t5 = CreateLine(148.5, 172, 148.5, 167)
	SetLineWidth(0.1, t5) 
	t6 = CreateLine(268.5, 172, 268.5, 167)
	SetLineWidth(0.1, t6)
	t7 = CreateLine(21.5, 45, 26.5, 45)
	SetLineWidth(0.1, t7)
	t8 = CreateLine(21.5, 165, 26.5, 165)
	SetLineWidth(0.1, t8)
	t9 = CreateLine(270.5, 45, 275.5, 45)
	SetLineWidth(0.1, t9)
	t10 = CreateLine(270.5, 165, 275.5, 165)
	SetLineWidth(0.1, t10)
	GotoPage(2)
	SetActiveLayer("normal")
	a2 = CreateText(98.5, 20, 100, 10)
	SetText("Gabarit de pochette de CD - Face arri�re", a2)
	SetFontSize(11, a2)
	SetTextAlignment(1, a2)
	a2t = CreateText(204, 44, 78, 9)
	SetText("Mode d'emploi :", a2t)
	SetFontSize(13, a2t)
	SetTextAlignment(1, a2t)	
	a21 = CreateText(204, 54, 78, 87)
	SetText("Utilisez soit les blocs texte sur le calque Normal, soit les blocs images sur le calque Bords perdus. Bien s�r, il est possible de combiner les deux et /ou de modifier les types de blocs (convertir un bloc image en bloc texte ...).Le principe du bord perdu consiste � imprimer l�g�rement au del� du format final, pour recouper ensuite en �tant s�r de n'avoir aucunes marges.Utilisez ensuite les traits de coupe pour d�couper pr�cis�ment la pochette du CD, les traits au centre repr�sentant le pliage.", a21)
	SetFontSize(11, a21)
	SetTextAlignment(0, a21)
	b2 = CreateText(28.5, 162.10, 117, 6)
	SetText("Texte sur la tranche", b2)
	SetFontSize(9, b2)
	SetTextAlignment(1, b2)
	RotateObjectAbs(90, b2)
	SetFillColor("None", b2)
	c2 = CreateText(34.5, 45, 137.5, 117)
	SetFillColor("None", c2)
	d2 = CreateText(28.5, 162.10, 117, 6)
	SetText("Texte sur la tranche", d2)
	SetFontSize(9, d2)
	SetTextAlignment(1, d2)
	RotateObjectAbs(90, d2)
	SetFillColor("None", d2)
	MoveObject(143.5, 0, d2)
	SetActiveLayer("bords_perdus")
	img3 = CreateImage(24.35, 41.25 , 157.50, 126.50,)
	SetActiveLayer("coupe")
	t21 = CreateLine(28.5, 38, 28.5, 43) 
	SetLineWidth(0.1, t21)
	t22 = CreateLine(34.5, 38, 34.5, 43)
	SetLineWidth(0.1, t22)
	t23 = CreateLine(172, 38, 172, 43)
	SetLineWidth(0.1, t23)
	t24 = CreateLine(178, 38, 178, 43)
	SetLineWidth(0.1, t24)
	t25 = CreateLine(28.5, 164.5, 28.5, 169.5) 
	SetLineWidth(0.1, t25)
	t26 = CreateLine(34.5, 164, 34.5, 169.5)
	SetLineWidth(0.1, t26)
	t27 = CreateLine(172, 164, 172, 169.5)
	SetLineWidth(0.1, t27)
	t28 = CreateLine(178, 164, 178, 169.5)
	SetLineWidth(0.1, t28)
	t29 = CreateLine(22.5, 45, 27.5, 45)
	SetLineWidth(0.1, t29)
	t30 = CreateLine(22.5, 162, 27.5, 162)
	SetLineWidth(0.1, t30)
	t31 = CreateLine(179.5, 45, 184.5, 45)
	SetLineWidth(0.1, t31)
	t32 = CreateLine(179.5, 162, 184.5, 162)
	SetLineWidth(0.1, t32)
	SaveDocAs("pochette_CD.sla")