num = 0
num2 = 0
ans = 0
menu = 1
eq_type = 0

def on_forever():
    basic.clear_screen()
    # 1st menu section
    while menu == 1:
        basic.show_number(num)
        
        def on_button_pressed_b():
            global num
            num += 1
        input.on_button_pressed(Button.B, on_button_pressed_b)
        
        
        def on_button_pressed_a():
            global num
            num -= 1
        input.on_button_pressed(Button.A, on_button_pressed_a)
        
        
        def on_pin_pressed_p0():
            global menu
            menu = 2
            basic.clear_screen()
        input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)
        
    # 2nd menu section
    while menu == 2:
        basic.show_number(num2)
        
        def on_button_pressed_b2():
            global num2
            num2 += 1
        input.on_button_pressed(Button.B, on_button_pressed_b2)
        
        
        def on_button_pressed_a2():
            global num2
            num2 -= 1
        input.on_button_pressed(Button.A, on_button_pressed_a2)
        
        
        def on_pin_pressed_p02():
            global menu
            menu = 3
            basic.clear_screen()
        input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p02)
        
    # 3rd menu section
    while menu == 3:
        basic.show_string("op", 100)
        
        def on_button_pressed_a3():
            global ans, menu
            ans = num + num2
            menu = 4
        input.on_button_pressed(Button.A, on_button_pressed_a3)
        
        
        def on_button_pressed_b3():
            global ans, menu
            ans = num - num2
            menu = 4
        input.on_button_pressed(Button.B, on_button_pressed_b3)
        
        
        def on_pin_pressed_p03():
            global ans, menu
            ans = num * num2
            menu = 4
        input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p03)
        
        
        def on_pin_pressed_p1():
            global ans, menu
            ans = num / num2
            menu = 4
        input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)
        
        
        def on_pin_pressed_p2():
            global menu
            menu = 1
        input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)
        
    # 4th menu section
    while menu == 4:
        basic.clear_screen()
        basic.show_number(ans)
        # handle restarting on any key
        
        def on_button_pressed_a4():
            global menu, num, num2
            menu = 1
            num = 0
            num2 = 0
        input.on_button_pressed(Button.A, on_button_pressed_a4)
        
        
        def on_button_pressed_b4():
            global menu, num, num2
            menu = 1
            num = 0
            num2 = 0
        input.on_button_pressed(Button.B, on_button_pressed_b4)
        
        
        def on_button_pressed_ab():
            global menu, num, num2
            menu = 1
            num = 0
            num2 = 0
        input.on_button_pressed(Button.AB, on_button_pressed_ab)
        
        
        def on_pin_pressed_p04():
            global menu, num, num2
            menu = 1
            num = 0
            num2 = 0
        input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p04)
        
        
        def on_pin_pressed_p12():
            global menu, num, num2
            menu = 1
            num = 0
            num2 = 0
        input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p12)
        
        
        def on_pin_pressed_p22():
            global menu, num, num2
            menu = 1
            num = 0
            num2 = 0
        input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p22)
        
basic.forever(on_forever)
