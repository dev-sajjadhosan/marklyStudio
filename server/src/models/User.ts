import { Schema, model, Document } from 'mongoose'

export interface IUser extends Document {
  image: string
  name: string
  username: string
  email: string
  createTime: string
  createDate: string
  templates: string[]
  acceptRequest: string[]
  createRequest: string[]
}

const userSchema = new Schema<IUser>(
  {
    image: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    username: { type: String },
    email: { type: String, required: true, unique: true },
    createTime: { type: String },
    createDate: { type: String },
    templates: [{ type: String }],
    acceptRequest: [{ type: String }],
    createRequest: [{ type: String }],
  },
  { timestamps: true },
)

export default model<IUser>('User', userSchema)
