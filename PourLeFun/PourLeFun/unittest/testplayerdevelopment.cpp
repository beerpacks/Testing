#include "testplayerdevelopment.h"
#include "uimodel/playerdevelopment.h"

TestPlayerDevelopment::TestPlayerDevelopment()
{

}

void TestPlayerDevelopment::testPlayerDevelopment(int _tactic, int _techno, int _magic, int _training)
{
    PlayerDevelopment* playerDev = new PlayerDevelopment(_tactic,_techno,_magic,_training);
    QVERIFY(playerDev->getTacticPoint() == _tactic);
    QVERIFY(playerDev->getTechnoPoint() == _techno);
    QVERIFY(playerDev->getMagicPoint() == _magic);
    QVERIFY(playerDev->getTrainingPoint() == _training);
}
