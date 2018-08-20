#include "faketestpane.h"
#include "QGridLayout"

#include <QLabel>
#include <QPushButton>
FakeTestPane::FakeTestPane()
{
    {
        QPalette backgroundColor = palette();
        backgroundColor.setColor(QPalette::Background,Qt::green);
        setPalette(backgroundColor);
        setAutoFillBackground(true);
    }

    QGridLayout* fullLayout = new QGridLayout();
    this->setLayout(fullLayout);

    QVBoxLayout* centeredLayout = new QVBoxLayout();
    fullLayout->addLayout(centeredLayout,0,0,1,1,Qt::AlignCenter);

    QLabel* lblId = new QLabel("Welcome");
    centeredLayout->addWidget(lblId);
    centeredLayout->setAlignment(lblId,Qt::AlignCenter);

    QPushButton* btnEducatrice = new QPushButton("Educatrice");
    centeredLayout->addWidget(btnEducatrice);
    //connect(btnEducatrice,SIGNAL(clicked(bool)),this,SLOT(educatrice_press(bool)));

    QPushButton* btnDirectrice = new QPushButton("Directrice");
    centeredLayout->addWidget(btnDirectrice);
    //connect(btnDirectrice,SIGNAL(clicked(bool)),this,SLOT(directrice_press(bool)));

    QPushButton* btnCuisiniere = new QPushButton("Cuisiniere");
    centeredLayout->addWidget(btnCuisiniere);
    //connect(btnCuisiniere,SIGNAL(clicked(bool)),this,SLOT(cuisiniere_press(bool)));
}

void FakeTestPane::enterAnimation()
{

}

void FakeTestPane::updateUI()
{

}

void FakeTestPane::quitAnimation()
{

}
