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
        qDebug("Changing for ");
    }
    actualState = newState;
}

void StateManager::setUIReference(IGarderieViewUI *uiReference)
{
    uiRef = uiReference;
}

void StateManager::onAddChildren()
{
    uiRef->hideGroupView();
    uiRef->showAddChildrenView();
}

void StateManager::onGroup()
{
    uiRef->hideStart();
    uiRef->hideAddChildrenView();
    uiRef->showGroupView();
    setState(StateManager::State::GROUP,"onGroup");
}

void StateManager::onStartUp()
{
    uiRef->hideGroupView();
    uiRef->hideAddChildrenView();
    uiRef->showStart();
    setState(StateManager::State::STARTUP,"onGroup");
}
