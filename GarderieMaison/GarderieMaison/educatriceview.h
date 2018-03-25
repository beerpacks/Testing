#ifndef GROUPVIEW_H
#define GROUPVIEW_H

#include <QGridLayout>
#include <QWidget>
#include "garderieviewmodel.h"
#include "educatriceview.h"
#include "QLabel"
#include "mainviewmodel.h"
#include <QTimer>

class EducatriceView : public MainViewModel
{
    Q_OBJECT
public:
    EducatriceView(GarderieViewModel* _viewModel);
    void enterAnimation();
    void updateUI();
    void quitAnimation();
private:
    GarderieViewModel* model;
    QTimer* autoCloseTimer;
    QHBoxLayout* groupeNameLayout;
    QHBoxLayout* enfantLayout;
    QHBoxLayout* nextLayout;
    QLabel* test;

private slots:
    void quit();
    void enfantPress(EnfantModel* enfantModel);

    void addEnfant();
    void testAddEnfantSLot();
};

#endif // GROUPVIEW_H
