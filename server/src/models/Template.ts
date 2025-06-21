import { Document, model, Schema } from 'mongoose'

export interface TemplateP extends Document {
  picture: string
  name: string
  description: string
  createTime: string
  createDate: string
  syntax: string
  likes: string[]
  comments: string[]
}

const templateSchema = new Schema<TemplateP>(
  {
    picture: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    createTime: { type: String, required: true },
    createDate: { type: String, required: true },
    syntax: { type: String, required: true },
    likes: [{ type: String }],
    comments: [{ type: String }],
  },
  { timestamps: true },
)

export default model<TemplateP>('Template', templateSchema)
