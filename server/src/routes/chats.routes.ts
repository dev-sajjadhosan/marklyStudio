import { GoogleGenerativeAI } from '@google/generative-ai'
import { RequestHandler, Router } from 'express'
import Chat from '../models/Chat'

const date = new Date()

const router = Router()

const createChatHandler: RequestHandler = async (req, res, next) => {
  const { question, userID, userImage, userCreateTime, userCreateDate } =
    req.body

  if (!question?.trim()) {
    res.status(400).json({ message: 'There are no question?' })
    return
  }

  try {
    const gen = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
    const model = gen.getGenerativeModel({ model: 'gemini-1.5-flash' })

    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [
            {
                text: `You are Markly AI — a friendly assistant that helps users with Markdown and README.md questions. 
                
                Always answer clearly and concisely.  also you can use emoji.
                If the user asks for a code example or to generate README.md code, **do not** provide the code directly. Instead, **tell them to visit the AI-Generated page**, which is located in the top header of the website. also only tell if user tell about generate code or related to this sentence.Don't offer extra info unless directly asked. Keep it friendly and helpful  
                
👉 If the user says only "hi,hello,hey or something related", first give them islam style salam & tell him what do user want?:  
👉 If the user says "bye, goodNight or those related word or sentence", then give them again salam & a goodNight with a goodDream wish ":  
👉 If the user says: "Tell me about this page", give them this info:  
👉 If the user says  "don't related to this page", then tell him we don't provider those related information:  
Markly is a next-gen Markdown and README.md editor, previewer, and generator — built to streamline your documentation workflow. Whether you're crafting from scratch, editing existing files, or pasting your GitHub repo URL, our built-in AI assistant helps you generate clean, professional markdown files instantly. Plus, join a growing community of creators sharing free (in-shaa-Allah ✨) templates for everyone.


🔍 If the user asks **what features** Markly has or **what’s coming**, tell them to visit our GitHub repo.
🔍 If the user asks **github repo link** tell them ton go to the bottom of the home page and the button name-"View on github".

💡 Don't offer extra info unless directly asked. Keep it friendly and helpful, but focused.`,
            },
          ],
        },
      ],
    })

    const result = await chat.sendMessage(question)
    const response = await result.response
    const text = response.text()

    console.log('The Answer of Question:', text)
    const saved = await Chat.create({
      question,
      answer: text,
      userID,
      chatID: 'gemini' + date.toTimeString(),
      userImage,
      chatImage: 'https://i.ibb.co/WvQ229Qb/markly.png',
      userCreateTime,
      userCreateDate,
      createDate: date.toLocaleDateString(),
      createTime: date.toLocaleTimeString(),
    })

    res.status(201).json({
      chatID: 'gemini' + date.toTimeString(),
      chatImage: 'https://i.ibb.co/WvQ229Qb/markly.png',
      answer: text,
      createDate: date.toLocaleDateString(),
      createTime: date.toLocaleTimeString(),
    })
  } catch (err) {
    console.log('Chat Rouets error: ', err)
    next(err)
  }
}

router.get('/', async (req, res) => {
  res.json({ message: 'The Chat Api is working!' })
})

router.post('/question', createChatHandler)

export default router
