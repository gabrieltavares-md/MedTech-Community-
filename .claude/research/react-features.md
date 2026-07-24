# React — Guia de Referência para o Agente `react-ts-coder`

Este documento é um levantamento de requisitos (grounding) para o subagente `react-ts-coder`, especialista em implementação de frontend com React 18 + Next.js 14 App Router no projeto MedTech Community. Ele lista as features, APIs e princípios centrais que a documentação oficial do React (react.dev) trata como fundamentais para escrever código no padrão de mercado. A cobertura é deliberadamente ampla — hooks, composição, formulários, performance, recursos concorrentes — mas não é uma lista fechada nem um tutorial didático: é referência para consulta rápida durante a implementação. TypeScript não é coberto aqui (responsabilidade de outro agente). Toda afirmação abaixo foi verificada contra a documentação oficial listada em "## Referências"; onde a doc oficial atual não confirma um termo ou comportamento, isso é sinalizado explicitamente como lacuna em vez de arriscar um palpite.

## Componentes, JSX e Props

- **Componente como função JavaScript**: um componente React é uma função JavaScript "sprinkled with markup" que retorna JSX. É a unidade básica de composição de UI.
- **Nomenclatura com maiúscula obrigatória**: nomes de componentes devem começar com letra maiúscula (`Profile`, não `profile`) — é assim que React distingue componentes de tags HTML nativas.
- **Nunca aninhar definições de componente**: declarar um componente dentro de outro cria uma nova função a cada render, o que reseta o estado dos filhos a cada renderização do pai. Componentes devem sempre ser declarados no nível superior do módulo.
- **Regras de sintaxe JSX**: (1) retornar um único elemento raiz (ou usar Fragment `<>...</>` para não adicionar markup extra ao DOM); (2) fechar todas as tags explicitamente, inclusive as "auto-fechadas" (`<img />`); (3) usar camelCase para a maioria dos atributos (`className`, `strokeWidth`), exceto atributos `aria-*` e `data-*`, que mantêm os hífens do HTML.
- **Props são somente leitura (imutáveis)**: um componente nunca deve modificar suas próprias props. Se precisa de dados diferentes, o pai deve passar novas props — um novo objeto a cada render. Essa imutabilidade é central: "quando um componente precisa mudar suas props... ele terá que pedir ao componente pai para passar props diferentes".
- **Valores default de props**: podem ser especificados na desestruturação (`function Avatar({ size = 100 })`); o default só é usado se a prop estiver ausente ou for `undefined` — `size={0}` ou `size={null}` não disparam o default.
- **Spread de props**: útil para encaminhar todas as props de um componente wrapper para outro (`<Avatar {...props} />`), mas a doc recomenda usar com moderação — uso excessivo geralmente indica que a divisão de componentes deveria ser revista.
- **`children` prop**: qualquer JSX aninhado dentro da tag de um componente é recebido automaticamente como a prop especial `children`, base do padrão de "slot"/wrapper visual (painéis, cards, grids).
- **Organização de arquivos**: convenção de um componente por arquivo; um módulo pode ter um único `export default` mas múltiplos named exports — named exports são preferidos quando o arquivo exporta mais de um componente/valor.

## Estado (State)

