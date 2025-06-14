import AIDemo from '../../componenets/AiDemo/AiDemo'
import Banner from '../../componenets/Banner/Banner'
import CommunitySection from '../../componenets/CommunitySec/CommunitySec'
import DemoAndCTA from '../../componenets/DemoACta/DemoACta'
import FeaturesSection from '../../componenets/Features/Features'
import Footer from '../../componenets/Footer/Footer'
import Header from '../../componenets/Header/Header'
import HowItWork from '../../componenets/HowItWork/HowItWork'
import NewsletterAndOSS from '../../componenets/NewsletterAndOSS/NewsletterAndOSS'
import TemplateGallery from '../../componenets/TemplateGallary/TemplateGallary'

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <FeaturesSection />
      <HowItWork />
      <AIDemo />
      <TemplateGallery />
      <CommunitySection />
      <DemoAndCTA />
      <NewsletterAndOSS />
      <Footer />
    </>
  )
}

export default HomePage
