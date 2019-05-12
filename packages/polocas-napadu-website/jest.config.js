module.exports = {
  projects: [
    {
      displayName: 'linter',
      runner: 'jest-runner-standard',
      testMatch: [
        '<rootDir>/**/*.{js,jsx}'
      ],
      testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
    },
    {
      displayName: 'website',
      setupFiles: [
        '<rootDir>/jest.setup.js',
        'jest-date-mock'
      ],
      setupFilesAfterEnv: ['jest-enzyme/lib/index.js'],
      testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
      collectCoverageFrom: [
        'src/**/*.{js,jsx}'
      ],
      coveragePathIgnorePatterns: [
        '/node_modules/',
        '/locales/',
        '/constants/'
      ],
      transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '.+\\.scss$': 'jest-css-modules-transform'
      }
    }
  ]
}
