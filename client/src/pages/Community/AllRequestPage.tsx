import type { RequestTypes } from '../../../types/community.types'
import { TbMessage2Plus } from 'react-icons/tb'
import { RequestCard } from '../../componenets/communityCom/TemplateRequests/TemplateRequests'
import BackBtn from '../../componenets/Shared/BackBtn/BackBtn'
import Pagination from '../../componenets/Shared/Pagination/Pagination'

const dummyRequests: RequestTypes[] = [
  {
    id: 'r1',
    title: 'API Docs Template',
    details: 'Looking for a template suited for API documentation.',
    requester: 'user123',
  },
  {
    id: 'r1',
    title: 'API Docs Template',
    details: 'Looking for a template suited for API documentation.',
    requester: 'user123',
  },
  {
    id: 'r1',
    title: 'API Docs Template',
    details: 'Looking for a template suited for API documentation.',
    requester: 'user123',
  },
  {
    id: 'r1',
    title: 'API Docs Template',
    details: 'Looking for a template suited for API documentation.',
    requester: 'user123',
  },
  {
    id: 'r1',
    title: 'API Docs Template',
    details: 'Looking for a template suited for API documentation.',
    requester: 'user123',
  },
  {
    id: 'r1',
    title: 'API Docs Template',
    details: 'Looking for a template suited for API documentation.',
    requester: 'user123',
  },
  {
    id: 'r1',
    title: 'API Docs Template',
    details: 'Looking for a template suited for API documentation.',
    requester: 'user123',
  },
  {
    id: 'r1',
    title: 'API Docs Template',
    details: 'Looking for a template suited for API documentation.',
    requester: 'user123',
  },
  {
    id: 'r1',
    title: 'API Docs Template',
    details: 'Looking for a template suited for API documentation.',
    requester: 'user123',
  },
  {
    id: 'r1',
    title: 'API Docs Template',
    details: 'Looking for a template suited for API documentation.',
    requester: 'user123',
  },
  {
    id: 'r1',
    title: 'API Docs Template',
    details: 'Looking for a template suited for API documentation.',
    requester: 'user123',
  },
  {
    id: 'r1',
    title: 'API Docs Template',
    details: 'Looking for a template suited for API documentation.',
    requester: 'user123',
  },
  {
    id: 'r1',
    title: 'API Docs Template',
    details: 'Looking for a template suited for API documentation.',
    requester: 'user123',
  },
  {
    id: 'r1',
    title: 'API Docs Template',
    details: 'Looking for a template suited for API documentation.',
    requester: 'user123',
  },
  {
    id: 'r1',
    title: 'API Docs Template',
    details: 'Looking for a template suited for API documentation.',
    requester: 'user123',
  },
]

const AllRequestPage = () => {
  return (
    <>
      <section className="p-5">
        <div className="flex justify-between items-center">
          <BackBtn />
          <div className="flex items-center gap-1.5 self-end">
            <button
              className="btn btn-sm btn-soft btn-warning"
              onClick={() =>
                (
                  document.getElementById(
                    'create_request_view',
                  ) as HTMLDialogElement
                )?.showModal()
              }
            >
              <TbMessage2Plus size={15} />
              Create Request
            </button>
          </div>
        </div>
        <div className="mt-11">
          <p className="text-sm text-info flex items-center gap-1.5">
            Total Request{' '}
            <span className="badge badge-soft badge-error">@120</span>
          </p>
          <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-200">
            {dummyRequests.map((req, i) => (
              <RequestCard key={i} req={req} />
            ))}
          </div>
          <div className="mt-9 flex justify-center items-center">
            <Pagination mode="roman" />
          </div>
        </div>
      </section>
    </>
  )
}

export default AllRequestPage
