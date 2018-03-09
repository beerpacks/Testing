#ifndef CONSERVATEURMANAGER_H
#define CONSERVATEURMANAGER_H

#include <QVector>
#include <conservateur.h>
#include <QtCore/qobject.h>
#include <QString>

using namespace std;

class ConservateurManager
{

public:
    ConservateurManager();
    void AddConservateur(Conservateur* newConservateur);
    Conservateur* GetConservateurFromId(QString id);
    void SetConservateurFromId(QString id, Conservateur* _conservateur);
    int GetSize();

private:
    QVector<Conservateur*>* conservateurList;

};

#endif // CONSERVATEURMANAGER_H
