#include "educatriceview.h"
#include "QLabel"
#include <QPushButton>
#include "enfantitemview.h"


static void Toto();

EducatriceView::EducatriceView(GarderieViewModel* _viewModel)
{
    model = _viewModel;

    autoCloseTimer = new QTimer(this);
    autoCloseTimer->setInterval(5*60*1000);
    connect(autoCloseTimer,SIGNAL(timeout()),this,SLOT(quit()));

    QGridLayout* fullLayout = new QGridLayout();
    this->setLayout(fullLayout);

    {
        QPixmap backgroundImage("/home/jf/Desktop/Testing/GarderieMaison/images/mainBackground.jpg");
        //QPalette backPalette;
        //backPalette.setBrush(QPalette::Background,backgroundImage);

        //setPalette(backPalette);
        QLabel* background = new QLabel();
        background->setPixmap(backgroundImage); //backgroundImage.scaled(1366,768,Qt::KeepAspectRatio)
        fullLayout->addWidget(background,0,0,4,1);
    }

    //quit button
    {
        //QHBoxLayout* quitLayout = new QHBoxLayout();

        QPushButton* quitButton = new QPushButton("Close");
        //quitLayout->addWidget(quitButton);
        connect(quitButton,SIGNAL(clicked(bool)),this,SLOT(quit()));
        fullLayout->addWidget(quitButton,0,0,1,1,Qt::AlignLeft);

    }

    //group name
    {
        test = new QLabel("test");
        groupeNameLayout = new QHBoxLayout();
        groupeNameLayout->addWidget(test);
        groupeNameLayout->setAlignment(Qt::AlignCenter);
        fullLayout->addLayout(groupeNameLayout,1,0,1,1,Qt::AlignCenter);
    }

    //middle layout
    {
        enfantLayout = new QHBoxLayout();
        enfantLayout->setAlignment(Qt::AlignCenter);
        fullLayout->addLayout(enfantLayout,2,0,1,1,Qt::AlignCenter);
    }

    //button layout
    {
        nextLayout= new QHBoxLayout();
        nextLayout->setAlignment(Qt::AlignCenter);
        fullLayout->addLayout(nextLayout,3,0,1,1,Qt::AlignCenter);
    }
}

void EducatriceView::enterAnimation()
{

}

void EducatriceView::updateUI()
{
    /*
    test->setText("Je passe par updateUI");
    for(auto it:enfantLayout->children()){
        enfantLayout->removeWidget((QWidget*)it);
        it->deleteLater();
    }

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
        EnfantItemView* enfantItemView  = new EnfantItemView(model->getEnfantList()->at(i));
        connect(enfantItemView,SIGNAL(enfantPress(EnfantModel*)),this,SLOT(enfantPress(EnfantModel*)));
        //QLabel* namer = new QLabel(enfant->name);
        enfantLayout->addWidget(enfantItemView);
    }
    autoCloseTimer->start();
}

void EducatriceView::quitAnimation()
{

}

void EducatriceView::quit()
{
    autoCloseTimer->stop();
    model->getStateManager()->onBack();
}

void EducatriceView::enfantPress(EnfantModel* enfantModel)
{
    test->setText(enfantModel->name);
}

static void Toto()
{

}

