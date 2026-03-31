// ─── Types ───────────────────────────────────────────────

export interface ChapterSection {
  id: string;
  title: string;
  content: string; // HTML
}

export interface EbookChapter {
  slug: string;
  number: number;
  title: string;
  summary: string;
  readingTime: string;
  available: boolean;
  sections: ChapterSection[];
}

export interface EbookMeta {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  author: string;
  coverColor: string;
  chapters: EbookChapter[];
}

// ─── Capítulo 1 ──────────────────────────────────────────

const CAP1_SECTIONS: ChapterSection[] = [
  {
    id: "introducao",
    title: "Introdução",
    content: `
<p>Bem-vindo ao início de uma jornada transformadora. A <strong>Inteligência Artificial Generativa</strong> está redefinindo o que é possível em praticamente todos os setores: desenvolvimento de software, medicina, gestão de empresas, educação, pesquisa, criação de conteúdo, documentação técnica, processos jurídicos e análise de investimentos.</p>
<p>Ao longo deste capítulo, você vai construir uma base sólida sobre o que é IA, como ela evoluiu e por que a IA Generativa representa um salto qualitativo diferente de tudo que veio antes. Essa fundação será essencial para os próximos capítulos, onde mergulharemos nos <code>LLMs</code>, nos <code>tokens</code> e nas técnicas de <code>Engenharia de Prompt</code> que transformam a forma como você trabalha.</p>
    `,
  },
  {
    id: "definicao-fundamental",
    title: "1. Inteligência Artificial: A Definição Fundamental",
    content: `
<p>A <strong>IA</strong> é um campo da ciência da computação dedicado à criação de máquinas capazes de realizar tarefas que normalmente exigem inteligência humana. O termo foi cunhado em 1956 por <strong>John McCarthy</strong> no Dartmouth Workshop (McCarthy, 1956). Antes disso, <strong>Alan Turing</strong> já explorava essa questão em 1950 com o artigo <em>"Computing Machinery and Intelligence"</em> (Turing, 1950).</p>
<p>Segundo Russell &amp; Norvig (2020), a IA pode ser entendida como um <em>continuum</em> entre máquinas que imitam comportamento humano e máquinas que raciocinam de forma racional e independente.</p>

<h3>O que é um Agente Inteligente?</h3>
<p>Um <strong>Agente Inteligente</strong> possui três características essenciais (Russell &amp; Norvig, 2020):</p>
<ol>
<li><strong>Percepção:</strong> observa seu ambiente através de sensores</li>
<li><strong>Ação:</strong> atua sobre o ambiente através de atuadores</li>
<li><strong>Objetivo:</strong> busca maximizar uma métrica de desempenho</li>
</ol>
<p><strong>Analogia do dia a dia:</strong> Pense em um médico na sala de emergência. Ele <em>percebe</em> o ambiente (monitores, sinais vitais, relato do paciente), <em>age</em> sobre ele (prescreve medicamentos, solicita exames, realiza procedimentos) e tem um <em>objetivo</em> claro (estabilizar o paciente). Um Agente Inteligente segue exatamente essa lógica — só que em formato digital.</p>

<blockquote>
<p><strong>Na Prática:</strong> Da próxima vez que você usar o ChatGPT, o Claude ou o Gemini, observe: você está fornecendo a <em>percepção</em> (seu <code>prompt</code>), a IA está executando a <em>ação</em> (gerando uma resposta), e o <em>objetivo</em> dela é maximizar a utilidade daquilo que entrega. Quanto mais claro o seu prompt, melhor o agente "percebe" — e melhor ele age.</p>
</blockquote>
    `,
  },
  {
    id: "jornada-historica",
    title: "2. A Jornada Histórica da IA",
    content: `
<h3>1950: O Momento Fundador</h3>
<p>Alan Turing publicou <em>"Computing Machinery and Intelligence"</em> propondo o <strong>Teste de Turing</strong> (Turing, 1950). A pergunta central era provocadora: "Pode uma máquina pensar?"</p>

<h3>1956–1974: O Verão da IA</h3>
<p>O <strong>Dartmouth Workshop</strong> de 1956 marcou o nascimento oficial da IA como campo de pesquisa (McCarthy, 1956). O otimismo era extraordinário. Pesquisadores acreditavam que máquinas com inteligência humana estariam prontas em poucos anos.</p>

<h3>1974–1993: Os Invernos da IA</h3>
<p>A realidade se impôs. Computadores eram lentos e caros, técnicas eram frágeis e quebravam fora de cenários controlados. O financiamento colapsou duas vezes, em ciclos que ficaram conhecidos como os <strong>Invernos da IA</strong>.</p>

<h3>2000–2017: O Renascimento Silencioso</h3>
<p>Três fatores convergiram silenciosamente: <strong>GPUs</strong> (poder computacional massivo), <strong>Big Data</strong> (volumes colossais de dados digitais) e avanços em <strong>Deep Learning</strong> (Goodfellow, Bengio &amp; Courville, 2016).</p>

<h3>2017–Presente: A Era Dourada</h3>
<p>A arquitetura <code>Transformer</code> (Vaswani et al., 2017) — apresentada no paper <em>"Attention is All You Need"</em> — mudou tudo. Essa inovação deu origem aos <code>LLMs</code>: GPT-1 (2018), GPT-3 (2020), Claude, Gemini, e a geração atual de modelos com janelas de contexto de 1 milhão de tokens.</p>

<blockquote>
<p><strong>Para Saber Mais:</strong> Os "Invernos da IA" são um lembrete valioso de que tecnologias transformadoras raramente seguem uma linha reta de progresso. Entender essa história evita tanto o ceticismo exagerado ("isso é moda passageira") quanto o entusiasmo cego ("a IA resolve tudo").</p>
</blockquote>
    `,
  },
  {
    id: "tres-pilares",
    title: "3. Os Três Pilares Tecnológicos",
    content: `
<p>A revolução da IA Generativa resulta da convergência de três pilares que se potencializaram mutuamente.</p>

<h3>Pilar 1: Poder Computacional (GPUs)</h3>
<p>As <strong>GPUs</strong> (Graphics Processing Units) executam milhões de cálculos em paralelo — característica perfeita para treinar redes neurais profundas. Originalmente desenvolvidas para gráficos 3D de jogos, foram "redirecionadas" para IA.</p>

<h3>Pilar 2: Big Data</h3>
<p>Bilhões de textos, imagens e vídeos digitalizados criaram o "combustível" necessário para alimentar modelos cada vez maiores.</p>

<h3>Pilar 3: Transformers e o Mecanismo de Attention</h3>
<p>A arquitetura <code>Transformer</code> processa toda a sequência de texto de uma vez, em paralelo, em vez de processar palavra por palavra sequencialmente (Vaswani et al., 2017). O mecanismo de <strong>Attention</strong> permite que o modelo identifique automaticamente quais partes do texto são mais relevantes.</p>

<blockquote>
<p><strong>Analogia Jurídica:</strong> Imagine um advogado analisando um contrato de 100 páginas. A abordagem antiga seria ler cada palavra sequencialmente. O <code>Transformer</code> funciona como se o advogado pudesse "escanear" o documento inteiro de uma vez e automaticamente focar nas cláusulas de confidencialidade, rescisão e penalidade.</p>
</blockquote>
    `,
  },
  {
    id: "analitica-vs-generativa",
    title: "4. IA Analítica vs. IA Generativa",
    content: `
<h3>IA Analítica: Classifica, Prevê, Detecta</h3>
<p>A IA Analítica examina dados existentes para extrair informações, classificar padrões ou fazer previsões. Ela não cria conteúdo novo.</p>
<ul>
<li>Classificar email como spam</li>
<li>Detectar nódulo em tomografia computadorizada</li>
<li>Prever <em>churn</em> de clientes</li>
</ul>

<h3>IA Generativa: Cria Conteúdo Novo</h3>
<p>A IA Generativa produz conteúdo original — texto, imagens, código, áudio — que não existia antes.</p>
<ul>
<li>Escrever artigos, emails, laudos</li>
<li>Gerar imagens, código, apresentações</li>
<li>Compor música, traduzir idiomas</li>
</ul>

<table>
<thead><tr><th>IA Analítica</th><th>IA Generativa</th></tr></thead>
<tbody>
<tr><td>Analisa dados existentes</td><td>Cria conteúdo novo</td></tr>
<tr><td>Classifica, prevê, detecta</td><td>Gera texto, imagens, código</td></tr>
<tr><td>Ex: Detecta nódulo em TC</td><td>Ex: Escreve o laudo da TC</td></tr>
<tr><td>Ex: Classifica risco de crédito</td><td>Ex: Redige o parecer de crédito</td></tr>
</tbody>
</table>

<p>A fronteira entre as duas está cada vez mais fluida. Modelos modernos combinam ambas: o Claude pode analisar um relatório (IA Analítica) e depois redigir um resumo executivo a partir dessa análise (IA Generativa).</p>
    `,
  },
  {
    id: "ia-multimodal",
    title: "5. IA Multimodal: Além do Texto",
    content: `
<p>Os primeiros <code>LLMs</code> processavam apenas texto. Modelos modernos são <strong>multimodais</strong> — processam texto, imagens, áudio e vídeo simultaneamente.</p>

<p><strong>Exemplos multidisciplinares:</strong></p>
<ul>
<li><strong>Medicina:</strong> Analisar imagem de raio-X e gerar laudo descritivo detalhado</li>
<li><strong>Advocacia:</strong> Ler PDF de contrato com tabelas e fluxogramas, extrair cláusulas-chave</li>
<li><strong>Marketing:</strong> Receber screenshot de campanha de concorrente e gerar análise de design + copy</li>
<li><strong>Engenharia:</strong> Receber diagrama técnico e gerar especificações textuais estruturadas</li>
<li><strong>Estudos:</strong> Enviar foto de lousa de aula e obter resumo organizado em tópicos</li>
</ul>

<blockquote>
<p><strong>Na Prática:</strong> A multimodalidade amplia enormemente o que você pode fazer com IA. Da próxima vez que precisar analisar um documento com gráficos, tabelas e texto, faça upload direto do PDF para o Claude ou o Gemini. O modelo processará texto e elementos visuais de forma integrada.</p>
</blockquote>
    `,
  },
  {
    id: "principais-modelos",
    title: "6. Os Principais Modelos de IA (2025–2026)",
    content: `
<table>
<thead><tr><th>Modelo</th><th>Empresa</th><th>Contexto</th><th>Diferencial</th></tr></thead>
<tbody>
<tr><td>GPT-4.1</td><td>OpenAI</td><td>1M tokens</td><td>Raciocínio lógico e compreensão de documentos longos</td></tr>
<tr><td>Claude Opus 4.6</td><td>Anthropic</td><td>1M tokens</td><td>Escrita sofisticada, raciocínio complexo, uso em agentes</td></tr>
<tr><td>Claude Sonnet 4.6</td><td>Anthropic</td><td>1M tokens</td><td>Equilíbrio velocidade/qualidade — ideal para uso diário</td></tr>
<tr><td>Gemini 2.5</td><td>Google</td><td>1M tokens</td><td>Multimodalidade avançada (vídeo, áudio) + busca web nativa</td></tr>
</tbody>
</table>

<p>Todos os modelos da geração atual oferecem janelas de contexto de <strong>1 milhão de tokens</strong> — o suficiente para processar livros inteiros em uma única interação.</p>

<h3>Modelos Open-Source</h3>
<p>O <strong>LLaMA 4</strong> (Meta, 2025), com arquitetura Mixture-of-Experts, e o <strong>Mistral Large 3</strong> (Mistral AI, 2025) são exemplos de modelos open-source competitivos — relevantes para empresas que precisam manter dados internos por razões de compliance.</p>
    `,
  },
  {
    id: "conclusao",
    title: "Conclusão",
    content: `
<p>Neste capítulo você construiu os alicerces para toda a jornada que vem pela frente:</p>
<ul>
<li><strong>O que é IA e Agentes Inteligentes</strong> — máquinas que percebem, agem e buscam objetivos.</li>
<li><strong>A jornada histórica</strong> — de Turing (1950) aos Invernos da IA até a Era Dourada dos <code>Transformers</code>.</li>
<li><strong>Os 3 pilares</strong> — GPUs + Big Data + <code>Transformers</code> criaram a tempestade perfeita para a revolução.</li>
<li><strong>IA Analítica vs. Generativa</strong> — uma classifica e prevê, a outra cria conteúdo novo.</li>
<li><strong>Multimodalidade</strong> — os <code>LLMs</code> atuais processam texto, imagens, áudio e vídeo de forma integrada.</li>
<li><strong>Os principais modelos</strong> — GPT-4.1, Claude Opus/Sonnet 4.6 e Gemini 2.5 lideram o mercado.</li>
</ul>
<p>No próximo capítulo, mergulharemos nos <strong>Large Language Models (<code>LLMs</code>)</strong> — o motor que faz a IA generativa funcionar.</p>
    `,
  },
  {
    id: "exercicios",
    title: "Exercícios de Fixação",
    content: `
<h3>Questão 1 (Múltipla Escolha)</h3>
<p>Um sistema de IA classifica ECGs em "ritmo sinusal", "fibrilação atrial" ou "bloqueio AV". Qual tipo de IA está sendo utilizada?</p>
<p>(A) IA Generativa &nbsp; (B) IA Analítica &nbsp; (C) IA Multimodal &nbsp; (D) Agente Generativo</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(B)</strong> — Classificar ECGs é tarefa de IA Analítica. O sistema analisa dados existentes e os classifica em categorias, sem criar conteúdo novo.</p>
</details>

<h3>Questão 2 (Múltipla Escolha)</h3>
<p>Qual tecnologia NÃO foi um dos três pilares fundamentais da revolução da IA moderna?</p>
<p>(A) GPUs &nbsp; (B) Big Data &nbsp; (C) Transformers &nbsp; (D) Computação Quântica</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(D)</strong> — Os três pilares foram GPUs, Big Data e Transformers. Computação Quântica, embora promissora, não foi fator determinante na revolução atual.</p>
</details>

<h3>Questão 3 (Verdadeiro ou Falso)</h3>
<ol>
<li><strong>Multimodalidade</strong> significa que a IA processa apenas texto e imagens. → <strong>FALSO</strong> — Inclui texto, imagens, áudio e vídeo.</li>
<li>O Teste de Turing foi proposto por John McCarthy em 1956. → <strong>FALSO</strong> — Foi proposto por Alan Turing em 1950.</li>
<li>GPUs foram originalmente desenvolvidas para jogos. → <strong>VERDADEIRO</strong></li>
</ol>
    `,
  },
  {
    id: "referencias",
    title: "Referências",
    content: `
<ol>
<li>Turing, A. (1950). <em>"Computing Machinery and Intelligence."</em> Mind, 59(236), 433–460.</li>
<li>McCarthy, J. (1956). <em>Dartmouth Summer Research Project on Artificial Intelligence.</em></li>
<li>Russell, S. &amp; Norvig, P. (2020). <em>"Artificial Intelligence: A Modern Approach."</em> 4th ed. Pearson.</li>
<li>Goodfellow, I., Bengio, Y. &amp; Courville, A. (2016). <em>"Deep Learning."</em> MIT Press.</li>
<li>Vaswani, A. et al. (2017). <em>"Attention is All You Need."</em> NeurIPS. arXiv:1706.03762.</li>
<li>Google (2025). <em>"Foundational Large Language Models &amp; Text Generation."</em></li>
<li>Anthropic (2025–2026). <em>Claude Documentation.</em> docs.anthropic.com.</li>
<li>OpenAI (2024–2025). <em>GPT Documentation.</em> platform.openai.com.</li>
<li>OECD (2026). <em>"Digital Education Outlook 2026."</em> OECD Publishing.</li>
<li>MIT News (2025). <em>"A New Way to Increase the Capabilities of Large Language Models."</em></li>
</ol>
    `,
  },
];

// ─── Capítulo 2 ──────────────────────────────────────────

