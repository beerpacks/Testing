#include "softwarepath.h"
#include "QDir"

QString SoftwarePath::getRoot()
{
    if(QDir::currentPath().contains("jean-francois"))
        return "/home/jean-francois/Desktop/Testing/Testing/GarderieMaison/images/";
    else
        return "/home/jf/Desktop/Testing/GarderieMaison/images/";
}
