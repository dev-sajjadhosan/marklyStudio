import { TbTransitionBottom } from 'react-icons/tb'
import fake from '../../../assets/fake.png'
import { SiReasonstudios } from 'react-icons/si'

const PreviewModal = () => {
  const dummy = {
    id: '1',
    title: 'Clean README Template',
    description:
      'A minimal, clean README template for any project.A minimal, clean README template for any project.A minimal, clean README template for any project.A minimal, clean README template for any project.A minimal, clean README template for any project.A minimal, clean README template for any project.A minimal, clean README template for any project.A minimal, clean README template for any project.A minimal, clean README template for any project.A minimal, clean README template for any project.',
    author: 'devSajjad',
    downloadUrl: '#',
    image: 'https://picsum.photos/id/1018/600/400', // placeholder
    exampleCode: `
# Project Title

A brief description of what this project does and who it’s for.

## Installation

\`\`\`bash
npm install my-project
\`\`\`

## Usage

\`\`\`js
import { doCoolStuff } from 'my-project';

doCoolStuff();
\`\`\`
    `,
  }
  return (
    <>
      <dialog className="modal" id="preview_modal">
        <div className="modal-box min-w-4xl w-11/12 p-7">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl">
              Preview{' '}
              <span className="link link-error no-underline text-sm">
                Icon Github Profile
              </span>
            </h2>
            <div className="flex items-center gap-1.5">
              <a
                href={dummy.downloadUrl}
                target="_blank"
                className="btn btn-sm btn-soft btn-info"
                rel="noopener noreferrer"
              >
                <TbTransitionBottom size={13} />
                Download
              </a>
              <form method="dialog">
                <button className="btn btn-sm btn-soft btn-error">Close</button>
              </form>
            </div>
          </div>
          <div className="mt-3 flex flex-col">
            <figure className=" mb-2.5 mx-auto p-5">
              <img
                src={fake}
                alt=""
                width={430}
                className="rounded-lg object-cover"
              />
            </figure>
            <div className="mt-2.5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg">{dummy.title}</h3>
                <small className="text-sm link link-error no-underline">
                  @{dummy.author}
                </small>
              </div>
              <p className="text-xs text-gray-500 w-11/12">
                {dummy.description}
              </p>
              <div className="mt-2.5 flex items-center justify-end gap-1.5">
                <button className="btn btn-sm btn-soft btn-warning">
                  <SiReasonstudios size={13} />
                  Open to Editor
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default PreviewModal
