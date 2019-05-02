#ifndef SGICONTROLLER_H
#define SGICONTROLLER_H

#include<conservateurmanager.h>
#include<QObject>

class SgiController : public QObject
{
     Q_OBJECT
public:
    SgiController();
    void AddConservateur(QString _id, QString _prenom, QString _nom, double _commission);
    //Conservateur* GetConservateur(QString _id);
    //void SetConservateurFromId(QString id, Conservateur* _conservateur);

public slots:
    void onConservateurChanges();

private:
    ConservateurManager* conservateurManager;

//Q_SIGNALS:
 //   void onConservateurChange();

};

#endif // SGICONTROLLER_H
