import type { ChapterSection, EbookMeta } from "./fundamentos-ia";

// ─── Capítulo 1 ──────────────────────────────────────────

const CAP1_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap1",
    title: "Introdução",
    content: `
<p>Se você chegou até aqui, provavelmente já ouviu falar da Claude — talvez em uma conversa sobre o futuro da Inteligência Artificial, em algum vídeo comparando ferramentas de IA, ou talvez você já a tenha usado e queira ir além do básico. Em qualquer um desses cenários, este guia foi feito para você.</p>
<p>A Claude é um dos sistemas de Inteligência Artificial mais avançados da atualidade, desenvolvida pela <strong>Anthropic</strong> — uma empresa fundada por ex-pesquisadores da OpenAI com uma missão clara: construir IA que seja ao mesmo tempo poderosa e segura. Em pouco tempo, a Claude se tornou a ferramenta de escolha de milhares de profissionais, estudantes, desenvolvedores e criadores de conteúdo ao redor do mundo.</p>
<p>Mas a Claude não é apenas "mais um chatbot". Ela faz parte de um <strong>ecossistema completo</strong> que inclui chat inteligente, geração de artefatos visuais, assistentes personalizados via Projects, automação com Skills, integrações com ferramentas externas, um modo agente no desktop (CoWork) e até um terminal de desenvolvimento (Claude Code). Entender esse ecossistema é o que separa quem usa a IA casualmente de quem realmente domina a ferramenta.</p>
<p>Neste primeiro capítulo, vamos começar do início: <strong>quem é a Anthropic</strong>, <strong>o que é a Claude</strong>, quais são as ferramentas disponíveis, como navegar pela interface e como dar seus primeiros passos de forma eficiente. Ao final, você terá uma visão panorâmica de tudo que a Claude pode fazer — e estará pronto para mergulhar nos capítulos seguintes.</p>
    `,
  },
  {
    id: "o-que-e-a-claude",
    title: "1. O que é a Claude e quem é a Anthropic",
    content: `
<p>A <strong>Anthropic</strong> é uma empresa de pesquisa em segurança de IA fundada em 2021 por <strong>Dario Amodei</strong> (CEO) e <strong>Daniela Amodei</strong> (Presidente), ambos ex-pesquisadores seniores da OpenAI. A empresa nasceu com uma premissa diferente da maioria das Big Techs de IA: o foco principal não é apenas criar o modelo mais poderoso, mas criar um modelo que seja <strong>seguro, honesto e controlável</strong>.</p>
<p>Essa filosofia se materializa em um conceito chamado <strong>IA Constitucional</strong> (<em>Constitutional AI</em>) — uma abordagem de treinamento na qual o modelo é guiado por um conjunto de princípios éticos durante seu desenvolvimento. Na prática, isso significa que a Claude foi treinada para ser transparente em suas limitações, recusar solicitações potencialmente prejudiciais e explicar seu raciocínio de forma clara.</p>
<p>A <strong>Claude</strong> é o produto principal da Anthropic — um assistente de IA generativa com capacidades avançadas em três grandes áreas:</p>
<ul>
<li><strong>Texto</strong> — Escrita, análise, resumo, tradução, brainstorming e raciocínio complexo.</li>
<li><strong>Código</strong> — Geração, depuração, refatoração e explicação de código em dezenas de linguagens.</li>
<li><strong>Visão Computacional</strong> — Análise de imagens, gráficos, screenshots, documentos escaneados e PDFs.</li>
</ul>
<p>O nome "Claude" é uma homenagem a <strong>Claude Shannon</strong>, o matemático e engenheiro americano considerado o "pai da teoria da informação". Shannon estabeleceu as bases matemáticas que tornaram possível toda a comunicação digital moderna — dos computadores à internet. A escolha do nome reflete a ambição da Anthropic: criar sistemas de IA que transformem fundamentalmente a forma como processamos e comunicamos informação.</p>
<p>Atualmente, a Claude está disponível em múltiplas plataformas: via navegador em <strong>claude.ai</strong>, como aplicativo desktop para <strong>Mac e Windows</strong>, como app móvel para <strong>iOS e Android</strong>, e para desenvolvedores via <strong>API</strong>. Além disso, os modelos Claude estão disponíveis em plataformas de terceiros como <strong>Amazon Bedrock</strong>, <strong>Google Vertex AI</strong> e <strong>Microsoft Foundry</strong>.</p>
    `,
  },
  {
    id: "ecossistema-claude",
    title: "2. O Ecossistema Claude",
    content: `
<p>Um erro comum de quem está começando é pensar que a Claude é apenas um chat. Na verdade, a Claude faz parte de um <strong>ecossistema de ferramentas integradas</strong>, cada uma projetada para um tipo diferente de trabalho. Entender essas peças é fundamental para saber quando e como usar cada uma.</p>
<p>As principais ferramentas do ecossistema são:</p>
<ul>
<li><strong>Claude Chat (Web, Desktop e Mobile)</strong> — A interface principal. Aqui você conversa com a Claude, envia documentos, imagens e PDFs, e recebe respostas em texto, código ou artefatos visuais. É o ponto de entrada para a maioria dos usuários e onde todas as funcionalidades convergem.</li>
<li><strong>Claude CoWork</strong> — Lançado em janeiro de 2026, o CoWork é o modo <strong>agente</strong> da Claude no aplicativo desktop. Diferente do chat (que responde), o CoWork <strong>executa</strong>: ele recebe uma tarefa, cria um plano, divide em etapas e trabalha de forma autônoma, acessando seus arquivos locais, criando documentos e cruzando informações de múltiplas fontes.</li>
<li><strong>Claude Code</strong> — Um terminal inteligente para desenvolvedores. O Claude Code roda diretamente no seu terminal, lê e escreve arquivos, executa comandos, roda testes e refatora código. É a ferramenta mais avançada do ecossistema, voltada para desenvolvimento de software profissional.</li>
<li><strong>Claude for Chrome</strong> — Extensão que permite usar a Claude diretamente no navegador, interagindo com o conteúdo de páginas web.</li>
<li><strong>Claude for Excel / PowerPoint</strong> — Integrações nativas que permitem usar a Claude diretamente dentro do Microsoft Office, gerando planilhas e apresentações sem sair do aplicativo.</li>
<li><strong>Claude for Slack</strong> — Integração que permite interagir com a Claude diretamente em canais e conversas do Slack.</li>
</ul>
<p>Pense no ecossistema Claude como um <strong>hospital moderno</strong>: o Chat é o ambulatório (atendimento geral), o CoWork é o centro cirúrgico (execução complexa e autônoma), o Claude Code é o laboratório de análises (trabalho técnico especializado), e as integrações são os convênios — conectam você com outros sistemas de forma fluida.</p>
    `,
  },
  {
    id: "conhecendo-a-interface",
    title: "3. Conhecendo a Interface",
    content: `
<p>Ao acessar <strong>claude.ai</strong> ou abrir o aplicativo desktop, você encontra uma interface limpa organizada em torno de três elementos principais:</p>
<p><strong>O Chat</strong> é o espaço central de interação. É onde você digita suas mensagens, envia arquivos e recebe respostas da Claude. Cada conversa é independente — ao iniciar um novo chat, a Claude começa "do zero" (a menos que você esteja dentro de um Project, como veremos no Capítulo 6).</p>
<p><strong>Os Artefatos</strong> são outputs visuais e interativos que a Claude gera em uma janela dedicada ao lado da conversa. Quando a Claude produz algo substancial — como uma página HTML, um componente React, um documento formatado, um diagrama ou um bloco de código extenso — ela automaticamente cria um artefato que pode ser visualizado, editado, versionado e exportado. Dedicaremos o Capítulo 3 inteiro a essa funcionalidade.</p>
<p><strong>Os Projetos</strong> são workspaces persistentes onde você configura um contexto fixo: instruções customizadas (system prompt), base de conhecimento (documentos de referência) e histórico de conversas. É como criar um "escritório especializado" onde a Claude já sabe quem você é e o que está fazendo. Exploraremos Projects em profundidade no Capítulo 6.</p>
<p>Além desses três pilares, a interface oferece recursos adicionais importantes:</p>
<ul>
<li><strong>Web Search</strong> — A Claude pode buscar informações atualizadas na internet em tempo real.</li>
<li><strong>Research</strong> — Modo de pesquisa aprofundada que consulta múltiplas fontes antes de responder.</li>
<li><strong>Upload de arquivos</strong> — Envie PDFs, imagens, documentos Word, planilhas e mais diretamente no chat.</li>
<li><strong>Integrações (Connectors)</strong> — Conecte a Claude com Notion, Google Drive, Gmail, Slack e outras ferramentas para acessar dados externos sem sair da conversa.</li>
</ul>
    `,
  },
  {
    id: "planos-e-disponibilidade",
    title: "4. Planos e Disponibilidade",
    content: `
<p>A Claude está disponível em diferentes planos, cada um com limites e funcionalidades específicas. Entender os planos ajuda você a escolher o que melhor se adapta ao seu uso:</p>
<p><strong>Free (Gratuito)</strong> — Acesso aos modelos Haiku e Sonnet com limites de uso moderados. Inclui até 5 Projects e funcionalidades básicas de chat e artefatos. É suficiente para explorar a ferramenta e tarefas ocasionais.</p>
<p><strong>Pro ($20/mês)</strong> — Adiciona acesso ao modelo <strong>Opus</strong> (o mais poderoso), limites significativamente maiores, Projects ilimitados com <strong>RAG automático</strong> (expansão de até 10x na base de conhecimento), e todas as Skills oficiais. É o plano recomendado para uso profissional regular.</p>
<p><strong>Max ($100-200/mês)</strong> — Tudo do Pro com limites muito superiores. Ideal para usuários intensivos que trabalham com a Claude durante todo o dia — desenvolvedores, pesquisadores e criadores de conteúdo.</p>
<p><strong>Team ($30/assento/mês)</strong> — Tudo do Pro com funcionalidades colaborativas: Projects compartilhados, permissões granulares (Can Use / Can Edit) e gestão de equipe. Ideal para times que trabalham juntos.</p>
<p><strong>Enterprise</strong> — Solução corporativa com segurança avançada, administração via API, residência de dados configurável, SSO/SAML e suporte dedicado.</p>
<p>Todos os planos pagos incluem a funcionalidade de <strong>Memória</strong> (a Claude lembra preferências entre conversas) e acesso a <strong>integrações</strong> com ferramentas externas. A disponibilidade geográfica pode variar — consulte a página oficial da Anthropic para verificar suporte no seu país.</p>
    `,
  },
  {
    id: "primeiros-passos",
    title: "5. Primeiros Passos no Chat",
    content: `
<p>Agora que você conhece o ecossistema, vamos ao que interessa: <strong>como começar a usar a Claude de forma eficaz</strong>. A boa notícia é que a Claude entende linguagem natural — você não precisa aprender comandos especiais ou sintaxe complexa para começar.</p>
<p>A documentação oficial da Anthropic organiza a interação em três etapas fundamentais:</p>
<ol>
<li><strong>Setting the Stage (Preparar o Contexto)</strong> — Diga à Claude quem você é e qual é o seu objetivo. Isso dá contexto para que ela calibre o nível de profundidade e o tom das respostas. Por exemplo: "Sou um médico residente estudando anestesiologia e preciso revisar farmacologia dos anestésicos venosos."</li>
<li><strong>Defining the Task (Definir a Tarefa)</strong> — Especifique claramente o que você quer que a Claude faça. Use verbos de ação: "escreva", "analise", "compare", "resuma", "crie". Quanto mais clara a tarefa, melhor o resultado.</li>
<li><strong>Specifying Rules (Especificar Regras)</strong> — Defina o formato de saída, tom, restrições e qualquer regra específica. Por exemplo: "Responda em tópicos e subtópicos, com palavras-chave em negrito. Use linguagem acessível para estudantes."</li>
</ol>
<p>Alguns princípios que vão melhorar imediatamente suas interações:</p>
<ul>
<li><strong>Seja específico</strong> — "Resuma este artigo" é vago. "Resuma este artigo destacando metodologia, resultados principais e limitações, em formato de tópicos" é preciso.</li>
<li><strong>Forneça contexto</strong> — A Claude não sabe quem você é até que você conte. Quanto mais contexto relevante, mais personalizada e útil será a resposta.</li>
<li><strong>Itere</strong> — Raramente o primeiro resultado é perfeito. Peça ajustes, refinamentos e versões alternativas. A Claude aprende durante a conversa.</li>
<li><strong>Use a Claude para planejar</strong> — Antes de executar uma tarefa complexa, peça à Claude para analisar o problema e propor um plano de ação. Depois, execute etapa por etapa.</li>
</ul>
<p>Nos próximos capítulos, vamos aprofundar cada uma dessas áreas: modelos, artefatos, memória, engenharia de prompt e ferramentas avançadas. Mas o mais importante neste momento é começar a usar — abra o <strong>claude.ai</strong>, descreva uma tarefa real do seu dia e veja o que acontece. A prática é o melhor professor.</p>
    `,
  },
];

// ─── Capítulo 2 ──────────────────────────────────────────

