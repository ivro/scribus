/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
 *   Copyright (C) 2004 by Riku Leino                                      *
 *   tsoots@gmail.com                                                      *
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 *   This program is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU General Public License for more details.                          *
 *                                                                         *
 *   You should have received a copy of the GNU General Public License     *
 *   along with this program; if not, write to the                         *
 *   Free Software Foundation, Inc.,                                       *
 *   59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.             *
 ***************************************************************************/

#include "contentreader.h"

#ifdef HAVE_XML

#include <scribusstructs.h>
//Added by qt3to4:
#include <QByteArray>

ContentReader* ContentReader::creader = NULL;

extern xmlSAXHandlerPtr cSAXHandler;

ContentReader::ContentReader(QString documentName, StyleReader *s, gtWriter *w, bool textOnly)
{
	creader = this;
	docname = documentName;
	sreader = s;
	writer  = w;
	importTextOnly = textOnly;
	defaultStyle = NULL;
	currentStyle = NULL;
	append = false;
	inList = false;
	isOrdered = false;
	inSpan = false;
	listIndex = 0;
	listLevel = 0;
	currentList = "";
	inT = false;
	tName = "";
}

bool ContentReader::startElement(const QString&, const QString&, const QString &name, const QXmlAttributes &attrs) 
{
	if ((name == "text:p") || (name == "text:h"))
	{
		append = true;
		QString name = "";
		for (int i = 0; i < attrs.count(); ++i)
		{
			if (attrs.localName(i) == "text:style-name")
			{
				name = attrs.value(i);
				styleNames.push_back(attrs.value(i));
			}
		}
		if (!inList)
		{
			pstyle = sreader->getStyle(name);
			currentStyle = pstyle;
		}
		else
		{
			gtStyle *tmp = sreader->getStyle(getName());
			if ((tmp->getName()).find("default-style") != -1)
				getStyle();
			else
				currentStyle = tmp;
		}
	}
	else if (name == "text:span")
	{
		inSpan = true;
		QString styleName = "";
		for (int i = 0; i < attrs.count(); ++i)
		{
			if (attrs.localName(i) == "text:style-name")
			{
				currentStyle = sreader->getStyle(attrs.value(i));
				styleName = attrs.value(i);
				styleNames.push_back(styleName);
			}
		}
		gtStyle *tmp = sreader->getStyle(getName());
		if ((tmp->getName()).find("default-style") != -1)
			getStyle();
		else
			currentStyle = tmp;
	}
	else if ((name == "text:unordered-list") || (name == "text:ordered-list"))
	{
		inList = true;
		++listLevel;
		if (static_cast<int>(listIndex2.size()) < listLevel)
			listIndex2.push_back(0);
		for (int i = 0; i < attrs.count(); ++i)
		{
			if (attrs.localName(i) == "text:style-name")
				currentList = attrs.value(i);
		}
		currentStyle = sreader->getStyle(QString(currentList + "_%1").arg(listLevel));
		styleNames.clear();
		styleNames.push_back(QString(currentList + "_%1").arg(listLevel));
		if (name == "text:ordered-list")
		{
			isOrdered = true;
			isOrdered2.push_back(true);
		}
		else
		{
			isOrdered = false;
			isOrdered2.push_back(false);
		}
	}
	else if (name == "text:list-item")
	{
		if (isOrdered2[listLevel - 1])
		{
			++listIndex;
			++listIndex2[listLevel - 1];
			if (listLevel == 1)
				write(QString("%1. ").arg(listIndex2[listLevel - 1]));
			else
				write(QString("%1. ").arg(listIndex2[listLevel - 1]));
		}
		else
			write("- ");
	}
	else if (name == "style:style")
	{
		QString sname = "";
		bool isTextStyle = false;
		for (int i = 0; i < attrs.count(); ++i)
		{
			if (attrs.localName(i) == "style:name")
				sname = attrs.value(i);
			else if ((attrs.localName(i) == "style:family") && (attrs.value(i) == "text"))
				isTextStyle = true;
		}
		if (isTextStyle)
		{
			tName = sname;
			inT = true;
		}
	}
	else if ((name == "style:properties") && (inT))
	{
		Properties p;
		for (int i = 0; i < attrs.count(); ++i)
		{
			std::pair<QString, QString> pair(attrs.localName(i), attrs.value(i));
			p.push_back(pair);
		}
		tmap[tName] = p;
	}
	else if (name == "text:s")
	{
		int count = 1;
		for (int i = 0; i < attrs.count(); ++i)
		{
			if (attrs.localName(i) == "text:c")
			{
				bool ok = false;
				int tmpcount = (attrs.value(i)).toInt(&ok);
				if (ok)
					count = tmpcount;
			}
		}
		for (int i = 0; i < count; ++i)
			write(" ");
	}
	return true;
}

bool ContentReader::characters(const QString &ch) 
{
	QString tmp = ch;
	tmp = tmp.remove("\n");
	tmp = tmp.remove(""); // Remove all OO.o hyphenation chars
	tmp = tmp.replace(QChar(160), QChar(29)); // replace OO.o nbsp with Scribus nbsp
	if (append)
		write(tmp);
	return true;
}

