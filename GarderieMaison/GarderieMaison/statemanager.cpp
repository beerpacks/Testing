#include "statemanager.h"
#include "itransition.h"
#include <QDebug>

StateManager::StateManager()
{
    actualState=State::STARTUP;
    debugMode = true;
}

void StateManager::setState(StateManager::State newState,QString methodCalled)
{
    if(debugMode)
    {
        //qDebug() << "Changing for " << newState << " from " << methodCalled;
        //qDebug(methodCalled);
    }
    actualState = newState;
}

void StateManager::setUIReference(IGarderieViewUI *uiReference)
{
    uiRef = uiReference;
}

void StateManager::onStartUp()
{
    uiRef->hideCuisiniereLayout();
    uiRef->hideDirectriceLayout();
    uiRef->hideEducatriceLayout();
    uiRef->showStart();
    setState(StateManager::State::STARTUP,"onStartUp");
}

void StateManager::onEducatriceLayout()
{
    uiRef->hideStart();
    uiRef->showEducatriceLayout();
    setState(StateManager::State::onEducatriceConnect,"onGroup");
}

void StateManager::onDirectriceLayout()
{
    //uiRef->hideCuisiniereLayout();
    //uiRef->hideDirectriceLayout();
}

void StateManager::onCuisiniereLayout()
{

}

void StateManager::onBack()
{
    if(actualState == onEducatriceConnect)
    {
        uiRef->hideEducatriceLayout();
        uiRef->showStart();
    }
}

