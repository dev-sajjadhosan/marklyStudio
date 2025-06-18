import { useState } from 'react'
import { SiReasonstudios } from 'react-icons/si'
import { TbMessage2X } from 'react-icons/tb'
// import { Link } from 'react-router-dom'

const AcceptViewModal = () => {
  const [isAnon, setIsAnon] = useState(false)

  return (
    <>
      <dialog className="modal" id="accept_view">
        <div className="modal-box max-w-xl w-11/12 p-7">
          <div className="flex justify-between items-center">
            <p className="text-sm font-light">
              <span className="text-xl link link-error no-underline">
                Request{' '}
              </span>
              Accept by
            </p>
            <label className="label text-sm items-center gap-2">
              <input
                type="checkbox"
                onClick={() => setIsAnon(!isAnon)}
                className="toggle toggle-sm toggle-warning"
              />
              Accept by Anonymous
            </label>
          </div>
          <div className="my-11 flex items-center justify-center gap-2.5">
            {isAnon ? (
              <h1 className="text-4xl font-light dancing">Anonymous</h1>
            ) : (
              <>
                <div className="avatar w-19 h-19">
                  <img src="/icon.png" alt="" />
                </div>
                <div className="card">
                  <h2 className="text-xl">Jhon Sign</h2>
                  <p className="text-sm">@jhonsign01</p>
                </div>
              </>
            )}
          </div>
          <div className="mt-5 flex items-center justify-center gap-2.5">
            <button
              disabled
              // to="/studio/editor"
              className="btn btn-sm btn-warning"
            >
              <SiReasonstudios size={13} />
              Open editor
            </button>
            <form method="dialog">
              <button className="btn btn-sm btn-soft btn-error">
                <TbMessage2X size={15} />
                Cancel
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}
export default AcceptViewModal
