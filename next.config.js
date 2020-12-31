const withCSS = require('@zeit/next-css');
const withReactSvg = require('next-react-svg')
const path = require("path");

module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
  },
});

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public'),
  webpack(config, options) {
    return config;
  }
});
