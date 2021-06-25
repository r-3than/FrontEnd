import time
from flask import Flask




from animations.Animation import Animation
import animations
from animations.AlternateAnimation import AlternateAnimation
import time , math ,random
from rpi_ws281x import *
import argparse 
from functools import lru_cache
import numpy as np
import threading 
import gpiozero , time

import sys
from animations import *


ModulesUsed =list(sys.modules.keys())                                       ##this block generates initalisers for all modules in the animations folder.
AnimationModules = [item for item in ModulesUsed if "animations." in item]
allAnimations = {}
for item in AnimationModules:
    name = item.split(".")[1]
    Module = sys.modules[item]
    Module = getattr(Module, name )
    allAnimations[name] = Module



print(allAnimations)

#from animations.rainbowFade import RainbowAnimation
#from animations.blink import BlinkAnimation

# LED strip configuration:
LED_COUNT      = 256    # Number of LED pixels.
LED_PIN        = 18      # GPIO pin connected to the pixels (18 uses PWM!).
#LED_PIN        = 10      # GPIO pin connected to the pixels (10 uses SPI /dev/spidev0.0).
LED_FREQ_HZ    = 800000  # LED signal frequency in hertz (usually 800khz)
LED_DMA        = 10      # DMA channel to use for generating signal (try 10)
LED_BRIGHTNESS = 255     # Set to 0 for darkest and 255 for brightest
LED_INVERT     = False   # True to invert the signal (when using NPN transistor level shift)
LED_CHANNEL    = 0       # set to '1' for GPIOs 13, 19, 41, 45 or 53

strip = Adafruit_NeoPixel(LED_COUNT, LED_PIN, LED_FREQ_HZ, LED_DMA, LED_INVERT, LED_BRIGHTNESS, LED_CHANNEL)
strip.begin()
testGrab1 = allAnimations["RainbowAnimation"](strip,"Rainbow",10,10,10)
testGrab2 = allAnimations["RainbowAnimation"](strip,"Rainbow2",10,10,-10)
testGrab3 = allAnimations["RainbowAnimation"](strip,"Rainbow2",10,25,15)
#testGrab2 = allAnimations["AlternateAnimation"](strip,"Alt1",25,[255,0,0],[0,100,0],0.2)
#testGrab3 = allAnimations["FollowAnimation"](strip,"F",10,(255,255,255),0.000)

fullAnimation = [testGrab1,testGrab2,testGrab3]
fullAnimation = Animation.FullAnimation(strip,fullAnimation)

Inp = gpiozero.Button(23)
Inp.when_pressed =fullAnimation.flip

def drawThread():
    print("Started playing")
    while True:
        fullAnimation.display()


worker = threading.Thread(target=drawThread).start()
app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/getanimations')
def getanimations():
    return {'animations' : allAnimations.keys() }

@app.route('/toggle')
def toggler():
    try:
        fullAnimation.flip()
        return {'success': 'true'}
    except:
        return {'success': 'false'}

@app.route('/skip')
def skiper():
    try:
        fullAnimation.skip()
        return {'success': 'true'}
    except:
        return {'success': 'false'}

@app.route('/back')
def backer():
    try:
        fullAnimation.back()
        return {'success': 'true'}
    except:
        return {'success': 'false'}


app.run(host="0.0.0.0")