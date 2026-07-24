# SPEC — Sistema Multiagêntico de Frontend (frontend-MAS)

**Projeto:** medtech-community
**Status:** PROPOSTA — aguarda aprovação do dono antes de qualquer execução
**Versão:** 1.0 · 2026-07-24
**Autor:** sessão Claude Code (worktree `add-react-ts-coder-agent`)

---

## 0. O que este documento é (e o que não é)

**É** a especificação de requisitos de um pipeline de 4 agentes — **planejador → coder → teste → reviewer** — para desenvolvimento de frontend no medtech-community, incluindo a matriz que traduz cada feature de React e TypeScript em três requisitos acionáveis: **como implementar**, **como verificar**, **o que revisar**.

**Não é** a execução. Conforme a metodologia SPEC do workspace (`~/Dev/CLAUDE.md`), plano ≠ execução: este documento termina em ponto de aprovação. A refatoração de `react-ts-coder.md` e a criação dos outros três agentes acontecem depois, em sessão própria, com handoff picotado entre ondas.

**Convenção de leitura:** requisitos têm ID estável (`RQ-R-12`, `RF-T-03`, `RI-02`) e são referenciáveis pelos agentes em runtime. Os agentes devem citar o ID nos seus relatórios.

---

## 1. Problema

Hoje existe **um único agente** (`react-ts-coder`) que implementa e explicitamente não verifica nada — o próprio prompt diz "entregue o código pronto para ele verificar", mas o agente de teste que ele pressupõe **não existe**. O resultado prático é código escrito por agente que chega ao repo sem nenhum gate automático além do que o dono rodar à mão.

Três lacunas concretas:

1. **Não há etapa de planejamento.** O coder recebe linguagem natural e decide sozinho decomposição de componentes, onde mora o estado e a fronteira server/client — decisões arquiteturais tomadas dentro da mesma janela que escreve o código, sem revisão.
2. **Não há verificação.** O repo não tem runner de teste, nem script de `tsc`, nem gate de acessibilidade (ver §2). O agente de teste referenciado é uma promessa vazia.
3. **A pesquisa não está ligada ao agente.** `.claude/research/react-features.md` e `typescript-features.md` foram produzidos como grounding, mas `react-ts-coder.md` não os menciona nem os carrega — logo, não têm efeito sobre o código gerado.

Este SPEC fecha as três.

---

## 2. Terreno verificado (baseline do repo)

Levantado por inspeção direta em 2026-07-24, worktree `add-react-ts-coder-agent`. **Tudo abaixo é fato observado, não suposição.**

### 2.1 Stack

| Item | Valor observado | Fonte |
|---|---|---|
| Framework | Next.js **14.2.35**, App Router | `package.json` |
| React | `^18` / `react-dom` `^18` | `package.json` |
| TypeScript | `^5`, `strict: true`, `noEmit: true` | `tsconfig.json` |
| Module resolution | `module: esnext`, `moduleResolution: bundler`, `isolatedModules: true` | `tsconfig.json` |
| Alias | `@/*` → `./*` | `tsconfig.json` |
| Lint | `next/core-web-vitals` + `next/typescript` | `.eslintrc.json` |
| Estilo | Tailwind 3.4 + `@tailwindcss/typography` | `package.json`, `tailwind.config.ts` |
| Animação | `framer-motion` `^10.18.0` | `package.json` |
| Sanitização | `isomorphic-dompurify` `^3.7.1` | `package.json` |
| Deploy | Vercel | `vercel.json` |

### 2.2 Estrutura

```
app/                  App Router; route group (dark) para as verticais escuras
  layout.tsx          metadata raiz
  (dark)/layout.tsx   metadata do grupo
  (dark)/ia/…         3 trilhas com [slug] + generateStaticParams + generateMetadata
components/ui/        Button, Card, ExpertChip, Logo
components/sections/  Hero, ProductGrid, VerticalCards, CategoryFilter, NewsletterCTA, Ebook*
components/layout/    Header, Footer, ReaderLayout
components/pages/     ChapterReader, CriticalCarePage, IAPage
lib/                  products.ts, tokens.ts, verticals.ts
content/              fundamentos-ia.ts, engenharia-prompt.ts, dominando-claude.ts
DESIGN.md             design system v1.0 (cores por vertical, tipografia, a11y, motion)
```

Convenções observadas: `export default` do componente + `interface XProps` no mesmo arquivo; 14 dos 19 componentes são Client Components (`'use client'`); as `page.tsx` são Server Components.

### 2.3 O que NÃO existe (crítico para o desenho)

- ❌ **Nenhum runner de teste.** Sem `vitest`, `jest`, `@testing-library/*`, `playwright`, `cypress`.
- ❌ **Nenhum gate de acessibilidade** (`axe-core`, `jest-axe`, `@axe-core/playwright`).
- ❌ **Nenhum script `typecheck`.** `tsc --noEmit` só roda via `npx`.
- ❌ **Nenhum CI.** Não há `.github/workflows/`.
- ❌ **Nenhuma pesquisa de grounding sobre App Router / React Server Components** — a lacuna mais séria (ver §13.1).
- ⚠️ `.claude/command/front-end.md` existe mas está **vazio**.
- ⚠️ **`node_modules/` ausente** neste worktree. Nenhum gate roda antes de `npm install` — inclusive os três que já existiriam hoje (`lint`, `tsc`, `build`). Passo zero de O2.

**Consequência de desenho:** o agente de teste, hoje, só teria três comandos reais: `next lint`, `npx tsc --noEmit`, `next build`. Um pipeline sério exige a infraestrutura da §9 como pré-requisito, não como melhoria futura.

---

## 3. Decisões que precisam do dono

Escritas com recomendação para não bloquear a leitura. O SPEC assume o padrão recomendado; se o dono decidir diferente, as seções marcadas mudam.

| # | Decisão | Padrão assumido (recomendado) | Alternativa | Impacta |
|---|---|---|---|---|
| **D1** | Infra de teste | **Vitest + RTL + Playwright + axe** — Next 14 documenta oficialmente Vitest e Playwright | Modo mínimo: só `lint`+`tsc`+`build` (agente de teste vira "verificador estático") | §9, coluna VERIF de toda a matriz |
| **D2** | Versão do React | **Permanecer no React 18.** Features 19-only ficam PROIBIDAS ao coder | Migrar para 19 (libera `use()`, ref-as-prop, Actions) | §7.17, todas as linhas ❌ |
| **D3** | Poder de escrita do reviewer | **Sem `Write`/`Edit`** — read-only por ausência de ferramenta, como os validadores do workspace; o relatório volta como texto final e o orquestrador persiste | Dar `Write` restrito ao arquivo de review | §6.4 |
| **D4** | Orquestração | **Handoff picotado manual** — cada agente para e devolve o controle, conforme `~/Dev/CLAUDE.md` | Workflow automático encadeado | §4.3 |
| **D5** | Onde vivem os artefatos de run | `.claude/runs/<data>-<slug>/` versionado no git | `$CLAUDE_JOB_DIR` (efêmero) | §5 |
| **D6** | Escopo do primeiro piloto | 1 componente novo de complexidade média em `components/sections/` | Refatorar um componente existente | §12 |

---

## 4. Arquitetura do pipeline

### 4.1 Fluxo

```
                    ┌──────────────────────────────────────────┐
   pedido do dono   │                                          │
        │           │              (loop de correção)          │
        ▼           ▼                                          │
  ┌───────────┐  ┌───────┐  ┌────────┐  ┌──────────┐          │
  │PLANEJADOR │─▶│ CODER │─▶│ TESTE  │─▶│ REVIEWER │──────────┘
  │  (Opus)   │  │(Sonnet)│ │(Sonnet)│  │  (Opus)  │
  └───────────┘  └───────┘  └────────┘  └──────────┘
     01-plan.md   02-impl.md  03-test.md  04-review.md
        │             │           │            │
        └─── ⏸ ───────┴──── ⏸ ────┴───── ⏸ ────┴──▶ ⏸ decisão do dono
     (⏸ = checkpoint: o agente PARA e devolve o controle)
```

### 4.2 Papéis em uma frase

| Agente | Pergunta que ele responde | Não faz |
|---|---|---|
| **planejador** | *O que construir, com que decomposição, que estado, que fronteira server/client, e como saberemos que ficou certo?* | Não escreve código de produção |
| **coder** | *Como escrever exatamente isso, seguindo a convenção do repo?* | Não decide arquitetura, não verifica |
| **teste** | *Isso funciona e prova o que o plano prometeu?* | Não decide se o design está certo |
| **reviewer** | *Isso é o código certo, e o que lint/tsc/teste não conseguem pegar está OK?* | Não corrige (D3) |

