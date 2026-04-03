"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { Product } from "@/lib/products";

interface VerticalProductGridProps {
  products: Product[];
  accentColor: string;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function CategoryIcon({ category }: { category: Product["category"] }) {
  const cls = "w-6 h-6";
  switch (category) {
    case "ebook":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      );
    case "guideline":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      );
    case "kit":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
      );
    case "curso":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-1.342" />
        </svg>
      );
  }
}

export default function VerticalProductGrid({
  products,
  accentColor,
}: VerticalProductGridProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      variants={shouldReduce ? undefined : containerVariants}
      initial={shouldReduce ? undefined : "hidden"}
      whileInView={shouldReduce ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
      key={products.map((p) => p.id).join(",")}
    >
      {products.map((p) => (
        <motion.div
          key={p.id}
          variants={shouldReduce ? undefined : itemVariants}
          className={`group bg-[#080c14] border border-[rgba(0,240,255,0.08)] rounded-card p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 transition-all duration-200 relative overflow-hidden ${
            p.badgeActive
              ? "hover:border-[rgba(0,240,255,0.18)] hover:bg-[#0d1120]"
              : "opacity-50"
          }`}
        >
          {/* Top accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-card"
            style={{ backgroundColor: p.badgeActive ? accentColor : `${accentColor}40` }}
          />

          {/* Icon + Badge */}
          <div className="flex items-start justify-between mt-1">
            <div style={{ color: `${accentColor}99` }}>
              <CategoryIcon category={p.category} />
            </div>
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
            <h3 className="text-base font-medium text-white mb-2">{p.title}</h3>
            <p className="text-sm text-[#a3b8cc] leading-relaxed">
              {p.description}
            </p>
          </div>

          {/* CTA */}
          {p.badgeActive ? (
            <Button
              href={p.ctaHref}
              variant="primary"
              size="sm"
              verticalColor={accentColor}
              className="w-full justify-center mt-auto"
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
  );
}
