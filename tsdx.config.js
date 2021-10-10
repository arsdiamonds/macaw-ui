const svg = require("rollup-plugin-svg");
const image = require("@rollup/plugin-image");

module.exports = {
  rollup(config) {
    config.plugins.push(svg());
    config.plugins.push(image());
    return config;
  },
};
