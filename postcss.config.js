var tailwindcss = require('tailwindcss');

console.log('brrooo');
deb;
module.exports = {
  plugins: [
    require('postcss-import')(),
    tailwindcss('./tailwind.config.js'), //This refers to your tailwind config
    require('autoprefixer'),
  ],
};
