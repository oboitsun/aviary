module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myGreen: "#79B657",
        myOrange: "#F5BD36",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
