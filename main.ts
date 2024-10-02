let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB_RGB)
strip.showRainbow(1, 255)
strip.setBrightness(50)
basic.pause(100)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
})
