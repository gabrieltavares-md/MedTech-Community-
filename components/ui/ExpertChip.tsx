import { VERTICAL_MAP, type VerticalConfig } from "@/lib/verticals";

interface ExpertChipProps {
  label: string;
  verticalId: VerticalConfig["id"];
  size?: "sm" | "md";
}

export default function ExpertChip({ label, verticalId, size = "md" }: ExpertChipProps) {
  const vertical = VERTICAL_MAP[verticalId];
  const sizeClass = size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-xs";

  return (
    <span
      className={`inline-flex items-center rounded-chip font-medium font-sans ${sizeClass}`}
      style={{ backgroundColor: vertical.color.light, color: vertical.color.primary }}
    >
      {label}
    </span>
  );
}
