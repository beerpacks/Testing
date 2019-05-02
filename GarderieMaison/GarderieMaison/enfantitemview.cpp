#include "enfantitemview.h"
#include <QVBoxLayout>
#include <QLabel>

EnfantItemView::EnfantItemView(EnfantModel *_model)
{
    model = _model;

    setMaximumSize(150,150);
    setMinimumSize(150,150);
    QPalette backgroundColor = palette();
    if(model->isPresent){
        backgroundColor.setColor(QPalette::Background,Qt::green);
    }else{
        backgroundColor.setColor(QPalette::Background,Qt::red);
    }
    setAutoFillBackground(true);
    setPalette(backgroundColor);

    QVBoxLayout* fullLayout = new QVBoxLayout();
    fullLayout->setAlignment(Qt::AlignCenter);
    setLayout(fullLayout);

    //Icon
    QPixmap image(model->icon);
    image.scaledToHeight(125);
    image.scaledToWidth(125);
    QLabel* icon = new QLabel();
    icon->setPixmap(image);
    fullLayout->addWidget(icon);
    //Nom
    QLabel* nom = new QLabel(model->name);
    nom->setAlignment(Qt::AlignCenter);
    fullLayout->addWidget(nom);
}

EnfantModel *EnfantItemView::getEnfantModel()
{
    return model;
}

void EnfantItemView::mousePressEvent(QMouseEvent * event)
{
    emit enfantPress(model);
}
