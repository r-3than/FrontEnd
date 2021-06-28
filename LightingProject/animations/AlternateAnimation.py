from animations.Animation import *
import time

class AlternateAnimation(Animation):
    def __init__(self,strip,name,length,color1=[0,0,0],color2=[255,255,255],delay=1):
        super().__init__(strip,name,length)
        self.params = {"type":type(self).__name__,"name":name,"length":length,"delay":delay,"color1":color1,"color2":color2}
        self.totalFramesElapsed =0
    def draw(self):
        self.active= True
        self.animationStartTime = time.time()
        while self.active:
            self.totalFramesElapsed += 1
            time.sleep(self.params["delay"])
            {self.strip.setPixelColor(i,toCol(self.params["color1"])): i for i in range(0,self.ledcount,2)}
            {self.strip.setPixelColor(i,toCol(self.params["color2"])): i for i in range(1,self.ledcount,2)}
            self.strip.show()
            time.sleep(self.params["delay"])
            {self.strip.setPixelColor(i,toCol(self.params["color2"])): i for i in range(0,self.ledcount,2)}
            {self.strip.setPixelColor(i,toCol(self.params["color1"])): i for i in range(1,self.ledcount,2)}
            self.strip.show()

            end = time.time()
            if self.animationStartTime + self.params["length"] <= end: self.active = False

