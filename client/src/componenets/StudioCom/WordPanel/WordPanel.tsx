import { useEffect, useState } from 'react'
import useContexts from '../../../hooks/useContexts'

const WordPanel = () => {
  const { panel, markdownText } = useContexts()
  const [wordCount, setWordCount] = useState(0)
  const [lineCount, setLineCount] = useState(0)
  const [byteSize, setByteSize] = useState(0)

  // 🔁 Update stats on markdown change
  useEffect(() => {
    const lines = markdownText.split('\n')
    const words = markdownText.trim().split(/\s+/).filter(Boolean)
    const bytes = new Blob([markdownText]).size

    setLineCount(lines.length)
    setWordCount(words.length)
    setByteSize(bytes)
  }, [markdownText])


  return (
    <div
      className={`card bg-base-200 rounded-xl p-7 w-sm transition-all duration-300 z-50 ${
        panel
          ? 'fixed bottom-5 right-5 opacity-100'
          : 'fixed -bottom-1/2 right-5 opacity-20'
      }`}
    >
      <ul className="flex flex-col gap-1.5">
        {/* <li className="flex items-center justify-between text-sm">
          <p className="text-gray-500 font-bold">Current:</p>
          <span className="font-light text-info">
            {cursor.line.toString().padStart(2, '0')} Ln /{' '}
            {cursor.col.toString().padStart(2, '0')} Col
          </span>
        </li> */}
        <li className="flex items-center justify-between text-sm">
          <p className="text-gray-500 font-bold">Markdown:</p>
          <span className="font-light text-accent">{byteSize} bytes</span>
        </li>
        <li className="flex items-center justify-between text-sm">
          <p className="text-gray-500 font-bold">Words:</p>
          <span className="font-light text-primary">{wordCount} w</span>
        </li>
        <li className="flex items-center justify-between text-sm">
          <p className="text-gray-500 font-bold">Lines:</p>
          <span className="font-light text-primary">{lineCount} l</span>
        </li>
      </ul>
    </div>
  )
}

export default WordPanel
