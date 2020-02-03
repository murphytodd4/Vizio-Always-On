var vizio = require('vizio-smart-cast');

var deviceAddress = '192.168.1.228:9000';

function setPowerState(state, callback) {
    displayDevice.power.currentMode().then((result) => {

		var powerState = result.ITEMS[0].VALUE;
		var isPowerOn = powerState == 1;

		if (state == 1 && !isPowerOn) {
            displayDevice.control.power.on();
        }
        else if (state == 0 && isPowerOn) {
            displayDevice.control.power.off();
        }
	});
}

var displayDevice = new vizio(deviceAddress);

setPowerState(1)
