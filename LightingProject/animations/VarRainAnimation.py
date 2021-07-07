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


class VarRainAnimation(Animation):
    def __init__(self,strip,name,length,speeds=[10,5],variances=[10,5],lengths=[10,10]):
        super().__init__(strip,name,length)
        self.params = {"type":type(self).__name__,"name":name,"length":length,"speeds":speeds,"variances":variances,"lengths":lengths}
        self.totalFramesElapsed =0
    def draw(self):
        currentStartTime = time.time()
        currentIndex = 0
        currentLength = self.params["lengths"][currentIndex]
        currentSpeed = self.params["speeds"][currentIndex]
        currentVar = self.params["variances"][currentIndex]
        self.active= True
        self.animationStartTime = time.time()
        maxTime = 0.02
        end = time.time()
        while self.active:
            self.totalFramesElapsed += 1
            start= time.time()
            {self.strip.setPixelColor(i,rainbowFade(i*currentVar+self.totalFramesElapsed*currentSpeed)): i for i in range(0,self.ledcount)}
            self.strip.show()
            end = time.time()
            time.sleep(max(maxTime-(end-start),0))
            
            if self.animationStartTime + self.params["length"] <= end: self.active = False
            if currentStartTime + currentLength <= end and self.active:
                currentStartTime = time.time()
                currentIndex += 1
                currentLength = self.params["lengths"][currentIndex]
                currentSpeed = self.params["speeds"][currentIndex]
                currentVar = self.params["variances"][currentIndex]

        
            




