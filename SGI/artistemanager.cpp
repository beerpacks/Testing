#include "artistemanager.h"

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
        Artiste artiste("A001","JF","Pelletier","C001");
        artisteList.push_back(artiste);
    }
    {
        Artiste artiste("A002","Simon-Pierre","Bernard Arevalo","C001");
        artisteList.push_back(artiste);
    }
}
