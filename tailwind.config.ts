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
        "brightOrange": "#fb7c2c",
        "lightOrange": "#fc8434",
        "burntSienna": "#a84d29",
        "oliveBrown": "#997f4a",
        "taupeGray": "#c9bfb8",
        "ghostWhite": "#F8F8FF"
      },
      fontFamily: {
        sans: ['var(--font-libreBaskerville)'],
      },
    },
  },
  plugins: [],
};
export default config;
