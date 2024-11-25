/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'primary': "#DDFF00FF",
        'secondary': '#12D3F5FF',
        'tertiary': '#610101FF',
        'quaternary': '#C6C2C2FF',
        'quinary': '#F2F2F2',
      },
      fontFamily:{
        montserrat: ["Montserrat", "sans-serif"],
        playfair: [ "Playfair", "serif"],
        iceberg: ["Iceberg", "sans-serif"],
      }
    },
  },
  plugins: [],
}

