# Feature Specification: Infraestrutura de Verificação Automatizada do Frontend

**Feature Branch**: `001-frontend-test-infra`

**Created**: 2026-07-24

**Status**: Ready for planning — esclarecimentos resolvidos em 2026-07-24

**Input**: User description: "Antes de implementar o SPEC do fluxo multiagêntico para o frontend, criar a infraestrutura de teste."

---

## Contexto do problema

Hoje **nenhuma mudança neste site é verificada automaticamente**. Não existe forma de saber, antes
de publicar, se uma alteração quebrou alguma coisa — a única checagem disponível é abrir o site e
clicar. O pipeline multiagêntico especificado em `.claude/frontend-mas-SPEC.md` pressupõe um agente
de teste que hoje **não tem o que executar**. Esta feature é o pré-requisito dele.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Saber se a mudança quebrou algo, antes de publicar (Priority: P1)

Quem desenvolve altera um componente ou uma página e precisa de um veredito confiável — passou ou
não passou — antes de mesclar a mudança. Hoje esse veredito não existe: descobre-se o defeito em
produção, ou não se descobre.

**Why this priority**: é a fundação. Sem um veredito automatizado, nenhuma das outras histórias
tem onde se apoiar, e o Princípio I da constituição ("Verificação Antes de Afirmação") não é
executável. Sozinha, já entrega valor: elimina a classe inteira de defeitos de contrato de tipos,
de regra de composição de interface e de quebra de montagem do site.

**Independent Test**: introduzir deliberadamente um defeito de cada classe acima, pedir a
verificação, e confirmar que cada um é apontado com localização precisa — sem nenhum passo manual.

**Acceptance Scenarios**:

1. **Given** uma mudança que viola o contrato de tipos, **When** a verificação é executada,
   **Then** ela reprova e indica arquivo e linha do problema.
2. **Given** uma mudança que quebra a montagem do site, **When** a verificação é executada,
   **Then** ela reprova antes de qualquer publicação.
3. **Given** uma mudança correta, **When** a verificação é executada, **Then** ela aprova sem
   exigir interpretação humana da saída.

---

### User Story 2 - Congelar o comportamento de um componente interativo (Priority: P2)

Componentes com estado, formulário ou filtro têm comportamento que se quebra silenciosamente numa
refatoração. Quem desenvolve precisa fixar esse comportamento uma vez, para que qualquer alteração
futura que o mude seja apontada.

**Why this priority**: é onde mora o defeito que nem contrato de tipos nem montagem do site pegam —
o componente compila, monta, e se comporta errado. Depende da fundação da US1 para existir.

**Independent Test**: fixar o comportamento observável de um componente interativo existente,
depois reescrever suas entranhas mantendo o comportamento — a verificação continua aprovando; em
seguida alterar o comportamento — a verificação reprova.

**Acceptance Scenarios**:

1. **Given** um componente que filtra uma lista, **When** o usuário seleciona uma categoria,
   **Then** a verificação confirma que apenas os itens daquela categoria ficam visíveis.
2. **Given** um formulário, **When** ele é preenchido e enviado, **Then** a verificação confirma
   o resultado esperado sem depender de nomes internos de variáveis ou de contagem de renderizações.
3. **Given** uma refatoração que preserva o comportamento, **When** a verificação roda,
   **Then** ela aprova — o teste não quebra por detalhe de implementação.

---

### User Story 3 - Validar a jornada real do usuário no navegador (Priority: P3)

Parte relevante do site é montada no servidor antes de chegar ao navegador, e a navegação entre
páginas só existe de fato num navegador real. Quem desenvolve precisa confirmar que uma jornada
completa — entrar, navegar por uma vertical, abrir um capítulo — funciona.

**Why this priority**: é a **única** camada capaz de cobrir conteúdo montado no servidor de forma
assíncrona, que por limitação conhecida não é verificável de forma isolada (ver Edge Cases). Sem
ela, existe uma parte do site estruturalmente inverificável.

**Independent Test**: percorrer uma jornada real de ponta a ponta num navegador e confirmar que o
conteúdo esperado aparece; quebrar um link da jornada e confirmar que a verificação reprova.

**Acceptance Scenarios**:

1. **Given** o site publicado localmente, **When** a jornada de navegação de uma vertical é
   percorrida, **Then** cada página esperada carrega com seu conteúdo.
2. **Given** uma rota de conteúdo montada no servidor, **When** ela é acessada, **Then** a
   verificação confirma o conteúdo renderizado — sem depender de verificação isolada do componente.

---

### User Story 4 - Cobrar acessibilidade automaticamente (Priority: P4)

As regras de acessibilidade do projeto estão documentadas mas não são cobradas por nada. Quem
desenvolve precisa que violações sejam apontadas automaticamente, não descobertas por auditoria
manual ou por reclamação de usuário.

