const { join } = require('path')
const { filterSuiteName, guessRootConfig } = require('lerna-jest')

filterSuiteName(name => name.replace(/^polocas-napadu-/, ''))

module.exports = guessRootConfig(__dirname)

const jsdomProjects = ['match-scoreboard-integration', 'website-integration']

for (const project of module.exports.projects) {
  project.testPathIgnorePatterns.push('/build/')
  project.moduleNameMapper = {
    ...project.moduleNameMapper,
    '^.+\\.md$': 'markdown-loader-jest',
    '.+\\.svg': 'jest-svg-transformer',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|scss|css)$':
      join(__dirname, 'packages', '__jest__', 'fileMock.js'),
  }
  if (project.transform) {
    project.transform = Object.fromEntries(
      Object.entries(project.transform).map(([key, value]) =>
        value === 'babel-jest'
          ? [key, ['babel-jest', { rootMode: 'upward' }]]
          : [key, value]
      )
    )
  }
  if (jsdomProjects.includes(project.displayName)) {
    project.testEnvironment = 'jsdom'
  }
}
