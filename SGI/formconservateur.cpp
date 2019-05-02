#include "formconservateur.h"
#include <QGridLayout>
#include <QWidget>
#include <QPushButton>
#include <QLabel>
#include <QTextEdit>

FormConservateur::FormConservateur(QWidget *parent) : QMainWindow(parent)
{
    QWidget* central = new QWidget();
    setCentralWidget(central);
    QGridLayout* fullLayout =new QGridLayout();
    central->setLayout(fullLayout);

    //quitLayout
    QPushButton* cancelButton = new QPushButton("Quit");
    fullLayout->addWidget(cancelButton,0,1,1,1,Qt::AlignRight);

    QLabel* lblId = new QLabel("Id:");
    fullLayout->addWidget(lblId,1,0,1,1,Qt::AlignRight);

    QTextEdit* txtId = new QTextEdit();
    fullLayout->addWidget(txtId,1,1,1,1,Qt::AlignLeft);



    QHBoxLayout* commandButtonLayout = new QHBoxLayout();
    fullLayout->addLayout(commandButtonLayout,2,0,1,1,Qt::AlignLeft);

    QPushButton* saveButton = new QPushButton("Save");
    commandButtonLayout->addWidget(saveButton);

    QPushButton* deleteButton = new QPushButton("Delete");
    commandButtonLayout->addWidget(deleteButton);

    setWindowTitle("Form Conservateur");
}
