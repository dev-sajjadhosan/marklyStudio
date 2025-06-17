import dotenv from 'dotenv'
dotenv.config()
import express, { Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import readmeRouter from './routes/readme'


const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(cookieParser())




app.use('/readme', readmeRouter)


// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/marklyStudio'

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB connected ✅'))
  .catch((err) => {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  })

// Sample Mongoose Schema & Model


// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to your Mongoose + Express app!')
})


// Error handler middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ message: err.message })
})

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
