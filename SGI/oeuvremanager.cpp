#include "oeuvremanager.h"

Oeuvre OeuvreManager::getOeuvre(QString id)
{
    /*
    for(auto it = oeuvreList.begin();it != oeuvreList.end();++it){
        if(it->getId() == id)
            return it;
    }
    */
    throw std::invalid_argument("No oeuvre found at this id");
}

void OeuvreManager::setOeuvre(QString id, Oeuvre _oeuvre)
{
    for(auto it = oeuvreList.begin();it != oeuvreList.end();++it){
        if(it->getId() == id)
            it = &_oeuvre;
    }
    throw std::invalid_argument("No oeuvre found at this id");
}

QVector<Oeuvre> &OeuvreManager::getOeuvreList()
{
    return oeuvreList;
}

OeuvreManager::OeuvreManager()
{
    {
//        Oeuvre oeuvre("O001","Test",,0,"A001");
//        oeuvreList.push_back(oeuvre);
    }
}
