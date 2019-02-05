module.exports = {
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests',
  ],
  testRegex: '(/tests/.*.(test|spec)).(jsx?)$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['(tests/.*.mock).(jsx?)$'],
  verbose: true,
};
