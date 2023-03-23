const { join } = require('path')
const { guessRootConfig } = require('lerna-jest')

module.exports = guessRootConfig(__dirname)

const jsdomProjects = [
  '@polocas-napadu/inspirations-integration',
  '@polocas-napadu/referee-integration',
  '@polocas-napadu/scoreboard-integration',
  '@polocas-napadu/scoreboard-integration',
  '@polocas-napadu/website-integration',
]

for (const project of module.exports.projects) {
  project.testPathIgnorePatterns.push('/build/')
  project.moduleNameMapper = {
    ...project.moduleNameMapper,
    '^.+\\.md$': 'markdown-loader-jest',
    '.+\\.svg': 'jest-svg-transformer',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      join(__dirname, '__jest__', 'fileMock.js'),
  }
  if (jsdomProjects.includes(project.displayName)) {
    project.testEnvironment = 'jsdom'
  }
}

console.log(module.exports.projects.map(p => p.transform))
