#include "oeuvre.h"

Oeuvre::Oeuvre()
{

}

Oeuvre::Oeuvre(QString _id, QString _titre, QDateTime date, double _valeur, QString _idArtiste)
{
    id = _id;
    titre = _titre;
    dateConception = date;
    valeur = _valeur;
    idArtiste = _idArtiste;
}

QString Oeuvre::getId()
{
    return id;
}

QString Oeuvre::getTitre()
{
    return titre;
}

QDateTime Oeuvre::getDateConception()
{
    return dateConception;
}

double Oeuvre::getValeur()
{
    return valeur;
}

void Oeuvre::setValeur(double nouvelleValeur)
{
    valeur = nouvelleValeur;
}

QString Oeuvre::getIdArtiste()
{
    return idArtiste;
}
