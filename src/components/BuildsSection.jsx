import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Zap, Shield, Target, Heart } from 'lucide-react'

const BuildsSection = ({ reducedMotion }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeBuildIndex, setActiveBuildIndex] = useState(0)
  const [activeLayer, setActiveLayer] = useState('colete')

  const buildCategories = [
    { id: 'meta-pve', name: 'Meta PvE', color: 'primary-red' },
    { id: 'dz-pvp', name: 'DZ & PvP', color: 'deep-red' },
    { id: 'suporte', name: 'Suporte & Híbridas', color: 'metal-gray' }
  ]

  const builds = [
    {
      name: 'DPS Explosivo',
      category: 'Meta PvE',
      image: '/builds/dps-explosivo.jpg',
      stats: {
        critico: '65%',
        dano: '2.4M',
        talento: 'Explosivo'
      },
      layers: {
        colete: { name: 'Colete', stats: ['+15% Dano', '+12% Crítico'] },
        armaPrimaria: { name: 'Arma Primária', stats: ['+20% Dano', '+8% Crítico'] },
        armaSecundaria: { name: 'Arma Secundária', stats: ['+18% Dano', '+10% Crítico'] },
        talentos: { name: 'Talentos', stats: ['Explosivo', 'Destruidor'] },
        mods: { name: 'Mods', stats: ['+5% Dano', '+3% Crítico'] }
      }
    },
    {
      name: 'Tank Impenetrável',
      category: 'DZ & PvP',
      image: '/builds/tank-impenetravel.jpg',
      stats: {
        critico: '45%',
        dano: '1.8M',
        talento: 'Impenetrável'
      },
      layers: {
        colete: { name: 'Colete', stats: ['+25% Armadura', '+15% Vida'] },
        armaPrimaria: { name: 'Arma Primária', stats: ['+15% Dano', '+10% Armadura'] },
        armaSecundaria: { name: 'Arma Secundária', stats: ['+12% Dano', '+8% Armadura'] },
        talentos: { name: 'Talentos', stats: ['Impenetrável', 'Defensor'] },
        mods: { name: 'Mods', stats: ['+8% Armadura', '+5% Vida'] }
      }
    },
    {
      name: 'Suporte Médico',
      category: 'Suporte & Híbridas',
      image: '/builds/suporte-medico.jpg',
      stats: {
        critico: '35%',
        dano: '1.2M',
        talento: 'Médico'
      },
      layers: {
        colete: { name: 'Colete', stats: ['+20% Cura', '+15% Habilidade'] },
        armaPrimaria: { name: 'Arma Primária', stats: ['+10% Dano', '+12% Cura'] },
        armaSecundaria: { name: 'Arma Secundária', stats: ['+8% Dano', '+10% Cura'] },
        talentos: { name: 'Talentos', stats: ['Médico', 'Protetor'] },
        mods: { name: 'Mods', stats: ['+6% Cura', '+4% Habilidade'] }
      }
    }
  ]

  const nextBuild = () => {
    setActiveBuildIndex((prev) => (prev + 1) % builds.length)
  }

  const prevBuild = () => {
    setActiveBuildIndex((prev) => (prev - 1 + builds.length) % builds.length)
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

  const buildVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: reducedMotion ? 0.3 : 0.6,
        ease: "easeOut"
      }
    }
  }

  const layerVariants = {
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

  const activeBuild = builds[activeBuildIndex]

  return (
    <section id="builds" className="py-20 bg-graphite">
      <div className="container mx-auto px-4">
        {/* Header da Seção */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            SHOWCASE DE BUILDS
          </h2>
          <p className="text-xl text-white-80 max-w-3xl mx-auto leading-relaxed">
            Construções otimizadas para máxima eficiência em diferentes cenários de combate.
          </p>
        </motion.div>

        {/* Categorias */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6, delay: 0.2 }}
        >
          {buildCategories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-3 rounded-lg font-display font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeBuild.category === category.name
                  ? 'bg-primary-red text-white'
                  : 'bg-black/40 text-white/70 hover:bg-black/60 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Build Principal */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Imagem da Build */}
          <motion.div
            className="relative group"
            variants={buildVariants}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-charcoal to-metal-gray rounded-2xl">
                {/* Placeholder para imagem da build */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Target className="w-24 h-24 text-primary-red/50 mx-auto mb-4" />
                    <p className="text-white-80 font-display text-lg">
                      {activeBuild.name}
                    </p>
                  </div>
                </div>
              </div>

              {/* Overlay com efeito hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Estatísticas da Build */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-md rounded-xl p-4 border border-primary-red/30">
              <div className="flex space-x-6">
                <div className="text-center">
                  <Zap className="w-6 h-6 text-primary-red mx-auto mb-2" />
                  <p className="text-sm text-white-80">Crítico</p>
                  <p className="text-xl font-display font-bold text-white">{activeBuild.stats.critico}</p>
                </div>
                <div className="text-center">
                  <Target className="w-6 h-6 text-primary-red mx-auto mb-2" />
                  <p className="text-sm text-white-80">Dano</p>
                  <p className="text-xl font-display font-bold text-white">{activeBuild.stats.dano}</p>
                </div>
                <div className="text-center">
                  <Heart className="w-6 h-6 text-primary-red mx-auto mb-2" />
                  <p className="text-sm text-white-80">Talento</p>
                  <p className="text-xl font-display font-bold text-white">{activeBuild.stats.talento}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Detalhes da Build */}
          <motion.div
            className="space-y-8"
            variants={buildVariants}
          >
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                {activeBuild.name}
              </h3>
              <p className="text-white-80 text-lg leading-relaxed">
                Build especializada para {activeBuild.category.toLowerCase()}, otimizada para máxima eficiência e sobrevivência.
              </p>
            </div>

            {/* Camadas Explodidas */}
            <div>
              <h4 className="text-xl font-display font-semibold text-white mb-4">
                COMPONENTES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(activeBuild.layers).map(([key, layer]) => (
                  <motion.button
                    key={key}
                    onClick={() => setActiveLayer(key)}
                    className={`p-4 rounded-lg text-left transition-all duration-300 ${
                      activeLayer === key
                        ? 'bg-primary-red/20 border border-primary-red/50'
                        : 'bg-black/40 border border-white/10 hover:bg-black/60'
                    }`}
                    variants={layerVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h5 className="font-display font-semibold text-white mb-2">
                      {layer.name}
                    </h5>
                    <div className="space-y-1">
                      {layer.stats.map((stat, index) => (
                        <p key={index} className="text-sm text-white-80">
                          • {stat}
                        </p>
                      ))}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Navegação */}
        <motion.div
          className="flex justify-center items-center space-x-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6, delay: 0.6 }}
        >
          <button
            onClick={prevBuild}
            className="p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors duration-300"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex space-x-2">
            {builds.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveBuildIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeBuildIndex
                    ? 'bg-primary-red scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextBuild}
            className="p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default BuildsSection
