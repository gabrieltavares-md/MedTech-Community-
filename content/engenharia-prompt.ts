import type { ChapterSection, EbookMeta } from "./fundamentos-ia";

// ─── Capítulo 1 ──────────────────────────────────────────

const CAP1_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap1",
    title: "Introdução",
    content: `
<p>Nos capítulos anteriores, você entendeu <em>o que é</em> a Inteligência Artificial Generativa e <em>como</em> os Modelos de Linguagem funcionam por dentro: tokens, embeddings, janela de contexto, geração de respostas. Você conheceu as engrenagens da máquina.</p>
<p>Agora a pergunta muda completamente. Não é mais "o que é isso?". É "<strong>como eu me comunico com isso de forma eficaz?</strong>"</p>
<p>Existe um abismo entre alguém que usa a IA e recebe respostas medianas — e alguém que extrai resultados de nível profissional da mesma ferramenta. Esse abismo raramente tem a ver com o modelo escolhido. Ele tem a ver com a qualidade da instrução dada. Tem a ver com o <strong>prompt</strong>.</p>
<p>Este capítulo é o ponto de entrada do Módulo de Engenharia de Prompt. Aqui você vai entender o que um prompt realmente é, por que a maioria das pessoas o usa de forma errada, quais são os princípios que efetivamente determinam a qualidade da resposta — e como a IA "hierarquiza" as informações que recebe.</p>
<p>Ao final deste capítulo, você não vai apenas saber o que é um prompt. Você vai começar a pensar como um <strong>arquiteto da intenção</strong>: alguém que projeta instruções, não apenas faz perguntas.</p>
    `,
  },
  {
    id: "o-que-e-um-prompt",
    title: "1. O que é um Prompt?",
    content: `
<p>No contexto dos Modelos de Linguagem em Grande Escala (LLMs), um <strong>prompt</strong> é qualquer entrada (<em>input</em>) que você fornece ao modelo para guiar sua saída (<em>output</em>). Essa entrada pode ser texto, imagens, documentos, áudio ou qualquer combinação — mas na prática cotidiana, é quase sempre texto.</p>
<p>A grande revolução dos LLMs foi eliminar a necessidade de codificação rígida nessa interação. Antes, comunicar-se com um computador exigia aprender uma linguagem de máquina — comandos precisos, sintaxe específica, zero margem para ambiguidade. Agora, você se comunica em linguagem natural. O prompt é o que tornou isso possível.</p>
<p>Mas aqui está o erro que a maioria das pessoas comete: <strong>tratar o prompt como uma pergunta</strong>, quando ele é, na verdade, uma instrução estruturada.</p>
<p>Perguntas são abertas por definição. Instruções são intencionais. A diferença entre "O que é fibrilação atrial?" e um prompt bem construído sobre o mesmo tema não é apenas de comprimento — é de <em>arquitetura</em>. O segundo define quem deve responder, para quem, em qual nível de profundidade, com qual estrutura de saída.</p>
<p>Conforme sistematizado no estudo acadêmico "The Prompt Report" (Schulhoff et al., 2024), um prompt robusto é composto por múltiplos elementos que podem incluir: instruções diretas, dados de entrada a serem processados, contexto ou informação de fundo, e exemplos demonstrativos de como a tarefa deve ser executada.</p>
    `,
  },
  {
    id: "engenharia-de-prompt",
    title: "2. O que é Engenharia de Prompt?",
    content: `
<p>Se o prompt é a instrução, a <strong>Engenharia de Prompt</strong> é a disciplina de projetar, testar e refinar essas instruções sistematicamente para extrair o máximo de qualidade dos modelos de linguagem.</p>
<p>Não é a "arte de fazer perguntas". É a <strong>ciência de projetar comunicação com IA</strong> para transformar intenções vagas em resultados precisos e utilizáveis.</p>
<blockquote>
<p><strong>Analogia médica:</strong> Um prontuário médico vago — "paciente com dor abdominal" — não orienta nenhuma conduta. Um prontuário completo — com localização, irradiação, caráter, intensidade, fatores de melhora e piora, sintomas associados, antecedentes e exame físico — gera diagnósticos diferenciais e condutas precisas. A Engenharia de Prompt é a arte de preencher esse prontuário antes de enviar ao modelo.</p>
</blockquote>
<p>O processo é, por definição, <strong>iterativo</strong>. Raramente o primeiro prompt é perfeito. A habilidade real está no refinamento contínuo: analisar a saída, identificar o que estava faltando ou era ambíguo, ajustar a instrução e iterar.</p>
<p>O objetivo final é transformar o usuário passivo — que digita uma pergunta e aceita qualquer resposta — em um <strong>arquiteto ativo da interação</strong>, capaz de moldar e guiar a inteligência do modelo para atender a propósitos complexos.</p>
    `,
  },
  {
    id: "system-user-prompt",
    title: "3. Os Dois Tipos de Prompt: System Prompt e User Prompt",
    content: `
<p>Antes de falar em princípios e técnicas, é fundamental entender algo que a maioria dos usuários de IA não sabe: <strong>toda conversa com um LLM tem duas camadas de instrução, não uma.</strong></p>
<h3>System Prompt — A Configuração Permanente</h3>
<p>O <strong>System Prompt</strong> é a instrução que define <em>quem a IA é</em> e <em>como ela deve se comportar</em> durante toda a conversa. Ele é configurado antes da interação começar e permanece ativo durante todo o diálogo.</p>
<p>Pense nele como o briefing que você daria a um novo colaborador antes de uma reunião: "Você é um especialista em anestesiologia, sua linguagem deve ser técnica mas acessível, responda sempre em português, priorize referências da SBA e da Miller."</p>
<p>Nas plataformas que você já usa, o System Prompt aparece de formas diferentes:</p>
<ul>
<li><strong>Claude:</strong> campo "System Prompt" nos Projetos ou diretamente na API</li>
<li><strong>ChatGPT:</strong> configuração de "Instruções Personalizadas" ou em GPTs customizados</li>
<li><strong>Gemini:</strong> configuração de Gems</li>
</ul>
<h3>User Prompt — A Instrução do Momento</h3>
<p>O <strong>User Prompt</strong> é o que você digita em cada mensagem durante a conversa. É situacional, específico para aquele momento, e pode mudar a cada interação.</p>
<p>Se o System Prompt é o contrato de trabalho, o User Prompt é a tarefa do dia.</p>
<h3>Por que isso importa na prática?</h3>
<p>Para o usuário não-técnico, essa distinção tem uma implicação imediata: <strong>você pode configurar um contexto permanente para a IA antes de começar a trabalhar</strong>, economizando repetição e melhorando consistência. Ao usar os Projetos do Claude ou as Instruções Personalizadas do ChatGPT, você está, na prática, criando um System Prompt — sem precisar saber programar.</p>
    `,
  },
  {
    id: "hierarquia-eficacia",
    title: "4. A Hierarquia do que Realmente Funciona",
    content: `
<p>Não existe uma única técnica de prompt que resolva tudo. Mas existe uma <strong>ordem de prioridade</strong> clara sobre o que gera mais impacto na qualidade da resposta.</p>
<p>A Anthropic — empresa criadora do Claude — publicou em sua documentação oficial uma hierarquia de eficácia:</p>
<p><strong>1. Clareza e direção (maior impacto)</strong></p>
<p>Seja explícito sobre o que você quer. Não assuma que a IA vai inferir. A documentação da Anthropic usa uma analogia precisa: trate o modelo como <em>"um funcionário novo brilhante — mas que acabou de chegar e não conhece suas normas, seu estilo, suas preferências"</em>.</p>
<p><strong>2. Exemplos (segundo maior impacto)</strong></p>
<p>Mostrar funciona melhor do que apenas descrever. Dar exemplos de como você quer a resposta é, comprovadamente, uma das técnicas de maior retorno. Esta é a base do <em>Few-Shot Prompting</em>, tema do Capítulo 3.</p>
<p><strong>3. Raciocínio estruturado</strong></p>
<p>Pedir à IA que pense passo a passo melhora significativamente a precisão — especialmente em tarefas complexas. Esta é a base do <em>Chain of Thought</em>, tema do Capítulo 4.</p>
<p><strong>4. Tags e estrutura</strong></p>
<p>Organizar o prompt com marcadores visuais — como tags XML — ajuda o modelo a identificar as diferentes partes da instrução.</p>
<p><strong>5. Papel (menor impacto isolado)</strong></p>
<p>Definir um papel para a IA ("Aja como um anestesiologista sênior") tem impacto — mas menor do que a maioria imagina quando usado isoladamente.</p>
<blockquote>
<p><strong>A principal lição:</strong> a maioria das pessoas faz exatamente o inverso. Começam pela persona ("Aja como...") e negligenciam clareza, exemplos e estrutura — que são os fatores de maior impacto real.</p>
</blockquote>
    `,
  },
  {
    id: "principio-fundamental",
    title: "5. Diga o que Fazer, Não o que Não Fazer",
    content: `
<p>Entre todos os princípios da Engenharia de Prompt, existe um que tem impacto imediato e que contraria a intuição da maioria das pessoas.</p>
<p><strong>Formule suas instruções de forma positiva — diga o que você quer, não o que você não quer.</strong></p>
<p>A instrução "não use linguagem técnica" é menos eficaz do que "use linguagem acessível para um estudante de medicina do segundo ano". A instrução "não faça a resposta longa demais" é menos eficaz do que "responda em no máximo três parágrafos".</p>
<p>Por que isso acontece? Porque os LLMs processam tokens sequencialmente e são treinados para completar padrões. Quando você descreve o que não quer, você ainda ativa os padrões daquilo que quer evitar. Quando você descreve o que quer, você aponta diretamente para o padrão correto.</p>
<p>A documentação oficial da Anthropic para o Claude reforça este ponto explicitamente: prefira instruções afirmativas e específicas sobre o resultado desejado a listas de proibições. A regra é simples — <strong>descreva a chegada, não os desvios</strong>.</p>
    `,
  },
  {
    id: "aplicacao-pratica-cap1",
    title: "6. Aplicação Prática: Prompt Fraco vs. Estruturado",
    content: `
<p><strong>Situação:</strong> Um médico quer usar a IA para criar um resumo de um artigo sobre anestesia regional para apresentar à equipe de residentes.</p>
<p><strong>Prompt fraco:</strong></p>
<blockquote><p>"Me faça um resumo deste artigo sobre bloqueio de plexo braquial."</p></blockquote>
<p><em>Análise:</em> Falha em clareza, contexto, especificidade e formato. O resultado será genérico.</p>
<p><strong>Prompt estruturado:</strong></p>
<blockquote><p>"Você é um anestesiologista com experiência em anestesia regional e habilidade de comunicação didática. Vou compartilhar um artigo sobre bloqueio de plexo braquial por via interescalênica. Estou preparando uma apresentação de 10 minutos para residentes do primeiro ano. Crie um resumo com: Objetivo (1-2 frases), Metodologia acessível (3-4 frases), Resultados principais (máximo 5 bullets), Implicação clínica (1 parágrafo), Pergunta de reflexão. Use linguagem acessível e destaque achados de maior relevância clínica."</p></blockquote>
<h3>Mais Exemplos</h3>
<table>
<thead><tr><th>Situação</th><th>Prompt Fraco</th><th>Prompt Estruturado</th></tr></thead>
<tbody>
<tr><td>Estudar para prova</td><td>"Me explique cetoacidose diabética"</td><td>"Explique a fisiopatologia da cetoacidose diabética como se eu fosse um R1. Use: gatilho → mecanismo → manifestações → raciocínio do tratamento. Máximo 400 palavras."</td></tr>
<tr><td>Criar exercícios</td><td>"Crie perguntas sobre anestesia"</td><td>"Crie 5 questões de múltipla escolha no estilo CREMESP sobre TIVA, nível intermediário, com gabarito comentado."</td></tr>
<tr><td>Revisar texto</td><td>"Revise este parágrafo"</td><td>"Revise para clareza e precisão científica. Mantenha tom acadêmico. Aponte imprecisões em lista separada. Não altere o argumento central."</td></tr>
<tr><td>Caso clínico</td><td>"Me ajude com este caso"</td><td>"Analise como intensivista. Liste os 3 diagnósticos diferenciais mais prováveis em ordem, justificando cada um. Sugira exames e condutas iniciais."</td></tr>
</tbody>
</table>
    `,
  },
  {
    id: "exercicios-cap1",
    title: "Exercícios de Fixação",
    content: `
<h3>Questão 1</h3>
<p>Qual é a diferença entre um System Prompt e um User Prompt? Dê um exemplo prático.</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>O System Prompt define o comportamento permanente da IA durante toda a sessão. O User Prompt é a instrução pontual de cada mensagem. Exemplo: System Prompt nos Projetos do Claude: "Você é um especialista em Anestesiologia, usa referências da SBA e Miller, responde em português." Cada User Prompt seria uma tarefa — "analise este caso", "crie questões sobre bloqueios".</p>
</details>
<h3>Questão 2</h3>
<p>Reescreva o prompt aplicando o princípio de clareza e "diga o que fazer":</p>
<blockquote><p>"Não me dê uma resposta muito longa e não use termos complicados. Fale sobre HAS."</p></blockquote>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>"Escreva um resumo objetivo sobre Hipertensão Arterial Sistêmica em linguagem acessível para estudantes de medicina do sexto período. Máximo de 300 palavras. Inclua: definição, critérios diagnósticos, classificação por estágios e abordagem terapêutica inicial."</p>
</details>
<h3>Questão 3</h3>
<p>Segundo a hierarquia da Anthropic, qual tem <strong>maior</strong> impacto isolado?</p>
<p>(a) Definir persona<br>(b) Dar exemplos<br>(c) Ser claro e direto na instrução<br>(d) Usar tags XML</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(c)</strong> — Clareza e direção são o fator de maior impacto isolado.</p>
</details>
<h3>Questão 4</h3>
<p>Identifique pelo menos três problemas e reescreva:</p>
<blockquote><p>"Me ajude a estudar para a prova de anestesiologia."</p></blockquote>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>Problemas: (1) sem contexto, (2) sem especificidade de tarefa, (3) sem formato, (4) sem escopo. Versão: "Aja como preceptor de Anestesiologia. Preparação para prova de título da SBA, foco em anestesia regional. Crie plano de revisão de 7 dias com temas mais cobrados, conceitos-chave, pontos de atenção e questão prática para cada tema."</p>
</details>
<h3>Questão 5 — Verdadeiro ou Falso</h3>
<p>O System Prompt é visível para o usuário durante a conversa e pode ser alterado a qualquer momento.</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>Falso.</strong> O System Prompt opera nos bastidores e, em geral, não é visível para o usuário final.</p>
</details>
    `,
  },
];

