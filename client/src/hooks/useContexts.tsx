import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { HeaderContext } from '../context/HeaderContext'

export default function useContexts() {
  const auth = useContext(AuthContext)
  const ctx = useContext(HeaderContext)
  if (!ctx) {
    throw new Error('useEditor must be used inside <EditorProvider>')
  }
  if (!auth) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return { ...auth, ...ctx }
}
