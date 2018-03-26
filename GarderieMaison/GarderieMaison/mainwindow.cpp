#include "mainwindow.h"
#include <garderieview.h>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent)
{
    setFixedSize(*getSizeFromEnum(_1366x768));
    setSizePolicy(QSizePolicy::Fixed, QSizePolicy::Fixed);
    GarderieViewModel* tmp = new GarderieViewModel();
    GarderieView* test = new GarderieView();
    test->setModel(tmp);
    test->setStartView();
    test->setEducatriceView();

    tmp->getStateManager()->onStartUp();
    QWidget* central = new QWidget();
    setCentralWidget(central);
    central->setLayout(test);
}

MainWindow::~MainWindow()
{

}

QSize *MainWindow::getSizeFromEnum(MainWindow::ScreenSize screener)
{
    if(screener == _1366x768)
        return new QSize(1366,768);
    else
        return new QSize(800,480);
}
