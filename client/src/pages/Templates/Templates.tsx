import { Link } from 'react-router-dom'
import BackBtn from '../../componenets/Shared/BackBtn/BackBtn'
// import icon from '../../../public/icon.png'
// import fake from '../../assets/fake.png'

import {
  TbClick,
  TbFileSpreadsheet,
  TbScreenShare,
  TbTemplateOff,
  TbTransitionBottom,
  TbWorldShare,
} from 'react-icons/tb'
import { SiReasonstudios } from 'react-icons/si'
import SearchBar from '../../componenets/Shared/SearchBar/SearchBar'
import TemStatus from '../../componenets/Shared/TemStatus/TemStatus'
import Pagination from '../../componenets/Shared/Pagination/Pagination'
import useTemplates, { type TemplateP } from '../../hooks/useTemplates'

const TemplatesPage = () => {
  // const filter = new URLSearchParams(useLocation().search).get('f')
  const { data, isLoading, page, setPage } = useTemplates()

  // const data = []
  console.log('data', data)

  return (
    <>
      <section className="p-5">
        <div className="flex justify-between items-center">
          <BackBtn />
          <h1 className="text-3xl font-light hidden">Templates</h1>
          <div className="flex items-center gap-1.5">
            <Link
              to={'/markly-tutorial-page'}
              className="btn btn-sm btn-soft btn-info"
            >
              <TbFileSpreadsheet size={15} />
              CheatSheet
            </Link>
            <button className="btn btn-sm btn-soft btn-accent">
              Create Template
            </button>
            <button className="btn btn-sm btn-soft btn-accent">
              Filter by
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-7">
          <div className="hero bg-base-300 h-[77vh] mb-7 rounded-2xl">
            <div className="hero-content flex-col text-center max-w-xl">
              <h2 className="text-6xl font-light text-gray-300 dancing">
                Get's Templates
              </h2>
              <p className="text-lg text-gray-400">
                Here you can get any Templates ?
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5">
                <button className="btn btn-sm btn-soft btn-error px-5">
                  Profile
                </button>
                <button className="btn btn-sm btn-soft btn-warning px-5">
                  Documentation
                </button>
                <button className="btn btn-sm btn-soft btn-accent px-5">
                  Project
                </button>
                <button className="btn btn-sm btn-soft btn-warning px-5">
                  Application
                </button>
                <button className="btn btn-sm btn-soft btn-primary px-5">
                  Tools
                </button>
                <button className="btn btn-sm btn-soft btn-warning px-5">
                  Open-Source
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-15">
          <div className="p-5 w-full flex flex-wrap gap-2.5 items-center justify-between">
            <SearchBar size="sm" />
            <div className="mx-auto md:mx-0">
              <TemStatus />
            </div>
          </div>
          <div className="mt-7">
            {data.length <= 0 ? (
              <div className="card p-21 justify-center items-center gap-1 bg-base-200 w-2xl mx-auto my-9">
                <TbTemplateOff size={45} className="text-gray-500" />
                <h1 className="text-2xl">No Template is here!</h1>
                <p className="text-sm tracking-wide">
                  Please use this buttons to create or publish
                </p>
                <div className="join gap-1.5 mt-2.5">
                  <Link
                    to="/studio/editor"
                    className="btn btn-sm btn-warning btn-soft px-5"
                  >
                    <SiReasonstudios size={15} />
                    Studio
                  </Link>
                  <Link
                    to="/ai-generate"
                    className="btn btn-sm btn-accent btn-soft px-5"
                  >
                    <TbClick size={15} />
                    Ai Generate
                  </Link>
                  <button
                    onClick={() =>
                      (
                        document.getElementById(
                          'publish_modal',
                        ) as HTMLDialogElement
                      )?.showModal()
                    }
                    className="btn btn-sm btn-info btn-soft px-5"
                  >
                    <TbWorldShare size={15} />
                    Publish
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.map((tpl: TemplateP) => {
                  return (
                    <div
                      key={tpl._id}
                      className="card justify-between bg-base-200 p-7 rounded-xl gap-1.5"
                    >
                      {isLoading ? (
                        <span className="loading loading-ring loading-xl" />
                      ) : (
                        <>
                          {' '}
                          <figure className="h-60 mb-2.5">
                            <img
                              src={tpl?.picture}
                              alt="Preview"
                              className="rounded-lg object-cover w-full h-full"
                              onError={(e) =>
                                (e.currentTarget.src = '/fallback.png')
                              }
                            />
                          </figure>
                          <div className="">
                            <div className="flex justify-between items-center">
                              <h3 className="text-md">{tpl.title}</h3>
                              <small className="text-xs link link-error no-underline">
                                @{tpl.username}
                              </small>
                            </div>
                            <p className="text-xs text-gray-500 text-ellipsis">
                              {tpl?.description?.slice(0, 40)}...
                            </p>
                            <div className="flex items-center gap-1.5 mt-3.5">
                              <a
                                // href={tpl.file?.downloadUrl ?? '#'}
                                target="_blank"
                                className="btn btn-sm btn-soft btn-info"
                                rel="noopener noreferrer"
                              >
                                <TbTransitionBottom size={13} />
                                Download
                              </a>
                              <button
                                className="btn btn-sm btn-soft btn-accent"
                                onClick={() =>
                                  (
                                    document.getElementById(
                                      'preview_modal',
                                    ) as HTMLDialogElement
                                  )?.showModal()
                                }
                              >
                                <TbScreenShare size={13} />
                                Preview
                              </button>
                              <button className="btn btn-sm btn-soft btn-warning">
                                <SiReasonstudios size={13} />
                                Open to Editor
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {data.length <= 0 ? (
            ''
          ) : (
            <Pagination mode="roman" setPage={setPage} page={page} />
          )}
        </div>
      </section>
    </>
  )
}

export default TemplatesPage
