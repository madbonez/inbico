/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    extend: {
      width: {
        container: '1024px',
        containerThird: '390px',
        containerTwoOfThree: '780px'
      },
      colors: {
        nepal: '#3a526a',
        blue: '#01a8f5',
        blueAccent: '#1285ba',
        grayBg: '#f1f1f1'
      }
    }
  },
  plugins: [],
}
