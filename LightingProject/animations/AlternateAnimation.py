from animations.Animation import *
import time

class AlternateAnimation(Animation):
    def __init__(self,strip,name,length,color1,color2,delay):
        super().__init__(strip,name,length)
        self.color1 = color1
        self.color2 = color2
        self.delay = delay
        self.totalFramesElapsed =0
    def draw(self):
        self.active= True
        self.animationStartTime = time.time()
        while self.active:
            self.totalFramesElapsed += 1
            time.sleep(self.delay)
            {self.strip.setPixelColor(i,toCol(self.color1)): i for i in range(0,self.ledcount,2)}
            {self.strip.setPixelColor(i,toCol(self.color2)): i for i in range(1,self.ledcount,2)}
            self.strip.show()
            time.sleep(self.delay)
            {self.strip.setPixelColor(i,toCol(self.color2)): i for i in range(0,self.ledcount,2)}
            {self.strip.setPixelColor(i,toCol(self.color1)): i for i in range(1,self.ledcount,2)}
            self.strip.show()

            end = time.time()
            if self.animationStartTime + self.length <= end: self.active = False
