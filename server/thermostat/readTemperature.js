import fs from 'fs'
import { promisify } from 'util'
import { TEMPERATURE_PATH } from './constants'

const readFileAsync = promisify(fs.readFile)


const readTemperature = async () => {
  const getData = async () => {
    const parseData = temperatures => {
      const lines = temperatures.split('\n')
      const err = lines[0].slice(lines[0].length - 3) !== 'YES'
      const temperatureOutput = lines[2].slice(lines[2].indexOf('t=') + 2)
      return { err, temperatureOutput }
    }
    try {
      const data = await readFileAsync(TEMPERATURE_PATH)
      return parseData(data.toString())
    } catch (e) {
      throw e
    }
  }
  const { err, temperatureOutput } = await getData()
  if (err) {
    readTemperature()
  }
  return temperatureOutput
}

export default readTemperature
