/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include "smtextstyles.h"
//#include "smtextstyles.moc"
#include "smtextstylewidgets.h"
#include "util.h"
#include "scrspinbox.h"
#include "alignselect.h"
#include "tabruler.h"
#include "fontcombo.h"
#include "styleselect.h"
#include "sccombobox.h"
#include "shadebutton.h"
#include "commonstrings.h"
#include "style.h"
#include "scribusdoc.h"
#include "selection.h"
#include "scribus.h"
#include "prefsmanager.h"
#include "colorcombo.h"
#include "story.h"
#include "menumanager.h"
//qt4 #include "fmitem.h"
#include "mpalette.h"
#include "smwidgets.h"

#include <qtabwidget.h>
//Added by qt3to4:
#include <Q3ValueList>

SMParagraphStyle::SMParagraphStyle(StyleSet<CharStyle> *cstyles) : StyleItem(),
pwidget_(0), doc_(0), selectionIsDirty_(false), unitRatio_(1.0), cstyles_(cstyles)
{
	Q_ASSERT(cstyles_);
	pwidget_ = new SMPStyleWidget();
	Q_CHECK_PTR(pwidget_);
}

QTabWidget* SMParagraphStyle::widget()
{
	return pwidget_->tabWidget;
}

QString SMParagraphStyle::typeNamePlural()
{
	return tr("Paragraph Styles");
}

QString SMParagraphStyle::typeNameSingular()
{
	return tr("Paragraph Style");
}

void SMParagraphStyle::currentDoc(ScribusDoc *doc)
{
	doc_ = doc;
	if (doc_)
	{
		if (pwidget_)
		{
			pwidget_->cpage->fillLangCombo(doc_->scMW()->LangTransl);
			pwidget_->cpage->fillColorCombo(doc_->PageColors);
			pwidget_->cpage->fontFace_->RebuildList(doc_);
			if (unitRatio_ != doc_->unitRatio())
				unitChange();
		}
	}
	else
	{
		removeConnections();
		selection_.clear();
		tmpStyles_.clear();
		deleted_.clear();
	}
}

StyleSet<ParagraphStyle>* SMParagraphStyle::tmpStyles()
{
	return &tmpStyles_;
}

Q3ValueList<StyleName> SMParagraphStyle::styles(bool reloadFromDoc)
{
	Q3ValueList<StyleName> tmpList;

	if (!doc_)
		return tmpList; // no doc available

	if (reloadFromDoc)
	{
		deleted_.clear();
		reloadTmpStyles();
	}

	for (uint i = 0; i < tmpStyles_.count(); ++i)
	{
		if (tmpStyles_[i].hasName())
		{
			QString styleName(tmpStyles_[i].name());
			QString parentName(QString::null);

			if (tmpStyles_[i].hasParent() )
				parentName = tmpStyles_[i].parent();

			tmpList << StyleName(styleName, parentName);
		}
	}

	return tmpList;
}

void SMParagraphStyle::reload()
{
	reloadTmpStyles();
}

void SMParagraphStyle::selected(const QStringList &styleNames)
{
	if (!doc_)
		return;

	selection_.clear();
	selectionIsDirty_ = false;
	removeConnections(); // we don't want to record changes during style setup

	tmpStyles_.invalidate();

	Q3ValueList<ParagraphStyle> pstyles; // get saved styles
	Q3ValueList<CharStyle> cstyles;
	for (uint i = 0; i < tmpStyles_.count(); ++i)
		pstyles << tmpStyles_[i];
	for (uint i = 0; i < cstyles_->count(); ++i)
		cstyles << (*cstyles_)[i];

	int index;
	for (int i = 0; i < styleNames.count(); ++i)
	{
		index = tmpStyles_.find(styleNames[i]);
		if (index > -1)
			selection_.append(&tmpStyles_[index]);
	}

	pwidget_->show(selection_, pstyles, cstyles, doc_->unitIndex(), (*cstyles_).get("").language());

	setupConnections();
}

Q3ValueList<CharStyle> SMParagraphStyle::getCharStyles()
{
	Q3ValueList<CharStyle> charStyles;
	if (!doc_)
		return charStyles; // no doc available

	const StyleSet<CharStyle> &tmp(doc_->charStyles());
	for (uint i = 0; i < tmp.count(); ++i)
		charStyles.append(tmp[i]);
	return charStyles;
}

QString SMParagraphStyle::fromSelection() const
{
	QString lsName(QString::null);
	if (!doc_)
		return lsName; // no doc available

	for (uint i = 0; i < doc_->m_Selection->count(); ++i)
	{
		// wth is going on here
		PageItem *item = doc_->m_Selection->itemAt(i);

		QString tmpName = item->itemText.defaultStyle().parent();

		if (lsName.isNull() && !tmpName.isEmpty() && tmpName != "")
		{
			lsName = tmpName;
		}
		else if (!lsName.isNull() && !tmpName.isEmpty() && tmpName != "" && lsName != tmpName)
		{
			lsName = QString::null;
			break;
		}
	}
	return lsName;
}

void SMParagraphStyle::toSelection(const QString &styleName) const
{
	if (!doc_)
		return; // nowhere to apply or no doc

	doc_->itemSelection_SetNamedParagraphStyle(styleName);
}

QString SMParagraphStyle::newStyle()
{
	if (!doc_)
		return QString::null;

	QString s(getUniqueName( tr("New Style")));
	ParagraphStyle p;
	p.setName(s);
	tmpStyles_.create(p);
	return s;
}

QString SMParagraphStyle::newStyle(const QString &fromStyle)
{
	Q_ASSERT(tmpStyles_.resolve(fromStyle));
	if (!tmpStyles_.resolve(fromStyle))
		return QString::null;

	QString s(getUniqueName( tr("Clone of %1").arg(fromStyle)));
	ParagraphStyle p(tmpStyles_.get(fromStyle));
	p.setName(s);
	p.setShortcut(QString::null); // do not clone the sc
	tmpStyles_.create(p);

	return s;
}

// helper function to find a unique name to a new style or a clone
QString SMParagraphStyle::getUniqueName(const QString &name)
{
	int id = 0;
	bool done = false;
	QString s(name);

	while (!done)
	{
start:
		++id;
		for (uint i = 0; i < tmpStyles_.count(); ++i)
		{
			if (tmpStyles_[i].name() == s)
			{
				s = tr("%1 (%2)", "This for unique name when creating "
						"a new character style. %1 will be the name "
								"of the style and %2 will be a number forming "
								"a style name like: New Style (2)").arg(name).arg(id);
				goto start;
			}
		}
		done = true;
	}

	return s;
}

