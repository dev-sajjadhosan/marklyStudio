import useContexts from '../../../hooks/useContexts'

const AIChat = () => {
  const { ai } = useContexts()
  return (
    <>
      <div
        className={`w-md bg-base-200 rounded-xl p-13 z-50 transition-all duration-300 ${
          ai
            ? 'fixed bottom-5 right-0 -translate-x-11 opacity-100'
            : 'fixed -bottom-1/2 right-0 -translate-x-11 opacity-20'
        }`}
      >
        <p className="text-4xl text-gray-500">Ai Chat Container</p>
      </div>
    </>
  )
}

export default AIChat
