#ifndef CONSERVATEURMANAGER_H
#define CONSERVATEURMANAGER_H

#include <QVector>
#include <conservateur.h>
#include <QtCore/qobject.h>
#include <QString>

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
    Conservateur getConservateurFromId(QString id);
    void setConservateurFromId(QString id, Conservateur _conservateur);
    QVector<Conservateur>& getConservateurList();

private:
    ConservateurManager();
    QVector<Conservateur> conservateurList;

Q_SIGNALS:
    void conservateurChangeListener();

};

#endif // CONSERVATEURMANAGER_H
