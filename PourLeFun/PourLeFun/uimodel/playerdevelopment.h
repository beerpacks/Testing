#ifndef PLAYERDEVELOPMENT_H
#define PLAYERDEVELOPMENT_H

#include <QObject>

class PlayerDevelopment : public QObject
{
    Q_OBJECT
    Q_PROPERTY(int TacticPoint READ TacticPoint WRITE setTacticPoint) //TIFY TacticPoint())    ; //Changed)
public:
    PlayerDevelopment();
    PlayerDevelopment(int _tactic, int _techno, int _magic, int _training);
    int getTacticPoint();
    int getTechnoPoint();
    int getMagicPoint();
    int getTrainingPoint();

    void setTacticPoint(int _tactic);
    void setTechnoPoint(int _techno);
    void setMagicPoint(int _magic);
    void setTrainingPoint(int _training);

private :
    int tactic;
    int techno;
    int magic;
    int training;
};

#endif // PLAYERDEVELOPMENT_H
