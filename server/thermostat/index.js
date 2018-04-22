import thermostat, {
  readTempsFahrenheit,
  readTempsCelcius,
  setTemperature
} from './thermostat'

import router from './thermostatController'

export { readTempsFahrenheit, readTempsCelcius, setTemperature, thermostat }
export default router
