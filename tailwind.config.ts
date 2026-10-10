import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#05060B",
        surface: "#0C1020",
        "surface-soft": "#11162A",
        "text-primary": "#F7F8FF",
        "text-muted": "#A7AEC5",
        purple: {
          DEFAULT: "#8B35FF",
          glow: "rgba(139, 53, 255, 0.4)",
        },
        violet: "#C15BFF",
        "electric-blue": "#168BFF",
        cyan: "#55D8FF",
        "border-glow": "rgba(153, 139, 255, 0.22)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      boxShadow: {
        "glow-purple": "0 0 30px rgba(139, 53, 255, 0.35)",
        "glow-blue": "0 0 30px rgba(22, 139, 255, 0.35)",
        "glow-cyan": "0 0 25px rgba(85, 216, 255, 0.4)",
        "card-glow": "0 10px 30px -10px rgba(139, 53, 255, 0.25)",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at center, var(--tw-gradient-stops))",
        "conic-gradient": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 25s linear infinite",
        "orbit-rotate": "orbit 20s linear infinite",
        "scanline": "scanline 8s linear infinite",
        "crt-flicker": "flicker 0.15s infinite",
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        flicker: {
          "0%": { opacity: "0.98" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.96" },
        }
      }
    },
  },
  plugins: [],
};

export default config;
