const path = require("path");
const withCSS = require("@zeit/next-css");

module.exports = {
  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["public"] = path.join(__dirname, "public");

    return config;
  },
};
