import { TbTemplate } from 'react-icons/tb'

type SIZE = 'sm' | 'md' | 'lg' | 'xl'

const SearchBar = ({ size = 'md' }: { size?: SIZE }) => {
  return (
    <>
      <form className="">
        <div
          className={`relative w-${size} flex items-center justify-between cursor-text rounded-xl border  border-base-300`}
        >
          <TbTemplate size={31} className="mx-3.5" />
          <input
            type="name"
            name="search"
            className="py-2 w-full outline-none focus:outline-none text-sm font-light tracking-wide"
            placeholder="Search by"
          />
          <select
            id="status"
            className="py-2 px-3 !bg-base-100 outline-none border-l border-base-300 mr-2.5 text-sm font-light "
          >
            <option value="all" defaultChecked>
              All
            </option>
            <option value="profile">Profile</option>
            <option value="documentation">Documentation</option>
            <option value="project">Project</option>
            <option value="app">Application</option>
            <option value="cli-tools">Tools</option>
          </select>
        </div>
      </form>
    </>
  )
}
export default SearchBar
