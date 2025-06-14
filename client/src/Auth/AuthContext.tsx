import { createContext, type Dispatch, type SetStateAction } from 'react'

interface AuthContextType {
  all: boolean
  setAll: Dispatch<SetStateAction<boolean>>
  tag: boolean
  setTag: Dispatch<SetStateAction<boolean>>
  bottom: boolean
  setBottom: Dispatch<SetStateAction<boolean>>
  header: boolean
  setHeader: Dispatch<SetStateAction<boolean>>
  right: boolean
  setRight: Dispatch<SetStateAction<boolean>>
  footer: boolean
  setFooter: Dispatch<SetStateAction<boolean>>
  panel: boolean
  setPanel: Dispatch<SetStateAction<boolean>>
  handleAllBars: () => void
  preview: boolean
  setPreview: Dispatch<SetStateAction<boolean>>
  split: boolean
  setSplit: Dispatch<SetStateAction<boolean>>
  mobile: boolean
  setMobile: Dispatch<SetStateAction<boolean>>
  template: boolean
  setTemplate: Dispatch<SetStateAction<boolean>>
  ai: boolean
  setAi: Dispatch<SetStateAction<boolean>>
  theme: boolean
  setTheme: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextType | null>(null)
