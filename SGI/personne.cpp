#include "personne.h"

Personne::Personne()
{
    prenom = "Joe";
    nomFamille = "Random";
}

Personne::Personne(std::string _prenom, std::string _nomFamille)
{
    prenom = _prenom;
    nomFamille = _nomFamille;
}

std::string Personne::getPrenom()
{
    return prenom;
}

std::string Personne::getNomFamille()
{
    return nomFamille;
}

void Personne::setPrenom(std::string _prenom)
{
    prenom = _prenom;
}

void Personne::setNomFamille(std::string _nom)
{
    nomFamille = _nom;
}
