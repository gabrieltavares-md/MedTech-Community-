import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EbookCover from "@/components/sections/EbookCover";
import EbookTOC from "@/components/sections/EbookTOC";
import NewsletterCTA from "@/components/sections/NewsletterCTA";
import { ENGENHARIA_PROMPT } from "@/content/engenharia-prompt";

export const metadata: Metadata = {
  title: "Engenharia de Prompt — Ebook Gratuito | MedTech AI",
  description:
    "Ebook gratuito sobre Engenharia de Prompt: PCTF, Few-Shot, Chain-of-Thought, Prompt Chaining, RAG, Meta Prompting e Context Engineering. Por Gabriel Tavares.",
};

const BASE_PATH = "/ia/engenharia-prompt";

export default function EbookLandingPage() {
  return (
    <>
      <Header variant="dark" />
      <main>
        <EbookCover ebook={ENGENHARIA_PROMPT} basePath={BASE_PATH} />
        <EbookTOC ebook={ENGENHARIA_PROMPT} basePath={BASE_PATH} />
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