- **`useState` existe porque variáveis locais não bastam**: variáveis comuns não persistem entre renders (React re-renderiza "from scratch") e sua mudança não dispara novo render. `useState` resolve os dois problemas: retorna uma variável de estado que persiste e uma função setter que agenda um re-render.
- **Estado é isolado e privado por instância**: renderizar o mesmo componente duas vezes gera duas cópias de estado totalmente independentes; o componente pai não pode alterar o estado interno do filho.
- **State as a snapshot**: chamar o setter não muda a variável já capturada na renderização corrente — apenas agenda um novo render com valor novo. "Uma variável de estado nunca muda dentro de um render, mesmo que o código do event handler seja assíncrono." Event handlers/closures criados num render "veem" para sempre o snapshot de estado daquele render (relevante para bugs de `setTimeout`/closures obsoletas).
- **Batching de atualizações**: React processa todas as chamadas de setState de um mesmo event handler antes de re-renderizar, evitando renders intermediários desnecessários.
- **Updater functions (`setX(prev => next)`)**: necessárias quando é preciso aplicar múltiplas atualizações à mesma variável de estado antes do próximo render (cada updater recebe o estado mais recente já enfileirado, ao contrário de passar um valor calculado diretamente, que sempre usa o snapshot do render atual).
- **Objetos em state são somente leitura**: mutar um objeto de estado diretamente (`obj.x = ...`) não dispara re-render porque React não detecta a mudança de referência. A forma correta é criar um novo objeto (spread `{...obj, campo: novo}`) e passá-lo ao setter. Mutação local de um objeto recém-criado (que nenhum outro código ainda referencia) é aceitável.
- **Arrays em state são somente leitura**: evitar métodos mutantes (`push`, `pop`, `shift`, `unshift`, `splice`, `arr[i] = x`, `sort`/`reverse` diretos); preferir métodos que retornam novo array (`map`, `filter`, `slice`, `concat`, spread `[...arr]`). `slice` (não mutante) é frequentemente confundido com `splice` (mutante).
- **Estado é atrelado à posição na árvore de renderização, não à posição no JSX**: React preserva o estado de um componente enquanto ele for renderizado na mesma posição da árvore, mesmo que as props mudem; renderizar um tipo de componente diferente naquela posição destrói o estado do subtree inteiro. A prop `key` permite forçar o reset do estado tratando a instância como "diferente" independentemente da posição.

## Princípios Fundamentais

- **Pureza de componentes**: React assume que todo componente é uma função pura — "mesmas entradas, sempre a mesma saída (JSX)" — e que ele "cuida só da própria vida", ou seja, não muta objetos/variáveis que existiam antes de ser chamado (props, state e context lidos não podem ser mutados). Mutação local (de valores criados durante o próprio render) é permitida e chamada de "local mutation".
- **Side effects não pertencem ao corpo do render**: código com efeitos colaterais (mutações, chamadas de rede, timers) deve rodar separado da renderização — em event handlers (a resposta usual) ou, como último recurso, em Effects (`useEffect`).
- **Renderização em 3 etapas**: Trigger (disparo do render, ex. `setState` ou primeira montagem) → Render (React chama os componentes, processo recursivo e que "deve sempre ser um cálculo puro") → Commit (React aplica no DOM apenas as operações mínimas necessárias; na primeira renderização usa `appendChild`, em re-renders só toca nós que de fato mudaram).
- **Preservação/reset de árvore via posição + tipo + `key`**: a documentação atual não usa mais o termo legado "reconciliation" como página dedicada (busca confirmou ausência do termo no react.dev atual — sinalizado aqui como lacuna terminológica), mas o mecanismo equivalente está documentado em "Render and Commit" e "Preserving and Resetting State": React decide o que atualizar no DOM comparando posição na árvore, tipo do componente e `key` entre renders.
- **"Thinking in React" — metodologia oficial em 5 passos**: (1) quebrar a UI em uma hierarquia de componentes por responsabilidade única; (2) construir uma versão estática a partir do modelo de dados, usando só props, sem estado; (3) encontrar a representação mínima e completa do estado da UI (aplicando DRY — nada que seja constante, vindo via props, ou computável a partir de outro estado/props deve virar state); (4) identificar onde cada state deve "morar" (o ancestral comum mais próximo de todos os componentes que dependem dele); (5) adicionar fluxo de dados inverso (handlers passados como props para os filhos atualizarem o state do pai).

## Regras dos Hooks (Rules of Hooks)

- **Só chamar Hooks no nível superior**: nunca dentro de condicionais, loops, funções aninhadas, blocos `try`/`catch`/`finally`, nem depois de um `return` condicional — sempre no topo do componente ou hook customizado, antes de qualquer retorno antecipado.
- **Só chamar Hooks de componentes função React ou de outros Hooks customizados**: nunca de funções JavaScript comuns, event handlers, ou dentro do callback passado a `useMemo`/`useReducer`/`useEffect`. Isso garante que toda lógica stateful de um componente seja visível a partir do seu código-fonte.
- **Pureza estendida a Hooks**: os mesmos requisitos de pureza de componentes se aplicam a Hooks — idempotência (mesmos argumentos, mesmo resultado), sem side effects durante a fase de render, e proibição de mutar argumentos recebidos pelo hook.
- **Ferramenta de enforcement**: o plugin `eslint-plugin-react-hooks` detecta automaticamente violações das regras acima e das dependências de Effects — a doc recomenda tratar os erros desse linter como erros de compilação, nunca suprimi-los.

