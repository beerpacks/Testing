#ifndef GROUPVIEW_H
#define GROUPVIEW_H

#include <QGridLayout>
#include <QWidget>
#include "garderieviewmodel.h"
#include "groupview.h"
#include "QLabel"
#include "mainviewmodel.h"

class GroupView : public MainViewModel
{
    Q_OBJECT
public:
    GroupView(GarderieViewModel* _viewModel);
    void updateEnfants();
    void enterAnimation();
    void updateUI();
    void quitAnimation();
private:
    GarderieViewModel* model;
    QHBoxLayout* groupeNameLayout;
    QHBoxLayout* enfantLayout;
    QHBoxLayout* nextLayout;
    QLabel* test;

private slots:
    void addEnfant();
    void testAddEnfantSLot();
};

#endif // GROUPVIEW_H
