#include "educatriceview.h"
#include "QLabel"
#include <QPushButton>
#include "enfantitemview.h"
#include "QWidget"
#include "softwarepath.h"


static void Toto();

EducatriceView::EducatriceView(GarderieViewModel* _viewModel)
{
    model = _viewModel;

    {
        QPalette backgroundColor = palette();
        backgroundColor.setColor(QPalette::Background,Qt::blue);
        setPalette(backgroundColor);
        setAutoFillBackground(true);
    }

    autoCloseTimer = new QTimer(this);
    autoCloseTimer->setInterval(5*60*1000);
    connect(autoCloseTimer,SIGNAL(timeout()),this,SLOT(quit()));

    {
        QPixmap backgroundImage(SoftwarePath::getRoot() + "mainBackground.jpg"); //.scaled(this->size(),Qt::KeepAspectRatio)
        QPalette backPalette;
        backPalette.setBrush(QPalette::Background,backgroundImage);
        setPalette(backPalette);
    }

    layoutStacker = new QStackedLayout(this);
    layoutStacker->setStackingMode(QStackedLayout::StackAll);


    mainEducatriceLayout = new QWidget();
    QGridLayout* fullLayout = new QGridLayout();
    mainEducatriceLayout->setLayout(fullLayout);
    layoutStacker->addWidget(mainEducatriceLayout);


    {
        {
            /*
        QWidget* innerWidget = new QWidget();
        innerWidget->setMaximumSize(800,480);
        innerWidget->setMinimumSize(800,480);
        QGridLayout* innerGridPane = new QGridLayout(innerWidget);

        fullLayout->addWidget(innerWidget);
    */


            //QLabel* background = new QLabel();
            //background->setPixmap(backgroundImage); //backgroundImage.scaled(1366,768,Qt::KeepAspectRatio)
            //innerGridPane->addWidget(background,0,0,4,1);
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
    layoutStacker->setCurrentIndex(0);
}

void EducatriceView::quitAnimation()
{

}

void EducatriceView::setEnfantView(EnfantViewBase* _enfantView)
{
    enfantView = _enfantView;
    enfantView->setVisible(false);
    layoutStacker->addWidget(enfantView);
}

void EducatriceView::showEnfantView(EnfantModel* enfantModel)
{
    test->setText("j'affiche");
    enfantView->setVisible(true);
    enfantView->setEnfantModel(enfantModel);
    enfantView->enterAnimation();
    layoutStacker->setCurrentWidget(enfantView);
}

void EducatriceView::hideEnfantView()
{
    enfantView->setVisible(false);
    layoutStacker->setCurrentWidget(mainEducatriceLayout);
    test->setText("on back from enfant");
}

void EducatriceView::quit()
{
    autoCloseTimer->stop();
    model->getStateManager()->onBack();
}

void EducatriceView::enfantPress(EnfantModel* enfantModel)
{
    test->setText(enfantModel->name);
    autoCloseTimer->stop();
    model->getStateManager()->onEnfantLayout(enfantModel);
}

static void Toto()
{

}