void SMParagraphStyle::apply()
{
	if (!doc_)
		return;

	QMap<QString, QString> replacement;
	for (int i = 0; i < deleted_.count(); ++i)
		replacement[deleted_[i].first] = deleted_[i].second;

	doc_->redefineStyles(tmpStyles_, false);
	doc_->replaceStyles(replacement);

	deleted_.clear(); // deletion done at this point

	doc_->scMW()->propertiesPalette->paraStyleCombo->updateFormatList();
	doc_->scMW()->propertiesPalette->charStyleCombo->updateFormatList();
	doc_->scMW()->view->DrawNew();
	doc_->changed();
}

void SMParagraphStyle::editMode(bool isOn)
{
	if (isOn)
		reloadTmpStyles();
}

QString SMParagraphStyle::shortcut(const QString &stylename) const
{
	QString s(QString::null);

	int index = tmpStyles_.find(stylename);
	if (index > -1)
		s = tmpStyles_[index].shortcut();

	return s;
}

void SMParagraphStyle::setShortcut(const QString &shortcut)
{
	Q_ASSERT(selection_.count() == 1);
	if (selection_.count() != 1)
		return;

	selection_[0]->setShortcut(shortcut);

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::deleteStyles(const Q3ValueList<RemoveItem> &removeList)
{
	for (int i = 0; i < removeList.count(); ++i)
	{
		for (int k = 0; k < selection_.count(); ++k)
		{
			if (selection_[k]->name() == removeList[i].first)
			{
				selection_.erase(selection_.at(k));
				break;
			}
		}

		int index = tmpStyles_.find(removeList[i].first);
		if (index > -1)
			tmpStyles_.remove(index);

		deleted_.append(removeList[i]);
	}
}

void SMParagraphStyle::nameChanged(const QString &newName)
{
	if (selection_.count() != 1)
		return;

	QString oldName(selection_[0]->name());
	ParagraphStyle p(*selection_[0]);
	p.setName(newName);
	tmpStyles_.create(p);
	selection_.clear();
	selection_.append(&tmpStyles_[tmpStyles_.find(newName)]);
	for (uint j = 0; j < tmpStyles_.count(); ++j)
	{
		int index = tmpStyles_.find(oldName);
		if (index > -1)
		{
			tmpStyles_.remove(index);
			break;
		}
	}

	for (uint j = 0; j < tmpStyles_.count(); ++j)
	{
		if (tmpStyles_[j].parent() == oldName)
			tmpStyles_[j].setParent(newName);
	}

	Q3ValueList<RemoveItem>::iterator it;
	for (it = deleted_.begin(); it != deleted_.end(); ++it)
	{
		if ((*it).second == oldName)
		{
			oldName = (*it).first;
			deleted_.remove(it);
			break;
		}
	}

	deleted_.append(RemoveItem(oldName, newName));

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::languageChange()
{
	if (pwidget_)
	{
		pwidget_->languageChange();
		pwidget_->cpage->languageChange();
	}
}

void SMParagraphStyle::unitChange()
{
	double oldRatio = unitRatio_;
	unitRatio_ = doc_->unitRatio();
	pwidget_->unitChange(oldRatio, unitRatio_, doc_->unitIndex());
}

void SMParagraphStyle::reloadTmpStyles()
{
	if (!doc_)
		return;

	selection_.clear();
	tmpStyles_.clear();
	deleted_.clear();
	tmpStyles_.redefine(doc_->paragraphStyles(), true);
	Q_ASSERT(tmpStyles_.count() > 0);
	tmpStyles_[0].charStyle().setContext(cstyles_);
}

void SMParagraphStyle::setupConnections()
{
	if (!pwidget_)
		return;

	// paragraph attributes
	connect(pwidget_->lineSpacingMode_, SIGNAL(activated(int)), this, SLOT(slotLineSpacingMode(int)));
	connect(pwidget_->lineSpacing_, SIGNAL(valueChanged(double)), this, SLOT(slotLineSpacing()));
	connect(pwidget_->spaceAbove_, SIGNAL(valueChanged(double)), this, SLOT(slotSpaceAbove()));
	connect(pwidget_->spaceBelow_, SIGNAL(valueChanged(double)), this, SLOT(slotSpaceBelow()));
	connect(pwidget_->alignement_->TextL, SIGNAL(clicked()), this, SLOT(slotAlignment()));
	connect(pwidget_->alignement_->TextR, SIGNAL(clicked()), this, SLOT(slotAlignment()));
	connect(pwidget_->alignement_->TextC, SIGNAL(clicked()), this, SLOT(slotAlignment()));
	connect(pwidget_->alignement_->TextB, SIGNAL(clicked()), this, SLOT(slotAlignment()));
	connect(pwidget_->alignement_->TextF, SIGNAL(clicked()), this, SLOT(slotAlignment()));
	connect(pwidget_->alignement_->parentButton, SIGNAL(clicked()), this, SLOT(slotAlignment()));

	connect(pwidget_, SIGNAL(useParentDropCap()), this, SLOT(slotParentDropCap()));
	connect(pwidget_->dropCapsBox, SIGNAL(toggled(bool)), this, SLOT(slotDropCap(bool)));
	connect(pwidget_->dropCapLines_, SIGNAL(valueChanged(int)), this, SLOT(slotDropCapLines(int)));
	connect(pwidget_->dropCapOffset_, SIGNAL(valueChanged(double)), this, SLOT(slotDropCapOffset()));

	connect(pwidget_->tabList_, SIGNAL(tabsChanged()), this, SLOT(slotTabRuler()));
	connect(pwidget_->tabList_, SIGNAL(mouseReleased()), this, SLOT(slotTabRuler()));
	connect(pwidget_->tabList_->left_, SIGNAL(valueChanged(double)), this, SLOT(slotLeftIndent()));
	connect(pwidget_->tabList_->right_, SIGNAL(valueChanged(double)), this, SLOT(slotRightIndent()));
	connect(pwidget_->tabList_->first_, SIGNAL(valueChanged(double)), this, SLOT(slotFirstLine()));

	connect(pwidget_->parentCombo, SIGNAL(activated(const QString&)),
			this, SLOT(slotParentChanged(const QString&)));

	// character attributes
	connect(pwidget_->cpage->fontFace_, SIGNAL(fontSelected(QString)), this, SLOT(slotFont(QString)));
	connect(pwidget_->cpage->effects_, SIGNAL(State(int)), this, SLOT(slotEffects(int)));
	connect(pwidget_->cpage->effects_->ShadowVal->Xoffset, SIGNAL(valueChanged(double)),
			this, SLOT(slotEffectProperties()));
	connect(pwidget_->cpage->effects_->ShadowVal->Yoffset, SIGNAL(valueChanged(double)),
			this, SLOT(slotEffectProperties()));
	connect(pwidget_->cpage->effects_->OutlineVal->LWidth, SIGNAL(valueChanged(double)),
			this, SLOT(slotEffectProperties()));
	connect(pwidget_->cpage->effects_->UnderlineVal->LPos, SIGNAL(valueChanged(double)),
			this, SLOT(slotEffectProperties()));
	connect(pwidget_->cpage->effects_->UnderlineVal->LWidth, SIGNAL(valueChanged(double)),
			this, SLOT(slotEffectProperties()));
	connect(pwidget_->cpage->effects_->StrikeVal->LPos, SIGNAL(valueChanged(double)),
			this, SLOT(slotEffectProperties()));
	connect(pwidget_->cpage->effects_->StrikeVal->LWidth, SIGNAL(valueChanged(double)),
			this, SLOT(slotEffectProperties()));
	connect(pwidget_->cpage->fillColor_, SIGNAL(activated(const QString&)), this, SLOT(slotFillColor()));
	connect(pwidget_->cpage->fillShade_, SIGNAL(clicked()), this, SLOT(slotFillShade()));
	connect(pwidget_->cpage->strokeColor_, SIGNAL(activated(const QString&)), this, SLOT(slotStrokeColor()));
	connect(pwidget_->cpage->strokeShade_, SIGNAL(clicked()), this, SLOT(slotStrokeShade()));
	connect(pwidget_->cpage->language_, SIGNAL(activated(int)), this, SLOT(slotLanguage()));
	connect(pwidget_->cpage->fontSize_, SIGNAL(valueChanged(double)), this, SLOT(slotFontSize()));
	connect(pwidget_->cpage->fontHScale_, SIGNAL(valueChanged(double)), this, SLOT(slotScaleH()));
	connect(pwidget_->cpage->fontVScale_, SIGNAL(valueChanged(double)), this, SLOT(slotScaleV()));
	connect(pwidget_->cpage->tracking_, SIGNAL(valueChanged(double)), this, SLOT(slotTracking()));
	connect(pwidget_->cpage->baselineOffset_, SIGNAL(valueChanged(double)), this, SLOT(slotBaselineOffset()));
	connect(pwidget_->cpage->fontFace_, SIGNAL(fontSelected(QString)), this, SLOT(slotFont(QString)));
	connect(pwidget_->cpage->parentCombo, SIGNAL(activated(const QString&)),
			this, SLOT(slotCharParentChanged(const QString&)));
}

void SMParagraphStyle::removeConnections()
{
	if (!pwidget_)
		return;

	disconnect(pwidget_->lineSpacingMode_, SIGNAL(activated(int)), this, SLOT(slotLineSpacingMode(int)));
	disconnect(pwidget_->lineSpacing_, SIGNAL(valueChanged(double)), this, SLOT(slotLineSpacing()));
	disconnect(pwidget_->spaceAbove_, SIGNAL(valueChanged(double)), this, SLOT(slotSpaceAbove()));
	disconnect(pwidget_->spaceBelow_, SIGNAL(valueChanged(double)), this, SLOT(slotSpaceBelow()));
	disconnect(pwidget_->alignement_->TextL, SIGNAL(clicked()), this, SLOT(slotAlignment()));
	disconnect(pwidget_->alignement_->TextR, SIGNAL(clicked()), this, SLOT(slotAlignment()));
	disconnect(pwidget_->alignement_->TextC, SIGNAL(clicked()), this, SLOT(slotAlignment()));
	disconnect(pwidget_->alignement_->TextB, SIGNAL(clicked()), this, SLOT(slotAlignment()));
	disconnect(pwidget_->alignement_->TextF, SIGNAL(clicked()), this, SLOT(slotAlignment()));
	disconnect(pwidget_->alignement_->parentButton, SIGNAL(clicked()), this, SLOT(slotAlignment()));

	disconnect(pwidget_, SIGNAL(useParentDropCap()), this, SLOT(slotParentDropCap()));
	disconnect(pwidget_->dropCapsBox, SIGNAL(toggled(bool)), this, SLOT(slotDropCap(bool)));
	disconnect(pwidget_->dropCapLines_, SIGNAL(valueChanged(int)), this, SLOT(slotDropCapLines(int)));
	disconnect(pwidget_->dropCapOffset_, SIGNAL(valueChanged(double)), this, SLOT(slotDropCapOffset()));

	disconnect(pwidget_->parentCombo, SIGNAL(activated(const QString&)),
			this, SLOT(slotParentChanged(const QString&)));

	disconnect(pwidget_->tabList_, SIGNAL(tabsChanged()), this, SLOT(slotTabRuler()));
	disconnect(pwidget_->tabList_->left_, SIGNAL(valueChanged(double)), this, SLOT(slotLeftIndent()));
	disconnect(pwidget_->tabList_->right_, SIGNAL(valueChanged(double)), this, SLOT(slotRightIndent()));
	disconnect(pwidget_->tabList_->first_, SIGNAL(valueChanged(double)), this, SLOT(slotFirstLine()));

	disconnect(pwidget_->cpage->fontFace_, SIGNAL(fontSelected(QString)), this, SLOT(slotFont(QString)));
	disconnect(pwidget_->cpage->effects_, SIGNAL(State(int)), this, SLOT(slotEffects(int)));
	disconnect(pwidget_->cpage->effects_->ShadowVal->Xoffset, SIGNAL(valueChanged(double)),
			this, SLOT(slotEffectProperties()));
	disconnect(pwidget_->cpage->effects_->ShadowVal->Yoffset, SIGNAL(valueChanged(double)),
			this, SLOT(slotEffectProperties()));
	disconnect(pwidget_->cpage->effects_->OutlineVal->LWidth, SIGNAL(valueChanged(double)),
			this, SLOT(slotEffectProperties()));
	disconnect(pwidget_->cpage->effects_->UnderlineVal->LPos, SIGNAL(valueChanged(double)),
			this, SLOT(slotEffectProperties()));
	disconnect(pwidget_->cpage->effects_->UnderlineVal->LWidth, SIGNAL(valueChanged(double)),
			this, SLOT(slotEffectProperties()));
	disconnect(pwidget_->cpage->effects_->StrikeVal->LPos, SIGNAL(valueChanged(double)),
			this, SLOT(slotEffectProperties()));
	disconnect(pwidget_->cpage->effects_->StrikeVal->LWidth, SIGNAL(valueChanged(double)),
			this, SLOT(slotEffectProperties()));
	disconnect(pwidget_->cpage->fillColor_, SIGNAL(activated(const QString&)), this, SLOT(slotFillColor()));
	disconnect(pwidget_->cpage->fillShade_, SIGNAL(clicked()), this, SLOT(slotFillShade()));
	disconnect(pwidget_->cpage->strokeColor_, SIGNAL(activated(const QString&)), this, SLOT(slotStrokeColor()));
	disconnect(pwidget_->cpage->strokeShade_, SIGNAL(clicked()), this, SLOT(slotStrokeShade()));
	disconnect(pwidget_->cpage->language_, SIGNAL(activated(int)), this, SLOT(slotLanguage()));
	disconnect(pwidget_->cpage->fontSize_, SIGNAL(valueChanged(double)), this, SLOT(slotFontSize()));
	disconnect(pwidget_->cpage->fontHScale_, SIGNAL(valueChanged(double)), this, SLOT(slotScaleH()));
	disconnect(pwidget_->cpage->fontVScale_, SIGNAL(valueChanged(double)), this, SLOT(slotScaleV()));
	disconnect(pwidget_->cpage->tracking_, SIGNAL(valueChanged(double)), this, SLOT(slotTracking()));
	disconnect(pwidget_->cpage->baselineOffset_, SIGNAL(valueChanged(double)), this, SLOT(slotBaselineOffset()));
	disconnect(pwidget_->cpage->fontFace_, SIGNAL(fontSelected(QString)), this, SLOT(slotFont(QString)));
	disconnect(pwidget_->cpage->parentCombo, SIGNAL(activated(const QString&)),
			this, SLOT(slotCharParentChanged(const QString&)));
}

void SMParagraphStyle::slotLineSpacingMode(int mode)
{
	ParagraphStyle::LineSpacingMode lsm = static_cast<ParagraphStyle::LineSpacingMode>(mode);

	if (pwidget_->lineSpacingMode_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetLineSpacingMode();
	else
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setLineSpacingMode(lsm);

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotLineSpacing()
{
	if (pwidget_->lineSpacing_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetLineSpacing();
	else 
	{
		double a, b, value;
		int c;

		pwidget_->lineSpacing_->getValues(&a, &b, &c, &value);
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setLineSpacing(value);
	}
	
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotSpaceAbove()
{
	if (pwidget_->spaceAbove_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetGapBefore();
	else 
	{
		double a, b, value;
		int c;

		pwidget_->spaceAbove_->getValues(&a, &b, &c, &value);
		value = value / unitRatio_;
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setGapBefore(value);
	}
	
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotSpaceBelow()
{
	if (pwidget_->spaceBelow_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetGapAfter();
	else 
	{
		double a, b, value;
		int c;
		
		pwidget_->spaceBelow_->getValues(&a, &b, &c, &value);
		value = value / unitRatio_;
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setGapAfter(value);
	}
	
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotAlignment()
{
	ParagraphStyle::AlignmentType style = static_cast<ParagraphStyle::AlignmentType>(pwidget_->alignement_->getStyle());
	if (pwidget_->alignement_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetAlignment();
	else 
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setAlignment(style);

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotDropCap(bool isOn)
{
	for (int i = 0; i < selection_.count(); ++i)
		selection_[i]->setHasDropCap(isOn);

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotParentDropCap()
{
	for (int i = 0; i < selection_.count(); ++i)
		selection_[i]->resetHasDropCap();

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotDropCapLines(int lines)
{
	if (pwidget_->dropCapLines_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetDropCapLines();
	else		
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setDropCapLines(lines);

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotDropCapOffset()
{
	if (pwidget_->dropCapOffset_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetDropCapOffset();
	else 
	{
		double a, b, value;
		int c;

		pwidget_->dropCapOffset_->getValues(&a, &b, &c, &value);
		value = value / unitRatio_;
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setDropCapOffset(value);
	}
	
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotTabRuler()
{
	if (pwidget_->tabList_->useParentTabs())
	{
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetTabValues();
	}
	else
	{
		Q3ValueList<ParagraphStyle::TabRecord> newTabs = pwidget_->tabList_->getTabVals();
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setTabValues(newTabs);
	}

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotLeftIndent()
{
	if (pwidget_->tabList_->useParentLeftIndent())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetLeftMargin();
	else 
	{
		double a, b, value;
		int c;

		pwidget_->tabList_->left_->getValues(&a, &b, &c, &value);
		value = value / unitRatio_;
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setLeftMargin(value);
	}
	
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotRightIndent()
{
	if (pwidget_->tabList_->useParentRightIndent())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetRightMargin();
	else 
	{
		double a, b, value;
		int c;

		pwidget_->tabList_->right_->getValues(&a, &b, &c, &value);
		value = value / unitRatio_;
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setRightMargin(value);
	}
	
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotFirstLine()
{
	if (pwidget_->tabList_->useParentFirstLine())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetFirstIndent();
	else 
	{
		double a, b, value;
		int c;
		
		pwidget_->tabList_->first_->getValues(&a, &b, &c, &value);
		value = value / unitRatio_;
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setFirstIndent(value);
	}
	
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotFontSize()
{
	if (pwidget_->cpage->fontSize_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().resetFontSize();
	else
	{
		double a, b, value;
		int c;
		
		pwidget_->cpage->fontSize_->getValues(&a, &b, &c, &value);
		value = value * 10;
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().setFontSize(qRound(value));
	}


	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotEffects(int e)
{
	StyleFlag s = ScStyle_None;
	if (pwidget_->cpage->effects_->useParentValue())
	{
		for (int i = 0; i < selection_.count(); ++i)
		{
			selection_[i]->charStyle().resetEffects();
			selection_[i]->charStyle().resetShadowXOffset();
			selection_[i]->charStyle().resetShadowYOffset();
			selection_[i]->charStyle().resetOutlineWidth();
			selection_[i]->charStyle().resetUnderlineOffset();
			selection_[i]->charStyle().resetUnderlineWidth();
			selection_[i]->charStyle().resetStrikethruOffset();
			selection_[i]->charStyle().resetStrikethruWidth();
		}
	}
	else
	{
		double a, b, sxo, syo, olw, ulp, ulw, slp, slw;
		int c;
		
		s = static_cast<StyleFlag>(e);
		pwidget_->cpage->effects_->ShadowVal->Xoffset->getValues(&a, &b, &c, &sxo);
		sxo *= 10;
		pwidget_->cpage->effects_->ShadowVal->Yoffset->getValues(&a, &b, &c, &syo);
		syo *= 10;

		pwidget_->cpage->effects_->OutlineVal->LWidth->getValues(&a, &b, &c, &olw);
		olw *= 10;

		pwidget_->cpage->effects_->UnderlineVal->LPos->getValues(&a, &b, &c, &ulp);
		ulp *= 10;
		pwidget_->cpage->effects_->UnderlineVal->LWidth->getValues(&a, &b, &c, &ulw);
		ulw *= 10;

		pwidget_->cpage->effects_->StrikeVal->LPos->getValues(&a, &b, &c, &slp);
		slp *= 10;
		pwidget_->cpage->effects_->StrikeVal->LWidth->getValues(&a, &b, &c, &slw);
		slw *= 10;

		for (int i = 0; i < selection_.count(); ++i)
		{
			selection_[i]->charStyle().setEffects(s);
			selection_[i]->charStyle().setShadowXOffset(qRound(sxo));
			selection_[i]->charStyle().setShadowYOffset(qRound(syo));
			selection_[i]->charStyle().setOutlineWidth(qRound(olw));
			selection_[i]->charStyle().setUnderlineOffset(qRound(ulp));
			selection_[i]->charStyle().setUnderlineWidth(qRound(ulw));
			selection_[i]->charStyle().setStrikethruOffset(qRound(slp));
			selection_[i]->charStyle().setStrikethruWidth(qRound(slw));
		}
	}


	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotEffectProperties()
{
	double a, b, sxo, syo, olw, ulp, ulw, slp, slw;
	int c;

	pwidget_->cpage->effects_->ShadowVal->Xoffset->getValues(&a, &b, &c, &sxo);
	sxo *= 10;
	pwidget_->cpage->effects_->ShadowVal->Yoffset->getValues(&a, &b, &c, &syo);
	syo *= 10;

	pwidget_->cpage->effects_->OutlineVal->LWidth->getValues(&a, &b, &c, &olw);
	olw *= 10;

	pwidget_->cpage->effects_->UnderlineVal->LPos->getValues(&a, &b, &c, &ulp);
	ulp *= 10;
	pwidget_->cpage->effects_->UnderlineVal->LWidth->getValues(&a, &b, &c, &ulw);
	ulw *= 10;

	pwidget_->cpage->effects_->StrikeVal->LPos->getValues(&a, &b, &c, &slp);
	slp *= 10;
	pwidget_->cpage->effects_->StrikeVal->LWidth->getValues(&a, &b, &c, &slw);
	slw *= 10;
	
	for (int i = 0; i < selection_.count(); ++i)
	{
		selection_[i]->charStyle().setShadowXOffset(qRound(sxo));
		selection_[i]->charStyle().setShadowYOffset(qRound(syo));
		selection_[i]->charStyle().setOutlineWidth(qRound(olw));
		selection_[i]->charStyle().setUnderlineOffset(qRound(ulp));
		selection_[i]->charStyle().setUnderlineWidth(qRound(ulw));
		selection_[i]->charStyle().setStrikethruOffset(qRound(slp));
		selection_[i]->charStyle().setStrikethruWidth(qRound(slw));
	}

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotFillColor()
{
	if (pwidget_->cpage->fillColor_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().resetFillColor();
	else {
		QString c( pwidget_->cpage->fillColor_->currentText());
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().setFillColor(c);
	}
	
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotFillShade()
{
	if (pwidget_->cpage->fillShade_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().resetFillShade();
	else {
		int fs = pwidget_->cpage->fillShade_->getValue();

		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().setFillShade(fs);
	}
	
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotStrokeColor()
{
	if (pwidget_->cpage->strokeColor_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().resetStrokeColor();
	else {
		QString c(pwidget_->cpage->strokeColor_->currentText());

		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().setStrokeColor(c);
	}
	
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotStrokeShade()
{
	if (pwidget_->cpage->strokeShade_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().resetStrokeShade();
	else 
	{
		int ss = pwidget_->cpage->strokeShade_->getValue();

		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().setStrokeShade(ss);
	}
	
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotLanguage()
{
	QMap<QString,QString>::Iterator it;
	QString language = doc_->paragraphStyle("").charStyle().language();

	if (pwidget_->cpage->language_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().resetLanguage();
	else
	{
		for (it = doc_->scMW()->LangTransl.begin(); it != doc_->scMW()->LangTransl.end(); ++it)
		{
			if (it.data() == pwidget_->cpage->language_->currentText())
			{
				language = it.key();
				break;
			}
		}
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().setLanguage(language);
	}

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotScaleH()
{
	if (pwidget_->cpage->fontHScale_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().resetScaleH();
	else
	{
		double a, b, value;
		int c;
		pwidget_->cpage->fontHScale_->getValues(&a, &b, &c, &value);
		value = value * 10;
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().setScaleH(qRound(value));
	}

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotScaleV()
{
	if (pwidget_->cpage->fontVScale_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().resetScaleV();
	else
	{
		double a, b, value;
		int c;
		pwidget_->cpage->fontVScale_->getValues(&a, &b, &c, &value);
		value = value * 10;
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().setScaleV(qRound(value));
	}

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotTracking()
{
	if (pwidget_->cpage->tracking_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().resetTracking();
	else
	{
		double a, b, value;
		int c;
		pwidget_->cpage->tracking_->getValues(&a, &b, &c, &value);
		value = value * 10;
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().setTracking(qRound(value));
	}

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotBaselineOffset()
{
	if (pwidget_->cpage->baselineOffset_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().resetBaselineOffset();
	else
	{
		double a, b, value;
		int c;	
		pwidget_->cpage->baselineOffset_->getValues(&a, &b, &c, &value);
		value = value * 10;
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().setBaselineOffset(qRound(value));
	}

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotFont(QString s)
{
	if (pwidget_->cpage->fontFace_->useParentFont())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().resetFont();
	else {
		ScFace sf = PrefsManager::instance()->appPrefs.AvailFonts[s];
		
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->charStyle().setFont(sf);
	}
	
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotParentChanged(const QString &parent)
{
	Q_ASSERT(!parent.isNull());

	QStringList sel;

	for (int i = 0; i < selection_.count(); ++i)
	{
		const ParagraphStyle *style = & (doc_->paragraphStyle(parent));
		if (style)
		{
			selection_[i]->erase(); // reset everything to NOVALUE
			selection_[i]->setParent(parent);
			selection_[i]->charStyle().setParent("");
			sel << selection_[i]->name();
		}
	}

	selected(sel);

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMParagraphStyle::slotCharParentChanged(const QString &parent)
{
	Q_ASSERT(parent != QString::null);

	QStringList sel;

	for (int i = 0; i < selection_.count(); ++i)
	{
		selection_[i]->charStyle().erase();
		if (parent != QString::null)
			selection_[i]->charStyle().setParent(parent);

		sel << selection_[i]->name();
	}

	selected(sel);

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

SMParagraphStyle::~SMParagraphStyle()
{

}

/******************************************************************************/
/******************************************************************************/

SMCharacterStyle::SMCharacterStyle() : StyleItem(), widget_(0), page_(0), doc_(0), selectionIsDirty_(false)
{
	widget_ = new QTabWidget();
	Q_CHECK_PTR(widget_);
	widget_->setMargin(5);//CB the SMCStylePage parent has a 0 value to fit properly onto the pstyle page, so add it here
	page_ = new SMCStylePage();
	Q_CHECK_PTR(page_);
	widget_->addTab(page_, tr("Properties"));
}

QTabWidget* SMCharacterStyle::widget()
{
	return widget_;
}

QString SMCharacterStyle::typeNamePlural()
{
	return tr("Character Styles");
}

QString SMCharacterStyle::typeNameSingular()
{
	return tr("Character Style");
}

void SMCharacterStyle::currentDoc(ScribusDoc *doc)
{
	doc_ = doc;
	if (doc_)
	{
		if (page_)
		{
			page_->fillLangCombo(doc_->scMW()->LangTransl);
			page_->fillColorCombo(doc_->PageColors);
			page_->fontFace_->RebuildList(doc_);
		}
	}
	else
	{
		removeConnections();
		selection_.clear();
		tmpStyles_.clear();
	}

}

StyleSet<CharStyle>* SMCharacterStyle::tmpStyles()
{
	return &tmpStyles_;
}

Q3ValueList<StyleName> SMCharacterStyle::styles(bool reloadFromDoc)
{
	Q3ValueList<StyleName> tmpList;

	if (!doc_)
		return tmpList; // no doc available

	if (reloadFromDoc)
		reloadTmpStyles();

	for (uint i = 0; i < tmpStyles_.count(); ++i)
	{
		if (tmpStyles_[i].hasName())
		{
			QString styleName(tmpStyles_[i].name());
			QString parentName(QString::null);

			if (tmpStyles_[i].hasParent())
				parentName = tmpStyles_[i].parent();

			tmpList << StyleName(styleName, parentName);
		}
	}

	return tmpList;
}

void SMCharacterStyle::reload()
{
	reloadTmpStyles();
}

void SMCharacterStyle::selected(const QStringList &styleNames)
{
	selection_.clear();
	selectionIsDirty_ = false;
	removeConnections();
	Q3ValueList<CharStyle> cstyles;

	tmpStyles_.invalidate();

	for (uint i = 0; i < tmpStyles_.count(); ++i)
		cstyles << tmpStyles_[i];

	for (int i = 0; i < styleNames.count(); ++i)
	{
		int index = tmpStyles_.find(styleNames[i]);
		if (index > -1)
			selection_.append(&tmpStyles_[index]);

	}

	page_->show(selection_, cstyles, doc_->paragraphStyle("").charStyle().language(), doc_->unitIndex());
	setupConnections();
}

QString SMCharacterStyle::fromSelection() const
{
	QString lsName(QString::null);
	if (!doc_)
		return lsName; // no doc available

	for (uint i = 0; i < doc_->m_Selection->count(); ++i)
	{
		// wth is going on here
		PageItem *item = doc_->m_Selection->itemAt(i);

		QString tmpName = item->itemText.defaultStyle().charStyle().parent();

		if (lsName.isNull() && !tmpName.isEmpty() && tmpName != "")
		{
			lsName = tmpName;
		}
		else if (!lsName.isNull() && !tmpName.isEmpty() && tmpName != "" && lsName != tmpName)
		{
			lsName = QString::null;
			break;
		}
	}
	return lsName;
}

void SMCharacterStyle::toSelection(const QString &styleName) const
{
	if (!doc_)
		return; // nowhere to apply or no doc

	doc_->itemSelection_SetNamedCharStyle(styleName);
}

QString SMCharacterStyle::newStyle()
{
	Q_ASSERT(doc_ && doc_->paragraphStyles().count() > 0);

	QString s = getUniqueName( tr("New Style"));
	CharStyle c;
	c.setName(s);
	tmpStyles_.create(c);
	return s;
}

QString SMCharacterStyle::newStyle(const QString &fromStyle)
{
	Q_ASSERT(tmpStyles_.resolve(fromStyle));
	if (!tmpStyles_.resolve(fromStyle))
		return QString::null;

	QString s = getUniqueName( tr("Clone of %1").arg(fromStyle));
	CharStyle c(tmpStyles_.get(fromStyle));
	c.setName(s);
	c.setShortcut(QString::null);
	tmpStyles_.create(c);

	return s;
}

QString SMCharacterStyle::getUniqueName(const QString &name)
{
	int id = 0;
	bool done = false;
	QString s(name);

	while (!done)
	{
start:
		++id;
		for (uint i = 0; i < tmpStyles_.count(); ++i)
		{
			if (tmpStyles_[i].name() == s)
			{
				s = tr("%1 (%2)", "This for unique name when creating "
						"a new character style. %1 will be the name "
								"of the style and %2 will be a number forming "
								"a style name like: New Style (2)").arg(name).arg(id);
				goto start;
			}
		}
		done = true;
	}

	return s;
}

void SMCharacterStyle::apply()
{
	if (!doc_)
		return;

	QMap<QString, QString> replacement;
	for (int i = 0; i < deleted_.count(); ++i)
		replacement[deleted_[i].first] = deleted_[i].second;

	doc_->redefineCharStyles(tmpStyles_, false);
	doc_->replaceCharStyles(replacement);

	deleted_.clear(); // deletion done at this point

	doc_->scMW()->propertiesPalette->paraStyleCombo->updateFormatList();
	doc_->scMW()->propertiesPalette->charStyleCombo->updateFormatList();
	doc_->scMW()->view->DrawNew();
	doc_->changed();
}

void SMCharacterStyle::editMode(bool isOn)
{
	if (isOn)
		reloadTmpStyles();
}

QString SMCharacterStyle::shortcut(const QString &stylename) const
{
	QString s = QString::null;
	int index = tmpStyles_.find(stylename);
	if (index > -1)
		s = tmpStyles_[index].shortcut();

	return s;
}

void SMCharacterStyle::setShortcut(const QString &shortcut)
{
	Q_ASSERT(selection_.count() == 1);
	if (selection_.count() != 1)
		return;

	selection_[0]->setShortcut(shortcut);

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMCharacterStyle::deleteStyles(const Q3ValueList<RemoveItem> &removeList)
{
	for (int i = 0; i < removeList.count(); ++i)
	{
		for (int k = 0; k < selection_.count(); ++k)
		{
			if (selection_[k]->name() == removeList[i].first)
			{
				selection_.erase(selection_.at(k));
				break;
			}
		}

		int index = tmpStyles_.find(removeList[i].first);
		if (index > -1)
			tmpStyles_.remove(index);
		deleted_ << removeList[i];
	}
}

void SMCharacterStyle::nameChanged(const QString &newName)
{
// 	for (int i = 0; i < selection_.count(); ++i)
// 		selection_[i]->setName(newName);

	QString oldName(selection_[0]->name());
	CharStyle c(*selection_[0]);
	c.setName(newName);
	tmpStyles_.create(c);
	selection_.clear();
	selection_.append(&tmpStyles_[tmpStyles_.find(newName)]);
	for (uint j = 0; j < tmpStyles_.count(); ++j)
	{
		int index = tmpStyles_.find(oldName);
		if (index > -1)
		{
			tmpStyles_.remove(index);
			break;
		}
	}

	for (uint j = 0; j < tmpStyles_.count(); ++j)
	{
		if (tmpStyles_[j].parent() == oldName)
			tmpStyles_[j].setParent(newName);
	}

	Q3ValueList<RemoveItem>::iterator it;
	for (it = deleted_.begin(); it != deleted_.end(); ++it)
	{
		if ((*it).second == oldName)
		{
			oldName = (*it).first;
			deleted_.remove(it);
			break;
		}
	}

	deleted_.append(RemoveItem(oldName, newName));

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMCharacterStyle::languageChange()
{
	if (widget_ && page_)
	{
		widget_->setTabLabel(page_, tr("Properties"));
		page_->languageChange();
	}
}

void SMCharacterStyle::unitChange()
{

}

void SMCharacterStyle::reloadTmpStyles()
{
	if (!doc_)
		return;

	selection_.clear();
	tmpStyles_.clear();
	tmpStyles_.redefine(doc_->charStyles(), true);
}

void SMCharacterStyle::setupConnections()
{
	if (!page_)
		return;

	connect(page_->fontFace_, SIGNAL(fontSelected(QString)), this, SLOT(slotFont(QString)));
	connect(page_->effects_, SIGNAL(State(int)), this, SLOT(slotEffects(int)));
	connect(page_->effects_->ShadowVal->Xoffset, SIGNAL(valueChanged(double)),
			   this, SLOT(slotEffectProperties()));
	connect(page_->effects_->ShadowVal->Yoffset, SIGNAL(valueChanged(double)),
			   this, SLOT(slotEffectProperties()));
	connect(page_->effects_->OutlineVal->LWidth, SIGNAL(valueChanged(double)),
			   this, SLOT(slotEffectProperties()));
	connect(page_->effects_->UnderlineVal->LPos, SIGNAL(valueChanged(double)),
			   this, SLOT(slotEffectProperties()));
	connect(page_->effects_->UnderlineVal->LWidth, SIGNAL(valueChanged(double)),
			   this, SLOT(slotEffectProperties()));
	connect(page_->effects_->StrikeVal->LPos, SIGNAL(valueChanged(double)),
			   this, SLOT(slotEffectProperties()));
	connect(page_->effects_->StrikeVal->LWidth, SIGNAL(valueChanged(double)),
			   this, SLOT(slotEffectProperties()));
	connect(page_->fillColor_, SIGNAL(activated(const QString&)), this, SLOT(slotFillColor()));
	connect(page_->fillShade_, SIGNAL(clicked()), this, SLOT(slotFillShade()));
	connect(page_->strokeColor_, SIGNAL(activated(const QString&)), this, SLOT(slotStrokeColor()));
	connect(page_->strokeShade_, SIGNAL(clicked()), this, SLOT(slotStrokeShade()));
	connect(page_->language_, SIGNAL(activated(int)), this, SLOT(slotLanguage()));
	connect(page_->fontSize_, SIGNAL(valueChanged(double)), this, SLOT(slotFontSize()));
	connect(page_->fontHScale_, SIGNAL(valueChanged(double)), this, SLOT(slotScaleH()));
	connect(page_->fontVScale_, SIGNAL(valueChanged(double)), this, SLOT(slotScaleV()));
	connect(page_->tracking_, SIGNAL(valueChanged(double)), this, SLOT(slotTracking()));
	connect(page_->baselineOffset_, SIGNAL(valueChanged(double)), this, SLOT(slotBaselineOffset()));
	connect(page_->fontFace_, SIGNAL(fontSelected(QString)), this, SLOT(slotFont(QString)));
	connect(page_->parentCombo, SIGNAL(activated(const QString&)),
	        this, SLOT(slotParentChanged(const QString&)));
}

void SMCharacterStyle::removeConnections()
{
	if (!page_)
		return;

	disconnect(page_->fontFace_, SIGNAL(fontSelected(QString)), this, SLOT(slotFont(QString)));
	disconnect(page_->effects_, SIGNAL(State(int)), this, SLOT(slotEffects(int)));
	disconnect(page_->effects_->ShadowVal->Xoffset, SIGNAL(valueChanged(double)),
			   this, SLOT(slotEffectProperties()));
	disconnect(page_->effects_->ShadowVal->Yoffset, SIGNAL(valueChanged(double)),
			   this, SLOT(slotEffectProperties()));
	disconnect(page_->effects_->OutlineVal->LWidth, SIGNAL(valueChanged(double)),
			   this, SLOT(slotEffectProperties()));
	disconnect(page_->effects_->UnderlineVal->LPos, SIGNAL(valueChanged(double)),
			   this, SLOT(slotEffectProperties()));
	disconnect(page_->effects_->UnderlineVal->LWidth, SIGNAL(valueChanged(double)),
			   this, SLOT(slotEffectProperties()));
	disconnect(page_->effects_->StrikeVal->LPos, SIGNAL(valueChanged(double)),
			   this, SLOT(slotEffectProperties()));
	disconnect(page_->effects_->StrikeVal->LWidth, SIGNAL(valueChanged(double)),
			   this, SLOT(slotEffectProperties()));
	disconnect(page_->fillColor_, SIGNAL(activated(const QString&)), this, SLOT(slotFillColor()));
	disconnect(page_->fillShade_, SIGNAL(clicked()), this, SLOT(slotFillShade()));
	disconnect(page_->strokeColor_, SIGNAL(activated(const QString&)), this, SLOT(slotStrokeColor()));
	disconnect(page_->strokeShade_, SIGNAL(clicked()), this, SLOT(slotStrokeShade()));
	disconnect(page_->language_, SIGNAL(activated(int)), this, SLOT(slotLanguage()));
	disconnect(page_->fontSize_, SIGNAL(valueChanged(double)), this, SLOT(slotFontSize()));
	disconnect(page_->fontHScale_, SIGNAL(valueChanged(double)), this, SLOT(slotScaleH()));
	disconnect(page_->fontVScale_, SIGNAL(valueChanged(double)), this, SLOT(slotScaleV()));
	disconnect(page_->tracking_, SIGNAL(valueChanged(double)), this, SLOT(slotTracking()));
	disconnect(page_->baselineOffset_, SIGNAL(valueChanged(double)), this, SLOT(slotBaselineOffset()));
	disconnect(page_->fontFace_, SIGNAL(fontSelected(QString)), this, SLOT(slotFont(QString)));
	disconnect(page_->parentCombo, SIGNAL(activated(const QString&)),
			this, SLOT(slotParentChanged(const QString&)));
}

void SMCharacterStyle::slotFontSize()
{
	if (page_->fontSize_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetFontSize();
	else
	{
		double a, b, value;
		int c;

		page_->fontSize_->getValues(&a, &b, &c, &value);
		value = value * 10;
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setFontSize(qRound(value));
	}

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMCharacterStyle::slotEffects(int e)
{
	StyleFlag s = ScStyle_None;
	if (page_->effects_->useParentValue())
	{
		for (int i = 0; i < selection_.count(); ++i)
		{
			selection_[i]->resetEffects();
			selection_[i]->resetShadowXOffset();
			selection_[i]->resetShadowYOffset();
			selection_[i]->resetOutlineWidth();
			selection_[i]->resetUnderlineOffset();
			selection_[i]->resetUnderlineWidth();
			selection_[i]->resetStrikethruOffset();
			selection_[i]->resetStrikethruWidth();
		}
	}
	else
	{
		s = static_cast<StyleFlag>(e);
		double a, b, sxo, syo, olw, ulp, ulw, slp, slw;
		int c;

		page_->effects_->ShadowVal->Xoffset->getValues(&a, &b, &c, &sxo);
		sxo *= 10;
		page_->effects_->ShadowVal->Yoffset->getValues(&a, &b, &c, &syo);
		syo *= 10;

		page_->effects_->OutlineVal->LWidth->getValues(&a, &b, &c, &olw);
		olw *= 10;

		page_->effects_->UnderlineVal->LPos->getValues(&a, &b, &c, &ulp);
		ulp *= 10;
		page_->effects_->UnderlineVal->LWidth->getValues(&a, &b, &c, &ulw);
		ulw *= 10;

		page_->effects_->StrikeVal->LPos->getValues(&a, &b, &c, &slp);
		slp *= 10;
		page_->effects_->StrikeVal->LWidth->getValues(&a, &b, &c, &slw);
		slw *= 10;

		for (int i = 0; i < selection_.count(); ++i)
		{
			selection_[i]->setEffects(s);
			selection_[i]->setShadowXOffset(qRound(sxo));
			selection_[i]->setShadowYOffset(qRound(syo));
			selection_[i]->setOutlineWidth(qRound(olw));
			selection_[i]->setUnderlineOffset(qRound(ulp));
			selection_[i]->setUnderlineWidth(qRound(ulw));
			selection_[i]->setStrikethruOffset(qRound(slp));
			selection_[i]->setStrikethruWidth(qRound(slw));
		}
	}


	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMCharacterStyle::slotEffectProperties()
{
	double a, b, sxo, syo, olw, ulp, ulw, slp, slw;
	int c;

	page_->effects_->ShadowVal->Xoffset->getValues(&a, &b, &c, &sxo);
	sxo *= 10;
	page_->effects_->ShadowVal->Yoffset->getValues(&a, &b, &c, &syo);
	syo *= 10;

	page_->effects_->OutlineVal->LWidth->getValues(&a, &b, &c, &olw);
	olw *= 10;

	page_->effects_->UnderlineVal->LPos->getValues(&a, &b, &c, &ulp);
	ulp *= 10;
	page_->effects_->UnderlineVal->LWidth->getValues(&a, &b, &c, &ulw);
	ulw *= 10;

	page_->effects_->StrikeVal->LPos->getValues(&a, &b, &c, &slp);
	slp *= 10;
	page_->effects_->StrikeVal->LWidth->getValues(&a, &b, &c, &slw);
	slw *= 10;
	
	for (int i = 0; i < selection_.count(); ++i)
	{
		selection_[i]->setShadowXOffset(qRound(sxo));
		selection_[i]->setShadowYOffset(qRound(syo));
		selection_[i]->setOutlineWidth(qRound(olw));
		selection_[i]->setUnderlineOffset(qRound(ulp));
		selection_[i]->setUnderlineWidth(qRound(ulw));
		selection_[i]->setStrikethruOffset(qRound(slp));
		selection_[i]->setStrikethruWidth(qRound(slw));
	}

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMCharacterStyle::slotFillColor()
{
	if (page_->fillColor_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetFillColor();
	else {		
		QString col(page_->fillColor_->currentText());
		
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setFillColor(col);
	}
	
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMCharacterStyle::slotFillShade()
{
	if (page_->fillShade_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetFillShade();
	else {
		int fs = page_->fillShade_->getValue();

		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setFillShade(fs);
	}
	
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMCharacterStyle::slotStrokeColor()
{
	if (page_->strokeColor_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetStrokeColor();
	else {
		QString c(page_->strokeColor_->currentText());

		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setStrokeColor(c);
	}
	
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMCharacterStyle::slotStrokeShade()
{
	if (page_->strokeShade_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetStrokeShade();
	else {
		int ss = page_->strokeShade_->getValue();
		
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setStrokeShade(ss);
	}
	
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMCharacterStyle::slotLanguage()
{
	QMap<QString,QString>::Iterator it;
	QString language = doc_->paragraphStyle("").charStyle().language();

	if (page_->language_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetLanguage();
	else
	{
		for (it = doc_->scMW()->LangTransl.begin(); it != doc_->scMW()->LangTransl.end(); ++it)
		{
			if (it.data() == page_->language_->currentText())
			{
				language = it.key();
				break;
			}
		}
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setLanguage(language);
	}


	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMCharacterStyle::slotScaleH()
{
	if (page_->fontHScale_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetScaleH();
	else
	{
		double a, b, value;
		int c;

		page_->fontHScale_->getValues(&a, &b, &c, &value);
		value = value * 10;
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setScaleH(qRound(value));
	}


	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMCharacterStyle::slotScaleV()
{
	if (page_->fontVScale_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetScaleV();
	else
	{
		double a, b, value;
		int c;

		page_->fontVScale_->getValues(&a, &b, &c, &value);
		value = value * 10;
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setScaleV(qRound(value));
	}


	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMCharacterStyle::slotTracking()
{
	if (page_->tracking_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetTracking();
	else
	{
		double a, b, value;
		int c;

		page_->tracking_->getValues(&a, &b, &c, &value);
		value = value * 10;
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setTracking(qRound(value));
	}

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMCharacterStyle::slotBaselineOffset()
{
	if (page_->baselineOffset_->useParentValue())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetBaselineOffset();
	else
	{
		double a, b, value;
		int c;
		
		page_->baselineOffset_->getValues(&a, &b, &c, &value);
		value = value * 10;
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setBaselineOffset(qRound(value));
	}

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMCharacterStyle::slotFont(QString s)
{
	ScFace sf;
	if (page_->fontFace_->useParentFont())
		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->resetFont();
	else {
		sf = PrefsManager::instance()->appPrefs.AvailFonts[s];

		for (int i = 0; i < selection_.count(); ++i)
			selection_[i]->setFont(sf);
	}
	
	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

void SMCharacterStyle::slotParentChanged(const QString &parent)
{
	Q_ASSERT(!parent.isNull());

	QStringList sel;

	for (int i = 0; i < selection_.count(); ++i)
	{
		selection_[i]->erase();
		selection_[i]->setParent(parent);
		sel << selection_[i]->name();
	}

	selected(sel);

	if (!selectionIsDirty_)
	{
		selectionIsDirty_ = true;
		emit selectionDirty();
	}
}

SMCharacterStyle::~SMCharacterStyle()
{
	delete page_;
	delete widget_;
	page_ = 0;
	widget_ = 0;
}

