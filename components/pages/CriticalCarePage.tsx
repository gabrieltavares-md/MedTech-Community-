"use client";

import { useState, useMemo } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VerticalHero from "@/components/sections/VerticalHero";
import CategoryFilter from "@/components/sections/CategoryFilter";
import VerticalProductGrid from "@/components/sections/VerticalProductGrid";
import NewsletterCTA from "@/components/sections/NewsletterCTA";
import { VERTICAL_MAP } from "@/lib/verticals";
import { CRITICAL_CARE_PRODUCTS, CATEGORY_LABELS } from "@/lib/products";
import type { Product } from "@/lib/products";

const vertical = VERTICAL_MAP["critical-care"];

function buildCategories(products: Product[]) {
  const counts: Record<string, number> = {};
  for (const p of products) {
    counts[p.category] = (counts[p.category] || 0) + 1;
  }
  return [
    { id: "todos", label: "Todos", count: products.length },
    ...Object.entries(counts).map(([id, count]) => ({
      id,
      label: CATEGORY_LABELS[id as Product["category"]] ?? id,
      count,
    })),
  ];
}

export default function CriticalCarePage() {
  const [activeFilter, setActiveFilter] = useState("todos");

  const categories = useMemo(() => buildCategories(CRITICAL_CARE_PRODUCTS), []);

  const filtered = useMemo(
    () =>
      activeFilter === "todos"
        ? CRITICAL_CARE_PRODUCTS
        : CRITICAL_CARE_PRODUCTS.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  const stats = useMemo(() => {
    const guides = CRITICAL_CARE_PRODUCTS.filter((p) => p.category === "guideline").length;
    const ebooks = CRITICAL_CARE_PRODUCTS.filter((p) => p.category === "ebook").length;
    const kits = CRITICAL_CARE_PRODUCTS.filter((p) => p.category === "kit").length;
    return [
      { label: "Guidelines", value: guides },
      { label: "Ebooks", value: ebooks },
      { label: "Kits", value: kits },
    ].filter((s) => s.value > 0);
  }, []);

  return (
    <>
      <Header variant="dark" activeVertical="critical-care" />
      <main>
        <VerticalHero vertical={vertical} stats={stats} />

        <section className="bg-[#02040a] py-16 px-6 md:px-12 lg:px-16">
          <div className="max-w-content mx-auto">
            <div className="mb-10">
              <p
                className="text-xs font-medium uppercase tracking-widest mb-2"
                style={{ color: `${vertical.color.primary}80` }}
              >
                Biblioteca de Recursos
              </p>
              <h2 className="font-serif font-light text-3xl md:text-4xl text-white tracking-tight mb-8">
                Protocolos e Materiais
              </h2>
              <CategoryFilter
                categories={categories}
                active={activeFilter}
                onChange={setActiveFilter}
                accentColor={vertical.color.primary}
              />
            </div>

            <VerticalProductGrid
              products={filtered}
              accentColor={vertical.color.primary}
            />
          </div>
        </section>

        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
