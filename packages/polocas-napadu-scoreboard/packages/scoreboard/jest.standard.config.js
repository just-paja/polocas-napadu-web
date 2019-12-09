const pack = require('./package')
const { getSuiteName } = require('../../dev')

module.exports = {
  displayName: getSuiteName(pack, 'linter'),
  rootDir: __dirname,
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
}
