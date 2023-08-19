import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import express, { Express, Request, Response } from 'express'
import 'dotenv/config'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'delivery-app-396404.firebaseapp.com',
  projectId: 'delivery-app-396404',
  storageBucket: 'delivery-app-396404.appspot.com',
  messagingSenderId: '815958744625',
  appId: '1:815958744625:web:3cfa2974ac35425d553f10',
  measurementId: 'G-W97EH7KT2M',
  databaseURL: 'https://delivery-app-396404-default-rtdb.firebaseio.com/',
}

const firebase = initializeApp(firebaseConfig)
const database = getDatabase(firebase)

import inquiry from './routes/inquiry'
import delivery from './routes/delivery'

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
