import { Router } from 'express'

const app = Router()

app.use('relay', relayRouter)

app.use('thermostat', thermostatRouter)