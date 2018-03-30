#ifndef GARDERIEVIEW_H
#define GARDERIEVIEW_H

#include <QGridLayout>
#include <garderieviewmodel.h>
#include <QWidget>
#include "mainviewmodel.h"
#include "educatricebaseview.h"
#include "QStackedLayout"
#include "startup.h"
#include "educatricebaseview.h"
#include "faketestpane.h"

class GarderieView : public QWidget, public IGarderieViewUI
{
public:
    GarderieView();
    void setModel(GarderieViewModel* _newModel);
    void setStartView(StartUp* _startView);
    void setEducatriceView(EducatriceBaseView* _educatriceView);
    void setFakeViewer(QWidget *fakeTest);
private :
    GarderieViewModel* model;
    MainViewModel* startView;
    EducatriceBaseView* educatriceView;
    QStackedLayout* stacker;
    QWidget* faker;



    // IGarderieViewUI interface
public:
    void showStart();
    void hideStart();
    void showEducatriceLayout();
    void hideEducatriceLayout();
    void showDirectriceLayout();
    void hideDirectriceLayout();
    void showCuisiniereLayout();
    void hideCuisiniereLayout();
    void showEnfantLayout(EnfantModel *enfantModel);
    void hideEnfantLayout();

};

#endif // GARDERIEVIEW_H