### 4.3 Regras de handoff (D4)

- **RF-O-01** — Cada agente termina escrevendo seu artefato (§5) e **para**. O orquestrador (sessão principal) lê, reporta ao dono, e só então dispara o próximo. Não encadear os quatro num disparo só.
- **RF-O-02** — Nenhum agente lê o contexto de outro por memória compartilhada. O **único** canal de handoff é o arquivo do run. Se não está escrito, não foi comunicado.
- **RF-O-03** — Loop de correção teste→coder: **máximo 2 rodadas**. Na 3ª falha do mesmo gate, escala ao dono com o diagnóstico. Rodadas ganham sufixo (`02-impl.r2.md`).
- **RF-O-04** — Roteamento do reprovado pelo reviewer: achado **BLOQUEANTE de implementação** → volta ao coder; achado **BLOQUEANTE de escopo/arquitetura** → volta ao planejador (o plano estava errado, não o código).
- **RF-O-05** — Nenhum commit, push ou PR acontece dentro do pipeline. Só depois do checkpoint final do dono.

---

## 5. Contratos de handoff (artefatos)

Diretório do run: `.claude/runs/<AAAA-MM-DD>-<slug>/`

Cada artefato é um Markdown com **seções obrigatórias**. Seção obrigatória ausente = artefato inválido; o agente seguinte deve recusar e devolver.

### 5.1 `00-request.md` (orquestrador)
Pedido original do dono, verbatim + restrições conhecidas (vertical de marca, responsividade, dark mode, prazo).

### 5.2 `01-plan.md` (planejador) — **contrato**

| Seção | Conteúdo obrigatório |
|---|---|
| `## Objetivo` | 1 frase. O que o usuário final passa a conseguir fazer. |
| `## Escopo` | Lista `IN` e lista `OUT`. `OUT` é obrigatória e não pode ser vazia. |
| `## Evidência lida` | Arquivos do repo lidos, com `caminho:linha` do padrão análogo que será replicado. Sem isso o plano é chute. |
| `## Decomposição` | Árvore de componentes com responsabilidade única de cada um (Thinking in React, passo 1). |
| `## Estado` | Estado **mínimo e completo** (passo 3) + onde cada peça mora (passo 4) + justificativa de por que não é derivável. |
| `## Fronteira server/client` | Por arquivo: Server Component ou Client Component, e **por quê**. Ver §7.18. |
| `## Contrato de tipos` | Assinatura das `interface`s de props e dos tipos de domínio novos. |
| `## Features previstas` | IDs da matriz (§7/§8) que a implementação vai exercer, ex. `RQ-R-31` (`useEffect` com cleanup), `RQ-T-14` (discriminated union). |
| `## Critérios de aceite` | Lista numerada `CA-1…CA-n`, **verificáveis**, cada um redigido como algo que um teste pode provar. É o insumo direto do agente de teste. |
| `## Lacunas` | Copy, dado clínico, token de cor ou regra de negócio que **falta** — nunca preenchido por suposição. |
| `## Riscos` | Trade-offs que pedem decisão humana. |

### 5.3 `02-impl.md` (coder) — **contrato**

| Seção | Conteúdo obrigatório |
|---|---|
| `## Resumo` | 1–3 frases. |
| `## Arquivos` | Criados/modificados, com o papel de cada um. |
| `## Rastreabilidade` | Tabela: item do plano → `arquivo:linha`. Todo item `IN` do escopo aparece aqui ou é justificado. |
| `## Features aplicadas` | IDs da matriz efetivamente usados + justificativa quando a escolha não é óbvia (ex. por que `useReducer` e não `useState`). |
| `## Desvios do plano` | Obrigatória. "Nenhum" é resposta válida; omitir a seção não é. |
| `## Lacunas` | O que o plano não respondeu e travou a implementação. |
| `## Declaração` | "Código NÃO verificado — nenhum lint/tsc/build/teste foi executado." |

### 5.4 `03-test.md` (teste) — **contrato**

| Seção | Conteúdo obrigatório |
|---|---|
| `## Gates` | Tabela: gate → comando → status (PASS/FAIL/SKIP) → motivo do SKIP. Gates da §9.3. |
| `## Testes escritos` | Arquivo de teste → o que prova → qual `CA-n` do plano cobre. |
| `## Cobertura dos critérios de aceite` | Cada `CA-n` do plano: COBERTO / NÃO COBERTO + motivo. Não pode ficar em branco. |
| `## Falhas` | Por falha: `arquivo:linha`, reprodução mínima, e o ID de requisito da matriz violado (quando aplicável). |
| `## Veredito` | `PASS` / `FAIL` / `PASS-COM-RESSALVA` (+ lista das ressalvas). |

### 5.5 `04-review.md` (reviewer) — **contrato**

| Seção | Conteúdo obrigatório |
|---|---|
| `## Veredito` | `APROVADO` / `APROVADO-COM-RESSALVAS` / `REPROVADO`. |
| `## Achados` | Por achado: severidade (`BLOQUEANTE` / `IMPORTANTE` / `NIT`), `arquivo:linha`, ID do requisito violado, **cenário concreto de falha** (entrada → comportamento errado). Achado sem cenário concreto é opinião, não achado. |
| `## Aderência ao plano` | Implementou a menos? Implementou além do escopo? |
| `## Aderência à convenção` | Comparação com o componente análogo citado no plano. |
| `## Checagem-R` | O que o reviewer verificou **porque nenhuma ferramenta pega** (todas as linhas marcadas `R` na matriz que se aplicam a este diff). |
| `## Nada a corrigir` | Se aplicável, dizer explicitamente. Reviewer não inventa achado para justificar existência. |

---

## 6. Requisitos por agente

### 6.0 Frontmatter — forma canônica

Todos em `.claude/agents/*.md`, com `name`, `description` (com `<example>`), `model`, `effort`, `tools`.

### 6.1 `frontend-planner` (NOVO)

- **RF-P-01** — `model: opus`, `effort: high`. É a etapa de raciocínio arquitetural; economia de modelo aqui é falsa economia.
- **RF-P-02** — `tools: Read, Grep, Glob, Write`. **Sem `Edit`, sem `Bash`.** O único `Write` permitido é `01-plan.md`; escrever qualquer outro arquivo é violação.
- **RF-P-03** — Antes de planejar, **obrigatoriamente** ler: `DESIGN.md`, o(s) diretório(s) de `components/` relevante(s), `lib/tokens.ts`, `lib/verticals.ts`, e ao menos **um** componente análogo completo. A seção `## Evidência lida` prova isso.
- **RF-P-04** — Aplicar "Thinking in React" nos 5 passos como método explícito de decomposição (§7.3).
- **RF-P-05** — Decidir a fronteira server/client **por arquivo** e justificar. É a decisão de maior custo de correção tardia no App Router.
- **RF-P-06** — Escrever critérios de aceite `CA-n` verificáveis. Critério não verificável ("a UI deve ficar bonita") é defeito do plano.
- **RF-P-07** — Marcar os IDs da matriz que a implementação vai exercer, para que teste e reviewer saibam o que cobrar.
- **RF-P-08** — **Never-invent.** Copy, dado clínico, número, cor ou regra que não está no repo nem no pedido vai para `## Lacunas`, nunca para o plano como se fosse fato.
- **RF-P-09** — Não escrever código de produção. Snippet ilustrativo de assinatura de tipo é permitido dentro de `## Contrato de tipos`; implementação não.

### 6.2 `react-ts-coder` (REFATORAR — existe)

Mudanças exigidas em relação ao arquivo atual:

