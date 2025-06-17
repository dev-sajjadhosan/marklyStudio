import { useState } from 'react'
import { SiReasonstudios } from 'react-icons/si'
import {
  TbCategory,
  TbClick,
  TbMenu3,
  TbSquares,
  TbTags,
  TbUsersGroup,
  TbUsersPlus,
  TbUserSquareRounded,
  TbWorld,
} from 'react-icons/tb'
import { Link } from 'react-router-dom'
// If you’re in React Router or Next.js, import Link instead of <a>.
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-base-100 sticky top-0 z-90">
      <nav className="navbar container mx-auto">
        {/* left: brand + mobile toggle */}
        <div className="navbar-start">
          {/* Mobile hamburger */}
          <button
            id="mobile-nav-toggle"
            className="btn btn-sm btn-ghost lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* icon */}
            <TbMenu3 size={17} />
          </button>

          {/* Brand / home link */}
          <div className=" btn btn-ghost px-5">
            <img src="/icon.png" width={20} alt="" />
            <a href="/" className=" text-lg font-light dancing">
              Markly
            </a>
          </div>
        </div>

        {/* center: desktop nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1" role="menubar">
            <li>
              <Link to="/studio/editor" role="menuitem">
                <SiReasonstudios size={17} />
                Studio
              </Link>
            </li>
            <li onClick={() => localStorage.removeItem('ai-gen')}>
              <a href="/ai-generate" role="menuitem">
                <TbClick size={17} />
                Ai Generate
              </a>
            </li>
            <li>
              <a href="/community" role="menuitem">
                <TbUsersGroup size={17} />
                Community
              </a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary role="menuitem" aria-haspopup="true">
                  <Link to="/templates">Templates</Link>
                  <TbCategory size={17} />
                </summary>
                <ul className="w-60 bg-base-200 p-3 flex flex-col gap-1.5">
                  <li>
                    <Link to={`/templates?c=all`} role="menuitem">
                      <TbWorld size={17} />
                      All Moderns
                    </Link>
                  </li>
                  <li>
                    <Link to={`/templates?c=profiles`} role="menuitem">
                      <TbUserSquareRounded size={17} />
                      Github Profile
                    </Link>
                  </li>
                  <li>
                    <Link to={`/templates?c=projects`} role="menuitem">
                      <TbSquares size={17} />
                      Projects readme
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {/* right: CTA */}
        <div className="navbar-end gap-1.5">
          <a
            href="/studio/editor"
            className="btn btn-sm btn-soft btn-warning"
            rel="noopener noreferrer"
          >
            <SiReasonstudios size={17} />
            Try Studio
          </a>
          <a
            href="https://github.com/markly"
            target="_blank"
            className="btn btn-sm btn-soft btn-success"
          >
            <TbUsersPlus size={17} />
            Join with us
          </a>
        </div>
      </nav>

      {/* Mobile dropdown (JS‑controlled for a11y) */}
      {isOpen && (
        <ul
          id="mobile-nav"
          className="menu menu-sm gap-1.5 dropdown-content bg-base-200 rounded-box shadow mt-2 p-2 lg:hidden w-xs absolute top-15 right-1/2 translate-x-1/2 transition-all duration-150"
          role="menu"
        >
          <li>
            <a href="/studio/home" role="menuitem">
              <SiReasonstudios size={17} />
              Studio
            </a>
          </li>
          <li>
            <a href="/ai-generate" role="menuitem">
              <TbClick size={17} />
              Ai Generate
            </a>
          </li>
          <li>
            <a href="/community" role="menuitem">
              <TbTags size={17} />
              Community
            </a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary role="menuitem" aria-haspopup="true">
                <Link to="/templates">Templates</Link>
                <TbCategory size={17} />
              </summary>
              <ul className="w-xs bg-base-100 p-11 flex flex-col gap-1.5">
                <li>
                  <Link to={`/templates?c=all`} role="menuitem">
                    <TbWorld size={17} />
                    All Moderns
                  </Link>
                </li>
                <li>
                  <Link to={`/templates?c=profiles`} role="menuitem">
                    <TbUserSquareRounded size={17} />
                    Github Profile
                  </Link>
                </li>
                <li>
                  <Link to={`/templates?c=projects`} role="menuitem">
                    <TbSquares size={17} />
                    Projects readme
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Header
