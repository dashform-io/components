/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          60: "#793DE1",
          80: "#521CB0",
          100: "#3A137C",
        },
        gray: {
          60: "#F2F2F2",
          100: "#808080",
        },
      },
    },
  },
  plugins: [],
};
