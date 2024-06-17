import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        lightprimary: "#e2e2e7",
      },
      animation: {
        rtl: "rtl 12s 0.95s linear infinite",
      },
      keyframes: {
        rtl: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(calc(-100% - 20px))" },
        },
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        suisse: "var(--font-suisse)",
      },
    },
  },
  plugins: [],
};
export default config;
