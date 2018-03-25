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
    void setGroupView();
private :
    GarderieViewModel* model;
    MainViewModel* startView;
    MainViewModel* groupView;

    // IGarderieViewUI interface
public:
    void showAddChildrenView();
    void hideAddChildrenView();
    void showGroupView();
    void hideGroupView();
    void showStart();
    void hideStart();
};

#endif // GARDERIEVIEW_H
