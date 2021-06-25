from animations.Animation import *
from functools import lru_cache
import time

@lru_cache(maxsize=2**20)
def rainbowFade(val):
    val = round(val)
    jumpAmt = (val // 255) %6
    BandPos = val % 255
    if jumpAmt == 0:
        return toCol([255,BandPos,0])
    if jumpAmt == 1:
        return toCol([255-BandPos,255,0])
    if jumpAmt == 2:
        return toCol([0,255,BandPos])
    if jumpAmt == 3:
        return toCol([0,255-BandPos,255])
    if jumpAmt == 4:
        return toCol([BandPos,0,255])
    if jumpAmt == 5:
        return toCol([255,0,255-BandPos])


class RainbowAnimation(Animation):
    def __init__(self,strip,name,length,variance=10,speed=10):
        super().__init__(strip,name,length)
        self.variance = variance
        self.speed = speed
        self.totalFramesElapsed =0
    def draw(self):
        self.active= True
        self.animationStartTime = time.time()
        maxTime = 0.02
        end = time.time()
        while self.active:
            self.totalFramesElapsed += 1
            start= time.time()
            {self.strip.setPixelColor(i,rainbowFade(i*self.variance+self.totalFramesElapsed*self.speed)): i for i in range(0,self.ledcount)}
            self.strip.show()
            end = time.time()
            time.sleep(max(maxTime-(end-start),0))
            if self.animationStartTime + self.length <= end: self.active = False
    def getparams(self):
        return [self.name,self.length,self.variance,self.speed]
    def getparamsnames(self):
        return ["name","length","variance","speed"]
        
            




