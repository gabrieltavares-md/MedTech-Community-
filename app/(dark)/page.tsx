import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import VerticalCards from "@/components/sections/VerticalCards";
import ProductGrid from "@/components/sections/ProductGrid";
import NewsletterCTA from "@/components/sections/NewsletterCTA";

export default function HomePage() {
  return (
    <>
      <Header variant="dark" />
      <main>
        <Hero
          badge="MedTech Community"
          headline="MedTech Community"
          subheading="A porta de entrada para as comunidades de IA, Estudos sobre Anestesiologia e Terapia Intensiva, Medicina Perioperatória, Urgências e Emergências no Centro Cirúrgico. Aprenda a conciliar as novas tecnologias à sua prática clínica e esteja bem posicionado para o futuro do mercado de trabalho."
          ctaPrimary={{ label: "Começar Exploração", href: "#trilhas" }}
          ctaSecondary={{ label: "Ver Documentação", href: "/sobre" }}
        />
        <VerticalCards id="trilhas" />
        <ProductGrid />
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
