/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/app/_components/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {

    /* ---------- RESPONSIVE SYSTEM ---------- */
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "3.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },

    /* ---------- DESIGN TOKENS ---------- */
    extend: {

      /* COLORS */
      colors: {
        gold: "#FFD700",

        brand: {
          primary: "#1A1A1A",
          accent: "#C59D5F",
        },

        surface: {
          light: "#f8fafc",
          muted: "#f1f5f9",
        },
      },

      /* TYPOGRAPHY */
      fontFamily: {
        dmsans: ["var(--font-dm-sans)"],
        redhat: ["var(--font-redhat)"],
      },

      fontSize: {
        hero: ["3.25rem", { lineHeight: "1.1" }],
        h1: ["2.5rem", { lineHeight: "1.2" }],
        h2: ["2rem", { lineHeight: "1.25" }],
        h3: ["1.5rem", { lineHeight: "1.3" }],
        h4: ["1.25rem", { lineHeight: "1.4" }],
        bodylg: ["1.125rem", { lineHeight: "1.7" }],
        bodysm: ["0.875rem", { lineHeight: "1.6" }],
      },

      /* SPACING EXTENSIONS */
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },

      /* SHADOWS */
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.08)",
        card: "0 4px 12px rgba(0,0,0,0.06)",
      },

      /* RADIUS */
      borderRadius: {
        xl2: "1rem",
        xl3: "1.5rem",
      },

      /* ANIMATION (modern minimal set) */
      animation: {
        fadeUp: "fadeUp 0.6s ease forwards",
      },

      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },

  /* MUI SAFE */
  corePlugins: {
    preflight: false,
  },

  plugins: [],
};
