import Nav from '../components/Nav'
import Hero from '../components/Hero'
import TrustBadges from '../components/TrustBadges'
import Story from '../components/Story'
import WasDrin from '../components/WasDrin'
import VideoReveal from '../components/VideoReveal'
import Produkte from '../components/Produkte'
import Probemuster from '../components/Probemuster'
import Prozess from '../components/Prozess'
import FuerWen from '../components/FuerWen'
import Anwendungen from '../components/Anwendungen'
import SocialProof from '../components/SocialProof'
import FAQ from '../components/FAQ'
import Kontakt from '../components/Kontakt'
import Footer from '../components/Footer'
import StickyCTA from '../components/StickyCTA'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBadges />
        <Story />
        <WasDrin />
        <VideoReveal />
        <Produkte />
        <Probemuster />
        <Prozess />
        <FuerWen />
        <Anwendungen />
        <SocialProof />
        <FAQ />
        <Kontakt />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
