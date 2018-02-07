#ifndef CONSERVATEURMANAGER_H
#define CONSERVATEURMANAGER_H

#include <vector>
#include <conservateur.h>
#include <QtCore/qobject.h>
#include <string.h>

using namespace std;

class ConservateurManager : QObject
{
    Q_OBJECT

public:
    static ConservateurManager& getSingleton()
    {
       static ConservateurManager INSTANCE;
       return INSTANCE;
    }
    Conservateur getConservateurFromId(string id);
    void setConservateurFromId(string id, Conservateur* _conservateur);
    vector<Conservateur> getConservateurList();

private:
    ConservateurManager();
    vector<Conservateur> conservateurList;

Q_SIGNALS:
    void conservateurChangeListener();

};

#endif // CONSERVATEURMANAGER_H