- **RF-C-01** — Entrada passa a ser **`01-plan.md`**, não linguagem natural solta. Se o plano estiver ausente ou com seção obrigatória faltando, o coder **recusa** e devolve.
- **RF-C-02** — Adicionar carregamento obrigatório do grounding: `.claude/research/react-features.md`, `.claude/research/typescript-features.md` e (quando existir, RI-06) `nextjs-app-router-features.md`. Hoje o agente não os menciona — a pesquisa não tem efeito nenhum.
- **RF-C-03** — Adicionar seção de **fronteira server/client**, hoje inexistente no prompt. É a maior lacuna do agente atual num projeto App Router.
- **RF-C-04** — Adicionar a **lista de features proibidas** (§7.17): APIs de React 19 e experimentais. Sem isso o agente escreve `use(promise)` ou ref-as-prop, que não compilam neste stack.
- **RF-C-05** — Saída passa a seguir o contrato `02-impl.md` (§5.3), com rastreabilidade item-do-plano → `arquivo:linha`.
- **RF-C-06** — Manter `tools: Read, Write, Edit, Grep, Glob`. **Sem `Bash`** — a ausência da ferramenta é o que garante que ele não se antecipe ao papel do teste.
- **RF-C-07** — Manter `model: sonnet`, `effort: high`. O plano já carregou o raciocínio pesado; aqui o trabalho é mecânico e fiel.
- **RF-C-08** — Manter os princípios atuais, que estão corretos: seguir padrão existente > gosto pessoal; never-invent; menor mudança que resolve.
- **RF-C-09** — Adicionar: **desvio do plano é permitido, silêncio não é.** Se o plano for impossível ou estiver errado, implementar o que é correto e registrar em `## Desvios do plano`.

### 6.3 `frontend-tester` (NOVO)

- **RF-T-01** — `model: sonnet`, `effort: high`.
- **RF-T-02** — `tools: Read, Write, Edit, Bash, Grep, Glob`. `Bash` é essencial. `Write`/`Edit` **restritos a arquivos de teste e config de teste** — o tester **não corrige código de produção**; ele reporta e devolve ao coder.
- **RF-T-03** — Rodar **todos** os gates aplicáveis da §9.3, na ordem, e reportar cada um individualmente. Nunca reportar "tudo passou" sem a tabela comando-a-comando.
- **RF-T-04** — Escrever teste para **cada `CA-n`** do plano. `CA` não coberto exige motivo explícito (ex.: "CA-3 depende de async Server Component; coberto por E2E, não por unit" — ver §9.2).
- **RF-T-05** — Testar **comportamento observável pelo usuário**, via queries acessíveis (`getByRole`, `getByLabelText`), não detalhe de implementação (nome de state, contagem de render).
- **RF-T-06** — Falha de gate é reportada com reprodução mínima e `arquivo:linha`. "Deu erro no build" não é relatório.
- **RF-T-07** — **Nunca** afrouxar um gate para fazer passar: não adicionar `eslint-disable`, não relaxar `tsconfig`, não usar `as any` em teste, não deletar assert. Se o gate é injusto, isso é um achado a reportar, não a contornar.
- **RF-T-08** — Reportar honestamente: gate pulado é `SKIP` com motivo, nunca omitido.

### 6.4 `frontend-reviewer` (NOVO)

- **RF-R-01** — `model: opus`, `effort: xhigh`. Julgamento adversarial é onde o modelo forte paga.
- **RF-R-02** — `tools: Read, Grep, Glob, Bash`. **Sem `Write`, sem `Edit`** (D3): read-only por ausência de ferramenta, como os validadores do workspace. `Bash` restrito a leitura (`git diff`, `git log`). O relatório volta como texto final; o orquestrador persiste.
- **RF-R-03** — Revisar **o diff**, não o repo inteiro. `git diff` contra o ponto de partida do run.
- **RF-R-04** — Focar no que **nenhuma ferramenta pega** — as linhas marcadas `R` na matriz. Reapontar o que o lint já apontou é ruído.
- **RF-R-05** — Todo achado precisa de **cenário concreto de falha**: entrada/estado → saída errada. Sem isso é preferência estilística, e vai como `NIT` ou não vai.
- **RF-R-06** — Verificar aderência ao plano nas duas direções: faltou e sobrou. Escopo excedido é achado.
- **RF-R-07** — Verificar aderência ao `DESIGN.md`: token de cor da vertical correta, escala tipográfica, sem gradiente/sombra pesada, contraste.
- **RF-R-08** — **Não corrigir.** Nem sugerir patch completo. Aponta e devolve.
- **RF-R-09** — Aprovar quando estiver certo. Reviewer que nunca aprova é reviewer quebrado.

---

## 7. Matriz de requisitos — React

### 7.0 Como ler a matriz

**Coluna `Disp.` (disponibilidade no stack React 18 / Next 14.2.35):**

| Marca | Significado | Efeito no coder |
|---|---|---|
| ✅ | Disponível | Pode usar |
| ❌ | React 19+ apenas | **PROIBIDO** (enquanto D2 = permanecer no 18) |
| ⚠️ | Experimental/instável | **PROIBIDO** sem aprovação explícita do dono |
| 🔎 | A confirmar por probe (RI-05) | **PROIBIDO** até o probe resolver |

**Coluna `Enf.` (quem cobra o requisito):**

| Código | Mecanismo | Dono |
|---|---|---|
| `L` | `next lint` (inclui `eslint-plugin-react-hooks` via `next/core-web-vitals`) | tester |
| `T` | `tsc --noEmit` | tester |
| `B` | `next build` | tester |
| `U` | teste de unidade/componente (Vitest + RTL) | tester |
| `E` | E2E (Playwright) | tester |
| `A` | acessibilidade (axe) | tester |
| `R` | **julgamento — nenhuma ferramenta pega** | reviewer |

Um requisito marcado só com `R` é, por definição, invisível ao CI: é exatamente aí que o reviewer justifica existir.

---

### 7.1 Componentes, JSX e Props

| ID | Disp. | Requisito de implementação (coder) | Enf. | Verificação (teste) | Foco de revisão (reviewer) |
|---|---|---|---|---|---|
| RQ-R-01 | ✅ | Componente é função com nome em PascalCase, declarado no **nível superior do módulo** | L,T | lint pega tag minúscula; render smoke test | — |
| RQ-R-02 | ✅ | **Nunca** declarar componente dentro de outro (recria a função a cada render e reseta o estado dos filhos) | R | teste de retenção de estado após re-render do pai | **Sim** — o lint não pega; procurar `function X()` aninhada em componente |
| RQ-R-03 | ✅ | JSX com raiz única; `<>…</>` quando não se quer markup extra no DOM | T,B | `tsc` | markup extra desnecessário |
| RQ-R-04 | ✅ | Tags sempre fechadas; atributos em camelCase, exceto `aria-*` e `data-*` que mantêm hífen | T,L | `tsc` | — |
| RQ-R-05 | ✅ | **Props são imutáveis** — nunca mutar props recebidas; pedir novas props ao pai | R | — | **Sim** — mutação de prop passa por lint e tsc |
| RQ-R-06 | ✅ | Defaults na desestruturação (`{ size = 100 }`); ciente de que só valem para ausente/`undefined`, não `0`/`null` | T,U | teste com `0` e `null` explícitos quando o default importa | bug clássico: default engolindo `0` |
| RQ-R-07 | ✅ | Spread de props (`{...props}`) com moderação; uso excessivo indica divisão de componentes errada | R | — | **Sim** — sinal de acoplamento; avaliar se a fronteira do componente está certa |
| RQ-R-08 | ✅ | `children` é o mecanismo primário de slot para wrappers (painéis, cards, layouts) | R | teste renderizando children arbitrário | wrapper que recebe dados brutos onde `children` resolveria |
| RQ-R-09 | ✅ | Um componente por arquivo; `export default` do componente principal — **convenção observada no repo** | R | — | **Sim** — desvio de convenção |
| RQ-R-10 | ✅ | Props tipadas em `interface XProps` no mesmo arquivo — **convenção observada** (`Button.tsx`) | T | `tsc` | — |

### 7.2 Estado

| ID | Disp. | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|---|
| RQ-R-11 | ✅ | Usar `useState` só para o que precisa **persistir entre renders e disparar re-render**; o resto é variável local, `useRef` ou derivação | R | — | **Sim** — state supérfluo é o defeito de estado mais comum |
| RQ-R-12 | ✅ | Estado **derivável** de props/state existente é calculado no corpo do render, nunca duplicado em state | R | teste que muda a fonte e verifica o derivado atualizado | **Sim** — state espelhado que dessincroniza |
| RQ-R-13 | ✅ | **State é snapshot**: não ler a variável logo após o setter esperando o valor novo | R,U | teste de handler assíncrono / `setTimeout` | **Sim** — closure obsoleta é invisível ao lint |
| RQ-R-14 | ✅ | Usar **updater function** (`setX(prev => …)`) quando o próximo valor depende do anterior ou há múltiplas atualizações no mesmo handler | R,U | teste com 2+ atualizações no mesmo evento | **Sim** |
| RQ-R-15 | ✅ | Objetos em state são **read-only**: novo objeto via spread, nunca `obj.campo = x` | R,U | teste que verifica re-render após update | **Sim** — mutação direta não re-renderiza e não é pega por nada |
| RQ-R-16 | ✅ | Arrays em state são **read-only**: `map`/`filter`/`slice`/`concat`/spread; proibidos `push`/`pop`/`splice`/`sort`/`reverse` diretos | R,U | teste de add/remove/reordenar | **Sim** — atenção ao par confuso `slice` (ok) × `splice` (mutante) |
| RQ-R-17 | ✅ | `useReducer` quando a lógica de estado fica complexa/espalhada por muitos handlers; reducer **puro** e testável isolado | R,U | testar o reducer como função pura, sem render | **Sim** — julgar se o `useState` múltiplo deveria ter virado reducer |
| RQ-R-18 | ✅ | Estado é atrelado à **posição na árvore**; usar `key` para forçar reset consciente (ex.: resetar form ao trocar de item) | R,U | teste de troca de item verificando reset | **Sim** — reset via `useEffect` onde `key` resolveria |

