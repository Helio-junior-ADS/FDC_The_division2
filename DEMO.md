# 🎮 Demonstração - Filhos do Caos Landing Page

## 🚀 Como Executar

### 1. Instalação
```bash
# Clone o repositório
git clone <url-do-repositorio>
cd filhos-do-caos

# Instale as dependências
npm install
```

### 2. Execução
```bash
# Modo desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview da produção
npm run preview
```

## 🎯 Funcionalidades Demonstradas

### Hero Section
- **Vídeo de Fundo**: Placeholder com fallback para imagem
- **Overlay**: Grade sutil, vinheta e scanlines
- **Headline**: Animação "reveal com máscara de luz"
- **CTAs**: Botões principais e secundários
- **Scroll Indicator**: Animação de scroll

### Navegação
- **Navbar Sticky**: Com blur e transparência
- **Responsivo**: Menu mobile com drawer
- **Animações**: Transições suaves
- **Scroll**: Redução de altura ao rolar

### Seções Principais
- **Clã**: Grid 2x2 com cards em vidro fosco
- **Builds**: Showcase com hover parallax
- **Raids**: Timeline visual e modal de participação
- **Mídia**: Galeria masonry com filtros
- **Recrutamento**: Formulário em 2 passos
- **Comunidade**: Widget Discord e agenda
- **FAQ**: Acordeão interativo

### Componentes Flutuantes
- **Audio Controller**: Controle de áudio com Howler.js
- **Discord CTA**: CTA persistente expandível

## 🎨 Design System

### Cores
- **Charcoal**: #0B0B0D
- **Graphite**: #141418
- **Primary Red**: #D9162A
- **Deep Red**: #990F1C
- **Metal Gray**: #2A2A31
- **Mist**: #8C8C98

### Tipografia
- **Display**: Rajdhani / Orbitron (condensada/tech)
- **Body**: Inter (alta legibilidade)
- **Hierarquia**: Escalas nítidas e consistentes

### Componentes
- **Botões**: Primário, secundário e terciário
- **Cards**: Vidro fosco com bordas vermelhas
- **Badges**: Micro caps com tracking
- **Tooltips**: Pretos com borda vermelha

## 🎭 Animações

### Framer Motion
- **Entrada**: Fade in com stagger
- **Hover**: Scale e translate
- **Transições**: Suaves e físicas
- **Reduced Motion**: Respeita preferências

### GSAP
- **Parallax**: Efeitos de profundidade
- **Timeline**: Animações sequenciais
- **Easing**: Curvas naturais

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Adaptações
- **Grid**: Colunas responsivas
- **Tipografia**: Escalas adaptativas
- **Navegação**: Menu mobile otimizado
- **Touch**: Gestos e interações

## ♿ Acessibilidade

### Contraste
- **Mínimo**: 4.5:1 (WCAG AA)
- **Foco**: Ring vermelho visível
- **Texto**: Nunca só em vermelho

### Navegação
- **Teclado**: Suporte completo
- **Screen Readers**: Labels apropriados
- **Reduced Motion**: Toggle disponível

## 🎵 Áudio

### Howler.js
- **Som de Rádio**: Ambiente criptografado
- **Fallback**: Áudio sintético
- **Controles**: Volume e toggle
- **Persistência**: localStorage

## 🔧 Configuração

### Variáveis CSS
```css
:root {
  --theme-intensity: 50%;
  --primary-red: #D9162A;
  --charcoal: #0B0B0D;
}
```

### Tailwind
```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'charcoal': '#0B0B0D',
      'primary-red': '#D9162A',
      // ... outras cores
    }
  }
}
```

## 📊 Performance

### Métricas
- **LCP**: < 2.5s
- **CLS**: < 0.1
- **INP**: < 200ms

### Otimizações
- **Code Splitting**: Chunks otimizados
- **Lazy Loading**: Imagens e componentes
- **Bundle**: Minificado e comprimido
- **Cache**: Headers agressivos

## 🚀 Deploy

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload da pasta dist/
```

### GitHub Pages
```bash
npm run build
# Configurar Actions para deploy automático
```

## 🧪 Testes

### Linting
```bash
npm run lint
npm run lint:fix
```

### Formatação
```bash
npm run format
npm run format:check
```

### Build
```bash
npm run build
npm run preview
```

## 📝 Personalização

### Cores
Edite `tailwind.config.js` para alterar a paleta de cores.

### Conteúdo
Modifique os dados nos componentes para seu clã.

### Imagens
Substitua os placeholders por imagens reais.

### Vídeos
Adicione vídeos MP4/WebM na pasta `public/`.

## 🎯 Próximos Passos

1. **Conteúdo Real**: Substituir placeholders
2. **Integração Discord**: API real
3. **Backend**: Sistema de candidaturas
4. **Analytics**: Métricas de usuários
5. **PWA**: Progressive Web App
6. **Testes**: Unit e E2E

## 📞 Suporte

- **Issues**: GitHub Issues
- **Discord**: Comunidade FDC
- **Email**: suporte@filhosdocaos.com

---

**🎮 Divirta-se explorando a landing page dos Filhos do Caos!**
