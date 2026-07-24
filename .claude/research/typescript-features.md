# Fundamentos de TypeScript para o agente react-ts-coder

Este documento é um guia de referência (grounding) para o subagente `react-ts-coder`, especialista em implementação de frontend com React 18 + TypeScript + Next.js 14 App Router. Ele lista, com base exclusivamente na documentação oficial em typescriptlang.org (Handbook, Reference, TSConfig Reference e Release Notes), as features essenciais do sistema de tipos e os princípios de boas práticas que um agente de codificação competente precisa dominar para produzir código TypeScript em padrão de mercado. Não é um tutorial didático nem cobre a API do React — é uma referência densa para consulta e checagem durante a implementação.

## Sistema de Tipos — Fundamentos

- **Tipagem estrutural (structural typing).** TypeScript compara tipos por *forma* (shape), não por nome/declaração: "a regra básica do sistema de tipos estrutural do TypeScript é que `x` é compatível com `y` se `y` tiver pelo menos os mesmos membros que `x`" (Type Compatibility). Isso contrasta com tipagem nominal (Java/C#) e foi escolhido porque JavaScript usa fartamente objetos e funções anônimas — um agente deve saber que dois tipos com o mesmo shape são intercambiáveis mesmo sem herança/relação nominal declarada.
- **Inferência de tipos (type inference).** Sem anotação explícita, TypeScript infere o "best common type" entre candidatos e usa "contextual typing" (infere a partir do contexto de uso, ex. o tipo esperado de um parâmetro de callback). Quando nenhum supertipo cobre todos os candidatos (ex. array de instâncias de subclasses distintas), o TS infere uma união em vez do tipo-base esperado — nesses casos, anotação explícita é necessária para o resultado desejado.
- **Literal types e literal inference.** Valores `const` de string/number/boolean podem ter um tipo literal específico (`"Hello World"`) em vez do tipo geral (`string`); `boolean` é, na prática, o alias de `true | false`. Ao inicializar objetos, o TS assume que propriedades podem mudar depois e por isso infere o tipo geral (ex. `method: string` em vez de `"GET"`) — usar `as const` no fim da expressão converte a literal inference do objeto inteiro para tipos literais, sendo a forma recomendada de travar valores literais.
- **Union types.** Um tipo formado por dois ou mais tipos, representando um valor que pode ser qualquer um deles (`number | string`). Operações só são permitidas se válidas para *todos* os membros da união, a menos que o valor seja estreitado (narrowed) antes.
- **Intersection types.** Combinam múltiplos tipos em um só via `&` (ex. `type ColorfulCircle = Colorful & Circle`). Ao contrário de `interface` com o mesmo nome (que gera erro em conflito de propriedades), uma intersection mescla propriedades conflitantes automaticamente — se os tipos forem incompatíveis, a propriedade resultante vira `never` em vez de erro de compilação.
- **`interface` vs `type alias`.** Um type alias é apenas um *nome* para qualquer tipo (inclusive unions, primitivos, tuplas) e, uma vez criado, não pode ser reaberto para adicionar campos; `interface` suporta *declaration merging* (duas declarações do mesmo nome se fundem) e é usada com `extends`. A doc oficial dá o heurístico central: *"use `interface` until you need to use features from `type`"* — ou seja, prefira `interface` por padrão e migre para `type` quando precisar de recursos exclusivos dele (unions, tuplas, mapped types, etc.). A doc também nota que `extends` em interfaces costuma ser mais eficiente para o compilador do que intersections em types.
- **`readonly` e imutabilidade.** `readonly` em propriedades de objeto impede reatribuição da propriedade, mas **não é imutabilidade profunda** — o conteúdo interno ainda pode mudar e o valor pode ser modificado por meio de aliasing. Também existem `ReadonlyArray<T>` / `readonly T[]` (arrays não podem receber `push`, mas podem ser lidos/fatiados) e tuplas `readonly [string, number]`; um array `readonly` não é bidirecionalmente atribuível a um array mutável.
- **Type operators — `keyof`.** Aplicado a um tipo de objeto, produz uma união de literais (string/numérica) de suas chaves (`keyof Point` → `"x" | "y"`). Em presença de index signatures, `keyof` retorna o tipo do índice (`string | number` para índice string, já que JS converte chaves numéricas para string); é especialmente útil combinado com mapped types.
- **Type operators — `typeof`.** No nível de tipos (não confundir com o `typeof` de runtime do JavaScript), captura o tipo de uma variável ou propriedade existente (`let n: typeof s`). Uso central: `ReturnType<typeof fn>` para extrair o tipo de retorno de uma função sem precisar redigitar sua assinatura. Só pode ser aplicado a identificadores (variáveis) e suas propriedades, nunca a expressões arbitrárias.
- **Indexed access types.** Sintaxe `Type['prop']` para buscar o tipo de uma propriedade específica; aceita uniões de chaves (`Person["age" | "name"]`) e combina com `keyof` (`Person[keyof Person]`) para obter a união de todos os tipos de valor. Erra em tempo de compilação se a chave não existir, funcionando como proteção contra typos.

## Narrowing e Type Guards

- **Narrowing.** É o processo de refinar o tipo de uma variável para um tipo mais específico do que o declarado, com base em checagens de runtime que o compilador reconhece (*type guards*). O TS sobrepõe análise de tipos ao fluxo de controle real do JavaScript (`if/else`, `switch`, early return).
- **`typeof` type guards.** O TS entende os valores possíveis de `typeof` (`"string"`, `"number"`, `"bigint"`, `"boolean"`, `"symbol"`, `"undefined"`, `"object"`, `"function"`) e estreita o tipo em cada branch; atenção à peculiaridade de que `typeof null === "object"`.
- **Truthiness narrowing.** Checagens em condicionais coagem o valor a boolean (falsy: `0`, `NaN`, `""`, `0n`, `null`, `undefined`). A doc alerta explicitamente: *"truthiness checking on primitives can often be error prone"* — um agente deve preferir checagens explícitas (`!= null`) a truthiness implícito quando o valor pode ser `0`/`""`.
- **Equality narrowing.** `===`/`!==`/`==`/`!=` estreitam tipos; o padrão `!= null` remove tanto `null` quanto `undefined` de uma vez (comparação solta contra `null`), sendo o idiom recomendado para eliminar ambos simultaneamente.
- **`in` operator narrowing.** `"prop" in obj` estreita para os membros da união que têm essa propriedade (branch verdadeiro) ou não têm (branch falso) — útil para uniões de objetos sem discriminante explícito.
- **`instanceof` narrowing.** Verifica se a cadeia de protótipos do valor contém o protótipo do construtor (ex. `x instanceof Date`), estreitando para a classe correspondente.
- **Assignments e control flow analysis.** Atribuições estreitam o tipo pelo valor atribuído, mas sempre em relação ao *tipo declarado* da variável (não é possível atribuir algo fora da união declarada mesmo que o tipo observado no momento seja mais estreito). O compilador analisa o grafo de fluxo de execução para saber o tipo em cada ponto do código.
- **Type predicates (custom type guards).** Funções com retorno `parameterName is Type` (ex. `function isFish(pet: Fish | Bird): pet is Fish`) permitem lógica de narrowing arbitrária definida pelo usuário; são reconhecidas inclusive em `Array.prototype.filter`, produzindo arrays já estreitados.
- **Discriminated unions.** Quando todo membro de uma união compartilha uma propriedade com tipos literais (o "discriminante", ex. `kind: "circle" | "square"`), o TS consegue estreitar automaticamente a partir de checagens nessa propriedade (`if`/`switch`). É o padrão preferencial da doc para modelar variantes de dados heterogêneos em vez de propriedades opcionais soltas.
- **`never` e exhaustiveness checking.** `never` é o tipo sem valores possíveis; atribuir a variável restante de um `switch`/`if` a uma variável tipada `never` no `default` força erro de compilação caso um novo membro seja adicionado à união e não seja tratado — é o padrão oficial para garantir que todo caso de uma discriminated union foi coberto.

## Generics

- **Generic functions.** Usam *type variables* (`function identity<Type>(arg: Type): Type`) para preservar a relação entre tipos de entrada/saída sem recorrer a `any`; podem ser chamadas com o argumento de tipo explícito ou por inferência automática.
- **Generic interfaces e classes.** O parâmetro de tipo pode ficar no nível da interface/classe inteira ou apenas na assinatura de chamada, dependendo de qual escopo precisa "ver" o tipo. Classes genéricas são genéricas apenas do lado da instância — membros `static` não podem usar o parâmetro de tipo da classe.
- **Generic constraints (`extends`).** Restringem o parâmetro de tipo a ter certas propriedades (`<Type extends Lengthwise>`), permitindo acessar membros como `arg.length` com segurança dentro da função; sem constraint, nada pode ser assumido sobre o shape do tipo genérico.
- **Parâmetro de tipo constrangido por outro (`keyof`).** Padrão `<Type, Key extends keyof Type>` (ex. em `getProperty(obj, key)`) garante em tempo de compilação que `key` é de fato uma chave válida de `obj`.
- **Generic parameter defaults.** Um parâmetro de tipo pode ter um valor padrão (`<T extends HTMLElement = HTMLDivElement>`), tornando-o opcional na chamada; parâmetros obrigatórios não podem vir depois de um com default, e o default precisa satisfazer eventual constraint.
- **Boas práticas oficiais para generics.** A doc lista três regras centrais: (1) *"push type parameters down"* — prefira `<Type>(arr: Type[])` a `<Type extends any[]>(arr: Type)`, pois a inferência funciona melhor; (2) use o menor número possível de type parameters — não generalize algo que não relaciona múltiplos valores; (3) um type parameter só se justifica se aparecer pelo menos duas vezes na assinatura — se aparece uma vez só, provavelmente não precisa ser genérico.
- **Variance annotations.** TS infere variância (covariância/contravariância) automaticamente em tipos estruturais; anotações manuais (`in`, `out`, `in out`) só devem ser usadas em casos raros de tipos circulares como dica de performance, nunca para forçar um comportamento de type-checking diferente do estrutural — a doc é explícita: *"it's almost never necessary to write a variance annotation."*

## Tipagem de Funções

- **Function type expressions.** Sintaxe `(a: string) => void` para o tipo de uma função; nomes de parâmetro são obrigatórios na sintaxe (não é possível escrever apenas o tipo).
- **Call signatures e construct signatures.** Um tipo de objeto pode descrever tanto propriedades quanto uma assinatura de chamada (usando `:` em vez de `=>` dentro do object type) e/ou uma assinatura de construção com `new (...)`, permitindo tipar funções que também carregam propriedades ou são usadas com `new`.
- **Optional e default parameters.** `x?: number` torna o parâmetro opcional (tipo efetivo `T | undefined`); `x = 10` define um default e o parâmetro tem o tipo do valor (não inclui `undefined`). Regra oficial para callbacks: nunca declare um parâmetro como opcional em um tipo de callback a menos que a intenção seja realmente chamar a função sem aquele argumento — prefira um tipo de união de assinatura se o comportamento variar.
- **Rest parameters.** `...m: number[]` aceita um número indefinido de argumentos tipados.
- **Overloads.** Múltiplas assinaturas declaradas acima da implementação (que não é visível externamente); a implementação precisa ser compatível com todas as assinaturas declaradas. Regra oficial: *sempre prefira union types nos parâmetros a overloads* quando possível, pois permite chamar a função com um valor de tipo união diretamente e é mais simples de manter.
- **`this` parameter.** Pode ser declarado explicitamente como primeiro "parâmetro" (`function (this: User) {...}`) para tipar o contexto de invocação; exige function declarations tradicionais (arrow functions não têm `this` próprio para anotar).
- **Retornos especializados.** `void` (função sem retorno relevante) é diferente de `undefined`: em contextos de tipagem contextual (ex. um tipo de função `() => void` atribuído), a implementação pode retornar um valor que é simplesmente ignorado, mas uma função *declarada* com `: void` não pode ter `return <valor>`. `object` (qualquer valor não-primitivo, sempre minúsculo) é distinto de `{}` e do `Object` global. `unknown` representa qualquer valor de forma segura — nada pode ser feito com ele sem checagem de tipo antes (ao contrário de `any`). `never` tipa funções que nunca retornam (lançam exceção ou loop infinito). O tipo global `Function` deve ser evitado para parâmetros — prefira uma assinatura explícita como `() => void`.

## Utility Types (oficiais)

Lista completa conforme a Reference oficial (`utility-types.html`), com uma frase de propósito cada:

- **`Awaited<Type>`** — desembrulha recursivamente tipos de `Promise`, modelando o efeito de `await`/`.then()`.
- **`Partial<Type>`** — torna todas as propriedades de `Type` opcionais.
- **`Required<Type>`** — torna todas as propriedades de `Type` obrigatórias (oposto de `Partial`).
- **`Readonly<Type>`** — torna todas as propriedades de `Type` `readonly`.
- **`Record<Keys, Type>`** — constrói um tipo de objeto cujas chaves são `Keys` e cujos valores são todos `Type`.
- **`Pick<Type, Keys>`** — seleciona um subconjunto de propriedades `Keys` de `Type`.
- **`Omit<Type, Keys>`** — remove as propriedades `Keys` de `Type` (oposto de `Pick`).
- **`Exclude<UnionType, ExcludedMembers>`** — remove de uma união os membros atribuíveis a `ExcludedMembers`.
- **`Extract<Type, Union>`** — mantém de `Type` apenas os membros atribuíveis a `Union`.
- **`NonNullable<Type>`** — remove `null` e `undefined` de `Type`.
- **`Parameters<Type>`** — extrai uma tupla com os tipos dos parâmetros de um tipo de função.
- **`ConstructorParameters<Type>`** — extrai os tipos dos parâmetros do construtor de um tipo de classe/construtor.
- **`ReturnType<Type>`** — extrai o tipo de retorno de um tipo de função (tipicamente combinado com `typeof fn`).
- **`InstanceType<Type>`** — extrai o tipo da instância produzida por um construtor.
- **`NoInfer<Type>`** — bloqueia a inferência para aquele tipo, mantendo-o idêntico em todo o resto.
- **`ThisParameterType<Type>`** — extrai o tipo do parâmetro `this` de uma função (ou `unknown` se não houver).
- **`OmitThisParameter<Type>`** — remove o parâmetro `this` de um tipo de função.
- **`ThisType<Type>`** — marcador de tipo contextual para `this` (requer a flag `noImplicitThis`).
- **`Uppercase` / `Lowercase` / `Capitalize` / `Uncapitalize`** — utility types de manipulação de string literal (usam as funções nativas de runtime do JS para a transformação).

## Mapped Types e Conditional Types (fundamentam os Utility Types acima)

- **Mapped types.** Constroem um novo tipo iterando as propriedades de outro via `[Property in keyof Type]: ...` — é assim que `Partial`, `Required`, `Readonly` e `Record` são de fato definidos internamente na lib padrão.
- **Modificadores `+`/`-` em mapped types.** `-readonly` remove a modificador `readonly` de todas as propriedades mapeadas; `-?` remove a opcionalidade (torna propriedades obrigatórias); `+` é o padrão implícito quando se adiciona o modificador.
- **Key remapping via `as`.** Desde o TS 4.1, mapped types podem remapear as chaves resultantes com uma cláusula `as` (frequentemente combinada com template literal types, ex. transformar `name` em `getName`), e chaves podem ser filtradas retornando `never` na posição do `as`.
- **Conditional types.** Sintaxe `SomeType extends OtherType ? TrueType : FalseType`: se o tipo à esquerda é atribuível ao da direita, resolve para o branch verdadeiro, senão para o falso. É o mecanismo por trás de utility types como `Exclude`/`Extract`/`ReturnType`.
- **Distributividade sobre uniões.** Um conditional type aplicado a um parâmetro de tipo genérico distribui automaticamente sobre cada membro de uma união passada nesse parâmetro (`ToArray<string | number>` vira `string[] | number[]`, não `(string | number)[]`); para evitar a distribuição, envolva ambos os lados do `extends` em colchetes (`[Type] extends [any]`).
- **`infer`.** Permite capturar e nomear declarativamente um tipo dentro do branch condicional (ex. `Type extends Array<infer Item> ? Item : Type`), evitando acesso manual via indexed access types; é a base de como `ReturnType` extrai o retorno de uma função.

## Template Literal Types

- **Definição.** Constroem, a partir da mesma sintaxe de template strings do JavaScript mas em posição de tipo, um novo tipo literal de string por concatenação (`` `hello ${World}` `` com `World = "world"` produz o literal `"hello world"`).
- **Expansão sobre uniões.** Quando uma união é interpolada, o resultado é o conjunto de todas as combinações possíveis de string literal (produto cartesiano quando há múltiplas interpolações) — usado, por exemplo, para tipar nomes de eventos derivados de chaves de um objeto (`` `${Key}Changed` ``).
- **Intrinsic string manipulation types.** `Uppercase`, `Lowercase`, `Capitalize`, `Uncapitalize` operam sobre string literal types e são usados tipicamente dentro de key remapping de mapped types.

## Enums vs Union de Literais

- **Numeric enums.** Membros recebem valores numéricos com auto-incremento a partir de 0 se nenhum inicializador for dado.
- **String enums.** Cada membro precisa de um inicializador string literal explícito; ao contrário dos enums numéricos, não geram reverse mapping. A doc reconhece seu valor: dão "um valor legível e significativo em tempo de execução, independente do nome do membro do enum".
- **Const enums.** São completamente removidos na compilação e inlined nos pontos de uso — mas a doc lista pitfalls sérios ao publicá-los em pacotes: são "fundamentalmente incompatíveis" com `isolatedModules`; podem causar bugs sutis se a versão do enum inlined no build divergir da versão em runtime de uma dependência (*"resulting in surprising bugs, like taking the wrong branches of `if` statements"*); e imports não resolvidos de const enums podem gerar erros em runtime. A recomendação oficial é banir const enums via linter em código publicado, ou usar a flag `preserveConstEnums`.
- **Guidance atual: objetos com `as const` como alternativa moderna.** A doc afirma explicitamente: *"in modern TypeScript, you may not need an enum when an object with `as const` could suffice"*, justificando que esse formato "mantém a base de código alinhada ao estado atual do JavaScript" — ou seja, para um agente decidindo entre `enum` e union de literais/objeto `as const`, a doc favorece o segundo padrão em código novo.
- **Sinal reforçador recente (TS 5.8): `--erasableSyntaxOnly`.** Essa flag, quando ligada, faz o compilador **errar** em construções TypeScript que não podem ser simplesmente "apagadas" para virar JavaScript válido — a lista oficial inclui explicitamente declarações `enum`, `namespace`/`module` com código em runtime, parameter properties em classes e `import =`/`export =`. Isso reflete a tendência do ecossistema (ex. execução direta de TS por runtimes via type-stripping) de tratar `enum` como um recurso com custo de runtime a ser evitado quando o alvo precisa de sintaxe puramente "erasable".

## Módulos, Namespaces e Declaration Files

- **Determinação módulo vs script.** Regra oficial: *"any file containing a top-level `import` or `export` is considered a module"*; um arquivo sem isso é tratado como script em escopo global. Para forçar um arquivo sem imports/exports reais a ser módulo, usa-se `export {}`.
- **Sintaxe ES Modules.** `export default` (um por arquivo) para exports default, `export const/function/var` para named exports (múltiplos por arquivo, importados por destructuring), e `import * as ns` para namespace imports.
- **Type-only imports/exports.** `import type { Cat, Dog } from "./animal.js"` importa apenas tipos; desde o TS 4.5, o prefixo inline `type` também funciona item a item (`import { fn, type Cat } from "./animal.js"`). Isso permite que transpiladores não-TypeScript (ex. Babel) removam com segurança os imports que só existem para type-checking.
- **Interop com CommonJS.** A sintaxe `import fs = require("fs")` dá comportamento CommonJS dentro de arquivos ES Module; a flag `esModuleInterop` reduz o atrito entre as semânticas de CommonJS e ES Modules.
- **Namespaces.** Mecanismo (antigo "internal modules", hoje `namespace`) para agrupar tipos/classes/interfaces sob um nome e evitar poluição do escopo global; suportam multi-arquivo via `/// <reference path="..." />` e aliases (`import polygons = Shapes.Polygons`). A doc não declara explicitamente uma recomendação de "namespaces vs ES modules" nessa página — isso é uma lacuna sinalizada; na prática, o próprio ecossistema (incluindo a flag `erasableSyntaxOnly` do TS 5.8, que erra em namespaces com código de runtime) empurra código moderno para ES modules.
- **Declaration files (`.d.ts`).** Descrevem o shape de código JavaScript já existente sem alterar o código-fonte original, permitindo type-checking sobre bibliotecas não escritas em TypeScript. O caso de uso mais comum citado pela doc é tipar pacotes npm sem tipos embutidos, via pacotes `@types/*` (DefinitelyTyped) — um agente que consome uma lib JS sem tipos deve saber procurar/instalar o `@types` correspondente ou escrever uma declaração ambiente.

## Modo Estrito (TSConfig Reference — família `strict`)

- **`strict`** — liga toda a família de flags de modo estrito de uma vez; é o "meta-flag" recomendado como baseline de um projeto novo.
- **`noImplicitAny`** — impede que o compilador caia silenciosamente em `any` quando não consegue inferir um tipo a partir das anotações presentes, evitando que erros passem despercebidos.
- **`strictNullChecks`** — com a flag desligada, `null`/`undefined` são efetivamente ignorados pela linguagem (fonte comum de erros em runtime); ligada, `null` e `undefined` passam a ter tipos distintos próprios e o uso deles onde um valor concreto é esperado vira erro de compilação.
- **`strictFunctionTypes`** — faz a checagem de parâmetros de função ser feita de forma mais correta (mais rigorosa quanto à variância de parâmetros).
- **`strictBindCallApply`** — verifica que os métodos nativos `call`, `bind` e `apply` de uma função são invocados com os argumentos corretos para a assinatura subjacente.
- **`strictPropertyInitialization`** — gera erro quando uma propriedade de classe é declarada mas não é definitivamente atribuída no construtor.
- **`noImplicitThis`** — gera erro em expressões `this` cujo tipo seria implicitamente `any`.
- **`alwaysStrict`** — garante que os arquivos sejam interpretados em modo estrito do ECMAScript e emite `"use strict"` em cada arquivo de saída.
- **`useUnknownInCatchVariables`** — muda o tipo padrão da variável de um `catch` de `any` para `unknown`, forçando checagem de tipo antes de operar sobre o erro capturado.
- **`noUncheckedIndexedAccess`** — adiciona `undefined` ao tipo de qualquer campo acessado via index signature não declarado explicitamente, refletindo que a chave pode não existir de fato no objeto.
- **`exactOptionalPropertyTypes`** — aplica regras mais estritas sobre propriedades opcionais (`?`) em `type`/`interface`, distinguindo "propriedade ausente" de "propriedade presente com valor `undefined`".

## O Operador `satisfies`

- **Problema que resolve.** A doc descreve o dilema central: *"we want to ensure that some expression matches some type, but also want to keep the most specific type of that expression for inference purposes."* Uma anotação de tipo (`: Type`) garante a checagem mas "acha" (widens) o tipo resultante para o tipo anotado, perdendo precisão (ex. uma propriedade `string | RGB` deixa de ser reconhecida como `string` especificamente); uma type assertion (`as Type`) não valida nada de fato.
- **O que `satisfies` faz.** *"The new `satisfies` operator lets us validate that the type of an expression matches some type, without changing the resulting type of that expression."* Ou seja, valida contra um tipo (pega erros de key typo, propriedades faltando/sobrando ou de tipo errado) e ao mesmo tempo preserva o tipo mais específico inferido para uso posterior (ex. `palette.green` continua `string`, não `string | RGB`).
- **Quando usar.** É o padrão indicado quando se quer tipar um objeto/valor contra um shape esperado (ex. `Record<Colors, string | RGB>`) sem perder a granularidade de cada propriedade individual para consumo posterior no código.

## Boas Práticas Centrais (conforme a doc oficial)

- Use `interface` até precisar de um recurso exclusivo de `type` (unions, tuplas, mapped/conditional types) — heurístico oficial de decisão entre os dois.
- Prefira `as const` a asserções manuais de literal quando quiser travar um objeto inteiro em tipos literais, evitando literal widening indesejado.
- Prefira union types nos parâmetros de uma função a múltiplos overloads sempre que possível — overloads só quando a relação entre argumentos e retorno não pode ser expressa com union.
- Em generics: empurre o type parameter para o nível mais interno possível (ex. no elemento do array, não no array inteiro), use o menor número de type parameters, e só generalize um parâmetro que apareça ao menos duas vezes na assinatura.
- Nunca escreva variance annotations (`in`/`out`) para forçar comportamento — elas só devem refletir a variância estrutural real, quase nunca são necessárias.
- Nunca declare parâmetro opcional em um tipo de callback a menos que a função realmente possa ser invocada sem aquele argumento.
- Trate truthiness checking em primitivos como propenso a erro; prefira comparações explícitas (`!= null`, `.length === 0`, etc.) a depender de coerção implícita.
- Use discriminated unions (propriedade literal comum) para modelar variantes de dados, e feche a checagem com `never` no branch `default`/`else` para exhaustiveness checking garantido em tempo de compilação.
- Evite publicar `const enum` em bibliotecas (incompatível com `isolatedModules` e sujeito a bugs de versão); considere objetos `as const` como alternativa moderna a `enum` em geral.
- Ligue a família `strict` do compilador como baseline — as flags individuais (`noImplicitAny`, `strictNullChecks`, etc.) existem para permitir adoção gradual, mas `strict: true` é o alvo recomendado.
- Use `satisfies` quando precisar validar um valor contra um tipo esperado sem perder a inferência do tipo mais específico daquele valor.

## Lacunas sinalizadas

- A documentação de Namespaces (`namespaces.html`) não contém, na própria página, uma recomendação explícita e textual de "prefira ES modules a namespaces em código moderno" — a inferência dessa preferência vem de sinais indiretos (ênfase em ES modules em `modules.html` e o tratamento de namespaces com código de runtime como erro sob `erasableSyntaxOnly` no TS 5.8), não de uma frase direta equivalente ao heurístico dado para `interface` vs `type`.

## Referências

- [Everyday Types (literal types, literal inference, as const, unions, type aliases, interface vs type heuristic)](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Narrowing (type guards, discriminated unions, never, exhaustiveness checking)](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [Object Types (readonly, index signatures, extends vs intersections, generic object types, tuples)](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [More on Functions (overloads, optional/default params, this parameter, void/unknown/never)](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
- [Utility Types Reference](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [Enums](https://www.typescriptlang.org/docs/handbook/enums.html)
- [Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)
- [Namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html)
- [Declaration Files: Introduction](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)
- [TSConfig Reference (compiler options, incl. strict family)](https://www.typescriptlang.org/tsconfig/)
- [TypeScript 4.9 Release Notes (satisfies operator)](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html)
- [Type Compatibility (structural typing)](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)
- [Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Keyof Type Operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)
- [Typeof Type Operator](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html)
- [Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
- [TypeScript 5.8 Release Notes (--erasableSyntaxOnly flag)](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-8.html)
