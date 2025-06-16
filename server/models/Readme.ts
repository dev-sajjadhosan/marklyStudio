import { Schema, model, Document } from 'mongoose'

export interface IReadme extends Document {
  description: string
  style: string
  content: string
  createdDate: string
  createdTime: string
}

const readmeSchema = new Schema<IReadme>(
  {
    description: { type: String, required: true },
    style: { type: String, default: 'auto' },
    content: { type: String, required: true },
    createdDate: { type: String, default: '' },
    createdTime: { type: String, default: '' },
  },
  { versionKey: false },
)

export default model<IReadme>('Readme', readmeSchema)
