#include "garderieview.h"
#include <startup.h>
#include <educatriceview.h>
#include <QPushButton>
#include "enfantview.h"
#include "QStackedLayout"


GarderieView::GarderieView()
{
    stacker = new QStackedLayout(this);
    stacker->setStackingMode(QStackedLayout::StackAll);
    {
        QPalette backgroundColor = palette();
        backgroundColor.setColor(QPalette::Background,Qt::red);
        setPalette(backgroundColor);
        setAutoFillBackground(true);
    }

}

void GarderieView::setModel(GarderieViewModel *_newModel)
{
    model = _newModel;
    model->getStateManager()->setUIReference(this);
}

void GarderieView::setStartView(StartUp* _startView)
{
    startView = _startView;
    startView->setVisible(false);
    stacker->addWidget(startView);
}

void GarderieView::setEducatriceView(EducatriceBaseView* _educatriceView)
{
    educatriceView = _educatriceView;
    educatriceView->setVisible(false);
    stacker->addWidget(educatriceView);
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
    educatriceView->setVisible(true);
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

void GarderieView::showEnfantLayout(EnfantModel *enfantModel)
{
    educatriceView->showEnfantView(enfantModel);
}

void GarderieView::hideEnfantLayout()
{
    educatriceView->hideEnfantView();
}
