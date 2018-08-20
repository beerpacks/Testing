#ifndef FRMSERVERSIDE_H
#define FRMSERVERSIDE_H

#include <QMainWindow>
#include <sgicontroller.h>

namespace Ui {
    class FrmServerSide;
}

class FrmServerSide : public QMainWindow
{
    Q_OBJECT

public:
    explicit FrmServerSide(QWidget *parent = 0);
    void setController(SgiController* _controller);
    ~FrmServerSide();

private slots:
    void on_pushButton_clicked();

    void on_pushButton_pressed();

private:
    Ui::FrmServerSide *ui;
    SgiController* controller;
};

#endif // FrmServerSide
