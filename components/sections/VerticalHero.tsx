"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { VerticalConfig } from "@/lib/verticals";

interface VerticalHeroProps {
  vertical: VerticalConfig;
  stats: { label: string; value: number }[];
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function VerticalHero({ vertical, stats }: VerticalHeroProps) {
  const shouldReduce = useReducedMotion();

  const containerProps = shouldReduce
    ? {}
    : { variants: containerVariants, initial: "hidden", animate: "visible" };

  const itemProps = shouldReduce ? {} : { variants: itemVariants };

  return (
    <section className="relative min-h-[60vh] bg-[#02040a] flex items-center justify-center px-6 md:px-12 lg:px-16 pt-24 pb-16 overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,240,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Top glow — vertical color */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] rounded-full blur-[100px] pointer-events-none opacity-15"
        style={{ backgroundColor: vertical.color.primary }}
      />
      {/* Side glow */}
      <div
        className="absolute top-1/3 right-0 w-[250px] h-[200px] rounded-full blur-[80px] pointer-events-none opacity-10"
        style={{ backgroundColor: vertical.color.hover }}
      />

      <div className="relative max-w-content mx-auto w-full flex flex-col items-center text-center">
        <motion.div className="max-w-3xl" {...containerProps}>
          {/* Badge */}
          <motion.span
            className="inline-block text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-chip mb-6"
            style={{
              backgroundColor: `${vertical.color.primary}15`,
              color: vertical.color.primary,
            }}
            {...itemProps}
          >
            {vertical.name}
          </motion.span>

          {/* Headline */}
          <motion.h1
            className="font-serif font-light text-white leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            {...itemProps}
          >
            MedTech Community AI
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="mt-6 text-base md:text-lg leading-relaxed text-[#a3b8cc] max-w-2xl mx-auto"
            {...itemProps}
          >
            {vertical.description}
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-8 mt-10 justify-center"
            {...itemProps}
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span
                  className="text-2xl font-medium"
                  style={{ color: vertical.color.primary }}
                >
                  {s.value}
                </span>
                <span className="text-xs text-[#a3b8cc] mt-1 uppercase tracking-wide">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
