import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ptpn: {
          green: "#1a9c5b",
          greenDark: "#0f7a44",
          greenLight: "#e8f7ef",
          leaf: "#7ac943",
          teal: "#00a19a",
          blue: "#2196f3",
          navy: "#1b3a6b",
        },
        ink: {
          900: "#1f2937",
          800: "#2b3544",
          700: "#374151",
          600: "#4b5563",
          500: "#6b7280",
          400: "#9ca3af",
          300: "#d1d5db",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["10px", "13px"],
        "3xs": ["9px", "12px"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(16,24,40,0.06), 0 1px 2px rgba(16,24,40,0.04)",
        cardHover: "0 4px 12px rgba(16,24,40,0.08)",
        pill: "0 2px 8px rgba(26,156,91,0.25)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.35)" },
        },
        ripple: {
          "0%": { transform: "scale(0.4)", opacity: "0.55" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
        ripple: "ripple 3.6s ease-out infinite",
        floaty: "floaty 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
