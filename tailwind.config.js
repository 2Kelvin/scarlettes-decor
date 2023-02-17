/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        windsong: ["WindSong", ...defaultTheme.fontFamily.serif],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
