#include "sgicontroller.h"
#include<iostream>


SgiController::SgiController()
{
    conservateurManager = new ConservateurManager();
    //QObject::connect(&conservateurManager,SIGNAL(conservateurChangeListener(void)),this, SLOT(testSlot(void)));
}
/*
void SgiController::testSlot()
{
   //cout<<"test";
}*/