const CAP2_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap2",
    title: "Introdução",
    content: `
<p>No capítulo anterior, você compreendeu o que é a IA Generativa e as revoluções tecnológicas que a tornaram possível. Agora chegou o momento de entrar no coração da tecnologia: os <strong>Large Language Models (LLMs)</strong>, o motor invisível dos assistentes de IA. Quando você conversa com o ChatGPT, Claude ou Gemini, não está falando com um buscador avançado ou uma base de dados. Você está interagindo com um LLM específico — um modelo neural massivo treinado em bilhões de páginas de texto.</p>
    `,
  },
  {
    id: "o-que-sao-llms",
    title: "1. O que são Large Language Models (LLMs)?",
    content: `
<p>Um <strong>LLM</strong> é um modelo de IA neural treinado em volumes massivos de texto. O termo "large" se refere a dois aspectos: o tamanho do conjunto de dados de treinamento (bilhões de documentos) e o tamanho do próprio modelo (bilhões de <strong>parâmetros</strong> — os "pesos" internos que codificam o conhecimento aprendido). A distinção fundamental é que LLMs não memorizam informações como um banco de dados — eles aprendem <strong>padrões estatísticos</strong> da linguagem humana.</p>

<h3>Evolução dos Modelos</h3>
<p>A evolução dos LLMs foi exponencial na última década. O GPT-3 (Brown et al., 2020) marcou o ponto de inflexão com 175 bilhões de parâmetros — uma escala impensável até então. Os modelos da geração atual operam em escalas ainda maiores, com janelas de contexto de centenas de milhares de <code>tokens</code> e capacidades multimodais que vão além do texto.</p>

<h3>Anatomia: LLM, Interface e Produto</h3>
<p>É essencial distinguir três camadas dessa tecnologia para evitar equívocos comuns:</p>
<ul>
<li><strong>LLM (Model):</strong> GPT-4o, Claude Opus, Gemini — o "motor"</li>
<li><strong>Interface (UI):</strong> ChatGPT.com, Claude.ai, Gemini.google.com — o "painel de controle"</li>
<li><strong>Produto Completo:</strong> Modelo + interface + políticas de uso — o "carro completo"</li>
</ul>
<p>Confundir essas camadas leva a conclusões incorretas. Dizer "o ChatGPT errou" é diferente de "o GPT-4o errou" — a interface pode adicionar filtros, memória e ferramentas externas que o modelo base não possui.</p>
    `,
  },
  {
    id: "como-llms-aprendem",
    title: "2. Como os LLMs Aprendem?",
    content: `
<h3>Estágio 1: Pré-Treinamento (Sem Supervisão)</h3>
<p>O pré-treinamento é a etapa que consome mais recursos computacionais. A tarefa ensinada ao modelo é deceptivamente simples: "Dada uma sequência de palavras, preveja a próxima." Repetida trilhões de vezes em textos da internet, livros e artigos científicos, essa tarefa força o modelo a internalizar estruturas gramaticais, fatos, raciocínio causal e relações entre conceitos.</p>

<blockquote>
<p><strong>Analogia do Mundo Real:</strong> Pense em um médico residente que, ao longo de anos, acompanha centenas de pacientes com tosse. Sem ninguém explicar formalmente as regras diagnósticas, ele aprende padrões: tosse seca + febre + dispneia → suspeitar de pneumonia. O LLM faz exatamente isso — mas com palavras e conceitos, em escala de trilhões de exemplos.</p>
</blockquote>

<h3>Estágio 2: Ajuste Fino (<em>Fine-Tuning</em>)</h3>
<p>Após o pré-treinamento, o modelo é refinado com dados curados por especialistas humanos. Pares de (pergunta, resposta de alta qualidade) ensinam o modelo a formatar respostas de forma útil e alinhada ao contexto de uso. No domínio do marketing, por exemplo, uma empresa pode realizar <em>fine-tuning</em> com conversas de sucesso de seus melhores agentes de atendimento — especializando o modelo para seu tom de voz e seus produtos.</p>

<h3>Estágio 3: RLHF — Aprendizado por Reforço com Feedback Humano</h3>
<p>O <strong>RLHF</strong> (<em>Reinforcement Learning from Human Feedback</em>) é a etapa que alinha o modelo às preferências humanas (Ouyang et al., 2022). O processo funciona em três passos: o modelo gera múltiplas respostas para a mesma pergunta; avaliadores humanos classificam qual é melhor; o modelo aprende a replicar o padrão das respostas mais bem avaliadas.</p>

<blockquote>
<p><strong>Exemplo Prático (Advocacia):</strong> Um advogado sênior que treina estagiários não explica cada regra processual em teoria — ele apresenta casos reais e aponta "essa estratégia funcionou para esse cliente, aquela foi prejudicial". O RLHF funciona da mesma forma: aprendizado por exemplos classificados, não por regras explícitas.</p>
</blockquote>
    `,
  },
  {
    id: "arquitetura-transformer",
    title: "3. A Arquitetura Transformer",
    content: `
<p>Antes de 2017, as redes neurais processavam texto de forma sequencial — uma palavra de cada vez, em ordem estrita. Isso gerava dois problemas críticos: lentidão no treinamento e perda de contexto em textos longos, pois o modelo "esquecia" as primeiras palavras ao chegar ao final de uma frase.</p>

<p>O artigo seminal <em>"Attention is All You Need"</em> (Vaswani et al., 2017) introduziu o <strong>Transformer</strong>, que processa todas as palavras de uma sequência <strong>simultaneamente</strong> usando o <strong>mecanismo de atenção</strong> (<code>attention mechanism</code>). Em vez de ler "O paciente apresenta dor retroesternal" palavra por palavra, o Transformer calcula de uma só vez como cada palavra se relaciona com todas as outras — inclusive as distantes.</p>

<blockquote>
<p><strong>Analogia da Engenharia:</strong> É a diferença entre a linha de montagem do Ford T — sequencial, uma peça por vez — e uma célula de manufatura moderna com robôs em paralelo, onde múltiplas operações ocorrem simultaneamente. O resultado é exponencialmente mais rápido e eficiente.</p>
</blockquote>

<blockquote>
<p><strong>Analogia dos Estudos:</strong> Ao ler um parágrafo acadêmico, seu cérebro não processa palavra por palavra em sequência estrita — ele identifica as palavras-chave e suas relações de forma quase simultânea, mesmo que estejam em posições distantes no texto. O <code>attention mechanism</code> simula exatamente esse comportamento cognitivo.</p>
</blockquote>
    `,
  },
  {
    id: "como-llm-gera-respostas",
    title: "4. Como o LLM Gera Respostas?",
    content: `
<p>A geração de texto em LLMs é <strong>auto-regressiva</strong>: o modelo produz um <code>token</code> (aproximadamente uma palavra ou parte de palavra) por vez, prevendo o próximo <code>token</code> mais provável dado todo o contexto acumulado até ali. Uma resposta de 500 palavras envolve 600 a 700 decisões individuais de "qual é o próximo <code>token</code>".</p>

<h3>Três Implicações Críticas</h3>

<p><strong>1. A qualidade do <code>prompt</code> é determinante</strong></p>
<p>Como o modelo calcula probabilidades com base no contexto fornecido, um <code>prompt</code> mal estruturado produz respostas genéricas. Compare: "Explique API" versus "Explique o conceito de API RESTful para um gestor não-técnico, com um exemplo de integração de pagamento online." A segunda instrução gera uma resposta radicalmente diferente — e mais útil.</p>

<p><strong>2. Não há <em>backtracking</em></strong></p>
<p>Uma vez que um <code>token</code> é gerado, o modelo não volta atrás para reconsiderar escolhas anteriores. Isso significa que uma decisão local — a escolha de uma palavra no início da resposta — define a trajetória de todo o texto subsequente, como uma primeira decisão em um planejamento estratégico que restringe todas as seguintes.</p>

<p><strong>3. Limites de coerência em respostas longas</strong></p>
<p>O contexto inicial se dilui à medida que a resposta cresce. Janelas de contexto maiores (200k <code>tokens</code> no Claude, 1M no Gemini 1.5 Pro) mitigam esse problema, mas não o eliminam. Para textos muito longos, dividir o problema em partes menores tende a produzir resultados superiores.</p>

<h3><code>Temperature</code>: Criatividade vs. Precisão</h3>
<p>O parâmetro <strong><code>temperature</code></strong> controla o equilíbrio entre criatividade e confiabilidade. <code>Temperature</code> alta (próxima de 1.0) aumenta a diversidade das respostas — útil para brainstorming e geração criativa. <code>Temperature</code> baixa (próxima de 0.1) torna as respostas mais previsíveis e confiáveis — preferível para tarefas que exigem precisão factual.</p>

<blockquote>
<p><strong>Na Prática — Marketing:</strong> Para gerar 50 variações de <em>subject lines</em> para uma campanha de e-mail, use <code>temperature</code> alta (0.8–1.0) para maximizar criatividade e diversidade. Para a validação final — verificar consistência de tom e clareza — reduza para 0.2–0.3, priorizando coerência sobre criatividade.</p>
</blockquote>
    `,
  },
  {
    id: "alucinacoes",
    title: "5. Simulação vs. Conhecimento: O Fenômeno das Alucinações",
    content: `
<p>Um equívoco frequente é tratar o LLM como um banco de dados de conhecimento verificável. Na prática, ele é um <strong>simulador de padrões linguísticos</strong>. Quando o padrão esperado para uma determinada pergunta não está claro nos dados de treinamento, o modelo preenche a lacuna com o que estatisticamente "parece correto" — gerando <strong>alucinações</strong>: informações incorretas apresentadas com aparente confiança.</p>

<p><strong>Exemplo do Mundo Jurídico:</strong> No caso <em>Mata v. Avianca</em> (2023), um advogado citou jurisprudências inteiramente fictícias geradas pelo ChatGPT em uma petição federal. O juiz identificou os casos falsos durante o julgamento, resultando em sanções processuais e danos significativos à reputação do escritório.</p>

<p><strong>Exemplo do Marketing:</strong> Um analista solicitou ao modelo dados de market share com precisão de duas casas decimais. O modelo gerou números plausíveis — completamente inventados, sem fonte verificável. A análise estratégica baseada nesses dados levaria a decisões incorretas.</p>

<p><strong>Regra de Ouro:</strong> Você é sempre o <strong>Validador Final</strong>. O LLM é um assistente poderoso, não uma fonte de verdade. Dados críticos — especialmente em contextos médicos, jurídicos e financeiros — devem ser verificados em fontes primárias. Este tema é aprofundado no Capítulo 7.</p>

<blockquote>
<p><strong>Para Saber Mais:</strong> O fenômeno das alucinações tem raízes na própria função objetivo do treinamento: o modelo aprende a maximizar a probabilidade do próximo <code>token</code>, não a "dizer a verdade". Pesquisadores desenvolvem técnicas como <em>Retrieval-Augmented Generation</em> (RAG) para mitigar esse problema — conectando o LLM a fontes de dados verificáveis em tempo real antes de gerar a resposta (Lewis et al., 2020).</p>
</blockquote>
    `,
  },
  {
    id: "interface-vs-api",
    title: "6. Interface vs. API",
    content: `
<p><strong>Interface (para a maioria dos usuários):</strong> ChatGPT.com, Claude.ai e Gemini são interfaces de conversação que não exigem conhecimento técnico. Nelas, o histórico da conversa, os arquivos enviados e as configurações de personalidade são gerenciados automaticamente pela plataforma.</p>

<p><strong>API (para desenvolvedores):</strong> A <strong>API</strong> (<em>Application Programming Interface</em>) é o canal técnico que permite integrar um LLM a outros sistemas de software. Em vez de acessar via interface web, um desenvolvedor envia requisições programáticas e recebe respostas que seu sistema pode processar automaticamente. A cobrança é feita por volume de <code>tokens</code> processados.</p>

<p>A distinção prática: um médico que usa o Claude.ai para auxiliar na redação de laudos está usando a <strong>interface</strong>. Uma plataforma de telemedicina que integra o Claude via API para sugerir CIDs com base nos sintomas registrados no prontuário eletrônico está usando a <strong>API</strong> — invisível ao usuário final, mas presente em cada resposta.</p>
    `,
  },
  {
    id: "principais-llms",
    title: "7. Os Principais LLMs (2025–2026)",
    content: `
<table>
<thead><tr><th>Modelo</th><th>Empresa</th><th>Contexto</th><th>Diferencial</th></tr></thead>
<tbody>
<tr><td>GPT-4o / o3</td><td>OpenAI</td><td>Até 128k tokens</td><td>Raciocínio complexo, matemática, código</td></tr>
<tr><td>Claude Opus</td><td>Anthropic</td><td>200k tokens</td><td>Escrita sofisticada, análise de documentos longos</td></tr>
<tr><td>Gemini 1.5 Pro</td><td>Google</td><td>Até 1M tokens</td><td>Maior contexto + multimodalidade + busca web nativa</td></tr>
</tbody>
</table>

<p><strong>GPT-4o / o3 (OpenAI):</strong> Destaca-se em raciocínio lógico estruturado, matemática e programação. O modelo <em>o3</em> introduz raciocínio em cadeia explícito (<em>chain-of-thought</em>) antes de gerar a resposta final.</p>

<p><strong>Claude Opus (Anthropic):</strong> Reconhecido pela qualidade da escrita em linguagem natural, análise cuidadosa de documentos longos e respostas seguras em tarefas sensíveis.</p>

<p><strong>Gemini 1.5 Pro (Google):</strong> Líder em janela de contexto e integração nativa com ferramentas de busca em tempo real — vantagem estratégica para tarefas que exigem informações atualizadas.</p>

<p><strong>Recomendação prática:</strong> A escolha do modelo importa menos do que a qualidade dos <code>prompts</code>. Um <code>prompt</code> bem estruturado em qualquer modelo moderno supera um <code>prompt</code> vago no modelo mais avançado disponível.</p>

<blockquote>
<p><strong>Para Saber Mais:</strong> A corrida entre os principais modelos evolui rapidamente. Para comparações atualizadas baseadas em benchmarks como MMLU, HumanEval e MATH, consulte o <strong>LMSYS Chatbot Arena</strong> (Chiang et al., 2024) — um ranking colaborativo construído a partir de avaliações humanas em tempo real, onde usuários comparam respostas de diferentes modelos sem saber qual é qual.</p>
</blockquote>
    `,
  },
  {
    id: "conclusao-cap2",
    title: "Conclusão",
    content: `
<p>Neste capítulo, você percorreu os fundamentos que sustentam todos os assistentes de IA modernos: o que são LLMs e por que o termo "large" importa; como aprendem em três estágios progressivos (pré-treinamento, <em>fine-tuning</em> e RLHF); a revolução arquitetural do Transformer e do <code>attention mechanism</code>; como a geração auto-regressiva funciona e por que o <code>prompt</code> é determinante; o fenômeno das alucinações e a postura correta de validação crítica; e a diferença entre interface e API na prática profissional.</p>
<p>No próximo capítulo, você mergulhará nos <strong>Tokens</strong> — a unidade funcional invisível da IA que define custo, memória e eficiência de cada interação.</p>
    `,
  },
  {
    id: "exercicios-cap2",
    title: "Exercícios de Fixação",
    content: `
<h3>Questão 1 (Múltipla Escolha)</h3>
<p>Um médico pergunta ao assistente de IA: "Qual a dose de indução do propofol?" e recebe "1,5 a 2,5 mg/kg IV". Como o modelo gerou essa resposta?</p>
<p>(A) Consultou um banco de dados farmacológico verificado<br>
(B) Previu <code>token</code> por <code>token</code> com base em padrões linguísticos aprendidos no treinamento<br>
(C) Realizou uma busca em tempo real na internet<br>
(D) Executou uma fórmula farmacológica pré-programada</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(B)</strong> — LLMs geram respostas prevendo a sequência de <code>tokens</code> mais provável com base em padrões aprendidos. Não há consulta a banco de dados nem busca em tempo real, a menos que ferramentas externas sejam explicitamente integradas.</p>
</details>

<h3>Questão 2 (Múltipla Escolha)</h3>
<p>Quando um LLM apresenta uma informação incorreta com aparente confiança, qual fenômeno está ocorrendo?</p>
<p>(A) Erro de compilação no modelo<br>
(B) Falha na conexão com a API<br>
(C) Alucinação<br>
(D) Limite de <code>tokens</code> excedido</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(C)</strong> — Alucinação: o modelo simula um padrão plausível de resposta sem que o conteúdo corresponda à realidade factual.</p>
</details>

<h3>Questão 3 (Verdadeiro ou Falso)</h3>
<ol>
<li>Um LLM com mais parâmetros sempre gera respostas melhores. <strong>Falso</strong> — A qualidade depende também da qualidade do treinamento, do RLHF e da adequação do modelo à tarefa específica.</li>
<li>O RLHF usa feedback humano para alinhar o modelo às preferências dos usuários. <strong>Verdadeiro</strong> — Avaliadores humanos classificam respostas e o modelo aprende a replicar o padrão das melhores avaliações.</li>
<li>Transformers processam texto sequencialmente, uma palavra por vez. <strong>Falso</strong> — Processam todas as palavras simultaneamente por meio do <code>attention mechanism</code>.</li>
</ol>

<h3>Questão 4 (Dissertativa)</h3>
<p>Explique com uma analogia do mundo real por que a qualidade do <code>prompt</code> é fundamental para a qualidade da resposta de um LLM.</p>
<details><summary><strong>Ver Resposta Modelo</strong></summary>
<p>Como um paciente descrevendo sintomas ao médico: "não me sinto bem" gera uma investigação genérica e demorada; "dor torácica retroesternal em aperto há duas horas, com irradiação para o braço esquerdo e sudorese fria" gera uma hipótese diagnóstica imediata e específica. O LLM calcula probabilidades com base no contexto fornecido — quanto mais preciso e rico o contexto, mais dirigida e útil é a resposta gerada.</p>
</details>

<h3>Questão 5 (Aplicação Prática)</h3>
<p>Você é gestor de marketing e precisa gerar 50 variações de <em>subject lines</em> para uma campanha de e-mail. Qual modelo você escolheria e como ajustaria a <code>temperature</code>? Justifique.</p>
<details><summary><strong>Ver Resposta Modelo</strong></summary>
<p>Qualquer modelo moderno atende à tarefa. O parâmetro crítico é a <code>temperature</code>: alta (0.8–1.0) para maximizar criatividade e diversidade nas variações geradas. Para a validação final — verificar tom, clareza e consistência com a identidade da marca — reduza a <code>temperature</code> para 0.2–0.3, priorizando coerência sobre criatividade.</p>
</details>
    `,
  },
  {
    id: "referencias-cap2",
    title: "Referências",
    content: `
<ol>
<li>Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). <em>Attention is All You Need</em>. NeurIPS. <a href="https://arxiv.org/abs/1706.03762">arxiv.org/abs/1706.03762</a></li>
<li>Brown, T., Mann, B., Ryder, N., et al. (2020). <em>Language Models are Few-Shot Learners</em>. NeurIPS. <a href="https://arxiv.org/abs/2005.14165">arxiv.org/abs/2005.14165</a></li>
<li>Ouyang, L., Wu, J., Jiang, X., et al. (2022). <em>Training language models to follow instructions with human feedback</em>. NeurIPS. <a href="https://arxiv.org/abs/2203.02155">arxiv.org/abs/2203.02155</a></li>
<li>Radford, A., Narasimhan, K., Salimans, T., &amp; Sutskever, I. (2018). <em>Improving Language Understanding by Generative Pre-Training</em>. OpenAI Blog.</li>
<li>Christiano, P., Leike, J., Brown, T., et al. (2017). <em>Deep reinforcement learning from human preferences</em>. NeurIPS. <a href="https://arxiv.org/abs/1706.03741">arxiv.org/abs/1706.03741</a></li>
<li>Lewis, P., Perez, E., Piktus, A., et al. (2020). <em>Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks</em>. NeurIPS. <a href="https://arxiv.org/abs/2005.11401">arxiv.org/abs/2005.11401</a></li>
<li>Chiang, W.-L., Zheng, L., Sheng, Y., et al. (2024). <em>Chatbot Arena: An Open Platform for Evaluating LLMs by Human Preference</em>. arXiv. <a href="https://arxiv.org/abs/2403.04132">arxiv.org/abs/2403.04132</a></li>
<li>Goodfellow, I., Bengio, Y., &amp; Courville, A. (2016). <em>Deep Learning</em>. MIT Press.</li>
<li>Russell, S. &amp; Norvig, P. (2020). <em>Artificial Intelligence: A Modern Approach</em> (4th ed.). Pearson.</li>
<li>Google DeepMind. (2024). <em>Gemini: A Family of Highly Capable Multimodal Models</em>. <a href="https://arxiv.org/abs/2312.11805">arxiv.org/abs/2312.11805</a></li>
</ol>
    `,
  },
];

// ─── Capítulo 3 ──────────────────────────────────────────

