#include "conservateur.h"

Conservateur::Conservateur()
{

}

Conservateur::Conservateur(QString _id, QString _prenom, QString _nom, double _commission)
    :Personne(_prenom,_nom)
{
    id = _id;
    commission = _commission;
}

Conservateur::Conservateur(Conservateur *_conservateur)
{
    id = _conservateur->getId();
    commission = _conservateur->getCommission();
    prenom = _conservateur->getPrenom();
    nomFamille = _conservateur->getNomFamille();
}

QString Conservateur::getId()
{
    return id;
}

double Conservateur::getCommission()
{
    return commission;
}

void Conservateur::setCommission(double valueSold)
{
    commission += valueSold * 0.2;
}

QString Conservateur::toString()
{
    return QString("Id:" + id + " Nom:"+prenom+","+nomFamille + " Commission:" + commission);
}
