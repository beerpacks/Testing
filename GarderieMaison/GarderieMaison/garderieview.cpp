#include "garderieview.h"
#include <startup.h>
#include <groupview.h>

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

void GarderieView::setGroupView()
{
    GroupView* mainGroupView = new GroupView(model);
    groupView = mainGroupView;
    this->addWidget(groupView,0,0,1,1,Qt::AlignHCenter);
}

void GarderieView::showAddChildrenView()
{

}

void GarderieView::hideAddChildrenView()
{

}

void GarderieView::showGroupView()
{
    groupView->setVisible(true);
    groupView->updateUI();

    //((GroupView*)groupView)->updateEnfants();
}

void GarderieView::hideGroupView()
{
    groupView->setVisible(false);
}

void GarderieView::showStart()
{
    startView->setVisible(true);
}

void GarderieView::hideStart()
{
    startView->setVisible(false);
}
