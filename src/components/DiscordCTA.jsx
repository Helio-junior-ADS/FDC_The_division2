import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Users, Trophy, Target } from 'lucide-react'

const DiscordCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [onlineMembers, setOnlineMembers] = useState(23)

  useEffect(() => {
    // Mostrar o CTA após 5 segundos
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  // Simular mudança no número de membros online
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineMembers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1
        return Math.max(20, Math.min(30, prev + change))
      })
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const handleJoinDiscord = () => {
    // Aqui seria implementada a lógica para abrir o Discord
    window.open('https://discord.gg/filhosdocaos', '_blank')
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      rotate: -5
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  }

  const expandVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      scaleY: 0
    },
    expanded: {
      height: 'auto',
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-6 left-6 z-40"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="relative">
          {/* CTA Principal */}
          <motion.div
            className="bg-gradient-to-r from-primary-red to-deep-red text-white rounded-full shadow-2xl shadow-primary-red/30 border-2 border-white/20 overflow-hidden"
            variants={pulseVariants}
            animate="pulse"
          >
            <button
              onClick={handleJoinDiscord}
              className="px-6 py-4 flex items-center space-x-3 hover:bg-white/10 transition-colors duration-300 group"
            >
              <div className="relative">
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>
              <div className="text-left">
                <div className="font-display font-bold text-sm uppercase tracking-wider">
                  Juntar-se ao Discord
                </div>
                <div className="text-xs opacity-90">
                  {onlineMembers} membros online
                </div>
              </div>
            </button>

            {/* Botão Expandir */}
            <button
              onClick={handleExpand}
              className="absolute top-0 right-0 w-8 h-8 bg-black/20 hover:bg-black/40 transition-colors duration-300 flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.div>
            </button>

            {/* Botão Fechar */}
            <button
              onClick={handleClose}
              className="absolute top-0 right-8 w-8 h-8 bg-black/20 hover:bg-black/40 transition-colors duration-300 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Conteúdo Expandido */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="absolute bottom-full left-0 mb-4 w-80 bg-black/95 backdrop-blur-md rounded-xl border border-primary-red/30 overflow-hidden"
                variants={expandVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
              >
                <div className="p-6">
                  <h3 className="font-display font-bold text-white text-lg mb-4 text-center">
                    COMUNIDADE ATIVA
                  </h3>

                  {/* Estatísticas Rápidas */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-primary-red/20 rounded-lg border border-primary-red/30">
                      <Users className="w-6 h-6 text-primary-red mx-auto mb-2" />
                      <div className="text-2xl font-display font-bold text-white">
                        {onlineMembers}
                      </div>
                      <div className="text-xs text-white-80">Online</div>
                    </div>
                    <div className="text-center p-3 bg-primary-red/20 rounded-lg border border-primary-red/30">
                      <Trophy className="w-6 h-6 text-primary-red mx-auto mb-2" />
                      <div className="text-2xl font-display font-bold text-white">
                        47
                      </div>
                      <div className="text-xs text-white-80">Total</div>
                    </div>
                  </div>

                  {/* Canais Ativos */}
                  <div className="mb-6">
                    <h4 className="font-display font-semibold text-white mb-3 text-sm uppercase tracking-wider">
                      Canais Ativos
                    </h4>
                    <div className="space-y-2">
                      {[
                        { name: '🎮 Raids', members: 12, color: 'text-primary-red' },
                        { name: '⚔️ PvP', members: 8, color: 'text-deep-red' },
                        { name: '🏗️ Builds', members: 15, color: 'text-metal-gray' },
                        { name: '📢 Geral', members: 23, color: 'text-mist' }
                      ].map((channel, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className={`${channel.color}`}>{channel.name}</span>
                          <span className="text-white-80">{channel.members}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Próximos Eventos */}
                  <div className="mb-6">
                    <h4 className="font-display font-semibold text-white mb-3 text-sm uppercase tracking-wider">
                      Próximos Eventos
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-white-80">Raid Dark Hours</span>
                        <span className="text-primary-red">Hoje 20h</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white-80">DZ PvP</span>
                        <span className="text-primary-red">Amanhã 19h</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Expandido */}
                  <button
                    onClick={handleJoinDiscord}
                    className="w-full btn-primary text-sm py-3"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Entrar Agora
                  </button>

                  <div className="text-center mt-3">
                    <span className="text-xs text-white-60">
                      Resposta em menos de 5 minutos
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Indicador de Atividade */}
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default DiscordCTA