const CAP2_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap2",
    title: "Introdução",
    content: `
<p>No capítulo anterior, você conheceu o ecossistema Claude e deu seus primeiros passos na plataforma. Agora, vamos mergulhar em uma das decisões mais importantes que você vai tomar ao usar a Claude: <strong>qual modelo escolher</strong>.</p>
<p>A Claude não é um modelo único — ela é uma <strong>família de três modelos</strong>, cada um projetado para um tipo diferente de trabalho. Escolher o modelo errado é como usar um bisturi elétrico para uma sutura simples: funciona, mas desperdiça recurso e tempo. O inverso também é verdade — usar o modelo mais leve para uma tarefa que exige raciocínio profundo vai gerar resultados medianos.</p>
<p>Neste capítulo, você vai entender as diferenças entre Haiku, Sonnet e Opus, aprender quando usar cada um, conhecer o Extended Thinking e o Adaptive Thinking, e configurar a Claude para funcionar do seu jeito desde o primeiro acesso.</p>
    `,
  },
  {
    id: "familia-de-modelos",
    title: "1. A Família de Modelos Claude",
    content: `
<p>A Anthropic mantém três linhas de modelos, cada uma otimizada para um perfil diferente de uso. Pense neles como três instrumentos diferentes em uma sala de cirurgia — todos são ferramentas médicas, mas cada um tem sua indicação precisa.</p>
<p><strong>Haiku 4.5</strong> é o modelo mais rápido e leve. Ele foi construído para tarefas do dia a dia que não exigem raciocínio complexo: respostas rápidas, resumos simples, extração de informações e categorizações. O Haiku 4.5 é surpreendentemente capaz — sua capacidade de raciocínio rival a do Sonnet 4.0 (a geração anterior), o que significa que ele é mais inteligente do que a maioria dos chatbots do mercado. É também o modelo mais eficiente com seu limite de uso (<em>rate limit</em>), permitindo mais interações no mesmo período.</p>
<p><strong>Sonnet 4.6</strong> é o modelo de equilíbrio — o <em>daily driver</em>. Ele traz raciocínio forte para o tipo de trabalho que a maioria das pessoas faz diariamente: escrita, análise de documentos, geração e depuração de código, pesquisa, resolução de problemas e fluxos de trabalho em múltiplas etapas. O Sonnet lida bem com visão computacional, criação de documentos e planilhas, e uso de ferramentas (computer use). <strong>Se você não sabe qual modelo escolher, comece pelo Sonnet</strong> — é a recomendação oficial da Anthropic.</p>
<p><strong>Opus 4.6</strong> é o especialista em raciocínio profundo. É o modelo mais inteligente e capaz da família Claude, projetado para problemas que genuinamente precisam de pensamento sustentado ao longo do tempo: pesquisa acadêmica aprofundada, análise de documentos longos e complexos, raciocínio em múltiplas etapas com variáveis interdependentes e tarefas onde a precisão é crítica. O Opus consome mais do seu <em>rate limit</em> porque raciocina mais profundamente — por isso, reserve-o para tarefas que realmente precisam desse nível. Disponível a partir do plano Pro.</p>
<p>Todos os modelos da família Claude 4.6 suportam uma <strong>janela de contexto de 200K tokens</strong> (com 1M em beta), processam texto e imagens como entrada, são multilíngues e estão disponíveis via claude.ai, API, Amazon Bedrock, Google Vertex AI e Microsoft Foundry.</p>
    `,
  },
  {
    id: "quando-usar-cada-modelo",
    title: "2. Quando Usar Cada Modelo",
    content: `
<p>A escolha do modelo deve considerar três fatores: a <strong>complexidade da tarefa</strong>, a <strong>velocidade desejada</strong> e o <strong>consumo de rate limit</strong>. Aqui está um guia prático baseado na documentação oficial da Anthropic:</p>
<p><strong>Use Haiku para:</strong></p>
<ul>
<li>Perguntas diretas com respostas curtas</li>
<li>Categorizações e classificações</li>
<li>Extração de dados específicos de um texto</li>
<li>Resumos simples e sínteses rápidas</li>
<li>Qualquer tarefa que você queira feita instantaneamente, sem raciocínio complexo</li>
</ul>
<p><strong>Use Sonnet para:</strong></p>
<ul>
<li>Escrita e criação de conteúdo</li>
<li>Tarefas de código — debugging, escrita, refatoração</li>
<li>Análises que precisam de raciocínio mas não são extremamente complexas</li>
<li>Chatbots com contexto e nuance</li>
<li>Problemas em múltiplas etapas e workflows</li>
<li>Criação de documentos, planilhas e apresentações</li>
<li>Qualquer trabalho "de uso geral" onde você não tem certeza do modelo ideal</li>
</ul>
<p><strong>Use Opus para:</strong></p>
<ul>
<li>Pesquisa e análise aprofundada</li>
<li>Raciocínio complexo com múltiplas etapas</li>
<li>Tarefas onde a precisão é crítica e erros têm consequências</li>
<li>Análise de documentos longos que exigem concentração sustentada</li>
<li>Problemas onde você já testou com Sonnet e ele não deu conta</li>
</ul>
<p>Na prática, aqui estão alguns exemplos concretos:</p>
<ul>
<li><strong>Debugar código</strong> → Sonnet (capacidades excepcionais de código, feedback rápido)</li>
<li><strong>Resumir artigos</strong> → Haiku (extração direta de conteúdo, sem raciocínio complexo)</li>
<li><strong>Analisar artigos científicos complexos</strong> → Opus (análise profunda, crítica metodológica, insights prospectivos)</li>
<li><strong>Escrever um relatório</strong> → Sonnet (equilíbrio entre qualidade e velocidade)</li>
<li><strong>Planejar uma apresentação</strong> → Sonnet ou Opus (dependendo da complexidade do tema)</li>
</ul>
    `,
  },
  {
    id: "extended-thinking",
    title: "3. Extended Thinking e Adaptive Thinking",
    content: `
<p>O <strong>Extended Thinking</strong> (Pensamento Estendido) é uma das funcionalidades mais diferenciadas da Claude. Quando ativado, a Claude cria um <strong>bloco interno de raciocínio</strong> antes de entregar a resposta final. É como se ela parasse, pensasse em voz alta e depois respondesse — um processo que melhora drasticamente a qualidade em tarefas complexas.</p>
<p>O Extended Thinking é especialmente útil para:</p>
<ul>
<li><strong>Planejamento complexo</strong> — Montar cronogramas, estratégias ou planos de estudo com múltiplas variáveis.</li>
<li><strong>Problemas técnicos</strong> — Debugging de código, arquitetura de sistemas, análise de logs.</li>
<li><strong>Matemática e lógica</strong> — Cálculos, provas, raciocínio dedutivo.</li>
<li><strong>Análise multivariável</strong> — Comparar opções, avaliar trade-offs, tomar decisões com múltiplos critérios.</li>
</ul>
<p>Mas a funcionalidade mais elegante é o <strong>Adaptive Thinking</strong> (Pensamento Adaptativo). Com ele, a Claude <strong>decide automaticamente</strong> quando e quanto pensar — sem você precisar configurar nada. Perguntas simples recebem respostas rápidas; problemas complexos recebem mais reflexão. Isso torna os modelos Sonnet 4.6 e Opus 4.6 significativamente mais eficientes com tokens do que seus predecessores.</p>
<p>Na prática, isso significa que mesmo deixando o Extended Thinking ativado, perguntas simples não consomem tokens de raciocínio desnecessários. A Claude calibra automaticamente a profundidade de pensamento para cada problema — como um médico experiente que sabe quando um caso precisa de exames complementares e quando o diagnóstico clínico é suficiente.</p>
<p>Existe também o controle de <strong>Effort</strong> (Esforço), que permite ajustar manualmente a profundidade de raciocínio em três níveis: <em>low</em> (respostas rápidas), <em>medium</em> (equilíbrio) e <em>high</em> (raciocínio máximo). É útil quando você sabe exatamente o quanto de reflexão a tarefa exige.</p>
    `,
  },
  {
    id: "rate-limits",
    title: "4. Rate Limits e Economia de Tokens",
    content: `
<p>O <strong>rate limit</strong> é o teto de tokens que você pode usar em uma janela de tempo. Cada modelo consome tokens de forma diferente: Haiku é o mais leve, Sonnet é moderado e Opus é o mais pesado — porque raciocina mais profundamente.</p>
<p>A lógica é simples: <strong>usar Opus para uma tarefa que o Haiku resolveria é desperdiçar rate limit sem ganho de qualidade</strong>. O inverso — usar Haiku para algo que precisa de Opus — gera resultados medianos e você acaba refazendo o trabalho.</p>
<p>Dicas práticas para otimizar seu consumo de tokens:</p>
<ul>
<li><strong>Comece pelo Sonnet</strong> — Se o resultado for bom, não precisa escalar para Opus.</li>
<li><strong>Use Haiku para triagem</strong> — Classificar, categorizar e filtrar antes de análises profundas.</li>
<li><strong>Aproveite o Adaptive Thinking</strong> — Deixe a Claude calibrar automaticamente o esforço de raciocínio.</li>
<li><strong>Prefira Markdown a PDFs</strong> — Documentos em Markdown consomem significativamente menos tokens do que PDFs.</li>
<li><strong>Fragmente conversas longas</strong> — Inicie novas conversas para temas diferentes em vez de acumular contexto desnecessário.</li>
<li><strong>Use Projects</strong> — Em vez de colar o mesmo contexto toda vez, salve-o nas Custom Instructions do Project.</li>
</ul>
<p>Os planos Free e Pro têm limites diferentes, e a Anthropic atualiza esses limites periodicamente. O plano Max oferece os limites mais generosos, ideal para quem trabalha com a Claude durante o dia inteiro. Se você atingir seu rate limit, basta aguardar a janela de tempo resetar — ou considerar o upgrade de plano.</p>
    `,
  },
  {
    id: "configuracoes-iniciais",
    title: "5. Configurações Iniciais e Personalização",
    content: `
<p>Antes de mergulhar no uso diário, vale investir alguns minutos nas <strong>configurações iniciais</strong> da Claude. Uma boa configuração inicial elimina a necessidade de repetir contexto em toda nova conversa.</p>
<p><strong>Perfil Pessoal</strong> — Na seção de configurações, você pode informar à Claude quem você é: sua área de atuação, nível de conhecimento e preferências de comunicação. Esse perfil fica salvo e influencia todas as conversas. Por exemplo, se você informa que é "médico anestesiologista com interesse em IA aplicada à saúde", a Claude automaticamente calibra o nível técnico das respostas.</p>
<p><strong>Memória</strong> — A Claude possui um sistema de memória persistente que funciona entre conversas. Diferente da janela de contexto (que é por sessão), a memória persiste e é carregada automaticamente. Você pode pedir para a Claude lembrar ou esquecer informações específicas a qualquer momento. Abordaremos a memória em detalhes no Capítulo 4.</p>
<p><strong>Idioma</strong> — A Claude é multilíngue e se adapta automaticamente ao idioma em que você escreve. Se você escreve em português, ela responde em português. Não é necessário configurar idioma explicitamente, mas você pode especificar preferências nas Custom Instructions de um Project.</p>
<p><strong>Modelo Padrão</strong> — Você pode definir qual modelo será usado por padrão ao iniciar novas conversas. Para a maioria dos usuários, o Sonnet é a melhor escolha como default, com troca manual para Opus em tarefas que exigem raciocínio mais profundo.</p>
<p><strong>Skills e Capabilities</strong> — Nas configurações, você encontra a seção de Skills (funcionalidades especializadas como criação de Word, PowerPoint e PDF) e Capabilities (Web Search, Vision, etc.). Vale conferir quais estão ativadas para garantir que a Claude tenha todas as ferramentas disponíveis quando você precisar.</p>
<p>Com essas configurações feitas, a Claude passa a funcionar como um assistente que <strong>já conhece seu contexto profissional</strong> — economizando tempo e melhorando a qualidade das respostas desde a primeira mensagem.</p>
    `,
  },
];

// ─── Capítulo 3 ──────────────────────────────────────────

const CAP3_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap3",
    title: "Introdução",
    content: `
<p>Se você já usou a Claude e recebeu um grande bloco de texto como resposta, provavelmente pensou: "Agora preciso copiar isso, colar em outro lugar, formatar..." Os <strong>Artefatos</strong> existem exatamente para eliminar essa fricção.</p>
<p>Os Artefatos são uma das funcionalidades mais inovadoras da Claude — e uma das que mais diferencia a experiência de usar a Claude em comparação com outras ferramentas de IA. Em vez de entregar respostas como texto puro dentro da conversa, a Claude pode criar <strong>produtos prontos para uso</strong> em uma janela dedicada ao lado do chat: páginas web interativas, componentes visuais, documentos formatados, diagramas, código executável e muito mais.</p>
<p>Neste capítulo, você vai entender o que são Artefatos, quando a Claude os cria automaticamente, quais tipos estão disponíveis, como iterar e versionar seus outputs, e como outras funcionalidades de formatação — como Structured Outputs, Vision e suporte a PDF — complementam o trabalho com a Claude.</p>
    `,
  },
  {
    id: "o-que-sao-artefatos",
    title: "1. O que são Artefatos",
    content: `
<p>Artefatos são <strong>outputs iterativos e autocontidos</strong> que a Claude gera em um painel dedicado ao lado da conversa. A diferença entre uma resposta normal e um artefato é fundamental: a resposta vive dentro do chat e se perde na rolagem; o artefato vive em uma <strong>janela própria</strong>, pode ser visualizado em tempo real, editado, versionado e exportado.</p>
<p>Pense na diferença como a que existe entre um <strong>laudo ditado verbalmente</strong> e um <strong>laudo formatado impresso</strong>. Ambos contêm a mesma informação, mas o segundo é um produto pronto para uso — você pode assinar, arquivar, enviar. O artefato é esse "produto pronto".</p>
<p>A Claude cria artefatos <strong>automaticamente</strong> quando o conteúdo atende a certos critérios:</p>
<ul>
<li><strong>Volume significativo</strong> — Tipicamente acima de 15 linhas de conteúdo. Respostas curtas ficam no chat.</li>
<li><strong>Autocontido</strong> — O conteúdo faz sentido sozinho, sem precisar da conversa ao redor para ser entendido.</li>
<li><strong>Iterável</strong> — É algo que você provavelmente vai querer editar, ajustar ou reutilizar.</li>
<li><strong>Referenciável</strong> — É conteúdo que você vai querer consultar ou usar depois, não apenas ler uma vez.</li>
</ul>
<p>Na prática, quando você pede à Claude para "escrever um resumo de 3 linhas", ela responde no chat. Quando pede para "criar uma página HTML com um formulário de cadastro", ela gera um artefato que você pode visualizar renderizado, editar o código e baixar.</p>
<p>Você não precisa pedir explicitamente por artefatos — a Claude decide automaticamente quando criá-los. Mas pode influenciar: se quer forçar um artefato, peça explicitamente ("crie um artefato com...") ou peça outputs complexos e formatados.</p>
    `,
  },
  {
    id: "tipos-de-artefatos",
    title: "2. Tipos de Artefatos",
    content: `
<p>A variedade de artefatos que a Claude consegue gerar é impressionante. Aqui estão os principais tipos:</p>
<p><strong>Páginas Web (HTML/CSS/JavaScript)</strong> — A Claude pode gerar páginas web completas e interativas. Isso inclui landing pages, formulários, dashboards, calculadoras e até jogos simples. O artefato é renderizado em tempo real no painel, e você pode ver o resultado visual exatamente como apareceria em um navegador. É uma das funcionalidades mais populares para prototipagem rápida.</p>
<p><strong>Componentes React</strong> — Para quem trabalha com desenvolvimento web, a Claude gera componentes React com estado, props e interatividade. Os componentes são renderizados ao vivo no painel de artefatos, permitindo testar a interação antes de integrar ao seu projeto.</p>
<p><strong>Documentos (Markdown e Texto Formatado)</strong> — Resumos, relatórios, artigos, guias — qualquer documento textual substancial é gerado como artefato com formatação rica. Você pode copiar o Markdown ou exportar.</p>
<p><strong>Documentos Word e PowerPoint</strong> — Com as Skills oficiais ativadas, a Claude pode gerar documentos <code>.docx</code> e apresentações <code>.pptx</code> completas, com formatação profissional, que você baixa e usa diretamente no Microsoft Office.</p>
<p><strong>Código</strong> — Blocos extensos de código em qualquer linguagem (Python, JavaScript, TypeScript, SQL, C++, etc.) são gerados como artefatos com syntax highlighting. Você pode copiar, editar ou baixar o arquivo.</p>
<p><strong>Diagramas e Visualizações</strong> — A Claude gera diagramas de fluxo, organogramas, mapas mentais e visualizações de dados usando bibliotecas como Mermaid e D3.js. Os diagramas são renderizados visualmente no painel.</p>
<p><strong>Imagens SVG</strong> — Gráficos vetoriais como ícones, logos, ilustrações simples e infográficos podem ser gerados como SVG — escaláveis e editáveis.</p>
<p><strong>PDFs</strong> — Com a Skill de PDF ativada, a Claude pode gerar documentos PDF formatados diretamente.</p>
    `,
  },
  {
    id: "trabalhando-com-artefatos",
    title: "3. Trabalhando com Artefatos",
    content: `
<p>A verdadeira potência dos artefatos está no <strong>fluxo iterativo</strong>. Um artefato não é um produto final estático — é um ponto de partida que você refina através de conversas.</p>
<p><strong>Iteração</strong> — Depois que a Claude gera um artefato, você pode pedir modificações no chat: "mude a cor do fundo para azul escuro", "adicione uma seção sobre efeitos colaterais", "refatore esse código para usar TypeScript". A Claude atualiza o artefato in-place, mantendo o que já estava bom e modificando apenas o que você pediu.</p>
<p><strong>Versionamento</strong> — Cada modificação cria uma nova versão do artefato. Você pode navegar entre versões anteriores usando as setas no painel, comparando diferentes iterações. É como um "ctrl+Z" visual que funciona entre turnos de conversa.</p>
<p><strong>Visualização em Tempo Real</strong> — Para artefatos de código web (HTML, React), você vê o resultado renderizado instantaneamente. Isso transforma a Claude em uma ferramenta de <strong>prototipagem rápida</strong> — descreva uma interface, veja o resultado, peça ajustes, repita.</p>
<p><strong>Exportação</strong> — Todo artefato pode ser copiado (como texto/código) ou baixado como arquivo. Páginas HTML podem ser abertas diretamente no navegador. Documentos Word e PowerPoint são baixados como arquivos nativos do Office.</p>
<p><strong>Compartilhamento</strong> — Artefatos gerados dentro de Projects podem ser reutilizados em conversas futuras do mesmo projeto, criando um fluxo de trabalho onde outputs de uma sessão alimentam a próxima.</p>
<p>Uma dica importante: <strong>a Claude é melhor quando você itera em vez de tentar o prompt perfeito na primeira tentativa</strong>. Comece com uma versão simples, avalie o artefato gerado, e vá refinando com instruções específicas. Três iterações focadas geralmente produzem resultados melhores do que um prompt gigante tentando cobrir tudo de uma vez.</p>
    `,
  },
  {
    id: "outros-formatos",
    title: "4. Outros Formatos: Structured Outputs, Vision e PDF",
    content: `
<p>Além dos artefatos visuais, a Claude oferece outras funcionalidades avançadas de entrada e saída que complementam o fluxo de trabalho:</p>
<p><strong>Structured Outputs (Saídas Estruturadas)</strong> — Para desenvolvedores e automações, a Claude pode gerar respostas em <strong>JSON com schema</strong> definido. Isso garante que a saída siga uma estrutura previsível — essencial para integrar respostas da Claude em pipelines de dados, APIs e aplicações. Na interface do chat, isso aparece como código formatado; via API, é uma funcionalidade nativa.</p>
<p><strong>Vision (Processamento de Imagens)</strong> — A Claude consegue analisar imagens enviadas no chat: fotografias, screenshots, gráficos, diagramas, documentos escaneados e imagens médicas. Formatos suportados incluem PNG, JPEG, GIF e WebP. Você pode enviar uma imagem e pedir para a Claude descrever, analisar, extrair dados ou até gerar código que reproduza um layout visual.</p>
<p><strong>Suporte a PDF</strong> — A Claude lê PDFs diretamente como input. Você pode enviar artigos científicos, relatórios, manuais e documentos legais, e a Claude processa o conteúdo mantendo a estrutura do documento. Combinado com Projects (Capítulo 6), isso permite criar assistentes especializados que consultam uma biblioteca inteira de PDFs.</p>
<p><strong>Citations (Citações Automáticas)</strong> — Quando a Claude trabalha com documentos fornecidos por você (via upload ou Knowledge Base de Projects), ela pode gerar <strong>citações automáticas</strong> que apontam para o trecho exato do documento original. Isso é fundamental para trabalho acadêmico, jurídico e médico, onde rastreabilidade é essencial.</p>
<p><strong>Web Search e Research</strong> — A Claude pode buscar informações atualizadas na internet via Web Search (busca rápida) ou Research (pesquisa aprofundada que consulta múltiplas fontes). Os resultados são integrados à resposta com citações, permitindo que você verifique as fontes.</p>
<p>A combinação de artefatos visuais com essas funcionalidades de entrada/saída torna a Claude uma ferramenta extraordinariamente versátil. Você pode, por exemplo, enviar um PDF de artigo científico, pedir à Claude para analisar com citações, gerar um resumo como artefato Markdown, e depois criar uma apresentação PowerPoint — tudo na mesma conversa.</p>
    `,
  },
];

// ─── Capítulo 4 ──────────────────────────────────────────

