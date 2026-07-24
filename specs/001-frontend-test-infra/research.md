# Phase 0 — Research: Infraestrutura de Verificação Automatizada

**Feature**: `001-frontend-test-infra` | **Date**: 2026-07-24
**Input**: [spec.md](./spec.md) · [constitution v1.0.0](../../.specify/memory/constitution.md)

Toda decisão abaixo traz fonte verificada ou é marcada como lacuna. Nenhuma versão de pacote é
afirmada aqui — versões são resolvidas na instalação e ficam registradas no lockfile (Princípio II).

---

## R1 — Runner de unidade/componente

**Decision**: **Vitest** + **React Testing Library**, com ambiente `jsdom`.

**Rationale**: é uma das quatro ferramentas que a doc do Next.js 14 documenta oficialmente, e a
que melhor casa com este repo especificamente: o `tsconfig.json` usa `module: esnext` e
`moduleResolution: bundler`, terreno nativo do Vitest (baseado em Vite) e onde o Jest exige
camada extra de transformação. Pacotes exatos prescritos pela doc:

```
vitest @vitejs/plugin-react jsdom @testing-library/react
```

**Alternatives considered**:
- **Jest** — também documentado oficialmente pelo Next 14 e igualmente válido. Rejeitado pelo
  atrito de configuração ESM/TS neste `tsconfig`, não por qualidade.
- **Cypress component testing** — documentado pelo Next, mas duplicaria com Playwright na camada
  de navegador sem ganho.

**Source**: https://nextjs.org/docs/14/app/building-your-application/testing/vitest

---

## R2 — Limite estrutural: Server Components assíncronos

**Decision**: conteúdo montado no servidor de forma assíncrona **não** é verificado na camada de
unidade. Cobertura obrigatória via navegador (US3).

**Rationale**: a doc do Next 14 é explícita, em duas páginas distintas:

> "Since `async` Server Components are new to the React ecosystem, some tools do not fully support
> them. In the meantime, we recommend using **End-to-End Testing** over **Unit Testing** for
> `async` components."

> "Vitest currently does not support them. While you can still run unit tests for synchronous
> Server and Client Components, we recommend using E2E tests for `async` components."

Consequência normativa: Server Components **síncronos** e Client Components **são** testáveis por
unidade. Só os `async` ficam para o navegador. Tentar e falhar, ou pular em silêncio, viola FR-009.

**Source**: https://nextjs.org/docs/14/app/building-your-application/testing ·
https://nextjs.org/docs/14/app/building-your-application/testing/vitest

---

## R3 — Camada de navegador (E2E)

**Decision**: **Playwright**, rodando contra o **build de produção**.

**Rationale**: documentado oficialmente pelo Next 14, e a própria doc recomenda o alvo:

> "We recommend running your tests against your production code to more closely resemble how your
> application will behave. Run `npm run build` and `npm run start`, then run `npx playwright test`
> in another terminal window."

Para automação, a doc aponta a alternativa que elimina o passo manual dos dois terminais:

> "Alternatively, you can use the `webServer` feature to let Playwright start the development
> server and wait until it's fully available."

Usaremos `webServer` apontando para o build de produção — satisfaz SC-003 (zero passos manuais)
sem abrir mão da recomendação de testar contra produção.

**Source**: https://nextjs.org/docs/14/app/building-your-application/testing/playwright

---

## R4 — Instalação do Playwright é interativa ⚠️

**Decision**: **não** usar `npm init playwright`. Instalar `@playwright/test` diretamente e
escrever `playwright.config.ts` à mão.

**Rationale**: a doc prescreve `npm init playwright`, que "will take you through a series of
prompts". Um fluxo interativo é incompatível com FR-011 (execução não interativa por agente) e
torna a instalação não reprodutível. Instalação direta + config versionada satisfaz FR-016.

Binários de navegador exigem passo próprio (`playwright install`), e em CI também
`playwright install-deps` — a doc confirma: *"To install all the Playwright dependencies, run
`npx playwright install-deps`."*

**Source**: https://nextjs.org/docs/14/app/building-your-application/testing/playwright

---

## R5 — Acessibilidade precisa ser dividida entre as duas camadas ⚠️ **achado crítico**

**Decision**: acessibilidade roda em **duas camadas complementares**, não em uma:

| Camada | Cobre | Não cobre |
|---|---|---|
| `jsdom` + axe (rápida) | estrutura: rótulo associado, `role`, `aria-*`, landmarks, ordem de heading | **contraste de cor** |
| navegador + axe (completa) | tudo acima **+ contraste de cor**, foco visível, resultado renderizado real | — |

