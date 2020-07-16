const path = require('path');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {}],

  // your other plugins here
  {
    webpack: config => {
      config.resolve.alias['components'] = path.join(__dirname, 'components');
      config.resolve.alias['public'] = path.join(__dirname, 'public');

      return config;
    },
  },
]);
