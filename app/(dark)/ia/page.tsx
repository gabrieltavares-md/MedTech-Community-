import type { Metadata } from "next";
import IAPage from "@/components/pages/IAPage";

export const metadata: Metadata = {
  title: "MedTech AI — Ebooks, Guias e Cursos de Inteligência Artificial",
  description:
    "Ebooks, guidelines, kits de produtividade e cursos sobre IA generativa, prompt engineering, agentes de IA e mais. Conteúdo educacional da MedTech Community.",
};

export default function Page() {
  return <IAPage />;
}
