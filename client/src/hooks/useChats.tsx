import { useState } from 'react'
import useAxios from './useAxios'

export type DataP = {
  userID?: string
  chatID?: string
  userImage?: string
  question?: string
  answer?: string
  userCreateTime?: string
  userCreateDate?: string
  chatCreateDate?: string
  chatCreateTime?: string
}

interface ChatsP {
  chats: DataP[]
  loading: boolean
  sendMessage: (payload: DataP) => Promise<void>
  setChats: React.Dispatch<React.SetStateAction<DataP[]>>
}

const useChats = (): ChatsP => {
  const axios = useAxios()
  const [chats, setChats] = useState<DataP[]>([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async (payload: DataP) => {
    if (!payload.question?.trim()) return // ⛔ guard clause

    try {
      setLoading(true)
      const { data } = await axios.post('/chat/question', payload)
      setChats((prev) => [...prev, data])
    } catch (err) {
      console.error('Chat Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return { chats, loading, sendMessage, setChats }
}

export default useChats
