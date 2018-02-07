#include "conservateurmanager.h"

Conservateur ConservateurManager::getConservateurFromId(string id)
{
    for(int i = 0 ; i < conservateurList.size(); i++){
        if(((Conservateur)conservateurList.at(i)).getId() == id)
            return (Conservateur)conservateurList.at(i);
    }
    return Conservateur::Conservateur_Invalid;
}

void ConservateurManager::setConservateurFromId(string id, Conservateur *_conservateur)
{
    for(int i = 0 ; i < conservateurList.size(); i++){
        if(((Conservateur)conservateurList.at(i)).getId() == id)
           conservateurList[i] = Conservateur(_conservateur);
    }
    conservateurChangeListener();
}

vector<Conservateur> ConservateurManager::getConservateurList()
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
