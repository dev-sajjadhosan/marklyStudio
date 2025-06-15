import { saveAs } from 'file-saver' // For exporting
import { useCallback } from 'react'
import useContexts from './useContexts'
import { enqueueSnackbar } from 'notistack'

export default function useHeaderActions() {
  const {
    editorValue,
    setMarkdownText,
    markdownText,
    pushHistory,

    setExample,
  } = useContexts()

  const handleOpen = useCallback(() => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.md,.txt'
    input.onchange = async (e) => {
      const inputElement = e?.target as HTMLInputElement
      const file = inputElement?.files?.[0]
      if (file) {
        const text = await file.text()
        pushHistory(editorValue) // backup current
        setMarkdownText(text)
      }
    }
    setMarkdownText('')
    input.click()
  }, [editorValue, pushHistory, setMarkdownText])

  const handleSave = useCallback(() => {
    localStorage.setItem(
      import.meta.env.VITE_CODE_SAVE_NAME,
      JSON.stringify(markdownText),
    )
    enqueueSnackbar('File Saved! ✔️', {
      variant: 'success',
      anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
    })
  }, [markdownText])

  const handleReset = useCallback(() => {
    setMarkdownText('')
    setExample([])
  }, [setMarkdownText, setExample])

  const handleExport = useCallback(() => {
    const blob = new Blob([markdownText], {
      type: 'text/markdown;charset=utf-8',
    })
    saveAs(blob, 'readme.md')
  }, [markdownText])

  const handleFeedback = useCallback(() => {
    // openModal(true)
  }, [])

  return {
    handleOpen,
    handleReset,
    handleSave,
    handleExport,
    handleFeedback,
  }
}
