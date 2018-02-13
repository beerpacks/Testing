#ifndef OEUVRE_H
#define OEUVRE_H

#include <QString>
#include <QDateTime>

class Oeuvre
{
public:
    Oeuvre();
    Oeuvre(QString _id, QString _titre, QDateTime date, double _valeur, QString _idArtiste);
    QString getId();
    QString getTitre();
    QDateTime getDateConception();
    double getValeur();
    void setValeur(double nouvelleValeur);
    QString getIdArtiste();
private:
    QString id;
    QString titre;
    QDateTime dateConception;
    double valeur;
    QString idArtiste;
};

#endif // OEUVRE_H
