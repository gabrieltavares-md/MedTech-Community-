# Implementation Plan: Infraestrutura de Verificação Automatizada do Frontend

**Branch**: `001-frontend-test-infra` | **Date**: 2026-07-24 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-frontend-test-infra/spec.md`

---

## Summary

Instalar as quatro camadas de verificação que hoje não existem neste repositório — tipos, lint,
unidade/componente e navegador — e provar cada uma com um teste-canário, sem cobrir o código
pré-existente (FR-017). A verificação fica dividida em uma **etapa rápida** automática por PR e
uma **etapa completa** sob demanda (FR-018).

Abordagem técnica, derivada da [research.md](./research.md): **Vitest + React Testing Library**
para unidade/componente, **Playwright** para navegador, e **axe dividido entre as duas camadas** —
porque a regra de contraste do axe não funciona em jsdom e contraste é requisito de `DESIGN.md`.

## Technical Context

**Language/Version**: TypeScript 5 (`strict: true`, `noEmit`, `isolatedModules`), Node via npm

**Primary Dependencies** *(a instalar — todas exigem aprovação do dono, já concedida na escolha D1)*:
`vitest`, `@vitejs/plugin-react`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom`,
`@testing-library/user-event`, `@playwright/test`, `axe-core`, `@axe-core/playwright`, e um
adaptador axe para o runner de unidade (ver Riscos)

**Storage**: N/A — a feature não persiste dados

**Testing**: Vitest (unidade/componente, ambiente jsdom) · Playwright (navegador, contra build de
produção via `webServer`) · axe-core nas duas camadas

**Target Platform**: navegador moderno; aplicação Next.js 14 App Router com deploy Vercel

**Project Type**: aplicação web frontend (single project, sem backend próprio)

**Performance Goals**: etapa rápida < 3 min; completa < 10 min (SC-002 — **metas, não medições**;
ver R7 da research)

**Constraints**: execução não interativa (FR-011); nenhum passo manual (SC-003); Server Components
`async` só verificáveis no navegador (R2); contraste só verificável no navegador (R5)

**Scale/Scope**: 19 componentes, 9 páginas, 3 módulos em `lib/`. Esta entrega cobre **1 canário por
camada**, não o inventário (FR-017)

## Constitution Check

*GATE: avaliado contra a [constituição v1.0.0](../../.specify/memory/constitution.md).*

| Princípio | Como este plano adere | Veredito |
|---|---|---|
| **I. Verificação Antes de Afirmação** | É literalmente a feature. Canário por camada (FR-013) prova que cada gate está ativo; `SKIP` declarado com motivo (FR-009) | ✅ PASS |
| **II. Never-Invent** | Nenhuma versão de pacote afirmada; limites de tempo marcados como meta e não medição; 4 lacunas declaradas na research | ✅ PASS |
| **III. Ondas Pequenas e Reversíveis** | Escopo cortado a canários (Q1-A); 5 fases sequenciais, cada uma verificável isolada; plano termina em aprovação | ✅ PASS |
| **IV. Convenção do Repo** | Testes adotam `__tests__` (convenção citada pela doc do Next) e o alias `@/*` já existente; nenhuma reorganização de `components/` | ✅ PASS |
| **V. Acessibilidade é Requisito** | axe nas duas camadas, dividido por capacidade real (R5) em vez de fingir cobertura | ✅ PASS |
| **Restrições Técnicas** | Stack da aplicação inalterada; nenhuma API de React 19; dependências novas listadas para aprovação em bloco | ✅ PASS |

**Violações a justificar**: nenhuma. Seção "Complexity Tracking" omitida por não se aplicar.

⚠️ **Ressalva declarada, não violação**: a decisão Q2-C deixa contraste fora do gate automático
(R5). É trade-off escolhido pelo dono, e o plano o torna visível em vez de silencioso — mas
significa que mudança em cor/tipografia/layout **exige** rodar a etapa completa antes de publicar.

## Project Structure

### Documentation (this feature)

```text
specs/001-frontend-test-infra/
├── spec.md               # o quê e por quê (tech-agnostic)
├── plan.md               # este arquivo
├── research.md           # Phase 0 — decisões com fonte
├── quickstart.md         # Phase 1 — como rodar do zero
├── contracts/
│   └── verification-commands.md   # superfície de comandos que o agente de teste invoca
└── tasks.md              # Phase 2 — gerado por /speckit-tasks, NÃO por este comando
```

