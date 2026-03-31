import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EbookCover from "@/components/sections/EbookCover";
import EbookTOC from "@/components/sections/EbookTOC";
import NewsletterCTA from "@/components/sections/NewsletterCTA";
import { FUNDAMENTOS_IA } from "@/content/fundamentos-ia";

export const metadata: Metadata = {
  title: "Fundamentos da IA Generativa — Ebook Gratuito | MedTech AI",
  description:
    "Ebook gratuito sobre Inteligência Artificial Generativa: LLMs, tokens, embeddings, janela de contexto e os principais modelos de 2026. Por Gabriel Tavares.",
};

const BASE_PATH = "/ia/fundamentos-ia";

export default function EbookLandingPage() {
  return (
    <>
      <Header variant="dark" />
      <main>
        <EbookCover ebook={FUNDAMENTOS_IA} basePath={BASE_PATH} />
        <EbookTOC ebook={FUNDAMENTOS_IA} basePath={BASE_PATH} />
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
