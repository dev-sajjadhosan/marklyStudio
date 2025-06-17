import CommCategory from '../../componenets/communityCom/CommCategory/CommCategory'
import CommHeader from '../../componenets/communityCom/CommHeader/CommHeader'
import FeaturedTemplatesShowcase from '../../componenets/communityCom/FeaturedTemplatesShowcase/FeaturedTemplatesShowcase'
import HowToTipsCorner from '../../componenets/communityCom/HowToTipsCorner/HowToTipsCorner'
import TemplateRequests from '../../componenets/communityCom/TemplateRequests/TemplateRequests'

const CommunityPage = () => {
  return (
    <>
      {/* <div className="flex justify-center items-center w-full"> */}
      <CommHeader />
      <CommCategory />
      <FeaturedTemplatesShowcase title="Templates" />
      <FeaturedTemplatesShowcase title="Github Profile" />
      <FeaturedTemplatesShowcase title="Documentation" />
      <TemplateRequests />
      <HowToTipsCorner />
    </>
  )
}

export default CommunityPage
