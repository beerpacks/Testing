#ifndef STATEMANAGER_H
#define STATEMANAGER_H

#include <itransition.h>
#include <igarderieviewui.h>
#include <QString>

class StateManager : public ITransition
{
    enum State {
        STARTUP,
        onEducatriceConnect,
        onDirectriceConnect,
        onCuisiereConnect,
        onEnfantView
    };

public:
    StateManager();
    void setState(State newState, QString methodCalled);
    void setUIReference(IGarderieViewUI* uiReference);
    void onEducatriceLayout();
    void onDirectriceLayout();
    void onCuisiniereLayout();
    void onBack();
    void onStartUp();

private:
    State actualState;
    IGarderieViewUI* uiRef;
    bool debugMode;


    // ITransition interface
public:
    void onEnfantLayout(EnfantModel *enfantModel);
};

#endif // STATEMANAGER_H
