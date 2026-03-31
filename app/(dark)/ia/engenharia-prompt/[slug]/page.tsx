import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ChapterReader from "@/components/pages/ChapterReader";
import { ENGENHARIA_PROMPT } from "@/content/engenharia-prompt";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return ENGENHARIA_PROMPT.chapters.map((ch) => ({ slug: ch.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const chapter = ENGENHARIA_PROMPT.chapters.find((c) => c.slug === params.slug);
  if (!chapter) return { title: "Capítulo não encontrado" };

  return {
    title: `${chapter.title} — Engenharia de Prompt | MedTech AI`,
    description: chapter.summary,
  };
}

export default function ChapterPage({ params }: PageProps) {
  const chapter = ENGENHARIA_PROMPT.chapters.find((c) => c.slug === params.slug);
  if (!chapter) notFound();

  return <ChapterReader chapter={chapter} ebook={ENGENHARIA_PROMPT} />;
}
