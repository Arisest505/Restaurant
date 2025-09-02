/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mustard: "#D4A017",
        champagne: "#F7F3E3",
        charcoal: "#1A1A1A",
        slateSoft: "#4B4B4B",
        wine: "#5A2A27",
      },
      fontFamily: {
        sans: ["'Poppins'", ...fontFamily.sans],
        fancy: ["'Playfair Display'", "serif"], // Para títulos elegantes si deseas
      },
      boxShadow: {
        gold: "0 4px 20px rgba(212, 160, 23, 0.3)",
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.jpg')",
      },
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // opcional si deseas animaciones modernas
  ],
};
