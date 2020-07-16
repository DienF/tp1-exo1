input.onButtonPressed(Button.A, function () {
    led.unplot(x, 0)
    x = Math.min(4, x + -1)
    led.plot(x, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, 0)
    x = Math.max(0, x + 1)
    led.plot(x, 0)
})
let x = 0
x = 2
led.plot(x, 0)
let dir = 1
basic.forever(function () {
    led.unplot(x, 0)
    x += dir
    led.plot(x, 0)
    basic.pause(1000)
    if (x >= 4) {
        dir = -1
    } else if (x <= 0) {
        dir = 1
    }
})