## Hooks de Estado e Referência

- **`useState(initialState)`**: retorna `[state, setState]`. Se `initialState` for uma função, ela é tratada como inicializador (chamada só uma vez). `setState` só atualiza o valor a partir do *próximo* render — ler a variável logo após chamar o setter ainda retorna o valor antigo. Se o novo valor for igual ao atual (comparação `Object.is`), React pula o re-render. Chamar o setter durante a própria renderização só é permitido dentro do componente que está renderizando (padrão raro). Em Strict Mode (dev), tanto a função inicializadora quanto a updater function são chamadas duas vezes para expor impurezas.
- **`useReducer(reducer, initialArg, init?)`**: recomendado quando a lógica de estado fica complexa, espalhada por muitos event handlers, ou sujeita a bugs de atualização — consolida as transições num único reducer puro, testável isoladamente. Em vez de dizer "o que fazer" (`setState`), o código `dispatch`a uma action que descreve "o que aconteceu" pelo ponto de vista do usuário. O reducer deve ser puro (sem side effects). `dispatch` tem identidade estável entre renders. Em Strict Mode, tanto o reducer quanto o inicializador são chamados duas vezes em dev.
- **`useRef(initialValue)`**: retorna um objeto mutável `{ current: initialValue }` que persiste entre renders. Mutar `ref.current` **não** dispara re-render (diferente de state) — por isso não deve ser lido/escrito durante o render, exceto para inicialização. Refs são o "escape hatch" indicado quando a informação não é usada para renderização (ex.: guardar um id de timer, contar cliques sem re-renderizar). Em Strict Mode, o componente é chamado duas vezes e o objeto ref é recriado duas vezes (uma versão é descartada).

## Effects (`useEffect`, `useLayoutEffect` e correlatos)

- **Propósito de `useEffect`**: sincronizar um componente com um sistema externo ao React (rede, DOM do navegador, biblioteca de terceiros) — "efeitos que são causados pela própria renderização, não por uma interação específica". Roda depois que a tela é atualizada (após o commit), portanto não bloqueia a pintura visual na maioria dos casos.
- **Assinatura e dependências**: `useEffect(setup, dependencies?)`. `setup` pode retornar uma função de cleanup (roda antes do próximo setup e no unmount). O array de dependências deve conter **todos** os valores reativos (props, state, e variáveis derivadas deles) usados dentro do effect — "você não pode 'escolher' suas dependências"; o linter aponta erro se a lista não corresponder ao código. Array vazio `[]` roda só na montagem; ausência do array roda a cada render.
- **Quando NÃO usar um Effect** (lista oficial de anti-padrões e alternativas): transformar dados para renderização → calcular direto no corpo do componente; cachear cálculo caro → `useMemo`; resetar todo o estado ao mudar uma prop → usar `key` no componente; ajustar parte do estado a uma mudança de prop → calcular durante o render ou usar handler; compartilhar lógica entre event handlers → extrair uma função comum chamada pelos handlers; enviar um POST em resposta a uma ação do usuário → colocar direto no event handler, não observar o estado via Effect; encadear cálculos em cascata → resolver tudo num único handler/cálculo de render. Princípio-chave: "código que roda porque um componente foi *exibido* deve estar em Effects; o resto deve estar em eventos."
- **Ciclo de vida de um Effect é diferente do ciclo de vida do componente**: um Effect só faz duas coisas — começar a sincronizar e parar de sincronizar — em vez de seguir estágios de mount/update/unmount do componente. Cada Effect deve representar um único processo de sincronização independente (não misturar lógica não relacionada num mesmo `useEffect` só porque "roda ao mesmo tempo").
- **`useLayoutEffect`**: variante que roda de forma síncrona *antes* do navegador pintar a tela (bloqueia a pintura), usada quando é preciso medir layout e re-renderizar antes que o usuário veja o flicker (ex.: posicionar um tooltip). A doc é explícita: "pode prejudicar performance; prefira `useEffect` quando possível". No servidor não faz nada (não existe layout) — exige fallback client-only.
- **`useEffectEvent` / "Effect Events" (experimental)**: extrai lógica não-reativa de dentro de um Effect, permitindo ler sempre o valor mais recente de props/state (ex. `theme`) sem que essa leitura force o Effect a re-sincronizar. **A própria documentação marca esta API como experimental/instável** — deve ser tratada com cautela em código de produção.
- **Removendo dependências desnecessárias**: a dependência deve refletir o código, nunca ser suprimida com `eslint-disable-next-line react-hooks/exhaustive-deps` — suprimir o linter "mente" para o React sobre do que o Effect depende e introduz bugs sutis (closures obsoletas). Correções recomendadas: usar updater functions (`setX(x => ...)`) para não precisar do state como dependência; mover objetos/funções para dentro do Effect ou para fora do componente; extrair lógica não-reativa com `useEffectEvent`.
- **Custom Hooks**: nome deve começar obrigatoriamente com `use` seguido de maiúscula (senão o linter não consegue verificar as regras de Hooks dentro dele). Compartilham *lógica com estado*, não o estado em si — cada chamada de um custom hook em componentes diferentes tem estado totalmente independente. Extrair um custom hook é indicado sempre que se escreve um `useEffect` (avaliar se ficaria mais claro encapsulado) e quando há lógica duplicada entre componentes.

