import NavBar from '../components/nav-bar'
import HeroSection from '../components/hero-section'
import ContextSection from '../components/context-section'
import ShowcaseSection from '../components/showcase-section'
import NewsSection from '../components/news-section'
import TechSection from '../components/tech-section'
import TeamSection from '../components/team-section'
import Footer from '../components/footer'
import IncidentSection from '../components/incident-section'

export default function Home() { //<ContextSection />
  return (
    <main className="bg-gradient-page">
      <NavBar />
      <HeroSection />
      <IncidentSection />
      <ShowcaseSection />
      <NewsSection />
      <TechSection />
      <TeamSection />
      <Footer />
    </main>
  )
}

