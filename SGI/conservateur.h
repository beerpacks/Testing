#ifndef CONSERVATEUR_H
#define CONSERVATEUR_H

#include <personne.h>
#include <QString>

class Conservateur : Personne
{
public:
    Conservateur();
    Conservateur(QString _id, QString _prenom, QString _nom, double _commission);
    Conservateur(Conservateur* _conservateur);
    QString getId();
    double getCommission();
    void setCommission(double valueSold);
    static const Conservateur* Conservateur_Invalid;
private:
    QString id;
    double commission;
};

#endif // CONSERVATEUR_H
