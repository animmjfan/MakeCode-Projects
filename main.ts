let roll;
input.onGesture(Gesture.Shake, function() {
	basic.clearScreen();
	roll = randint(1, 6);
	basic.showNumber(roll);
})
