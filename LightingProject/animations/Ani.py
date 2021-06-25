
class Animation:
    def __init__(self,strip,name,length):
        self.strip = strip
        self.ledcount = self.strip.numPixels()
        self.name = name
        self.length = length
        self.active = True
        

