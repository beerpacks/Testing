#include "mainwindow.h"
#include <garderieview.h>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent)
{
    GarderieViewModel* tmp = new GarderieViewModel();
    GarderieView* test = new GarderieView();
    test->setModel(tmp);
    test->setStartView();
    test->setGroupView();

    tmp->getStateManager()->onStartUp();
    QWidget* central = new QWidget();
    setCentralWidget(central);
    central->setLayout(test);
}

MainWindow::~MainWindow()
{

}
