#include "artiste.h"

Artiste::Artiste()
{

}

Artiste::Artiste(QString _id, QString _prenom, QString _nom, QString _idConservateur)
    :Personne(_prenom,_nom)
{
    id = _id;
    idConservateur = _idConservateur;
}

Artiste::Artiste(Artiste *_artiste)
{

}

QString Artiste::getIdArtiste()
{
    return id;
}

QString Artiste::getIdConservateur()
{
    return idConservateur;
}

void Artiste::setIdConservateur(QString _idConservateur)
{
    idConservateur = _idConservateur;
}
