#include "garderieviewmodel.h"

GarderieViewModel::GarderieViewModel()
{
    statemanager = new StateManager();
    QString names[] = {
        "Francisca",
        "Sofia",
        "Jean-francois",
        "Simon-Pierre",
        "Oscar",
        "Yves",
        "Sebastien",
        "Vincent",
        "Normand"
    };
    enfantList = new QVector<EnfantModel*>();
    for(int i = 0;i < 9; i++){
        EnfantModel* enfant = new EnfantModel();
        enfant->id = "a"+i;
        enfant->name = names[i];
        enfant->icon ="/home/jf/Desktop/Testing/GarderieMaison/images/enfant.png";
        enfantList->append(enfant);
    }

    //for(auto it = enfantList->begin(); it != enfantList->end(); it++){
    //    it->icon = "/home/jf/Desktop/Testing/GarderieMaison/images/enfant.png";
    //}

    //for sorting, checkout at QSwap
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
