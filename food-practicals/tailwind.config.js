/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f47c7c",
        secondary: "#ef9f9f",
        tertiary: "#fad4d4",
        text: "#fff2f2",
      },
      fontFamily: {
        title: ["Lato", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
        cursive: ["Roboto Mono", "monospace"],
      },
      screens: {
        xxs: "320px",
        xs: "410px",
      },
    },
  },
  plugins: [],
};
