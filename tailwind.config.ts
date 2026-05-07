import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          primary: "#1B4332",
          dark: "#0f2a1f",
          light: "#2d6a4f",
          muted: "#40916c",
        },
        brown: {
          primary: "#8B5E3C",
          light: "#a47551",
          dark: "#6b4226",
        },
        cream: {
          DEFAULT: "#FAF7F2",
          dark: "#F0EBE3",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
