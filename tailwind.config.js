/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Inter", "sans"],
        windsong: ["WindSong", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        weddings: "url('/resources/images/decor-wedding.jpg')",
        graduations: "url('/resources/images/decor (17).jpg')",
        picnics: "url('/resources/images/decor (13).jpg')",
        proposal: "url('/resources/images/decor-propose.jpg')",
        babyshower: "url('/resources/images/decor (9).jpg')",
        anniversary: "url('/resources/images/decor (5).jpg')",
        birthday: "url('/resources/images/decor (15).jpg')",
        cooporate: "url('/resources/images/decor (18).jpg')",
      },
    },
  },
  plugins: [],
};
