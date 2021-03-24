OLED.init(128, 64)
let strip = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
basic.forever(function () {
    if (smarthome.crashSensor()) {
        OLED.writeString("Kom ind")
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else {
        OLED.writeString("Vent")
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(200)
        OLED.clear()
    }
})