const CAP4_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap4",
    title: "Introdução",
    content: `
<p>Se existe um conceito que separa quem usa a Claude de forma básica de quem realmente entende como extrair o máximo da ferramenta, é o entendimento da <strong>janela de contexto</strong> e da <strong>memória</strong>.</p>
<p>A Claude não "lembra" de tudo para sempre. Ela opera dentro de uma janela de informação finita — e tudo que está dentro dessa janela compete pelo mesmo espaço: suas instruções, os documentos enviados, o histórico da conversa e a resposta sendo gerada. Quando esse espaço acaba, informação se perde.</p>
<p>Ao mesmo tempo, a Claude possui um sistema de <strong>memória persistente</strong> que funciona entre conversas — uma funcionalidade separada da janela de contexto que permite à Claude lembrar de preferências, perfil profissional e padrões que funcionaram bem.</p>
<p>Neste capítulo, você vai entender como essas duas engrenagens funcionam, quais são seus limites, e como gerenciá-las para manter a qualidade das suas interações — especialmente em conversas longas e workflows complexos.</p>
    `,
  },
  {
    id: "janela-de-contexto",
    title: "1. O que é a Janela de Contexto",
    content: `
<p>A <strong>janela de contexto</strong> (<em>context window</em>) é a quantidade máxima de informação que a Claude consegue "enxergar" em uma única interação. Pense nela como a <strong>memória de trabalho</strong> do modelo — tudo que está dentro da janela, a Claude processa; tudo que está fora, ela simplesmente não vê.</p>
<p>A Claude possui uma das maiores janelas de contexto do mercado: <strong>200K tokens</strong> como padrão, com <strong>1 milhão de tokens em beta</strong> para os modelos mais recentes. Para ter uma ideia do que isso significa: 200K tokens equivalem a aproximadamente <strong>150.000 palavras</strong> — o tamanho de dois a três livros inteiros.</p>
<p>Mas aqui está o ponto crucial que a maioria dos usuários não percebe: a janela de contexto é <strong>compartilhada</strong> entre todos os elementos da conversa. Tudo compete pelo mesmo espaço:</p>
<ul>
<li><strong>System prompt</strong> — As instruções do Project ou do sistema.</li>
<li><strong>Knowledge Base</strong> — Documentos carregados via Project.</li>
<li><strong>Histórico da conversa</strong> — Todas as mensagens trocadas (suas e da Claude).</li>
<li><strong>Arquivos enviados</strong> — PDFs, imagens e documentos anexados no chat.</li>
<li><strong>A resposta sendo gerada</strong> — O output da Claude também consome tokens da janela.</li>
</ul>
<p>Isso significa que, em uma conversa longa com muitos documentos anexados, o espaço disponível para o raciocínio e a resposta da Claude diminui progressivamente. É como uma mesa de cirurgia: quanto mais instrumental você coloca nela, menos espaço livre sobra para trabalhar.</p>
    `,
  },
  {
    id: "compaction",
    title: "2. Compaction — Quando a Janela Fica Cheia",
    content: `
<p>O que acontece quando uma conversa se aproxima do limite da janela de contexto? A Claude utiliza um mecanismo chamado <strong>Compaction</strong> (Compactação).</p>
<p>A Compaction funciona assim: quando a conversa fica longa demais, a Claude automaticamente <strong>comprime as mensagens mais antigas</strong>, mantendo um resumo do que foi discutido em vez do texto completo. As mensagens mais recentes são preservadas integralmente, enquanto as mais antigas são condensadas.</p>
<p>Na prática, isso significa que:</p>
<ul>
<li>As <strong>últimas mensagens</strong> da conversa estão sempre intactas e com total fidelidade.</li>
<li>O <strong>início da conversa</strong> pode perder detalhes à medida que é comprimido.</li>
<li>Instruções do <strong>system prompt</strong> (Custom Instructions do Project) são preservadas com prioridade — elas não são comprimidas.</li>
</ul>
<p>Para o usuário, a Compaction é transparente — você não percebe quando ela acontece. Mas é importante saber que ela existe para entender por que, em conversas muito longas, a Claude pode "esquecer" detalhes mencionados no início.</p>
<p><strong>Dica prática:</strong> Se uma informação é crítica e precisa persistir durante toda a conversa, coloque-a nas Custom Instructions do Project (Capítulo 6) em vez de mencioná-la apenas no chat. As instruções do Project têm prioridade e não são comprimidas.</p>
    `,
  },
  {
    id: "memoria-da-claude",
    title: "3. Memória Persistente",
    content: `
<p>A <strong>Memória</strong> da Claude é um sistema completamente separado da janela de contexto. Enquanto a janela de contexto é por sessão (cada conversa nova começa "vazia"), a memória <strong>persiste entre conversas e entre Projects</strong>.</p>
<p>Pense na diferença assim: a janela de contexto é como a memória RAM de um computador (apaga quando desliga); a memória persistente é como o disco rígido (permanece mesmo após reiniciar).</p>
<p>A Claude pode memorizar automaticamente ou por solicitação:</p>
<ul>
<li><strong>Quem você é</strong> — Profissão, área de atuação, nível de expertise, interesses.</li>
<li><strong>Como você prefere se comunicar</strong> — Tom, nível de detalhe, idioma, formato preferido de resposta.</li>
<li><strong>Projetos em andamento</strong> — O que você está trabalhando, deadlines, contexto de trabalho.</li>
<li><strong>Padrões validados</strong> — Abordagens que funcionaram bem e que devem ser repetidas.</li>
<li><strong>Correções</strong> — Feedback que você deu sobre respostas anteriores para evitar erros recorrentes.</li>
</ul>
<p>Você pode gerenciar a memória de forma ativa:</p>
<ul>
<li><strong>"Lembre que..."</strong> — Pede à Claude para salvar uma informação específica.</li>
<li><strong>"Esqueça que..."</strong> — Pede à Claude para remover uma memória.</li>
<li><strong>Configurações > Memória</strong> — Na interface, você pode visualizar e gerenciar todas as memórias salvas.</li>
</ul>
<p>Uma distinção importante: a memória persiste <strong>entre Projects</strong> — ela é sobre <em>você</em> como usuário, não sobre um projeto específico. Já as Custom Instructions de um Project são contexto <em>dentro</em> daquele workspace. Ambas se complementam: a memória garante que a Claude conheça seu perfil; as Custom Instructions garantem que ela saiba o que fazer naquele projeto específico.</p>
    `,
  },
  {
    id: "tokens-e-economia",
    title: "4. Entendendo Tokens e Economia de Contexto",
    content: `
<p>Tokens são a <strong>unidade funcional</strong> que a Claude usa para processar texto. Cada palavra é dividida em um ou mais tokens — em inglês, a média é ~1,3 tokens por palavra; em português, ~1,5 tokens por palavra devido aos acentos e caracteres especiais.</p>
<p>Entender tokens importa porque eles determinam duas coisas: <strong>quanto cabe na janela de contexto</strong> e <strong>quanto você consome do seu rate limit</strong>.</p>
<p>Aqui estão referências práticas de consumo:</p>
<ul>
<li>Uma página de texto (~500 palavras) ≈ <strong>~750 tokens</strong></li>
<li>Um artigo científico de 10 páginas ≈ <strong>~7.500 tokens</strong></li>
<li>Um PDF de 50 páginas ≈ <strong>~40.000 tokens</strong> (PDFs consomem mais por causa da formatação)</li>
<li>O mesmo conteúdo em Markdown ≈ <strong>~25.000 tokens</strong> (Markdown é mais eficiente)</li>
</ul>
<p>Estratégias práticas para economizar tokens e manter qualidade:</p>
<ul>
<li><strong>Prefira Markdown a PDF</strong> — O mesmo conteúdo em Markdown consome significativamente menos tokens do que em PDF.</li>
<li><strong>Recorte documentos</strong> — Se apenas uma seção do documento é relevante, envie só essa seção em vez do documento inteiro.</li>
<li><strong>Fragmente tarefas complexas</strong> — Em vez de uma conversa gigante, divida em etapas menores com conversas específicas.</li>
<li><strong>Use Projects</strong> — Custom Instructions e Knowledge Base persistem sem reconsumir tokens a cada mensagem.</li>
<li><strong>Nomeie arquivos de forma descritiva</strong> — A Claude usa os nomes dos arquivos para entender o contexto antes de abri-los, economizando processamento.</li>
</ul>
    `,
  },
  {
    id: "boas-praticas",
    title: "5. Boas Práticas para Conversas Longas",
    content: `
<p>Conversas longas são inevitáveis quando você está trabalhando em algo complexo — mas exigem uma gestão consciente do contexto para manter a qualidade das respostas.</p>
<p><strong>1. Inicie conversas novas para temas diferentes.</strong> Cada conversa acumula histórico que consome a janela de contexto. Se você está alternando entre temas completamente diferentes (ex.: estudar farmacologia pela manhã e escrever um relatório à tarde), use conversas separadas. Isso mantém cada janela limpa e focada.</p>
<p><strong>2. Resuma o contexto periodicamente.</strong> Em conversas longas, faça um "checkpoint": peça à Claude para resumir o que foi discutido até agora e o que falta fazer. Isso ajuda tanto você quanto a Claude a manterem o fio da meada, especialmente após a Compaction ter comprimido mensagens antigas.</p>
<p><strong>3. Use Projects como base persistente.</strong> Em vez de repetir instruções e contexto em toda conversa, configure um Project com Custom Instructions detalhadas e uma Knowledge Base relevante. Cada nova conversa dentro do Project herda esse contexto automaticamente — sem consumir tokens adicionais repetidamente.</p>
<p><strong>4. Comece amplo, depois afunile.</strong> Um padrão eficaz é começar pedindo uma visão geral do tema, depois ir aprofundando tópico por tópico em mensagens subsequentes. Isso garante que a Claude primeiro mapeia o território (consumindo pouco contexto) e depois aprofunda onde necessário (usando a janela de forma direcionada).</p>
<p><strong>5. Peça para a Claude planejar antes de executar.</strong> Para tarefas complexas, peça primeiro um plano de ação. Revise o plano. Depois peça a execução etapa por etapa. Isso evita que a Claude gaste tokens gerando outputs extensos que não eram o que você queria, e dá pontos de controle para corrigir o curso.</p>
<p><strong>6. Evite conversas "infinitas".</strong> Se uma conversa já tem dezenas de mensagens e você percebe que a Claude está "esquecendo" informações do início, é sinal de que a Compaction está atuando intensamente. Nesse ponto, vale iniciar uma nova conversa com um resumo do que foi decidido.</p>
    `,
  },
];

// ─── Capítulo 5 ──────────────────────────────────────────

const CAP5_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap5",
    title: "Introdução",
    content: `
<p>Nos capítulos anteriores, você conheceu a Claude, seus modelos, artefatos e como funciona a janela de contexto. Agora chegamos ao capítulo que, sozinho, pode transformar completamente a qualidade das suas interações: <strong>Engenharia de Prompt</strong>.</p>
<p>Engenharia de Prompt é a prática de <strong>projetar instruções eficazes</strong> para sistemas de IA. Apesar do nome rebuscado, os princípios são baseados em algo que você já faz naturalmente: comunicação eficaz entre seres humanos. A diferença é que, com a IA, a qualidade da instrução determina diretamente a qualidade da resposta — não existe "entrelinha" nem "bom senso implícito".</p>
<p>Existe um abismo entre alguém que usa a Claude e recebe respostas medianas e alguém que extrai resultados de nível profissional da mesma ferramenta. Esse abismo raramente tem a ver com o modelo escolhido. Tem a ver com a <strong>qualidade da instrução dada</strong>.</p>
<p>Neste capítulo, você vai aprender os princípios fundamentais recomendados pela Anthropic, uma estrutura prática para construir prompts (PCTF), técnicas avançadas como Chain-of-Thought e XML tags, e o framework de Fluência em IA. Ao final, você não vai apenas "fazer perguntas" — vai <strong>arquitetar intenções</strong>.</p>
    `,
  },
  {
    id: "principios-fundamentais",
    title: "1. Princípios para um Prompt Eficaz",
    content: `
<p>A documentação oficial da Anthropic e as melhores práticas de prompting convergem em quatro pilares fundamentais. Domine esses quatro princípios e você já estará à frente da maioria dos usuários.</p>
<p><strong>Especificidade</strong> — Diga exatamente o que quer, não apenas o tema. Compare dois prompts:</p>
<ul>
<li><em>Ruim:</em> "Resuma este artigo."</li>
<li><em>Bom:</em> "Resuma este artigo destacando o contexto geral, o objetivo do estudo, a metodologia e os resultados encontrados. Use tópicos e subtópicos, com palavras-chave em negrito. A linguagem deve ser clara e didática."</li>
</ul>
<p>A diferença não é de tamanho — é de <strong>arquitetura</strong>. O segundo prompt define quem deve responder, para quem, em qual nível de profundidade e com qual estrutura de saída.</p>
<p><strong>Contexto</strong> — Forneça informações de fundo quando relevante. Qual é o objetivo do projeto? Qual o público-alvo? Quem é você e o que está fazendo? A Claude não sabe nada sobre você até que você conte — quanto mais contexto relevante, mais personalizada e útil será a resposta.</p>
<p><strong>Clareza</strong> — A linguagem deve ser simples, direta e sem redundância. O texto deve ser organizado em blocos com delimitadores claros. A Anthropic recomenda especificamente o uso de <strong>XML tags</strong> e <strong>Markdown headings</strong> para separar seções do prompt. Pense no prompt não como uma mensagem de texto, mas como um <strong>documento estruturado</strong>.</p>
<p><strong>Detalhe</strong> — Forneça o máximo de detalhes sem perder clareza e especificidade. Detalhe e clareza não são opostos — um prompt bem detalhado pode ser perfeitamente claro se for bem organizado. A regra é: se um detalhe é importante para o resultado, ele deve estar no prompt.</p>
    `,
  },
  {
    id: "estrutura-pctf",
    title: "2. A Estrutura PCTF — Construindo Prompts do Zero",
    content: `
<p>Quando você está partindo do zero e não sabe como estruturar um prompt, o framework <strong>PCTF</strong> é o ponto de partida mais eficaz. Ele organiza a instrução em quatro blocos:</p>
<p><strong>P — Persona (Role Prompting)</strong></p>
<p>Defina quem a Claude deve ser neste contexto. A Anthropic demonstra que atribuir um papel específico melhora significativamente a qualidade das respostas, porque orienta o modelo sobre qual "base de conhecimento" priorizar.</p>
<ul>
<li><em>Exemplo:</em> "Você é um professor de farmacologia especializado em anestésicos venosos, com 20 anos de experiência em ensino para residentes."</li>
</ul>
<p><strong>C — Contexto</strong></p>
<p>Forneça as informações de fundo que a Claude precisa para entender a situação. Quem é o público? Qual o objetivo? Onde esse output será usado?</p>
<ul>
<li><em>Exemplo:</em> "O público são residentes de anestesiologia no primeiro ano. Este resumo será usado como material de revisão antes de uma prova prática."</li>
</ul>
<p><strong>T — Tarefa</strong></p>
<p>Defina a ação de forma clara, direta e no <strong>imperativo</strong>. Use verbos de ação: escreva, analise, compare, resuma, crie, liste, explique.</p>
<ul>
<li><em>Exemplo:</em> "Crie um resumo comparativo dos principais anestésicos venosos (propofol, etomidato, ketamina, midazolam), cobrindo mecanismo de ação, indicações, contraindicações e doses."</li>
</ul>
<p><strong>F — Formato de Saída</strong></p>
<p>Especifique como quer a resposta: tópicos, tabela, texto corrido, código, Markdown, artefato. Sem especificar formato, a Claude decide por conta própria — o que nem sempre coincide com o que você precisa.</p>
<ul>
<li><em>Exemplo:</em> "Organize em uma tabela com colunas: Fármaco | Mecanismo | Indicações | Contraindicações | Dose de Indução. Abaixo da tabela, adicione notas clínicas em tópicos."</li>
</ul>
<p>Um prompt PCTF bem construído, mesmo simples, já supera 90% das interações genéricas com IA.</p>
    `,
  },
  {
    id: "xml-tags",
    title: "3. XML Tags — A Ferramenta Secreta da Anthropic",
    content: `
<p>Se existe uma técnica que a Anthropic recomenda acima de todas as outras para organizar prompts, são as <strong>XML tags</strong>. A Claude foi treinada para processar instruções delimitadas por tags de forma especialmente eficaz.</p>
<p>XML tags são marcadores simples que separam blocos de informação:</p>
<blockquote>
<p><code>&lt;contexto&gt;</code>Sou médico anestesiologista estudando para a prova de TSA.<code>&lt;/contexto&gt;</code></p>
<p><code>&lt;tarefa&gt;</code>Crie um resumo sobre bloqueios de plexo braquial.<code>&lt;/tarefa&gt;</code></p>
<p><code>&lt;formato&gt;</code>Use tópicos com palavras-chave em negrito. Inclua indicações, técnica e complicações.<code>&lt;/formato&gt;</code></p>
</blockquote>
<p>Por que XML tags funcionam tão bem?</p>
<ul>
<li><strong>Hierarquia clara</strong> — A Claude identifica imediatamente onde começa e termina cada bloco de instrução.</li>
<li><strong>Sem ambiguidade</strong> — Não há dúvida sobre o que é contexto, o que é tarefa e o que é formato.</li>
<li><strong>Escalabilidade</strong> — Quanto mais complexo o prompt, mais as tags ajudam a manter organização.</li>
<li><strong>Treinamento específico</strong> — A Claude foi especificamente treinada para reconhecer e priorizar conteúdo dentro de tags XML.</li>
</ul>
<p>Você pode usar qualquer nome de tag que faça sentido: <code>&lt;instrucoes&gt;</code>, <code>&lt;exemplos&gt;</code>, <code>&lt;regras&gt;</code>, <code>&lt;documento&gt;</code>, <code>&lt;saida_esperada&gt;</code>. A Claude entende o propósito pelo nome da tag.</p>
<p>Na prática, combine XML tags com o framework PCTF para prompts complexos. Para prompts simples do dia a dia, linguagem natural direta continua sendo suficiente — XML tags brilham quando o prompt tem múltiplos componentes.</p>
    `,
  },
  {
    id: "tecnicas-avancadas",
    title: "4. Técnicas Avançadas de Prompting",
    content: `
<p>Além dos princípios básicos, existem técnicas avançadas que elevam significativamente a qualidade dos resultados. Estas técnicas são baseadas em pesquisa acadêmica e nas recomendações oficiais da Anthropic:</p>
<p><strong>In-Context Learning (Few-Shot Prompting)</strong> — Forneça exemplos do output desejado diretamente no prompt. A Claude aprende o padrão ao ver exemplos concretos. Se você quer que ela escreva resumos em um formato específico, mostre um resumo pronto naquele formato. Dois a três exemplos geralmente são suficientes — é mais eficaz do que descrever o formato em palavras.</p>
<p><strong>Chain-of-Thought (CoT)</strong> — Peça à Claude para raciocinar passo a passo antes de dar a resposta final. Simples como adicionar "Pense passo a passo antes de responder" ao prompt. Isso melhora drasticamente a qualidade em problemas de lógica, matemática e análise complexa. Com o Extended Thinking ativado, a Claude faz isso automaticamente.</p>
<p><strong>Prompt Chaining (Encadeamento)</strong> — Divida tarefas complexas em etapas menores e encadeadas. Em vez de pedir tudo de uma vez, peça a etapa 1, revise, depois peça a etapa 2 usando o output da etapa 1. Isso dá pontos de controle e melhora a qualidade final.</p>
<p><strong>Meta Prompting</strong> — Use a própria Claude para criar e refinar seus prompts. Descreva o que você quer alcançar e peça: "Crie um prompt otimizado para essa tarefa." A Claude gera prompts melhores do que a maioria dos humanos consegue escrever — é meta, mas funciona.</p>
<p><strong>Step-Back Prompting</strong> — Antes de executar a tarefa, peça à Claude para "dar um passo atrás" e analisar o contexto geral. "Antes de começar, analise os conceitos fundamentais envolvidos nesta tarefa." Isso enriquece a janela de contexto com informação relevante antes da execução.</p>
<p><strong>Processo Iterativo</strong> — Raramente o primeiro prompt gera o resultado perfeito. A engenharia de prompt é um <strong>processo iterativo</strong>: prompt → avaliação → refinamento → novo prompt. Três ciclos de refinamento geralmente produzem resultados melhores do que uma hora investida no "prompt perfeito".</p>
    `,
  },
  {
    id: "fluencia-em-ia",
    title: "5. Fluência em IA — Os 4Ds",
    content: `
<p>Para além das técnicas específicas de prompting, existe um framework mais amplo que define o que significa realmente "dominar" o uso de IA. Os <strong>4Ds para Fluência em IA</strong>, desenvolvidos pelos professores Rick Dakan (Ringling College) e Joseph Feller (University College Cork), identificam quatro competências essenciais:</p>
<p><strong>Delegação</strong> — A capacidade de decidir <strong>qual trabalho deve ser feito por humanos</strong> e qual pela IA. Nem tudo deve ser delegado para a IA, e saber fazer essa triagem é uma habilidade em si. Inclui compreender os objetivos, as capacidades da IA e tomar decisões estratégicas sobre a colaboração.</p>
<p><strong>Descrição</strong> — A capacidade de <strong>comunicar eficazmente</strong> com sistemas de IA. É aqui que entram todas as técnicas de prompting: definir resultados, orientar processos e especificar comportamentos desejados. É a competência mais técnica das quatro — e a que mais se beneficia de prática deliberada.</p>
<p><strong>Discernimento</strong> — A capacidade de <strong>avaliar criticamente</strong> os resultados da IA. Inclui verificar precisão, identificar alucinações, avaliar adequação ao contexto e reconhecer quando o output precisa de revisão humana. Sem discernimento, você aceita qualquer resposta como verdade — e a IA pode errar.</p>
<p><strong>Diligência</strong> — A capacidade de utilizar a IA de <strong>forma responsável e ética</strong>. Inclui transparência sobre o uso de IA, responsabilidade pelo trabalho assistido por IA e escolhas ponderadas sobre quais dados compartilhar com o sistema.</p>
<p>Essas quatro competências se complementam: a Delegação decide o que dar para a IA; a Descrição garante que a instrução seja eficaz; o Discernimento valida o resultado; e a Diligência mantém todo o processo ético e responsável. Domine as quatro e você terá verdadeira <strong>fluência em IA</strong> — não apenas proficiência técnica.</p>
    `,
  },
];

