#ifndef GROUPVIEW_H
#define GROUPVIEW_H

#include <QGridLayout>
#include <QWidget>
#include "garderieviewmodel.h"
#include "educatriceview.h"
#include "QLabel"
#include "mainviewmodel.h"
#include <QTimer>
#include "educatricebaseview.h"
#include "QStackedWidget"
#include "QStackedLayout"

class EducatriceView : public EducatriceBaseView
{
    Q_OBJECT
public:
    EducatriceView(GarderieViewModel* _viewModel);
private:
    GarderieViewModel* model;
    QTimer* autoCloseTimer;
    QHBoxLayout* groupeNameLayout;
    QHBoxLayout* enfantLayout;
    QHBoxLayout* nextLayout;
    QLabel* test;
    EnfantViewBase* enfantView;
    QStackedLayout* layoutStacker;
    QWidget* mainEducatriceLayout;

private slots:
    void quit();

public slots:
     void enfantPress(EnfantModel *enfantModel);

    //void addEnfant();
    //void testAddEnfantSLot();

    // MainViewModel interface
public:
    void enterAnimation();
    void updateUI();
    void quitAnimation();

    // EducatriceBaseView interface
public:
    void setEnfantView(EnfantViewBase *_enfantView);
    void showEnfantView(EnfantModel* enfantModel);
    void hideEnfantView();

};

#endif // GROUPVIEW_H
