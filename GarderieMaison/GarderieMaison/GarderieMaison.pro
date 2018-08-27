#-------------------------------------------------
#
# Project created by QtCreator 2018-03-18T12:49:06
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = GarderieMaison
TEMPLATE = app

# The following define makes your compiler emit warnings if you use
# any feature of Qt which has been marked as deprecated (the exact warnings
# depend on your compiler). Please consult the documentation of the
# deprecated API in order to know how to port your code away from it.
DEFINES += QT_DEPRECATED_WARNINGS

# You can also make your code fail to compile if you use deprecated APIs.
# In order to do so, uncomment the following line.
# You can also select to disable deprecated APIs only up to a certain version of Qt.
#DEFINES += QT_DISABLE_DEPRECATED_BEFORE=0x060000    # disables all the APIs deprecated before Qt 6.0.0

#CONFIG += console


SOURCES += \
        main.cpp \
        mainwindow.cpp \
    statemanager.cpp \
    garderieviewmodel.cpp \
    enfantmodel.cpp \
    garderieview.cpp \
    startup.cpp \
    mainviewmodel.cpp \
    educatriceview.cpp \
    enfantitemview.cpp \
    enfantview.cpp \
    enfantviewbase.cpp \
    softwarepath.cpp \
    educatricebaseview.cpp \
    faketestpane.cpp

HEADERS += \
        mainwindow.h \
    itransition.h \
    statemanager.h \
    igarderieviewui.h \
    garderieviewmodel.h \
    enfantmodel.h \
    garderieview.h \
    startup.h \
    mainviewmodel.h \
    educatriceview.h \
    enfantitemview.h \
    enfantview.h \
    enfantviewbase.h \
    educatricebaseview.h \
    softwarepath.h \
    faketestpane.h

FORMS += \
        mainwindow.ui
