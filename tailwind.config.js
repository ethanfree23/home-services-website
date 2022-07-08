/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('../src/img/hero.jpeg')",
      },
      dropShadow: {
        apple: '0 1px 3px rgba(0, 0, 0, 0.3)',
      },
      boxShadow: {
        apple: '0 1px 3px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
