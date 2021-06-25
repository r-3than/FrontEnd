import time , math ,random
from rpi_ws281x import *
import argparse 
from functools import lru_cache
import numpy as np
import threading 
import gpiozero , time

# LED strip configuration:
LED_COUNT      = 256    # Number of LED pixels.
LED_PIN        = 18      # GPIO pin connected to the pixels (18 uses PWM!).
#LED_PIN        = 10      # GPIO pin connected to the pixels (10 uses SPI /dev/spidev0.0).
LED_FREQ_HZ    = 800000  # LED signal frequency in hertz (usually 800khz)
LED_DMA        = 10      # DMA channel to use for generating signal (try 10)
LED_BRIGHTNESS = 255     # Set to 0 for darkest and 255 for brightest
LED_INVERT     = False   # True to invert the signal (when using NPN transistor level shift)
LED_CHANNEL    = 0       # set to '1' for GPIOs 13, 19, 41, 45 or 53
LightArray = np.zeros((LED_COUNT,3),dtype=np.uint32)
LightArray[0] =[255,255,255]


def toCol(arr):
    return (arr[0] << 16) | (arr[1] << 8) | arr[2]

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

def proxSetRain(irange,x):
    for i in range(irange[0],irange[1]):
        col = rainbowFade(i*10+x*3)
        strip.setPixelColor(i,col)


def rainbow(strip,imult,xmult):
    maxTime = 0.016
    end = time.time()
    print("animation reset")
    for x in range(0,1530):
        if state:
            start= time.time()
            futures = {strip.setPixelColor(i,rainbowFade(i*imult+x*xmult)): i for i in range(0,LED_COUNT)}
            
            strip.show()
            end = time.time()
            time.sleep(max(maxTime-(end-start),0))
            #print(round(end-start,4))
                
        else:
            while not state:
                fill(strip,toCol([0,0,0]))
                time.sleep(0.01)

pi = 3.14
def fill(strip,color):
    for i in range(strip.numPixels()):
        strip.setPixelColor(i,color)
    strip.show()
def fadeAll(strip,timestep=20):
    timestep = timestep/1000
    for x in range(0,256**3):
        for i in range(strip.numPixels()):
            strip.setPixelColor(i,x)
        strip.show()
        time.sleep(timestep)

def fadeTo(strip,startColor,endColor,length,timestep=20):
    timestep = timestep/1000
    redDiff = endColor[0]-startColor[0]
    greenDiff = endColor[1]-startColor[1]
    blueDiff = endColor[2]-startColor[2]
    amtToLoop = round(length/timestep)
    for x in range(0,amtToLoop):
        newRed  = round(startColor[0] + (x/amtToLoop)*redDiff)
        newGreen = round(startColor[1] + (x/amtToLoop)*greenDiff)
        newBlue = round(startColor[2] + (x/amtToLoop)*blueDiff)
        newColor = Color(newRed,newGreen,newBlue)
        fill(strip,newColor)
        time.sleep(timestep)

def strips(strip,col1,col2):
    for i in range(0,strip.numPixels(),2):
        strip.setPixelColor(i,toCol(col1))
        strip.setPixelColor(i+1,toCol(col2))
    strip.show()

def randColr(strip):
    for i in range(0,1000):
        strip.setPixelColor(random.randint(0,255),Color(random.randint(0,255),random.randint(0,255),random.randint(0,255)))
        strip.show()
        time.sleep(0.01)

def randOff(strip):
    for i in range(0,1000):
        strip.setPixelColor(random.randint(0,255),Color(0,0,0))
        strip.show()
        time.sleep(0.01)

def someWave(strip):
    totalTime= 0.1
    direction = 1
    redrand = 0
    for x in range(1,1000):
        wait_ms = 2
        timestep = 0.21987
        for i in range(strip.numPixels()):
            red = redrand
            green = 0
            blue = ((x+i*direction) %10)*10
            color = Color(red,green,blue)
            strip.setPixelColor(i,color)
        strip.show()
        if x % 255==0:
            direction = -direction
            redrand = random.randint(0,255)
        totalTime = totalTime + timestep*direction
        time.sleep(wait_ms/1000.0)

def randoCol(amt):
    for _ in range(amt):
        for i in range(LED_COUNT):
            strip.setPixelColor(i,rainbowFade(random.randint(0,1530)))
        time.sleep(0.1)
        strip.show()
global state
state = True
def proxrainbow():
    while True:
        rainbow(strip,10,10)

def changeState():
    global state
    state = not state


strip = Adafruit_NeoPixel(LED_COUNT, LED_PIN, LED_FREQ_HZ, LED_DMA, LED_INVERT, LED_BRIGHTNESS, LED_CHANNEL)
strip.begin()
someWave(strip)
if __name__ == '__main__':
    test = threading.Thread(target=proxrainbow).start()
    Inp = gpiozero.Button(23)
    Inp.when_pressed =changeState
    # Process arguments
    parser = argparse.ArgumentParser()
    parser.add_argument('-c', '--clear', action='store_true', help='clear the display on exit')
    args = parser.parse_args()

    # Create NeoPixel object with appropriate configuration.
    

    # Intialize the library (must be called once before other functions).
    """
    strip.show()
    print ('Press Ctrl-C to quit.')
    
    input("Type to continue")
    rainbow(strip,10,3)
    tl =1

    startColor=[255,0,0]
    fadeTo(strip,startColor,endColor,tl)
    startColor= endColor

    return [0,255,0]
    fadeTo(strip,startColor,endColor,tl)
    startColor= endColor

    return [0,255,255]
    fadeTo(strip,startColor,endColor,tl)
    startColor= endColor

    return [0,0,255]
    fadeTo(strip,startColor,endColor,tl)
    startColor= endColor

    return [255,0,255]
    fadeTo(strip,startColor,endColor,tl)
    startColor= endColor

    return [255,0,0]
    fadeTo(strip,startColor,endColor,tl)
    startColor= endColor

    while True:
        startColor=[255,0,0]
        return [255,255,0]
        fadeTo(strip,startColor,endColor,tl)
        startColor= endColor

        return [0,255,0]
        fadeTo(strip,startColor,endColor,tl)
        startColor= endColor

        return [0,255,255]
        fadeTo(strip,startColor,endColor,tl)
        startColor= endColor

        return [0,0,255]
        fadeTo(strip,startColor,endColor,tl)
        startColor= endColor

        return [255,0,255]
        fadeTo(strip,startColor,endColor,tl)
        startColor= endColor

        return [255,0,0]
        fadeTo(strip,startColor,endColor,tl)
        startColor= endColor

        return [random.randint(0,255),random.randint(0,255),random.randint(0,255)]
        fadeTo(strip,startColor,endColor,3)
        startColor= endColor



"""