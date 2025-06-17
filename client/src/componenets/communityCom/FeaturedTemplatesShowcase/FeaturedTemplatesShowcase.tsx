import fake from '../../../assets/fake.png'

import React, { useState } from 'react'
import { SiReasonstudios } from 'react-icons/si'
import {
  TbFlame,
  TbScreenShare,
  TbSparkles,
  TbTransitionBottom,
  TbTrendingUp,
} from 'react-icons/tb'
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

const FeaturedTemplatesShowcase: React.FC<{
  title?: string
  data?: string[]
}> = ({ title, data }) => {
  const [temFeature, seTemFeature] = useState('hot')
  return (
    <section className="p-5 w-full flex flex-col my-15">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-3xl">
          {' '}
          {title}
          <sup className="badge badge-sm badge-soft badge-info m-1">aaa</sup>
        </h2>
        <div className="join">
          <button
            className={`btn btn-sm join-item px-5 ${
              temFeature === 'hot' ? 'btn-error' : 'btn-soft btn-error'
            }`}
            onClick={() => seTemFeature('hot')}
          >
            <TbFlame size={13} /> Hot
          </button>
          <button
            className={`btn btn-sm join-item px-5 ${
              temFeature === 'new' ? 'btn-success' : 'btn-soft btn-success'
            }`}
            onClick={() => seTemFeature('new')}
          >
            <TbSparkles size={13} /> New
          </button>
          <button
            className={`btn btn-sm join-item px-5 ${
              temFeature === 'popular' ? 'btn-primary' : 'btn-soft btn-primary'
            }`}
            onClick={() => seTemFeature('popular')}
          >
            <TbTrendingUp size={13} /> Popular
          </button>
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
                <button className="btn btn-sm btn-soft btn-accent">
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
      <button className="btn btn-sm btn-soft btn-success px-5 mt-7 self-center">
        More Templates
      </button>
    </section>
  )
}

export default FeaturedTemplatesShowcase
