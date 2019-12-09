const base = require("../../jest.config.base.js");
const pack = require('./package');

module.exports = {
  displayName: `${pack.name} linter`,
  runner: 'jest-runner-standard',
  testMatch: [
    '<rootDir>/**/*.{js,jsx}'
  ],
  testPathIgnorePatterns: [
    '/build/',
    '/coverage/',
    '/node_modules/',
    '/static/'
  ]
};
