import { markdown } from '@codemirror/lang-markdown'
import { oneDark } from '@codemirror/theme-one-dark'
import CodeMirror from '@uiw/react-codemirror'
import { EditorView } from '@codemirror/view'
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
import { useCallback, useEffect, useMemo } from 'react'

const StudioEditor = () => {
  const {
    setRight,
    right,
    header,
    preview,
    split,
    markdownText,
    setMarkdownText,
    setIsEditing,
    isEditing,
  } = useContexts()

  useEffect(() => {
    if (isEditing) {
      localStorage.setItem('visit', JSON.stringify(true))
    }
  }, [isEditing])

  useEffect(() => {
    const saved = localStorage.getItem(import.meta.env.VITE_CODE_SAVE_NAME)
    const markly = saved ? JSON.parse(saved) : ''
    setMarkdownText(markly)
  }, [])

  /* ① memoise things that otherwise change reference every render */
  const editorExtensions = useMemo(
    () => [markdown(), EditorView.lineWrapping],
    [],
  )

  /* ② stable basicSetup options (optional tweaks) */
  const basicSetupOptions = useMemo(
    () => ({
      lineNumbers: true,
      foldGutter: false,
      highlightActiveLine: true,
      highlightSelectionMatches: true,
      searchKeymap: true, // this gets baked into keymap extension
    }),
    [],
  )

  /* ③ Use the wrapper’s onChange */
  const handleChange = useCallback((val /* string */) => {
    setMarkdownText(val)
  }, [])

  return (
    <>
      {/* fixed‑chrome stuff */}
      <StudioHeader />
      <StudioSideBar />
      <ActionDock />
      <WordPanel />
      <TagsBar />
      <TemplatesBar />
      <AIChat />
      <StudioSetting />

      {/* editor / preview workspace */}
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
          {/* 🔥 CodeMirror editor */}
          <div
            className={`h-full overflow-x-scroll ${
              split ? 'w-1/2' : preview ? 'w-0 hidden' : 'w-full'
            } transition-all duration-200 ${header ? 'pt-9' : 'p-0'}`}
          >
            <CodeMirror
              // value={markdownText}
              defaultValue={markdownText}
              height="100%"
              style={{ height: '100%', textWrap: 'wrap' }}
              theme={oneDark}
              // extensions={[markdown(), EditorView.lineWrapping]}
              extensions={editorExtensions}
              basicSetup={basicSetupOptions}
              onChange={handleChange}
              onFocus={() => setIsEditing(true)}
              onBlur={() => setIsEditing(false)}
              // Prevent cursor jump by only updating value when not editing
            />
          </div>

          {/* 🔍 GitHub‑style preview */}
          <div
            className={` h-full overflow-x-scroll ${
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