## Context API

- **Problema que resolve — prop drilling**: passar props se torna verboso quando um dado precisa atravessar muitos componentes intermediários que não o usam, só repassam adiante.
- **Ciclo de uso**: `createContext(defaultValue)` cria o contexto (exportado de um módulo); o valor é fornecido envolvendo a árvore com o Provider (`<MeuContext value={valor}>`); qualquer componente descendente lê com `useContext(MeuContext)`, não importa a profundidade.
- **`useContext` procura o Provider mais próximo acima na árvore**: se não houver nenhum Provider acima, retorna o `defaultValue` passado a `createContext`. Um Provider declarado *no mesmo componente* que faz o `useContext()` não é enxergado por essa chamada — precisa estar acima.
- **Context dispara re-render em cascata quando o `value` muda**: React re-renderiza automaticamente todos os consumidores daquele contexto a partir do Provider cujo valor mudou (comparação via `Object.is`); envolver um componente em `memo` **não** impede essa atualização de contexto.
- **Cautela oficial contra abuso de Context**: a doc recomenda tentar antes (1) passar props explicitamente e (2) extrair componentes passando JSX como `children` (para evitar repassar dados por camadas que não os usam) — "só porque você precisa passar algumas props vários níveis abaixo não significa que deva colocar essa informação em contexto". Casos de uso legítimos citados: tema (dark mode), usuário autenticado atual, roteamento, gerenciamento de estado complexo perto do topo da árvore (frequentemente combinado com `useReducer`).
- **React 19 — Provider como o próprio Context**: desde o React 19, é possível renderizar `<MeuContext value={...}>` diretamente como provider, sem precisar de `<MeuContext.Provider value={...}>` explícito.

## Refs e Manipulação do DOM

