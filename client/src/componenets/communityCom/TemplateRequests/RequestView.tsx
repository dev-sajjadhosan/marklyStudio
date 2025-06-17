// Update the import path below to the correct relative path where RequestTypes is defined
import type { RequestTypes } from '../../../../types/community.types'
import { TbBookmarkPlus, TbCheck } from 'react-icons/tb'

const RequestViewModal = () => {
  const d = {
    id: 'r1',
    title: 'API Docs Template',
    details:
      'Looking for a template suited for API documentation.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore nam illum ducimus eaque tenetur nisi? Rerum unde quod dolorum, recusandae placeat molestiae nobis aspernatur voluptate, iste vel accusantium? Aliquid nulla excepturi recusandae distinctio omnis, eligendi dolorem ipsa, cupiditate dolore animi fuga autem eveniet voluptatibus nihil architecto ',
    requester: 'user123',
  }

  return (
    <>
      <dialog className="modal" id="request_view">
        <div className="modal-box min-w-3xl w-11/12 p-11">
          <div className="flex justify-between items-center">
            <p className="text-semibold">
              Request View of{' '}
              <span className="link link-error no-underline text-sm">
                @{d.requester}
              </span>
            </p>
            <div className="flex items-center gap-1.5">
              <button className="btn btn-sm btn-soft btn-info">
                <TbBookmarkPlus size={15} />
                Save
              </button>
            </div>
          </div>
          <div className="p-5">
            <h1 className="text-lg ">{d.title}</h1>
            <p className="text-sm text-gray-400 mt-1">{d.details}</p>
          </div>
          <div className="flex items-center justify-end gap-1.5">
            <button
              className="btn btn-sm btn-soft btn-warning"
              onClick={() =>
                (
                  document.getElementById('accept_view') as HTMLDialogElement
                )?.showModal()
              }
            >
              <TbCheck size={15} />
              Accept
            </button>
            <form method="dialog">
              <button className="btn btn-sm btn-soft btn-error">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}
export default RequestViewModal
