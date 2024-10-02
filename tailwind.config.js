/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-purple': '#c9a3fe',
        'main-border': '#272647',
        'main-gray': '#9090b7'
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(86deg, #0d0d29, #16162a)'
      },
      borderColor: {
        'main-border': '#272647'
      },
      fontFamily: {
        exo: ['Exo', 'sans-serif']
      },
      fontWeight: {
        'exo-semibold': 600
      }
    }
  },
  plugins: []
}
