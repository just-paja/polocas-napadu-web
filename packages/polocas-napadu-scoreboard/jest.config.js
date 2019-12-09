const { resolve } = require('path')

const scoreboardIntegration = require('./packages/scoreboard/jest.integration.config')
const scoreboardLinter = require('./packages/scoreboard/jest.standard.config')
// const base = require('./jest.config.base.js')

process.env.NODE_PATH = resolve(__dirname, 'packages')

module.exports = {
  // ...base,
  rootDir: __dirname,
  projects: [
    scoreboardIntegration,
    scoreboardLinter
  ],
  watchPlugins: ['jest-watch-select-projects']
  // coverageDirectory: '<rootDir>/coverage/'
}