- **Quando usar refs para o DOM**: apenas para "sair" do modelo declarativo do React quando necessário — focar um elemento, rolar até ele, medir tamanho/posição, ou integrar bibliotecas de terceiros que manipulam o DOM diretamente.
- **Anexar um ref a um nó DOM**: `const ref = useRef(null)` + `<div ref={ref}>` — React preenche `ref.current` com o nó DOM real após o commit.
- **Regra central: não modificar nós do DOM gerenciados pelo React**: "modificar, adicionar filhos a, ou remover filhos de elementos gerenciados pelo React pode levar a resultados visuais inconsistentes ou crashes" — só é seguro mexer em partes do DOM que o React "não tem motivo para atualizar" (ex.: uma `<div>` vazia sem filhos no JSX).
- **`useImperativeHandle(ref, createHandle, deps?)`**: restringe o que um componente expõe via ref ao pai, evitando vazar o nó DOM inteiro — expõe só métodos específicos (ex. `focus()`). A doc recomenda: "se você pode expressar algo como prop, não deveria usar um ref" — refs imperativos são para o que não dá para expressar declarativamente (focar, rolar, disparar animação, selecionar texto).
- **Ref como prop comum (React 19) e depreciação de `forwardRef`**: desde o React 19, componentes função podem receber `ref` diretamente como uma prop normal (`function MyInput({ ref }) { return <input ref={ref} /> }`), tornando `forwardRef` desnecessário para código novo. A própria referência oficial de `forwardRef` afirma: **"em React 19, `forwardRef` não é mais necessário... `forwardRef` será descontinuado (deprecated) em uma versão futura"**. Callbacks de ref também passaram a poder retornar uma função de cleanup (chamada no unmount), no lugar do padrão antigo de chamar o ref com `null`.
- **`flushSync`**: usado quando é preciso coordenar uma atualização de estado com o acesso subsequente a um ref (ex.: adicionar um item à lista e imediatamente rolar até ele) — força o React a aplicar a atualização no DOM de forma síncrona antes de continuar o código.

## Padrões de Composição

- **`children` como mecanismo primário de composição/slot**: componentes wrapper (painéis, layouts, cards) recebem e renderizam o `children` prop em vez de receber dados brutos — é o padrão oficialmente recomendado como alternativa ao prop drilling.
- **Passar JSX como prop para evitar repassar dados por camadas intermediárias**: em vez de `<Layout posts={posts} />` (que obriga `Layout` a repassar `posts` para baixo), compor com `<Layout><Posts posts={posts} /></Layout>` — a doc trata isso como o primeiro recurso antes de recorrer a Context.
- **Lifting state up**: quando dois ou mais componentes precisam ter o estado sincronizado, remove-se o estado de ambos, move-se para o ancestral comum mais próximo, e passa-se para baixo via props — "um dos padrões mais comuns ao escrever código React". A doc também define formalmente **componente controlado** (dirigido por props, comportamento totalmente configurado pelo pai) vs **não controlado** (tem estado local próprio, pai não pode influenciá-lo) nesse mesmo contexto.
- **Reset de estado via `key`**: forçar o React a tratar uma instância de componente como "nova" (e assim resetar seu estado) atribuindo uma `key` que muda — útil, por exemplo, para resetar formulários ao trocar de item selecionado, no lugar de um Effect.
- **Lacuna de terminologia oficial — "render props" e "compound components"**: buscas dirigidas em react.dev não retornaram nenhuma página oficial usando essa nomenclatura. São padrões populares na comunidade (e em bibliotecas como Radix UI), mas a documentação atual do React não os define nem os recomenda como conceitos nomeados — os primitivos de composição que a doc de fato prescreve são `children`, passagem de JSX como prop, e lifting state up, listados acima. Isso é sinalizado aqui como lacuna deliberada, não como omissão.

## Formulários

- **Componentes não controlados**: o valor inicial é dado via `defaultValue` (ou `defaultChecked` para checkboxes), e o próprio DOM gerencia o estado do campo depois disso — React não dita o valor a cada instante. Indicado quando só é preciso ler o valor no submit, sem precisar re-renderizar a cada tecla.
- **Componentes controlados**: o valor é dirigido por state (`value` + `onChange` que atualiza esse state de forma síncrona) — indicado quando a UI precisa reagir a cada mudança (validação em tempo real, espelhar o valor em outro lugar, computar algo derivado).
- **Regra rígida de fetch de comportamento**: passar `value` (ou `checked`) sem `onChange` gera o aviso oficial "You provided a value prop to a form field without an onChange handler. This will render a read-only field" — e o campo se torna somente leitura. Um input não pode ser controlado e não controlado ao mesmo tempo, nem alternar entre os dois modos ao longo de sua vida; para checkboxes usa-se `checked`/`defaultChecked`, nunca `value`; nunca passar `null`/`undefined` como `value` (usar string vazia como fallback).

