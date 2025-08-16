import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plus, Minus, Mail, MessageCircle, Shield, Users, Target, Clock } from 'lucide-react'

const FAQSection = ({ reducedMotion }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      id: 1,
      question: 'Como posso me juntar ao clã Filhos do Caos?',
      answer: 'Para se juntar ao clã, você deve preencher o formulário de recrutamento, ter pelo menos 18 anos, Gear Score 450+, e estar disposto a participar de operações coordenadas. Nossa equipe de recrutamento avaliará sua candidatura em até 48 horas.',
      category: 'recrutamento'
    },
    {
      id: 2,
      question: 'Quais são os horários das operações?',
      answer: 'Nossas operações principais acontecem das 19h às 23h BRT, de segunda a sexta. Aos fins de semana, realizamos eventos especiais e raids mais longas. Sempre respeitamos o fuso horário brasileiro.',
      category: 'operacoes'
    },
    {
      id: 3,
      question: 'Preciso ter experiência prévia em raids?',
      answer: 'Não é obrigatório ter experiência prévia, mas é recomendado. Oferecemos treinamentos para novos membros e sempre temos operações para diferentes níveis de habilidade. O importante é ter vontade de aprender e trabalhar em equipe.',
      category: 'recrutamento'
    },
    {
      id: 4,
      question: 'Como funciona o sistema de builds do clã?',
      answer: 'Temos especialistas que desenvolvem e otimizam builds para diferentes cenários (PvE, PvP, DZ). Compartilhamos essas builds com todos os membros e oferecemos workshops para ensinar como utilizá-las efetivamente.',
      category: 'builds'
    },
    {
      id: 5,
      question: 'O clã participa de competições?',
      answer: 'Sim! Participamos de torneios PvP, competições de speed run em raids, e eventos especiais da comunidade. Também organizamos competições internas com prêmios para os melhores operadores.',
      category: 'competicoes'
    },
    {
      id: 6,
      question: 'Como é a comunicação durante as operações?',
      answer: 'Utilizamos Discord para comunicação durante todas as operações. Temos canais específicos para cada tipo de atividade, sistema de roles para organizadores, e sempre mantemos comunicação clara e profissional.',
      category: 'operacoes'
    },
    {
      id: 7,
      question: 'O clã aceita jogadores de todas as plataformas?',
      answer: 'Sim! Aceitamos jogadores de PC, PlayStation e Xbox. Embora não possamos jogar cross-platform, organizamos eventos específicos para cada plataforma e compartilhamos estratégias e builds entre todas.',
      category: 'recrutamento'
    },
    {
      id: 8,
      question: 'Como funciona o sistema de ranking interno?',
      answer: 'Temos um sistema de pontos baseado em participação em raids, contribuições para a comunidade, e desempenho em operações. Os membros com melhor ranking têm acesso a eventos exclusivos e podem se tornar líderes de equipe.',
      category: 'sistema'
    }
  ]

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Discord',
      description: 'Canal principal de comunicação',
      action: 'Entrar no Discord',
      link: '#discord',
      color: 'text-primary-red'
    },
    {
      icon: Mail,
      title: 'E-mail',
      description: 'Para assuntos oficiais',
      action: 'Enviar E-mail',
      link: 'mailto:recrutamento@filhosdocaos.com',
      color: 'text-white-80'
    },
    {
      icon: Users,
      title: 'Recrutamento',
      description: 'Processo de candidatura',
      action: 'Candidatar-se',
      link: '#recrutamento',
      color: 'text-primary-red'
    }
  ]

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
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

  const faqVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0.3 : 0.6,
        ease: "easeOut"
      }
    }
  }

  const contactVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: reducedMotion ? 0.3 : 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="contato" className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        {/* Header da Seção */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            FAQ & CONTATO
          </h2>
          <p className="text-xl text-white-80 max-w-3xl mx-auto leading-relaxed">
            Tire suas dúvidas e entre em contato conosco. Estamos aqui para ajudar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FAQ */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-8">
              PERGUNTAS FREQUENTES
            </h3>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <motion.div
                  key={faq.id}
                  className="border border-white/10 rounded-lg overflow-hidden"
                  variants={faqVariants}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left bg-black/40 hover:bg-black/60 transition-colors duration-300 flex items-center justify-between"
                  >
                    <span className="font-display font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openFAQ === faq.id ? (
                        <Minus className="w-5 h-5 text-primary-red" />
                      ) : (
                        <Plus className="w-5 h-5 text-white-80" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div
                        className="bg-black/20 border-t border-white/10"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reducedMotion ? 0.2 : 0.4 }}
                      >
                        <div className="p-6">
                          <p className="text-white-80 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contatos */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-8">
              ENTRE EM CONTATO
            </h3>

            <div className="space-y-6">
              {contactMethods.map((contact, index) => (
                <motion.div
                  key={index}
                  className="card-glass group hover:scale-105 transition-transform duration-300"
                  variants={contactVariants}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-primary-red/20 border border-primary-red/30`}>
                      <contact.icon className={`w-6 h-6 ${contact.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-semibold text-white mb-2">
                        {contact.title}
                      </h4>
                      <p className="text-white-80 text-sm mb-4">
                        {contact.description}
                      </p>
                      <a
                        href={contact.link}
                        className="btn-secondary text-sm py-2 inline-flex items-center"
                      >
                        {contact.action}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Informações Adicionais */}
            <motion.div
              className="mt-12 p-6 bg-black/40 rounded-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: reducedMotion ? 0.3 : 0.6, delay: 0.6 }}
            >
              <h4 className="font-display font-semibold text-white mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-primary-red" />
                INFORMAÇÕES IMPORTANTES
              </h4>
              <div className="space-y-3 text-sm text-white-80">
                <p>• Resposta em até 48 horas para candidaturas</p>
                <p>• Horário de atendimento: 19h-23h BRT</p>
                <p>• Discord obrigatório para membros ativos</p>
                <p>• Eventos e raids em português brasileiro</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Aviso Legal */}
        <motion.div
          className="text-center mt-20 p-6 bg-black/60 rounded-lg border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6, delay: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-5 h-5 text-white-80" />
            <span className="text-white-80 font-display font-semibold uppercase text-sm">
              Aviso Legal
            </span>
          </div>
          <p className="text-white-60 text-sm max-w-2xl mx-auto">
            Este é um fan-site não afiliado à Ubisoft Entertainment. The Division 2 é uma marca registrada da Ubisoft.
            Todas as referências ao jogo são feitas para fins informativos e de comunidade.
          </p>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.3 : 0.6, delay: 1.0 }}
        >
          <p className="text-white-80 mb-6 max-w-2xl mx-auto">
            Ainda tem dúvidas? Entre em contato conosco ou participe de nossa comunidade no Discord.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary">
              <MessageCircle className="w-5 h-5 mr-2" />
              Entrar no Discord
            </button>
            <button className="btn-secondary">
              <Mail className="w-5 h-5 mr-2" />
              Enviar Mensagem
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
