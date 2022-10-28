module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  rootDir: 'src',
  testRegex: '.*\\.test\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: [
    '**/*.(t|j)s',
    '!**/*.module.ts',
    '!config/configuration.ts',
    '!context.ts',
    '!main.ts',
    '!server.ts',
  ],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  testResultsProcessor: 'jest-sonar-reporter',
  reporters: ['default', 'jest-junit'],
}
