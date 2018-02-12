#ifndef ARTISTE_H
#define ARTISTE_H

#include <personne.h>

class Artiste : Personne
{
public:
    Artiste();
    Artiste(QString _id, QString _prenom, QString _nom, QString _idConservateur);
    Artiste(Artiste* _artiste);
    QString getIdArtiste();
    QString getIdConservateur();
    void setIdConservateur(QString _idConservateur);

private:
    QString id;
    QString idConservateur;
};

#endif // ARTISTE_H
