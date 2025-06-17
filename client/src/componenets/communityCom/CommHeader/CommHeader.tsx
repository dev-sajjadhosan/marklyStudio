import { SiReasonstudios } from 'react-icons/si'
import { TbClick, TbTemplate, TbUsersPlus } from 'react-icons/tb'
import BackBtn from '../../Shared/BackBtn/BackBtn'

// If you’re in React Router or Next.js, import Link instead of <a>.
const CommHeader = () => {
  return (
    <header className="bg-base-100 sticky top-0 z-90 w-full">
      <nav className="navbar container mx-auto">
        {/* left: brand + mobile toggle */}
        <div className="navbar-start">
          <BackBtn />
        </div>

        {/* center: desktop nav */}
        <div className="navbar-center hidden lg:flex">
          <form className="">
            <div className="relative w-lg flex items-center justify-between cursor-text rounded-xl border  border-base-300">
              <TbTemplate size={31} className="mx-3.5" />
              <input
                type="name"
                name="search"
                className="py-2 w-full outline-none focus:outline-none text-sm font-light tracking-wide"
                placeholder="Search by"
              />
              <select
                id="status"
                className="py-2 px-3 !bg-base-100 outline-none border-l border-base-300 mr-2.5 text-sm font-light "
              >
                <option value="all" defaultChecked>
                  All
                </option>
                <option value="profile">Profile</option>
                <option value="documentation">Documentation</option>
                <option value="project">Project</option>
                <option value="app">App</option>
                <option value="cli-tools">CLi Tools</option>
              </select>
            </div>
          </form>
        </div>

        {/* right: CTA */}
        <div className="navbar-end gap-1.5">
          <a
            href="/studio/editor"
            className="btn btn-sm btn-soft btn-warning px-5 tooltip tooltip-bottom"
            data-tip="Create Template"
            rel="noopener noreferrer"
          >
            <SiReasonstudios size={15} />
            {/* <p className="hidden md:flex">Create Template</p> */}
          </a>
          <a
            href="/ai-generate"
            onClick={() => localStorage.removeItem('ai-gen')}
            className="btn btn-sm btn-soft btn-accent px-5 tooltip tooltip-bottom"
            data-tip="Create with ai"
          >
            <TbClick size={15} />
          </a>
          <a
            href="/studio/editor"
            className="btn btn-sm btn-soft btn-primary px-5 tooltip tooltip-bottom"
            data-tip="Upload Template"
            rel="noopener noreferrer"
          >
            <TbTemplate size={15} />
          </a>
          <a
            href="https://github.com/markly"
            target="_blank"
            className="btn btn-sm btn-success btn-soft"
          >
            <TbUsersPlus size={15} />
            Join us
          </a>
        </div>
      </nav>
    </header>
  )
}

export default CommHeader
