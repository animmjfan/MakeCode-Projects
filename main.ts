let num = 0
let num2 = 0
let ans = 0
let menu = 1
let eq_type = 0
basic.forever(function on_forever() {
	basic.clearScreen()
    // 1st menu section
	while (menu == 1) {
		basic.showNumber(num)
        input.onButtonPressed(Button.B, function() {
            num++
        })
        input.onButtonPressed(Button.A, function() {
            num--
        })
        input.onPinPressed(TouchPin.P0, function() {
            menu = 2
            basic.clearScreen()
        })
    }
    // 2nd menu section
    while (menu == 2) {
        basic.showNumber(num2)
        input.onButtonPressed(Button.B, function() {
            num2++
        })
        input.onButtonPressed(Button.A, function() {
            num2--
        })
        input.onPinPressed(TouchPin.P0, function() {
            menu = 3
            basic.clearScreen()
        })
    }
    // 3rd menu section
    while (menu == 3) {
        basic.showString("op", 100)
        input.onButtonPressed(Button.A, function() {
            ans = num + num2
            menu = 4
        })
        input.onButtonPressed(Button.B, function() {
            ans = num - num2
            menu = 4
        })
        input.onPinPressed(TouchPin.P0, function() {
            ans = num * num2
            menu = 4
        })
        input.onPinPressed(TouchPin.P1, function() {
            ans = num / num2
            menu = 4
        })
        input.onPinPressed(TouchPin.P2, function() {
            menu = 1
        })
    }
    // 4th menu section
    while (menu == 4) {
        basic.clearScreen()
        basic.showNumber(ans)
        // handle restarting on any key
        input.onButtonPressed(Button.A, function() {
            menu = 1
            num = num2 = 0
        })
        input.onButtonPressed(Button.B, function() {
            menu = 1
            num = num2 = 0
        })
        input.onButtonPressed(Button.AB, function() {
            menu = 1
            num = num2 = 0
        })
        input.onPinPressed(TouchPin.P0, function() {
            menu = 1
            num = num2 = 0
        })
        input.onPinPressed(TouchPin.P1, function() {
            menu = 1
            num = num2 = 0
        })
        input.onPinPressed(TouchPin.P2, function() {
            menu = 1
            num = num2 = 0
        })
    }
})
