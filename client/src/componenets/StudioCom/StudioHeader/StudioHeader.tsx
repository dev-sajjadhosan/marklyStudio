import { LuHistory, LuRedo2, LuUndo2 } from 'react-icons/lu'
import { PiCoffeeDuotone } from 'react-icons/pi'
import {
  TbBrandGithub,
  TbFileX,
  TbFolderOpen,
  TbPencilCheck,
  TbPencilUp,
  TbSettings,
} from 'react-icons/tb'
import useAuth from '../../../hooks/useAuth'

const StudioHeader = () => {
  const { header } = useAuth()
  return (
    <>
      <header
        className={`flex justify-between items-center  w-full bg-transparent px-5 py-1.5 z-50 transition-all duration-300 ${
          header
            ? 'fixed top-0 left-0 opacity-100'
            : 'fixed -top-1/2 left-0 opacity-20'
        }`}
      >
        <div>
          <ul className="flex items-center gap-1.5">
            <li>
              <button
                className="btn btn-xs btn-ghost tooltip tooltip-bottom"
                data-tip="Open"
              >
                <TbFolderOpen size={15} />
              </button>
            </li>
            <li>
              <button
                className="btn btn-xs btn-ghost tooltip tooltip-bottom"
                data-tip="Undo"
              >
                <LuUndo2 size={15} />
              </button>
            </li>
            <li>
              <button
                className="btn btn-xs btn-ghost tooltip tooltip-bottom"
                data-tip="Redo"
              >
                <LuRedo2 size={15} />
              </button>
            </li>
            <li>
              <button
                className="btn btn-xs btn-ghost tooltip tooltip-bottom"
                data-tip="Reset"
              >
                <TbFileX size={15} />
              </button>
            </li>
            <li>
              <button
                className="btn btn-xs btn-ghost tooltip tooltip-bottom"
                data-tip="History"
              >
                <LuHistory size={15} />
              </button>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center gap-1.5">
            <li>
              <button
                className="btn btn-xs btn-ghost tooltip tooltip-bottom"
                data-tip="Github Connect"
              >
                <TbBrandGithub size={15} />
              </button>
            </li>
            <li>
              <button
                className="btn btn-xs btn-ghost tooltip tooltip-bottom"
                data-tip="Save"
              >
                <TbPencilCheck size={15} />
              </button>
            </li>
            <li>
              <button
                className="btn btn-xs btn-ghost tooltip tooltip-bottom"
                data-tip="Export"
              >
                <TbPencilUp size={15} />
              </button>
            </li>
            <li>
              <button
                className="btn btn-xs btn-ghost tooltip tooltip-bottom"
                data-tip="Setting"
              >
                <TbSettings size={15} />
              </button>
            </li>
            <li>
              <button
                className="btn btn-xs btn-ghost tooltip tooltip-bottom"
                data-tip="Feedback"
              >
                <PiCoffeeDuotone size={15} />
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default StudioHeader
