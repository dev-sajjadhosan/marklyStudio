import type { ReadmeProps } from '../../types/editor.types'
import axios from 'axios'

import { useEffect, useState } from 'react'

const useReadmeSections = () => {
  const [sections, setSections] = useState<ReadmeProps | null>(null)
  const [names, setNames] = useState<string[] | null>(null)

  useEffect(() => {
    const fetchSections = async () => {
      const res = await axios.get('/readme.json')
      setSections(res.data)
      setNames(Object.keys(res.data).join(',').split(','))
      // console.log(res.data.project)
    }
    fetchSections()
  }, [])

  return { sections, names }
}

export default useReadmeSections
