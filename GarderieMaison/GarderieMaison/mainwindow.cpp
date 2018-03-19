#include "mainwindow.h"
#include <garderieview.h>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent)
{
    QWidget* central = new QWidget();
    setCentralWidget(central);
    GarderieView* test = new GarderieView();
    central->setLayout(test);
}

MainWindow::~MainWindow()
{

}
