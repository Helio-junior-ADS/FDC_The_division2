import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Volume2, VolumeX } from 'lucide-react'

const HeroSection = ({ isAudioEnabled, reducedMotion }) => {
  const videoRef = useRef(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsVideoPlaying(true)
      }).catch(() => {
        // Fallback para dispositivos que não suportam autoplay
        setIsVideoPlaying(false)
      })
    }
  }, [])

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
  }

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsVideoPlaying(true)
    }
  }

  const headlineVariants = {
    hidden: {
      clipPath: 'inset(0 100% 0 0)',
      opacity: 0
    },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      opacity: 1
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.02,
      boxShadow: '0 0 32px rgba(217, 22, 42, 0.4)'
    },
    tap: {
      scale: 0.98,
      y: 2
    }
  }

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Video de Fundo */}
      <div className="absolute inset-0">
        {/* Fallback para dispositivos sem suporte a vídeo */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-graphite to-deep-red" />

        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoad}
          style={{ opacity: isVideoLoaded ? 1 : 0 }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
          {/* Fallback para imagem */}
          <img src="/hero-fallback.jpg" alt="Filhos do Caos - Hero" />
        </video>

        {/* Botão de play para dispositivos sem autoplay */}
        {!isVideoPlaying && (
          <motion.button
            onClick={handlePlayVideo}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-primary-red/80 hover:bg-primary-red text-white p-6 rounded-full backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Play size={48} className="ml-2" />
          </motion.button>
        )}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute inset-0 vignette" />
      <div className="absolute inset-0 scanlines opacity-5" />

      {/* Conteúdo Principal */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            transition={{
              duration: reducedMotion ? 0.3 : 0.7,
              ease: "cubic-bezier(0.22, 1, 0.36, 1)"
            }}
          >
            {/* Linha 1 - Nome do Clã */}
            <motion.h2
              className="text-lg md:text-xl text-white/80 font-display font-medium tracking-[0.2em] uppercase mb-4"
              variants={headlineVariants}
              transition={{ delay: 0.2 }}
            >
              CLÃ FILHOS DO CAOS
            </motion.h2>

            {/* Linha 2 - Headline Principal */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-8xl text-white font-display font-black tracking-wider uppercase mb-6 text-glow"
              variants={headlineVariants}
              transition={{ delay: 0.4 }}
            >
              DOMINE A ZONA ESCURA.
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              className="text-lg md:text-xl text-white-80 font-body max-w-2xl mx-auto mb-12 leading-relaxed"
              variants={headlineVariants}
              transition={{ delay: 0.6 }}
            >
              Coordenação tática. Builds otimizadas. Operações implacáveis em Washington, D.C. e NYC.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={headlineVariants}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="btn-primary"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                transition={{ duration: 0.2 }}
              >
                Entrar no Esquadrão
              </motion.button>

              <motion.button
                className="btn-secondary"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                transition={{ duration: 0.2 }}
              >
                Calendário de Raids
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-red rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
