import type { Metadata } from "next";
import CriticalCarePage from "@/components/pages/CriticalCarePage";

export const metadata: Metadata = {
  title: "MedTech Critical Care | MedTech Community",
  description:
    "Protocolos, guidelines e recursos para o cuidado do paciente crítico. ACLS, ATLS, SAVA, intubação, POCUS e anestesia regional.",
};

export default function Page() {
  return <CriticalCarePage />;
}
