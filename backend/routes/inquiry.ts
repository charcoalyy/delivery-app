import { Router, Response } from 'express'
const { addressAutoFill, calculateRoute } = require('../utils/google-maps')
const router = Router()

router.post('/', (req, res) => {
  const { originPlaceId, destinationPlaceId } = req.body
  calculateRoute(originPlaceId, destinationPlaceId).then((gres: Response) =>
    res.send(gres)
  )
})

router.get('/address-autofill/:address', async (req, res) => {
  addressAutoFill(req.params.address).then((gres: Response) => res.send(gres))
})

export default router
