const { heroui } = require("@heroui/react");
const clipPath = require('tailwind-clip-path');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kantumruy: ['"Kantumruy Pro"', "sans-serif"],
      },
      fontSize: {
        navbar: "18px",
        content: "13px",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui(), clipPath],
};
