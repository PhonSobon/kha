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
        battambang: ['"Battambang"', "sans-serif"],
        kantumruy: ['"Kantumruy Pro"', "sans-serif"],
        khmer: ['"Khmer"', "sans-serif"],
        noto: ['"Noto Sans Khmer"', "sans-serif"],
        siemreap: ['"Siemreap"', "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};