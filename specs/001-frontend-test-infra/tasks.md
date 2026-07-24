---
description: "Task list — Infraestrutura de Verificação Automatizada do Frontend"
---

# Tasks: Infraestrutura de Verificação Automatizada do Frontend

**Input**: Design documents from `/specs/001-frontend-test-infra/`

**Prerequisites**: [plan.md](./plan.md) · [spec.md](./spec.md) · [research.md](./research.md) · [contracts/](./contracts/) · [quickstart.md](./quickstart.md)

**Tests**: nesta feature os "testes" **são a implementação** — cada canário é entregável, não
tarefa de teste opcional. Por isso não há seção "Tests for User Story X" separada: as tarefas de
canário aparecem como implementação, e cada uma tem sua tarefa-par de **prova por sabotagem**
(FR-013), que é o que distingue um gate real de um gate falso-verde.

**Organization**: agrupado por user story. Cada story é entregável e verificável isolada.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: pode rodar em paralelo (arquivos diferentes, sem dependência pendente)
- **[Story]**: US1–US4, conforme as user stories do [spec.md](./spec.md)

## Path Conventions

Single project, raiz do repositório: `app/`, `components/`, `lib/` (existentes);
`__tests__/`, `e2e/` (novos). Conforme a Structure Decision do [plan.md](./plan.md).

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: tornar o repositório executável e conhecer o ponto de partida

- [ ] T001 Instalar as dependências já declaradas em `package.json` (`npm install`) — hoje `node_modules/` não existe e **nenhum** comando roda sem isso (R8 da research)
- [ ] T002 Registrar o baseline em `specs/001-frontend-test-infra/baseline.md`: saída de `npx tsc --noEmit`, `npm run lint` e `npm run build` no repo **como está**, antes de qualquer mudança
- [ ] T003 [P] Adicionar artefatos de execução ao `.gitignore`: `/test-results/`, `/playwright-report/`, `/blob-report/`, `/coverage/`

**⚠️ Gate de decisão em T002**: se o baseline já estiver vermelho, **parar e escalar ao dono**.
Construir gate sobre base quebrada esconde qual defeito é novo e qual é preexistente.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: dependências e estrutura que todas as user stories precisam

**⚠️ CRITICAL**: nenhuma user story começa antes desta fase terminar

- [ ] T004 Instalar como devDependencies em `package.json`, em bloco único: `vitest`, `@vitejs/plugin-react`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `@playwright/test`, `axe-core`, `@axe-core/playwright` — **exige aprovação do dono** (Restrições Técnicas da constituição); a lista é fechada, nada além entra sem novo pedido
- [ ] T005 [P] Criar `__tests__/canary/.gitkeep` estabelecendo o diretório de unidade/componente
- [ ] T006 [P] Criar `e2e/canary/.gitkeep` e `e2e/fixtures/.gitkeep` estabelecendo o diretório de navegador
- [ ] T007 Adicionar o script `"typecheck": "tsc --noEmit"` em `package.json`

**Checkpoint**: dependências instaladas e estrutura criada — user stories podem começar

---

## Phase 3: User Story 1 — Saber se a mudança quebrou algo (Priority: P1) 🎯 MVP

**Goal**: veredito binário automatizado sobre tipos, lint e montagem do site — sem escrever um
único arquivo de teste. É a fundação de que todas as outras stories dependem.

**Independent Test**: introduzir um defeito de cada uma das 3 classes e confirmar que cada um é
apontado com arquivo e linha, sem passo manual.

