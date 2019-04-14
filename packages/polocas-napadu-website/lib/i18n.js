const NextI18Next = require('next-i18next').default

const defaultSettings = {
  defaultLanguage: 'cs',
  fallbackLng: 'en',
  localeSubpaths: 'foreign',
  otherLanguages: ['en']
}

module.exports = new NextI18Next(defaultSettings)
module.exports.defaultSettings = defaultSettings
