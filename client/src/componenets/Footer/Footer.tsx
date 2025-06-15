import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa6'
import footer from '../../assets/footer.webp'
import { MdOutlineAlternateEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <>
      <footer className="flex justify-between items-center text-neutral-content px-13">
        <aside>
          <img src="/icon.png" width={50} alt="" />
          <p className="text-2xl">Maekly</p>
          <p className="text-gray-500">
            © 2025 Markly. Open-source under MIT License.
          </p>
        </aside>
        <div className="max-w-xs">
          <img src={footer} alt="" />
        </div>
      </footer>
      <footer className="flex flex-col md:flex-row justify-between items-center gap-3 p-9 text-base-content border-base-300 border-t">
        <aside className="grid-flow-col items-center">
          <p className="md:w-md text-gray-500">
            © 2025 Markly — Built with ❤️ for the community. Some rights
            reserved.
          </p>
        </aside>
        <div className="flex items-center gap-1.5">
          <a
            href=""
            className="btn btn-sm btn-soft btn-primary tooltip"
            data-tip="Discord"
          >
            <FaDiscord size={17} />
          </a>
          <a
            href=""
            className="btn btn-sm btn-soft btn-neutral tooltip"
            data-tip="Github"
          >
            <FaGithub size={17} />
          </a>
          <a
            href=""
            className="btn btn-sm btn-soft btn-info tooltip"
            data-tip="Linkedin"
          >
            <FaLinkedin size={17} />
          </a>
          <a
            href=""
            className="btn btn-sm btn-soft btn-warning tooltip"
            data-tip="G-mail"
          >
            <MdOutlineAlternateEmail size={17} />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
