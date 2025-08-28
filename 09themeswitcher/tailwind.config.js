/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // adjust depending on your setup
  ],
  darkMode: "class",   // 👈 Enables dark mode using a "dark" class
  theme: {
    extend: {},
  },
  plugins: [],
}
