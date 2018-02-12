#include "conservateurmanager.h"

Conservateur ConservateurManager::getConservateurFromId(QString id)
{
    for(auto it = conservateurList.begin();it != conservateurList.end();++it){
        if(it->getId() == id)
            return it;
    }
    throw std::invalid_argument("No conservateur found at this id");
}

void ConservateurManager::setConservateurFromId(QString id, Conservateur _conservateur)
{
    for(auto it = conservateurList.begin();it != conservateurList.end();++it){
        if(it->getId() == id)
            it = &_conservateur;
    }
    throw std::invalid_argument("No conservateur found at this id");
}

QVector<Conservateur>& ConservateurManager::getConservateurList()
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
