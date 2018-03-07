#ifndef OEUVREMANAGER_H
#define OEUVREMANAGER_H

#include <oeuvre.h>
#include <QVector>

class OeuvreManager
{
public:
    static OeuvreManager& getSingleton()
    {
       static OeuvreManager INSTANCE;
       return INSTANCE;
    }
    Oeuvre getOeuvre(QString id);
    void setOeuvre(QString id, Oeuvre _oeuvre);
    QVector<Oeuvre>& getOeuvreList();

private:
    OeuvreManager();
    QVector<Oeuvre> oeuvreList;
};

#endif // OEUVREMANAGER_H
