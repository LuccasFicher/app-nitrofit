/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00FFFF', // Azul neon/ciano
        secondary: '#000000', // Preto
        accent: '#FFFFFF', // Branco
        background: {
          light: '#FFFFFF',
          dark: '#000000',
        },
        text: {
          light: '#000000',
          dark: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};