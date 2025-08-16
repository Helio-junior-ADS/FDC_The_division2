import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Sun, Moon, Globe, Heart, ExternalLink } from 'lucide-react'

const Footer = () => {
  const [themeIntensity, setThemeIntensity] = useState(50)
  const [language, setLanguage] = useState('pt-BR')

  const footerLinks = {
    cla: [
      { name: 'Sobre Nós', href: '#clan' },
      { name: 'História', href: '#historia' },
      { name: 'Liderança', href: '#lideranca' },
      { name: 'Valores', href: '#valores' }
    ],
    operacoes: [
      { name: 'Raids', href: '#raids' },
      { name: 'Dark Zone', href: '#dz' },
      { name: 'PvP', href: '#pvp' },
      { name: 'Treinamentos', href: '#treinamentos' }
    ],
    recursos: [
      { name: 'Builds', href: '#builds' },
      { name: 'Guias', href: '#guias' },
      { name: 'Calculadoras', href: '#calculadoras' },
      { name: 'Mídia', href: '#midia' }
    ],
    comunidade: [
      { name: 'Discord', href: '#discord' },
      { name: 'Eventos', href: '#eventos' },
      { name: 'Rankings', href: '#rankings' },
      { name: 'Fórum', href: '#forum' }
    ]
  }

  const socialLinks = [
    { name: 'Discord', href: '#discord', icon: '💬' },
    { name: 'YouTube', href: '#youtube', icon: '📺' },
    { name: 'Twitch', href: '#twitch', icon: '🎮' },
    { name: 'Instagram', href: '#instagram', icon: '📸' },
    { name: 'Twitter', href: '#twitter', icon: '🐦' }
  ]

  const handleThemeChange = (intensity) => {
    setThemeIntensity(intensity)
    // Aqui seria implementada a lógica para alterar a intensidade do tema
    document.documentElement.style.setProperty('--theme-intensity', intensity)
  }

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    // Aqui seria implementada a lógica para mudança de idioma
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-primary-red/20">
      <div className="container mx-auto px-4 py-16">
        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-10 h-10 text-primary-red" />
              <span className="font-display font-bold text-white text-xl">
                FILHOS DO CAOS
              </span>
            </div>
            <p className="text-white-80 mb-6 max-w-md leading-relaxed">
              Uma unidade tática de elite especializada em operações coordenadas e estratégias avançadas no The Division 2.
            </p>

            {/* Redes Sociais */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-black/40 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-primary-red/20 hover:border-primary-red/50 transition-all duration-300 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links de Navegação */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display font-semibold text-white mb-4 uppercase tracking-wider">
                {category === 'cla' ? 'CLÃ' :
                 category === 'operacoes' ? 'OPERAÇÕES' :
                 category === 'recursos' ? 'RECURSOS' :
                 'COMUNIDADE'}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white-80 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Separador */}
        <div className="border-t border-white/10 my-8" />

        {/* Configurações e Políticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Configurações */}
          <div className="space-y-6">
            <h4 className="font-display font-semibold text-white mb-4">
              CONFIGURAÇÕES
            </h4>

            {/* Intensidade do Tema */}
            <div>
              <label className="block text-white-80 text-sm mb-2">
                Intensidade do Vermelho
              </label>
              <div className="flex items-center space-x-3">
                <Sun className="w-4 h-4 text-white-60" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={themeIntensity}
                  onChange={(e) => handleThemeChange(parseInt(e.target.value))}
                  className="flex-1 h-2 bg-black/40 rounded-lg appearance-none cursor-pointer slider"
                />
                <Moon className="w-4 h-4 text-white-60" />
              </div>
              <div className="text-xs text-white-60 mt-1">
                {themeIntensity}%
              </div>
            </div>

            {/* Seletor de Idioma */}
            <div>
              <label className="block text-white-80 text-sm mb-2">
                Idioma
              </label>
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-black/40 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:border-primary-red focus:outline-none transition-colors duration-300"
              >
                <option value="pt-BR">Português (BR)</option>
                <option value="en-US">English (US)</option>
                <option value="es-ES">Español (ES)</option>
              </select>
            </div>
          </div>

          {/* Políticas e Informações */}
          <div className="space-y-6">
            <h4 className="font-display font-semibold text-white mb-4">
              INFORMAÇÕES
            </h4>

            <div className="space-y-3 text-sm text-white-80">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-primary-red" />
                <span>Fan-site não afiliado à Ubisoft</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-primary-red" />
                <span>Comunidade brasileira desde 2020</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-primary-red" />
                <span>Operações em português brasileiro</span>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <a href="#politica-privacidade" className="text-white-80 hover:text-white transition-colors duration-300 block">
                Política de Privacidade
              </a>
              <a href="#termos-uso" className="text-white-80 hover:text-white transition-colors duration-300 block">
                Termos de Uso
              </a>
              <a href="#cookies" className="text-white-80 hover:text-white transition-colors duration-300 block">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-white/10 my-8" />

        {/* Rodapé Final */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-white-60 text-sm">
              © {currentYear} Filhos do Caos. Todos os direitos reservados.
            </p>
            <p className="text-white-60 text-xs mt-1">
              The Division 2 é uma marca registrada da Ubisoft Entertainment.
            </p>
          </div>

          <div className="flex items-center space-x-4 text-sm text-white-80">
            <span>Desenvolvido com</span>
            <Heart className="w-4 h-4 text-primary-red" />
            <span>por</span>
            <a
              href="#equipe-desenvolvimento"
              className="text-primary-red hover:text-white transition-colors duration-300 flex items-center"
            >
              Equipe FDC
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Barra de Status */}
      <div className="bg-primary-red/10 border-t border-primary-red/20 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-xs text-white-80">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Sistema Online</span>
              </div>
              <span>•</span>
              <span>Última atualização: {new Date().toLocaleString('pt-BR')}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>Versão 1.0.0</span>
              <span>•</span>
              <span>Node 18+</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
