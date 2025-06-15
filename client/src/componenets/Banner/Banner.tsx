import { SiReasonstudios } from 'react-icons/si'
import HeroImg from '../../assets/hero.webp'
import { Link } from 'react-router-dom'
import { TbClick, TbUsersGroup } from 'react-icons/tb'

const Banner = () => {
  return (
    <>
      <section className="hero pb-15">
        <div className="hero-content flex-col lg:flex-row items-center ">
          <img src={HeroImg} alt="" className="max-w-lg rounded-lg" />
          <div className="">
            <h1 className="text-6xl font-light text-white dancing w-md mb-3">
              Markly is a Modern and Open-Source Platfrom to Generate Markdown
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl tracking-wide">
              <span className="text-3xl font-light dancing">Markly</span> is a
              next-gen Markdown and <code>README.md</code> editor, previewer,
              and generator — built to streamline your documentation workflow.
              Whether you're crafting from scratch, editing existing files, or
              pasting your GitHub repo URL, our built-in AI assistant helps you
              generate clean, professional markdown files instantly. Plus, join
              a growing community of creators sharing free (in-shaa-Allah ✨)
              templates for everyone.
            </p>
            <div className="mt-5 flex items-center gap-1">
              <Link
                to="/studio/editor"
                className="btn btn-sm btn-soft btn-warning px-5"
              >
                <SiReasonstudios size={17} />
                Try Studio
              </Link>
              <Link
                to="/ai-generate"
                className="btn btn-sm btn-soft btn-accent px-5"
              >
                <TbClick size={17} />
                Create with ai
              </Link>
              <button className="btn btn-sm btn-soft btn-primary px-5">
                <TbUsersGroup size={17} />
                Visit Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Banner
