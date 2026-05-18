import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
      },
      colors: {
        bg: "#EBE8E3",    // Off-white estilo Odin's Crow
        black: "#1A1A1A", // Preto denso
        brand: "#FF4A00", // Acento de cor (opcional para hover)
      },
    },
  },
  plugins: [],
} satisfies Config;
