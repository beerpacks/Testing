#ifndef STARTUP_H
#define STARTUP_H

#include <QGridLayout>
#include <garderieviewmodel.h>

class StartUp : public QGridLayout
{
public:
    StartUp(GarderieViewModel* _viewModel);

private:
    GarderieViewModel* model;

private slots:
    pressHereButton_press(bool why);
};

#endif // STARTUP_H
