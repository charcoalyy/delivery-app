import { Router, Response } from 'express'
const { geocode, calculateRoute } = require('../utils/google-maps')
const router = Router()

const calculateFee = (dist: number) => {
  return Math.round((2 + dist / 3000) * 100) / 100
}

router.post('/', (req, res) => {
  const { origin, destination } = req.body
  calculateRoute(origin, destination)
    .then((gres: Response) => gres.json())
    .then((gres: any) => {
      gres.routes.forEach((route: any) => {
        route.fee = calculateFee(route.distanceMeters)
        console.log(route)
      })
      res.send(gres)
    })
})

router.get('/geocode/:address', async (req, res) => {
  geocode(req.params.address).then((gres: Response) => res.send(gres))
})

export default router