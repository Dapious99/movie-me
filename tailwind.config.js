/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sansSerif: ["sans-serif"],
        FiraSans: ["Fira Sans", "sans-serif"],
      },
      screens: {
        xl: { min: "851px" },
        lg: { min: "761px", max: "850px" },
        md: { min: "521px", max: "760px" },
        sm: { min: "381px", max: "520px" },
        xs: { max: "380px" },
      },
    },
  },
  plugins: [],
};
