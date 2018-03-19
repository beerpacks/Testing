#include "startup.h"

#include <QLabel>
#include <QPushButton>

StartUp::StartUp(GarderieViewModel _viewModel)
{
    model = _viewModel;

    QLabel* lblId = new QLabel("Welcom");
    this->addWidget(lblId,0,0,1,1,Qt::AlignCenter);

    QPushButton* pressHereButton = new QPushButton("Press here");
    this->addWidget(pressHereButton,0,1,1,1, Qt::AlignCenter);

    connect(pressHereButton,SIGNAL(clicked(bool)),this,SLOT(pressHereButton_press(bool)));
}

StartUp::pressHereButton_press(bool why)
{
    qDebug("Je suis un test");
}