- [ ] T008 [US1] Adicionar o script `"verify"` em `package.json` encadeando `typecheck` → `lint` → `build`, abortando na primeira falha (ordem do barato ao caro, conforme a constituição)
- [ ] T009 [US1] Confirmar veredito binário em `package.json`: `npm run verify` sai com código `0` no repo limpo e diferente de `0` com defeito (FR-001)
- [ ] T010 [P] [US1] Prova de detecção de tipo: introduzir erro de tipo temporário em `components/ui/Button.tsx`, confirmar que `verify` reprova apontando arquivo e linha, reverter
- [ ] T011 [P] [US1] Prova de detecção de lint: introduzir violação de regra de hooks temporária em `components/sections/CategoryFilter.tsx`, confirmar reprovação, reverter
- [ ] T012 [P] [US1] Prova de detecção de build: introduzir violação de fronteira server/client temporária em `app/(dark)/page.tsx` (ex.: passar função como prop para Client Component), confirmar reprovação, reverter
- [ ] T013 [US1] Cronometrar `npm run verify` e registrar em `specs/001-frontend-test-infra/baseline.md` contra a meta de 3 min (SC-002) — **primeira medição real**, o número do spec era só meta

**Checkpoint**: US1 completa. Já entrega valor sozinha — o repo passa a ter gate onde não tinha nenhum.

---

## Phase 4: User Story 2 — Congelar comportamento de componente interativo (Priority: P2)

**Goal**: fixar o comportamento observável de componentes com estado, para que refatoração que o
altere seja apontada.

**Independent Test**: refatorar as entranhas de um componente preservando o comportamento (canário
segue verde), depois alterar o comportamento (canário reprova).

- [ ] T014 [US2] Criar `vitest.config.ts` na raiz com `@vitejs/plugin-react` e `environment: 'jsdom'`, **excluindo `e2e/`** da varredura (runner distinto)
- [ ] T015 [US2] Criar `__tests__/setup.ts` registrando os matchers de `@testing-library/jest-dom`
- [ ] T016 [US2] Referenciar `__tests__/setup.ts` via `test.setupFiles` em `vitest.config.ts`
- [ ] T017 [P] [US2] Escrever canário de unidade em `__tests__/canary/unit.test.ts` cobrindo uma função pura de `lib/products.ts` ou `lib/verticals.ts`
- [ ] T018 [P] [US2] Escrever canário de componente em `__tests__/canary/component.test.tsx` para `components/sections/CategoryFilter.tsx`, usando **apenas** queries acessíveis (`getByRole`, `getByLabelText`) e `user-event` (FR-012)
- [ ] T019 [US2] Adicionar os scripts `"test": "vitest run"` e `"test:watch": "vitest"` em `package.json`
- [ ] T020 [US2] Encaixar `test` no encadeamento de `verify` em `package.json`, entre `lint` e `build`
- [ ] T021 [US2] Prova por sabotagem: quebrar cada canário de `__tests__/canary/` uma vez, confirmar que falha, reverter (FR-013)
- [ ] T022 [US2] Prova de independência de implementação: refatorar internamente `components/sections/CategoryFilter.tsx` preservando o comportamento e confirmar que o canário **continua verde** — se quebrar, o teste está preso a detalhe interno e viola FR-012

**Checkpoint**: US1 e US2 funcionam independentes. A etapa rápida está completa.

---

## Phase 5: User Story 3 — Validar a jornada real no navegador (Priority: P3)

**Goal**: cobrir jornadas de navegação e o conteúdo montado no servidor de forma assíncrona — a
única camada capaz disso (R2).

**Independent Test**: percorrer uma jornada real de ponta a ponta; quebrar um link e confirmar reprovação.

