import useAuth from '../../../hooks/useAuth'

const TemplatesBar = () => {
  const { template, setTemplate} = useAuth()
  return (
    <>
      <div
        className={`w-4xl h-[90vh] bg-base-200 p-5 transition-all duration-350 z-50 rounded-2xl ${
          template
            ? 'fixed right-5 top-1/2 -translate-y-1/2 opacity-100'
            : 'fixed -right-3/4 top-1/2 -translate-y-1/2 opacity-20'
        }`}
      >
        <ul className="flex justify-center items-center">
          <p className="text-4xl text-gray-500" onClick={() => setTemplate(!template)}>
            Templates Panel
          </p>
        </ul>
      </div>
    </>
  )
}

export default TemplatesBar
