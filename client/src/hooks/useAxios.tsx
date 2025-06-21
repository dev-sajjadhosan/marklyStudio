import axios, { type AxiosInstance } from 'axios'

let axiosP: AxiosInstance | undefined
switch (import.meta.env.VITE_MODE_EDIT) {
  case 'dev':
    axiosP = axios.create({
      baseURL: 'http://localhost:5000',
    })
    break
  case 'production':
    axiosP = axios.create({
      baseURL: import.meta.env.VITE_SERVER_API,
    })
    break
  default:
    axiosP = axios.create({
      baseURL: import.meta.env.VITE_SERVER_API,
    })
    break
}

const useAxios = () => {
  return axiosP
}

export default useAxios
