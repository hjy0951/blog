/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        108: "27rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
