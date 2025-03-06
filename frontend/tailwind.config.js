/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "own-bg": "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500",
      }
    },
  },
  plugins: [],
}