// ─── Capítulo 2 ──────────────────────────────────────────

const CAP2_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap2",
    title: "Introdução",
    content: `
<p>No capítulo anterior, você aprendeu <em>o que</em> é um prompt, <em>por que</em> a clareza vem antes de tudo, e como pensar antes de digitar. Agora chegou o momento de colocar as mãos na massa.</p>
<p>Este capítulo é o seu manual de construção. Você vai aprender o <strong>Framework PCTF</strong> — a ferramenta mais prática para montar prompts profissionais — e vai dominar três técnicas de estruturação: as <strong>Tags XML</strong>, o <strong>Prefill</strong> e a <strong>instrução no final para contextos longos</strong>.</p>
<p>Ao terminar, você não vai mais encarar a caixa de texto de uma IA como um campo de digitação livre. Vai enxergá-la como uma interface de precisão.</p>
    `,
  },
  {
    id: "framework-pctf",
    title: "1. O Framework PCTF: A Anatomia de um Prompt Eficaz",
    content: `
<p>Imagine que você vai pedir um exame de imagem para um paciente. Se você escreve apenas "faça uma TC", o radiologista não tem o que precisa. O <strong>Framework PCTF</strong> é o formulário que garante que você não esqueça nenhum campo essencial.</p>
<p>PCTF decompõe um prompt eficaz em quatro componentes:</p>
<h3>(P) Persona — Quem a IA deve ser</h3>
<p>Atribuir um papel calibra o vocabulário, o nível de detalhe técnico e a postura da resposta. A Persona amplifica uma instrução clara; não salva uma instrução vaga.</p>
<ul>
<li>"Atue como professor de medicina explicando para residentes do primeiro ano."</li>
<li>"Aja como revisor de periódico científico avaliando um manuscrito."</li>
</ul>
<h3>(C) Contexto — O quadro de referência</h3>
<p>Responde: Para quem? Em que situação? Com qual objetivo? Qual o nível do público?</p>
<ul>
<li>"Estou preparando uma aula sobre anestesia bariátrica para residentes do segundo ano."</li>
<li>"Sou cirurgião e preciso explicar colecistectomia para um paciente leigo."</li>
</ul>
<h3>(T) Tarefa — O que exatamente você quer</h3>
<p>A instrução direta — o verbo de ação. Use verbos específicos: <em>resuma, compare, elabore, critique, liste, explique, traduza, reescreva, classifique, crie</em>.</p>
<ul>
<li>"Resuma os principais pontos em até 5 tópicos, focando nas implicações clínicas."</li>
<li>"Crie 10 questões de múltipla escolha no estilo das provas de título da SBA."</li>
</ul>
<h3>(F) Formato — Como a resposta deve ser apresentada</h3>
<p>Sem especificação de formato, a IA entregará texto corrido. Definir o formato transforma uma boa resposta em uma resposta <em>utilizável</em>.</p>
<ul>
<li>"Apresente em tabela com três colunas: Fármaco, Mecanismo de Ação e Indicação."</li>
<li>"Formato: flashcard. Frente: conceito. Verso: definição em até duas linhas."</li>
</ul>
    `,
  },
  {
    id: "construindo-prompt-pctf",
    title: "2. Construindo o Prompt PCTF: Do Fraco ao Profissional",
    content: `
<p><strong>Situação:</strong> Um anestesiologista precisa preparar uma apresentação de 6 minutos sobre anestesia neuroaxial para um congresso da SBA.</p>
<p><strong>Prompt sem estrutura:</strong></p>
<blockquote><p>"Me ajude a criar uma apresentação sobre anestesia."</p></blockquote>
<p><strong>Adicionando Persona (P):</strong></p>
<blockquote><p>"Atue como um anestesiologista sênior da SBA, com experiência em anestesia neuroaxial e apresentações em congressos."</p></blockquote>
<p><strong>Adicionando Contexto (C):</strong></p>
<blockquote><p>"Estou concluindo minha formação e vou apresentar um caso de raquianestesia com hipotensão refratária no Congresso Brasileiro de Anestesiologia. Tempo: 6 minutos. Público: especialistas."</p></blockquote>
<p><strong>Adicionando Tarefa (T):</strong></p>
<blockquote><p>"Elabore um roteiro cobrindo: 1) abertura impactante nos primeiros 30 segundos, 2) caso clínico conciso, 3) discussão dos 2 pontos de decisão mais críticos, 4) take-home message final."</p></blockquote>
<p><strong>Adicionando Formato (F):</strong></p>
<blockquote><p>"Apresente em tabela com três colunas: 'Seção', 'Tópicos Principais' e 'Tempo Estimado'."</p></blockquote>
<p>A diferença entre o prompt inicial e o PCTF completo não é incremental — é <strong>transformacional</strong>.</p>
    `,
  },
  {
    id: "tags-xml",
    title: "3. Tags XML: Organizando o Prompt por Dentro",
    content: `
<p>O PCTF resolve <em>o que</em> colocar no prompt. Mas quando o prompt cresce — com contexto longo e dados para processar — surge um novo problema: <strong>como separar cada parte para que a IA não as confunda?</strong></p>
<p>A resposta são as <strong>Tags XML</strong>. No contexto da Engenharia de Prompt, as tags funcionam como divisórias que dizem ao modelo: <em>"este bloco é o contexto, aquele é a tarefa, e este é o documento a analisar."</em></p>
<p>A documentação oficial da Anthropic recomenda explicitamente o uso de tags XML, especialmente em prompts com múltiplos componentes.</p>
<blockquote>
<p><strong>Analogia médica:</strong> Imagine um prontuário sem seções definidas — anamnese, exame físico, hipótese e prescrição tudo misturado. As tags XML fazem com o prompt o que as seções fazem com o prontuário.</p>
</blockquote>
<h3>Tags úteis para uso profissional</h3>
<table>
<thead><tr><th>Tag</th><th>Uso</th></tr></thead>
<tbody>
<tr><td><code>&lt;persona&gt;</code></td><td>Define o papel da IA</td></tr>
<tr><td><code>&lt;contexto&gt;</code></td><td>Informações de fundo</td></tr>
<tr><td><code>&lt;documento&gt;</code></td><td>Texto a ser analisado</td></tr>
<tr><td><code>&lt;tarefa&gt;</code></td><td>Instrução principal</td></tr>
<tr><td><code>&lt;formato&gt;</code></td><td>Especificação de formato</td></tr>
<tr><td><code>&lt;exemplo&gt;</code></td><td>Modelo de referência</td></tr>
<tr><td><code>&lt;restricoes&gt;</code></td><td>O que a IA deve evitar</td></tr>
</tbody>
</table>
    `,
  },
  {
    id: "prefill",
    title: "4. Prefill: Guiando a Resposta desde o Início",
    content: `
<p>O <strong>Prefill</strong> consiste em <em>começar a resposta da IA por você</em>, forçando o modelo a continuar a partir de onde você parou.</p>
<p>Na prática, você pode simular o prefill usando uma instrução explícita:</p>
<ul>
<li>"Comece sua resposta com: '## Resumo Estruturado'"</li>
<li>"Inicie diretamente com a tabela, sem introdução."</li>
<li>"Sua primeira linha deve ser: 'Diagnósticos diferenciais a considerar:'"</li>
</ul>
<h3>Por que isso é poderoso?</h3>
<p>Sem prefill, a IA frequentemente adiciona introduções desnecessárias, repetições da sua pergunta ou disclaimers genéricos. O prefill elimina esse ruído e força o modelo a ir direto ao ponto.</p>
<h3>Quando usar Prefill</h3>
<ul>
<li>Quer garantir um formato específico de saída</li>
<li>Está montando um fluxo de produção repetível</li>
<li>Precisa integrar a resposta diretamente em outro documento</li>
<li>Quer eliminar introduções desnecessárias</li>
</ul>
    `,
  },
  {
    id: "instrucao-final",
    title: "5. Instrução no Final para Contextos Longos",
    content: `
<p>Técnica simples mas contraintuitiva, recomendada pelo Google em sua documentação oficial para o Gemini.</p>
<p>Quando o contexto é muito longo — um artigo completo, uma diretriz clínica — colocar a instrução <strong>no final</strong> melhora o desempenho do modelo.</p>
<h3>Por que funciona?</h3>
<p>LLMs processam texto sequencialmente, mas sua "atenção" tende a ser maior nas partes mais recentes. Colocar a instrução depois do material garante que ela esteja "fresca" na atenção do modelo.</p>
<blockquote>
<p><strong>Analogia:</strong> É como uma reunião médica. Se você expõe um caso por 10 minutos e depois faz a pergunta, todos respondem com o caso vívido na memória.</p>
</blockquote>
<h3>Estrutura recomendada</h3>
<p>Coloque o documento primeiro com <code>&lt;documento&gt;</code>, depois a <code>&lt;tarefa&gt;</code> com a frase âncora "Com base no documento acima", e por fim o <code>&lt;formato&gt;</code>.</p>
    `,
  },
  {
    id: "integrando-tudo-cap2",
    title: "6. Integrando Tudo: O Prompt Profissional Completo",
    content: `
<p>Um prompt de nível profissional utiliza: Persona (P), Contexto (C), Tags XML para separar componentes, documento antes da tarefa, Tarefa detalhada (T), Formato especificado (F).</p>
<h3>Comparação</h3>
<table>
<thead><tr><th>Situação</th><th>Prompt Fraco</th><th>Prompt com Estrutura PCTF + XML</th></tr></thead>
<tbody>
<tr><td>Estudar para prova</td><td>"Explique cetoacidose diabética."</td><td>Persona professor SBA + Contexto residente + Tarefa com foco + Formato tópicos + tabela</td></tr>
<tr><td>Resumir artigo</td><td>"Resuma este artigo."</td><td>Documento primeiro, instrução depois com anchor context, formato, prefill</td></tr>
<tr><td>Criar questões</td><td>"Faça questões sobre anestesia."</td><td>Persona examinador + Contexto prova de título + Tarefa 5 questões + Formato ABCDE + gabarito</td></tr>
<tr><td>Caso clínico</td><td>"O que você acha deste caso?"</td><td>Documento caso + Tarefa diagnóstico diferencial + Formato tabela com critérios</td></tr>
</tbody>
</table>
    `,
  },
  {
    id: "exercicios-cap2",
    title: "Exercícios de Fixação",
    content: `
<h3>Questão 1 — Identificação de componentes</h3>
<p>Qual componente do PCTF está faltando?</p>
<blockquote><p>"Atue como anestesiologista pediátrico. Estou preparando aula sobre sedação para crianças de 2-5 anos para a equipe de enfermagem. Explique os principais fármacos, doses e efeitos adversos."</p></blockquote>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>Falta o <strong>(F) Formato</strong>. Sugestão: "Apresente em tabela com quatro colunas: Fármaco, Dose por Peso, Via de Administração e Principal Efeito Adverso."</p>
</details>
<h3>Questão 2 — Múltipla escolha sobre Tags XML</h3>
<p>Assinale a alternativa CORRETA:</p>
<p>(a) Só funcionam no ChatGPT<br>(b) São recomendadas para todos os prompts<br>(c) Ajudam o modelo a distinguir componentes, especialmente em prompts longos<br>(d) Existe lista oficial fechada de tags obrigatórias<br>(e) Substituem o Framework PCTF</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(c)</strong> — Tags XML são ferramentas de estruturação compatíveis com os principais modelos, especialmente documentadas no Claude.</p>
</details>
<h3>Questão 3 — Prefill</h3>
<p>Escreva uma instrução de prefill para análise de choque anafilático sem introdução.</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>"Comece sua resposta com '## Análise do Caso — Choque Anafilático', sem introdução. Organize em: (1) Diagnóstico e Critérios, (2) Manejo Imediato, (3) Condutas de Segunda Linha."</p>
</details>
<h3>Questão 4 — Verdadeiro ou Falso</h3>
<ol>
<li>Em prompts longos, coloque a instrução antes do documento. <strong>Falso</strong> — A instrução ao final garante frescor na atenção do modelo.</li>
<li>"Com base no documento acima" funciona como anchor context. <strong>Verdadeiro</strong>.</li>
<li>O PCTF é hierarquia rígida e obrigatória. <strong>Falso</strong> — É um mnemônico flexível.</li>
<li>O Prefill permite controlar o início da resposta. <strong>Verdadeiro</strong>.</li>
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
<p>Nos dois capítulos anteriores, você aprendeu a construir prompts com clareza, estrutura e as ferramentas certas. São fundamentos essenciais — mas têm um limite.</p>
<p>Existe uma categoria de problemas que instruções verbais não resolvem completamente: <strong>quando o padrão que você quer é difícil de descrever, mas fácil de mostrar.</strong></p>
<p>Você já viveu isso na medicina. Explique para um residente o que é um "bom resumo de alta". Mas se você simplesmente mostrar dois exemplos e disser "quero nesse padrão", ele entende imediatamente.</p>
<p>A IA funciona da mesma forma. E a técnica que aproveita isso se chama <strong>Few-Shot Prompting</strong>.</p>
    `,
  },
  {
    id: "in-context-learning",
    title: "1. In-Context Learning: O Fenômeno por Trás da Técnica",
    content: `
<p>O <strong>In-Context Learning (ICL)</strong> foi descrito por Brown et al. em 2020, no artigo <em>"Language Models are Few-Shot Learners"</em>. A descoberta: modelos de linguagem grandes conseguem "aprender" a executar uma tarefa nova a partir de exemplos fornecidos no próprio prompt, <strong>sem nenhuma atualização nos parâmetros internos</strong>.</p>
<blockquote>
<p><strong>Analogia médica:</strong> <strong>Preceptor 1</strong> — instrução verbal detalhada sobre resumo de alta. <strong>Preceptor 2</strong> — mostra dois resumos exemplares e diz "escreva o próximo nesse padrão". O segundo transmite muito mais informação, mais eficientemente.</p>
</blockquote>
<h3>O que o modelo aprende com exemplos?</h3>
<ul>
<li>O <strong>formato</strong> da resposta desejada</li>
<li>O <strong>tom</strong> e <strong>estilo</strong> de escrita</li>
<li>O <strong>nível de detalhe</strong> esperado</li>
<li>O <strong>padrão de raciocínio</strong> a seguir</li>
<li>As <strong>convenções específicas</strong> do domínio</li>
</ul>
    `,
  },
  {
    id: "espectro-icl",
    title: "2. Zero-Shot, One-Shot e Few-Shot",
    content: `
<h3>Zero-Shot: Sem exemplos</h3>
<p>Apenas descrição da tarefa. Funciona para tarefas simples e bem definidas.</p>
<h3>One-Shot: Um único exemplo</h3>
<p>Com um exemplo, o modelo entende o padrão de resposta. Resultado mais consistente.</p>
<h3>Few-Shot: Múltiplos exemplos (2-5)</h3>
<p>O ponto de maior equilíbrio entre esforço de construção e qualidade do resultado.</p>
<h3>Comparação prática</h3>
<table>
<thead><tr><th>Modalidade</th><th>Exemplos</th><th>Resultado</th><th>Melhor para</th></tr></thead>
<tbody>
<tr><td>Zero-Shot</td><td>0</td><td>Variável</td><td>Exploração, tarefas simples</td></tr>
<tr><td>One-Shot</td><td>1</td><td>Mais consistente</td><td>Padrões simples</td></tr>
<tr><td>Few-Shot</td><td>2–5</td><td>Alta consistência</td><td>Tarefas repetitivas, padrões complexos</td></tr>
</tbody>
</table>
    `,
  },
  {
    id: "construir-exemplos",
    title: "3. Como Construir Exemplos Eficazes",
    content: `
<p>O Prompt Report (Schulhoff et al., 2024) identifica seis decisões de design:</p>
<h3>1. Quantidade: 2 a 5 exemplos</h3>
<p>Menos de 2 raramente basta para padrões complexos. Mais de 6 consome espaço sem ganho proporcional.</p>
<h3>2. Qualidade: exemplos exemplares</h3>
<p>Use seus melhores trabalhos — não os adequados, os excelentes.</p>
<h3>3. Representatividade: cubra a diversidade</h3>
<p>Para classificações, inclua exemplos de diferentes categorias.</p>
<h3>4. Formato: absolutamente consistente</h3>
<p>O formato dos exemplos deve ser idêntico em todos eles.</p>
<h3>5. Ordem: o último exemplo tem mais peso</h3>
<p>Modelos dão mais atenção às partes mais recentes. Coloque o melhor exemplo por último.</p>
<h3>6. Relevância: exemplos similares à tarefa real</h3>
<p>Os melhores exemplos são os mais similares ao caso que você vai apresentar.</p>
    `,
  },
  {
    id: "formato-few-shot",
    title: "4. O Formato do Prompt Few-Shot",
    content: `
<p>Estrutura padrão que combina PCTF + Tags XML + exemplos:</p>
<ol>
<li><code>&lt;persona&gt;</code> — Define o papel da IA</li>
<li><code>&lt;contexto&gt;</code> — Contexto da situação</li>
<li><code>&lt;instrucao&gt;</code> — Explique a tarefa e instrua a seguir o padrão dos exemplos</li>
<li><code>&lt;exemplos&gt;</code> — Bloco com 2-5 exemplos no formato Entrada/Saída</li>
<li><code>&lt;tarefa&gt;</code> — O caso real com "Saída:" em aberto para o modelo completar</li>
</ol>
<p>A tag <code>&lt;exemplos&gt;</code> isola os exemplos do restante, deixando claro que são referências de padrão — não dados a processar.</p>
    `,
  },
  {
    id: "aplicacoes-praticas-cap3",
    title: "5. Aplicações Práticas",
    content: `
<h3>Aplicação 1: Classificação de Estado Físico ASA</h3>
<p>Cenário ideal para Few-Shot: classificar muitos pacientes no mesmo padrão. Forneça 3-4 exemplos cobrindo ASA I, II, III e V, e o modelo replica com precisão consistente.</p>
<h3>Aplicação 2: Geração de Flashcards Padronizados</h3>
<p>Uma das aplicações mais poderosas e escaláveis. Crie 3 flashcards exemplares (FRENTE: pergunta direta / VERSO: resposta objetiva em bullets), e o modelo gera dezenas no mesmo padrão.</p>
<h3>Aplicação 3: Questões de Múltipla Escolha no Padrão SBA</h3>
<p>Criar questões no padrão exato de uma prova é difícil sem exemplos — e trivial com Few-Shot. Forneça 1-2 questões exemplares com enunciado clínico, 5 alternativas e gabarito comentado.</p>
    `,
  },
  {
    id: "limites-few-shot",
    title: "6. Quando Few-Shot Não é a Solução",
    content: `
<p><strong>Few-Shot funciona bem para:</strong> tarefas com padrão de saída definido, classificações, geração de conteúdo repetitivo em formato específico.</p>
<p><strong>Few-Shot não resolve:</strong> problemas que exigem raciocínio passo a passo complexo (para isso existe Chain-of-Thought, próximo capítulo), situações onde o padrão é difícil de exemplificar, ou tarefas que requerem conhecimento atualizado (para isso existe RAG).</p>
<h3>Few-Shot vs. Fine-Tuning</h3>
<p>No Few-Shot, exemplos vivem no prompt — fornecidos a cada interação. No Fine-Tuning, você treina o modelo com centenas de exemplos, modificando parâmetros permanentemente.</p>
<p>Para a maioria dos profissionais, <strong>Few-Shot é a ferramenta certa</strong>: não exige infraestrutura de treinamento nem conhecimento de ML, e produz resultados excelentes para tarefas repetitivas.</p>
    `,
  },
  {
    id: "exercicios-cap3",
    title: "Exercícios de Fixação",
    content: `
<h3>Questão 1 — Conceito central</h3>
<p>O que é In-Context Learning (ICL) e por que foi surpreendente? Explique em até 5 linhas com analogia médica.</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>ICL é a capacidade de modelos grandes de aprender uma tarefa nova a partir de exemplos no prompt, sem retreinamento. Surpreendente porque antes se esperava reprogramação para cada tarefa. Analogia: residente que, ao ver exemplos do preceptor, replica o padrão — sem instrução verbal explícita.</p>
</details>
<h3>Questão 2 — Escolha de modalidade</h3>
<p>Para cada situação, indique Zero-Shot, One-Shot ou Few-Shot:</p>
<p>(a) Explicar pressão de perfusão coronariana<br>(b) Gerar 50 flashcards no seu formato pessoal<br>(c) Classificar ASA de 30 pacientes<br>(d) Dose de manutenção do remifentanil</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>(a) Zero-Shot — explicação conceitual. (b) Few-Shot — replicar padrão pessoal. (c) Few-Shot — classificação repetitiva. (d) Zero-Shot — pergunta factual direta.</p>
</details>
<h3>Questão 3 — Múltipla escolha</h3>
<p>Sobre boas práticas, assinale a INCORRETA:</p>
<p>(a) Formato consistente<br>(b) Último exemplo tem maior influência<br>(c) Incluir exemplos apenas das categorias mais comuns<br>(d) Exemplos de alta qualidade<br>(e) 2 a 5 exemplos é o equilíbrio ideal</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(c)</strong> — INCORRETA. Os exemplos devem cobrir a diversidade das categorias possíveis.</p>
</details>
<h3>Questão 4 — Análise crítica</h3>
<p>Um colega diz: "Uso Few-Shot sempre. Coloco 10 exemplos em todo prompt." Analise.</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>Acerta em valorizar exemplos, mas 10 em todo prompt é problemático: (1) consomem 30-50% da janela de contexto, (2) redundantes para tarefas simples, (3) nem toda tarefa exige exemplos. Equilibre: Zero-Shot para simples, 2-3 para padrões definidos, 4-6 para classificações complexas.</p>
</details>
    `,
  },
];