### 7.3 Pureza, render e método

| ID | Disp. | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|---|
| RQ-R-19 | ✅ | Componente é **função pura**: mesmas entradas → mesmo JSX; não muta nada que existia antes da chamada | R,U | StrictMode em dev expõe impureza (render duplo) | **Sim** — pilar; nada automático cobre |
| RQ-R-20 | ✅ | **Zero side effect no corpo do render** (fetch, timer, mutação global, `Math.random` afetando saída). Efeito vai para event handler; em último caso, Effect | R | StrictMode; teste de render duplo | **Sim** |
| RQ-R-21 | ✅ | Mutação local (de valor criado durante o próprio render) é permitida e não é impureza | R | — | evitar falso positivo do reviewer |
| RQ-R-22 | ✅ | Decomposição segue **Thinking in React**: (1) hierarquia por responsabilidade única (2) versão estática só com props (3) estado mínimo (DRY) (4) onde mora (ancestral comum) (5) fluxo inverso via handlers | R | — | **Sim** — é o critério de julgamento do plano do planejador |

### 7.4 Rules of Hooks

| ID | Disp. | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|---|
| RQ-R-23 | ✅ | Hooks **só no nível superior** — nunca em condicional, loop, função aninhada, `try/catch/finally`, nem após `return` antecipado | L | `eslint-plugin-react-hooks` | — |
| RQ-R-24 | ✅ | Hooks **só** em componentes-função React ou em Hooks customizados | L | idem | — |
| RQ-R-25 | ✅ | **Nunca suprimir** `react-hooks/*` com `eslint-disable`. Erro do linter de hooks é tratado como erro de compilação | L,R | tester **proíbe** `eslint-disable` novo (RF-T-07) | **Sim** — supressão introduzida é BLOQUEANTE |
| RQ-R-26 | ✅ | Hook customizado nomeado `use` + maiúscula (senão o linter não consegue verificá-lo) | L | — | — |

### 7.5 Hooks de estado e referência

| ID | Disp. | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|---|
| RQ-R-27 | ✅ | `useState(() => caro())` — inicializador como função quando o valor inicial custa caro | R | — | inicializador recalculado a cada render |
| RQ-R-28 | ✅ | `useRef` para valor que **não** participa da renderização (id de timer, flag, nó DOM) | R,U | — | **Sim** — ref usado como state (UI não atualiza) ou state usado como ref (re-render à toa) |
| RQ-R-29 | ✅ | **Não ler/escrever `ref.current` durante o render** (exceto inicialização) | R | StrictMode | **Sim** |
| RQ-R-30 | ✅ | `dispatch` do `useReducer` tem identidade estável — não precisa entrar em deps | L,R | — | dep desnecessária |

### 7.6 Effects

| ID | Disp. | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|---|
| RQ-R-31 | ✅ | `useEffect` **só** para sincronizar com sistema externo ao React (rede, DOM do browser, lib de terceiros) | R | — | **Sim** — o defeito nº 1 de código React gerado por LLM |
| RQ-R-32 | ✅ | Aplicar a lista "You Might Not Need an Effect" **antes** de escrever qualquer Effect: transformar dado → calcular no render; cache caro → `useMemo`; resetar tudo ao mudar prop → `key`; ajustar state a prop → calcular no render; lógica comum entre handlers → função extraída; POST de ação do usuário → no handler; cadeia de cálculos → um cálculo só | R | teste que prova que não há flash de valor intermediário | **Sim** — cada Effect no diff precisa sobreviver a esta lista |
| RQ-R-33 | ✅ | Deps contêm **todos** os valores reativos usados; a lista reflete o código, não a intenção | L | `exhaustive-deps` | — |
| RQ-R-34 | ✅ | **Nunca** `// eslint-disable-next-line react-hooks/exhaustive-deps`. Corrigir com updater function, mover objeto/função para dentro do Effect ou para fora do componente | L,R | tester proíbe supressão nova | **Sim** — BLOQUEANTE |
| RQ-R-35 | ✅ | Effect que assina/abre algo **tem cleanup** que de fato desfaz (StrictMode roda setup→cleanup→setup para expor isso) | R,U | teste de unmount verificando cleanup; StrictMode em dev | **Sim** — vazamento é invisível em produção até virar bug |
| RQ-R-36 | ✅ | Um Effect = **um processo de sincronização**. Não agrupar lógicas não relacionadas só porque rodam junto | R | — | **Sim** |
| RQ-R-37 | ✅ | `useLayoutEffect` **só** quando é preciso medir layout e re-renderizar antes da pintura (evitar flicker). Bloqueia a pintura; no servidor não roda | R,B | — | **Sim** — uso injustificado é custo de performance direto |
| RQ-R-38 | ✅ | Lógica com estado repetida entre componentes vira **custom Hook** (compartilha lógica, não estado) | R | testar o hook isolado | **Sim** — duplicação e abstração prematura (não abstrair para 1 uso) |

### 7.7 Context

| ID | Disp. | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|---|
| RQ-R-39 | ✅ | Antes de Context, tentar **(1)** passar props e **(2)** compor passando JSX como `children`. Context não é o primeiro recurso | R | — | **Sim** — Context prematuro é dívida de acoplamento |
| RQ-R-40 | ✅ | Usar `<MeuContext.Provider value={…}>` — a forma `<MeuContext value={…}>` é React 19 | T,B | `tsc` | — |
| RQ-R-41 | ✅ | `value` do Provider estabilizado (`useMemo`/`useCallback`) quando o Provider re-renderiza com frequência — mudança de `value` re-renderiza **todos** os consumidores | R,U | teste contando renders do consumidor | **Sim** — objeto literal inline no `value` é o erro clássico |
| RQ-R-42 | ✅ | Ciente: `memo` **não** bloqueia atualização vinda de Context consumido pelo próprio componente | R | — | **Sim** — otimização que não otimiza |
| RQ-R-43 | ✅ | Casos legítimos: tema/dark mode, usuário autenticado, roteamento, estado complexo perto do topo (comumente com `useReducer`) | R | — | julgar legitimidade |

### 7.8 Refs e DOM

| ID | Disp. | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|---|
| RQ-R-44 | ✅ | Ref para DOM só para **sair do modelo declarativo**: focar, rolar, medir, integrar lib de terceiros | R | teste de foco/scroll via RTL | **Sim** — ref onde prop declarativa resolveria |
| RQ-R-45 | ✅ | **Nunca** adicionar/remover/modificar nós do DOM gerenciados pelo React | R | — | **Sim** — causa crash ou inconsistência visual; nada automático pega |
| RQ-R-46 | ✅ | Encaminhar ref usa `forwardRef` **neste stack** (ref-as-prop é React 19) | T,B | `tsc` | — |
| RQ-R-47 | ✅ | `useImperativeHandle` para expor **só** os métodos necessários, nunca o nó inteiro. "Se dá para expressar como prop, não use ref" | R,T | — | **Sim** — API imperativa vazando |
| RQ-R-48 | ✅ | `flushSync` só para coordenar update de state com acesso imediato ao ref (ex.: inserir item e rolar até ele) | R | E2E | uso como muleta para bug de ordenação |

### 7.9 Composição

