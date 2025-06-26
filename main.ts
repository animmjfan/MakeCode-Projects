let count = 0;
let botChoice;
let leaveRpsMenu = 0;
basic.forever(function on_forever() {
	basic.clearScreen();
	basic.showString("G");
	while (true) {
		if (input.buttonIsPressed(Button.A) == true || input.buttonIsPressed(Button.B) == true || input.buttonIsPressed(Button.AB) == true|| input.pinIsPressed(TouchPin.P0) == true || input.pinIsPressed(TouchPin.P1) == true || input.pinIsPressed(TouchPin.P2) == true) {
			break;
		}
	}
	count = 0;
	while (true) {
		switch (count) {
			case 0:
				basic.showString("R");
				break;
			case 1:
				basic.showString("P");
				break;
			case 2:
				basic.showString("S");
				break;
		}
		while (true) {
			if (input.buttonIsPressed(Button.A)) {
				count = count + 1;
				if (count > 2) {
					count = 0;
				}
				break;
			}
			if (input.buttonIsPressed(Button.B)) {
				leaveRpsMenu = 1;
				break;
			}
		}
		if (leaveRpsMenu == 1) {
			break;
		}
	}
	botChoice = randint(1, 3);
	switch (botChoice) {
		case 0:
			basic.showString("Bot: R", 80);
			break;
		case 1:
			basic.showString("Bot: P", 80);
			break;
		case 2:
			basic.showString("Bot: S", 80);
			break;
	}
	switch (count) {
		case 0:
			switch (botChoice) {
				case 0:
					basic.showString("T");
					break;
				case 1:
					basic.showString("L");
					break;
				case 2:
					basic.showString("W");
					break;
			}
			break;
		case 1:
			switch (botChoice) {
				case 0:
					basic.showString("W");
					break;
				case 1:
					basic.showString("T");
					break;
				case 2:
					basic.showString("L");
					break;
			}
			break;
		case 2:
			switch (botChoice) {
				case 0:
					basic.showString("L");
					break;
				case 1:
					basic.showString("W");
					break;
				case 2:
					basic.showString("T");
					break;
			}
			break;
	}
	while (true) {
		if (input.buttonIsPressed(Button.A) == true || input.buttonIsPressed(Button.B) == true || input.buttonIsPressed(Button.AB) == true || input.pinIsPressed(TouchPin.P0) == true || input.pinIsPressed(TouchPin.P1) == true || input.pinIsPressed(TouchPin.P2) == true) {
			break;
		}
	}
})
