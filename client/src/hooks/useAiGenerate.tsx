import { useState, type Dispatch, type SetStateAction } from 'react'
import useAxios from './useAxios'

interface AiProps {
  context: string
  setContext: Dispatch<SetStateAction<string>>
  loading: boolean
  message: {
    message: string
    variant: 'error' | 'success'
  }
  generateCode: (params: { text: string; readmeStyle: string }) => Promise<void>
}

const useAiGenerate = (): AiProps => {
  const [context, setContext] = useState('')
  const [message, setMessage] = useState<{
    message: string
    variant: 'error' | 'success'
  }>({
    message: '',
    variant: 'success',
  })
  const [loading, setLoading] = useState(false)
  const axios = useAxios()

  const generateCode = async ({
    text,
    readmeStyle,
  }: {
    text: string
    readmeStyle: string
  }) => {
    setLoading(true)
    try {
      const sData = { description: text, style: readmeStyle }
      const data = await axios.post('/readme/create', sData)
      const content = data?.data?.content
      localStorage.setItem(import.meta.env.VITE_CODE_SAVE_NAME, content)
      localStorage.setItem(import.meta.env.VITE_AI_SAVE_NAME, content)
      setContext(content)
      setMessage({
        message: 'README generated successfully!',
        variant: 'success',
      })
    } catch (err) {
      console.error(err)
      setMessage({ message: 'Something went wrong!', variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return { context, loading, message, generateCode, setContext }
}

export default useAiGenerate
