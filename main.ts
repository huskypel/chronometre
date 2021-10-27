let start = 0
let temps_écouler = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    temps_écouler = input.runningTime() - start
    basic.showNumber(temps_écouler + 1000)
})
basic.forever(function () {
	
})