| ID | Disp. | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|---|
| RQ-R-49 | ✅ | Passar JSX como prop/`children` em vez de repassar dados por camadas que não os usam (`<Layout><Posts posts={p}/></Layout>` > `<Layout posts={p}/>`) | R | — | **Sim** — prop drilling |
| RQ-R-50 | ✅ | **Lifting state up** ao ancestral comum mais próximo quando 2+ componentes precisam do mesmo estado sincronizado | R,U | teste de sincronização entre irmãos | **Sim** |
| RQ-R-51 | ✅ | Decidir e **documentar na prop** se o componente é controlado (dirigido por props) ou não controlado (estado local) — nunca meio-termo ambíguo | R,T | teste dos dois modos quando ambos são suportados | **Sim** |
| RQ-R-52 | ✅ | "render props" e "compound components" **não** são padrões da doc oficial do React. Se usados (ex.: por lib), justificar; não são o default | R | — | **Sim** — julgar se a complexidade se paga |

### 7.10 Formulários

| ID | Disp. | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|---|
| RQ-R-53 | ✅ | **Não controlado** (`defaultValue`/`defaultChecked`) quando só se lê no submit | R,U | teste de submit | **Sim** — controlado desnecessário = re-render por tecla |
| RQ-R-54 | ✅ | **Controlado** (`value` + `onChange`) quando a UI reage a cada mudança (validação em tempo real, espelhamento, derivação) | L,U | RTL + `user-event` digitando | — |
| RQ-R-55 | ✅ | **Nunca** `value` sem `onChange` (campo vira read-only e o React avisa) | L,U | teste falha ao digitar | — |
| RQ-R-56 | ✅ | Um input **nunca** alterna entre controlado e não controlado durante a vida; nunca `null`/`undefined` em `value` (usar `""`) | R,U | teste com valor inicial ausente | **Sim** — o warning só aparece em runtime |
| RQ-R-57 | ✅ | Checkbox usa `checked`/`defaultChecked`, nunca `value` | R,U | — | **Sim** |
| RQ-R-58 | ✅ | Todo campo tem `<label>` associado (ou `aria-label`); `useId` para ligar `htmlFor`/`id` | A,U | axe + `getByLabelText` | contraste e ordem de foco |

### 7.11 Listas e keys

| ID | Disp. | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|---|
| RQ-R-59 | ✅ | Todo elemento direto de `.map()` tem `key` | L | `react/jsx-key` | — |
| RQ-R-60 | ✅ | `key` é ID **estável e único entre irmãos**, vindo dos dados | R | teste de reordenação preservando estado/input | **Sim** — o lint aceita qualquer `key`, inclusive uma ruim |
| RQ-R-61 | ✅ | **Nunca** `key` gerada no render (`Math.random()`, `crypto.randomUUID()` inline) nem `useId` como key | R | teste de re-render verificando que o DOM não foi recriado | **Sim** — BLOQUEANTE: perde estado e input do usuário |
| RQ-R-62 | ✅ | Índice como `key` **só** em lista comprovadamente estática (sem inserção/remoção/reordenação) — justificar no `02-impl.md` | R | — | **Sim** |

### 7.12 Error Boundaries

| ID | Disp. | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|---|
| RQ-R-63 | ✅ | Error Boundary só existe como **componente de classe** (`static getDerivedStateFromError` + `componentDidCatch`). Não há Hook equivalente | T,R | teste que lança erro no filho e verifica fallback | — |
| RQ-R-64 | ✅ | Alternativa oficialmente recomendada para base 100% funcional: lib `react-error-boundary` (nova dependência → **exige aprovação do dono**) | R | — | **Sim** — dependência nova não entra silenciosamente |
| RQ-R-65 | ✅ | No App Router, `error.tsx` / `global-error.tsx` são o mecanismo idiomático de fallback por rota — preferir a boundary manual quando a granularidade for de rota | B,E | E2E forçando erro | **Sim** |

### 7.13 Suspense, lazy e code-splitting

| ID | Disp. | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|---|
| RQ-R-66 | ✅ | `lazy()` declarado **no nível do módulo**, nunca dentro de um componente (recria e reseta o estado a cada render) | R | teste de re-render do pai | **Sim** — BLOQUEANTE, invisível ao lint |
| RQ-R-67 | ✅ | `<Suspense fallback={…}>` com fallback que não causa layout shift (skeleton com dimensões, não spinner solto) | R,E | E2E medindo CLS | **Sim** — `DESIGN.md` §Motion |
| RQ-R-68 | ✅ | Ciente: Suspense **não** captura dados buscados em Effect nem em event handler | R | — | **Sim** — expectativa errada gera fallback que nunca aparece |
| RQ-R-69 | ✅ | Boundaries aninhados são a ferramenta para revelar conteúdo progressivamente vs. de uma vez — escolher conscientemente | R,E | E2E observando ordem de aparição | **Sim** |
| RQ-R-70 | ✅ | No App Router, `loading.tsx` é o Suspense boundary idiomático de rota | B,E | — | **Sim** |

### 7.14 Recursos concorrentes

| ID | Disp. | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|---|
| RQ-R-71 | ✅ | `useTransition()` para marcar update não urgente que pode ser interrompido por digitação | R,E | E2E de responsividade de input sob carga | **Sim** |
| RQ-R-72 | ✅ | **Não** usar transition para o `value` de input controlado — precisa ser síncrono | R,U | teste de digitação | **Sim** — bug sutil de campo "engasgado" |
| RQ-R-73 | ✅ | Update após `await` dentro de uma transition **não** é automaticamente transition — precisa de novo `startTransition` | R | — | **Sim** |
| RQ-R-74 | ✅ | `useDeferredValue` para adiar re-render de parte não urgente da UI (ex.: lista grande filtrada por busca) | R,E | E2E | **Sim** — confundir com debounce |
| RQ-R-75 | ✅ | `useSyncExternalStore` para integrar store externo/API do browser com leitura consistente; `getSnapshot` retorna dado **imutável**; `getServerSnapshot` obrigatório para não quebrar hidratação | R,B,E | build + E2E (erro de hidratação) | **Sim** — `getSnapshot` que cria objeto novo causa loop infinito |
| RQ-R-76 | ✅ | `useId` para IDs de acessibilidade (`htmlFor`, `aria-describedby`) — estável entre servidor e cliente. **Nunca** como `key` de lista | A,R | axe | **Sim** |
| RQ-R-77 | ✅ | Batching automático (React 18) já cobre `setTimeout`/Promise/handler nativo — não escrever workaround manual | R | — | código legado desnecessário |

### 7.15 Performance e memoização

| ID | Disp. | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|---|
| RQ-R-78 | ✅ | **Medir antes de otimizar.** `memo`/`useMemo`/`useCallback` só entram com problema observado, não preventivamente (prática transversal do workspace) | R | — | **Sim** — memoização especulativa é ruído e custo |
| RQ-R-79 | ✅ | `memo` é otimização, **não garantia**: não impede re-render por state interno nem por Context consumido | R | teste contando renders | **Sim** |
| RQ-R-80 | ✅ | `memo` sem estabilizar as props objeto/função **não faz nada** — referência nova a cada render anula a comparação rasa | R,U | teste de renders | **Sim** — o erro mais comum de memoização |
| RQ-R-81 | ✅ | `useMemo` legítimo em 3 casos: cálculo perceptivelmente lento (medido), manter referência para filho `memo`izado, estabilizar dep de outro Hook | R | — | **Sim** |
| RQ-R-82 | ✅ | `useMemo` **não** garante semântica — React pode descartar o cache. Nunca depender dele para correção | R | — | **Sim** — BLOQUEANTE se a correção depender do cache |
| RQ-R-83 | ✅ | `useCallback` só para preservar identidade de função passada a `memo` ou usada como dep. "Se o código não funciona sem ele, o problema é outro" | R | — | **Sim** |
| RQ-R-84 | 🔎 | **React Compiler**: NÃO adotar nesta onda. Requer verificação de compatibilidade com React 18 + Next 14.2 (RI-05) antes de qualquer uso | R | probe | dependência/config nova exige aprovação |

### 7.16 Strict Mode

| ID | Disp. | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|---|
| RQ-R-85 | ✅ | Código deve ser **correto sob StrictMode**: render duplo, inicializador duplo, setup→cleanup→setup extra em Effects e callback refs | R,U | rodar suite com StrictMode ativo | **Sim** — "só quebra no dev" não é justificativa aceitável |
| RQ-R-86 | ✅ | Nunca "resolver" um problema removendo `<StrictMode>` — StrictMode expõe o bug, não o causa | R | — | **Sim** — BLOQUEANTE |

### 7.17 PROIBIDO neste stack (React 19+ / experimental)

O coder **não pode** usar nada abaixo enquanto D2 = permanecer no React 18. Uso = achado BLOQUEANTE automático do reviewer.

