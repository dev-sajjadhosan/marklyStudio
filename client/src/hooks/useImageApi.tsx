import axios from 'axios'
import { useCallback, useState } from 'react'
interface ImageApiForm {
  files: FileList
}

const useImageApi = () => {
  const imgbb = `${import.meta.env.VITE_IMG_URL}?key=${
    import.meta.env.VITE_IMG_KEY
  }`
  const [image, setImage] = useState([])
  const [url, setUrl] = useState(null)

  type HandleImageApi = (get: ImageApiForm | null) => void
  const handleImageApi: HandleImageApi = useCallback(
    async (imageFile) => {
      if (!imageFile) return
      await axios
        .post(
          imgbb,
          { image: imageFile },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        .then((re) => {
          setImage(re.data?.data)
          setUrl(re.data?.data?.url)
          return
        })
    },
    [imgbb],
  )

  return { image, url, handleImageApi, setUrl, setImage }
}
export default useImageApi
