import { TbBoxAlignRight } from 'react-icons/tb'
import useAuth from '../../../hooks/useAuth'
import ActionDock from '../ActionDock/ActionDock'
import StudioHeader from '../StudioHeader/StudioHeader'
import StudioSideBar from '../StudioSideBar/StudioSideBar'
import TagsBar from '../TagsBar/TagsBar'
import WordPanel from '../WordPanel/WordPanel'
import TemplatesBar from '../TemplatesBar/TemplatesBar'
import AIChat from '../AIChat/AIChat'

const StudioEditor = () => {
  const { setRight, right, header, preview, split } = useAuth()
  return (
    <>
      <StudioHeader /> {/*  */}
      <StudioSideBar /> {/* com! */}
      <ActionDock /> {/* com! */}
      <WordPanel /> {/* com! */}
      <TagsBar /> {/* com!  */}
      <TemplatesBar />
      <AIChat />
      {/* ----------- */}
      <div className="relative flex justify-center items-center h-screen">
        {!right && (
          <button
            className="absolute bottom-5 right-5 btn btn-sm btn-soft tooltip z-90"
            data-tip="Sidebar"
            onClick={() => setRight(!right)}
          >
            <TbBoxAlignRight size={17} />
          </button>
        )}
        <div
          className={`flex ${
            split && 'justify-between'
          } h-full w-full overflow-hidden`}
        >
          <div
            className={`${
              split ? 'w-1/2' : preview ? 'w-0 hidden' : 'w-full'
            } bg-black/45 transition-all duration-200 ${
              header ? 'pt-9 px-3' : 'p-3'
            } `}
          >
            <p className="text-6xl">Editor</p>
          </div>
          <div
            className={`${
              split
                ? 'bg-indigo-400 w-1/2 flex'
                : preview
                ? 'w-full bg-indigo-400'
                : 'w-0 hidden'
            }  transition-all duration-200 ${header ? 'pt-9 px-3' : 'p-3'}`}
          >
            <p className="text-6xl">Preview</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudioEditor
