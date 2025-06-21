import type { Dispatch, ReactNode, SetStateAction } from 'react'

export interface AuthContextType {
  all: boolean | string
  setAll: Dispatch<SetStateAction<boolean | string>>
  tag: boolean | string
  setTag: Dispatch<SetStateAction<boolean | string>>
  bottom: boolean | string
  setBottom: Dispatch<SetStateAction<boolean | string>>
  header: boolean | string
  setHeader: Dispatch<SetStateAction<boolean | string>>
  right: boolean | string
  setRight: Dispatch<SetStateAction<boolean | string>>
  footer: boolean | string
  setFooter: Dispatch<SetStateAction<boolean | string>>
  panel: boolean | string
  setPanel: Dispatch<SetStateAction<boolean | string>>
  handleAllBars: () => void
  preview: boolean | string
  setPreview: Dispatch<SetStateAction<boolean | string>>
  split: boolean | string
  setSplit: Dispatch<SetStateAction<boolean | string>>
  mobile: boolean | string
  setMobile: Dispatch<SetStateAction<boolean | string>>
  template: boolean | string
  setTemplate: Dispatch<SetStateAction<boolean | string>>
  ai: boolean
  setAi: Dispatch<SetStateAction<boolean>>
  theme: boolean
  setTheme: Dispatch<SetStateAction<boolean>>
  // studio editor
  markdownText: string
  setMarkdownText: Dispatch<SetStateAction<string>>
  setting: boolean
  setSetting: Dispatch<SetStateAction<boolean>>
  //
  editorRef: React.RefObject<
    import('monaco-editor').editor.IStandaloneCodeEditor
  >
  monacoRef: React.RefObject<typeof import('monaco-editor')>
  insertAtCursor: (text: string) => void

  line?: number
  setLine?: Dispatch<SetStateAction<number>>
  col?: number
  setCol?: Dispatch<SetStateAction<number>>
  example: string[]
  setExample: Dispatch<SetStateAction<string[]>>
  isEditing: boolean
  setIsEditing: Dispatch<SetStateAction<boolean>>
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
}

export interface HeaderProviderProps {
  children: ReactNode
}

export interface HeaderContextType {
  editorValue: string
  history: string[]
  future: string[]
  setEditorValue: Dispatch<SetStateAction<string>>
  pushHistory: (value: string) => void
  clearHistory: () => void
  exportMarkdown: () => void
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
}
// Define or import SectionType above this usage
export type SectionType = {
  id?: string
  name?: string
  title?: string
  children: {
    name: string
    example: string
  }[]
}

export interface ReadmeProps {
  project: SectionType[]
  documentation: SectionType[]
  other: SectionType[]
  app: SectionType[]
  profile: SectionType[]
}

export interface TagItem {
  name?: string
  title?: string
  example: string
}
