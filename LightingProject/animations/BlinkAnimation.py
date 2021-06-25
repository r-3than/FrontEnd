from animations.Animation import *
import time

class BlinkAnimation(Animation):
    def __init__(self,strip,name,length,color,delay):
        super().__init__(strip,name,length)
        self.color = color
        self.delay = delay
        self.totalFramesElapsed =0
    def draw(self):
        self.active= True
        self.animationStartTime = time.time()
        while self.active:
            self.totalFramesElapsed += 1
            time.sleep(self.delay)
            {self.strip.setPixelColor(i,toCol(self.color)): i for i in range(0,self.ledcount)}
            self.strip.show()
            time.sleep(self.delay)
            {self.strip.setPixelColor(i,toCol([0,0,0])): i for i in range(0,self.ledcount)}
            self.strip.show()

            end = time.time()
            if self.animationStartTime + self.length <= end: self.active = False
    def getparams(self):
        return [self.name,self.length,self.color,self.delay]
    def getparamsnames(self):
        return ["name","length","color","delay"]