- [ ] T023 [US3] Criar `playwright.config.ts` na raiz com `webServer` executando o **build de produção** (`npm run build && npm run start`), `baseURL` local e modo headless — conforme a recomendação da doc do Next (R3), sem os dois terminais manuais
- [ ] T024 [US3] Escrever canário de jornada em `e2e/canary/journey.spec.ts` navegando de `app/(dark)/ia/page.tsx` até um capítulo `[slug]` de uma trilha, confirmando o conteúdo de cada página
- [ ] T025 [US3] Adicionar o script `"test:e2e": "playwright test"` em `package.json`
- [ ] T026 [US3] Adicionar o script `"verify:all"` encadeando `verify` → `test:e2e` em `package.json`
- [ ] T027 [US3] Prova por sabotagem: quebrar temporariamente um link da jornada em `components/sections/VerticalProductGrid.tsx`, confirmar reprovação, reverter
- [ ] T028 [US3] Confirmar em `specs/001-frontend-test-infra/contracts/verification-commands.md` que a rota `[slug]` (Server Component `async`) é de fato coberta por T024 — fecha a lacuna estrutural declarada em R2
- [ ] T029 [US3] Cronometrar `npm run verify:all` e registrar em `specs/001-frontend-test-infra/baseline.md` contra a meta de 10 min (SC-002)

**Checkpoint**: as três primeiras stories funcionam independentes.

---

## Phase 6: User Story 4 — Cobrar acessibilidade automaticamente (Priority: P4)

**Goal**: apontar violações de acessibilidade sem auditoria manual, **dividido entre as duas
camadas** porque contraste não é verificável em jsdom (R5).

**Independent Test**: campo sem rótulo é apontado na camada rápida; contraste insuficiente é
apontado na camada de navegador.

- [ ] T030 [US4] ⚠️ **RISCO DECLARADO** Escolher e validar o adaptador de axe para Vitest; se nenhum servir, invocar `axe-core` diretamente no teste. Registrar a decisão e a alternativa rejeitada em `specs/001-frontend-test-infra/research.md` — a pesquisa **não** confirmou um pacote maduro, isto é lacuna a fechar, não escolha já feita
- [ ] T031 [US4] Escrever canário de a11y estrutural em `__tests__/canary/a11y.test.tsx`, com a regra `color-contrast` **explicitamente desabilitada** e comentário apontando R5 — desabilitar em silêncio daria falsa impressão de cobertura
- [ ] T032 [US4] Escrever canário de a11y com contraste em `e2e/canary/a11y.spec.ts` usando `@axe-core/playwright` contra uma página de vertical escura (`app/(dark)/ia/page.tsx`), onde o risco de contraste é maior
- [ ] T033 [P] [US4] Prova por sabotagem estrutural: remover temporariamente o rótulo de um campo em `components/sections/NewsletterCTA.tsx`, confirmar reprovação, reverter
- [ ] T034 [P] [US4] Prova por sabotagem de contraste: reduzir temporariamente o contraste de um token em `lib/tokens.ts`, confirmar que **só** `verify:all` reprova e que `verify` passa — comprova empiricamente a lacuna de R5
- [ ] T035 [US4] Documentar em `specs/001-frontend-test-infra/quickstart.md` a regra operacional: mudança em cor, tipografia ou layout exige `verify:all` antes de publicar

**Checkpoint**: as quatro user stories funcionam independentes.

---

## Phase 7: Polish & Cross-Cutting Concerns

- [ ] T036 Criar `.github/workflows/verify.yml` executando `npm run verify` a cada pull request, com o resultado condicionando a mesclagem (FR-018 / decisão Q2-C)
- [ ] T037 Validar o workflow em `.github/workflows/verify.yml`: abrir um PR com defeito deliberado (reprova) e um PR limpo (aprova)
- [ ] T038 [P] Validar `specs/001-frontend-test-infra/quickstart.md` num clone limpo, cronometrando do zero ao veredito (SC-007, meta 15 min)
- [ ] T039 [P] Atualizar `.claude/frontend-mas-SPEC.md` §9.1 e §9.3 para apontar os comandos que passaram a existir de fato, substituindo a infraestrutura hipotética
- [ ] T040 Preencher a tabela final SC-001…SC-007 com resultado medido em `specs/001-frontend-test-infra/baseline.md` — cada critério marcado como atingido ou não, com o número real

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: sem dependências — começa imediatamente. **T001 bloqueia literalmente tudo.**
- **Foundational (Phase 2)**: depende de Setup. **BLOQUEIA todas as user stories.** T004 exige aprovação do dono.
- **US1 (Phase 3)**: depende de Foundational. Não depende de nenhuma outra story.
- **US2 (Phase 4)**: depende de Foundational. T020 toca o mesmo script `verify` criado em T008 — **não paralelizar com US1**.
- **US3 (Phase 5)**: depende de Foundational. T026 encadeia sobre `verify`, logo depende de US1 e US2 estarem estáveis.
- **US4 (Phase 6)**: depende de US2 (camada jsdom) e US3 (camada navegador) — é a única story que atravessa as duas.
- **Polish (Phase 7)**: depende de todas as stories desejadas.

