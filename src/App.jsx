import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ClanSection from './components/ClanSection'
import BuildsSection from './components/BuildsSection'
import RaidsSection from './components/RaidsSection'
import MediaSection from './components/MediaSection'
import RecruitmentSection from './components/RecruitmentSection'
import CommunitySection from './components/CommunitySection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import AudioController from './components/AudioController'
import DiscordCTA from './components/DiscordCTA'

function App() {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    // Verificar preferência de áudio salva
    const savedAudioPreference = localStorage.getItem('filhos-do-caos-audio')
    if (savedAudioPreference) {
      setIsAudioEnabled(JSON.parse(savedAudioPreference))
    }

    // Verificar preferência de movimento reduzido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setReducedMotion(prefersReducedMotion)
  }, [])

  const handleAudioToggle = (enabled) => {
    setIsAudioEnabled(enabled)
    localStorage.setItem('filhos-do-caos-audio', JSON.stringify(enabled))
  }

  return (
    <div className="min-h-screen bg-charcoal">
      <AnimatePresence>
        <Navbar />

        <main>
          <HeroSection
            isAudioEnabled={isAudioEnabled}
            reducedMotion={reducedMotion}
          />

          <ClanSection reducedMotion={reducedMotion} />
          <BuildsSection reducedMotion={reducedMotion} />
          <RaidsSection reducedMotion={reducedMotion} />
          <MediaSection reducedMotion={reducedMotion} />
          <RecruitmentSection reducedMotion={reducedMotion} />
          <CommunitySection reducedMotion={reducedMotion} />
          <FAQSection reducedMotion={reducedMotion} />
        </main>

        <Footer />

        {/* Componentes flutuantes */}
        <AudioController
          isEnabled={isAudioEnabled}
          onToggle={handleAudioToggle}
        />
        <DiscordCTA />
      </AnimatePresence>
    </div>
  )
}

export default App
