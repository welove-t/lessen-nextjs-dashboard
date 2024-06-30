const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  semi: false,
  singleQuote: true,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
