// React component: Searchable Markdown Cheatbook UI
import axios from 'axios'
import { useEffect, useState } from 'react'
import { TbCopy, TbCopyCheck, TbListSearch } from 'react-icons/tb'
import Footer from '../../componenets/Footer/Footer'
import BackBtn from '../../componenets/Shared/BackBtn/BackBtn'

type SectionItem = {
  description: string
  example: string
  syntax: string
  title: string
  tags: string[]
}
type CheatSheetItem = {
  topic: string
  description: string
  sections: SectionItem[]
  syntax: string
}

export default function MarkdownTutorialPage() {
  const [data, setData] = useState<CheatSheetItem[]>([])
  const [isCopy, setIsCopy] = useState(false)
  const [query, setQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleFocus = () => {
    setShowSuggestions(true)
  }

  const handleBlur = () => {
    // Delay so click works before hiding
    setTimeout(() => setShowSuggestions(false), 100)
  }

  useEffect(() => {
    axios
      .get('/cheatSheet.json')
      .then((re) => {
        setData(re.data)
        console.log(re.data.description)
      })
      .catch((err) => {
        console.error('Failed to fetch cheat sheet:', err)
      })
  }, [])

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value)
    setIsCopy(true)
    setTimeout(() => {
      setIsCopy(false)
    }, 1500)
  }

  const filteredSections = data.flatMap((item) =>
    item.sections.filter(
      (section) =>
        section.title.toLowerCase().includes(query.toLowerCase()) ||
        section.description.toLowerCase().includes(query.toLowerCase()) ||
        section.tags.some((tag) =>
          tag.toLowerCase().includes(query.toLowerCase()),
        ),
    ),
  )

  return (
    <section className="flex flex-col items-center p-5">
      <div className="flex items-center mb-3 w-full">
        <BackBtn />
        <h1 className="text-xl font-bold flex items-center gap-1.5 mx-auto">
          <img src="/icon.png" width={30} alt="" />
          <i className="text-accent">by</i> Markdown Cheatbook
        </h1>
      </div>
      <div className="hero mt-3">
        <div className="hero-content flex-col lg:h-[70vh] text-center">
          <h1 className="text-2xl md:text-4xl font-bold w-70 md:w-sm">
            Welcome to the <i className="text-accent">Markdown Cheatbook</i>
          </h1>
          <p className="text-gray-500 ">
            Hey there, dev explorer! 🚀 Whether you’re just starting your
            Markdown journey or you've been writing README files since dial-up
            days, this cheatbook has your back. From the basics like headings
            and links, all the way to advanced pro stuff like Mermaid diagrams,
            LaTeX math, and GitHub-flavored goodness — it’s all neatly packed
            here. Search, scroll, and copy your way through the entire Markdown
            galaxy. No ads, no clutter — just pure markdown magic. ✨ Let’s make
            your docs look legendary. 💯
          </p>
          <div className="mt-7 w-sm md:w-xl relative">
            <input
              placeholder="Search by name, description or tag..."
              value={query}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => setQuery(e.target.value)}
              className="input w-full"
              autoComplete="off"
            />

            {showSuggestions && (
              <ul className="absolute top-10 bg-base-200 mt-2.5 p-5 w-full md:w-xl max-h-[50vh] rounded-lg flex flex-col text-sm overflow-auto transition-all duration-150">
                {filteredSections
                  .filter((s) =>
                    s.title.toLowerCase().includes(query.toLowerCase()),
                  )
                  .map((s, i) => (
                    <li
                      key={i}
                      className="cursor-pointer w-full hover:bg-base-200 py-2"
                      onMouseDown={() => {
                        setQuery(s.title)
                        setShowSuggestions(false)
                      }}
                    >
                      {s.title}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-start mt-5">
        <div
          className={`md:p-7 md:max-w-4xl scroll-smooth ${
            showSuggestions && '-z-10'
          }`}
        >
          <div className="grid gap-4">
            {filteredSections.length > 0 ? (
              filteredSections.map((item, idx) => (
                <section
                  id={item.title.toLowerCase()}
                  key={idx}
                  className="border border-base-200 card p-5 w-full"
                >
                  <div className="flex justify-between items-center my-2.5">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <div className="flex items-center gap-1.5">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="badge badge-soft badge-sm badge-warning"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mb-2">
                    {item.description}
                  </p>

                  <p className="mt-4 mb-1 capitalize text-error">Syntax</p>
                  <pre className="bg-base-300 p-9 rounded-lg text-sm whitespace-pre-wrap mb-2 relative leading-6">
                    <button
                      className="absolute right-3.5 top-3.5 btn btn-sm btn-soft btn-accent tooltip tooltip-right tooltip-accent"
                      onClick={() => handleCopy(item.syntax)}
                      data-tip={isCopy ? 'Copied' : 'Copy'}
                    >
                      {isCopy ? (
                        <TbCopyCheck size={15} />
                      ) : (
                        <TbCopy size={15} />
                      )}
                    </button>
                    <code>{item.syntax}</code>
                  </pre>

                  <p className="mt-4 mb-1 capitalize text-error">Example</p>
                  <pre className="bg-base-300 p-7 rounded-lg text-sm whitespace-pre-wrap relative">
                    <button
                      className="absolute right-3.5 top-3.5 btn btn-sm btn-soft btn-accent tooltip tooltip-right tooltip-accent"
                      onClick={() => handleCopy(item.syntax)}
                      data-tip={isCopy ? 'Copied' : 'Copy'}
                    >
                      {isCopy ? (
                        <TbCopyCheck size={15} />
                      ) : (
                        <TbCopy size={15} />
                      )}
                    </button>
                    <code>{item.example}</code>
                  </pre>
                </section>
              ))
            ) : (
              <div className="card p-25 text-center w-full lg:w-3xl border border-base-300">
                <TbListSearch size={55} className="mx-auto text-accent" />
                <p className="text-lg text-gray-500">
                  No matches found. Please check you search text?
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:block p-5 sticky top-0 overflow-scroll h-full max-h-screen w-sm scroll-smooth">
          <p className="text-gray-500">All Markdown Topics</p>
          <ul className="menu w-full">
            {data.flatMap((i) =>
              i.sections.map((list, i) => (
                <li key={i} className="link link-accent no-underline">
                  <a href={'#' + list.title.toLowerCase()}>{list.title}</a>
                </li>
              )),
            )}
          </ul>
        </div>
      </div>
      <Footer ui={false} />
    </section>
  )
}
