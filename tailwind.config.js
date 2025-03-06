/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "serif"],
        raleway: ["Raleway", "sans-serif"],
        lora: ["Lora", "serif"],
        playfair: ["Playfair Display", "serif"],
        libre: ["Libre Caslon Display", "serif"],
      },
      colors: {
        background: "#151515", //Chinese Black
        white: "#FFFFFF",
        explosivegrey: "#cdcdcd",
        brightgrey: "#E4E8EF",
        raisinblack: "#1E1F23",
        lightgrey: "#FAFAFA",
        fullblack: "#000000",
        black: "#101010",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "10px",
          md: "15px",
          lg: "20px",
          xl: "50px",
        },
      },
    },
  },
  plugins: [],
};
