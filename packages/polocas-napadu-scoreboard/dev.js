const { resolve } = require('path')

function getBabelConfig () {
  return {
    plugins: ['@babel/plugin-proposal-class-properties'],
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/preset-react'
    ]
  }
}

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
      'react-app-polyfill/jsdom',
      resolve(path, 'jest.setup.js')
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

function getPackageTestConfig (path, projects, config = {}) {
  return {
    rootDir: path,
    projects,
    watchPlugins: [
      'jest-watch-select-projects',
      'jest-watch-suspend',
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname'
    ],
    ...config,
  }
}

function getSuiteIdent (pack, specifier) {
  return `${pack.name}-${specifier}`
}

function getSuiteName (pack, specifier) {
  return `${pack.name.replace('polocas-napadu-', '')} ${specifier}`
}

function setupJest () {
  const Enzyme = require('enzyme').default
  const Adapter = require('enzyme-adapter-react-16').default
  Enzyme.configure({ adapter: new Adapter() })
}

module.exports = {
  getBabelConfig,
  getIntegrationTestConfig,
  getLinterTestConfig,
  getPackageTestConfig,
  getSuiteName,
  setupJest
}