// ─── Capítulo 6 ──────────────────────────────────────────

const CAP6_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap6",
    title: "Introdução",
    content: `
<p>Até agora, cada conversa com a Claude começava "do zero" — você precisava re-enviar documentos, re-explicar contexto, re-estabelecer tom e regras. É como trabalhar com um assistente brilhante que esquece tudo ao final de cada dia.</p>
<p>O <strong>Claude Projects</strong> resolve esse problema de forma elegante. Projects são <strong>workspaces persistentes</strong> que contêm sua própria base de conhecimento, instruções customizadas e histórico de conversas — tudo isolado e organizado por contexto de trabalho.</p>
<p>Com Projects, a Claude já "conhece" seu contexto antes de você digitar a primeira mensagem. Não é exagero dizer que Projects é a funcionalidade que transforma a Claude de um chatbot inteligente em um <strong>assistente especializado</strong>.</p>
<p>Neste capítulo, você vai aprender a anatomia de um Project, como funciona o RAG automático, os princípios para criar projetos eficazes, como estruturar Custom Instructions profissionais e como usar Projects para criar verdadeiros assistentes de IA personalizados.</p>
    `,
  },
  {
    id: "o-que-sao-projects",
    title: "1. O que são Claude Projects",
    content: `
<p>Um <strong>Project</strong> no Claude é um espaço de trabalho persistente que permite configurar um <strong>contexto fixo</strong> carregado automaticamente em toda conversa iniciada dentro dele. Na prática, é como criar um "escritório especializado" onde a Claude já sabe quem você é, o que está fazendo e como deve se comportar.</p>
<p>Cada Project é composto por <strong>4 componentes configuráveis</strong>:</p>
<p><strong>1. Nome e Descrição</strong> — Identificador humano para organização. A descrição é informativa e não influencia o comportamento da Claude — serve apenas para você lembrar do propósito do projeto.</p>
<p><strong>2. Custom Instructions (Instruções Personalizadas)</strong> — Este é o componente mais importante. É um <strong>system prompt persistente</strong> que será injetado no início de toda conversa do projeto. Aqui você define: quem a Claude é neste contexto, quem você é, como ela deve se comportar, qual o workflow a seguir, quais as regras e restrições, e qual o formato de saída esperado.</p>
<p>As Custom Instructions funcionam como o <code>system prompt</code> da API: tudo que você colocar ali será tratado pela Claude como instrução de alta prioridade, antes de qualquer mensagem do usuário.</p>
<p><strong>3. Knowledge Base (Base de Conhecimento)</strong> — Você pode fazer upload de documentos que ficam disponíveis para a Claude consultar em todas as conversas do projeto. Formatos suportados incluem PDF, DOCX, CSV, TXT, HTML e Markdown, com limite de até 30MB por arquivo. É aqui que a mágica do RAG acontece.</p>
<p><strong>4. Chat History (Histórico de Conversas)</strong> — Todas as conversas dentro de um Project ficam agrupadas e organizadas, separadas de outros Projects. Você pode ter múltiplas conversas paralelas, todas compartilhando o mesmo contexto base.</p>
<p><strong>Isolamento:</strong> Cada Project opera de forma independente — um projeto de trabalho não consegue acessar informações de um projeto pessoal. Isso é uma escolha de design para manter contextos limpos e seguros.</p>
    `,
  },
  {
    id: "rag-automatico",
    title: "2. RAG Automático — A Mágica por Trás dos Panos",
    content: `
<p>Uma das características que mais diferencia o Claude Projects é o <strong>RAG automático</strong> (Retrieval-Augmented Generation). Quando a Knowledge Base do seu Project se aproxima do limite da janela de contexto, a Claude automaticamente ativa o modo RAG para expandir a capacidade em até <strong>10x</strong>, mantendo a qualidade das respostas.</p>
<p>Na prática, funciona assim:</p>
<ul>
<li><strong>Abaixo do limite de contexto (200K tokens):</strong> todo o conteúdo da Knowledge Base é carregado diretamente na memória da Claude (<em>in-context</em>). Máxima qualidade, como ter todos os documentos abertos na sua mesa.</li>
<li><strong>Acima do limite:</strong> em vez de carregar todo o conteúdo de uma vez, a Claude busca e recupera apenas as informações mais relevantes para responder cada pergunta específica. É como ter um prontuário eletrônico com busca semântica — o volume é maior, mas o sistema encontra exatamente o que precisa.</li>
</ul>
<p>A transição entre os dois modos é <strong>automática e transparente</strong> — você não precisa configurar nada. Simplesmente adicione documentos à Knowledge Base e a Claude gerencia o acesso inteligentemente.</p>
<p><strong>Por que isso importa?</strong> Imagine que você está criando um assistente de estudos para anestesiologia e quer incluir 100 PDFs de capítulos de livros e artigos. Sem RAG, você seria limitado ao que cabe em 200K tokens (~300 páginas). Com RAG, você pode ter uma biblioteca inteira e a Claude consulta os trechos relevantes para cada pergunta.</p>
<p>O RAG expandido está disponível nos planos pagos (Pro, Max, Team, Enterprise). No plano gratuito, você está limitado ao modo in-context.</p>
    `,
  },
  {
    id: "custom-instructions",
    title: "3. Custom Instructions — O System Prompt do Projeto",
    content: `
<p>As Custom Instructions são o coração de um Project. Elas definem como a Claude se comporta dentro daquele workspace — e uma boa Custom Instruction é a diferença entre a Claude genérica e a Claude especialista.</p>
<p>A estrutura recomendada para Custom Instructions profissionais segue cinco blocos:</p>
<p><strong>Identidade</strong> — Quem a Claude é neste projeto. Defina o papel, a especialidade e o nível de expertise esperado.</p>
<blockquote><p>"Você é um especialista em farmacologia de anestésicos, com foco em ensino para residentes de primeiro ano."</p></blockquote>
<p><strong>Contexto</strong> — Sobre o que é o projeto e qual o objetivo. Dê informações sobre o público, o escopo e o propósito.</p>
<blockquote><p>"Este projeto produz material de revisão para a prova de TSA. O público são residentes R1-R3 de anestesiologia."</p></blockquote>
<p><strong>Workflow/Pipeline</strong> — As etapas que a Claude deve seguir. Defina o fluxo de trabalho com passos claros, pontos de pausa e critérios de qualidade.</p>
<blockquote><p>"Para cada tema: 1) Faça um panorama geral em tópicos. 2) Aguarde minha aprovação. 3) Aprofunde cada tópico. 4) Gere 5 questões de revisão."</p></blockquote>
<p><strong>Regras</strong> — Comportamentos obrigatórios e proibidos. O que fazer e o que não fazer.</p>
<blockquote><p>"Use exclusivamente as referências da Knowledge Base. Se a informação não constar nas referências, diga explicitamente."</p></blockquote>
<p><strong>Formato de Saída</strong> — Como as respostas devem ser estruturadas.</p>
<blockquote><p>"Respostas em tópicos e subtópicos, palavras-chave em negrito, linguagem didática. Ao final de cada tema, inclua um diagrama resumo."</p></blockquote>
<p>Use <strong>Markdown headings</strong> ou <strong>XML tags</strong> para separar cada bloco nas Custom Instructions. A Claude processa melhor instruções com hierarquia clara.</p>
    `,
  },
  {
    id: "principios-bom-projeto",
    title: "4. Princípios de um Bom Projeto",
    content: `
<p>Seis princípios fundamentais para criar Projects eficazes, baseados na documentação oficial da Anthropic e em práticas validadas:</p>
<p><strong>1. Especificidade > Generalidade</strong> — Um projeto eficaz tem escopo definido. Quanto mais específico o papel e o workflow, melhor a Claude performa. Um projeto "Assistente Geral" funciona pior do que um projeto "Pipeline de Produção de Ebooks MedTech". Crie projetos separados para contextos diferentes em vez de tentar colocar tudo num projeto só.</p>
<p><strong>2. Golden Examples na Knowledge Base</strong> — Um dos usos mais poderosos da Knowledge Base é subir <strong>exemplos do output ideal</strong>. Se você quer que a Claude produza capítulos num formato específico, suba um capítulo já finalizado como referência. A Claude aprende o padrão implicitamente ao ver o exemplo concreto — isso é muito mais eficaz do que descrever o formato em texto.</p>
<p><strong>3. Economia de Tokens</strong> — A janela de contexto é compartilhada entre Custom Instructions + Knowledge Base + histórico. Boas práticas: instruções concisas e diretas (evite repetições), apenas arquivos necessários para aquele projeto, Markdown sobre PDFs (consome menos tokens), e recortes de trechos relevantes em vez de documentos inteiros.</p>
<p><strong>4. Checkpoints e Pontos de Pausa</strong> — Para workflows multi-etapa, defina pontos de pausa explícitos nas instruções. Sem isso, a Claude tende a executar tudo de uma vez, o que pode gerar outputs longos e sem oportunidade de revisão intermediária.</p>
<p><strong>5. Nomes Descritivos para Arquivos</strong> — A Claude usa os nomes dos arquivos na Knowledge Base para entender o contexto antes de abri-los. Nomeie de forma descritiva: "Cap1-Farmacologia-Propofol.md" é muito melhor que "doc1.pdf".</p>
<p><strong>6. Conversas Separadas por Tema</strong> — Dentro de um Project, crie conversas diferentes para temas diferentes. Cada conversa herda as Custom Instructions e a Knowledge Base, mas mantém seu próprio histórico limpo. Isso evita que outputs de um tema poluam o contexto de outro.</p>
    `,
  },
  {
    id: "projeto-pratico",
    title: "5. Montando um Projeto na Prática",
    content: `
<p>Vamos aplicar tudo em um exemplo concreto: criar um <strong>Assistente de Estudos</strong> para qualquer área.</p>
<p><strong>Antes de abrir a Claude:</strong></p>
<ol>
<li><strong>Defina as fontes</strong> — Baixe os documentos que serão a base de conhecimento: capítulos de livros, artigos, guidelines, anotações. Organize em uma pasta no seu computador.</li>
<li><strong>Pense no workflow</strong> — Como você quer estudar? Ciclos de leitura e exercícios? Resumos seguidos de questões? Flashcards? Defina o fluxo antes de criar o projeto.</li>
<li><strong>Defina o formato</strong> — Como quer que as respostas sejam estruturadas? Tópicos? Tabelas? Mapas mentais?</li>
</ol>
<p><strong>Na Claude:</strong></p>
<ol>
<li><strong>Crie o Project</strong> com um nome descritivo: "Estudos TSA — Farmacologia".</li>
<li><strong>Escreva as Custom Instructions</strong> seguindo a estrutura dos 5 blocos (identidade, contexto, workflow, regras, formato).</li>
<li><strong>Suba os documentos</strong> para a Knowledge Base. Priorize Markdown e TXT sobre PDFs.</li>
<li><strong>Inicie a primeira conversa</strong> pedindo um panorama geral do conteúdo na Knowledge Base.</li>
<li><strong>Itere</strong> — Peça aprofundamentos tópico por tópico, gere questões, crie flashcards.</li>
</ol>
<p><strong>Dica avançada:</strong> você pode pedir para a própria Claude escrever as Custom Instructions. Descreva o que você quer que o projeto faça, o público, as fontes e o formato desejado — e peça: "Com base nisso, escreva as Custom Instructions otimizadas para este projeto." A Claude gera system prompts excelentes para si mesma.</p>
<p>Outro ponto importante: Projects permitem trabalho <strong>colaborativo</strong>. Nos planos Team e Enterprise, você pode compartilhar projetos com colegas, com permissões de "Can Use" (usar sem editar) ou "Can Edit" (usar e modificar). Isso permite que toda uma equipe use o mesmo assistente especializado com contexto consistente.</p>
    `,
  },
];

// ─── Capítulo 7 ──────────────────────────────────────────

