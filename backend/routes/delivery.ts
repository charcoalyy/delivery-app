import { Router, Response } from 'express'
const { calculateRoute } = require('../utils/google-maps')
const { attachFees } = require('../routes/inquiry')
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  push,
  update,
} from 'firebase/database'
const router = Router()

const database = getDatabase()

const createNewShipment = (origin: string, destination: string) => {
  const tracking = calculateRoute(origin, destination)
    .then((gres: Response) => gres.json())
    .then((gres: any) => {
      const best = attachFees(gres).routes[0]
      if (best.distanceMeters > 25000) {
        throw new Error('Too far for local delivery!')
      }

      const shipmentListRef = ref(database, 'shipments')
      const newShipmentRef = push(shipmentListRef)
      set(newShipmentRef, {
        origin: origin,
        destination: destination,
        polyline: best.polyline.encodedPolyline,
        distanceMeters: best.distanceMeters,
        estimatedArrival: '2023-08-21',
        fee: best.fee,
        status: 'order received',
      })

      return newShipmentRef.key
    })
  return tracking
}

const getShipment = (tracking: string) => {
  const dbRef = ref(database)
  const res = get(child(dbRef, `shipments/${tracking}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val()
    } else {
      throw new Error(`Error: ${tracking} does not exist`)
    }
  })
  return res
}

router.post('/', async (req, res, next) => {
  try {
    const { origin, destination } = req.body
    const id = await createNewShipment(origin, destination)

    res.json({ tracking_number: id })
  } catch (err) {
    next(err)
  }
})

router.get('/:tracking', async (req, res, next) => {
  getShipment(req.params.tracking)
    .then((gres) => res.send(gres))
    .catch((err) => next(err))
})

router.put('/status/:tracking', async (req, res, next) => {
  const tracking = req.params.tracking
  const { status } = req.body

  getShipment(tracking)
    .then((shipment) => {
      shipment.status = status
      const updates: any = {}
      updates['/shipments/' + tracking] = shipment
      const gres = update(ref(database), updates)
      res.send('')
    })
    .catch((err) => next(err))
})

export default router
