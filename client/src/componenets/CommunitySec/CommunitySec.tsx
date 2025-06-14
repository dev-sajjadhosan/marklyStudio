import { useState } from 'react'
import { TbArrowBarToDown, TbBrandDiscord, TbUsersPlus } from 'react-icons/tb'

const CommunitySection = () => {
  const [c, setC] = useState(0)
  const testimonials = [
    {
      name: 'CodeQueen',
      handle: '@queenofcode',
      avatar: '/avatars/queen.png',
      text: 'The template marketplace is my new obsession. Clean layouts and AI tweaks? Chef’s kiss 😘.',
    },
    {
      name: 'T3mpest',
      handle: '@tempest_xyz',
      avatar: '/avatars/tempest.png',
      text: 'I used to dread writing READMEs. Now I look forward to it. Markly is insane!',
    },
    {
      name: 'BetaBoi',
      handle: '@betadev88',
      avatar: '/avatars/beta.png',
      text: 'Used the GitHub import feature for my side project — worked flawlessly. 10/10.',
    },
    {
      name: 'LintWizard',
      handle: '@wizardlint',
      avatar: '/avatars/wizard.png',
      text: 'Markly’s export to PDF saved my life during a pitch presentation. Never going back.',
    },
    {
      name: 'DevShika',
      handle: '@shika.codes',
      avatar: '/avatars/shika.png',
      text: 'AI polishing is next-level. Took my ugly intro and made it CEO-grade 😅.',
    },
    {
      name: 'NullPrince',
      handle: '@voidisbeauty',
      avatar: '/avatars/null.png',
      text: 'Minimalist UI, blazing fast experience. Markdown tools usually suck — this one doesn’t.',
    },
    {
      name: 'BugHunter',
      handle: '@bugs4breakfast',
      avatar: '/avatars/bug.png',
      text: 'Docs are no longer an afterthought. I write them early now thanks to Markly.',
    },
    {
      name: 'SyntaxSage',
      handle: '@sageSyntax',
      avatar: '/avatars/sage.png',
      text: 'Tried it once, stayed for the community. Shared 3 templates, got amazing feedback!',
    },
    {
      name: 'PixelTamer',
      handle: '@pxl_tmr',
      avatar: '/avatars/pixel.png',
      text: 'Built my portfolio README here and recruiters actually mentioned it. Wild.',
    },
    {
      name: 'StackMama',
      handle: '@mamastack',
      avatar: '/avatars/mama.png',
      text: 'Markly + dark mode + emoji support = pure markdown bliss 💜',
    },
    {
      name: 'CLIcat',
      handle: '@cmdkitten',
      avatar: '/avatars/clicat.png',
      text: 'Markdown preview is crispy. Finally feels like I know what I’m doing lol.',
    },
    {
      name: 'AsyncAli',
      handle: '@async.ali',
      avatar: '/avatars/ali.png',
      text: 'Templates, exports, and AI in one place? Someone finally gets dev pain.',
    },
    {
      name: 'Zeno',
      handle: '@zen0flow',
      avatar: '/avatars/zeno.png',
      text: 'Switched from Notion and I’m not even mad. Markly just *gets* markdown.',
    },
  ]

  return (
    <section id="community" className="py-20 bg-base-100 text-base-content">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Join the Markly Community</h2>
        <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
          Share your templates, get feedback, and vibe with fellow devs. It’s
          open, creative, and growing fast 🚀
        </p>

        {/* Testimonials Carousel */}
        <div className="w-full max-w-11/12 mx-auto flex flex-col">
          <div className=" grid grid-cols-2 gap-5 px-10">
            {testimonials.slice(0, 6).map((t, index) => (
              <div
                key={index}
                className="card flex-col-reverse bg-base-300 shadow p-5 shrink-0"
              >
                <div className="flex gap-4 items-center mt-3">
                  <img
                    //   src={t.avatar}
                    src="/icon.png"
                    alt={t.name}
                    width={21}
                    className="rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p
                      className="text-sm text-gray-400 tooltip"
                      data-tip={t.handle}
                    >
                      {t.name}
                    </p>
                  </div>
                </div>
                <p className="text-sm italic text-gray-500">"{t.text}"</p>
              </div>
            ))}
          </div>
          <div className="self-center flex items-center gap-1.5 mt-5">
            {[...Array(10).keys()].map((i) => (
              <div
                onClick={() => setC(i)}
                className={`w-2 h-3 p-1 rounded-full duration-150 cursor-pointer active:scale-95 ${
                  i === c ? 'bg-warning scale-110' : 'bg-neutral'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Social Call-To-Action */}
        <div className="mt-10 space-y-4">
          <p className="text-lg">
            👥 Got a cool template? Wanna help other devs?
          </p>
          <div className="flex items-center justify-center gap-1.5">
            <a
              href="https://github.com/markly"
              target="_blank"
              className="btn btn-soft btn-primary btn-sm"
            >
              <TbArrowBarToDown size={17} />
              Upload to community
            </a>
            <a
              href="https://github.com/markly"
              target="_blank"
              className="btn btn-soft btn-success btn-sm"
            >
              <TbUsersPlus size={17} />
              Join with us
            </a>
            <a
              href="https://discord.gg/markly"
              target="_blank"
              className="btn btn-secondary btn-soft btn-sm"
            >
              <TbBrandDiscord size={17} />
              Join Our Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
