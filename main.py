OLED.init(128, 64)
strip = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)

def on_forever():
    if smarthome.crash_sensor():
        OLED.write_string("Kom ind")
    else:
        OLED.write_string("Vent")
basic.forever(on_forever)