const CAP7_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap7",
    title: "Introdução",
    content: `
<p>Nos capítulos anteriores, você aprendeu a usar a Claude de forma eficaz: modelos, artefatos, janela de contexto, engenharia de prompt e Projects. Cada uma dessas ferramentas melhora sua interação com a IA. Mas ainda existe um problema: <strong>repetição</strong>.</p>
<p>Sabe aquele prompt de 500 palavras que você montou com carinho, testou, refinou e ficou perfeito? Na próxima vez que precisar dele, você terá que colar tudo de novo. E se esquecer de um detalhe? A qualidade cai. Se quiser compartilhar com um colega? Precisa enviar o texto cru e torcer para que ele use direito.</p>
<p>As <strong>Skills</strong> resolvem isso de forma elegante. Uma Skill é essencialmente aquele prompt perfeito empacotado em um módulo reutilizável que a Claude <strong>ativa automaticamente</strong> quando detecta que é relevante para a tarefa. Você ensina uma vez, e a Claude reproduz para sempre — com a mesma qualidade, toda vez.</p>
<p>Neste capítulo, você vai entender de onde vem o conceito de Skills, como elas funcionam por dentro (a arquitetura de 3 níveis é fascinante), a diferença entre Skills e outras formas de customização, como criar as suas, e 5 exemplos práticos de aplicação. Ao final, você terá um novo superpoder: ensinar a Claude a trabalhar do <em>seu</em> jeito.</p>
    `,
  },
  {
    id: "origem-conceito",
    title: "1. De Onde Vem o Conceito de Skill",
    content: `
<p>O conceito de Skills nasce de um problema fundamental da IA generativa: <strong>como dar expertise especializada a um modelo genérico sem sobrecarregá-lo</strong>.</p>
<p>Quando você coloca instruções no system prompt de uma conversa ou nas Custom Instructions de um Project, elas são carregadas <strong>sempre</strong>, em <strong>toda mensagem</strong>, consumindo tokens da janela de contexto. Isso funciona bem quando você tem poucas instruções. Mas imagine que você quer que a Claude saiba criar apresentações, gerar PDFs, analisar dados médicos, escrever roteiros de vídeo e formatar documentos acadêmicos — tudo ao mesmo tempo. Se todas essas instruções fossem carregadas juntas, ocupariam uma parte enorme da janela de contexto e deixariam pouco espaço para a conversa real.</p>
<p>A solução da Anthropic foi inspirada em como profissionais humanos trabalham: um cirurgião não mantém todos os protocolos de todas as especialidades na memória ativa. Ele tem <strong>conhecimento especializado</strong> que acessa <strong>sob demanda</strong> — quando precisa de um protocolo de anestesia regional, consulta o manual específico; quando precisa de farmacologia, consulta outro.</p>
<p>Skills seguem exatamente essa filosofia: são <strong>pacotes modulares de expertise</strong> que a Claude <strong>descobre e carrega sob demanda</strong>. Ao invés de carregar tudo o tempo todo, a Claude mantém apenas um índice leve de quais Skills existem e busca as instruções completas apenas quando a tarefa exige.</p>
<p>Essa abordagem tem um nome técnico: <strong>Progressive Disclosure</strong> (Revelação Progressiva). A informação é entregue em camadas — primeiro os metadados (~100 tokens), depois as instruções (~5.000 tokens), depois recursos adicionais (sob demanda). O resultado é que você pode ter <strong>dezenas de Skills instaladas</strong> sem penalidade significativa de contexto.</p>
    `,
  },
  {
    id: "o-que-sao-skills",
    title: "2. O que são Skills — Definição Técnica",
    content: `
<p>Na documentação oficial da Anthropic, <strong>Agent Skills</strong> são definidas como "capacidades modulares e reutilizáveis que estendem a funcionalidade do Claude". Cada Skill é um <strong>pacote</strong> que contém instruções, metadados e recursos opcionais (scripts, templates) que o Claude usa automaticamente quando detecta que são relevantes.</p>
<p>Na prática, uma Skill é uma <strong>pasta no filesystem</strong> contendo pelo menos um arquivo chamado <code>SKILL.md</code> com instruções em Markdown e um cabeçalho YAML (frontmatter) com nome e descrição.</p>
<p>A distinção mais importante para entender Skills é a diferença entre elas e outras formas de customização no ecossistema Claude:</p>
<ul>
<li><strong>Prompt</strong> → Descartável, válido só naquela conversa, sempre ocupa contexto, texto livre.</li>
<li><strong>Custom Instructions (Project)</strong> → Persistente dentro de um Project, sempre carregadas em toda conversa do projeto.</li>
<li><strong>Memória</strong> → Persistente entre conversas e Projects, sobre você como usuário.</li>
<li><strong>Skill</strong> → Reutilizável, persiste entre conversas, carregada <strong>sob demanda</strong>, arquivo estruturado.</li>
</ul>
<p>A vantagem única das Skills é a combinação de <strong>reutilização + carregamento sob demanda</strong>. Nenhum outro recurso do ecossistema oferece os dois simultaneamente. Um prompt é descartável; Custom Instructions são sempre carregadas; a Memória é sobre contexto pessoal. Só Skills oferecem expertise especializada que aparece quando necessário e desaparece quando não é.</p>
    `,
  },
  {
    id: "arquitetura-3-niveis",
    title: "3. Como Funcionam — A Arquitetura de 3 Níveis",
    content: `
<p>A arquitetura interna das Skills é um dos designs mais inteligentes do ecossistema Claude. O conteúdo é carregado em <strong>3 níveis progressivos</strong>, cada um com custo diferente em tokens:</p>
<p><strong>Nível 1 — Metadados (sempre carregados)</strong></p>
<p>O frontmatter YAML do SKILL.md (campos <code>name</code> e <code>description</code>) é carregado no startup e incluído no system prompt. Custo: <strong>~100 tokens por Skill</strong>. Com esse custo mínimo, você pode ter dezenas de Skills instaladas sem penalidade significativa.</p>
<blockquote><p><code>---</code><br><code>name: resumo-artigo-cientifico</code><br><code>description: Cria resumos estruturados de artigos científicos com seções padronizadas (objetivo, metodologia, resultados, conclusão, limitações).</code><br><code>---</code></p></blockquote>
<p><strong>Nível 2 — Instruções (carregadas quando ativadas)</strong></p>
<p>Quando sua mensagem "casa" com a <code>description</code> de uma Skill, a Claude lê o corpo completo do SKILL.md. Só então as instruções entram na janela de contexto. Custo típico: <strong>menos de 5.000 tokens</strong>. O SKILL.md funciona como um índice inteligente que contém as instruções principais e pode apontar para arquivos mais detalhados.</p>
<p><strong>Nível 3 — Recursos e Código (conforme necessário)</strong></p>
<p>Arquivos adicionais dentro da pasta da Skill — Markdowns extras, templates, scripts executáveis — são acessados apenas quando referenciados pelo SKILL.md. Scripts são <strong>executados</strong>, mas o código-fonte <strong>nunca entra no contexto</strong> — só o output. Custo: efetivamente ilimitado (pago apenas quando acessado).</p>
<p>Exemplo de estrutura de diretório de uma Skill completa:</p>
<blockquote>
<p><code>resumo-artigo/</code><br>
<code>├── SKILL.md</code> (instruções principais — Nível 2)<br>
<code>├── FORMATO.md</code> (template de formato — Nível 3)<br>
<code>├── EXEMPLOS.md</code> (golden examples — Nível 3)<br>
<code>└── scripts/</code><br>
<code>&nbsp;&nbsp;&nbsp;&nbsp;└── formatar_citacoes.py</code> (utilitário — Nível 3)</p>
</blockquote>
<p>Na prática, o fluxo funciona assim: (1) No startup, a Claude carrega ~100 tokens de metadados. (2) Quando você pede "resuma este artigo científico", a Claude detecta o match com a description e lê o SKILL.md completo. (3) Se a tarefa exige o template de formato, ela lê o FORMATO.md. Se não, esse arquivo nem é acessado. <strong>Cada recurso é carregado apenas quando necessário.</strong></p>
    `,
  },
  {
    id: "tipos-de-skills",
    title: "4. Tipos de Skills",
    content: `
<p>O ecossistema Claude oferece dois tipos de Skills:</p>
<p><strong>Pre-built Skills (da Anthropic)</strong></p>
<p>A Anthropic oferece 4 Skills oficiais prontas para uso, disponíveis para todos os planos no claude.ai:</p>
<ul>
<li><strong>PowerPoint</strong> (<code>pptx</code>) — Criar apresentações, editar slides, aplicar formatação profissional.</li>
<li><strong>Excel</strong> (<code>xlsx</code>) — Criar planilhas, analisar dados, gerar gráficos.</li>
<li><strong>Word</strong> (<code>docx</code>) — Criar e formatar documentos profissionais.</li>
<li><strong>PDF</strong> (<code>pdf</code>) — Gerar documentos PDF formatados.</li>
</ul>
<p>No claude.ai, essas Skills já funcionam automaticamente — quando você pede para criar uma apresentação, a Claude ativa a Skill de PowerPoint sem que você precise fazer nada.</p>
<p><strong>Custom Skills (criadas por você)</strong></p>
<p>Skills que você cria para empacotar sua própria expertise ou workflows específicos. As possibilidades são ilimitadas — qualquer processo repetitivo que você faz com a Claude pode ser transformado em uma Custom Skill.</p>
<p>Custom Skills podem ser criadas e instaladas de diferentes formas:</p>
<ul>
<li><strong>claude.ai</strong> — Upload como arquivo ZIP em Settings > Features (disponível nos planos Pro, Max, Team, Enterprise).</li>
<li><strong>Claude Code</strong> — Crie diretórios com SKILL.md diretamente no filesystem do projeto.</li>
<li><strong>Claude API</strong> — Upload via endpoints para compartilhamento no workspace.</li>
</ul>
    `,
  },
  {
    id: "quando-usar-skills",
    title: "5. Quando Criar uma Skill",
    content: `
<p>Nem tudo precisa ser uma Skill. Aqui estão os cenários onde Skills fazem mais diferença:</p>
<p><strong>1. Prompt gigante recorrente</strong> — Você investiu tempo criando um prompt complexo que produz resultados excelentes? Se vai usá-lo novamente (mesmo que ocasionalmente), empacote como Skill. Você nunca mais vai precisar lembrar de todos os detalhes ou procurar "aquele prompt" no histórico.</p>
<p><strong>2. Workflow repetitivo</strong> — Se todo mês você gera o mesmo tipo de relatório, análise, resumo ou conteúdo, uma Skill automatiza o processo. A Claude segue o mesmo pipeline toda vez, com a mesma qualidade.</p>
<p><strong>3. Consistência de formato</strong> — Quando o formato de saída precisa ser idêntico sempre — relatórios padronizados, templates de documentos, formatos de conteúdo para redes sociais — a Skill garante que a Claude reproduza o padrão sem variação.</p>
<p><strong>4. Compartilhamento com equipe</strong> — Criou uma forma eficaz de usar a Claude para uma tarefa? Empacote como Skill e distribua para colegas. Toda a equipe passa a usar a Claude do mesmo jeito, com o mesmo nível de qualidade.</p>
<p><strong>5. Expertise de domínio</strong> — Você tem conhecimento especializado sobre como uma tarefa deve ser executada (regras de formatação acadêmica, protocolos médicos, padrões de código, etc.)? Empacote esse conhecimento em uma Skill para que a Claude siga suas regras de domínio automaticamente.</p>
<p>Por outro lado, <strong>não crie uma Skill</strong> quando: o prompt é simples e usado poucas vezes (use texto direto), o contexto muda toda vez (use Custom Instructions de Project), ou a informação é sobre você pessoalmente (use Memória).</p>
    `,
  },
  {
    id: "como-criar-skills",
    title: "6. Como Criar uma Skill — Passo a Passo",
    content: `
<p>Criar uma Custom Skill é surpreendentemente simples. Todo o processo leva poucos minutos:</p>
<p><strong>Passo 1 — Criar uma pasta</strong> com o nome da skill (use kebab-case, sem espaços):</p>
<blockquote><p><code>resumo-artigo-cientifico/</code></p></blockquote>
<p><strong>Passo 2 — Criar o arquivo SKILL.md</strong> dentro da pasta. Este é o único arquivo obrigatório.</p>
<p><strong>Passo 3 — Escrever o frontmatter YAML</strong> (cabeçalho entre <code>---</code>). Dois campos obrigatórios:</p>
<blockquote>
<p><code>---</code><br>
<code>name: resumo-artigo-cientifico</code><br>
<code>description: Cria resumos estruturados de artigos científicos com seções padronizadas: objetivo, metodologia, resultados, conclusão e limitações. Ativada quando o usuário pede para resumir artigos acadêmicos.</code><br>
<code>---</code></p>
</blockquote>
<p>A <code>description</code> é o campo mais importante — é o que a Claude usa para decidir <strong>quando</strong> ativar a Skill. Seja específico sobre o tipo de tarefa e quando a Skill deve ser usada.</p>
<p><strong>Passo 4 — Escrever as instruções</strong> no corpo do Markdown, abaixo do frontmatter. Use linguagem clara, direta, e estruture com headings:</p>
<blockquote>
<p><code># Resumo de Artigo Científico</code><br><br>
<code>Quando o usuário enviar um artigo, crie um resumo estruturado com:</code><br>
<code>1. **Objetivo do estudo** — Em 1-2 frases</code><br>
<code>2. **Metodologia** — Tipo de estudo, amostra, intervenção</code><br>
<code>3. **Principais resultados** — Dados quantitativos quando disponíveis</code><br>
<code>4. **Conclusão prática** — Implicações para a prática clínica</code><br>
<code>5. **Limitações** — Vieses e restrições do estudo</code><br><br>
<code>Use linguagem acessível. Palavras-chave em negrito. Mantenha abaixo de 500 palavras.</code></p>
</blockquote>
<p><strong>Passo 5 — Fazer um ZIP</strong> da pasta inteira (a pasta, não apenas o arquivo).</p>
<p><strong>Passo 6 — Upload</strong> no claude.ai em Settings > Features > Skills > Upload Custom Skill.</p>
<p>Pronto. Na próxima vez que você pedir para resumir um artigo científico, a Claude ativará automaticamente sua Skill e seguirá exatamente o formato que você definiu.</p>
    `,
  },
  {
    id: "cinco-exemplos",
    title: "7. Cinco Exemplos Práticos de Skills",
    content: `
<p>Para inspirar suas próprias criações, aqui estão 5 exemplos de Custom Skills com aplicações reais:</p>
<p><strong>1. Gerador de Questões de Revisão</strong></p>
<p>Cria questões no estilo de provas modernas a partir de qualquer conteúdo. Gera alternativas (A-E), gabarito comentado e classificação por tema e dificuldade. Ideal para estudantes e professores que precisam de banco de questões personalizado.</p>
<blockquote><p><code>description: Gera questões de múltipla escolha no estilo de provas de residência médica e concursos, com gabarito comentado. Ativada quando o usuário pede questões, exercícios ou simulados.</code></p></blockquote>
<p><strong>2. Criador de Flashcards</strong></p>
<p>Transforma qualquer conteúdo em flashcards no formato pergunta/resposta, com categorização por tema, dificuldade e tags. Pode gerar no formato Anki (importável) ou como artefato visual interativo.</p>
<blockquote><p><code>description: Cria flashcards de estudo no formato pergunta-resposta a partir de conteúdo fornecido. Suporta exportação para Anki. Ativada quando o usuário pede flashcards ou cartões de memorização.</code></p></blockquote>
<p><strong>3. Roteiro de Vídeo Padronizado</strong></p>
<p>Gera roteiros de vídeo no formato padronizado do seu canal: título + thumbnail, gancho (primeiros 30s), apresentação, ponte, blocos de conteúdo com pattern breaks, CTA intermediária, resumo e CTA final. Inclui notas de produção e checklist de pré-gravação.</p>
<blockquote><p><code>description: Cria roteiros de vídeo para YouTube no formato padronizado MedTech, com seções de gancho, conteúdo, CTA e notas de produção. Ativada quando o usuário pede roteiro de vídeo ou script.</code></p></blockquote>
<p><strong>4. Analisador de Artigo Científico</strong></p>
<p>Faz análise crítica completa de artigos: avalia metodologia, identifica vieses, verifica adequação estatística, resume contribuições e limitações, e gera uma nota de qualidade baseada em critérios GRADE. Referencia trechos específicos do artigo.</p>
<blockquote><p><code>description: Analisa criticamente artigos científicos avaliando metodologia, vieses, estatística e relevância clínica usando critérios GRADE. Ativada quando o usuário pede análise crítica ou avaliação de artigo.</code></p></blockquote>
<p><strong>5. Gerador de Conteúdo para Redes Sociais</strong></p>
<p>Transforma qualquer tema em conteúdo formatado para diferentes plataformas: carrosséis para Instagram (10 slides com copy), threads para X/Twitter, posts para LinkedIn, e scripts curtos para Reels/TikTok. Mantém tom de voz, identidade visual e hashtags padronizadas.</p>
<blockquote><p><code>description: Cria conteúdo formatado para redes sociais (Instagram, LinkedIn, X, TikTok) a partir de qualquer tema, mantendo identidade visual e tom de voz padronizados. Ativada quando o usuário pede posts, carrosséis ou conteúdo para redes sociais.</code></p></blockquote>
<p>Cada um desses exemplos segue o mesmo padrão: uma tarefa repetitiva com formato consistente, onde a qualidade depende de seguir um conjunto específico de regras. É exatamente o tipo de trabalho que Skills automatizam perfeitamente.</p>
    `,
  },
  {
    id: "ia-criando-skills",
    title: "8. Usando a Própria Claude para Criar Skills",
    content: `
<p>A técnica mais poderosa deste capítulo: usar a <strong>própria Claude para gerar Skills</strong>. É meta — a IA criando instruções para ela mesma seguir — mas funciona extraordinariamente bem.</p>
<p>O pipeline completo:</p>
<ol>
<li><strong>Abra uma conversa</strong> com a Claude (fora de qualquer Project específico).</li>
<li><strong>Descreva o que você quer</strong> que a Skill faça. Seja detalhado: qual a tarefa, qual o formato de saída, quais as regras, qual o público, quando deve ser ativada.</li>
<li><strong>Peça para a Claude gerar o SKILL.md completo</strong>, incluindo frontmatter YAML e corpo de instruções.</li>
<li><strong>Revise o resultado.</strong> Ajuste detalhes, adicione exemplos, refine regras.</li>
<li><strong>Copie o resultado</strong>, salve como arquivo <code>SKILL.md</code>, coloque dentro de uma pasta com nome descritivo.</li>
<li><strong>Crie o ZIP</strong> e faça upload em Settings > Features > Skills.</li>
<li><strong>Teste a Skill</strong> com uma tarefa real e refine se necessário.</li>
</ol>
<p>Dica avançada: você pode dar à Claude um <strong>exemplo do output ideal</strong> (golden example) e pedir: "Com base neste exemplo, crie uma Skill que gere outputs neste formato." A Claude é excelente em extrair padrões de exemplos concretos e transformá-los em instruções replicáveis.</p>
<p>Outra dica: se você já tem um prompt complexo que funciona bem, cole-o na conversa e peça: "Transforme este prompt em uma Custom Skill com SKILL.md formatado." A Claude faz a conversão automaticamente, incluindo o frontmatter YAML com uma description otimizada.</p>
<p>Skills são, em última análise, a democratização da automação inteligente. Você não precisa ser programador, não precisa entender de APIs, não precisa escrever código. Precisa apenas saber o que quer — e a Claude cuida do resto. Ensine uma vez, use para sempre.</p>
    `,
  },
];

// ─── Capítulo 8 ──────────────────────────────────────────

