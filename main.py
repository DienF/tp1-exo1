input.onButtonPressed(Button.A, function () {
    gauche()
})
function gauche () {
    x += -1
}
function droite2 () {
    x += 1
}
input.onButtonPressed(Button.B, function () {
    droite()
})
let x = 0
let droite = 0
let dir2 = droite
basic.forever(function () {
    led.plot(x, 0)
    basic.pause(1000)
    led.unplot(x, 0)
    if (0 == 0) {
    	
    }
})
