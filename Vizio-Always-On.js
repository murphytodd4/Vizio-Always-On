var vizio = require('vizio-smart-cast');

//This script doesn't support a pairing step. The soundbar I have does not require it.

var deviceAddress = '192.168.1.52:9000';

var timeout = 10 //Seconds

function setPowerState(state) {
    soundbar.power.currentMode().then((result) => {

		var powerState = result.ITEMS[0].VALUE;
		var isPowerOn = powerState == 1;

		if (state == 1 && !isPowerOn) {
            soundbar.control.power.on();
        }
        else if (state == 0 && isPowerOn) {
            soundbar.control.power.off();
        }
	});
}

var soundbar = new vizio(deviceAddress);

setInterval(setPowerState(1), timeout);
