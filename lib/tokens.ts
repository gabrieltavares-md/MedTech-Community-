export const COLORS = {
  neon: {
    cyan:  "#00f0ff",
    blue:  "#0088ff",
    400:   "#33f5ff",
    600:   "#00c4d4",
  },
  space: {
    950: "#02040a",
    900: "#080c14",
    800: "#0d1120",
    700: "#121829",
  },
  jade: {
    900: "#0F1A14",
    600: "#1B6B54",
    400: "#2CA57E",
    200: "#7DCDB0",
    50:  "#E8F5F0",
  },
  indigo: {
    900: "#0D1330",
    600: "#3B4ABF",
    400: "#6370E0",
    200: "#B0B8F5",
    50:  "#ECEEFB",
  },
  terra: {
    900: "#2A1210",
    600: "#B84430",
    400: "#E06B4F",
    200: "#F5B8A8",
    50:  "#FDF0EC",
  },
  steel: {
    900: "#0C1B30",
    600: "#1A5C99",
    400: "#3D8DD4",
    200: "#9CC5ED",
    50:  "#E8F1FA",
  },
  neutral: {
    950: "#111111",
    800: "#333333",
    600: "#666666",
    400: "#888888",
    100: "#E5E5E5",
    50:  "#FAFAFA",
  },
} as const;

export const TYPOGRAPHY = {
  hero:    { size: "56px", weight: 300, letterSpacing: "-1px",    lineHeight: 1.1 },
  h1:      { size: "40px", weight: 500, letterSpacing: "-0.5px",  lineHeight: 1.2 },
  h2:      { size: "28px", weight: 500, letterSpacing: "-0.3px",  lineHeight: 1.3 },
  h3:      { size: "22px", weight: 500, letterSpacing: "0",       lineHeight: 1.4 },
  bodyLg:  { size: "18px", weight: 400, letterSpacing: "0",       lineHeight: 1.7 },
  body:    { size: "16px", weight: 400, letterSpacing: "0",       lineHeight: 1.7 },
  caption: { size: "14px", weight: 400, letterSpacing: "0",       lineHeight: 1.5 },
  label:   { size: "12px", weight: 500, letterSpacing: "0.5px",   lineHeight: 1.4 },
} as const;

export const SPACING = {
  xs:   "8px",
  sm:   "16px",
  md:   "24px",
  lg:   "32px",
  xl:   "48px",
  xxl:  "64px",
  hero: "96px",
} as const;

export const MOTION = {
  duration:     0.4,
  ease:         "easeOut",
  staggerDelay: 0.1,
  hoverScale:   1.02,
  transition:   0.2,
} as const;
