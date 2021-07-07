from animations.Animation import *
import time

class FillAnimation(Animation):
    def __init__(self,strip,name,length,color=[255,255,255]):
        super().__init__(strip,name,length)
        self.params = {"type":type(self).__name__,"name":name,"length":length,"color":color}
        self.totalFramesElapsed =0
    def draw(self):
        self.active= True
        self.animationStartTime = time.time()
        while self.active:
            {self.strip.setPixelColor(i,toCol(self.params["color"])): i for i in range(0,self.ledcount)}
            self.strip.show()
            time.sleep(0.002)
            end = time.time()
            if self.animationStartTime + self.params["length"] <= end: self.active = False

