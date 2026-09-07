import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070d",
          900: "#0a0f1c",
          800: "#111a2e",
          700: "#1b2740",
        },
        brand: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
        },
        accent: {
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        gridDrift: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "48px 48px" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        shimmer: "shimmer 6s linear infinite",
        pulseRing: "pulseRing 3s ease-out infinite",
        gridDrift: "gridDrift 12s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
