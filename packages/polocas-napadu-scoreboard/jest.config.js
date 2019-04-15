const base = require('./jest.config.base.js')

module.exports = {
  ...base,
  projects: [
    '<rootDir>/packages/*/jest.config.js',
    {
      displayName: 'linter',
      runner: 'jest-runner-standard',
      testMatch: [
        '<rootDir>/**/*.{js,jsx}'
      ],
      testPathIgnorePatterns: [
        '/build/',
        '/coverage/',
        '/node_modules/',
        '/static/'
      ]
    }
  ],
  coverageDirectory: '<rootDir>/coverage/'
}
