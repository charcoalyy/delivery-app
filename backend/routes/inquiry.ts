import { Router, Response } from 'express'
const {
  geocode,
  calculateRoute,
  decodePolyline,
} = require('../utils/google-maps')
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
      if (gres.routes[0].distanceMeters > 25) {
        throw new Error('Too far for local delivery!')
      }
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

router.get('/decode-polyline/:encodedPl', (req, res, next) => {
  try {
    const encodedPl = req.params.encodedPl
    res.send(decodePolyline(encodedPl))
  } catch (err) {
    next(err)
  }
})

export default router
