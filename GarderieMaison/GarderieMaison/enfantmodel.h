#ifndef ENFANTMODEL_H
#define ENFANTMODEL_H

#include <QString>

class EnfantModel
{
public:
    EnfantModel();
    QString id;
    QString name;
    QString icon;
    int groupe;
    bool isPresent;
};

#endif // ENFANTMODEL_H