const CAP8_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap8",
    title: "Introdução",
    content: `
<p>Até agora, você aprendeu a usar a Claude como uma ferramenta poderosa e independente — chat, artefatos, Projects, Skills. Mas na vida real, suas informações não vivem dentro da Claude. Elas estão espalhadas pelo Notion, Google Drive, Gmail, Slack, planilhas e dezenas de outros aplicativos. Acessar essas informações exigia copiar e colar manualmente entre ferramentas.</p>
<p>As <strong>Integrações e Conectores</strong> eliminam essa fricção. Com eles, a Claude acessa diretamente seus dados em ferramentas externas — lê suas bases do Notion, consulta documentos no Google Drive, busca emails no Gmail, interage com canais do Slack — tudo sem sair da conversa.</p>
<p>Isso transforma a Claude de um assistente inteligente isolado em um <strong>hub central de produtividade</strong> que conecta todas as suas ferramentas. E por trás dessa mágica existe um protocolo aberto chamado <strong>MCP</strong> (Model Context Protocol) que merece ser entendido, porque ele define o futuro de como a IA se conecta com o mundo.</p>
<p>Neste capítulo, você vai entender o que são conectores e integrações, conhecer o protocolo MCP que os sustenta, aprender a configurar integrações passo a passo, dominar as ferramentas nativas (<em>built-in tools</em>) da Claude, e ver pipelines práticos que combinam múltiplas fontes de dados em workflows poderosos.</p>
    `,
  },
  {
    id: "mcp-protocolo",
    title: "1. O Protocolo MCP — A Base de Tudo",
    content: `
<p>Antes de falar sobre integrações específicas, é importante entender o que está por trás: o <strong>MCP</strong> (<em>Model Context Protocol</em>).</p>
<p>O MCP é um <strong>protocolo aberto</strong> criado pela Anthropic que define como modelos de IA se conectam com serviços e fontes de dados externos. Pense nele como o "USB" da IA — uma interface padronizada que permite conectar qualquer ferramenta ao Claude de forma consistente.</p>
<p>Antes do MCP, cada integração de IA era construída de forma customizada: uma para o Notion, outra para o Gmail, outra para o Slack — cada uma com sua própria lógica. O MCP padroniza esse processo. Qualquer serviço que implemente o protocolo MCP pode ser conectado ao Claude automaticamente.</p>
<p>Na prática, o MCP funciona como uma ponte:</p>
<ol>
<li>O <strong>Claude</strong> recebe uma tarefa que requer dados externos.</li>
<li>Ele identifica qual <strong>conector MCP</strong> pode fornecer esses dados.</li>
<li>O conector se comunica com o <strong>serviço externo</strong> (Notion, Gmail, etc.) usando as APIs nativas do serviço.</li>
<li>Os dados retornam ao Claude, que os processa e responde.</li>
</ol>
<p>Para o usuário, tudo isso é transparente — você simplesmente pede e a Claude busca. Mas entender que o MCP existe ajuda a compreender por que as integrações funcionam de forma tão fluida e por que novas integrações continuam aparecendo regularmente.</p>
<p>O MCP é um protocolo <strong>aberto</strong> — qualquer desenvolvedor pode criar um conector MCP para qualquer serviço. Isso significa que o ecossistema de integrações da Claude está em constante expansão, impulsionado tanto pela Anthropic quanto pela comunidade.</p>
    `,
  },
  {
    id: "conectores-disponiveis",
    title: "2. Conectores e Integrações Disponíveis",
    content: `
<p>A Claude oferece dois tipos de funcionalidades externas: <strong>Built-in Tools</strong> (ferramentas nativas) e <strong>Conectores MCP</strong> (integrações com serviços de terceiros).</p>
<p><strong>Built-in Tools — Ferramentas Nativas da Claude:</strong></p>
<ul>
<li><strong>Web Search</strong> — Busca informações atualizadas na internet em tempo real. Ideal para perguntas sobre eventos recentes, dados atualizados ou verificação de fatos.</li>
<li><strong>Web Fetch</strong> — Acessa e lê o conteúdo de URLs específicas que você fornece.</li>
<li><strong>Code Execution</strong> — Executa código em ambiente seguro (sandbox). Útil para cálculos, análise de dados, geração de gráficos e testes de código.</li>
<li><strong>Memory</strong> — A ferramenta que gerencia a memória persistente da Claude entre conversas (vista no Capítulo 4).</li>
</ul>
<p><strong>Conectores MCP — Integrações com Ferramentas Externas:</strong></p>
<ul>
<li><strong>Notion</strong> — Acessa páginas, databases, cria conteúdo e consulta bases de conhecimento. Uma das integrações mais poderosas para quem usa Notion como hub de organização.</li>
<li><strong>Google Drive</strong> — Lê e cria documentos, planilhas e apresentações no Google Workspace.</li>
<li><strong>Gmail</strong> — Busca, lê e compõe emails. Pode resumir threads longas, encontrar informações em emails antigos e rascunhar respostas.</li>
<li><strong>Slack</strong> — Acessa mensagens de canais, threads e conversas diretas. Pode resumir discussões, encontrar decisões e responder em canais.</li>
<li><strong>Canva</strong> — Cria e edita designs diretamente via Claude.</li>
<li><strong>Miro</strong> — Interage com boards, diagramas e documentos colaborativos.</li>
<li><strong>Linear / Jira</strong> — Gerencia tickets, issues e projetos de desenvolvimento.</li>
<li><strong>GitHub</strong> — Acessa repositórios, issues e pull requests.</li>
</ul>
<p>A lista de conectores disponíveis cresce constantemente. Você pode verificar os conectores disponíveis para sua conta em <strong>Settings > Connectors</strong> no claude.ai.</p>
    `,
  },
  {
    id: "configurando-integracoes",
    title: "3. Configurando uma Integração — Passo a Passo",
    content: `
<p>O processo de configuração de uma integração segue um fluxo consistente, independente do serviço:</p>
<p><strong>Passo 1 — Acessar Connectors</strong></p>
<p>No claude.ai, vá em <strong>Settings > Connectors</strong> (ou Features > Integrations, dependendo da versão). Você verá a lista de integrações disponíveis para seu plano.</p>
<p><strong>Passo 2 — Autorizar o Acesso</strong></p>
<p>Clique no conector desejado (ex.: Notion) e autorize a Claude a acessar sua conta. Isso abre a página de autenticação do serviço externo (OAuth), onde você faz login e confirma as permissões.</p>
<p><strong>Passo 3 — Definir Permissões</strong></p>
<p>Cada conector tem permissões específicas — leitura, escrita, criação, exclusão. <strong>Comece sempre com permissões mínimas</strong> (apenas leitura) e amplie conforme necessário. Você pode ajustar permissões a qualquer momento nas configurações.</p>
<p><strong>Passo 4 — Testar</strong></p>
<p>Abra uma conversa e faça um teste simples: "Liste as últimas 5 páginas do meu Notion" ou "Mostre meus emails não lidos do Gmail." Se a resposta vier correta, a integração está funcionando.</p>
<p><strong>Passo 5 — Integrar ao Workflow</strong></p>
<p>Agora você pode usar a integração naturalmente nas suas conversas e dentro de Projects. A Claude detecta automaticamente quando uma tarefa requer dados de uma ferramenta conectada.</p>
<p><strong>Dicas importantes:</strong></p>
<ul>
<li><strong>Vá devagar</strong> — Teste cada permissão individualmente antes de usar em tarefas críticas.</li>
<li><strong>Envie links</strong> — Você pode colar links diretos para páginas do Notion, documentos do Drive ou threads do Slack no chat. A Claude usa o conector para acessar o conteúdo completo.</li>
<li><strong>Cuidado com dados sensíveis</strong> — Ao conectar Gmail ou Slack, a Claude terá acesso ao conteúdo. Seja consciente sobre quais conversas e emails ela pode acessar.</li>
<li><strong>Conectores dentro de Projects</strong> — Integrações funcionam dentro de Projects, o que significa que você pode criar um assistente especializado que consulta dados do Notion E segue suas Custom Instructions. Extremamente poderoso.</li>
</ul>
    `,
  },
  {
    id: "notion-profundidade",
    title: "4. Integração com Notion — Em Profundidade",
    content: `
<p>A integração com o Notion merece destaque especial porque é, provavelmente, a mais poderosa do ecossistema — especialmente para quem já usa o Notion como hub central de organização.</p>
<p><strong>O que a Claude consegue fazer com o Notion conectado:</strong></p>
<ul>
<li><strong>Ler páginas e databases</strong> — A Claude acessa o conteúdo completo de qualquer página ou database que você autorize, incluindo propriedades, relações e conteúdo inline.</li>
<li><strong>Buscar informações</strong> — Peça "encontre todas as tarefas marcadas como urgentes no meu Notion" ou "qual o status do projeto X?" e a Claude consulta suas bases em tempo real.</li>
<li><strong>Criar conteúdo</strong> — A Claude pode criar novas páginas, adicionar itens a databases e preencher propriedades automaticamente.</li>
<li><strong>Cruzar dados</strong> — Combine informações de múltiplas bases do Notion em análises e relatórios que seriam trabalhosos de fazer manualmente.</li>
</ul>
<p><strong>Exemplo prático — Assistente de Estudos com Notion:</strong></p>
<ol>
<li>Você tem um database no Notion chamado "Temas de Estudo" com propriedades: Tema, Status (Não estudado / Em progresso / Concluído), Prioridade, Data prevista.</li>
<li>Conecte o Notion à Claude e crie um Project chamado "Assistente de Estudos".</li>
<li>Nas Custom Instructions: "Consulte o database 'Temas de Estudo' no Notion para saber quais temas preciso estudar. Priorize temas com status 'Não estudado' e prioridade alta."</li>
<li>Agora a Claude sabe automaticamente o que você precisa estudar, consulta o Notion em tempo real, gera resumos dos temas prioritários e pode até atualizar o status quando você concluir.</li>
</ol>
<p>Essa combinação de <strong>Notion + Projects + Integrações</strong> cria um fluxo de trabalho onde a Claude não apenas responde perguntas, mas gerencia ativamente seu processo de trabalho com dados reais e atualizados.</p>
    `,
  },
  {
    id: "pipelines-praticos",
    title: "5. Pipelines Práticos — Combinando Múltiplas Fontes",
    content: `
<p>O verdadeiro poder das integrações aparece quando você <strong>combina múltiplas fontes de dados</strong> em um único workflow. Aqui estão pipelines testados e eficazes:</p>
<p><strong>Pipeline 1 — Notion → Claude → Documento Word</strong></p>
<p>Cenário: você tem um database de pesquisa no Notion e precisa gerar um relatório formatado. A Claude lê os dados do Notion, organiza as informações, e gera um documento Word profissional usando a Skill de Word. Tudo em uma única conversa.</p>
<p><strong>Pipeline 2 — PDF + Notion → Claude → Resumo Estruturado</strong></p>
<p>Cenário: você recebe um artigo em PDF e quer cruzar com dados do seu database de referências no Notion. Envie o PDF no chat, peça à Claude para consultar seu database de referências e gerar um resumo que posicione o artigo no contexto da sua pesquisa.</p>
<p><strong>Pipeline 3 — Gmail → Claude → Slack</strong></p>
<p>Cenário: você recebe emails longos com atualizações de projeto e precisa resumir para o time no Slack. A Claude lê o email via conector do Gmail, gera um resumo executivo e posta no canal relevante do Slack.</p>
<p><strong>Pipeline 4 — Google Drive + Web Search → Claude → Apresentação</strong></p>
<p>Cenário: você tem dados brutos em uma planilha do Google Sheets e precisa criar uma apresentação. A Claude lê a planilha, complementa com dados atualizados da web (via Web Search), e gera um PowerPoint pronto usando a Skill de PowerPoint.</p>
<p><strong>Pipeline 5 — Notion → Claude → Notion (ciclo fechado)</strong></p>
<p>Cenário: a Claude lê tarefas pendentes do Notion, processa cada uma (gerando resumos, questões, flashcards), e salva os resultados de volta no Notion como novas páginas. Um ciclo completamente automatizado onde a Claude faz o trabalho pesado e o Notion serve como base de dados centralizada.</p>
<p>O padrão comum em todos esses pipelines é: <strong>ler de uma fonte → processar com Claude → entregar em outra</strong>. Quanto mais integrações conectadas, mais combinações poderosas se tornam possíveis.</p>
    `,
  },
  {
    id: "boas-praticas-integracoes",
    title: "6. Boas Práticas e Cuidados",
    content: `
<p>Integrações são poderosas, mas exigem alguns cuidados para uso eficaz e seguro:</p>
<p><strong>Segurança e Privacidade</strong></p>
<ul>
<li><strong>Princípio do menor privilégio</strong> — Conecte apenas as ferramentas que você realmente precisa. Se não usa Slack com a Claude, não conecte.</li>
<li><strong>Permissões mínimas</strong> — Comece com leitura apenas. Adicione escrita quando necessário e testado.</li>
<li><strong>Dados sensíveis</strong> — Esteja ciente de que a Claude terá acesso ao conteúdo que você autorizar. Emails com dados confidenciais de pacientes, contratos ou informações financeiras merecem atenção especial.</li>
<li><strong>Revise periodicamente</strong> — Verifique quais integrações estão ativas e remova as que não usa mais.</li>
</ul>
<p><strong>Performance e Qualidade</strong></p>
<ul>
<li><strong>Seja específico nas consultas</strong> — "Leia o database Projetos 2026 no Notion" é melhor que "veja meu Notion." Quanto mais específico, mais rápido e preciso.</li>
<li><strong>Cole links diretos</strong> — Em vez de pedir para a Claude "encontrar" algo, cole o link direto da página, documento ou email. Isso economiza tempo e evita ambiguidade.</li>
<li><strong>Combine com Projects</strong> — Use integrações dentro de Projects para criar assistentes que acessam dados externos com contexto persistente. É a combinação mais poderosa do ecossistema.</li>
<li><strong>Verifique os dados</strong> — Integrações dependem de APIs externas que podem falhar, ter latência ou retornar dados desatualizados. Sempre verifique informações críticas na fonte original.</li>
</ul>
<p><strong>Otimização de Tokens</strong></p>
<ul>
<li>Dados de integrações consomem tokens da janela de contexto. Se a Claude puxa uma database inteira do Notion com 500 itens, isso consome espaço significativo.</li>
<li>Seja específico sobre quais dados precisa: "Mostre apenas os itens com status 'Em progresso'" é muito mais eficiente que "Mostre tudo."</li>
<li>Para databases grandes, considere criar views filtradas no Notion e referenciar a view específica.</li>
</ul>
<p>Integrações transformam a Claude de uma ferramenta isolada em um <strong>orquestrador</strong> que conecta e automatiza seu fluxo de trabalho entre múltiplas plataformas. Usadas com consciência, são um multiplicador de produtividade extraordinário.</p>
    `,
  },
];

// ─── Capítulo 9 ──────────────────────────────────────────

