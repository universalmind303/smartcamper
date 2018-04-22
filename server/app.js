import express from 'express'
import errorHandler from './errorHandler'
import middleware from './middleware'
import api from './api'
import { rpioCloseAll } from './gpioController'

const PORT = process.env.PORT || 8000

const app = express()

app.use(...middleware)

app.use('/api', api)


// error handling has to come after all other routes.
app.use(...errorHandler)

const portlog = () => console.log(`Server is listening on port: ${PORT}`)

app.listen(PORT, portlog)

process.on('SIGINT', () => {
  rpioCloseAll()
  process.exit()
})

export default app
