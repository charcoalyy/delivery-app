import express, { Express, Request, Response } from 'express'
import 'dotenv/config'
import inquiry from './routes/inquiry'

const app: Express = express()
app.use(express.json())

// routes
app.use('/inquiry', inquiry)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
