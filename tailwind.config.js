/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    // './pages/**/*.{html,js}',
    // './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        DarkMagenta: 'hsl(300, 43%, 22%)',
        softPink: 'hsl(333, 80%, 67%)',
        DarkGrayishMagenta: 'hsl(303, 10%, 53%)',
        LightGrayishMagenta: 'hsl(300, 24%, 96%)',
      },
    },
    fontFamily: {
      'spartan': ['League Spartan', 'sans-serif']
    },
  },
  plugins: [],
}