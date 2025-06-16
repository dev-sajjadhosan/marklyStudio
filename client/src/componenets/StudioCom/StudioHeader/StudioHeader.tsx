import { LuHistory, LuRedo2, LuUndo2 } from 'react-icons/lu'
import { undo, redo } from '@codemirror/commands'
import { PiCoffeeDuotone } from 'react-icons/pi'
import {
  TbBrandGithub,
  TbFileX,
  TbFolderOpen,
  TbPencilCheck,
  TbPencilUp,
  TbSettings,
  TbWorldShare,
} from 'react-icons/tb'
import useContexts from '../../../hooks/useContexts'
import useHeaderActions from '../../../hooks/useHeaderActions'

const StudioHeader = () => {
  const { header, editorRef, setSetting } = useContexts()
  const { handleOpen, handleExport, handleReset, handleSave } =
    useHeaderActions()

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
                onClick={handleOpen}
              >
                <TbFolderOpen size={15} />
              </button>
            </li>
            <li>
              <button
                className="btn btn-xs btn-ghost tooltip tooltip-bottom"
                data-tip="Undo"
                onClick={() => {
                  const view = editorRef.current?.view
                  if (view) undo({ state: view.state, dispatch: view.dispatch })
                }}
              >
                <LuUndo2 size={15} />
              </button>
            </li>
            <li>
              <button
                className="btn btn-xs btn-ghost tooltip tooltip-bottom"
                data-tip="Redo"
                onClick={() => {
                  const view = editorRef.current?.view
                  if (view) redo({ state: view.state, dispatch: view.dispatch })
                }}
              >
                <LuRedo2 size={15} />
              </button>
            </li>
            <li>
              <button
                className="btn btn-xs btn-ghost tooltip tooltip-bottom"
                data-tip="Reset"
                onClick={handleReset}
              >
                <TbFileX size={15} />
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  (
                    document.getElementById(
                      'publish_modal',
                    ) as HTMLDialogElement
                  )?.showModal()
                }
                className="btn btn-xs btn-info btn-soft tooltip tooltip-bottom"
                data-tip="Publish Doc"
              >
                <TbWorldShare size={15} />
              </button>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center gap-1.5">
            <li>
              <button
                className="btn btn-xs btn-ghost tooltip tooltip-bottom"
                disabled
                data-tip="Github Connect"
              >
                <TbBrandGithub size={15} />
              </button>
            </li>
            <li>
              <button
                className="btn btn-xs btn-ghost tooltip tooltip-bottom"
                data-tip="Save"
                onClick={handleSave}
              >
                <TbPencilCheck size={15} />
              </button>
            </li>
            <li>
              <button
                className="btn btn-xs btn-ghost tooltip tooltip-bottom"
                data-tip="Export"
                onClick={handleExport}
              >
                <TbPencilUp size={15} />
              </button>
            </li>
            <li>
              <button
                className="btn btn-xs btn-ghost tooltip tooltip-bottom"
                data-tip="Setting"
                onClick={() => setSetting(true)}
              >
                <TbSettings size={15} />
              </button>
            </li>
            <li>
              <button
                className="btn btn-xs btn-ghost tooltip tooltip-bottom"
                data-tip="Feedback"
                disabled
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
