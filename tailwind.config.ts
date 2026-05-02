import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
        sans: ["Syne", "sans-serif"],
      },
      colors: {
        bg: "#050c14",
        bg2: "#081018",
        surface: "#0d1f2d",
        surface2: "#112436",
        accent: "#00ffe0",
        accent2: "#0099ff",
        accent3: "#ff6b35",
        text1: "#e8f4f8",
        text2: "#7a9bb5",
        text3: "#4a6b80",
        border: "rgba(0,255,224,0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "blink": {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease forwards",
        "blink": "blink 1.4s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
