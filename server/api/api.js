import { Router } from 'express'
import thermostatController from '../thermostat'

const app = Router()


app.use('/thermostat', thermostatController)

export default app