### Dependência real entre stories (atenção)

Ao contrário do caso genérico do template, estas stories **não são todas paralelizáveis**: US2,
US3 e US4 escrevem no mesmo `package.json` (campo `scripts`) e encadeiam sobre o mesmo `verify`.
Executar em paralelo gera conflito de merge no mesmo arquivo. **Ordem sequencial P1 → P2 → P3 → P4
é a recomendada.**

### Within Each User Story

- Config antes de canário; canário antes da prova por sabotagem.
- Prova por sabotagem é **obrigatória** e vem sempre depois do canário (FR-013).
- Script novo em `package.json` entra depois de o canário correspondente estar verde.

### Parallel Opportunities

- **Phase 1**: T003 em paralelo com T002.
- **Phase 2**: T005 e T006 em paralelo (diretórios distintos).
- **US1**: T010, T011 e T012 em paralelo — arquivos-alvo distintos, cada um revertido ao fim.
- **US2**: T017 e T018 em paralelo (arquivos de teste distintos).
- **US4**: T033 e T034 em paralelo (camadas e arquivos distintos).
- **Polish**: T038 e T039 em paralelo.

---

## Parallel Example: User Story 1

```bash
# As três provas de detecção atacam arquivos diferentes e podem correr juntas:
Task: "Prova de detecção de tipo em components/ui/Button.tsx"
Task: "Prova de detecção de lint em components/sections/CategoryFilter.tsx"
Task: "Prova de detecção de build em app/(dark)/page.tsx"
# Cada uma reverte seu próprio arquivo ao terminar.
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Phase 1: Setup — **parar em T002 se o baseline estiver vermelho**
2. Phase 2: Foundational — T004 exige aprovação do dono
3. Phase 3: US1
4. **PARAR E VALIDAR**: `npm run verify` pega os 3 defeitos deliberados
5. Já é entregável: o repo sai de zero gate para gate real, sem nenhum arquivo de teste escrito

### Incremental Delivery

1. Setup + Foundational → base pronta
2. + US1 → veredito sobre tipos/lint/build → **MVP**
3. + US2 → comportamento de componente congelado → etapa rápida completa
4. + US3 → jornadas e Server Components `async` cobertos
5. + US4 → acessibilidade cobrada nas duas camadas
6. + Polish → gate automático por PR (FR-018)

Cada incremento agrega sem quebrar o anterior. Commit por tarefa ou grupo lógico (Princípio III).

---

## Notes

- `[P]` = arquivos diferentes, sem dependência pendente.
- **Toda tarefa de sabotagem precisa reverter o arquivo.** Sabotagem esquecida no repo é defeito
  introduzido pelo próprio processo de verificação.
- **Nunca afrouxar gate para fazer passar** (Princípio I): sem `eslint-disable` novo, sem relaxar
  `tsconfig.json`, sem `as any`, sem apagar assert. Gate injusto é achado a reportar.
- Os alvos de tempo (SC-002) são metas do spec, **não medições**. T013 e T029 produzem os números
  reais; se estourarem, a decisão de aceitar ou remanejar camada é do dono.
- T030 é a única tarefa com risco técnico aberto declarado. Se travar, US4 entrega só a metade de
  navegador (T032/T034) e a camada estrutural vira onda própria — degradação prevista, não surpresa.
