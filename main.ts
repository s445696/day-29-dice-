input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
    basic.pause(5000)
    control.reset()
})
basic.forever(function () {
	
})
