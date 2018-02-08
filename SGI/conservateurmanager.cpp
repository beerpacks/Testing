#include "conservateurmanager.h"

Conservateur ConservateurManager::getConservateurFromId(QString id)
{
    for(int i = 0 ; i < conservateurList.size(); i++){
        if(((Conservateur)conservateurList.at(i)).getId() == id)
            return (Conservateur)conservateurList.at(i);
    }
    throw std::invalid_argument("No conservateur found at this id");
}

void ConservateurManager::setConservateurFromId(QString id, Conservateur *_conservateur)
{
    /*
    for(int i = 0 ; i < conservateurList.size(); i++){
        if(((Conservateur)conservateurList.at(i)).getId() == id)
           conservateurList[i] = Conservateur(_conservateur);
    }
    conservateurChangeListener();
    */
}

QVector<Conservateur> ConservateurManager::getConservateurList()
{
    return conservateurList;
}

ConservateurManager::ConservateurManager()
{

    {
        Conservateur conservateur("C001","JF","Pelletier",0.0);
        conservateurList.push_back(conservateur);
    }
    {
        Conservateur conservateur("C002","Simon-Pierre","Bernard Arevalo",0.0);
        conservateurList.push_back(conservateur);
    }
}
