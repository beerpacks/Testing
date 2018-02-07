#ifndef PERSONNE_H
#define PERSONNE_H

#include <string>

class Personne
{
public:
    Personne();
    Personne(std::string _prenom, std::string _nomFamille);
    std::string getPrenom();
    std::string getNomFamille();
    void setPrenom(std::string _prenom);
    void setNomFamille(std::string _nom);
protected:
    std::string prenom;
    std::string nomFamille;
};

#endif // PERSONNE_H
