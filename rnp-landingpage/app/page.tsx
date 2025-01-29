import NavBar from '../components/nav-bar'
import HeroSection from '../components/hero-section'
import ShowcaseSection from '../components/showcase-section'
import NewsSection from '../components/news-section'
import TechSection from '../components/tech-section'
import TeamSection from '../components/team-section'
import Footer from '../components/footer'
import IncidentSection from '../components/incident-section'
import IncidentResponseSection from '../components/incident-response-section'
import PropostaSection from '../components/proposal-section'
import SponsorSection from '../components/sponsor-section'

export default function Home() {
  return (
    <main className="bg-gradient-page">
      <NavBar />
      <HeroSection />
      <IncidentSection />
      <IncidentResponseSection />
      <PropostaSection />
      <ShowcaseSection />
      <NewsSection />
      <TechSection />
      <SponsorSection />
      <TeamSection />
      <Footer />
    </main>
  )
}

