import { useState } from 'react'
import { TbTagsFilled, TbTrashXFilled } from 'react-icons/tb'
import useContexts from '../../../hooks/useContexts'
import useReadmeSections from '../../../hooks/useReadmeSection'
import type { TagItem } from '../../../../types/editor.types'

const TagsBar = () => {
  const { tag, setTag, example, setExample, insertAtCursor } = useContexts()
  const { sections, names } = useReadmeSections()
  const [tagTab, setTagTab] = useState('project')

  const handleDelete = (tag: string) => {
    setExample((prev) => prev.filter((ex) => ex !== tag))
  }

  return (
    <>
      <div
        className={`w-md h-[90vh] bg-base-200 p-5 transition-all duration-350 z-50 rounded-2xl ${
          tag
            ? 'fixed right-5 top-1/2 -translate-y-1/2 opacity-100'
            : 'fixed -right-[90%] hidden top-1/2 -translate-y-1/2 opacity-20'
        }`}
      >
        <button
          onClick={() => setTag(!tag)}
          data-tip="Close"
          className="absolute btn btn-circle btn-soft btn-accent top-9 -left-5 tooltip"
        >
          <TbTagsFilled size={17} />
        </button>
        <div className="flex flex-col overflow-hidden h-full">
          <p className="text-xs mb-1.5 text-left">Tags Panel</p>
          <ul className="join self-center">
            {names?.map((n, i) => (
              <li
                key={i}
                className={`join-item btn btn-xs px-3  capitalize ${
                  tagTab === n ? 'btn-accent' : 'btn-soft btn-accent'
                }`}
                onClick={() => setTagTab(n)}
              >
                <a>{n}</a>
              </li>
            ))}
          </ul>
          <div className="h-full overflow-y-auto">
            <ul className="mt-3 list gap-1.5 pb-7">
              {(sections && sections[tagTab as keyof typeof sections]
                ? sections[tagTab as keyof typeof sections]
                : []
              ).map((s: TagItem, i: number) => (
                <li
                  key={i}
                  className="join items-center transition-all duration-150 "
                >
                  <div
                    className={`w-full list-row join-item cursor-pointer active:scale-95 ${
                      example.includes(s.example)
                        ? 'bg-gray-600'
                        : 'hover:bg-base-300'
                    }`}
                    onClick={() => {
                      insertAtCursor('\n' + s.example)
                      setExample((p) => [...p, s?.example])
                    }}
                  >
                    <span className="text-light text-error">
                      {i < 9 ? `0${i + 1}` : i + 1}
                    </span>
                    <button
                      tabIndex={0}
                      className="text-bold tracking-wide"
                      role="button"
                    >
                      {s?.title}
                    </button>
                  </div>
                  <button
                    className="btn btn-soft btn-error join-item tooltip tooltip-left tooltip-error"
                    data-tip="Remove"
                    onClick={() => handleDelete(s.example)}
                    disabled={!example.includes(s.example)}
                  >
                    <TbTrashXFilled size={17} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default TagsBar
