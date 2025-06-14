import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/Home/Home'
import ErrorPage from '../../pages/Error/Error'
import StudioApp from '../../pages/Studio/Studio'
import StudioHome from '../../componenets/StudioCom/StudioHome/StudioHome'
import StudioEditor from '../../componenets/StudioCom/StudioEditor/StudioEditor'

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studio" element={<StudioApp />}>
            <Route path="/studio/home" element={<StudioHome />} />
            <Route path="/studio/editor" element={<StudioEditor />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Layout
