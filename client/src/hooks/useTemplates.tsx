import React, {
  useCallback,
  useEffect,
  useState,
  type SetStateAction,
} from 'react'
import useAxios from './useAxios'
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

export interface TemplateP {
  _id?: string
  picture: string
  title: string
  name: string
  username: string
  category: string
  description: string
  createTime: string
  createDate: string
  file: object
  likes?: string[]
  comments?: string[]
}

interface TemplateHookProps {
  data: TemplateP[]
  isLoading: boolean
  page: number
  setPage: React.Dispatch<SetStateAction<number>>
  totalPage: number[]
  isFetched: boolean
}

const useTemplates = (): TemplateHookProps => {
  const axios = useAxios()
  const queryClient = useQueryClient()
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const totalPage = Array.from(Array(Math.ceil(total / 12)).keys())

  const templateFetch = useCallback(
    async (page: number) => {
      const res = await axios(`/template/all?p=${page}&c=${12}`)
      console.log('Templates Datas:', res.data)
      setTotal(res.data?.totalPages)
      localStorage.setItem('totalPage', res.data?.totalPages)
      return await res.data?.data
    },
    [axios],
  )

  const {
    data = [],
    isLoading,
    isFetched,
    isPlaceholderData,
  } = useQuery({
    queryKey: ['projects', page],
    queryFn: () => templateFetch(page),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  })

  useEffect(() => {
    if (!isPlaceholderData && data?.hasMore) {
      queryClient.prefetchQuery({
        queryKey: ['projects', page + 1],
        queryFn: () => templateFetch(page + 1),
      })
    }
  }, [page, queryClient, isPlaceholderData, data?.hasMore, templateFetch])

  return { data, isLoading, page, setPage, totalPage, isFetched }
}
export default useTemplates
