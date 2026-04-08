import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        line: "var(--line)",
        muted: "var(--muted)",
        accent: {
          DEFAULT: "var(--accent)",
          strong: "var(--accent-strong)",
        },
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.38)",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.5rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      letterSpacing: {
        hero: "-0.06em",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(125, 16, 16, 0.34), transparent 38%), radial-gradient(circle at 85% 20%, rgba(255, 255, 255, 0.05), transparent 18%)",
      },
    },
  },
  plugins: [],
};

export default config;