Sem `data-model.md`: a feature não tem entidades de dados. Omitido deliberadamente em vez de
preenchido com conteúdo vazio.

### Source Code (repository root)

```text
app/                        # inalterado
components/                 # inalterado
lib/                        # inalterado

__tests__/                  # NOVO — unidade/componente (Vitest)
├── setup.ts                #   matchers jest-dom + registro do axe estrutural
└── canary/
    ├── component.test.tsx  #   canário: comportamento de componente interativo
    ├── unit.test.ts        #   canário: função pura de lib/
    └── a11y.test.tsx       #   canário: acessibilidade estrutural (rótulo ausente)

e2e/                        # NOVO — navegador (Playwright)
├── canary/
│   ├── journey.spec.ts     #   canário: jornada real de navegação
│   └── a11y.spec.ts        #   canário: acessibilidade com contraste
└── fixtures/               #   helpers compartilhados

vitest.config.ts            # NOVO
playwright.config.ts        # NOVO — webServer contra build de produção
.github/workflows/verify.yml# NOVO — etapa rápida automática por PR (FR-018)
package.json                # MODIFICADO — scripts de verificação
```

**Structure Decision**: single project. `__tests__/` na raiz segue a convenção que a própria doc
do Next cita ("the common `__tests__` convention"); `e2e/` fica separado porque roda em runner
distinto, contra um servidor de verdade, e não deve ser varrido pelo Vitest.

## Fases de implementação

Sequenciais. Cada fase termina verificável e é candidata a commit próprio (Princípio III).

| Fase | Entrega | Prova de conclusão |
|---|---|---|
| **F0** | `npm install`; rodar `tsc`/`lint`/`build` no repo como está e **registrar o baseline** | Os 3 comandos rodam; resultado documentado — inclusive se já houver falha preexistente |
| **F1** | Scripts `typecheck` e `verify:fast` (tipos+lint+build, sem teste ainda) | `npm run verify:fast` devolve veredito binário |
| **F2** | Vitest + RTL + jest-dom + user-event; `vitest.config.ts`; 2 canários (componente, unidade) | Canário passa; ao ser sabotado, falha |
| **F3** | axe estrutural na camada jsdom; canário de a11y | Campo sem rótulo é apontado |
| **F4** | Playwright + `@axe-core/playwright`; `playwright.config.ts` com `webServer`; 2 canários (jornada, contraste) | Jornada passa contra build de produção; violação de contraste é apontada |
| **F5** | Workflow de CI da etapa rápida (FR-018); `quickstart.md` validado num clone limpo | PR abre com verificação automática; SC-007 medido |

**Ordem obrigatória**: F0 antes de tudo (R8). F4 depois de F2 para reaproveitar convenções de
teste. F5 por último, porque só faz sentido automatizar o que já se provou verde localmente.

## Riscos e mitigações

| Risco | Impacto | Mitigação |
|---|---|---|
| **Adaptador axe para Vitest não verificado** | F3 trava | A research **não** confirmou um pacote específico e maduro de axe para Vitest — apenas que a limitação de jsdom vale para qualquer runner sobre jsdom. **Primeira tarefa de F3 é escolher e validar o adaptador**, com fallback de chamar `axe-core` diretamente no teste. Lacuna declarada, não assumida. |
| Binários de navegador pesados / lentos em CI | SC-002 estourado | Q2-C já mantém navegador fora do gate automático; F5 instala binários só quando a etapa completa roda |
| Baseline já vermelho em F0 | Bloqueia tudo | F0 existe justamente para descobrir isso antes de construir por cima; se vermelho, vira decisão do dono corrigir antes ou seguir com baseline documentado |
| Canário que passa por acaso | Gate falso-verde | FR-013: cada canário precisa ser **sabotado uma vez** e falhar, provando que detecta |
| Contraste fora do gate automático | Regressão visual publicada | Declarado no Constitution Check; F5 documenta a regra: mudou cor/tipografia/layout → rodar etapa completa |

## Próximo comando

`/speckit-tasks` — deriva a lista acionável de tarefas a partir deste plano.
**Não executar `/speckit-implement` antes da aprovação do dono** (Princípio III: pausa obrigatória
entre plano e execução).
