<!--
SYNC IMPACT REPORT
Version change: (template, unversioned) → 1.0.0
Rationale: ratificação inicial. Primeira constituição concreta do projeto;
os cinco princípios são derivados de prática já documentada, não inventados.

Modified principles: nenhum (adoção inicial)
Added sections:
  - Core Principles I–V
  - Restrições Técnicas
  - Fluxo de Desenvolvimento e Quality Gates
  - Governance
Removed sections: nenhuma

Fontes (derivado, NÃO inventado):
  - ~/Dev/CLAUDE.md — práticas de engenharia do workspace
  - ~/.claude/CLAUDE.md — regras permanentes do dono
  - .claude/frontend-mas-SPEC.md §10 (RG-01…RG-08) e §9.3 (gates)
  - DESIGN.md §Accessibility
  - Convenções observadas no repo (tsconfig strict, .eslintrc.json, estrutura app/components)

Templates requiring updates:
  ✅ .specify/templates/plan-template.md — Constitution Check alinhado aos gates
  ✅ .specify/templates/spec-template.md — sem conflito (spec é tech-agnostic por contrato)
  ✅ .specify/templates/tasks-template.md — sem conflito

Follow-up TODOs: nenhum placeholder deferido.
-->

# MedTech Community Constitution

Projeto: site institucional e de conteúdo do MedTech Community (Next.js App Router, deploy Vercel).
Esta constituição governa como o trabalho é feito neste repositório — por humanos e por agentes.

## Core Principles

### I. Verificação Antes de Afirmação (NÃO NEGOCIÁVEL)

Nada é declarado pronto sem a saída do comando que prova. Um gate que não rodou é `SKIP`
declarado, nunca omissão silenciosa; um gate que falhou é reportado com a saída, nunca suavizado.

Corolário obrigatório: **é proibido afrouxar um gate para fazê-lo passar.** Não adicionar
`eslint-disable`, não relaxar flag do `tsconfig.json`, não usar `as any`, não deletar assert.
Se o gate é injusto, isso é um achado a reportar — nunca algo a contornar.

*Rationale*: sem isso, todo o resto vira teatro. É a única regra cuja violação invalida
retroativamente qualquer afirmação de qualidade feita neste repositório.

### II. Never-Invent

Copy, dado clínico, número, token de cor, fonte ou regra de negócio que não está no repositório
nem foi fornecido na tarefa é **lacuna sinalizada explicitamente** — nunca suposição preenchida
como se fosse fato. Vale para especificação, plano, código, teste (nenhuma fixture com dado
clínico inventado) e revisão.

*Rationale*: o projeto publica conteúdo médico. Um dado plausível e falso é pior que uma
lacuna admitida.

### III. Ondas Pequenas e Reversíveis

Trabalho avança em ondas: uma branch e um PR por onda, gate verde como condição de mesclagem
(não sugestão). Plano e execução são etapas separadas com **pausa obrigatória entre elas** —
todo plano termina em ponto de aprovação e para.

Em cadeias de tarefas dependentes, cada etapa concluída devolve o controle antes da próxima
(handoff picotado). Não encadear a sequência inteira sem checkpoints intermediários.

Proibido: push em `main`, force-push, merge sem aprovação.

*Rationale*: mudança grande e irreversível feita por agente é o modo de falha mais caro.

### IV. Convenção do Repo Acima de Preferência

Replicar o padrão do componente/arquivo análogo existente vem antes de qualquer preferência
estética ou de estilo. Divergir da convenção observada exige justificativa escrita.

Corolário: **menor mudança que resolve.** Não refatorar além do pedido; não criar abstração
para um único uso; escopo excedido é defeito, não zelo.

*Rationale*: consistência é o que torna a base legível por quem — e pelo que — chega depois.

### V. Acessibilidade e Design System São Requisito

As regras de `DESIGN.md` — contraste, escala tipográfica, tokens de cor por vertical, foco
visível, HTML semântico — são requisitos verificáveis, não recomendações estéticas. Identidade
visual nova não é inventada durante a implementação: segue-se a definida.

*Rationale*: o design system existe e está documentado; o que não é cobrado apodrece.

## Restrições Técnicas

- **Stack fixo**: Next.js 14 App Router, React 18, TypeScript `strict: true`, Tailwind.
  Mudança de versão maior é decisão do dono, nunca efeito colateral de uma feature.
- **APIs indisponíveis no stack são proibidas.** Recursos que exigem React 19 não entram
  enquanto o projeto estiver em React 18, mesmo que apareçam em documentação de referência.
- **Nova dependência exige aprovação explícita do dono** — inclusive `@types/*` e libs de UI.
- **Server Component é o default** no App Router; `'use client'` entra com motivo nomeado e o
  mais baixo possível na árvore.
- **Secrets nunca commitados.** `.env` local; nenhuma credencial em código ou em artefato de spec.
- **TypeScript**: `any` é proibido; usar `unknown` + narrowing. Asserção (`as`) exige comentário
  justificando.

## Fluxo de Desenvolvimento e Quality Gates

Ordem de verificação, do mais barato ao mais caro. Falha em gate bloqueante interrompe e devolve
ao autor da mudança:

| Gate | Cobre |
|---|---|
| Tipos | contrato de tipos, `strict` |
| Lint | regras de React/Hooks e TypeScript |
| Unidade/componente | comportamento observável pelo usuário |
| Build | fronteira server/client, serialização, geração estática |
| Ponta a ponta | jornadas reais, conteúdo montado no servidor |
| Acessibilidade | Princípio V |

Regras de processo:

- Teste verifica **comportamento observável pelo usuário**, não detalhe de implementação.
- Falha é reportada com reprodução mínima e `arquivo:linha`. "Deu erro" não é relatório.
- Nenhum commit, push ou PR acontece sem checkpoint do dono.
- Relatórios em PT-BR, termos técnicos em inglês. Código e identificadores em inglês,
  seguindo a convenção já existente no repositório.

## Governance

Esta constituição supersede preferências individuais e defaults de ferramenta. Em conflito entre
esta constituição e a orientação de um template, comando ou agente, **a constituição prevalece**;
o conflito deve ser reportado, não resolvido em silêncio.

**Emenda**: exige (a) justificativa escrita, (b) aprovação explícita do dono do repositório e
(c) propagação para os templates dependentes em `.specify/templates/` na mesma mudança.

**Versionamento** (semântico):
- MAJOR — remoção ou redefinição incompatível de princípio ou de governança
- MINOR — novo princípio ou seção, ou expansão material de orientação
- PATCH — esclarecimento, redação, correção não semântica

**Revisão de conformidade**: todo plano de implementação declara aderência aos princípios antes
de virar tarefas; toda revisão de código verifica conformidade. Complexidade precisa ser
justificada — na dúvida, a opção mais simples vence.

**Version**: 1.0.0 | **Ratified**: 2026-07-24 | **Last Amended**: 2026-07-24
