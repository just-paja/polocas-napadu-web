const { filterSuiteName, guessRootConfig } = require('lerna-jest')

filterSuiteName(name => name.replace(/^polocas-napadu-/, ''))

module.exports = guessRootConfig(__dirname)