const CAP3_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap3",
    title: "Introdução",
    content: `
<p>Nos capítulos anteriores, você conheceu a IA Generativa e compreendeu como os LLMs aprendem padrões a partir de texto. Agora chegamos ao fundamento técnico que sustenta tudo: os <strong>tokens</strong>.</p>
<p>LLMs não processam linguagem da forma como humanos fazem — palavra por palavra, com contexto semântico imediato. Eles trabalham com <strong>tokens</strong>: unidades discretas e codificadas que funcionam como a língua nativa do modelo. Um token pode representar uma palavra inteira, uma sílaba, um prefixo ou até um caractere isolado.</p>
<p>Compreender tokens não é um detalhe técnico secundário. Tokens determinam quanto você paga por cada interação, quanto o modelo consegue "lembrar" de uma conversa, com que eficiência diferentes idiomas são processados, e como otimizar seus prompts para resultados melhores com menos custo.</p>
    `,
  },
  {
    id: "o-que-sao-tokens",
    title: "1. O Que São Tokens?",
    content: `
<p>Um <strong>token</strong> é a menor unidade semântica que um LLM processa. Se os átomos são os blocos fundamentais da matéria, tokens são os blocos fundamentais da linguagem para uma IA.</p>

<h3>A Analogia do Quebra-Cabeça</h3>
<p>Imagine que você vai montar um quebra-cabeça de uma paisagem. Você não olha para a imagem inteira de uma vez — você a analisa peça por peça, identificando cores, bordas e encaixes. Um LLM faz o mesmo com texto: desmonta cada frase em tokens, processa cada um individualmente e então reconstrói o significado a partir das relações entre eles.</p>
<p>A diferença crucial: o tamanho de cada "peça" varia. Palavras comuns em inglês (<code>the</code>, <code>and</code>, <code>is</code>) costumam ser um único token. Palavras raras ou compostas, como <code>esofagogastroduodenoscopia</code>, podem ser divididas em 10 ou mais tokens.</p>

<h3>Exemplos de Tokenização por Domínio</h3>
<table>
<thead><tr><th>Texto</th><th>Idioma</th><th>Tokens estimados</th></tr></thead>
<tbody>
<tr><td>"A esofagogastroduodenoscopia é fundamental no diagnóstico"</td><td>PT-BR</td><td>~13 tokens</td></tr>
<tr><td>"O demandante requereu indenização por danos morais"</td><td>PT-BR</td><td>~10 tokens</td></tr>
<tr><td>"Aumente suas vendas em 300% com nossa plataforma de IA"</td><td>PT-BR</td><td>~15 tokens</td></tr>
<tr><td><code>function tokenize(text) { return text.split(/\\s+/); }</code></td><td>Código JS</td><td>~20 tokens</td></tr>
</tbody>
</table>
<p>Código-fonte consome mais tokens que linguagem natural — cada símbolo especial (chaves, parênteses, ponto-e-vírgula) tende a ser tokenizado separadamente.</p>

<h3>Como Funciona a Tokenização?</h3>
<p>Dois algoritmos dominam o campo. O <strong>Byte Pair Encoding (BPE)</strong> (Sennrich et al., 2016) identifica os pares de caracteres mais frequentes em um corpus de treinamento e os substitui iterativamente por um único símbolo, construindo um vocabulário otimizado para o idioma dos dados. É o algoritmo base utilizado em modelos da família GPT.</p>
<p>O <strong>SentencePiece</strong> (Kudo &amp; Richardson, 2018) opera diretamente sobre bytes brutos, sem pressupostos linguísticos prévios — o que o torna mais agnóstico em relação ao idioma. Modelos como Gemini utilizam variações desta abordagem.</p>
<p>Um ponto frequentemente ignorado: <strong>cada modelo possui seu próprio tokenizador e vocabulário</strong>. O mesmo texto pode gerar 12 tokens no GPT-5.2 e 9 tokens no Claude Opus 4.6. Comparar custos entre modelos sem considerar essa diferença leva a estimativas incorretas.</p>

<blockquote>
<p><strong>Para Saber Mais:</strong> O tokenizador do GPT é chamado de <code>tiktoken</code> e é open-source — você pode instalá-lo via <code>pip install tiktoken</code> e explorar como qualquer texto é segmentado. Para Claude, a Anthropic disponibiliza um endpoint de contagem de tokens via API. A ideia central do BPE — comprimir pares de símbolos frequentes — é a mesma que algoritmos de compressão de dados como ZIP usam há décadas.</p>
</blockquote>
    `,
  },
  {
    id: "por-que-tokens-importam",
    title: "2. Por Que Tokens Importam na Prática",
    content: `
<h3>Razão 1: Custo — Cada Token Tem Preço</h3>
<p>Toda API de LLM cobra com base em tokens processados, divididos em <strong>tokens de entrada</strong> (seu prompt, documentos, histórico) e <strong>tokens de saída</strong> (a resposta gerada). Tokens de saída costumam custar de 3 a 5 vezes mais — pois gerar texto exige mais processamento do que lê-lo.</p>

<table>
<thead><tr><th>Modelo</th><th>Entrada (1M tokens)</th><th>Saída (1M tokens)</th></tr></thead>
<tbody>
<tr><td>GPT-5.2</td><td>$3,00</td><td>$15,00</td></tr>
<tr><td>Claude Opus 4.6</td><td>$15,00</td><td>$75,00</td></tr>
<tr><td>Gemini 3 Pro</td><td>$1,25</td><td>$5,00</td></tr>
</tbody>
</table>
<p><em>Preços aproximados de mercado (2026). Consulte a documentação oficial de cada provedor para valores atualizados.</em></p>

<p><strong>Exemplo jurídico:</strong> Uma consultoria que processa 50 contratos por semana — cerca de 5 milhões de tokens no total — gastaria aproximadamente $60 com GPT-5.2 versus $1.200 com Claude Opus 4.6. A diferença não é trivial para o orçamento de operações.</p>

<p><strong>Exemplo de marketing:</strong> Uma equipe que dispara 500 prompts por dia para geração de copy publicitário. Reduzir cada prompt de 100 para 80 tokens elimina 10% dos custos — sem perda de qualidade, apenas com prompts mais objetivos.</p>

<h3>Razão 2: Janela de Contexto — A Memória de Trabalho do Modelo</h3>
<p>A <strong>janela de contexto</strong> define quantos tokens o modelo consegue processar simultaneamente em uma única interação. Ela engloba: seu prompt, todos os documentos enviados, o histórico da conversa e a resposta que está sendo gerada.</p>

<table>
<thead><tr><th>Modelo</th><th>Contexto Padrão</th><th>Contexto Expandido</th></tr></thead>
<tbody>
<tr><td>GPT-5.2</td><td>400k tokens (~600 páginas)</td><td>—</td></tr>
<tr><td>Claude Opus 4.6</td><td>200k tokens (~300 páginas)</td><td>1M tokens (~1.500 pág)</td></tr>
<tr><td>Gemini 3 Pro</td><td>1M tokens (~1.500 páginas)</td><td>2M tokens (enterprise)</td></tr>
</tbody>
</table>

<blockquote>
<p><strong>Analogia médica:</strong> Pense na janela de contexto como a memória de trabalho de um médico durante uma consulta. Ele consegue manter em mente com clareza as queixas do paciente atual, seus últimos exames e a hipótese diagnóstica. Se a consulta se estender demais sem anotações, os detalhes iniciais começam a se perder. O LLM faz exatamente o mesmo.</p>
</blockquote>

<h3>Razão 3: Eficiência entre Idiomas</h3>
<p>Tokenizadores treinados predominantemente em inglês constroem vocabulários mais eficientes para esse idioma. O resultado prático: textos em português tendem a consumir mais tokens para expressar o mesmo conteúdo.</p>

<table>
<thead><tr><th>Frase</th><th>Tokens estimados</th></tr></thead>
<tbody>
<tr><td>PT: "A implementação de políticas de sustentabilidade corporativa"</td><td>~9 tokens</td></tr>
<tr><td>EN: "The implementation of corporate sustainability policies"</td><td>~6 tokens</td></tr>
</tbody>
</table>

<p>A diferença média é de <strong>20-35% mais tokens</strong> em português em comparação ao inglês equivalente. Modelos modernos, porém, respondem com excelente qualidade em português — a diferença de eficiência raramente justifica mudar de idioma no seu fluxo de trabalho.</p>

<blockquote>
<p><strong>Na Prática — Exercício de calibração de custos:</strong> Acesse o <strong>OpenAI Tokenizer</strong> (<a href="https://platform.openai.com/tokenizer">platform.openai.com/tokenizer</a>) — é gratuito e não requer login. Cole um prompt que você usa com frequência, note a contagem, reescreva removendo saudações e repetições desnecessárias, e compare. Na maioria dos casos, é possível reduzir 20-40% sem perda de qualidade.</p>
</blockquote>
    `,
  },
  {
    id: "visualizando-tokens",
    title: "3. Visualizando Tokens: Ferramentas Disponíveis",
    content: `
<p>Você não precisa estimar tokens de cabeça — existem ferramentas dedicadas para isso.</p>

<p><strong>OpenAI Tokenizer</strong> (<a href="https://platform.openai.com/tokenizer">platform.openai.com/tokenizer</a>): Interface visual gratuita que mostra como qualquer texto é segmentado pelo tokenizador GPT. Cada token recebe uma cor diferente, tornando visível exatamente onde as divisões ocorrem. Ideal para entender por que certas palavras consomem mais tokens do que parecem.</p>

<p><strong>Anthropic Console</strong> (<a href="https://console.anthropic.com">console.anthropic.com</a>): Ao usar a API do Claude, é possível consultar a contagem exata de tokens via endpoint dedicado — útil para automações que precisam controlar custos com precisão.</p>

<p><strong>Tiktoken (Python)</strong>: A biblioteca open-source da OpenAI permite integrar contagem de tokens diretamente em pipelines de código. Com poucas linhas, você pode auditar automaticamente o tamanho de prompts antes de enviá-los à API.</p>

<blockquote>
<p><strong>Na Prática — Comparação entre idiomas:</strong> Acesse o OpenAI Tokenizer. Cole: <code>"Tratamento da hipertensão arterial sistêmica"</code> (PT-BR). Anote os tokens (estimativa: ~9). Cole: <code>"Treatment of systemic arterial hypertension"</code> (EN). Anote os tokens (estimativa: ~6). Calcule a diferença percentual: ~33% mais eficiente em inglês. Conclusão: para uso cotidiano, escreva em português — sua precisão no idioma nativo supera o ganho marginal de eficiência.</p>
</blockquote>
    `,
  },
  {
    id: "gestao-janela-contexto",
    title: "4. Janela de Contexto: Gestão e Estratégias",
    content: `
<p>A janela de contexto é a <strong>memória de trabalho</strong> do LLM — ela inclui tudo que o modelo processa simultaneamente: o prompt inicial, documentos carregados, histórico da conversa e a resposta em construção. Quando a conversa excede o limite, os tokens mais antigos são descartados sem aviso.</p>

<p>Esse comportamento cria um problema prático em conversas longas ou análises de documentos extensos: o modelo pode "esquecer" instruções iniciais, perder o fio de argumentações anteriores ou repetir análises já feitas.</p>

<p><strong>Estratégias práticas de gestão:</strong></p>
<ul>
<li><strong>Escolha o modelo certo para o tamanho da tarefa:</strong> Para analisar um prontuário de 20 páginas, Claude 200k ou GPT-5.2 400k bastam. Para processar um processo judicial completo de 500 páginas, Gemini 3 Pro com contexto expandido é mais adequado.</li>
<li><strong>Resuma periodicamente:</strong> Em conversas longas, peça ao modelo que sintetize os pontos principais a cada 5-10 interações antes de continuar.</li>
<li><strong>Quebre tarefas complexas:</strong> Em vez de enviar 30 documentos de uma vez, processe em lotes e consolide os resultados.</li>
</ul>

<blockquote>
<p><strong>Para Saber Mais:</strong> A gestão da janela de contexto é tão importante que dedicamos um capítulo inteiro ao tema. No <strong>Capítulo 6: Janela de Contexto</strong>, exploraremos técnicas avançadas como <em>context compression</em>, <em>retrieval-augmented generation (RAG)</em> e gerenciamento de memória em agentes autônomos.</p>
</blockquote>
    `,
  },
  {
    id: "infraestrutura-gpus",
    title: "5. Por Trás dos Bastidores: Infraestrutura e GPUs",
    content: `
<p>Entender tokens ajuda a compreender <em>por que</em> os LLMs são tão caros para operar — e por que modelos mais poderosos custam mais.</p>

<p>LLMs processam tokens em <strong>paralelo</strong>, não sequencialmente. Quando você envia um prompt de 500 tokens, o modelo não lê palavra por palavra como um humano — ele processa todos os tokens simultaneamente, calculando as relações entre cada par de tokens (os chamados <em>attention scores</em>). Esse cálculo cresce quadraticamente: dobrar o número de tokens quadruplica o processamento necessário (Vaswani et al., 2017).</p>

<p>Para suportar esse volume de operações matemáticas, são necessárias <strong>GPUs</strong> (unidades de processamento gráfico) de alta performance — tipicamente de fabricantes como NVIDIA. Uma GPU moderna consegue realizar trilhões de operações de ponto flutuante por segundo (TFLOPS), o que viabiliza o processamento de janelas de contexto de milhões de tokens em tempo razoável.</p>

<p>O custo diferencial entre modelos reflete diretamente essa infraestrutura. Claude Opus 4.6, com suas capacidades de raciocínio avançado e janela estendida de 1M tokens, exige significativamente mais recursos computacionais do que modelos menores e mais rápidos como Claude Haiku. Saber isso ajuda a tomar decisões de custo-benefício mais informadas.</p>

<blockquote>
<p><strong>Para Saber Mais:</strong> Se você tem curiosidade sobre a matemática por trás do processamento paralelo de tokens, o paper <strong>"Attention is All You Need"</strong> (Vaswani et al., 2017) é a referência fundacional. Ele introduz o mecanismo de <em>self-attention</em> — o coração de todos os Transformers modernos.</p>
</blockquote>
    `,
  },
  {
    id: "conclusao-cap3",
    title: "Conclusão",
    content: `
<p>Tokens são a <strong>moeda da IA Generativa</strong>: cada interação tem um custo mensurável, uma capacidade de memória definida e uma eficiência que varia por idioma e tipo de conteúdo. Compreender tokens não é um exercício acadêmico — é uma habilidade prática que impacta diretamente o custo das suas automações, a qualidade das suas análises e a efetividade dos seus prompts.</p>
<p>A regra de ouro é simples: <strong>seja conciso, específico e objetivo</strong>. Remover saudações, repetições e qualificadores desnecessários de um prompt não apenas economiza tokens — treina um hábito de comunicação mais precisa que beneficia qualquer interação, humana ou artificial.</p>
<p>No próximo capítulo, damos um passo além: exploraremos os <strong>Word Embeddings</strong> — a forma como o LLM transforma tokens em números e, a partir desses números, "entende" o significado e as relações semânticas entre palavras.</p>
    `,
  },
  {
    id: "exercicios-cap3",
    title: "Exercícios de Fixação",
    content: `
<h3>Questão 1 — Múltipla Escolha</h3>
<p>Qual das estratégias abaixo <strong>NÃO</strong> ajuda a reduzir o consumo de tokens em um prompt?</p>
<p>(A) Escrever prompts concisos e objetivos<br>
(B) Evitar repetições e reformulações desnecessárias<br>
(C) Adicionar frases longas "para garantir que o modelo entenda"<br>
(D) Remover saudações e fechamentos formais</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(C)</strong> — Frases longas e prolixas consomem mais tokens sem adicionar clareza. LLMs modernos compreendem instruções concisas com precisão equivalente ou superior.</p>
</details>

<h3>Questão 2 — Múltipla Escolha</h3>
<p>Por que o termo <code>"Esofagogastroduodenoscopia"</code> consome mais tokens em PT-BR do que <code>"Esophagogastroduodenoscopy"</code> em inglês?</p>
<p>(A) Português possui mais letras no alfabeto<br>
(B) O inglês está mais representado nos dados de treinamento, resultando em vocabulários tokenizadores mais eficientes para esse idioma<br>
(C) A IA não reconhece terminologia médica em português<br>
(D) Cada idioma usa um algoritmo de tokenização completamente diferente</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(B)</strong> — Tokenizadores treinados com maior volume de dados em inglês constroem vocabulários com tokens maiores, enquanto palavras raras em outros idiomas tendem a ser fragmentadas em subunidades menores.</p>
</details>

<h3>Questão 3 — Verdadeiro ou Falso</h3>
<ol>
<li>Tokens de saída são sempre mais baratos que tokens de entrada. <strong>FALSO</strong> — Tokens de saída custam de 3 a 5 vezes mais, pois gerar texto é computacionalmente mais intensivo.</li>
<li>Português funciona mal em LLMs modernos devido à tokenização menos eficiente. <strong>FALSO</strong> — A qualidade das respostas em português é excelente; a diferença de eficiência (~20-35%) é marginal para uso prático.</li>
<li>Cada modelo possui seu próprio tokenizador, e o mesmo texto pode gerar contagens de tokens diferentes entre modelos. <strong>VERDADEIRO</strong> — GPT usa tiktoken/BPE, Gemini usa SentencePiece; vocabulários distintos geram segmentações distintas.</li>
</ol>

<h3>Questão 4 — Análise de Custo</h3>
<p>Compare o custo de processar 50 contratos jurídicos — estimativa de 100k tokens de entrada e 20k tokens de saída — usando GPT-5.2 versus Claude Opus 4.6. Além do custo, que outros fatores devem ser considerados?</p>
<details><summary><strong>Ver Resposta Modelo</strong></summary>
<p><strong>GPT-5.2:</strong> $0,30 (entrada) + $0,30 (saída) = ~$0,60<br>
<strong>Claude Opus 4.6:</strong> $1,50 (entrada) + $1,50 (saída) = ~$3,00<br>
Diferença de 5x no custo. Fatores adicionais: qualidade da análise jurídica, tamanho da janela de contexto, latência e conformidade com políticas de privacidade.</p>
</details>

<h3>Questão 5 — Aplicação Prática</h3>
<p>Acesse o <strong>OpenAI Tokenizer</strong> e compare:</p>
<ul>
<li>Texto A: <code>"Tratamento da hipertensão arterial sistêmica"</code> (PT-BR)</li>
<li>Texto B: <code>"Treatment of systemic arterial hypertension"</code> (EN)</li>
</ul>
<p>Quantos tokens cada texto gera? O resultado justifica mudar para inglês em uso cotidiano?</p>
<details><summary><strong>Ver Resposta Modelo</strong></summary>
<p>PT ≈ 9 tokens; EN ≈ 6 tokens. Diferença de ~33%. Para uso cotidiano de baixo volume, a economia é desprezível. Para automações em escala (>1M tokens/dia), a análise custo-benefício deve considerar também a precisão obtida ao escrever no idioma nativo.</p>
</details>
    `,
  },
  {
    id: "referencias-cap3",
    title: "Referências",
    content: `
<ol>
<li>Sennrich, R., Haddow, B., &amp; Birch, A. (2016). <em>Neural Machine Translation of Rare Words with Subword Units</em>. ACL 2016. <a href="https://arxiv.org/abs/1508.07909">arxiv.org/abs/1508.07909</a></li>
<li>Kudo, T., &amp; Richardson, J. (2018). <em>SentencePiece: A simple and language independent subword tokenizer</em>. EMNLP 2018. <a href="https://arxiv.org/abs/1808.06226">arxiv.org/abs/1808.06226</a></li>
<li>Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). <em>Attention is All You Need</em>. NeurIPS. <a href="https://arxiv.org/abs/1706.03762">arxiv.org/abs/1706.03762</a></li>
<li>OpenAI (2024–2026). <em>Tokenization Documentation &amp; tiktoken</em>. <a href="https://platform.openai.com/docs/guides/tokens">platform.openai.com/docs/guides/tokens</a></li>
<li>Anthropic (2025–2026). <em>Claude Tokenization &amp; API Pricing Documentation</em>. <a href="https://docs.anthropic.com/claude/docs/tokens">docs.anthropic.com/claude/docs/tokens</a></li>
<li>Google DeepMind (2025–2026). <em>Gemini 3 Pro Technical Specifications &amp; Pricing</em>. <a href="https://cloud.google.com/vertex-ai/docs/generative-ai/pricing">cloud.google.com/vertex-ai/docs/generative-ai/pricing</a></li>
</ol>
    `,
  },
];

