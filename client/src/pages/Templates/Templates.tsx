import { Link, useLocation } from 'react-router-dom'
import BackBtn from '../../componenets/Shared/BackBtn/BackBtn'
// import icon from '../../../public/icon.png'
import fake from '../../assets/fake.png'

import {
  TbFileSpreadsheet,
  TbScreenShare,
  TbTransitionBottom,
} from 'react-icons/tb'
import { SiReasonstudios } from 'react-icons/si'
import SearchBar from '../../componenets/Shared/SearchBar/SearchBar'
import TemStatus from '../../componenets/Shared/TemStatus/TemStatus'
import Pagination from '../../componenets/Shared/Pagination/Pagination'

type Template = {
  id: string
  author: string
  image: string
  title: string
  description: string
  downloadUrl: string
  exampleCode: string
}

const dummyTemplates: Template[] = [
  {
    id: '1',
    title: 'Clean README Template',
    description: 'A minimal, clean README template for any project.',
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
  },
  {
    id: '2',
    title: 'Open Source Project Template',
    description: 'Designed for open source repos with contribution guidelines.',
    author: 'codeQueen',
    downloadUrl: '#',
    image: 'https://picsum.photos/id/1025/600/400',
    exampleCode: `
# Open Source Project

Welcome! Thanks for considering contributing to this project.

## Contributing

Please read \`CONTRIBUTING.md\` for guidelines.

## License

MIT License © 2025
    `,
  },
  {
    id: '3',
    title: 'API Documentation Template',
    description: 'Perfect for REST APIs, includes endpoints and auth details.',
    author: 'apiMaster',
    downloadUrl: '#',
    image: 'https://picsum.photos/id/1043/600/400',
    exampleCode: `
# API Documentation

## Authentication

Use an API key in the \`Authorization\` header.

## Endpoints

### GET /users

Returns a list of users.

\`\`\`bash
curl -H "Authorization: Bearer YOUR_API_KEY" https://api.example.com/users
\`\`\`
    `,
  },
  {
    id: '4',
    title: 'CLI Tool README',
    description: 'Great for command-line interface tools with usage examples.',
    author: 'cliNinja',
    downloadUrl: '#',
    image: 'https://picsum.photos/id/1038/600/400',
    exampleCode: `
# CLI Tool

## Installation

\`\`\`bash
npm install -g cli-tool
\`\`\`

## Commands

\`\`\`bash
cli-tool init
cli-tool build --prod
\`\`\`
    `,
  },
  {
    id: '4',
    title: 'CLI Tool README',
    description: 'Great for command-line interface tools with usage examples.',
    author: 'cliNinja',
    downloadUrl: '#',
    image: 'https://picsum.photos/id/1038/600/400',
    exampleCode: `
# CLI Tool

## Installation

\`\`\`bash
npm install -g cli-tool
\`\`\`

## Commands

\`\`\`bash
cli-tool init
cli-tool build --prod
\`\`\`
    `,
  },
  {
    id: '4',
    title: 'CLI Tool README',
    description: 'Great for command-line interface tools with usage examples.',
    author: 'cliNinja',
    downloadUrl: '#',
    image: 'https://picsum.photos/id/1038/600/400',
    exampleCode: `
# CLI Tool

## Installation

\`\`\`bash
npm install -g cli-tool
\`\`\`

## Commands

\`\`\`bash
cli-tool init
cli-tool build --prod
\`\`\`
    `,
  },
  {
    id: '4',
    title: 'CLI Tool README',
    description: 'Great for command-line interface tools with usage examples.',
    author: 'cliNinja',
    downloadUrl: '#',
    image: 'https://picsum.photos/id/1038/600/400',
    exampleCode: `
# CLI Tool

## Installation

\`\`\`bash
npm install -g cli-tool
\`\`\`

## Commands

\`\`\`bash
cli-tool init
cli-tool build --prod
\`\`\`
    `,
  },
  {
    id: '5',
    title: 'Python Package README',
    description: 'README template for Python packages with setup instructions.',
    author: 'pyCoder',
    downloadUrl: '#',
    image: 'https://picsum.photos/id/1057/600/400',
    exampleCode: `
# Python Package

## Installation

\`\`\`bash
pip install my-python-package
\`\`\`

## Usage

\`\`\`python
import mypackage

mypackage.run()
\`\`\`
    `,
  },
  {
    id: '6',
    title: 'React Component Library README',
    description: 'Focused on React components with examples and props.',
    author: 'reactFan',
    downloadUrl: '#',
    image: 'https://picsum.photos/id/1062/600/400',
    exampleCode: `
# React Component Library

## Installation

\`\`\`bash
npm install react-component-library
\`\`\`

## Example

\`\`\`jsx
import { Button } from 'react-component-library';

<Button variant="primary">Click me</Button>
\`\`\`
    `,
  },
]

