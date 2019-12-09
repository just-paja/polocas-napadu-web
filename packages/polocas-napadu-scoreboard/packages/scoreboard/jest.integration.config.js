const pack = require('./package')
const { resolve } = require('path')
const { getSuiteName } = require('../../dev')

module.exports = {
  displayName: getSuiteName(pack, 'integration'),
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/../../__mocks__/fileMock.js'
  },
  rootDir: __dirname,
  roots: [
    '<rootDir>',
    resolve(__dirname, '..')
  ],
  testMatch: [
    '<rootDir>/**/__tests__/*.{js,jsx}'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}'
  ],
  setupFiles: [
    'react-app-polyfill/jsdom'
  ],
  testPathIgnorePatterns: [
    '/build/',
    '/coverage/',
    '/node_modules/',
    '/static/'
  ]
}
