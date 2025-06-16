import { useState } from 'react'
import { SiReasonstudios } from 'react-icons/si'
import { TbClick, TbGridDots, TbWorldCode, TbWorldX } from 'react-icons/tb'
import { useLocation } from 'react-router-dom'

const PublishModal = () => {
  const { pathname } = useLocation()
  const [isAnon, setIsAnon] = useState(false)
  return (
    <>
      <dialog id="publish_modal" className="modal">
        <div className="modal-box w-11/12 max-w-xl p-7">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Publish box</h3>
            <div
              className="dropdown dropdown-left dropdown-bottom tooltip tooltip-left"
              data-tip="more Options"
            >
              <button className="btn btn-sm btn-ghost">
                <TbGridDots size={15} />
              </button>

              <ul className="menu menu-sm gap-1.5 dropdown-content w-44 bg-base-200 p-3.5 rounded-xl">
                {pathname !== '/studio/editor' && (
                  <li>
                    <a href="/studio/editor">
                      <SiReasonstudios size={13} />
                      With Editor
                    </a>
                  </li>
                )}
                <li>
                  <a href="/ai-generate">
                    <TbClick size={13} />
                    Ai Generate
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-3 flex flex-col gap-2.5">
            <label className="label text-sm self-end">
              <input
                type="checkbox"
                className="toggle toggle-sm toggle-warning"
                onClick={() => setIsAnon(!isAnon)}
              />
              Publish Anonymous
            </label>
            {/* ------------------------------- */}
            <form className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2.5 mb-1.5">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend font-light">
                    Pick file
                  </legend>
                  <input type="file" className="file-input" accept="*/*" />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend font-light">
                    Pick Picture
                  </legend>
                  <input type="file" className="file-input" accept="image/*" />
                </fieldset>
              </div>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Author name"
                disabled={isAnon}
              />
              <input
                type="text"
                name="username"
                className="input w-full"
                placeholder="Author username"
                disabled={isAnon}
              />
              <textarea
                rows={3}
                name="shortDes"
                className="textarea w-full"
                placeholder="Short description"
              />
            </form>
          </div>
          <div className="flex items-center justify-end gap-1.5">
            <button className="btn btn-soft btn-info btn-sm px-3">
              <TbWorldCode size={17} />
              Publish
            </button>
            <form method="dialog">
              <button className="btn btn-soft btn-error btn-sm px-3">
                <TbWorldX size={17} />
                Deny
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default PublishModal
