#include "sgicontroller.h"
#include<iostream>


SgiController::SgiController()
{
    conservateurManager = new ConservateurManager();
    QObject::connect(conservateurManager,SIGNAL(conservateurListUpdated()),this, SLOT(onConservateurChanges()));
}

void SgiController::AddConservateur(QString _id, QString _prenom, QString _nom, double _commission)
{
    conservateurManager->AddConservateur(new Conservateur(_id,_prenom,_nom,_commission));
}

void SgiController::onConservateurChanges()
{
    cout<<"Nouveau conservateur";
}
