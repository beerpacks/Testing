#ifndef ITRANSITION_H
#define ITRANSITION_H

#include "enfantmodel.h"
class ITransition{
public:
   virtual void onStartUp()=0;
   virtual void onBack() =0;
   virtual void onEducatriceLayout() =0;
   virtual void onDirectriceLayout() =0;
   virtual void onCuisiniereLayout() =0;
   virtual void onEnfantLayout(EnfantModel* enfantModel) = 0;
};
#endif // ITRANSITION_H
