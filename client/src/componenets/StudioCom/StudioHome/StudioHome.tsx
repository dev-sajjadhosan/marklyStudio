import { useState } from 'react'
import {
  TbBrandGithub,
  TbCancel,
  TbEditCircle,
  TbFile,
  TbFileImport,
} from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

const StudioHome = () => {
  const nav = useNavigate()

  const [c, setC] = useState(false) // create input toggle

  const handleNavEditor = () => {
    nav('/studio/editor')
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {!c ? (
          <div className="card text-center rounded-2xl p-17 bg-base-200">
            <h1 className="text-6xl text-gray-500">Markly</h1>
            <p className="text-lg mt-3.5">
              Welcome to Markly <span className="text-warning">Studio App</span>
              .
            </p>
            <div className="mt-5 flex items-center gap-1.5">
              <button
                className="btn btn-sm btn-soft btn-warning"
                onClick={() => setC(true)}
              >
                <TbFile size={17} />
                Create New File
              </button>
              <button className="btn btn-sm btn-soft btn-accent" disabled>
                <TbFileImport size={17} />
                Import File
              </button>
              <button className="btn btn-sm btn-soft btn-primary" disabled>
                <TbBrandGithub size={17} />
                From Github
              </button>
            </div>
          </div>
        ) : (
          <div className="card rounded-2xl p-17 bg-base-200 w-lg">
            <form className="flex flex-col w-full">
              <label htmlFor="" className="text-gray-500">
                Write your file name
                <input
                  type="text"
                  placeholder="readme.md"
                  className="input text-white w-full mt-1.5"
                  defaultValue="readME.md"
                />
              </label>
              <div className="mt-2.5 flex items-center gap-1.5 self-end">
                <button
                  type="button"
                  className="btn btn-sm btn-soft btn-error px-5"
                  onClick={() => setC(false)}
                >
                  <TbCancel size={17} />
                  Quit
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-soft btn-warning px-5 "
                  onClick={handleNavEditor}
                >
                  <TbEditCircle size={17} />
                  Go to Editor
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  )
}

export default StudioHome
