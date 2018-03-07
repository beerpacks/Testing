#include "artistemanager.h"


/*

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
*/

Artiste ArtisteManager::getArtisteFromId(QString id)
{
    for(auto it = artisteList.begin();it != artisteList.end();++it){
    if(it->getIdArtiste() == id)
        return it;
    }
    throw std::invalid_argument("No artiste found at this id");
}

void ArtisteManager::setArtisteFromId(QString id, Artiste _artiste)
{
    for(auto it = artisteList.begin(); it != artisteList.end(); ++it){
        if(it->getIdArtiste() == id)
            it = & _artiste;
    }
    throw std::invalid_argument("No artiste found at this id");
}

QVector<Artiste>& ArtisteManager::getArtisteList()
{
    return artisteList;
}

ArtisteManager::ArtisteManager()
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
