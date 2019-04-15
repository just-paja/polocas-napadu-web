const base = require("../../jest.config.base.js");
const pack = require('./package');

module.exports = {
  name: pack.name,
  projects: [
    {
      displayName: 'referee',
      setupFiles: [
        '<rootDir>/jest.setup.js',
      ],
      setupFilesAfterEnv: ['jest-enzyme/lib/index.js'],
      testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
    }
  ]
}
