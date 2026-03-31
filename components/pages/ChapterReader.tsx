"use client";

import DOMPurify from "isomorphic-dompurify";
import ReaderLayout from "@/components/layout/ReaderLayout";
import type { EbookChapter, EbookMeta } from "@/content/fundamentos-ia";

interface ChapterReaderProps {
  chapter: EbookChapter;
  ebook: EbookMeta;
}

export default function ChapterReader({ chapter, ebook }: ChapterReaderProps) {
  const idx = ebook.chapters.findIndex((c) => c.slug === chapter.slug);
  const prev = idx > 0 ? ebook.chapters[idx - 1] : undefined;
  const next = idx < ebook.chapters.length - 1 ? ebook.chapters[idx + 1] : undefined;

  const basePath = `/ia/${ebook.id}`;

  return (
    <ReaderLayout
      sections={chapter.sections.map((s) => ({ id: s.id, title: s.title }))}
      chapterTitle={chapter.title}
      chapterNumber={chapter.number}
      totalChapters={ebook.chapters.length}
      prevChapter={prev ? { slug: prev.slug, title: prev.title } : undefined}
      nextChapter={next ? { slug: next.slug, title: next.title } : undefined}
      accentColor={ebook.coverColor}
      ebookBasePath={basePath}
    >
      {chapter.sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2>{section.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.content) }} />
        </section>
      ))}
    </ReaderLayout>
  );
}
