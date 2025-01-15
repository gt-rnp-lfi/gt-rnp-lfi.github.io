import NavBar from '../components/nav-bar'
import HeroSection from '../components/hero-section'
import ContextSection from '../components/context-section'
import ShowcaseSection from '../components/showcase-section'
import NewsSection from '../components/news-section'
import TechSection from '../components/tech-section'
import TeamSection from '../components/team-section'

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ContextSection />
      <ShowcaseSection />
      <NewsSection />
      <TechSection />
      <TeamSection />
    </>
  )
}

