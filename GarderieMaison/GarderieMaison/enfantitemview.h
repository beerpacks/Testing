#ifndef ENFANTITEMVIEW_H
#define ENFANTITEMVIEW_H

#include <QObject>
#include <QWidget>
#include <enfantmodel.h>

class EnfantItemView : public QWidget
{
    Q_OBJECT
public:
    EnfantItemView(EnfantModel* _model);
    EnfantModel* getEnfantModel();
protected:
    void mousePressEvent(QMouseEvent *event);

signals:
    void enfantPress(EnfantModel* _model);

private:
    EnfantModel* model;


};

#endif // ENFANTITEMVIEW_H
