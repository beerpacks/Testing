#include "startup.h"

#include <QLabel>
#include <QPushButton>
#include <QDebug>
#include <QGridLayout>
#include <iostream>
#include <QVBoxLayout>

StartUp::StartUp(GarderieViewModel* _viewModel)
{
    model = _viewModel;

    {
        QPalette backgroundColor = palette();
        backgroundColor.setColor(QPalette::Background,Qt::yellow);
        setPalette(backgroundColor);
        setAutoFillBackground(true);
    }

    QGridLayout* layout = new QGridLayout();
    this->setLayout(layout);

    QVBoxLayout* centeredLayout = new QVBoxLayout();
    layout->addLayout(centeredLayout,0,0,1,1,Qt::AlignCenter);

    QLabel* lblId = new QLabel("Welcome");
    centeredLayout->addWidget(lblId);
    centeredLayout->setAlignment(lblId,Qt::AlignCenter);

    QPushButton* btnEducatrice = new QPushButton("Educatrice");
    centeredLayout->addWidget(btnEducatrice);
    connect(btnEducatrice,SIGNAL(clicked(bool)),this,SLOT(educatrice_press(bool)));

    QPushButton* btnDirectrice = new QPushButton("Directrice");
    centeredLayout->addWidget(btnDirectrice);
    connect(btnDirectrice,SIGNAL(clicked(bool)),this,SLOT(directrice_press(bool)));

    QPushButton* btnCuisiniere = new QPushButton("Cuisiniere");
    centeredLayout->addWidget(btnCuisiniere);
    connect(btnCuisiniere,SIGNAL(clicked(bool)),this,SLOT(cuisiniere_press(bool)));

}

void StartUp::enterAnimation()
{

}

void StartUp::updateUI()
{

}

void StartUp::quitAnimation()
{

}

void StartUp::educatrice_press(bool)
{
    model->getStateManager()->onEducatriceLayout();
}

void StartUp::directrice_press(bool)
{

}

void StartUp::cuisiniere_press(bool)
{

}