const TemplatesPage = () => {
  // const filter = new URLSearchParams(useLocation().search).get('f')

  return (
    <>
      <section className="p-5">
        <div className="flex justify-between items-center">
          <BackBtn />
          <h1 className="text-3xl font-light hidden">Templates</h1>
          <div className="flex items-center gap-1.5">
            <Link
              to={'/markly-tutorial-page'}
              className="btn btn-sm btn-soft btn-info"
            >
              <TbFileSpreadsheet size={15} />
              CheatSheet
            </Link>
            <button className="btn btn-sm btn-soft btn-accent">
              Filter by
            </button>
            <button className="btn btn-sm btn-soft btn-accent">
              Filter by
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-7">
          <div className="hero bg-base-300 h-[77vh] mb-7 rounded-2xl">
            <div className="hero-content flex-col text-center max-w-xl">
              <h2 className="text-6xl font-light text-gray-300 dancing">
                Get's Templates
              </h2>
              <p className="text-lg text-gray-400">
                Here you can get any Templates ?
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5">
                <button className="btn btn-sm btn-soft btn-error px-5">
                  Profile
                </button>
                <button className="btn btn-sm btn-soft btn-warning px-5">
                  Documentation
                </button>
                <button className="btn btn-sm btn-soft btn-accent px-5">
                  Project
                </button>
                <button className="btn btn-sm btn-soft btn-warning px-5">
                  Application
                </button>
                <button className="btn btn-sm btn-soft btn-primary px-5">
                  Tools
                </button>
                <button className="btn btn-sm btn-soft btn-warning px-5">
                  Open-Source
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-15">
          <div className="p-5 w-full flex flex-wrap gap-2.5 items-center justify-between">
            <SearchBar size="sm" />
            <div className="mx-auto md:mx-0">
              <TemStatus />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
            {dummyTemplates.map((tpl) => (
              <div
                key={tpl.id}
                className="card justify-between bg-base-200 p-7 rounded-xl gap-1.5"
              >
                <figure className="h-60 mb-2.5">
                  <img src={fake} alt="" className="rounded-lg" />
                </figure>
                <div className="">
                  <div className="flex justify-between items-center">
                    <h3 className="text-md">{tpl.title}</h3>
                    <small className="text-xs link link-error no-underline">
                      @{tpl.author}
                    </small>
                  </div>
                  <p className="text-xs text-gray-500">{tpl.description}</p>
                  <div className="flex items-center gap-1.5 mt-3.5">
                    <a
                      href={tpl.downloadUrl}
                      target="_blank"
                      className="btn btn-sm btn-soft btn-info"
                      rel="noopener noreferrer"
                    >
                      <TbTransitionBottom size={13} />
                      Download
                    </a>
                    <button
                      className="btn btn-sm btn-soft btn-accent"
                      onClick={() =>
                        (
                          document.getElementById(
                            'preview_modal',
                          ) as HTMLDialogElement
                        )?.showModal()
                      }
                    >
                      <TbScreenShare size={13} />
                      Preview
                    </button>
                    <button className="btn btn-sm btn-soft btn-warning">
                      <SiReasonstudios size={13} />
                      Open to Editor
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Pagination mode="roman" />
        </div>
      </section>
    </>
  )
}

export default TemplatesPage
