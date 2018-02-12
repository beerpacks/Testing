#ifndef PERSONNE_H
#define PERSONNE_H

#include <QString>

class Personne
{
public:
    Personne();
    Personne(QString _prenom, QString _nomFamille);
    QString getPrenom();
    QString getNomFamille();
    void setPrenom(QString _prenom);
    void setNomFamille(QString _nom);
protected:
    QString prenom;
    QString nomFamille;
};

#endif // PERSONNE_H
