const { getPackageTestConfig } = require('./dev')

const improvMatchInspirations = require('./packages/improv-match-inspirations/jest.config')
const improvMatchReferee = require('./packages/improv-match-referee/jest.config')
const improvMatchScoreboard = require('./packages/improv-match-scoreboard/jest.config')
const polocasNapaduCore = require('./packages/polocas-napadu-core/jest.config')
const polocasNapaduWebsite = require('./packages/polocas-napadu-website/jest.config')

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
    ...improvMatchInspirations.projects,
    ...improvMatchReferee.projects,
    ...improvMatchScoreboard.projects,
    ...polocasNapaduCore.projects,
    ...polocasNapaduWebsite.projects
  ],
  config
)
