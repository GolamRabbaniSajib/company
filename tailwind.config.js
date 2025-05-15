import { keepTheme } from "keep-react/keepTheme";
/** @type {import('tailwindcss').Config} */
const config  = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {   
       backgroundImage: {
      'custom-gradient': 'linear-gradient(0deg, rgba(0,212,255,1) 0%, rgba(2,0,36,1) 100%)',
    },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'], // Add Rubik to Tailwind configuration
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
    },
  },
  plugins: [],
};

export default keepTheme(config);