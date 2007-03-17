/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef MDUP_H
#define MDUP_H

#include <qdialog.h>
#include <qlayout.h>
#include <qlabel.h>
#include <qspinbox.h>
#include <qpushbutton.h>
//Added by qt3to4:
#include <Q3GridLayout>
#include <Q3HBoxLayout>
#include <Q3VBoxLayout>
#include "scrspinbox.h"

class Mdup : public QDialog
{
    Q_OBJECT

public:
    Mdup( QWidget* parent, double Dx, double Dy, int unitIndex );
    ~Mdup() {};

    QLabel* TextLabel1_2;
    QLabel* TextLabel1_2_2;
    QSpinBox* Ncopies;
    ScrSpinBox* ShiftV;
    QPushButton* PushButton12;
    QLabel* TextLabel1;
    ScrSpinBox* ShiftH;
    QPushButton* PushButton13;

protected:
    Q3VBoxLayout* MdupLayout;
    Q3GridLayout* Layout4;
    Q3HBoxLayout* Layout3;

};

#endif // MDUP_H
