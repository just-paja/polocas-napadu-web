const { getPackageTestConfig } = require('./dev')
const { resolve } = require('path')

const core = require('./packages/core/jest.config')
const inspirations = require('./packages/inspirations/jest.config')
const referee = require('./packages/referee/jest.config')
const scoreboard = require('./packages/scoreboard/jest.config')

const config = {
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx}'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/locales/',
    '/constants/',
  ],
}

module.exports = getPackageTestConfig(__dirname, [
  ...core.projects,
  ...inspirations.projects,
  ...referee.projects,
  ...scoreboard.projects
], config)