| ID | Disp. | API | Substituto neste stack |
|---|---|---|---|
| RQ-R-87 | ❌ | `use(promise)` para ler dados no render | Server Component `async` (App Router) ou fetch em Effect com cleanup |
| RQ-R-88 | ❌ | `ref` como prop comum de componente-função | `forwardRef` (RQ-R-46) |
| RQ-R-89 | ❌ | `<MeuContext value={…}>` como provider direto | `<MeuContext.Provider value={…}>` (RQ-R-40) |
| RQ-R-90 | ❌ | Cleanup retornado por callback ref | Padrão antigo (chamada com `null` no unmount) |
| RQ-R-91 | ⚠️ | `useEffectEvent` — a própria doc marca como **experimental/instável** | Extrair a lógica não-reativa manualmente (`useRef` guardando o último valor) |
| RQ-R-92 | 🔎 | Actions / `useActionState` / `useFormStatus` / `useOptimistic` | **A resolver pelo probe RI-05**: o App Router do Next 14 vendoriza uma versão canary do React, então parte dessas APIs pode estar disponível apesar de `react: ^18` no `package.json`. **Não afirmar disponibilidade sem o probe.** Até lá: proibido. |

### 7.18 App Router / fronteira Server–Client

> ⚠️ **Esta seção não tem grounding de pesquisa** (ver §13.1). Os requisitos abaixo derivam do que foi **observado no repo**, não de doc oficial lida nesta sessão. São provisórios até RI-06.

| ID | Disp. | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|---|
| RQ-R-93 | ✅ | **Default é Server Component.** `'use client'` só entra com motivo nomeado: hook de estado/efeito, event handler, API de browser, ou lib client-only | B,R | `next build` falha em violação de fronteira | **Sim** — `'use client'` gratuito arrasta bundle e mata streaming |
| RQ-R-94 | ✅ | `'use client'` marcado o mais **baixo possível** na árvore (folha interativa), não no topo da página | R,B | inspecionar bundle | **Sim** — é a decisão de maior impacto em performance no App Router |
| RQ-R-95 | ✅ | Props que atravessam a fronteira server→client precisam ser **serializáveis** — nada de função, `Date` cru, classe, `Symbol` | B,T | `next build` | **Sim** |
| RQ-R-96 | ✅ | `page.tsx` exporta `metadata` ou `generateMetadata`, **ou** herda explicitamente do `layout.tsx` do grupo — observado em 8 das 9 páginas; a exceção (`app/(dark)/page.tsx`) herda de `app/(dark)/layout.tsx` | B,R | build | **Sim** — página sem metadata **e** sem layout que a cubra é regressão de SEO |
| RQ-R-97 | ✅ | Rota dinâmica `[slug]` exporta `generateStaticParams` — **convenção observada em todas as 3 trilhas** | B | build | **Sim** |
| RQ-R-98 | ✅ | Conteúdo vindo de fonte não confiável passa por `isomorphic-dompurify` antes de `dangerouslySetInnerHTML` — dependência já presente para isso | R,U | teste com payload XSS | **Sim** — BLOQUEANTE de segurança |

---

## 8. Matriz de requisitos — TypeScript

Mesma legenda de `Enf.` da §7.0. Aqui `Disp.` é ✅ salvo indicação — TS 5 + `strict: true` cobre tudo.

### 8.1 Fundamentos do sistema de tipos

| ID | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|
| RQ-T-01 | Tipagem é **estrutural**: compatibilidade por shape, não por nome. Não criar hierarquia nominal artificial | T,R | `tsc` | tipo "marcador" desnecessário |
| RQ-T-02 | Confiar na **inferência**; anotar explicitamente só onde ela erra ou onde o tipo é contrato público (props, retorno de função exportada) | R | `tsc` | **Sim** — anotação redundante em todo `const` é ruído |
| RQ-T-03 | `as const` para travar objeto/array em tipos literais em vez de asserção manual por campo | T,R | `tsc` | widening acidental (`method: string` onde se queria `"GET"`) |
| RQ-T-04 | Union types para valor que pode ser N formas; operação só após narrowing | T | `tsc` | — |
| RQ-T-05 | Intersection (`&`) para combinar shapes; ciente de que conflito vira `never` **silenciosamente**, sem erro | T,R | `tsc` | **Sim** — `never` silencioso é armadilha |
| RQ-T-06 | **`interface` por padrão**; migrar para `type` só ao precisar de union, tupla, mapped ou conditional type (heurístico oficial) | R | — | **Sim** — e `extends` de interface é mais eficiente para o compilador que intersection |
| RQ-T-07 | `readonly` em props e dados que não devem ser reatribuídos; ciente de que **não é imutabilidade profunda** | T,R | `tsc` | **Sim** — falsa sensação de segurança |
| RQ-T-08 | `keyof`, `typeof` (nível de tipo) e indexed access (`T['prop']`) para derivar tipos de valores existentes em vez de redigitar shapes | T,R | `tsc` | **Sim** — tipo duplicado que dessincroniza da fonte |

### 8.2 Narrowing e type guards

| ID | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|
| RQ-T-09 | Narrowing por `typeof` / `instanceof` / `in` / equality, seguindo o fluxo de controle | T | `tsc` | — |
| RQ-T-10 | **Evitar truthiness em primitivos** — a doc oficial marca como propenso a erro. Usar checagem explícita quando `0` ou `""` são válidos | T,U,R | teste com `0` e `""` | **Sim** — `if (count)` engolindo zero é bug clássico e o `tsc` não pega |
| RQ-T-11 | `!= null` (comparação solta) como idiom para remover `null` **e** `undefined` de uma vez | T,R | `tsc` | — |
| RQ-T-12 | Type predicate (`x is T`) para narrowing customizado — inclusive em `.filter()`, que passa a devolver array já estreitado | T,U | `tsc` | **Sim** — predicate que mente (não valida o que afirma) é `as` disfarçado |
| RQ-T-13 | **Discriminated union** (propriedade literal comum) para modelar variantes, em vez de campos opcionais soltos | T,R | `tsc` | **Sim** — o padrão preferencial da doc; grupo de `?` é sinal de union faltando |
| RQ-T-14 | **Exhaustiveness checking**: `default`/`else` atribuindo a `const _: never = x`, para que adicionar um membro à union vire erro de compilação | T,R | `tsc` quebra ao estender a union | **Sim** — sem isso, novo caso passa silencioso |

### 8.3 Generics

| ID | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|
| RQ-T-15 | Generic só quando **relaciona** tipos de entrada e saída; nunca para "ficar flexível" | R | — | **Sim** — generic decorativo |
| RQ-T-16 | **Push type parameters down**: `<T>(arr: T[])` e não `<T extends any[]>(arr: T)` — a inferência funciona melhor | R | — | **Sim** |
| RQ-T-17 | Menor número possível de type parameters | R | — | **Sim** |
| RQ-T-18 | Type parameter que aparece **só uma vez** na assinatura provavelmente não devia ser genérico | R | — | **Sim** — regra oficial, e ótima heurística de review |
| RQ-T-19 | Constraint com `extends` para poder acessar membros; `<T, K extends keyof T>` para garantir chave válida em tempo de compilação | T | `tsc` | — |
| RQ-T-20 | **Nunca** escrever variance annotation (`in`/`out`) para forçar comportamento — quase nunca é necessária | R | — | **Sim** — sinal forte de que o modelo de tipos está errado |

### 8.4 Funções

| ID | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|
| RQ-T-21 | Tipo de função como `(a: string) => void`; **evitar o tipo global `Function`** | T,R | `tsc` | **Sim** |
| RQ-T-22 | `x?: T` (opcional, inclui `undefined`) × `x = v` (default, não inclui) — escolher conscientemente | T | `tsc` | — |
| RQ-T-23 | **Nunca** declarar parâmetro opcional em tipo de callback a menos que a função realmente possa ser chamada sem ele | R | — | **Sim** — regra oficial; nada automático pega |
| RQ-T-24 | **Preferir union nos parâmetros a overloads.** Overload só quando a relação argumento↔retorno não é expressável por union | R | — | **Sim** |
| RQ-T-25 | `unknown` em vez de `any` para valor de origem desconhecida; obriga checagem antes do uso | T,L,R | `tsc` + `@typescript-eslint/no-explicit-any` via `next/typescript` | **Sim** |
| RQ-T-26 | **`any` é proibido.** Se inevitável, `unknown` + narrowing, ou `as` com comentário justificando. `any` novo no diff é achado | R,(L) | ⚠️ `@typescript-eslint/no-explicit-any` vem como **`warn`** no preset recomendado, logo **não reprova** `next lint`. Não verificado empiricamente (`node_modules` ausente — §2.3). Elevar a `error` no `.eslintrc.json` é decisão do dono; **até lá o gate real é o reviewer** | **Sim** — BLOQUEANTE sem justificativa |
| RQ-T-27 | `never` para função que não retorna; `void` ≠ `undefined` (função declarada `: void` não pode `return valor`) | T | `tsc` | — |
| RQ-T-28 | Type assertion (`as`) **não valida nada** — usar só quando se sabe mais que o compilador, com comentário. `as unknown as X` é achado | R | — | **Sim** — BLOQUEANTE: `as` mascarando erro real de tipo |

