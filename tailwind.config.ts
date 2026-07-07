import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand palette — see design notes in README.
        ink: {
          DEFAULT: "#0B0E14",
          50: "#F4F5F7",
          100: "#E4E6EB",
          200: "#C3C8D2",
          300: "#93A0AF",
          400: "#5B6879",
          500: "#374253",
          600: "#252E3D",
          700: "#171E29",
          800: "#0F141C",
          900: "#0B0E14",
          950: "#070911",
        },
        ivory: {
          DEFAULT: "#F7F4EE",
          100: "#FFFFFF",
          200: "#FBF9F5",
          300: "#F7F4EE",
          400: "#EFE9DD",
          500: "#E8DFCF",
        },
        champagne: {
          DEFAULT: "#C9A869",
          100: "#F3EAD7",
          200: "#E8D6AE",
          300: "#DCC287",
          400: "#C9A869",
          500: "#B08D4C",
          600: "#8C6E3A",
        },
        teal: {
          DEFAULT: "#10403F",
          50: "#E4EFEE",
          100: "#BFDAD8",
          200: "#8FBEBB",
          300: "#4E8E8A",
          400: "#245F5C",
          500: "#10403F",
          600: "#0B302F",
          700: "#082221",
          800: "#051615",
          900: "#020C0B",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%220.035%22/></svg>')",
      },
      boxShadow: {
        soft: "0 8px 40px -12px rgba(11,14,20,0.25)",
        glow: "0 0 0 1px rgba(201,168,105,0.25), 0 20px 60px -20px rgba(201,168,105,0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-24px) translateX(10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "draw-line": {
          from: { strokeDashoffset: "1" },
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 11s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
