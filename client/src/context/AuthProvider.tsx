import type { ReactNode } from 'react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AuthContext } from './AuthContext'
import type * as monacoEditor from 'monaco-editor'

const AuthProvider = ({ children }: { children: ReactNode }) => {
  // localStorage.setItem('visit', JSON.stringify(false))

  // ⚙️ UI Toggles
  const [tag, setTag] = useState(() =>
    JSON.parse(localStorage.getItem('tag') ?? 'true'),
  )
  const [bottom, setBottom] = useState(() =>
    JSON.parse(localStorage.getItem('bottom') ?? 'true'),
  )
  const [header, setHeader] = useState(() =>
    JSON.parse(localStorage.getItem('header') ?? 'true'),
  )
  const [right, setRight] = useState(() =>
    JSON.parse(localStorage.getItem('right') ?? 'true'),
  )
  const [footer, setFooter] = useState(() =>
    JSON.parse(localStorage.getItem('footer') ?? 'false'),
  )
  const [panel, setPanel] = useState(() =>
    JSON.parse(localStorage.getItem('panel') ?? 'false'),
  )
  const [all, setAll] = useState(() =>
    JSON.parse(localStorage.getItem('all') ?? 'false'),
  )
  const [preview, setPreview] = useState(() =>
    JSON.parse(localStorage.getItem('preview') ?? 'false'),
  )
  const [split, setSplit] = useState(() =>
    JSON.parse(localStorage.getItem('split') ?? 'true'),
  )
  const [mobile, setMobile] = useState(() =>
    JSON.parse(localStorage.getItem('mobile') ?? 'false'),
  )
  const [template, setTemplate] = useState(() =>
    JSON.parse(localStorage.getItem('template') ?? 'false'),
  )

  const [ai, setAi] = useState(false)
  const [theme, setTheme] = useState(false) // false = dark, true = light
  const [setting, setSetting] = useState(false)

  const editorRef = useRef<monacoEditor.editor.IStandaloneCodeEditor | null>(
    null,
  )
  const monacoRef = useRef<typeof monacoEditor | null>(null)

  const [line, setLine] = useState(0)
  const [col, setCol] = useState(0)
  const [example, setExample] = useState<string[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [markdownText, setMarkdownText] = useState(``)

  // 📝 community content
  const [selected, setSelected] = useState<string>('')

  useEffect(() => {
    const isVisit = JSON.parse(localStorage.getItem('visit') ?? 'false')
    if (!isVisit) {
      setMarkdownText(`<p align="center">
    <a href="https://dev-sajjadhosan.github.io" target="_blank">
      <img src="./assets/dev_sajjadhosan.png" alt="Hey, I'm Sajjad Hosan!" width="80%">
    </a>
  </p>

  <h1 align="center">Hey, I'm <span style="color:#00C9A7">Mohammad Sajjad Hosan</span> 👋</h1>

  <p align="center">
    🧠 MERN Stack Developer • 🔥 Code Alchemist • 🇧🇩 From Bangladesh<br/>
    💡 Turning ideas into interactive realities | Obsessed with dev & design
  </p>

  ---

  ## 🚀 About Me

  - 🎯 **Self-taught builder** who crafts fun, scalable, and impactful apps
  - ⚙️ **MERN + TypeScript + Firebase** are my comfort zones
  - 🧪 **Always experimenting** — currently playing with 3D web & AI stuff 🔮
  - 🤝 **People-first mindset** — real users, real feedback, real growth
  - 💬 Curious about my journey or want to collaborate? [Ask me anything!](https://github.com/dev-sajjadhosan/issues)
  - 🧘‍♂️ **Philosophy**: *If you're not having fun building it, you're doing it wrong*

  ---

  ## 🛠 My Tech Toolbox

  <p align="center">
    <!-- Frontend -->
    <img src="https://skillicons.dev/icons?i=c,html,css,js,ts,tailwind,react,nextjs,electron" />
    <br/>
    <!-- Backend -->
    <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,firebase,socketio" />
    <br/>
    <!-- Tools -->
    <img src="https://skillicons.dev/icons?i=git,github,vercel,vscode,postman" />
  </p>

  ---

  ## 🌟 Highlights

  - ✅ Built **full-stack apps** with real users and real feedback
  - 🧩 Designed **reusable components & scalable APIs**
  - 💬 Contributor to **open-source**, always open to ideas
  - 🧠 Made **500+ yearly GitHub contributions** and counting
  - 🧑‍🤝‍🧑 Supportive in **community forums & issue discussions**

  ---

  ## 📈 GitHub Vibes

  <p align="center">
    <img src="https://github-readme-stats.vercel.app/api?username=dev-sajjadhosan&show_icons=true&theme=tokyonight&hide_border=true" height="180px"/>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=dev-sajjadhosan&layout=compact&theme=tokyonight&hide_border=true" height="180px"/>
  </p>

  ---

  ## 🧩 Fun Facts

  - 🎮 Projects that *feel like games or tools*? I love those!
  - 🧪 Breaking things on purpose just to fix them better? Yes, please.
  - 🌌 Big dream: Build something *millions love* — useful, open, and beautiful

  ---

  ## 🔗 Connect With Me

  <p align="center">
    <a href="mailto:devsajjadhosan@gmail.com">
      <img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" />
    </a>
    <a href="https://www.linkedin.com/in/devsajjadhosan">
      <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
    </a>
    <a href="https://github.com/dev-sajjadhosan">
      <img src="https://img.shields.io/badge/GitHub-171515?style=for-the-badge&logo=github&logoColor=white" />
    </a>
    <a href="https://web.facebook.com/MohammadSajjadHosan0">
      <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" />
    </a>
  </p>

  ---

  <p align="center">
    <em>“Code like it's art. Design like it speaks. Ship like it's alive.”</em> — <strong>Me, probably 😎</strong>
  </p>

  ---
  `)
    }
  }, [])

  useEffect(() => {
    setTag(JSON.parse(localStorage.getItem('tag') ?? 'true'))
    setBottom(JSON.parse(localStorage.getItem('bottom') ?? 'true'))
    setHeader(JSON.parse(localStorage.getItem('header') ?? 'true'))
    setRight(JSON.parse(localStorage.getItem('right') ?? 'true'))
    setFooter(JSON.parse(localStorage.getItem('footer') ?? 'false'))
    setPanel(JSON.parse(localStorage.getItem('panel') ?? 'false'))
    setAll(JSON.parse(localStorage.getItem('all') ?? 'false'))
    setPreview(JSON.parse(localStorage.getItem('preview') ?? 'false'))
    setSplit(JSON.parse(localStorage.getItem('split') ?? 'true'))
    setMobile(JSON.parse(localStorage.getItem('mobile') ?? 'false'))
    setTemplate(JSON.parse(localStorage.getItem('template') ?? 'false'))
  }, [])

  useEffect(() => {
    localStorage.setItem('first', JSON.stringify(true))
    localStorage.setItem('tag', JSON.stringify(tag ?? true))
    localStorage.setItem('bottom', JSON.stringify(bottom ?? true))
    localStorage.setItem('header', JSON.stringify(header ?? true))
    localStorage.setItem('right', JSON.stringify(right ?? true))
    localStorage.setItem('footer', JSON.stringify(footer ?? false))
    localStorage.setItem('panel', JSON.stringify(panel ?? false))
    localStorage.setItem('all', JSON.stringify(all ?? false))
    localStorage.setItem('preview', JSON.stringify(preview ?? false))
    localStorage.setItem('split', JSON.stringify(split ?? true))
    localStorage.setItem('mobile', JSON.stringify(mobile ?? false))
    localStorage.setItem('template', JSON.stringify(template ?? false))
  }, [
    all,
    bottom,
    footer,
    header,
    mobile,
    panel,
    preview,
    right,
    split,
    tag,
    template,
  ])

  const handleAllBars = useCallback(() => {
    if (!all) {
      setAll(true)
      setTag(false)
      setBottom(false)
      setHeader(false)
      setRight(false)
      setFooter(false)
      setPanel(false)
    } else {
      setAll(false)
      setTag(false)
      setBottom(true)
      setHeader(false)
      setRight(true)
      setFooter(false)
      setPanel(false)
    }
  }, [all])

  const insertAtCursor = useCallback((text: string) => {
    const editor = editorRef.current
    const monaco = monacoRef.current

    if (editor && monaco) {
      const selection = editor.getSelection()
      if (!selection) return

      const range = new monaco.Range(
        selection.startLineNumber,
        selection.startColumn,
        selection.endLineNumber,
        selection.endColumn,
      )

      editor.executeEdits('', [
        {
          range,
          text,
          forceMoveMarkers: true,
        },
      ])

      editor.focus()
    }
  }, [editorRef, monacoRef])

  const contextValues = useMemo(
    () => ({
      // UI layout state
      all,
      tag,
      bottom,
      header,
      right,
      footer,
      panel,
      setAll,
      setTag,
      setBottom,
      setHeader,
      setRight,
      setFooter,
      setPanel,
      handleAllBars,
      setting,
      setSetting,
      // actions
      preview,
      setPreview,
      split,
      setSplit,
      mobile,
      setMobile,
      template,
      setTemplate,
      ai,
      setAi,
      theme,
      setTheme,
      // editor text
      markdownText,
      setMarkdownText,
      isEditing,
      setIsEditing,
      //
      editorRef,
      monacoRef,
      line,
      setLine,
      col,
      setCol,
      example,
      setExample,
      selected,
      setSelected,
      insertAtCursor,
    }),
    [
      all,
      tag,
      bottom,
      header,
      right,
      footer,
      panel,
      preview,
      split,
      mobile,
      template,
      ai,
      theme,
      markdownText,
      handleAllBars,
      editorRef,
      monacoRef,
      setting,
      setSetting,
      line,
      setLine,
      col,
      setCol,
      example,
      setExample,
      isEditing,
      setIsEditing,
      selected,
      setSelected,
      insertAtCursor,
    ],
  )

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
