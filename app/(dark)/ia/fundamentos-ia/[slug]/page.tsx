import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ChapterReader from "@/components/pages/ChapterReader";
import { FUNDAMENTOS_IA } from "@/content/fundamentos-ia";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return FUNDAMENTOS_IA.chapters.map((ch) => ({ slug: ch.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const chapter = FUNDAMENTOS_IA.chapters.find((c) => c.slug === params.slug);
  if (!chapter) return { title: "Capítulo não encontrado" };

  return {
    title: `${chapter.title} — Fundamentos da IA Generativa | MedTech AI`,
    description: chapter.summary,
  };
}

export default function ChapterPage({ params }: PageProps) {
  const chapter = FUNDAMENTOS_IA.chapters.find((c) => c.slug === params.slug);
  if (!chapter) notFound();

  return <ChapterReader chapter={chapter} ebook={FUNDAMENTOS_IA} />;
}
