module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Montserrat', 'system-ui'],
      display: ['Mulish', 'system-ui'],
    },
    extend: {
      spacing: {
        112: '28rem',
        '2/3': '66.666667%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
