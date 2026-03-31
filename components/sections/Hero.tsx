"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

interface HeroProps {
  badge?: string;
  headline: string;
  subheading: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  socialProof?: string;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Hero({
  badge,
  headline,
  subheading,
  ctaPrimary,
  ctaSecondary,
  socialProof,
}: HeroProps) {
  const shouldReduce = useReducedMotion();

  const containerProps = shouldReduce
    ? {}
    : { variants: containerVariants, initial: "hidden", animate: "visible" };

  const itemProps = shouldReduce ? {} : { variants: itemVariants };

  return (
    <section className="relative min-h-screen bg-[#02040a] flex items-center justify-center px-6 md:px-12 lg:px-16 pt-16 overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,240,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-[#00f0ff]/10 rounded-full blur-[100px] pointer-events-none" />
      {/* Side glow */}
      <div className="absolute top-1/3 right-0 w-[300px] h-[250px] bg-[#0088ff]/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-content mx-auto w-full flex flex-col items-center text-center">
        <motion.div className="max-w-3xl" {...containerProps}>
          {/* Badge */}
          {badge && (
            <motion.p
              className="text-xs font-medium uppercase tracking-widest text-[#00f0ff]/70 mb-6"
              {...itemProps}
            >
              {badge}
            </motion.p>
          )}

          {/* Headline */}
          <motion.h1
            className="font-serif font-light text-white leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            {...itemProps}
          >
            {headline}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="mt-8 text-base md:text-lg leading-relaxed text-[#a3b8cc] max-w-2xl mx-auto"
            {...itemProps}
          >
            {subheading}
          </motion.p>

          {/* CTA row */}
          <motion.div className="flex flex-wrap gap-4 mt-10 justify-center" {...itemProps}>
            <Button href={ctaPrimary.href} variant="primary" size="md">
              {ctaPrimary.label}
            </Button>
            {ctaSecondary && (
              <Button href={ctaSecondary.href} variant="secondary" size="md">
                {ctaSecondary.label}
              </Button>
            )}
          </motion.div>

          {/* Social proof */}
          {socialProof && (
            <motion.p className="mt-6 text-sm text-[#4a5568]" {...itemProps}>
              {socialProof}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
