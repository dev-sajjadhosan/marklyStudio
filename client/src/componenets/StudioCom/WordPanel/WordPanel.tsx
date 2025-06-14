import useAuth from '../../../hooks/useAuth'

const WordPanel = () => {
  const { panel, setPanel } = useAuth()
  return (
    <>
      <div
        className={` card bg-base-200 rounded-xl p-7 w-sm transition-all duration-300 z-50 ${
          panel
            ? 'fixed bottom-5 right-5 opacity-100'
            : 'fixed -bottom-1/2 right-5 opacity-20'
        }`}
      >
        <ul className="flex flex-col gap-1.5">
          <li className="flex items-center justify-between text-sm">
            <p className="text-gray-500 font-bold">Current:</p>
            <span className="font-light text-info">12 Ln / 03 Col</span>
          </li>
          <li className="flex items-center justify-between text-sm">
            <p className="text-gray-500 font-bold">Markdown:</p>
            <span className="font-light text-accent">1275 bytes</span>
          </li>
          <li className="flex items-center justify-between text-sm">
            <p className="text-gray-500 font-bold">Words:</p>
            <span className="font-light text-primary">1275 w</span>
          </li>
          <li className="flex items-center justify-between text-sm">
            <p className="text-gray-500 font-bold">Lines:</p>
            <span className="font-light text-primary">1275 l</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default WordPanel
