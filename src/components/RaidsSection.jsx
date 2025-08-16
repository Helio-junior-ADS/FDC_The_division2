import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, Users, MapPin, ArrowRight, CheckCircle, XCircle } from 'lucide-react'

const RaidsSection = ({ reducedMotion }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedRaid, setSelectedRaid] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const raids = [
    {
      id: 1,
      name: 'Raid: Operação Dark Hours',
      date: '2024-01-20',
      time: '20:00',
      timezone: 'BRT',
      status: 'upcoming',
      difficulty: 'Legendary',
      maxPlayers: 8,
      location: 'Washington, D.C.',
      description: 'Raid clássica com mecânicas avançadas e coordenação tática.',
      requirements: {
        gs: '500+',
        build: 'DPS ou Tank',
        discord: 'Obrigatório'
      },
      participants: 6,
      rewards: ['Exóticos', 'Especializações', 'Cosméticos']
    },
    {
      id: 2,
      name: 'Raid: Operação Iron Horse',
      date: '2024-01-27',
      time: '19:30',
      timezone: 'BRT',
      status: 'upcoming',
      difficulty: 'Heroic',
      maxPlayers: 8,
      location: 'NYC',
      description: 'Raid de resistência com foco em sobrevivência e estratégia.',
      requirements: {
        gs: '480+',
        build: 'Qualquer',
        discord: 'Obrigatório'
      },
      participants: 4,
      rewards: ['Equipamentos', 'Materiais', 'Experiência']
    },
    {
      id: 3,
      name: 'Raid: Operação Summit',
      date: '2024-01-15',
      time: '21:00',
      timezone: 'BRT',
      status: 'completed',
      difficulty: 'Challenging',
      maxPlayers: 4,
      location: 'NYC',
      description: 'Raid de escalada com desafios progressivos.',
      requirements: {
        gs: '450+',
        build: 'Qualquer',
        discord: 'Recomendado'
      },
      participants: 4,
      rewards: ['Concluído', '4/4', '100%']
    }
  ]

  const upcomingRaids = raids.filter(raid => raid.status === 'upcoming')
  const completedRaids = raids.filter(raid => raid.status === 'completed')

  const handleJoinRaid = (raid) => {
    setSelectedRaid(raid)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedRaid(null)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0.1 : 0.2,
        delayChildren: 0.1
      }
    }
  }

  const raidCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0.3 : 0.6,
        ease: "easeOut"
      }
    }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: reducedMotion ? 0.2 : 0.4,
        ease: "easeOut"
      }
    }
  }

  const getStatusColor = (status) => {
    return status === 'upcoming' ? 'text-primary-red' : 'text-mist'
  }

  const getStatusIcon = (status) => {
    return status === 'upcoming' ? <Clock className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />
  }

  return (
    <section id="raids" className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        {/* Header da Seção */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            RAIDS & EVENTOS
          </h2>
          <p className="text-xl text-white-80 max-w-3xl mx-auto leading-relaxed">
            Participe de operações táticas coordenadas e conquiste recompensas exclusivas.
          </p>
        </motion.div>

        {/* Raids Futuras */}
        <motion.div
          ref={ref}
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl font-display font-bold text-primary-red mb-8 text-center">
            PRÓXIMAS OPERAÇÕES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingRaids.map((raid) => (
              <motion.div
                key={raid.id}
                className="card-glass group hover:scale-105 transition-transform duration-300"
                variants={raidCardVariants}
                whileHover={{ y: -8 }}
              >
                {/* Header da Raid */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-display font-semibold uppercase ${
                    raid.difficulty === 'Legendary'
                      ? 'bg-deep-red/30 text-deep-red border border-deep-red/50'
                      : 'bg-primary-red/30 text-primary-red border border-primary-red/50'
                  }`}>
                    {raid.difficulty}
                  </span>
                  <div className="flex items-center space-x-2 text-white-80">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{raid.participants}/{raid.maxPlayers}</span>
                  </div>
                </div>

                {/* Nome e Descrição */}
                <h4 className="text-xl font-display font-bold text-white mb-3">
                  {raid.name}
                </h4>
                <p className="text-white-80 text-sm mb-4 leading-relaxed">
                  {raid.description}
                </p>

                {/* Informações */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-white-80">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{new Date(raid.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white-80">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{raid.time} {raid.timezone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white-80">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{raid.location}</span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleJoinRaid(raid)}
                  className="w-full btn-primary text-sm py-2"
                >
                  Quero Participar
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Raids Concluídas */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl font-display font-bold text-mist mb-8 text-center">
            OPERAÇÕES CONCLUÍDAS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedRaids.map((raid) => (
              <motion.div
                key={raid.id}
                className="card-glass opacity-60 group"
                variants={raidCardVariants}
              >
                {/* Header da Raid */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-display font-semibold uppercase bg-mist/30 text-mist border border-mist/50">
                    {raid.difficulty}
                  </span>
                  <div className="flex items-center space-x-2 text-mist">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                </div>

                {/* Nome e Descrição */}
                <h4 className="text-xl font-display font-bold text-white mb-3">
                  {raid.name}
                </h4>
                <p className="text-white-80 text-sm mb-4 leading-relaxed">
                  {raid.description}
                </p>

                {/* Informações */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-white-80">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{new Date(raid.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white-80">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{raid.time} {raid.timezone}</span>
                  </div>
                </div>

                {/* Status de Conclusão */}
                <div className="text-center">
                  <span className="text-2xl font-display font-bold text-mist">
                    {raid.rewards[2]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Calendário Integrado */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-display font-bold text-white mb-6">
            CALENDÁRIO COMPLETO
          </h3>
          <p className="text-white-80 mb-8 max-w-2xl mx-auto">
            Sincronize com seu calendário pessoal e nunca perca uma operação.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-secondary">
              <Calendar className="w-5 h-5 mr-2" />
              Google Calendar
            </button>
            <button className="btn-secondary">
              <Calendar className="w-5 h-5 mr-2" />
              Outlook
            </button>
            <button className="btn-secondary">
              <Calendar className="w-5 h-5 mr-2" />
              iCal
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal de Participação */}
      <AnimatePresence>
        {showModal && selectedRaid && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="card-glass max-w-md w-full"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Participar da Raid
              </h3>

              <div className="space-y-4 mb-6">
                <h4 className="text-lg font-display font-semibold text-white">
                  {selectedRaid.name}
                </h4>

                <div className="space-y-3">
                  <h5 className="font-display font-semibold text-primary-red uppercase text-sm">
                    Pré-requisitos:
                  </h5>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white-80">Gear Score:</span>
                      <span className="text-white font-semibold">{selectedRaid.requirements.gs}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white-80">Build:</span>
                      <span className="text-white font-semibold">{selectedRaid.requirements.build}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white-80">Discord:</span>
                      <span className="text-white font-semibold">{selectedRaid.requirements.discord}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={closeModal}
                  className="flex-1 btn-secondary"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    // Aqui seria a lógica para confirmar participação
                    closeModal()
                  }}
                  className="flex-1 btn-primary"
                >
                  Confirmar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default RaidsSection
