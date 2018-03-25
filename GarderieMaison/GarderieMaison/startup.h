#ifndef STARTUP_H
#define STARTUP_H

#include <QGridLayout>
#include <garderieviewmodel.h>
#include <QWidget>
#include "QHBoxLayout"
#include "mainviewmodel.h"

class StartUp : public MainViewModel
{
    Q_OBJECT
public:
    StartUp(GarderieViewModel* _viewModel);
    void enterAnimation();
    void updateUI();
    void quitAnimation();

private:
    GarderieViewModel* model;

private slots:
    void pressHereButton_press(bool);
};

#endif // STARTUP_H
