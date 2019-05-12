const NextI18Next = require('next-i18next/dist/commonjs')
const defaultSettings = require('./i18n.config')

module.exports = new NextI18Next(defaultSettings)
module.exports.defaultSettings = defaultSettings
