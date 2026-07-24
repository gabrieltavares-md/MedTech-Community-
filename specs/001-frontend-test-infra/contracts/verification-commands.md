# Contrato — Superfície de comandos de verificação

**Feature**: `001-frontend-test-infra` | **Date**: 2026-07-24

Este é o contrato entre a infraestrutura de teste e quem a consome — pessoa ou agente. O
`frontend-tester` do `.claude/frontend-mas-SPEC.md` invoca **exatamente** estes comandos; nenhum
outro. Mudar esta superfície é mudar o contrato e exige atualizar aquele SPEC.

## Comandos

| Script | Camada | Etapa | Bloqueante | Cobre |
|---|---|---|---|---|
| `npm run typecheck` | tipos | rápida | sim | contrato de tipos sob `strict` |
| `npm run lint` | lint | rápida | sim | regras de React/Hooks e TypeScript |
| `npm run test` | unidade/componente + a11y estrutural | rápida | sim | comportamento observável; rótulo, `role`, `aria-*` |
| `npm run build` | montagem | rápida | sim | fronteira server/client, serialização, geração estática |
| `npm run test:e2e` | navegador + a11y com contraste | completa | sob demanda | jornadas reais, Server Components `async`, **contraste** |
| `npm run verify` | agregado da etapa **rápida** | rápida | sim | tudo acima menos navegador |
| `npm run verify:all` | agregado da etapa **completa** | completa | sob demanda | tudo |

`npm run test:watch` existe para uso humano interativo. **Agentes não devem invocá-lo** — não
termina, violando FR-011.

## Garantias que o contrato oferece

1. **Veredito binário** — código de saída `0` = aprovado, diferente de `0` = reprovado (FR-001).
   Nenhum consumidor precisa interpretar a saída em texto para saber o resultado.
2. **Não interativo** — nenhum comando acima abre prompt ou espera entrada (FR-011). É por isso
   que o Playwright é instalado direto, sem `npm init playwright` (R4 da research).
3. **Localização na falha** — toda falha reporta arquivo e linha (FR-008).
4. **Ordem do barato ao caro** — `verify` executa tipos → lint → teste → build e **aborta na
   primeira falha**, para não gastar build depois de um erro de tipo.

## Limites que o contrato NÃO cobre — declarar, nunca omitir

Quem reporta verificação precisa declarar estes limites explicitamente (FR-009):

| Não coberto | Por quê | Onde é coberto |
|---|---|---|
| Server Components `async` | limitação documentada do runner de unidade (R2) | `test:e2e` |
| **Contraste de cor** | a regra do axe não roda em jsdom (R5) | `test:e2e` |
| Aparência visual | comparação visual está fora de escopo | nenhum lugar — revisão humana |
| Código pré-existente | decisão Q1-A: só canários nesta onda (FR-017) | ondas futuras |

**Regra operacional decorrente**: mudança que toque **cor, tipografia ou layout** exige
`verify:all` antes de publicar. `verify` sozinho é cego para contraste.

## Uso pelo `frontend-tester`

O agente de teste do pipeline multiagêntico preenche a tabela de gates do seu `03-test.md`
(§5.4 do `frontend-mas-SPEC.md`) com uma linha por script acima, cada uma com `PASS`/`FAIL`/`SKIP`.
`SKIP` sem motivo declarado é violação do Princípio I da constituição.
