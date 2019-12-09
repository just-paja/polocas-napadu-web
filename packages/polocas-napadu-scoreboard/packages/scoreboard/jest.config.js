const { resolve } = require('path')

const standard = require('./jest.standard.config.js')
const integration = require('./jest.integration.config.js')

process.env.NODE_PATH = resolve(__dirname, '..')

module.exports = {
  rootDir: __dirname,
  projects: [
    integration,
    standard
  ],
  watchPlugins: ['jest-watch-select-projects']
}
