#include "mainwindow.h"
#include <QApplication>
#include "conservateur.h"
#include "conservateurmanager.h"
#include <iostream>

using namespace std;

int main(int argc, char *argv[])
{
    int sizee = ConservateurManager::getSingleton().getConservateurList().size();
    cout << "Test" << sizee;
    QApplication a(argc, argv);
    MainWindow w;
    w.show();
    return a.exec();
}
