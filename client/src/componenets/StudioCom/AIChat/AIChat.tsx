import { enqueueSnackbar } from 'notistack'
import useAiGenerate from '../../../hooks/useAiGenerate'
import useContexts from '../../../hooks/useContexts'
import type React from 'react'
import { TbClick } from 'react-icons/tb'
import { useEffect } from 'react'

const AIChat = () => {
  const { ai, setMarkdownText } = useContexts()
  const { context, loading, generateCode, message } = useAiGenerate()

  useEffect(() => {
    setMarkdownText(context)
  }, [context, setMarkdownText])

  const handleAsk = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const ask = form.elements.namedItem('ask') as HTMLInputElement
    const readmeStyle = (
      form.elements.namedItem('readmeStyle') as HTMLInputElement
    )?.value

    if (ask?.value === '')
      return enqueueSnackbar('Write something to ask  Mark ?', {
        variant: 'warning',
      })
    await generateCode({ text: ask?.value, readmeStyle })
    setMarkdownText('')
    ask.value = ''
    if (message.message) {
      enqueueSnackbar(message.message, { variant: message.variant })
    }
  }

  return (
    <>
      <div
        className={`w-lg bg-base-200 rounded-2xl p-7 z-50 transition-all duration-300 ${
          ai
            ? 'fixed bottom-5 right-0 -translate-x-11 opacity-100'
            : 'fixed -bottom-1/2 right-0 -translate-x-11 opacity-20'
        }`}
      >
        <p className="text-md font-light mb-1.5">Ask mark what you want</p>
        <form className="flex flex-col gap-2.5 p-3" onSubmit={handleAsk}>
          <textarea
            disabled={loading}
            className="textarea w-full"
            placeholder="Ask Mark Ai ?"
            name="ask"
          />
          <div className="join items-center mt-2.5 justify-end">
            <select
              name="readmeStyle"
              className="select w-36 select-sm join-item transition-all duration-200"
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
              className="btn btn-sm btn-soft btn-warning px-5 join-item"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  Please Wait
                  <span className="loading loading-xs loading-ring" />
                </>
              ) : (
                <>
                  Ask Mark <TbClick size={17} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AIChat
