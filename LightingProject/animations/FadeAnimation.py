from animations.Animation import *
import time
##TODOasd
class FadeAnimation(Animation):
    def __init__(self,strip,name,length,color=[255,255,255]):
        super().__init__(strip,name,length)
        self.params = {"type":type(self).__name__,"name":name,"length":length,"color":color}
        self.totalFramesElapsed =0
    def draw(self):
        self.active= True
        self.animationStartTime = time.time()
        
        while self.active:
            for x in range(0,amtToLoop):
                newRed  = round(startColor[0] + (x/amtToLoop)*redDiff)
                newGreen = round(startColor[1] + (x/amtToLoop)*greenDiff)
                newBlue = round(startColor[2] + (x/amtToLoop)*blueDiff)
                newColor = Color(newRed,newGreen,newBlue)
            {self.strip.setPixelColor(i,toCol(self.params["color"])): i for i in range(0,self.ledcount)}
            self.strip.show()
            end = time.time()
            if self.animationStartTime + self.params["length"] <= end: self.active = False


def fadeTo(strip,startColor,endColor,length,timestep=20):
    timestep = timestep/1000
    redDiff = endColor[0]-startColor[0]
    greenDiff = endColor[1]-startColor[1]
    blueDiff = endColor[2]-startColor[2]
    amtToLoop = round(length/timestep)
    
        
        fill(strip,newColor)
        time.sleep(timestep)