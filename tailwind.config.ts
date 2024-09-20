// /** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": { min: "1535px" },
        // => @media (min-width: 1535px) { ... }
        "2xl": { min: "1430px" },
        // => @media (min-width: 1430px) { ... }
        xl: { min: "1290px" },
        // => @media (min-width: 1290px) { ... }
        lg: { min: "1023px" },
        // => @media (min-width: 1023px) { ... }
        md: { min: "767px" },
        // => @media (min-width: 767px) { ... }
        sm: { min: "539px" },
        // => @media (min-width: 539px) { ... }
      },
      colors: {
        primary: {
          100: "#07484A",
          200: "#70908B",
        },
      },
    },
  },
  plugins: [],
};

export default config;
