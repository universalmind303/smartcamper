
import readTemperature from './readTemperature'
import { OFF, CELCIUS, ON } from '../constants'
import gpio from '../gpio/gpio'


export const readTempsFahrenheit = async () => (((await readTemperature() / 1000) * 9) / 5) + 32
export const readTempsCelcius = async () => await readTemperature() / 1000
const setHeater = mode => gpio.heater(mode)

const checkTempsFahrenheit = async (temperature) => {
  const checkedTemperature = await readTempsFahrenheit()
  const status = temperature > checkedTemperature - 1 && temperature < checkedTemperature + 1

  if (!status) {
    setTimeout(async () => checkTempsFahrenheit(temperature), 1000)
  }
  return status
}

const checkTempsCelcius = async (temperature) => {
  const checkedTemperature = await readTempsCelcius()
  const status = temperature > checkedTemperature - 3 && temperature < checkedTemperature + 3

  if (!status) {
    setTimeout(async () => checkTempsCelcius(temperature), 1000)
  } else {
    setHeater(OFF)
  }
  return status
}

export const setTemperature = async (temperature, mode) => {
  const status = mode === CELCIUS
    ? await checkTempsCelcius(temperature)
    : await checkTempsFahrenheit(temperature)
  if (!status) {
    setHeater(ON)
  }
  console.log(status)
}
