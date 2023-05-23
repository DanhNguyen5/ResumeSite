/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // adding custom colors to tailwind config
    extend: { 
      colors: {
        customColor: '#2F394D',
      }
    },
  },
  plugins: [],
}