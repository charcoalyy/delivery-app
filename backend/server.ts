import express, { Express, Request, Response } from 'express'

const app: Express = express()

// routes
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
