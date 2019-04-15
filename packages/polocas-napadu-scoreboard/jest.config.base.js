module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  testRegex: '(/__tests__/.*.(jsx?))$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/locales/',
    '/constants/'
  ],
  verbose: true
}
