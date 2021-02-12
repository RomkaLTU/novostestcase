module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '40px': '40px',
      },
      maxWidth: {
        '800px': '800px',
      },
      minHeight: {
        '200px': '200px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
