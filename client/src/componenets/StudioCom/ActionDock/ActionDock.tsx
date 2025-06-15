import { LuSquareSplitHorizontal } from 'react-icons/lu'
import {
  TbBulb,
  TbBulbFilled,
  TbCategory,
  TbCategoryFilled,
  TbDeviceMobile,
  TbDeviceMobileFilled,
  TbEye,
  TbEyeClosed,
  TbInputSpark,
} from 'react-icons/tb'
import useContexts from '../../../hooks/useContexts'

const ActionDock = () => {
  const { bottom } = useContexts()

  const {
    preview,
    setPreview,
    split,
    setSplit,
    mobile,
    setMobile,
    template,
    setTemplate,
    ai,
    setAi,
    theme,
    setTheme,
  } = useContexts()

  return (
    <>
      <div
        className={` bg-base-200 rounded-xl px-5 py-3.5 z-50 transition-all duration-300 ${
          bottom
            ? 'fixed bottom-5 left-0 translate-x-11 opacity-100'
            : 'fixed -bottom-1/2 left-0 translate-x-11 opacity-20'
        }`}
      >
        <ul className="flex items-center gap-1.5">
          <li>
            <button
              className="btn btn-xs btn-soft btn-warning tooltip"
              data-tip="Preview"
              onClick={() => setPreview(!preview)}
            >
              {preview ? <TbEye size={20} /> : <TbEyeClosed size={19} />}
            </button>
          </li>
          <li>
            <button
              className={`btn btn-xs  tooltip ${
                split ? 'btn-secondary' : 'btn-secondary btn-soft'
              }`}
              data-tip="Split View"
              onClick={() => setSplit(!split)}
            >
              <LuSquareSplitHorizontal size={19} />
            </button>
          </li>
          <li>
            <button
              className="btn btn-xs btn-soft btn-warning tooltip"
              data-tip="Mobile View"
              disabled
              onClick={() => setMobile(!mobile)}
            >
              {mobile ? (
                <TbDeviceMobileFilled size={19} />
              ) : (
                <TbDeviceMobile size={19} />
              )}
            </button>
          </li>
          <li>
            <button
              className="btn btn-xs btn-soft btn-warning tooltip"
              data-tip="Templates"
              onClick={() => setTemplate(!template)}
            >
              {template ? (
                <TbCategoryFilled size={17} />
              ) : (
                <TbCategory size={17} />
              )}
            </button>
          </li>
          <li>
            <button
              className={`btn btn-xs  tooltip ${
                ai ? 'btn-accent' : 'btn-soft btn-accent'
              }`}
              data-tip="ai"
              onClick={() => setAi(!ai)}
            >
              <TbInputSpark size={17} />
            </button>
          </li>
          <li>
            <button
              className={`btn btn-xs btn-soft btn-warning tooltip`}
              data-tip="Theme"
              disabled
              onClick={() => setTheme(!theme)}
            >
              {theme ? <TbBulb size={19} /> : <TbBulbFilled size={19} />}
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ActionDock