// ─── Capítulo 4 ──────────────────────────────────────────

const CAP4_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap4",
    title: "Introdução: O Problema da Incompreensão",
    content: `
<p>Imagine você chegando a um país onde não fala a língua. Você consegue <em>ver</em> as palavras escritas nas placas, nos cardápios, nos letreiros — mas não faz a menor ideia do que significam. O computador enfrenta um problema parecido: ele <em>vê</em> sequências de caracteres, mas não as <em>entende</em>.</p>
<p>Se você digitar "cachorro" e "cão" em um buscador tradicional, o computador trata essas duas palavras como coisas completamente diferentes. Não faz ideia de que significam a mesma coisa. Da mesma forma, "smartphone" e "celular" são, para a máquina, tão diferentes quanto "abacaxi" e "helicóptero".</p>
<p>Como resolvemos isso? Como fazemos a máquina <em>compreender</em> que certas palavras são próximas em significado, enquanto outras são distantes?</p>
<p>A resposta é elegante: <strong>convertemos palavras em números</strong>.</p>
<p>Bem-vindo ao mundo dos <strong>word embeddings</strong> — a tecnologia que permite que a IA não apenas leia palavras, mas realmente as <em>entenda</em>.</p>

<blockquote>
<p><strong>Conexão com o Capítulo 3:</strong> No capítulo anterior, vimos que a IA não lê palavras inteiras — ela lê <strong>tokens</strong>, pedaços padronizados de texto. Agora, vamos descobrir o que acontece <em>depois</em> da tokenização: cada token precisa ser convertido em um <strong>vetor numérico</strong> (embedding) para que o modelo possa processar seu significado. O pipeline completo é: <strong>texto → tokens → embeddings → processamento pelo modelo</strong>.</p>
</blockquote>
    `,
  },
  {
    id: "base-teorica",
    title: "1. A Base Teórica — 'Diga-me com Quem Andas...'",
    content: `
<p>Antes de mergulhar na tecnologia, vale entender o princípio linguístico que sustenta tudo isso.</p>
<p>Em 1957, o linguista britânico <strong>J.R. Firth</strong> cunhou uma frase que se tornou um dos pilares da linguística computacional moderna:</p>

<blockquote>
<p><em>"You shall know a word by the company it keeps."</em><br>("Você conhecerá uma palavra pela companhia que ela mantém.")</p>
</blockquote>

<p>Essa ideia, conhecida como <strong>hipótese distribucional</strong>, já havia sido formalizada por <strong>Zellig Harris</strong> em 1954: palavras que aparecem em contextos semelhantes tendem a ter significados semelhantes (Harris, 1954; Firth, 1957).</p>
<p>Pense nisso com uma analogia do dia a dia. Se você ouve constantemente alguém ser mencionado junto com "tribunal", "petição", "audiência" e "recurso", você deduz que essa pessoa é advogada — mesmo sem ninguém te dizer. Da mesma forma, se uma palavra aparece frequentemente ao lado de "latir", "raça", "coleira" e "veterinário", o modelo aprende que ela provavelmente se refere a um cachorro.</p>
<p>Esse é o princípio fundamental: <strong>o significado de uma palavra emerge dos contextos em que ela aparece</strong>. E é exatamente esse princípio que os modelos de embedding exploram computacionalmente.</p>
    `,
  },
  {
    id: "do-simbolo-ao-vetor",
    title: "2. Do Símbolo ao Vetor — O Salto Conceitual",
    content: `
<h3>O Problema: Representações Sem Significado</h3>
<p>Até a década de 2010, os computadores usavam uma abordagem chamada <strong>one-hot encoding</strong>. Imagine um dicionário de 1 milhão de palavras. Para cada palavra, você cria um vetor gigante com 1 milhão de posições:</p>
<ul>
<li>"gato" → [0, 0, 0, ..., <strong>1</strong>, ..., 0, 0] (o 1 aparece apenas na posição de "gato")</li>
<li>"cão" → [0, 0, ..., <strong>1</strong>, ..., 0, 0] (o 1 aparece apenas na posição de "cão")</li>
</ul>
<p>Esse método funciona para identificar palavras, mas é um desastre para <em>entendê-las</em>:</p>
<ol>
<li><strong>Ineficiente:</strong> 1 milhão de zeros para representar uma única palavra.</li>
<li><strong>Sem significado:</strong> o computador não enxerga qualquer relação entre "gato" e "cão".</li>
<li><strong>Sem gradação:</strong> "Gato" é tão diferente de "cão" quanto de "geladeira".</li>
</ol>
<p>É como tentar entender a personalidade de alguém apenas pelo número do CPF — o número identifica, mas não diz nada sobre quem a pessoa é.</p>

<h3>A Solução: Vetores Densos com Significado</h3>
<p>A inovação revolucionária foi criar vetores <strong>muito menores</strong> (50 a 3.072 dimensões) que <strong>captam significado</strong>. Agora "gato" e "cão" não são representados como 1 milhão de zeros — eles são vetores de, digamos, 768 números:</p>
<ul>
<li>"gato" → [0.25, −0.18, 0.52, ..., −0.31] (768 números)</li>
<li>"cão" → [0.26, −0.19, 0.51, ..., −0.30] (768 números)</li>
</ul>
<p>Vê o padrão? Os números são quase iguais! Isso não é coincidência — é engenharia. Cada dimensão captura um "aspecto" diferente do significado: animalidade, domesticação, velocidade de movimento, tamanho aproximado... e assim por diante até 768 dimensões.</p>

<blockquote>
<p><strong>Para Saber Mais:</strong> Por que tantas dimensões? Pense na longitude e latitude de um GPS: com apenas 2 dimensões, você posiciona qualquer ponto no planeta. Com 768 dimensões, você posiciona qualquer palavra em um "espaço de significados" tão rico que palavras similares naturalmente ficam próximas — como cidades do mesmo país ficam próximas em um mapa.</p>
</blockquote>
    `,
  },
  {
    id: "word2vec-glove",
    title: "3. A Revolução Word2Vec e GloVe (2013-2014)",
    content: `
<p>No início dos anos 2010, criar esses vetores era computacionalmente caro e lento. Então em 2013, <strong>Tomas Mikolov</strong> e colegas do Google tiveram uma ideia genial: usar redes neurais simples para aprender essas representações em escala massiva.</p>

<h3>Word2Vec: Simplicidade e Velocidade</h3>
<p>O <strong>Word2Vec</strong> (Mikolov et al., 2013) operava com duas arquiteturas elegantemente simples:</p>
<ol>
<li><strong>CBOW (Continuous Bag of Words):</strong> você mostra ao modelo as palavras <em>vizinhas</em> (contexto) e pede para ele prever a palavra central. É como o jogo de adivinhação: "Eu vi um ___ miar" → resposta: "gato".</li>
<li><strong>Skip-gram:</strong> o inverso — você mostra a palavra central e pede para prever o contexto. "gato" → prever "miar", "fofo", "animal", etc.</li>
</ol>
<p>Ambas as arquiteturas aplicavam a hipótese distribucional de Firth na prática: ao aprender a prever contextos, o modelo descobria que palavras com contextos semelhantes devem ter vetores semelhantes.</p>

<h3>GloVe: A Visão Global</h3>
<p>Um ano depois, em 2014, <strong>Pennington, Socher e Manning</strong> propuseram o <strong>GloVe (Global Vectors)</strong>, que combinava o melhor de duas abordagens:</p>
<ul>
<li><strong>Visão local:</strong> como Word2Vec, capturava o contexto imediato de cada palavra.</li>
<li><strong>Visão global:</strong> também mapeava padrões gerais de co-ocorrência em todo um corpus gigante.</li>
</ul>

<blockquote>
<p><strong>Na Prática — Analogias Matemáticas:</strong> Um dos resultados mais fascinantes do Word2Vec e GloVe são as analogias vetoriais. O modelo aprendia que: <strong>Rei − Homem + Mulher ≈ Rainha</strong>. Operações matemáticas sobre vetores produziam relações semânticas coerentes! Isso demonstrou que os embeddings capturavam não apenas similaridade, mas <em>relações estruturadas</em> entre conceitos (Mikolov et al., 2013).</p>
</blockquote>

<p><strong>O legado:</strong> Word2Vec e GloVe ficaram como padrão-ouro até ~2017. Mas tinham um <strong>grande limite</strong>: a mesma palavra sempre recebe o <strong>mesmo vetor</strong>, não importa o contexto. "Banco" (instituição financeira) e "banco" (assento) têm exatamente o mesmo embedding.</p>
    `,
  },
  {
    id: "embeddings-contextuais",
    title: "4. A Evolução para Embeddings Contextuais",
    content: `
<p>A mudança de jogo aconteceu em 2017 com o paper <strong>"Attention Is All You Need"</strong> (Vaswani et al., 2017), que introduziu os <strong>Transformers</strong>. Mas a verdadeira revolução em embeddings veio em 2019 com o <strong>BERT</strong>.</p>

<h3>BERT: Um Vetor por Contexto</h3>
<p><strong>BERT</strong> (Devlin et al., 2019) fez algo radicalmente diferente. Em vez de aprender um vetor fixo por palavra, BERT gera <strong>um vetor diferente dependendo do contexto</strong>:</p>
<ul>
<li>"O <strong>banco</strong> cobrou uma taxa alta" → embedding de "banco" = vetor de instituição financeira</li>
<li>"Sente-se no <strong>banco</strong> para descansar" → embedding de "banco" = vetor de móvel/assento</li>
<li>"O <strong>banco</strong> do rio foi erodido pela chuva" → embedding de "banco" = vetor de paisagem/geografia</li>
</ul>
<p>O mesmo token de input, mas três representações numéricas diferentes — cada uma capturando o significado específico daquele contexto.</p>

<p><strong>Como funciona?</strong> BERT usa <strong>Transformers bidirecionais</strong>. Ao contrário de modelos anteriores que liam da esquerda para a direita, Transformers leem <strong>simultaneamente em ambas as direções</strong>. Cada palavra "vê" o contexto completo e ajusta seu significado dinamicamente.</p>

<h3>De Palavras para Sentenças: Sentence Embeddings</h3>
<p>Uma evolução importante é a diferença entre <strong>word embeddings</strong> e <strong>sentence embeddings</strong>:</p>
<ul>
<li><strong>Word embeddings</strong> representam <strong>palavras individuais</strong> como vetores.</li>
<li><strong>Sentence embeddings</strong> representam <strong>frases ou documentos inteiros</strong> como um único vetor que captura o significado completo da frase.</li>
</ul>
<p>Isso é fundamental para aplicações como <strong>busca semântica</strong> e <strong>RAG</strong>: você compara o significado de perguntas inteiras contra documentos inteiros, não palavra por palavra.</p>
    `,
  },
  {
    id: "embeddings-multimodais",
    title: "5. Embeddings Multimodais — Além do Texto",
    content: `
<p>Em 2021, pesquisadores da OpenAI levaram embeddings para uma dimensão inteiramente nova com o <strong>CLIP (Contrastive Language-Image Pre-training)</strong> (Radford et al., 2021).</p>

<h3>O Salto: Imagens e Texto no Mesmo Espaço</h3>
<p>CLIP treinava em <strong>400 milhões de pares (imagem, texto)</strong> coletados da internet. A ideia era: ensine ao modelo que uma imagem de um cão e a palavra "cão" devem ter embeddings similares no mesmo espaço matemático. O resultado foi revolucionário:</p>
<ul>
<li><strong>Busca visual por descrição:</strong> "encontre todas as imagens que parecem um gato dormindo"</li>
<li><strong>Classificação de imagens sem treinamento específico</strong> (zero-shot classification)</li>
<li><strong>Busca cross-modal:</strong> digitar texto e encontrar imagens relevantes, ou vice-versa</li>
</ul>

<blockquote>
<p><strong>Na Prática — Google Photos:</strong> Quando você abre o Google Photos e busca "praia ao pôr do sol" sem nunca ter etiquetado suas fotos, o sistema usa embeddings multimodais para converter sua busca em texto <em>e</em> suas fotos em vetores no mesmo espaço — e encontra as correspondências. Essa tecnologia já está no seu bolso.</p>
</blockquote>

<p>Em 2026, o Google lançou o <strong><code>gemini-embedding-2-preview</code></strong>, o primeiro modelo de embedding multimodal da família Gemini — capaz de mapear texto, imagens, vídeo, áudio e PDFs em um espaço unificado de embeddings. Embeddings deixaram de ser apenas sobre linguagem. Agora são sobre <strong>significado transcendendo modalidades</strong>.</p>
    `,
  },
  {
    id: "modelos-embedding-atuais",
    title: "6. Modelos de Embedding Atuais (2025-2026)",
    content: `
<p>Enquanto você lê isso, existe um ecossistema robusto de modelos de embedding prontos para produção.</p>

<h3>OpenAI: text-embedding-3</h3>
<p><strong><code>text-embedding-3-small</code></strong>: 1.536 dimensões, otimizado para aplicações de alta escala com requisitos de velocidade.</p>
<p><strong><code>text-embedding-3-large</code></strong>: 3.072 dimensões (padrão), suporta <strong>dimensionalidade flexível</strong> — você pode reduzir para 1.024, 512 ou quantas dimensões quiser.</p>

<h3>Voyage AI: Parceiro Oficial da Anthropic</h3>
<p>A Anthropic (criadora do Claude) não mantém seu próprio modelo de embeddings. Em vez disso, recomenda oficialmente a <strong>Voyage AI</strong>:</p>
<p><strong><code>voyage-3.5</code></strong> (maio 2025): 1.024 dimensões (padrão), contexto até <strong>32.000 tokens</strong>.</p>
<p><strong><code>voyage-4-large</code></strong> (2026): Arquitetura <strong>Mixture of Experts (MoE)</strong>, estado-da-arte para propósitos gerais.</p>

<h3>Google: Gemini Embedding</h3>
<p><strong><code>gemini-embedding-001</code></strong>: 3.072 dimensões, técnica <strong>Matryoshka Representation Learning (MRL)</strong>, suporte a mais de <strong>100 idiomas</strong>.</p>
<p><strong><code>gemini-embedding-2-preview</code></strong>: Primeiro embedding <strong>multimodal</strong> da família Gemini.</p>

<h3>Comparação Rápida</h3>
<table>
<thead><tr><th>Modelo</th><th>Dimensões</th><th>Contexto</th><th>Destaque</th></tr></thead>
<tbody>
<tr><td><code>text-embedding-3-large</code> (OpenAI)</td><td>3.072</td><td>8.191 tokens</td><td>Máxima qualidade texto</td></tr>
<tr><td><code>voyage-4-large</code> (Voyage AI)</td><td>1.024</td><td>32.000 tokens</td><td>MoE, parceiro Anthropic</td></tr>
<tr><td><code>gemini-embedding-001</code> (Google)</td><td>3.072</td><td>2.048 tokens</td><td>100+ idiomas, MRL</td></tr>
<tr><td><code>gemini-embedding-2-preview</code> (Google)</td><td>3.072</td><td>2.048 tokens</td><td>Multimodal (5 modalidades)</td></tr>
<tr><td>GloVe (histórico)</td><td>50-300</td><td>N/A</td><td>Pesquisa/educação</td></tr>
</tbody>
</table>

<blockquote>
<p><strong>Para Saber Mais — Embeddings Especializados:</strong> Na medicina, o <strong>BioBERT</strong> (Lee et al., 2020) e o <strong>Clinical BioBERT</strong> são treinados em literatura biomédica e prontuários eletrônicos. No direito, modelos como <code>voyage-law-2</code> são otimizados para jurisprudência. Na prática, <strong>fine-tuning de embeddings por domínio</strong> melhora significativamente a qualidade da busca semântica.</p>
</blockquote>
    `,
  },
  {
    id: "similaridade-cosseno",
    title: "7. Medindo Similaridade — O Poder do Cosseno",
    content: `
<p>Agora que temos vetores, como comparamos dois e dizemos "são similares"? Entra em cena a <strong>similaridade de cosseno</strong>.</p>

<h3>A Fórmula</h3>
<p><code>cos(θ) = (A · B) / (||A|| × ||B||)</code></p>
<p>Em português: meça o <strong>ângulo entre dois vetores</strong>. Se apontam na mesma direção (similares), o ângulo é pequeno e o cosseno é próximo de <strong>+1</strong>. Se apontam em direções opostas, o cosseno é próximo de <strong>−1</strong>.</p>
<p>A analogia mais intuitiva: imagine duas bússolas. Se ambas apontam para o norte (mesma direção), a similaridade é máxima. Se uma aponta para o norte e outra para o sul, a similaridade é mínima. <strong>O que importa é a direção, não o tamanho da seta.</strong></p>

<h3>Escala de Interpretação</h3>
<table>
<thead><tr><th>Similaridade Cosseno</th><th>Significado</th></tr></thead>
<tbody>
<tr><td><strong>+1.0</strong></td><td>Idênticos (mesma direção)</td></tr>
<tr><td><strong>0.8–0.95</strong></td><td>Muito similares (threshold típico para busca)</td></tr>
<tr><td><strong>0.5–0.7</strong></td><td>Relacionados, mas distintos</td></tr>
<tr><td><strong>0.0</strong></td><td>Sem relação</td></tr>
<tr><td><strong>−1.0</strong></td><td>Opostos</td></tr>
</tbody>
</table>

<h3>Por Que Cosseno e Não Distância Euclidiana?</h3>
<ol>
<li><strong>Escala-invariante:</strong> não importa o tamanho do vetor, apenas a direção.</li>
<li><strong>Rápido:</strong> computação O(n) — viável para bilhões de embeddings.</li>
<li><strong>Intuitivo:</strong> escala −1 a +1 é fácil de comunicar a não-técnicos.</li>
</ol>
    `,
  },
  {
    id: "aplicacoes-reais",
    title: "8. Aplicações Multidisciplinares Reais",
    content: `
<p>Embeddings não são um conceito abstrato. Eles já estão no seu dia a dia — muitas vezes sem você perceber.</p>

<h3>Dia a Dia: Spotify, Google Photos e Busca Semântica</h3>
<p>O <strong>Spotify</strong> representa cada ouvinte por múltiplos vetores de embedding que capturam preferências de longo prazo. Músicas, artistas, capas de álbum, letras e até vídeos curtos são mapeados no mesmo espaço vetorial. O sistema de recomendação faz busca por vizinhos mais próximos para sugerir novas músicas (Spotify Research, 2025).</p>

<h3>Medicina: Diagnóstico Assistido e Busca em Prontuários</h3>
<p>Modelos como <strong>BioBERT</strong> e <strong>BioWordVec</strong> (Zhang et al., 2019), treinados em literatura biomédica e prontuários eletrônicos, capturam a semântica de termos clínicos com precisão que modelos genéricos não conseguem. O modelo aprende que "dispneia", "ortopneia" e "estertores crepitantes" têm embeddings próximos a "insuficiência cardíaca congestiva".</p>

<h3>Advocacia e Documentos: Busca em Jurisprudência</h3>
<p>Plataformas com <strong>busca semântica</strong> em jurisprudência revolucionaram o trabalho jurídico: buscar "restrictive covenant" (pacto restritivo) agora encontra "restraint of trade" (restrição ao comércio), mesmo usando terminologia diferente da decisão original.</p>

<h3>Gestão: Clustering de Feedback em Escala</h3>
<p>Empresas como a <strong>Netflix</strong> usam embeddings para entender feedback de milhões de clientes: cada review é convertido em embedding, reviews similares são agrupados via <strong>clustering</strong>, e clusters revelam temas acionáveis.</p>

<h3>Marketing: Análise de Sentimento com Contexto</h3>
<p>Embeddings fazem análise de sentimento muito melhor que métodos antigos (TF-IDF, bag-of-words). Capturam nuance, intensidade, ironia e contexto de cada frase. Equipes de marketing usam embeddings para detectar crises de reputação em estágio inicial.</p>

<h3>Engenharia: Busca em Documentação Técnica</h3>
<p>Um engenheiro pergunta: "How do we handle OAuth token refresh errors?" <strong>Busca semântica com embeddings</strong> encontra o documento "Authentication failure handling" porque entende que os conceitos são semanticamente similares.</p>

<blockquote>
<p><strong>Na Prática — Vector Databases:</strong> Onde esses bilhões de embeddings ficam armazenados? Em <strong>vector databases</strong> — bancos de dados especializados em armazenar e buscar vetores de alta dimensão. Os principais são <strong>Pinecone</strong> (gerenciado na nuvem), <strong>Weaviate</strong> (busca híbrida, on-premise) e <strong>Chroma</strong> (open-source, ideal para protótipos). Diferente de bancos de dados tradicionais que fazem buscas exatas, vector databases fazem <strong>busca por similaridade</strong> — encontrando os N vetores mais próximos em milissegundos.</p>
</blockquote>
    `,
  },
  {
    id: "rag-visao-geral",
    title: "9. RAG — Recuperação Aumentada por Geração (Visão Geral)",
    content: `
<p>Um caso de uso que merece destaque especial é o <strong>RAG (Retrieval-Augmented Generation)</strong>. A ideia é simples mas poderosa:</p>
<ol>
<li><strong>Converter</strong> seus documentos privados em embeddings</li>
<li><strong>Armazenar</strong> em um vector database</li>
<li>Quando um usuário faz uma pergunta, <strong>converter</strong> a pergunta em embedding</li>
<li><strong>Buscar</strong> documentos similares via similaridade de cosseno</li>
<li><strong>Passar</strong> os documentos encontrados (contexto) + pergunta para um LLM gerar a resposta</li>
</ol>
<p>Exemplo prático: você tem 100 PDFs sobre políticas da empresa. Em vez de o LLM tentar adivinhar com base no treinamento geral, ele busca os documentos relevantes primeiro e usa esses documentos como contexto. Isso melhora drasticamente a precisão e reduz alucinações.</p>
<p><strong>Nota:</strong> RAG é coberto em profundidade no <strong>Capítulo 15 do Ebook 2</strong>. Aqui, entenda que embeddings são o <strong>motor</strong> que permite buscar informação relevante para contextualizar respostas de IA.</p>
    `,
  },
  {
    id: "resumo-cap4",
    title: "Resumo: A Jornada do Significado em Números",
    content: `
<p>Vamos recapitular a evolução:</p>
<ol>
<li><strong>Hipótese Distribucional (1954-1957):</strong> Harris e Firth estabeleceram que palavras com contextos similares têm significados similares — a base teórica de tudo.</li>
<li><strong>Word2Vec / GloVe (2013-2014):</strong> revolucionaram representações de palavras com vetores densos, mas eram <strong>estáticos</strong>.</li>
<li><strong>BERT / Transformers (2017-2019):</strong> trouxeram embeddings <strong>contextuais</strong> — cada palavra ganha um vetor diferente por contexto.</li>
<li><strong>CLIP (2021):</strong> estendeu embeddings para múltiplas modalidades (imagem + texto no mesmo espaço).</li>
<li><strong>Modelos 2025-2026:</strong> production-ready, otimizados por domínio, flexíveis em dimensionalidade, multimodais.</li>
</ol>
<p>O resultado? Computadores agora entendem que "cão" e "cachorro" significam a mesma coisa. Entendem nuance e contexto. Entendem que uma foto de um gato e a descrição "felino fofo em uma cadeira" são similares. <strong>Esse é o poder de converter significado em números.</strong></p>
    `,
  },
  {
    id: "exercicios-cap4",
    title: "Exercícios de Fixação",
    content: `
<h3>Questão 1: Múltipla Escolha</h3>
<p><strong>Qual princípio linguístico fundamenta o funcionamento dos word embeddings?</strong></p>
<p>(A) A gramática gerativa de Noam Chomsky<br>
(B) A hipótese distribucional, que afirma que palavras em contextos similares têm significados similares<br>
(C) A teoria da informação de Shannon<br>
(D) O princípio da composicionalidade</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(B)</strong> — A hipótese distribucional, formalizada por Harris (1954) e popularizada por Firth (1957), é o fundamento teórico dos embeddings.</p>
</details>

<h3>Questão 2: Múltipla Escolha</h3>
<p><strong>Qual é a principal inovação do BERT em relação a Word2Vec para o tratamento de palavras ambíguas?</strong></p>
<p>(A) BERT usa vetores com mais dimensões<br>
(B) BERT gera embeddings diferentes para a mesma palavra dependendo do contexto<br>
(C) BERT é treinado em corpus maior<br>
(D) BERT funciona apenas em inglês</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(B)</strong> — Word2Vec gera um único vetor por palavra. BERT, usando Transformers bidirecionais, gera um embedding diferente para "banco" dependendo do contexto completo da frase.</p>
</details>

<h3>Questão 3: Verdadeiro ou Falso</h3>
<p><strong>A similaridade de cosseno é invariante à magnitude dos vetores.</strong></p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>Verdadeiro</strong> — A fórmula de cosseno normaliza pelos comprimentos dos vetores. O que importa é a <em>direção</em>, não o tamanho.</p>
</details>

<h3>Questão 4: Dissertativa</h3>
<p><strong>Explique a diferença entre word embeddings e sentence embeddings, e por que essa distinção é importante para aplicações práticas como busca semântica e RAG.</strong></p>
<details><summary><strong>Ver Resposta Modelo</strong></summary>
<p>Word embeddings representam palavras individuais como vetores. Sentence embeddings representam frases ou documentos inteiros como um único vetor. Essa distinção é crucial porque aplicações modernas como busca semântica e RAG precisam comparar o significado de <em>perguntas inteiras</em> contra <em>documentos inteiros</em>. Se usássemos word embeddings, "cachorro morde homem" e "homem morde cachorro" teriam os mesmos word embeddings, mas sentence embeddings diferentes.</p>
</details>

<h3>Questão 5: Aplicação Prática</h3>
<p><strong>Você é consultor de uma rede hospitalar que quer implementar busca semântica em prontuários eletrônicos. Explique:</strong> (a) Por que embeddings genéricos podem não ser ideais, (b) Que tipo de modelo especializado você recomendaria, (c) Como medir se o sistema está funcionando bem.</p>
<details><summary><strong>Ver Resposta Modelo</strong></summary>
<p>(a) Embeddings genéricos são treinados em texto geral e podem não capturar nuances de terminologia médica. "MI" em texto geral pode significar "Michigan", mas em prontuários significa "myocardial infarction".<br>
(b) Recomendaria modelos como <strong>BioBERT</strong> ou <strong>Clinical BioBERT</strong>, treinados em PubMed e prontuários eletrônicos.<br>
(c) Avaliação humana (médicos verificando relevância) e métricas como <strong>recall@k</strong> e <strong>Mean Reciprocal Rank</strong>.</p>
</details>
    `,
  },
  {
    id: "referencias-cap4",
    title: "Referências",
    content: `
<ol>
<li>Devlin, J., Chang, M.W., Lee, K., &amp; Toutanova, K. (2019). <em>BERT: Pre-training of Deep Bidirectional Transformers</em>. NAACL-HLT 2019.</li>
<li>Firth, J.R. (1957). <em>A Synopsis of Linguistic Theory 1930–1955</em>. Studies in Linguistic Analysis.</li>
<li>Google Developers Blog. (2026). <em>Gemini Embedding now generally available in the Gemini API</em>.</li>
<li>Harris, Z.S. (1954). <em>Distributional Structure</em>. Word, 10(2-3), 146–162.</li>
<li>Lee, J., Yoon, W., Kim, S., et al. (2020). <em>BioBERT: A pre-trained biomedical language representation model</em>. Bioinformatics, 36(4).</li>
<li>Mikolov, T., Chen, K., Corrado, G., &amp; Dean, J. (2013). <em>Efficient Estimation of Word Representations in Vector Space</em>. ICLR 2013.</li>
<li>Pennington, J., Socher, R., &amp; Manning, C.D. (2014). <em>GloVe: Global Vectors for Word Representation</em>. EMNLP 2014.</li>
<li>Radford, A., Kim, J.W., Hallacy, C., et al. (2021). <em>Learning Transferable Visual Models From Natural Language Supervision</em>. ICML 2021.</li>
<li>Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). <em>Attention Is All You Need</em>. NeurIPS 2017.</li>
<li>Zhang, Y., Chen, Q., Yang, Z., et al. (2019). <em>BioWordVec, improving biomedical word embeddings</em>. Scientific Data, 6, 52.</li>
</ol>
    `,
  },
];

