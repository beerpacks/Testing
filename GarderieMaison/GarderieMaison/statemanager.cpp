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
        qDebug().nospace() << "Changing for " << newState << " from " << methodCalled;
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
    uiRef->hideAddChildrenView();
    uiRef->showGroupView();
}
