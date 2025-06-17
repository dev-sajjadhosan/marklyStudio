// Update the import path below to the correct relative path where RequestTypes is defined
import { useRef } from 'react'
import { TbMessage2Plus, TbMessage2X } from 'react-icons/tb'

const CreateRequestView = () => {
  const isPictureRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <dialog className="modal" id="create_request_view">
        <div className="modal-box min-w-xl w-11/12 p-9">
          <div className="flex justify-between items-center">
            <p className="text-semibold">Create Request</p>
            <div className="flex items-center gap-1.5">
              <form method="dialog">
                <button className="btn btn-sm btn-soft btn-error">
                  <TbMessage2X size={15} />
                  Cancel
                </button>
              </form>
            </div>
          </div>
          <div className="p-5 w-full">
            <form className="flex flex-col gap-1.5">
              <div className="grid grid-cols-2 gap-2.5">
                <label className="label text-sm items-center gap-2">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm toggle-warning"
                    ref={isPictureRef}
                    onClick={() => {
                      const fileInput = document.getElementById(
                        'uploadInput',
                      ) as HTMLInputElement
                      if (fileInput) {
                        fileInput.disabled = !isPictureRef.current?.checked
                      }
                    }}
                  />
                  Share Picture
                </label>

                <input
                  id="uploadInput"
                  type="file"
                  name="picture"
                  className="file-input"
                  disabled
                />
              </div>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Requester name"
              />
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Requester email"
              />
              <textarea
                name="details"
                id=""
                rows={5}
                placeholder="Request Details"
                className="textarea w-full"
              ></textarea>
              <button className="btn btn-sm btn-soft btn-warning mt-2.5 self-center px-5">
                <TbMessage2Plus size={15} />
                Create
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}
export default CreateRequestView
