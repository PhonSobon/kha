const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kantumruy: ['"Kantumruy Pro"', "sans-serif"],
      },
      fontSize: {
        navbar: "18 px",
        content: "13 px",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
