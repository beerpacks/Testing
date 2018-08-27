#include "enfantview.h"
#include <QGridLayout>
#include "QLabel"
#include "QSize"
#include "QGraphicsAnchorLayout"
#include "QPushButton"
#include "QGraphicsOpacityEffect"

EnfantView::EnfantView(GarderieViewModel* _model):
    EnfantViewBase(_model)
{

    QGridLayout* fullLayout = new QGridLayout();
    setLayout(fullLayout);
    {
        QWidget* outerWidget = new QWidget();
        QPalette backgroundColor = palette();
        backgroundColor.setColor(QPalette::Background,Qt::black);
        QGraphicsOpacityEffect* test = new QGraphicsOpacityEffect(this);
        test->setOpacity(0.75);
        outerWidget->setGraphicsEffect(test);
        outerWidget->setPalette(backgroundColor);
        outerWidget->setAutoFillBackground(true);
        outerWidget->setLayout(new QGridLayout());
        fullLayout->addWidget(outerWidget,0,0,1,1,Qt::AlignCenter);
    }


    QWidget* innerWidget = new QWidget();
    fullLayout->addWidget(innerWidget,0,0,1,1,Qt::AlignCenter);
    {
        innerLayout = new QGridLayout();
        innerWidget->setLayout(innerLayout);

        QPalette backgroundColor = palette();
        backgroundColor.setColor(QPalette::Background,Qt::green);
        innerWidget->setPalette(backgroundColor);
        innerWidget->setAutoFillBackground(true);
        innerWidget->setLayout(fullLayout);
        innerWidget->setMaximumSize(800,480);
        innerWidget->setMinimumSize(800,480);

        {
            QPushButton* quiter = new QPushButton("Close");
            innerLayout->addWidget(quiter,0,0,1,1,Qt::AlignLeft);
            connect(quiter,SIGNAL(clicked(bool)),this,SLOT(quit()));
        }
    }
    //setfullscreen
    //innercontrol for 800x480
    //outside close

}

void EnfantView::enterAnimation()
{

}

void EnfantView::updateUI()
{
    //pas besoin c'est setEnfantModel le bon
}

void EnfantView::quitAnimation()
{

}

void EnfantView::setEnfantModel(EnfantModel *_model)
{
    QLabel* name = new QLabel(_model->name);
    innerLayout->addWidget(name,0,1,1,1,Qt::AlignCenter);
}

void EnfantView::quit()
{
    model->getStateManager()->onBack();
}
