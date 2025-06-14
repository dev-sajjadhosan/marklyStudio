import { SiReasonstudios } from "react-icons/si";

const DemoAndCTA = () => {
  return (
    <section id="demo-pricing" className="py-20 text-base-content">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left: Text & CTA */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-light mb-4">
            Fast, Simple, and <span className="text-primary font-bold">100% Free</span>
          </h2>
          <p className="text-lg text-gray-500 mb-6">
            Completely free. <br />
            For the @dev.community 💖  
            No logins, no paywalls — just Markdown magic ✨
          </p>
          <a href="/editor" className="btn btn-sm btn-soft btn-warning px-5">
            <SiReasonstudios size={17} />

            Try Studio
          </a>
        </div>

        {/* Right: Video or GIF */}
        <div className="lg:w-1/2 w-full">
          {/* Swap the iframe with a Loom, YouTube, or just a .gif */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.loom.com/embed/your-demo-id"
              className="w-full aspect-video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            {/* or use <img src="/demo.gif" alt="Markly demo" className="w-full" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoAndCTA;
