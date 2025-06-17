import axios from 'axios'

const axiosP = axios.create({
  // baseURL: 'http://localhost:5000',
  baseURL: import.meta.env.VITE_SERVER_API,
})

const useAxios = () => {
  return axiosP
}

export default useAxios
