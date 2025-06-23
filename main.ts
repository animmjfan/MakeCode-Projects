let num = 0
let num2 = 0
let ans = 0
let menu = 1
let eq_type = 0
basic.forever(function on_forever() {
    basic.clearScreen()
    //  1st menu section
    while (menu == 1) {
        basic.showNumber(num)
        input.onButtonPressed(Button.B, function on_button_pressed_b() {
            num += 1
        })
        input.onButtonPressed(Button.A, function on_button_pressed_a() {  
            num -= 1
        })
        input.onPinPressed(TouchPin.P0, function on_pin_pressed_p0() {
            menu = 2
            basic.clearScreen()
        })
    }
    //  2nd menu section
    while (menu == 2) {
        basic.showNumber(num2)
        input.onButtonPressed(Button.B, function on_button_pressed_b2() {
            num2 += 1
        })
        input.onButtonPressed(Button.A, function on_button_pressed_a2() {
            num2 -= 1
        })
        input.onPinPressed(TouchPin.P0, function on_pin_pressed_p02() {
            menu = 3
            basic.clearScreen()
        })
    }
    //  3rd menu section
    while (menu == 3) {
        basic.showString("op", 100)
        input.onButtonPressed(Button.A, function on_button_pressed_a3() {
            ans = num + num2
            menu = 4
        })
        input.onButtonPressed(Button.B, function on_button_pressed_b3() {
            ans = num - num2
            menu = 4
        })
        input.onPinPressed(TouchPin.P0, function on_pin_pressed_p03() {
            ans = num * num2
            menu = 4
        })
        input.onPinPressed(TouchPin.P1, function on_pin_pressed_p1() {
            ans = num / num2
            menu = 4
        })
        input.onPinPressed(TouchPin.P2, function on_pin_pressed_p2() {
            menu = 1
        })
    }
    //  4th menu section
    while (menu == 4) {
        basic.clearScreen()
        basic.showNumber(ans)
        //  handle restarting on any key
        input.onButtonPressed(Button.A, function on_button_pressed_a4() {
            menu = 1
            num = num2 = 0
        })
        input.onButtonPressed(Button.B, function on_button_pressed_b4() {
            menu = 1
            num = num2 = 0
        })
        input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
            menu = 1
            num = num2 = 0
        })
        input.onPinPressed(TouchPin.P0, function on_pin_pressed_p04() {
            menu = 1
            num = num2 = 0
        })
        input.onPinPressed(TouchPin.P1, function on_pin_pressed_p12() {
            menu = 1
            num = num2 = 0
        })
        input.onPinPressed(TouchPin.P2, function on_pin_pressed_p22() {
            menu = 1
            num = num2 = 0
        })
    }
})
