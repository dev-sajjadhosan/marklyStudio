import { Router, RequestHandler } from 'express'
import Readme from '../models/Readme'
import { GoogleGenerativeAI } from '@google/generative-ai'

const router = Router()
/** Initialise Gemini 2 SDK */

const hello: RequestHandler = async (req, res) => {
  res.json('The Readme ai is working')
}

console.log(process.env.GEMINI_API_KEY)

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

const createReadme: RequestHandler = async (req, res, next) => {
  const { description, style } = req.body

  console.log(req.body)

  if (!description?.trim()) {
    res.status(400).json({ error: 'Description is required' })
    return
  }

  /** Map the style dropdown to a prompt hint */
  const stylePromptMap: Record<string, string> = {
    auto: 'Decide appropriate sections automatically.',
    basic: 'Keep it minimal: title, description, installation, usage.',
    professional:
      'Include badges, tech stack, features, screenshots (placeholder), license.',
    opensource: 'Add contribution guide, code of conduct, and license.',
    cli: 'Focus on install via npm/yarn, command list, and examples.',
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    /** Build the full prompt */
    const prompt = `
Generate a professional GitHub README.md file.

Project Description:
"${description}"

Guidelines:
${stylePromptMap[style] ?? stylePromptMap.auto}
Use clean markdown syntax.
`.trim()

    /** Call Gemini 2 (flash model is fast; swap if you prefer pro) */
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    const cleanedText = text
      .replace(/^```markdown\s*/, '') // Remove opening block
      .replace(/```$/, '')


      
    console.log(text)
    // /** Persist to MongoDB */
    const saved = await Readme.create({
      description,
      style,
      content: text,
    })
    res.status(201).json({ id: saved._id, content: cleanedText })
    return
  } catch (err) {
    console.error(err)
    next(err) // bubble to your global error handler
  }
}

router.get('/', hello)
router.post('/create', createReadme)

export default router
