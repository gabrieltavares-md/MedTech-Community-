"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";

const products = [
  {
    id: "youtube",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" />
      </svg>
    ),
    title: "Canal YouTube",
    description: "Aulas práticas e revisões rápidas em vídeo para sua rotina.",
    badge: "Ativo",
    badgeActive: true,
    ctaLabel: "Assistir Agora",
    ctaHref: "https://www.youtube.com/@CanalMedTech",
    ctaExternal: true,
  },
  {
    id: "ebooks",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Ebooks",
    description: "Guias profundos de bolso para consulta rápida na beira leito.",
    badge: "Ativo",
    badgeActive: true,
    ctaLabel: "Ver Ebooks",
    ctaHref: "/ia",
    ctaExternal: false,
  },
  {
    id: "cursos",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-1.342" />
      </svg>
    ),
    title: "Academia MedTech",
    description: "Um Ambiente em desenvolvimento voltado para a facilitação da Aprendizagem sobre IA, Anestesiologia, Medicina Perioperatória e Terapia Intensiva. Cada uma das Comunidades é voltada para um grupo específico",
    badge: "Em Breve",
    badgeActive: false,
    ctaLabel: "Faça parte dessa comunidade que procura se adaptar ao século XXI para essa jornada ",
    ctaHref: "#",
    ctaExternal: false,
  },
  {
    id: "chatbot",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "MedTech Chatbot",
    description: "Assistente de IA treinado em diretrizes clínicas atualizadas.",
    badge: "Em Breve",
    badgeActive: false,
    ctaLabel: "Acesso Antecipado",
    ctaHref: "#",
    ctaExternal: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ProductGrid() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="bg-[#080c14] py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#00f0ff]/50 mb-2">
              Recursos de Aprendizado
            </p>
            <h2 className="font-serif font-light text-3xl md:text-4xl text-white tracking-tight">
              Conteúdo em Destaque
            </h2>
          </div>
          <a
            href="#"
            className="text-sm text-[#a3b8cc] hover:text-white transition-colors duration-200 hidden md:flex items-center gap-1"
          >
            Ver toda a biblioteca
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          variants={shouldReduce ? undefined : containerVariants}
          initial={shouldReduce ? undefined : "hidden"}
          whileInView={shouldReduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
        >
          {products.map((p) => (
            <motion.div
              key={p.id}
              variants={shouldReduce ? undefined : itemVariants}
              className={`group bg-[#02040a] border border-[rgba(0,240,255,0.08)] rounded-card p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 transition-all duration-200 relative ${
                p.badgeActive
                  ? "hover:border-[rgba(0,240,255,0.18)] hover:bg-[#080c14] cursor-pointer"
                  : "opacity-50 cursor-default"
              }`}
            >
              {/* Stretch link — only for active cards */}
              {p.badgeActive && (
                <a
                  href={p.ctaHref}
                  className="absolute inset-0 z-0"
                  aria-hidden
                  tabIndex={-1}
                  target={p.ctaExternal ? "_blank" : undefined}
                  rel={p.ctaExternal ? "noopener noreferrer" : undefined}
                />
              )}

              {/* Icon + Badge row */}
              <div className="flex items-start justify-between">
                <div className="text-[#00f0ff]/60">{p.icon}</div>
                <span
                  className={`text-[10px] font-medium uppercase tracking-widest px-2 py-0.5 rounded-chip ${
                    p.badgeActive
                      ? "bg-[#00f0ff]/10 text-[#00f0ff]"
                      : "bg-white/5 text-[#a3b8cc]/50"
                  }`}
                >
                  {p.badge}
                </span>
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-base font-medium text-white mb-1">{p.title}</h3>
                <p className="text-sm text-[#a3b8cc] leading-relaxed">{p.description}</p>
              </div>

              {/* CTA */}
              {p.badgeActive ? (
                <Button
                  href={p.ctaHref}
                  variant="primary"
                  size="sm"
                  className="relative z-10 w-full justify-center mt-auto"
                  target={p.ctaExternal ? "_blank" : undefined}
                  rel={p.ctaExternal ? "noopener noreferrer" : undefined}
                >
                  {p.ctaLabel}
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  size="sm"
                  disabled
                  className="w-full justify-center mt-auto"
                >
                  Em Breve
                </Button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