// ─── Capítulo 5 ──────────────────────────────────────────

const CAP5_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap5",
    title: "Introdução: A Cozinha por Trás da Resposta",
    content: `
<p>Imagine que você entra em um restaurante sofisticado e faz seu pedido. Minutos depois, o prato chega — perfeitamente montado, com sabores equilibrados, como se o chef tivesse lido seus pensamentos. Mas entre o pedido e o prato, há uma cozinha inteira funcionando: ingredientes sendo selecionados, técnicas sendo aplicadas, temperos sendo dosados com precisão.</p>
<p>Com a IA generativa, acontece algo parecido. Você digita um prompt — "Resuma este contrato em 3 pontos-chave" — e, segundos depois, recebe uma resposta articulada. Parece mágica. Mas entre o seu prompt e o output existe um processo sofisticado e matemático que determina cada palavra da resposta.</p>
<p>Nos capítulos anteriores, você aprendeu o que são <strong>tokens</strong> (Cap 3) — as peças que o modelo manipula — e <strong>embeddings</strong> (Cap 4) — como o modelo entende o significado dessas peças. Agora, vamos descobrir como o modelo <strong>usa</strong> esse entendimento para gerar texto, token por token, até construir uma resposta completa.</p>
    `,
  },
  {
    id: "pipeline-geracao",
    title: "1. O Pipeline de Geração: Da Pergunta à Resposta",
    content: `
<h3>1.1 A Linha de Montagem da IA</h3>
<p>Para entender como a IA gera respostas, pense em uma <strong>linha de montagem</strong> com quatro estações bem definidas (Vaswani et al., 2017):</p>
<p><strong>Estação 1 — Tokenização.</strong> Seu prompt em linguagem natural é dividido em tokens. "Qual é a dose recomendada de amoxicilina?" vira algo como <code>[Qual] [é] [a] [dose] [recomend] [ada] [de] [amox] [icil] [ina] [?]</code>.</p>
<p><strong>Estação 2 — Embeddings e contexto.</strong> Cada token é convertido em um vetor numérico (embedding). Esses vetores passam pelas camadas do Transformer, onde o mecanismo de <strong>atenção</strong> permite que cada token "converse" com todos os outros, capturando relações de contexto.</p>
<p><strong>Estação 3 — Cálculo de probabilidades.</strong> Após processar todo o contexto, o modelo produz uma lista de pontuações chamadas <strong>logits</strong> — uma pontuação para cada token do vocabulário (50.000 a 150.000 tokens). Essas pontuações são convertidas em <strong>probabilidades</strong> pela função <strong>softmax</strong>.</p>
<p><strong>Estação 4 — Seleção e repetição.</strong> Um token é selecionado com base nessas probabilidades. Esse token é adicionado ao contexto, e o processo inteiro se repete para gerar o próximo token. Isso continua até o modelo produzir um <strong>token de parada</strong> ou atingir o limite máximo de tokens.</p>

<blockquote>
<p><strong>Analogia do dia a dia:</strong> Pense em um GPS. Você digita o destino (prompt). O GPS converte o endereço em coordenadas (tokenização + embeddings). Calcula a melhor rota (processamento das camadas). E então vai dando instruções curva a curva (token por token) — cada instrução depende de onde você está agora.</p>
</blockquote>

<h3>1.2 Geração Autoregressive: Uma Palavra de Cada Vez</h3>
<p>O nome técnico desse processo é <strong>geração autoregressive</strong> — "auto" (pela própria saída) + "regressive" (previsão). A cada passo, o modelo usa tudo o que já gerou para prever o próximo token (Radford et al., 2019).</p>
<p>Veja um exemplo concreto. Um advogado pede: "Redija uma cláusula de confidencialidade para um contrato de prestação de serviços".</p>
<ul>
<li><strong>Passo 1:</strong> O modelo processa o prompt. "As" recebe 22%, "A" 18%, "Esta" 12%... Seleciona "As".</li>
<li><strong>Passo 2:</strong> Contexto: "As". Calcula: "partes" → 35%, "informações" → 15%... Seleciona "partes".</li>
<li><strong>Passo 3:</strong> "As partes" → "se" (28%), "comprometem" (19%)... Seleciona "se".</li>
<li><strong>E assim por diante</strong>, até formar: <em>"As partes se comprometem a manter em sigilo todas as informações confidenciais..."</em></li>
</ul>
<p>Cada token influencia o próximo. É por isso que respostas de IA fluem como linguagem natural — porque é <strong>predição sequencial da linguagem humana</strong>.</p>

<h3>1.3 Logits e Softmax: A Matemática (Sem Medo)</h3>
<p>Antes de selecionar um token, o modelo produz <strong>logits</strong> — pontuações brutas para cada token do vocabulário. A função <strong>softmax</strong> transforma essas notas em probabilidades que somam 100%.</p>

<blockquote>
<p><strong>Na Prática:</strong> Você não precisa calcular logits manualmente. Mas entender que eles existem ajuda a compreender por que os parâmetros de temperatura, top-k e top-p funcionam — todos eles manipulam essa etapa do processo.</p>
</blockquote>

<h3>1.4 Quando o Modelo Para: Stop Sequences</h3>
<p>Como o modelo sabe que deve parar de gerar? Dois mecanismos:</p>
<ol>
<li><strong>Token de fim de sequência (EOS):</strong> Todo modelo tem um token especial que significa "acabei".</li>
<li><strong>Limite máximo de tokens:</strong> Quando atinge o limite, a geração é interrompida — mesmo no meio de uma frase.</li>
</ol>
<p>Isso explica por que, às vezes, respostas de IA terminam abruptamente: o limite de tokens foi atingido antes do modelo completar o raciocínio.</p>
    `,
  },
  {
    id: "temperatura",
    title: "2. Controlando a Criatividade: Temperatura",
    content: `
<h3>2.1 O Termostato da IA</h3>
<p>Imagine o ar-condicionado da sua casa. Se você colocar no mínimo (18°C), o resultado é previsível e constante. Se colocar no máximo (30°C), a coisa esquenta e fica imprevisível. A <strong>temperatura</strong> na IA funciona exatamente assim.</p>
<ul>
<li><strong>Temperatura = 0:</strong> O modelo <strong>sempre</strong> escolhe o token com maior probabilidade. A resposta é determinística — mesma pergunta, mesma resposta, sempre.</li>
<li><strong>Temperatura ~ 0.3–0.7:</strong> Distribuição moderada. Equilíbrio entre precisão e naturalidade.</li>
<li><strong>Temperatura ≥ 1.0:</strong> Distribuição achatada. Respostas criativas, mas com risco de incoerência.</li>
</ul>
<p><strong>Matematicamente:</strong> a temperatura divide os logits antes do softmax. <code>Probabilidades = softmax(logits / temperatura)</code>. Temperatura baixa amplifica diferenças (concentra). Temperatura alta reduz diferenças (achata).</p>

<h3>2.2 Na Prática: Qual Temperatura Usar?</h3>
<p><strong>Medicina — Precisão acima de tudo (T = 0.0–0.2):</strong> "Liste as contraindicações da dipirona." → Criatividade é risco.</p>
<p><strong>Direito — Formalidade com variação (T = 0.3–0.5):</strong> "Redija uma cláusula de rescisão contratual." → Linguagem formal com variação natural.</p>
<p><strong>Gestão — Síntese equilibrada (T = 0.5–0.7):</strong> "Resuma as decisões da reunião em 5 pontos." → Síntese clara e bem escrita.</p>
<p><strong>Marketing — Criatividade controlada (T = 0.8–1.0):</strong> "Crie 5 títulos para uma campanha de lançamento." → Variação e surpresa.</p>
<p><strong>Engenharia — Exatidão matemática (T = 0.0):</strong> "Calcule a carga máxima suportada por uma viga IPE 300." → Uma resposta objetiva.</p>

<blockquote>
<p><strong>Ponto-chave:</strong> Na dúvida, comece com temperatura entre 0.5 e 0.7. É o "modo conforto" — equilibrado para a maioria das tarefas. Ajuste para baixo quando precisar de precisão, para cima quando precisar de criatividade.</p>
</blockquote>
    `,
  },
  {
    id: "estrategias-selecao",
    title: "3. Estratégias de Seleção: Greedy, Beam Search, Top-K e Top-P",
    content: `
<h3>3.1 Greedy Decoding: O Caminho Mais Óbvio</h3>
<p>A estratégia mais simples: a cada passo, escolha sempre o token com maior probabilidade. É rápido e previsível, mas pode ser repetitivo e monótono.</p>

<h3>3.2 Beam Search: Explorando Múltiplos Caminhos</h3>
<p>O <strong>beam search</strong> é mais sofisticado: em vez de seguir um único caminho, o modelo explora <strong>vários caminhos simultaneamente</strong> e escolhe o que produz a melhor sequência global. É mais custoso, mas produz textos mais coerentes em tarefas como tradução e sumarização.</p>

<h3>3.3 Top-K: Limite Fixo de Candidatos</h3>
<p>O <strong>top-k</strong> define: "Considere apenas os K tokens mais prováveis. Ignore o resto." Valores típicos: top-k entre 40 e 100. O problema? O top-k é <strong>fixo</strong> — se em um contexto há 3 tokens excelentes e em outro há 200 razoáveis, ele corta no mesmo número K.</p>

<h3>3.4 Top-P (Nucleus Sampling): Limite Dinâmico</h3>
<p>O <strong>top-p</strong>, também chamado <strong>nucleus sampling</strong> (Holtzman et al., 2019), é mais inteligente: seleciona tokens até que a <strong>probabilidade cumulativa</strong> atinja um limiar P. Essa <strong>adaptação dinâmica</strong> é a grande vantagem: automaticamente inclui mais opções quando o modelo está incerto e menos quando está confiante. Valores típicos: top-p entre 0.9 e 0.95.</p>

<h3>3.5 Min-P: A Nova Geração de Amostragem</h3>
<p>O <strong>min-p</strong> (Nguyen et al., 2025) escala o limiar de corte com base na confiança do modelo. Encontra a probabilidade do token mais provável, multiplica por um fator (ex: 0.1) e descarta todo token abaixo desse limiar. Mantém qualidade consistente mesmo com temperaturas altas. Reconhecido com apresentação oral no ICLR 2025.</p>

<h3>3.6 Combinando Estratégias</h3>
<table>
<thead><tr><th>Tipo de Tarefa</th><th>Temperatura</th><th>Top-P</th><th>Top-K</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td>Tradução, Extração</td><td>0.1–0.3</td><td>0.9</td><td>50</td><td>Traduzir contrato, extrair dados</td></tr>
<tr><td>Síntese, Resumo</td><td>0.3–0.5</td><td>0.9</td><td>50</td><td>Resumir reunião, sintetizar laudo</td></tr>
<tr><td>Respostas gerais</td><td>0.5–0.7</td><td>0.95</td><td>40</td><td>Chatbot, assistente</td></tr>
<tr><td>Chat natural</td><td>0.7–0.9</td><td>0.95</td><td>40</td><td>Conversação, tutoria</td></tr>
<tr><td>Criação, Brainstorm</td><td>0.9–1.2</td><td>0.95</td><td>20</td><td>Títulos, ideias, roteiros</td></tr>
</tbody>
</table>
    `,
  },
  {
    id: "variabilidade",
    title: "4. Por Que Cada Resposta É Diferente",
    content: `
<h3>4.1 A Natureza Probabilística</h3>
<p>Se você fizer a mesma pergunta duas vezes com temperatura > 0, as respostas provavelmente serão diferentes. Isso não é um defeito — é uma <strong>consequência direta</strong> do processo de amostragem. A cada passo, o modelo sorteia um token com base em probabilidades. Sorteios diferentes, resultados diferentes.</p>

<p><strong>Exemplo (Educação):</strong></p>
<p>Prompt: "Sugira uma atividade para ensinar frações no 5º ano."</p>
<ul>
<li>Geração 1: "Use pizzas de brinquedo divididas em fatias iguais..."</li>
<li>Geração 2: "Distribua barras de chocolate para os alunos dividirem..."</li>
<li>Geração 3: "Desenhe retângulos no quadro e peça que os alunos pintem frações..."</li>
</ul>
<p>Todas são respostas válidas e úteis. A variabilidade é um recurso, não um bug.</p>

<h3>4.2 Quando Você Quer (e Quando Não Quer) Variação</h3>
<p><strong>Variação é desejável</strong> quando você está fazendo brainstorming, pedindo ideias de conteúdo, ou explorando diferentes abordagens para um problema.</p>
<p><strong>Variação é indesejável</strong> quando você precisa de um cálculo correto, um diagnóstico médico preciso, uma cláusula contratual padronizada, ou código que funcione de forma previsível.</p>
<p>A regra prática: <strong>quanto maior o custo do erro, menor deve ser a temperatura.</strong></p>
    `,
  },
  {
    id: "limitacoes-cap5",
    title: "5. Limitações e Implicações Práticas",
    content: `
<h3>5.1 A Irreversibilidade do Token</h3>
<p>Uma verdade importante: <strong>não é possível "desfazer" um token depois de gerado.</strong> O processo é unidirecional — para frente, sempre. Se o modelo escolheu um token inadequado no passo 50, esse token já faz parte do contexto e influencia os passos 51, 52, 53... até o final.</p>

<blockquote>
<p><strong>Na Prática:</strong> Se uma resposta começa mal, pedir ao modelo que "corrija" muitas vezes funciona melhor do que esperar que ele se corrija sozinho durante a geração. Um novo prompt é um novo começo.</p>
</blockquote>

<h3>5.2 Respostas Longas vs. Curtas: O Efeito Acumulativo</h3>
<p>Quanto mais longa a resposta, maior a probabilidade de erros ou incoerências (Holtzman et al., 2019). Se cada passo tem uma pequena chance de "erro", em 100 passos essa chance se acumula. Em 1.000 passos, mais ainda.</p>
<p><strong>Dica prática para qualquer profissional:</strong></p>
<ul>
<li><strong>Evite:</strong> "Escreva um relatório completo de 20 páginas sobre a estratégia de marketing para 2025."</li>
<li><strong>Prefira:</strong> "Escreva um resumo executivo de 1 página. Na próxima mensagem, expandiremos cada seção."</li>
</ul>
<p>Dividir tarefas longas em etapas menores produz resultados significativamente melhores.</p>

<h3>5.3 Speculative Decoding: O Futuro da Velocidade</h3>
<p>Uma técnica emergente chamada <strong>speculative decoding</strong> promete acelerar a geração sem perder qualidade. A ideia: usar um modelo menor e rápido para "rascunhar" vários tokens de uma vez, e depois o modelo principal valida essa sequência em um único passo. É como ter um assistente que prepara um rascunho para o chefe revisar.</p>
    `,
  },
  {
    id: "como-tudo-conecta",
    title: "6. Como Tudo Se Conecta",
    content: `
<p>Este capítulo é o coração mecânico do ebook. Vejamos como ele se encaixa:</p>
<ul>
<li><strong>Cap 3 (Tokens)</strong> → As peças que o modelo manipula. Sem tokenização, não há geração.</li>
<li><strong>Cap 4 (Embeddings)</strong> → O significado numérico de cada token. Sem embeddings, o modelo não "entende" o que processa.</li>
<li><strong>Cap 5 (Este capítulo — Geração)</strong> → O processo que transforma compreensão em texto, token por token.</li>
<li><strong>Cap 6 (Janela de Contexto)</strong> → Quantos tokens o modelo consegue "lembrar" durante a geração.</li>
<li><strong>Cap 7 (Limitações e Alucinações)</strong> → Por que, mesmo com um processo de geração perfeito, o modelo às vezes falha.</li>
</ul>
<p>Se sua resposta de IA não está saindo como esperado, faça este diagnóstico:</p>
<ol>
<li><strong>Resposta imprecisa ou inventada?</strong> → Problema de treinamento ou alucinação (Cap 7)</li>
<li><strong>Resposta repetitiva ou monótona?</strong> → Temperatura muito baixa — aumente</li>
<li><strong>Resposta criativa demais ou sem sentido?</strong> → Temperatura muito alta — diminua</li>
<li><strong>Resposta muda a cada tentativa?</strong> → Normal com temperatura > 0. Se quer consistência, use temperatura = 0</li>
<li><strong>Resposta longa e confusa?</strong> → Peça respostas mais curtas e divida em etapas</li>
</ol>
<p>No próximo capítulo, vamos explorar a <strong>janela de contexto</strong> — o "espaço de memória" que determina quanto o modelo consegue considerar de uma só vez.</p>
    `,
  },
  {
    id: "resumo-cap5",
    title: "Resumo",
    content: `
<ul>
<li>A geração de texto por LLMs é um processo <strong>autoregressive</strong>: o modelo prevê um token por vez, usando tudo o que já gerou como contexto</li>
<li>O pipeline completo: prompt → tokenização → embeddings → camadas Transformer → logits → softmax → amostragem → token → repetição</li>
<li><strong>Temperatura</strong> controla a "criatividade" da resposta: baixa (precisa), alta (criativa)</li>
<li><strong>Top-k</strong> limita a seleção a um número fixo de tokens candidatos</li>
<li><strong>Top-p</strong> (nucleus sampling) é mais dinâmico: ajusta o número de candidatos com base na confiança do modelo</li>
<li><strong>Min-p</strong> é uma evolução recente que mantém qualidade mesmo com temperaturas altas</li>
<li>Respostas mais longas acumulam mais chances de erro — divida tarefas complexas em etapas</li>
<li>A geração é irreversível: tokens gerados não podem ser "desfeitos"</li>
<li>A variabilidade entre respostas é uma característica, não um defeito</li>
</ul>
    `,
  },
  {
    id: "exercicios-cap5",
    title: "Exercícios de Fixação",
    content: `
<h3>Questão 1: Distribuição de Probabilidade</h3>
<p>Em um modelo com a seguinte distribuição — Token A: 70%, Token B: 20%, Token C: 10% — qual seria o efeito de aumentar a temperatura de 0.5 para 2.0?</p>
<p>(a) Token A seria escolhido 100% das vezes<br>
(b) A distribuição se achataria; Token C teria chance significativamente maior<br>
(c) Token B seria excluído completamente<br>
(d) A ordem de probabilidade se inverteria (C > B > A)</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(B)</strong> — Temperatura > 1.0 achata a distribuição. Com temperatura = 2.0, Token A pode cair para ~35%, Token B para ~32%, Token C para ~33%. A ordem se mantém (A > B > C), apenas as diferenças diminuem.</p>
</details>

<h3>Questão 2: Nucleus Sampling</h3>
<p>Qual é a vantagem principal do top-p (nucleus sampling) em relação ao top-k?</p>
<p>(a) Top-p é mais rápido computacionalmente<br>
(b) Top-p é fixo e previsível<br>
(c) Top-p adapta-se dinamicamente à forma da distribuição, enquanto top-k usa limite fixo<br>
(d) Top-p permite temperaturas negativas</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(C)</strong> — Top-k seleciona sempre os mesmos K tokens. Top-p é dinâmico: inclui tokens até atingir uma probabilidade cumulativa. Se o modelo está confiante, pode incluir apenas 3 tokens. Se está incerto, pode incluir 200.</p>
</details>

<h3>Questão 3: Verdadeiro ou Falso</h3>
<ol>
<li>"Com temperatura = 0, a resposta será sempre idêntica para um mesmo prompt." → <strong>Verdadeiro.</strong></li>
<li>"O beam search é sempre melhor que o greedy decoding." → <strong>Falso.</strong> Beam search é mais lento e consome mais memória.</li>
<li>"Top-p = 0.95 significa que o modelo sempre considera exatamente 95 tokens." → <strong>Falso.</strong> O número de tokens varia conforme a distribuição.</li>
<li>"Respostas mais longas têm maior probabilidade de conter erros." → <strong>Verdadeiro.</strong></li>
<li>"Min-p é superior ao top-p em todas as situações." → <strong>Falso.</strong> Min-p tem vantagens em cenários com temperatura alta, mas top-p continua eficaz para a maioria dos usos.</li>
</ol>

<h3>Questão 4: Dissertativa</h3>
<p><strong>Explique como a geração autoregressive funciona e por que a qualidade tende a degradar em respostas muito longas.</strong></p>
<details><summary><strong>Ver Resposta Modelo</strong></summary>
<p>A geração autoregressive é um processo iterativo em que o modelo prevê a probabilidade de cada token possível, dado todo o contexto anterior. A qualidade degrada em respostas longas por duas razões: (1) a cada passo existe uma probabilidade de erro que cria um efeito cascata; (2) a geração é irreversível — o modelo não pode corrigir tokens ruins.</p>
</details>

<h3>Questão 5: Aplicação Prática</h3>
<p><strong>Cenário:</strong> Você é consultor de IA para um escritório de advocacia. Os advogados reclamam de cláusulas "criativas demais" e a equipe de marketing reclama de posts "robóticos". Como resolver ambos os problemas?</p>
<details><summary><strong>Ver Resposta Modelo</strong></summary>
<p>A solução é usar configurações diferentes: para contratos, temperatura 0.1–0.3, top-p 0.9 → prioriza precisão e formalidade. Para marketing, temperatura 0.9–1.1, top-p 0.95 → permite variação criativa. Criar dois "perfis" no sistema para que cada equipe obtém o comportamento adequado.</p>
</details>
    `,
  },
  {
    id: "referencias-cap5",
    title: "Referências",
    content: `
<ol>
<li>Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). <em>Attention Is All You Need</em>. NeurIPS.</li>
<li>Radford, A., Wu, J., Child, R., et al. (2019). <em>Language Models are Unsupervised Multitask Learners</em>. OpenAI Technical Report.</li>
<li>Holtzman, A., Buys, J., Du, L., Forbes, M., &amp; Choi, Y. (2019). <em>The Curious Case of Neural Text Degeneration</em>. arXiv:1904.09751.</li>
<li>Brown, T., Mann, B., Ryder, N., et al. (2020). <em>Language Models are Few-Shot Learners</em>. NeurIPS.</li>
<li>Nguyen, M., Baker, A., Kirsch, A., &amp; Gal, Y. (2025). <em>Turning Up the Heat: Min-p Sampling for Creative and Coherent LLM Outputs</em>. ICLR 2025 (Oral).</li>
<li>Anthropic. (2025). <em>Models Overview — Claude Documentation</em>. <a href="https://docs.anthropic.com/en/docs/about-claude/models/overview">docs.anthropic.com</a></li>
</ol>
    `,
  },
];

