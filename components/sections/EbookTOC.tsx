"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { EbookMeta } from "@/content/fundamentos-ia";

interface EbookTOCProps {
  ebook: EbookMeta;
  basePath: string;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function EbookTOC({ ebook, basePath }: EbookTOCProps) {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="sumario"
      className="bg-[#02040a] py-20 px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-content mx-auto">
        <p
          className="text-xs font-medium uppercase tracking-widest mb-2"
          style={{ color: `${ebook.coverColor}80` }}
        >
          Sumário
        </p>
        <h2 className="font-serif font-light text-3xl md:text-4xl text-white tracking-tight mb-12">
          Capítulos
        </h2>

        <motion.div
          className="space-y-4"
          variants={shouldReduce ? undefined : containerVariants}
          initial={shouldReduce ? undefined : "hidden"}
          whileInView={shouldReduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
        >
          {ebook.chapters.map((ch) => (
            <motion.div
              key={ch.slug}
              variants={shouldReduce ? undefined : itemVariants}
            >
              {ch.available ? (
                <Link
                  href={`${basePath}/${ch.slug}`}
                  className="group flex items-start gap-6 bg-[#080c14] border border-[rgba(0,240,255,0.08)] rounded-card p-6 hover:border-[rgba(0,240,255,0.18)] hover:bg-[#0d1120] transition-all duration-200"
                >
                  <span
                    className="text-2xl font-light shrink-0 w-10 text-center"
                    style={{ color: ebook.coverColor }}
                  >
                    {ch.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-white mb-1 group-hover:opacity-90 transition-opacity">
                      {ch.title}
                    </h3>
                    <p className="text-sm text-[#a3b8cc] leading-relaxed">
                      {ch.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 self-center">
                    <span className="text-xs text-[#a3b8cc]/50">
                      {ch.readingTime}
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-widest px-2 py-0.5 rounded-chip bg-[#00f0ff]/10 text-[#00f0ff]">
                      Disponível
                    </span>
                    <svg
                      className="w-4 h-4 text-[#a3b8cc]/40 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </Link>
              ) : (
                <div className="flex items-start gap-6 bg-[#080c14]/50 border border-[rgba(0,240,255,0.04)] rounded-card p-6 opacity-60">
                  <span className="text-2xl font-light shrink-0 w-10 text-center text-[#a3b8cc]/30">
                    {ch.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-[#a3b8cc]/60 mb-1">
                      {ch.title}
                    </h3>
                    <p className="text-sm text-[#a3b8cc]/40 leading-relaxed">
                      {ch.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 self-center">
                    <span className="text-xs text-[#a3b8cc]/30">
                      {ch.readingTime}
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-widest px-2 py-0.5 rounded-chip bg-white/5 text-[#a3b8cc]/50">
                      Em Breve
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
