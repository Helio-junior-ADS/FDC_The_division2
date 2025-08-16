import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Target, Clock, Gamepad2, ArrowRight, ArrowLeft, Check } from 'lucide-react'

const RecruitmentSection = ({ reducedMotion }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    step1: {
      role: '',
      availability: '',
      platform: '',
      experience: ''
    },
    step2: {
      discord: '',
      motivation: '',
      goals: '',
      previousClan: ''
    }
  })

  const roles = [
    { id: 'dps', name: 'DPS', description: 'Dano por segundo, foco em eliminação rápida' },
    { id: 'tank', name: 'Tank', description: 'Proteção e agressão, suporte à equipe' },
    { id: 'healer', name: 'Healer', description: 'Cura e suporte, manutenção da equipe' },
    { id: 'utility', name: 'Utilitário', description: 'Habilidades especiais e controle' }
  ]

  const availabilityOptions = [
    { id: 'daily', name: 'Diário', description: '19h-23h BRT' },
    { id: 'weekends', name: 'Fins de Semana', description: 'Sábados e domingos' },
    { id: 'flexible', name: 'Flexível', description: 'Horários variáveis' },
    { id: 'casual', name: 'Casual', description: 'Algumas vezes por semana' }
  ]

  const platforms = [
    { id: 'pc', name: 'PC', icon: '🖥️' },
    { id: 'ps5', name: 'PlayStation 5', icon: '🎮' },
    { id: 'ps4', name: 'PlayStation 4', icon: '🎮' },
    { id: 'xbox', name: 'Xbox Series X/S', icon: '🎮' },
    { id: 'xbox-one', name: 'Xbox One', icon: '🎮' }
  ]

  const experienceLevels = [
    { id: 'beginner', name: 'Iniciante', description: '0-100 horas' },
    { id: 'intermediate', name: 'Intermediário', description: '100-500 horas' },
    { id: 'advanced', name: 'Avançado', description: '500-1000 horas' },
    { id: 'expert', name: 'Expert', description: '1000+ horas' }
  ]

  const handleInputChange = (step, field, value) => {
    setFormData(prev => ({
      ...prev,
      [step]: {
        ...prev[step],
        [field]: value
      }
    }))
  }

  const nextStep = () => {
    if (currentStep === 1) {
      // Validar campos obrigatórios do step 1
      const { role, availability, platform, experience } = formData.step1
      if (role && availability && platform && experience) {
        setCurrentStep(2)
      }
    }
  }

  const prevStep = () => {
    setCurrentStep(1)
  }

  const handleSubmit = () => {
    // Aqui seria a lógica para enviar o formulário
    console.log('Formulário enviado:', formData)
    // Reset do formulário
    setFormData({
      step1: { role: '', availability: '', platform: '', experience: '' },
      step2: { discord: '', motivation: '', goals: '', previousClan: '' }
    })
    setCurrentStep(1)
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

  const stepVariants = {
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

  const isStep1Valid = () => {
    const { role, availability, platform, experience } = formData.step1
    return role && availability && platform && experience
  }

  return (
    <section id="recrutamento" className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        {/* Header da Seção */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            RECRUTAMENTO
          </h2>
          <p className="text-xl text-white-80 max-w-3xl mx-auto leading-relaxed">
            Procura-se Operadores. Disciplina, comunicação e sangue-frio.
          </p>
        </motion.div>

        {/* Formulário */}
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Indicador de Progresso */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                currentStep >= 1 ? 'border-primary-red bg-primary-red text-white' : 'border-white/30 text-white/30'
              }`}>
                {currentStep > 1 ? <Check size={20} /> : '1'}
              </div>
              <div className={`w-16 h-0.5 ${
                currentStep >= 2 ? 'bg-primary-red' : 'bg-white/30'
              }`} />
              <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                currentStep >= 2 ? 'border-primary-red bg-primary-red text-white' : 'border-white/30 text-white/30'
              }`}>
                {currentStep === 2 ? <Check size={20} /> : '2'}
              </div>
            </div>
          </div>

          {/* Step 1: Informações Básicas */}
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                className="card-glass"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: -100 }}
              >
                <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
                  PASSO 1: PERFIL BÁSICO
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Função */}
                  <div>
                    <h4 className="text-lg font-display font-semibold text-white mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-primary-red" />
                      FUNÇÃO PRINCIPAL
                    </h4>
                    <div className="space-y-3">
                      {roles.map((role) => (
                        <button
                          key={role.id}
                          onClick={() => handleInputChange('step1', 'role', role.id)}
                          className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                            formData.step1.role === role.id
                              ? 'bg-primary-red/20 border border-primary-red/50'
                              : 'bg-black/40 border border-white/10 hover:bg-black/60'
                          }`}
                        >
                          <div className="font-display font-semibold text-white mb-1">
                            {role.name}
                          </div>
                          <div className="text-sm text-white-80">
                            {role.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Disponibilidade */}
                  <div>
                    <h4 className="text-lg font-display font-semibold text-white mb-4 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-primary-red" />
                      DISPONIBILIDADE
                    </h4>
                    <div className="space-y-3">
                      {availabilityOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleInputChange('step1', 'availability', option.id)}
                          className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                            formData.step1.availability === option.id
                              ? 'bg-primary-red/20 border border-primary-red/50'
                              : 'bg-black/40 border border-white/10 hover:bg-black/60'
                          }`}
                        >
                          <div className="font-display font-semibold text-white mb-1">
                            {option.name}
                          </div>
                          <div className="text-sm text-white-80">
                            {option.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Plataforma */}
                  <div>
                    <h4 className="text-lg font-display font-semibold text-white mb-4 flex items-center">
                      <Gamepad2 className="w-5 h-5 mr-2 text-primary-red" />
                      PLATAFORMA
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {platforms.map((platform) => (
                        <button
                          key={platform.id}
                          onClick={() => handleInputChange('step1', 'platform', platform.id)}
                          className={`p-4 rounded-lg text-center transition-all duration-300 ${
                            formData.step1.platform === platform.id
                              ? 'bg-primary-red/20 border border-primary-red/50'
                              : 'bg-black/40 border border-white/10 hover:bg-black/60'
                          }`}
                        >
                          <div className="text-2xl mb-2">{platform.icon}</div>
                          <div className="text-sm font-display font-semibold text-white">
                            {platform.name}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Experiência */}
                  <div>
                    <h4 className="text-lg font-display font-semibold text-white mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-primary-red" />
                      NÍVEL DE EXPERIÊNCIA
                    </h4>
                    <div className="space-y-3">
                      {experienceLevels.map((level) => (
                        <button
                          key={level.id}
                          onClick={() => handleInputChange('step1', 'experience', level.id)}
                          className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                            formData.step1.experience === level.id
                              ? 'bg-primary-red/20 border border-primary-red/50'
                              : 'bg-black/40 border border-white/10 hover:bg-black/60'
                          }`}
                        >
                          <div className="font-display font-semibold text-white mb-1">
                            {level.name}
                          </div>
                          <div className="text-sm text-white-80">
                            {level.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botão Próximo */}
                <div className="text-center mt-8">
                  <button
                    onClick={nextStep}
                    disabled={!isStep1Valid()}
                    className={`btn-primary flex items-center mx-auto ${
                      !isStep1Valid() ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    Próximo Passo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Informações Detalhadas */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                className="card-glass"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: 100 }}
              >
                <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
                  PASSO 2: DETALHES
                </h3>

                <div className="space-y-6">
                  {/* Discord */}
                  <div>
                    <label className="block text-white font-display font-semibold mb-3">
                      DISCORD USERNAME *
                    </label>
                    <input
                      type="text"
                      value={formData.step2.discord}
                      onChange={(e) => handleInputChange('step2', 'discord', e.target.value)}
                      placeholder="exemplo#1234"
                      className="w-full p-4 bg-black/40 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary-red focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Motivação */}
                  <div>
                    <label className="block text-white font-display font-semibold mb-3">
                      MOTIVAÇÃO PARA ENTRAR NO CLÃ
                    </label>
                    <textarea
                      value={formData.step2.motivation}
                      onChange={(e) => handleInputChange('step2', 'motivation', e.target.value)}
                      placeholder="Conte-nos por que quer se juntar aos Filhos do Caos..."
                      rows={4}
                      className="w-full p-4 bg-black/40 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary-red focus:outline-none transition-colors duration-300 resize-none"
                    />
                  </div>

                  {/* Objetivos */}
                  <div>
                    <label className="block text-white font-display font-semibold mb-3">
                      OBJETIVOS NO JOGO
                    </label>
                    <textarea
                      value={formData.step2.goals}
                      onChange={(e) => handleInputChange('step2', 'goals', e.target.value)}
                      placeholder="Quais são seus objetivos principais no The Division 2?"
                      rows={3}
                      className="w-full p-4 bg-black/40 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary-red focus:outline-none transition-colors duration-300 resize-none"
                    />
                  </div>

                  {/* Clã Anterior */}
                  <div>
                    <label className="block text-white font-display font-semibold mb-3">
                      CLÃ ANTERIOR (OPCIONAL)
                    </label>
                    <input
                      type="text"
                      value={formData.step2.previousClan}
                      onChange={(e) => handleInputChange('step2', 'previousClan', e.target.value)}
                      placeholder="Nome do clã anterior, se houver"
                      className="w-full p-4 bg-black/40 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary-red focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Botões de Navegação */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStep}
                    className="btn-secondary flex items-center"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Voltar
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="btn-primary flex items-center"
                  >
                    Enviar Candidatura
                    <Check className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Informações Adicionais */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6, delay: 0.8 }}
        >
          <p className="text-white-80 mb-6 max-w-2xl mx-auto">
            Após o envio da candidatura, nossa equipe de recrutamento entrará em contato via Discord em até 48 horas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-secondary">
              <Users className="w-5 h-5 mr-2" />
              Ver Membros Atuais
            </button>
            <button className="btn-secondary">
              <Target className="w-5 h-5 mr-2" />
              Requisitos Detalhados
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RecruitmentSection
