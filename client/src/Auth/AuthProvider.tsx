import { useState } from 'react'
import { AuthContext } from './AuthContext'

import type { ReactNode } from 'react'

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [tag, setTag] = useState(false)
  const [bottom, setBottom] = useState(true)
  const [header, setHeader] = useState(true)
  const [right, setRight] = useState(true)
  const [footer, setFooter] = useState(false)
  const [panel, setPanel] = useState(true)
  const [all, setAll] = useState(false)
  // action bar
  const [preview, setPreview] = useState(false)
  const [split, setSplit] = useState(true)
  const [mobile, setMobile] = useState(false)
  const [template, setTemplate] = useState(false)
  const [ai, setAi] = useState(false)
  const [theme, setTheme] = useState(false) // if true then light or false then dark

  const handleAllBars = () => {
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
  }

  const contextValues = {
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
  }

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
