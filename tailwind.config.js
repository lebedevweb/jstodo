/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{pug,js}'],
  theme: {
    fontFamily: {
      'body': ['Poppins', 'Arial', 'sans-serif'],
    },
    extend: {
      flex: {
        '0-auto': '0 0 auto',
        '1-auto': '1 0 auto',
      },
      width: {
        '32': '2rem',
        '16': '1rem',
      },
      height: {
        '32': '2rem',
        '16': '1rem',
      },
      zIndex: {
        '900': '900',
        '1000': '1000',
      }
    },
  },
  plugins: [],
};
