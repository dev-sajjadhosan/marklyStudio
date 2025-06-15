import type { HeaderContextType } from '../../types/editor.types'
import { createContext } from 'react'

export const HeaderContext = createContext<HeaderContextType>(
  {} as HeaderContextType,
)