## Listas e Keys

- **Renderizar listas com `.map()`**: transforma o array de dados em um array de elementos JSX, tipicamente dentro de um elemento contêiner (`<ul>{items.map(...)}</ul>`).
- **Por que `key` é obrigatório**: "elementos JSX diretamente dentro de uma chamada `.map()` sempre precisam de keys" — a key permite ao React identificar qual componente corresponde a qual item de dado entre renders, mesmo quando itens são inseridos, removidos ou reordenados.
- **Regras para escolher uma boa key**: deve ser um identificador estável e único entre os irmãos daquele array (ex. um ID vindo dos dados) — nunca gerada na hora do render (`Math.random()` faz React recriar todos os componentes e perder estado/input do usuário a cada render). Usar índice do array como key é desencorajado sempre que a ordem pode mudar (reordenação, inserção, remoção no meio da lista causam desalinhamento entre índice e dado).

## Error Boundaries

- **Só existem como componentes de classe hoje**: implementam `static getDerivedStateFromError(error)` (atualiza state para mostrar UI de fallback) e opcionalmente `componentDidCatch(error, info)` (para logar o erro, com acesso ao `info.componentStack`).
- **Não há Hook equivalente**: a documentação afirma diretamente: **"atualmente não há como escrever um Error Boundary como componente função. No entanto, você não precisa escrever a classe você mesmo"** — recomenda oficialmente a biblioteca de terceiros `react-error-boundary` como alternativa para bases de código 100% funcionais.
- **Uso**: envolver a parte da árvore que deve ser protegida (`<ErrorBoundary fallback={<p>Algo deu errado</p>}><Profile /></ErrorBoundary>`) — captura erros lançados durante a renderização dessa subárvore.

## Suspense, Lazy Loading e Code-Splitting

- **`lazy(load)`**: adia o carregamento do código de um componente até sua primeira renderização, habilitando code-splitting (o `load` retorna uma Promise que resolve para um módulo com export default). **Nunca declarar um `lazy()` dentro de outro componente** — isso recria o componente lazy a cada render e reseta o estado; deve ser declarado no nível do módulo.
- **`<Suspense fallback={...}>`**: exibe um fallback (spinner, skeleton) enquanto os filhos ainda estão carregando — ativado por componentes `lazy()`, por fontes de dados integradas via `use()` com Promises, entre outros mecanismos "Suspense-aware". Importante: Suspense **não** detecta dados buscados dentro de Effects ou event handlers, só código síncrono ciente de Suspense.
- **Boundaries aninhados controlam o sequenciamento do carregamento**: cada boundary revela seu conteúdo de forma independente assim que fica pronto — permite revelar conteúdo "junto" (mesmo boundary) ou "progressivamente" (boundaries aninhados, cada nível aparecendo por si).
- **Cautelas oficiais**: React não preserva o estado de uma árvore que suspendeu antes de ser exibida pela primeira vez (o render reinicia do zero ao carregar); se um conteúdo já visível suspender de novo (fora de uma transition/`useDeferredValue`), o fallback reaparece.
- **`use(promise)` para leitura de dados durante o render**: suspende o componente enquanto a Promise está pendente e retorna o valor resolvido de forma síncrona; erros de rejeição propagam para o Error Boundary mais próximo (não use `try/catch` ao redor). Diferente de outros Hooks, `use` pode ser chamado condicionalmente (dentro de `if`/loops). A Promise passada precisa ser cacheada/reutilizada entre renders — criar uma nova Promise a cada render gera fallbacks repetidos.

## Recursos Concorrentes (Concurrent React)

