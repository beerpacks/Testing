#ifndef GARDERIEVIEWMODEL_H
#define GARDERIEVIEWMODEL_H

#include <QObject>
#include <statemanager.h>
#include <enfantmodel.h>
#include <QVector>

class GarderieViewModel:public QObject
{
    Q_OBJECT
public:
    GarderieViewModel();
    StateManager* getStateManager();
    void setEnfantList(QVector<EnfantModel*> newList);

private:
    StateManager* statemanager;
    QVector<EnfantModel*> enfantList;
};

#endif // GARDERIEVIEWMODEL_H
