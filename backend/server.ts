import express, { Express, Request, Response } from 'express'
import 'dotenv/config'
import firebase from './utils/firebase'
if (firebase) {
  console.log('Connected to Firebase')
}

import inquiry from './routes/inquiry'
import delivery from './routes/shipment'

const app: Express = express()
app.use(express.json())

// routes
app.use('/inquiry', inquiry)
app.use('/delivery', delivery)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