// ─── Capítulo 6 ──────────────────────────────────────────

const CAP6_SECTIONS: ChapterSection[] = [
  {
    id: "gancho",
    title: "Gancho de Abertura",
    content: `
<p>Imagine que você está em uma sala de reunião com toda a diretoria da empresa. Seu colega começa a apresentar um projeto complexo — dados financeiros, prazos, nomes de fornecedores, metas trimestrais. Na primeira hora, você acompanha tudo perfeitamente. Na segunda hora, começa a perder detalhes. Na terceira, já não lembra exatamente o que foi dito no início.</p>
<p>Isso acontece porque sua <strong>memória de trabalho</strong> tem um limite biológico. A psicologia cognitiva estima que humanos conseguem manter entre 4 e 7 itens simultâneos na memória de trabalho (Cowan, 2001).</p>
<p>Os <strong>Large Language Models</strong> enfrentam exatamente o mesmo tipo de desafio. Mas com uma diferença fundamental: o limite deles é <strong>exato, previsível e matemático</strong>. Esse limite tem nome: <strong>context window</strong> — a janela de contexto.</p>
    `,
  },
  {
    id: "o-que-e",
    title: "1. O Que É a Janela de Contexto",
    content: `
<h3>1.1 Definição Técnica</h3>
<p>A <strong>janela de contexto</strong> (ou <strong>context window</strong>) é o número máximo de <strong>tokens</strong> que um LLM consegue processar simultaneamente em uma única interação. Cada conversa opera dentro desse limite fixo (Anthropic, 2026).</p>
<p>Se os tokens são tijolos de LEGO, a janela de contexto é a <strong>mesa de trabalho</strong> onde você monta sua construção. Não importa quantos tijolos você tenha — só cabem na mesa um número limitado de peças.</p>

<h3>1.2 O Que Entra na Janela</h3>
<p>A janela de contexto acomoda <strong>tudo</strong>:</p>
<ul>
<li>O <strong>system prompt</strong> (instruções iniciais do modelo)</li>
<li>Todas as <strong>suas mensagens</strong> anteriores na conversa</li>
<li>Todas as <strong>respostas da IA</strong> anteriores</li>
<li>Documentos, imagens ou arquivos que você anexou</li>
<li>O espaço reservado para a <strong>próxima resposta</strong></li>
</ul>

<h3>1.3 A Analogia do Quadro Branco</h3>
<p>Pense em um <strong>quadro branco em uma sala de aula</strong>. O professor tem um quadro de tamanho fixo. Quando fica cheio, precisa <strong>apagar algo antigo</strong> para escrever algo novo. Com os LLMs funciona de forma análoga — os <strong>tokens mais antigos</strong> são descartados.</p>

<blockquote>
<p><strong>Ponto-chave:</strong> A janela de contexto é <strong>por conversa</strong>, não é compartilhada entre chats. Cada nova conversa começa com o quadro branco completamente limpo.</p>
</blockquote>
    `,
  },
  {
    id: "evolucao",
    title: "2. A Evolução das Janelas de Contexto",
    content: `
<h3>2.1 Uma Corrida Exponencial</h3>
<p>As maiores janelas de contexto cresceram a aproximadamente <strong>30x por ano</strong> desde 2023 (Epoch AI, 2025):</p>
<ul>
<li><strong>GPT-2</strong> (2019): 1.024 tokens (~1,5 página)</li>
<li><strong>GPT-3</strong> (2020): 4.096 tokens (~6 páginas)</li>
<li><strong>Claude 2</strong> (2023): 100k tokens (~75 páginas)</li>
<li><strong>Gemini 1.5 Pro</strong> (2024): 1M–2M tokens (~1.500 páginas)</li>
<li><strong>Claude Sonnet 4.6</strong> (2026): 1M tokens (~750 páginas)</li>
<li><strong>Llama 4</strong> (2025): 10M tokens (~7.500 páginas)</li>
</ul>
<p>Em menos de 7 anos, a janela cresceu de 1.024 para <strong>10 milhões</strong> de tokens — uma expansão de quase <strong>10.000 vezes</strong>.</p>

<h3>2.2 Modelos Principais em 2026</h3>
<table>
<thead><tr><th>Modelo</th><th>Janela de Contexto</th><th>Equivalente</th><th>Destaque</th></tr></thead>
<tbody>
<tr><td>Claude Opus 4.6</td><td>200k / 1M (GA)</td><td>~750 páginas</td><td>Output máximo: 128k tokens</td></tr>
<tr><td>Claude Sonnet 4.6</td><td>1M tokens (GA)</td><td>~750 páginas</td><td>Melhor custo-benefício</td></tr>
<tr><td>GPT-4.1</td><td>1M tokens</td><td>~750 páginas</td><td>Maior contexto da família OpenAI</td></tr>
<tr><td>Gemini 3 Pro</td><td>1M tokens</td><td>~750 páginas</td><td>2M em configuração enterprise</td></tr>
<tr><td>Llama 4 Maverick</td><td>10M tokens</td><td>~7.500 páginas</td><td>Open-source; MoE</td></tr>
</tbody>
</table>

<h3>2.3 Contexto Anunciado vs. Contexto Efetivo</h3>
<p>O benchmark <strong>RULER</strong> da NVIDIA demonstrou que o <strong>contexto efetivo</strong> dos modelos atuais é de apenas <strong>50 a 65% do que é anunciado</strong> (Hsieh et al., 2024). Um modelo com janela de 1M tokens pode, na prática, usar de forma confiável entre 500k e 650k tokens.</p>

<blockquote>
<p><strong>Na Prática:</strong> Ao planejar sua estratégia de uso, considere que o contexto efetivo é ~60% do anunciado. Se precisa analisar 300k tokens, escolha um modelo com pelo menos 500k de janela.</p>
</blockquote>
    `,
  },
  {
    id: "context-rot",
    title: "4. Context Rot: Quando a Memória Começa a Falhar",
    content: `
<h3>4.1 O Que É Context Rot</h3>
<p><strong>Context Rot</strong> é o fenômeno de <strong>degradação progressiva da qualidade das respostas</strong> à medida que uma conversa se aproxima do limite da janela de contexto.</p>

<h3>4.2 Por Que Acontece</h3>
<p>Na arquitetura Transformer, cada token novo precisa calcular sua <strong>relevância</strong> em relação a <strong>todos</strong> os tokens anteriores — o mecanismo de <strong>self-attention</strong>. O artigo de Liu et al. (2023), <strong>"Lost in the Middle"</strong>, demonstrou três padrões:</p>
<ol>
<li>Modelos prestam <strong>mais atenção</strong> no <strong>início</strong> e no <strong>final</strong></li>
<li>Informações no <strong>meio</strong> são frequentemente <strong>ignoradas</strong></li>
<li>A curva de atenção forma um padrão em <strong>"U"</strong></li>
</ol>

<h3>4.3 Sintomas do Context Rot</h3>
<ol>
<li><strong>Esquecimento de instruções iniciais</strong></li>
<li><strong>Contradições</strong> — afirma o oposto do que disse antes</li>
<li><strong>Perda de tom e personalidade</strong></li>
<li><strong>Repetição</strong> — repete informações como se fossem novas</li>
<li><strong>Degradação do raciocínio</strong> — respostas menos sofisticadas</li>
</ol>

<blockquote>
<p><strong>Na Prática:</strong> Se o modelo começa a "esquecer" suas instruções, provavelmente é context rot. A solução é iniciar uma nova conversa.</p>
</blockquote>
    `,
  },
  {
    id: "exemplos-praticos",
    title: "5. Context Rot em Múltiplos Domínios",
    content: `
<h3>Educação e Estudos</h3>
<p>Após processar 30 artigos, o modelo começa a <strong>misturar autores e conclusões</strong>.</p>
<blockquote><p><strong>Lição:</strong> Trabalhe em <strong>blocos temáticos</strong> (10 artigos por chat) e consolide em uma conversa final.</p></blockquote>

<h3>Advocacia e Documentos</h3>
<p>Após 200 páginas e 100+ perguntas, o modelo cita <strong>jurisprudência incorreta</strong>.</p>
<blockquote><p><strong>Lição:</strong> Divida a análise por peças processuais e cruze as conclusões.</p></blockquote>

<h3>Medicina e Saúde</h3>
<p>Após 150 turnos, o modelo "esquece" que o paciente é <strong>alérgico a sulfa</strong> e sugere antibiótico contraindicado.</p>
<blockquote><p><strong>Lição:</strong> Informações críticas de segurança devem ser <strong>reinjetadas</strong> no início de cada nova conversa.</p></blockquote>
    `,
  },
  {
    id: "estrategias",
    title: "6. Estratégias Práticas de Gerenciamento",
    content: `
<h3>6.1 Escolha o Modelo Certo para a Tarefa</h3>
<table>
<thead><tr><th>Tipo de Tarefa</th><th>Tokens Estimados</th><th>Modelo Recomendado</th></tr></thead>
<tbody>
<tr><td>Perguntas curtas, brainstorming</td><td>&lt;10k</td><td>Qualquer modelo</td></tr>
<tr><td>Análise de documento médio</td><td>10k–100k</td><td>GPT-4o (128k), Claude Sonnet</td></tr>
<tr><td>Análise de documento longo</td><td>100k–500k</td><td>GPT-5.2 (400k), Claude Opus</td></tr>
<tr><td>Análise de corpus extenso</td><td>500k–1M</td><td>Claude Sonnet 1M, Gemini 3 Pro</td></tr>
<tr><td>Projetos ultra-longos</td><td>&gt;1M</td><td>Llama 4 (10M) ou RAG</td></tr>
</tbody>
</table>

<h3>6.2 Resuma Periodicamente</h3>
<p>A cada 20-30 turnos, peça ao modelo: <em>"Resuma os pontos principais que discutimos até agora."</em> Copie o resumo para um documento externo.</p>

<h3>6.3 Use Prompt Chaining</h3>
<p>Divida projetos complexos em conversas separadas:</p>
<ul>
<li><strong>Chat 1 — Briefing:</strong> Defina escopo, constraints, objetivos</li>
<li><strong>Chat 2 — Execução:</strong> Produza o trabalho principal</li>
<li><strong>Chat 3 — Refinamento:</strong> Revise e ajuste</li>
</ul>

<h3>6.4 Externalize Informações com RAG</h3>
<p><strong>RAG</strong> (Retrieval-Augmented Generation) recupera apenas os trechos relevantes no momento em que precisa, em vez de carregar todos os documentos na janela (Lewis et al., 2020).</p>

<h3>6.5 Organize Chats por Tema</h3>
<p>Adote o padrão <strong>tema-por-chat</strong>. Evite mega-chats sobrecarregados.</p>
    `,
  },
  {
    id: "conceitos-avancados",
    title: "8. Conceitos Avançados: KV Cache, Lost in the Middle e Context Engineering",
    content: `
<h3>8.1 KV Cache</h3>
<p>Cada token processado gera dois vetores: uma <strong>Key</strong> e um <strong>Value</strong>. O KV Cache cresce <strong>linearmente</strong> com o contexto. Técnicas como <strong>GQA</strong> reduzem o cache em até 8x, enquanto <strong>MLA</strong> alcança redução de até 93%.</p>

<h3>8.2 Lost in the Middle</h3>
<p>A <strong>posição</strong> da informação afeta drasticamente se o modelo vai utilizá-la:</p>
<ul>
<li><strong>Início:</strong> System prompt, constraints, documentos importantes</li>
<li><strong>Final:</strong> Pergunta atual, instrução, informações urgentes</li>
<li><strong>Meio:</strong> Evitar colocar informações críticas aqui</li>
</ul>

<h3>8.3 Context Engineering</h3>
<p>Em 2025, a Anthropic definiu context engineering como <em>"o conjunto de estratégias para curar e manter o conjunto ótimo de tokens durante a inferência do LLM"</em>. O insight: em sistemas de alto desempenho, apenas ~20% dos tokens são o prompt estático, enquanto <strong>~80% é contexto dinâmico</strong>.</p>

<blockquote>
<p><strong>Para Saber Mais:</strong> Se Prompt Engineering é aprender a fazer a pergunta certa, Context Engineering é aprender a <strong>preparar o cenário inteiro</strong> antes de fazer a pergunta.</p>
</blockquote>
    `,
  },
  {
    id: "sintese",
    title: "Síntese do Capítulo",
    content: `
<ul>
<li>A <strong>janela de contexto</strong> é a "mesa de trabalho" onde toda a conversa acontece.</li>
<li>As janelas cresceram ~10.000x em 6 anos (1.024 → 10M tokens).</li>
<li>O <strong>contexto efetivo</strong> é apenas 50-65% do anunciado (RULER, NVIDIA).</li>
<li><strong>Context Rot</strong> é a degradação natural causada pelo efeito <strong>Lost in the Middle</strong>.</li>
<li><strong>6 estratégias práticas:</strong> modelo certo, resumos periódicos, prompt chaining, RAG, chats por tema, token counters.</li>
<li><strong>Context Engineering</strong> é a evolução do Prompt Engineering — foca no design completo da informação.</li>
</ul>
    `,
  },
  {
    id: "exercicios-cap6",
    title: "Exercícios de Fixação",
    content: `
<h3>Questão 1</h3>
<p>Você é advogado e precisa analisar 200 páginas de um processo jurídico. Considerando que o contexto efetivo é ~60% do anunciado, qual modelo oferece a melhor margem de segurança?</p>
<p>(A) GPT-4o (128k) &nbsp; (B) Claude Sonnet 4.6 (1M) &nbsp; (C) GPT-5.2 (400k) &nbsp; (D) Dividir em 10 chats menores</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(B)</strong> — 200 páginas ≈ 150-200k tokens. Com contexto efetivo de ~60%, o Claude Sonnet oferece ~600k tokens úteis, ou seja, 3-4x de margem.</p>
</details>

<h3>Questão 2</h3>
<p>Você está no turno 140 de uma conversa com Claude Opus (200k tokens) discutindo um caso clínico. Precisa mudar para planejamento de escala hospitalar. O que fazer?</p>
<p>(A) Continuar na mesma conversa &nbsp; (B) Iniciar novo chat &nbsp; (C) Compactar com resumo &nbsp; (D) Trocar para Gemini</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(B)</strong> — Mudança de assunto + proximidade do limite = novo chat. Conversa limpa evita context rot.</p>
</details>
    `,
  },
  {
    id: "referencias-cap6",
    title: "Referências",
    content: `
<ol>
<li>Ainslie, J. et al. (2023). "GQA: Training Generalized Multi-Query Transformer Models." arXiv: 2305.13245.</li>
<li>Anthropic. (2025). "Effective Context Engineering for AI Agents."</li>
<li>Anthropic. (2026). <em>Claude Platform Documentation.</em></li>
<li>Cowan, N. (2001). "The magical number 4 in short-term memory." <em>Behavioral and Brain Sciences</em>, 24(1).</li>
<li>Epoch AI. (2025). "LLM Context Windows: Trends and Analysis."</li>
<li>Hsieh, C.-Y. et al. (2024). "RULER: What's the Real Context Size?" arXiv: 2404.06654.</li>
<li>LangChain. (2025). <em>State of Agent Engineering Report.</em></li>
<li>Lewis, P. et al. (2020). "Retrieval-Augmented Generation." arXiv: 2005.11401.</li>
<li>Liu, N. F. et al. (2023). "Lost in the Middle." arXiv: 2307.03172.</li>
<li>Vaswani, A. et al. (2017). "Attention Is All You Need." NeurIPS. arXiv: 1706.03762.</li>
</ol>
    `,
  },
];

