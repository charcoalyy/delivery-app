import { Router, Response } from 'express'
const { addressAutoFill } = require('../utils/google-maps')
const router = Router()

router.post('/', (req, res) => {
  // what does the client pass in here?
})

router.get('/address-autofill/:address', async (req, res) => {
  addressAutoFill(req.params.address).then((gres: Response) => res.send(gres))
})

export default router
