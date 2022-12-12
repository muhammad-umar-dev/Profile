/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    container: {
      center: true,
      screens: {
        'xl': { 'max': '1279px' },
        'lg': { 'max': '1023px' },
        'md': { 'max': '767px' },
        'sm': { 'max': '639px' },
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        darknavy: '#020c1b',
        navy: '#0a192f',
        lightnavy: '#112240',
        lightestnavy: '#233554',
        navyshadow: 'rgba(2,12,27,0.7)',
        darkslate: '#495670',
        slate: '#8892b0',
        lightslate: '#a8b2d1',
        lightestslate: '#ccd6f6',
        white: '#e6f1ff',
        green: '#64ffda',
        greentint: 'rgba(100, 255, 218, 0.1)',
        pink: '#f57dff',
        blue: '#57cbff'
      },

    },
    fontFamily: {
      sans: ['"Calibre"', '"Inter"', '"San// Francisco"', '"SF// Pro Text"'],
      mono: ['"SF// Mono"', '"Fira// Code"', '"Fira// Mono"', '"Roboto// Mono"', '"monospace"']
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
