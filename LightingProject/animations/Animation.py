import time
class Animation:
    def __init__(self,strip,name,length):
        self.strip = strip
        self.ledcount = self.strip.numPixels()
        self.params = {"type":type(self).__name__,"name":name,"length":length}
        self.active = True
    def draw(self,colour=[0,0,0]):
        self.active= True
        {self.strip.setPixelColor(i,toCol(colour)): i for i in range(0,self.ledcount)}
        self.strip.show()
    def getparams(self):
        return list(self.params.values())
    def getparamsnames(self):
        return list(self.params.keys())
    def getall(self):
        return self.params

class FullAnimation:
    def __init__(self,strip,listOfAni):
        self.active = True
        self.strip = strip
        self.animations = listOfAni
        self.OffAnimation = Animation(strip,"Off",None)
        self.currentAnimation = listOfAni[0]
        self.currentIndex = 0
    def flip(self):
        if self.active == True:
            self.currentIndex = self.currentIndex -1 # to stay on the same animation otherwise will skip to next on pause
        self.active = not self.active
        for item in self.animations:
            item.active=self.active
    def skip(self):
        self.currentAnimation.active = False
    def back(self):
        self.currentIndex = (self.currentIndex -2)%len(self.animations)
        self.currentAnimation.active = False
    def display(self):
        if self.active:
            self.currentAnimation.draw()
            self.currentIndex = (self.currentIndex +1)%len(self.animations)
            self.currentAnimation = self.animations[self.currentIndex]
        else:
            self.OffAnimation.draw()
            time.sleep(0.001)




def toCol(arr):
    return (arr[0] << 16) | (arr[1] << 8) | arr[2]
