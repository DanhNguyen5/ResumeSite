/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        customColor: '#2F394D',
      },
    },
  },
  plugins: [],
  variants: {},
};
