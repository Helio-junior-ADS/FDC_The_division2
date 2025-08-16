#!/bin/bash

# 🚀 Script de Configuração do GitHub para Filhos do Caos
# Este script configura o remote origin e faz o push inicial

echo "🎮 Configurando repositório GitHub para Filhos do Caos..."
echo ""

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ Erro: Execute este script no diretório do projeto (filhos-do-caos)"
    exit 1
fi

# Solicitar username do GitHub
read -p "👤 Digite seu username do GitHub: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ Username não pode estar vazio"
    exit 1
fi

echo ""
echo "🔗 Configurando remote origin..."

# Adicionar remote origin
git remote add origin "https://github.com/$GITHUB_USERNAME/filhos-do-caos-landing-page.git"

# Verificar se foi adicionado
if git remote -v | grep -q "origin"; then
    echo "✅ Remote origin configurado com sucesso!"
    echo ""
    echo "🌐 URLs configuradas:"
    git remote -v
    echo ""

    echo "📤 Fazendo push para o GitHub..."
    git push -u origin main

    if [ $? -eq 0 ]; then
        echo ""
        echo "🎉 Repositório configurado com sucesso!"
        echo "🌐 Acesse: https://github.com/$GITHUB_USERNAME/filhos-do-caos-landing-page"
        echo ""
        echo "📋 Próximos passos:"
        echo "1. Configure o deploy (Vercel, Netlify, etc.)"
        echo "2. Adicione colaboradores se necessário"
        echo "3. Configure GitHub Pages se desejar"
    else
        echo "❌ Erro ao fazer push. Verifique se o repositório foi criado no GitHub."
    fi
else
    echo "❌ Erro ao configurar remote origin"
    exit 1
fi
