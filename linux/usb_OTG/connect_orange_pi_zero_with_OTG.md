# Connect the orange pi zero with usb OTG

## Two steps to access orange pi zero with its OTG feature.

1. connect the device with usb cable.

2. Access the device with minicom. i.e. For my ubuntu 18.04 lts,
use the command 'sudo minicom /dev/ttyACM0'

## Config minicom tool

Config your minicom if it is your fist time to use this tool. please refer this [webpage](http://www.orangepi.org/Docs/LogintotheOrangePi.html#Using_TTL_serial_port).
> **Note**: The orange pi zero has featured the usb OTG, we don't need the additional device, "PL2303".