#include "conservateurmanager.h"

ConservateurManager::ConservateurManager()
{
    conservateurList = new QVector<Conservateur*>();
    {
        conservateurList->push_back(new Conservateur("C001","JF","Pelletier",0.0));
    }
    {
        conservateurList->push_back(new Conservateur("C002","Simon-Pierre","Bernard Arevalo",0.0));
    }
}

void ConservateurManager::AddConservateur(Conservateur *newConservateur)
{
    conservateurList->push_back(newConservateur);
}

Conservateur* ConservateurManager::GetConservateurFromId(QString id)
{
    for(int i = 0; i < conservateurList->size(); i++)
    {
        if(conservateurList->at(i)->getId() == id)
        {
            return conservateurList->at(i);
        }
    }
    throw std::invalid_argument("No conservateur found at this id");
}

void ConservateurManager::SetConservateurFromId(QString id, Conservateur* _conservateur)
{

    for(int i = 0; i < conservateurList->size(); i++)
    {
        if(conservateurList->at(i)->getId() == id)
        {
            conservateurList->replace(i,_conservateur);
        }
    }
    throw std::invalid_argument("No conservateur found at this id");
}

int ConservateurManager::GetSize()
{
    return conservateurList->size();
}

