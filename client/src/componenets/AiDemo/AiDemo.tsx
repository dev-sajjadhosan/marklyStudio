import { TbClick } from 'react-icons/tb'
import ai from '../../assets/ai.webp'
import ChatSection from './ChatSection'

const AIDemo = () => {

  return (
    <section id="ai-demo" className="py-20 text-base-content">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Meet Your Markdown Assistant
        </h2>
        <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
          Ask Markly AI anything about your markdown — from intros to badges to
          grammar. Try it below 👇
        </p>

        <div className="flex justify-between items-center flex-col lg:flex-row gap-7">
          <div className="max-w-lg">
            <img src={ai} alt="" className="w-full h-full" />
          </div>
          {/* Chat Box */}
          <div className="w-xl bg-base-200 p-5">
            <ChatSection />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a href="/ai-generate" className="btn btn-accent btn-soft px-7">
            <TbClick size={17} />
            Create with ai
          </a>
        </div>
      </div>
    </section>
  )
}

export default AIDemo
