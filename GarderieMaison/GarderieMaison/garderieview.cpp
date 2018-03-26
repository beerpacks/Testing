#include "garderieview.h"
#include <startup.h>
#include <educatriceview.h>

GarderieView::GarderieView()
{
}

void GarderieView::setModel(GarderieViewModel *_newModel)
{
    model = _newModel;
    model->getStateManager()->setUIReference(this);
}

void GarderieView::setStartView()
{
    StartUp* frontPage = new StartUp(model);
    startView = frontPage;
    this->addWidget(startView,0,0,1,1,Qt::AlignHCenter);
}

void GarderieView::setEducatriceView()
{
    EducatriceView* mainGroupView = new EducatriceView(model);
    educatriceView = mainGroupView;
    this->addWidget(educatriceView,0,0,1,1,Qt::AlignHCenter);
}

void GarderieView::showStart()
{
    startView->setVisible(true);
}

void GarderieView::hideStart()
{
    startView->setVisible(false);
}

void GarderieView::showEducatriceLayout()
{
    educatriceView->setVisible(true);
    educatriceView->updateUI();
}

void GarderieView::hideEducatriceLayout()
{
    educatriceView->setVisible(false);
}

void GarderieView::showDirectriceLayout()
{

}

void GarderieView::hideDirectriceLayout()
{

}

void GarderieView::showCuisiniereLayout()
{

}

void GarderieView::hideCuisiniereLayout()
{

}
