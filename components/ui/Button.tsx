import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md";
  verticalColor?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
}

const baseClass =
  "inline-flex items-center justify-center font-sans font-medium text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

const sizeClass = { sm: "h-9 px-4", md: "h-11 px-6" };

const variantClass = {
  primary:   "rounded-button bg-[#00f0ff] text-[#02040a] font-semibold hover:bg-[#33f5ff] focus-visible:outline-[#00f0ff] shadow-[0_0_24px_rgba(0,240,255,0.3)] hover:shadow-[0_0_32px_rgba(0,240,255,0.45)]",
  secondary: "rounded-button border border-[#00f0ff]/50 text-[#00f0ff] hover:border-[#00f0ff] hover:shadow-[0_0_16px_rgba(0,240,255,0.2)] hover:bg-[#00f0ff]/5",
  tertiary:  "text-[#00f0ff] hover:text-[#33f5ff] px-0",
};

export default function Button({
  variant = "primary",
  size = "md",
  verticalColor,
  href,
  onClick,
  children,
  className = "",
  disabled = false,
  type = "button",
  target,
  rel,
}: ButtonProps) {
  const inlineStyle = verticalColor
    ? variant === "primary"
      ? { backgroundColor: verticalColor, color: "#ffffff" }
      : variant === "secondary"
      ? { borderColor: verticalColor, color: verticalColor }
      : { color: verticalColor }
    : undefined;

  const classes = `${baseClass} ${sizeClass[size]} ${variantClass[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} style={inlineStyle} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={inlineStyle}
    >
      {children}
    </button>
  );
}
