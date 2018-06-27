#ifndef PLAYERMODEL_H
#define PLAYERMODEL_H

#include <QObject>

class PlayerModel :  public QObject
{
    Q_OBJECT
public:
    PlayerModel();

private :
    QString icon;
    QString name;
    QString side;
    int level;
    int currentExp;
    int devTacticPoint
    int devPoint;
};

#endif // PLAYERMODEL_H
