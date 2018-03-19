#ifndef IGARDERIEVIEWUI_H
#define IGARDERIEVIEWUI_H

class IGarderieViewUI{
public:
    virtual void showAddChildrenView() = 0;

    virtual void hideAddChildrenView() = 0;

    virtual void showGroupView() = 0;

    virtual void hideGroupView() = 0;
};

#endif // IGARDERIEVIEWUI_H
