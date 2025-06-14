import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/Home/Home'
import ErrorPage from '../../pages/Home/Error/Error'
import StudioApp from '../../pages/Home/Studio/Studio'

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studio" element={<StudioApp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Layout
