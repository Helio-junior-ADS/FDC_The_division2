import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, Image, Video, Filter } from 'lucide-react'

const MediaSection = ({ reducedMotion }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeFilter, setActiveFilter] = useState('todos')
  const [selectedMedia, setSelectedMedia] = useState(null)

  const filters = [
    { id: 'todos', name: 'Todos', count: 12 },
    { id: 'raids', name: 'Raids', count: 5 },
    { id: 'dz', name: 'DZ', count: 4 },
    { id: 'momentos', name: 'Momentos Épicos', count: 2 },
    { id: 'tutoriais', name: 'Tutoriais', count: 1 }
  ]

  const mediaItems = [
    {
      id: 1,
      type: 'video',
      category: 'raids',
      title: 'Raid Dark Hours - Clear Legendary',
      thumbnail: '/media/raid-dark-hours.jpg',
      duration: '18:32',
      views: '2.4k',
      date: '2024-01-10'
    },
    {
      id: 2,
      type: 'image',
      category: 'dz',
      title: 'DZ PvP - 1v4 Victory',
      thumbnail: '/media/dz-pvp-victory.jpg',
      likes: '156',
      date: '2024-01-08'
    },
    {
      id: 3,
      type: 'video',
      category: 'momentos',
      title: 'Clutch Final Boss - Iron Horse',
      thumbnail: '/media/clutch-iron-horse.jpg',
      duration: '3:45',
      views: '1.8k',
      date: '2024-01-05'
    },
    {
      id: 4,
      type: 'image',
      category: 'raids',
      title: 'Team Photo - Summit Clear',
      thumbnail: '/media/summit-team.jpg',
      likes: '89',
      date: '2024-01-03'
    },
    {
      id: 5,
      type: 'video',
      category: 'tutoriais',
      title: 'Build Guide - DPS Explosivo',
      thumbnail: '/media/build-guide.jpg',
      duration: '12:18',
      views: '3.2k',
      date: '2024-01-01'
    },
    {
      id: 6,
      type: 'image',
      category: 'dz',
      title: 'DZ Extraction - High Value Loot',
      thumbnail: '/media/dz-extraction.jpg',
      likes: '203',
      date: '2023-12-28'
    },
    {
      id: 7,
      type: 'video',
      category: 'raids',
      title: 'Raid Iron Horse - Speed Run',
      thumbnail: '/media/iron-horse-speed.jpg',
      duration: '22:15',
      views: '1.5k',
      date: '2023-12-25'
    },
    {
      id: 8,
      type: 'image',
      category: 'momentos',
      title: 'Epic Sniper Shot - 500m',
      thumbnail: '/media/sniper-shot.jpg',
      likes: '312',
      date: '2023-12-20'
    },
    {
      id: 9,
      type: 'video',
      category: 'dz',
      title: 'DZ Manhunt - Surviving 30min',
      thumbnail: '/media/dz-manhunt.jpg',
      duration: '8:42',
      views: '2.1k',
      date: '2023-12-18'
    },
    {
      id: 10,
      type: 'image',
      category: 'raids',
      title: 'Gear Setup - Legendary Raid',
      thumbnail: '/media/gear-setup.jpg',
      likes: '127',
      date: '2023-12-15'
    },
    {
      id: 11,
      type: 'video',
      category: 'raids',
      title: 'Raid Summit - Floor 100 Clear',
      thumbnail: '/media/summit-floor100.jpg',
      duration: '15:30',
      views: '1.9k',
      date: '2023-12-12'
    },
    {
      id: 12,
      type: 'image',
      category: 'dz',
      title: 'DZ Landmark - Full Clear',
      thumbnail: '/media/dz-landmark.jpg',
      likes: '178',
      date: '2023-12-10'
    }
  ]

  const filteredMedia = activeFilter === 'todos'
    ? mediaItems
    : mediaItems.filter(item => item.category === activeFilter)

  const handleMediaClick = (media) => {
    setSelectedMedia(media)
  }

  const closeModal = () => {
    setSelectedMedia(null)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0.1 : 0.15,
        delayChildren: 0.1
      }
    }
  }

  const mediaVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: reducedMotion ? 0.3 : 0.5,
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

  return (
    <section id="midia" className="py-20 bg-graphite">
      <div className="container mx-auto px-4">
        {/* Header da Seção */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            GALERIA & MÍDIA
          </h2>
          <p className="text-xl text-white-80 max-w-3xl mx-auto leading-relaxed">
            Momentos épicos, tutoriais e conquistas capturados em ação.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-display font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-red text-white'
                  : 'bg-black/40 text-white/70 hover:bg-black/60 hover:text-white'
              }`}
            >
              {filter.name}
              <span className="ml-2 text-xs opacity-75">({filter.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Galeria Masonry */}
        <motion.div
          ref={ref}
          className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredMedia.map((media, index) => (
            <motion.div
              key={media.id}
              className="break-inside-avoid mb-6 group cursor-pointer"
              variants={mediaVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleMediaClick(media)}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-charcoal to-metal-gray">
                {/* Placeholder para thumbnail */}
                <div className="aspect-[4/3] flex items-center justify-center">
                  <div className="text-center">
                    {media.type === 'video' ? (
                      <Video className="w-16 h-16 text-primary-red/50 mx-auto mb-2" />
                    ) : (
                      <Image className="w-16 h-16 text-primary-red/50 mx-auto mb-2" />
                    )}
                    <p className="text-white-80 font-display text-sm">
                      {media.title}
                    </p>
                  </div>
                </div>

                {/* Overlay com informações */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-display font-semibold text-sm mb-2">
                      {media.title}
                    </h3>

                    <div className="flex items-center justify-between text-white-80 text-xs">
                      <span>{new Date(media.date).toLocaleDateString('pt-BR')}</span>
                      {media.type === 'video' ? (
                        <div className="flex items-center space-x-2">
                          <Play className="w-4 h-4" />
                          <span>{media.duration}</span>
                          <span>• {media.views} views</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span>❤️ {media.likes}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Indicador de tipo */}
                <div className="absolute top-3 right-3">
                  <div className={`px-2 py-1 rounded-full text-xs font-display font-semibold uppercase ${
                    media.type === 'video'
                      ? 'bg-primary-red/80 text-white'
                      : 'bg-black/60 text-white'
                  }`}>
                    {media.type === 'video' ? 'VÍDEO' : 'IMAGEM'}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA para mais conteúdo */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6, delay: 0.8 }}
        >
          <p className="text-white-80 mb-6">
            Quer ver mais conteúdo? Siga-nos nas redes sociais!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-secondary">
              <Video className="w-5 h-5 mr-2" />
              YouTube
            </button>
            <button className="btn-secondary">
              <Image className="w-5 h-5 mr-2" />
              Instagram
            </button>
            <button className="btn-secondary">
              <Play className="w-5 h-5 mr-2" />
              Twitch
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal de Mídia */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="card-glass max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-display font-bold text-white">
                  {selectedMedia.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-white-80 hover:text-white transition-colors duration-200"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {/* Conteúdo da mídia */}
                <div className="aspect-video bg-gradient-to-br from-charcoal to-metal-gray rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    {selectedMedia.type === 'video' ? (
                      <Video className="w-24 h-24 text-primary-red/50 mx-auto mb-4" />
                    ) : (
                      <Image className="w-24 h-24 text-primary-red/50 mx-auto mb-4" />
                    )}
                    <p className="text-white-80 font-display text-lg">
                      {selectedMedia.title}
                    </p>
                  </div>
                </div>

                {/* Informações detalhadas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-display font-semibold text-white mb-3">
                      Detalhes
                    </h4>
                    <div className="space-y-2 text-white-80">
                      <p><strong>Data:</strong> {new Date(selectedMedia.date).toLocaleDateString('pt-BR')}</p>
                      <p><strong>Categoria:</strong> {selectedMedia.category}</p>
                      <p><strong>Tipo:</strong> {selectedMedia.type === 'video' ? 'Vídeo' : 'Imagem'}</p>
                      {selectedMedia.type === 'video' && (
                        <>
                          <p><strong>Duração:</strong> {selectedMedia.duration}</p>
                          <p><strong>Visualizações:</strong> {selectedMedia.views}</p>
                        </>
                      )}
                      {selectedMedia.type === 'image' && (
                        <p><strong>Curtidas:</strong> {selectedMedia.likes}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-display font-semibold text-white mb-3">
                      Ações
                    </h4>
                    <div className="space-y-3">
                      <button className="w-full btn-primary">
                        {selectedMedia.type === 'video' ? 'Assistir' : 'Ver em Tela Cheia'}
                      </button>
                      <button className="w-full btn-secondary">
                        Compartilhar
                      </button>
                      <button className="w-full btn-tertiary">
                        Favoritar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default MediaSection