**Rationale**: a regra `color-contrast` do axe-core **não funciona em jsdom**. jsdom não faz
layout nem renderização, então não há o que medir; a regra retorna "incomplete" e o `jest-axe` a
desliga por padrão — a mesma limitação vale para qualquer runner sobre jsdom.

Isso importa porque contraste é requisito explícito de `DESIGN.md` e do Princípio V da
constituição. Se a acessibilidade fosse posta apenas na camada rápida, **contraste nunca seria
verificado** — o gate existiria e não cobriria justamente a regra mais fácil de violar ao mexer
em tokens de cor por vertical.

**Consequência para FR-018 (decisão Q2-C)**: como a camada de navegador é sob demanda, a
verificação automática por PR **não** cobre contraste. Isso é uma lacuna consciente, não um
descuido: precisa estar declarada no relatório de verificação (FR-009) e o gate de navegador
precisa ser executado antes de publicar mudança que toque cor, tipografia ou layout.

**Alternatives considered**:
- **Só axe no navegador** — cobre tudo, mas joga toda a acessibilidade para a camada sob demanda;
  violações estruturais triviais (campo sem rótulo) deixariam de ser pegas automaticamente.
- **Só axe em jsdom** — mais barato, mas silenciosamente cego para contraste. Rejeitado: um gate
  que não cobre o que promete é pior que gate nenhum (Princípio I).

**Sources**: [axe-core#595 — "The color-contrast check doesn't work in JSDOM"](https://github.com/dequelabs/axe-core/issues/595) ·
[jest-axe](https://github.com/NickColley/jest-axe) ·
[Deque — color-contrast rule](https://dequeuniversity.com/rules/axe/4.8/color-contrast)

---

## R6 — Pacotes além da lista oficial

**Decision**: adicionar `@testing-library/jest-dom` e `@testing-library/user-event`.

**Rationale**: não constam da lista mínima da doc do Next, então são adição deliberada:
- `jest-dom` — matchers legíveis (`toBeInTheDocument`, `toHaveAccessibleName`); sem ele os
  asserts viram checagem manual de nós.
- `user-event` — simula interação realista (foco, teclado, eventos compostos) em vez de disparar
  eventos sintéticos. Exigido por FR-012, que proíbe testar detalhe de implementação: `user-event`
  é o que permite escrever o teste do ponto de vista do usuário.

**Constituição**: dependência nova exige aprovação do dono (Restrições Técnicas). Estas duas, mais
as de R1/R3/R5, compõem a lista completa a aprovar — nenhuma outra entra sem novo pedido.

---

## R7 — Divisão das camadas conforme FR-018

**Decision**:

| Etapa | Composição | Quando roda | Alvo SC-002 |
|---|---|---|---|
| **Rápida** | tipos → lint → unidade+a11y estrutural → build | automática a cada PR, condiciona mesclagem | < 3 min |
| **Completa** | rápida + navegador (jornadas + a11y com contraste) | sob demanda | < 10 min |

**Rationale**: decisão Q2-C do dono. A ordem dentro da etapa rápida é do mais barato ao mais caro,
conforme o quadro de gates da constituição — falha em tipos aborta antes de gastar um build.

**Nota de honestidade (Princípio II)**: os limites de 3 e 10 minutos são **metas herdadas do
spec**, não medições. Não há histórico neste repo para calibrá-los. A primeira execução real
produz o número de referência; se estourar, a decisão é do dono (aceitar, ou mover camada).

---

## R8 — Pré-requisito de ambiente

**Decision**: `npm install` é o passo zero, fora do escopo funcional.

**Rationale**: `node_modules/` não existe neste worktree — hoje nenhum comando roda, nem os três
que já existiriam (`lint`, `build`, e `tsc` via `npx`). O plano precisa registrar isso como tarefa
explícita, senão a primeira execução falha com erro obscuro em vez de mensagem acionável
(Edge Case do spec).

---

## Lacunas declaradas

- **Versões de pacote**: não afirmadas aqui. Resolvidas na instalação e registradas no lockfile.
- **Tempo real de execução**: desconhecido até a primeira medição (ver R7).
- **Comportamento do axe em CI headless**: não verificado nesta pesquisa. Assumido equivalente ao
  local por rodar o mesmo navegador; a validar na implementação.
- **Custo de minutos de CI**: não estimado. Mitigado pela decisão Q2-C, que mantém navegador fora
  do gate automático.
