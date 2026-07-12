import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FAFAF8",           // Off-white — fundo geral
          surface: "#F2F2F0",      // Light gray — cards, formulários
          dark: "#0D1B2A",         // Ink Black — texto principal, fundos escuros
          ebony: "#5B5941",        // Ebony — acento secundário quente (ícones, eyebrows, outline)
          "ebony-hover": "#4A4835",
          muted: "#6B6854",        // muted derivado do Ebony — texto secundário
          border: "#E2E0DC",       // borda neutra levemente quente
          accent: "#801611",       // Crushed Berry — CTAs, botões primários, rodapé
          "accent-hover": "#6B1210",
          error: "#C0392B",
          success: "#27AE60",
          warning: "#E67E22",
        },
      },
      fontFamily: {
        sans:    ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        yantra:  ["var(--font-yantra)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "1.5rem",
          lg: "2rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      keyframes: {
        whatsappPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.12)", opacity: "0.85" },
        },
      },
      animation: {
        "whatsapp-pulse": "whatsappPulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
