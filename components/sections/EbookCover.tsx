"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { EbookMeta } from "@/content/fundamentos-ia";

interface EbookCoverProps {
  ebook: EbookMeta;
  basePath: string;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function EbookCover({ ebook, basePath }: EbookCoverProps) {
  const shouldReduce = useReducedMotion();
  const containerProps = shouldReduce
    ? {}
    : { variants: containerVariants, initial: "hidden", animate: "visible" };
  const itemProps = shouldReduce ? {} : { variants: itemVariants };

  const availableChapters = ebook.chapters.filter((c) => c.available).length;
  const totalTime = ebook.chapters.reduce((sum, c) => {
    const m = parseInt(c.readingTime);
    return sum + (isNaN(m) ? 0 : m);
  }, 0);
  const firstChapter = ebook.chapters[0];

  return (
    <section className="relative bg-[#02040a] pt-28 pb-20 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,240,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full blur-[100px] pointer-events-none opacity-15"
        style={{ backgroundColor: ebook.coverColor }}
      />

      <div className="relative max-w-content mx-auto">
        <motion.div className="max-w-2xl" {...containerProps}>
          {/* Breadcrumb */}
          <motion.nav className="flex items-center gap-2 text-sm text-[#a3b8cc] mb-8" {...itemProps}>
            <a href="/ia" className="hover:text-white transition-colors">
              MedTech AI
            </a>
            <span className="opacity-40">/</span>
            <span className="text-white">Ebook</span>
          </motion.nav>

          {/* Badge */}
          <motion.span
            className="inline-block text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-chip mb-6"
            style={{
              backgroundColor: `${ebook.coverColor}15`,
              color: ebook.coverColor,
            }}
            {...itemProps}
          >
            Ebook Gratuito
          </motion.span>

          {/* Title */}
          <motion.h1
            className="font-serif font-light text-white leading-[1.15] tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
            {...itemProps}
          >
            {ebook.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="font-serif text-xl text-[#a3b8cc] mt-2 italic"
            {...itemProps}
          >
            {ebook.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            className="mt-6 text-base leading-relaxed text-[#a3b8cc] max-w-xl"
            {...itemProps}
          >
            {ebook.description}
          </motion.p>

          {/* Author */}
          <motion.p className="mt-4 text-sm text-[#a3b8cc]/60" {...itemProps}>
            por <span className="text-white">{ebook.author}</span> — MedTech
            Community
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-6 mt-8 text-sm"
            {...itemProps}
          >
            <span className="text-[#a3b8cc]">
              <span className="font-medium text-white">{ebook.chapters.length}</span>{" "}
              capítulos
            </span>
            <span className="text-[#a3b8cc]">
              <span className="font-medium text-white">{availableChapters}</span>{" "}
              disponíveis
            </span>
            <span className="text-[#a3b8cc]">
              <span className="font-medium text-white">~{totalTime} min</span>{" "}
              de leitura
            </span>
          </motion.div>

          {/* CTA */}
          <motion.div className="flex gap-4 mt-10" {...itemProps}>
            <Button
              href={`${basePath}/${firstChapter.slug}`}
              variant="primary"
              size="md"
              verticalColor={ebook.coverColor}
            >
              Começar Leitura
            </Button>
            <Button href="#sumario" variant="secondary" size="md">
              Ver Sumário
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
