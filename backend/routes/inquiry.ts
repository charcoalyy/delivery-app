import { Router, Response } from 'express'
const { geocode, calculateRoute } = require('../utils/google-maps')
const router = Router()

router.post('/', (req, res) => {
  const { origin, destination } = req.body
  calculateRoute(origin, destination).then((gres: Response) => res.send(gres))
})

router.get('/geocode/:address', async (req, res) => {
  geocode(req.params.address).then((gres: Response) => res.send(gres))
})

export default router
