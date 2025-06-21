import { model, Schema, Document } from 'mongoose'

export interface AiChatP extends Document {
  userID?: string
  chatID?: string
  userImage?: string
  chatImage?: string
  question?: string
  answer?: string
  userCreateTime?: string
  userCreateDate?: string
  chatCreateTime?: string
  chatCreateDate?: string
}

const AiChatSchema = new Schema<AiChatP>(
  {
    userID: { type: String },
    userImage: { type: String },
    chatImage: { type: String },
    question: { type: String },
    answer: { type: String },
    userCreateTime: { type: String },
    userCreateDate: { type: String },
    chatCreateDate: { type: String },
    chatCreateTime: { type: String },
  },
  { timestamps: true },
)

export default model<AiChatP>('Chats', AiChatSchema)