### 8.5 Utility types

| ID | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|
| RQ-T-29 | Usar os utility types oficiais em vez de redeclarar shapes: `Partial`, `Required`, `Readonly`, `Record`, `Pick`, `Omit`, `Exclude`, `Extract`, `NonNullable`, `Parameters`, `ReturnType`, `Awaited`, `InstanceType`, `NoInfer` | T,R | `tsc` | **Sim** — tipo derivado manualmente que dessincroniza |
| RQ-T-30 | `Pick`/`Omit` para derivar props de um componente a partir de outro (padrão útil em `components/ui`) | T,R | `tsc` | — |
| RQ-T-31 | `ReturnType<typeof fn>` para não redigitar assinatura de função existente | T | `tsc` | — |
| RQ-T-32 | `Record<K, V>` para mapas por chave literal (ex.: `Record<Vertical, ColorToken>` — encaixa em `lib/verticals.ts`/`tokens.ts`) | T,R | `tsc` | **Sim** — mapa que aceita chave inválida |

### 8.6 Mapped, conditional e template literal types

| ID | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|
| RQ-T-33 | Mapped type (`[P in keyof T]`) só quando há transformação real; não reimplementar `Partial`/`Readonly` à mão | T,R | `tsc` | **Sim** |
| RQ-T-34 | Modificadores `-readonly` / `-?` quando é preciso **remover** modificador | T | `tsc` | — |
| RQ-T-35 | Key remapping com `as` (TS 4.1+); `never` na posição do `as` filtra a chave | T,R | `tsc` | complexidade sem retorno |
| RQ-T-36 | Conditional type ciente da **distributividade sobre unions**; usar `[T] extends [U]` para desligá-la quando não desejada | T,R | `tsc` | **Sim** — distribuição acidental é bug de tipo difícil de ler |
| RQ-T-37 | `infer` para capturar tipo dentro do branch condicional em vez de indexed access manual | T | `tsc` | — |
| RQ-T-38 | Template literal type quando o conjunto de strings é derivável (ex.: `` `${Vertical}-${Shade}` ``) — não enumerar à mão | T,R | `tsc` | **Sim** |
| RQ-T-39 | **Teto de complexidade:** tipo que exige comentário para ser lido precisa de justificativa no `02-impl.md`. Type-level programming não é objetivo em si | R | — | **Sim** — critério explícito de review |

### 8.7 Enums e módulos

| ID | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|
| RQ-T-40 | **Preferir union de literais ou objeto `as const` a `enum`** — orientação atual da doc: "in modern TypeScript, you may not need an enum when an object with `as const` could suffice" | R | — | **Sim** — `enum` novo exige justificativa |
| RQ-T-41 | **`const enum` proibido** — incompatível com `isolatedModules`, que está **ligado** neste `tsconfig.json` | T | `tsc` | — |
| RQ-T-42 | Import de tipo usa `import type` ou o prefixo inline `type` (`import { fn, type Cat }`) — relevante sob `isolatedModules` | T,L | `tsc` + lint | **Sim** |
| RQ-T-43 | ES Modules sempre; **sem `namespace`** com código de runtime | T,R | `tsc` | **Sim** |
| RQ-T-44 | Alias `@/*` para todo import interno — **convenção do repo** | T,R | `tsc` | **Sim** — `../../..` é desvio |
| RQ-T-45 | Lib JS sem tipos: instalar o `@types/*` correspondente ou escrever `.d.ts` ambiente. **Nova dependência exige aprovação do dono** | T,R | `tsc` | **Sim** |

### 8.8 Strict mode e `satisfies`

| ID | Requisito de implementação | Enf. | Verificação | Foco de revisão |
|---|---|---|---|---|
| RQ-T-46 | `strict: true` já ativo — cobre `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`, `strictBindCallApply`, `strictPropertyInitialization`, `noImplicitThis`, `useUnknownInCatchVariables`, `alwaysStrict`. **Nunca afrouxar para fazer passar** | T,R | `tsc` | **Sim** — BLOQUEANTE: mudança em `tsconfig.json` para calar erro |
| RQ-T-47 | `noUncheckedIndexedAccess` e `exactOptionalPropertyTypes` **não** fazem parte de `strict` e estão **desligados** hoje. Não presumir que `arr[i]` é seguro | R | — | **Sim** — acesso indexado sem guarda; ver RI-04 |
| RQ-T-48 | `catch (e)` recebe `unknown` (por `useUnknownInCatchVariables`) — narrowing obrigatório antes de usar | T | `tsc` | — |
| RQ-T-49 | **`satisfies`** quando se quer validar um valor contra um shape **sem perder** o tipo específico inferido — caso de uso direto em `lib/tokens.ts` e `lib/verticals.ts` | T,R | `tsc` | **Sim** — anotação `:` onde `satisfies` preservaria precisão |

---

## 9. Requisitos de infraestrutura

Pré-requisitos para o `frontend-tester` existir de verdade. Sem eles, o pipeline degrada para 3 agentes + verificação estática.

### 9.1 Dependências a instalar (D1)

**RI-01 — Unit/component testing.** Exatamente o que a doc do Next 14.2 prescreve para Vitest:

```bash
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react
```

`vitest.config.ts` na raiz, conforme a doc:

```ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: { environment: 'jsdom' },
})
```

Adições **além** da lista oficial, justificadas — marcar como decisão do dono:
`@testing-library/jest-dom` (matchers como `toBeInTheDocument`) e `@testing-library/user-event` (interação realista, exigida por RQ-R-54).

**RI-02 — E2E.** `@playwright/test` — necessário para async Server Components (§9.2), fluxos reais e verificação de layout shift (RQ-R-67).

**RI-03 — Acessibilidade.** `axe-core` + `@axe-core/playwright` (E2E) e/ou `vitest-axe` (unit). Sem isso, `DESIGN.md` §Accessibility não tem gate.

**RI-04 — Endurecer o `tsconfig.json`** (opcional, decisão do dono): ligar `noUncheckedIndexedAccess` e `exactOptionalPropertyTypes`. Ganho real de segurança; custo de correções no código existente. **Se ligado, é onda própria** — não misturar com feature.

**RI-05 — Probe de disponibilidade de APIs** (resolve RQ-R-84, RQ-R-92 e todos os 🔎). Escrever um arquivo descartável que tente importar/usar cada API em dúvida e rodar `tsc --noEmit` + `next build`. O resultado **substitui** os 🔎 da matriz por ✅ ou ❌ definitivos. Motivo: o App Router do Next 14 vendoriza React canary — a disponibilidade real não é dedutível do `package.json`.

**RI-06 — Terceira pesquisa de grounding: `nextjs-app-router-features.md`.** Ver §13.1. É a maior lacuna do sistema.

### 9.2 Limite conhecido e documentado

A doc do Next 14 é explícita: *"Since `async` Server Components are new to the React ecosystem, some tools do not fully support them. In the meantime, we recommend using **End-to-End Testing** over **Unit Testing** for `async` components."* E, na página do Vitest: *"Vitest currently does not support them. While you can still run unit tests for synchronous Server and Client Components, we recommend using E2E tests for `async` components."*

**Consequência normativa:** o `frontend-tester` **não** tenta testar Server Component `async` em unit test. Cobre por E2E, ou marca o `CA-n` como coberto-por-E2E. Tentar e falhar, ou pular em silêncio, viola RF-T-08.

### 9.3 Gates do `frontend-tester`

Ordem de execução — do mais barato ao mais caro. Falha em gate bloqueante interrompe e devolve ao coder.

