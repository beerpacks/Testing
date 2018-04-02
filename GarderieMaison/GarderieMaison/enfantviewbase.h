#ifndef ENFANTVIEWBASE_H
#define ENFANTVIEWBASE_H

#include <QWidget>
#include "mainviewmodel.h"
#include "enfantmodel.h"
#include "garderieviewmodel.h"

class EnfantViewBase : public MainViewModel
{
public:
    EnfantViewBase(GarderieViewModel* _model);
    virtual void setEnfantModel(EnfantModel* _model) = 0;

protected:
    GarderieViewModel* model;
};

#endif // ENFANTVIEWBASE_H
