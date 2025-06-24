import mongoose from 'mongoose'

export const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri)
    console.log('⚡️[database]: MongoDB connected', uri)
  } catch (err) {
    console.error('❌[database]: Failed to connect')
    console.error(err)
    process.exit(1)
  }
}
