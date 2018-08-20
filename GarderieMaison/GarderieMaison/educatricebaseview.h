#ifndef EDUCATRICEBASEVIEW_H
#define EDUCATRICEBASEVIEW_H

#include "mainviewmodel.h"
#include "enfantviewbase.h"

class EducatriceBaseView: public MainViewModel{
public:
    EducatriceBaseView();
    virtual void setEnfantView(EnfantViewBase* _enfantView) = 0;
    virtual void showEnfantView(EnfantModel* enfantModel) = 0;
    virtual void hideEnfantView() = 0;
public slots:
    virtual void enfantPress(EnfantModel* enfantModel) = 0;
};
#endif // EDUCATRICEBASEVIEW_H
