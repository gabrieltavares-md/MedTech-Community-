import type { Metadata } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MedTech Community — Traduzindo tecnologia em linguagem simples",
  description:
    "Conteúdo educacional de alta qualidade sobre IA, Terapia Intensiva e Anestesiologia para profissionais de saúde.",
};

export default function DarkLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${inter.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#02040a] text-white font-sans antialiased">{children}</body>
    </html>
  );
}
