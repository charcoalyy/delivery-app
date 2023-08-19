import { equal } from 'assert'
import { create } from 'domain'
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
      gres = attachFees(gres)
      if (gres.routes.length < 1) {
        throw new Error('No routes found')
      }
      const best = attachFees(gres).routes[0]

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
  const res = get(child(dbRef, `shipments/${tracking}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val()
      } else {
        return null
      }
    })
    .catch((err) => {
      console.log(err)
    })
  return res
}

router.post('/', async (req, res) => {
  const { origin, destination } = req.body
  createNewShipment(origin, destination).then((id: any) =>
    res.json({ tracking_number: id })
  )
})

router.get('/:tracking', async (req, res) => {
  getShipment(req.params.tracking).then((gres) => res.send(gres))
})

router.put('/status/:tracking', async (req, res) => {
  const tracking = req.params.tracking
  const { status } = req.body
  const shipment = await getShipment(tracking)
  shipment.status = status
  const updates: any = {}
  updates['/shipments/' + tracking] = shipment
  const gres = update(ref(database), updates)
  res.send('')
})

export default router
