# MedTech Community — Stitch Prompt Architecture
## Guia completo para gerar a landing page no Google Stitch

---

## ETAPA 1: Setup do Design System

### Ação: Importar DESIGN.md ou extrair de URL

**Opção A — DESIGN.md (recomendado):**
Importe o arquivo DESIGN.md no canvas do Stitch antes de qualquer geração.

**Opção B — Extrair de URL + ajustar:**
Cole: `anthropic.com`
Depois ajuste os tokens:
- Primary color → #1B6B54 (Jade)
- Background → #FAFAFA
- Font → Inter

---

## ETAPA 2: Prompts por Seção (usar sequencialmente)

### PROMPT 1 — Hero Section + Navigation

```
Create a landing page hero section for "MedTech Community",
an educational platform where healthcare professionals learn about
AI, Critical Care, and Anesthesiology.

BRAND:
- Wordmark logo: "Med" in #111111, "Tech" in #1B6B54
- Tagline: "Traduzindo tecnologia em linguagem simples"
- Language: Brazilian Portuguese

NAVIGATION:
- Fixed top bar, white background, 0.5px bottom border
- Left: wordmark "MedTech" (Med black, Tech jade #1B6B54)
- Right: links "IA", "Critical Care", "Anestesiologia", "Sobre", 
  and a primary CTA button "Comece Agora"
- Height: 64px

HERO:
- Full viewport height, centered content
- Large heading (56px, weight 300, Inter): 
  "Onde a medicina encontra a tecnologia"
- Subheading (18px, weight 400, #888888):
  "Conteúdo educacional de alta qualidade sobre IA, Terapia Intensiva 
  e Anestesiologia. Por quem vive a prática clínica."
- Two buttons side by side:
  - Primary (jade bg, white text): "Explorar Conteúdo"
  - Secondary (outlined, jade border): "Conhecer o Canal"
- Below buttons: subtle social proof text "1.000+ profissionais 
  de saúde já fazem parte"

STYLE:
- Apple/Anthropic minimalism
- Background: #FAFAFA
- NO gradients, NO decorative shapes, NO abstract blobs
- Font: Inter
- Generous whitespace — content occupies max 60% of viewport width
- Desktop layout: 1440px wide
```

### PROMPT 2 — Seção das 3 Verticais

```
w
```

### PROMPT 3 — Seção Sobre o Gabriel

```
Add a section about the founder.

LAYOUT:
- Background: #FAFAFA (alternating from white)
- Two columns: photo left (40%), text right (60%)
- Photo: circular crop, 280px diameter, with subtle 0.5px border
- Placeholder for photo

TEXT:
- Small label above name: "FUNDADOR" (12px, #888, uppercase, letter-spacing 2px)
- Name: "Gabriel Tavares" (28px, weight 500)
- Credentials: "Anestesiologista · Intensivista · Cirurgião Geral" (16px, #888)
- Bio paragraph (16px, weight 400, line-height 1.7):
  "Médico com tripla especialização, entusiasta de tecnologia e educação. 
  Criador do MedTech Community para ajudar profissionais de saúde 
  a dominar as ferramentas que estão transformando a medicina."
- Three small stat cards below bio:
  - "2 especialidades" 
  - "Residência em Anestesiologia"
  - "Criador de conteúdo desde 2025"

STYLE:
- Apple "about the team" aesthetic
- Clean, human, warm — not corporate
- Text aligned left, not centered
```

### PROMPT 4 — Seção de Produtos

```
Add a products/content section.

SECTION TITLE: "O que você encontra aqui" (28px, weight 500)

GRID: 2x2 card grid

CARD 1:
- Icon: play button shape
- Title: "YouTube"
- Description: "Vídeos aprofundados sobre IA, ferramentas e prática clínica"
- Badge: "Ativo" in jade-50 bg with jade-600 text

CARD 2:
- Icon: book shape
- Title: "Ebooks"
- Description: "Guias completos sobre engenharia de prompt e IA na medicina"
- Badge: "Em produção" in amber-50 bg with amber-600 text

CARD 3:
- Icon: graduation cap shape
- Title: "Cursos Online"
- Description: "Aprenda no seu ritmo com conteúdo estruturado e didático"
- Badge: "Em breve" in neutral-100 bg with neutral-400 text

CARD 4:
- Icon: chat bubble shape
- Title: "Chatbot IA"
- Description: "Assistente inteligente para protocolos de emergência"
- Badge: "Em desenvolvimento" in indigo-50 bg with indigo-600 text

STYLE:
- White background
- Cards same style as vertical cards (0.5px border, 12px radius)
- Badge: pill shape, 6px padding horizontal, 12px font, 20px radius
```

### PROMPT 5 — Newsletter CTA

```
Add a newsletter/community section near the bottom.

LAYOUT:
- Full-width section, jade-50 (#E8F5F0) background
- Centered content, max 600px wide
- Heading: "Faça parte da comunidade" (28px, weight 500)
- Subtext: "Receba conteúdo exclusivo sobre IA, medicina intensiva 
  e anestesiologia direto no seu email." (16px, #888)
- Email input + button in a single row:
  - Input: 48px height, white bg, 0.5px border, placeholder "Seu melhor email"
  - Button: jade-600 bg, white text, "Entrar" 
- Small text below: "Sem spam. Cancele quando quiser." (12px, #888)

STYLE:
- Soft, inviting, not aggressive
- Generous padding top/bottom (96px)
```

### PROMPT 6 — Footer

```
Add a minimal footer.

LAYOUT:
- Background: #111111 (dark)
- Text color: #999999
- Three columns:
  - Column 1: Wordmark "MedTech" (Med white, Tech jade) + tagline
  - Column 2: Links — "IA", "Critical Care", "Anestesiologia", "Sobre"
  - Column 3: Social icons (YouTube, Instagram, LinkedIn)
- Bottom bar: "© 2026 MedTech Community" centered, 12px, #666

STYLE:
- Dark, minimal, clean
- No decorative elements
- Links: #999, hover → #fff
- Height: compact, not sprawling
```

---

## ETAPA 3: Refinamento no Stitch

Após gerar todas as seções, use estes follow-up prompts:

### Crítica de hierarquia visual
```
Critique this full landing page design for visual hierarchy.
Is there a clear focal point? Do the sections flow naturally?
Are there any competing elements? Suggest improvements.
```

### Responsividade
```
Show me how this design adapts to mobile (375px width).
Stack all columns vertically. Navigation becomes hamburger menu.
Cards stack in a single column. Hero text reduces to 36px.
```

### Dark mode variant
```
Generate a dark mode version of this design.
Background: #111111, surfaces: #1A1A1A, borders: #333333.
Text: #FAFAFA primary, #999999 secondary.
Brand colors remain the same saturation.
```

---

## ETAPA 4: Export e Handoff

1. Selecione todas as telas no Stitch
2. Export → React components
3. Traga o código para o Claude com o prompt da Fase 2 do roadmap
4. Claude refatora para Next.js 14 + Tailwind + Framer Motion
5. Deploy na Vercel

---

## NOTAS PARA O PROMPT MULTIMODAL

Se quiser usar inputs multimodais no Stitch (imagem + texto):
- Faça um screenshot do site da Anthropic (anthropic.com) e arraste para o canvas
- Adicione junto o texto: "Use this visual style but with my brand colors (jade #1B6B54 as primary)"
- O Stitch vai combinar a referência visual com as instruções textuais

Se tiver sketches à mão (papel):
- Fotografe e arraste para o canvas
- O Stitch interpreta wireframes como input estrutural
