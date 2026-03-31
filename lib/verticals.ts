import { COLORS } from "./tokens";

export interface VerticalConfig {
  id:          "ia" | "critical-care" | "anestesiologia";
  name:        string;
  shortName:   string;
  route:       string;
  color:       { primary: string; hover: string; light: string };
  logoColor:   string;
  description: string;
  ctaLabel:    string;
}

export const VERTICALS: VerticalConfig[] = [
  {
    id:          "ia",
    name:        "MedTech AI",
    shortName:   "IA",
    route:       "/ia",
    color:       { primary: COLORS.indigo[600], hover: COLORS.indigo[400], light: COLORS.indigo[50] },
    logoColor:   COLORS.indigo[600],
    description: "Domine ferramentas de IA, prompt engineering e automação para potencializar seus estudos e prática clínica.",
    ctaLabel:    "Explorar IA",
  },
  {
    id:          "critical-care",
    name:        "MedTech Critical Care",
    shortName:   "Critical Care",
    route:       "/critical-care",
    color:       { primary: COLORS.terra[600], hover: COLORS.terra[400], light: COLORS.terra[50] },
    logoColor:   COLORS.terra[600],
    description: "Protocolos, calculadoras e conteúdo baseado em evidência para o cuidado do paciente crítico.",
    ctaLabel:    "Explorar Critical Care",
  },
  {
    id:          "anestesiologia",
    name:        "MedTech Anesthesiology",
    shortName:   "Anestesiologia",
    route:       "/anestesiologia",
    color:       { primary: COLORS.steel[600], hover: COLORS.steel[400], light: COLORS.steel[50] },
    logoColor:   COLORS.steel[600],
    description: "Preparação TSA, capítulos atualizados, questões e flashcards para dominar a especialidade.",
    ctaLabel:    "Explorar Anestesiologia",
  },
];

export const VERTICAL_MAP = Object.fromEntries(
  VERTICALS.map((v) => [v.id, v])
) as Record<VerticalConfig["id"], VerticalConfig>;
