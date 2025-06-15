import { TbBellRinging } from 'react-icons/tb'
import email from '../../assets/email.webp'
import open from '../../assets/open.webp'

const NewsletterAndOSS = () => {
  return (
    <section id="updates-opensource" className="py-20 text-base-content">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-10">
        {/* Left: Newsletter Signup */}
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="max-w-md">
            <img src={email} alt="" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-3">Stay in the Loop</h2>
            <p className="text-gray-500 mb-6">
              Get notified when new templates drop or fresh features go live. No
              spam, pinky promise 🫶🏼
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-1">
              <input
                type="email"
                placeholder="your@email.com"
                className="input input-bordered w-full max-w-xs"
              />
              <button type="submit" className="btn btn-primary btn-soft">
                <TbBellRinging size={17} />
                Notify Me
              </button>
            </form>
          </div>
        </div>

        {/* Right: Open Source Callout */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center mt-15">
          <div className="max-w-md">
            <img src={open} alt="" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-3">Open Source</h2>
            <p className="text-gray-500 mb-4">
              Markly is built for devs, by dev. Planning to go open-source soon
              — and we want your PRs 👨‍💻
            </p>
            <a
              href="https://github.com/markly" // change this to your actual repo
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-soft btn-accent"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterAndOSS
