import React from 'react'
import {
  TbBookmarkPlus,
  TbCheck,
  TbClick,
  TbEye,
  TbListDetails,
  TbMessage2Plus,
} from 'react-icons/tb'
import type { RequestTypes } from '../../../../types/community.types'
import { Link } from 'react-router-dom'
import Pagination from '../../Shared/Pagination/Pagination'

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
]

export const RequestCard = ({ req }: { req: RequestTypes }) => {
  return (
    <>
      <div className="card p-7 shrink-0 bg-base-300 text-base-content">
        <span className="link link-error no-underline font-light self-end">
          Request
          <span className="loading loading-sm loading-ring ml-1" />
        </span>
        <h4 className="text-xl font-semibold">{req.title}</h4>
        <p className="text-md">{req.details}</p>
        <small className="text-sm text-gray-500">
          Requested by: {req.requester}
        </small>
        <div className="mt-2.5 space-x-1.5 self-end">
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
          <button className="btn btn-sm btn-soft btn-info">
            <TbBookmarkPlus size={15} />
            Save
          </button>
          <button
            className="btn btn-sm btn-soft btn-accent"
            onClick={() =>
              (
                document.getElementById('request_view') as HTMLDialogElement
              )?.showModal()
            }
          >
            <TbEye size={15} />
            View
          </button>
        </div>
      </div>
    </>
  )
}

const TemplateRequests: React.FC = () => {
  // const [requests, setRequests] = useState(dummyRequests)
  // const [newTitle, setNewTitle] = useState('')
  // const [newDetails, setNewDetails] = useState('')

  // const addRequest = () => {
  //   if (!newTitle.trim()) return
  //   setRequests([
  //     ...requests,
  //     {
  //       id: `r${Date.now()}`,
  //       title: newTitle,
  //       details: newDetails,
  //       requester: 'Anonymous',
  //     },
  //   ])
  //   setNewTitle('')
  //   setNewDetails('')
  // }

  return (
    <section className="p-5 mt-15">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">
          Template Requests
          <sup className="badge badge-sm badge-soft badge-info m-1">aaa</sup>
        </h2>
        <div className="flex items-center gap-1.5">
          <Link
            to="/ai-generate"
            onClick={() => localStorage.removeItem('ai-gen')}
            className="btn btn-sm btn-soft btn-accent px-5"
          >
            <TbClick size={17} />
            Create with ai
          </Link>
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
          <Link
            to="/community/all-requests"
            className="btn btn-sm btn-soft btn-primary"
          >
            <TbListDetails size={15} />
            See all Request
          </Link>
        </div>
      </div>
      <div className="items-center gap-5 grid grid-cols-2 w-full mt-5 px-5">
        {dummyRequests.slice(0, 6).map((req) => (
          <RequestCard req={req} key={req.id} />
        ))}
      </div>
      <Pagination mode="roman" />
    </section>
  )
}

export default TemplateRequests
