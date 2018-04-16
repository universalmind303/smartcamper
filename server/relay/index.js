import express from 'express'
import { rpioReadAll, togglePin } from '../gpioController'

const router = express.Router()

router.get('/status', (req, res) => {
  res.status(200).send(JSON.stringify(rpioReadAll()))
});
[...Array(10)].forEach((i) => {
router.post(`/${i}`, (req,res) => {
  console.log(togglePin(i))
  res.status(200).send(JSON.stringify(togglePin(i)))
})
})
router.post('/3', (req, res) => {
  console.log(togglePin(3))
  res.status(200).send(JSON.stringify(togglePin(3)))
})
router.post('/4', (req, res) => {
  console.log(togglePin(3))
  res.status(200).send(JSON.stringify(togglePin(3)))
})
router.post('/5', (req, res) => {
  console.log(togglePin(3))
  res.status(200).send(JSON.stringify(togglePin(3)))
})
router.post('/6', (req, res) => {
  console.log(togglePin(3))
  res.status(200).send(JSON.stringify(togglePin(3)))
})
router.post('/4', (req, res) => {
  res.status(200).send(JSON.stringify(rpioReadAll()))
})

export default router
