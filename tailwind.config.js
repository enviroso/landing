module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    colors: {
      accent: "#5DC192",
      black: "#010101",
      blackMuted: "#0B0B0B",
      white: "#FFFFFF",
      whiteMuted: "#CACACA",
      blue: "#217AFF",
      orange: "#C16F5D",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