| # | Gate | Comando | Bloqueante | Cobre |
|---|---|---|---|---|
| G1 | Tipos | `npx tsc --noEmit` | Sim | toda coluna `T` |
| G2 | Lint | `npm run lint` | Sim | toda coluna `L` |
| G3 | Unit/componente | `npx vitest run` | Sim | toda coluna `U` |
| G4 | Build | `npm run build` | Sim | toda coluna `B` (fronteira RSC, serialização) |
| G5 | E2E | `npx playwright test` | Sim, se houver `CA` que só E2E cobre | coluna `E` |
| G6 | A11y | axe (dentro de G3 ou G5) | Sim | coluna `A` |
| G7 | Auditoria | `npm run audit:check` | Só se houve mudança de dependência | supply chain |

**RI-07 — Scripts a adicionar ao `package.json`:** `typecheck` (`tsc --noEmit`), `test` (`vitest run`), `test:watch`, `test:e2e`, e um `verify` que encadeia G1→G4.

**RI-08 — CI (opcional, recomendado):** workflow do GitHub rodando `verify` em PR. O workspace trata CI verde como gate, não sugestão — mas hoje não há CI nenhum, então isso é adição, não conformidade.

---

## 10. Regras transversais (valem para os 4 agentes)

- **RG-01 — Never-invent.** Copy, dado clínico, número, token de cor ou regra de negócio que não está no repo nem no pedido é **lacuna sinalizada**, nunca suposição preenchida. Vale para plano, código, teste (nada de fixture com dado clínico inventado) e review.
- **RG-02 — Fidelidade ao relato.** Se um gate falhou, dizer que falhou, com a saída. Se algo foi pulado, dizer. Nenhum agente declara sucesso não verificado.
- **RG-03 — Menor mudança que resolve.** Não refatorar além do pedido; não criar abstração para um uso só.
- **RG-04 — Convenção do repo > preferência.** Replicar o padrão do componente análogo. Divergir exige justificativa escrita.
- **RG-05 — Sem commit/push/PR dentro do pipeline** (RF-O-05).
- **RG-06 — Nova dependência exige aprovação explícita do dono.** Vale para `react-error-boundary` (RQ-R-64), `@types/*` (RQ-T-45) e qualquer lib de UI.
- **RG-07 — PT-BR nos relatórios, termos técnicos em inglês.** Código, identificadores e comentários em inglês seguem a convenção já existente no repo.
- **RG-08 — Citar ID de requisito.** Todo achado, teste e decisão referencia o ID da matriz quando aplicável. É o que torna o sistema auditável em vez de opinativo.

---

## 11. Critérios de aceite do sistema

O frontend-MAS está pronto quando:

- **CA-S-01** — Os 4 arquivos de agente existem em `.claude/agents/` com o frontmatter da §6.0 e passam por um run piloto ponta a ponta.
- **CA-S-02** — `react-ts-coder.md` refatorado atende RF-C-01…RF-C-09, com destaque para: carrega o grounding (RF-C-02), tem seção server/client (RF-C-03) e tem a lista de APIs proibidas (RF-C-04).
- **CA-S-03** — Um run piloto (D6) produz os 4 artefatos com **todas** as seções obrigatórias preenchidas.
- **CA-S-04** — O `frontend-tester` roda G1–G4 de verdade e reporta a tabela comando-a-comando.
- **CA-S-05** — Injetando deliberadamente **3 defeitos** — um pego só por lint (ex.: dep faltando em Effect), um pego só por `tsc` (ex.: prop com tipo errado), e um pego **só por review** (ex.: RQ-R-61, `key` gerada no render) — o pipeline captura os três, cada um pelo agente certo. **Este é o teste real do sistema:** se o terceiro passa, o reviewer não está fazendo o trabalho dele.
- **CA-S-06** — Todos os 🔎 da matriz resolvidos por RI-05, ou explicitamente aceitos como pendentes.
- **CA-S-07** — Nenhum agente escreve fora do seu escopo de ferramenta (planejador só o plano; tester só arquivos de teste; reviewer nada).

---

## 12. Plano de implementação (ondas)

Cada onda é branch + PR, com pausa e handoff ao dono ao final. Nenhuma onda começa antes da anterior estar aprovada.

| Onda | Entrega | Depende de | Gate de saída |
|---|---|---|---|
| **O0** | Aprovação deste SPEC + decisões D1–D6 | — | Dono responde as 6 decisões |
| **O1** | RI-06: pesquisa `nextjs-app-router-features.md`; RI-05: probe de APIs. Atualizar §7.18 e resolver os 🔎 | O0 | §7.18 deixa de ser provisória |
| **O2** | `npm install` (§2.3); baseline: rodar G1/G2/G4 no repo como está e registrar o resultado. Depois RI-01, RI-02, RI-03, RI-07 + um teste-canário por camada (unit, E2E, a11y) | O0 (D1) | G1–G6 rodam verdes num componente existente |
| **O3** | Refatorar `react-ts-coder.md` (RF-C-01…09) | O1, O2 | Coder recusa plano inválido; carrega grounding |
| **O4** | Criar `frontend-planner` e `frontend-tester` | O2, O3 | Contratos §5.2 e §5.4 respeitados |
| **O5** | Criar `frontend-reviewer` | O4 | Contrato §5.5 respeitado |
| **O6** | Run piloto (D6) + teste dos 3 defeitos injetados (CA-S-05) | O5 | CA-S-01…CA-S-07 |
| **O7** | Opcional: RI-04 (endurecer tsconfig) e RI-08 (CI) | O6 | `verify` verde |

**Caminho crítico:** O1 é pré-requisito real, não formalidade. Construir o coder antes de ter grounding de App Router significa codificar as suposições da §7.18 no prompt do agente — exatamente o erro que este SPEC existe para evitar.

---

## 13. Lacunas sinalizadas

### 13.1 Ausência de grounding sobre App Router e React Server Components ⚠️ **crítica**

`react-features.md` cobre React "puro" (react.dev) e declara explicitamente que TypeScript é responsabilidade de outro documento — mas **nenhum dos dois cobre App Router, RSC, Server Actions, streaming, `loading.tsx`/`error.tsx`, caching, `next/image`, `next/font` ou `next/link`**.

Isso importa porque o projeto **é** um App Router: 14 dos 19 componentes são `'use client'`, e a decisão de maior impacto que o coder toma — a fronteira server/client — é justamente a que não tem base documental. A §7.18 foi escrita a partir do que se observa no repo e está marcada como provisória.

**Recomendação:** produzir `.claude/research/nextjs-app-router-features.md` (RI-06) com o mesmo rigor dos outros dois, antes de O3.

### 13.2 Divergência entre a pesquisa e o stack

`react-features.md` documenta features do React 19 (`use()`, ref-as-prop, `<Context>` como provider, React Compiler) sem marcar que **não estão disponíveis** num projeto `react: ^18`. Um agente que consome esse documento como grounding vai escrever código que não compila. A §7.17 existe para neutralizar isso; a alternativa mais limpa é anotar o próprio arquivo de pesquisa com a disponibilidade por versão.

### 13.3 Ponto não resolvido: React canary vendorizado

Não é possível afirmar, sem probe, se APIs da era React 19 (Actions, `useFormStatus`, `useOptimistic`) estão disponíveis no App Router do Next 14.2.35 apesar de `react: ^18` no `package.json` — o App Router vendoriza uma versão canary do React. **Não afirmado em nenhuma direção neste SPEC**; resolvido por RI-05.

### 13.4 Escopo deliberadamente fora

Não coberto aqui, e não deveria entrar sem pedido: performance budget / Lighthouse CI, visual regression, i18n, gestão de estado global (Zustand/Redux — nenhum presente hoje), data fetching de API externa (não há hoje), e Storybook.

---

## 14. Referências

**Verificadas nesta sessão:**
- Next.js 14 — Testing (overview, guidance sobre async Server Components): https://nextjs.org/docs/14/app/building-your-application/testing
- Next.js 14 — Setting up Vitest (pacotes, config, caveat): https://nextjs.org/docs/14/app/building-your-application/testing/vitest

**Grounding do projeto (leitura obrigatória dos agentes):**
- `.claude/research/react-features.md` — 190 linhas, ~45 fontes react.dev
- `.claude/research/typescript-features.md` — 167 linhas, ~22 fontes typescriptlang.org
- `DESIGN.md` — design system v1.0
- `~/Dev/CLAUDE.md` — práticas de engenharia do workspace (ondas, delegação, metodologia SPEC, handoff picotado)

**A produzir:**
- `.claude/research/nextjs-app-router-features.md` (RI-06)

---

## 15. Ponto de parada

Este SPEC termina aqui, sem execução, conforme a metodologia do workspace.

**Para destravar O1:** responder D1–D6 (§3). As demais seções não dependem de mais nada.
