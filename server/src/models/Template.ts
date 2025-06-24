import { Document, model, Schema } from 'mongoose'

export interface TemplateP extends Document {
  picture: object // Can be a URL or base64 image string
  title: string
  name: string
  username: string
  category: string
  description: string
  createTime: string
  createDate: string
  file: object
  likes: string[] // userIds or usernames
  comments: string[] // comment IDs or raw strings depending on your setup
}

const templateSchema = new Schema<TemplateP>(
  {
    picture: { type: Object },
    name: { type: String },
    username: { type: String },
    title: { type: String },
    category: { type: String },
    description: { type: String },
    createTime: { type: String },
    createDate: { type: String },
    file: { type: Object },
    likes: [{ type: String }],
    comments: [{ type: String }],
  },
  { timestamps: true },
)

export default model<TemplateP>('Template', templateSchema)
