#ifndef ARTISTEMANAGER_H
#define ARTISTEMANAGER_H

#include <artiste.h>
#include <QVector>

class ArtisteManager
{
public:
    static ArtisteManager& getSingleton()
    {
        static ArtisteManager INSTANCE;
        return INSTANCE;
    }
    Artiste getArtisteFromId(QString id);
    void setArtisteFromId(QString id, Artiste _artiste);
    QVector<Artiste>& getArtisteList();
private:
    ArtisteManager();
    QVector<Artiste> artisteList;
};

#endif // ARTISTEMANAGER_H
