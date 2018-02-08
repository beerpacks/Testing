#include "personne.h"

Personne::Personne()
{
    prenom = "Joe";
    nomFamille = "Random";
}

Personne::Personne(QString _prenom, QString _nomFamille)
{
    prenom = _prenom;
    nomFamille = _nomFamille;
}

QString Personne::getPrenom()
{
    return prenom;
}

QString Personne::getNomFamille()
{
    return nomFamille;
}

void Personne::setPrenom(QString _prenom)
{
    prenom = _prenom;
}

void Personne::setNomFamille(QString _nom)
{
    nomFamille = _nom;
}
