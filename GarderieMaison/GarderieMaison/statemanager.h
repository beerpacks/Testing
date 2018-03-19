#ifndef STATEMANAGER_H
#define STATEMANAGER_H

#include <itransition.h>
#include <igarderieviewui.h>
#include <QString>

class StateManager : public ITransition
{
    enum State {
        STARTUP,
        ADD_CHILDREN,
        GROUP
    };
public:
    StateManager();
    void setState(State newState, QString methodCalled);
    void setUIReference(IGarderieViewUI* uiReference);
    virtual void onAddChildren();
    virtual void onGroup();

private:
    State actualState;
    IGarderieViewUI* uiRef;
    bool debugMode;
};

#endif // STATEMANAGER_H
