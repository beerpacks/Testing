#ifndef GARDERIEVIEW_H
#define GARDERIEVIEW_H

#include <QGridLayout>
#include <garderieviewmodel.h>
#include <QWidget>
#include "mainviewmodel.h"

class GarderieView : public QGridLayout , public IGarderieViewUI
{
public:
    GarderieView();
    void setModel(GarderieViewModel* _newModel);
    void setStartView();
    void setEducatriceView();
private :
    GarderieViewModel* model;
    MainViewModel* startView;
    MainViewModel* educatriceView;



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
};

#endif // GARDERIEVIEW_H
