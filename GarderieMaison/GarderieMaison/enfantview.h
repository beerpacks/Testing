#ifndef ENFANTVIEW_H
#define ENFANTVIEW_H

#include "enfantviewbase.h"
#include "QGridLayout"

class EnfantView : public EnfantViewBase
{
    Q_OBJECT
public:
    EnfantView(GarderieViewModel* _model);

    // MainViewModel interface
public:
    void enterAnimation();
    void updateUI();
    void quitAnimation();

    // EnfantViewBase interface
public:
    void setEnfantModel(EnfantModel *_model);

public slots:
    void quit();

private:
    QGridLayout* innerLayout;
};

#endif // ENFANTVIEW_H
