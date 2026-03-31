import Link from "next/link";
import { COLORS } from "@/lib/tokens";
import { VERTICAL_MAP, type VerticalConfig } from "@/lib/verticals";

interface LogoProps {
  variant?: "parent" | VerticalConfig["id"];
  onDark?: boolean;
  size?: "sm" | "md" | "lg";
  showCommunity?: boolean;
}

const sizeClass = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
};

export default function Logo({
  variant = "parent",
  onDark = false,
  size = "md",
  showCommunity = false,
}: LogoProps) {
  const techColor =
    variant === "parent"
      ? COLORS.neon.cyan
      : VERTICAL_MAP[variant as VerticalConfig["id"]]?.logoColor ?? COLORS.jade[600];

  const medColor = onDark ? COLORS.neutral[50] : COLORS.neutral[950];

  return (
    <Link
      href="/"
      aria-label="MedTech Community — Página inicial"
      className={`font-sans font-medium tracking-tight ${sizeClass[size]} flex items-baseline gap-0`}
    >
      <span style={{ color: medColor }}>Med</span>
      <span style={{ color: techColor }}>Tech</span>
      {showCommunity && (
        <span
          className="ml-1.5 text-sm font-normal"
          style={{ color: onDark ? COLORS.neutral[400] : COLORS.neutral[400] }}
        >
          Community
        </span>
      )}
    </Link>
  );
}
