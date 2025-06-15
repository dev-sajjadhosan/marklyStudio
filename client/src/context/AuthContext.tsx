import { createContext } from 'react'
import type { AuthContextType } from '../../types/editor.types'

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)
