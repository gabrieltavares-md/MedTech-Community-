interface CardProps {
  children: React.ReactNode;
  className?: string;
  accentColor?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  dark?: boolean;
  onClick?: () => void;
}

const paddingClass = { sm: "p-4", md: "p-6", lg: "p-8" };

export default function Card({
  children,
  className = "",
  accentColor,
  hover = true,
  padding = "md",
  dark = false,
  onClick,
}: CardProps) {
  const baseClasses = dark
    ? "bg-[#1A1A1A] border border-[#333333] rounded-card"
    : "bg-white border border-neutral-100 rounded-card";

  const hoverClasses = hover
    ? "transition-all duration-200 hover:border-neutral-400 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:scale-[1.02] cursor-pointer"
    : "";

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${paddingClass[padding]} ${hoverClasses} ${className}`}
    >
      {accentColor && (
        <div
          className="h-[3px] w-full rounded-t-card -mt-6 -mx-6 mb-5"
          style={{ backgroundColor: accentColor, width: "calc(100% + 3rem)" }}
        />
      )}
      {children}
    </div>
  );
}
