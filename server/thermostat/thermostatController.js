import { Router } from 'express'
import {
  readTempsFahrenheit,
  readTempsCelcius,
  setTemperature
} from './thermostat'
// import { readTempsFahrenheit } from '@thermostat'

const router = Router()

router.get('/farenheit', async (req, res) => {
  const temperature = await readTempsFahrenheit()
  res.json(temperature)
})

router.get('/celcius', (req, res) => {
  const temperature = readTempsCelcius()
  res.json(temperature)
})

router.post('', (req, res) => {
  const { temperature, mode } = req.body
  console.log(temperature, mode)
  setTemperature(temperature)
  res.json(temperature)
})

export default router
