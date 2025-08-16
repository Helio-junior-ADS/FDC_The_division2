# 🚀 Configuração do Repositório GitHub

## 📋 Passos para criar o repositório:

### 1. **Criar repositório no GitHub**
- Acesse [github.com](https://github.com)
- Clique em "New repository" ou "Novo repositório"
- Nome: `filhos-do-caos-landing-page`
- Descrição: `🎮 Landing Page do clã Filhos do Caos para The Division 2`
- Público ou Privado (sua escolha)
- **NÃO** inicialize com README, .gitignore ou license (já temos)
- Clique em "Create repository"

### 2. **Configurar o remote origin**
Após criar o repositório, execute estes comandos:

```bash
# Substitua SEU_USUARIO pelo seu username do GitHub
git remote add origin https://github.com/SEU_USUARIO/filhos-do-caos-landing-page.git

# Verificar se foi adicionado
git remote -v

# Fazer push para o GitHub
git push -u origin main
```

### 3. **Estrutura do projeto**
```
filhos-do-caos/
├── src/
│   ├── components/          # Componentes React
│   ├── App.jsx             # App principal
│   ├── main.jsx            # Entry point
│   └── index.css           # Estilos globais
├── public/                  # Assets estáticos
├── dist/                   # Build de produção
├── package.json            # Dependências
├── vite.config.js          # Configuração Vite
├── tailwind.config.js      # Configuração Tailwind
├── README.md               # Documentação
└── DEMO.md                 # Guia de demonstração
```

### 4. **Comandos úteis**
```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview da produção
npm run preview

# Linting
npm run lint

# Formatação
npm run format
```

### 5. **Deploy**
O projeto está configurado para deploy em qualquer plataforma:
- **Vercel**: Conecte o repositório GitHub
- **Netlify**: Conecte o repositório GitHub
- **GitHub Pages**: Configure no Settings > Pages
- **Outros**: Use a pasta `dist/` gerada pelo build

## 🎯 **Próximos passos:**
1. Crie o repositório no GitHub
2. Execute os comandos de configuração
3. Faça o push inicial
4. Configure o deploy (opcional)

## 📞 **Suporte**
Se precisar de ajuda, consulte:
- [README.md](./README.md) - Documentação completa
- [DEMO.md](./DEMO.md) - Guia de demonstração
- [package.json](./package.json) - Scripts disponíveis
