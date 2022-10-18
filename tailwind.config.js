/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Gothic: ["Nanum Gothic Coding", "monospace"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
