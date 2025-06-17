import { TbTransitionLeft } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

const BackBtn = ({ title }: { title?: string }) => {
  const nav = useNavigate()

  return (
    <>
      <div className="flex items-center gap-1.5">
        <button
          className="btn btn-sm btn-soft btn-error"
          onClick={() => nav(-1)}
        >
          <TbTransitionLeft size={15} />
          Back
        </button>
        <h2 className="text-2xl font-light self-center">{title}</h2>
      </div>
    </>
  )
}

export default BackBtn
