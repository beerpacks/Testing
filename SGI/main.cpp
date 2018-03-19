#include "mainwindow.h"
#include <QApplication>
#include "conservateur.h"
#include "conservateurmanager.h"
#include <iostream>
#include <sgicontroller.h>
#include "frmserverside.h"
#include "sgiviewmodel.h"
#include <QObject>

using namespace std;

int main(int argc, char *argv[])
{

    ConservateurManager* consManager = new ConservateurManager();
    cout<<consManager->GetSize();
    cout<<consManager->GetConservateurFromId("C001")->toString().toUtf8().constData();
    cout<<consManager->GetSize();

    //SgiViewModel* svm = new SgiViewModel();

    //QObject::connect(consManager,SIGNAL(conservateurListUpdated()),svm,SLOT(onConservateurChanges()));

    //consManager->AddConservateur();

    //consManager->SetConservateurFromId("C001",consManager->GetConservateurFromId("C001")->setCommission(0.5));
    //cout<<consManager->GetConservateurFromId("C001")->toString();

    SgiController* controller = new SgiController();
    controller->AddConservateur("C003","Francisca","Bernard-Arevalo",0.0);

    QApplication a(argc, argv);
    MainWindow w;
    w.show();

    FrmServerSide fss;
    fss.show();
    return a.exec();
}
