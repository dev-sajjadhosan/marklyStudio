import { useState } from 'react'
import {
  TbBrandGithub,
  TbCancel,
  TbEditCircle,
  TbFile,
  TbFileImport,
} from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useHeaderActions from '../../../hooks/useHeaderActions'
import useContexts from '../../../hooks/useContexts'
import { enqueueSnackbar } from 'notistack'

const StudioHome = () => {
  const nav = useNavigate()
  const { handleOpen } = useHeaderActions()
  const { markdownText, setMarkdownText, setIsEditing } = useContexts()
  const [c, setC] = useState(false) // create input toggle
  const [filename, setFilename] = useState('readME.md')

  const handleImport = () => {
    handleOpen()
    if (markdownText) {
      nav('/studio/editor')
    }
  }
  const handleGoToEditor = () => {
    if (!filename.trim()) {
      enqueueSnackbar('Please enter a file name.', { variant: 'error' })
      return
    }
    // Reset editor with blank content or default content
    const defaultContent = `# ${filename}\n\nStart editing here...`

    setMarkdownText(defaultContent)
    setIsEditing(true) // toggle to show editor UI (if you have conditional rendering)
    nav('/studio/editor')
    enqueueSnackbar('Edit. Style. Export. Repeat. 🔁', { variant: 'success' })
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {!c ? (
          <div className="card text-center rounded-2xl p-17 bg-base-200">
            <h1 className="text-6xl text-gray-500">Markly</h1>
            <p className="text-lg mt-3.5">
              Welcome to Markly <span className="text-warning">Studio App</span>
              .
            </p>
            <div className="mt-5 flex items-center gap-1.5">
              <button
                className="btn btn-sm btn-soft btn-warning"
                onClick={() => setC(true)}
              >
                <TbFile size={17} />
                Create New File
              </button>
              <button
                className="btn btn-sm btn-soft btn-accent"
                onClick={handleImport}
              >
                <TbFileImport size={17} />
                Import File
              </button>
              <button className="btn btn-sm btn-soft btn-primary" disabled>
                <TbBrandGithub size={17} />
                From Github
              </button>
              <button onClick={() => enqueueSnackbar('That was easy!')}>
                Show snackbar
              </button>
            </div>
          </div>
        ) : (
          <div className="card rounded-2xl p-17 bg-base-200 w-lg">
            <form className="flex flex-col w-full">
              <label htmlFor="" className="text-gray-500">
                Write your file name
                <input
                  type="text"
                  placeholder="readme.md"
                  className="input text-white w-full mt-1.5"
                  value={filename}
                  onChange={(e) => setFilename(e.target.value)}
                />
              </label>
              <div className="mt-2.5 flex items-center gap-1.5 self-end">
                <button
                  type="button"
                  className="btn btn-sm btn-soft btn-error px-5"
                  onClick={() => setC(false)}
                >
                  <TbCancel size={17} />
                  Quit
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-soft btn-warning px-5 "
                  onClick={handleGoToEditor}
                >
                  <TbEditCircle size={17} />
                  Go to Editor
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  )
}

export default StudioHome
