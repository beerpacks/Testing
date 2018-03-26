#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QSize>

class MainWindow : public QMainWindow
{
    Q_OBJECT

enum ScreenSize{
    _1366x768,
    _800x480
};

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();

private:
    QSize* getSizeFromEnum(ScreenSize screener);
};

#endif // MAINWINDOW_H
