import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EbookCover from "@/components/sections/EbookCover";
import EbookTOC from "@/components/sections/EbookTOC";
import NewsletterCTA from "@/components/sections/NewsletterCTA";
import { DOMINANDO_CLAUDE } from "@/content/dominando-claude";

export const metadata: Metadata = {
  title: "Dominando a Claude: Do Zero ao Avançado — Guia Gratuito | MedTech AI",
  description:
    "Guia completo do ecossistema Claude: Projects, Artifacts, Memory, Skills, Integrações, CoWork e Claude Code. Por Gabriel Tavares.",
};

const BASE_PATH = "/ia/dominando-claude";

export default function EbookLandingPage() {
  return (
    <>
      <Header variant="dark" />
      <main>
        <EbookCover ebook={DOMINANDO_CLAUDE} basePath={BASE_PATH} />
        <EbookTOC ebook={DOMINANDO_CLAUDE} basePath={BASE_PATH} />
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
