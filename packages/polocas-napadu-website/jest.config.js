module.exports = {
  setupFiles: [
    '<rootDir>/jest.setup.js',
    'jest-date-mock',
  ],
  setupFilesAfterEnv: ['jest-enzyme/lib/index.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
};
