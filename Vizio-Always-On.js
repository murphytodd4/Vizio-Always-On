var vizio = require('vizio-smart-cast');
var path = require('path');

//This script doesn't support a pairing step. The soundbar I have does not require it.

var deviceAddress = process.argv.slice(2)[0];

var filename = path.basename(__filename);

var timeout = 10000; //milliseconds

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

if(deviceAddress){
	console.log("Running");
	var soundbar = new vizio(deviceAddress);

	setInterval(function(){
		setPowerState(1);
	}, timeout);
}
else{
	console.log("Usage: node "+filename+" [ipaddress]")
	console.log()
	console.log("ipaddress - can be the ip address or the port can be appended")
}
