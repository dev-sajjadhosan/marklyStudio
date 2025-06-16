import axios from 'axios'

const axiosP = axios.create({
  baseURL: 'http://localhost:5000',
})

const useAxios = () => {
  return axiosP
}

export default useAxios
