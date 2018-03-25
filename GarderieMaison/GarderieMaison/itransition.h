#ifndef ITRANSITION_H
#define ITRANSITION_H

class ITransition{
public:
   virtual void onStartUp()=0;
   virtual void onAddChildren() = 0;
   virtual void onGroup() = 0;
};
#endif // ITRANSITION_H
