#ifndef MAINVIEWMODEL_H
#define MAINVIEWMODEL_H

#include <QWidget>

class MainViewModel : public QWidget
{
public:
    MainViewModel();
    virtual void enterAnimation() = 0;
    virtual void updateUI() = 0;
    virtual void quitAnimation() = 0;
};

#endif // MAINVIEWMODEL_H
