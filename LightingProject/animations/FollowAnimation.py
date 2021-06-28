from animations.Animation import *
import time
import numpy as np

class FollowAnimation(Animation):
    def __init__(self,strip,name,length,color=[255,255,255],delay=1):
        super().__init__(strip,name,length)
        self.params = {"type":type(self).__name__,"name":name,"length":length,"delay":delay,"color":np.array(color)}
        self.totalFramesElapsed =0
    def draw(self):
        self.active= True
        self.animationStartTime = time.time()
        direction = 256
        while self.active:
            self.totalFramesElapsed += 1
            time.sleep(self.params["delay"])
            
            for i in range(0,self.ledcount):
                color = self.params["color"] * ((i+self.totalFramesElapsed*direction)%255)/255
                color = color.astype(int)
                color = int(toCol(color))
                self.strip.setPixelColor(i,color)
            self.strip.show()
            end = time.time()
            if self.animationStartTime + self.params["length"] <= end: self.active = False
