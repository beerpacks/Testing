#include "frmserverside.h"
#include "ui_frmserverside.h"
#include <QMessageBox>
#include <formconservateur.h>

FrmServerSide::FrmServerSide(QWidget *parent) :
    QMainWindow(parent),ui(new Ui::FrmServerSide)
{
    ui->setupUi(this);
}

void FrmServerSide::setController(SgiController *_controller)
{
    controller = _controller;
}

FrmServerSide::~FrmServerSide()
{
    delete ui;
}


void FrmServerSide::on_pushButton_clicked()
{

    //QMessageBox::about(this,"Test","haha");
}

void FrmServerSide::on_pushButton_pressed()
{
    FormConservateur* formCons = new FormConservateur(this);
    formCons->show();
}
