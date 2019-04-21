const NextI18Next = require('next-i18next/dist/commonjs')

const defaultSettings = {
  localeSubpaths: 'foreign',
  otherLanguages: ['cs']
}

module.exports = new NextI18Next(defaultSettings)
module.exports.defaultSettings = defaultSettings
