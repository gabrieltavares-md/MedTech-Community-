import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ChapterReader from "@/components/pages/ChapterReader";
import { DOMINANDO_CLAUDE } from "@/content/dominando-claude";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return DOMINANDO_CLAUDE.chapters.map((ch) => ({ slug: ch.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const chapter = DOMINANDO_CLAUDE.chapters.find((c) => c.slug === params.slug);
  if (!chapter) return { title: "Capítulo não encontrado" };

  return {
    title: `${chapter.title} — Dominando a Claude | MedTech AI`,
    description: chapter.summary,
  };
}

export default function ChapterPage({ params }: PageProps) {
  const chapter = DOMINANDO_CLAUDE.chapters.find((c) => c.slug === params.slug);
  if (!chapter) notFound();

  return <ChapterReader chapter={chapter} ebook={DOMINANDO_CLAUDE} />;
}
