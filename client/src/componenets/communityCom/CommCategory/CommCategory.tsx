import { useNavigate } from 'react-router-dom'
import useContexts from '../../../hooks/useContexts'
import { enqueueSnackbar } from 'notistack'

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
  // when user choose anything from here then he will go to template page and see the result based on the click filter
  const { selected, setSelected } = useContexts()
  const nav = useNavigate()

  const handleFiter = (filter: string) => {
    setSelected(filter)
    nav(`/templates?f=${filter}`)
    enqueueSnackbar(`Your Flavor is ${selected}`, { variant: 'warning' })
  }

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
              onClick={() => handleFiter(flavor)}
              className={`btn btn-sm btn-soft px-5 transition-all duration-200 ${
                i % 2 !== 0 ? 'btn-success' : ''
              } ${
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
