const base = require("../../jest.config.base.js");
const pack = require('./package');

module.exports = {
  ...base,
  displayName: 'Inspirations form',
  name: pack.name,
  rootDir: '../../',
};
