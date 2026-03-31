"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { COLORS } from "@/lib/tokens";

const verticals = [
  {
    id: "ia",
    title: "MTC - Inteligência Artificial",
    description:
      "Domine os princípios básicos do uso da Inteligência Artificial no seu dia a dia. Engenharia e Design de Prompt, estruturação de agentes de IA, domínio do ChatGPT, Claude, Notion, Gemini, NotebookLM, Antigravity, Claude Code, Stitch, entre outros.",
    ctaLabel: "Explorar Trilha",
    route: "/ia",
    accentColor: COLORS.indigo[600],
  },
  {
    id: "critical-care",
    title: "MTC - Critical Care",
    description:
      "Aprenda a manejar pacientes críticos em diversos cenários. Desde a intercorrência clínica até abordagens cirúrgicas de imediato. Domine Algoritmo ACLS, ATLS, SAVA. Aprenda as técnicas de Indução Anestésica, Intubação Orotraqueal, POCUS, Anestesia Regional e Procedimentos Invasivos.",
    ctaLabel: "Explorar Trilha",
    route: "/critical-care",
    accentColor: COLORS.terra[600],
  },
  {
    id: "anestesiologia",
    title: "MTC - Anesthesiology",
    description:
      "Material didático sobre os principais temas da Anestesiologia. Conforme cronogramas da SBA, EDAIC, ASA. Baseado nas principais referências literárias. Questões inéditas, no estilo de provas modernas. FlashCards para memorização e revisão rápida. Um agente de IA especialista em Anestesiologia, treinado por toda a MTC Anesthesiology.",
    ctaLabel: "Explorar Trilha",
    route: "/anestesiologia",
    accentColor: COLORS.steel[600],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

interface VerticalCardsProps {
  id?: string;
}

export default function VerticalCards({ id }: VerticalCardsProps) {
  const shouldReduce = useReducedMotion();

  return (
    <section id={id} className="bg-[#02040a] py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-content mx-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-[#00f0ff]/50 mb-3">
          Community Gateway
        </p>
        <h2 className="font-serif font-light text-3xl md:text-4xl text-white tracking-tight mb-12">
          Escolha sua trilha
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={shouldReduce ? undefined : containerVariants}
          initial={shouldReduce ? undefined : "hidden"}
          whileInView={shouldReduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-100px" }}
        >
          {verticals.map((v) => (
            <motion.div
              key={v.id}
              variants={shouldReduce ? undefined : cardVariants}
              className="group bg-[#080c14] border border-[rgba(0,240,255,0.08)] rounded-card p-6 flex flex-col hover:bg-[#0d1120] hover:border-[rgba(0,240,255,0.18)] transition-all duration-200 relative overflow-hidden cursor-pointer"
            >
              {/* Stretch link — makes the entire card clickable */}
              <Link href={v.route} className="absolute inset-0 z-0" aria-hidden tabIndex={-1} />

              {/* Top accent border */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-card"
                style={{ backgroundColor: v.accentColor }}
              />

              <h3 className="text-lg font-medium text-white mt-2 mb-3">{v.title}</h3>
              <p className="text-sm text-[#a3b8cc] leading-relaxed flex-1">{v.description}</p>

              <Link
                href={v.route}
                className="relative z-10 inline-flex items-center gap-1.5 mt-6 text-sm font-medium transition-opacity duration-200 hover:opacity-70"
                style={{ color: v.accentColor }}
              >
                {v.ctaLabel}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
