#ifndef _SCRIBUS_SHORTPARSE_H_
#define _SCRIBUS_SHORTPARSE_H_

#include "shortwords.h"

#include <qobject.h>

class PageItem;

/*! \brief This is the Scribus Short Words plugin main mechanism.

It walks trough the user specified objects and apply the spaces.
This code is based on the Scribus-Vlna plug in rewritten for
international use.

\author Petr Vanek <petr@yarpen.cz> with contributions by good people listed in AUTHORS file
*/
class SWParse : public QObject
{
	Q_OBJECT

public:
	/*! \brief lightweight constructor */
	SWParse();
	/*! \brief nothing here to do */
	~SWParse(){};

	/*! \brief count of the changes (one frame = one change) */
	uint modify;

	/*! \brief process one frame - base method! */
	void parseItem(PageItem *aFrame);
	/*! \brief selcted frames on the page */
	void parseSelection();
	/*! \brief one page - using actual page */
	void parsePage();
	/*! \brief one page */
	void parsePage(int page);
	/*! \brief all pages in the document */
	void parseAll();
};

#endif