// ─── Capítulo 4 ──────────────────────────────────────────

const CAP4_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap4",
    title: "Introdução",
    content: `
<p>No capítulo anterior, você aprendeu a ensinar pelo exemplo: mostrar à IA o formato, o padrão e o estilo que você quer. O Few-Shot Prompting é poderoso para tarefas com padrão definido.</p>
<p>Mas existe uma categoria de problemas que exemplos sozinhos não resolvem: <strong>problemas que exigem raciocínio</strong>. Quando você precisa que a IA não apenas replique um padrão, mas genuinamente <em>pense</em> sobre um problema — construa um diagnóstico diferencial, analise variáveis interdependentes, avalie hipóteses com base em evidências — o Few-Shot não é suficiente.</p>
<p>Para esses problemas, você precisa ensinar a IA a <strong>raciocinar em voz alta</strong>. E a técnica que faz isso se chama <strong>Chain-of-Thought Prompting</strong>.</p>
    `,
  },
  {
    id: "por-que-raciocinio-importa",
    title: "1. Por Que o Raciocínio Importa",
    content: `
<p>Quando um médico apresenta um caso clínico na reunião de equipe, ninguém aceita "o diagnóstico é X" como resposta adequada. O que se espera é o <strong>raciocínio</strong> que leva à conclusão: quais dados foram considerados, quais hipóteses foram levantadas, por que uma foi priorizada sobre as outras.</p>
<p>Sem raciocínio explícito, a conclusão é <strong>inauditável</strong>. Você não sabe se o médico considerou os diferenciais importantes, se descartou alternativas com critério, ou se chegou ao lugar certo pelos motivos errados.</p>
<p>A IA funciona da mesma forma. Quando responde diretamente — sem mostrar como chegou ali — ela está gerando a resposta mais provável com base em padrões de treinamento. Para tarefas simples, isso funciona. Para raciocínio complexo, é arriscado.</p>
<p>O Chain-of-Thought resolve esse problema forçando o modelo a <strong>externalizar seu raciocínio</strong> antes de concluir — tornando cada etapa visível, verificável e corrigível.</p>
    `,
  },
  {
    id: "chain-of-thought",
    title: "2. Chain-of-Thought Prompting (CoT)",
    content: `
<p>O <strong>Chain-of-Thought (CoT)</strong> foi introduzido por Wei et al. (2022) no paper <em>"Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"</em>. A ideia central: ao instruir o modelo a mostrar o raciocínio intermediário antes da resposta final, a qualidade do raciocínio melhora significativamente.</p>

<h3>Forma 1 — Zero-Shot CoT: "Pense passo a passo"</h3>
<p>A descoberta surpreendente de Kojima et al. (2022): basta adicionar <em>"Pense passo a passo"</em> ao final do prompt para ativar capacidades de raciocínio latentes no modelo — sem nenhum exemplo necessário.</p>
<p>Em vez de: "Qual a dose de propofol para este paciente?"</p>
<p>Use: "Qual a dose de propofol para este paciente? <strong>Raciocine passo a passo antes de concluir.</strong>"</p>

<h3>Forma 2 — Few-Shot CoT: Ensinando o Raciocínio por Exemplos</h3>
<p>Combine Few-Shot com CoT: forneça exemplos que mostram não apenas a resposta, mas <strong>o processo de raciocínio completo</strong> que leva até ela. O modelo aprende a replicar não apenas o formato, mas o <em>modo de pensar</em>.</p>

<h3>Forma 3 — CoT Guiado: Definindo o Roteiro de Raciocínio</h3>
<p>Você define explicitamente as etapas obrigatórias do raciocínio. É o CoT mais controlado e consistente — ideal quando existe um protocolo ou framework que deve ser seguido.</p>
<p>Exemplo para caso clínico:</p>
<blockquote>
<p>"Analise o caso seguindo obrigatoriamente estas etapas:<br>
1. Identifique a síndrome clínica predominante<br>
2. Liste os 3 diagnósticos diferenciais mais prováveis<br>
3. Para cada hipótese, liste argumentos a favor e contra<br>
4. Defina quais exames são prioritários e por quê<br>
5. Apresente sua conclusão com o diagnóstico mais provável e a conduta inicial"</p>
</blockquote>
    `,
  },
  {
    id: "self-consistency",
    title: "3. Self-Consistency: Validação por Múltiplos Caminhos",
    content: `
<p>A <strong>Self-Consistency</strong> (Wang et al., 2022) parte de uma pergunta simples: se um problema tem uma resposta correta, <strong>múltiplos raciocínios independentes devem convergir para ela</strong>.</p>
<p>A técnica: em vez de gerar uma única cadeia de raciocínio, você instrui o modelo a gerar <strong>múltiplos caminhos de raciocínio</strong> para o mesmo problema. Depois, avalia onde convergem e onde divergem.</p>

<blockquote>
<p><strong>Analogia médica:</strong> É como pedir a opinião de três especialistas independentes. Se os três concordam, sua confiança é alta. Se dois concordam e um discorda, você investiga a divergência. Se os três discordam, o problema é mais ambíguo do que parecia.</p>
</blockquote>

<h3>Como implementar</h3>
<blockquote>
<p>"Para o caso abaixo, gere <strong>3 raciocínios independentes</strong>, cada um chegando à sua própria conclusão por um caminho diferente. Depois, compare os três e identifique: (a) onde convergem, (b) onde divergem, (c) qual conclusão é mais robusta e por quê."</p>
</blockquote>

<h3>Quando usar Self-Consistency</h3>
<ul>
<li>Decisões de alto impacto com ambiguidade real</li>
<li>Diagnósticos diferenciais com múltiplas hipóteses plausíveis</li>
<li>Análises estratégicas onde não existe resposta objetivamente correta</li>
<li>Quando você precisa de um <strong>indicador de confiança</strong> sobre a conclusão</li>
</ul>
    `,
  },
  {
    id: "tree-of-thoughts",
    title: "4. Tree of Thoughts: Explorando Múltiplos Caminhos",
    content: `
<p>O <strong>Tree of Thoughts (ToT)</strong> (Yao et al., 2023) leva a ideia de exploração de caminhos ao extremo: em vez de gerar caminhos completos e comparar ao final, ele explora <strong>ramificações em cada etapa</strong> do raciocínio.</p>
<p>Imagine um tabuleiro de xadrez. Um jogador iniciante pensa: "vou mover essa peça." Um mestre não pensa assim — ele considera 3 possíveis movimentos, para cada um imagina 3 respostas do oponente, para cada resposta imagina 3 contra-ataques... e só então escolhe o melhor caminho.</p>

<h3>Como implementar</h3>
<blockquote>
<p>"Para o problema abaixo, use Tree of Thoughts:<br>
1. Identifique 3 hipóteses iniciais<br>
2. Para cada hipótese, desenvolva o raciocínio por 2-3 passos<br>
3. Avalie qual caminho é mais promissor com base nos dados disponíveis<br>
4. Abandone os caminhos menos promissores e aprofunde o melhor<br>
5. Apresente a conclusão final com a justificativa do caminho escolhido"</p>
</blockquote>

<p>O ToT é a técnica mais sofisticada — e a mais custosa em tokens. Reserve para problemas genuinamente complexos onde a exploração sistemática de hipóteses agrega valor real.</p>
    `,
  },
  {
    id: "extended-thinking",
    title: "5. Extended Thinking: O CoT que Acontece por Dentro",
    content: `
<p>As técnicas anteriores — CoT, Self-Consistency, ToT — são implementadas por você, no prompt, de forma explícita. Mas os modelos mais modernos implementaram uma versão interna dessas capacidades.</p>
<p>A Anthropic chama isso de <strong>Extended Thinking</strong> — uma funcionalidade onde o Claude raciocina internamente antes de responder, considerando múltiplas possibilidades, revisando premissas e autocriticando conclusões parciais. Os modelos o1 e o3 da OpenAI implementam o mesmo conceito sob o nome de <em>reasoning models</em>.</p>

<blockquote>
<p><strong>Analogia:</strong> Imagine a diferença entre um médico que atende às pressas e dá uma resposta imediata, e um que pede 5 minutos, revisa o prontuário, considera os diferenciais internamente — e só então responde. O resultado do segundo é qualitativamente diferente.</p>
</blockquote>

<h3>Quando usar</h3>
<ul>
<li>Problemas com múltiplas etapas interdependentes</li>
<li>Margem pequena para erro</li>
<li>Problemas com nuances que soluções diretas frequentemente perdem</li>
<li>Quando você precisa de raciocínio de alta qualidade sem estruturar o prompt em 5 níveis</li>
</ul>
<p>Para tarefas simples — resumos, flashcards, respostas factuais — o Extended Thinking não é necessário e apenas aumenta o tempo de resposta.</p>
    `,
  },
  {
    id: "guia-pratico-cap4",
    title: "6. Guia Prático: Qual Técnica Usar",
    content: `
<table>
<thead><tr><th>Situação</th><th>Abordagem recomendada</th></tr></thead>
<tbody>
<tr><td>Pergunta factual simples</td><td>Nenhum CoT necessário</td></tr>
<tr><td>Raciocínio com 2-3 passos diretos</td><td>Zero-Shot CoT ("pense passo a passo")</td></tr>
<tr><td>Raciocínio complexo sem protocolo fixo</td><td>Zero-Shot CoT elaborado</td></tr>
<tr><td>Você quer que a IA raciocine como você</td><td>Few-Shot CoT</td></tr>
<tr><td>Protocolo clínico ou framework específico</td><td>CoT Guiado (etapas obrigatórias)</td></tr>
<tr><td>Decisão de alto impacto com ambiguidade</td><td>Self-Consistency (múltiplos caminhos)</td></tr>
<tr><td>Múltiplas hipóteses a explorar</td><td>Tree of Thoughts</td></tr>
<tr><td>Problema muito complexo, sem estruturar prompt</td><td>Extended Thinking ativado</td></tr>
</tbody>
</table>

<blockquote>
<p><strong>Nota sobre custo:</strong> CoT, Self-Consistency e ToT aumentam o volume de texto gerado — mais tempo e mais tokens. Use quando o raciocínio de qualidade é o que importa. Para flashcards, resumos ou perguntas factuais, elas adicionam fricção sem benefício.</p>
</blockquote>
    `,
  },
  {
    id: "exercicios-cap4",
    title: "Exercícios de Fixação",
    content: `
<h3>Questão 1</h3>
<p>Usando a analogia da apresentação de caso clínico, explique por que o Chain-of-Thought resolve o problema de respostas diretas sem justificativa.</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>Na apresentação de caso, ninguém aceita "o diagnóstico é X" sem raciocínio. O que importa é o caminho que leva à conclusão. A IA funciona igual: respostas diretas são inauditáveis. O CoT força o modelo a externalizar cada etapa, tornando o raciocínio visível, verificável e corrigível. A orientação: adicionar "Raciocine passo a passo antes de concluir" ou usar CoT Guiado com etapas obrigatórias.</p>
</details>

<h3>Questão 2 — Escolha da técnica</h3>
<p>Indique a técnica mais adequada e justifique:</p>
<p>(a) Analisar choque circulatório seguindo o algoritmo ACLS<br>
(b) Decidir se aceita proposta de sociedade em clínica<br>
(c) Classificar prontuários no seu padrão pessoal<br>
(d) Explorar interpretações de cláusula contratual ambígua<br>
(e) Saber o mecanismo de ação do sugamadex</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>(a) <strong>CoT Guiado</strong> — ACLS é protocolo com sequência obrigatória. (b) <strong>Self-Consistency</strong> — decisão de alto impacto, múltiplas variáveis, sem resposta objetiva. (c) <strong>Few-Shot CoT</strong> — replicar seu método pessoal de classificação. (d) <strong>Tree of Thoughts</strong> — explorar múltiplas interpretações sistematicamente. (e) <strong>Nenhum CoT</strong> — pergunta factual direta.</p>
</details>

<h3>Questão 3 — Múltipla escolha</h3>
<p>Sobre CoT, assinale a INCORRETA:</p>
<p>(a) Wei et al. (2022) demonstraram ganhos em raciocínio matemático e lógico<br>
(b) Kojima et al. (2022) mostraram que "Pense passo a passo" é suficiente sem exemplos<br>
(c) O CoT deve ser usado em todos os prompts para garantir sempre a melhor resposta<br>
(d) Few-Shot CoT mostra o processo de raciocínio, não apenas a resposta<br>
(e) O CoT torna o raciocínio auditável</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(c)</strong> — INCORRETA. O CoT tem custo real (mais tokens, mais tempo). Para tarefas simples não agrega valor. Use quando o raciocínio determina a qualidade da resposta.</p>
</details>

<h3>Questão 4 — Self-Consistency vs Tree of Thoughts</h3>
<p>Um gestor de hospital precisa decidir entre expandir o centro cirúrgico ou investir em telemedicina. Qual técnica usar e por quê?</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>Self-Consistency</strong> é mais adequada: decisão binária de alto impacto onde múltiplos raciocínios independentes (perspectiva financeira, operacional, de mercado) podem convergir ou divergir, indicando o nível de confiança. ToT seria útil se houvesse mais de duas opções a explorar em profundidade.</p>
</details>
    `,
  },
];

