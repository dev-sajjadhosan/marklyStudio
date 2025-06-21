import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
dotenvExpand.expand(dotenv.config())

import { connectDB } from './config/db'
import userRoutes from './routes/user.routes'
import readmeRoutes from './routes/readme.routes'
import templateRoutes from './routes/template.routes'
import chatRoutes from './routes/chats.routes'


const app = express()
const PORT = process.env.PORT || 5000

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use('/user', userRoutes)
app.use('/readme', readmeRoutes)
app.use('/template', templateRoutes)
app.use('/chat', chatRoutes)

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
