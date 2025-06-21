import { useEffect } from 'react'
import Editor, { type OnMount } from '@monaco-editor/react'
import MarkdownPreview from '@uiw/react-markdown-preview'
import { TbBoxAlignRight } from 'react-icons/tb'
import Split from 'react-split'

// Internal hooks & components
import useContexts from '../../../hooks/useContexts'
import ActionDock from '../ActionDock/ActionDock'
import AIChat from '../AIChat/AIChat'
import StudioHeader from '../StudioHeader/StudioHeader'
import StudioSideBar from '../StudioSideBar/StudioSideBar'
import TagsBar from '../TagsBar/TagsBar'
import TemplatesBar from '../TemplatesBar/TemplatesBar'
import WordPanel from '../WordPanel/WordPanel'
import StudioSetting from '../StudioSetting/StudioSetting'

const StudioEditor = () => {
  const {
    setRight,
    right,
    header,
    preview,
    split,
    markdownText,
    setMarkdownText,
    isEditing,
    editorRef,
    monacoRef,
  } = useContexts()

  useEffect(() => {
    if (isEditing) localStorage.setItem('visit', JSON.stringify(true))
  }, [isEditing])

  useEffect(() => {
    const saved = localStorage.getItem(import.meta.env.VITE_CODE_SAVE_NAME)
    setMarkdownText(saved ?? '')
  }, [setMarkdownText])

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor
    monacoRef.current = monaco
  }

  const handleEditorChange = (value = '') => {
    setMarkdownText(value)
  }

  return (
    <>
      <StudioHeader />
      <StudioSideBar />
      <ActionDock />
      <WordPanel />
      <TagsBar />
      <TemplatesBar />
      <AIChat />
      <StudioSetting />

      {/* ─── workspace (editor + preview) ───────────────────────────────────────── */}
      <div className="relative flex justify-center items-center h-screen">
        {!right && (
          <button
            className="absolute bottom-5 right-5 btn btn-sm btn-soft tooltip z-50"
            data-tip="Sidebar"
            onClick={() => setRight(!right)}
          >
            <TbBoxAlignRight size={17} />
          </button>
        )}

        <Split
          className="flex h-full w-full pb-5"
          sizes={split ? [55, 45] : preview ? [0, 100] : [100, 0]}
          minSize={7}
          gutterSize={8}
        >
          {/* ─── CodeMirror editor ──────────────────────────────────────────────── */}
          <div
            className={`h-full overflow-x-scroll ${
              split ? 'w-1/2' : preview ? 'w-0 hidden' : 'w-full'
            } transition-all duration-200 ${header ? 'pt-9' : 'p-0'}`}
          >
            <Editor
              height="100%"
              defaultLanguage="markdown"
              defaultValue={markdownText}
              theme="vs-dark"
              onMount={handleEditorDidMount}
              onChange={handleEditorChange}
              options={{
                wordWrap: 'on', // ✅ Line wrap
                minimap: { enabled: false }, // 🚫 Hide minimap
                fontSize: 13,
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </div>

          {/* ─── Markdown preview ──────────────────────────────────────────────── */}
          <div
            className={`h-full overflow-x-scroll ${
              split
                ? 'w-1/2 overflow-y-auto bg-base-100 text-base-content'
                : preview
                ? 'w-full overflow-y-auto bg-base-200 text-base-content'
                : 'w-0 hidden'
            } transition-all duration-200 ${header ? 'py-9' : 'p-0'}`}
          >
            <MarkdownPreview
              source={markdownText}
              className="prose dark:prose-invert max-w-none h-full"
              style={{
                backgroundColor: 'transparent',
                height: '100%',
                padding: '1rem',
                paddingBottom: '2rem',
              }}
            />
          </div>
        </Split>
      </div>
    </>
  )
}

export default StudioEditor
