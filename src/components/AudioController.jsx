import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, Radio } from 'lucide-react'
import { Howl } from 'howler'

const AudioController = ({ isEnabled, onToggle }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)

  // Som de rádio criptografado/ruído eletrônico
  const [radioSound, setRadioSound] = useState(null)

  useEffect(() => {
    // Inicializar o som de rádio
    const sound = new Howl({
      src: ['/audio/radio-static.mp3'], // Fallback para arquivo de áudio
      loop: true,
      volume: volume,
      html5: true,
      onload: () => {
        console.log('Áudio carregado com sucesso')
      },
      onloaderror: (id, error) => {
        console.log('Erro ao carregar áudio:', error)
        // Fallback para áudio sintético se o arquivo não carregar
        createSyntheticAudio()
      }
    })

    setRadioSound(sound)

    return () => {
      if (sound) {
        sound.stop()
        sound.unload()
      }
    }
  }, [])

  // Criar áudio sintético como fallback
  const createSyntheticAudio = () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.type = 'sawtooth'
      oscillator.frequency.setValueAtTime(200, audioContext.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 2)

      gainNode.gain.setValueAtTime(0, audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(volume * 0.1, audioContext.currentTime + 0.1)
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 2)

      oscillator.start()
      oscillator.stop(audioContext.currentTime + 2)

      // Loop do áudio sintético
      setInterval(() => {
        if (isEnabled && isPlaying) {
          createSyntheticAudio()
        }
      }, 2000)
    } catch (error) {
      console.log('Erro ao criar áudio sintético:', error)
    }
  }

  useEffect(() => {
    if (radioSound) {
      radioSound.volume(volume)
    }
  }, [volume, radioSound])

  useEffect(() => {
    if (isEnabled && isPlaying) {
      if (radioSound) {
        radioSound.play()
      }
    } else {
      if (radioSound) {
        radioSound.stop()
      }
    }
  }, [isEnabled, isPlaying, radioSound])

  const handleToggle = () => {
    const newState = !isEnabled
    onToggle(newState)

    if (newState) {
      setIsPlaying(true)
    } else {
      setIsPlaying(false)
    }
  }

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume)
    if (radioSound) {
      radioSound.volume(newVolume)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const volumeSliderVariants = {
    hidden: { opacity: 0, height: 0, scaleY: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      scaleY: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative">
        {/* Botão Principal */}
        <motion.button
          onClick={handleToggle}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
            isEnabled
              ? 'bg-primary-red text-white shadow-lg shadow-primary-red/30'
              : 'bg-black/60 text-white/80 hover:bg-black/80'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isEnabled ? (
            <Radio className="w-6 h-6" />
          ) : (
            <VolumeX className="w-6 h-6" />
          )}
        </motion.button>

        {/* Indicador de Status */}
        {isEnabled && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}

        {/* Controle de Volume */}
        <AnimatePresence>
          {showVolumeSlider && isEnabled && (
            <motion.div
              className="absolute bottom-full right-0 mb-4 p-4 bg-black/90 backdrop-blur-md rounded-lg border border-primary-red/30"
              variants={volumeSliderVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="w-32 space-y-3">
                <div className="text-center">
                  <span className="text-xs text-white-80 uppercase tracking-wider">
                    Volume
                  </span>
                </div>

                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    className="w-full h-2 bg-black/40 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="text-center mt-2">
                    <span className="text-xs text-white-60">
                      {Math.round(volume * 100)}%
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-2 text-xs text-white-80">
                  <VolumeX className="w-3 h-3" />
                  <span>Mudo</span>
                  <span className="mx-2">•</span>
                  <span>Alto</span>
                  <Volume2 className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botão de Volume */}
        {isEnabled && (
          <motion.button
            onClick={() => setShowVolumeSlider(!showVolumeSlider)}
            className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/60 text-white/80 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Volume2 className="w-4 h-4" />
          </motion.button>
        )}
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {isEnabled && (
          <motion.div
            className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            Áudio Ativado
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default AudioController
