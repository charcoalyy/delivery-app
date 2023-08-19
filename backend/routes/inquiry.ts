import { Router, Response } from 'express'
const { geocode, calculateRoute } = require('../utils/google-maps')
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

router.post('/', (req, res, next) => {
  console.log(req.body)
  const { origin, destination } = req.body
  calculateRoute(origin, destination)
    .then((gres: Response) => gres.json())
    .then((gres: any) => {
      res.send(exports.attachFees(gres))
    })
    .catch((err: any) => next(err))
})

router.get('/geocode/:address', async (req, res, next) => {
  geocode(req.params.address)
    .then((gres: Response) => res.send(gres))
    .catch((err: any) => {
      next(err)
    })
})

export default router
