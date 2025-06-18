import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/Home/Home'
import ErrorPage from '../../pages/Error/Error'
import StudioApp from '../../pages/Studio/Studio'
import StudioHome from '../../componenets/StudioCom/StudioHome/StudioHome'
import StudioEditor from '../../componenets/StudioCom/StudioEditor/StudioEditor'
import AiGenerate from '../../pages/AiGenerate/AiGenerate'
import PublishModal from '../../componenets/communityCom/PublishModal/PublishModal'
import CommunityPage from '../../pages/Community/Community'
import AllRequestPage from '../../pages/Community/AllRequestPage'
import RequestViewModal from '../../componenets/communityCom/TemplateRequests/RequestView'
import CreateRequestView from '../../componenets/communityCom/TemplateRequests/CreateRequestView'
import AcceptViewModal from '../../componenets/communityCom/TemplateRequests/AcceptView/AcceptView'
import PreviewModal from '../../componenets/communityCom/FeaturedTemplatesShowcase/PreviewModal'
import TemplatesPage from '../../pages/Templates/Templates'
import FeedbackModal from '../../componenets/Shared/Feedback/Feedback'

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <FeedbackModal />
        <PublishModal />
        <RequestViewModal />
        <CreateRequestView />
        <AcceptViewModal />
        <PreviewModal />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studio" element={<StudioApp />}>
            <Route path="/studio/home" element={<StudioHome />} />
            <Route path="/studio/editor" element={<StudioEditor />} />
          </Route>
          <Route path="/ai-generate" element={<AiGenerate />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/all-requests" element={<AllRequestPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Layout
