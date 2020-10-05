const { getPackageTestConfig } = require('./dev')

const longformanWebsite = require('./packages/longforman-website/jest.config')
const matchInspirations = require('./packages/match-inspirations/jest.config')
const matchReferee = require('./packages/match-referee/jest.config')
const matchScoreboard = require('./packages/match-scoreboard/jest.config')
const polocasNapaduCore = require('./packages/core/jest.config')
const polocasNapaduWebsite = require('./packages/website/jest.config')

const config = {
  collectCoverageFrom: [
    '**/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/*.config.js'
  ]
}

module.exports = getPackageTestConfig(
  __dirname,
  [
    ...longformanWebsite.projects,
    ...matchInspirations.projects,
    ...matchReferee.projects,
    ...matchScoreboard.projects,
    ...polocasNapaduCore.projects,
    ...polocasNapaduWebsite.projects
  ],
  config
)
