#include "mainwindow.h"
#include <garderieview.h>
#include <qpushbutton.h>
#include "educatriceview.h"
#include "softwarepath.h"
#include "enfantview.h"
#include "QDir"
MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent)
{
    setFixedSize(*getSizeFromEnum(_1366x768));
    setSizePolicy(QSizePolicy::Fixed, QSizePolicy::Fixed);

    GarderieViewModel* tmp = new GarderieViewModel();
    GarderieView* test = new GarderieView();
    test->setModel(tmp);
    {
        test->setStartView(new StartUp(tmp));
    }
    {
        EducatriceView* educatriceView = new EducatriceView(tmp);
        educatriceView->setEnfantView(new EnfantView(tmp));
        test->setEducatriceView(educatriceView);
    }

    setCentralWidget(test);

    tmp->getStateManager()->onStartUp();
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
