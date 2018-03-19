#include "garderieview.h"
#include <startup.h>
GarderieView::GarderieView()
{
    StartUp* frontPage = new StartUp();
    this->addLayout(frontPage,0,0,1,1,Qt::AlignHCenter);
}
