import { useState } from 'react'
import useContexts from '../../../hooks/useContexts'

const FLAVORS = [
  // 🛠 Project-style flavors
  'Clean Code',
  'AI-Powered',
  'Open Source',
  'CLI Tool',
  'Professional',
  'Fun Vibes',
  'Beginner Friendly',
  'Modular',
  'Dark Mode',
  'README Ready',
  'Dev Stack Showcase',
  'Tech Emojis',
  'Visitor Counter',
  'GitHub Stats Card',
  'Wakatime Activity',
  'Contribution Graph',
  'Pinned Repos',
  'Now Playing (Spotify)',
  'Code GIFs/Previews',
  'Dynamic Quotes',
]

const CommCategory = () => {
  const { selected, setSelected } = useContexts()

  return (
    <div className="flex justify-center items-center flex-col h-[90vh]">
      <h2 className="text-6xl text-gray-500 font-light dancing">
        Pack your Flavor?
      </h2>

      <div className="mt-6">
        <div className="flex flex-wrap gap-3 max-w-2xl justify-center">
          {FLAVORS.map((flavor, i) => (
            <button
              key={i}
              onClick={() => setSelected(flavor)}
              className={`btn btn-soft px-5 transition-all duration-200 ${
                selected.includes(flavor)
                  ? 'btn-secondary'
                  : 'btn-outline btn-info'
              }`}
            >
              {flavor}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CommCategory
