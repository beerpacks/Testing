#include "startup.h"

#include <QLabel>
#include <QPushButton>
#include <QDebug>
#include <QGridLayout>
#include <iostream>

using namespace std;

StartUp::StartUp(GarderieViewModel* _viewModel)
{
    model = _viewModel;

    QGridLayout* layout = new QGridLayout();
    this->setLayout(layout);

    QLabel* lblId = new QLabel("Welcome");
    layout->addWidget(lblId,0,0,1,1,Qt::AlignCenter);

    QPushButton* pressHereButton = new QPushButton("Press here");
    layout->addWidget(pressHereButton,0,1,1,1, Qt::AlignCenter);

    connect(pressHereButton,SIGNAL(clicked(bool)),this,SLOT(pressHereButton_press(bool)));
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

void StartUp::pressHereButton_press(bool)
{
    model->getStateManager()->onGroup();
}
