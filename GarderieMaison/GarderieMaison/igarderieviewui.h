#ifndef IGARDERIEVIEWUI_H
#define IGARDERIEVIEWUI_H

class IGarderieViewUI{
public:

    virtual void showStart() = 0;

    virtual void hideStart() = 0;

    virtual void showEducatriceLayout() = 0;

    virtual void hideEducatriceLayout() = 0;

    virtual void showDirectriceLayout() = 0;

    virtual void hideDirectriceLayout() = 0;

    virtual void showCuisiniereLayout() = 0;

    virtual void hideCuisiniereLayout() = 0;

    virtual void showEnfantLayout(EnfantModel* enfantModel) = 0;

    virtual void hideEnfantLayout() = 0;
};

#endif // IGARDERIEVIEWUI_H
