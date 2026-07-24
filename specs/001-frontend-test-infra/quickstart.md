# Quickstart — Verificação do frontend

**Feature**: `001-frontend-test-infra` | **Date**: 2026-07-24

Do clone limpo ao veredito. Alvo: **menos de 15 minutos** (SC-007). Sem conhecimento tácito —
se algum passo aqui exigir adivinhação, é defeito a corrigir (FR-016).

> **Estado**: este documento descreve o alvo do plano. Os comandos abaixo passam a existir ao
> longo das fases F0–F5 do [plan.md](./plan.md). Antes disso, apenas o passo 1 funciona.

## 1. Instalar dependências

```bash
npm install
```

Obrigatório. `node_modules/` não vem versionado e **nenhum** comando de verificação roda sem isso
— nem os que já existiam antes desta feature (R8 da research).

## 2. Instalar os navegadores (só para a etapa completa)

```bash
npx playwright install
```

Só necessário para `test:e2e` / `verify:all`. A etapa rápida não precisa de navegador.

## 3. Rodar a verificação

**Etapa rápida** — o que roda automaticamente a cada PR:

```bash
npm run verify
```

Executa, nesta ordem e abortando na primeira falha: tipos → lint → unidade/componente → build.
Alvo: menos de 3 minutos.

**Etapa completa** — inclui navegador e contraste de cor:

```bash
npm run verify:all
```

Alvo: menos de 10 minutos.

> ⚠️ **Rode `verify:all` sempre que a mudança tocar cor, tipografia ou layout.** A etapa rápida
> é estruturalmente cega para contraste — a regra do axe não funciona sem renderização real
> (R5 da research). `verify` verde não significa contraste OK.

## 4. Ler o resultado

Código de saída `0` = aprovado. Qualquer outro = reprovado, com arquivo e linha da falha.

## Comandos individuais

Úteis para isolar uma camada durante o desenvolvimento:

| Comando | O que verifica |
|---|---|
| `npm run typecheck` | contrato de tipos |
| `npm run lint` | regras de React/Hooks e TypeScript |
| `npm run test` | comportamento de componente + acessibilidade estrutural |
| `npm run test:watch` | idem, em modo contínuo — **uso humano apenas**, não termina |
| `npm run build` | montagem do site e fronteira server/client |
| `npm run test:e2e` | jornadas no navegador + contraste |

## Onde escrever teste novo

| Tipo | Onde | Runner |
|---|---|---|
| Função pura de `lib/` | `__tests__/` | Vitest |
| Componente interativo (Client Component) | `__tests__/` | Vitest + RTL |
| Server Component **síncrono** | `__tests__/` | Vitest + RTL |
| Server Component **`async`** | `e2e/` | Playwright — **não é testável isoladamente** (R2) |
| Jornada de navegação | `e2e/` | Playwright |
| Contraste de cor | `e2e/` | Playwright + axe |

## Regras ao escrever teste

- Verificar **comportamento observável pelo usuário**, via queries acessíveis (`getByRole`,
  `getByLabelText`) — nunca nome de variável interna ou contagem de renderizações (FR-012).
- **Nunca** afrouxar um gate para fazer passar: sem `eslint-disable` novo, sem relaxar
  `tsconfig.json`, sem `as any`, sem apagar assert. Gate injusto é achado a reportar, não a
  contornar (Princípio I da constituição).
- Teste de canário precisa ter sido **sabotado uma vez** e falhado, provando que detecta de fato
  (FR-013).

## Problemas comuns

| Sintoma | Causa provável | O que fazer |
|---|---|---|
| Erro obscuro de módulo não encontrado | dependências não instaladas | passo 1 |
| `test:e2e` falha ao abrir o navegador | binários ausentes | passo 2 |
| `verify` verde mas o contraste está errado | comportamento esperado, não bug | rodar `verify:all` |
| Teste passa isolado e falha no conjunto | estado vazando entre testes | isolar o setup; ver `__tests__/setup.ts` |
