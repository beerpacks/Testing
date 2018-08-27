#ifndef FAKETESTPANE_H
#define FAKETESTPANE_H
#include "mainviewmodel.h"

class FakeTestPane : public MainViewModel
{
public:
    FakeTestPane();

    // MainViewModel interface
public:
    void enterAnimation();
    void updateUI();
    void quitAnimation();
};

#endif // FAKETESTPANE_H
