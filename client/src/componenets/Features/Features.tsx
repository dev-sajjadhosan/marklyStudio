const FeaturesSection = () => {
  const features = [
    {
      icon: '✅',
      title: 'Live Markdown Editor',
      desc: 'Edit, preview, and generate markdown in real-time — no reloads, no stress.',
    },
    {
      icon: '🧠',
      title: 'AI Assistant',
      desc: 'Get smart markdown suggestions, write sections, or auto-generate README templates.',
    },
    {
      icon: '📁',
      title: 'GitHub Repo Import',
      desc: 'Paste your GitHub URL and fetch README.md files instantly.',
    },
    {
      icon: '📄',
      title: 'Export Options',
      desc: 'Download as Markdown, HTML, or even PDF for professional sharing.',
    },
    {
      icon: '🎨',
      title: 'Theme Switcher',
      desc: 'Toggle between light and dark mode for optimal reading comfort.',
    },
    {
      icon: '🔖',
      title: 'Template Marketplace',
      desc: 'Browse free community-made templates or upload your own (in-shaa-Allah 💫).',
    },
  ]
  return (
    <>
      <section className="max-w-4xl flex flex-col items-center mx-auto px-5 py-15">
        <div className="card text-center gap-1">
          <h2 className="text-4xl font-light">What Features We Have ?</h2>
          <p className="text-lg text-gray-500">
            Everything you need to build, polish, and publish your markdown docs
            faster — with ease and style.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-15">
          {features.map((feature, i) => (
            <div
              key={i}
              className="card bg-base-200 shadow-md transition hover:shadow-lg hover:scale-[1.02] duration-200"
            >
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-2">{feature.icon}</div>
                <h3 className="card-title text-xl">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default FeaturesSection
