#include "garderieviewmodel.h"

GarderieViewModel::GarderieViewModel()
{
    statemanager = new StateManager();
}

StateManager *GarderieViewModel::getStateManager()
{
    return statemanager;
}

void GarderieViewModel::setEnfantList(QVector<EnfantModel *> newList)
{
    enfantList = newList;
}
