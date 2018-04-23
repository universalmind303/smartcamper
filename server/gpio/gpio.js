import rpio from 'rpio'
import { ON } from '../constants'

const rpioPINS = {
  heater: 3,
  bathroomLights: 5,
  bedroomLights: 7,
  livingRoomLights: 8
}
//   3,
//   5,
//   7,
//   8,
//   10,
//   11,
//   12,
//   13,
//   15,
//   16,
//   18,
//   19,
//   21,
//   22,
//   23,
//   24,
//   26
// ]


// export

function setPin(mode, pin) {
  return mode === ON
    ? rpio.write(pin, rpio.HIGH)
    : rpio.write(pin, rpio.LOW)
}

const readAll = () => rpioPINS.map(pin => rpio.read(pin))
const initialize = () => {
  rpio.init({ mock: 'raspi-3' })
  Object.values(rpioPINS).forEach(pin => rpio.open(pin, rpio.OUTPUT, rpio.HIGH))
}

const closeAll = () => {
  console.log('\nShutting down rpio')
  Object.values(rpioPINS).forEach((pin) => {
    rpio.close(pin)
  })
}

const gpio = {
  initialize,
  readAll,
  closeAll,
  heater: mode => setPin(mode, rpioPINS.heater),
  livingRoomLights: mode => setPin(mode, rpioPINS.livingRoomLights),
  bathroomLights: mode => setPin(mode, rpioPINS.bathroomLights),
  bedroomLights: mode => setPin(mode, rpioPINS.bedroomLights),
}

export default Object.freeze(gpio)
