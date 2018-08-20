#include "playerdevelopment.h"

PlayerDevelopment::PlayerDevelopment()
{

}

PlayerDevelopment::PlayerDevelopment(int _tactic, int _techno, int _magic, int _training)
{
    tactic = _tactic;
    techno= _techno;
    magic = _magic;
    training = _training;
}

int PlayerDevelopment::getTacticPoint()
{
    return tactic;
}

int PlayerDevelopment::getTechnoPoint()
{
    return techno;
}

int PlayerDevelopment::getMagicPoint()
{
    return magic;
}

int PlayerDevelopment::getTrainingPoint()
{
    return training;
}

void PlayerDevelopment::setTacticPoint(int _tactic)
{
    tactic = _tactic;
}

void PlayerDevelopment::setTechnoPoint(int _techno)
{
    techno = _techno;
}

void PlayerDevelopment::setMagicPoint(int _magic)
{
    magic = _magic;
}

void PlayerDevelopment::setTrainingPoint(int _training)
{
    training = _training;
}
