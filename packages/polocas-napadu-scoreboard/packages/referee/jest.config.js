const base = require("../../jest.config.base.js");
const pack = require('./package');

module.exports = {
  ...base,
  displayName: 'Referee control panel',
  name: pack.name,
  rootDir: '../../',
};
