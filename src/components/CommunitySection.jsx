import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Calendar, Trophy, TrendingUp, Clock, Star } from 'lucide-react'

const CommunitySection = ({ reducedMotion }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [discordOnline, setDiscordOnline] = useState(23)
  const [discordTotal, setDiscordTotal] = useState(47)

  useEffect(() => {
    const interval = setInterval(() => {
      setDiscordOnline(prev => {
        const change = Math.random() > 0.5 ? 1 : -1
        return Math.max(20, Math.min(30, prev + change))
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const weeklyAgenda = [
    {
      day: 'Segunda',
      events: [
        { time: '19:00', name: 'Treino PvE', type: 'training' },
        { time: '21:00', name: 'Raid Summit', type: 'raid' }
      ]
    },
    {
      day: 'Terça',
      events: [
        { time: '19:30', name: 'DZ PvP', type: 'pvp' },
        { time: '21:30', name: 'Build Workshop', type: 'workshop' }
      ]
    },
    {
      day: 'Quarta',
      events: [
        { time: '20:00', name: 'Raid Iron Horse', type: 'raid' }
      ]
    },
    {
      day: 'Quinta',
      events: [
        { time: '19:00', name: 'Treino PvE', type: 'training' },
        { time: '21:00', name: 'DZ Manhunt', type: 'pvp' }
      ]
    },
    {
      day: 'Sexta',
      events: [
        { time: '20:00', name: 'Raid Dark Hours', type: 'raid' }
      ]
    },
    {
      day: 'Sábado',
      events: [
        { time: '15:00', name: 'Evento Especial', type: 'special' },
        { time: '20:00', name: 'Raid Summit', type: 'raid' }
      ]
    },
    {
      day: 'Domingo',
      events: [
        { time: '16:00', name: 'DZ PvP', type: 'pvp' },
        { time: '19:00', name: 'Treino PvE', type: 'training' }
      ]
    }
  ]

  const achievements = [
    {
      id: 1,
      title: 'Primeira Raid Legendary',
      team: 'Equipe Alpha',
      date: '2024-01-15',
      record: '18:32',
      type: 'raid'
    },
    {
      id: 2,
      title: 'DZ Manhunt Survived',
      team: 'Solo Runner',
      date: '2024-01-12',
      record: '45:00',
      type: 'pvp'
    },
    {
      id: 3,
      title: 'Summit Floor 100',
      team: 'Equipe Beta',
      date: '2024-01-10',
      record: '2:15:30',
      type: 'pve'
    },
    {
      id: 4,
      title: 'Speed Run Iron Horse',
      team: 'Equipe Gamma',
      date: '2024-01-08',
      record: '22:15',
      type: 'raid'
    },
    {
      id: 5,
      title: 'PvP Tournament Winner',
      team: 'Duelist',
      date: '2024-01-05',
      record: '1º Lugar',
      type: 'pvp'
    },
    {
      id: 6,
      title: 'Collection Master',
      team: 'Collector',
      date: '2024-01-03',
      record: '100%',
      type: 'collection'
    }
  ]

  const clanGoals = [
    {
      id: 1,
      title: 'Raids Legendary',
      current: 12,
      target: 20,
      icon: Trophy
    },
    {
      id: 2,
      title: 'Membros Ativos',
      current: 47,
      target: 60,
      icon: Users
    },
    {
      id: 3,
      title: 'Eventos Semanais',
      current: 8,
      target: 10,
      icon: Calendar
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-charcoal to-graphite relative overflow-hidden">
      <div className="grid-overlay" />
      <div className="scanlines" />
      <div className="vignette" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            COMUNIDADE & INTEGRAÇÕES
          </h2>
          <p className="text-xl text-white-80 max-w-3xl mx-auto">
            Conecte-se com outros agentes, participe de eventos exclusivos e acompanhe o progresso do clã em tempo real.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6, delay: 0.2 }}
        >
          <div className="card-glass p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#5865F2] rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">Discord</h3>
                <p className="text-white-80">Comunidade Ativa</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <span className="text-white-80">Online Agora:</span>
                <span className="text-primary-red font-bold text-xl">{discordOnline}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <span className="text-white-80">Total de Membros:</span>
                <span className="text-white font-bold text-xl">{discordTotal}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <span className="text-white-80">Canais Ativos:</span>
                <span className="text-white font-bold text-xl">12</span>
              </div>
            </div>

            <button className="w-full btn-primary mt-6">
              <Users className="w-5 h-5 mr-2" />
              Juntar-se ao Discord
            </button>
          </div>

          <div className="card-glass p-8">
            <div className="flex items-center mb-6">
              <Calendar className="w-8 h-8 text-primary-red mr-3" />
              <h3 className="text-2xl font-display font-bold text-white">Agenda Semanal</h3>
            </div>

            <div className="space-y-4">
              {weeklyAgenda.slice(0, 4).map((day, index) => (
                <div key={day.day} className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-display font-semibold text-primary-red mb-2">{day.day}</h4>
                  <div className="space-y-2">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-white-60 mr-2" />
                          <span className="text-white-80">{event.time}</span>
                        </div>
                        <span className="text-white">{event.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full btn-secondary mt-6">
              <Calendar className="w-5 h-5 mr-2" />
              Ver Agenda Completa
            </button>
          </div>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
            METAS DO CLÃ
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clanGoals.map((goal, index) => (
              <motion.div
                key={goal.id}
                className="card-glass p-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: reducedMotion ? 0.3 : 0.6,
                  delay: 0.6 + index * 0.1
                }}
              >
                <div className="w-16 h-16 bg-primary-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <goal.icon className="w-8 h-8 text-primary-red" />
                </div>
                <h4 className="font-display font-semibold text-white mb-4">{goal.title}</h4>
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-white-80">Progresso:</span>
                    <span className="text-white">{goal.current}/{goal.target}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-red to-deep-red h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(goal.current / goal.target) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="text-sm text-white-60">
                  <span>Meta: {goal.target}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="w-full btn-secondary mt-6">
            Ver Todas as Metas
          </button>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
            MURAL DE CONQUISTAS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="card-glass group hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: reducedMotion ? 0.3 : 0.6,
                  delay: 0.8 + index * 0.1
                }}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg ${
                    achievement.type === 'raid' ? 'bg-primary-red/20' :
                    achievement.type === 'pvp' ? 'bg-deep-red/20' :
                    achievement.type === 'pve' ? 'bg-metal-gray/20' :
                    'bg-mist/20'
                  }`}>
                    {achievement.type === 'raid' && <Trophy className="w-5 h-5 text-primary-red" />}
                    {achievement.type === 'pvp' && <TrendingUp className="w-5 h-5 text-deep-red" />}
                    {achievement.type === 'pve' && <Users className="w-5 h-5 text-metal-gray" />}
                    {achievement.type === 'collection' && <Star className="w-5 h-5 text-mist" />}
                  </div>
                  <span className="text-xs text-white-60">
                    {new Date(achievement.date).toLocaleDateString('pt-BR')}
                  </span>
                </div>

                <h4 className="font-display font-semibold text-white mb-2">
                  {achievement.title}
                </h4>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-white-80">Equipe:</span>
                    <span className="text-white">{achievement.team}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white-80">Recorde:</span>
                    <span className="text-primary-red font-semibold">{achievement.record}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6, delay: 1.2 }}
        >
          <p className="text-white-80 mb-6 max-w-2xl mx-auto">
            Junte-se à nossa comunidade e participe de eventos exclusivos, treinamentos e operações táticas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary">
              <Users className="w-5 h-5 mr-2" />
              Entrar na Comunidade
            </button>
            <button className="btn-secondary">
              <Calendar className="w-5 h-5 mr-2" />
              Ver Próximos Eventos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CommunitySection
