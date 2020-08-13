const pack = require('./package')
const { getLinterTestConfig } = require('../../dev')

module.exports = getLinterTestConfig(pack, __dirname)