**Why this priority**: é requisito de projeto pelo Princípio V da constituição, e barato de obter
uma vez que as camadas anteriores existem — mas depende delas, por isso vem por último.

**Independent Test**: introduzir uma violação conhecida (campo sem rótulo associado) e confirmar
que a verificação a aponta.

**Acceptance Scenarios**:

1. **Given** um campo de formulário sem rótulo associado, **When** a verificação roda, **Then**
   ela reprova identificando o elemento.
2. **Given** uma página em conformidade, **When** a verificação roda, **Then** ela aprova.

---

### Edge Cases

- **Conteúdo montado no servidor de forma assíncrona**: há limitação conhecida e documentada de que
  esse conteúdo não é verificável de forma isolada. A especificação **exige** que ele seja coberto
  pela camada de navegador (US3) e que a impossibilidade de cobri-lo isoladamente seja declarada,
  nunca contornada em silêncio nem simplesmente pulada.
- **A verificação falha por defeito da própria verificação**, não do código. Precisa ser possível
  distinguir os dois casos no relatório; um teste incorreto é um defeito a corrigir, não motivo
  para desativar a camada.
- **Tudo aprova, mas o resultado visual está errado.** Comparação visual está fora de escopo (ver
  Assumptions); a especificação não deve dar a impressão de que aprovação garante aparência correta.
- **A verificação demora tanto que deixa de ser usada.** Se o custo de rodar exceder o limite de
  SC-002, a camada lenta precisa ser separável da rápida.
- **Ambiente sem dependências instaladas.** A verificação precisa falhar com mensagem acionável
  ("instale as dependências"), não com erro obscuro.
- **Alguém enfraquece uma verificação para fazê-la passar.** Proibido pelo Princípio I; a
  especificação exige que tal mudança seja visível na revisão (FR-014).
- **Ausência de verificação para uma parte do sistema.** Deve aparecer como lacuna declarada, não
  como aprovação.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema DEVE oferecer uma forma única de executar toda a verificação e obter um
  veredito binário — aprovado ou reprovado — sem interpretação humana da saída bruta.
- **FR-002**: A verificação DEVE detectar violação do contrato de tipos antes da publicação.
- **FR-003**: A verificação DEVE detectar violação das regras de composição de interface adotadas
  pelo projeto.
- **FR-004**: A verificação DEVE detectar quebra na montagem do site, incluindo violação da
  fronteira entre o que é montado no servidor e o que roda no navegador.
- **FR-005**: O sistema DEVE permitir verificar o comportamento observável de um componente
  interativo sem que uma pessoa precise abrir o site e clicar.
- **FR-006**: O sistema DEVE permitir verificar jornadas reais de usuário em um navegador,
  cobrindo conteúdo montado no servidor.
- **FR-007**: A verificação DEVE detectar automaticamente violações das regras de acessibilidade
  do projeto.
- **FR-008**: Toda falha DEVE ser reportada com localização precisa (arquivo e linha) e reprodução
  mínima. "Falhou" sem localização não satisfaz este requisito.
- **FR-009**: Verificação não executada DEVE ser reportada explicitamente como pulada, com motivo.
  Omissão silenciosa é violação.
- **FR-010**: O sistema DEVE distinguir falha bloqueante de ressalva não bloqueante.
- **FR-011**: Toda a verificação DEVE ser executável por um agente automatizado, de forma não
  interativa, sem intervenção humana durante a execução.
- **FR-012**: Os testes DEVEM verificar comportamento observável pelo usuário, e não detalhe
  interno de implementação (nomes de variáveis internas, contagem de renderizações, estrutura
  interna de estado).
- **FR-013**: O sistema DEVE incluir ao menos uma verificação-canário por camada, que falhe caso
  aquela camada seja desativada — provando que a camada está de fato ativa.
- **FR-014**: Qualquer mudança que enfraqueça ou desative uma verificação DEVE ficar visível como
  alteração de arquivo versionado, passível de revisão.
- **FR-015**: A verificação DEVE ser separável em uma etapa rápida e uma etapa completa, para que
  o custo de execução não desestimule o uso (ver SC-002).
- **FR-016**: O sistema DEVE poder ser executado em ambiente recém-clonado seguindo instruções
  documentadas, sem conhecimento tácito.
- **FR-017**: O escopo desta entrega DEVE incluir exatamente uma verificação-canário por camada.
  Cobrir o código pré-existente está **fora de escopo**; a verificação passa a ser exigida para
  código novo ou alterado. *(decisão Q1-A, 2026-07-24)*
