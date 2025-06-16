import { Typewriter } from 'react-simple-typewriter'
import { enqueueSnackbar } from 'notistack'
import { useEffect, useRef, useState } from 'react'
import { TbClick, TbCopy, TbCopyCheck } from 'react-icons/tb'
import useAxios from '../../hooks/useAxios'
import useContexts from '../../hooks/useContexts'
import { SiReasonstudios } from 'react-icons/si'
import { Link, useNavigate } from 'react-router-dom'

const AiGenerate = () => {
  const axios = useAxios()
  const nav = useNavigate()
  const { setMarkdownText } = useContexts()

  const [readme, setReadme] = useState('')
  const [loading, setLoading] = useState(false)
  const [cp, setCP] = useState(false)
  const textRef = useRef<HTMLTextAreaElement>(null)
  // Restore saved readme if returning from Studio
  useEffect(() => {
    const saved = localStorage.getItem(import.meta.env.VITE_AI_SAVE_NAME)
    if (saved) {
      setReadme(saved)
    }
  }, [])

  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const context = (form.elements.namedItem('content') as HTMLInputElement)
      ?.value
    const readmeStyle = (
      form.elements.namedItem('readmeStyle') as HTMLInputElement
    )?.value

    if (context === '')
      return enqueueSnackbar('Write something to Generate code ??', { variant: 'warning' })

    setLoading(true)
    try {
      const sData = { description: context, style: readmeStyle }
      const data = await axios.post('/readme/create', sData)
      const content = data?.data?.content
      setReadme(content)
      localStorage.setItem(import.meta.env.VITE_CODE_SAVE_NAME, content)
      localStorage.setItem(import.meta.env.VITE_AI_SAVE_NAME, content)
      setMarkdownText(content)
      enqueueSnackbar('README generated successfully!', { variant: 'success' })
    } catch (err) {
      console.error(err)
      enqueueSnackbar('Something went wrong!', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    if (!readme) return
    setCP(true)
    window.navigator.clipboard
      .writeText(readme)
      .then(() => {
        enqueueSnackbar('Copied!', { variant: 'success' })
      })
      .catch(() => {
        enqueueSnackbar('Failed to copy!', { variant: 'error' })
      })
    setTimeout(() => {
      setCP(false)
    }, 1300)
  }

  const handleGoEditor = () => {
    setMarkdownText(readme)
    nav('/studio/editor')
  }

  const handleNew = () => {
    setReadme('')
    localStorage.removeItem(import.meta.env.VITE_AI_SAVE_NAME)
  }

  return (
    <>
      {readme === '' ? (
        <div className="flex justify-center items-center h-screen w-full">
          <div className="card text-center items-center">
            <h1 className="text-7xl text-gray-500 dancing">AI Generated</h1>
            <p className="text-sm font-light text-gray-400">
              Drop your awesome description and watch the magic happen!
            </p>

            <div className="mt-5">
              <form
                className="flex flex-col items-end gap-3"
                onSubmit={handleGenerate}
              >
                <textarea
                  ref={textRef}
                  className="textarea w-64 md:w-2xl transition-all duration-200"
                  name="content"
                  rows={5}
                  placeholder="Write , Click , Magic"
                  // required
                />
                <div className="join items-center">
                  <select
                    name="readmeStyle"
                    className="select w-36 md:w-44 join-item transition-all duration-200"
                  >
                    <option value="auto" defaultChecked>
                      Auto Detect
                    </option>
                    <option value="basic">Basic</option>
                    <option value="professional">Professional</option>
                    <option value="opensource">Open Source</option>
                    <option value="cli">CLI Tool</option>
                  </select>
                  <button
                    className="btn btn-soft btn-warning px-5 join-item"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        Generating{' '}
                        <span className="loading loading-xs loading-ring" />
                      </>
                    ) : (
                      <>
                        Generate <TbClick size={17} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-9">
          <div className="flex justify-between items-center mb-4">
            <p className="link link-warning no-underline">
              Ai can make mistake.
            </p>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleNew}
                className="btn btn-sm btn-soft btn-primary px-3"
              >
                <TbClick size={17} />
                Generate new
              </button>
              <button
                onClick={handleGoEditor}
                className="btn btn-sm btn-soft btn-warning px-3"
              >
                <SiReasonstudios size={17} />
                Open to Studio
              </button>
              <button
                onClick={handleCopy}
                className="btn btn-sm btn-soft btn-info"
              >
                {cp ? (
                  <>
                    <TbCopyCheck size={17} />
                    Copied
                  </>
                ) : (
                  <>
                    <TbCopy size={17} />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="p-9 rounded-2xl w-5xl text-wrap mockup-code mx-auto whitespace-pre-wrap">
            <pre>
              <code className="text-wrap whitespace-pre-wrap">
                <Typewriter
                  words={[readme]}
                  typeSpeed={3}
                  cursor
                  cursorStyle="_"
                />
              </code>
            </pre>
          </div>
        </div>
      )}
    </>
  )
}

export default AiGenerate