// ─── Capítulo 5 ──────────────────────────────────────────

const CAP5_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap5",
    title: "Introdução",
    content: `
<p>No capítulo anterior, você aprendeu a fazer a IA raciocinar: o <em>Chain-of-Thought</em> torna os passos intermediários visíveis, a <em>Self-Consistency</em> valida conclusões por múltiplos caminhos, e o <em>Tree of Thoughts</em> permite explorar hipóteses em paralelo. Todas essas técnicas atuam <em>durante</em> o raciocínio.</p>
<p>Este capítulo apresenta uma família diferente de técnicas. Elas não atuam durante o raciocínio — atuam <strong>antes</strong>. São técnicas de <strong>preparação</strong>: formas de garantir que, quando o modelo começar a raciocinar, ele já esteja com o mapa certo na mão, o plano estruturado e o conhecimento relevante ativado.</p>

<blockquote>
<p><strong>Analogia cirúrgica:</strong> Um cirurgião experiente não entra na sala e começa a cortar. Ele revisa a anatomia, lê o prontuário, discute o plano com a equipe, verifica os instrumentos. O desempenho dentro da sala é diretamente proporcional à qualidade da preparação fora dela.</p>
</blockquote>

<p>As três técnicas: <strong>Step-Back Prompting</strong> (ativar conhecimento de fundo), <strong>Plan-and-Solve</strong> (compreender e planejar antes de executar) e <strong>Generated Knowledge</strong> (gerar conhecimento relevante antes de responder).</p>
    `,
  },
  {
    id: "step-back-prompting",
    title: "1. Step-Back Prompting: O Passo Atrás que Leva Mais Longe",
    content: `
<p>Descrito no Guia de Prompt Engineering do Google (2025), o <strong>Step-Back Prompting</strong> consiste em instruir o modelo a primeiro responder uma <strong>pergunta mais geral</strong> relacionada ao problema — ativando os princípios subjacentes — e só depois atacar o caso específico.</p>
<p>O mecanismo: ao considerar os princípios gerais antes do problema específico, o modelo utiliza muito mais do conhecimento que possui do que utilizaria indo direto ao caso.</p>

<blockquote>
<p><strong>Analogia médica:</strong> É como o clínico que, diante de um caso incomum, antes de decidir a conduta faz uma rápida revisão mental dos aspectos gerais da doença. Esse passo atrás aparentemente ineficiente é o que separa a resposta reflexa da resposta fundamentada.</p>
</blockquote>

<h3>Estrutura</h3>
<p><strong>Prompt 1 (passo atrás):</strong> "Quais são os princípios gerais que regem [tema amplo]?"</p>
<p><strong>Prompt 2 (caso específico):</strong> "Usando os princípios acima como base, responda agora: [problema original]."</p>
<p>Na prática moderna, dentro de uma única sessão, integre os dois passos:</p>
<blockquote>
<p>"Antes de responder o problema específico, dê um passo atrás e responda primeiro a pergunta geral: [PERGUNTA GERAL]. Usando essa base de princípios, responda agora: [PROBLEMA ESPECÍFICO]."</p>
</blockquote>

<h3>Quando usar</h3>
<p>O Step-Back agrega valor quando os princípios gerais são ricos o suficiente para mudar a qualidade da resposta: fisiopatologia complexa, questões jurídicas com princípios e jurisprudência, problemas estratégicos com frameworks aplicáveis.</p>
    `,
  },
  {
    id: "plan-and-solve",
    title: "2. Plan-and-Solve: Compreender Antes de Executar",
    content: `
<p>O <strong>Plan-and-Solve</strong> (Wang et al., 2023), descrito no Prompt Report como melhoria do Zero-Shot CoT, resolve o problema de pedir execução direta de algo que requer compreensão profunda antes.</p>
<p>A instrução específica:</p>
<blockquote>
<p><em>"Vamos primeiro entender o problema e criar um plano para resolvê-lo. Em seguida, vamos executar o plano e resolver o problema passo a passo."</em></p>
</blockquote>
<p>Essa instrução de duas fases — <strong>compreender + planejar → executar</strong> — força o modelo a desacelerar, mapear o problema em sua totalidade e identificar os subproblemas antes de começar a responder.</p>

<blockquote>
<p><strong>Analogia médica:</strong> O briefing pré-operatório. Antes de qualquer cirurgia, a equipe revisa o caso, discute o plano, antecipa complicações e define papéis. Essa fase de planejamento é o que torna a execução mais fluida e segura.</p>
</blockquote>

<h3>Implementação estruturada</h3>
<p><strong>FASE 1 — COMPREENSÃO E PLANEJAMENTO:</strong></p>
<ul>
<li>(a) Identifique todos os elementos do problema</li>
<li>(b) Identifique os subproblemas ou etapas</li>
<li>(c) Defina a sequência lógica de resolução</li>
<li>(d) Aponte potenciais pontos de falha ou ambiguidades</li>
</ul>
<p><strong>FASE 2 — EXECUÇÃO:</strong> Seguindo o plano, resolva passo a passo.</p>

<h3>Diferença em relação ao CoT</h3>
<p>O CoT instrui o modelo a <em>mostrar o raciocínio enquanto resolve</em>. O Plan-and-Solve instrui a <em>entender o problema inteiro e criar um plano antes de resolver</em>. No CoT, o modelo descobre o caminho enquanto caminha; no Plan-and-Solve, ele primeiro olha o mapa, traça a rota, e só então começa a andar.</p>
    `,
  },
  {
    id: "generated-knowledge",
    title: "3. Generated Knowledge: Gerar o Conhecimento Antes de Usar",
    content: `
<p>O <strong>Generated Knowledge Prompting</strong> (Liu et al., 2022) é a técnica mais contraintuitiva das três: antes de pedir que o modelo responda à pergunta principal, instrua-o a <strong>gerar o conhecimento relevante</strong> sobre o tema — e então use esse conhecimento como contexto para a resposta final.</p>
<p>O fluxo:</p>
<ol>
<li><strong>Geração:</strong> "Gere 5 fatos relevantes sobre [tema]"</li>
<li><strong>Integração:</strong> o conhecimento gerado é inserido no contexto</li>
<li><strong>Resposta:</strong> "Usando o conhecimento acima, responda: [pergunta]"</li>
</ol>

<p>O modelo possui um enorme volume de conhecimento em seus parâmetros — mas nem todo é ativado automaticamente quando você faz uma pergunta direta. Ao gerar explicitamente o conhecimento antes, você ajuda o modelo a <em>trazer à superfície</em> o que já sabe.</p>

<blockquote>
<p><strong>Analogia médica:</strong> Antes de responder uma questão complexa, um candidato a concurso mentalmente organiza o que sabe — fisiopatologia, epidemiologia, quadro clínico, tratamento. Esse exercício de organização antes da resposta é exatamente o que o Generated Knowledge faz.</p>
</blockquote>

<h3>A variação verificável</h3>
<p>Uma versão mais rigorosa inclui autoverificação: para cada conceito gerado, indicar nível de certeza (alto/médio/baixo) e por quê. Usar apenas os de alta certeza como base firme, indicando onde há incerteza.</p>
    `,
  },
  {
    id: "comparacao-tecnicas-cap5",
    title: "4. As Três Técnicas em Perspectiva",
    content: `
<table>
<thead><tr><th>Técnica</th><th>Mecanismo central</th><th>Melhor para</th></tr></thead>
<tbody>
<tr><td>Step-Back</td><td>Ativa conhecimento de fundo via pergunta geral</td><td>Casos onde princípios gerais enriquecem a resposta específica</td></tr>
<tr><td>Plan-and-Solve</td><td>Mapeia o problema inteiro antes de executar</td><td>Problemas multi-etapas com subproblemas interdependentes</td></tr>
<tr><td>Generated Knowledge</td><td>Explicita o conhecimento relevante antes de aplicar</td><td>Temas ricos em conceitos onde contextualização melhora a resposta</td></tr>
</tbody>
</table>

<p><strong>Elas se combinam.</strong> Para um caso muito complexo, você pode usar Step-Back para ativar princípios gerais, Plan-and-Solve para mapear o problema, e Generated Knowledge para organizar o conhecimento específico. Essa combinação cria um prompt de preparação completo antes de qualquer execução.</p>
    `,
  },
  {
    id: "exercicios-cap5",
    title: "Exercícios de Fixação",
    content: `
<h3>Questão 1 — Conceito comparativo</h3>
<p>Explique a diferença entre Step-Back e Plan-and-Solve com uma analogia médica para cada.</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>Step-Back</strong> opera "para trás e para cima": antes do problema específico, ativa conhecimento de fundo. Analogia: internista que revisa fisiopatologia geral antes de decidir sobre caso raro. <strong>Plan-and-Solve</strong> opera "para frente antes de executar": mapeia o problema inteiro. Analogia: briefing pré-operatório — a equipe entende o caso, planeja a técnica, antecipa complicações antes de iniciar.</p>
</details>

<h3>Questão 2 — Identificação de técnica</h3>
<p>Qual técnica para cada situação?</p>
<p>(a) Paciente com sepse — múltiplas decisões interdependentes<br>
(b) Material educacional sobre TEP ficando raso<br>
(c) Análise de contrato sem considerar princípios gerais do direito contratual<br>
(d) Diagnóstico de gargalo em processo de admissão hospitalar</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>(a) <strong>Plan-and-Solve</strong> — decisões interdependentes exigem mapeamento completo. (b) <strong>Generated Knowledge</strong> — ativar conhecimento antes de elaborar o material. (c) <strong>Step-Back</strong> — ativar princípios gerais do direito contratual antes da análise específica. (d) <strong>Plan-and-Solve</strong> — problema com múltiplos aspectos interdependentes.</p>
</details>

<h3>Questão 3 — Múltipla escolha</h3>
<p>Sobre Generated Knowledge, assinale a CORRETA:</p>
<p>(a) É técnica de recuperação de informações externas, similar ao RAG<br>
(b) Substitui o Chain-of-Thought em raciocínio matemático<br>
(c) Ao gerar conhecimento explicitamente, ele pode ser verificado e corrigido antes de ser usado<br>
(d) Só funciona com modelos de grande porte<br>
(e) Sempre aumenta o risco de alucinações</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(c)</strong> — CORRETA. Ao externalizar o conhecimento em texto antes de usá-lo, ele se torna verificável. As demais são incorretas: (a) Generated Knowledge trabalha com conhecimento interno, não externo como RAG; (b) são técnicas complementares; (d) aplicável a qualquer modelo moderno; (e) tende a reduzir alucinações ao tornar o conhecimento verificável.</p>
</details>
    `,
  },
];

