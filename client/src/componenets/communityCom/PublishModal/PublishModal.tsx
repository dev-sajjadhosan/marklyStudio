import { useCallback, useRef, useState } from 'react'
import { SiReasonstudios } from 'react-icons/si'
import {
  TbClick,
  TbCode,
  TbGridDots,
  TbRepeat,
  TbWorldCode,
  TbWorldX,
} from 'react-icons/tb'
import { useLocation } from 'react-router-dom'
import useContexts from '../../../hooks/useContexts'
import { enqueueSnackbar } from 'notistack'
import useAxios from '../../../hooks/useAxios'
import useImageApi from '../../../hooks/useImageApi'

const PublishModal = () => {
  const axios = useAxios()
  const { handleImageApi, url, setUrl, setImage } = useImageApi()
  const { pathname } = useLocation()
  const { markdownText } = useContexts()
  const [file, setFile] = useState<File | null>(null)
  const [isAnon, setIsAnon] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleEditorCode = useCallback(() => {
    if (pathname === '/studio/editor') {
      if (markdownText === '') {
        enqueueSnackbar('The editor has no codes.', { variant: 'warning' })
        return
      }
      const blob = new Blob([markdownText], { type: 'text/markdown' })
      const file = new File([blob], 'README.md', { type: 'text/markdown' })
      setFile(file)
      enqueueSnackbar('File Create!', { variant: 'info' })
    }
  }, [pathname, markdownText])

  const handlePublish = async () => {
    if (!formRef.current) return
    await handleImageApi(formRef.current.preview.files?.[0])

    const formData = new FormData()

    const title = (formRef.current.title as unknown as HTMLInputElement).value
    const name = (formRef.current.name as unknown as HTMLInputElement).value
    const category = (formRef.current.category as unknown as HTMLInputElement)
      .value
    const username = (formRef.current.username as HTMLInputElement).value
    const shortDes = (formRef.current.shortDes as HTMLTextAreaElement).value

    const fileCode = file ? file : formRef.current.file_code.files?.[0]
    if (fileCode) {
      formData.append('file_code', fileCode)
    }
    if (url) {
      formData.append('preview', url)
    }

    formData.append('title', title)
    formData.append('name', name)
    formData.append('category', category)
    formData.append('username', username)
    formData.append('shortDes', shortDes)
    formData.append('create_time', new Date().toLocaleTimeString())
    formData.append('create_date', new Date().toLocaleDateString())

    console.log(formData)

    try {
      const res = await axios.post('/template/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if (res.data?.success) {
        enqueueSnackbar(res.data?.message, { variant: res.data?.type })
        setUrl(null)
        setImage([])
        formRef.current.reset()
      }
    } catch (err) {
      enqueueSnackbar('Publish failed!', { variant: 'error' })
      console.error('Upload failed:', err)
    }
  }

  return (
    <>
      <dialog id="publish_modal" className="modal">
        <div className="modal-box w-11/12 max-w-xl p-7">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Publish box</h3>
            <div
              className="dropdown dropdown-left dropdown-bottom tooltip tooltip-left"
              data-tip="More"
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
            <form className="flex flex-col gap-1.5" ref={formRef}>
              <div className="flex items-center gap-2.5 mb-1.5">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend font-light">
                    Pick file
                  </legend>
                  {file ? (
                    <>
                      <div className="join w-55">
                        <span className="bg-base-200 py-1.5 join-item px-7 text-sm">
                          File Added!
                        </span>
                        <button
                          className="btn btn-sm btn-primary tooltip tooltip-primary join-item"
                          data-tip="Clear File"
                          type="button"
                          onClick={() => setFile(null)}
                        >
                          <TbRepeat size={15} />
                        </button>
                      </div>
                    </>
                  ) : (
                    <fieldset className="join">
                      <input
                        type="file"
                        className="file-input join-item"
                        accept=".md"
                        name="file_code"
                      />
                      <button
                        onClick={handleEditorCode}
                        className="btn btn-soft btn-info join-item px-3 tooltip tooltip-info"
                        data-tip="Get Editor Code"
                      >
                        <TbCode size={15} />
                      </button>
                    </fieldset>
                  )}
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend font-light">
                    Pick Picture
                  </legend>
                  <input
                    type="file"
                    className="file-input"
                    accept="image/*"
                    name="preview"
                    required
                  />
                </fieldset>
              </div>
              <div className="grid lg:grid-cols-2 gap-1.5">
                <input
                  type="text"
                  name="title"
                  className="input w-full"
                  placeholder="Template title"
                />
                <select name="category" id="" className="select">
                  <option value="profile">Profile</option>
                  <option value="documentation">Documentation</option>
                  <option value="project">Project</option>
                  <option value="app">Application</option>
                  <option value="cli-tools">Tools</option>
                  <option value="cli-tools" disabled></option>
                  <option disabled>
                    <i>Coming More</i>
                  </option>
                </select>
              </div>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Author name"
                readOnly={isAnon}
                value={isAnon ? 'Anonymise' : undefined}
              />
              <input
                type="text"
                name="username"
                className="input w-full"
                placeholder="Author username"
                readOnly={isAnon}
                value={
                  isAnon
                    ? `anon${Math.floor(Math.random() * 999999) + 1000}`
                    : undefined
                }
              />
              <textarea
                rows={3}
                name="shortDes"
                className="textarea w-full"
                placeholder="Short description"
                readOnly={isAnon}
                value={
                  isAnon
                    ? `I don't want to revel my self.  I like to work behind the scene.`
                    : undefined
                }
              />
            </form>
          </div>
          <div className="flex items-center justify-end gap-1.5">
            <button
              className="btn btn-soft btn-info btn-sm px-3"
              onClick={() => handlePublish()}
            >
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