- **Concorrência não é uma feature em si, é um mecanismo interno**: "é um novo mecanismo por trás dos panos que permite ao React preparar múltiplas versões da sua UI ao mesmo tempo... é valioso pelas features que ele desbloqueia". A propriedade central é que **a renderização se torna interrompível**: React pode começar a renderizar uma atualização, pausar no meio, retomar depois, ou até abandonar um render em andamento.
- **Opt-in e "invisível"**: o comportamento concorrente só é ativado nas partes do app que usam explicitamente uma feature concorrente (transitions, etc.) — permitindo adoção gradual sem quebrar código existente.
- **`useTransition()` → `[isPending, startTransition]`**: marca uma atualização de state como uma "Transition" não bloqueante, que pode ser interrompida por atualizações urgentes (ex. digitação). Restrições oficiais: só funciona com atualizações de state (não serve para o valor de um input controlado, que precisa ser síncrono); atualizações depois de um `await` dentro da transition não são automaticamente marcadas como transition (é preciso outro `startTransition`); múltiplas transitions concorrentes são hoje batchadas juntas.
- **`startTransition(action)` (função standalone)**: mesma marcação de "Transition", mas usada fora de componentes ou quando não é preciso rastrear `isPending`.
- **`useDeferredValue(value, initialValue?)`**: adia a re-renderização de uma parte não urgente da UI — no update, React tenta um render de fundo com o valor novo (interruptível) enquanto mostra o valor anterior; se esse render de fundo suspender, a UI mostra o valor anterior em vez do fallback de Suspense.
- **`useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)`**: integra um store de estado externo ao React (ex. bibliotecas de state management fora do React, ou APIs do navegador) garantindo leitura consistente durante renders concorrentes — o `getSnapshot` deve retornar dado imutável, e `getServerSnapshot` garante consistência na hidratação SSR.
- **`useId()`**: gera IDs únicos e estáveis para atributos de acessibilidade (`aria-describedby`, `htmlFor`), evitando divergência entre o HTML gerado no servidor e a hidratação no cliente. Regra explícita: **nunca usar `useId` para gerar `key` de lista** — keys devem vir dos dados, não ser IDs de acessibilidade gerados à parte.
- **Batching automático**: desde o React 18, atualizações de state são batchadas mesmo fora de event handlers (dentro de `setTimeout`, Promises, handlers nativos), reduzindo re-renders desnecessários sem código adicional.

## Performance (Memoização e Re-renders)

- **`memo(Component, arePropsEqual?)`**: pula o re-render de um componente quando suas props não mudaram (comparação rasa via `Object.is` por prop). É uma otimização, não uma garantia — React ainda pode re-renderizar; não impede re-render disparado por state interno ou por mudança de Context consumido pelo próprio componente. Objetos/funções recriados a cada render (novas referências) anulam o benefício do `memo`, mesmo com "o mesmo conteúdo".
- **`useMemo(calculateValue, deps)`**: cacheia o *resultado* de um cálculo entre renders, recalculando só quando as dependências mudam. Casos de uso oficiais: evitar recálculo caro (medir antes de aplicar — "só use se o cálculo for perceptivelmente lento"); manter a mesma referência de um valor passado como prop para um componente envolto em `memo`; estabilizar um objeto/array usado como dependência de outro Hook (evitando que o Effect rode toda hora). A função de cálculo deve ser pura; React pode "esquecer" o valor cacheado por razões de memória — não deve ser usado para garantir semântica, só performance.
- **`useCallback(fn, deps)`**: cacheia a *própria função* (identidade) entre renders — equivalente conceitualmente a `useMemo(() => fn, deps)`. Principais usos: evitar que um componente `memo`izado receba uma nova referência de callback a cada render (o que invalidaria a memoização); evitar que uma função recriada a cada render vire dependência instável de outro Hook/Effect. A doc reforça: "confie em `useCallback` só como otimização de performance — se seu código não funciona sem ele, ache e resolva o problema de verdade primeiro".
- **React Compiler**: ferramenta oficial de build-time que aplica memoização automática (equivalente a `memo`/`useMemo`/`useCallback`) sem exigir reescrever código, desde que o código siga as Rules of React (pureza de componentes e Hooks). A doc já recomenda começar a usá-lo — "com o React Compiler habilitado, você pode remover `React.memo` dos seus componentes com segurança" — mas `useMemo`/`useCallback` continuam disponíveis como escape hatch manual quando necessário.

## Strict Mode

