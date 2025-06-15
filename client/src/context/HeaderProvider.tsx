import type { HeaderProviderProps } from '../../types/editor.types'
import { useState, useCallback, useMemo } from 'react'
import { HeaderContext } from './HeaderContext'
import useContexts from '../hooks/useContexts'

export function HeaderProvider({ children }: HeaderProviderProps) {
  const { setMarkdownText, markdownText } = useContexts()
  const [editorValue, setEditorValue] = useState<string>(markdownText)
  const [history, setHistory] = useState<string[]>([]) // past values
  const [future, setFuture] = useState<string[]>([]) // values you can redo to
  const [openModal, setOpenModal] = useState<boolean>(false) // values you can redo to

  const pushHistory = useCallback((value: string) => {
    setHistory((prev) => [...prev, value])
    setFuture([]) // any new change clears the redo stack
  }, [])

  const undo = useCallback(() => {
    setHistory((prev) => {
      if (prev.length === 0) return prev
      const last = prev[prev.length - 1]
      setFuture((f) => [editorValue, ...f])
      setEditorValue(last)
      setMarkdownText(last)
      return prev.slice(0, -1)
    })
  }, [editorValue, setMarkdownText])

  const redo = useCallback(() => {
    setFuture((f) => {
      if (f.length === 0) return f
      const next = f[0]
      setHistory((prev) => [...prev, editorValue])
      setEditorValue(next)
      setMarkdownText(next)
      return f.slice(1)
    })
  }, [editorValue, setMarkdownText])

  const clearHistory = useCallback(() => {
    setHistory([])
    setFuture([])
  }, [])

  // const connectGitHub = useCallback(() => {
  //   // 👉 TODO: implement OAuth flow
  //   console.log('[GitHub] connect called')
  // }, [])

  // const saveToGitHub = useCallback((content) => {
  //   // 👉 TODO: push content to repo via GitHub API
  //   console.log('[GitHub] save called', content.slice(0, 50) + '…')
  // }, [])

  const exportMarkdown = useCallback(() => {
    if (!editorValue) return
    const blob = new Blob([editorValue], {
      type: 'text/markdown;charset=utf-8',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'readme.md'
    a.click()
    URL.revokeObjectURL(url)
  }, [editorValue])

  const headerValues = useMemo(
    () => ({
      // state
      editorValue,
      history,
      future,
      openModal,
      setEditorValue,
      setOpenModal,
      // functions
      undo,
      redo,
      pushHistory,
      clearHistory,
      exportMarkdown,
    }),
    [
      editorValue,
      history,
      future,
      openModal,
      setOpenModal,
      setEditorValue,

      undo,
      redo,
      pushHistory,
      clearHistory,
      exportMarkdown,
    ],
  )

  return (
    <HeaderContext.Provider value={headerValues}>
      {children}
    </HeaderContext.Provider>
  )
}
