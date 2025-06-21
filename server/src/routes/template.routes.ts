import { Router } from 'express'
import Template from '../models/Template'

const router = Router()

//  GET api
router.get('/all', async (_, res) => {
  const templates = await Template.find()
  res.json(templates)
})

// POST api
router.post('/create', async (req, res) => {
  const template = await Template.create(req.body)
  res.status(201).json(template)
})

// Delete api
router.delete('/delete', async (req, res) => {
  console.log('Delete ID: ',req.body)
})

export default router
