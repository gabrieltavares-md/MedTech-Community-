# Guia: Stitch MCP + Claude Code no VS Code
## Setup completo para o MedTech Community

---

## Pré-requisitos

Confirme que você tem tudo isso antes de começar:

- [x] VS Code instalado
- [x] Extensão Claude Code instalada no VS Code
- [ ] Node.js 18+ instalado (verifique: `node --version`)
- [ ] gcloud CLI instalado (vamos instalar se não tiver)
- [ ] Conta Google (a mesma do Stitch)

---

## PASSO 1 — Verificar Node.js

Abra o terminal integrado do VS Code (Cmd + `) e rode:

```bash
node --version
```

Se retornar v18+ ou superior, pule para o Passo 2.
Se não tiver Node.js, instale via:

```bash
# Mac (com Homebrew)
brew install node

# Ou baixe de https://nodejs.org
```

---

## PASSO 2 — Instalar e autenticar o Stitch MCP

No terminal integrado do VS Code, rode:

```bash
npx @_davideast/stitch-mcp init
```

Esse comando é um wizard interativo que vai:
1. Verificar se o gcloud CLI está instalado (instala se não tiver)
2. Abrir o browser para autenticação OAuth com sua conta Google
3. Habilitar a API do Stitch no seu projeto Google Cloud
4. Criar as credenciais necessárias
5. Configurar o MCP automaticamente

**IMPORTANTE:** Quando o browser abrir, faça login com a MESMA conta
Google que você usa no stitch.withgoogle.com.

Siga todas as instruções do wizard até ver a mensagem de sucesso.

---

## PASSO 3 — Configurar o MCP no Claude Code

O Claude Code no VS Code lê configurações MCP de dois lugares:

### Opção A — Configuração por projeto (recomendado)

Na raiz da sua pasta MedTech Community, crie o arquivo `.mcp.json`:

```json
{
  "mcpServers": {
    "stitch": {
      "command": "npx",
      "args": ["@_davideast/stitch-mcp", "proxy"]
    }
  }
}
```

### Opção B — Configuração global

Rode no terminal:

```bash
claude mcp add-json stitch '{"command":"npx","args":["@_davideast/stitch-mcp","proxy"]}' -s user
```

### Verificar se o MCP está ativo

No painel do Claude Code no VS Code, digite:

```
/mcp
```

Deve aparecer o servidor "stitch" na lista. Se aparecer com status
verde/ativo, está funcionando.

---

## PASSO 4 — Instalar as Stitch Skills para Claude Code

As Skills são "superpoderes" que ensinam o Claude Code a trabalhar 
melhor com o Stitch. Rode no terminal:

```bash
# Skill principal — design + geração de telas
npx skills add google-labs-code/stitch-skills --skill stitch-design --global

# Skill para converter HTML do Stitch em React components
npx skills add google-labs-code/stitch-skills --skill react:components --global

# (Opcional) Skill para shadcn/ui components
npx skills add google-labs-code/stitch-skills --skill shadcn-ui --global
```

---

## PASSO 5 — Verificar conexão com seu projeto Stitch

No terminal, rode:

```bash
npx @_davideast/stitch-mcp view --projects
```

Deve listar seus projetos do Stitch, incluindo o projeto MedTech.
Anote o `project-id` do projeto que você quer usar.

Para ver as telas de um projeto específico:

```bash
npx @_davideast/stitch-mcp view --project <SEU-PROJECT-ID>
```

---

## PASSO 6 — Servir o design localmente (preview)

Para ver suas telas do Stitch rodando no browser local:

```bash
npx @_davideast/stitch-mcp serve -p <SEU-PROJECT-ID>
```

Isso abre um servidor Vite local com todas as telas do seu projeto.
Acesse http://localhost:3000 (ou a porta indicada) para visualizar.

---

## PASSO 7 — Usar o Claude Code para converter design em código

Agora a parte mágica. No painel do Claude Code no VS Code, você pode
pedir diretamente:

### Exemplo 1 — Gerar o site inteiro

```
Conecte ao meu projeto Stitch MedTech e construa um site Next.js 14 
com Tailwind CSS. Use o DESIGN.md na raiz do projeto como referência 
para os design tokens. Mapeie as telas assim:
- Hero + Full landing page → rota "/"
- Dark mode version → tema alternativo

Componentize em: Header, Hero, VerticalCards, AboutSection, 
ProductGrid, YouTubeSection, NewsletterCTA, Footer.

Use Framer Motion para animações sutis de entrada.
Prepare para deploy na Vercel.
```

### Exemplo 2 — Gerar componente específico

```
Pegue a tela "MedTech Landing Page Hero" do meu projeto Stitch 
e converta em um componente React com Tailwind. Siga o DESIGN.md 
para cores e tipografia.
```

### Exemplo 3 — Build site com mapeamento de rotas

No terminal:

```bash
npx @_davideast/stitch-mcp site -p <SEU-PROJECT-ID>
```

Isso gera um site Astro completo mapeando cada tela para uma rota.
Você pode depois pedir ao Claude Code para converter de Astro 
para Next.js se preferir.

### Exemplo 4 — Pegar código HTML de uma tela específica

No terminal:

```bash
npx @_davideast/stitch-mcp tool get_screen_code -d '{"screenId": "<SCREEN-ID>"}'
```

O código HTML/CSS é retornado e pode ser usado como base para 
o Claude Code refatorar.

---

## PASSO 8 — Estrutura do projeto resultante

Após o Claude Code gerar o código, sua pasta deve ficar assim:

```
medtech-community/
├── .mcp.json                 ← Config do MCP (Stitch)
├── DESIGN.md                 ← Design system (já criado)
├── STITCH_PROMPTS.md         ← Prompts reference (já criado)
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── public/
│   ├── fonts/
│   └── images/
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← Layout raiz + fonts
│   │   ├── page.tsx          ← Landing page (/)
│   │   └── globals.css       ← Tailwind + design tokens
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── VerticalCards.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── YouTubeSection.tsx
│   │   ├── NewsletterCTA.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── constants.ts      ← Design tokens como JS
└── vercel.json
```

---

## PASSO 9 — Deploy na Vercel

Quando o código estiver pronto:

```bash
# Instalar dependências
npm install

# Testar localmente
npm run dev

# Deploy
npx vercel
```

Ou conecte o repositório GitHub à Vercel para auto-deploy.

---

## Comandos úteis do Stitch MCP (referência rápida)

```bash
# Ver todos os projetos
npx @_davideast/stitch-mcp view --projects

# Ver telas de um projeto
npx @_davideast/stitch-mcp view --project <id>

# Servir preview local
npx @_davideast/stitch-mcp serve -p <id>

# Gerar site Astro
npx @_davideast/stitch-mcp site -p <id>

# Pegar HTML de uma tela
npx @_davideast/stitch-mcp tool get_screen_code -d '{"screenId":"<id>"}'

# Pegar screenshot de uma tela (base64)
npx @_davideast/stitch-mcp tool get_screen_image -d '{"screenId":"<id>"}'

# Build site com rotas customizadas
npx @_davideast/stitch-mcp tool build_site -d '{
  "projectId": "<id>",
  "routes": [
    {"screenId": "abc", "route": "/"},
    {"screenId": "def", "route": "/about"}
  ]
}'

# Verificar status do MCP no Claude Code
# Digite no painel do Claude Code:
/mcp

# Logout/reset se algo der errado
npx @_davideast/stitch-mcp logout --force --clear-config
npx @_davideast/stitch-mcp init
```

---

## Troubleshooting

### "Authentication failed"
```bash
npx @_davideast/stitch-mcp logout --force
npx @_davideast/stitch-mcp init
```

### "Project not found"
Verifique se está usando a mesma conta Google do Stitch.

### MCP não aparece no Claude Code
1. Verifique se o .mcp.json está na raiz do projeto
2. Recarregue a janela do VS Code (Cmd+Shift+P → "Reload Window")
3. Digite /mcp no Claude Code para verificar status

### "npx skills" não funciona
```bash
npm install -g skills
npx skills add google-labs-code/stitch-skills --list
```