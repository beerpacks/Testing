#include "mainwindow.h"
#include <QApplication>
#include "conservateur.h"
#include "conservateurmanager.h"
#include <iostream>
#include <sgicontroller.h>

using namespace std;

int main(int argc, char *argv[])
{

    ConservateurManager* consManager = new ConservateurManager();
    cout<<consManager->GetSize();
    cout<<consManager->GetConservateurFromId("C001")->toString().toUtf8().constData();
    cout<<consManager->GetSize();
    //consManager->SetConservateurFromId("C001",consManager->GetConservateurFromId("C001")->setCommission(0.5));
    //cout<<consManager->GetConservateurFromId("C001")->toString();
    //SgiController* controller = new SgiController();


    QApplication a(argc, argv);
    MainWindow w;
    w.show();

    MainWindow another;
    another.show();
    return a.exec();
}
