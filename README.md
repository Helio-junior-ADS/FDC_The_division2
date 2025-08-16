# 🎮 Filhos do Caos - Landing Page

Landing page oficial do clã **Filhos do Caos** para The Division 2, desenvolvida com React, Vite e Tailwind CSS seguindo as especificações do PDR (Product Design Requirements).

## ✨ Características

- **Design Urbano-Futurista**: Interface tática com paleta preto + vermelho
- **Hero Cinemático**: Vídeo de fundo full-screen com overlay e animações
- **Responsivo**: Otimizado para desktop, tablet e mobile
- **Acessível**: Conformidade WCAG AA e suporte a preferências de movimento reduzido
- **Performance**: Otimizado para Core Web Vitals
- **SEO**: Meta tags, Open Graph e Schema.org implementados

## 🚀 Tecnologias

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animações**: Framer Motion + GSAP
- **Áudio**: Howler.js
- **Ícones**: Lucide React
- **Tipografia**: Rajdhani, Orbitron, Inter

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn

## 🛠️ Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/filhos-do-caos.git
   cd filhos-do-caos
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Navbar.jsx      # Navegação principal
│   ├── HeroSection.jsx # Seção hero com vídeo
│   ├── ClanSection.jsx # Seção "Quem Somos"
│   ├── BuildsSection.jsx # Showcase de builds
│   ├── RaidsSection.jsx # Raids e eventos
│   ├── MediaSection.jsx # Galeria de mídia
│   ├── RecruitmentSection.jsx # Formulário de recrutamento
│   ├── CommunitySection.jsx # Comunidade e integrações
│   ├── FAQSection.jsx  # FAQ e contato
│   ├── Footer.jsx      # Rodapé
│   ├── AudioController.jsx # Controle de áudio
│   └── DiscordCTA.jsx  # CTA do Discord
├── App.jsx             # Componente principal
├── main.jsx            # Ponto de entrada
└── index.css           # Estilos globais e Tailwind
```

## 🎨 Componentes Principais

### Hero Section
- Vídeo de fundo full-screen (100vh)
- Overlay com grade sutil, vinheta e scanlines
- Headline com animação "reveal com máscara de luz"
- CTAs principais e secundários
- Indicador de scroll animado

### Navbar
- Sticky com blur e transparência
- Redução de altura ao rolar
- Menu mobile com drawer lateral
- Navegação suave entre seções

### Builds Section
- Showcase de builds com hover parallax
- Visualização exploded view
- Categorias: Meta PvE, DZ & PvP, Suporte
- Navegação entre builds

### Raids Section
- Timeline visual de raids futuras e concluídas
- Modal de participação com pré-requisitos
- Integração com calendários externos
- Filtros por dificuldade e status

### Media Section
- Galeria masonry responsiva
- Filtros por categoria
- Modal de visualização
- Suporte a vídeos e imagens

### Recruitment Section
- Formulário em 2 passos
- Seleção de função, disponibilidade, plataforma
- Validação de campos obrigatórios
- Integração com Discord

## 🎵 Funcionalidades de Áudio

- **Controle de Áudio**: Botão flutuante com toggle
- **Som de Rádio**: Ambiente criptografado/ruído eletrônico
- **Fallback**: Áudio sintético se arquivo não carregar
- **Persistência**: Preferência salva no localStorage
- **Volume**: Controle deslizante com porcentagem

## 🎭 Animações e Motion

- **Framer Motion**: Animações de entrada e transições
- **GSAP**: Animações complexas e parallax
- **Intersection Observer**: Animações baseadas em scroll
- **Reduced Motion**: Respeita preferências de acessibilidade
- **Microinterações**: Hover, tap e ripple effects

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm, md, lg, xl
- **Touch Friendly**: Gestos e interações touch
- **Performance**: Otimizações específicas para mobile

## ♿ Acessibilidade

- **Contraste**: Mínimo 4.5:1 (WCAG AA)
- **Foco**: Ring vermelho visível em todos os elementos
- **Navegação**: Suporte completo a teclado
- **Screen Readers**: Labels e ARIA apropriados
- **Reduced Motion**: Toggle para reduzir animações

## 🔧 Configuração

### Variáveis de Ambiente
```bash
# .env
VITE_APP_TITLE=Filhos do Caos
VITE_APP_DESCRIPTION=Clã The Division 2
VITE_DISCORD_INVITE=https://discord.gg/filhosdocaos
```

### Tailwind CSS
- Cores customizadas do PDR
- Animações e keyframes
- Componentes utilitários
- Responsividade

### Framer Motion
- Variants para animações
- Transições suaves
- Gestos e interações
- Performance otimizada

## 📊 Performance

- **Lazy Loading**: Imagens e componentes
- **Code Splitting**: Carregamento sob demanda
- **Optimização**: Imagens WebP/AVIF
- **Cache**: Headers agressivos
- **Bundle**: Otimizado e minificado

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

### Preview
```bash
npm run preview
```

### Deploy no Vercel
```bash
npm install -g vercel
vercel --prod
```

## 📝 Scripts Disponíveis

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0"
}
```

## 🎯 Funcionalidades Futuras

- [ ] Integração real com Discord API
- [ ] Sistema de autenticação
- [ ] Dashboard de membros
- [ ] Sistema de notificações push
- [ ] PWA (Progressive Web App)
- [ ] Internacionalização (i18n)
- [ ] Analytics e métricas
- [ ] Testes automatizados

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é um fan-site não afiliado à Ubisoft Entertainment. The Division 2 é uma marca registrada da Ubisoft.

## 📞 Contato

- **Discord**: [Filhos do Caos](https://discord.gg/filhosdocaos)
- **Email**: recrutamento@filhosdocaos.com
- **Website**: [filhosdocaos.com](https://filhosdocaos.com)

## 🙏 Agradecimentos

- Comunidade The Division 2
- Equipe de desenvolvimento FDC
- Contribuidores e testadores
- Inspiração da identidade visual do clã

---

**Desenvolvido com ❤️ pela Equipe Filhos do Caos**
