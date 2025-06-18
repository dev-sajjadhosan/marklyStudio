import { SiReasonstudios } from 'react-icons/si'
import { TbClick, TbTemplate, TbUsersPlus } from 'react-icons/tb'
import BackBtn from '../../Shared/BackBtn/BackBtn'
import SearchBar from '../../Shared/SearchBar/SearchBar'

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
          <SearchBar size='lg' />
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
