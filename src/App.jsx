import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Stats from './components/Stats.jsx'
import Features from './components/Features.jsx'
import Programs from './components/Programs.jsx'
import Muscles from './components/Muscles.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Testimonials from './components/Testimonials.jsx'
import DownloadCTA from './components/DownloadCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // Reveal-on-scroll: every .reveal element fades/slides in once it
  // enters the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <Features />
        <Programs />
        <Muscles />
        <HowItWorks />
        <Testimonials />
        <Ticker
          reverse
          items={['No subscription', 'No ads', 'Free forever', 'Train anywhere', 'Men & Women']}
        />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  )
}
