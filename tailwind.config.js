/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        108: "27rem",
      },
      typography: {
        dark: {
          css: {
            color: "rgb(203 213 225)",
            p: {
              color: "rgb(203 213 225)",
            },
            a: {
              color: "white",
            },
            strong: {
              color: "white",
            },
            code: {
              color: "white",
            },
            h3: {
              color: "white",
            },
            h2: {
              color: "white",
            },
            h1: {
              color: "white",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
