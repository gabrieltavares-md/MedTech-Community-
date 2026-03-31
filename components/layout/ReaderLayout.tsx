"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface TOCItem {
  id: string;
  title: string;
}

interface ChapterNav {
  slug: string;
  title: string;
}

interface ReaderLayoutProps {
  children: React.ReactNode;
  sections: TOCItem[];
  chapterTitle: string;
  chapterNumber: number;
  totalChapters: number;
  prevChapter?: ChapterNav;
  nextChapter?: ChapterNav;
  accentColor: string;
  ebookBasePath: string;
}

export default function ReaderLayout({
  children,
  sections,
  chapterTitle,
  chapterNumber,
  totalChapters,
  prevChapter,
  nextChapter,
  accentColor,
  ebookBasePath,
}: ReaderLayoutProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);

  // ── Progress bar ──
  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Active section tracking via IntersectionObserver ──
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(s.id);
          });
        },
        { rootMargin: "-20% 0px -60% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTocOpen(false);
    }
  }, []);

  return (
    <>
      <Header variant="dark" />

      {/* Progress bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-0.5 bg-transparent">
        <div
          className="h-full transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%`, backgroundColor: accentColor }}
        />
      </div>

      <main className="bg-[#02040a] min-h-screen pt-20">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#a3b8cc] mb-8">
            <Link href="/ia" className="hover:text-white transition-colors">
              MedTech AI
            </Link>
            <span className="opacity-40">/</span>
            <Link
              href={ebookBasePath}
              className="hover:text-white transition-colors"
            >
              Fundamentos IA
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white">Capítulo {chapterNumber}</span>
          </nav>

          <div className="flex gap-12">
            {/* ── Sidebar TOC (desktop) ── */}
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="sticky top-24">
                <p
                  className="text-xs font-medium uppercase tracking-widest mb-4 opacity-50"
                  style={{ color: accentColor }}
                >
                  Neste capítulo
                </p>
                <ul className="space-y-1">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <button
                        onClick={() => scrollTo(s.id)}
                        className={`text-left w-full text-sm py-1.5 px-3 rounded-md transition-all duration-200 cursor-pointer ${
                          activeSection === s.id
                            ? "text-white font-medium"
                            : "text-[#a3b8cc] hover:text-white"
                        }`}
                        style={
                          activeSection === s.id
                            ? { backgroundColor: `${accentColor}15`, color: accentColor }
                            : undefined
                        }
                      >
                        {s.title}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-[rgba(0,240,255,0.08)]">
                  <p className="text-xs text-[#a3b8cc]/50">
                    Capítulo {chapterNumber} de {totalChapters}
                  </p>
                </div>
              </div>
            </aside>

            {/* ── Mobile TOC toggle ── */}
            <div className="lg:hidden fixed bottom-6 right-6 z-30">
              <button
                onClick={() => setTocOpen(!tocOpen)}
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                style={{ backgroundColor: accentColor }}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile TOC panel */}
            {tocOpen && (
              <div className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm">
                <div className="absolute bottom-0 left-0 right-0 bg-[#080c14] rounded-t-2xl p-6 max-h-[70vh] overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <p
                      className="text-xs font-medium uppercase tracking-widest"
                      style={{ color: accentColor }}
                    >
                      Neste capítulo
                    </p>
                    <button
                      onClick={() => setTocOpen(false)}
                      className="text-[#a3b8cc] hover:text-white cursor-pointer"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <ul className="space-y-1">
                    {sections.map((s) => (
                      <li key={s.id}>
                        <button
                          onClick={() => scrollTo(s.id)}
                          className="text-left w-full text-sm py-2.5 px-3 rounded-md text-[#a3b8cc] hover:text-white transition-colors cursor-pointer"
                        >
                          {s.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* ── Content area ── */}
            <article className="flex-1 min-w-0 pb-24">
              {/* Chapter heading */}
              <p
                className="text-sm font-medium uppercase tracking-widest mb-3"
                style={{ color: accentColor }}
              >
                Capítulo {chapterNumber}
              </p>
              <h1 className="font-serif font-light text-3xl md:text-4xl text-white tracking-tight leading-[1.2] mb-12">
                {chapterTitle}
              </h1>

              {/* Prose content */}
              <div className="prose prose-lg prose-ebook font-serif max-w-prose">
                {children}
              </div>

              {/* ── Chapter navigation ── */}
              <nav className="mt-20 pt-8 border-t border-[rgba(0,240,255,0.08)] flex items-stretch gap-4">
                {prevChapter ? (
                  <Link
                    href={`${ebookBasePath}/${prevChapter.slug}`}
                    className="flex-1 group bg-[#080c14] border border-[rgba(0,240,255,0.08)] rounded-card p-5 hover:border-[rgba(0,240,255,0.18)] transition-all"
                  >
                    <p className="text-xs text-[#a3b8cc]/50 mb-1">
                      ← Capítulo anterior
                    </p>
                    <p className="text-sm text-white font-medium group-hover:opacity-80 transition-opacity">
                      {prevChapter.title}
                    </p>
                  </Link>
                ) : (
                  <Link
                    href={ebookBasePath}
                    className="flex-1 group bg-[#080c14] border border-[rgba(0,240,255,0.08)] rounded-card p-5 hover:border-[rgba(0,240,255,0.18)] transition-all"
                  >
                    <p className="text-xs text-[#a3b8cc]/50 mb-1">←</p>
                    <p className="text-sm text-white font-medium group-hover:opacity-80 transition-opacity">
                      Voltar ao sumário
                    </p>
                  </Link>
                )}
                {nextChapter && (
                  <Link
                    href={`${ebookBasePath}/${nextChapter.slug}`}
                    className="flex-1 group bg-[#080c14] border border-[rgba(0,240,255,0.08)] rounded-card p-5 hover:border-[rgba(0,240,255,0.18)] transition-all text-right"
                  >
                    <p className="text-xs text-[#a3b8cc]/50 mb-1">
                      Próximo capítulo →
                    </p>
                    <p className="text-sm text-white font-medium group-hover:opacity-80 transition-opacity">
                      {nextChapter.title}
                    </p>
                  </Link>
                )}
              </nav>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
