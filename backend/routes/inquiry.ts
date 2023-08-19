import { Router } from 'express'
const router = Router()

router.post('/', (req, res) => {
  // what does the client pass in here?
})

router.get('/address-autofill/:address', async (req, res) => {
  const address = req.params.address
  const gMapsRes = fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`
  )
    .then((response) => response.json())
    .then((stuff) => {
      console.log(stuff)
      res.send(stuff)
    })
})

export default router
