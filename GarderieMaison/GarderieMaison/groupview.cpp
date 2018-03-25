#include "groupview.h"
#include "QLabel"
#include <QPushButton>

static void Toto();

GroupView::GroupView(GarderieViewModel* _viewModel)
{
    model = _viewModel;

    QGridLayout* fullLayout = new QGridLayout();
    this->setLayout(fullLayout);

    test = new QLabel("test");
    groupeNameLayout = new QHBoxLayout();
    groupeNameLayout->addWidget(test);
    groupeNameLayout->setAlignment(Qt::AlignCenter);
    fullLayout->addLayout(groupeNameLayout,0,0);

    enfantLayout = new QHBoxLayout();
    enfantLayout->setAlignment(Qt::AlignCenter);
    fullLayout->addLayout(enfantLayout,1,0);

    nextLayout= new QHBoxLayout();
    nextLayout->setAlignment(Qt::AlignCenter);
    fullLayout->addLayout(nextLayout,2,0);

    QPushButton* toAdd = new QPushButton("Add test");
    nextLayout->addWidget(toAdd);

    QPushButton* testAddEnfant = new QPushButton("test add enfant");
    nextLayout->addWidget(testAddEnfant);

    connect(toAdd, SIGNAL(clicked(bool)),this,SLOT(addEnfant()));
    connect(testAddEnfant,SIGNAL(clicked(bool)),this,SLOT(testAddEnfantSLot()));
}

void GroupView::updateEnfants()
{
    /*
    QHBoxLayout* tmp = new QHBoxLayout();
    if(enfantLayout->children().size() > 0){
        QHBoxLayout* torem = (QHBoxLayout*)enfantLayout->children().at(0);
        enfantLayout->removeItem(torem);
    }
    enfantLayout->addItem(tmp);
    for(int i = 0 ; i < model->getEnfantList()->size(); i++){
        EnfantModel* enfant = model->getEnfantList()->at(i);
        QLabel* namer = new QLabel(enfant->name);
        tmp->addWidget(namer);
    }
    */
}

void GroupView::enterAnimation()
{

}

void GroupView::updateUI()
{
    test->setText("Je passe par updateUI");
    for(auto it:enfantLayout->children()){
        enfantLayout->removeWidget((QWidget*)it);
        it->deleteLater();
    }
    /*
    for(int i = 0; i < enfantLayout->children().size(); i++)
    {
        QWidget* toRem = (QWidget*)enfantLayout->children().at(i);
        enfantLayout->removeWidget(toRem);
        toRem->deleteLater();
    }
    */
    //enfantLayout = new QHBoxLayout();
    for(int i = 0 ; i < model->getEnfantList()->size(); i++)
    {
        EnfantModel* enfant = model->getEnfantList()->at(i);
        QLabel* namer = new QLabel(enfant->name);
        enfantLayout->addWidget(namer);
    }
}

void GroupView::quitAnimation()
{

}

void GroupView::addEnfant()
{
    QLabel* newEnfant = new QLabel("je suis nouveau");
    enfantLayout->addWidget(newEnfant);
}

void GroupView::testAddEnfantSLot()
{
    updateUI();
    Toto();
}

static void Toto()
{

}

