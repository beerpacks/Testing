#include "conservateur.h"

Conservateur::Conservateur()
{

}

Conservateur::Conservateur(std::string _id, std::string _prenom, std::string _nom, double _commission)
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

std::string Conservateur::getId()
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
