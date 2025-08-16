import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Clock, Gamepad2, Target } from 'lucide-react'

const ClanSection = ({ reducedMotion }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const clanCards = [
    {
      icon: Target,
      title: 'Filosofia',
      description: 'Disciplina tática e coordenação implacável. Cada operação é planejada com precisão militar.',
      color: 'primary-red'
    },
    {
      icon: Users,
      title: 'Disciplina Tática',
      description: 'Estratégias coordenadas, comunicação clara e execução perfeita em todas as missões.',
      color: 'deep-red'
    },
    {
      icon: Clock,
      title: 'Horários Ativos',
      description: 'Operações diárias das 19h às 23h BRT. Raids aos fins de semana e eventos especiais.',
      color: 'metal-gray'
    },
    {
      icon: Gamepad2,
      title: 'Plataformas',
      description: 'PC, PlayStation e Xbox. Cross-platform para máxima flexibilidade operacional.',
      color: 'mist'
    }
  ]

  const stats = [
    { label: 'Membros Ativos', value: '47', suffix: '' },
    { label: 'Clear Time Médio', value: '18', suffix: 'min' },
    { label: 'Taxa de Conclusão', value: '94', suffix: '%' }
  ]

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: reducedMotion ? 0.3 : 0.6,
        ease: "easeOut"
      }
    }
  }

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: reducedMotion ? 0.3 : 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="clan" className="py-20 bg-gradient-to-b from-charcoal to-graphite">
      <div className="container mx-auto px-4">
        {/* Header da Seção */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            QUEM SOMOS
          </h2>
          <p className="text-xl text-white-80 max-w-3xl mx-auto leading-relaxed">
            Uma unidade tática de elite, especializada em operações coordenadas e estratégias avançadas.
          </p>
        </motion.div>

        {/* Grid de Cards */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {clanCards.map((card, index) => (
            <motion.div
              key={index}
              className="card-glass group hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-${card.color}/20 border border-${card.color}/30`}>
                  <card.icon className={`w-8 h-8 text-${card.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-white-80 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6, delay: 0.4 }}
        >
          {['PVE', 'PVP', 'DZ', 'RAIDS'].map((badge, index) => (
            <motion.span
              key={badge}
              className="px-6 py-3 bg-black/60 border border-primary-red/50 text-primary-red font-display font-semibold tracking-wider uppercase rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: reducedMotion ? 0.2 : 0.4,
                delay: 0.6 + index * 0.1
              }}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {/* Métricas ao Vivo */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={statVariants}
            >
              <div className="text-5xl md:text-6xl font-display font-black text-primary-red mb-2">
                {stat.value}
                <span className="text-2xl text-white-80">{stat.suffix}</span>
              </div>
              <p className="text-lg text-white-80 font-body">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ClanSection
