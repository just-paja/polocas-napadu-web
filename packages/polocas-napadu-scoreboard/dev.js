const { resolve } = require('path')

function getIntegrationTestConfig (pack, path) {
  return {
    displayName: getSuiteName(pack, 'integration'),
    name: getSuiteIdent(pack, 'linter'),
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/../../__mocks__/fileMock.js'
    },
    rootDir: path,
    roots: [
      '<rootDir>',
      resolve(path, '..')
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
}

function getLinterTestConfig (pack, path) {
  return {
    displayName: getSuiteName(pack, 'linter'),
    name: getSuiteIdent(pack, 'linter'),
    rootDir: path,
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
}

function getPackageTestConfig (path, ...projects) {
  return {
    rootDir: path,
    projects,
    watchPlugins: ['jest-watch-select-projects']
  }
}

function getSuiteIdent (pack, specifier) {
  return `${pack.name}-${specifier}`
}

function getSuiteName (pack, specifier) {
  return `${pack.name.replace('polocas-napadu-', '')} ${specifier}`
}

module.exports = {
  getIntegrationTestConfig,
  getLinterTestConfig,
  getPackageTestConfig,
  getSuiteName
}
