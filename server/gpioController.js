// import rpio from 'rpio'

const GPIOPINS = [
  3,
  5,
  7,
  8,
  10,
  11,
  12,
  13,
  15,
  16,
  18,
  19,
  21,
  22,
  23,
  24,
  26
]
const rpio = {}

export const togglePin = pin => rpio.read(pin)
export const rpioReadAll = () => GPIOPINS.map(pin => rpio.read(pin))
export const rpioInitialize = () => {
  GPIOPINS.forEach(pin => rpio.open(pin, rpio.OUTPUT, rpio.HIGH))
}
export const rpioCloseAll = () => {
  console.log('\nShutting down GPIO')
  GPIOPINS.forEach((pin) => {
    rpio.close(pin)
  })
}