const CAP9_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap9",
    title: "Introdução",
    content: `
<p>Até agora, todas as ferramentas que vimos — Chat, Projects, Skills, Integrações — têm algo em comum: a Claude <strong>responde</strong>. Você pede, ela entrega. Mas o CoWork representa uma mudança fundamental nessa dinâmica: no CoWork, a Claude não apenas responde — ela <strong>executa</strong>.</p>
<p>Lançado em janeiro de 2026, o <strong>Claude CoWork</strong> traz as capacidades agênticas do Claude Code para o aplicativo desktop, voltado para <strong>trabalho não-técnico</strong>. É, na essência, a mesma tecnologia de agente autônomo que programadores usam no Claude Code, mas empacotada em uma interface visual simples que qualquer pessoa pode usar.</p>
<p>No CoWork, você descreve uma tarefa — "crie uma apresentação sobre estes dados", "organize estes documentos", "analise estes relatórios e gere um resumo executivo" — e a Claude <strong>planeja, divide em etapas, delega para sub-agentes quando necessário, e executa cada passo de forma autônoma</strong>, tudo dentro do seu computador, com acesso aos seus arquivos locais.</p>
<p>Neste capítulo, você vai entender exatamente o que é o CoWork, como ele funciona tecnicamente (o modelo de sandbox, sub-agentes e planejamento), como configurá-lo, o sistema de Plugins, tarefas agendadas, e como construir pipelines de produtividade que integram desktop, Notion, navegador e ferramentas externas. Tudo baseado na documentação oficial da Anthropic.</p>
    `,
  },
  {
    id: "o-que-e-cowork",
    title: "1. O que é o Claude CoWork",
    content: `
<p>O Claude CoWork é um dos três modos de operação do <strong>aplicativo desktop da Claude</strong> (disponível para Mac e Windows). Os três modos são:</p>
<ul>
<li><strong>Chat</strong> — A experiência familiar do claude.ai com funcionalidades nativas do desktop (atalhos de teclado, captura de tela, ditado, conectores).</li>
<li><strong>Cowork</strong> — Modo agente para trabalho sustentado e complexo. A Claude executa tarefas de forma autônoma, com acesso a pastas locais, plugins, navegador e tarefas agendadas.</li>
<li><strong>Code</strong> — Ambiente de desenvolvimento onde a Claude trabalha diretamente em codebases, com diffs visuais, integração com terminal e tracking de git.</li>
</ul>
<p>A diferença fundamental entre Chat e CoWork é a diferença entre <strong>perguntar e delegar</strong>. No Chat, você faz perguntas e recebe respostas. No CoWork, você descreve uma tarefa e a Claude a executa — lendo seus arquivos, criando documentos, consultando dados externos e salvando resultados de volta na sua pasta.</p>
<p>Segundo a documentação oficial da Anthropic, o CoWork "traz as capacidades agênticas do Claude Code para o aplicativo desktop para trabalho não-técnico" — permitindo que usuários "deleguem para a Claude e se surpreendam com o resultado".</p>
<p>O CoWork está atualmente em <strong>research preview</strong> (prévia de pesquisa), o que significa que está em desenvolvimento ativo e pode receber mudanças significativas. Está disponível nos planos <strong>Pro, Max, Team e Enterprise</strong>.</p>
    `,
  },
  {
    id: "como-funciona",
    title: "2. Como o CoWork Funciona — Planejamento e Sub-agentes",
    content: `
<p>Quando você envia uma tarefa ao CoWork, ele não simplesmente começa a executar. Ele segue um <strong>processo estruturado</strong> que é visível na interface:</p>
<p><strong>Fase 1 — Clarificação</strong></p>
<p>Antes de começar, o CoWork tipicamente faz um conjunto curto de perguntas para entender exatamente o que você precisa: escopo, formato, restrições. Isso garante alinhamento antes de investir esforço na execução.</p>
<p><strong>Fase 2 — Planejamento</strong></p>
<p>Com base nas suas respostas, a Claude constrói um <strong>plano de ação</strong> visível na barra lateral. O plano detalha cada etapa que será executada, os recursos necessários e a ordem de operação. Você pode revisar e ajustar o plano antes de autorizar a execução.</p>
<p><strong>Fase 3 — Execução com Sub-agentes</strong></p>
<p>Aqui está o diferencial técnico mais impressionante: o CoWork pode delegar partes do trabalho para <strong>sub-agentes</strong> — instâncias especializadas que trabalham em paralelo. Cada sub-agente aparece na barra lateral com seu próprio foco e progresso.</p>
<p>Por exemplo, se você pede "analise estes 5 relatórios e crie um resumo comparativo", o CoWork pode criar 5 sub-agentes (um para cada relatório) que leem e analisam simultaneamente, depois consolida os resultados em um documento final. Isso é significativamente mais rápido do que processar sequencialmente.</p>
<p>Cada sub-agente opera com <strong>foco dedicado e janela de contexto própria</strong> — o que significa que tarefas complexas que ultrapassariam o limite de contexto de uma única conversa podem ser divididas entre múltiplos agentes sem perda de qualidade.</p>
<p><strong>Fase 4 — Entrega</strong></p>
<p>Os resultados são salvos diretamente na pasta que você autorizou, em formatos prontos para uso (documentos Word, apresentações PowerPoint, PDFs, planilhas, ou qualquer outro formato relevante).</p>
    `,
  },
  {
    id: "seguranca-sandbox",
    title: "3. Modelo de Segurança — Sandbox e Pastas",
    content: `
<p>A segurança do CoWork é baseada em um princípio simples e robusto: <strong>a Claude só acessa o que você explicitamente autorizar</strong>.</p>
<p>O CoWork opera em um <strong>espaço contido</strong> no seu computador. Segundo a documentação oficial: "A Claude pode ler, criar e editar arquivos dentro das pastas que você compartilha, mas não pode acessar nada fora delas."</p>
<p>O modelo de segurança funciona assim:</p>
<ul>
<li><strong>Seleção de pasta</strong> — Ao iniciar o CoWork, você escolhe quais pastas do seu computador a Claude pode acessar. Ela não tem acesso ao restante do seu sistema de arquivos.</li>
<li><strong>Permissões granulares</strong> — Dentro das pastas autorizadas, a Claude pode ler arquivos existentes, criar novos e editar existentes. Para operações destrutivas (como deletar arquivos), ela pede confirmação.</li>
<li><strong>Isolamento</strong> — Cada sessão do CoWork é isolada. A Claude não persiste acesso entre sessões sem sua autorização.</li>
</ul>
<p>Pense no modelo como dar as chaves de <strong>uma sala específica</strong> do seu escritório para um assistente — ele pode trabalhar com tudo que está naquela sala, mas não tem acesso ao resto do prédio.</p>
<p><strong>Boas práticas de segurança:</strong></p>
<ul>
<li>Crie uma pasta dedicada para o CoWork com apenas os arquivos relevantes para a tarefa.</li>
<li>Nunca coloque na pasta arquivos com dados financeiros sensíveis, senhas, credenciais ou informações de saúde de pacientes.</li>
<li>O aplicativo desktop precisa estar aberto para o CoWork funcionar — se você fechar o app, a sessão encerra.</li>
</ul>
    `,
  },
  {
    id: "plugins",
    title: "4. Plugins — O Sistema de Superpoderes do CoWork",
    content: `
<p>Os <strong>Plugins</strong> são o sistema que transforma o CoWork de um assistente generalista em um <strong>especialista no seu domínio</strong>. Segundo a documentação oficial da Anthropic, plugins são "pacotes customizáveis que combinam Skills, Conectores e Sub-agentes para dar à Claude expertise de domínio para papéis específicos".</p>
<p>Cada Plugin é composto por três tipos de componentes:</p>
<p><strong>Skills (dentro do Plugin)</strong> — Workflows estruturados que você invoca com comandos <code>/</code> (slash commands). Uma skill pode ser desde uma preferência simples de formatação até uma metodologia completa. Exemplos: <code>/call-prep</code> para preparar briefings de reunião, <code>/variance-analysis</code> para análise financeira, <code>/review-contract</code> para revisão jurídica.</p>
<p><strong>Conectores</strong> — Links para suas ferramentas e fontes de dados. Permitem que a Claude busque informações durante o workflow e grave resultados de volta nos sistemas. Se a ferramenta não tiver conector nativo, o CoWork ajusta o workflow para aceitar upload manual.</p>
<p><strong>Sub-agentes</strong> — Agentes especializados que distribuem trabalho complexo. Cada sub-agente pode pesquisar empresas, consultar CRM, analisar comunicações em plataformas diferentes — operando em paralelo ou sequencialmente conforme a necessidade.</p>
<p>A Anthropic oferece Plugins pré-configurados para diferentes áreas profissionais:</p>
<ul>
<li><strong>Sales Plugin</strong> — Integra com CRM, aplica frameworks de qualificação (MEDDIC, SPIN, Challenger), prepara briefings de calls e analisa pipeline.</li>
<li><strong>Finance Plugin</strong> — Conecta com data warehouse, produz workpapers padronizados, análise de variância e reconciliações.</li>
<li><strong>Legal Plugin</strong> — Revisa contratos contra suas posições padrão, triagem de NDAs, sugere cláusulas da sua biblioteca aprovada.</li>
<li><strong>Marketing Plugin</strong> — Gera campanhas para seus segmentos, produz copy na sua voz e estilo, aplica guidelines visuais.</li>
</ul>
    `,
  },
  {
    id: "customizar-plugins",
    title: "5. Customizando e Criando Plugins",
    content: `
<p>Uma das características mais elegantes do CoWork é que a <strong>customização de Plugins acontece por conversa</strong>. Você não precisa editar arquivos de configuração ou escrever código — simplesmente conversa com a Claude sobre como quer que o Plugin funcione.</p>
<p>A customização abrange três dimensões:</p>
<p><strong>Suas Ferramentas</strong> — Plugins usam labels genéricos (ex.: "CRM") que você mapeia para seus produtos reais (ex.: "Salesforce", "HubSpot"). Se uma ferramenta necessária não está conectada, a Claude exibe o conector inline para autenticação imediata.</p>
<p><strong>Seus Processos</strong> — As Skills dentro do Plugin são adaptadas ao seu workflow real. Após customização, a Claude já sabe suas fontes de dados, frameworks de análise e critérios — eliminando a necessidade de repetir contexto a cada uso.</p>
<p><strong>Sua Expertise</strong> — Contexto transversal como voz de marca, padrões de revisão e terminologia específica são incorporados como skills de background. A Anthropic recomenda compartilhar "documentos e exemplos do seu trabalho durante a customização — brand guides, playbooks, entregas anteriores" para que a Claude tenha material concreto de referência.</p>
<p><strong>Criando um Plugin do zero:</strong></p>
<ol>
<li>Comece com uma descrição simples no CoWork — até uma frase basta.</li>
<li>A Claude faz perguntas sobre seus workflows, ferramentas, padrões e edge cases.</li>
<li>Para resultados excelentes, faça upload de entregas anteriores que exemplificam o output ideal. A Claude aprende a estrutura, ênfase e formatação diretamente dos exemplos.</li>
<li>Teste com trabalho real e refine quando algo não estiver alinhado.</li>
</ol>
<p><strong>Dica da documentação oficial:</strong> "Skills focadas com descrições específicas tendem a ativar de forma mais confiável do que skills abrangentes." Mantenha cada skill com um propósito claro em vez de criar uma mega-skill que tenta fazer tudo.</p>
<p>Plugins podem ser compartilhados como arquivos comprimidos, hospedados no GitHub para atualizações automáticas, ou provisionados por administradores em organizações inteiras.</p>
    `,
  },
  {
    id: "tarefas-agendadas",
    title: "6. Tarefas Agendadas e Navegação Web",
    content: `
<p>Duas funcionalidades do CoWork que ampliam significativamente o que é possível: <strong>agendamento de tarefas</strong> e <strong>navegação web via Claude in Chrome</strong>.</p>
<p><strong>Tarefas Agendadas (Scheduled Tasks)</strong></p>
<p>O CoWork permite definir tarefas recorrentes que rodam automaticamente: briefings diários, roundups semanais, triagem de inbox, compilação de relatórios periódicos. Segundo a documentação oficial, skills recorrentes "funcionam como tarefas agendadas com seus critérios aplicados automaticamente".</p>
<p>Na prática, isso significa que você pode configurar, por exemplo:</p>
<ul>
<li>"Toda segunda de manhã, leia meus emails da última semana e gere um resumo executivo das decisões pendentes."</li>
<li>"Todo dia às 8h, consulte o database de tarefas no Notion e me dê um briefing das prioridades do dia."</li>
<li>"Toda sexta, compile os dados de vendas da semana e gere um relatório em PowerPoint."</li>
</ul>
<p>As tarefas agendadas combinam o poder dos conectores (para buscar dados atualizados) com as Skills (para processar no formato correto) e o acesso a pastas (para salvar os resultados).</p>
<p><strong>Navegação Web — Claude in Chrome</strong></p>
<p>Com a extensão <strong>Claude in Chrome</strong> instalada, o CoWork ganha a capacidade de navegar na internet. A Claude pode acessar websites, extrair dados de páginas, pesquisar informações e interagir com conteúdo web — tudo como parte de um workflow maior.</p>
<p>Isso é especialmente útil quando o CoWork precisa de informações que não estão nos seus arquivos locais nem nas ferramentas conectadas: dados públicos, preços de concorrentes, publicações recentes, informações regulatórias atualizadas.</p>
<p>A combinação de <strong>pastas locais + conectores + navegador + agendamento</strong> transforma o CoWork em um assistente que funciona mesmo quando você não está ativamente usando — executando tarefas rotineiras e deixando os resultados prontos na sua pasta quando você chegar.</p>
    `,
  },
  {
    id: "pipelines-cowork",
    title: "7. Pipelines de Produtividade na Prática",
    content: `
<p>O verdadeiro poder do CoWork aparece quando você combina todas as peças em <strong>pipelines integrados</strong>. Aqui estão exemplos práticos baseados nas capacidades oficiais:</p>
<p><strong>Pipeline 1 — Pesquisa e Relatório Automatizado</strong></p>
<ol>
<li>O CoWork consulta um database do <strong>Notion</strong> para obter a lista de temas a pesquisar.</li>
<li>Via <strong>Claude in Chrome</strong>, navega na web para coletar informações atualizadas sobre cada tema.</li>
<li>Cruza com documentos de referência na sua <strong>pasta local</strong>.</li>
<li>Gera um relatório formatado em <strong>Word</strong> usando a Skill oficial.</li>
<li>Salva o resultado na pasta e, opcionalmente, atualiza o status no Notion.</li>
</ol>
<p><strong>Pipeline 2 — Preparação de Apresentação</strong></p>
<ol>
<li>Você aponta para uma pasta com 10 PDFs de artigos e dados.</li>
<li>O CoWork cria <strong>sub-agentes</strong> — cada um analisa um subconjunto dos documentos em paralelo.</li>
<li>Os resultados são consolidados e uma apresentação em <strong>PowerPoint</strong> de 15 slides é gerada automaticamente.</li>
<li>A apresentação segue o template e a identidade visual que você configurou no Plugin.</li>
</ol>
<p><strong>Pipeline 3 — Triagem de Email + Ação</strong></p>
<ol>
<li>Tarefa agendada: todo dia às 8h, o CoWork lê emails via <strong>Gmail</strong>.</li>
<li>Classifica por urgência e categoria usando seus critérios definidos no Plugin.</li>
<li>Para emails urgentes, gera rascunhos de resposta na sua <strong>pasta local</strong>.</li>
<li>Envia um resumo no <strong>Slack</strong> com as ações pendentes do dia.</li>
</ol>
<p><strong>Pipeline 4 — Produção de Conteúdo Educacional</strong></p>
<ol>
<li>O CoWork lê capítulos de livros e artigos da sua <strong>pasta local</strong>.</li>
<li>Consulta o database de "Temas de Estudo" no <strong>Notion</strong> para saber o que produzir.</li>
<li>Gera resumos, questões de revisão e flashcards usando <strong>Skills customizadas</strong>.</li>
<li>Salva os materiais organizados na pasta e atualiza o status no Notion.</li>
</ol>
<p>O padrão em todos esses pipelines é: <strong>múltiplas fontes → processamento inteligente com sub-agentes → output formatado</strong>. O CoWork orquestra todo o fluxo, e você recebe o resultado pronto.</p>
    `,
  },
  {
    id: "boas-praticas-cowork",
    title: "8. Boas Práticas e Dicas",
    content: `
<p>Baseado na documentação oficial e em práticas validadas, aqui estão as recomendações essenciais para aproveitar ao máximo o CoWork:</p>
<p><strong>1. Seja específico nas instruções</strong> — Quanto mais claro o pedido, melhor o resultado. "Crie uma apresentação de 10 slides sobre os dados de vendas do Q1, com gráficos comparativos e conclusões executivas" é muito melhor que "faça uma apresentação".</p>
<p><strong>2. Organize sua pasta antes de começar</strong> — O CoWork lê tudo que está na pasta autorizada. Se ela está bagunçada com arquivos irrelevantes, a Claude pode se confundir ou perder tempo processando conteúdo desnecessário. Mantenha pastas limpas e focadas.</p>
<p><strong>3. Use Global Instructions</strong> — O CoWork permite configurar instruções globais que se aplicam a todas as sessões (como preferências de formato, tom, idioma). Configure uma vez e esqueça — a Claude segue automaticamente.</p>
<p><strong>4. Use Folder Instructions</strong> — Além das globais, você pode ter instruções específicas por pasta. Uma pasta de "Estudos" pode ter instruções diferentes de uma pasta de "Trabalho".</p>
<p><strong>5. Revise o plano antes de autorizar</strong> — O CoWork mostra o plano de execução na barra lateral. Leia o plano, verifique se está alinhado com o que você quer, e só então autorize. É muito mais eficiente corrigir o plano do que corrigir o output final.</p>
<p><strong>6. Comece simples e escale</strong> — Não tente criar um pipeline de 10 etapas na primeira vez. Comece com tarefas simples (organizar uma pasta, resumir um documento) para entender como o CoWork trabalha. Depois, vá adicionando complexidade gradualmente.</p>
<p><strong>7. Itere sobre Plugins</strong> — A documentação oficial recomenda: "Você não precisa cobrir tudo de uma vez." Construa o Plugin incrementalmente, testando com trabalho real e refinando quando algo precisar de ajuste.</p>
<p><strong>8. Mostre, não descreva</strong> — Para resultados alinhados ao seu padrão, faça upload de exemplos de entregas anteriores. A Claude aprende a estrutura e o estilo diretamente dos exemplos — isso é mais eficaz do que descrever o formato em palavras.</p>
<p>O CoWork representa a fronteira entre "usar IA" e "delegar para IA". A diferença é sutil mas transformadora: no Chat, você é o executor e a Claude é a consultora. No CoWork, a Claude é a executora e você é o revisor. Essa inversão de papéis libera seu tempo para o trabalho que realmente exige julgamento humano — enquanto a Claude cuida do resto.</p>
    `,
  },
];

// ─── Capítulo 10 ──────────────────────────────────────────

