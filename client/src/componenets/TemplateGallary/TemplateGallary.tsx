import { SiReasonstudios } from 'react-icons/si'
import { TbArrowBearRight, TbBookmarkPlus, TbShare3 } from 'react-icons/tb'
import useTemplates from '../../hooks/useTemplates'
// import { Link } from 'react-router-dom'

const TemplateGallery = () => {
  const { data } = useTemplates()

  return (
    <section id="template-gallery" className="py-15 text-base-content">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Trending Templates</h2>
        <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
          Discover community-built README templates — fork, remix, or use as-is
          ✨.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {data?.slice(0, 6)?.map((template, index) => (
            <div
              key={index}
              className="card p-7 bg-base-300 transition duration-200 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-gray-500 font-semibold">
                  {template.title}
                </h3>
                <a className="text-sm link text-secondary no-underline">
                  {' '}
                  @{template.username}
                </a>
              </div>
              <figure>
                <img
                  src={template.picture}
                  // src="/icon.png"
                  alt={template.title}
                  width={200}
                  className="hover:scale-105 duration-100 "
                />
              </figure>

              <div className="flex flex-wrap items-center gap-1.5 mt-7">
                <button
                  // to="/studio"
                  disabled
                  className="btn btn-xs btn-warning btn-soft px-1.5"
                >
                  <SiReasonstudios size={15} />
                  Open on Studio
                </button>
                <button
                  className="btn btn-xs btn-success btn-soft px-1.5"
                  disabled
                >
                  <TbBookmarkPlus size={15} />
                  Save
                </button>
                <button
                  className="btn btn-xs btn-info btn-soft px-1.5"
                  disabled
                >
                  <TbShare3 size={15} />
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for full gallery */}
        <div className="mt-10">
          <a href="/templates" className="btn btn-sm btn-primary btn-soft">
            <TbArrowBearRight size={17} />
            View Templates
          </a>
        </div>
      </div>
    </section>
  )
}

export default TemplateGallery
