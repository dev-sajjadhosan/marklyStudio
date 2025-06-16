import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/Home/Home'
import ErrorPage from '../../pages/Error/Error'
import StudioApp from '../../pages/Studio/Studio'
import StudioHome from '../../componenets/StudioCom/StudioHome/StudioHome'
import StudioEditor from '../../componenets/StudioCom/StudioEditor/StudioEditor'
import AiGenerate from '../../pages/AiGenerate/AiGenerate'
import PublishModal from '../../componenets/communityCom/PublishModal/PublishModal'
import CommunityPage from '../../pages/Community/Community'

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <PublishModal />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studio" element={<StudioApp />}>
            <Route path="/studio/home" element={<StudioHome />} />
            <Route path="/studio/editor" element={<StudioEditor />} />
          </Route>
          <Route path="/ai-generate" element={<AiGenerate />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Layout
