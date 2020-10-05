const fs = require('fs')
const os = require('os')
const path = require('path')
const rimraf = require('rimraf')

function getBabelConfig () {
  const projectNames = fs
    .readdirSync(path.join(__dirname, 'packages'), { withFileTypes: true })
    .filter(item => item.isDirectory())
    .map(item => item.name)
  return {
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ]
    ],
    plugins: ['@babel/plugin-proposal-class-properties']
  }
}

function getIntegrationTestConfig (pack, path, extraConfig) {
  return {
    displayName: getSuiteName(pack, 'integration'),
    name: getSuiteIdent(pack, 'integration'),
    rootDir: path,
    roots: ['<rootDir>'],
    testPathIgnorePatterns: ['/build/', '/coverage/', '/node_modules/'],
    coveragePathIgnorePatterns: ['build', 'debug'],
    transformIgnorePatterns: ['node_modules/(?!((jest-)/.*))'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'mjs', 'node'],
    transform: {
      '^.+\\.(js|jsx|mjs)$': 'babel-jest',
      '^.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
    },
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/../../__mocks__/fileMock.js'
    },
    setupFilesAfterEnv: [
      'jest-enzyme',
      'jest-extended',
      '<rootDir>/../../jest.setup.js'
    ],
    ...extraConfig
  }
}

function getLinterTestConfig (pack, path) {
  return {
    displayName: getSuiteName(pack, 'linter'),
    name: getSuiteIdent(pack, 'linter'),
    rootDir: path,
    runner: 'jest-runner-standard',
    testMatch: ['<rootDir>/**/*.{js,jsx}'],
    testPathIgnorePatterns: [
      '/build/',
      '/coverage/',
      '/node_modules/',
      '/static/',
      '/polocas-napadu-core/',
      '/core/constants',
      '/core/context',
      '/core/index',
      '/core/sides',
      '/core/proptypes',
      '/core/clientLogger'
    ]
  }
}

function getPackageTestConfig (path, projects, config = {}) {
  return {
    rootDir: path,
    projects,
    watchPlugins: [
      'jest-watch-select-projects',
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname'
    ],
    ...config
  }
}

function getSuiteIdent (pack, specifier) {
  return `${pack.name}-${specifier}`
}

function getSuiteName (pack, specifier) {
  return `${pack.name.replace('nakupuj-bez-andreje-', '')} ${specifier}`
}

function setupJest () {
  const Enzyme = require('enzyme')
  const Adapter = require('enzyme-adapter-react-16')
  Enzyme.configure({ adapter: new Adapter() })
}

function setupMoment () {
  const moment = require('moment-timezone')
  moment.tz.setDefault('UTC')
}

module.exports = {
  getBabelConfig,
  getIntegrationTestConfig,
  getLinterTestConfig,
  getPackageTestConfig,
  setupJest,
  setupMoment
}