const CAP10_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap10",
    title: "Introdução",
    content: `
<p>Chegamos ao capítulo final deste guia — e à ferramenta mais avançada do ecossistema Claude. O <strong>Claude Code</strong> é onde toda a inteligência da Claude ganha acesso direto ao mundo real: sistema de arquivos, terminal, comandos de shell, Git, IDEs e pipelines de CI/CD.</p>
<p>Se o Chat é onde você <em>conversa</em> com a Claude e o CoWork é onde ela <em>executa tarefas de produtividade</em>, o Claude Code é onde ela se torna um <strong>desenvolvedor sênior</strong> pareando com você. Ele não apenas gera código — ele lê seu codebase inteiro, entende a arquitetura, edita múltiplos arquivos, roda testes, depura problemas, cria commits e abre pull requests. Tudo de forma autônoma, com você mantendo o controle.</p>
<p>Segundo a documentação oficial da Anthropic, o Claude Code é "uma ferramenta agêntica de codificação que lê seu codebase, edita arquivos, executa comandos e se integra com suas ferramentas de desenvolvimento". Ele está disponível no terminal, no VS Code, no JetBrains, no aplicativo desktop, no navegador e até no Slack.</p>
<p>Neste capítulo, você vai entender o que o Claude Code faz e como ele se diferencia das outras ferramentas, como instalá-lo, os modos de interação, o sistema de permissões, CLAUDE.md e memória, Hooks, sub-agentes, e como ele se encaixa no fluxo de trabalho de um desenvolvedor moderno. Mesmo que você não seja programador, entender o Claude Code completa sua visão do ecossistema Claude e pode inspirar novas formas de trabalhar.</p>
    `,
  },
  {
    id: "o-que-e-claude-code",
    title: "1. O que é o Claude Code",
    content: `
<p>O Claude Code é um <strong>assistente de codificação agêntico</strong> (<em>agentic coding tool</em>) que opera diretamente no seu ambiente de desenvolvimento. Diferente de ferramentas tradicionais de autocomplete (que sugerem a próxima linha de código), o Claude Code funciona como um <strong>agente autônomo</strong> que pode:</p>
<ul>
<li><strong>Ler seu codebase inteiro</strong> — Entende a arquitetura, padrões e dependências do seu projeto.</li>
<li><strong>Editar arquivos</strong> — Modifica código em múltiplos arquivos de forma coordenada.</li>
<li><strong>Executar comandos</strong> — Roda comandos no terminal (testes, builds, linting, deploys).</li>
<li><strong>Depurar problemas</strong> — Cole uma mensagem de erro e ele rastreia a causa raiz pelo codebase.</li>
<li><strong>Gerenciar Git</strong> — Faz staging, escreve mensagens de commit, cria branches e abre pull requests.</li>
<li><strong>Conectar ferramentas via MCP</strong> — Lê docs no Google Drive, atualiza tickets no Jira, puxa dados do Slack.</li>
</ul>
<p>O Claude Code está disponível em <strong>múltiplas superfícies</strong>, todas conectadas ao mesmo motor:</p>
<ul>
<li><strong>Terminal/CLI</strong> — A interface original, completa e poderosa. Rode <code>claude</code> na pasta do projeto.</li>
<li><strong>VS Code</strong> — Extensão com diffs inline, @-mentions, revisão de plano e histórico de conversas.</li>
<li><strong>JetBrains</strong> — Plugin para IntelliJ, PyCharm, WebStorm e outros IDEs da família.</li>
<li><strong>Desktop App</strong> — Aba "Code" no aplicativo desktop, com diffs visuais e sessões lado a lado.</li>
<li><strong>Web</strong> — Em <code>claude.ai/code</code>, sem instalação local necessária. Ideal para tarefas longas.</li>
<li><strong>Slack</strong> — Mencione <code>@Claude</code> com um bug report e receba um pull request de volta.</li>
</ul>
<p>Todas as superfícies compartilham a mesma configuração: seus arquivos <code>CLAUDE.md</code>, settings e servidores MCP funcionam em todas elas.</p>
    `,
  },
  {
    id: "chat-vs-cowork-vs-code",
    title: "2. Chat vs. CoWork vs. Claude Code",
    content: `
<p>Com três ferramentas poderosas no ecossistema, é importante saber quando usar cada uma:</p>
<p><strong>Chat</strong> — Para interações conversacionais. Perguntas, análises de texto, geração de conteúdo, brainstorming, explicações. Você pergunta, a Claude responde. O output é texto e artefatos visuais.</p>
<p><strong>CoWork</strong> — Para trabalho de produtividade no desktop. Criação de documentos, organização de arquivos, análise de dados, pipelines com Notion/Gmail/Slack. A Claude planeja e executa tarefas com arquivos locais via interface gráfica. Projetado para <strong>não-programadores</strong>.</p>
<p><strong>Claude Code</strong> — Para desenvolvimento de software. Escrita de código, debugging, refatoração, testes, DevOps, automação. A Claude opera diretamente no terminal e no IDE com acesso total ao codebase. Projetado para <strong>desenvolvedores</strong>.</p>
<p>A regra prática: se a tarefa envolve <strong>código-fonte, terminal ou pipeline de desenvolvimento</strong>, use Claude Code. Se envolve <strong>documentos, apresentações ou organização de trabalho</strong>, use CoWork. Se é uma <strong>conversa, pergunta ou geração rápida</strong>, use Chat.</p>
<p>Na prática, as fronteiras são fluidas. Você pode começar no Chat brainstormando uma solução, migrar para Claude Code para implementar, e usar CoWork para criar a documentação. As três ferramentas se complementam — e o novo recurso <strong>Dispatch</strong> permite até que uma conversa siga você do celular para o desktop sem perder contexto.</p>
    `,
  },
  {
    id: "instalacao-primeiros-passos",
    title: "3. Instalação e Primeiros Passos",
    content: `
<p>O Claude Code pode ser instalado de múltiplas formas. A instalação nativa é recomendada porque atualiza automaticamente:</p>
<p><strong>macOS e Linux:</strong></p>
<blockquote><p><code>curl -fsSL https://claude.ai/install.sh | bash</code></p></blockquote>
<p><strong>Windows PowerShell:</strong></p>
<blockquote><p><code>irm https://claude.ai/install.ps1 | iex</code></p></blockquote>
<p>Alternativas: <strong>Homebrew</strong> (<code>brew install --cask claude-code</code>) ou <strong>WinGet</strong> (<code>winget install Anthropic.ClaudeCode</code>). Note que essas alternativas não atualizam automaticamente.</p>
<p>Após instalar, o uso é direto:</p>
<ol>
<li>Abra o terminal e navegue até a pasta do seu projeto: <code>cd seu-projeto</code></li>
<li>Execute: <code>claude</code></li>
<li>Na primeira vez, faça login com sua conta Claude (Pro, Max, Team ou Enterprise necessário).</li>
<li>Descreva o que quer fazer em linguagem natural.</li>
</ol>
<p>O Claude Code imediatamente analisa a estrutura do seu projeto, lê os arquivos relevantes, e está pronto para trabalhar. Alguns exemplos de comandos iniciais:</p>
<ul>
<li><code>claude "write tests for the auth module, run them, and fix any failures"</code></li>
<li><code>claude "commit my changes with a descriptive message"</code></li>
<li><code>claude "explain how the payment system works in this codebase"</code></li>
</ul>
<p>O Claude Code segue a <strong>filosofia Unix</strong>: é composável e pode ser integrado em pipelines. Você pode direcionar output de outros comandos para ele:</p>
<blockquote>
<p><code>tail -200 app.log | claude -p "analise se há anomalias"</code></p>
<p><code>git diff main --name-only | claude -p "revise estes arquivos por problemas de segurança"</code></p>
</blockquote>
    `,
  },
  {
    id: "modos-interacao",
    title: "4. Modos de Interação e Permissões",
    content: `
<p>O Claude Code oferece três modos de interação que controlam o nível de autonomia da Claude — permitindo que você escolha quanto controle manter:</p>
<p><strong>Ask (Perguntar)</strong> — A Claude propõe cada mudança e aguarda sua aprovação antes de modificar qualquer arquivo. É o modo mais conservador: nada acontece sem seu "ok". Ideal para codebases sensíveis ou quando você está aprendendo como o Claude Code trabalha.</p>
<p><strong>Code (Codificar)</strong> — A Claude aplica modificações em arquivos automaticamente, mas pede aprovação antes de executar comandos no terminal. Isso significa que ela pode editar código livremente, mas não roda testes, builds ou scripts sem sua confirmação. É o <strong>modo padrão</strong> e o equilíbrio ideal para a maioria dos desenvolvedores.</p>
<p><strong>Plan (Planejar)</strong> — A Claude elabora sua estratégia completa antes de fazer qualquer mudança. Você revisa o plano inteiro em um viewer dedicado, ajusta se necessário, e só então autoriza a execução. Ideal para tarefas complexas que envolvem múltiplos arquivos e dependências.</p>
<p>Além dos modos, existe o <strong>Auto Mode</strong> — uma alternativa mais segura para tarefas longas que concede autonomia balanceada à Claude. É oficialmente descrito como "uma alternativa mais segura" do que desativar permissões completamente, oferecendo o equilíbrio entre supervisão e fluidez.</p>
<p>O sistema de permissões é progressivo: você pode começar no modo Ask para entender como o Claude Code trabalha no seu projeto, migrar para Code quando ganhar confiança, e usar Plan para refatorações grandes. O nível de controle é sempre seu.</p>
    `,
  },
  {
    id: "claude-md-memoria",
    title: "5. CLAUDE.md e Memória — Instruções Persistentes",
    content: `
<p>Assim como Projects têm Custom Instructions, o Claude Code tem o <strong>CLAUDE.md</strong> — um arquivo Markdown que você coloca na raiz do seu projeto e que a Claude lê automaticamente no início de <strong>toda sessão</strong>.</p>
<p>O CLAUDE.md é onde você define:</p>
<ul>
<li><strong>Padrões de código</strong> — Convenções de nomenclatura, estilo, linting, formatação.</li>
<li><strong>Decisões de arquitetura</strong> — Stack tecnológico, padrões de design, bibliotecas preferidas.</li>
<li><strong>Checklists de revisão</strong> — O que verificar antes de fazer commit ou abrir PR.</li>
<li><strong>Comandos do projeto</strong> — Como rodar testes, build, deploy. Como configurar o ambiente.</li>
<li><strong>Regras específicas</strong> — "Nunca modifique arquivos em /config sem aprovação", "Sempre use TypeScript strict mode".</li>
</ul>
<p>Pense no CLAUDE.md como o <strong>onboarding document</strong> que você daria para um novo desenvolvedor no primeiro dia. Tudo que ele precisa saber sobre o projeto, as regras e como trabalhar — em um único arquivo.</p>
<p>Além do CLAUDE.md, o Claude Code possui <strong>Auto Memory</strong>: à medida que trabalha no seu projeto, ele salva automaticamente insights como comandos de build, técnicas de debugging e padrões do codebase. Esses aprendizados persistem entre sessões sem que você precise escrever nada — a Claude aprende com o uso.</p>
<p>A combinação de CLAUDE.md (instruções explícitas) com Auto Memory (aprendizados implícitos) faz com que o Claude Code fique progressivamente mais eficaz quanto mais você o usa no mesmo projeto.</p>
    `,
  },
  {
    id: "hooks-skills-subagentes",
    title: "6. Hooks, Skills e Sub-agentes",
    content: `
<p>Três funcionalidades avançadas que ampliam significativamente o que o Claude Code pode fazer:</p>
<p><strong>Hooks</strong></p>
<p>Hooks são scripts que <strong>disparam automaticamente</strong> em momentos específicos do fluxo de trabalho do Claude Code. O nome vem do inglês "gancho" — você "engancha" um script em um evento, e ele roda toda vez que aquele evento acontece.</p>
<p>Exemplos práticos:</p>
<ul>
<li>Auto-formatar código depois de cada edição de arquivo.</li>
<li>Rodar lint antes de cada commit.</li>
<li>Executar testes automaticamente após mudanças em arquivos críticos.</li>
<li>Validar que nenhum arquivo sensível foi incluído no staging.</li>
</ul>
<p>Hooks são <strong>reativos</strong> (respondem a eventos), enquanto Skills são <strong>consultivas</strong> (a Claude busca quando precisa de expertise).</p>
<p><strong>Custom Commands (Skills no Claude Code)</strong></p>
<p>No contexto do Claude Code, Skills funcionam como <strong>comandos customizados</strong> — workflows reutilizáveis que sua equipe pode compartilhar. Invocados com <code>/</code> na interface: <code>/review-pr</code>, <code>/deploy-staging</code>, <code>/run-security-audit</code>. Cada comando encapsula um fluxo de trabalho completo que a Claude executa autonomamente.</p>
<p><strong>Sub-agentes</strong></p>
<p>Para tarefas grandes, o Claude Code pode criar <strong>múltiplos agentes</strong> que trabalham em paralelo em partes diferentes do problema. Um agente líder coordena o trabalho, atribui subtarefas, e consolida os resultados. Na prática, isso significa que uma refatoração que afeta 50 arquivos pode ser dividida entre vários agentes que trabalham simultaneamente — reduzindo drasticamente o tempo total.</p>
    `,
  },
  {
    id: "o-que-da-pra-fazer",
    title: "7. O que Dá para Fazer — Exemplos Reais",
    content: `
<p>Baseado na documentação oficial da Anthropic, aqui estão as categorias principais de uso do Claude Code:</p>
<p><strong>Automatizar o trabalho tedioso</strong> — Escrever testes para código não testado, corrigir erros de lint em todo o projeto, resolver conflitos de merge, atualizar dependências, escrever release notes. As tarefas que você adia porque são repetitivas e demoradas.</p>
<p><strong>Construir features e corrigir bugs</strong> — Descreva o que quer em linguagem natural. O Claude Code planeja a abordagem, escreve o código em múltiplos arquivos e verifica se funciona. Para bugs, cole a mensagem de erro — ele rastreia a causa pelo codebase, identifica o problema e implementa a correção.</p>
<p><strong>Criar commits e pull requests</strong> — O Claude Code trabalha diretamente com Git: faz staging das mudanças, escreve mensagens de commit descritivas, cria branches e abre PRs. Em CI/CD, pode automatizar code review e triagem de issues via GitHub Actions ou GitLab CI/CD.</p>
<p><strong>Conectar ferramentas via MCP</strong> — Leia design docs no Google Drive, atualize tickets no Jira, puxe dados do Slack, ou use suas próprias ferramentas customizadas — tudo via Model Context Protocol.</p>
<p><strong>Agendar tarefas recorrentes</strong> — Revisão de PRs toda manhã, análise de falhas de CI overnight, auditoria de dependências semanal, sincronização de docs após PRs serem mergeados. Tarefas agendadas na nuvem continuam rodando mesmo com o computador desligado.</p>
<p><strong>Trabalhar de qualquer lugar</strong> — Comece no terminal, continue no celular com Remote Control. Envie uma tarefa do Slack e receba um PR de volta. Inicie uma sessão longa na web e puxe para o terminal com <code>/teleport</code>. As sessões seguem você entre dispositivos.</p>
    `,
  },
  {
    id: "para-nao-programadores",
    title: "8. Para Não-Programadores — Por que Entender o Claude Code",
    content: `
<p>Se você chegou até aqui e não é programador, pode estar pensando: "Esse capítulo não é para mim." Mas existe um motivo importante para entender o Claude Code, mesmo que você nunca abra um terminal.</p>
<p><strong>Primeiro:</strong> o Claude Code pode ser usado para criar ferramentas para <strong>você mesmo</strong>. Descreva em linguagem natural o que precisa — "crie um app web simples que me ajude a organizar meus estudos com flashcards" — e o Claude Code cria. O conceito de <em>vibe coding</em> (programar pela "vibe", descrevendo o que quer sem saber código) é real e cada vez mais acessível.</p>
<p><strong>Segundo:</strong> entender o Claude Code completa sua <strong>visão do ecossistema</strong>. Chat para conversar, CoWork para produtividade no desktop, Claude Code para desenvolvimento — cada peça tem seu lugar. Quando você entende o quadro completo, toma melhores decisões sobre qual ferramenta usar para cada problema.</p>
<p><strong>Terceiro:</strong> o Claude Code está disponível no <strong>navegador</strong> em claude.ai/code, sem instalação. Você pode experimentá-lo diretamente, sem precisar configurar nada. Descreva um projeto simples e veja o que acontece.</p>
<p><strong>E por fim:</strong> se você trabalha com desenvolvedores ou lidera equipes que incluem programadores, entender o Claude Code ajuda a ter conversas mais produtivas sobre como a IA está transformando o processo de desenvolvimento de software.</p>
<p>Este capítulo encerra o guia "Dominando a Claude: Do Zero ao Avançado". Ao longo de 10 capítulos, você passou do básico — o que é a Claude, modelos, interface — até as ferramentas mais avançadas do ecossistema: Projects, Skills, Integrações, CoWork e Claude Code. Cada camada constrói sobre a anterior, e juntas elas formam um <strong>sistema completo de produtividade assistida por IA</strong>.</p>
<p>O mais importante agora é <strong>praticar</strong>. Abra o claude.ai, crie um Project, teste uma Skill, conecte o Notion, explore o CoWork. A teoria abre portas, mas é a prática que transforma. Boa jornada.</p>
    `,
  },
];

// ─── Export ──────────────────────────────────────────────

export const DOMINANDO_CLAUDE: EbookMeta = {
  id: "dominando-claude",
  title: "Dominando a Claude",
  subtitle: "Do Zero ao Avançado",
  description:
    "Guia completo do ecossistema Claude: da interface básica aos Projects, Skills, Integrações, CoWork e Claude Code. Tudo que você precisa para dominar a ferramenta de IA da Anthropic.",
  author: "Gabriel Tavares",
  coverColor: "#E8751A",
  chapters: [
    {
      slug: "conhecendo-a-claude",
      number: 1,
      title: "Conhecendo a Claude",
      summary:
        "O que é a Anthropic, quem são os fundadores, o propósito da Claude. Visão geral da plataforma: Chat, CoWork, Claude Code. Primeiros passos na interface.",
      readingTime: "12 min",
      available: true,
      sections: CAP1_SECTIONS,
    },
    {
      slug: "modelos-e-configuracoes",
      number: 2,
      title: "Modelos e Configurações",
      summary:
        "Família de modelos (Haiku, Sonnet, Opus), diferenças de velocidade, custo e raciocínio, Extended Thinking. Configurações iniciais e personalização.",
      readingTime: "10 min",
      available: true,
      sections: CAP2_SECTIONS,
    },
    {
      slug: "artefatos-e-formatos-de-saida",
      number: 3,
      title: "Artefatos e Formatos de Saída",
      summary:
        "O que são Artifacts, quando a Claude os cria automaticamente, tipos suportados (HTML/React, Markdown, SVG, código, diagramas) e como iterar.",
      readingTime: "10 min",
      available: true,
      sections: CAP3_SECTIONS,
    },
    {
      slug: "memoria-e-janela-de-contexto",
      number: 4,
      title: "Memória e Janela de Contexto",
      summary:
        "Como funciona a memória da Claude, gestão de contexto entre chats, limites da context window (200K tokens), boas práticas para conversas longas.",
      readingTime: "10 min",
      available: true,
      sections: CAP4_SECTIONS,
    },
    {
      slug: "engenharia-de-prompt-para-claude",
      number: 5,
      title: "Engenharia de Prompt para a Claude",
      summary:
        "Princípios da Anthropic: PCTF (Persona, Contexto, Tarefa, Formato), XML tags, In-Context Learning, Chain-of-Thought. Fluência em IA e os 4Ds.",
      readingTime: "15 min",
      available: true,
      sections: CAP5_SECTIONS,
    },
    {
      slug: "claude-projects",
      number: 6,
      title: "Claude Projects — Criando Assistentes de IA",
      summary:
        "O que é um Project, anatomia (Custom Instructions + Knowledge Base + Chats), RAG automático, princípios de um bom projeto, golden examples.",
      readingTime: "15 min",
      available: true,
      sections: CAP6_SECTIONS,
    },
    {
      slug: "skills",
      number: 7,
      title: "Skills — Ensinando a Claude a Trabalhar do Seu Jeito",
      summary:
        "O que são Skills, Anthropic Skills vs. Custom Skills, quando usar, como criar um SKILL.md, upload e ativação. Usando a própria Claude para gerar Skills.",
      readingTime: "12 min",
      available: true,
      sections: CAP7_SECTIONS,
    },
    {
      slug: "integracoes-e-conectores",
      number: 8,
      title: "Integrações e Conectores",
      summary:
        "Como conectar Notion, Google Drive, Gmail, Slack, Word, PowerPoint. Configuração, permissões e pipelines práticos com dados externos.",
      readingTime: "12 min",
      available: true,
      sections: CAP8_SECTIONS,
    },
    {
      slug: "claude-cowork",
      number: 9,
      title: "Claude CoWork — O Agente no Desktop",
      summary:
        "O que é CoWork, como funciona o modo agente (plano + execução paralela), trabalhando com arquivos locais, Skills no desktop, pipelines Notion → Claude → CoWork.",
      readingTime: "12 min",
      available: true,
      sections: CAP9_SECTIONS,
    },
    {
      slug: "claude-code",
      number: 10,
      title: "Claude Code — Introdução",
      summary:
        "Primeiro contato com o Claude Code: o que é, quando usar vs. CoWork vs. Chat. Instalação e primeiros passos para não-programadores e desenvolvedores.",
      readingTime: "10 min",
      available: true,
      sections: CAP10_SECTIONS,
    },
  ],
};
