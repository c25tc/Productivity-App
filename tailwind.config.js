/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#BAD6EA",
        pink: "#EABABA",
        green: "#BAEAE7",
        orange: "#F1D2C5",
      },
    },
  },
  plugins: [],
};
