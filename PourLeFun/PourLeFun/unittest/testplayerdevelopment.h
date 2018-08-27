#ifndef TESTPLAYERDEVELOPMENT_H
#define TESTPLAYERDEVELOPMENT_H

#include <QObject>
#include <QtTest/QtTest>

class TestPlayerDevelopment : public QObject
{
    Q_OBJECT

    public:
        TestPlayerDevelopment();
private slots:
    void testPlayerDevelopment(int _tactic, int _techno, int _magic, int _training);

};

QTEST_MAIN(TestPlayerDevelopment)
#include "testplayerdevelopment.moc"

#endif // TESTPLAYERDEVELOPMENT_H
