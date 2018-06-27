#ifndef SGIVIEWMODEL_H
#define SGIVIEWMODEL_H

#include <QObject>

using namespace std;

class SgiViewModel: public QObject
{
    Q_OBJECT
public:
    SgiViewModel();

public slots:
    void onConservateurChanges();
};

#endif // SGIVIEWMODEL_H
