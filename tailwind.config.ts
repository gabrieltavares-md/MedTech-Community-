import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
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
        neutral: {
          950: "#02040a",
          800: "#1a2236",
          600: "#4a5568",
          400: "#a3b8cc",
          100: "#d1dce8",
          50:  "#f0f4f8",
        },
      },
      fontFamily: {
        sans:  ["var(--font-inter)",        "system-ui", "sans-serif"],
        serif: ["var(--font-source-serif)", "Georgia",   "serif"],
        mono:  ["var(--font-jetbrains)",    "Menlo",     "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card:   "12px",
        button: "50px",
        input:  "8px",
        chip:   "9999px",
      },
    },
  },
  plugins: [typography],
};

export default config;