// ─── Capítulo 6 ──────────────────────────────────────────

const CAP6_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap6",
    title: "Introdução",
    content: `
<p>Nos capítulos anteriores, você aprendeu a fazer a IA raciocinar melhor (CoT, Self-Consistency, ToT) e a preparar o terreno antes de responder (Step-Back, Plan-and-Solve, Generated Knowledge). Todas essas técnicas operam dentro de um único prompt ou sessão de raciocínio.</p>
<p>Mas existe uma categoria de problema que nenhuma delas resolve adequadamente: tarefas que são <strong>longas demais, complexas demais</strong>, ou que dependem de etapas cujos resultados só podem ser conhecidos depois de executadas. Não é um problema de qualidade de raciocínio — é um problema de <strong>arquitetura</strong>.</p>

<blockquote>
<p><strong>Analogia:</strong> Pedir que a IA leia um artigo, extraia pontos-chave, resuma para leigos, crie questões e produza flashcards — tudo em um único prompt — é como pedir que um cirurgião faça anamnese, diagnóstico, planejamento, cirurgia e relatório simultaneamente. Cada etapa sai mediana porque a atenção está dividida.</p>
</blockquote>

<p>Este capítulo apresenta as duas técnicas que resolvem esse problema. O <strong>Prompt Chaining</strong> divide a tarefa em etapas sequenciais. O <strong>Least-to-Most Prompting</strong> decompõe problemas complexos em subproblemas resolvidos em ordem crescente de dificuldade.</p>
    `,
  },
  {
    id: "prompt-chaining",
    title: "1. Prompt Chaining: Dividir para Conquistar",
    content: `
<p>O <strong>Prompt Chaining</strong> — definido pelo Prompt Report (Schulhoff et al., 2024) e documentado pela Anthropic — é a técnica mais direta: quebrar uma tarefa grande em etapas menores, executar um prompt para cada, e usar o resultado de cada um como entrada do próximo.</p>
<p>O princípio é o mesmo da linha de montagem moderna. Um único operador tentando montar um carro inteiro produz resultados inferiores ao da linha com estações especializadas.</p>
<p>O Guia de Agentes da Anthropic (2025) é preciso: <em>"This workflow is ideal for situations where the task can be easily decomposed into fixed subtasks. The main goal is to trade off latency for higher accuracy."</em></p>

<h3>Estrutura de uma chain</h3>
<p>Pipeline linear:</p>
<p><strong>[Prompt 1]</strong> → Resultado 1 → <strong>[Prompt 2 + Resultado 1]</strong> → Resultado 2 → <strong>[Prompt 3 + Resultado 2]</strong> → Output Final</p>

<h3>Tipos de chain</h3>
<p><strong>Chain linear:</strong> cada etapa depende da anterior. Adequada para transformação progressiva (artigo → resumo → questões → flashcards).</p>
<p><strong>Chain com verificação (gate):</strong> entre etapas críticas, insira um prompt de verificação que valida o output antes de prosseguir. É o controle de qualidade embutido na linha de produção.</p>
    `,
  },
  {
    id: "exemplo-chaining",
    title: "2. Prompt Chaining na Prática",
    content: `
<h3>Exemplo: Transformar artigo em material de estudo</h3>

<p><strong>Etapa 1 — Extração dos pontos-chave:</strong></p>
<blockquote><p>"Leia o texto e extraia os 10 pontos mais relevantes clinicamente. Para cada ponto: (a) conceito central, (b) implicação clínica direta, (c) se contradiz ou confirma a prática padrão."</p></blockquote>

<p><strong>Etapa 2 — Resumo clínico</strong> (usando resultado da Etapa 1):</p>
<blockquote><p>"Com base nos pontos-chave extraídos, elabore um resumo de 400-500 palavras em linguagem clínica objetiva, adequado para revisão rápida antes de um plantão."</p></blockquote>

<p><strong>Etapa 3 — Questões de múltipla escolha</strong> (usando resultado da Etapa 2):</p>
<blockquote><p>"Com base no resumo, elabore 5 questões de múltipla escolha no formato de provas de residência. Cada questão deve testar compreensão, não memorização. Inclua gabarito comentado."</p></blockquote>

<p><strong>Etapa 4 — Flashcards</strong> (usando resultado da Etapa 2):</p>
<blockquote><p>"Transforme o resumo em 10 flashcards FRENTE/VERSO. Foco em pontos de maior probabilidade de queda em prova."</p></blockquote>

<h3>Boas práticas</h3>
<ul>
<li>Cada etapa deve ter um <strong>objetivo único e claramente delimitado</strong></li>
<li><strong>Verifique o resultado</strong> antes de passar para a próxima etapa</li>
<li>Forneça contexto suficiente — cole explicitamente o resultado anterior</li>
<li>Chains mais longas não são sempre melhores — adicione etapas apenas quando cada uma gera valor real</li>
</ul>
    `,
  },
  {
    id: "least-to-most",
    title: "3. Least-to-Most Prompting: Do Simples ao Complexo",
    content: `
<p>O <strong>Least-to-Most Prompting</strong> (Zhou et al., 2022) resolve um problema diferente do Chaining. Enquanto o Chaining divide uma tarefa <em>extensa</em> em etapas, o Least-to-Most divide um problema <em>complexo</em> nos subproblemas que o compõem — e os resolve em <strong>ordem crescente de dificuldade</strong>, usando cada solução como base para a próxima.</p>

<p>O mecanismo: primeiro, o modelo <strong>identifica os subproblemas</strong> sem resolver nenhum. Depois, resolve-os <strong>sequencialmente</strong>, incorporando cada resposta ao contexto antes de avançar.</p>

<blockquote>
<p><strong>Analogia:</strong> O currículo de residência médica. Você não aprende cirurgia cardíaca complexa sem antes dominar anatomia, fisiologia cardiovascular, técnica cirúrgica básica e cirurgia vascular. Cada nível apoia o próximo.</p>
</blockquote>

<h3>Estrutura</h3>
<p><strong>Fase 1 — Decomposição (sem resolver):</strong></p>
<blockquote><p>"Para responder a pergunta abaixo, primeiro identifique todos os subproblemas que precisam ser resolvidos, do mais simples ao mais complexo. Liste apenas os subproblemas — não os resolva ainda."</p></blockquote>

<p><strong>Fase 2 — Resolução sequencial:</strong></p>
<blockquote><p>"Agora resolva cada subproblema em sequência. Para cada um, apresente a solução completa antes de avançar. Use as respostas anteriores como base."</p></blockquote>
    `,
  },
  {
    id: "chaining-vs-least-to-most",
    title: "4. Chaining vs. Least-to-Most: Qual Usar?",
    content: `
<table>
<thead><tr><th>Critério</th><th>Prompt Chaining</th><th>Least-to-Most</th></tr></thead>
<tbody>
<tr><td>Natureza do problema</td><td>Tarefa extensa com etapas distintas</td><td>Problema complexo com subproblemas interdependentes</td></tr>
<tr><td>Estrutura</td><td>Pipeline de transformação</td><td>Pirâmide de dependências crescentes</td></tr>
<tr><td>Cada etapa</td><td>Produz um tipo diferente de output</td><td>Responde a uma parte do mesmo problema</td></tr>
<tr><td>Analogia</td><td>Linha de montagem</td><td>Currículo de residência médica</td></tr>
<tr><td>Melhor para</td><td>Produção de conteúdo em múltiplas formas</td><td>Análise de casos com múltiplas variáveis</td></tr>
</tbody>
</table>

<p>As duas técnicas se combinam naturalmente. Para casos muito complexos, use Least-to-Most para estruturar o raciocínio analítico dentro de uma etapa de um Prompt Chaining maior.</p>
    `,
  },
  {
    id: "tecnicas-perspectiva",
    title: "5. As Técnicas em Perspectiva",
    content: `
<p>Olhando os capítulos 4, 5 e 6 em conjunto, emerge uma família coerente:</p>
<ul>
<li><strong>CoT e variantes</strong> — tornam o raciocínio visível</li>
<li><strong>Step-Back, Plan-and-Solve, Generated Knowledge</strong> — preparam o terreno antes de raciocinar</li>
<li><strong>Prompt Chaining e Least-to-Most</strong> — resolvem o problema de escala</li>
</ul>
<p>O critério de escolha começa pela natureza do desafio:</p>
<ul>
<li>Resposta rasa ou incompleta? → Técnicas de raciocínio (CoT, ToT) ou preparação (Step-Back, Generated Knowledge)</li>
<li>Tarefa longa demais? → Decomposição (Chaining ou Least-to-Most)</li>
<li>Não sabe por onde começar? → Plan-and-Solve</li>
</ul>

<blockquote>
<p><strong>Na prática clínica:</strong> o diagnóstico precede a terapêutica. O mesmo vale aqui: diagnostique corretamente o problema que você quer resolver com o prompt — e a técnica certa se tornará óbvia.</p>
</blockquote>
    `,
  },
  {
    id: "exercicios-cap6",
    title: "Exercícios de Fixação",
    content: `
<h3>Questão 1</h3>
<p>Explique por que pedir uma tarefa longa em um único prompt tende a produzir resultados inferiores ao Prompt Chaining.</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>Quando um único prompt concentra múltiplas tarefas, o modelo divide sua atenção entre todos os objetivos concorrentes. Cada parte recebe menos profundidade. É análogo ao médico tentando fazer anamnese, exame físico, interpretar exames e prescrever em três minutos simultâneos. O Chaining garante atenção total para cada etapa.</p>
</details>

<h3>Questão 2 — Identificação</h3>
<p>Qual técnica para cada situação?</p>
<p>(a) Transformar diretrizes de antibioticoprofilaxia em: resumo + checklist + slides + questões<br>
(b) Analisar sepse neonatal com múltiplas variáveis interdependentes<br>
(c) Produzir estratégia completa para caso trabalhista: análise + estratégia + petição + checklist de provas</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>(a) <strong>Prompt Chaining</strong> — tipos diferentes de output do mesmo conteúdo. (b) <strong>Least-to-Most</strong> — subproblemas interdependentes em ordem crescente. (c) <strong>Ambas combinadas</strong> — Chaining para os diferentes documentos, Least-to-Most dentro da etapa de análise jurídica.</p>
</details>

<h3>Questão 3 — Múltipla escolha</h3>
<p>Sobre Least-to-Most, assinale a CORRETA:</p>
<p>(a) Equivalente ao CoT<br>
(b) A ordem de resolução é irrelevante<br>
(c) Começa identificando subproblemas sem resolver, depois resolve em ordem crescente<br>
(d) Só funciona para problemas matemáticos<br>
(e) É variação do Plan-and-Solve com outro nome</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(c)</strong> — CORRETA. O Least-to-Most tem dois momentos: identificação de todos os subproblemas, depois resolução sequencial em ordem crescente de complexidade, com cada resposta alimentando a próxima.</p>
</details>
    `,
  },
];

