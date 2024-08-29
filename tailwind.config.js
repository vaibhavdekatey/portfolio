/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#051A17",
        secondary: "#04262A",
        tertiary: "#030f0e",
        txt_primary: "#47ffd2",
        txt_secondary: "#e7583d",
        highlightColor: "#f2c788",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
        raleway: ["Raleway", "sans-serif"],
        robotoMono: ["Roboto Mono", "monospace"],
        urbanist: ["Urbanist", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
