const { resolve } = require('path')

const referee = require('./packages/referee/jest.config')
const scoreboard = require('./packages/scoreboard/jest.config')

process.env.NODE_PATH = resolve(__dirname, 'packages')

module.exports = {
  rootDir: __dirname,
  projects: [
    ...referee.projects,
    ...scoreboard.projects
  ],
  watchPlugins: ['jest-watch-select-projects']
  // coverageDirectory: '<rootDir>/coverage/'
}
