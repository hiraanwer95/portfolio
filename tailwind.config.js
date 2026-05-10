/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        kjColorRedLight: '#f3c6dd',
        kjColorPrime: '#e45447',
        kjColorPrimeLight: '#d8c7b8',
        kjColorLight: '#f2f0ee',
        kjColorDark: '#2b2929',
        kjColorGray: '#58595b',
        kjColorSecondaryLight: '#bab6b5',
        kjColorSecondary: '#607393',
        kjColorGold: '#e29d51',
        kjColorBlack: '#0d1017',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      height: {
        128: '320px',
        256: '600px',
      },
      width: {
        128: '320px',
      },
    },
  },
  plugins: [],
}

