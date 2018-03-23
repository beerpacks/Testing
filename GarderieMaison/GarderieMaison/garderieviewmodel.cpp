#include "garderieviewmodel.h"

GarderieViewModel::GarderieViewModel()
{
    statemanager = new StateManager();
    enfantList = new QVector<EnfantModel*>();
    {
        EnfantModel* enfant = new EnfantModel();
        enfant->id = "a1";
        enfant->name = "Francisca";
        enfantList->append(enfant);
    }
    {
        EnfantModel* enfant = new EnfantModel();
        enfant->id = "a2";
        enfant->name = "JF";
        enfantList->append(enfant);
    }
    {
        EnfantModel* enfant = new EnfantModel();
        enfant->id = "a3";
        enfant->name = "Simon-Pierre";
        enfantList->append(enfant);
    }
    {
        EnfantModel* enfant = new EnfantModel();
        enfant->id = "a4";
        enfant->name = "Yves";
        enfantList->append(enfant);
    }
    {
        EnfantModel* enfant = new EnfantModel();
        enfant->id = "a5";
        enfant->name = "Normand";
        enfantList->append(enfant);
    }
    {
        EnfantModel* enfant = new EnfantModel();
        enfant->id = "a6";
        enfant->name = "Sebastien";
        enfantList->append(enfant);
    }
}

StateManager *GarderieViewModel::getStateManager()
{
    return statemanager;
}

void GarderieViewModel::setEnfantList(QVector<EnfantModel *>* newList)
{
    enfantList = newList;
}

QVector<EnfantModel *> *GarderieViewModel::getEnfantList()
{
    return enfantList;
}