- **`<StrictMode>` só tem efeito em desenvolvimento**: não altera nada em produção.
- **Comportamentos ativados em dev**: (1) renderiza componentes (e as funções passadas a `useState`/`useMemo`/`useReducer`) uma vez a mais, para expor impurezas — funções puras não mudam de resultado ao serem chamadas duas vezes, então essa checagem revela mutações indevidas; (2) roda um ciclo extra de setup+cleanup+setup em todo Effect, para revelar cleanup ausente/incorreto (vazamentos, lógica de "parar" que não desfaz de fato o "começar"); (3) roda um ciclo extra de setup+cleanup em callback refs; (4) avisa sobre uso de APIs de classe descontinuadas (ex. `UNSAFE_componentWillMount`).
- **Sem opção de configuração**: `StrictMode` não aceita props e não pode ser "parcialmente" desligado dentro da árvore que ele envolve — mas pode envolver só uma parte específica do app em vez da raiz inteira.

## Referências

- [Your First Component](https://react.dev/learn/your-first-component)
- [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
- [State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [Render and Commit](https://react.dev/learn/render-and-commit)
- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)
- [Queueing a Series of State Updates](https://react.dev/learn/queueing-a-series-of-state-updates)
- [Updating Objects in State](https://react.dev/learn/updating-objects-in-state)
- [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)
- [Keeping Components Pure](https://react.dev/learn/keeping-components-pure)
- [Rendering Lists](https://react.dev/learn/rendering-lists)
- [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
- [Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state)
- [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)
- [Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer)
- [Referencing Values with Refs](https://react.dev/learn/referencing-values-with-refs)
- [Manipulating the DOM with Refs](https://react.dev/learn/manipulating-the-dom-with-refs)
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
- [Lifecycle of Reactive Effects](https://react.dev/learn/lifecycle-of-reactive-effects)
- [Separating Events from Effects](https://react.dev/learn/separating-events-from-effects)
- [Removing Effect Dependencies](https://react.dev/learn/removing-effect-dependencies)
- [Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)
- [Components and Hooks Must Be Pure](https://react.dev/reference/rules/components-and-hooks-must-be-pure)
- [useState – Reference](https://react.dev/reference/react/useState)
- [useEffect – Reference](https://react.dev/reference/react/useEffect)
- [useLayoutEffect – Reference](https://react.dev/reference/react/useLayoutEffect)
- [useContext – Reference](https://react.dev/reference/react/useContext)
- [useReducer – Reference](https://react.dev/reference/react/useReducer)
- [useRef – Reference](https://react.dev/reference/react/useRef)
- [useMemo – Reference](https://react.dev/reference/react/useMemo)
- [useCallback – Reference](https://react.dev/reference/react/useCallback)
- [useImperativeHandle – Reference](https://react.dev/reference/react/useImperativeHandle)
- [useTransition – Reference](https://react.dev/reference/react/useTransition)
- [useDeferredValue – Reference](https://react.dev/reference/react/useDeferredValue)
- [useId – Reference](https://react.dev/reference/react/useId)
- [useSyncExternalStore – Reference](https://react.dev/reference/react/useSyncExternalStore)
- [memo – Reference](https://react.dev/reference/react/memo)
- [StrictMode – Reference](https://react.dev/reference/react/StrictMode)
- [Suspense – Reference](https://react.dev/reference/react/Suspense)
- [lazy – Reference](https://react.dev/reference/react/lazy)
- [Component – Reference (Error Boundaries)](https://react.dev/reference/react/Component)
- [`<input>` – React DOM Components (Controlled vs Uncontrolled)](https://react.dev/reference/react-dom/components/input)
- [Responding to Events](https://react.dev/learn/responding-to-events)
- [forwardRef – Reference](https://react.dev/reference/react/forwardRef)
- [React 19 – Blog](https://react.dev/blog/2024/12/05/react-19)
- [React v18.0 – Blog](https://react.dev/blog/2022/03/29/react-v18)
- [React Compiler – Introduction](https://react.dev/learn/react-compiler/introduction)
- [Importing and Exporting Components](https://react.dev/learn/importing-and-exporting-components)
- [use – Reference](https://react.dev/reference/react/use)
- [startTransition – Reference](https://react.dev/reference/react/startTransition)
