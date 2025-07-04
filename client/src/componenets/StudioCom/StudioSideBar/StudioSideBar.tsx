import {
  TbBoxAlignBottom,
  TbBoxAlignBottomFilled,
  TbBoxAlignBottomRight,
  TbBoxAlignBottomRightFilled,
  TbBoxAlignRight,
  TbBoxAlignRightFilled,
  TbBoxAlignTop,
  TbBoxAlignTopFilled,
  TbDeviceDesktop,
  TbDeviceDesktopFilled,
  TbInputSpark,
  TbTags,
  TbTagsFilled,
  TbTransitionRight,
} from 'react-icons/tb'
import useContexts from '../../../hooks/useContexts'
import { Link } from 'react-router-dom'

const StudioSideBar = () => {
  const {
    tag,
    bottom,
    header,
    right,
    panel,
    ai,
    setAi,
    setTag,
    setBottom,
    setHeader,
    setRight,
    setPanel,
    handleAllBars,
    all,
    setAll,
  } = useContexts()
  return (
    <>
      <div
        className={` z-50 transition-all duration-300 ${
          right
            ? 'fixed right-5 top-1/3 -translate-y-1/2 opacity-100'
            : 'fixed -right-1/2 top-1/3 -translate-y-1/2 opacity-20'
        }`}
      >
        <ul className="flex flex-col items-center gap-1.5">
          <li>
            <button
              className="btn btn-sm btn-soft btn-warning tooltip tooltip-left"
              data-tip="Zen Mode"
              onClick={() => {
                handleAllBars()
                setAll(!all)
              }}
            >
              {all ? (
                <TbDeviceDesktopFilled size={17} />
              ) : (
                <TbDeviceDesktop size={17} />
              )}
            </button>
          </li>
          <li>
            <button
              className="btn btn-sm btn-soft btn-warning tooltip tooltip-left"
              data-tip="Tags"
              onClick={() => setTag(!tag)}
            >
              {tag ? <TbTagsFilled size={17} /> : <TbTags size={17} />}
            </button>
          </li>

          <li>
            <button
              className="btn btn-sm btn-soft btn-warning tooltip tooltip-left"
              data-tip="Head bar"
              onClick={() => setHeader(!header)}
            >
              {header ? (
                <TbBoxAlignTopFilled size={17} />
              ) : (
                <TbBoxAlignTop size={17} />
              )}
            </button>
          </li>
          <li>
            <button
              className="btn btn-sm btn-soft btn-warning tooltip tooltip-left"
              data-tip="Action Bar"
              onClick={() => setBottom(!bottom)}
            >
              {bottom ? (
                <TbBoxAlignBottomFilled size={17} />
              ) : (
                <TbBoxAlignBottom size={17} />
              )}
            </button>
          </li>
          <li>
            <button
              className="btn btn-sm btn-soft btn-warning tooltip tooltip-left"
              data-tip="Sidebar"
              onClick={() => setRight(!right)}
            >
              {right ? (
                <TbBoxAlignRightFilled size={17} />
              ) : (
                <TbBoxAlignRight size={17} />
              )}
            </button>
          </li>
          <li>
            <button
              className="btn btn-sm btn-soft btn-warning tooltip tooltip-left"
              data-tip="Word Panel"
              onClick={() => setPanel(!panel)}
            >
              {panel ? (
                <TbBoxAlignBottomRightFilled size={17} />
              ) : (
                <TbBoxAlignBottomRight size={17} />
              )}
            </button>
          </li>
          <li>
            <button
              className={`btn btn-sm  tooltip ${
                ai ? 'btn-accent' : 'btn-soft btn-accent'
              }`}
              data-tip="ai"
              onClick={() => setAi(!ai)}
            >
              <TbInputSpark size={17} />
            </button>
          </li>
          <li>
            <Link
              className={`btn btn-sm  tooltip ${
                ai ? 'btn-primary' : 'btn-soft btn-primary'
              }`}
              data-tip="Home"
              to="/"
            >
              <TbTransitionRight size={17} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default StudioSideBar
