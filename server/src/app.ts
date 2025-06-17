import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import { connectDB } from './config/db'
import userRoutes from './routes/user.routes'
import readmeRoutes from './routes/readme.routes'
const app = express()
const PORT = process.env.PORT || 5000

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use('/users', userRoutes)
app.use('/readme', readmeRoutes)

// Root
app.get('/', (_, res) => {
  res.send('🚀 Server up & running!')
})

;(async () => {
  await connectDB(
    (process.env.MONGO_URI as string) ||
      'mongodb://localhost:27017/marklyStudio',
  )
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
  })
})()