// ─── Capítulo 7 ──────────────────────────────────────────

const CAP7_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap7",
    title: "Introdução",
    content: `
<p>Existe uma crença implícita em quem começa a usar IA: a de que a qualidade do resultado depende exclusivamente da qualidade do prompt inicial. Você escreve o melhor prompt possível, envia, e o que vier é o que ficou.</p>
<p>Essa crença subestima radicalmente o que é possível. Ela ignora dois mecanismos poderosos: a capacidade do modelo de <strong>criticar e melhorar as próprias respostas</strong> quando instruído a fazê-lo, e a capacidade de <strong>ajudar você a escrever prompts melhores</strong> do que os que você escreveria sozinho.</p>
<p>O primeiro mecanismo é o <strong>Auto-Refinamento</strong>. O segundo é o <strong>Meta Prompting</strong>. Juntos, eles representam uma mudança de paradigma: de uma transação pontual para um processo de refinamento contínuo.</p>
<blockquote>
<p><strong>Analogia médica:</strong> Nenhum cirurgião experiente termina uma operação sem revisar o campo operatório: irrigação, hemostasia, conferência de compressas. A revisão não é sinal de falha — é parte integrante do processo de excelência.</p>
</blockquote>
    `,
  },
  {
    id: "auto-refinamento",
    title: "1. Auto-Refinamento: A IA Como Seu Próprio Revisor",
    content: `
<p>O Auto-Refinamento parte de uma observação empírica: LLMs são capazes de identificar problemas em textos com qualidade <strong>superior</strong> à que demonstram ao produzi-los em primeira instância. O modelo que produz uma resposta mediana frequentemente consegue, quando instruído a revisá-la, identificar o que está faltando e corrigi-lo.</p>
<p>O trabalho seminal é o <strong>Self-Refine</strong> de Madaan et al. (2023), que formalizou o ciclo iterativo: <strong>geração → feedback → refinamento</strong>. O ciclo se repete até uma condição de parada ser atingida.</p>

<h3>A assimetria entre gerar e revisar</h3>
<p>Ao gerar, o modelo precisa criar algo do zero — gerenciar estrutura, coerência, completude e precisão simultaneamente. Ao revisar, ele já tem um objeto concreto e pode focar integralmente em avaliá-lo criticamente.</p>
<blockquote>
<p><strong>Analogia:</strong> É a mesma diferença entre elaborar um diagnóstico diferencial (construir sob incerteza) e revisá-lo (avaliar criticamente o que já existe). A revisão é cognitivamente diferente — e frequentemente mais eficaz.</p>
</blockquote>

<h3>Estrutura prática do ciclo</h3>
<p><strong>Etapa 1 — Geração:</strong> Execute a tarefa principal.</p>
<p><strong>Etapa 2 — Crítica:</strong> "Releia a resposta. Avalie criticamente considerando: (a) [Critério 1], (b) [Critério 2], (c) [Critério 3]. Identifique pelo menos 3 pontos de melhoria."</p>
<p><strong>Etapa 3 — Refinamento:</strong> "Com base nos pontos de melhoria, reescreva a resposta incorporando todas as correções."</p>

<h3>Versão compacta (prompt único)</h3>
<blockquote>
<p>"[Instrução principal da tarefa]. Depois de gerar sua resposta, revise-a criticamente usando estes critérios: (a), (b), (c). Identifique pelo menos 3 pontos de melhoria e reescreva já incorporando as correções. Apresente primeiro a crítica, depois a versão refinada."</p>
</blockquote>
    `,
  },
  {
    id: "exemplos-auto-refinamento",
    title: "2. Auto-Refinamento na Prática",
    content: `
<h3>Exemplo 1 — Revisão de plano anestésico</h3>
<p><strong>Etapa 1:</strong> Elaborar plano anestésico para paciente obeso com SAOS e DM2, colecistectomia eletiva.</p>
<p><strong>Etapa 2 — Crítica específica:</strong></p>
<blockquote><p>"Avalie o plano contra estes critérios: (a) Via aérea difícil: todas as variáveis de risco foram consideradas (obesidade + SAOS + laparoscopia)? (b) SAOS: há plano explícito para extubação e SRPA? (c) Metformina: abordada corretamente para o contexto perioperatório? (d) Monitorização adequada ao risco cardiovascular? (e) Algum item de segurança ausente?"</p></blockquote>
<p><strong>Etapa 3:</strong> Reescrever incorporando todos os pontos de melhoria.</p>

<h3>Exemplo 2 — Revisão de nota operatória</h3>
<blockquote><p>"Elabore uma nota operatória para colecistectomia laparoscópica. Depois, avalie quanto a: (a) Completude CFM, (b) Elementos medicolegais, (c) Clareza de linguagem. Apresente a nota original, a crítica e a versão refinada."</p></blockquote>

<h3>Quando usar — e quando não usar</h3>
<ul>
<li><strong>Valioso:</strong> documentos clínicos, peças jurídicas, análises estratégicas, quando critérios de qualidade são verificáveis</li>
<li><strong>Menos útil:</strong> tarefas simples e diretas, perguntas factuais curtas</li>
<li><strong>Importante:</strong> O Auto-Refinamento <strong>não substitui sua revisão como especialista</strong>. O modelo pode ter pontos cegos sistêmicos. Você é o validador final.</li>
</ul>
    `,
  },
  {
    id: "meta-prompting",
    title: "3. Meta Prompting: Usando a IA Para Escrever Prompts Melhores",
    content: `
<p>O <strong>Meta Prompting</strong> é o uso da própria IA como colaboradora na construção, avaliação e melhoria de prompts. Em vez de escrever prompts sozinho e testar empiricamente, você usa o modelo como um consultor de prompt engineering.</p>

<h3>Por que você precisa de Meta Prompting</h3>
<p>Existe uma barreira invisível: escrever um prompt eficaz requer conhecimento que a maioria dos usuários não tem. É um problema circular — para bons resultados, precisa de um bom prompt; para um bom prompt, precisa de experiência. O Meta Prompting quebra esse ciclo.</p>

<h3>4 Modalidades práticas</h3>
<p><strong>Modalidade 1 — Geração de prompt a partir de descrição:</strong></p>
<blockquote><p>"Você é especialista em prompt engineering. Preciso de um prompt que faça a IA atuar como consultora de farmacologia perioperatória. Deve: (a) adotar postura clínica objetiva, (b) pedir confirmação quando informações forem insuficientes, (c) mencionar contraindicações, (d) formatar em tópicos com nível de evidência. Escreva o prompt completo."</p></blockquote>

<p><strong>Modalidade 2 — Melhoria de prompt existente:</strong></p>
<blockquote><p>"Analise o prompt abaixo, identifique limitações — o que está ambíguo, faltando ou impreciso — e reescreva uma versão melhorada explicando cada mudança. MEU PROMPT: [colar]"</p></blockquote>

<p><strong>Modalidade 3 — Diagnóstico de prompt com resultado ruim:</strong></p>
<blockquote><p>"Usei este prompt e o resultado não atendeu. Analise: (a) por que gerou esse resultado? (b) quais elementos ausentes? (c) reescreva uma versão melhor. MEU PROMPT: [colar]. RESULTADO: [colar]. O QUE EU QUERIA: [descrever]."</p></blockquote>

<p><strong>Modalidade 4 — Construção colaborativa interativa:</strong></p>
<blockquote><p>"Quero criar um prompt eficaz mas não sei como estruturá-lo. Faça as perguntas necessárias — uma por vez — para entender o que quero, o público-alvo, o formato ideal, as restrições. Depois, escreva o prompt otimizado."</p></blockquote>
    `,
  },
  {
    id: "integrando-cap7",
    title: "4. Integrando Auto-Refinamento e Meta Prompting",
    content: `
<p>As duas técnicas se complementam naturalmente num ciclo de melhoria contínua:</p>
<ol>
<li>Use <strong>Meta Prompting</strong> para construir o melhor prompt possível para uma tarefa recorrente</li>
<li>Execute a tarefa e use <strong>Auto-Refinamento</strong> para elevar a qualidade do output</li>
<li>Ao identificar que o Auto-Refinamento corrige repetidamente o mesmo problema, use <strong>Meta Prompting novamente</strong> para incorporar esse critério diretamente no prompt original</li>
</ol>
<p>É um ciclo de melhoria contínua. Exatamente como protocolos clínicos são revisados com base em eventos adversos e resultados, seus prompts se tornam progressivamente mais robustos com cada iteração.</p>

<blockquote>
<p><strong>Boas práticas do Meta Prompting:</strong> (1) Seja específico sobre o que um bom resultado significa — formato, profundidade, restrições, público. (2) Trate o prompt gerado como ponto de partida, não produto final. (3) Combine Meta Prompting com Auto-Refinamento: depois que o modelo gerar um prompt, instrua-o a criticar o próprio prompt.</p>
</blockquote>
    `,
  },
  {
    id: "exercicios-cap7",
    title: "Exercícios de Fixação",
    content: `
<h3>Questão 1</h3>
<p>Explique por que existe uma assimetria entre a capacidade de um LLM de gerar e de revisar respostas. Use uma analogia médica.</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>Ao gerar, o modelo coordena técnica, estrutura e decisão simultaneamente — como um cirurgião realizando uma anastomose. Ao revisar, pode dedicar atenção total a avaliar criticamente o que já existe — como o mesmo cirurgião revisando a estanqueidade depois. O Auto-Refinamento explora essa assimetria transformando a revisão em etapa separada e focada.</p>
</details>

<h3>Questão 2 — Identificação</h3>
<p>Qual abordagem para cada situação?</p>
<p>(a) Laudo de alta de UTI — garantir que nenhum elemento de segurança foi omitido<br>
(b) Criar assistente de IA para estudos de especialização<br>
(c) Prompt para interações medicamentosas que omite mecanismo farmacodinâmico<br>
(d) Resumo de artigo que simplificou demais os critérios de inclusão</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>(a) <strong>Auto-Refinamento</strong> — revisar output existente contra critérios. (b) <strong>Meta Prompting</strong> — construir instruções complexas para assistente. (c) <strong>Combinação</strong> — Meta Prompting para corrigir o prompt, Auto-Refinamento nos outputs. (d) <strong>Auto-Refinamento</strong> — revisar resumo com foco específico nos critérios de inclusão.</p>
</details>

<h3>Questão 3 — Múltipla escolha</h3>
<p>Sobre Self-Refine (Madaan et al., 2023), assinale a CORRETA:</p>
<p>(a) Usa um modelo diferente para revisar<br>
(b) O ciclo é fixo em exatamente 3 iterações<br>
(c) É equivalente ao Self-Consistency<br>
(d) O mesmo modelo gera, fornece feedback e refina em ciclo iterativo<br>
(e) Só funciona para raciocínio matemático</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(d)</strong> — O Self-Refine usa o mesmo modelo em todas as etapas — geração, feedback e refinamento — em ciclo iterativo que pode continuar até condição de parada.</p>
</details>

<h3>Questão 4 — Análise crítica</h3>
<p>Um colega diz: "Auto-Refinamento é inútil — se o modelo errou, vai errar da mesma forma na revisão." Avalie criticamente.</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>O argumento tem um núcleo verdadeiro: erros <strong>sistemáticos e estruturais</strong> (viés factual, limitação de treinamento) provavelmente não serão corrigidos. Mas a generalização é incorreta: omissões, inconsistências internas, simplificações excessivas — esses problemas o modelo frequentemente identifica quando instruído a procurá-los. A abordagem correta: usar Auto-Refinamento para elevar qualidade estrutural e aplicar sua expertise nos pontos que só você pode identificar.</p>
</details>
    `,
  },
];