// ─── Capítulo 7 ──────────────────────────────────────────

const CAP7_SECTIONS: ChapterSection[] = [
  {
    id: "gancho-cap7",
    title: "Gancho de Abertura",
    content: `
<p>Em junho de 2023, um advogado nova-iorquino foi publicamente censurado pela corte. Seu crime? Citar jurisprudência que não existia em uma petição. Não foi negligência — foi confiança em uma IA. O juiz não perdoou. Semanas depois, uma médica prescreveu uma dosagem que parecia razoável — a IA gerou, ela não conferiu, o paciente quase foi prejudicado. Meses depois, uma empresa investiu em estratégia de marketing baseada em "dados de mercado" que a IA havia inventado com precisão de duas casas decimais.</p>
<p>Todos esses casos têm algo em comum: a IA não "errou" acidentalmente. Ela gerou informação falsa com a confiança de quem sabe tudo.</p>
<p>Bem-vindo ao problema mais crítico da inteligência artificial moderna — e à atitude que vai te proteger contra ele.</p>
    `,
  },
  {
    id: "introducao-cap7",
    title: "Introdução",
    content: `
<p>Nos capítulos anteriores, você dominou os mecanismos fundamentais dos LLMs: tokens (Cap 3), embeddings que capturam significado (Cap 4), como a IA gera respostas palavra por palavra (Cap 5), e janela de contexto que define a memória de trabalho do modelo (Cap 6).</p>
<p>Mas existe um aspecto crítico que não pode ser ignorado: <strong>LLMs têm limitações estruturais e podem gerar informações incorretas com uma confiança que é absolutamente indistinguível de verdade</strong>.</p>
<p>Este não é um detalhe técnico menor. É uma característica fundamental que define como você — não importa sua profissão — <strong>deve</strong> usar IA em contextos reais. Quando essa característica é ignorada, as consequências podem ser graves: médicos tratando pacientes com dosagens fictícias, advogados construindo casos sobre jurisprudência que nunca existiu, engenheiros projetando sistemas com especificações alucinadas, pesquisadores citando papers que não existem.</p>
<p>Neste capítulo, vamos explorar honestamente <strong>por que</strong> os LLMs alucinam, entender as diferentes formas que essas alucinações podem tomar, e mais importante: aprender um <strong>framework completo de grounding</strong> — técnicas científicas para reduzir alucinações e aumentar a confiabilidade das respostas.</p>
    `,
  },
  {
    id: "o-que-sao-alucinacoes",
    title: "1. O que são Alucinações em LLMs?",
    content: `
<p>Uma alucinação não é um "erro de digitação" ou uma imprecisão menor. Uma alucinação é a <strong>geração completa de informações que não existem</strong>, apresentadas de forma tão plausível, tão específica, e com tanta confiança que enganam até especialistas na primeira leitura.</p>

<h3>Exemplo Clássico</h3>
<p>Você pergunta: "Cite 3 artigos sobre o uso de IA em anestesiologia publicados em 2024 no JAMA."</p>
<p>A IA responde com 3 artigos — autores, volumes, páginas específicas. Nenhum desses artigos existe. Os autores? Provavelmente não existem. Os volumes? Inventados. As páginas? Fabricadas. Mas — e aqui está o ponto crucial — são <strong>específicos, plausíveis e confiantes</strong>.</p>

<h3>Definição Formal</h3>
<p>Segundo documentação técnica (Anthropic, 2025): "Alucinações ocorrem quando o modelo gera conteúdo que é <strong>factualmente incorreto, não fundamentado em seus dados de treinamento, ou inconsistente com informações fornecidas no contexto</strong>."</p>
    `,
  },
  {
    id: "tipos-alucinacoes",
    title: "2. Tipos de Alucinações",
    content: `
<h3>Tipo 1: Alucinações Factuais</h3>
<p>O modelo inventa fatos objetivamente falsos: doses incorretas de medicamentos, complexidade errada de algoritmos, estatísticas fabricadas.</p>

<h3>Tipo 2: Alucinações de Citação</h3>
<p>O modelo inventa fontes, autores, artigos ou números de referência que não existem. Particularmente perigoso porque <em>parece</em> que a IA está sendo precisa.</p>

<h3>Tipo 3: Alucinações Contextuais</h3>
<p>O modelo mistura informações de diferentes contextos, criando associações incorretas: combinar propriedades de drogas diferentes, misturar precedentes jurídicos de casos distintos.</p>

<h3>Tipo 4: Confabulação (Preenchimento de Lacunas)</h3>
<p>Quando o modelo não sabe, ele <em>preenche as lacunas</em> com informações plausíveis mas inventadas: protocolos específicos de hospital, números de página para documentos consultados, estatísticas que "parecem corretas".</p>
    `,
  },
  {
    id: "faithfulness-factuality",
    title: "3. Faithfulness vs. Factuality: Uma Distinção Crítica",
    content: `
<p><strong>Factuality</strong> (Factualidade): A informação é objetivamente verdadeira ou falsa no mundo real.</p>
<ul>
<li>"Paris é a capital da França" = Factual</li>
<li>"Paris é a capital da Itália" = Não-factual</li>
</ul>

<p><strong>Faithfulness</strong> (Fidelidade): A resposta é consistente e fiel a um documento ou contexto que foi fornecido.</p>
<ul>
<li>Documento: "A empresa cresceu 30% no Q1"</li>
<li>Resposta fiel: "A empresa cresceu 30% no primeiro trimestre"</li>
<li>Resposta infiel: "A empresa cresceu 45% no primeiro trimestre"</li>
</ul>

<p>A distinção importa enormemente: <strong>faithfulness não garante factuality</strong>. Um documento que você fornece pode conter informação falsa. Pesquisa de Maynez et al. (2020) mostrou que modelos podem ser 80% fiéis a um documento mas conter erros factuais porque o documento original era impreciso.</p>
    `,
  },
  {
    id: "por-que-alucinacoes-acontecem",
    title: "4. Por que Alucinações Acontecem: 4 Razões Estruturais",
    content: `
<h3>Razão 1: LLMs São Modelos Probabilísticos, Não Bancos de Dados</h3>
<p>Um <strong>banco de dados</strong> é como uma biblioteca com índices: você procura uma informação, o sistema retorna correspondência exata ou diz "não encontrado". Um <strong>LLM é como um escritor que leu bilhões de textos</strong> — ele <em>gera</em> a resposta baseado em padrões aprendidos. Quando padrões são raros ou incertos, o modelo gera o que parece plausível.</p>

<h3>Razão 2: Geração Token-por-Token Sem "Marcha-Atrás"</h3>
<p>Uma vez que um token é gerado, ele se torna <em>contexto</em> para os próximos. Não existe "voltar atrás". Se o modelo gera um nome de revista que não existe, os tokens subsequentes amplificam o erro — criando uma "cascata de alucinação".</p>

<h3>Razão 3: Treinamento em Dados da Internet (Que Contém Muitos Erros)</h3>
<p>A internet contém fóruns com conselhos médicos errados, blogs com métricas fabricadas, artigos mal pesquisados. Lin et al. (2021) com TruthfulQA mostrou que modelos alcançam apenas 58% de acurácia em perguntas onde a resposta intuitiva é falsa.</p>

<h3>Razão 4: Treinamento via RLHF Cria Pressão para "Sempre Ter Resposta"</h3>
<p>Modelos são otimizados via RLHF para serem <strong>úteis, completos e satisfatórios</strong>. "Não sei" é menos recompensado que uma resposta estruturada. O resultado? Pressão inerente para <em>sempre</em> ter uma resposta.</p>
    `,
  },
  {
    id: "limitacoes-estruturais",
    title: "5. Limitações Estruturais Além de Alucinações",
    content: `
<h3>Limitação 1: Conhecimento Desatualizado (Knowledge Cutoff)</h3>
<p>Knowledge Cutoffs Atuais: Claude (Maio 2025), GPT-5.2 (Agosto 2025), Gemini 3 (Janeiro 2026). Eventos posteriores a essas datas levam à confabulação.</p>

<h3>Limitação 2: Sem Acesso a Informações Proprietárias ou Internas</h3>
<p>Protocolos específicos de hospital, documentos internos da empresa, dados de pacientes, contratos, bases proprietárias — o modelo simplesmente não tem acesso a essas informações.</p>

<h3>Limitação 3: Matemática Complexa e Cálculos</h3>
<p>LLMs simulam cálculos baseados em padrões, não fazem computação nativa. Problemas simples funcionam; complexos, o modelo confabula o resultado.</p>

<h3>Limitação 4: Não Entendem "Verdade" — Apenas Padrões</h3>
<p>LLMs capturam <strong>correlações estatísticas</strong> em textos. Se texto diz "A causa B", o modelo aprende a associação — mas não <em>por quê</em>. Causalidade é invisível para o modelo.</p>
    `,
  },
  {
    id: "como-identificar-alucinacoes",
    title: "6. Como Identificar Alucinações: 5 Sinais de Alerta",
    content: `
<h3>Sinal 1: Confiança Excessiva + Vaguidade</h3>
<p>"Estudos mostram que..." sem especificar quais. Confiança + vaguidade = combinação perigosa.</p>

<h3>Sinal 2: Citações Muito Específicas Mas Não Verificáveis</h3>
<p>Autores, volumes, páginas que parecem reais mas que você não pode verificar instantaneamente.</p>

<h3>Sinal 3: Inconsistências Entre Turnos</h3>
<p>Informações contraditórias na mesma conversa, ambas com confiança.</p>

<h3>Sinal 4: Detalhes Suspeitamente Perfeitos</h3>
<p>Informação tão específica e formatada que parece fabricada. Informação real é frequentemente desordenada.</p>

<h3>Sinal 5: A IA "Sempre Tem Uma Resposta"</h3>
<p>Se faz 10 perguntas de dificuldade variada e a IA tem resposta confiante para todas, desconfie.</p>
    `,
  },
  {
    id: "grounding-framework",
    title: "7. Grounding: Framework Completo para Reduzir Alucinações",
    content: `
<h3>Técnica 1: Fornecer Documentos de Referência (In-Context Grounding)</h3>
<p>Cole o documento relevante no prompt e instrua: "Responda baseado NESTE documento. Se a informação não estiver no documento, diga 'não está no documento'." Extremamente eficaz para documentos que você já tem.</p>

<h3>Técnica 2: RAG — Retrieval-Augmented Generation</h3>
<p>Framework científico (Lewis et al., 2020): Retriever busca documentos relevantes por similaridade → Generator (IA) gera resposta fundamentada nesses documentos. Escalável para grandes bases de conhecimento.</p>

<h3>Técnica 3: Citações Obrigatórias (Citation Anchoring)</h3>
<p>Instrua o modelo para sempre citar fonte [1], [2], [3] para afirmações factuais. Força explicitação — se a IA cita algo que não existe, fica óbvio ao verificar.</p>

<h3>Técnica 4: Web Search Integrada (Real-Time Grounding)</h3>
<p>Modelos modernos buscam na web em tempo real. Resolve problema de knowledge cutoff. Google Gemini API (2025) suporta grounding com Google Search. Claude e ChatGPT Plus também.</p>

<h3>Técnica 5: Tool Use e Code Execution (Grounding Computacional)</h3>
<p>Para matemática e cálculos — use ferramentas computacionais reais, não simulação. Claude e Gemini têm code execution nativo; ChatGPT tem Code Interpreter.</p>

<h3>Técnica 6: Validação Cruzada (Cross-Checking Entre Modelos)</h3>
<p>Faça a mesma pergunta em 2-3 modelos diferentes. Concordância aumenta confiança; divergência sinaliza possíveis alucinações. HaluEval (Li et al., 2023) mostrou que modelos detectam melhor alucinações com múltiplas perspectivas.</p>
    `,
  },
  {
    id: "postura-validador",
    title: "8. A Postura de Validador: Mindset Profissional",
    content: `
<p><strong>Um validador é um profissional que usa IA como ferramenta, mas mantém autoridade crítica sobre informações produzidas.</strong></p>

<h3>O que um Validador Faz — 5 Passos Práticos</h3>
<p><strong>Passo 1: Identificar Criticidade</strong> — Vida? Conformidade? Decisão financeira? Se sim → ir para Passo 2.</p>
<p><strong>Passo 2: Questionar a Resposta</strong> — A IA citou fonte? Admitiu incerteza? Contradiz algo que sei?</p>
<p><strong>Passo 3: Verificar Independentemente</strong> — Documentos primários, especialistas humanos, bases de dados confiáveis, múltiplos modelos.</p>
<p><strong>Passo 4: Documentar o Processo</strong> — Qual pergunta, qual resposta, como validou, conclusão.</p>
<p><strong>Passo 5: Decidir com Autoridade</strong> — Você — não a IA — toma a decisão final.</p>

<h3>Aplicabilidade Multidisciplinar</h3>
<ul>
<li><strong>Medicina:</strong> Validar em BNF, comparar com protocolo hospitalar, consultar farmacologista.</li>
<li><strong>Advocacia:</strong> Sempre consultar base de jurisprudência (STF, STJ) antes de citar.</li>
<li><strong>Engenharia:</strong> Executar cálculos com software validado (ANSYS, SAP), testar código antes de implementar.</li>
<li><strong>Pesquisa:</strong> Verificar citações em PubMed ou Google Scholar. Nunca citar "dados gerados por IA".</li>
<li><strong>Gestão/Finanças:</strong> Cruzar com fontes oficiais (Banco Central, IBGE, bases financeiras).</li>
<li><strong>Marketing:</strong> Validar claims contra relatórios de agências (Gartner, IDC) e dados públicos.</li>
</ul>
    `,
  },
  {
    id: "quando-grounding-funciona",
    title: "9. Quando Grounding Funciona e Quando Não",
    content: `
<table>
<thead><tr><th>Cenário</th><th>Funciona?</th><th>Melhor Técnica</th><th>Confiança</th></tr></thead>
<tbody>
<tr><td>Citar artigo que você forneceu</td><td>Sim</td><td>Documento de Referência</td><td>Muito alta</td></tr>
<tr><td>Calcular juros compostos</td><td>Sim</td><td>Code Execution</td><td>Muito alta</td></tr>
<tr><td>Responder sobre lei de 2023</td><td>Sim</td><td>RAG + base jurídica</td><td>Alta</td></tr>
<tr><td>Verificar regulação atual</td><td>Sim</td><td>Web Search</td><td>Alta</td></tr>
<tr><td>Inventar dose de medicamento novo</td><td>Não</td><td>Nenhum</td><td>Baixa</td></tr>
<tr><td>Evento de 2026</td><td>Parcial</td><td>Web Search</td><td>Depende da fonte</td></tr>
</tbody>
</table>

<p><strong>Princípio-chave:</strong> Grounding reduz alucinações, mas não as elimina completamente.</p>
    `,
  },
  {
    id: "estrategias-uso-seguro",
    title: "10. Estratégias Práticas de Uso Seguro",
    content: `
<p><strong>Princípio 1:</strong> Sempre Validar Informações Críticas</p>
<p><strong>Princípio 2:</strong> Use IA como Assistente, Não como Autoridade</p>
<p><strong>Princípio 3:</strong> Documente Sempre — Qual IA, qual pergunta, como validou</p>
<p><strong>Princípio 4:</strong> Nunca Use IA Sozinho para Decisões Críticas</p>
<p><strong>Princípio 5:</strong> Eduque Sua Equipe</p>

<h3>Casos Reais</h3>
<p><strong>Caso 1 — Mata v. Avianca (2023):</strong> Advogado citou jurisprudência fictícia gerada por ChatGPT. Publicamente censurado e multado.</p>
<p><strong>Caso 2 — HaluEval Study (2024):</strong> 300 casos clínicos fictícios testados em 6 LLMs. Modelos elaboravam sobre erros, criando diagnósticos coerentes baseados em premissa falsa.</p>
<p><strong>Caso 3 — Amazon Science (2024):</strong> Developers usando ChatGPT para código — modelo inventava APIs e bibliotecas fictícias.</p>
<p><strong>Caso 4 — Confabulação de Métricas:</strong> CFO baseou decisão em "65.3% crescimento" gerado por IA. Crescimento real foi 12%.</p>
<p><strong>Caso 5 — Paper Fictício:</strong> Estudante citou "Smith et al. (2023), Nature Neuroscience, Vol 44..." — paper não existe. Trabalho rejeitado.</p>
    `,
  },
  {
    id: "resumo-cap7",
    title: "Resumo e Ponte para o Ebook 2",
    content: `
<p>Limitações da IA não invalidam a ferramenta. Ao contrário — elas tornam o profissional que as entende <strong>mais poderoso</strong>. Você não é vítima das limitações da IA. Você é arquiteto das guardrails que as contornam.</p>
<p>Você agora domina as fundações de LLMs — desde como funcionam até suas limitações críticas. No <strong>Ebook 2</strong>, vamos explorar <strong>Prompt Engineering</strong> — a arte e ciência de comunicar exatamente o que você quer da IA, de forma que as técnicas de grounding que aprendeu aqui funcionem ainda melhor.</p>
    `,
  },
  {
    id: "exercicios-cap7",
    title: "Exercícios de Fixação",
    content: `
<h3>Questão 1 (Múltipla Escolha)</h3>
<p>Um advogado usa ChatGPT para pesquisar jurisprudência sobre direito de propriedade intelectual. A IA retorna 5 sentenças do STF com números de processo, datas e citações muito específicas. O advogado inclui na petição sem verificar. O que aconteceu?</p>
<p>(A) O advogado fez uso correto de IA como ferramenta de pesquisa<br>
(B) O advogado provavelmente incluiu alucinações de citação — risco de sanção judicial<br>
(C) A IA tem acesso à base de jurisprudência, então as citações são confiáveis<br>
(D) Citações específicas são indicador de confiabilidade</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(B)</strong> — Este é o caso real de Mata v. Avianca (2023). Citações específicas são na verdade sinal de alerta clássico de alucinação.</p>
</details>

<h3>Questão 2 (Múltipla Escolha)</h3>
<p>Qual é a diferença entre "Factuality" e "Faithfulness"?</p>
<p>(A) São sinônimos<br>
(B) Factuality = verdade no mundo real; Faithfulness = consistência com documento fornecido<br>
(C) Factuality = citação completa; Faithfulness = resumo curto<br>
(D) Faithfulness aplica-se só a medicina</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(B)</strong> — RAG garante faithfulness mas não factuality. Se o documento tem erro, RAG propagará o erro.</p>
</details>

<h3>Questão 3 (Verdadeiro ou Falso)</h3>
<ol>
<li>Alucinações são "erros ocasionais" — se a IA responde com confiança, é 90% provável que esteja certa. <strong>Falso</strong> — Alucinações são sistemáticas e confiança é inversamente correlacionada com acurácia em tópicos raros.</li>
<li>Code execution elimina completamente a possibilidade de alucinação. <strong>Falso</strong> — Reduz alucinações em cálculos, mas a IA pode alucinar qual código escrever.</li>
<li>Se a IA cita fonte [1], [2], [3], é sinal de que as fontes existem. <strong>Falso</strong> — Citações obrigatórias forçam explicitação, não garantem veracidade.</li>
<li>Um médico que valida em BNF antes de prescrever demonstra "postura de validador". <strong>Verdadeiro</strong>.</li>
<li>Alucinações são problema exclusivo de medicina. <strong>Falso</strong> — Acontecem em todas as áreas.</li>
</ol>

<h3>Questão 4 (Dissertativa)</h3>
<p>Uma pesquisadora usa IA para gerar um capítulo de revisão de literatura com 20 citações. Como demonstrar "postura de validador"?</p>
<details><summary><strong>Ver Resposta Modelo</strong></summary>
<p>(1) Identificar criticidade (publicação, reputação em risco). (2) Questionar (IA citou fonte? Admitiu incerteza?). (3) Verificar cada paper em Google Scholar — criar tabela "Citação | Achado | Status". (4) Documentar processo. (5) Remover citações não-verificáveis, substituir por papers acessados. Resultado: pesquisa publicável e defensável.</p>
</details>

<h3>Questão 5 (Aplicação Prática)</h3>
<p>Você é gestor em consultoria. Analista junior gera relatório com "Mercado deve crescer 38.7% ano-a-ano" e "Empresas de IA representarão 23.4% do total". Números muito específicos. Como proceder?</p>
<details><summary><strong>Ver Resposta Modelo</strong></summary>
<p>(1) Validar em Gartner, IDC, Forrester, McKinsey. (2) Técnica ideal: RAG + Web Search + Citações Obrigatórias. (3) Comunicar ao cliente com intervalos de confiança e fontes verificadas. Resultado: relatório credível e defensável.</p>
</details>
    `,
  },
  {
    id: "referencias-cap7",
    title: "Referências",
    content: `
<ol>
<li>Anthropic (2025). <em>Reduce Hallucinations</em>. Platform Documentation.</li>
<li>Google AI (2025). <em>Grounding with Google Search</em>. Gemini API Documentation.</li>
<li>Ji, Z. et al. (2023). <em>Survey of Hallucination in Natural Language Generation</em>. ACM Computing Surveys.</li>
<li>Lewis, P. et al. (2020). <em>Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks</em>. NeurIPS.</li>
<li>Maynez, J. et al. (2020). <em>On Faithfulness and Factuality in Abstractive Summarization</em>. ACL 2020.</li>
<li>Lin, S. et al. (2021). <em>TruthfulQA: Measuring How Models Mimic Human Falsehoods</em>. NeurIPS.</li>
<li>Li, C. et al. (2023). <em>HaluEval: A Large-Scale Hallucination Evaluation Benchmark</em>. EMNLP 2023.</li>
<li>Anthropic (2025). <em>Safety and Alignment Documentation</em>.</li>
<li>OpenAI (2024). <em>Prompt Engineering Guide</em>. Developers documentation.</li>
<li>Amazon Science (2024). <em>On Mitigating Code LLM Hallucinations with API Documentation</em>.</li>
<li>Stanford HAI (2024). <em>Hallucinating Law: Legal Mistakes with Large Language Models Are Pervasive</em>.</li>
<li>Nature Communications Medicine (2025). <em>Clinical Vignette Study: Hallucinations in LLMs with Fabricated Medical Data</em>.</li>
</ol>
    `,
  },
];

