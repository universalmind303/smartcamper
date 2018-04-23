import express from 'express'
import errorHandler from './errorHandler'
import middleware from './middleware'
import api from './api'
import gpio from './gpio/gpio'
import { PORT } from './constants'


gpio.initialize()

const app = express()
app.use(...middleware)
app.use('/api', api)
app.use(...errorHandler)

const loggingMessage = () => console.log(`Server is listening on port: ${PORT}`)

app.listen(PORT, loggingMessage)

process.on('SIGINT', () => {
  gpio.closeAll()
  process.exit()
})

export default app
