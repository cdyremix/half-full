/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // make sure this matches your src structure
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        dodger: {
          light: '#1E90FF',
          DEFAULT: '#005A9C', // approximate LA Dodgers blue
          dark: '#003366'
        }
      }
    }
  },
  plugins: [] // THIS is what was breaking it before
};
