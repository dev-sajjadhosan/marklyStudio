import React from 'react'
import { TbBulb } from 'react-icons/tb'
import Pagination from '../../Shared/Pagination/Pagination'

type Tip = {
  id: string
  title: string
  content: string
}

const dummyTips: Tip[] = [
  {
    id: 't1',
    title: 'Use headings for structure',
    content: 'Break your README into clear sections using #, ##, ###.',
  },
  {
    id: 't1',
    title: 'Use headings for structure',
    content: 'Break your README into clear sections using #, ##, ###.',
  },
  {
    id: 't1',
    title: 'Use headings for structure',
    content: 'Break your README into clear sections using #, ##, ###.',
  },
  {
    id: 't2',
    title: 'Add badges for status',
    content:
      'Include badges like build status, coverage, or license for credibility.Include badges like build status, coverage, or license for credibility.Include badges like build status, coverage, or license for credibility.Include badges like build status, coverage, or license for credibility.Include badges like build status, coverage, or license for credibility.',
  },
  {
    id: 't2',
    title: 'Add badges for status',
    content:
      'Include badges like build status, coverage, or license for credibility.Include badges like build status, coverage, or license for credibility.Include badges like build status, coverage, or license for credibility.Include badges like build status, coverage, or license for credibility.Include badges like build status, coverage, or license for credibility.',
  },
  {
    id: 't2',
    title: 'Add badges for status',
    content:
      'Include badges like build status, coverage, or license for credibility.Include badges like build status, coverage, or license for credibility.Include badges like build status, coverage, or license for credibility.Include badges like build status, coverage, or license for credibility.Include badges like build status, coverage, or license for credibility.',
  },
]

const HowToTipsCorner: React.FC = () => {
  return (
    <section className="p-5 mt-15">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl"> How-To & Tips Corner</h2>
        <button className="btn"></button>
      </div>
      <ul className="grid md:grid-cols-2 gap-5 mt-5">
        {dummyTips.map((tip) => (
          <li
            key={tip.id}
            className="list-item p-7 rounded-2xl border border-base-300 text-center"
          >
            <TbBulb size={50} className="text-error" />
            <h2 className="text-xl mt-3">{tip.title}</h2>
            <p className=" text-gray-500 mt-1.5">{tip.content}</p>
          </li>
        ))}
      </ul>
      <Pagination mode="roman" />
    </section>
  )
}

export default HowToTipsCorner
