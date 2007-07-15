/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include "fonts/scface.h"
#include "scribusdoc.h"
#include "scpainter.h"
#include "chartablemodel.h"


CharTableModel::CharTableModel(QObject *parent, int cols, ScribusDoc * doc, const QString & font)
    : QAbstractTableModel(parent),
	m_doc(doc),
	m_cols(cols),
	m_fontInUse(font)
{
	m_characters.clear();
}

int CharTableModel::rowCount(const QModelIndex & /* parent */) const
{
    return m_characters.count() / m_cols;
}

int CharTableModel::columnCount(const QModelIndex & /* parent */) const
{
    return m_cols;
}

QVariant CharTableModel::data(const QModelIndex &index, int role) const
{
	if (!index.isValid() || m_doc == 0)
		return QVariant();

	int ix = index.row() * m_cols + index.column();
	int currentChar = -1;
	if (ix < m_characters.count())
		currentChar = m_characters[ix];
	if (currentChar == -1)
		return QVariant();

	// pixmap
	if (role == Qt::DecorationRole)
	{
		QMatrix chma;
		chma.scale(2.0, 2.0);

		ScFace face = (*m_doc->AllFonts)[m_fontInUse];
		uint gl = face.char2CMap(currentChar);
		int size = 20 + qRound(-face.descent() * 20)+4;
		double ww = 20 - face.glyphWidth(gl, 20);
		QPixmap pixm(20, size);
		QImage pix(20, size, QImage::Format_ARGB32);
		ScPainter *p = new ScPainter(&pix, 20, size);
		p->clear();
		pixm.fill(Qt::white);
		FPointArray gly = face.glyphOutline(gl);
		if (gly.size() > 4)
		{
			gly.map(chma);
			p->translate(ww / 2, 1);
			p->setBrush(Qt::black);
			p->setFillMode(1);
			p->setupPolygon(&gly);
			p->fillPath();
			p->end();
		}
		delete p;
		pixm.convertFromImage(pix);
		return QVariant(pixm);
	}
	// trash
	return QVariant();
}

void CharTableModel::setDoc(ScribusDoc *doc)
{
	bool repaint = (doc == m_doc) ? false : true;

	m_doc = doc;
	if (repaint)
		reset();
}

ScFace CharTableModel::fontFace()
{
	return (*m_doc->AllFonts)[m_fontInUse];
}

void CharTableModel::setCharacters(CharClassDef ch)
{
	m_characters.clear();
	m_characters = ch;
	reset();
}

void CharTableModel::setFontInUse(QString font)
{
	if (font != m_fontInUse)
	{
		m_fontInUse = font;
		reset();
	}
}

void CharTableModel::appendUnicode(QString s, uint base)
{
	bool ok;
	int val = s.toInt(&ok, base);
	if (ok && !m_characters.contains(val))
	{
		m_characters.append(val);
		reset();
	}
}

bool CharTableModel::removeCharacter(int index)
{
	if (index >= 0 && index < m_characters.size())
	{
		m_characters.removeAt(index);
		reset();
		return true;
	}
	qDebug("CharTable::deleteOwnCharacter: no char deleted - logical error propably");
	return false;
}

Qt::ItemFlags CharTableModel::flags(const QModelIndex &index) const
{
	Qt::ItemFlags defaultFlags = QAbstractTableModel::flags(index);
	if (index.isValid())
		return Qt::ItemIsDragEnabled | Qt::ItemIsDropEnabled | defaultFlags;
	return Qt::ItemIsDropEnabled | defaultFlags;
}