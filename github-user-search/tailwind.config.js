/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './public/index.html'// Include all relevant file types in your src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  theme: {
      extend: {
          colors: {
              background: 'var(--background-color)',
              primary: 'var(--color)',
              link: '#646cff',
              'hover-link': '#535bf2',
              surface: '#f9f9f9',
          },
          fontSize: {
              '3.2em': '3.2em',
          },
      },
  },
};
