export interface Product {
  id: string;
  title: string;
  description: string;
  category: "ebook" | "guideline" | "kit" | "curso";
  badge: string;
  badgeActive: boolean;
  ctaLabel: string;
  ctaHref: string;
  vertical: "ia" | "critical-care" | "anestesiologia";
}

export const IA_PRODUCTS: Product[] = [
  // --- Ebooks ---
  {
    id: "ebook-fundamentos-ia",
    title: "Fundamentos da IA Generativa",
    description:
      "Dos conceitos fundamentais aos modelos de linguagem modernos. LLMs, tokens, embeddings, janela de contexto e os principais modelos de 2026.",
    category: "ebook",
    badge: "Disponível",
    badgeActive: true,
    ctaLabel: "Ler Ebook",
    ctaHref: "/ia/fundamentos-ia",
    vertical: "ia",
  },
  {
    id: "ebook-estudando-com-ia",
    title: "Estudando com IA: O Guia do Estudante 4.0",
    description:
      "Resumos, exercícios, paciente virtual, flash cards e assistentes personalizados. 15 capítulos práticos para transformar seus estudos.",
    category: "ebook",
    badge: "Disponível",
    badgeActive: true,
    ctaLabel: "Baixar Ebook",
    ctaHref: "#",
    vertical: "ia",
  },
  {
    id: "ebook-prompt-engineering",
    title: "Engenharia de Prompt: A Arte de Comunicar com IA",
    description:
      "Técnicas fundamentais e avançadas: CoT, Few-Shot, Meta Prompts, RAG e Prompt Chaining. Baseado nos guias oficiais da Anthropic e OpenAI.",
    category: "ebook",
    badge: "Disponível",
    badgeActive: true,
    ctaLabel: "Ler Ebook",
    ctaHref: "/ia/engenharia-prompt",
    vertical: "ia",
  },
  {
    id: "ebook-context-engineering",
    title: "Context Engineering: A Nova Fronteira",
    description:
      "Janela de contexto, KV Cache, Lost in the Middle, RAG e gerenciamento avançado. O tema mais quente de 2025-2026 em IA.",
    category: "ebook",
    badge: "Em Breve",
    badgeActive: false,
    ctaLabel: "Lista de Espera",
    ctaHref: "#",
    vertical: "ia",
  },

  // --- Guidelines ---
  {
    id: "guide-dominando-claude",
    title: "Dominando a Claude: Do Zero ao Avançado",
    description:
      "Guia completo da Claude: Projects, Artifacts, Memory, Web Search, Skills e Claude Code. Tudo que você precisa para dominar a ferramenta.",
    category: "guideline",
    badge: "Disponível",
    badgeActive: true,
    ctaLabel: "Acessar Guia",
    ctaHref: "#",
    vertical: "ia",
  },
  {
    id: "guide-rag-langchain",
    title: "RAG & LangChain: Guia Prático",
    description:
      "Implementação completa de RAG com LangChain: vectorstores, embeddings, queries, Ollama e pipelines avançados com código real.",
    category: "guideline",
    badge: "Disponível",
    badgeActive: true,
    ctaLabel: "Acessar Guia",
    ctaHref: "#",
    vertical: "ia",
  },
  {
    id: "guide-agentes-ia",
    title: "Agentes de IA: Revisão de Literatura",
    description:
      "Síntese acadêmica com 18 referências: ReAct, Toolformer, Multi-Agent Systems, padrões de design e tendências 2022-2026.",
    category: "guideline",
    badge: "Disponível",
    badgeActive: true,
    ctaLabel: "Acessar Guia",
    ctaHref: "#",
    vertical: "ia",
  },

  // --- Kits ---
  {
    id: "kit-system-prompts",
    title: "System Prompts & Assistentes Prontos",
    description:
      "30+ system prompts testados e otimizados. Assistentes para estudos, investimentos, marketing, escrita acadêmica e anestesiologia.",
    category: "kit",
    badge: "Disponível",
    badgeActive: true,
    ctaLabel: "Baixar Kit",
    ctaHref: "#",
    vertical: "ia",
  },
  {
    id: "kit-prompt-library",
    title: "Prompt Library: 50+ Prompts Testados",
    description:
      "Biblioteca curada de prompts para produtividade, criação de conteúdo, análise de dados, código e automações. Copie e use.",
    category: "kit",
    badge: "Disponível",
    badgeActive: true,
    ctaLabel: "Baixar Kit",
    ctaHref: "#",
    vertical: "ia",
  },

  // --- Curso ---
  {
    id: "curso-medtech-academy",
    title: "MedTech Academy: IA do Zero ao Agente",
    description:
      "Formação completa em 5 módulos: Fundamentos IA, Prompt Engineering, Estudando com IA, Context Engineering e Agentes de IA.",
    category: "curso",
    badge: "Em Breve",
    badgeActive: false,
    ctaLabel: "Lista de Espera",
    ctaHref: "#",
    vertical: "ia",
  },
];

export const CATEGORY_LABELS: Record<Product["category"], string> = {
  ebook: "Ebooks",
  guideline: "Guidelines",
  kit: "Kits",
  curso: "Curso",
};