// ─── Placeholder para capítulos em desenvolvimento ───────

function placeholderSections(title: string): ChapterSection[] {
  return [
    {
      id: "em-breve",
      title: "Em Breve",
      content: `
<div style="text-align:center; padding: 4rem 0;">
  <p style="font-size: 1.25rem; color: #a3b8cc;">Este capítulo está em desenvolvimento.</p>
  <p style="color: #6370E0; margin-top: 1rem;"><strong>${title}</strong> será publicado em breve.</p>
  <p style="color: #a3b8cc; margin-top: 2rem; font-size: 0.875rem;">Enquanto isso, explore os capítulos disponíveis no sumário.</p>
</div>
      `,
    },
  ];
}

// ─── Ebook completo ──────────────────────────────────────

export const FUNDAMENTOS_IA: EbookMeta = {
  id: "fundamentos-ia",
  title: "Fundamentos da IA Generativa",
  subtitle: "e dos Modelos de Linguagem",
  description:
    "Dos conceitos fundamentais aos modelos de linguagem modernos. Uma jornada completa pelos pilares da Inteligência Artificial Generativa: LLMs, tokens, embeddings, janela de contexto e os principais modelos de 2026.",
  author: "Gabriel Tavares",
  coverColor: "#3B4ABF",
  chapters: [
    {
      slug: "o-que-e-ia-generativa",
      number: 1,
      title: "O que é a Inteligência Artificial Generativa",
      summary:
        "O que é IA, como ela evoluiu de Turing até os Transformers, e por que a IA Generativa representa um salto qualitativo diferente de tudo que veio antes.",
      readingTime: "18 min",
      available: true,
      sections: CAP1_SECTIONS,
    },
    {
      slug: "large-language-models",
      number: 2,
      title: "Large Language Models — O Motor da IA",
      summary:
        "Como funcionam os LLMs, o processo de treinamento, pré-treinamento, fine-tuning e RLHF. O motor que faz a IA generativa funcionar.",
      readingTime: "15 min",
      available: true,
      sections: CAP2_SECTIONS,
    },
    {
      slug: "tokens",
      number: 3,
      title: "Tokens — A Unidade Funcional da IA",
      summary:
        "O que são tokens, como os modelos dividem texto em unidades processáveis, e por que isso importa para custo, velocidade e qualidade.",
      readingTime: "12 min",
      available: true,
      sections: CAP3_SECTIONS,
    },
    {
      slug: "embeddings",
      number: 4,
      title: "Word Embeddings — Como a IA Entende Significado",
      summary:
        "Como palavras viram vetores matemáticos, espaços semânticos e por que 'rei - homem + mulher = rainha' funciona.",
      readingTime: "14 min",
      available: true,
      sections: CAP4_SECTIONS,
    },
    {
      slug: "do-prompt-ao-output",
      number: 5,
      title: "Como a IA Gera Respostas — Do Prompt ao Output",
      summary:
        "O pipeline completo de inferência: do prompt à tokenização, passando pelo Transformer, até a geração token a token.",
      readingTime: "16 min",
      available: true,
      sections: CAP5_SECTIONS,
    },
    {
      slug: "janela-de-contexto",
      number: 6,
      title: "Janela de Contexto — Gerenciando a Memória dos LLMs",
      summary:
        "O que é context window, context rot, Lost in the Middle, KV Cache e estratégias práticas de gerenciamento. A ponte para Context Engineering.",
      readingTime: "20 min",
      available: true,
      sections: CAP6_SECTIONS,
    },
    {
      slug: "limitacoes-alucinacoes-grounding",
      number: 7,
      title: "Limitações, Alucinações e Grounding",
      summary:
        "Por que LLMs alucinam, os tipos de alucinação, técnicas de grounding para reduzir erros e a postura de validador profissional.",
      readingTime: "18 min",
      available: true,
      sections: CAP7_SECTIONS,
    },
  ],
};