// ─── Capítulo 8 ──────────────────────────────────────────

const CAP8_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap8",
    title: "Introdução",
    content: `
<p>Você chegou ao capítulo mais estratégico do módulo. Até aqui, aprendeu a construir prompts melhores — escrever instruções mais claras, usar exemplos, encadear raciocínios, fazer a IA revisar a si mesma. Tudo isso trabalha com o que a IA <strong>já sabe</strong>.</p>
<p>Mas e quando o problema não é a forma do prompt, e sim o fato de que <strong>a informação que você precisa simplesmente não está na cabeça da IA</strong>?</p>
<p>Este capítulo responde a essa pergunta. Você vai conhecer duas tecnologias que transformaram a forma como a IA acessa o mundo externo: o <strong>RAG</strong> (Retrieval-Augmented Generation) e o <strong>MCP</strong> (Model Context Protocol).</p>
    `,
  },
  {
    id: "rag-conceito",
    title: "1. RAG: Dando Memória Externa à IA",
    content: `
<h3>O Problema do Conhecimento Congelado</h3>
<p>Todo modelo de linguagem é treinado em texto coletado até uma data específica. Após esse treino, o conhecimento fica fixo, como uma fotografia. O mundo continua mudando — novos artigos, protocolos atualizados, decisões judiciais — e o modelo não sabe nada disso. Essa é a <em>data de corte</em> (knowledge cutoff).</p>
<p>Além disso, o modelo não tem acesso a documentos privados: o prontuário do seu paciente, o protocolo do hospital, o artigo recém-publicado que você quer discutir.</p>
<p>Lewis et al. (2020) descreveram: modelos pré-treinados armazenam conhecimento nos parâmetros, mas "sua capacidade de acessar e manipular esse conhecimento com precisão é limitada". É exatamente o que o RAG resolve.</p>

<blockquote>
<p><strong>Analogia médica:</strong> Um médico formado há dez anos tem todo o conhecimento da faculdade fixado. Para atender bem, ele consulta o prontuário, verifica diretrizes no UpToDate, confere a bula, relê o laudo. Combina o que <em>sabe</em> com o que <em>recupera</em> de fontes externas. O RAG faz exatamente isso com a IA.</p>
</blockquote>

<h3>O Que É RAG</h3>
<p><strong>RAG</strong> = Retrieval-Augmented Generation (Geração Aumentada por Recuperação). Combina dois tipos de memória:</p>
<ul>
<li><strong>Memória paramétrica:</strong> o que o modelo aprendeu no treino</li>
<li><strong>Memória não-paramétrica:</strong> documentos externos consultados dinamicamente</li>
</ul>
<p>Antes de gerar uma resposta, o sistema busca os documentos mais relevantes e os injeta no contexto. O modelo então responde com base tanto no que sabe quanto no que acabou de recuperar.</p>
    `,
  },
  {
    id: "rag-tres-passos",
    title: "2. Os Três Passos do RAG",
    content: `
<p><strong>Passo 1 — Recuperar (Retrieve):</strong> Sua pergunta é transformada em representação matemática (vetor) e usada para buscar os trechos mais relevantes numa base de documentos indexada. Busca por <em>significado</em>, não por palavras exatas.</p>
<p><strong>Passo 2 — Aumentar (Augment):</strong> Os trechos recuperados são inseridos no contexto da pergunta antes de chegar ao modelo. O contexto foi <em>aumentado</em> com informação externa.</p>
<p><strong>Passo 3 — Gerar (Generate):</strong> Com o contexto enriquecido, o modelo gera sua resposta fundamentada nos documentos recuperados.</p>

<h3>Por Que o RAG Reduz Alucinações</h3>
<p>Dois mecanismos: (1) documentos relevantes no contexto ancoram a resposta em fontes verificáveis, reduzindo a tendência de "preencher lacunas"; (2) quando não encontra documentos relevantes, pode sinalizar a ausência de informação em vez de inventar.</p>
<p><strong>Importante:</strong> O RAG reduz alucinações, mas não as elimina. A qualidade depende diretamente da qualidade dos seus documentos.</p>

<h3>Ferramentas Práticas de RAG</h3>
<table>
<thead><tr><th>Ferramenta</th><th>Acesso</th><th>Ideal para</th></tr></thead>
<tbody>
<tr><td><strong>NotebookLM</strong> (Google)</td><td>Gratuito</td><td>Síntese de artigos, comparação de fontes</td></tr>
<tr><td><strong>Claude Projects</strong></td><td>Claude.ai</td><td>Ambiente persistente com documentos + análise avançada</td></tr>
<tr><td><strong>GPTs com Knowledge</strong></td><td>ChatGPT Plus</td><td>Assistentes temáticos com documentos carregados</td></tr>
<tr><td><strong>Google AI Studio</strong></td><td>Gratuito</td><td>Análises pontuais com Gemini</td></tr>
</tbody>
</table>
    `,
  },
  {
    id: "mcp-conceito",
    title: "3. MCP: O Padrão Universal de Conexão",
    content: `
<p>O <strong>MCP</strong> (Model Context Protocol) é um protocolo aberto criado pela Anthropic que padroniza como modelos de IA se conectam a ferramentas e fontes de dados externas. Se o RAG dá à IA acesso a documentos, o MCP dá à IA acesso a <strong>sistemas inteiros</strong> — bases de dados, APIs, aplicações, serviços web.</p>

<blockquote>
<p><strong>Analogia:</strong> Pense no USB. Antes dele, cada dispositivo tinha um conector diferente. O USB padronizou a conexão — qualquer dispositivo funciona em qualquer computador. O MCP é o "USB da IA": um padrão universal que permite que qualquer modelo se conecte a qualquer ferramenta externa.</p>
</blockquote>

<h3>O que o MCP permite</h3>
<ul>
<li>Buscar informações em tempo real (web, bases de dados)</li>
<li>Executar ações em sistemas externos (enviar emails, criar documentos)</li>
<li>Acessar ferramentas especializadas (calculadoras, APIs médicas)</li>
<li>Integrar com aplicações existentes (Slack, GitHub, Google Drive, Notion)</li>
</ul>

<h3>Exemplos práticos</h3>
<ul>
<li><strong>Medicina:</strong> IA conectada via MCP ao PubMed busca artigos em tempo real para fundamentar diagnóstico diferencial</li>
<li><strong>Advocacia:</strong> IA conectada a base de jurisprudência pesquisa precedentes automaticamente</li>
<li><strong>Gestão:</strong> IA conectada ao CRM da empresa analisa dados de vendas sem que você precise exportar planilhas</li>
</ul>
    `,
  },
  {
    id: "rag-vs-mcp",
    title: "4. RAG vs MCP: Escolhendo a Ferramenta Certa",
    content: `
<table>
<thead><tr><th>Critério</th><th>RAG</th><th>MCP</th></tr></thead>
<tbody>
<tr><td>O que faz</td><td>Busca e injeta documentos no contexto</td><td>Conecta a IA a ferramentas e sistemas externos</td></tr>
<tr><td>Tipo de dado</td><td>Documentos estáticos (PDFs, artigos, manuais)</td><td>Dados dinâmicos e ações (APIs, buscas, execuções)</td></tr>
<tr><td>Quando usar</td><td>Análise de documentos próprios, conhecimento privado</td><td>Informação em tempo real, ações automatizadas</td></tr>
<tr><td>Complexidade</td><td>Acessível (NotebookLM, Claude Projects)</td><td>Mais técnico (configuração de servidores MCP)</td></tr>
<tr><td>Analogia</td><td>Consultar a biblioteca antes de responder</td><td>Ligar para um especialista e pedir que ele faça algo</td></tr>
</tbody>
</table>

<p><strong>Na prática, eles se complementam.</strong> Um sistema robusto pode usar RAG para buscar documentos internos e MCP para acessar dados em tempo real e executar ações. A escolha não é RAG <em>ou</em> MCP — é entender qual problema cada um resolve.</p>
    `,
  },
  {
    id: "exercicios-cap8",
    title: "Exercícios de Fixação",
    content: `
<h3>Questão 1</h3>
<p>Explique os três passos do RAG (Recuperar, Aumentar, Gerar) usando uma analogia do cotidiano médico.</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>Recuperar:</strong> O médico consulta o UpToDate antes de prescrever — busca a informação relevante. <strong>Aumentar:</strong> Ele lê o artigo e incorpora as recomendações ao seu raciocínio clínico — o contexto da decisão foi enriquecido. <strong>Gerar:</strong> Com base no que sabe + no que acabou de ler, toma a decisão terapêutica fundamentada.</p>
</details>

<h3>Questão 2 — Múltipla escolha</h3>
<p>Sobre RAG, assinale a CORRETA:</p>
<p>(a) Elimina completamente as alucinações dos LLMs<br>
(b) Requer retreinamento do modelo para cada nova base de documentos<br>
(c) Combina memória paramétrica com memória não-paramétrica para gerar respostas fundamentadas<br>
(d) Só funciona com documentos em inglês<br>
(e) Substitui completamente o conhecimento interno do modelo</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p><strong>(c)</strong> — RAG combina o conhecimento do treinamento (paramétrico) com documentos externos consultados dinamicamente (não-paramétrico). Não elimina alucinações completamente (a), não requer retreinamento (b), funciona em qualquer idioma (d) e complementa — não substitui — o modelo (e).</p>
</details>

<h3>Questão 3 — RAG vs MCP</h3>
<p>Para cada situação, indique RAG ou MCP:</p>
<p>(a) Analisar 20 artigos sobre TIVA em pacientes obesos<br>
(b) Buscar os preços atuais de medicamentos em farmácia online<br>
(c) Comparar protocolos internos do hospital com guidelines internacionais<br>
(d) Enviar automaticamente um relatório por email após a análise</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>(a) <strong>RAG</strong> — documentos estáticos para análise. (b) <strong>MCP</strong> — dados dinâmicos em tempo real. (c) <strong>RAG</strong> — comparação de documentos. (d) <strong>MCP</strong> — ação em sistema externo.</p>
</details>

<h3>Questão 4</h3>
<p>Por que "lixo entra, lixo sai" é uma preocupação especialmente relevante para sistemas RAG?</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>Porque o RAG fundamenta as respostas nos documentos fornecidos. Se a base contém informações desatualizadas, incorretas ou de baixa qualidade, o modelo vai gerar respostas fundamentadas nesse material ruim — mas com a confiança de quem está citando uma fonte. A qualidade do RAG é diretamente proporcional à qualidade da base documental.</p>
</details>
    `,
  },
];

// ─── Capítulo 9 ──────────────────────────────────────────

