const pack = require('./package')

const { getIntegrationTestConfig } = require('../../dev')

module.exports = getIntegrationTestConfig(pack, __dirname)
