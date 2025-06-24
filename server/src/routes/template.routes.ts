import { Router } from 'express'
import Template from '../models/Template'
import multer from 'multer'

const storage = multer.memoryStorage() // or use diskStorage if you want to save files to disk
const upload = multer({ storage })

const router = Router()

//  GET api
router.get('/all', async (req, res) => {
  const page = Number(req.query?.p)
  const count = Number(req.query?.c)
  const totalPages = await Template.countDocuments()

  console.log(req.query)
  console.log(Math.ceil(totalPages / 12))

  const templates = await Template.find()
    .skip(page * count)
    .limit(count)
    .sort({ createdAt: -1 })
  res.json({
    data: templates,
    totalPages,
  })
})

// POST api
router.post(
  '/create',
  upload.fields([
    { name: 'file_code', maxCount: 1 },
    { name: 'preview', maxCount: 1 },
  ]),
  async (req, res) => {
    const files = req.files as
      | { [fieldname: string]: Express.Multer.File[] }
      | undefined
    const file = files?.file_code?.[0]
    const preview = files?.preview?.[0]

    const {
      title,
      name,
      category,
      username,
      shortDes,
      create_time,
      create_date,
    } = req.body

    const template = await Template.create({
      title,
      category,
      name,
      username,
      description: shortDes,
      file,
      picture: preview,
      createTime: create_time,
      createDate: create_date,
    })
    res
      .status(200)
      .json({ success: true, message: 'Template Publish 🎉!', type: 'success' })
  },
)

// Delete api
router.delete('/delete', async (req, res) => {
  console.log('Delete ID: ', req.body)
})

export default router