bool ContentReader::endElement(const QString&, const QString&, const QString &name)
{
	if ((name == "text:p") || (name == "text:h"))
	{
		write("\n");
		append = false;
		if (inList)
		{
			if (styleNames.size() != 0)
				styleNames.pop_back();
		}
		else
			styleNames.clear();
	}
	else if (name == "text:span")
	{
		inSpan = false;
		currentStyle = pstyle;
		if (styleNames.size() != 0)
			styleNames.pop_back();	
		currentStyle = sreader->getStyle(getName());
	}
	else if (name == "text:line-break")
		write(QChar(28));
	else if (name == "text:tab-stop")
		write("\t");
	else if ((name == "text:unordered-list") || (name == "text:ordered-list"))
	{
		--listLevel;
		styleNames.clear();
		if (listLevel == 0)
		{
			inList = false;
			listIndex2.clear();
		}
		else
		{
			currentStyle = sreader->getStyle(QString(currentList + "_%1").arg(listLevel));
			styleNames.push_back(QString(currentList + "_%1").arg(listLevel));
		}
	}
	else if ((name == "style:style") && (inT))
	{
		inT = false;
		tName = "";
	}
	return true;
}

void ContentReader::write(const QString& text)
{
	if (importTextOnly)
		writer->append(text);
	else if (inSpan)
		writer->append(text, currentStyle, false);
	else
		writer->append(text, currentStyle);
	lastStyle = currentStyle;
}

void ContentReader::parse(QString fileName)
{
	sreader->parse(fileName);
#if defined(_WIN32)
	QString fname = QDir::convertSeparators(fileName);
	QByteArray fn = (qWinVersion() & QSysInfo::WV_NT_based) ? fname.utf8() : fname.local8Bit();
#else
	QByteArray fn(fileName.local8Bit());
#endif
	xmlSAXParseFile(cSAXHandler, fn.data(), 1);
}

xmlSAXHandler cSAXHandlerStruct = {
	NULL, // internalSubset,
	NULL, // isStandalone,
	NULL, // hasInternalSubset,
	NULL, // hasExternalSubset,
	NULL, // resolveEntity,
	NULL, // getEntity,
	NULL, // entityDecl,
	NULL, // notationDecl,
	NULL, // attributeDecl,
	NULL, // elementDecl,
	NULL, // unparsedEntityDecl,
	NULL, // setDocumentLocator,
	NULL, // startDocument,
	NULL, // endDocument,
	ContentReader::startElement,
	ContentReader::endElement,
	NULL, // reference,
	ContentReader::characters,
	NULL, // ignorableWhitespace,
	NULL, // processingInstruction,
	NULL, // comment,
	NULL, // warning,
	NULL, // error,
	NULL, // fatalError,
	NULL, // getParameterEntity,
	NULL, // cdata,
	NULL,
	1
#ifdef HAVE_XML26
	,
	NULL,
	NULL,
	NULL,
	NULL
#endif
};

xmlSAXHandlerPtr cSAXHandler = &cSAXHandlerStruct;

void ContentReader::startElement(void*, const xmlChar *fullname, const xmlChar ** atts)
{
	QString* name = new QString((const char*) fullname);
	name = new QString(name->lower());
	QXmlAttributes* attrs = new QXmlAttributes();
	if (atts)
	{
		for(const xmlChar** cur = atts; cur && *cur; cur += 2)
			attrs->append(QString((char*)*cur), NULL, QString((char*)*cur), QString((char*)*(cur + 1)));
	}
	creader->startElement(NULL, NULL, *name, *attrs);
}

void ContentReader::characters(void*, const xmlChar *ch, int len)
{
	QString chars = QString::fromUtf8((const char*) ch, len);
	creader->characters(chars);
}

void ContentReader::endElement(void*, const xmlChar *name)
{
	QString *nname = new QString((const char*) name);
	nname = new QString(nname->lower());
	creader->endElement(NULL, NULL, *nname);
}

QString ContentReader::getName()
{
	QString s = "";
	for (uint i = 0; i < styleNames.size(); ++i)
		s += styleNames[i];
	return s;
}

void ContentReader::getStyle()
{
	gtParagraphStyle* par = NULL;
	if (styleNames.size() == 0)
		par = dynamic_cast<gtParagraphStyle*>(sreader->getStyle("default-style"));
	else
		par = dynamic_cast<gtParagraphStyle*>(sreader->getStyle(styleNames[0]));
	gtParagraphStyle* tmp = new gtParagraphStyle(*par);
	for (uint i = 1; i < styleNames.size(); ++i)
	{
		Properties& p = tmap[styleNames[i]];
		for (uint j = 0; j < p.size(); ++j)
			sreader->updateStyle(tmp, sreader->getStyle(styleNames[i - 1]), p[j].first, p[j].second);
	}

	currentStyle = tmp;
	sreader->setStyle(getName(), tmp);
}

ContentReader::~ContentReader()
{
	creader = NULL;
	delete defaultStyle;
}

#endif // HAVE_XML
