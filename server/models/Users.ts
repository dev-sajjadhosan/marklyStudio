import { Schema, model, Document } from 'mongoose'

export interface User extends Document {
  name: String
  username: String
  email: String
  image: String
  projects: String
  totalProject: String
  createdDate: String
  createdTime: String
  logoutDate: String
  logoutTime: String
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, required: true, unique: true },
  projects: { type: [] },
  totalProject: { type: Number },
  createdDate: { type: String, default: '' },
  createdTime: { type: String, default: '' },
  logoutDate: { type: String, default: '' },
  logoutTime: { type: String, default: '' },
})

export default model<User>('User', userSchema)
