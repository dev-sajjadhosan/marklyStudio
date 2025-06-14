const HowItWork = () => {
  const steps = [
    {
      step: '1',
      title: 'Paste or Upload',
      desc: 'Drop your markdown file or paste your GitHub repo URL — super simple start.',
      icon: '📥',
    },
    {
      step: '2',
      title: 'Edit & Preview',
      desc: 'Make changes in real-time with a split-screen live preview setup.',
      icon: '📝',
    },
    {
      step: '3',
      title: 'AI Assistance',
      desc: 'Get help writing sections, fixing grammar, or generating full templates instantly.',
      icon: '🤖',
    },
    {
      step: '4',
      title: 'Download or Publish',
      desc: 'Export your work as .md, PDF, or HTML — or share it with your team.',
      icon: '📤',
    },
  ];

  return (
    <section id="how-it-works" className="py-15 text-base-content">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">How Markly Works</h2>
        <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
          From repo to ready — see how easy it is to create high-quality Markdown with Markly.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card bg-base-200 p-7 rounded-2xl cursor-pointer hover:translate-1.5 transition duration-200"
            >
              <div className="flex flex-col items-center justify-center text-center space-y-3">
                <div className="text-5xl">{step.icon}</div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
