import { Router } from 'express'
import {
  readTempsFahrenheit,
  readTempsCelcius,
  setTemperature
} from './thermostat'

const router = Router()

router.get('/farenheit', async (req, res) => {
  const temperature = await readTempsFahrenheit()
  res.json(temperature)
})

router.get('/celcius', async (req, res) => {
  const temperature = await readTempsCelcius()
  res.json(temperature)
})

router.post('', async (req, res) => {
  const { temperature, mode } = req.body
  console.log(temperature, mode)
  await setTemperature(temperature)
  res.json(temperature)
})

export default router
