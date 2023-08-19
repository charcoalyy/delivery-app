import { Router, Response } from 'express'
import { createQuote } from '../controllers/inquiry'
const { geocode } = require('../utils/google-maps')
const router = Router()

const calculateFee = (dist: number) => {
  return Math.round((2 + dist / 3000) * 100) / 100
}

exports.attachFees = (gres: any) => {
  gres.routes.forEach((route: any) => {
    route.fee = calculateFee(route.distanceMeters)
  })
  return gres
}

router.post('/', (req, res) => {
  const { origin, destination } = req.body
  createQuote(origin, destination)
})

router.get('/geocode/:address', async (req, res) => {
  geocode(req.params.address).then((gres: Response) => res.send(gres))
})

export default router
