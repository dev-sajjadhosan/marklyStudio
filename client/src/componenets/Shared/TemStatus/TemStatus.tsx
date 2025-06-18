import { useState } from 'react'
import { TbFlame, TbSparkles, TbTrendingUp } from 'react-icons/tb'

const TemStatus = ({ className }: { className?: string }) => {
  const [temFeature, seTemFeature] = useState('hot')

  return (
    <>
      <div className={`join ${className}`}>
        <button
          className={`btn btn-sm join-item px-5 ${
            temFeature === 'hot' ? 'btn-error' : 'btn-soft btn-error'
          }`}
          onClick={() => seTemFeature('hot')}
        >
          <TbFlame size={13} /> Hot
        </button>
        <button
          className={`btn btn-sm join-item px-5 ${
            temFeature === 'new' ? 'btn-success' : 'btn-soft btn-success'
          }`}
          onClick={() => seTemFeature('new')}
        >
          <TbSparkles size={13} /> New
        </button>
        <button
          className={`btn btn-sm join-item px-5 ${
            temFeature === 'popular' ? 'btn-primary' : 'btn-soft btn-primary'
          }`}
          onClick={() => seTemFeature('popular')}
        >
          <TbTrendingUp size={13} /> Popular
        </button>
      </div>
    </>
  )
}

export default TemStatus