- **FR-018**: A etapa rápida DEVE ser executada automaticamente a cada proposta de mudança, com o
  resultado condicionando a mesclagem. A etapa completa (navegador) permanece sob demanda.
  *(decisão Q2-C, 2026-07-24)*

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Introduzindo deliberadamente um defeito de cada uma das 5 classes cobertas — contrato
  de tipos, regra de composição, montagem do site, comportamento de componente, acessibilidade — a
  verificação detecta **5 de 5**, cada um pela camada correspondente.
- **SC-002**: A etapa rápida devolve veredito em **menos de 3 minutos**; a verificação completa,
  incluindo navegador, em **menos de 10 minutos**.
- **SC-003**: **Zero** passos manuais entre solicitar a verificação e receber o veredito.
- **SC-004**: **100%** das falhas reportadas incluem localização (arquivo e linha) e reprodução
  mínima.
- **SC-005**: **100%** das camadas de verificação possuem canário que falha se a camada for
  desativada.
- **SC-006**: **100%** das verificações puladas vêm acompanhadas de motivo declarado; nenhuma
  omissão silenciosa.
- **SC-007**: Uma pessoa (ou agente) que nunca viu o projeto consegue executar a verificação
  completa seguindo apenas a documentação, em **menos de 15 minutos** a partir de um clone limpo.

## Assumptions

- **Decisão de ferramental já tomada pelo dono** e registrada fora desta especificação (D1 do
  `.claude/frontend-mas-SPEC.md`). Por contrato do spec-kit, a escolha concreta de ferramentas é
  matéria do plano de implementação, não desta especificação — que descreve **o quê** e **por quê**.
- O projeto roda sobre a stack já existente (framework de aplicação web com renderização no
  servidor, tipagem estática em modo estrito). Esta feature **não** altera a stack da aplicação.
- As dependências do projeto não estão instaladas no ambiente atual; instalá-las é passo zero da
  implementação, não parte do escopo funcional.
- Os limites de tempo de SC-002 são metas derivadas do tamanho atual do projeto (19 componentes,
  9 páginas) e da premissa de que verificação lenta deixa de ser usada. São alvos revisáveis, não
  medições — não há histórico para calibrar.
- **Fora de escopo, deliberadamente**: comparação visual de regressão, orçamento de performance,
  internacionalização, testes de carga, e verificação de integrações externas (o projeto não
  consome API externa hoje).
- Esta feature é pré-requisito do pipeline multiagêntico especificado em
  `.claude/frontend-mas-SPEC.md`, e não o substitui.

---

## Esclarecimentos resolvidos

Dois pontos de escopo sem default razoável, decididos pelo dono em 2026-07-24.
Ambos viraram requisito testável (FR-017 e FR-018).

### Q1: Abrangência inicial da verificação

**Context**: FR-013 exige canário por camada; nada na especificação define se os 19 componentes e
9 páginas já existentes devem ser cobertos agora.

**What we need to know**: a entrega inclui escrever verificação para o código que já existe, ou
apenas montar as camadas com canários e passar a exigir verificação para código novo?

| Option | Answer | Implications |
|--------|--------|--------------|
| A | Só canários + exigência daqui pra frente | Entrega pequena e rápida; o código legado segue não verificado até ser tocado |
| B | Canários + cobertura dos componentes interativos existentes | Entrega média; cobre onde mora o risco real de comportamento, deixa o estático de fora |
| C | Cobertura completa do que existe hoje | Entrega grande; atrasa o pipeline multiagêntico que depende disto |
| Custom | Outro recorte | Descreva o critério de corte |

**Your choice**: **A — só canários + exigência daqui pra frente.** Menor onda que destrava o
pipeline multiagêntico, conforme Princípio III. Cobertura do código pré-existente vira onda
própria. → **FR-017**

### Q2: Onde a verificação é executada

**Context**: FR-011 exige execução não interativa por agente; a especificação não define se isso
acontece só sob demanda ou automaticamente a cada proposta de mudança.

**What we need to know**: a verificação roda apenas quando alguém (ou um agente) pede, ou também
automaticamente a cada PR, com resultado bloqueando a mesclagem?

| Option | Answer | Implications |
|--------|--------|--------------|
| A | Só sob demanda, na máquina de quem desenvolve | Nada de infraestrutura externa; o Princípio III ("gate verde é condição de mesclagem") fica dependente de disciplina humana |
| B | Sob demanda **e** automaticamente a cada PR, bloqueando mesclagem | Torna o gate real e não opcional; exige configurar automação de repositório e lidar com o custo da camada de navegador |
| C | Automático só para a etapa rápida; a completa sob demanda | Meio-termo: feedback automático barato, camada cara fica manual |
| Custom | Outro arranjo | Descreva |

**Your choice**: **C — etapa rápida automática, completa sob demanda.** Torna o gate real onde
ele é barato e estável, sem pagar custo e instabilidade de navegador em toda proposta de
mudança. → **FR-018**