const CAP9_SECTIONS: ChapterSection[] = [
  {
    id: "introducao-cap9",
    title: "Introdução",
    content: `
<p>Imagine a seguinte cena. Você passou horas refinando um prompt perfeito — persona definida, contexto detalhado, tarefa clara, formato especificado. Envia. E a resposta é... mediana. Não porque o prompt era ruim. Porque o <strong>contexto ao redor do prompt</strong> estava poluído: histórico de conversa irrelevante ocupando espaço, documentos desnecessários competindo por atenção, instruções contraditórias de turnos anteriores.</p>
<p>Esse é o problema que o <strong>Context Engineering</strong> resolve. Se Prompt Engineering é a arte de fazer a pergunta certa, Context Engineering é a arte de <strong>preparar o cenário inteiro</strong> antes de fazer a pergunta.</p>
<p>Este capítulo é o ponto de chegada do ebook — onde todas as técnicas anteriores convergem numa visão integrada de como usar IA de forma profissional.</p>
    `,
  },
  {
    id: "evolucao-prompt-context",
    title: "1. De Prompt Engineering a Context Engineering",
    content: `
<p>O termo <strong>Context Engineering</strong> emergiu em 2025 quando a Anthropic definiu: <em>"o conjunto de estratégias para curar e manter o conjunto ótimo de tokens durante a inferência do LLM"</em>.</p>
<p>O insight fundamental: em sistemas de IA de alto desempenho, apenas <strong>~20% dos tokens</strong> são o prompt estático (sua instrução). Os outros <strong>~80% são contexto dinâmico</strong> — histórico de conversa, documentos carregados, resultados de ferramentas, memória persistente.</p>
<p>Prompt Engineering foca nos 20%. Context Engineering foca nos 100%.</p>

<blockquote>
<p><strong>Analogia médica:</strong> Prompt Engineering é escolher a pergunta certa para fazer ao paciente. Context Engineering é preparar <strong>toda a consulta</strong> — ter o prontuário organizado, os exames disponíveis, o histórico acessível, o ambiente adequado. A qualidade da resposta do paciente depende tanto da pergunta quanto do contexto em que ela é feita.</p>
</blockquote>
    `,
  },
  {
    id: "janela-contexto-recurso",
    title: "2. A Janela de Contexto: O Recurso Mais Precioso",
    content: `
<p>A janela de contexto é finita — e é o recurso mais precioso (e mais mal gerenciado) da interação com IA. Tudo que o modelo "vê" numa interação precisa caber nessa janela: seu prompt, os documentos enviados, o histórico da conversa e a resposta em construção.</p>

<table>
<thead><tr><th>Modelo</th><th>Janela de Contexto</th><th>Equivalente aproximado</th></tr></thead>
<tbody>
<tr><td>Claude Opus 4.6</td><td>200k tokens (expandível a 1M)</td><td>~300–1.500 páginas</td></tr>
<tr><td>GPT-5.2</td><td>400k tokens</td><td>~600 páginas</td></tr>
<tr><td>Gemini 3 Pro</td><td>1M–2M tokens</td><td>~1.500–3.000 páginas</td></tr>
</tbody>
</table>

<p>Parece muito — mas na prática, o <strong>contexto efetivo</strong> (onde o modelo realmente mantém atenção de qualidade) é apenas <strong>50-65% do anunciado</strong> (RULER, NVIDIA 2024). E cada conversa longa, cada documento carregado, cada turno de histórico consome esse recurso silenciosamente.</p>
<p>A regra é simples: <strong>trate a janela de contexto como memória RAM — escassa e preciosa</strong>. Não desperdiçe com informação irrelevante.</p>
    `,
  },
  {
    id: "erros-contexto",
    title: "3. Os Quatro Erros de Contexto que Destroem Resultados",
    content: `
<h3>Erro 1: Contexto Poluído</h3>
<p>Conversas longas com múltiplos assuntos misturados. Histórico irrelevante que compete por atenção com a instrução atual. Solução: <strong>novo chat para cada assunto</strong>.</p>

<h3>Erro 2: Documentos Demais</h3>
<p>Carregar 30 documentos quando apenas 3 são relevantes. O modelo precisa filtrar — e pode priorizar o documento errado. Solução: <strong>curadoria antes do upload</strong>.</p>

<h3>Erro 3: Instruções Contraditórias</h3>
<p>System Prompt dizendo "seja conciso", User Prompt pedindo "explique em detalhes". Instruções de turnos anteriores conflitando com as atuais. Solução: <strong>consistência deliberada</strong>.</p>

<h3>Erro 4: Informação Crítica no Meio</h3>
<p>O efeito <strong>Lost in the Middle</strong> (Liu et al., 2023): informações no meio do contexto recebem menos atenção que as do início e do final. Solução: <strong>posicione informações críticas no início ou no final</strong> do contexto.</p>
    `,
  },
  {
    id: "higiene-contexto",
    title: "4. Higiene de Contexto: Estratégias Práticas",
    content: `
<h3>Estratégia 1: Um chat por assunto</h3>
<p>Não misture temas na mesma conversa. Cada chat deve ter um propósito único e claro.</p>

<h3>Estratégia 2: Resumos periódicos</h3>
<p>Em conversas longas, peça ao modelo que sintetize os pontos principais a cada 5-10 turnos antes de continuar.</p>

<h3>Estratégia 3: Curadoria de documentos</h3>
<p>Selecione apenas os documentos relevantes para a tarefa atual. Menos é mais quando se trata de contexto.</p>

<h3>Estratégia 4: Posicionamento estratégico</h3>
<p>Informações críticas no início (System Prompt) e no final (instrução atual). Nunca enterre instruções importantes no meio de um contexto longo.</p>

<h3>Estratégia 5: Prompt Chaining como gestão de contexto</h3>
<p>Cada etapa de uma chain tem um contexto limpo e focado. Em vez de uma conversa longa e poluída, você tem múltiplas interações curtas e direcionadas.</p>

<blockquote>
<p><strong>Regra de ouro:</strong> Se Prompt Engineering é aprender a fazer a pergunta certa, Context Engineering é aprender a <strong>preparar o cenário inteiro</strong> antes de fazer a pergunta.</p>
</blockquote>
    `,
  },
  {
    id: "contexto-sistema",
    title: "5. O Contexto Como Sistema: Conectando Tudo",
    content: `
<p>Este capítulo é o ponto de convergência de todo o ebook. Cada técnica que você aprendeu é, na verdade, uma forma de <strong>gerenciar contexto</strong>:</p>
<ul>
<li><strong>PCTF</strong> (Cap 2) → Estrutura o contexto da instrução</li>
<li><strong>Tags XML</strong> (Cap 2) → Organiza diferentes partes do contexto</li>
<li><strong>Few-Shot</strong> (Cap 3) → Adiciona contexto de exemplos</li>
<li><strong>CoT</strong> (Cap 4) → Expande o contexto com raciocínio explícito</li>
<li><strong>Step-Back / Generated Knowledge</strong> (Cap 5) → Enriquece o contexto com conhecimento de fundo</li>
<li><strong>Prompt Chaining</strong> (Cap 6) → Gerencia o contexto em etapas</li>
<li><strong>Auto-Refinamento</strong> (Cap 7) → Melhora a qualidade do contexto de saída</li>
<li><strong>RAG</strong> (Cap 8) → Injeta contexto externo relevante</li>
<li><strong>MCP</strong> (Cap 8) → Conecta a contextos dinâmicos e ferramentas</li>
</ul>
<p>Context Engineering é a <strong>visão unificada</strong> de todas essas técnicas. Não é uma técnica nova — é a compreensão de que <strong>toda interação com IA é, fundamentalmente, um problema de gerenciamento de contexto</strong>.</p>

<blockquote>
<p><strong>O profissional de IA do futuro</strong> não é aquele que escreve os melhores prompts. É aquele que projeta os melhores <strong>sistemas de contexto</strong> — onde a informação certa chega ao modelo certo, no formato certo, no momento certo.</p>
</blockquote>
    `,
  },
  {
    id: "exercicios-cap9",
    title: "Exercícios de Fixação",
    content: `
<h3>Questão 1</h3>
<p>Explique a diferença entre Prompt Engineering e Context Engineering com uma analogia médica.</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>Prompt Engineering é escolher a pergunta certa para o paciente. Context Engineering é preparar toda a consulta — prontuário organizado, exames disponíveis, histórico acessível, ambiente adequado. A qualidade da resposta depende tanto da pergunta quanto do contexto em que é feita.</p>
</details>

<h3>Questão 2 — Verdadeiro ou Falso</h3>
<ol>
<li>O contexto efetivo de um LLM é 100% da janela de contexto anunciada. <strong>Falso</strong> — É apenas 50-65% (RULER, NVIDIA 2024).</li>
<li>O efeito "Lost in the Middle" significa que informações no centro do contexto recebem menos atenção. <strong>Verdadeiro</strong>.</li>
<li>Context Engineering é uma técnica separada que substitui Prompt Engineering. <strong>Falso</strong> — É uma visão unificada que integra todas as técnicas de prompt.</li>
<li>Carregar mais documentos sempre melhora a qualidade das respostas. <strong>Falso</strong> — Documentos irrelevantes poluem o contexto.</li>
</ol>

<h3>Questão 3</h3>
<p>Liste os 4 erros de contexto e proponha uma solução prática para cada um.</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>(1) Contexto poluído → novo chat por assunto. (2) Documentos demais → curadoria antes do upload. (3) Instruções contraditórias → consistência deliberada entre System e User Prompt. (4) Informação crítica no meio → posicionar no início ou final do contexto.</p>
</details>

<h3>Questão 4</h3>
<p>Como cada técnica do ebook se relaciona com gerenciamento de contexto? Cite pelo menos 4 técnicas e explique.</p>
<details><summary><strong>Ver Gabarito</strong></summary>
<p>PCTF estrutura o contexto da instrução. Tags XML organizam partes do contexto. Few-Shot adiciona contexto de exemplos. CoT expande com raciocínio explícito. Step-Back enriquece com conhecimento de fundo. Prompt Chaining gerencia em etapas. RAG injeta contexto externo. Todas são, fundamentalmente, formas de gerenciar o que chega ao modelo.</p>
</details>
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

export const ENGENHARIA_PROMPT: EbookMeta = {
  id: "engenharia-prompt",
  title: "Engenharia de Prompt",
  subtitle: "A Arte de Comunicar com IA",
  description:
    "Das técnicas fundamentais às estratégias avançadas. Um guia completo de Prompt Engineering: Framework PCTF, Few-Shot, Chain-of-Thought, Prompt Chaining, RAG, Meta Prompting e Context Engineering.",
  author: "Gabriel Tavares",
  coverColor: "#6370E0",
  chapters: [
    {
      slug: "o-que-e-um-prompt",
      number: 1,
      title: "O que é um Prompt e os Princípios que Importam",
      summary:
        "O que é um prompt, a diferença entre System e User Prompt, a hierarquia de eficácia e o princípio fundamental: diga o que fazer, não o que não fazer.",
      readingTime: "16 min",
      available: true,
      sections: CAP1_SECTIONS,
    },
    {
      slug: "anatomia-prompt-eficaz",
      number: 2,
      title: "A Anatomia de um Prompt Eficaz",
      summary:
        "O Framework PCTF (Persona, Contexto, Tarefa, Formato), Tags XML para estruturação, Prefill e a técnica de instrução no final para contextos longos.",
      readingTime: "20 min",
      available: true,
      sections: CAP2_SECTIONS,
    },
    {
      slug: "few-shot-prompting",
      number: 3,
      title: "Ensinando pelo Exemplo — ICL e Few-Shot Prompting",
      summary:
        "In-Context Learning, o espectro Zero-Shot a Few-Shot, como construir exemplos eficazes e aplicações práticas em classificação, flashcards e questões.",
      readingTime: "18 min",
      available: true,
      sections: CAP3_SECTIONS,
    },
    {
      slug: "chain-of-thought",
      number: 4,
      title: "Ensinando a Raciocinar — Chain-of-Thought Prompting",
      summary:
        "Chain-of-Thought, Self-Consistency, Tree of Thoughts: técnicas que tornam o raciocínio da IA visível e verificável.",
      readingTime: "18 min",
      available: true,
      sections: CAP4_SECTIONS,
    },
    {
      slug: "step-back-plan-solve",
      number: 5,
      title: "Preparando para a Resposta — Step-Back, Plan-and-Solve e Generated Knowledge",
      summary:
        "Técnicas de preparação: ativar conhecimento de fundo, criar planos antes de executar e gerar conhecimento explícito antes de aplicar.",
      readingTime: "20 min",
      available: true,
      sections: CAP5_SECTIONS,
    },
    {
      slug: "prompt-chaining",
      number: 6,
      title: "Prompt Chaining e Least-to-Most Prompting",
      summary:
        "Dividir tarefas extensas em etapas sequenciais com Prompt Chaining e decompor problemas complexos em subproblemas com Least-to-Most.",
      readingTime: "20 min",
      available: true,
      sections: CAP6_SECTIONS,
    },
    {
      slug: "auto-refinamento-meta-prompting",
      number: 7,
      title: "Auto-Refinamento e Meta Prompting",
      summary:
        "A IA como seu próprio revisor: ciclo Gerar-Criticar-Refinar. Meta Prompting: usar a IA para construir prompts melhores.",
      readingTime: "22 min",
      available: true,
      sections: CAP7_SECTIONS,
    },
    {
      slug: "rag-mcp",
      number: 8,
      title: "RAG e MCP — Quando a IA Precisa de Fontes Externas",
      summary:
        "Retrieval-Augmented Generation e Model Context Protocol: conectando a IA a bases de conhecimento e ferramentas externas.",
      readingTime: "20 min",
      available: true,
      sections: CAP8_SECTIONS,
    },
    {
      slug: "context-engineering",
      number: 9,
      title: "Context Engineering — A Arte de Arquitetar o que a IA Recebe",
      summary:
        "A evolução do Prompt Engineering: projetar o contexto completo que a IA recebe, não apenas o prompt individual.",
      readingTime: "18 min",
      available: true,
      sections: CAP9_SECTIONS,
    },
  ],
};
