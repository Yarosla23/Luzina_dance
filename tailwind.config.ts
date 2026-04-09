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
        hero: "0",
      },
      backgroundImage: {
        "hero-glow":
          "linear-gradient(115deg, rgba(169, 58, 43, 0.18), transparent 38%), linear-gradient(245deg, rgba(120, 209, 199, 0.1), transparent 32%)",
      },
    },
  },
  plugins: [],
};

export default config;
