import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050507",
        surface: "#111214",
        "surface-light": "#1a1c23",
        "electric-cyan": "#00e5ff",
        "electric-blue": "#00b4d8",
        gold: "#d4af37",
        "gold-light": "#f0d78c",
        "gold-dark": "#b8972e",
        text: {
          primary: "#f5f5f7",
          secondary: "#a1a1aa",
          muted: "#71717a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px rgba(0, 229, 255, 0.15)",
        "glow-gold": "0 0 25px rgba(212, 175, 55, 0.2)",
        "glow-strong": "0 0 40px rgba(0, 229, 255, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh": "linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
