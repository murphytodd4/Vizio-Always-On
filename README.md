# Vizio Soundbar Always On

 My Vizio soundbar repeatedly was turning itself off while in use. I made this script to run on a server. It starts a timer and after the timeout it polls the soundbar and will send it a command to turn back on in the event that it has turned off.

 `Vizio-Always-On` is based off of [`homebridge-vizio-soundbar`](https://github.com/ycao56/homebridge-vizio-soundbar) by [Yu Cao](https://github.com/ycao56) and uses [`vizio-smart-cast`](https://github.com/heathbar/vizio-smart-cast/blob/master/README.md) by [Heath Paddock](https://github.com/heathbar).
