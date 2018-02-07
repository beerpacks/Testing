#ifndef CONSERVATEUR_H
#define CONSERVATEUR_H

#include <personne.h>
#include <string>

class Conservateur : Personne
{
public:
    Conservateur();
    Conservateur(std::string _id, std::string _prenom, std::string _nom, double _commission);
    Conservateur(Conservateur* _conservateur);
    std::string getId();
    double getCommission();
    void setCommission(double valueSold);
    static const Conservateur* Conservateur_Invalid;
private:
    std::string id;
    double commission;
};

#endif // CONSERVATEUR_H
