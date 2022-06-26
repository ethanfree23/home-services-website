/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('../src/img/HeroImg.png')",
      }
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
