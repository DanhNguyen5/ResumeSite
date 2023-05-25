/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Space Grotesk', 'sans-serif'],
        customTwo: ['Playfair', 'sans-serif'],
      },
      colors: {
        customColor: '#2F394D',
        customColorTwo: '#56666B',
        customColorThree: '#EEE1B3',
        customColorFour: '#38182F',
      },
    },
  },
  plugins: [],
  variants: {},
};
