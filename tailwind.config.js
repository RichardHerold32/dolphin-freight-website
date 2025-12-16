/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#005f99",
          dark: "#012639",
          light: "#eaf7ff",
          accent: "#ffd65b",
        },
      },
    },
  },
  plugins: [],
};
